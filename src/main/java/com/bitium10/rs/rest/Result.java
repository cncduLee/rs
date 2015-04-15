/**
 * Copyright (c) 2014, shouli1990@gmail.com|shouli1990@gmail.com. All rights reserved.
 *
 */
package com.bitium10.rs.rest;

import java.io.Serializable;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.rest <br>
 * <b>类名称</b>： Result <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:shouli1990@gmail.com">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2015/4/14 21:36<br>
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public class Result<T> implements Serializable {
    private String  code;
    private boolean isSuccess = Boolean.FALSE;
    private T       data;

    public Result() {
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public boolean isSuccess() {
        return isSuccess;
    }

    public void setSuccess(boolean isSuccess) {
        this.isSuccess = isSuccess;
    }
}
