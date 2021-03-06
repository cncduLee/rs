package com.bitium10.rs.domain.cms;

import com.bitium10.rs.domain.BaseEntity;
import com.bitium10.rs.domain.customer.User;
import com.google.common.collect.Lists;
import org.apache.commons.lang3.StringUtils;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;
import org.hibernate.search.annotations.*;
import org.hibernate.validator.constraints.NotBlank;
import org.wltea.analyzer.lucene.IKAnalyzer;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.domain <br>
 * <b>类名称</b>： Article <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:shouli1990@gmail.com">李朋明</a> <br>
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
public class Article extends BaseEntity {
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

    public Article() {
        this.status = STATUS_RELEASE;
        this.weight = 0;
        this.hits = 0;
        this.posid = "";
        this.inputDate = new Date();
        this.updateDate = new Date();
    }

    public Article(Long id){
        this();
        this.id = id;
    }

    public Article(Category category){
        this();
        this.category = category;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @ManyToOne
    @JoinColumn(name="category_id")
    @NotFound(action = NotFoundAction.IGNORE)
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @ManyToOne
    @JoinColumn(name="user_id")
    @NotFound(action = NotFoundAction.IGNORE)
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @NotBlank
    @Size(min=0, max=255)
    @Field(index= Index.YES, analyze= Analyze.YES, store=Store.NO)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Size(min=0, max=50)
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Size(min=0, max=255)
    public String getThumb() {
        return thumb;
    }

    public void setThumb(String thumb) {
        this.thumb = thumb;
    }

    @Size(min=0, max=255)
    @Field(index=Index.YES, analyze=Analyze.YES, store=Store.NO)
    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    @Size(min=0, max=255)
    @Field(index=Index.YES, analyze=Analyze.YES, store=Store.NO)
    public String getDesciption() {
        return desciption;
    }

    public void setDesciption(String desciption) {
        this.desciption = desciption;
    }

    @Size(min=0, max=1)
    @Field(index=Index.YES, analyze=Analyze.NO, store=Store.YES)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Integer getHits() {
        return hits;
    }

    public void setHits(Integer hits) {
        this.hits = hits;
    }

    @Size(min=0, max=10)
    public String getPosid() {
        return posid;
    }

    public void setPosid(String posid) {
        this.posid = posid;
    }

    public Date getInputDate() {
        return inputDate;
    }

    public void setInputDate(Date inputDate) {
        this.inputDate = inputDate;
    }

    @Field(index=Index.YES, analyze=Analyze.NO, store=Store.YES)
    @DateBridge(resolution = Resolution.DAY)
    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    @OneToOne(mappedBy="article",cascade=CascadeType.ALL,optional=false)
    @IndexedEmbedded
    public ArticleData getArticleData() {
        return articleData;
    }

    public void setArticleData(ArticleData articleData) {
        this.articleData = articleData;
    }

    @Transient
    public List<String> getPosidList() {
        List<String> list = Lists.newArrayList();
        if (posid != null){
            for (String s : StringUtils.split(posid, ",")) {
                list.add(s);
            }
        }
        return list;
    }

    @Transient
    public void setPosidList(List<Long> list) {
        posid = ","+StringUtils.join(list, ",")+",";
    }
}
