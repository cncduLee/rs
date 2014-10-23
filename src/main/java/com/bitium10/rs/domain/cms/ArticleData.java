package com.bitium10.rs.domain.cms;

import com.bitium10.rs.domain.BaseEntity;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.domain <br>
 * <b>类名称</b>： ArticleData <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:wylipengming@chinabank.com.cn">李朋明</a> <br>
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

}
