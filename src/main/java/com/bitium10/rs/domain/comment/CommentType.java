package com.bitium10.rs.domain.comment;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.domain.comment <br>
 * <b>类名称</b>： CommentType <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:shouli1990@gmail.com">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 21:21
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public enum CommentType {
    CUSTOMER(1,"用户"),
    MERCHANT(2,"商户"),
    ARTICLE(3,"文章"),
    PICTURE(4,"图片"),
    DOWNLOAD(5,"下载");

    private int code;
    private String desc;

    CommentType(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }
}
