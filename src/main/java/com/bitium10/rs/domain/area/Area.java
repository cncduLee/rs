package com.bitium10.rs.domain.area;

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
 * <b>类名称</b>： Area <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:shouli1990@gmail.com">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 21:40
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
@Entity
@Table(name = "sys_area")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Area extends BaseEntity {
    private Long id;		// 编号
    private Area parent;	// 父级编号
    private String parentIds; // 所有父级编号
    private String name; 	// 区域名称
    private String code; 	// 区域编码
    private String remarks; // 备注
    private String delFlag; // 删除标记（0：正常；1：删除）

    private List<Area> childList = Lists.newArrayList();	// 拥有子区域列表

    public Area(){
        this.delFlag = DEL_FLAG_NORMAL;
    }

    public Area(Long id){
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="parent_id")
    @NotFound(action = NotFoundAction.IGNORE)
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    public Area getParent() {
        return parent;
    }

    public void setParent(Area parent) {
        this.parent = parent;
    }

    public String getParentIds() {
        return parentIds;
    }

    public void setParentIds(String parentIds) {
        this.parentIds = parentIds;
    }

    @NotBlank
    @Size(min=0, max=100)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Size(min=0, max=100)
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Size(min=0, max=255)
    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getDelFlag() {
        return delFlag;
    }

    public void setDelFlag(String delFlag) {
        this.delFlag = delFlag;
    }

    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE},fetch=FetchType.LAZY,mappedBy="parent")
    @Where(clause="del_flag='"+DEL_FLAG_NORMAL+"'")
    @OrderBy(value="code")
    @NotFound(action = NotFoundAction.IGNORE)
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    public List<Area> getChildList() {
        return childList;
    }

    public void setChildList(List<Area> childList) {
        this.childList = childList;
    }

    @Transient
    public static void sortList(List<Area> list, List<Area> sourcelist, Long parentId){
        for (int i=0; i<sourcelist.size(); i++){
            Area e = sourcelist.get(i);
            if (e.getParent()!=null && e.getParent().getId()!=null
                    && e.getParent().getId().equals(parentId)){
                list.add(e);
                // 判断是否还有子节点, 有则继续获取子节点
                for (int j=0; j<sourcelist.size(); j++){
                    Area childe = sourcelist.get(j);
                    if (childe.getParent()!=null && childe.getParent().getId()!=null
                            && childe.getParent().getId().equals(e.getId())){
                        sortList(list, sourcelist, e.getId());
                        break;
                    }
                }
            }
        }
    }

    @Transient
    public boolean isAdmin(){
        return isAdmin(this.id);
    }

    @Transient
    public static boolean isAdmin(Long id){
        return id != null && id.equals(1L);
    }
}
