package com.bitium10.rs.common.cache;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.common.cache <br>
 * <b>类名称</b>： ICache <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:wylipengming@chinabank.com.cn">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/27 15:43
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public interface ICache {
    Object get(String key);
    Object get(String cacheName,String key);
    void put(String key,Object value);
    void put(String cacheName,String key,Object value);
    void remove(String key);
    void remove(String cacheName,String key);
}
