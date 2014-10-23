package com.bitium10.rs.domain.cms;

import com.bitium10.rs.domain.User;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.search.annotations.Analyzer;
import org.hibernate.search.annotations.Indexed;
import org.wltea.analyzer.lucene.IKAnalyzer;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.domain <br>
 * <b>类名称</b>： Article <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:wylipengming@chinabank.com.cn">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 13:21
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
@Entity
@Table(name = "cms_article")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Indexed
@Analyzer(impl = IKAnalyzer.class)
public class Article {
    private static final long serialVersionUID = 1L;
    private Long id;		// 编号
    private Category category;// 分类编号
    private User user;		// 发布者
    private String title;	// 标题
    private String color;	// 标题颜色（red：红色；green：绿色；blue：蓝色；yellow：黄色；orange：橙色）
    private String thumb;	// 缩略图
    private String keywords;// 关键字
    private String desciption;// 描述、摘要
    private String status;	// 状态状态（0：发布；1：删除；2：审核；）
    private Integer weight;	// 权重，越大越靠前
    private Integer hits;	// 点击数
    private String posid;	// 推荐位，多选（1：首页焦点图；2：栏目页文章推荐；）
    private Date inputDate;	// 录入时间
    private Date updateDate;// 更新时间

    private ArticleData articleData;	//文章副表
}
