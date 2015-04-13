<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>

<head>
    <title>武侯区-五大花园电器维修，手机维修服务站</title>
    <link href="${ctxStatic}/css/detail.css" rel="stylesheet" type="text/css"/>
</head>

<!--content-->
<div class="cret_rout_content">
    <div class="breadcrumb-navigation inntwo-text-large">
        <a href="/" target="_blank" title="推荐路书">成都</a>/
        <a href="#" target="_blank" title="鹤壁市出发路书">武侯区</a>/
        <span class="inntwo-text-transparent" id="scheduleName">
            五大花园电器维修，手机维修服务站
        </span>
    </div>
    <div class="itinerary-row first-padding-top inntwo-background-white-color">
        <div class="itinerary-summary float_left">
            <div class="span3 itinerary-cover float_left">
                <img src="/Images/customPlaceImg.jpg">
                <img id="ItineraryCover" alt="" src="${ctxStatic}/img/service/1.jpg">

                <div class="ico-plan">
                    <span class="center-ico ico-plan-eye" title="浏览数"></span>
                    <small data-bind="text: numberLook">141</small>
                    <span class="center-ico ico-plan-post" title="复制数"></span>
                    <small data-bind="text: numberCopy">0</small>
                    <span class="center-ico ico-plan-mess" title="评论数"></span>
                    <small data-bind="text: commentTotal">0</small>
                </div>
                <div class="itinerary-page-share">
                    <!-- JiaThis Button BEGIN -->
                    <div class="jiathis_style">
                        <span class="jiathis_txt">分享到：</span>
                        <a class="jiathis_button_qzone" title="分享到QQ空间"><span
                                class="jiathis_txt jtico jtico_qzone"></span></a>
                        <a class="jiathis_button_tsina" title="分享到新浪微博"><span
                                class="jiathis_txt jtico jtico_tsina"></span></a>
                        <a class="jiathis_button_tqq" title="分享到腾讯微博"><span class="jiathis_txt jtico jtico_tqq"></span></a>
                        <a class="jiathis_button_renren" title="分享到人人网"><span
                                class="jiathis_txt jtico jtico_renren"></span></a>
                        <a class="jiathis_button_kaixin001" title="分享到开心网"><span
                                class="jiathis_txt jtico jtico_kaixin001"></span></a>
                    </div>
                    <script type="text/javascript">
                        var jiathis_config = {
                            summary: "",
                            shortUrl: false,
                            hideMore: false
                        }
                    </script>
                    <script type="text/javascript" src="http://v3.jiathis.com/code_mini/jia.js"
                            charset="utf-8"></script>
                    <!-- JiaThis Button END -->
                </div>
            </div>
            <div class="span6 itinerary-abstract">
                <div class="itinerary-title-out">
                    <h1 class="itinerary-title" title="五大花园电器维修，手机维修服务站">
                        五大花园电器维修，手机维修服务站
                    </h1>
                </div>
                <div class="itinerary-author">
                    <span>百墨&nbsp;</span>
                    <a href="#" id="authorPrivateMessage" class="center-ico ico-letter position-relative">
                        <span id="authorPrivateMessageSign" class="position-absolute">私信</span>
                    </a>
                    &nbsp;&nbsp;
                    <span>创建于 2014-08-20</span>
                </div>
                <div class="itinerary-topics">

                    <div class="itinerary-topic itinerary-warning-color">
                        武侯区
                    </div>
                    <div class="itinerary-topic itinerary-warning-color">
                        晋级南路
                    </div>
                </div>
                <div id="author-rating" style="display: block;">
                    <div class="inntwo-text-large">自评 :</div>
                    <div class="trip-index" data-bind="with: evaluationStars">
                        <p class="float_left">
                            态度
                            <span>(</span>
                            <span data-bind="text: Sight">4.0</span>
                            <span>)&nbsp;&nbsp;&nbsp;</span>
                        </p>

                        <p class="float_left itinerary-description"
                           data-bind="attr: { 'title': SightRemark }, text: SightRemark" title=""></p>

                        <p>&nbsp;</p>

                        <p class="float_left">
                            专业
                            <span>(</span>
                            <span data-bind="text: Life">4.0</span>
                            <span>)&nbsp;&nbsp;&nbsp;</span>
                        </p>

                        <p class="float_left itinerary-description"
                           data-bind="attr: { 'title': LifeRemark }, text: LifeRemark" title=""></p>

                        <p>&nbsp;</p>

                        <p class="float_left">
                            服务态度
                            <span>(</span>
                            <span data-bind="text: RoadCondition">4.0</span>
                            <span>)&nbsp;&nbsp;&nbsp;</span>
                        </p>

                        <p class="float_left itinerary-description"
                           data-bind="attr: { 'title': RoadConditionRemark }, text: RoadConditionRemark" title=""></p>

                        <p>&nbsp;</p>

                        <p class="float_left">
                            返修
                            <span>(</span>
                            <span data-bind="text: Security">4.0</span>
                            <span>)&nbsp;&nbsp;&nbsp;</span>
                        </p>

                        <p class="float_left itinerary-description"
                           data-bind="attr: { 'title': SecurityRemark }, text: SecurityRemark" title=""></p>

                        <p>&nbsp;</p>

                    </div>
                </div>
            </div>
        </div>
        <div class="float_right position-relative ">
            <div class="itinerary-days">
                <span class="inntwo-text-waring">30</span>
                天来访<span class="inntwo-text-waring">53人</span>
            </div>
            <input class="button button-rounded button-flat-caution" value="预约" type="button" id="itineraryCopyBtn">

            <div class="home-background-image img-essence"></div>
        </div>
    </div>

</div>

<div class="itinerary-row inntwo-background-white-color itinerary-schedule-tab-space"></div>


<!---->
<div id="itineraryDetailsTop" class="navbar-wrapper stuckMenu" style="position: relative;">
    <div class="itinerary-row itinerary-tabs inntwo-background-white-color">
        <div class="itinerary-tab" id="itineraryOrderTab">
            店铺详情
        </div>
        <div class="itinerary-tab" id="itinerarySpotsTab">
            服务历史
        </div>
        <div class="itinerary-tab" id="itineraryCommendTab">
            评论&nbsp;(<span data-bind="text:commentTotal">0</span><span>)</span>
        </div>
    </div>
</div>

<div class="itinerary-details-order" style="margin-top: 0px;">
    <div class="itinerary-row">
        <div class="itinerary-content-left inntwo-background-white-color" id="scheuleItemsWrapper">
        <!-- 概述 -->
        <div class="itinerary-schedule-orders" id="itineraryOrderTab-content" style="display: block;">
            <div class="itinerary-schedules">
                <div class="itinerary-schedule-item-wrapper float_left">

                    <div class="itinerary-schedules-item">

                        <div class="itinerary-schedules-item-top inntwo-background-normal-color inntwo-text-large">
                            <div class="itinerary-days-word float_left">价目说明</div>

                            <div class="itinerary-distance inntwo-text-waring inntwo-text-normal">
                                总访问量：<span class="itinerary-schedule-fare">1.1w</span>&nbsp;&nbsp;&nbsp;
                                预约数：<span class="itinerary-schedule-distance">121</span>
                            </div>
                        </div>

                        <div class="itinerary-schedule-abstract">
                            <div class="itinerary-remark">
                                <div class="schedule-remark-table">
                                    <div class="base-row margin-top20">
                                        <div class="float_left">
                                            <div class="itinerary-details-bgimage float_left schedule-description-other"></div>
                                            <div class=" float_left inntwo-text-bold margin-left5">其他描述：</div>
                                        </div>
                                        <div class="float_left itinerary-details-description">
                                            <b>本店支持成都实体店维修,营业时间：早8:00</b>

                                            <div>
                                                本店支持成都实体店维修，现场维修只需30分钟左右，现场更换好现场测试，技术成熟，提供绝对保障 。<br>
                                                外地的可以寄过来修，正常单天修好寄还，外地的朋友无需担心本店有实体店，淘宝店铺大量押金 ，有消<br>
                                                费保障，需要维修有急事的直接联系前台，028-86944558全国免费咨询！ 原装屏幕，可进售后！<br>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="itinerary-schedule-line">

                                <div class="itinerary-schedule-line-head itinerary-schedule-line-row inntwo-text-large">

                                    <div class="itinerary-schedule-line-cell itinerary-schedule-line-name-cell float_left">
                                        名称
                                    </div>
                                    <div class="itinerary-schedule-line-cell itinerary-schedule-line-number-cell float_left">
                                        数量
                                    </div>
                                    <div class="itinerary-schedule-line-cell itinerary-schedule-line-fare-cell float_left">
                                        单价
                                    </div>
                                    <div class="itinerary-schedule-line-cell itinerary-schedule-line-amont-cell float_left">
                                        总计
                                    </div>
                                </div>

                                <!--油费-->
                                <div class="itinerary-schedule-line-row">
                                    <div class="itinerary-schedule-line-cell itinerary-schedule-line-name-cell float_left">
                                        <div class="itinerary-line-item">
                                            上门
                                        </div>

                                        <div class="itinerary-schedule-dis inntwo-text-normal float_left">
                                              <span>25/次 </span>
                                        </div>

                                    </div>
                                    <div class="itinerary-schedule-line-cell itinerary-schedule-line-number-cell float_left">
                                        1车
                                    </div>
                                    <div class="itinerary-schedule-line-cell itinerary-schedule-line-fare-cell float_left">
                                                    <span class="inntwo-text-waring">
                                                        ￥0.5
                                                        /km
                                                    </span>
                                    </div>
                                    <div class="inntwo-text-waring itinerary-schedule-line-cell itinerary-schedule-line-amont-cell float_left">
                                        ￥<span class="itinerary-schedule-item-amount">
                                                         128.6
                                                     </span>
                                    </div>
                                </div>

                                <!--过路费-->
                                <div class="itinerary-schedule-line-row">
                                    <div class="itinerary-schedule-line-cell itinerary-schedule-line-name-cell float_left">
                                        <div class="itinerary-line-item">配件1</div>
                                    </div>
                                    <div class="itinerary-schedule-line-cell itinerary-schedule-line-number-cell float_left">
                                        1车
                                    </div>
                                    <div class="itinerary-schedule-line-cell itinerary-schedule-line-fare-cell float_left">
                                                    <span class="inntwo-text-waring">
                                                        ￥20                                                        </span>
                                    </div>
                                    <div class="inntwo-text-waring itinerary-schedule-line-cell itinerary-schedule-line-amont-cell float_left">
                                        ￥<span class="itinerary-schedule-item-amount">
20
                                                     </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--行程亮点 -->
        <div class="itinerary-schedule-spots inntwo-text-large" id="itinerarySpotsTab-content" style="display: none;">
            <div class="itinerary-travel">
                <div class="itinerary-travel-picoutter">

                    <img alt="" class="itinerary-travels-img" data-original="http://img2.xdpie.com/5669158.jpg"
                         title="鸡冠山" src="http://img2.xdpie.com/5669158.jpg" style="display: block;">

                    <div class="itinerary-place-address">

                        <i class="icon-map-marker icon-white"></i>
                        四川省成都市鸡冠山
                    </div>
                </div>

                <div class="itinerary-place-remark">

                </div>
            </div>
        </div>
        <!--游记评论-->
        <div class="itinerary-schedule-commends" id="itineraryCommendTab-content" style="display: none;">
            <div class="itinerary-travel">
                <div class="itinerary-travel-picoutter">

                    <img alt="" class="itinerary-travels-img" data-original="http://img2.xdpie.com/5669158.jpg"
                         title="鸡冠山" src="http://img2.xdpie.com/5669158.jpg" style="display: block;">

                    <div class="itinerary-place-address">

                        <i class="icon-map-marker icon-white"></i>
                        四川省成都市鸡冠山
                    </div>
                </div>

                <div class="itinerary-place-remark">

                </div>
            </div>
        </div>
        </div>
    </div>
</div>
