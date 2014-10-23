package com.bitium10.rs.domain.customer;

import com.bitium10.rs.domain.area.Area;
import com.bitium10.rs.domain.BaseEntity;

import java.util.Date;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.domain <br>
 * <b>类名称</b>： User <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:wylipengming@chinabank.com.cn">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 13:30
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public class User extends BaseEntity {
    private static final long serialVersionUID = 1L;
    private Long id;		// 编号
    private Area area;		// 归属区域
    private String loginName;// 登录名
    private String password;// 密码
    private String name;	// 姓名
    private String email;	// 邮箱
    private String phone;	// 电话
    private String mobile;	// 手机
    private String remarks;	// 备注
    private String userType;// 备注
    private Date createDate;// 创建日期
    private String delFlag;	// 删除标记（0：正常；1：删除）
    private String loginIp;	// 最后登陆IP
    private Date loginDate;	// 最后登陆日期
}
