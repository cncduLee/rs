<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<head>
    <title>首页</title>
</head>

<div class="cret_rout_content">
<div class="inntwo-home-content-outter inntwo-background-normal-color">
<div class="inntwo-home-search-outter">

    <div class="inntwo-home-search-middle inntwo-background-white-color">

        <div class="itineraries-search-row">
            <div class="inntwo-home-start-choise inntwo-text-xxlarge float_left">
                <div id="choiseCityButton" class="inntwo-text-default inntwo-text-xlarge orign-choise-item">
                    <div class="float_left city-choise-botton inntwo-text-xxlarge">
                        <span class="orign-city">不限</span>
                        <span class="inntwo-text-normal inntwo-text-transparent">城市</span>
                    </div>
                    <div class="orign-choise-triangle-s itinerary-specification float_left"></div>
                </div>
                <div class="city-choise-items">
                    <div class="city-choise-title inntwo-text-large">
                        &nbsp;&nbsp;热门城市:
                        <div class="create-itinerary-image city-choise-close-button"></div>
                    </div>
                    <div class="city-choise-item-outter">
                        <a Class="city-choise-item inntwo-text-large" href="/all">不限</a>
                        <a Class="city-choise-item inntwo-text-large" href="/cd">成都</a>
                        <a Class="city-choise-item inntwo-text-large" href="/cd">北京</a>
                        <a Class="city-choise-item inntwo-text-large" href="/cd">北京</a>
                        <a Class="city-choise-item inntwo-text-large" href="/cd">北京</a>
                        <a Class="city-choise-item inntwo-text-large" href="/cd">北京</a>
                    </div>
                </div>
            </div>

            <input class="inntwo-home-route-search inntwo-text-transparent float_left" maxlength="13" type="text" id="searchKeyWordInput" placeholder="维修点、物品" />

            <input class="inntwo-home-route-btn button button-flat-action float_left" id="searchKeyWordBtn" type="button" value="搜  索" />
        </div>

        <div id="itinerarySearchKeywords">
            <div id="inntwoHomeContentLeft" class="inntwo-background-white-color">

                <div class="inntwo-home-search-query-container" id="inntwoHomeTripDays">
                    <div class="days-row">
                        <span class="inntwo-home-font-title">&nbsp;位置</span>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" data="0" href="#/">武侯区</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" data="1,3" href="#">武侯区</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" data="1,3" href="#">武侯区</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" data="1,3" href="#">武侯区</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" data="1,3" href="#">武侯区</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" data="1,3" href="#">武侯区</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" data="1,3" href="#">武侯区</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" data="1,3" href="#">武侯区</a>
                    </div>
                </div>

                <div class="inntwo-home-search-query-container" id="inntwoQueryTripSeansonContainer">
                    <div class="days-row">
                        <span class="inntwo-home-font-title">&nbsp;家电类型</span>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" href="#/">空调</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" href="#/">洗衣机</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" href="#/">空调</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" href="#/">洗衣机</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" href="#/">空调</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" href="#/">洗衣机</a>
                    </div>
                </div>

                <div class="inntwo-home-search-query-container" id="inntwoQueryTripThemeContainer">
                    <div class="days-row" id="inntwoQueryTripThemeTitle">
                        <span class="inntwo-home-font-title">&nbsp;品牌</span>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" href="" >不限</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" href="" >联想</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" href="" >三星</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" href="" >三星</a>
                        <a Class="inntwo-home-days-select inntwo-home-days-item" href="" >三星</a>
                    </div>
                </div>



                <div class="inntwo-home-search-query-container" id="itinerariesSelectedCategories">
                    <div class="days-row">
                        <div class="itineraries-selected-categories-title float_left">
                            你已选择:
                        </div>

                        <div class="itineraries-selected-categories float_left">
                            <div class="inntwo-backgroud-color-info itinerary-search-keyword" id="itinerarySearchKeyword">
                                <div class="float_left itinerary-search-tags"></div>
                                <div class="create-itinerary-image float_left remove-search-keyword" data=""></div>
                            </div>

                            <div class="inntwo-backgroud-color-info itinerary-search-keyword" id="itineraryQueryDays">
                                <div class="float_left itinerary-search-tags">位置</div>
                                <div class="create-itinerary-image float_left remove-search-keyword" data="0"></div>
                            </div>

                            <div class="inntwo-backgroud-color-info itinerary-search-keyword" id="itineraryQuerySeason">
                                <div class="float_left itinerary-search-tags">类型</div>
                                <div class="create-itinerary-image float_left remove-search-keyword" data="0"></div>
                            </div>

                            <div class="inntwo-backgroud-color-info itinerary-search-keyword" id="itineraryQueryTheme">
                                <div class="float_left itinerary-search-tags">品牌</div>
                                <div class="create-itinerary-image float_left remove-search-keyword" data="0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="itineraries-sort-row">
    <div class="itineraries-sort">排序:</div>
    <div id="itinerariesSortDay" class="itineraries-sort-cell float_left inntwo-background-white-color">
        <span class="itineraries-sort-cell-title">好评</span>
        <div id="itinerariesSortDayIco" class="itineraries-sort-price-up itineraries-sort-direction home-background-image"></div>
    </div>
    <div id="itinerariesSortPrice" class="itineraries-sort-cell  float_left inntwo-background-white-color">
        <span class="itineraries-sort-cell-title">单量 </span>
        <div id="itinerariesSortPriceIco" class="itineraries-sort-price-up itineraries-sort-direction home-background-image"></div>
    </div>
    <div class="itineraries-query-count float_left">
        共<span>11</span>条
    </div>
</div>

<!--right-->
<div class="inntwo-home-content">
<div class="itineraries-content-right float_right">
    <%--<div class="base-row position-relative" id="homeItineraryBanner">--%>
        <%--<a href="/tourism" target="_blank">--%>
            <%--<img alt="" src="${ctxStatic}/img/person/5.jpg" />--%>
        <%--</a>--%>
        <%--<a href="/tourism">--%>
            <%--<img class="home-itinerary-bannerimg margin-top10" alt="" src="${ctxStatic}/img/service/1.jpg" alt="" />--%>
        <%--</a>--%>
    <%--</div>--%>
        <div class="base-row position-relative inntwo-background-white-color" id="homeItineraryBanner">
            <div class="base-row inntwo-text-xlarge inntwo-text-bold lasted-release-itinerary">本周星级维修店</div>
            <div class="text-center">
                <div class="home-app-download display-inlineblock">
                    <img src="${ctxStatic}/img/service/1.jpg">
                </div>
            </div>
        </div>
        <div class="base-row position-relative inntwo-background-white-color" id="homeItineraryBanner">
            <div class="base-row inntwo-text-xlarge inntwo-text-bold lasted-release-itinerary">本周星级维修员</div>
            <div class="text-center">
                <div class="home-app-download display-inlineblock">
                    <img src="${ctxStatic}/img/person/5.jpg">
                </div>
            </div>
        </div>
    <div class="base-row margin-top10 inntwo-background-white-color padding-bottom12 inntwo-border-radius">
        <div class="base-row inntwo-text-xlarge inntwo-text-bold lasted-release-itinerary">最新发布</div>
        <div class="base-row" id="lastedPublishItineraries">
            <div class="base-row inntwo-text-normal lastedrelease-itinerary-row overflow-hidden margin-top10">
                <img alt="" class="display-inlineblock lastedrelease-itinerary-uico margin-left20 inntwo-border-radius"
                     src="http://img2.xdpie.com/8460E4BD9205AC65511C133061278AFA.gif"/>
                            <span class="lasted-itinerary-user inntwo-text-deep overflow-hidden margin-left5">
                                百墨
                            </span>
                            <span class="inntwo-text-transparent overflow-hidden">
                                18分钟前
                            </span>
                <span class="inntwo-text-deep overflow-hidden">预约</span>
                <a class="inntwo-text-info lastedrelease-itinerary-title overflow-hidden"
                   title="" target="_blank"
                   href="#">成都-武侯区-联想官方维修店</a>
            </div>
            <div class="base-row inntwo-text-normal lastedrelease-itinerary-row overflow-hidden margin-top10">
                <img alt="" class="display-inlineblock lastedrelease-itinerary-uico margin-left20 inntwo-border-radius"
                     src="http://img2.xdpie.com/8460E4BD9205AC65511C133061278AFA.gif"/>
                            <span class="lasted-itinerary-user inntwo-text-deep overflow-hidden margin-left5">
                                百墨
                            </span>
                            <span class="inntwo-text-transparent overflow-hidden">
                                18分钟前
                            </span>
                <span class="inntwo-text-deep overflow-hidden">预约</span>
                <a class="inntwo-text-info lastedrelease-itinerary-title overflow-hidden"
                   title="" target="_blank"
                   href="#">成都-武侯区-联想官方维修店</a>
            </div>
            <div class="base-row inntwo-text-normal lastedrelease-itinerary-row overflow-hidden margin-top10">
                <img alt="" class="display-inlineblock lastedrelease-itinerary-uico margin-left20 inntwo-border-radius"
                     src="http://img2.xdpie.com/8460E4BD9205AC65511C133061278AFA.gif"/>
                            <span class="lasted-itinerary-user inntwo-text-deep overflow-hidden margin-left5">
                                百墨
                            </span>
                            <span class="inntwo-text-transparent overflow-hidden">
                                18分钟前
                            </span>
                <span class="inntwo-text-deep overflow-hidden">预约</span>
                <a class="inntwo-text-info lastedrelease-itinerary-title overflow-hidden"
                   title="" target="_blank"
                   href="#">成都-武侯区-联想官方维修店</a>
            </div>
            <div class="base-row inntwo-text-normal lastedrelease-itinerary-row overflow-hidden margin-top10">
                <img alt="" class="display-inlineblock lastedrelease-itinerary-uico margin-left20 inntwo-border-radius"
                     src="http://img2.xdpie.com/8460E4BD9205AC65511C133061278AFA.gif"/>
                            <span class="lasted-itinerary-user inntwo-text-deep overflow-hidden margin-left5">
                                百墨
                            </span>
                            <span class="inntwo-text-transparent overflow-hidden">
                                18分钟前
                            </span>
                <span class="inntwo-text-deep overflow-hidden">预约</span>
                <a class="inntwo-text-info lastedrelease-itinerary-title overflow-hidden"
                   title="" target="_blank"
                   href="#">成都-武侯区-联想官方维修店</a>
            </div>
            <div class="base-row inntwo-text-normal lastedrelease-itinerary-row overflow-hidden margin-top10">
                <img alt="" class="display-inlineblock lastedrelease-itinerary-uico margin-left20 inntwo-border-radius"
                     src="http://img2.xdpie.com/8460E4BD9205AC65511C133061278AFA.gif"/>
                            <span class="lasted-itinerary-user inntwo-text-deep overflow-hidden margin-left5">
                                百墨
                            </span>
                            <span class="inntwo-text-transparent overflow-hidden">
                                18分钟前
                            </span>
                <span class="inntwo-text-deep overflow-hidden">预约</span>
                <a class="inntwo-text-info lastedrelease-itinerary-title overflow-hidden"
                   title="" target="_blank"
                   href="#">成都-武侯区-联想官方维修店</a>
            </div>
        </div>
    </div>
    <div class="home-app-download-background">
        <div class="base-row ">
            <div class="home-app-download home-app-download-ico float_left"></div>
            <div class="home-app-downloadwrapper float_left">
                <div class="base-row inntwo-text-normal home-app-downloadtitle text-align-center inntwo-text-deep">
                    找服务，用忆恒APP，扫一扫下载客户端!
                </div>
                <div class="base-row inntwo-text-normal margin-top30 inntwo-text-hazy">
                    其他下载方式
                </div>
                <a href="/common/appdownload" target="_blank" id="downloadAdroidAppButton"
                   class="button button-flat-caution inntwo-backgroud-color-waring">
                    点击下载Android版
                </a>
            </div>
        </div>
    </div>
</div>

<!--left-->
<div id="inntwoHomeContentRight">
<img alt="" id="searchLoading" src="/img/asset2/loading_17bc155c.gif" />
<div class="empty-warning-out">
    <div class="empty-warning">
        <div class="empty-warning-ico float_left create-itinerary-image"></div>
        <div class="empty-warning-wrod float_left">
            抱歉,您检索的信息不存在,可以尝试
            <a target="_blank" href="/createitinerary/console">创建路书</a>！
        </div>
    </div>
</div>
<div id="homeItineraryList">
<div id="itineraryQueryResult" class="inntwo-home-itinerary-itemout" dataCount="1660">
<div class="inntwo-home-itinerary-item inntwo-background-white-color">
    <div class="inntwo-home-itinerary-img-out">

        <div class="inntwo-home-itinerary-price home-background-image inntwo-text-ordinary">
            可预约<br />
        </div>
        <a href="${ctx}/detail.htm" target="_blank">
            <img alt="" class="inntwo-home-itinerary-img" data-original="${ctxStatic}/img/service/1.jpg"
                 title="联想电脑及周边产品" /></a>
        <img alt="" class="inntwo-home-not-img" src="/img/asset2/customPlaceImg.jpg" />
        <div class="ico-plan position-relative">
            <div class="itinerary-profile-totals itinerary-preview-totals position-absolute">
                <span class="center-ico ico-plan-eye"></span>
                <small>61</small>
            </div>

            <div class="itinerary-profile-totals itinerary-copy-totals position-absolute">
                <span class="center-ico ico-plan-post"></span>
                <small>0</small>
            </div>

            <div class="itinerary-profile-totals itinerary-comment-totals position-absolute">
                <span class="center-ico ico-plan-mess"></span>
                <small>0</small>
            </div>

        </div>

        <div class="home-background-image img-essence"></div>
    </div>
    <div class="inntwo-home-itinerary-describe">
        <a class="itinerary-describe-row itinerrary-name" target="_blank"
           href="${ctx}/detail.htm">
            <h4 title="联想电脑及周边产品">联想电脑官方指定维修点</h4>
        </a>
        <div class="itinerary-describe-row">
            <div class="creator-ico-out position-relative">
                <img class="min-ico" src="/img/asset1/noico.jpg" />
                <img class="min-ico img-warpper" src="${ctxStatic}/img/person/1.jpg" />
            </div>
            <div class="creator-name-outer">百墨</div>
            <div class="creator-datetime inntwo-text-normal">
                2014-11-24
            </div>
            <div class="itinerary-days-out">
                <span class="itinerary-days-count">
                    3
                </span>
                <span class="itinerary-days-unit">星</span>
            </div>
        </div>

        <div class="itinerary-describe-row">
            <span>主营:&nbsp;<span>电脑维修，二手电脑，买卖</span></span>
        </div>
        <div class="itinerary-star-row">
            <span class="itinerary-star" data-score="4"></span>
        </div>

        <div class="itinerary-describe-row itinerary-trip-exploring-spot" title="">
            <span>
                <input class="button button-flat-action float_left" type="button" value="预约">
            </span>
        </div>
        <div class="itinerary-tags">
            <span class="label label-success">联想</span>
            <span class="label label-success">二手电脑</span>
            <span class="label label-success">笔记本</span>
        </div>
    </div>
</div>
<div class="inntwo-home-itinerary-item inntwo-background-white-color">
        <div class="inntwo-home-itinerary-img-out">

            <div class="inntwo-home-itinerary-price home-background-image inntwo-text-ordinary">
                可预约<br />
            </div>
            <a href="${ctx}/detail.htm" target="_blank">
                <img alt="" class="inntwo-home-itinerary-img" data-original="${ctxStatic}/img/service/2.jpg"
                     title="联想电脑及周边产品" /></a>
            <img alt="" class="inntwo-home-not-img" src="/img/asset2/customPlaceImg.jpg" />
            <div class="ico-plan position-relative">
                <div class="itinerary-profile-totals itinerary-preview-totals position-absolute">
                    <span class="center-ico ico-plan-eye"></span>
                    <small>61</small>
                </div>

                <div class="itinerary-profile-totals itinerary-copy-totals position-absolute">
                    <span class="center-ico ico-plan-post"></span>
                    <small>0</small>
                </div>

                <div class="itinerary-profile-totals itinerary-comment-totals position-absolute">
                    <span class="center-ico ico-plan-mess"></span>
                    <small>0</small>
                </div>

            </div>

            <div class="home-background-image img-essence"></div>
        </div>
        <div class="inntwo-home-itinerary-describe">
            <a class="itinerary-describe-row itinerrary-name" target="_blank"
               href="${ctx}/detail.htm">
                <h4 title="联想电脑及周边产品">联想电脑官方指定维修点</h4>
            </a>
            <div class="itinerary-describe-row">
                <div class="creator-ico-out position-relative">
                    <img class="min-ico" src="/img/asset1/noico.jpg" />
                    <img class="min-ico img-warpper" src="${ctxStatic}/img/person/2.jpg" />
                </div>
                <div class="creator-name-outer">百墨</div>
                <div class="creator-datetime inntwo-text-normal">
                    2014-11-24
                </div>
                <div class="itinerary-days-out">
                <span class="itinerary-days-count">
                    3
                </span>
                    <span class="itinerary-days-unit">星</span>
                </div>
            </div>

            <div class="itinerary-describe-row">
                <span>主营:&nbsp;<span>电脑维修，二手电脑，买卖</span></span>
            </div>
            <div class="itinerary-star-row">
                <span class="itinerary-star" data-score="4"></span>
            </div>

            <div class="itinerary-describe-row itinerary-trip-exploring-spot" title="">
            <span>
                <input class="button button-flat-action float_left" type="button" value="预约">
            </span>
            </div>
            <div class="itinerary-tags">
                <span class="label label-success">联想</span>
                <span class="label label-success">二手电脑</span>
                <span class="label label-success">笔记本</span>
            </div>
        </div>
    </div>
<div class="inntwo-home-itinerary-item inntwo-background-white-color">
    <div class="inntwo-home-itinerary-img-out">

        <div class="inntwo-home-itinerary-price home-background-image inntwo-text-ordinary">
            可预约<br />
        </div>
        <a href="${ctx}/detail.htm" target="_blank">
            <img alt="" class="inntwo-home-itinerary-img" data-original="${ctxStatic}/img/service/3.jpg"
                 title="联想电脑及周边产品" /></a>
        <img alt="" class="inntwo-home-not-img" src="/img/asset2/customPlaceImg.jpg" />
        <div class="ico-plan position-relative">
            <div class="itinerary-profile-totals itinerary-preview-totals position-absolute">
                <span class="center-ico ico-plan-eye"></span>
                <small>61</small>
            </div>

            <div class="itinerary-profile-totals itinerary-copy-totals position-absolute">
                <span class="center-ico ico-plan-post"></span>
                <small>0</small>
            </div>

            <div class="itinerary-profile-totals itinerary-comment-totals position-absolute">
                <span class="center-ico ico-plan-mess"></span>
                <small>0</small>
            </div>

        </div>

        <div class="home-background-image img-essence"></div>
    </div>
    <div class="inntwo-home-itinerary-describe">
        <a class="itinerary-describe-row itinerrary-name" target="_blank"
           href="${ctx}/detail.htm">
            <h4 title="联想电脑及周边产品">联想电脑官方指定维修点</h4>
        </a>
        <div class="itinerary-describe-row">
            <div class="creator-ico-out position-relative">
                <img class="min-ico" src="/img/asset1/noico.jpg" />
                <img class="min-ico img-warpper" src="${ctxStatic}/img/person/3.jpg" />
            </div>
            <div class="creator-name-outer">百墨</div>
            <div class="creator-datetime inntwo-text-normal">
                2014-11-24
            </div>
            <div class="itinerary-days-out">
                <span class="itinerary-days-count">
                    3
                </span>
                <span class="itinerary-days-unit">星</span>
            </div>
        </div>

        <div class="itinerary-describe-row">
            <span>主营:&nbsp;<span>电脑维修，二手电脑，买卖</span></span>
        </div>
        <div class="itinerary-star-row">
            <span class="itinerary-star" data-score="4"></span>
        </div>

        <div class="itinerary-describe-row itinerary-trip-exploring-spot" title="">
            <span>
                <input class="button button-flat-action float_left" type="button" value="预约">
            </span>
        </div>
        <div class="itinerary-tags">
            <span class="label label-success">联想</span>
            <span class="label label-success">二手电脑</span>
            <span class="label label-success">笔记本</span>
        </div>
    </div>
</div>
<div class="inntwo-home-itinerary-item inntwo-background-white-color">
    <div class="inntwo-home-itinerary-img-out">

        <div class="inntwo-home-itinerary-price home-background-image inntwo-text-ordinary">
            可预约<br />
        </div>
        <a href="${ctx}/detail.htm" target="_blank">
            <img alt="" class="inntwo-home-itinerary-img" data-original="${ctxStatic}/img/service/4.jpg"
                 title="联想电脑及周边产品" /></a>
        <img alt="" class="inntwo-home-not-img" src="/img/asset2/customPlaceImg.jpg" />
        <div class="ico-plan position-relative">
            <div class="itinerary-profile-totals itinerary-preview-totals position-absolute">
                <span class="center-ico ico-plan-eye"></span>
                <small>61</small>
            </div>

            <div class="itinerary-profile-totals itinerary-copy-totals position-absolute">
                <span class="center-ico ico-plan-post"></span>
                <small>0</small>
            </div>

            <div class="itinerary-profile-totals itinerary-comment-totals position-absolute">
                <span class="center-ico ico-plan-mess"></span>
                <small>0</small>
            </div>

        </div>

        <div class="home-background-image img-essence"></div>
    </div>
    <div class="inntwo-home-itinerary-describe">
        <a class="itinerary-describe-row itinerrary-name" target="_blank"
           href="${ctx}/detail.htm">
            <h4 title="联想电脑及周边产品">联想电脑官方指定维修点</h4>
        </a>
        <div class="itinerary-describe-row">
            <div class="creator-ico-out position-relative">
                <img class="min-ico" src="/img/asset1/noico.jpg" />
                <img class="min-ico img-warpper" src="${ctxStatic}/img/person/4.jpg" />
            </div>
            <div class="creator-name-outer">百墨</div>
            <div class="creator-datetime inntwo-text-normal">
                2014-11-24
            </div>
            <div class="itinerary-days-out">
                <span class="itinerary-days-count">
                    3
                </span>
                <span class="itinerary-days-unit">星</span>
            </div>
        </div>

        <div class="itinerary-describe-row">
            <span>主营:&nbsp;<span>电脑维修，二手电脑，买卖</span></span>
        </div>
        <div class="itinerary-star-row">
            <span class="itinerary-star" data-score="4"></span>
        </div>

        <div class="itinerary-describe-row itinerary-trip-exploring-spot" title="">
            <span>
                <input class="button button-flat-action float_left" type="button" value="预约">
            </span>
        </div>
        <div class="itinerary-tags">
            <span class="label label-success">联想</span>
            <span class="label label-success">二手电脑</span>
            <span class="label label-success">笔记本</span>
        </div>
    </div>
</div>
<div class="inntwo-home-itinerary-item inntwo-background-white-color">
    <div class="inntwo-home-itinerary-img-out">

        <div class="inntwo-home-itinerary-price home-background-image inntwo-text-ordinary">
            可预约<br />
        </div>
        <a href="${ctx}/detail.htm" target="_blank">
            <img alt="" class="inntwo-home-itinerary-img" data-original="${ctxStatic}/img/service/1.jpg"
                 title="联想电脑及周边产品" /></a>
        <img alt="" class="inntwo-home-not-img" src="/img/asset2/customPlaceImg.jpg" />
        <div class="ico-plan position-relative">
            <div class="itinerary-profile-totals itinerary-preview-totals position-absolute">
                <span class="center-ico ico-plan-eye"></span>
                <small>61</small>
            </div>

            <div class="itinerary-profile-totals itinerary-copy-totals position-absolute">
                <span class="center-ico ico-plan-post"></span>
                <small>0</small>
            </div>

            <div class="itinerary-profile-totals itinerary-comment-totals position-absolute">
                <span class="center-ico ico-plan-mess"></span>
                <small>0</small>
            </div>

        </div>

        <div class="home-background-image img-essence"></div>
    </div>
    <div class="inntwo-home-itinerary-describe">
        <a class="itinerary-describe-row itinerrary-name" target="_blank"
           href="${ctx}/detail.htm">
            <h4 title="联想电脑及周边产品">联想电脑官方指定维修点</h4>
        </a>
        <div class="itinerary-describe-row">
            <div class="creator-ico-out position-relative">
                <img class="min-ico" src="/img/asset1/noico.jpg" />
                <img class="min-ico img-warpper" src="${ctxStatic}/img/person/1.jpg" />
            </div>
            <div class="creator-name-outer">百墨</div>
            <div class="creator-datetime inntwo-text-normal">
                2014-11-24
            </div>
            <div class="itinerary-days-out">
                <span class="itinerary-days-count">
                    3
                </span>
                <span class="itinerary-days-unit">星</span>
            </div>
        </div>

        <div class="itinerary-describe-row">
            <span>主营:&nbsp;<span>电脑维修，二手电脑，买卖</span></span>
        </div>
        <div class="itinerary-star-row">
            <span class="itinerary-star" data-score="4"></span>
        </div>

        <div class="itinerary-describe-row itinerary-trip-exploring-spot" title="">
            <span>
                <input class="button button-flat-action float_left" type="button" value="预约">
            </span>
        </div>
        <div class="itinerary-tags">
            <span class="label label-success">联想</span>
            <span class="label label-success">二手电脑</span>
            <span class="label label-success">笔记本</span>
        </div>
    </div>
</div>
<div class="inntwo-home-itinerary-item inntwo-background-white-color">
    <div class="inntwo-home-itinerary-img-out">

        <div class="inntwo-home-itinerary-price home-background-image inntwo-text-ordinary">
            可预约<br />
        </div>
        <a href="${ctx}/detail.htm" target="_blank">
            <img alt="" class="inntwo-home-itinerary-img" data-original="${ctxStatic}/img/service/1.jpg"
                 title="联想电脑及周边产品" /></a>
        <img alt="" class="inntwo-home-not-img" src="/img/asset2/customPlaceImg.jpg" />
        <div class="ico-plan position-relative">
            <div class="itinerary-profile-totals itinerary-preview-totals position-absolute">
                <span class="center-ico ico-plan-eye"></span>
                <small>61</small>
            </div>

            <div class="itinerary-profile-totals itinerary-copy-totals position-absolute">
                <span class="center-ico ico-plan-post"></span>
                <small>0</small>
            </div>

            <div class="itinerary-profile-totals itinerary-comment-totals position-absolute">
                <span class="center-ico ico-plan-mess"></span>
                <small>0</small>
            </div>
        </div>
        <div class="home-background-image img-essence"></div>
    </div>
    <div class="inntwo-home-itinerary-describe">
        <a class="itinerary-describe-row itinerrary-name" target="_blank"
           href="${ctx}/detail.htm">
            <h4 title="联想电脑及周边产品">联想电脑官方指定维修点</h4>
        </a>
        <div class="itinerary-describe-row">
            <div class="creator-ico-out position-relative">
                <img class="min-ico" src="/img/asset1/noico.jpg" />
                <img class="min-ico img-warpper" src="${ctxStatic}/img/person/1.jpg" />
            </div>
            <div class="creator-name-outer">百墨</div>
            <div class="creator-datetime inntwo-text-normal">
                2014-11-24
            </div>
            <div class="itinerary-days-out">
                <span class="itinerary-days-count">
                    3
                </span>
                <span class="itinerary-days-unit">星</span>
            </div>
        </div>

        <div class="itinerary-describe-row">
            <span>主营:&nbsp;<span>电脑维修，二手电脑，买卖</span></span>
        </div>
        <div class="itinerary-star-row">
            <span class="itinerary-star" data-score="4"></span>
        </div>

        <div class="itinerary-describe-row itinerary-trip-exploring-spot" title="">
            <span>
                <input class="button button-flat-action float_left" type="button" value="预约">
            </span>
        </div>
        <div class="itinerary-tags">
            <span class="label label-success">联想</span>
            <span class="label label-success">二手电脑</span>
            <span class="label label-success">笔记本</span>
        </div>
    </div>
</div>
<div class="inntwo-home-itinerary-item inntwo-background-white-color">
    <div class="inntwo-home-itinerary-img-out">

        <div class="inntwo-home-itinerary-price home-background-image inntwo-text-ordinary">
            可预约<br />
        </div>
        <a href="${ctx}/detail.htm" target="_blank">
            <img alt="" class="inntwo-home-itinerary-img" data-original="${ctxStatic}/img/service/1.jpg"
                 title="联想电脑及周边产品" /></a>
        <img alt="" class="inntwo-home-not-img" src="/img/asset2/customPlaceImg.jpg" />
        <div class="ico-plan position-relative">
            <div class="itinerary-profile-totals itinerary-preview-totals position-absolute">
                <span class="center-ico ico-plan-eye"></span>
                <small>61</small>
            </div>

            <div class="itinerary-profile-totals itinerary-copy-totals position-absolute">
                <span class="center-ico ico-plan-post"></span>
                <small>0</small>
            </div>

            <div class="itinerary-profile-totals itinerary-comment-totals position-absolute">
                <span class="center-ico ico-plan-mess"></span>
                <small>0</small>
            </div>

        </div>

        <div class="home-background-image img-essence"></div>
    </div>
    <div class="inntwo-home-itinerary-describe">
        <a class="itinerary-describe-row itinerrary-name" target="_blank"
           href="${ctx}/detail.htm">
            <h4 title="联想电脑及周边产品">联想电脑官方指定维修点</h4>
        </a>
        <div class="itinerary-describe-row">
            <div class="creator-ico-out position-relative">
                <img class="min-ico" src="/img/asset1/noico.jpg" />
                <img class="min-ico img-warpper" src="${ctxStatic}/img/person/1.jpg" />
            </div>
            <div class="creator-name-outer">百墨</div>
            <div class="creator-datetime inntwo-text-normal">
                2014-11-24
            </div>
            <div class="itinerary-days-out">
                <span class="itinerary-days-count">
                    3
                </span>
                <span class="itinerary-days-unit">星</span>
            </div>
        </div>

        <div class="itinerary-describe-row">
            <span>主营:&nbsp;<span>电脑维修，二手电脑，买卖</span></span>
        </div>
        <div class="itinerary-star-row">
            <span class="itinerary-star" data-score="4"></span>
        </div>

        <div class="itinerary-describe-row itinerary-trip-exploring-spot" title="">
            <span>
                <input class="button button-flat-action float_left" type="button" value="预约">
            </span>
        </div>
        <div class="itinerary-tags">
            <span class="label label-success">联想</span>
            <span class="label label-success">二手电脑</span>
            <span class="label label-success">笔记本</span>
        </div>
    </div>
</div>
<div class="inntwo-home-itinerary-item inntwo-background-white-color">
    <div class="inntwo-home-itinerary-img-out">

        <div class="inntwo-home-itinerary-price home-background-image inntwo-text-ordinary">
            可预约<br />
        </div>
        <a href="${ctx}/detail.htm" target="_blank">
            <img alt="" class="inntwo-home-itinerary-img" data-original="${ctxStatic}/img/service/1.jpg"
                 title="联想电脑及周边产品" /></a>
        <img alt="" class="inntwo-home-not-img" src="/img/asset2/customPlaceImg.jpg" />
        <div class="ico-plan position-relative">
            <div class="itinerary-profile-totals itinerary-preview-totals position-absolute">
                <span class="center-ico ico-plan-eye"></span>
                <small>61</small>
            </div>

            <div class="itinerary-profile-totals itinerary-copy-totals position-absolute">
                <span class="center-ico ico-plan-post"></span>
                <small>0</small>
            </div>

            <div class="itinerary-profile-totals itinerary-comment-totals position-absolute">
                <span class="center-ico ico-plan-mess"></span>
                <small>0</small>
            </div>

        </div>

        <div class="home-background-image img-essence"></div>
    </div>
    <div class="inntwo-home-itinerary-describe">
        <a class="itinerary-describe-row itinerrary-name" target="_blank"
           href="${ctx}/detail.htm">
            <h4 title="联想电脑及周边产品">联想电脑官方指定维修点</h4>
        </a>
        <div class="itinerary-describe-row">
            <div class="creator-ico-out position-relative">
                <img class="min-ico" src="/img/asset1/noico.jpg" />
                <img class="min-ico img-warpper" src="${ctxStatic}/img/person/1.jpg" />
            </div>
            <div class="creator-name-outer">百墨</div>
            <div class="creator-datetime inntwo-text-normal">
                2014-11-24
            </div>
            <div class="itinerary-days-out">
                <span class="itinerary-days-count">
                    3
                </span>
                <span class="itinerary-days-unit">星</span>
            </div>
        </div>

        <div class="itinerary-describe-row">
            <span>主营:&nbsp;<span>电脑维修，二手电脑，买卖</span></span>
        </div>
        <div class="itinerary-star-row">
            <span class="itinerary-star" data-score="4"></span>
        </div>

        <div class="itinerary-describe-row itinerary-trip-exploring-spot" title="">
            <span>
                <input class="button button-flat-action float_left" type="button" value="预约">
            </span>
        </div>
        <div class="itinerary-tags">
            <span class="label label-success">联想</span>
            <span class="label label-success">二手电脑</span>
            <span class="label label-success">笔记本</span>
        </div>
    </div>
</div>


</div>
<!--分页-->
<div id="pagerContainer" class="pagination pagination-centered">
    <ul class="pagination pagination-centered">
        <li><a disabled="disabled"> << </a></li>&nbsp;&nbsp;
        <li><a disabled="disabled"><</a></li>&nbsp;&nbsp;
        <li class='active'><a title='第1页'>1</a></li>&nbsp;&nbsp;
        <li><a href="">2</a></li>&nbsp;&nbsp;
        <li><a href="">3</a></li>&nbsp;&nbsp;
        <li><a href="">4</a></li>&nbsp;&nbsp;
        <li><a href=""> > </a></li>&nbsp;&nbsp;
        <li><a href="">>></a></li>
    </ul>
</div>
</div>
</div>
</div>
</div>
</div>