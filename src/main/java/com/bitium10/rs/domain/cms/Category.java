package com.bitium10.rs.domain.cms;

import com.bitium10.rs.domain.BaseEntity;
import com.bitium10.rs.domain.Site;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.domain <br>
 * <b>类名称</b>： Category <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:wylipengming@chinabank.com.cn">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 13:28
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
@Entity
@Table(name = "cms_category")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Category extends BaseEntity {

    private static final long serialVersionUID = 1L;
    private Long id;		// 编号
    private Site site;		// 归属站点
    private Category parent;// 父级菜单
    private String parentIds;// 所有父级编号
    private String module; 	// 栏目模型（article：文章；picture：图片；download：下载；link：链接；special：专题）
    private String name; 	// 栏目名称
    private String image; 	// 栏目图片
    private String href; 	// 链接
    private String target; 	// 目标（ _blank、_self、_parent、_top）
    private String desciption; 	// 描述，填写有助于搜索引擎优化
    private String keywords; 	// 关键字，填写有助于搜索引擎优化
    private Integer sort; 		// 排序（升序）
    private String inMenu; 		// 是否在导航中显示（1：显示；0：不显示）
    private String inList; 		// 是否在分类页中显示列表（1：显示；0：不显示）
    private String showModes; 	// 展现方式（0:有子栏目显示栏目列表，无子栏目显示内容列表;1：首栏目内容列表；2：栏目第一条内容）
    private String allowComment;// 是否允许评论
    private String delFlag; 	// 删除标记（0：正常；1：删除）
}
