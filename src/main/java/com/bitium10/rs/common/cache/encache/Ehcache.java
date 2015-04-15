package com.bitium10.rs.common.cache.encache;

import com.bitium10.rs.common.cache.ICache;
import net.sf.ehcache.CacheManager;
import net.sf.ehcache.Element;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.common.cache.encache <br>
 * <b>类名称</b>： Encache <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:shouli1990@gmail.com">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/27 15:46
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
@Component("ehcache")
@Scope("singleton")
public class Ehcache implements ICache {
    private final static Logger logger = LoggerFactory.getLogger(Ehcache.class);
    private static final String SYS_CACHE = "SYS_CACHE";

    @Resource
    private CacheManager customEhcacheManager;

    @Override
    public Object get(String key) {
        return get(SYS_CACHE,key);
    }

    @Override
    public void put(String key, Object value) {
        put(SYS_CACHE,key,value);
    }

    @Override
    public void remove(String key) {
        remove(SYS_CACHE,key);
    }

    public Object get(String cacheName, String key) {
        Element element = customEhcacheManager.getCache(cacheName).get(key);
        return element==null?null:element.getObjectValue();
    }

    public void put(String cacheName, String key, Object value) {
        Element element = new Element(key, value);
        customEhcacheManager.getCache(cacheName).put(element);
    }

    public void remove(String cacheName, String key) {
        customEhcacheManager.getCache(cacheName).remove(key);
    }
}
