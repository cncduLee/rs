package com.bitium10.rs.domain.cms;

import com.bitium10.rs.domain.BaseEntity;
import com.google.common.collect.Lists;
import org.hibernate.annotations.*;
import org.hibernate.annotations.Cache;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import java.util.List;

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

    private List<Category> childList = Lists.newArrayList();

    public Category(){
        this.sort = 30;
        this.inMenu = SHOW;
        this.inList = SHOW;
        this.showModes = "0";
        this.allowComment = YES;
        this.delFlag = DEL_FLAG_NORMAL;
    }

    public Category(Long id){
        this();
        this.id = id;
    }

    public Category(Long id, Site site){
        this();
        this.id = id;
        this.setSite(site);
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="site_id")
    @NotFound(action = NotFoundAction.IGNORE)
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    public Site getSite() {
        return site;
    }

    public void setSite(Site site) {
        this.site = site;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="parent_id")
    @NotFound(action = NotFoundAction.IGNORE)
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    public Category getParent() {
        return parent;
    }

    public void setParent(Category parent) {
        this.parent = parent;
    }

    public String getParentIds() {
        return parentIds;
    }

    public void setParentIds(String parentIds) {
        this.parentIds = parentIds;
    }

    @Size(min=0, max=20)
    public String getModule() {
        return module;
    }

    public void setModule(String module) {
        this.module = module;
    }

    @NotBlank
    @Size(min=0, max=100)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Size(min=0, max=255)
    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Size(min=0, max=255)
    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }

    @Size(min=0, max=20)
    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    @Size(min=0, max=255)
    public String getDesciption() {
        return desciption;
    }

    public void setDesciption(String desciption) {
        this.desciption = desciption;
    }

    @Size(min=0, max=255)
    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public Integer getSort() {
        return sort;
    }

    public void setSort(Integer sort) {
        this.sort = sort;
    }

    @Size(min=0, max=1)
    public String getInMenu() {
        return inMenu;
    }

    public void setInMenu(String inMenu) {
        this.inMenu = inMenu;
    }

    @Size(min=0, max=1)
    public String getInList() {
        return inList;
    }

    public void setInList(String inList) {
        this.inList = inList;
    }

    @Size(min=0, max=1)
    public String getShowModes() {
        return showModes;
    }

    public void setShowModes(String showModes) {
        this.showModes = showModes;
    }

    @Size(min=0, max=1)
    public String getAllowComment() {
        return allowComment;
    }

    public void setAllowComment(String allowComment) {
        this.allowComment = allowComment;
    }

    public String getDelFlag() {
        return delFlag;
    }

    public void setDelFlag(String delFlag) {
        this.delFlag = delFlag;
    }

    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE},fetch=FetchType.LAZY,mappedBy="parent")
    @Where(clause="del_flag='"+DEL_FLAG_NORMAL+"'")
    @OrderBy(value="sort")
    @NotFound(action = NotFoundAction.IGNORE)
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    public List<Category> getChildList() {
        return childList;
    }

    public void setChildList(List<Category> childList) {
        this.childList = childList;
    }

    @Transient
    public static void sortList(List<Category> list, List<Category> sourcelist, Long parentId){
        for (int i=0; i<sourcelist.size(); i++){
            Category e = sourcelist.get(i);
            if (e.getParent()!=null && e.getParent().getId()!=null
                    && e.getParent().getId().equals(parentId)){
                list.add(e);
                // 判断是否还有子节点, 有则继续获取子节点
                for (int j=0; j<sourcelist.size(); j++){
                    Category child = sourcelist.get(j);
                    if (child.getParent()!=null && child.getParent().getId()!=null
                            && child.getParent().getId().equals(e.getId())){
                        sortList(list, sourcelist, e.getId());
                        break;
                    }
                }
            }
        }
    }

    @Transient
    public boolean isRoot(){
        return isRoot(this.id);
    }

    @Transient
    public static boolean isRoot(Long id){
        return id != null && id.equals(1L);
    }
}
