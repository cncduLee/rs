/**
 * Copyright (c) 2014, shouli1990@gmail.com. All rights reserved.
 *
 */
package com.bitium10.rs.web;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.web <br>
 * <b>类名称</b>： BaseController <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:wylipengming@chinabank.com.cn">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/11/20 19:46
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public class BaseController {



    public static void main(String[] args) {
        System.out.println(ff(50));
    }

    public static double ff(int a){
        if(a == 0){
            return 1;
        }
        return f(a) + ff(a-1);
    }

    public static double f(int a){
        if(a < 1){
            return 1;
        }
        return 2 * f(a-1);
    }
}
