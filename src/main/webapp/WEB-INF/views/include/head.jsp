<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="create_route_top">
    <a target="_self" class="logo-background-image inntwo_logo_container float_left" href="/" title="亿恒首页">&nbsp;</a>
    <div class="hotel_details_route_ico_container">
        <h2 class='inntwo-text-large'>
            <a target="_self" href="${ctx}/index.htm" class="inntwo_menu_ico" id="mainInntwoMenuIco" title="找服务">找服务</a>
        </h2>
        <h2 class='inntwo-text-large'>
            <span class="create-itinerary-hot itinerary-specification layout-mainmanue-tag"></span>
            <a class="inntwo_menu_ico" target="_self" href="#" title="测评" >
                测评
            </a>
        </h2>
        <h2 class='inntwo-text-large'>
            <a class="inntwo_menu_ico" target="_self" href="#" title="二手卖" >
                二手卖
            </a>
        </h2>
        <h2 class='inntwo-text-large'>
            <a class="inntwo_menu_ico" target="_self" href="${ctx}/post.htm" title="论坛" >
                论坛
            </a>
        </h2>
        <h2 class='inntwo-text-large'>
            <a target="_self" class="inntwo_menu_ico" href="#" >
                <span class="text-appdown">客户端下载</span>
            </a>
        </h2>
    </div>

    <div class="message-show-hint">
        <div class="message-show-hint-text">
            <div class="message-show-hint-close logo-background-image">1</div>
            <div class="message-show-hint-text-detail">
                <span id="messageShowHintResultText"  class="inntwo-text-normal" ></span>
            </div>
        </div>
        <div class="message-show-hint-Ico logo-background-image"></div>
        <div class="message-show-hint-Ico-elephant logo-background-image"></div>
    </div>

    <div class="top_right_container navbar">
        <div class="reginlogin-split" ></div>
        <div class="create_route_reginlogin">

            <!--unlogin-->
            <a target="_self" href="/html/login.html" rel="nofollow" title="登陆亿恒账号" id="homeLoginText" onclick=" return logionButtonClick(); ">登录
            </a>
            <a target="_self" rel="nofollow" class="register-link" title="注册亿恒账号" href="/html/register.html">注册</a>

            <!--login-->
            <ul class="nav pull-right" id="homeLoginStatus" style="display:none" >
                <li id="fat-menu" class="dropdown">
                    <a id="userInfoDropdownList" target="_blank" href="/profile/itineraries">
                        <img id="userNotIco" src="/images/asset2/home_login_account.png" />
                        <img class="min-ico" id="statusUserIcoImg" src=''/>
                        <span id="statusUserName" class="inntwo-text-large">登录</span><b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu" id="`" role="menu" aria-labelledby="userInfoDropdownList">
                        <li><a target="_blank" href="/account/accountbaseinfo">账户设置</a></li>
                        <li><a target="_blank" href="/profile/itineraries">个人主页</a></li>
                        <li><a target="_blank" href="/profile/itineraries">我的服务</a></li>
                        <li><a target="_blank" href="/profile/customize">我的推荐</a></li>
                        <li><a href="/passport/usersignout" >退出</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>