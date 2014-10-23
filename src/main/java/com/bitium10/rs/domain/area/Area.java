package com.bitium10.rs.domain.area;

import com.bitium10.rs.domain.BaseEntity;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.domain <br>
 * <b>类名称</b>： Area <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:wylipengming@chinabank.com.cn">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 21:40
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public class Area extends BaseEntity {
    private Long id;		// 编号
    private Integer parentId;//父级行政单位id
    private Integer level;//行政单位等级
    private String name;//行政单位名字
    private Integer code;//行政单位代码
    private String shortName;//拼音首字母(大写)
    private Integer orderId;//排序id
    private String remarks; // 备注
    private String delFlag; // 删除标记（0：正常；1：删除）

}
