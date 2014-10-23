package com.bitium10.rs.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.domain <br>
 * <b>类名称</b>： Site <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:wylipengming@chinabank.com.cn">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 13:29
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
@Entity
@Table(name = "cms_site")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Site extends BaseEntity {

    private static final long serialVersionUID = 1L;
    private Long id;		// 编号
    private String name;	// 站点名称
    private String title;	// 站点标题
    private String desciption;// 描述，填写有助于搜索引擎优化
    private String keywords;// 关键字，填写有助于搜索引擎优化
    private String theme;	// 主题
    private String copyright;// 版权信息
    private String delFlag; // 删除标记（0：正常；1：删除）
}
