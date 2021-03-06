/**
 * Copyright (c) 2014, shouli1990@gmail.com|shouli1990@gmail.com. All rights reserved.
 *
 */
package com.bitium10.rs.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.web <br>
 * <b>类名称</b>： AboutController <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:shouli1990@gmail.com">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/12/14 10:38
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
@Controller
public class AboutController extends BaseController {
    @RequestMapping(value = "/about.htm")
    public String index(Model model,HttpServletRequest request){
        return "about";
    }
}
