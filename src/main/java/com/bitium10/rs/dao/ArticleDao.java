package com.bitium10.rs.dao;

import com.bitium10.rs.dao.impl.BaseDaoImpl;
import com.bitium10.rs.domain.cms.Article;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.dao <br>
 * <b>类名称</b>： ArticleDao <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:wylipengming@chinabank.com.cn">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 13:25
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public interface ArticleDao extends ArticleDaoCustom, CrudRepository<Article, Long> {
    @Modifying
    @Query("update Article set status=?2 where id = ?1")
    public int updateStatus(Long id, String status);

    public List<Article> findByIdIn(Long[] ids);

    @Modifying
    @Query("update Article set hits=hits+1 where id = ?1")
    public int updateHitsAddOne(Long id);
}

interface ArticleDaoCustom extends BaseDao<Article> {

}

@Component
class ArticleDaoImpl extends BaseDaoImpl<Article> implements ArticleDaoCustom {

}
