package com.bitium10.rs.service;

import com.bitium10.rs.common.persistence.Page;
import com.bitium10.rs.common.utils.StringUtils;
import com.bitium10.rs.dao.ArticleDao;
import com.bitium10.rs.dao.CategoryDao;
import com.bitium10.rs.domain.cms.Article;
import com.bitium10.rs.domain.cms.Category;
import com.google.common.collect.Lists;
import org.apache.commons.beanutils.ConvertUtils;
import org.apache.lucene.index.Term;
import org.apache.lucene.search.*;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.service <br>
 * <b>类名称</b>： ArticleService <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:wylipengming@chinabank.com.cn">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/26 13:41
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public class ArticleService {
    private static Logger logger = LoggerFactory.getLogger(ArticleService.class);

    @Autowired
    private ArticleDao articleDao;
    @Autowired
    private CategoryDao categoryDao;

    public Article get(Long id) {
        return articleDao.findOne(id);
    }

    public Page<Article> find(Page<Article> page, Article article) {
        DetachedCriteria dc = articleDao.createDetachedCriteria();
        dc.createAlias("category", "category");
        dc.createAlias("category.site", "category.site");
        if (article.getCategory() != null && article.getCategory().getId() != null && !Category.isRoot(article.getCategory().getId())) {
            Category category = categoryDao.findOne(article.getCategory().getId());
            if (category != null) {
                dc.add(Restrictions.or(
                        Restrictions.eq("category.id", category.getId()),
                        Restrictions.eq("category.parent.id", category.getId()),
                        Restrictions.like("category.parentIds", "%," + category.getId() + ",%")));
                dc.add(Restrictions.eq("category.site.id", category.getSite().getId()));
                article.setCategory(category);
            } else {
                //dc.add(Restrictions.eq("category.site.id", Site.getCurrentSiteId()));
            }
        } else {
            //dc.add(Restrictions.eq("category.site.id", Site.getCurrentSiteId()));
        }
        if (StringUtils.isNotEmpty(article.getTitle())) {
            dc.add(Restrictions.like("title", "%" + article.getTitle() + "%"));
        }
        if (StringUtils.isNotEmpty(article.getPosid())) {
            dc.add(Restrictions.like("posid", "%," + article.getPosid() + ",%"));
        }
        if (StringUtils.isNotEmpty(article.getThumb()) && "1".equals(article.getThumb())) {
            dc.add(Restrictions.and(Restrictions.isNotNull("thumb"), Restrictions.ne("thumb", "")));
        }
        if (article.getUser() != null && article.getUser().getId() > 0) {
            dc.add(Restrictions.eq("user.id", article.getUser().getId()));
        }
        dc.add(Restrictions.eq("status", article.getStatus()));
        dc.addOrder(Order.desc("weight"));
        dc.addOrder(Order.desc("updateDate"));
        return articleDao.find(page, dc);
    }

    @Transactional(readOnly = false)
    public void save(Article article) {
        article.setUpdateDate(new Date());
        articleDao.clear();
        articleDao.save(article);
    }

    @Transactional(readOnly = false)
    public void delete(Long id, Boolean isRe) {
        // 使用下面方法，以便更新索引。
        Article article = articleDao.findOne(id);
        article.setStatus(isRe != null && isRe ? Article.STATUS_RELEASE : Article.STATUS_DELETE);
        articleDao.save(article);
    }

    /**
     * 通过编号获取内容标题
     *
     * @return new Object[]{栏目Id,文章Id,文章标题}
     */
    public List<Object[]> findByIds(String ids) {
        List<Object[]> list = Lists.newArrayList();
        Long[] idss = (Long[]) ConvertUtils.convert(StringUtils.split(ids, ","), Long.class);
        if (idss.length > 0) {
            List<Article> l = articleDao.findByIdIn(idss);
            for (Article e : l) {
                list.add(new Object[]{e.getCategory().getId(), e.getId(), StringUtils.abbreviate(e.getTitle(), 20)});
            }
        }
        return list;
    }

    @Transactional(readOnly = false)
    public void updateHitsAddOne(Long id) {
        articleDao.updateHitsAddOne(id);
    }

    public void createIndex() {
        articleDao.createIndex(Article.class);
    }

    /**
     * 全文检索
     * @param page
     * @param q
     * @return
     */
    public Page<Article> search(Page<Article> page, String q) {

        // 设置查询条件
        BooleanQuery query = articleDao.getFullTextQuery(q, "title", "keywords", "desciption", "articleData.content");
        // 设置过滤条件
        BooleanQuery queryFilter = articleDao.getFullTextQuery(new BooleanClause(
                new TermQuery(new Term("status", Article.STATUS_RELEASE)), BooleanClause.Occur.MUST));
        // 设置排序
        Sort sort = new Sort(new SortField("updateDate", SortField.DOC, true));
        // 全文检索
        articleDao.search(page, query, queryFilter, sort);
        // 关键字高亮
        articleDao.keywordsHighlight(query, page.getList(), "desciption", "articleData.content");

        return page;
    }
}
