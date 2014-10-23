package com.bitium10.rs.web;

import com.bitium10.rs.common.utils.FileUtils;
import com.ckfinder.connector.ConnectorServlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.web <br>
 * <b>类名称</b>： CKFinderConnectorServlet <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:wylipengming@chinabank.com.cn">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 11:41
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public class CKFinderServlet extends ConnectorServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws ServletException, IOException {
        prepareGetResponse(request, response, false);
        super.doGet(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response) throws ServletException, IOException {
        prepareGetResponse(request, response, true);
        super.doPost(request, response);
    }

    private void prepareGetResponse(final HttpServletRequest request,
                                    final HttpServletResponse response, final boolean post) throws ServletException {
        String command = request.getParameter("command");
        String type = request.getParameter("type");
        // 初始化时，如果startupPath文件夹不存在，则自动创建startupPath文件夹
//        if ("Init".equals(command)){
//            User user = UserUtils.getUser();
//            if (user!=null){
//                String startupPath = request.getParameter("startupPath");// 当前文件夹可指定为模块名
//                if (startupPath!=null){
//                    String[] ss = startupPath.split(":");
//                    if (ss.length==2){
//                        String path = "/userfiles/"+user.getId()+"/"+ss[0]+ss[1];
//                        String realPath = request.getSession().getServletContext().getRealPath(path);
//                        FileUtils.createDirectory(realPath);
//                    }
//                }
//            }
//        }
//        // 快捷上传，自动创建当前文件夹，并上传到该路径
//        else if ("QuickUpload".equals(command) && type!=null){
//            User user = UserUtils.getUser();
//            if (user!=null){
//                String currentFolder = request.getParameter("currentFolder");// 当前文件夹可指定为模块名
//                String path = "/userfiles/"+user.getId()+"/"+type+(currentFolder!=null?currentFolder:"");
//                String realPath = request.getSession().getServletContext().getRealPath(path);
//                FileUtils.createDirectory(realPath);
//            }
//        }
    }

}
