package com.bitium10.rs.common.utils;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.Map;
/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.common.utils <br>
 * <b>类名称</b>： StringUtils <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:shouli1990@gmail.com">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 9:46
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public class StringUtils extends org.apache.commons.lang.StringUtils {
    /**
     * 替换掉HTML标签
     * @param html
     * @return
     */
    public static String replaceHtml(String html){
        String regEx = "<.+?>";
        Pattern p = Pattern.compile(regEx);
        Matcher m = p.matcher(html);
        String s = m.replaceAll("");
        return s;
    }

}
