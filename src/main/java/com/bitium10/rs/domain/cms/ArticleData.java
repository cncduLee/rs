package com.bitium10.rs.domain.cms;

import com.bitium10.rs.domain.BaseEntity;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.search.annotations.Analyze;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Index;
import org.hibernate.search.annotations.Store;

import javax.persistence.*;
import javax.validation.constraints.Size;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.domain <br>
 * <b>类名称</b>： ArticleData <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:shouli1990@gmail.com">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 13:30
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
@Entity
@Table(name = "cms_article_data")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ArticleData extends BaseEntity {
    private static final long serialVersionUID = 1L;
    private Long id;		// 编号
    private String content;	// 内容
    private String copyfrom;// 来源
    private String relation;// 相关文章
    private String allowComment;// 是否允许评论

    private Article article;

    public ArticleData() {
        this.allowComment = YES;
    }

    public ArticleData(Long id){
        this();
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Field(index= Index.YES, analyze= Analyze.YES, store= Store.NO)
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Size(min=0, max=255)
    public String getCopyfrom() {
        return copyfrom;
    }

    public void setCopyfrom(String copyfrom) {
        this.copyfrom = copyfrom;
    }

    @Size(min=0, max=255)
    public String getRelation() {
        return relation;
    }

    public void setRelation(String relation) {
        this.relation = relation;
    }

    @Size(min=0, max=1)
    public String getAllowComment() {
        return allowComment;
    }

    public void setAllowComment(String allowComment) {
        this.allowComment = allowComment;
    }

    @OneToOne(cascade={CascadeType.PERSIST,CascadeType.MERGE},optional=false)
    @PrimaryKeyJoinColumn
    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }
}
