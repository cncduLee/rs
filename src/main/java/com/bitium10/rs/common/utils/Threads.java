package com.bitium10.rs.common.utils;

import java.util.concurrent.TimeUnit;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.common.utils <br>
 * <b>类名称</b>： Threads <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:shouli1990@gmail.com">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 9:47
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public class Threads {
    /**
     * sleep等待,单位为毫秒,忽略InterruptedException.
     * @param millis
     */
    public static void sleep(long millis) {
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e) {
            // Ignore.
            return;
        }
    }

    /**
     * sleep等待,忽略InterruptedException.
     * @param duration
     * @param unit
     */
    public static void sleep(long duration, TimeUnit unit) {
        try {
            Thread.sleep(unit.toMillis(duration));
        } catch (InterruptedException e) {
            // Ignore.
            return;
        }
    }
}
