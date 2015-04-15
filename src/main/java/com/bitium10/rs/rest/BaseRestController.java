/**
 * Copyright (c) 2014, shouli1990@gmail.com|shouli1990@gmail.com. All rights reserved.
 *
 */
package com.bitium10.rs.rest;

import com.google.gson.Gson;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.rest <br>
 * <b>类名称</b>： BaseRestController <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:shouli1990@gmail.com">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2015/4/14 21:35<br>
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public class BaseRestController {
    private final static Gson gson = new Gson();

    /**
     * obj to json
     *
     * @param result
     * @return
     */
    protected String toJson(Result result) {
        return gson.toJson(result);
    }

    /**
     * json to obj
     *
     * @param json
     * @param clazz
     * @param <T>
     * @return
     */
    protected <T> T obj(String json,Class<T> clazz) {
        return gson.fromJson(json,clazz);
    }
}
