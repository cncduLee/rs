package com.bitium10.rs.domain.rs;

import com.bitium10.rs.domain.BaseEntity;
import com.bitium10.rs.domain.area.Area;
import com.bitium10.rs.domain.customer.User;

import java.util.Date;
import java.util.List;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.domain.rs <br>
 * <b>类名称</b>： Shop <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:shouli1990@gmail.com">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 21:36
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public class Shop extends BaseEntity {
    private Long id;		    // 编号
    private String name;        //商户
    private String address;     //地址
    private Area areaId;        //位置详情
    private User userId;        //店家信息
    private String description; //店家描述
    private String keywords;    // 关键字
    private String telphone;    //手机
    private String contactPhone;//预约联系电话
    private String qqStr;       //QQ号码
    private String isVisit;     //是否上门:1：上门，0不上门
    private String serviceAreaDesc; //服务区域
    private String serviceDesc;    //服务类目
    private Integer hits;	    // 点击数
    private Integer weight;	    // 权重，越大越靠前
    private String status;	// 状态状态（0：发布；1：删除；2：审核；）

    private String created; //创建人
    private String modified;//更新人
    private Date inputDate;	// 录入时间
    private Date updateDate;// 更新时间

    private ShopDetail shopDetail;//店铺详情

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Area getAreaId() {
        return areaId;
    }

    public void setAreaId(Area areaId) {
        this.areaId = areaId;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public String getTelphone() {
        return telphone;
    }

    public void setTelphone(String telphone) {
        this.telphone = telphone;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public String getQqStr() {
        return qqStr;
    }

    public void setQqStr(String qqStr) {
        this.qqStr = qqStr;
    }

    public String getIsVisit() {
        return isVisit;
    }

    public void setIsVisit(String isVisit) {
        this.isVisit = isVisit;
    }

    public String getServiceAreaDesc() {
        return serviceAreaDesc;
    }

    public void setServiceAreaDesc(String serviceAreaDesc) {
        this.serviceAreaDesc = serviceAreaDesc;
    }

    public String getServiceDesc() {
        return serviceDesc;
    }

    public void setServiceDesc(String serviceDesc) {
        this.serviceDesc = serviceDesc;
    }

    public Integer getHits() {
        return hits;
    }

    public void setHits(Integer hits) {
        this.hits = hits;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCreated() {
        return created;
    }

    public void setCreated(String created) {
        this.created = created;
    }

    public String getModified() {
        return modified;
    }

    public void setModified(String modified) {
        this.modified = modified;
    }

    public Date getInputDate() {
        return inputDate;
    }

    public void setInputDate(Date inputDate) {
        this.inputDate = inputDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public ShopDetail getShopDetail() {
        return shopDetail;
    }

    public void setShopDetail(ShopDetail shopDetail) {
        this.shopDetail = shopDetail;
    }

    @Override
    public String toString() {
        return "Shop{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", areaId=" + areaId +
                ", userId=" + userId +
                ", description='" + description + '\'' +
                ", keywords='" + keywords + '\'' +
                ", telphone='" + telphone + '\'' +
                ", contactPhone='" + contactPhone + '\'' +
                ", qqStr='" + qqStr + '\'' +
                ", isVisit='" + isVisit + '\'' +
                ", serviceAreaDesc='" + serviceAreaDesc + '\'' +
                ", serviceDesc='" + serviceDesc + '\'' +
                ", hits=" + hits +
                ", weight=" + weight +
                ", status='" + status + '\'' +
                ", created='" + created + '\'' +
                ", modified='" + modified + '\'' +
                ", inputDate=" + inputDate +
                ", updateDate=" + updateDate +
                ", shopDetail=" + shopDetail +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Shop shop = (Shop) o;

        if (id != null ? !id.equals(shop.id) : shop.id != null) return false;
        if (name != null ? !name.equals(shop.name) : shop.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }
}
