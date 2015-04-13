var InnTwoMapCore = {};
InnTwoMapCore.createMap = function (c, b) {
    if (typeof b === "undefined" || !b) {
        b = {}
    }
    if (!b.hasOwnProperty("zoom")) {
        b.zoom = 13
    }
    if (!b.hasOwnProperty("centerPlace")) {
        b.centerPlace = "北京"
    }
    var a;
    if (b.hasOwnProperty("centerPoint")) {
        a = b.centerPoint
    } else {
        a = b.centerPlace
    }
    var d;
    if (b.markerClick) {
        d = new window.BMap.Map(c)
    } else {
        d = new window.BMap.Map(c, {enableMapClick: false})
    }
    d.enableContinuousZoom();
    d.centerAndZoom(a, b.zoom);
    var e = {anchor: window.BMAP_ANCHOR_BOTTOM_RIGHT, offset: new window.BMap.Size(10, 10)};
    if (!b.hasOwnProperty("noneNavigation")) {
        d.addControl(new window.BMap.NavigationControl(e))
    }
    if (!b.hasOwnProperty("noneScale")) {
        d.addControl(new window.BMap.ScaleControl())
    }
    if (b.hasOwnProperty("enableMapTypeControl")) {
        d.addControl(new window.BMap.MapTypeControl({mapTypes: [window.BMAP_NORMAL_MAP, window.BMAP_HYBRID_MAP]}))
    }
    if (!b.hasOwnProperty("noneScrollWheelZoom")) {
        d.enableScrollWheelZoom()
    }
    return d
};
InnTwoMapCore.removeOverlay = function (a, b) {
    a.removeOverlay(b)
};
InnTwoMapCore.drawPolyLine = function (b, a) {
    if (!a) {
        a = {}
    }
    if (!a.hasOwnProperty("strokeWeight")) {
        a.strokeWeight = 5
    }
    if (!a.hasOwnProperty("strokeOpacity")) {
        a.strokeOpacity = 1
    }
    if (!a.hasOwnProperty("strokeColor")) {
        a.strokeColor = "#00A1CB"
    }
    var c = new window.BMap.Polyline(b, {strokeColor: a.strokeColor, strokeWeight: a.strokeWeight, strokeOpacity: a.strokeOpacity});
    a.map.addOverlay(c);
    return c
};
InnTwoMapCore.mapLoaded = function (b, a) {
    b.addEventListener("load", a)
};
InnTwoMapCore.mapTilesLoaded = function (b, a) {
    b.addEventListener("tilesloaded", a)
};
InnTwoMapCore.clicked = function (b, a) {
    b.addEventListener("click", a)
};
InnTwoMapCore.touchend = function (b, a) {
    b.addEventListener("touchend", a)
};
InnTwoMapCore.innTwoOverLay = function (a) {
    this._point = a.point;
    this._innerHtml = a.innerHtml;
    this._contianerClassName = a.contianerClassName;
    this._jsonData = typeof a.jsonData === "undefined" ? "" : a.jsonData;
    this._markerNumber = a.markerNumber
};
InnTwoMapCore.innTwoOverLay.prototype.onClicked = null;
InnTwoMapCore.innTwoOverLay.prototype.onTouchend = null;
InnTwoMapCore.innTwoOverLay.prototype.isNail = false;
if (window.BMap) {
    InnTwoMapCore.innTwoOverLay.prototype = new window.BMap.Overlay()
}
InnTwoMapCore.innTwoOverLay.prototype.initialize = function (b) {
    var d;
    if (typeof this._markerNumber === "undefined") {
        d = ""
    } else {
        d = this._markerNumber
    }
    var a = "";
    if (typeof this._innerHtml !== "undefined") {
        a = this._innerHtml
    }
    this._map = b;
    var c = this._div = document.createElement("div");
    c.className = this._contianerClassName;
    c.style.zIndex = window.BMap.Overlay.getZIndex(this._point.lat);
    c.innerHTML = "<div style='display:none;' class='place_marker_json_data'>" + this._jsonData + "</div><div class='place_marker_inner_html'><span class='marker-number-span'>" + d + "</span><div class='markerOverlayContainer' onmouseenter='window.overlayOnmouseEnter(this);' onmouseleave='window.overlayOnmouseLeave(this);'>" + a + "</div></div>";
    if (this.onClicked) {
        c.onclick = this.onClicked
    }
    if (this.onTouchend) {
        $(c).on("tap", function () {
            this.onTouchend()
        })
    }
    b.getPanes().labelPane.appendChild(c);
    return c
};
InnTwoMapCore.innTwoOverLay.prototype.draw = function () {
    var a = this._map;
    var b = a.pointToOverlayPixel(this._point);
    this._div.style.left = b.x - 10 + "px";
    this._div.style.top = b.y - 25 + "px"
};
InnTwoMapCore.innTwoOverLay.prototype.openAttractionOverLay = function () {
    $(this._div).find(".place_marker_inner_html").find(".markerOverlayContainer").show()
};
InnTwoMapCore.innTwoOverLay.prototype.hideAttractionOverLay = function () {
    $(this._div).find(".place_marker_inner_html").find(".markerOverlayContainer").hide()
};
InnTwoMapCore.innTwoOverLay.prototype.clientClick = function () {
    $(this._div).click()
};
window.overlayOnmouseEnter = function (a) {
    window.zIndex = $(a).parents(".home_place_marker").css("z-index");
    $(a).parents(".home_place_marker").css({"z-index": "1"})
};
window.overlayOnmouseLeave = function (a) {
    $(a).parents(".home_place_marker").css({"z-index": window.zIndex})
};
InnTwoMapCore.addMarkerInMapByOverLay = function (a) {
    var b = new InnTwoMapCore.innTwoOverLay(a);
    b.onClicked = a.markerClicked;
    a.map.addOverlay(b);
    return b
};
InnTwoMapCore.createPoint = function (b, a) {
    var c = new window.BMap.Point(b, a);
    return c
};
InnTwoMapCore.drawCircle = function (c) {
    var b = typeof c.circleStyle === "undefined" ? {strokeColor: "#00a1cb", fillColor: "#00a1cb", strokeWeight: 1, fillOpacity: 0.1, strokeOpacity: 0.5} : c.circleStyle;
    var a = new window.BMap.Circle(c.point, c.radius, b);
    c.map.addOverlay(a);
    return a
};
InnTwoMapCore.lnglatMaxMin = function (e) {
    var c = Enumerable.From(e).MaxBy("$.lng");
    var a = Enumerable.From(e).MaxBy("$.lat");
    var d = Enumerable.From(e).MinBy("$.lng");
    var b = Enumerable.From(e).MinBy("$.lat");
    return[c, a, d, b]
};
InnTwoMapCore.ConvertLatLngToSogou = function (a) {
    var c = 3;
    if (a.type) {
        c = a.type
    }
    var b = "http://api.go2map.com/engine/api/translate/json";
    window.sogouTranslateCallBack = function (e) {
        if (e && e.status == "ok") {
            var d = e.response.points;
            if (d && d.length > 0) {
                a.callBack(d[0]);
                return
            }
        }
        a.callBack("")
    };
    $.ajax({url: b, data: {points: a.lnglat, type: c, cb: "sogouTranslateCallBack", clientid: "1b7178271844e497"}, dataType: "jsonp", async: false})
};
InnTwoMapCore.trafficWayMapping = function (a) {
    switch (Number(a.way)) {
        case 0:
            a.driving();
            break;
        case 1:
            a.transit();
            break;
        case 2:
            a.train();
            break;
        case 3:
            a.plane();
            break;
        case 4:
            if (typeof a.walking !== "undefined") {
                a.walking()
            }
            break;
        default:
            a.driving();
            break
    }
};
var inntwoMapSearch = {};
inntwoMapSearch.addressSearchBatch = function (a, c, e) {
    if (a.length < 1) {
        return
    }
    var f = [];

    function b(g) {
        f.push(g);
        if (d != a.length - 1) {
            d++;
            inntwoMapSearch.addressSearch(a[d], e, b)
        } else {
            c(f)
        }
    }

    var d = 0;
    inntwoMapSearch.addressSearch(a[d], e, b)
};
inntwoMapSearch.drivePolicies = [window.BMAP_DRIVING_POLICY_LEAST_TIME, window.BMAP_DRIVING_POLICY_LEAST_DISTANCE, window.BMAP_DRIVING_POLICY_AVOID_HIGHWAYS];
var inntwoDriving;
inntwoMapSearch.createDrivingRoute = function (g, a, k, b, f) {
    if (!k) {
        k = {strokeWeight: 5, strokeOpacity: 1, strokeColor: "#00A1cb"}
    }
    if (g.length < 2) {
        return
    }
    if (!b) {
        b = inntwoMapSearch.drivePolicies[0]
    } else {
        b = inntwoMapSearch.drivePolicies[b]
    }
    var d = [];
    var j = [];
    var h = [];
    var e = 0;
    var c = [];
    inntwoDriving = new window.BMap.DrivingRoute(f);
    inntwoDriving.setPolicy(b);
    inntwoDriving.setSearchCompleteCallback(function () {
        var l = inntwoDriving.getStatus();
        if (l == 0) {
            var o = inntwoDriving.getResults();
            j.push(o);
            var m = o.getPlan(0).getRoute(0).getPath();
            h = h.concat(m);
            var i = {};
            i.distanceClear = o.getPlan(0).getDistance(false);
            i.durationClear = o.getPlan(0).getDuration(false);
            if (i.distanceClear && i.durationClear) {
                d.push(i)
            }
            if (e == g.length - 2) {
                c.push(o.getStart());
                c.push(o.getEnd())
            } else {
                if (e == 0) {
                    c.push(o.getStart())
                } else {
                    c.push(o.getStart())
                }
            }
            if (e < g.length - 2) {
                e++;
                inntwoDriving.search(g[e], g[e + 1])
            } else {
                var n = InnTwoMapCore.drawPolyLine(h, {strokeWeight: k.strokeWeight, strokeOpacity: k.strokeOpacity, strokeColor: k.strokeColor, map: f});
                a(j, c, h, n, d)
            }
        } else {
            inntwoMapSearch.addressSearchBatch([g[e], g[e + 1]], function (q) {
                var r = q[0].getPoi(0);
                var p = q[1].getPoi(0);
                if (typeof r !== "undefined" && r && typeof p !== "undefined" && p) {
                    inntwoDriving.search(r, p)
                } else {
                    a()
                }
            }, f)
        }
    });
    inntwoDriving.search(g[e], g[e + 1])
};
inntwoMapSearch.searchPointDriveRoute = function (e, f, b, d, a) {
    if (!f) {
        f = {strokeWeight: 5, strokeOpacity: 1, strokeColor: "#00A1cb"}
    }
    if (e.length < 2) {
        return
    }
    if (!b) {
        b = inntwoMapSearch.drivePolicies[0]
    } else {
        b = inntwoMapSearch.drivePolicies[b]
    }
    var c = new window.BMap.DrivingRoute(d);
    c.setPolicy(b);
    c.setSearchCompleteCallback(function () {
        if (c.getStatus() == 0) {
            var i = c.getResults();
            var g = i.getPlan(0).getRoute(0).getPath();
            var h = InnTwoMapCore.drawPolyLine(g, {strokeWeight: f.strokeWeight, strokeOpacity: f.strokeOpacity, strokeColor: f.strokeColor, map: d});
            a(i, h)
        } else {
            a(null)
        }
    });
    c.search(e[0], e[1])
};
inntwoMapSearch.searchTransitFlag = 0;
inntwoMapSearch.searchTransitCfg = null;
inntwoMapSearch.searchTransit = function (a) {
    inntwoMapSearch.searchTransitCfg = a;
    var b = [BMAP_TRANSIT_POLICY_LEAST_TIME, BMAP_TRANSIT_POLICY_LEAST_TRANSFER, BMAP_TRANSIT_POLICY_LEAST_WALKING];
    if (!a.transitPolicy) {
        a.transitPolicy = b[0]
    } else {
        a.transitPolicy = b[a.transitPolicy]
    }
    var c = new BMap.TransitRoute(a.map);
    c.setPolicy(a.transitPolicy);
    c.setSearchCompleteCallback(function () {
        var e = c.getStatus();
        var d = c.getResults();
        if (e != 0) {
            if (inntwoMapSearch.searchTransitFlag < 2) {
                inntwoMapSearch.searchTransitFlag++;
                setTimeout(function () {
                    inntwoMapSearch.searchTransit(inntwoMapSearch.searchTransitCfg)
                }, 500)
            } else {
                inntwoMapSearch.searchTransitFlag = 0;
                a.callBack(d)
            }
        } else {
            inntwoMapSearch.searchTransitFlag = 0;
            a.callBack(d)
        }
    });
    c.search(a.start, a.end)
};
inntwoMapSearch.searchPathPointByPoint = function (b) {
    var a = new window.BMap.DrivingRoute(b.map);
    a.setPolicy(inntwoMapSearch.drivePolicies[b.policyIndex]);
    a.setSearchCompleteCallback(function () {
        if (a.getStatus() == 0) {
            var c = a.getResults();
            b.callBack(c)
        } else {
            b.callBack(null)
        }
    });
    a.search(b.point1, b.point2)
};
inntwoMapSearch.searchDistanceAndDatetime = function (e, b, a, d) {
    var c = new window.BMap.DrivingRoute(d);
    c.setSearchCompleteCallback(function () {
        var f = c.getStatus();
        var g = c.getResults();
        if (f != 0) {
            a(null);
            return
        }
        a(g)
    });
    c.search(e, b)
};
inntwoMapSearch.searchWalkDistanceDur = function (b) {
    var a = new window.BMap.WalkingRoute(b.map);
    a.setSearchCompleteCallback(function (c) {
        var e = a.getStatus();
        if (e == 0) {
            var d = a.getResults();
            b.searchCompleteCallback(d);
            return
        }
        b.searchCompleteCallback(null)
    });
    a.search(b.start, b.destination)
};
inntwoMapSearch.markChannels = 0;
inntwoMapSearch.markChannelMarker = function (a) {
    inntwoMapSearch.markChannels = 0;
    var b = a.points;
    var e = {};
    var c = Enumerable.From(b).Select(function (f) {
        return f.point
    }).ToArray();
    if (c.length > 1) {
        a.map.setViewport(c)
    } else {
        if (c.length == 1) {
            a.map.setCenter(c[0], 10)
        }
    }
    (function d(g, f) {
        if (g > b.length - 1) {
            f();
            return
        }
        var h = c[g];
        inntwoMapSearch.getAddressByPoint(h, function (i) {
            if (i.province == i.city) {
                i.city = ""
            }
            var j = InnTwoTools.format("{0}{1}{2}{3}{4}", i.province, i.city, i.district, i.street, i.streetNumber);
            var m = {province: i.province, showWord: j, city: i.city, district: i.strict, address: j, lng: i.point.lng, lat: i.point.lat, pointStr: i.point.lng + "," + i.point.lat, placeName: j, imgUrl: "/img/asset2/customPlaceImg.jpg", parentCategory: "3", placeInfoId: InnTwoTools.getIdentifyStringByDate()};
            var k = $("#createItineraryChannelToal").text();
            k = Number(k);
            $("#createItineraryChannelToal").text(k + 1);
            sideOfRoadAttrViewModel.driveSearchChanneles.push(m);
            var l;
            if (g == 0) {
                l = a.linestyle.startClassName
            } else {
                if (g == b.length - 1) {
                    l = a.linestyle.destinationClassName
                } else {
                    l = a.linestyle.channelClassName
                }
            }
            inntwoMapSearch.addMarkerForMap(i.point, m, a.html, l, a.map, a.showPlaceInfo, a.closeOtherMessage);
            e[i.point.lng + "," + i.point.lat] = i.point;
            inntwoMapSearch.markChannels++;
            d(inntwoMapSearch.markChannels, a.callBack)
        })
    })(inntwoMapSearch.markChannels, function () {
    })
};
inntwoMapSearch.addMarkerForMap = function (h, c, g, e, d, i, a) {
    var f = {};
    f.point = h;
    f.jsonData = JSON.stringify(c);
    f.contianerClassName = e;
    f.markerClicked = function () {
        if (i) {
            window.placeOverlayClick = true;
            setTimeout(function () {
                window.placeOverlayClick = false
            }, 200);
            if (a) {
                a()
            }
            $(this).find(".markerOverlayContainer").show()
        }
    };
    f.map = d;
    f.markerNumber = "";
    if (g) {
        var b = InnTwoTools.getTemplateByMustache({url: g.url, selector: g.selector, json: c});
        f.innerHtml = b
    }
    return InnTwoMapCore.addMarkerInMapByOverLay(f)
};
inntwoMapSearch.rightMouseMenu = function (b, d, c) {
    window.contextMenu = new window.BMap.ContextMenu();
    for (var a = 0; a < d.length; a++) {
        contextMenu.addItem(new window.BMap.MenuItem(d[a].text, d[a].callback, 100));
        if (a == 1 || a == 3) {
            contextMenu.addSeparator()
        }
    }
    contextMenu.addEventListener("open", function (e) {
        c(e)
    });
    b.addContextMenu(contextMenu)
};
inntwoMapSearch.rightClick = function (b, a) {
    b.addEventListener("rightclick", function (c) {
        a(c)
    })
};
inntwoMapSearch.getAddressByPoint = function (c, a) {
    var b = new window.BMap.Geocoder();
    b.getLocation(c, function (e) {
        var d = e.addressComponents;
        if (a) {
            d.point = e.point;
            a(d)
        }
    })
};
inntwoMapSearch.addressSearch = function (e, c, a) {
    var b = new window.BMap.LocalSearch(c, {onSearchComplete: d});

    function d() {
        var f = b.getResults();
        a(f)
    }

    b.search(e)
};
inntwoMapSearch.multiAddressSearch = function (c, d, a) {
    var b = 0;
    var e = [];

    function f() {
        if (b < c.length) {
            inntwoMapSearch.addressSearch(c[b], d, function (g) {
                e.push(g.point);
                b++;
                f()
            })
        } else {
            a(e)
        }
    }

    f()
};
inntwoMapSearch.getNearbyAttractions = function (a) {
    $.ajax({url: ajaxUrl.NearbyAttractions_Url, type: "post", data: {point: a.point, pageIndex: 1, distance: a.distance}, success: function (b) {
        a.callBack(b)
    }})
};
inntwoMapSearch.showAttractionsMarker = function (c) {
    for (var a = 0; a < c.pointInfos.length; a++) {
        var g = c.pointInfos[a];
        var d = {};
        d.point = {lat: g.Latitude, lng: g.Longitude};
        d.pointStr = g.Longitude + "," + g.Latitude;
        d.lng = g.Longitude;
        d.lat = g.Latitude;
        d.Category = g.PlaceCategory ? g.PlaceCategory.CategoryId : "";
        d.placeName = g.PlaceName;
        d.imgUrl = g.Ico;
        d.placeInfoId = g.PlaceInfoId;
        d.defaultImgUrl = g.Image;
        d.remarkerCategory = g.PlaceCategoryRemarks;
        d.province = g.Province;
        d.city = g.City;
        d.district = g.District;
        d.price = g.Price;
        d.CategoryId = g.PlaceCategoryId;
        var b = inntwoMapSearch.getMarkerClassName(d.Category);
        d.contianerClassName = b;
        d.address = InnTwoTools.format("{0}{1}{2}{3}", g.Province, g.City, g.District, g.PlaceName);
        var f = Mustache.render(c.overlayTemp, d);
        var e = JSON.stringify(d);
        d.innerHtml = f;
        d.jsonData = e;
        d.map = c.map;
        InnTwoMapCore.addMarkerInMapByOverLay(d)
    }
};
inntwoMapSearch.getMarkerClassName = function (a) {
    var b = "home_place_marker";
    inntwoBase.placeCategryByCategoryId({categoryId: a, civilize: function () {
        b += " schedule-update-place-civilize"
    }, nature: function () {
        b += " schedule-update-place-nature"
    }, hotel: function () {
        b += " schedule-update-place-hotel"
    }, entertain: function () {
        b += " schedule-update-place-entertain"
    }, hotelMore: function () {
        b += " schedule-update-hotel-more"
    }, defaultStyle: function () {
        b = "ordinary_marker_class ordinary_marker_channel"
    }, customize: function () {
        b = "ordinary_marker_class ordinary_marker_channel"
    }, aspect: function () {
        b += " schedule-update-place-aspect"
    }, food: function () {
        b += " schedule-update-place-food"
    }});
    return b
};
inntwoMapSearch.setMarkerClick = function () {
    $(".home_place_marker").unbind("click").click(function (a) {
        a.stopPropagation();
        window.placeOverlayClick = true;
        setTimeout(function () {
            window.placeOverlayClick = false
        }, 200);
        inntwoMapSearch.hideMarkerOverlay();
        $(this).find(".markerOverlayContainer").show()
    });
    $(".ordinary_marker_class").unbind("click").click(function (a) {
        a.stopPropagation();
        var b = $(this).find(".place_marker_json_data").text();
        if (b) {
            b = JSON.parse(b);
            if (b.Category == 6) {
                $(this).find(".search_place_overlay_place_name").removeAttr("onclick").css({cursor: "default"});
                $(this).find(".search_place_overlay_image").removeAttr("onclick").css({cursor: "default"})
            }
        }
        window.placeOverlayClick = true;
        setTimeout(function () {
            window.placeOverlayClick = false
        }, 200);
        inntwoMapSearch.hideMarkerOverlay();
        $(this).find(".markerOverlayContainer").show()
    })
};
inntwoMapSearch.hideMarkerOverlay = function () {
    $(".markerOverlayContainer").each(function () {
        var a = $(this).find(".search_place_overlay_nail_flag").text();
        if (a != 1) {
            $(this).hide()
        }
    })
};
inntwoMapSearch.mapClickHideOverlay = function (a) {
    InnTwoMapCore.clicked(a, function () {
        if (!window.placeOverlayClick) {
            inntwoMapSearch.hideMarkerOverlay()
        }
    })
};
inntwoMapSearch.destinationAddOverlayInMap = function (c) {
    var a = InnTwoTools.getIdentifyStringByDate();
    var d = {};
    d.point = InnTwoMapCore.createPoint(c.point.lng, c.point.lat);
    var b = {showWord: c.showWord, address: c.showWord, lng: c.point.lng, lat: c.point.lat, imgUrl: "/img/asset2/customPlaceImg.jpg", placeInfoId: a, pointStr: d.point, city: c.city};
    d.innerHtml = Mustache.render(c.overlayTemp, b);
    d.innerHtml += "<span class=''></span>";
    d.jsonData = JSON.stringify(b);
    d.contianerClassName = "ordinary_marker_class ordinary_marker_channel";
    d.map = c.map;
    InnTwoMapCore.addMarkerInMapByOverLay(d);
    inntwoMapSearch.setMarkerClick();
    $(".markerOverlayContainer").last().show()
};
inntwoMapSearch.addCloseMarkerBtn = function () {
    $(".ordinary_marker_channel").last().children(".place_marker_inner_html").append("<div class='customize-placeMarker-closeBtn create-itinerary-image'></div>");
    $(".ordinary_marker_channel").unbind("mouseenter").mouseenter(function () {
        $(this).find(".customize-placeMarker-closeBtn").show()
    }).unbind("mouseleave").mouseleave(function () {
        $(this).find(".customize-placeMarker-closeBtn").hide()
    });
    $(".customize-placeMarker-closeBtn").unbind("click").click(function () {
        $(this).parent().parent().remove()
    })
};
inntwoMapSearch.attractionMessageBox = function (a) {
    var b = new window.BMapLib.SearchInfoWindow(a.map, a.content, {title: a.title, width: a.width, height: a.height, panel: "", enableAutoPan: true, searchTypes: [window.BMAPLIB_TAB_SEARCH, window.BMAPLIB_TAB_TO_HERE, window.BMAPLIB_TAB_FROM_HERE]});
    b.open(a.marker)
};
inntwoMapSearch.sogouMapGenerate = function (b) {
    var a = {zoom: 10, mapTypeId: window.sogou.maps.MapTypeId.ROADMAP, callback: function () {
        if (b && b.callBack) {
            b.callBack()
        }
    }};
    var d = $("#sogouMapWrapperTempl").html();
    $("body").append(d);
    var c = new window.sogou.maps.Map(document.getElementById("soGouMapContainer"), a);
    $("body").css("overflow-y", "auto");
    return c
};
inntwoMapSearch.calculateTollCost = function (f) {
    var d, e;
    d = f.p1;
    e = f.p2;
    var g = {map: f.map};
    if (g.map == undefined) {
        var h = $("#sogouMapWrapperTempl").html();
        $("body").append(h);
        var b = {zoom: 10, mapTypeId: window.sogou.maps.MapTypeId.ROADMAP};
        g.map = new window.sogou.maps.Map(document.getElementById("soGouMapContainer"), b)
    }
    d = new window.sogou.maps.Point(d.x, d.y);
    e = new window.sogou.maps.Point(e.x, e.y);
    var a = {map: g.map, origin: d, destination: e, tactic: 1};
    var c = new window.sogou.maps.Driving();
    c.route(a, function (k) {
        var i = {map: g.map, drivingResult: k, panel: document.getElementById("tollWrapper")};
        $("#tollWrapper").html("");
        var j = new window.sogou.maps.DrivingRenderer(i);
        setTimeout(function () {
            var l = $("#tollWrapper").find(".charge");
            var m = 0;
            $(l).each(function () {
                var n = $(this).text();
                if (n) {
                    n = n.replace("收费", "");
                    n = n.replace("元", "");
                    if (n) {
                        m += Number(n)
                    }
                }
            });
            g.roadToll = m;
            if (f.callBack) {
                f.callBack(g)
            }
        }, 200)
    })
};
(function (f, g, h, i) {
    var j = f(g);
    f.fn.lazyload = function (a) {
        function k() {
            var c = 0;
            b.each(function () {
                var l = f(this);
                if (e.skip_invisible && !l.is(":visible")) {
                    return
                }
                if (!f.abovethetop(this, e) && !f.leftofbegin(this, e)) {
                    if (!f.belowthefold(this, e) && !f.rightoffold(this, e)) {
                        l.trigger("appear"), c = 0
                    } else {
                        if (++c > e.failure_limit) {
                            return !1
                        }
                    }
                }
            })
        }

        var b = this, d, e = {threshold: 0, failure_limit: 0, event: "scroll", effect: "show", container: g, data_attribute: "original", skip_invisible: !0, appear: null, load: null};
        return a && (i !== a.failurelimit && (a.failure_limit = a.failurelimit, delete a.failurelimit), i !== a.effectspeed && (a.effect_speed = a.effectspeed, delete a.effectspeed), f.extend(e, a)), d = e.container === i || e.container === g ? j : f(e.container), 0 === e.event.indexOf("scroll") && d.bind(e.event, function (c) {
            return k()
        }), this.each(function () {
            var l = this, m = f(l);
            l.loaded = !1, m.one("appear", function () {
                if (!this.loaded) {
                    if (e.appear) {
                        var c = b.length;
                        e.appear.call(l, c, e)
                    }
                    f("<img />").bind("load", function () {
                        m.hide().attr("src", m.data(e.data_attribute))[e.effect](e.effect_speed), l.loaded = !0;
                        var n = f.grep(b, function (p) {
                            return !p.loaded
                        });
                        b = f(n);
                        if (e.load) {
                            var o = b.length;
                            e.load.call(l, o, e)
                        }
                    }).attr("src", m.data(e.data_attribute))
                }
            }), 0 !== e.event.indexOf("scroll") && m.bind(e.event, function (c) {
                l.loaded || m.trigger("appear")
            })
        }), j.bind("resize", function (c) {
            k()
        }), /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && j.bind("pageshow", function (c) {
            c.originalEvent.persisted && b.each(function () {
                f(this).trigger("appear")
            })
        }), f(g).load(function () {
            k()
        }), this
    }, f.belowthefold = function (a, b) {
        var d;
        return b.container === i || b.container === g ? d = j.height() + j.scrollTop() : d = f(b.container).offset().top + f(b.container).height(), d <= f(a).offset().top - b.threshold
    }, f.rightoffold = function (a, b) {
        var d;
        return b.container === i || b.container === g ? d = j.width() + j.scrollLeft() : d = f(b.container).offset().left + f(b.container).width(), d <= f(a).offset().left - b.threshold
    }, f.abovethetop = function (a, b) {
        var d;
        return b.container === i || b.container === g ? d = j.scrollTop() : d = f(b.container).offset().top, d >= f(a).offset().top + b.threshold + f(a).height()
    }, f.leftofbegin = function (a, b) {
        var d;
        return b.container === i || b.container === g ? d = j.scrollLeft() : d = f(b.container).offset().left, d >= f(a).offset().left + b.threshold + f(a).width()
    }, f.inviewport = function (a, d) {
        return !f.rightoffold(a, d) && !f.leftofbegin(a, d) && !f.belowthefold(a, d) && !f.abovethetop(a, d)
    }, f.extend(f.expr[":"], {"below-the-fold": function (a) {
        return f.belowthefold(a, {threshold: 0})
    }, "above-the-top": function (a) {
        return !f.belowthefold(a, {threshold: 0})
    }, "right-of-screen": function (a) {
        return f.rightoffold(a, {threshold: 0})
    }, "left-of-screen": function (a) {
        return !f.rightoffold(a, {threshold: 0})
    }, "in-viewport": function (a) {
        return f.inviewport(a, {threshold: 0})
    }, "above-the-fold": function (a) {
        return !f.belowthefold(a, {threshold: 0})
    }, "right-of-fold": function (a) {
        return f.rightoffold(a, {threshold: 0})
    }, "left-of-fold": function (a) {
        return !f.rightoffold(a, {threshold: 0})
    }})
})(jQuery, window, document);
!function (a) {
    var b = function (c, f) {
        var d = /[^\w\-\.:]/.test(c) ? new Function(b.arg + ",tmpl", "var _e=tmpl.encode" + b.helper + ",_s='" + c.replace(b.regexp, b.func) + "';return _s;") : b.cache[c] = b.cache[c] || b(b.load(c));
        return f ? d(f, b) : function (g) {
            return d(g, b)
        }
    };
    b.cache = {}, b.load = function (c) {
        return document.getElementById(c).innerHTML
    }, b.regexp = /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g, b.func = function (f, g, i, h, d, j) {
        return g ? {"\n": "\\n", "\r": "\\r", "	": "\\t", " ": " "}[g] || "\\" + g : i ? "=" === i ? "'+_e(" + h + ")+'" : "'+" + h + "+'" : d ? "';" : j ? "_s+='" : void 0
    }, b.encReg = /[<>&"'\x00]/g, b.encMap = {"<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;"}, b.encode = function (c) {
        return String(c).replace(b.encReg, function (d) {
            return b.encMap[d] || ""
        })
    }, b.arg = "o", b.helper = ",print=function(s,e){_s+=e&&(s||'')||_e(s);},include=function(s,d){_s+=tmpl(s,d);}", "function" == typeof define && define.amd ? define(function () {
        return b
    }) : a.tmpl = b
}(this);
(function (a) {
    var c = function (f, g, d) {
        var h, k, j = document.createElement("img");
        if (j.onerror = g, j.onload = function () {
            !k || d && d.noRevoke || c.revokeObjectURL(k), g && g(c.scale(j, d))
        }, c.isInstanceOf("Blob", f) || c.isInstanceOf("File", f)) {
            h = k = c.createObjectURL(f), j._type = f.type
        } else {
            if ("string" != typeof f) {
                return !1
            }
            h = f, d && d.crossOrigin && (j.crossOrigin = d.crossOrigin)
        }
        return h ? (j.src = h, j) : c.readFile(f, function (i) {
            var l = i.target;
            l && l.result ? j.src = l.result : g && g(i)
        })
    }, b = window.createObjectURL && window || window.URL && URL.revokeObjectURL && URL || window.webkitURL && webkitURL;
    c.isInstanceOf = function (d, f) {
        return Object.prototype.toString.call(f) === "[object " + d + "]"
    }, c.transformCoordinates = function () {
    }, c.getTransformedOptions = function (d) {
        return d
    }, c.renderImageToCanvas = function (h, v, j, f, m, q, p, u, g, k) {
        return h.getContext("2d").drawImage(v, j, f, m, q, p, u, g, k), h
    }, c.hasCanvasOption = function (d) {
        return d.canvas || d.crop
    }, c.scale = function (w, A) {
        A = A || {};
        var j, D, G, E, H, t, B, q, J, y = document.createElement("canvas"), x = w.getContext || c.hasCanvasOption(A) && y.getContext, z = w.naturalWidth || w.width, C = w.naturalHeight || w.height, F = z, I = C, k = function () {
            var d = Math.max((G || F) / F, (E || I) / I);
            d > 1 && (F = Math.ceil(F * d), I = Math.ceil(I * d))
        }, K = function () {
            var d = Math.min((j || F) / F, (D || I) / I);
            1 > d && (F = Math.ceil(F * d), I = Math.ceil(I * d))
        };
        return x && (A = c.getTransformedOptions(A), B = A.left || 0, q = A.top || 0, A.sourceWidth ? (H = A.sourceWidth, void 0 !== A.right && void 0 === A.left && (B = z - H - A.right)) : H = z - B - (A.right || 0), A.sourceHeight ? (t = A.sourceHeight, void 0 !== A.bottom && void 0 === A.top && (q = C - t - A.bottom)) : t = C - q - (A.bottom || 0), F = H, I = t), j = A.maxWidth, D = A.maxHeight, G = A.minWidth, E = A.minHeight, x && j && D && A.crop ? (F = j, I = D, J = H / t - j / D, 0 > J ? (t = D * H / j, void 0 === A.top && void 0 === A.bottom && (q = (C - t) / 2)) : J > 0 && (H = j * t / D, void 0 === A.left && void 0 === A.right && (B = (z - H) / 2))) : ((A.contain || A.cover) && (G = j = j || G, E = D = D || E), A.cover ? (K(), k()) : (k(), K())), x ? (y.width = F, y.height = I, c.transformCoordinates(y, A), c.renderImageToCanvas(y, w, B, q, H, t, 0, 0, F, I)) : (w.width = F, w.height = I, w)
    }, c.createObjectURL = function (d) {
        return b ? b.createObjectURL(d) : !1
    }, c.revokeObjectURL = function (d) {
        return b ? b.revokeObjectURL(d) : !1
    }, c.readFile = function (f, h, g) {
        if (window.FileReader) {
            var d = new FileReader;
            if (d.onload = d.onerror = h, g = g || "readAsDataURL", d[g]) {
                return d[g](f), d
            }
        }
        return !1
    }, "function" == typeof define && define.amd ? define(function () {
        return c
    }) : a.loadImage = c
})(this), function (a) {
    "function" == typeof define && define.amd ? define(["load-image"], a) : a(window.loadImage)
}(function (a) {
    if (window.navigator && window.navigator.platform && /iP(hone|od|ad)/.test(window.navigator.platform)) {
        var b = a.renderImageToCanvas;
        a.detectSubsampling = function (c) {
            var f, d;
            return c.width * c.height > 1048576 ? (f = document.createElement("canvas"), f.width = f.height = 1, d = f.getContext("2d"), d.drawImage(c, -c.width + 1, 0), 0 === d.getImageData(0, 0, 1, 1).data[3]) : !1
        }, a.detectVerticalSquash = function (g, u) {
            var h, c, k, p, m, q = g.naturalHeight || g.height, f = document.createElement("canvas"), j = f.getContext("2d");
            for (u && (q /= 2), f.width = 1, f.height = q, j.drawImage(g, 0, 0), h = j.getImageData(0, 0, 1, q).data, c = 0, k = q, p = q; p > c;) {
                m = h[4 * (p - 1) + 3], 0 === m ? k = p : c = p, p = k + c >> 1
            }
            return p / q || 1
        }, a.renderImageToCanvas = function (y, e, B, E, C, F, q, z, k, H) {
            if ("image/jpeg" === e._type) {
                var w, t, x, A, D = y.getContext("2d"), G = document.createElement("canvas"), j = 1024, I = G.getContext("2d");
                if (G.width = j, G.height = j, D.save(), w = a.detectSubsampling(e), w && (B /= 2, E /= 2, C /= 2, F /= 2), t = a.detectVerticalSquash(e, w), w || 1 !== t) {
                    for (E *= t, k = Math.ceil(j * k / C), H = Math.ceil(j * H / F / t), z = 0, A = 0; F > A;) {
                        for (q = 0, x = 0; C > x;) {
                            I.clearRect(0, 0, j, j), I.drawImage(e, B, E, C, F, -x, -A, C, F), D.drawImage(G, 0, 0, j, j, q, z, k, H), x += j, q += k
                        }
                        A += j, z += H
                    }
                    return D.restore(), y
                }
            }
            return b(y, e, B, E, C, F, q, z, k, H)
        }
    }
}), function (a) {
    "function" == typeof define && define.amd ? define(["load-image"], a) : a(window.loadImage)
}(function (a) {
    var b = a.hasCanvasOption;
    a.hasCanvasOption = function (c) {
        return b(c) || c.orientation
    }, a.transformCoordinates = function (d, j) {
        var f = d.getContext("2d"), c = d.width, g = d.height, h = j.orientation;
        if (h) {
            switch (h > 4 && (d.width = g, d.height = c), h) {
                case 2:
                    f.translate(c, 0), f.scale(-1, 1);
                    break;
                case 3:
                    f.translate(c, g), f.rotate(Math.PI);
                    break;
                case 4:
                    f.translate(0, g), f.scale(1, -1);
                    break;
                case 5:
                    f.rotate(0.5 * Math.PI), f.scale(1, -1);
                    break;
                case 6:
                    f.rotate(0.5 * Math.PI), f.translate(0, -g);
                    break;
                case 7:
                    f.rotate(0.5 * Math.PI), f.translate(c, -g), f.scale(-1, 1);
                    break;
                case 8:
                    f.rotate(-0.5 * Math.PI), f.translate(-c, 0)
            }
        }
    }, a.getTransformedOptions = function (c) {
        if (!c.orientation || 1 === c.orientation) {
            return c
        }
        var f, d = {};
        for (f in c) {
            c.hasOwnProperty(f) && (d[f] = c[f])
        }
        switch (c.orientation) {
            case 2:
                d.left = c.right, d.right = c.left;
                break;
            case 3:
                d.left = c.right, d.top = c.bottom, d.right = c.left, d.bottom = c.top;
                break;
            case 4:
                d.top = c.bottom, d.bottom = c.top;
                break;
            case 5:
                d.left = c.top, d.top = c.left, d.right = c.bottom, d.bottom = c.right;
                break;
            case 6:
                d.left = c.top, d.top = c.right, d.right = c.bottom, d.bottom = c.left;
                break;
            case 7:
                d.left = c.bottom, d.top = c.right, d.right = c.top, d.bottom = c.left;
                break;
            case 8:
                d.left = c.bottom, d.top = c.left, d.right = c.top, d.bottom = c.right
        }
        return c.orientation > 4 && (d.maxWidth = c.maxHeight, d.maxHeight = c.maxWidth, d.minWidth = c.minHeight, d.minHeight = c.minWidth, d.sourceWidth = c.sourceHeight, d.sourceHeight = c.sourceWidth), d
    }
}), function (a) {
    "function" == typeof define && define.amd ? define(["load-image"], a) : a(window.loadImage)
}(function (a) {
    var b = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
    a.blobSlice = b && function () {
        var c = this.slice || this.webkitSlice || this.mozSlice;
        return c.apply(this, arguments)
    }, a.metaDataParsers = {jpeg: {65505: []}}, a.parseMetaData = function (j, d, c) {
        c = c || {};
        var e = this, g = c.maxMetaDataSize || 262144, f = {}, h = !(window.DataView && j && j.size >= 12 && "image/jpeg" === j.type && a.blobSlice);
        (h || !a.readFile(a.blobSlice.call(j, 0, g), function (w) {
            var q, v, k, p, i = w.target.result, x = new DataView(i), n = 2, m = x.byteLength - 4, o = n;
            if (65496 === x.getUint16(0)) {
                for (; m > n && (q = x.getUint16(n), q >= 65504 && 65519 >= q || 65534 === q);) {
                    if (v = x.getUint16(n + 2) + 2, n + v > x.byteLength) {
                        console.log("Invalid meta data: Invalid segment size.");
                        break
                    }
                    if (k = a.metaDataParsers.jpeg[q]) {
                        for (p = 0; k.length > p; p += 1) {
                            k[p].call(e, x, n, v, f, c)
                        }
                    }
                    n += v, o = n
                }
                !c.disableImageHead && o > 6 && (f.imageHead = i.slice ? i.slice(0, o) : new Uint8Array(i).subarray(0, o))
            } else {
                console.log("Invalid JPEG file: Missing JPEG marker.")
            }
            d(f)
        }, "readAsArrayBuffer")) && d(f)
    }
}), function (a) {
    "function" == typeof define && define.amd ? define(["load-image", "load-image-meta"], a) : a(window.loadImage)
}(function (a) {
    a.ExifMap = function () {
        return this
    }, a.ExifMap.prototype.map = {Orientation: 274}, a.ExifMap.prototype.get = function (b) {
        return this[b] || this[this.map[b]]
    }, a.getExifThumbnail = function (c, h, d) {
        var b, f, g;
        if (!d || h + d > c.byteLength) {
            return console.log("Invalid Exif data: Invalid thumbnail data."), void 0
        }
        for (b = [], f = 0; d > f; f += 1) {
            g = c.getUint8(h + f), b.push((16 > g ? "0" : "") + g.toString(16))
        }
        return"data:image/jpeg,%" + b.join("%")
    }, a.exifTagTypes = {1: {getValue: function (b, c) {
        return b.getUint8(c)
    }, size: 1}, 2: {getValue: function (b, c) {
        return String.fromCharCode(b.getUint8(c))
    }, size: 1, ascii: !0}, 3: {getValue: function (b, d, c) {
        return b.getUint16(d, c)
    }, size: 2}, 4: {getValue: function (b, d, c) {
        return b.getUint32(d, c)
    }, size: 4}, 5: {getValue: function (b, d, c) {
        return b.getUint32(d, c) / b.getUint32(d + 4, c)
    }, size: 8}, 9: {getValue: function (b, d, c) {
        return b.getInt32(d, c)
    }, size: 4}, 10: {getValue: function (b, d, c) {
        return b.getInt32(d, c) / b.getInt32(d + 4, c)
    }, size: 8}}, a.exifTagTypes[7] = a.exifTagTypes[1], a.getExifValue = function (y, m, b, q, w, v) {
        var x, h, p, e, z, k, j = a.exifTagTypes[q];
        if (!j) {
            return console.log("Invalid Exif data: Invalid tag type."), void 0
        }
        if (x = j.size * w, h = x > 4 ? m + y.getUint32(b + 8, v) : b + 8, h + x > y.byteLength) {
            return console.log("Invalid Exif data: Invalid data offset."), void 0
        }
        if (1 === w) {
            return j.getValue(y, h, v)
        }
        for (p = [], e = 0; w > e; e += 1) {
            p[e] = j.getValue(y, h + e * j.size, v)
        }
        if (j.ascii) {
            for (z = "", e = 0; p.length > e && (k = p[e], "\0" !== k); e += 1) {
                z += k
            }
            return z
        }
        return p
    }, a.parseExifTag = function (g, c, b, d, f) {
        var e = g.getUint16(b, d);
        f.exif[e] = a.getExifValue(g, c, b, g.getUint16(b + 2, d), g.getUint32(b + 4, d), d)
    }, a.parseExifTags = function (c, k, d, b, f) {
        var h, g, j;
        if (d + 6 > c.byteLength) {
            return console.log("Invalid Exif data: Invalid directory offset."), void 0
        }
        if (h = c.getUint16(d, b), g = d + 2 + 12 * h, g + 4 > c.byteLength) {
            return console.log("Invalid Exif data: Invalid directory size."), void 0
        }
        for (j = 0; h > j; j += 1) {
            this.parseExifTag(c, k, d + 2 + 12 * j, b, f)
        }
        return c.getUint32(g, b)
    }, a.parseExifData = function (m, e, b, g, j) {
        if (!j.disableExif) {
            var h, k, c, f = e + 10;
            if (1165519206 === m.getUint32(e + 4)) {
                if (f + 8 > m.byteLength) {
                    return console.log("Invalid Exif data: Invalid segment size."), void 0
                }
                if (0 !== m.getUint16(e + 8)) {
                    return console.log("Invalid Exif data: Missing byte alignment offset."), void 0
                }
                switch (m.getUint16(f)) {
                    case 18761:
                        h = !0;
                        break;
                    case 19789:
                        h = !1;
                        break;
                    default:
                        return console.log("Invalid Exif data: Invalid byte alignment marker."), void 0
                }
                if (42 !== m.getUint16(f + 2, h)) {
                    return console.log("Invalid Exif data: Missing TIFF marker."), void 0
                }
                k = m.getUint32(f + 4, h), g.exif = new a.ExifMap, k = a.parseExifTags(m, f, f + k, h, g), k && !j.disableExifThumbnail && (c = {exif: {}}, k = a.parseExifTags(m, f, f + k, h, c), c.exif[513] && (g.exif.Thumbnail = a.getExifThumbnail(m, f + c.exif[513], c.exif[514]))), g.exif[34665] && !j.disableExifSub && a.parseExifTags(m, f, f + g.exif[34665], h, g), g.exif[34853] && !j.disableExifGps && a.parseExifTags(m, f, f + g.exif[34853], h, g)
            }
        }
    }, a.metaDataParsers.jpeg[65505].push(a.parseExifData)
}), function (a) {
    "function" == typeof define && define.amd ? define(["load-image", "load-image-exif"], a) : a(window.loadImage)
}(function (c) {
    var f, d, b;
    c.ExifMap.prototype.tags = {256: "ImageWidth", 257: "ImageHeight", 34665: "ExifIFDPointer", 34853: "GPSInfoIFDPointer", 40965: "InteroperabilityIFDPointer", 258: "BitsPerSample", 259: "Compression", 262: "PhotometricInterpretation", 274: "Orientation", 277: "SamplesPerPixel", 284: "PlanarConfiguration", 530: "YCbCrSubSampling", 531: "YCbCrPositioning", 282: "XResolution", 283: "YResolution", 296: "ResolutionUnit", 273: "StripOffsets", 278: "RowsPerStrip", 279: "StripByteCounts", 513: "JPEGInterchangeFormat", 514: "JPEGInterchangeFormatLength", 301: "TransferFunction", 318: "WhitePoint", 319: "PrimaryChromaticities", 529: "YCbCrCoefficients", 532: "ReferenceBlackWhite", 306: "DateTime", 270: "ImageDescription", 271: "Make", 272: "Model", 305: "Software", 315: "Artist", 33432: "Copyright", 36864: "ExifVersion", 40960: "FlashpixVersion", 40961: "ColorSpace", 40962: "PixelXDimension", 40963: "PixelYDimension", 42240: "Gamma", 37121: "ComponentsConfiguration", 37122: "CompressedBitsPerPixel", 37500: "MakerNote", 37510: "UserComment", 40964: "RelatedSoundFile", 36867: "DateTimeOriginal", 36868: "DateTimeDigitized", 37520: "SubSecTime", 37521: "SubSecTimeOriginal", 37522: "SubSecTimeDigitized", 33434: "ExposureTime", 33437: "FNumber", 34850: "ExposureProgram", 34852: "SpectralSensitivity", 34855: "PhotographicSensitivity", 34856: "OECF", 34864: "SensitivityType", 34865: "StandardOutputSensitivity", 34866: "RecommendedExposureIndex", 34867: "ISOSpeed", 34868: "ISOSpeedLatitudeyyy", 34869: "ISOSpeedLatitudezzz", 37377: "ShutterSpeedValue", 37378: "ApertureValue", 37379: "BrightnessValue", 37380: "ExposureBias", 37381: "MaxApertureValue", 37382: "SubjectDistance", 37383: "MeteringMode", 37384: "LightSource", 37385: "Flash", 37396: "SubjectArea", 37386: "FocalLength", 41483: "FlashEnergy", 41484: "SpatialFrequencyResponse", 41486: "FocalPlaneXResolution", 41487: "FocalPlaneYResolution", 41488: "FocalPlaneResolutionUnit", 41492: "SubjectLocation", 41493: "ExposureIndex", 41495: "SensingMethod", 41728: "FileSource", 41729: "SceneType", 41730: "CFAPattern", 41985: "CustomRendered", 41986: "ExposureMode", 41987: "WhiteBalance", 41988: "DigitalZoomRatio", 41989: "FocalLengthIn35mmFilm", 41990: "SceneCaptureType", 41991: "GainControl", 41992: "Contrast", 41993: "Saturation", 41994: "Sharpness", 41995: "DeviceSettingDescription", 41996: "SubjectDistanceRange", 42016: "ImageUniqueID", 42032: "CameraOwnerName", 42033: "BodySerialNumber", 42034: "LensSpecification", 42035: "LensMake", 42036: "LensModel", 42037: "LensSerialNumber", 0: "GPSVersionID", 1: "GPSLatitudeRef", 2: "GPSLatitude", 3: "GPSLongitudeRef", 4: "GPSLongitude", 5: "GPSAltitudeRef", 6: "GPSAltitude", 7: "GPSTimeStamp", 8: "GPSSatellites", 9: "GPSStatus", 10: "GPSMeasureMode", 11: "GPSDOP", 12: "GPSSpeedRef", 13: "GPSSpeed", 14: "GPSTrackRef", 15: "GPSTrack", 16: "GPSImgDirectionRef", 17: "GPSImgDirection", 18: "GPSMapDatum", 19: "GPSDestLatitudeRef", 20: "GPSDestLatitude", 21: "GPSDestLongitudeRef", 22: "GPSDestLongitude", 23: "GPSDestBearingRef", 24: "GPSDestBearing", 25: "GPSDestDistanceRef", 26: "GPSDestDistance", 27: "GPSProcessingMethod", 28: "GPSAreaInformation", 29: "GPSDateStamp", 30: "GPSDifferential", 31: "GPSHPositioningError"}, c.ExifMap.prototype.stringValues = {ExposureProgram: {0: "Undefined", 1: "Manual", 2: "Normal program", 3: "Aperture priority", 4: "Shutter priority", 5: "Creative program", 6: "Action program", 7: "Portrait mode", 8: "Landscape mode"}, MeteringMode: {0: "Unknown", 1: "Average", 2: "CenterWeightedAverage", 3: "Spot", 4: "MultiSpot", 5: "Pattern", 6: "Partial", 255: "Other"}, LightSource: {0: "Unknown", 1: "Daylight", 2: "Fluorescent", 3: "Tungsten (incandescent light)", 4: "Flash", 9: "Fine weather", 10: "Cloudy weather", 11: "Shade", 12: "Daylight fluorescent (D 5700 - 7100K)", 13: "Day white fluorescent (N 4600 - 5400K)", 14: "Cool white fluorescent (W 3900 - 4500K)", 15: "White fluorescent (WW 3200 - 3700K)", 17: "Standard light A", 18: "Standard light B", 19: "Standard light C", 20: "D55", 21: "D65", 22: "D75", 23: "D50", 24: "ISO studio tungsten", 255: "Other"}, Flash: {0: "Flash did not fire", 1: "Flash fired", 5: "Strobe return light not detected", 7: "Strobe return light detected", 9: "Flash fired, compulsory flash mode", 13: "Flash fired, compulsory flash mode, return light not detected", 15: "Flash fired, compulsory flash mode, return light detected", 16: "Flash did not fire, compulsory flash mode", 24: "Flash did not fire, auto mode", 25: "Flash fired, auto mode", 29: "Flash fired, auto mode, return light not detected", 31: "Flash fired, auto mode, return light detected", 32: "No flash function", 65: "Flash fired, red-eye reduction mode", 69: "Flash fired, red-eye reduction mode, return light not detected", 71: "Flash fired, red-eye reduction mode, return light detected", 73: "Flash fired, compulsory flash mode, red-eye reduction mode", 77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected", 79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected", 89: "Flash fired, auto mode, red-eye reduction mode", 93: "Flash fired, auto mode, return light not detected, red-eye reduction mode", 95: "Flash fired, auto mode, return light detected, red-eye reduction mode"}, SensingMethod: {1: "Undefined", 2: "One-chip color area sensor", 3: "Two-chip color area sensor", 4: "Three-chip color area sensor", 5: "Color sequential area sensor", 7: "Trilinear sensor", 8: "Color sequential linear sensor"}, SceneCaptureType: {0: "Standard", 1: "Landscape", 2: "Portrait", 3: "Night scene"}, SceneType: {1: "Directly photographed"}, CustomRendered: {0: "Normal process", 1: "Custom process"}, WhiteBalance: {0: "Auto white balance", 1: "Manual white balance"}, GainControl: {0: "None", 1: "Low gain up", 2: "High gain up", 3: "Low gain down", 4: "High gain down"}, Contrast: {0: "Normal", 1: "Soft", 2: "Hard"}, Saturation: {0: "Normal", 1: "Low saturation", 2: "High saturation"}, Sharpness: {0: "Normal", 1: "Soft", 2: "Hard"}, SubjectDistanceRange: {0: "Unknown", 1: "Macro", 2: "Close view", 3: "Distant view"}, FileSource: {3: "DSC"}, ComponentsConfiguration: {0: "", 1: "Y", 2: "Cb", 3: "Cr", 4: "R", 5: "G", 6: "B"}, Orientation: {1: "top-left", 2: "top-right", 3: "bottom-right", 4: "bottom-left", 5: "left-top", 6: "right-top", 7: "right-bottom", 8: "left-bottom"}}, c.ExifMap.prototype.getText = function (a) {
        var g = this.get(a);
        switch (a) {
            case"LightSource":
            case"Flash":
            case"MeteringMode":
            case"ExposureProgram":
            case"SensingMethod":
            case"SceneCaptureType":
            case"SceneType":
            case"CustomRendered":
            case"WhiteBalance":
            case"GainControl":
            case"Contrast":
            case"Saturation":
            case"Sharpness":
            case"SubjectDistanceRange":
            case"FileSource":
            case"Orientation":
                return this.stringValues[a][g];
            case"ExifVersion":
            case"FlashpixVersion":
                return String.fromCharCode(g[0], g[1], g[2], g[3]);
            case"ComponentsConfiguration":
                return this.stringValues[a][g[0]] + this.stringValues[a][g[1]] + this.stringValues[a][g[2]] + this.stringValues[a][g[3]];
            case"GPSVersionID":
                return g[0] + "." + g[1] + "." + g[2] + "." + g[3]
        }
        return g + ""
    }, f = c.ExifMap.prototype.tags, d = c.ExifMap.prototype.map;
    for (b in f) {
        f.hasOwnProperty(b) && (d[f[b]] = b)
    }
    c.ExifMap.prototype.getAll = function () {
        var h, j, g = {};
        for (h in this) {
            this.hasOwnProperty(h) && (j = f[h], j && (g[j] = this.getText(j)))
        }
        return g
    }
});
!function (g) {
    var a = g.HTMLCanvasElement && g.HTMLCanvasElement.prototype, c = g.Blob && function () {
        try {
            return Boolean(new Blob)
        } catch (e) {
            return !1
        }
    }(), d = c && g.Uint8Array && function () {
        try {
            return 100 === new Blob([new Uint8Array(100)]).size
        } catch (e) {
            return !1
        }
    }(), f = g.BlobBuilder || g.WebKitBlobBuilder || g.MozBlobBuilder || g.MSBlobBuilder, b = (c || f) && g.atob && g.ArrayBuffer && g.Uint8Array && function (o) {
        var k, m, h, n, p, j;
        for (k = o.split(",")[0].indexOf("base64") >= 0 ? atob(o.split(",")[1]) : decodeURIComponent(o.split(",")[1]), m = new ArrayBuffer(k.length), h = new Uint8Array(m), n = 0; n < k.length; n += 1) {
            h[n] = k.charCodeAt(n)
        }
        return p = o.split(",")[0].split(":")[1].split(";")[0], c ? new Blob([d ? h : m], {type: p}) : (j = new f, j.append(m), j.getBlob(p))
    };
    g.HTMLCanvasElement && !a.toBlob && (a.mozGetAsFile ? a.toBlob = function (i, e, h) {
        h && a.toDataURL && b ? i(b(this.toDataURL(e, h))) : i(this.mozGetAsFile("blob", e))
    } : a.toDataURL && b && (a.toBlob = function (j, h, i) {
        j(b(this.toDataURL(h, i)))
    })), "function" == typeof define && define.amd ? define(function () {
        return b
    }) : g.dataURLtoBlob = b
}(this);
(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "jquery.ui.widget"], a)
    } else {
        a(window.jQuery)
    }
}(function (a) {
    a.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || a('<input type="file">').prop("disabled"));
    a.support.xhrFileUpload = !!(window.XMLHttpRequestUpload && window.FileReader);
    a.support.xhrFormDataFileUpload = !!window.FormData;
    a.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
    a.widget("blueimp.fileupload", {options: {dropZone: a(document), pasteZone: a(document), fileInput: undefined, replaceFileInput: true, paramName: undefined, singleFileUploads: true, limitMultiFileUploads: undefined, sequentialUploads: false, limitConcurrentUploads: undefined, forceIframeTransport: false, redirect: undefined, redirectParamName: undefined, postMessage: undefined, multipart: true, maxChunkSize: undefined, uploadedBytes: undefined, recalculateProgress: true, progressInterval: 100, bitrateInterval: 500, autoUpload: true, messages: {uploadedBytes: "Uploaded bytes exceed file size"}, i18n: function (c, b) {
        c = this.messages[c] || c.toString();
        if (b) {
            a.each(b, function (d, e) {
                c = c.replace("{" + d + "}", e)
            })
        }
        return c
    }, formData: function (b) {
        return b.serializeArray()
    }, add: function (c, b) {
        if (b.autoUpload || (b.autoUpload !== false && a(this).fileupload("option", "autoUpload"))) {
            b.process().done(function () {
                b.submit()
            })
        }
    }, processData: false, contentType: false, cache: false}, _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"], _blobSlice: a.support.blobSlice && function () {
        var b = this.slice || this.webkitSlice || this.mozSlice;
        return b.apply(this, arguments)
    }, _BitrateTimer: function () {
        this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
        this.loaded = 0;
        this.bitrate = 0;
        this.getBitrate = function (d, c, b) {
            var e = d - this.timestamp;
            if (!this.bitrate || !b || e > b) {
                this.bitrate = (c - this.loaded) * (1000 / e) * 8;
                this.loaded = c;
                this.timestamp = d
            }
            return this.bitrate
        }
    }, _isXHRUpload: function (b) {
        return !b.forceIframeTransport && ((!b.multipart && a.support.xhrFileUpload) || a.support.xhrFormDataFileUpload)
    }, _getFormData: function (c) {
        var b;
        if (typeof c.formData === "function") {
            return c.formData(c.form)
        }
        if (a.isArray(c.formData)) {
            return c.formData
        }
        if (a.type(c.formData) === "object") {
            b = [];
            a.each(c.formData, function (d, e) {
                b.push({name: d, value: e})
            });
            return b
        }
        return[]
    }, _getTotal: function (b) {
        var c = 0;
        a.each(b, function (e, d) {
            c += d.size || 1
        });
        return c
    }, _initProgressObject: function (b) {
        var c = {loaded: 0, total: 0, bitrate: 0};
        if (b._progress) {
            a.extend(b._progress, c)
        } else {
            b._progress = c
        }
    }, _initResponseObject: function (b) {
        var c;
        if (b._response) {
            for (c in b._response) {
                if (b._response.hasOwnProperty(c)) {
                    delete b._response[c]
                }
            }
        } else {
            b._response = {}
        }
    }, _onProgress: function (c, b) {
        if (c.lengthComputable) {
            var f = ((Date.now) ? Date.now() : (new Date()).getTime()), d;
            if (b._time && b.progressInterval && (f - b._time < b.progressInterval) && c.loaded !== c.total) {
                return
            }
            b._time = f;
            d = Math.floor(c.loaded / c.total * (b.chunkSize || b._progress.total)) + (b.uploadedBytes || 0);
            this._progress.loaded += (d - b._progress.loaded);
            this._progress.bitrate = this._bitrateTimer.getBitrate(f, this._progress.loaded, b.bitrateInterval);
            b._progress.loaded = b.loaded = d;
            b._progress.bitrate = b.bitrate = b._bitrateTimer.getBitrate(f, d, b.bitrateInterval);
            this._trigger("progress", c, b);
            this._trigger("progressall", c, this._progress)
        }
    }, _initProgressListener: function (b) {
        var c = this, d = b.xhr ? b.xhr() : a.ajaxSettings.xhr();
        if (d.upload) {
            a(d.upload).bind("progress", function (f) {
                var g = f.originalEvent;
                f.lengthComputable = g.lengthComputable;
                f.loaded = g.loaded;
                f.total = g.total;
                c._onProgress(f, b)
            });
            b.xhr = function () {
                return d
            }
        }
    }, _isInstanceOf: function (c, b) {
        return Object.prototype.toString.call(b) === "[object " + c + "]"
    }, _initXHRData: function (e) {
        var g = this, c, b = e.files[0], d = e.multipart || !a.support.xhrFileUpload, f = e.paramName[0];
        e.headers = e.headers || {};
        if (e.contentRange) {
            e.headers["Content-Range"] = e.contentRange
        }
        if (!d || e.blob || !this._isInstanceOf("File", b)) {
            e.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(b.name) + '"'
        }
        if (!d) {
            e.contentType = b.type;
            e.data = e.blob || b
        } else {
            if (a.support.xhrFormDataFileUpload) {
                if (e.postMessage) {
                    c = this._getFormData(e);
                    if (e.blob) {
                        c.push({name: f, value: e.blob})
                    } else {
                        a.each(e.files, function (i, h) {
                            c.push({name: e.paramName[i] || f, value: h})
                        })
                    }
                } else {
                    if (g._isInstanceOf("FormData", e.formData)) {
                        c = e.formData
                    } else {
                        c = new FormData();
                        a.each(this._getFormData(e), function (i, h) {
                            c.append(h.name, h.value)
                        })
                    }
                    if (e.blob) {
                        c.append(f, e.blob, b.name)
                    } else {
                        a.each(e.files, function (i, h) {
                            if (g._isInstanceOf("File", h) || g._isInstanceOf("Blob", h)) {
                                c.append(e.paramName[i] || f, h, h.name)
                            }
                        })
                    }
                }
                e.data = c
            }
        }
        e.blob = null
    }, _initIframeSettings: function (b) {
        var c = a("<a></a>").prop("href", b.url).prop("host");
        b.dataType = "iframe " + (b.dataType || "");
        b.formData = this._getFormData(b);
        if (b.redirect && c && c !== location.host) {
            b.formData.push({name: b.redirectParamName || "redirect", value: b.redirect})
        }
    }, _initDataSettings: function (b) {
        if (this._isXHRUpload(b)) {
            if (!this._chunkedUpload(b, true)) {
                if (!b.data) {
                    this._initXHRData(b)
                }
                this._initProgressListener(b)
            }
            if (b.postMessage) {
                b.dataType = "postmessage " + (b.dataType || "")
            }
        } else {
            this._initIframeSettings(b)
        }
    }, _getParamName: function (c) {
        var b = a(c.fileInput), d = c.paramName;
        if (!d) {
            d = [];
            b.each(function () {
                var f = a(this), g = f.prop("name") || "files[]", e = (f.prop("files") || [1]).length;
                while (e) {
                    d.push(g);
                    e -= 1
                }
            });
            if (!d.length) {
                d = [b.prop("name") || "files[]"]
            }
        } else {
            if (!a.isArray(d)) {
                d = [d]
            }
        }
        return d
    }, _initFormSettings: function (b) {
        if (!b.form || !b.form.length) {
            b.form = a(b.fileInput.prop("form"));
            if (!b.form.length) {
                b.form = a(this.options.fileInput.prop("form"))
            }
        }
        b.paramName = this._getParamName(b);
        if (!b.url) {
            b.url = b.form.prop("action") || location.href
        }
        b.type = (b.type || b.form.prop("method") || "").toUpperCase();
        if (b.type !== "POST" && b.type !== "PUT" && b.type !== "PATCH") {
            b.type = "POST"
        }
        if (!b.formAcceptCharset) {
            b.formAcceptCharset = b.form.attr("accept-charset")
        }
    }, _getAJAXSettings: function (b) {
        var c = a.extend({}, this.options, b);
        this._initFormSettings(c);
        this._initDataSettings(c);
        return c
    }, _getDeferredState: function (b) {
        if (b.state) {
            return b.state()
        }
        if (b.isResolved()) {
            return"resolved"
        }
        if (b.isRejected()) {
            return"rejected"
        }
        return"pending"
    }, _enhancePromise: function (b) {
        b.success = b.done;
        b.error = b.fail;
        b.complete = b.always;
        return b
    }, _getXHRPromise: function (f, c, b) {
        var d = a.Deferred(), e = d.promise();
        c = c || this.options.context || e;
        if (f === true) {
            d.resolveWith(c, b)
        } else {
            if (f === false) {
                d.rejectWith(c, b)
            }
        }
        e.abort = d.promise;
        return this._enhancePromise(e)
    }, _addConvenienceMethods: function (c, b) {
        var f = this, d = function (e) {
            return a.Deferred().resolveWith(f, [e]).promise()
        };
        b.process = function (g, e) {
            if (g || e) {
                b._processQueue = this._processQueue = (this._processQueue || d(this)).pipe(g, e)
            }
            return this._processQueue || d(this)
        };
        b.submit = function () {
            if (this.state() !== "pending") {
                b.jqXHR = this.jqXHR = (f._trigger("submit", c, this) !== false) && f._onSend(c, this)
            }
            return this.jqXHR || f._getXHRPromise()
        };
        b.abort = function () {
            if (this.jqXHR) {
                return this.jqXHR.abort()
            }
            return f._getXHRPromise()
        };
        b.state = function () {
            if (this.jqXHR) {
                return f._getDeferredState(this.jqXHR)
            }
            if (this._processQueue) {
                return f._getDeferredState(this._processQueue)
            }
        };
        b.progress = function () {
            return this._progress
        };
        b.response = function () {
            return this._response
        }
    }, _getUploadedBytes: function (b) {
        var d = b.getResponseHeader("Range"), c = d && d.split("-"), e = c && c.length > 1 && parseInt(c[1], 10);
        return e && e + 1
    }, _chunkedUpload: function (g, j) {
        g.uploadedBytes = g.uploadedBytes || 0;
        var k = this, c = g.files[0], d = c.size, l = g.uploadedBytes, f = g.maxChunkSize || d, i = this._blobSlice, b = a.Deferred(), h = b.promise(), e, m;
        if (!(this._isXHRUpload(g) && i && (l || f < d)) || g.data) {
            return false
        }
        if (j) {
            return true
        }
        if (l >= d) {
            c.error = g.i18n("uploadedBytes");
            return this._getXHRPromise(false, g.context, [null, "error", c.error])
        }
        m = function () {
            var p = a.extend({}, g), n = p._progress.loaded;
            p.blob = i.call(c, l, l + f, c.type);
            p.chunkSize = p.blob.size;
            p.contentRange = "bytes " + l + "-" + (l + p.chunkSize - 1) + "/" + d;
            k._initXHRData(p);
            k._initProgressListener(p);
            e = ((k._trigger("chunksend", null, p) !== false && a.ajax(p)) || k._getXHRPromise(false, p.context)).done(function (q, r, o) {
                l = k._getUploadedBytes(o) || (l + p.chunkSize);
                if (n + p.chunkSize - p._progress.loaded) {
                    k._onProgress(a.Event("progress", {lengthComputable: true, loaded: l - p.uploadedBytes, total: l - p.uploadedBytes}), p)
                }
                g.uploadedBytes = p.uploadedBytes = l;
                p.result = q;
                p.textStatus = r;
                p.jqXHR = o;
                k._trigger("chunkdone", null, p);
                k._trigger("chunkalways", null, p);
                if (l < d) {
                    m()
                } else {
                    b.resolveWith(p.context, [q, r, o])
                }
            }).fail(function (q, r, o) {
                p.jqXHR = q;
                p.textStatus = r;
                p.errorThrown = o;
                k._trigger("chunkfail", null, p);
                k._trigger("chunkalways", null, p);
                b.rejectWith(p.context, [q, r, o])
            })
        };
        this._enhancePromise(h);
        h.abort = function () {
            return e.abort()
        };
        m();
        return h
    }, _beforeSend: function (c, b) {
        if (this._active === 0) {
            this._trigger("start");
            this._bitrateTimer = new this._BitrateTimer();
            this._progress.loaded = this._progress.total = 0;
            this._progress.bitrate = 0
        }
        this._initResponseObject(b);
        this._initProgressObject(b);
        b._progress.loaded = b.loaded = b.uploadedBytes || 0;
        b._progress.total = b.total = this._getTotal(b.files) || 1;
        b._progress.bitrate = b.bitrate = 0;
        this._active += 1;
        this._progress.loaded += b.loaded;
        this._progress.total += b.total
    }, _onDone: function (e, f, b, c) {
        var g = c._progress.total, d = c._response;
        if (c._progress.loaded < g) {
            this._onProgress(a.Event("progress", {lengthComputable: true, loaded: g, total: g}), c)
        }
        d.result = c.result = e;
        d.textStatus = c.textStatus = f;
        d.jqXHR = c.jqXHR = b;
        this._trigger("done", null, c)
    }, _onFail: function (c, f, b, d) {
        var e = d._response;
        if (d.recalculateProgress) {
            this._progress.loaded -= d._progress.loaded;
            this._progress.total -= d._progress.total
        }
        e.jqXHR = d.jqXHR = c;
        e.textStatus = d.textStatus = f;
        e.errorThrown = d.errorThrown = b;
        this._trigger("fail", null, d)
    }, _onAlways: function (c, e, b, d) {
        this._trigger("always", null, d)
    }, _onSend: function (d, c) {
        if (!c.submit) {
            this._addConvenienceMethods(d, c)
        }
        var k = this, f, b, j, h, g = k._getAJAXSettings(c), i = function () {
            k._sending += 1;
            g._bitrateTimer = new k._BitrateTimer();
            f = f || (((b || k._trigger("send", d, g) === false) && k._getXHRPromise(false, g.context, b)) || k._chunkedUpload(g) || a.ajax(g)).done(function (l, m, e) {
                k._onDone(l, m, e, g)
            }).fail(function (l, m, e) {
                k._onFail(l, m, e, g)
            }).always(function (l, n, e) {
                k._onAlways(l, n, e, g);
                k._sending -= 1;
                k._active -= 1;
                if (g.limitConcurrentUploads && g.limitConcurrentUploads > k._sending) {
                    var m = k._slots.shift();
                    while (m) {
                        if (k._getDeferredState(m) === "pending") {
                            m.resolve();
                            break
                        }
                        m = k._slots.shift()
                    }
                }
                if (k._active === 0) {
                    k._trigger("stop")
                }
            });
            return f
        };
        this._beforeSend(d, g);
        if (this.options.sequentialUploads || (this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending)) {
            if (this.options.limitConcurrentUploads > 1) {
                j = a.Deferred();
                this._slots.push(j);
                h = j.pipe(i)
            } else {
                this._sequence = this._sequence.pipe(i, i);
                h = this._sequence
            }
            h.abort = function () {
                b = [undefined, "abort", "abort"];
                if (!f) {
                    if (j) {
                        j.rejectWith(g.context, b)
                    }
                    return i()
                }
                return f.abort()
            };
            return this._enhancePromise(h)
        }
        return i()
    }, _onAdd: function (c, b) {
        var n = this, m = true, h = a.extend({}, this.options, b), g = h.limitMultiFileUploads, j = this._getParamName(h), k, l, d, f;
        if (!(h.singleFileUploads || g) || !this._isXHRUpload(h)) {
            d = [b.files];
            k = [j]
        } else {
            if (!h.singleFileUploads && g) {
                d = [];
                k = [];
                for (f = 0; f < b.files.length; f += g) {
                    d.push(b.files.slice(f, f + g));
                    l = j.slice(f, f + g);
                    if (!l.length) {
                        l = j
                    }
                    k.push(l)
                }
            } else {
                k = j
            }
        }
        b.originalFiles = b.files;
        a.each(d || b.files, function (i, e) {
            var o = a.extend({}, b);
            o.files = d ? e : [e];
            o.paramName = k[i];
            n._initResponseObject(o);
            n._initProgressObject(o);
            n._addConvenienceMethods(c, o);
            m = n._trigger("add", c, o);
            return m
        });
        return m
    }, _replaceFileInput: function (b) {
        var c = b.clone(true);
        a("<form></form>").append(c)[0].reset();
        b.after(c).detach();
        a.cleanData(b.unbind("remove"));
        this.options.fileInput = this.options.fileInput.map(function (e, d) {
            if (d === b[0]) {
                return c[0]
            }
            return d
        });
        if (b[0] === this.element[0]) {
            this.element = c
        }
    }, _handleFileTreeEntry: function (d, f) {
        var g = this, b = a.Deferred(), e = function (h) {
            if (h && !h.entry) {
                h.entry = d
            }
            b.resolve([h])
        }, c;
        f = f || "";
        if (d.isFile) {
            if (d._file) {
                d._file.relativePath = f;
                b.resolve(d._file)
            } else {
                d.file(function (h) {
                    h.relativePath = f;
                    b.resolve(h)
                }, e)
            }
        } else {
            if (d.isDirectory) {
                c = d.createReader();
                c.readEntries(function (h) {
                    g._handleFileTreeEntries(h, f + d.name + "/").done(function (i) {
                        b.resolve(i)
                    }).fail(e)
                }, e)
            } else {
                b.resolve([])
            }
        }
        return b.promise()
    }, _handleFileTreeEntries: function (b, c) {
        var d = this;
        return a.when.apply(a, a.map(b, function (e) {
            return d._handleFileTreeEntry(e, c)
        })).pipe(function () {
            return Array.prototype.concat.apply([], arguments)
        })
    }, _getDroppedFiles: function (b) {
        b = b || {};
        var c = b.items;
        if (c && c.length && (c[0].webkitGetAsEntry || c[0].getAsEntry)) {
            return this._handleFileTreeEntries(a.map(c, function (e) {
                var d;
                if (e.webkitGetAsEntry) {
                    d = e.webkitGetAsEntry();
                    if (d) {
                        d._file = e.getAsFile()
                    }
                    return d
                }
                return e.getAsEntry()
            }))
        }
        return a.Deferred().resolve(a.makeArray(b.files)).promise()
    }, _getSingleFileInputFiles: function (c) {
        c = a(c);
        var b = c.prop("webkitEntries") || c.prop("entries"), d, e;
        if (b && b.length) {
            return this._handleFileTreeEntries(b)
        }
        d = a.makeArray(c.prop("files"));
        if (!d.length) {
            e = c.prop("value");
            if (!e) {
                return a.Deferred().resolve([]).promise()
            }
            d = [
                {name: e.replace(/^.*\\/, "")}
            ]
        } else {
            if (d[0].name === undefined && d[0].fileName) {
                a.each(d, function (g, f) {
                    f.name = f.fileName;
                    f.size = f.fileSize
                })
            }
        }
        return a.Deferred().resolve(d).promise()
    }, _getFileInputFiles: function (b) {
        if (!(b instanceof a) || b.length === 1) {
            return this._getSingleFileInputFiles(b)
        }
        return a.when.apply(a, a.map(b, this._getSingleFileInputFiles)).pipe(function () {
            return Array.prototype.concat.apply([], arguments)
        })
    }, _onChange: function (c) {
        var d = this, b = {fileInput: a(c.target), form: a(c.target.form)};
        this._getFileInputFiles(b.fileInput).always(function (e) {
            b.files = e;
            if (d.options.replaceFileInput) {
                d._replaceFileInput(b.fileInput)
            }
            if (d._trigger("change", c, b) !== false) {
                d._onAdd(c, b)
            }
        })
    }, _onPaste: function (c) {
        var d = c.originalEvent && c.originalEvent.clipboardData && c.originalEvent.clipboardData.items, b = {files: []};
        if (d && d.length) {
            a.each(d, function (f, g) {
                var e = g.getAsFile && g.getAsFile();
                if (e) {
                    b.files.push(e)
                }
            });
            if (this._trigger("paste", c, b) === false || this._onAdd(c, b) === false) {
                return false
            }
        }
    }, _onDrop: function (d) {
        d.dataTransfer = d.originalEvent && d.originalEvent.dataTransfer;
        var f = this, c = d.dataTransfer, b = {};
        if (c && c.files && c.files.length) {
            d.preventDefault();
            this._getDroppedFiles(c).always(function (e) {
                b.files = e;
                if (f._trigger("drop", d, b) !== false) {
                    f._onAdd(d, b)
                }
            })
        }
    }, _onDragOver: function (c) {
        c.dataTransfer = c.originalEvent && c.originalEvent.dataTransfer;
        var b = c.dataTransfer;
        if (b) {
            if (this._trigger("dragover", c) === false) {
                return false
            }
            if (a.inArray("Files", b.types) !== -1) {
                b.dropEffect = "copy";
                c.preventDefault()
            }
        }
    }, _initEventHandlers: function () {
        if (this._isXHRUpload(this.options)) {
            this._on(this.options.dropZone, {dragover: this._onDragOver, drop: this._onDrop});
            this._on(this.options.pasteZone, {paste: this._onPaste})
        }
        if (a.support.fileInput) {
            this._on(this.options.fileInput, {change: this._onChange})
        }
    }, _destroyEventHandlers: function () {
        this._off(this.options.dropZone, "dragover drop");
        this._off(this.options.pasteZone, "paste");
        this._off(this.options.fileInput, "change")
    }, _setOption: function (b, d) {
        var c = a.inArray(b, this._specialOptions) !== -1;
        if (c) {
            this._destroyEventHandlers()
        }
        this._super(b, d);
        if (c) {
            this._initSpecialOptions();
            this._initEventHandlers()
        }
    }, _initSpecialOptions: function () {
        var b = this.options;
        if (b.fileInput === undefined) {
            b.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]')
        } else {
            if (!(b.fileInput instanceof a)) {
                b.fileInput = a(b.fileInput)
            }
        }
        if (!(b.dropZone instanceof a)) {
            b.dropZone = a(b.dropZone)
        }
        if (!(b.pasteZone instanceof a)) {
            b.pasteZone = a(b.pasteZone)
        }
    }, _getRegExp: function (d) {
        var c = d.split("/"), b = c.pop();
        c.shift();
        return new RegExp(c.join("/"), b)
    }, _isRegExpOption: function (b, c) {
        return b !== "url" && a.type(c) === "string" && /^\/.*\/[igm]{0,3}$/.test(c)
    }, _initDataAttributes: function () {
        var c = this, b = this.options;
        a.each(a(this.element[0].cloneNode(false)).data(), function (d, e) {
            if (c._isRegExpOption(d, e)) {
                e = c._getRegExp(e)
            }
            b[d] = e
        })
    }, _create: function () {
        this._initDataAttributes();
        this._initSpecialOptions();
        this._slots = [];
        this._sequence = this._getXHRPromise(true);
        this._sending = this._active = 0;
        this._initProgressObject(this);
        this._initEventHandlers()
    }, active: function () {
        return this._active
    }, progress: function () {
        return this._progress
    }, add: function (b) {
        var c = this;
        if (!b || this.options.disabled) {
            return
        }
        if (b.fileInput && !b.files) {
            this._getFileInputFiles(b.fileInput).always(function (d) {
                b.files = d;
                c._onAdd(null, b)
            })
        } else {
            b.files = a.makeArray(b.files);
            this._onAdd(null, b)
        }
    }, send: function (c) {
        if (c && !this.options.disabled) {
            if (c.fileInput && !c.files) {
                var g = this, d = a.Deferred(), f = d.promise(), e, b;
                f.abort = function () {
                    b = true;
                    if (e) {
                        return e.abort()
                    }
                    d.reject(null, "abort", "abort");
                    return f
                };
                this._getFileInputFiles(c.fileInput).always(function (h) {
                    if (b) {
                        return
                    }
                    c.files = h;
                    e = g._onSend(null, c).then(function (j, k, i) {
                        d.resolve(j, k, i)
                    }, function (j, k, i) {
                        d.reject(j, k, i)
                    })
                });
                return this._enhancePromise(f)
            }
            c.files = a.makeArray(c.files);
            if (c.files.length) {
                return this._onSend(null, c)
            }
        }
        return this._getXHRPromise(false, c && c.context)
    }})
}));
(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "./jquery.fileupload"], a)
    } else {
        a(window.jQuery)
    }
}(function (a) {
    var b = a.blueimp.fileupload.prototype.options.add;
    a.widget("blueimp.fileupload", a.blueimp.fileupload, {options: {processQueue: [], add: function (f, d) {
        var c = a(this);
        d.process(function () {
            return c.fileupload("process", d)
        });
        b.call(this, f, d)
    }}, processActions: {}, _processFile: function (d) {
        var f = this, e = a.Deferred().resolveWith(f, [d]), c = e.promise();
        this._trigger("process", null, d);
        a.each(d.processQueue, function (h, j) {
            var g = function (i) {
                return f.processActions[j.action].call(f, i, j)
            };
            c = c.pipe(g, j.always && g)
        });
        c.done(function () {
            f._trigger("processdone", null, d);
            f._trigger("processalways", null, d)
        }).fail(function () {
            f._trigger("processfail", null, d);
            f._trigger("processalways", null, d)
        });
        return c
    }, _transformProcessQueue: function (c) {
        var d = [];
        a.each(c.processQueue, function () {
            var g = {}, e = this.action, f = this.prefix === true ? e : this.prefix;
            a.each(this, function (h, i) {
                if (a.type(i) === "string" && i.charAt(0) === "@") {
                    g[h] = c[i.slice(1) || (f ? f + h.charAt(0).toUpperCase() + h.slice(1) : h)]
                } else {
                    g[h] = i
                }
            });
            d.push(g)
        });
        c.processQueue = d
    }, processing: function () {
        return this._processing
    }, process: function (c) {
        var e = this, d = a.extend({}, this.options, c);
        if (d.processQueue && d.processQueue.length) {
            this._transformProcessQueue(d);
            if (this._processing === 0) {
                this._trigger("processstart")
            }
            a.each(c.files, function (g) {
                var h = g ? a.extend({}, d) : d, f = function () {
                    return e._processFile(h)
                };
                h.index = g;
                e._processing += 1;
                e._processingQueue = e._processingQueue.pipe(f, f).always(function () {
                    e._processing -= 1;
                    if (e._processing === 0) {
                        e._trigger("processstop")
                    }
                })
            })
        }
        return this._processingQueue
    }, _create: function () {
        this._super();
        this._processing = 0;
        this._processingQueue = a.Deferred().resolveWith(this).promise()
    }})
}));
(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "load-image", "load-image-meta", "load-image-exif", "load-image-ios", "canvas-to-blob", "./jquery.fileupload-process"], a)
    } else {
        a(window.jQuery, window.loadImage)
    }
}(function (a, b) {
    a.blueimp.fileupload.prototype.options.processQueue.unshift({action: "loadImageMetaData", disableImageHead: "@", disableExif: "@", disableExifThumbnail: "@", disableExifSub: "@", disableExifGps: "@", disabled: "@disableImageMetaDataLoad"}, {action: "loadImage", prefix: true, fileTypes: "@", maxFileSize: "@", noRevoke: "@", disabled: "@disableImageLoad"}, {action: "resizeImage", prefix: "image", maxWidth: "@", maxHeight: "@", minWidth: "@", minHeight: "@", crop: "@", disabled: "@disableImageResize"}, {action: "saveImage", disabled: "@disableImageResize"}, {action: "saveImageMetaData", disabled: "@disableImageMetaDataSave"}, {action: "resizeImage", prefix: "preview", maxWidth: "@", maxHeight: "@", minWidth: "@", minHeight: "@", crop: "@", orientation: "@", thumbnail: "@", canvas: "@", disabled: "@disableImagePreview"}, {action: "setImage", name: "@imagePreviewName", disabled: "@disableImagePreview"});
    a.widget("blueimp.fileupload", a.blueimp.fileupload, {options: {loadImageFileTypes: /^image\/(gif|jpeg|png)$/, loadImageMaxFileSize: 10000000, imageMaxWidth: 1920, imageMaxHeight: 1080, imageCrop: false, disableImageResize: true, previewMaxWidth: 80, previewMaxHeight: 80, previewOrientation: true, previewThumbnail: true, previewCrop: false, previewCanvas: true}, processActions: {loadImage: function (c, f) {
        if (f.disabled) {
            return c
        }
        var g = this, e = c.files[c.index], d = a.Deferred();
        if ((a.type(f.maxFileSize) === "number" && e.size > f.maxFileSize) || (f.fileTypes && !f.fileTypes.test(e.type)) || !b(e, function (h) {
            if (h.src) {
                c.img = h
            }
            d.resolveWith(g, [c])
        }, f)) {
            return c
        }
        return d.promise()
    }, resizeImage: function (c, g) {
        if (g.disabled) {
            return c
        }
        var i = this, d = a.Deferred(), h = function (k) {
            c[k.getContext ? "canvas" : "img"] = k;
            d.resolveWith(i, [c])
        }, j, e, f;
        g = a.extend({canvas: true}, g);
        if (c.exif) {
            if (g.orientation === true) {
                g.orientation = c.exif.get("Orientation")
            }
            if (g.thumbnail) {
                j = c.exif.get("Thumbnail");
                if (j) {
                    b(j, h, g);
                    return d.promise()
                }
            }
        }
        e = (g.canvas && c.canvas) || c.img;
        if (e) {
            f = b.scale(e, g);
            if (f.width !== e.width || f.height !== e.height) {
                h(f);
                return d.promise()
            }
        }
        return c
    }, saveImage: function (d, h) {
        if (!d.canvas || h.disabled) {
            return d
        }
        var i = this, f = d.files[d.index], g = f.name, e = a.Deferred(), c = function (j) {
            if (!j.name) {
                if (f.type === j.type) {
                    j.name = f.name
                } else {
                    if (f.name) {
                        j.name = f.name.replace(/\..+$/, "." + j.type.substr(6))
                    }
                }
            }
            d.files[d.index] = j;
            e.resolveWith(i, [d])
        };
        if (d.canvas.mozGetAsFile) {
            c(d.canvas.mozGetAsFile((/^image\/(jpeg|png)$/.test(f.type) && g) || ((g && g.replace(/\..+$/, "")) || "blob") + ".png", f.type))
        } else {
            if (d.canvas.toBlob) {
                d.canvas.toBlob(c, f.type)
            } else {
                return d
            }
        }
        return e.promise()
    }, loadImageMetaData: function (c, e) {
        if (e.disabled) {
            return c
        }
        var f = this, d = a.Deferred();
        b.parseMetaData(c.files[c.index], function (g) {
            a.extend(c, g);
            d.resolveWith(f, [c])
        }, e);
        return d.promise()
    }, saveImageMetaData: function (d, f) {
        if (!(d.imageHead && d.canvas && d.canvas.toBlob && !f.disabled)) {
            return d
        }
        var e = d.files[d.index], c = new Blob([d.imageHead, this._blobSlice.call(e, 20)], {type: e.type});
        c.name = e.name;
        d.files[d.index] = c;
        return d
    }, setImage: function (c, e) {
        var d = c.canvas || c.img;
        if (d && !e.disabled) {
            c.files[c.index][e.name || "preview"] = d
        }
        return c
    }}})
}));
(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "tmpl", "./jquery.fileupload-image", "./jquery.fileupload-audio", "./jquery.fileupload-video", "./jquery.fileupload-validate"], a)
    } else {
        a(window.jQuery, window.tmpl)
    }
}(function (a, c, b) {
    a.blueimp.fileupload.prototype._specialOptions.push("filesContainer", "uploadTemplateId", "downloadTemplateId");
    a.widget("blueimp.fileupload", a.blueimp.fileupload, {options: {autoUpload: false, uploadTemplateId: "template-upload", downloadTemplateId: "template-download", filesContainer: undefined, prependFiles: false, dataType: "json", getNumberOfFiles: function () {
        return this.filesContainer.children().length
    }, getFilesFromResponse: function (d) {
        if (d.result && a.isArray(d.result.files)) {
            return d.result.files
        }
        return[]
    }, add: function (g, f) {
        var d = a(this), j = d.data("blueimp-fileupload") || d.data("fileupload"), i = j.options, h = f.files;
        f.process(function () {
            return d.fileupload("process", f)
        }).always(function () {
            f.context = j._renderUpload(h).data("data", f);
            j._renderPreviews(f);
            i.filesContainer[i.prependFiles ? "prepend" : "append"](f.context);
            j._forceReflow(f.context);
            j._transition(f.context).done(function () {
                if ((j._trigger("added", g, f) !== false) && (i.autoUpload || f.autoUpload) && f.autoUpload !== false && !f.files.error) {
                    f.submit()
                }
            })
        })
    }, send: function (f, d) {
        var g = a(this).data("blueimp-fileupload") || a(this).data("fileupload");
        if (d.context && d.dataType && d.dataType.substr(0, 6) === "iframe") {
            d.context.find(".progress").addClass(!a.support.transition && "progress-animated").attr("aria-valuenow", 100).find(".bar").css("width", "100%")
        }
        return g._trigger("sent", f, d)
    }, done: function (g, d) {
        var k = a(this).data("blueimp-fileupload") || a(this).data("fileupload"), i = d.getFilesFromResponse || k.options.getFilesFromResponse, h = i(d), j, f;
        if (d.context) {
            d.context.each(function (m) {
                var l = h[m] || {error: "Empty file upload result"}, e = k._addFinishedDeferreds();
                k._transition(a(this)).done(function () {
                    var n = a(this);
                    j = k._renderDownload([l]).replaceAll(n);
                    k._forceReflow(j);
                    k._transition(j).done(function () {
                        d.context = a(this);
                        k._trigger("completed", g, d);
                        k._trigger("finished", g, d);
                        e.resolve()
                    })
                })
            })
        } else {
            j = k._renderDownload(h).appendTo(k.options.filesContainer);
            k._forceReflow(j);
            f = k._addFinishedDeferreds();
            k._transition(j).done(function () {
                d.context = a(this);
                k._trigger("completed", g, d);
                k._trigger("finished", g, d);
                f.resolve()
            })
        }
    }, fail: function (g, d) {
        var i = a(this).data("blueimp-fileupload") || a(this).data("fileupload"), h, f;
        if (d.context) {
            d.context.each(function (j) {
                if (d.errorThrown !== "abort") {
                    var e = d.files[j];
                    e.error = e.error || d.errorThrown || true;
                    f = i._addFinishedDeferreds();
                    i._transition(a(this)).done(function () {
                        var k = a(this);
                        h = i._renderDownload([e]).replaceAll(k);
                        i._forceReflow(h);
                        i._transition(h).done(function () {
                            d.context = a(this);
                            i._trigger("failed", g, d);
                            i._trigger("finished", g, d);
                            f.resolve()
                        })
                    })
                } else {
                    f = i._addFinishedDeferreds();
                    i._transition(a(this)).done(function () {
                        a(this).remove();
                        i._trigger("failed", g, d);
                        i._trigger("finished", g, d);
                        f.resolve()
                    })
                }
            })
        } else {
            if (d.errorThrown !== "abort") {
                d.context = i._renderUpload(d.files).appendTo(i.options.filesContainer).data("data", d);
                i._forceReflow(d.context);
                f = i._addFinishedDeferreds();
                i._transition(d.context).done(function () {
                    d.context = a(this);
                    i._trigger("failed", g, d);
                    i._trigger("finished", g, d);
                    f.resolve()
                })
            } else {
                i._trigger("failed", g, d);
                i._trigger("finished", g, d);
                i._addFinishedDeferreds().resolve()
            }
        }
    }, progress: function (f, d) {
        if (d.context) {
            var g = Math.floor(d.loaded / d.total * 100);
            d.context.find(".progress").attr("aria-valuenow", g).find(".bar").css("width", g + "%")
        }
    }, progressall: function (g, f) {
        var d = a(this), j = Math.floor(f.loaded / f.total * 100), i = d.find(".fileupload-progress"), h = i.find(".progress-extended");
        if (h.length) {
            h.html((d.data("blueimp-fileupload") || d.data("fileupload"))._renderExtendedProgress(f))
        }
        i.find(".progress").attr("aria-valuenow", j).find(".bar").css("width", j + "%")
    }, start: function (d) {
        var f = a(this).data("blueimp-fileupload") || a(this).data("fileupload");
        f._resetFinishedDeferreds();
        f._transition(a(this).find(".fileupload-progress")).done(function () {
            f._trigger("started", d)
        })
    }, stop: function (f) {
        var g = a(this).data("blueimp-fileupload") || a(this).data("fileupload"), d = g._addFinishedDeferreds();
        a.when.apply(a, g._getFinishedDeferreds()).done(function () {
            g._trigger("stopped", f)
        });
        g._transition(a(this).find(".fileupload-progress")).done(function () {
            a(this).find(".progress").attr("aria-valuenow", "0").find(".bar").css("width", "0%");
            a(this).find(".progress-extended").html("&nbsp;");
            d.resolve()
        })
    }, processstart: function () {
        a(this).addClass("fileupload-processing")
    }, processstop: function () {
        a(this).removeClass("fileupload-processing")
    }, destroy: function (f, d) {
        var h = a(this).data("blueimp-fileupload") || a(this).data("fileupload"), g = function () {
            h._transition(d.context).done(function () {
                a(this).remove();
                h._trigger("destroyed", f, d)
            })
        };
        if (d.url) {
            a.ajax(d).done(g)
        } else {
            g()
        }
    }}, _resetFinishedDeferreds: function () {
        this._finishedUploads = []
    }, _addFinishedDeferreds: function (d) {
        if (!d) {
            d = a.Deferred()
        }
        this._finishedUploads.push(d);
        return d
    }, _getFinishedDeferreds: function () {
        return this._finishedUploads
    }, _enableDragToDesktop: function () {
        var d = a(this), g = d.prop("href"), e = d.prop("download"), f = "application/octet-stream";
        d.bind("dragstart", function (h) {
            try {
                h.originalEvent.dataTransfer.setData("DownloadURL", [f, e, g].join(":"))
            } catch (i) {
            }
        })
    }, _formatFileSize: function (d) {
        if (typeof d !== "number") {
            return""
        }
        if (d >= 1000000000) {
            return(d / 1000000000).toFixed(2) + " GB"
        }
        if (d >= 1000000) {
            return(d / 1000000).toFixed(2) + " MB"
        }
        return(d / 1000).toFixed(2) + " KB"
    }, _formatBitrate: function (d) {
        if (typeof d !== "number") {
            return""
        }
        if (d >= 1000000000) {
            return(d / 1000000000).toFixed(2) + " Gbit/s"
        }
        if (d >= 1000000) {
            return(d / 1000000).toFixed(2) + " Mbit/s"
        }
        if (d >= 1000) {
            return(d / 1000).toFixed(2) + " kbit/s"
        }
        return d.toFixed(2) + " bit/s"
    }, _formatTime: function (f) {
        var d = new Date(f * 1000), e = Math.floor(f / 86400);
        e = e ? e + "d " : "";
        return e + ("0" + d.getUTCHours()).slice(-2) + ":" + ("0" + d.getUTCMinutes()).slice(-2) + ":" + ("0" + d.getUTCSeconds()).slice(-2)
    }, _formatPercentage: function (d) {
        return(d * 100).toFixed(2) + " %"
    }, _renderExtendedProgress: function (d) {
        return this._formatBitrate(d.bitrate) + " | " + this._formatTime((d.total - d.loaded) * 8 / d.bitrate) + " | " + this._formatPercentage(d.loaded / d.total) + " | " + this._formatFileSize(d.loaded) + " / " + this._formatFileSize(d.total)
    }, _renderTemplate: function (e, d) {
        if (!e) {
            return a()
        }
        var f = e({files: d, formatFileSize: this._formatFileSize, options: this.options});
        if (f instanceof a) {
            return f
        }
        return a(this.options.templatesContainer).html(f).children()
    }, _renderPreviews: function (d) {
        d.context.find(".preview").each(function (f, e) {
            a(e).append(d.files[f].preview)
        })
    }, _renderUpload: function (d) {
        return this._renderTemplate(this.options.uploadTemplate, d)
    }, _renderDownload: function (d) {
        return this._renderTemplate(this.options.downloadTemplate, d).find("a[download]").each(this._enableDragToDesktop).end()
    }, _startHandler: function (g) {
        g.preventDefault();
        var d = a(g.currentTarget), h = d.closest(".template-upload"), f = h.data("data");
        if (f && f.submit && !f.jqXHR && f.submit()) {
            d.prop("disabled", true)
        }
    }, _cancelHandler: function (f) {
        f.preventDefault();
        var g = a(f.currentTarget).closest(".template-upload"), d = g.data("data") || {};
        if (!d.jqXHR) {
            d.errorThrown = "abort";
            this._trigger("fail", f, d)
        } else {
            d.jqXHR.abort()
        }
    }, _deleteHandler: function (f) {
        f.preventDefault();
        var d = a(f.currentTarget);
        this._trigger("destroy", f, a.extend({context: d.closest(".template-download"), type: "DELETE"}, d.data()))
    }, _forceReflow: function (d) {
        return a.support.transition && d.length && d[0].offsetWidth
    }, _transition: function (e) {
        var d = a.Deferred();
        if (a.support.transition && e.hasClass("fade") && e.is(":visible")) {
            e.bind(a.support.transition.end, function (f) {
                if (f.target === e[0]) {
                    e.unbind(a.support.transition.end);
                    d.resolveWith(e)
                }
            }).toggleClass("in")
        } else {
            e.toggleClass("in");
            d.resolveWith(e)
        }
        return d
    }, _initButtonBarEventHandlers: function () {
        var e = this.element.find(".fileupload-buttonbar"), d = this.options.filesContainer;
        this._on(e.find(".start"), {click: function (f) {
            f.preventDefault();
            d.find(".start").click()
        }});
        this._on(e.find(".cancel"), {click: function (f) {
            f.preventDefault();
            d.find(".cancel").click()
        }});
        this._on(e.find(".delete"), {click: function (f) {
            f.preventDefault();
            d.find(".toggle:checked").closest(".template-download").find(".delete").click();
            e.find(".toggle").prop("checked", false)
        }});
        this._on(e.find(".toggle"), {change: function (f) {
            d.find(".toggle").prop("checked", a(f.currentTarget).is(":checked"))
        }})
    }, _destroyButtonBarEventHandlers: function () {
        this._off(this.element.find(".fileupload-buttonbar").find(".start, .cancel, .delete"), "click");
        this._off(this.element.find(".fileupload-buttonbar .toggle"), "change.")
    }, _initEventHandlers: function () {
        this._super();
        this._on(this.options.filesContainer, {"click .start": this._startHandler, "click .cancel": this._cancelHandler, "click .delete": this._deleteHandler});
        this._initButtonBarEventHandlers()
    }, _destroyEventHandlers: function () {
        this._destroyButtonBarEventHandlers();
        this._off(this.options.filesContainer, "click");
        this._super()
    }, _enableFileInputButton: function () {
        this.element.find(".fileinput-button input").prop("disabled", false).parent().removeClass("disabled")
    }, _disableFileInputButton: function () {
        this.element.find(".fileinput-button input").prop("disabled", true).parent().addClass("disabled")
    }, _initTemplates: function () {
        var d = this.options;
        d.templatesContainer = this.document[0].createElement(d.filesContainer.prop("nodeName"));
        if (c) {
            if (d.uploadTemplateId) {
                d.uploadTemplate = c(d.uploadTemplateId)
            }
            if (d.downloadTemplateId) {
                d.downloadTemplate = c(d.downloadTemplateId)
            }
        }
    }, _initFilesContainer: function () {
        var d = this.options;
        if (d.filesContainer === undefined) {
            d.filesContainer = this.element.find(".files")
        } else {
            if (!(d.filesContainer instanceof a)) {
                d.filesContainer = a(d.filesContainer)
            }
        }
    }, _initSpecialOptions: function () {
        this._super();
        this._initFilesContainer();
        this._initTemplates()
    }, _create: function () {
        this._super();
        this._resetFinishedDeferreds();
        if (!a.support.fileInput) {
            this._disableFileInputButton()
        }
    }, enable: function () {
        var d = false;
        if (this.options.disabled) {
            d = true
        }
        this._super();
        if (d) {
            this.element.find("input, button").prop("disabled", false);
            this._enableFileInputButton()
        }
    }, disable: function () {
        if (!this.options.disabled) {
            this.element.find("input, button").prop("disabled", true);
            this._disableFileInputButton()
        }
        this._super()
    }})
}));
(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "./jquery.fileupload-process"], a)
    } else {
        a(window.jQuery)
    }
}(function (a) {
    a.blueimp.fileupload.prototype.options.processQueue.push({action: "validate", always: true, acceptFileTypes: "@", maxFileSize: "@", minFileSize: "@", maxNumberOfFiles: "@", disabled: "@disableValidation"});
    a.widget("blueimp.fileupload", a.blueimp.fileupload, {options: {getNumberOfFiles: a.noop, messages: {maxNumberOfFiles: "每次上传文件不能超过5个", acceptFileTypes: "文件格式只支持gif/jpg/png", maxFileSize: "文件太大", minFileSize: "文件太小"}}, processActions: {validate: function (b, f) {
        if (f.disabled) {
            return b
        }
        var c = a.Deferred(), g = this.options, d = b.files[b.index], e = g.getNumberOfFiles();
        if (e && a.type(f.maxNumberOfFiles) === "number" && e + b.files.length > f.maxNumberOfFiles) {
            d.error = g.i18n("maxNumberOfFiles")
        } else {
            if (f.acceptFileTypes && !(f.acceptFileTypes.test(d.type) || f.acceptFileTypes.test(d.name))) {
                d.error = g.i18n("acceptFileTypes")
            } else {
                if (f.maxFileSize && d.size > f.maxFileSize) {
                    d.error = g.i18n("maxFileSize")
                } else {
                    if (a.type(d.size) === "number" && d.size < f.minFileSize) {
                        d.error = g.i18n("minFileSize")
                    } else {
                        delete d.error
                    }
                }
            }
        }
        if (d.error || b.files.error) {
            b.files.error = true;
            c.rejectWith(this, [b])
        } else {
            c.resolveWith(this, [b])
        }
        return c.promise()
    }}})
}));
(function (a) {
    a.hotkeys = {version: "0.8", specialKeys: {8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause", 20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 191: "/", 224: "meta"}, shiftNums: {"`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", "8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": '"', ",": "<", ".": ">", "/": "?", "\\": "|"}};
    function b(c) {
        if (typeof c.data !== "string") {
            return
        }
        var e = c.handler, d = c.data.toLowerCase().split(" "), f = ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color"];
        c.handler = function (h) {
            if (this !== h.target && (/textarea|select/i.test(h.target.nodeName) || a.inArray(h.target.type, f) > -1)) {
                return
            }
            var p = h.type !== "keypress" && a.hotkeys.specialKeys[h.which], g = String.fromCharCode(h.which).toLowerCase(), k, n = "", o = {};
            if (h.altKey && p !== "alt") {
                n += "alt+"
            }
            if (h.ctrlKey && p !== "ctrl") {
                n += "ctrl+"
            }
            if (h.metaKey && !h.ctrlKey && p !== "meta") {
                n += "meta+"
            }
            if (h.shiftKey && p !== "shift") {
                n += "shift+"
            }
            if (p) {
                o[n + p] = true
            } else {
                o[n + g] = true;
                o[n + a.hotkeys.shiftNums[g]] = true;
                if (n === "shift+") {
                    o[a.hotkeys.shiftNums[g]] = true
                }
            }
            for (var j = 0, m = d.length; j < m; j++) {
                if (o[d[j]]) {
                    return e.apply(this, arguments)
                }
            }
        }
    }

    a.each(["keydown", "keyup", "keypress"], function () {
        a.event.special[this] = {add: b}
    })
})(jQuery);
(function (a) {
    var b = function (c) {
        var e = a.Deferred(), d = new FileReader();
        d.onload = function (f) {
            e.resolve(f.target.result)
        };
        d.onerror = e.reject;
        d.onprogress = e.notify;
        d.readAsDataURL(c);
        return e.promise()
    };
    a.fn.cleanHtml = function () {
        var c = a(this).html();
        return c && c.replace(/(<br>|\s|<div><br><\/div>|&nbsp;)*$/, "")
    };
    a.fn.wysiwyg = function (p) {
        var e = this, n, k, o = function () {
            if (k.activeToolbarClass) {
                a(k.toolbarSelector).find(".btn[data-" + k.commandRole + "]").each(function () {
                    var q = a(this).data(k.commandRole);
                    if (document.queryCommandState(q)) {
                        a(this).addClass(k.activeToolbarClass)
                    } else {
                        a(this).removeClass(k.activeToolbarClass)
                    }
                })
            }
        }, f = function (t, u) {
            var s = t.split(" "), r = s.shift(), q = s.join(" ") + (u || "");
            document.execCommand(r, 0, q);
            o()
        }, c = function (q) {
            a.each(q, function (s, r) {
                e.keydown(s, function (t) {
                    if (e.attr("contenteditable") && e.is(":visible")) {
                        t.preventDefault();
                        t.stopPropagation();
                        f(r)
                    }
                }).keyup(s, function (t) {
                    if (e.attr("contenteditable") && e.is(":visible")) {
                        t.preventDefault();
                        t.stopPropagation()
                    }
                })
            })
        }, g = function () {
            var q = window.getSelection();
            if (q.getRangeAt && q.rangeCount) {
                return q.getRangeAt(0)
            }
        }, m = function () {
            n = g()
        }, l = function () {
            var r = window.getSelection();
            if (n) {
                try {
                    r.removeAllRanges()
                } catch (q) {
                    document.body.createTextRange().select();
                    document.selection.empty()
                }
                r.addRange(n)
            }
        }, i = function (q) {
            e.focus();
            a.each(q, function (s, r) {
                if (/^image\//.test(r.type)) {
                    a.when(b(r)).done(function (t) {
                        f("insertimage", t)
                    }).fail(function (t) {
                        k.fileUploadError("file-reader", t)
                    })
                } else {
                    k.fileUploadError("unsupported-file-type", r.type)
                }
            })
        }, j = function (r, q) {
            l();
            if (document.queryCommandSupported("hiliteColor")) {
                document.execCommand("hiliteColor", 0, q || "transparent")
            }
            m();
            r.data(k.selectionMarker, q)
        }, d = function (r, q) {
            r.find("a[data-" + q.commandRole + "]").click(function () {
                l();
                e.focus();
                f(a(this).data(q.commandRole));
                m()
            });
            r.find("[data-toggle=dropdown]").click(l);
            r.find("input[type=text][data-" + q.commandRole + "]").on("webkitspeechchange change", function () {
                var s = this.value;
                this.value = "";
                l();
                if (s) {
                    e.focus();
                    f(a(this).data(q.commandRole), s)
                }
                m()
            }).on("focus", function () {
                var s = a(this);
                if (!s.data(q.selectionMarker)) {
                    j(s, q.selectionColor);
                    s.focus()
                }
            }).on("blur", function () {
                var s = a(this);
                if (s.data(q.selectionMarker)) {
                    j(s, false)
                }
            });
            r.find("input[type=file][data-" + q.commandRole + "]").change(function () {
                l();
                if (this.type === "file" && this.files && this.files.length > 0) {
                    i(this.files)
                }
                m();
                this.value = ""
            })
        }, h = function () {
            e.on("dragenter dragover", false).on("drop", function (r) {
                var q = r.originalEvent.dataTransfer;
                r.stopPropagation();
                r.preventDefault();
                if (q && q.files && q.files.length > 0) {
                    i(q.files)
                }
            })
        };
        k = a.extend({}, a.fn.wysiwyg.defaults, p);
        c(k.hotKeys);
        h();
        d(a(k.toolbarSelector), k);
        e.attr("contenteditable", true).on("mouseup keyup mouseout", function () {
            m();
            o()
        });
        a(window).bind("touchend", function (s) {
            var t = (e.is(s.target) || e.has(s.target).length > 0), r = g(), q = r && (r.startContainer === r.endContainer && r.startOffset === r.endOffset);
            if (!q || t) {
                m();
                o()
            }
        });
        return this
    };
    a.fn.wysiwyg.defaults = {hotKeys: {"ctrl+b meta+b": "bold", "ctrl+i meta+i": "italic", "ctrl+u meta+u": "underline", "ctrl+z meta+z": "undo", "ctrl+y meta+y meta+shift+z": "redo", "ctrl+l meta+l": "justifyleft", "ctrl+r meta+r": "justifyright", "ctrl+e meta+e": "justifycenter", "ctrl+j meta+j": "justifyfull", "shift+tab": "outdent", tab: "indent"}, toolbarSelector: "[data-role=editor-toolbar]", commandRole: "edit", activeToolbarClass: "btn-info", selectionMarker: "edit-focus-marker", selectionColor: "darkgrey", fileUploadError: function (d, c) {
        console.log("File upload error", d, c)
    }}
}(window.jQuery));
(function () {
    function F(q) {
        return function () {
            return q
        }
    }

    (function (q) {
        var w = this || (0, eval)("this"), s = w.document, H = w.navigator, t = w.jQuery, y = w.JSON;
        (function (q) {
            "function" === typeof require && "object" === typeof exports && "object" === typeof module ? q(module.exports || exports) : "function" === typeof define && define.amd ? define(["exports"], q) : q(w.ko = {})
        })(function (C) {
            function G(b, c, d, f) {
                a.d[b] = {init: function (b) {
                    a.a.f.set(b, I, {});
                    return{controlsDescendantBindings: !0}
                }, update: function (b, e, m, h, k) {
                    m = a.a.f.get(b, I);
                    e = a.a.c(e());
                    h = !d !== !e;
                    var l = !m.fb;
                    if (l || c || h !== m.vb) {
                        l && (m.fb = a.a.Oa(a.e.childNodes(b), !0)), h ? (l || a.e.P(b, a.a.Oa(m.fb)), a.Ja(f ? f(k, e) : k, b)) : a.e.ba(b), m.vb = h
                    }
                }};
                a.g.S[b] = !1;
                a.e.L[b] = !0
            }

            function J(b, c, d) {
                d && c !== a.h.n(b) && a.h.W(b, c);
                c !== a.h.n(b) && a.q.I(a.a.Ga, null, [b, "change"])
            }

            var a = "undefined" !== typeof C ? C : {};
            a.b = function (b, c) {
                for (var d = b.split("."), f = a, g = 0; g < d.length - 1; g++) {
                    f = f[d[g]]
                }
                f[d[d.length - 1]] = c
            };
            a.r = function (a, c, d) {
                a[c] = d
            };
            a.version = "2.3.0";
            a.b("version", a.version);
            a.a = function () {
                function b(a, b) {
                    for (var e in a) {
                        a.hasOwnProperty(e) && b(e, a[e])
                    }
                }

                function c(b, e) {
                    if ("input" !== a.a.u(b) || !b.type || "click" != e.toLowerCase()) {
                        return !1
                    }
                    var k = b.type;
                    return"checkbox" == k || "radio" == k
                }

                var d = {}, f = {};
                d[H && /Firefox\/2/i.test(H.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                d.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                b(d, function (a, b) {
                    if (b.length) {
                        for (var e = 0, c = b.length; e < c; e++) {
                            f[b[e]] = a
                        }
                    }
                });
                var g = {propertychange: !0}, e = s && function () {
                    for (var a = 3, b = s.createElement("div"), e = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", e[0];) {
                    }
                    return 4 < a ? a : q
                }();
                return{Ta: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/], p: function (a, b) {
                    for (var e = 0, c = a.length; e < c; e++) {
                        b(a[e])
                    }
                }, k: function (a, b) {
                    if ("function" == typeof Array.prototype.indexOf) {
                        return Array.prototype.indexOf.call(a, b)
                    }
                    for (var e = 0, c = a.length; e < c; e++) {
                        if (a[e] === b) {
                            return e
                        }
                    }
                    return -1
                }, La: function (a, b, e) {
                    for (var c = 0, d = a.length; c < d; c++) {
                        if (b.call(e, a[c])) {
                            return a[c]
                        }
                    }
                    return null
                }, ka: function (b, e) {
                    var c = a.a.k(b, e);
                    0 <= c && b.splice(c, 1)
                }, Ma: function (b) {
                    b = b || [];
                    for (var e = [], c = 0, d = b.length; c < d; c++) {
                        0 > a.a.k(e, b[c]) && e.push(b[c])
                    }
                    return e
                }, Z: function (a, b) {
                    a = a || [];
                    for (var e = [], c = 0, d = a.length; c < d; c++) {
                        e.push(b(a[c]))
                    }
                    return e
                }, Y: function (a, b) {
                    a = a || [];
                    for (var e = [], c = 0, d = a.length; c < d; c++) {
                        b(a[c]) && e.push(a[c])
                    }
                    return e
                }, R: function (a, b) {
                    if (b instanceof Array) {
                        a.push.apply(a, b)
                    } else {
                        for (var e = 0, c = b.length; e < c; e++) {
                            a.push(b[e])
                        }
                    }
                    return a
                }, ja: function (b, e, c) {
                    var d = b.indexOf ? b.indexOf(e) : a.a.k(b, e);
                    0 > d ? c && b.push(e) : c || b.splice(d, 1)
                }, extend: function (a, b) {
                    if (b) {
                        for (var e in b) {
                            b.hasOwnProperty(e) && (a[e] = b[e])
                        }
                    }
                    return a
                }, w: b, oa: function (b) {
                    for (; b.firstChild;) {
                        a.removeNode(b.firstChild)
                    }
                }, Mb: function (b) {
                    b = a.a.N(b);
                    for (var e = s.createElement("div"), c = 0, d = b.length; c < d; c++) {
                        e.appendChild(a.H(b[c]))
                    }
                    return e
                }, Oa: function (b, e) {
                    for (var c = 0, d = b.length, g = []; c < d; c++) {
                        var f = b[c].cloneNode(!0);
                        g.push(e ? a.H(f) : f)
                    }
                    return g
                }, P: function (b, e) {
                    a.a.oa(b);
                    if (e) {
                        for (var c = 0, d = e.length; c < d; c++) {
                            b.appendChild(e[c])
                        }
                    }
                }, eb: function (b, e) {
                    var c = b.nodeType ? [b] : b;
                    if (0 < c.length) {
                        for (var d = c[0], g = d.parentNode, f = 0, r = e.length; f < r; f++) {
                            g.insertBefore(e[f], d)
                        }
                        f = 0;
                        for (r = c.length; f < r; f++) {
                            a.removeNode(c[f])
                        }
                    }
                }, hb: function (a, b) {
                    7 > e ? a.setAttribute("selected", b) : a.selected = b
                }, F: function (a) {
                    return null === a || a === q ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                }, Wb: function (b, e) {
                    for (var c = [], d = (b || "").split(e), g = 0, f = d.length; g < f; g++) {
                        var r = a.a.F(d[g]);
                        "" !== r && c.push(r)
                    }
                    return c
                }, Tb: function (a, b) {
                    a = a || "";
                    return b.length > a.length ? !1 : a.substring(0, b.length) === b
                }, yb: function (a, b) {
                    if (b.compareDocumentPosition) {
                        return 16 == (b.compareDocumentPosition(a) & 16)
                    }
                    for (; null != a;) {
                        if (a == b) {
                            return !0
                        }
                        a = a.parentNode
                    }
                    return !1
                }, aa: function (b) {
                    return a.a.yb(b, b.ownerDocument)
                }, pb: function (b) {
                    return !!a.a.La(b, a.a.aa)
                }, u: function (a) {
                    return a && a.tagName && a.tagName.toLowerCase()
                }, o: function (b, d, k) {
                    var f = e && g[d];
                    if (f || "undefined" == typeof t) {
                        if (f || "function" != typeof b.addEventListener) {
                            if ("undefined" != typeof b.attachEvent) {
                                var n = function (a) {
                                    k.call(b, a)
                                }, p = "on" + d;
                                b.attachEvent(p, n);
                                a.a.C.ia(b, function () {
                                    b.detachEvent(p, n)
                                })
                            } else {
                                throw Error("Browser doesn't support addEventListener or attachEvent")
                            }
                        } else {
                            b.addEventListener(d, k, !1)
                        }
                    } else {
                        if (c(b, d)) {
                            var r = k;
                            k = function (a, b) {
                                var e = this.checked;
                                b && (this.checked = !0 !== b.sb);
                                r.call(this, a);
                                this.checked = e
                            }
                        }
                        t(b).bind(d, k)
                    }
                }, Ga: function (a, b) {
                    if (!a || !a.nodeType) {
                        throw Error("element must be a DOM node when calling triggerEvent")
                    }
                    if ("undefined" != typeof t) {
                        var e = [];
                        c(a, b) && e.push({sb: a.checked});
                        t(a).trigger(b, e)
                    } else {
                        if ("function" == typeof s.createEvent) {
                            if ("function" == typeof a.dispatchEvent) {
                                e = s.createEvent(f[b] || "HTMLEvents"), e.initEvent(b, !0, !0, w, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, a), a.dispatchEvent(e)
                            } else {
                                throw Error("The supplied element doesn't support dispatchEvent")
                            }
                        } else {
                            if ("undefined" != typeof a.fireEvent) {
                                c(a, b) && (a.checked = !0 !== a.checked), a.fireEvent("on" + b)
                            } else {
                                throw Error("Browser doesn't support triggering events")
                            }
                        }
                    }
                }, c: function (b) {
                    return a.T(b) ? b() : b
                }, ya: function (b) {
                    return a.T(b) ? b.t() : b
                }, ga: function (b, e, c) {
                    if (e) {
                        var d = /\S+/g, g = b.className.match(d) || [];
                        a.a.p(e.match(d), function (b) {
                            a.a.ja(g, b, c)
                        });
                        b.className = g.join(" ")
                    }
                }, ib: function (b, e) {
                    var c = a.a.c(e);
                    if (null === c || c === q) {
                        c = ""
                    }
                    var d = a.e.firstChild(b);
                    !d || 3 != d.nodeType || a.e.nextSibling(d) ? a.e.P(b, [s.createTextNode(c)]) : d.data = c;
                    a.a.Bb(b)
                }, gb: function (a, b) {
                    a.name = b;
                    if (7 >= e) {
                        try {
                            a.mergeAttributes(s.createElement("<input name='" + a.name + "'/>"), !1)
                        } catch (c) {
                        }
                    }
                }, Bb: function (a) {
                    9 <= e && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom))
                }, zb: function (a) {
                    if (e) {
                        var b = a.style.width;
                        a.style.width = 0;
                        a.style.width = b
                    }
                }, Qb: function (b, e) {
                    b = a.a.c(b);
                    e = a.a.c(e);
                    for (var c = [], d = b; d <= e; d++) {
                        c.push(d)
                    }
                    return c
                }, N: function (a) {
                    for (var b = [], e = 0, c = a.length; e < c; e++) {
                        b.push(a[e])
                    }
                    return b
                }, Ub: 6 === e, Vb: 7 === e, ca: e, Ua: function (b, e) {
                    for (var c = a.a.N(b.getElementsByTagName("input")).concat(a.a.N(b.getElementsByTagName("textarea"))), d = "string" == typeof e ? function (a) {
                        return a.name === e
                    } : function (a) {
                        return e.test(a.name)
                    }, g = [], f = c.length - 1; 0 <= f; f--) {
                        d(c[f]) && g.push(c[f])
                    }
                    return g
                }, Nb: function (b) {
                    return"string" == typeof b && (b = a.a.F(b)) ? y && y.parse ? y.parse(b) : (new Function("return " + b))() : null
                }, Ca: function (b, e, c) {
                    if (!y || !y.stringify) {
                        throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js")
                    }
                    return y.stringify(a.a.c(b), e, c)
                }, Ob: function (e, c, d) {
                    d = d || {};
                    var g = d.params || {}, f = d.includeFields || this.Ta, p = e;
                    if ("object" == typeof e && "form" === a.a.u(e)) {
                        for (var p = e.action, r = f.length - 1; 0 <= r; r--) {
                            for (var z = a.a.Ua(e, f[r]), D = z.length - 1; 0 <= D; D--) {
                                g[z[D].name] = z[D].value
                            }
                        }
                    }
                    c = a.a.c(c);
                    var q = s.createElement("form");
                    q.style.display = "none";
                    q.action = p;
                    q.method = "post";
                    for (var v in c) {
                        e = s.createElement("input"), e.name = v, e.value = a.a.Ca(a.a.c(c[v])), q.appendChild(e)
                    }
                    b(g, function (a, b) {
                        var e = s.createElement("input");
                        e.name = a;
                        e.value = b;
                        q.appendChild(e)
                    });
                    s.body.appendChild(q);
                    d.submitter ? d.submitter(q) : q.submit();
                    setTimeout(function () {
                        q.parentNode.removeChild(q)
                    }, 0)
                }}
            }();
            a.b("utils", a.a);
            a.b("utils.arrayForEach", a.a.p);
            a.b("utils.arrayFirst", a.a.La);
            a.b("utils.arrayFilter", a.a.Y);
            a.b("utils.arrayGetDistinctValues", a.a.Ma);
            a.b("utils.arrayIndexOf", a.a.k);
            a.b("utils.arrayMap", a.a.Z);
            a.b("utils.arrayPushAll", a.a.R);
            a.b("utils.arrayRemoveItem", a.a.ka);
            a.b("utils.extend", a.a.extend);
            a.b("utils.fieldsIncludedWithJsonPost", a.a.Ta);
            a.b("utils.getFormFields", a.a.Ua);
            a.b("utils.peekObservable", a.a.ya);
            a.b("utils.postJson", a.a.Ob);
            a.b("utils.parseJson", a.a.Nb);
            a.b("utils.registerEventHandler", a.a.o);
            a.b("utils.stringifyJson", a.a.Ca);
            a.b("utils.range", a.a.Qb);
            a.b("utils.toggleDomNodeCssClass", a.a.ga);
            a.b("utils.triggerEvent", a.a.Ga);
            a.b("utils.unwrapObservable", a.a.c);
            a.b("utils.objectForEach", a.a.w);
            a.b("utils.addOrRemoveItem", a.a.ja);
            a.b("unwrap", a.a.c);
            Function.prototype.bind || (Function.prototype.bind = function (a) {
                var c = this, d = Array.prototype.slice.call(arguments);
                a = d.shift();
                return function () {
                    return c.apply(a, d.concat(Array.prototype.slice.call(arguments)))
                }
            });
            a.a.f = new function () {
                var b = 0, c = "__ko__" + (new Date).getTime(), d = {};
                return{get: function (b, c) {
                    var e = a.a.f.pa(b, !1);
                    return e === q ? q : e[c]
                }, set: function (b, c, e) {
                    if (e !== q || a.a.f.pa(b, !1) !== q) {
                        a.a.f.pa(b, !0)[c] = e
                    }
                }, pa: function (a, g) {
                    var e = a[c];
                    if (!e || "null" === e || !d[e]) {
                        if (!g) {
                            return q
                        }
                        e = a[c] = "ko" + b++;
                        d[e] = {}
                    }
                    return d[e]
                }, clear: function (a) {
                    var b = a[c];
                    return b ? (delete d[b], a[c] = null, !0) : !1
                }}
            };
            a.b("utils.domData", a.a.f);
            a.b("utils.domData.clear", a.a.f.clear);
            a.a.C = new function () {
                function b(b, c) {
                    var g = a.a.f.get(b, d);
                    g === q && c && (g = [], a.a.f.set(b, d, g));
                    return g
                }

                function c(e) {
                    var d = b(e, !1);
                    if (d) {
                        for (var d = d.slice(0), f = 0; f < d.length; f++) {
                            d[f](e)
                        }
                    }
                    a.a.f.clear(e);
                    "function" == typeof t && "function" == typeof t.cleanData && t.cleanData([e]);
                    if (g[e.nodeType]) {
                        for (d = e.firstChild; e = d;) {
                            d = e.nextSibling, 8 === e.nodeType && c(e)
                        }
                    }
                }

                var d = "__ko_domNodeDisposal__" + (new Date).getTime(), f = {1: !0, 8: !0, 9: !0}, g = {1: !0, 9: !0};
                return{ia: function (a, c) {
                    if ("function" != typeof c) {
                        throw Error("Callback must be a function")
                    }
                    b(a, !0).push(c)
                }, cb: function (e, c) {
                    var g = b(e, !1);
                    g && (a.a.ka(g, c), 0 == g.length && a.a.f.set(e, d, q))
                }, H: function (b) {
                    if (f[b.nodeType] && (c(b), g[b.nodeType])) {
                        var d = [];
                        a.a.R(d, b.getElementsByTagName("*"));
                        for (var h = 0, k = d.length; h < k; h++) {
                            c(d[h])
                        }
                    }
                    return b
                }, removeNode: function (b) {
                    a.H(b);
                    b.parentNode && b.parentNode.removeChild(b)
                }}
            };
            a.H = a.a.C.H;
            a.removeNode = a.a.C.removeNode;
            a.b("cleanNode", a.H);
            a.b("removeNode", a.removeNode);
            a.b("utils.domNodeDisposal", a.a.C);
            a.b("utils.domNodeDisposal.addDisposeCallback", a.a.C.ia);
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.C.cb);
            (function () {
                a.a.xa = function (b) {
                    var c;
                    if ("undefined" != typeof t) {
                        if (t.parseHTML) {
                            c = t.parseHTML(b) || []
                        } else {
                            if ((c = t.clean([b])) && c[0]) {
                                for (b = c[0]; b.parentNode && 11 !== b.parentNode.nodeType;) {
                                    b = b.parentNode
                                }
                                b.parentNode && b.parentNode.removeChild(b)
                            }
                        }
                    } else {
                        var d = a.a.F(b).toLowerCase();
                        c = s.createElement("div");
                        d = d.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !d.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!d.indexOf("<td") || !d.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""];
                        b = "ignored<div>" + d[1] + b + d[2] + "</div>";
                        for ("function" == typeof w.innerShiv ? c.appendChild(w.innerShiv(b)) : c.innerHTML = b; d[0]--;) {
                            c = c.lastChild
                        }
                        c = a.a.N(c.lastChild.childNodes)
                    }
                    return c
                };
                a.a.fa = function (b, c) {
                    a.a.oa(b);
                    c = a.a.c(c);
                    if (null !== c && c !== q) {
                        if ("string" != typeof c && (c = c.toString()), "undefined" != typeof t) {
                            t(b).html(c)
                        } else {
                            for (var d = a.a.xa(c), f = 0; f < d.length; f++) {
                                b.appendChild(d[f])
                            }
                        }
                    }
                }
            })();
            a.b("utils.parseHtmlFragment", a.a.xa);
            a.b("utils.setHtml", a.a.fa);
            a.s = function () {
                function b(c, f) {
                    if (c) {
                        if (8 == c.nodeType) {
                            var g = a.s.$a(c.nodeValue);
                            null != g && f.push({xb: c, Kb: g})
                        } else {
                            if (1 == c.nodeType) {
                                for (var g = 0, e = c.childNodes, m = e.length; g < m; g++) {
                                    b(e[g], f)
                                }
                            }
                        }
                    }
                }

                var c = {};
                return{va: function (a) {
                    if ("function" != typeof a) {
                        throw Error("You can only pass a function to ko.memoization.memoize()")
                    }
                    var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                    c[b] = a;
                    return"\x3c!--[ko_memo:" + b + "]--\x3e"
                }, mb: function (a, b) {
                    var g = c[a];
                    if (g === q) {
                        throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.")
                    }
                    try {
                        return g.apply(null, b || []), !0
                    } finally {
                        delete c[a]
                    }
                }, nb: function (c, f) {
                    var g = [];
                    b(c, g);
                    for (var e = 0, m = g.length; e < m; e++) {
                        var h = g[e].xb, k = [h];
                        f && a.a.R(k, f);
                        a.s.mb(g[e].Kb, k);
                        h.nodeValue = "";
                        h.parentNode && h.parentNode.removeChild(h)
                    }
                }, $a: function (a) {
                    return(a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null
                }}
            }();
            a.b("memoization", a.s);
            a.b("memoization.memoize", a.s.va);
            a.b("memoization.unmemoize", a.s.mb);
            a.b("memoization.parseMemoText", a.s.$a);
            a.b("memoization.unmemoizeDomNodeAndDescendants", a.s.nb);
            a.Sa = {throttle: function (b, c) {
                b.throttleEvaluation = c;
                var d = null;
                return a.j({read: b, write: function (a) {
                    clearTimeout(d);
                    d = setTimeout(function () {
                        b(a)
                    }, c)
                }})
            }, notify: function (b, c) {
                b.equalityComparer = "always" == c ? F(!1) : a.m.fn.equalityComparer;
                return b
            }};
            a.b("extenders", a.Sa);
            a.kb = function (b, c, d) {
                this.target = b;
                this.la = c;
                this.wb = d;
                a.r(this, "dispose", this.B)
            };
            a.kb.prototype.B = function () {
                this.Hb = !0;
                this.wb()
            };
            a.V = function () {
                this.G = {};
                a.a.extend(this, a.V.fn);
                a.r(this, "subscribe", this.Da);
                a.r(this, "extend", this.extend);
                a.r(this, "getSubscriptionsCount", this.Db)
            };
            a.V.fn = {Da: function (b, c, d) {
                d = d || "change";
                var f = new a.kb(this, c ? b.bind(c) : b, function () {
                    a.a.ka(this.G[d], f)
                }.bind(this));
                this.G[d] || (this.G[d] = []);
                this.G[d].push(f);
                return f
            }, notifySubscribers: function (b, c) {
                c = c || "change";
                this.G[c] && a.q.I(function () {
                    a.a.p(this.G[c].slice(0), function (a) {
                        a && !0 !== a.Hb && a.la(b)
                    })
                }, this)
            }, Db: function () {
                var b = 0;
                a.a.w(this.G, function (a, d) {
                    b += d.length
                });
                return b
            }, extend: function (b) {
                var c = this;
                b && a.a.w(b, function (b, f) {
                    var g = a.Sa[b];
                    "function" == typeof g && (c = g(c, f))
                });
                return c
            }};
            a.Wa = function (a) {
                return null != a && "function" == typeof a.Da && "function" == typeof a.notifySubscribers
            };
            a.b("subscribable", a.V);
            a.b("isSubscribable", a.Wa);
            a.q = function () {
                var b = [];
                return{rb: function (a) {
                    b.push({la: a, Ra: []})
                }, end: function () {
                    b.pop()
                }, bb: function (c) {
                    if (!a.Wa(c)) {
                        throw Error("Only subscribable things can act as dependencies")
                    }
                    if (0 < b.length) {
                        var d = b[b.length - 1];
                        !d || 0 <= a.a.k(d.Ra, c) || (d.Ra.push(c), d.la(c))
                    }
                }, I: function (a, d, f) {
                    try {
                        return b.push(null), a.apply(d, f || [])
                    } finally {
                        b.pop()
                    }
                }}
            }();
            var L = {undefined: !0, "boolean": !0, number: !0, string: !0};
            a.m = function (b) {
                function c() {
                    if (0 < arguments.length) {
                        return c.equalityComparer && c.equalityComparer(d, arguments[0]) || (c.K(), d = arguments[0], c.J()), this
                    }
                    a.q.bb(c);
                    return d
                }

                var d = b;
                a.V.call(c);
                c.t = function () {
                    return d
                };
                c.J = function () {
                    c.notifySubscribers(d)
                };
                c.K = function () {
                    c.notifySubscribers(d, "beforeChange")
                };
                a.a.extend(c, a.m.fn);
                a.r(c, "peek", c.t);
                a.r(c, "valueHasMutated", c.J);
                a.r(c, "valueWillMutate", c.K);
                return c
            };
            a.m.fn = {equalityComparer: function (a, c) {
                return null === a || typeof a in L ? a === c : !1
            }};
            var A = a.m.Pb = "__ko_proto__";
            a.m.fn[A] = a.m;
            a.qa = function (b, c) {
                return null === b || b === q || b[A] === q ? !1 : b[A] === c ? !0 : a.qa(b[A], c)
            };
            a.T = function (b) {
                return a.qa(b, a.m)
            };
            a.Xa = function (b) {
                return"function" == typeof b && b[A] === a.m || "function" == typeof b && b[A] === a.j && b.Eb ? !0 : !1
            };
            a.b("observable", a.m);
            a.b("isObservable", a.T);
            a.b("isWriteableObservable", a.Xa);
            a.U = function (b) {
                b = b || [];
                if ("object" != typeof b || !("length" in b)) {
                    throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.")
                }
                b = a.m(b);
                a.a.extend(b, a.U.fn);
                return b
            };
            a.U.fn = {remove: function (a) {
                for (var c = this.t(), d = [], f = "function" == typeof a ? a : function (e) {
                    return e === a
                }, g = 0; g < c.length; g++) {
                    var e = c[g];
                    f(e) && (0 === d.length && this.K(), d.push(e), c.splice(g, 1), g--)
                }
                d.length && this.J();
                return d
            }, removeAll: function (b) {
                if (b === q) {
                    var c = this.t(), d = c.slice(0);
                    this.K();
                    c.splice(0, c.length);
                    this.J();
                    return d
                }
                return b ? this.remove(function (c) {
                    return 0 <= a.a.k(b, c)
                }) : []
            }, destroy: function (a) {
                var c = this.t(), d = "function" == typeof a ? a : function (c) {
                    return c === a
                };
                this.K();
                for (var f = c.length - 1; 0 <= f; f--) {
                    d(c[f]) && (c[f]._destroy = !0)
                }
                this.J()
            }, destroyAll: function (b) {
                return b === q ? this.destroy(F(!0)) : b ? this.destroy(function (c) {
                    return 0 <= a.a.k(b, c)
                }) : []
            }, indexOf: function (b) {
                var c = this();
                return a.a.k(c, b)
            }, replace: function (a, c) {
                var d = this.indexOf(a);
                0 <= d && (this.K(), this.t()[d] = c, this.J())
            }};
            a.a.p("pop push reverse shift sort splice unshift".split(" "), function (b) {
                a.U.fn[b] = function () {
                    var a = this.t();
                    this.K();
                    a = a[b].apply(a, arguments);
                    this.J();
                    return a
                }
            });
            a.a.p(["slice"], function (b) {
                a.U.fn[b] = function () {
                    var a = this();
                    return a[b].apply(a, arguments)
                }
            });
            a.b("observableArray", a.U);
            a.j = function (b, c, d) {
                function f() {
                    a.a.p(v, function (a) {
                        a.B()
                    });
                    v = []
                }

                function g() {
                    var a = m.throttleEvaluation;
                    a && 0 <= a ? (clearTimeout(t), t = setTimeout(e, a)) : e()
                }

                function e() {
                    if (!n) {
                        if (l && D()) {
                            x()
                        } else {
                            n = !0;
                            try {
                                var b = a.a.Z(v, function (a) {
                                    return a.target
                                });
                                a.q.rb(function (e) {
                                    var c;
                                    0 <= (c = a.a.k(b, e)) ? b[c] = q : v.push(e.Da(g))
                                });
                                for (var e = p.call(c), d = b.length - 1; 0 <= d; d--) {
                                    b[d] && v.splice(d, 1)[0].B()
                                }
                                l = !0;
                                m.notifySubscribers(k, "beforeChange");
                                k = e;
                                m.notifySubscribers(k)
                            } finally {
                                a.q.end(), n = !1
                            }
                            v.length || x()
                        }
                    }
                }

                function m() {
                    if (0 < arguments.length) {
                        if ("function" === typeof r) {
                            r.apply(c, arguments)
                        } else {
                            throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.")
                        }
                        return this
                    }
                    l || e();
                    a.q.bb(m);
                    return k
                }

                function h() {
                    return !l || 0 < v.length
                }

                var k, l = !1, n = !1, p = b;
                p && "object" == typeof p ? (d = p, p = d.read) : (d = d || {}, p || (p = d.read));
                if ("function" != typeof p) {
                    throw Error("Pass a function that returns the value of the ko.computed")
                }
                var r = d.write, z = d.disposeWhenNodeIsRemoved || d.$ || null, D = d.disposeWhen || d.Qa || F(!1), x = f, v = [], t = null;
                c || (c = d.owner);
                m.t = function () {
                    l || e();
                    return k
                };
                m.Cb = function () {
                    return v.length
                };
                m.Eb = "function" === typeof d.write;
                m.B = function () {
                    x()
                };
                m.ta = h;
                a.V.call(m);
                a.a.extend(m, a.j.fn);
                a.r(m, "peek", m.t);
                a.r(m, "dispose", m.B);
                a.r(m, "isActive", m.ta);
                a.r(m, "getDependenciesCount", m.Cb);
                !0 !== d.deferEvaluation && e();
                if (z && h()) {
                    x = function () {
                        a.a.C.cb(z, x);
                        f()
                    };
                    a.a.C.ia(z, x);
                    var s = D, D = function () {
                        return !a.a.aa(z) || s()
                    }
                }
                return m
            };
            a.Gb = function (b) {
                return a.qa(b, a.j)
            };
            C = a.m.Pb;
            a.j[C] = a.m;
            a.j.fn = {};
            a.j.fn[C] = a.j;
            a.b("dependentObservable", a.j);
            a.b("computed", a.j);
            a.b("isComputed", a.Gb);
            (function () {
                function b(a, g, e) {
                    e = e || new d;
                    a = g(a);
                    if ("object" != typeof a || null === a || a === q || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) {
                        return a
                    }
                    var m = a instanceof Array ? [] : {};
                    e.save(a, m);
                    c(a, function (c) {
                        var d = g(a[c]);
                        switch (typeof d) {
                            case"boolean":
                            case"number":
                            case"string":
                            case"function":
                                m[c] = d;
                                break;
                            case"object":
                            case"undefined":
                                var l = e.get(d);
                                m[c] = l !== q ? l : b(d, g, e)
                        }
                    });
                    return m
                }

                function c(a, b) {
                    if (a instanceof Array) {
                        for (var e = 0; e < a.length; e++) {
                            b(e)
                        }
                        "function" == typeof a.toJSON && b("toJSON")
                    } else {
                        for (e in a) {
                            b(e)
                        }
                    }
                }

                function d() {
                    this.keys = [];
                    this.Ha = []
                }

                a.lb = function (c) {
                    if (0 == arguments.length) {
                        throw Error("When calling ko.toJS, pass the object you want to convert.")
                    }
                    return b(c, function (b) {
                        for (var e = 0; a.T(b) && 10 > e; e++) {
                            b = b()
                        }
                        return b
                    })
                };
                a.toJSON = function (b, c, e) {
                    b = a.lb(b);
                    return a.a.Ca(b, c, e)
                };
                d.prototype = {save: function (b, c) {
                    var e = a.a.k(this.keys, b);
                    0 <= e ? this.Ha[e] = c : (this.keys.push(b), this.Ha.push(c))
                }, get: function (b) {
                    b = a.a.k(this.keys, b);
                    return 0 <= b ? this.Ha[b] : q
                }}
            })();
            a.b("toJS", a.lb);
            a.b("toJSON", a.toJSON);
            (function () {
                a.h = {n: function (b) {
                    switch (a.a.u(b)) {
                        case"option":
                            return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.f.get(b, a.d.options.wa) : 7 >= a.a.ca ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                        case"select":
                            return 0 <= b.selectedIndex ? a.h.n(b.options[b.selectedIndex]) : q;
                        default:
                            return b.value
                    }
                }, W: function (b, c) {
                    switch (a.a.u(b)) {
                        case"option":
                            switch (typeof c) {
                                case"string":
                                    a.a.f.set(b, a.d.options.wa, q);
                                    "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__;
                                    b.value = c;
                                    break;
                                default:
                                    a.a.f.set(b, a.d.options.wa, c), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof c ? c : ""
                            }
                            break;
                        case"select":
                            "" === c && (c = q);
                            if (null === c || c === q) {
                                b.selectedIndex = -1
                            }
                            for (var d = b.options.length - 1; 0 <= d; d--) {
                                if (a.h.n(b.options[d]) == c) {
                                    b.selectedIndex = d;
                                    break
                                }
                            }
                            1 < b.size || -1 !== b.selectedIndex || (b.selectedIndex = 0);
                            break;
                        default:
                            if (null === c || c === q) {
                                c = ""
                            }
                            b.value = c
                    }
                }}
            })();
            a.b("selectExtensions", a.h);
            a.b("selectExtensions.readValue", a.h.n);
            a.b("selectExtensions.writeValue", a.h.W);
            a.g = function () {
                function b(a, b) {
                    for (var d = null; a != d;) {
                        d = a, a = a.replace(c, function (a, c) {
                            return b[c]
                        })
                    }
                    return a
                }

                var c = /\@ko_token_(\d+)\@/g, d = ["true", "false", "null", "undefined"], f = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;
                return{S: [], da: function (c) {
                    var e = a.a.F(c);
                    if (3 > e.length) {
                        return[]
                    }
                    "{" === e.charAt(0) && (e = e.substring(1, e.length - 1));
                    c = [];
                    for (var d = null, f, k = 0; k < e.length; k++) {
                        var l = e.charAt(k);
                        if (null === d) {
                            switch (l) {
                                case'"':
                                case"'":
                                case"/":
                                    d = k, f = l
                            }
                        } else {
                            if (l == f && "\\" !== e.charAt(k - 1)) {
                                l = e.substring(d, k + 1);
                                c.push(l);
                                var n = "@ko_token_" + (c.length - 1) + "@", e = e.substring(0, d) + n + e.substring(k + 1), k = k - (l.length - n.length), d = null
                            }
                        }
                    }
                    f = d = null;
                    for (var p = 0, r = null, k = 0; k < e.length; k++) {
                        l = e.charAt(k);
                        if (null === d) {
                            switch (l) {
                                case"{":
                                    d = k;
                                    r = l;
                                    f = "}";
                                    break;
                                case"(":
                                    d = k;
                                    r = l;
                                    f = ")";
                                    break;
                                case"[":
                                    d = k, r = l, f = "]"
                            }
                        }
                        l === r ? p++ : l === f && (p--, 0 === p && (l = e.substring(d, k + 1), c.push(l), n = "@ko_token_" + (c.length - 1) + "@", e = e.substring(0, d) + n + e.substring(k + 1), k -= l.length - n.length, d = null))
                    }
                    f = [];
                    e = e.split(",");
                    d = 0;
                    for (k = e.length; d < k; d++) {
                        p = e[d], r = p.indexOf(":"), 0 < r && r < p.length - 1 ? (l = p.substring(r + 1), f.push({key: b(p.substring(0, r), c), value: b(l, c)})) : f.push({unknown: b(p, c)})
                    }
                    return f
                }, ea: function (b) {
                    var e = "string" === typeof b ? a.g.da(b) : b, c = [];
                    b = [];
                    for (var h, k = 0; h = e[k]; k++) {
                        if (0 < c.length && c.push(","), h.key) {
                            var l;
                            a:{
                                l = h.key;
                                var n = a.a.F(l);
                                switch (n.length && n.charAt(0)) {
                                    case"'":
                                    case'"':
                                        break a;
                                    default:
                                        l = "'" + n + "'"
                                }
                            }
                            h = h.value;
                            c.push(l);
                            c.push(":");
                            c.push(h);
                            h = a.a.F(h);
                            0 <= a.a.k(d, a.a.F(h).toLowerCase()) ? h = !1 : (n = h.match(f), h = null === n ? !1 : n[1] ? "Object(" + n[1] + ")" + n[2] : h);
                            h && (0 < b.length && b.push(", "), b.push(l + " : function(__ko_value) { " + h + " = __ko_value; }"))
                        } else {
                            h.unknown && c.push(h.unknown)
                        }
                    }
                    e = c.join("");
                    0 < b.length && (e = e + ", '_ko_property_writers' : { " + b.join("") + " } ");
                    return e
                }, Jb: function (b, c) {
                    for (var d = 0; d < b.length; d++) {
                        if (a.a.F(b[d].key) == c) {
                            return !0
                        }
                    }
                    return !1
                }, ha: function (b, c, d, f, k) {
                    if (b && a.T(b)) {
                        !a.Xa(b) || k && b.t() === f || b(f)
                    } else {
                        if ((b = c()._ko_property_writers) && b[d]) {
                            b[d](f)
                        }
                    }
                }}
            }();
            a.b("expressionRewriting", a.g);
            a.b("expressionRewriting.bindingRewriteValidators", a.g.S);
            a.b("expressionRewriting.parseObjectLiteral", a.g.da);
            a.b("expressionRewriting.preProcessBindings", a.g.ea);
            a.b("jsonExpressionRewriting", a.g);
            a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.g.ea);
            (function () {
                function b(a) {
                    return 8 == a.nodeType && (g ? a.text : a.nodeValue).match(e)
                }

                function c(a) {
                    return 8 == a.nodeType && (g ? a.text : a.nodeValue).match(m)
                }

                function d(a, e) {
                    for (var d = a, g = 1, f = []; d = d.nextSibling;) {
                        if (c(d) && (g--, 0 === g)) {
                            return f
                        }
                        f.push(d);
                        b(d) && g++
                    }
                    if (!e) {
                        throw Error("Cannot find closing comment tag to match: " + a.nodeValue)
                    }
                    return null
                }

                function f(a, b) {
                    var c = d(a, b);
                    return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null
                }

                var g = s && "\x3c!--test--\x3e" === s.createComment("test").text, e = g ? /^\x3c!--\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*--\x3e$/ : /^\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*$/, m = g ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, h = {ul: !0, ol: !0};
                a.e = {L: {}, childNodes: function (a) {
                    return b(a) ? d(a) : a.childNodes
                }, ba: function (c) {
                    if (b(c)) {
                        c = a.e.childNodes(c);
                        for (var e = 0, d = c.length; e < d; e++) {
                            a.removeNode(c[e])
                        }
                    } else {
                        a.a.oa(c)
                    }
                }, P: function (c, e) {
                    if (b(c)) {
                        a.e.ba(c);
                        for (var d = c.nextSibling, g = 0, f = e.length; g < f; g++) {
                            d.parentNode.insertBefore(e[g], d)
                        }
                    } else {
                        a.a.P(c, e)
                    }
                }, ab: function (a, c) {
                    b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c)
                }, Va: function (c, e, d) {
                    d ? b(c) ? c.parentNode.insertBefore(e, d.nextSibling) : d.nextSibling ? c.insertBefore(e, d.nextSibling) : c.appendChild(e) : a.e.ab(c, e)
                }, firstChild: function (a) {
                    return b(a) ? !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling : a.firstChild
                }, nextSibling: function (a) {
                    b(a) && (a = f(a));
                    return a.nextSibling && c(a.nextSibling) ? null : a.nextSibling
                }, ob: function (a) {
                    return(a = b(a)) ? a[1] : null
                }, Za: function (e) {
                    if (h[a.a.u(e)]) {
                        var d = e.firstChild;
                        if (d) {
                            do {
                                if (1 === d.nodeType) {
                                    var g;
                                    g = d.firstChild;
                                    var m = null;
                                    if (g) {
                                        do {
                                            if (m) {
                                                m.push(g)
                                            } else {
                                                if (b(g)) {
                                                    var r = f(g, !0);
                                                    r ? g = r : m = [g]
                                                } else {
                                                    c(g) && (m = [g])
                                                }
                                            }
                                        } while (g = g.nextSibling)
                                    }
                                    if (g = m) {
                                        for (m = d.nextSibling, r = 0; r < g.length; r++) {
                                            m ? e.insertBefore(g[r], m) : e.appendChild(g[r])
                                        }
                                    }
                                }
                            } while (d = d.nextSibling)
                        }
                    }
                }}
            })();
            a.b("virtualElements", a.e);
            a.b("virtualElements.allowedBindings", a.e.L);
            a.b("virtualElements.emptyNode", a.e.ba);
            a.b("virtualElements.insertAfter", a.e.Va);
            a.b("virtualElements.prepend", a.e.ab);
            a.b("virtualElements.setDomNodeChildren", a.e.P);
            (function () {
                a.M = function () {
                    this.Na = {}
                };
                a.a.extend(a.M.prototype, {nodeHasBindings: function (b) {
                    switch (b.nodeType) {
                        case 1:
                            return null != b.getAttribute("data-bind");
                        case 8:
                            return null != a.e.ob(b);
                        default:
                            return !1
                    }
                }, getBindings: function (a, c) {
                    var d = this.getBindingsString(a, c);
                    return d ? this.parseBindingsString(d, c, a) : null
                }, getBindingsString: function (b) {
                    switch (b.nodeType) {
                        case 1:
                            return b.getAttribute("data-bind");
                        case 8:
                            return a.e.ob(b);
                        default:
                            return null
                    }
                }, parseBindingsString: function (b, c, d) {
                    try {
                        var f;
                        if (!(f = this.Na[b])) {
                            var g = this.Na, e, m = "with($context){with($data||{}){return{" + a.g.ea(b) + "}}}";
                            e = new Function("$context", "$element", m);
                            f = g[b] = e
                        }
                        return f(c, d)
                    } catch (h) {
                        throw h.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + h.message, h
                    }
                }});
                a.M.instance = new a.M
            })();
            a.b("bindingProvider", a.M);
            (function () {
                function b(b, e, d) {
                    for (var f = a.e.firstChild(e); e = f;) {
                        f = a.e.nextSibling(e), c(b, e, d)
                    }
                }

                function c(c, e, f) {
                    var h = !0, k = 1 === e.nodeType;
                    k && a.e.Za(e);
                    if (k && f || a.M.instance.nodeHasBindings(e)) {
                        h = d(e, null, c, f).Sb
                    }
                    h && b(c, e, !k)
                }

                function d(b, c, d, h) {
                    function k(a) {
                        return function () {
                            return p[a]
                        }
                    }

                    function l() {
                        return p
                    }

                    var n = 0, p, r, z = a.a.f.get(b, f);
                    if (!c) {
                        if (z) {
                            throw Error("You cannot apply bindings multiple times to the same element.")
                        }
                        a.a.f.set(b, f, !0)
                    }
                    a.j(function () {
                        var f = d && d instanceof a.A ? d : new a.A(a.a.c(d)), x = f.$data;
                        !z && h && a.jb(b, f);
                        if (p = ("function" == typeof c ? c(f, b) : c) || a.M.instance.getBindings(b, f)) {
                            0 === n && (n = 1, a.a.w(p, function (c) {
                                var e = a.d[c];
                                if (e && 8 === b.nodeType && !a.e.L[c]) {
                                    throw Error("The binding '" + c + "' cannot be used with virtual elements")
                                }
                                if (e && "function" == typeof e.init && (e = (0, e.init)(b, k(c), l, x, f)) && e.controlsDescendantBindings) {
                                    if (r !== q) {
                                        throw Error("Multiple bindings (" + r + " and " + c + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")
                                    }
                                    r = c
                                }
                            }), n = 2), 2 === n && a.a.w(p, function (c) {
                                var e = a.d[c];
                                e && "function" == typeof e.update && (0, e.update)(b, k(c), l, x, f)
                            })
                        }
                    }, null, {$: b});
                    return{Sb: r === q}
                }

                a.d = {};
                a.A = function (b, c, d) {
                    c ? (a.a.extend(this, c), this.$parentContext = c, this.$parent = c.$data, this.$parents = (c.$parents || []).slice(0), this.$parents.unshift(this.$parent)) : (this.$parents = [], this.$root = b, this.ko = a);
                    this.$data = b;
                    d && (this[d] = b)
                };
                a.A.prototype.createChildContext = function (b, c) {
                    return new a.A(b, this, c)
                };
                a.A.prototype.extend = function (b) {
                    var c = a.a.extend(new a.A, this);
                    return a.a.extend(c, b)
                };
                var f = "__ko_boundElement";
                a.jb = function (b, c) {
                    if (2 == arguments.length) {
                        a.a.f.set(b, "__ko_bindingContext__", c)
                    } else {
                        return a.a.f.get(b, "__ko_bindingContext__")
                    }
                };
                a.Ka = function (b, c, f) {
                    1 === b.nodeType && a.e.Za(b);
                    return d(b, c, f, !0)
                };
                a.Ja = function (a, c) {
                    1 !== c.nodeType && 8 !== c.nodeType || b(a, c, !0)
                };
                a.Ia = function (a, b) {
                    if (b && 1 !== b.nodeType && 8 !== b.nodeType) {
                        throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node")
                    }
                    b = b || w.document.body;
                    c(a, b, !0)
                };
                a.na = function (b) {
                    switch (b.nodeType) {
                        case 1:
                        case 8:
                            var c = a.jb(b);
                            if (c) {
                                return c
                            }
                            if (b.parentNode) {
                                return a.na(b.parentNode)
                            }
                    }
                    return q
                };
                a.ub = function (b) {
                    return(b = a.na(b)) ? b.$data : q
                };
                a.b("bindingHandlers", a.d);
                a.b("applyBindings", a.Ia);
                a.b("applyBindingsToDescendants", a.Ja);
                a.b("applyBindingsToNode", a.Ka);
                a.b("contextFor", a.na);
                a.b("dataFor", a.ub)
            })();
            var K = {"class": "className", "for": "htmlFor"};
            a.d.attr = {update: function (b, c) {
                var d = a.a.c(c()) || {};
                a.a.w(d, function (c, d) {
                    d = a.a.c(d);
                    var e = !1 === d || null === d || d === q;
                    e && b.removeAttribute(c);
                    8 >= a.a.ca && c in K ? (c = K[c], e ? b.removeAttribute(c) : b[c] = d) : e || b.setAttribute(c, d.toString());
                    "name" === c && a.a.gb(b, e ? "" : d.toString())
                })
            }};
            a.d.checked = {init: function (b, c, d) {
                a.a.o(b, "click", function () {
                    var f;
                    if ("checkbox" == b.type) {
                        f = b.checked
                    } else {
                        if ("radio" == b.type && b.checked) {
                            f = b.value
                        } else {
                            return
                        }
                    }
                    var g = c(), e = a.a.c(g);
                    "checkbox" == b.type && e instanceof Array ? a.a.ja(g, b.value, b.checked) : a.g.ha(g, d, "checked", f, !0)
                });
                "radio" != b.type || b.name || a.d.uniqueName.init(b, F(!0))
            }, update: function (b, c) {
                var d = a.a.c(c());
                "checkbox" == b.type ? b.checked = d instanceof Array ? 0 <= a.a.k(d, b.value) : d : "radio" == b.type && (b.checked = b.value == d)
            }};
            a.d.css = {update: function (b, c) {
                var d = a.a.c(c());
                "object" == typeof d ? a.a.w(d, function (c, d) {
                    d = a.a.c(d);
                    a.a.ga(b, c, d)
                }) : (d = String(d || ""), a.a.ga(b, b.__ko__cssValue, !1), b.__ko__cssValue = d, a.a.ga(b, d, !0))
            }};
            a.d.enable = {update: function (b, c) {
                var d = a.a.c(c());
                d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = !0)
            }};
            a.d.disable = {update: function (b, c) {
                a.d.enable.update(b, function () {
                    return !a.a.c(c())
                })
            }};
            a.d.event = {init: function (b, c, d, f) {
                var g = c() || {};
                a.a.w(g, function (e) {
                    "string" == typeof e && a.a.o(b, e, function (b) {
                        var g, k = c()[e];
                        if (k) {
                            var l = d();
                            try {
                                var n = a.a.N(arguments);
                                n.unshift(f);
                                g = k.apply(f, n)
                            } finally {
                                !0 !== g && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
                            }
                            !1 === l[e + "Bubble"] && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation())
                        }
                    })
                })
            }};
            a.d.foreach = {Ya: function (b) {
                return function () {
                    var c = b(), d = a.a.ya(c);
                    if (!d || "number" == typeof d.length) {
                        return{foreach: c, templateEngine: a.D.sa}
                    }
                    a.a.c(c);
                    return{foreach: d.data, as: d.as, includeDestroyed: d.includeDestroyed, afterAdd: d.afterAdd, beforeRemove: d.beforeRemove, afterRender: d.afterRender, beforeMove: d.beforeMove, afterMove: d.afterMove, templateEngine: a.D.sa}
                }
            }, init: function (b, c) {
                return a.d.template.init(b, a.d.foreach.Ya(c))
            }, update: function (b, c, d, f, g) {
                return a.d.template.update(b, a.d.foreach.Ya(c), d, f, g)
            }};
            a.g.S.foreach = !1;
            a.e.L.foreach = !0;
            a.d.hasfocus = {init: function (b, c, d) {
                function f(e) {
                    b.__ko_hasfocusUpdating = !0;
                    var f = b.ownerDocument;
                    if ("activeElement" in f) {
                        var g;
                        try {
                            g = f.activeElement
                        } catch (l) {
                            g = f.body
                        }
                        e = g === b
                    }
                    f = c();
                    a.g.ha(f, d, "hasfocus", e, !0);
                    b.__ko_hasfocusLastValue = e;
                    b.__ko_hasfocusUpdating = !1
                }

                var g = f.bind(null, !0), e = f.bind(null, !1);
                a.a.o(b, "focus", g);
                a.a.o(b, "focusin", g);
                a.a.o(b, "blur", e);
                a.a.o(b, "focusout", e)
            }, update: function (b, c) {
                var d = !!a.a.c(c());
                b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), a.q.I(a.a.Ga, null, [b, d ? "focusin" : "focusout"]))
            }};
            a.d.hasFocus = a.d.hasfocus;
            a.d.html = {init: function () {
                return{controlsDescendantBindings: !0}
            }, update: function (b, c) {
                a.a.fa(b, c())
            }};
            var I = "__ko_withIfBindingData";
            G("if");
            G("ifnot", !1, !0);
            G("with", !0, !1, function (a, c) {
                return a.createChildContext(c)
            });
            a.d.options = {init: function (b) {
                if ("select" !== a.a.u(b)) {
                    throw Error("options binding applies only to SELECT elements")
                }
                for (; 0 < b.length;) {
                    b.remove(0)
                }
                return{controlsDescendantBindings: !0}
            }, update: function (b, c, d) {
                function f(a, b, c) {
                    var d = typeof b;
                    return"function" == d ? b(a) : "string" == d ? a[b] : c
                }

                function g(b, c) {
                    if (p) {
                        var d = 0 <= a.a.k(p, a.h.n(c[0]));
                        a.a.hb(c[0], d)
                    }
                }

                var e = 0 == b.length, m = !e && b.multiple ? b.scrollTop : null;
                c = a.a.c(c());
                var h = d(), k = h.optionsIncludeDestroyed, l = {}, n, p;
                b.multiple ? p = a.a.Z(b.selectedOptions || a.a.Y(b.childNodes, function (b) {
                    return b.tagName && "option" === a.a.u(b) && b.selected
                }), function (b) {
                    return a.h.n(b)
                }) : 0 <= b.selectedIndex && (p = [a.h.n(b.options[b.selectedIndex])]);
                if (c) {
                    "undefined" == typeof c.length && (c = [c]);
                    var r = a.a.Y(c, function (b) {
                        return k || b === q || null === b || !a.a.c(b._destroy)
                    });
                    "optionsCaption" in h && (n = a.a.c(h.optionsCaption), null !== n && n !== q && r.unshift(l))
                } else {
                    c = []
                }
                d = g;
                h.optionsAfterRender && (d = function (b, c) {
                    g(0, c);
                    a.q.I(h.optionsAfterRender, null, [c[0], b !== l ? b : q])
                });
                a.a.Aa(b, r, function (b, c, d) {
                    d.length && (p = d[0].selected && [a.h.n(d[0])]);
                    c = s.createElement("option");
                    b === l ? (a.a.fa(c, n), a.h.W(c, q)) : (d = f(b, h.optionsValue, b), a.h.W(c, a.a.c(d)), b = f(b, h.optionsText, d), a.a.ib(c, b));
                    return[c]
                }, null, d);
                p = null;
                e && "value" in h && J(b, a.a.ya(h.value), !0);
                a.a.zb(b);
                m && 20 < Math.abs(m - b.scrollTop) && (b.scrollTop = m)
            }};
            a.d.options.wa = "__ko.optionValueDomData__";
            a.d.selectedOptions = {init: function (b, c, d) {
                a.a.o(b, "change", function () {
                    var f = c(), g = [];
                    a.a.p(b.getElementsByTagName("option"), function (b) {
                        b.selected && g.push(a.h.n(b))
                    });
                    a.g.ha(f, d, "selectedOptions", g)
                })
            }, update: function (b, c) {
                if ("select" != a.a.u(b)) {
                    throw Error("values binding applies only to SELECT elements")
                }
                var d = a.a.c(c());
                d && "number" == typeof d.length && a.a.p(b.getElementsByTagName("option"), function (b) {
                    var c = 0 <= a.a.k(d, a.h.n(b));
                    a.a.hb(b, c)
                })
            }};
            a.d.style = {update: function (b, c) {
                var d = a.a.c(c() || {});
                a.a.w(d, function (c, d) {
                    d = a.a.c(d);
                    b.style[c] = d || ""
                })
            }};
            a.d.submit = {init: function (b, c, d, f) {
                if ("function" != typeof c()) {
                    throw Error("The value for a submit binding must be a function")
                }
                a.a.o(b, "submit", function (a) {
                    var d, m = c();
                    try {
                        d = m.call(f, b)
                    } finally {
                        !0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                    }
                })
            }};
            a.d.text = {update: function (b, c) {
                a.a.ib(b, c())
            }};
            a.e.L.text = !0;
            a.d.uniqueName = {init: function (b, c) {
                if (c()) {
                    var d = "ko_unique_" + ++a.d.uniqueName.tb;
                    a.a.gb(b, d)
                }
            }};
            a.d.uniqueName.tb = 0;
            a.d.value = {init: function (b, c, d) {
                function f() {
                    m = !1;
                    var e = c(), f = a.h.n(b);
                    a.g.ha(e, d, "value", f)
                }

                var g = ["change"], e = d().valueUpdate, m = !1;
                e && ("string" == typeof e && (e = [e]), a.a.R(g, e), g = a.a.Ma(g));
                !a.a.ca || ("input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete) || -1 != a.a.k(g, "propertychange") || (a.a.o(b, "propertychange", function () {
                    m = !0
                }), a.a.o(b, "blur", function () {
                    m && f()
                }));
                a.a.p(g, function (c) {
                    var d = f;
                    a.a.Tb(c, "after") && (d = function () {
                        setTimeout(f, 0)
                    }, c = c.substring(5));
                    a.a.o(b, c, d)
                })
            }, update: function (b, c) {
                var d = "select" === a.a.u(b), f = a.a.c(c()), g = a.h.n(b);
                f !== g && (g = function () {
                    a.h.W(b, f)
                }, g(), d && setTimeout(g, 0));
                d && 0 < b.length && J(b, f, !1)
            }};
            a.d.visible = {update: function (b, c) {
                var d = a.a.c(c()), f = "none" != b.style.display;
                d && !f ? b.style.display = "" : !d && f && (b.style.display = "none")
            }};
            (function (b) {
                a.d[b] = {init: function (c, d, f, g) {
                    return a.d.event.init.call(this, c, function () {
                        var a = {};
                        a[b] = d();
                        return a
                    }, f, g)
                }}
            })("click");
            a.v = function () {
            };
            a.v.prototype.renderTemplateSource = function () {
                throw Error("Override renderTemplateSource")
            };
            a.v.prototype.createJavaScriptEvaluatorBlock = function () {
                throw Error("Override createJavaScriptEvaluatorBlock")
            };
            a.v.prototype.makeTemplateSource = function (b, c) {
                if ("string" == typeof b) {
                    c = c || s;
                    var d = c.getElementById(b);
                    if (!d) {
                        throw Error("Cannot find template with ID " + b)
                    }
                    return new a.l.i(d)
                }
                if (1 == b.nodeType || 8 == b.nodeType) {
                    return new a.l.Q(b)
                }
                throw Error("Unknown template type: " + b)
            };
            a.v.prototype.renderTemplate = function (a, c, d, f) {
                a = this.makeTemplateSource(a, f);
                return this.renderTemplateSource(a, c, d)
            };
            a.v.prototype.isTemplateRewritten = function (a, c) {
                return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, c).data("isRewritten")
            };
            a.v.prototype.rewriteTemplate = function (a, c, d) {
                a = this.makeTemplateSource(a, d);
                c = c(a.text());
                a.text(c);
                a.data("isRewritten", !0)
            };
            a.b("templateEngine", a.v);
            a.Ea = function () {
                function b(b, c, d, m) {
                    b = a.g.da(b);
                    for (var h = a.g.S, k = 0; k < b.length; k++) {
                        var l = b[k].key;
                        if (h.hasOwnProperty(l)) {
                            var n = h[l];
                            if ("function" === typeof n) {
                                if (l = n(b[k].value)) {
                                    throw Error(l)
                                }
                            } else {
                                if (!n) {
                                    throw Error("This template engine does not support the '" + l + "' binding within its templates")
                                }
                            }
                        }
                    }
                    d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.g.ea(b) + " } })()},'" + d.toLowerCase() + "')";
                    return m.createJavaScriptEvaluatorBlock(d) + c
                }

                var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return{Ab: function (b, c, d) {
                    c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) {
                        return a.Ea.Lb(b, c)
                    }, d)
                }, Lb: function (a, g) {
                    return a.replace(c, function (a, c, d, f, l) {
                        return b(l, c, d, g)
                    }).replace(d, function (a, c) {
                        return b(c, "\x3c!-- ko --\x3e", "#comment", g)
                    })
                }, qb: function (b, c) {
                    return a.s.va(function (d, m) {
                        var h = d.nextSibling;
                        h && h.nodeName.toLowerCase() === c && a.Ka(h, b, m)
                    })
                }}
            }();
            a.b("__tr_ambtns", a.Ea.qb);
            (function () {
                a.l = {};
                a.l.i = function (a) {
                    this.i = a
                };
                a.l.i.prototype.text = function () {
                    var b = a.a.u(this.i), b = "script" === b ? "text" : "textarea" === b ? "value" : "innerHTML";
                    if (0 == arguments.length) {
                        return this.i[b]
                    }
                    var c = arguments[0];
                    "innerHTML" === b ? a.a.fa(this.i, c) : this.i[b] = c
                };
                a.l.i.prototype.data = function (b) {
                    if (1 === arguments.length) {
                        return a.a.f.get(this.i, "templateSourceData_" + b)
                    }
                    a.a.f.set(this.i, "templateSourceData_" + b, arguments[1])
                };
                a.l.Q = function (a) {
                    this.i = a
                };
                a.l.Q.prototype = new a.l.i;
                a.l.Q.prototype.text = function () {
                    if (0 == arguments.length) {
                        var b = a.a.f.get(this.i, "__ko_anon_template__") || {};
                        b.Fa === q && b.ma && (b.Fa = b.ma.innerHTML);
                        return b.Fa
                    }
                    a.a.f.set(this.i, "__ko_anon_template__", {Fa: arguments[0]})
                };
                a.l.i.prototype.nodes = function () {
                    if (0 == arguments.length) {
                        return(a.a.f.get(this.i, "__ko_anon_template__") || {}).ma
                    }
                    a.a.f.set(this.i, "__ko_anon_template__", {ma: arguments[0]})
                };
                a.b("templateSources", a.l);
                a.b("templateSources.domElement", a.l.i);
                a.b("templateSources.anonymousTemplate", a.l.Q)
            })();
            (function () {
                function b(b, c, d) {
                    var f;
                    for (c = a.e.nextSibling(c); b && (f = b) !== c;) {
                        b = a.e.nextSibling(f), 1 !== f.nodeType && 8 !== f.nodeType || d(f)
                    }
                }

                function c(c, d) {
                    if (c.length) {
                        var f = c[0], g = c[c.length - 1];
                        b(f, g, function (b) {
                            a.Ia(d, b)
                        });
                        b(f, g, function (b) {
                            a.s.nb(b, [d])
                        })
                    }
                }

                function d(a) {
                    return a.nodeType ? a : 0 < a.length ? a[0] : null
                }

                function f(b, f, h, k, l) {
                    l = l || {};
                    var n = b && d(b), n = n && n.ownerDocument, p = l.templateEngine || g;
                    a.Ea.Ab(h, p, n);
                    h = p.renderTemplate(h, k, l, n);
                    if ("number" != typeof h.length || 0 < h.length && "number" != typeof h[0].nodeType) {
                        throw Error("Template engine must return an array of DOM nodes")
                    }
                    n = !1;
                    switch (f) {
                        case"replaceChildren":
                            a.e.P(b, h);
                            n = !0;
                            break;
                        case"replaceNode":
                            a.a.eb(b, h);
                            n = !0;
                            break;
                        case"ignoreTargetNode":
                            break;
                        default:
                            throw Error("Unknown renderMode: " + f)
                    }
                    n && (c(h, k), l.afterRender && a.q.I(l.afterRender, null, [h, k.$data]));
                    return h
                }

                var g;
                a.Ba = function (b) {
                    if (b != q && !(b instanceof a.v)) {
                        throw Error("templateEngine must inherit from ko.templateEngine")
                    }
                    g = b
                };
                a.za = function (b, c, h, k, l) {
                    h = h || {};
                    if ((h.templateEngine || g) == q) {
                        throw Error("Set a template engine before calling renderTemplate")
                    }
                    l = l || "replaceChildren";
                    if (k) {
                        var n = d(k);
                        return a.j(function () {
                            var g = c && c instanceof a.A ? c : new a.A(a.a.c(c)), r = "function" == typeof b ? b(g.$data, g) : b, g = f(k, l, r, g, h);
                            "replaceNode" == l && (k = g, n = d(k))
                        }, null, {Qa: function () {
                            return !n || !a.a.aa(n)
                        }, $: n && "replaceNode" == l ? n.parentNode : n})
                    }
                    return a.s.va(function (d) {
                        a.za(b, c, h, d, "replaceNode")
                    })
                };
                a.Rb = function (b, d, g, k, l) {
                    function n(a, b) {
                        c(b, r);
                        g.afterRender && g.afterRender(b, a)
                    }

                    function p(c, d) {
                        r = l.createChildContext(a.a.c(c), g.as);
                        r.$index = d;
                        var k = "function" == typeof b ? b(c, r) : b;
                        return f(null, "ignoreTargetNode", k, r, g)
                    }

                    var r;
                    return a.j(function () {
                        var b = a.a.c(d) || [];
                        "undefined" == typeof b.length && (b = [b]);
                        b = a.a.Y(b, function (b) {
                            return g.includeDestroyed || b === q || null === b || !a.a.c(b._destroy)
                        });
                        a.q.I(a.a.Aa, null, [k, b, p, g, n])
                    }, null, {$: k})
                };
                a.d.template = {init: function (b, c) {
                    var d = a.a.c(c());
                    "string" == typeof d || (d.name || 1 != b.nodeType && 8 != b.nodeType) || (d = 1 == b.nodeType ? b.childNodes : a.e.childNodes(b), d = a.a.Mb(d), (new a.l.Q(b)).nodes(d));
                    return{controlsDescendantBindings: !0}
                }, update: function (b, c, d, f, g) {
                    c = a.a.c(c());
                    d = {};
                    f = !0;
                    var n, p = null;
                    "string" != typeof c && (d = c, c = a.a.c(d.name), "if" in d && (f = a.a.c(d["if"])), f && "ifnot" in d && (f = !a.a.c(d.ifnot)), n = a.a.c(d.data));
                    "foreach" in d ? p = a.Rb(c || b, f && d.foreach || [], d, b, g) : f ? (g = "data" in d ? g.createChildContext(n, d.as) : g, p = a.za(c || b, g, d, b)) : a.e.ba(b);
                    g = p;
                    (n = a.a.f.get(b, "__ko__templateComputedDomDataKey__")) && "function" == typeof n.B && n.B();
                    a.a.f.set(b, "__ko__templateComputedDomDataKey__", g && g.ta() ? g : q)
                }};
                a.g.S.template = function (b) {
                    b = a.g.da(b);
                    return 1 == b.length && b[0].unknown || a.g.Jb(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                };
                a.e.L.template = !0
            })();
            a.b("setTemplateEngine", a.Ba);
            a.b("renderTemplate", a.za);
            a.a.Pa = function () {
                function a(b, d, f, g, e) {
                    var m = Math.min, h = Math.max, k = [], l, n = b.length, p, r = d.length, q = r - n || 1, t = n + r + 1, s, v, w;
                    for (l = 0; l <= n; l++) {
                        for (v = s, k.push(s = []), w = m(r, l + q), p = h(0, l - 1); p <= w; p++) {
                            s[p] = p ? l ? b[l - 1] === d[p - 1] ? v[p - 1] : m(v[p] || t, s[p - 1] || t) + 1 : p + 1 : l + 1
                        }
                    }
                    m = [];
                    h = [];
                    q = [];
                    l = n;
                    for (p = r; l || p;) {
                        r = k[l][p] - 1, p && r === k[l][p - 1] ? h.push(m[m.length] = {status: f, value: d[--p], index: p}) : l && r === k[l - 1][p] ? q.push(m[m.length] = {status: g, value: b[--l], index: l}) : (m.push({status: "retained", value: d[--p]}), --l)
                    }
                    if (h.length && q.length) {
                        b = 10 * n;
                        var E;
                        for (d = f = 0; (e || d < b) && (E = h[f]); f++) {
                            for (g = 0; k = q[g]; g++) {
                                if (E.value === k.value) {
                                    E.moved = k.index;
                                    k.moved = E.index;
                                    q.splice(g, 1);
                                    d = g = 0;
                                    break
                                }
                            }
                            d += g
                        }
                    }
                    return m.reverse()
                }

                return function (c, d, f) {
                    c = c || [];
                    d = d || [];
                    return c.length <= d.length ? a(c, d, "added", "deleted", f) : a(d, c, "deleted", "added", f)
                }
            }();
            a.b("utils.compareArrays", a.a.Pa);
            (function () {
                function b(b) {
                    for (; b.length && !a.a.aa(b[0]);) {
                        b.splice(0, 1)
                    }
                    if (1 < b.length) {
                        for (var c = b[0], g = b[b.length - 1], e = [c]; c !== g;) {
                            c = c.nextSibling;
                            if (!c) {
                                return
                            }
                            e.push(c)
                        }
                        Array.prototype.splice.apply(b, [0, b.length].concat(e))
                    }
                    return b
                }

                function c(c, f, g, e, m) {
                    var h = [];
                    c = a.j(function () {
                        var c = f(g, m, b(h)) || [];
                        0 < h.length && (a.a.eb(h, c), e && a.q.I(e, null, [g, c, m]));
                        h.splice(0, h.length);
                        a.a.R(h, c)
                    }, null, {$: c, Qa: function () {
                        return !a.a.pb(h)
                    }});
                    return{O: h, j: c.ta() ? c : q}
                }

                a.a.Aa = function (d, f, g, e, m) {
                    function h(a, c) {
                        u = n[c];
                        x !== c && (E[a] = u);
                        u.ra(x++);
                        b(u.O);
                        t.push(u);
                        w.push(u)
                    }

                    function k(b, c) {
                        if (b) {
                            for (var d = 0, e = c.length; d < e; d++) {
                                c[d] && a.a.p(c[d].O, function (a) {
                                    b(a, d, c[d].X)
                                })
                            }
                        }
                    }

                    f = f || [];
                    e = e || {};
                    var l = a.a.f.get(d, "setDomNodeChildrenFromArrayMapping_lastMappingResult") === q, n = a.a.f.get(d, "setDomNodeChildrenFromArrayMapping_lastMappingResult") || [], p = a.a.Z(n, function (a) {
                        return a.X
                    }), r = a.a.Pa(p, f, e.dontLimitMoves), t = [], s = 0, x = 0, v = [], w = [];
                    f = [];
                    for (var E = [], p = [], u, B = 0, y, A; y = r[B]; B++) {
                        switch (A = y.moved, y.status) {
                            case"deleted":
                                A === q && (u = n[s], u.j && u.j.B(), v.push.apply(v, b(u.O)), e.beforeRemove && (f[B] = u, w.push(u)));
                                s++;
                                break;
                            case"retained":
                                h(B, s++);
                                break;
                            case"added":
                                A !== q ? h(B, A) : (u = {X: y.value, ra: a.m(x++)}, t.push(u), w.push(u), l || (p[B] = u))
                        }
                    }
                    k(e.beforeMove, E);
                    a.a.p(v, e.beforeRemove ? a.H : a.removeNode);
                    for (var B = 0, l = a.e.firstChild(d), C; u = w[B]; B++) {
                        u.O || a.a.extend(u, c(d, g, u.X, m, u.ra));
                        for (s = 0; r = u.O[s]; l = r.nextSibling, C = r, s++) {
                            r !== l && a.e.Va(d, r, C)
                        }
                        !u.Fb && m && (m(u.X, u.O, u.ra), u.Fb = !0)
                    }
                    k(e.beforeRemove, f);
                    k(e.afterMove, E);
                    k(e.afterAdd, p);
                    a.a.f.set(d, "setDomNodeChildrenFromArrayMapping_lastMappingResult", t)
                }
            })();
            a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Aa);
            a.D = function () {
                this.allowTemplateRewriting = !1
            };
            a.D.prototype = new a.v;
            a.D.prototype.renderTemplateSource = function (b) {
                var c = (9 > a.a.ca ? 0 : b.nodes) ? b.nodes() : null;
                if (c) {
                    return a.a.N(c.cloneNode(!0).childNodes)
                }
                b = b.text();
                return a.a.xa(b)
            };
            a.D.sa = new a.D;
            a.Ba(a.D.sa);
            a.b("nativeTemplateEngine", a.D);
            (function () {
                a.ua = function () {
                    var a = this.Ib = function () {
                        if ("undefined" == typeof t || !t.tmpl) {
                            return 0
                        }
                        try {
                            if (0 <= t.tmpl.tag.tmpl.open.toString().indexOf("__")) {
                                return 2
                            }
                        } catch (a) {
                        }
                        return 1
                    }();
                    this.renderTemplateSource = function (b, f, g) {
                        g = g || {};
                        if (2 > a) {
                            throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.")
                        }
                        var e = b.data("precompiled");
                        e || (e = b.text() || "", e = t.template(null, "{{ko_with $item.koBindingContext}}" + e + "{{/ko_with}}"), b.data("precompiled", e));
                        b = [f.$data];
                        f = t.extend({koBindingContext: f}, g.templateOptions);
                        f = t.tmpl(e, b, f);
                        f.appendTo(s.createElement("div"));
                        t.fragments = {};
                        return f
                    };
                    this.createJavaScriptEvaluatorBlock = function (a) {
                        return"{{ko_code ((function() { return " + a + " })()) }}"
                    };
                    this.addTemplate = function (a, b) {
                        s.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>")
                    };
                    0 < a && (t.tmpl.tag.ko_code = {open: "__.push($1 || '');"}, t.tmpl.tag.ko_with = {open: "with($1) {", close: "} "})
                };
                a.ua.prototype = new a.v;
                var b = new a.ua;
                0 < b.Ib && a.Ba(b);
                a.b("jqueryTmplTemplateEngine", a.ua)
            })()
        })
    })()
})();
(function (a) {
    var o = a(".alterable-tabs-title").first();
    var c = a(".alterable-tabs-content").first();
    var n = 1, e = 1;
    var i = function () {
        a(".alterable-tabs-content").hide();
        a(".alterable-tabs-content").eq(e - 1).show()
    };
    var f = function () {
        a(".alterable-tabs-title.inntwo-backgroud-color-info.inntwo-text-ordinary").removeClass("inntwo-backgroud-color-info inntwo-text-ordinary").addClass("inntwo-background-tabs1 inntwo-text-default");
        a(".alterable-tabs-title").eq(e - 1).removeClass("inntwo-background-tabs1 inntwo-text-default").addClass("inntwo-backgroud-color-info inntwo-text-ordinary")
    };
    var b = function () {
        if (e > 1) {
            a(".alterable-tab-left").show()
        } else {
            a(".alterable-tab-left").hide()
        }
        if (e < n) {
            a(".alterable-tab-right").show()
        } else {
            a(".alterable-tab-right").hide()
        }
    };
    var j = function () {
        var q = a(".alterable-tabs-title");
        var p = e - 1;
        q.hide();
        q.eq(p).show();
        if (p - 1 > -1) {
            q.eq(p - 1).show()
        }
        if (e == n) {
            if (p - 2 > -1) {
                q.eq(p - 2).show()
            }
        } else {
            q.eq(p + 1).show();
            if (p == 0) {
                q.eq(p + 2).show()
            }
        }
    };
    var h = function () {
        if (e == 1) {
            a(".alterable-tab-delete").hide()
        } else {
            a(".alterable-tab-delete").show()
        }
    };
    var g = function () {
        f();
        i();
        b();
        j();
        h()
    };
    var d, k, m, l;
    a.fn.inntwoAlterableTabs = function (r) {
        if (typeof r.indexChange !== "undefined") {
            d = r.indexChange
        }
        if (typeof r.tabAdded !== "undefined") {
            k = r.tabAdded
        }
        if (typeof r.tabMinusBefore !== "undefined") {
            m = r.tabMinusBefore
        }
        if (typeof r.tabMinus !== "undefined") {
            l = r.tabMinus
        }
        if (typeof r === "number") {
            e = r;
            g();
            return this
        }
        if (r.tabTotal) {
            n = r.tabTotal;
            for (var p = 2; p < n + 1; p++) {
                var q = o.clone();
                o.parent().append(q);
                a(".alterable-tabs-title").last().val("D" + p).attr({title: "第" + p + "天"})
            }
            g()
        }
        a(".alterable-tabs-titles").unbind("click").delegate(".alterable-tabs-title", "click", function () {
            var s = a(".alterable-tabs-title").index(this);
            e = s + 1;
            g();
            if (typeof d !== "undefined") {
                d(e)
            }
        });
        a(".alterable-tabs-plus").unbind("click").click(function () {
            n++;
            var t = o.clone();
            a(".alterable-tabs-title").eq(e - 1).after(t);
            a(".alterable-tabs-title").eq(e).val("D" + (e + 1)).attr({title: "第" + (e + 1) + "天"});
            var u = a(".alterable-tabs-title").eq(e).nextAll();
            u.each(function (w) {
                var v = (e + 1) + (w + 1);
                a(this).val("D" + v).attr({title: "第" + v + "天"})
            });
            var s = c.clone();
            a(".alterable-tabs-content").eq(e - 1).after(s);
            e++;
            g();
            if (typeof k !== "undefined") {
                k(e, n)
            }
            if (typeof d !== "undefined") {
                d(e)
            }
        });
        a(".alterable-tab-left").unbind("click").click(function () {
            e--;
            g();
            if (typeof d !== "undefined") {
                d(e)
            }
        });
        a(".alterable-tab-right").unbind("click").click(function () {
            e++;
            g();
            if (typeof d !== "undefined") {
                d(e)
            }
        });
        a(".alterable-tab-delete").unbind("click").click(function () {
            InnTwoTools.Confirm({message: "确定删除当天?", trueMethod: function () {
                if (typeof m !== "undefined") {
                    m(e, n)
                }
                a(".alterable-tabs-title").last().remove();
                a(".alterable-tabs-content").eq(e - 1).remove();
                e--;
                if (e < 1) {
                    e = 1
                }
                n--;
                if (n < 1) {
                    n = 1
                }
                g();
                if (typeof l !== "undefined") {
                    l(e, n)
                }
                if (typeof d !== "undefined") {
                    d(e)
                }
            }, falseMethod: false, isOrIsnt: true, neverNotify: false})
        });
        h();
        return this
    }
}(jQuery));
var InntwoCustomize = {};
var viewModel;
var recommendPlaceMap;
var firstMapLoaded = true;
var jsonData, provinceData, searPoicity;
var addressAutoComplete;
var recommendFileUploadClick = function () {
    if ($(".recomm-place-out").length > 5) {
        InnTwoTools.Alert("最多只能上传5张图片");
        return
    }
    $("#recommendFileUpload").click()
};
window.isFirstLoadedMap = true;
InntwoCustomize.show = function () {
    InntwoCustomize.InfoValidate();
    InntwoCustomize.dataAjaxForm();
    if (firstMapLoaded) {
        setTimeout(function () {
            recommendPlaceMap = InnTwoMapCore.createMap("map_canvas", {zoom: 10});
            InnTwoMapCore.mapLoaded(recommendPlaceMap, function () {
                if (window.isFirstLoadedMap) {
                    var a = $.trim($("#destinationName").val());
                    if (a) {
                        InntwoCustomize.searchCoordinate(a)
                    }
                    window.isFirstLoadedMap = false
                }
            })
        }, 800);
        firstMapLoaded = false;
        addressAutoComplete = new window.BMap.Autocomplete({input: "destinationAddr", location: inntwoMap, onSearchComplete: function () {
            $(".tangram-suggestion").css({"border-color": "#BAD532", "background-color": "#f5f5f5", "z-index": "20"}).width(300)
        }})
    }
    $("#recommendUploadButton").unbind("click").click(function () {
        recommendFileUploadClick()
    });
    viewModel = {destCategory1: ko.observableArray([
        {CategoryName: "请选择...", CategoryId: "0"}
    ]), destCateChildValue: ko.observable(), destCategory2: ko.observableArray([
        {CategoryName: "请选择...", CategoryId: "0"}
    ]), provinceItems: ko.observableArray([
        {Key: "", Value: "请选择..."}
    ]), cityItems: ko.observableArray([
        {Key: "", Value: "请选择..."}
    ]), destCategory1Value: ko.observable(), provinceItemValue: ko.observable(), recommendUploadNotify: ko.observable("上传图片"), recommendUploadFileChange: function () {
        $("#commendInntwoForm").ajaxSubmit({beforeSubmit: function () {
            var a = InnTwoTools.checkUploadImageFile({fileMaxSize: 2097152, uploadControlId: "recommendFileUpload", fileTypeError: function () {
                InnTwoTools.Alert("推荐地点图片只支持jpg,png,gif,bmp")
            }, overMaxRestrict: function () {
                InnTwoTools.Alert("推荐地点图片文件大小不能超过2M")
            }});
            if (a) {
                $("#recommendUploadButton").unbind("click").children(".recomm-placePlus-inner").css({cursor: "default"});
                viewModel.recommendUploadNotify("上传中...")
            }
            return a
        }, success: function (a) {
            $("#recommendUploadButton").unbind("click").click(function () {
                recommendFileUploadClick()
            }).children(".recomm-placePlus-inner").css({cursor: "pointer"});
            viewModel.recommendUploadNotify("上传图片");
            InnTwoTools.JsonDataCallback({data: a, success: function () {
                if (a.Extension) {
                    var c = $("#recommenPictures").html();
                    var d = "<div class='recomm-place-out' ><img src='" + a.Extension + "' /><div class='recommendPicture-closeBtn create-itinerary-image'></div></div>";
                    if (typeof c != "undefined" && c) {
                        d = c + d
                    }
                    $("#recommenPictures").html(d);
                    $(".recomm-place-out").unbind("mouseenter").mouseenter(function () {
                        $(this).children(".recommendPicture-closeBtn").show()
                    }).unbind("mouseleave").mouseleave(function () {
                        $(this).children(".recommendPicture-closeBtn").hide()
                    });
                    $(".recommendPicture-closeBtn").unbind("click").click(function () {
                        var g = $(this).parent().children("img").attr("src");
                        var e = g.split("/");
                        e = e[e.length - 1];
                        inntwoBase.deletePicture(e);
                        var f = $("input[name=ImageUrls]").val();
                        f = f.replace(g, "");
                        f = InntwoCustomize.cleanImage(f);
                        $("input[name=ImageUrls]").val(f);
                        $(this).parent().remove()
                    });
                    var b = $("input[name=ImageUrls]").val();
                    if (b) {
                        b = InntwoCustomize.cleanImage(b);
                        b += "," + $(".recomm-place-out img").last().attr("src")
                    } else {
                        b = $(".recomm-place-out img").last().attr("src")
                    }
                    $("input[name=ImageUrls]").val(b)
                }
            }, bussinessException: function () {
                InnTwoTools.Alert(a.Message)
            }, unAuthorize: function () {
                popupUserLogin()
            }})
        }})
    }, recommPlaceCoor: ko.observable(), enableDetails: function () {
        var a = viewModel.destCategory1Value();
        if (a == 0 || jsonData == null) {
            return
        }
        var b = Enumerable.From(jsonData).First(function (c) {
            return c.CategoryId == a
        });
        viewModel.destCategory2(b.child)
    }, enableCityOfProvince: function () {
        var a = viewModel.provinceItemValue();
        if (!a || !provinceData) {
            return
        }
        InntwoCustomize.GetCityOfProvince(a, function (b) {
            viewModel.cityItems(b);
            if (searPoicity) {
                var c = Enumerable.From(b).Where(function (d) {
                    return d.Value == searPoicity
                });
                if (c.Any()) {
                    viewModel.cityItemValue(c.First().Key)
                }
            }
        })
    }, recommendNewImgUrls: ko.observable(), recommendDelImgUrl: ko.observable(), cityItemValue: ko.observable(), recommenPictureDetails: ko.observable(), searchCoordinateWord: ko.observable("检索坐标"), searCoordisabled: ko.observable(false), searCoorMsg: ko.observable(), recomSubmitText: ko.observable("完成"), searchCoordinateClick: function () {
        var a = $("#destinationAddr").val();
        if (!a || !(a.trim())) {
            viewModel.searCoorMsg("地址不能为空")
        } else {
            InntwoCustomize.searchCoordinate(a.trim())
        }
    }};
    ko.applyBindings(viewModel, document.getElementById("viewModelCommendContainer"));
    InntwoCustomize.GetCategory(function (a) {
        jsonData = a;
        viewModel.destCategory1.removeAll();
        viewModel.destCategory1(a)
    });
    InntwoCustomize.GetAllProvince(function (a) {
        provinceData = a;
        viewModel.provinceItems.removeAll();
        viewModel.provinceItems(a);
        $(".recommend-picture-cover").hide()
    });
    $("#destinationEditor").wysiwyg();
    $("#destinationEditor").blur(function () {
        var a = $.trim($(this).html());
        if (a) {
            $(".discribe-input-message").text("");
            $("input[name=Descriptions]").val(a)
        } else {
            $(".discribe-input-message").text("简介必填")
        }
    })
};
InntwoCustomize.cleanImage = function (a) {
    if (a[0] == ",") {
        a = a.substring(1)
    }
    if (a[a.length - 1] == ",") {
        a = a.substring(0, a.length - 1)
    }
    a = a.replace(",,", ",");
    return a
};
InntwoCustomize.GetCategory = function (a) {
    $.ajax({url: ajaxUrl.GetAllPlaceCategories_Url, success: function (b) {
        a(b)
    }})
};
InntwoCustomize.GetAllProvince = function (a) {
    $.ajax({url: ajaxUrl.GetAllProvince_Url, type: "post", success: function (b) {
        a(b)
    }})
};
InntwoCustomize.GetCityOfProvince = function (a, b) {
    $.ajax({url: ajaxUrl.GetProvincesOfCity_Url, data: {provinceId: a}, type: "post", success: function (c) {
        b(c)
    }})
};
InntwoCustomize.InfoValidate = function () {
    $("#destinationInfo").validate({rules: {PlaceName: {required: true}, PlaceAddr: {required: true}, Descriptions: {required: true}}, messages: {PlaceName: {required: "名称必填!"}, PlaceAddr: {required: "地址必填!"}, Descriptions: {required: "简介必填"}}, errorClass: "inntwo-text-error"})
};
InntwoCustomize.dataAjaxForm = function () {
    $("#destinationInfo").ajaxForm({beforeSend: function () {
        var a = $("input[name=Coordinate]").val();
        if (!a) {
            $(".searchCoordinate-alarmMsg").text("未检索到坐标");
            viewModel.recommPlaceCoor("");
            return false
        }
        var b = $.trim($("#destinationEditor").html());
        if (!b) {
            $(".discribe-input-message").text("简介必填");
            return false
        }
        $("#recommSubmitButton").attr({disabled: "disabled"});
        viewModel.recomSubmitText("提交数据...");
        return true
    }, success: function (a) {
        $("#recommSubmitButton").attr({disabled: false});
        viewModel.recomSubmitText("完成");
        InnTwoTools.JsonDataCallback({data: a, success: function () {
            $(":input", "#destinationInfo").not(":button, :submit, :reset, :hidden").val("").removeAttr("checked").removeAttr("selected");
            $("#destinationEditor").text("");
            $("#recommenPictures").html("");
            $("input[name=ImageUrls]").val("");
            $("#customizeDes").modal("hide");
            InnTwoTools.Alert("推荐成功!");
            recommendPlaceMap.clearOverlays()
        }, optionAction: function () {
            InnTwoTools.Alert(a.Message)
        }})
    }})
};
InntwoCustomize.recommendInitical = function () {
    $("input[name=Author]").val($("#userName").val());
    var c = $("#centerCustomeAreaName").val();
    $("#destinationName").val(c);
    var a = $("#centerCustomeAreaAddress").val();
    addressAutoComplete.setInputValue(a);
    var d = document.getElementById("customPlaceSelectChange").value;
    document.getElementById("customBigCategory").value = d;
    var b = $("#customBigCategory");
    b.change(InntwoCustomize.recommendCateChange);
    b.change()
};
InntwoCustomize.recommendCateChange = function () {
    var a = document.getElementById("customBigCategory").value;
    var d = $("#recommendFeeTitle");
    var c = $("#recommendDuration");
    var b = $("#recommendChildCategory");
    InnTwoTools.PlaceParentCategory({category: a, attraction: function () {
        d.text("门票");
        c.show();
        b.show()
    }, hotel: function () {
        d.text("价格");
        c.hide();
        b.hide()
    }, delicacy: function () {
        d.text("人均");
        c.hide();
        b.hide()
    }, other: function () {
        d.text("费用");
        c.hide();
        b.hide()
    }, })
};
InntwoCustomize.searchCoordinate = function (a) {
    if (a) {
        viewModel.searchCoordinateWord("检索中...");
        viewModel.searCoordisabled(true);
        inntwoMapSearch.addressSearch(a, recommendPlaceMap, function (d) {
            viewModel.searchCoordinateWord("检索坐标");
            viewModel.searCoordisabled(false);
            var c = "";
            if (typeof d.province != "undefined") {
                c = d.province
            }
            if (typeof d.city != "undefined") {
                searPoicity = d.city
            }
            var f = d.getPoi(0);
            if (typeof f !== "undefined" && f) {
                var e = f.point;
                if (!c) {
                    c = f.province
                }
                c = c.substring(0, c.length - 1);
                searPoicity = searPoicity.substring(0, searPoicity.length - 1);
                var g = Enumerable.From(provinceData).First(function (h) {
                    return h.Value == c
                }).Key;
                viewModel.provinceItemValue(g);
                viewModel.enableCityOfProvince();
                recommendPlaceMap.panTo(e, false);
                recommendPlaceMap.setZoom(10);
                viewModel.searCoorMsg("");
                viewModel.recommPlaceCoor(InnTwoTools.format("{0},{1}", e.lat, e.lng));
                var b = {};
                b.point = e;
                b.contianerClassName = "ordinary_marker_class ordinary_marker_channel";
                b.map = recommendPlaceMap;
                recommendPlaceMap.clearOverlays();
                InnTwoMapCore.addMarkerInMapByOverLay(b)
            } else {
                viewModel.searCoorMsg("未检索到该地址对应的坐标");
                viewModel.recommPlaceCoor("")
            }
        })
    }
};
var inntwoEnum = {};
inntwoEnum.attractionOrigin = {routeSearch: 0, nearby: 1};
inntwoEnum.enumConvert = function (a, c) {
    for (var b in inntwoEnum[a]) {
        if (inntwoEnum[a][b] == c) {
            return b
        }
    }
    return""
};
var windWidth = $(window).width();
var windHeight = $(window).height();
var isCreateItinerary = true;
var inntwoMap;
var showHotelOrPlace = "hotel";
var scheduleId;
var bdAutocompletTripperStar, bdAutocompletTripperEnd, customPlaceNameInput;
var scheduleJsonHash, travelJsonHash;
var deleteImagesUrls = "";
var isCancelEdit;
window.globalItinerary = {};
var drawLined = false;
var isCopyItinerary = false;
window.routes = [];
var localItineraryKey = "itineraryLocalKey";
var itinerayrNameDefault = "";
var placeSortShow = false;
var cancelEditor = false;
var mapFirstLoaded = false;
var showed = true;
var pictureWordUploadPicCount = 0;
var pictureWordUploadPicindex = 0;
var oldItineraryName = "";
var scheduleIgnoreDateTime = true;
var scheduleIgnoreWarning = "出发日期";
var createItinerary = {};
var destionationViewModel = {};
destionationViewModel.destionSuggestiones = ko.observableArray();
destionationViewModel.previewSearchKeyWard = "";
destionationViewModel.destionationSuggestionClick = function (b) {
    $("#DestinationSearchInput").val(b.Name);
    var g = "";
    var h = templateUrl.mainTemplate.placeOverlaySelector;
    var a = "";
    var d = false;
    inntwoBase.searchSuggestionCategory({category: b.PlaceSuggestionCategory, attraction: function () {
        a = b.ChildCategory;
        h = templateUrl.mainTemplate.placeOverlaySelector;
        inntwoBase.placeCategryByCategoryId({categoryId: a, civilize: function () {
            g = "home_place_marker schedule-update-place-civilize"
        }, nature: function () {
            g = "home_place_marker schedule-update-place-nature"
        }, entertain: function () {
            g = "home_place_marker schedule-update-place-entertain"
        }, aspect: function () {
            g = "home_place_marker schedule-update-place-aspect"
        }})
    }, hotel: function () {
        a = "hotel";
        g = "home_place_marker schedule-update-place-hotel";
        h = templateUrl.mainTemplate.hotelOverlaySelector
    }, dalicacy: function () {
        a = "delicacy";
        g = "home_place_marker schedule-update-place-food";
        d = true
    }, mapaddress: function () {
    }});
    if (b.Location != null && b.Location != "") {
        var i = {};
        var f = b.Location.split(",")[0];
        var e = b.Location.split(",")[1];
        i.point = InnTwoMapCore.createPoint(f, e);
        i.pointStr = b.Location;
        i.CategoryId = a;
        i.placeName = b.Name;
        i.imgUrl = b.Ico;
        i.placeInfoId = b.SeqId;
        i.price = b.Price;
        i.province = b.Province;
        i.city = b.City;
        i.district = b.District;
        if (i.defaultImgUrl == "") {
            i.defaultImgUrl = InnTwoTools.base64EncodeChars(i.imgUrl)
        }
        i.contianerClassName = g;
        if (d) {
            i.grade = 0;
            i.imgUrl = itineraryDelicious.delicacyIcoSwotch(i.imgUrl);
            var c = $("#deliciousMarkerMessageBox").html();
            i.innerHtml = Mustache.render(c, i)
        } else {
            i.innerHtml = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: h, json: i})
        }
        i.jsonData = JSON.stringify(i);
        i.map = inntwoMap;
        InnTwoMapCore.addMarkerInMapByOverLay(i);
        inntwoMapSearch.setMarkerClick();
        inntwoMap.setCenter(i.point);
        placeFavoriteListener()
    }
    $("#destinationSearchSuggestion").hide()
};
function destinationSearchSet() {
    ko.bindingHandlers.destinationSearchIco = {update: function (c, e) {
        var b = e();
        var a, d;
        inntwoBase.searchSuggestionCategory({category: b, attraction: function () {
            a = "#ff6600";
            d = "景点"
        }, hotel: function () {
            a = "#B299D8";
            d = "酒店"
        }, dalicacy: function () {
            a = "#FF3333";
            d = "美食"
        }, mapaddress: function () {
            $(c).hide();
            d = ""
        }});
        $(c).css("background-color", a).text(d)
    }};
    ko.applyBindings(destionationViewModel, document.getElementById("destinationSearchSuggestion"));
    $("#DestinationSearchInput").attr({placeholder: inntwoBase.AlarmMessage.DESTINATION_ALARM});
    $("#DestinationSearchInput").keyup(function (a) {
        var b = $(this).val();
        if (a.keyCode == 13) {
            $("#destinationSearchSuggestion").hide();
            $(".destination_search_button").click()
        } else {
            if (b != "" && b.trim() != "") {
                if (b.trim() != destionationViewModel.previewSearchKeyWard) {
                    $("#destinationSearchSuggestion,#suggestionLoadingWrapper").show();
                    destionationViewModel.destionSuggestiones([]);
                    $.ajax({url: ajaxUrl.destinationSearchSuggestion_Url, type: "post", data: {keywards: b.trim()}, success: function (c) {
                        $("#suggestionLoadingWrapper").hide();
                        InnTwoTools.JsonDataCallback({data: c, success: function () {
                            destionationViewModel.destionSuggestiones(c)
                        }, notFound: function () {
                            $("#destinationSearchSuggestion").hide()
                        }})
                    }});
                    destionationViewModel.previewSearchKeyWard = b.trim()
                }
            } else {
                $("#destinationSearchSuggestion").hide()
            }
        }
    }).blur(function () {
        setTimeout(function () {
            $("#destinationSearchSuggestion").hide()
        }, 200)
    })
}
function loadMap() {
    var b = $("#container_right");

    function a() {
        var g = $(".create-itinerary-search-outer");
        var h = b.width();
        var c = Math.floor((h - 450) / 2);
        g.css("left", c).show();
        var e = windWidth - 274;
        var f = windHeight - 49;
        var d = windHeight - 88;
        $("#mapContainer").width(e).height(d).css({"backgroud-color": "#FFFFFF", overflow: "hidden"});
        b.height(f)
    }

    a();
    $(window).resize(function () {
        windWidth = $(window).width();
        windHeight = $(window).height();
        a()
    });
    return InnTwoMapCore.createMap("mapContainer", {enableMapTypeControl: true, overView: true, markerClick: true})
}
function inntwoMapLocalCity() {
    var a = new window.BMap.LocalCity();
    a.get(function (b) {
        createItinerary.mapCenter = b;
        inntwoMapSearch.getAddressByPoint(b.center, function (d) {
            nearbySearch.setSearchData({coordinate: b.center.lat + "," + b.center.lng, placeName: d.city});
            setTimeout(function () {
                itineraryHotPlace.orignAutoComplete.setInputValue(d.city)
            }, 500);
            $("#hotPlacesSearchOrign").attr({location: b.center.lng + "," + b.center.lat});
            scheduleId = InnTwoTools.getQueryStringByName("scheduleid");
            var e = $("#isReturnMapView").val();
            if (scheduleId || cancelEditor || e) {
                if (cancelEditor != "True") {
                    placeSortShow = true
                }
                return
            }
            $("#SaveSketch").removeAttr("disabled");
            if (d.province == d.city) {
                d.city = ""
            }
            var c = InnTwoTools.format("{0}{1}{2}{3}{4}", d.province, d.city, d.district, d.street, d.streetNumber);
            destinationAddOverlayInMap({pointPar: b.center, district: d.district, city: d.city, map: inntwoMap, province: d.province, tempSearchContent: d.street ? d.street : d.city, address: c});
            setTimeout(function () {
                inntwoMapSearch.addCloseMarkerBtn()
            }, 100);
            inntwoMap.setCenter(b.center);
            inntwoMapSearch.mapClickHideOverlay(inntwoMap)
        });
        return
    })
}
function initScheduleTabs() {
    scheduleId = InnTwoTools.getQueryStringByName("scheduleid");
    $("#tripScheduleContainer").inntwoAlterableTabs({tabAdded: scheduleAddDay, indexChange: function (a) {
        window.nowSchduleIndex = a - 1;
        showNowTripSchedule();
        situationSet()
    }, tabMinusBefore: function (a) {
        window.nowSchduleIndex = a - 1;
        removeSchedule(window.nowSchduleIndex)
    }, tabMinus: function (a, b) {
        window.nowSchduleIndex = a - 1;
        if (scheduleDateArray.length > 1) {
            scheduleDateArray = scheduleDateArray.removeItem(scheduleDateArray.length - 1)
        }
        showNowTripSchedule();
        situationSet();
        $("#createItineraryDayCount").text(b);
        mapPlaceAdd.setScheduleNumberDdl();
        drawLinesByfacePoints();
        mapPlaceAdd.resetorignAndDestination();
        SaveEditorItinerary()
    }})
}
var contextMenu;
function mouseRightMenu() {
    inntwoMapSearch.rightMouseMenu(inntwoMap, [
        {text: "<div class='inntwo-map-right-menu-title'><div class='inntwo-map-right-menu-ico create-itinerary-image'></div><span id='inntwoMapRightMenuTitle'></span></div>", callback: function () {
        }}
    ], function (b) {
        $(".inntwo-map-right-menu-title").parent().parent().css({"background-color": "#0081C2"});
        var c = [
            {},
            {text: "<div class='inntwo-map-right-menu-item'>周边酒店</div>", callback: function (d) {
                inntwoMapSearch.getAddressByPoint(d, function (f) {
                    if (f.province == f.city) {
                        f.city = ""
                    }
                    var e = InnTwoTools.format("{0}{1}{2}{3}{4}", f.province, f.city, f.district, f.street, f.streetNumber);
                    destinationAddOverlayInMap({pointPar: d, district: f.district, city: f.city, map: inntwoMap, province: f.province, tempSearchContent: f.street ? f.street : f.city, address: e});
                    $("#ConditionPageIndex,#MorePlacePageIndex").val(1);
                    setTimeout(function () {
                        inntwoMapSearch.addCloseMarkerBtn()
                    }, 100);
                    $(".nearby-overlay-command.inntwo-backgroud-color-success").last().click()
                });
                nearbySearch.nearbySearchCategory = nearbySearch.nearbySearchCategories.Hotel
            }},
            {text: "<div class='inntwo-map-right-menu-item'>周边景点</div>", callback: function (d) {
                inntwoMapSearch.getAddressByPoint(d, function (g) {
                    if (g.province == g.city) {
                        g.city = ""
                    }
                    var e = InnTwoTools.format("{0}{1}{2}{3}{4}", g.province, g.city, g.district, g.street, g.streetNumber);
                    destinationAddOverlayInMap({pointPar: d, district: g.district, city: g.city, map: inntwoMap, province: g.province, tempSearchContent: g.street ? g.street : g.city, address: e});
                    $("#ConditionPageIndex,#MorePlacePageIndex").val(1);
                    setTimeout(function () {
                        inntwoMapSearch.addCloseMarkerBtn()
                    }, 100);
                    $("#ProvinceName").val("");
                    $("#IsFullProvince").val("");
                    var f = $(".nearby-overlay-command.inntwo-backgroud-color-waring").last();
                    nearbyAttractionSearch(e, d.lng, d.lat, f)
                });
                nearbySearch.nearbySearchCategory = nearbySearch.nearbySearchCategories.Attraction
            }},
            {text: "<div class='inntwo-map-right-menu-item'>周边美食</div>", callback: function (d) {
                inntwoMapSearch.getAddressByPoint(d, function (f) {
                    if (f.province == f.city) {
                        f.city = ""
                    }
                    var e = InnTwoTools.format("{0}{1}{2}{3}{4}", f.province, f.city, f.district, f.street, f.streetNumber);
                    destinationAddOverlayInMap({pointPar: d, district: f.district, city: f.city, map: inntwoMap, province: f.province, tempSearchContent: f.street ? f.street : f.city, address: e});
                    setTimeout(function () {
                        inntwoMapSearch.addCloseMarkerBtn()
                    }, 100);
                    $(".nearby-overlay-command.inntwo-backgroud-color-info").last().click()
                });
                nearbySearch.nearbySearchCategory = nearbySearch.nearbySearchCategories.Delicacy
            }},
            {text: "<div class='inntwo-map-right-menu-item'>全省景点</div>", callback: function (d) {
                inntwoMapSearch.getAddressByPoint(d, function (g) {
                    if (g.province == g.city) {
                        g.city = ""
                    }
                    var e = InnTwoTools.format("{0}{1}{2}{3}{4}", g.province, g.city, g.district, g.street, g.streetNumber);
                    destinationAddOverlayInMap({pointPar: d, district: g.district, city: g.city, map: inntwoMap, province: g.province, tempSearchContent: g.street ? g.street : g.city, address: e});
                    inntwoMap.centerAndZoom(d, 7);
                    $("#ConditionPageIndex,#MorePlacePageIndex").val(1);
                    setTimeout(function () {
                        inntwoMapSearch.addCloseMarkerBtn()
                    }, 100);
                    $("#ProvinceName").val(g.province);
                    $("#IsFullProvince").val("1");
                    var f = $(".nearby-overlay-command.inntwo-backgroud-color-waring").last();
                    nearbyAttractionSearch(e, d.lng, d.lat, f)
                });
                nearbySearch.nearbySearchCategory = nearbySearch.nearbySearchCategories.Attraction
            }},
            {text: "<div class='inntwo-map-right-menu-item'>加入计划</div>", callback: function (d) {
                inntwoMapSearch.getAddressByPoint(d, function (j) {
                    var f = j.street || j.city;
                    var i = j.point.lng + "," + j.point.lat;
                    var g = "";
                    if (j.province == j.city) {
                        j.city = ""
                    }
                    var e = InnTwoTools.format("{0}{1}{2}{3}{4}", j.province, j.city, j.district, j.street, j.streetNumber);
                    var h = InnTwoTools.getIdentifyStringByDate();
                    destinationAddOverlayInMap({pointPar: d, district: j.district, city: j.city, map: inntwoMap, province: j.province, tempSearchContent: e, address: e});
                    setTimeout(function () {
                        placeOverLayAddToSchedule({placeName: f, icoUrl: "/img/asset2/customPlaceImg.jpg", PlaceInfoId: h, categoryId: "customePlace", type: "customePlace", placePoint: i, clicked: $(".custome-place-favorite").last(), placeRemark: g, notShowSuggestion: true, notShowComment: true, placeProvince: j.province, placeCity: j.city, placeDistrict: j.district, parentCategory: "3", Address: e});
                        customePlaceEditorClickEvent()
                    }, 300);
                    setTimeout(function () {
                        inntwoMapSearch.addCloseMarkerBtn();
                        addSelectedForMarker()
                    }, 1500)
                })
            }}
        ];
        if (typeof window.existAddRightMenu === "undefined") {
            for (var a = 0; a < c.length; a++) {
                window.contextMenu.addItem(new window.BMap.MenuItem(c[a].text, c[a].callback, 100))
            }
            window.existAddRightMenu = true
        }
        inntwoMapSearch.getAddressByPoint(b.point, function (d) {
            $("#inntwoMapRightMenuTitle").text(d.city + d.street)
        })
    })
}
function addSelectedForMarker() {
    $(".ordinary_marker_channel").last().children(".place_marker_inner_html").append("<div class='place-selected-schedule-flag create-itinerary-image'></div>");
    var a = $(".custome-place-favorite").last();
    a.find(".add-placeto-schedule").remove();
    a.append("<span class='add-placeto-schedule'>1</span>")
}
function settleAutoCompelete(a) {
    window.channelComplete = [];
    bdAutocompletTripperStar = new window.BMap.Autocomplete({input: "RouteTripperLineStart", location: a, onSearchComplete: function () {
        $(".tangram-suggestion").css({"border-color": "#7db500", "background-color": "#f5f5f5"}).width(167)
    }});
    bdAutocompletTripperEnd = new window.BMap.Autocomplete({input: "RouteTripperLineEnd", location: a, onSearchComplete: function () {
        $(".tangram-suggestion").css({"border-color": "#BAD532", "background-color": "#f5f5f5"}).width(167)
    }});
    channelComplete.push(bdAutocompletTripperStar);
    channelComplete.push(bdAutocompletTripperEnd)
}
var settleItineraryDefaultTitle = function () {
    var a = InnTwoTools.getNowDateStr();
    itinerayrNameDefault = "我的路书-" + a;
    $("#ScheduleDetailsOuter").val(itinerayrNameDefault);
    settleItineraryDefaultTitle = function () {
        $("#ScheduleDetailsOuter").val(itinerayrNameDefault)
    }
};
function addChannelInput(b) {
    var a = InnTwoTools.getStaticTemplate({url: templateUrl.mainTemplate.Url, selector: templateUrl.mainTemplate.addChannelPanel});
    $(".create_rout_item_input_add_ico").click(function () {
        channalEleClick = true;
        setTimeout(function () {
            channalEleClick = false
        }, 200);
        var c = addChannelInputInPanel(a, b);
        channelComplete.push(c);
        $(".create-itinerary-channal-counter").each(function () {
            var d = $(".create-itinerary-channal-counter").index(this);
            $(this).text(d + 1)
        });
        $(".create_route_input_channel").last().focus()
    }).mouseenter(function () {
        $(".create_route_item_channel_outer").show();
        $(".create-itinerary-channal-number").hide()
    });
    $(".create_route_item_channel_outer").click(function () {
        channalEleClick = true;
        setTimeout(function () {
            channalEleClick = false
        }, 200)
    })
}
function addChannelInputInPanel(c, e) {
    if ($(".create_route_item_channel").length > 3) {
        return null
    }
    $(".create_route_item_channel_outer").append(c);
    createRoutItemInputDeleteIco();
    calculateChannel();
    var b = $(".create_route_input_channel").length;
    var d = "CreateRouteInputChannel" + b;
    $(".create_route_input_channel").last().attr({id: d});
    var a = new window.BMap.Autocomplete({input: d, location: e, onSearchComplete: function () {
        $(".tangram-suggestion").css({"border-color": "#BAD532", "background-color": "#f5f5f5"}).width(167)
    }});
    $("#CreateRouteInputChannel" + b).attr({placeholder: "请输入途经点"});
    return a
}
function channelInputFocus() {
    var a = $(".create_route_input_channel").index(this);
    a += 2;
    setTimeout(function () {
        for (var b = 0; b < channelComplete.length; b++) {
            if (a != b) {
                channelComplete[b].hide()
            }
        }
    }, 600)
}
function createRoutItemInputDeleteIco() {
    $(".create_rout_item_input_delete_ico").click(function () {
        $(this).parent().remove();
        calculateChannel();
        $(".create-itinerary-channal-counter").each(function () {
            var a = $(".create-itinerary-channal-counter").index(this);
            $(this).text(a + 1)
        })
    })
}
function calculateChannel() {
    $(".create_rout_channel_container").each(function () {
        var a = $(".create_rout_channel_container").index(this);
        a++;
        $(this).text("请输入途经点")
    })
}
window.placeSearchNailClick = function (a) {
    var b = $(a).children(".search_place_overlay_nail_flag").text();
    if (b == -1) {
        $(a).css({"background-position": "-338px -15px"});
        $(a).children(".search_place_overlay_nail_flag").text("1")
    } else {
        $(a).css({"background-position": "-339px -1px"});
        $(a).children(".search_place_overlay_nail_flag").text("-1")
    }
};
function getAllPlaceCategory() {
    $.ajax({url: ajaxUrl.GetPlaceCategories_Url, type: "get", success: function (b) {
        $("body").append(b);
        $(".create_trip_schedule_place_sort_first").each(function () {
            var c = $.trim($(this).children(".categoryId").text());
            var d;
            inntwoBase.placeCategryByCategoryId({categoryId: c, civilize: function () {
                d = " trip-place-category-civilization"
            }, nature: function () {
                d = " trip-place-category-nature"
            }, entertain: function () {
                d = " trip-place-category-entertainment"
            }, hotel: function () {
                d = " trip-place-category-hotel"
            }, food: function () {
                d = " trip-place-category-food"
            }, aspect: function () {
                d = " trip-place-category-aspect"
            }});
            $(this).children(".trip-place-category-ico").addClass(d)
        });
        $(".create_trip_schedule_place_sort_container").draggable({handle: ".create_trip_schedule_place_sort_lvcheng"});
        $(".create_trip_schedule_place_sort_first").mouseenter(function () {
            $(this).css({"background-color": "#00a1cb"});
            $(this).find(".create_trip_schedule_place_sort_word").css({color: "#fff"})
        }).mouseleave(function () {
            var c = $(this).children(".openChildContainer").text();
            if (c != "1") {
                $(this).css({"background-color": "#fff"});
                $(this).find(".create_trip_schedule_place_sort_word").css({color: "#333"})
            }
        });
        $(".create_trip_schedule_place_sort_first").last().css({"border-radius": "0 0 4px 4px"});
        var a = true;
        $(".create_trip_schedule_place_sort_switch").click(function () {
            if (a) {
                $(".create_trip_schedule_place_sort_switch").css({"background-position": "-29px -54px"});
                $(".create_trip_schedule_place_sort_inner").hide();
                a = false
            } else {
                $(".create_trip_schedule_place_sort_switch").css({"background-position": "-29px -47px"});
                $(".create_trip_schedule_place_sort_inner").show();
                a = true
            }
        });
        sideOfRoadAttraction.setPlaceCategoryIco()
    }, error: function (a) {
        InnTwoTools.Alert(a.responseText)
    }})
}
function initialCategories() {
    $(".selected_second_level_selected").hide();
    $(".place_category_selected").text("-1");
    $(".category_place_count").hide();
    $(".second_category").css({color: "#333"})
}
function removeMarker(f, c) {
    var d = $(".home_place_marker,.ordinary_marker_channel,.ordinary_marker_start,.ordinary_marker_destination");
    if (typeof c !== "undefined" && c) {
        d = $(".home_place_marker")
    }
    for (var b = 0; b < d.length; b++) {
        var e = d.eq(b).find(".search_place_overlay_nail_flag").text();
        if (typeof f === "undefined" || !f) {
            var a = d.eq(b).find(".add-placeto-schedule").length;
            if (a <= 0) {
                if (e != 1) {
                    d.eq(b).remove()
                }
            }
        } else {
            if (e != 1) {
                d.eq(b).remove()
            }
        }
    }
}
var searchRadius = [10, 20, 30, 50, 100];
var searchRadiusIndex = 3;
var nowRadius = 0;
function changeRadiusSearchPlace() {
    $("#searchRadiusNumber").text(searchRadius[searchRadiusIndex]);
    $("#subtractSearchRadius").unbind("click").click(function () {
        searchRadiusIndex--;
        if (searchRadiusIndex > -1) {
            sideOfRoadAttraction.routeSearchRange = searchRadius[searchRadiusIndex];
            $("#searchRadiusNumber").text(searchRadius[searchRadiusIndex]);
            sideOfRoadAttraction.searchPlaceByRange(searchRadius[searchRadiusIndex])
        } else {
            searchRadiusIndex = 0
        }
    });
    $("#plusSearchRadius").unbind("click").click(function () {
        searchRadiusIndex++;
        if (searchRadiusIndex < searchRadius.length) {
            sideOfRoadAttraction.routeSearchRange = searchRadius[searchRadiusIndex];
            $("#searchRadiusNumber").text(searchRadius[searchRadiusIndex]);
            sideOfRoadAttraction.searchPlaceByRange(searchRadius[searchRadiusIndex])
        } else {
            searchRadiusIndex = searchRadius.length - 1
        }
    })
}
var setFirstAndLastSignSchedule = function (b) {
    $(".trip_schedule_scroll_container").eq(b).find(".schedule-start-signmarker,.schedule-end-signmarker").remove();
    var d = $(".trip_schedule_scroll_container").eq(b).find(".trip_schedule_sight_spot_item");
    var a = d.first();
    var c = d.last();
    a.append("<div class='marker-background-image schedule-start-signmarker'></div>");
    if (d.length > 1) {
        c.append("<div class='marker-background-image schedule-end-signmarker'></div>")
    }
};
function setColorBar(a) {
    $(".drag-bar-colorconvert-bar").css({width: a + "px"})
}
window.nearByAttractionClick = function () {
    $("#PlaceMoreSearchSubmit").click()
};
window.nearByHotelClick = function () {
    $("#HotelSubmitBotton").click()
};
function nearHotelClicked(c, a, f, d, b) {
    c.stopPropagation();
    nearbySearch.setSearchData({coordinate: d + "," + f, placeName: a});
    $("#HotelNameInput").val("");
    $("#HotelMoreStarGrade option").eq(0).attr({selected: true});
    $("#HotelMorePrice option").eq(0).attr({selected: true});
    $("#HotelMoreBrand option").eq(0).attr({selected: true});
    $("#HotelSubmitBotton").click();
    nearbySearch.nearbyTabsSetting(1);
    showHotelOrPlace = "hotel";
    setTimeout(function () {
        $(b).parents(".markerOverlayContainer").hide()
    }, 200);
    nearbySearch.showNearbyResult();
    mapMarkerAddToScheule.nearHotelPlaceAnimate({marker: $(b), destination: $(".createitinerary-hidden-nearby")});
    nearbySearch.nearbySearchCategory = nearbySearch.nearbySearchCategories.Hotel
}
var nearHotelOuterHeight;
function nearHotelQueryToggle() {
    $("#showMoreHotelMoreQuery").unbind("click").click(function () {
        $(".morhotel-inicial-hide,#showMoreHotelMoreQuery,#hideMoreHotelMoreQuery").slideToggle();
        nearHotelOuterHeight = $(".hotel_search_result_panel").height();
        nearHotelOuterHeight -= 101;
        $(".hotel_search_result_panel,.hotel_search_result_panel_inner").height(nearHotelOuterHeight);
        $("#HotelMorePrice").unbind("change");
        setNearByHotelScroll();
        createItineraryHotel.hotelScroll = 166 + 101
    });
    $("#hideMoreHotelMoreQuery").unbind("click").click(function () {
        $(".morhotel-inicial-hide,#showMoreHotelMoreQuery,#hideMoreHotelMoreQuery").slideToggle();
        nearHotelOuterHeight = $(".hotel_search_result_panel").height();
        nearHotelOuterHeight += 101;
        $(".hotel_search_result_panel,.hotel_search_result_panel_inner").height(nearHotelOuterHeight);
        $("#HotelMorePrice").change(function () {
            nearbySearch.setSearchData({priceRange: $(this).val()});
            $("#HotelSubmitBotton").click()
        });
        setNearByHotelScroll();
        createItineraryHotel.hotelScroll = 166
    });
    $("#HotelMorePrice").change(function () {
        nearbySearch.setSearchData({priceRange: $(this).val()});
        $("#HotelSubmitBotton").click()
    })
}
function removeNearHotelsMaker() {
    $(".schedule-update-hotel-more").each(function () {
        if ($(this).find(".marker-number-span").length > 0) {
            var b = $(this).find(".search_place_overlay_nail_flag").text();
            var a = $(this).find(".add-placeto-schedule").length;
            if (b != "1" && a < 1) {
                $(this).remove()
            }
        }
    })
}
function removeNearPlacMarkere() {
    $(".home_place_marker").each(function () {
        var b = $(this).attr("class");
        if (b.indexOf("place_search_result") > -1) {
            if ($(this).find(".marker-number-span").length > 0) {
                var c = $(this).find(".search_place_overlay_nail_flag").text();
                var a = $(this).find(".add-placeto-schedule").length;
                if (c != "1" && a < 1) {
                    $(this).remove()
                }
            }
        }
    })
}
function removeNearDelicaciesMaker() {
    $(".delicacy-search-marker").each(function () {
        if ($(this).find(".marker-number-span").length > 0) {
            var b = $(this).find(".search_place_overlay_nail_flag").text();
            var a = $(this).find(".add-placeto-schedule").length;
            if (b != "1" && a < 1) {
                $(this).remove()
            }
        }
    })
}
function setNearByHotelScroll() {
    var a = $("#hotelSearchResultPanelInner")[0];
    InnTwoTools.customScrollBar.settleBarSize(a, $("#moreHotelScrollBarContainer"), $("#moreHotelCustomScrollBar"));
    InnTwoTools.customScrollBar.scrollAndDrag(a, $("#moreHotelCustomScrollBar"), $("#moreHotelScrollBarContainer"), a)
}
function moreHotelRequestDataSuccess(d) {
    $("#HotelSearchList").show();
    nearHotelQueryToggle();
    removeNearPlacMarkere();
    removeNearHotelsMaker();
    removeNearDelicaciesMaker();
    changeNearMarkerNaillStyle();
    var f = InnTwoTools.GetTotalPages(d.total, d.pageSize);
    var e = (f > 1);
    var c = {currentPage: d.currentPage, totalPages: f, shouldShowPage: e, size: "mini", alignment: "center", onPageChanged: function (g, i, h) {
        $("#ConditionPageIndex").val(h);
        $("#HotelSubmitBotton").click()
    }};
    $("#nearHotelsPager").bootstrapPaginator(c);
    $("#nearbyAttractionTotal").text(d.total);
    var b;
    if (d.total < 1) {
        d.currentPage = 1;
        d.notData = true;
        InnTwoTools.mapLoadingNotify({option: "close"});
        b = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: templateUrl.mainTemplate.nearHotelsByPoint, json: d});
        $("#HotelSearchList").html(b);
        setNearByHotelScroll();
        return
    }
    b = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: templateUrl.mainTemplate.nearHotelsByPoint, json: d});
    $("#HotelSearchList").html(b);
    var a = windHeight - 193;
    if (typeof(nearHotelOuterHeight) != "undefined" && nearHotelOuterHeight) {
        $(".hotel_search_result_panel,.hotel_search_result_panel_inner").height(nearHotelOuterHeight)
    } else {
        $(".hotel_search_result_panel,.hotel_search_result_panel_inner").height(a)
    }
    setNearByHotelScroll();
    $(".hotel_search_result_number").each(function () {
        var j = $(".hotel_search_result_number").index(this);
        var h = j + 1;
        $(this).text(h);
        var i = $(".hotel_search_result_item").eq(j).find(".search_place_overlay_place_favorite");
        var g = i.attr("pointstr");
        var l = g.split(",")[0];
        var k = g.split(",")[1];
        var n = {};
        n.point = {lat: k, lng: l};
        n.pointStr = g;
        n.Category = 7;
        n.remarkerCategory = 3;
        n.placeName = i.attr("placename");
        n.imgUrl = i.attr("imgurl");
        n.placeInfoId = i.attr("placeid");
        n.price = i.attr("price");
        n.province = i.attr("province");
        n.city = i.attr("city");
        n.district = i.attr("district");
        var m = "home_place_marker schedule-update-hotel-more";
        n.contianerClassName = m;
        n.hasPrice = true;
        var o = JSON.stringify(n);
        n.innerHtml = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: templateUrl.mainTemplate.hotelOverlaySelector, json: n});
        n.jsonData = o;
        n.map = inntwoMap;
        n.markerNumber = h;
        InnTwoMapCore.addMarkerInMapByOverLay(n)
    });
    inntwoMapSearch.setMarkerClick();
    inntwoMapSearch.mapClickHideOverlay(inntwoMap);
    InnTwoTools.mapLoadingNotify({option: "close"});
    placeFavoriteListener();
    nearbySearch.nearbySearchCallback()
}
window.moreHotelPagerStart = function () {
    InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_HOTEL})
};
function nearPlaceClicked(c, a, f, d, b) {
    c.stopPropagation();
    $("#ProvinceName").val("");
    $("#IsFullProvince").val("0");
    nearbyAttractionSearch(a, f, d, b);
    nearbySearch.nearbySearchCategory = nearbySearch.nearbySearchCategories.Attraction
}
function nearbyAttractionSearch(a, d, c, b) {
    nearbySearch.setSearchData({coordinate: c + "," + d, placeName: a});
    $("#nearByAttractionsButton").click();
    showHotelOrPlace = "place";
    setTimeout(function () {
        $(b).parents(".markerOverlayContainer").hide()
    }, 200);
    nearbySearch.showNearbyResult();
    mapMarkerAddToScheule.nearHotelPlaceAnimate({marker: $(b), destination: $(".createitinerary-hidden-nearby")})
}
function moreHotelBegin() {
    InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_PLACE})
}
function placeListSearchStart() {
    InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_PLACE})
}
function placeLkistSearchSuccess(d) {
    removeNearPlacMarkere();
    removeNearHotelsMaker();
    removeNearDelicaciesMaker();
    var b;
    if (d.total < 1) {
        d.notData = true;
        InnTwoTools.mapLoadingNotify({option: "close"});
        b = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: templateUrl.mainTemplate.nearAttractionByPoint, json: d});
        $("#PlaceSearchList").html(b);
        tripScheduleScroll("placeSearchResultPanelInner", $("#morePlacesScrollBarContainer"), $("#moreplaceCustomScrollBarMorePlace"))
    }
    b = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: templateUrl.mainTemplate.nearAttractionByPoint, json: d});
    $("#PlaceSearchList").html(b);
    $(".search_place_info_price").each(function () {
        if ($(this).text() == "免费") {
            $(this).parent().html('<span class="search_place_info_price">免费</span>')
        }
    });
    $("#nearbyAttractionTotal").text(d.total);
    var f = InnTwoTools.GetTotalPages(d.total, d.pageSize);
    var e = (f != 1);
    var c = {currentPage: d.currentPage, totalPages: f, shouldShowPage: e, size: "mini", alignment: "center", onPageChanged: function (g, i, h) {
        $("#MorePlacePageIndex").val(h);
        $("#PlaceMoreSearchSubmit").click()
    }};
    $("#nearAttractionPager").bootstrapPaginator(c);
    changeNearMarkerNaillStyle();
    $("#PlaceSearchList").show();
    $("#PlaceSearchList,.place_search_result_panel,.place_search_result_panel_inner").height(windHeight - 160);
    var a = 1;
    $(".attraction-nearby-item").each(function () {
        var h = $(this).find(".search_place_overlay_place_favorite");
        var g = h.attr("pointStr");
        var m = {};
        var k = g.split(",")[0];
        var j = g.split(",")[1];
        m.grade = h.attr("grade");
        m.duration = h.attr("duration");
        m.point = InnTwoMapCore.createPoint(k, j);
        m.pointStr = g;
        m.CategoryId = h.attr("CategoryId");
        m.placeName = h.attr("placename");
        m.imgUrl = h.attr("imgUrl");
        m.placeInfoId = h.attr("placeId");
        m.price = h.attr("price");
        m.province = h.attr("province");
        m.city = h.attr("city");
        m.district = h.attr("district");
        m.attrOrigin = inntwoEnum.attractionOrigin.nearby;
        m.markerNumber = a;
        if (m.defaultImgUrl == "") {
            m.defaultImgUrl = InnTwoTools.base64EncodeChars(m.imgUrl)
        }
        m.jsonData = JSON.stringify(m);
        m.map = inntwoMap;
        m.innerHtml = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: templateUrl.mainTemplate.placeOverlaySelector, json: m});
        var l = "";
        inntwoBase.placeCategryByCategoryId({categoryId: m.CategoryId, civilize: function () {
            l = "home_place_marker place_search_result_civilization,0px -47px"
        }, nature: function () {
            l = "home_place_marker place_search_result_natural,-20px -47px"
        }, hotel: function () {
            l = "home_place_marker place_search_result_hotel"
        }, entertain: function () {
            l = "home_place_marker place_search_result_entertainment,-40px -47px"
        }, food: function () {
            l = "home_place_marker delicacy-search-marker,-109px -56px"
        }, aspect: function () {
            l = "home_place_marker place_search_result_aspect,-180px -106px"
        }});
        m.contianerClassName = l.split(",")[0];
        $(this).find(".place_search_result_hotel_msg").find(".place_search_result_marker").css({"background-position": l.split(",")[1]});
        var i = $(".attraction-nearby-item").index($(this));
        $(".place_search_result_number").eq(i).text(a);
        InnTwoMapCore.addMarkerInMapByOverLay(m);
        a++
    });
    inntwoMapSearch.setMarkerClick();
    placeFavoriteListener();
    $(".place_search_result_marker").show();
    inntwoMapSearch.mapClickHideOverlay(inntwoMap);
    nearbySearch.nearbySearchCallback()
}
window.placeListSearchBegin = function () {
    InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_PLACE})
};
function changeNearMarkerNaillStyle() {
    $(".home_place_marker").each(function () {
        var e = $(this).find(".search_place_overlay_nail_flag").text();
        var a = $(this).find(".add-placeto-schedule").length;
        if (e == 1 || a > 0) {
            var c = $(this).children(".place_marker_json_data").text();
            var b = JSON.parse(c);
            if (b.Category == "7") {
                b.CategoryId = "3"
            }
            var d = inntwoMapSearch.getMarkerClassName(b.CategoryId || b.Category);
            $(this).attr({"class": "place_search_result " + d});
            $(this).find(".marker-number-span").hide()
        }
    })
}
var moveDayIndex = 0;
function newAddScheduleCalculate(b) {
    if (!b.outer) {
        return
    }
    moveDayIndex = b.dayIndex;
    if (b.preveCoordinate != b.coordinate) {
        if (b.preveCoordinate && b.coordinate) {
            var c = b.outer.find(".create-itinerary-wayico");
            toCountDisDuration({way: Number(c.attr("way")), wayEle: c, prevPoint: InnTwoMapCore.createPoint(b.preveCoordinate.split(",")[0], b.preveCoordinate.split(",")[1]), point: InnTwoMapCore.createPoint(b.coordinate.split(",")[0], b.coordinate.split(",")[1]), callback: function (d) {
                fillDrivingResult(d);
                calculateAmountDistanceDuration(window.nowSchduleIndex);
                calculateAmountDistanceDuration(window.nowSchduleIndex + 1);
                calculateAmountDistanceDuration(moveDayIndex);
                moveDayIndex = 0;
                SaveEditorItinerary();
                drawLinesByfacePoints()
            }})
        } else {
            b.outer.find(".trip-schedule-items-distance").text("");
            b.outer.find(".trip-schedule-distance-duration").text("0,0");
            b.outer.find(".trip-schedule-places-line").text("");
            b.outer.find(".traffic-details-menu").hide()
        }
    } else {
        b.outer.find(".trip-schedule-items-distance").text("");
        b.outer.find(".trip-schedule-distance-duration").text("0,0");
        b.outer.find(".trip-schedule-places-line").text("");
        b.outer.find(".traffic-details-menu").hide()
    }
    if (b.coordinate != b.nextCoordinate) {
        if (b.nextCoordinate && b.coordinate) {
            var a = b.nextOuter.find(".create-itinerary-wayico");
            toCountDisDuration({way: Number(a.attr("way")), wayEle: a, prevPoint: InnTwoMapCore.createPoint(b.coordinate.split(",")[0], b.coordinate.split(",")[1]), point: InnTwoMapCore.createPoint(b.nextCoordinate.split(",")[0], b.nextCoordinate.split(",")[1]), callback: function (d) {
                fillDrivingResult(d);
                calculateAmountDistanceDuration(window.nowSchduleIndex);
                calculateAmountDistanceDuration(window.nowSchduleIndex + 1);
                SaveEditorItinerary();
                drawLinesByfacePoints()
            }})
        } else {
            b.nextOuter.find(".trip-schedule-items-distance").text("未知");
            b.nextOuter.find(".trip-schedule-distance-duration").text("0,0");
            b.nextOuter.find(".trip-schedule-places-line").text("")
        }
    } else {
        b.nextOuter.find(".trip-schedule-items-distance").text("");
        b.nextOuter.find(".trip-schedule-distance-duration").text("0,0");
        b.nextOuter.find(".trip-schedule-places-line").text("")
    }
}
function addSightSpotInSchedule(g) {
    var b = window.nowSchduleIndex;
    if (g.dayIndex > -1) {
        b = g.dayIndex
    }
    InnTwoTools.PlaceParentCategory({category: g.parentCategory, hotel: function () {
        g.notShowComment = true;
        g.notShowSuggestion = true;
        if (g.IsCustom && g.IsCustom == "1") {
            g.editorCustome = true
        } else {
            g.IsCustom = 0;
            g.editorCustome = false
        }
    }, delicacy: function () {
        g.notShowSuggestion = true;
        if (g.IsCustom && g.IsCustom == "1") {
            g.editorCustome = true;
            g.notShowComment = true
        } else {
            g.IsCustom = 0;
            g.editorCustome = false;
            g.notShowComment = false
        }
    }, other: function () {
        g.editorCustome = true;
        g.notShowComment = true;
        g.notShowSuggestion = true;
        g.IsCustom = 1
    }, attraction: function () {
        g.notShowComment = true;
        g.notShowSuggestion = false;
        if (typeof g.duration === "undefined" || !g.duration) {
            g.duration = 2
        }
        if (g.IsCustom && g.IsCustom == "1") {
            g.editorCustome = true
        } else {
            g.IsCustom = 0;
            g.editorCustome = false
        }
    }});
    var k = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: templateUrl.mainTemplate.addOverlayToSchedule, json: g});
    $(".trip_schedule_sightspots_container").eq(b).append(k);
    var f = $(".trip_schedule_sightspots_container").eq(b).children(".trip-schedule-item-outer").last();
    f.find(".trip-schedule-items-distance").text(inntwoBase.AlarmMessage.ROUT_SEARCHING);
    f.find(".trip-schedule-distance-duration").text("0,0");
    var a = f.find(".placePoint").text();
    var i = fullFindPrev(f);
    var h = i.coordinate;
    var d = fullFindNext(f);
    var e = d.outer;
    var c = d.coordinate;
    newAddScheduleCalculate({preveCoordinate: h, coordinate: a, outer: f, nextOuter: e, nextCoordinate: c, dayIndex: b, });
    scheduleWrapperScorller();
    var j = document.getElementById("tripScheduleScrollContainer" + (b + 1));
    if (j) {
        j.scrollTop = j.scrollHeight
    }
    setScheduleItemSortable();
    setPlacesCloseBtn();
    customePlaceEditorClickEvent();
    mapPlaceAdd.setScheduleNumberDdl()
}
function setPlacesCloseBtn() {
    $(".trip_schedule_sight_spot_item").unbind("mouseenter").mouseenter(function () {
        $(this).find(".trip_shchedule_sight_spot_close").addClass("create-itinerary-image");
        $(this).find(".shce-place-item-remove").addClass("create-itinerary-image")
    }).unbind("mouseleave").mouseleave(function () {
        $(this).find(".trip_shchedule_sight_spot_close").removeClass("create-itinerary-image");
        $(this).find(".shce-place-item-remove").removeClass("create-itinerary-image")
    })
}
function addedScheduleMarkerFlag(a) {
    $(".place_marker_inner_html").each(function () {
        var c = $(this).parent().find(".place_marker_json_data").text();
        if (c) {
            var b = JSON.parse(c);
            if (b.placeInfoId == a) {
                $(this).append("<div class='place-selected-schedule-flag create-itinerary-image'></div>");
                $(this).find(".search_place_overlay_place_favorite,.custome-place-favorite").append("<span class='add-placeto-schedule'>1</span>");
                return false
            }
        }
        return true
    })
}
function placeOverLayAddToSchedule(c) {
    var b = $(c.clicked).parent().find(".marker-overlay-placeimg");
    var a = b.length > 0 ? b.eq(b.length - 1) : $(c.clicked);
    mapMarkerAddToScheule.setAddtoScheduleAnimate({animaEle: a, animateImage: c.icoUrl, desEle: $(".trip_schedule_sight_spot_drag_sight").eq(window.nowSchduleIndex), callBack: function () {
    }});
    addSightSpotInSchedule(c);
    SaveEditorItinerary();
    addedScheduleMarkerFlag(c.PlaceInfoId);
    mapPlaceAdd.resetorignAndDestination();
    trafficDdlClick();
    planIcoChange();
    bodyClick();
    setItineraryItemFirstHide();
    $(".cet-itin-planico-container").last().children(".cet-itin-planico").eq(0).css({"background-color": "#00a1cb"}).append("<input type='hidden' class='cet-itin-hidden-planico-sele-flag' />");
    if (window.nowSchduleIndex > 0) {
        $(".schedule-item-linkprev").eq(window.nowSchduleIndex).show()
    }
    mapPlaceAdd.addedSchedulePopup()
}
var scheduleDateArray, inntwoParentHeight, nowDatestr;
var tripScheduleInitialItem;
function initialTripScheduleFirstItem() {
    if (scheduleId) {
        return
    }
    $(".trip_schedule_scroll_container").attr({id: "tripScheduleScrollContainer1"});
    $(".schedule-custom-scroll-bar").last().attr({id: "customScrollBar1"});
    regidterNowRemarkerUpdate()
}
function scheduleInitial() {
    pageInit();
    initialTripScheduleFirstItem();
    saveScheduleSketch()
}
function placeFavoriteListener() {
    $(".search_place_overlay_place_favorite").unbind("click").click(function () {
        var b = $(this).attr("duration");
        var a = $(this).attr("comments");
        var d = $(this).attr("price");
        var c = $(this).attr("CategoryId");
        placeOverLayAddToSchedule({placeName: $(this).attr("placeName"), icoUrl: $(this).attr("imgUrl"), PlaceInfoId: $(this).attr("placeId"), categoryId: c, placePoint: $(this).attr("pointStr"), type: c ? $(this).attr("type") : "", PlaceExpense: d == "免费" || !d ? 0 : d, clicked: this, duration: b, grade: $(this).attr("grade"), notShowSuggestion: typeof b === "undefined" || !b ? true : false, notShowComment: typeof comments === "undefined" || !comments ? true : false, delicacyCommentNumber: a, placeProvince: $(this).attr("province"), placeCity: $(this).attr("city"), placeDistrict: $(this).attr("district"), parentCategory: $(this).attr("parentCategory"), Address: $(this).attr("address") ? $(this).attr("address") : ""})
    })
}
function pageInit() {
    window.nowSchduleIndex = 0;
    $("#tripScheduleDateDiv").click(function () {
        if (window.nowSchduleIndex == 0) {
            $("#TripScheduleDate_focus").focus()
        }
    });
    $("#TripScheduleDate_focus").datetimepicker({format: "yyyy-mm-dd", language: "zh-CN", weekStart: 1, todayBtn: 1, autoclose: 1, todayHighlight: 1, startView: 2, minView: 2, forceParse: 0}).change(function () {
        scheduleIgnoreDateTime = false;
        var a = InnTwoTools.strConvertToDate($(this).val());
        a = InnTwoTools.getNowDateStr(a);
        setOrignDate(a);
        SaveEditorItinerary();
        scheduleJsonHash++;
        notIgnoreDate()
    });
    nowDatestr = InnTwoTools.getNowDateStr();
    scheduleDateArray = [nowDatestr];
    $("#TripScheduleDate_focus").val(nowDatestr);
    setTimeout(function () {
        setIgnoreTime($(".trip_schedule_date_ignore_time"))
    }, 500);
    situationSet();
    customPlaceNameInput = new window.BMap.Autocomplete({input: "centerCustomeAreaAddress", location: inntwoMap, onSearchComplete: function () {
        $(".tangram-suggestion,.tangram-suggestion-main").css({"border-color": "#7db500", "z-index": "100", "background-color": "#f5f5f5"}).width(327)
    }})
}
function scheduleAddDay(a, c) {
    window.nowSchduleIndex = a - 1;
    $(".trip_schedule_sightspots_container").eq(window.nowSchduleIndex).html("");
    $(".trip_schedule_remark_input").eq(window.nowSchduleIndex).hide();
    $(".trip_schedule_scroll_container").each(function () {
        var d = $(".trip_schedule_scroll_container").index(this);
        $(this).attr({id: "tripScheduleScrollContainer" + (d + 1)});
        $(".schedule-custom-scroll-bar").eq(d).attr({id: "customScrollBar" + (d + 1)});
        tripScheduleScroll("tripScheduleScrollContainer" + (d + 1), $(".custom-scroll-bar-container").eq(d), $("#customScrollBar" + (d + 1)))
    });
    $("#createItineraryDayCount").text(c);
    var b = scheduleDateArray[scheduleDateArray.length - 1];
    b = InnTwoTools.DateAddday(b, 1);
    scheduleDateArray.push(b);
    showNowTripSchedule();
    situationSet();
    SaveEditorItinerary();
    regidterNowRemarkerUpdate();
    mapPlaceAdd.setScheduleNumberDdl()
}
function setOrignDate(a) {
    $("#tripScheduleDateDiv").text(a);
    var c = $(".trip_schedule_date_ignore_time");
    if (nowSchduleIndex > 0) {
        c.hide()
    } else {
        c.show()
    }
    scheduleDateArray[0] = a;
    var d = scheduleDateArray.length - 1;
    for (var b = 0; b < d; b++) {
        scheduleDateArray[b + 1] = InnTwoTools.DateAddday(scheduleDateArray[b], 1)
    }
}
function setNowOrigin() {
    var c = $(".trip_schedule_destination_content_span").eq(window.nowSchduleIndex).text();
    var b = $(".trip_schedule_end_coordinate").eq(window.nowSchduleIndex).val();
    var d = $(".trip_schedule_end_remarke").eq(window.nowSchduleIndex).val();
    var a = $(".trip_schedule_end_category").eq(window.nowSchduleIndex).val();
    var e = $.trim($(".trip_schedule_start_content_span").eq(window.nowSchduleIndex + 1).text());
    if (!c || e) {
        return
    }
    $(".trip_schedule_start_content_span").eq(window.nowSchduleIndex + 1).text(c);
    $(".trip_schedule_start_place_name").eq(window.nowSchduleIndex + 1).val(c);
    $(".trip_schedule_start_coordinate").eq(window.nowSchduleIndex + 1).val(b);
    $(".trip_schedule_start_remarke").eq(window.nowSchduleIndex + 1).val(d);
    $(".trip_schedule_end_category").eq(window.nowSchduleIndex + 1).val(a)
}
function showNowTripSchedule() {
    var b = scheduleDateArray[window.nowSchduleIndex];
    var a = $(".trip_schedule_date_ignore_time");
    if (scheduleIgnoreDateTime && window.nowSchduleIndex < 1) {
        $("#tripScheduleDateDiv").text(scheduleIgnoreWarning);
        a.show()
    }
    if (window.nowSchduleIndex > 0) {
        a.hide();
        if (scheduleIgnoreDateTime) {
            $("#tripScheduleDateDiv").hide()
        } else {
            $("#tripScheduleDateDiv").text(b).show()
        }
    }
    if ($.trim($(".trip_schedule_place_remark_span").eq(window.nowSchduleIndex).text()) != "") {
        $(".trip_schedule_remark_input").eq(window.nowSchduleIndex).show()
    }
    scheduleWrapperScorller()
}
function situationSet() {
    var b = $("#tripScheduleDateDiv");
    var a = $("#TripScheduleDate_focus");
    var c = $(".trip_schedule_date_ignore_time");
    if (window.nowSchduleIndex > 0) {
        a.hide();
        if (scheduleIgnoreDateTime) {
            b.hide()
        } else {
            b.show().text(scheduleDateArray[window.nowSchduleIndex])
        }
        c.hide()
    } else {
        a.show();
        if (scheduleIgnoreDateTime) {
            c.hide();
            b.text(scheduleIgnoreWarning)
        } else {
            c.show();
            b.text(scheduleDateArray[window.nowSchduleIndex])
        }
        b.show()
    }
}
function removeSchedule(c) {
    var b = getSingleDaySchedule(c);
    var d = false;
    var a = $(".trip_schedule_container_item").length;
    if (c > 0 && c < a - 1) {
        var g = $(".trip_schedule_sightspots_container").eq(c).find(".trip-schedule-item-outer");
        if (g.length > 0) {
            var h = g.first();
            var j = g.last();
            var l = fullFindPrev(h);
            var f = fullFindNext(j);
            d = true;
            searechTrafficByPlacesDom({prevEle: l, nextEle: f, callBack: function () {
                for (var i = 0; i < b.ScheduleItemPlaces.length; i++) {
                    var m = b.ScheduleItemPlaces[i];
                    removeMarkerSelectFlag(m.PlacePoint, m.PlaceInfoId, m.PlaceName)
                }
                window.nowSchduleIndex--
            }})
        }
    }
    if (!d) {
        for (var e = 0; e < b.ScheduleItemPlaces.length; e++) {
            var k = b.ScheduleItemPlaces[e];
            removeMarkerSelectFlag(k.PlacePoint, k.PlaceInfoId, k.PlaceName)
        }
        scheduleDateArray = scheduleDateArray.removeItem(scheduleDateArray.length - 1);
        window.nowSchduleIndex--;
        showNowTripSchedule();
        situationSet();
        SaveEditorItinerary();
        drawLinesByfacePoints()
    }
}
function setScheduleItemSortable() {
    var d, c, b, a;
    $(".trip_schedule_sightspots_container").sortable({placeholder: "ui-state-highlight", start: function (e, f) {
        d = fullFindPrev(f.item);
        c = d.coordinate;
        b = fullFindNext(f.item.next());
        a = b.coordinate;
        $(f.item).find(".trip-schedule-items-distance-duration").hide()
    }, stop: function (g, k) {
        $(".trip-schedule-items-distance-duration").show();
        setItineraryItemFirstHide();
        if (c && a) {
            c = InnTwoMapCore.createPoint(c.split(",")[0], c.split(",")[1]);
            a = InnTwoMapCore.createPoint(a.split(",")[0], a.split(",")[1]);
            var l = b.outer.find(".create-itinerary-wayico").attr("way");
            toCountDisDuration({way: Number(l), wayEle: b.outer.find(".create-itinerary-wayico"), prevPoint: c, point: a, callback: function (m) {
                fillDrivingResult(m);
                calculateAmountDistanceDuration(window.nowSchduleIndex);
                calculateAmountDistanceDuration(window.nowSchduleIndex + 1)
            }})
        } else {
            if (b.outer && b.coordinate) {
                b.outer.find(".trip-schedule-items-distance").text("");
                b.outer.find(".trip-schedule-places-line").text("")
            }
        }
        d = null;
        c = null;
        b = null;
        a = null;
        var j = fullFindPrev(k.item);
        var h = fullFindNext(k.item);
        var e = k.item.find(".placePoint").text();
        if (e) {
            e = e.trim()
        }
        var i = j && j.coordinate ? j.coordinate : "";
        var f = h && h.coordinate ? h.coordinate : "";
        newAddScheduleCalculate({preveCoordinate: i, coordinate: e, dayIndex: window.nowSchduleIndex, outer: k.item, nextOuter: h && h.outer ? h.outer : null, nextCoordinate: f});
        mapPlaceAdd.resetorignAndDestination()
    }, delay: 200});
    $(".trip_schedule_sightspots_container").disableSelection()
}
function getDistanceAndDuration(d, c, a) {
    if (d && c && d != c) {
        var e = InnTwoMapCore.createPoint(d.split(",")[0], d.split(",")[1]);
        var b = InnTwoMapCore.createPoint(c.split(",")[0], c.split(",")[1]);
        $("#SaveSketch").attr({disabled: "disabled"}).val("检索路线中...");
        $("#SaveItineraryButton").css({left: "-175px"});
        mapPlaceAdd.routeSearching = true;
        inntwoMapSearch.searchDistanceAndDatetime(e, b, function (l) {
            $("#SaveItineraryButton").css({left: "-135px"});
            $("#SaveSketch").removeAttr("disabled").val("保     存");
            mapPlaceAdd.routeSearching = false;
            var g = {};
            if (l) {
                g.distanceUnit = l.getPlan(0).getDistance(true);
                g.distanceClear = l.getPlan(0).getDistance(false);
                g.durationUnit = l.getPlan(0).getDuration(true);
                g.durationClear = l.getPlan(0).getDuration(false);
                var j = l.getPlan(0).getRoute(0).getPath();
                var k = l.getStart();
                var f = l.getEnd();
                if (k && f) {
                    g.p1 = k.point;
                    g.p2 = f.point
                }
                var m = [];
                for (var h = 0; h < j.length; h = h + 9) {
                    m.push(j[h])
                }
                g.line = JSON.stringify(m)
            } else {
                g = {p1: "", p2: "", distanceUnit: "", durationUnit: "", distanceClear: "", durationClear: ""}
            }
            a(g)
        }, inntwoMap)
    } else {
        a({p1: "", p2: "", distanceUnit: "", durationUnit: "", distanceClear: "", durationClear: ""})
    }
}
function fillDrivingResult(j) {
    var a, b, k;
    var d = $(".trip-schedule-item-outer").length;
    for (var c = 1; c < d; c++) {
        var l = $(".trip-schedule-item-outer").eq(c - 1).find(".placePoint").text();
        if (l) {
            l = l.trim()
        }
        var m = $(".trip-schedule-item-outer").eq(c).find(".placePoint").text();
        if (m) {
            m = m.trim()
        }
        var g = {lng: l.split(",")[0], lat: l.split(",")[1]};
        var h = {lng: m.split(",")[0], lat: m.split(",")[1]};
        var e = InnTwoTools.isLikenessLngLat({p1: j.p1, p2: g, });
        var f = InnTwoTools.isLikenessLngLat({p1: j.p2, p2: h, });
        if (e && f) {
            a = $(".trip-schedule-item-outer").eq(c).find(".trip-schedule-items-distance");
            b = $(".trip-schedule-item-outer").eq(c).find(".trip-schedule-distance-duration");
            k = $(".trip-schedule-item-outer").eq(c).find(".trip-schedule-places-line");
            if (j.line && j.distanceUnit && j.distanceClear) {
                a.text(InnTwoTools.format("{0},{1}", j.distanceUnit, j.durationUnit));
                b.text(InnTwoTools.format("{0},{1}", j.distanceClear, j.durationClear));
                k.text(j.line)
            }
            a.siblings(".traffic-details-menu").show()
        }
    }
    if (!j.line) {
        if (a) {
            a.text("");
            a.siblings(".traffic-details-menu").hide()
        }
        if (b) {
            b.text("0,0")
        }
        if (k) {
            k.text("")
        }
    }
}
function calculatePlacesDistanceDuration(b) {
    var d;
    if (b > 1) {
        (function c(g) {
            var i = $(".trip_schedule_sightspots_container").eq(g - 2).children(".trip-schedule-item-outer");
            if (i.length > 0) {
                var h = i.last();
                d = h.find(".placePoint").text()
            } else {
                if (g > 2) {
                    c(g - 1)
                }
            }
        }(b))
    }
    var f = $(".trip_schedule_sightspots_container").eq(b - 1).children(".trip-schedule-item-outer");
    var e = f.length;
    if (e == 0) {
        b++;
        if (b <= scheduleDateArray.length) {
            calculatePlacesDistanceDuration(b)
        } else {
            calculateAmountDistanceDuration()
        }
        return
    }
    (function a(k) {
        var m;
        if (k < 1) {
            m = d
        } else {
            m = f.eq(k - 1).find(".placePoint").text()
        }
        var h = f.eq(k).find(".placePoint").text();
        var g = $(".trip_schedule_sightspots_container").eq(b - 1);
        var j = k;
        if (b == 1) {
            j++
        }
        var n = g.find(".create-itinerary-wayico").eq(k).attr("way");
        if (k == e || e == 0) {
            calculateAmountDistanceDuration(b - 1);
            b++;
            if (b <= scheduleDateArray.length) {
                calculatePlacesDistanceDuration(b)
            } else {
                calculateAmountDistanceDuration();
                $("#SaveSketch").removeAttr("disabled").val("保     存")
            }
        } else {
            if (m == h) {
                f.eq(k).find(".trip-schedule-items-distance").text("");
                f.eq(k).find(".trip-schedule-distance-duration").text("0,0");
                k++;
                a(k);
                return
            }
            if (!m || !h) {
                f.eq(k).find(".trip-schedule-items-distance").text(nullTraficInfo);
                f.eq(k).find(".trip-schedule-distance-duration").text("0,0");
                k++;
                a(k)
            } else {
                var l = f.eq(k);
                l.find(".trip-schedule-items-distance").text(inntwoBase.AlarmMessage.ROUT_SEARCHING);
                l.find(".trip-schedule-distance-duration").text("0,0");
                l.find(".cet-itin-planico").css({"background-color": "#ccc"});
                disTrafficChange = l.find(".trip-schedule-items-distance");
                durTrafficChange = l.find(".trip-schedule-distance-duration");
                lineTrafficChange = l.find(".trip-schedule-places-line");
                m = InnTwoMapCore.createPoint(m.split(",")[0], m.split(",")[1]);
                h = InnTwoMapCore.createPoint(h.split(",")[0], h.split(",")[1]);
                toCountDisDuration({way: Number(n), wayEle: l.find(".create-itinerary-wayico"), prevPoint: m, point: h, callback: function () {
                    k++;
                    a(k)
                }})
            }
        }
    })(0)
}
function modifyItineraryCalculaDisDur() {
    var f = "";
    var c = 0;
    var e = 0;
    var d = true;
    var b = {dayCallBack: function () {
        c++;
        e = 0;
        if (c < scheduleDateArray.length) {
            a(b)
        } else {
            if (d) {
                calculatePlacesDistanceDuration(1)
            } else {
                calculateAmountDistanceDuration()
            }
        }
    }};
    var a = function (h) {
        var k = globalItinerary.ScheduleItems[c];
        if (!k.TrafficWay) {
            h.dayCallBack();
            return
        }
        d = false;
        var l = InnTwoTools.base64Decode(k.TrafficWay);
        if (!l) {
            h.dayCallBack();
            return
        }
        l = JSON.parse(l);
        if (l.length < 1) {
            h.dayCallBack();
            return
        }
        if (e > l.length - 1) {
            h.dayCallBack();
            return
        }
        if (l[e].points.length < 2) {
            h.dayCallBack();
            return
        }
        var i = e;
        if (c == 0 && i == 0) {
            i = 1
        }
        var j = {t: {p1: l[e].points[0], p2: l[e].points[1], way: Number(l[e].wayCode)}, callBack: function () {
            e++;
            i++;
            if (e < l.length) {
                j.t.p1 = l[e].points[0];
                j.t.p2 = l[e].points[1];
                j.t.way = Number(l[e].wayCode);
                j.placeOuter = $(".trip_schedule_sightspots_container").eq(c).children(".trip-schedule-item-outer").eq(i);
                g(j)
            } else {
                h.dayCallBack()
            }
        }, placeOuter: $(".trip_schedule_sightspots_container").eq(c).children(".trip-schedule-item-outer").eq(i)};
        g(j);
        function g(n) {
            var q = n.t.p1;
            var m = n.t.p2;
            var p = n.placeOuter;
            var s = n.placeOuter.find(".create-itinerary-wayico");
            var o = "create-itinerary-wayico {0} create-itinerary-image";
            InnTwoMapCore.trafficWayMapping({way: n.t.way, driving: function () {
                o = InnTwoTools.format(o, "cet-itin-driverico");
                f = "自驾";
                getDistanceAndDuration(q, m, function (r) {
                    if (!r) {
                        p.find(".trip-schedule-items-distance").text(nullTraficInfo);
                        p.find(".trip-schedule-distance-duration").text("0,0")
                    } else {
                        p.find(".trip-schedule-items-distance").text(InnTwoTools.format("{0}，{1}", r.distanceUnit, r.durationUnit));
                        p.find(".trip-schedule-distance-duration").text(InnTwoTools.format("{0},{1}", r.distanceClear, r.durationClear));
                        p.find(".trip-schedule-places-line").text(r.line)
                    }
                    setTrafficWaySelectItem(p, 0);
                    s.attr({way: n.t.way, "class": o, title: f});
                    n.callBack()
                })
            }, transit: function () {
                f = "公交";
                q = InnTwoMapCore.createPoint(q.split(",")[0], q.split(",")[1]);
                m = InnTwoMapCore.createPoint(m.split(",")[0], m.split(",")[1]);
                o = InnTwoTools.format(o, "cet-itin-ptrafficico");
                disTrafficChange = p.find(".trip-schedule-items-distance");
                durTrafficChange = p.find(".trip-schedule-distance-duration");
                lineTrafficChange = p.find(".trip-schedule-places-line");
                inntwoMapSearch.searchTransit({map: inntwoMap, callBack: function (r) {
                    pubTrafficCallBack(r);
                    setTrafficWaySelectItem(p, 1);
                    s.attr({way: n.t.way, "class": o, title: f});
                    n.callBack()
                }, start: q, end: m})
            }, train: function () {
                f = "火车";
                o = InnTwoTools.format(o, "cet-itin-trainico");
                p.find(".trip-schedule-items-distance").text(nullTraficInfo);
                p.find(".trip-schedule-distance-duration").text("");
                p.find(".trip-schedule-places-line").text("");
                setTrafficWaySelectItem(p, 2);
                s.attr({way: n.t.way, "class": o, title: f});
                n.callBack()
            }, plane: function () {
                f = "飞机";
                o = InnTwoTools.format(o, "cet-itin-planeico");
                p.find(".trip-schedule-items-distance").text(nullTraficInfo);
                p.find(".trip-schedule-distance-duration").text("");
                p.find(".trip-schedule-places-line").text("");
                setTrafficWaySelectItem(p, 3);
                s.attr({way: n.t.way, "class": o, title: f});
                n.callBack()
            }})
        }
    };
    a(b)
}
function setItineraryPlacesTraffic() {
    for (var c = 0; c < globalItinerary.ScheduleItems.length; c++) {
        var g = globalItinerary.ScheduleItems[c];
        if (g.PlacesTraffics && g.PlacesTraffics.length > 0) {
            for (var b = 0; b < g.PlacesTraffics.length; b++) {
                var j = g.PlacesTraffics[b];
                var d = JSON.stringify(j.Line);
                var m = j.TrafficPolicy;
                var l = b;
                if (inntwoBase.isOldItinerary(globalItinerary)) {
                    l++
                }
                var f = $(".trip_schedule_sightspots_container").eq(c);
                var a;
                if (!j.Distance || !j.Duration || j.Distance == "0" || j.Duration == "0") {
                    f.find(".trip-schedule-items-distance").eq(l).text("");
                    f.find(".trip-schedule-distance-duration").eq(l).text("");
                    f.find(".trip-schedule-places-line").eq(l).text("");
                    f.find(".traffic-details-menu").eq(l).hide()
                } else {
                    a = InnTwoTools.amountDisDur(j.Distance, j.Duration);
                    f.find(".trip-schedule-items-distance").eq(l).text(a ? a : "");
                    f.find(".trip-schedule-distance-duration").eq(l).text(j.Distance + "," + j.Duration);
                    f.find(".trip-schedule-places-line").eq(l).text(d)
                }
                var n = f.find(".create-itinerary-wayico").eq(l);
                var h = f.find(".trip-schedule-item-outer").eq(l);
                var e = "create-itinerary-wayico {0} create-itinerary-image";
                InnTwoMapCore.trafficWayMapping({way: j.WayCode, driving: function () {
                    e = InnTwoTools.format(e, "cet-itin-driverico");
                    var i = "自驾";
                    setTrafficWaySelectItem(h, 0);
                    n.attr({way: j.WayCode, "class": e, title: i})
                }, transit: function () {
                    e = InnTwoTools.format(e, "cet-itin-ptrafficico");
                    var i = "公交";
                    setTrafficWaySelectItem(h, 1);
                    n.attr({way: j.WayCode, "class": e, title: i})
                }, train: function () {
                    e = InnTwoTools.format(e, "cet-itin-trainico");
                    var i = "火车";
                    setTrafficWaySelectItem(h, 3);
                    n.attr({way: j.WayCode, "class": e, title: i})
                }, plane: function () {
                    e = InnTwoTools.format(e, "cet-itin-planeico");
                    var i = "飞机";
                    setTrafficWaySelectItem(h, 4);
                    n.attr({way: j.WayCode, "class": e, title: i})
                }, walking: function () {
                    e = InnTwoTools.format(e, "cet-itin-walkico");
                    var i = "步行";
                    setTrafficWaySelectItem(h, 2);
                    n.attr({way: j.WayCode, "class": e, title: i})
                }});
                n.attr({"data-policy": m, "data-plan": j.TransitPlanIndex ? j.TransitPlanIndex : 0})
            }
        }
    }
}
function setTrafficWaySelectItem(b, a) {
    b.find(".cet-itin-planico").css({"background-color": "#ccc"});
    b.find(".cet-itin-planico").eq(a).css({"background-color": "#00a1cb"});
    b.find(".cet-itin-hidden-planico-sele-flag").remove();
    b.find(".cet-itin-planico").eq(a).append("<input type='hidden' class='cet-itin-hidden-planico-sele-flag' />")
}
function calculateTotlalStayDuration(b) {
    var a = $(".trip_schedule_scroll_container").eq(b);
    var d = a.find(".trip-schedule-item-outer");
    var c = a.find(".iscustom").text();
    var e = 0;
    d.each(function () {
        var g = $(this).find(".parentCategory").text();
        var f = $(this).find(".schedule-item-during").text();
        if (c == "1") {
            return true
        }
        InnTwoTools.PlaceParentCategory({category: g, attraction: function () {
            if (f && f.trim()) {
                e += Number(f)
            }
        }});
        return true
    });
    $(".day-total-duration").eq(b).text(e > 0 ? e : "  ")
}
function calculateAmountDistanceDuration(d) {
    var c = $(".trip_schedule_scroll_container").eq(d);
    var g = c.find(".trip-schedule-distance-duration");
    calculateTotlalStayDuration(d);
    var a = 0;
    var b = 0;
    g.each(function () {
        var j = $(this).text();
        if (j.indexOf(",") > -1) {
            var i = j.split(",")[0];
            var k = j.split(",")[1];
            if (i != "") {
                a += Number(i)
            }
            if (k != "") {
                b += Number(k)
            }
        }
    });
    $(".driver-result-distance-duration").eq(d).attr("disduration", a + "," + b);
    var f = InnTwoTools.amountDisDur(a, b, true);
    if (!f) {
        $(".day-total-drive-distance").eq(d).text("");
        $(".day-total-drive-duration").eq(d).text("");
        calculateTotlalStayDuration(d)
    } else {
        var e = f.dis + "公里";
        var h = f.dur;
        $(".day-total-drive-distance").eq(d).text(e);
        $(".day-total-drive-duration").eq(d).text(h);
        calculateTotlalStayDuration(d)
    }
}
function distanceDurationSummation(c) {
    var a = 0;
    var b = 0;
    for (var d = 0; d < c.length; d++) {
        if (c[d].distanceClear) {
            a += Number(c[d].distanceClear)
        }
        if (c[d].durationClear) {
            b += Number(c[d].durationClear)
        }
    }
    return InnTwoTools.amountDisDur(a, b)
}
function computeAmountIdsDura(d) {
    var a = 0, c = 0;
    $(".driver-result-distance-duration").each(function () {
        var e = $(this).attr("disduration");
        if (typeof e === "undefined" || !e || e == "0,0") {
            return true
        }
        e = e.split(",");
        if (e[0]) {
            a += Number(e[0])
        }
        if (e[1]) {
            c += Number(e[1])
        }
        return true
    });
    if (!a || !c) {
        return d
    }
    var b = InnTwoTools.amountDisDur(a, c, true);
    if (typeof d.Remarks === "undefined") {
        d.Remarks = {}
    }
    d.Remarks.AmountDistance = b.dis + "公里";
    d.Remarks.AmountDuration = b.dur;
    return d
}
function cleanSchedule() {
    for (var a = $(".trip_schedule_container_item").length - 1; a > 0; a--) {
        $(".trip_schedule_container_item").eq(a).remove()
    }
    $(".trip_schedule_container_item").remove();
    window.nowSchduleIndex--;
    $(".trip_schedule_dataadd").click();
    scheduleDateArray = [scheduleDateArray[0]];
    window.nowSchduleIndex = 0;
    showNowTripSchedule();
    situationSet()
}
function removeMarkerSelectFlag(f, d, g) {
    var e = $(".trip_shchedule_sight_spot_name");
    var h = e.length;
    var a = 0;
    for (var b = 0; b < h; b++) {
        if ($.trim(e.eq(b).text()) == g) {
            a++
        }
    }
    if (a > 1) {
        return
    }
    var c = [];
    $(".trip_schedule_sight_spot_item > .placeInfoId").each(function () {
        c.push($(this).text())
    });
    $(".home_place_marker").each(function () {
        var l = $(this).find(".place_marker_json_data").text();
        if (l && l.trim()) {
            l = JSON.parse(l);
            if (l.placeInfoId == d) {
                var i = 0;
                for (var k = 0; k < c.length; k++) {
                    if (c[k] == d) {
                        i++
                    }
                }
                if (i < 2) {
                    $(this).find(".add-placeto-schedule").remove();
                    $(this).find(".place-selected-schedule-flag").remove()
                }
            }
        }
    });
    var j = [];
    $(".trip_schedule_sight_spot_item > .placePoint").each(function () {
        j.push($(this).text())
    });
    $(".ordinary_marker_channel").each(function () {
        var l = $(this).children(".place_marker_json_data").text();
        if (!l || !(l.trim())) {
            return true
        }
        l = JSON.parse(l);
        if (typeof l.point != "undefined") {
            if (f == l.point.lng + "," + l.point.lat) {
                $(this).find(".place-selected-schedule-flag").remove()
            }
        } else {
            if (l.lng && l.lat) {
                var m = l.lng + "," + l.lat;
                if (f == m) {
                    var i = 0;
                    for (var k = 0; k < j.length; k++) {
                        if (j[k] == m) {
                            i++
                        }
                    }
                    if (i < 2) {
                        $(this).find(".place-selected-schedule-flag").remove()
                    }
                }
            }
        }
        return true
    })
}
function fullFindPrev(c) {
    var f = c.prev(".trip-schedule-item-outer");
    if (f.length > 0) {
        return{outer: f, coordinate: f.find(".placePoint").text()}
    }
    var a = c.parents(".trip_schedule_container_item");
    var d = a.prev(".trip_schedule_container_item");
    var e;
    (function b(g) {
        if (g.length > 0) {
            var h = g.find(".trip-schedule-item-outer");
            if (h.length > 0) {
                f = h.last();
                e = f.find(".placePoint").text()
            } else {
                b(g.prev(".trip_schedule_container_item"))
            }
        }
    }(d));
    return{outer: f, coordinate: e}
}
function fullFindNext(f) {
    var e = f.next(".trip-schedule-item-outer");
    if (e.length > 0) {
        return{outer: e, coordinate: e.find(".placePoint").text()}
    }
    var a = f.parents(".trip_schedule_container_item");
    var c = a.next(".trip_schedule_container_item");
    var d;
    (function b(g) {
        if (g.length > 0) {
            var h = g.find(".trip-schedule-item-outer");
            if (h.length > 0) {
                e = h.first();
                d = e.find(".placePoint").text()
            } else {
                b(g.next(".trip_schedule_container_item"))
            }
        }
    }(c));
    return{outer: e, coordinate: d}
}
function searechTrafficByPlacesDom(b) {
    var c = b.prevEle;
    var a = b.nextEle;
    var d;
    if (c && c.coordinate && a.coordinate && a.outer.length > 0) {
        c.coordinate = InnTwoMapCore.createPoint(c.coordinate.split(",")[0], c.coordinate.split(",")[1]);
        a.coordinate = InnTwoMapCore.createPoint(a.coordinate.split(",")[0], a.coordinate.split(",")[1]);
        d = a.outer.find(".create-itinerary-wayico").attr("way");
        toCountDisDuration({way: Number(d), wayEle: a.outer.find(".create-itinerary-wayico"), prevPoint: c.coordinate, point: a.coordinate, callback: function (e) {
            fillDrivingResult(e);
            calculateAmountDistanceDuration(window.nowSchduleIndex);
            calculateAmountDistanceDuration(window.nowSchduleIndex + 1);
            SaveEditorItinerary();
            drawLinesByfacePoints();
            if (b.callBack) {
                b.callBack()
            }
        }})
    } else {
        a.outer.find(".trip-schedule-items-distance").text("");
        a.outer.find(".traffic-details-menu").hide();
        a.outer.find(".trip-schedule-distance-duration").text("");
        a.outer.find(".trip-schedule-places-line").text("");
        drawLinesByfacePoints();
        if (b && b.notRecalculate) {
            b.notRecalculate()
        }
        if (b.callBack) {
            b.callBack()
        }
    }
}
function scheduleWrapperScorller() {
    tripScheduleScroll("tripScheduleScrollContainer" + (window.nowSchduleIndex + 1), $(".custom-scroll-bar-container").eq(window.nowSchduleIndex), $("#customScrollBar" + (window.nowSchduleIndex + 1)))
}
function removePlaceFromSchedule(a) {
    var f = $(a).parents(".trip-schedule-item-outer");
    var j = fullFindPrev(f);
    var d = fullFindNext(f);
    window.notCoordinate = true;
    setTimeout(function () {
        window.notCoordinate = false
    }, 100);
    var e = false;
    searechTrafficByPlacesDom({prevEle: j, nextEle: d, notRecalculate: function () {
        e = true;
        if (d.outer && d.coordinate) {
            d.outer.find(".trip-schedule-items-distance").text("");
            d.outer.find(".trip-schedule-places-line").text("")
        }
    }});
    var b = $(".trip_shchedule_sight_spot_close").index($(a));
    var g = $(".placeInfoId").eq(b).text();
    var h = $(".placePoint").eq(b).text();
    var i = $(a).parents(".trip_schedule_sight_spot_container").children(".trip_shchedule_sight_spot_name").text();
    removeMarkerSelectFlag(h, g, i);
    $(a).parents(".trip-schedule-item-outer").remove();
    scheduleWrapperScorller();
    if (e) {
        calculateAmountDistanceDuration(window.nowSchduleIndex);
        SaveEditorItinerary();
        drawLinesByfacePoints()
    }
    var c = $(".trip_schedule_sightspots_container").eq(window.nowSchduleIndex).children(".trip-schedule-item-outer").length;
    if (c < 1) {
        $(".schedule-item-linkprev").eq(window.nowSchduleIndex).hide()
    }
    setItineraryItemFirstHide();
    mapPlaceAdd.resetorignAndDestination()
}
window.SightSpotItemClick = function (a) {
    if (window.notCoordinate) {
        return
    }
    var b = $(a).children(".placeInfoId").text();
    $(".home_place_marker,.ordinary_marker_class").each(function () {
        var c = $(this).find(".place_marker_json_data").text();
        if (c) {
            c = JSON.parse(c);
            if (c.placeInfoId == b) {
                $(this).click();
                if (c.point) {
                    inntwoMap.panTo(InnTwoMapCore.createPoint(c.point.lng, c.point.lat))
                } else {
                    if (c.lng && c.lat) {
                        inntwoMap.panTo(InnTwoMapCore.createPoint(c.lng, c.lat))
                    }
                }
                return
            }
        }
    })
};
function registerEditorAndSave() {
    var a = -1;
    $(".trip_schedule_sightspot_edit_btn").unbind("click").click(function () {
        a = $(".trip_schedule_sightspot_edit_btn").index($(this));
        $(".trip_schedule_editor_save_outer").eq(a).show();
        $(this).hide();
        $(".trip_schedule_sight_spot_editor_remark").eq(a).show().focus();
        scheduleWrapperScorller()
    });
    $(".trip_schedule_palce_remark_save_botton").unbind("click").click(function () {
        var b = $(".trip_schedule_palce_remark_save_botton").index($(this));
        $(".trip_schedule_sight_spot_editor_remark").eq(b).hide();
        $(this).parents(".trip_schedule_editor_save_outer").hide();
        $(".trip_schedule_sightspot_edit_btn").eq(b).show();
        scheduleWrapperScorller()
    })
}
var originPlaceNameOlder;
function regidterNowRemarkerUpdate() {
    $(".trip_schedule_scroll_container,.custom-scroll-bar-container").height(windHeight - 143);
    $(window).resize(function () {
        windHeight = $(this).height();
        $(".trip_schedule_scroll_container,.custom-scroll-bar-container").height(windHeight - 143);
        scheduleWrapperScorller()
    });
    $("#addMemoClick").unbind("click").click(function () {
        var h = $(".schedule_remark_view").eq(window.nowSchduleIndex);
        var g = h.attr("data-remark");
        $(".schedule-remark-wrapper").show();
        try {
            g = JSON.parse(g)
        } catch (c) {
        }
        createItinerary.scheduleDescription.setContent(typeof g.Description !== "undefined" ? g.Description : g);
        var f = $("#roudeSituation").val(typeof g.Route !== "undefined" ? g.Route : "");
        var a = $("#attractionSituation").val(typeof g.Attraction !== "undefined" ? g.Attraction : "");
        var b = $("#delicacySituation").val(typeof g.Delicacy !== "undefined" ? g.Delicacy : "");
        var d = $("#livingSituation").val(typeof g.Living !== "undefined" ? g.Living : "");
        $("#scheduleRemarkEditorWrapper").unbind("click").click(function (e) {
            e.stopPropagation()
        });
        $(".schedule-remark-wrapper").unbind("click").click(function () {
            $(this).hide()
        });
        $("#remarkCancelBtn").unbind("click").click(function () {
            $(".schedule-remark-wrapper").hide()
        });
        $("#remarkSaveBtn").unbind("click").click(function () {
            var l = createItinerary.scheduleDescription.getContent();
            var k = f.val();
            var e = a.val();
            var i = b.val();
            var j = d.val();
            var n = {Description: l, Route: k, Attraction: e, Delicacy: i, Living: j};
            h.attr("data-remark", JSON.stringify(n));
            var m;
            if (n.Description != "") {
                m = n.Description
            } else {
                if (n.Route != "") {
                    m = n.Route
                } else {
                    if (n.Attraction != "") {
                        m = n.Attraction
                    } else {
                        if (n.Delicacy != "") {
                            m = n.Delicacy
                        } else {
                            m = n.Living
                        }
                    }
                }
            }
            h.html(m);
            $(".schedule-remark-wrapper").hide();
            SaveEditorItinerary()
        });
        $(".trip_schedule_remark_input").eq(window.nowSchduleIndex).show();
        $(".schedule_remark_view").eq(window.nowSchduleIndex).focus();
        scheduleWrapperScorller()
    });
    $(".scheduleRemark-closeButton").click(function () {
        $(".schedule_remark_view").eq(window.nowSchduleIndex).attr("data-remark", "").html("");
        $(".trip_schedule_remark_input").eq(window.nowSchduleIndex).hide()
    });
    $(".trip_schedule_remark_input").unbind("mouseenter").mouseenter(function () {
        $(this).children(".scheduleRemark-closeButton").show()
    }).unbind("mouseleave").mouseleave(function () {
        $(this).children(".scheduleRemark-closeButton").hide()
    })
}
(function () {
    $(".trip_schedule_place_button").live("click", function () {
        $("#customPlacePopup").modal();
        $("#centerCustomeAreaSaveBtn").unbind("click").click(function () {
            var a = validateCustomeNameEmpty();
            if (a) {
                saveCustomePlace()
            }
            return a
        });
        $("#centerCustomeAreaName").val("");
        document.getElementById("customPlaceSelectChange").value = "3";
        $("#customPlaceSelectChange").change();
        $("#placeFeeInput").val("");
        customPlaceNameInput.setInputValue("");
        $("#centerCustomeAreaContent").val("").text("")
    })
})();
(function () {
    $("#customPlaceSelectChange").unbind("change").change(function () {
        var a = $(this).val();
        a = parseInt(a);
        var b = $(".custom-place-attraction");
        var d = $("#placeFeeTitle");
        var c = $("#placeFeeInput");
        InnTwoTools.PlaceParentCategory({category: a, attraction: function () {
            b.show();
            d.text("门票").show().css({"margin-left": "40px"});
            c.addClass("marginLeft40 marginTop5");
            c.show();
            $("#placeFeeUnit").show()
        }, hotel: function () {
            b.hide();
            d.text("价格").show().css({"margin-left": "0"});
            c.removeClass("marginLeft40 marginTop5");
            c.show();
            $("#placeFeeUnit").show()
        }, delicacy: function () {
            b.hide();
            d.text("人均").show().css({"margin-left": "0"});
            c.removeClass("marginLeft40 marginTop5");
            c.show();
            $("#placeFeeUnit").show()
        }, other: function () {
            b.hide();
            d.text("费用").show().css({"margin-left": "0"});
            c.removeClass("marginLeft40 marginTop5");
            c.show();
            $("#placeFeeUnit").show()
        }, destination: function () {
            b.hide();
            d.hide();
            c.hide();
            $("#placeFeeUnit").hide()
        }});
        $("#centerCustomeDuration,#placeFeeInput").val("")
    })
})();
(function () {
    var a = $("#customAddressAlarmMessage");
    $("#centerCustomeAreaAddress").unbind("blur").blur(function () {
        var c = $(this).val();
        if (c == "" || c.trim() == "") {
            a.text("请输入地址！")
        } else {
            a.text("")
        }
    });
    var b = $("#customAlarmMessage");
    $("#centerCustomeAreaName").unbind("blur").blur(function () {
        var c = $(this).val();
        if (c == "" || c.trim() == "") {
            b.text("请输入名称！")
        } else {
            b.text("")
        }
    })
})();
function validateCustomeNameEmpty() {
    var d = $("#customAlarmMessage");
    var c = $("#centerCustomeAreaName").val();
    if (c == "" || c.trim() == "") {
        d.text("请输入名称！");
        return false
    }
    var a = $("#customAddressAlarmMessage");
    var b = $("#centerCustomeAreaAddress").val();
    if (b == "" || b.trim() == "") {
        a.text("请输入地址！").show();
        return false
    }
    a.text("");
    d.text("");
    return true
}
function saveCustomePlace(k) {
    var a = $("#centerCustomeAreaAddress");
    var j = a.attr("data-address");
    var h = a.val();
    var b = $("#centerCustomeAreaName").val();
    var c = $.trim($("#centerCustomeAreaContent").val());
    var e = InnTwoTools.getIdentifyStringByDate();
    var d = $("#customPlaceSelectChange").val();
    var m = $("#centerCustomeDuration").val();
    var l = $("#placeFeeInput").val();
    if (k && k.outer) {
        k.outer.find(".trip_shchedule_sight_spot_name").text(b);
        k.outer.find(".trip_schedule_sight_spot_editor_remark").text(c);
        k.outer.find(".duration").text(m);
        k.outer.find(".parentCategory").text(m);
        k.outer.find(".schedule-item-during").text(m);
        k.outer.find(".placeToll").text(l);
        k.outer.find(".parentCategory").text(d);
        var i = a.attr("data-province");
        var f = a.attr("data-city");
        var g = a.attr("data-district");
        if (i != "") {
            k.outer.find(".placeProvince").text(i)
        }
        if (f != "") {
            k.outer.find(".placeCity").text(f)
        }
        if (g != "") {
            k.outer.find(".placeDistrict").text(g)
        }
        if (m && parseFloat(m) > 0 && d == 0) {
            k.outer.find(".schedule-item-duration-suggestion").show()
        } else {
            k.outer.find(".schedule-item-duration-suggestion").hide()
        }
    }
    if (j.trim() == h.trim()) {
        SaveEditorItinerary();
        calculateTotlalStayDuration(nowSchduleIndex);
        return true
    }
    inntwoMapSearch.addressSearch(h, inntwoMap, function (u) {
        var q = "";
        var r = {};
        if (u.getNumPois() > 0) {
            r = u.getPoi(0).point;
            inntwoMap.setCenter(r);
            q = r.lng + "," + r.lat;
            if (k && k.outer) {
                var t = fullFindPrev(k.outer);
                var s = t.coordinate;
                var o = fullFindNext(k.outer);
                var p = o.outer;
                var n = o.coordinate;
                newAddScheduleCalculate({preveCoordinate: s, coordinate: q, dayIndex: window.nowSchduleIndex, outer: k.outer, nextOuter: p, nextCoordinate: n})
            }
        }
        inntwoMapSearch.getAddressByPoint(r, function (z) {
            if (z.province == z.city) {
                z.city = ""
            }
            var v = InnTwoTools.format("{0}{1}{2}{3}{4}", z.province, z.city, z.district, z.street, z.streetNumber);
            destinationAddOverlayInMap({pointPar: r, district: z.district ? z.district : "", city: z.city, map: inntwoMap, province: z.province, tempSearchContent: b, identifyParam: e, address: v, price: l, duration: m, parentCategory: document.getElementById("customPlaceSelectChange").value});
            setTimeout(function () {
                inntwoMapSearch.addCloseMarkerBtn()
            }, 100);
            addSelectedForMarker();
            if (k && k.outer) {
                var x = k.outer.find(".placePoint").text();
                k.outer.find(".placePoint").text(q);
                k.outer.find(".placeProvince").text(u.province);
                k.outer.find(".placeCity").text(u.city);
                k.outer.find(".placeDistrict").text(u.district ? u.district : "");
                k.outer.find(".placeInfoId").text(e);
                k.outer.find(".data-address").text(v);
                mapPlaceAdd.resetorignAndDestination();
                if (x && (x.trim())) {
                    removeMarkerSelectFlag(x, "", "")
                }
            } else {
                $(".custome-place-favorite").last().click();
                var w = $(".trip_schedule_sightspots_container").eq(window.nowSchduleIndex).find(".trip_schedule_sight_spot_editor_remark").last();
                var y = $("#centerCustomeAreaContent").val();
                w.val(y).text(y)
            }
            customePlaceEditorClickEvent();
            SaveEditorItinerary()
        })
    });
    return true
}
function customePlaceEditorClickEvent() {
    $(".customePlace-editorBtn").unbind("click").click(function () {
        bindCustomPlaceEditorBtnClick(this);
        window.notCoordinate = true;
        setTimeout(function () {
            window.notCoordinate = false
        }, 100)
    })
}
var tripScheduleCustomOuter = null;
function bindCustomPlaceEditorBtnClick(c) {
    $("#customPlacePopup").modal();
    $("#centerCustomeDuration").attr("placeholder", "0.0");
    var f = $(c).parent().children(".parentCategory").text();
    var b = document.getElementById("customPlaceSelectChange");
    InnTwoTools.PlaceParentCategory({category: f, attraction: function () {
        b.value = "0"
    }, hotel: function () {
        b.value = "1"
    }, delicacy: function () {
        b.value = "2"
    }, other: function () {
        b.value = "3"
    }, destination: function () {
        b.value = "4"
    }});
    $("#customPlaceSelectChange").change();
    var h = $(c).parent().children(".placeToll").text();
    $("#placeFeeInput").val(h).parent().show();
    var d = $(c).parent().children(".trip_shchedule_sight_spot_name").text();
    $("#centerCustomeAreaName").val(d.trim());
    $("#centerCustomeAreaNameHidden").val(d.trim());
    var a = $(c).parent().children(".data-address").text();
    $("#centerCustomeAreaAddress").attr({"data-address": a});
    customPlaceNameInput.setInputValue(a);
    var e = $(c).parent().next().val();
    $("#centerCustomeAreaContent").val(e).text(e);
    var g = $(c).parent().find(".schedule-item-during").text();
    $("#centerCustomeDuration").val(g);
    tripScheduleCustomOuter = $(c).parents(".trip-schedule-item-outer");
    $("#centerCustomeAreaSaveBtn").unbind("click").click(function () {
        var i = validateCustomeNameEmpty();
        if (i) {
            saveCustomePlace({outer: tripScheduleCustomOuter, duration: $("#centerCustomeDuration").val()})
        }
        return i
    })
}
var timeOut = 50000;
var isSaveSuccess = false;
var saveItineraryTimeOut = false;
var itinerarySaveTimeOutInterval = null;
function saveScheduleSketch() {
    $("#SaveSketch").click(function () {
        var a = $("#ScheduleDetailsOuter").val();
        if (!a || !(a.trim())) {
            InnTwoTools.Alert("请输入旅行名称", function () {
                $("#ScheduleDetailsOuter").focus()
            });
            return
        }
        InnTwoTools.IsLogined({logined: function () {
            saveItineraryBefore()
        }, nonLogin: function () {
            inntwoBase.popupUserLogin();
            inntwoBase.loginSuccess = function () {
                saveItineraryBefore()
            }
        }})
    })
}
function saveItineraryBefore() {
    isSaveSuccess = false;
    itinerarySaveTimeOutInterval = setTimeout(function () {
        if (!isSaveSuccess) {
            $("#SaveSketch").removeAttr("disabled").val("保     存");
            InnTwoTools.mapLoadingNotify({message: "&nbsp;&nbsp;" + inntwoBase.AlarmMessage.SAVE_DATA_TIMEOUT});
            $("#notifyText img").hide();
            $("#stayEditorSchedule").click(function () {
                InnTwoTools.mapLoadingNotify({option: "close"})
            });
            setTimeout(function () {
                InnTwoTools.mapLoadingNotify({option: "close"})
            }, 3000);
            scheduleJsonHash = typeof scheduleJsonHash == "undefined" ? 0 : scheduleJsonHash + 1;
            travelJsonHash = typeof travelJsonHash == "undefined" ? 0 : travelJsonHash + 1;
            saveItineraryTimeOut = true;
            clearTimeout(itinerarySaveTimeOutInterval)
        }
    }, timeOut);
    $("#SaveSketch").attr({disabled: "disabled"}).val("保存中...");
    setTimeout(function () {
        InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SAVE_DATA});
        itineraryFee.collecteItineraries();
        window.globalItinerary = parserScheduleJson();
        window.globalItinerary = itineraryFee.itineraryAdditionTrafficMsg(globalItinerary);
        window.globalItinerary.TravelItems = getAllTravel();
        window.globalItinerary.ItineraryCover = $(".trip-schedule-cover-image").attr("src");
        ajaxRequestSaveSchedule(globalItinerary)
    }, 1000)
}
function parserScheduleJson() {
    var k = $.trim($("#ScheduleDetailsOuter").val());
    var e = {};
    e.ScheduleName = k;
    var f = $("#itinerStatusHidden").val();
    if (f) {
        e.ItineraryStatus = f
    }
    if (scheduleDateArray.length < 1) {
        scheduleDateArray[0] = InnTwoTools.getNowDateStr()
    }
    var b = scheduleDateArray[0].split("-");
    var h = new Date();
    h.setFullYear(Number(b[0]), Number(b[1]) - 1, Number(b[2]));
    var c = Number(h).toString();
    var g = InnTwoTools.ChangeDateFormat(c);
    e.StartDate = g;
    e.Days = scheduleDateArray.length;
    e.ScheduleItems = [];
    var a = $(".trip_schedule_container_item").length;
    for (var d = 0; d < a; d++) {
        var j = getSingleDaySchedule(d);
        e.ScheduleItems.push(j)
    }
    e.IgnoreStartDate = scheduleIgnoreDateTime ? 1 : 0;
    e.Days = e.ScheduleItems.length;
    e.EndDate = InnTwoTools.DateAddday(e.StartDate, e.Days);
    e.SeqId = scheduleId;
    return computeAmountIdsDura(e)
}
function getSingleDaySchedule(i) {
    var B = $(".schedule_remark_view").eq(i);
    var C = {};
    C.Date = scheduleDateArray[i];
    C.ScheduleItemPlaces = [];
    C.Remark = B.attr("data-remark") === undefined ? "" : B.attr("data-remark");
    C.RealRemark = $.trim(B.text());
    var z;
    if (i > 0) {
        z = $(".trip_schedule_sightspots_container").eq(i - 1).find(".trip-schedule-item-outer")
    }
    (function y(j) {
        if (j > 1 && z.length < 1) {
            z = $(".trip_schedule_sightspots_container").eq(j - 2).find(".trip-schedule-item-outer");
            if (z.length < 1) {
                y(j - 1)
            }
        }
    }(i));
    var q = $(".trip_schedule_sightspots_container").eq(i).find(".trip-schedule-item-outer");
    if (q.length > 0) {
        var a = function (j) {
            var p = takePlaceItemMessage(j);
            if (p) {
                if (p.Category == "customePlace") {
                    p.Category = 6
                }
                C.ScheduleItemPlaces.push(p)
            }
        };
        var G = [];
        var m, I;
        var o = q.length;
        for (var k = 0; k < o; k++) {
            m = q.eq(k);
            a(m);
            var v, w, n, H, l, u, s;
            n = m.find(".placePoint").text();
            var f;
            if (k > 0) {
                v = q.eq(k - 1)
            } else {
                v = z ? z.last() : null
            }
            f = m.find(".trip-schedule-distance-duration").text();
            var c = f.split(",")[0];
            var g = f.split(",")[1];
            w = v ? v.find(".placePoint").text() : "";
            l = m.find(".trip-schedule-places-line").text();
            if (typeof l !== "undefined" && l != "") {
                l = JSON.parse(l)
            } else {
                if (w && n) {
                    var x = InnTwoMapCore.createPoint(w.split(",")[0], w.split(",")[1]);
                    var t = InnTwoMapCore.createPoint(n.split(",")[0], n.split(",")[1]);
                    l = [x, t]
                }
            }
            if (w && n) {
                H = m.find(".create-itinerary-wayico").attr("way");
                H = H ? H : "0";
                u = m.find(".create-itinerary-wayico").attr("data-policy");
                s = m.find(".create-itinerary-wayico").attr("data-plan");
                u = u ? u : 0;
                s = s ? s : 0;
                I = {Distance: c ? c : 0, Duration: g ? g : 0, Line: l, Points: w + ";" + n, WayCode: H, TrafficPolicy: u, TransitPlanIndex: s};
                G.push(I)
            } else {
                I = {Distance: 0, Duration: 0, Line: "", Points: "", WayCode: 0, TrafficPolicy: 0, TransitPlanIndex: 0};
                G.push(I)
            }
        }
    } else {
    }
    C.Order = i + 1;
    var b = $(".driver-result-distance-duration").eq(i);
    var D = $(".day-total-drive-distance").eq(i).text();
    var E = $(".day-total-drive-duration").eq(i).text();
    var F = $(".day-total-duration").eq(i).text();
    var e = b.attr("disduration");
    C.JourneyDistance = "";
    C.JeriodDateTime = "";
    C.Distance = 0;
    C.Duration = 0;
    C.TotalStayDuration = 0;
    C.JourneyDistance = D;
    C.JeriodDateTime = E;
    C.TotalStayDuration = !F || !(F.trim()) ? 0 : F;
    if (typeof e !== "undefined") {
        var d = e.split(",")[0];
        var h = e.split(",")[1];
        C.Distance = d && d.trim() ? d : 0;
        C.Duration = h && h.trim() ? h : 0
    }
    var A = $.trim($(".schedule-road-toll").eq(i).val());
    C.RoadToll = A ? A : 0;
    C.PlacesTraffics = G;
    return C
}
function ajaxRequestSaveSchedule(b) {
    submitAjaxSaveItinerary(b, 0);
    var a = deleteImagesUrls.substr(1);
    inntwoBase.deletePicture(a, function () {
        a = ""
    })
}
function submitAjaxSaveItinerary(b, c) {
    var a = JSON.stringify(b);
    $.ajax({url: ajaxUrl.SaveItinery_Url, data: {itineraryViewModelstr: a, modifyType: c}, type: "post", success: function (d) {
        saveItineraryTimeOut = false;
        scheduleJsonHash = a.getHashCode();
        InnTwoTools.JsonDataCallback({data: d, success: function () {
            var e = "";
            if (d.Extension) {
                e = JSON.parse(d.Extension)
            }
            nearbySearch.saveSuccessful(e.SeqId)
        }, optionAction: function (f, e) {
            InnTwoTools.Alert(e.Message);
            $("#SaveSketch").removeAttr("disabled").val("保     存");
            InnTwoTools.mapLoadingNotify({option: "close"})
        }, unAuthorize: function () {
            inntwoBase.popupUserLogin();
            inntwoBase.loginSuccess = function () {
                ajaxRequestSaveSchedule(globalItinerary);
                $(".register-link").hide()
            };
            $("#SaveSketch").removeAttr("disabled").val("保     存")
        }})
    }})
}
function getPlacesDriveRute() {
    var c = [];
    if (!globalItinerary.ScheduleItems || globalItinerary.ScheduleItems.length < 1) {
        return c
    }
    for (var a = 0; a < globalItinerary.ScheduleItems.length; a++) {
        var e = globalItinerary.ScheduleItems[a];
        for (var b = 0; b < e.ScheduleItemPlaces.length; b++) {
            var d = e.ScheduleItemPlaces[b].PlacePoint;
            if (d) {
                d = d.split(",");
                if (d[0] && d[1]) {
                    d = InnTwoMapCore.createPoint(d[0], d[1]);
                    c.push(d)
                }
            }
        }
    }
    return c
}
var searchTrafficMsg = function (f, a) {
    if (!f) {
        a(null);
        return
    }
    if (f.points.length < 2) {
        var e = InnTwoMapCore.createPoint(f.points[0].split(",")[0], f.points[0].split(",")[1]);
        a([e]);
        return
    }
    var d = InnTwoMapCore.createPoint(f.points[0].split(",")[0], f.points[0].split(",")[1]);
    var c = InnTwoMapCore.createPoint(f.points[1].split(",")[0], f.points[1].split(",")[1]);
    var b = [d, c];
    InnTwoMapCore.trafficWayMapping({way: Number(f.wayCode), driving: function () {
        inntwoMapSearch.searchDistanceAndDatetime(d, c, function (h) {
            var g = h.getPlan(0).getRoute(0).getPath();
            a(g)
        }, inntwoMap)
    }, transit: function () {
        inntwoMapSearch.searchTransit({map: inntwoMap, callBack: function (k) {
            if (k) {
                var l = k.getPlan(0).getNumLines();
                var h = [];
                for (var g = 0; g < l; g++) {
                    var j = k.getPlan(0).getLine(g).getPath();
                    h = h.concat(j)
                }
                a(h)
            } else {
                a(b)
            }
        }, start: d, end: c})
    }, train: function () {
        a(b)
    }, plane: function () {
        a(b)
    }})
};
var trafficDatas = [];
function dayTrafficsSearch(b, a) {
    var d = 0;
    var c = function (e) {
        if (e) {
            trafficDatas = trafficDatas.concat(e)
        }
        d++;
        if (b.length == d) {
            a(trafficDatas);
            return
        }
        searchTrafficMsg(b[d], c)
    };
    searchTrafficMsg(b[d], c)
}
function getAllPlacesPoints(b) {
    var a = [];
    (function (d) {
        window.drawLineIndex = 0;
        var c = 0;
        var e = globalItinerary.ScheduleItems[c];
        var g = InnTwoTools.base64Decode(e.PlacesTraffics);
        if (!g) {
            d();
            return
        }
        g = JSON.parse(g);
        var f = function (h) {
            trafficDatas = [];
            a = a.concat(h);
            c++;
            if (c == globalItinerary.ScheduleItems.length) {
                d();
                return
            }
            e = globalItinerary.ScheduleItems[c];
            if (e.PlacesTraffics) {
                g = InnTwoTools.base64Decode(e.PlacesTraffics);
                g = JSON.parse(g);
                if (g.length > 0) {
                    dayTrafficsSearch(g, f)
                } else {
                    f([])
                }
            } else {
                f([])
            }
        };
        dayTrafficsSearch(g, f)
    })(function () {
        var d = "";
        for (var c = 0; c < a.length; c++) {
            d += ";" + a[c].lng + "," + a[c].lat
        }
        d = d.substring(1);
        b(d)
    })
}
function takePlaceItemMessage(d) {
    var e = {};
    e.PlaceName = $.trim($(d).find(".trip_shchedule_sight_spot_name").text());
    if (!e.PlaceName) {
        return null
    }
    var c = $.trim($(d).find(".numberOfActor").text());
    e.NumberOfActor = c ? c : 1;
    e.PlaceInfoId = $.trim($(d).find(".placeInfoId").text());
    e.Province = $.trim($(d).find(".placeProvince").text());
    e.City = $.trim($(d).find(".placeCity").text());
    e.District = $.trim($(d).find(".placeDistrict").text());
    e.PicUrl = $.trim($(d).find(".trip_schedule_sight_spot_img").find("img").attr("src"));
    e.Category = $.trim($(d).find(".categoryId").text());
    e.PlacePoint = $.trim($(d).find(".placePoint").text());
    e.Remark = $.trim($(d).find(".trip_schedule_public_editor").val());
    e.Duration = $.trim($(d).find(".schedule-item-during").text());
    e.DelicacyCommentNumber = $.trim($(d).find(".schedule-item-comments").text());
    e.PlaceParentCategory = $.trim($(d).find(".parentCategory").text());
    e.IsCustom = $.trim($(d).find(".iscustom").text());
    var b = $.trim($(d).find(".grade").text());
    InnTwoTools.placeCategory({category: e.Category, hotel: function () {
        e.Grade = b
    }, delicacy: function () {
        e.Grade = b
    }, custome: function () {
        e.Grade = b
    }, attraction: function () {
        e.Grade = b ? b.length : 0
    }});
    var a = $.trim($(d).find(".placeToll").text());
    e.PlaceExpense = a ? a : 0;
    e.Address = $.trim($(d).find(".data-address").text());
    return e
}
function itineraryNotEmpty(a) {
    var b = a || globalItinerary;
    if (typeof b == "undefined" || !b || typeof b.ScheduleItems == "undefined" || !b.ScheduleItems) {
        return false
    }
    if (b.ScheduleItems.length > 0 && !(b.ScheduleItems.length == 1 && b.ScheduleItems[0].ScheduleItemPlaces.length == 0 && !$.trim(b.ScheduleName))) {
        return b
    }
    return false
}
function bindDataByItineraryJson() {
    $("#tripScheduleContainer").inntwoAlterableTabs({tabTotal: globalItinerary.ScheduleItems.length});
    var f = true;
    for (var h = 0; h < globalItinerary.ScheduleItems.length; h++) {
        var o = globalItinerary.ScheduleItems[h];
        if (o.PlacesTraffics && o.PlacesTraffics.length > 0) {
            f = false
        }
        if (o.ScheduleItemPlaces && o.ScheduleItemPlaces.length > 0) {
            for (var e = 0; e < o.ScheduleItemPlaces.length; e++) {
                var l = o.ScheduleItemPlaces[e];
                var b = l.Duration;
                var m = globalItinerary.ScheduleItems[h].ScheduleItemPlaces[e];
                InnTwoTools.placeCategory({category: l.Category, hotel: function () {
                    m.notShowSuggestion = true;
                    m.notShowComment = true
                }, delicacy: function () {
                    m.notShowSuggestion = true;
                    m.notShowComment = false
                }, custome: function () {
                    m.editorCustome = true;
                    if (m.PlaceInfoId == "") {
                        m.PlaceInfoId = InnTwoTools.format("custome-place-{0}{1}", h, e)
                    }
                    m.PicUrl = "/img/asset2/customPlaceImg.jpg";
                    if (typeof b === "undefined" || !b || Number(b) < 1) {
                        m.notShowSuggestion = true
                    } else {
                        m.notShowSuggestion = false
                    }
                    m.notShowComment = true
                }, attraction: function () {
                    if (typeof b === "undefined" || !b || Number(b) < 1) {
                        m.Duration = "2";
                        m.notShowSuggestion = false
                    }
                    m.notShowComment = true;
                    var i = "";
                    if (l.Grade) {
                        for (var d = 0; d < l.Grade; d++) {
                            i += "A"
                        }
                    }
                    globalItinerary.ScheduleItems[h].ScheduleItemPlaces[e].Grade = i
                }})
            }
        }
    }
    $("#schedulesContainer").html("");
    editItinerary.schedules(globalItinerary.ScheduleItems);
    $(".schedule-item-linkprev").show().first().hide();
    oldItineraryName = globalItinerary.ScheduleName;
    $("#ScheduleDetailsOuter").val($.trim(globalItinerary.ScheduleName));
    $("#itinerStatusHidden").val(globalItinerary.ItineraryStatus);
    var c = globalItinerary.ScheduleItems.length;
    $("#createItineraryDayCount").text(c);
    if (itineraryNotEmpty(globalItinerary)) {
        customePlaceEditorClickEvent();
        $(".trip_schedule_container_item").hide();
        $(".trip_schedule_container_item").eq(0).show();
        $("#SaveItineraryButton").show();
        regidterNowRemarkerUpdate();
        InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_PLACE});
        (function () {
            $(".trip_schedule_sight_spot_item").each(function () {
                var t = $(this).children(".placePoint").text();
                if (t.indexOf(",") > -1) {
                    var d = InnTwoMapCore.createPoint(t.split(",")[0], t.split(",")[1]);
                    var k = {};
                    k.CategoryId = k.category = $(this).children(".categoryId").text();
                    k.placeName = $.trim($(this).children(".trip_shchedule_sight_spot_name").text());
                    k.imgUrl = $(this).children(".trip_schedule_sight_spot_img").children("img").attr("src");
                    k.placeInfoId = $(this).children(".placeInfoId").text();
                    k.remarkerCategory = $(this).children(".categoryRemarks").text();
                    k.price = $(this).children(".placeToll").text();
                    k.grade = $(this).children(".grade").text();
                    k.province = $(this).children(".placeProvince").text();
                    k.city = $(this).children(".placeCity").text();
                    k.address = $(this).children(".data-address").text();
                    k.district = $(this).children(".placeDistrict").text();
                    k.IsCustom = $(this).children(".iscustom").text();
                    k.duration = $(this).find(".schedule-item-during").text();
                    k.delicacyCommentNumber = $(this).find(".schedule-item-comments").text();
                    k.point = d;
                    k.contianerClassName = inntwoMapSearch.getMarkerClassName(k.category);
                    var p = JSON.stringify(k);
                    k.jsonData = p;
                    k.pointStr = t;
                    k.parentCategory = $(this).children(".parentCategory").text();
                    k.map = inntwoMap;
                    k.isCustomed = false;
                    var j = templateUrl.mainTemplate.placeOverlaySelector;

                    function i() {
                        j = templateUrl.mainTemplate.cityMarkerOverlayUrl;
                        k.editorCustome = true;
                        k.notShowComment = true;
                        k.notShowSuggestion = true;
                        k.isCustomed = true;
                        k.editorCustome = true;
                        k.grade = "";
                        k.type = "customePlace";
                        k.showWord = k.placeName;
                        k.lng = d.lng;
                        k.lat = d.lat;
                        k.innerHtml = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: j, json: k})
                    }

                    InnTwoTools.PlaceParentCategory({category: k.parentCategory, hotel: function () {
                        j = templateUrl.mainTemplate.hotelOverlaySelector;
                        k.notShowComment = true;
                        k.notShowSuggestion = true;
                        k.editorCustome = false;
                        k.type = "hotel";
                        k.innerHtml = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: j, json: k})
                    }, delicacy: function () {
                        k.notShowComment = false;
                        k.notShowSuggestion = true;
                        k.editorCustome = false;
                        k.type = "delicacy";
                        k.innerHtml = Mustache.render($("#deliciousMarkerMessageBox").html(), k)
                    }, other: function () {
                        i()
                    }, attraction: function () {
                        k.notShowComment = true;
                        k.notShowSuggestion = false;
                        k.editorCustome = false;
                        k.type = "attraction";
                        k.innerHtml = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: j, json: k})
                    }});
                    if (k.IsCustom == "1") {
                        i()
                    }
                    InnTwoMapCore.addMarkerInMapByOverLay(k);
                    if (k.IsCustom == "1") {
                        setTimeout(function () {
                            inntwoMapSearch.addCloseMarkerBtn()
                        }, 100)
                    }
                }
            });
            inntwoMapSearch.setMarkerClick();
            if (isCancelEdit != "True") {
                $(".search_place_overlay_place_favorite,.custome-place-favorite").append("<span class='add-placeto-schedule'>1</span>");
                $(".place_marker_inner_html").append("<div class='place-selected-schedule-flag create-itinerary-image'></div>")
            }
            inntwoMapSearch.mapClickHideOverlay(inntwoMap);
            if (callBack) {
                callBack()
            }
        })();
        customPlaceMarkerListener();
        InnTwoTools.mapLoadingNotify({option: "close"});
        placeFavoriteListener();
        mapPlaceAdd.resetorignAndDestination();
        var q = InnTwoTools.ChangeDateFormat(globalItinerary.StartDate);
        if (!q) {
            q = InnTwoTools.getNowDateStr
        }
        scheduleDateArray = [];
        for (var g = 0; g < globalItinerary.ScheduleItems.length; g++) {
            scheduleDateArray.push(q);
            q = InnTwoTools.DateAddday(q, 1)
        }
        showNowTripSchedule();
        situationSet();
        if ($.trim($(".trip_schedule_place_remark_span").eq(0).text()) != "") {
            $(".trip_schedule_remark_input").eq(0).show()
        }
        $(".trip_schedule_scroll_container").each(function () {
            var d = $(".trip_schedule_scroll_container").index(this);
            $(this).attr({id: "tripScheduleScrollContainer" + (d + 1)});
            $(".schedule-custom-scroll-bar").eq(d).attr({id: "customScrollBar" + (d + 1)});
            $(".custom-scroll-bar-container").eq(d).attr({id: "customScrollBarContainer" + (d + 1)});
            tripScheduleScroll($(this).attr("id"), $("#customScrollBarContainer" + (d + 1)), $("#customScrollBar" + (d + 1)));
            var i = $(this).find(".schedule_remark_view");
            if (i.text()) {
                i.parent().show()
            }
        });
        var a = window.localStorage.getItem(nearbySearch.scheduleDayAnchorPoint);
        if (a) {
            var n = JSON.parse(a);
            if (n.itineraryId == globalItinerary.SeqId) {
                $("#tripScheduleContainer").inntwoAlterableTabs(n.day);
                window.nowSchduleIndex = n.day - 1;
                showNowTripSchedule();
                situationSet();
                window.localStorage.removeItem(nearbySearch.scheduleDayAnchorPoint)
            }
        } else {
            if (globalItinerary.IgnoreStartDate) {
                IgnoreScheduleDatetime()
            } else {
                setTimeout(function () {
                    var d = InnTwoTools.ChangeDateFormat(globalItinerary.StartDate);
                    setOrignDate(d)
                }, 600)
            }
        }
        if (f) {
            modifyItineraryCalculaDisDur()
        } else {
            setItineraryPlacesTraffic()
        }
        setScheduleItemSortable();
        setPlacesCloseBtn();
        setItineraryItemFirstHide();
        changeRadiusSearchPlace();
        trafficDdlClick();
        planIcoChange();
        bodyClick();
        drawRouteEveryPlace(function () {
            InnTwoTools.mapLoadingNotify({option: "close"});
            drawLined = true
        });
        mapPlaceAdd.addedSchedulePopup()
    }
    if (globalItinerary.TravelItems && globalItinerary.TravelItems.length > 0) {
        var s = InnTwoTools.getTemplateByMustache({url: templateUrl.tripDetailsTemplate.Url, selector: templateUrl.tripDetailsTemplate.travelEditorTemplate, json: globalItinerary});
        s = $.trim(s);
        if (s) {
            $(".trip-pictureword-upload-scroll").html(s);
            $(".trip-picture-empty").hide()
        }
        setInitPictuePlaceSelected();
        setPictureWordCleanWordInitial();
        photoDestinationSelect();
        scheduleWrapperScorller();
        var r = $(".trip_schedule_sight_spot_item").length;
        if (r > 0) {
            $(".search-map-switch-button").click()
        }
        $(".trip-picture-remark-input").each(function () {
            var d = $(this).text();
            d = InnTwoTools.ClearHtmlFromString(d);
            $(this).text(d)
        })
    }
    InnTwoTools.mapLoadingNotify({option: "close"});
    scheduleIgnoreDateTime = globalItinerary.IgnoreStartDate;
    mapPlaceAdd.setScheduleNumberDdl();
    $("#SaveSketch").removeAttr("disabled");
    window.localStorage.setItem(globalItinerary.SeqId, JSON.stringify(globalItinerary));
    itineraryFee.collecteItineraries()
}
function DestinationNotEmpty() {
    var f = false;
    if (this.ScheduleItemPlaces.length > 0) {
        var c = this.ScheduleItemPlaces.length;
        var b = false;
        for (var a = 0; a < c; a++) {
            var e = this.ScheduleItemPlaces[a].PlaceName;
            if (this.Destination.PlaceName == e) {
                b = true;
                break
            }
        }
        if (!b) {
            if (this.Destination && this.Destination.PlaceName) {
                f = this.Destination
            }
        }
    } else {
        if (this.Destination && this.Destination.PlaceName) {
            f = this.Destination
        }
    }
    return f
}
function setItineraryTravelHash() {
    var a = parserScheduleJson();
    if (!a) {
        return
    }
    var b = JSON.stringify(a.ScheduleItems);
    scheduleJsonHash = b.getHashCode();
    a.TravelItems = getAllTravel();
    var c = JSON.stringify(a.TravelItems);
    travelJsonHash = c.getHashCode()
}
function showPlaceDetailsAddress() {
    var j = $(".travel-belong-place").length;
    for (var e = 0; e < j; e++) {
        var c = $(".travel-belong-place").eq(e).val();
        if (c) {
            var h = $(".placeInfoId").length;
            for (var f = 0; f < h; f++) {
                var i = $(".placeInfoId").eq(f).text();
                if (i) {
                    if (i == c) {
                        var g = $(".placeInfoId").eq(f).parent();
                        var d = g.children(".placeProvince").text();
                        var b = g.children(".placeCity").text();
                        var m = g.children(".trip_shchedule_sight_spot_name").text();
                        m = $.trim(m);
                        var a = d + b + m;
                        $(".placeDetailsAddress").eq(e).html("<i class='icon-map-marker icon-white'></i>&nbsp;&nbsp;" + a);
                        $(".trip-schedule-items-image").eq(e).attr({alt: a ? a : m, title: a ? a : m});
                        break
                    }
                }
            }
        }
    }
}
var polyLines = {};
function drawRouteEveryPlace(a) {
    var n = getPlacesDriveRute();
    if (n.length > 1) {
        sideOfRoadAttraction.pointArray = [];
        InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_ROUTE});
        inntwoMap.setViewport(n);
        if (typeof globalItinerary.Points != "undefined" && globalItinerary.Points) {
            var q = globalItinerary.Points.split(";");
            for (var e = 0; e < q.length; e++) {
                var s = q[e].split(",");
                sideOfRoadAttraction.pointArray.push(InnTwoMapCore.createPoint(s[0], s[1]))
            }
            InnTwoMapCore.drawPolyLine(sideOfRoadAttraction.pointArray, {strokeWeight: 5, strokeOpacity: 1, strokeColor: "#00a1cb", map: inntwoMap});
            InnTwoTools.mapLoadingNotify({option: "close"});
            return
        }
        var c = ["#00a1cb", "#7db500", "#ff6600"];
        var b = 0;
        for (var f = 0; f < globalItinerary.ScheduleItems.length; f++) {
            var r = globalItinerary.ScheduleItems[f];
            if (!r || !r.PlacesTraffics || r.PlacesTraffics.length < 1) {
                continue
            }
            for (var g = 0; g < r.PlacesTraffics.length; g++) {
                var p = [];
                var u = r.PlacesTraffics[g];
                if (!u || !u.Line) {
                    continue
                }
                if (u.Line.length < 1) {
                    if (u.Points) {
                        var m = u.Points.split(";");
                        if (m.length > 1) {
                            var h = m[0];
                            var l = m[1];
                            p = [h, l]
                        }
                    }
                } else {
                    p = u.Line
                }
                if (b > c.length - 1) {
                    b = 0
                }
                if (p.length > 0) {
                    var o = InnTwoMapCore.drawPolyLine(p, {strokeWeight: 5, strokeOpacity: 1, strokeColor: "#00a1cb", map: inntwoMap});
                    polyLines["key" + f + g] = o;
                    b++
                }
            }
            if (f == globalItinerary.ScheduleItems.length - 1) {
                InnTwoTools.mapLoadingNotify({option: "close"});
                return
            }
        }
        window.drawLineIndex = 1;
        sideOfRoadAttraction.pointArray = [];
        (function d(i) {
            var j = window.drawLineIndex;
            if (j < n.length) {
                inntwoMapSearch.searchPointDriveRoute([n[j - 1], n[j]], {strokeWeight: 5, strokeOpacity: 1, strokeColor: "#00a1cb"}, 0, inntwoMap, function (v, k) {
                    window.drawLineIndex++;
                    polyLines["key-seaved" + j] = k;
                    var t = v.getPlan(0).getRoute(0).getPath();
                    sideOfRoadAttraction.pointArray = sideOfRoadAttraction.pointArray.concat(t);
                    d(i)
                })
            } else {
                InnTwoTools.mapLoadingNotify({option: "close"});
                if (i) {
                    i()
                }
            }
        })(function () {
            if (a) {
                a()
            }
        })
    } else {
        if (n.length == 1) {
            inntwoMap.setCenter(n[0])
        }
        if (a) {
            a()
        }
    }
}
function drawLinesByfacePoints() {
    removeLines();
    var a = 0;
    $(".trip-schedule-places-line").each(function () {
        a++;
        var b = $(this).text();
        if (b != "") {
            b = JSON.parse(b)
        }
        var g = [];
        if (b.length < 1) {
            var c = $(this).parents(".trip-schedule-item-outer");
            var e = c.find(".placePoint").text();
            var h = fullFindPrev(c);
            var d = h.coordinate;
            if (d && e && d != "" && e != "") {
                d = InnTwoMapCore.createPoint(d.split(",")[0], d.split(",")[1]);
                e = InnTwoMapCore.createPoint(e.split(",")[0], e.split(",")[1]);
                g = [d, e]
            }
        } else {
            g = b
        }
        if (g.length > 0) {
            var f = InnTwoMapCore.drawPolyLine(g, {strokeWeight: 5, strokeOpacity: 1, strokeColor: "#00a1cb", map: inntwoMap});
            polyLines["key" + 0 + a] = f
        }
    })
}
function removeLines() {
    for (var a in polyLines) {
        inntwoMap.removeOverlay(polyLines[a])
    }
}
function tripScheduleScroll(d, b, a) {
    var c = document.getElementById(d);
    InnTwoTools.customScrollBar.settleBarSize(c, b, a);
    InnTwoTools.customScrollBar.scrollAndDrag(c, a, b, c)
}
function mainDestinationSearch() {
    $(".destination_search_container").remove();
    $(".destination_search_button").click(function () {
        var a = $.trim($("#DestinationSearchInput").val());
        if (a == "" || a == inntwoBase.AlarmMessage.DESTINATION_ALARM) {
            InnTwoTools.Alert(inntwoBase.AlarmMessage.SEARCHE_KEYISEMPTY);
            return
        }
        destinationSearch(a)
    })
}
function destinationSearch(b, a) {
    if (b == inntwoBase.AlarmMessage.DESTINATION_ALARM) {
        InnTwoTools.Alert(inntwoBase.AlarmMessage.SEARCHE_KEYISEMPTY);
        return
    }
    InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_DESTINATION});
    b = decodeURI(b);
    inntwoMapSearch.addressSearch(b, inntwoMap, function (c) {
        var d = c.getPoi(0);
        if (typeof d === "undefined" || !d) {
            InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.NOTSEARCH_MSG});
            setTimeout(function () {
                InnTwoTools.mapLoadingNotify({option: "close"})
            }, 1300);
            return
        }
        nearbySearch.setSearchData({coordinate: d.point.lat + "," + d.point.lng, placeName: b});
        inntwoMapSearch.getAddressByPoint(d.point, function (f) {
            if (f.province == f.city) {
                f.city = ""
            }
            var e = InnTwoTools.format("{0}{1}{2}{3}{4}", f.province, f.city, f.district, f.street, f.streetNumber);
            destinationAddOverlayInMap({pointPar: d.point, district: f.district, city: f.city, map: inntwoMap, province: f.province, tempSearchContent: b, address: e})
        });
        inntwoMap.setZoom(13);
        inntwoMap.panTo(c.getPoi(0).point, false);
        $(".markerOverlayContainer").last().show();
        InnTwoTools.mapLoadingNotify({option: "close"});
        if (typeof a !== "undefined") {
            a()
        }
        setTimeout(function () {
            inntwoMapSearch.addCloseMarkerBtn()
        }, 600)
    });
    inntwoMapSearch.mapClickHideOverlay(inntwoMap)
}
var customPlaceClicked = function (a, b) {
    $("#coordinateHideInput").val(b);
    var c = $(a).children(".hidden-place-custome-message").val();
    if (c) {
        c = JSON.parse(c);
        $("#centerCustomeAreaName").val(c.customePlaceName);
        $("#centerCustomeAreaNameHidden").val(c.customePlaceName);
        $("#centerCustomeAreaContent").val(c.customePlaceRemarke).text(c.customePlaceRemarke);
        if (c.startOrDestination == "start") {
            $("input[name=selectedStar]").attr({checked: true});
            $("input[name=selectedDestination]").attr({checked: false})
        } else {
            if (c.startOrDestination == "destination") {
                $("input[name=selectedStar]").attr({checked: false});
                $("input[name=selectedDestination]").attr({checked: true})
            } else {
                $("input[name=selectedStar]").attr({checked: false});
                $("input[name=selectedDestination]").attr({checked: false})
            }
        }
    } else {
        $("#centerCustomeAreaName,#centerCustomeAreaNameHidden").val("");
        $("#placeFeeInput").val("0.0");
        $("#centerCustomeAreaContent").val("").text("");
        $("input[name=selectedStar]").attr({checked: false});
        $("input[name=selectedDestination]").attr({checked: false})
    }
};
function destinationPlaceDetailsSearch() {
    var c = "placeid=";
    var a = location.href.indexOf(c);
    if (a > -1) {
        InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_DESTINATION});
        var b = location.href.substring(a + c.length);
        $.ajax({url: ajaxUrl.FindPlaceDetails_Url, data: {placeId: b}, type: "get", success: function (m) {
            $("#container_right").append(m);
            var h = $("input[name='placeIcoUrl']").val();
            var i = "<span class='sightSpotIco' style='display:none;'>" + h + "</span>";
            $(".create_trip_city_details_addto_schedule").append(i);
            InnTwoTools.PopupPlaceDetailsView(".create_trip_city_details_popup", ".create_trip_city_details_popup", "#container_right", false);
            $(".create_trip_city_details_popup").css({"margin-top": "3px"});
            var l = $("#placeLocation").val();
            var d = $(".createRouteCityDetailsContentImage").attr("src");
            var n = InnTwoTools.base64EncodeChars(InnTwoTools.utf16to8(d));
            var g = $("#placeCategory").val();
            if (typeof g !== "number") {
                g = inntwoBase.wordConvertNumber(g)
            }
            var j = {};
            var f = l.split(",")[1];
            var e = l.split(",")[0];
            j.point = InnTwoMapCore.createPoint(f, e);
            j.pointStr = f + "," + e;
            j.placeName = $.trim($(".create_route_city_details_contentimgfloat").text());
            j.imgUrl = h;
            j.placeInfoId = b;
            j.defaultImgUrl = n;
            j.contianerClassName = inntwoMapSearch.getMarkerClassName(g);
            j.province = "";
            j.city = "";
            j.district = "";
            j.CategoryId = "schedule-item-image";
            var k = JSON.stringify(j);
            j.innerHtml = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: templateUrl.mainTemplate.placeOverlaySelector, json: j});
            j.jsonData = k;
            j.map = inntwoMap;
            InnTwoMapCore.addMarkerInMapByOverLay(j);
            inntwoMapSearch.setMarkerClick();
            InnTwoTools.mapLoadingNotify({option: "close"});
            inntwoMapSearch.mapClickHideOverlay(inntwoMap);
            setTimeout(function () {
                inntwoMap.panTo(j.point)
            }, 2000);
            $(".create_trip_city_details_content").bind("click", function (o) {
                o.stopPropagation()
            });
            $(".trans_lucent_place").bind("click", function () {
                InnTwoTools.ClosePlaceDetailsTransLucent()
            })
        }, error: function () {
            InnTwoTools.Alert(inntwoBase.AlarmMessage.SERVE_ERROR)
        }})
    }
}
function destinationAddOverlayInMap(c) {
    var e = c.pointPar.lng + "," + c.pointPar.lat;
    var a = c.identifyParam ? c.identifyParam : InnTwoTools.getIdentifyStringByDate();
    var d = {};
    d.point = c.pointPar;
    var b = {province: c.province, showWord: c.tempSearchContent, city: c.city, lng: c.pointPar.lng, lat: c.pointPar.lat, placeName: c.tempSearchContent, imgUrl: "/img/asset2/customPlaceImg.jpg", placeInfoId: a, district: c.district, parentCategory: typeof c.parentCategory === "undefined" ? "3" : c.parentCategory, pointStr: e, address: c.address, duration: c.duration, price: c.price};
    d.innerHtml = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: templateUrl.mainTemplate.cityMarkerOverlayUrl, json: b});
    d.innerHtml += "<span class=''></span>";
    d.jsonData = JSON.stringify(b);
    d.contianerClassName = "ordinary_marker_class ordinary_marker_channel";
    d.map = c.map;
    InnTwoMapCore.addMarkerInMapByOverLay(d);
    inntwoMapSearch.setMarkerClick();
    $(".markerOverlayContainer").last().show();
    customPlaceMarkerListener()
}
function customPlaceMarkerListener() {
    $(".custome-place-favorite").unbind("click").click(function () {
        placeOverLayAddToSchedule({placeName: $(this).attr("placeName"), icoUrl: $(this).attr("imgUrl"), PlaceInfoId: $(this).attr("placeId"), categoryId: $(this).attr("CategoryId"), placePoint: $(this).attr("pointStr"), type: $(this).attr("type"), clicked: this, notShowComment: true, placeProvince: $(this).attr("province"), placeCity: $(this).attr("city"), placeDistrict: $(this).attr("district"), parentCategory: $(this).attr("parentcategory"), Address: $(this).attr("address") ? $(this).attr("address") : "", IsCustom: "1", PlaceExpense: $(this).attr("price"), duration: $(this).attr("duration")})
    })
}
function SearchMapSwitchButtonClick() {
    $("#SearchPictureSwitchButtonContent,#SchedulePriceMessageContent").hide();
    if (!cancelEditor) {
        if (placeSortShow) {
            $(".create_trip_schedule_place_sort_container").show();
            setColorBar(171);
            sideOfRoadAttraction.searchRange = 50;
            $(".search-radius-drag-bar-outer").show()
        }
    }
    if (!drawLined) {
        drawRouteEveryPlace(function () {
            InnTwoTools.mapLoadingNotify({option: "close"})
        });
        drawLined = true
    }
    $(".create_trip_schedule_place_sort_container").show()
}
function lazyLoadTravalItem() {
    var b = $("#tripPicturewordUploadScroll");
    $(".trip-pictureword-upload-item-image").lazyload({effect: "fadeIn", container: b});
    var a = b.height();
    b.height(100);
    b.scrollTop(1);
    b.scrollTop(0);
    b.height(a);
    b.css({height: "auto"});
    lazyLoadTravalItem = function () {
    }
}
function SearchPictureSwitchButtonClick() {
    $(".createitinerary-hidden-nearby").click();
    $("#SearchPictureSwitchButtonContent").show();
    $("#SchedulePriceMessageContent").hide();
    $(".create_trip_schedule_place_sort_container").hide();
    customImageUploadScrollBar();
    setPictureWordCleanWordInitial();
    lazyLoadTravalItem()
}
function SchedulePriceMessageClick() {
    $(".createitinerary-hidden-nearby").click();
    $("#SearchPictureSwitchButtonContent").hide();
    $("#SchedulePriceMessageContent").show();
    itineraryFee.collecteItineraries();
    $(".create_trip_schedule_place_sort_container").hide();
    expenseDetailsScroll()
}
function searchModelChange() {
    $(".search-model-switch-button").css({"background-color": "#ccc", color: "#333"});
    $("#SearchMapSwitchButton").css({"background-color": "#00A1CB", color: "#fff"});
    $(".search-model-switch-button").click(function () {
        $(".search-model-switch-button").css({"background-color": "#ccc", color: "#333"});
        $(this).css({"background-color": "#00A1CB", color: "#fff"});
        var e = $(this).attr("id");
        switch (e) {
            case"SearchMapSwitchButton":
                SearchMapSwitchButtonClick();
                break;
            case"SearchPictureSwitchButton":
                SearchPictureSwitchButtonClick();
                break;
            case"SchedulePriceMessage":
                SchedulePriceMessageClick();
                break
        }
    });
    var g = 181;
    var h = $(window).height();
    var b = $(".trip-pictureword-upload-images,.trip-pictureword-upload-bar-container");
    var a = $(".trip-pictureword-upload-images-contain");
    b.height(h - g);
    a.css({"max-height": (h - g) + "px"});
    $(window).resize(function () {
        h = $(window).height();
        b.height(h - g);
        a.css({"max-height": (h - g) + "px"})
    });
    var d = 92;
    var c = $(".trip-pictureword-upload-editor-container,#tripSchedulePictureWordModelScroll,#SchedulePriceMessageContent");
    var i = $(".trip-schedule-picture-word-model");
    c.height(h - d);
    i.css({"max-height": (h - d) + "px"});
    $(window).resize(function () {
        h = $(window).height();
        c.height(h - d);
        i.css({"max-height": (h - d) + "px"})
    })
}
function uploadPicSaveBtnShow() {
    var a = $(".trip-pictureword-upload-scroll .trip-pictureword-upload-item").length;
    if (a > 0) {
        $(".trip-picture-empty").hide()
    } else {
        $(".trip-picture-empty").show()
    }
}
function pictureAndWordUpload() {
    $("#tripPicturewordUploadOperatorBtn").click(function () {
        InnTwoTools.IsLogined({logined: function () {
            $("#tripImageUpload").modal()
        }, nonLogin: function () {
            inntwoBase.popupUserLogin();
            inntwoBase.loginSuccess = function () {
                $("#tripImageUpload").modal()
            }
        }})
    });
    var c = "/ImagesUtil/UploadItineraryImage";
    var b = 6;
    var a = 10;
    $("#fileupload").fileupload({url: c, maxNumberOfFiles: b, maxFileSize: a * 1024 * 1024, acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i, getNumberOfFiles: function () {
        return $(".files tr").length
    }, change: function (f, d) {
        pictureWordUploadPicCount = d.files.length > b ? b : d.files.length
    }, success: function (e) {
        pictureWordUploadPicindex++;
        if (pictureWordUploadPicindex == pictureWordUploadPicCount) {
            pictureWordUploadPicindex = 0;
            setTimeout(function () {
                $("#tripImageUpload").modal("hide")
            }, 300);
            $("tr[class='template-upload fade in']").remove()
        }
        var d = {};
        d.data = e;
        d.unAuthorize = function () {
            popupUserLogin()
        };
        d.bussinessException = function () {
            InnTwoTools.Alert(e.Message)
        };
        d.success = function () {
            if (typeof e.Extension !== "undefined" && e.Extension) {
                var f = InnTwoTools.getTemplateByMustache({url: templateUrl.tripDetailsTemplate.Url, selector: templateUrl.tripDetailsTemplate.customImageTravel, json: {imageUrl: e.Extension, places: [
                    {placeName: "请选择日程中的目的地"}
                ]}});
                $(".trip-pictureword-upload-scroll").append(f).sortable({stop: function () {
                    SaveEditorItinerary()
                }});
                setInitPictuePlaceSelected();
                customImageUploadScrollBar();
                $(".trip-picture-remark-input").blur(function () {
                    $(this).text($(this).val())
                });
                photoDestinationSelect();
                $(".trip-picture-remark-input").each(function () {
                    var g = $(".trip-picture-remark-input").index(this);
                    $(this).attr({id: "tripPictureRemarkInput" + g});
                    pictureRemarkAndCleanWordScrollBar(g)
                });
                $(".trip-picture-remark-input").eq(0).focus();
                $(".trip-picture-remark-input").blur(function () {
                    $(this).text($(this).val())
                });
                $(".trip-picture-remark-input").keydown(function () {
                    var g = $(".trip-picture-remark-input").index(this);
                    pictureRemarkAndCleanWordScrollBar(g)
                }).keyup(function () {
                    var g = $(".trip-picture-remark-input").index(this);
                    pictureRemarkAndCleanWordScrollBar(g)
                }).mouseenter(function () {
                    var g = $(".trip-picture-remark-input").index(this);
                    pictureRemarkAndCleanWordScrollBar(g)
                });
                uploadPicSaveBtnShow();
                setPictureWordCleanWordInitial()
            }
        };
        InnTwoTools.JsonDataCallback(d);
        SaveEditorItinerary()
    }, error: function () {
        InnTwoTools.Alert(inntwoBase.AlarmMessage.SERVE_ERROR)
    }});
    $("#addCleanWordButtonClick").click(function () {
        InnTwoTools.IsLogined({logined: function () {
            editorPictureWordClick()
        }, nonLogin: function () {
            inntwoBase.popupUserLogin();
            inntwoBase.loginSuccess = function () {
                editorPictureWordClick()
            }
        }})
    });
    $("#fileupload").addClass("fileupload-processing")
}
function setInitPictuePlaceSelected() {
    $(".picture-word-in-placename-select").each(function () {
        var f = getSchedulePlacesName();
        var e = $(this).parent().children("input[name=travelEditePlaceName]").val();
        var d = $(this).parent().children("input[name=travelEditePlaceId]").val();
        d = d ? d : InnTwoTools.getIdentifyStringByDate();
        if (f) {
            var a = false;
            var c = "<option value=''>请选择日程中的目的地</option>";
            for (var b in f) {
                c += "<option value='" + b + "'>" + f[b] + "</option>";
                a = f[b] == e
            }
            if (!a && e != "" && e.trim() != "") {
                c += "<option value='" + d + "'>" + e + "</option>"
            }
            $(this).html(c)
        }
        $(this).val(d)
    })
}
function setPictureWordCleanWordInitial() {
    customImageUploadScrollBar();
    $(".trip-pictureword-upload-scroll").sortable({stop: function () {
        SaveEditorItinerary();
        drawLinesByfacePoints()
    }});
    $(".trip-pictureword-upload-item").mouseenter(function () {
        $(this).find(".trip-pictureword-upload-close-btn").show()
    }).mouseleave(function () {
        $(this).find(".trip-pictureword-upload-close-btn").hide()
    })
}
var initialed = true;
var tripPictureRemarkInput;
var storeRawDescrip;
var editorPictureWordClick = function (a) {
    tripPictureRemarkInput = $(a).parent().children(".trip-picture-remark-input");
    storeRawDescrip = $(a).parent().children(".travel-descripe-rawhtml");
    $("#travelItemsEditor").modal("show").on("hidden", function () {
        tripPictureRemarkInput = false;
        storeRawDescrip = false;
        $("#textEditor").html("")
    }).on("shown", function () {
        if (tripPictureRemarkInput.length > 0) {
            $("#textEditor").html(storeRawDescrip.val())
        } else {
            $("#textEditor").html("")
        }
        $("#textEditor").focus();
        $("#textSaveBtn").removeAttr("disabled")
    });
    if (initialed) {
        $("#textEditor").wysiwyg().html("&nbsp;");
        $("#textSaveBtn").click(function () {
            $(this).attr({disabled: "disabled"});
            var c = $.trim($("#textEditor").html());
            var d = InnTwoTools.ClearHtmlFromString(c);
            if (tripPictureRemarkInput.length == 0) {
                var b = InnTwoTools.getTemplateByMustache({url: templateUrl.tripDetailsTemplate.Url, selector: templateUrl.tripDetailsTemplate.customWordTravel, json: {travelRemark: d, travelRemarkRaw: c}});
                $(".trip-pictureword-upload-scroll").append(b).sortable({stop: function () {
                    SaveEditorItinerary()
                }});
                setInitPictuePlaceSelected();
                uploadPicSaveBtnShow();
                setPictureWordCleanWordInitial();
                photoDestinationSelect()
            } else {
                tripPictureRemarkInput.text(d);
                storeRawDescrip.val(c)
            }
            $("#travelItemsEditor").modal("hide")
        });
        initialed = false
    }
};
function deleteCustomImage(a) {
    var b = $(a).parent().find(".trip-pictureword-upload-item-image").attr("data-original");
    if (typeof b !== "undefined" && b) {
        var c = b.split("/");
        b = c[c.length - 1];
        if (b) {
            deleteImagesUrls += "|" + b
        }
    }
    $(a).parent().hide(300, function () {
        $(this).remove();
        uploadPicSaveBtnShow();
        customImageUploadScrollBar()
    });
    SaveEditorItinerary()
}
function getAllTravel() {
    var a = [];
    $(".trip-pictureword-upload-item").each(function () {
        var d = $(".trip-pictureword-upload-item").index(this);
        var e = {};
        var c = $(".trip-pictureword-upload-item").eq(d).find(".trip-pictureword-upload-item-image");
        e.IsPictureWord = false;
        if ($(c).length > 0) {
            e.ImageUrl = $(c).attr("data-original");
            e.IsPictureWord = true
        }
        e.Description = $.trim($(this).children(".travel-descripe-rawhtml").val());
        var b = $.trim($(this).children(".trip-pictureword-upload-item-creat-datetime").text());
        if (b == "") {
            e.CreateTime = InnTwoTools.getNowDateStr()
        }
        e.PlaceInfoId = $(this).children(".picture-word-in-placename-select").val();
        if (typeof e.PlaceInfoId === "undefined") {
            e.PlaceInfoId = ""
        } else {
            e.PlaceName = $(this).children(".picture-word-in-placename-select").children("option[selected]").text();
            e.PlaceName = $.trim(e.PlaceName)
        }
        if (!e.IsPictureWord && (e.Description == "" || e.Description == inntwoBase.AlarmMessage.TRAVELS_WORD)) {
        } else {
            a.push(e)
        }
    });
    return a
}
function customImageUploadScrollBar() {
    var a = document.getElementById("tripPicturewordUploadScroll");
    InnTwoTools.customScrollBar.settleBarSize(a, $(".trip-pictureword-upload-bar-container"), $(".trip-pictureword-upload-custom-bar"));
    InnTwoTools.customScrollBar.scrollAndDrag("#tripPicturewordUploadScroll", ".trip-pictureword-upload-custom-bar", ".trip-pictureword-upload-bar-container", a)
}
function pictureRemarkAndCleanWordScrollBar(a) {
    var d = document.getElementById("tripPictureRemarkInput" + a);
    var c = $("#tripPictureRemarkInput" + a).next(".trip-picture-remark-input-scroll-container");
    var b = $("#tripPictureRemarkInput" + a).next(".trip-picture-remark-input-scroll-container").children(".trip-picture-remark-input-scroll-bar");
    InnTwoTools.customScrollBar.settleBarSize(d, c, b);
    InnTwoTools.customScrollBar.scrollAndDrag("#tripPictureRemarkInput" + a, b, c, d)
}
function photoDestinationSelect() {
    $(".picture-word-in-placename-select").unbind("focus").focus(function () {
        var d = $(this).parent().children("input[name=travelEditePlaceId]").val();
        d = d ? d : InnTwoTools.getIdentifyStringByDate();
        var f = getSchedulePlacesName();
        if (f) {
            var e = $(this).parent().children("input[name=travelEditePlaceName]").val();
            var a = false;
            var c = "<option value=''>请选择日程中的目的地</option>";
            for (var b in f) {
                c += "<option value='" + b + "'>" + f[b] + "</option>";
                a = f[b] == e
            }
            if (!a && e != "" && e.trim() != "") {
                c += "<option value='" + d + "'>" + e + "</option>"
            }
            $(this).html(c)
        }
        $(this).val(d)
    }).unbind("change").change(function () {
        $(this).parent().children("input[name=travelEditePlaceName]").val($(this).children("option:selected").text());
        $(this).parent().children("input[name=travelEditePlaceId]").val($(this).val());
        SaveEditorItinerary()
    })
}
function getSchedulePlacesName() {
    var g = {};
    var f = $(".trip_shchedule_sight_spot_name").length;
    for (var a = 0; a < f; a++) {
        var e = $(".trip_shchedule_sight_spot_name").eq(a);
        var b = e.parent().children(".categoryRemarks").text();
        if (b == "3" || b == "Hotel") {
            continue
        }
        var d = e.text();
        var c = e.parent().children(".placeInfoId").text();
        if (c in g) {
        } else {
            g[c] = d
        }
    }
    return g
}
function showEditorSchedule() {
    if (!scheduleId || !scheduleId.trim()) {
        $(".schedule-item-linkprev").first().hide();
        return
    }
    InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_PLACE});
    $.ajax({url: ajaxUrl.GetScheduleById_Url, data: {seqId: scheduleId}, type: "post", success: function (a) {
        window.globalItinerary = a;
        InnTwoTools.JsonDataCallback({data: globalItinerary, success: function () {
            scheduleIgnoreDateTime = globalItinerary.IgnoreStartDate == 0 ? false : true;
            if (isCopyItinerary) {
                globalItinerary.SeqId = "";
                globalItinerary.IsCancelEdite = false
            }
            bindDataByItineraryJson()
        }, bussinessException: function () {
            InnTwoTools.Alert(globalItinerary.Message, function () {
                location.href = "/"
            })
        }, unAuthorize: function () {
            inntwoBase.loginSuccess = function () {
                if (!scheduleId) {
                    scheduleId = InnTwoTools.getQueryStringByName("scheduleid")
                }
                showEditorSchedule()
            };
            popupUserLogin()
        }, optionAction: function () {
            InnTwoTools.Alert(globalItinerary.Message, function () {
                location.href = "/"
            })
        }})
    }, error: function () {
        InnTwoTools.Alert("系统内部异常")
    }})
}
function getItineraryFromLocalStorage() {
    scheduleId = InnTwoTools.getQueryStringByName("scheduleid");
    if (scheduleId) {
        showEditorSchedule();
        return
    }
    var b = InnTwoTools.getQueryStringByName("homeredirect");
    var c = window.localStorage.getItem("homeredirect");
    if (b && b != c) {
        window.localStorage.setItem("homeredirect", b);
        itineraryHotPlace.modalItineraryCreate();
        return
    }
    var e = InnTwoTools.getQueryStringByName("newschedule");
    if (e && e.trim()) {
        inntwoMapLocalCity();
        return
    }
    var a = InnTwoTools.getQueryStringByName("attraction");
    if (a && a.trim()) {
        inntwoMapLocalCity();
        return
    }
    if (window.localStorage) {
        if (scheduleId) {
            localItineraryKey = scheduleId
        }
        var d = window.localStorage.getItem(localItineraryKey);
        if (d) {
            InnTwoTools.Confirm({message: "是否显示上次未保存的游记?", trueMethod: function () {
                var f = JSON.parse(d);
                if (itineraryNotEmpty(f)) {
                    window.globalItinerary = f;
                    bindDataByItineraryJson();
                    $("#ScheduleDetailsOuter").val(f.ScheduleName);
                    oldItineraryName = f.ScheduleName
                }
            }, falseMethod: function () {
                if (window.localStorage) {
                    localStorage.removeItem(localItineraryKey)
                }
                inntwoMapLocalCity();
                showEditorSchedule();
                itineraryHotPlace.modalItineraryCreate()
            }, isOrIsnt: true, neverNotify: false})
        } else {
            inntwoMapLocalCity();
            showEditorSchedule();
            itineraryHotPlace.modalItineraryCreate()
        }
    } else {
        inntwoMapLocalCity();
        showEditorSchedule();
        itineraryHotPlace.modalItineraryCreate()
    }
}
function SaveEditorItinerary() {
    setTimeout(function () {
        if (window.localStorage) {
            var b = InnTwoTools.getQueryStringByName("scheduleid");
            if (b) {
                localItineraryKey = b
            }
            var a = parserScheduleJson();
            a.TravelItems = getAllTravel();
            a.IgnoreStartDate = scheduleIgnoreDateTime ? 1 : 0;
            if (!itineraryNotEmpty(a)) {
                return
            }
            a = itineraryFee.itineraryAdditionTrafficMsg(a);
            var c = JSON.stringify(a);
            window.localStorage.setItem(localItineraryKey, c)
        }
    }, 500)
}
function browseCloseBefore() {
    window.onbeforeunload = function () {
        var a = confirm("确定要退出吗？");
        if (a) {
            return a
        } else {
            return a
        }
    }
}
function IgnoreScheduleTime() {
    $(".trip_schedule_date_ignore_time").click(function () {
        setIgnoreTime(this);
        SaveEditorItinerary()
    })
}
function setIgnoreTime(a) {
    $(a).hide();
    IgnoreScheduleDatetime();
    scheduleJsonHash++
}
function IgnoreScheduleDatetime() {
    $(".trip_schedule_date").text(scheduleIgnoreWarning).css({color: "#00a1cb"});
    scheduleIgnoreDateTime = true;
    $(".trip_schedule_date_ignore_time").hide()
}
function notIgnoreDate() {
    $(".trip_schedule_date_ignore_time").show();
    $(".trip_schedule_date").css({color: "#333", "font-style": "normal"});
    scheduleIgnoreDateTime = false
}
function recommendPalce() {
    $(".trip_schedule_destination_commend_btn").click(function () {
        var a = {};
        a.lat = "";
        a.lon = "";
        a.address = "";
        InnTwoTools.IsLogined({logined: function () {
            $("#customPlacePopup").modal("hide");
            b()
        }, nonLogin: function () {
            $("#customPlacePopup").modal("hide");
            inntwoBase.popupUserLogin();
            inntwoBase.loginSuccess = function () {
                b()
            }
        }});
        function b() {
            $("#customizeDes").modal().on("shown", function () {
                if (showed) {
                    InntwoCustomize.show(a);
                    showed = false
                }
                InntwoCustomize.recommendInitical()
            }).on("hidden", function () {
                if (typeof window.isFirstLoadedMap !== "undefined") {
                    window.isFirstLoadedMap = true
                }
            })
        }
    })
}
var sogouMap = false;
var soGouDrivingSearchCompleted;
function getRoadToll() {
    var a = $("#priceResult").find(".charge");
    var b = 0;
    $(a).each(function () {
        var c = $(this).text();
        if (c) {
            c = c.replace("收费", "");
            c = c.replace("元", "");
            if (c) {
                b += Number(c)
            }
        }
    });
    return b
}
var scheduleToll = 0;
var itineraryDayIndex = 0;
var placeDecodeArray;
function placesToll(c, d, b) {
    if (!globalItinerary) {
        window.globalItinerary = parserScheduleJson()
    }
    var a = placeDecodeArray.length;
    if (a < 1) {
        b();
        return
    }
    var f = placeDecodeArray[d].points[0];
    var e = placeDecodeArray[d].points[1];
    var h = placeDecodeArray[d].wayCode ? Number(placeDecodeArray[d].wayCode) : 0;

    function g(i) {
        scheduleToll += i;
        d++;
        if (d < a) {
            placesToll(c, d, b)
        } else {
            b()
        }
    }

    InnTwoMapCore.trafficWayMapping({way: h, driving: function () {
        if (!f || !e || f == e) {
            g(0)
        } else {
            soGouMapDrivingSearch([f, e], function (i) {
                g(i)
            })
        }
    }, transit: function () {
        g(0)
    }, train: function () {
        g(0)
    }, plane: function () {
        g(0)
    }})
}
function decodePlacesTraffic(c) {
    var d = [];
    window.globalItinerary = parserScheduleJson();
    var e = globalItinerary.ScheduleItems[c];
    if (e) {
        if (e.PlacesTraffics) {
            var b = InnTwoTools.base64Decode(e.PlacesTraffics);
            if (b) {
                d = JSON.parse(b)
            }
        }
    }
    return d
}
function expenseDetailsScroll() {
    var a = 236;
    $("#schedulePriceCellContainer").height(windHeight - a);
    $("#schedulePriceCellContainerScroll").height(windHeight - a);
    var b = document.getElementById("schedulePriceCellContainer");
    InnTwoTools.customScrollBar.settleBarSize(b, $("#schedulePriceCellContainerScroll"), $("#schedulePriceCellContainerScrollBar"));
    InnTwoTools.customScrollBar.scrollAndDrag("#schedulePriceCellContainer", "#schedulePriceCellContainerScrollBar", "#schedulePriceCellContainerScroll", b)
}
var pointsSogou;
var coordinateConvertSuccess;
function soGouMapDrivingSearch(b, a) {
    pointsSogou = [];
    soGouDrivingSearchCompleted = function (c) {
        a(c)
    };
    coordinateConvertSuccess = function () {
        if (pointsSogou.length > 1) {
            searchDriving(pointsSogou[0], pointsSogou[1])
        } else {
            soGouDrivingSearchCompleted(0)
        }
        pointsSogou = [];
        clearInterval(window.soGouDriving)
    };
    InnTwoMapCore.ConvertLatLngToSogou({lnglat: b[0], callBack: function (c) {
        if (c) {
            pointsSogou.push(c);
            InnTwoMapCore.ConvertLatLngToSogou({lnglat: b[1], callBack: function (d) {
                if (d) {
                    pointsSogou.push(d)
                }
                if (coordinateConvertSuccess) {
                    coordinateConvertSuccess()
                }
            }})
        } else {
            if (coordinateConvertSuccess) {
                coordinateConvertSuccess()
            }
        }
    }})
}
function searchDriving(d, e) {
    d = new window.sogou.maps.Point(d.x, d.y);
    e = new window.sogou.maps.Point(e.x, e.y);
    if (!sogouMap) {
        var b = {zoom: 10, mapTypeId: window.sogou.maps.MapTypeId.ROADMAP};
        sogouMap = new window.sogou.maps.Map(document.getElementById("soGouMapContainer"), b)
    }
    var a = {map: sogouMap, origin: d, destination: e, tactic: 1};
    var c = new window.sogou.maps.Driving();
    c.route(a, function (h) {
        var f = {map: sogouMap, drivingResult: h, panel: document.getElementById("priceResult")};
        $("#priceResult").html("");
        var g = new window.sogou.maps.DrivingRenderer(f);
        setTimeout(function () {
            var i = getRoadToll();
            if (soGouDrivingSearchCompleted) {
                soGouDrivingSearchCompleted(i)
            }
        }, 200)
    })
}
var setItineraryItemFirstHide = function () {
    $(".trip_schedule_sightspots_container").eq(0).find(".trip-schedule-items-distance-duration").eq(0).hide()
};
function calculateSingleDayExpense(b) {
    var a = 0;
    var c = $("#schedulePriceCellContainer .schedule-price-row").eq(b);
    c.find(".place-expense-edit").each(function () {
        var d = $.trim($(this).val());
        if (d) {
            a += Number(d)
        }
    });
    var e = $(".schedule-price-panel").eq(b).val();
    if (e) {
        a += Number(e)
    }
    $(".schedule-amount-expense").eq(b).text(a)
}
function trafficDdlClick() {
    $(".trip-schedule-items-distance-duration-ico").unbind("click").click(function () {
        var b = $(this).find(".open-childed").length;
        var a = $(this).find(".create-itinerary-plan-container");
        if (b > 0) {
            a.hide();
            $(this).find(".open-childed").remove()
        } else {
            $(this).children(".distance-duration-trafficddl").append("<input type='hidden' class='open-childed' />");
            a.show()
        }
        trafficddlWaySelect = true;
        setTimeout(function () {
            trafficddlWaySelect = false
        }, 200)
    });
    $(".create-itinerary-plan-container").unbind("click").click(function (a) {
        a.stopPropagation()
    })
}
var disTrafficChange, durTrafficChange, lineTrafficChange;
var nullTraficInfo = "暂无相关线路信息";
function planIcoChangeCallbk(e) {
    $("#SaveSketch").removeAttr("disabled").val("保     存");
    mapPlaceAdd.routeSearching = false;
    if (e && e.getNumPlans && e.getNumPlans() > 0) {
        var b = e.getPlan(0).getDistance(true);
        var a = e.getPlan(0).getDistance(false);
        var d = e.getPlan(0).getDuration(true);
        var c = e.getPlan(0).getDuration(false);
        if (!b && !d) {
            disTrafficChange.text(nullTraficInfo);
            durTrafficChange.text("0,0")
        } else {
            disTrafficChange.text(InnTwoTools.format("{0},{1}", b, d));
            durTrafficChange.text(InnTwoTools.format("{0},{1}", a, c))
        }
    } else {
        disTrafficChange.text(nullTraficInfo);
        durTrafficChange.text("0,0")
    }
    calculateAmountDistanceDuration();
    $(".create-itinerary-plan-container").hide()
}
function pubTrafficCallBack(e) {
    planIcoChangeCallbk(e);
    var b = [];
    if (!e || !e.getNumPlans || e.getNumPlans() < 1) {
        var d = JSON.stringify([prevPoint, point]);
        lineTrafficChange.text(d)
    } else {
        var f = e.getPlan(0).getNumLines();
        for (var a = 0; a < f; a++) {
            var c = e.getPlan(0).getLine(a).getPath();
            b = b.concat(c)
        }
        calculateAmountDistanceDuration(window.nowSchduleIndex)
    }
    lineTrafficChange.text(JSON.stringify(b));
    SaveEditorItinerary();
    drawLinesByfacePoints()
}
function trainCallBack(a) {
    planIcoChangeCallbk(a);
    lineTrafficChange.text("")
}
function airplaneCallBack(a) {
    planIcoChangeCallbk(a);
    lineTrafficChange.text("")
}
var nullResult = {getPlan: function () {
    return{getDistance: function () {
        return""
    }, getDuration: function () {
        return""
    }}
}};
function planIcoChange() {
    $(".cet-itin-planico").click(function () {
        $("#SaveSketch").attr({disabled: "disabled"}).val("检索路线中...");
        $("#SaveItineraryButton").css({left: "-175px"});
        $(this).parent().children(".cet-itin-planico").css({"background-color": "#ccc"});
        $(this).css({"background-color": "#00a1cb"});
        $(this).parent().find(".cet-itin-hidden-planico-sele-flag").remove();
        $(this).append("<input type='hidden' class='cet-itin-hidden-planico-sele-flag' />");
        $(this).parents(".trip-schedule-items-distance-duration-ico").find(".open-childed").remove();
        var d = $(this).parents(".trip-schedule-item-outer");
        var b = fullFindPrev(d);
        var c = b.coordinate;
        if (c) {
            c = InnTwoMapCore.createPoint(c.split(",")[0], c.split(",")[1])
        }
        var a = fullFindNext(b.outer, window.nowSchduleIndex > 0 ? window.nowSchduleIndex - 1 : 1);
        a = a.coordinate;
        if (a) {
            a = InnTwoMapCore.createPoint(a.split(",")[0], a.split(",")[1])
        }
        if (c.lng == a.lng && c.lat == a.lat) {
            $(".create-itinerary-plan-container").hide();
            $("#SaveSketch").removeAttr("disabled").val("保     存");
            $("#SaveItineraryButton").css({left: "-135px"});
            return
        }
        var e = $(this).attr("way");
        var f = $(this);
        toCountDisDuration({way: Number(e), wayEle: f, prevPoint: c, point: a, callback: function (g) {
            fillDrivingResult(g);
            $(".create-itinerary-plan-container").hide();
            calculateAmountDistanceDuration(window.nowSchduleIndex);
            SaveEditorItinerary();
            drawLinesByfacePoints();
            $("#SaveSketch").removeAttr("disabled").val("保     存");
            $("#SaveItineraryButton").css({left: "-135px"})
        }})
    }).mouseover(function () {
        $(this).css({"background-color": "#00a1cb"})
    }).mouseout(function () {
        var a = $(this).children(".cet-itin-hidden-planico-sele-flag");
        if (a.length < 1) {
            $(this).css({"background-color": "#ccc"})
        }
    })
}
function toCountDisDuration(a) {
    var b = "create-itinerary-wayico {0} create-itinerary-image";
    var c = "";
    window.toCountDisDurPs = {p1: a.prevPoint, p2: a.point};
    mapPlaceAdd.routeSearching = true;
    InnTwoMapCore.trafficWayMapping({way: a.way, driving: function () {
        inntwoMapSearch.searchDistanceAndDatetime(a.prevPoint, a.point, function (n) {
            var m;
            if (n && n.getPlan(0)) {
                var f = n.getPlan(0).getDistance(true);
                var e = n.getPlan(0).getDistance(false);
                var h = n.getPlan(0).getDuration(true);
                var g = n.getPlan(0).getDuration(false);
                var k = n.getPlan(0).getRoute(0).getPath();
                var l = [];
                var o = 9;
                if (k.length < o * 3) {
                    o = 1
                }
                for (var j = 0; j < k.length; j += o) {
                    l.push(k[j])
                }
                m = {p1: n.getStart().point, p2: n.getEnd().point, distanceUnit: f, durationUnit: h, distanceClear: e, durationClear: g, line: JSON.stringify(l)}
            } else {
                m = {p1: window.toCountDisDurPs.p1, p2: window.toCountDisDurPs.p2, distanceUnit: "", durationUnit: "", distanceClear: "", durationClear: "", line: ""}
            }
            window.toCountDisDurPs.p1 = null;
            window.toCountDisDurPs.p2 = null;
            mapPlaceAdd.routeSearching = false;
            if (a.callback) {
                a.callback(m)
            }
        }, inntwoMap);
        b = InnTwoTools.format(b, "cet-itin-driverico");
        c = "自驾"
    }, transit: function () {
        inntwoMapSearch.searchTransit({map: inntwoMap, callBack: function (n) {
            var l;
            if (n && n.getPlan(0)) {
                var f = n.getPlan(0).getDistance(true);
                var e = n.getPlan(0).getDistance(false);
                var h = n.getPlan(0).getDuration(true);
                var g = n.getPlan(0).getDuration(false);
                var k = [];
                if (!n.getNumPlans || n.getNumPlans() < 1) {
                    k = [prevPoint, point]
                } else {
                    var o = n.getPlan(0).getNumLines();
                    for (var j = 0; j < o; j++) {
                        var m = n.getPlan(0).getLine(j).getPath();
                        k = k.concat(m)
                    }
                }
                l = {p1: n.getStart().point, p2: n.getEnd().point, distanceUnit: f, durationUnit: h, distanceClear: e, durationClear: g, line: JSON.stringify(k)}
            } else {
                l = {p1: window.toCountDisDurPs.p1, p2: window.toCountDisDurPs.p2, distanceUnit: "", durationUnit: "", distanceClear: "", durationClear: "", line: ""}
            }
            if (a.callback) {
                a.callback(l)
            }
            window.toCountDisDurPs.p1 = null;
            window.toCountDisDurPs.p2 = null;
            $("#SaveSketch").removeAttr("disabled").val("保     存");
            mapPlaceAdd.routeSearching = false
        }, start: a.prevPoint, end: a.point});
        b = InnTwoTools.format(b, "cet-itin-ptrafficico");
        c = "公交"
    }, train: function () {
        b = InnTwoTools.format(b, "cet-itin-trainico");
        c = "火车";
        var e = {p1: window.toCountDisDurPs.p1, p2: window.toCountDisDurPs.p2, distanceUnit: "", durationUnit: "", distanceClear: "", durationClear: "", line: ""};
        if (a.callback) {
            a.callback(e)
        }
        window.toCountDisDurPs.p1 = null;
        window.toCountDisDurPs.p2 = null;
        $("#SaveSketch").removeAttr("disabled").val("保     存");
        mapPlaceAdd.routeSearching = false
    }, plane: function () {
        b = InnTwoTools.format(b, "cet-itin-planeico");
        c = "飞机";
        var e = {p1: window.toCountDisDurPs.p1, p2: window.toCountDisDurPs.p2, distanceUnit: "", durationUnit: "", distanceClear: "", durationClear: "", line: ""};
        if (a.callback) {
            a.callback(e)
        }
        window.toCountDisDurPs.p1 = null;
        window.toCountDisDurPs.p2 = null;
        $("#SaveSketch").removeAttr("disabled").val("保     存");
        mapPlaceAdd.routeSearching = false
    }, walking: function () {
        inntwoMapSearch.searchWalkDistanceDur({map: inntwoMap, start: a.prevPoint, destination: a.point, searchCompleteCallback: function (p) {
            var m;
            if (p && p.getPlan(0)) {
                var n = p.getPlan(0);
                var f = n.getDistance(true);
                var e = n.getDistance(false);
                var h = n.getDuration(true);
                var g = n.getDuration(false);
                var k = n.getRoute(0).getPath();
                var l = [];
                var o = 9;
                if (k.length < o * 3) {
                    o = 1
                }
                for (var j = 0; j < k.length; j += o) {
                    l.push(k[j])
                }
                m = {p1: p.getStart().point, p2: p.getEnd().point, distanceUnit: f, durationUnit: h, distanceClear: e, durationClear: g, line: JSON.stringify(l)}
            } else {
                m = {p1: window.toCountDisDurPs.p1, p2: window.toCountDisDurPs.p2, distanceUnit: "", durationUnit: "", distanceClear: "", durationClear: "", line: ""}
            }
            window.toCountDisDurPs.p1 = null;
            window.toCountDisDurPs.p2 = null;
            mapPlaceAdd.routeSearching = false;
            if (a.callback) {
                a.callback(m)
            }
        }});
        b = InnTwoTools.format(b, "cet-itin-walkico");
        c = "步行"
    }});
    var d = a.wayEle.parents(".trip-schedule-items-distance-duration-ico").children(".create-itinerary-wayico");
    d.attr({way: a.way, "class": b, title: c, "data-plan": 0, "data-policy": 0});
    trafficddlWaySelect = true;
    setTimeout(function () {
        trafficddlWaySelect = false
    }, 200)
}
var trafficddlWaySelect = false;
var channalEleClick = false;
function bodyClick() {
    $("body").unbind("click").click(function () {
        if (!trafficddlWaySelect) {
            $(".open-childed").remove();
            $(".create-itinerary-plan-container").hide()
        }
        if (!channalEleClick) {
            $(".create_route_item_channel_outer").hide();
            var a = 0;
            $(".create_route_input_channel").each(function () {
                var b = $(this).val().trim();
                if (b != "" && b != "请输入途经点") {
                    a = a + 1
                }
            });
            if ($(".create-itinerary-channal-number").length > 0) {
                $(".create-itinerary-channal-number").text(a)
            } else {
                $(".create_rout_item_input_add_ico").append("<div class='create-itinerary-channal-number'>" + a + "</div>")
            }
            if (a > 0) {
                $(".create-itinerary-channal-number").show()
            } else {
                $(".create-itinerary-channal-number").hide()
            }
        }
        if (!window.placeOverlayClick) {
        }
    })
}
$(function () {
    inntwoMap = loadMap();
    InnTwoMapCore.mapLoaded(inntwoMap, function () {
        if (!mapFirstLoaded) {
            settleAutoCompelete(inntwoMap);
            addChannelInput(inntwoMap);
            getItineraryFromLocalStorage();
            mouseRightMenu();
            mapPlaceAdd.addScheduleButton();
            mapFirstLoaded = true
        }
    });
    InnTwoTools.createmapLoading();
    settleItineraryDefaultTitle();
    getAllPlaceCategory();
    scheduleInitial();
    mainDestinationSearch();
    destinationPlaceDetailsSearch();
    searchModelChange();
    pictureAndWordUpload();
    $(".ceate_route_right_container").show();
    initScheduleTabs();
    $("#SaveItineraryButton,#previewItineraryList").show();
    recommendPalce();
    destinationSearchSet();
    $("#ScheduleDetailsOuter").blur(function () {
        var a = $(this).val();
        if (!a || !(a.trim()) || a == itinerayrNameDefault) {
            return
        }
        SaveEditorItinerary()
    });
    IgnoreScheduleTime();
    bodyClick();
    $(".trip_schedule_container_item").removeClass("display-none");
    $("#scheduleRemarkEditor").wysiwyg();
    $("#mapContainer").click(function () {
        $("#destinationSearchSuggestion").hide()
    });
    if (UE.getEditor) {
        createItinerary.scheduleDescription = UE.getEditor("scheduleDescription", {toolbars: [
            ["fullscreen", "simpleupload", "fontsize", "source", "bold", "italic", "underline", "pasteplain", "|", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist", "link"]
        ], serverUrl: "/imagehandler/controller.ashx"})
    }
});
var itineraryDelicious = {};
itineraryDelicious.placeId = "";
itineraryDelicious.popupDelicious = function (a) {
    $(".delicious-scroller").fadeIn();
    itineraryDelicious.placeId = a;
    itineraryDelicious.deliciousData(a)
};
itineraryDelicious.close = function () {
    $(".delicious-container").click(function (a) {
        a.stopPropagation()
    });
    $("#delicacyPopupClose,.delicious-scroller").click(function (a) {
        a.stopPropagation();
        $(".delicious-comments").html("");
        $(".delicious-scroller").fadeOut()
    })
};
itineraryDelicious.setRaty = function () {
    $("#deliciousGenerateCommentRat").raty({readOnly: false, score: 3, half: true, path: "/img/asset2", hints: ["还是不要去了", "去不去看自己", "可以去", "建议去", "不去会后悔的"]})
};
itineraryDelicious.lnglat = "";
itineraryDelicious.nearbyDelicacies = function (b) {
    var a = InnTwoTools.format("{0},{1}", b.point.lng, b.point.lat);
    if (!a || a.trim() == "") {
        return
    }
    removeNearPlacMarkere();
    removeNearHotelsMaker();
    removeNearDelicaciesMaker();
    itineraryDelicious.lnglat = a;
    InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_PLACE});
    $.ajax({url: ajaxUrl.NearbyDelicious_Url, data: {Lnglat: a, PageIndex: itineraryDelicious.currentPageIndex, Category: b.category, Price: b.price, HasDeal: b.isGroupBuy, Radius: itineraryDelicious.currentRadius}, type: "post", success: function (c) {
        $("#nearbyAttractionTotal").text(c.Total);
        InnTwoTools.mapLoadingNotify({option: "close"});
        InnTwoTools.JsonDataCallback({data: c, success: function () {
            nearbyDeliciousViewModel.delicious(c.Content);
            itineraryDelicious.nearbyDeliciousScroller();
            itineraryDelicious.deliciousMarkerGenerate();
            itineraryDelicious.setPager({total: c.Total, pageSize: c.PageSize, currentPage: c.CurrentPage});
            changeNearMarkerNaillStyle();
            nearbySearch.nearbySearchCallback()
        }, notFound: function () {
            nearbyDeliciousViewModel.delicious([]);
            itineraryDelicious.nearbyDeliciousScroller();
            itineraryDelicious.deliciousMarkerGenerate();
            itineraryDelicious.setPager({total: 0, pageSize: 12, currentPage: 1});
            changeNearMarkerNaillStyle()
        }})
    }})
};
itineraryDelicious.nearbyDeliciousScroller = function () {
    InnTwoTools.customScrollBar.scroll("deliciousSearchcviewScroll", $("#deliciousSearchViewScroll"), $("#deliciousSearchViewScrollBar"))
};
itineraryDelicious.deliciousMarkerGenerate = function () {
    $(".delicacy_search_result_number").each(function () {
        var d = $(".delicacy_search_result_number").index(this);
        var b = d + 1;
        $(this).text(b);
        var c = $(".delicious-favorite-button").eq(d);
        var a = c.attr("pointstr");
        if (typeof a === "undefined" || !a) {
            return true
        }
        var f = a.split(",")[0];
        var e = a.split(",")[1];
        var h = {};
        h.point = {lat: e, lng: f};
        h.pointStr = a;
        h.Category = "delicacy";
        h.CategoryId = "delicacy";
        h.remarkerCategory = "delicacy";
        h.placeName = c.attr("placename");
        h.imgUrl = c.attr("imgurl");
        if (!h.imgUrl || h.imgUrl == "http://i1.dpfile.com/s/c/app/api/i/developer/no_photo_278.png" || h.imgUrl == "http://i2.dpfile.com/s/c/app/api/i/developer/no_photo_278.png" || h.imgUrl == "http://i3.dpfile.com/s/c/app/api/i/developer/no_photo_278.png" || h.imgUrl == "http://i4.dpfile.com/s/c/app/api/i/developer/no_photo_278.png" || h.imgUrl == "http://i5.dpfile.com/s/c/app/api/i/developer/no_photo_278.png") {
            h.imgUrl = "/img/asset3/delicacyNullImg.png"
        }
        h.placeInfoId = c.attr("placeid");
        h.price = c.attr("price");
        h.grade = c.attr("grade");
        h.province = c.attr("province");
        h.city = c.attr("city");
        h.district = c.attr("district");
        h.delicacyCommentNumber = c.attr("comments");
        var g = "home_place_marker delicacy-search-marker";
        h.contianerClassName = g;
        h.hasPrice = true;
        var i = JSON.stringify(h);
        h.innerHtml = Mustache.render($("#deliciousMarkerMessageBox").html(), h);
        h.jsonData = i;
        h.map = inntwoMap;
        h.markerNumber = b;
        h.parentCategory = c.attr("parentCategory");
        InnTwoMapCore.addMarkerInMapByOverLay(h);
        return true
    });
    $(".place_search_result_marker").show();
    inntwoMapSearch.setMarkerClick();
    inntwoMapSearch.mapClickHideOverlay(inntwoMap);
    InnTwoTools.mapLoadingNotify({option: "close"});
    placeFavoriteListener()
};
itineraryDelicious.deliciousData = function (a) {
    $.ajax({url: ajaxUrl.FindDelicacyDetails_Url, data: {id: a}, type: "post", success: function (b) {
        InnTwoTools.JsonDataCallback({data: b, success: function () {
            b.tcLink = "/html/gotodianping.html?id=" + itineraryDelicious.placeId;
            deliciousPopupViewModel.data(b);
            itineraryDelicious.close();
            $("#deliciousAddtoSchedule").click(function () {
                nearbySearch.favoritePlaceById(itineraryDelicious.placeId)
            });
            itineraryDelicious.getComments(a)
        }, notFound: function () {
            InnTwoTools.Alert("该美食已下线！", function () {
                $(".delicious-scroller").fadeOut()
            })
        }})
    }})
};
itineraryDelicious.getComments = function (a, b) {
    deliciousPopupViewModel.delicacyComments([]);
    $("#commentLoading").show();
    $.ajax({url: ajaxUrl.FindDelicacyComments_Url, data: {id: a, pageIndex: b ? b : 1}, type: "post", success: function (c) {
        $("#commentLoading").hide();
        InnTwoTools.JsonDataCallback({data: c.Content, success: function () {
            deliciousPopupViewModel.delicacyComments(c.Content);
            deliciousPopupViewModel.isShowCommentPanel(c.Content.length > 0);
            itineraryDelicious.setCommentPager({total: c.Total, pageSize: c.PageSize, currentPage: c.CurrentPage, delicacyId: a})
        }, notFound: function () {
            deliciousPopupViewModel.isShowCommentPanel(false)
        }})
    }})
};
itineraryDelicious.setCommentPager = function (b) {
    var c = InnTwoTools.GetTotalPages(b.total, b.pageSize);
    var a = {currentPage: b.currentPage, totalPages: c, shouldShowPage: (c > 1), size: "normal", alignment: "center", onPageChanged: function (d, g, f) {
        itineraryDelicious.getComments(b.delicacyId, f)
    }};
    $("#delicacyCommentPager").bootstrapPaginator(a)
};
itineraryDelicious.currentPageIndex = 1;
itineraryDelicious.currentRadius = 10;
itineraryDelicious.setPager = function (b) {
    var c = InnTwoTools.GetTotalPages(b.total, b.pageSize);
    var a = {currentPage: b.currentPage, totalPages: c, shouldShowPage: (c > 1), size: "mini", alignment: "center", onPageChanged: function (h, k, j) {
        itineraryDelicious.currentPageIndex = j;
        if (itineraryDelicious.lnglat) {
            var d = itineraryDelicious.lnglat.split(",");
            var f = $("#nearbyCuisines").val();
            var i = $("#nearbyDelicacyPriceQuery").val();
            var g = $("#delicacyIsGroupBuy").val();
            itineraryDelicious.nearbyDelicacies({point: {lng: d[0], lat: d[1]}, category: f, price: i, isGroupBuy: g})
        }
    }};
    $("#nearDelicaciesPager").bootstrapPaginator(a)
};
itineraryDelicious.moreDelicacyQueryHeight = 0;
itineraryDelicious.moreDelicacyChangeQuery = function () {
    $("#showMoreDelicacyMoreQuery").unbind("click").click(function () {
        $("#moreDelicacyQueries,#showMoreDelicacyMoreQuery,#hideMoreDelicacyMoreQuery").slideToggle();
        itineraryDelicious.moreDelicacyQueryHeight = $("#NearbySearchPanle0").height();
        itineraryDelicious.moreDelicacyQueryHeight -= 70;
        $("#NearbySearchPanle0,#deliciousSearchcviewScroll").height(itineraryDelicious.moreDelicacyQueryHeight);
        itineraryDelicious.nearbyDeliciousScroller();
        itineraryDelicious.scrollSubtract = 132 + 32 + 70
    });
    $("#hideMoreDelicacyMoreQuery").unbind("click").click(function () {
        $("#moreDelicacyQueries,#showMoreDelicacyMoreQuery,#hideMoreDelicacyMoreQuery").slideToggle();
        itineraryDelicious.moreDelicacyQueryHeight = $("#NearbySearchPanle0").height();
        itineraryDelicious.moreDelicacyQueryHeight += 70;
        $("#NearbySearchPanle0,#deliciousSearchcviewScroll").height(itineraryDelicious.moreDelicacyQueryHeight);
        itineraryDelicious.nearbyDeliciousScroller();
        itineraryDelicious.scrollSubtract = 132 + 32
    })
};
itineraryDelicious.categoryChange = function () {
    $("#nearbyCuisines").unbind("change").change(function () {
        var b = $(this).val();
        var a = itineraryDelicious.lnglat.split(",");
        itineraryDelicious.nearbyDelicacies({point: {lng: a[0], lat: a[1]}, category: b, price: "", isGroupBuy: "0"})
    })
};
var nearbyDeliciousViewModel = {};
nearbyDeliciousViewModel.delicious = ko.observableArray([]);
nearbyDeliciousViewModel.delicacyNameClick = function (a) {
    itineraryDelicious.popupDelicious(a.PlaceInfoId)
};
var deliciousPopupViewModel = {};
deliciousPopupViewModel.data = ko.observable();
deliciousPopupViewModel.tagsIndex = ko.observable(0);
deliciousPopupViewModel.nearDelicacyClicked = function (b, f, d, c, a) {
    b.stopPropagation();
    nearbySearch.showNearbyResult();
    mapMarkerAddToScheule.nearHotelPlaceAnimate({marker: $(a), destination: $(".createitinerary-hidden-nearby")});
    setTimeout(function () {
        $(a).parents(".markerOverlayContainer").hide()
    }, 200);
    nearbySearch.setSearchData({placeName: f, coordinate: InnTwoTools.format("{0},{1}", c, d)});
    itineraryDelicious.lnglat = InnTwoTools.format("{0},{1}", d, c);
    $("#nearByDeliciousButton").click();
    nearbySearch.nearbySearchCategory = nearbySearch.nearbySearchCategories.Delicacy
};
deliciousPopupViewModel.customBind = function () {
    ko.bindingHandlers.tagBgColor = {update: function (b, d) {
        var c = d();
        var a = ["inntwo-backgroud-color-success", "inntwo-backgroud-color-waring", "inntwo-backgroud-color-info", "inntwo-background-float-color", "inntwo-background-rose", "inntwo-background-transparent"];
        $(b).addClass(a[c() % a.length])
    }};
    ko.bindingHandlers.gradeBar = {update: function (a, c) {
        var b = c();
        $(a).css({width: (b * 10) + "%"})
    }}
};
deliciousPopupViewModel.delicacyComments = ko.observableArray([]);
deliciousPopupViewModel.isShowCommentPanel = ko.observable(true);
itineraryDelicious.moreDelicacyQuery = function () {
    $("#moreDelicacyQuerySubmit").click(function () {
        var c = $("#ConditionCoordinate").val();
        itineraryDelicious.lnglat = c.split(",")[1] + "," + c.split(",")[0];
        var b = $("#nearbyCuisines").val();
        var e = $("#nearbyDelicacyPriceQuery").val();
        var d = $("#delicacyIsGroupBuy").val();
        var a = itineraryDelicious.lnglat.split(",");
        itineraryDelicious.currentPageIndex = 1;
        itineraryDelicious.nearbyDelicacies({point: {lng: a[0], lat: a[1]}, category: b, price: e, isGroupBuy: d})
    })
};
itineraryDelicious.delicacyIcoSwotch = function (b, a) {
    if (!b || b == "http://i1.dpfile.com/s/c/app/api/i/developer/no_photo_278.png" || b == "http://i2.dpfile.com/s/c/app/api/i/developer/no_photo_278.png" || b == "http://i3.dpfile.com/s/c/app/api/i/developer/no_photo_278.png" || b == "http://i4.dpfile.com/s/c/app/api/i/developer/no_photo_278.png" || b == "http://i5.dpfile.com/s/c/app/api/i/developer/no_photo_278.png" || b == "http://i1.dpfile.com/s/c/app/api/i/developer/no_photo_700.png" || b == "http://i2.dpfile.com/s/c/app/api/i/developer/no_photo_700.png" || b == "http://i3.dpfile.com/s/c/app/api/i/developer/no_photo_700.png" || b == "http://i4.dpfile.com/s/c/app/api/i/developer/no_photo_700.png" || b == "http://i5.dpfile.com/s/c/app/api/i/developer/no_photo_700.png") {
        return a ? a : "/img/asset3/delicacyNullImg.png"
    }
    return b
};
itineraryDelicious.customBinds = function () {
    ko.bindingHandlers.delicacyIco = {update: function (a, d) {
        var c = d();
        var b = itineraryDelicious.delicacyIcoSwotch(c);
        $(a).attr({src: b, imgurl: b})
    }};
    ko.bindingHandlers.delicacyBigIco = {update: function (a, d) {
        var c = d();
        var b = itineraryDelicious.delicacyIcoSwotch(c, "/img/asset3/delicacyNullImgBig.jpg");
        $(a).attr({src: b, imgurl: b})
    }};
    ko.bindingHandlers.rtingScore = {update: function (a, c) {
        var b = c();
        $(a).attr({src: "http://i1.dpfile.com/s/i/app/api/16_" + b + "star.png", alt: b, title: b})
    }}
};
itineraryDelicious.resizeDelicacies = function () {
    $(window).resize(function () {
        window.windHeight = $(window).height();
        $("#NearbySearchPanle0,#deliciousSearchcviewScroll").height(windHeight - itineraryDelicious.scrollSubtract);
        itineraryDelicious.nearbyDeliciousScroller()
    })
};
itineraryDelicious.scrollSubtract = 132 + 32 + 25;
$(function () {
    deliciousPopupViewModel.customBind();
    ko.applyBindings(nearbyDeliciousViewModel, document.getElementById("NearbySearchPanle0"));
    ko.applyBindings(deliciousPopupViewModel, document.getElementById("delicacyPopupContainer"));
    itineraryDelicious.setRaty();
    $("#nearByDeliciousButton").click(function () {
        nearbySearch.nearbySearchCategory = nearbySearch.nearbySearchCategories.Delicacy;
        $("#moreDelicacyQuerySubmit").click()
    });
    itineraryDelicious.moreDelicacyChangeQuery();
    itineraryDelicious.moreDelicacyQuery();
    itineraryDelicious.categoryChange();
    itineraryDelicious.customBinds();
    itineraryDelicious.resizeDelicacies();
    $("#NearbySearchPanle0,#deliciousSearchcviewScroll").height(windHeight - itineraryDelicious.scrollSubtract)
});
var itineraryFee;
function searchCost() {
    InnTwoTools.mapLoadingNotify({message: "&nbsp;&nbsp;" + inntwoBase.AlarmMessage.COUNT_COST});
    InnTwoTools.mapLoadingNotify({option: "open"});
    setTimeout(function () {
        InnTwoTools.mapLoadingNotify({option: "close"})
    }, 1000)
}
(function () {
    itineraryFee = {PeopleNumber: ko.observable(), CarNumber: ko.observable(), FuelCosts: ko.observable(), itinerarieFees: ko.observableArray([]), drivingMessages: [], toCountAmontFee: function () {
        var a = 0;
        $(".accordion-group").each(function () {
            var b = $(".accordion-group").index(this);
            a += itineraryFee.calculatePlacesMultiple(b)
        });
        $("#amountItineraryExpense").text(a.toFixed(1));
        itineraryFee.toCountAmontFee = function () {
            a = 0;
            $(".accordion-group").each(function () {
                var b = $(".accordion-group").index(this);
                a += itineraryFee.calculatePlacesMultiple(b)
            });
            $("#amountItineraryExpense").text(a.toFixed(1));
            SaveEditorItinerary()
        }
    }, collecteItineraries: function (h) {
        var l = window.localStorage.getItem(scheduleId || localItineraryKey);
        var o;
        if (l) {
            o = l = JSON.parse(l)
        }
        if (typeof h !== "undefined") {
            l = parserScheduleJson()
        }
        o = itineraryNotEmpty(o);
        if (o && o.Remarks && l && l.Remarks) {
            l.Remarks.CarNumber = o.Remarks.CarNumber == 0 ? 1 : o.Remarks.CarNumber;
            l.Remarks.FuelCosts = o.Remarks.FuelCosts == 0 ? 0.5 : o.Remarks.FuelCosts;
            l.Remarks.PeopleNumber = o.Remarks.PeopleNumber == 0 ? 1 : o.Remarks.PeopleNumber
        }
        l = itineraryNotEmpty(l);
        if (!l) {
            l = parserScheduleJson()
        }
        var p = itineraryNotEmpty(l);
        if (!p) {
            return
        }
        if (l.Remarks) {
            itineraryFee.PeopleNumber(l.Remarks.PeopleNumber ? l.Remarks.PeopleNumber : 1);
            itineraryFee.CarNumber(l.Remarks.CarNumber ? l.Remarks.CarNumber : 1);
            itineraryFee.FuelCosts(l.Remarks.FuelCosts ? l.Remarks.FuelCosts : 0.5)
        }
        var w = l.ScheduleItems, x = w.length;
        var v = [];
        var c = [];
        for (var g = 0; g < x; g++) {
            var s = w[g].ScheduleItemPlaces, t = s.length;
            var z = w[g].TrafficFee;
            var u = {places: [], hotels: [], foods: [], others: [], shouldShowHotels: false, shouldShowPlaces: false, shouldShowFoods: false, shouldShowDriving: false, shouldShowTransit: false, shouldShowTrain: false, shouldShowPlane: false, driveDistance: z ? z.driveDistance : 0, fuelUniteCosts: z ? z.fuelUniteCosts : 0.5, carNumber: z ? z.carNumber : 1, tollCarNumber: z ? z.tollCarNumber : 1, toll: z ? z.toll : 0, passengerTicket: z ? z.passengerTicket : 1, airFare: z ? z.airFare : 0, trainTicket: z ? z.trainTicket : 1, trainFare: z ? z.trainFare : 0, pubTrafficFee: z ? z.pubTrafficFee : 0, remark: z ? z.remark : "", otherFees: z ? z.otherFees : [], hotelsExpense: 0, placesExpense: 0, foodsExpense: 0, traffExpense: 0, otherExpense: 0, scheduleAmontPrice: 0};
            for (var m = 0; m < t; m++) {
                s[m].NumberOfActor = s[m].NumberOfActor && s[m].NumberOfActor > 1 ? s[m].NumberOfActor : 1;
                var a = s[m].NumberOfActor * Number(s[m].PlaceExpense == "免费" ? 0 : s[m].PlaceExpense);
                s[m].amontExpense = a.toFixed(1);
                var q = function () {
                    var d = s[m].PlaceExpense;
                    s[m].PlaceExpense = d == "免费" ? 0 : d;
                    u.places.push(s[m]);
                    u.placesExpense += Number(s[m].PlaceExpense == "免费" ? 0 : s[m].PlaceExpense)
                };
                InnTwoTools.PlaceParentCategory({category: s[m].PlaceParentCategory, attraction: function () {
                    q()
                }, hotel: function () {
                    u.hotels.push(s[m]);
                    u.hotelsExpense += Number(s[m].PlaceExpense)
                }, delicacy: function () {
                    u.foods.push(s[m]);
                    u.foodsExpense += Number(s[m].PlaceExpense == "免费" ? 0 : s[m].PlaceExpense)
                }, other: function () {
                    u.others.push(s[m]);
                    u.otherExpense += Number(s[m].PlaceExpense == "免费" ? 0 : s[m].PlaceExpense)
                }})
            }
            u.shouldShowHotels = u.hotels.length > 0;
            u.shouldShowPlaces = u.places.length > 0;
            u.shouldShowFoods = u.foods.length > 0;
            u.shouldShowOthers = u.others.length > 0;
            var f = [], C = [], B = [], r = [], D = [];
            var e = 0;
            var A = w[g].PlacesTraffics || [];
            for (var n = 0; n < A.length; n++) {
                var b = A[n].WayCode;
                b = Number(b);
                InnTwoMapCore.trafficWayMapping({way: b, driving: function () {
                    e += parseFloat(A[n].Distance);
                    f.push(A[n])
                }, transit: function () {
                    C.push(A[n])
                }, train: function () {
                    B.push(A[n])
                }, plane: function () {
                    r.push(A[n])
                }, walking: function () {
                    D.push(A[n])
                }})
            }
            u.shouldShowDriving = f.length > (g == 0 ? 1 : 0);
            u.shouldShowTransit = C.length > 0;
            u.shouldShowTrain = B.length > 0;
            u.shouldShowPlane = r.length > 0;
            u.driveDistance = (e / 1000).toFixed(1);
            c.push(f);
            v.push(u)
        }
        itineraryFee.drivingMessages = c;
        itineraryFee.itinerarieFees(v);
        $(".shouldShowTransit").each(function () {
            var d = $(this).attr("shouldShowTransit");
            if (d != "1") {
                $(this).html("")
            }
        });
        $(".shouldShowTrain").each(function () {
            var d = $(this).attr("shouldShowTrain");
            if (d != "1") {
                $(this).html("")
            }
        });
        $(".shouldShowPlane").each(function () {
            var d = $(this).attr("shouldShowPlane");
            if (d != "1") {
                $(this).html("")
            }
        });
        $(".fee-hotel-number").focusout(function () {
            itineraryFee.numberChange(this);
            var i = $(this).val();
            var j = $(this).parents(".fee-hotel-row").find(".fee-hotel-unit-price");
            var k = j.val();
            if (!isNaN(k)) {
                var d = i * k;
                $(this).parents(".fee-hotel-row").find(".fee-amont-price").text(d.toFixed(1));
                itineraryFee.toCountAmontFee()
            }
        });
        $(".fee-hotel-unit-price").focusout(function () {
            var i = $(this).val();
            if (!isNaN(i)) {
                itineraryFee.unitePriceChange(this);
                i = Number(i);
                var j = $(this).parents(".fee-hotel-row").find(".fee-hotel-number").val();
                var d = j * i;
                $(this).parents(".fee-hotel-row").find(".fee-amont-price").text(d.toFixed(1));
                itineraryFee.toCountAmontFee()
            }
        });
        var y = function () {
            itineraryFee.numberChange(this);
            var i = $(this).val();
            var j = $(this).parents(".fee-hotel-row").find(".fee-place-unit-price").val();
            if (!isNaN(j)) {
                var d = i * j;
                $(this).parents(".fee-hotel-row").find(".fee-amont-price").text(d.toFixed(1));
                itineraryFee.toCountAmontFee()
            }
        };
        $(".fee-place-input").focusout(y);
        $(".fee-place-unit-price").focusout(function () {
            var j = $(this).val();
            if (!isNaN(j)) {
                itineraryFee.unitePriceChange(this);
                var i = $(this).parents(".fee-hotel-row").find(".fee-place-input").val();
                if (!isNaN(j) && !isNaN(i)) {
                    var d = i * j;
                    $(this).parents(".fee-hotel-row").find(".fee-amont-price").text(d.toFixed(1));
                    itineraryFee.toCountAmontFee()
                }
            }
        });
        $(".fee-foods-input").focusout(function () {
            itineraryFee.numberChange(this);
            var i = $(this).val();
            var j = $(this).parents(".fee-hotel-row").find(".fee-foods-unit-price");
            var k = j.val();
            if (!isNaN(k)) {
                var d = i * k;
                $(this).parents(".fee-hotel-row").find(".fee-amont-price").text(d);
                itineraryFee.toCountAmontFee()
            }
        });
        $(".fee-foods-unit-price").focusout(function () {
            var j = $(this).val();
            var i = $(this).parents(".fee-hotel-row").find(".fee-placeid-hidden").val().trim();
            $(".trip-schedule-item-outer").each(function () {
                var k = $(this).find(".placeInfoId").text().trim();
                if (i == k) {
                    $(this).find(".placeToll").text(j)
                }
            });
            var d = $(this).parents(".fee-hotel-row").find(".fee-calculater-input").val();
            $(this).parents(".fee-hotel-row").find(".fee-amont-price").text(d * j);
            itineraryFee.toCountAmontFee()
        });
        $(".fee-carnumber-input").focusout(function () {
            itineraryFee.calculateFuelCost(this);
            itineraryFee.toCountAmontFee()
        });
        $(".fee-carnumber-input").each(function () {
            itineraryFee.calculateFuelCost(this)
        });
        $(".fee-tollcarnumber-input").focusout(function () {
            itineraryFee.calculateTollCost(this);
            itineraryFee.toCountAmontFee()
        });
        $(".fee-tollcarnumber-input").each(function () {
            itineraryFee.calculateTollCost(this)
        });
        $(".per-capita-input").focusout(function () {
            var d = $(this).parents(".fee-hotel-row").find(".fee-tollcarnumber-input").val();
            if (!isNaN(d)) {
                var i = $(this).val();
                if (!isNaN(i)) {
                    $(this).parents(".fee-hotel-row").find(".fee-roll-value").text((d * i).toFixed(1));
                    itineraryFee.toCountAmontFee()
                }
            }
        });
        $(".fee-car-unitprice-cell").focusout(function () {
            var j = $(this).parents(".fee-hotel-row").find(".fee-carnumber-input").val();
            var i = $(this).parents(".fee-hotel-row").find(".fee-driving-distance").text();
            var k = $(this).val() || 0;
            if (!isNaN(k)) {
                var d = j * k * i;
                $(this).parents(".fee-hotel-row").find(".fee-gasolene-value").text(d.toFixed(1));
                itineraryFee.toCountAmontFee()
            }
        });
        $(".fee-plane-num-input").focusout(function () {
            var i = $(this).val();
            var j = $(this).parents(".fee-hotel-row").find(".fee-plane-unit-input").val();
            var d = 0;
            if (!isNaN(i) && !isNaN(j)) {
                d = i * j
            }
            $(this).parents(".fee-hotel-row").find(".fee-amont-plane").text(d.toFixed(1));
            itineraryFee.toCountAmontFee()
        });
        $(".fee-plane-num-input").each(function () {
            var i = $(this).val();
            var j = $(this).parents(".fee-hotel-row").find(".fee-plane-unit-input").val();
            var d = 0;
            if (!isNaN(i) && !isNaN(j)) {
                d = i * j
            }
            $(this).parents(".fee-hotel-row").find(".fee-amont-plane").text(d.toFixed(1))
        });
        $(".fee-plane-unit-input").focusout(function () {
            var j = $(this).val();
            var i = $(this).parents(".fee-hotel-row").find(".fee-plane-num-input").val();
            var d = 0;
            if (!isNaN(i) && !isNaN(j)) {
                d = i * j
            }
            $(this).parents(".fee-hotel-row").find(".fee-amont-plane").text(d.toFixed(1));
            itineraryFee.toCountAmontFee()
        });
        $(".fee-train-num-input").focusout(function () {
            var i = $(this).val();
            var j = $(this).parents(".fee-hotel-row").find(".fee-train-unit-input").val();
            var d = 0;
            if (!isNaN(i) && !isNaN(j)) {
                d = i * j
            }
            $(this).parents(".fee-hotel-row").find(".fee-amont-train").text(d.toFixed(1));
            itineraryFee.toCountAmontFee()
        });
        $(".fee-train-num-input").each(function () {
            var i = $(this).val();
            var j = $(this).parents(".fee-hotel-row").find(".fee-train-unit-input").val();
            var d = 0;
            if (!isNaN(i) && !isNaN(j)) {
                d = i * j
            }
            $(this).parents(".fee-hotel-row").find(".fee-amont-train").text(d.toFixed(1))
        });
        $(".fee-train-unit-input").focusout(function () {
            var j = $(this).val();
            var i = $(this).parents(".fee-hotel-row").find(".fee-train-num-input").val();
            var d = 0;
            if (!isNaN(i) && !isNaN(j)) {
                d = i * j
            }
            $(this).parents(".fee-hotel-row").find(".fee-amont-train").text(d.toFixed(1));
            itineraryFee.toCountAmontFee()
        });
        $(".schedule-price-cell-calculator").click(function () {
            if (itineraryFee.rollCalculating) {
                return
            }
            itineraryFee.rollCalculating = true;
            itineraryFee.calculateRollRow = $(this).parents(".fee-hotel-row");
            $(this).hide().parent().children(".schedule-toll-calculating").show();
            var d = $(".schedule-price-cell-calculator").index(this);
            var i = itineraryFee.drivingMessages[d];
            itineraryFee.dayPlaceCount = i.length;
            itineraryFee.rollPlaceIndex = 0;
            itineraryFee.rollData = i;
            itineraryFee.calculateRoll()
        });
        $(".fee-add-other-content").click(function () {
            var d = $(".fee-add-other-content").index(this);
            var i = $("#otherFeeItems").html();
            $(".other-fee-container").eq(d).append(i);
            $(".other-fee-title-input").last().focus();
            $(".other-fee-title-input,.other-fee-input").unbind("blur").blur(function () {
                itineraryFee.toCountAmontFee()
            });
            expenseDetailsScroll();
            $(".fee-other-remove").unbind("click").click(function () {
                $(this).parents(".fee-hotel-row").remove();
                itineraryFee.toCountAmontFee();
                SaveEditorItinerary()
            })
        });
        $(".fee-other-remove").click(function () {
            $(this).parents(".fee-hotel-row").remove();
            itineraryFee.toCountAmontFee();
            SaveEditorItinerary()
        });
        $(".other-fee-input").focusout(function () {
            itineraryFee.toCountAmontFee()
        });
        $(".public-traffic-fee").focusout(function () {
            itineraryFee.toCountAmontFee()
        });
        itineraryFee.toCountAmontFee();
        expenseDetailsScroll();
        $("#feeItineraryAccordionOuter").collapse().on("shown", function () {
            expenseDetailsScroll()
        }).on("hidden", function () {
            expenseDetailsScroll()
        });
        window.feeIsLasted = true
    }, numberChange: function (a) {
        var b = $(a).val();
        if (!isNaN(b)) {
            var c = $(a).parents(".fee-hotel-row").find(".fee-placeid-hidden").val().trim();
            $(".trip-schedule-item-outer").each(function () {
                var d = $(this).find(".placeInfoId").text().trim();
                if (c == d) {
                    $(this).find(".numberOfActor").text(b)
                }
            })
        }
    }, unitePriceChange: function (a) {
        var c = $(a).val();
        if (!isNaN(c)) {
            var b = $(a).parents(".fee-hotel-row").find(".fee-placeid-hidden").val().trim();
            $(".trip-schedule-item-outer").each(function () {
                var d = $(this).find(".placeInfoId").text().trim();
                if (b == d) {
                    $(this).find(".placeToll").text(c)
                }
            })
        }
    }, calculateFuelCost: function (b) {
        var d = $(b).val();
        if (!isNaN(d)) {
            var e = $(b).parents(".fee-hotel-row").find(".fee-car-unitprice-cell");
            var c = $(b).parents(".fee-hotel-row").find(".fee-driving-distance").text();
            var f = e.val() || 0;
            if (!isNaN(f)) {
                var a = d * f * c;
                $(b).parents(".fee-hotel-row").find(".fee-gasolene-value").text(a.toFixed(1))
            }
        }
    }, calculateTollCost: function (a) {
        var b = $(a).val();
        if (!isNaN(b)) {
            var c = $(a).parents(".fee-hotel-row").find(".per-capita-input").val();
            if (!isNaN(c)) {
                $(a).parents(".fee-hotel-row").find(".fee-roll-value").text((b * c).toFixed(1))
            }
        }
    }, calculatePlacesMultiple: function (h) {
        var g = 0;
        $(".hotels-fee-container").eq(h).find(".fee-amont-price").each(function () {
            var n = $(this).text().trim();
            if (n) {
                n = Number(n);
                g += n
            }
        });
        var k = 0;
        $(".places-fee-container").eq(h).find(".fee-amont-price").each(function () {
            var n = $(this).text().trim();
            if (n) {
                n = Number(n);
                k += n
            }
        });
        var f = 0;
        $(".foods-fee-container").eq(h).find(".fee-amont-price").each(function () {
            var n = $(this).text().trim();
            if (n) {
                n = Number(n);
                f += n
            }
        });
        var j = 0;
        $(".others-fee-container").eq(h).find(".fee-amont-price").each(function () {
            var n = $(this).text();
            if (n && n.trim()) {
                n = Number(n);
                j += n
            }
        });
        var d = $(".fee-gasolene-value").eq(h).text();
        if (d) {
            d = Number(d.trim())
        }
        var e = $(".fee-roll-value").eq(h).text().trim().trim();
        if (e) {
            e = Number(e.trim())
        }
        var b = $(".fee-amont-plane").eq(h).text();
        b = b ? Number(b.trim()) : 0;
        var c = $(".fee-amont-train").eq(h).text();
        c = c ? Number(c.trim()) : 0;
        var l = $(".public-traffic-fee").eq(h).val();
        l = l ? Number(l.trim()) : 0;
        var i = 0;
        $(".accordion-group").eq(h).find(".other-fee-input").each(function () {
            var n = $(this).val();
            if (n) {
                i += Number(n)
            }
        });
        var m = d + e + b + c + l;
        $(".fee-hotel-amont-price").eq(h).text(g.toFixed(1));
        $(".fee-place-amont-price").eq(h).text(k.toFixed(1));
        $(".fee-foods-amont-price").eq(h).text(f.toFixed(1));
        $(".fee-others-amont-price").eq(h).text(j.toFixed(1));
        $(".fee-traff-amont-price").eq(h).text(m.toFixed(1));
        $(".fee-other-amont-price").eq(h).text(i.toFixed(1));
        var a = g + k + f + j + m + i;
        $(".fee-schedule-amont-price").eq(h).html(a.toFixed(1));
        return a
    }, daySearchCompelete: function () {
        itineraryFee.rollCalculating = false;
        $(".schedule-price-cell-calculator").show();
        $(".schedule-toll-calculating").hide();
        var a = itineraryFee.calculateRollRow.find(".fee-tollcarnumber-input").val();
        itineraryFee.calculateRollRow.find(".per-capita-input").val(itineraryFee.scheduleToll);
        itineraryFee.calculateRollRow.find(".fee-roll-value").text((a * itineraryFee.scheduleToll).toFixed(1));
        itineraryFee.scheduleToll = 0;
        itineraryFee.toCountAmontFee()
    }, oneSearchCallBack: function () {
        itineraryFee.rollPlaceIndex++;
        if (itineraryFee.rollPlaceIndex < itineraryFee.dayPlaceCount) {
            itineraryFee.calculateRoll()
        } else {
            itineraryFee.daySearchCompelete()
        }
    }, calculateRollRow: null, rollCalculating: false, rollPlaceIndex: 0, scheduleToll: 0, dayPlaceCount: 0, rollData: null, calculateRoll: function () {
        var c, a;
        var b = itineraryFee.rollData[itineraryFee.rollPlaceIndex].Points.split(";");
        c = b[0];
        a = b[1];
        if (!c || !a || c == a) {
            itineraryFee.oneSearchCallBack()
        } else {
            soGouMapDrivingSearch([c, a], function (d) {
                itineraryFee.scheduleToll += d;
                itineraryFee.oneSearchCallBack()
            })
        }
    }, itineraryAdditionTrafficMsg: function (j) {
        for (var h = 0; h < j.ScheduleItems.length; h++) {
            var f = $(".accordion-group").eq(h);
            if (f.length > 0) {
                var e = f.find(".fee-driving-distance").text();
                var g = f.find(".fee-car-unitprice-cell").val();
                var c = f.find(".fee-carnumber-input").val();
                var r = f.find(".fee-tollcarnumber-input").val();
                var q = f.find(".drive-toll-input").val();
                var m = f.find(".fee-plane-num-input").val();
                var a = f.find(".fee-plane-unit-input").val();
                var u = f.find(".fee-train-num-input").val();
                var t = f.find(".fee-train-unit-input").val();
                var p = f.find(".fee-remark-textarea").val();
                var o = f.find(".public-traffic-fee").val();
                var l = [];
                f.find(".other-fee-title-input").each(function () {
                    var v = $(this).val().trim();
                    if (v.length > 30) {
                        v = v.substr(0, 30)
                    }
                    var i = $(this).parents(".fee-hotel-row").find(".other-fee-input").val();
                    if (v && i) {
                        l.push({feeTitle: v, price: i})
                    }
                });
                var s = {driveDistance: e, fuelUniteCosts: g, carNumber: c, tollCarNumber: r, toll: q, passengerTicket: m, airFare: a, trainTicket: u, trainFare: t, pubTrafficFee: o, remark: p, otherFees: l};
                j.ScheduleItems[h].TrafficFee = s
            }
        }
        var n = $("#numberOfPeople").val();
        var d = $("#carUnitpriceInput").val();
        var k = $("#numberOfCar").val();
        if (typeof j.Remarks === "undefined") {
            j.Remarks = {}
        }
        j.Remarks.CarNumber = k ? Number(k) : 0;
        j.Remarks.FuelCosts = d ? Number(d) : 0;
        j.Remarks.PeopleNumber = n ? Number(n) : 0;
        var b = $("#amountItineraryExpense").text();
        if (b) {
            b = Number(b.trim())
        } else {
            b = 0
        }
        if (j.Remarks.PeopleNumber < 1) {
            j.Amount = b / 1
        } else {
            j.Amount = b / Number(j.Remarks.PeopleNumber)
        }
        j.Amount = j.Amount.toFixed(1);
        return j
    }, init: function () {
        $("#numberOfPeople").blur(function () {
            var b = $(this).attr("data-pre");
            b = parseFloat(b ? b : 0);
            var a = parseFloat($(this).val());
            if (b !== a) {
                setTimeout(function () {
                    searchCost();
                    $(".fee-place-input").val(a).focus().blur();
                    $(".fee-hotel-number").val(Math.ceil(a / 2)).focus().blur();
                    $(".fee-foods-input").val(a).focus().blur()
                }, 100);
                $(this).attr("data-pre", a)
            }
        });
        $("#numberOfCar").blur(function () {
            var b = $(this).attr("data-pre");
            b = parseFloat(b ? b : 0);
            var a = parseFloat($(this).val());
            if (b !== a) {
                searchCost();
                setTimeout(function () {
                    $(".fee-carnumber-input").val(a).focus().blur();
                    $(".fee-tollcarnumber-input").val(a).focus().blur()
                }, 100);
                $(this).attr("data-pre", a)
            }
        });
        $("#carUnitpriceInput").blur(function () {
            var a = $(this).attr("data-pre");
            var b = $(this).val();
            if (a !== b) {
                setTimeout(function () {
                    searchCost();
                    $(".fee-car-unitprice-cell").val(b).focus().blur()
                }, 100);
                $(this).attr("data-pre", b)
            }
        });
        $("#refreshItineraryButton").click(function () {
            setTimeout(function () {
                itineraryFee.collecteItineraries()
            }, 600)
        });
        ko.applyBindings(itineraryFee, document.getElementById("schedulePriceDetails"));
        $(window).resize(function () {
            window.windHeight = $(window).height();
            expenseDetailsScroll()
        })
    }};
    itineraryFee.init()
}());
var mapPlaceAdd = {infoWindow: null, setInfoWindowDuration: 20, setInfoWindowIndex: 0, addScheduleButton: function () {
    InnTwoMapCore.clicked(inntwoMap, function () {
        (function a() {
            mapPlaceAdd.infoWindow = inntwoMap.getInfoWindow();
            if (mapPlaceAdd.infoWindow) {
                var b = $(".BMap_bubble_title");
                if (b.length > 0) {
                    b.append("<div title='来自百度' class='button button-flat-action add-schedule-map-place'>加入计划</div>")
                }
                b.find("a").removeAttr("href");
                b.find("a").eq(0).css({color: "#4d4d4d!important"}).show();
                b.find("a").eq(1).hide();
                $(".add-schedule-map-place").unbind("click").click(function () {
                    var e = $(this).parent().find("a").eq(0).text();
                    var d = mapPlaceAdd.infoWindow.getPosition();
                    var c = InnTwoTools.getIdentifyStringByDate();
                    customePlaceEditorClickEvent();
                    inntwoMapSearch.getAddressByPoint(d, function (g) {
                        if (g.province == g.city) {
                            g.city = ""
                        }
                        var f = InnTwoTools.format("{0}{1}{2}{3}{4}", g.province, g.city, g.district, g.street, g.streetNumber);
                        destinationAddOverlayInMap({pointPar: g.point, district: g.district, city: g.city, map: inntwoMap, province: g.province, tempSearchContent: e, identifyParam: c, address: f});
                        inntwoMapSearch.addCloseMarkerBtn();
                        inntwoMap.setCenter(g.point);
                        inntwoMapSearch.mapClickHideOverlay(inntwoMap);
                        placeOverLayAddToSchedule({placeName: e, icoUrl: "/img/asset2/customPlaceImg.jpg", PlaceInfoId: c, categoryId: "customePlace", placePoint: g.point.lng + "," + g.point.lat, type: "customePlace", clicked: $(".add-schedule-map-place"), notShowSuggestion: true, notShowComment: true, placeProvince: g.province, placeCity: g.city, placeDistrict: g.district, parentCategory: "3", Address: f})
                    });
                    setTimeout(function () {
                        inntwoMap.closeInfoWindow()
                    }, 500);
                    inntwoMapSearch.addCloseMarkerBtn()
                });
                $(".BMap_bubble_content").children().eq(1).hide();
                mapPlaceAdd.setInfoWindowIndex = 0
            } else {
                if (mapPlaceAdd.setInfoWindowIndex < mapPlaceAdd.setInfoWindowDuration) {
                    mapPlaceAdd.setInfoWindowIndex++;
                    setTimeout(a, 100)
                } else {
                    mapPlaceAdd.setInfoWindowIndex = 0
                }
            }
        }())
    })
}, routeSearching: false, setScheduleNumberDdl: function () {
    var a = $(".trip_schedule_sightspots_container").length;
    $(".trip_schedule_sightspots_container").each(function () {
        var b = $(".trip_schedule_sightspots_container").index(this);
        var d = "<li class='setschedule-number-ddl-title'>移动到</li>";
        var c;
        for (var e = 0; e < a; e++) {
            if (b == e) {
                c = "inntwo-text-transparent"
            } else {
                c = ""
            }
            d += InnTwoTools.format("<li class='setschedule-number-ddl-content {1}' num='{0}'>第{0}天</li>", (e + 1), c)
        }
        $(this).find(".create-itinerary-schedule-number").html(d)
    });
    $(".setschedule-number-ddl-content").unbind("click").click(function () {
        if (this.routeSearching) {
            return
        }
        var c = $(this).attr("num");
        var b = Number(c) - 1;
        if (b == window.nowSchduleIndex) {
            return
        }
        var f = $(this).parents(".trip-schedule-item-outer");
        var i = takePlaceItemMessage(f);
        removePlaceFromSchedule($(this));
        window.notCoordinate = true;
        setTimeout(function () {
            window.notCoordinate = false
        }, 100);
        var g = i.Category == "3" ? "Hotel" : i.Category;
        var d = {};
        d.icoUrl = i.PicUrl;
        d.placeName = i.PlaceName;
        d.placeProvince = i.Province;
        d.placeCity = i.City;
        d.placeDistrict = i.District;
        d.categoryId = i.Category;
        d.type = g;
        d.placePoint = i.PlacePoint;
        d.PlaceInfoId = i.PlaceInfoId;
        d.PlaceExpense = i.PlaceExpense;
        d.dayIndex = b;
        d.isMove = true;
        d.IsCustom = i.IsCustom;
        d.notShowComment = g != "delicacy";
        d.delicacyCommentNumber = i.DelicacyCommentNumber;
        d.duration = i.Duration;
        d.parentCategory = i.PlaceParentCategory;
        d.Address = i.Address;
        addSightSpotInSchedule(d);
        trafficDdlClick();
        planIcoChange();
        setItineraryItemFirstHide();
        mapPlaceAdd.addedSchedulePopup();
        var h = $(".schedule-item-linkprev");
        if (b > 0) {
            h.eq(b).show()
        }
        $(".trip_schedule_sightspots_container").eq(b).find(".cet-itin-planico-container").last().children(".cet-itin-planico").eq(0).css({"background-color": "#00a1cb"}).append("<input type='hidden' class='cet-itin-hidden-planico-sele-flag' />");
        var e = $(".trip_schedule_sightspots_container").eq(window.nowSchduleIndex).children(".trip-schedule-item-outer").length;
        if (e < 1) {
            h.eq(window.nowSchduleIndex).hide()
        } else {
            if (window.nowSchduleIndex > 0) {
                h.eq(window.nowSchduleIndex).show()
            }
        }
        $(".trip-schedule-items-distance-duration").css({display: "block"});
        $(".trip_schedule_sightspots_container").eq(0).find(".trip-schedule-items-distance-duration").eq(0).hide();
        mapPlaceAdd.resetorignAndDestination()
    })
}, recommedPlaceRoute: function () {
    var a = "想去哪儿？桂林，北海，三亚......";
    $("#createItineraryRecommendInput").attr("placeholder", a);
    var b = new window.BMap.LocalCity();
    b.get(function (d) {
        $("#recommendOrignCoordinate").val(d.center.lng + "," + d.center.lat);
        $("#createItineraryRecommendCityinput").val(d.name)
    });
    var c = InnTwoTools.getCookies("CreateItineraryHiddenRecommendChannel");
    if (c != "1") {
        $(".create-itinernary-place-recommend").modal({backdrop: "static"}).on("shown", function () {
            $(".create-itinerary-place-recommend-close").unbind("click").click(function () {
                $(".create-itinernary-place-recommend").modal("hide")
            });
            $("#NextNotPopup").unbind("change").change(function () {
                var e = $(this).attr("checked");
                if (typeof e === "undefined") {
                    InnTwoTools.setCookies("CreateItineraryHiddenRecommendChannel", "1", -1)
                } else {
                    InnTwoTools.setCookies("CreateItineraryHiddenRecommendChannel", "1", 30)
                }
            });
            var d = function () {
                $("#createItineraryRecommendInput").val("");
                d = function () {
                }
            };
            $(".create-itinerary-plusbtn").unbind("click").click(function () {
                var e = $(this).parent().children(".float-tabs-s").text().trim();
                setTimeout(function () {
                    d();
                    if (e) {
                        var h = $(".create-itinerary-recommend-input").val();
                        h = h.split("，");
                        var f = false;
                        for (var g = 0; g < h.length; g++) {
                            if (h[g] == e) {
                                f = true;
                                break
                            }
                        }
                        if (!f) {
                            var j = $(".create-itinerary-recommend-input").val();
                            j += "，" + e;
                            if (j[0] == "，") {
                                j = j.substring(1)
                            }
                            $(".create-itinerary-recommend-input").val(j);
                            $("#createItineraryRecommendWarning").hide()
                        }
                    }
                }, 100)
            });
            $("#createItineraryRecommendInput").blur(function () {
                var e = $(this).val().trim();
                if (!e || a == e) {
                    $("#createItineraryRecommendWarning").show();
                    return
                } else {
                    $("#createItineraryRecommendWarning").hide()
                }
            });
            $(".create-itinerary-recommend-btn").unbind("click").click(function () {
                var e = $("#createItineraryRecommendInput").val().trim();
                if (!e || a == e) {
                    $("#createItineraryRecommendWarning").show();
                    return
                }
                $(".create-itinernary-place-recommend").modal("hide");
                InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_ROUTE})
            })
        })
    }
}, resetorignAndDestination: function () {
    $(".route-start-sign").remove();
    $(".route-end-sign").remove();
    var a = $(".placePoint").first().text();
    a = {lng: a.split(",")[0], lat: a.split(",")[1]};
    var b = $(".placePoint").last().text();
    b = {lng: b.split(",")[0], lat: b.split(",")[1]};
    $(".place_marker_json_data").each(function () {
        var e = $(this).text();
        if (e) {
            var f = JSON.parse(e);
            if (!f.point) {
                if (f.lat && f.lng) {
                    f.point = {lat: f.lat, lng: f.lng}
                }
            }
            if (f.point) {
                var d = InnTwoTools.isLikenessLngLat({p1: a, p2: f.point, });
                var g = $(this).parents(".home_place_marker,.ordinary_marker_channel").find(".place_marker_inner_html");
                if (d) {
                    g.append("<div class='marker-background-image route-start-sign'></div>")
                }
                var c = InnTwoTools.isLikenessLngLat({p1: b, p2: f.point, });
                if (c) {
                    g.append("<div class='marker-background-image route-end-sign'></div>")
                }
            }
        }
    })
}};
mapPlaceAdd.nearbySearch = function () {
    $("#nearByHotelButton").click(function () {
        $("#HotelSubmitBotton").click()
    });
    $("#nearByAttractionsButton").click(function () {
        $("#PlaceMoreSearchSubmit").click()
    })
};
mapPlaceAdd.addedSchedulePopup = function () {
    $(".trip_shchedule_sight_spot_name").unbind("click").click(function () {
        var c = $(this).parent().find(".categoryId").text();
        var b = $(this).parent().find(".placeToll").text();
        var a = $(this).parent().find(".placeInfoId").text();
        InnTwoTools.placeCategory({category: c, attraction: function () {
            attractionInfo.atractionPopup(a)
        }, hotel: function () {
            createItineraryHotel.hotelPopup(a, b)
        }, delicacy: function () {
            itineraryDelicious.popupDelicious(a)
        }})
    })
};
var mapMarkerAddToScheule = {setAddtoScheduleAnimate: function (h) {
    if (!h.animateImage) {
        h.animateImage = "/img/asset2/customPlaceImg.jpg"
    }
    if (!h.animaEle || h.animaEle.length < 1) {
        h.callBack();
        return
    }
    var f = h.originWidth ? h.originWidth : h.animaEle.width();
    var e = h.originHeight ? h.originHeight : h.animaEle.height();
    var d = h.desWidth ? h.desWidth : 43;
    var b = h.desHeight ? h.desHeight : 25;
    var g = h.animaEle.offset();
    var a = "<img alt='' style='width:" + f + "px;height:" + e + "px;' class='createitinerary-addplace-animate' src='" + h.animateImage + "' />";
    $("body").append(a);
    h.animaEle = $(".createitinerary-addplace-animate");
    h.animaEle.css({left: (g.left + 60) + "px", top: (g.top + 10) + "px"});
    var c = h.desEle.offset();
    h.animaEle.animate({left: c.left + "px", top: c.top + "px", width: d + "px", height: b + "px"}, 400, function () {
        h.animaEle.fadeOut(function () {
            h.animaEle.remove();
            h.callBack()
        })
    })
}, nearHotelPlaceAnimate: function (b) {
    var a = b.marker.parents(".ordinary_marker_channel");
    if (a.length < 1) {
        a = b.marker.parents(".home_place_marker")
    }
    mapMarkerAddToScheule.setAddtoScheduleAnimate({animaEle: a, animateImage: "/img/asset3/nearbyplaceanimate.png", desEle: b.destination, originWidth: 20, originHeight: 21, desWidth: 50, desHeight: 52, callBack: function () {
    }})
}, hiddenNearbyHotel: function () {
    $("#homeLoginStatus").click(function () {
        $(".createitinerary-hidden-nearby").click()
    })
}};
$(function () {
    mapPlaceAdd.nearbySearch()
});
var itineraryHotPlace = {placeAddAnimating: false, setPlacesCategoryTab: function () {
    $(".hot-places-categories-outer div a").click(function (b) {
        b.preventDefault();
        $(this).tab("show");
        $(".hot-places-categories").removeClass("active");
        $(this).parents(".hot-places-categories").addClass("active");
        var d = $(this).attr("href");
        var a = $(d).children();
        for (var c = 0; c < a.length; c++) {
            var f = a.eq(c).children("img");
            f.attr("src", f.attr("data-index"))
        }
    })
}, newPlacesCategoryTab: function () {
    var a = $("#key0").children();
    for (var b = 0; b < a.length; b++) {
        var c = a.eq(b).children("img");
        c.attr("src", c.attr("data-index"))
    }
}, animatingPlace: {}, setAddPlaceSchedule: function () {
    $(".hot-places-favorite").click(function () {
        var a = $(".hot-places-selected-wrapper").length;
        if (a > 6) {
            return
        }
        var h = $(this).parents(".hot-places-container");
        var i = h.find(".home-place-address").text();
        var e = false;
        $(".hot-places-box-name").each(function () {
            var l = $(this).text().trim();
            if (i == l) {
                e = true
            }
        });
        if (e) {
            return
        }
        if (itineraryHotPlace.placeAddAnimating) {
            return
        }
        itineraryHotPlace.placeAddAnimating = true;
        var f = h.find(".hot-places-category-image");
        f = f.attr("src");
        itineraryHotPlace.animatingPlace = {imgSrc: f, location: h.attr("coordinate"), name: h.find(".home-place-address").text(), destinationid: h.attr("destinationid"), duration: h.attr("duration")};
        var g = h.offset();
        var j = g.left;
        var k = g.top;
        var d = $("#homePlacesBoxIco").offset();
        var b = d.left + 5;
        var c = d.top + 20;
        $(this).hide();
        $("body").append("<img class='home-place-img-animate' style='left:" + j + "px;top:" + k + "px;' src='" + f + "' />");
        setTimeout(function () {
            $(".home-place-img-animate").animate({left: b + "px", top: c + "px", width: 25 + "px", height: 25 + "px"}, 300, function () {
                $(".home-place-img-animate").fadeOut(function () {
                    $(".home-place-img-animate").remove();
                    itineraryHotPlace.placeAddAnimating = false
                });
                itineraryHotPlace.addToBox()
            })
        }, 200)
    })
}, addToBox: function () {
    $(".home-palce-selected-container").show();
    itineraryHotPlace.favoritePlaces.push(itineraryHotPlace.animatingPlace);
    itineraryHotPlace.animatingPlace = {}
}, favoritePlaces: ko.observableArray([]), enableClose: function (a, b) {
    $(b.currentTarget).find(".hot-places-selected-close").show()
}, disableClose: function (a, b) {
    $(b.currentTarget).find(".hot-places-selected-close").hide()
}, removeFavorite: function (a, b) {
    var f = $(b.currentTarget).parents(".hot-places-selected-wrapper");
    var d = f.attr("coordinate");
    if (d) {
        $(".hot-places-container").each(function () {
            var e = $(this).attr("coordinate");
            if (e == d) {
                $(this).find(".hot-places-favorite").show()
            }
        })
    }
    f.remove();
    var c = $(".hot-places-selected-wrapper").length;
    if (c < 1) {
        $(".home-place-selected-remark").show()
    }
}, collectPlaces: function () {
    var a = {};
    a.OrginLocation = $("#hotPlacesSearchOrign").attr("location").trim();
    a.OrginPlace = $("#hotPlacesSearchOrign").val().trim();
    a.PlanningTripDestinations = [];
    $(".hot-places-selected-wrapper").each(function () {
        var c = $(this).attr("destinationid");
        var e = $(this).attr("coordinate");
        var f = $(this).find(".hot-places-box-name").text();
        var d = $(this).attr("duration");
        var b = {DestinationId: c, DestinationLocation: e, DestinationName: f, Duration: d};
        a.PlanningTripDestinations.push(b)
    });
    return a
}, modalItineraryCreate: function () {
    if (!InnTwoTools.getQueryStringByName("scheduleid")) {
        if (!InnTwoTools.getQueryStringByName("homeredirect")) {
            var a = InnTwoTools.getCookies(itineraryHotPlace.notOnceAgainCooKieKey);
            if (!a || a == "0") {
                $("#itineraryGenerateModal").show().animate({opacity: 1}, 500)
            }
            $("#SaveSketch").removeAttr("disabled")
        } else {
            var b = window.localStorage.getItem("home.planingPlaces");
            if (typeof b !== "undefined" && b) {
                $("#itineraryGenerateModal").show().animate({opacity: 1}, 500);
                itineraryHotPlace.itineraryPlaningAjax(b)
            } else {
                $("#SaveSketch").removeAttr("disabled")
            }
        }
    }
}, everyOnePlacesTraffic: function (e) {
    var b = $(".trip_schedule_sightspots_container");
    var d = b.length;
    var c = 0;
    (function a() {
        if (c < d) {
            var g = b.eq(c).find(".trip-schedule-item-outer");
            var h = g.length;
            var i = 0;
            (function f() {
                if (i < h) {
                    var j = g.eq(i);
                    var l = fullFindPrev(j);
                    var m = l.coordinate;
                    if (m) {
                        m = InnTwoMapCore.createPoint(m.split(",")[0], m.split(",")[1])
                    }
                    var k = fullFindNext(l.outer, i);
                    k = k.coordinate;
                    if (k) {
                        k = InnTwoMapCore.createPoint(k.split(",")[0], k.split(",")[1])
                    }
                    if (m && k) {
                        toCountDisDuration({way: 0, wayEle: j.find(".create-itinerary-wayico"), prevPoint: m, point: k, callback: function (n) {
                            fillDrivingResult(n);
                            $(".create-itinerary-plan-container").hide();
                            i++;
                            setTimeout(f, 300)
                        }})
                    } else {
                        i++;
                        f()
                    }
                } else {
                    calculateAmountDistanceDuration(c);
                    c++;
                    a()
                }
            }())
        } else {
            e.callBack()
        }
    }())
}, resetOrign: function () {
    $("#hotPlacesSearchOrign").focusout(function () {
        var a = $(this).val().trim();
        if (a && a != "") {
            inntwoMapSearch.addressSearch(a, inntwoMap, function (b) {
                var c = b.getPoi(0);
                c = c.point;
                $("#hotPlacesSearchOrign").attr({location: InnTwoTools.format("{0},{1}", c.lng, c.lat)})
            })
        }
    }).keyup(function (a) {
        if (a.keyCode == 13) {
            $("#hotPlacesSearchOrign").focusout()
        }
    })
}, orignAutoComplete: {}, destinationAutoComplete: {}, goSearchRoute: function () {
    $("#homePlacesSearchButton").click(function () {
        var c = $("#hotPlacesSearchOrign").val();
        var b = $("#homePlacesSearchInput").val();
        var a = $("#itineraryGenerateModal");
        if (c && c != "" && b && b != "") {
            bdAutocompletTripperStar.setInputValue(c);
            bdAutocompletTripperEnd.setInputValue(b);
            InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_ROUTE});
            $("#RouteTripperSearchRouteBtn").attr({disabled: "disabled"}).val("检索中...");
            a.animate({opacity: 0}, 300, function () {
                a.hide()
            });
            var d = [c, b];
            sideOfRoadAttraction.createRoute({places: d, routPolicy: 0, map: inntwoMap, strokeItem: stroke, callBack: sideOfRoadAttraction.setRoutDashed})
        } else {
            a.animate({opacity: 0}, 300, function () {
                a.hide()
            })
        }
    })
}, itineraryPlaning: function () {
    $("#generationItinerary").click(function () {
        var c = itineraryHotPlace.collectPlaces();
        if (!c.OrginPlace || c.PlanningTripDestinations.length < 1) {
            var b = $("#homePlacesSearchInput").val();
            if (b && b.trim()) {
                $("#homePlacesSearchButton").click()
            } else {
                $("#itineraryGenerateModal").animate({opacity: 0}, 300, function () {
                    $("#itineraryGenerateModal").hide()
                })
            }
            return
        }
        var a = JSON.stringify(c);
        itineraryHotPlace.itineraryPlaningAjax(a)
    })
}, planningError: "智能规划正在维护，请使用手动规划。", itineraryPlaningAjax: function (b) {
    var a = $("#itineraryPlanningContainer").html();
    $(".hot-place-box-colse").hide();
    $(".hot-places-back").html(a);
    var c = $("#SaveSketch");
    $.ajax({url: "/CreateItinerary/PlanningTrip", type: "post", data: {planningJson: b}, success: function (d) {
        InnTwoTools.JsonDataCallback({data: d, systemException: function () {
            $(".itinerary-planning-status").text(this.planningError);
            setTimeout(function () {
                $("#itineraryGenerateModal").animate({opacity: 0}, 300, function () {
                    $("#itineraryGenerateModal").hide()
                })
            }, 2000)
        }, bussinessException: function () {
            $(".itinerary-planning-status").text(this.planningError);
            c.removeAttr("disabled");
            setTimeout(function () {
                $("#itineraryGenerateModal").animate({opacity: 0}, 300, function () {
                    $("#itineraryGenerateModal").hide()
                })
            }, 2000)
        }, success: function () {
            d.IgnoreStartDate = 1;
            window.globalItinerary = d;
            window.globalItinerary.StartDate = InnTwoTools.getNowDateStr();
            $(".itinerary-planning-status").text("正在为您规划行程...");
            $(".customize-placeMarker-closeBtn").click();
            bindDataByItineraryJson();
            itineraryHotPlace.additionAddressMsg();
            c.attr({disabled: "disabled"}).val("检索路线中...");
            var e = $("#SaveItineraryButton");
            e.css({left: "-175px"});
            itineraryHotPlace.everyOnePlacesTraffic({callBack: function () {
                setTimeout(function () {
                    $("#itineraryGenerateModal").animate({opacity: 0}, 300, function () {
                        $("#itineraryGenerateModal").hide()
                    });
                    window.globalItinerary = parserScheduleJson();
                    setItineraryPlacesTraffic();
                    SaveEditorItinerary();
                    e.css({left: "-135px"});
                    c.removeAttr("disabled").val("保     存")
                }, 4000)
            }});
            settleItineraryDefaultTitle()
        }})
    }})
}, notOnceAgainCooKieKey: "hotPlacesNotOnceAgain", notOnceAgain: function () {
    $(".hot-places-not-once-again").click(function () {
        var a = $("#hotPlacesNotOnceAgain").attr("checked");
        if (a == "checked") {
            InnTwoTools.setCookies(itineraryHotPlace.notOnceAgainCooKieKey, 1, 30)
        } else {
            InnTwoTools.setCookies(itineraryHotPlace.notOnceAgainCooKieKey, 0, 30)
        }
    })
}, additionAddressMsg: function () {
    $(".trip_schedule_sight_spot_container").each(function () {
        var a = $(this).find(".placePoint").text();
        if (a) {
            a = a.split(",");
            a = InnTwoMapCore.createPoint(a[0], a[1]);
            inntwoMapSearch.getAddressByPoint(a, function (b) {
                if (b) {
                    $(".trip_schedule_sight_spot_container").each(function () {
                        var c = $(this).find(".placePoint").text();
                        if (c) {
                            c = c.split(",");
                            var d = InnTwoTools.isLikenessLngLat({p1: {lng: c[0], lat: c[1]}, p2: b.point});
                            if (d) {
                                $(this).find(".placeProvince").text(b.province);
                                $(this).find(".placeCity").text(b.city);
                                $(this).find(".placeDistrict").text(b.district)
                            }
                        }
                    })
                }
            })
        }
    })
}, closePopup: function () {
    $(".hot-place-box-colse").click(function () {
        $("#itineraryGenerateModal").animate({opacity: 0}, 300, function () {
            $("#itineraryGenerateModal").hide()
        })
    })
}};
$(function () {
    itineraryHotPlace.setPlacesCategoryTab();
    itineraryHotPlace.setAddPlaceSchedule();
    ko.applyBindings(itineraryHotPlace, document.getElementById("itineraryGenerateModal"));
    itineraryHotPlace.itineraryPlaning();
    itineraryHotPlace.resetOrign();
    itineraryHotPlace.orignAutoComplete = new window.BMap.Autocomplete({input: "hotPlacesSearchOrign", location: inntwoMap, onSearchComplete: function () {
        $(".tangram-suggestion").css({"border-color": "#4DA49F", "background-color": "#f5f5f5"}).width(167)
    }});
    itineraryHotPlace.destinationAutoComplete = new window.BMap.Autocomplete({input: "homePlacesSearchInput", location: inntwoMap, onSearchComplete: function () {
        $(".tangram-suggestion").css({"border-color": "#4DA49F", "background-color": "#f5f5f5"}).width($("#homePlacesSearchInput").width())
    }});
    itineraryHotPlace.goSearchRoute();
    itineraryHotPlace.notOnceAgain();
    itineraryHotPlace.newPlacesCategoryTab();
    itineraryHotPlace.closePopup()
});
var attractionInfo = {placeId: "", counter: -1, isPlay: true, closeAttraction: function () {
    $(".attraction-close").click(function () {
        $("#attraPopupContainer").hide();
        attractionInfo.clearAttractionPopup()
    })
}, attrationRating: function () {
    $("#attractionCommendStars").raty({readOnly: false, score: 3, half: true, path: "/img/asset2", hints: ["还是不要去了", "去不去看自己", "可以去", "建议去", "不去会后悔的"]})
}, isloadedAttrComment: false, isloadedWeiBoComment: false, attrationTabs: function () {
    $("#attractionTabsContainer a").click(function (a) {
        a.preventDefault();
        $(this).tab("show");
        var b = $(this).attr("href");
        if (b == "#guestComment") {
            if (!attractionInfo.isloadedAttrComment) {
                attractionInfo.getAttractionCommend(1);
                attractionInfo.isloadedAttrComment = true
            }
        } else {
            if (b == "#WeiboDetails") {
                if (!attractionInfo.isloadedWeiBoComment) {
                    attractionInfo.showWeibo(attractionInfo.placeId, 1);
                    attractionInfo.isloadedWeiBoComment = true
                }
            } else {
                if (b == "#booking") {
                    attractionInfo.getTongchengFee()
                }
            }
        }
    })
}, attrMap: null, mapFirstLoaded: true, attractionMap: function () {
    setTimeout(function () {
        attractionInfo.attrMap = InnTwoMapCore.createMap("attractionTraffic");
        InnTwoMapCore.mapLoaded(attractionInfo.attrMap, function () {
            if (attractionInfo.mapFirstLoaded) {
                setTimeout(function () {
                    attractionInfo.attractionMarker()
                }, 2000);
                attractionInfo.mapFirstLoaded = false
            }
        });
        attractionInfo.attractionMap = function () {
        }
    }, 1000)
}, latlng: "", attractionMarker: function () {
    attractionInfo.latlng = $.trim($("#hiddenPlaceLngLat").val());
    if (!attractionInfo.latlng || attractionInfo.latlng.indexOf(",") < 0) {
        return
    }
    var b = attractionInfo.latlng.split(",")[0];
    var c = attractionInfo.latlng.split(",")[1];
    var e = new window.BMap.Point(c, b);
    var a = '<div style="margin:0;line-height:20px;padding:2px;"><img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>地址：北京市海淀区上地十街10号<br/>电话：(010)59928888<br/>简介：百度大厦位于北京市海淀区西二旗地铁站附近，为百度公司综合研发及办公总部。</div>';
    var f = new window.BMapLib.SearchInfoWindow(attractionInfo.attrMap, a, {title: "百度大厦", width: 290, height: 105, panel: "panel", enableAutoPan: true, searchTypes: [window.BMAPLIB_TAB_SEARCH, window.BMAPLIB_TAB_TO_HERE, window.BMAPLIB_TAB_FROM_HERE]});
    var d = new window.BMap.Marker(e);
    d.addEventListener("click", function () {
        f.open(d)
    });
    attractionInfo.attrMap.addOverlay(d);
    f.open(d)
}, atractionPopup: function (c) {
    attractionInfo.placeId = c;
    $("#attraPopupContainer").fadeIn();
    attractionInfo.attrationTabs();
    attractionInfo.atractionData(c);
    $("#attractionCommentInput").val("");
    var d = $("#attractionTabsContainer li a");
    d.first().addClass("attraction-tabs-selected");
    d.click(function () {
        $("#attractionTabsContainer li a").removeClass("attraction-tabs-selected");
        $(this).addClass("attraction-tabs-selected")
    });
    var b = $(".attraction-banner-img img").first();
    if (b.length > 0) {
        var a = $(".attraction-banner-img-left");
        a.hide();
        a.first().find("img").attr("src", b.attr("src"));
        a.first().show()
    }
    attractionInfo.atractionPopup = function (e) {
        attractionInfo.placeId = e;
        $("#attraPopupContainer").fadeIn();
        attractionInfo.attrationTabs();
        attractionInfo.atractionData(e);
        $("#attractionCommentInput").val("");
        d.first().click()
    }
}, clearAttractionPopup: function () {
    $(".attraction-banner-img-left img").attr("src", "");
    attractionInfo.prices([]);
    attractionInfo.isloadedAttrComment = false;
    attractionInfo.isloadedWeiBoComment = false
}, atractionDoubleClick: function () {
    $("#attraPopupContainer").click(function () {
        $(this).hide();
        attractionInfo.comments([]);
        attractionInfo.clearAttractionPopup()
    });
    $(".attracction-background-container").click(function (a) {
        a.stopPropagation()
    })
}, atractionData: function (a) {
    $.ajax({url: ajaxUrl.attractionWeiboTotal_Url, type: "post", data: {attractionId: a}, success: function (b) {
        InnTwoTools.JsonDataCallback({data: b, success: function () {
            $("#weiboTotal").text(b.Total)
        }})
    }});
    $("#attracction-main").hide();
    $(".attraction-nodata").show();
    $("#attraction-nodata").hide();
    $(".data-loading-wrapper").show();
    $.ajax({url: ajaxUrl.FindPlaceDetails_Url, data: {id: a, }, type: "post", success: function (b) {
        InnTwoTools.JsonDataCallback({data: b, systemException: function () {
        }, notFound: function () {
            $(".data-loading-wrapper").hide();
            $("#attraction-nodata").show()
        }, bussinessException: function () {
        }, success: function () {
            $(".attraction-nodata").hide();
            $("#attracction-main").show();
            $("html,body").animate({scrollTop: 0}, 0);
            $("#hiddenAttrTCID").val(b.data.TCID);
            $("#hiddenPlaceId").val(b.data.PlaceId);
            $("#hiddenPlaceLngLat").val(b.data.Location);
            $("#userImg").attr("src", b.UserIco);
            $(".attraction-name-details .inntwo-text-bold").text(b.data.PlaceName);
            attractionInfo.Addr(b.data.Addr);
            var e = "";
            for (var c = 0; c < b.data.Grade; c++) {
                e += "A"
            }
            $(".attraction-name-leavel span").text(e);
            $("#adder span").text(b.data.Addr);
            $("#openDateTimeDuration span").text(b.data.OpenInfo);
            $("#tripDuration span").text(b.data.Duration);
            if (b.data.Ticket == null || typeof b.data.Ticket === "undefined" || !b.data.Ticket || b.data.Ticket == 0) {
                $(".attraction-price-x span").text("免费");
                $("#attractionPriceLower").hide()
            } else {
                $(".attraction-price-x span").text(b.data.Ticket);
                $("#attractionPriceLower").show()
            }
            attractionInfo.html = "";
            var f = b.data.Tags.split(",");
            for (c = 0; c < f.length; c++) {
                switch (Math.ceil(Math.random() * 5)) {
                    case 0:
                        attractionInfo.html += "<span class='badge badge-important'>" + f[c] + "</span>";
                        break;
                    case 1:
                        attractionInfo.html += "<span class='badge badge-info'>" + f[c] + "</span>";
                        break;
                    case 2:
                        attractionInfo.html += "<span class='badge badge-success'>" + f[c] + "</span>";
                        break;
                    case 3:
                        attractionInfo.html += "<span class='badge badge-warning'>" + f[c] + "</span>";
                        break;
                    case 4:
                        attractionInfo.html += "<span class='badge inntwo-backgroud-color-success'>" + f[c] + "</span>";
                        break
                }
            }
            $(".attraction-tags-title").html(attractionInfo.html);
            attractionInfo.html = "";
            var d = 0;
            d = b.data.Imgs.length;
            for (c = 0; c < d; c++) {
                attractionInfo.html += "<div id=attractionBannerImgRight" + c + " class=attraction-banner-img><img src=" + b.data.Imgs[c] + " data=" + c + "  /></div>";
                $("#imgLeft" + c + " img").attr("src", b.data.Imgs[c])
            }
            $(".attraction-banner-img-inner").css("top", 0);
            $(".attraction-banner-img-inner").html(attractionInfo.html);
            if ($(".attraction-banner-img-inner div:last").index() > 2) {
                $(".attraction-banner-img-right .thumbnail-controll").css("display", "inline-block")
            } else {
                $(".attraction-banner-img-right .thumbnail-controll").css("display", "none")
            }
            $(".attraction-banner-img-inner div").unbind("click").click(function () {
                $(this).css("border", "4px solid #fbc198").siblings().css("border", "4px solid #fff");
                var g = $(this).children("img").attr("src");
                $("#imgLeft0 img").attr("src", g);
                return false
            });
            $(".attraction-banner-img-right .thumbnail-prev").unbind("click").click(function () {
                $(".attraction-banner-img-inner div:first").before($(".attraction-banner-img-inner div:last"));
                var g = $(".attraction-banner-img-inner  div").eq(1).children("img").attr("src");
                $(".attraction-banner-img-inner  div").eq(1).css("border", "4px solid #fbc198").siblings().css("border", "4px solid #fff");
                $("#imgLeft0 img").attr("src", g);
                return false
            });
            $(".attraction-banner-img-right .thumbnail-next").unbind("click").click(function () {
                $(".attraction-banner-img-inner").animate({top: 0}, 100, function () {
                    $(".attraction-banner-img-inner div:last").after($(".attraction-banner-img-inner div:first"));
                    $(".attraction-banner-img-inner").css("top", 0);
                    var g = $(".attraction-banner-img-inner div").eq(1).children("img").attr("src");
                    $(".attraction-banner-img-inner div").eq(1).css("border", "4px solid #fbc198").siblings().css("border", "4px solid #fff");
                    $("#imgLeft0 img").attr("src", g)
                });
                return false
            });
            if (b.data.Notes && (b.data.Notes.trim())) {
                $(".notes-content").html(b.data.Notes);
                $(".must-know-not-data").hide();
                $(".notes-content").show()
            } else {
                $(".must-know-not-data").show();
                $(".notes-content").hide()
            }
            $(".data-loading-wrapper").hide();
            if (b.data.Introduces) {
                $("#attractionIntroduce").html(b.data.Introduces);
                $("#attractionIntroduce").show();
                $("#description .inntwo-not-data").hide()
            } else {
                $("#description .inntwo-not-data").show();
                $("#attractionIntroduce").hide()
            }
            attractionInfo.attractionId(b.data.PlaceId);
            attractionInfo.placeTcid(b.data.TCID)
        }, })
    }})
}, weibolist: ko.observableArray([]), showWeibo: function (b, a) {
    attractionInfo.weibolist([]);
    $("#weiboPager").hide();
    $("#weibo-nodata").hide();
    $(".weibo-loading-wrapper").show();
    $.ajax({url: ajaxUrl.attractionWeiboDetails_Url, data: {id: b, pageIndex: a}, type: "post", success: function (c) {
        if (!c.Total) {
            $("#weibo-nodata").show()
        }
        $(".weibo-loading-wrapper").hide();
        attractionInfo.weibolist(c.Content);
        attractionInfo.thumbnailsControll();
        $("#weiboPager").show();
        var e = InnTwoTools.GetTotalPages(c.Total, c.PageSize);
        var d = {currentPage: c.CurrentPage, totalPages: e, shouldShowPage: (e > 1), size: "normal", alignment: "center", onPageChanged: function (f, h, g) {
            attractionInfo.showWeibo(b, g)
        }};
        $("#weiboPager").bootstrapPaginator(d)
    }})
}, Addr: ko.observable(""), comments: ko.observableArray([]), pageIndex: 1, getAttractionCommend: function (a) {
    attractionInfo.pageIndex = a ? a : 1;
    $.ajax({url: ajaxUrl.AttractionComment_Url, data: {id: $("#hiddenPlaceId").val(), pageIndex: attractionInfo.pageIndex}, type: "post", success: function (b) {
        InnTwoTools.JsonDataCallback({data: b, success: function () {
            if (b.Content.length > 0) {
                attractionInfo.comments(b.Content);
                $(".comments-rating").raty({readOnly: true, score: function () {
                    return $(this).attr("data-score")
                }, path: "/img/asset2", hints: ["还是不要去了", "去不去看自己", "可以去", "建议去", "不去会后悔的"]})
            }
            if (attractionInfo.pageIndex == 1) {
                var d = InnTwoTools.GetTotalPages(b.Total, 5);
                var c = {currentPage: 1, totalPages: d, shouldShowPage: (d > 1), size: "normal", alignment: "center", onPageChanged: function (f, h, g) {
                    attractionInfo.getAttractionCommend(g)
                }};
                $("#attractionCommentPager").bootstrapPaginator(c)
            }
        }, systemException: function () {
            InnTwoTools.Alert(b.Message)
        }, bussinessException: function () {
            InnTwoTools.Alert(b.Message)
        }, notFound: function () {
            attractionInfo.comments([])
        }})
    }})
}, html: "", comment: ko.observable(""), attractionId: ko.observable(""), placeTcid: ko.observable(""), commendSubmit: function () {
    var b = $.trim(attractionInfo.comment());
    if (b == "") {
        InnTwoTools.Alert("请输入评论内容！");
        return
    }
    if (b.length > 200) {
        InnTwoTools.Alert("评论内容不能超过两百字！");
        return
    }
    $("#commendSubmit").attr({disabled: true});
    var a = attractionInfo.comment();
    var c = $("#attractionCommendStars").children("input[name=score]").val();
    c = $.trim(c);
    $.ajax({url: "/AttractionComment/SubmitAttractionComment", data: {Comments: a, Id: attractionInfo.attractionId(), Score: c}, type: "post", success: function (d) {
        $("#commendSubmit").removeAttr("disabled");
        InnTwoTools.JsonDataCallback({data: d, success: function () {
            InnTwoTools.Alert("评论成功！");
            attractionInfo.getAttractionCommend();
            attractionInfo.comment("")
        }, systemException: function () {
            InnTwoTools.Alert(d.Message)
        }, bussinessException: function () {
            InnTwoTools.Alert(d.Message)
        }, unAuthorize: function () {
            inntwoBase.loginSuccess = function (e) {
                $(".commenter-ico").attr({src: e.userIco});
                attractionInfo.commendSubmit()
            };
            inntwoBase.popupUserLogin()
        }})
    }})
}, prices: ko.observableArray([]), getTongchengFee: function () {
    $.ajax({url: ajaxUrl.FindAttractionPriceById_Url, data: {tcid: $("#hiddenAttrTCID").val()}, type: "post", success: function (a) {
        var b = $("#booking .inntwo-not-data");
        InnTwoTools.JsonDataCallback({data: a, success: function () {
            attractionInfo.prices(a);
            if (a.length > 0) {
                $(".booking-table tr").show();
                $(".attraction-reserve-button").attr("href", "/html/gototc.html?attractionid=" + attractionInfo.placeTcid());
                b.hide()
            } else {
                $(".booking-table tr").hide();
                b.show();
                $(".notes-content").hide();
                $(".must-know-not-data").hide()
            }
        }, systemException: function () {
            InnTwoTools.Alert(a.Message)
        }, bussinessException: function () {
            InnTwoTools.Alert(a.Message)
        }, notFound: function () {
            $(".booking-table tr").hide();
            b.show();
            $(".notes-content").hide();
            $(".must-know-not-data").hide()
        }})
    }})
}, popupAttractionFavorite: function () {
    $("#placePopupFavorite").click(function () {
        var a = attractionInfo.attractionId();
        if (a) {
            nearbySearch.favoritePlaceById(a)
        }
    })
}, attractionResize: function () {
    $(window).resize(function () {
        var a = $(window).height();
        $("#placeSearchResultPanelInner,#morePlacesScrollBarContainer,#PlaceSearchList,#PlaceSearchResultPanel").height(a - 160);
        tripScheduleScroll("placeSearchResultPanelInner", $("#morePlacesScrollBarContainer"), $("#moreplaceCustomScrollBarMorePlace"))
    })
}, thumbnailsControll: function () {
    var f = $(".thumbnail-small").width() + 8;
    $("#WeiboDetails .thumbnail").click(function () {
        var j = $(this).index();
        $(this).parent().hide();
        $(this).parent().next(".imgview-big").show();
        if ($(this).parent().find(".thumbnail:last").index() == 0) {
            $(this).parents().next(".imgview-big").find(".imgsview-small-controll").hide();
            var i = InnTwoTools.format(inntwoBase.weiboBmiddleImgAddr, $(this).children("img").attr("dataPic"));
            $(this).parent().next(".imgview-big").find(".thumbnail-big").children("img").attr("src", i);
            return
        }
        c($(this).parent().next(".imgview-big"), j);
        var k = $(this).parent().next(".imgview-big").find(".thumbnail-small ").size();
        $(this).parent().next(".imgview-big").find(".thumbnails-small").width(k * 60)
    });
    $(".imgview-big .thumbnail-big img").click(function () {
        var i = $(this).parents(".imgview-big").find(".thumbnails-select").index();
        switch (a) {
            case"prev":
                i--;
                b($(this), i);
                e($(this), 1);
                return false;
            case"next":
                i++;
                b($(this), i);
                d($(this), 1);
                return false;
            default:
                $(this).parents(".imgview-big").hide();
                $(this).parents(".imgview-big").prev(".imgview-small").show()
        }
    });
    function b(k, j) {
        if (j < 0 || j > k.parents(".imgview-big").find(".thumbnail-small:last").index()) {
            return
        }
        var i = InnTwoTools.format(inntwoBase.weiboBmiddleImgAddr, k.parents(".imgview-big").find(".thumbnail-small").eq(j).children().attr("dataPic"));
        k.attr("src", i);
        k.parents(".imgview-big").find(".thumbnail-small").eq(j).removeClass("thumbnails-noselect").addClass("thumbnails-select");
        k.parents(".imgview-big").find(".thumbnail-small").eq(j).siblings().removeClass("thumbnails-select").addClass("thumbnails-noselect")
    }

    function d(k, i) {
        var j = k.parents(".imgview-big").find(".thumbnails-small").width() - 480 + k.parents(".imgview-big").find(".thumbnails-small").position().left;
        if (j <= 0) {
            return
        }
        k.parents(".imgview-big").find(".thumbnails-small").animate({left: "-=" + f}, 50)
    }

    function e(k, j) {
        var i = k.parents(".imgview-big").find(".thumbnails-small").position().left;
        if (i == 0) {
            return
        }
        k.parents(".imgview-big").find(".thumbnails-small").animate({left: "+=" + f}, 50)
    }

    function c(l, j) {
        l.find(".thumbnail-small").eq(j).removeClass("thumbnails-noselect").addClass("thumbnails-select");
        l.find(".thumbnail-small").eq(j).siblings().removeClass("thumbnails-select").addClass("thumbnails-noselect");
        var k = f * 6 - l.find(".thumbnail-small").eq(j).position().left;
        if (k < 0) {
            l.find(".thumbnails-small").animate({left: k}, 50)
        }
        var i = InnTwoTools.format(inntwoBase.weiboBmiddleImgAddr, l.find(".thumbnail-small").eq(j).children().attr("dataPic"));
        l.find(".thumbnail-big ").children("img").attr("src", i)
    }

    var a;
    $(".imgview-big .thumbnail-big img").mousemove(function (i) {
        if ($(this).parents(".imgview-big").prev(".imgview-small").find(".thumbnail:last").index() == 0) {
            $(this).addClass("cursor-zoom");
            a = "zoom";
            return
        }
        var j = i.clientX - $(this).offset().left;
        if (j < 80) {
            $(this).removeClass("cursor-zoom cursor-next").addClass("cursor-prev");
            a = "prev"
        } else {
            if (j > 350) {
                $(this).removeClass("cursor-zoom cursor-prev").addClass("cursor-next");
                a = "next"
            } else {
                $(this).removeClass("cursor-next cursor-prev").addClass("cursor-zoom");
                a = "zoom"
            }
        }
    });
    $(".thumbnails-small .thumbnail-small").click(function () {
        var j = $(this).parents(".imgview-big").find(".thumbnails-select").index();
        $(this).removeClass("thumbnails-noselect").addClass("thumbnails-select");
        $(this).siblings().removeClass("thumbnails-select").addClass("thumbnails-noselect");
        var i = InnTwoTools.format(inntwoBase.weiboBmiddleImgAddr, $(this).children("img").attr("dataPic"));
        $(this).parents(".imgview-big").find(".thumbnail-big ").children("img").attr("src", i);
        var k = $(this).index() - j;
        if (k > 0) {
            d($(this), k)
        } else {
            if (k < 0) {
                k = Math.abs(k);
                e($(this), k)
            }
        }
    });
    function h(i) {
        if (i.parent().find(".thumbnails-small").position().left == 0) {
            i.css("cursor", "default");
            return
        }
        i.css("cursor", "pointer");
        i.parent().find(".thumbnails-small").animate({left: "+=" + f}, 50)
    }

    function g(j) {
        var i = j.parent().find(".thumbnails-small").width() - 480 + j.parent().find(".thumbnails-small").position().left;
        if (i <= 0) {
            j.css("cursor", "default");
            return
        }
        j.css("cursor", "pointer");
        j.parent().find(".thumbnails-small").animate({left: "-=" + f}, 50)
    }

    $(".view-prev").mouseover(function () {
        if ($(this).parent().find(".thumbnails-small").position().left == 0) {
            $(this).css("cursor", "default")
        } else {
            $(this).css("cursor", "pointer")
        }
    }).click(function () {
        h($(this))
    });
    $(".view-next").mouseover(function () {
        var i = $(this).parent().find(".thumbnails-small").width() - 420 + $(this).parent().find(".thumbnails-small").position().left;
        if (i <= 0) {
            $(this).css("cursor", "default")
        } else {
            $(this).css("cursor", "pointer")
        }
    }).click(function () {
        g($(this))
    })
}};
attractionInfo.attractionRoad = function () {
    function a() {
        if (createItinerary.mapCenter) {
            var c = createItinerary.mapCenter.name;
            var b = $("div[data-attractionaddress]").attr("data-attractionaddress");
            if (b == "" || b.trim() == "") {
                return
            }
            bdAutocompletTripperStar.setInputValue(c);
            bdAutocompletTripperEnd.setInputValue(b);
            $("#RouteTripperSearchRouteBtn").click()
        } else {
            setTimeout(a, 1000)
        }
    }

    setTimeout(a, 1000)
};
attractionInfo.customBind = function () {
    ko.bindingHandlers.weiboSmallImage = {update: function (a, d) {
        var c = d();
        var b = InnTwoTools.format(inntwoBase.weiboSquareImgAddr, c);
        $(a).attr("src", b);
        $(a).attr("dataPIc", c)
    }};
    ko.bindingHandlers.weiboBigImage = {update: function (a, d) {
        var c = d();
        var b = InnTwoTools.format(inntwoBase.weiboBmiddleImgAddr, c);
        $(a).attr("src", b)
    }};
    ko.bindingHandlers.weiboFace = {update: function (a, c) {
        var b = inntwoBase.replaceWeiboFace(c());
        $(a).html(b)
    }}
};
$(function () {
    attractionInfo.closeAttraction();
    attractionInfo.attrationRating();
    attractionInfo.atractionDoubleClick();
    ko.applyBindings(attractionInfo, document.getElementById("attraPopupContainer"));
    attractionInfo.popupAttractionFavorite();
    attractionInfo.attractionResize();
    attractionInfo.attractionRoad();
    attractionInfo.customBind()
});
var createItineraryHotel = {albumScrollTop: 105, selectedIndex: 0, animating: false};
createItineraryHotel.setHotelTarts = function () {
    var a = $("#hotelPopupStars").attr("data-score");
    a = a ? Number(a) : 0;
    $("#hotelPopupStars").raty({readOnly: true, score: a, half: true, path: "/img/asset2", hints: ["还是不要去了", "去不去看自己", "可以去", "建议去", "不去会后悔的"]})
};
createItineraryHotel.setAlbum = function () {
    $(".hotel-popup-album-pics").unbind("click").click(function () {
        createItineraryHotel.selectedIndex = $(".hotel-popup-album-pics").index(this);
        createItineraryHotel.setAlbumSelect()
    }).unbind("mouseover").mouseover(function () {
        $(this).css({"border-color": "#fbc198"})
    }).unbind("mouseout").mouseout(function () {
        if ($(this).attr("selected") != "selected") {
            $(this).css({"border-color": "#f5f5f5"})
        }
    });
    createItineraryHotel.selectedIndex = 0;
    createItineraryHotel.setAlbumSelect();
    $(".hotel-popup-album-up-btnwrapper").unbind("click").click(function () {
        if (createItineraryHotel.animating) {
            return
        }
        createItineraryHotel.animating = true;
        var b = $(".hotel-popup-albummiddle").position();
        createItineraryHotel.selectedIndex--;
        var a = b.top + createItineraryHotel.albumScrollTop;
        if (a > 0) {
            a = 0
        }
        $(".hotel-popup-albummiddle").animate({top: a + "px"}, 200, function () {
            createItineraryHotel.animating = false
        });
        if (createItineraryHotel.selectedIndex < 0) {
            createItineraryHotel.selectedIndex = 0
        }
        createItineraryHotel.setAlbumSelect()
    });
    $(".hotel-popup-album-down-btnwrapper").unbind("click").click(function () {
        if (createItineraryHotel.animating) {
            return
        }
        createItineraryHotel.animating = true;
        var e = $(".hotel-popup-albummiddle").position();
        createItineraryHotel.selectedIndex++;
        var d = $(".hotel-popup-album-pics").length - 1;
        var c = $(".hotel-popup-albummiddle").height();
        var b = c - Math.abs(e.top);
        if (b < $(".hotel-popup-albummini").height()) {
            createItineraryHotel.animating = false
        } else {
            var a = e.top - createItineraryHotel.albumScrollTop;
            $(".hotel-popup-albummiddle").animate({top: a + "px"}, 200, function () {
                createItineraryHotel.animating = false
            })
        }
        if (createItineraryHotel.selectedIndex > d) {
            createItineraryHotel.selectedIndex = d
        }
        createItineraryHotel.setAlbumSelect()
    })
};
createItineraryHotel.setAlbumSelect = function () {
    $(".hotel-popup-album-pics").css({"border-color": "#f5f5f5"}).attr({selected: false});
    $(".hotel-popup-album-pics").eq(createItineraryHotel.selectedIndex).css({"border-color": "#fbc198"}).attr({selected: true});
    var a = $(".hotel-popup-album-pics").eq(createItineraryHotel.selectedIndex).find("img").attr("src");
    $("#hotelPopupAlbum").attr({src: a})
};
createItineraryHotel.setTables = function () {
    $(".hotel-popup-tabs").click(function (a) {
        a.preventDefault();
        $(this).tab("show");
        var b = $(".hotel-popup-tabs");
        b.removeClass("inntwo-backgroud-color-info");
        b.removeClass("inntwo-text-ordinary");
        b.addClass("inntwo-background-tabs1");
        b.addClass("inntwo-text-default");
        $(this).addClass("inntwo-text-ordinary");
        $(this).addClass("inntwo-backgroud-color-info");
        $(this).removeClass("inntwo-background-tabs1");
        $(this).removeClass("inntwo-text-default")
    })
};
createItineraryHotel.setSelectTables = function (b) {
    var a = $(".hotel-popup-tabs");
    a.removeClass("inntwo-backgroud-color-info");
    a.removeClass("inntwo-text-ordinary");
    a.addClass("inntwo-background-tabs1");
    a.addClass("inntwo-text-default");
    a.eq(b).addClass("inntwo-text-ordinary");
    a.eq(b).addClass("inntwo-backgroud-color-info");
    a.eq(b).removeClass("inntwo-background-tabs1");
    a.eq(b).removeClass("inntwo-text-default")
};
createItineraryHotel.setHotelParamsGrade = function () {
    $("#hotepPopupServiceStar").raty({readOnly: false, score: 2.5, half: true, path: "/img/asset2", hints: ["还是不要去了", "去不去看自己", "可以去", "建议去", "不去会后悔的"]});
    $("#hotepPopupHealthyStar").raty({readOnly: false, score: 2.5, half: true, path: "/img/asset2", hints: ["还是不要去了", "去不去看自己", "可以去", "建议去", "不去会后悔的"]});
    $("#hotepPopupPlaceStar").raty({readOnly: false, score: 2.5, half: true, path: "/img/asset2", hints: ["还是不要去了", "去不去看自己", "可以去", "建议去", "不去会后悔的"]});
    $("#hotepPopupFacilityStar").raty({readOnly: false, score: 2.5, half: true, path: "/img/asset2", hints: ["还是不要去了", "去不去看自己", "可以去", "建议去", "不去会后悔的"]})
};
createItineraryHotel.closeHotelPopup = function () {
    $(".hotel-popup-container").unbind("click").click(function (a) {
        a.stopPropagation()
    });
    $(".hotel-popup-close,.hotel-popup-scroller").unbind("click").click(function (a) {
        a.stopPropagation();
        $(".hotel-popup-scroller").fadeOut();
        $("#createItineraryHotelOuter").hide()
    })
};
createItineraryHotel.calendar = function () {
    $("#queryHotelStartDate").change(function () {
        var e = $(this).val();
        var d = InnTwoTools.DateAddday(e, 1);
        $("#queryHotelEndDate").val(d)
    });
    var a = $(".hotel-popup-datesearch");
    a.datetimepicker({format: "yyyy-mm-dd", language: "zh-CN", weekStart: 1, todayBtn: 1, autoclose: 1, todayHighlight: 1, startView: 2, minView: 2, forceParse: 0});
    var b = InnTwoTools.getNowDateStr();
    var c = InnTwoTools.DateAddday(b, 1);
    a.eq(0).val(b);
    a.eq(1).val(c)
};
createItineraryHotel.hotelDetails = function (a) {
    $.ajax({url: ajaxUrl.GetHotelDetails_Url, data: {id: a.hotelId}, type: "post", success: function (b) {
        InnTwoTools.JsonDataCallback({data: b, success: function () {
            a.callBack(b)
        }, notFound: function () {
            $("#createItineraryHotelPopup").hide()
        }})
    }})
};
createItineraryHotel.hotelPricePlan = function (a) {
    $("#HotelPopupRoomesEmpty").hide();
    $.ajax({url: ajaxUrl.HotelPricePolicy_Url, data: {HotelId: a.hotelId, StartDate: typeof a.startDate === "undefined" ? null : a.startDate, EndDate: typeof a.endDate === "undefined" ? null : a.endDate, Vendor: 0}, type: "post", success: function (b) {
        InnTwoTools.JsonDataCallback({data: b, success: function () {
            a.callBack(b)
        }, notFound: function () {
            $("#HotelPopupRoomesEmpty").show()
        }});
        $("#hotelRoomsLoading").hide()
    }})
};
createItineraryHotel.hotelId = "";
createItineraryHotel.floorPrice = "未知";
createItineraryHotel.hotelPopup = function (b, a) {
    createItineraryHotel.hotelId = b;
    createItineraryHotel.floorPrice = a;
    $(".hotel-popup-scroller").fadeIn(500, function () {
        createItineraryHotel.hotelFadeIned()
    })
};
createItineraryHotel.hotelFadeIned = function () {
    createItineraryHotel.loading();
    createItineraryHotel.hotelDetails({hotelId: createItineraryHotel.hotelId, callBack: function (a) {
        a.floorPrice = createItineraryHotel.floorPrice;
        hotelPopupViewModel.hotelDetails(a);
        createItineraryHotel.loaded();
        $(".hotel-popup-tabs:first").tab("show");
        createItineraryHotel.setSelectTables(0);
        createItineraryHotel.setAlbum();
        createItineraryHotel.setTables();
        createItineraryHotel.roomsLoding();
        createItineraryHotel.hotelPricePlan({hotelId: createItineraryHotel.hotelId, callBack: function (b) {
            createItineraryHotel.searchHotelByDateCompleted(a.HotelRoomCategory, b);
            createItineraryHotel.searchHotelByDate()
        }});
        createItineraryHotel.hotelPopupFavorite()
    }});
    createItineraryHotel.closeHotelPopup()
};
createItineraryHotel.collectHotelPricePlan = function (u, y) {
    var q = [];
    for (var h = 0; h < y.length; h++) {
        var o = y[h].HotelRoomesPrice;
        if (u.length > 0 && y[h].DataVendor == 0) {
            for (var f = 0; f < u.length; f++) {
                var a = u[f];
                if (a && a.Rooms.length > 0) {
                    var t = a.Rooms;
                    a.isShow = false;
                    for (var c = 0; c < t.length; c++) {
                        if (!t[c]) {
                            continue
                        }
                        var x = t[c].RoomTypeCode;
                        t[c].OfferDescription = "未知";
                        t[c].AmountBeforeTax = "未知";
                        t[c].Breakfast = "未知";
                        for (var d = 0; d < o.length; d++) {
                            var n = o[d];
                            if (x == n.RoomCode) {
                                t[c].OfferDescription = n.OfferDescription;
                                if (n.HotelRoomPrices.length > 0) {
                                    var s = n.HotelRoomPrices[0];
                                    if (s != null) {
                                        t[c].AmountBeforeTax = s.AmountBeforeTax;
                                        if (s.Breakfast) {
                                            if (s.NumberOfBreakfast == 1) {
                                                t[c].Breakfast = "单早"
                                            } else {
                                                if (s.NumberOfBreakfast == 2) {
                                                    t[c].Breakfast = "双早"
                                                }
                                            }
                                        } else {
                                            t[c].Breakfast = "无早"
                                        }
                                    }
                                }
                                break
                            }
                        }
                        a.isShow = true
                    }
                    var v = [];
                    var w = [];
                    for (var b = 0; b < t.length; b++) {
                        if (t[b].AmountBeforeTax == "未知") {
                            w.push(t[b])
                        } else {
                            v.push(t[b])
                        }
                    }
                    var p = Enumerable.From(v).OrderBy(function (e) {
                        return e.AmountBeforeTax
                    }).ToArray();
                    a.Rooms = p.concat(w)
                }
            }
            q.push({dataVendor: y[h].DataVendor, hotelRooms: u})
        } else {
            var r = [];
            for (var g = 0; g < o.length; g++) {
                r.push({RoomCategory: o[g].RoomName, Rooms: o[g].HotelRoomPrices, isShow: true, HotelRoomCategoryInfo: o[g].RoomName, RoomCode: o[g].RoomCode})
            }
            q.push({dataVendor: y[h].DataVendor, hotelRooms: r})
        }
    }
    return q
};
createItineraryHotel.KOcustomBind = function () {
    ko.bindingHandlers.hotelFacilities = {update: function (c, m) {
        var l = m();
        var j = {};
        for (var b = 0; b < l.length; b++) {
            var g = l[b].FacilityCategory;
            if (g in j) {
            } else {
                j[g] = []
            }
            j[g].push(l[b].FacilityName)
        }
        var e = "";
        for (var h in j) {
            var a = j[h];
            e += "<span class='inntwo-text-bold'>" + h + "：</span>";
            for (var f = 0; f < a.length; f++) {
                e += "<span>" + a[f] + "&nbsp;&nbsp;&nbsp;&nbsp;</span>"
            }
            e += "<br />"
        }
        $(c).html(e)
    }};
    ko.bindingHandlers.vendorIco = {update: function (b, c) {
        var d = c();
        var a = "{0} create-itinerary-image float_left";
        if (d == 1) {
            a = InnTwoTools.format(a, "hotel-popup-yododo-ico")
        } else {
            a = InnTwoTools.format(a, "hotel-popup-ctrip-ico")
        }
        $(b).attr("class", a)
    }};
    ko.bindingHandlers.vendorhref = {update: function (a, f) {
        var d = $(a).parents(".inntwo-borderbottom-tab");
        var g = d.attr("data-vendor");
        var e = $(a).attr("data-roomcode");
        if (g == 1) {
            var c = InnTwoTools.format("/html/gotoyododo.html?hotelroomcode={0}&startdatetime={1}&enddatetime={2}", e, $("#queryHotelStartDate").val(), $("#queryHotelEndDate").val());
            $(a).attr({href: c})
        } else {
            var b = InnTwoTools.format("/html/gotoctrip.html?hotelId={0}&startdatetime={1}&enddatetime={2}", createItineraryHotel.hotelId, $("#queryHotelStartDate").val(), $("#queryHotelEndDate").val());
            $(a).attr({href: b})
        }
    }}
};
createItineraryHotel.loading = function () {
    $("#hotelStaticLoading").show();
    $("#createItineraryHotelOuter").hide()
};
createItineraryHotel.loaded = function () {
    $("#hotelStaticLoading").hide();
    $("#createItineraryHotelOuter").show()
};
createItineraryHotel.roomsLoding = function () {
    $("#hotelRoomsLoading").show();
    $("#hotelRoomsWrapper").hide()
};
createItineraryHotel.roomsLoaded = function () {
    $("#hotelRoomsLoading").hide();
    $("#hotelRoomsWrapper").show()
};
createItineraryHotel.searchHotelByDate = function () {
    $("#hotelPopupDateBtn").unbind("click").click(function () {
        createItineraryHotel.roomsLoding();
        var b = $("#queryHotelStartDate").val();
        var a = $("#queryHotelEndDate").val();
        createItineraryHotel.hotelPricePlan({hotelId: createItineraryHotel.hotelId, startDate: b, endDate: a, callBack: function (d) {
            var c = hotelPopupViewModel.hotelDetails();
            if (c && c.HotelRooms) {
                createItineraryHotel.searchHotelByDateCompleted(c.HotelRoomCategory, d)
            }
        }})
    })
};
createItineraryHotel.searchHotelByDateCompleted = function (e, c) {
    var f = createItineraryHotel.collectHotelPricePlan(e, c);
    var b = true;
    for (var a = 0; a < f.length; a++) {
        var d = f[a].hotelRooms;
        if (d && d.length > 0) {
            b = false;
            break
        }
    }
    if (b) {
        $("#HotelPopupRoomesEmpty").show()
    } else {
        $("#HotelPopupRoomesEmpty").hide()
    }
    hotelPopupViewModel.HotelRooms(f);
    createItineraryHotel.roomsLoaded();
    createItineraryHotel.setHotelParamsGrade()
};
createItineraryHotel.hotelScroll = 166 + 25;
createItineraryHotel.resizeHotel = function () {
    $(window).resize(function () {
        window.windHeight = $(window).height();
        $(".hotel_search_result_panel,.hotel_search_result_panel_inner").height(windHeight - createItineraryHotel.hotelScroll);
        setNearByHotelScroll()
    })
};
var prevHotelId = "";
createItineraryHotel.hotelComments = function (a) {
    if (!createItineraryHotel.hotelId) {
        return
    }
    prevHotelId = createItineraryHotel.hotelId;
    hotelPopupViewModel.hotelComments([]);
    hotelPopupViewModel.hotelCommentsIsEmpty(false);
    $.ajax({url: ajaxUrl.HotelCommets_Url, data: {id: createItineraryHotel.hotelId, pageIndex: a}, type: "post", success: function (b) {
        InnTwoTools.JsonDataCallback({data: b, success: function () {
            hotelPopupViewModel.hotelComments(b.Content);
            $(".score-ico-wrapper").each(function () {
                var e = $(this).attr("data-score");
                $(this).raty({readOnly: true, score: e, half: true, path: "/img/asset2", hints: ["还是不要去了", "去不去看自己", "可以去", "建议去", "不去会后悔的"]})
            });
            var d = InnTwoTools.GetTotalPages(b.Total, b.PageSize);
            var c = {currentPage: b.CurrentPage, totalPages: d, shouldShowPage: (d > 1), size: "normal", alignment: "center", onPageChanged: function (f, h, g) {
                createItineraryHotel.hotelComments(g)
            }};
            $("#hotelCommentsPager").bootstrapPaginator(c)
        }, notFound: function () {
            hotelPopupViewModel.hotelComments([]);
            hotelPopupViewModel.hotelCommentsIsEmpty(true);
            $("#loadingCommentWrapper").hide();
            $("#CommentDataIsEmptyWrapper").show()
        }})
    }})
};
createItineraryHotel.hotelPopupFavorite = function () {
    $(".hotel-popup-favoritebtn").unbind("click").click(function () {
        if (createItineraryHotel.hotelId) {
            nearbySearch.favoritePlaceById(createItineraryHotel.hotelId)
        }
    })
};
var hotelPopupViewModel = {};
hotelPopupViewModel.hotelDetails = ko.observable();
hotelPopupViewModel.HotelRooms = ko.observableArray();
hotelPopupViewModel.hotelComments = ko.observableArray();
hotelPopupViewModel.hotelCommentsIsEmpty = ko.observableArray(false);
$(function () {
    createItineraryHotel.KOcustomBind();
    ko.applyBindings(hotelPopupViewModel, document.getElementById("createItineraryHotelPopup"));
    $("#hotelCommentsTabBtn").click(function () {
        if (prevHotelId == createItineraryHotel.hotelId) {
            return
        }
        createItineraryHotel.hotelComments()
    });
    createItineraryHotel.resizeHotel();
    createItineraryHotel.calendar();
    createItineraryHotel.searchHotelByDate()
});
var nearbySearch = {};
nearbySearch.nearbySearchCategories = {Hotel: 0, Attraction: 1, Delicacy: 2};
nearbySearch.nearbySearchCategory = nearbySearch.nearbySearchCategories.Hotel;
nearbySearch.setSearchData = function (a) {
    if (a.coordinate) {
        $("#ConditionCoordinate").val(a.coordinate);
        $("#MorePlacePoint").val(a.coordinate)
    }
    if (a.placeName) {
        $("#nearbySearchDestination").text(a.placeName).attr("title", a.placeName)
    }
    $("#ConditionPageIndex,#MorePlacePageIndex").val(1);
    var b = "1-2147483647";
    if (a.priceRange) {
        b = a.priceRange
    }
    $("#HotelMorePrice").val(b);
    $("#HotelMoreBrand,#HotelMoreStarGrade").val(0);
    $("#HotelNameInput").val("")
};
nearbySearch.nearbyTabsSetting = function (b) {
    var a = $("#createItineraryNearby a");
    a.removeClass("inntwo-background-tabs1").removeClass("inntwo-text-default").removeClass("inntwo-backgroud-color-info").removeClass("inntwo-text-ordinary").addClass("inntwo-background-tabs1").addClass("inntwo-text-default");
    a.eq(b).removeClass("inntwo-background-tabs1").removeClass("inntwo-text-default").addClass("inntwo-backgroud-color-info").addClass("inntwo-text-ordinary");
    $("#nearbyContents .tab-pane").hide();
    $("#NearbySearchPanle" + b).show()
};
nearbySearch.nearbyTabsChange = function () {
    $("#nearByDeliciousButton").click(function () {
        nearbySearch.nearbySearchCategory = nearbySearch.nearbySearchCategories.Delicacy;
        nearbySearch.nearbyTabsSetting(0)
    });
    $("#nearByHotelButton").click(function () {
        nearbySearch.nearbySearchCategory = nearbySearch.nearbySearchCategories.Hotel;
        nearbySearch.nearbyTabsSetting(1)
    });
    $("#nearByAttractionsButton").click(function () {
        nearbySearch.nearbySearchCategory = nearbySearch.nearbySearchCategories.Attraction;
        nearbySearch.nearbyTabsSetting(2)
    })
};
nearbySearch.hiddenNearby = function () {
    $(".nearby-result-container").fadeOut(function () {
        $(".appear-nearby-button").show()
    })
};
nearbySearch.showNearbyResult = function () {
    $(".nearby-result-container").fadeIn();
    $("#hiddenSideOfRoadAttraction").click();
    tripScheduleScroll("placeSearchResultPanelInner", $("#morePlacesScrollBarContainer"), $("#moreplaceCustomScrollBarMorePlace"))
};
nearbySearch.nearbyItemsClick = function (g, i) {
    var b = $(g).find(".search_place_overlay_place_favorite");
    var a = b.attr("pointstr");
    var d = a.split(",")[0];
    var c = a.split(",")[1];
    var h = InnTwoMapCore.createPoint(d, c);
    inntwoMap.panTo(h);
    var e;
    var f;
    switch (i) {
        case"attraction":
            e = $(g).find(".place_search_result_number").text();
            f = $(".home_place_marker");
            break;
        case"hotel":
            e = $(g).find(".hotel_search_result_number").text();
            f = $(".schedule-update-hotel-more");
            break;
        case"delicacy":
            e = $(g).find(".delicacy_search_result_number").text();
            f = $(".delicacy-search-marker");
            break
    }
    if (f) {
        f.each(function () {
            var j = $(this).find(".marker-number-span").text();
            if (j == e) {
                $(this).click();
                return
            }
        })
    }
};
nearbySearch.favoritePlaceById = function (a) {
    $(".place_overlay_inner").find(".search_place_overlay_place_favorite").each(function () {
        var b = $(this).attr("placeid");
        if (a == b) {
            $(this).click();
            return false
        }
        return true
    })
};
nearbySearch.nNotKey = "itinerarySaveSuccessNeverNotify";
nearbySearch.saveSuccessNotifyType = {neverNotifyAndGotoMyspace: "0", continueNotifyAndGotoMyspace: "1", neverNotifyAndNotGoto: "2", continueNotifyAndNotGoto: "3"};
nearbySearch.saveSuccessNotify = function (a) {
    switch (a.notifyType) {
        case"0":
            a.neverNotifyAndGotoMyspace();
            break;
        case"1":
            a.continueNotifyAndGotoMyspace();
            break;
        case"2":
            a.neverNotifyAndNotGoto();
            break;
        case"3":
            a.continueNotifyAndNotGoto();
            break;
        default:
            a.continueNotifyAndGotoMyspace()
    }
};
nearbySearch.scheduleDayAnchorPoint = "dayAnchorPoint";
nearbySearch.saveSuccessful = function (d) {
    $("#SaveSketch").removeAttr("disabled").val("保     存");
    if (saveItineraryTimeOut) {
        window.scheduleJsonHash = typeof scheduleJsonHash == "undefined" ? 0 : scheduleJsonHash + 1;
        window.travelJsonHash = typeof travelJsonHash == "undefined" ? 0 : travelJsonHash + 1;
        InnTwoTools.mapLoadingNotify({message: "&nbsp;&nbsp;" + inntwoBase.AlarmMessage.SAVE_DATA_TIMEOUT})
    } else {
        var c = false;
        var b = InnTwoTools.getCookies(nearbySearch.nNotKey);
        nearbySearch.saveSuccessNotify({notifyType: b, neverNotifyAndGotoMyspace: function () {
            location.href = "/profile/itineraries"
        }, continueNotifyAndGotoMyspace: function () {
            c = true
        }, neverNotifyAndNotGoto: function () {
            location.href = InnTwoTools.format("{0}?scheduleid={1}", ajaxUrl.ItineraryEditor_Url, d)
        }, continueNotifyAndNotGoto: function () {
            c = true
        }});
        var a = 300;
        if (c) {
            InnTwoTools.Confirm({message: "保存成功，是否跳转至我的空间？", trueMethod: function (e) {
                if (e.neverNotify) {
                    InnTwoTools.setCookies(nearbySearch.nNotKey, nearbySearch.saveSuccessNotifyType.neverNotifyAndGotoMyspace, a)
                } else {
                    InnTwoTools.setCookies(nearbySearch.nNotKey, nearbySearch.saveSuccessNotifyType.continueNotifyAndGotoMyspace, a)
                }
                location.href = "/profile/itineraries"
            }, falseMethod: function (e) {
                if (e.neverNotify) {
                    InnTwoTools.setCookies(nearbySearch.nNotKey, nearbySearch.saveSuccessNotifyType.neverNotifyAndNotGoto, a)
                } else {
                    InnTwoTools.setCookies(nearbySearch.nNotKey, nearbySearch.saveSuccessNotifyType.continueNotifyAndNotGoto, a)
                }
                if (d) {
                    location.href = InnTwoTools.format("{0}?scheduleid={1}", ajaxUrl.ItineraryEditor_Url, d)
                }
            }, isOrIsnt: true, neverNotify: true})
        }
    }
    $("#notifyText img").hide();
    $("#stayEditorSchedule").click(function () {
        InnTwoTools.mapLoadingNotify({option: "close"})
    });
    setTimeout(function () {
        InnTwoTools.mapLoadingNotify({option: "close"})
    }, 1000);
    window.isSaveSuccess = true;
    if (window.localStorage) {
        window.localStorage.Clear();
        window.localStorage.setItem(nearbySearch.scheduleDayAnchorPoint, JSON.stringify({day: window.nowSchduleIndex + 1, itineraryId: d}))
    }
};
nearbySearch.attractionNearbySearch = function (d, c) {
    var b = $(c).parents(".home_place_marker");
    b = b.find(".place_marker_json_data");
    var a = JSON.parse(b.text());
    nearPlaceClicked(d, a.placeName, a.point.lng, a.point.lat, c)
};
nearbySearch.hotelNearbySearch = function (b, a) {
    var d = $(a).parents(".home_place_marker");
    d = d.find(".place_marker_json_data");
    var c = JSON.parse(d.text());
    nearHotelClicked(b, c.placeName, c.point.lng, c.point.lat, a)
};
nearbySearch.delicacyNearbySearch = function (d, c) {
    var b = $(c).parents(".home_place_marker");
    b = b.find(".place_marker_json_data");
    var a = JSON.parse(b.text());
    deliciousPopupViewModel.nearDelicacyClicked(d, a.placeName, a.point.lng, a.point.lat, c)
};
nearbySearch.searchRadiuses = [10, 20, 30, 50, 100];
nearbySearch.searchRadiusesIndex = 2;
nearbySearch.placeCategoryCircleSearch = function (a) {
    if (nearbySearch.nearbySearchCategory == nearbySearch.nearbySearchCategories.Hotel) {
        $("#ConditionRadius").val(a);
        $("#ConditionPageIndex").val(1);
        $("#HotelSubmitBotton").click()
    } else {
        if (nearbySearch.nearbySearchCategory == nearbySearch.nearbySearchCategories.Attraction) {
            $("#neabyAttractionDistance").val(a);
            $("#MorePlacePageIndex").val(1);
            $("#PlaceMoreSearchSubmit").click()
        } else {
            if (nearbySearch.nearbySearchCategory == nearbySearch.nearbySearchCategories.Delicacy) {
                itineraryDelicious.currentRadius = a;
                $("#moreDelicacyQuerySubmit").click()
            }
        }
    }
    nearbySearch.circleSearchPrevRadius = a;
    $("#nearbySearchRadius").text(a + "km");
    $("#searchRadiusValue").text(a);
    nearbySearch.circleSearchPlces()
};
nearbySearch.searchRadiusChange = function () {
    $("#subtractSideOfRoadRadius").click(function () {
        if (nearbySearch.searchRadiusesIndex < 1) {
            return
        }
        nearbySearch.searchRadiusesIndex--;
        var a = nearbySearch.searchRadiuses[nearbySearch.searchRadiusesIndex];
        nearbySearch.placeCategoryCircleSearch(a)
    });
    $("#plusSideOfRoadRadius").click(function () {
        if (nearbySearch.searchRadiusesIndex > nearbySearch.searchRadiuses.length - 2) {
            return
        }
        nearbySearch.searchRadiusesIndex++;
        var a = nearbySearch.searchRadiuses[nearbySearch.searchRadiusesIndex];
        nearbySearch.placeCategoryCircleSearch(a)
    })
};
nearbySearch.nearbySearchCallback = function () {
    var c = 11;
    var b = nearbySearch.circleSearchPrevRadius = Number($("#searchRadiusValue").text());
    if (b == 10) {
        c = 12
    } else {
        if (b == 20) {
            c = 11
        } else {
            if (b == 30) {
                c = 11
            } else {
                if (b == 50) {
                    c = 10
                } else {
                    if (b == 100) {
                        c = 9
                    }
                }
            }
        }
    }
    var a = $("#MorePlacePoint").val();
    a = InnTwoMapCore.createPoint(a.split(",")[1], a.split(",")[0]);
    inntwoMap.centerAndZoom(a, c);
    nearbySearch.circleSearchPlces();
    InnTwoTools.mapLoadingNotify({option: "close"});
    tripScheduleScroll("placeSearchResultPanelInner", $("#morePlacesScrollBarContainer"), $("#moreplaceCustomScrollBarMorePlace"))
};
nearbySearch.circleSearchCircleMouseup = function () {
    var b = nearbySearch.nearbyCircleSearchLimitRadius()[0];
    if (nearbySearch.circleSearchPrevRadius != b) {
        $("#searchRadiusValue").text(b);
        var a = nearbySearch.searchRadiuses.indexOf(b);
        if (a > -1) {
            nearbySearch.searchRadiusesIndex = a
        }
        nearbySearch.placeCategoryCircleSearch(b)
    }
};
nearbySearch.nearbyCircleSearchLimitRadius = function () {
    var a = nearbySearch.circleSearchCircle.getRadius();
    var b = 10;
    if (a > 50 * 1000) {
        b = 100
    } else {
        if (a > 30 * 1000 && a <= 50 * 1000) {
            b = 50
        } else {
            if (a > 20 * 1000 && a <= 30 * 1000) {
                b = 30
            } else {
                if (a > 10 * 1000 && a <= 20 * 1000) {
                    b = 20
                } else {
                    b = 10
                }
            }
        }
    }
    return[b.toFixed(2), (a / 1000).toFixed(2)]
};
nearbySearch.circleSearchPlces = function () {
    var a = Number($("#searchRadiusValue").text()) * 1000;
    var b = $("#MorePlacePoint").val();
    b = InnTwoMapCore.createPoint(b.split(",")[1], b.split(",")[0]);
    if (typeof nearbySearch.circleSearchCircle !== "undefined") {
        inntwoMap.removeOverlay(nearbySearch.circleSearchCircle)
    }
    nearbySearch.circleSearchCircle = InnTwoMapCore.drawCircle({point: b, radius: a, map: inntwoMap});
    nearbySearch.circleSearchCircle.enableEditing();
    $("#nearbySearchRadius").text(a.toFixed(2) + "km");
    nearbySearch.circleSearchCircle.addEventListener("lineupdate", function () {
        var d = 800;
        for (var c = 0; c < 6; c++) {
            setTimeout(nearbySearch.circleInsertClose, (c * 500) + d)
        }
    });
    nearbySearch.circleInsertClose()
};
nearbySearch.circleInsertClose = function () {
    var c = $("#nearbySearchRemoveHandle");
    if (c.first() && c.first().length > 0) {
    } else {
        var a = $("#circleInsertTemplate").html();
        $(".BMap_vectex_node").last().append(a);
        $("#nearbySearchRemoveHandle").unbind("click").click(function () {
            inntwoMap.removeOverlay(nearbySearch.circleSearchCircle)
        });
        var b = nearbySearch.nearbyCircleSearchLimitRadius()[1];
        $("#nearbySearchRadius").text(b + "km");
        nearbySearch.circleSearchCircleMouseup()
    }
};
$(function () {
    nearbySearch.nearbyTabsChange();
    $(".createitinerary-hidden-nearby").click(function () {
        nearbySearch.hiddenNearby()
    });
    $(".nearby-result-container").click(function (a) {
        a.stopPropagation()
    });
    $("#appearAroundButton").click(function (a) {
        a.stopPropagation();
        nearbySearch.showNearbyResult()
    });
    nearbySearch.searchRadiusChange()
});
window.goToPreviousDay = function () {
    $(".alterable-tab-left").click()
};
var editItinerary = {};
editItinerary.schedules = ko.observableArray([
    {JourneyDistance: "", JeriodDateTime: "", ScheduleItemPlaces: [], Remark: "", RealRemark: "", Distance: "", Duration: "", TotalStayDuration: ""}
]);
editItinerary.duringIsVisible = function (a) {
    var b = false;
    InnTwoTools.PlaceParentCategory({category: a, attraction: function () {
        b = true
    }});
    return b
};
editItinerary.commentsIsVisible = function (b, a) {
    var c = false;
    InnTwoTools.PlaceParentCategory({category: b, delicacy: function () {
        if (a != "1") {
            c = true
        }
    }});
    return c
};
editItinerary.initial = function () {
    ko.applyBindings(editItinerary, document.getElementById("tripScheduleContainer"));
    $("#useDocuments").click(function () {
        window.open("http://tieba.baidu.com/p/3339155817")
    })
};
(function () {
    ko.bindingHandlers.nohtml = {update: function (a, c) {
        var b = c();
        if (b && b.trim()) {
            b = InnTwoTools.ClearHtmlFromString(b)
        } else {
            b = ""
        }
        $(a).text(b)
    }};
    ko.bindingHandlers.scheduleRemarkDescription = {update: function (b, d) {
        var c = d();
        if (c && c.trim()) {
            try {
                c = JSON.parse(c)
            } catch (a) {
                c = InnTwoTools.ClearHtmlFromString(c)
            }
        } else {
            c = ""
        }
        $(b).html(c.Description ? c.Description : c)
    }}
})();
editItinerary.CreatEasemobConnection = function () {
    $.ajax({url: ajaxUrl.getEasemobUserInfoByUseId_Url, type: "post", success: function (a) {
        InnTwoTools.JsonDataCallback({data: a, success: function () {
            var b = new Easemob.im.Connection();
            b.init({onOpened: function () {
                b.setPresence()
            }, onClosed: function () {
            }, onTextMessage: function (e) {
                var c = e.data;
                var d = e.from;
                $.ajax({url: ajaxUrl.getUseInfoByEasemobId_Url, type: "post", data: {easemobId: d}, success: function (f) {
                    InnTwoTools.JsonDataCallback({data: f, success: function () {
                        var g = "";
                        var h = "info";
                        if (f.UserId == null || f.userId == "") {
                            g = InnTwoTools.format("<div>{0}</div>", c);
                            h = "error"
                        } else {
                            g = InnTwoTools.format("<div>{0}: {1}</div><a href='/usermessage/messagedetails?sessionid={2}' target='_blank' style='float:right;color:#0088cc'>详情</a>", f.UserId, c, f.Extension)
                        }
                        editItinerary.promptMessage(g, h);
                        $(".messenger-message-inner p").css("color", "white");
                        $(".messenger-message-inner").css("text-shadow", "none")
                    }})
                }})
            }, });
            b.open({user: a.Extension.split(",")[0], pwd: a.Extension.split(",")[1], appKey: a.Extension.split(",")[2]})
        }})
    }})
};
editItinerary.promptMessage = function (a, b) {
    Messenger.options = {extraClasses: "messenger-fixed messenger-on-top messenger-on-right", theme: "flat"};
    Messenger().post({message: a, type: b, hideAfter: 6, showCloseButton: true})
};
$(function () {
    editItinerary.initial();
    editItinerary.CreatEasemobConnection()
});
var createItineraryTraffic = {};
createItineraryTraffic.loadTrafficDetails = function (a) {
    $.ajax({url: "/CreateItinerary/TrafficDetails?now=" + InnTwoTools.getNowDateStr(), type: "post", success: function (b) {
        InnTwoTools.JsonDataCallback({data: b, success: function () {
            if (b || b.trim()) {
                $("body").append(b)
            }
            a()
        }})
    }})
};
createItineraryTraffic.clicked = {};
createItineraryTraffic.trafficDetailsClosed = function (b) {
    var d = b.policy;
    var c = b.planIndex;
    var a = createItineraryTraffic.clicked;
    var e = JSON.stringify(b.linePois);
    a.find(".create-itinerary-wayico").attr("data-policy", d < 0 ? 0 : d);
    a.find(".create-itinerary-wayico").attr("data-plan", c < 0 ? 0 : c);
    if (b.distanceUnit && b.durationUnit) {
        a.find(".trip-schedule-items-distance").text(b.distanceUnit + "," + b.durationUnit)
    }
    if (b.distanceClean && b.durationClean) {
        a.find(".trip-schedule-distance-duration").text(b.distanceClean + "," + b.durationClean)
    }
    if (e && e.trim()) {
        a.find(".trip-schedule-places-line").text(e)
    }
    drawLinesByfacePoints();
    SaveEditorItinerary();
    calculateAmountDistanceDuration(window.nowSchduleIndex)
};
createItineraryTraffic.getOrignAndEnd = function (n) {
    var p = fullFindPrev(n).outer;
    var m = p.find(".trip_shchedule_sight_spot_name").text();
    m = m ? m : p.find(".trip_shchedule_sight_spot_name").text();
    var l = p.find(".placePoint").text();
    var k = p.find(".parentCategory").text();
    var h = p.find(".categoryId").text();
    var i = p.find(".trip_schedule_sight_spot_img img").attr("src");
    var j = p.find(".iscustom").text();
    var g = n.find(".trip_shchedule_sight_spot_name").text();
    g = g ? g : n.find(".trip_shchedule_sight_spot_name").text();
    var f = n.find(".placePoint").text();
    var e = n.find(".parentCategory").text();
    var b = n.find(".categoryId").text();
    var c = n.find(".trip_schedule_sight_spot_img img").attr("src");
    var d = n.find(".iscustom").text();
    var q = n.find(".create-itinerary-wayico").attr("way");
    var a = n.find(".create-itinerary-wayico").attr("data-policy");
    a = typeof a === "undefined" ? 0 : Number(a);
    var o = n.find(".create-itinerary-wayico").attr("data-plan");
    o = typeof o === "undefined" ? 0 : Number(o);
    return[
        {title: m, point: InnTwoMapCore.createPoint(l.split(",")[0], l.split(",")[1]), pCategory: k, category: h, imgUrl: i, isCustom: j, trafficWay: q, dataPolicy: a, planIndex: o},
        {title: g, point: InnTwoMapCore.createPoint(f.split(",")[0], f.split(",")[1]), pCategory: e, category: b, imgUrl: c, isCustom: d, trafficWay: q, dataPolicy: a, planIndex: o}
    ]
};
$(function () {
    var a = true;
    $(".trip-schedule-items-place-result").live("click", function () {
        createItineraryTraffic.clicked = $(this).parents(".trip-schedule-item-outer");
        var d = createItineraryTraffic.clicked.find(".create-itinerary-wayico");
        var c = d.attr("way");
        if (c != 0 && c != 1) {
            return
        }
        var b = createItineraryTraffic.getOrignAndEnd(createItineraryTraffic.clicked);
        if (a) {
            createItineraryTraffic.loadTrafficDetails(function () {
                TrafficDetails.init({pls: b});
                TrafficDetails.closed = createItineraryTraffic.trafficDetailsClosed
            });
            a = false
        } else {
            TrafficDetails.init({pls: b});
            TrafficDetails.closed = createItineraryTraffic.trafficDetailsClosed
        }
    })
});
var sideOfRoadAttraction = {};
sideOfRoadAttraction.selectedCategories = [];
sideOfRoadAttraction.pointArray = [];
sideOfRoadAttraction.searchRange = 50;
sideOfRoadAttraction.showSideOfRoadResult = function () {
    if (sideOfRoadAttrViewModel.attractions && sideOfRoadAttrViewModel.attractions().length > 0) {
        $("#sideOfRoadAttractions").show().animate({width: "270px"}, 200)
    } else {
        InnTwoTools.Alert("请检索线路!")
    }
};
var searchRoutePath;
var stroke = {strokeWeight: 5, strokeOpacity: 1, strokeColor: "#FF6A6A"};
sideOfRoadAttraction.getSideOfRoadAttraCacheKey = function () {
    var b = sideOfRoadAttraction.routeSearchPlaces.join("-");
    var a = b;
    if (sideOfRoadAttraction.routeSearchPlaceCategories) {
        a += "," + sideOfRoadAttraction.routeSearchPlaceCategories
    }
    if (!sideOfRoadAttraction.routeSearchRange) {
        sideOfRoadAttraction.routeSearchRange = 50
    }
    a += "," + sideOfRoadAttraction.routeSearchRange;
    return a
};
sideOfRoadAttraction.driverCustomCreateRoute = function (f) {
    var g = $.trim($("#RouteTripperLineStart").val());
    var c = $.trim($("#RouteTripperLineEnd").val());
    if (g == "" || c == "" || g.trim() == "" || c.trim() == "") {
        InnTwoTools.Alert("请输入出发地、目的地！");
        return
    }
    $("#originPlaceSideOfRoad").text(g);
    $("#destinationPlaceSideOfRoad").text(c);
    var e = [g];
    var a = $(".create_route_input_channel").length;
    if (a > 0) {
        for (var d = 0; d < a; d++) {
            var b = $(".create_route_input_channel").eq(d).val();
            b = $.trim(b);
            if (b != "" && b != "请输入途经点") {
                e.push(b)
            }
        }
    }
    e.push(c);
    sideOfRoadAttraction.routeSearchPlaces = e;
    sideOfRoadAttraction.routeSearchPlaceCategories = "";
    sideOfRoadAttraction.routeSearchRange = 50;
    InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_ROUTE});
    $("#RouteTripperSearchRouteBtn").attr({disabled: "disabled"}).val("检索中...");
    sideOfRoadAttraction.routeTripperSearching = true;
    inntwoMap.removeOverlay(searchRoutePath);
    removeMarker();
    sideOfRoadAttraction.cleanPlaceCategoryItem();
    changeNearMarkerNaillStyle();
    sideOfRoadAttraction.createRoute({places: e, routPolicy: f, map: inntwoMap, strokeItem: stroke, callBack: sideOfRoadAttraction.setRoutDashed});
    $("#PlaceSearchList,#HotelSearchList").hide();
    $("#nearAttractionPager,#nearHotelsPager").html("")
};
sideOfRoadAttraction.setRoutDashed = function (a) {
    a.setStrokeStyle("dashed");
    searchRoutePath = a;
    sideOfRoadAttraction.routeTripperSearching = false
};
sideOfRoadAttraction.createRoute = function (e) {
    var f = e.places, g = e.routPolicy, b = e.map, d = e.notRecommend, a = e.callBack, c = e.notMarker, h = e.strokeItem;
    if (typeof h === "undefined") {
        h = {strokeWeight: 5, strokeOpacity: 1, strokeColor: "#00a1cb"}
    }
    initialCategories();
    sideOfRoadAttraction.pointArray = [];
    inntwoMapSearch.createDrivingRoute(f, function (p, j, o, n, k) {
        if (j.length > 1) {
            b.setViewport(j)
        } else {
            if (j.length == 1) {
                b.setCenter(j[0], 10)
            }
        }
        if (!p) {
            InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_ROUTE_ERROR});
            setTimeout(function () {
                InnTwoTools.mapLoadingNotify({option: "close"})
            }, 2000);
            $("#RouteTripperSearchRouteBtn").removeAttr("disabled").val("检索路线");
            return
        }
        $(".create_trip_schedule_place_sort_container").show();
        changeRadiusSearchPlace();
        window.placeSortShow = true;
        if (typeof a !== "undefined") {
            a(n)
        }
        var i = 0;

        function m(r, q) {
            if (i * q >= r.length - 1) {
                return
            }
            sideOfRoadAttraction.pointArray.push(r[q * i]);
            i++;
            m(r, q)
        }

        m(o, 30);
        if (typeof d === "undefined" || !d) {
            sideOfRoadAttraction.getRecommandAttraction(sideOfRoadAttraction.pointArray, 30, 1, function () {
                if (typeof c === "undefined") {
                    sideOfRoadAttrViewModel.driveSearchChanneles([]);
                    $("#createItineraryChannelToal").text("");
                    inntwoMapSearch.markChannelMarker({points: j, html: {url: templateUrl.mainTemplate.Url, selector: templateUrl.mainTemplate.cityMarkerOverlayUrl}, linestyle: {startClassName: "ordinary_marker_class ordinary_marker_start", channelClassName: "ordinary_marker_class ordinary_marker_channel channel_marker_number", destinationClassName: "ordinary_marker_class ordinary_marker_destination"}, map: b, showPlaceInfo: true, closeOtherMessage: function () {
                        inntwoMapSearch.hideMarkerOverlay()
                    }, callBack: function () {
                        customPlaceMarkerListener()
                    }})
                }
                placeFavoriteListener()
            })
        }
        var l = distanceDurationSummation(k);
        $("#drivingDisDuration").text(l);
        $("#driveRouteDistanceDuration").text("总计:" + l);
        $(".channel_marker_number").each(function () {
            var q = $(".channel_marker_number").index(this);
            $(this).find(".place_marker_inner_html").append("<div class='create-itinerary-marker-channal-number'>" + (q + 1) + "</div>")
        })
    }, h, g, b)
};
sideOfRoadAttraction.setPlaceCategoryIco = function () {
    var a = false;
    $(".create_trip_schedule_place_sort_first").click(function () {
        var d = $(this).children(".openChildContainer").text();
        d = $.trim(d);
        var b = $.trim($(this).children(".categoryId").text());
        if (a) {
            return
        }
        if (d == "-1") {
            $(this).find(".trip-place-category-ico").show();
            $(this).children(".openChildContainer").text("1");
            $(this).css({"background-color": "#00a1cb"});
            $(this).children(".create_trip_schedule_place_sort_word").css({color: "#fff"});
            sideOfRoadAttraction.removeRecommend();
            changeNearMarkerNaillStyle();
            a = true;
            $(this).children(".selected_second_level_selected").show();
            $(this).children(".place_category_selected").text("1");
            $(this).children(".second_category").css({color: "#00a1cb"});
            $(this).children(".category_place_count").show();
            sideOfRoadAttraction.selectedCategories.push(b);
            sideOfRoadAttraction.routeSearchPlaceCategories = sideOfRoadAttraction.selectedCategories.join(":");
            sideOfRoadAttraction.getPlaceByCategory(sideOfRoadAttraction.routeSearchPlaceCategories, sideOfRoadAttraction.searchRange, function () {
                a = false;
                placeFavoriteListener()
            })
        } else {
            $(this).find(".trip-place-category-ico").hide();
            $(this).children(".openChildContainer").text("-1");
            $(this).css({"background-color": "#fff"});
            $(this).children(".create_trip_schedule_place_sort_word").css({color: "#333"});
            for (var c = 0; c < sideOfRoadAttraction.selectedCategories.length; c++) {
                if (sideOfRoadAttraction.selectedCategories[c] == b) {
                    sideOfRoadAttraction.selectedCategories = sideOfRoadAttraction.selectedCategories.removeItem(c)
                }
            }
            sideOfRoadAttraction.routeSearchPlaceCategories = sideOfRoadAttraction.selectedCategories.join(":");
            $(".place_marker_json_data").each(function () {
                var h = $(this).text();
                var g = $(this).parent();
                g = g.find(".place_overlay_container");
                var f = g.attr("data-attrOrigin");
                h = JSON.parse(h);
                if (h.CategoryId == b && f == inntwoEnum.attractionOrigin.routeSearch) {
                    var e = $(this).parent().find(".add-placeto-schedule").length;
                    var i = $(this).parent().find(".search_place_overlay_nail_flag").text();
                    if (i != 1 && e < 1) {
                        $(this).parent().remove()
                    }
                }
            })
        }
    })
};
var placeByRangesearching = false;
sideOfRoadAttraction.searchPlaceByRange = function (b) {
    sideOfRoadAttraction.searchRange = b;
    if (!placeByRangesearching) {
        placeByRangesearching = true;
        removeMarker(false, true);
        var a = sideOfRoadAttraction.selectedCategories.join(":");
        sideOfRoadAttraction.getPlaceByCategory(a, b, function () {
            placeByRangesearching = false;
            placeFavoriteListener()
        })
    }
};
sideOfRoadAttraction.getPlaceByCategory = function (a, c, d) {
    InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_PLACE});
    if (!sideOfRoadAttraction.pointArray || sideOfRoadAttraction.pointArray.length < 1) {
        d();
        InnTwoTools.mapLoadingNotify({message: "请先检索路线"});
        setTimeout(function () {
            InnTwoTools.mapLoadingNotify({option: "close"})
        }, 2000);
        return
    }
    var b = sideOfRoadAttraction.getPointLatLngString(sideOfRoadAttraction.pointArray);
    $.ajax({url: ajaxUrl.GetSightSpotsByPointsAndCategories_Url, data: {points: b, categories: a, distance: c, key: sideOfRoadAttraction.getSideOfRoadAttraCacheKey()}, success: function (e) {
        d();
        var h = InnTwoTools.GetTotalPages(e.Total, e.PageSize);
        var g = (h != 1);
        var f = {currentPage: e.CurrentPage, totalPages: h, shouldShowPage: g, size: "mini", alignment: "center", onPageChanged: function (i, k, j) {
            sideOfRoadAttraction.getRecommandAttraction(sideOfRoadAttraction.pointArray, c, j)
        }};
        $("#sideOfRoadAttractionsPager").bootstrapPaginator(f);
        InnTwoTools.JsonDataCallback({data: e, success: function () {
            sideOfRoadAttrViewModel.attractions(e.Content);
            for (var j = 0; j < e.Content.length; j++) {
                var o = e.Content[j];
                var l = {};
                l.point = {lat: o.Latitude, lng: o.Longitude};
                l.pointStr = o.Longitude + "," + o.Latitude;
                l.placeName = o.PlaceName;
                l.grade = o.Grade;
                l.imgUrl = o.Ico;
                l.placeInfoId = o.PlaceInfoId;
                l.defaultImgUrl = o.Image;
                l.remarkerCategory = o.PlaceCategoryRemarks;
                l.province = o.Province;
                l.city = o.City;
                l.district = o.District;
                l.price = o.Price;
                l.duration = o.Duration;
                l.CategoryId = o.PlaceCategory.CategoryId;
                l.markerNumber = j + 1;
                l.contianerClassName = inntwoBase.getMarkerStyleNumber(l.CategoryId);
                l.attrOrigin = inntwoEnum.attractionOrigin.routeSearch;
                var k = templateUrl.mainTemplate.placeOverlaySelector;
                var n = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: k, json: l});
                var m = JSON.stringify(l);
                l.innerHtml = n;
                l.jsonData = m;
                l.map = inntwoMap;
                InnTwoMapCore.addMarkerInMapByOverLay(l)
            }
            inntwoMapSearch.setMarkerClick();
            InnTwoTools.mapLoadingNotify({option: "close"});
            inntwoMapSearch.mapClickHideOverlay(inntwoMap)
        }, notFound: function () {
            InnTwoTools.mapLoadingNotify({message: "暂无相关数据"});
            setTimeout(function () {
                InnTwoTools.mapLoadingNotify({option: "close"})
            }, 1500)
        }})
    }, type: "post", error: function () {
        InnTwoTools.Alert(inntwoBase.AlarmMessage.SERVE_ERROR)
    }})
};
sideOfRoadAttraction.getRecommandAttraction = function (b, c, a, d) {
    if (typeof c === "undefined" || !c) {
        c = 50
    }
    InnTwoTools.mapLoadingNotify({message: inntwoBase.AlarmMessage.SEARCH_PLACE});
    if (!b || b.length < 1) {
        InnTwoTools.mapLoadingNotify({message: "请先检索路线"});
        setTimeout(function () {
            InnTwoTools.mapLoadingNotify({option: "close"})
        }, 1300);
        return
    }
    $.ajax({url: ajaxUrl.RecommendAttractionAbstractInfoByPoints_Url, data: {points: sideOfRoadAttraction.getPointLatLngString(b), distance: c, key: sideOfRoadAttraction.getSideOfRoadAttraCacheKey(), pageIndex: a, categories: sideOfRoadAttraction.routeSearchPlaceCategories}, success: function (e) {
        InnTwoTools.mapLoadingNotify({option: "close"});
        InnTwoTools.JsonDataCallback({data: e, success: function () {
            sideOfRoadAttrViewModel.attractions(e.Content);
            sideOfRoadAttraction.showSideOfRoadResult();
            $("#appearSidesofroadButton").unbind("click").click(function (i) {
                i.stopPropagation();
                sideOfRoadAttraction.showSideOfRoadResult()
            });
            var f = [];
            removeNearPlacMarkere();
            removeNearHotelsMaker();
            removeNearDelicaciesMaker();
            for (var g = 0; g < e.Content.length; g++) {
                var m = e.Content[g];
                var k = {};
                k.point = {lat: m.Latitude, lng: m.Longitude};
                k.pointStr = m.Longitude + ", " + m.Latitude;
                k.CategoryId = m.PlaceCategory ? m.PlaceCategory.CategoryId : m.PlaceCategoryId;
                k.placeName = m.PlaceName;
                k.imgUrl = m.Ico;
                k.placeInfoId = m.PlaceInfoId;
                k.defaultImgUrl = m.Image;
                k.remarkerCategory = m.PlaceCategoryRemarks;
                k.province = m.Province;
                k.city = m.City;
                k.district = m.District;
                k.price = m.Price;
                k.grade = m.Grade;
                k.duration = m.Duration;
                k.markerNumber = g + 1;
                var h = "";
                inntwoBase.placeCategryByCategoryId({categoryId: k.CategoryId, civilize: function () {
                    h = "home_place_marker place_search_result_civilization"
                }, nature: function () {
                    h = "home_place_marker place_search_result_natural"
                }, entertain: function () {
                    h = "home_place_marker place_search_result_entertainment"
                }, aspect: function () {
                    h = "home_place_marker place_search_result_aspect"
                }});
                k.contianerClassName = h;
                var l = JSON.stringify(k);
                k.innerHtml = InnTwoTools.getTemplateByMustache({url: templateUrl.mainTemplate.Url, selector: templateUrl.mainTemplate.placeOverlaySelector, json: k});
                k.jsonData = l;
                k.map = inntwoMap;
                InnTwoMapCore.addMarkerInMapByOverLay(k);
                f.push(k)
            }
            inntwoMapSearch.setMarkerClick();
            $(".home_place_marker").last().find(".markerOverlayContainer").show();
            inntwoMapSearch.mapClickHideOverlay(inntwoMap);
            var o = InnTwoTools.GetTotalPages(e.Total, e.PageSize);
            var n = (o != 1);
            var j = {currentPage: e.CurrentPage, totalPages: o, shouldShowPage: n, size: "mini", alignment: "center", onPageChanged: function (i, q, p) {
                sideOfRoadAttraction.getRecommandAttraction(b, c, p)
            }};
            $("#sideOfRoadAttractionsPager").bootstrapPaginator(j);
            sideOfRoadAttraction.setScroller();
            if (d) {
                d()
            }
        }});
        $("#RouteTripperSearchRouteBtn").removeAttr("disabled").val("检索路线")
    }, type: "post"});
    sideOfRoadAttraction.removedRecommend = false
};
sideOfRoadAttraction.removeRecommend = function () {
    if (!sideOfRoadAttraction.removedRecommend) {
        removeMarker(false, true);
        sideOfRoadAttraction.removedRecommend = true
    }
};
sideOfRoadAttraction.getPointLatLngString = function (c) {
    var d = "";
    for (var a = 0, b = c.length; a < b; a++) {
        d += c[a].lat + "," + c[a].lng + ";"
    }
    return d.substring(0, d.lastIndexOf(";"))
};
sideOfRoadAttraction.driveSearchTabs = function () {
    $(".create-itinerary-search-tabs-drive").click(function () {
        $(".create-itinerary-search-tabs-desti").removeClass("inntwo-backgroud-color-info").removeClass("inntwo-text-ordinary").addClass("inntwo-background-tabs1").addClass("inntwo-text-default");
        $(this).removeClass("inntwo-background-tabs1").removeClass("inntwo-text-default").addClass("inntwo-backgroud-color-info").addClass("inntwo-text-ordinary");
        $("#searchTripperResultContainer").show();
        $(".main_destination_search_container").hide()
    });
    $(".create-itinerary-search-tabs-desti").click(function () {
        $(".create-itinerary-search-tabs-drive").removeClass("inntwo-backgroud-color-info").removeClass("inntwo-text-ordinary").addClass("inntwo-background-tabs1").addClass("inntwo-text-default");
        $(this).removeClass("inntwo-background-tabs1").removeClass("inntwo-text-default").addClass("inntwo-backgroud-color-info").addClass("inntwo-text-ordinary");
        $("#searchTripperResultContainer").hide();
        $(".main_destination_search_container").show()
    })
};
sideOfRoadAttraction.cleanPlaceCategoryItem = function () {
    sideOfRoadAttraction.selectedCategories = [];
    $(".create_trip_schedule_place_sort_first").each(function () {
        var a = $.trim($(this).children(".categoryId").text());
        $(this).find(".trip-place-category-ico").hide();
        $(this).children(".openChildContainer").text("-1");
        $(this).css({"background-color": "#fff"});
        $(this).children(".create_trip_schedule_place_sort_word").css({color: "#333"});
        $(".place_marker_json_data").each(function () {
            var c = $(this).text();
            c = JSON.parse(c);
            if (c.CategoryId == a) {
                var b = $(this).parent().find(".add-placeto-schedule").length;
                var d = $(this).parent().find(".search_place_overlay_nail_flag").text();
                if (d != 1 && b < 1) {
                    $(this).parent().remove()
                }
            }
        })
    })
};
var sideOfRoadAttrViewModel = {};
sideOfRoadAttrViewModel.attractions = ko.observableArray();
sideOfRoadAttrViewModel.driveSearchChanneles = ko.observableArray();
sideOfRoadAttrViewModel.driveSearchChannelesClick = function (a) {
    if (a.placeInfoId && a.placeInfoId.trim()) {
        $(".ordinary_marker_class").each(function () {
            var c = $(this);
            var b = c.find(".place_marker_json_data").text();
            if (b) {
                b = JSON.parse(b);
                if (b.placeInfoId == a.placeInfoId) {
                    inntwoMap.setCenter(InnTwoMapCore.createPoint(b.lng, b.lat));
                    c.click()
                }
            }
        })
    }
};
sideOfRoadAttrViewModel.atractionPopup = function (a) {
    attractionInfo.atractionPopup(a.PlaceInfoId)
};
sideOfRoadAttraction.customBinds = function () {
    ko.bindingHandlers.sideOfRoadAttrMarker = {update: function (b, d) {
        var a = d();
        var c = "";
        inntwoBase.placeCategryByCategoryId({categoryId: a, civilize: function () {
            c = "0px -47px"
        }, nature: function () {
            c = "-20px -47px"
        }, entertain: function () {
            c = "-40px -47px"
        }, aspect: function () {
            c = "-180px -106px"
        }});
        $(b).css({"background-position": c, display: "block"})
    }}
};
sideOfRoadAttraction.setScroller = function () {
    var b = $(window).height();
    var a = b - 202;
    $("#sideOfRoadAttractionScroll").height(a).inntwoScroller();
    $(window).resize(function () {
        b = $(window).height();
        a = b - 202;
        $("#sideOfRoadAttractionScroll").height(a).inntwoScroller()
    })
};
$(function () {
    $("#hiddenSideOfRoadAttraction").click(function () {
        $("#sideOfRoadAttractions").animate({width: 0}, 200, function () {
            $(this).hide();
            $(".appear-nearby-button").show()
        })
    });
    var a = 0;
    $("#RouteTripperSearchRouteBtn").click(function () {
        sideOfRoadAttraction.driverCustomCreateRoute(a)
    });
    $("#RouteTripperLineEnd").keyup(function (b) {
        if (b.keyCode == 13) {
            if (sideOfRoadAttraction.routeTripperSearching) {
                return
            }
            $("#RouteTripperSearchRouteBtn").click()
        }
    });
    $("#routeScheduleContainer").dropdown();
    $(".route-way-item").click(function () {
        a = $(this).attr("val");
        $("#routeScheduleSelected").text($.trim($(this).text()));
        $("#RouteTripperSearchRouteBtn").click()
    });
    sideOfRoadAttraction.driveSearchTabs();
    sideOfRoadAttraction.customBinds();
    ko.applyBindings(sideOfRoadAttrViewModel, document.getElementById("sideOfRoadAttractions"));
    $("#sideofroadAttractionTriangle").mouseenter(function () {
        $("#inntwoDdlItems").show()
    }).mouseleave(function () {
        $("#inntwoDdlItems").hide()
    })
});
var Base64 = (function () {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var b = {encode: function (l) {
        var m = "";
        var c, d, e;
        var f, g, h, j;
        var k = 0;
        do {
            c = l.charCodeAt(k++);
            d = l.charCodeAt(k++);
            e = l.charCodeAt(k++);
            f = c >> 2;
            g = ((c & 3) << 4) | (d >> 4);
            h = ((d & 15) << 2) | (e >> 6);
            j = e & 63;
            if (isNaN(d)) {
                h = j = 64
            } else {
                if (isNaN(e)) {
                    j = 64
                }
            }
            m = m + a.charAt(f) + a.charAt(g) + a.charAt(h) + a.charAt(j)
        } while (k < l.length);
        return m
    }, decode: function (l) {
        var m = "";
        var c, d, e;
        var f, g, h, j;
        var k = 0;
        l = l.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do {
            f = a.indexOf(l.charAt(k++));
            g = a.indexOf(l.charAt(k++));
            h = a.indexOf(l.charAt(k++));
            j = a.indexOf(l.charAt(k++));
            c = (f << 2) | (g >> 4);
            d = ((g & 15) << 4) | (h >> 2);
            e = ((h & 3) << 6) | j;
            m = m + String.fromCharCode(c);
            if (h != 64) {
                m = m + String.fromCharCode(d)
            }
            if (j != 64) {
                m = m + String.fromCharCode(e)
            }
        } while (k < l.length);
        return m
    }};
    return b
})();
function b64_sha1(a) {
    return binb2b64(core_sha1(str2binb(a), a.length * 8))
}
function str_sha1(a) {
    return binb2str(core_sha1(str2binb(a), a.length * 8))
}
function b64_hmac_sha1(b, a) {
    return binb2b64(core_hmac_sha1(b, a))
}
function str_hmac_sha1(b, a) {
    return binb2str(core_hmac_sha1(b, a))
}
function core_sha1(z, o) {
    z[o >> 5] |= 128 << (24 - o % 32);
    z[((o + 64 >> 9) << 4) + 15] = o;
    var y = new Array(80);
    var f = 1732584193;
    var g = -271733879;
    var h = -1732584194;
    var k = 271733878;
    var l = -1009589776;
    var m, n, v, p, q, r, s, u;
    for (m = 0; m < z.length; m += 16) {
        p = f;
        q = g;
        r = h;
        s = k;
        u = l;
        for (n = 0; n < 80; n++) {
            if (n < 16) {
                y[n] = z[m + n]
            } else {
                y[n] = rol(y[n - 3] ^ y[n - 8] ^ y[n - 14] ^ y[n - 16], 1)
            }
            v = safe_add(safe_add(rol(f, 5), sha1_ft(n, g, h, k)), safe_add(safe_add(l, y[n]), sha1_kt(n)));
            l = k;
            k = h;
            h = rol(g, 30);
            g = f;
            f = v
        }
        f = safe_add(f, p);
        g = safe_add(g, q);
        h = safe_add(h, r);
        k = safe_add(k, s);
        l = safe_add(l, u)
    }
    return[f, g, h, k, l]
}
function sha1_ft(g, a, e, f) {
    if (g < 20) {
        return(a & e) | ((~a) & f)
    }
    if (g < 40) {
        return a ^ e ^ f
    }
    if (g < 60) {
        return(a & e) | (a & f) | (e & f)
    }
    return a ^ e ^ f
}
function sha1_kt(a) {
    return(a < 20) ? 1518500249 : (a < 40) ? 1859775393 : (a < 60) ? -1894007588 : -899497514
}
function core_hmac_sha1(f, b) {
    var a = str2binb(f);
    if (a.length > 16) {
        a = core_sha1(a, f.length * 8)
    }
    var e = new Array(16), g = new Array(16);
    for (var d = 0; d < 16; d++) {
        e[d] = a[d] ^ 909522486;
        g[d] = a[d] ^ 1549556828
    }
    var c = core_sha1(e.concat(str2binb(b)), 512 + b.length * 8);
    return core_sha1(g.concat(c), 512 + 160)
}
function safe_add(c, d) {
    var a = (c & 65535) + (d & 65535);
    var b = (c >> 16) + (d >> 16) + (a >> 16);
    return(b << 16) | (a & 65535)
}
function rol(b, a) {
    return(b << a) | (b >>> (32 - a))
}
function str2binb(d) {
    var a = [];
    var c = 255;
    for (var b = 0; b < d.length * 8; b += 8) {
        a[b >> 5] |= (d.charCodeAt(b / 8) & c) << (24 - b % 32)
    }
    return a
}
function binb2str(a) {
    var d = "";
    var c = 255;
    for (var b = 0; b < a.length * 32; b += 8) {
        d += String.fromCharCode((a[b >> 5] >>> (24 - b % 32)) & c)
    }
    return d
}
function binb2b64(a) {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var d = "";
    var f, c;
    for (var b = 0; b < a.length * 4; b += 3) {
        f = (((a[b >> 2] >> 8 * (3 - b % 4)) & 255) << 16) | (((a[b + 1 >> 2] >> 8 * (3 - (b + 1) % 4)) & 255) << 8) | ((a[b + 2 >> 2] >> 8 * (3 - (b + 2) % 4)) & 255);
        for (c = 0; c < 4; c++) {
            if (b * 8 + c * 6 > a.length * 32) {
                d += "="
            } else {
                d += e.charAt((f >> 6 * (3 - c)) & 63)
            }
        }
    }
    return d
}
var MD5 = (function () {
    var k = function (o, p) {
        var m = (o & 65535) + (p & 65535);
        var n = (o >> 16) + (p >> 16) + (m >> 16);
        return(n << 16) | (m & 65535)
    };
    var c = function (n, m) {
        return(n << m) | (n >>> (32 - m))
    };
    var l = function (o) {
        var m = [];
        for (var n = 0; n < o.length * 8; n += 8) {
            m[n >> 5] |= (o.charCodeAt(n / 8) & 255) << (n % 32)
        }
        return m
    };
    var b = function (m) {
        var o = "";
        for (var n = 0; n < m.length * 32; n += 8) {
            o += String.fromCharCode((m[n >> 5] >>> (n % 32)) & 255)
        }
        return o
    };
    var a = function (m) {
        var n = "0123456789abcdef";
        var p = "";
        for (var o = 0; o < m.length * 4; o++) {
            p += n.charAt((m[o >> 2] >> ((o % 4) * 8 + 4)) & 15) + n.charAt((m[o >> 2] >> ((o % 4) * 8)) & 15)
        }
        return p
    };
    var e = function (o, m, n, u, p, r) {
        return k(c(k(k(m, o), k(u, r)), p), n)
    };
    var f = function (m, n, o, p, u, q, r) {
        return e((n & o) | ((~n) & p), m, n, u, q, r)
    };
    var g = function (m, n, o, p, u, q, r) {
        return e((n & p) | (o & (~p)), m, n, u, q, r)
    };
    var h = function (m, n, o, p, u, q, r) {
        return e(n ^ o ^ p, m, n, u, q, r)
    };
    var i = function (m, n, o, p, u, q, r) {
        return e(o ^ (n | (~p)), m, n, u, q, r)
    };
    var d = function (w, r) {
        w[r >> 5] |= 128 << ((r) % 32);
        w[(((r + 64) >>> 9) << 4) + 14] = r;
        var m = 1732584193;
        var n = -271733879;
        var o = -1732584194;
        var p = 271733878;
        var s, t, u, v;
        for (var q = 0; q < w.length; q += 16) {
            s = m;
            t = n;
            u = o;
            v = p;
            m = f(m, n, o, p, w[q + 0], 7, -680876936);
            p = f(p, m, n, o, w[q + 1], 12, -389564586);
            o = f(o, p, m, n, w[q + 2], 17, 606105819);
            n = f(n, o, p, m, w[q + 3], 22, -1044525330);
            m = f(m, n, o, p, w[q + 4], 7, -176418897);
            p = f(p, m, n, o, w[q + 5], 12, 1200080426);
            o = f(o, p, m, n, w[q + 6], 17, -1473231341);
            n = f(n, o, p, m, w[q + 7], 22, -45705983);
            m = f(m, n, o, p, w[q + 8], 7, 1770035416);
            p = f(p, m, n, o, w[q + 9], 12, -1958414417);
            o = f(o, p, m, n, w[q + 10], 17, -42063);
            n = f(n, o, p, m, w[q + 11], 22, -1990404162);
            m = f(m, n, o, p, w[q + 12], 7, 1804603682);
            p = f(p, m, n, o, w[q + 13], 12, -40341101);
            o = f(o, p, m, n, w[q + 14], 17, -1502002290);
            n = f(n, o, p, m, w[q + 15], 22, 1236535329);
            m = g(m, n, o, p, w[q + 1], 5, -165796510);
            p = g(p, m, n, o, w[q + 6], 9, -1069501632);
            o = g(o, p, m, n, w[q + 11], 14, 643717713);
            n = g(n, o, p, m, w[q + 0], 20, -373897302);
            m = g(m, n, o, p, w[q + 5], 5, -701558691);
            p = g(p, m, n, o, w[q + 10], 9, 38016083);
            o = g(o, p, m, n, w[q + 15], 14, -660478335);
            n = g(n, o, p, m, w[q + 4], 20, -405537848);
            m = g(m, n, o, p, w[q + 9], 5, 568446438);
            p = g(p, m, n, o, w[q + 14], 9, -1019803690);
            o = g(o, p, m, n, w[q + 3], 14, -187363961);
            n = g(n, o, p, m, w[q + 8], 20, 1163531501);
            m = g(m, n, o, p, w[q + 13], 5, -1444681467);
            p = g(p, m, n, o, w[q + 2], 9, -51403784);
            o = g(o, p, m, n, w[q + 7], 14, 1735328473);
            n = g(n, o, p, m, w[q + 12], 20, -1926607734);
            m = h(m, n, o, p, w[q + 5], 4, -378558);
            p = h(p, m, n, o, w[q + 8], 11, -2022574463);
            o = h(o, p, m, n, w[q + 11], 16, 1839030562);
            n = h(n, o, p, m, w[q + 14], 23, -35309556);
            m = h(m, n, o, p, w[q + 1], 4, -1530992060);
            p = h(p, m, n, o, w[q + 4], 11, 1272893353);
            o = h(o, p, m, n, w[q + 7], 16, -155497632);
            n = h(n, o, p, m, w[q + 10], 23, -1094730640);
            m = h(m, n, o, p, w[q + 13], 4, 681279174);
            p = h(p, m, n, o, w[q + 0], 11, -358537222);
            o = h(o, p, m, n, w[q + 3], 16, -722521979);
            n = h(n, o, p, m, w[q + 6], 23, 76029189);
            m = h(m, n, o, p, w[q + 9], 4, -640364487);
            p = h(p, m, n, o, w[q + 12], 11, -421815835);
            o = h(o, p, m, n, w[q + 15], 16, 530742520);
            n = h(n, o, p, m, w[q + 2], 23, -995338651);
            m = i(m, n, o, p, w[q + 0], 6, -198630844);
            p = i(p, m, n, o, w[q + 7], 10, 1126891415);
            o = i(o, p, m, n, w[q + 14], 15, -1416354905);
            n = i(n, o, p, m, w[q + 5], 21, -57434055);
            m = i(m, n, o, p, w[q + 12], 6, 1700485571);
            p = i(p, m, n, o, w[q + 3], 10, -1894986606);
            o = i(o, p, m, n, w[q + 10], 15, -1051523);
            n = i(n, o, p, m, w[q + 1], 21, -2054922799);
            m = i(m, n, o, p, w[q + 8], 6, 1873313359);
            p = i(p, m, n, o, w[q + 15], 10, -30611744);
            o = i(o, p, m, n, w[q + 6], 15, -1560198380);
            n = i(n, o, p, m, w[q + 13], 21, 1309151649);
            m = i(m, n, o, p, w[q + 4], 6, -145523070);
            p = i(p, m, n, o, w[q + 11], 10, -1120210379);
            o = i(o, p, m, n, w[q + 2], 15, 718787259);
            n = i(n, o, p, m, w[q + 9], 21, -343485551);
            m = k(m, s);
            n = k(n, t);
            o = k(o, u);
            p = k(p, v)
        }
        return[m, n, o, p]
    };
    var j = {hexdigest: function (m) {
        return a(d(l(m), m.length * 8))
    }, hash: function (m) {
        return b(d(l(m), m.length * 8))
    }};
    return j
})();
if (!Function.prototype.bind) {
    Function.prototype.bind = function (e) {
        var d = this;
        var c = Array.prototype.slice;
        var b = Array.prototype.concat;
        var a = c.call(arguments, 1);
        return function () {
            return d.apply(e ? e : this, b.call(a, c.call(arguments, 0)))
        }
    }
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (a) {
        var c = this.length;
        var b = Number(arguments[1]) || 0;
        b = (b < 0) ? Math.ceil(b) : Math.floor(b);
        if (b < 0) {
            b += c
        }
        for (; b < c; b++) {
            if (b in this && this[b] === a) {
                return b
            }
        }
        return -1
    }
}
(function (e) {
    var f;

    function a(h, g) {
        return new f.Builder(h, g)
    }

    function c(g) {
        return new f.Builder("message", g)
    }

    function b(g) {
        return new f.Builder("iq", g)
    }

    function d(g) {
        return new f.Builder("presence", g)
    }

    f = {VERSION: "1.1.3", NS: {HTTPBIND: "http://jabber.org/protocol/httpbind", BOSH: "urn:xmpp:xbosh", CLIENT: "jabber:client", AUTH: "jabber:iq:auth", ROSTER: "jabber:iq:roster", PROFILE: "jabber:iq:profile", DISCO_INFO: "http://jabber.org/protocol/disco#info", DISCO_ITEMS: "http://jabber.org/protocol/disco#items", MUC: "http://jabber.org/protocol/muc", SASL: "urn:ietf:params:xml:ns:xmpp-sasl", STREAM: "http://etherx.jabber.org/streams", BIND: "urn:ietf:params:xml:ns:xmpp-bind", SESSION: "urn:ietf:params:xml:ns:xmpp-session", VERSION: "jabber:iq:version", STANZAS: "urn:ietf:params:xml:ns:xmpp-stanzas", XHTML_IM: "http://jabber.org/protocol/xhtml-im", XHTML: "http://www.w3.org/1999/xhtml"}, XHTML: {tags: ["a", "blockquote", "br", "cite", "em", "img", "li", "ol", "p", "span", "strong", "ul", "body"], attributes: {a: ["href"], blockquote: ["style"], br: [], cite: ["style"], em: [], img: ["src", "alt", "style", "height", "width"], li: ["style"], ol: ["style"], p: ["style"], span: ["style"], strong: [], ul: ["style"], body: []}, css: ["background-color", "color", "font-family", "font-size", "font-style", "font-weight", "margin-left", "margin-right", "text-align", "text-decoration"], validTag: function (h) {
        for (var g = 0; g < f.XHTML.tags.length; g++) {
            if (h == f.XHTML.tags[g]) {
                return true
            }
        }
        return false
    }, validAttribute: function (j, g) {
        if (typeof f.XHTML.attributes[j] !== "undefined" && f.XHTML.attributes[j].length > 0) {
            for (var h = 0; h < f.XHTML.attributes[j].length; h++) {
                if (g == f.XHTML.attributes[j][h]) {
                    return true
                }
            }
        }
        return false
    }, validCSS: function (h) {
        for (var g = 0; g < f.XHTML.css.length; g++) {
            if (h == f.XHTML.css[g]) {
                return true
            }
        }
        return false
    }}, Status: {ERROR: 0, CONNECTING: 1, CONNFAIL: 2, AUTHENTICATING: 3, AUTHFAIL: 4, CONNECTED: 5, DISCONNECTED: 6, DISCONNECTING: 7, ATTACHED: 8}, LogLevel: {DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, FATAL: 4}, ElementType: {NORMAL: 1, TEXT: 3, CDATA: 4, FRAGMENT: 11}, TIMEOUT: 1.1, SECONDARY_TIMEOUT: 0.1, addNamespace: function (g, h) {
        f.NS[g] = h
    }, forEachChild: function (h, j, k) {
        var l, g;
        for (l = 0; l < h.childNodes.length; l++) {
            g = h.childNodes[l];
            if (g.nodeType == f.ElementType.NORMAL && (!j || this.isTagEqual(g, j))) {
                k(g)
            }
        }
    }, isTagEqual: function (g, h) {
        return g.tagName.toLowerCase() == h.toLowerCase()
    }, _xmlGenerator: null, _makeGenerator: function () {
        var g;
        if (document.implementation.createDocument === undefined || document.implementation.createDocument && document.documentMode && document.documentMode < 10) {
            g = this._getIEXmlDom();
            g.appendChild(g.createElement("strophe"))
        } else {
            g = document.implementation.createDocument("jabber:client", "strophe", null)
        }
        return g
    }, xmlGenerator: function () {
        if (!f._xmlGenerator) {
            f._xmlGenerator = f._makeGenerator()
        }
        return f._xmlGenerator
    }, _getIEXmlDom: function () {
        var h = null;
        var i = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.5.0", "Msxml2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XMLDOM"];
        for (var g = 0; g < i.length; g++) {
            if (h === null) {
                try {
                    h = new ActiveXObject(i[g])
                } catch (j) {
                    h = null
                }
            } else {
                break
            }
        }
        return h
    }, xmlElement: function (l) {
        if (!l) {
            return null
        }
        var m = f.xmlGenerator().createElement(l);
        var g, h, j;
        for (g = 1; g < arguments.length; g++) {
            if (!arguments[g]) {
                continue
            }
            if (typeof(arguments[g]) == "string" || typeof(arguments[g]) == "number") {
                m.appendChild(f.xmlTextNode(arguments[g]))
            } else {
                if (typeof(arguments[g]) == "object" && typeof(arguments[g].sort) == "function") {
                    for (h = 0; h < arguments[g].length; h++) {
                        if (typeof(arguments[g][h]) == "object" && typeof(arguments[g][h].sort) == "function") {
                            m.setAttribute(arguments[g][h][0], arguments[g][h][1])
                        }
                    }
                } else {
                    if (typeof(arguments[g]) == "object") {
                        for (j in arguments[g]) {
                            if (arguments[g].hasOwnProperty(j)) {
                                m.setAttribute(j, arguments[g][j])
                            }
                        }
                    }
                }
            }
        }
        return m
    }, xmlescape: function (g) {
        g = g.replace(/\&/g, "&amp;");
        g = g.replace(/</g, "&lt;");
        g = g.replace(/>/g, "&gt;");
        g = g.replace(/'/g, "&apos;");
        g = g.replace(/"/g, "&quot;");
        return g
    }, xmlTextNode: function (g) {
        return f.xmlGenerator().createTextNode(g)
    }, xmlHtmlNode: function (g) {
        var h;
        if (window.DOMParser) {
            var i = new DOMParser();
            h = i.parseFromString(g, "text/xml")
        } else {
            h = new ActiveXObject("Microsoft.XMLDOM");
            h.async = "false";
            h.loadXML(g)
        }
        return h
    }, getText: function (g) {
        if (!g) {
            return null
        }
        var j = "";
        if (g.childNodes.length === 0 && g.nodeType == f.ElementType.TEXT) {
            j += g.nodeValue
        }
        for (var h = 0; h < g.childNodes.length; h++) {
            if (g.childNodes[h].nodeType == f.ElementType.TEXT) {
                j += g.childNodes[h].nodeValue
            }
        }
        return f.xmlescape(j)
    }, copyElement: function (h) {
        var j, g;
        if (h.nodeType == f.ElementType.NORMAL) {
            g = f.xmlElement(h.tagName);
            for (j = 0; j < h.attributes.length; j++) {
                g.setAttribute(h.attributes[j].nodeName.toLowerCase(), h.attributes[j].value)
            }
            for (j = 0; j < h.childNodes.length; j++) {
                g.appendChild(f.copyElement(h.childNodes[j]))
            }
        } else {
            if (h.nodeType == f.ElementType.TEXT) {
                g = f.xmlGenerator().createTextNode(h.nodeValue)
            }
        }
        return g
    }, createHtml: function (q) {
        var r, p, s, t, h, u, k, l, g, m, n;
        if (q.nodeType == f.ElementType.NORMAL) {
            t = q.nodeName.toLowerCase();
            if (f.XHTML.validTag(t)) {
                try {
                    p = f.xmlElement(t);
                    for (r = 0; r < f.XHTML.attributes[t].length; r++) {
                        h = f.XHTML.attributes[t][r];
                        u = q.getAttribute(h);
                        if (typeof u == "undefined" || u === null || u === "" || u === false || u === 0) {
                            continue
                        }
                        if (h == "style" && typeof u == "object") {
                            if (typeof u.cssText != "undefined") {
                                u = u.cssText
                            }
                        }
                        if (h == "style") {
                            k = [];
                            l = u.split(";");
                            for (s = 0; s < l.length; s++) {
                                g = l[s].split(":");
                                m = g[0].replace(/^\s*/, "").replace(/\s*$/, "").toLowerCase();
                                if (f.XHTML.validCSS(m)) {
                                    n = g[1].replace(/^\s*/, "").replace(/\s*$/, "");
                                    k.push(m + ": " + n)
                                }
                            }
                            if (k.length > 0) {
                                u = k.join("; ");
                                p.setAttribute(h, u)
                            }
                        } else {
                            p.setAttribute(h, u)
                        }
                    }
                    for (r = 0; r < q.childNodes.length; r++) {
                        p.appendChild(f.createHtml(q.childNodes[r]))
                    }
                } catch (o) {
                    p = f.xmlTextNode("")
                }
            } else {
                p = f.xmlGenerator().createDocumentFragment();
                for (r = 0; r < q.childNodes.length; r++) {
                    p.appendChild(f.createHtml(q.childNodes[r]))
                }
            }
        } else {
            if (q.nodeType == f.ElementType.FRAGMENT) {
                p = f.xmlGenerator().createDocumentFragment();
                for (r = 0; r < q.childNodes.length; r++) {
                    p.appendChild(f.createHtml(q.childNodes[r]))
                }
            } else {
                if (q.nodeType == f.ElementType.TEXT) {
                    p = f.xmlTextNode(q.nodeValue)
                }
            }
        }
        return p
    }, escapeNode: function (g) {
        return g.replace(/^\s+|\s+$/g, "").replace(/\\/g, "\\5c").replace(/ /g, "\\20").replace(/\"/g, "\\22").replace(/\&/g, "\\26").replace(/\'/g, "\\27").replace(/\//g, "\\2f").replace(/:/g, "\\3a").replace(/</g, "\\3c").replace(/>/g, "\\3e").replace(/@/g, "\\40")
    }, unescapeNode: function (g) {
        return g.replace(/\\20/g, " ").replace(/\\22/g, '"').replace(/\\26/g, "&").replace(/\\27/g, "'").replace(/\\2f/g, "/").replace(/\\3a/g, ":").replace(/\\3c/g, "<").replace(/\\3e/g, ">").replace(/\\40/g, "@").replace(/\\5c/g, "\\")
    }, getNodeFromJid: function (g) {
        if (g.indexOf("@") < 0) {
            return null
        }
        return g.split("@")[0]
    }, getDomainFromJid: function (h) {
        var g = f.getBareJidFromJid(h);
        if (g.indexOf("@") < 0) {
            return g
        } else {
            var i = g.split("@");
            i.splice(0, 1);
            return i.join("@")
        }
    }, getResourceFromJid: function (g) {
        var h = g.split("/");
        if (h.length < 2) {
            return null
        }
        h.splice(0, 1);
        return h.join("/")
    }, getBareJidFromJid: function (g) {
        return g ? g.split("/")[0] : null
    }, log: function (g, h) {
        return
    }, debug: function (g) {
        this.log(this.LogLevel.DEBUG, g)
    }, info: function (g) {
        this.log(this.LogLevel.INFO, g)
    }, warn: function (g) {
        this.log(this.LogLevel.WARN, g)
    }, error: function (g) {
        this.log(this.LogLevel.ERROR, g)
    }, fatal: function (g) {
        this.log(this.LogLevel.FATAL, g)
    }, serialize: function (h) {
        var l;
        if (!h) {
            return null
        }
        if (typeof(h.tree) === "function") {
            h = h.tree()
        }
        var k = h.nodeName;
        var j, g;
        if (h.getAttribute("_realname")) {
            k = h.getAttribute("_realname")
        }
        l = "<" + k;
        for (j = 0; j < h.attributes.length; j++) {
            if (h.attributes[j].nodeName != "_realname") {
                l += " " + h.attributes[j].nodeName.toLowerCase() + "='" + h.attributes[j].value.replace(/&/g, "&amp;").replace(/\'/g, "&apos;").replace(/>/g, "&gt;").replace(/</g, "&lt;") + "'"
            }
        }
        if (h.childNodes.length > 0) {
            l += ">";
            for (j = 0; j < h.childNodes.length; j++) {
                g = h.childNodes[j];
                switch (g.nodeType) {
                    case f.ElementType.NORMAL:
                        l += f.serialize(g);
                        break;
                    case f.ElementType.TEXT:
                        l += f.xmlescape(g.nodeValue);
                        break;
                    case f.ElementType.CDATA:
                        l += "<![CDATA[" + g.nodeValue + "]]>"
                }
            }
            l += "</" + k + ">"
        } else {
            l += "/>"
        }
        return l
    }, _requestId: 0, _connectionPlugins: {}, addConnectionPlugin: function (g, h) {
        f._connectionPlugins[g] = h
    }};
    f.Builder = function (h, g) {
        if (h == "presence" || h == "message" || h == "iq") {
            if (g && !g.xmlns) {
                g.xmlns = f.NS.CLIENT
            } else {
                if (!g) {
                    g = {xmlns: f.NS.CLIENT}
                }
            }
        }
        this.nodeTree = f.xmlElement(h, g);
        this.node = this.nodeTree
    };
    f.Builder.prototype = {tree: function () {
        return this.nodeTree
    }, toString: function () {
        return f.serialize(this.nodeTree)
    }, up: function () {
        this.node = this.node.parentNode;
        return this
    }, attrs: function (h) {
        for (var g in h) {
            if (h.hasOwnProperty(g)) {
                this.node.setAttribute(g, h[g])
            }
        }
        return this
    }, c: function (i, g, j) {
        var h = f.xmlElement(i, g, j);
        this.node.appendChild(h);
        if (!j) {
            this.node = h
        }
        return this
    }, cnode: function (h) {
        var i;
        var k = f.xmlGenerator();
        try {
            i = (k.importNode !== undefined)
        } catch (g) {
            i = false
        }
        var j = i ? k.importNode(h, true) : f.copyElement(h);
        this.node.appendChild(j);
        this.node = j;
        return this
    }, t: function (h) {
        var g = f.xmlTextNode(h);
        this.node.appendChild(g);
        return this
    }, h: function (h) {
        var g = document.createElement("body");
        g.innerHTML = h;
        var i = f.createHtml(g);
        while (i.childNodes.length > 0) {
            this.node.appendChild(i.childNodes[0])
        }
        return this
    }};
    f.Handler = function (h, k, j, m, i, g, l) {
        this.handler = h;
        this.ns = k;
        this.name = j;
        this.type = m;
        this.id = i;
        this.options = l || {matchBare: false};
        if (!this.options.matchBare) {
            this.options.matchBare = false
        }
        if (this.options.matchBare) {
            this.from = g ? f.getBareJidFromJid(g) : null
        } else {
            this.from = g
        }
        this.user = true
    };
    f.Handler.prototype = {isMatch: function (g) {
        var i;
        var h = null;
        if (this.options.matchBare) {
            h = f.getBareJidFromJid(g.getAttribute("from"))
        } else {
            h = g.getAttribute("from")
        }
        i = false;
        if (!this.ns) {
            i = true
        } else {
            var j = this;
            f.forEachChild(g, null, function (k) {
                if (k.getAttribute("xmlns") == j.ns) {
                    i = true
                }
            });
            i = i || g.getAttribute("xmlns") == this.ns
        }
        if (i && (!this.name || f.isTagEqual(g, this.name)) && (!this.type || g.getAttribute("type") == this.type) && (!this.id || g.getAttribute("id") == this.id) && (!this.from || h == this.from)) {
            return true
        }
        return false
    }, run: function (h) {
        var i = null;
        try {
            i = this.handler(h)
        } catch (g) {
            if (g.sourceURL) {
                f.fatal("error: " + this.handler + " " + g.sourceURL + ":" + g.line + " - " + g.name + ": " + g.message)
            } else {
                if (g.fileName) {
                    if (typeof(console) != "undefined") {
                        console.trace();
                        console.error(this.handler, " - error - ", g, g.message)
                    }
                    f.fatal("error: " + this.handler + " " + g.fileName + ":" + g.lineNumber + " - " + g.name + ": " + g.message)
                } else {
                    f.fatal("error: " + g.message + "\n" + g.stack)
                }
            }
            throw g
        }
        return i
    }, toString: function () {
        return"{Handler: " + this.handler + "(" + this.name + "," + this.id + "," + this.ns + ")}"
    }};
    f.TimedHandler = function (h, g) {
        this.period = h;
        this.handler = g;
        this.lastCalled = new Date().getTime();
        this.user = true
    };
    f.TimedHandler.prototype = {run: function () {
        this.lastCalled = new Date().getTime();
        return this.handler()
    }, reset: function () {
        this.lastCalled = new Date().getTime()
    }, toString: function () {
        return"{TimedHandler: " + this.handler + "(" + this.period + ")}"
    }};
    f.Connection = function (m, i) {
        this.service = m;
        this.options = i || {};
        var j = this.options.protocol || "";
        if (m.indexOf("ws:") === 0 || m.indexOf("wss:") === 0 || j.indexOf("ws") === 0) {
            this._proto = new f.Websocket(this)
        } else {
            this._proto = new f.Bosh(this)
        }
        this.jid = "";
        this.domain = null;
        this.features = null;
        this._sasl_data = {};
        this.do_session = false;
        this.do_bind = false;
        this.timedHandlers = [];
        this.handlers = [];
        this.removeTimeds = [];
        this.removeHandlers = [];
        this.addTimeds = [];
        this.addHandlers = [];
        this._authentication = {};
        this._idleTimeout = null;
        this._disconnectTimeout = null;
        this.do_authentication = true;
        this.authenticated = false;
        this.disconnecting = false;
        this.connected = false;
        this.errors = 0;
        this.paused = false;
        this._data = [];
        this._uniqueId = 0;
        this._sasl_success_handler = null;
        this._sasl_failure_handler = null;
        this._sasl_challenge_handler = null;
        this.maxRetries = this.options.maxRetries || 5;
        this.pollingTime = this.options.pollingTime || 1000;
        this.inactivity = this.options.inactivity || 60;
        this._idleTimeout = setTimeout(this._onIdle.bind(this), this.pollingTime);
        for (var h in f._connectionPlugins) {
            if (f._connectionPlugins.hasOwnProperty(h)) {
                var l = f._connectionPlugins[h];
                var g = function () {
                };
                g.prototype = l;
                this[h] = new g();
                this[h].init(this)
            }
        }
    };
    f.Connection.prototype = {reset: function () {
        this._proto._reset();
        this.do_session = false;
        this.do_bind = false;
        this.timedHandlers = [];
        this.handlers = [];
        this.removeTimeds = [];
        this.removeHandlers = [];
        this.addTimeds = [];
        this.addHandlers = [];
        this._authentication = {};
        this.authenticated = false;
        this.disconnecting = false;
        this.connected = false;
        this.errors = 0;
        this._requests = [];
        this._uniqueId = 0
    }, pause: function () {
        this.paused = true
    }, resume: function () {
        this.paused = false
    }, getUniqueId: function (g) {
        if (typeof(g) == "string" || typeof(g) == "number") {
            return ++this._uniqueId + ":" + g
        } else {
            return ++this._uniqueId + ""
        }
    }, connect: function (i, j, g, l, h, k) {
        this.jid = i;
        this.authzid = f.getBareJidFromJid(this.jid);
        this.authcid = f.getNodeFromJid(this.jid);
        this.pass = j;
        this.servtype = "xmpp";
        this.connect_callback = g;
        this.disconnecting = false;
        this.connected = false;
        this.authenticated = false;
        this.errors = 0;
        this.domain = f.getDomainFromJid(this.jid);
        this._changeConnectStatus(f.Status.CONNECTING, null);
        this._proto._connect(l, h, k)
    }, attach: function (i, k, j, g, l, h, m) {
        this._proto._attach(i, k, j, g, l, h, m)
    }, xmlInput: function (g) {
        return
    }, xmlOutput: function (g) {
        return
    }, rawInput: function (g) {
        return
    }, rawOutput: function (g) {
        return
    }, send: function (g) {
        if (g === null) {
            return
        }
        if (typeof(g.sort) === "function") {
            for (var h = 0; h < g.length; h++) {
                this._queueData(g[h])
            }
        } else {
            if (typeof(g.tree) === "function") {
                this._queueData(g.tree())
            } else {
                this._queueData(g)
            }
        }
        this._proto._send()
    }, flush: function () {
        clearTimeout(this._idleTimeout);
        this._onIdle()
    }, sendIQ: function (h, g, i, m) {
        var n = null;
        var l = this;
        if (typeof(h.tree) === "function") {
            h = h.tree()
        }
        var k = h.getAttribute("id");
        if (!k) {
            k = this.getUniqueId("sendIQ");
            h.setAttribute("id", k)
        }
        var j = this.addHandler(function (p) {
            if (n) {
                l.deleteTimedHandler(n)
            }
            var o = p.getAttribute("type");
            if (o == "result") {
                if (g) {
                    g(p)
                }
            } else {
                if (o == "error") {
                    if (i) {
                        i(p)
                    }
                } else {
                    throw {name: "StropheError", message: "Got bad IQ type of " + o}
                }
            }
        }, null, "iq", null, k);
        if (m) {
            n = this.addTimedHandler(m, function () {
                l.deleteHandler(j);
                if (i) {
                    i(null)
                }
                return false
            })
        }
        this.send(h);
        return k
    }, _queueData: function (g) {
        if (g === null || !g.tagName || !g.childNodes) {
            throw {name: "StropheError", message: "Cannot queue non-DOMElement."}
        }
        this._data.push(g)
    }, _sendRestart: function () {
        this._data.push("restart");
        this._proto._sendRestart();
        this._idleTimeout = setTimeout(this._onIdle.bind(this), this.pollingTime)
    }, addTimedHandler: function (h, g) {
        var i = new f.TimedHandler(h, g);
        this.addTimeds.push(i);
        return i
    }, deleteTimedHandler: function (g) {
        this.removeTimeds.push(g)
    }, addHandler: function (i, l, k, n, j, g, m) {
        var h = new f.Handler(i, l, k, n, j, g, m);
        this.addHandlers.push(h);
        return h
    }, deleteHandler: function (g) {
        this.removeHandlers.push(g)
    }, disconnect: function (h) {
        this._changeConnectStatus(f.Status.DISCONNECTING, h);
        f.info("Disconnect was called because: " + h);
        if (this.connected) {
            this.disconnecting = true;
            var g = false;
            if (this.authenticated) {
                g = d({xmlns: f.NS.CLIENT, type: "unavailable"})
            }
            this._disconnectTimeout = this._addSysTimedHandler(3000, this._onDisconnectTimeout.bind(this));
            this._proto._disconnect(g)
        }
    }, _changeConnectStatus: function (m, g) {
        for (var j in f._connectionPlugins) {
            if (f._connectionPlugins.hasOwnProperty(j)) {
                var l = this[j];
                if (l.statusChanged) {
                    try {
                        l.statusChanged(m, g)
                    } catch (i) {
                        f.error("" + j + " plugin caused an exception changing status: " + i)
                    }
                }
            }
        }
        if (this.connect_callback) {
            try {
                this.connect_callback(m, g)
            } catch (h) {
                f.error("User connection callback caused an exception: " + h)
            }
        }
    }, _doDisconnect: function () {
        if (this._disconnectTimeout !== null) {
            this.deleteTimedHandler(this._disconnectTimeout);
            this._disconnectTimeout = null
        }
        f.info("_doDisconnect was called");
        this._proto._doDisconnect();
        this.authenticated = false;
        this.disconnecting = false;
        this.handlers = [];
        this.timedHandlers = [];
        this.removeTimeds = [];
        this.removeHandlers = [];
        this.addTimeds = [];
        this.addHandlers = [];
        this._changeConnectStatus(f.Status.DISCONNECTED, null);
        this.connected = false
    }, _dataRecv: function (n, m) {
        f.info("_dataRecv called");
        var j = this._proto._reqToData(n);
        if (j === null) {
            return
        }
        if (this.xmlInput !== f.Connection.prototype.xmlInput) {
            if (j.nodeName === this._proto.strip && j.childNodes.length) {
                this.xmlInput(j.childNodes[0])
            } else {
                this.xmlInput(j)
            }
        }
        if (this.rawInput !== f.Connection.prototype.rawInput) {
            if (m) {
                this.rawInput(m)
            } else {
                this.rawInput(f.serialize(j))
            }
        }
        var l, k;
        while (this.removeHandlers.length > 0) {
            k = this.removeHandlers.pop();
            l = this.handlers.indexOf(k);
            if (l >= 0) {
                this.handlers.splice(l, 1)
            }
        }
        while (this.addHandlers.length > 0) {
            this.handlers.push(this.addHandlers.pop())
        }
        if (this.disconnecting && this._proto._emptyQueue()) {
            this._doDisconnect();
            return
        }
        var p = j.getAttribute("type");
        var g, h;
        if (p !== null && p == "terminate") {
            if (this.disconnecting) {
                return
            }
            g = j.getAttribute("condition");
            h = j.getElementsByTagName("conflict");
            if (g !== null) {
                if (g == "remote-stream-error" && h.length > 0) {
                    g = "conflict"
                }
            }
            this._changeConnectStatus(f.Status.DISCONNECTING, g || "", false);
            this.disconnecting = true;
            this._doDisconnect();
            return
        }
        var o = this;
        f.forEachChild(j, null, function (q) {
            var t, u;
            u = o.handlers;
            o.handlers = [];
            for (t = 0; t < u.length; t++) {
                var s = u[t];
                try {
                    if (s.isMatch(q) && (o.authenticated || !s.user)) {
                        if (s.run(q)) {
                            o.handlers.push(s)
                        }
                    } else {
                        o.handlers.push(s)
                    }
                } catch (r) {
                    f.warn("Removing Strophe handlers due to uncaught exception: " + r.message)
                }
            }
        })
    }, mechanisms: {}, _connect_cb: function (r, g, q) {
        f.info("_connect_cb was called");
        this.connected = true;
        var h = this._proto._reqToData(r);
        if (!h) {
            return
        }
        if (this.xmlInput !== f.Connection.prototype.xmlInput) {
            if (h.nodeName === this._proto.strip && h.childNodes.length) {
                this.xmlInput(h.childNodes[0])
            } else {
                this.xmlInput(h)
            }
        }
        if (this.rawInput !== f.Connection.prototype.rawInput) {
            if (q) {
                this.rawInput(q)
            } else {
                this.rawInput(f.serialize(h))
            }
        }
        var j = this._proto._connect_cb(h);
        if (j === f.Status.CONNFAIL) {
            return
        }
        this._authentication.sasl_scram_sha1 = false;
        this._authentication.sasl_plain = false;
        this._authentication.sasl_digest_md5 = false;
        this._authentication.sasl_anonymous = false;
        this._authentication.legacy_auth = false;
        var l = h.getElementsByTagName("stream:features").length > 0;
        if (!l) {
            l = h.getElementsByTagName("features").length > 0
        }
        var p = h.getElementsByTagName("mechanism");
        var n = [];
        var m, o, k = false;
        if (!l) {
            this._proto._no_auth_received(g);
            return
        }
        if (p.length > 0) {
            for (m = 0; m < p.length; m++) {
                o = f.getText(p[m]);
                if (this.mechanisms[o]) {
                    n.push(this.mechanisms[o])
                }
            }
        }
        this._authentication.legacy_auth = h.getElementsByTagName("auth").length > 0;
        k = this._authentication.legacy_auth || n.length > 0;
        if (!k) {
            this._proto._no_auth_received(g);
            return
        }
        if (this.do_authentication !== false) {
            this.authenticate(n)
        }
    }, authenticate: function (l) {
        var h;
        for (h = 0; h < l.length - 1; ++h) {
            var g = h;
            for (var k = h + 1; k < l.length; ++k) {
                if (l[k].prototype.priority > l[g].prototype.priority) {
                    g = k
                }
            }
            if (g != h) {
                var p = l[h];
                l[h] = l[g];
                l[g] = p
            }
        }
        var m = false;
        for (h = 0; h < l.length; ++h) {
            if (!l[h].test(this)) {
                continue
            }
            this._sasl_success_handler = this._addSysHandler(this._sasl_success_cb.bind(this), null, "success", null, null);
            this._sasl_failure_handler = this._addSysHandler(this._sasl_failure_cb.bind(this), null, "failure", null, null);
            this._sasl_challenge_handler = this._addSysHandler(this._sasl_challenge_cb.bind(this), null, "challenge", null, null);
            this._sasl_mechanism = new l[h]();
            this._sasl_mechanism.onStart(this);
            var n = a("auth", {xmlns: f.NS.SASL, mechanism: this._sasl_mechanism.name});
            if (this._sasl_mechanism.isClientFirst) {
                var o = this._sasl_mechanism.onChallenge(this, null);
                n.t(Base64.encode(o))
            }
            this.send(n.tree());
            m = true;
            break
        }
        if (!m) {
            if (f.getNodeFromJid(this.jid) === null) {
                this._changeConnectStatus(f.Status.CONNFAIL, "x-strophe-bad-non-anon-jid");
                this.disconnect("x-strophe-bad-non-anon-jid")
            } else {
                this._changeConnectStatus(f.Status.AUTHENTICATING, null);
                this._addSysHandler(this._auth1_cb.bind(this), null, null, null, "_auth_1");
                this.send(b({type: "get", to: this.domain, id: "_auth_1"}).c("query", {xmlns: f.NS.AUTH}).c("username", {}).t(f.getNodeFromJid(this.jid)).tree())
            }
        }
    }, _sasl_challenge_cb: function (h) {
        var g = Base64.decode(f.getText(h));
        var i = this._sasl_mechanism.onChallenge(this, g);
        var j = a("response", {xmlns: f.NS.SASL});
        if (i !== "") {
            j.t(Base64.encode(i))
        }
        this.send(j.tree());
        return true
    }, _auth1_cb: function (g) {
        var h = b({type: "set", id: "_auth_2"}).c("query", {xmlns: f.NS.AUTH}).c("username", {}).t(f.getNodeFromJid(this.jid)).up().c("password").t(this.pass);
        if (!f.getResourceFromJid(this.jid)) {
            this.jid = f.getBareJidFromJid(this.jid) + "/strophe"
        }
        h.up().c("resource", {}).t(f.getResourceFromJid(this.jid));
        this._addSysHandler(this._auth2_cb.bind(this), null, null, null, "_auth_2");
        this.send(h.tree());
        return false
    }, _sasl_success_cb: function (h) {
        if (this._sasl_data["server-signature"]) {
            var j;
            var k = Base64.decode(f.getText(h));
            var g = /([a-z]+)=([^,]+)(,|$)/;
            var i = k.match(g);
            if (i[1] == "v") {
                j = i[2]
            }
            if (j != this._sasl_data["server-signature"]) {
                this.deleteHandler(this._sasl_failure_handler);
                this._sasl_failure_handler = null;
                if (this._sasl_challenge_handler) {
                    this.deleteHandler(this._sasl_challenge_handler);
                    this._sasl_challenge_handler = null
                }
                this._sasl_data = {};
                return this._sasl_failure_cb(null)
            }
        }
        f.info("SASL authentication succeeded.");
        if (this._sasl_mechanism) {
            this._sasl_mechanism.onSuccess()
        }
        this.deleteHandler(this._sasl_failure_handler);
        this._sasl_failure_handler = null;
        if (this._sasl_challenge_handler) {
            this.deleteHandler(this._sasl_challenge_handler);
            this._sasl_challenge_handler = null
        }
        this._addSysHandler(this._sasl_auth1_cb.bind(this), null, "stream:features", null, null);
        this._sendRestart();
        return false
    }, _sasl_auth1_cb: function (h) {
        this.features = h;
        var j, g;
        for (j = 0; j < h.childNodes.length; j++) {
            g = h.childNodes[j];
            if (g.nodeName == "bind") {
                this.do_bind = true
            }
            if (g.nodeName == "session") {
                this.do_session = true
            }
        }
        if (!this.do_bind) {
            this._changeConnectStatus(f.Status.AUTHFAIL, null);
            return false
        } else {
            this._addSysHandler(this._sasl_bind_cb.bind(this), null, null, null, "_bind_auth_2");
            var k = f.getResourceFromJid(this.jid);
            if (k) {
                this.send(b({type: "set", id: "_bind_auth_2"}).c("bind", {xmlns: f.NS.BIND}).c("resource", {}).t(k).tree())
            } else {
                this.send(b({type: "set", id: "_bind_auth_2"}).c("bind", {xmlns: f.NS.BIND}).tree())
            }
        }
        return false
    }, _sasl_bind_cb: function (j) {
        if (j.getAttribute("type") == "error") {
            f.info("SASL binding failed.");
            var i = j.getElementsByTagName("conflict"), h;
            if (i.length > 0) {
                h = "conflict"
            }
            this._changeConnectStatus(f.Status.AUTHFAIL, h);
            return false
        }
        var g = j.getElementsByTagName("bind");
        var k;
        if (g.length > 0) {
            k = g[0].getElementsByTagName("jid");
            if (k.length > 0) {
                this.jid = f.getText(k[0]);
                if (this.do_session) {
                    this._addSysHandler(this._sasl_session_cb.bind(this), null, null, null, "_session_auth_2");
                    this.send(b({type: "set", id: "_session_auth_2"}).c("session", {xmlns: f.NS.SESSION}).tree())
                } else {
                    this.authenticated = true;
                    this._changeConnectStatus(f.Status.CONNECTED, null)
                }
            }
        } else {
            f.info("SASL binding failed.");
            this._changeConnectStatus(f.Status.AUTHFAIL, null);
            return false
        }
    }, _sasl_session_cb: function (g) {
        if (g.getAttribute("type") == "result") {
            this.authenticated = true;
            this._changeConnectStatus(f.Status.CONNECTED, null)
        } else {
            if (g.getAttribute("type") == "error") {
                f.info("Session creation failed.");
                this._changeConnectStatus(f.Status.AUTHFAIL, null);
                return false
            }
        }
        return false
    }, _sasl_failure_cb: function (g) {
        if (this._sasl_success_handler) {
            this.deleteHandler(this._sasl_success_handler);
            this._sasl_success_handler = null
        }
        if (this._sasl_challenge_handler) {
            this.deleteHandler(this._sasl_challenge_handler);
            this._sasl_challenge_handler = null
        }
        if (this._sasl_mechanism) {
            this._sasl_mechanism.onFailure()
        }
        this._changeConnectStatus(f.Status.AUTHFAIL, null);
        return false
    }, _auth2_cb: function (g) {
        if (g.getAttribute("type") == "result") {
            this.authenticated = true;
            this._changeConnectStatus(f.Status.CONNECTED, null)
        } else {
            if (g.getAttribute("type") == "error") {
                this._changeConnectStatus(f.Status.AUTHFAIL, null);
                this.disconnect("authentication failed")
            }
        }
        return false
    }, _addSysTimedHandler: function (h, g) {
        var i = new f.TimedHandler(h, g);
        i.user = false;
        this.addTimeds.push(i);
        return i
    }, _addSysHandler: function (h, k, j, l, i) {
        var g = new f.Handler(h, k, j, l, i);
        g.user = false;
        this.addHandlers.push(g);
        return g
    }, _onDisconnectTimeout: function () {
        f.info("_onDisconnectTimeout was called");
        this._proto._onDisconnectTimeout();
        this._doDisconnect();
        return false
    }, _onIdle: function () {
        var g, l, k, h;
        while (this.addTimeds.length > 0) {
            this.timedHandlers.push(this.addTimeds.pop())
        }
        while (this.removeTimeds.length > 0) {
            l = this.removeTimeds.pop();
            g = this.timedHandlers.indexOf(l);
            if (g >= 0) {
                this.timedHandlers.splice(g, 1)
            }
        }
        var j = new Date().getTime();
        h = [];
        for (g = 0; g < this.timedHandlers.length; g++) {
            l = this.timedHandlers[g];
            if (this.authenticated || !l.user) {
                k = l.lastCalled + l.period;
                if (k - j <= 0) {
                    if (l.run()) {
                        h.push(l)
                    }
                } else {
                    h.push(l)
                }
            }
        }
        this.timedHandlers = h;
        clearTimeout(this._idleTimeout);
        this._proto._onIdle();
        if (this.connected) {
            this._idleTimeout = setTimeout(this._onIdle.bind(this), this.pollingTime)
        }
    }};
    if (e) {
        e(f, a, c, b, d)
    }
    f.SASLMechanism = function (h, g, i) {
        this.name = h;
        this.isClientFirst = g;
        this.priority = i
    };
    f.SASLMechanism.prototype = {test: function (g) {
        return true
    }, onStart: function (g) {
        this._connection = g
    }, onChallenge: function (h, g) {
        throw new Error("You should implement challenge handling!")
    }, onFailure: function () {
        this._connection = null
    }, onSuccess: function () {
        this._connection = null
    }};
    f.SASLAnonymous = function () {
    };
    f.SASLAnonymous.prototype = new f.SASLMechanism("ANONYMOUS", false, 10);
    f.SASLAnonymous.test = function (g) {
        return g.authcid === null
    };
    f.Connection.prototype.mechanisms[f.SASLAnonymous.prototype.name] = f.SASLAnonymous;
    f.SASLPlain = function () {
    };
    f.SASLPlain.prototype = new f.SASLMechanism("PLAIN", true, 20);
    f.SASLPlain.test = function (g) {
        return g.authcid !== null
    };
    f.SASLPlain.prototype.onChallenge = function (h) {
        var g = h.authzid;
        g = g + "\u0000";
        g = g + h.authcid;
        g = g + "\u0000";
        g = g + h.pass;
        return g
    };
    f.Connection.prototype.mechanisms[f.SASLPlain.prototype.name] = f.SASLPlain;
    f.SASLSHA1 = function () {
    };
    f.SASLSHA1.prototype = new f.SASLMechanism("SCRAM-SHA-1", true, 40);
    f.SASLSHA1.test = function (g) {
        return g.authcid !== null
    };
    f.SASLSHA1.prototype.onChallenge = function (j, h, k) {
        var i = k || MD5.hexdigest(Math.random() * 1234567890);
        var g = "n=" + j.authcid;
        g += ",r=";
        g += i;
        j._sasl_data.cnonce = i;
        j._sasl_data["client-first-message-bare"] = g;
        g = "n,," + g;
        this.onChallenge = function (r, n) {
            var x, z, u, s, B, C, t, v;
            var o, A, p;
            var y = "c=biws,";
            var m = r._sasl_data["client-first-message-bare"] + "," + n + ",";
            var q = r._sasl_data.cnonce;
            var l = /([a-z]+)=([^,]+)(,|$)/;
            while (n.match(l)) {
                var w = n.match(l);
                n = n.replace(w[0], "");
                switch (w[1]) {
                    case"r":
                        x = w[2];
                        break;
                    case"s":
                        z = w[2];
                        break;
                    case"i":
                        u = w[2];
                        break
                }
            }
            if (x.substr(0, q.length) !== q) {
                r._sasl_data = {};
                return r._sasl_failure_cb()
            }
            y += "r=" + x;
            m += y;
            z = Base64.decode(z);
            z += "\x00\x00\x00\x01";
            s = C = core_hmac_sha1(r.pass, z);
            for (t = 1; t < u; t++) {
                B = core_hmac_sha1(r.pass, binb2str(C));
                for (v = 0; v < 5; v++) {
                    s[v] ^= B[v]
                }
                C = B
            }
            s = binb2str(s);
            o = core_hmac_sha1(s, "Client Key");
            A = str_hmac_sha1(s, "Server Key");
            p = core_hmac_sha1(str_sha1(binb2str(o)), m);
            r._sasl_data["server-signature"] = b64_hmac_sha1(A, m);
            for (v = 0; v < 5; v++) {
                o[v] ^= p[v]
            }
            y += ",p=" + Base64.encode(binb2str(o));
            return y
        }.bind(this);
        return g
    };
    f.Connection.prototype.mechanisms[f.SASLSHA1.prototype.name] = f.SASLSHA1;
    f.SASLMD5 = function () {
    };
    f.SASLMD5.prototype = new f.SASLMechanism("DIGEST-MD5", false, 30);
    f.SASLMD5.test = function (g) {
        return g.authcid !== null
    };
    f.SASLMD5.prototype._quote = function (g) {
        return'"' + g.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'
    };
    f.SASLMD5.prototype.onChallenge = function (l, j, t) {
        var i = /([a-z]+)=("[^"]+"|[^,"]+)(?:,|$)/;
        var k = t || MD5.hexdigest("" + (Math.random() * 1234567890));
        var r = "";
        var n = null;
        var p = "";
        var q = "";
        var o;
        while (j.match(i)) {
            o = j.match(i);
            j = j.replace(o[0], "");
            o[2] = o[2].replace(/^"(.+)"$/, "$1");
            switch (o[1]) {
                case"realm":
                    r = o[2];
                    break;
                case"nonce":
                    p = o[2];
                    break;
                case"qop":
                    q = o[2];
                    break;
                case"host":
                    n = o[2];
                    break
            }
        }
        var m = l.servtype + "/" + l.domain;
        if (n !== null) {
            m = m + "/" + n
        }
        var g = MD5.hash(l.authcid + ":" + r + ":" + this._connection.pass) + ":" + p + ":" + k;
        var h = "AUTHENTICATE:" + m;
        var s = "";
        s += "charset=utf-8,";
        s += "username=" + this._quote(l.authcid) + ",";
        s += "realm=" + this._quote(r) + ",";
        s += "nonce=" + this._quote(p) + ",";
        s += "nc=00000001,";
        s += "cnonce=" + this._quote(k) + ",";
        s += "digest-uri=" + this._quote(m) + ",";
        s += "response=" + MD5.hexdigest(MD5.hexdigest(g) + ":" + p + ":00000001:" + k + ":auth:" + MD5.hexdigest(h)) + ",";
        s += "qop=auth";
        this.onChallenge = function () {
            return""
        }.bind(this);
        return s
    };
    f.Connection.prototype.mechanisms[f.SASLMD5.prototype.name] = f.SASLMD5
})(function () {
    window.Strophe = arguments[0];
    window.$build = arguments[1];
    window.$msg = arguments[2];
    window.$iq = arguments[3];
    window.$pres = arguments[4]
});
Strophe.Request = function (a, b, c, d) {
    this.id = ++Strophe._requestId;
    this.xmlData = a;
    this.data = Strophe.serialize(a);
    this.origFunc = b;
    this.func = b;
    this.rid = c;
    this.date = NaN;
    this.sends = d || 0;
    this.abort = false;
    this.dead = null;
    this.age = function () {
        if (!this.date) {
            return 0
        }
        var e = new Date();
        return(e - this.date) / 1000
    };
    this.timeDead = function () {
        if (!this.dead) {
            return 0
        }
        var e = new Date();
        return(e - this.dead) / 1000
    };
    this.xhr = this._newXHR()
};
Strophe.Request.prototype = {getResponse: function () {
    var a = null;
    if (this.xhr.responseXML && this.xhr.responseXML.documentElement) {
        a = this.xhr.responseXML.documentElement;
        if (a.tagName == "parsererror") {
            Strophe.error("invalid response received");
            Strophe.error("responseText: " + this.xhr.responseText);
            Strophe.error("responseXML: " + Strophe.serialize(this.xhr.responseXML));
            throw"parsererror"
        }
    } else {
        if (this.xhr.responseText) {
            Strophe.error("invalid response received");
            Strophe.error("responseText: " + this.xhr.responseText);
            Strophe.error("responseXML: " + Strophe.serialize(this.xhr.responseXML))
        }
    }
    return a
}, _newXHR: function () {
    var a = null;
    if (window.XMLHttpRequest) {
        a = new XMLHttpRequest();
        if (a.overrideMimeType) {
            a.overrideMimeType("text/xml")
        }
    } else {
        if (window.ActiveXObject) {
            a = new ActiveXObject("Microsoft.XMLHTTP")
        }
    }
    a.onreadystatechange = this.func.bind(null, this);
    return a
}};
Strophe.Bosh = function (a) {
    this._conn = a;
    this.rid = Math.floor(Math.random() * 4294967295);
    this.sid = null;
    this.hold = 1;
    this.wait = 60;
    this.window = 5;
    this._requests = []
};
Strophe.Bosh.prototype = {strip: null, _buildBody: function () {
    var a = $build("body", {rid: this.rid++, xmlns: Strophe.NS.HTTPBIND});
    if (this.sid !== null) {
        a.attrs({sid: this.sid})
    }
    return a
}, _reset: function () {
    this.rid = Math.floor(Math.random() * 4294967295);
    this.sid = null
}, _connect: function (e, c, d) {
    this.wait = e || this.wait;
    this.hold = c || this.hold;
    var b = this._buildBody().attrs({to: this._conn.domain, "xml:lang": "en", wait: this.wait, hold: this.hold, inactivity: this._conn.inactivity, content: "text/xml; charset=utf-8", ver: "1.6", "xmpp:version": "1.0", "xmlns:xmpp": Strophe.NS.BOSH});
    if (d) {
        b.attrs({route: d})
    }
    var a = this._conn._connect_cb;
    this._requests.push(new Strophe.Request(b.tree(), this._onRequestStateChange.bind(this, a.bind(this._conn)), b.tree().getAttribute("rid")));
    this._throttledRequestHandler()
}, _attach: function (c, e, d, a, f, b, g) {
    this._conn.jid = c;
    this.sid = e;
    this.rid = d;
    this._conn.connect_callback = a;
    this._conn.domain = Strophe.getDomainFromJid(this._conn.jid);
    this._conn.authenticated = true;
    this._conn.connected = true;
    this.wait = f || this.wait;
    this.hold = b || this.hold;
    this.window = g || this.window;
    this._conn._changeConnectStatus(Strophe.Status.ATTACHED, null)
}, _connect_cb: function (a) {
    var e = a.getAttribute("type");
    var b, c;
    if (e !== null && e == "terminate") {
        Strophe.error("BOSH-Connection failed: " + b);
        b = a.getAttribute("condition");
        c = a.getElementsByTagName("conflict");
        if (b !== null) {
            if (b == "remote-stream-error" && c.length > 0) {
                b = "conflict"
            }
            this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, b)
        } else {
            this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, "unknown")
        }
        this._conn._doDisconnect();
        return Strophe.Status.CONNFAIL
    }
    if (!this.sid) {
        this.sid = a.getAttribute("sid")
    }
    var g = a.getAttribute("requests");
    if (g) {
        this.window = parseInt(g, 10)
    }
    var d = a.getAttribute("hold");
    if (d) {
        this.hold = parseInt(d, 10)
    }
    var f = a.getAttribute("wait");
    if (f) {
        this.wait = parseInt(f, 10)
    }
}, _disconnect: function (a) {
    this._sendTerminate(a)
}, _doDisconnect: function () {
    this.sid = null;
    this.rid = Math.floor(Math.random() * 4294967295)
}, _emptyQueue: function () {
    return this._requests.length === 0
}, _hitError: function (a) {
    this.errors++;
    Strophe.warn("request errored, status: " + a + ", number of errors: " + this.errors);
    if (this.errors > 4) {
        this._onDisconnectTimeout()
    }
}, _no_auth_received: function (a) {
    if (a) {
        a = a.bind(this._conn)
    } else {
        a = this._conn._connect_cb.bind(this._conn)
    }
    var b = this._buildBody();
    this._requests.push(new Strophe.Request(b.tree(), this._onRequestStateChange.bind(this, a.bind(this._conn)), b.tree().getAttribute("rid")));
    this._throttledRequestHandler()
}, _onDisconnectTimeout: function () {
    var a;
    while (this._requests.length > 0) {
        a = this._requests.pop();
        a.abort = true;
        a.xhr.abort();
        a.xhr.onreadystatechange = function () {
        }
    }
}, _onIdle: function () {
    var b = this._conn._data;
    if (this._conn.authenticated && this._requests.length === 0 && b.length === 0 && !this._conn.disconnecting) {
        Strophe.info("no requests during idle cycle, sending blank request");
        b.push(null)
    }
    if (this._requests.length < 2 && b.length > 0 && !this._conn.paused) {
        var a = this._buildBody();
        for (var c = 0; c < b.length; c++) {
            if (b[c] !== null) {
                if (b[c] === "restart") {
                    a.attrs({to: this._conn.domain, "xml:lang": "en", "xmpp:restart": "true", "xmlns:xmpp": Strophe.NS.BOSH})
                } else {
                    a.cnode(b[c]).up()
                }
            }
        }
        delete this._conn._data;
        this._conn._data = [];
        this._requests.push(new Strophe.Request(a.tree(), this._onRequestStateChange.bind(this, this._conn._dataRecv.bind(this._conn)), a.tree().getAttribute("rid")));
        this._processRequest(this._requests.length - 1)
    }
    if (this._requests.length > 0) {
        var d = this._requests[0].age();
        if (this._requests[0].dead !== null) {
            if (this._requests[0].timeDead() > Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait)) {
                this._throttledRequestHandler()
            }
        }
        if (d > Math.floor(Strophe.TIMEOUT * this.wait)) {
            Strophe.warn("Request " + this._requests[0].id + " timed out, over " + Math.floor(Strophe.TIMEOUT * this.wait) + " seconds since last activity");
            this._throttledRequestHandler()
        }
    }
}, _onRequestStateChange: function (b, c) {
    Strophe.debug("request id " + c.id + "." + c.sends + " state changed to " + c.xhr.readyState);
    if (c.abort) {
        c.abort = false;
        return
    }
    var g;
    if (c.xhr.readyState == 4) {
        g = 0;
        try {
            g = c.xhr.status
        } catch (a) {
        }
        if (typeof(g) == "undefined") {
            g = 0
        }
        if (this.disconnecting) {
            if (g >= 400) {
                this._hitError(g);
                return
            }
        }
        var d = (this._requests[0] == c);
        var f = (this._requests[1] == c);
        if ((g > 0 && g < 500) || c.sends > 5) {
            this._removeRequest(c);
            Strophe.debug("request id " + c.id + " should now be removed")
        }
        if (g == 200) {
            if (f || (d && this._requests.length > 0 && this._requests[0].age() > Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait))) {
                this._restartRequest(0)
            }
            Strophe.debug("request id " + c.id + "." + c.sends + " got 200");
            b(c);
            this.errors = 0
        } else {
            Strophe.error("request id " + c.id + "." + c.sends + " error " + g + " happened");
            if (g === 0 || (g >= 400 && g < 600) || g >= 12000) {
                this._hitError(g);
                if (g >= 400 && g < 500) {
                    this._conn._changeConnectStatus(Strophe.Status.DISCONNECTING, null);
                    this._conn._doDisconnect()
                }
            }
        }
        if (!((g > 0 && g < 500) || c.sends > 5)) {
            this._throttledRequestHandler()
        }
    }
}, _processRequest: function (d) {
    var l = this;
    var g = this._requests[d];
    var h = -1;
    try {
        if (g.xhr.readyState == 4) {
            h = g.xhr.status
        }
    } catch (b) {
        Strophe.error("caught an error in _requests[" + d + "], reqStatus: " + h)
    }
    if (typeof(h) == "undefined") {
        h = -1
    }
    if (g.sends > this.maxRetries) {
        this._onDisconnectTimeout();
        return
    }
    var n = g.age();
    var f = (!isNaN(n) && n > Math.floor(Strophe.TIMEOUT * this.wait));
    var k = (g.dead !== null && g.timeDead() > Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait));
    var j = (g.xhr.readyState == 4 && (h < 1 || h >= 500));
    if (f || k || j) {
        if (k) {
            Strophe.error("Request " + this._requests[d].id + " timed out (secondary), restarting")
        }
        g.abort = true;
        g.xhr.abort();
        g.xhr.onreadystatechange = function () {
        };
        this._requests[d] = new Strophe.Request(g.xmlData, g.origFunc, g.rid, g.sends);
        g = this._requests[d]
    }
    if (g.xhr.readyState === 0) {
        Strophe.debug("request id " + g.id + "." + g.sends + " posting");
        try {
            g.xhr.open("POST", this._conn.service, this._conn.options.sync ? false : true)
        } catch (c) {
            Strophe.error("XHR open failed.");
            if (!this._conn.connected) {
                this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, "bad-service")
            }
            this._conn.disconnect();
            return
        }
        var m = function () {
            g.date = new Date();
            if (l._conn.options.customHeaders) {
                var i = l._conn.options.customHeaders;
                for (var e in i) {
                    if (i.hasOwnProperty(e)) {
                        g.xhr.setRequestHeader(e, i[e])
                    }
                }
            }
            g.xhr.send(g.data)
        };
        if (g.sends > 1) {
            var a = Math.min(Math.floor(Strophe.TIMEOUT * this.wait), Math.pow(g.sends, 3)) * 1000;
            setTimeout(m, a)
        } else {
            m()
        }
        g.sends++;
        if (this._conn.xmlOutput !== Strophe.Connection.prototype.xmlOutput) {
            if (g.xmlData.nodeName === this.strip && g.xmlData.childNodes.length) {
                this._conn.xmlOutput(g.xmlData.childNodes[0])
            } else {
                this._conn.xmlOutput(g.xmlData)
            }
        }
        if (this._conn.rawOutput !== Strophe.Connection.prototype.rawOutput) {
            this._conn.rawOutput(g.data)
        }
    } else {
        Strophe.debug("_processRequest: " + (d === 0 ? "first" : "second") + " request has readyState of " + g.xhr.readyState)
    }
}, _removeRequest: function (b) {
    Strophe.debug("removing request");
    var a;
    for (a = this._requests.length - 1; a >= 0; a--) {
        if (b == this._requests[a]) {
            this._requests.splice(a, 1)
        }
    }
    b.xhr.onreadystatechange = function () {
    };
    this._throttledRequestHandler()
}, _restartRequest: function (a) {
    var b = this._requests[a];
    if (b.dead === null) {
        b.dead = new Date()
    }
    this._processRequest(a)
}, _reqToData: function (b) {
    try {
        return b.getResponse()
    } catch (a) {
        if (a != "parsererror") {
            throw a
        }
        this._conn.disconnect("strophe-parsererror")
    }
}, _sendTerminate: function (b) {
    Strophe.info("_sendTerminate was called");
    var a = this._buildBody().attrs({type: "terminate"});
    if (b) {
        a.cnode(b.tree())
    }
    var c = new Strophe.Request(a.tree(), this._onRequestStateChange.bind(this, this._conn._dataRecv.bind(this._conn)), a.tree().getAttribute("rid"));
    this._requests.push(c);
    this._throttledRequestHandler()
}, _send: function () {
    clearTimeout(this._conn._idleTimeout);
    this._throttledRequestHandler();
    this._conn._idleTimeout = setTimeout(this._conn._onIdle.bind(this._conn), this._conn.pollingTime)
}, _sendRestart: function () {
    this._throttledRequestHandler();
    clearTimeout(this._conn._idleTimeout)
}, _throttledRequestHandler: function () {
    if (!this._requests) {
        Strophe.debug("_throttledRequestHandler called with undefined requests")
    } else {
        Strophe.debug("_throttledRequestHandler called with " + this._requests.length + " requests")
    }
    if (!this._requests || this._requests.length === 0) {
        return
    }
    if (this._requests.length > 0) {
        this._processRequest(0)
    }
    if (this._requests.length > 1 && Math.abs(this._requests[0].rid - this._requests[1].rid) < this.window) {
        this._processRequest(1)
    }
}};
Strophe.Websocket = function (a) {
    this._conn = a;
    this.strip = "stream:stream";
    var c = a.service;
    if (c.indexOf("ws:") !== 0 && c.indexOf("wss:") !== 0) {
        var b = "";
        if (a.options.protocol === "ws" && window.location.protocol !== "https:") {
            b += "ws"
        } else {
            b += "wss"
        }
        b += "://" + window.location.host;
        if (c.indexOf("/") !== 0) {
            b += window.location.pathname + c
        } else {
            b += c
        }
        a.service = b
    }
};
Strophe.Websocket.prototype = {_buildStream: function () {
    return $build("stream:stream", {to: this._conn.domain, xmlns: Strophe.NS.CLIENT, "xmlns:stream": Strophe.NS.STREAM, version: "1.0"})
}, _check_streamerror: function (a, c) {
    var g = a.getElementsByTagName("stream:error");
    if (g.length === 0) {
        return false
    }
    var f = g[0];
    var b = "";
    var l = "";
    var k = "urn:ietf:params:xml:ns:xmpp-streams";
    for (var j = 0; j < f.childNodes.length; j++) {
        var d = f.childNodes[j];
        if (d.getAttribute("xmlns") !== k) {
            break
        }
        if (d.nodeName === "text") {
            l = d.textContent
        } else {
            b = d.nodeName
        }
    }
    var h = "WebSocket stream error: ";
    if (b) {
        h += b
    } else {
        h += "unknown"
    }
    if (l) {
        h += " - " + b
    }
    Strophe.error(h);
    this._conn._changeConnectStatus(c, b);
    this._conn._doDisconnect();
    return true
}, _reset: function () {
    return
}, _connect: function () {
    this._closeSocket();
    this.socket = new WebSocket(this._conn.service, "xmpp");
    this.socket.onopen = this._onOpen.bind(this);
    this.socket.onerror = this._onError.bind(this);
    this.socket.onclose = this._onClose.bind(this);
    this.socket.onmessage = this._connect_cb_wrapper.bind(this)
}, _connect_cb: function (a) {
    var b = this._check_streamerror(a, Strophe.Status.CONNFAIL);
    if (b) {
        return Strophe.Status.CONNFAIL
    }
}, _handleStreamStart: function (b) {
    var a = false;
    var c = b.getAttribute("xmlns");
    if (typeof c !== "string") {
        a = "Missing xmlns in stream:stream"
    } else {
        if (c !== Strophe.NS.CLIENT) {
            a = "Wrong xmlns in stream:stream: " + c
        }
    }
    var d = b.namespaceURI;
    if (typeof d !== "string") {
        a = "Missing xmlns:stream in stream:stream"
    } else {
        if (d !== Strophe.NS.STREAM) {
            a = "Wrong xmlns:stream in stream:stream: " + d
        }
    }
    var e = b.getAttribute("version");
    if (typeof e !== "string") {
        a = "Missing version in stream:stream"
    } else {
        if (e !== "1.0") {
            a = "Wrong version in stream:stream: " + e
        }
    }
    if (a) {
        this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, a);
        this._conn._doDisconnect();
        return false
    }
    return true
}, _connect_cb_wrapper: function (c) {
    if (c.data.indexOf("<stream:stream ") === 0 || c.data.indexOf("<?xml") === 0) {
        var a = c.data.replace(/^(<\?.*?\?>\s*)*/, "");
        if (a === "") {
            return
        }
        a = c.data.replace(/<stream:stream (.*[^\/])>/, "<stream:stream $1/>");
        var d = new DOMParser().parseFromString(a, "text/xml").documentElement;
        this._conn.xmlInput(d);
        this._conn.rawInput(c.data);
        if (this._handleStreamStart(d)) {
            this._connect_cb(d);
            this.streamStart = c.data.replace(/^<stream:(.*)\/>$/, "<stream:$1>")
        }
    } else {
        if (c.data === "</stream:stream>") {
            this._conn.rawInput(c.data);
            this._conn.xmlInput(document.createElement("stream:stream"));
            this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, "Received closing stream");
            this._conn._doDisconnect();
            return
        } else {
            var e = this._streamWrap(c.data);
            var b = new DOMParser().parseFromString(e, "text/xml").documentElement;
            this.socket.onmessage = this._onMessage.bind(this);
            this._conn._connect_cb(b, null, c.data)
        }
    }
}, _disconnect: function (c) {
    if (this.socket.readyState !== WebSocket.CLOSED) {
        if (c) {
            this._conn.send(c)
        }
        var a = "</stream:stream>";
        this._conn.xmlOutput(document.createElement("stream:stream"));
        this._conn.rawOutput(a);
        try {
            this.socket.send(a)
        } catch (b) {
            Strophe.info("Couldn't send closing stream tag.")
        }
    }
    this._conn._doDisconnect()
}, _doDisconnect: function () {
    Strophe.info("WebSockets _doDisconnect was called");
    this._closeSocket()
}, _streamWrap: function (a) {
    return this.streamStart + a + "</stream:stream>"
}, _closeSocket: function () {
    if (this.socket) {
        try {
            this.socket.close()
        } catch (a) {
        }
    }
    this.socket = null
}, _emptyQueue: function () {
    return true
}, _onClose: function () {
    if (this._conn.connected && !this._conn.disconnecting) {
        Strophe.error("Websocket closed unexcectedly");
        this._conn._doDisconnect()
    } else {
        Strophe.info("Websocket closed")
    }
}, _no_auth_received: function (a) {
    Strophe.error("Server did not send any auth methods");
    this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, "Server did not send any auth methods");
    if (a) {
        a = a.bind(this._conn);
        a()
    }
    this._conn._doDisconnect()
}, _onDisconnectTimeout: function () {
}, _onError: function (a) {
    Strophe.error("Websocket error " + a);
    this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, "The WebSocket connection could not be established was disconnected.");
    this._disconnect()
}, _onIdle: function () {
    var a = this._conn._data;
    if (a.length > 0 && !this._conn.paused) {
        for (var b = 0; b < a.length; b++) {
            if (a[b] !== null) {
                var d, c;
                if (a[b] === "restart") {
                    d = this._buildStream();
                    c = this._removeClosingTag(d);
                    d = d.tree()
                } else {
                    d = a[b];
                    c = Strophe.serialize(d)
                }
                this._conn.xmlOutput(d);
                this._conn.rawOutput(c);
                this.socket.send(c)
            }
        }
        this._conn._data = []
    }
}, _onMessage: function (d) {
    var c, b;
    if (d.data === "</stream:stream>") {
        var a = "</stream:stream>";
        this._conn.rawInput(a);
        this._conn.xmlInput(document.createElement("stream:stream"));
        if (!this._conn.disconnecting) {
            this._conn._doDisconnect()
        }
        return
    } else {
        if (d.data.search("<stream:stream ") === 0) {
            b = d.data.replace(/<stream:stream (.*[^\/])>/, "<stream:stream $1/>");
            c = new DOMParser().parseFromString(b, "text/xml").documentElement;
            if (!this._handleStreamStart(c)) {
                return
            }
        } else {
            b = this._streamWrap(d.data);
            c = new DOMParser().parseFromString(b, "text/xml").documentElement
        }
    }
    if (this._check_streamerror(c, Strophe.Status.ERROR)) {
        return
    }
    if (this._conn.disconnecting && c.firstChild.nodeName === "presence" && c.firstChild.getAttribute("type") === "unavailable") {
        this._conn.xmlInput(c);
        this._conn.rawInput(Strophe.serialize(c));
        return
    }
    this._conn._dataRecv(c, d.data)
}, _onOpen: function () {
    Strophe.info("Websocket open");
    var a = this._buildStream();
    this._conn.xmlOutput(a.tree());
    var b = this._removeClosingTag(a);
    this._conn.rawOutput(b);
    this.socket.send(b)
}, _removeClosingTag: function (a) {
    var b = Strophe.serialize(a);
    b = b.replace(/<(stream:stream .*[^\/])\/>$/, "<$1>");
    return b
}, _reqToData: function (a) {
    return a
}, _send: function () {
    this._conn.flush()
}, _sendRestart: function () {
    clearTimeout(this._conn._idleTimeout);
    this._conn._onIdle.bind(this._conn)()
}};
if (typeof JSON !== "object") {
    JSON = {}
}
(function () {
    function f(n) {
        return n < 10 ? "0" + n : n
    }

    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
            return this.valueOf()
        }
    }
    var cx, escapable, gap, indent, meta, rep;

    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
    }

    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
            case"string":
                return quote(value);
            case"number":
                return isFinite(value) ? String(value) : "null";
            case"boolean":
            case"null":
                return String(value);
            case"object":
                if (!value) {
                    return"null"
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null"
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v
        }
    }

    if (typeof JSON.stringify !== "function") {
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else {
                if (typeof space === "string") {
                    indent = space
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {"": value})
        }
    }
    if (typeof JSON.parse !== "function") {
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return"\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({"": j}, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}());
if (typeof jQuery == "undefined") {
    alert("need jquery")
}
if (typeof Strophe == "undefined") {
    alert("need Strophe")
} else {
    (function ($) {
        if (typeof Easemob == "undefined") {
            Easemob = {}
        }
        if (typeof Easemob.im == "undefined") {
            Easemob.im = {}
        }
        if (typeof Easemob.im.Connection !== "undefined") {
            return
        }
        var innerBase64 = (function () {
            var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var obj = {encode: function (input) {
                var output = "";
                var chr1, chr2, chr3;
                var enc1, enc2, enc3, enc4;
                var i = 0;
                do {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);
                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;
                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64
                    } else {
                        if (isNaN(chr3)) {
                            enc4 = 64
                        }
                    }
                    output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4)
                } while (i < input.length);
                return output
            }, byteEncode: function (bytes) {
                var output = "";
                var chr1, chr2, chr3;
                var enc1, enc2, enc3, enc4;
                var i = 0;
                do {
                    chr1 = bytes[i++];
                    chr2 = bytes[i++];
                    chr3 = bytes[i++];
                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;
                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64
                    } else {
                        if (isNaN(chr3)) {
                            enc4 = 64
                        }
                    }
                    output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4)
                } while (i < bytes.length);
                return output
            }, decode: function (input) {
                var output = "";
                var chr1, chr2, chr3;
                var enc1, enc2, enc3, enc4;
                var i = 0;
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                do {
                    enc1 = keyStr.indexOf(input.charAt(i++));
                    enc2 = keyStr.indexOf(input.charAt(i++));
                    enc3 = keyStr.indexOf(input.charAt(i++));
                    enc4 = keyStr.indexOf(input.charAt(i++));
                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;
                    output = output + String.fromCharCode(chr1);
                    if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2)
                    }
                    if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3)
                    }
                } while (i < input.length);
                return output
            }};
            return obj
        })();
        var emptyFn = function () {
        };
        var tempIndex = 0;
        EASEMOB_IM_CONNCTION_USER_NOT_ASSIGN_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_OPEN_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_AUTH_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_OPEN_USERGRID_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_ATTACH_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_ATTACH_USERGRID_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_REOPEN_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_SERVER_CLOSE_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_SERVER_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_IQ_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_PING_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_GETROSTER_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_CROSSDOMAIN_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_LISTENING_OUTOF_MAXRETRIES = tempIndex++;
        EASEMOB_IM_CONNCTION_RECEIVEMSG_CONTENTERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_JOINROOM_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_GETROOM_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_GETROOMINFO_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_GETROOMMEMBER_ERROR = tempIndex++;
        EASEMOB_IM_CONNCTION_GETROOMOCCUPANTS_ERROR = tempIndex++;
        EASEMOB_IM_UPLOADFILE_BROWSER_ERROR = tempIndex++;
        EASEMOB_IM_UPLOADFILE_ERROR = tempIndex++;
        EASEMOB_IM_UPLOADFILE_NO_LOGIN = tempIndex++;
        EASEMOB_IM_UPLOADFILE_NO_FILE = tempIndex++;
        EASEMOB_IM_DOWNLOADFILE_ERROR = tempIndex++;
        EASEMOB_IM_DOWNLOADFILE_NO_LOGIN = tempIndex++;
        EASEMOB_IM_DOWNLOADFILE_BROWSER_ERROR = tempIndex++;
        tempIndex = 0;
        EASEMOB_IM_MESSAGE_REC_TEXT = tempIndex++;
        EASEMOB_IM_MESSAGE_REC_EMOTION = tempIndex++;
        EASEMOB_IM_MESSAGE_REC_PHOTO = tempIndex++;
        EASEMOB_IM_MESSAGE_REC_AUDIO = tempIndex++;
        EASEMOB_IM_MESSAGE_REC_AUDIO_FILE = tempIndex++;
        EASEMOB_IM_MESSAGE_REC_VEDIO = tempIndex++;
        EASEMOB_IM_MESSAGE_REC_VEDIO_FILE = tempIndex++;
        EASEMOB_IM_MESSAGE_REC_FILE = tempIndex++;
        EASEMOB_IM_MESSAGE_SED_TEXT = tempIndex++;
        EASEMOB_IM_MESSAGE_SED_EMOTION = tempIndex++;
        EASEMOB_IM_MESSAGE_SED_PHOTO = tempIndex++;
        EASEMOB_IM_MESSAGE_SED_AUDIO = tempIndex++;
        EASEMOB_IM_MESSAGE_SED_AUDIO_FILE = tempIndex++;
        EASEMOB_IM_MESSAGE_SED_VEDIO = tempIndex++;
        EASEMOB_IM_MESSAGE_SED_VEDIO_FILE = tempIndex++;
        EASEMOB_IM_MESSAGE_SED_FILE = tempIndex++;
        var emotionPicData = {"[):]": "data:image/png;base64,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", "[:D]": "data:image/png;base64,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", "[;)]": "data:image/png;base64,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", "[:-o]": "data:image/png;base64,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", "[:p]": "data:image/png;base64,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", "[(H)]": "data:image/png;base64,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", "[:@]": "data:image/png;base64,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", "[:s]": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAGVElEQVRYw+WXS2wb1xWGPz6HIiVxKJOmZMWJZNiS3biW6keDoIHLFpUMdxPBQZA2gOt2E2RlpEgAdulFN14UsFdFu6kSAV60KKCkbVKoQiG3SeMgiRW6tmMnlCOVepGSSPEx4pAczu1iRiRHpAwnza4DECKvztz/v/895z/3wv/7Y/sywVOXh54AxszPMCDvCPnE/EyORmNvfm0Epi4PfRe4BES2x+R9HU1xar6Emi9v/9wErgBXRqOx7FciMHV5yA+MA2NOt4NQf4Cew0ECvZ3NwUIghKCYLbK5lCdxO0UhrW4T+eluitgeAj4ETAJ9+4+F6T/Vi0tytg42wdF10HWE+Tezkufeu8uoSgVTiZ8/EgETfMbpdsjHzh5qvWILuG6Cixo4wiCiqRXiH6VY/SIPMD4ajf2s8XXHLol2o32PVz4+doSOkO8RwXWELkCvGuPmmN0Ge/Z50cpV8unS8PmRbiamk9d3JXB+pHvS6XYcPj52hLZOCYBkIs/NmQTxW2sABPZ66yDCKntqSWH2vSRzn2ZB6MiyC3SdrrCEWqigZCuR8yPdMxPTyQUA547VXwAix84eqoEvxjf551tztZjUYgElW+boU2GL1Og6iw9yvDe1XItdWymyuaYyfNKP0HUGj8sUNssoOW0c6Aew7xDgUs+gNctvziRwSe2cfekaz178E4HwALdvrKBkVcvK0XVm/5XCJbXzg5/8phb7+b0CSq5Sixkc7gToMxdbJ2AO9PWf6q2BJxN5lFyZE2deQ/J2884bb1AoHgTgiztpy/6nlhS2Chq64wj/eGua9eUNTr/wKwDm55QaWV+7nb29EqavWLZgLNgv16Q35M4DsP9whKuvvMyH028DMHJuP5n1oqXsUstbALwz8UeKisZffvdrxmcXCIQH2MzMW6ojvM9FaqnUN3V5aKhxC8ZC/YGWye72dKDk62a2VdAoq5p1C4QAoKhoRkw+B4DL00G5olvI+mU7DmPpEXtD3dMR9FqAAyHjd3r1PpFzL+Lt6MS/J0Cwu43AHsmy//6AC4AjJwYAeP5iFIDM6n3kTkdTvvhlR53AdlPpCPosNS4HPQD8+/pviTz3IuOzC7x69ZcAhLo9llWF9hoEvn/uGX4fz/D8xV9w78Y1KqUCoaAdoVcNj6jlgg1A3s6Bvp0GgxD4OpwMDAX5LDbD315/iXa5hwexPyN3uel93FtfldBxO+HgoJf4fWusv9NOT9jRULLCsmXORgUawbcnPnoqhJItsTT/MakFkLvcRH7YYwHf/v6NJ71s5TWWF4xYf6ed099pa/ILdNFE4JOWTUXouFzwzJl9KLmyIZ3P3tLz0XXcDnj66XbK5SqVUhWvB8tcFsveQcDI4JyKx+dqegFdx+u1g8AEMzzfmEhv6oJuh8DVCN7CspWCQcAOMBqNXQfILOVasK1PUJewao5Vm8Ctca3BARTDNmYaFZjJLOUi3Qf8TS+s3Erz2V+XOXmhD6/s3DGpYOOBwvz7GXKrZdpkB137JfpOenG6aA2uCEolACYbjWh89fMMmlppqtniRonccpE7by5ZxitbGnffTvHB+BLJ+1sUsxrphRLxd3N8cG2dSlGrK2iCAyyvGA49Go3FHA1teB54Wdd0T1eP1yJhe8jNwvvr5FdUipkyLo+djQcKs39YYT2+hVOyMfg9mVMvBOk96iH9nxL5lEapUCV8wGUBV1XBnNFcr0xMJ6/XCExMJ0vnR7o9ufViJPiYD7dkr0ntcEDoUDvLt7JsJlQWZ7Mk7yloqk7X4xInfxwidEBC6AKXG3oG3SRiRbKrGge/LVksJh6Hosom8KOJ6WTJ1uJENOvxOYdPnHkMpwNLUm2lSyTv5li9W6BNdhIeaCN8yNNU40LXWbi5RS6l8c0Rb4P0gvl5o+9sH1Jtu50HfbJbHj6912gaD8voVjVuHssan1RKEDekt5wLdzuUXgDGfX4XTz7Vhcdj+3JltgM8kRAkFg3DG43GvtX4P3srAqPR2OvAmJKtbH789xSLc4WvBK6qgtt3auDjjRebR72YDJkvDkttdnqfkOgKOvBIPBR8Iy1Ip2FtrTbVK6PR2NX/5Wp2wTxC9QH42u1IHvD5bLXmpWkCRQFFgWq17i3ApdFobOHrupw+a15MI00tvMFRzRvV5MOAt5//ArvCgrz9K3rDAAAAAElFTkSuQmCC", "[:$]": "data:image/png;base64,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", "[:(]": "data:image/png;base64,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", "[:'(]": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAGrElEQVRYw8WXW0xb9x3HPz4+PjY328SYSwLGpCGFkCCWbrAusJJoY5q2MDSl0zRVKqo09aVReVqlMaloHX2ZJrGXPZSHZpvWy9ZNGZ3WrVs3cmmbZFoKhBQIKbYTE24mNsbg4Mv57+H4GBvsJF0n7Uj2/9jnf37f7+/+/8H/+TJ8ms0j/diAFqAzx2MvMNY9yPj/nMBIP98CeoGeh9juBc4CQ92D+D4TgZF+ngCGtiRny5axCldFgKq6MqxlNqxOGyazAkB4JcRmeJO78ysszS0QXd/URQwBA92DrH1qAiP9vAgMyIqJEtej+G4p2B0KJ05Wopil+2q16l9h9soUd+cDukV6wspRL+B+6sWrWS6S84C/CvRW7K+i+SuPYTIrSP8M4LkR4R9vL9LxtXKKSuS8BBzVThzVThY/ucPE3//tTsTiowaR8AqD3LJTaWM+8PrWRg4f/xxGWdtSXVfIxnqCRX8Uz0wEq92EtdR0X0sUlxbjOlzHzLRqiYuCSuDsH0YX3szrgpF+ngeGGjuaqWs5kFOoZybC1Q/uEo+plFdZOPx5O+V7LdmbhAAgsp7g4rvLhFbjSOomRYnZkIGkOzMmjBngtcBf9jW4aDh2OK9WpWUKtQeKiG+pzPs28dyI4JmJaIT2WkAIRIroxXeX2YwkcdcX0f5VB/PTXouaVBtev8CbuWJgoKCkkENfbt4F6vdscnk0QDym7npWVKyJiMXULPAr51YBcNcXUVdfyHoEKhsPcXv8es9If/KJ7kHOpQmktO+tb2tMp1bmpZglSh1KToscPGKl2l2QYXnBxnpiuyjMbuCd3UjrW2goQBaRAeB4pgX6CkoKqW6s3Z0Rl8qxFyU40W3J7ZOU1rrfEXCwqZjySiX1f+pLgBCCePgRJs+Nd470U9s9iE9P6J6K/VVZckMRmdbnj/Gdlx+juS6cAzgFnlq139q9SZFwVpoprzRTXqmglBRx8mddDJ9vZu+BvbqEHgA5Vd/de/Y5s+R39bcx4bHSXBfGXpzIo/W2dmkts6whEEJgK4hhL4zx8lsNhDaMPFl5ieBisAVASjUXHNVlafm/fm8fEx4rQHrN0joNsg2uGUGkrKEBC1WAqq2hDa1m/OKdetaN1QBunQBAVvD5lgty+loH2ja5yOEGDRxVBaEihLZe89nTon5z3o2uuPygbmUriuc1uW5phGBtPsrqzQiyRaKyqQTZLKUJTnituUTb8xJ47qQX31IBoQ0TP/rubDq9EDtiIPXfR6/dxv+vYPr96xaJx5+txVqlIITgSE2QI64g126VAtDesAzxHYUovhVLu8G3XEDz/jDPnfQ+MNA+eu02C5MJap/5KbajXUSmL7HwxyHGfztH++natEvef+mvXPjYyZ+u7sNhS0KAUT0GxrSevkYoIvPk4FHa+tq3fXyfQAvMRliYTFD/whs42k8hF1qxH+1i/+lXCC9sEb4TRagqqCpCVWk/uED7wUW+9/qz/PDKC3YAKdUYvDPXVujqb+PtyxUAPHXCn5XbuQJt7vwK5V3PUOg6lOVCS1k1JY+2sXg9ou1VVURSI1FTug7A9NqBFrl1+FU9C86efuObO1JOj/rstBN6lAvB0uQ6jmOnMABGA8gGMEmgGMHe+EUNPAWsk5i7k1XSe2WAb/9teGxnIE54rHQ0rW67IAMYIQjc1Op7UXk1kkHr65lrbNWPIok0uOYGwYeT5iwc3QJ9Owmcn3Tszm2RbQEARdr+6NqbJNi49TF7XAoimUyTWLmzysXZ7JIvya3D+lF7B4E9OSsaqlZkZIt2lkne9aeBdSLr05e4tzhNaY2SNn38Xpzpq5/sSnkpF7jmAlvOiobQTGmtUJAtEssX3toGNwL3wkz96se4vlCs+T+pktiKMfbBFMlEMhRNWM488FCa1XTU7Pqeee9+3MbN3/+crYCf2s5TRFf8TP1uCMmwxCNfKkOoSeJbCcY/nGIjHAXoufHeT87JrcOjqV4QMgDIrcNBvTTq1/Gq93npG+/Q1HEEk8m4Da5mx8PUnwP4Lq+n33PWm2n6ug1ZgeDKGjPjHraiMYDe7kF+mXMukFuHn04NETqJ0Vc6fjBWZgn2yYqMq7EWV2MNsknOajYiFQ+bwTjRYByLVcJSIhEJRfDPLbLkXwUIAZ35Rrb0qTgjGL2JK9/3ZUxGZwC3bJJx1jgpLbdjKTRjL7NqcaEKopEo0cg9QoE1AgtBNsLpyegM0PdfTUY7jutPp2bDzofYHkrNhgOfeTbMMx13pizl1g8VoDUWYFQ/7T7s9R8R2ZduYFascgAAAABJRU5ErkJggg==", "[:|]": "data:image/png;base64,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", "[(a)]": "data:image/png;base64,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", "[8o|]": "data:image/png;base64,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", "[8-|]": "data:image/png;base64,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", "[+o(]": "data:image/png;base64,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", "[<o)]": "data:image/png;base64,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", "[|-)]": "data:image/png;base64,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", "[*-)]": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFdElEQVRYw82XS2xc5RXHf/fO0/O6M3Ycx4kTOygPQmMyQQZCEimDYJGyYSQkJJBaGYmqZNddlxn2XXTbqgIvKkBiM1UXLVQIU6UphBCNycM0hMR2nBi/4nl4xnfm3vsdFhmP547HiZ1mwd3cuZ/+95zfOd+Z852r8X9cpfGTR4B4/TEfPXRubKs2tEdwOAykgCQCAlD/IQAiORFGgZH44PmxxwJQGj95CsgAKRHQvB40rxctGHDpnIqJsiykZtdhGBWRTNfRL794JIDS+ElDhBGQNLqOJxJGj0bQA/4HAiuzilVYxsqXENsByIow3D30VWHTAMWrJ/oFsghJTzyKNxFH8+hb2l9xHKpzS1QX8oiQQxjuef7C2EMB8peP9wM5TdfjtaDBd7kKlYIFwMCgwcCgsaHTcsHi6rkFl75vr4/lWzOI7eRFSPUevzi2IcDSt8cNkFFN15N2bBuffXAHq6pcmv1DCZIv9bR1/q/3b7XVH37BoHh9GrGdnEBq18lvCgDrcipKMqIkGejbwfjXRayqYupGiev/6+XlX/8JXyDC9xeXmJuqrAO4em5hQ/29BUXsQB+i60lRMrL6jgtg8dKxU0rJ73zdXdh4mbxSoHCvyqXz81z76j8szJq88GoGgInL7nqqmc5D9d5QkFBvF8qR9NTnR0+tA1BKMprHg7/LID9XBWDm9lqkoajB7idfBGjscaNuNqkP9Xbi6QiglMq4AOYuPNcvSlL+7oTLcCSxj1A0xivD77D3qUEAEj0HNizCzegju7ehHEnd/PTpI96m6NOaR8ffGXOJf/mr1/j9X37rLtTZ63TvDrUF2Iw+2BVD9/twzFpabyq+tDcWboji2+93uZu5v7uM/VB/jve4u+BW9X4jhFKS0psykPQ0tVZ/0EP/YYNyYYb//u0sNbPE7MRFvvnkD/W/Vqfb4EP1CRBBRBAlBGIhlCOpRh+Y/vczYjy5B38s5Krs0Q+nKNQLbPV69pXets1oI/3Q6R4GfhFDpHFiYS6Vmc1N0FwDrJ5tzVGl3tjD9xeXmJ+q4Avq7B/qZPueUMNQ/QYIPp/Gqdf77uunK/j8OvuPGnT3daAsu6FDBLEdlJK1Tjj5WVISh/sJGOGWzrTeEUIjnfc1m1hredcsVJi5Mt2SAaGtAZD6rWlNVqEeDUjZDuLIGoAoydeKlbgvHGhxVI//Ic63BCRQLa6glOSbMzBq3ltOh7ZFmyKvZ+QxATWvmSUTUZJzA+TLace00HWtvXPgxj/nmPxiEXvl/okX3RkgmPCx/XCEnc/E2oM3100doLxYQSnJNm9B1nbsP1bmi4S7Im2diwjF2ysN5wClu1VKd6vMX11m7nKJI2/2uGuG1sxBabGCbTmgaVnXPDCePfS+x+cd7jm4A03X2myFOxoAa8Vh/lqZ6/9YxDaF/acT7DkWfSDA1Pgcds0ZGRq++ZbXPQuQsUxrOH9niXivsQkAweOFHYMdhLu3c2u0QKTbi7Id17vNAEuzZWqmjaZpmbYT0eWPD55FyHTuihOOd2wAsPb7QZG2rhfzJnN3iiBknn974t0NZ8Kxjw58jkiqc6dBJB5s6g/rDUtrVpoBmtZXyhYz0yWUI7ljv5k4uurL23aaFUmLktGF2/mkU4sQSwTXO3pAXbSu5++ZLMxWEMhpGqlNjeWX/rrPEJEsQirQ4aOzO4Q/oG8JwLYcZn+ssFKxERjV0NLH35ksbOnL6OuRJ84iZESEYIeXSNRPOOxF17W2AI4SyssWy8sW5WV71UzmxJmpdx/50+zCe3v7RSQjwvBqPfj9HnR97QAVEZQSqu6RfKTufPKxfJx++ecBQ0TSIqQFSSIMtEgmgByQBbInzkwV+LlfPwH8Jg9a3haDYQAAAABJRU5ErkJggg==", "[:-#]": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAG3ElEQVRYw8WXW2wU5xXHf7Mzszd7L76s7bUNtiEY0hQwBQQNCJaHhjRthSMFVZUi1X2plJeGqigvfSi89SWSqfJWqdBUTdJIUZGiPKAqjSM1irnFNhBjsChrGwdfMN71eq8z850+7HrttQ0BEamj/Vb6zpzvnP8535lzgf/zoz3tgdTNgyEgBnSVSDEgjhAXJIHQF3zhi6HvHEDq5sFfAt2lBYAIgCz9QKREIy4i5xF6a3Z+OfZMAFI3Dx4Gepcs1vw+XH4fmmHg8nnLfGLZKMtGZXPYqTQqly+CEXqBU3U/6E8+NYDUzYN/AE6habhCQfRgAE13PZHHnHSW/Ow89mIWkLgI3Q17Lw09MYCF4QNngR6X348RqXtixasfa2GRzMQMYjsJEWJN+y8PfSuA5I0DZ0F6jPpajHDwmSNdHIfU6D3sTD4hQqz5wJWhRwJIXH/xTaDXbKzHCFaX6fHrSSZHU0Q2+GnfHsLt1ddVNjOeYfTKQ6ycYsueGlo6AwAo22Hh9gR2Op8QkfbWQ18l1wCYH/phGxDXg9V4opEy/dIn9xm7sRxDoQYPL/2qY13ln78/XkHb+0qU9u2hYlzkLeZv3EVZzvkNsYFXASouVpScQtdxN9RWCB27kWTTzp9y/K0+tu77BcmZPLcvP1wDYPDTaUxPNcd+8zHH3+qjprGTwU+nKeQcAHSPib+5HqWke+zfXYcrADz4an+bEukx62vQdL3C9aanmt1HT+L2Bthz9CQ1jZ18M7pYoTydtEjO5Nl99CTV4Wbc3gDbD/8aK6+YHc8UE4UIvqYaXKaBcuREBQBRcgLdwAwHKgRnkhaN7Xtwe5fprdtizE5k1gAAqGnqLNM2bDtSjKvpLOI4KNtBLJuqaC2ipPvOhR2hMgClJGYE/OsGVlU4SnohyWcfvcfd4eurQlwQkaW0iFVQfPinP/LZR++t+AoUqmAjpeWu9qKUII50GwBT/XtDoqRLr/KtUW56XczEr/Lxu30MX/wCgNd/+yr+oIHYTlm5oRcBvPO744wMTBaDeupWMWhrDMSyK8Cafg/5VC7mKrm/SylB93oqrBIlRFp9zE/fZiZ+tSTMzeLcEJEWL8qykdIKhXX8AZ1oC5hm0bH/HfgHAHURo5yql/h100CUtBsl94OAy9BXWFUE0ra1itEr8+w70siDqRz1TV5Mt8a23UGksNIq2L4/SCblcORnLQD4q0227qxC1xxUoVS9lvgRlBKMkgeK7yx7+T5LAHSXsP/lOq79J4Hp1vFX6+x7qRafdy1/U7PJrhcDjAylAdi4yUPnC56S+5fKZ0mX7RTjbqUHVMmiZaTFQ8Ggi4M/rinvEUEKVsW+eHNCa5tB68bQ8jVaTqlkl8r20nlHIUr6KjxgZ3Lohr7GC+vvly1aKbjMwwqelcpLMeYUnBVXIAyKEqzFHFqVZ+2h1cpZT/BKhVR8mmtAi5DPWoiSwXItuHNhx4Av6OuqqqteXznr01YLLrJVgl4NMu+Embxv4pLFHmNFJuzLJLNd/qDvKSxdjpNHWQqQcZpI2R3cnQkyMeNmNuHCsiw6Ojp6yh4Y/eT7bSISD9RW4fWbZcGj/0qyOG2tyn7lvwpaKRRJ6UGuB35ER9Qhmatn+kGaubk5gsEgrdEwkWCWWxM6oVBouRZs+cmNMaXk3MJcGqdgI7ZN6ps89y6nKWQjGNW7GImbjMRNjMAuLl7LMjLmJi3PcfFalvvJCFPJCF8OK4arX8Hrr2PgluJhssCWaB11dXXs3+7j5Y1n2az9jVCoWKJXlWNOObZKJB+kEcvBShctb4u9xqHTH3DB3swFezOHTn/A24NZLtibqX3t97w9mGVy2zEmtx3jWmg3ZtVyF+X1esnPTxX7AVuRSFooJeeW3lcAeL57eEyUnMhmbFLJHOKoYqWbvcfs1/00aos0aovMft1PZ1inUVukcO8mnWEd38IkvoVJcvfvPLo/tAXHUXGEE4/tCa9/uPWsiPS4XS5G/pnDKTxdD3i3NYZq/h5TU1MYhkEkHGBuIc2O56M0e0d7Yj9/569nzpyRx3bFQ+9vOStCj8qBV2mUm2KpiLg1gwmArRlcTuykNaJTcDUxnqhhNgFTU1MEg0EaGhoSMzMz4Wg0+vi5YODvz70pil5NgyqPht+joWsrAciaj2HpyRUUiUVFtiAgMlgIHDqVq3u9fWJiIpZKpWL5fD7c0tJy/lsno6vvbt4pIr0ixBDwmmDq4DE1EPC6NWxHsB2wHSFvCZm8wrYFERJA74E3xk8/82x46S+bDoP0iJKesvHlBLQ8Jy7NhsC5kvLkdzodA/T/uf2wiHSJEF5OvcXGGBg88Mb42JPK+h8bsFb7XCl2sQAAAABJRU5ErkJggg==", "[:-*]": "data:image/png;base64,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", "[^o)]": "data:image/png;base64,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", "[8-)]": "data:image/png;base64,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", "[(|)]": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEUAAADuSSjuSSjuSSjuSSjuSSjuSSjuSSjuSSjuSSjuSSjuSSjuSSjvXj/ziG3zgWbxc1buUC/0ln34uaTuSSj2pIz2q5TuSSj1nYX3spzxbE70j3XvVzfyel7cxRSSAAAAHnRSTlMAL3+fv18PT6//799v/////////x///8////////+sIC8ZAAAA9ElEQVQ4y61TQYKDIAxMEcSktWrDttV2///NJaJoK3DauSUzJGQIAP+Ek6q0MvUaWtVoZXe0xhmkQnhewsvCG8L22vWSq+Q4RlThAA037pbUBRxtApxLavzh+5ohp3EPB+CwZ77GzOOD9xXBYMexwwEaQIngWRT4FmNBYHEYmaeMoJFLSo9XRiBeNXOJd5Incd8785srEbw3iE/mNn3FReGbJCZ9xOc12CYG2XhR9DwOeT4obgVeDJ3GqcADVNjeNzPO9XEvvWHx1emUWNx6two2vdr0aeAR5svA1DXCXmYFNa1PnIMtNgh/oNBA4LITxEm+4j9JsxdaKeGywAAAAABJRU5ErkJggg==", "[(u)]": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAtFBMVEUAAADuSSjuSSjuSSjuSSjuSSjuSSjuSSjuSSjuSSjuSSjuSSjuSSjmvbvuSSjvVzf0j3XxbE7pinrmvbvzgWb4uaT1nYXrbVXmvbvmvbvwZUftUDHsWT3uSSj0ln3uUC/qg3HsZkzmvbvziG3yel7rdF/mvbvuSSjnrqjmvbvmvbvmvbv2q5TtVzrvXj/np5/mvbvxc1booJbmvbvmvbvooJb2pIzqe2juSSjpkYPmtbHqg3Ert3r1AAAAPHRSTlMADz8fX39vT8//3++PD7//////j///////r///b6//////3////78v/+9fz/////8v//9/n7///5///1+U7zcrAAABPUlEQVQ4y81T21LCMBDtLaXb2FIuwRWFAgpFpUVEpej//5dJk95oRsc3z0Nmzp4zu9nNxjD+L0zLspvcIYS4daTnAYfvVJxCgatAcgIKoal4P4oGIjAcCYsDFUKhWzBmE8mv8YaXp7UBRJVwwNhU0lvEuzBs6DAzDBvmjMWSLhCX0IaoMKkyDHE10xjuGXuQbI0bp2NIYMrKS8L20fBaumiDihr9so2npNkEuMUYeIpIBdaroOnwxaRMH6IqBSyeA1IbkmKSCY13bK5CKW7s1pikI6s6hT2+0AtdOA5sp6KvePQudekYl4a3ri4dssgW3zU63wnIPuLikngqdqOzZA5kBy6cEFP5ih3kqsKZn56pW1Rx+aVMkGg32aaih7N6AR1cnuAzVZuoRf6Fe57A/uHDHEc5kF/+lPe3P/gNbKkfpYJqqEsAAAAASUVORK5CYII=", "[(S)]": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACK1BMVEUAAABjZIRjZIRjZIRjZIRjZIRjZIRrbIt7fJpjZIRjZISDhKGrrMbLzOTj5fujpL9jZIRjZISLjKnT1Ozb3PNjZIRjZITDxN3S1Ozi5Puio7/g4vvf4fpyc5JjZIRzdJLh4/vd3/rNzutjZISztM7c3vra3Pq7vdza3PPZ2/rX2fq5u9yCg6He4PrV1/nU1vm2uNugob+nqs64u+C0tttwcZKJi6+Wl758faFjZISeoL/W2PnS1Pm/weZwdJiBharMzvjKzPjIyvjHyfjFx/ixs+Joaoudnr/R0/nP0fm2ueDJy/jDxffCxPfAwvenqdqbnb7T1fnNz/i5vOaFibDExve/wfe9v/e8vvaam77O0Pifos60tuW8vve6vPazte59fqHLzfjBw/e4uva3ufaCg65ub5nDxPDGyPiho9Oho9l3eKBmZ4qEhsKanMWxs+hoaYuIibWvsO6jpeBnaItxcp+Zm+x4ea1vcJK+wPe5u/anqeBqa5GGiMmbnfOTleWQkr22uPa0tvatr+6Aga5jZISDhLyCg7yBgruEhcKSk96anPN0daapq+CytPWxs/WvsfWtr/WipOaBg7V0daBzdaBzdKCeoO2govSeoPOdn/OFh8mlp+CytPausPWsrvWqrPWoqvSnqfSlp/SkpvSipPSfofOMjtdnaYuho9+pq/ScnvOLjcOmqPSWmOx7fLSUldiho/Rpa5Fqa5J9frSKjNCPkd6IitB3ea0J8x3fAAAAuXRSTlMALz8fb7/////vn///////z3////9PD/////////9f/////9////////////////////////////+P////////////////////////////////////////////////////////////////////////////////////////////////////r/////////////////////////////////////////////////////////////////////CFNf8AAAIBSURBVDjLY2AgDTAyMTEx45JkZmFlY2PnYGPjxC7NxcbNw8vHx88uwIJNXpBNSJiPj09EiFMUm7QYK7s4HwgICYhhlRfgEAHL83NilWfggspLsGM1n4GFnRckLSkpxYpVXoyTBywtLSMrh1WBoDxIWkFGUYkNuwuUVfhA0qpq6srYQ5dNAyytqaWN3QksOjK6IGk9fQNlQUFBzJjgMoRIGxmbmJqZW7BZoitgtdLUsta3sbWzd3B0cnZxdUNXweoOlPbw9LKz83Z28fH180f2i4AgUEFAoIdnkEOwXYhLqK9fWHgEGxNcnokNqMAy0jPKwdHbOToGJB0bF8/GCA9CZTZg0LEkOCQCDQ/1TQJJJ6ekCiDcnwYyjZEt3TkDJJ0Jks7K5mSEp4GcXHDiUs4L9QHqzmcrKMwqKi5RhkSImCBnaVk5FzikKpLCKmPjqqoL2EBAQI6F1ZKLla2mtq4e4l4x5QagdEpjU3MLW6scEwtrSVt7R2dXXXd3DzTsRdl6gdJ9/RMmTpo8Zeq0tukzZs4CSnfP5oSFu2XBnLn9E+bNX7Bw0eIlS2csA0t3L2dDJA+uFSuB0qug0qtB0t2zc5CTD1fJmlWL1iJJr1vPhpq85Dinbli6ESbdPXuTMhN6yuTi3Lxlaz1Qctv2HTnKgtgSr1yrMiQkuERxZ28xdJMBvF2JRlNcrBgAAAAASUVORK5CYII=", "[(*)]": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABwlBMVEUAAAC6iS+6iS+6iS+6iS+6iS+6iS+6iS+6iS+9jzHVuUG6iS+6iS/Rsj/18Ve6iS/p3E/5+FrZwES6iS/BljTdx0fx6lS6iS/491nRsT7l1Uz381bv4U7IoDbFnTf591n49Vj38FT27FH0503z4kry3kbx2kPw1kDv0j3uzjrtyjfsxjTMnzD27lP16k/05Uzz4Ejy3EXx2ELw1D/v0DzuzDntyDbsxDPMnjD38VX16E7z40rrwzHMni/39Fb271Pz4UjtyTbsxTPrwTDMnS66iS/t41H49lj27VHy30fuzzrtyzfsxzTqvy7MnC7s4E/161D05kzz4Uny3UXw1T/v0TzuzTnqvS3Roi3q10j05Evx20Tw10Hv0z7uzzvtyzjsxzXrwzLqvy/pvCzXpyy9jjDnzUHx2ULrwjDqvi3puyvdrCu6iS/pzT7syDXrxDLqwC/qvCzpuSrotyjiryfKoDPv0T3rwjHqvi7ouCnotSfnsyXnsSTKmCrhvTjtzDjSoy7Lmy3isSnntCbnsiTbpybHmTHYqy/Ajy68iy7QnSnkriS/ji3ctDPeszDDky/WoijAkC/lvDHGly/FkyzeqSYNOZEtAAAAlnRSTlMADy9vv9//P5///x/v//9f////z////3////////////////////////////////////////////////////////////9P//////////////////////////////////////////////////+P//////////////////////////////////////////////////////+XLHICAAABkklEQVQ4y5VT5V8CURCU42455AGeBSaI3Z2gWKjY3d3d7WEXigrG/+sDQY4Dj5/7cXdmbt7ebEjIf0tEBAGIySAACiSCcwkALQigpaEgE7KI5AqpkIQSwphwIYmISIZRCLggIIphGPnfEjQoMCDaR0Km4hSS4zmjjgFvC68OOBXrnMfFJ3g7LueJTmF3abRJuuSU1LT0jMys7Jyfj3ER6rjcvPyCwqLiktKy8gqPmV+ERlupq9K76YZqr1k3Ql1jzMuvddHr6hsauY8xocgmTXNlS5XejOmtbe2Gjk7ffRFI2mXs7untK+ofGMT0oWH+PjFiZNQ8Nj4xOTU9Mzs3779vAi0sLrnoyyura4H+xzpsYPrm1vbO7t5+AIAIHRzixx0dr56cnrEWJOIDVHB+gemXV9c3tyx7B0q/tN5j+sMjgPXpmWVZG+WXpZfy1zegTDISbHaWtfPTTTnePwC5dCUUfH49W2megAOQymNMjMBi8c0Vie+B0xDROAoqn3sheTkkSEDciwxwbyZKGezSnYf+Da0FSRY6a5opAAAAAElFTkSuQmCC", "[(#)]": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAtFBMVEUAAADtMCHtMCHtMCHtMCHtMCHtMCHtMCHtMCHtMCHtMCHtMCHtMCHtMCHtMCG6iS+6iS/BeyzGcivJbSrMaSq6iS/RqirgwCboyyXDeCztMCHNZynFmSzw1iP44iK6iS/03CLTXCi6iS+6iS/s0SS9gy7TXCjOZSnNpCrBfC3ZtSjPYinVrym6iS/BlC3NZym6iS/kxibQYSi9ji7ZUSbcuyfdSyXYUya6iS/PYynVWSftMCFeFPtwAAAAPHRSTlMAP28fX78v308P/6+fj+8fb8///9//////r3//////f///D+///x+f/2//3/9P/3/f/4/////Pny+/78+blAboAAABIElEQVQ4y7VTa1ODMBAEm+cBaX20aEqxKCpirdi0WuX//y+xQKAhM44zep+S281eNrlznN+G+/+EE2t2hPQSd1nSU0OaQYkuxvoaqJHmgAZnmtoeP6TBr/eBb97DE8gZT07PzifjSp5SbhK4gIvpLLwMZ9MrCmCxK+fRIv6ORTQHbPF6HS3jOpZRwob4zW0at5He3Q9w/hDFXWSPxw/pSgxJ3iPkicd4C7pIBhhMAgBQX7LODHpa9QirhErT6PO6R1i/WGwWocZfC9ufb1TrM1UbC87FVu0O+E5tBbe8NMBbobI8U8W7ADnAicDVtfcfyee+UguAmAXKumNY0w9uaRQJSNtRzTdx/4ghtWI50j3GbbjjdVlmnQD50+CwP5/NL6lmHHJczhNXAAAAAElFTkSuQmCC", "[(R)]": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABO1BMVEUAAADtMCHtMCHtMCHtMCHtMCHtMCHtMCHtMCHtMCHtMCHtMCHtOx/ydRj2rxH50Qz16wnw7gj76Qr3ug/zgBbuRx7tMCHtMCH0jBX33gvn8QbG8Qie7AyC4xKL5hC67wri9Ab1oxLtMCHwXhvl8waY6A9b1ho1ySJIzx7V8gfy7AgxyS4lyV8byYQhyWsuyTo+zCCh6w3q8AcVyZwFydkCyuYOybUoyVNu3BYYyZD0mBTE8ggFt9kTdq4ZWpshNYMbUJUVbKgJpM0LycERf7QDwN8RyajtMCEfPonxaRkuMoZCLotQK45XKpBJLIw1MIcIyc0NksD46glXKpBXKpBXKpA8L4kdR49l2RhXKpBTKo9XKpBXKpDw7giC4xI1ySIbyYQCyuYhNYNXKpBXKpAuMoYJpM3l8wb0jBX41gnuAAAAaXRSTlMAT4+/7/+fXx+vP3//////////////D8//////////////L////////////////////////////////////////////////9///////////////28/3////x//D6+/v7+/v7+/f7+/v79O3N4bAAABdklEQVQ4y+2Q51bCQBBGF5MJqIEQGx0LZRQ0NBcLZbGiYuy9IcH2/k/gEIpHj2+g99ecvTPf7C5jfw7HkCQDgKQ4Xb9Yl9KRfYZHfvpRANXt0by6ro+NT0xSzreUKR+o/kAwFI4Q0ekZ7+wkyI4vPydDTIsnkthjPrLg9QM4B/MyuFPTpNOLS4SRQczm8rPqoMNHPpfFTGGZdymuIK4Gx0Ge690vlsohGn3dYS2Nq/l18NnvA1UrZdGg43KlKkRtY5PKrTRGUzF7iQL+eNL226JHdYfzXcyWNKhTg6wGEpih/A0xYK/MuUFL9sHBHODOJ7HQnT9oHJpHx1TUOD9BDHlAYUPgCWF6mZfp+Ni0aVB52omIntEOCbQwLnJeoXnTPGfs4tK8EuKa8wLe6DFgdfBGcIlzun+j4xm7Ne8oosyLmIzvAwPQ7YY9IQ7Ne/tjHswDIeitiHE/MEl6fGo+t1qWZbXb3Z99ab9a1lur1Wy+f0jsH5tPJc9K5e3l4mIAAAAASUVORK5CYII=", "[({)]": "data:image/png;base64,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", "[(})]": "data:image/png;base64,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", "[(k)]": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACqVBMVEUAAADuSSjuSSjjPB7hOh3gORzuSSjuSSjuSSjuSSjhOh3fORvdNhrcNBjuSSjtSCfrRibqRCTgORzfOBvdNhnbMxjZMRbXLxTuSSjvVzfrRSXpQyPnQSLlPyDgORzcNRnaMxfYMRbWLhTULBLTKhHvXT/1qZPxmIHsUjPqRSXoQyPmQCHkPiDiPB7gORzeNxrYMBXWLhPULBLSKRDQJw7OJQ3uSSjwb1LzoYvthW3oaE7pSCnoQiPkPh/iOx7gORzcNBjaMhfVLRPTKxHRKRDPJg7NJAzLIgrJIAnuSSjxgGbvjnfpcljmVjroRifoQiLmPyHjPR/hOx3dNhrbNBjZMhbXLxTRKA/PJg3LIQrJHwjHHQbuVDXwhWzsemHqWz7qSCnpRCTnQSLlPyDhOh3ZMRbVLBLTKhHMIwvKIQrIHwjGHAbEGgTCGAPuUTHvZUjub1PtWDrjPB7hOhzSKhDQJw/OJQ3KIAnIHgjCFwLAFQG/FADuSSjuTy/vaEruVjbsRyfoTC/qblbpbFXna1TmaVLkZ1HjZlDhZE/gYk3eYEzcX0rbXUnZW0jYWUfWWEXVVkTJKhXDGQTBFwK/FQC/FADuSSjvXj/2r5rynIXuiXHrY0foa1TzvrL8+vb47OfcfW/DGQPBFgL0lXzqa1HjZE7zwbj78e7rr6bIKBPDGAPBFgHuZknuhGzqdl3mRynlf2/76Ob329jWXEzCGAO/FAC/FADrRibpRCTnRSfnWT3mXkTiRCfYSzb42db75uTxwLrMNSG/FADlPyDjPB7hPiHhRireOh7QJw7OJQzURzP32dbJKBPeNxvcNRnLIgrJIAnXXEzMNCG/FADYMBXVLRPHHQbFGgW/FADRKA/PJg3NIwzKIQnEGQS/FADGHAbBFgK/FAC/FABbs/P1AAAA43RSTlMALz8PPw+f/68Pr//PD2//zw9f////zw9f////7y9//////88P////////////z///////zw+P/////////////////////88Pv///////////////////////n9//////////////////////n5////////////////+ff+/////////////////////////////////P////////////////////////////////////////718Pf+///////////y8Pf+//////////D3//////zx+///8Pb+8fv/+Pfy/fPzM30SoAAAGnSURBVDjLY2AYfoCRCcpgZmHFJs/Gzs7BCWZxcfPwYsrzsbOz8wsIAllCwiKiYuLo8hKSkuz8UtIysgxywvIKikrKKmjyqmrqGppa2jq6evryCgaGRsYmpsjyZuYWllbWNtq2dvb6Do4GTs4urm7uHnBpTk8vbx9fP/+AwCDu4JDQMCfn8Ai3yKhomDxTTGxcfEJiUnJgCtB5qWFp6eERGZlZ2Tm5EO15+QWFQOclJRcVg51nVFJallFekZ1TWVUNlK6pravnb9DUamxqbmlta+/o7Oru6e3rnzBx0uQpU6cyMEybPmPmrNmaQOfNmTsPAeYvWLho6lSQAnbJxTNnLYE4b+my5VCwYuWq1VMhCpg4+NesXbce6rwNG0Fg0+acLVUg6a3bQI7cvmPnrt17oM7bu2///gMHgc4Dyx+CevPwkaPHjoND78TJU6cPnAE7D0keCM6eg4be+QsXL0GcN/XyIZS4uHIVEnrXrkOdd/kGenTevAUOPYjzplbfwEwQt+9UZN+FOG/qPexp7j7UeVO34UqVDx6CpB8ewpNwDz169GiQ5SUAHrG6xm0Tgr0AAAAASUVORK5CYII=", "[(F)]": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACT1BMVEUAAAD3Uz70Pyf2SDH8dGf4W0j0QSjwJwnhGgXOEgu9DBH3Uz70PSTuIwXoOyv1V0XNEgu7CxK2CRS4ChOtBRfcGAfKFBDpNSLIEwbPFAjHEA64ChOtBRf3VkLEFBbmHwS+EwLWFgj4V0OzCBXjJxS9FgPgGgO9Fh74Wke3DBbLIxLdHgTlHAPTTE/7bF3MIBrHHAjwJgjjbGz7b2DIHAnsNBvsfXurBBf7cmXNFAfYKRPzOiDWLin1lZH8dmrTGAHxRzH/rqj/iH/hGgPfKxL2TzrylJHBRFL/iH/kHAHtRjG+Pk6gABz/iH/oHgD3X03LHBrjmp2pBBigABzwJAXwOB/5ZFPZHxL1p6PVanD/iH/8dmn0STPpKRLycWjldHG4ChOtBRZYngB3kRPkYT3zNxz5YU/IEA28CxFUlABmhQN6fhGPgSi4bzPLWivIShjFOQazNQKMQATNEgxWmQBVlQBSkABQjABOhwBMggBJfQBHeABFcwBDbgBBaQA+ZAA8YQBYngBXmgBVlgBAgAFGgQBJfQBIeQBEcgBDbgBBaQA+ZQBYngBYnAAPXgdLgQBJfQBHeABGdQBDcABBagBQjABNhQBKfgBHdwBDcABAaAA9YgBXmgBUlABRjQBNhgBAaAA+ZAAPXgdXmwBUlQBHdwBDcABXnABTkgBOhwBKfwBJkAFUlQBRjQBNhgBKfwBTkQBIegBEcAAPXgcPXgdWmQBIegBDbwAlYQMPXgdRjwBNhgA0YwEPXgdMggBIegBEcAAPXgcPXgcPXgcPXgeUFVsMAAAAxXRSTlMAP18vf9////+/T3////////+fPx//////////f6//////v///////////////L/////9v////v6////////////8//////99P////D3///////x////////8P7//////vL1/v////3y+P//////////+/D0//3////6/v////308P309//88vHz8/L28P/x8/Px8/H0+v/////48Pr///zw+/n//vf6+PXw+fv39/T//vT39PH///z49f79/PDz8vH2/vD/nTwCsAAAFzSURBVDjLY2AgATAyMbOwsrFzcHLhUMDNw8vHD1QgICgkLIJDgaiYODuHhKSUtAw2BbJABVJy7PIKijgUKIEUKKuoqilKqWNVoAFSoKmlraMopYtNgR5Ygb6BIVCBETYFxmAFJqYgBWbmWBRYgBRYWlkDFdjYYlNgB1Jg7wBW4IhFgRNIgbOLK0iBlJs7pgIPkAJPL4gCdW8fDAW+IAV+/mAFAYFBwVhNCAkNAykIj4jE4oaoaKCCGJCC2Lj4hERMBUnJKTypaWATFNMzsEZ3ZlZ2Tm5efkFhUTFW+ZLSsvKKyqrqmtq6+gYs8o1NzQwtrZVt7R2dXd3YDOjpBRJ9/RMmMjBMmjwFV7LsY2CYOm36jJmzZuNSMGfuvPlABQsW4lCwaPESoIKly7DJLV+xchXDotVr1q5bj13z4g3zN27avAV3ttm6Yf627Tt24slYu3Zv275nL76st2//AYa+gwTy56LNBBQcOnwEv4Ijh9GMAAAtMGlRHWiirgAAAABJRU5ErkJggg==", "[(W)]": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACLlBMVEUAAABZnwBVlwBQiwBKfwBGdgBVlgBQigBKfgBEcQBAaABTlABEcQA+ZQAPXgcPXgcPXgdPiABJfQA4bQEbYAUPXgcPXgcPXgdOiABMgwBLgAAPXgcPXgcZXgUUXgYPXgdYnQBWmABTkwBRjgBOhwBMggBKfQBCdgAyZAE+YwAPXgcPXgdYnQBVmABxggWhWwXDOAHQIgWETwQ3XAUxaAJAaAA/ZQD3VD/6iHr2blvpHQLcGAbPEwvCDg96Kg5PYAJAaQAPXgf4XUv7cmT6hnnxKQu1CRSoAxiaKgpeTQQPXgcPXgf5YE70Qim/DBDMEQy5ChKsBRf7bFz8k4j3V0L0PCK5ChPaFweoAxj7bFz9q6T6k4bSFAreGQanAxn7bl/9sar5iHrJEhDuIwWpBBj7b2H+vbjnLhmrBRdJjwFTkgBPigD8eGv8lIn2TjjcJRjzOyG5ChKuBhcTYgZOkwBTkgBPigBLgQBIegD+fnP9fnL5ZFPhIhD1Tzu9CxEtdwRTkgBLgQBHeQBEcQD+f3X8dWfrIwn2XUz3VEDNEgzADRBSkABPiQBDcABAaQD+gnj8cmTxKw36aFj7bl/REwpLgABHeAA/aAA9YQD+g3nyNRrxLA/7b2HfGQXpST7dJxrlGwPsHwL2TDfjGwTMEgzRFArZFwfhGgXqIwnvIwXlHATJEA3OEgvVFQndGAboKRP2UDvwJQcPXgfQEwvWFQndGAb2TjjzOR/xKQsPXgdPdr5LAAAAunRSTlMAP//ffw/f///fL0//z4+/fz+vz///zw8vPw8v78+Pry8/Pz8fz/+/r69PP3/v////r///798Pn///////////Px+f////////v59f//////9PH///////zz///////3//////v6///29PPz/v/////+8P/////+9vL/////9/b+///59v/////98PL8//n7//////X1/P/1/v////32//////X5//////7w9f3/////+fbx8/Lx+fT98nuUF/AAABm0lEQVQ4y2NgIB4wMjGzsOJVwcbOwcmFTwE3OwcPLx8/vwBOFYJCwiKiQCAmjk1WQlKKQVpGVFaOX1RUHl1SQVFJWUVVTV1GRkOTgUFLRlQbTYGOrp6+gaGRsaiJqRmQKyDKj26EuYWllbWNrZ29A4gnLiPqiCrv5OziClLg5u7hCeJ7iXqjKvBx9oUo8PMPCATypUW9UOSDgkNCwQrCwv0DIkAiMqiOiIyKhiiIifUPiAOJyIuiKIhPSAQrSEoGKkhhAPsDRUFqGsSKdJCCDJCIt2hmVjZCQU5uHkhBfgFQQWERSES7uKS0rLwCKl9ZVQ1SUFMLUlAHFtIWrW8oa2xqhihoafUBKmhr7wAq6OyCKtDu7mls6u0D8/onABVMnDQZpGAKA0wBA8PUab3TZ4B4M4EKZs2eA1IwlwFJAQLMm1+zYOEikILF2BUwLFm6bPmKSR0FK1fhUMCwes3ades3FGyE8TdhpAiGzVu2btu+A8YTEBXHnwXQ4gITiBFSILoTv7w2ZqJEBZsIKZAXFcCvQIaAAm1RRDgBAONoa547W9uXAAAAAElFTkSuQmCC", "[(D)]": "data:image/gif;base64,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"};
        var createStandardXHR = function () {
            try {
                return new window.XMLHttpRequest()
            } catch (e) {
                return false
            }
        };
        var createActiveXHR = function () {
            try {
                return new window.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                return false
            }
        };
        if (window.XDomainRequest) {
            XDomainRequest.prototype.oldsend = XDomainRequest.prototype.send;
            XDomainRequest.prototype.send = function () {
                XDomainRequest.prototype.oldsend.apply(this, arguments);
                this.readyState = 2
            }
        }
        var xmlrequest = function (crossDomain) {
            crossDomain = crossDomain || true;
            var temp = createStandardXHR() || createActiveXHR();
            if ("withCredentials" in temp) {
                return temp
            }
            if (!crossDomain) {
                return temp
            }
            if (window.XDomainRequest === undefined) {
                return temp
            }
            var xhr = new XDomainRequest();
            xhr.readyState = 0;
            xhr.status = 100;
            xhr.onreadystatechange = emptyFn;
            xhr.onload = function () {
                xhr.readyState = 4;
                xhr.status = 200;
                var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = "false";
                xmlDoc.loadXML(xhr.responseText);
                xhr.responseXML = xmlDoc;
                xhr.response = xhr.responseText;
                xhr.onreadystatechange()
            };
            xhr.ontimeout = xhr.onerror = function () {
                xhr.readyState = 4;
                xhr.status = 500;
                xhr.onreadystatechange()
            };
            return xhr
        };
        Strophe.Request.prototype._newXHR = function () {
            var xhr = xmlrequest(true);
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("text/xml")
            }
            xhr.onreadystatechange = this.func.bind(null, this);
            return xhr
        };
        function getIEVersion() {
            var ua = navigator.userAgent, matches, tridentMap = {"4": 8, "5": 9, "6": 10, "7": 11};
            matches = ua.match(/MSIE (\d+)/i);
            if (matches && matches[1]) {
                return +matches[1]
            }
            matches = ua.match(/Trident\/(\d+)/i);
            if (matches && matches[1]) {
                return tridentMap[matches[1]] || null
            }
            return null
        }

        var ieVersion = getIEVersion();
        var tepmxhr = xmlrequest();
        var hasSetRequestHeader = (tepmxhr.setRequestHeader || false);
        var hasOverrideMimeType = (tepmxhr.overrideMimeType || false);
        tepmxhr = null;
        var doAjaxRequest = function (options) {
            var dataType = options.dataType || "text";
            var suc = options.success || emptyFn;
            var error = options.error || emptyFn;
            var xhr = xmlrequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    var status = xhr.status || 0;
                    if (status == 200) {
                        if (dataType == "text") {
                            suc(xhr.responseText, xhr);
                            return
                        }
                        if (dataType == "json") {
                            try {
                                var json = $.parseJSON(xhr.responseText);
                                suc(json, xhr)
                            } catch (e) {
                                error(xhr.responseText, xhr, "错误的数据,无法转换为json")
                            }
                            return
                        }
                        if (dataType == "xml") {
                            if (xhr.responseXML && xhr.responseXML.documentElement) {
                                suc(xhr.responseXML.documentElement, xhr)
                            } else {
                                error(xhr.responseText, xhr, "浏览器不支持ajax返回xml对象")
                            }
                            return
                        }
                        suc(xhr.response || xhr.responseText, xhr);
                        return
                    } else {
                        if (dataType == "json") {
                            try {
                                var json = $.parseJSON(xhr.responseText);
                                error(json, xhr, "服务器返回错误信息")
                            } catch (e) {
                                error(xhr.responseText, xhr, "服务器返回错误信息")
                            }
                            return
                        }
                        if (dataType == "xml") {
                            if (xhr.responseXML && xhr.responseXML.documentElement) {
                                error(xhr.responseXML.documentElement, xhr, "服务器返回错误信息")
                            } else {
                                error(xhr.responseText, xhr, "服务器返回错误信息")
                            }
                            return
                        }
                        error(xhr.responseText, xhr, "服务器返回错误信息");
                        return
                    }
                }
                if (xhr.readyState === 0) {
                    error(xhr.responseText, xhr, "服务器异常")
                }
            };
            if (options.responseType) {
                if (xhr.responseType) {
                    xhr.responseType = options.responseType
                } else {
                    error("", xhr, "当前浏览器不支持设置响应类型");
                    return null
                }
            }
            if (options.mimeType) {
                if (hasOverrideMimeType) {
                    xhr.overrideMimeType(options.mimeType)
                } else {
                    error("", xhr, "当前浏览器不支持设置mimeType");
                    return null
                }
            }
            var type = options.type || "POST";
            xhr.open(type, options.url);
            var headers = options.headers || {};
            for (var key in headers) {
                if (hasSetRequestHeader) {
                    xhr.setRequestHeader(key, headers[key])
                } else {
                    error("", xhr, "当前浏览器不支持设置header");
                    return null
                }
            }
            var data = options.data || null;
            xhr.send(data);
            return xhr
        };
        var getFileUrlFn = function (fileInputId) {
            var uri = {url: "", filename: "", filetype: ""};
            if (window.URL && window.URL.createObjectURL) {
                var fileItems = document.getElementById(fileInputId).files;
                if (fileItems.length > 0) {
                    var u = fileItems.item(0);
                    uri.url = window.URL.createObjectURL(u);
                    uri.filename = u.name || ""
                }
            } else {
                var u = document.getElementById(fileInputId).value;
                uri.url = u;
                var pos1 = u.lastIndexOf("/");
                var pos2 = u.lastIndexOf("\\");
                var pos = Math.max(pos1, pos2);
                if (pos < 0) {
                    uri.filename = u
                } else {
                    uri.filename = u.substring(pos + 1)
                }
            }
            var index = uri.filename.lastIndexOf(".");
            if (index != -1) {
                uri.filetype = uri.filename.substring(index + 1).toLowerCase()
            }
            return uri
        };
        var isIe = false;
        if (navigator.appVersion.indexOf("MSIE") != -1) {
            isIe = true
        }
        var getFileSizeFn = function (fileInputId) {
            var file = document.getElementById(fileInputId);
            var fileSize = 0;
            if (file) {
                if (file.files) {
                    if (file.files.length > 0) {
                        fileSize = file.files[0].size
                    }
                } else {
                    if (isIe) {
                        file.select();
                        var fileobject = new ActiveXObject("Scripting.FileSystemObject");
                        var file = fileobject.GetFile(file.value);
                        fileSize = file.Size
                    }
                }
            }
            return fileSize
        };
        var hasFormData = (typeof FormData != "undefined");
        var isCanUploadFile = (hasSetRequestHeader && hasFormData);
        var uploadFn = function (options) {
            options = options || {};
            options.onFileUploadProgress = options.onFileUploadProgress || emptyFn;
            options.onFileUploadComplete = options.onFileUploadComplete || emptyFn;
            options.onFileUploadError = options.onFileUploadError || emptyFn;
            options.onFileUploadCanceled = options.onFileUploadCanceled || emptyFn;
            if (!isCanUploadFile) {
                options.onFileUploadError({type: EASEMOB_IM_UPLOADFILE_BROWSER_ERROR, msg: "当前浏览器不支持异步上传文件,请换用其他浏览器"});
                return
            }
            var acc = options.accessToken;
            if (!acc) {
                options.onFileUploadError({type: EASEMOB_IM_UPLOADFILE_NO_LOGIN, msg: "用户未登录到usergrid服务器,无法使用文件上传功能"});
                return
            }
            orgName = options.orgName || "";
            appName = options.appName || "";
            appKey = options.appKey || "";
            if (!orgName && !appName && appKey) {
                var devInfos = appKey.split("#");
                if (devInfos.length == 2) {
                    orgName = devInfos[0];
                    appName = devInfos[1]
                }
            }
            if (!orgName && !appName) {
                options.onFileUploadError({type: EASEMOB_IM_UPLOADFILE_ERROR, msg: "没有指定开发者信息"});
                return
            }
            var fileSize = getFileSizeFn(options.fileInputId);
            if (fileSize > 10485760) {
                options.onFileUploadError({type: EASEMOB_IM_UPLOADFILE_ERROR, msg: "上传文件超过服务器大小限制（10M）"});
                return
            } else {
                if (fileSize <= 0) {
                    options.onFileUploadError({type: EASEMOB_IM_UPLOADFILE_ERROR, msg: "上传文件大小为0"});
                    return
                }
            }
            var uploadUrl = "http://a1.easemob.com/" + orgName + "/" + appName + "/chatfiles";
            var xhr = xmlrequest();
            var onError = function (e) {
                options.onFileUploadError({type: EASEMOB_IM_UPLOADFILE_ERROR, msg: "上传文件失败", e: e, xhr: xhr})
            };
            if (xhr.upload) {
                xhr.upload.addEventListener("progress", options.onFileUploadProgress, false)
            }
            if (xhr.addEventListener) {
                xhr.addEventListener("abort", options.onFileUploadCanceled, false);
                xhr.addEventListener("load", function (e) {
                    try {
                        var json = $.parseJSON(xhr.responseText);
                        options.onFileUploadComplete(json)
                    } catch (e) {
                        options.onFileUploadError({type: EASEMOB_IM_UPLOADFILE_ERROR, msg: "上传文件失败,服务端返回值值不正确", e: e, data: xhr.responseText, xhr: xhr})
                    }
                }, false);
                xhr.addEventListener("error", onError, false)
            } else {
                if (xhr.onreadystatechange) {
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (ajax.status == 200) {
                                try {
                                    var json = $.parseJSON(xhr.responseText);
                                    options.onFileUploadComplete(json)
                                } catch (e) {
                                    options.onFileUploadError({type: EASEMOB_IM_UPLOADFILE_ERROR, msg: "上传文件失败,服务端返回值不正确", e: e, data: xhr.responseText, xhr: xhr})
                                }
                            } else {
                                options.onFileUploadError({type: EASEMOB_IM_UPLOADFILE_ERROR, msg: "上传文件失败,服务端返回异常", data: xhr.responseText, xhr: xhr})
                            }
                        } else {
                            xhr.abort();
                            options.onFileUploadCanceled()
                        }
                    }
                }
            }
            xhr.open("POST", uploadUrl);
            xhr.setRequestHeader("restrict-access", "true");
            xhr.setRequestHeader("Authorization", "Bearer " + acc);
            var localFile = "";
            var fileInput = document.getElementById(options.fileInputId);
            var localFile = null;
            if ("files" in fileInput) {
                localFile = fileInput.files[0]
            } else {
                localFile = fileInput.value
            }
            var formData = new FormData();
            formData.append("file", localFile);
            xhr.send(formData)
        };
        var hasBlob = (typeof Blob != "undefined");
        var isCanDownLoadFile = (hasSetRequestHeader && (hasBlob || hasOverrideMimeType));
        var downloadFn = function (options) {
            options.onFileDownloadComplete = options.onFileDownloadComplete || emptyFn;
            options.onFileDownloadError = options.onFileDownloadError || emptyFn;
            if (!isCanDownLoadFile) {
                options.onFileDownloadError({type: EASEMOB_IM_DOWNLOADFILE_BROWSER_ERROR, msg: "当前浏览器不支持异步下载文件,请换用其他浏览器"});
                return
            }
            var accessToken = options.accessToken || "";
            if (!accessToken) {
                options.onFileDownloadError({type: EASEMOB_IM_DOWNLOADFILE_NO_LOGIN, msg: "用户未登录到usergrid服务器,无法使用文件下载功能"});
                return
            }
            var onError = function (e) {
                options.onFileDownloadError({type: EASEMOB_IM_DOWNLOADFILE_ERROR, msg: "下载文件失败", xhr: xhr, e: e})
            };
            var xhr = xmlrequest();
            if ("addEventListener" in xhr) {
                xhr.addEventListener("load", function (e) {
                    options.onFileDownloadComplete(xhr.response, xhr)
                }, false);
                xhr.addEventListener("error", onError, false)
            } else {
                if ("onreadystatechange" in xhr) {
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (ajax.status == 200) {
                                options.onFileDownloadComplete(xhr.response, xhr)
                            } else {
                                options.onFileDownloadError({type: EASEMOB_IM_DOWNLOADFILE_ERROR, msg: "下载文件失败,服务端返回异常", xhr: xhr})
                            }
                        } else {
                            xhr.abort();
                            options.onFileDownloadError({type: EASEMOB_IM_DOWNLOADFILE_ERROR, msg: "错误的下载状态,退出下载", xhr: xhr})
                        }
                    }
                }
            }
            var method = options.method || "GET";
            var resType = options.responseType || "blob";
            var mimeType = options.mimeType || "text/plain; charset=x-user-defined";
            xhr.open(method, options.url);
            if (typeof Blob != "undefined") {
                xhr.responseType = resType
            } else {
                xhr.overrideMimeType(mimeType)
            }
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.setRequestHeader("Accept", "application/octet-stream");
            xhr.setRequestHeader("share-secret", options.secret);
            xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
            xhr.send(null)
        };
        var parseNameFromJidFn = function (jid, domain) {
            domain = domain || "";
            var tempstr = jid;
            var findex = tempstr.indexOf("_");
            if (findex != -1) {
                tempstr = tempstr.substring(findex + 1)
            }
            var atindex = tempstr.indexOf("@" + domain);
            if (atindex != -1) {
                tempstr = tempstr.substring(0, atindex)
            }
            return tempstr
        };
        var parseTextMessageFn = function (message) {
            var receiveMsg = message;
            var emessage = [];
            var expr = /\[[^[\]]{2,3}\]/mg;
            var emotions = receiveMsg.match(expr);
            if (!emotions || emotions.length < 1) {
                return{isemotion: false, body: [
                    {type: "txt", data: message}
                ]}
            }
            var isemotion = false;
            for (var i = 0; i < emotions.length; i++) {
                var tmsg = receiveMsg.substring(0, receiveMsg.indexOf(emotions[i]));
                if (tmsg) {
                    emessage.push({type: "txt", data: tmsg})
                }
                var emotion = emotionPicData[emotions[i]];
                if (emotion) {
                    isemotion = true;
                    emessage.push({type: "emotion", data: emotion})
                } else {
                    emessage.push({type: "txt", data: emotions[i]})
                }
                var restMsgIndex = receiveMsg.indexOf(emotions[i]) + emotions[i].length;
                receiveMsg = receiveMsg.substring(restMsgIndex)
            }
            if (receiveMsg) {
                emessage.push({type: "txt", data: receiveMsg})
            }
            if (isemotion) {
                return{isemotion: isemotion, body: emessage}
            }
            return{isemotion: false, body: [
                {type: "txt", data: message}
            ]}
        };
        var parseResponseMessageFn = function (msginfo) {
            var parseMsgData = {errorMsg: true, data: []};
            var msgBodies = msginfo.getElementsByTagName("body");
            if (msgBodies) {
                for (var i = 0; i < msgBodies.length; i++) {
                    var msgBody = msgBodies[i];
                    var childNodes = msgBody.childNodes;
                    if (childNodes && childNodes.length > 0) {
                        var childNode = msgBody.childNodes[0];
                        if (childNode.nodeType == Strophe.ElementType.TEXT) {
                            var jsondata = childNode.nodeValue;
                            jsondata = jsondata.replace("\n", "<br>");
                            try {
                                var data = eval("(" + jsondata + ")");
                                parseMsgData.errorMsg = false;
                                parseMsgData.data = [data]
                            } catch (e) {
                            }
                        }
                    }
                }
                var delayTags = msginfo.getElementsByTagName("delay");
                if (delayTags && delayTags.length > 0) {
                    var delayTag = delayTags[0];
                    var delayMsgTime = delayTag.getAttribute("stamp");
                    if (delayMsgTime) {
                        parseMsgData.delayTimeStamp = delayMsgTime
                    }
                }
            } else {
                var childrens = msginfo.childNodes;
                if (childrens && childrens.length > 0) {
                    var child = msginfo.childNodes[0];
                    if (child.nodeType == Strophe.ElementType.TEXT) {
                        try {
                            var data = eval("(" + child.nodeValue + ")");
                            parseMsgData.errorMsg = false;
                            parseMsgData.data = [data]
                        } catch (e) {
                        }
                    }
                }
            }
            return parseMsgData
        };
        var parseFriendFn = function (queryTag) {
            var rouster = [];
            var items = queryTag.getElementsByTagName("item");
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    var jid = item.getAttribute("jid");
                    if (!jid) {
                        continue
                    }
                    var subscription = item.getAttribute("subscription");
                    var friend = {subscription: subscription, jid: jid};
                    var ask = item.getAttribute("ask");
                    if (ask) {
                        friend.ask = ask
                    }
                    var name = item.getAttribute("name");
                    if (name) {
                        friend.name = name
                    } else {
                        var n = parseNameFromJidFn(jid);
                        friend.name = n
                    }
                    var groups = [];
                    Strophe.forEachChild(item, "group", function (group) {
                        groups.push(Strophe.getText(group))
                    });
                    friend.groups = groups;
                    rouster.push(friend)
                }
            }
            return rouster
        };
        var parseRoomFn = function (result) {
            var rooms = [];
            var items = result.getElementsByTagName("item");
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    var roomJid = item.getAttribute("jid");
                    var tmp = roomJid.split("@")[0];
                    var room = {jid: roomJid, name: item.getAttribute("name"), roomId: tmp.split("_")[1]};
                    rooms.push(room)
                }
            }
            return rooms
        };
        var parseRoomOccupantsFn = function (result) {
            var occupants = [];
            var items = result.getElementsByTagName("item");
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    var room = {jid: item.getAttribute("jid"), name: item.getAttribute("name")};
                    occupants.push(room)
                }
            }
            return occupants
        };
        var login2UserGrid = function (options) {
            options = options || {};
            var appKey = options.appKey || "";
            var devInfos = appKey.split("#");
            if (devInfos.length != 2) {
                error({type: EASEMOB_IM_CONNCTION_OPEN_USERGRID_ERROR, msg: "请指定正确的开发者信息(appKey)"});
                return false
            }
            var orgName = devInfos[0];
            var appName = devInfos[1];
            if (!orgName) {
                error({type: EASEMOB_IM_CONNCTION_OPEN_USERGRID_ERROR, msg: "请指定正确的开发者信息(appKey)"});
                return false
            }
            if (!appName) {
                error({type: EASEMOB_IM_CONNCTION_OPEN_USERGRID_ERROR, msg: "请指定正确的开发者信息(appKey)"});
                return false
            }
            var suc = options.success || emptyFn;
            var error = options.error || emptyFn;
            var user = options.user || "";
            var pwd = options.pwd || "";
            return dologin2UserGrid(user, pwd, orgName, appName, suc, error)
        };
        var dologin2UserGrid = function (user, pwd, orgName, appName, suc, error) {
            var loginUrl = "http://a1.easemob.com/" + orgName + "/" + appName + "/token";
            var loginJson = {grant_type: "password", username: user, password: pwd};
            var loginfo = JSON.stringify(loginJson);
            var options = {url: loginUrl, dataType: "json", data: loginfo, success: suc || emptyFn, error: error || emptyFn};
            var param = doAjaxRequest(options);
            return param
        };
        var innerCheck = function (options, conn) {
            if (conn.isOpened() || conn.isOpening()) {
                conn.onError({type: EASEMOB_IM_CONNCTION_REOPEN_ERROR, msg: "重复打开连接,请先关闭连接再打开"});
                return false
            }
            options = options || {};
            var user = options.user || "";
            if (options.user == "") {
                conn.onError({type: EASEMOB_IM_CONNCTION_USER_NOT_ASSIGN_ERROR, msg: "未指定用户"});
                return false
            }
            var appKey = options.appKey || "";
            var devInfos = appKey.split("#");
            if (devInfos.length != 2) {
                conn.onError({type: EASEMOB_IM_CONNCTION_OPEN_ERROR, msg: "请指定正确的开发者信息(appKey)"});
                return false
            }
            var orgName = devInfos[0];
            var appName = devInfos[1];
            if (!orgName) {
                conn.onError({type: EASEMOB_IM_CONNCTION_OPEN_ERROR, msg: "请指定正确的开发者信息(appKey)"});
                return false
            }
            if (!appName) {
                conn.onError({type: EASEMOB_IM_CONNCTION_OPEN_ERROR, msg: "请指定正确的开发者信息(appKey)"});
                return false
            }
            var jid = appKey + "_" + user + "@" + conn.domain;
            var resource = options.resource || "webim";
            if (resource != "") {
                jid = jid + "/" + resource
            }
            conn.context.jid = jid;
            conn.context.userId = user;
            conn.context.appKey = appKey;
            conn.context.appName = appName;
            conn.context.orgName = orgName;
            return true
        };
        var login2ImCallback = function (status, msg, conn) {
            if (status == Strophe.Status.CONNFAIL) {
                conn.onError({type: EASEMOB_IM_CONNCTION_OPEN_ERROR, msg: "登录失败," + msg})
            } else {
                if ((status == Strophe.Status.ATTACHED) || (status == Strophe.Status.CONNECTED)) {
                    var handleMessage = function (msginfo) {
                        conn.handleMessage(msginfo);
                        return true
                    };
                    var handlePresence = function (msginfo) {
                        conn.handlePresence(msginfo);
                        return true
                    };
                    var handlePing = function (msginfo) {
                        conn.handlePing(msginfo);
                        return true
                    };
                    var handleIq = function (msginfo) {
                        conn.handleIq(msginfo);
                        return true
                    };
                    conn.addHandler(handleMessage, null, "message", null, null, null);
                    conn.addHandler(handlePresence, null, "presence", null, null, null);
                    conn.addHandler(handlePing, "urn:xmpp:ping", "iq", "get", null, null);
                    conn.addHandler(handleIq, "jabber:iq:roster", "iq", "set", null, null);
                    conn.context.status = STATUS_OPENED;
                    var supportRecMessage = [EASEMOB_IM_MESSAGE_REC_TEXT, EASEMOB_IM_MESSAGE_REC_EMOTION];
                    if (isCanDownLoadFile) {
                        supportRecMessage.push(EASEMOB_IM_MESSAGE_REC_PHOTO);
                        supportRecMessage.push(EASEMOB_IM_MESSAGE_REC_AUDIO_FILE)
                    }
                    var supportSedMessage = [EASEMOB_IM_MESSAGE_SED_TEXT];
                    if (isCanUploadFile) {
                        supportSedMessage.push(EASEMOB_IM_MESSAGE_REC_PHOTO);
                        supportSedMessage.push(EASEMOB_IM_MESSAGE_REC_AUDIO_FILE)
                    }
                    conn.onOpened({canReceive: supportRecMessage, canSend: supportSedMessage, accessToken: conn.context.accessToken})
                } else {
                    if (status == Strophe.Status.DISCONNECTING) {
                        if (conn.isOpened()) {
                            conn.context.status = STATUS_CLOSING;
                            conn.onError({type: EASEMOB_IM_CONNCTION_SERVER_CLOSE_ERROR, msg: msg})
                        }
                    } else {
                        if (status == Strophe.Status.DISCONNECTED) {
                            conn.context.status = STATUS_CLOSED;
                            conn.clear();
                            conn.onClosed()
                        } else {
                            if (status == Strophe.Status.AUTHFAIL) {
                                conn.onError({type: EASEMOB_IM_CONNCTION_AUTH_ERROR, msg: "登录失败,请输入正确的用户名和密码"});
                                conn.clear()
                            } else {
                                if (status == Strophe.Status.ERROR) {
                                    conn.onError({type: EASEMOB_IM_CONNCTION_SERVER_ERROR, msg: msg || "服务器异常"})
                                }
                            }
                        }
                    }
                }
            }
        };
        var getJid = function (options, conn) {
            var jid = options.toJid || "";
            if (jid == "") {
                var appKey = conn.context.appKey || "";
                var toJid = appKey + "_" + options.to + "@" + conn.domain;
                if (options.resource) {
                    toJid = toJid + "/" + options.resource
                }
                jid = toJid
            }
            return jid
        };
        tempIndex = 0;
        var STATUS_INIT = tempIndex++;
        var STATUS_DOLOGIN_USERGRID = tempIndex++;
        var STATUS_DOLOGIN_IM = tempIndex++;
        var STATUS_OPENED = tempIndex++;
        var STATUS_CLOSING = tempIndex++;
        var STATUS_CLOSED = tempIndex++;
        var connection = function () {
        };
        connection.prototype.init = function (options) {
            this.url = options.url || "http://im-api.easemob.com/http-bind/";
            this.wait = options.wait || 60;
            this.hold = options.hold || 1;
            if (options.route) {
                this.route = options.route
            }
            this.domain = options.domain || "easemob.com";
            this.inactivity = options.inactivity || 60;
            this.maxRetries = options.maxRetries || 5;
            this.pollingTime = options.pollingTime || 800;
            this.stropheConn = false;
            this.onOpened = options.onOpened || emptyFn;
            this.onClosed = options.onClosed || emptyFn;
            this.onTextMessage = options.onTextMessage || emptyFn;
            this.onEmotionMessage = options.onEmotionMessage || emptyFn;
            this.onPictureMessage = options.onPictureMessage || emptyFn;
            this.onAudioMessage = options.onAudioMessage || emptyFn;
            this.onFileMessage = options.onFileMessage || emptyFn;
            this.onLocationMessage = options.onLocationMessage || emptyFn;
            this.onPresence = options.onPresence || emptyFn;
            this.onRoster = options.onRoster || emptyFn;
            this.onError = options.onError || emptyFn;
            this.context = {status: STATUS_INIT}
        };
        connection.prototype.open = function (options) {
            var pass = innerCheck(options, this);
            if (pass == false) {
                return
            }
            var pwd = options.pwd || "";
            var conn = this;
            var suc = function (data, xhr) {
                var accessToken = data.access_token || "";
                if (accessToken == "") {
                    var loginfo = JSON.stringify(data);
                    conn.onError({type: EASEMOB_IM_CONNCTION_OPEN_USERGRID_ERROR, msg: "登录失败," + loginfo, data: data, xhr: xhr});
                    return
                }
                conn.context.accessToken = data.access_token;
                conn.context.accessTokenExpires = data.expires_in;
                conn.context.status = STATUS_DOLOGIN_IM;
                var stropheConn = new Strophe.Connection(conn.url, {inactivity: conn.inactivity, maxRetries: conn.maxRetries, pollingTime: conn.pollingTime});
                var callback = function (status, msg) {
                    login2ImCallback(status, msg, conn)
                };
                var jid = conn.context.jid;
                conn.context.stropheConn = stropheConn;
                if (conn.route) {
                    stropheConn.connect(jid, pwd, callback, conn.wait, conn.hold, conn.route)
                } else {
                    stropheConn.connect(jid, pwd, callback, conn.wait, conn.hold)
                }
            };
            var error = function (res, xhr, msg) {
                if (res.error && res.error_description) {
                    conn.onError({type: EASEMOB_IM_CONNCTION_OPEN_USERGRID_ERROR, msg: "登录失败," + res.error_description, data: res, xhr: xhr})
                } else {
                    conn.onError({type: EASEMOB_IM_CONNCTION_OPEN_USERGRID_ERROR, msg: "登录失败", data: res, xhr: xhr})
                }
                conn.clear()
            };
            var userId = this.context.userId;
            var appName = this.context.appName;
            var orgName = this.context.orgName;
            this.context.status = STATUS_DOLOGIN_USERGRID;
            dologin2UserGrid(userId, pwd, orgName, appName, suc, error)
        };
        connection.prototype.attach = function (options) {
            var pass = innerCheck(options, this);
            if (pass == false) {
                return
            }
            options = options || {};
            var accessToken = options.accessToken || "";
            if (accessToken == "") {
                this.onError({type: EASEMOB_IM_CONNCTION_ATTACH_USERGRID_ERROR, msg: "未指定用户的accessToken"});
                return
            }
            var sid = options.sid || "";
            if (sid == "") {
                this.onError({type: EASEMOB_IM_CONNCTION_ATTACH_ERROR, msg: "未指定用户的会话信息"});
                return
            }
            var rid = options.rid || "";
            if (rid == "") {
                this.onError({type: EASEMOB_IM_CONNCTION_ATTACH_ERROR, msg: "未指定用户的消息id"});
                return
            }
            var stropheConn = new Strophe.Connection(this.url, {inactivity: this.inactivity, maxRetries: this.maxRetries, pollingTime: this.pollingTime});
            this.context.accessToken = accessToken;
            this.context.stropheConn = stropheConn;
            this.context.status = STATUS_DOLOGIN_IM;
            var conn = this;
            var callback = function (status, msg) {
                login2ImCallback(status, msg, conn)
            };
            var jid = this.context.jid;
            var wait = this.wait;
            var hold = this.hold;
            var wind = this.wind || 5;
            stropheConn.attach(jid, sid, rid, callback, wait, hold, wind)
        };
        connection.prototype.close = function () {
            var status = this.context.status;
            if (status == STATUS_INIT) {
                return
            }
            if (this.isClosed() || this.isClosing()) {
                return
            }
            this.context.status = STATUS_CLOSING;
            this.context.stropheConn.disconnect()
        };
        connection.prototype.addHandler = function (handler, ns, name, type, id, from, options) {
            this.context.stropheConn.addHandler(handler, ns, name, type, id, from, options)
        };
        connection.prototype.handlePresence = function (msginfo) {
            if (this.isClosed()) {
                return
            }
            var from = msginfo.getAttribute("from") || "";
            var to = msginfo.getAttribute("to") || "";
            var type = msginfo.getAttribute("type") || "";
            var fromUser = parseNameFromJidFn(from);
            var toUser = parseNameFromJidFn(to);
            var info = {from: fromUser, to: toUser, fromJid: from, toJid: to, type: type};
            var showTags = msginfo.getElementsByTagName("show");
            if (showTags && showTags.length > 0) {
                var showTag = showTags[0];
                info.show = Strophe.getText(showTag)
            }
            var statusTags = msginfo.getElementsByTagName("status");
            if (statusTags && statusTags.length > 0) {
                var statusTag = statusTags[0];
                info.status = Strophe.getText(statusTag)
            }
            var priorityTags = msginfo.getElementsByTagName("priority");
            if (priorityTags && priorityTags.length > 0) {
                var priorityTag = priorityTags[0];
                info.priority = Strophe.getText(priorityTag)
            }
            this.onPresence(info, msginfo)
        };
        connection.prototype.handlePing = function (e) {
            if (this.isClosed()) {
                return
            }
            var id = e.getAttribute("id");
            var from = e.getAttribute("from");
            var to = e.getAttribute("to");
            var dom = $iq({from: to, to: from, id: id, type: "result"});
            this.sendCommand(dom.tree())
        };
        connection.prototype.handleIq = function (e) {
            var id = e.getAttribute("id");
            var from = e.getAttribute("from") || "";
            var name = parseNameFromJidFn(from);
            var curJid = this.context.jid;
            var curUser = this.context.userId;
            if (from !== "" && from != curJid && curUser != name) {
                return true
            }
            var iqresult = $iq({type: "result", id: id, from: curJid});
            this.sendCommand(iqresult.tree());
            var msgBodies = e.getElementsByTagName("query");
            if (msgBodies && msgBodies.length > 0) {
                var queryTag = msgBodies[0];
                var rouster = parseFriendFn(queryTag);
                this.onRoster(rouster)
            }
            return true
        };
        connection.prototype.handleMessage = function (msginfo) {
            if (this.isClosed()) {
                return
            }
            var parseMsgData = parseResponseMessageFn(msginfo);
            if (parseMsgData.errorMsg) {
                return
            }
            var msgDatas = parseMsgData.data;
            for (var i in msgDatas) {
                var msg = msgDatas[i];
                var from = msg.from;
                var too = msg.to;
                var chattype = msginfo.attributes.type.value || "chat";
                var msgBodies = msg.bodies;
                if (!msgBodies || msgBodies.length == 0) {
                    continue
                }
                var msgBody = msg.bodies[0];
                var type = msgBody.type;
                if ("txt" == type) {
                    var receiveMsg = msgBody.msg;
                    var emotionsbody = parseTextMessageFn(receiveMsg);
                    if (emotionsbody.isemotion) {
                        this.onEmotionMessage({type: chattype, from: from, to: too, data: emotionsbody.body})
                    } else {
                        this.onTextMessage({type: chattype, from: from, to: too, data: receiveMsg})
                    }
                } else {
                    if ("img" == type) {
                        var rwidth = 0;
                        var rheight = 0;
                        if (msgBody.size) {
                            rwidth = msgBody.size.width;
                            rheight = msgBody.size.height
                        }
                        var msg = {type: chattype, from: from, to: too, url: msgBody.url, secret: msgBody.secret, filename: msgBody.filename, thumb: msgBody.thumb, thumb_secret: msgBody.thumb_secret, file_length: msgBody.file_length || "", width: rwidth, height: rheight, filetype: msgBody.filetype || "", accessToken: this.context.accessToken || ""};
                        this.onPictureMessage(msg)
                    } else {
                        if ("audio" == type) {
                            this.onAudioMessage({type: chattype, from: from, to: too, url: msgBody.url, secret: msgBody.secret, filename: msgBody.filename, length: msgBody.length || "", file_length: msgBody.file_length || "", filetype: msgBody.filetype || "", accessToken: this.context.accessToken || ""})
                        } else {
                            if ("file" == type) {
                                this.onFileMessage({type: chattype, from: from, to: too, url: msgBody.url, secret: msgBody.secret, filename: msgBody.filename, file_length: msgBody.file_length, accessToken: this.context.accessToken || ""})
                            } else {
                                if ("loc" == type) {
                                    this.onLocationMessage({type: chattype, from: from, to: too, addr: msgBody.addr, lat: msgBody.lat, lng: msgBody.lng})
                                }
                            }
                        }
                    }
                }
            }
        };
        connection.prototype.sendCommand = function (dom) {
            if (this.isOpened()) {
                this.context.stropheConn.send(dom)
            } else {
                this.onError({type: EASEMOB_IM_CONNCTION_OPEN_ERROR, msg: "连接还未建立,请先登录或等待登录处理完毕"})
            }
        };
        connection.prototype.getUniqueId = function (prefix) {
            var cdate = new Date();
            var offdate = new Date(2010, 1, 1);
            var offset = cdate.getTime() - offdate.getTime();
            var hexd = parseInt(offset).toString(16);
            if (typeof(prefix) == "string" || typeof(prefix) == "number") {
                return prefix + "_" + hexd
            } else {
                return"WEBIM_" + hexd
            }
        };
        connection.prototype.sendTextMessage = function (options) {
            var appKey = this.context.appKey || "";
            var toJid = appKey + "_" + options.to + "@" + this.domain;
            if (options.type && options.type == "groupchat") {
                toJid = appKey + "_" + options.to + "@conference." + this.domain
            }
            if (options.resource) {
                toJid = toJid + "/" + options.resource
            }
            var msgTxt = options.msg;
            var json = {from: this.context.userId || "", to: options.to, bodies: [
                {type: "txt", msg: msgTxt}
            ]};
            var jsonstr = JSON.stringify(json);
            var dom = $msg({to: toJid, type: options.type || "chat", id: this.getUniqueId(), xmlns: "jabber:client"}).c("body").t(jsonstr);
            this.sendCommand(dom.tree())
        };
        connection.prototype.sendPicture = function (options) {
            var onerror = options.onFileUploadError || this.onError || emptyFn;
            if (!isCanUploadFile) {
                onerror({type: EASEMOB_IM_UPLOADFILE_BROWSER_ERROR, msg: "当前浏览器不支持异步上传文件,请换用其他浏览器"});
                return
            }
            var conn = this;
            var onFileUploadComplete = options.onFileUploadComplete || emptyFn;
            var myUploadComplete = function (data) {
                options.url = data.uri;
                options.secret = data.entities[0]["share-secret"];
                if (data.entities[0]["file-metadata"]) {
                    var file_len = data.entities[0]["file-metadata"]["content-length"];
                    options.file_length = file_len;
                    options.filetype = data.entities[0]["file-metadata"]["content-type"];
                    if (file_len > 204800) {
                        options.thumbnail = true
                    }
                }
                options.uuid = data.entities[0].uuid;
                onFileUploadComplete(data);
                conn.sendPictureMessage(options)
            };
            options.onFileUploadComplete = myUploadComplete;
            options.onFileUploadError = options.onFileUploadError || this.onError || emptyFn;
            var image = new Image();
            var imageLoadFn = function () {
                image.onload = null;
                if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                    var heigth = image.height;
                    var width = image.width;
                    options.height = heigth;
                    options.width = width;
                    options.appName = conn.context.appName || "";
                    options.orgName = conn.context.orgName || "";
                    options.accessToken = conn.context.accessToken || "";
                    uploadFn(options)
                }
            };
            if ("onload" in image) {
                image.onload = imageLoadFn
            } else {
                image.onreadystatechange = imageLoadFn
            }
            image.onerror = function () {
                image.onerror = function () {
                    image.onerror = null;
                    options.onFileUploadError({type: EASEMOB_IM_UPLOADFILE_ERROR, msg: "指定的图片不存在或者不是一个图片格式文件"})
                };
                image.src = document.getElementById(options.fileInputId).value
            };
            var picId = options.fileInputId;
            file = getFileUrlFn(picId);
            options.fileInfo = file;
            options.filename = file.filename;
            if (!file.url) {
                options.onFileUploadError({type: EASEMOB_IM_UPLOADFILE_NO_FILE, msg: "未选择上传文件"})
            } else {
                image.src = file.url
            }
        };
        connection.prototype.sendPictureMessage = function (options) {
            var appKey = this.context.appKey || "";
            var toJid = appKey + "_" + options.to + "@" + this.domain;
            if (options.type && options.type == "groupchat") {
                toJid = appKey + "_" + options.to + "@conference." + this.domain
            }
            if (options.resource) {
                toJid = toJid + "/" + options.resource
            }
            var json = {from: this.context.userId || "", to: options.to, bodies: [
                {type: "img", url: options.url + "/" + options.uuid, secret: options.secret, filename: options.filename, thumb: options.url + "/" + options.uuid, thumb_secret: "", size: {width: options.width, height: options.height}, file_length: options.file_length, filetype: options.filetype}
            ]};
            var jsonstr = JSON.stringify(json);
            var date = new Date();
            var dom = $msg({type: options.type || "chat", to: toJid, id: this.getUniqueId(), xmlns: "jabber:client"}).c("body").t(jsonstr);
            this.sendCommand(dom.tree())
        };
        connection.prototype.sendAudio = function (options) {
            var onerror = options.onFileUploadError || this.onError || emptyFn;
            if (!isCanUploadFile) {
                onerror({type: EASEMOB_IM_UPLOADFILE_BROWSER_ERROR, msg: "当前浏览器不支持异步上传文件,请换用其他浏览器"});
                return
            }
            var conn = this;
            var onFileUploadComplete = options.onFileUploadComplete || emptyFn;
            var myonComplete = function (data) {
                onFileUploadComplete(data);
                options.url = data.uri;
                options.secret = data.entities[0]["share-secret"];
                if (data.entities[0]["file-metadata"]) {
                    options.file_length = data.entities[0]["file-metadata"]["content-length"];
                    options.filetype = data.entities[0]["file-metadata"]["content-type"]
                }
                options.uuid = data.entities[0].uuid;
                options.length = data.duration;
                conn.sendAudioMessage(options)
            };
            options.appName = this.context.appName || "";
            options.orgName = this.context.orgName || "";
            options.accessToken = this.context.accessToken || "";
            options.onFileUploadComplete = myonComplete;
            var file = getFileUrlFn(options.fileInputId);
            options.fileInfo = file;
            options.filename = file.filename;
            uploadFn(options, this)
        };
        connection.prototype.sendAudioMessage = function (options) {
            var appKey = this.context.appKey || "";
            var toJid = appKey + "_" + options.to + "@" + this.domain;
            if (options.type && options.type == "groupchat") {
                toJid = appKey + "_" + options.to + "@conference." + this.domain
            }
            if (options.resource) {
                toJid = toJid + "/" + options.resource
            }
            var json = {from: this.context.userId || "", to: options.to, bodies: [
                {type: "audio", url: options.url + "/" + options.uuid, secret: options.secret, filename: options.filename, file_length: options.file_length, length: options.length}
            ]};
            var jsonstr = JSON.stringify(json);
            var dom = $msg({type: options.type || "chat", to: toJid, id: this.getUniqueId(), xmlns: "jabber:client"}).c("body").t(jsonstr);
            this.sendCommand(dom.tree())
        };
        connection.prototype.sendFileMessage = function (options) {
            var appKey = this.context.appKey || "";
            var toJid = appKey + "_" + options.to + "@" + this.domain;
            if (options.resource) {
                toJid = toJid + "/" + options.resource
            }
            var json = {from: this.context.userId || "", to: options.to, bodies: [
                {type: "file", url: options.url, secret: options.secret, filename: options.filename, file_length: options.file_length}
            ]};
            var jsonstr = JSON.stringify(json);
            var dom = $msg({type: "chat", to: toJid, id: this.getUniqueId(), xmlns: "jabber:client"}).c("body").t(jsonstr);
            this.sendCommand(dom.tree())
        };
        connection.prototype.sendLocationMessage = function (options) {
            var appKey = this.context.appKey || "";
            var toJid = appKey + "_" + options.to + "@" + this.domain;
            if (options.resource) {
                toJid = toJid + "/" + options.resource
            }
            var json = {from: this.context.userId || "", to: options.to, bodies: [
                {type: "loc", addr: options.addr, lat: options.lat, lng: options.lng}
            ]};
            var jsonstr = JSON.stringify(json);
            var dom = $msg({type: "chat", to: toJid, id: this.getUniqueId(), xmlns: "jabber:client"}).c("body").t(jsonstr);
            this.sendCommand(dom.tree())
        };
        connection.prototype.addRoster = function (options) {
            var jid = getJid(options, this);
            var name = options.name || "";
            var groups = options.groups || "";
            var iq = $iq({type: "set"});
            iq.c("query", {xmlns: "jabber:iq:roster"});
            iq.c("item", {jid: jid, name: name});
            if (groups) {
                for (var i = 0; i < groups.length; i++) {
                    iq.c("group").t(groups[i]).up()
                }
            }
            var suc = options.success || emptyFn;
            var error = options.error || emptyFn;
            this.context.stropheConn.sendIQ(iq.tree(), suc, error)
        };
        connection.prototype.removeRoster = function (options) {
            var jid = getJid(options, this);
            var iq = $iq({type: "set"}).c("query", {xmlns: "jabber:iq:roster"}).c("item", {jid: jid, subscription: "remove"});
            var suc = options.success || emptyFn;
            var error = options.error || emptyFn;
            this.context.stropheConn.sendIQ(iq, suc, error)
        };
        connection.prototype.getRoster = function (options) {
            var conn = this;
            var dom = $iq({type: "get"}).c("query", {xmlns: "jabber:iq:roster"});
            options = options || {};
            suc = options.success || this.onRoster;
            var completeFn = function (ele) {
                var rouster = [];
                var msgBodies = ele.getElementsByTagName("query");
                if (msgBodies && msgBodies.length > 0) {
                    var queryTag = msgBodies[0];
                    rouster = parseFriendFn(queryTag)
                }
                suc(rouster, ele)
            };
            error = options.error || this.onError;
            var failFn = function (ele) {
                error({type: EASEMOB_IM_CONNCTION_GETROSTER_ERROR, msg: "获取联系人信息失败", data: ele})
            };
            if (this.isOpened()) {
                this.context.stropheConn.sendIQ(dom.tree(), completeFn, failFn)
            } else {
                error({type: EASEMOB_IM_CONNCTION_OPEN_ERROR, msg: "连接还未建立,请先登录或等待登录处理完毕"})
            }
        };
        connection.prototype.subscribe = function (options) {
            var jid = getJid(options, this);
            var pres = $pres({to: jid, type: "subscribe"});
            if (options.message) {
                pres.c("status").t(options.message).up()
            }
            if (options.nick) {
                pres.c("nick", {xmlns: "http://jabber.org/protocol/nick"}).t(options.nick)
            }
            this.sendCommand(pres.tree())
        };
        connection.prototype.subscribed = function (options) {
            var jid = getJid(options, this);
            var pres = $pres({to: jid, type: "subscribed"});
            if (options.message) {
                pres.c("status").t(options.message).up()
            }
            this.sendCommand(pres.tree())
        };
        connection.prototype.unsubscribe = function (options) {
            var jid = getJid(options, this);
            var pres = $pres({to: jid, type: "unsubscribe"});
            if (options.message) {
                pres.c("status").t(options.message)
            }
            this.sendCommand(pres.tree())
        };
        connection.prototype.unsubscribed = function (options) {
            var jid = getJid(options, this);
            var pres = $pres({to: jid, type: "unsubscribed"});
            if (options.message) {
                pres.c("status").t(options.message).up()
            }
            this.sendCommand(pres.tree())
        };
        connection.prototype.createRoom = function (options) {
            var suc = options.success || emptyFn;
            var err = options.error || emptyFn;
            var roomiq;
            roomiq = $iq({to: options.rooomName, type: "set"}).c("query", {xmlns: Strophe.NS.MUC_OWNER}).c("x", {xmlns: "jabber:x:data", type: "submit"});
            return this.context.stropheConn.sendIQ(roomiq.tree(), suc, err)
        };
        connection.prototype.join = function (options) {
            var roomJid = this.context.appKey + "_" + options.roomId + "@conference." + this.domain;
            var room_nick = roomJid + "/" + this.context.userId;
            var suc = options.success || emptyFn;
            var err = options.error || emptyFn;
            var errorFn = function (ele) {
                err({type: EASEMOB_IM_CONNCTION_JOINROOM_ERROR, msg: "加入房间失败", data: ele})
            };
            var iq = $pres({from: this.context.jid, to: room_nick}).c("x", {xmlns: Strophe.NS.MUC});
            this.context.stropheConn.sendIQ(iq.tree(), suc, errorFn)
        };
        connection.prototype.listRooms = function (options) {
            var iq;
            iq = $iq({to: options.server || "conference.easemob.com", from: this.context.jid, type: "get"}).c("query", {xmlns: Strophe.NS.DISCO_ITEMS});
            var suc = options.success || emptyFn;
            var completeFn = function (result) {
                var rooms = [];
                rooms = parseRoomFn(result);
                suc(rooms)
            };
            var err = options.error || emptyFn;
            var errorFn = function (ele) {
                err({type: EASEMOB_IM_CONNCTION_GETROOM_ERROR, msg: "获取群组列表失败", data: ele})
            };
            this.context.stropheConn.sendIQ(iq.tree(), completeFn, errorFn)
        };
        connection.prototype.queryRoomMember = function (options) {
            var domain = this.domain;
            var members = [];
            var iq = $iq({to: this.context.appKey + "_" + options.roomId + "@conference." + domain, type: "get"}).c("query", {xmlns: Strophe.NS.MUC + "#admin"}).c("item", {affiliation: "member"});
            var suc = options.success || emptyFn;
            var completeFn = function (result) {
                var items = result.getElementsByTagName("item");
                if (items) {
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        var mem = {jid: item.getAttribute("jid"), affiliation: "member"};
                        members.push(mem)
                    }
                }
                suc(members)
            };
            var err = options.error || emptyFn;
            var errorFn = function (ele) {
                err({type: EASEMOB_IM_CONNCTION_GETROOMMEMBER_ERROR, msg: "获取群组成员列表失败", data: ele})
            };
            this.context.stropheConn.sendIQ(iq.tree(), completeFn, errorFn)
        };
        connection.prototype.queryRoomInfo = function (options) {
            var domain = this.domain;
            var iq = $iq({to: this.context.appKey + "_" + options.roomId + "@conference." + domain, type: "get"}).c("query", {xmlns: Strophe.NS.DISCO_INFO});
            var suc = options.success || emptyFn;
            var members = [];
            var completeFn = function (result) {
                var fields = result.getElementsByTagName("field");
                if (fields) {
                    for (var i = 0; i < fields.length; i++) {
                        var field = fields[i];
                        if (field.getAttribute("label") == "owner") {
                            var mem = {jid: field.textContent + "@" + domain, affiliation: "owner"};
                            members.push(mem)
                        }
                    }
                }
                suc(members)
            };
            var err = options.error || emptyFn;
            var errorFn = function (ele) {
                err({type: EASEMOB_IM_CONNCTION_GETROOMINFO_ERROR, msg: "获取群组信息失败", data: ele})
            };
            this.context.stropheConn.sendIQ(iq.tree(), completeFn, errorFn)
        };
        connection.prototype.queryRoomOccupants = function (options) {
            var suc = options.success || emptyFn;
            var completeFn = function (result) {
                var occupants = [];
                occupants = parseRoomOccupantsFn(result);
                suc(occupants)
            };
            var err = options.error || emptyFn;
            var errorFn = function (ele) {
                err({type: EASEMOB_IM_CONNCTION_GETROOMOCCUPANTS_ERROR, msg: "获取群组出席者列表失败", data: ele})
            };
            var attrs = {xmlns: Strophe.NS.DISCO_ITEMS};
            var info = $iq({from: this.context.jid, to: this.context.appKey + "_" + options.roomId + "@conference." + this.domain, type: "get"}).c("query", attrs);
            this.context.stropheConn.sendIQ(info.tree(), completeFn, errorFn)
        };
        connection.prototype.setUserSig = function (desc) {
            var dom = $pres({xmlns: "jabber:client"});
            desc = desc || "";
            dom.c("status").t(desc);
            this.sendCommand(dom.tree())
        };
        connection.prototype.setPresence = function (type, status) {
            var dom = $pres({xmlns: "jabber:client"});
            if (type) {
                if (status) {
                    dom.c("show").t(type);
                    dom.up().c("status").t(status)
                } else {
                    dom.c("show").t(type)
                }
            }
            this.sendCommand(dom.tree())
        };
        connection.prototype.getPresence = function () {
            var dom = $pres({xmlns: "jabber:client"});
            var conn = this;
            this.sendCommand(dom.tree())
        };
        connection.prototype.ping = function (options) {
            options = options || {};
            var jid = getJid(options, this);
            var dom = $iq({from: this.context.jid || "", to: jid, type: "get"}).c("ping", {xmlns: "urn:xmpp:ping"});
            suc = options.success || emptyFn;
            error = options.error || this.onError;
            var failFn = function (ele) {
                error({type: EASEMOB_IM_CONNCTION_PING_ERROR, msg: "ping失败", data: ele})
            };
            if (this.isOpened()) {
                this.context.stropheConn.sendIQ(dom.tree(), suc, failFn)
            } else {
                error({type: EASEMOB_IM_CONNCTION_OPEN_ERROR, msg: "连接还未建立,请先登录或等待登录处理完毕"})
            }
            return
        };
        connection.prototype.isOpened = function () {
            var status = this.context.status;
            return status == STATUS_OPENED
        };
        connection.prototype.isOpening = function () {
            var status = this.context.status;
            return(status == STATUS_DOLOGIN_USERGRID) || (status == STATUS_DOLOGIN_IM)
        };
        connection.prototype.isClosing = function () {
            var status = this.context.status;
            return(status == STATUS_CLOSING)
        };
        connection.prototype.isClosed = function () {
            var status = this.context.status;
            return status == STATUS_CLOSED
        };
        connection.prototype.clear = function () {
            this.context = {status: STATUS_INIT}
        };
        Easemob.im.Connection = connection;
        if (typeof Easemob.im.Helper == "undefined") {
            Easemob.im.Helper = {};
            Easemob.im.Helper.getFileUrl = getFileUrlFn;
            Easemob.im.Helper.upload = uploadFn;
            Easemob.im.Helper.download = downloadFn;
            Easemob.im.Helper.getFileSize = getFileSizeFn;
            Easemob.im.Helper.xhr = doAjaxRequest;
            Easemob.im.Helper.parseTextMessage = parseTextMessageFn;
            Easemob.im.Helper.login2UserGrid = login2UserGrid;
            Easemob.im.Helper.isCanUploadFile = isCanUploadFile;
            Easemob.im.Helper.isCanDownLoadFile = isCanDownLoadFile;
            Easemob.im.Helper.hasSetRequestHeader = hasSetRequestHeader;
            Easemob.im.Helper.hasOverrideMimeType = hasOverrideMimeType;
            Easemob.im.Helper.Base64 = innerBase64;
            Easemob.im.Helper.EmotionPicData = emotionPicData
        }
    })(jQuery)
}
/* messenger 1.4.1 */
(function () {
    var a = window.Messenger;
    var b;
    b = window.Messenger = function () {
        return b._call.apply(this, arguments)
    };
    window.Messenger.noConflict = function () {
        window.Messenger = a;
        return b
    }
})();
window.Messenger._ = (function () {
    if (window._) {
        return window._
    }
    var b = Array.prototype, u = Object.prototype, f = Function.prototype;
    var v = b.push, w = b.slice, d = b.concat, x = u.toString, g = u.hasOwnProperty;
    var l = b.forEach, q = b.map, r = b.reduce, s = b.reduceRight, k = b.filter, j = b.every, t = b.some, m = b.indexOf, p = b.lastIndexOf, n = Array.isArray, o = Object.keys, i = f.bind;
    var a = {};
    var c = {};
    var e = a.each = a.forEach = function (D, A, y) {
        if (D == null) {
            return
        }
        if (l && D.forEach === l) {
            D.forEach(A, y)
        } else {
            if (D.length === +D.length) {
                for (var z = 0, C = D.length; z < C; z++) {
                    if (A.call(y, D[z], z, D) === c) {
                        return
                    }
                }
            } else {
                for (var B in D) {
                    if (a.has(D, B)) {
                        if (A.call(y, D[B], B, D) === c) {
                            return
                        }
                    }
                }
            }
        }
    };
    a.result = function (y, z) {
        if (y == null) {
            return null
        }
        var A = y[z];
        return a.isFunction(A) ? A.call(y) : A
    };
    a.once = function (y) {
        var A = false, z;
        return function () {
            if (A) {
                return z
            }
            A = true;
            z = y.apply(this, arguments);
            y = null;
            return z
        }
    };
    var h = 0;
    a.uniqueId = function (z) {
        var y = ++h + "";
        return z ? z + y : y
    };
    a.filter = a.select = function (A, z, y) {
        var B = [];
        if (A == null) {
            return B
        }
        if (k && A.filter === k) {
            return A.filter(z, y)
        }
        e(A, function (E, C, D) {
            if (z.call(y, E, C, D)) {
                B[B.length] = E
            }
        });
        return B
    };
    e(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (y) {
        a["is" + y] = function (z) {
            return x.call(z) == "[object " + y + "]"
        }
    });
    a.defaults = function (y) {
        e(w.call(arguments, 1), function (A) {
            if (A) {
                for (var z in A) {
                    if (y[z] == null) {
                        y[z] = A[z]
                    }
                }
            }
        });
        return y
    };
    a.extend = function (y) {
        e(w.call(arguments, 1), function (A) {
            if (A) {
                for (var z in A) {
                    y[z] = A[z]
                }
            }
        });
        return y
    };
    a.keys = o || function (A) {
        if (A !== Object(A)) {
            throw new TypeError("Invalid object")
        }
        var z = [];
        for (var y in A) {
            if (a.has(A, y)) {
                z[z.length] = y
            }
        }
        return z
    };
    a.bind = function (A, z) {
        if (A.bind === i && i) {
            return i.apply(A, w.call(arguments, 1))
        }
        var y = w.call(arguments, 2);
        return function () {
            return A.apply(z, y.concat(w.call(arguments)))
        }
    };
    a.isObject = function (y) {
        return y === Object(y)
    };
    return a
})();
window.Messenger.Events = (function () {
    if (window.Backbone && Backbone.Events) {
        return Backbone.Events
    }
    var a = function () {
        var d = /\s+/;
        var c = function (n, f, k, o) {
            if (!k) {
                return true
            }
            if (typeof k === "object") {
                for (var h in k) {
                    n[f].apply(n, [h, k[h]].concat(o))
                }
            } else {
                if (d.test(k)) {
                    var m = k.split(d);
                    for (var g = 0, j = m.length; g < j; g++) {
                        n[f].apply(n, [m[g]].concat(o))
                    }
                } else {
                    return true
                }
            }
        };
        var e = function (h, f) {
            var g, j = -1, k = h.length;
            switch (f.length) {
                case 0:
                    while (++j < k) {
                        (g = h[j]).callback.call(g.ctx)
                    }
                    return;
                case 1:
                    while (++j < k) {
                        (g = h[j]).callback.call(g.ctx, f[0])
                    }
                    return;
                case 2:
                    while (++j < k) {
                        (g = h[j]).callback.call(g.ctx, f[0], f[1])
                    }
                    return;
                case 3:
                    while (++j < k) {
                        (g = h[j]).callback.call(g.ctx, f[0], f[1], f[2])
                    }
                    return;
                default:
                    while (++j < k) {
                        (g = h[j]).callback.apply(g.ctx, f)
                    }
            }
        };
        var b = {on: function (i, f, g) {
            if (!(c(this, "on", i, [f, g]) && f)) {
                return this
            }
            this._events || (this._events = {});
            var h = this._events[i] || (this._events[i] = []);
            h.push({callback: f, context: g, ctx: g || this});
            return this
        }, once: function (h, f, g) {
            if (!(c(this, "once", h, [f, g]) && f)) {
                return this
            }
            var j = this;
            var i = _.once(function () {
                j.off(h, i);
                f.apply(this, arguments)
            });
            i._callback = f;
            this.on(h, i, g);
            return this
        }, off: function (s, f, g) {
            var r, h, m, t, n, q, o, p;
            if (!this._events || !c(this, "off", s, [f, g])) {
                return this
            }
            if (!s && !f && !g) {
                this._events = {};
                return this
            }
            t = s ? [s] : _.keys(this._events);
            for (n = 0, q = t.length; n < q; n++) {
                s = t[n];
                if (r = this._events[s]) {
                    m = [];
                    if (f || g) {
                        for (o = 0, p = r.length; o < p; o++) {
                            h = r[o];
                            if ((f && f !== h.callback && f !== h.callback._callback) || (g && g !== h.context)) {
                                m.push(h)
                            }
                        }
                    }
                    this._events[s] = m
                }
            }
            return this
        }, trigger: function (i) {
            if (!this._events) {
                return this
            }
            var g = Array.prototype.slice.call(arguments, 1);
            if (!c(this, "trigger", i, g)) {
                return this
            }
            var h = this._events[i];
            var f = this._events.all;
            if (h) {
                e(h, g)
            }
            if (f) {
                e(f, arguments)
            }
            return this
        }, listenTo: function (j, i, f) {
            var h = this._listeners || (this._listeners = {});
            var g = j._listenerId || (j._listenerId = _.uniqueId("l"));
            h[g] = j;
            j.on(i, typeof i === "object" ? this : f, this);
            return this
        }, stopListening: function (j, i, f) {
            var h = this._listeners;
            if (!h) {
                return
            }
            if (j) {
                j.off(i, typeof i === "object" ? this : f, this);
                if (!i && !f) {
                    delete h[j._listenerId]
                }
            } else {
                if (typeof i === "object") {
                    f = this
                }
                for (var g in h) {
                    h[g].off(i, f, this)
                }
                this._listeners = {}
            }
            return this
        }};
        b.bind = b.on;
        b.unbind = b.off;
        return b
    };
    return a()
})();
(function () {
    var a, l, m, n, o, b, g, h, i, j, k, d = {}.hasOwnProperty, c = function (p, s) {
        for (var r in s) {
            if (d.call(s, r)) {
                p[r] = s[r]
            }
        }
        function q() {
            this.constructor = p
        }

        q.prototype = s.prototype;
        p.prototype = new q();
        p.__super__ = s.prototype;
        return p
    }, f = [].slice, e = [].indexOf || function (q) {
        for (var p = 0, r = this.length; p < r; p++) {
            if (p in this && this[p] === q) {
                return p
            }
        }
        return -1
    };
    a = jQuery;
    b = (i = window._) != null ? i : window.Messenger._;
    n = (j = typeof Backbone !== "undefined" && Backbone !== null ? Backbone.Events : void 0) != null ? j : window.Messenger.Events;
    m = (function () {
        function p(q) {
            a.extend(this, n);
            if (b.isObject(q)) {
                if (q.el) {
                    this.setElement(q.el)
                }
                this.model = q.model
            }
            this.initialize.apply(this, arguments)
        }

        p.prototype.setElement = function (q) {
            this.$el = a(q);
            return this.el = this.$el[0]
        };
        p.prototype.delegateEvents = function (t) {
            var r, s, u, v, w, x, q;
            if (!(t || (t = b.result(this, "events")))) {
                return
            }
            this.undelegateEvents();
            r = /^(\S+)\s*(.*)$/;
            q = [];
            for (u in t) {
                w = t[u];
                if (!b.isFunction(w)) {
                    w = this[t[u]]
                }
                if (!w) {
                    throw new Error('Method "' + t[u] + '" does not exist')
                }
                v = u.match(r);
                s = v[1];
                x = v[2];
                w = b.bind(w, this);
                s += ".delegateEvents" + this.cid;
                if (x === "") {
                    q.push(this.jqon(s, w))
                } else {
                    q.push(this.jqon(s, x, w))
                }
            }
            return q
        };
        p.prototype.jqon = function (r, t, s) {
            var q;
            if (this.$el.on != null) {
                return(q = this.$el).on.apply(q, arguments)
            } else {
                if (!(s != null)) {
                    s = t;
                    t = void 0
                }
                if (t != null) {
                    return this.$el.delegate(t, r, s)
                } else {
                    return this.$el.bind(r, s)
                }
            }
        };
        p.prototype.jqoff = function (r) {
            var q;
            if (this.$el.off != null) {
                return(q = this.$el).off.apply(q, arguments)
            } else {
                this.$el.undelegate();
                return this.$el.unbind(r)
            }
        };
        p.prototype.undelegateEvents = function () {
            return this.jqoff(".delegateEvents" + this.cid)
        };
        p.prototype.remove = function () {
            this.undelegateEvents();
            return this.$el.remove()
        };
        return p
    })();
    g = (function (q) {
        c(p, q);
        function p() {
            return p.__super__.constructor.apply(this, arguments)
        }

        p.prototype.defaults = {hideAfter: 10, scroll: true, closeButtonText: "&times;"};
        p.prototype.initialize = function (r) {
            if (r == null) {
                r = {}
            }
            this.shown = false;
            this.rendered = false;
            this.messenger = r.messenger;
            return this.options = a.extend({}, this.options, r, this.defaults)
        };
        p.prototype.show = function () {
            var r;
            if (!this.rendered) {
                this.render()
            }
            this.$message.removeClass("messenger-hidden");
            r = this.shown;
            this.shown = true;
            if (!r) {
                return this.trigger("show")
            }
        };
        p.prototype.hide = function () {
            var r;
            if (!this.rendered) {
                return
            }
            this.$message.addClass("messenger-hidden");
            r = this.shown;
            this.shown = false;
            if (r) {
                return this.trigger("hide")
            }
        };
        p.prototype.cancel = function () {
            return this.hide()
        };
        p.prototype.update = function (t) {
            var r, s = this;
            if (b.isString(t)) {
                t = {message: t}
            }
            a.extend(this.options, t);
            this.lastUpdate = new Date();
            this.rendered = false;
            this.events = (r = this.options.events) != null ? r : {};
            this.render();
            this.actionsToEvents();
            this.delegateEvents();
            this.checkClickable();
            if (this.options.hideAfter) {
                this.$message.addClass("messenger-will-hide-after");
                if (this._hideTimeout != null) {
                    clearTimeout(this._hideTimeout)
                }
                this._hideTimeout = setTimeout(function () {
                    return s.hide()
                }, this.options.hideAfter * 1000)
            } else {
                this.$message.removeClass("messenger-will-hide-after")
            }
            if (this.options.hideOnNavigate) {
                this.$message.addClass("messenger-will-hide-on-navigate");
                if ((typeof Backbone !== "undefined" && Backbone !== null ? Backbone.history : void 0) != null) {
                    Backbone.history.on("route", function () {
                        return s.hide()
                    })
                }
            } else {
                this.$message.removeClass("messenger-will-hide-on-navigate")
            }
            return this.trigger("update", this)
        };
        p.prototype.scrollTo = function () {
            if (!this.options.scroll) {
                return
            }
            return a.scrollTo(this.$el, {duration: 400, offset: {left: 0, top: -20}})
        };
        p.prototype.timeSinceUpdate = function () {
            if (this.lastUpdate) {
                return(new Date) - this.lastUpdate
            } else {
                return null
            }
        };
        p.prototype.actionsToEvents = function () {
            var u, v, r, s, t = this;
            r = this.options.actions;
            s = [];
            for (v in r) {
                u = r[v];
                s.push(this.events['click [data-action="' + v + '"] a'] = (function (w) {
                    return function (x) {
                        x.preventDefault();
                        x.stopPropagation();
                        t.trigger("action:" + v, w, x);
                        return w.action.call(t, x, t)
                    }
                })(u))
            }
            return s
        };
        p.prototype.checkClickable = function () {
            var t, u, r, s;
            r = this.events;
            s = [];
            for (u in r) {
                t = r[u];
                if (u === "click") {
                    s.push(this.$message.addClass("messenger-clickable"))
                } else {
                    s.push(void 0)
                }
            }
            return s
        };
        p.prototype.undelegateEvents = function () {
            var r;
            p.__super__.undelegateEvents.apply(this, arguments);
            return(r = this.$message) != null ? r.removeClass("messenger-clickable") : void 0
        };
        p.prototype.parseActions = function () {
            var t, u, v, w, r, s;
            u = [];
            r = this.options.actions;
            for (w in r) {
                t = r[w];
                v = a.extend({}, t);
                v.name = w;
                if ((s = v.label) == null) {
                    v.label = w
                }
                u.push(v)
            }
            return u
        };
        p.prototype.template = function (C) {
            var r, s, t, u, v, w, B, x, y, z, A = this;
            v = a("<div class='messenger-message message alert " + C.type + " message-" + C.type + " alert-" + C.type + "'>");
            if (C.showCloseButton) {
                t = a('<button type="button" class="messenger-close" data-dismiss="alert">');
                t.html(C.closeButtonText);
                t.click(function () {
                    A.cancel();
                    return true
                });
                v.append(t)
            }
            w = a('<div class="messenger-message-inner">' + C.message + "</div>");
            v.append(w);
            if (C.actions.length) {
                s = a('<div class="messenger-actions">')
            }
            z = C.actions;
            for (x = 0, y = z.length; x < y; x++) {
                B = z[x];
                r = a("<span>");
                r.attr("data-action", "" + B.name);
                u = a("<a>");
                u.html(B.label);
                r.append(a('<span class="messenger-phrase">'));
                r.append(u);
                s.append(r)
            }
            v.append(s);
            return v
        };
        p.prototype.render = function () {
            var r;
            if (this.rendered) {
                return
            }
            if (!this._hasSlot) {
                this.setElement(this.messenger._reserveMessageSlot(this));
                this._hasSlot = true
            }
            r = a.extend({}, this.options, {actions: this.parseActions()});
            this.$message = a(this.template(r));
            this.$el.html(this.$message);
            this.shown = true;
            this.rendered = true;
            return this.trigger("render")
        };
        return p
    })(m);
    o = (function (p) {
        c(q, p);
        function q() {
            return q.__super__.constructor.apply(this, arguments)
        }

        q.prototype.initialize = function () {
            q.__super__.initialize.apply(this, arguments);
            return this._timers = {}
        };
        q.prototype.cancel = function () {
            this.clearTimers();
            this.hide();
            if ((this._actionInstance != null) && (this._actionInstance.abort != null)) {
                return this._actionInstance.abort()
            }
        };
        q.prototype.clearTimers = function () {
            var t, u, r, s;
            r = this._timers;
            for (t in r) {
                u = r[t];
                clearTimeout(u)
            }
            this._timers = {};
            return(s = this.$message) != null ? s.removeClass("messenger-retry-soon messenger-retry-later") : void 0
        };
        q.prototype.render = function () {
            var t, u, r, s;
            q.__super__.render.apply(this, arguments);
            this.clearTimers();
            r = this.options.actions;
            s = [];
            for (u in r) {
                t = r[u];
                if (t.auto) {
                    s.push(this.startCountdown(u, t))
                } else {
                    s.push(void 0)
                }
            }
            return s
        };
        q.prototype.renderPhrase = function (r, t) {
            var s;
            s = r.phrase.replace("TIME", this.formatTime(t));
            return s
        };
        q.prototype.formatTime = function (s) {
            var r;
            r = function (t, u) {
                t = Math.floor(t);
                if (t !== 1) {
                    u = u + "s"
                }
                return"in " + t + " " + u
            };
            if (Math.floor(s) === 0) {
                return"now..."
            }
            if (s < 60) {
                return r(s, "second")
            }
            s /= 60;
            if (s < 60) {
                return r(s, "minute")
            }
            s /= 60;
            return r(s, "hour")
        };
        q.prototype.startCountdown = function (v, u) {
            var r, w, x, s, t = this;
            if (this._timers[v] != null) {
                return
            }
            r = this.$message.find("[data-action='" + v + "'] .messenger-phrase");
            w = (s = u.delay) != null ? s : 3;
            if (w <= 10) {
                this.$message.removeClass("messenger-retry-later");
                this.$message.addClass("messenger-retry-soon")
            } else {
                this.$message.removeClass("messenger-retry-soon");
                this.$message.addClass("messenger-retry-later")
            }
            x = function () {
                var y;
                r.text(t.renderPhrase(u, w));
                if (w > 0) {
                    y = Math.min(w, 1);
                    w -= y;
                    return t._timers[v] = setTimeout(x, y * 1000)
                } else {
                    t.$message.removeClass("messenger-retry-soon messenger-retry-later");
                    delete t._timers[v];
                    return u.action()
                }
            };
            return x()
        };
        return q
    })(g);
    h = (function (q) {
        c(p, q);
        function p() {
            return p.__super__.constructor.apply(this, arguments)
        }

        p.prototype.tagName = "ul";
        p.prototype.className = "messenger";
        p.prototype.messageDefaults = {type: "info"};
        p.prototype.initialize = function (r) {
            this.options = r != null ? r : {};
            this.history = [];
            return this.messageDefaults = a.extend({}, this.messageDefaults, this.options.messageDefaults)
        };
        p.prototype.render = function () {
            return this.updateMessageSlotClasses()
        };
        p.prototype.findById = function (r) {
            return b.filter(this.history, function (s) {
                return s.msg.options.id === r
            })
        };
        p.prototype._reserveMessageSlot = function (u) {
            var r, t, s = this;
            r = a("<li>");
            r.addClass("messenger-message-slot");
            this.$el.prepend(r);
            this.history.push({msg: u, $slot: r});
            this._enforceIdConstraint(u);
            u.on("update", function () {
                return s._enforceIdConstraint(u)
            });
            while (this.options.maxMessages && this.history.length > this.options.maxMessages) {
                t = this.history.shift();
                t.msg.remove();
                t.$slot.remove()
            }
            return r
        };
        p.prototype._enforceIdConstraint = function (w) {
            var v, r, s, t, u;
            if (w.options.id == null) {
                return
            }
            u = this.history;
            for (r = 0, s = u.length; r < s; r++) {
                v = u[r];
                t = v.msg;
                if ((t.options.id != null) && t.options.id === w.options.id && w !== t) {
                    if (w.options.singleton) {
                        w.hide();
                        return
                    } else {
                        t.hide()
                    }
                }
            }
        };
        p.prototype.newMessage = function (w) {
            var v, r, s, t, u = this;
            if (w == null) {
                w = {}
            }
            w.messenger = this;
            g = (r = (s = Messenger.themes[(t = w.theme) != null ? t : this.options.theme]) != null ? s.Message : void 0) != null ? r : o;
            v = new g(w);
            v.on("show", function () {
                if (w.scrollTo && u.$el.css("position") !== "fixed") {
                    return v.scrollTo()
                }
            });
            v.on("hide show render", this.updateMessageSlotClasses, this);
            return v
        };
        p.prototype.updateMessageSlotClasses = function () {
            var u, v, w, x, r, s, t;
            x = true;
            v = null;
            u = false;
            t = this.history;
            for (r = 0, s = t.length; r < s; r++) {
                w = t[r];
                w.$slot.removeClass("messenger-first messenger-last messenger-shown");
                if (w.msg.shown && w.msg.rendered) {
                    w.$slot.addClass("messenger-shown");
                    u = true;
                    v = w;
                    if (x) {
                        x = false;
                        w.$slot.addClass("messenger-first")
                    }
                }
            }
            if (v != null) {
                v.$slot.addClass("messenger-last")
            }
            return this.$el["" + (u ? "remove" : "add") + "Class"]("messenger-empty")
        };
        p.prototype.hideAll = function () {
            var v, r, s, t, u;
            t = this.history;
            u = [];
            for (r = 0, s = t.length; r < s; r++) {
                v = t[r];
                u.push(v.msg.hide())
            }
            return u
        };
        p.prototype.post = function (s) {
            var r;
            if (b.isString(s)) {
                s = {message: s}
            }
            s = a.extend(true, {}, this.messageDefaults, s);
            r = this.newMessage(s);
            r.update(s);
            return r
        };
        return p
    })(m);
    l = (function (p) {
        c(q, p);
        function q() {
            return q.__super__.constructor.apply(this, arguments)
        }

        q.prototype.doDefaults = {progressMessage: null, successMessage: null, errorMessage: "Error connecting to the server.", showSuccessWithoutError: true, retry: {auto: true, allow: true}, action: a.ajax};
        q.prototype.hookBackboneAjax = function (t) {
            var r, s = this;
            if (t == null) {
                t = {}
            }
            if (!(window.Backbone != null)) {
                throw"Expected Backbone to be defined"
            }
            t = b.defaults(t, {id: "BACKBONE_ACTION", errorMessage: false, successMessage: "Request completed successfully.", showSuccessWithoutError: false});
            r = function (u) {
                var v;
                v = b.extend({}, t, u.messenger);
                return s["do"](v, u)
            };
            if (Backbone.ajax != null) {
                if (Backbone.ajax._withoutMessenger) {
                    Backbone.ajax = Backbone.ajax._withoutMessenger
                }
                if (!(t.action != null) || t.action === this.doDefaults.action) {
                    t.action = Backbone.ajax
                }
                r._withoutMessenger = Backbone.ajax;
                return Backbone.ajax = r
            } else {
                return Backbone.sync = b.wrap(Backbone.sync, function () {
                    var w, u, v;
                    v = arguments[0], w = 2 <= arguments.length ? f.call(arguments, 1) : [];
                    u = a.ajax;
                    a.ajax = r;
                    v.call.apply(v, [this].concat(f.call(w)));
                    return a.ajax = u
                })
            }
        };
        q.prototype._getHandlerResponse = function (r) {
            if (r === false) {
                return false
            }
            if (r === true || !(r != null)) {
                return true
            }
            return r
        };
        q.prototype._parseEvents = function (t) {
            var s, u, v, w, x, y, r;
            if (t == null) {
                t = {}
            }
            x = {};
            for (w in t) {
                v = t[w];
                u = w.indexOf(" ");
                y = w.substring(0, u);
                s = w.substring(u + 1);
                if ((r = x[y]) == null) {
                    x[y] = {}
                }
                x[y][s] = v
            }
            return x
        };
        q.prototype._normalizeResponse = function () {
            var t, u, v, w, x, r, s;
            v = 1 <= arguments.length ? f.call(arguments, 0) : [];
            w = null;
            x = null;
            t = null;
            for (r = 0, s = v.length; r < s; r++) {
                u = v[r];
                if (u === "success" || u === "timeout" || u === "abort") {
                    w = u
                } else {
                    if (((u != null ? u.readyState : void 0) != null) && ((u != null ? u.responseText : void 0) != null)) {
                        x = u
                    } else {
                        if (b.isObject(u)) {
                            t = u
                        }
                    }
                }
            }
            return[w, t, x]
        };
        q.prototype.run = function () {
            var t, u, v, w, x, y, z, A, B, C, r, s = this;
            y = arguments[0], B = arguments[1], t = 3 <= arguments.length ? f.call(arguments, 2) : [];
            if (B == null) {
                B = {}
            }
            y = a.extend(true, {}, this.messageDefaults, this.doDefaults, y != null ? y : {});
            u = this._parseEvents(y.events);
            v = function (E, F) {
                var D;
                D = y[E + "Message"];
                if (b.isFunction(D)) {
                    return D.call(s, E, F)
                }
                return D
            };
            z = (r = y.messageInstance) != null ? r : this.newMessage(y);
            if (y.id != null) {
                z.options.id = y.id
            }
            if (y.progressMessage != null) {
                z.update(a.extend({}, y, {message: v("progress", null), type: "info"}))
            }
            x = {};
            b.each(["error", "success"], function (E) {
                var D;
                D = B[E];
                return x[E] = function () {
                    var M, N, O, P, Q, R, S, T, F, G, H, I, J, K, L;
                    R = 1 <= arguments.length ? f.call(arguments, 0) : [];
                    F = s._normalizeResponse.apply(s, R), Q = F[0], M = F[1], T = F[2];
                    if (E === "success" && !(z.errorCount != null) && y.showSuccessWithoutError === false) {
                        y.successMessage = null
                    }
                    if (E === "error") {
                        if ((G = y.errorCount) == null) {
                            y.errorCount = 0
                        }
                        y.errorCount += 1
                    }
                    O = y.returnsPromise ? R[0] : typeof D === "function" ? D.apply(null, R) : void 0;
                    S = s._getHandlerResponse(O);
                    if (b.isString(S)) {
                        S = {message: S}
                    }
                    if (E === "error" && ((T != null ? T.status : void 0) === 0 || Q === "abort")) {
                        z.hide();
                        return
                    }
                    if (E === "error" && ((y.ignoredErrorCodes != null) && (H = T != null ? T.status : void 0, e.call(y.ignoredErrorCodes, H) >= 0))) {
                        z.hide();
                        return
                    }
                    N = {message: v(E, T), type: E, events: (I = u[E]) != null ? I : {}, hideOnNavigate: E === "success"};
                    P = a.extend({}, y, N, S);
                    if (typeof((J = P.retry) != null ? J.allow : void 0) === "number") {
                        P.retry.allow--
                    }
                    if (E === "error" && (T != null ? T.status : void 0) >= 500 && ((K = P.retry) != null ? K.allow : void 0)) {
                        if (P.retry.delay == null) {
                            if (P.errorCount < 4) {
                                P.retry.delay = 10
                            } else {
                                P.retry.delay = 5 * 60
                            }
                        }
                        if (P.hideAfter) {
                            if ((L = P._hideAfter) == null) {
                                P._hideAfter = P.hideAfter
                            }
                            P.hideAfter = P._hideAfter + P.retry.delay
                        }
                        P._retryActions = true;
                        P.actions = {retry: {label: "retry now", phrase: "Retrying TIME", auto: P.retry.auto, delay: P.retry.delay, action: function () {
                            P.messageInstance = z;
                            return setTimeout(function () {
                                return s["do"].apply(s, [P, B].concat(f.call(t)))
                            }, 0)
                        }}, cancel: {action: function () {
                            return z.cancel()
                        }}}
                    } else {
                        if (P._retryActions) {
                            delete P.actions.retry;
                            delete P.actions.cancel;
                            delete y._retryActions
                        }
                    }
                    z.update(P);
                    if (S && P.message) {
                        Messenger(b.extend({}, s.options, {instance: s}));
                        return z.show()
                    } else {
                        return z.hide()
                    }
                }
            });
            if (!y.returnsPromise) {
                for (C in x) {
                    w = x[C];
                    A = B[C];
                    B[C] = w
                }
            }
            z._actionInstance = y.action.apply(y, [B].concat(f.call(t)));
            if (y.returnsPromise) {
                z._actionInstance.then(x.success, x.error)
            }
            return z
        };
        q.prototype["do"] = q.prototype.run;
        q.prototype.ajax = function () {
            var r, s;
            s = arguments[0], r = 2 <= arguments.length ? f.call(arguments, 1) : [];
            s.action = a.ajax;
            return this.run.apply(this, [s].concat(f.call(r)))
        };
        q.prototype.expectPromise = function (r, s) {
            s = b.extend({}, s, {action: r, returnsPromise: true});
            return this.run(s)
        };
        q.prototype.error = function (r) {
            if (r == null) {
                r = {}
            }
            if (typeof r === "string") {
                r = {message: r}
            }
            r.type = "error";
            return this.post(r)
        };
        q.prototype.info = function (r) {
            if (r == null) {
                r = {}
            }
            if (typeof r === "string") {
                r = {message: r}
            }
            r.type = "info";
            return this.post(r)
        };
        q.prototype.success = function (r) {
            if (r == null) {
                r = {}
            }
            if (typeof r === "string") {
                r = {message: r}
            }
            r.type = "success";
            return this.post(r)
        };
        return q
    })(h);
    a.fn.messenger = function () {
        var p, t, u, v, w, q, r, s;
        u = arguments[0], t = 2 <= arguments.length ? f.call(arguments, 1) : [];
        if (u == null) {
            u = {}
        }
        p = this;
        if (!(u != null) || !b.isString(u)) {
            w = u;
            if (!(p.data("messenger") != null)) {
                h = (q = (r = Messenger.themes[w.theme]) != null ? r.Messenger : void 0) != null ? q : l;
                p.data("messenger", v = new h(a.extend({el: p}, w)));
                v.render()
            }
            return p.data("messenger")
        } else {
            return(s = p.data("messenger"))[u].apply(s, t)
        }
    };
    window.Messenger._call = function (A) {
        var p, q, t, u, v, w, x, y, z, r, s;
        w = {extraClasses: "messenger-fixed messenger-on-bottom messenger-on-right", theme: "future", maxMessages: 9, parentLocations: ["body"]};
        A = a.extend(w, a._messengerDefaults, Messenger.options, A);
        if (A.theme != null) {
            A.extraClasses += " messenger-theme-" + A.theme
        }
        x = A.instance || Messenger.instance;
        if (A.instance == null) {
            z = A.parentLocations;
            q = null;
            t = null;
            for (r = 0, s = z.length; r < s; r++) {
                y = z[r];
                q = a(y);
                if (q.length) {
                    u = y;
                    break
                }
            }
            if (!x) {
                p = a("<ul>");
                q.prepend(p);
                x = p.messenger(A);
                x._location = u;
                Messenger.instance = x
            } else {
                if (!a(x._location).is(a(u))) {
                    x.$el.detach();
                    q.prepend(x.$el)
                }
            }
        }
        if (x._addedClasses != null) {
            x.$el.removeClass(x._addedClasses)
        }
        x.$el.addClass(v = "" + x.className + " " + A.extraClasses);
        x._addedClasses = v;
        return x
    };
    a.extend(Messenger, {Message: o, Messenger: l, themes: (k = Messenger.themes) != null ? k : {}});
    a.globalMessenger = window.Messenger = Messenger
}).call(this);
(function () {
    var a, d, e, c = {}.hasOwnProperty, b = function (f, i) {
        for (var h in i) {
            if (c.call(i, h)) {
                f[h] = i[h]
            }
        }
        function g() {
            this.constructor = f
        }

        g.prototype = i.prototype;
        f.prototype = new g();
        f.__super__ = i.prototype;
        return f
    };
    a = jQuery;
    e = '<div class="messenger-spinner">\n    <span class="messenger-spinner-side messenger-spinner-side-left">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n    <span class="messenger-spinner-side messenger-spinner-side-right">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n</div>';
    d = (function (f) {
        b(g, f);
        function g() {
            return g.__super__.constructor.apply(this, arguments)
        }

        g.prototype.template = function (i) {
            var h;
            h = g.__super__.template.apply(this, arguments);
            h.append(a(e));
            return h
        };
        return g
    })(window.Messenger.Message);
    window.Messenger.themes.flat = {Message: d}
}).call(this);