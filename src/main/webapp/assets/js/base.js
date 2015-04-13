/* jQuery v1.8.2 jquery.com | jquery.org/license */
(function (a, b) {
    function G(a) {
        var b = F[a] = {};
        return p.each(a.split(s), function (a, c) {
            b[c] = !0
        }), b
    }

    function J(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(I, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : +d + "" === d ? +d : H.test(d) ? p.parseJSON(d) : d
                } catch (f) {
                }
                p.data(a, c, d)
            } else {
                d = b
            }
        }
        return d
    }

    function K(a) {
        var b;
        for (b in a) {
            if (b === "data" && p.isEmptyObject(a[b])) {
                continue
            }
            if (b !== "toJSON") {
                return !1
            }
        }
        return !0
    }

    function ba() {
        return !1
    }

    function bb() {
        return !0
    }

    function bh(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function bi(a, b) {
        do {
            a = a[b]
        } while (a && a.nodeType !== 1);
        return a
    }

    function bj(a, b, c) {
        b = b || 0;
        if (p.isFunction(b)) {
            return p.grep(a, function (a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            })
        }
        if (b.nodeType) {
            return p.grep(a, function (a, d) {
                return a === b === c
            })
        }
        if (typeof b == "string") {
            var d = p.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (be.test(b)) {
                return p.filter(b, d, !c)
            }
            b = p.filter(b, d)
        }
        return p.grep(a, function (a, d) {
            return p.inArray(a, b) >= 0 === c
        })
    }

    function bk(a) {
        var b = bl.split("|"), c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }

    function bC(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }

    function bD(a, b) {
        if (b.nodeType !== 1 || !p.hasData(a)) {
            return
        }
        var c, d, e, f = p._data(a), g = p._data(b, f), h = f.events;
        if (h) {
            delete g.handle, g.events = {};
            for (c in h) {
                for (d = 0, e = h[c].length; d < e; d++) {
                    p.event.add(b, c, h[c][d])
                }
            }
        }
        g.data && (g.data = p.extend({}, g.data))
    }

    function bE(a, b) {
        var c;
        if (b.nodeType !== 1) {
            return
        }
        b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML), p.support.html5Clone && a.innerHTML && !p.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && bv.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text), b.removeAttribute(p.expando)
    }

    function bF(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bG(a) {
        bv.test(a.type) && (a.defaultChecked = a.checked)
    }

    function bY(a, b) {
        if (b in a) {
            return b
        }
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = bW.length;
        while (e--) {
            b = bW[e] + c;
            if (b in a) {
                return b
            }
        }
        return d
    }

    function bZ(a, b) {
        return a = b || a, p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
    }

    function b$(a, b) {
        var c, d, e = [], f = 0, g = a.length;
        for (; f < g; f++) {
            c = a[f];
            if (!c.style) {
                continue
            }
            e[f] = p._data(c, "olddisplay"), b ? (!e[f] && c.style.display === "none" && (c.style.display = ""), c.style.display === "" && bZ(c) && (e[f] = p._data(c, "olddisplay", cc(c.nodeName)))) : (d = bH(c, "display"), !e[f] && d !== "none" && p._data(c, "olddisplay", d))
        }
        for (f = 0; f < g; f++) {
            c = a[f];
            if (!c.style) {
                continue
            }
            if (!b || c.style.display === "none" || c.style.display === "") {
                c.style.display = b ? e[f] || "" : "none"
            }
        }
        return a
    }

    function b_(a, b, c) {
        var d = bP.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function ca(a, b, c, d) {
        var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0, f = 0;
        for (; e < 4; e += 2) {
            c === "margin" && (f += p.css(a, c + bV[e], !0)), d ? (c === "content" && (f -= parseFloat(bH(a, "padding" + bV[e])) || 0), c !== "margin" && (f -= parseFloat(bH(a, "border" + bV[e] + "Width")) || 0)) : (f += parseFloat(bH(a, "padding" + bV[e])) || 0, c !== "padding" && (f += parseFloat(bH(a, "border" + bV[e] + "Width")) || 0))
        }
        return f
    }

    function cb(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = !0, f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
        if (d <= 0 || d == null) {
            d = bH(a, b);
            if (d < 0 || d == null) {
                d = a.style[b]
            }
            if (bQ.test(d)) {
                return d
            }
            e = f && (p.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + ca(a, b, c || (f ? "border" : "content"), e) + "px"
    }

    function cc(a) {
        if (bS[a]) {
            return bS[a]
        }
        var b = p("<" + a + ">").appendTo(e.body), c = b.css("display");
        b.remove();
        if (c === "none" || c === "") {
            bI = e.body.appendChild(bI || p.extend(e.createElement("iframe"), {frameBorder: 0, width: 0, height: 0}));
            if (!bJ || !bI.createElement) {
                bJ = (bI.contentWindow || bI.contentDocument).document, bJ.write("<!doctype html><html><body>"), bJ.close()
            }
            b = bJ.body.appendChild(bJ.createElement(a)), c = bH(b, "display"), e.body.removeChild(bI)
        }
        return bS[a] = c, c
    }

    function ci(a, b, c, d) {
        var e;
        if (p.isArray(b)) {
            p.each(b, function (b, e) {
                c || ce.test(a) ? d(a, e) : ci(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
            })
        } else {
            if (!c && p.type(b) === "object") {
                for (e in b) {
                    ci(a + "[" + e + "]", b[e], c, d)
                }
            } else {
                d(a, b)
            }
        }
    }

    function cz(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            var d, e, f, g = b.toLowerCase().split(s), h = 0, i = g.length;
            if (p.isFunction(c)) {
                for (; h < i; h++) {
                    d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
                }
            }
        }
    }

    function cA(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === cv;
        for (; j < k && (l || !h); j++) {
            h = i[j](c, d, e), typeof h == "string" && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = cA(a, c, d, e, h, g)))
        }
        return(l || !h) && !g["*"] && (h = cA(a, c, d, e, "*", g)), h
    }

    function cB(a, c) {
        var d, e, f = p.ajaxSettings.flatOptions || {};
        for (d in c) {
            c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d])
        }
        e && p.extend(!0, a, e)
    }

    function cC(a, c, d) {
        var e, f, g, h, i = a.contents, j = a.dataTypes, k = a.responseFields;
        for (f in k) {
            f in d && (c[k[f]] = d[f])
        }
        while (j[0] === "*") {
            j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"))
        }
        if (e) {
            for (f in i) {
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
            }
        }
        if (j[0] in d) {
            g = j[0]
        } else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        if (g) {
            return g !== j[0] && j.unshift(g), d[g]
        }
    }

    function cD(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(), h = g[0], i = {}, j = 0;
        a.dataFilter && (b = a.dataFilter(b, a.dataType));
        if (g[1]) {
            for (c in a.converters) {
                i[c.toLowerCase()] = a.converters[c]
            }
        }
        for (; e = g[++j];) {
            if (e !== "*") {
                if (h !== "*" && h !== e) {
                    c = i[h + " " + e] || i["* " + e];
                    if (!c) {
                        for (d in i) {
                            f = d.split(" ");
                            if (f[1] === e) {
                                c = i[h + " " + f[0]] || i["* " + f[0]];
                                if (c) {
                                    c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                                    break
                                }
                            }
                        }
                    }
                    if (c !== !0) {
                        if (c && a["throws"]) {
                            b = c(b)
                        } else {
                            try {
                                b = c(b)
                            } catch (k) {
                                return{state: "parsererror", error: c ? k : "No conversion from " + h + " to " + e}
                            }
                        }
                    }
                }
                h = e
            }
        }
        return{state: "success", data: b}
    }

    function cL() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function cM() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function cU() {
        return setTimeout(function () {
            cN = b
        }, 0), cN = p.now()
    }

    function cV(a, b) {
        p.each(b, function (b, c) {
            var d = (cT[b] || []).concat(cT["*"]), e = 0, f = d.length;
            for (; e < f; e++) {
                if (d[e].call(a, b, c)) {
                    return
                }
            }
        })
    }

    function cW(a, b, c) {
        var d, e = 0, f = 0, g = cS.length, h = p.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            var b = cN || cU(), c = Math.max(0, j.startTime + j.duration - b), d = 1 - (c / j.duration || 0), e = 0, f = j.tweens.length;
            for (; e < f; e++) {
                j.tweens[e].run(d)
            }
            return h.notifyWith(a, [j, d, c]), d < 1 && f ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({elem: a, props: p.extend({}, b), opts: p.extend(!0, {specialEasing: {}}, c), originalProperties: b, originalOptions: c, startTime: cN || cU(), duration: c.duration, tweens: [], createTween: function (b, c, d) {
            var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
            return j.tweens.push(e), e
        }, stop: function (b) {
            var c = 0, d = b ? j.tweens.length : 0;
            for (; c < d; c++) {
                j.tweens[c].run(1)
            }
            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }}), k = j.props;
        cX(k, j.opts.specialEasing);
        for (; e < g; e++) {
            d = cS[e].call(j, a, k, j.opts);
            if (d) {
                return d
            }
        }
        return cV(j, k), p.isFunction(j.opts.start) && j.opts.start.call(a, j), p.fx.timer(p.extend(i, {anim: j, queue: j.opts.queue, elem: a})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function cX(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = p.camelCase(c), e = b[d], f = a[c], p.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = p.cssHooks[d];
            if (g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e)
                }
            } else {
                b[d] = e
            }
        }
    }

    function cY(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = a.style, n = {}, o = [], q = a.nodeType && bZ(a);
        c.queue || (j = p._queueHooks(a, "fx"), j.unqueued == null && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function () {
            j.unqueued || k()
        }), j.unqueued++, l.always(function () {
            l.always(function () {
                j.unqueued--, p.queue(a, "fx").length || j.empty.fire()
            })
        })), a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], p.css(a, "display") === "inline" && p.css(a, "float") === "none" && (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === "inline" ? m.display = "inline-block" : m.zoom = 1)), c.overflow && (m.overflow = "hidden", p.support.shrinkWrapBlocks || l.done(function () {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b) {
            f = b[d];
            if (cP.exec(f)) {
                delete b[d];
                if (f === (q ? "hide" : "show")) {
                    continue
                }
                o.push(d)
            }
        }
        g = o.length;
        if (g) {
            h = p._data(a, "fxshow") || p._data(a, "fxshow", {}), q ? p(a).show() : l.done(function () {
                p(a).hide()
            }), l.done(function () {
                var b;
                p.removeData(a, "fxshow", !0);
                for (b in n) {
                    p.style(a, b, n[b])
                }
            });
            for (d = 0; d < g; d++) {
                e = o[d], i = l.createTween(e, q ? h[e] : 0), n[e] = h[e] || p.style(a, e), e in h || (h[e] = i.start, q && (i.end = i.start, i.start = e === "width" || e === "height" ? 1 : 0))
            }
        }
    }

    function cZ(a, b, c, d, e) {
        return new cZ.prototype.init(a, b, c, d, e)
    }

    function c$(a, b) {
        var c, d = {height: a}, e = 0;
        b = b ? 1 : 0;
        for (; e < 4; e += 2 - b) {
            c = bV[e], d["margin" + c] = d["padding" + c] = a
        }
        return b && (d.opacity = d.width = a), d
    }

    function da(a) {
        return p.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    var c, d, e = a.document, f = a.location, g = a.navigator, h = a.jQuery, i = a.$, j = Array.prototype.push, k = Array.prototype.slice, l = Array.prototype.indexOf, m = Object.prototype.toString, n = Object.prototype.hasOwnProperty, o = String.prototype.trim, p = function (a, b) {
        return new p.fn.init(a, b, c)
    }, q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, r = /\S/, s = /\s+/, t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^[\],:{}\s]*$/, x = /(?:^|:|,)(?:\s*\[)+/g, y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, A = /^-ms-/, B = /-([\da-z])/gi, C = function (a, b) {
        return(b + "").toUpperCase()
    }, D = function () {
        e.addEventListener ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready()) : e.readyState === "complete" && (e.detachEvent("onreadystatechange", D), p.ready())
    }, E = {};
    p.fn = p.prototype = {constructor: p, init: function (a, c, d) {
        var f, g, h, i;
        if (!a) {
            return this
        }
        if (a.nodeType) {
            return this.context = this[0] = a, this.length = 1, this
        }
        if (typeof a == "string") {
            a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null, a, null] : f = u.exec(a);
            if (f && (f[1] || !c)) {
                if (f[1]) {
                    return c = c instanceof p ? c[0] : c, i = c && c.nodeType ? c.ownerDocument || c : e, a = p.parseHTML(f[1], i, !0), v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0), p.merge(this, a)
                }
                g = e.getElementById(f[2]);
                if (g && g.parentNode) {
                    if (g.id !== f[2]) {
                        return d.find(a)
                    }
                    this.length = 1, this[0] = g
                }
                return this.context = e, this.selector = a, this
            }
            return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
        }
        return p.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), p.makeArray(a, this))
    }, selector: "", jquery: "1.8.2", length: 0, size: function () {
        return this.length
    }, toArray: function () {
        return k.call(this)
    }, get: function (a) {
        return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
    }, pushStack: function (a, b, c) {
        var d = p.merge(this.constructor(), a);
        return d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
    }, each: function (a, b) {
        return p.each(this, a, b)
    }, ready: function (a) {
        return p.ready.promise().done(a), this
    }, eq: function (a) {
        return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, slice: function () {
        return this.pushStack(k.apply(this, arguments), "slice", k.call(arguments).join(","))
    }, map: function (a) {
        return this.pushStack(p.map(this, function (b, c) {
            return a.call(b, c, b)
        }))
    }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: j, sort: [].sort, splice: [].splice}, p.fn.init.prototype = p.fn, p.extend = p.fn.extend = function () {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        typeof h == "boolean" && (k = h, h = arguments[1] || {}, i = 2), typeof h != "object" && !p.isFunction(h) && (h = {}), j === i && (h = this, --i);
        for (; i < j; i++) {
            if ((a = arguments[i]) != null) {
                for (c in a) {
                    d = h[c], e = a[c];
                    if (h === e) {
                        continue
                    }
                    k && e && (p.isPlainObject(e) || (f = p.isArray(e))) ? (f ? (f = !1, g = d && p.isArray(d) ? d : []) : g = d && p.isPlainObject(d) ? d : {}, h[c] = p.extend(k, g, e)) : e !== b && (h[c] = e)
                }
            }
        }
        return h
    }, p.extend({noConflict: function (b) {
        return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p
    }, isReady: !1, readyWait: 1, holdReady: function (a) {
        a ? p.readyWait++ : p.ready(!0)
    }, ready: function (a) {
        if (a === !0 ? --p.readyWait : p.isReady) {
            return
        }
        if (!e.body) {
            return setTimeout(p.ready, 1)
        }
        p.isReady = !0;
        if (a !== !0 && --p.readyWait > 0) {
            return
        }
        d.resolveWith(e, [p]), p.fn.trigger && p(e).trigger("ready").off("ready")
    }, isFunction: function (a) {
        return p.type(a) === "function"
    }, isArray: Array.isArray || function (a) {
        return p.type(a) === "array"
    }, isWindow: function (a) {
        return a != null && a == a.window
    }, isNumeric: function (a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    }, type: function (a) {
        return a == null ? String(a) : E[m.call(a)] || "object"
    }, isPlainObject: function (a) {
        if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a)) {
            return !1
        }
        try {
            if (a.constructor && !n.call(a, "constructor") && !n.call(a.constructor.prototype, "isPrototypeOf")) {
                return !1
            }
        } catch (c) {
            return !1
        }
        var d;
        for (d in a) {
        }
        return d === b || n.call(a, d)
    }, isEmptyObject: function (a) {
        var b;
        for (b in a) {
            return !1
        }
        return !0
    }, error: function (a) {
        throw new Error(a)
    }, parseHTML: function (a, b, c) {
        var d;
        return !a || typeof a != "string" ? null : (typeof b == "boolean" && (c = b, b = 0), b = b || e, (d = v.exec(a)) ? [b.createElement(d[1])] : (d = p.buildFragment([a], b, c ? null : []), p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes)))
    }, parseJSON: function (b) {
        if (!b || typeof b != "string") {
            return null
        }
        b = p.trim(b);
        if (a.JSON && a.JSON.parse) {
            return a.JSON.parse(b)
        }
        if (w.test(b.replace(y, "@").replace(z, "]").replace(x, ""))) {
            return(new Function("return " + b))()
        }
        p.error("Invalid JSON: " + b)
    }, parseXML: function (c) {
        var d, e;
        if (!c || typeof c != "string") {
            return null
        }
        try {
            a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
        } catch (f) {
            d = b
        }
        return(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + c), d
    }, noop: function () {
    }, globalEval: function (b) {
        b && r.test(b) && (a.execScript || function (b) {
            a.eval.call(a, b)
        })(b)
    }, camelCase: function (a) {
        return a.replace(A, "ms-").replace(B, C)
    }, nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }, each: function (a, c, d) {
        var e, f = 0, g = a.length, h = g === b || p.isFunction(a);
        if (d) {
            if (h) {
                for (e in a) {
                    if (c.apply(a[e], d) === !1) {
                        break
                    }
                }
            } else {
                for (; f < g;) {
                    if (c.apply(a[f++], d) === !1) {
                        break
                    }
                }
            }
        } else {
            if (h) {
                for (e in a) {
                    if (c.call(a[e], e, a[e]) === !1) {
                        break
                    }
                }
            } else {
                for (; f < g;) {
                    if (c.call(a[f], f, a[f++]) === !1) {
                        break
                    }
                }
            }
        }
        return a
    }, trim: o && !o.call(" ") ? function (a) {
        return a == null ? "" : o.call(a)
    } : function (a) {
        return a == null ? "" : (a + "").replace(t, "")
    }, makeArray: function (a, b) {
        var c, d = b || [];
        return a != null && (c = p.type(a), a.length == null || c === "string" || c === "function" || c === "regexp" || p.isWindow(a) ? j.call(d, a) : p.merge(d, a)), d
    }, inArray: function (a, b, c) {
        var d;
        if (b) {
            if (l) {
                return l.call(b, a, c)
            }
            d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
            for (; c < d; c++) {
                if (c in b && b[c] === a) {
                    return c
                }
            }
        }
        return -1
    }, merge: function (a, c) {
        var d = c.length, e = a.length, f = 0;
        if (typeof d == "number") {
            for (; f < d; f++) {
                a[e++] = c[f]
            }
        } else {
            while (c[f] !== b) {
                a[e++] = c[f++]
            }
        }
        return a.length = e, a
    }, grep: function (a, b, c) {
        var d, e = [], f = 0, g = a.length;
        c = !!c;
        for (; f < g; f++) {
            d = !!b(a[f], f), c !== d && e.push(a[f])
        }
        return e
    }, map: function (a, c, d) {
        var e, f, g = [], h = 0, i = a.length, j = a instanceof p || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || p.isArray(a));
        if (j) {
            for (; h < i; h++) {
                e = c(a[h], h, d), e != null && (g[g.length] = e)
            }
        } else {
            for (f in a) {
                e = c(a[f], f, d), e != null && (g[g.length] = e)
            }
        }
        return g.concat.apply([], g)
    }, guid: 1, proxy: function (a, c) {
        var d, e, f;
        return typeof c == "string" && (d = a[c], c = a, a = d), p.isFunction(a) ? (e = k.call(arguments, 2), f = function () {
            return a.apply(c, e.concat(k.call(arguments)))
        }, f.guid = a.guid = a.guid || p.guid++, f) : b
    }, access: function (a, c, d, e, f, g, h) {
        var i, j = d == null, k = 0, l = a.length;
        if (d && typeof d == "object") {
            for (k in d) {
                p.access(a, c, k, d[k], 1, g, e)
            }
            f = 1
        } else {
            if (e !== b) {
                i = h === b && p.isFunction(e), j && (i ? (i = c, c = function (a, b, c) {
                    return i.call(p(a), c)
                }) : (c.call(a, e), c = null));
                if (c) {
                    for (; k < l; k++) {
                        c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h)
                    }
                }
                f = 1
            }
        }
        return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
    }, now: function () {
        return(new Date).getTime()
    }}), p.ready.promise = function (b) {
        if (!d) {
            d = p.Deferred();
            if (e.readyState === "complete") {
                setTimeout(p.ready, 1)
            } else {
                if (e.addEventListener) {
                    e.addEventListener("DOMContentLoaded", D, !1), a.addEventListener("load", p.ready, !1)
                } else {
                    e.attachEvent("onreadystatechange", D), a.attachEvent("onload", p.ready);
                    var c = !1;
                    try {
                        c = a.frameElement == null && e.documentElement
                    } catch (f) {
                    }
                    c && c.doScroll && function g() {
                        if (!p.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (a) {
                                return setTimeout(g, 50)
                            }
                            p.ready()
                        }
                    }()
                }
            }
        }
        return d.promise(b)
    }, p.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
        E["[object " + b + "]"] = b.toLowerCase()
    }), c = p(e);
    var F = {};
    p.Callbacks = function (a) {
        a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
        var c, d, e, f, g, h, i = [], j = !a.once && [], k = function (b) {
            c = a.memory && b, d = !0, h = f || 0, f = 0, g = i.length, e = !0;
            for (; i && h < g; h++) {
                if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            }
            e = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
        }, l = {add: function () {
            if (i) {
                var b = i.length;
                (function d(b) {
                    p.each(b, function (b, c) {
                        var e = p.type(c);
                        e === "function" && (!a.unique || !l.has(c)) ? i.push(c) : c && c.length && e !== "string" && d(c)
                    })
                })(arguments), e ? g = i.length : c && (f = b, k(c))
            }
            return this
        }, remove: function () {
            return i && p.each(arguments, function (a, b) {
                var c;
                while ((c = p.inArray(b, i, c)) > -1) {
                    i.splice(c, 1), e && (c <= g && g--, c <= h && h--)
                }
            }), this
        }, has: function (a) {
            return p.inArray(a, i) > -1
        }, empty: function () {
            return i = [], this
        }, disable: function () {
            return i = j = c = b, this
        }, disabled: function () {
            return !i
        }, lock: function () {
            return j = b, c || l.disable(), this
        }, locked: function () {
            return !j
        }, fireWith: function (a, b) {
            return b = b || [], b = [a, b.slice ? b.slice() : b], i && (!d || j) && (e ? j.push(b) : k(b)), this
        }, fire: function () {
            return l.fireWith(this, arguments), this
        }, fired: function () {
            return !!d
        }};
        return l
    }, p.extend({Deferred: function (a) {
        var b = [
            ["resolve", "done", p.Callbacks("once memory"), "resolved"],
            ["reject", "fail", p.Callbacks("once memory"), "rejected"],
            ["notify", "progress", p.Callbacks("memory")]
        ], c = "pending", d = {state: function () {
            return c
        }, always: function () {
            return e.done(arguments).fail(arguments), this
        }, then: function () {
            var a = arguments;
            return p.Deferred(function (c) {
                p.each(b, function (b, d) {
                    var f = d[0], g = a[b];
                    e[d[1]](p.isFunction(g) ? function () {
                        var a = g.apply(this, arguments);
                        a && p.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                    } : c[f])
                }), a = null
            }).promise()
        }, promise: function (a) {
            return a != null ? p.extend(a, d) : d
        }}, e = {};
        return d.pipe = d.then, p.each(b, function (a, f) {
            var g = f[2], h = f[3];
            d[f[1]] = g.add, h && g.add(function () {
                c = h
            }, b[a ^ 1][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
        }), d.promise(e), a && a.call(e, e), e
    }, when: function (a) {
        var b = 0, c = k.call(arguments), d = c.length, e = d !== 1 || a && p.isFunction(a.promise) ? d : 0, f = e === 1 ? a : p.Deferred(), g = function (a, b, c) {
            return function (d) {
                b[a] = this, c[a] = arguments.length > 1 ? k.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
            }
        }, h, i, j;
        if (d > 1) {
            h = new Array(d), i = new Array(d), j = new Array(d);
            for (; b < d; b++) {
                c[b] && p.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e
            }
        }
        return e || f.resolveWith(j, c), f.promise()
    }}), p.support = function () {
        var b, c, d, f, g, h, i, j, k, l, m, n = e.createElement("div");
        n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], d.style.cssText = "top:1px;float:left;opacity:.5";
        if (!c || !c.length) {
            return{}
        }
        f = e.createElement("select"), g = f.appendChild(e.createElement("option")), h = n.getElementsByTagName("input")[0], b = {leadingWhitespace: n.firstChild.nodeType === 3, tbody: !n.getElementsByTagName("tbody").length, htmlSerialize: !!n.getElementsByTagName("link").length, style: /top/.test(d.getAttribute("style")), hrefNormalized: d.getAttribute("href") === "/a", opacity: /^0.5/.test(d.style.opacity), cssFloat: !!d.style.cssFloat, checkOn: h.value === "on", optSelected: g.selected, getSetAttribute: n.className !== "t", enctype: !!e.createElement("form").enctype, html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", boxModel: e.compatMode === "CSS1Compat", submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1}, h.checked = !0, b.noCloneChecked = h.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled;
        try {
            delete n.test
        } catch (o) {
            b.deleteExpando = !1
        }
        !n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", m = function () {
            b.noCloneEvent = !1
        }), n.cloneNode(!0).fireEvent("onclick"), n.detachEvent("onclick", m)), h = e.createElement("input"), h.value = "t", h.setAttribute("type", "radio"), b.radioValue = h.value === "t", h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), n.appendChild(h), i = e.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = h.checked, i.removeChild(h), i.appendChild(n);
        if (n.attachEvent) {
            for (k in {submit: !0, change: !0, focusin: !0}) {
                j = "on" + k, l = j in n, l || (n.setAttribute(j, "return;"), l = typeof n[j] == "function"), b[k + "Bubbles"] = l
            }
        }
        return p(function () {
            var c, d, f, g, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;", i = e.getElementsByTagName("body")[0];
            if (!i) {
                return
            }
            c = e.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", i.insertBefore(c, i.firstChild), d = e.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", b.reliableHiddenOffsets = l && f[0].offsetHeight === 0, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = d.offsetWidth === 4, b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1, a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== "1%", b.boxSizingReliable = (a.getComputedStyle(d, null) || {width: "4px"}).width === "4px", g = e.createElement("div"), g.style.cssText = d.style.cssText = h, g.style.marginRight = g.style.width = "0", d.style.width = "1px", d.appendChild(g), b.reliableMarginRight = !parseFloat((a.getComputedStyle(g, null) || {}).marginRight)), typeof d.style.zoom != "undefined" && (d.innerHTML = "", d.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = d.offsetWidth !== 3, c.style.zoom = 1), i.removeChild(c), c = d = f = g = null
        }), i.removeChild(n), c = d = f = g = h = i = n = null, b
    }();
    var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, I = /([A-Z])/g;
    p.extend({cache: {}, deletedIds: [], uuid: 0, expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function (a) {
        return a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando], !!a && !K(a)
    }, data: function (a, c, d, e) {
        if (!p.acceptData(a)) {
            return
        }
        var f, g, h = p.expando, i = typeof c == "string", j = a.nodeType, k = j ? p.cache : a, l = j ? a[h] : a[h] && h;
        if ((!l || !k[l] || !e && !k[l].data) && i && d === b) {
            return
        }
        l || (j ? a[h] = l = p.deletedIds.pop() || p.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = p.noop));
        if (typeof c == "object" || typeof c == "function") {
            e ? k[l] = p.extend(k[l], c) : k[l].data = p.extend(k[l].data, c)
        }
        return f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[p.camelCase(c)] = d), i ? (g = f[c], g == null && (g = f[p.camelCase(c)])) : g = f, g
    }, removeData: function (a, b, c) {
        if (!p.acceptData(a)) {
            return
        }
        var d, e, f, g = a.nodeType, h = g ? p.cache : a, i = g ? a[p.expando] : p.expando;
        if (!h[i]) {
            return
        }
        if (b) {
            d = c ? h[i] : h[i].data;
            if (d) {
                p.isArray(b) || (b in d ? b = [b] : (b = p.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                for (e = 0, f = b.length; e < f; e++) {
                    delete d[b[e]]
                }
                if (!(c ? K : p.isEmptyObject)(d)) {
                    return
                }
            }
        }
        if (!c) {
            delete h[i].data;
            if (!K(h[i])) {
                return
            }
        }
        g ? p.cleanData([a], !0) : p.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null
    }, _data: function (a, b, c) {
        return p.data(a, b, c, !0)
    }, acceptData: function (a) {
        var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
        return !b || b !== !0 && a.getAttribute("classid") === b
    }}), p.fn.extend({data: function (a, c) {
        var d, e, f, g, h, i = this[0], j = 0, k = null;
        if (a === b) {
            if (this.length) {
                k = p.data(i);
                if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
                    f = i.attributes;
                    for (h = f.length; j < h; j++) {
                        g = f[j].name, g.indexOf("data-") || (g = p.camelCase(g.substring(5)), J(i, g, k[g]))
                    }
                    p._data(i, "parsedAttrs", !0)
                }
            }
            return k
        }
        return typeof a == "object" ? this.each(function () {
            p.data(this, a)
        }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", p.access(this, function (c) {
            if (c === b) {
                return k = this.triggerHandler("getData" + e, [d[0]]), k === b && i && (k = p.data(i, a), k = J(i, a, k)), k === b && d[1] ? this.data(d[0]) : k
            }
            d[1] = c, this.each(function () {
                var b = p(this);
                b.triggerHandler("setData" + e, d), p.data(this, a, c), b.triggerHandler("changeData" + e, d)
            })
        }, null, c, arguments.length > 1, null, !1))
    }, removeData: function (a) {
        return this.each(function () {
            p.removeData(this, a)
        })
    }}), p.extend({queue: function (a, b, c) {
        var d;
        if (a) {
            return b = (b || "fx") + "queue", d = p._data(a, b), c && (!d || p.isArray(c) ? d = p._data(a, b, p.makeArray(c)) : d.push(c)), d || []
        }
    }, dequeue: function (a, b) {
        b = b || "fx";
        var c = p.queue(a, b), d = c.length, e = c.shift(), f = p._queueHooks(a, b), g = function () {
            p.dequeue(a, b)
        };
        e === "inprogress" && (e = c.shift(), d--), e && (b === "fx" && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    }, _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return p._data(a, c) || p._data(a, c, {empty: p.Callbacks("once memory").add(function () {
            p.removeData(a, b + "queue", !0), p.removeData(a, c, !0)
        })})
    }}), p.fn.extend({queue: function (a, c) {
        var d = 2;
        return typeof a != "string" && (c = a, a = "fx", d--), arguments.length < d ? p.queue(this[0], a) : c === b ? this : this.each(function () {
            var b = p.queue(this, a, c);
            p._queueHooks(this, a), a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a)
        })
    }, dequeue: function (a) {
        return this.each(function () {
            p.dequeue(this, a)
        })
    }, delay: function (a, b) {
        return a = p.fx ? p.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, clearQueue: function (a) {
        return this.queue(a || "fx", [])
    }, promise: function (a, c) {
        var d, e = 1, f = p.Deferred(), g = this, h = this.length, i = function () {
            --e || f.resolveWith(g, [g])
        };
        typeof a != "string" && (c = a, a = b), a = a || "fx";
        while (h--) {
            d = p._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i))
        }
        return i(), f.promise(c)
    }});
    var L, M, N, O = /[\t\r\n]/g, P = /\r/g, Q = /^(?:button|input)$/i, R = /^(?:button|input|object|select|textarea)$/i, S = /^a(?:rea|)$/i, T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, U = p.support.getSetAttribute;
    p.fn.extend({attr: function (a, b) {
        return p.access(this, p.attr, a, b, arguments.length > 1)
    }, removeAttr: function (a) {
        return this.each(function () {
            p.removeAttr(this, a)
        })
    }, prop: function (a, b) {
        return p.access(this, p.prop, a, b, arguments.length > 1)
    }, removeProp: function (a) {
        return a = p.propFix[a] || a, this.each(function () {
            try {
                this[a] = b, delete this[a]
            } catch (c) {
            }
        })
    }, addClass: function (a) {
        var b, c, d, e, f, g, h;
        if (p.isFunction(a)) {
            return this.each(function (b) {
                p(this).addClass(a.call(this, b, this.className))
            })
        }
        if (a && typeof a == "string") {
            b = a.split(s);
            for (c = 0, d = this.length; c < d; c++) {
                e = this[c];
                if (e.nodeType === 1) {
                    if (!e.className && b.length === 1) {
                        e.className = a
                    } else {
                        f = " " + e.className + " ";
                        for (g = 0, h = b.length; g < h; g++) {
                            f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ")
                        }
                        e.className = p.trim(f)
                    }
                }
            }
        }
        return this
    }, removeClass: function (a) {
        var c, d, e, f, g, h, i;
        if (p.isFunction(a)) {
            return this.each(function (b) {
                p(this).removeClass(a.call(this, b, this.className))
            })
        }
        if (a && typeof a == "string" || a === b) {
            c = (a || "").split(s);
            for (h = 0, i = this.length; h < i; h++) {
                e = this[h];
                if (e.nodeType === 1 && e.className) {
                    d = (" " + e.className + " ").replace(O, " ");
                    for (f = 0, g = c.length; f < g; f++) {
                        while (d.indexOf(" " + c[f] + " ") >= 0) {
                            d = d.replace(" " + c[f] + " ", " ")
                        }
                    }
                    e.className = a ? p.trim(d) : ""
                }
            }
        }
        return this
    }, toggleClass: function (a, b) {
        var c = typeof a, d = typeof b == "boolean";
        return p.isFunction(a) ? this.each(function (c) {
            p(this).toggleClass(a.call(this, c, this.className, b), b)
        }) : this.each(function () {
            if (c === "string") {
                var e, f = 0, g = p(this), h = b, i = a.split(s);
                while (e = i[f++]) {
                    h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e)
                }
            } else {
                if (c === "undefined" || c === "boolean") {
                    this.className && p._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || ""
                }
            }
        })
    }, hasClass: function (a) {
        var b = " " + a + " ", c = 0, d = this.length;
        for (; c < d; c++) {
            if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(O, " ").indexOf(b) >= 0) {
                return !0
            }
        }
        return !1
    }, val: function (a) {
        var c, d, e, f = this[0];
        if (!arguments.length) {
            if (f) {
                return c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, typeof d == "string" ? d.replace(P, "") : d == null ? "" : d)
            }
            return
        }
        return e = p.isFunction(a), this.each(function (d) {
            var f, g = p(this);
            if (this.nodeType !== 1) {
                return
            }
            e ? f = a.call(this, d, g.val()) : f = a, f == null ? f = "" : typeof f == "number" ? f += "" : p.isArray(f) && (f = p.map(f, function (a) {
                return a == null ? "" : a + ""
            })), c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
            if (!c || !("set" in c) || c.set(this, f, "value") === b) {
                this.value = f
            }
        })
    }}), p.extend({valHooks: {option: {get: function (a) {
        var b = a.attributes.value;
        return !b || b.specified ? a.value : a.text
    }}, select: {get: function (a) {
        var b, c, d, e, f = a.selectedIndex, g = [], h = a.options, i = a.type === "select-one";
        if (f < 0) {
            return null
        }
        c = i ? f : 0, d = i ? f + 1 : h.length;
        for (; c < d; c++) {
            e = h[c];
            if (e.selected && (p.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !p.nodeName(e.parentNode, "optgroup"))) {
                b = p(e).val();
                if (i) {
                    return b
                }
                g.push(b)
            }
        }
        return i && !g.length && h.length ? p(h[f]).val() : g
    }, set: function (a, b) {
        var c = p.makeArray(b);
        return p(a).find("option").each(function () {
            this.selected = p.inArray(p(this).val(), c) >= 0
        }), c.length || (a.selectedIndex = -1), c
    }}}, attrFn: {}, attr: function (a, c, d, e) {
        var f, g, h, i = a.nodeType;
        if (!a || i === 3 || i === 8 || i === 2) {
            return
        }
        if (e && p.isFunction(p.fn[c])) {
            return p(a)[c](d)
        }
        if (typeof a.getAttribute == "undefined") {
            return p.prop(a, c, d)
        }
        h = i !== 1 || !p.isXMLDoc(a), h && (c = c.toLowerCase(), g = p.attrHooks[c] || (T.test(c) ? M : L));
        if (d !== b) {
            if (d === null) {
                p.removeAttr(a, c);
                return
            }
            return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d)
        }
        return g && "get" in g && h && (f = g.get(a, c)) !== null ? f : (f = a.getAttribute(c), f === null ? b : f)
    }, removeAttr: function (a, b) {
        var c, d, e, f, g = 0;
        if (b && a.nodeType === 1) {
            d = b.split(s);
            for (; g < d.length; g++) {
                e = d[g], e && (c = p.propFix[e] || e, f = T.test(e), f || p.attr(a, e, ""), a.removeAttribute(U ? e : c), f && c in a && (a[c] = !1))
            }
        }
    }, attrHooks: {type: {set: function (a, b) {
        if (Q.test(a.nodeName) && a.parentNode) {
            p.error("type property can't be changed")
        } else {
            if (!p.support.radioValue && b === "radio" && p.nodeName(a, "input")) {
                var c = a.value;
                return a.setAttribute("type", b), c && (a.value = c), b
            }
        }
    }}, value: {get: function (a, b) {
        return L && p.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null
    }, set: function (a, b, c) {
        if (L && p.nodeName(a, "button")) {
            return L.set(a, b, c)
        }
        a.value = b
    }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function (a, c, d) {
        var e, f, g, h = a.nodeType;
        if (!a || h === 3 || h === 8 || h === 2) {
            return
        }
        return g = h !== 1 || !p.isXMLDoc(a), g && (c = p.propFix[c] || c, f = p.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null ? e : a[c]
    }, propHooks: {tabIndex: {get: function (a) {
        var c = a.getAttributeNode("tabindex");
        return c && c.specified ? parseInt(c.value, 10) : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b
    }}}}), M = {get: function (a, c) {
        var d, e = p.prop(a, c);
        return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
    }, set: function (a, b, c) {
        var d;
        return b === !1 ? p.removeAttr(a, c) : (d = p.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
    }}, U || (N = {name: !0, id: !0, coords: !0}, L = p.valHooks.button = {get: function (a, c) {
        var d;
        return d = a.getAttributeNode(c), d && (N[c] ? d.value !== "" : d.specified) ? d.value : b
    }, set: function (a, b, c) {
        var d = a.getAttributeNode(c);
        return d || (d = e.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
    }}, p.each(["width", "height"], function (a, b) {
        p.attrHooks[b] = p.extend(p.attrHooks[b], {set: function (a, c) {
            if (c === "") {
                return a.setAttribute(b, "auto"), c
            }
        }})
    }), p.attrHooks.contenteditable = {get: L.get, set: function (a, b, c) {
        b === "" && (b = "false"), L.set(a, b, c)
    }}), p.support.hrefNormalized || p.each(["href", "src", "width", "height"], function (a, c) {
        p.attrHooks[c] = p.extend(p.attrHooks[c], {get: function (a) {
            var d = a.getAttribute(c, 2);
            return d === null ? b : d
        }})
    }), p.support.style || (p.attrHooks.style = {get: function (a) {
        return a.style.cssText.toLowerCase() || b
    }, set: function (a, b) {
        return a.style.cssText = b + ""
    }}), p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, {get: function (a) {
        var b = a.parentNode;
        return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
    }})), p.support.enctype || (p.propFix.enctype = "encoding"), p.support.checkOn || p.each(["radio", "checkbox"], function () {
        p.valHooks[this] = {get: function (a) {
            return a.getAttribute("value") === null ? "on" : a.value
        }}
    }), p.each(["radio", "checkbox"], function () {
        p.valHooks[this] = p.extend(p.valHooks[this], {set: function (a, b) {
            if (p.isArray(b)) {
                return a.checked = p.inArray(p(a).val(), b) >= 0
            }
        }})
    });
    var V = /^(?:textarea|input|select)$/i, W = /^([^\.]*|)(?:\.(.+)|)$/, X = /(?:^|\s)hover(\.\S+|)\b/, Y = /^key/, Z = /^(?:mouse|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = function (a) {
        return p.event.special.hover ? a : a.replace(X, "mouseenter$1 mouseleave$1")
    };
    p.event = {add: function (a, c, d, e, f) {
        var g, h, i, j, k, l, m, n, o, q, r;
        if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a))) {
            return
        }
        d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = p.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function (a) {
            return typeof p != "undefined" && (!a || p.event.triggered !== a.type) ? p.event.dispatch.apply(h.elem, arguments) : b
        }, h.elem = a), c = p.trim(_(c)).split(" ");
        for (j = 0; j < c.length; j++) {
            k = W.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), r = p.event.special[l] || {}, l = (f ? r.delegateType : r.bindType) || l, r = p.event.special[l] || {}, n = p.extend({type: l, origType: k[1], data: e, handler: d, guid: d.guid, selector: f, needsContext: f && p.expr.match.needsContext.test(f), namespace: m.join(".")}, o), q = i[l];
            if (!q) {
                q = i[l] = [], q.delegateCount = 0;
                if (!r.setup || r.setup.call(a, e, m, h) === !1) {
                    a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
                }
            }
            r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? q.splice(q.delegateCount++, 0, n) : q.push(n), p.event.global[l] = !0
        }
        a = null
    }, global: {}, remove: function (a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, q, r = p.hasData(a) && p._data(a);
        if (!r || !(m = r.events)) {
            return
        }
        b = p.trim(_(b || "")).split(" ");
        for (f = 0; f < b.length; f++) {
            g = W.exec(b[f]) || [], h = i = g[1], j = g[2];
            if (!h) {
                for (h in m) {
                    p.event.remove(a, h + b[f], c, d, !0)
                }
                continue
            }
            n = p.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            for (l = 0; l < o.length; l++) {
                q = o[l], (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || d === "**" && q.selector) && (o.splice(l--, 1), q.selector && o.delegateCount--, n.remove && n.remove.call(a, q))
            }
            o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle), delete m[h])
        }
        p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0))
    }, customEvent: {getData: !0, setData: !0, changeData: !0}, trigger: function (c, d, f, g) {
        if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
            var h, i, j, k, l, m, n, o, q, r, s = c.type || c, t = [];
            if ($.test(s + p.event.triggered)) {
                return
            }
            s.indexOf("!") >= 0 && (s = s.slice(0, -1), i = !0), s.indexOf(".") >= 0 && (t = s.split("."), s = t.shift(), t.sort());
            if ((!f || p.event.customEvent[s]) && !p.event.global[s]) {
                return
            }
            c = typeof c == "object" ? c[p.expando] ? c : new p.Event(s, c) : new p.Event(s), c.type = s, c.isTrigger = !0, c.exclusive = i, c.namespace = t.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, m = s.indexOf(":") < 0 ? "on" + s : "";
            if (!f) {
                h = p.cache;
                for (j in h) {
                    h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0)
                }
                return
            }
            c.result = b, c.target || (c.target = f), d = d != null ? p.makeArray(d) : [], d.unshift(c), n = p.event.special[s] || {};
            if (n.trigger && n.trigger.apply(f, d) === !1) {
                return
            }
            q = [
                [f, n.bindType || s]
            ];
            if (!g && !n.noBubble && !p.isWindow(f)) {
                r = n.delegateType || s, k = $.test(r + s) ? f : f.parentNode;
                for (l = f; k; k = k.parentNode) {
                    q.push([k, r]), l = k
                }
                l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r])
            }
            for (j = 0; j < q.length && !c.isPropagationStopped(); j++) {
                k = q[j][0], c.type = q[j][1], o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle"), o && o.apply(k, d), o = m && k[m], o && p.acceptData(k) && o.apply && o.apply(k, d) === !1 && c.preventDefault()
            }
            return c.type = s, !g && !c.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, d) === !1) && (s !== "click" || !p.nodeName(f, "a")) && p.acceptData(f) && m && f[s] && (s !== "focus" && s !== "blur" || c.target.offsetWidth !== 0) && !p.isWindow(f) && (l = f[m], l && (f[m] = null), p.event.triggered = s, f[s](), p.event.triggered = b, l && (f[m] = l)), c.result
        }
        return
    }, dispatch: function (c) {
        c = p.event.fix(c || a.event);
        var d, e, f, g, h, i, j, l, m, n, o = (p._data(this, "events") || {})[c.type] || [], q = o.delegateCount, r = k.call(arguments), s = !c.exclusive && !c.namespace, t = p.event.special[c.type] || {}, u = [];
        r[0] = c, c.delegateTarget = this;
        if (t.preDispatch && t.preDispatch.call(this, c) === !1) {
            return
        }
        if (q && (!c.button || c.type !== "click")) {
            for (f = c.target; f != this; f = f.parentNode || this) {
                if (f.disabled !== !0 || c.type !== "click") {
                    h = {}, j = [];
                    for (d = 0; d < q; d++) {
                        l = o[d], m = l.selector, h[m] === b && (h[m] = l.needsContext ? p(m, this).index(f) >= 0 : p.find(m, this, null, [f]).length), h[m] && j.push(l)
                    }
                    j.length && u.push({elem: f, matches: j})
                }
            }
        }
        o.length > q && u.push({elem: this, matches: o.slice(q)});
        for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
            i = u[d], c.currentTarget = i.elem;
            for (e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) {
                l = i.matches[e];
                if (s || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) {
                    c.data = l.data, c.handleObj = l, g = ((p.event.special[l.origType] || {}).handle || l.handler).apply(i.elem, r), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation()))
                }
            }
        }
        return t.postDispatch && t.postDispatch.call(this, c), c.result
    }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, c) {
        var d, f, g, h = c.button, i = c.fromElement;
        return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || e, f = d.documentElement, g = d.body, a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0), a
    }}, fix: function (a) {
        if (a[p.expando]) {
            return a
        }
        var b, c, d = a, f = p.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props) : this.props;
        a = p.Event(d);
        for (b = g.length; b;) {
            c = g[--b], a[c] = d[c]
        }
        return a.target || (a.target = d.srcElement || e), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, f.filter ? f.filter(a, d) : a
    }, special: {load: {noBubble: !0}, focus: {delegateType: "focusin"}, blur: {delegateType: "focusout"}, beforeunload: {setup: function (a, b, c) {
        p.isWindow(this) && (this.onbeforeunload = c)
    }, teardown: function (a, b) {
        this.onbeforeunload === b && (this.onbeforeunload = null)
    }}}, simulate: function (a, b, c, d) {
        var e = p.extend(new p.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
        d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }}, p.event.handle = p.event.dispatch, p.removeEvent = e.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c))
    }, p.Event = function (a, b) {
        if (this instanceof p.Event) {
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? bb : ba) : this.type = a, b && p.extend(this, b), this.timeStamp = a && a.timeStamp || p.now(), this[p.expando] = !0
        } else {
            return new p.Event(a, b)
        }
    }, p.Event.prototype = {preventDefault: function () {
        this.isDefaultPrevented = bb;
        var a = this.originalEvent;
        if (!a) {
            return
        }
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }, stopPropagation: function () {
        this.isPropagationStopped = bb;
        var a = this.originalEvent;
        if (!a) {
            return
        }
        a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = bb, this.stopPropagation()
    }, isDefaultPrevented: ba, isPropagationStopped: ba, isImmediatePropagationStopped: ba}, p.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        p.event.special[a] = {delegateType: b, bindType: b, handle: function (a) {
            var c, d = this, e = a.relatedTarget, f = a.handleObj, g = f.selector;
            if (!e || e !== d && !p.contains(d, e)) {
                a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b
            }
            return c
        }}
    }), p.support.submitBubbles || (p.event.special.submit = {setup: function () {
        if (p.nodeName(this, "form")) {
            return !1
        }
        p.event.add(this, "click._submit keypress._submit", function (a) {
            var c = a.target, d = p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
            d && !p._data(d, "_submit_attached") && (p.event.add(d, "submit._submit", function (a) {
                a._submit_bubble = !0
            }), p._data(d, "_submit_attached", !0))
        })
    }, postDispatch: function (a) {
        a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && p.event.simulate("submit", this.parentNode, a, !0))
    }, teardown: function () {
        if (p.nodeName(this, "form")) {
            return !1
        }
        p.event.remove(this, "._submit")
    }}), p.support.changeBubbles || (p.event.special.change = {setup: function () {
        if (V.test(this.nodeName)) {
            if (this.type === "checkbox" || this.type === "radio") {
                p.event.add(this, "propertychange._change", function (a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), p.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, a, !0)
                })
            }
            return !1
        }
        p.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;
            V.test(b.nodeName) && !p._data(b, "_change_attached") && (p.event.add(b, "change._change", function (a) {
                this.parentNode && !a.isSimulated && !a.isTrigger && p.event.simulate("change", this.parentNode, a, !0)
            }), p._data(b, "_change_attached", !0))
        })
    }, handle: function (a) {
        var b = a.target;
        if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
            return a.handleObj.handler.apply(this, arguments)
        }
    }, teardown: function () {
        return p.event.remove(this, "._change"), !V.test(this.nodeName)
    }}), p.support.focusinBubbles || p.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = 0, d = function (a) {
            p.event.simulate(b, a.target, p.event.fix(a), !0)
        };
        p.event.special[b] = {setup: function () {
            c++ === 0 && e.addEventListener(a, d, !0)
        }, teardown: function () {
            --c === 0 && e.removeEventListener(a, d, !0)
        }}
    }), p.fn.extend({on: function (a, c, d, e, f) {
        var g, h;
        if (typeof a == "object") {
            typeof c != "string" && (d = d || c, c = b);
            for (h in a) {
                this.on(h, c, d, a[h], f)
            }
            return this
        }
        d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
        if (e === !1) {
            e = ba
        } else {
            if (!e) {
                return this
            }
        }
        return f === 1 && (g = e, e = function (a) {
            return p().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = p.guid++)), this.each(function () {
            p.event.add(this, a, e, d, c)
        })
    }, one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1)
    }, off: function (a, c, d) {
        var e, f;
        if (a && a.preventDefault && a.handleObj) {
            return e = a.handleObj, p(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this
        }
        if (typeof a == "object") {
            for (f in a) {
                this.off(f, c, a[f])
            }
            return this
        }
        if (c === !1 || typeof c == "function") {
            d = c, c = b
        }
        return d === !1 && (d = ba), this.each(function () {
            p.event.remove(this, a, d, c)
        })
    }, bind: function (a, b, c) {
        return this.on(a, null, b, c)
    }, unbind: function (a, b) {
        return this.off(a, null, b)
    }, live: function (a, b, c) {
        return p(this.context).on(a, this.selector, b, c), this
    }, die: function (a, b) {
        return p(this.context).off(a, this.selector || "**", b), this
    }, delegate: function (a, b, c, d) {
        return this.on(b, a, c, d)
    }, undelegate: function (a, b, c) {
        return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c)
    }, trigger: function (a, b) {
        return this.each(function () {
            p.event.trigger(a, b, this)
        })
    }, triggerHandler: function (a, b) {
        if (this[0]) {
            return p.event.trigger(a, b, this[0], !0)
        }
    }, toggle: function (a) {
        var b = arguments, c = a.guid || p.guid++, d = 0, e = function (c) {
            var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
            return p._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
        };
        e.guid = c;
        while (d < b.length) {
            b[d++].guid = c
        }
        return this.click(e)
    }, hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    }}), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        p.fn[b] = function (a, c) {
            return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks), Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks)
    }), function (a, b) {
        function bc(a, b, c, d) {
            c = c || [], b = b || r;
            var e, f, i, j, k = b.nodeType;
            if (!a || typeof a != "string") {
                return c
            }
            if (k !== 1 && k !== 9) {
                return[]
            }
            i = g(b);
            if (!i && !d) {
                if (e = P.exec(a)) {
                    if (j = e[1]) {
                        if (k === 9) {
                            f = b.getElementById(j);
                            if (!f || !f.parentNode) {
                                return c
                            }
                            if (f.id === j) {
                                return c.push(f), c
                            }
                        } else {
                            if (b.ownerDocument && (f = b.ownerDocument.getElementById(j)) && h(b, f) && f.id === j) {
                                return c.push(f), c
                            }
                        }
                    } else {
                        if (e[2]) {
                            return w.apply(c, x.call(b.getElementsByTagName(a), 0)), c
                        }
                        if ((j = e[3]) && _ && b.getElementsByClassName) {
                            return w.apply(c, x.call(b.getElementsByClassName(j), 0)), c
                        }
                    }
                }
            }
            return bp(a.replace(L, "$1"), b, c, d, i)
        }

        function bd(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return c === "input" && b.type === a
            }
        }

        function be(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return(c === "input" || c === "button") && b.type === a
            }
        }

        function bf(a) {
            return z(function (b) {
                return b = +b, z(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    }
                })
            })
        }

        function bg(a, b, c) {
            if (a === b) {
                return c
            }
            var d = a.nextSibling;
            while (d) {
                if (d === b) {
                    return -1
                }
                d = d.nextSibling
            }
            return 1
        }

        function bh(a, b) {
            var c, d, f, g, h, i, j, k = C[o][a];
            if (k) {
                return b ? 0 : k.slice(0)
            }
            h = a, i = [], j = e.preFilter;
            while (h) {
                if (!c || (d = M.exec(h))) {
                    d && (h = h.slice(d[0].length)), i.push(f = [])
                }
                c = !1;
                if (d = N.exec(h)) {
                    f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = d[0].replace(L, " ")
                }
                for (g in e.filter) {
                    (d = W[g].exec(h)) && (!j[g] || (d = j[g](d, r, !0))) && (f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = g, c.matches = d)
                }
                if (!c) {
                    break
                }
            }
            return b ? h.length : h ? bc.error(a) : C(a, i).slice(0)
        }

        function bi(a, b, d) {
            var e = b.dir, f = d && b.dir === "parentNode", g = u++;
            return b.first ? function (b, c, d) {
                while (b = b[e]) {
                    if (f || b.nodeType === 1) {
                        return a(b, c, d)
                    }
                }
            } : function (b, d, h) {
                if (!h) {
                    var i, j = t + " " + g + " ", k = j + c;
                    while (b = b[e]) {
                        if (f || b.nodeType === 1) {
                            if ((i = b[o]) === k) {
                                return b.sizset
                            }
                            if (typeof i == "string" && i.indexOf(j) === 0) {
                                if (b.sizset) {
                                    return b
                                }
                            } else {
                                b[o] = k;
                                if (a(b, d, h)) {
                                    return b.sizset = !0, b
                                }
                                b.sizset = !1
                            }
                        }
                    }
                } else {
                    while (b = b[e]) {
                        if (f || b.nodeType === 1) {
                            if (a(b, d, h)) {
                                return b
                            }
                        }
                    }
                }
            }
        }

        function bj(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return !1
                    }
                }
                return !0
            } : a[0]
        }

        function bk(a, b, c, d, e) {
            var f, g = [], h = 0, i = a.length, j = b != null;
            for (; h < i; h++) {
                if (f = a[h]) {
                    if (!c || c(f, d, e)) {
                        g.push(f), j && b.push(h)
                    }
                }
            }
            return g
        }

        function bl(a, b, c, d, e, f) {
            return d && !d[o] && (d = bl(d)), e && !e[o] && (e = bl(e, f)), z(function (f, g, h, i) {
                if (f && e) {
                    return
                }
                var j, k, l, m = [], n = [], o = g.length, p = f || bo(b || "*", h.nodeType ? [h] : h, [], f), q = a && (f || !b) ? bk(p, m, a, h, i) : p, r = c ? e || (f ? a : o || d) ? [] : g : q;
                c && c(q, r, h, i);
                if (d) {
                    l = bk(r, n), d(l, [], h, i), j = l.length;
                    while (j--) {
                        if (k = l[j]) {
                            r[n[j]] = !(q[n[j]] = k)
                        }
                    }
                }
                if (f) {
                    j = a && r.length;
                    while (j--) {
                        if (k = r[j]) {
                            f[m[j]] = !(g[m[j]] = k)
                        }
                    }
                } else {
                    r = bk(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : w.apply(g, r)
                }
            })
        }

        function bm(a) {
            var b, c, d, f = a.length, g = e.relative[a[0].type], h = g || e.relative[" "], i = g ? 1 : 0, j = bi(function (a) {
                return a === b
            }, h, !0), k = bi(function (a) {
                return y.call(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                return !g && (d || c !== l) || ((b = c).nodeType ? j(a, c, d) : k(a, c, d))
            }];
            for (; i < f; i++) {
                if (c = e.relative[a[i].type]) {
                    m = [bi(bj(m), c)]
                } else {
                    c = e.filter[a[i].type].apply(null, a[i].matches);
                    if (c[o]) {
                        d = ++i;
                        for (; d < f; d++) {
                            if (e.relative[a[d].type]) {
                                break
                            }
                        }
                        return bl(i > 1 && bj(m), i > 1 && a.slice(0, i - 1).join("").replace(L, "$1"), c, i < d && bm(a.slice(i, d)), d < f && bm(a = a.slice(d)), d < f && a.join(""))
                    }
                    m.push(c)
                }
            }
            return bj(m)
        }

        function bn(a, b) {
            var d = b.length > 0, f = a.length > 0, g = function (h, i, j, k, m) {
                var n, o, p, q = [], s = 0, u = "0", x = h && [], y = m != null, z = l, A = h || f && e.find.TAG("*", m && i.parentNode || i), B = t += z == null ? 1 : Math.E;
                y && (l = i !== r && i, c = g.el);
                for (; (n = A[u]) != null; u++) {
                    if (f && n) {
                        for (o = 0; p = a[o]; o++) {
                            if (p(n, i, j)) {
                                k.push(n);
                                break
                            }
                        }
                        y && (t = B, c = ++g.el)
                    }
                    d && ((n = !p && n) && s--, h && x.push(n))
                }
                s += u;
                if (d && u !== s) {
                    for (o = 0; p = b[o]; o++) {
                        p(x, q, i, j)
                    }
                    if (h) {
                        if (s > 0) {
                            while (u--) {
                                !x[u] && !q[u] && (q[u] = v.call(k))
                            }
                        }
                        q = bk(q)
                    }
                    w.apply(k, q), y && !h && q.length > 0 && s + b.length > 1 && bc.uniqueSort(k)
                }
                return y && (t = B, l = z), x
            };
            return g.el = 0, d ? z(g) : g
        }

        function bo(a, b, c, d) {
            var e = 0, f = b.length;
            for (; e < f; e++) {
                bc(a, b[e], c, d)
            }
            return c
        }

        function bp(a, b, c, d, f) {
            var g, h, j, k, l, m = bh(a), n = m.length;
            if (!d && m.length === 1) {
                h = m[0] = m[0].slice(0);
                if (h.length > 2 && (j = h[0]).type === "ID" && b.nodeType === 9 && !f && e.relative[h[1].type]) {
                    b = e.find.ID(j.matches[0].replace(V, ""), b, f)[0];
                    if (!b) {
                        return c
                    }
                    a = a.slice(h.shift().length)
                }
                for (g = W.POS.test(a) ? -1 : h.length - 1; g >= 0; g--) {
                    j = h[g];
                    if (e.relative[k = j.type]) {
                        break
                    }
                    if (l = e.find[k]) {
                        if (d = l(j.matches[0].replace(V, ""), R.test(h[0].type) && b.parentNode || b, f)) {
                            h.splice(g, 1), a = d.length && h.join("");
                            if (!a) {
                                return w.apply(c, x.call(d, 0)), c
                            }
                            break
                        }
                    }
                }
            }
            return i(a, m)(d, b, f, c, R.test(a)), c
        }

        function bq() {
        }

        var c, d, e, f, g, h, i, j, k, l, m = !0, n = "undefined", o = ("sizcache" + Math.random()).replace(".", ""), q = String, r = a.document, s = r.documentElement, t = 0, u = 0, v = [].pop, w = [].push, x = [].slice, y = [].indexOf || function (a) {
            var b = 0, c = this.length;
            for (; b < c; b++) {
                if (this[b] === a) {
                    return b
                }
            }
            return -1
        }, z = function (a, b) {
            return a[o] = b == null || b, a
        }, A = function () {
            var a = {}, b = [];
            return z(function (c, d) {
                return b.push(c) > e.cacheLength && delete a[b.shift()], a[c] = d
            }, a)
        }, B = A(), C = A(), D = A(), E = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", G = F.replace("w", "w#"), H = "([*^$|!~]?=)", I = "\\[" + E + "*(" + F + ")" + E + "*(?:" + H + E + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + G + ")|)|)" + E + "*\\]", J = ":(" + F + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + I + ")|[^:]|\\\\.)*|.*))\\)|)", K = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + E + "*((?:-\\d)?\\d*)" + E + "*\\)|)(?=[^-]|$)", L = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$", "g"), M = new RegExp("^" + E + "*," + E + "*"), N = new RegExp("^" + E + "*([\\x20\\t\\r\\n\\f>+~])" + E + "*"), O = new RegExp(J), P = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, Q = /^:not/, R = /[\x20\t\r\n\f]*[+~]/, S = /:not\($/, T = /h\d/i, U = /input|select|textarea|button/i, V = /\\(?!\\)/g, W = {ID: new RegExp("^#(" + F + ")"), CLASS: new RegExp("^\\.(" + F + ")"), NAME: new RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"), TAG: new RegExp("^(" + F.replace("w", "w*") + ")"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + J), POS: new RegExp(K, "i"), CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + E + "*(even|odd|(([+-]|)(\\d*)n|)" + E + "*(?:([+-]|)" + E + "*(\\d+)|))" + E + "*\\)|)", "i"), needsContext: new RegExp("^" + E + "*[>+~]|" + K, "i")}, X = function (a) {
            var b = r.createElement("div");
            try {
                return a(b)
            } catch (c) {
                return !1
            } finally {
                b = null
            }
        }, Y = X(function (a) {
            return a.appendChild(r.createComment("")), !a.getElementsByTagName("*").length
        }), Z = X(function (a) {
            return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== n && a.firstChild.getAttribute("href") === "#"
        }), $ = X(function (a) {
            a.innerHTML = "<select></select>";
            var b = typeof a.lastChild.getAttribute("multiple");
            return b !== "boolean" && b !== "string"
        }), _ = X(function (a) {
            return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !a.getElementsByClassName || !a.getElementsByClassName("e").length ? !1 : (a.lastChild.className = "e", a.getElementsByClassName("e").length === 2)
        }), ba = X(function (a) {
            a.id = o + 0, a.innerHTML = "<a name='" + o + "'></a><div name='" + o + "'></div>", s.insertBefore(a, s.firstChild);
            var b = r.getElementsByName && r.getElementsByName(o).length === 2 + r.getElementsByName(o + 0).length;
            return d = !r.getElementById(o), s.removeChild(a), b
        });
        try {
            x.call(s.childNodes, 0)[0].nodeType
        } catch (bb) {
            x = function (a) {
                var b, c = [];
                for (; b = this[a]; a++) {
                    c.push(b)
                }
                return c
            }
        }
        bc.matches = function (a, b) {
            return bc(a, null, null, b)
        }, bc.matchesSelector = function (a, b) {
            return bc(b, null, null, [a]).length > 0
        }, f = bc.getText = function (a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (e === 1 || e === 9 || e === 11) {
                    if (typeof a.textContent == "string") {
                        return a.textContent
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += f(a)
                    }
                } else {
                    if (e === 3 || e === 4) {
                        return a.nodeValue
                    }
                }
            } else {
                for (; b = a[d]; d++) {
                    c += f(b)
                }
            }
            return c
        }, g = bc.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        }, h = bc.contains = s.contains ? function (a, b) {
            var c = a.nodeType === 9 ? a.documentElement : a, d = b && b.parentNode;
            return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d))
        } : s.compareDocumentPosition ? function (a, b) {
            return b && !!(a.compareDocumentPosition(b) & 16)
        } : function (a, b) {
            while (b = b.parentNode) {
                if (b === a) {
                    return !0
                }
            }
            return !1
        }, bc.attr = function (a, b) {
            var c, d = g(a);
            return d || (b = b.toLowerCase()), (c = e.attrHandle[b]) ? c(a) : d || $ ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? typeof a[b] == "boolean" ? a[b] ? b : null : c.specified ? c.value : null : null)
        }, e = bc.selectors = {cacheLength: 50, createPseudo: z, match: W, attrHandle: Z ? {} : {href: function (a) {
            return a.getAttribute("href", 2)
        }, type: function (a) {
            return a.getAttribute("type")
        }}, find: {ID: d ? function (a, b, c) {
            if (typeof b.getElementById !== n && !c) {
                var d = b.getElementById(a);
                return d && d.parentNode ? [d] : []
            }
        } : function (a, c, d) {
            if (typeof c.getElementById !== n && !d) {
                var e = c.getElementById(a);
                return e ? e.id === a || typeof e.getAttributeNode !== n && e.getAttributeNode("id").value === a ? [e] : b : []
            }
        }, TAG: Y ? function (a, b) {
            if (typeof b.getElementsByTagName !== n) {
                return b.getElementsByTagName(a)
            }
        } : function (a, b) {
            var c = b.getElementsByTagName(a);
            if (a === "*") {
                var d, e = [], f = 0;
                for (; d = c[f]; f++) {
                    d.nodeType === 1 && e.push(d)
                }
                return e
            }
            return c
        }, NAME: ba && function (a, b) {
            if (typeof b.getElementsByName !== n) {
                return b.getElementsByName(name)
            }
        }, CLASS: _ && function (a, b, c) {
            if (typeof b.getElementsByClassName !== n && !c) {
                return b.getElementsByClassName(a)
            }
        }}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (a) {
            return a[1] = a[1].replace(V, ""), a[3] = (a[4] || a[5] || "").replace(V, ""), a[2] === "~=" && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        }, CHILD: function (a) {
            return a[1] = a[1].toLowerCase(), a[1] === "nth" ? (a[2] || bc.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")), a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && bc.error(a[0]), a
        }, PSEUDO: function (a) {
            var b, c;
            if (W.CHILD.test(a[0])) {
                return null
            }
            if (a[3]) {
                a[2] = a[3]
            } else {
                if (b = a[4]) {
                    O.test(b) && (c = bh(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b
                }
            }
            return a.slice(0, 3)
        }}, filter: {ID: d ? function (a) {
            return a = a.replace(V, ""), function (b) {
                return b.getAttribute("id") === a
            }
        } : function (a) {
            return a = a.replace(V, ""), function (b) {
                var c = typeof b.getAttributeNode !== n && b.getAttributeNode("id");
                return c && c.value === a
            }
        }, TAG: function (a) {
            return a === "*" ? function () {
                return !0
            } : (a = a.replace(V, "").toLowerCase(), function (b) {
                return b.nodeName && b.nodeName.toLowerCase() === a
            })
        }, CLASS: function (a) {
            var b = B[o][a];
            return b || (b = B(a, new RegExp("(^|" + E + ")" + a + "(" + E + "|$)"))), function (a) {
                return b.test(a.className || typeof a.getAttribute !== n && a.getAttribute("class") || "")
            }
        }, ATTR: function (a, b, c) {
            return function (d, e) {
                var f = bc.attr(d, a);
                return f == null ? b === "!=" : b ? (f += "", b === "=" ? f === c : b === "!=" ? f !== c : b === "^=" ? c && f.indexOf(c) === 0 : b === "*=" ? c && f.indexOf(c) > -1 : b === "$=" ? c && f.substr(f.length - c.length) === c : b === "~=" ? (" " + f + " ").indexOf(c) > -1 : b === "|=" ? f === c || f.substr(0, c.length + 1) === c + "-" : !1) : !0
            }
        }, CHILD: function (a, b, c, d) {
            return a === "nth" ? function (a) {
                var b, e, f = a.parentNode;
                if (c === 1 && d === 0) {
                    return !0
                }
                if (f) {
                    e = 0;
                    for (b = f.firstChild; b; b = b.nextSibling) {
                        if (b.nodeType === 1) {
                            e++;
                            if (a === b) {
                                break
                            }
                        }
                    }
                }
                return e -= d, e === c || e % c === 0 && e / c >= 0
            } : function (b) {
                var c = b;
                switch (a) {
                    case"only":
                    case"first":
                        while (c = c.previousSibling) {
                            if (c.nodeType === 1) {
                                return !1
                            }
                        }
                        if (a === "first") {
                            return !0
                        }
                        c = b;
                    case"last":
                        while (c = c.nextSibling) {
                            if (c.nodeType === 1) {
                                return !1
                            }
                        }
                        return !0
                }
            }
        }, PSEUDO: function (a, b) {
            var c, d = e.pseudos[a] || e.setFilters[a.toLowerCase()] || bc.error("unsupported pseudo: " + a);
            return d[o] ? d(b) : d.length > 1 ? (c = [a, a, "", b], e.setFilters.hasOwnProperty(a.toLowerCase()) ? z(function (a, c) {
                var e, f = d(a, b), g = f.length;
                while (g--) {
                    e = y.call(a, f[g]), a[e] = !(c[e] = f[g])
                }
            }) : function (a) {
                return d(a, 0, c)
            }) : d
        }}, pseudos: {not: z(function (a) {
            var b = [], c = [], d = i(a.replace(L, "$1"));
            return d[o] ? z(function (a, b, c, e) {
                var f, g = d(a, null, e, []), h = a.length;
                while (h--) {
                    if (f = g[h]) {
                        a[h] = !(b[h] = f)
                    }
                }
            }) : function (a, e, f) {
                return b[0] = a, d(b, null, f, c), !c.pop()
            }
        }), has: z(function (a) {
            return function (b) {
                return bc(a, b).length > 0
            }
        }), contains: z(function (a) {
            return function (b) {
                return(b.textContent || b.innerText || f(b)).indexOf(a) > -1
            }
        }), enabled: function (a) {
            return a.disabled === !1
        }, disabled: function (a) {
            return a.disabled === !0
        }, checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return b === "input" && !!a.checked || b === "option" && !!a.selected
        }, selected: function (a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        }, parent: function (a) {
            return !e.pseudos.empty(a)
        }, empty: function (a) {
            var b;
            a = a.firstChild;
            while (a) {
                if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4) {
                    return !1
                }
                a = a.nextSibling
            }
            return !0
        }, header: function (a) {
            return T.test(a.nodeName)
        }, text: function (a) {
            var b, c;
            return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null || c.toLowerCase() === b)
        }, radio: bd("radio"), checkbox: bd("checkbox"), file: bd("file"), password: bd("password"), image: bd("image"), submit: be("submit"), reset: be("reset"), button: function (a) {
            var b = a.nodeName.toLowerCase();
            return b === "input" && a.type === "button" || b === "button"
        }, input: function (a) {
            return U.test(a.nodeName)
        }, focus: function (a) {
            var b = a.ownerDocument;
            return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href)
        }, active: function (a) {
            return a === a.ownerDocument.activeElement
        }, first: bf(function (a, b, c) {
            return[0]
        }), last: bf(function (a, b, c) {
            return[b - 1]
        }), eq: bf(function (a, b, c) {
            return[c < 0 ? c + b : c]
        }), even: bf(function (a, b, c) {
            for (var d = 0; d < b; d += 2) {
                a.push(d)
            }
            return a
        }), odd: bf(function (a, b, c) {
            for (var d = 1; d < b; d += 2) {
                a.push(d)
            }
            return a
        }), lt: bf(function (a, b, c) {
            for (var d = c < 0 ? c + b : c; --d >= 0;) {
                a.push(d)
            }
            return a
        }), gt: bf(function (a, b, c) {
            for (var d = c < 0 ? c + b : c; ++d < b;) {
                a.push(d)
            }
            return a
        })}}, j = s.compareDocumentPosition ? function (a, b) {
            return a === b ? (k = !0, 0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1
        } : function (a, b) {
            if (a === b) {
                return k = !0, 0
            }
            if (a.sourceIndex && b.sourceIndex) {
                return a.sourceIndex - b.sourceIndex
            }
            var c, d, e = [], f = [], g = a.parentNode, h = b.parentNode, i = g;
            if (g === h) {
                return bg(a, b)
            }
            if (!g) {
                return -1
            }
            if (!h) {
                return 1
            }
            while (i) {
                e.unshift(i), i = i.parentNode
            }
            i = h;
            while (i) {
                f.unshift(i), i = i.parentNode
            }
            c = e.length, d = f.length;
            for (var j = 0; j < c && j < d; j++) {
                if (e[j] !== f[j]) {
                    return bg(e[j], f[j])
                }
            }
            return j === c ? bg(a, f[j], -1) : bg(e[j], b, 1)
        }, [0, 0].sort(j), m = !k, bc.uniqueSort = function (a) {
            var b, c = 1;
            k = m, a.sort(j);
            if (k) {
                for (; b = a[c]; c++) {
                    b === a[c - 1] && a.splice(c--, 1)
                }
            }
            return a
        }, bc.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, i = bc.compile = function (a, b) {
            var c, d = [], e = [], f = D[o][a];
            if (!f) {
                b || (b = bh(a)), c = b.length;
                while (c--) {
                    f = bm(b[c]), f[o] ? d.push(f) : e.push(f)
                }
                f = D(a, bn(e, d))
            }
            return f
        }, r.querySelectorAll && function () {
            var a, b = bp, c = /'|\\/g, d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, e = [":focus"], f = [":active", ":focus"], h = s.matchesSelector || s.mozMatchesSelector || s.webkitMatchesSelector || s.oMatchesSelector || s.msMatchesSelector;
            X(function (a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || e.push("\\[" + E + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || e.push(":checked")
            }), X(function (a) {
                a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + E + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
            }), e = new RegExp(e.join("|")), bp = function (a, d, f, g, h) {
                if (!g && !h && (!e || !e.test(a))) {
                    var i, j, k = !0, l = o, m = d, n = d.nodeType === 9 && a;
                    if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
                        i = bh(a), (k = d.getAttribute("id")) ? l = k.replace(c, "\\$&") : d.setAttribute("id", l), l = "[id='" + l + "'] ", j = i.length;
                        while (j--) {
                            i[j] = l + i[j].join("")
                        }
                        m = R.test(a) && d.parentNode || d, n = i.join(",")
                    }
                    if (n) {
                        try {
                            return w.apply(f, x.call(m.querySelectorAll(n), 0)), f
                        } catch (p) {
                        } finally {
                            k || d.removeAttribute("id")
                        }
                    }
                }
                return b(a, d, f, g, h)
            }, h && (X(function (b) {
                a = h.call(b, "div");
                try {
                    h.call(b, "[test!='']:sizzle"), f.push("!=", J)
                } catch (c) {
                }
            }), f = new RegExp(f.join("|")), bc.matchesSelector = function (b, c) {
                c = c.replace(d, "='$1']");
                if (!g(b) && !f.test(c) && (!e || !e.test(c))) {
                    try {
                        var i = h.call(b, c);
                        if (i || a || b.document && b.document.nodeType !== 11) {
                            return i
                        }
                    } catch (j) {
                    }
                }
                return bc(c, null, null, [b]).length > 0
            })
        }(), e.pseudos.nth = e.pseudos.eq, e.filters = bq.prototype = e.pseudos, e.setFilters = new bq, bc.attr = p.attr, p.find = bc, p.expr = bc.selectors, p.expr[":"] = p.expr.pseudos, p.unique = bc.uniqueSort, p.text = bc.getText, p.isXMLDoc = bc.isXML, p.contains = bc.contains
    }(a);
    var bc = /Until$/, bd = /^(?:parents|prev(?:Until|All))/, be = /^.[^:#\[\.,]*$/, bf = p.expr.match.needsContext, bg = {children: !0, contents: !0, next: !0, prev: !0};
    p.fn.extend({find: function (a) {
        var b, c, d, e, f, g, h = this;
        if (typeof a != "string") {
            return p(a).filter(function () {
                for (b = 0, c = h.length; b < c; b++) {
                    if (p.contains(h[b], this)) {
                        return !0
                    }
                }
            })
        }
        g = this.pushStack("", "find", a);
        for (b = 0, c = this.length; b < c; b++) {
            d = g.length, p.find(a, this[b], g);
            if (b > 0) {
                for (e = d; e < g.length; e++) {
                    for (f = 0; f < d; f++) {
                        if (g[f] === g[e]) {
                            g.splice(e--, 1);
                            break
                        }
                    }
                }
            }
        }
        return g
    }, has: function (a) {
        var b, c = p(a, this), d = c.length;
        return this.filter(function () {
            for (b = 0; b < d; b++) {
                if (p.contains(this, c[b])) {
                    return !0
                }
            }
        })
    }, not: function (a) {
        return this.pushStack(bj(this, a, !1), "not", a)
    }, filter: function (a) {
        return this.pushStack(bj(this, a, !0), "filter", a)
    }, is: function (a) {
        return !!a && (typeof a == "string" ? bf.test(a) ? p(a, this.context).index(this[0]) >= 0 : p.filter(a, this).length > 0 : this.filter(a).length > 0)
    }, closest: function (a, b) {
        var c, d = 0, e = this.length, f = [], g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
        for (; d < e; d++) {
            c = this[d];
            while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
                if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
                    f.push(c);
                    break
                }
                c = c.parentNode
            }
        }
        return f = f.length > 1 ? p.unique(f) : f, this.pushStack(f, "closest", a)
    }, index: function (a) {
        return a ? typeof a == "string" ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
    }, add: function (a, b) {
        var c = typeof a == "string" ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a), d = p.merge(this.get(), c);
        return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d))
    }, addBack: function (a) {
        return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
    }}), p.fn.andSelf = p.fn.addBack, p.each({parent: function (a) {
        var b = a.parentNode;
        return b && b.nodeType !== 11 ? b : null
    }, parents: function (a) {
        return p.dir(a, "parentNode")
    }, parentsUntil: function (a, b, c) {
        return p.dir(a, "parentNode", c)
    }, next: function (a) {
        return bi(a, "nextSibling")
    }, prev: function (a) {
        return bi(a, "previousSibling")
    }, nextAll: function (a) {
        return p.dir(a, "nextSibling")
    }, prevAll: function (a) {
        return p.dir(a, "previousSibling")
    }, nextUntil: function (a, b, c) {
        return p.dir(a, "nextSibling", c)
    }, prevUntil: function (a, b, c) {
        return p.dir(a, "previousSibling", c)
    }, siblings: function (a) {
        return p.sibling((a.parentNode || {}).firstChild, a)
    }, children: function (a) {
        return p.sibling(a.firstChild)
    }, contents: function (a) {
        return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : p.merge([], a.childNodes)
    }}, function (a, b) {
        p.fn[a] = function (c, d) {
            var e = p.map(this, b, c);
            return bc.test(a) || (d = c), d && typeof d == "string" && (e = p.filter(d, e)), e = this.length > 1 && !bg[a] ? p.unique(e) : e, this.length > 1 && bd.test(a) && (e = e.reverse()), this.pushStack(e, a, k.call(arguments).join(","))
        }
    }), p.extend({filter: function (a, b, c) {
        return c && (a = ":not(" + a + ")"), b.length === 1 ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b)
    }, dir: function (a, c, d) {
        var e = [], f = a[c];
        while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d))) {
            f.nodeType === 1 && e.push(f), f = f[c]
        }
        return e
    }, sibling: function (a, b) {
        var c = [];
        for (; a; a = a.nextSibling) {
            a.nodeType === 1 && a !== b && c.push(a)
        }
        return c
    }});
    var bl = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", bm = / jQuery\d+="(?:null|\d+)"/g, bn = /^\s+/, bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bp = /<([\w:]+)/, bq = /<tbody/i, br = /<|&#?\w+;/, bs = /<(?:script|style|link)/i, bt = /<(?:script|object|embed|option|style)/i, bu = new RegExp("<(?:" + bl + ")[\\s/>]", "i"), bv = /^(?:checkbox|radio)$/, bw = /checked\s*(?:[^=]|=\s*.checked.)/i, bx = /\/(java|ecma)script/i, by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, bz = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]}, bA = bk(e), bB = bA.appendChild(e.createElement("div"));
    bz.optgroup = bz.option, bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead, bz.th = bz.td, p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]), p.fn.extend({text: function (a) {
        return p.access(this, function (a) {
            return a === b ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a))
        }, null, a, arguments.length)
    }, wrapAll: function (a) {
        if (p.isFunction(a)) {
            return this.each(function (b) {
                p(this).wrapAll(a.call(this, b))
            })
        }
        if (this[0]) {
            var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstChild && a.firstChild.nodeType === 1) {
                    a = a.firstChild
                }
                return a
            }).append(this)
        }
        return this
    }, wrapInner: function (a) {
        return p.isFunction(a) ? this.each(function (b) {
            p(this).wrapInner(a.call(this, b))
        }) : this.each(function () {
            var b = p(this), c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a)
        })
    }, wrap: function (a) {
        var b = p.isFunction(a);
        return this.each(function (c) {
            p(this).wrapAll(b ? a.call(this, c) : a)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
        }).end()
    }, append: function () {
        return this.domManip(arguments, !0, function (a) {
            (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a)
        })
    }, prepend: function () {
        return this.domManip(arguments, !0, function (a) {
            (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
        })
    }, before: function () {
        if (!bh(this[0])) {
            return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            })
        }
        if (arguments.length) {
            var a = p.clean(arguments);
            return this.pushStack(p.merge(a, this), "before", this.selector)
        }
    }, after: function () {
        if (!bh(this[0])) {
            return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            })
        }
        if (arguments.length) {
            var a = p.clean(arguments);
            return this.pushStack(p.merge(this, a), "after", this.selector)
        }
    }, remove: function (a, b) {
        var c, d = 0;
        for (; (c = this[d]) != null; d++) {
            if (!a || p.filter(a, [c]).length) {
                !b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])), c.parentNode && c.parentNode.removeChild(c)
            }
        }
        return this
    }, empty: function () {
        var a, b = 0;
        for (; (a = this[b]) != null; b++) {
            a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
            while (a.firstChild) {
                a.removeChild(a.firstChild)
            }
        }
        return this
    }, clone: function (a, b) {
        return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function () {
            return p.clone(this, a, b)
        })
    }, html: function (a) {
        return p.access(this, function (a) {
            var c = this[0] || {}, d = 0, e = this.length;
            if (a === b) {
                return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b
            }
            if (typeof a == "string" && !bs.test(a) && (p.support.htmlSerialize || !bu.test(a)) && (p.support.leadingWhitespace || !bn.test(a)) && !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(bo, "<$1></$2>");
                try {
                    for (; d < e; d++) {
                        c = this[d] || {}, c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), c.innerHTML = a)
                    }
                    c = 0
                } catch (f) {
                }
            }
            c && this.empty().append(a)
        }, null, a, arguments.length)
    }, replaceWith: function (a) {
        return bh(this[0]) ? this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this : p.isFunction(a) ? this.each(function (b) {
            var c = p(this), d = c.html();
            c.replaceWith(a.call(this, b, d))
        }) : (typeof a != "string" && (a = p(a).detach()), this.each(function () {
            var b = this.nextSibling, c = this.parentNode;
            p(this).remove(), b ? p(b).before(a) : p(c).append(a)
        }))
    }, detach: function (a) {
        return this.remove(a, !0)
    }, domManip: function (a, c, d) {
        a = [].concat.apply([], a);
        var e, f, g, h, i = 0, j = a[0], k = [], l = this.length;
        if (!p.support.checkClone && l > 1 && typeof j == "string" && bw.test(j)) {
            return this.each(function () {
                p(this).domManip(a, c, d)
            })
        }
        if (p.isFunction(j)) {
            return this.each(function (e) {
                var f = p(this);
                a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
            })
        }
        if (this[0]) {
            e = p.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, g.childNodes.length === 1 && (g = f);
            if (f) {
                c = c && p.nodeName(f, "tr");
                for (h = e.cacheable || l - 1; i < l; i++) {
                    d.call(c && p.nodeName(this[i], "table") ? bC(this[i], "tbody") : this[i], i === h ? g : p.clone(g, !0, !0))
                }
            }
            g = f = null, k.length && p.each(k, function (a, b) {
                b.src ? p.ajax ? p.ajax({url: b.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0}) : p.error("no ajax") : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(by, "")), b.parentNode && b.parentNode.removeChild(b)
            })
        }
        return this
    }}), p.buildFragment = function (a, c, d) {
        var f, g, h, i = a[0];
        return c = c || e, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, a.length === 1 && typeof i == "string" && i.length < 512 && c === e && i.charAt(0) === "<" && !bt.test(i) && (p.support.checkClone || !bw.test(i)) && (p.support.html5Clone || !bu.test(i)) && (g = !0, f = p.fragments[i], h = f !== b), f || (f = c.createDocumentFragment(), p.clean(a, c, f, d), g && (p.fragments[i] = h && f)), {fragment: f, cacheable: g}
    }, p.fragments = {}, p.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
        p.fn[a] = function (c) {
            var d, e = 0, f = [], g = p(c), h = g.length, i = this.length === 1 && this[0].parentNode;
            if ((i == null || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1) {
                return g[b](this[0]), this
            }
            for (; e < h; e++) {
                d = (e > 0 ? this.clone(!0) : this).get(), p(g[e])[b](d), f = f.concat(d)
            }
            return this.pushStack(f, a, g.selector)
        }
    }), p.extend({clone: function (a, b, c) {
        var d, e, f, g;
        p.support.html5Clone || p.isXMLDoc(a) || !bu.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bB.innerHTML = a.outerHTML, bB.removeChild(g = bB.firstChild));
        if ((!p.support.noCloneEvent || !p.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !p.isXMLDoc(a)) {
            bE(a, g), d = bF(a), e = bF(g);
            for (f = 0; d[f]; ++f) {
                e[f] && bE(d[f], e[f])
            }
        }
        if (b) {
            bD(a, g);
            if (c) {
                d = bF(a), e = bF(g);
                for (f = 0; d[f]; ++f) {
                    bD(d[f], e[f])
                }
            }
        }
        return d = e = null, g
    }, clean: function (a, b, c, d) {
        var f, g, h, i, j, k, l, m, n, o, q, r, s = b === e && bA, t = [];
        if (!b || typeof b.createDocumentFragment == "undefined") {
            b = e
        }
        for (f = 0; (h = a[f]) != null; f++) {
            typeof h == "number" && (h += "");
            if (!h) {
                continue
            }
            if (typeof h == "string") {
                if (!br.test(h)) {
                    h = b.createTextNode(h)
                } else {
                    s = s || bk(b), l = b.createElement("div"), s.appendChild(l), h = h.replace(bo, "<$1></$2>"), i = (bp.exec(h) || ["", ""])[1].toLowerCase(), j = bz[i] || bz._default, k = j[0], l.innerHTML = j[1] + h + j[2];
                    while (k--) {
                        l = l.lastChild
                    }
                    if (!p.support.tbody) {
                        m = bq.test(h), n = i === "table" && !m ? l.firstChild && l.firstChild.childNodes : j[1] === "<table>" && !m ? l.childNodes : [];
                        for (g = n.length - 1; g >= 0; --g) {
                            p.nodeName(n[g], "tbody") && !n[g].childNodes.length && n[g].parentNode.removeChild(n[g])
                        }
                    }
                    !p.support.leadingWhitespace && bn.test(h) && l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild), h = l.childNodes, l.parentNode.removeChild(l)
                }
            }
            h.nodeType ? t.push(h) : p.merge(t, h)
        }
        l && (h = l = s = null);
        if (!p.support.appendChecked) {
            for (f = 0; (h = t[f]) != null; f++) {
                p.nodeName(h, "input") ? bG(h) : typeof h.getElementsByTagName != "undefined" && p.grep(h.getElementsByTagName("input"), bG)
            }
        }
        if (c) {
            q = function (a) {
                if (!a.type || bx.test(a.type)) {
                    return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
                }
            };
            for (f = 0; (h = t[f]) != null; f++) {
                if (!p.nodeName(h, "script") || !q(h)) {
                    c.appendChild(h), typeof h.getElementsByTagName != "undefined" && (r = p.grep(p.merge([], h.getElementsByTagName("script")), q), t.splice.apply(t, [f + 1, 0].concat(r)), f += r.length)
                }
            }
        }
        return t
    }, cleanData: function (a, b) {
        var c, d, e, f, g = 0, h = p.expando, i = p.cache, j = p.support.deleteExpando, k = p.event.special;
        for (; (e = a[g]) != null; g++) {
            if (b || p.acceptData(e)) {
                d = e[h], c = d && i[d];
                if (c) {
                    if (c.events) {
                        for (f in c.events) {
                            k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle)
                        }
                    }
                    i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, p.deletedIds.push(d))
                }
            }
        }
    }}), function () {
        var a, b;
        p.uaMatch = function (a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return{browser: b[1] || "", version: b[2] || "0"}
        }, a = p.uaMatch(g.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), p.browser = b, p.sub = function () {
            function a(b, c) {
                return new a.fn.init(b, c)
            }

            p.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function c(c, d) {
                return d && d instanceof p && !(d instanceof a) && (d = a(d)), p.fn.init.call(this, c, d, b)
            }, a.fn.init.prototype = a.fn;
            var b = a(e);
            return a
        }
    }();
    var bH, bI, bJ, bK = /alpha\([^)]*\)/i, bL = /opacity=([^)]*)/, bM = /^(top|right|bottom|left)$/, bN = /^(none|table(?!-c[ea]).+)/, bO = /^margin/, bP = new RegExp("^(" + q + ")(.*)$", "i"), bQ = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"), bR = new RegExp("^([-+])=(" + q + ")", "i"), bS = {}, bT = {position: "absolute", visibility: "hidden", display: "block"}, bU = {letterSpacing: 0, fontWeight: 400}, bV = ["Top", "Right", "Bottom", "Left"], bW = ["Webkit", "O", "Moz", "ms"], bX = p.fn.toggle;
    p.fn.extend({css: function (a, c) {
        return p.access(this, function (a, c, d) {
            return d !== b ? p.style(a, c, d) : p.css(a, c)
        }, a, c, arguments.length > 1)
    }, show: function () {
        return b$(this, !0)
    }, hide: function () {
        return b$(this)
    }, toggle: function (a, b) {
        var c = typeof a == "boolean";
        return p.isFunction(a) && p.isFunction(b) ? bX.apply(this, arguments) : this.each(function () {
            (c ? a : bZ(this)) ? p(this).show() : p(this).hide()
        })
    }}), p.extend({cssHooks: {opacity: {get: function (a, b) {
        if (b) {
            var c = bH(a, "opacity");
            return c === "" ? "1" : c
        }
    }}}, cssNumber: {fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": p.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (a, c, d, e) {
        if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) {
            return
        }
        var f, g, h, i = p.camelCase(c), j = a.style;
        c = p.cssProps[i] || (p.cssProps[i] = bY(j, i)), h = p.cssHooks[c] || p.cssHooks[i];
        if (d === b) {
            return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c]
        }
        g = typeof d, g === "string" && (f = bR.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c)), g = "number");
        if (d == null || g === "number" && isNaN(d)) {
            return
        }
        g === "number" && !p.cssNumber[i] && (d += "px");
        if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) {
            try {
                j[c] = d
            } catch (k) {
            }
        }
    }, css: function (a, c, d, e) {
        var f, g, h, i = p.camelCase(c);
        return c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i)), h = p.cssHooks[c] || p.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = bH(a, c)), f === "normal" && c in bU && (f = bU[c]), d || e !== b ? (g = parseFloat(f), d || p.isNumeric(g) ? g || 0 : f) : f
    }, swap: function (a, b, c) {
        var d, e, f = {};
        for (e in b) {
            f[e] = a.style[e], a.style[e] = b[e]
        }
        d = c.call(a);
        for (e in b) {
            a.style[e] = f[e]
        }
        return d
    }}), a.getComputedStyle ? bH = function (b, c) {
        var d, e, f, g, h = a.getComputedStyle(b, null), i = b.style;
        return h && (d = h[c], d === "" && !p.contains(b.ownerDocument, b) && (d = p.style(b, c)), bQ.test(d) && bO.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
    } : e.documentElement.currentStyle && (bH = function (a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b], f = a.style;
        return e == null && f && f[b] && (e = f[b]), bQ.test(e) && !bM.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), e === "" ? "auto" : e
    }), p.each(["height", "width"], function (a, b) {
        p.cssHooks[b] = {get: function (a, c, d) {
            if (c) {
                return a.offsetWidth === 0 && bN.test(bH(a, "display")) ? p.swap(a, bT, function () {
                    return cb(a, b, d)
                }) : cb(a, b, d)
            }
        }, set: function (a, c, d) {
            return b_(a, c, d ? ca(a, b, d, p.support.boxSizing && p.css(a, "boxSizing") === "border-box") : 0)
        }}
    }), p.support.opacity || (p.cssHooks.opacity = {get: function (a, b) {
        return bL.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
    }, set: function (a, b) {
        var c = a.style, d = a.currentStyle, e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", f = d && d.filter || c.filter || "";
        c.zoom = 1;
        if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
            c.removeAttribute("filter");
            if (d && !d.filter) {
                return
            }
        }
        c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e
    }}), p(function () {
        p.support.reliableMarginRight || (p.cssHooks.marginRight = {get: function (a, b) {
            return p.swap(a, {display: "inline-block"}, function () {
                if (b) {
                    return bH(a, "marginRight")
                }
            })
        }}), !p.support.pixelPosition && p.fn.position && p.each(["top", "left"], function (a, b) {
            p.cssHooks[b] = {get: function (a, c) {
                if (c) {
                    var d = bH(a, b);
                    return bQ.test(d) ? p(a).position()[b] + "px" : d
                }
            }}
        })
    }), p.expr && p.expr.filters && (p.expr.filters.hidden = function (a) {
        return a.offsetWidth === 0 && a.offsetHeight === 0 || !p.support.reliableHiddenOffsets && (a.style && a.style.display || bH(a, "display")) === "none"
    }, p.expr.filters.visible = function (a) {
        return !p.expr.filters.hidden(a)
    }), p.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        p.cssHooks[a + b] = {expand: function (c) {
            var d, e = typeof c == "string" ? c.split(" ") : [c], f = {};
            for (d = 0; d < 4; d++) {
                f[a + bV[d] + b] = e[d] || e[d - 2] || e[0]
            }
            return f
        }}, bO.test(a) || (p.cssHooks[a + b].set = b_)
    });
    var cd = /%20/g, ce = /\[\]$/, cf = /\r?\n/g, cg = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, ch = /^(?:select|textarea)/i;
    p.fn.extend({serialize: function () {
        return p.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            return this.elements ? p.makeArray(this.elements) : this
        }).filter(function () {
            return this.name && !this.disabled && (this.checked || ch.test(this.nodeName) || cg.test(this.type))
        }).map(function (a, b) {
            var c = p(this).val();
            return c == null ? null : p.isArray(c) ? p.map(c, function (a, c) {
                return{name: b.name, value: a.replace(cf, "\r\n")}
            }) : {name: b.name, value: c.replace(cf, "\r\n")}
        }).get()
    }}), p.param = function (a, c) {
        var d, e = [], f = function (a, b) {
            b = p.isFunction(b) ? b() : b == null ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
        if (p.isArray(a) || a.jquery && !p.isPlainObject(a)) {
            p.each(a, function () {
                f(this.name, this.value)
            })
        } else {
            for (d in a) {
                ci(d, a[d], c, f)
            }
        }
        return e.join("&").replace(cd, "+")
    };
    var cj, ck, cl = /#.*$/, cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, co = /^(?:GET|HEAD)$/, cp = /^\/\//, cq = /\?/, cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, cs = /([?&])_=[^&]*/, ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, cu = p.fn.load, cv = {}, cw = {}, cx = ["*/"] + ["*"];
    try {
        ck = f.href
    } catch (cy) {
        ck = e.createElement("a"), ck.href = "", ck = ck.href
    }
    cj = ct.exec(ck.toLowerCase()) || [], p.fn.load = function (a, c, d) {
        if (typeof a != "string" && cu) {
            return cu.apply(this, arguments)
        }
        if (!this.length) {
            return this
        }
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), p.isFunction(c) ? (d = c, c = b) : c && typeof c == "object" && (f = "POST"), p.ajax({url: a, type: f, dataType: "html", data: c, complete: function (a, b) {
            d && h.each(d, g || [a.responseText, b, a])
        }}).done(function (a) {
            g = arguments, h.html(e ? p("<div>").append(a.replace(cr, "")).find(e) : a)
        }), this
    }, p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        p.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), p.each(["get", "post"], function (a, c) {
        p[c] = function (a, d, e, f) {
            return p.isFunction(d) && (f = f || e, e = d, d = b), p.ajax({type: c, url: a, data: d, success: e, dataType: f})
        }
    }), p.extend({getScript: function (a, c) {
        return p.get(a, b, c, "script")
    }, getJSON: function (a, b, c) {
        return p.get(a, b, c, "json")
    }, ajaxSetup: function (a, b) {
        return b ? cB(a, p.ajaxSettings) : (b = a, a = p.ajaxSettings), cB(a, b), a
    }, ajaxSettings: {url: ck, isLocal: cn.test(cj[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: {xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": cx}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": a.String, "text html": !0, "text json": p.parseJSON, "text xml": p.parseXML}, flatOptions: {context: !0, url: !0}}, ajaxPrefilter: cz(cv), ajaxTransport: cz(cw), ajax: function (a, c) {
        function y(a, c, f, i) {
            var k, s, t, u, w, y = c;
            if (v === 2) {
                return
            }
            v = 2, h && clearTimeout(h), g = b, e = i || "", x.readyState = a > 0 ? 4 : 0, f && (u = cC(l, x, f));
            if (a >= 200 && a < 300 || a === 304) {
                l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (p.lastModified[d] = w), w = x.getResponseHeader("Etag"), w && (p.etag[d] = w)), a === 304 ? (y = "notmodified", k = !0) : (k = cD(l, u), y = k.state, s = k.data, t = k.error, k = !t)
            } else {
                t = y;
                if (!y || a) {
                    y = "error", a < 0 && (a = 0)
                }
            }
            x.status = a, x.statusText = (c || y) + "", k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]), x.statusCode(r), r = b, j && n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]), q.fireWith(m, [x, y]), j && (n.trigger("ajaxComplete", [x, l]), --p.active || p.event.trigger("ajaxStop"))
        }

        typeof a == "object" && (c = a, a = b), c = c || {};
        var d, e, f, g, h, i, j, k, l = p.ajaxSetup({}, c), m = l.context || l, n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event, o = p.Deferred(), q = p.Callbacks("once memory"), r = l.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {readyState: 0, setRequestHeader: function (a, b) {
            if (!v) {
                var c = a.toLowerCase();
                a = u[c] = u[c] || a, t[a] = b
            }
            return this
        }, getAllResponseHeaders: function () {
            return v === 2 ? e : null
        }, getResponseHeader: function (a) {
            var c;
            if (v === 2) {
                if (!f) {
                    f = {};
                    while (c = cm.exec(e)) {
                        f[c[1].toLowerCase()] = c[2]
                    }
                }
                c = f[a.toLowerCase()]
            }
            return c === b ? null : c
        }, overrideMimeType: function (a) {
            return v || (l.mimeType = a), this
        }, abort: function (a) {
            return a = a || w, g && g.abort(a), y(0, a), this
        }};
        o.promise(x), x.success = x.done, x.error = x.fail, x.complete = q.add, x.statusCode = function (a) {
            if (a) {
                var b;
                if (v < 2) {
                    for (b in a) {
                        r[b] = [r[b], a[b]]
                    }
                } else {
                    b = a[x.status], x.always(b)
                }
            }
            return this
        }, l.url = ((a || l.url) + "").replace(cl, "").replace(cp, cj[1] + "//"), l.dataTypes = p.trim(l.dataType || "*").toLowerCase().split(s), l.crossDomain == null && (i = ct.exec(l.url.toLowerCase()) || !1, l.crossDomain = i && i.join(":") + (i[3] ? "" : i[1] === "http:" ? 80 : 443) !== cj.join(":") + (cj[3] ? "" : cj[1] === "http:" ? 80 : 443)), l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)), cA(cv, l, c, x);
        if (v === 2) {
            return x
        }
        j = l.global, l.type = l.type.toUpperCase(), l.hasContent = !co.test(l.type), j && p.active++ === 0 && p.event.trigger("ajaxStart");
        if (!l.hasContent) {
            l.data && (l.url += (cq.test(l.url) ? "&" : "?") + l.data, delete l.data), d = l.url;
            if (l.cache === !1) {
                var z = p.now(), A = l.url.replace(cs, "$1_=" + z);
                l.url = A + (A === l.url ? (cq.test(l.url) ? "&" : "?") + "_=" + z : "")
            }
        }
        (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType), l.ifModified && (d = d || l.url, p.lastModified[d] && x.setRequestHeader("If-Modified-Since", p.lastModified[d]), p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])), x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + cx + "; q=0.01" : "") : l.accepts["*"]);
        for (k in l.headers) {
            x.setRequestHeader(k, l.headers[k])
        }
        if (!l.beforeSend || l.beforeSend.call(m, x, l) !== !1 && v !== 2) {
            w = "abort";
            for (k in {success: 1, error: 1, complete: 1}) {
                x[k](l[k])
            }
            g = cA(cw, l, c, x);
            if (!g) {
                y(-1, "No Transport")
            } else {
                x.readyState = 1, j && n.trigger("ajaxSend", [x, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
                    x.abort("timeout")
                }, l.timeout));
                try {
                    v = 1, g.send(t, y)
                } catch (B) {
                    if (v < 2) {
                        y(-1, B)
                    } else {
                        throw B
                    }
                }
            }
            return x
        }
        return x.abort()
    }, active: 0, lastModified: {}, etag: {}});
    var cE = [], cF = /\?/, cG = /(=)\?(?=&|$)|\?\?/, cH = p.now();
    p.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var a = cE.pop() || p.expando + "_" + cH++;
        return this[a] = !0, a
    }}), p.ajaxPrefilter("json jsonp", function (c, d, e) {
        var f, g, h, i = c.data, j = c.url, k = c.jsonp !== !1, l = k && cG.test(j), m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && cG.test(i);
        if (c.dataTypes[0] === "jsonp" || l || m) {
            return f = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(cG, "$1" + f) : m ? c.data = i.replace(cG, "$1" + f) : k && (c.url += (cF.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
                return h || p.error(f + " was not called"), h[0]
            }, c.dataTypes[0] = "json", a[f] = function () {
                h = arguments
            }, e.always(function () {
                a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, cE.push(f)), h && p.isFunction(g) && g(h[0]), h = g = b
            }), "script"
        }
    }), p.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /javascript|ecmascript/}, converters: {"text script": function (a) {
        return p.globalEval(a), a
    }}}), p.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), p.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
            return{send: function (f, g) {
                c = e.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, e) {
                    if (e || !c.readyState || /loaded|complete/.test(c.readyState)) {
                        c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || g(200, "success")
                    }
                }, d.insertBefore(c, d.firstChild)
            }, abort: function () {
                c && c.onload(0, 1)
            }}
        }
    });
    var cI, cJ = a.ActiveXObject ? function () {
        for (var a in cI) {
            cI[a](0, 1)
        }
    } : !1, cK = 0;
    p.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && cL() || cM()
    } : cL, function (a) {
        p.extend(p.support, {ajax: !!a, cors: !!a && "withCredentials" in a})
    }(p.ajaxSettings.xhr()), p.support.ajax && p.ajaxTransport(function (c) {
        if (!c.crossDomain || p.support.cors) {
            var d;
            return{send: function (e, f) {
                var g, h, i = c.xhr();
                c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
                if (c.xhrFields) {
                    for (h in c.xhrFields) {
                        i[h] = c.xhrFields[h]
                    }
                }
                c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (h in e) {
                        i.setRequestHeader(h, e[h])
                    }
                } catch (j) {
                }
                i.send(c.hasContent && c.data || null), d = function (a, e) {
                    var h, j, k, l, m;
                    try {
                        if (d && (e || i.readyState === 4)) {
                            d = b, g && (i.onreadystatechange = p.noop, cJ && delete cI[g]);
                            if (e) {
                                i.readyState !== 4 && i.abort()
                            } else {
                                h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                try {
                                    l.text = i.responseText
                                } catch (a) {
                                }
                                try {
                                    j = i.statusText
                                } catch (n) {
                                    j = ""
                                }
                                !h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204)
                            }
                        }
                    } catch (o) {
                        e || f(-1, o)
                    }
                    l && f(h, j, l, k)
                }, c.async ? i.readyState === 4 ? setTimeout(d, 0) : (g = ++cK, cJ && (cI || (cI = {}, p(a).unload(cJ)), cI[g] = d), i.onreadystatechange = d) : d()
            }, abort: function () {
                d && d(0, 1)
            }}
        }
    });
    var cN, cO, cP = /^(?:toggle|show|hide)$/, cQ = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"), cR = /queueHooks$/, cS = [cY], cT = {"*": [function (a, b) {
        var c, d, e = this.createTween(a, b), f = cQ.exec(b), g = e.cur(), h = +g || 0, i = 1, j = 20;
        if (f) {
            c = +f[2], d = f[3] || (p.cssNumber[a] ? "" : "px");
            if (d !== "px" && h) {
                h = p.css(e.elem, a, !0) || c || 1;
                do {
                    i = i || ".5", h = h / i, p.style(e.elem, a, h + d)
                } while (i !== (i = e.cur() / g) && i !== 1 && --j)
            }
            e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
        }
        return e
    }]};
    p.Animation = p.extend(cW, {tweener: function (a, b) {
        p.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        var c, d = 0, e = a.length;
        for (; d < e; d++) {
            c = a[d], cT[c] = cT[c] || [], cT[c].unshift(b)
        }
    }, prefilter: function (a, b) {
        b ? cS.unshift(a) : cS.push(a)
    }}), p.Tween = cZ, cZ.prototype = {constructor: cZ, init: function (a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (p.cssNumber[c] ? "" : "px")
    }, cur: function () {
        var a = cZ.propHooks[this.prop];
        return a && a.get ? a.get(this) : cZ.propHooks._default.get(this)
    }, run: function (a) {
        var b, c = cZ.propHooks[this.prop];
        return this.options.duration ? this.pos = b = p.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : cZ.propHooks._default.set(this), this
    }}, cZ.prototype.init.prototype = cZ.prototype, cZ.propHooks = {_default: {get: function (a) {
        var b;
        return a.elem[a.prop] == null || !!a.elem.style && a.elem.style[a.prop] != null ? (b = p.css(a.elem, a.prop, !1, ""), !b || b === "auto" ? 0 : b) : a.elem[a.prop]
    }, set: function (a) {
        p.fx.step[a.prop] ? p.fx.step[a.prop](a) : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop]) ? p.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
    }}}, cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft = {set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }}, p.each(["toggle", "show", "hide"], function (a, b) {
        var c = p.fn[b];
        p.fn[b] = function (d, e, f) {
            return d == null || typeof d == "boolean" || !a && p.isFunction(d) && p.isFunction(e) ? c.apply(this, arguments) : this.animate(c$(b, !0), d, e, f)
        }
    }), p.fn.extend({fadeTo: function (a, b, c, d) {
        return this.filter(bZ).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    }, animate: function (a, b, c, d) {
        var e = p.isEmptyObject(a), f = p.speed(b, c, d), g = function () {
            var b = cW(this, p.extend({}, a), f);
            e && b.stop(!0)
        };
        return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
    }, stop: function (a, c, d) {
        var e = function (a) {
            var b = a.stop;
            delete a.stop, b(d)
        };
        return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
            var b = !0, c = a != null && a + "queueHooks", f = p.timers, g = p._data(this);
            if (c) {
                g[c] && g[c].stop && e(g[c])
            } else {
                for (c in g) {
                    g[c] && g[c].stop && cR.test(c) && e(g[c])
                }
            }
            for (c = f.length; c--;) {
                f[c].elem === this && (a == null || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1))
            }
            (b || !d) && p.dequeue(this, a)
        })
    }}), p.each({slideDown: c$("show"), slideUp: c$("hide"), slideToggle: c$("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
        p.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), p.speed = function (a, b, c) {
        var d = a && typeof a == "object" ? p.extend({}, a) : {complete: c || !c && b || p.isFunction(a) && a, duration: a, easing: c && b || b && !p.isFunction(b) && b};
        d.duration = p.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default;
        if (d.queue == null || d.queue === !0) {
            d.queue = "fx"
        }
        return d.old = d.complete, d.complete = function () {
            p.isFunction(d.old) && d.old.call(this), d.queue && p.dequeue(this, d.queue)
        }, d
    }, p.easing = {linear: function (a) {
        return a
    }, swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2
    }}, p.timers = [], p.fx = cZ.prototype.init, p.fx.tick = function () {
        var a, b = p.timers, c = 0;
        for (; c < b.length; c++) {
            a = b[c], !a() && b[c] === a && b.splice(c--, 1)
        }
        b.length || p.fx.stop()
    }, p.fx.timer = function (a) {
        a() && p.timers.push(a) && !cO && (cO = setInterval(p.fx.tick, p.fx.interval))
    }, p.fx.interval = 13, p.fx.stop = function () {
        clearInterval(cO), cO = null
    }, p.fx.speeds = {slow: 600, fast: 200, _default: 400}, p.fx.step = {}, p.expr && p.expr.filters && (p.expr.filters.animated = function (a) {
        return p.grep(p.timers, function (b) {
            return a === b.elem
        }).length
    });
    var c_ = /^(?:body|html)$/i;
    p.fn.offset = function (a) {
        if (arguments.length) {
            return a === b ? this : this.each(function (b) {
                p.offset.setOffset(this, a, b)
            })
        }
        var c, d, e, f, g, h, i, j = {top: 0, left: 0}, k = this[0], l = k && k.ownerDocument;
        if (!l) {
            return
        }
        return(d = l.body) === k ? p.offset.bodyOffset(k) : (c = l.documentElement, p.contains(c, k) ? (typeof k.getBoundingClientRect != "undefined" && (j = k.getBoundingClientRect()), e = da(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {top: j.top + h - f, left: j.left + i - g}) : j)
    }, p.offset = {bodyOffset: function (a) {
        var b = a.offsetTop, c = a.offsetLeft;
        return p.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0, c += parseFloat(p.css(a, "marginLeft")) || 0), {top: b, left: c}
    }, setOffset: function (a, b, c) {
        var d = p.css(a, "position");
        d === "static" && (a.style.position = "relative");
        var e = p(a), f = e.offset(), g = p.css(a, "top"), h = p.css(a, "left"), i = (d === "absolute" || d === "fixed") && p.inArray("auto", [g, h]) > -1, j = {}, k = {}, l, m;
        i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), p.isFunction(b) && (b = b.call(a, c, f)), b.top != null && (j.top = b.top - f.top + l), b.left != null && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j)
    }}, p.fn.extend({position: function () {
        if (!this[0]) {
            return
        }
        var a = this[0], b = this.offsetParent(), c = this.offset(), d = c_.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
        return c.top -= parseFloat(p.css(a, "marginTop")) || 0, c.left -= parseFloat(p.css(a, "marginLeft")) || 0, d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0, {top: c.top - d.top, left: c.left - d.left}
    }, offsetParent: function () {
        return this.map(function () {
            var a = this.offsetParent || e.body;
            while (a && !c_.test(a.nodeName) && p.css(a, "position") === "static") {
                a = a.offsetParent
            }
            return a || e.body
        })
    }}), p.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var d = /Y/.test(c);
        p.fn[a] = function (e) {
            return p.access(this, function (a, e, f) {
                var g = da(a);
                if (f === b) {
                    return g ? c in g ? g[c] : g.document.documentElement[e] : a[e]
                }
                g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop()) : a[e] = f
            }, a, e, arguments.length, null)
        }
    }), p.each({Height: "height", Width: "width"}, function (a, c) {
        p.each({padding: "inner" + a, content: c, "": "outer" + a}, function (d, e) {
            p.fn[e] = function (e, f) {
                var g = arguments.length && (d || typeof e != "boolean"), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return p.access(this, function (c, d, e) {
                    var f;
                    return p.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? p.css(c, d, e, h) : p.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), a.jQuery = a.$ = p, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return p
    })
})(window);
var inntwoConfig = {};
inntwoConfig.qqLoginUrl = "https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=100553868&display={2}&redirect_uri={0}/passportCallback/QQLoginCallBack/&state={1}";
inntwoConfig.getQqLoginUrl = function (a) {
    return InnTwoTools.format(inntwoConfig.qqLoginUrl, a.redirectUri, a.state, a.clientType ? a.clientType : "pc")
};
inntwoConfig.weiboLoginUrl = "https://api.weibo.com/oauth2/authorize?redirect_uri={0}/passportCallback/weiboLoginCallBack/&client_id=475685934&display=default&state={1}";
/*
 * Bootstrap.js by @fat & @mdo
 * Copyright 2012 Twitter, Inc.
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
!function (a) {
    a(function () {
        a.support.transition = function () {
            var b = function () {
                var c = document.createElement("bootstrap"), f = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend"}, d;
                for (d in f) {
                    if (c.style[d] !== undefined) {
                        return f[d]
                    }
                }
            }();
            return b && {end: b}
        }()
    })
}(window.jQuery), !function (a) {
    var d = '[data-dismiss="alert"]', b = function (e) {
        a(e).on("click", d, this.close)
    };
    b.prototype.close = function (j) {
        function h() {
            e.trigger("closed").remove()
        }

        var f = a(this), g = f.attr("data-target"), e;
        g || (g = f.attr("href"), g = g && g.replace(/.*(?=#[^\s]*$)/, "")), e = a(g), j && j.preventDefault(), e.length || (e = f.hasClass("alert") ? f : f.parent()), e.trigger(j = a.Event("close"));
        if (j.isDefaultPrevented()) {
            return
        }
        e.removeClass("in"), a.support.transition && e.hasClass("fade") ? e.on(a.support.transition.end, h) : h()
    };
    var c = a.fn.alert;
    a.fn.alert = function (e) {
        return this.each(function () {
            var g = a(this), f = g.data("alert");
            f || g.data("alert", f = new b(this)), typeof e == "string" && f[e].call(g)
        })
    }, a.fn.alert.Constructor = b, a.fn.alert.noConflict = function () {
        return a.fn.alert = c, this
    }, a(document).on("click.alert.data-api", d, b.prototype.close)
}(window.jQuery), !function (a) {
    var c = function (e, d) {
        this.$element = a(e), this.options = a.extend({}, a.fn.button.defaults, d)
    };
    c.prototype.setState = function (d) {
        var j = "disabled", g = this.$element, h = g.data(), f = g.is("input") ? "val" : "html";
        d += "Text", h.resetText || g.data("resetText", g[f]()), g[f](h[d] || this.options[d]), setTimeout(function () {
            d == "loadingText" ? g.addClass(j).attr(j, j) : g.removeClass(j).removeAttr(j)
        }, 0)
    }, c.prototype.toggle = function () {
        var d = this.$element.closest('[data-toggle="buttons-radio"]');
        d && d.find(".active").removeClass("active"), this.$element.toggleClass("active")
    };
    var b = a.fn.button;
    a.fn.button = function (d) {
        return this.each(function () {
            var f = a(this), e = f.data("button"), g = typeof d == "object" && d;
            e || f.data("button", e = new c(this, g)), d == "toggle" ? e.toggle() : d && e.setState(d)
        })
    }, a.fn.button.defaults = {loadingText: "loading..."}, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = b, this
    }, a(document).on("click.button.data-api", "[data-toggle^=button]", function (e) {
        var d = a(e.target);
        d.hasClass("btn") || (d = d.closest(".btn")), d.button("toggle")
    })
}(window.jQuery), !function (a) {
    var c = function (e, d) {
        this.$element = a(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = d, this.options.pause == "hover" && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    c.prototype = {cycle: function (d) {
        return d || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, getActiveIndex: function () {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, to: function (f) {
        var d = this.getActiveIndex(), e = this;
        if (f > this.$items.length - 1 || f < 0) {
            return
        }
        return this.sliding ? this.$element.one("slid", function () {
            e.to(f)
        }) : d == f ? this.pause().cycle() : this.slide(f > d ? "next" : "prev", a(this.$items[f]))
    }, pause: function (d) {
        return d || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
    }, next: function () {
        if (this.sliding) {
            return
        }
        return this.slide("next")
    }, prev: function () {
        if (this.sliding) {
            return
        }
        return this.slide("prev")
    }, slide: function (m, h) {
        var k = this.$element.find(".item.active"), g = h || k[m](), l = this.interval, j = m == "next" ? "left" : "right", p = m == "next" ? "first" : "last", d = this, e;
        this.sliding = !0, l && this.pause(), g = g.length ? g : this.$element.find(".item")[p](), e = a.Event("slide", {relatedTarget: g[0], direction: j});
        if (g.hasClass("active")) {
            return
        }
        this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
            var f = a(d.$indicators.children()[d.getActiveIndex()]);
            f && f.addClass("active")
        }));
        if (a.support.transition && this.$element.hasClass("slide")) {
            this.$element.trigger(e);
            if (e.isDefaultPrevented()) {
                return
            }
            g.addClass(m), g[0].offsetWidth, k.addClass(j), g.addClass(j), this.$element.one(a.support.transition.end, function () {
                g.removeClass([m, j].join(" ")).addClass("active"), k.removeClass(["active", j].join(" ")), d.sliding = !1, setTimeout(function () {
                    d.$element.trigger("slid")
                }, 0)
            })
        } else {
            this.$element.trigger(e);
            if (e.isDefaultPrevented()) {
                return
            }
            k.removeClass("active"), g.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
        }
        return l && this.cycle(), this
    }};
    var b = a.fn.carousel;
    a.fn.carousel = function (d) {
        return this.each(function () {
            var g = a(this), e = g.data("carousel"), h = a.extend({}, a.fn.carousel.defaults, typeof d == "object" && d), f = typeof d == "string" ? d : h.slide;
            e || g.data("carousel", e = new c(this, h)), typeof d == "number" ? e.to(d) : f ? e[f]() : h.interval && e.pause().cycle()
        })
    }, a.fn.carousel.defaults = {interval: 5000, pause: "hover"}, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = b, this
    }, a(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function (j) {
        var e = a(this), g, d = a(e.attr("data-target") || (g = e.attr("href")) && g.replace(/.*(?=#[^\s]+$)/, "")), h = a.extend({}, d.data(), e.data()), f;
        d.carousel(h), (f = e.attr("data-slide-to")) && d.data("carousel").pause().to(f).cycle(), j.preventDefault()
    })
}(window.jQuery), !function (a) {
    var c = function (e, d) {
        this.$element = a(e), this.options = a.extend({}, a.fn.collapse.defaults, d), this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    c.prototype = {constructor: c, dimension: function () {
        var d = this.$element.hasClass("width");
        return d ? "width" : "height"
    }, show: function () {
        var g, e, f, d;
        if (this.transitioning || this.$element.hasClass("in")) {
            return
        }
        g = this.dimension(), e = a.camelCase(["scroll", g].join("-")), f = this.$parent && this.$parent.find("> .accordion-group > .in");
        if (f && f.length) {
            d = f.data("collapse");
            if (d && d.transitioning) {
                return
            }
            f.collapse("hide"), d || f.data("collapse", null)
        }
        this.$element[g](0), this.transition("addClass", a.Event("show"), "shown"), a.support.transition && this.$element[g](this.$element[0][e])
    }, hide: function () {
        var d;
        if (this.transitioning || !this.$element.hasClass("in")) {
            return
        }
        d = this.dimension(), this.reset(this.$element[d]()), this.transition("removeClass", a.Event("hide"), "hidden"), this.$element[d](0)
    }, reset: function (d) {
        var f = this.dimension();
        return this.$element.removeClass("collapse")[f](d || "auto")[0].offsetWidth, this.$element[d !== null ? "addClass" : "removeClass"]("collapse"), this
    }, transition: function (h, e, f) {
        var d = this, g = function () {
            e.type == "show" && d.reset(), d.transitioning = 0, d.$element.trigger(f)
        };
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) {
            return
        }
        this.transitioning = 1, this.$element[h]("in"), a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, g) : g()
    }, toggle: function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }};
    var b = a.fn.collapse;
    a.fn.collapse = function (d) {
        return this.each(function () {
            var f = a(this), e = f.data("collapse"), g = a.extend({}, a.fn.collapse.defaults, f.data(), typeof d == "object" && d);
            e || f.data("collapse", e = new c(this, g)), typeof d == "string" && e[d]()
        })
    }, a.fn.collapse.defaults = {toggle: !0}, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = b, this
    }, a(document).on("click.collapse.data-api", "[data-toggle=collapse]", function (h) {
        var e = a(this), f, d = e.attr("data-target") || h.preventDefault() || (f = e.attr("href")) && f.replace(/.*(?=#[^\s]+$)/, ""), g = a(d).data("collapse") ? "toggle" : e.data();
        e[a(d).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), a(d).collapse(g)
    })
}(window.jQuery), !function (a) {
    function d() {
        a(".dropdown-backdrop").remove(), a(g).each(function () {
            b(a(this)).removeClass("open")
        })
    }

    function b(j) {
        var e = j.attr("data-target"), h;
        e || (e = j.attr("href"), e = e && /#/.test(e) && e.replace(/.*(?=#[^\s]*$)/, "")), h = e && a(e);
        if (!h || !h.length) {
            h = j.parent()
        }
        return h
    }

    var g = "[data-toggle=dropdown]", c = function (h) {
        var e = a(h).on("click.dropdown.data-api", this.toggle);
        a("html").on("click.dropdown.data-api", function () {
            e.parent().removeClass("open")
        })
    };
    c.prototype = {constructor: c, toggle: function (k) {
        var e = a(this), j, h;
        if (e.is(".disabled, :disabled")) {
            return
        }
        return j = b(e), h = j.hasClass("open"), d(), h || ("ontouchstart" in document.documentElement && a('<div class="dropdown-backdrop"/>').insertBefore(a(this)).on("click", d), j.toggleClass("open")), e.focus(), !1
    }, keydown: function (j) {
        var l, m, k, p, e, h;
        if (!/(38|40|27)/.test(j.keyCode)) {
            return
        }
        l = a(this), j.preventDefault(), j.stopPropagation();
        if (l.is(".disabled, :disabled")) {
            return
        }
        p = b(l), e = p.hasClass("open");
        if (!e || e && j.keyCode == 27) {
            return j.which == 27 && p.find(g).focus(), l.click()
        }
        m = a("[role=menu] li:not(.divider):visible a", p);
        if (!m.length) {
            return
        }
        h = m.index(m.filter(":focus")), j.keyCode == 38 && h > 0 && h--, j.keyCode == 40 && h < m.length - 1 && h++, ~h || (h = 0), m.eq(h).focus()
    }};
    var f = a.fn.dropdown;
    a.fn.dropdown = function (e) {
        return this.each(function () {
            var j = a(this), h = j.data("dropdown");
            h || j.data("dropdown", h = new c(this)), typeof e == "string" && h[e].call(j)
        })
    }, a.fn.dropdown.Constructor = c, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = f, this
    }, a(document).on("click.dropdown.data-api", d).on("click.dropdown.data-api", ".dropdown form", function (h) {
        h.stopPropagation()
    }).on("click.dropdown.data-api", g, c.prototype.toggle).on("keydown.dropdown.data-api", g + ", [role=menu]", c.prototype.keydown)
}(window.jQuery), !function (a) {
    var c = function (e, d) {
        this.options = d, this.$element = a(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    c.prototype = {constructor: c, toggle: function () {
        return this[this.isShown ? "hide" : "show"]()
    }, show: function () {
        var e = this, d = a.Event("show");
        this.$element.trigger(d);
        if (this.isShown || d.isDefaultPrevented()) {
            return
        }
        this.isShown = !0, this.escape(), this.backdrop(function () {
            var f = a.support.transition && e.$element.hasClass("fade");
            e.$element.parent().length || e.$element.appendTo(document.body), e.$element.show(), f && e.$element[0].offsetWidth, e.$element.addClass("in").attr("aria-hidden", !1), e.enforceFocus(), f ? e.$element.one(a.support.transition.end, function () {
                e.$element.focus().trigger("shown")
            }) : e.$element.focus().trigger("shown")
        })
    }, hide: function (e) {
        e && e.preventDefault();
        var d = this;
        e = a.Event("hide"), this.$element.trigger(e);
        if (!this.isShown || e.isDefaultPrevented()) {
            return
        }
        this.isShown = !1, this.escape(), a(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), a.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
    }, enforceFocus: function () {
        var d = this;
        a(document).on("focusin.modal", function (f) {
            d.$element[0] !== f.target && !d.$element.has(f.target).length && d.$element.focus()
        })
    }, escape: function () {
        var d = this;
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function (e) {
            e.which == 27 && d.hide()
        }) : this.isShown || this.$element.off("keyup.dismiss.modal")
    }, hideWithTransition: function () {
        var e = this, d = setTimeout(function () {
            e.$element.off(a.support.transition.end), e.hideModal()
        }, 500);
        this.$element.one(a.support.transition.end, function () {
            clearTimeout(d), e.hideModal()
        })
    }, hideModal: function () {
        var d = this;
        this.$element.hide(), this.backdrop(function () {
            d.removeBackdrop(), d.$element.trigger("hidden")
        })
    }, removeBackdrop: function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, backdrop: function (g) {
        var e = this, f = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && f;
            this.$backdrop = a('<div class="modal-backdrop ' + f + '" />').appendTo(document.body), this.$backdrop.click(this.options.backdrop == "static" ? a.proxy(this.$element[0].focus, this.$element[0]) : a.proxy(this.hide, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in");
            if (!g) {
                return
            }
            d ? this.$backdrop.one(a.support.transition.end, g) : g()
        } else {
            !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, g) : g()) : g && g()
        }
    }};
    var b = a.fn.modal;
    a.fn.modal = function (d) {
        return this.each(function () {
            var f = a(this), e = f.data("modal"), g = a.extend({}, a.fn.modal.defaults, f.data(), typeof d == "object" && d);
            e || f.data("modal", e = new c(this, g)), typeof d == "string" ? e[d]() : g.show && e.show()
        })
    }, a.fn.modal.defaults = {backdrop: !0, keyboard: !0, show: !0}, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = b, this
    }, a(document).on("click.modal.data-api", '[data-toggle="modal"]', function (h) {
        var e = a(this), f = e.attr("href"), d = a(e.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")), g = d.data("modal") ? "toggle" : a.extend({remote: !/#/.test(f) && f}, d.data(), e.data());
        h.preventDefault(), d.modal(g).one("hide", function () {
            e.focus()
        })
    })
}(window.jQuery), !function (a) {
    var c = function (d, f) {
        this.init("tooltip", d, f)
    };
    c.prototype = {constructor: c, init: function (k, f, h) {
        var e, j, g, l, d;
        this.type = k, this.$element = a(f), this.options = this.getOptions(h), this.enabled = !0, g = this.options.trigger.split(" ");
        for (d = g.length; d--;) {
            l = g[d], l == "click" ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : l != "manual" && (e = l == "hover" ? "mouseenter" : "focus", j = l == "hover" ? "mouseleave" : "blur", this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(j + "." + this.type, this.options.selector, a.proxy(this.leave, this)))
        }
        this.options.selector ? this._options = a.extend({}, this.options, {trigger: "manual", selector: ""}) : this.fixTitle()
    }, getOptions: function (d) {
        return d = a.extend({}, a.fn[this.type].defaults, this.$element.data(), d), d.delay && typeof d.delay == "number" && (d.delay = {show: d.delay, hide: d.delay}), d
    }, enter: function (g) {
        var e = a.fn[this.type].defaults, f = {}, d;
        this._options && a.each(this._options, function (h, j) {
            e[h] != j && (f[h] = j)
        }, this), d = a(g.currentTarget)[this.type](f).data(this.type);
        if (!d.options.delay || !d.options.delay.show) {
            return d.show()
        }
        clearTimeout(this.timeout), d.hoverState = "in", this.timeout = setTimeout(function () {
            d.hoverState == "in" && d.show()
        }, d.options.delay.show)
    }, leave: function (e) {
        var d = a(e.currentTarget)[this.type](this._options).data(this.type);
        this.timeout && clearTimeout(this.timeout);
        if (!d.options.delay || !d.options.delay.hide) {
            return d.hide()
        }
        d.hoverState = "out", this.timeout = setTimeout(function () {
            d.hoverState == "out" && d.hide()
        }, d.options.delay.hide)
    }, show: function () {
        var j, e, g, d, h, f, k = a.Event("show");
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(k);
            if (k.isDefaultPrevented()) {
                return
            }
            j = this.tip(), this.setContent(), this.options.animation && j.addClass("fade"), h = typeof this.options.placement == "function" ? this.options.placement.call(this, j[0], this.$element[0]) : this.options.placement, j.detach().css({top: 0, left: 0, display: "block"}), this.options.container ? j.appendTo(this.options.container) : j.insertAfter(this.$element), e = this.getPosition(), g = j[0].offsetWidth, d = j[0].offsetHeight;
            switch (h) {
                case"bottom":
                    f = {top: e.top + e.height, left: e.left + e.width / 2 - g / 2};
                    break;
                case"top":
                    f = {top: e.top - d, left: e.left + e.width / 2 - g / 2};
                    break;
                case"left":
                    f = {top: e.top + e.height / 2 - d / 2, left: e.left - g};
                    break;
                case"right":
                    f = {top: e.top + e.height / 2 - d / 2, left: e.left + e.width}
            }
            this.applyPlacement(f, h), this.$element.trigger("shown")
        }
    }, applyPlacement: function (f, m) {
        var h = this.tip(), k = h[0].offsetWidth, g = h[0].offsetHeight, l, j, p, d;
        h.offset(f).addClass(m).addClass("in"), l = h[0].offsetWidth, j = h[0].offsetHeight, m == "top" && j != g && (f.top = f.top + g - j, d = !0), m == "bottom" || m == "top" ? (p = 0, f.left < 0 && (p = f.left * -2, f.left = 0, h.offset(f), l = h[0].offsetWidth, j = h[0].offsetHeight), this.replaceArrow(p - k + l, l, "left")) : this.replaceArrow(j - g, j, "top"), d && h.offset(f)
    }, replaceArrow: function (d, g, f) {
        this.arrow().css(f, d ? 50 * (1 - d / g) + "%" : "")
    }, setContent: function () {
        var d = this.tip(), f = this.getTitle();
        d.find(".tooltip-inner")[this.options.html ? "html" : "text"](f), d.removeClass("fade in top bottom left right")
    }, hide: function () {
        function d() {
            var h = setTimeout(function () {
                e.off(a.support.transition.end).detach()
            }, 500);
            e.one(a.support.transition.end, function () {
                clearTimeout(h), e.detach()
            })
        }

        var g = this, e = this.tip(), f = a.Event("hide");
        this.$element.trigger(f);
        if (f.isDefaultPrevented()) {
            return
        }
        return e.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d() : e.detach(), this.$element.trigger("hidden"), this
    }, fixTitle: function () {
        var d = this.$element;
        (d.attr("title") || typeof d.attr("data-original-title") != "string") && d.attr("data-original-title", d.attr("title") || "").attr("title", "")
    }, hasContent: function () {
        return this.getTitle()
    }, getPosition: function () {
        var d = this.$element[0];
        return a.extend({}, typeof d.getBoundingClientRect == "function" ? d.getBoundingClientRect() : {width: d.offsetWidth, height: d.offsetHeight}, this.$element.offset())
    }, getTitle: function () {
        var d, g = this.$element, f = this.options;
        return d = g.attr("data-original-title") || (typeof f.title == "function" ? f.title.call(g[0]) : f.title), d
    }, tip: function () {
        return this.$tip = this.$tip || a(this.options.template)
    }, arrow: function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, validate: function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, enable: function () {
        this.enabled = !0
    }, disable: function () {
        this.enabled = !1
    }, toggleEnabled: function () {
        this.enabled = !this.enabled
    }, toggle: function (e) {
        var d = e ? a(e.currentTarget)[this.type](this._options).data(this.type) : this;
        d.tip().hasClass("in") ? d.hide() : d.show()
    }, destroy: function () {
        this.hide().$element.off("." + this.type).removeData(this.type)
    }};
    var b = a.fn.tooltip;
    a.fn.tooltip = function (d) {
        return this.each(function () {
            var f = a(this), e = f.data("tooltip"), g = typeof d == "object" && d;
            e || f.data("tooltip", e = new c(this, g)), typeof d == "string" && e[d]()
        })
    }, a.fn.tooltip.Constructor = c, a.fn.tooltip.defaults = {animation: !0, placement: "top", selector: !1, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1}, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = b, this
    }
}(window.jQuery), !function (a) {
    var c = function (d, f) {
        this.init("popover", d, f)
    };
    c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {constructor: c, setContent: function () {
        var d = this.tip(), g = this.getTitle(), f = this.getContent();
        d.find(".popover-title")[this.options.html ? "html" : "text"](g), d.find(".popover-content")[this.options.html ? "html" : "text"](f), d.removeClass("fade top bottom left right in")
    }, hasContent: function () {
        return this.getTitle() || this.getContent()
    }, getContent: function () {
        var d, g = this.$element, f = this.options;
        return d = (typeof f.content == "function" ? f.content.call(g[0]) : f.content) || g.attr("data-content"), d
    }, tip: function () {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    }, destroy: function () {
        this.hide().$element.off("." + this.type).removeData(this.type)
    }});
    var b = a.fn.popover;
    a.fn.popover = function (d) {
        return this.each(function () {
            var f = a(this), e = f.data("popover"), g = typeof d == "object" && d;
            e || f.data("popover", e = new c(this, g)), typeof d == "string" && e[d]()
        })
    }, a.fn.popover.Constructor = c, a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {placement: "right", trigger: "click", content: "", template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), a.fn.popover.noConflict = function () {
        return a.fn.popover = b, this
    }
}(window.jQuery), !function (a) {
    function c(h, e) {
        var f = a.proxy(this.process, this), d = a(h).is("body") ? a(window) : a(h), g;
        this.options = a.extend({}, a.fn.scrollspy.defaults, e), this.$scrollElement = d.on("scroll.scroll-spy.data-api", f), this.selector = (this.options.target || (g = a(h).attr("href")) && g.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = a("body"), this.refresh(), this.process()
    }

    c.prototype = {constructor: c, refresh: function () {
        var e = this, d;
        this.offsets = a([]), this.targets = a([]), d = this.$body.find(this.selector).map(function () {
            var g = a(this), h = g.data("target") || g.attr("href"), f = /^#\w/.test(h) && a(h);
            return f && f.length && [
                [f.position().top + (!a.isWindow(e.$scrollElement.get(0)) && e.$scrollElement.scrollTop()), h]
            ] || null
        }).sort(function (f, g) {
            return f[0] - g[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, process: function () {
        var d = this.$scrollElement.scrollTop() + this.options.offset, l = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, g = l - this.$scrollElement.height(), j = this.offsets, f = this.targets, k = this.activeTarget, h;
        if (d >= g) {
            return k != (h = f.last()[0]) && this.activate(h)
        }
        for (h = j.length; h--;) {
            k != f[h] && d >= j[h] && (!j[h + 1] || d <= j[h + 1]) && this.activate(f[h])
        }
    }, activate: function (f) {
        var d, e;
        this.activeTarget = f, a(this.selector).parent(".active").removeClass("active"), e = this.selector + '[data-target="' + f + '"],' + this.selector + '[href="' + f + '"]', d = a(e).parent("li").addClass("active"), d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate")
    }};
    var b = a.fn.scrollspy;
    a.fn.scrollspy = function (d) {
        return this.each(function () {
            var f = a(this), e = f.data("scrollspy"), g = typeof d == "object" && d;
            e || f.data("scrollspy", e = new c(this, g)), typeof d == "string" && e[d]()
        })
    }, a.fn.scrollspy.Constructor = c, a.fn.scrollspy.defaults = {offset: 10}, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = b, this
    }, a(window).on("load", function () {
        a('[data-spy="scroll"]').each(function () {
            var d = a(this);
            d.scrollspy(d.data())
        })
    })
}(window.jQuery), !function (a) {
    var c = function (d) {
        this.element = a(d)
    };
    c.prototype = {constructor: c, show: function () {
        var j = this.element, e = j.closest("ul:not(.dropdown-menu)"), g = j.attr("data-target"), d, h, f;
        g || (g = j.attr("href"), g = g && g.replace(/.*(?=#[^\s]*$)/, ""));
        if (j.parent("li").hasClass("active")) {
            return
        }
        d = e.find(".active:last a")[0], f = a.Event("show", {relatedTarget: d}), j.trigger(f);
        if (f.isDefaultPrevented()) {
            return
        }
        h = a(g), this.activate(j.parent("li"), e), this.activate(h, h.parent(), function () {
            j.trigger({type: "shown", relatedTarget: d})
        })
    }, activate: function (j, e, g) {
        function f() {
            d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), j.addClass("active"), h ? (j[0].offsetWidth, j.addClass("in")) : j.removeClass("fade"), j.parent(".dropdown-menu") && j.closest("li.dropdown").addClass("active"), g && g()
        }

        var d = e.find("> .active"), h = g && a.support.transition && d.hasClass("fade");
        h ? d.one(a.support.transition.end, f) : f(), d.removeClass("in")
    }};
    var b = a.fn.tab;
    a.fn.tab = function (d) {
        return this.each(function () {
            var f = a(this), e = f.data("tab");
            e || f.data("tab", e = new c(this)), typeof d == "string" && e[d]()
        })
    }, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = b, this
    }, a(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (d) {
        d.preventDefault(), a(this).tab("show")
    })
}(window.jQuery), !function (a) {
    var c = function (e, d) {
        this.$element = a(e), this.options = a.extend({}, a.fn.typeahead.defaults, d), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = a(this.options.menu), this.shown = !1, this.listen()
    };
    c.prototype = {constructor: c, select: function () {
        var d = this.$menu.find(".active").attr("data-value");
        return this.$element.val(this.updater(d)).change(), this.hide()
    }, updater: function (d) {
        return d
    }, show: function () {
        var d = a.extend({}, this.$element.position(), {height: this.$element[0].offsetHeight});
        return this.$menu.insertAfter(this.$element).css({top: d.top + d.height, left: d.left}).show(), this.shown = !0, this
    }, hide: function () {
        return this.$menu.hide(), this.shown = !1, this
    }, lookup: function (e) {
        var d;
        return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (d = a.isFunction(this.source) ? this.source(this.query, a.proxy(this.process, this)) : this.source, d ? this.process(d) : this)
    }, process: function (e) {
        var d = this;
        return e = a.grep(e, function (f) {
            return d.matcher(f)
        }), e = this.sorter(e), e.length ? this.render(e.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
    }, matcher: function (d) {
        return ~d.toLowerCase().indexOf(this.query.toLowerCase())
    }, sorter: function (d) {
        var j = [], g = [], h = [], f;
        while (f = d.shift()) {
            f.toLowerCase().indexOf(this.query.toLowerCase()) ? ~f.indexOf(this.query) ? g.push(f) : h.push(f) : j.push(f)
        }
        return j.concat(g, h)
    }, highlighter: function (d) {
        var f = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        return d.replace(new RegExp("(" + f + ")", "ig"), function (g, h) {
            return"<strong>" + h + "</strong>"
        })
    }, render: function (e) {
        var d = this;
        return e = a(e).map(function (g, f) {
            return g = a(d.options.item).attr("data-value", f), g.find("a").html(d.highlighter(f)), g[0]
        }), e.first().addClass("active"), this.$menu.html(e), this
    }, next: function (f) {
        var d = this.$menu.find(".active").removeClass("active"), e = d.next();
        e.length || (e = a(this.$menu.find("li")[0])), e.addClass("active")
    }, prev: function (d) {
        var g = this.$menu.find(".active").removeClass("active"), f = g.prev();
        f.length || (f = this.$menu.find("li").last()), f.addClass("active")
    }, listen: function () {
        this.$element.on("focus", a.proxy(this.focus, this)).on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", a.proxy(this.keydown, this)), this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this)).on("mouseleave", "li", a.proxy(this.mouseleave, this))
    }, eventSupported: function (d) {
        var f = d in this.$element;
        return f || (this.$element.setAttribute(d, "return;"), f = typeof this.$element[d] == "function"), f
    }, move: function (d) {
        if (!this.shown) {
            return
        }
        switch (d.keyCode) {
            case 9:
            case 13:
            case 27:
                d.preventDefault();
                break;
            case 38:
                d.preventDefault(), this.prev();
                break;
            case 40:
                d.preventDefault(), this.next()
        }
        d.stopPropagation()
    }, keydown: function (d) {
        this.suppressKeyPressRepeat = ~a.inArray(d.keyCode, [40, 38, 9, 13, 27]), this.move(d)
    }, keypress: function (d) {
        if (this.suppressKeyPressRepeat) {
            return
        }
        this.move(d)
    }, keyup: function (d) {
        switch (d.keyCode) {
            case 40:
            case 38:
            case 16:
            case 17:
            case 18:
                break;
            case 9:
            case 13:
                if (!this.shown) {
                    return
                }
                this.select();
                break;
            case 27:
                if (!this.shown) {
                    return
                }
                this.hide();
                break;
            default:
                this.lookup()
        }
        d.stopPropagation(), d.preventDefault()
    }, focus: function (d) {
        this.focused = !0
    }, blur: function (d) {
        this.focused = !1, !this.mousedover && this.shown && this.hide()
    }, click: function (d) {
        d.stopPropagation(), d.preventDefault(), this.select(), this.$element.focus()
    }, mouseenter: function (d) {
        this.mousedover = !0, this.$menu.find(".active").removeClass("active"), a(d.currentTarget).addClass("active")
    }, mouseleave: function (d) {
        this.mousedover = !1, !this.focused && this.shown && this.hide()
    }};
    var b = a.fn.typeahead;
    a.fn.typeahead = function (d) {
        return this.each(function () {
            var f = a(this), e = f.data("typeahead"), g = typeof d == "object" && d;
            e || f.data("typeahead", e = new c(this, g)), typeof d == "string" && e[d]()
        })
    }, a.fn.typeahead.defaults = {source: [], items: 8, menu: '<ul class="typeahead dropdown-menu"></ul>', item: '<li><a href="#"></a></li>', minLength: 1}, a.fn.typeahead.Constructor = c, a.fn.typeahead.noConflict = function () {
        return a.fn.typeahead = b, this
    }, a(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function (e) {
        var d = a(this);
        if (d.data("typeahead")) {
            return
        }
        d.typeahead(d.data())
    })
}(window.jQuery), !function (a) {
    var c = function (e, d) {
        this.options = a.extend({}, a.fn.affix.defaults, d), this.$window = a(window).on("scroll.affix.data-api", a.proxy(this.checkPosition, this)).on("click.affix.data-api", a.proxy(function () {
            setTimeout(a.proxy(this.checkPosition, this), 1)
        }, this)), this.$element = a(e), this.checkPosition()
    };
    c.prototype.checkPosition = function () {
        if (!this.$element.is(":visible")) {
            return
        }
        var k = a(document).height(), f = this.$window.scrollTop(), h = this.$element.offset(), e = this.options.offset, j = e.bottom, g = e.top, l = "affix affix-top affix-bottom", d;
        typeof e != "object" && (j = g = e), typeof g == "function" && (g = e.top()), typeof j == "function" && (j = e.bottom()), d = this.unpin != null && f + this.unpin <= h.top ? !1 : j != null && h.top + this.$element.height() >= k - j ? "bottom" : g != null && f <= g ? "top" : !1;
        if (this.affixed === d) {
            return
        }
        this.affixed = d, this.unpin = d == "bottom" ? h.top - f : null, this.$element.removeClass(l).addClass("affix" + (d ? "-" + d : ""))
    };
    var b = a.fn.affix;
    a.fn.affix = function (d) {
        return this.each(function () {
            var f = a(this), e = f.data("affix"), g = typeof d == "object" && d;
            e || f.data("affix", e = new c(this, g)), typeof d == "string" && e[d]()
        })
    }, a.fn.affix.Constructor = c, a.fn.affix.defaults = {offset: 0}, a.fn.affix.noConflict = function () {
        return a.fn.affix = b, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var e = a(this), d = e.data();
            d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), d.offsetTop && (d.offset.top = d.offsetTop), e.affix(d)
        })
    })
}(window.jQuery);
!function (a) {
    var b = function (d, e) {
        this.init(d, e)
    }, c = null;
    b.prototype = {init: function (d, f) {
        this.$element = a(d);
        var g = f && f.bootstrapMajorVersion ? f.bootstrapMajorVersion : a.fn.bootstrapPaginator.defaults.bootstrapMajorVersion, e = this.$element.attr("id");
        if (2 === g && !this.$element.is("div")) {
            throw"in Bootstrap version 2 the pagination must be a div element. Or if you are using Bootstrap pagination 3. Please specify it in bootstrapMajorVersion in the option"
        }
        if (g > 2 && !this.$element.is("ul")) {
            throw"in Bootstrap version 3 the pagination root item must be an ul element."
        }
        this.currentPage = 1, this.lastPage = 1, this.setOptions(f), this.initialized = !0
    }, setOptions: function (d) {
        this.options = a.extend({}, this.options || a.fn.bootstrapPaginator.defaults, d), this.totalPages = parseInt(this.options.totalPages, 10), this.numberOfPages = parseInt(this.options.numberOfPages, 10), d && "undefined" != typeof d.currentPage && this.setCurrentPage(d.currentPage), this.listen(), this.render(), this.initialized || this.lastPage === this.currentPage || this.$element.trigger("page-changed", [this.lastPage, this.currentPage])
    }, listen: function () {
        this.$element.off("page-clicked"), this.$element.off("page-changed"), "function" == typeof this.options.onPageClicked && this.$element.bind("page-clicked", this.options.onPageClicked), "function" == typeof this.options.onPageChanged && this.$element.on("page-changed", this.options.onPageChanged), this.$element.bind("page-clicked", this.onPageClicked)
    }, destroy: function () {
        this.$element.off("page-clicked"), this.$element.off("page-changed"), this.$element.removeData("bootstrapPaginator"), this.$element.empty()
    }, show: function (d) {
        this.setCurrentPage(d), this.render(), this.lastPage !== this.currentPage && this.$element.trigger("page-changed", [this.lastPage, this.currentPage])
    }, showNext: function () {
        var d = this.getPages();
        d.next && this.show(d.next)
    }, showPrevious: function () {
        var d = this.getPages();
        d.prev && this.show(d.prev)
    }, showFirst: function () {
        var d = this.getPages();
        d.first && this.show(d.first)
    }, showLast: function () {
        var d = this.getPages();
        d.last && this.show(d.last)
    }, onPageItemClicked: function (d) {
        var f = d.data.type, e = d.data.page;
        this.$element.trigger("page-clicked", [d, f, e])
    }, onPageClicked: function (e, f, h, g) {
        var d = a(e.currentTarget);
        switch (h) {
            case"first":
                d.bootstrapPaginator("showFirst");
                break;
            case"prev":
                d.bootstrapPaginator("showPrevious");
                break;
            case"next":
                d.bootstrapPaginator("showNext");
                break;
            case"last":
                d.bootstrapPaginator("showLast");
                break;
            case"page":
                d.bootstrapPaginator("show", g)
        }
    }, render: function () {
        var e = this.getValueFromOption(this.options.containerClass, this.$element), q = this.options.size || "normal", d = this.options.alignment || "left", n = this.getPages(), j = 2 === this.options.bootstrapMajorVersion ? a("<ul></ul>") : this.$element, k = 2 === this.options.bootstrapMajorVersion ? this.getValueFromOption(this.options.listContainerClass, j) : null, f = null, o = null, l = null, h = null, m = null, g = 0;
        switch (this.$element.prop("class", ""), this.$element.addClass("pagination"), q.toLowerCase()) {
            case"large":
            case"small":
            case"mini":
                this.$element.addClass(a.fn.bootstrapPaginator.sizeArray[this.options.bootstrapMajorVersion][q.toLowerCase()])
        }
        if (2 === this.options.bootstrapMajorVersion) {
            switch (d.toLowerCase()) {
                case"center":
                    this.$element.addClass("pagination-centered");
                    break;
                case"right":
                    this.$element.addClass("pagination-right")
            }
        }
        for (this.$element.addClass(e), this.$element.empty(), 2 === this.options.bootstrapMajorVersion && (this.$element.append(j), j.addClass(k)), this.pageRef = [], n.first && (f = this.buildPageItem("first", n.first), f && j.append(f)), n.prev && (o = this.buildPageItem("prev", n.prev), o && j.append(o)), g = 0; g < n.length; g += 1) {
            m = this.buildPageItem("page", n[g]), m && j.append(m)
        }
        n.next && (l = this.buildPageItem("next", n.next), l && j.append(l)), n.last && (h = this.buildPageItem("last", n.last), h && j.append(h))
    }, buildPageItem: function (m, h) {
        var d = a("<li></li>"), f = a("<a></a>"), j = "", k = "", e = this.options.itemContainerClass(m, h, this.currentPage), g = this.getValueFromOption(this.options.itemContentClass, m, h, this.currentPage), l = null;
        switch (m) {
            case"first":
                if (!this.getValueFromOption(this.options.shouldShowPage, m, h, this.currentPage)) {
                    return
                }
                j = this.options.itemTexts(m, h, this.currentPage), k = this.options.tooltipTitles(m, h, this.currentPage);
                break;
            case"last":
                if (!this.getValueFromOption(this.options.shouldShowPage, m, h, this.currentPage)) {
                    return
                }
                j = this.options.itemTexts(m, h, this.currentPage), k = this.options.tooltipTitles(m, h, this.currentPage);
                break;
            case"prev":
                if (!this.getValueFromOption(this.options.shouldShowPage, m, h, this.currentPage)) {
                    return
                }
                j = this.options.itemTexts(m, h, this.currentPage), k = this.options.tooltipTitles(m, h, this.currentPage);
                break;
            case"next":
                if (!this.getValueFromOption(this.options.shouldShowPage, m, h, this.currentPage)) {
                    return
                }
                j = this.options.itemTexts(m, h, this.currentPage), k = this.options.tooltipTitles(m, h, this.currentPage);
                break;
            case"page":
                if (!this.getValueFromOption(this.options.shouldShowPage, m, h, this.currentPage)) {
                    return
                }
                j = this.options.itemTexts(m, h, this.currentPage), k = this.options.tooltipTitles(m, h, this.currentPage)
        }
        return d.addClass(e).append(f), f.addClass(g).html(j).on("click", null, {type: m, page: h}, a.proxy(this.onPageItemClicked, this)), this.options.pageUrl && f.attr("href", this.getValueFromOption(this.options.pageUrl, m, h, this.currentPage)), this.options.useBootstrapTooltip ? (l = a.extend({}, this.options.bootstrapTooltipOptions, {title: k}), f.tooltip(l)) : f.attr("title", k), d
    }, setCurrentPage: function (d) {
        if (d > this.totalPages || 1 > d) {
            throw"Page out of range"
        }
        this.lastPage = this.currentPage, this.currentPage = parseInt(d, 10)
    }, getPages: function () {
        var h = this.totalPages, g = 0 === this.currentPage % this.numberOfPages ? (parseInt(this.currentPage / this.numberOfPages, 10) - 1) * this.numberOfPages + 1 : parseInt(this.currentPage / this.numberOfPages, 10) * this.numberOfPages + 1, f = [], e = 0, d = 0;
        for (g = 1 > g ? 1 : g, e = g, d = 0; d < this.numberOfPages && h >= e; e += 1, d += 1) {
            f.push(e)
        }
        return f.first = 1, f.prev = this.currentPage > 1 ? this.currentPage - 1 : 1, f.next = this.currentPage < h ? this.currentPage + 1 : h, f.last = h, f.current = this.currentPage, f.total = h, f.numberOfPages = this.options.numberOfPages, f
    }, getValueFromOption: function (f) {
        var e = null, d = Array.prototype.slice.call(arguments, 1);
        return e = "function" == typeof f ? f.apply(this, d) : f
    }}, c = a.fn.bootstrapPaginator, a.fn.bootstrapPaginator = function (e) {
        var d = arguments, f = null;
        return a(this).each(function (j, k) {
            var g = a(k), h = g.data("bootstrapPaginator"), l = "object" != typeof e ? null : e;
            if (!h) {
                return h = new b(this, l), g = a(h.$element), g.data("bootstrapPaginator", h), void 0
            }
            if ("string" == typeof e) {
                if (!h[e]) {
                    throw"Method " + e + " does not exist"
                }
                f = h[e].apply(h, Array.prototype.slice.call(d, 1))
            } else {
                f = h.setOptions(e)
            }
        }), f
    }, a.fn.bootstrapPaginator.sizeArray = {2: {large: "pagination-large", small: "pagination-small", mini: "pagination-mini"}, 3: {large: "pagination-lg", small: "pagination-sm", mini: ""}}, a.fn.bootstrapPaginator.defaults = {containerClass: "", size: "normal", alignment: "left", bootstrapMajorVersion: 2, listContainerClass: "", itemContainerClass: function (f, e, d) {
        return e === d ? "active" : ""
    }, itemContentClass: function (f, e, d) {
        return""
    }, currentPage: 1, numberOfPages: 5, totalPages: 1, pageUrl: function (f, e, d) {
        return null
    }, onPageClicked: null, onPageChanged: null, useBootstrapTooltip: !1, shouldShowPage: function (g, e, d) {
        var f = !0;
        switch (g) {
            case"first":
                f = 1 !== d;
                break;
            case"prev":
                f = 1 !== d;
                break;
            case"next":
                f = d !== this.totalPages;
                break;
            case"last":
                f = d !== this.totalPages;
                break;
            case"page":
                f = !0
        }
        return f
    }, itemTexts: function (f, e, d) {
        switch (f) {
            case"first":
                return"&lt;&lt;";
            case"prev":
                return"&lt;";
            case"next":
                return"&gt;";
            case"last":
                return"&gt;&gt;";
            case"page":
                return e
        }
    }, tooltipTitles: function (f, e, d) {
        switch (f) {
            case"first":
                return"第一页";
            case"prev":
                return"上一页";
            case"next":
                return"下一页";
            case"last":
                return"最后一页";
            case"page":
                return e === d ? "第" + d + "页" : "第" + e + "页"
        }
    }, bootstrapTooltipOptions: {animation: !0, html: !0, placement: "top", selector: !1, title: "", container: !1}}, a.fn.bootstrapPaginator.Constructor = b
}(window.jQuery);
/*
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
(function (c, a) {
    if (typeof exports === "object" && exports) {
        a(exports)
    } else {
        var b = {};
        a(b);
        if (typeof define === "function" && define.amd) {
            define(b)
        } else {
            c.Mustache = b
        }
    }
}(this, function (l) {
    var z = /\s*/;
    var t = /\s+/;
    var n = /\S/;
    var e = /\s*=/;
    var b = /\s*\}/;
    var v = /#|\^|\/|>|\{|&|=|!/;
    var q = RegExp.prototype.test;

    function w(B, C) {
        return q.call(B, C)
    }

    function k(B) {
        return !w(n, B)
    }

    var o = Object.prototype.toString;
    var j = Array.isArray || function (B) {
        return o.call(B) === "[object Array]"
    };

    function g(B) {
        return B.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    var d = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;"};

    function f(B) {
        return String(B).replace(/[&<>"'\/]/g, function (C) {
            return d[C]
        })
    }

    function s(B) {
        this.string = B;
        this.tail = B;
        this.pos = 0
    }

    s.prototype.eos = function () {
        return this.tail === ""
    };
    s.prototype.scan = function (C) {
        var B = this.tail.match(C);
        if (B && B.index === 0) {
            this.tail = this.tail.substring(B[0].length);
            this.pos += B[0].length;
            return B[0]
        }
        return""
    };
    s.prototype.scanUntil = function (D) {
        var B, C = this.tail.search(D);
        switch (C) {
            case -1:
                B = this.tail;
                this.pos += this.tail.length;
                this.tail = "";
                break;
            case 0:
                B = "";
                break;
            default:
                B = this.tail.substring(0, C);
                this.tail = this.tail.substring(C);
                this.pos += C
        }
        return B
    };
    function a(C, B) {
        this.view = C || {};
        this.parent = B;
        this._cache = {}
    }

    a.make = function (B) {
        return(B instanceof a) ? B : new a(B)
    };
    a.prototype.push = function (B) {
        return new a(B, this)
    };
    a.prototype.lookup = function (D) {
        var F = this._cache[D];
        if (!F) {
            if (D == ".") {
                F = this.view
            } else {
                var B = this;
                while (B) {
                    if (D.indexOf(".") > 0) {
                        F = B.view;
                        var E = D.split("."), C = 0;
                        while (F && C < E.length) {
                            F = F[E[C++]]
                        }
                    } else {
                        F = B.view[D]
                    }
                    if (F != null) {
                        break
                    }
                    B = B.parent
                }
            }
            this._cache[D] = F
        }
        if (typeof F === "function") {
            F = F.call(this.view)
        }
        return F
    };
    function A() {
        this.clearCache()
    }

    A.prototype.clearCache = function () {
        this._cache = {};
        this._partialCache = {}
    };
    A.prototype.compile = function (D, C) {
        var B = this._cache[D];
        if (!B) {
            var E = l.parse(D, C);
            B = this._cache[D] = this.compileTokens(E, D)
        }
        return B
    };
    A.prototype.compilePartial = function (C, E, D) {
        var B = this.compile(E, D);
        this._partialCache[C] = B;
        return B
    };
    A.prototype.getPartial = function (B) {
        if (!(B in this._partialCache) && this._loadPartial) {
            this.compilePartial(B, this._loadPartial(B))
        }
        return this._partialCache[B]
    };
    A.prototype.compileTokens = function (D, C) {
        var B = this;
        return function (G, F) {
            if (F) {
                if (typeof F === "function") {
                    B._loadPartial = F
                } else {
                    for (var E in F) {
                        B.compilePartial(E, F[E])
                    }
                }
            }
            return r(D, B, a.make(G), C)
        }
    };
    A.prototype.render = function (C, D, B) {
        return this.compile(C)(D, B)
    };
    function r(K, N, C, H) {
        var B = "";
        var J, L, M;
        for (var D = 0, G = K.length; D < G; ++D) {
            J = K[D];
            L = J[1];
            switch (J[0]) {
                case"#":
                    M = C.lookup(L);
                    if (typeof M === "object") {
                        if (j(M)) {
                            for (var E = 0, F = M.length; E < F; ++E) {
                                B += r(J[4], N, C.push(M[E]), H)
                            }
                        } else {
                            if (M) {
                                B += r(J[4], N, C.push(M), H)
                            }
                        }
                    } else {
                        if (typeof M === "function") {
                            var I = H == null ? null : H.slice(J[3], J[5]);
                            M = M.call(C.view, I, function (O) {
                                return N.render(O, C)
                            });
                            if (M != null) {
                                B += M
                            }
                        } else {
                            if (M) {
                                B += r(J[4], N, C, H)
                            }
                        }
                    }
                    break;
                case"^":
                    M = C.lookup(L);
                    if (!M || (j(M) && M.length === 0)) {
                        B += r(J[4], N, C, H)
                    }
                    break;
                case">":
                    M = N.getPartial(L);
                    if (typeof M === "function") {
                        B += M(C)
                    }
                    break;
                case"&":
                    M = C.lookup(L);
                    if (M != null) {
                        B += M
                    }
                    break;
                case"name":
                    M = C.lookup(L);
                    if (M != null) {
                        B += l.escape(M)
                    }
                    break;
                case"text":
                    B += L;
                    break
            }
        }
        return B
    }

    function m(H) {
        var I = [];
        var B = I;
        var F = [];
        var G;
        for (var C = 0, D = H.length; C < D; ++C) {
            G = H[C];
            switch (G[0]) {
                case"#":
                case"^":
                    F.push(G);
                    B.push(G);
                    B = G[4] = [];
                    break;
                case"/":
                    var E = F.pop();
                    E[5] = G[2];
                    B = F.length > 0 ? F[F.length - 1][4] : I;
                    break;
                default:
                    B.push(G)
            }
        }
        return I
    }

    function u(G) {
        var E = [];
        var F, C;
        for (var B = 0, D = G.length; B < D; ++B) {
            F = G[B];
            if (F) {
                if (F[0] === "text" && C && C[0] === "text") {
                    C[1] += F[1];
                    C[3] = F[3]
                } else {
                    C = F;
                    E.push(F)
                }
            }
        }
        return E
    }

    function h(B) {
        return[new RegExp(g(B[0]) + "\\s*"), new RegExp("\\s*" + g(B[1]))]
    }

    function p(O, N) {
        O = O || "";
        N = N || l.tags;
        if (typeof N === "string") {
            N = N.split(t)
        }
        if (N.length !== 2) {
            throw new Error("Invalid tags: " + N.join(", "))
        }
        var M = h(N);
        var H = new s(O);
        var I = [];
        var Q = [];
        var J = [];
        var C = false;
        var F = false;

        function L() {
            if (C && !F) {
                while (J.length) {
                    delete Q[J.pop()]
                }
            } else {
                J = []
            }
            C = false;
            F = false
        }

        var K, R, S, B, P;
        while (!H.eos()) {
            K = H.pos;
            S = H.scanUntil(M[0]);
            if (S) {
                for (var D = 0, E = S.length; D < E; ++D) {
                    B = S.charAt(D);
                    if (k(B)) {
                        J.push(Q.length)
                    } else {
                        F = true
                    }
                    Q.push(["text", B, K, K + 1]);
                    K += 1;
                    if (B == "\n") {
                        L()
                    }
                }
            }
            if (!H.scan(M[0])) {
                break
            }
            C = true;
            R = H.scan(v) || "name";
            H.scan(z);
            if (R === "=") {
                S = H.scanUntil(e);
                H.scan(e);
                H.scanUntil(M[1])
            } else {
                if (R === "{") {
                    S = H.scanUntil(new RegExp("\\s*" + g("}" + N[1])));
                    H.scan(b);
                    H.scanUntil(M[1]);
                    R = "&"
                } else {
                    S = H.scanUntil(M[1])
                }
            }
            if (!H.scan(M[1])) {
                throw new Error("Unclosed tag at " + H.pos)
            }
            P = [R, S, K, H.pos];
            Q.push(P);
            if (R === "#" || R === "^") {
                I.push(P)
            } else {
                if (R === "/") {
                    if (I.length === 0) {
                        throw new Error('Unopened section "' + S + '" at ' + K)
                    }
                    var G = I.pop();
                    if (G[1] !== S) {
                        throw new Error('Unclosed section "' + G[1] + '" at ' + K)
                    }
                } else {
                    if (R === "name" || R === "{" || R === "&") {
                        F = true
                    } else {
                        if (R === "=") {
                            N = S.split(t);
                            if (N.length !== 2) {
                                throw new Error("Invalid tags at " + K + ": " + N.join(", "))
                            }
                            M = h(N)
                        }
                    }
                }
            }
        }
        var G = I.pop();
        if (G) {
            throw new Error('Unclosed section "' + G[1] + '" at ' + H.pos)
        }
        Q = u(Q);
        return m(Q)
    }

    l.name = "mustache.js";
    l.version = "0.7.2";
    l.tags = ["{{", "}}"];
    l.Scanner = s;
    l.Context = a;
    l.Writer = A;
    l.parse = p;
    l.escape = f;
    var c = new A();
    l.clearCache = function () {
        return c.clearCache()
    };
    l.compile = function (C, B) {
        return c.compile(C, B)
    };
    l.compilePartial = function (B, D, C) {
        return c.compilePartial(B, D, C)
    };
    l.compileTokens = function (C, B) {
        return c.compileTokens(C, B)
    };
    l.render = function (C, D, B) {
        return c.render(C, D, B)
    };
    l.to_html = function (E, F, B, D) {
        var C = l.render(E, F, B);
        if (typeof D === "function") {
            D(C)
        } else {
            return C
        }
    }
}));
(function (n) {
    function u(t) {
        var i = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), n(this).ajaxSubmit(i))
    }

    function f(t) {
        var r = t.target, u = n(r), f, i, e;
        if (!u.is("[type=submit],[type=image]")) {
            if (f = u.closest("[type=submit]"), f.length === 0) {
                return
            }
            r = f[0]
        }
        i = this, i.clk = r, r.type == "image" && (t.offsetX !== undefined ? (i.clk_x = t.offsetX, i.clk_y = t.offsetY) : typeof n.fn.offset == "function" ? (e = u.offset(), i.clk_x = t.pageX - e.left, i.clk_y = t.pageY - e.top) : (i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop)), setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function t() {
        if (n.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }

    var i = {}, r;
    i.fileapi = n("<input type='file'/>").get(0).files !== undefined, i.formdata = window.FormData !== undefined, r = !!n.fn.prop, n.fn.attr2 = function () {
        if (!r) {
            return this.attr.apply(this, arguments)
        }
        var n = this.prop.apply(this, arguments);
        return n && n.jquery || typeof n == "string" ? n : this.attr.apply(this, arguments)
    }, n.fn.ajaxSubmit = function (u) {
        function ft(t) {
            for (var r = n.param(t).split("&"), e = r.length, f = [], u, i = 0; i < e; i++) {
                r[i] = r[i].replace(/\+/g, " "), u = r[i].split("="), f.push([decodeURIComponent(u[0]), decodeURIComponent(u[1])])
            }
            return f
        }

        function et(t) {
            for (var e = new FormData, f, r, o, i = 0; i < t.length; i++) {
                e.append(t[i].name, t[i].value)
            }
            if (u.extraData) {
                for (f = ft(u.extraData), i = 0; i < f.length; i++) {
                    f[i] && e.append(f[i][0], f[i][1])
                }
            }
            return u.data = null, r = n.extend(!0, {}, n.ajaxSettings, u, {contentType: !1, processData: !1, cache: !1, type: h || "POST"}), u.uploadProgress && (r.xhr = function () {
                var n = jQuery.ajaxSettings.xhr();
                return n.upload && n.upload.addEventListener("progress", function (n) {
                    var t = 0, i = n.loaded || n.position, r = n.total;
                    n.lengthComputable && (t = Math.ceil(i / r * 100)), u.uploadProgress(n, i, r, t)
                }, !1), n
            }), r.data = null, o = r.beforeSend, r.beforeSend = function (n, t) {
                t.data = e, o && o.call(this, n, t)
            }, n.ajax(r)
        }

        function rt(i) {
            function ot(n) {
                var i = null;
                try {
                    n.contentWindow && (i = n.contentWindow.document)
                } catch (r) {
                    t("cannot get iframe.contentWindow document: " + r)
                }
                if (i) {
                    return i
                }
                try {
                    i = n.contentDocument ? n.contentDocument : n.document
                } catch (r) {
                    t("cannot get iframe.contentDocument: " + r), i = n.document
                }
                return i
            }

            function st() {
                function s() {
                    try {
                        var n = ot(a).readyState;
                        t("state = " + n), n && n.toLowerCase() == "uninitialized" && setTimeout(s, 50)
                    } catch (i) {
                        t("Server abort: ", i, " (", i.name, ")"), b(tt), g && clearTimeout(g), g = undefined
                    }
                }

                var u = f.attr2("target"), o = f.attr2("action"), r, i, c;
                l.setAttribute("target", d), h || l.setAttribute("method", "POST"), o != e.url && l.setAttribute("action", e.url), e.skipEncodingOverride || h && !/post/i.test(h) || f.attr({encoding: "multipart/form-data", enctype: "multipart/form-data"}), e.timeout && (g = setTimeout(function () {
                    rt = !0, b(ut)
                }, e.timeout)), r = [];
                try {
                    if (e.extraData) {
                        for (i in e.extraData) {
                            e.extraData.hasOwnProperty(i) && (n.isPlainObject(e.extraData[i]) && e.extraData[i].hasOwnProperty("name") && e.extraData[i].hasOwnProperty("value") ? r.push(n('<input type="hidden" name="' + e.extraData[i].name + '">').val(e.extraData[i].value).appendTo(l)[0]) : r.push(n('<input type="hidden" name="' + i + '">').val(e.extraData[i]).appendTo(l)[0]))
                        }
                    }
                    e.iframeTarget || (v.appendTo("body"), a.attachEvent ? a.attachEvent("onload", b) : a.addEventListener("load", b, !1)), setTimeout(s, 15);
                    try {
                        l.submit()
                    } catch (y) {
                        c = document.createElement("form").submit, c.apply(l)
                    }
                } finally {
                    l.setAttribute("action", o), u ? l.setAttribute("target", u) : f.removeAttr("target"), n(r).remove()
                }
            }

            function b(i) {
                var r, u, w, f, k, d, h, c, l;
                if (!o.aborted && !lt) {
                    if (s = ot(a), s || (t("cannot access response document"), i = tt), i === ut && o) {
                        o.abort("timeout"), y.reject(o, "timeout");
                        return
                    }
                    if (i == tt && o) {
                        o.abort("server abort"), y.reject(o, "error", "server abort");
                        return
                    }
                    if (s && s.location.href != e.iframeSrc || rt) {
                        a.detachEvent ? a.detachEvent("onload", b) : a.removeEventListener("load", b, !1), r = "success";
                        try {
                            if (rt) {
                                throw"timeout"
                            }
                            if (w = e.dataType == "xml" || s.XMLDocument || n.isXMLDoc(s), t("isXml=" + w), !w && window.opera && (s.body === null || !s.body.innerHTML) && --ct) {
                                t("requeing onLoad callback, DOM not available"), setTimeout(b, 250);
                                return
                            }
                            f = s.body ? s.body : s.documentElement, o.responseText = f ? f.innerHTML : null, o.responseXML = s.XMLDocument ? s.XMLDocument : s, w && (e.dataType = "xml"), o.getResponseHeader = function (n) {
                                var t = {"content-type": e.dataType};
                                return t[n]
                            }, f && (o.status = Number(f.getAttribute("status")) || o.status, o.statusText = f.getAttribute("statusText") || o.statusText), k = (e.dataType || "").toLowerCase(), d = /(json|script|text)/.test(k), d || e.textarea ? (h = s.getElementsByTagName("textarea")[0], h ? (o.responseText = h.value, o.status = Number(h.getAttribute("status")) || o.status, o.statusText = h.getAttribute("statusText") || o.statusText) : d && (c = s.getElementsByTagName("pre")[0], l = s.getElementsByTagName("body")[0], c ? o.responseText = c.textContent ? c.textContent : c.innerText : l && (o.responseText = l.textContent ? l.textContent : l.innerText))) : k == "xml" && !o.responseXML && o.responseText && (o.responseXML = at(o.responseText));
                            try {
                                ht = yt(o, k, e)
                            } catch (nt) {
                                r = "parsererror", o.error = u = nt || r
                            }
                        } catch (nt) {
                            t("error caught: ", nt), r = "error", o.error = u = nt || r
                        }
                        o.aborted && (t("upload aborted"), r = null), o.status && (r = o.status >= 200 && o.status < 300 || o.status === 304 ? "success" : "error"), r === "success" ? (e.success && e.success.call(e.context, ht, "success", o), y.resolve(o.responseText, "success", o), p && n.event.trigger("ajaxSuccess", [o, e])) : r && (u === undefined && (u = o.statusText), e.error && e.error.call(e.context, o, r, u), y.reject(o, "error", u), p && n.event.trigger("ajaxError", [o, e, u])), p && n.event.trigger("ajaxComplete", [o, e]), p && !--n.active && n.event.trigger("ajaxStop"), e.complete && e.complete.call(e.context, o, r), lt = !0, e.timeout && clearTimeout(g), setTimeout(function () {
                            e.iframeTarget || v.remove(), o.responseXML = null
                        }, 100)
                    }
                }
            }

            var l = f[0], it, nt, e, p, d, v, a, o, k, w, rt, g, y = n.Deferred(), ut, tt, ft, et, ht, s, ct, lt;
            if (i) {
                for (nt = 0; nt < c.length; nt++) {
                    it = n(c[nt]), r ? it.prop("disabled", !1) : it.removeAttr("disabled")
                }
            }
            if (e = n.extend(!0, {}, n.ajaxSettings, u), e.context = e.context || e, d = "jqFormIO" + (new Date).getTime(), e.iframeTarget ? (v = n(e.iframeTarget), w = v.attr2("name"), w ? d = w : v.attr2("name", d)) : (v = n('<iframe name="' + d + '" src="' + e.iframeSrc + '" />'), v.css({position: "absolute", top: "-1000px", left: "-1000px"})), a = v[0], o = {aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function () {
            }, getResponseHeader: function () {
            }, setRequestHeader: function () {
            }, abort: function (i) {
                var r = i === "timeout" ? "timeout" : "aborted";
                t("aborting upload... " + r), this.aborted = 1;
                try {
                    a.contentWindow.document.execCommand && a.contentWindow.document.execCommand("Stop")
                } catch (u) {
                }
                v.attr("src", e.iframeSrc), o.error = r, e.error && e.error.call(e.context, o, r, i), p && n.event.trigger("ajaxError", [o, e, r]), e.complete && e.complete.call(e.context, o, r)
            }}, p = e.global, p && 0 == n.active++ && n.event.trigger("ajaxStart"), p && n.event.trigger("ajaxSend", [o, e]), e.beforeSend && e.beforeSend.call(e.context, o, e) === !1) {
                return e.global && n.active--, y.reject(), y
            }
            if (o.aborted) {
                return y.reject(), y
            }
            k = l.clk, k && (w = k.name, w && !k.disabled && (e.extraData = e.extraData || {}, e.extraData[w] = k.value, k.type == "image" && (e.extraData[w + ".x"] = l.clk_x, e.extraData[w + ".y"] = l.clk_y))), ut = 1, tt = 2, ft = n("meta[name=csrf-token]").attr("content"), et = n("meta[name=csrf-param]").attr("content"), et && ft && (e.extraData = e.extraData || {}, e.extraData[et] = ft), e.forceSync ? st() : setTimeout(st, 10), ct = 50;
            var at = n.parseXML || function (n, t) {
                return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(n)) : t = (new DOMParser).parseFromString(n, "text/xml"), t && t.documentElement && t.documentElement.nodeName != "parsererror" ? t : null
            }, vt = n.parseJSON || function (s) {
                return window.eval("(" + s + ")")
            }, yt = function (t, i, r) {
                var f = t.getResponseHeader("content-type") || "", e = i === "xml" || !i && f.indexOf("xml") >= 0, u = e ? t.responseXML : t.responseText;
                return e && u.documentElement.nodeName === "parsererror" && n.error && n.error("parsererror"), r && r.dataFilter && (u = r.dataFilter(u, i)), typeof u == "string" && (i === "json" || !i && f.indexOf("json") >= 0 ? u = vt(u) : (i === "script" || !i && f.indexOf("javascript") >= 0) && n.globalEval(u)), u
            };
            return y
        }

        var h, b, e, f, a, v, c, y, o, l, s, d, it, p, w;
        if (!this.length) {
            return t("ajaxSubmit: skipping submit process - no element selected"), this
        }
        if (f = this, typeof u == "function" && (u = {success: u}), h = this.attr2("method"), b = this.attr2("action"), e = typeof b == "string" ? n.trim(b) : "", e = e || window.location.href || "", e && (e = (e.match(/^([^#]+)/) || [])[1]), u = n.extend(!0, {url: e, success: n.ajaxSettings.success, type: h || "GET", iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"}, u), a = {}, this.trigger("form-pre-serialize", [this, u, a]), a.veto) {
            return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this
        }
        if (u.beforeSerialize && u.beforeSerialize(this, u) === !1) {
            return t("ajaxSubmit: submit aborted via beforeSerialize callback"), this
        }
        if (v = u.traditional, v === undefined && (v = n.ajaxSettings.traditional), c = [], o = this.formToArray(u.semantic, c), u.data && (u.extraData = u.data, y = n.param(u.data, v)), u.beforeSubmit && u.beforeSubmit(o, this, u) === !1) {
            return t("ajaxSubmit: submit aborted via beforeSubmit callback"), this
        }
        if (this.trigger("form-submit-validate", [o, this, u, a]), a.veto) {
            return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this
        }
        l = n.param(o, v), y && (l = l ? l + "&" + y : y), u.type.toUpperCase() == "GET" ? (u.url += (u.url.indexOf("?") >= 0 ? "&" : "?") + l, u.data = null) : u.data = l, s = [], u.resetForm && s.push(function () {
            f.resetForm()
        }), u.clearForm && s.push(function () {
            f.clearForm(u.includeHidden)
        }), !u.dataType && u.target ? (d = u.success || function () {
        }, s.push(function (t) {
            var i = u.replaceTarget ? "replaceWith" : "html";
            n(u.target)[i](t).each(d, arguments)
        })) : u.success && s.push(u.success), u.success = function (n, t, i) {
            for (var o = u.context || this, r = 0, e = s.length; r < e; r++) {
                s[r].apply(o, [n, t, i || f, f])
            }
        };
        var ut = n('input[type=file]:enabled[value!=""]', this), g = ut.length > 0, nt = "multipart/form-data", tt = f.attr("enctype") == nt || f.attr("encoding") == nt, k = i.fileapi && i.formdata;
        for (t("fileAPI :" + k), it = (g || tt) && !k, u.iframe !== !1 && (u.iframe || it) ? u.closeKeepAlive ? n.get(u.closeKeepAlive, function () {
            p = rt(o)
        }) : p = rt(o) : p = (g || tt) && k ? et(o) : n.ajax(u), f.removeData("jqxhr").data("jqxhr", p), w = 0; w < c.length; w++) {
            c[w] = null
        }
        return this.trigger("form-submit-notify", [this, u]), this
    }, n.fn.ajaxForm = function (i) {
        if (i = i || {}, i.delegation = i.delegation && n.isFunction(n.fn.on), !i.delegation && this.length === 0) {
            var r = {s: this.selector, c: this.context};
            return !n.isReady && r.s ? (t("DOM not ready, queuing ajaxForm"), n(function () {
                n(r.s, r.c).ajaxForm(i)
            }), this) : (t("terminating; zero elements found by selector" + (n.isReady ? "" : " (DOM not ready)")), this)
        }
        if (i.delegation) {
            n(document).off("submit.form-plugin", this.selector, u).off("click.form-plugin", this.selector, f).on("submit.form-plugin", this.selector, i, u).on("click.form-plugin", this.selector, i, f);
            return this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", i, u).bind("click.form-plugin", i, f)
    }, n.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, n.fn.formToArray = function (t, r) {
        var o = [], e, c, l, s, f, h, u, p, w, a, y, v;
        if (this.length === 0 || (e = this[0], c = t ? e.getElementsByTagName("*") : e.elements, !c)) {
            return o
        }
        for (l = 0, p = c.length; l < p; l++) {
            if (u = c[l], f = u.name, f && !u.disabled) {
                if (t && e.clk && u.type == "image") {
                    e.clk == u && (o.push({name: f, value: n(u).val(), type: u.type}), o.push({name: f + ".x", value: e.clk_x}, {name: f + ".y", value: e.clk_y}));
                    continue
                }
                if (h = n.fieldValue(u, !0), h && h.constructor == Array) {
                    for (r && r.push(u), s = 0, w = h.length; s < w; s++) {
                        o.push({name: f, value: h[s]})
                    }
                } else {
                    if (i.fileapi && u.type == "file") {
                        if (r && r.push(u), a = u.files, a.length) {
                            for (s = 0; s < a.length; s++) {
                                o.push({name: f, value: a[s], type: u.type})
                            }
                        } else {
                            o.push({name: f, value: "", type: u.type})
                        }
                    } else {
                        h !== null && typeof h != "undefined" && (r && r.push(u), o.push({name: f, value: h, type: u.type, required: u.required}))
                    }
                }
            }
        }
        return !t && e.clk && (y = n(e.clk), v = y[0], f = v.name, f && !v.disabled && v.type == "image" && (o.push({name: f, value: y.val()}), o.push({name: f + ".x", value: e.clk_x}, {name: f + ".y", value: e.clk_y}))), o
    }, n.fn.formSerialize = function (t) {
        return n.param(this.formToArray(t))
    }, n.fn.fieldSerialize = function (t) {
        var i = [];
        return this.each(function () {
            var f = this.name, r, u, e;
            if (f) {
                if (r = n.fieldValue(this, t), r && r.constructor == Array) {
                    for (u = 0, e = r.length; u < e; u++) {
                        i.push({name: f, value: r[u]})
                    }
                } else {
                    r !== null && typeof r != "undefined" && i.push({name: this.name, value: r})
                }
            }
        }), n.param(i)
    }, n.fn.fieldValue = function (t) {
        for (var f, i, r = [], u = 0, e = this.length; u < e; u++) {
            (f = this[u], i = n.fieldValue(f, t), i !== null && typeof i != "undefined" && (i.constructor != Array || i.length)) && (i.constructor == Array ? n.merge(r, i) : r.push(i))
        }
        return r
    }, n.fieldValue = function (t, i) {
        var a = t.name, u = t.type, h = t.tagName.toLowerCase(), e, o, r, f;
        if (i === undefined && (i = !0), i && (!a || t.disabled || u == "reset" || u == "button" || (u == "checkbox" || u == "radio") && !t.checked || (u == "submit" || u == "image") && t.form && t.form.clk != t || h == "select" && t.selectedIndex == -1)) {
            return null
        }
        if (h == "select") {
            if (e = t.selectedIndex, e < 0) {
                return null
            }
            var c = [], l = t.options, s = u == "select-one", v = s ? e + 1 : l.length;
            for (o = s ? e : 0; o < v; o++) {
                if (r = l[o], r.selected) {
                    if (f = r.value, f || (f = r.attributes && r.attributes.value && !r.attributes.value.specified ? r.text : r.value), s) {
                        return f
                    }
                    c.push(f)
                }
            }
            return c
        }
        return n(t).val()
    }, n.fn.clearForm = function (t) {
        return this.each(function () {
            n("input,select,textarea", this).clearFields(t)
        })
    }, n.fn.clearFields = n.fn.clearInputs = function (t) {
        var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var r = this.type, u = this.tagName.toLowerCase();
            i.test(r) || u == "textarea" ? this.value = "" : r == "checkbox" || r == "radio" ? this.checked = !1 : u == "select" ? this.selectedIndex = -1 : r == "file" ? /MSIE/.test(navigator.userAgent) ? n(this).replaceWith(n(this).clone(!0)) : n(this).val("") : t && (t === !0 && /hidden/.test(r) || typeof t == "string" && n(this).is(t)) && (this.value = "")
        })
    }, n.fn.resetForm = function () {
        return this.each(function () {
            typeof this.reset != "function" && (typeof this.reset != "object" || this.reset.nodeType) || this.reset()
        })
    }, n.fn.enable = function (n) {
        return n === undefined && (n = !0), this.each(function () {
            this.disabled = !n
        })
    }, n.fn.selected = function (t) {
        return t === undefined && (t = !0), this.each(function () {
            var r = this.type, i;
            r == "checkbox" || r == "radio" ? this.checked = t : this.tagName.toLowerCase() == "option" && (i = n(this).parent("select"), t && i[0] && i[0].type == "select-one" && i.find("option").selected(!1), this.selected = t)
        })
    }, n.fn.ajaxSubmit.debug = !1
})(jQuery);
/* jQuery UI - v1.10.3 - 2013-05-03
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function (g, a) {
    function b(j, k) {
        var l, m, h, p = j.nodeName.toLowerCase();
        return"area" === p ? (l = j.parentNode, m = l.name, j.href && m && "map" === l.nodeName.toLowerCase() ? (h = g("img[usemap=#" + m + "]")[0], !!h && f(h)) : !1) : (/input|select|textarea|button|object/.test(p) ? !j.disabled : "a" === p ? j.href || k : k) && f(j)
    }

    function f(h) {
        return g.expr.filters.visible(h) && !g(h).parents().addBack().filter(function () {
            return"hidden" === g.css(this, "visibility")
        }).length
    }

    var c = 0, d = /^ui-id-\d+$/;
    g.ui = g.ui || {}, g.extend(g.ui, {version: "1.10.3", keyCode: {BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38}}), g.fn.extend({focus: function (h) {
        return function (e, j) {
            return"number" == typeof e ? this.each(function () {
                var k = this;
                setTimeout(function () {
                    g(k).focus(), j && j.call(k)
                }, e)
            }) : h.apply(this, arguments)
        }
    }(g.fn.focus), scrollParent: function () {
        var h;
        return h = g.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
            return/(relative|absolute|fixed)/.test(g.css(this, "position")) && /(auto|scroll)/.test(g.css(this, "overflow") + g.css(this, "overflow-y") + g.css(this, "overflow-x"))
        }).eq(0) : this.parents().filter(function () {
            return/(auto|scroll)/.test(g.css(this, "overflow") + g.css(this, "overflow-y") + g.css(this, "overflow-x"))
        }).eq(0), /fixed/.test(this.css("position")) || !h.length ? g(document) : h
    }, zIndex: function (e) {
        if (e !== a) {
            return this.css("zIndex", e)
        }
        if (this.length) {
            for (var k, h, j = g(this[0]); j.length && j[0] !== document;) {
                if (k = j.css("position"), ("absolute" === k || "relative" === k || "fixed" === k) && (h = parseInt(j.css("zIndex"), 10), !isNaN(h) && 0 !== h)) {
                    return h
                }
                j = j.parent()
            }
        }
        return 0
    }, uniqueId: function () {
        return this.each(function () {
            this.id || (this.id = "ui-id-" + ++c)
        })
    }, removeUniqueId: function () {
        return this.each(function () {
            d.test(this.id) && g(this).removeAttr("id")
        })
    }}), g.extend(g.expr[":"], {data: g.expr.createPseudo ? g.expr.createPseudo(function (h) {
        return function (e) {
            return !!g.data(e, h)
        }
    }) : function (h, j, k) {
        return !!g.data(h, k[3])
    }, focusable: function (h) {
        return b(h, !isNaN(g.attr(h, "tabindex")))
    }, tabbable: function (h) {
        var k = g.attr(h, "tabindex"), j = isNaN(k);
        return(j || k >= 0) && b(h, !j)
    }}), g("<a>").outerWidth(1).jquery || g.each(["Width", "Height"], function (h, m) {
        function j(o, p, r, q) {
            return g.each(k, function () {
                p -= parseFloat(g.css(o, "padding" + this)) || 0, r && (p -= parseFloat(g.css(o, "border" + this + "Width")) || 0), q && (p -= parseFloat(g.css(o, "margin" + this)) || 0)
            }), p
        }

        var k = "Width" === m ? ["Left", "Right"] : ["Top", "Bottom"], e = m.toLowerCase(), l = {innerWidth: g.fn.innerWidth, innerHeight: g.fn.innerHeight, outerWidth: g.fn.outerWidth, outerHeight: g.fn.outerHeight};
        g.fn["inner" + m] = function (n) {
            return n === a ? l["inner" + m].call(this) : this.each(function () {
                g(this).css(e, j(this, n) + "px")
            })
        }, g.fn["outer" + m] = function (n, o) {
            return"number" != typeof n ? l["outer" + m].call(this, n) : this.each(function () {
                g(this).css(e, j(this, n, !0, o) + "px")
            })
        }
    }), g.fn.addBack || (g.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), g("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (g.fn.removeData = function (h) {
        return function (e) {
            return arguments.length ? h.call(this, g.camelCase(e)) : h.call(this)
        }
    }(g.fn.removeData)), g.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), g.support.selectstart = "onselectstart" in document.createElement("div"), g.fn.extend({disableSelection: function () {
        return this.bind((g.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
            e.preventDefault()
        })
    }, enableSelection: function () {
        return this.unbind(".ui-disableSelection")
    }}), g.extend(g.ui, {plugin: {add: function (h, j, m) {
        var k, l = g.ui[h].prototype;
        for (k in m) {
            l.plugins[k] = l.plugins[k] || [], l.plugins[k].push([j, m[k]])
        }
    }, call: function (m, h, j) {
        var l, k = m.plugins[h];
        if (k && m.element[0].parentNode && 11 !== m.element[0].parentNode.nodeType) {
            for (l = 0; k.length > l; l++) {
                m.options[k[l][0]] && k[l][1].apply(m.element, j)
            }
        }
    }}, hasScroll: function (h, j) {
        if ("hidden" === g(h).css("overflow")) {
            return !1
        }
        var l = j && "left" === j ? "scrollLeft" : "scrollTop", k = !1;
        return h[l] > 0 ? !0 : (h[l] = 1, k = h[l] > 0, h[l] = 0, k)
    }})
})(jQuery), function (f, a) {
    var b = 0, d = Array.prototype.slice, c = f.cleanData;
    f.cleanData = function (g) {
        for (var h, k = 0; null != (h = g[k]); k++) {
            try {
                f(h).triggerHandler("remove")
            } catch (j) {
            }
        }
        c(g)
    }, f.widget = function (k, u, p) {
        var q, e, t, j, m = {}, g = k.split(".")[0];
        k = k.split(".")[1], q = g + "-" + k, p || (p = u, u = f.Widget), f.expr[":"][q.toLowerCase()] = function (h) {
            return !!f.data(h, q)
        }, f[g] = f[g] || {}, e = f[g][k], t = f[g][k] = function (l, h) {
            return this._createWidget ? (arguments.length && this._createWidget(l, h), a) : new t(l, h)
        }, f.extend(t, e, {version: p.version, _proto: f.extend({}, p), _childConstructors: []}), j = new u, j.options = f.widget.extend({}, j.options), f.each(p, function (h, l) {
            return f.isFunction(l) ? (m[h] = function () {
                var o = function () {
                    return u.prototype[h].apply(this, arguments)
                }, n = function (r) {
                    return u.prototype[h].apply(this, r)
                };
                return function () {
                    var r, w = this._super, v = this._superApply;
                    return this._super = o, this._superApply = n, r = l.apply(this, arguments), this._super = w, this._superApply = v, r
                }
            }(), a) : (m[h] = l, a)
        }), t.prototype = f.widget.extend(j, {widgetEventPrefix: e ? j.widgetEventPrefix : k}, m, {constructor: t, namespace: g, widgetName: k, widgetFullName: q}), e ? (f.each(e._childConstructors, function (h, l) {
            var n = l.prototype;
            f.widget(n.namespace + "." + n.widgetName, t, l._proto)
        }), delete e._childConstructors) : u._childConstructors.push(t), f.widget.bridge(k, t)
    }, f.widget.extend = function (j) {
        for (var k, l, e = d.call(arguments, 1), m = 0, g = e.length; g > m; m++) {
            for (k in e[m]) {
                l = e[m][k], e[m].hasOwnProperty(k) && l !== a && (j[k] = f.isPlainObject(l) ? f.isPlainObject(j[k]) ? f.widget.extend({}, j[k], l) : f.widget.extend({}, l) : l)
            }
        }
        return j
    }, f.widget.bridge = function (e, g) {
        var h = g.prototype.widgetFullName || e;
        f.fn[e] = function (j) {
            var n = "string" == typeof j, k = d.call(arguments, 1), m = this;
            return j = !n && k.length ? f.widget.extend.apply(null, [j].concat(k)) : j, n ? this.each(function () {
                var o, l = f.data(this, h);
                return l ? f.isFunction(l[j]) && "_" !== j.charAt(0) ? (o = l[j].apply(l, k), o !== l && o !== a ? (m = o && o.jquery ? m.pushStack(o.get()) : o, !1) : a) : f.error("no such method '" + j + "' for " + e + " widget instance") : f.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + j + "'")
            }) : this.each(function () {
                var l = f.data(this, h);
                l ? l.option(j || {})._init() : f.data(this, h, new g(j, this))
            }), m
        }
    }, f.Widget = function () {
    }, f.Widget._childConstructors = [], f.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: !1, create: null}, _createWidget: function (g, h) {
        h = f(h || this.defaultElement || this)[0], this.element = f(h), this.uuid = b++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = f.widget.extend({}, this.options, this._getCreateOptions(), g), this.bindings = f(), this.hoverable = f(), this.focusable = f(), h !== this && (f.data(h, this.widgetFullName, this), this._on(!0, this.element, {remove: function (e) {
            e.target === h && this.destroy()
        }}), this.document = f(h.style ? h.ownerDocument : h.document || h), this.window = f(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    }, _getCreateOptions: f.noop, _getCreateEventData: f.noop, _create: f.noop, _init: f.noop, destroy: function () {
        this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(f.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    }, _destroy: f.noop, widget: function () {
        return this.element
    }, option: function (g, l) {
        var h, j, e, k = g;
        if (0 === arguments.length) {
            return f.widget.extend({}, this.options)
        }
        if ("string" == typeof g) {
            if (k = {}, h = g.split("."), g = h.shift(), h.length) {
                for (j = k[g] = f.widget.extend({}, this.options[g]), e = 0; h.length - 1 > e; e++) {
                    j[h[e]] = j[h[e]] || {}, j = j[h[e]]
                }
                if (g = h.pop(), l === a) {
                    return j[g] === a ? null : j[g]
                }
                j[g] = l
            } else {
                if (l === a) {
                    return this.options[g] === a ? null : this.options[g]
                }
                k[g] = l
            }
        }
        return this._setOptions(k), this
    }, _setOptions: function (h) {
        var g;
        for (g in h) {
            this._setOption(g, h[g])
        }
        return this
    }, _setOption: function (h, g) {
        return this.options[h] = g, "disabled" === h && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!g).attr("aria-disabled", g), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
    }, enable: function () {
        return this._setOption("disabled", !1)
    }, disable: function () {
        return this._setOption("disabled", !0)
    }, _on: function (g, k, h) {
        var j, e = this;
        "boolean" != typeof g && (h = k, k = g, g = !1), h ? (k = j = f(k), this.bindings = this.bindings.add(k)) : (h = k, k = this.element, j = this.widget()), f.each(h, function (q, s) {
            function o() {
                return g || e.options.disabled !== !0 && !f(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? e[s] : s).apply(e, arguments) : a
            }

            "string" != typeof s && (o.guid = s.guid = s.guid || o.guid || f.guid++);
            var p = q.match(/^(\w+)\s*(.*)$/), m = p[1] + e.eventNamespace, t = p[2];
            t ? j.delegate(t, m, o) : k.bind(m, o)
        })
    }, _off: function (h, g) {
        g = (g || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, h.unbind(g).undelegate(g)
    }, _delay: function (k, g) {
        function h() {
            return("string" == typeof k ? j[k] : k).apply(j, arguments)
        }

        var j = this;
        return setTimeout(h, g || 0)
    }, _hoverable: function (g) {
        this.hoverable = this.hoverable.add(g), this._on(g, {mouseenter: function (h) {
            f(h.currentTarget).addClass("ui-state-hover")
        }, mouseleave: function (h) {
            f(h.currentTarget).removeClass("ui-state-hover")
        }})
    }, _focusable: function (g) {
        this.focusable = this.focusable.add(g), this._on(g, {focusin: function (h) {
            f(h.currentTarget).addClass("ui-state-focus")
        }, focusout: function (h) {
            f(h.currentTarget).removeClass("ui-state-focus")
        }})
    }, _trigger: function (h, j, m) {
        var k, l, g = this.options[h];
        if (m = m || {}, j = f.Event(j), j.type = (h === this.widgetEventPrefix ? h : this.widgetEventPrefix + h).toLowerCase(), j.target = this.element[0], l = j.originalEvent) {
            for (k in l) {
                k in j || (j[k] = l[k])
            }
        }
        return this.element.trigger(j, m), !(f.isFunction(g) && g.apply(this.element[0], [j].concat(m)) === !1 || j.isDefaultPrevented())
    }}, f.each({show: "fadeIn", hide: "fadeOut"}, function (g, h) {
        f.Widget.prototype["_" + g] = function (m, j, k) {
            "string" == typeof j && (j = {effect: j});
            var e, l = j ? j === !0 || "number" == typeof j ? h : j.effect || h : g;
            j = j || {}, "number" == typeof j && (j = {duration: j}), e = !f.isEmptyObject(j), j.complete = k, j.delay && m.delay(j.delay), e && f.effects && f.effects.effect[l] ? m[g](j) : l !== g && m[l] ? m[l](j.duration, j.easing, k) : m.queue(function (n) {
                f(this)[g](), k && k.call(m[0]), n()
            })
        }
    })
}(jQuery), function (b) {
    var a = !1;
    b(document).mouseup(function () {
        a = !1
    }), b.widget("ui.mouse", {version: "1.10.3", options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0}, _mouseInit: function () {
        var c = this;
        this.element.bind("mousedown." + this.widgetName, function (d) {
            return c._mouseDown(d)
        }).bind("click." + this.widgetName, function (d) {
            return !0 === b.data(d.target, c.widgetName + ".preventClickEvent") ? (b.removeData(d.target, c.widgetName + ".preventClickEvent"), d.stopImmediatePropagation(), !1) : undefined
        }), this.started = !1
    }, _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    }, _mouseDown: function (c) {
        if (!a) {
            this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
            var f = this, d = 1 === c.which, e = "string" == typeof this.options.cancel && c.target.nodeName ? b(c.target).closest(this.options.cancel).length : !1;
            return d && !e && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                f.mouseDelayMet = !0
            }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === b.data(c.target, this.widgetName + ".preventClickEvent") && b.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (g) {
                return f._mouseMove(g)
            }, this._mouseUpDelegate = function (g) {
                return f._mouseUp(g)
            }, b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), a = !0, !0)) : !0
        }
    }, _mouseMove: function (c) {
        return b.ui.ie && (!document.documentMode || 9 > document.documentMode) && !c.button ? this._mouseUp(c) : this._mouseStarted ? (this._mouseDrag(c), c.preventDefault()) : (this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, c) !== !1, this._mouseStarted ? this._mouseDrag(c) : this._mouseUp(c)), !this._mouseStarted)
    }, _mouseUp: function (c) {
        return b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, c.target === this._mouseDownEvent.target && b.data(c.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(c)), !1
    }, _mouseDistanceMet: function (c) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - c.pageX), Math.abs(this._mouseDownEvent.pageY - c.pageY)) >= this.options.distance
    }, _mouseDelayMet: function () {
        return this.mouseDelayMet
    }, _mouseStart: function () {
    }, _mouseDrag: function () {
    }, _mouseStop: function () {
    }, _mouseCapture: function () {
        return !0
    }})
}(jQuery), function (a) {
    a.widget("ui.draggable", a.ui.mouse, {version: "1.10.3", widgetEventPrefix: "drag", options: {addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null}, _create: function () {
        "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
    }, _destroy: function () {
        this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
    }, _mouseCapture: function (b) {
        var c = this.options;
        return this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), this.handle ? (a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function () {
            a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1000}).css(a(this).offset()).appendTo("body")
        }), !0) : !1)
    }, _mouseStart: function (b) {
        var c = this.options;
        return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left}, this.offset.scroll = !1, a.extend(this.offset, {click: {left: b.pageX - this.offset.left, top: b.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()}), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
    }, _mouseDrag: function (b, c) {
        if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), !c) {
            var d = this._uiHash();
            if (this._trigger("drag", b, d) === !1) {
                return this._mouseUp({}), !1
            }
            this.position = d.position
        }
        return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
    }, _mouseStop: function (b) {
        var c = this, d = !1;
        return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "original" !== this.options.helper || a.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
            c._trigger("stop", b) !== !1 && c._clear()
        }) : this._trigger("stop", b) !== !1 && this._clear(), !1) : !1
    }, _mouseUp: function (b) {
        return a("div.ui-draggable-iframeFix").each(function () {
            this.parentNode.removeChild(this)
        }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b)
    }, cancel: function () {
        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
    }, _getHandle: function (b) {
        return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0
    }, _createHelper: function (b) {
        var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
        return d.parents("body").length || d.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d[0] === this.element[0] || /(fixed|absolute)/.test(d.css("position")) || d.css("position", "absolute"), d
    }, _adjustOffsetFromHelper: function (b) {
        "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {left: +b[0], top: +b[1] || 0}), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
    }, _getParentOffset: function () {
        var b = this.offsetParent.offset();
        return"absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {top: 0, left: 0}), {top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if ("relative" === this.cssPosition) {
            var b = this.element.position();
            return{top: b.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: b.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return{top: 0, left: 0}
    }, _cacheMargins: function () {
        this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var b, c, f, d = this.options;
        return d.containment ? "window" === d.containment ? (this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === d.containment ? (this.containment = [0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : d.containment.constructor === Array ? (this.containment = d.containment, undefined) : ("parent" === d.containment && (d.containment = this.helper[0].parentNode), c = a(d.containment), f = c[0], f && (b = "hidden" !== c.css("overflow"), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(f.scrollWidth, f.offsetWidth) : f.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(f.scrollHeight, f.offsetHeight) : f.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c), undefined) : (this.containment = null, undefined)
    }, _convertPositionTo: function (b, c) {
        c || (c = this.position);
        var f = "absolute" === b ? 1 : -1, d = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
        return this.offset.scroll || (this.offset.scroll = {top: d.scrollTop(), left: d.scrollLeft()}), {top: c.top + this.offset.relative.top * f + this.offset.parent.top * f - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * f, left: c.left + this.offset.relative.left * f + this.offset.parent.left * f - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * f}
    }, _generatePosition: function (c) {
        var f, p, j, k, b = this.options, m = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, d = c.pageX, g = c.pageY;
        return this.offset.scroll || (this.offset.scroll = {top: m.scrollTop(), left: m.scrollLeft()}), this.originalPosition && (this.containment && (this.relative_container ? (p = this.relative_container.offset(), f = [this.containment[0] + p.left, this.containment[1] + p.top, this.containment[2] + p.left, this.containment[3] + p.top]) : f = this.containment, c.pageX - this.offset.click.left < f[0] && (d = f[0] + this.offset.click.left), c.pageY - this.offset.click.top < f[1] && (g = f[1] + this.offset.click.top), c.pageX - this.offset.click.left > f[2] && (d = f[2] + this.offset.click.left), c.pageY - this.offset.click.top > f[3] && (g = f[3] + this.offset.click.top)), b.grid && (j = b.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / b.grid[1]) * b.grid[1] : this.originalPageY, g = f ? j - this.offset.click.top >= f[1] || j - this.offset.click.top > f[3] ? j : j - this.offset.click.top >= f[1] ? j - b.grid[1] : j + b.grid[1] : j, k = b.grid[0] ? this.originalPageX + Math.round((d - this.originalPageX) / b.grid[0]) * b.grid[0] : this.originalPageX, d = f ? k - this.offset.click.left >= f[0] || k - this.offset.click.left > f[2] ? k : k - this.offset.click.left >= f[0] ? k - b.grid[0] : k + b.grid[0] : k)), {top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top), left: d - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)}
    }, _clear: function () {
        this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
    }, _trigger: function (b, c, d) {
        return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), "drag" === b && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d)
    }, plugins: {}, _uiHash: function () {
        return{helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs}
    }}), a.ui.plugin.add("draggable", "connectToSortable", {start: function (b, c) {
        var g = a(this).data("ui-draggable"), d = g.options, f = a.extend({}, c, {item: g.element});
        g.sortables = [], a(d.connectToSortable).each(function () {
            var e = a.data(this, "ui-sortable");
            e && !e.options.disabled && (g.sortables.push({instance: e, shouldRevert: e.options.revert}), e.refreshPositions(), e._trigger("activate", b, f))
        })
    }, stop: function (b, c) {
        var f = a(this).data("ui-draggable"), d = a.extend({}, c, {item: f.element});
        a.each(f.sortables, function () {
            this.instance.isOver ? (this.instance.isOver = 0, f.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, "original" === f.options.helper && this.instance.currentItem.css({top: "auto", left: "auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, d))
        })
    }, drag: function (b, c) {
        var f = a(this).data("ui-draggable"), d = this;
        a.each(f.sortables, function () {
            var g = !1, e = this;
            this.instance.positionAbs = f.positionAbs, this.instance.helperProportions = f.helperProportions, this.instance.offset.click = f.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (g = !0, a.each(f.sortables, function () {
                return this.instance.positionAbs = f.positionAbs, this.instance.helperProportions = f.helperProportions, this.instance.offset.click = f.offset.click, this !== e && this.instance._intersectsWith(this.instance.containerCache) && a.contains(e.instance.element[0], this.instance.element[0]) && (g = !1), g
            })), g ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(d).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                return c.helper[0]
            }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = f.offset.click.top, this.instance.offset.click.left = f.offset.click.left, this.instance.offset.parent.left -= f.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= f.offset.parent.top - this.instance.offset.parent.top, f._trigger("toSortable", b), f.dropped = this.instance.element, f.currentItem = f.element, this.instance.fromOutside = f), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), f._trigger("fromSortable", b), f.dropped = !1)
        })
    }}), a.ui.plugin.add("draggable", "cursor", {start: function () {
        var b = a("body"), c = a(this).data("ui-draggable").options;
        b.css("cursor") && (c._cursor = b.css("cursor")), b.css("cursor", c.cursor)
    }, stop: function () {
        var b = a(this).data("ui-draggable").options;
        b._cursor && a("body").css("cursor", b._cursor)
    }}), a.ui.plugin.add("draggable", "opacity", {start: function (b, c) {
        var f = a(c.helper), d = a(this).data("ui-draggable").options;
        f.css("opacity") && (d._opacity = f.css("opacity")), f.css("opacity", d.opacity)
    }, stop: function (b, c) {
        var d = a(this).data("ui-draggable").options;
        d._opacity && a(c.helper).css("opacity", d._opacity)
    }}), a.ui.plugin.add("draggable", "scroll", {start: function () {
        var b = a(this).data("ui-draggable");
        b.scrollParent[0] !== document && "HTML" !== b.scrollParent[0].tagName && (b.overflowOffset = b.scrollParent.offset())
    }, drag: function (b) {
        var c = a(this).data("ui-draggable"), f = c.options, d = !1;
        c.scrollParent[0] !== document && "HTML" !== c.scrollParent[0].tagName ? (f.axis && "x" === f.axis || (c.overflowOffset.top + c.scrollParent[0].offsetHeight - b.pageY < f.scrollSensitivity ? c.scrollParent[0].scrollTop = d = c.scrollParent[0].scrollTop + f.scrollSpeed : b.pageY - c.overflowOffset.top < f.scrollSensitivity && (c.scrollParent[0].scrollTop = d = c.scrollParent[0].scrollTop - f.scrollSpeed)), f.axis && "y" === f.axis || (c.overflowOffset.left + c.scrollParent[0].offsetWidth - b.pageX < f.scrollSensitivity ? c.scrollParent[0].scrollLeft = d = c.scrollParent[0].scrollLeft + f.scrollSpeed : b.pageX - c.overflowOffset.left < f.scrollSensitivity && (c.scrollParent[0].scrollLeft = d = c.scrollParent[0].scrollLeft - f.scrollSpeed))) : (f.axis && "x" === f.axis || (b.pageY - a(document).scrollTop() < f.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - f.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < f.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + f.scrollSpeed))), f.axis && "y" === f.axis || (b.pageX - a(document).scrollLeft() < f.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - f.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < f.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + f.scrollSpeed)))), d !== !1 && a.ui.ddmanager && !f.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, b)
    }}), a.ui.plugin.add("draggable", "snap", {start: function () {
        var b = a(this).data("ui-draggable"), c = b.options;
        b.snapElements = [], a(c.snap.constructor !== String ? c.snap.items || ":data(ui-draggable)" : c.snap).each(function () {
            var d = a(this), e = d.offset();
            this !== b.element[0] && b.snapElements.push({item: this, width: d.outerWidth(), height: d.outerHeight(), top: e.top, left: e.left})
        })
    }, drag: function (z, D) {
        var K, G, H, k, J, C, E, t, L, w, I = a(this).data("ui-draggable"), A = I.options, B = A.snapTolerance, F = D.offset.left, M = F + I.helperProportions.width, j = D.offset.top, q = j + I.helperProportions.height;
        for (L = I.snapElements.length - 1; L >= 0; L--) {
            J = I.snapElements[L].left, C = J + I.snapElements[L].width, E = I.snapElements[L].top, t = E + I.snapElements[L].height, J - B > M || F > C + B || E - B > q || j > t + B || !a.contains(I.snapElements[L].item.ownerDocument, I.snapElements[L].item) ? (I.snapElements[L].snapping && I.options.snap.release && I.options.snap.release.call(I.element, z, a.extend(I._uiHash(), {snapItem: I.snapElements[L].item})), I.snapElements[L].snapping = !1) : ("inner" !== A.snapMode && (K = B >= Math.abs(E - q), G = B >= Math.abs(t - j), H = B >= Math.abs(J - M), k = B >= Math.abs(C - F), K && (D.position.top = I._convertPositionTo("relative", {top: E - I.helperProportions.height, left: 0}).top - I.margins.top), G && (D.position.top = I._convertPositionTo("relative", {top: t, left: 0}).top - I.margins.top), H && (D.position.left = I._convertPositionTo("relative", {top: 0, left: J - I.helperProportions.width}).left - I.margins.left), k && (D.position.left = I._convertPositionTo("relative", {top: 0, left: C}).left - I.margins.left)), w = K || G || H || k, "outer" !== A.snapMode && (K = B >= Math.abs(E - j), G = B >= Math.abs(t - q), H = B >= Math.abs(J - F), k = B >= Math.abs(C - M), K && (D.position.top = I._convertPositionTo("relative", {top: E, left: 0}).top - I.margins.top), G && (D.position.top = I._convertPositionTo("relative", {top: t - I.helperProportions.height, left: 0}).top - I.margins.top), H && (D.position.left = I._convertPositionTo("relative", {top: 0, left: J}).left - I.margins.left), k && (D.position.left = I._convertPositionTo("relative", {top: 0, left: C - I.helperProportions.width}).left - I.margins.left)), !I.snapElements[L].snapping && (K || G || H || k || w) && I.options.snap.snap && I.options.snap.snap.call(I.element, z, a.extend(I._uiHash(), {snapItem: I.snapElements[L].item})), I.snapElements[L].snapping = K || G || H || k || w)
        }
    }}), a.ui.plugin.add("draggable", "stack", {start: function () {
        var b, c = this.data("ui-draggable").options, d = a.makeArray(a(c.stack)).sort(function (f, g) {
            return(parseInt(a(f).css("zIndex"), 10) || 0) - (parseInt(a(g).css("zIndex"), 10) || 0)
        });
        d.length && (b = parseInt(a(d[0]).css("zIndex"), 10) || 0, a(d).each(function (e) {
            a(this).css("zIndex", b + e)
        }), this.css("zIndex", b + d.length))
    }}), a.ui.plugin.add("draggable", "zIndex", {start: function (b, c) {
        var f = a(c.helper), d = a(this).data("ui-draggable").options;
        f.css("zIndex") && (d._zIndex = f.css("zIndex")), f.css("zIndex", d.zIndex)
    }, stop: function (b, c) {
        var d = a(this).data("ui-draggable").options;
        d._zIndex && a(c.helper).css("zIndex", d._zIndex)
    }})
}(jQuery), function (b) {
    function a(f, c, d) {
        return f > c && c + d > f
    }

    b.widget("ui.droppable", {version: "1.10.3", widgetEventPrefix: "drop", options: {accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null}, _create: function () {
        var c = this.options, d = c.accept;
        this.isover = !1, this.isout = !0, this.accept = b.isFunction(d) ? d : function (e) {
            return e.is(d)
        }, this.proportions = {width: this.element[0].offsetWidth, height: this.element[0].offsetHeight}, b.ui.ddmanager.droppables[c.scope] = b.ui.ddmanager.droppables[c.scope] || [], b.ui.ddmanager.droppables[c.scope].push(this), c.addClasses && this.element.addClass("ui-droppable")
    }, _destroy: function () {
        for (var c = 0, d = b.ui.ddmanager.droppables[this.options.scope]; d.length > c; c++) {
            d[c] === this && d.splice(c, 1)
        }
        this.element.removeClass("ui-droppable ui-droppable-disabled")
    }, _setOption: function (c, d) {
        "accept" === c && (this.accept = b.isFunction(d) ? d : function (e) {
            return e.is(d)
        }), b.Widget.prototype._setOption.apply(this, arguments)
    }, _activate: function (c) {
        var d = b.ui.ddmanager.current;
        this.options.activeClass && this.element.addClass(this.options.activeClass), d && this._trigger("activate", c, this.ui(d))
    }, _deactivate: function (c) {
        var d = b.ui.ddmanager.current;
        this.options.activeClass && this.element.removeClass(this.options.activeClass), d && this._trigger("deactivate", c, this.ui(d))
    }, _over: function (c) {
        var d = b.ui.ddmanager.current;
        d && (d.currentItem || d.element)[0] !== this.element[0] && this.accept.call(this.element[0], d.currentItem || d.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", c, this.ui(d)))
    }, _out: function (c) {
        var d = b.ui.ddmanager.current;
        d && (d.currentItem || d.element)[0] !== this.element[0] && this.accept.call(this.element[0], d.currentItem || d.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", c, this.ui(d)))
    }, _drop: function (c, d) {
        var g = d || b.ui.ddmanager.current, f = !1;
        return g && (g.currentItem || g.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
            var h = b.data(this, "ui-droppable");
            return h.options.greedy && !h.options.disabled && h.options.scope === g.options.scope && h.accept.call(h.element[0], g.currentItem || g.element) && b.ui.intersect(g, b.extend(h, {offset: h.element.offset()}), h.options.tolerance) ? (f = !0, !1) : undefined
        }), f ? !1 : this.accept.call(this.element[0], g.currentItem || g.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", c, this.ui(g)), this.element) : !1) : !1
    }, ui: function (c) {
        return{draggable: c.currentItem || c.element, helper: c.helper, position: c.position, offset: c.positionAbs}
    }}), b.ui.intersect = function (B, k, A) {
        if (!k.offset) {
            return !1
        }
        var q, v, e = (B.positionAbs || B.position.absolute).left, z = e + B.helperProportions.width, j = (B.positionAbs || B.position.absolute).top, m = j + B.helperProportions.height, f = k.offset.left, C = f + k.proportions.width, g = k.offset.top, w = g + k.proportions.height;
        switch (A) {
            case"fit":
                return e >= f && C >= z && j >= g && w >= m;
            case"intersect":
                return e + B.helperProportions.width / 2 > f && C > z - B.helperProportions.width / 2 && j + B.helperProportions.height / 2 > g && w > m - B.helperProportions.height / 2;
            case"pointer":
                return q = (B.positionAbs || B.position.absolute).left + (B.clickOffset || B.offset.click).left, v = (B.positionAbs || B.position.absolute).top + (B.clickOffset || B.offset.click).top, a(v, g, k.proportions.height) && a(q, f, k.proportions.width);
            case"touch":
                return(j >= g && w >= j || m >= g && w >= m || g > j && m > w) && (e >= f && C >= e || z >= f && C >= z || f > e && z > C);
            default:
                return !1
        }
    }, b.ui.ddmanager = {current: null, droppables: {"default": []}, prepareOffsets: function (d, f) {
        var k, g, h = b.ui.ddmanager.droppables[d.options.scope] || [], c = f ? f.type : null, j = (d.currentItem || d.element).find(":data(ui-droppable)").addBack();
        b:for (k = 0; h.length > k; k++) {
            if (!(h[k].options.disabled || d && !h[k].accept.call(h[k].element[0], d.currentItem || d.element))) {
                for (g = 0; j.length > g; g++) {
                    if (j[g] === h[k].element[0]) {
                        h[k].proportions.height = 0;
                        continue b
                    }
                }
                h[k].visible = "none" !== h[k].element.css("display"), h[k].visible && ("mousedown" === c && h[k]._activate.call(h[k], f), h[k].offset = h[k].element.offset(), h[k].proportions = {width: h[k].element[0].offsetWidth, height: h[k].element[0].offsetHeight})
            }
        }
    }, drop: function (c, d) {
        var f = !1;
        return b.each((b.ui.ddmanager.droppables[c.options.scope] || []).slice(), function () {
            this.options && (!this.options.disabled && this.visible && b.ui.intersect(c, this, this.options.tolerance) && (f = this._drop.call(this, d) || f), !this.options.disabled && this.visible && this.accept.call(this.element[0], c.currentItem || c.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, d)))
        }), f
    }, dragStart: function (c, d) {
        c.element.parentsUntil("body").bind("scroll.droppable", function () {
            c.options.refreshPositions || b.ui.ddmanager.prepareOffsets(c, d)
        })
    }, drag: function (c, d) {
        c.options.refreshPositions && b.ui.ddmanager.prepareOffsets(c, d), b.each(b.ui.ddmanager.droppables[c.options.scope] || [], function () {
            if (!this.options.disabled && !this.greedyChild && this.visible) {
                var j, f, g, e = b.ui.intersect(c, this, this.options.tolerance), h = !e && this.isover ? "isout" : e && !this.isover ? "isover" : null;
                h && (this.options.greedy && (f = this.options.scope, g = this.element.parents(":data(ui-droppable)").filter(function () {
                    return b.data(this, "ui-droppable").options.scope === f
                }), g.length && (j = b.data(g[0], "ui-droppable"), j.greedyChild = "isover" === h)), j && "isover" === h && (j.isover = !1, j.isout = !0, j._out.call(j, d)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, d), j && "isout" === h && (j.isout = !1, j.isover = !0, j._over.call(j, d)))
            }
        })
    }, dragStop: function (c, d) {
        c.element.parentsUntil("body").unbind("scroll.droppable"), c.options.refreshPositions || b.ui.ddmanager.prepareOffsets(c, d)
    }}
}(jQuery), function (c) {
    function a(d) {
        return parseInt(d, 10) || 0
    }

    function b(d) {
        return !isNaN(parseInt(d, 10))
    }

    c.widget("ui.resizable", c.ui.mouse, {version: "1.10.3", widgetEventPrefix: "resize", options: {alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null}, _create: function () {
        var f, g, l, h, j, d = this, k = this.options;
        if (this.element.addClass("ui-resizable"), c.extend(this, {_aspectRatio: !!k.aspectRatio, aspectRatio: k.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: k.helper || k.ghost || k.animate ? k.helper || "ui-resizable-helper" : null}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(c("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left")})), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom")}), this.originalElement.css({marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({position: "static", zoom: 1, display: "block"})), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = k.handles || (c(".ui-resizable-handle", this.element).length ? {n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw"} : "e,s,se"), this.handles.constructor === String) {
            for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), f = this.handles.split(","), this.handles = {}, g = 0; f.length > g; g++) {
                l = c.trim(f[g]), j = "ui-resizable-" + l, h = c("<div class='ui-resizable-handle " + j + "'></div>"), h.css({zIndex: k.zIndex}), "se" === l && h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[l] = ".ui-resizable-" + l, this.element.append(h)
            }
        }
        this._renderAxis = function (m) {
            var p, t, q, r;
            m = m || this.element;
            for (p in this.handles) {
                this.handles[p].constructor === String && (this.handles[p] = c(this.handles[p], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (t = c(this.handles[p], this.element), r = /sw|ne|nw|se|n|s/.test(p) ? t.outerHeight() : t.outerWidth(), q = ["padding", /ne|nw|n/.test(p) ? "Top" : /se|sw|s/.test(p) ? "Bottom" : /^e$/.test(p) ? "Right" : "Left"].join(""), m.css(q, r), this._proportionallyResize()), c(this.handles[p]).length
            }
        }, this._renderAxis(this.element), this._handles = c(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
            d.resizing || (this.className && (h = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), d.axis = h && h[1] ? h[1] : "se")
        }), k.autoHide && (this._handles.hide(), c(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
            k.disabled || (c(this).removeClass("ui-resizable-autohide"), d._handles.show())
        }).mouseleave(function () {
            k.disabled || d.resizing || (c(this).addClass("ui-resizable-autohide"), d._handles.hide())
        })), this._mouseInit()
    }, _destroy: function () {
        this._mouseDestroy();
        var d, f = function (g) {
            c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
        };
        return this.elementIsWrapper && (f(this.element), d = this.element, this.originalElement.css({position: d.css("position"), width: d.outerWidth(), height: d.outerHeight(), top: d.css("top"), left: d.css("left")}).insertAfter(d), d.remove()), this.originalElement.css("resize", this.originalResizeStyle), f(this.originalElement), this
    }, _mouseCapture: function (d) {
        var f, h, g = !1;
        for (f in this.handles) {
            h = c(this.handles[f])[0], (h === d.target || c.contains(h, d.target)) && (g = !0)
        }
        return !this.options.disabled && g
    }, _mouseStart: function (f) {
        var l, g, j, d = this.options, k = this.element.position(), e = this.element;
        return this.resizing = !0, /absolute/.test(e.css("position")) ? e.css({position: "absolute", top: e.css("top"), left: e.css("left")}) : e.is(".ui-draggable") && e.css({position: "absolute", top: k.top, left: k.left}), this._renderProxy(), l = a(this.helper.css("left")), g = a(this.helper.css("top")), d.containment && (l += c(d.containment).scrollLeft() || 0, g += c(d.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {left: l, top: g}, this.size = this._helper ? {width: e.outerWidth(), height: e.outerHeight()} : {width: e.width(), height: e.height()}, this.originalSize = this._helper ? {width: e.outerWidth(), height: e.outerHeight()} : {width: e.width(), height: e.height()}, this.originalPosition = {left: l, top: g}, this.sizeDiff = {width: e.outerWidth() - e.width(), height: e.outerHeight() - e.height()}, this.originalMousePosition = {left: f.pageX, top: f.pageY}, this.aspectRatio = "number" == typeof d.aspectRatio ? d.aspectRatio : this.originalSize.width / this.originalSize.height || 1, j = c(".ui-resizable-" + this.axis).css("cursor"), c("body").css("cursor", "auto" === j ? this.axis + "-resize" : j), e.addClass("ui-resizable-resizing"), this._propagate("start", f), !0
    }, _mouseDrag: function (k) {
        var q, B = this.helper, v = {}, w = this.originalMousePosition, f = this.axis, A = this.position.top, m = this.position.left, t = this.size.width, g = this.size.height, C = k.pageX - w.left || 0, j = k.pageY - w.top || 0, z = this._change[f];
        return z ? (q = z.apply(this, [k, C, j]), this._updateVirtualBoundaries(k.shiftKey), (this._aspectRatio || k.shiftKey) && (q = this._updateRatio(q, k)), q = this._respectSize(q, k), this._updateCache(q), this._propagate("resize", k), this.position.top !== A && (v.top = this.position.top + "px"), this.position.left !== m && (v.left = this.position.left + "px"), this.size.width !== t && (v.width = this.size.width + "px"), this.size.height !== g && (v.height = this.size.height + "px"), B.css(v), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), c.isEmptyObject(v) || this._trigger("resize", k, this.ui()), !1) : !1
    }, _mouseStop: function (g) {
        this.resizing = !1;
        var k, u, p, q, d, t, j, m = this.options, f = this;
        return this._helper && (k = this._proportionallyResizeElements, u = k.length && /textarea/i.test(k[0].nodeName), p = u && c.ui.hasScroll(k[0], "left") ? 0 : f.sizeDiff.height, q = u ? 0 : f.sizeDiff.width, d = {width: f.helper.width() - q, height: f.helper.height() - p}, t = parseInt(f.element.css("left"), 10) + (f.position.left - f.originalPosition.left) || null, j = parseInt(f.element.css("top"), 10) + (f.position.top - f.originalPosition.top) || null, m.animate || this.element.css(c.extend(d, {top: j, left: t})), f.helper.height(f.size.height), f.helper.width(f.size.width), this._helper && !m.animate && this._proportionallyResize()), c("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", g), this._helper && this.helper.remove(), !1
    }, _updateVirtualBoundaries: function (l) {
        var f, k, g, h, d, j = this.options;
        d = {minWidth: b(j.minWidth) ? j.minWidth : 0, maxWidth: b(j.maxWidth) ? j.maxWidth : 1 / 0, minHeight: b(j.minHeight) ? j.minHeight : 0, maxHeight: b(j.maxHeight) ? j.maxHeight : 1 / 0}, (this._aspectRatio || l) && (f = d.minHeight * this.aspectRatio, g = d.minWidth / this.aspectRatio, k = d.maxHeight * this.aspectRatio, h = d.maxWidth / this.aspectRatio, f > d.minWidth && (d.minWidth = f), g > d.minHeight && (d.minHeight = g), d.maxWidth > k && (d.maxWidth = k), d.maxHeight > h && (d.maxHeight = h)), this._vBoundaries = d
    }, _updateCache: function (d) {
        this.offset = this.helper.offset(), b(d.left) && (this.position.left = d.left), b(d.top) && (this.position.top = d.top), b(d.height) && (this.size.height = d.height), b(d.width) && (this.size.width = d.width)
    }, _updateRatio: function (h) {
        var d = this.position, g = this.size, f = this.axis;
        return b(h.height) ? h.width = h.height * this.aspectRatio : b(h.width) && (h.height = h.width / this.aspectRatio), "sw" === f && (h.left = d.left + (g.width - h.width), h.top = null), "nw" === f && (h.top = d.top + (g.height - h.height), h.left = d.left + (g.width - h.width)), h
    }, _respectSize: function (w) {
        var g = this._vBoundaries, v = this.axis, m = b(w.width) && g.maxWidth && g.maxWidth < w.width, p = b(w.height) && g.maxHeight && g.maxHeight < w.height, d = b(w.width) && g.minWidth && g.minWidth > w.width, q = b(w.height) && g.minHeight && g.minHeight > w.height, j = this.originalPosition.left + this.originalSize.width, k = this.position.top + this.size.height, f = /sw|nw|w/.test(v), z = /nw|ne|n/.test(v);
        return d && (w.width = g.minWidth), q && (w.height = g.minHeight), m && (w.width = g.maxWidth), p && (w.height = g.maxHeight), d && f && (w.left = j - g.minWidth), m && f && (w.left = j - g.maxWidth), q && z && (w.top = k - g.minHeight), p && z && (w.top = k - g.maxHeight), w.width || w.height || w.left || !w.top ? w.width || w.height || w.top || !w.left || (w.left = null) : w.top = null, w
    }, _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length) {
            var k, d, f, j, g, h = this.helper || this.element;
            for (k = 0; this._proportionallyResizeElements.length > k; k++) {
                if (g = this._proportionallyResizeElements[k], !this.borderDif) {
                    for (this.borderDif = [], f = [g.css("borderTopWidth"), g.css("borderRightWidth"), g.css("borderBottomWidth"), g.css("borderLeftWidth")], j = [g.css("paddingTop"), g.css("paddingRight"), g.css("paddingBottom"), g.css("paddingLeft")], d = 0; f.length > d; d++) {
                        this.borderDif[d] = (parseInt(f[d], 10) || 0) + (parseInt(j[d], 10) || 0)
                    }
                }
                g.css({height: h.height() - this.borderDif[0] - this.borderDif[2] || 0, width: h.width() - this.borderDif[1] - this.borderDif[3] || 0})
            }
        }
    }, _renderProxy: function () {
        var d = this.element, f = this.options;
        this.elementOffset = d.offset(), this._helper ? (this.helper = this.helper || c("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++f.zIndex}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
    }, _change: {e: function (f, d) {
        return{width: this.originalSize.width + d}
    }, w: function (h, d) {
        var f = this.originalSize, g = this.originalPosition;
        return{left: g.left + d, width: f.width - d}
    }, n: function (j, d, f) {
        var h = this.originalSize, g = this.originalPosition;
        return{top: g.top + f, height: h.height - f}
    }, s: function (g, d, f) {
        return{height: this.originalSize.height + f}
    }, se: function (d, f, g) {
        return c.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [d, f, g]))
    }, sw: function (d, f, g) {
        return c.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [d, f, g]))
    }, ne: function (d, f, g) {
        return c.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [d, f, g]))
    }, nw: function (d, f, g) {
        return c.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [d, f, g]))
    }}, _propagate: function (d, f) {
        c.ui.plugin.call(this, d, [f, this.ui()]), "resize" !== d && this._trigger(d, f, this.ui())
    }, plugins: {}, ui: function () {
        return{originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition}
    }}), c.ui.plugin.add("resizable", "animate", {stop: function (g) {
        var k = c(this).data("ui-resizable"), u = k.options, p = k._proportionallyResizeElements, q = p.length && /textarea/i.test(p[0].nodeName), d = q && c.ui.hasScroll(p[0], "left") ? 0 : k.sizeDiff.height, t = q ? 0 : k.sizeDiff.width, j = {width: k.size.width - t, height: k.size.height - d}, m = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, f = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null;
        k.element.animate(c.extend(j, f && m ? {top: f, left: m} : {}), {duration: u.animateDuration, easing: u.animateEasing, step: function () {
            var e = {width: parseInt(k.element.css("width"), 10), height: parseInt(k.element.css("height"), 10), top: parseInt(k.element.css("top"), 10), left: parseInt(k.element.css("left"), 10)};
            p && p.length && c(p[0]).css({width: e.width, height: e.height}), k._updateCache(e), k._propagate("resize", g)
        }})
    }}), c.ui.plugin.add("resizable", "containment", {start: function () {
        var k, z, q, t, e, w, j, m = c(this).data("ui-resizable"), f = m.options, A = m.element, g = f.containment, v = g instanceof c ? g.get(0) : /parent/.test(g) ? A.parent().get(0) : g;
        v && (m.containerElement = c(v), /document/.test(g) || g === document ? (m.containerOffset = {left: 0, top: 0}, m.containerPosition = {left: 0, top: 0}, m.parentData = {element: c(document), left: 0, top: 0, width: c(document).width(), height: c(document).height() || document.body.parentNode.scrollHeight}) : (k = c(v), z = [], c(["Top", "Right", "Left", "Bottom"]).each(function (h, d) {
            z[h] = a(k.css("padding" + d))
        }), m.containerOffset = k.offset(), m.containerPosition = k.position(), m.containerSize = {height: k.innerHeight() - z[3], width: k.innerWidth() - z[1]}, q = m.containerOffset, t = m.containerSize.height, e = m.containerSize.width, w = c.ui.hasScroll(v, "left") ? v.scrollWidth : e, j = c.ui.hasScroll(v) ? v.scrollHeight : t, m.parentData = {element: v, left: q.left, top: q.top, width: w, height: j}))
    }, resize: function (k) {
        var p, z, t, v, f = c(this).data("ui-resizable"), w = f.options, m = f.containerOffset, q = f.position, g = f._aspectRatio || k.shiftKey, A = {top: 0, left: 0}, j = f.containerElement;
        j[0] !== document && /static/.test(j.css("position")) && (A = m), q.left < (f._helper ? m.left : 0) && (f.size.width = f.size.width + (f._helper ? f.position.left - m.left : f.position.left - A.left), g && (f.size.height = f.size.width / f.aspectRatio), f.position.left = w.helper ? m.left : 0), q.top < (f._helper ? m.top : 0) && (f.size.height = f.size.height + (f._helper ? f.position.top - m.top : f.position.top), g && (f.size.width = f.size.height * f.aspectRatio), f.position.top = f._helper ? m.top : 0), f.offset.left = f.parentData.left + f.position.left, f.offset.top = f.parentData.top + f.position.top, p = Math.abs((f._helper ? f.offset.left - A.left : f.offset.left - A.left) + f.sizeDiff.width), z = Math.abs((f._helper ? f.offset.top - A.top : f.offset.top - m.top) + f.sizeDiff.height), t = f.containerElement.get(0) === f.element.parent().get(0), v = /relative|absolute/.test(f.containerElement.css("position")), t && v && (p -= f.parentData.left), p + f.size.width >= f.parentData.width && (f.size.width = f.parentData.width - p, g && (f.size.height = f.size.width / f.aspectRatio)), z + f.size.height >= f.parentData.height && (f.size.height = f.parentData.height - z, g && (f.size.width = f.size.height * f.aspectRatio))
    }, stop: function () {
        var f = c(this).data("ui-resizable"), j = f.options, t = f.containerOffset, m = f.containerPosition, p = f.containerElement, d = c(f.helper), q = d.offset(), g = d.outerWidth() - f.sizeDiff.width, k = d.outerHeight() - f.sizeDiff.height;
        f._helper && !j.animate && /relative/.test(p.css("position")) && c(this).css({left: q.left - m.left - t.left, width: g, height: k}), f._helper && !j.animate && /static/.test(p.css("position")) && c(this).css({left: q.left - m.left - t.left, width: g, height: k})
    }}), c.ui.plugin.add("resizable", "alsoResize", {start: function () {
        var d = c(this).data("ui-resizable"), f = d.options, g = function (h) {
            c(h).each(function () {
                var j = c(this);
                j.data("ui-resizable-alsoresize", {width: parseInt(j.width(), 10), height: parseInt(j.height(), 10), left: parseInt(j.css("left"), 10), top: parseInt(j.css("top"), 10)})
            })
        };
        "object" != typeof f.alsoResize || f.alsoResize.parentNode ? g(f.alsoResize) : f.alsoResize.length ? (f.alsoResize = f.alsoResize[0], g(f.alsoResize)) : c.each(f.alsoResize, function (e) {
            g(e)
        })
    }, resize: function (f, j) {
        var p = c(this).data("ui-resizable"), k = p.options, l = p.originalSize, d = p.originalPosition, m = {height: p.size.height - l.height || 0, width: p.size.width - l.width || 0, top: p.position.top - d.top || 0, left: p.position.left - d.left || 0}, g = function (h, n) {
            c(h).each(function () {
                var r = c(this), s = c(this).data("ui-resizable-alsoresize"), t = {}, q = n && n.length ? n : r.parents(j.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                c.each(q, function (v, o) {
                    var u = (s[o] || 0) + (m[o] || 0);
                    u && u >= 0 && (t[o] = u || null)
                }), r.css(t)
            })
        };
        "object" != typeof k.alsoResize || k.alsoResize.nodeType ? g(k.alsoResize) : c.each(k.alsoResize, function (n, h) {
            g(n, h)
        })
    }, stop: function () {
        c(this).removeData("resizable-alsoresize")
    }}), c.ui.plugin.add("resizable", "ghost", {start: function () {
        var d = c(this).data("ui-resizable"), f = d.options, g = d.size;
        d.ghost = d.originalElement.clone(), d.ghost.css({opacity: 0.25, display: "block", position: "relative", height: g.height, width: g.width, margin: 0, left: 0, top: 0}).addClass("ui-resizable-ghost").addClass("string" == typeof f.ghost ? f.ghost : ""), d.ghost.appendTo(d.helper)
    }, resize: function () {
        var d = c(this).data("ui-resizable");
        d.ghost && d.ghost.css({position: "relative", height: d.size.height, width: d.size.width})
    }, stop: function () {
        var d = c(this).data("ui-resizable");
        d.ghost && d.helper && d.helper.get(0).removeChild(d.ghost.get(0))
    }}), c.ui.plugin.add("resizable", "grid", {resize: function () {
        var t = c(this).data("ui-resizable"), B = t.options, I = t.size, E = t.originalSize, F = t.originalPosition, j = t.axis, H = "number" == typeof B.grid ? [B.grid, B.grid] : B.grid, A = H[0] || 1, C = H[1] || 1, k = Math.round((I.width - E.width) / A) * A, J = Math.round((I.height - E.height) / C) * C, q = E.width + k, G = E.height + J, w = B.maxWidth && q > B.maxWidth, z = B.maxHeight && G > B.maxHeight, D = B.minWidth && B.minWidth > q, K = B.minHeight && B.minHeight > G;
        B.grid = H, D && (q += A), K && (G += C), w && (q -= A), z && (G -= C), /^(se|s|e)$/.test(j) ? (t.size.width = q, t.size.height = G) : /^(ne)$/.test(j) ? (t.size.width = q, t.size.height = G, t.position.top = F.top - J) : /^(sw)$/.test(j) ? (t.size.width = q, t.size.height = G, t.position.left = F.left - k) : (t.size.width = q, t.size.height = G, t.position.top = F.top - J, t.position.left = F.left - k)
    }})
}(jQuery), function (a) {
    a.widget("ui.selectable", a.ui.mouse, {version: "1.10.3", options: {appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null}, _create: function () {
        var b, c = this;
        this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
            b = a(c.options.filter, c.element[0]), b.addClass("ui-selectee"), b.each(function () {
                var d = a(this), f = d.offset();
                a.data(this, "selectable-item", {element: this, $element: d, left: f.left, top: f.top, right: f.left + d.outerWidth(), bottom: f.top + d.outerHeight(), startselected: !1, selected: d.hasClass("ui-selected"), selecting: d.hasClass("ui-selecting"), unselecting: d.hasClass("ui-unselecting")})
            })
        }, this.refresh(), this.selectees = b.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>")
    }, _destroy: function () {
        this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
    }, _mouseStart: function (b) {
        var c = this, d = this.options;
        this.opos = [b.pageX, b.pageY], this.options.disabled || (this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({left: b.pageX, top: b.pageY, width: 0, height: 0}), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
            var e = a.data(this, "selectable-item");
            e.startselected = !0, b.metaKey || b.ctrlKey || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, c._trigger("unselecting", b, {unselecting: e.element}))
        }), a(b.target).parents().addBack().each(function () {
            var f, e = a.data(this, "selectable-item");
            return e ? (f = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), e.$element.removeClass(f ? "ui-unselecting" : "ui-selected").addClass(f ? "ui-selecting" : "ui-unselecting"), e.unselecting = !f, e.selecting = f, e.selected = f, f ? c._trigger("selecting", b, {selecting: e.element}) : c._trigger("unselecting", b, {unselecting: e.element}), !1) : undefined
        }))
    }, _mouseDrag: function (c) {
        if (this.dragged = !0, !this.options.disabled) {
            var f, l = this, g = this.options, j = this.opos[0], b = this.opos[1], k = c.pageX, d = c.pageY;
            return j > k && (f = k, k = j, j = f), b > d && (f = d, d = b, b = f), this.helper.css({left: j, top: b, width: k - j, height: d - b}), this.selectees.each(function () {
                var e = a.data(this, "selectable-item"), h = !1;
                e && e.element !== l.element[0] && ("touch" === g.tolerance ? h = !(e.left > k || j > e.right || e.top > d || b > e.bottom) : "fit" === g.tolerance && (h = e.left > j && k > e.right && e.top > b && d > e.bottom), h ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, l._trigger("selecting", c, {selecting: e.element}))) : (e.selecting && ((c.metaKey || c.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), l._trigger("unselecting", c, {unselecting: e.element}))), e.selected && (c.metaKey || c.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, l._trigger("unselecting", c, {unselecting: e.element})))))
            }), !1
        }
    }, _mouseStop: function (b) {
        var c = this;
        return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function () {
            var d = a.data(this, "selectable-item");
            d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {unselected: d.element})
        }), a(".ui-selecting", this.element[0]).each(function () {
            var d = a.data(this, "selectable-item");
            d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {selected: d.element})
        }), this._trigger("stop", b), this.helper.remove(), !1
    }})
}(jQuery), function (c) {
    function a(g, d, f) {
        return g > d && d + f > g
    }

    function b(d) {
        return/left|right/.test(d.css("float")) || /inline|table-cell/.test(d.css("display"))
    }

    c.widget("ui.sortable", c.ui.mouse, {version: "1.10.3", widgetEventPrefix: "sort", ready: !1, options: {appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1000, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null}, _create: function () {
        var d = this.options;
        this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === d.axis || b(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
    }, _destroy: function () {
        this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
        for (var d = this.items.length - 1; d >= 0; d--) {
            this.items[d].item.removeData(this.widgetName + "-item")
        }
        return this
    }, _setOption: function (d, f) {
        "disabled" === d ? (this.options[d] = f, this.widget().toggleClass("ui-sortable-disabled", !!f)) : c.Widget.prototype._setOption.apply(this, arguments)
    }, _mouseCapture: function (d, f) {
        var j = null, g = !1, h = this;
        return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(d), c(d.target).parents().each(function () {
            return c.data(this, h.widgetName + "-item") === h ? (j = c(this), !1) : undefined
        }), c.data(d.target, h.widgetName + "-item") === h && (j = c(d.target)), j ? !this.options.handle || f || (c(this.options.handle, j).find("*").addBack().each(function () {
            this === d.target && (g = !0)
        }), g) ? (this.currentItem = j, this._removeCurrentsFromItems(), !0) : !1 : !1)
    }, _mouseStart: function (f, g, k) {
        var h, j, d = this.options;
        if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(f), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left}, c.extend(this.offset, {click: {left: f.pageX - this.offset.left, top: f.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(f), this.originalPageX = f.pageX, this.originalPageY = f.pageY, d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt), this.domPosition = {prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0]}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), d.containment && this._setContainment(), d.cursor && "auto" !== d.cursor && (j = this.document.find("body"), this.storedCursor = j.css("cursor"), j.css("cursor", d.cursor), this.storedStylesheet = c("<style>*{ cursor: " + d.cursor + " !important; }</style>").appendTo(j)), d.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", d.opacity)), d.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", d.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", f, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !k) {
            for (h = this.containers.length - 1; h >= 0; h--) {
                this.containers[h]._trigger("activate", f, this._uiHash(this))
            }
        }
        return c.ui.ddmanager && (c.ui.ddmanager.current = this), c.ui.ddmanager && !d.dropBehaviour && c.ui.ddmanager.prepareOffsets(this, f), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(f), !0
    }, _mouseDrag: function (f) {
        var g, l, h, j, d = this.options, k = !1;
        for (this.position = this._generatePosition(f), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - f.pageY < d.scrollSensitivity ? this.scrollParent[0].scrollTop = k = this.scrollParent[0].scrollTop + d.scrollSpeed : f.pageY - this.overflowOffset.top < d.scrollSensitivity && (this.scrollParent[0].scrollTop = k = this.scrollParent[0].scrollTop - d.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - f.pageX < d.scrollSensitivity ? this.scrollParent[0].scrollLeft = k = this.scrollParent[0].scrollLeft + d.scrollSpeed : f.pageX - this.overflowOffset.left < d.scrollSensitivity && (this.scrollParent[0].scrollLeft = k = this.scrollParent[0].scrollLeft - d.scrollSpeed)) : (f.pageY - c(document).scrollTop() < d.scrollSensitivity ? k = c(document).scrollTop(c(document).scrollTop() - d.scrollSpeed) : c(window).height() - (f.pageY - c(document).scrollTop()) < d.scrollSensitivity && (k = c(document).scrollTop(c(document).scrollTop() + d.scrollSpeed)), f.pageX - c(document).scrollLeft() < d.scrollSensitivity ? k = c(document).scrollLeft(c(document).scrollLeft() - d.scrollSpeed) : c(window).width() - (f.pageX - c(document).scrollLeft()) < d.scrollSensitivity && (k = c(document).scrollLeft(c(document).scrollLeft() + d.scrollSpeed))), k !== !1 && c.ui.ddmanager && !d.dropBehaviour && c.ui.ddmanager.prepareOffsets(this, f)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), g = this.items.length - 1; g >= 0; g--) {
            if (l = this.items[g], h = l.item[0], j = this._intersectsWithPointer(l), j && l.instance === this.currentContainer && h !== this.currentItem[0] && this.placeholder[1 === j ? "next" : "prev"]()[0] !== h && !c.contains(this.placeholder[0], h) && ("semi-dynamic" === this.options.type ? !c.contains(this.element[0], h) : !0)) {
                if (this.direction = 1 === j ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(l)) {
                    break
                }
                this._rearrange(f, l), this._trigger("change", f, this._uiHash());
                break
            }
        }
        return this._contactContainers(f), c.ui.ddmanager && c.ui.ddmanager.drag(this, f), this._trigger("sort", f, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
    }, _mouseStop: function (f, g) {
        if (f) {
            if (c.ui.ddmanager && !this.options.dropBehaviour && c.ui.ddmanager.drop(this, f), this.options.revert) {
                var k = this, h = this.placeholder.offset(), j = this.options.axis, d = {};
                j && "x" !== j || (d.left = h.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), j && "y" !== j || (d.top = h.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, c(this.helper).animate(d, parseInt(this.options.revert, 10) || 500, function () {
                    k._clear(f)
                })
            } else {
                this._clear(f, g)
            }
            return !1
        }
    }, cancel: function () {
        if (this.dragging) {
            this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
            for (var d = this.containers.length - 1; d >= 0; d--) {
                this.containers[d]._trigger("deactivate", null, this._uiHash(this)), this.containers[d].containerCache.over && (this.containers[d]._trigger("out", null, this._uiHash(this)), this.containers[d].containerCache.over = 0)
            }
        }
        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), c.extend(this, {helper: null, dragging: !1, reverting: !1, _noFinalSort: null}), this.domPosition.prev ? c(this.domPosition.prev).after(this.currentItem) : c(this.domPosition.parent).prepend(this.currentItem)), this
    }, serialize: function (d) {
        var f = this._getItemsAsjQuery(d && d.connected), g = [];
        return d = d || {}, c(f).each(function () {
            var e = (c(d.item || this).attr(d.attribute || "id") || "").match(d.expression || /(.+)[\-=_](.+)/);
            e && g.push((d.key || e[1] + "[]") + "=" + (d.key && d.expression ? e[1] : e[2]))
        }), !g.length && d.key && g.push(d.key + "="), g.join("&")
    }, toArray: function (d) {
        var f = this._getItemsAsjQuery(d && d.connected), g = [];
        return d = d || {}, f.each(function () {
            g.push(c(d.item || this).attr(d.attribute || "id") || "")
        }), g
    }, _intersectsWith: function (D) {
        var k = this.positionAbs.left, q = k + this.helperProportions.width, C = this.positionAbs.top, w = C + this.helperProportions.height, z = D.left, f = z + D.width, B = D.top, m = B + D.height, v = this.offset.click.top, g = this.offset.click.left, E = "x" === this.options.axis || C + v > B && m > C + v, j = "y" === this.options.axis || k + g > z && f > k + g, A = E && j;
        return"pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > D[this.floating ? "width" : "height"] ? A : k + this.helperProportions.width / 2 > z && f > q - this.helperProportions.width / 2 && C + this.helperProportions.height / 2 > B && m > w - this.helperProportions.height / 2
    }, _intersectsWithPointer: function (j) {
        var e = "x" === this.options.axis || a(this.positionAbs.top + this.offset.click.top, j.top, j.height), h = "y" === this.options.axis || a(this.positionAbs.left + this.offset.click.left, j.left, j.width), f = e && h, g = this._getDragVerticalDirection(), d = this._getDragHorizontalDirection();
        return f ? this.floating ? d && "right" === d || "down" === g ? 2 : 1 : g && ("down" === g ? 2 : 1) : !1
    }, _intersectsWithSides: function (h) {
        var d = a(this.positionAbs.top + this.offset.click.top, h.top + h.height / 2, h.height), g = a(this.positionAbs.left + this.offset.click.left, h.left + h.width / 2, h.width), e = this._getDragVerticalDirection(), f = this._getDragHorizontalDirection();
        return this.floating && f ? "right" === f && g || "left" === f && !g : e && ("down" === e && d || "up" === e && !d)
    }, _getDragVerticalDirection: function () {
        var d = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 !== d && (d > 0 ? "down" : "up")
    }, _getDragHorizontalDirection: function () {
        var d = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 !== d && (d > 0 ? "right" : "left")
    }, refresh: function (d) {
        return this._refreshItems(d), this.refreshPositions(), this
    }, _connectWith: function () {
        var d = this.options;
        return d.connectWith.constructor === String ? [d.connectWith] : d.connectWith
    }, _getItemsAsjQuery: function (f) {
        var j, p, k, l, d = [], m = [], g = this._connectWith();
        if (g && f) {
            for (j = g.length - 1; j >= 0; j--) {
                for (k = c(g[j]), p = k.length - 1; p >= 0; p--) {
                    l = c.data(k[p], this.widgetFullName), l && l !== this && !l.options.disabled && m.push([c.isFunction(l.options.items) ? l.options.items.call(l.element) : c(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
                }
            }
        }
        for (m.push([c.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options, item: this.currentItem}) : c(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), j = m.length - 1; j >= 0; j--) {
            m[j][0].each(function () {
                d.push(this)
            })
        }
        return c(d)
    }, _removeCurrentsFromItems: function () {
        var d = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = c.grep(this.items, function (f) {
            for (var e = 0; d.length > e; e++) {
                if (d[e] === f.item[0]) {
                    return !1
                }
            }
            return !0
        })
    }, _refreshItems: function (k) {
        this.items = [], this.containers = [this];
        var p, z, t, v, f, w, m, q, g = this.items, A = [
            [c.isFunction(this.options.items) ? this.options.items.call(this.element[0], k, {item: this.currentItem}) : c(this.options.items, this.element), this]
        ], j = this._connectWith();
        if (j && this.ready) {
            for (p = j.length - 1; p >= 0; p--) {
                for (t = c(j[p]), z = t.length - 1; z >= 0; z--) {
                    v = c.data(t[z], this.widgetFullName), v && v !== this && !v.options.disabled && (A.push([c.isFunction(v.options.items) ? v.options.items.call(v.element[0], k, {item: this.currentItem}) : c(v.options.items, v.element), v]), this.containers.push(v))
                }
            }
        }
        for (p = A.length - 1; p >= 0; p--) {
            for (f = A[p][1], w = A[p][0], z = 0, q = w.length; q > z; z++) {
                m = c(w[z]), m.data(this.widgetName + "-item", f), g.push({item: m, instance: f, width: 0, height: 0, left: 0, top: 0})
            }
        }
    }, refreshPositions: function (d) {
        this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
        var f, j, g, h;
        for (f = this.items.length - 1; f >= 0; f--) {
            j = this.items[f], j.instance !== this.currentContainer && this.currentContainer && j.item[0] !== this.currentItem[0] || (g = this.options.toleranceElement ? c(this.options.toleranceElement, j.item) : j.item, d || (j.width = g.outerWidth(), j.height = g.outerHeight()), h = g.offset(), j.left = h.left, j.top = h.top)
        }
        if (this.options.custom && this.options.custom.refreshContainers) {
            this.options.custom.refreshContainers.call(this)
        } else {
            for (f = this.containers.length - 1; f >= 0; f--) {
                h = this.containers[f].element.offset(), this.containers[f].containerCache.left = h.left, this.containers[f].containerCache.top = h.top, this.containers[f].containerCache.width = this.containers[f].element.outerWidth(), this.containers[f].containerCache.height = this.containers[f].element.outerHeight()
            }
        }
        return this
    }, _createPlaceholder: function (d) {
        d = d || this;
        var f, g = d.options;
        g.placeholder && g.placeholder.constructor !== String || (f = g.placeholder, g.placeholder = {element: function () {
            var h = d.currentItem[0].nodeName.toLowerCase(), e = c("<" + h + ">", d.document[0]).addClass(f || d.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
            return"tr" === h ? d.currentItem.children().each(function () {
                c("<td>&#160;</td>", d.document[0]).attr("colspan", c(this).attr("colspan") || 1).appendTo(e)
            }) : "img" === h && e.attr("src", d.currentItem.attr("src")), f || e.css("visibility", "hidden"), e
        }, update: function (h, e) {
            (!f || g.forcePlaceholderSize) && (e.height() || e.height(d.currentItem.innerHeight() - parseInt(d.currentItem.css("paddingTop") || 0, 10) - parseInt(d.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(d.currentItem.innerWidth() - parseInt(d.currentItem.css("paddingLeft") || 0, 10) - parseInt(d.currentItem.css("paddingRight") || 0, 10)))
        }}), d.placeholder = c(g.placeholder.element.call(d.element, d.currentItem)), d.currentItem.after(d.placeholder), g.placeholder.update(d, d.placeholder)
    }, _contactContainers: function (C) {
        var w, z, e, B, t, v, j, D, k, A, m = null, q = null;
        for (w = this.containers.length - 1; w >= 0; w--) {
            if (!c.contains(this.currentItem[0], this.containers[w].element[0])) {
                if (this._intersectsWith(this.containers[w].containerCache)) {
                    if (m && c.contains(this.containers[w].element[0], m.element[0])) {
                        continue
                    }
                    m = this.containers[w], q = w
                } else {
                    this.containers[w].containerCache.over && (this.containers[w]._trigger("out", C, this._uiHash(this)), this.containers[w].containerCache.over = 0)
                }
            }
        }
        if (m) {
            if (1 === this.containers.length) {
                this.containers[q].containerCache.over || (this.containers[q]._trigger("over", C, this._uiHash(this)), this.containers[q].containerCache.over = 1)
            } else {
                for (e = 10000, B = null, A = m.floating || b(this.currentItem), t = A ? "left" : "top", v = A ? "width" : "height", j = this.positionAbs[t] + this.offset.click[t], z = this.items.length - 1; z >= 0; z--) {
                    c.contains(this.containers[q].element[0], this.items[z].item[0]) && this.items[z].item[0] !== this.currentItem[0] && (!A || a(this.positionAbs.top + this.offset.click.top, this.items[z].top, this.items[z].height)) && (D = this.items[z].item.offset()[t], k = !1, Math.abs(D - j) > Math.abs(D + this.items[z][v] - j) && (k = !0, D += this.items[z][v]), e > Math.abs(D - j) && (e = Math.abs(D - j), B = this.items[z], this.direction = k ? "up" : "down"))
                }
                if (!B && !this.options.dropOnEmpty) {
                    return
                }
                if (this.currentContainer === this.containers[q]) {
                    return
                }
                B ? this._rearrange(C, B, null, !0) : this._rearrange(C, null, this.containers[q].element, !0), this._trigger("change", C, this._uiHash()), this.containers[q]._trigger("change", C, this._uiHash(this)), this.currentContainer = this.containers[q], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[q]._trigger("over", C, this._uiHash(this)), this.containers[q].containerCache.over = 1
            }
        }
    }, _createHelper: function (d) {
        var f = this.options, g = c.isFunction(f.helper) ? c(f.helper.apply(this.element[0], [d, this.currentItem])) : "clone" === f.helper ? this.currentItem.clone() : this.currentItem;
        return g.parents("body").length || c("parent" !== f.appendTo ? f.appendTo : this.currentItem[0].parentNode)[0].appendChild(g[0]), g[0] === this.currentItem[0] && (this._storedCSS = {width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left")}), (!g[0].style.width || f.forceHelperSize) && g.width(this.currentItem.width()), (!g[0].style.height || f.forceHelperSize) && g.height(this.currentItem.height()), g
    }, _adjustOffsetFromHelper: function (d) {
        "string" == typeof d && (d = d.split(" ")), c.isArray(d) && (d = {left: +d[0], top: +d[1] || 0}), "left" in d && (this.offset.click.left = d.left + this.margins.left), "right" in d && (this.offset.click.left = this.helperProportions.width - d.right + this.margins.left), "top" in d && (this.offset.click.top = d.top + this.margins.top), "bottom" in d && (this.offset.click.top = this.helperProportions.height - d.bottom + this.margins.top)
    }, _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var d = this.offsetParent.offset();
        return"absolute" === this.cssPosition && this.scrollParent[0] !== document && c.contains(this.scrollParent[0], this.offsetParent[0]) && (d.left += this.scrollParent.scrollLeft(), d.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && c.ui.ie) && (d = {top: 0, left: 0}), {top: d.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: d.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if ("relative" === this.cssPosition) {
            var d = this.currentItem.position();
            return{top: d.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: d.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return{top: 0, left: 0}
    }, _cacheMargins: function () {
        this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var d, f, h, g = this.options;
        "parent" === g.containment && (g.containment = this.helper[0].parentNode), ("document" === g.containment || "window" === g.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, c("document" === g.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (c("document" === g.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(g.containment) || (d = c(g.containment)[0], f = c(g.containment).offset(), h = "hidden" !== c(d).css("overflow"), this.containment = [f.left + (parseInt(c(d).css("borderLeftWidth"), 10) || 0) + (parseInt(c(d).css("paddingLeft"), 10) || 0) - this.margins.left, f.top + (parseInt(c(d).css("borderTopWidth"), 10) || 0) + (parseInt(c(d).css("paddingTop"), 10) || 0) - this.margins.top, f.left + (h ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c(d).css("borderLeftWidth"), 10) || 0) - (parseInt(c(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, f.top + (h ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c(d).css("borderTopWidth"), 10) || 0) - (parseInt(c(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
    }, _convertPositionTo: function (d, f) {
        f || (f = this.position);
        var j = "absolute" === d ? 1 : -1, g = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && c.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(g[0].tagName);
        return{top: f.top + this.offset.relative.top * j + this.offset.parent.top * j - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : g.scrollTop()) * j, left: f.left + this.offset.relative.left * j + this.offset.parent.left * j - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : g.scrollLeft()) * j}
    }, _generatePosition: function (f) {
        var j, p, k = this.options, l = f.pageX, d = f.pageY, m = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && c.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, g = /(html|body)/i.test(m[0].tagName);
        return"relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (f.pageX - this.offset.click.left < this.containment[0] && (l = this.containment[0] + this.offset.click.left), f.pageY - this.offset.click.top < this.containment[1] && (d = this.containment[1] + this.offset.click.top), f.pageX - this.offset.click.left > this.containment[2] && (l = this.containment[2] + this.offset.click.left), f.pageY - this.offset.click.top > this.containment[3] && (d = this.containment[3] + this.offset.click.top)), k.grid && (j = this.originalPageY + Math.round((d - this.originalPageY) / k.grid[1]) * k.grid[1], d = this.containment ? j - this.offset.click.top >= this.containment[1] && j - this.offset.click.top <= this.containment[3] ? j : j - this.offset.click.top >= this.containment[1] ? j - k.grid[1] : j + k.grid[1] : j, p = this.originalPageX + Math.round((l - this.originalPageX) / k.grid[0]) * k.grid[0], l = this.containment ? p - this.offset.click.left >= this.containment[0] && p - this.offset.click.left <= this.containment[2] ? p : p - this.offset.click.left >= this.containment[0] ? p - k.grid[0] : p + k.grid[0] : p)), {top: d - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : g ? 0 : m.scrollTop()), left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : g ? 0 : m.scrollLeft())}
    }, _rearrange: function (j, d, f, h) {
        f ? f[0].appendChild(this.placeholder[0]) : d.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? d.item[0] : d.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
        var g = this.counter;
        this._delay(function () {
            g === this.counter && this.refreshPositions(!h)
        })
    }, _clear: function (h, d) {
        this.reverting = !1;
        var f, g = [];
        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
            for (f in this._storedCSS) {
                ("auto" === this._storedCSS[f] || "static" === this._storedCSS[f]) && (this._storedCSS[f] = "")
            }
            this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
        } else {
            this.currentItem.show()
        }
        for (this.fromOutside && !d && g.push(function (e) {
            this._trigger("receive", e, this._uiHash(this.fromOutside))
        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || d || g.push(function (e) {
            this._trigger("update", e, this._uiHash())
        }), this !== this.currentContainer && (d || (g.push(function (e) {
            this._trigger("remove", e, this._uiHash())
        }), g.push(function (e) {
            return function (j) {
                e._trigger("receive", j, this._uiHash(this))
            }
        }.call(this, this.currentContainer)), g.push(function (e) {
            return function (j) {
                e._trigger("update", j, this._uiHash(this))
            }
        }.call(this, this.currentContainer)))), f = this.containers.length - 1; f >= 0; f--) {
            d || g.push(function (e) {
                return function (j) {
                    e._trigger("deactivate", j, this._uiHash(this))
                }
            }.call(this, this.containers[f])), this.containers[f].containerCache.over && (g.push(function (e) {
                return function (j) {
                    e._trigger("out", j, this._uiHash(this))
                }
            }.call(this, this.containers[f])), this.containers[f].containerCache.over = 0)
        }
        if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
            if (!d) {
                for (this._trigger("beforeStop", h, this._uiHash()), f = 0; g.length > f; f++) {
                    g[f].call(this, h)
                }
                this._trigger("stop", h, this._uiHash())
            }
            return this.fromOutside = !1, !1
        }
        if (d || this._trigger("beforeStop", h, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !d) {
            for (f = 0; g.length > f; f++) {
                g[f].call(this, h)
            }
            this._trigger("stop", h, this._uiHash())
        }
        return this.fromOutside = !1, !0
    }, _trigger: function () {
        c.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    }, _uiHash: function (d) {
        var f = d || this;
        return{helper: f.helper, placeholder: f.placeholder || c([]), position: f.position, originalPosition: f.originalPosition, offset: f.positionAbs, item: f.currentItem, sender: d ? d.element : null}
    }})
}(jQuery), function (c, a) {
    var b = "ui-effects-";
    c.effects = {effect: {}}, function (F, m) {
        function w(l, d, f) {
            var h = G[d.type] || {};
            return null == l ? f || !d.def ? null : d.def : (l = h.floor ? ~~l : parseFloat(l), isNaN(l) ? d.def : h.mod ? (l + h.mod) % h.mod : 0 > l ? 0 : l > h.max ? h.max : l)
        }

        function E(d) {
            var f = z(), e = f._rgba = [];
            return d = d.toLowerCase(), q(v, function (I, u) {
                var n, H = u.re.exec(d), p = H && u.parse(H), s = u.space || "rgba";
                return p ? (n = f[s](p), f[j[s].cache] = n[j[s].cache], e = f._rgba = n._rgba, !1) : m
            }), e.length ? ("0,0,0,0" === e.join() && F.extend(e, B.transparent), f) : B[d]
        }

        function A(h, d, f) {
            return f = (f + 1) % 1, 1 > 6 * f ? h + 6 * (d - h) * f : 1 > 2 * f ? d : 2 > 3 * f ? h + 6 * (d - h) * (2 / 3 - f) : h
        }

        var B, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", D = /^([\-+])=\s*(\d+\.?\d*)/, v = [
            {re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (d) {
                return[d[1], d[2], d[3], d[4]]
            }},
            {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (d) {
                return[2.55 * d[1], 2.55 * d[2], 2.55 * d[3], d[4]]
            }},
            {re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (d) {
                return[parseInt(d[1], 16), parseInt(d[2], 16), parseInt(d[3], 16)]
            }},
            {re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (d) {
                return[parseInt(d[1] + d[1], 16), parseInt(d[2] + d[2], 16), parseInt(d[3] + d[3], 16)]
            }},
            {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (d) {
                return[d[1], d[2] / 100, d[3] / 100, d[4]]
            }}
        ], z = F.Color = function (d, f, l, h) {
            return new F.Color.fn.parse(d, f, l, h)
        }, j = {rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}}, hsla: {props: {hue: {idx: 0, type: "degrees"}, saturation: {idx: 1, type: "percent"}, lightness: {idx: 2, type: "percent"}}}}, G = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, k = z.support = {}, C = F("<p>")[0], q = F.each;
        C.style.cssText = "background-color:rgba(1,1,1,.5)", k.rgba = C.style.backgroundColor.indexOf("rgba") > -1, q(j, function (f, d) {
            d.cache = "_" + f, d.props.alpha = {idx: 3, type: "percent", def: 1}
        }), z.fn = F.extend(z.prototype, {parse: function (o, e, t, l) {
            if (o === m) {
                return this._rgba = [null, null, null, null], this
            }
            (o.jquery || o.nodeType) && (o = F(o).css(e), e = m);
            var H = this, f = F.type(o), s = this._rgba = [];
            return e !== m && (o = [o, e, t, l], f = "array"), "string" === f ? this.parse(E(o) || B._default) : "array" === f ? (q(j.rgba.props, function (h, d) {
                s[d.idx] = w(o[d.idx], d)
            }), this) : "object" === f ? (o instanceof z ? q(j, function (h, d) {
                o[d.cache] && (H[d.cache] = o[d.cache].slice())
            }) : q(j, function (d, n) {
                var h = n.cache;
                q(n.props, function (r, p) {
                    if (!H[h] && n.to) {
                        if ("alpha" === r || null == o[r]) {
                            return
                        }
                        H[h] = n.to(H._rgba)
                    }
                    H[h][p.idx] = w(o[r], p, !0)
                }), H[h] && 0 > F.inArray(null, H[h].slice(0, 3)) && (H[h][3] = 1, n.from && (H._rgba = n.from(H[h])))
            }), this) : m
        }, is: function (h) {
            var d = z(h), f = !0, e = this;
            return q(j, function (s, n) {
                var l, p = d[n.cache];
                return p && (l = e[n.cache] || n.to && n.to(e._rgba) || [], q(n.props, function (r, o) {
                    return null != p[o.idx] ? f = p[o.idx] === l[o.idx] : m
                })), f
            }), f
        }, _space: function () {
            var f = [], d = this;
            return q(j, function (e, h) {
                d[h.cache] && f.push(e)
            }), f.pop()
        }, transition: function (J, f) {
            var I = z(J), p = I._space(), u = j[p], d = 0 === this.alpha() ? z("transparent") : this, H = d[u.cache] || u.to(d._rgba), l = H.slice();
            return I = I[u.cache], q(u.props, function (L, s) {
                var K = s.idx, e = H[K], r = I[K], h = G[s.type] || {};
                null !== r && (null === e ? l[K] = r : (h.mod && (r - e > h.mod / 2 ? e += h.mod : e - r > h.mod / 2 && (e -= h.mod)), l[K] = w((r - e) * f + e, s)))
            }), this[p](l)
        }, blend: function (d) {
            if (1 === this._rgba[3]) {
                return this
            }
            var f = this._rgba.slice(), l = f.pop(), h = z(d)._rgba;
            return z(F.map(f, function (o, n) {
                return(1 - l) * h[n] + l * o
            }))
        }, toRgbaString: function () {
            var d = "rgba(", f = F.map(this._rgba, function (l, h) {
                return null == l ? h > 2 ? 1 : 0 : l
            });
            return 1 === f[3] && (f.pop(), d = "rgb("), d + f.join() + ")"
        }, toHslaString: function () {
            var d = "hsla(", f = F.map(this.hsla(), function (l, h) {
                return null == l && (l = h > 2 ? 1 : 0), h && 3 > h && (l = Math.round(100 * l) + "%"), l
            });
            return 1 === f[3] && (f.pop(), d = "hsl("), d + f.join() + ")"
        }, toHexString: function (d) {
            var f = this._rgba.slice(), h = f.pop();
            return d && f.push(~~(255 * h)), "#" + F.map(f, function (e) {
                return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
            }).join("")
        }, toString: function () {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }}), z.fn.parse.prototype = z.fn, j.hsla.to = function (O) {
            if (null == O[0] || null == O[1] || null == O[2]) {
                return[null, null, null, O[3]]
            }
            var p, I, N = O[0] / 255, K = O[1] / 255, L = O[2] / 255, d = O[3], M = Math.max(N, K, L), H = Math.min(N, K, L), J = M - H, f = M + H, P = 0.5 * f;
            return p = H === M ? 0 : N === M ? 60 * (K - L) / J + 360 : K === M ? 60 * (L - N) / J + 120 : 60 * (N - K) / J + 240, I = 0 === J ? 0 : 0.5 >= P ? J / f : J / (2 - f), [Math.round(p) % 360, I, P, null == d ? 1 : d]
        }, j.hsla.from = function (u) {
            if (null == u[0] || null == u[1] || null == u[2]) {
                return[null, null, null, u[3]]
            }
            var f = u[0] / 360, h = u[1], p = u[2], l = u[3], d = 0.5 >= p ? p * (1 + h) : p + h - p * h, n = 2 * p - d;
            return[Math.round(255 * A(n, d, f + 1 / 3)), Math.round(255 * A(n, d, f)), Math.round(255 * A(n, d, f - 1 / 3)), l]
        }, q(j, function (r, l) {
            var p = l.props, d = l.cache, f = l.to, e = l.from;
            z.fn[r] = function (H) {
                if (f && !this[d] && (this[d] = f(this._rgba)), H === m) {
                    return this[d].slice()
                }
                var o, t = F.type(H), I = "array" === t || "object" === t ? H : arguments, h = this[d].slice();
                return q(p, function (J, n) {
                    var u = I["object" === t ? J : n.idx];
                    null == u && (u = h[n.idx]), h[n.idx] = w(u, n)
                }), e ? (o = z(e(h)), o[d] = h, o) : z(h)
            }, q(p, function (h, n) {
                z.fn[h] || (z.fn[h] = function (I) {
                    var J, s = F.type(I), u = "alpha" === h ? this._hsla ? "hsla" : "rgba" : r, H = this[u](), t = H[n.idx];
                    return"undefined" === s ? t : ("function" === s && (I = I.call(this, t), s = F.type(I)), null == I && n.empty ? this : ("string" === s && (J = D.exec(I), J && (I = t + parseFloat(J[2]) * ("+" === J[1] ? 1 : -1))), H[n.idx] = I, this[u](H)))
                })
            })
        }), z.hook = function (d) {
            var f = d.split(" ");
            q(f, function (h, l) {
                F.cssHooks[l] = {set: function (s, u) {
                    var H, p, I = "";
                    if ("transparent" !== u && ("string" !== F.type(u) || (H = E(u)))) {
                        if (u = z(H || u), !k.rgba && 1 !== u._rgba[3]) {
                            for (p = "backgroundColor" === l ? s.parentNode : s; ("" === I || "transparent" === I) && p && p.style;) {
                                try {
                                    I = F.css(p, "backgroundColor"), p = p.parentNode
                                } catch (t) {
                                }
                            }
                            u = u.blend(I && "transparent" !== I ? I : "_default")
                        }
                        u = u.toRgbaString()
                    }
                    try {
                        s.style[l] = u
                    } catch (t) {
                    }
                }}, F.fx.step[l] = function (n) {
                    n.colorInit || (n.start = z(n.elem, l), n.end = z(n.end), n.colorInit = !0), F.cssHooks[l].set(n.elem, n.start.transition(n.end, n.pos))
                }
            })
        }, z.hook(g), F.cssHooks.borderColor = {expand: function (f) {
            var d = {};
            return q(["Top", "Right", "Bottom", "Left"], function (e, h) {
                d["border" + h + "Color"] = f
            }), d
        }}, B = F.Color.names = {aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff"}
    }(jQuery), function () {
        function d(h) {
            var j, m, k = h.ownerDocument.defaultView ? h.ownerDocument.defaultView.getComputedStyle(h, null) : h.currentStyle, l = {};
            if (k && k.length && k[0] && k[k[0]]) {
                for (m = k.length; m--;) {
                    j = k[m], "string" == typeof k[j] && (l[c.camelCase(j)] = k[j])
                }
            } else {
                for (j in k) {
                    "string" == typeof k[j] && (l[j] = k[j])
                }
            }
            return l
        }

        function g(j, k) {
            var m, l, h = {};
            for (m in k) {
                l = k[m], j[m] !== l && (f[m] || (c.fx.step[m] || !isNaN(parseFloat(l))) && (h[m] = l))
            }
            return h
        }

        var e = ["add", "remove", "toggle"], f = {border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1};
        c.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (h, j) {
            c.fx.step[j] = function (k) {
                ("none" !== k.end && !k.setAttr || 1 === k.pos && !k.setAttr) && (jQuery.style(k.elem, j, k.end), k.setAttr = !0)
            }
        }), c.fn.addBack || (c.fn.addBack = function (h) {
            return this.add(null == h ? this.prevObject : this.prevObject.filter(h))
        }), c.effects.animateClass = function (k, m, j, n) {
            var l = c.speed(m, j, n);
            return this.queue(function () {
                var q, h = c(this), s = h.attr("class") || "", p = l.children ? h.find("*").addBack() : h;
                p = p.map(function () {
                    var o = c(this);
                    return{el: o, start: d(this)}
                }), q = function () {
                    c.each(e, function (r, o) {
                        k[o] && h[o + "Class"](k[o])
                    })
                }, q(), p = p.map(function () {
                    return this.end = d(this.el[0]), this.diff = g(this.start, this.end), this
                }), h.attr("class", s), p = p.map(function () {
                    var o = this, r = c.Deferred(), t = c.extend({}, l, {queue: !1, complete: function () {
                        r.resolve(o)
                    }});
                    return this.el.animate(this.diff, t), r.promise()
                }), c.when.apply(c, p.get()).done(function () {
                    q(), c.each(arguments, function () {
                        var o = this.el;
                        c.each(this.diff, function (r) {
                            o.css(r, "")
                        })
                    }), l.complete.call(h[0])
                })
            })
        }, c.fn.extend({addClass: function (h) {
            return function (j, m, k, l) {
                return m ? c.effects.animateClass.call(this, {add: j}, m, k, l) : h.apply(this, arguments)
            }
        }(c.fn.addClass), removeClass: function (h) {
            return function (j, m, k, l) {
                return arguments.length > 1 ? c.effects.animateClass.call(this, {remove: j}, m, k, l) : h.apply(this, arguments)
            }
        }(c.fn.removeClass), toggleClass: function (h) {
            return function (p, k, l, j, m) {
                return"boolean" == typeof k || k === a ? l ? c.effects.animateClass.call(this, k ? {add: p} : {remove: p}, l, j, m) : h.apply(this, arguments) : c.effects.animateClass.call(this, {toggle: p}, k, l, j)
            }
        }(c.fn.toggleClass), switchClass: function (h, j, m, k, l) {
            return c.effects.animateClass.call(this, {add: j, remove: h}, m, k, l)
        }})
    }(), function () {
        function e(f, g, j, h) {
            return c.isPlainObject(f) && (g = f, f = f.effect), f = {effect: f}, null == g && (g = {}), c.isFunction(g) && (h = g, j = null, g = {}), ("number" == typeof g || c.fx.speeds[g]) && (h = j, j = g, g = {}), c.isFunction(j) && (h = j, j = null), g && c.extend(f, g), j = j || g.duration, f.duration = c.fx.off ? 0 : "number" == typeof j ? j : j in c.fx.speeds ? c.fx.speeds[j] : c.fx.speeds._default, f.complete = h || g.complete, f
        }

        function d(f) {
            return !f || "number" == typeof f || c.fx.speeds[f] ? !0 : "string" != typeof f || c.effects.effect[f] ? c.isFunction(f) ? !0 : "object" != typeof f || f.effect ? !1 : !0 : !0
        }

        c.extend(c.effects, {version: "1.10.3", save: function (h, f) {
            for (var g = 0; f.length > g; g++) {
                null !== f[g] && h.data(b + f[g], h[0].style[f[g]])
            }
        }, restore: function (j, h) {
            var f, g;
            for (g = 0; h.length > g; g++) {
                null !== h[g] && (f = j.data(b + h[g]), f === a && (f = ""), j.css(h[g], f))
            }
        }, setMode: function (g, f) {
            return"toggle" === f && (f = g.is(":hidden") ? "show" : "hide"), f
        }, getBaseline: function (j, f) {
            var g, h;
            switch (j[0]) {
                case"top":
                    g = 0;
                    break;
                case"middle":
                    g = 0.5;
                    break;
                case"bottom":
                    g = 1;
                    break;
                default:
                    g = j[0] / f.height
            }
            switch (j[1]) {
                case"left":
                    h = 0;
                    break;
                case"center":
                    h = 0.5;
                    break;
                case"right":
                    h = 1;
                    break;
                default:
                    h = j[1] / f.width
            }
            return{x: h, y: g}
        }, createWrapper: function (g) {
            if (g.parent().is(".ui-effects-wrapper")) {
                return g.parent()
            }
            var h = {width: g.outerWidth(!0), height: g.outerHeight(!0), "float": g.css("float")}, l = c("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0}), j = {width: g.width(), height: g.height()}, k = document.activeElement;
            try {
                k.id
            } catch (f) {
                k = document.body
            }
            return g.wrap(l), (g[0] === k || c.contains(g[0], k)) && c(k).focus(), l = g.parent(), "static" === g.css("position") ? (l.css({position: "relative"}), g.css({position: "relative"})) : (c.extend(h, {position: g.css("position"), zIndex: g.css("z-index")}), c.each(["top", "left", "bottom", "right"], function (n, m) {
                h[m] = g.css(m), isNaN(parseInt(h[m], 10)) && (h[m] = "auto")
            }), g.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"})), g.css(j), l.css(h).show()
        }, removeWrapper: function (f) {
            var g = document.activeElement;
            return f.parent().is(".ui-effects-wrapper") && (f.parent().replaceWith(f), (f[0] === g || c.contains(f[0], g)) && c(g).focus()), f
        }, setTransition: function (f, g, j, h) {
            return h = h || {}, c.each(g, function (m, k) {
                var l = f.cssUnit(k);
                l[0] > 0 && (h[k] = l[0] * j + l[1])
            }), h
        }}), c.fn.extend({effect: function () {
            function g(l) {
                function t() {
                    c.isFunction(p) && p.call(m[0]), c.isFunction(l) && l()
                }

                var m = c(this), p = h.complete, q = h.mode;
                (m.is(":hidden") ? "hide" === q : "show" === q) ? (m[q](), t()) : f.call(m[0], h, t)
            }

            var h = e.apply(this, arguments), j = h.mode, k = h.queue, f = c.effects.effect[h.effect];
            return c.fx.off || !f ? j ? this[j](h.duration, h.complete) : this.each(function () {
                h.complete && h.complete.call(this)
            }) : k === !1 ? this.each(g) : this.queue(k || "fx", g)
        }, show: function (f) {
            return function (g) {
                if (d(g)) {
                    return f.apply(this, arguments)
                }
                var h = e.apply(this, arguments);
                return h.mode = "show", this.effect.call(this, h)
            }
        }(c.fn.show), hide: function (f) {
            return function (g) {
                if (d(g)) {
                    return f.apply(this, arguments)
                }
                var h = e.apply(this, arguments);
                return h.mode = "hide", this.effect.call(this, h)
            }
        }(c.fn.hide), toggle: function (f) {
            return function (g) {
                if (d(g) || "boolean" == typeof g) {
                    return f.apply(this, arguments)
                }
                var h = e.apply(this, arguments);
                return h.mode = "toggle", this.effect.call(this, h)
            }
        }(c.fn.toggle), cssUnit: function (f) {
            var g = this.css(f), h = [];
            return c.each(["em", "px", "%", "pt"], function (k, j) {
                g.indexOf(j) > 0 && (h = [parseFloat(g), j])
            }), h
        }})
    }(), function () {
        var d = {};
        c.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (f, e) {
            d[e] = function (g) {
                return Math.pow(g, f + 2)
            }
        }), c.extend(d, {Sine: function (e) {
            return 1 - Math.cos(e * Math.PI / 2)
        }, Circ: function (e) {
            return 1 - Math.sqrt(1 - e * e)
        }, Elastic: function (e) {
            return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
        }, Back: function (e) {
            return e * e * (3 * e - 2)
        }, Bounce: function (h) {
            for (var f, g = 4; ((f = Math.pow(2, --g)) - 1) / 11 > h;) {
            }
            return 1 / Math.pow(4, 3 - g) - 7.5625 * Math.pow((3 * f - 2) / 22 - h, 2)
        }}), c.each(d, function (f, g) {
            c.easing["easeIn" + f] = g, c.easing["easeOut" + f] = function (e) {
                return 1 - g(1 - e)
            }, c.easing["easeInOut" + f] = function (e) {
                return 0.5 > e ? g(2 * e) / 2 : 1 - g(-2 * e + 2) / 2
            }
        })
    }()
}(jQuery), function (d) {
    var a = 0, b = {}, c = {};
    b.height = b.paddingTop = b.paddingBottom = b.borderTopWidth = b.borderBottomWidth = "hide", c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "show", d.widget("ui.accordion", {version: "1.10.3", options: {active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"}, activate: null, beforeActivate: null}, _create: function () {
        var f = this.options;
        this.prevShow = this.prevHide = d(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), f.collapsible || f.active !== !1 && null != f.active || (f.active = 0), this._processPanels(), 0 > f.active && (f.active += this.headers.length), this._refresh()
    }, _getCreateEventData: function () {
        return{header: this.active, panel: this.active.length ? this.active.next() : d(), content: this.active.length ? this.active.next() : d()}
    }, _createIcons: function () {
        var f = this.options.icons;
        f && (d("<span>").addClass("ui-accordion-header-icon ui-icon " + f.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(f.header).addClass(f.activeHeader), this.headers.addClass("ui-accordion-icons"))
    }, _destroyIcons: function () {
        this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
    }, _destroy: function () {
        var e;
        this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
            /^ui-accordion/.test(this.id) && this.removeAttribute("id")
        }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
            /^ui-accordion/.test(this.id) && this.removeAttribute("id")
        }), "content" !== this.options.heightStyle && e.css("height", "")
    }, _setOption: function (g, f) {
        return"active" === g ? (this._activate(f), undefined) : ("event" === g && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(f)), this._super(g, f), "collapsible" !== g || f || this.options.active !== !1 || this._activate(0), "icons" === g && (this._destroyIcons(), f && this._createIcons()), "disabled" === g && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!f), undefined)
    }, _keydown: function (f) {
        if (!f.altKey && !f.ctrlKey) {
            var g = d.ui.keyCode, k = this.headers.length, h = this.headers.index(f.target), j = !1;
            switch (f.keyCode) {
                case g.RIGHT:
                case g.DOWN:
                    j = this.headers[(h + 1) % k];
                    break;
                case g.LEFT:
                case g.UP:
                    j = this.headers[(h - 1 + k) % k];
                    break;
                case g.SPACE:
                case g.ENTER:
                    this._eventHandler(f);
                    break;
                case g.HOME:
                    j = this.headers[0];
                    break;
                case g.END:
                    j = this.headers[k - 1]
            }
            j && (d(f.target).attr("tabIndex", -1), d(j).attr("tabIndex", 0), j.focus(), f.preventDefault())
        }
    }, _panelKeyDown: function (f) {
        f.keyCode === d.ui.keyCode.UP && f.ctrlKey && d(f.currentTarget).prev().focus()
    }, refresh: function () {
        var f = this.options;
        this._processPanels(), f.active === !1 && f.collapsible === !0 || !this.headers.length ? (f.active = !1, this.active = d()) : f.active === !1 ? this._activate(0) : this.active.length && !d.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (f.active = !1, this.active = d()) : this._activate(Math.max(0, f.active - 1)) : f.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
    }, _processPanels: function () {
        this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
    }, _refresh: function () {
        var f, j = this.options, g = j.heightStyle, h = this.element.parent(), e = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++a);
        this.active = this._findActive(j.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function (k) {
            var l = d(this), q = l.attr("id"), m = l.next(), p = m.attr("id");
            q || (q = e + "-header-" + k, l.attr("id", q)), p || (p = e + "-panel-" + k, m.attr("id", p)), l.attr("aria-controls", p), m.attr("aria-labelledby", q)
        }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({"aria-selected": "false", tabIndex: -1}).next().attr({"aria-expanded": "false", "aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({"aria-selected": "true", tabIndex: 0}).next().attr({"aria-expanded": "true", "aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(j.event), "fill" === g ? (f = h.height(), this.element.siblings(":visible").each(function () {
            var k = d(this), l = k.css("position");
            "absolute" !== l && "fixed" !== l && (f -= k.outerHeight(!0))
        }), this.headers.each(function () {
            f -= d(this).outerHeight(!0)
        }), this.headers.next().each(function () {
            d(this).height(Math.max(0, f - d(this).innerHeight() + d(this).height()))
        }).css("overflow", "auto")) : "auto" === g && (f = 0, this.headers.next().each(function () {
            f = Math.max(f, d(this).css("height", "").height())
        }).height(f))
    }, _activate: function (f) {
        var g = this._findActive(f)[0];
        g !== this.active[0] && (g = g || this.active[0], this._eventHandler({target: g, currentTarget: g, preventDefault: d.noop}))
    }, _findActive: function (f) {
        return"number" == typeof f ? this.headers.eq(f) : d()
    }, _setupEvents: function (f) {
        var g = {keydown: "_keydown"};
        f && d.each(f.split(" "), function (j, h) {
            g[h] = "_eventHandler"
        }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, g), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
    }, _eventHandler: function (g) {
        var k = this.options, u = this.active, p = d(g.currentTarget), q = p[0] === u[0], f = q && k.collapsible, t = f ? d() : p.next(), j = u.next(), m = {oldHeader: u, oldPanel: j, newHeader: f ? d() : p, newPanel: t};
        g.preventDefault(), q && !k.collapsible || this._trigger("beforeActivate", g, m) === !1 || (k.active = f ? !1 : this.headers.index(p), this.active = q ? d() : p, this._toggle(m), u.removeClass("ui-accordion-header-active ui-state-active"), k.icons && u.children(".ui-accordion-header-icon").removeClass(k.icons.activeHeader).addClass(k.icons.header), q || (p.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), k.icons && p.children(".ui-accordion-header-icon").removeClass(k.icons.header).addClass(k.icons.activeHeader), p.next().addClass("ui-accordion-content-active")))
    }, _toggle: function (f) {
        var g = f.newPanel, h = this.prevShow.length ? this.prevShow : f.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = g, this.prevHide = h, this.options.animate ? this._animate(g, h, f) : (h.hide(), g.show(), this._toggleComplete(f)), h.attr({"aria-expanded": "false", "aria-hidden": "true"}), h.prev().attr("aria-selected", "false"), g.length && h.length ? h.prev().attr("tabIndex", -1) : g.length && this.headers.filter(function () {
            return 0 === d(this).attr("tabIndex")
        }).attr("tabIndex", -1), g.attr({"aria-expanded": "true", "aria-hidden": "false"}).prev().attr({"aria-selected": "true", tabIndex: 0})
    }, _animate: function (A, k, s) {
        var v, f, z, m = this, q = 0, g = A.length && (!k.length || A.index() < k.index()), B = this.options.animate || {}, j = g && B.down || B, w = function () {
            m._toggleComplete(s)
        };
        return"number" == typeof j && (z = j), "string" == typeof j && (f = j), f = f || j.easing || B.easing, z = z || j.duration || B.duration, k.length ? A.length ? (v = A.show().outerHeight(), k.animate(b, {duration: z, easing: f, step: function (l, h) {
            h.now = Math.round(l)
        }}), A.hide().animate(c, {duration: z, easing: f, complete: w, step: function (h, e) {
            e.now = Math.round(h), "height" !== e.prop ? q += e.now : "content" !== m.options.heightStyle && (e.now = Math.round(v - k.outerHeight() - q), q = 0)
        }}), undefined) : k.animate(b, z, f, w) : A.animate(c, z, f, w)
    }, _toggleComplete: function (g) {
        var f = g.oldPanel;
        f.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), f.length && (f.parent()[0].className = f.parent()[0].className), this._trigger("activate", null, g)
    }})
}(jQuery), function (b) {
    var a = 0;
    b.widget("ui.autocomplete", {version: "1.10.3", defaultElement: "<input>", options: {appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: {my: "left top", at: "left bottom", collision: "none"}, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null}, pending: 0, _create: function () {
        var d, f, j, g = this.element[0].nodeName.toLowerCase(), h = "textarea" === g, c = "input" === g;
        this.isMultiLine = h ? !0 : c ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[h || c ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {keydown: function (e) {
            if (this.element.prop("readOnly")) {
                return d = !0, j = !0, f = !0, undefined
            }
            d = !1, j = !1, f = !1;
            var k = b.ui.keyCode;
            switch (e.keyCode) {
                case k.PAGE_UP:
                    d = !0, this._move("previousPage", e);
                    break;
                case k.PAGE_DOWN:
                    d = !0, this._move("nextPage", e);
                    break;
                case k.UP:
                    d = !0, this._keyEvent("previous", e);
                    break;
                case k.DOWN:
                    d = !0, this._keyEvent("next", e);
                    break;
                case k.ENTER:
                case k.NUMPAD_ENTER:
                    this.menu.active && (d = !0, e.preventDefault(), this.menu.select(e));
                    break;
                case k.TAB:
                    this.menu.active && this.menu.select(e);
                    break;
                case k.ESCAPE:
                    this.menu.element.is(":visible") && (this._value(this.term), this.close(e), e.preventDefault());
                    break;
                default:
                    f = !0, this._searchTimeout(e)
            }
        }, keypress: function (k) {
            if (d) {
                return d = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && k.preventDefault(), undefined
            }
            if (!f) {
                var e = b.ui.keyCode;
                switch (k.keyCode) {
                    case e.PAGE_UP:
                        this._move("previousPage", k);
                        break;
                    case e.PAGE_DOWN:
                        this._move("nextPage", k);
                        break;
                    case e.UP:
                        this._keyEvent("previous", k);
                        break;
                    case e.DOWN:
                        this._keyEvent("next", k)
                }
            }
        }, input: function (e) {
            return j ? (j = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined)
        }, focus: function () {
            this.selectedItem = null, this.previous = this._value()
        }, blur: function (e) {
            return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined)
        }}), this._initSource(), this.menu = b("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().data("ui-menu"), this._on(this.menu.element, {mousedown: function (k) {
            k.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                delete this.cancelBlur
            });
            var l = this.menu.element[0];
            b(k.target).closest(".ui-menu-item").length || this._delay(function () {
                var m = this;
                this.document.one("mousedown", function (e) {
                    e.target === m.element[0] || e.target === l || b.contains(l, e.target) || m.close()
                })
            })
        }, menufocus: function (k, l) {
            if (this.isNewMenu && (this.isNewMenu = !1, k.originalEvent && /^mouse/.test(k.originalEvent.type))) {
                return this.menu.blur(), this.document.one("mousemove", function () {
                    b(k.target).trigger(k.originalEvent)
                }), undefined
            }
            var m = l.item.data("ui-autocomplete-item");
            !1 !== this._trigger("focus", k, {item: m}) ? k.originalEvent && /^key/.test(k.originalEvent.type) && this._value(m.value) : this.liveRegion.text(m.value)
        }, menuselect: function (n, k) {
            var l = k.item.data("ui-autocomplete-item"), m = this.previous;
            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = m, this._delay(function () {
                this.previous = m, this.selectedItem = l
            })), !1 !== this._trigger("select", n, {item: l}) && this._value(l.value), this.term = this._value(), this.close(n), this.selectedItem = l
        }}), this.liveRegion = b("<span>", {role: "status", "aria-live": "polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {beforeunload: function () {
            this.element.removeAttr("autocomplete")
        }})
    }, _destroy: function () {
        clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
    }, _setOption: function (d, c) {
        this._super(d, c), "source" === d && this._initSource(), "appendTo" === d && this.menu.element.appendTo(this._appendTo()), "disabled" === d && c && this.xhr && this.xhr.abort()
    }, _appendTo: function () {
        var c = this.options.appendTo;
        return c && (c = c.jquery || c.nodeType ? b(c) : this.document.find(c).eq(0)), c || (c = this.element.closest(".ui-front")), c.length || (c = this.document[0].body), c
    }, _initSource: function () {
        var c, d, f = this;
        b.isArray(this.options.source) ? (c = this.options.source, this.source = function (e, g) {
            g(b.ui.autocomplete.filter(c, e.term))
        }) : "string" == typeof this.options.source ? (d = this.options.source, this.source = function (g, h) {
            f.xhr && f.xhr.abort(), f.xhr = b.ajax({url: d, data: g, dataType: "json", success: function (e) {
                h(e)
            }, error: function () {
                h([])
            }})
        }) : this.source = this.options.source
    }, _searchTimeout: function (c) {
        clearTimeout(this.searching), this.searching = this._delay(function () {
            this.term !== this._value() && (this.selectedItem = null, this.search(null, c))
        }, this.options.delay)
    }, search: function (d, c) {
        return d = null != d ? d : this._value(), this.term = this._value(), d.length < this.options.minLength ? this.close(c) : this._trigger("search", c) !== !1 ? this._search(d) : undefined
    }, _search: function (c) {
        this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: c}, this._response())
    }, _response: function () {
        var d = this, c = ++a;
        return function (e) {
            c === a && d.__response(e), d.pending--, d.pending || d.element.removeClass("ui-autocomplete-loading")
        }
    }, __response: function (c) {
        c && (c = this._normalize(c)), this._trigger("response", null, {content: c}), !this.options.disabled && c && c.length && !this.cancelSearch ? (this._suggest(c), this._trigger("open")) : this._close()
    }, close: function (c) {
        this.cancelSearch = !0, this._close(c)
    }, _close: function (c) {
        this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", c))
    }, _change: function (c) {
        this.previous !== this._value() && this._trigger("change", c, {item: this.selectedItem})
    }, _normalize: function (c) {
        return c.length && c[0].label && c[0].value ? c : b.map(c, function (d) {
            return"string" == typeof d ? {label: d, value: d} : b.extend({label: d.label || d.value, value: d.value || d.label}, d)
        })
    }, _suggest: function (c) {
        var d = this.menu.element.empty();
        this._renderMenu(d, c), this.isNewMenu = !0, this.menu.refresh(), d.show(), this._resizeMenu(), d.position(b.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
    }, _resizeMenu: function () {
        var c = this.menu.element;
        c.outerWidth(Math.max(c.width("").outerWidth() + 1, this.element.outerWidth()))
    }, _renderMenu: function (c, d) {
        var f = this;
        b.each(d, function (g, e) {
            f._renderItemData(c, e)
        })
    }, _renderItemData: function (d, c) {
        return this._renderItem(d, c).data("ui-autocomplete-item", c)
    }, _renderItem: function (c, d) {
        return b("<li>").append(b("<a>").text(d.label)).appendTo(c)
    }, _move: function (d, c) {
        return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(d) || this.menu.isLastItem() && /^next/.test(d) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[d](c), undefined) : (this.search(null, c), undefined)
    }, widget: function () {
        return this.menu.element
    }, _value: function () {
        return this.valueMethod.apply(this.element, arguments)
    }, _keyEvent: function (d, c) {
        (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(d, c), c.preventDefault())
    }}), b.extend(b.ui.autocomplete, {escapeRegex: function (c) {
        return c.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }, filter: function (c, d) {
        var f = RegExp(b.ui.autocomplete.escapeRegex(d), "i");
        return b.grep(c, function (e) {
            return f.test(e.label || e.value || e)
        })
    }}), b.widget("ui.autocomplete", b.ui.autocomplete, {options: {messages: {noResults: "No search results.", results: function (c) {
        return c + (c > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
    }}}, __response: function (d) {
        var c;
        this._superApply(arguments), this.options.disabled || this.cancelSearch || (c = d && d.length ? this.options.messages.results(d.length) : this.options.messages.noResults, this.liveRegion.text(c))
    }})
}(jQuery), function (q) {
    var c, f, p, j, k = "ui-button ui-widget ui-state-default ui-corner-all", b = "ui-state-hover ui-state-active ", m = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", d = function () {
        var a = q(this);
        setTimeout(function () {
            a.find(":ui-button").button("refresh")
        }, 1)
    }, g = function (a) {
        var h = a.name, o = a.form, l = q([]);
        return h && (h = h.replace(/'/g, "\\'"), l = o ? q(o).find("[name='" + h + "']") : q("[name='" + h + "']", a.ownerDocument).filter(function () {
            return !this.form
        })), l
    };
    q.widget("ui.button", {version: "1.10.3", defaultElement: "<button>", options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}}, _create: function () {
        this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, d), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
        var e = this, n = this.options, h = "checkbox" === this.type || "radio" === this.type, o = h ? "" : "ui-state-active", l = "ui-state-focus";
        null === n.label && (n.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(k).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
            n.disabled || this === c && q(this).addClass("ui-state-active")
        }).bind("mouseleave" + this.eventNamespace, function () {
            n.disabled || q(this).removeClass(o)
        }).bind("click" + this.eventNamespace, function (a) {
            n.disabled && (a.preventDefault(), a.stopImmediatePropagation())
        }), this.element.bind("focus" + this.eventNamespace, function () {
            e.buttonElement.addClass(l)
        }).bind("blur" + this.eventNamespace, function () {
            e.buttonElement.removeClass(l)
        }), h && (this.element.bind("change" + this.eventNamespace, function () {
            j || e.refresh()
        }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (a) {
            n.disabled || (j = !1, f = a.pageX, p = a.pageY)
        }).bind("mouseup" + this.eventNamespace, function (a) {
            n.disabled || (f !== a.pageX || p !== a.pageY) && (j = !0)
        })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
            return n.disabled || j ? !1 : undefined
        }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
            if (n.disabled || j) {
                return !1
            }
            q(this).addClass("ui-state-active"), e.buttonElement.attr("aria-pressed", "true");
            var a = e.element[0];
            g(a).not(a).map(function () {
                return q(this).button("widget")[0]
            }).removeClass("ui-state-active").attr("aria-pressed", "false")
        }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
            return n.disabled ? !1 : (q(this).addClass("ui-state-active"), c = this, e.document.one("mouseup", function () {
                c = null
            }), undefined)
        }).bind("mouseup" + this.eventNamespace, function () {
            return n.disabled ? !1 : (q(this).removeClass("ui-state-active"), undefined)
        }).bind("keydown" + this.eventNamespace, function (a) {
            return n.disabled ? !1 : ((a.keyCode === q.ui.keyCode.SPACE || a.keyCode === q.ui.keyCode.ENTER) && q(this).addClass("ui-state-active"), undefined)
        }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
            q(this).removeClass("ui-state-active")
        }), this.buttonElement.is("a") && this.buttonElement.keyup(function (a) {
            a.keyCode === q.ui.keyCode.SPACE && q(this).click()
        })), this._setOption("disabled", n.disabled), this._resetButton()
    }, _determineButtonType: function () {
        var l, a, h;
        this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (l = this.element.parents().last(), a = "label[for='" + this.element.attr("id") + "']", this.buttonElement = l.find(a), this.buttonElement.length || (l = l.length ? l.siblings() : this.element.siblings(), this.buttonElement = l.filter(a), this.buttonElement.length || (this.buttonElement = l.find(a))), this.element.addClass("ui-helper-hidden-accessible"), h = this.element.is(":checked"), h && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", h)) : this.buttonElement = this.element
    }, widget: function () {
        return this.buttonElement
    }, _destroy: function () {
        this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(k + " " + b + " " + m).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
    }, _setOption: function (h, a) {
        return this._super(h, a), "disabled" === h ? (a ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), undefined) : (this._resetButton(), undefined)
    }, refresh: function () {
        var a = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
        a !== this.options.disabled && this._setOption("disabled", a), "radio" === this.type ? g(this.element[0]).each(function () {
            q(this).is(":checked") ? q(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : q(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
        }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
    }, _resetButton: function () {
        if ("input" === this.type) {
            return this.options.label && this.element.val(this.options.label), undefined
        }
        var a = this.buttonElement.removeClass(m), h = q("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(), t = this.options.icons, l = t.primary && t.secondary, r = [];
        t.primary || t.secondary ? (this.options.text && r.push("ui-button-text-icon" + (l ? "s" : t.primary ? "-primary" : "-secondary")), t.primary && a.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'></span>"), t.secondary && a.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'></span>"), this.options.text || (r.push(l ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || a.attr("title", q.trim(h)))) : r.push("ui-button-text-only"), a.addClass(r.join(" "))
    }}), q.widget("ui.buttonset", {version: "1.10.3", options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"}, _create: function () {
        this.element.addClass("ui-buttonset")
    }, _init: function () {
        this.refresh()
    }, _setOption: function (h, a) {
        "disabled" === h && this.buttons.button("option", h, a), this._super(h, a)
    }, refresh: function () {
        var a = "rtl" === this.element.css("direction");
        this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
            return q(this).button("widget")[0]
        }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(a ? "ui-corner-left" : "ui-corner-right").end().end()
    }, _destroy: function () {
        this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
            return q(this).button("widget")[0]
        }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
    }})
}(jQuery), function (j, c) {
    function d() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}, this._defaults = {showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1}, j.extend(this._defaults, this.regional[""]), this.dpDiv = h(j("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function h(a) {
        var k = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return a.delegate(k, "mouseout", function () {
            j(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && j(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && j(this).removeClass("ui-datepicker-next-hover")
        }).delegate(k, "mouseover", function () {
            j.datepicker._isDisabledDatepicker(g.inline ? a.parent()[0] : g.input[0]) || (j(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), j(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && j(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && j(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function f(a, k) {
        j.extend(a, k);
        for (var l in k) {
            null == k[l] && (a[l] = k[l])
        }
        return a
    }

    j.extend(j.ui, {datepicker: {version: "1.10.3"}});
    var g, b = "datepicker";
    j.extend(d.prototype, {markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () {
        return this.dpDiv
    }, setDefaults: function (a) {
        return f(this._defaults, a || {}), this
    }, _attachDatepicker: function (a, k) {
        var p, l, m;
        p = a.nodeName.toLowerCase(), l = "div" === p || "span" === p, a.id || (this.uuid += 1, a.id = "dp" + this.uuid), m = this._newInst(j(a), l), m.settings = j.extend({}, k || {}), "input" === p ? this._connectDatepicker(a, m) : l && this._inlineDatepicker(a, m)
    }, _newInst: function (a, k) {
        var l = a[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
        return{id: l, input: a, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: k, dpDiv: k ? h(j("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv}
    }, _connectDatepicker: function (a, k) {
        var l = j(a);
        k.append = j([]), k.trigger = j([]), l.hasClass(this.markerClassName) || (this._attachments(l, k), l.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(k), j.data(a, b, k), k.settings.disabled && this._disableDatepicker(a))
    }, _attachments: function (l, m) {
        var u, p, q, k = this._get(m, "appendText"), t = this._get(m, "isRTL");
        m.append && m.append.remove(), k && (m.append = j("<span class='" + this._appendClass + "'>" + k + "</span>"), l[t ? "before" : "after"](m.append)), l.unbind("focus", this._showDatepicker), m.trigger && m.trigger.remove(), u = this._get(m, "showOn"), ("focus" === u || "both" === u) && l.focus(this._showDatepicker), ("button" === u || "both" === u) && (p = this._get(m, "buttonText"), q = this._get(m, "buttonImage"), m.trigger = j(this._get(m, "buttonImageOnly") ? j("<img/>").addClass(this._triggerClass).attr({src: q, alt: p, title: p}) : j("<button type='button'></button>").addClass(this._triggerClass).html(q ? j("<img/>").attr({src: q, alt: p, title: p}) : p)), l[t ? "before" : "after"](m.trigger), m.trigger.click(function () {
            return j.datepicker._datepickerShowing && j.datepicker._lastInput === l[0] ? j.datepicker._hideDatepicker() : j.datepicker._datepickerShowing && j.datepicker._lastInput !== l[0] ? (j.datepicker._hideDatepicker(), j.datepicker._showDatepicker(l[0])) : j.datepicker._showDatepicker(l[0]), !1
        }))
    }, _autoSize: function (u) {
        if (this._get(u, "autoSize") && !u.inline) {
            var l, m, r, p, q = new Date(2009, 11, 20), k = this._get(u, "dateFormat");
            k.match(/[DM]/) && (l = function (a) {
                for (m = 0, r = 0, p = 0; a.length > p; p++) {
                    a[p].length > m && (m = a[p].length, r = p)
                }
                return r
            }, q.setMonth(l(this._get(u, k.match(/MM/) ? "monthNames" : "monthNamesShort"))), q.setDate(l(this._get(u, k.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - q.getDay())), u.input.attr("size", this._formatDate(u, q).length)
        }
    }, _inlineDatepicker: function (a, k) {
        var l = j(a);
        l.hasClass(this.markerClassName) || (l.addClass(this.markerClassName).append(k.dpDiv), j.data(a, b, k), this._setDate(k, this._getDefaultDate(k), !0), this._updateDatepicker(k), this._updateAlternate(k), k.settings.disabled && this._disableDatepicker(a), k.dpDiv.css("display", "block"))
    }, _dialogDatepicker: function (m, q, A, v, z) {
        var n, t, a, B, k, w = this._dialogInst;
        return w || (this.uuid += 1, n = "dp" + this.uuid, this._dialogInput = j("<input type='text' id='" + n + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), j("body").append(this._dialogInput), w = this._dialogInst = this._newInst(this._dialogInput, !1), w.settings = {}, j.data(this._dialogInput[0], b, w)), f(w.settings, v || {}), q = q && q.constructor === Date ? this._formatDate(w, q) : q, this._dialogInput.val(q), this._pos = z ? z.length ? z : [z.pageX, z.pageY] : null, this._pos || (t = document.documentElement.clientWidth, a = document.documentElement.clientHeight, B = document.documentElement.scrollLeft || document.body.scrollLeft, k = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [t / 2 - 100 + B, a / 2 - 150 + k]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), w.settings.onSelect = A, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), j.blockUI && j.blockUI(this.dpDiv), j.data(this._dialogInput[0], b, w), this
    }, _destroyDatepicker: function (a) {
        var k, m = j(a), l = j.data(a, b);
        m.hasClass(this.markerClassName) && (k = a.nodeName.toLowerCase(), j.removeData(a, b), "input" === k ? (l.append.remove(), l.trigger.remove(), m.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === k || "span" === k) && m.removeClass(this.markerClassName).empty())
    }, _enableDatepicker: function (a) {
        var k, p, l = j(a), m = j.data(a, b);
        l.hasClass(this.markerClassName) && (k = a.nodeName.toLowerCase(), "input" === k ? (a.disabled = !1, m.trigger.filter("button").each(function () {
            this.disabled = !1
        }).end().filter("img").css({opacity: "1.0", cursor: ""})) : ("div" === k || "span" === k) && (p = l.children("." + this._inlineClass), p.children().removeClass("ui-state-disabled"), p.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = j.map(this._disabledInputs, function (e) {
            return e === a ? null : e
        }))
    }, _disableDatepicker: function (a) {
        var k, p, l = j(a), m = j.data(a, b);
        l.hasClass(this.markerClassName) && (k = a.nodeName.toLowerCase(), "input" === k ? (a.disabled = !0, m.trigger.filter("button").each(function () {
            this.disabled = !0
        }).end().filter("img").css({opacity: "0.5", cursor: "default"})) : ("div" === k || "span" === k) && (p = l.children("." + this._inlineClass), p.children().addClass("ui-state-disabled"), p.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = j.map(this._disabledInputs, function (e) {
            return e === a ? null : e
        }), this._disabledInputs[this._disabledInputs.length] = a)
    }, _isDisabledDatepicker: function (k) {
        if (!k) {
            return !1
        }
        for (var a = 0; this._disabledInputs.length > a; a++) {
            if (this._disabledInputs[a] === k) {
                return !0
            }
        }
        return !1
    }, _getInst: function (a) {
        try {
            return j.data(a, b)
        } catch (k) {
            throw"Missing instance data for this datepicker"
        }
    }, _optionDatepicker: function (n, u, q) {
        var e, t, m, p, k = this._getInst(n);
        return 2 === arguments.length && "string" == typeof u ? "defaults" === u ? j.extend({}, j.datepicker._defaults) : k ? "all" === u ? j.extend({}, k.settings) : this._get(k, u) : null : (e = u || {}, "string" == typeof u && (e = {}, e[u] = q), k && (this._curInst === k && this._hideDatepicker(), t = this._getDateDatepicker(n, !0), m = this._getMinMaxDate(k, "min"), p = this._getMinMaxDate(k, "max"), f(k.settings, e), null !== m && e.dateFormat !== c && e.minDate === c && (k.settings.minDate = this._formatDate(k, m)), null !== p && e.dateFormat !== c && e.maxDate === c && (k.settings.maxDate = this._formatDate(k, p)), "disabled" in e && (e.disabled ? this._disableDatepicker(n) : this._enableDatepicker(n)), this._attachments(j(n), k), this._autoSize(k), this._setDate(k, t), this._updateAlternate(k), this._updateDatepicker(k)), c)
    }, _changeDatepicker: function (l, a, k) {
        this._optionDatepicker(l, a, k)
    }, _refreshDatepicker: function (k) {
        var a = this._getInst(k);
        a && this._updateDatepicker(a)
    }, _setDateDatepicker: function (l, a) {
        var k = this._getInst(l);
        k && (this._setDate(k, a), this._updateDatepicker(k), this._updateAlternate(k))
    }, _getDateDatepicker: function (l, a) {
        var k = this._getInst(l);
        return k && !k.inline && this._setDateFromField(k, a), k ? this._getDate(k) : null
    }, _doKeyDown: function (l) {
        var m, u, p, q = j.datepicker._getInst(l.target), k = !0, t = q.dpDiv.is(".ui-datepicker-rtl");
        if (q._keyEvent = !0, j.datepicker._datepickerShowing) {
            switch (l.keyCode) {
                case 9:
                    j.datepicker._hideDatepicker(), k = !1;
                    break;
                case 13:
                    return p = j("td." + j.datepicker._dayOverClass + ":not(." + j.datepicker._currentClass + ")", q.dpDiv), p[0] && j.datepicker._selectDay(l.target, q.selectedMonth, q.selectedYear, p[0]), m = j.datepicker._get(q, "onSelect"), m ? (u = j.datepicker._formatDate(q), m.apply(q.input ? q.input[0] : null, [u, q])) : j.datepicker._hideDatepicker(), !1;
                case 27:
                    j.datepicker._hideDatepicker();
                    break;
                case 33:
                    j.datepicker._adjustDate(l.target, l.ctrlKey ? -j.datepicker._get(q, "stepBigMonths") : -j.datepicker._get(q, "stepMonths"), "M");
                    break;
                case 34:
                    j.datepicker._adjustDate(l.target, l.ctrlKey ? +j.datepicker._get(q, "stepBigMonths") : +j.datepicker._get(q, "stepMonths"), "M");
                    break;
                case 35:
                    (l.ctrlKey || l.metaKey) && j.datepicker._clearDate(l.target), k = l.ctrlKey || l.metaKey;
                    break;
                case 36:
                    (l.ctrlKey || l.metaKey) && j.datepicker._gotoToday(l.target), k = l.ctrlKey || l.metaKey;
                    break;
                case 37:
                    (l.ctrlKey || l.metaKey) && j.datepicker._adjustDate(l.target, t ? 1 : -1, "D"), k = l.ctrlKey || l.metaKey, l.originalEvent.altKey && j.datepicker._adjustDate(l.target, l.ctrlKey ? -j.datepicker._get(q, "stepBigMonths") : -j.datepicker._get(q, "stepMonths"), "M");
                    break;
                case 38:
                    (l.ctrlKey || l.metaKey) && j.datepicker._adjustDate(l.target, -7, "D"), k = l.ctrlKey || l.metaKey;
                    break;
                case 39:
                    (l.ctrlKey || l.metaKey) && j.datepicker._adjustDate(l.target, t ? -1 : 1, "D"), k = l.ctrlKey || l.metaKey, l.originalEvent.altKey && j.datepicker._adjustDate(l.target, l.ctrlKey ? +j.datepicker._get(q, "stepBigMonths") : +j.datepicker._get(q, "stepMonths"), "M");
                    break;
                case 40:
                    (l.ctrlKey || l.metaKey) && j.datepicker._adjustDate(l.target, 7, "D"), k = l.ctrlKey || l.metaKey;
                    break;
                default:
                    k = !1
            }
        } else {
            36 === l.keyCode && l.ctrlKey ? j.datepicker._showDatepicker(this) : k = !1
        }
        k && (l.preventDefault(), l.stopPropagation())
    }, _doKeyPress: function (a) {
        var l, e, k = j.datepicker._getInst(a.target);
        return j.datepicker._get(k, "constrainInput") ? (l = j.datepicker._possibleChars(j.datepicker._get(k, "dateFormat")), e = String.fromCharCode(null == a.charCode ? a.keyCode : a.charCode), a.ctrlKey || a.metaKey || " " > e || !l || l.indexOf(e) > -1) : c
    }, _doKeyUp: function (a) {
        var k, m = j.datepicker._getInst(a.target);
        if (m.input.val() !== m.lastVal) {
            try {
                k = j.datepicker.parseDate(j.datepicker._get(m, "dateFormat"), m.input ? m.input.val() : null, j.datepicker._getFormatConfig(m)), k && (j.datepicker._setDateFromField(m), j.datepicker._updateAlternate(m), j.datepicker._updateDatepicker(m))
            } catch (l) {
            }
        }
        return !0
    }, _showDatepicker: function (m) {
        if (m = m.target || m, "input" !== m.nodeName.toLowerCase() && (m = j("input", m.parentNode)[0]), !j.datepicker._isDisabledDatepicker(m) && j.datepicker._lastInput !== m) {
            var p, v, t, k, u, n, q;
            p = j.datepicker._getInst(m), j.datepicker._curInst && j.datepicker._curInst !== p && (j.datepicker._curInst.dpDiv.stop(!0, !0), p && j.datepicker._datepickerShowing && j.datepicker._hideDatepicker(j.datepicker._curInst.input[0])), v = j.datepicker._get(p, "beforeShow"), t = v ? v.apply(m, [m, p]) : {}, t !== !1 && (f(p.settings, t), p.lastVal = null, j.datepicker._lastInput = m, j.datepicker._setDateFromField(p), j.datepicker._inDialog && (m.value = ""), j.datepicker._pos || (j.datepicker._pos = j.datepicker._findPos(m), j.datepicker._pos[1] += m.offsetHeight), k = !1, j(m).parents().each(function () {
                return k |= "fixed" === j(this).css("position"), !k
            }), u = {left: j.datepicker._pos[0], top: j.datepicker._pos[1]}, j.datepicker._pos = null, p.dpDiv.empty(), p.dpDiv.css({position: "absolute", display: "block", top: "-1000px"}), j.datepicker._updateDatepicker(p), u = j.datepicker._checkOffset(p, u, k), p.dpDiv.css({position: j.datepicker._inDialog && j.blockUI ? "static" : k ? "fixed" : "absolute", display: "none", left: u.left + "px", top: u.top + "px"}), p.inline || (n = j.datepicker._get(p, "showAnim"), q = j.datepicker._get(p, "duration"), p.dpDiv.zIndex(j(m).zIndex() + 1), j.datepicker._datepickerShowing = !0, j.effects && j.effects.effect[n] ? p.dpDiv.show(n, j.datepicker._get(p, "showOptions"), q) : p.dpDiv[n || "show"](n ? q : null), j.datepicker._shouldFocusInput(p) && p.input.focus(), j.datepicker._curInst = p))
        }
    }, _updateDatepicker: function (l) {
        this.maxRows = 4, g = l, l.dpDiv.empty().append(this._generateHTML(l)), this._attachHandlers(l), l.dpDiv.find("." + this._dayOverClass + " a").mouseover();
        var m, p = this._getNumberOfMonths(l), o = p[1], k = 17;
        l.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && l.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", k * o + "em"), l.dpDiv[(1 !== p[0] || 1 !== p[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), l.dpDiv[(this._get(l, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), l === j.datepicker._curInst && j.datepicker._datepickerShowing && j.datepicker._shouldFocusInput(l) && l.input.focus(), l.yearshtml && (m = l.yearshtml, setTimeout(function () {
            m === l.yearshtml && l.yearshtml && l.dpDiv.find("select.ui-datepicker-year:first").replaceWith(l.yearshtml), m = l.yearshtml = null
        }, 0))
    }, _shouldFocusInput: function (a) {
        return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
    }, _checkOffset: function (m, q, z) {
        var u = m.dpDiv.outerWidth(), v = m.dpDiv.outerHeight(), k = m.input ? m.input.outerWidth() : 0, w = m.input ? m.input.outerHeight() : 0, p = document.documentElement.clientWidth + (z ? 0 : j(document).scrollLeft()), t = document.documentElement.clientHeight + (z ? 0 : j(document).scrollTop());
        return q.left -= this._get(m, "isRTL") ? u - k : 0, q.left -= z && q.left === m.input.offset().left ? j(document).scrollLeft() : 0, q.top -= z && q.top === m.input.offset().top + w ? j(document).scrollTop() : 0, q.left -= Math.min(q.left, q.left + u > p && p > u ? Math.abs(q.left + u - p) : 0), q.top -= Math.min(q.top, q.top + v > t && t > v ? Math.abs(v + w) : 0), q
    }, _findPos: function (a) {
        for (var k, m = this._getInst(a), l = this._get(m, "isRTL"); a && ("hidden" === a.type || 1 !== a.nodeType || j.expr.filters.hidden(a));) {
            a = a[l ? "previousSibling" : "nextSibling"]
        }
        return k = j(a).offset(), [k.left, k.top]
    }, _hideDatepicker: function (a) {
        var k, q, l, m, p = this._curInst;
        !p || a && p !== j.data(a, b) || this._datepickerShowing && (k = this._get(p, "showAnim"), q = this._get(p, "duration"), l = function () {
            j.datepicker._tidyDialog(p)
        }, j.effects && (j.effects.effect[k] || j.effects[k]) ? p.dpDiv.hide(k, j.datepicker._get(p, "showOptions"), q, l) : p.dpDiv["slideDown" === k ? "slideUp" : "fadeIn" === k ? "fadeOut" : "hide"](k ? q : null, l), k || l(), this._datepickerShowing = !1, m = this._get(p, "onClose"), m && m.apply(p.input ? p.input[0] : null, [p.input ? p.input.val() : "", p]), this._lastInput = null, this._inDialog && (this._dialogInput.css({position: "absolute", left: "0", top: "-100px"}), j.blockUI && (j.unblockUI(), j("body").append(this.dpDiv))), this._inDialog = !1)
    }, _tidyDialog: function (a) {
        a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    }, _checkExternalClick: function (a) {
        if (j.datepicker._curInst) {
            var k = j(a.target), l = j.datepicker._getInst(k[0]);
            (k[0].id !== j.datepicker._mainDivId && 0 === k.parents("#" + j.datepicker._mainDivId).length && !k.hasClass(j.datepicker.markerClassName) && !k.closest("." + j.datepicker._triggerClass).length && j.datepicker._datepickerShowing && (!j.datepicker._inDialog || !j.blockUI) || k.hasClass(j.datepicker.markerClassName) && j.datepicker._curInst !== l) && j.datepicker._hideDatepicker()
        }
    }, _adjustDate: function (a, k, p) {
        var l = j(a), m = this._getInst(l[0]);
        this._isDisabledDatepicker(l[0]) || (this._adjustInstDate(m, k + ("M" === p ? this._get(m, "showCurrentAtPos") : 0), p), this._updateDatepicker(m))
    }, _gotoToday: function (a) {
        var k, m = j(a), l = this._getInst(m[0]);
        this._get(l, "gotoCurrent") && l.currentDay ? (l.selectedDay = l.currentDay, l.drawMonth = l.selectedMonth = l.currentMonth, l.drawYear = l.selectedYear = l.currentYear) : (k = new Date, l.selectedDay = k.getDate(), l.drawMonth = l.selectedMonth = k.getMonth(), l.drawYear = l.selectedYear = k.getFullYear()), this._notifyChange(l), this._adjustDate(m)
    }, _selectMonthYear: function (a, k, p) {
        var l = j(a), m = this._getInst(l[0]);
        m["selected" + ("M" === p ? "Month" : "Year")] = m["draw" + ("M" === p ? "Month" : "Year")] = parseInt(k.options[k.selectedIndex].value, 10), this._notifyChange(m), this._adjustDate(l)
    }, _selectDay: function (l, m, r, p) {
        var q, k = j(l);
        j(p).hasClass(this._unselectableClass) || this._isDisabledDatepicker(k[0]) || (q = this._getInst(k[0]), q.selectedDay = q.currentDay = j("a", p).html(), q.selectedMonth = q.currentMonth = m, q.selectedYear = q.currentYear = r, this._selectDate(l, this._formatDate(q, q.currentDay, q.currentMonth, q.currentYear)))
    }, _clearDate: function (a) {
        var k = j(a);
        this._selectDate(k, "")
    }, _selectDate: function (a, k) {
        var p, l = j(a), m = this._getInst(l[0]);
        k = null != k ? k : this._formatDate(m), m.input && m.input.val(k), this._updateAlternate(m), p = this._get(m, "onSelect"), p ? p.apply(m.input ? m.input[0] : null, [k, m]) : m.input && m.input.trigger("change"), m.inline ? this._updateDatepicker(m) : (this._hideDatepicker(), this._lastInput = m.input[0], "object" != typeof m.input[0] && m.input.focus(), this._lastInput = null)
    }, _updateAlternate: function (a) {
        var k, p, l, m = this._get(a, "altField");
        m && (k = this._get(a, "altFormat") || this._get(a, "dateFormat"), p = this._getDate(a), l = this.formatDate(k, p, this._getFormatConfig(a)), j(m).each(function () {
            j(this).val(l)
        }))
    }, noWeekends: function (k) {
        var a = k.getDay();
        return[a > 0 && 6 > a, ""]
    }, iso8601Week: function (l) {
        var a, k = new Date(l.getTime());
        return k.setDate(k.getDate() + 4 - (k.getDay() || 7)), a = k.getTime(), k.setMonth(0), k.setDate(1), Math.floor(Math.round((a - k) / 86400000) / 7) + 1
    }, parseDate: function (G, O, K) {
        if (null == G || null == O) {
            throw"Invalid arguments"
        }
        if (O = "object" == typeof O ? "" + O : O + "", "" === O) {
            return null
        }
        var L, q, N, F, I = 0, z = (K ? K.shortYearCutoff : null) || this._defaults.shortYearCutoff, P = "string" != typeof z ? z : (new Date).getFullYear() % 100 + parseInt(z, 10), A = (K ? K.dayNamesShort : null) || this._defaults.dayNamesShort, M = (K ? K.dayNames : null) || this._defaults.dayNames, C = (K ? K.monthNamesShort : null) || this._defaults.monthNamesShort, E = (K ? K.monthNames : null) || this._defaults.monthNames, J = -1, Q = -1, e = -1, t = -1, T = !1, R = function (k) {
            var a = G.length > L + 1 && G.charAt(L + 1) === k;
            return a && L++, a
        }, H = function (p) {
            var a = R(p), k = "@" === p ? 14 : "!" === p ? 20 : "y" === p && a ? 4 : "o" === p ? 3 : 2, l = RegExp("^\\d{1," + k + "}"), m = O.substring(I).match(l);
            if (!m) {
                throw"Missing number at position " + I
            }
            return I += m[0].length, parseInt(m[0], 10)
        }, S = function (l, m, p) {
            var k = -1, s = j.map(R(l) ? p : m, function (n, a) {
                return[
                    [a, n]
                ]
            }).sort(function (n, a) {
                return -(n[1].length - a[1].length)
            });
            if (j.each(s, function (r, a) {
                var o = a[1];
                return O.substr(I, o.length).toLowerCase() === o.toLowerCase() ? (k = a[0], I += o.length, !1) : c
            }), -1 !== k) {
                return k + 1
            }
            throw"Unknown name at position " + I
        }, B = function () {
            if (O.charAt(I) !== G.charAt(L)) {
                throw"Unexpected literal at position " + I
            }
            I++
        };
        for (L = 0; G.length > L; L++) {
            if (T) {
                "'" !== G.charAt(L) || R("'") ? B() : T = !1
            } else {
                switch (G.charAt(L)) {
                    case"d":
                        e = H("d");
                        break;
                    case"D":
                        S("D", A, M);
                        break;
                    case"o":
                        t = H("o");
                        break;
                    case"m":
                        Q = H("m");
                        break;
                    case"M":
                        Q = S("M", C, E);
                        break;
                    case"y":
                        J = H("y");
                        break;
                    case"@":
                        F = new Date(H("@")), J = F.getFullYear(), Q = F.getMonth() + 1, e = F.getDate();
                        break;
                    case"!":
                        F = new Date((H("!") - this._ticksTo1970) / 10000), J = F.getFullYear(), Q = F.getMonth() + 1, e = F.getDate();
                        break;
                    case"'":
                        R("'") ? B() : T = !0;
                        break;
                    default:
                        B()
                }
            }
        }
        if (O.length > I && (N = O.substr(I), !/^\s+/.test(N))) {
            throw"Extra/unparsed characters found in date: " + N
        }
        if (-1 === J ? J = (new Date).getFullYear() : 100 > J && (J += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (P >= J ? 0 : -100)), t > -1) {
            for (Q = 1, e = t; ;) {
                if (q = this._getDaysInMonth(J, Q - 1), q >= e) {
                    break
                }
                Q++, e -= q
            }
        }
        if (F = this._daylightSavingAdjust(new Date(J, Q - 1, e)), F.getFullYear() !== J || F.getMonth() + 1 !== Q || F.getDate() !== e) {
            throw"Invalid date"
        }
        return F
    }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 10000000 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (E, q, w) {
        if (!q) {
            return""
        }
        var D, A = (w ? w.dayNamesShort : null) || this._defaults.dayNamesShort, B = (w ? w.dayNames : null) || this._defaults.dayNames, k = (w ? w.monthNamesShort : null) || this._defaults.monthNamesShort, C = (w ? w.monthNames : null) || this._defaults.monthNames, v = function (a) {
            var l = E.length > D + 1 && E.charAt(D + 1) === a;
            return l && D++, l
        }, z = function (o, a, l) {
            var n = "" + a;
            if (v(o)) {
                for (; l > n.length;) {
                    n = "0" + n
                }
            }
            return n
        }, m = function (o, a, l, n) {
            return v(o) ? n[a] : l[a]
        }, F = "", p = !1;
        if (q) {
            for (D = 0; E.length > D; D++) {
                if (p) {
                    "'" !== E.charAt(D) || v("'") ? F += E.charAt(D) : p = !1
                } else {
                    switch (E.charAt(D)) {
                        case"d":
                            F += z("d", q.getDate(), 2);
                            break;
                        case"D":
                            F += m("D", q.getDay(), A, B);
                            break;
                        case"o":
                            F += z("o", Math.round((new Date(q.getFullYear(), q.getMonth(), q.getDate()).getTime() - new Date(q.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                            break;
                        case"m":
                            F += z("m", q.getMonth() + 1, 2);
                            break;
                        case"M":
                            F += m("M", q.getMonth(), k, C);
                            break;
                        case"y":
                            F += v("y") ? q.getFullYear() : (10 > q.getYear() % 100 ? "0" : "") + q.getYear() % 100;
                            break;
                        case"@":
                            F += q.getTime();
                            break;
                        case"!":
                            F += 10000 * q.getTime() + this._ticksTo1970;
                            break;
                        case"'":
                            v("'") ? F += "'" : p = !0;
                            break;
                        default:
                            F += E.charAt(D)
                    }
                }
            }
        }
        return F
    }, _possibleChars: function (o) {
        var a, k = "", m = !1, l = function (e) {
            var n = o.length > a + 1 && o.charAt(a + 1) === e;
            return n && a++, n
        };
        for (a = 0; o.length > a; a++) {
            if (m) {
                "'" !== o.charAt(a) || l("'") ? k += o.charAt(a) : m = !1
            } else {
                switch (o.charAt(a)) {
                    case"d":
                    case"m":
                    case"y":
                    case"@":
                        k += "0123456789";
                        break;
                    case"D":
                    case"M":
                        return null;
                    case"'":
                        l("'") ? k += "'" : m = !0;
                        break;
                    default:
                        k += o.charAt(a)
                }
            }
        }
        return k
    }, _get: function (e, a) {
        return e.settings[a] !== c ? e.settings[a] : this._defaults[a]
    }, _setDateFromField: function (w, l) {
        if (w.input.val() !== w.lastVal) {
            var m = this._get(w, "dateFormat"), v = w.lastVal = w.input ? w.input.val() : null, p = this._getDefaultDate(w), q = p, k = this._getFormatConfig(w);
            try {
                q = this.parseDate(m, v, k) || p
            } catch (u) {
                v = l ? "" : v
            }
            w.selectedDay = q.getDate(), w.drawMonth = w.selectedMonth = q.getMonth(), w.drawYear = w.selectedYear = q.getFullYear(), w.currentDay = v ? q.getDate() : 0, w.currentMonth = v ? q.getMonth() : 0, w.currentYear = v ? q.getFullYear() : 0, this._adjustInstDate(w)
        }
    }, _getDefaultDate: function (a) {
        return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
    }, _determineDate: function (l, m, r) {
        var p = function (n) {
            var a = new Date;
            return a.setDate(a.getDate() + n), a
        }, q = function (u) {
            try {
                return j.datepicker.parseDate(j.datepicker._get(l, "dateFormat"), u, j.datepicker._getFormatConfig(l))
            } catch (B) {
            }
            for (var w = (u.toLowerCase().match(/^c/) ? j.datepicker._getDate(l) : null) || new Date, z = w.getFullYear(), e = w.getMonth(), A = w.getDate(), t = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, v = t.exec(u); v;) {
                switch (v[2] || "d") {
                    case"d":
                    case"D":
                        A += parseInt(v[1], 10);
                        break;
                    case"w":
                    case"W":
                        A += 7 * parseInt(v[1], 10);
                        break;
                    case"m":
                    case"M":
                        e += parseInt(v[1], 10), A = Math.min(A, j.datepicker._getDaysInMonth(z, e));
                        break;
                    case"y":
                    case"Y":
                        z += parseInt(v[1], 10), A = Math.min(A, j.datepicker._getDaysInMonth(z, e))
                }
                v = t.exec(u)
            }
            return new Date(z, e, A)
        }, k = null == m || "" === m ? r : "string" == typeof m ? q(m) : "number" == typeof m ? isNaN(m) ? r : p(m) : new Date(m.getTime());
        return k = k && "Invalid Date" == "" + k ? r : k, k && (k.setHours(0), k.setMinutes(0), k.setSeconds(0), k.setMilliseconds(0)), this._daylightSavingAdjust(k)
    }, _daylightSavingAdjust: function (a) {
        return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
    }, _setDate: function (u, l, m) {
        var r = !l, p = u.selectedMonth, q = u.selectedYear, k = this._restrictMinMax(u, this._determineDate(u, l, new Date));
        u.selectedDay = u.currentDay = k.getDate(), u.drawMonth = u.selectedMonth = u.currentMonth = k.getMonth(), u.drawYear = u.selectedYear = u.currentYear = k.getFullYear(), p === u.selectedMonth && q === u.selectedYear || m || this._notifyChange(u), this._adjustInstDate(u), u.input && u.input.val(r ? "" : this._formatDate(u))
    }, _getDate: function (k) {
        var a = !k.currentYear || k.input && "" === k.input.val() ? null : this._daylightSavingAdjust(new Date(k.currentYear, k.currentMonth, k.currentDay));
        return a
    }, _attachHandlers: function (a) {
        var k = this._get(a, "stepMonths"), l = "#" + a.id.replace(/\\\\/g, "\\");
        a.dpDiv.find("[data-handler]").map(function () {
            var m = {prev: function () {
                j.datepicker._adjustDate(l, -k, "M")
            }, next: function () {
                j.datepicker._adjustDate(l, +k, "M")
            }, hide: function () {
                j.datepicker._hideDatepicker()
            }, today: function () {
                j.datepicker._gotoToday(l)
            }, selectDay: function () {
                return j.datepicker._selectDay(l, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
            }, selectMonth: function () {
                return j.datepicker._selectMonthYear(l, this, "M"), !1
            }, selectYear: function () {
                return j.datepicker._selectMonthYear(l, this, "Y"), !1
            }};
            j(this).bind(this.getAttribute("data-event"), m[this.getAttribute("data-handler")])
        })
    }, _generateHTML: function (aP) {
        var ak, at, aN, aD, aF, ac, aL, aq, az, ag, aS, ai, aH, am, ao, aB, aU, ab, ae, a0, aW, ax, aY, aj, ah, au, aI, aQ, aC, aO, a2, ad, ar, al, aE, aX, aG, an, aM, aA = new Date, av = this._daylightSavingAdjust(new Date(aA.getFullYear(), aA.getMonth(), aA.getDate())), a1 = this._get(aP, "isRTL"), af = this._get(aP, "showButtonPanel"), aV = this._get(aP, "hideIfNoPrevNext"), ay = this._get(aP, "navigationAsDateFormat"), aT = this._getNumberOfMonths(aP), aJ = this._get(aP, "showCurrentAtPos"), aK = this._get(aP, "stepMonths"), aZ = 1 !== aT[0] || 1 !== aT[1], aa = this._daylightSavingAdjust(aP.currentDay ? new Date(aP.currentYear, aP.currentMonth, aP.currentDay) : new Date(9999, 9, 9)), ap = this._getMinMaxDate(aP, "min"), aw = this._getMinMaxDate(aP, "max"), a3 = aP.drawMonth - aJ, aR = aP.drawYear;
        if (0 > a3 && (a3 += 12, aR--), aw) {
            for (ak = this._daylightSavingAdjust(new Date(aw.getFullYear(), aw.getMonth() - aT[0] * aT[1] + 1, aw.getDate())), ak = ap && ap > ak ? ap : ak; this._daylightSavingAdjust(new Date(aR, a3, 1)) > ak;) {
                a3--, 0 > a3 && (a3 = 11, aR--)
            }
        }
        for (aP.drawMonth = a3, aP.drawYear = aR, at = this._get(aP, "prevText"), at = ay ? this.formatDate(at, this._daylightSavingAdjust(new Date(aR, a3 - aK, 1)), this._getFormatConfig(aP)) : at, aN = this._canAdjustMonth(aP, -1, aR, a3) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + at + "'><span class='ui-icon ui-icon-circle-triangle-" + (a1 ? "e" : "w") + "'>" + at + "</span></a>" : aV ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + at + "'><span class='ui-icon ui-icon-circle-triangle-" + (a1 ? "e" : "w") + "'>" + at + "</span></a>", aD = this._get(aP, "nextText"), aD = ay ? this.formatDate(aD, this._daylightSavingAdjust(new Date(aR, a3 + aK, 1)), this._getFormatConfig(aP)) : aD, aF = this._canAdjustMonth(aP, 1, aR, a3) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + aD + "'><span class='ui-icon ui-icon-circle-triangle-" + (a1 ? "w" : "e") + "'>" + aD + "</span></a>" : aV ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + aD + "'><span class='ui-icon ui-icon-circle-triangle-" + (a1 ? "w" : "e") + "'>" + aD + "</span></a>", ac = this._get(aP, "currentText"), aL = this._get(aP, "gotoCurrent") && aP.currentDay ? aa : av, ac = ay ? this.formatDate(ac, aL, this._getFormatConfig(aP)) : ac, aq = aP.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(aP, "closeText") + "</button>", az = af ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (a1 ? aq : "") + (this._isInRange(aP, aL) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + ac + "</button>" : "") + (a1 ? "" : aq) + "</div>" : "", ag = parseInt(this._get(aP, "firstDay"), 10), ag = isNaN(ag) ? 0 : ag, aS = this._get(aP, "showWeek"), ai = this._get(aP, "dayNames"), aH = this._get(aP, "dayNamesMin"), am = this._get(aP, "monthNames"), ao = this._get(aP, "monthNamesShort"), aB = this._get(aP, "beforeShowDay"), aU = this._get(aP, "showOtherMonths"), ab = this._get(aP, "selectOtherMonths"), ae = this._getDefaultDate(aP), a0 = "", ax = 0; aT[0] > ax; ax++) {
            for (aY = "", this.maxRows = 4, aj = 0; aT[1] > aj; aj++) {
                if (ah = this._daylightSavingAdjust(new Date(aR, a3, aP.selectedDay)), au = " ui-corner-all", aI = "", aZ) {
                    if (aI += "<div class='ui-datepicker-group", aT[1] > 1) {
                        switch (aj) {
                            case 0:
                                aI += " ui-datepicker-group-first", au = " ui-corner-" + (a1 ? "right" : "left");
                                break;
                            case aT[1] - 1:
                                aI += " ui-datepicker-group-last", au = " ui-corner-" + (a1 ? "left" : "right");
                                break;
                            default:
                                aI += " ui-datepicker-group-middle", au = ""
                        }
                    }
                    aI += "'>"
                }
                for (aI += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + au + "'>" + (/all|left/.test(au) && 0 === ax ? a1 ? aF : aN : "") + (/all|right/.test(au) && 0 === ax ? a1 ? aN : aF : "") + this._generateMonthYearHeader(aP, a3, aR, ap, aw, ax > 0 || aj > 0, am, ao) + "</div><table class='ui-datepicker-calendar'><thead><tr>", aQ = aS ? "<th class='ui-datepicker-week-col'>" + this._get(aP, "weekHeader") + "</th>" : "", aW = 0; 7 > aW; aW++) {
                    aC = (aW + ag) % 7, aQ += "<th" + ((aW + ag + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ai[aC] + "'>" + aH[aC] + "</span></th>"
                }
                for (aI += aQ + "</tr></thead><tbody>", aO = this._getDaysInMonth(aR, a3), aR === aP.selectedYear && a3 === aP.selectedMonth && (aP.selectedDay = Math.min(aP.selectedDay, aO)), a2 = (this._getFirstDayOfMonth(aR, a3) - ag + 7) % 7, ad = Math.ceil((a2 + aO) / 7), ar = aZ ? this.maxRows > ad ? this.maxRows : ad : ad, this.maxRows = ar, al = this._daylightSavingAdjust(new Date(aR, a3, 1 - a2)), aE = 0; ar > aE; aE++) {
                    for (aI += "<tr>", aX = aS ? "<td class='ui-datepicker-week-col'>" + this._get(aP, "calculateWeek")(al) + "</td>" : "", aW = 0; 7 > aW; aW++) {
                        aG = aB ? aB.apply(aP.input ? aP.input[0] : null, [al]) : [!0, ""], an = al.getMonth() !== a3, aM = an && !ab || !aG[0] || ap && ap > al || aw && al > aw, aX += "<td class='" + ((aW + ag + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (an ? " ui-datepicker-other-month" : "") + (al.getTime() === ah.getTime() && a3 === aP.selectedMonth && aP._keyEvent || ae.getTime() === al.getTime() && ae.getTime() === ah.getTime() ? " " + this._dayOverClass : "") + (aM ? " " + this._unselectableClass + " ui-state-disabled" : "") + (an && !aU ? "" : " " + aG[1] + (al.getTime() === aa.getTime() ? " " + this._currentClass : "") + (al.getTime() === av.getTime() ? " ui-datepicker-today" : "")) + "'" + (an && !aU || !aG[2] ? "" : " title='" + aG[2].replace(/'/g, "&#39;") + "'") + (aM ? "" : " data-handler='selectDay' data-event='click' data-month='" + al.getMonth() + "' data-year='" + al.getFullYear() + "'") + ">" + (an && !aU ? "&#xa0;" : aM ? "<span class='ui-state-default'>" + al.getDate() + "</span>" : "<a class='ui-state-default" + (al.getTime() === av.getTime() ? " ui-state-highlight" : "") + (al.getTime() === aa.getTime() ? " ui-state-active" : "") + (an ? " ui-priority-secondary" : "") + "' href='#'>" + al.getDate() + "</a>") + "</td>", al.setDate(al.getDate() + 1), al = this._daylightSavingAdjust(al)
                    }
                    aI += aX + "</tr>"
                }
                a3++, a3 > 11 && (a3 = 0, aR++), aI += "</tbody></table>" + (aZ ? "</div>" + (aT[0] > 0 && aj === aT[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), aY += aI
            }
            a0 += aY
        }
        return a0 += az, aP._keyEvent = !1, a0
    }, _generateMonthYearHeader: function (N, B, F, M, I, J, q, L) {
        var E, G, z, O, A, K, C, D, H = this._get(N, "changeMonth"), P = this._get(N, "changeYear"), k = this._get(N, "showMonthAfterYear"), w = "<div class='ui-datepicker-title'>", Q = "";
        if (J || !H) {
            Q += "<span class='ui-datepicker-month'>" + q[B] + "</span>"
        } else {
            for (E = M && M.getFullYear() === F, G = I && I.getFullYear() === F, Q += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", z = 0; 12 > z; z++) {
                (!E || z >= M.getMonth()) && (!G || I.getMonth() >= z) && (Q += "<option value='" + z + "'" + (z === B ? " selected='selected'" : "") + ">" + L[z] + "</option>")
            }
            Q += "</select>"
        }
        if (k || (w += Q + (!J && H && P ? "" : "&#xa0;")), !N.yearshtml) {
            if (N.yearshtml = "", J || !P) {
                w += "<span class='ui-datepicker-year'>" + F + "</span>"
            } else {
                for (O = this._get(N, "yearRange").split(":"), A = (new Date).getFullYear(), K = function (l) {
                    var a = l.match(/c[+\-].*/) ? F + parseInt(l.substring(1), 10) : l.match(/[+\-].*/) ? A + parseInt(l, 10) : parseInt(l, 10);
                    return isNaN(a) ? A : a
                }, C = K(O[0]), D = Math.max(C, K(O[1] || "")), C = M ? Math.max(C, M.getFullYear()) : C, D = I ? Math.min(D, I.getFullYear()) : D, N.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; D >= C; C++) {
                    N.yearshtml += "<option value='" + C + "'" + (C === F ? " selected='selected'" : "") + ">" + C + "</option>"
                }
                N.yearshtml += "</select>", w += N.yearshtml, N.yearshtml = null
            }
        }
        return w += this._get(N, "yearSuffix"), k && (w += (!J && H && P ? "" : "&#xa0;") + Q), w += "</div>"
    }, _adjustInstDate: function (u, l, m) {
        var r = u.drawYear + ("Y" === m ? l : 0), p = u.drawMonth + ("M" === m ? l : 0), q = Math.min(u.selectedDay, this._getDaysInMonth(r, p)) + ("D" === m ? l : 0), k = this._restrictMinMax(u, this._daylightSavingAdjust(new Date(r, p, q)));
        u.selectedDay = k.getDate(), u.drawMonth = u.selectedMonth = k.getMonth(), u.drawYear = u.selectedYear = k.getFullYear(), ("M" === m || "Y" === m) && this._notifyChange(u)
    }, _restrictMinMax: function (o, a) {
        var k = this._getMinMaxDate(o, "min"), m = this._getMinMaxDate(o, "max"), l = k && k > a ? k : a;
        return m && l > m ? m : l
    }, _notifyChange: function (k) {
        var a = this._get(k, "onChangeMonthYear");
        a && a.apply(k.input ? k.input[0] : null, [k.selectedYear, k.selectedMonth + 1, k])
    }, _getNumberOfMonths: function (k) {
        var a = this._get(k, "numberOfMonths");
        return null == a ? [1, 1] : "number" == typeof a ? [1, a] : a
    }, _getMinMaxDate: function (k, a) {
        return this._determineDate(k, this._get(k, a + "Date"), null)
    }, _getDaysInMonth: function (k, a) {
        return 32 - this._daylightSavingAdjust(new Date(k, a, 32)).getDate()
    }, _getFirstDayOfMonth: function (k, a) {
        return new Date(k, a, 1).getDay()
    }, _canAdjustMonth: function (q, a, k, p) {
        var l = this._getNumberOfMonths(q), m = this._daylightSavingAdjust(new Date(k, p + (0 > a ? a : l[0] * l[1]), 1));
        return 0 > a && m.setDate(this._getDaysInMonth(m.getFullYear(), m.getMonth())), this._isInRange(q, m)
    }, _isInRange: function (z, l) {
        var p, w, q = this._getMinMaxDate(z, "min"), u = this._getMinMaxDate(z, "max"), k = null, v = null, m = this._get(z, "yearRange");
        return m && (p = m.split(":"), w = (new Date).getFullYear(), k = parseInt(p[0], 10), v = parseInt(p[1], 10), p[0].match(/[+\-].*/) && (k += w), p[1].match(/[+\-].*/) && (v += w)), (!q || l.getTime() >= q.getTime()) && (!u || l.getTime() <= u.getTime()) && (!k || l.getFullYear() >= k) && (!v || v >= l.getFullYear())
    }, _getFormatConfig: function (k) {
        var a = this._get(k, "shortYearCutoff");
        return a = "string" != typeof a ? a : (new Date).getFullYear() % 100 + parseInt(a, 10), {shortYearCutoff: a, dayNamesShort: this._get(k, "dayNamesShort"), dayNames: this._get(k, "dayNames"), monthNamesShort: this._get(k, "monthNamesShort"), monthNames: this._get(k, "monthNames")}
    }, _formatDate: function (o, a, k, m) {
        a || (o.currentDay = o.selectedDay, o.currentMonth = o.selectedMonth, o.currentYear = o.selectedYear);
        var l = a ? "object" == typeof a ? a : this._daylightSavingAdjust(new Date(m, k, a)) : this._daylightSavingAdjust(new Date(o.currentYear, o.currentMonth, o.currentDay));
        return this.formatDate(this._get(o, "dateFormat"), l, this._getFormatConfig(o))
    }}), j.fn.datepicker = function (a) {
        if (!this.length) {
            return this
        }
        j.datepicker.initialized || (j(document).mousedown(j.datepicker._checkExternalClick), j.datepicker.initialized = !0), 0 === j("#" + j.datepicker._mainDivId).length && j("body").append(j.datepicker.dpDiv);
        var k = Array.prototype.slice.call(arguments, 1);
        return"string" != typeof a || "isDisabled" !== a && "getDate" !== a && "widget" !== a ? "option" === a && 2 === arguments.length && "string" == typeof arguments[1] ? j.datepicker["_" + a + "Datepicker"].apply(j.datepicker, [this[0]].concat(k)) : this.each(function () {
            "string" == typeof a ? j.datepicker["_" + a + "Datepicker"].apply(j.datepicker, [this].concat(k)) : j.datepicker._attachDatepicker(this, a)
        }) : j.datepicker["_" + a + "Datepicker"].apply(j.datepicker, [this[0]].concat(k))
    }, j.datepicker = new d, j.datepicker.initialized = !1, j.datepicker.uuid = (new Date).getTime(), j.datepicker.version = "1.10.3"
}(jQuery), function (c) {
    var a = {buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0}, b = {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0};
    c.widget("ui.dialog", {version: "1.10.3", options: {appendTo: "body", autoOpen: !0, buttons: [], closeOnEscape: !0, closeText: "close", dialogClass: "", draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: {my: "center", at: "center", of: window, collision: "fit", using: function (d) {
        var f = c(this).css(d).offset().top;
        0 > f && c(this).css("top", d.top - f)
    }}, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null}, _create: function () {
        this.originalCss = {display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height}, this.originalPosition = {parent: this.element.parent(), index: this.element.parent().children().index(this.element)}, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && c.fn.draggable && this._makeDraggable(), this.options.resizable && c.fn.resizable && this._makeResizable(), this._isOpen = !1
    }, _init: function () {
        this.options.autoOpen && this.open()
    }, _appendTo: function () {
        var d = this.options.appendTo;
        return d && (d.jquery || d.nodeType) ? c(d) : this.document.find(d || "body").eq(0)
    }, _destroy: function () {
        var f, d = this.originalPosition;
        this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), f = d.parent.children().eq(d.index), f.length && f[0] !== this.element[0] ? f.before(this.element) : d.parent.append(this.element)
    }, widget: function () {
        return this.uiDialog
    }, disable: c.noop, enable: c.noop, close: function (d) {
        var f = this;
        this._isOpen && this._trigger("beforeClose", d) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || c(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function () {
            f._trigger("close", d)
        }))
    }, isOpen: function () {
        return this._isOpen
    }, moveToTop: function () {
        this._moveToTop()
    }, _moveToTop: function (g, d) {
        var f = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
        return f && !d && this._trigger("focus", g), f
    }, open: function () {
        var d = this;
        return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = c(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
            d._focusTabbable(), d._trigger("focus")
        }), this._trigger("open"), undefined)
    }, _focusTabbable: function () {
        var d = this.element.find("[autofocus]");
        d.length || (d = this.element.find(":tabbable")), d.length || (d = this.uiDialogButtonPane.find(":tabbable")), d.length || (d = this.uiDialogTitlebarClose.filter(":tabbable")), d.length || (d = this.uiDialog), d.eq(0).focus()
    }, _keepFocus: function (d) {
        function f() {
            var g = this.document[0].activeElement, h = this.uiDialog[0] === g || c.contains(this.uiDialog[0], g);
            h || this._focusTabbable()
        }

        d.preventDefault(), f.call(this), this._delay(f)
    }, _createWrapper: function () {
        this.uiDialog = c("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({tabIndex: -1, role: "dialog"}).appendTo(this._appendTo()), this._on(this.uiDialog, {keydown: function (d) {
            if (this.options.closeOnEscape && !d.isDefaultPrevented() && d.keyCode && d.keyCode === c.ui.keyCode.ESCAPE) {
                return d.preventDefault(), this.close(d), undefined
            }
            if (d.keyCode === c.ui.keyCode.TAB) {
                var f = this.uiDialog.find(":tabbable"), h = f.filter(":first"), g = f.filter(":last");
                d.target !== g[0] && d.target !== this.uiDialog[0] || d.shiftKey ? d.target !== h[0] && d.target !== this.uiDialog[0] || !d.shiftKey || (g.focus(1), d.preventDefault()) : (h.focus(1), d.preventDefault())
            }
        }, mousedown: function (d) {
            this._moveToTop(d) && this._focusTabbable()
        }}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
    }, _createTitlebar: function () {
        var d;
        this.uiDialogTitlebar = c("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {mousedown: function (f) {
            c(f.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
        }}), this.uiDialogTitlebarClose = c("<button></button>").button({label: this.options.closeText, icons: {primary: "ui-icon-closethick"}, text: !1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {click: function (e) {
            e.preventDefault(), this.close(e)
        }}), d = c("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(d), this.uiDialog.attr({"aria-labelledby": d.attr("id")})
    }, _title: function (d) {
        this.options.title || d.html("&#160;"), d.text(this.options.title)
    }, _createButtonPane: function () {
        this.uiDialogButtonPane = c("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = c("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
    }, _createButtons: function () {
        var d = this, f = this.options.buttons;
        return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), c.isEmptyObject(f) || c.isArray(f) && !f.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (c.each(f, function (e, j) {
            var g, h;
            j = c.isFunction(j) ? {click: j, text: e} : j, j = c.extend({type: "button"}, j), g = j.click, j.click = function () {
                g.apply(d.element[0], arguments)
            }, h = {icons: j.icons, text: j.showText}, delete j.icons, delete j.showText, c("<button></button>", j).button(h).appendTo(d.uiButtonSet)
        }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
    }, _makeDraggable: function () {
        function d(e) {
            return{position: e.position, offset: e.offset}
        }

        var f = this, g = this.options;
        this.uiDialog.draggable({cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (h, e) {
            c(this).addClass("ui-dialog-dragging"), f._blockFrames(), f._trigger("dragStart", h, d(e))
        }, drag: function (h, e) {
            f._trigger("drag", h, d(e))
        }, stop: function (e, h) {
            g.position = [h.position.left - f.document.scrollLeft(), h.position.top - f.document.scrollTop()], c(this).removeClass("ui-dialog-dragging"), f._unblockFrames(), f._trigger("dragStop", e, d(h))
        }})
    }, _makeResizable: function () {
        function f(e) {
            return{originalPosition: e.originalPosition, originalSize: e.originalSize, position: e.position, size: e.size}
        }

        var g = this, k = this.options, h = k.resizable, j = this.uiDialog.css("position"), d = "string" == typeof h ? h : "n,e,s,w,se,sw,ne,nw";
        this.uiDialog.resizable({cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: k.maxWidth, maxHeight: k.maxHeight, minWidth: k.minWidth, minHeight: this._minHeight(), handles: d, start: function (l, e) {
            c(this).addClass("ui-dialog-resizing"), g._blockFrames(), g._trigger("resizeStart", l, f(e))
        }, resize: function (l, e) {
            g._trigger("resize", l, f(e))
        }, stop: function (e, l) {
            k.height = c(this).height(), k.width = c(this).width(), c(this).removeClass("ui-dialog-resizing"), g._unblockFrames(), g._trigger("resizeStop", e, f(l))
        }}).css("position", j)
    }, _minHeight: function () {
        var d = this.options;
        return"auto" === d.height ? d.minHeight : Math.min(d.minHeight, d.height)
    }, _position: function () {
        var d = this.uiDialog.is(":visible");
        d || this.uiDialog.show(), this.uiDialog.position(this.options.position), d || this.uiDialog.hide()
    }, _setOptions: function (g) {
        var e = this, f = !1, d = {};
        c.each(g, function (j, h) {
            e._setOption(j, h), j in a && (f = !0), j in b && (d[j] = h)
        }), f && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", d)
    }, _setOption: function (j, d) {
        var f, h, g = this.uiDialog;
        "dialogClass" === j && g.removeClass(this.options.dialogClass).addClass(d), "disabled" !== j && (this._super(j, d), "appendTo" === j && this.uiDialog.appendTo(this._appendTo()), "buttons" === j && this._createButtons(), "closeText" === j && this.uiDialogTitlebarClose.button({label: "" + d}), "draggable" === j && (f = g.is(":data(ui-draggable)"), f && !d && g.draggable("destroy"), !f && d && this._makeDraggable()), "position" === j && this._position(), "resizable" === j && (h = g.is(":data(ui-resizable)"), h && !d && g.resizable("destroy"), h && "string" == typeof d && g.resizable("option", "handles", d), h || d === !1 || this._makeResizable()), "title" === j && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
    }, _size: function () {
        var h, d, f, g = this.options;
        this.element.show().css({width: "auto", minHeight: 0, maxHeight: "none", height: 0}), g.minWidth > g.width && (g.width = g.minWidth), h = this.uiDialog.css({height: "auto", width: g.width}).outerHeight(), d = Math.max(0, g.minHeight - h), f = "number" == typeof g.maxHeight ? Math.max(0, g.maxHeight - h) : "none", "auto" === g.height ? this.element.css({minHeight: d, maxHeight: f, height: "auto"}) : this.element.height(Math.max(0, g.height - h)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
    }, _blockFrames: function () {
        this.iframeBlocks = this.document.find("iframe").map(function () {
            var d = c(this);
            return c("<div>").css({position: "absolute", width: d.outerWidth(), height: d.outerHeight()}).appendTo(d.parent()).offset(d.offset())[0]
        })
    }, _unblockFrames: function () {
        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
    }, _allowInteraction: function (d) {
        return c(d.target).closest(".ui-dialog").length ? !0 : !!c(d.target).closest(".ui-datepicker").length
    }, _createOverlay: function () {
        if (this.options.modal) {
            var d = this, f = this.widgetFullName;
            c.ui.dialog.overlayInstances || this._delay(function () {
                c.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (e) {
                    d._allowInteraction(e) || (e.preventDefault(), c(".ui-dialog:visible:last .ui-dialog-content").data(f)._focusTabbable())
                })
            }), this.overlay = c("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {mousedown: "_keepFocus"}), c.ui.dialog.overlayInstances++
        }
    }, _destroyOverlay: function () {
        this.options.modal && this.overlay && (c.ui.dialog.overlayInstances--, c.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
    }}), c.ui.dialog.overlayInstances = 0, c.uiBackCompat !== !1 && c.widget("ui.dialog", c.ui.dialog, {_position: function () {
        var d, f = this.options.position, h = [], g = [0, 0];
        f ? (("string" == typeof f || "object" == typeof f && "0" in f) && (h = f.split ? f.split(" ") : [f[0], f[1]], 1 === h.length && (h[1] = h[0]), c.each(["left", "top"], function (k, j) {
            +h[k] === h[k] && (g[k] = h[k], h[k] = j)
        }), f = {my: h[0] + (0 > g[0] ? g[0] : "+" + g[0]) + " " + h[1] + (0 > g[1] ? g[1] : "+" + g[1]), at: h.join(" ")}), f = c.extend({}, c.ui.dialog.prototype.options.position, f)) : f = c.ui.dialog.prototype.options.position, d = this.uiDialog.is(":visible"), d || this.uiDialog.show(), this.uiDialog.position(f), d || this.uiDialog.hide()
    }})
}(jQuery), function (c) {
    var a = /up|down|vertical/, b = /up|left|vertical|horizontal/;
    c.effects.effect.blind = function (F, B) {
        var C, e, E, w = c(this), z = ["position", "top", "bottom", "left", "right", "height", "width"], j = c.effects.setMode(w, F.mode || "hide"), G = F.direction || "up", k = a.test(G), D = k ? "height" : "width", q = k ? "top" : "left", t = b.test(G), A = {}, H = "show" === j;
        w.parent().is(".ui-effects-wrapper") ? c.effects.save(w.parent(), z) : c.effects.save(w, z), w.show(), C = c.effects.createWrapper(w).css({overflow: "hidden"}), e = C[D](), E = parseFloat(C.css(q)) || 0, A[D] = H ? e : 0, t || (w.css(k ? "bottom" : "right", 0).css(k ? "top" : "left", "auto").css({position: "absolute"}), A[q] = H ? E : e + E), H && (C.css(D, 0), t || C.css(q, E + e)), C.animate(A, {duration: F.duration, easing: F.easing, queue: !1, complete: function () {
            "hide" === j && w.hide(), c.effects.restore(w, z), c.effects.removeWrapper(w), B()
        }})
    }
}(jQuery), function (a) {
    a.effects.effect.bounce = function (z, D) {
        var K, G, H, k = a(this), J = ["position", "top", "bottom", "left", "right", "height", "width"], C = a.effects.setMode(k, z.mode || "effect"), E = "hide" === C, t = "show" === C, L = z.direction || "up", w = z.distance, I = z.times || 5, A = 2 * I + (t || E ? 1 : 0), B = z.duration / A, F = z.easing, M = "up" === L || "down" === L ? "top" : "left", j = "up" === L || "left" === L, q = k.queue(), N = q.length;
        for ((t || E) && J.push("opacity"), a.effects.save(k, J), k.show(), a.effects.createWrapper(k), w || (w = k["top" === M ? "outerHeight" : "outerWidth"]() / 3), t && (H = {opacity: 1}, H[M] = 0, k.css("opacity", 0).css(M, j ? 2 * -w : 2 * w).animate(H, B, F)), E && (w /= Math.pow(2, I - 1)), H = {}, H[M] = 0, K = 0; I > K; K++) {
            G = {}, G[M] = (j ? "-=" : "+=") + w, k.animate(G, B, F).animate(H, B, F), w = E ? 2 * w : w / 2
        }
        E && (G = {opacity: 0}, G[M] = (j ? "-=" : "+=") + w, k.animate(G, B, F)), k.queue(function () {
            E && k.hide(), a.effects.restore(k, J), a.effects.removeWrapper(k), D()
        }), N > 1 && q.splice.apply(q, [1, 0].concat(q.splice(N, A + 1))), k.dequeue()
    }
}(jQuery), function (a) {
    a.effects.effect.clip = function (k, t) {
        var C, w, z, b = a(this), B = ["position", "top", "bottom", "left", "right", "height", "width"], q = a.effects.setMode(b, k.mode || "hide"), v = "show" === q, g = k.direction || "vertical", D = "vertical" === g, j = D ? "height" : "width", A = D ? "top" : "left", m = {};
        a.effects.save(b, B), b.show(), C = a.effects.createWrapper(b).css({overflow: "hidden"}), w = "IMG" === b[0].tagName ? C : b, z = w[j](), v && (w.css(j, 0), w.css(A, z / 2)), m[j] = v ? z : 0, m[A] = v ? 0 : z / 2, w.animate(m, {queue: !1, duration: k.duration, easing: k.easing, complete: function () {
            v || b.hide(), a.effects.restore(b, B), a.effects.removeWrapper(b), t()
        }})
    }
}(jQuery), function (a) {
    a.effects.effect.drop = function (f, j) {
        var t, m = a(this), p = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], b = a.effects.setMode(m, f.mode || "hide"), q = "show" === b, g = f.direction || "left", k = "up" === g || "down" === g ? "top" : "left", d = "up" === g || "left" === g ? "pos" : "neg", v = {opacity: q ? 1 : 0};
        a.effects.save(m, p), m.show(), a.effects.createWrapper(m), t = f.distance || m["top" === k ? "outerHeight" : "outerWidth"](!0) / 2, q && m.css("opacity", 0).css(k, "pos" === d ? -t : t), v[k] = (q ? "pos" === d ? "+=" : "-=" : "pos" === d ? "-=" : "+=") + t, m.animate(v, {queue: !1, duration: f.duration, easing: f.easing, complete: function () {
            "hide" === b && m.hide(), a.effects.restore(m, p), a.effects.removeWrapper(m), j()
        }})
    }
}(jQuery), function (a) {
    a.effects.effect.explode = function (z, D) {
        function K() {
            q.push(this), q.length === L * w && G()
        }

        function G() {
            I.css({visibility: "visible"}), a(q).remove(), B || I.hide(), D()
        }

        var H, k, J, C, E, t, L = z.pieces ? Math.round(Math.sqrt(z.pieces)) : 3, w = L, I = a(this), A = a.effects.setMode(I, z.mode || "hide"), B = "show" === A, F = I.show().css("visibility", "hidden").offset(), M = Math.ceil(I.outerWidth() / w), j = Math.ceil(I.outerHeight() / L), q = [];
        for (H = 0; L > H; H++) {
            for (C = F.top + H * j, t = H - (L - 1) / 2, k = 0; w > k; k++) {
                J = F.left + k * M, E = k - (w - 1) / 2, I.clone().appendTo("body").wrap("<div></div>").css({position: "absolute", visibility: "visible", left: -k * M, top: -H * j}).parent().addClass("ui-effects-explode").css({position: "absolute", overflow: "hidden", width: M, height: j, left: J + (B ? E * M : 0), top: C + (B ? t * j : 0), opacity: B ? 0 : 1}).animate({left: J + (B ? 0 : E * M), top: C + (B ? 0 : t * j), opacity: B ? 1 : 0}, z.duration || 500, z.easing, K)
            }
        }
    }
}(jQuery), function (a) {
    a.effects.effect.fade = function (b, c) {
        var f = a(this), d = a.effects.setMode(f, b.mode || "toggle");
        f.animate({opacity: d}, {queue: !1, duration: b.duration, easing: b.easing, complete: c})
    }
}(jQuery), function (a) {
    a.effects.effect.fold = function (q, A) {
        var H, D, E = a(this), b = ["position", "top", "bottom", "left", "right", "height", "width"], G = a.effects.setMode(E, q.mode || "hide"), z = "show" === G, B = "hide" === G, j = q.size || 15, I = /([0-9]+)%/.exec(j), k = !!q.horizFirst, F = z !== k, t = F ? ["width", "height"] : ["height", "width"], w = q.duration / 2, C = {}, J = {};
        a.effects.save(E, b), E.show(), H = a.effects.createWrapper(E).css({overflow: "hidden"}), D = F ? [H.width(), H.height()] : [H.height(), H.width()], I && (j = parseInt(I[1], 10) / 100 * D[B ? 0 : 1]), z && H.css(k ? {height: 0, width: j} : {height: j, width: 0}), C[t[0]] = z ? D[0] : j, J[t[1]] = z ? D[1] : 0, H.animate(C, w, q.easing).animate(J, w, q.easing, function () {
            B && E.hide(), a.effects.restore(E, b), a.effects.removeWrapper(E), A()
        })
    }
}(jQuery), function (a) {
    a.effects.effect.highlight = function (c, d) {
        var h = a(this), f = ["backgroundImage", "backgroundColor", "opacity"], g = a.effects.setMode(h, c.mode || "show"), b = {backgroundColor: h.css("backgroundColor")};
        "hide" === g && (b.opacity = 0), a.effects.save(h, f), h.show().css({backgroundImage: "none", backgroundColor: c.color || "#ffff99"}).animate(b, {queue: !1, duration: c.duration, easing: c.easing, complete: function () {
            "hide" === g && h.hide(), a.effects.restore(h, f), d()
        }})
    }
}(jQuery), function (a) {
    a.effects.effect.pulsate = function (j, m) {
        var A, t = a(this), v = a.effects.setMode(t, j.mode || "show"), b = "show" === v, z = "hide" === v, k = b || "hide" === v, q = 2 * (j.times || 5) + (k ? 1 : 0), f = j.duration / q, B = 0, g = t.queue(), w = g.length;
        for ((b || !t.is(":visible")) && (t.css("opacity", 0).show(), B = 1), A = 1; q > A; A++) {
            t.animate({opacity: B}, f, j.easing), B = 1 - B
        }
        t.animate({opacity: B}, f, j.easing), t.queue(function () {
            z && t.hide(), m()
        }), w > 1 && g.splice.apply(g, [1, 0].concat(g.splice(w, q + 1))), t.dequeue()
    }
}(jQuery), function (a) {
    a.effects.effect.puff = function (c, f) {
        var l = a(this), g = a.effects.setMode(l, c.mode || "hide"), j = "hide" === g, b = parseInt(c.percent, 10) || 150, k = b / 100, d = {height: l.height(), width: l.width(), outerHeight: l.outerHeight(), outerWidth: l.outerWidth()};
        a.extend(c, {effect: "scale", queue: !1, fade: !0, mode: g, complete: f, percent: j ? b : 100, from: j ? d : {height: d.height * k, width: d.width * k, outerHeight: d.outerHeight * k, outerWidth: d.outerWidth * k}}), l.effect(c)
    }, a.effects.effect.scale = function (f, j) {
        var t = a(this), m = a.extend(!0, {}, f), p = a.effects.setMode(t, f.mode || "effect"), b = parseInt(f.percent, 10) || (0 === parseInt(f.percent, 10) ? 0 : "hide" === p ? 0 : 100), q = f.direction || "both", g = f.origin, k = {height: t.height(), width: t.width(), outerHeight: t.outerHeight(), outerWidth: t.outerWidth()}, d = {y: "horizontal" !== q ? b / 100 : 1, x: "vertical" !== q ? b / 100 : 1};
        m.effect = "size", m.queue = !1, m.complete = j, "effect" !== p && (m.origin = g || ["middle", "center"], m.restore = !0), m.from = f.from || ("show" === p ? {height: 0, width: 0, outerHeight: 0, outerWidth: 0} : k), m.to = {height: k.height * d.y, width: k.width * d.x, outerHeight: k.outerHeight * d.y, outerWidth: k.outerWidth * d.x}, m.fade && ("show" === p && (m.from.opacity = 0, m.to.opacity = 1), "hide" === p && (m.from.opacity = 1, m.to.opacity = 0)), t.effect(m)
    }, a.effects.effect.size = function (z, D) {
        var K, G, H, k = a(this), J = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], C = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], E = ["width", "height", "overflow"], t = ["fontSize"], L = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], w = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], I = a.effects.setMode(k, z.mode || "effect"), A = z.restore || "effect" !== I, B = z.scale || "both", F = z.origin || ["middle", "center"], M = k.css("position"), j = A ? J : C, q = {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
        "show" === I && k.show(), K = {height: k.height(), width: k.width(), outerHeight: k.outerHeight(), outerWidth: k.outerWidth()}, "toggle" === z.mode && "show" === I ? (k.from = z.to || q, k.to = z.from || K) : (k.from = z.from || ("show" === I ? q : K), k.to = z.to || ("hide" === I ? q : K)), H = {from: {y: k.from.height / K.height, x: k.from.width / K.width}, to: {y: k.to.height / K.height, x: k.to.width / K.width}}, ("box" === B || "both" === B) && (H.from.y !== H.to.y && (j = j.concat(L), k.from = a.effects.setTransition(k, L, H.from.y, k.from), k.to = a.effects.setTransition(k, L, H.to.y, k.to)), H.from.x !== H.to.x && (j = j.concat(w), k.from = a.effects.setTransition(k, w, H.from.x, k.from), k.to = a.effects.setTransition(k, w, H.to.x, k.to))), ("content" === B || "both" === B) && H.from.y !== H.to.y && (j = j.concat(t).concat(E), k.from = a.effects.setTransition(k, t, H.from.y, k.from), k.to = a.effects.setTransition(k, t, H.to.y, k.to)), a.effects.save(k, j), k.show(), a.effects.createWrapper(k), k.css("overflow", "hidden").css(k.from), F && (G = a.effects.getBaseline(F, K), k.from.top = (K.outerHeight - k.outerHeight()) * G.y, k.from.left = (K.outerWidth - k.outerWidth()) * G.x, k.to.top = (K.outerHeight - k.to.outerHeight) * G.y, k.to.left = (K.outerWidth - k.to.outerWidth) * G.x), k.css(k.from), ("content" === B || "both" === B) && (L = L.concat(["marginTop", "marginBottom"]).concat(t), w = w.concat(["marginLeft", "marginRight"]), E = J.concat(L).concat(w), k.find("*[width]").each(function () {
            var b = a(this), c = {height: b.height(), width: b.width(), outerHeight: b.outerHeight(), outerWidth: b.outerWidth()};
            A && a.effects.save(b, E), b.from = {height: c.height * H.from.y, width: c.width * H.from.x, outerHeight: c.outerHeight * H.from.y, outerWidth: c.outerWidth * H.from.x}, b.to = {height: c.height * H.to.y, width: c.width * H.to.x, outerHeight: c.height * H.to.y, outerWidth: c.width * H.to.x}, H.from.y !== H.to.y && (b.from = a.effects.setTransition(b, L, H.from.y, b.from), b.to = a.effects.setTransition(b, L, H.to.y, b.to)), H.from.x !== H.to.x && (b.from = a.effects.setTransition(b, w, H.from.x, b.from), b.to = a.effects.setTransition(b, w, H.to.x, b.to)), b.css(b.from), b.animate(b.to, z.duration, z.easing, function () {
                A && a.effects.restore(b, E)
            })
        })), k.animate(k.to, {queue: !1, duration: z.duration, easing: z.easing, complete: function () {
            0 === k.to.opacity && k.css("opacity", k.from.opacity), "hide" === I && k.hide(), a.effects.restore(k, j), A || ("static" === M ? k.css({position: "relative", top: k.to.top, left: k.to.left}) : a.each(["top", "left"], function (c, b) {
                k.css(b, function (d, f) {
                    var h = parseInt(f, 10), g = c ? k.to.left : k.to.top;
                    return"auto" === f ? g + "px" : h + g + "px"
                })
            })), a.effects.removeWrapper(k), D()
        }})
    }
}(jQuery), function (a) {
    a.effects.effect.shake = function (t, B) {
        var I, E = a(this), F = ["position", "top", "bottom", "left", "right", "height", "width"], j = a.effects.setMode(E, t.mode || "effect"), H = t.direction || "left", A = t.distance || 20, C = t.times || 3, k = 2 * C + 1, J = Math.round(t.duration / k), q = "up" === H || "down" === H ? "top" : "left", G = "up" === H || "left" === H, w = {}, z = {}, D = {}, K = E.queue(), b = K.length;
        for (a.effects.save(E, F), E.show(), a.effects.createWrapper(E), w[q] = (G ? "-=" : "+=") + A, z[q] = (G ? "+=" : "-=") + 2 * A, D[q] = (G ? "-=" : "+=") + 2 * A, E.animate(w, J, t.easing), I = 1; C > I; I++) {
            E.animate(z, J, t.easing).animate(D, J, t.easing)
        }
        E.animate(z, J, t.easing).animate(w, J / 2, t.easing).queue(function () {
            "hide" === j && E.hide(), a.effects.restore(E, F), a.effects.removeWrapper(E), B()
        }), b > 1 && K.splice.apply(K, [1, 0].concat(K.splice(b, k + 1))), E.dequeue()
    }
}(jQuery), function (a) {
    a.effects.effect.slide = function (f, j) {
        var t, m = a(this), p = ["position", "top", "bottom", "left", "right", "width", "height"], b = a.effects.setMode(m, f.mode || "show"), q = "show" === b, g = f.direction || "left", k = "up" === g || "down" === g ? "top" : "left", d = "up" === g || "left" === g, v = {};
        a.effects.save(m, p), m.show(), t = f.distance || m["top" === k ? "outerHeight" : "outerWidth"](!0), a.effects.createWrapper(m).css({overflow: "hidden"}), q && m.css(k, d ? isNaN(t) ? "-" + t : -t : t), v[k] = (q ? d ? "+=" : "-=" : d ? "-=" : "+=") + t, m.animate(v, {queue: !1, duration: f.duration, easing: f.easing, complete: function () {
            "hide" === b && m.hide(), a.effects.restore(m, p), a.effects.removeWrapper(m), j()
        }})
    }
}(jQuery), function (a) {
    a.effects.effect.transfer = function (j, m) {
        var w = a(this), q = a(j.to), t = "fixed" === q.css("position"), b = a("body"), v = t ? b.scrollTop() : 0, k = t ? b.scrollLeft() : 0, p = q.offset(), f = {top: p.top - v, left: p.left - k, height: q.innerHeight(), width: q.innerWidth()}, z = w.offset(), g = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(j.className).css({top: z.top - v, left: z.left - k, height: w.innerHeight(), width: w.innerWidth(), position: t ? "fixed" : "absolute"}).animate(f, j.duration, j.easing, function () {
            g.remove(), m()
        })
    }
}(jQuery), function (a) {
    a.widget("ui.menu", {version: "1.10.3", defaultElement: "<ul>", delay: 300, options: {icons: {submenu: "ui-icon-carat-1-e"}, menus: "ul", position: {my: "left top", at: "right top"}, role: "menu", blur: null, focus: null, select: null}, _create: function () {
        this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({role: this.options.role, tabIndex: 0}).bind("click" + this.eventNamespace, a.proxy(function (b) {
            this.options.disabled && b.preventDefault()
        }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({"mousedown .ui-menu-item > a": function (b) {
            b.preventDefault()
        }, "click .ui-state-disabled > a": function (b) {
            b.preventDefault()
        }, "click .ui-menu-item:has(a)": function (b) {
            var c = a(b.target).closest(".ui-menu-item");
            !this.mouseHandled && c.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(b), c.has(".ui-menu").length ? this.expand(b) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
        }, "mouseenter .ui-menu-item": function (b) {
            var c = a(b.currentTarget);
            c.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c)
        }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (d, b) {
            var c = this.active || this.element.children(".ui-menu-item").eq(0);
            b || this.focus(d, c)
        }, blur: function (b) {
            this._delay(function () {
                a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b)
            })
        }, keydown: "_keydown"}), this.refresh(), this._on(this.document, {click: function (b) {
            a(b.target).closest(".ui-menu").length || this.collapseAll(b), this.mouseHandled = !1
        }})
    }, _destroy: function () {
        this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
            var b = a(this);
            b.data("ui-menu-submenu-carat") && b.remove()
        }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
    }, _keydown: function (c) {
        function f(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        var l, g, j, b, k, d = !0;
        switch (c.keyCode) {
            case a.ui.keyCode.PAGE_UP:
                this.previousPage(c);
                break;
            case a.ui.keyCode.PAGE_DOWN:
                this.nextPage(c);
                break;
            case a.ui.keyCode.HOME:
                this._move("first", "first", c);
                break;
            case a.ui.keyCode.END:
                this._move("last", "last", c);
                break;
            case a.ui.keyCode.UP:
                this.previous(c);
                break;
            case a.ui.keyCode.DOWN:
                this.next(c);
                break;
            case a.ui.keyCode.LEFT:
                this.collapse(c);
                break;
            case a.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(c);
                break;
            case a.ui.keyCode.ENTER:
            case a.ui.keyCode.SPACE:
                this._activate(c);
                break;
            case a.ui.keyCode.ESCAPE:
                this.collapse(c);
                break;
            default:
                d = !1, g = this.previousFilter || "", j = String.fromCharCode(c.keyCode), b = !1, clearTimeout(this.filterTimer), j === g ? b = !0 : j = g + j, k = RegExp("^" + f(j), "i"), l = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return k.test(a(this).children("a").text())
                }), l = b && -1 !== l.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : l, l.length || (j = String.fromCharCode(c.keyCode), k = RegExp("^" + f(j), "i"), l = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return k.test(a(this).children("a").text())
                })), l.length ? (this.focus(c, l), l.length > 1 ? (this.previousFilter = j, this.filterTimer = this._delay(function () {
                    delete this.previousFilter
                }, 1000)) : delete this.previousFilter) : delete this.previousFilter
        }
        d && c.preventDefault()
    }, _activate: function (b) {
        this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(b) : this.select(b))
    }, refresh: function () {
        var b, c = this.options.icons.submenu, d = this.element.find(this.options.menus);
        d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role: this.options.role, "aria-hidden": "true", "aria-expanded": "false"}).each(function () {
            var f = a(this), h = f.prev("a"), g = a("<span>").addClass("ui-menu-icon ui-icon " + c).data("ui-menu-submenu-carat", !0);
            h.attr("aria-haspopup", "true").prepend(g), f.attr("aria-labelledby", h.attr("id"))
        }), b = d.add(this.element), b.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex: -1, role: this._itemRole()}), b.children(":not(.ui-menu-item)").each(function () {
            var f = a(this);
            /[^\-\u2014\u2013\s]/.test(f.text()) || f.addClass("ui-widget-content ui-menu-divider")
        }), b.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
    }, _itemRole: function () {
        return{menu: "menuitem", listbox: "option"}[this.options.role]
    }, _setOption: function (c, b) {
        "icons" === c && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu), this._super(c, b)
    }, focus: function (f, b) {
        var c, d;
        this.blur(f, f && "focus" === f.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), f && "keydown" === f.type ? this._close() : this.timer = this._delay(function () {
            this._close()
        }, this.delay), c = b.children(".ui-menu"), c.length && /^mouse/.test(f.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", f, {item: b})
    }, _scrollIntoView: function (c) {
        var d, j, f, g, b, h;
        this._hasScroll() && (d = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, j = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, f = c.offset().top - this.activeMenu.offset().top - d - j, g = this.activeMenu.scrollTop(), b = this.activeMenu.height(), h = c.height(), 0 > f ? this.activeMenu.scrollTop(g + f) : f + h > b && this.activeMenu.scrollTop(g + f - b + h))
    }, blur: function (c, b) {
        b || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", c, {item: this.active}))
    }, _startOpening: function (b) {
        clearTimeout(this.timer), "true" === b.attr("aria-hidden") && (this.timer = this._delay(function () {
            this._close(), this._open(b)
        }, this.delay))
    }, _open: function (b) {
        var c = a.extend({of: this.active}, this.options.position);
        clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
    }, collapseAll: function (b, c) {
        clearTimeout(this.timer), this.timer = this._delay(function () {
            var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
            d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d
        }, this.delay)
    }, _close: function (b) {
        b || (b = this.active ? this.active.parent() : this.element), b.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
    }, collapse: function (c) {
        var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
        b && b.length && (this._close(), this.focus(c, b))
    }, expand: function (c) {
        var b = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
        b && b.length && (this._open(b.parent()), this._delay(function () {
            this.focus(c, b)
        }))
    }, next: function (b) {
        this._move("next", "first", b)
    }, previous: function (b) {
        this._move("prev", "last", b)
    }, isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length
    }, isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length
    }, _move: function (f, b, c) {
        var d;
        this.active && (d = "first" === f || "last" === f ? this.active["first" === f ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[f + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.children(".ui-menu-item")[b]()), this.focus(c, d)
    }, nextPage: function (b) {
        var c, f, d;
        return this.active ? (this.isLastItem() || (this._hasScroll() ? (f = this.active.offset().top, d = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
            return c = a(this), 0 > c.offset().top - f - d
        }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(b), undefined)
    }, previousPage: function (b) {
        var c, f, d;
        return this.active ? (this.isFirstItem() || (this._hasScroll() ? (f = this.active.offset().top, d = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
            return c = a(this), c.offset().top - f + d > 0
        }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(b), undefined)
    }, _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight")
    }, select: function (b) {
        this.active = this.active || a(b.target).closest(".ui-menu-item");
        var c = {item: this.active};
        this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
    }})
}(jQuery), function (E, k) {
    function v(d, a, c) {
        return[parseFloat(d[0]) * (B.test(d[0]) ? a / 100 : 1), parseFloat(d[1]) * (B.test(d[1]) ? c / 100 : 1)]
    }

    function D(a, c) {
        return parseInt(E.css(a, c), 10) || 0
    }

    function z(a) {
        var c = a[0];
        return 9 === c.nodeType ? {width: a.width(), height: a.height(), offset: {top: 0, left: 0}} : E.isWindow(c) ? {width: a.width(), height: a.height(), offset: {top: a.scrollTop(), left: a.scrollLeft()}} : c.preventDefault ? {width: 0, height: 0, offset: {top: c.pageY, left: c.pageX}} : {width: a.outerWidth(), height: a.outerHeight(), offset: a.offset()}
    }

    E.ui = E.ui || {};
    var A, b = Math.max, C = Math.abs, q = Math.round, w = /left|center|right/, g = /top|center|bottom/, F = /[\+\-]\d+(\.[\d]+)?%?/, j = /^\w+/, B = /%$/, m = E.fn.position;
    E.position = {scrollbarWidth: function () {
        if (A !== k) {
            return A
        }
        var d, f, e = E("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), c = e.children()[0];
        return E("body").append(e), d = c.offsetWidth, e.css("overflow", "scroll"), f = c.offsetWidth, d === f && (f = e[0].clientWidth), e.remove(), A = d - f
    }, getScrollInfo: function (a) {
        var c = a.isWindow ? "" : a.element.css("overflow-x"), h = a.isWindow ? "" : a.element.css("overflow-y"), d = "scroll" === c || "auto" === c && a.width < a.element[0].scrollWidth, f = "scroll" === h || "auto" === h && a.height < a.element[0].scrollHeight;
        return{width: f ? E.position.scrollbarWidth() : 0, height: d ? E.position.scrollbarWidth() : 0}
    }, getWithinInfo: function (a) {
        var c = E(a || window), d = E.isWindow(c[0]);
        return{element: c, isWindow: d, offset: c.offset() || {left: 0, top: 0}, scrollLeft: c.scrollLeft(), scrollTop: c.scrollTop(), width: d ? c.width() : c.outerWidth(), height: d ? c.height() : c.outerHeight()}
    }}, E.fn.position = function (d) {
        if (!d || !d.of) {
            return m.apply(this, arguments)
        }
        d = E.extend({}, d);
        var n, r, f, l, s, a, c = E(d.of), G = E.position.getWithinInfo(d.within), t = E.position.getScrollInfo(G), h = (d.collision || "flip").split(" "), u = {};
        return a = z(c), c[0].preventDefault && (d.at = "left top"), r = a.width, f = a.height, l = a.offset, s = E.extend({}, l), E.each(["my", "at"], function () {
            var p, e, o = (d[this] || "").split(" ");
            1 === o.length && (o = w.test(o[0]) ? o.concat(["center"]) : g.test(o[0]) ? ["center"].concat(o) : ["center", "center"]), o[0] = w.test(o[0]) ? o[0] : "center", o[1] = g.test(o[1]) ? o[1] : "center", p = F.exec(o[0]), e = F.exec(o[1]), u[this] = [p ? p[0] : 0, e ? e[0] : 0], d[this] = [j.exec(o[0])[0], j.exec(o[1])[0]]
        }), 1 === h.length && (h[1] = h[0]), "right" === d.at[0] ? s.left += r : "center" === d.at[0] && (s.left += r / 2), "bottom" === d.at[1] ? s.top += f : "center" === d.at[1] && (s.top += f / 2), n = v(u.at, r, f), s.left += n[0], s.top += n[1], this.each(function () {
            var N, M, o = E(this), Q = o.outerWidth(), H = o.outerHeight(), K = D(this, "marginLeft"), e = D(this, "marginTop"), J = Q + K + D(this, "marginRight") + t.width, p = H + e + D(this, "marginBottom") + t.height, L = E.extend({}, s), O = v(u.my, o.outerWidth(), o.outerHeight());
            "right" === d.my[0] ? L.left -= Q : "center" === d.my[0] && (L.left -= Q / 2), "bottom" === d.my[1] ? L.top -= H : "center" === d.my[1] && (L.top -= H / 2), L.left += O[0], L.top += O[1], E.support.offsetFractions || (L.left = q(L.left), L.top = q(L.top)), N = {marginLeft: K, marginTop: e}, E.each(["left", "top"], function (I, P) {
                E.ui.position[h[I]] && E.ui.position[h[I]][P](L, {targetWidth: r, targetHeight: f, elemWidth: Q, elemHeight: H, collisionPosition: N, collisionWidth: J, collisionHeight: p, offset: [n[0] + O[0], n[1] + O[1]], my: d.my, at: d.at, within: G, elem: o})
            }), d.using && (M = function (U) {
                var P = l.left - L.left, T = P + r - Q, R = l.top - L.top, S = R + f - H, I = {target: {element: c, left: l.left, top: l.top, width: r, height: f}, element: {element: o, left: L.left, top: L.top, width: Q, height: H}, horizontal: 0 > T ? "left" : P > 0 ? "right" : "center", vertical: 0 > S ? "top" : R > 0 ? "bottom" : "middle"};
                Q > r && r > C(P + T) && (I.horizontal = "center"), H > f && f > C(R + S) && (I.vertical = "middle"), I.important = b(C(P), C(T)) > b(C(R), C(S)) ? "horizontal" : "vertical", d.using.call(this, U, I)
            }), o.offset(E.extend(L, {using: M}))
        })
    }, E.ui.position = {fit: {left: function (I, a) {
        var d, H = a.within, p = H.isWindow ? H.scrollLeft : H.offset.left, u = H.width, G = I.left - a.collisionPosition.marginLeft, c = p - G, f = G + a.collisionWidth - u - p;
        a.collisionWidth > u ? c > 0 && 0 >= f ? (d = I.left + c + a.collisionWidth - u - p, I.left += c - d) : I.left = f > 0 && 0 >= c ? p : c > f ? p + u - a.collisionWidth : p : c > 0 ? I.left += c : f > 0 ? I.left -= f : I.left = b(I.left - G, I.left)
    }, top: function (I, a) {
        var d, H = a.within, p = H.isWindow ? H.scrollTop : H.offset.top, u = a.within.height, G = I.top - a.collisionPosition.marginTop, c = p - G, f = G + a.collisionHeight - u - p;
        a.collisionHeight > u ? c > 0 && 0 >= f ? (d = I.top + c + a.collisionHeight - u - p, I.top += c - d) : I.top = f > 0 && 0 >= c ? p : c > f ? p + u - a.collisionHeight : p : c > 0 ? I.top += c : f > 0 ? I.top -= f : I.top = b(I.top - G, I.top)
    }}, flip: {left: function (R, I) {
        var L, Q, N = I.within, O = N.offset.left + N.scrollLeft, r = N.width, K = N.isWindow ? N.scrollLeft : N.offset.left, M = R.left - I.collisionPosition.marginLeft, G = M - K, S = M + I.collisionWidth - r - K, H = "left" === I.my[0] ? -I.elemWidth : "right" === I.my[0] ? I.elemWidth : 0, P = "left" === I.at[0] ? I.targetWidth : "right" === I.at[0] ? -I.targetWidth : 0, J = -2 * I.offset[0];
        0 > G ? (L = R.left + H + P + J + I.collisionWidth - r - O, (0 > L || C(G) > L) && (R.left += H + P + J)) : S > 0 && (Q = R.left - I.collisionPosition.marginLeft + H + P + J - K, (Q > 0 || S > C(Q)) && (R.left += H + P + J))
    }, top: function (S, I) {
        var M, R, O = I.within, P = O.offset.top + O.scrollTop, r = O.height, L = O.isWindow ? O.scrollTop : O.offset.top, N = S.top - I.collisionPosition.marginTop, G = N - L, T = N + I.collisionHeight - r - L, H = "top" === I.my[1], Q = H ? -I.elemHeight : "bottom" === I.my[1] ? I.elemHeight : 0, J = "top" === I.at[1] ? I.targetHeight : "bottom" === I.at[1] ? -I.targetHeight : 0, K = -2 * I.offset[1];
        0 > G ? (R = S.top + Q + J + K + I.collisionHeight - r - P, S.top + Q + J + K > G && (0 > R || C(G) > R) && (S.top += Q + J + K)) : T > 0 && (M = S.top - I.collisionPosition.marginTop + Q + J + K - L, S.top + Q + J + K > T && (M > 0 || T > C(M)) && (S.top += Q + J + K))
    }}, flipfit: {left: function () {
        E.ui.position.flip.left.apply(this, arguments), E.ui.position.fit.left.apply(this, arguments)
    }, top: function () {
        E.ui.position.flip.top.apply(this, arguments), E.ui.position.fit.top.apply(this, arguments)
    }}}, function () {
        var d, f, t, h, l, c = document.getElementsByTagName("body")[0], p = document.createElement("div");
        d = document.createElement(c ? "div" : "body"), t = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"}, c && E.extend(t, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (l in t) {
            d.style[l] = t[l]
        }
        d.appendChild(p), f = c || document.documentElement, f.insertBefore(d, f.firstChild), p.style.cssText = "position: absolute; left: 10.7432222px;", h = E(p).offset().left, E.support.offsetFractions = h > 10 && 11 > h, d.innerHTML = "", f.removeChild(d)
    }()
}(jQuery), function (b, a) {
    b.widget("ui.progressbar", {version: "1.10.3", options: {max: 100, value: 0, change: null, complete: null}, min: 0, _create: function () {
        this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role: "progressbar", "aria-valuemin": this.min}), this.valueDiv = b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
    }, _destroy: function () {
        this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
    }, value: function (c) {
        return c === a ? this.options.value : (this.options.value = this._constrainedValue(c), this._refreshValue(), a)
    }, _constrainedValue: function (c) {
        return c === a && (c = this.options.value), this.indeterminate = c === !1, "number" != typeof c && (c = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, c))
    }, _setOptions: function (d) {
        var c = d.value;
        delete d.value, this._super(d), this.options.value = this._constrainedValue(c), this._refreshValue()
    }, _setOption: function (d, c) {
        "max" === d && (c = Math.max(this.min, c)), this._super(d, c)
    }, _percentage: function () {
        return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
    }, _refreshValue: function () {
        var c = this.options.value, d = this._percentage();
        this.valueDiv.toggle(this.indeterminate || c > this.min).toggleClass("ui-corner-right", c === this.options.max).width(d.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = b("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({"aria-valuemax": this.options.max, "aria-valuenow": c}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== c && (this.oldValue = c, this._trigger("change")), c === this.options.max && this._trigger("complete")
    }})
}(jQuery), function (b) {
    var a = 5;
    b.widget("ui.slider", b.ui.mouse, {version: "1.10.3", widgetEventPrefix: "slide", options: {animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null}, _create: function () {
        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
    }, _refresh: function () {
        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
    }, _createHandles: function () {
        var d, f, j = this.options, g = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), h = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", c = [];
        for (f = j.values && j.values.length || 1, g.length > f && (g.slice(f).remove(), g = g.slice(0, f)), d = g.length; f > d; d++) {
            c.push(h)
        }
        this.handles = g.add(b(c.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (k) {
            b(this).data("ui-slider-handle-index", k)
        })
    }, _createRange: function () {
        var c = this.options, d = "";
        c.range ? (c.range === !0 && (c.values ? c.values.length && 2 !== c.values.length ? c.values = [c.values[0], c.values[0]] : b.isArray(c.values) && (c.values = c.values.slice(0)) : c.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left: "", bottom: ""}) : (this.range = b("<div></div>").appendTo(this.element), d = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(d + ("min" === c.range || "max" === c.range ? " ui-slider-range-" + c.range : ""))) : this.range = b([])
    }, _setupEvents: function () {
        var c = this.handles.add(this.range).filter("a");
        this._off(c), this._on(c, this._handleEvents), this._hoverable(c), this._focusable(c)
    }, _destroy: function () {
        this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
    }, _mouseCapture: function (g) {
        var k, v, p, q, d, t, j, m, f = this, w = this.options;
        return w.disabled ? !1 : (this.elementSize = {width: this.element.outerWidth(), height: this.element.outerHeight()}, this.elementOffset = this.element.offset(), k = {x: g.pageX, y: g.pageY}, v = this._normValueFromMouse(k), p = this._valueMax() - this._valueMin() + 1, this.handles.each(function (c) {
            var h = Math.abs(v - f.values(c));
            (p > h || p === h && (c === f._lastChangedValue || f.values(c) === w.min)) && (p = h, q = b(this), d = c)
        }), t = this._start(g, d), t === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = d, q.addClass("ui-state-active").focus(), j = q.offset(), m = !b(g.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = m ? {left: 0, top: 0} : {left: g.pageX - j.left - q.width() / 2, top: g.pageY - j.top - q.height() / 2 - (parseInt(q.css("borderTopWidth"), 10) || 0) - (parseInt(q.css("borderBottomWidth"), 10) || 0) + (parseInt(q.css("marginTop"), 10) || 0)}, this.handles.hasClass("ui-state-hover") || this._slide(g, d, v), this._animateOff = !0, !0))
    }, _mouseStart: function () {
        return !0
    }, _mouseDrag: function (f) {
        var c = {x: f.pageX, y: f.pageY}, d = this._normValueFromMouse(c);
        return this._slide(f, this._handleIndex, d), !1
    }, _mouseStop: function (c) {
        return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(c, this._handleIndex), this._change(c, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
    }, _detectOrientation: function () {
        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
    }, _normValueFromMouse: function (j) {
        var c, d, h, f, g;
        return"horizontal" === this.orientation ? (c = this.elementSize.width, d = j.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (c = this.elementSize.height, d = j.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), h = d / c, h > 1 && (h = 1), 0 > h && (h = 0), "vertical" === this.orientation && (h = 1 - h), f = this._valueMax() - this._valueMin(), g = this._valueMin() + h * f, this._trimAlignValue(g)
    }, _start: function (f, c) {
        var d = {handle: this.handles[c], value: this.value()};
        return this.options.values && this.options.values.length && (d.value = this.values(c), d.values = this.values()), this._trigger("start", f, d)
    }, _slide: function (j, c, d) {
        var h, f, g;
        this.options.values && this.options.values.length ? (h = this.values(c ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === c && d > h || 1 === c && h > d) && (d = h), d !== this.values(c) && (f = this.values(), f[c] = d, g = this._trigger("slide", j, {handle: this.handles[c], value: d, values: f}), h = this.values(c ? 0 : 1), g !== !1 && this.values(c, d, !0))) : d !== this.value() && (g = this._trigger("slide", j, {handle: this.handles[c], value: d}), g !== !1 && this.value(d))
    }, _stop: function (f, c) {
        var d = {handle: this.handles[c], value: this.value()};
        this.options.values && this.options.values.length && (d.value = this.values(c), d.values = this.values()), this._trigger("stop", f, d)
    }, _change: function (f, c) {
        if (!this._keySliding && !this._mouseSliding) {
            var d = {handle: this.handles[c], value: this.value()};
            this.options.values && this.options.values.length && (d.value = this.values(c), d.values = this.values()), this._lastChangedValue = c, this._trigger("change", f, d)
        }
    }, value: function (c) {
        return arguments.length ? (this.options.value = this._trimAlignValue(c), this._refreshValue(), this._change(null, 0), undefined) : this._value()
    }, values: function (c, d) {
        var h, f, g;
        if (arguments.length > 1) {
            return this.options.values[c] = this._trimAlignValue(d), this._refreshValue(), this._change(null, c), undefined
        }
        if (!arguments.length) {
            return this._values()
        }
        if (!b.isArray(arguments[0])) {
            return this.options.values && this.options.values.length ? this._values(c) : this.value()
        }
        for (h = this.options.values, f = arguments[0], g = 0; h.length > g; g += 1) {
            h[g] = this._trimAlignValue(f[g]), this._change(null, g)
        }
        this._refreshValue()
    }, _setOption: function (c, d) {
        var g, f = 0;
        switch ("range" === c && this.options.range === !0 && ("min" === d ? (this.options.value = this._values(0), this.options.values = null) : "max" === d && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), b.isArray(this.options.values) && (f = this.options.values.length), b.Widget.prototype._setOption.apply(this, arguments), c) {
            case"orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case"value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case"values":
                for (this._animateOff = !0, this._refreshValue(), g = 0; f > g; g += 1) {
                    this._change(null, g)
                }
                this._animateOff = !1;
                break;
            case"min":
            case"max":
                this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                break;
            case"range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1
        }
    }, _value: function () {
        var c = this.options.value;
        return c = this._trimAlignValue(c)
    }, _values: function (g) {
        var c, d, f;
        if (arguments.length) {
            return c = this.options.values[g], c = this._trimAlignValue(c)
        }
        if (this.options.values && this.options.values.length) {
            for (d = this.options.values.slice(), f = 0; d.length > f; f += 1) {
                d[f] = this._trimAlignValue(d[f])
            }
            return d
        }
        return[]
    }, _trimAlignValue: function (g) {
        if (this._valueMin() >= g) {
            return this._valueMin()
        }
        if (g >= this._valueMax()) {
            return this._valueMax()
        }
        var c = this.options.step > 0 ? this.options.step : 1, d = (g - this._valueMin()) % c, f = g - d;
        return 2 * Math.abs(d) >= c && (f += d > 0 ? c : -c), parseFloat(f.toFixed(5))
    }, _valueMin: function () {
        return this.options.min
    }, _valueMax: function () {
        return this.options.max
    }, _refreshValue: function () {
        var g, k, u, p, q, d = this.options.range, t = this.options, j = this, m = this._animateOff ? !1 : t.animate, f = {};
        this.options.values && this.options.values.length ? this.handles.each(function (c) {
            k = 100 * ((j.values(c) - j._valueMin()) / (j._valueMax() - j._valueMin())), f["horizontal" === j.orientation ? "left" : "bottom"] = k + "%", b(this).stop(1, 1)[m ? "animate" : "css"](f, t.animate), j.options.range === !0 && ("horizontal" === j.orientation ? (0 === c && j.range.stop(1, 1)[m ? "animate" : "css"]({left: k + "%"}, t.animate), 1 === c && j.range[m ? "animate" : "css"]({width: k - g + "%"}, {queue: !1, duration: t.animate})) : (0 === c && j.range.stop(1, 1)[m ? "animate" : "css"]({bottom: k + "%"}, t.animate), 1 === c && j.range[m ? "animate" : "css"]({height: k - g + "%"}, {queue: !1, duration: t.animate}))), g = k
        }) : (u = this.value(), p = this._valueMin(), q = this._valueMax(), k = q !== p ? 100 * ((u - p) / (q - p)) : 0, f["horizontal" === this.orientation ? "left" : "bottom"] = k + "%", this.handle.stop(1, 1)[m ? "animate" : "css"](f, t.animate), "min" === d && "horizontal" === this.orientation && this.range.stop(1, 1)[m ? "animate" : "css"]({width: k + "%"}, t.animate), "max" === d && "horizontal" === this.orientation && this.range[m ? "animate" : "css"]({width: 100 - k + "%"}, {queue: !1, duration: t.animate}), "min" === d && "vertical" === this.orientation && this.range.stop(1, 1)[m ? "animate" : "css"]({height: k + "%"}, t.animate), "max" === d && "vertical" === this.orientation && this.range[m ? "animate" : "css"]({height: 100 - k + "%"}, {queue: !1, duration: t.animate}))
    }, _handleEvents: {keydown: function (d) {
        var h, e, f, c, g = b(d.target).data("ui-slider-handle-index");
        switch (d.keyCode) {
            case b.ui.keyCode.HOME:
            case b.ui.keyCode.END:
            case b.ui.keyCode.PAGE_UP:
            case b.ui.keyCode.PAGE_DOWN:
            case b.ui.keyCode.UP:
            case b.ui.keyCode.RIGHT:
            case b.ui.keyCode.DOWN:
            case b.ui.keyCode.LEFT:
                if (d.preventDefault(), !this._keySliding && (this._keySliding = !0, b(d.target).addClass("ui-state-active"), h = this._start(d, g), h === !1)) {
                    return
                }
        }
        switch (c = this.options.step, e = f = this.options.values && this.options.values.length ? this.values(g) : this.value(), d.keyCode) {
            case b.ui.keyCode.HOME:
                f = this._valueMin();
                break;
            case b.ui.keyCode.END:
                f = this._valueMax();
                break;
            case b.ui.keyCode.PAGE_UP:
                f = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / a);
                break;
            case b.ui.keyCode.PAGE_DOWN:
                f = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / a);
                break;
            case b.ui.keyCode.UP:
            case b.ui.keyCode.RIGHT:
                if (e === this._valueMax()) {
                    return
                }
                f = this._trimAlignValue(e + c);
                break;
            case b.ui.keyCode.DOWN:
            case b.ui.keyCode.LEFT:
                if (e === this._valueMin()) {
                    return
                }
                f = this._trimAlignValue(e - c)
        }
        this._slide(d, g, f)
    }, click: function (c) {
        c.preventDefault()
    }, keyup: function (c) {
        var d = b(c.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(c, d), this._change(c, d), b(c.target).removeClass("ui-state-active"))
    }}})
}(jQuery), function (b) {
    function a(c) {
        return function () {
            var d = this.element.val();
            c.apply(this, arguments), this._refresh(), d !== this.element.val() && this._trigger("change")
        }
    }

    b.widget("ui.spinner", {version: "1.10.3", defaultElement: "<input>", widgetEventPrefix: "spin", options: {culture: null, icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"}, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null}, _create: function () {
        this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {beforeunload: function () {
            this.element.removeAttr("autocomplete")
        }})
    }, _getCreateOptions: function () {
        var c = {}, d = this.element;
        return b.each(["min", "max", "step"], function (g, f) {
            var e = d.attr(f);
            void 0 !== e && e.length && (c[f] = e)
        }), c
    }, _events: {keydown: function (c) {
        this._start(c) && this._keydown(c) && c.preventDefault()
    }, keyup: "_stop", focus: function () {
        this.previous = this.element.val()
    }, blur: function (c) {
        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", c), void 0)
    }, mousewheel: function (d, c) {
        if (c) {
            if (!this.spinning && !this._start(d)) {
                return !1
            }
            this._spin((c > 0 ? 1 : -1) * this.options.step, d), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                this.spinning && this._stop(d)
            }, 100), d.preventDefault()
        }
    }, "mousedown .ui-spinner-button": function (c) {
        function d() {
            var e = this.element[0] === this.document[0].activeElement;
            e || (this.element.focus(), this.previous = f, this._delay(function () {
                this.previous = f
            }))
        }

        var f;
        f = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), c.preventDefault(), d.call(this), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur, d.call(this)
        }), this._start(c) !== !1 && this._repeat(null, b(c.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, c)
    }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (c) {
        return b(c.currentTarget).hasClass("ui-state-active") ? this._start(c) === !1 ? !1 : (this._repeat(null, b(c.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, c), void 0) : void 0
    }, "mouseleave .ui-spinner-button": "_stop"}, _draw: function () {
        var c = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        this.element.attr("role", "spinbutton"), this.buttons = c.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(0.5 * c.height()) && c.height() > 0 && c.height(c.height()), this.options.disabled && this.disable()
    }, _keydown: function (c) {
        var d = this.options, f = b.ui.keyCode;
        switch (c.keyCode) {
            case f.UP:
                return this._repeat(null, 1, c), !0;
            case f.DOWN:
                return this._repeat(null, -1, c), !0;
            case f.PAGE_UP:
                return this._repeat(null, d.page, c), !0;
            case f.PAGE_DOWN:
                return this._repeat(null, -d.page, c), !0
        }
        return !1
    }, _uiSpinnerHtml: function () {
        return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
    }, _buttonHtml: function () {
        return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
    }, _start: function (c) {
        return this.spinning || this._trigger("start", c) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
    }, _repeat: function (f, c, d) {
        f = f || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
            this._repeat(40, c, d)
        }, f), this._spin(c * this.options.step, d)
    }, _spin: function (f, c) {
        var d = this.value() || 0;
        this.counter || (this.counter = 1), d = this._adjustValue(d + f * this._increment(this.counter)), this.spinning && this._trigger("spin", c, {value: d}) === !1 || (this._value(d), this.counter++)
    }, _increment: function (c) {
        var d = this.options.incremental;
        return d ? b.isFunction(d) ? d(c) : Math.floor(c * c * c / 50000 - c * c / 500 + 17 * c / 200 + 1) : 1
    }, _precision: function () {
        var c = this._precisionOf(this.options.step);
        return null !== this.options.min && (c = Math.max(c, this._precisionOf(this.options.min))), c
    }, _precisionOf: function (f) {
        var c = "" + f, d = c.indexOf(".");
        return -1 === d ? 0 : c.length - d - 1
    }, _adjustValue: function (g) {
        var c, d, f = this.options;
        return c = null !== f.min ? f.min : 0, d = g - c, d = Math.round(d / f.step) * f.step, g = c + d, g = parseFloat(g.toFixed(this._precision())), null !== f.max && g > f.max ? f.max : null !== f.min && f.min > g ? f.min : g
    }, _stop: function (c) {
        this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", c))
    }, _setOption: function (f, c) {
        if ("culture" === f || "numberFormat" === f) {
            var d = this._parse(this.element.val());
            return this.options[f] = c, this.element.val(this._format(d)), void 0
        }
        ("max" === f || "min" === f || "step" === f) && "string" == typeof c && (c = this._parse(c)), "icons" === f && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(c.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(c.down)), this._super(f, c), "disabled" === f && (c ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
    }, _setOptions: a(function (c) {
        this._super(c), this._value(this.element.val())
    }), _parse: function (c) {
        return"string" == typeof c && "" !== c && (c = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(c, 10, this.options.culture) : +c), "" === c || isNaN(c) ? null : c
    }, _format: function (c) {
        return"" === c ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(c, this.options.numberFormat, this.options.culture) : c
    }, _refresh: function () {
        this.element.attr({"aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val())})
    }, _value: function (f, c) {
        var d;
        "" !== f && (d = this._parse(f), null !== d && (c || (d = this._adjustValue(d)), f = this._format(d))), this.element.val(f), this._refresh()
    }, _destroy: function () {
        this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
    }, stepUp: a(function (c) {
        this._stepUp(c)
    }), _stepUp: function (c) {
        this._start() && (this._spin((c || 1) * this.options.step), this._stop())
    }, stepDown: a(function (c) {
        this._stepDown(c)
    }), _stepDown: function (c) {
        this._start() && (this._spin((c || 1) * -this.options.step), this._stop())
    }, pageUp: a(function (c) {
        this._stepUp((c || 1) * this.options.page)
    }), pageDown: a(function (c) {
        this._stepDown((c || 1) * this.options.page)
    }), value: function (c) {
        return arguments.length ? (a(this._value).call(this, c), void 0) : this._parse(this.element.val())
    }, widget: function () {
        return this.uiSpinner
    }})
}(jQuery), function (g, a) {
    function b() {
        return ++c
    }

    function f(e) {
        return e.hash.length > 1 && decodeURIComponent(e.href.replace(d, "")) === decodeURIComponent(location.href.replace(d, ""))
    }

    var c = 0, d = /#.*$/;
    g.widget("ui.tabs", {version: "1.10.3", delay: 300, options: {active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null}, _create: function () {
        var h = this, j = this.options;
        this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", j.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (k) {
            g(this).is(".ui-state-disabled") && k.preventDefault()
        }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
            g(this).closest("li").is(".ui-state-disabled") && this.blur()
        }), this._processTabs(), j.active = this._initialActive(), g.isArray(j.disabled) && (j.disabled = g.unique(j.disabled.concat(g.map(this.tabs.filter(".ui-state-disabled"), function (e) {
            return h.tabs.index(e)
        }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(j.active) : g(), this._refresh(), this.active.length && this.load(j.active)
    }, _initialActive: function () {
        var e = this.options.active, j = this.options.collapsible, h = location.hash.substring(1);
        return null === e && (h && this.tabs.each(function (l, k) {
            return g(k).attr("aria-controls") === h ? (e = l, !1) : a
        }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = j ? !1 : 0)), !j && e === !1 && this.anchors.length && (e = 0), e
    }, _getCreateEventData: function () {
        return{tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : g()}
    }, _tabKeydown: function (e) {
        var k = g(this.document[0].activeElement).closest("li"), h = this.tabs.index(k), j = !0;
        if (!this._handlePageNav(e)) {
            switch (e.keyCode) {
                case g.ui.keyCode.RIGHT:
                case g.ui.keyCode.DOWN:
                    h++;
                    break;
                case g.ui.keyCode.UP:
                case g.ui.keyCode.LEFT:
                    j = !1, h--;
                    break;
                case g.ui.keyCode.END:
                    h = this.anchors.length - 1;
                    break;
                case g.ui.keyCode.HOME:
                    h = 0;
                    break;
                case g.ui.keyCode.SPACE:
                    return e.preventDefault(), clearTimeout(this.activating), this._activate(h), a;
                case g.ui.keyCode.ENTER:
                    return e.preventDefault(), clearTimeout(this.activating), this._activate(h === this.options.active ? !1 : h), a;
                default:
                    return
            }
            e.preventDefault(), clearTimeout(this.activating), h = this._focusNextTab(h, j), e.ctrlKey || (k.attr("aria-selected", "false"), this.tabs.eq(h).attr("aria-selected", "true"), this.activating = this._delay(function () {
                this.option("active", h)
            }, this.delay))
        }
    }, _panelKeydown: function (h) {
        this._handlePageNav(h) || h.ctrlKey && h.keyCode === g.ui.keyCode.UP && (h.preventDefault(), this.active.focus())
    }, _handlePageNav: function (e) {
        return e.altKey && e.keyCode === g.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === g.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : a
    }, _findNextTab: function (h, j) {
        function l() {
            return h > k && (h = 0), 0 > h && (h = k), h
        }

        for (var k = this.tabs.length - 1; -1 !== g.inArray(l(), this.options.disabled);) {
            h = j ? h + 1 : h - 1
        }
        return h
    }, _focusNextTab: function (j, h) {
        return j = this._findNextTab(j, h), this.tabs.eq(j).focus(), j
    }, _setOption: function (h, e) {
        return"active" === h ? (this._activate(e), a) : "disabled" === h ? (this._setupDisabled(e), a) : (this._super(h, e), "collapsible" === h && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === h && this._setupEvents(e), "heightStyle" === h && this._setupHeightStyle(e), a)
    }, _tabId: function (e) {
        return e.attr("aria-controls") || "ui-tabs-" + b()
    }, _sanitizeSelector: function (e) {
        return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
    }, refresh: function () {
        var h = this.options, j = this.tablist.children(":has(a[href])");
        h.disabled = g.map(j.filter(".ui-state-disabled"), function (e) {
            return j.index(e)
        }), this._processTabs(), h.active !== !1 && this.anchors.length ? this.active.length && !g.contains(this.tablist[0], this.active[0]) ? this.tabs.length === h.disabled.length ? (h.active = !1, this.active = g()) : this._activate(this._findNextTab(Math.max(0, h.active - 1), !1)) : h.active = this.tabs.index(this.active) : (h.active = !1, this.active = g()), this._refresh()
    }, _refresh: function () {
        this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({"aria-selected": "false", tabIndex: -1}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded": "false", "aria-hidden": "true"}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected": "true", tabIndex: 0}), this._getPanelForTab(this.active).show().attr({"aria-expanded": "true", "aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
    }, _processTabs: function () {
        var h = this;
        this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role: "tab", tabIndex: -1}), this.anchors = this.tabs.map(function () {
            return g("a", this)[0]
        }).addClass("ui-tabs-anchor").attr({role: "presentation", tabIndex: -1}), this.panels = g(), this.anchors.each(function (m, q) {
            var s, e, t, k = g(q).uniqueId().attr("id"), p = g(q).closest("li"), j = p.attr("aria-controls");
            f(q) ? (s = q.hash, e = h.element.find(h._sanitizeSelector(s))) : (t = h._tabId(p), s = "#" + t, e = h.element.find(s), e.length || (e = h._createPanel(t), e.insertAfter(h.panels[m - 1] || h.tablist)), e.attr("aria-live", "polite")), e.length && (h.panels = h.panels.add(e)), j && p.data("ui-tabs-aria-controls", j), p.attr({"aria-controls": s.substring(1), "aria-labelledby": k}), e.attr("aria-labelledby", k)
        }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
    }, _getList: function () {
        return this.element.find("ol,ul").eq(0)
    }, _createPanel: function (h) {
        return g("<div>").attr("id", h).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
    }, _setupDisabled: function (h) {
        g.isArray(h) && (h.length ? h.length === this.anchors.length && (h = !0) : h = !1);
        for (var j, k = 0; j = this.tabs[k]; k++) {
            h === !0 || -1 !== g.inArray(k, h) ? g(j).addClass("ui-state-disabled").attr("aria-disabled", "true") : g(j).removeClass("ui-state-disabled").removeAttr("aria-disabled")
        }
        this.options.disabled = h
    }, _setupEvents: function (h) {
        var j = {click: function (e) {
            e.preventDefault()
        }};
        h && g.each(h.split(" "), function (l, k) {
            j[k] = "_eventHandler"
        }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, j), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
    }, _setupHeightStyle: function (h) {
        var j, k = this.element.parent();
        "fill" === h ? (j = k.height(), j -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
            var l = g(this), m = l.css("position");
            "absolute" !== m && "fixed" !== m && (j -= l.outerHeight(!0))
        }), this.element.children().not(this.panels).each(function () {
            j -= g(this).outerHeight(!0)
        }), this.panels.each(function () {
            g(this).height(Math.max(0, j - g(this).innerHeight() + g(this).height()))
        }).css("overflow", "auto")) : "auto" === h && (j = 0, this.panels.each(function () {
            j = Math.max(j, g(this).height("").height())
        }).height(j))
    }, _eventHandler: function (m) {
        var q = this.options, z = this.active, u = g(m.currentTarget), v = u.closest("li"), j = v[0] === z[0], w = j && q.collapsible, p = w ? g() : this._getPanelForTab(v), t = z.length ? this._getPanelForTab(z) : g(), k = {oldTab: z, oldPanel: t, newTab: w ? g() : v, newPanel: p};
        m.preventDefault(), v.hasClass("ui-state-disabled") || v.hasClass("ui-tabs-loading") || this.running || j && !q.collapsible || this._trigger("beforeActivate", m, k) === !1 || (q.active = w ? !1 : this.tabs.index(v), this.active = j ? g() : v, this.xhr && this.xhr.abort(), t.length || p.length || g.error("jQuery UI Tabs: Mismatching fragment identifier."), p.length && this.load(this.tabs.index(v), m), this._toggle(m, k))
    }, _toggle: function (j, k) {
        function q() {
            m.running = !1, m._trigger("activate", j, k)
        }

        function l() {
            k.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), h.length && m.options.show ? m._show(h, m.options.show, q) : (h.show(), q())
        }

        var m = this, h = k.newPanel, p = k.oldPanel;
        this.running = !0, p.length && this.options.hide ? this._hide(p, this.options.hide, function () {
            k.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), l()
        }) : (k.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), p.hide(), l()), p.attr({"aria-expanded": "false", "aria-hidden": "true"}), k.oldTab.attr("aria-selected", "false"), h.length && p.length ? k.oldTab.attr("tabIndex", -1) : h.length && this.tabs.filter(function () {
            return 0 === g(this).attr("tabIndex")
        }).attr("tabIndex", -1), h.attr({"aria-expanded": "true", "aria-hidden": "false"}), k.newTab.attr({"aria-selected": "true", tabIndex: 0})
    }, _activate: function (h) {
        var j, k = this._findActive(h);
        k[0] !== this.active[0] && (k.length || (k = this.active), j = k.find(".ui-tabs-anchor")[0], this._eventHandler({target: j, currentTarget: j, preventDefault: g.noop}))
    }, _findActive: function (h) {
        return h === !1 ? g() : this.tabs.eq(h)
    }, _getIndex: function (e) {
        return"string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
    }, _destroy: function () {
        this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
            g.data(this, "ui-tabs-destroy") ? g(this).remove() : g(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
        }), this.tabs.each(function () {
            var h = g(this), j = h.data("ui-tabs-aria-controls");
            j ? h.attr("aria-controls", j).removeData("ui-tabs-aria-controls") : h.removeAttr("aria-controls")
        }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
    }, enable: function (e) {
        var h = this.options.disabled;
        h !== !1 && (e === a ? h = !1 : (e = this._getIndex(e), h = g.isArray(h) ? g.map(h, function (j) {
            return j !== e ? j : null
        }) : g.map(this.tabs, function (k, j) {
            return j !== e ? j : null
        })), this._setupDisabled(h))
    }, disable: function (e) {
        var h = this.options.disabled;
        if (h !== !0) {
            if (e === a) {
                h = !0
            } else {
                if (e = this._getIndex(e), -1 !== g.inArray(e, h)) {
                    return
                }
                h = g.isArray(h) ? g.merge([e], h).sort() : [e]
            }
            this._setupDisabled(h)
        }
    }, load: function (k, m) {
        k = this._getIndex(k);
        var p = this, q = this.tabs.eq(k), j = q.find(".ui-tabs-anchor"), s = this._getPanelForTab(q), l = {tab: q, panel: s};
        f(j[0]) || (this.xhr = g.ajax(this._ajaxSettings(j, m, l)), this.xhr && "canceled" !== this.xhr.statusText && (q.addClass("ui-tabs-loading"), s.attr("aria-busy", "true"), this.xhr.success(function (e) {
            setTimeout(function () {
                s.html(e), p._trigger("load", m, l)
            }, 1)
        }).complete(function (n, h) {
            setTimeout(function () {
                "abort" === h && p.panels.stop(!1, !0), q.removeClass("ui-tabs-loading"), s.removeAttr("aria-busy"), n === p.xhr && delete p.xhr
            }, 1)
        })))
    }, _ajaxSettings: function (h, j, l) {
        var k = this;
        return{url: h.attr("href"), beforeSend: function (m, n) {
            return k._trigger("beforeLoad", j, g.extend({jqXHR: m, ajaxSettings: n}, l))
        }}
    }, _getPanelForTab: function (h) {
        var j = g(h).attr("aria-controls");
        return this.element.find(this._sanitizeSelector("#" + j))
    }})
}(jQuery), function (d) {
    function a(f, g) {
        var h = (f.attr("aria-describedby") || "").split(/\s+/);
        h.push(g), f.data("ui-tooltip-id", g).attr("aria-describedby", d.trim(h.join(" ")))
    }

    function b(f) {
        var g = f.data("ui-tooltip-id"), j = (f.attr("aria-describedby") || "").split(/\s+/), h = d.inArray(g, j);
        -1 !== h && j.splice(h, 1), f.removeData("ui-tooltip-id"), j = d.trim(j.join(" ")), j ? f.attr("aria-describedby", j) : f.removeAttr("aria-describedby")
    }

    var c = 0;
    d.widget("ui.tooltip", {version: "1.10.3", options: {content: function () {
        var f = d(this).attr("title") || "";
        return d("<a>").text(f).html()
    }, hide: !0, items: "[title]:not([disabled])", position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"}, show: !0, tooltipClass: null, track: !1, close: null, open: null}, _create: function () {
        this._on({mouseover: "open", focusin: "open"}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
    }, _setOption: function (f, g) {
        var h = this;
        return"disabled" === f ? (this[g ? "_disable" : "_enable"](), this.options[f] = g, void 0) : (this._super(f, g), "content" === f && d.each(this.tooltips, function (k, j) {
            h._updateContent(j)
        }), void 0)
    }, _disable: function () {
        var f = this;
        d.each(this.tooltips, function (e, h) {
            var g = d.Event("blur");
            g.target = g.currentTarget = h[0], f.close(g, !0)
        }), this.element.find(this.options.items).addBack().each(function () {
            var g = d(this);
            g.is("[title]") && g.data("ui-tooltip-title", g.attr("title")).attr("title", "")
        })
    }, _enable: function () {
        this.element.find(this.options.items).addBack().each(function () {
            var f = d(this);
            f.data("ui-tooltip-title") && f.attr("title", f.data("ui-tooltip-title"))
        })
    }, open: function (f) {
        var g = this, h = d(f ? f.target : this.element).closest(this.options.items);
        h.length && !h.data("ui-tooltip-id") && (h.attr("title") && h.data("ui-tooltip-title", h.attr("title")), h.data("ui-tooltip-open", !0), f && "mouseover" === f.type && h.parents().each(function () {
            var j, k = d(this);
            k.data("ui-tooltip-open") && (j = d.Event("blur"), j.target = j.currentTarget = this, g.close(j, !0)), k.attr("title") && (k.uniqueId(), g.parents[this.id] = {element: this, title: k.attr("title")}, k.attr("title", ""))
        }), this._updateContent(h, f))
    }, _updateContent: function (l, f) {
        var g, k = this.options.content, h = this, j = f ? f.type : null;
        return"string" == typeof k ? this._open(f, l, k) : (g = k.call(l[0], function (e) {
            l.data("ui-tooltip-open") && h._delay(function () {
                f && (f.type = j), this._open(f, l, e)
            })
        }), g && this._open(f, l, g), void 0)
    }, _open: function (g, q, k) {
        function m(h) {
            j.of = h, e.is(":hidden") || e.position(j)
        }

        var e, p, f, j = d.extend({}, this.options.position);
        if (k) {
            if (e = this._find(q), e.length) {
                return e.find(".ui-tooltip-content").html(k), void 0
            }
            q.is("[title]") && (g && "mouseover" === g.type ? q.attr("title", "") : q.removeAttr("title")), e = this._tooltip(q), a(q, e.attr("id")), e.find(".ui-tooltip-content").html(k), this.options.track && g && /^mouse/.test(g.type) ? (this._on(this.document, {mousemove: m}), m(g)) : e.position(d.extend({of: q}, this.options.position)), e.hide(), this._show(e, this.options.show), this.options.show && this.options.show.delay && (f = this.delayedShow = setInterval(function () {
                e.is(":visible") && (m(j.of), clearInterval(f))
            }, d.fx.interval)), this._trigger("open", g, {tooltip: e}), p = {keyup: function (h) {
                if (h.keyCode === d.ui.keyCode.ESCAPE) {
                    var l = d.Event(h);
                    l.currentTarget = q[0], this.close(l, !0)
                }
            }, remove: function () {
                this._removeTooltip(e)
            }}, g && "mouseover" !== g.type || (p.mouseleave = "close"), g && "focusin" !== g.type || (p.focusout = "close"), this._on(!0, q, p)
        }
    }, close: function (f) {
        var j = this, g = d(f ? f.currentTarget : this.element), h = this._find(g);
        this.closing || (clearInterval(this.delayedShow), g.data("ui-tooltip-title") && g.attr("title", g.data("ui-tooltip-title")), b(g), h.stop(!0), this._hide(h, this.options.hide, function () {
            j._removeTooltip(d(this))
        }), g.removeData("ui-tooltip-open"), this._off(g, "mouseleave focusout keyup"), g[0] !== this.element[0] && this._off(g, "remove"), this._off(this.document, "mousemove"), f && "mouseleave" === f.type && d.each(this.parents, function (k, l) {
            d(l.element).attr("title", l.title), delete j.parents[k]
        }), this.closing = !0, this._trigger("close", f, {tooltip: h}), this.closing = !1)
    }, _tooltip: function (f) {
        var g = "ui-tooltip-" + c++, h = d("<div>").attr({id: g, role: "tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
        return d("<div>").addClass("ui-tooltip-content").appendTo(h), h.appendTo(this.document[0].body), this.tooltips[g] = f, h
    }, _find: function (f) {
        var g = f.data("ui-tooltip-id");
        return g ? d("#" + g) : d()
    }, _removeTooltip: function (e) {
        e.remove(), delete this.tooltips[e.attr("id")]
    }, _destroy: function () {
        var f = this;
        d.each(this.tooltips, function (e, h) {
            var g = d.Event("blur");
            g.target = g.currentTarget = h[0], f.close(g, !0), d("#" + e).remove(), h.data("ui-tooltip-title") && (h.attr("title", h.data("ui-tooltip-title")), h.removeData("ui-tooltip-title"))
        })
    }})
}(jQuery);
/*
 * jQuery UI Widget 1.10.1
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
(function (a, d) {
    var e = 0, c = Array.prototype.slice, b = a.cleanData;
    a.cleanData = function (h) {
        for (var j = 0, g; (g = h[j]) != null; j++) {
            try {
                a(g).triggerHandler("remove")
            } catch (f) {
            }
        }
        b(h)
    };
    a.widget = function (l, f, n) {
        var k, j, h, g, o = {}, m = l.split(".")[0];
        l = l.split(".")[1];
        k = m + "-" + l;
        if (!n) {
            n = f;
            f = a.Widget
        }
        a.expr[":"][k.toLowerCase()] = function (p) {
            return !!a.data(p, k)
        };
        a[m] = a[m] || {};
        j = a[m][l];
        h = a[m][l] = function (q, p) {
            if (!this._createWidget) {
                return new h(q, p)
            }
            if (arguments.length) {
                this._createWidget(q, p)
            }
        };
        a.extend(h, j, {version: n.version, _proto: a.extend({}, n), _childConstructors: []});
        g = new f();
        g.options = a.widget.extend({}, g.options);
        a.each(n, function (p, q) {
            if (!a.isFunction(q)) {
                o[p] = q;
                return
            }
            o[p] = (function () {
                var r = function () {
                    return f.prototype[p].apply(this, arguments)
                }, s = function (t) {
                    return f.prototype[p].apply(this, t)
                };
                return function () {
                    var t = this._super, u = this._superApply, v;
                    this._super = r;
                    this._superApply = s;
                    v = q.apply(this, arguments);
                    this._super = t;
                    this._superApply = u;
                    return v
                }
            })()
        });
        h.prototype = a.widget.extend(g, {widgetEventPrefix: j ? g.widgetEventPrefix : l}, o, {constructor: h, namespace: m, widgetName: l, widgetFullName: k});
        if (j) {
            a.each(j._childConstructors, function (r, p) {
                var q = p.prototype;
                a.widget(q.namespace + "." + q.widgetName, h, p._proto)
            });
            delete j._childConstructors
        } else {
            f._childConstructors.push(h)
        }
        a.widget.bridge(l, h)
    };
    a.widget.extend = function (k) {
        var f = c.call(arguments, 1), g = 0, h = f.length, j, l;
        for (; g < h; g++) {
            for (j in f[g]) {
                l = f[g][j];
                if (f[g].hasOwnProperty(j) && l !== d) {
                    if (a.isPlainObject(l)) {
                        k[j] = a.isPlainObject(k[j]) ? a.widget.extend({}, k[j], l) : a.widget.extend({}, l)
                    } else {
                        k[j] = l
                    }
                }
            }
        }
        return k
    };
    a.widget.bridge = function (g, h) {
        var f = h.prototype.widgetFullName || g;
        a.fn[g] = function (l) {
            var k = typeof l === "string", j = c.call(arguments, 1), m = this;
            l = !k && j.length ? a.widget.extend.apply(null, [l].concat(j)) : l;
            if (k) {
                this.each(function () {
                    var o, n = a.data(this, f);
                    if (!n) {
                        return a.error("cannot call methods on " + g + " prior to initialization; attempted to call method '" + l + "'")
                    }
                    if (!a.isFunction(n[l]) || l.charAt(0) === "_") {
                        return a.error("no such method '" + l + "' for " + g + " widget instance")
                    }
                    o = n[l].apply(n, j);
                    if (o !== n && o !== d) {
                        m = o && o.jquery ? m.pushStack(o.get()) : o;
                        return false
                    }
                })
            } else {
                this.each(function () {
                    var n = a.data(this, f);
                    if (n) {
                        n.option(l || {})._init()
                    } else {
                        a.data(this, f, new h(l, this))
                    }
                })
            }
            return m
        }
    };
    a.Widget = function () {
    };
    a.Widget._childConstructors = [];
    a.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: false, create: null}, _createWidget: function (g, f) {
        f = a(f || this.defaultElement || this)[0];
        this.element = a(f);
        this.uuid = e++;
        this.eventNamespace = "." + this.widgetName + this.uuid;
        this.options = a.widget.extend({}, this.options, this._getCreateOptions(), g);
        this.bindings = a();
        this.hoverable = a();
        this.focusable = a();
        if (f !== this) {
            a.data(f, this.widgetFullName, this);
            this._on(true, this.element, {remove: function (h) {
                if (h.target === f) {
                    this.destroy()
                }
            }});
            this.document = a(f.style ? f.ownerDocument : f.document || f);
            this.window = a(this.document[0].defaultView || this.document[0].parentWindow)
        }
        this._create();
        this._trigger("create", null, this._getCreateEventData());
        this._init()
    }, _getCreateOptions: a.noop, _getCreateEventData: a.noop, _create: a.noop, _init: a.noop, destroy: function () {
        this._destroy();
        this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
        this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
        this.bindings.unbind(this.eventNamespace);
        this.hoverable.removeClass("ui-state-hover");
        this.focusable.removeClass("ui-state-focus")
    }, _destroy: a.noop, widget: function () {
        return this.element
    }, option: function (h, l) {
        var j = h, k, f, g;
        if (arguments.length === 0) {
            return a.widget.extend({}, this.options)
        }
        if (typeof h === "string") {
            j = {};
            k = h.split(".");
            h = k.shift();
            if (k.length) {
                f = j[h] = a.widget.extend({}, this.options[h]);
                for (g = 0; g < k.length - 1; g++) {
                    f[k[g]] = f[k[g]] || {};
                    f = f[k[g]]
                }
                h = k.pop();
                if (l === d) {
                    return f[h] === d ? null : f[h]
                }
                f[h] = l
            } else {
                if (l === d) {
                    return this.options[h] === d ? null : this.options[h]
                }
                j[h] = l
            }
        }
        this._setOptions(j);
        return this
    }, _setOptions: function (g) {
        var f;
        for (f in g) {
            this._setOption(f, g[f])
        }
        return this
    }, _setOption: function (f, g) {
        this.options[f] = g;
        if (f === "disabled") {
            this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!g).attr("aria-disabled", g);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        }
        return this
    }, enable: function () {
        return this._setOption("disabled", false)
    }, disable: function () {
        return this._setOption("disabled", true)
    }, _on: function (k, g, h) {
        var f, j = this;
        if (typeof k !== "boolean") {
            h = g;
            g = k;
            k = false
        }
        if (!h) {
            h = g;
            g = this.element;
            f = this.widget()
        } else {
            g = f = a(g);
            this.bindings = this.bindings.add(g)
        }
        a.each(h, function (l, n) {
            function o() {
                if (!k && (j.options.disabled === true || a(this).hasClass("ui-state-disabled"))) {
                    return
                }
                return(typeof n === "string" ? j[n] : n).apply(j, arguments)
            }

            if (typeof n !== "string") {
                o.guid = n.guid = n.guid || o.guid || a.guid++
            }
            var p = l.match(/^(\w+)\s*(.*)$/), m = p[1] + j.eventNamespace, q = p[2];
            if (q) {
                f.delegate(q, m, o)
            } else {
                g.bind(m, o)
            }
        })
    }, _off: function (f, g) {
        g = (g || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
        f.unbind(g).undelegate(g)
    }, _delay: function (g, f) {
        function h() {
            return(typeof g === "string" ? j[g] : g).apply(j, arguments)
        }

        var j = this;
        return setTimeout(h, f || 0)
    }, _hoverable: function (f) {
        this.hoverable = this.hoverable.add(f);
        this._on(f, {mouseenter: function (g) {
            a(g.currentTarget).addClass("ui-state-hover")
        }, mouseleave: function (g) {
            a(g.currentTarget).removeClass("ui-state-hover")
        }})
    }, _focusable: function (f) {
        this.focusable = this.focusable.add(f);
        this._on(f, {focusin: function (g) {
            a(g.currentTarget).addClass("ui-state-focus")
        }, focusout: function (g) {
            a(g.currentTarget).removeClass("ui-state-focus")
        }})
    }, _trigger: function (l, h, g) {
        var k, j, f = this.options[l];
        g = g || {};
        h = a.Event(h);
        h.type = (l === this.widgetEventPrefix ? l : this.widgetEventPrefix + l).toLowerCase();
        h.target = this.element[0];
        j = h.originalEvent;
        if (j) {
            for (k in j) {
                if (!(k in h)) {
                    h[k] = j[k]
                }
            }
        }
        this.element.trigger(h, g);
        return !(a.isFunction(f) && f.apply(this.element[0], [h].concat(g)) === false || h.isDefaultPrevented())
    }};
    a.each({show: "fadeIn", hide: "fadeOut"}, function (g, f) {
        a.Widget.prototype["_" + g] = function (k, m, h) {
            if (typeof m === "string") {
                m = {effect: m}
            }
            var l, j = !m ? g : m === true || typeof m === "number" ? f : m.effect || f;
            m = m || {};
            if (typeof m === "number") {
                m = {duration: m}
            }
            l = !a.isEmptyObject(m);
            m.complete = h;
            if (m.delay) {
                k.delay(m.delay)
            }
            if (l && a.effects && a.effects.effect[j]) {
                k[g](m)
            } else {
                if (j !== g && k[j]) {
                    k[j](m.duration, m.easing, h)
                } else {
                    k.queue(function (n) {
                        a(this)[g]();
                        if (h) {
                            h.call(k[0])
                        }
                        n()
                    })
                }
            }
        }
    })
})(jQuery);
(function (a) {
    a.widget("ui.selectmenu", {options: {appendTo: "body", typeAhead: 1000, style: "dropdown", positionOptions: null, width: null, menuWidth: null, handleWidth: 26, maxHeight: null, icons: null, format: null, escapeHtml: false, bgImage: function () {
    }}, _create: function () {
        var d = this, b = this.options;
        var c = this.element.uniqueId().attr("id");
        this.ids = [c, c + "-button", c + "-menu"];
        this._safemouseup = true;
        this.isOpen = false;
        this.newelement = a("<a />", {"class": "ui-selectmenu ui-widget ui-state-default ui-corner-all", id: this.ids[1], role: "button", href: "#nogo", tabindex: this.element.attr("disabled") ? 1 : 0, "aria-haspopup": true, "aria-owns": this.ids[2]});
        this.newelementWrap = a("<span />").append(this.newelement).insertAfter(this.element);
        var e = this.element.attr("tabindex");
        if (e) {
            this.newelement.attr("tabindex", e)
        }
        this.newelement.data("selectelement", this.element);
        this.selectmenuIcon = a('<span class="ui-selectmenu-icon ui-icon"></span>').prependTo(this.newelement);
        this.newelement.prepend('<span class="ui-selectmenu-status" />');
        this.element.bind({"click.selectmenu": function (f) {
            d.newelement.focus();
            f.preventDefault()
        }});
        this.newelement.bind("mousedown.selectmenu", function (f) {
            d._toggle(f, true);
            if (b.style == "popup") {
                d._safemouseup = false;
                setTimeout(function () {
                    d._safemouseup = true
                }, 300)
            }
            f.preventDefault()
        }).bind("click.selectmenu", function (f) {
            f.preventDefault()
        }).bind("keydown.selectmenu", function (f) {
            var g = false;
            switch (f.keyCode) {
                case a.ui.keyCode.ENTER:
                    g = true;
                    break;
                case a.ui.keyCode.SPACE:
                    d._toggle(f);
                    break;
                case a.ui.keyCode.UP:
                    if (f.altKey) {
                        d.open(f)
                    } else {
                        d._moveSelection(-1)
                    }
                    break;
                case a.ui.keyCode.DOWN:
                    if (f.altKey) {
                        d.open(f)
                    } else {
                        d._moveSelection(1)
                    }
                    break;
                case a.ui.keyCode.LEFT:
                    d._moveSelection(-1);
                    break;
                case a.ui.keyCode.RIGHT:
                    d._moveSelection(1);
                    break;
                case a.ui.keyCode.TAB:
                    g = true;
                    break;
                case a.ui.keyCode.PAGE_UP:
                case a.ui.keyCode.HOME:
                    d.index(0);
                    break;
                case a.ui.keyCode.PAGE_DOWN:
                case a.ui.keyCode.END:
                    d.index(d._optionLis.length);
                    break;
                default:
                    g = true
            }
            return g
        }).bind("keypress.selectmenu", function (f) {
            if (f.which > 0) {
                d._typeAhead(f.which, "mouseup")
            }
            return true
        }).bind("mouseover.selectmenu", function () {
            if (!b.disabled) {
                a(this).addClass("ui-state-hover")
            }
        }).bind("mouseout.selectmenu", function () {
            if (!b.disabled) {
                a(this).removeClass("ui-state-hover")
            }
        }).bind("focus.selectmenu", function () {
            if (!b.disabled) {
                a(this).addClass("ui-state-focus")
            }
        }).bind("blur.selectmenu", function () {
            if (!b.disabled) {
                a(this).removeClass("ui-state-focus")
            }
        });
        a(document).bind("mousedown.selectmenu-" + this.ids[0], function (f) {
            if (d.isOpen && !a(f.target).closest("#" + d.ids[1]).length) {
                d.close(f)
            }
        });
        this.element.bind("click.selectmenu", function () {
            d._refreshValue()
        }).bind("focus.selectmenu", function () {
            if (d.newelement) {
                d.newelement[0].focus()
            }
        });
        if (!b.width) {
            b.width = this.element.outerWidth()
        }
        this.newelement.width(b.width);
        this.element.hide();
        this.list = a("<ul />", {"class": "ui-widget ui-widget-content", "aria-hidden": true, role: "listbox", "aria-labelledby": this.ids[1], id: this.ids[2]});
        this.listWrap = a("<div />", {"class": "ui-selectmenu-menu"}).append(this.list).appendTo(b.appendTo);
        this.list.bind("keydown.selectmenu", function (f) {
            var g = false;
            switch (f.keyCode) {
                case a.ui.keyCode.UP:
                    if (f.altKey) {
                        d.close(f, true)
                    } else {
                        d._moveFocus(-1)
                    }
                    break;
                case a.ui.keyCode.DOWN:
                    if (f.altKey) {
                        d.close(f, true)
                    } else {
                        d._moveFocus(1)
                    }
                    break;
                case a.ui.keyCode.LEFT:
                    d._moveFocus(-1);
                    break;
                case a.ui.keyCode.RIGHT:
                    d._moveFocus(1);
                    break;
                case a.ui.keyCode.HOME:
                    d._moveFocus(":first");
                    break;
                case a.ui.keyCode.PAGE_UP:
                    d._scrollPage("up");
                    break;
                case a.ui.keyCode.PAGE_DOWN:
                    d._scrollPage("down");
                    break;
                case a.ui.keyCode.END:
                    d._moveFocus(":last");
                    break;
                case a.ui.keyCode.ENTER:
                case a.ui.keyCode.SPACE:
                    d.close(f, true);
                    a(f.target).parents("li:eq(0)").trigger("mouseup");
                    break;
                case a.ui.keyCode.TAB:
                    g = true;
                    d.close(f, true);
                    a(f.target).parents("li:eq(0)").trigger("mouseup");
                    break;
                case a.ui.keyCode.ESCAPE:
                    d.close(f, true);
                    break;
                default:
                    g = true
            }
            return g
        }).bind("keypress.selectmenu", function (f) {
            if (f.which > 0) {
                d._typeAhead(f.which, "focus")
            }
            return true
        }).bind("mousedown.selectmenu mouseup.selectmenu", function () {
            return false
        });
        a(window).bind("resize.selectmenu-" + this.ids[0], a.proxy(d.close, this))
    }, _init: function () {
        var n = this, k = this.options;
        var m = [];
        this.element.find("option").each(function () {
            var j = a(this);
            m.push({value: j.attr("value"), text: n._formatText(j.text(), j), selected: j.attr("selected"), disabled: j.attr("disabled"), classes: j.attr("class"), typeahead: j.attr("typeahead"), parentOptGroup: j.parent("optgroup"), bgImage: k.bgImage.call(j)})
        });
        var b = (n.options.style == "popup") ? " ui-state-active" : "";
        this.list.html("");
        if (m.length) {
            for (var c = 0; c < m.length; c++) {
                var s = {role: "presentation"};
                if (m[c].disabled) {
                    s["class"] = "ui-state-disabled"
                }
                var q = {html: m[c].text || "&nbsp;", href: "#nogo", tabindex: -1, role: "option", "aria-selected": false};
                if (m[c].disabled) {
                    q["aria-disabled"] = m[c].disabled
                }
                if (m[c].typeahead) {
                    q.typeahead = m[c].typeahead
                }
                var p = a("<a/>", q).bind("focus.selectmenu", function () {
                    a(this).parent().mouseover()
                }).bind("blur.selectmenu", function () {
                    a(this).parent().mouseout()
                });
                var r = a("<li/>", s).append(p).data("index", c).addClass(m[c].classes).data("optionClasses", m[c].classes || "").bind("mouseup.selectmenu", function (j) {
                    if (n._safemouseup && !n._disabled(j.currentTarget) && !n._disabled(a(j.currentTarget).parents("ul > li.ui-selectmenu-group "))) {
                        n.index(a(this).data("index"));
                        n.select(j);
                        n.close(j, true)
                    }
                    return false
                }).bind("click.selectmenu", function () {
                    return false
                }).bind("mouseover.selectmenu", function (j) {
                    if (!a(this).hasClass("ui-state-disabled") && !a(this).parent("ul").parent("li").hasClass("ui-state-disabled")) {
                        j.optionValue = n.element[0].options[a(this).data("index")].value;
                        n._trigger("hover", j, n._uiHash());
                        n._selectedOptionLi().addClass(b);
                        n._focusedOptionLi().removeClass("ui-selectmenu-item-focus ui-state-hover");
                        a(this).removeClass("ui-state-active").addClass("ui-selectmenu-item-focus ui-state-hover")
                    }
                }).bind("mouseout.selectmenu", function (j) {
                    if (a(this).is(n._selectedOptionLi())) {
                        a(this).addClass(b)
                    }
                    j.optionValue = n.element[0].options[a(this).data("index")].value;
                    n._trigger("blur", j, n._uiHash());
                    a(this).removeClass("ui-selectmenu-item-focus ui-state-hover")
                });
                if (m[c].parentOptGroup.length) {
                    var l = "ui-selectmenu-group-" + this.element.find("optgroup").index(m[c].parentOptGroup);
                    if (this.list.find("li." + l).length) {
                        this.list.find("li." + l + ":last ul").append(r)
                    } else {
                        a('<li role="presentation" class="ui-selectmenu-group ' + l + (m[c].parentOptGroup.attr("disabled") ? ' ui-state-disabled" aria-disabled="true"' : '"') + '><span class="ui-selectmenu-group-label">' + m[c].parentOptGroup.attr("label") + "</span><ul></ul></li>").appendTo(this.list).find("ul").append(r)
                    }
                } else {
                    r.appendTo(this.list)
                }
                if (k.icons) {
                    for (var f in k.icons) {
                        if (r.is(k.icons[f].find)) {
                            r.data("optionClasses", m[c].classes + " ui-selectmenu-hasIcon").addClass("ui-selectmenu-hasIcon");
                            var d = k.icons[f].icon || "";
                            r.find("a:eq(0)").prepend('<span class="ui-selectmenu-item-icon ui-icon ' + d + '"></span>');
                            if (m[c].bgImage) {
                                r.find("span").css("background-image", m[c].bgImage)
                            }
                        }
                    }
                }
            }
        } else {
            a(' <li role="presentation"><a href="#nogo" tabindex="-1" role="option"></a></li>').appendTo(this.list)
        }
        var e = (k.style == "dropdown");
        this.newelement.toggleClass("ui-selectmenu-dropdown", e).toggleClass("ui-selectmenu-popup", !e);
        this.list.toggleClass("ui-selectmenu-menu-dropdown ui-corner-bottom", e).toggleClass("ui-selectmenu-menu-popup ui-corner-all", !e).find("li:first").toggleClass("ui-corner-top", !e).end().find("li:last").addClass("ui-corner-bottom");
        this.selectmenuIcon.toggleClass("ui-icon-triangle-1-s", e).toggleClass("ui-icon-triangle-2-n-s", !e);
        if (k.style == "dropdown") {
            this.list.width(k.menuWidth ? k.menuWidth : k.width)
        } else {
            this.list.width(k.menuWidth ? k.menuWidth : k.width - k.handleWidth)
        }
        this.list.css("height", "auto");
        var g = this.listWrap.height();
        var t = a(window).height();
        var h = k.maxHeight ? Math.min(k.maxHeight, t) : t / 3;
        if (g > h) {
            this.list.height(h)
        }
        this._optionLis = this.list.find("li:not(.ui-selectmenu-group)");
        if (this.element.attr("disabled")) {
            this.disable()
        } else {
            this.enable()
        }
        this._refreshValue();
        this._selectedOptionLi().addClass("ui-selectmenu-item-focus");
        clearTimeout(this.refreshTimeout);
        this.refreshTimeout = window.setTimeout(function () {
            n._refreshPosition()
        }, 200)
    }, destroy: function () {
        this.element.removeData(this.widgetName).removeClass("ui-selectmenu-disabled ui-state-disabled").removeAttr("aria-disabled").unbind(".selectmenu");
        a(window).unbind(".selectmenu-" + this.ids[0]);
        a(document).unbind(".selectmenu-" + this.ids[0]);
        this.newelementWrap.remove();
        this.listWrap.remove();
        this.element.unbind(".selectmenu").show();
        a.Widget.prototype.destroy.apply(this, arguments)
    }, _typeAhead: function (d, e) {
        var k = this, b = String.fromCharCode(d).toLowerCase(), g = null, h = null;
        if (k._typeAhead_timer) {
            window.clearTimeout(k._typeAhead_timer);
            k._typeAhead_timer = undefined
        }
        k._typeAhead_chars = (k._typeAhead_chars === undefined ? "" : k._typeAhead_chars).concat(b);
        if (k._typeAhead_chars.length < 2 || (k._typeAhead_chars.substr(-2, 1) === b && k._typeAhead_cycling)) {
            k._typeAhead_cycling = true;
            g = b
        } else {
            k._typeAhead_cycling = false;
            g = k._typeAhead_chars
        }
        var j = (e !== "focus" ? this._selectedOptionLi().data("index") : this._focusedOptionLi().data("index")) || 0;
        for (var f = 0; f < this._optionLis.length; f++) {
            var l = this._optionLis.eq(f).text().substr(0, g.length).toLowerCase();
            if (l === g) {
                if (k._typeAhead_cycling) {
                    if (h === null) {
                        h = f
                    }
                    if (f > j) {
                        h = f;
                        break
                    }
                } else {
                    h = f
                }
            }
        }
        if (h !== null) {
            this._optionLis.eq(h).find("a").trigger(e)
        }
        k._typeAhead_timer = window.setTimeout(function () {
            k._typeAhead_timer = undefined;
            k._typeAhead_chars = undefined;
            k._typeAhead_cycling = undefined
        }, k.options.typeAhead)
    }, _uiHash: function () {
        var b = this.index();
        return{index: b, option: a("option", this.element).get(b), value: this.element[0].value}
    }, open: function (b) {
        if (this.newelement.attr("aria-disabled") != "true") {
            var f = this, d = this.options, e = this._selectedOptionLi(), c = e.find("a");
            f._closeOthers(b);
            f.newelement.addClass("ui-state-active");
            f.list.attr("aria-hidden", false);
            f.listWrap.addClass("ui-selectmenu-open");
            if (d.style == "dropdown") {
                f.newelement.removeClass("ui-corner-all").addClass("ui-corner-top")
            } else {
                this.list.css("left", -5000).scrollTop(this.list.scrollTop() + e.position().top - this.list.outerHeight() / 2 + e.outerHeight() / 2).css("left", "auto")
            }
            f._refreshPosition();
            if (c.length) {
                c[0].focus()
            }
            f.isOpen = true;
            f._trigger("open", b, f._uiHash())
        }
    }, close: function (b, c) {
        if (this.newelement.is(".ui-state-active")) {
            this.newelement.removeClass("ui-state-active");
            this.listWrap.removeClass("ui-selectmenu-open");
            this.list.attr("aria-hidden", true);
            if (this.options.style == "dropdown") {
                this.newelement.removeClass("ui-corner-top").addClass("ui-corner-all")
            }
            if (c) {
                this.newelement.focus()
            }
            this.isOpen = false;
            this._trigger("close", b, this._uiHash())
        }
    }, change: function (b) {
        this.element.trigger("change");
        this._trigger("change", b, this._uiHash())
    }, select: function (b) {
        if (this._disabled(b.currentTarget)) {
            return false
        }
        this._trigger("select", b, this._uiHash())
    }, widget: function () {
        return this.listWrap.add(this.newelementWrap)
    }, _closeOthers: function (b) {
        a(".ui-selectmenu.ui-state-active").not(this.newelement).each(function () {
            a(this).data("selectelement").selectmenu("close", b)
        });
        a(".ui-selectmenu.ui-state-hover").trigger("mouseout")
    }, _toggle: function (b, c) {
        if (this.isOpen) {
            this.close(b, c)
        } else {
            this.open(b)
        }
    }, _formatText: function (c, b) {
        if (this.options.format) {
            c = this.options.format(c, b)
        } else {
            if (this.options.escapeHtml) {
                c = a("<div />").text(c).html()
            }
        }
        return c
    }, _selectedIndex: function () {
        return this.element[0].selectedIndex
    }, _selectedOptionLi: function () {
        return this._optionLis.eq(this._selectedIndex())
    }, _focusedOptionLi: function () {
        return this.list.find(".ui-selectmenu-item-focus")
    }, _moveSelection: function (b, e) {
        if (!this.options.disabled) {
            var c = parseInt(this._selectedOptionLi().data("index") || 0, 10);
            var d = c + b;
            if (d < 0) {
                d = 0
            }
            if (d > this._optionLis.size() - 1) {
                d = this._optionLis.size() - 1
            }
            if (d === e) {
                return false
            }
            if (this._optionLis.eq(d).hasClass("ui-state-disabled")) {
                (b > 0) ? ++b : --b;
                this._moveSelection(b, d)
            } else {
                this._optionLis.eq(d).trigger("mouseover").trigger("mouseup")
            }
        }
    }, _moveFocus: function (c, f) {
        if (!isNaN(c)) {
            var d = parseInt(this._focusedOptionLi().data("index") || 0, 10);
            var e = d + c
        } else {
            var e = parseInt(this._optionLis.filter(c).data("index"), 10)
        }
        if (e < 0) {
            e = 0
        }
        if (e > this._optionLis.size() - 1) {
            e = this._optionLis.size() - 1
        }
        if (e === f) {
            return false
        }
        var b = "ui-selectmenu-item-" + Math.round(Math.random() * 1000);
        this._focusedOptionLi().find("a:eq(0)").attr("id", "");
        if (this._optionLis.eq(e).hasClass("ui-state-disabled")) {
            (c > 0) ? ++c : --c;
            this._moveFocus(c, e)
        } else {
            this._optionLis.eq(e).find("a:eq(0)").attr("id", b).focus()
        }
        this.list.attr("aria-activedescendant", b)
    }, _scrollPage: function (b) {
        var c = Math.floor(this.list.outerHeight() / this._optionLis.first().outerHeight());
        c = (b == "up" ? -c : c);
        this._moveFocus(c)
    }, _setOption: function (b, c) {
        this.options[b] = c;
        if (b == "disabled") {
            if (c) {
                this.close()
            }
            this.element.add(this.newelement).add(this.list)[c ? "addClass" : "removeClass"]("ui-selectmenu-disabled ui-state-disabled").attr("aria-disabled", c)
        }
    }, disable: function (b, c) {
        if (typeof(b) == "undefined") {
            this._setOption("disabled", true)
        } else {
            if (c == "optgroup") {
                this._toggleOptgroup(b, false)
            } else {
                this._toggleOption(b, false)
            }
        }
    }, enable: function (b, c) {
        if (typeof(b) == "undefined") {
            this._setOption("disabled", false)
        } else {
            if (c == "optgroup") {
                this._toggleOptgroup(b, true)
            } else {
                this._toggleOption(b, true)
            }
        }
    }, _disabled: function (b) {
        return a(b).hasClass("ui-state-disabled")
    }, _toggleOption: function (c, b) {
        var d = this._optionLis.eq(c);
        if (d) {
            d.toggleClass("ui-state-disabled", b).find("a").attr("aria-disabled", !b);
            if (b) {
                this.element.find("option").eq(c).attr("disabled", "disabled")
            } else {
                this.element.find("option").eq(c).removeAttr("disabled")
            }
        }
    }, _toggleOptgroup: function (c, b) {
        var d = this.list.find("li.ui-selectmenu-group-" + c);
        if (d) {
            d.toggleClass("ui-state-disabled", b).attr("aria-disabled", !b);
            if (b) {
                this.element.find("optgroup").eq(c).attr("disabled", "disabled")
            } else {
                this.element.find("optgroup").eq(c).removeAttr("disabled")
            }
        }
    }, index: function (b) {
        if (arguments.length) {
            if (!this._disabled(a(this._optionLis[b])) && b != this._selectedIndex()) {
                this.element[0].selectedIndex = b;
                this._refreshValue();
                this.change()
            } else {
                return false
            }
        } else {
            return this._selectedIndex()
        }
    }, value: function (b) {
        if (arguments.length && b != this.element[0].value) {
            this.element[0].value = b;
            this._refreshValue();
            this.change()
        } else {
            return this.element[0].value
        }
    }, _refreshValue: function () {
        var b = (this.options.style == "popup") ? " ui-state-active" : "";
        var c = "ui-selectmenu-item-" + Math.round(Math.random() * 1000);
        this.list.find(".ui-selectmenu-item-selected").removeClass("ui-selectmenu-item-selected" + b).find("a").attr("aria-selected", "false").attr("id", "");
        this._selectedOptionLi().addClass("ui-selectmenu-item-selected" + b).find("a").attr("aria-selected", "true").attr("id", c);
        var d = (this.newelement.data("optionClasses") ? this.newelement.data("optionClasses") : "");
        var e = (this._selectedOptionLi().data("optionClasses") ? this._selectedOptionLi().data("optionClasses") : "");
        this.newelement.removeClass(d).data("optionClasses", e).addClass(e).find(".ui-selectmenu-status").html(this._selectedOptionLi().find("a:eq(0)").html());
        this.list.attr("aria-activedescendant", c)
    }, _refreshPosition: function () {
        var b = this.options, c = {of: this.newelement, my: "left top", at: "left bottom", collision: "flip"};
        if (b.style == "popup") {
            var d = this._selectedOptionLi();
            c.my = "left top" + (this.list.offset().top - d.offset().top - (this.newelement.outerHeight() + d.outerHeight()) / 2);
            c.collision = "fit"
        }
        this.listWrap.removeAttr("style").zIndex(this.element.zIndex() + 2).position(a.extend(c, b.positionOptions))
    }})
})(jQuery);
/*
 * jQuery Raty - A Star Rating Plugin
 *
 * Licensed under The MIT License
 *
 * @version        2.5.2
 * @author         Washington Botelho
 * @documentation  wbotelhos.com/raty
 *
 */
(function (d) {
    var c = {init: function (a) {
        return this.each(function () {
            c.destroy.call(this);
            this.opt = d.extend(true, {}, d.fn.raty.defaults, a);
            var h = d(this), k = ["number", "readOnly", "score", "scoreName"];
            c._callback.call(this, k);
            if (this.opt.precision) {
                c._adjustPrecision.call(this)
            }
            this.opt.number = c._between(this.opt.number, 0, this.opt.numberMax);
            this.opt.path = this.opt.path || "";
            if (this.opt.path && this.opt.path.slice(this.opt.path.length - 1, this.opt.path.length) !== "/") {
                this.opt.path += "/"
            }
            this.stars = c._createStars.call(this);
            this.score = c._createScore.call(this);
            c._apply.call(this, this.opt.score);
            var j = this.opt.space ? 4 : 0, b = this.opt.width || (this.opt.number * this.opt.size + this.opt.number * j);
            if (this.opt.cancel) {
                this.cancel = c._createCancel.call(this);
                b += (this.opt.size + j)
            }
            if (this.opt.readOnly) {
                c._lock.call(this)
            } else {
                h.css("cursor", "pointer");
                c._binds.call(this)
            }
            if (this.opt.width !== false) {
                h.css("width", b)
            }
            c._target.call(this, this.opt.score);
            h.data({settings: this.opt, raty: true})
        })
    }, _adjustPrecision: function () {
        this.opt.targetType = "score";
        this.opt.half = true
    }, _apply: function (a) {
        if (a && a > 0) {
            a = c._between(a, 0, this.opt.number);
            this.score.val(a)
        }
        c._fill.call(this, a);
        if (a) {
            c._roundStars.call(this, a)
        }
    }, _between: function (f, b, a) {
        return Math.min(Math.max(parseFloat(f), b), a)
    }, _binds: function () {
        if (this.cancel) {
            c._bindCancel.call(this)
        }
        c._bindClick.call(this);
        c._bindOut.call(this);
        c._bindOver.call(this)
    }, _bindCancel: function () {
        c._bindClickCancel.call(this);
        c._bindOutCancel.call(this);
        c._bindOverCancel.call(this)
    }, _bindClick: function () {
        var a = this, b = d(a);
        a.stars.on("click.raty", function (f) {
            a.score.val((a.opt.half || a.opt.precision) ? b.data("score") : this.alt);
            if (a.opt.click) {
                a.opt.click.call(a, parseFloat(a.score.val()), f)
            }
        })
    }, _bindClickCancel: function () {
        var a = this;
        a.cancel.on("click.raty", function (b) {
            a.score.removeAttr("value");
            if (a.opt.click) {
                a.opt.click.call(a, null, b)
            }
        })
    }, _bindOut: function () {
        var a = this;
        d(this).on("mouseleave.raty", function (b) {
            var f = parseFloat(a.score.val()) || undefined;
            c._apply.call(a, f);
            c._target.call(a, f, b);
            if (a.opt.mouseout) {
                a.opt.mouseout.call(a, f, b)
            }
        })
    }, _bindOutCancel: function () {
        var a = this;
        a.cancel.on("mouseleave.raty", function (b) {
            d(this).attr("src", a.opt.path + a.opt.cancelOff);
            if (a.opt.mouseout) {
                a.opt.mouseout.call(a, a.score.val() || null, b)
            }
        })
    }, _bindOverCancel: function () {
        var a = this;
        a.cancel.on("mouseover.raty", function (b) {
            d(this).attr("src", a.opt.path + a.opt.cancelOn);
            a.stars.attr("src", a.opt.path + a.opt.starOff);
            c._target.call(a, null, b);
            if (a.opt.mouseover) {
                a.opt.mouseover.call(a, null)
            }
        })
    }, _bindOver: function () {
        var a = this, b = d(a), f = a.opt.half ? "mousemove.raty" : "mouseover.raty";
        a.stars.on(f, function (k) {
            var l = parseInt(this.alt, 10);
            if (a.opt.half) {
                var e = parseFloat((k.pageX - d(this).offset().left) / a.opt.size), m = (e > 0.5) ? 1 : 0.5;
                l = l - 1 + m;
                c._fill.call(a, l);
                if (a.opt.precision) {
                    l = l - m + e
                }
                c._roundStars.call(a, l);
                b.data("score", l)
            } else {
                c._fill.call(a, l)
            }
            c._target.call(a, l, k);
            if (a.opt.mouseover) {
                a.opt.mouseover.call(a, l, k)
            }
        })
    }, _callback: function (a) {
        for (i in a) {
            if (typeof this.opt[a[i]] === "function") {
                this.opt[a[i]] = this.opt[a[i]].call(this)
            }
        }
    }, _createCancel: function () {
        var f = d(this), a = this.opt.path + this.opt.cancelOff, b = d("<img />", {src: a, alt: "x", title: this.opt.cancelHint, "class": "raty-cancel"});
        if (this.opt.cancelPlace == "left") {
            f.prepend("&#160;").prepend(b)
        } else {
            f.append("&#160;").append(b)
        }
        return b
    }, _createScore: function () {
        return d("<input />", {type: "hidden", name: this.opt.scoreName}).appendTo(this)
    }, _createStars: function () {
        var g = d(this);
        for (var a = 1; a <= this.opt.number; a++) {
            var h = c._getHint.call(this, a), b = (this.opt.score && this.opt.score >= a) ? "starOn" : "starOff";
            b = this.opt.path + this.opt[b];
            d("<img />", {src: b, alt: a, title: h}).appendTo(this);
            if (this.opt.space) {
                g.append((a < this.opt.number) ? "&#160;" : "")
            }
        }
        return g.children("img")
    }, _error: function (a) {
        d(this).html(a);
        d.error(a)
    }, _fill: function (b) {
        var u = this, n = 0;
        for (var o = 1; o <= u.stars.length; o++) {
            var p = u.stars.eq(o - 1), t = u.opt.single ? (o == b) : (o <= b);
            if (u.opt.iconRange && u.opt.iconRange.length > n) {
                var r = u.opt.iconRange[n], q = r.on || u.opt.starOn, a = r.off || u.opt.starOff, s = t ? q : a;
                if (o <= r.range) {
                    p.attr("src", u.opt.path + s)
                }
                if (o == r.range) {
                    n++
                }
            } else {
                var s = t ? "starOn" : "starOff";
                p.attr("src", this.opt.path + this.opt[s])
            }
        }
    }, _getHint: function (b) {
        var a = this.opt.hints[b - 1];
        return(a === "") ? "" : (a || b)
    }, _lock: function () {
        var b = parseInt(this.score.val(), 10), a = b ? c._getHint.call(this, b) : this.opt.noRatedMsg;
        d(this).data("readonly", true).css("cursor", "").attr("title", a);
        this.score.attr("readonly", "readonly");
        this.stars.attr("title", a);
        if (this.cancel) {
            this.cancel.hide()
        }
    }, _roundStars: function (f) {
        var b = (f - Math.floor(f)).toFixed(2);
        if (b > this.opt.round.down) {
            var a = "starOn";
            if (this.opt.halfShow && b < this.opt.round.up) {
                a = "starHalf"
            } else {
                if (b < this.opt.round.full) {
                    a = "starOff"
                }
            }
            this.stars.eq(Math.ceil(f) - 1).attr("src", this.opt.path + this.opt[a])
        }
    }, _target: function (h, b) {
        if (this.opt.target) {
            var g = d(this.opt.target);
            if (g.length === 0) {
                c._error.call(this, "Target selector invalid or missing!")
            }
            if (this.opt.targetFormat.indexOf("{score}") < 0) {
                c._error.call(this, 'Template "{score}" missing!')
            }
            var a = b && b.type == "mouseover";
            if (h === undefined) {
                h = this.opt.targetText
            } else {
                if (h === null) {
                    h = a ? this.opt.cancelHint : this.opt.targetText
                } else {
                    if (this.opt.targetType == "hint") {
                        h = c._getHint.call(this, Math.ceil(h))
                    } else {
                        if (this.opt.precision) {
                            h = parseFloat(h).toFixed(1)
                        }
                    }
                    if (!a && !this.opt.targetKeep) {
                        h = this.opt.targetText
                    }
                }
            }
            if (h) {
                h = this.opt.targetFormat.toString().replace("{score}", h)
            }
            if (g.is(":input")) {
                g.val(h)
            } else {
                g.html(h)
            }
        }
    }, _unlock: function () {
        d(this).data("readonly", false).css("cursor", "pointer").removeAttr("title");
        this.score.removeAttr("readonly", "readonly");
        for (var a = 0; a < this.opt.number; a++) {
            this.stars.eq(a).attr("title", c._getHint.call(this, a + 1))
        }
        if (this.cancel) {
            this.cancel.css("display", "")
        }
    }, cancel: function (a) {
        return this.each(function () {
            if (d(this).data("readonly") !== true) {
                c[a ? "click" : "score"].call(this, null);
                this.score.removeAttr("value")
            }
        })
    }, click: function (a) {
        return d(this).each(function () {
            if (d(this).data("readonly") !== true) {
                c._apply.call(this, a);
                if (!this.opt.click) {
                    c._error.call(this, 'You must add the "click: function(score, evt) { }" callback.')
                }
                this.opt.click.call(this, a, {type: "click"});
                c._target.call(this, a)
            }
        })
    }, destroy: function () {
        return d(this).each(function () {
            var b = d(this), a = b.data("raw");
            if (a) {
                b.off(".raty").empty().css({cursor: a.style.cursor, width: a.style.width}).removeData("readonly")
            } else {
                b.data("raw", b.clone()[0])
            }
        })
    }, getScore: function () {
        var b = [], a;
        d(this).each(function () {
            a = this.score.val();
            b.push(a ? parseFloat(a) : undefined)
        });
        return(b.length > 1) ? b : b[0]
    }, readOnly: function (a) {
        return this.each(function () {
            var b = d(this);
            if (b.data("readonly") !== a) {
                if (a) {
                    b.off(".raty").children("img").off(".raty");
                    c._lock.call(this)
                } else {
                    c._binds.call(this);
                    c._unlock.call(this)
                }
                b.data("readonly", a)
            }
        })
    }, reload: function () {
        return c.set.call(this, {})
    }, score: function () {
        return arguments.length ? c.setScore.apply(this, arguments) : c.getScore.call(this)
    }, set: function (a) {
        return this.each(function () {
            var g = d(this), h = g.data("settings"), b = d.extend({}, h, a);
            g.raty(b)
        })
    }, setScore: function (a) {
        return d(this).each(function () {
            if (d(this).data("readonly") !== true) {
                c._apply.call(this, a);
                c._target.call(this, a)
            }
        })
    }};
    d.fn.raty = function (a) {
        if (c[a]) {
            return c[a].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof a === "object" || !a) {
                return c.init.apply(this, arguments)
            } else {
                d.error("Method " + a + " does not exist!")
            }
        }
    };
    d.fn.raty.defaults = {
        cancel: false, cancelHint: "Cancel this rating!",
        cancelOff: "cancel-off.png",
        cancelOn: "cancel-on.png", cancelPlace: "left",
        click: undefined, half: false,
        halfShow: true,
        hints: ["bad", "poor", "regular", "good", "gorgeous"],
        iconRange: undefined, mouseout: undefined,
        mouseover: undefined, noRatedMsg: "暂无评分!", number: 5, numberMax: 20,
        path: "", precision: false, readOnly: false,
        round: {down: 0.25, full: 0.6, up: 0.76}, score: undefined,
        scoreName: "score", single: false, size: 16, space: true,
        starHalf: "star-half.png", starOff: "star-off.png",
        starOn: "star-on.png", target: undefined,
        targetFormat: "{score}", targetKeep: false,
        targetText: "", targetType: "hint", width: undefined


    }
})(jQuery);

/* jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
 * Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */
(function (a) {
    a.extend(a.fn, {validate: function (b) {
        if (!this.length) {
            return b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0
        }
        var c = a.data(this[0], "validator");
        return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function (d) {
            c.settings.submitHandler && (c.submitButton = d.target), a(d.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(d.target).attr("formnovalidate") && (c.cancelSubmit = !0)
        }), this.submit(function (d) {
            function f() {
                var e;
                return c.settings.submitHandler ? (c.submitButton && (e = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, d), c.submitButton && e.remove(), !1) : !0
            }

            return c.settings.debug && d.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, f()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : f() : (c.focusInvalid(), !1)
        })), c)
    }, valid: function () {
        if (a(this[0]).is("form")) {
            return this.validate().form()
        }
        var b = !0, c = a(this[0].form).validate();
        return this.each(function () {
            b = b && c.element(this)
        }), b
    }, removeAttrs: function (b) {
        var c = {}, d = this;
        return a.each(b.split(/\s/), function (g, f) {
            c[f] = d.attr(f), d.removeAttr(f)
        }), c
    }, rules: function (c, d) {
        var k = this[0];
        if (c) {
            var j = a.data(k.form, "validator").settings, g = j.rules, b = a.validator.staticRules(k);
            switch (c) {
                case"add":
                    a.extend(b, a.validator.normalizeRule(d)), delete b.messages, g[k.name] = b, d.messages && (j.messages[k.name] = a.extend(j.messages[k.name], d.messages));
                    break;
                case"remove":
                    if (!d) {
                        return delete g[k.name], b
                    }
                    var m = {};
                    return a.each(d.split(/\s/), function (n, l) {
                        m[l] = b[l], delete b[l]
                    }), m
            }
        }
        var h = a.validator.normalizeRules(a.extend({}, a.validator.classRules(k), a.validator.attributeRules(k), a.validator.dataRules(k), a.validator.staticRules(k)), k);
        if (h.required) {
            var f = h.required;
            delete h.required, h = a.extend({required: f}, h)
        }
        return h
    }}), a.extend(a.expr[":"], {blank: function (b) {
        return !a.trim("" + a(b).val())
    }, filled: function (b) {
        return !!a.trim("" + a(b).val())
    }, unchecked: function (b) {
        return !a(b).prop("checked")
    }}), a.validator = function (b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function (b, c) {
        return 1 === arguments.length ? function () {
            var d = a.makeArray(arguments);
            return d.unshift(b), a.validator.format.apply(this, d)
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (e, d) {
            b = b.replace(RegExp("\\{" + e + "\\}", "g"), function () {
                return d
            })
        }), b)
    }, a.extend(a.validator, {defaults: {messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusInvalid: !0, errorContainer: a([]), errorLabelContainer: a([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function (b) {
        this.lastActive = b, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, b, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(b)).hide())
    }, onfocusout: function (b) {
        this.checkable(b) || !(b.name in this.submitted) && this.optional(b) || this.element(b)
    }, onkeyup: function (c, b) {
        (9 !== b.which || "" !== this.elementValue(c)) && (c.name in this.submitted || c === this.lastElement) && this.element(c)
    }, onclick: function (b) {
        b.name in this.submitted ? this.element(b) : b.parentNode.name in this.submitted && this.element(b.parentNode)
    }, highlight: function (b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
    }, unhighlight: function (b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
    }}, setDefaults: function (b) {
        a.extend(a.validator.defaults, b)
    }, messages: {required: "请填写此字段", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: a.validator.format("Please enter no more than {0} characters."), minlength: a.validator.format("Please enter at least {0} characters."), rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."), range: a.validator.format("Please enter a value between {0} and {1}."), max: a.validator.format("Please enter a value less than or equal to {0}."), min: a.validator.format("Please enter a value greater than or equal to {0}.")}, autoCreateRanges: !1, prototype: {init: function () {
        function b(f) {
            var g = a.data(this[0].form, "validator"), h = "on" + f.type.replace(/^validate/, "");
            g.settings[h] && g.settings[h].call(g, this[0], f)
        }

        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c = this.groups = {};
        a.each(this.settings.groups, function (f, g) {
            "string" == typeof g && (g = g.split(/\s/)), a.each(g, function (h, e) {
                c[e] = f
            })
        });
        var d = this.settings.rules;
        a.each(d, function (f, g) {
            d[f] = a.validator.normalizeRule(g)
        }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
    }, form: function () {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
    }, checkForm: function () {
        this.prepareForm();
        for (var c = 0, b = this.currentElements = this.elements(); b[c]; c++) {
            this.check(b[c])
        }
        return this.valid()
    }, element: function (b) {
        b = this.validationTargetFor(this.clean(b)), this.lastElement = b, this.prepareElement(b), this.currentElements = a(b);
        var c = this.check(b) !== !1;
        return c ? delete this.invalid[b.name] : this.invalid[b.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c
    }, showErrors: function (b) {
        if (b) {
            a.extend(this.errorMap, b), this.errorList = [];
            for (var c in b) {
                this.errorList.push({message: b[c], element: this.findByName(c)[0]})
            }
            this.successList = a.grep(this.successList, function (d) {
                return !(d.name in b)
            })
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
    }, resetForm: function () {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
    }, numberOfInvalids: function () {
        return this.objectLength(this.invalid)
    }, objectLength: function (d) {
        var b = 0;
        for (var c in d) {
            b++
        }
        return b
    }, hideErrors: function () {
        this.addWrapper(this.toHide).hide()
    }, valid: function () {
        return 0 === this.size()
    }, size: function () {
        return this.errorList.length
    }, focusInvalid: function () {
        if (this.settings.focusInvalid) {
            try {
                a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
            } catch (b) {
            }
        }
    }, findLastActive: function () {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function (c) {
            return c.element.name === b.name
        }).length && b
    }, elements: function () {
        var b = this, c = {};
        return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
            return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
        })
    }, clean: function (b) {
        return a(b)[0]
    }, errors: function () {
        var b = this.settings.errorClass.replace(" ", ".");
        return a(this.settings.errorElement + "." + b, this.errorContext)
    }, reset: function () {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
    }, prepareForm: function () {
        this.reset(), this.toHide = this.errors().add(this.containers)
    }, prepareElement: function (b) {
        this.reset(), this.toHide = this.errorsFor(b)
    }, elementValue: function (b) {
        var c = a(b).attr("type"), d = a(b).val();
        return"radio" === c || "checkbox" === c ? a("input[name='" + a(b).attr("name") + "']:checked").val() : "string" == typeof d ? d.replace(/\r/g, "") : d
    }, check: function (c) {
        c = this.validationTargetFor(this.clean(c));
        var d, j = a(c).rules(), h = !1, f = this.elementValue(c);
        for (var b in j) {
            var k = {method: b, parameters: j[b]};
            try {
                if (d = a.validator.methods[b].call(this, f, c, k.parameters), "dependency-mismatch" === d) {
                    h = !0;
                    continue
                }
                if (h = !1, "pending" === d) {
                    return this.toHide = this.toHide.not(this.errorsFor(c)), void 0
                }
                if (!d) {
                    return this.formatAndAdd(c, k), !1
                }
            } catch (g) {
                throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + c.id + ", check the '" + k.method + "' method.", g), g
            }
        }
        return h ? void 0 : (this.objectLength(j) && this.successList.push(c), !0)
    }, customDataMessage: function (b, c) {
        return a(b).data("msg-" + c.toLowerCase()) || b.attributes && a(b).attr("data-msg-" + c.toLowerCase())
    }, customMessage: function (d, b) {
        var c = this.settings.messages[d];
        return c && (c.constructor === String ? c : c[b])
    }, findDefined: function () {
        for (var b = 0; arguments.length > b; b++) {
            if (void 0 !== arguments[b]) {
                return arguments[b]
            }
        }
        return void 0
    }, defaultMessage: function (b, c) {
        return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
    }, formatAndAdd: function (b, c) {
        var f = this.defaultMessage(b, c.method), d = /\$?\{(\d+)\}/g;
        "function" == typeof f ? f = f.call(this, c.parameters, b) : d.test(f) && (f = a.validator.format(f.replace(d, "{$1}"), c.parameters)), this.errorList.push({message: f, element: b}), this.errorMap[b.name] = f, this.submitted[b.name] = f
    }, addWrapper: function (b) {
        return this.settings.wrapper && (b = b.add(b.parent(this.settings.wrapper))), b
    }, defaultShowErrors: function () {
        var d, b;
        for (d = 0; this.errorList[d]; d++) {
            var c = this.errorList[d];
            this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message)
        }
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) {
            for (d = 0; this.successList[d]; d++) {
                this.showLabel(this.successList[d])
            }
        }
        if (this.settings.unhighlight) {
            for (d = 0, b = this.validElements(); b[d]; d++) {
                this.settings.unhighlight.call(this, b[d], this.settings.errorClass, this.settings.validClass)
            }
        }
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
    }, validElements: function () {
        return this.currentElements.not(this.invalidElements())
    }, invalidElements: function () {
        return a(this.errorList).map(function () {
            return this.element
        })
    }, showLabel: function (b, c) {
        var d = this.errorsFor(b);
        d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.html(c)) : (d = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), this.toShow = this.toShow.add(d)
    }, errorsFor: function (b) {
        var c = this.idOrName(b);
        return this.errors().filter(function () {
            return a(this).attr("for") === c
        })
    }, idOrName: function (b) {
        return this.groups[b.name] || (this.checkable(b) ? b.name : b.id || b.name)
    }, validationTargetFor: function (b) {
        return this.checkable(b) && (b = this.findByName(b.name).not(this.settings.ignore)[0]), b
    }, checkable: function (b) {
        return/radio|checkbox/i.test(b.type)
    }, findByName: function (b) {
        return a(this.currentForm).find("[name='" + b + "']")
    }, getLength: function (b, c) {
        switch (c.nodeName.toLowerCase()) {
            case"select":
                return a("option:selected", c).length;
            case"input":
                if (this.checkable(c)) {
                    return this.findByName(c.name).filter(":checked").length
                }
        }
        return b.length
    }, depend: function (c, b) {
        return this.dependTypes[typeof c] ? this.dependTypes[typeof c](c, b) : !0
    }, dependTypes: {"boolean": function (b) {
        return b
    }, string: function (b, c) {
        return !!a(b, c.form).length
    }, "function": function (c, b) {
        return c(b)
    }}, optional: function (b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
    }, startRequest: function (b) {
        this.pending[b.name] || (this.pendingRequest++, this.pending[b.name] = !0)
    }, stopRequest: function (b, c) {
        this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
    }, previousValue: function (b) {
        return a.data(b, "previousValue") || a.data(b, "previousValue", {old: null, valid: !0, message: this.defaultMessage(b, "remote")})
    }}, classRuleSettings: {required: {required: !0}, email: {email: !0}, url: {url: !0}, date: {date: !0}, dateISO: {dateISO: !0}, number: {number: !0}, digits: {digits: !0}, creditcard: {creditcard: !0}}, addClassRules: function (b, c) {
        b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
    }, classRules: function (b) {
        var c = {}, d = a(b).attr("class");
        return d && a.each(d.split(" "), function () {
            this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
        }), c
    }, attributeRules: function (c) {
        var d = {}, h = a(c), g = h[0].getAttribute("type");
        for (var f in a.validator.methods) {
            var b;
            "required" === f ? (b = h.get(0).getAttribute(f), "" === b && (b = !0), b = !!b) : b = h.attr(f), /min|max/.test(f) && (null === g || /number|range|text/.test(g)) && (b = Number(b)), b ? d[f] = b : g === f && "range" !== g && (d[f] = !0)
        }
        return d.maxlength && /-1|2147483647|524288/.test(d.maxlength) && delete d.maxlength, d
    }, dataRules: function (b) {
        var c, g, f = {}, d = a(b);
        for (c in a.validator.methods) {
            g = d.data("rule-" + c.toLowerCase()), void 0 !== g && (f[c] = g)
        }
        return f
    }, staticRules: function (b) {
        var c = {}, d = a.data(b.form, "validator");
        return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
    }, normalizeRules: function (b, c) {
        return a.each(b, function (f, e) {
            if (e === !1) {
                return delete b[f], void 0
            }
            if (e.param || e.depends) {
                var d = !0;
                switch (typeof e.depends) {
                    case"string":
                        d = !!a(e.depends, c.form).length;
                        break;
                    case"function":
                        d = e.depends.call(c, c)
                }
                d ? b[f] = void 0 !== e.param ? e.param : !0 : delete b[f]
            }
        }), a.each(b, function (e, d) {
            b[e] = a.isFunction(d) ? d(c) : d
        }), a.each(["minlength", "maxlength"], function () {
            b[this] && (b[this] = Number(b[this]))
        }), a.each(["rangelength", "range"], function () {
            var d;
            b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (d = b[this].split(/[\s,]+/), b[this] = [Number(d[0]), Number(d[1])]))
        }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
    }, normalizeRule: function (b) {
        if ("string" == typeof b) {
            var c = {};
            a.each(b.split(/\s/), function () {
                c[this] = !0
            }), b = c
        }
        return b
    }, addMethod: function (b, c, d) {
        a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], 3 > c.length && a.validator.addClassRules(b, a.validator.normalizeRule(b))
    }, methods: {required: function (b, c, f) {
        if (!this.depend(f, c)) {
            return"dependency-mismatch"
        }
        if ("select" === c.nodeName.toLowerCase()) {
            var d = a(c).val();
            return d && d.length > 0
        }
        return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
    }, email: function (c, b) {
        return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(c)
    }, url: function (c, b) {
        return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(c)
    }, date: function (c, b) {
        return this.optional(b) || !/Invalid|NaN/.test("" + new Date(c))
    }, dateISO: function (c, b) {
        return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(c)
    }, number: function (c, b) {
        return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(c)
    }, digits: function (c, b) {
        return this.optional(b) || /^\d+$/.test(c)
    }, creditcard: function (j, c) {
        if (this.optional(c)) {
            return"dependency-mismatch"
        }
        if (/[^0-9 \-]+/.test(j)) {
            return !1
        }
        var d = 0, h = 0, g = !1;
        j = j.replace(/\D/g, "");
        for (var f = j.length - 1; f >= 0; f--) {
            var b = j.charAt(f);
            h = parseInt(b, 10), g && (h *= 2) > 9 && (h -= 9), d += h, g = !g
        }
        return 0 === d % 10
    }, minlength: function (b, c, f) {
        var d = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
        return this.optional(c) || d >= f
    }, maxlength: function (b, c, f) {
        var d = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
        return this.optional(c) || f >= d
    }, rangelength: function (b, c, f) {
        var d = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
        return this.optional(c) || d >= f[0] && f[1] >= d
    }, min: function (d, b, c) {
        return this.optional(b) || d >= c
    }, max: function (d, b, c) {
        return this.optional(b) || c >= d
    }, range: function (d, b, c) {
        return this.optional(b) || d >= c[0] && c[1] >= d
    }, equalTo: function (b, c, f) {
        var d = a(f);
        return this.settings.onfocusout && d.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
            a(c).valid()
        }), b === d.val()
    }, remote: function (c, d, h) {
        if (this.optional(d)) {
            return"dependency-mismatch"
        }
        var g = this.previousValue(d);
        if (this.settings.messages[d.name] || (this.settings.messages[d.name] = {}), g.originalMessage = this.settings.messages[d.name].remote, this.settings.messages[d.name].remote = g.message, h = "string" == typeof h && {url: h} || h, g.old === c) {
            return g.valid
        }
        g.old = c;
        var f = this;
        this.startRequest(d);
        var b = {};
        return b[d.name] = c, a.ajax(a.extend(!0, {url: h, mode: "abort", port: "validate" + d.name, dataType: "json", data: b, success: function (m) {
            f.settings.messages[d.name].remote = g.originalMessage;
            var e = m === !0 || "true" === m;
            if (e) {
                var n = f.formSubmitted;
                f.prepareElement(d), f.formSubmitted = n, f.successList.push(d), delete f.invalid[d.name], f.showErrors()
            } else {
                var k = {}, j = m || f.defaultMessage(d, "remote");
                k[d.name] = g.message = a.isFunction(j) ? j(c) : j, f.invalid[d.name] = !0, f.showErrors(k)
            }
            g.valid = e, f.stopRequest(d, e)
        }}, h)), "pending"
    }}}), a.format = a.validator.format
})(jQuery), function (c) {
    var a = {};
    if (c.ajaxPrefilter) {
        c.ajaxPrefilter(function (g, d, f) {
            var e = g.port;
            "abort" === g.mode && (a[e] && a[e].abort(), a[e] = f)
        })
    } else {
        var b = c.ajax;
        c.ajax = function (f) {
            var e = ("mode" in f ? f : c.ajaxSettings).mode, d = ("port" in f ? f : c.ajaxSettings).port;
            return"abort" === e ? (a[d] && a[d].abort(), a[d] = b.apply(this, arguments), a[d]) : b.apply(this, arguments)
        }
    }
}(jQuery), function (a) {
    a.extend(a.fn, {validateDelegate: function (b, c, d) {
        return this.bind(c, function (e) {
            var f = a(e.target);
            return f.is(b) ? d.apply(f, arguments) : void 0
        })
    }})
}(jQuery);
(function (j) {
    var k = "unobtrusiveAjaxClick", p = "unobtrusiveValidation";

    function l(h, f) {
        var e = window, g = (h || "").split(".");
        while (e && g.length) {
            e = e[g.shift()]
        }
        if (typeof e === "function") {
            return e
        }
        f.push(h);
        return Function.constructor.apply(null, f)
    }

    function m(b) {
        return b === "GET" || b === "POST"
    }

    function o(d, c) {
        !m(c) && d.setRequestHeader("X-HTTP-Method-Override", c)
    }

    function q(f, a, h) {
        var g;
        if (h.indexOf("application/x-javascript") !== -1) {
            return
        }
        g = (f.getAttribute("data-ajax-mode") || "").toUpperCase();
        j(f.getAttribute("data-ajax-update")).each(function (s, b) {
            var d;
            switch (g) {
                case"BEFORE":
                    d = b.firstChild;
                    j("<div />").html(a).contents().each(function () {
                        b.insertBefore(this, d)
                    });
                    break;
                case"AFTER":
                    j("<div />").html(a).contents().each(function () {
                        b.appendChild(this)
                    });
                    break;
                default:
                    j(b).html(a)
            }
        })
    }

    function n(a, c) {
        var h, s, d, f;
        h = a.getAttribute("data-ajax-confirm");
        if (h && !window.confirm(h)) {
            return
        }
        s = j(a.getAttribute("data-ajax-loading"));
        f = a.getAttribute("data-ajax-loading-duration") || 0;
        j.extend(c, {type: a.getAttribute("data-ajax-method") || undefined, url: a.getAttribute("data-ajax-url") || undefined, beforeSend: function (e) {
            var b;
            o(e, d);
            b = l(a.getAttribute("data-ajax-begin"), ["xhr"]).apply(this, arguments);
            b !== false && s.show(f);
            return b
        }, complete: function () {
            s.hide(f);
            l(a.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(this, arguments)
        }, success: function (b, t, g) {
            q(a, b, g.getResponseHeader("Content-Type") || "text/html");
            l(a.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(this, arguments)
        }, error: l(a.getAttribute("data-ajax-failure"), ["xhr", "status", "error"])});
        c.data.push({name: "X-Requested-With", value: "XMLHttpRequest"});
        d = c.type.toUpperCase();
        if (!m(d)) {
            c.type = "POST";
            c.data.push({name: "X-HTTP-Method-Override", value: d})
        }
        j.ajax(c)
    }

    function r(d) {
        var a = j(d).data(p);
        return !a || !a.validate || a.validate()
    }

    j(document).on("click", "a[data-ajax=true]", function (b) {
        b.preventDefault();
        n(this, {url: this.href, type: "GET", data: []})
    });
    j(document).on("click", "form[data-ajax=true] input[type=image]", function (a) {
        var t = a.target.name, b = j(a.target), s = b.parents("form")[0], h = b.offset();
        j(s).data(k, [
            {name: t + ".x", value: Math.round(a.pageX - h.left)},
            {name: t + ".y", value: Math.round(a.pageY - h.top)}
        ]);
        setTimeout(function () {
            j(s).removeData(k)
        }, 0)
    });
    j(document).on("click", "form[data-ajax=true] :submit", function (a) {
        var f = a.target.name, b = j(a.target).parents("form")[0];
        j(b).data(k, f ? [
            {name: f, value: a.target.value}
        ] : []);
        setTimeout(function () {
            j(b).removeData(k)
        }, 0)
    });
    j(document).on("submit", "form[data-ajax=true]", function (b) {
        var a = j(this).data(k) || [];
        b.preventDefault();
        if (!r(this)) {
            return
        }
        n(this, {url: this.action, type: this.method || "GET", data: a.concat(j(this).serializeArray())})
    })
})(jQuery);
!function (j) {
    function m() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function g() {
        var a = new Date();
        return m(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), 0)
    }

    var l = function (b, a) {
        var c = this;
        this.element = j(b);
        this.language = a.language || this.element.data("date-language") || "en";
        this.language = this.language in k ? this.language : "en";
        this.isRTL = k[this.language].rtl || false;
        this.formatType = a.formatType || this.element.data("format-type") || "standard";
        this.format = h.parseFormat(a.format || this.element.data("date-format") || k[this.language].format || h.getDefaultFormat(this.formatType, "input"), this.formatType);
        this.isInline = false;
        this.isVisible = false;
        this.isInput = this.element.is("input");
        this.bootcssVer = this.isInput ? (this.element.is(".form-control") ? 3 : 2) : (this.bootcssVer = this.element.is(".input-group") ? 3 : 2);
        this.component = this.element.is(".date") ? (this.bootcssVer == 3 ? this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-calendar").parent() : this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar").parent()) : false;
        this.componentReset = this.element.is(".date") ? (this.bootcssVer == 3 ? this.element.find(".input-group-addon .glyphicon-remove").parent() : this.element.find(".add-on .icon-remove").parent()) : false;
        this.hasInput = this.component && this.element.find("input").length;
        if (this.component && this.component.length === 0) {
            this.component = false
        }
        this.linkField = a.linkField || this.element.data("link-field") || false;
        this.linkFormat = h.parseFormat(a.linkFormat || this.element.data("link-format") || h.getDefaultFormat(this.formatType, "link"), this.formatType);
        this.minuteStep = a.minuteStep || this.element.data("minute-step") || 5;
        this.pickerPosition = a.pickerPosition || this.element.data("picker-position") || "bottom-right";
        this.showMeridian = a.showMeridian || this.element.data("show-meridian") || false;
        this.initialDate = a.initialDate || new Date();
        this._attachEvents();
        this.formatViewType = "datetime";
        if ("formatViewType" in a) {
            this.formatViewType = a.formatViewType
        } else {
            if ("formatViewType" in this.element.data()) {
                this.formatViewType = this.element.data("formatViewType")
            }
        }
        this.minView = 0;
        if ("minView" in a) {
            this.minView = a.minView
        } else {
            if ("minView" in this.element.data()) {
                this.minView = this.element.data("min-view")
            }
        }
        this.minView = h.convertViewMode(this.minView);
        this.maxView = h.modes.length - 1;
        if ("maxView" in a) {
            this.maxView = a.maxView
        } else {
            if ("maxView" in this.element.data()) {
                this.maxView = this.element.data("max-view")
            }
        }
        this.maxView = h.convertViewMode(this.maxView);
        this.wheelViewModeNavigation = false;
        if ("wheelViewModeNavigation" in a) {
            this.wheelViewModeNavigation = a.wheelViewModeNavigation
        } else {
            if ("wheelViewModeNavigation" in this.element.data()) {
                this.wheelViewModeNavigation = this.element.data("view-mode-wheel-navigation")
            }
        }
        this.wheelViewModeNavigationInverseDirection = false;
        if ("wheelViewModeNavigationInverseDirection" in a) {
            this.wheelViewModeNavigationInverseDirection = a.wheelViewModeNavigationInverseDirection
        } else {
            if ("wheelViewModeNavigationInverseDirection" in this.element.data()) {
                this.wheelViewModeNavigationInverseDirection = this.element.data("view-mode-wheel-navigation-inverse-dir")
            }
        }
        this.wheelViewModeNavigationDelay = 100;
        if ("wheelViewModeNavigationDelay" in a) {
            this.wheelViewModeNavigationDelay = a.wheelViewModeNavigationDelay
        } else {
            if ("wheelViewModeNavigationDelay" in this.element.data()) {
                this.wheelViewModeNavigationDelay = this.element.data("view-mode-wheel-navigation-delay")
            }
        }
        this.startViewMode = 2;
        if ("startView" in a) {
            this.startViewMode = a.startView
        } else {
            if ("startView" in this.element.data()) {
                this.startViewMode = this.element.data("start-view")
            }
        }
        this.startViewMode = h.convertViewMode(this.startViewMode);
        this.viewMode = this.startViewMode;
        this.viewSelect = this.minView;
        if ("viewSelect" in a) {
            this.viewSelect = a.viewSelect
        } else {
            if ("viewSelect" in this.element.data()) {
                this.viewSelect = this.element.data("view-select")
            }
        }
        this.viewSelect = h.convertViewMode(this.viewSelect);
        this.forceParse = true;
        if ("forceParse" in a) {
            this.forceParse = a.forceParse
        } else {
            if ("dateForceParse" in this.element.data()) {
                this.forceParse = this.element.data("date-force-parse")
            }
        }
        this.picker = j((this.bootcssVer == 3) ? h.templateV3 : h.template).appendTo(this.isInline ? this.element : "body").on({click: j.proxy(this.click, this), mousedown: j.proxy(this.mousedown, this)});
        if (this.wheelViewModeNavigation) {
            if (j.fn.mousewheel) {
                this.picker.on({mousewheel: j.proxy(this.mousewheel, this)})
            } else {
                console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")
            }
        }
        if (this.isInline) {
            this.picker.addClass("datetimepicker-inline")
        } else {
            this.picker.addClass("datetimepicker-dropdown-" + this.pickerPosition + " dropdown-menu")
        }
        if (this.isRTL) {
            this.picker.addClass("datetimepicker-rtl");
            if (this.bootcssVer == 3) {
                this.picker.find(".prev span, .next span").toggleClass("glyphicon-arrow-left glyphicon-arrow-right")
            } else {
                this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")
            }
        }
        j(document).on("mousedown", function (d) {
            if (j(d.target).closest(".datetimepicker").length === 0) {
                c.hide()
            }
        });
        this.autoclose = false;
        if ("autoclose" in a) {
            this.autoclose = a.autoclose
        } else {
            if ("dateAutoclose" in this.element.data()) {
                this.autoclose = this.element.data("date-autoclose")
            }
        }
        this.keyboardNavigation = true;
        if ("keyboardNavigation" in a) {
            this.keyboardNavigation = a.keyboardNavigation
        } else {
            if ("dateKeyboardNavigation" in this.element.data()) {
                this.keyboardNavigation = this.element.data("date-keyboard-navigation")
            }
        }
        this.todayBtn = (a.todayBtn || this.element.data("date-today-btn") || false);
        this.todayHighlight = (a.todayHighlight || this.element.data("date-today-highlight") || false);
        this.weekStart = ((a.weekStart || this.element.data("date-weekstart") || k[this.language].weekStart || 0) % 7);
        this.weekEnd = ((this.weekStart + 6) % 7);
        this.startDate = -Infinity;
        this.endDate = Infinity;
        this.daysOfWeekDisabled = [];
        this.setStartDate(a.startDate || this.element.data("date-startdate"));
        this.setEndDate(a.endDate || this.element.data("date-enddate"));
        this.setDaysOfWeekDisabled(a.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled"));
        this.fillDow();
        this.fillMonths();
        this.update();
        this.showMode();
        if (this.isInline) {
            this.show()
        }
    };
    l.prototype = {constructor: l, _events: [], _attachEvents: function () {
        this._detachEvents();
        if (this.isInput) {
            this._events = [
                [this.element, {focus: j.proxy(this.show, this), keyup: j.proxy(this.update, this), keydown: j.proxy(this.keydown, this)}]
            ]
        } else {
            if (this.component && this.hasInput) {
                this._events = [
                    [this.element.find("input"), {focus: j.proxy(this.show, this), keyup: j.proxy(this.update, this), keydown: j.proxy(this.keydown, this)}],
                    [this.component, {click: j.proxy(this.show, this)}]
                ];
                if (this.componentReset) {
                    this._events.push([this.componentReset, {click: j.proxy(this.reset, this)}])
                }
            } else {
                if (this.element.is("div")) {
                    this.isInline = true
                } else {
                    this._events = [
                        [this.element, {click: j.proxy(this.show, this)}]
                    ]
                }
            }
        }
        for (var a = 0, b, c; a < this._events.length; a++) {
            b = this._events[a][0];
            c = this._events[a][1];
            b.on(c)
        }
    }, _detachEvents: function () {
        for (var a = 0, b, c; a < this._events.length; a++) {
            b = this._events[a][0];
            c = this._events[a][1];
            b.off(c)
        }
        this._events = []
    }, show: function (a) {
        this.picker.show();
        this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
        if (this.forceParse) {
            this.update()
        }
        this.place();
        j(window).on("resize", j.proxy(this.place, this));
        if (a) {
            a.stopPropagation();
            a.preventDefault()
        }
        this.isVisible = true;
        this.element.trigger({type: "show", date: this.date})
    }, hide: function (a) {
        if (!this.isVisible) {
            return
        }
        if (this.isInline) {
            return
        }
        this.picker.hide();
        j(window).off("resize", this.place);
        this.viewMode = this.startViewMode;
        this.showMode();
        if (!this.isInput) {
            j(document).off("mousedown", this.hide)
        }
        if (this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val())) {
            this.setValue()
        }
        this.isVisible = false;
        this.element.trigger({type: "hide", date: this.date})
    }, remove: function () {
        this._detachEvents();
        this.picker.remove();
        delete this.picker;
        delete this.element.data().datetimepicker
    }, getDate: function () {
        var a = this.getUTCDate();
        return new Date(a.getTime() + (a.getTimezoneOffset() * 60000))
    }, getUTCDate: function () {
        return this.date
    }, setDate: function (a) {
        this.setUTCDate(new Date(a.getTime() - (a.getTimezoneOffset() * 60000)))
    }, setUTCDate: function (a) {
        if (a >= this.startDate && a <= this.endDate) {
            this.date = a;
            this.setValue();
            this.viewDate = this.date;
            this.fill()
        } else {
            this.element.trigger({type: "outOfRange", date: a, startDate: this.startDate, endDate: this.endDate})
        }
    }, setFormat: function (b) {
        this.format = h.parseFormat(b, this.formatType);
        var a;
        if (this.isInput) {
            a = this.element
        } else {
            if (this.component) {
                a = this.element.find("input")
            }
        }
        if (a && a.val()) {
            this.setValue()
        }
    }, setValue: function () {
        var a = this.getFormattedDate();
        if (!this.isInput) {
            if (this.component) {
                this.element.find("input").val(a)
            }
            this.element.data("date", a)
        } else {
            this.element.val(a)
        }
        if (this.linkField) {
            j("#" + this.linkField).val(this.getFormattedDate(this.linkFormat))
        }
    }, getFormattedDate: function (a) {
        if (a == undefined) {
            a = this.format
        }
        return h.formatDate(this.date, a, this.language, this.formatType)
    }, setStartDate: function (a) {
        this.startDate = a || -Infinity;
        if (this.startDate !== -Infinity) {
            this.startDate = h.parseDate(this.startDate, this.format, this.language, this.formatType)
        }
        this.update();
        this.updateNavArrows()
    }, setEndDate: function (a) {
        this.endDate = a || Infinity;
        if (this.endDate !== Infinity) {
            this.endDate = h.parseDate(this.endDate, this.format, this.language, this.formatType)
        }
        this.update();
        this.updateNavArrows()
    }, setDaysOfWeekDisabled: function (a) {
        this.daysOfWeekDisabled = a || [];
        if (!j.isArray(this.daysOfWeekDisabled)) {
            this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)
        }
        this.daysOfWeekDisabled = j.map(this.daysOfWeekDisabled, function (b) {
            return parseInt(b, 10)
        });
        this.update();
        this.updateNavArrows()
    }, place: function () {
        if (this.isInline) {
            return
        }
        var a = 0;
        j("div").each(function () {
            var f = parseInt(j(this).css("zIndex"), 10);
            if (f > a) {
                a = f
            }
        });
        var e = a + 10;
        var d, c, b;
        if (this.component) {
            d = this.component.offset();
            b = d.left;
            if (this.pickerPosition == "bottom-left" || this.pickerPosition == "top-left") {
                b += this.component.outerWidth() - this.picker.outerWidth()
            }
        } else {
            d = this.element.offset();
            b = d.left
        }
        if (this.pickerPosition == "top-left" || this.pickerPosition == "top-right") {
            c = d.top - this.picker.outerHeight()
        } else {
            c = d.top + this.height
        }
        this.picker.css({top: c, left: b, zIndex: e})
    }, update: function () {
        var a, b = false;
        if (arguments && arguments.length && (typeof arguments[0] === "string" || arguments[0] instanceof Date)) {
            a = arguments[0];
            b = true
        } else {
            a = this.element.data("date") || (this.isInput ? this.element.val() : this.element.find("input").val()) || this.initialDate
        }
        if (!a) {
            a = new Date();
            b = false
        }
        this.date = h.parseDate(a, this.format, this.language, this.formatType);
        if (b) {
            this.setValue()
        }
        if (this.date < this.startDate) {
            this.viewDate = new Date(this.startDate)
        } else {
            if (this.date > this.endDate) {
                this.viewDate = new Date(this.endDate)
            } else {
                this.viewDate = new Date(this.date)
            }
        }
        this.fill()
    }, fillDow: function () {
        var a = this.weekStart, b = "<tr>";
        while (a < this.weekStart + 7) {
            b += '<th class="dow">' + k[this.language].daysMin[(a++) % 7] + "</th>"
        }
        b += "</tr>";
        this.picker.find(".datetimepicker-days thead").append(b)
    }, fillMonths: function () {
        var b = "", a = 0;
        while (a < 12) {
            b += '<span class="month">' + k[this.language].monthsShort[a++] + "</span>"
        }
        this.picker.find(".datetimepicker-months td").html(b)
    }, fill: function () {
        if (this.date == null || this.viewDate == null) {
            return
        }
        var e = new Date(this.viewDate), X = e.getUTCFullYear(), f = e.getUTCMonth(), P = e.getUTCDate(), ag = e.getUTCHours(), ab = e.getUTCMinutes(), ac = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity, a = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity, S = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity, ad = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity, U = (new m(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate())).valueOf(), d = new Date();
        this.picker.find(".datetimepicker-days thead th:eq(1)").text(k[this.language].months[f] + " " + X);
        if (this.formatViewType == "time") {
            var b = ag % 12 ? ag % 12 : 12;
            var M = (b < 10 ? "0" : "") + b;
            var T = (ab < 10 ? "0" : "") + ab;
            var N = k[this.language].meridiem[ag < 12 ? 0 : 1];
            this.picker.find(".datetimepicker-hours thead th:eq(1)").text(M + ":" + T + " " + N.toUpperCase());
            this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(M + ":" + T + " " + N.toUpperCase())
        } else {
            this.picker.find(".datetimepicker-hours thead th:eq(1)").text(P + " " + k[this.language].months[f] + " " + X);
            this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(P + " " + k[this.language].months[f] + " " + X)
        }
        this.picker.find("tfoot th.today").text(k[this.language].today).toggle(this.todayBtn !== false);
        this.updateNavArrows();
        this.fillMonths();
        var O = m(X, f - 1, 28, 0, 0, 0, 0), af = h.getDaysInMonth(O.getUTCFullYear(), O.getUTCMonth());
        O.setUTCDate(af);
        O.setUTCDate(af - (O.getUTCDay() - this.weekStart + 7) % 7);
        var K = new Date(O);
        K.setUTCDate(K.getUTCDate() + 42);
        K = K.valueOf();
        var V = [];
        var Y;
        while (O.valueOf() < K) {
            if (O.getUTCDay() == this.weekStart) {
                V.push("<tr>")
            }
            Y = "";
            if (O.getUTCFullYear() < X || (O.getUTCFullYear() == X && O.getUTCMonth() < f)) {
                Y += " old"
            } else {
                if (O.getUTCFullYear() > X || (O.getUTCFullYear() == X && O.getUTCMonth() > f)) {
                    Y += " new"
                }
            }
            if (this.todayHighlight && O.getUTCFullYear() == d.getFullYear() && O.getUTCMonth() == d.getMonth() && O.getUTCDate() == d.getDate()) {
                Y += " today"
            }
            if (O.valueOf() == U) {
                Y += " active"
            }
            if ((O.valueOf() + 86400000) <= this.startDate || O.valueOf() > this.endDate || j.inArray(O.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
                Y += " disabled"
            }
            V.push('<td class="day' + Y + '">' + O.getUTCDate() + "</td>");
            if (O.getUTCDay() == this.weekEnd) {
                V.push("</tr>")
            }
            O.setUTCDate(O.getUTCDate() + 1)
        }
        this.picker.find(".datetimepicker-days tbody").empty().append(V.join(""));
        V = [];
        var Z = "", c = "", W = "";
        for (var ae = 0; ae < 24; ae++) {
            var aa = m(X, f, P, ae);
            Y = "";
            if ((aa.valueOf() + 3600000) <= this.startDate || aa.valueOf() > this.endDate) {
                Y += " disabled"
            } else {
                if (ag == ae) {
                    Y += " active"
                }
            }
            if (this.showMeridian && k[this.language].meridiem.length == 2) {
                c = (ae < 12 ? k[this.language].meridiem[0] : k[this.language].meridiem[1]);
                if (c != W) {
                    if (W != "") {
                        V.push("</fieldset>")
                    }
                    V.push('<fieldset class="hour"><legend>' + c.toUpperCase() + "</legend>")
                }
                W = c;
                Z = (ae % 12 ? ae % 12 : 12);
                V.push('<span class="hour' + Y + " hour_" + (ae < 12 ? "am" : "pm") + '">' + Z + "</span>");
                if (ae == 23) {
                    V.push("</fieldset>")
                }
            } else {
                Z = ae + ":00";
                V.push('<span class="hour' + Y + '">' + Z + "</span>")
            }
        }
        this.picker.find(".datetimepicker-hours td").html(V.join(""));
        V = [];
        Z = "", c = "", W = "";
        for (var ae = 0; ae < 60; ae += this.minuteStep) {
            var aa = m(X, f, P, ag, ae, 0);
            Y = "";
            if (aa.valueOf() < this.startDate || aa.valueOf() > this.endDate) {
                Y += " disabled"
            } else {
                if (Math.floor(ab / this.minuteStep) == Math.floor(ae / this.minuteStep)) {
                    Y += " active"
                }
            }
            if (this.showMeridian && k[this.language].meridiem.length == 2) {
                c = (ag < 12 ? k[this.language].meridiem[0] : k[this.language].meridiem[1]);
                if (c != W) {
                    if (W != "") {
                        V.push("</fieldset>")
                    }
                    V.push('<fieldset class="minute"><legend>' + c.toUpperCase() + "</legend>")
                }
                W = c;
                Z = (ag % 12 ? ag % 12 : 12);
                V.push('<span class="minute' + Y + '">' + Z + ":" + (ae < 10 ? "0" + ae : ae) + "</span>");
                if (ae == 59) {
                    V.push("</fieldset>")
                }
            } else {
                Z = ae + ":00";
                V.push('<span class="minute' + Y + '">' + ag + ":" + (ae < 10 ? "0" + ae : ae) + "</span>")
            }
        }
        this.picker.find(".datetimepicker-minutes td").html(V.join(""));
        var Q = this.date.getUTCFullYear();
        var R = this.picker.find(".datetimepicker-months").find("th:eq(1)").text(X).end().find("span").removeClass("active");
        if (Q == X) {
            R.eq(this.date.getUTCMonth()).addClass("active")
        }
        if (X < ac || X > S) {
            R.addClass("disabled")
        }
        if (X == ac) {
            R.slice(0, a).addClass("disabled")
        }
        if (X == S) {
            R.slice(ad + 1).addClass("disabled")
        }
        V = "";
        X = parseInt(X / 10, 10) * 10;
        var L = this.picker.find(".datetimepicker-years").find("th:eq(1)").text(X + "-" + (X + 9)).end().find("td");
        X -= 1;
        for (var ae = -1; ae < 11; ae++) {
            V += '<span class="year' + (ae == -1 || ae == 10 ? " old" : "") + (Q == X ? " active" : "") + (X < ac || X > S ? " disabled" : "") + '">' + X + "</span>";
            X += 1
        }
        L.html(V);
        this.place()
    }, updateNavArrows: function () {
        var e = new Date(this.viewDate), c = e.getUTCFullYear(), d = e.getUTCMonth(), b = e.getUTCDate(), a = e.getUTCHours();
        switch (this.viewMode) {
            case 0:
                if (this.startDate !== -Infinity && c <= this.startDate.getUTCFullYear() && d <= this.startDate.getUTCMonth() && b <= this.startDate.getUTCDate() && a <= this.startDate.getUTCHours()) {
                    this.picker.find(".prev").css({visibility: "hidden"})
                } else {
                    this.picker.find(".prev").css({visibility: "visible"})
                }
                if (this.endDate !== Infinity && c >= this.endDate.getUTCFullYear() && d >= this.endDate.getUTCMonth() && b >= this.endDate.getUTCDate() && a >= this.endDate.getUTCHours()) {
                    this.picker.find(".next").css({visibility: "hidden"})
                } else {
                    this.picker.find(".next").css({visibility: "visible"})
                }
                break;
            case 1:
                if (this.startDate !== -Infinity && c <= this.startDate.getUTCFullYear() && d <= this.startDate.getUTCMonth() && b <= this.startDate.getUTCDate()) {
                    this.picker.find(".prev").css({visibility: "hidden"})
                } else {
                    this.picker.find(".prev").css({visibility: "visible"})
                }
                if (this.endDate !== Infinity && c >= this.endDate.getUTCFullYear() && d >= this.endDate.getUTCMonth() && b >= this.endDate.getUTCDate()) {
                    this.picker.find(".next").css({visibility: "hidden"})
                } else {
                    this.picker.find(".next").css({visibility: "visible"})
                }
                break;
            case 2:
                if (this.startDate !== -Infinity && c <= this.startDate.getUTCFullYear() && d <= this.startDate.getUTCMonth()) {
                    this.picker.find(".prev").css({visibility: "hidden"})
                } else {
                    this.picker.find(".prev").css({visibility: "visible"})
                }
                if (this.endDate !== Infinity && c >= this.endDate.getUTCFullYear() && d >= this.endDate.getUTCMonth()) {
                    this.picker.find(".next").css({visibility: "hidden"})
                } else {
                    this.picker.find(".next").css({visibility: "visible"})
                }
                break;
            case 3:
            case 4:
                if (this.startDate !== -Infinity && c <= this.startDate.getUTCFullYear()) {
                    this.picker.find(".prev").css({visibility: "hidden"})
                } else {
                    this.picker.find(".prev").css({visibility: "visible"})
                }
                if (this.endDate !== Infinity && c >= this.endDate.getUTCFullYear()) {
                    this.picker.find(".next").css({visibility: "hidden"})
                } else {
                    this.picker.find(".next").css({visibility: "visible"})
                }
                break
        }
    }, mousewheel: function (b) {
        b.preventDefault();
        b.stopPropagation();
        if (this.wheelPause) {
            return
        }
        this.wheelPause = true;
        var a = b.originalEvent;
        var d = a.wheelDelta;
        var c = d > 0 ? 1 : (d === 0) ? 0 : -1;
        if (this.wheelViewModeNavigationInverseDirection) {
            c = -c
        }
        this.showMode(c);
        setTimeout(j.proxy(function () {
            this.wheelPause = false
        }, this), this.wheelViewModeNavigationDelay)
    }, click: function (e) {
        e.stopPropagation();
        e.preventDefault();
        var f = j(e.target).closest("span, td, th, legend");
        if (f.length == 1) {
            if (f.is(".disabled")) {
                this.element.trigger({type: "outOfRange", date: this.viewDate, startDate: this.startDate, endDate: this.endDate});
                return
            }
            switch (f[0].nodeName.toLowerCase()) {
                case"th":
                    switch (f[0].className) {
                        case"switch":
                            this.showMode(1);
                            break;
                        case"prev":
                        case"next":
                            var a = h.modes[this.viewMode].navStep * (f[0].className == "prev" ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveHour(this.viewDate, a);
                                    break;
                                case 1:
                                    this.viewDate = this.moveDate(this.viewDate, a);
                                    break;
                                case 2:
                                    this.viewDate = this.moveMonth(this.viewDate, a);
                                    break;
                                case 3:
                                case 4:
                                    this.viewDate = this.moveYear(this.viewDate, a);
                                    break
                            }
                            this.fill();
                            break;
                        case"today":
                            var b = new Date();
                            b = m(b.getFullYear(), b.getMonth(), b.getDate(), b.getHours(), b.getMinutes(), b.getSeconds(), 0);
                            if (b < this.startDate) {
                                b = this.startDate
                            } else {
                                if (b > this.endDate) {
                                    b = this.endDate
                                }
                            }
                            this.viewMode = this.startViewMode;
                            this.showMode(0);
                            this._setDate(b);
                            this.fill();
                            if (this.autoclose) {
                                this.hide()
                            }
                            break
                    }
                    break;
                case"span":
                    if (!f.is(".disabled")) {
                        var s = this.viewDate.getUTCFullYear(), r = this.viewDate.getUTCMonth(), t = this.viewDate.getUTCDate(), u = this.viewDate.getUTCHours(), c = this.viewDate.getUTCMinutes(), v = this.viewDate.getUTCSeconds();
                        if (f.is(".month")) {
                            this.viewDate.setUTCDate(1);
                            r = f.parent().find("span").index(f);
                            t = this.viewDate.getUTCDate();
                            this.viewDate.setUTCMonth(r);
                            this.element.trigger({type: "changeMonth", date: this.viewDate});
                            if (this.viewSelect >= 3) {
                                this._setDate(m(s, r, t, u, c, v, 0))
                            }
                        } else {
                            if (f.is(".year")) {
                                this.viewDate.setUTCDate(1);
                                s = parseInt(f.text(), 10) || 0;
                                this.viewDate.setUTCFullYear(s);
                                this.element.trigger({type: "changeYear", date: this.viewDate});
                                if (this.viewSelect >= 4) {
                                    this._setDate(m(s, r, t, u, c, v, 0))
                                }
                            } else {
                                if (f.is(".hour")) {
                                    u = parseInt(f.text(), 10) || 0;
                                    if (f.hasClass("hour_am") || f.hasClass("hour_pm")) {
                                        if (u == 12 && f.hasClass("hour_am")) {
                                            u = 0
                                        } else {
                                            if (u != 12 && f.hasClass("hour_pm")) {
                                                u += 12
                                            }
                                        }
                                    }
                                    this.viewDate.setUTCHours(u);
                                    this.element.trigger({type: "changeHour", date: this.viewDate});
                                    if (this.viewSelect >= 1) {
                                        this._setDate(m(s, r, t, u, c, v, 0))
                                    }
                                } else {
                                    if (f.is(".minute")) {
                                        c = parseInt(f.text().substr(f.text().indexOf(":") + 1), 10) || 0;
                                        this.viewDate.setUTCMinutes(c);
                                        this.element.trigger({type: "changeMinute", date: this.viewDate});
                                        if (this.viewSelect >= 0) {
                                            this._setDate(m(s, r, t, u, c, v, 0))
                                        }
                                    }
                                }
                            }
                        }
                        if (this.viewMode != 0) {
                            var d = this.viewMode;
                            this.showMode(-1);
                            this.fill();
                            if (d == this.viewMode && this.autoclose) {
                                this.hide()
                            }
                        } else {
                            this.fill();
                            if (this.autoclose) {
                                this.hide()
                            }
                        }
                    }
                    break;
                case"td":
                    if (f.is(".day") && !f.is(".disabled")) {
                        var t = parseInt(f.text(), 10) || 1;
                        var s = this.viewDate.getUTCFullYear(), r = this.viewDate.getUTCMonth(), u = this.viewDate.getUTCHours(), c = this.viewDate.getUTCMinutes(), v = this.viewDate.getUTCSeconds();
                        if (f.is(".old")) {
                            if (r === 0) {
                                r = 11;
                                s -= 1
                            } else {
                                r -= 1
                            }
                        } else {
                            if (f.is(".new")) {
                                if (r == 11) {
                                    r = 0;
                                    s += 1
                                } else {
                                    r += 1
                                }
                            }
                        }
                        this.viewDate.setUTCFullYear(s);
                        this.viewDate.setUTCMonth(r);
                        this.viewDate.setUTCDate(t);
                        this.element.trigger({type: "changeDay", date: this.viewDate});
                        if (this.viewSelect >= 2) {
                            this._setDate(m(s, r, t, u, c, v, 0))
                        }
                    }
                    var d = this.viewMode;
                    this.showMode(-1);
                    this.fill();
                    if (d == this.viewMode && this.autoclose) {
                        this.hide()
                    }
                    break
            }
        }
    }, _setDate: function (a, c) {
        if (!c || c == "date") {
            this.date = a
        }
        if (!c || c == "view") {
            this.viewDate = a
        }
        this.fill();
        this.setValue();
        var b;
        if (this.isInput) {
            b = this.element
        } else {
            if (this.component) {
                b = this.element.find("input")
            }
        }
        if (b) {
            b.change();
            if (this.autoclose && (!c || c == "date")) {
            }
        }
        this.element.trigger({type: "changeDate", date: this.date})
    }, moveMinute: function (b, a) {
        if (!a) {
            return b
        }
        var c = new Date(b.valueOf());
        c.setUTCMinutes(c.getUTCMinutes() + (a * this.minuteStep));
        return c
    }, moveHour: function (b, a) {
        if (!a) {
            return b
        }
        var c = new Date(b.valueOf());
        c.setUTCHours(c.getUTCHours() + a);
        return c
    }, moveDate: function (b, a) {
        if (!a) {
            return b
        }
        var c = new Date(b.valueOf());
        c.setUTCDate(c.getUTCDate() + a);
        return c
    }, moveMonth: function (a, b) {
        if (!b) {
            return a
        }
        var e = new Date(a.valueOf()), s = e.getUTCDate(), f = e.getUTCMonth(), d = Math.abs(b), r, q;
        b = b > 0 ? 1 : -1;
        if (d == 1) {
            q = b == -1 ? function () {
                return e.getUTCMonth() == f
            } : function () {
                return e.getUTCMonth() != r
            };
            r = f + b;
            e.setUTCMonth(r);
            if (r < 0 || r > 11) {
                r = (r + 12) % 12
            }
        } else {
            for (var c = 0; c < d; c++) {
                e = this.moveMonth(e, b)
            }
            r = e.getUTCMonth();
            e.setUTCDate(s);
            q = function () {
                return r != e.getUTCMonth()
            }
        }
        while (q()) {
            e.setUTCDate(--s);
            e.setUTCMonth(r)
        }
        return e
    }, moveYear: function (b, a) {
        return this.moveMonth(b, a * 12)
    }, dateWithinRange: function (a) {
        return a >= this.startDate && a <= this.endDate
    }, keydown: function (e) {
        if (this.picker.is(":not(:visible)")) {
            if (e.keyCode == 27) {
                this.show()
            }
            return
        }
        var p = false, b, q, f, r, a;
        switch (e.keyCode) {
            case 27:
                this.hide();
                e.preventDefault();
                break;
            case 37:
            case 39:
                if (!this.keyboardNavigation) {
                    break
                }
                b = e.keyCode == 37 ? -1 : 1;
                viewMode = this.viewMode;
                if (e.ctrlKey) {
                    viewMode += 2
                } else {
                    if (e.shiftKey) {
                        viewMode += 1
                    }
                }
                if (viewMode == 4) {
                    r = this.moveYear(this.date, b);
                    a = this.moveYear(this.viewDate, b)
                } else {
                    if (viewMode == 3) {
                        r = this.moveMonth(this.date, b);
                        a = this.moveMonth(this.viewDate, b)
                    } else {
                        if (viewMode == 2) {
                            r = this.moveDate(this.date, b);
                            a = this.moveDate(this.viewDate, b)
                        } else {
                            if (viewMode == 1) {
                                r = this.moveHour(this.date, b);
                                a = this.moveHour(this.viewDate, b)
                            } else {
                                if (viewMode == 0) {
                                    r = this.moveMinute(this.date, b);
                                    a = this.moveMinute(this.viewDate, b)
                                }
                            }
                        }
                    }
                }
                if (this.dateWithinRange(r)) {
                    this.date = r;
                    this.viewDate = a;
                    this.setValue();
                    this.update();
                    e.preventDefault();
                    p = true
                }
                break;
            case 38:
            case 40:
                if (!this.keyboardNavigation) {
                    break
                }
                b = e.keyCode == 38 ? -1 : 1;
                viewMode = this.viewMode;
                if (e.ctrlKey) {
                    viewMode += 2
                } else {
                    if (e.shiftKey) {
                        viewMode += 1
                    }
                }
                if (viewMode == 4) {
                    r = this.moveYear(this.date, b);
                    a = this.moveYear(this.viewDate, b)
                } else {
                    if (viewMode == 3) {
                        r = this.moveMonth(this.date, b);
                        a = this.moveMonth(this.viewDate, b)
                    } else {
                        if (viewMode == 2) {
                            r = this.moveDate(this.date, b * 7);
                            a = this.moveDate(this.viewDate, b * 7)
                        } else {
                            if (viewMode == 1) {
                                if (this.showMeridian) {
                                    r = this.moveHour(this.date, b * 6);
                                    a = this.moveHour(this.viewDate, b * 6)
                                } else {
                                    r = this.moveHour(this.date, b * 4);
                                    a = this.moveHour(this.viewDate, b * 4)
                                }
                            } else {
                                if (viewMode == 0) {
                                    r = this.moveMinute(this.date, b * 4);
                                    a = this.moveMinute(this.viewDate, b * 4)
                                }
                            }
                        }
                    }
                }
                if (this.dateWithinRange(r)) {
                    this.date = r;
                    this.viewDate = a;
                    this.setValue();
                    this.update();
                    e.preventDefault();
                    p = true
                }
                break;
            case 13:
                if (this.viewMode != 0) {
                    var d = this.viewMode;
                    this.showMode(-1);
                    this.fill();
                    if (d == this.viewMode && this.autoclose) {
                        this.hide()
                    }
                } else {
                    this.fill();
                    if (this.autoclose) {
                        this.hide()
                    }
                }
                e.preventDefault();
                break;
            case 9:
                this.hide();
                break
        }
        if (p) {
            var c;
            if (this.isInput) {
                c = this.element
            } else {
                if (this.component) {
                    c = this.element.find("input")
                }
            }
            if (c) {
                c.change()
            }
            this.element.trigger({type: "changeDate", date: this.date})
        }
    }, showMode: function (a) {
        if (a) {
            var b = Math.max(0, Math.min(h.modes.length - 1, this.viewMode + a));
            if (b >= this.minView && b <= this.maxView) {
                this.element.trigger({type: "changeMode", date: this.viewDate, oldViewMode: this.viewMode, newViewMode: b});
                this.viewMode = b
            }
        }
        this.picker.find(">div").hide().filter(".datetimepicker-" + h.modes[this.viewMode].clsName).css("display", "block");
        this.updateNavArrows()
    }, reset: function (a) {
        this._setDate(null, "date")
    }};
    j.fn.datetimepicker = function (b) {
        var a = Array.apply(null, arguments);
        a.shift();
        return this.each(function () {
            var e = j(this), d = e.data("datetimepicker"), c = typeof b == "object" && b;
            if (!d) {
                e.data("datetimepicker", (d = new l(this, j.extend({}, j.fn.datetimepicker.defaults, c))))
            }
            if (typeof b == "string" && typeof d[b] == "function") {
                d[b].apply(d, a)
            }
        })
    };
    j.fn.datetimepicker.defaults = {};
    j.fn.datetimepicker.Constructor = l;
    var k = j.fn.datetimepicker.dates = {en: {days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], meridiem: ["am", "pm"], suffix: ["st", "nd", "rd", "th"], today: "Today"}};
    var h = {modes: [
        {clsName: "minutes", navFnc: "Hours", navStep: 1},
        {clsName: "hours", navFnc: "Date", navStep: 1},
        {clsName: "days", navFnc: "Month", navStep: 1},
        {clsName: "months", navFnc: "FullYear", navStep: 1},
        {clsName: "years", navFnc: "FullYear", navStep: 10}
    ], isLeapYear: function (a) {
        return(((a % 4 === 0) && (a % 100 !== 0)) || (a % 400 === 0))
    }, getDaysInMonth: function (a, b) {
        return[31, (h.isLeapYear(a) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
    }, getDefaultFormat: function (a, b) {
        if (a == "standard") {
            if (b == "input") {
                return"yyyy-mm-dd hh:ii"
            } else {
                return"yyyy-mm-dd hh:ii:ss"
            }
        } else {
            if (a == "php") {
                if (b == "input") {
                    return"Y-m-d H:i"
                } else {
                    return"Y-m-d H:i:s"
                }
            } else {
                throw new Error("Invalid format type.")
            }
        }
    }, validParts: function (a) {
        if (a == "standard") {
            return/hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g
        } else {
            if (a == "php") {
                return/[dDjlNwzFmMnStyYaABgGhHis]/g
            } else {
                throw new Error("Invalid format type.")
            }
        }
    }, nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g, parseFormat: function (d, b) {
        var a = d.replace(this.validParts(b), "\0").split("\0"), c = d.match(this.validParts(b));
        if (!a || !a.length || !c || c.length == 0) {
            throw new Error("Invalid date format.")
        }
        return{separators: a, parts: c}
    }, parseDate: function (e, E, z, C) {
        if (e instanceof Date) {
            var G = new Date(e.valueOf() - e.getTimezoneOffset() * 60000);
            G.setMilliseconds(0);
            return G
        }
        if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(e)) {
            E = this.parseFormat("yyyy-mm-dd", C)
        }
        if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(e)) {
            E = this.parseFormat("yyyy-mm-dd hh:ii", C)
        }
        if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(e)) {
            E = this.parseFormat("yyyy-mm-dd hh:ii:ss", C)
        }
        if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(e)) {
            var H = /([-+]\d+)([dmwy])/, f = e.match(/([-+]\d+)([dmwy])/g), a, d;
            e = new Date();
            for (var s = 0; s < f.length; s++) {
                a = H.exec(f[s]);
                d = parseInt(a[1]);
                switch (a[2]) {
                    case"d":
                        e.setUTCDate(e.getUTCDate() + d);
                        break;
                    case"m":
                        e = l.prototype.moveMonth.call(l.prototype, e, d);
                        break;
                    case"w":
                        e.setUTCDate(e.getUTCDate() + d * 7);
                        break;
                    case"y":
                        e = l.prototype.moveYear.call(l.prototype, e, d);
                        break
                }
            }
            return m(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), 0)
        }
        var f = e && e.match(this.nonpunctuation) || [], e = new Date(0, 0, 0, 0, 0, 0, 0), B = {}, D = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P"], F = {hh: function (o, n) {
            return o.setUTCHours(n)
        }, h: function (o, n) {
            return o.setUTCHours(n)
        }, HH: function (o, n) {
            return o.setUTCHours(n == 12 ? 0 : n)
        }, H: function (o, n) {
            return o.setUTCHours(n == 12 ? 0 : n)
        }, ii: function (o, n) {
            return o.setUTCMinutes(n)
        }, i: function (o, n) {
            return o.setUTCMinutes(n)
        }, ss: function (o, n) {
            return o.setUTCSeconds(n)
        }, s: function (o, n) {
            return o.setUTCSeconds(n)
        }, yyyy: function (o, n) {
            return o.setUTCFullYear(n)
        }, yy: function (o, n) {
            return o.setUTCFullYear(2000 + n)
        }, m: function (o, n) {
            n -= 1;
            while (n < 0) {
                n += 12
            }
            n %= 12;
            o.setUTCMonth(n);
            while (o.getUTCMonth() != n) {
                o.setUTCDate(o.getUTCDate() - 1)
            }
            return o
        }, d: function (o, n) {
            return o.setUTCDate(n)
        }, p: function (o, n) {
            return o.setUTCHours(n == 1 ? o.getUTCHours() + 12 : o.getUTCHours())
        }}, c, A, a;
        F.M = F.MM = F.mm = F.m;
        F.dd = F.d;
        F.P = F.p;
        e = m(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds());
        if (f.length == E.parts.length) {
            for (var s = 0, b = E.parts.length; s < b; s++) {
                c = parseInt(f[s], 10);
                a = E.parts[s];
                if (isNaN(c)) {
                    switch (a) {
                        case"MM":
                            A = j(k[z].months).filter(function () {
                                var n = this.slice(0, f[s].length), o = f[s].slice(0, n.length);
                                return n == o
                            });
                            c = j.inArray(A[0], k[z].months) + 1;
                            break;
                        case"M":
                            A = j(k[z].monthsShort).filter(function () {
                                var n = this.slice(0, f[s].length), o = f[s].slice(0, n.length);
                                return n == o
                            });
                            c = j.inArray(A[0], k[z].monthsShort) + 1;
                            break;
                        case"p":
                        case"P":
                            c = j.inArray(f[s].toLowerCase(), k[z].meridiem);
                            break
                    }
                }
                B[a] = c
            }
            for (var s = 0, I; s < D.length; s++) {
                I = D[s];
                if (I in B && !isNaN(B[I])) {
                    F[I](e, B[I])
                }
            }
        }
        return e
    }, formatDate: function (a, f, q, d) {
        if (a == null) {
            return""
        }
        var p;
        if (d == "standard") {
            p = {yy: a.getUTCFullYear().toString().substring(2), yyyy: a.getUTCFullYear(), m: a.getUTCMonth() + 1, M: k[q].monthsShort[a.getUTCMonth()], MM: k[q].months[a.getUTCMonth()], d: a.getUTCDate(), D: k[q].daysShort[a.getUTCDay()], DD: k[q].days[a.getUTCDay()], p: (k[q].meridiem.length == 2 ? k[q].meridiem[a.getUTCHours() < 12 ? 0 : 1] : ""), h: a.getUTCHours(), i: a.getUTCMinutes(), s: a.getUTCSeconds()};
            if (k[q].meridiem.length == 2) {
                p.H = (p.h % 12 == 0 ? 12 : p.h % 12)
            } else {
                p.H = p.h
            }
            p.HH = (p.H < 10 ? "0" : "") + p.H;
            p.P = p.p.toUpperCase();
            p.hh = (p.h < 10 ? "0" : "") + p.h;
            p.ii = (p.i < 10 ? "0" : "") + p.i;
            p.ss = (p.s < 10 ? "0" : "") + p.s;
            p.dd = (p.d < 10 ? "0" : "") + p.d;
            p.mm = (p.m < 10 ? "0" : "") + p.m
        } else {
            if (d == "php") {
                p = {y: a.getUTCFullYear().toString().substring(2), Y: a.getUTCFullYear(), F: k[q].months[a.getUTCMonth()], M: k[q].monthsShort[a.getUTCMonth()], n: a.getUTCMonth() + 1, t: h.getDaysInMonth(a.getUTCFullYear(), a.getUTCMonth()), j: a.getUTCDate(), l: k[q].days[a.getUTCDay()], D: k[q].daysShort[a.getUTCDay()], w: a.getUTCDay(), N: (a.getUTCDay() == 0 ? 7 : a.getUTCDay()), S: (a.getUTCDate() % 10 <= k[q].suffix.length ? k[q].suffix[a.getUTCDate() % 10 - 1] : ""), a: (k[q].meridiem.length == 2 ? k[q].meridiem[a.getUTCHours() < 12 ? 0 : 1] : ""), g: (a.getUTCHours() % 12 == 0 ? 12 : a.getUTCHours() % 12), G: a.getUTCHours(), i: a.getUTCMinutes(), s: a.getUTCSeconds()};
                p.m = (p.n < 10 ? "0" : "") + p.n;
                p.d = (p.j < 10 ? "0" : "") + p.j;
                p.A = p.a.toString().toUpperCase();
                p.h = (p.g < 10 ? "0" : "") + p.g;
                p.H = (p.G < 10 ? "0" : "") + p.G;
                p.i = (p.i < 10 ? "0" : "") + p.i;
                p.s = (p.s < 10 ? "0" : "") + p.s
            } else {
                throw new Error("Invalid format type.")
            }
        }
        var a = [], e = j.extend([], f.separators);
        for (var c = 0, b = f.parts.length; c < b; c++) {
            if (e.length) {
                a.push(e.shift())
            }
            a.push(p[f.parts[c]])
        }
        if (e.length) {
            a.push(e.shift())
        }
        return a.join("")
    }, convertViewMode: function (a) {
        switch (a) {
            case 4:
            case"decade":
                a = 4;
                break;
            case 3:
            case"year":
                a = 3;
                break;
            case 2:
            case"month":
                a = 2;
                break;
            case 1:
            case"day":
                a = 1;
                break;
            case 0:
            case"hour":
                a = 0;
                break
        }
        return a
    }, headTemplate: '<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>', headTemplateV3: '<thead><tr><th class="prev"><i class="glyphicon glyphicon-arrow-left"></i> </th><th colspan="5" class="switch"></th><th class="next"><i class="glyphicon glyphicon-arrow-right"></i> </th></tr></thead>', contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>', footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};
    h.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + h.headTemplate + h.contTemplate + h.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + h.headTemplate + h.contTemplate + h.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + h.headTemplate + "<tbody></tbody>" + h.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + h.headTemplate + h.contTemplate + h.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + h.headTemplate + h.contTemplate + h.footTemplate + "</table></div></div>";
    h.templateV3 = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + h.headTemplateV3 + h.contTemplate + h.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + h.headTemplateV3 + h.contTemplate + h.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + h.headTemplateV3 + "<tbody></tbody>" + h.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + h.headTemplateV3 + h.contTemplate + h.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + h.headTemplateV3 + h.contTemplate + h.footTemplate + "</table></div></div>";
    j.fn.datetimepicker.DPGlobal = h;
    j.fn.datetimepicker.noConflict = function () {
        j.fn.datetimepicker = old;
        return this
    };
    j(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api", '[data-provide="datetimepicker"]', function (b) {
        var a = j(this);
        if (a.data("datetimepicker")) {
            return
        }
        b.preventDefault();
        a.datetimepicker("show")
    });
    j(function () {
        j('[data-provide="datetimepicker-inline"]').datetimepicker()
    })
}(window.jQuery);
(function (a) {
    a.fn.datetimepicker.dates["zh-CN"] = {days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"], daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"], daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", suffix: [], meridiem: []}
}(jQuery));
(function (ad) {
    function ah(c, d) {
        return function (a) {
            return aK(c.call(this, a), d)
        }
    }

    function al(c, d) {
        return function (a) {
            return this.lang().ordinal(c.call(this, a), d)
        }
    }

    function ap() {
    }

    function au(b) {
        bu(b), aC(this, b)
    }

    function ay(k) {
        var l = a8(k), m = l.year || 0, n = l.month || 0, o = l.week || 0, p = l.day || 0, q = l.hour || 0, r = l.minute || 0, s = l.second || 0, t = l.millisecond || 0;
        this._input = k, this._milliseconds = +t + 1000 * s + 60000 * r + 3600000 * q, this._days = +p + 7 * o, this._months = +n + 12 * m, this._data = {}, this._bubble()
    }

    function aC(d, e) {
        for (var f in e) {
            e.hasOwnProperty(f) && (d[f] = e[f])
        }
        return e.hasOwnProperty("toString") && (d.toString = e.toString), e.hasOwnProperty("valueOf") && (d.valueOf = e.valueOf), d
    }

    function aG(b) {
        return 0 > b ? Math.ceil(b) : Math.floor(b)
    }

    function aK(d, e) {
        for (var f = d + ""; f.length < e;) {
            f = "0" + f
        }
        return f
    }

    function aO(j, k, l, m) {
        var n, o, p = k._milliseconds, q = k._days, r = k._months;
        p && j._d.setTime(+j._d + p * l), (q || r) && (n = j.minute(), o = j.hour()), q && j.date(j.date() + q * l), r && j.month(j.month() + r * l), p && !m && aj.updateOffset(j), (q || r) && (j.minute(n), j.hour(o))
    }

    function aS(b) {
        return"[object Array]" === Object.prototype.toString.call(b)
    }

    function aW(b) {
        return"[object Date]" === Object.prototype.toString.call(b) || b instanceof Date
    }

    function a0(h, j, k) {
        var l, m = Math.min(h.length, j.length), n = Math.abs(h.length - j.length), o = 0;
        for (l = 0; m > l; l++) {
            (k && h[l] !== j[l] || !k && bh(h[l]) !== bh(j[l])) && o++
        }
        return o + n
    }

    function a4(c) {
        if (c) {
            var d = c.toLowerCase().replace(/(.)s$/, "$1");
            c = aV[c] || aZ[d] || d
        }
        return c
    }

    function a8(e) {
        var f, g, h = {};
        for (g in e) {
            e.hasOwnProperty(g) && (f = a4(g), f && (h[f] = e[g]))
        }
        return h
    }

    function bd(a) {
        var e, f;
        if (0 === a.indexOf("week")) {
            e = 7, f = "day"
        } else {
            if (0 !== a.indexOf("month")) {
                return
            }
            e = 12, f = "month"
        }
        aj[a] = function (b, c) {
            var d, k, l = aj.fn._lang[a], m = [];
            if ("number" == typeof b && (c = b, b = ad), k = function (g) {
                var h = aj().utc().set(f, g);
                return l.call(aj.fn._lang, h, b || "")
            }, null != c) {
                return k(c)
            }
            for (d = 0; e > d; d++) {
                m.push(k(d))
            }
            return m
        }
    }

    function bh(d) {
        var e = +d, f = 0;
        return 0 !== e && isFinite(e) && (f = e >= 0 ? Math.floor(e) : Math.ceil(e)), f
    }

    function bl(c, d) {
        return new Date(Date.UTC(c, d + 1, 0)).getUTCDate()
    }

    function bo(b) {
        return br(b) ? 366 : 365
    }

    function br(b) {
        return 0 === b % 4 && 0 !== b % 100 || 0 === b % 400
    }

    function bu(c) {
        var d;
        c._a && -2 === c._pf.overflow && (d = c._a[aE] < 0 || c._a[aE] > 11 ? aE : c._a[aI] < 1 || c._a[aI] > bl(c._a[aA], c._a[aE]) ? aI : c._a[aM] < 0 || c._a[aM] > 23 ? aM : c._a[aQ] < 0 || c._a[aQ] > 59 ? aQ : c._a[aU] < 0 || c._a[aU] > 59 ? aU : c._a[aY] < 0 || c._a[aY] > 999 ? aY : -1, c._pf._overflowDayOfYear && (aA > d || d > aI) && (d = aI), c._pf.overflow = d)
    }

    function bx(b) {
        b._pf = {empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1}
    }

    function bA(b) {
        return null == b._isValid && (b._isValid = !isNaN(b._d.getTime()) && b._pf.overflow < 0 && !b._pf.empty && !b._pf.invalidMonth && !b._pf.nullInput && !b._pf.invalidFormat && !b._pf.userInvalidated, b._strict && (b._isValid = b._isValid && 0 === b._pf.charsLeftOver && 0 === b._pf.unusedTokens.length)), b._isValid
    }

    function bD(b) {
        return b ? b.toLowerCase().replace("_", "-") : b
    }

    function bG(c, d) {
        return d.abbr = c, a2[c] || (a2[c] = new ap), a2[c].set(d), a2[c]
    }

    function bJ(b) {
        delete a2[b]
    }

    function ae(h) {
        var j, k, l, m, n = 0, o = function (c) {
            if (!a2[c] && a6) {
                try {
                    require("./lang/" + c)
                } catch (d) {
                }
            }
            return a2[c]
        };
        if (!h) {
            return aj.fn._lang
        }
        if (!aS(h)) {
            if (k = o(h)) {
                return k
            }
            h = [h]
        }
        for (; n < h.length;) {
            for (m = bD(h[n]).split("-"), j = m.length, l = bD(h[n + 1]), l = l ? l.split("-") : null; j > 0;) {
                if (k = o(m.slice(0, j).join("-"))) {
                    return k
                }
                if (l && l.length >= j && a0(m, l, !0) >= j - 1) {
                    break
                }
                j--
            }
            n++
        }
        return aj.fn._lang
    }

    function ai(b) {
        return b.match(/\[[\s\S]/) ? b.replace(/^\[|\]$/g, "") : b.replace(/\\/g, "")
    }

    function am(e) {
        var f, g, h = e.match(bn);
        for (f = 0, g = h.length; g > f; f++) {
            h[f] = bg[h[f]] ? bg[h[f]] : ai(h[f])
        }
        return function (a) {
            var b = "";
            for (f = 0; g > f; f++) {
                b += h[f] instanceof Function ? h[f].call(a, e) : h[f]
            }
            return b
        }
    }

    function aq(c, d) {
        return c.isValid() ? (d = av(d, c.lang()), a3[d] || (a3[d] = am(d)), a3[d](c)) : c.lang().invalidDate()
    }

    function av(e, f) {
        function g(b) {
            return f.longDateFormat(b) || b
        }

        var h = 5;
        for (bq.lastIndex = 0; h >= 0 && bq.test(e);) {
            e = e.replace(bq, g), bq.lastIndex = 0, h -= 1
        }
        return e
    }

    function az(d, e) {
        var f;
        switch (d) {
            case"DDDD":
                return bz;
            case"YYYY":
            case"GGGG":
            case"gggg":
                return bC;
            case"YYYYY":
            case"GGGGG":
            case"ggggg":
                return bF;
            case"S":
            case"SS":
            case"SSS":
            case"DDD":
                return bw;
            case"MMM":
            case"MMMM":
            case"dd":
            case"ddd":
            case"dddd":
                return bL;
            case"a":
            case"A":
                return ae(e._l)._meridiemParse;
            case"X":
                return ao;
            case"Z":
            case"ZZ":
                return ag;
            case"T":
                return ak;
            case"SSSS":
                return bI;
            case"MM":
            case"DD":
            case"YY":
            case"GG":
            case"gg":
            case"HH":
            case"hh":
            case"mm":
            case"ss":
            case"M":
            case"D":
            case"d":
            case"H":
            case"h":
            case"m":
            case"s":
            case"w":
            case"ww":
            case"W":
            case"WW":
            case"e":
            case"E":
                return bt;
            default:
                return f = new RegExp(a5(a1(d.replace("\\", "")), "i"))
        }
    }

    function aD(e) {
        var f = (ag.exec(e) || [])[0], g = (f + "").match(aJ) || ["-", 0, 0], h = +(60 * g[1]) + bh(g[2]);
        return"+" === g[0] ? -h : h
    }

    function aH(f, g, h) {
        var j, k = h._a;
        switch (f) {
            case"M":
            case"MM":
                null != g && (k[aE] = bh(g) - 1);
                break;
            case"MMM":
            case"MMMM":
                j = ae(h._l).monthsParse(g), null != j ? k[aE] = j : h._pf.invalidMonth = g;
                break;
            case"D":
            case"DD":
                null != g && (k[aI] = bh(g));
                break;
            case"DDD":
            case"DDDD":
                null != g && (h._dayOfYear = bh(g));
                break;
            case"YY":
                k[aA] = bh(g) + (bh(g) > 68 ? 1900 : 2000);
                break;
            case"YYYY":
            case"YYYYY":
                k[aA] = bh(g);
                break;
            case"a":
            case"A":
                h._isPm = ae(h._l).isPM(g);
                break;
            case"H":
            case"HH":
            case"h":
            case"hh":
                k[aM] = bh(g);
                break;
            case"m":
            case"mm":
                k[aQ] = bh(g);
                break;
            case"s":
            case"ss":
                k[aU] = bh(g);
                break;
            case"S":
            case"SS":
            case"SSS":
            case"SSSS":
                k[aY] = bh(1000 * ("0." + g));
                break;
            case"X":
                h._d = new Date(1000 * parseFloat(g));
                break;
            case"Z":
            case"ZZ":
                h._useUTC = !0, h._tzm = aD(g);
                break;
            case"w":
            case"ww":
            case"W":
            case"WW":
            case"d":
            case"dd":
            case"ddd":
            case"dddd":
            case"e":
            case"E":
                f = f.substr(0, 1);
            case"gg":
            case"gggg":
            case"GG":
            case"GGGG":
            case"GGGGG":
                f = f.substr(0, 2), g && (h._w = h._w || {}, h._w[f] = g)
        }
    }

    function aL(m) {
        var n, o, p, q, r, s, t, u, v, w, z = [];
        if (!m._d) {
            for (p = aT(m), m._w && null == m._a[aI] && null == m._a[aE] && (r = function (a) {
                return a ? a.length < 3 ? parseInt(a, 10) > 68 ? "19" + a : "20" + a : a : null == m._a[aA] ? aj().weekYear() : m._a[aA]
            }, s = m._w, null != s.GG || null != s.W || null != s.E ? t = bE(r(s.GG), s.W || 1, s.E, 4, 1) : (u = ae(m._l), v = null != s.d ? bs(s.d, u) : null != s.e ? parseInt(s.e, 10) + u._week.dow : 0, w = parseInt(s.w, 10) || 1, null != s.d && v < u._week.dow && w++, t = bE(r(s.gg), w, v, u._week.doy, u._week.dow)), m._a[aA] = t.year, m._dayOfYear = t.dayOfYear), m._dayOfYear && (q = null == m._a[aA] ? p[aA] : m._a[aA], m._dayOfYear > bo(q) && (m._pf._overflowDayOfYear = !0), o = bp(q, 0, m._dayOfYear), m._a[aE] = o.getUTCMonth(), m._a[aI] = o.getUTCDate()), n = 0; 3 > n && null == m._a[n]; ++n) {
                m._a[n] = z[n] = p[n]
            }
            for (; 7 > n; n++) {
                m._a[n] = z[n] = null == m._a[n] ? 2 === n ? 1 : 0 : m._a[n]
            }
            z[aM] += bh((m._tzm || 0) / 60), z[aQ] += bh((m._tzm || 0) % 60), m._d = (m._useUTC ? bp : bm).apply(null, z)
        }
    }

    function aP(c) {
        var d;
        c._d || (d = a8(c._i), c._a = [d.year, d.month, d.day, d.hour, d.minute, d.second, d.millisecond], aL(c))
    }

    function aT(c) {
        var d = new Date;
        return c._useUTC ? [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()] : [d.getFullYear(), d.getMonth(), d.getDate()]
    }

    function aX(k) {
        k._a = [], k._pf.empty = !0;
        var l, m, n, o, p, q = ae(k._l), r = "" + k._i, s = r.length, t = 0;
        for (n = av(k._f, q).match(bn) || [], l = 0; l < n.length; l++) {
            o = n[l], m = (az(o, k).exec(r) || [])[0], m && (p = r.substr(0, r.indexOf(m)), p.length > 0 && k._pf.unusedInput.push(p), r = r.slice(r.indexOf(m) + m.length), t += m.length), bg[o] ? (m ? k._pf.empty = !1 : k._pf.unusedTokens.push(o), aH(o, m, k)) : k._strict && !m && k._pf.unusedTokens.push(o)
        }
        k._pf.charsLeftOver = s - t, r.length > 0 && k._pf.unusedInput.push(r), k._isPm && k._a[aM] < 12 && (k._a[aM] += 12), k._isPm === !1 && 12 === k._a[aM] && (k._a[aM] = 0), aL(k), bu(k)
    }

    function a1(b) {
        return b.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (f, g, h, j, k) {
            return g || h || j || k
        })
    }

    function a5(b) {
        return b.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function a9(g) {
        var h, j, k, l, m;
        if (0 === g._f.length) {
            return g._pf.invalidFormat = !0, g._d = new Date(0 / 0), void 0
        }
        for (l = 0; l < g._f.length; l++) {
            m = 0, h = aC({}, g), bx(h), h._f = g._f[l], aX(h), bA(h) && (m += h._pf.charsLeftOver, m += 10 * h._pf.unusedTokens.length, h._pf.score = m, (null == k || k > m) && (k = m, j = h))
        }
        aC(g, j || h)
    }

    function be(e) {
        var f, g = e._i, h = at.exec(g);
        if (h) {
            for (e._pf.iso = !0, f = 4; f > 0; f--) {
                if (h[f]) {
                    e._f = aB[f - 1] + (h[6] || " ");
                    break
                }
            }
            for (f = 0; 4 > f; f++) {
                if (aF[f][1].exec(g)) {
                    e._f += aF[f][0];
                    break
                }
            }
            ag.exec(g) && (e._f += "Z"), aX(e)
        } else {
            e._d = new Date(g)
        }
    }

    function bi(a) {
        var e = a._i, f = ba.exec(e);
        e === ad ? a._d = new Date : f ? a._d = new Date(+f[1]) : "string" == typeof e ? be(a) : aS(e) ? (a._a = e.slice(0), aL(a)) : aW(e) ? a._d = new Date(+e) : "object" == typeof e ? aP(a) : a._d = new Date(e)
    }

    function bm(j, k, l, m, n, o, p) {
        var q = new Date(j, k, l, m, n, o, p);
        return 1970 > j && q.setFullYear(j), q
    }

    function bp(c) {
        var d = new Date(Date.UTC.apply(null, arguments));
        return 1970 > c && d.setUTCFullYear(c), d
    }

    function bs(c, d) {
        if ("string" == typeof c) {
            if (isNaN(c)) {
                if (c = d.weekdaysParse(c), "number" != typeof c) {
                    return null
                }
            } else {
                c = parseInt(c, 10)
            }
        }
        return c
    }

    function bv(f, g, h, j, k) {
        return k.relativeTime(g || 1, !!h, f, j)
    }

    function by(j, k, l) {
        var m = aw(Math.abs(j) / 1000), n = aw(m / 60), o = aw(n / 60), p = aw(o / 24), q = aw(p / 365), r = 45 > m && ["s", m] || 1 === n && ["m"] || 45 > n && ["mm", n] || 1 === o && ["h"] || 22 > o && ["hh", o] || 1 === p && ["d"] || 25 >= p && ["dd", p] || 45 >= p && ["M"] || 345 > p && ["MM", aw(p / 30)] || 1 === q && ["y"] || ["yy", q];
        return r[2] = k, r[3] = j > 0, r[4] = l, bv.apply({}, r)
    }

    function bB(g, h, j) {
        var k, l = j - h, m = j - g.day();
        return m > l && (m -= 7), l - 7 > m && (m += 7), k = aj(g).add("d", m), {week: Math.ceil(k.dayOfYear() / 7), year: k.year()}
    }

    function bE(j, k, l, m, n) {
        var o, p, q = new Date(Date.UTC(j, 0)).getUTCDay();
        return l = null != l ? l : n, o = n - q + (q > m ? 7 : 0), p = 7 * (k - 1) + (l - n) + o + 1, {year: p > 0 ? j : j - 1, dayOfYear: p > 0 ? p : bo(j - 1) + p}
    }

    function bH(d) {
        var e = d._i, f = d._f;
        return"undefined" == typeof d._pf && bx(d), null === e ? aj.invalid({nullInput: !0}) : ("string" == typeof e && (d._i = e = ae().preparse(e)), aj.isMoment(e) ? (d = aC({}, e), d._d = new Date(+e._d)) : f ? aS(f) ? a9(d) : aX(d) : bi(d), new au(d))
    }

    function bK(c, d) {
        aj.fn[c] = aj.fn[c + "s"] = function (b) {
            var e = this._isUTC ? "UTC" : "";
            return null != b ? (this._d["set" + e + d](b), aj.updateOffset(this), this) : this._d["get" + e + d]()
        }
    }

    function aa(b) {
        aj.duration.fn[b] = function () {
            return this._data[b]
        }
    }

    function ac(c, d) {
        aj.duration.fn["as" + c] = function () {
            return +this / d
        }
    }

    function af(d) {
        var e = !1, f = aj;
        "undefined" == typeof ender && (this.moment = d ? function () {
            return !e && console && console.warn && (e = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), f.apply(null, arguments)
        } : aj)
    }

    for (var aj, an, ar = "2.4.0", aw = Math.round, aA = 0, aE = 1, aI = 2, aM = 3, aQ = 4, aU = 5, aY = 6, a2 = {}, a6 = "undefined" != typeof module && module.exports, ba = /^\/?Date\((\-?\d+)/i, bf = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, bj = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, bn = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, bq = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, bt = /\d\d?/, bw = /\d{1,3}/, bz = /\d{3}/, bC = /\d{1,4}/, bF = /[+\-]?\d{1,6}/, bI = /\d+/, bL = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ag = /Z|[\+\-]\d\d:?\d\d/i, ak = /T/i, ao = /[\+\-]?\d+(\.\d{1,3})?/, at = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d:?\d\d|Z)?)?$/, ax = "YYYY-MM-DDTHH:mm:ssZ", aB = ["YYYY-MM-DD", "GGGG-[W]WW", "GGGG-[W]WW-E", "YYYY-DDD"], aF = [
        ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
    ], aJ = /([\+\-]|\d\d)/gi, aN = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), aR = {Milliseconds: 1, Seconds: 1000, Minutes: 60000, Hours: 3600000, Days: 86400000, Months: 2592000000, Years: 31536000000}, aV = {ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", D: "date", w: "week", W: "isoWeek", M: "month", y: "year", DDD: "dayOfYear", e: "weekday", E: "isoWeekday", gg: "weekYear", GG: "isoWeekYear"}, aZ = {dayofyear: "dayOfYear", isoweekday: "isoWeekday", isoweek: "isoWeek", weekyear: "weekYear", isoweekyear: "isoWeekYear"}, a3 = {}, a7 = "DDD w W M D d".split(" "), bc = "M D H h m s w W".split(" "), bg = {M: function () {
        return this.month() + 1
    }, MMM: function (b) {
        return this.lang().monthsShort(this, b)
    }, MMMM: function (b) {
        return this.lang().months(this, b)
    }, D: function () {
        return this.date()
    }, DDD: function () {
        return this.dayOfYear()
    }, d: function () {
        return this.day()
    }, dd: function (b) {
        return this.lang().weekdaysMin(this, b)
    }, ddd: function (b) {
        return this.lang().weekdaysShort(this, b)
    }, dddd: function (b) {
        return this.lang().weekdays(this, b)
    }, w: function () {
        return this.week()
    }, W: function () {
        return this.isoWeek()
    }, YY: function () {
        return aK(this.year() % 100, 2)
    }, YYYY: function () {
        return aK(this.year(), 4)
    }, YYYYY: function () {
        return aK(this.year(), 5)
    }, gg: function () {
        return aK(this.weekYear() % 100, 2)
    }, gggg: function () {
        return this.weekYear()
    }, ggggg: function () {
        return aK(this.weekYear(), 5)
    }, GG: function () {
        return aK(this.isoWeekYear() % 100, 2)
    }, GGGG: function () {
        return this.isoWeekYear()
    }, GGGGG: function () {
        return aK(this.isoWeekYear(), 5)
    }, e: function () {
        return this.weekday()
    }, E: function () {
        return this.isoWeekday()
    }, a: function () {
        return this.lang().meridiem(this.hours(), this.minutes(), !0)
    }, A: function () {
        return this.lang().meridiem(this.hours(), this.minutes(), !1)
    }, H: function () {
        return this.hours()
    }, h: function () {
        return this.hours() % 12 || 12
    }, m: function () {
        return this.minutes()
    }, s: function () {
        return this.seconds()
    }, S: function () {
        return bh(this.milliseconds() / 100)
    }, SS: function () {
        return aK(bh(this.milliseconds() / 10), 2)
    }, SSS: function () {
        return aK(this.milliseconds(), 3)
    }, SSSS: function () {
        return aK(this.milliseconds(), 3)
    }, Z: function () {
        var c = -this.zone(), d = "+";
        return 0 > c && (c = -c, d = "-"), d + aK(bh(c / 60), 2) + ":" + aK(bh(c) % 60, 2)
    }, ZZ: function () {
        var c = -this.zone(), d = "+";
        return 0 > c && (c = -c, d = "-"), d + aK(bh(10 * c / 6), 4)
    }, z: function () {
        return this.zoneAbbr()
    }, zz: function () {
        return this.zoneName()
    }, X: function () {
        return this.unix()
    }}, bk = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; a7.length;) {
        an = a7.pop(), bg[an + "o"] = al(bg[an], an)
    }
    for (; bc.length;) {
        an = bc.pop(), bg[an + an] = ah(bg[an], 2)
    }
    for (bg.DDDD = ah(bg.DDD, 3), aC(ap.prototype, {set: function (d) {
        var e, f;
        for (f in d) {
            e = d[f], "function" == typeof e ? this[f] = e : this["_" + f] = e
        }
    }, _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), months: function (b) {
        return this._months[b.month()]
    }, _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), monthsShort: function (b) {
        return this._monthsShort[b.month()]
    }, monthsParse: function (e) {
        var f, g, h;
        for (this._monthsParse || (this._monthsParse = []), f = 0; 12 > f; f++) {
            if (this._monthsParse[f] || (g = aj.utc([2000, f]), h = "^" + this.months(g, "") + "|^" + this.monthsShort(g, ""), this._monthsParse[f] = new RegExp(h.replace(".", ""), "i")), this._monthsParse[f].test(e)) {
                return f
            }
        }
    }, _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdays: function (b) {
        return this._weekdays[b.day()]
    }, _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysShort: function (b) {
        return this._weekdaysShort[b.day()]
    }, _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), weekdaysMin: function (b) {
        return this._weekdaysMin[b.day()]
    }, weekdaysParse: function (e) {
        var f, g, h;
        for (this._weekdaysParse || (this._weekdaysParse = []), f = 0; 7 > f; f++) {
            if (this._weekdaysParse[f] || (g = aj([2000, 1]).day(f), h = "^" + this.weekdays(g, "") + "|^" + this.weekdaysShort(g, "") + "|^" + this.weekdaysMin(g, ""), this._weekdaysParse[f] = new RegExp(h.replace(".", ""), "i")), this._weekdaysParse[f].test(e)) {
                return f
            }
        }
    }, _longDateFormat: {LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D YYYY", LLL: "MMMM D YYYY LT", LLLL: "dddd, MMMM D YYYY LT"}, longDateFormat: function (c) {
        var d = this._longDateFormat[c];
        return !d && this._longDateFormat[c.toUpperCase()] && (d = this._longDateFormat[c.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (b) {
            return b.slice(1)
        }), this._longDateFormat[c] = d), d
    }, isPM: function (b) {
        return"p" === (b + "").toLowerCase().charAt(0)
    }, _meridiemParse: /[ap]\.?m?\.?/i, meridiem: function (d, e, f) {
        return d > 11 ? f ? "pm" : "PM" : f ? "am" : "AM"
    }, _calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"}, calendar: function (d, e) {
        var f = this._calendar[d];
        return"function" == typeof f ? f.apply(e) : f
    }, _relativeTime: {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, relativeTime: function (f, g, h, j) {
        var k = this._relativeTime[h];
        return"function" == typeof k ? k(f, g, h, j) : k.replace(/%d/i, f)
    }, pastFuture: function (d, e) {
        var f = this._relativeTime[d > 0 ? "future" : "past"];
        return"function" == typeof f ? f(e) : f.replace(/%s/i, e)
    }, ordinal: function (b) {
        return this._ordinal.replace("%d", b)
    }, _ordinal: "%d", preparse: function (b) {
        return b
    }, postformat: function (b) {
        return b
    }, week: function (b) {
        return bB(b, this._week.dow, this._week.doy).week
    }, _week: {dow: 0, doy: 6}, _invalidDate: "Invalid date", invalidDate: function () {
        return this._invalidDate
    }}), aj = function (a, f, g, h) {
        return"boolean" == typeof g && (h = g, g = ad), bH({_i: a, _f: f, _l: g, _strict: h, _isUTC: !1})
    }, aj.utc = function (a, g, h, j) {
        var k;
        return"boolean" == typeof h && (j = h, h = ad), k = bH({_useUTC: !0, _isUTC: !0, _l: h, _i: a, _f: g, _strict: j}).utc()
    }, aj.unix = function (b) {
        return aj(1000 * b)
    }, aj.duration = function (f, k) {
        var l, m, n, o = aj.isDuration(f), p = "number" == typeof f, q = o ? f._input : p ? {} : f, r = null;
        return p ? k ? q[k] = f : q.milliseconds = f : (r = bf.exec(f)) ? (l = "-" === r[1] ? -1 : 1, q = {y: 0, d: bh(r[aI]) * l, h: bh(r[aM]) * l, m: bh(r[aQ]) * l, s: bh(r[aU]) * l, ms: bh(r[aY]) * l}) : (r = bj.exec(f)) && (l = "-" === r[1] ? -1 : 1, n = function (c) {
            var d = c && parseFloat(c.replace(",", "."));
            return(isNaN(d) ? 0 : d) * l
        }, q = {y: n(r[2]), M: n(r[3]), d: n(r[4]), h: n(r[5]), m: n(r[6]), s: n(r[7]), w: n(r[8])}), m = new ay(q), o && f.hasOwnProperty("_lang") && (m._lang = f._lang), m
    }, aj.version = ar, aj.defaultFormat = ax, aj.updateOffset = function () {
    }, aj.lang = function (d, e) {
        var f;
        return d ? (e ? bG(bD(d), e) : null === e ? (bJ(d), d = "en") : a2[d] || ae(d), f = aj.duration.fn._lang = aj.fn._lang = ae(d), f._abbr) : aj.fn._lang._abbr
    }, aj.langData = function (b) {
        return b && b._lang && b._lang._abbr && (b = b._lang._abbr), ae(b)
    }, aj.isMoment = function (b) {
        return b instanceof au
    }, aj.isDuration = function (b) {
        return b instanceof ay
    }, an = bk.length - 1; an >= 0; --an) {
        bd(bk[an])
    }
    for (aj.normalizeUnits = function (b) {
        return a4(b)
    }, aj.invalid = function (c) {
        var d = aj.utc(0 / 0);
        return null != c ? aC(d._pf, c) : d._pf.userInvalidated = !0, d
    }, aj.parseZone = function (b) {
        return aj(b).parseZone()
    }, aC(aj.fn = au.prototype, {clone: function () {
        return aj(this)
    }, valueOf: function () {
        return +this._d + 60000 * (this._offset || 0)
    }, unix: function () {
        return Math.floor(+this / 1000)
    }, toString: function () {
        return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, toDate: function () {
        return this._offset ? new Date(+this) : this._d
    }, toISOString: function () {
        return aq(aj(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }, toArray: function () {
        var b = this;
        return[b.year(), b.month(), b.date(), b.hours(), b.minutes(), b.seconds(), b.milliseconds()]
    }, isValid: function () {
        return bA(this)
    }, isDSTShifted: function () {
        return this._a ? this.isValid() && a0(this._a, (this._isUTC ? aj.utc(this._a) : aj(this._a)).toArray()) > 0 : !1
    }, parsingFlags: function () {
        return aC({}, this._pf)
    }, invalidAt: function () {
        return this._pf.overflow
    }, utc: function () {
        return this.zone(0)
    }, local: function () {
        return this.zone(0), this._isUTC = !1, this
    }, format: function (c) {
        var d = aq(this, c || aj.defaultFormat);
        return this.lang().postformat(d)
    }, add: function (d, e) {
        var f;
        return f = "string" == typeof d ? aj.duration(+e, d) : aj.duration(d, e), aO(this, f, 1), this
    }, subtract: function (d, e) {
        var f;
        return f = "string" == typeof d ? aj.duration(+e, d) : aj.duration(d, e), aO(this, f, -1), this
    }, diff: function (h, j, k) {
        var l, m, n = this._isUTC ? aj(h).zone(this._offset || 0) : aj(h).local(), o = 60000 * (this.zone() - n.zone());
        return j = a4(j), "year" === j || "month" === j ? (l = 43200000 * (this.daysInMonth() + n.daysInMonth()), m = 12 * (this.year() - n.year()) + (this.month() - n.month()), m += (this - aj(this).startOf("month") - (n - aj(n).startOf("month"))) / l, m -= 60000 * (this.zone() - aj(this).startOf("month").zone() - (n.zone() - aj(n).startOf("month").zone())) / l, "year" === j && (m /= 12)) : (l = this - n, m = "second" === j ? l / 1000 : "minute" === j ? l / 60000 : "hour" === j ? l / 3600000 : "day" === j ? (l - o) / 86400000 : "week" === j ? (l - o) / 604800000 : l), k ? m : aG(m)
    }, from: function (c, d) {
        return aj.duration(this.diff(c)).lang(this.lang()._abbr).humanize(!d)
    }, fromNow: function (b) {
        return this.from(aj(), b)
    }, calendar: function () {
        var c = this.diff(aj().zone(this.zone()).startOf("day"), "days", !0), d = -6 > c ? "sameElse" : -1 > c ? "lastWeek" : 0 > c ? "lastDay" : 1 > c ? "sameDay" : 2 > c ? "nextDay" : 7 > c ? "nextWeek" : "sameElse";
        return this.format(this.lang().calendar(d, this))
    }, isLeapYear: function () {
        return br(this.year())
    }, isDST: function () {
        return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
    }, day: function (c) {
        var d = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != c ? (c = bs(c, this.lang()), this.add({d: c - d})) : d
    }, month: function (d) {
        var e, f = this._isUTC ? "UTC" : "";
        return null != d ? "string" == typeof d && (d = this.lang().monthsParse(d), "number" != typeof d) ? this : (e = this.date(), this.date(1), this._d["set" + f + "Month"](d), this.date(Math.min(e, this.daysInMonth())), aj.updateOffset(this), this) : this._d["get" + f + "Month"]()
    }, startOf: function (b) {
        switch (b = a4(b)) {
            case"year":
                this.month(0);
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return"week" === b ? this.weekday(0) : "isoWeek" === b && this.isoWeekday(1), this
    }, endOf: function (b) {
        return b = a4(b), this.startOf(b).add("isoWeek" === b ? "week" : b, 1).subtract("ms", 1)
    }, isAfter: function (c, d) {
        return d = "undefined" != typeof d ? d : "millisecond", +this.clone().startOf(d) > +aj(c).startOf(d)
    }, isBefore: function (c, d) {
        return d = "undefined" != typeof d ? d : "millisecond", +this.clone().startOf(d) < +aj(c).startOf(d)
    }, isSame: function (c, d) {
        return d = "undefined" != typeof d ? d : "millisecond", +this.clone().startOf(d) === +aj(c).startOf(d)
    }, min: function (b) {
        return b = aj.apply(null, arguments), this > b ? this : b
    }, max: function (b) {
        return b = aj.apply(null, arguments), b > this ? this : b
    }, zone: function (c) {
        var d = this._offset || 0;
        return null == c ? this._isUTC ? d : this._d.getTimezoneOffset() : ("string" == typeof c && (c = aD(c)), Math.abs(c) < 16 && (c = 60 * c), this._offset = c, this._isUTC = !0, d !== c && aO(this, aj.duration(d - c, "m"), 1, !0), this)
    }, zoneAbbr: function () {
        return this._isUTC ? "UTC" : ""
    }, zoneName: function () {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, parseZone: function () {
        return"string" == typeof this._i && this.zone(this._i), this
    }, hasAlignedHourOffset: function (b) {
        return b = b ? aj(b).zone() : 0, 0 === (this.zone() - b) % 60
    }, daysInMonth: function () {
        return bl(this.year(), this.month())
    }, dayOfYear: function (c) {
        var d = aw((aj(this).startOf("day") - aj(this).startOf("year")) / 86400000) + 1;
        return null == c ? d : this.add("d", c - d)
    }, weekYear: function (c) {
        var d = bB(this, this.lang()._week.dow, this.lang()._week.doy).year;
        return null == c ? d : this.add("y", c - d)
    }, isoWeekYear: function (c) {
        var d = bB(this, 1, 4).year;
        return null == c ? d : this.add("y", c - d)
    }, week: function (c) {
        var d = this.lang().week(this);
        return null == c ? d : this.add("d", 7 * (c - d))
    }, isoWeek: function (c) {
        var d = bB(this, 1, 4).week;
        return null == c ? d : this.add("d", 7 * (c - d))
    }, weekday: function (c) {
        var d = (this.day() + 7 - this.lang()._week.dow) % 7;
        return null == c ? d : this.add("d", c - d)
    }, isoWeekday: function (b) {
        return null == b ? this.day() || 7 : this.day(this.day() % 7 ? b : b - 7)
    }, get: function (b) {
        return b = a4(b), this[b]()
    }, set: function (c, d) {
        return c = a4(c), "function" == typeof this[c] && this[c](d), this
    }, lang: function (a) {
        return a === ad ? this._lang : (this._lang = ae(a), this)
    }}), an = 0; an < aN.length; an++) {
        bK(aN[an].toLowerCase().replace(/s$/, ""), aN[an])
    }
    bK("year", "FullYear"), aj.fn.days = aj.fn.day, aj.fn.months = aj.fn.month, aj.fn.weeks = aj.fn.week, aj.fn.isoWeeks = aj.fn.isoWeek, aj.fn.toJSON = aj.fn.toISOString, aC(aj.duration.fn = ay.prototype, {_bubble: function () {
        var h, j, k, l, m = this._milliseconds, n = this._days, o = this._months, p = this._data;
        p.milliseconds = m % 1000, h = aG(m / 1000), p.seconds = h % 60, j = aG(h / 60), p.minutes = j % 60, k = aG(j / 60), p.hours = k % 24, n += aG(k / 24), p.days = n % 30, o += aG(n / 30), p.months = o % 12, l = aG(o / 12), p.years = l
    }, weeks: function () {
        return aG(this.days() / 7)
    }, valueOf: function () {
        return this._milliseconds + 86400000 * this._days + 2592000000 * (this._months % 12) + 31536000000 * bh(this._months / 12)
    }, humanize: function (d) {
        var e = +this, f = by(e, !d, this.lang());
        return d && (f = this.lang().pastFuture(e, f)), this.lang().postformat(f)
    }, add: function (d, e) {
        var f = aj.duration(d, e);
        return this._milliseconds += f._milliseconds, this._days += f._days, this._months += f._months, this._bubble(), this
    }, subtract: function (d, e) {
        var f = aj.duration(d, e);
        return this._milliseconds -= f._milliseconds, this._days -= f._days, this._months -= f._months, this._bubble(), this
    }, get: function (b) {
        return b = a4(b), this[b.toLowerCase() + "s"]()
    }, as: function (b) {
        return b = a4(b), this["as" + b.charAt(0).toUpperCase() + b.slice(1) + "s"]()
    }, lang: aj.fn.lang, toIsoString: function () {
        var g = Math.abs(this.years()), h = Math.abs(this.months()), j = Math.abs(this.days()), k = Math.abs(this.hours()), l = Math.abs(this.minutes()), m = Math.abs(this.seconds() + this.milliseconds() / 1000);
        return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (j ? j + "D" : "") + (k || l || m ? "T" : "") + (k ? k + "H" : "") + (l ? l + "M" : "") + (m ? m + "S" : "") : "P0D"
    }});
    for (an in aR) {
        aR.hasOwnProperty(an) && (ac(an, aR[an]), aa(an.toLowerCase()))
    }
    ac("Weeks", 604800000), aj.duration.fn.asMonths = function () {
        return(+this - 31536000000 * this.years()) / 2592000000 + 12 * this.years()
    }, aj.lang("en", {ordinal: function (d) {
        var e = d % 10, f = 1 === bh(d % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
        return d + f
    }}), a6 ? (module.exports = aj, af(!0)) : "function" == typeof define && define.amd ? define("moment", function (a, e, f) {
        return f.config().noGlobal !== !0 && af(f.config().noGlobal === ad), aj
    }) : af()
}).call(this);
Enumerable = function () {
    var F = "Single:sequence contains more than one element.", v = true, s = null, r = false, t = function (b) {
        this.GetEnumerator = b
    };
    t.Choice = function () {
        var b = arguments[0] instanceof Array ? arguments[0] : arguments;
        return new t(function () {
            return new w(z.Blank, function () {
                return this.Yield(b[Math.floor(Math.random() * b.length)])
            }, z.Blank)
        })
    };
    t.Cycle = function () {
        var b = arguments[0] instanceof Array ? arguments[0] : arguments;
        return new t(function () {
            var a = 0;
            return new w(z.Blank, function () {
                if (a >= b.length) {
                    a = 0
                }
                return this.Yield(b[a++])
            }, z.Blank)
        })
    };
    t.Empty = function () {
        return new t(function () {
            return new w(z.Blank, function () {
                return r
            }, z.Blank)
        })
    };
    t.From = function (a) {
        if (a == s) {
            return t.Empty()
        }
        if (a instanceof t) {
            return a
        }
        if (typeof a == B.Number || typeof a == B.Boolean) {
            return t.Repeat(a, 1)
        }
        if (typeof a == B.String) {
            return new t(function () {
                var c = 0;
                return new w(z.Blank, function () {
                    return c < a.length ? this.Yield(a.charAt(c++)) : r
                }, z.Blank)
            })
        }
        if (typeof a != B.Function) {
            if (typeof a.length == B.Number) {
                return new A(a)
            }
            if (!(a instanceof Object) && u.IsIEnumerable(a)) {
                return new t(function () {
                    var e = v, d;
                    return new w(function () {
                        d = new Enumerator(a)
                    }, function () {
                        if (e) {
                            e = r
                        } else {
                            d.moveNext()
                        }
                        return d.atEnd() ? r : this.Yield(d.item())
                    }, z.Blank)
                })
            }
        }
        return new t(function () {
            var d = [], e = 0;
            return new w(function () {
                for (var b in a) {
                    !(a[b] instanceof Function) && d.push({Key: b, Value: a[b]})
                }
            }, function () {
                return e < d.length ? this.Yield(d[e++]) : r
            }, z.Blank)
        })
    }, t.Return = function (b) {
        return t.Repeat(b, 1)
    };
    t.Matches = function (c, b, a) {
        if (a == s) {
            a = ""
        }
        if (b instanceof RegExp) {
            a += b.ignoreCase ? "i" : "";
            a += b.multiline ? "m" : "";
            b = b.source
        }
        if (a.indexOf("g") === -1) {
            a += "g"
        }
        return new t(function () {
            var d;
            return new w(function () {
                d = new RegExp(b, a)
            }, function () {
                var e = d.exec(c);
                return e ? this.Yield(e) : r
            }, z.Blank)
        })
    };
    t.Range = function (f, c, b) {
        if (b == s) {
            b = 1
        }
        return t.ToInfinity(f, b).Take(c)
    };
    t.RangeDown = function (f, c, b) {
        if (b == s) {
            b = 1
        }
        return t.ToNegativeInfinity(f, b).Take(c)
    };
    t.RangeTo = function (c, f, b) {
        if (b == s) {
            b = 1
        }
        return c < f ? t.ToInfinity(c, b).TakeWhile(function (d) {
            return d <= f
        }) : t.ToNegativeInfinity(c, b).TakeWhile(function (d) {
            return d >= f
        })
    };
    t.Repeat = function (c, b) {
        return b != s ? t.Repeat(c).Take(b) : new t(function () {
            return new w(z.Blank, function () {
                return this.Yield(c)
            }, z.Blank)
        })
    };
    t.RepeatWithFinalize = function (b, c) {
        b = u.CreateLambda(b);
        c = u.CreateLambda(c);
        return new t(function () {
            var a;
            return new w(function () {
                a = b()
            }, function () {
                return this.Yield(a)
            }, function () {
                if (a != s) {
                    c(a);
                    a = s
                }
            })
        })
    };
    t.Generate = function (b, c) {
        if (c != s) {
            return t.Generate(b).Take(c)
        }
        b = u.CreateLambda(b);
        return new t(function () {
            return new w(z.Blank, function () {
                return this.Yield(b())
            }, z.Blank)
        })
    };
    t.ToInfinity = function (c, b) {
        if (c == s) {
            c = 0
        }
        if (b == s) {
            b = 1
        }
        return new t(function () {
            var a;
            return new w(function () {
                a = c - b
            }, function () {
                return this.Yield(a += b)
            }, z.Blank)
        })
    };
    t.ToNegativeInfinity = function (c, b) {
        if (c == s) {
            c = 0
        }
        if (b == s) {
            b = 1
        }
        return new t(function () {
            var a;
            return new w(function () {
                a = c + b
            }, function () {
                return this.Yield(a -= b)
            }, z.Blank)
        })
    };
    t.Unfold = function (c, a) {
        a = u.CreateLambda(a);
        return new t(function () {
            var e = v, b;
            return new w(z.Blank, function () {
                if (e) {
                    e = r;
                    b = c;
                    return this.Yield(b)
                }
                b = a(b);
                return this.Yield(b)
            }, z.Blank)
        })
    };
    t.prototype = {CascadeBreadthFirst: function (c, a) {
        var d = this;
        c = u.CreateLambda(c);
        a = u.CreateLambda(a);
        return new t(function () {
            var b, f = 0, e = [];
            return new w(function () {
                b = d.GetEnumerator()
            }, function () {
                while (v) {
                    if (b.MoveNext()) {
                        e.push(b.Current());
                        return this.Yield(a(b.Current(), f))
                    }
                    var g = t.From(e).SelectMany(function (h) {
                        return c(h)
                    });
                    if (!g.Any()) {
                        return r
                    } else {
                        f++;
                        e = [];
                        u.Dispose(b);
                        b = g.GetEnumerator()
                    }
                }
            }, function () {
                u.Dispose(b)
            })
        })
    }, CascadeDepthFirst: function (c, a) {
        var d = this;
        c = u.CreateLambda(c);
        a = u.CreateLambda(a);
        return new t(function () {
            var e = [], b;
            return new w(function () {
                b = d.GetEnumerator()
            }, function () {
                while (v) {
                    if (b.MoveNext()) {
                        var g = a(b.Current(), e.length);
                        e.push(b);
                        b = t.From(c(b.Current())).GetEnumerator();
                        return this.Yield(g)
                    }
                    if (e.length <= 0) {
                        return r
                    }
                    u.Dispose(b);
                    b = e.pop()
                }
            }, function () {
                try {
                    u.Dispose(b)
                } finally {
                    t.From(e).ForEach(function (f) {
                        f.Dispose()
                    })
                }
            })
        })
    }, Flatten: function () {
        var a = this;
        return new t(function () {
            var c, b = s;
            return new w(function () {
                c = a.GetEnumerator()
            }, function () {
                while (v) {
                    if (b != s) {
                        if (b.MoveNext()) {
                            return this.Yield(b.Current())
                        } else {
                            b = s
                        }
                    }
                    if (c.MoveNext()) {
                        if (c.Current() instanceof Array) {
                            u.Dispose(b);
                            b = t.From(c.Current()).SelectMany(z.Identity).Flatten().GetEnumerator();
                            continue
                        } else {
                            return this.Yield(c.Current())
                        }
                    }
                    return r
                }
            }, function () {
                try {
                    u.Dispose(c)
                } finally {
                    u.Dispose(b)
                }
            })
        })
    }, Pairwise: function (a) {
        var c = this;
        a = u.CreateLambda(a);
        return new t(function () {
            var b;
            return new w(function () {
                b = c.GetEnumerator();
                b.MoveNext()
            }, function () {
                var e = b.Current();
                return b.MoveNext() ? this.Yield(a(e, b.Current())) : r
            }, function () {
                u.Dispose(b)
            })
        })
    }, Scan: function (c, a, d) {
        if (d != s) {
            return this.Scan(c, a).Select(d)
        }
        var b;
        if (a == s) {
            a = u.CreateLambda(c);
            b = r
        } else {
            a = u.CreateLambda(a);
            b = v
        }
        var e = this;
        return new t(function () {
            var f, g, h = v;
            return new w(function () {
                f = e.GetEnumerator()
            }, function () {
                if (h) {
                    h = r;
                    if (!b) {
                        if (f.MoveNext()) {
                            return this.Yield(g = f.Current())
                        }
                    } else {
                        return this.Yield(g = c)
                    }
                }
                return f.MoveNext() ? this.Yield(g = a(g, f.Current())) : r
            }, function () {
                u.Dispose(f)
            })
        })
    }, Select: function (a) {
        var c = this;
        a = u.CreateLambda(a);
        return new t(function () {
            var b, d = 0;
            return new w(function () {
                b = c.GetEnumerator()
            }, function () {
                return b.MoveNext() ? this.Yield(a(b.Current(), d++)) : r
            }, function () {
                u.Dispose(b)
            })
        })
    }, SelectMany: function (b, a) {
        var c = this;
        b = u.CreateLambda(b);
        if (a == s) {
            a = function (e, d) {
                return d
            }
        }
        a = u.CreateLambda(a);
        return new t(function () {
            var e, d = undefined, f = 0;
            return new w(function () {
                e = c.GetEnumerator()
            }, function () {
                if (d === undefined) {
                    if (!e.MoveNext()) {
                        return r
                    }
                }
                do {
                    if (d == s) {
                        var g = b(e.Current(), f++);
                        d = t.From(g).GetEnumerator()
                    }
                    if (d.MoveNext()) {
                        return this.Yield(a(e.Current(), d.Current()))
                    }
                    u.Dispose(d);
                    d = s
                } while (e.MoveNext());
                return r
            }, function () {
                try {
                    u.Dispose(e)
                } finally {
                    u.Dispose(d)
                }
            })
        })
    }, Where: function (a) {
        a = u.CreateLambda(a);
        var c = this;
        return new t(function () {
            var b, d = 0;
            return new w(function () {
                b = c.GetEnumerator()
            }, function () {
                while (b.MoveNext()) {
                    if (a(b.Current(), d++)) {
                        return this.Yield(b.Current())
                    }
                }
                return r
            }, function () {
                u.Dispose(b)
            })
        })
    }, OfType: function (d) {
        var b;
        switch (d) {
            case Number:
                b = B.Number;
                break;
            case String:
                b = B.String;
                break;
            case Boolean:
                b = B.Boolean;
                break;
            case Function:
                b = B.Function;
                break;
            default:
                b = s
        }
        return b === s ? this.Where(function (c) {
            return c instanceof d
        }) : this.Where(function (a) {
            return typeof a === b
        })
    }, Zip: function (c, a) {
        a = u.CreateLambda(a);
        var d = this;
        return new t(function () {
            var e, b, f = 0;
            return new w(function () {
                e = d.GetEnumerator();
                b = t.From(c).GetEnumerator()
            }, function () {
                return e.MoveNext() && b.MoveNext() ? this.Yield(a(e.Current(), b.Current(), f++)) : r
            }, function () {
                try {
                    u.Dispose(e)
                } finally {
                    u.Dispose(b)
                }
            })
        })
    }, Join: function (f, b, a, d, c) {
        b = u.CreateLambda(b);
        a = u.CreateLambda(a);
        d = u.CreateLambda(d);
        c = u.CreateLambda(c);
        var e = this;
        return new t(function () {
            var g, k, h = s, j = 0;
            return new w(function () {
                g = e.GetEnumerator();
                k = t.From(f).ToLookup(a, z.Identity, c)
            }, function () {
                while (v) {
                    if (h != s) {
                        var l = h[j++];
                        if (l !== undefined) {
                            return this.Yield(d(g.Current(), l))
                        }
                        l = s;
                        j = 0
                    }
                    if (g.MoveNext()) {
                        var m = b(g.Current());
                        h = k.Get(m).ToArray()
                    } else {
                        return r
                    }
                }
            }, function () {
                u.Dispose(g)
            })
        })
    }, GroupJoin: function (g, b, a, d, c) {
        b = u.CreateLambda(b);
        a = u.CreateLambda(a);
        d = u.CreateLambda(d);
        c = u.CreateLambda(c);
        var f = this;
        return new t(function () {
            var e = f.GetEnumerator(), h = s;
            return new w(function () {
                e = f.GetEnumerator();
                h = t.From(g).ToLookup(a, z.Identity, c)
            }, function () {
                if (e.MoveNext()) {
                    var j = h.Get(b(e.Current()));
                    return this.Yield(d(e.Current(), j))
                }
                return r
            }, function () {
                u.Dispose(e)
            })
        })
    }, All: function (a) {
        a = u.CreateLambda(a);
        var d = v;
        this.ForEach(function (b) {
            if (!a(b)) {
                d = r;
                return r
            }
        });
        return d
    }, Any: function (d) {
        d = u.CreateLambda(d);
        var a = this.GetEnumerator();
        try {
            if (arguments.length == 0) {
                return a.MoveNext()
            }
            while (a.MoveNext()) {
                if (d(a.Current())) {
                    return v
                }
            }
            return r
        } finally {
            u.Dispose(a)
        }
    }, Concat: function (a) {
        var b = this;
        return new t(function () {
            var d, c;
            return new w(function () {
                d = b.GetEnumerator()
            }, function () {
                if (c == s) {
                    if (d.MoveNext()) {
                        return this.Yield(d.Current())
                    }
                    c = t.From(a).GetEnumerator()
                }
                return c.MoveNext() ? this.Yield(c.Current()) : r
            }, function () {
                try {
                    u.Dispose(d)
                } finally {
                    u.Dispose(c)
                }
            })
        })
    }, Insert: function (d, a) {
        var c = this;
        return new t(function () {
            var e, b, g = 0, f = r;
            return new w(function () {
                e = c.GetEnumerator();
                b = t.From(a).GetEnumerator()
            }, function () {
                if (g == d && b.MoveNext()) {
                    f = v;
                    return this.Yield(b.Current())
                }
                if (e.MoveNext()) {
                    g++;
                    return this.Yield(e.Current())
                }
                return !f && b.MoveNext() ? this.Yield(b.Current()) : r
            }, function () {
                try {
                    u.Dispose(e)
                } finally {
                    u.Dispose(b)
                }
            })
        })
    }, Alternate: function (b) {
        b = t.Return(b);
        return this.SelectMany(function (a) {
            return t.Return(a).Concat(b)
        }).TakeExceptLast()
    }, Contains: function (e, a) {
        a = u.CreateLambda(a);
        var d = this.GetEnumerator();
        try {
            while (d.MoveNext()) {
                if (a(d.Current()) === e) {
                    return v
                }
            }
            return r
        } finally {
            u.Dispose(d)
        }
    }, DefaultIfEmpty: function (a) {
        var c = this;
        return new t(function () {
            var b, d = v;
            return new w(function () {
                b = c.GetEnumerator()
            }, function () {
                if (b.MoveNext()) {
                    d = r;
                    return this.Yield(b.Current())
                } else {
                    if (d) {
                        d = r;
                        return this.Yield(a)
                    }
                }
                return r
            }, function () {
                u.Dispose(b)
            })
        })
    }, Distinct: function (b) {
        return this.Except(t.Empty(), b)
    }, Except: function (c, a) {
        a = u.CreateLambda(a);
        var d = this;
        return new t(function () {
            var b, e;
            return new w(function () {
                b = d.GetEnumerator();
                e = new G(a);
                t.From(c).ForEach(function (f) {
                    e.Add(f)
                })
            }, function () {
                while (b.MoveNext()) {
                    var f = b.Current();
                    if (!e.Contains(f)) {
                        e.Add(f);
                        return this.Yield(f)
                    }
                }
                return r
            }, function () {
                u.Dispose(b)
            })
        })
    }, Intersect: function (c, a) {
        a = u.CreateLambda(a);
        var d = this;
        return new t(function () {
            var b, e, f;
            return new w(function () {
                b = d.GetEnumerator();
                e = new G(a);
                t.From(c).ForEach(function (g) {
                    e.Add(g)
                });
                f = new G(a)
            }, function () {
                while (b.MoveNext()) {
                    var g = b.Current();
                    if (!f.Contains(g) && e.Contains(g)) {
                        f.Add(g);
                        return this.Yield(g)
                    }
                }
                return r
            }, function () {
                u.Dispose(b)
            })
        })
    }, SequenceEqual: function (e, c) {
        c = u.CreateLambda(c);
        var d = this.GetEnumerator();
        try {
            var a = t.From(e).GetEnumerator();
            try {
                while (d.MoveNext()) {
                    if (!a.MoveNext() || c(d.Current()) !== c(a.Current())) {
                        return r
                    }
                }
                return a.MoveNext() ? r : v
            } finally {
                u.Dispose(a)
            }
        } finally {
            u.Dispose(d)
        }
    }, Union: function (c, a) {
        a = u.CreateLambda(a);
        var d = this;
        return new t(function () {
            var f, b, e;
            return new w(function () {
                f = d.GetEnumerator();
                e = new G(a)
            }, function () {
                var g;
                if (b === undefined) {
                    while (f.MoveNext()) {
                        g = f.Current();
                        if (!e.Contains(g)) {
                            e.Add(g);
                            return this.Yield(g)
                        }
                    }
                    b = t.From(c).GetEnumerator()
                }
                while (b.MoveNext()) {
                    g = b.Current();
                    if (!e.Contains(g)) {
                        e.Add(g);
                        return this.Yield(g)
                    }
                }
                return r
            }, function () {
                try {
                    u.Dispose(f)
                } finally {
                    u.Dispose(b)
                }
            })
        })
    }, OrderBy: function (a) {
        return new C(this, a, r)
    }, OrderByDescending: function (b) {
        return new C(this, b, v)
    }, Reverse: function () {
        var a = this;
        return new t(function () {
            var b, e;
            return new w(function () {
                b = a.ToArray();
                e = b.length
            }, function () {
                return e > 0 ? this.Yield(b[--e]) : r
            }, z.Blank)
        })
    }, Shuffle: function () {
        var a = this;
        return new t(function () {
            var b;
            return new w(function () {
                b = a.ToArray()
            }, function () {
                if (b.length > 0) {
                    var c = Math.floor(Math.random() * b.length);
                    return this.Yield(b.splice(c, 1)[0])
                }
                return r
            }, z.Blank)
        })
    }, GroupBy: function (d, c, a, b) {
        var f = this;
        d = u.CreateLambda(d);
        c = u.CreateLambda(c);
        if (a != s) {
            a = u.CreateLambda(a)
        }
        b = u.CreateLambda(b);
        return new t(function () {
            var e;
            return new w(function () {
                e = f.ToLookup(d, c, b).ToEnumerable().GetEnumerator()
            }, function () {
                while (e.MoveNext()) {
                    return a == s ? this.Yield(e.Current()) : this.Yield(a(e.Current().Key(), e.Current()))
                }
                return r
            }, function () {
                u.Dispose(e)
            })
        })
    }, PartitionBy: function (d, c, a, b) {
        var f = this;
        d = u.CreateLambda(d);
        c = u.CreateLambda(c);
        b = u.CreateLambda(b);
        var e;
        if (a == s) {
            e = r;
            a = function (h, g) {
                return new H(h, g)
            }
        } else {
            e = v;
            a = u.CreateLambda(a)
        }
        return new t(function () {
            var g, j, k, h = [];
            return new w(function () {
                g = f.GetEnumerator();
                if (g.MoveNext()) {
                    j = d(g.Current());
                    k = b(j);
                    h.push(c(g.Current()))
                }
            }, function () {
                var l;
                while ((l = g.MoveNext()) == v) {
                    if (k === b(d(g.Current()))) {
                        h.push(c(g.Current()))
                    } else {
                        break
                    }
                }
                if (h.length > 0) {
                    var m = e ? a(j, t.From(h)) : a(j, h);
                    if (l) {
                        j = d(g.Current());
                        k = b(j);
                        h = [c(g.Current())]
                    } else {
                        h = []
                    }
                    return this.Yield(m)
                }
                return r
            }, function () {
                u.Dispose(g)
            })
        })
    }, BufferWithCount: function (c) {
        var a = this;
        return new t(function () {
            var b;
            return new w(function () {
                b = a.GetEnumerator()
            }, function () {
                var e = [], f = 0;
                while (b.MoveNext()) {
                    e.push(b.Current());
                    if (++f >= c) {
                        return this.Yield(e)
                    }
                }
                return e.length > 0 ? this.Yield(e) : r
            }, function () {
                u.Dispose(b)
            })
        })
    }, Aggregate: function (f, e, d) {
        return this.Scan(f, e, d).Last()
    }, Average: function (d) {
        d = u.CreateLambda(d);
        var f = 0, e = 0;
        this.ForEach(function (a) {
            f += d(a);
            ++e
        });
        return f / e
    }, Count: function (b) {
        b = b == s ? z.True : u.CreateLambda(b);
        var d = 0;
        this.ForEach(function (c, a) {
            if (b(c, a)) {
                ++d
            }
        });
        return d
    }, Max: function (b) {
        if (b == s) {
            b = z.Identity
        }
        return this.Select(b).Aggregate(function (c, d) {
            return c > d ? c : d
        })
    }, Min: function (b) {
        if (b == s) {
            b = z.Identity
        }
        return this.Select(b).Aggregate(function (c, d) {
            return c < d ? c : d
        })
    }, MaxBy: function (b) {
        b = u.CreateLambda(b);
        return this.Aggregate(function (a, d) {
            return b(a) > b(d) ? a : d
        })
    }, MinBy: function (b) {
        b = u.CreateLambda(b);
        return this.Aggregate(function (a, d) {
            return b(a) < b(d) ? a : d
        })
    }, Sum: function (b) {
        if (b == s) {
            b = z.Identity
        }
        return this.Select(b).Aggregate(0, function (c, d) {
            return c + d
        })
    }, ElementAt: function (f) {
        var e, a = r;
        this.ForEach(function (c, b) {
            if (b == f) {
                e = c;
                a = v;
                return r
            }
        });
        if (!a) {
            throw new Error("index is less than 0 or greater than or equal to the number of elements in source.")
        }
        return e
    }, ElementAtOrDefault: function (h, g) {
        var e, a = r;
        this.ForEach(function (c, b) {
            if (b == h) {
                e = c;
                a = v;
                return r
            }
        });
        return !a ? g : e
    }, First: function (a) {
        if (a != s) {
            return this.Where(a).First()
        }
        var e, b = r;
        this.ForEach(function (c) {
            e = c;
            b = v;
            return r
        });
        if (!b) {
            throw new Error("First:No element satisfies the condition.")
        }
        return e
    }, FirstOrDefault: function (a, b) {
        if (b != s) {
            return this.Where(b).FirstOrDefault(a)
        }
        var h, e = r;
        this.ForEach(function (c) {
            h = c;
            e = v;
            return r
        });
        return !e ? a : h
    }, Last: function (a) {
        if (a != s) {
            return this.Where(a).Last()
        }
        var e, b = r;
        this.ForEach(function (c) {
            b = v;
            e = c
        });
        if (!b) {
            throw new Error("Last:No element satisfies the condition.")
        }
        return e
    }, LastOrDefault: function (a, b) {
        if (b != s) {
            return this.Where(b).LastOrDefault(a)
        }
        var h, e = r;
        this.ForEach(function (c) {
            e = v;
            h = c
        });
        return !e ? a : h
    }, Single: function (b) {
        if (b != s) {
            return this.Where(b).Single()
        }
        var e, a = r;
        this.ForEach(function (c) {
            if (!a) {
                a = v;
                e = c
            } else {
                throw new Error(F)
            }
        });
        if (!a) {
            throw new Error("Single:No element satisfies the condition.")
        }
        return e
    }, SingleOrDefault: function (b, e) {
        if (e != s) {
            return this.Where(e).SingleOrDefault(b)
        }
        var h, a = r;
        this.ForEach(function (c) {
            if (!a) {
                a = v;
                h = c
            } else {
                throw new Error(F)
            }
        });
        return !a ? b : h
    }, Skip: function (c) {
        var a = this;
        return new t(function () {
            var b, d = 0;
            return new w(function () {
                b = a.GetEnumerator();
                while (d++ < c && b.MoveNext()) {
                }
            }, function () {
                return b.MoveNext() ? this.Yield(b.Current()) : r
            }, function () {
                u.Dispose(b)
            })
        })
    }, SkipWhile: function (a) {
        a = u.CreateLambda(a);
        var c = this;
        return new t(function () {
            var b, e = 0, d = r;
            return new w(function () {
                b = c.GetEnumerator()
            }, function () {
                while (!d) {
                    if (b.MoveNext()) {
                        if (!a(b.Current(), e++)) {
                            d = v;
                            return this.Yield(b.Current())
                        }
                        continue
                    } else {
                        return r
                    }
                }
                return b.MoveNext() ? this.Yield(b.Current()) : r
            }, function () {
                u.Dispose(b)
            })
        })
    }, Take: function (c) {
        var a = this;
        return new t(function () {
            var b, d = 0;
            return new w(function () {
                b = a.GetEnumerator()
            }, function () {
                return d++ < c && b.MoveNext() ? this.Yield(b.Current()) : r
            }, function () {
                u.Dispose(b)
            })
        })
    }, TakeWhile: function (a) {
        a = u.CreateLambda(a);
        var c = this;
        return new t(function () {
            var b, d = 0;
            return new w(function () {
                b = c.GetEnumerator()
            }, function () {
                return b.MoveNext() && a(b.Current(), d++) ? this.Yield(b.Current()) : r
            }, function () {
                u.Dispose(b)
            })
        })
    }, TakeExceptLast: function (a) {
        if (a == s) {
            a = 1
        }
        var b = this;
        return new t(function () {
            if (a <= 0) {
                return b.GetEnumerator()
            }
            var d, e = [];
            return new w(function () {
                d = b.GetEnumerator()
            }, function () {
                while (d.MoveNext()) {
                    if (e.length == a) {
                        e.push(d.Current());
                        return this.Yield(e.shift())
                    }
                    e.push(d.Current())
                }
                return r
            }, function () {
                u.Dispose(d)
            })
        })
    }, TakeFromLast: function (a) {
        if (a <= 0 || a == s) {
            return t.Empty()
        }
        var b = this;
        return new t(function () {
            var e, c, d = [];
            return new w(function () {
                e = b.GetEnumerator()
            }, function () {
                while (e.MoveNext()) {
                    d.length == a && d.shift();
                    d.push(e.Current())
                }
                if (c == s) {
                    c = t.From(d).GetEnumerator()
                }
                return c.MoveNext() ? this.Yield(c.Current()) : r
            }, function () {
                u.Dispose(c)
            })
        })
    }, IndexOf: function (d) {
        var b = s;
        this.ForEach(function (c, a) {
            if (c === d) {
                b = a;
                return v
            }
        });
        return b !== s ? b : -1
    }, LastIndexOf: function (d) {
        var c = -1;
        this.ForEach(function (b, a) {
            if (b === d) {
                c = a
            }
        });
        return c
    }, ToArray: function () {
        var b = [];
        this.ForEach(function (a) {
            b.push(a)
        });
        return b
    }, ToLookup: function (g, f, d) {
        g = u.CreateLambda(g);
        f = u.CreateLambda(f);
        d = u.CreateLambda(d);
        var h = new G(d);
        this.ForEach(function (j) {
            var e = g(j), b = f(j), c = h.Get(e);
            if (c !== undefined) {
                c.push(b)
            } else {
                h.Add(e, [b])
            }
        });
        return new J(h)
    }, ToObject: function (e, d) {
        e = u.CreateLambda(e);
        d = u.CreateLambda(d);
        var f = {};
        this.ForEach(function (a) {
            f[e(a)] = d(a)
        });
        return f
    }, ToDictionary: function (g, f, d) {
        g = u.CreateLambda(g);
        f = u.CreateLambda(f);
        d = u.CreateLambda(d);
        var h = new G(d);
        this.ForEach(function (b) {
            h.Add(g(b), f(b))
        });
        return h
    }, ToJSON: function (c, d) {
        return JSON.stringify(this.ToArray(), c, d)
    }, ToString: function (b, d) {
        if (b == s) {
            b = ""
        }
        if (d == s) {
            d = z.Identity
        }
        return this.Select(d).ToArray().join(b)
    }, Do: function (a) {
        var c = this;
        a = u.CreateLambda(a);
        return new t(function () {
            var b, d = 0;
            return new w(function () {
                b = c.GetEnumerator()
            }, function () {
                if (b.MoveNext()) {
                    a(b.Current(), d++);
                    return this.Yield(b.Current())
                }
                return r
            }, function () {
                u.Dispose(b)
            })
        })
    }, ForEach: function (d) {
        d = u.CreateLambda(d);
        var f = 0, a = this.GetEnumerator();
        try {
            while (a.MoveNext()) {
                if (d(a.Current(), f++) === r) {
                    break
                }
            }
        } finally {
            u.Dispose(a)
        }
    }, Write: function (a, b) {
        if (a == s) {
            a = ""
        }
        b = u.CreateLambda(b);
        var d = v;
        this.ForEach(function (c) {
            if (d) {
                d = r
            } else {
                document.write(a)
            }
            document.write(b(c))
        })
    }, WriteLine: function (b) {
        b = u.CreateLambda(b);
        this.ForEach(function (a) {
            document.write(b(a));
            document.write("<br />")
        })
    }, Force: function () {
        var b = this.GetEnumerator();
        try {
            while (b.MoveNext()) {
            }
        } finally {
            u.Dispose(b)
        }
    }, Let: function (a) {
        a = u.CreateLambda(a);
        var c = this;
        return new t(function () {
            var b;
            return new w(function () {
                b = t.From(a(c)).GetEnumerator()
            }, function () {
                return b.MoveNext() ? this.Yield(b.Current()) : r
            }, function () {
                u.Dispose(b)
            })
        })
    }, Share: function () {
        var b = this, a;
        return new t(function () {
            return new w(function () {
                if (a == s) {
                    a = b.GetEnumerator()
                }
            }, function () {
                return a.MoveNext() ? this.Yield(a.Current()) : r
            }, z.Blank)
        })
    }, MemoizeAll: function () {
        var c = this, b, a;
        return new t(function () {
            var d = -1;
            return new w(function () {
                if (a == s) {
                    a = c.GetEnumerator();
                    b = []
                }
            }, function () {
                d++;
                return b.length <= d ? a.MoveNext() ? this.Yield(b[d] = a.Current()) : r : this.Yield(b[d])
            }, z.Blank)
        })
    }, Catch: function (a) {
        a = u.CreateLambda(a);
        var c = this;
        return new t(function () {
            var b;
            return new w(function () {
                b = c.GetEnumerator()
            }, function () {
                try {
                    return b.MoveNext() ? this.Yield(b.Current()) : r
                } catch (e) {
                    a(e);
                    return r
                }
            }, function () {
                u.Dispose(b)
            })
        })
    }, Finally: function (a) {
        a = u.CreateLambda(a);
        var c = this;
        return new t(function () {
            var b;
            return new w(function () {
                b = c.GetEnumerator()
            }, function () {
                return b.MoveNext() ? this.Yield(b.Current()) : r
            }, function () {
                try {
                    u.Dispose(b)
                } finally {
                    a()
                }
            })
        })
    }, Trace: function (d, b) {
        if (d == s) {
            d = "Trace"
        }
        b = u.CreateLambda(b);
        return this.Do(function (a) {
            console.log(d, ":", b(a))
        })
    }};
    var z = {Identity: function (b) {
        return b
    }, True: function () {
        return v
    }, Blank: function () {
    }}, B = {Boolean: typeof v, Number: typeof 0, String: typeof"", Object: typeof{}, Undefined: typeof undefined, Function: typeof function () {
    }}, u = {CreateLambda: function (b) {
        if (b == s) {
            return z.Identity
        }
        if (typeof b == B.String) {
            if (b == "") {
                return z.Identity
            } else {
                if (b.indexOf("=>") == -1) {
                    return new Function("$,$$,$$$,$$$$", "return " + b)
                } else {
                    var d = b.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);
                    return new Function(d[1], "return " + d[2])
                }
            }
        }
        return b
    }, IsIEnumerable: function (a) {
        if (typeof Enumerator != B.Undefined) {
            try {
                new Enumerator(a);
                return v
            } catch (d) {
            }
        }
        return r
    }, Compare: function (c, d) {
        return c === d ? 0 : c > d ? 1 : -1
    }, Dispose: function (b) {
        b != s && b.Dispose()
    }}, D = {Before: 0, Running: 1, After: 2}, w = function (h, j, k) {
        var e = new I, a = D.Before;
        this.Current = e.Current;
        this.MoveNext = function () {
            try {
                switch (a) {
                    case D.Before:
                        a = D.Running;
                        h();
                    case D.Running:
                        if (j.apply(e)) {
                            return v
                        } else {
                            this.Dispose();
                            return r
                        }
                    case D.After:
                        return r
                }
            } catch (b) {
                this.Dispose();
                throw b
            }
        };
        this.Dispose = function () {
            if (a != D.Running) {
                return
            }
            try {
                k()
            } finally {
                a = D.After
            }
        }
    }, I = function () {
        var b = s;
        this.Current = function () {
            return b
        };
        this.Yield = function (a) {
            b = a;
            return v
        }
    }, C = function (k, g, h, j) {
        var d = this;
        d.source = k;
        d.keySelector = u.CreateLambda(g);
        d.descending = h;
        d.parent = j
    };
    C.prototype = new t;
    C.prototype.CreateOrderedEnumerable = function (c, d) {
        return new C(this.source, c, d, this)
    };
    C.prototype.ThenBy = function (a) {
        return this.CreateOrderedEnumerable(a, r)
    };
    C.prototype.ThenByDescending = function (b) {
        return this.CreateOrderedEnumerable(b, v)
    };
    C.prototype.GetEnumerator = function () {
        var g = this, b, a, f = 0;
        return new w(function () {
            b = [];
            a = [];
            g.source.ForEach(function (e, d) {
                b.push(e);
                a.push(d)
            });
            var c = E.Create(g, s);
            c.GenerateKeys(b);
            a.sort(function (d, e) {
                return c.Compare(d, e)
            })
        }, function () {
            return f < a.length ? this.Yield(b[a[f++]]) : r
        }, z.Blank)
    };
    var E = function (f, g, h) {
        var b = this;
        b.keySelector = f;
        b.descending = g;
        b.child = h;
        b.keys = s
    };
    E.Create = function (b, f) {
        var e = new E(b.keySelector, b.descending, f);
        return b.parent != s ? E.Create(b.parent, e) : e
    };
    E.prototype.GenerateKeys = function (j) {
        var b = this;
        for (var l = j.length, m = b.keySelector, k = new Array(l), h = 0; h < l; h++) {
            k[h] = m(j[h])
        }
        b.keys = k;
        b.child != s && b.child.GenerateKeys(j)
    };
    E.prototype.Compare = function (g, h) {
        var b = this, d = u.Compare(b.keys[g], b.keys[h]);
        if (d == 0) {
            if (b.child != s) {
                return b.child.Compare(g, h)
            }
            d = u.Compare(g, h)
        }
        return b.descending ? -d : d
    };
    var A = function (b) {
        this.source = b
    };
    A.prototype = new t;
    A.prototype.Any = function (b) {
        return b == s ? this.source.length > 0 : t.prototype.Any.apply(this, arguments)
    };
    A.prototype.Count = function (b) {
        return b == s ? this.source.length : t.prototype.Count.apply(this, arguments)
    };
    A.prototype.ElementAt = function (b) {
        return 0 <= b && b < this.source.length ? this.source[b] : t.prototype.ElementAt.apply(this, arguments)
    };
    A.prototype.ElementAtOrDefault = function (c, d) {
        return 0 <= c && c < this.source.length ? this.source[c] : d
    };
    A.prototype.First = function (b) {
        return b == s && this.source.length > 0 ? this.source[0] : t.prototype.First.apply(this, arguments)
    };
    A.prototype.FirstOrDefault = function (b, c) {
        return c != s ? t.prototype.FirstOrDefault.apply(this, arguments) : this.source.length > 0 ? this.source[0] : b
    };
    A.prototype.Last = function (c) {
        var b = this;
        return c == s && b.source.length > 0 ? b.source[b.source.length - 1] : t.prototype.Last.apply(b, arguments)
    };
    A.prototype.LastOrDefault = function (c, f) {
        var b = this;
        return f != s ? t.prototype.LastOrDefault.apply(b, arguments) : b.source.length > 0 ? b.source[b.source.length - 1] : c
    };
    A.prototype.Skip = function (c) {
        var a = this.source;
        return new t(function () {
            var b;
            return new w(function () {
                b = c < 0 ? 0 : c
            }, function () {
                return b < a.length ? this.Yield(a[b++]) : r
            }, z.Blank)
        })
    };
    A.prototype.TakeExceptLast = function (b) {
        if (b == s) {
            b = 1
        }
        return this.Take(this.source.length - b)
    };
    A.prototype.TakeFromLast = function (b) {
        return this.Skip(this.source.length - b)
    };
    A.prototype.Reverse = function () {
        var a = this.source;
        return new t(function () {
            var b;
            return new w(function () {
                b = a.length
            }, function () {
                return b > 0 ? this.Yield(a[--b]) : r
            }, z.Blank)
        })
    };
    A.prototype.SequenceEqual = function (a, b) {
        return(a instanceof A || a instanceof Array) && b == s && t.From(a).Count() != this.Count() ? r : t.prototype.SequenceEqual.apply(this, arguments)
    };
    A.prototype.ToString = function (b, c) {
        if (c != s || !(this.source instanceof Array)) {
            return t.prototype.ToString.apply(this, arguments)
        }
        if (b == s) {
            b = ""
        }
        return this.source.join(b)
    };
    A.prototype.GetEnumerator = function () {
        var a = this.source, d = 0;
        return new w(z.Blank, function () {
            return d < a.length ? this.Yield(a[d++]) : r
        }, z.Blank)
    };
    var G = function () {
        var b = function (d, g) {
            return Object.prototype.hasOwnProperty.call(d, g)
        }, a = function (d) {
            return d === s ? "null" : d === undefined ? "undefined" : typeof d.toString === B.Function ? d.toString() : Object.prototype.toString.call(d)
        }, f = function (j, h) {
            var g = this;
            g.Key = j;
            g.Value = h;
            g.Prev = s;
            g.Next = s
        }, c = function () {
            this.First = s;
            this.Last = s
        };
        c.prototype = {AddLast: function (g) {
            var d = this;
            if (d.Last != s) {
                d.Last.Next = g;
                g.Prev = d.Last;
                d.Last = g
            } else {
                d.First = d.Last = g
            }
        }, Replace: function (g, d) {
            if (g.Prev != s) {
                g.Prev.Next = d;
                d.Prev = g.Prev
            } else {
                this.First = d
            }
            if (g.Next != s) {
                g.Next.Prev = d;
                d.Next = g.Next
            } else {
                this.Last = d
            }
        }, Remove: function (d) {
            if (d.Prev != s) {
                d.Prev.Next = d.Next
            } else {
                this.First = d.Next
            }
            if (d.Next != s) {
                d.Next.Prev = d.Prev
            } else {
                this.Last = d.Prev
            }
        }};
        var e = function (g) {
            var d = this;
            d.count = 0;
            d.entryList = new c;
            d.buckets = {};
            d.compareSelector = g == s ? z.Identity : g
        };
        e.prototype = {Add: function (o, p) {
            var d = this, n = d.compareSelector(o), m = a(n), k = new f(o, p);
            if (b(d.buckets, m)) {
                for (var h = d.buckets[m], l = 0; l < h.length; l++) {
                    if (d.compareSelector(h[l].Key) === n) {
                        d.entryList.Replace(h[l], k);
                        h[l] = k;
                        return
                    }
                }
                h.push(k)
            } else {
                d.buckets[m] = [k]
            }
            d.count++;
            d.entryList.AddLast(k)
        }, Get: function (n) {
            var d = this, j = d.compareSelector(n), m = a(j);
            if (!b(d.buckets, m)) {
                return undefined
            }
            for (var k = d.buckets[m], h = 0; h < k.length; h++) {
                var l = k[h];
                if (d.compareSelector(l.Key) === j) {
                    return l.Value
                }
            }
            return undefined
        }, Set: function (q, K) {
            var d = this, n = d.compareSelector(q), p = a(n);
            if (b(d.buckets, p)) {
                for (var l = d.buckets[p], h = 0; h < l.length; h++) {
                    if (d.compareSelector(l[h].Key) === n) {
                        var o = new f(q, K);
                        d.entryList.Replace(l[h], o);
                        l[h] = o;
                        return v
                    }
                }
            }
            return r
        }, Contains: function (n) {
            var d = this, k = d.compareSelector(n), m = a(k);
            if (!b(d.buckets, m)) {
                return r
            }
            for (var l = d.buckets[m], h = 0; h < l.length; h++) {
                if (d.compareSelector(l[h].Key) === k) {
                    return v
                }
            }
            return r
        }, Clear: function () {
            this.count = 0;
            this.buckets = {};
            this.entryList = new c
        }, Remove: function (m) {
            var d = this, l = d.compareSelector(m), k = a(l);
            if (!b(d.buckets, k)) {
                return
            }
            for (var h = d.buckets[k], j = 0; j < h.length; j++) {
                if (d.compareSelector(h[j].Key) === l) {
                    d.entryList.Remove(h[j]);
                    h.splice(j, 1);
                    if (h.length == 0) {
                        delete d.buckets[k]
                    }
                    d.count--;
                    return
                }
            }
        }, Count: function () {
            return this.count
        }, ToEnumerable: function () {
            var g = this;
            return new t(function () {
                var d;
                return new w(function () {
                    d = g.entryList.First
                }, function () {
                    if (d != s) {
                        var h = {Key: d.Key, Value: d.Value};
                        d = d.Next;
                        return this.Yield(h)
                    }
                    return r
                }, z.Blank)
            })
        }};
        return e
    }(), J = function (c) {
        var d = this;
        d.Count = function () {
            return c.Count()
        };
        d.Get = function (a) {
            return t.From(c.Get(a))
        };
        d.Contains = function (a) {
            return c.Contains(a)
        };
        d.ToEnumerable = function () {
            return c.ToEnumerable().Select(function (b) {
                return new H(b.Key, b.Value)
            })
        }
    }, H = function (d, c) {
        this.Key = function () {
            return d
        };
        A.call(this, c)
    };
    H.prototype = new A;
    return t
}();
/* 
 * LESS - Leaner CSS v1.5.0 
 * http://lesscss.org 
 * 
 * Copyright (c) 2009-2013, Alexis Sellier <self@cloudhead.net> 
 * Licensed under the Apache v2 License. 
 * 
 * @licence 
 */
function require(b) {
    return window.less[b.split("/")[1]]
}
function log(c, d) {
    "development" == less.env && "undefined" != typeof console && less.logLevel >= d && console.log("less: " + c)
}
function extractId(b) {
    return b.replace(/^[a-z-]+:\/+?[^\/]+/, "").replace(/^\//, "").replace(/\.[a-zA-Z]+$/, "").replace(/[^\.\w-]+/g, "-").replace(/\./g, ":")
}
function errorConsole(h, j) {
    var k = "{line} {content}", l = h.filename || j, m = [], n = (h.type || "Syntax") + "Error: " + (h.message || "There is an error in your .less file") + " in " + l + " ", o = function (c, e, f) {
        void 0 !== c.extract[e] && m.push(k.replace(/\{line\}/, (parseInt(c.line, 10) || 0) + (e - 1)).replace(/\{class\}/, f).replace(/\{content\}/, c.extract[e]))
    };
    h.extract ? (o(h, 0, ""), o(h, 1, "line"), o(h, 2, ""), n += "on line " + h.line + ", column " + (h.column + 1) + ":\n" + m.join("\n")) : h.stack && (n += h.stack), log(n, logLevel.errors)
}
function createCSS(l, m, n) {
    var o = m.href || "", p = "less:" + (m.title || extractId(o)), q = document.getElementById(p), r = !1, s = document.createElement("style");
    if (s.setAttribute("type", "text/css"), m.media && s.setAttribute("media", m.media), s.id = p, s.styleSheet) {
        try {
            s.styleSheet.cssText = l
        } catch (t) {
            throw new Error("Couldn't reassign styleSheet.cssText.")
        }
    } else {
        s.appendChild(document.createTextNode(l)), r = null !== q && q.childNodes.length > 0 && s.childNodes.length > 0 && q.firstChild.nodeValue === s.firstChild.nodeValue
    }
    var u = document.getElementsByTagName("head")[0];
    if (null === q || r === !1) {
        var v = m && m.nextSibling || null;
        v ? v.parentNode.insertBefore(s, v) : u.appendChild(s)
    }
    if (q && r === !1 && q.parentNode.removeChild(q), n && cache) {
        log("saving " + o + " to cache.", logLevel.info);
        try {
            cache.setItem(o, l), cache.setItem(o + ":timestamp", n)
        } catch (t) {
            log("failed to save", logLevel.errors)
        }
    }
}
function errorHTML(l, m) {
    var n, o, p = "less-error-message:" + extractId(m || ""), q = '<li><label>{line}</label><pre class="{class}">{content}</pre></li>', r = document.createElement("div"), s = [], t = l.filename || m, u = t.match(/([^\/]+(\?.*)?)$/)[1];
    r.id = p, r.className = "less-error-message", o = "<h3>" + (l.type || "Syntax") + "Error: " + (l.message || "There is an error in your .less file") + '</h3><p>in <a href="' + t + '">' + u + "</a> ";
    var v = function (d, e, f) {
        void 0 !== d.extract[e] && s.push(q.replace(/\{line\}/, (parseInt(d.line, 10) || 0) + (e - 1)).replace(/\{class\}/, f).replace(/\{content\}/, d.extract[e]))
    };
    l.extract ? (v(l, 0, ""), v(l, 1, "line"), v(l, 2, ""), o += "on line " + l.line + ", column " + (l.column + 1) + ":</p><ul>" + s.join("") + "</ul>") : l.stack && (o += "<br/>" + l.stack.split("\n").slice(1).join("<br/>")), r.innerHTML = o, createCSS([".less-error-message ul, .less-error-message li {", "list-style-type: none;", "margin-right: 15px;", "padding: 4px 0;", "margin: 0;", "}", ".less-error-message label {", "font-size: 12px;", "margin-right: 15px;", "padding: 4px 0;", "color: #cc7777;", "}", ".less-error-message pre {", "color: #dd6666;", "padding: 4px 0;", "margin: 0;", "display: inline-block;", "}", ".less-error-message pre.line {", "color: #ff0000;", "}", ".less-error-message h3 {", "font-size: 20px;", "font-weight: bold;", "padding: 15px 0 5px 0;", "margin: 0;", "}", ".less-error-message a {", "color: #10a", "}", ".less-error-message .error {", "color: red;", "font-weight: bold;", "padding-bottom: 2px;", "border-bottom: 1px dashed red;", "}"].join("\n"), {title: "error-message"}), r.style.cssText = ["font-family: Arial, sans-serif", "border: 1px solid #e00", "background-color: #eee", "border-radius: 5px", "-webkit-border-radius: 5px", "-moz-border-radius: 5px", "color: #e00", "padding: 15px", "margin-bottom: 15px"].join(";"), "development" == less.env && (n = setInterval(function () {
        document.body && (document.getElementById(p) ? document.body.replaceChild(r, document.getElementById(p)) : document.body.insertBefore(r, document.body.firstChild), clearInterval(n))
    }, 10))
}
function error(c, d) {
    less.errorReporting && "html" !== less.errorReporting ? "console" === less.errorReporting ? errorConsole(c, d) : "function" == typeof less.errorReporting && less.errorReporting("add", c, d) : errorHTML(c, d)
}
function removeErrorHTML(c) {
    var d = document.getElementById("less-error-message:" + extractId(c));
    d && d.parentNode.removeChild(d)
}
function removeErrorConsole() {
}
function removeError(b) {
    less.errorReporting && "html" !== less.errorReporting ? "console" === less.errorReporting ? removeErrorConsole(b) : "function" == typeof less.errorReporting && less.errorReporting("remove", b) : removeErrorHTML(b)
}
function loadStyles(h) {
    for (var j, k = document.getElementsByTagName("style"), l = 0; l < k.length; l++) {
        if (j = k[l], j.type.match(typePattern)) {
            var m = new less.tree.parseEnv(less), n = j.innerHTML || "";
            m.filename = document.location.href.replace(/#.*$/, ""), h && (m.useFileCache = !0, n += "\n" + h);
            var o = function (b) {
                return function (a, e) {
                    if (a) {
                        return error(a, "inline")
                    }
                    var f = e.toCSS(less);
                    b.type = "text/css", b.styleSheet ? b.styleSheet.cssText = f : b.innerHTML = f
                }
            }(j);
            new less.Parser(m).parse(n, o)
        }
    }
}
function extractUrlParts(j, k) {
    var l, m, n = /^((?:[a-z-]+:)?\/+?(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/i, o = j.match(n), p = {}, q = [];
    if (!o) {
        throw new Error("Could not parse sheet href - '" + j + "'")
    }
    if (!o[1] || o[2]) {
        if (m = k.match(n), !m) {
            throw new Error("Could not parse page url - '" + k + "'")
        }
        o[1] = o[1] || m[1] || "", o[2] || (o[3] = m[3] + o[3])
    }
    if (o[3]) {
        for (q = o[3].replace(/\\/g, "/").split("/"), l = 0; l < q.length; l++) {
            "." === q[l] && (q.splice(l, 1), l -= 1)
        }
        for (l = 0; l < q.length; l++) {
            ".." === q[l] && l > 0 && (q.splice(l - 1, 2), l -= 2)
        }
    }
    return p.hostPart = o[1], p.directories = q, p.path = o[1] + q.join("/"), p.fileUrl = p.path + (o[4] || ""), p.url = p.fileUrl + (o[5] || ""), p
}
function pathDiff(j, k) {
    var l, m, n, o, p = extractUrlParts(j), q = extractUrlParts(k), r = "";
    if (p.hostPart !== q.hostPart) {
        return""
    }
    for (m = Math.max(q.directories.length, p.directories.length), l = 0; m > l && q.directories[l] === p.directories[l]; l++) {
    }
    for (o = q.directories.slice(l), n = p.directories.slice(l), l = 0; l < o.length - 1; l++) {
        r += "../"
    }
    for (l = 0; l < n.length - 1; l++) {
        r += n[l] + "/"
    }
    return r
}
function getXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest
    }
    try {
        return new ActiveXObject("MSXML2.XMLHTTP.3.0")
    } catch (b) {
        return log("browser doesn't support AJAX.", logLevel.errors), null
    }
}
function doXHR(h, j, k, l) {
    function m(a, e, f) {
        a.status >= 200 && a.status < 300 ? e(a.responseText, a.getResponseHeader("Last-Modified")) : "function" == typeof f && f(a.status, h)
    }

    var n = getXMLHttpRequest(), o = isFileProtocol ? less.fileAsync : less.async;
    "function" == typeof n.overrideMimeType && n.overrideMimeType("text/css"), log("XHR: Getting '" + h + "'", logLevel.info), n.open("GET", h, o), n.setRequestHeader("Accept", j || "text/x-less, text/css; q=0.9, */*; q=0.5"), n.send(null), isFileProtocol && !less.fileAsync ? 0 === n.status || n.status >= 200 && n.status < 300 ? k(n.responseText) : l(n.status, h) : o ? n.onreadystatechange = function () {
        4 == n.readyState && m(n, k, l)
    } : m(n, k, l)
}
function loadFile(k, l, m, n, o) {
    l && l.currentDirectory && !/^([a-z-]+:)?\//.test(k) && (k = l.currentDirectory + k);
    var p = extractUrlParts(k, window.location.href), q = p.url, r = {currentDirectory: p.path, filename: q};
    if (l ? (r.entryPath = l.entryPath, r.rootpath = l.rootpath, r.rootFilename = l.rootFilename, r.relativeUrls = l.relativeUrls) : (r.entryPath = p.path, r.rootpath = less.rootpath || p.path, r.rootFilename = q, r.relativeUrls = n.relativeUrls), r.relativeUrls && (r.rootpath = n.rootpath ? extractUrlParts(n.rootpath + pathDiff(p.path, r.entryPath)).path : p.path), n.useFileCache && fileCache[q]) {
        try {
            var s = fileCache[q];
            o && (s += "\n" + o), m(null, s, q, r, {lastModified: new Date})
        } catch (t) {
            m(t, null, q)
        }
    } else {
        doXHR(q, n.mime, function (c, e) {
            fileCache[q] = c;
            try {
                m(null, c, q, r, {lastModified: e})
            } catch (f) {
                m(f, null, q)
            }
        }, function (c, d) {
            m({type: "File", message: "'" + d + "' wasn't found (" + c + ")"}, null, q)
        })
    }
}
function loadStyleSheet(g, h, j, k, l) {
    var m = new less.tree.parseEnv(less);
    m.mime = g.type, l && (m.useFileCache = !0), loadFile(g.href, null, function (a, b, c, d, f) {
        if (f) {
            f.remaining = k;
            var n = cache && cache.getItem(c), o = cache && cache.getItem(c + ":timestamp");
            if (!j && o && f.lastModified && new Date(f.lastModified).valueOf() === new Date(o).valueOf()) {
                return createCSS(n, g), f.local = !0, h(null, null, b, g, f, c), void 0
            }
        }
        removeError(c), b ? (m.currentFileInfo = d, new less.Parser(m).parse(b, function (e, p) {
            if (e) {
                return h(e, null, null, g)
            }
            try {
                h(e, p, b, g, f, c)
            } catch (e) {
                h(e, null, null, g)
            }
        })) : h(a, null, null, g, f, c)
    }, m, l)
}
function loadStyleSheets(e, f, g) {
    for (var h = 0; h < less.sheets.length; h++) {
        loadStyleSheet(less.sheets[h], e, f, less.sheets.length - (h + 1), g)
    }
}
function initRunningMode() {
    "development" === less.env ? (less.optimization = 0, less.watchTimer = setInterval(function () {
        less.watchMode && loadStyleSheets(function (f, g, h, j, k) {
            f ? error(f, j.href) : g && createCSS(g.toCSS(less), j, k.lastModified)
        })
    }, less.poll)) : less.optimization = 3
}
("undefined" == typeof window.less || "undefined" != typeof window.less.nodeType) && (window.less = {}), less = window.less, tree = window.less.tree = {}, less.mode = "browser";
var less, tree;
void 0 === less && (less = exports, tree = require("./tree"), less.mode = "node"), less.Parser = function (a) {
    function b() {
        r = u[q], s = p, v = p
    }

    function c() {
        u[q] = r, p = s, v = p
    }

    function d() {
        p > v && (u[q] = u[q].slice(p - v), v = p)
    }

    function e(a) {
        var b = a.charCodeAt(0);
        return 32 === b || 10 === b || 9 === b
    }

    function f(a) {
        var b, c;
        if (a instanceof Function) {
            return a.call(w.parsers)
        }
        if ("string" == typeof a) {
            b = o.charAt(p) === a ? a : null, c = 1, d()
        } else {
            if (d(), !(b = a.exec(u[q]))) {
                return null
            }
            c = b[0].length
        }
        return b ? (g(c), "string" == typeof b ? b : 1 === b.length ? b[0] : b) : void 0
    }

    function g(a) {
        for (var b = p, c = q, d = p + u[q].length, f = p += a; d > p && e(o.charAt(p));) {
            p++
        }
        return u[q] = u[q].slice(a + (p - f)), v = p, 0 === u[q].length && q < u.length - 1 && q++, b !== p || c !== q
    }

    function h(a, b) {
        var c = f(a);
        return c ? c : (i(b || ("string" == typeof a ? "expected '" + a + "' got '" + o.charAt(p) + "'" : "unexpected token")), void 0)
    }

    function i(a, b) {
        var c = new Error(a);
        throw c.index = p, c.type = b || "Syntax", c
    }

    function j(a) {
        return"string" == typeof a ? o.charAt(p) === a : a.test(u[q])
    }

    function k(a, b) {
        return a.filename && b.currentFileInfo.filename && a.filename !== b.currentFileInfo.filename ? w.imports.contents[a.filename] : o
    }

    function l(a, b) {
        for (var c = a + 1, d = null, e = -1; --c >= 0 && "\n" !== b.charAt(c);) {
            e++
        }
        return"number" == typeof a && (d = (b.slice(0, a).match(/\n/g) || "").length), {line: d, column: e}
    }

    function m(a, b, c) {
        var d = c.currentFileInfo.filename;
        return"browser" !== less.mode && "rhino" !== less.mode && (d = require("path").resolve(d)), {lineNumber: l(a, b).line + 1, fileName: d}
    }

    function n(a, b) {
        var c = k(a, b), d = l(a.index, c), e = d.line, f = d.column, g = a.call && l(a.call, c).line, h = c.split("\n");
        this.type = a.type || "Syntax", this.message = a.message, this.filename = a.filename || b.currentFileInfo.filename, this.index = a.index, this.line = "number" == typeof e ? e + 1 : null, this.callLine = g + 1, this.callExtract = h[g], this.stack = a.stack, this.column = f, this.extract = [h[e - 1], h[e], h[e + 1]]
    }

    var o, p, q, r, s, t, u, v, w, x = a && a.filename;
    a instanceof tree.parseEnv || (a = new tree.parseEnv(a));
    var y = this.imports = {paths: a.paths || [], queue: [], files: a.files, contents: a.contents, mime: a.mime, error: null, push: function (b, c, d, e) {
        var f = this;
        this.queue.push(b);
        var g = function (a, c, d) {
            f.queue.splice(f.queue.indexOf(b), 1);
            var g = d in f.files || d === x;
            f.files[d] = c, a && !f.error && (f.error = a), e(a, c, g, d)
        };
        less.Parser.importer ? less.Parser.importer(b, c, g, a) : less.Parser.fileLoader(b, c, function (b, e, f, h) {
            if (b) {
                return g(b), void 0
            }
            var i = new tree.parseEnv(a);
            i.currentFileInfo = h, i.processImports = !1, i.contents[f] = e, (c.reference || d.reference) && (h.reference = !0), d.inline ? g(null, e, f) : new less.Parser(i).parse(e, function (a, b) {
                g(a, b, f)
            })
        }, a)
    }};
    return n.prototype = new Error, n.prototype.constructor = n, this.env = a = a || {}, this.optimization = "optimization" in this.env ? this.env.optimization : 1, w = {imports: y, parse: function (b, c) {
        var d, e, g, h = null;
        if (p = q = v = t = 0, o = b.replace(/\r\n/g, "\n"), o = o.replace(/^\uFEFF/, ""), w.imports.contents[a.currentFileInfo.filename] = o, u = function (b) {
            for (var c, d, e, f, g = 0, i = /(?:@\{[\w-]+\}|[^"'`\{\}\/\(\)\\])+/g, j = /\/\*(?:[^*]|\*+[^\/*])*\*+\/|\/\/.*/g, k = /"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'|`((?:[^`]|\\.)*)`/g, l = 0, m = b[0], p = 0; p < o.length;) {
                if (i.lastIndex = p, (c = i.exec(o)) && c.index === p && (p += c[0].length, m.push(c[0])), e = o.charAt(p), j.lastIndex = k.lastIndex = p, (c = k.exec(o)) && c.index === p) {
                    p += c[0].length, m.push(c[0])
                } else {
                    if (d || "/" !== e || (f = o.charAt(p + 1), "/" !== f && "*" !== f || !(c = j.exec(o)) || c.index !== p)) {
                        switch (e) {
                            case"{":
                                if (!d) {
                                    l++, m.push(e);
                                    break
                                }
                            case"}":
                                if (!d) {
                                    l--, m.push(e), b[++g] = m = [];
                                    break
                                }
                            case"(":
                                if (!d) {
                                    d = !0, m.push(e);
                                    break
                                }
                            case")":
                                if (d) {
                                    d = !1, m.push(e);
                                    break
                                }
                            default:
                                m.push(e)
                        }
                        p++
                    } else {
                        p += c[0].length, m.push(c[0])
                    }
                }
            }
            return 0 !== l && (h = new n({index: p - 1, type: "Parse", message: l > 0 ? "missing closing `}`" : "missing opening `{`", filename: a.currentFileInfo.filename}, a)), b.map(function (a) {
                return a.join("")
            })
        }([
            []
        ]), h) {
            return c(new n(h, a))
        }
        try {
            d = new tree.Ruleset([], f(this.parsers.primary)), d.root = !0, d.firstRoot = !0
        } catch (i) {
            return c(new n(i, a))
        }
        if (d.toCSS = function (b) {
            return function (c, d) {
                c = c || {};
                var e, f, g = new tree.evalEnv(c);
                "object" != typeof d || Array.isArray(d) || (d = Object.keys(d).map(function (a) {
                    var b = d[a];
                    return b instanceof tree.Value || (b instanceof tree.Expression || (b = new tree.Expression([b])), b = new tree.Value([b])), new tree.Rule("@" + a, b, !1, null, 0)
                }), g.frames = [new tree.Ruleset(null, d)]);
                try {
                    e = b.call(this, g), (new tree.joinSelectorVisitor).run(e), (new tree.processExtendsVisitor).run(e), new tree.toCSSVisitor({compress: Boolean(c.compress)}).run(e), c.sourceMap && (e = new tree.sourceMapOutput({writeSourceMap: c.writeSourceMap, rootNode: e, contentsMap: w.imports.contents, sourceMapFilename: c.sourceMapFilename, outputFilename: c.sourceMapOutputFilename, sourceMapBasepath: c.sourceMapBasepath, sourceMapRootpath: c.sourceMapRootpath, outputSourceFiles: c.outputSourceFiles, sourceMapGenerator: c.sourceMapGenerator})), f = e.toCSS({compress: Boolean(c.compress), dumpLineNumbers: a.dumpLineNumbers, strictUnits: Boolean(c.strictUnits)})
                } catch (h) {
                    throw new n(h, a)
                }
                return c.cleancss && "node" === less.mode ? require("clean-css").process(f) : c.compress ? f.replace(/(^(\s)+)|((\s)+$)/g, "") : f
            }
        }(d.eval), p < o.length - 1) {
            p = t;
            var j = l(p, o);
            g = o.split("\n"), e = j.line + 1, h = {type: "Parse", message: "Unrecognised input", index: p, filename: a.currentFileInfo.filename, line: e, column: j.column, extract: [g[e - 2], g[e - 1], g[e]]}
        }
        var k = function (b) {
            return b = h || b || w.imports.error, b ? (b instanceof n || (b = new n(b, a)), c(b)) : c(null, d)
        };
        return a.processImports === !1 ? k() : (new tree.importVisitor(this.imports, k).run(d), void 0)
    }, parsers: {primary: function () {
        for (var a, b = []; (a = f(this.extendRule) || f(this.mixin.definition) || f(this.rule) || f(this.ruleset) || f(this.mixin.call) || f(this.comment) || f(this.directive)) || f(/^[\s\n]+/) || f(/^;+/);) {
            a && b.push(a)
        }
        return b
    }, comment: function () {
        var b;
        if ("/" === o.charAt(p)) {
            return"/" === o.charAt(p + 1) ? new tree.Comment(f(/^\/\/.*/), !0, p, a.currentFileInfo) : (b = f(/^\/\*(?:[^*]|\*+[^\/*])*\*+\/\n?/)) ? new tree.Comment(b, !1, p, a.currentFileInfo) : void 0
        }
    }, comments: function () {
        for (var a, b = []; a = f(this.comment);) {
            b.push(a)
        }
        return b
    }, entities: {quoted: function () {
        var b, c, d = p, e = p;
        return"~" === o.charAt(d) && (d++, c = !0), '"' === o.charAt(d) || "'" === o.charAt(d) ? (c && f("~"), (b = f(/^"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'/)) ? new tree.Quoted(b[0], b[1] || b[2], c, e, a.currentFileInfo) : void 0) : void 0
    }, keyword: function () {
        var a;
        if (a = f(/^[_A-Za-z-][_A-Za-z0-9-]*/)) {
            var b = tree.Color.fromKeyword(a);
            return b ? b : new tree.Keyword(a)
        }
    }, call: function () {
        var b, c, d, e, g = p;
        if (b = /^([\w-]+|%|progid:[\w\.]+)\(/.exec(u[q])) {
            if (b = b[1], c = b.toLowerCase(), "url" === c) {
                return null
            }
            if (p += b.length, "alpha" === c && (e = f(this.alpha), "undefined" != typeof e)) {
                return e
            }
            if (f("("), d = f(this.entities.arguments), f(")")) {
                return b ? new tree.Call(b, d, g, a.currentFileInfo) : void 0
            }
        }
    }, arguments: function () {
        for (var a, b = []; (a = f(this.entities.assignment) || f(this.expression)) && (b.push(a), f(","));) {
        }
        return b
    }, literal: function () {
        return f(this.entities.dimension) || f(this.entities.color) || f(this.entities.quoted) || f(this.entities.unicodeDescriptor)
    }, assignment: function () {
        var a, b;
        return(a = f(/^\w+(?=\s?=)/i)) && f("=") && (b = f(this.entity)) ? new tree.Assignment(a, b) : void 0
    }, url: function () {
        var b;
        if ("u" === o.charAt(p) && f(/^url\(/)) {
            return b = f(this.entities.quoted) || f(this.entities.variable) || f(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/) || "", h(")"), new tree.URL(null != b.value || b instanceof tree.Variable ? b : new tree.Anonymous(b), a.currentFileInfo)
        }
    }, variable: function () {
        var b, c = p;
        return"@" === o.charAt(p) && (b = f(/^@@?[\w-]+/)) ? new tree.Variable(b, c, a.currentFileInfo) : void 0
    }, variableCurly: function () {
        var b, c = p;
        return"@" === o.charAt(p) && (b = f(/^@\{([\w-]+)\}/)) ? new tree.Variable("@" + b[1], c, a.currentFileInfo) : void 0
    }, color: function () {
        var a;
        return"#" === o.charAt(p) && (a = f(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/)) ? new tree.Color(a[1]) : void 0
    }, dimension: function () {
        var a, b = o.charCodeAt(p);
        if (!(b > 57 || 43 > b || 47 === b || 44 == b)) {
            return(a = f(/^([+-]?\d*\.?\d+)(%|[a-z]+)?/)) ? new tree.Dimension(a[1], a[2]) : void 0
        }
    }, unicodeDescriptor: function () {
        var a;
        return(a = f(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/)) ? new tree.UnicodeDescriptor(a[0]) : void 0
    }, javascript: function () {
        var b, c, d = p;
        return"~" === o.charAt(d) && (d++, c = !0), "`" === o.charAt(d) ? (void 0 === a.javascriptEnabled || a.javascriptEnabled || i("You are using JavaScript, which has been disabled."), c && f("~"), (b = f(/^`([^`]*)`/)) ? new tree.JavaScript(b[1], p, c) : void 0) : void 0
    }}, variable: function () {
        var a;
        return"@" === o.charAt(p) && (a = f(/^(@[\w-]+)\s*:/)) ? a[1] : void 0
    }, extend: function (a) {
        var b, c, d, e = p, g = [];
        if (f(a ? /^&:extend\(/ : /^:extend\(/)) {
            do {
                for (d = null, b = []; ;) {
                    if (d = f(/^(all)(?=\s*(\)|,))/)) {
                        break
                    }
                    if (c = f(this.element), !c) {
                        break
                    }
                    b.push(c)
                }
                d = d && d[1], g.push(new tree.Extend(new tree.Selector(b), d, e))
            } while (f(","));
            return h(/^\)/), a && h(/^;/), g
        }
    }, extendRule: function () {
        return this.extend(!0)
    }, mixin: {call: function () {
        var d, e, g, i = [], k = p, l = o.charAt(p), m = !1;
        if ("." === l || "#" === l) {
            for (b(); d = f(/^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/);) {
                i.push(new tree.Element(e, d, p, a.currentFileInfo)), e = f(">")
            }
            return f("(") && (g = this.mixin.args.call(this, !0).args, h(")")), g = g || [], f(this.important) && (m = !0), i.length > 0 && (f(";") || j("}")) ? new tree.mixin.Call(i, g, k, a.currentFileInfo, m) : (c(), void 0)
        }
    }, args: function (a) {
        for (var b, c, d, e, g, j, k = [], l = [], m = [], n = {args: null, variadic: !1}; ;) {
            if (a) {
                j = f(this.expression)
            } else {
                if (f(this.comments), "." === o.charAt(p) && f(/^\.{3}/)) {
                    n.variadic = !0, f(";") && !b && (b = !0), (b ? l : m).push({variadic: !0});
                    break
                }
                j = f(this.entities.variable) || f(this.entities.literal) || f(this.entities.keyword)
            }
            if (!j) {
                break
            }
            e = null, j.throwAwayComments && j.throwAwayComments(), g = j;
            var q = null;
            if (a ? 1 == j.value.length && (q = j.value[0]) : q = j, q && q instanceof tree.Variable) {
                if (f(":")) {
                    k.length > 0 && (b && i("Cannot mix ; and , as delimiter types"), c = !0), g = h(this.expression), e = d = q.name
                } else {
                    if (!a && f(/^\.{3}/)) {
                        n.variadic = !0, f(";") && !b && (b = !0), (b ? l : m).push({name: j.name, variadic: !0});
                        break
                    }
                    a || (d = e = q.name, g = null)
                }
            }
            g && k.push(g), m.push({name: e, value: g}), f(",") || (f(";") || b) && (c && i("Cannot mix ; and , as delimiter types"), b = !0, k.length > 1 && (g = new tree.Value(k)), l.push({name: d, value: g}), d = null, k = [], c = !1)
        }
        return n.args = b ? l : m, n
    }, definition: function () {
        var a, d, e, g, i = [], k = !1;
        if (!("." !== o.charAt(p) && "#" !== o.charAt(p) || j(/^[^{]*\}/)) && (b(), d = f(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/))) {
            a = d[1];
            var l = this.mixin.args.call(this, !1);
            if (i = l.args, k = l.variadic, f(")") || (t = p, c()), f(this.comments), f(/^when/) && (g = h(this.conditions, "expected condition")), e = f(this.block)) {
                return new tree.mixin.Definition(a, i, e, g, k)
            }
            c()
        }
    }}, entity: function () {
        return f(this.entities.literal) || f(this.entities.variable) || f(this.entities.url) || f(this.entities.call) || f(this.entities.keyword) || f(this.entities.javascript) || f(this.comment)
    }, end: function () {
        return f(";") || j("}")
    }, alpha: function () {
        var a;
        if (f(/^\(opacity=/i)) {
            return(a = f(/^\d+/) || f(this.entities.variable)) ? (h(")"), new tree.Alpha(a)) : void 0
        }
    }, element: function () {
        var b, c, d;
        return c = f(this.combinator), b = f(/^(?:\d+\.\d+|\d+)%/) || f(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/) || f("*") || f("&") || f(this.attribute) || f(/^\([^()@]+\)/) || f(/^[\.#](?=@)/) || f(this.entities.variableCurly), b || f("(") && (d = f(this.selector)) && f(")") && (b = new tree.Paren(d)), b ? new tree.Element(c, b, p, a.currentFileInfo) : void 0
    }, combinator: function () {
        var a = o.charAt(p);
        if (">" === a || "+" === a || "~" === a || "|" === a) {
            for (p++; o.charAt(p).match(/\s/);) {
                p++
            }
            return new tree.Combinator(a)
        }
        return o.charAt(p - 1).match(/\s/) ? new tree.Combinator(" ") : new tree.Combinator(null)
    }, lessSelector: function () {
        return this.selector(!0)
    }, selector: function (b) {
        for (var c, d, e, g, j, k = [], l = []; (b && (e = f(this.extend)) || b && (g = f(/^when/)) || (c = f(this.element))) && (g ? j = h(this.conditions, "expected condition") : j ? i("CSS guard can only be used at the end of selector") : e ? l.push.apply(l, e) : (l.length && i("Extend can only be used at the end of selector"), d = o.charAt(p), k.push(c), c = null), "{" !== d && "}" !== d && ";" !== d && "," !== d && ")" !== d);) {
        }
        return k.length > 0 ? new tree.Selector(k, l, j, p, a.currentFileInfo) : (l.length && i("Extend must be used to extend a selector, it cannot be used on its own"), void 0)
    }, attribute: function () {
        var a, b, c;
        if (f("[")) {
            return(a = f(this.entities.variableCurly)) || (a = h(/^(?:[_A-Za-z0-9-\*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/)), (c = f(/^[|~*$^]?=/)) && (b = f(this.entities.quoted) || f(/^[0-9]+%/) || f(/^[\w-]+/) || f(this.entities.variableCurly)), h("]"), new tree.Attribute(a, c, b)
        }
    }, block: function () {
        var a;
        return f("{") && (a = f(this.primary)) && f("}") ? a : void 0
    }, ruleset: function () {
        var d, e, g, h = [];
        for (b(), a.dumpLineNumbers && (g = m(p, o, a)); (d = f(this.lessSelector)) && (h.push(d), f(this.comments), f(","));) {
            d.condition && i("Guards are only currently allowed on a single selector."), f(this.comments)
        }
        if (h.length > 0 && (e = f(this.block))) {
            var j = new tree.Ruleset(h, e, a.strictImports);
            return a.dumpLineNumbers && (j.debugInfo = g), j
        }
        t = p, c()
    }, rule: function (d) {
        var e, g, h, i = o.charAt(p), j = !1;
        if (b(), "." !== i && "#" !== i && "&" !== i && (e = f(this.variable) || f(this.ruleProperty))) {
            if (g = d || !a.compress && "@" !== e.charAt(0) ? f(this.anonymousValue) || f(this.value) : f(this.value) || f(this.anonymousValue), h = f(this.important), "+" === e[e.length - 1] && (j = !0, e = e.substr(0, e.length - 1)), g && f(this.end)) {
                return new tree.Rule(e, g, h, j, s, a.currentFileInfo)
            }
            if (t = p, c(), g && !d) {
                return this.rule(!0)
            }
        }
    }, anonymousValue: function () {
        var a;
        return(a = /^([^@+\/'"*`(;{}-]*);/.exec(u[q])) ? (p += a[0].length - 1, new tree.Anonymous(a[1])) : void 0
    }, "import": function () {
        var d, e, g = p;
        b();
        var h = f(/^@import?\s+/), i = (h ? f(this.importOptions) : null) || {};
        return h && (d = f(this.entities.quoted) || f(this.entities.url)) && (e = f(this.mediaFeatures), f(";")) ? (e = e && new tree.Value(e), new tree.Import(d, e, i, g, a.currentFileInfo)) : (c(), void 0)
    }, importOptions: function () {
        var a, b, c, d = {};
        if (!f("(")) {
            return null
        }
        do {
            if (a = f(this.importOption)) {
                switch (b = a, c = !0, b) {
                    case"css":
                        b = "less", c = !1;
                        break;
                    case"once":
                        b = "multiple", c = !1
                }
                if (d[b] = c, !f(",")) {
                    break
                }
            }
        } while (a);
        return h(")"), d
    }, importOption: function () {
        var a = f(/^(less|css|multiple|once|inline|reference)/);
        return a ? a[1] : void 0
    }, mediaFeature: function () {
        var b, c, d = [];
        do {
            if (b = f(this.entities.keyword) || f(this.entities.variable)) {
                d.push(b)
            } else {
                if (f("(")) {
                    if (c = f(this.property), b = f(this.value), !f(")")) {
                        return null
                    }
                    if (c && b) {
                        d.push(new tree.Paren(new tree.Rule(c, b, null, null, p, a.currentFileInfo, !0)))
                    } else {
                        if (!b) {
                            return null
                        }
                        d.push(new tree.Paren(b))
                    }
                }
            }
        } while (b);
        return d.length > 0 ? new tree.Expression(d) : void 0
    }, mediaFeatures: function () {
        var a, b = [];
        do {
            if (a = f(this.mediaFeature)) {
                if (b.push(a), !f(",")) {
                    break
                }
            } else {
                if ((a = f(this.entities.variable)) && (b.push(a), !f(","))) {
                    break
                }
            }
        } while (a);
        return b.length > 0 ? b : null
    }, media: function () {
        var b, c, d, e;
        return a.dumpLineNumbers && (e = m(p, o, a)), f(/^@media/) && (b = f(this.mediaFeatures), c = f(this.block)) ? (d = new tree.Media(c, b, p, a.currentFileInfo), a.dumpLineNumbers && (d.debugInfo = e), d) : void 0
    }, directive: function () {
        var d, e, g, h, i, j, k, l;
        if ("@" === o.charAt(p)) {
            if (e = f(this["import"]) || f(this.media)) {
                return e
            }
            if (b(), d = f(/^@[a-z-]+/)) {
                switch (h = d, "-" == d.charAt(1) && d.indexOf("-", 2) > 0 && (h = "@" + d.slice(d.indexOf("-", 2) + 1)), h) {
                    case"@font-face":
                        i = !0;
                        break;
                    case"@viewport":
                    case"@top-left":
                    case"@top-left-corner":
                    case"@top-center":
                    case"@top-right":
                    case"@top-right-corner":
                    case"@bottom-left":
                    case"@bottom-left-corner":
                    case"@bottom-center":
                    case"@bottom-right":
                    case"@bottom-right-corner":
                    case"@left-top":
                    case"@left-middle":
                    case"@left-bottom":
                    case"@right-top":
                    case"@right-middle":
                    case"@right-bottom":
                        i = !0;
                        break;
                    case"@host":
                    case"@page":
                    case"@document":
                    case"@supports":
                    case"@keyframes":
                        i = !0, j = !0;
                        break;
                    case"@namespace":
                        k = !0
                }
                if (j && (l = (f(/^[^{]+/) || "").trim(), l && (d += " " + l)), i) {
                    if (g = f(this.block)) {
                        return new tree.Directive(d, g, p, a.currentFileInfo)
                    }
                } else {
                    if ((e = k ? f(this.expression) : f(this.entity)) && f(";")) {
                        var n = new tree.Directive(d, e, p, a.currentFileInfo);
                        return a.dumpLineNumbers && (n.debugInfo = m(p, o, a)), n
                    }
                }
                c()
            }
        }
    }, value: function () {
        for (var a, b = []; (a = f(this.expression)) && (b.push(a), f(","));) {
        }
        return b.length > 0 ? new tree.Value(b) : void 0
    }, important: function () {
        return"!" === o.charAt(p) ? f(/^! *important/) : void 0
    }, sub: function () {
        var a, b;
        return f("(") && (a = f(this.addition)) ? (b = new tree.Expression([a]), h(")"), b.parens = !0, b) : void 0
    }, multiplication: function () {
        var a, b, c, d, g;
        if (a = f(this.operand)) {
            for (g = e(o.charAt(p - 1)); !j(/^\/[*\/]/) && (c = f("/") || f("*")) && (b = f(this.operand));) {
                a.parensInOp = !0, b.parensInOp = !0, d = new tree.Operation(c, [d || a, b], g), g = e(o.charAt(p - 1))
            }
            return d || a
        }
    }, addition: function () {
        var a, b, c, d, g;
        if (a = f(this.multiplication)) {
            for (g = e(o.charAt(p - 1)); (c = f(/^[-+]\s+/) || !g && (f("+") || f("-"))) && (b = f(this.multiplication));) {
                a.parensInOp = !0, b.parensInOp = !0, d = new tree.Operation(c, [d || a, b], g), g = e(o.charAt(p - 1))
            }
            return d || a
        }
    }, conditions: function () {
        var a, b, c, d = p;
        if (a = f(this.condition)) {
            for (; j(/^,\s*(not\s*)?\(/) && f(",") && (b = f(this.condition));) {
                c = new tree.Condition("or", c || a, b, d)
            }
            return c || a
        }
    }, condition: function () {
        var a, b, c, d, e = p, g = !1;
        return f(/^not/) && (g = !0), h("("), (a = f(this.addition) || f(this.entities.keyword) || f(this.entities.quoted)) ? ((d = f(/^(?:>=|<=|=<|[<=>])/)) ? (b = f(this.addition) || f(this.entities.keyword) || f(this.entities.quoted)) ? c = new tree.Condition(d, a, b, e, g) : i("expected expression") : c = new tree.Condition("=", a, new tree.Keyword("true"), e, g), h(")"), f(/^and/) ? new tree.Condition("and", c, f(this.condition)) : c) : void 0
    }, operand: function () {
        var a, b = o.charAt(p + 1);
        "-" !== o.charAt(p) || "@" !== b && "(" !== b || (a = f("-"));
        var c = f(this.sub) || f(this.entities.dimension) || f(this.entities.color) || f(this.entities.variable) || f(this.entities.call);
        return a && (c.parensInOp = !0, c = new tree.Negative(c)), c
    }, expression: function () {
        for (var a, b, c = []; a = f(this.addition) || f(this.entity);) {
            c.push(a), !j(/^\/[\/*]/) && (b = f("/")) && c.push(new tree.Anonymous(b))
        }
        return c.length > 0 ? new tree.Expression(c) : void 0
    }, property: function () {
        var a;
        return(a = f(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/)) ? a[1] : void 0
    }, ruleProperty: function () {
        var a;
        return(a = f(/^(\*?-?[_a-zA-Z0-9-]+)\s*(\+?)\s*:/)) ? a[1] + (a[2] || "") : void 0
    }}}
}, function (a) {
    function b(b) {
        return a.functions.hsla(b.h, b.s, b.l, b.a)
    }

    function c(b, c) {
        return b instanceof a.Dimension && b.unit.is("%") ? parseFloat(b.value * c / 100) : d(b)
    }

    function d(b) {
        if (b instanceof a.Dimension) {
            return parseFloat(b.unit.is("%") ? b.value / 100 : b.value)
        }
        if ("number" == typeof b) {
            return b
        }
        throw {error: "RuntimeError", message: "color functions take numbers as parameters"}
    }

    function e(a) {
        return Math.min(1, Math.max(0, a))
    }

    a.functions = {rgb: function (a, b, c) {
        return this.rgba(a, b, c, 1)
    }, rgba: function (b, e, f, g) {
        var h = [b, e, f].map(function (a) {
            return c(a, 256)
        });
        return g = d(g), new a.Color(h, g)
    }, hsl: function (a, b, c) {
        return this.hsla(a, b, c, 1)
    }, hsla: function (a, b, c, f) {
        function g(a) {
            return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 1 > 6 * a ? i + 6 * (h - i) * a : 1 > 2 * a ? h : 2 > 3 * a ? i + 6 * (h - i) * (2 / 3 - a) : i
        }

        a = d(a) % 360 / 360, b = e(d(b)), c = e(d(c)), f = e(d(f));
        var h = 0.5 >= c ? c * (b + 1) : c + b - c * b, i = 2 * c - h;
        return this.rgba(255 * g(a + 1 / 3), 255 * g(a), 255 * g(a - 1 / 3), f)
    }, hsv: function (a, b, c) {
        return this.hsva(a, b, c, 1)
    }, hsva: function (a, b, c, e) {
        a = 360 * (d(a) % 360 / 360), b = d(b), c = d(c), e = d(e);
        var f, g;
        f = Math.floor(a / 60 % 6), g = a / 60 - f;
        var h = [c, c * (1 - b), c * (1 - g * b), c * (1 - (1 - g) * b)], i = [
            [0, 3, 1],
            [2, 0, 1],
            [1, 0, 3],
            [1, 2, 0],
            [3, 1, 0],
            [0, 1, 2]
        ];
        return this.rgba(255 * h[i[f][0]], 255 * h[i[f][1]], 255 * h[i[f][2]], e)
    }, hue: function (b) {
        return new a.Dimension(Math.round(b.toHSL().h))
    }, saturation: function (b) {
        return new a.Dimension(Math.round(100 * b.toHSL().s), "%")
    }, lightness: function (b) {
        return new a.Dimension(Math.round(100 * b.toHSL().l), "%")
    }, hsvhue: function (b) {
        return new a.Dimension(Math.round(b.toHSV().h))
    }, hsvsaturation: function (b) {
        return new a.Dimension(Math.round(100 * b.toHSV().s), "%")
    }, hsvvalue: function (b) {
        return new a.Dimension(Math.round(100 * b.toHSV().v), "%")
    }, red: function (b) {
        return new a.Dimension(b.rgb[0])
    }, green: function (b) {
        return new a.Dimension(b.rgb[1])
    }, blue: function (b) {
        return new a.Dimension(b.rgb[2])
    }, alpha: function (b) {
        return new a.Dimension(b.toHSL().a)
    }, luma: function (b) {
        return new a.Dimension(Math.round(100 * b.luma() * b.alpha), "%")
    }, saturate: function (a, c) {
        if (!a.rgb) {
            return null
        }
        var d = a.toHSL();
        return d.s += c.value / 100, d.s = e(d.s), b(d)
    }, desaturate: function (a, c) {
        var d = a.toHSL();
        return d.s -= c.value / 100, d.s = e(d.s), b(d)
    }, lighten: function (a, c) {
        var d = a.toHSL();
        return d.l += c.value / 100, d.l = e(d.l), b(d)
    }, darken: function (a, c) {
        var d = a.toHSL();
        return d.l -= c.value / 100, d.l = e(d.l), b(d)
    }, fadein: function (a, c) {
        var d = a.toHSL();
        return d.a += c.value / 100, d.a = e(d.a), b(d)
    }, fadeout: function (a, c) {
        var d = a.toHSL();
        return d.a -= c.value / 100, d.a = e(d.a), b(d)
    }, fade: function (a, c) {
        var d = a.toHSL();
        return d.a = c.value / 100, d.a = e(d.a), b(d)
    }, spin: function (a, c) {
        var d = a.toHSL(), e = (d.h + c.value) % 360;
        return d.h = 0 > e ? 360 + e : e, b(d)
    }, mix: function (b, c, d) {
        d || (d = new a.Dimension(50));
        var e = d.value / 100, f = 2 * e - 1, g = b.toHSL().a - c.toHSL().a, h = ((-1 == f * g ? f : (f + g) / (1 + f * g)) + 1) / 2, i = 1 - h, j = [b.rgb[0] * h + c.rgb[0] * i, b.rgb[1] * h + c.rgb[1] * i, b.rgb[2] * h + c.rgb[2] * i], k = b.alpha * e + c.alpha * (1 - e);
        return new a.Color(j, k)
    }, greyscale: function (b) {
        return this.desaturate(b, new a.Dimension(100))
    }, contrast: function (a, b, c, e) {
        if (!a.rgb) {
            return null
        }
        if ("undefined" == typeof c && (c = this.rgba(255, 255, 255, 1)), "undefined" == typeof b && (b = this.rgba(0, 0, 0, 1)), b.luma() > c.luma()) {
            var f = c;
            c = b, b = f
        }
        return e = "undefined" == typeof e ? 0.43 : d(e), a.luma() * a.alpha < e ? c : b
    }, e: function (b) {
        return new a.Anonymous(b instanceof a.JavaScript ? b.evaluated : b)
    }, escape: function (b) {
        return new a.Anonymous(encodeURI(b.value).replace(/=/g, "%3D").replace(/:/g, "%3A").replace(/#/g, "%23").replace(/;/g, "%3B").replace(/\(/g, "%28").replace(/\)/g, "%29"))
    }, "%": function (b) {
        for (var c = Array.prototype.slice.call(arguments, 1), d = b.value, e = 0; e < c.length; e++) {
            d = d.replace(/%[sda]/i, function (a) {
                var b = a.match(/s/i) ? c[e].value : c[e].toCSS();
                return a.match(/[A-Z]$/) ? encodeURIComponent(b) : b
            })
        }
        return d = d.replace(/%%/g, "%"), new a.Quoted('"' + d + '"', d)
    }, unit: function (b, c) {
        if (!(b instanceof a.Dimension)) {
            throw {type: "Argument", message: "the first argument to unit must be a number" + (b instanceof a.Operation ? ". Have you forgotten parenthesis?" : "")}
        }
        return new a.Dimension(b.value, c ? c.toCSS() : "")
    }, convert: function (a, b) {
        return a.convertTo(b.value)
    }, round: function (a, b) {
        var c = "undefined" == typeof b ? 0 : b.value;
        return this._math(function (a) {
            return a.toFixed(c)
        }, null, a)
    }, pi: function () {
        return new a.Dimension(Math.PI)
    }, mod: function (b, c) {
        return new a.Dimension(b.value % c.value, b.unit)
    }, pow: function (b, c) {
        if ("number" == typeof b && "number" == typeof c) {
            b = new a.Dimension(b), c = new a.Dimension(c)
        } else {
            if (!(b instanceof a.Dimension && c instanceof a.Dimension)) {
                throw {type: "Argument", message: "arguments must be numbers"}
            }
        }
        return new a.Dimension(Math.pow(b.value, c.value), b.unit)
    }, _math: function (b, c, d) {
        if (d instanceof a.Dimension) {
            return new a.Dimension(b(parseFloat(d.value)), null == c ? d.unit : c)
        }
        if ("number" == typeof d) {
            return b(d)
        }
        throw {type: "Argument", message: "argument must be a number"}
    }, _minmax: function (b, c) {
        switch (c = Array.prototype.slice.call(c), c.length) {
            case 0:
                throw {type: "Argument", message: "one or more arguments required"};
            case 1:
                return c[0]
        }
        var d, e, f, g, h, i, j = [], k = {};
        for (d = 0; d < c.length; d++) {
            f = c[d], f instanceof a.Dimension ? (g = f.unify(), i = g.unit.toString(), e = k[i], void 0 !== e ? (h = j[e].unify(), (b && g.value < h.value || !b && g.value > h.value) && (j[e] = f)) : (k[i] = j.length, j.push(f))) : j.push(f)
        }
        return 1 == j.length ? j[0] : (c = j.map(function (a) {
            return a.toCSS(this.env)
        }).join(this.env.compress ? "," : ", "), new a.Anonymous((b ? "min" : "max") + "(" + c + ")"))
    }, min: function () {
        return this._minmax(!0, arguments)
    }, max: function () {
        return this._minmax(!1, arguments)
    }, argb: function (b) {
        return new a.Anonymous(b.toARGB())
    }, percentage: function (b) {
        return new a.Dimension(100 * b.value, "%")
    }, color: function (b) {
        if (b instanceof a.Quoted) {
            var c, d = b.value;
            if (c = a.Color.fromKeyword(d)) {
                return c
            }
            if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/.test(d)) {
                return new a.Color(d.slice(1))
            }
            throw {type: "Argument", message: "argument must be a color keyword or 3/6 digit hex e.g. #FFF"}
        }
        throw {type: "Argument", message: "argument must be a string"}
    }, iscolor: function (b) {
        return this._isa(b, a.Color)
    }, isnumber: function (b) {
        return this._isa(b, a.Dimension)
    }, isstring: function (b) {
        return this._isa(b, a.Quoted)
    }, iskeyword: function (b) {
        return this._isa(b, a.Keyword)
    }, isurl: function (b) {
        return this._isa(b, a.URL)
    }, ispixel: function (a) {
        return this.isunit(a, "px")
    }, ispercentage: function (a) {
        return this.isunit(a, "%")
    }, isem: function (a) {
        return this.isunit(a, "em")
    }, isunit: function (b, c) {
        return b instanceof a.Dimension && b.unit.is(c.value || c) ? a.True : a.False
    }, _isa: function (b, c) {
        return b instanceof c ? a.True : a.False
    }, multiply: function (a, b) {
        var c = a.rgb[0] * b.rgb[0] / 255, d = a.rgb[1] * b.rgb[1] / 255, e = a.rgb[2] * b.rgb[2] / 255;
        return this.rgb(c, d, e)
    }, screen: function (a, b) {
        var c = 255 - (255 - a.rgb[0]) * (255 - b.rgb[0]) / 255, d = 255 - (255 - a.rgb[1]) * (255 - b.rgb[1]) / 255, e = 255 - (255 - a.rgb[2]) * (255 - b.rgb[2]) / 255;
        return this.rgb(c, d, e)
    }, overlay: function (a, b) {
        var c = a.rgb[0] < 128 ? 2 * a.rgb[0] * b.rgb[0] / 255 : 255 - 2 * (255 - a.rgb[0]) * (255 - b.rgb[0]) / 255, d = a.rgb[1] < 128 ? 2 * a.rgb[1] * b.rgb[1] / 255 : 255 - 2 * (255 - a.rgb[1]) * (255 - b.rgb[1]) / 255, e = a.rgb[2] < 128 ? 2 * a.rgb[2] * b.rgb[2] / 255 : 255 - 2 * (255 - a.rgb[2]) * (255 - b.rgb[2]) / 255;
        return this.rgb(c, d, e)
    }, softlight: function (a, b) {
        var c = b.rgb[0] * a.rgb[0] / 255, d = c + a.rgb[0] * (255 - (255 - a.rgb[0]) * (255 - b.rgb[0]) / 255 - c) / 255;
        c = b.rgb[1] * a.rgb[1] / 255;
        var e = c + a.rgb[1] * (255 - (255 - a.rgb[1]) * (255 - b.rgb[1]) / 255 - c) / 255;
        c = b.rgb[2] * a.rgb[2] / 255;
        var f = c + a.rgb[2] * (255 - (255 - a.rgb[2]) * (255 - b.rgb[2]) / 255 - c) / 255;
        return this.rgb(d, e, f)
    }, hardlight: function (a, b) {
        var c = b.rgb[0] < 128 ? 2 * b.rgb[0] * a.rgb[0] / 255 : 255 - 2 * (255 - b.rgb[0]) * (255 - a.rgb[0]) / 255, d = b.rgb[1] < 128 ? 2 * b.rgb[1] * a.rgb[1] / 255 : 255 - 2 * (255 - b.rgb[1]) * (255 - a.rgb[1]) / 255, e = b.rgb[2] < 128 ? 2 * b.rgb[2] * a.rgb[2] / 255 : 255 - 2 * (255 - b.rgb[2]) * (255 - a.rgb[2]) / 255;
        return this.rgb(c, d, e)
    }, difference: function (a, b) {
        var c = Math.abs(a.rgb[0] - b.rgb[0]), d = Math.abs(a.rgb[1] - b.rgb[1]), e = Math.abs(a.rgb[2] - b.rgb[2]);
        return this.rgb(c, d, e)
    }, exclusion: function (a, b) {
        var c = a.rgb[0] + b.rgb[0] * (255 - a.rgb[0] - a.rgb[0]) / 255, d = a.rgb[1] + b.rgb[1] * (255 - a.rgb[1] - a.rgb[1]) / 255, e = a.rgb[2] + b.rgb[2] * (255 - a.rgb[2] - a.rgb[2]) / 255;
        return this.rgb(c, d, e)
    }, average: function (a, b) {
        var c = (a.rgb[0] + b.rgb[0]) / 2, d = (a.rgb[1] + b.rgb[1]) / 2, e = (a.rgb[2] + b.rgb[2]) / 2;
        return this.rgb(c, d, e)
    }, negation: function (a, b) {
        var c = 255 - Math.abs(255 - b.rgb[0] - a.rgb[0]), d = 255 - Math.abs(255 - b.rgb[1] - a.rgb[1]), e = 255 - Math.abs(255 - b.rgb[2] - a.rgb[2]);
        return this.rgb(c, d, e)
    }, tint: function (a, b) {
        return this.mix(this.rgb(255, 255, 255), a, b)
    }, shade: function (a, b) {
        return this.mix(this.rgb(0, 0, 0), a, b)
    }, extract: function (a, b) {
        return b = b.value - 1, Array.isArray(a.value) ? a.value[b] : Array(a)[b]
    }, length: function (b) {
        var c = Array.isArray(b.value) ? b.value.length : 1;
        return new a.Dimension(c)
    }, "data-uri": function (b, c) {
        if ("undefined" != typeof window) {
            return new a.URL(c || b, this.currentFileInfo).eval(this.env)
        }
        var d = b.value, e = c && c.value, f = require("fs"), g = require("path"), h = !1;
        if (arguments.length < 2 && (e = d), this.env.isPathRelative(e) && (e = this.currentFileInfo.relativeUrls ? g.join(this.currentFileInfo.currentDirectory, e) : g.join(this.currentFileInfo.entryPath, e)), arguments.length < 2) {
            var i;
            try {
                i = require("mime")
            } catch (j) {
                i = a._mime
            }
            d = i.lookup(e);
            var k = i.charsets.lookup(d);
            h = ["US-ASCII", "UTF-8"].indexOf(k) < 0, h && (d += ";base64")
        } else {
            h = /;base64$/.test(d)
        }
        var l = f.readFileSync(e), m = 32, n = parseInt(l.length / 1024, 10);
        if (n >= m && this.env.ieCompat !== !1) {
            return this.env.silent || console.warn("Skipped data-uri embedding of %s because its size (%dKB) exceeds IE8-safe %dKB!", e, n, m), new a.URL(c || b, this.currentFileInfo).eval(this.env)
        }
        l = h ? l.toString("base64") : encodeURIComponent(l);
        var o = "'data:" + d + "," + l + "'";
        return new a.URL(new a.Anonymous(o))
    }, "svg-gradient": function (b) {
        function c() {
            throw {type: "Argument", message: "svg-gradient expects direction, start_color [start_position], [color position,]..., end_color [end_position]"}
        }

        arguments.length < 3 && c();
        var d, e, f, g, h, i, j, k = Array.prototype.slice.call(arguments, 1), l = "linear", m = 'x="0" y="0" width="1" height="1"', n = !0, o = {compress: !1}, p = b.toCSS(o);
        switch (p) {
            case"to bottom":
                d = 'x1="0%" y1="0%" x2="0%" y2="100%"';
                break;
            case"to right":
                d = 'x1="0%" y1="0%" x2="100%" y2="0%"';
                break;
            case"to bottom right":
                d = 'x1="0%" y1="0%" x2="100%" y2="100%"';
                break;
            case"to top right":
                d = 'x1="0%" y1="100%" x2="100%" y2="0%"';
                break;
            case"ellipse":
            case"ellipse at center":
                l = "radial", d = 'cx="50%" cy="50%" r="75%"', m = 'x="-50" y="-50" width="101" height="101"';
                break;
            default:
                throw {type: "Argument", message: "svg-gradient direction must be 'to bottom', 'to right', 'to bottom right', 'to top right' or 'ellipse at center'"}
        }
        for (e = '<?xml version="1.0" ?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><' + l + 'Gradient id="gradient" gradientUnits="userSpaceOnUse" ' + d + ">", f = 0; f < k.length; f += 1) {
            k[f].value ? (g = k[f].value[0], h = k[f].value[1]) : (g = k[f], h = void 0), g instanceof a.Color && ((0 === f || f + 1 === k.length) && void 0 === h || h instanceof a.Dimension) || c(), i = h ? h.toCSS(o) : 0 === f ? "0%" : "100%", j = g.alpha, e += '<stop offset="' + i + '" stop-color="' + g.toRGB() + '"' + (1 > j ? ' stop-opacity="' + j + '"' : "") + "/>"
        }
        if (e += "</" + l + "Gradient><rect " + m + ' fill="url(#gradient)" /></svg>', n) {
            try {
                e = new Buffer(e).toString("base64")
            } catch (q) {
                n = !1
            }
        }
        return e = "'data:image/svg+xml" + (n ? ";base64" : "") + "," + e + "'", new a.URL(new a.Anonymous(e))
    }}, a._mime = {_types: {".htm": "text/html", ".html": "text/html", ".gif": "image/gif", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png"}, lookup: function (b) {
        var c = require("path").extname(b), d = a._mime._types[c];
        if (void 0 === d) {
            throw new Error('Optional dependency "mime" is required for ' + c)
        }
        return d
    }, charsets: {lookup: function (a) {
        return a && /^text\//.test(a) ? "UTF-8" : ""
    }}};
    for (var f = [
        {name: "ceil"},
        {name: "floor"},
        {name: "sqrt"},
        {name: "abs"},
        {name: "tan", unit: ""},
        {name: "sin", unit: ""},
        {name: "cos", unit: ""},
        {name: "atan", unit: "rad"},
        {name: "asin", unit: "rad"},
        {name: "acos", unit: "rad"}
    ], g = function (a, b) {
        return function (c) {
            return null != b && (c = c.unify()), this._math(Math[a], b, c)
        }
    }, h = 0; h < f.length; h++) {
        a.functions[f[h].name] = g(f[h].name, f[h].unit)
    }
    a.functionCall = function (a, b) {
        this.env = a, this.currentFileInfo = b
    }, a.functionCall.prototype = a.functions
}(require("./tree")), function (b) {
    b.colors = {aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgrey: "#a9a9a9", darkgreen: "#006400", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#adff2f", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgrey: "#d3d3d3", lightgreen: "#90ee90", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370d8", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#d87093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32"}
}(require("./tree")), function (b) {
    b.debugInfo = function (a, f, g) {
        var h = "";
        if (a.dumpLineNumbers && !a.compress) {
            switch (a.dumpLineNumbers) {
                case"comments":
                    h = b.debugInfo.asComment(f);
                    break;
                case"mediaquery":
                    h = b.debugInfo.asMediaQuery(f);
                    break;
                case"all":
                    h = b.debugInfo.asComment(f) + (g || "") + b.debugInfo.asMediaQuery(f)
            }
        }
        return h
    }, b.debugInfo.asComment = function (c) {
        return"/* line " + c.debugInfo.lineNumber + ", " + c.debugInfo.fileName + " */\n"
    }, b.debugInfo.asMediaQuery = function (c) {
        return"@media -sass-debug-info{filename{font-family:" + ("file://" + c.debugInfo.fileName).replace(/([.:/\\])/g, function (d) {
            return"\\" == d && (d = "/"), "\\" + d
        }) + "}line{font-family:\\00003" + c.debugInfo.lineNumber + "}}\n"
    }, b.find = function (e, f) {
        for (var g, h = 0; h < e.length; h++) {
            if (g = f.call(e, e[h])) {
                return g
            }
        }
        return null
    }, b.jsify = function (c) {
        return Array.isArray(c.value) && c.value.length > 1 ? "[" + c.value.map(function (d) {
            return d.toCSS(!1)
        }).join(", ") + "]" : c.toCSS(!1)
    }, b.toCSS = function (c) {
        var d = [];
        return this.genCSS(c, {add: function (e) {
            d.push(e)
        }, isEmpty: function () {
            return 0 === d.length
        }}), d.join("")
    }, b.outputRuleset = function (g, h, j) {
        h.add(g.compress ? "{" : " {\n"), g.tabLevel = (g.tabLevel || 0) + 1;
        for (var k = g.compress ? "" : Array(g.tabLevel + 1).join("  "), l = g.compress ? "" : Array(g.tabLevel).join("  "), m = 0; m < j.length; m++) {
            h.add(k), j[m].genCSS(g, h), h.add(g.compress ? "" : "\n")
        }
        g.tabLevel--, h.add(l + "}")
    }
}(require("./tree")), function (a) {
    a.Alpha = function (a) {
        this.value = a
    }, a.Alpha.prototype = {type: "Alpha", accept: function (a) {
        this.value = a.visit(this.value)
    }, eval: function (b) {
        return this.value.eval ? new a.Alpha(this.value.eval(b)) : this
    }, genCSS: function (a, b) {
        b.add("alpha(opacity="), this.value.genCSS ? this.value.genCSS(a, b) : b.add(this.value), b.add(")")
    }, toCSS: a.toCSS}
}(require("../tree")), function (a) {
    a.Anonymous = function (a, b, c, d) {
        this.value = a.value || a, this.index = b, this.mapLines = d, this.currentFileInfo = c
    }, a.Anonymous.prototype = {type: "Anonymous", eval: function () {
        return this
    }, compare: function (a) {
        if (!a.toCSS) {
            return -1
        }
        var b = this.toCSS(), c = a.toCSS();
        return b === c ? 0 : c > b ? -1 : 1
    }, genCSS: function (a, b) {
        b.add(this.value, this.currentFileInfo, this.index, this.mapLines)
    }, toCSS: a.toCSS}
}(require("../tree")), function (a) {
    a.Assignment = function (a, b) {
        this.key = a, this.value = b
    }, a.Assignment.prototype = {type: "Assignment", accept: function (a) {
        this.value = a.visit(this.value)
    }, eval: function (b) {
        return this.value.eval ? new a.Assignment(this.key, this.value.eval(b)) : this
    }, genCSS: function (a, b) {
        b.add(this.key + "="), this.value.genCSS ? this.value.genCSS(a, b) : b.add(this.value)
    }, toCSS: a.toCSS}
}(require("../tree")), function (a) {
    a.Call = function (a, b, c, d) {
        this.name = a, this.args = b, this.index = c, this.currentFileInfo = d
    }, a.Call.prototype = {type: "Call", accept: function (a) {
        this.args = a.visit(this.args)
    }, eval: function (b) {
        var c, d, e = this.args.map(function (a) {
            return a.eval(b)
        }), f = this.name.toLowerCase();
        if (f in a.functions) {
            try {
                if (d = new a.functionCall(b, this.currentFileInfo), c = d[f].apply(d, e), null != c) {
                    return c
                }
            } catch (g) {
                throw {type: g.type || "Runtime", message: "error evaluating function `" + this.name + "`" + (g.message ? ": " + g.message : ""), index: this.index, filename: this.currentFileInfo.filename}
            }
        }
        return new a.Call(this.name, e, this.index, this.currentFileInfo)
    }, genCSS: function (a, b) {
        b.add(this.name + "(", this.currentFileInfo, this.index);
        for (var c = 0; c < this.args.length; c++) {
            this.args[c].genCSS(a, b), c + 1 < this.args.length && b.add(", ")
        }
        b.add(")")
    }, toCSS: a.toCSS}
}(require("../tree")), function (a) {
    a.Color = function (a, b) {
        this.rgb = Array.isArray(a) ? a : 6 == a.length ? a.match(/.{2}/g).map(function (a) {
            return parseInt(a, 16)
        }) : a.split("").map(function (a) {
            return parseInt(a + a, 16)
        }), this.alpha = "number" == typeof b ? b : 1
    };
    var b = "transparent";
    a.Color.prototype = {type: "Color", eval: function () {
        return this
    }, luma: function () {
        return 0.2126 * this.rgb[0] / 255 + 0.7152 * this.rgb[1] / 255 + 0.0722 * this.rgb[2] / 255
    }, genCSS: function (a, b) {
        b.add(this.toCSS(a))
    }, toCSS: function (a, c) {
        var d = a && a.compress && !c;
        if (this.alpha < 1) {
            return 0 === this.alpha && this.isTransparentKeyword ? b : "rgba(" + this.rgb.map(function (a) {
                return Math.round(a)
            }).concat(this.alpha).join("," + (d ? "" : " ")) + ")"
        }
        var e = this.toRGB();
        if (d) {
            var f = e.split("");
            f[1] === f[2] && f[3] === f[4] && f[5] === f[6] && (e = "#" + f[1] + f[3] + f[5])
        }
        return e
    }, operate: function (b, c, d) {
        var e = [];
        d instanceof a.Color || (d = d.toColor());
        for (var f = 0; 3 > f; f++) {
            e[f] = a.operate(b, c, this.rgb[f], d.rgb[f])
        }
        return new a.Color(e, this.alpha + d.alpha)
    }, toRGB: function () {
        return"#" + this.rgb.map(function (a) {
            return a = Math.round(a), a = (a > 255 ? 255 : 0 > a ? 0 : a).toString(16), 1 === a.length ? "0" + a : a
        }).join("")
    }, toHSL: function () {
        var a, b, c = this.rgb[0] / 255, d = this.rgb[1] / 255, e = this.rgb[2] / 255, f = this.alpha, g = Math.max(c, d, e), h = Math.min(c, d, e), i = (g + h) / 2, j = g - h;
        if (g === h) {
            a = b = 0
        } else {
            switch (b = i > 0.5 ? j / (2 - g - h) : j / (g + h), g) {
                case c:
                    a = (d - e) / j + (e > d ? 6 : 0);
                    break;
                case d:
                    a = (e - c) / j + 2;
                    break;
                case e:
                    a = (c - d) / j + 4
            }
            a /= 6
        }
        return{h: 360 * a, s: b, l: i, a: f}
    }, toHSV: function () {
        var a, b, c = this.rgb[0] / 255, d = this.rgb[1] / 255, e = this.rgb[2] / 255, f = this.alpha, g = Math.max(c, d, e), h = Math.min(c, d, e), i = g, j = g - h;
        if (b = 0 === g ? 0 : j / g, g === h) {
            a = 0
        } else {
            switch (g) {
                case c:
                    a = (d - e) / j + (e > d ? 6 : 0);
                    break;
                case d:
                    a = (e - c) / j + 2;
                    break;
                case e:
                    a = (c - d) / j + 4
            }
            a /= 6
        }
        return{h: 360 * a, s: b, v: i, a: f}
    }, toARGB: function () {
        var a = [Math.round(255 * this.alpha)].concat(this.rgb);
        return"#" + a.map(function (a) {
            return a = Math.round(a), a = (a > 255 ? 255 : 0 > a ? 0 : a).toString(16), 1 === a.length ? "0" + a : a
        }).join("")
    }, compare: function (a) {
        return a.rgb ? a.rgb[0] === this.rgb[0] && a.rgb[1] === this.rgb[1] && a.rgb[2] === this.rgb[2] && a.alpha === this.alpha ? 0 : -1 : -1
    }}, a.Color.fromKeyword = function (c) {
        if (a.colors.hasOwnProperty(c)) {
            return new a.Color(a.colors[c].slice(1))
        }
        if (c === b) {
            var d = new a.Color([0, 0, 0], 0);
            return d.isTransparentKeyword = !0, d
        }
    }
}(require("../tree")), function (a) {
    a.Comment = function (a, b, c, d) {
        this.value = a, this.silent = !!b, this.currentFileInfo = d
    }, a.Comment.prototype = {type: "Comment", genCSS: function (b, c) {
        this.debugInfo && c.add(a.debugInfo(b, this), this.currentFileInfo, this.index), c.add(this.value.trim())
    }, toCSS: a.toCSS, isSilent: function (a) {
        var b = this.currentFileInfo && this.currentFileInfo.reference && !this.isReferenced, c = a.compress && !this.value.match(/^\/\*!/);
        return this.silent || b || c
    }, eval: function () {
        return this
    }, markReferenced: function () {
        this.isReferenced = !0
    }}
}(require("../tree")), function (a) {
    a.Condition = function (a, b, c, d, e) {
        this.op = a.trim(), this.lvalue = b, this.rvalue = c, this.index = d, this.negate = e
    }, a.Condition.prototype = {type: "Condition", accept: function (a) {
        this.lvalue = a.visit(this.lvalue), this.rvalue = a.visit(this.rvalue)
    }, eval: function (a) {
        var b, c = this.lvalue.eval(a), d = this.rvalue.eval(a), e = this.index;
        return b = function (a) {
            switch (a) {
                case"and":
                    return c && d;
                case"or":
                    return c || d;
                default:
                    if (c.compare) {
                        b = c.compare(d)
                    } else {
                        if (!d.compare) {
                            throw {type: "Type", message: "Unable to perform comparison", index: e}
                        }
                        b = d.compare(c)
                    }
                    switch (b) {
                        case -1:
                            return"<" === a || "=<" === a || "<=" === a;
                        case 0:
                            return"=" === a || ">=" === a || "=<" === a || "<=" === a;
                        case 1:
                            return">" === a || ">=" === a
                    }
            }
        }(this.op), this.negate ? !b : b
    }}
}(require("../tree")), function (a) {
    a.Dimension = function (b, c) {
        this.value = parseFloat(b), this.unit = c && c instanceof a.Unit ? c : new a.Unit(c ? [c] : void 0)
    }, a.Dimension.prototype = {type: "Dimension", accept: function (a) {
        this.unit = a.visit(this.unit)
    }, eval: function () {
        return this
    }, toColor: function () {
        return new a.Color([this.value, this.value, this.value])
    }, genCSS: function (a, b) {
        if (a && a.strictUnits && !this.unit.isSingular()) {
            throw new Error("Multiple units in dimension. Correct the units or use the unit function. Bad unit: " + this.unit.toString())
        }
        var c = this.value, d = String(c);
        if (0 !== c && 1e-06 > c && c > -1e-06 && (d = c.toFixed(20).replace(/0+$/, "")), a && a.compress) {
            if (0 === c && this.unit.isLength()) {
                return b.add(d), void 0
            }
            c > 0 && 1 > c && (d = d.substr(1))
        }
        b.add(d), this.unit.genCSS(a, b)
    }, toCSS: a.toCSS, operate: function (b, c, d) {
        var e = a.operate(b, c, this.value, d.value), f = this.unit.clone();
        if ("+" === c || "-" === c) {
            if (0 === f.numerator.length && 0 === f.denominator.length) {
                f.numerator = d.unit.numerator.slice(0), f.denominator = d.unit.denominator.slice(0)
            } else {
                if (0 === d.unit.numerator.length && 0 === f.denominator.length) {
                } else {
                    if (d = d.convertTo(this.unit.usedUnits()), b.strictUnits && d.unit.toString() !== f.toString()) {
                        throw new Error("Incompatible units. Change the units or use the unit function. Bad units: '" + f.toString() + "' and '" + d.unit.toString() + "'.")
                    }
                    e = a.operate(b, c, this.value, d.value)
                }
            }
        } else {
            "*" === c ? (f.numerator = f.numerator.concat(d.unit.numerator).sort(), f.denominator = f.denominator.concat(d.unit.denominator).sort(), f.cancel()) : "/" === c && (f.numerator = f.numerator.concat(d.unit.denominator).sort(), f.denominator = f.denominator.concat(d.unit.numerator).sort(), f.cancel())
        }
        return new a.Dimension(e, f)
    }, compare: function (b) {
        if (b instanceof a.Dimension) {
            var c = this.unify(), d = b.unify(), e = c.value, f = d.value;
            return f > e ? -1 : e > f ? 1 : d.unit.isEmpty() || 0 === c.unit.compare(d.unit) ? 0 : -1
        }
        return -1
    }, unify: function () {
        return this.convertTo({length: "m", duration: "s", angle: "rad"})
    }, convertTo: function (b) {
        var c, d, e, f, g, h = this.value, i = this.unit.clone(), j = {};
        if ("string" == typeof b) {
            for (c in a.UnitConversions) {
                a.UnitConversions[c].hasOwnProperty(b) && (j = {}, j[c] = b)
            }
            b = j
        }
        g = function (a, b) {
            return e.hasOwnProperty(a) ? (b ? h /= e[a] / e[f] : h *= e[a] / e[f], f) : a
        };
        for (d in b) {
            b.hasOwnProperty(d) && (f = b[d], e = a.UnitConversions[d], i.map(g))
        }
        return i.cancel(), new a.Dimension(h, i)
    }}, a.UnitConversions = {length: {m: 1, cm: 0.01, mm: 0.001, "in": 0.0254, pt: 0.0254 / 72, pc: 12 * (0.0254 / 72)}, duration: {s: 1, ms: 0.001}, angle: {rad: 1 / (2 * Math.PI), deg: 1 / 360, grad: 0.0025, turn: 1}}, a.Unit = function (a, b, c) {
        this.numerator = a ? a.slice(0).sort() : [], this.denominator = b ? b.slice(0).sort() : [], this.backupUnit = c
    }, a.Unit.prototype = {type: "Unit", clone: function () {
        return new a.Unit(this.numerator.slice(0), this.denominator.slice(0), this.backupUnit)
    }, genCSS: function (a, b) {
        this.numerator.length >= 1 ? b.add(this.numerator[0]) : this.denominator.length >= 1 ? b.add(this.denominator[0]) : a && a.strictUnits || !this.backupUnit || b.add(this.backupUnit)
    }, toCSS: a.toCSS, toString: function () {
        var a, b = this.numerator.join("*");
        for (a = 0; a < this.denominator.length; a++) {
            b += "/" + this.denominator[a]
        }
        return b
    }, compare: function (a) {
        return this.is(a.toString()) ? 0 : -1
    }, is: function (a) {
        return this.toString() === a
    }, isLength: function () {
        return Boolean(this.toCSS().match(/px|em|%|in|cm|mm|pc|pt|ex/))
    }, isEmpty: function () {
        return 0 === this.numerator.length && 0 === this.denominator.length
    }, isSingular: function () {
        return this.numerator.length <= 1 && 0 === this.denominator.length
    }, map: function (a) {
        var b;
        for (b = 0; b < this.numerator.length; b++) {
            this.numerator[b] = a(this.numerator[b], !1)
        }
        for (b = 0; b < this.denominator.length; b++) {
            this.denominator[b] = a(this.denominator[b], !0)
        }
    }, usedUnits: function () {
        var b, c, d = {};
        c = function (a) {
            return b.hasOwnProperty(a) && !d[e] && (d[e] = a), a
        };
        for (var e in a.UnitConversions) {
            a.UnitConversions.hasOwnProperty(e) && (b = a.UnitConversions[e], this.map(c))
        }
        return d
    }, cancel: function () {
        var a, b, c, d = {};
        for (b = 0; b < this.numerator.length; b++) {
            a = this.numerator[b], c || (c = a), d[a] = (d[a] || 0) + 1
        }
        for (b = 0; b < this.denominator.length; b++) {
            a = this.denominator[b], c || (c = a), d[a] = (d[a] || 0) - 1
        }
        this.numerator = [], this.denominator = [];
        for (a in d) {
            if (d.hasOwnProperty(a)) {
                var e = d[a];
                if (e > 0) {
                    for (b = 0; e > b; b++) {
                        this.numerator.push(a)
                    }
                } else {
                    if (0 > e) {
                        for (b = 0; -e > b; b++) {
                            this.denominator.push(a)
                        }
                    }
                }
            }
        }
        0 === this.numerator.length && 0 === this.denominator.length && c && (this.backupUnit = c), this.numerator.sort(), this.denominator.sort()
    }}
}(require("../tree")), function (a) {
    a.Directive = function (b, c, d, e) {
        this.name = b, Array.isArray(c) ? (this.rules = [new a.Ruleset([], c)], this.rules[0].allowImports = !0) : this.value = c, this.currentFileInfo = e
    }, a.Directive.prototype = {type: "Directive", accept: function (a) {
        this.rules = a.visit(this.rules), this.value = a.visit(this.value)
    }, genCSS: function (b, c) {
        c.add(this.name, this.currentFileInfo, this.index), this.rules ? a.outputRuleset(b, c, this.rules) : (c.add(" "), this.value.genCSS(b, c), c.add(";"))
    }, toCSS: a.toCSS, eval: function (b) {
        var c = this;
        return this.rules && (b.frames.unshift(this), c = new a.Directive(this.name, null, this.index, this.currentFileInfo), c.rules = [this.rules[0].eval(b)], c.rules[0].root = !0, b.frames.shift()), c
    }, variable: function (b) {
        return a.Ruleset.prototype.variable.call(this.rules[0], b)
    }, find: function () {
        return a.Ruleset.prototype.find.apply(this.rules[0], arguments)
    }, rulesets: function () {
        return a.Ruleset.prototype.rulesets.apply(this.rules[0])
    }, markReferenced: function () {
        var a, b;
        if (this.isReferenced = !0, this.rules) {
            for (b = this.rules[0].rules, a = 0; a < b.length; a++) {
                b[a].markReferenced && b[a].markReferenced()
            }
        }
    }}
}(require("../tree")), function (a) {
    a.Element = function (b, c, d, e) {
        this.combinator = b instanceof a.Combinator ? b : new a.Combinator(b), this.value = "string" == typeof c ? c.trim() : c ? c : "", this.index = d, this.currentFileInfo = e
    }, a.Element.prototype = {type: "Element", accept: function (a) {
        this.combinator = a.visit(this.combinator), this.value = a.visit(this.value)
    }, eval: function (b) {
        return new a.Element(this.combinator, this.value.eval ? this.value.eval(b) : this.value, this.index, this.currentFileInfo)
    }, genCSS: function (a, b) {
        b.add(this.toCSS(a), this.currentFileInfo, this.index)
    }, toCSS: function (a) {
        var b = this.value.toCSS ? this.value.toCSS(a) : this.value;
        return"" === b && "&" === this.combinator.value.charAt(0) ? "" : this.combinator.toCSS(a || {}) + b
    }}, a.Attribute = function (a, b, c) {
        this.key = a, this.op = b, this.value = c
    }, a.Attribute.prototype = {type: "Attribute", accept: function (a) {
        this.value = a.visit(this.value)
    }, eval: function (b) {
        return new a.Attribute(this.key.eval ? this.key.eval(b) : this.key, this.op, this.value && this.value.eval ? this.value.eval(b) : this.value)
    }, genCSS: function (a, b) {
        b.add(this.toCSS(a))
    }, toCSS: function (a) {
        var b = this.key.toCSS ? this.key.toCSS(a) : this.key;
        return this.op && (b += this.op, b += this.value.toCSS ? this.value.toCSS(a) : this.value), "[" + b + "]"
    }}, a.Combinator = function (a) {
        this.value = " " === a ? " " : a ? a.trim() : ""
    }, a.Combinator.prototype = {type: "Combinator", _outputMap: {"": "", " ": " ", ":": " :", "+": " + ", "~": " ~ ", ">": " > ", "|": "|"}, _outputMapCompressed: {"": "", " ": " ", ":": " :", "+": "+", "~": "~", ">": ">", "|": "|"}, genCSS: function (a, b) {
        b.add((a.compress ? this._outputMapCompressed : this._outputMap)[this.value])
    }, toCSS: a.toCSS}
}(require("../tree")), function (a) {
    a.Expression = function (a) {
        this.value = a
    }, a.Expression.prototype = {type: "Expression", accept: function (a) {
        this.value = a.visit(this.value)
    }, eval: function (b) {
        var c, d = this.parens && !this.parensInOp, e = !1;
        return d && b.inParenthesis(), this.value.length > 1 ? c = new a.Expression(this.value.map(function (a) {
            return a.eval(b)
        })) : 1 === this.value.length ? (this.value[0].parens && !this.value[0].parensInOp && (e = !0), c = this.value[0].eval(b)) : c = this, d && b.outOfParenthesis(), this.parens && this.parensInOp && !b.isMathOn() && !e && (c = new a.Paren(c)), c
    }, genCSS: function (a, b) {
        for (var c = 0; c < this.value.length; c++) {
            this.value[c].genCSS(a, b), c + 1 < this.value.length && b.add(" ")
        }
    }, toCSS: a.toCSS, throwAwayComments: function () {
        this.value = this.value.filter(function (b) {
            return !(b instanceof a.Comment)
        })
    }}
}(require("../tree")), function (a) {
    a.Extend = function (a, b, c) {
        switch (this.selector = a, this.option = b, this.index = c, b) {
            case"all":
                this.allowBefore = !0, this.allowAfter = !0;
                break;
            default:
                this.allowBefore = !1, this.allowAfter = !1
        }
    }, a.Extend.prototype = {type: "Extend", accept: function (a) {
        this.selector = a.visit(this.selector)
    }, eval: function (b) {
        return new a.Extend(this.selector.eval(b), this.option, this.index)
    }, clone: function () {
        return new a.Extend(this.selector, this.option, this.index)
    }, findSelfSelectors: function (a) {
        var b, c, d = [];
        for (b = 0; b < a.length; b++) {
            c = a[b].elements, b > 0 && c.length && "" === c[0].combinator.value && (c[0].combinator.value = " "), d = d.concat(a[b].elements)
        }
        this.selfSelectors = [
            {elements: d}
        ]
    }}
}(require("../tree")), function (a) {
    a.Import = function (a, b, c, d, e) {
        if (this.options = c, this.index = d, this.path = a, this.features = b, this.currentFileInfo = e, void 0 !== this.options.less || this.options.inline) {
            this.css = !this.options.less || this.options.inline
        } else {
            var f = this.getPath();
            f && /css([\?;].*)?$/.test(f) && (this.css = !0)
        }
    }, a.Import.prototype = {type: "Import", accept: function (a) {
        this.features = a.visit(this.features), this.path = a.visit(this.path), this.options.inline || (this.root = a.visit(this.root))
    }, genCSS: function (a, b) {
        this.css && (b.add("@import ", this.currentFileInfo, this.index), this.path.genCSS(a, b), this.features && (b.add(" "), this.features.genCSS(a, b)), b.add(";"))
    }, toCSS: a.toCSS, getPath: function () {
        if (this.path instanceof a.Quoted) {
            var b = this.path.value;
            return void 0 !== this.css || /(\.[a-z]*$)|([\?;].*)$/.test(b) ? b : b + ".less"
        }
        return this.path instanceof a.URL ? this.path.value.value : null
    }, evalForImport: function (b) {
        return new a.Import(this.path.eval(b), this.features, this.options, this.index, this.currentFileInfo)
    }, evalPath: function (b) {
        var c = this.path.eval(b), d = this.currentFileInfo && this.currentFileInfo.rootpath;
        if (!(c instanceof a.URL)) {
            if (d) {
                var e = c.value;
                e && b.isPathRelative(e) && (c.value = d + e)
            }
            c.value = b.normalizePath(c.value)
        }
        return c
    }, eval: function (b) {
        var c, d = this.features && this.features.eval(b);
        if (this.skip) {
            return[]
        }
        if (this.options.inline) {
            var e = new a.Anonymous(this.root, 0, {filename: this.importedFilename}, !0);
            return this.features ? new a.Media([e], this.features.value) : [e]
        }
        if (this.css) {
            var f = new a.Import(this.evalPath(b), d, this.options, this.index);
            if (!f.css && this.error) {
                throw this.error
            }
            return f
        }
        return c = new a.Ruleset([], this.root.rules.slice(0)), c.evalImports(b), this.features ? new a.Media(c.rules, this.features.value) : c.rules
    }}
}(require("../tree")), function (a) {
    a.JavaScript = function (a, b, c) {
        this.escaped = c, this.expression = a, this.index = b
    }, a.JavaScript.prototype = {type: "JavaScript", eval: function (b) {
        var c, d = this, e = {}, f = this.expression.replace(/@\{([\w-]+)\}/g, function (c, e) {
            return a.jsify(new a.Variable("@" + e, d.index).eval(b))
        });
        try {
            f = new Function("return (" + f + ")")
        } catch (g) {
            throw {message: "JavaScript evaluation error: " + g.message + " from `" + f + "`", index: this.index}
        }
        for (var h in b.frames[0].variables()) {
            e[h.slice(1)] = {value: b.frames[0].variables()[h].value, toJS: function () {
                return this.value.eval(b).toCSS()
            }}
        }
        try {
            c = f.call(e)
        } catch (g) {
            throw {message: "JavaScript evaluation error: '" + g.name + ": " + g.message + "'", index: this.index}
        }
        return"string" == typeof c ? new a.Quoted('"' + c + '"', c, this.escaped, this.index) : Array.isArray(c) ? new a.Anonymous(c.join(", ")) : new a.Anonymous(c)
    }}
}(require("../tree")), function (a) {
    a.Keyword = function (a) {
        this.value = a
    }, a.Keyword.prototype = {type: "Keyword", eval: function () {
        return this
    }, genCSS: function (a, b) {
        b.add(this.value)
    }, toCSS: a.toCSS, compare: function (b) {
        return b instanceof a.Keyword ? b.value === this.value ? 0 : 1 : -1
    }}, a.True = new a.Keyword("true"), a.False = new a.Keyword("false")
}(require("../tree")), function (a) {
    a.Media = function (b, c, d, e) {
        this.index = d, this.currentFileInfo = e;
        var f = this.emptySelectors();
        this.features = new a.Value(c), this.rules = [new a.Ruleset(f, b)], this.rules[0].allowImports = !0
    }, a.Media.prototype = {type: "Media", accept: function (a) {
        this.features = a.visit(this.features), this.rules = a.visit(this.rules)
    }, genCSS: function (b, c) {
        c.add("@media ", this.currentFileInfo, this.index), this.features.genCSS(b, c), a.outputRuleset(b, c, this.rules)
    }, toCSS: a.toCSS, eval: function (b) {
        b.mediaBlocks || (b.mediaBlocks = [], b.mediaPath = []);
        var c = new a.Media([], [], this.index, this.currentFileInfo);
        this.debugInfo && (this.rules[0].debugInfo = this.debugInfo, c.debugInfo = this.debugInfo);
        var d = !1;
        b.strictMath || (d = !0, b.strictMath = !0);
        try {
            c.features = this.features.eval(b)
        } finally {
            d && (b.strictMath = !1)
        }
        return b.mediaPath.push(c), b.mediaBlocks.push(c), b.frames.unshift(this.rules[0]), c.rules = [this.rules[0].eval(b)], b.frames.shift(), b.mediaPath.pop(), 0 === b.mediaPath.length ? c.evalTop(b) : c.evalNested(b)
    }, variable: function (b) {
        return a.Ruleset.prototype.variable.call(this.rules[0], b)
    }, find: function () {
        return a.Ruleset.prototype.find.apply(this.rules[0], arguments)
    }, rulesets: function () {
        return a.Ruleset.prototype.rulesets.apply(this.rules[0])
    }, emptySelectors: function () {
        var b = new a.Element("", "&", this.index, this.currentFileInfo);
        return[new a.Selector([b], null, null, this.index, this.currentFileInfo)]
    }, markReferenced: function () {
        var a, b = this.rules[0].rules;
        for (this.isReferenced = !0, a = 0; a < b.length; a++) {
            b[a].markReferenced && b[a].markReferenced()
        }
    }, evalTop: function (b) {
        var c = this;
        if (b.mediaBlocks.length > 1) {
            var d = this.emptySelectors();
            c = new a.Ruleset(d, b.mediaBlocks), c.multiMedia = !0
        }
        return delete b.mediaBlocks, delete b.mediaPath, c
    }, evalNested: function (b) {
        var c, d, e = b.mediaPath.concat([this]);
        for (c = 0; c < e.length; c++) {
            d = e[c].features instanceof a.Value ? e[c].features.value : e[c].features, e[c] = Array.isArray(d) ? d : [d]
        }
        return this.features = new a.Value(this.permute(e).map(function (b) {
            for (b = b.map(function (b) {
                return b.toCSS ? b : new a.Anonymous(b)
            }), c = b.length - 1; c > 0; c--) {
                b.splice(c, 0, new a.Anonymous("and"))
            }
            return new a.Expression(b)
        })), new a.Ruleset([], [])
    }, permute: function (a) {
        if (0 === a.length) {
            return[]
        }
        if (1 === a.length) {
            return a[0]
        }
        for (var b = [], c = this.permute(a.slice(1)), d = 0; d < c.length; d++) {
            for (var e = 0; e < a[0].length; e++) {
                b.push([a[0][e]].concat(c[d]))
            }
        }
        return b
    }, bubbleSelectors: function (b) {
        this.rules = [new a.Ruleset(b.slice(0), [this.rules[0]])]
    }}
}(require("../tree")), function (a) {
    a.mixin = {}, a.mixin.Call = function (b, c, d, e, f) {
        this.selector = new a.Selector(b), this.arguments = c, this.index = d, this.currentFileInfo = e, this.important = f
    }, a.mixin.Call.prototype = {type: "MixinCall", accept: function (a) {
        this.selector = a.visit(this.selector), this.arguments = a.visit(this.arguments)
    }, eval: function (b) {
        var c, d, e, f, g, h, i, j, k, l = [], m = !1;
        for (e = this.arguments && this.arguments.map(function (a) {
            return{name: a.name, value: a.value.eval(b)}
        }), f = 0; f < b.frames.length; f++) {
            if ((c = b.frames[f].find(this.selector)).length > 0) {
                for (j = !0, g = 0; g < c.length; g++) {
                    for (d = c[g], i = !1, h = 0; h < b.frames.length; h++) {
                        if (!(d instanceof a.mixin.Definition) && d === (b.frames[h].originalRuleset || b.frames[h])) {
                            i = !0;
                            break
                        }
                    }
                    if (!i && d.matchArgs(e, b)) {
                        if (!d.matchCondition || d.matchCondition(e, b)) {
                            try {
                                d instanceof a.mixin.Definition || (d = new a.mixin.Definition("", [], d.rules, null, !1), d.originalRuleset = c[g].originalRuleset || c[g]), Array.prototype.push.apply(l, d.eval(b, e, this.important).rules)
                            } catch (n) {
                                throw {message: n.message, index: this.index, filename: this.currentFileInfo.filename, stack: n.stack}
                            }
                        }
                        m = !0
                    }
                }
                if (m) {
                    if (!this.currentFileInfo || !this.currentFileInfo.reference) {
                        for (f = 0; f < l.length; f++) {
                            k = l[f], k.markReferenced && k.markReferenced()
                        }
                    }
                    return l
                }
            }
        }
        throw j ? {type: "Runtime", message: "No matching definition was found for `" + this.selector.toCSS().trim() + "(" + (e ? e.map(function (a) {
            var b = "";
            return a.name && (b += a.name + ":"), b += a.value.toCSS ? a.value.toCSS() : "???"
        }).join(", ") : "") + ")`", index: this.index, filename: this.currentFileInfo.filename} : {type: "Name", message: this.selector.toCSS().trim() + " is undefined", index: this.index, filename: this.currentFileInfo.filename}
    }}, a.mixin.Definition = function (b, c, d, e, f) {
        this.name = b, this.selectors = [new a.Selector([new a.Element(null, b, this.index, this.currentFileInfo)])], this.params = c, this.condition = e, this.variadic = f, this.arity = c.length, this.rules = d, this._lookups = {}, this.required = c.reduce(function (a, b) {
            return !b.name || b.name && !b.value ? a + 1 : a
        }, 0), this.parent = a.Ruleset.prototype, this.frames = []
    }, a.mixin.Definition.prototype = {type: "MixinDefinition", accept: function (a) {
        this.params = a.visit(this.params), this.rules = a.visit(this.rules), this.condition = a.visit(this.condition)
    }, variable: function (a) {
        return this.parent.variable.call(this, a)
    }, variables: function () {
        return this.parent.variables.call(this)
    }, find: function () {
        return this.parent.find.apply(this, arguments)
    }, rulesets: function () {
        return this.parent.rulesets.apply(this)
    }, evalParams: function (b, c, d, e) {
        var f, g, h, i, j, k, l, m, n = new a.Ruleset(null, []), o = this.params.slice(0);
        if (c = new a.evalEnv(c, [n].concat(c.frames)), d) {
            for (d = d.slice(0), h = 0; h < d.length; h++) {
                if (g = d[h], k = g && g.name) {
                    for (l = !1, i = 0; i < o.length; i++) {
                        if (!e[i] && k === o[i].name) {
                            e[i] = g.value.eval(b), n.rules.unshift(new a.Rule(k, g.value.eval(b))), l = !0;
                            break
                        }
                    }
                    if (l) {
                        d.splice(h, 1), h--;
                        continue
                    }
                    throw {type: "Runtime", message: "Named argument for " + this.name + " " + d[h].name + " not found"}
                }
            }
        }
        for (m = 0, h = 0; h < o.length; h++) {
            if (!e[h]) {
                if (g = d && d[m], k = o[h].name) {
                    if (o[h].variadic && d) {
                        for (f = [], i = m; i < d.length; i++) {
                            f.push(d[i].value.eval(b))
                        }
                        n.rules.unshift(new a.Rule(k, new a.Expression(f).eval(b)))
                    } else {
                        if (j = g && g.value) {
                            j = j.eval(b)
                        } else {
                            if (!o[h].value) {
                                throw {type: "Runtime", message: "wrong number of arguments for " + this.name + " (" + d.length + " for " + this.arity + ")"}
                            }
                            j = o[h].value.eval(c), n.resetCache()
                        }
                        n.rules.unshift(new a.Rule(k, j)), e[h] = j
                    }
                }
                if (o[h].variadic && d) {
                    for (i = m; i < d.length; i++) {
                        e[i] = d[i].value.eval(b)
                    }
                }
                m++
            }
        }
        return n
    }, eval: function (b, c, d) {
        var e, f, g = [], h = this.frames.concat(b.frames), i = this.evalParams(b, new a.evalEnv(b, h), c, g);
        return i.rules.unshift(new a.Rule("@arguments", new a.Expression(g).eval(b))), e = this.rules.slice(0), f = new a.Ruleset(null, e), f.originalRuleset = this, f = f.eval(new a.evalEnv(b, [this, i].concat(h))), d && (f = this.parent.makeImportant.apply(f)), f
    }, matchCondition: function (b, c) {
        return this.condition && !this.condition.eval(new a.evalEnv(c, [this.evalParams(c, new a.evalEnv(c, this.frames.concat(c.frames)), b, [])].concat(this.frames).concat(c.frames))) ? !1 : !0
    }, matchArgs: function (a, b) {
        var c, d = a && a.length || 0;
        if (this.variadic) {
            if (d < this.required - 1) {
                return !1
            }
        } else {
            if (d < this.required) {
                return !1
            }
            if (d > this.params.length) {
                return !1
            }
        }
        c = Math.min(d, this.arity);
        for (var e = 0; c > e; e++) {
            if (!this.params[e].name && !this.params[e].variadic && a[e].value.eval(b).toCSS() != this.params[e].value.eval(b).toCSS()) {
                return !1
            }
        }
        return !0
    }}
}(require("../tree")), function (a) {
    a.Negative = function (a) {
        this.value = a
    }, a.Negative.prototype = {type: "Negative", accept: function (a) {
        this.value = a.visit(this.value)
    }, genCSS: function (a, b) {
        b.add("-"), this.value.genCSS(a, b)
    }, toCSS: a.toCSS, eval: function (b) {
        return b.isMathOn() ? new a.Operation("*", [new a.Dimension(-1), this.value]).eval(b) : new a.Negative(this.value.eval(b))
    }}
}(require("../tree")), function (a) {
    a.Operation = function (a, b, c) {
        this.op = a.trim(), this.operands = b, this.isSpaced = c
    }, a.Operation.prototype = {type: "Operation", accept: function (a) {
        this.operands = a.visit(this.operands)
    }, eval: function (b) {
        var c, d = this.operands[0].eval(b), e = this.operands[1].eval(b);
        if (b.isMathOn()) {
            if (d instanceof a.Dimension && e instanceof a.Color) {
                if ("*" !== this.op && "+" !== this.op) {
                    throw {type: "Operation", message: "Can't substract or divide a color from a number"}
                }
                c = e, e = d, d = c
            }
            if (!d.operate) {
                throw {type: "Operation", message: "Operation on an invalid type"}
            }
            return d.operate(b, this.op, e)
        }
        return new a.Operation(this.op, [d, e], this.isSpaced)
    }, genCSS: function (a, b) {
        this.operands[0].genCSS(a, b), this.isSpaced && b.add(" "), b.add(this.op), this.isSpaced && b.add(" "), this.operands[1].genCSS(a, b)
    }, toCSS: a.toCSS}, a.operate = function (a, b, c, d) {
        switch (b) {
            case"+":
                return c + d;
            case"-":
                return c - d;
            case"*":
                return c * d;
            case"/":
                return c / d
        }
    }
}(require("../tree")), function (a) {
    a.Paren = function (a) {
        this.value = a
    }, a.Paren.prototype = {type: "Paren", accept: function (a) {
        this.value = a.visit(this.value)
    }, genCSS: function (a, b) {
        b.add("("), this.value.genCSS(a, b), b.add(")")
    }, toCSS: a.toCSS, eval: function (b) {
        return new a.Paren(this.value.eval(b))
    }}
}(require("../tree")), function (a) {
    a.Quoted = function (a, b, c, d, e) {
        this.escaped = c, this.value = b || "", this.quote = a.charAt(0), this.index = d, this.currentFileInfo = e
    }, a.Quoted.prototype = {type: "Quoted", genCSS: function (a, b) {
        this.escaped || b.add(this.quote, this.currentFileInfo, this.index), b.add(this.value), this.escaped || b.add(this.quote)
    }, toCSS: a.toCSS, eval: function (b) {
        var c = this, d = this.value.replace(/`([^`]+)`/g, function (d, e) {
            return new a.JavaScript(e, c.index, !0).eval(b).value
        }).replace(/@\{([\w-]+)\}/g, function (d, e) {
            var f = new a.Variable("@" + e, c.index, c.currentFileInfo).eval(b, !0);
            return f instanceof a.Quoted ? f.value : f.toCSS()
        });
        return new a.Quoted(this.quote + d + this.quote, d, this.escaped, this.index, this.currentFileInfo)
    }, compare: function (a) {
        if (!a.toCSS) {
            return -1
        }
        var b = this.toCSS(), c = a.toCSS();
        return b === c ? 0 : c > b ? -1 : 1
    }}
}(require("../tree")), function (a) {
    a.Rule = function (b, c, d, e, f, g, h) {
        this.name = b, this.value = c instanceof a.Value ? c : new a.Value([c]), this.important = d ? " " + d.trim() : "", this.merge = e, this.index = f, this.currentFileInfo = g, this.inline = h || !1, this.variable = "@" === b.charAt(0)
    }, a.Rule.prototype = {type: "Rule", accept: function (a) {
        this.value = a.visit(this.value)
    }, genCSS: function (a, b) {
        b.add(this.name + (a.compress ? ":" : ": "), this.currentFileInfo, this.index);
        try {
            this.value.genCSS(a, b)
        } catch (c) {
            throw c.index = this.index, c.filename = this.currentFileInfo.filename, c
        }
        b.add(this.important + (this.inline || a.lastRule && a.compress ? "" : ";"), this.currentFileInfo, this.index)
    }, toCSS: a.toCSS, eval: function (b) {
        var c = !1;
        "font" !== this.name || b.strictMath || (c = !0, b.strictMath = !0);
        try {
            return new a.Rule(this.name, this.value.eval(b), this.important, this.merge, this.index, this.currentFileInfo, this.inline)
        } finally {
            c && (b.strictMath = !1)
        }
    }, makeImportant: function () {
        return new a.Rule(this.name, this.value, "!important", this.merge, this.index, this.currentFileInfo, this.inline)
    }}
}(require("../tree")), function (a) {
    a.Ruleset = function (a, b, c) {
        this.selectors = a, this.rules = b, this._lookups = {}, this.strictImports = c
    }, a.Ruleset.prototype = {type: "Ruleset", accept: function (a) {
        if (this.paths) {
            for (var b = 0; b < this.paths.length; b++) {
                this.paths[b] = a.visit(this.paths[b])
            }
        } else {
            this.selectors = a.visit(this.selectors)
        }
        this.rules = a.visit(this.rules)
    }, eval: function (b) {
        var c, d, e, f = this.selectors && this.selectors.map(function (a) {
            return a.eval(b)
        }), g = new a.Ruleset(f, this.rules.slice(0), this.strictImports);
        for (g.originalRuleset = this, g.root = this.root, g.firstRoot = this.firstRoot, g.allowImports = this.allowImports, this.debugInfo && (g.debugInfo = this.debugInfo), b.frames.unshift(g), b.selectors || (b.selectors = []), b.selectors.unshift(this.selectors), (g.root || g.allowImports || !g.strictImports) && g.evalImports(b), e = 0; e < g.rules.length; e++) {
            g.rules[e] instanceof a.mixin.Definition && (g.rules[e].frames = b.frames.slice(0))
        }
        var h = b.mediaBlocks && b.mediaBlocks.length || 0;
        for (e = 0; e < g.rules.length; e++) {
            g.rules[e] instanceof a.mixin.Call && (c = g.rules[e].eval(b).filter(function (b) {
                return b instanceof a.Rule && b.variable ? !g.variable(b.name) : !0
            }), g.rules.splice.apply(g.rules, [e, 1].concat(c)), e += c.length - 1, g.resetCache())
        }
        for (e = 0; e < g.rules.length; e++) {
            d = g.rules[e], d instanceof a.mixin.Definition || (g.rules[e] = d.eval ? d.eval(b) : d)
        }
        if (b.frames.shift(), b.selectors.shift(), b.mediaBlocks) {
            for (e = h; e < b.mediaBlocks.length; e++) {
                b.mediaBlocks[e].bubbleSelectors(f)
            }
        }
        return g
    }, evalImports: function (b) {
        var c, d;
        for (c = 0; c < this.rules.length; c++) {
            this.rules[c] instanceof a.Import && (d = this.rules[c].eval(b), "number" == typeof d.length ? (this.rules.splice.apply(this.rules, [c, 1].concat(d)), c += d.length - 1) : this.rules.splice(c, 1, d), this.resetCache())
        }
    }, makeImportant: function () {
        return new a.Ruleset(this.selectors, this.rules.map(function (a) {
            return a.makeImportant ? a.makeImportant() : a
        }), this.strictImports)
    }, matchArgs: function (a) {
        return !a || 0 === a.length
    }, matchCondition: function (b, c) {
        var d = this.selectors[this.selectors.length - 1];
        return d.condition && !d.condition.eval(new a.evalEnv(c, c.frames)) ? !1 : !0
    }, resetCache: function () {
        this._rulesets = null, this._variables = null, this._lookups = {}
    }, variables: function () {
        return this._variables ? this._variables : this._variables = this.rules.reduce(function (b, c) {
            return c instanceof a.Rule && c.variable === !0 && (b[c.name] = c), b
        }, {})
    }, variable: function (a) {
        return this.variables()[a]
    }, rulesets: function () {
        return this.rules.filter(function (b) {
            return b instanceof a.Ruleset || b instanceof a.mixin.Definition
        })
    }, find: function (b, c) {
        c = c || this;
        var d, e = [], f = b.toCSS();
        return f in this._lookups ? this._lookups[f] : (this.rulesets().forEach(function (f) {
            if (f !== c) {
                for (var g = 0; g < f.selectors.length; g++) {
                    if (d = b.match(f.selectors[g])) {
                        b.elements.length > f.selectors[g].elements.length ? Array.prototype.push.apply(e, f.find(new a.Selector(b.elements.slice(1)), c)) : e.push(f);
                        break
                    }
                }
            }
        }), this._lookups[f] = e)
    }, genCSS: function (b, c) {
        var d, e, f, g, h, i = [], j = [], k = !0;
        b.tabLevel = b.tabLevel || 0, this.root || b.tabLevel++;
        var l = b.compress ? "" : Array(b.tabLevel + 1).join("  "), m = b.compress ? "" : Array(b.tabLevel).join("  ");
        for (d = 0; d < this.rules.length; d++) {
            g = this.rules[d], g.rules || g instanceof a.Media || g instanceof a.Directive || this.root && g instanceof a.Comment ? j.push(g) : i.push(g)
        }
        if (!this.root) {
            for (f = a.debugInfo(b, this, m), f && (c.add(f), c.add(m)), d = 0; d < this.paths.length; d++) {
                for (h = this.paths[d], b.firstSelector = !0, e = 0; e < h.length; e++) {
                    h[e].genCSS(b, c), b.firstSelector = !1
                }
                d + 1 < this.paths.length && c.add(b.compress ? "," : ",\n" + m)
            }
            c.add((b.compress ? "{" : " {\n") + l)
        }
        for (d = 0; d < i.length; d++) {
            g = i[d], d + 1 !== i.length || this.root && 0 !== j.length && !this.firstRoot || (b.lastRule = !0), g.genCSS ? g.genCSS(b, c) : g.value && c.add(g.value.toString()), b.lastRule ? b.lastRule = !1 : c.add(b.compress ? "" : "\n" + l)
        }
        for (this.root || (c.add(b.compress ? "}" : "\n" + m + "}"), b.tabLevel--), d = 0; d < j.length; d++) {
            i.length && k && c.add((b.compress ? "" : "\n") + (this.root ? l : m)), k || c.add((b.compress ? "" : "\n") + (this.root ? l : m)), k = !1, j[d].genCSS(b, c)
        }
        c.isEmpty() || b.compress || !this.firstRoot || c.add("\n")
    }, toCSS: a.toCSS, markReferenced: function () {
        for (var a = 0; a < this.selectors.length; a++) {
            this.selectors[a].markReferenced()
        }
    }, joinSelectors: function (a, b, c) {
        for (var d = 0; d < c.length; d++) {
            this.joinSelector(a, b, c[d])
        }
    }, joinSelector: function (b, c, d) {
        var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
        for (e = 0; e < d.elements.length; e++) {
            j = d.elements[e], "&" === j.value && (h = !0)
        }
        if (h) {
            for (r = [], i = [
                []
            ], e = 0; e < d.elements.length; e++) {
                if (j = d.elements[e], "&" !== j.value) {
                    r.push(j)
                } else {
                    for (s = [], r.length > 0 && this.mergeElementsOnToSelectors(r, i), f = 0; f < i.length; f++) {
                        if (k = i[f], 0 === c.length) {
                            k.length > 0 && (k[0].elements = k[0].elements.slice(0), k[0].elements.push(new a.Element(j.combinator, "", 0, j.index, j.currentFileInfo))), s.push(k)
                        } else {
                            for (g = 0; g < c.length; g++) {
                                l = c[g], m = [], n = [], p = !0, k.length > 0 ? (m = k.slice(0), q = m.pop(), o = d.createDerived(q.elements.slice(0)), p = !1) : o = d.createDerived([]), l.length > 1 && (n = n.concat(l.slice(1))), l.length > 0 && (p = !1, o.elements.push(new a.Element(j.combinator, l[0].elements[0].value, j.index, j.currentFileInfo)), o.elements = o.elements.concat(l[0].elements.slice(1))), p || m.push(o), m = m.concat(n), s.push(m)
                            }
                        }
                    }
                    i = s, r = []
                }
            }
            for (r.length > 0 && this.mergeElementsOnToSelectors(r, i), e = 0; e < i.length; e++) {
                i[e].length > 0 && b.push(i[e])
            }
        } else {
            if (c.length > 0) {
                for (e = 0; e < c.length; e++) {
                    b.push(c[e].concat(d))
                }
            } else {
                b.push([d])
            }
        }
    }, mergeElementsOnToSelectors: function (b, c) {
        var d, e;
        if (0 === c.length) {
            return c.push([new a.Selector(b)]), void 0
        }
        for (d = 0; d < c.length; d++) {
            e = c[d], e.length > 0 ? e[e.length - 1] = e[e.length - 1].createDerived(e[e.length - 1].elements.concat(b)) : e.push(new a.Selector(b))
        }
    }}
}(require("../tree")), function (a) {
    a.Selector = function (a, b, c, d, e, f) {
        this.elements = a, this.extendList = b || [], this.condition = c, this.currentFileInfo = e || {}, this.isReferenced = f, c || (this.evaldCondition = !0)
    }, a.Selector.prototype = {type: "Selector", accept: function (a) {
        this.elements = a.visit(this.elements), this.extendList = a.visit(this.extendList), this.condition = a.visit(this.condition)
    }, createDerived: function (b, c, d) {
        d = null != d ? d : this.evaldCondition;
        var e = new a.Selector(b, c || this.extendList, this.condition, this.index, this.currentFileInfo, this.isReferenced);
        return e.evaldCondition = d, e
    }, match: function (a) {
        var b, c, d, e, f = this.elements, g = f.length;
        if (b = a.elements.slice(a.elements.length && "&" === a.elements[0].value ? 1 : 0), c = b.length, d = Math.min(g, c), 0 === c || c > g) {
            return !1
        }
        for (e = 0; d > e; e++) {
            if (f[e].value !== b[e].value) {
                return !1
            }
        }
        return !0
    }, eval: function (a) {
        var b = this.condition && this.condition.eval(a);
        return this.createDerived(this.elements.map(function (b) {
            return b.eval(a)
        }), this.extendList.map(function (b) {
            return b.eval(a)
        }), b)
    }, genCSS: function (a, b) {
        var c, d;
        if (a && a.firstSelector || "" !== this.elements[0].combinator.value || b.add(" ", this.currentFileInfo, this.index), !this._css) {
            for (c = 0; c < this.elements.length; c++) {
                d = this.elements[c], d.genCSS(a, b)
            }
        }
    }, toCSS: a.toCSS, markReferenced: function () {
        this.isReferenced = !0
    }, getIsReferenced: function () {
        return !this.currentFileInfo.reference || this.isReferenced
    }, getIsOutput: function () {
        return this.evaldCondition
    }}
}(require("../tree")), function (a) {
    a.UnicodeDescriptor = function (a) {
        this.value = a
    }, a.UnicodeDescriptor.prototype = {type: "UnicodeDescriptor", genCSS: function (a, b) {
        b.add(this.value)
    }, toCSS: a.toCSS, eval: function () {
        return this
    }}
}(require("../tree")), function (a) {
    a.URL = function (a, b) {
        this.value = a, this.currentFileInfo = b
    }, a.URL.prototype = {type: "Url", accept: function (a) {
        this.value = a.visit(this.value)
    }, genCSS: function (a, b) {
        b.add("url("), this.value.genCSS(a, b), b.add(")")
    }, toCSS: a.toCSS, eval: function (b) {
        var c, d = this.value.eval(b);
        return c = this.currentFileInfo && this.currentFileInfo.rootpath, c && "string" == typeof d.value && b.isPathRelative(d.value) && (d.quote || (c = c.replace(/[\(\)'"\s]/g, function (a) {
            return"\\" + a
        })), d.value = c + d.value), d.value = b.normalizePath(d.value), new a.URL(d, null)
    }}
}(require("../tree")), function (a) {
    a.Value = function (a) {
        this.value = a
    }, a.Value.prototype = {type: "Value", accept: function (a) {
        this.value = a.visit(this.value)
    }, eval: function (b) {
        return 1 === this.value.length ? this.value[0].eval(b) : new a.Value(this.value.map(function (a) {
            return a.eval(b)
        }))
    }, genCSS: function (a, b) {
        var c;
        for (c = 0; c < this.value.length; c++) {
            this.value[c].genCSS(a, b), c + 1 < this.value.length && b.add(a && a.compress ? "," : ", ")
        }
    }, toCSS: a.toCSS}
}(require("../tree")), function (a) {
    a.Variable = function (a, b, c) {
        this.name = a, this.index = b, this.currentFileInfo = c
    }, a.Variable.prototype = {type: "Variable", eval: function (b) {
        var c, d, e = this.name;
        if (0 === e.indexOf("@@") && (e = "@" + new a.Variable(e.slice(1)).eval(b).value), this.evaluating) {
            throw {type: "Name", message: "Recursive variable definition for " + e, filename: this.currentFileInfo.file, index: this.index}
        }
        if (this.evaluating = !0, c = a.find(b.frames, function (a) {
            return(d = a.variable(e)) ? d.value.eval(b) : void 0
        })) {
            return this.evaluating = !1, c
        }
        throw {type: "Name", message: "variable " + e + " is undefined", filename: this.currentFileInfo.filename, index: this.index}
    }}
}(require("../tree")), function (e) {
    var f = ["paths", "optimization", "files", "contents", "relativeUrls", "rootpath", "strictImports", "insecure", "dumpLineNumbers", "compress", "processImports", "syncImport", "javascriptEnabled", "mime", "useFileCache", "currentFileInfo"];
    e.parseEnv = function (b) {
        if (h(b, this, f), this.contents || (this.contents = {}), this.files || (this.files = {}), !this.currentFileInfo) {
            var d = b && b.filename || "input", j = d.replace(/[^\/\\]*$/, "");
            b && (b.filename = null), this.currentFileInfo = {filename: d, relativeUrls: this.relativeUrls, rootpath: b && b.rootpath || "", currentDirectory: j, entryPath: j, rootFilename: d}
        }
    };
    var g = ["silent", "verbose", "compress", "yuicompress", "ieCompat", "strictMath", "strictUnits", "cleancss", "sourceMap", "importMultiple"];
    e.evalEnv = function (c, d) {
        h(c, this, g), this.frames = d || []
    }, e.evalEnv.prototype.inParenthesis = function () {
        this.parensStack || (this.parensStack = []), this.parensStack.push(!0)
    }, e.evalEnv.prototype.outOfParenthesis = function () {
        this.parensStack.pop()
    }, e.evalEnv.prototype.isMathOn = function () {
        return this.strictMath ? this.parensStack && this.parensStack.length : !0
    }, e.evalEnv.prototype.isPathRelative = function (b) {
        return !/^(?:[a-z-]+:|\/)/.test(b)
    }, e.evalEnv.prototype.normalizePath = function (d) {
        var j, k = d.split("/").reverse();
        for (d = []; 0 !== k.length;) {
            switch (j = k.pop()) {
                case".":
                    break;
                case"..":
                    0 === d.length || ".." === d[d.length - 1] ? d.push(j) : d.pop();
                    break;
                default:
                    d.push(j)
            }
        }
        return d.join("/")
    };
    var h = function (j, k, l) {
        if (j) {
            for (var m = 0; m < l.length; m++) {
                j.hasOwnProperty(l[m]) && (k[l[m]] = j[l[m]])
            }
        }
    }
}(require("./tree")), function (b) {
    b.visitor = function (c) {
        this._implementation = c
    }, b.visitor.prototype = {visit: function (f) {
        if (f instanceof Array) {
            return this.visitArray(f)
        }
        if (!f || !f.type) {
            return f
        }
        var g, h, j = "visit" + f.type, k = this._implementation[j];
        return k && (g = {visitDeeper: !0}, h = k.call(this._implementation, f, g), this._implementation.isReplacing && (f = h)), (!g || g.visitDeeper) && f && f.accept && f.accept(this), j += "Out", this._implementation[j] && this._implementation[j](f), f
    }, visitArray: function (e) {
        var f, g = [];
        for (f = 0; f < e.length; f++) {
            var h = this.visit(e[f]);
            h instanceof Array ? (h = this.flatten(h), g = g.concat(h)) : g.push(h)
        }
        return this._implementation.isReplacing ? g : e
    }, doAccept: function (c) {
        c.accept(this)
    }, flatten: function (c, d) {
        return c.reduce(this.flattenReduce.bind(this), d || [])
    }, flattenReduce: function (c, d) {
        return d instanceof Array ? c = this.flatten(d, c) : c.push(d), c
    }}
}(require("./tree")), function (b) {
    b.importVisitor = function (a, e, f) {
        this._visitor = new b.visitor(this), this._importer = a, this._finish = e, this.env = f || new b.evalEnv, this.importCount = 0
    }, b.importVisitor.prototype = {isReplacing: !0, run: function (d) {
        var e;
        try {
            this._visitor.visit(d)
        } catch (f) {
            e = f
        }
        this.isFinished = !0, 0 === this.importCount && this._finish(e)
    }, visitImport: function (a, j) {
        var k, l = this, m = a.options.inline;
        if (!a.css || m) {
            try {
                k = a.evalForImport(this.env)
            } catch (n) {
                n.filename || (n.index = a.index, n.filename = a.currentFileInfo.filename), a.css = !0, a.error = n
            }
            if (k && (!k.css || m)) {
                a = k, this.importCount++;
                var o = new b.evalEnv(this.env, this.env.frames.slice(0));
                a.options.multiple && (o.importMultiple = !0), this._importer.push(a.getPath(), a.currentFileInfo, a.options, function (e, f, h, p) {
                    e && !e.filename && (e.index = a.index, e.filename = a.currentFileInfo.filename), h && !o.importMultiple && (a.skip = h);
                    var q = function (c) {
                        l.importCount--, 0 === l.importCount && l.isFinished && l._finish(c)
                    };
                    return !f || (a.root = f, a.importedFilename = p, m || a.skip) ? (q(), void 0) : (new b.importVisitor(l._importer, q, o).run(f), void 0)
                })
            }
        }
        return j.visitDeeper = !1, a
    }, visitRule: function (c, d) {
        return d.visitDeeper = !1, c
    }, visitDirective: function (c) {
        return this.env.frames.unshift(c), c
    }, visitDirectiveOut: function () {
        this.env.frames.shift()
    }, visitMixinDefinition: function (c) {
        return this.env.frames.unshift(c), c
    }, visitMixinDefinitionOut: function () {
        this.env.frames.shift()
    }, visitRuleset: function (c) {
        return this.env.frames.unshift(c), c
    }, visitRulesetOut: function () {
        this.env.frames.shift()
    }, visitMedia: function (c) {
        return this.env.frames.unshift(c.ruleset), c
    }, visitMediaOut: function () {
        this.env.frames.shift()
    }}
}(require("./tree")), function (b) {
    b.joinSelectorVisitor = function () {
        this.contexts = [
            []
        ], this._visitor = new b.visitor(this)
    }, b.joinSelectorVisitor.prototype = {run: function (c) {
        return this._visitor.visit(c)
    }, visitRule: function (c, d) {
        d.visitDeeper = !1
    }, visitMixinDefinition: function (c, d) {
        d.visitDeeper = !1
    }, visitRuleset: function (d) {
        var e = this.contexts[this.contexts.length - 1], f = [];
        this.contexts.push(f), d.root || (d.selectors = d.selectors.filter(function (c) {
            return c.getIsOutput()
        }), 0 === d.selectors.length && (d.rules.length = 0), d.joinSelectors(f, e, d.selectors), d.paths = f)
    }, visitRulesetOut: function () {
        this.contexts.length = this.contexts.length - 1
    }, visitMedia: function (c) {
        var d = this.contexts[this.contexts.length - 1];
        c.rules[0].root = 0 === d.length || d[0].multiMedia
    }}
}(require("./tree")), function (b) {
    b.toCSSVisitor = function (a) {
        this._visitor = new b.visitor(this), this._env = a
    }, b.toCSSVisitor.prototype = {isReplacing: !0, run: function (c) {
        return this._visitor.visit(c)
    }, visitRule: function (c) {
        return c.variable ? [] : c
    }, visitMixinDefinition: function () {
        return[]
    }, visitExtend: function () {
        return[]
    }, visitComment: function (c) {
        return c.isSilent(this._env) ? [] : c
    }, visitMedia: function (c, d) {
        return c.accept(this._visitor), d.visitDeeper = !1, c.rules.length ? c : []
    }, visitDirective: function (a) {
        if (a.currentFileInfo.reference && !a.isReferenced) {
            return[]
        }
        if ("@charset" === a.name) {
            if (this.charset) {
                if (a.debugInfo) {
                    var d = new b.Comment("/* " + a.toCSS(this._env).replace(/\n/g, "") + " */\n");
                    return d.debugInfo = a.debugInfo, this._visitor.visit(d)
                }
                return[]
            }
            this.charset = !0
        }
        return a
    }, checkPropertiesInRoot: function (a) {
        for (var e, f = 0; f < a.length; f++) {
            if (e = a[f], e instanceof b.Rule && !e.variable) {
                throw {message: "properties must be inside selector blocks, they cannot be in the root.", index: e.index, filename: e.currentFileInfo ? e.currentFileInfo.filename : null}
            }
        }
    }, visitRuleset: function (a, g) {
        var h, j = [];
        if (a.firstRoot && this.checkPropertiesInRoot(a.rules), a.root) {
            a.accept(this._visitor), g.visitDeeper = !1, (a.firstRoot || a.rules.length > 0) && j.splice(0, 0, a)
        } else {
            a.paths = a.paths.filter(function (d) {
                var e;
                for (" " === d[0].elements[0].combinator.value && (d[0].elements[0].combinator = new b.Combinator("")), e = 0; e < d.length; e++) {
                    return d[e].getIsReferenced() && d[e].getIsOutput() ? !0 : !1
                }
            });
            for (var k = 0; k < a.rules.length; k++) {
                h = a.rules[k], h.rules && (j.push(this._visitor.visit(h)), a.rules.splice(k, 1), k--)
            }
            a.rules.length > 0 && a.accept(this._visitor), g.visitDeeper = !1, this._mergeRules(a.rules), this._removeDuplicateRules(a.rules), a.rules.length > 0 && a.paths.length > 0 && j.splice(0, 0, a)
        }
        return 1 === j.length ? j[0] : j
    }, _removeDuplicateRules: function (a) {
        var h, j, k, l = {};
        for (k = a.length - 1; k >= 0; k--) {
            if (j = a[k], j instanceof b.Rule) {
                if (l[j.name]) {
                    h = l[j.name], h instanceof b.Rule && (h = l[j.name] = [l[j.name].toCSS(this._env)]);
                    var m = j.toCSS(this._env);
                    -1 !== h.indexOf(m) ? a.splice(k, 1) : h.push(m)
                } else {
                    l[j.name] = j
                }
            }
        }
    }, _mergeRules: function (a) {
        for (var h, j, k, l = {}, m = 0; m < a.length; m++) {
            j = a[m], j instanceof b.Rule && j.merge && (k = [j.name, j.important ? "!" : ""].join(","), l[k] ? a.splice(m--, 1) : h = l[k] = [], h.push(j))
        }
        Object.keys(l).map(function (c) {
            h = l[c], h.length > 1 && (j = h[0], j.value = new b.Value(h.map(function (d) {
                return d.value
            })))
        })
    }}
}(require("./tree")), function (b) {
    b.extendFinderVisitor = function () {
        this._visitor = new b.visitor(this), this.contexts = [], this.allExtendsStack = [
            []
        ]
    }, b.extendFinderVisitor.prototype = {run: function (c) {
        return c = this._visitor.visit(c), c.allExtends = this.allExtendsStack[0], c
    }, visitRule: function (c, d) {
        d.visitDeeper = !1
    }, visitMixinDefinition: function (c, d) {
        d.visitDeeper = !1
    }, visitRuleset: function (a) {
        if (!a.root) {
            var j, k, l, m, n = [];
            for (j = 0; j < a.rules.length; j++) {
                a.rules[j] instanceof b.Extend && (n.push(a.rules[j]), a.extendOnEveryPath = !0)
            }
            for (j = 0; j < a.paths.length; j++) {
                var o = a.paths[j], p = o[o.length - 1];
                for (m = p.extendList.slice(0).concat(n).map(function (c) {
                    return c.clone()
                }), k = 0; k < m.length; k++) {
                    this.foundExtends = !0, l = m[k], l.findSelfSelectors(o), l.ruleset = a, 0 === k && (l.firstExtendOnThisSelectorPath = !0), this.allExtendsStack[this.allExtendsStack.length - 1].push(l)
                }
            }
            this.contexts.push(a.selectors)
        }
    }, visitRulesetOut: function (c) {
        c.root || (this.contexts.length = this.contexts.length - 1)
    }, visitMedia: function (c) {
        c.allExtends = [], this.allExtendsStack.push(c.allExtends)
    }, visitMediaOut: function () {
        this.allExtendsStack.length = this.allExtendsStack.length - 1
    }, visitDirective: function (c) {
        c.allExtends = [], this.allExtendsStack.push(c.allExtends)
    }, visitDirectiveOut: function () {
        this.allExtendsStack.length = this.allExtendsStack.length - 1
    }}, b.processExtendsVisitor = function () {
        this._visitor = new b.visitor(this)
    }, b.processExtendsVisitor.prototype = {run: function (a) {
        var d = new b.extendFinderVisitor;
        return d.run(a), d.foundExtends ? (a.allExtends = a.allExtends.concat(this.doExtendChaining(a.allExtends, a.allExtends)), this.allExtendsStack = [a.allExtends], this._visitor.visit(a)) : a
    }, doExtendChaining: function (a, r, s) {
        var t, u, v, w, z, A, B, C, D = [], E = this;
        for (s = s || 0, t = 0; t < a.length; t++) {
            for (u = 0; u < r.length; u++) {
                A = a[t], B = r[u], this.inInheritanceChain(B, A) || (z = [B.selfSelectors[0]], v = E.findMatch(A, z), v.length && A.selfSelectors.forEach(function (c) {
                    w = E.extendSelector(v, z, c), C = new b.Extend(B.selector, B.option, 0), C.selfSelectors = w, w[w.length - 1].extendList = [C], D.push(C), C.ruleset = B.ruleset, C.parents = [B, A], B.firstExtendOnThisSelectorPath && (C.firstExtendOnThisSelectorPath = !0, B.ruleset.paths.push(w))
                }))
            }
        }
        if (D.length) {
            if (this.extendChainCount++, s > 100) {
                var F = "{unable to calculate}", G = "{unable to calculate}";
                try {
                    F = D[0].selfSelectors[0].toCSS(), G = D[0].selector.toCSS()
                } catch (H) {
                }
                throw {message: "extend circular reference detected. One of the circular extends is currently:" + F + ":extend(" + G + ")"}
            }
            return D.concat(E.doExtendChaining(D, r, s + 1))
        }
        return D
    }, inInheritanceChain: function (c, d) {
        if (c === d) {
            return !0
        }
        if (d.parents) {
            if (this.inInheritanceChain(c, d.parents[0])) {
                return !0
            }
            if (this.inInheritanceChain(c, d.parents[1])) {
                return !0
            }
        }
        return !1
    }, visitRule: function (c, d) {
        d.visitDeeper = !1
    }, visitMixinDefinition: function (c, d) {
        d.visitDeeper = !1
    }, visitSelector: function (c, d) {
        d.visitDeeper = !1
    }, visitRuleset: function (j) {
        if (!j.root) {
            var k, l, m, n, o = this.allExtendsStack[this.allExtendsStack.length - 1], p = [], q = this;
            for (m = 0; m < o.length; m++) {
                for (l = 0; l < j.paths.length; l++) {
                    n = j.paths[l], j.extendOnEveryPath || n[n.length - 1].extendList.length || (k = this.findMatch(o[m], n), k.length && o[m].selfSelectors.forEach(function (c) {
                        p.push(q.extendSelector(k, n, c))
                    }))
                }
            }
            j.paths = j.paths.concat(p)
        }
    }, findMatch: function (n, o) {
        var p, q, r, s, t, u, v, w = this, z = n.selector.elements, A = [], B = [];
        for (p = 0; p < o.length; p++) {
            for (q = o[p], r = 0; r < q.elements.length; r++) {
                for (s = q.elements[r], (n.allowBefore || 0 === p && 0 === r) && A.push({pathIndex: p, index: r, matched: 0, initialCombinator: s.combinator}), u = 0; u < A.length; u++) {
                    v = A[u], t = s.combinator.value, "" === t && 0 === r && (t = " "), !w.isElementValuesEqual(z[v.matched].value, s.value) || v.matched > 0 && z[v.matched].combinator.value !== t ? v = null : v.matched++, v && (v.finished = v.matched === z.length, v.finished && !n.allowAfter && (r + 1 < q.elements.length || p + 1 < o.length) && (v = null)), v ? v.finished && (v.length = z.length, v.endPathIndex = p, v.endPathElementIndex = r + 1, A.length = 0, B.push(v)) : (A.splice(u, 1), u--)
                }
            }
        }
        return B
    }, isElementValuesEqual: function (a, e) {
        if ("string" == typeof a || "string" == typeof e) {
            return a === e
        }
        if (a instanceof b.Attribute) {
            return a.op !== e.op || a.key !== e.key ? !1 : a.value && e.value ? (a = a.value.value || a.value, e = e.value.value || e.value, a === e) : a.value || e.value ? !1 : !0
        }
        if (a = a.value, e = e.value, a instanceof b.Selector) {
            if (!(e instanceof b.Selector) || a.elements.length !== e.elements.length) {
                return !1
            }
            for (var f = 0; f < a.elements.length; f++) {
                if (a.elements[f].combinator.value !== e.elements[f].combinator.value && (0 !== f || (a.elements[f].combinator.value || " ") !== (e.elements[f].combinator.value || " "))) {
                    return !1
                }
                if (!this.isElementValuesEqual(a.elements[f].value, e.elements[f].value)) {
                    return !1
                }
            }
            return !0
        }
        return !1
    }, extendSelector: function (a, m, n) {
        var o, p, q, r, s, t = 0, u = 0, v = [];
        for (o = 0; o < a.length; o++) {
            r = a[o], p = m[r.pathIndex], q = new b.Element(r.initialCombinator, n.elements[0].value, n.elements[0].index, n.elements[0].currentFileInfo), r.pathIndex > t && u > 0 && (v[v.length - 1].elements = v[v.length - 1].elements.concat(m[t].elements.slice(u)), u = 0, t++), s = p.elements.slice(u, r.index).concat([q]).concat(n.elements.slice(1)), t === r.pathIndex && o > 0 ? v[v.length - 1].elements = v[v.length - 1].elements.concat(s) : (v = v.concat(m.slice(t, r.pathIndex)), v.push(new b.Selector(s))), t = r.endPathIndex, u = r.endPathElementIndex, u >= m[t].elements.length && (u = 0, t++)
        }
        return t < m.length && u > 0 && (v[v.length - 1].elements = v[v.length - 1].elements.concat(m[t].elements.slice(u)), t++), v = v.concat(m.slice(t, m.length))
    }, visitRulesetOut: function () {
    }, visitMedia: function (c) {
        var d = c.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
        d = d.concat(this.doExtendChaining(d, c.allExtends)), this.allExtendsStack.push(d)
    }, visitMediaOut: function () {
        this.allExtendsStack.length = this.allExtendsStack.length - 1
    }, visitDirective: function (c) {
        var d = c.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
        d = d.concat(this.doExtendChaining(d, c.allExtends)), this.allExtendsStack.push(d)
    }, visitDirectiveOut: function () {
        this.allExtendsStack.length = this.allExtendsStack.length - 1
    }}
}(require("./tree")), function (b) {
    b.sourceMapOutput = function (c) {
        this._css = [], this._rootNode = c.rootNode, this._writeSourceMap = c.writeSourceMap, this._contentsMap = c.contentsMap, this._sourceMapFilename = c.sourceMapFilename, this._outputFilename = c.outputFilename, this._sourceMapBasepath = c.sourceMapBasepath, this._sourceMapRootpath = c.sourceMapRootpath, this._outputSourceFiles = c.outputSourceFiles, this._sourceMapGeneratorConstructor = c.sourceMapGenerator || require("source-map").SourceMapGenerator, this._sourceMapRootpath && "/" !== this._sourceMapRootpath.charAt(this._sourceMapRootpath.length - 1) && (this._sourceMapRootpath += "/"), this._lineNumber = 0, this._column = 0
    }, b.sourceMapOutput.prototype.normalizeFilename = function (c) {
        return this._sourceMapBasepath && 0 === c.indexOf(this._sourceMapBasepath) && (c = c.substring(this._sourceMapBasepath.length), ("\\" === c.charAt(0) || "/" === c.charAt(0)) && (c = c.substring(1))), (this._sourceMapRootpath || "") + c.replace(/\\/g, "/")
    }, b.sourceMapOutput.prototype.add = function (k, l, m, n) {
        if (k) {
            var o, p, q, r, s;
            if (l) {
                var t = this._contentsMap[l.filename].substring(0, m);
                p = t.split("\n"), r = p[p.length - 1]
            }
            if (o = k.split("\n"), q = o[o.length - 1], l) {
                if (n) {
                    for (s = 0; s < o.length; s++) {
                        this._sourceMapGenerator.addMapping({generated: {line: this._lineNumber + s + 1, column: 0 === s ? this._column : 0}, original: {line: p.length + s, column: 0 === s ? r.length : 0}, source: this.normalizeFilename(l.filename)})
                    }
                } else {
                    this._sourceMapGenerator.addMapping({generated: {line: this._lineNumber + 1, column: this._column}, original: {line: p.length, column: r.length}, source: this.normalizeFilename(l.filename)})
                }
            }
            1 === o.length ? this._column += q.length : (this._lineNumber += o.length - 1, this._column = q.length), this._css.push(k)
        }
    }, b.sourceMapOutput.prototype.isEmpty = function () {
        return 0 === this._css.length
    }, b.sourceMapOutput.prototype.toCSS = function (e) {
        if (this._sourceMapGenerator = new this._sourceMapGeneratorConstructor({file: this._outputFilename, sourceRoot: null}), this._outputSourceFiles) {
            for (var f in this._contentsMap) {
                this._sourceMapGenerator.setSourceContent(this.normalizeFilename(f), this._contentsMap[f])
            }
        }
        if (this._rootNode.genCSS(e, this), this._css.length > 0) {
            var g, h = JSON.stringify(this._sourceMapGenerator.toJSON());
            this._sourceMapFilename && (g = this.normalizeFilename(this._sourceMapFilename)), this._writeSourceMap ? this._writeSourceMap(h) : g = "data:application/json," + encodeURIComponent(h), g && this._css.push("/*# sourceMappingURL=" + g + " */")
        }
        return this._css.join("")
    }
}(require("./tree"));
var isFileProtocol = /^(file|chrome(-extension)?|resource|qrc|app):/.test(location.protocol);
less.env = less.env || ("127.0.0.1" == location.hostname || "0.0.0.0" == location.hostname || "localhost" == location.hostname || location.port.length > 0 || isFileProtocol ? "development" : "production");
var logLevel = {info: 2, errors: 1, none: 0};
if (less.logLevel = "undefined" != typeof less.logLevel ? less.logLevel : logLevel.info, less.async = less.async || !1, less.fileAsync = less.fileAsync || !1, less.poll = less.poll || (isFileProtocol ? 1000 : 1500), less.functions) {
    for (var func in less.functions) {
        less.tree.functions[func] = less.functions[func]
    }
}
var dumpLineNumbers = /!dumpLineNumbers:(comments|mediaquery|all)/.exec(location.hash);
dumpLineNumbers && (less.dumpLineNumbers = dumpLineNumbers[1]);
var typePattern = /^text\/(x-)?less$/, cache = null, fileCache = {};
if (less.watch = function () {
    return less.watchMode || (less.env = "development", initRunningMode()), this.watchMode = !0
}, less.unwatch = function () {
    return clearInterval(less.watchTimer), this.watchMode = !1
}, /!watch/.test(location.hash) && less.watch(), "development" != less.env) {
    try {
        cache = "undefined" == typeof window.localStorage ? null : window.localStorage
    } catch (_) {
    }
}
var links = document.getElementsByTagName("link");
less.sheets = [];
for (var i = 0; i < links.length; i++) {
    ("stylesheet/less" === links[i].rel || links[i].rel.match(/stylesheet/) && links[i].type.match(typePattern)) && less.sheets.push(links[i])
}
less.modifyVars = function (d) {
    var e = "";
    for (var f in d) {
        e += ("@" === f.slice(0, 1) ? "" : "@") + f + ": " + (";" === d[f].slice(-1) ? d[f] : d[f] + ";")
    }
    less.refresh(!1, e)
}, less.refresh = function (e, f) {
    var g, h;
    g = h = new Date, loadStyleSheets(function (c, d, j, k, l) {
        return c ? error(c, k.href) : (l.local ? log("loading " + k.href + " from cache.", logLevel.info) : (log("parsed " + k.href + " successfully.", logLevel.info), createCSS(d.toCSS(less), k, l.lastModified)), log("css for " + k.href + " generated in " + (new Date - h) + "ms", logLevel.info), 0 === l.remaining && log("css generated in " + (new Date - g) + "ms", logLevel.info), h = new Date, void 0)
    }, e, f), loadStyles(f)
}, less.refreshStyles = loadStyles, less.Parser.fileLoader = loadFile, less.refresh("development" === less.env), "function" == typeof define && define.amd && define(function () {
    return less
});
Date.prototype.pattern = function (a) {
    var c = {"M+": this.getMonth() + 1, "d+": this.getDate(), "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, "H+": this.getHours(), "m+": this.getMinutes(), "s+": this.getSeconds(), "q+": Math.floor((this.getMonth() + 3) / 3), S: this.getMilliseconds()};
    var d = {"0": "\u65e5", "1": "\u4e00", "2": "\u4e8c", "3": "\u4e09", "4": "\u56db", "5": "\u4e94", "6": "\u516d"};
    if (/(y+)/.test(a)) {
        a = a.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    if (/(E+)/.test(a)) {
        a = a.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + d[this.getDay() + ""])
    }
    for (var b in c) {
        if (new RegExp("(" + b + ")").test(a)) {
            a = a.replace(RegExp.$1, (RegExp.$1.length == 1) ? (c[b]) : (("00" + c[b]).substr(("" + c[b]).length)))
        }
    }
    return a
};
Date.prototype.addYears = function (a) {
    this.setFullYear(this.getFullYear() + a);
    return this
};
Date.prototype.addHours = function (a) {
    this.setHours(this.getHours() + a);
    return this
};
Date.prototype.addDays = function (a) {
    this.addHours(24 * a);
    return this
};
Date.prototype.addMonths = function (a) {
    this.setMonth(this.getMonth() + a);
    return this
};
Date.prototype.toDate = function () {
    return this
};
String.prototype.toDateTime = function (c) {
    var b = new Date(parseInt(this.replace("/Date(", "").replace(")/", ""), 10));
    var f = b.getMonth() + 1 < 10 ? "0" + (b.getMonth() + 1) : b.getMonth() + 1;
    var a = b.getDate() < 10 ? "0" + b.getDate() : b.getDate();
    var d = b.getHours() < 10 ? "0" + b.getHours() : b.getHours();
    var e = b.getMinutes() < 10 ? "0" + b.getMinutes() : b.getMinutes();
    var g = b.getSeconds() < 10 ? "0" + b.getSeconds() : b.getSeconds();
    if (c == "yyyy-mm-dd") {
        return b.getFullYear() + "-" + f + "-" + a
    }
    return b.getFullYear() + "-" + f + "-" + a + " " + d + ":" + e + ":" + g
};
String.prototype.toDate = function () {
    if (this.indexOf("Date(") > 0) {
        var a = this.substr(this.indexOf("(") + 1);
        a = a.substr(0, a.indexOf(")"));
        return new Date(Number(a))
    }
    return new Date(Date.parse(this.replace(/-/g, "/")))
};
String.prototype.htmlEncode = function () {
    var a = this;
    a = a.replace(/&/g, "&amp;");
    a = a.replace(/</g, "&lt;");
    a = a.replace(/>/g, "&gt;");
    a = a.replace(/'/g, "&apos;");
    a = a.replace(/\"/g, "&quot;");
    return a
};
String.prototype.htmlDecode = function () {
    var a = this;
    a = a.replace(/&amp;/g, "&");
    a = a.replace(/&lt;/g, "<");
    a = a.replace(/&gt;/g, ">");
    a = a.replace(/&#39;/g, "'");
    a = a.replace(/&quot;/g, '"');
    return a
};
String.prototype.getBytesLength = function () {
    var a = this.match(/[^\x00-\xff]/ig);
    return this.length + (a == null ? 0 : a.length)
};
String.prototype.CutStrings = function (b, a) {
    var c;
    if (this.length <= b) {
        c = this
    } else {
        c = this.substr(0, b)
    }
    if (a) {
        c += "..."
    }
    return c
};
String.prototype.trim = function () {
    var a = this;
    return a == "" ? a : a.replace(/(^\s*)/g, "").replace(/(\s*$)/g, "")
};
String.prototype.GetLength = function () {
    var d = 0, c = this.length, a = -1;
    for (var b = 0; b < c; b++) {
        a = this.charCodeAt(b);
        if (a >= 0 && a <= 128) {
            d += 1
        } else {
            d += 2
        }
    }
    return d
};
String.prototype.ParseFloatAndToFixed = function (a) {
    return parseFloat(parseFloat(this).toFixed(a))
};
String.prototype.isNullOrWhiteSpace = function () {
    return this == "" || this.trim() == ""
};
String.prototype.startsWith = function (c, a) {
    var b = this;
    if (b.isNullOrWhiteSpace) {
        return false
    }
    if (a) {
        b = b.toLowerCase();
        c = c.toLowerCase()
    }
    if (b.substr(0, c.length) == c) {
        return true
    }
    return false
};
String.prototype.endsWith = function (a, b) {
    var c = this;
    if (c.isNullOrWhiteSpace) {
        return false
    }
    if (b) {
        c = c.toLowerCase();
        a = a.toLowerCase()
    }
    if (c.substr(c.length - a.length) == a) {
        return true
    }
    return false
};
Array.prototype.contain = function (a) {
    for (var b in this) {
        if (a.constructor == Function) {
            if (a(b) == true) {
                return true
            }
        }
    }
    return false
};
Array.prototype.get = function (a) {
    for (var b in this) {
        if (a.constructor == Function) {
            if (a(this[b]) == true) {
                return this[b]
            }
        }
    }
    return null
};
Array.prototype.del = function (a) {
    if (a > this.length - 1) {
        return false
    } else {
        return a < 0 ? this : this.slice(0, a).concat(this.slice(a + 1, this.length))
    }
};
Array.prototype.removeByValue = function (b) {
    if (!b) {
        return this
    }
    for (var a = 0; a < this.length; a++) {
        if (this[a] == b) {
            return this.del(a)
        }
    }
};
Array.prototype.indexOf = function (c, e) {
    var b = -1;
    e = e == "undefined" ? true : e;
    var d = this.length;
    if (e) {
        for (var a = 0; a < d; a++) {
            if (this[a] === c) {
                b = a;
                break
            }
        }
    } else {
        for (var a = 0; a < d; a++) {
            if (this[a] == c) {
                b = a;
                break
            }
        }
    }
    return b
};
(function ($) {
    $.type = function (o) {
        var toS = Object.prototype.toString;
        var types = {"undefined": "undefined", number: "number", "boolean": "boolean", string: "string", "[object Function]": "function", "[object RegExp]": "regexp", "[object Array]": "array", "[object Date]": "date", "[object Error]": "error"};
        return types[typeof o] || types[toS.call(o)] || (o ? "object" : "null")
    };
    var $specialChars = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
    var $replaceChars = function (chr) {
        return $specialChars[chr] || "\\u00" + Math.floor(chr.charCodeAt() / 16).toString(16) + (chr.charCodeAt() % 16).toString(16)
    };
    $.toJSON = function (o) {
        var s = [];
        switch ($.type(o)) {
            case"undefined":
                return"undefined";
            case"null":
                return"null";
            case"number":
            case"boolean":
            case"date":
            case"function":
                return o.toString();
            case"string":
                return'"' + o.replace(/[\x00-\x1f\\"]/g, $replaceChars) + '"';
            case"array":
                for (var i = 0, l = o.length; i < l; i++) {
                    s.push($.toJSON(o[i]))
                }
                return"[" + s.join(",") + "]";
            case"error":
            case"object":
                for (var p in o) {
                    s.push(p + ":" + $.toJSON(o[p]))
                }
                return"{" + s.join(",") + "}";
            default:
                return""
        }
    };
    $.evalJSON = function (s) {
        if ($.type(s) != "string" || !s.length) {
            return null
        }
        return eval("(" + s + ")")
    }
})(jQuery);
var Inntwo = window.Inntwo = Inntwo || {};
var callBack = function () {
};
Inntwo.Ajax = function (d, c, a, b) {
    if (!b) {
        b = {}
    }
    if (b.hasOwnProperty("async") == false) {
        b.async = "true"
    }
    if (b.hasOwnProperty("type") == false) {
        b.type = "post"
    }
    if (b.hasOwnProperty("cache") == false) {
        b.cache = true
    }
    if (b.hasOwnProperty("dataType") == false) {
        b.dataType = "json"
    }
    if (!a) {
        a = function () {
        }
    }
    $.ajax({type: b.type, url: d, async: b.async, data: c, cache: b.cache, timeout: 60000, dataType: b.dataType, beforeSend: b.hasOwnProperty("before") == false ? function () {
    } : b.before, success: function (g) {
        if (!!g) {
            try {
                if (!!g.Type && g.Type == "string") {
                    g = g.Str
                }
            } catch (f) {
            }
        }
        a(g)
    }})
};
Inntwo.Utils = {GetRandomUrl: function (a) {
    if (a.indexOf("?") > 0) {
        return a + "&r=" + Math.random()
    } else {
        return a + "?r=" + Math.random()
    }
}, Open: function (a) {
    window.open(a)
}, Redirect: function (a) {
    window.location.href = a;
    if (window.event) {
        window.event.returnValue = false
    } else {
        event.preventDefault()
    }
}, GetCookie: function (b) {
    var c = document.cookie.indexOf(b);
    var a = document.cookie.indexOf(";", c);
    return c == -1 ? "" : unescape(document.cookie.substring(c + b.length + 1, (a > c ? a : document.cookie.length)))
}, SetCookie: function (a, b, c) {
    if (!c) {
        c = {path: "/"}
    }
    $.cookie(a, b, c)
}, RemoveCookie: function (a) {
    $.cookie(a, null)
}, GetUrlParam: function (a) {
    var c = new RegExp("(^|&)" + a + "=([^&]*)(&|$)");
    var b = window.location.search.substr(1).match(c);
    if (b != null) {
        return unescape(b[2])
    }
    return null
}, GetUrlParam2: function (d) {
    var g = location.href;
    var e = g.substring(g.indexOf("?") + 1, g.length).split("&");
    var c = {};
    var b;
    for (var a = 0; b = e[a]; a++) {
        c[b.substring(0, b.indexOf("=")).toLowerCase()] = b.substring(b.indexOf("=") + 1, b.length)
    }
    var f = c[d.toLowerCase()];
    if (typeof(f) == "undefined") {
        return""
    } else {
        return f
    }
}, SetUrlParam: function (b, e, d) {
    d = d ? d : window.location.href;
    var c = new RegExp("(^|&|\\?)" + b + "=([^&]*)(&|$)", "ig");
    var a = d.match(c);
    if (a) {
        return(d.replace(c, function (f, g, h, j) {
            if (e == undefined || e.isNullOrWhiteSpace()) {
                return g == "?" ? g : j
            } else {
                return(f.replace(h, e))
            }
        }))
    } else {
        if (e == undefined || e.toString().isNullOrWhiteSpace()) {
            return d
        } else {
            if (d.indexOf("?") == -1) {
                return(d + "?" + b + "=" + e)
            } else {
                return(d + "&" + b + "=" + e)
            }
        }
    }
}, SetOnKeyUp: function (b, a) {
    a = jQuery.extend({call: function () {
        return false
    }, params: -1}, a || {});
    $(b).live("focus", function () {
        document.onkeyup = c;
        function c(d) {
            var f;
            if (navigator.appName == "Microsoft Internet Explorer") {
                f = event.keyCode
            } else {
                f = d.which
            }
            if (f == 13) {
                if (a.params > 0) {
                    a.call(a.params)
                } else {
                    a.call()
                }
            }
        }
    });
    $(b).live("blur", function () {
        document.onkeyup = c;
        function c() {
            return false
        }
    })
}, ToDate: function (a) {
    return a == null ? null : a.toDate().pattern("yyyy/MM/dd")
}, ToDateTime: function (a) {
    return a == null ? null : a.toDate().pattern("yyyy/MM/dd hh:mm:ss")
}, GetRadioValue: function (a) {
    var b;
    $("input[name='" + a + "']").each(function () {
        if ($(this).attr("checked") == "checked") {
            b = $(this).val()
        }
    });
    return b
}, SetRadioValue: function (a, b) {
    $("input[name='" + a + "']").each(function () {
        if ($(this).val() == b) {
            $(this).attr("checked", true)
        }
    })
}, ChangeRadioValue: function (a, b) {
    $("input[name='" + a + "']").each(function () {
        if ($(this).val() == b) {
            $(this).attr("checked")
        }
    })
}, GetAbsUrl: function (b) {
    var a = b.split("?");
    return a[0]
}, GetCheckBox: function (c, a) {
    var b = new Array();
    $(c).each(function () {
        if (a) {
            b[b.length] = $(this).attr(a)
        } else {
            b[b.length] = $(this).val()
        }
    });
    return b
}};
function LimitInputIsNumber() {
    var a = window.event.keyCode;
    if ((a == 46) || (a == 8) || (a >= 48 && a <= 57) || (a >= 96 && a <= 105) || (a >= 37 && a <= 40)) {
    } else {
        if (a == 13) {
            window.event.keyCode = 9
        } else {
            window.event.returnValue = false
        }
    }
}
Inntwo.Regexp = {Ismail: function (a) {
    var b = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return b.test(a)
}, IsIdCardNo: function (l) {
    var d = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
    var c, m = [], j, k = 0, g, h = l.length, f = l;
    if ((h != 15) && (h != 18)) {
        return false
    }
    for (var e = 0; e < h; e++) {
        m[e] = f.charAt(e);
        if ((m[e] < "0" || m[e] > "9") && (e != 17)) {
            return false
        } else {
            if (e < 17) {
                m[e] = m[e] * d[e]
            }
        }
    }
    if (h == 18) {
        var b = f.substring(6, 14);
        if (checkDate(b) == false) {
            return false
        }
        for (e = 0; e < 17; e++) {
            k = k + m[e]
        }
        g = 12 - k % 11;
        switch (g) {
            case 10:
                g = "X";
                break;
            case 11:
                g = 0;
                break;
            case 12:
                g = 1;
                break
        }
        if (m[17].toUpperCase() != g) {
            return false
        }
    } else {
        var a = f.substring(6, 12);
        if (checkDate(a) == false) {
            return false
        }
    }
    return true
}, IsPasswd: function (b) {
    var a = /^[a-zA-Z0-9]{6,15}$/;
    if (!a.exec(b)) {
        return false
    }
    return true
}, IsMobile: function (b) {
    var a = /^(13[0-9]|15[012356789]|18[0236789]|14[57]|00852)[0-9]{8}$/;
    return a.test(b)
}, IsChinese: function (b) {
    var a = /^[a-zA-Z\u4E00-\u9FA5]{2,16}$/;
    if (!a.exec(b)) {
        return false
    }
    return true
}, IsEmail: function (b) {
    var a = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    return a.test(b)
}, IsAccount: function (c, a) {
    var b;
    if (a == 30) {
        b = /^[a-zA-Z0-9_\u4e00-\u9fa5]{1,30}$/
    } else {
        if (a == 510) {
            b = /^[a-zA-Z0-9_\u4e00-\u9fa5]{1,510}$/
        }
    }
    return b.test(c)
}, CheckLength: function checkLength(b, a) {
    if (b.value.length > a) {
        b.value = b.value.substring(0, a)
    }
}};
jQuery.validator.addMethod("isEmail", function (c, a) {
    var b = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if (c) {
        c = $.trim(c)
    }
    return this.optional(a) || b.test(c)
}, "邮箱格式错误!");
var ajaxUrl = {};
ajaxUrl.domainUrl = "http://" + document.domain + ":" + document.location.port;
ajaxUrl.CREATETRIPPLAN_DESTINATION_URL = "home/destination";
ajaxUrl.CREATETRIPPLAN_RoadTripper_URL = "home/roadtripper";
ajaxUrl.CREATETRIPPLAN_TripeSchedule_URL = "home/tripschedule";
ajaxUrl.GetSightSpotsByCitiesAndCategories_Url = ajaxUrl.domainUrl + "/findplace/findplaceAbstract/placeabstractinfobycategoriesandcities";
ajaxUrl.GetSightSpotImagesBySightSpotId_Url = ajaxUrl.domainUrl + "/findplace/findplaceAbstract/placeabstracticoimage";
ajaxUrl.GetSightSpotsByPointsAndCategories_Url = ajaxUrl.domainUrl + "/findplace/findplaceAbstract/placeabstractinfobypointsandcategoryies";
ajaxUrl.GetPlaceCategories_Url = ajaxUrl.domainUrl + "/findplace/findplaceabstract/getallplacecategories";
ajaxUrl.GetAllPlaceCategories_Url = ajaxUrl.domainUrl + "/PlaceCategory/AllPlaceCategory";
ajaxUrl.GetPlaceDetails_Url = ajaxUrl.domainUrl + "/FindPlace/Attraction/Details";
ajaxUrl.ValidateUserNameIsExists_Url = "/Passport/usernameisexists";
ajaxUrl.ValidateUserNameIsExistsForget_Url = "/Passport/UserNameIsExistsByForget";
ajaxUrl.ValidateIdentityCode_Url = ajaxUrl.domainUrl + "/util/identitycodevalidate/validateindentitycode";
ajaxUrl.UserLogin_Url = ajaxUrl.domainUrl + "/passport/userlogin";
ajaxUrl.UserRegister_Url = ajaxUrl.domainUrl + "/passport/registeruser";
ajaxUrl.FindDelicacyDetails_Url = ajaxUrl.domainUrl + "/FindPlaceDetails/DelicacyDetails";
ajaxUrl.FindDelicacyComments_Url = ajaxUrl.domainUrl + "/DelicacyComment/DelicacyComment";
ajaxUrl.DelicacyBusiness_Url = ajaxUrl.domainUrl + "/FindPlaceDetails/DelicacyBusinessUrl";
ajaxUrl.FindPlaceDetails_Url = ajaxUrl.domainUrl + "/FindPlaceDetails/FindAttractionDetails";
ajaxUrl.FindAttractionPriceById_Url = ajaxUrl.domainUrl + "/FindPlaceDetails/FindAttractionPriceById";
ajaxUrl.GetHotelDetails_Url = ajaxUrl.domainUrl + "/findplace/hotel/details";
ajaxUrl.HotelCommets_Url = ajaxUrl.domainUrl + "/HotelComment/HotelComment";
ajaxUrl.HotelPricePolicy_Url = ajaxUrl.domainUrl + "/findplace/hotelprice/policy";
ajaxUrl.ItineraryAbsDetails = ajaxUrl.domainUrl + "/trips/itinerary/abstractbyid";
ajaxUrl.GetScheduleById_Url = ajaxUrl.domainUrl + "/Itinerary/ItineraryJsonDetails";
ajaxUrl.CopyItinerary_Url = ajaxUrl.domainUrl + "/ItineraryManagement/CopyItinerary";
ajaxUrl.MyItineraryList_Url = ajaxUrl.domainUrl + "/ItineraryManagement/MyItineraryList";
ajaxUrl.MyItineraryDetails_Url = ajaxUrl.domainUrl + "/trips/Itinerary/details";
ajaxUrl.SaveItinery_Url = ajaxUrl.domainUrl + "/myHome/itinerarymanagement/saveitinerary";
ajaxUrl.SchedulePublish_Url = ajaxUrl.domainUrl + "/myhome/itinerarymanagement/PublishItinerary";
ajaxUrl.ItineraryPublish_Url = ajaxUrl.domainUrl + "/ItineraryManagement/PublishItinerary";
ajaxUrl.UpdateItineraryPublish_Url = ajaxUrl.domainUrl + "/ItineraryManagement/UpdateItineraryPublish";
ajaxUrl.CancelSchedulePublish_Url = ajaxUrl.domainUrl + "/myhome/itinerarymanagement/CancelPublishIteinerary";
ajaxUrl.DeleteItineraryAndAbs_Url = ajaxUrl.domainUrl + "/ItineraryManagement/DeleteItineraryAndAbs";
ajaxUrl.DeleteItineraryTravelImages_Url = ajaxUrl.domainUrl + "/myhome/itinerarymanagement/deleteitineraryimage";
ajaxUrl.IdentityCodeGeneration_Url = ajaxUrl.domainUrl + "/util/IdentityCodeValidate/LoadIdentityCode";
ajaxUrl.SendSchduleMail_Url = ajaxUrl.domainUrl + "/Trips/Itinerary/TripSchduleSendMail";
ajaxUrl.SendActivedEmail_Url = "/passport/RepeatSendActiveMail";
ajaxUrl.RecommendAttractionAbstractInfoByPoints_Url = ajaxUrl.domainUrl + "/findplaceabstract/recommendattractionabstractinfobypoints/";
ajaxUrl.loaddingImageUrl = ajaxUrl.domainUrl + "/Images/asset2/CreateRoutLoading.gif";
ajaxUrl.ForgetSendEmail_Url = ajaxUrl.domainUrl + "/passport/SendResetPasswordUrlToEmail";
ajaxUrl.AttractionComment_Url = ajaxUrl.domainUrl + "/comment/AttractionComment/AttarctionComments";
ajaxUrl.GetNearAttractionByPoint = ajaxUrl.domainUrl + "/findplace/moreplace/{0}/{1}";
ajaxUrl.IsLogined = ajaxUrl.domainUrl + "/passport/IsLogined?now=" + new Date();
ajaxUrl.previewItineraryList = ajaxUrl.domainUrl + "/itinerary/ExportItineraryList";
ajaxUrl.exportItineraryExcel = ajaxUrl.domainUrl + "/Itinerary/LoadExcelFile";
ajaxUrl.myCustomizes_Url = ajaxUrl.domainUrl + "/MyCustomize/CustomizesInfoJson";
ajaxUrl.GetAllProvince_Url = ajaxUrl.domainUrl + "/PlaceCategory/Provinces";
ajaxUrl.GetProvincesOfCity_Url = ajaxUrl.domainUrl + "/PlaceCategory/ProvincesOfCity";
ajaxUrl.GetItineraryAbstract_Url = ajaxUrl.domainUrl + "/Itinerary/GetItineraryAbstract";
ajaxUrl.ItineraryComment_Url = ajaxUrl.domainUrl + "/ItineraryComment/GetCommentByItineraryId";
ajaxUrl.ItineraryComments_Url = ajaxUrl.domainUrl + "/ItineraryComment/GetCommentByItineraryIds";
ajaxUrl.SubmitItineraryComment_Url = ajaxUrl.domainUrl + "/ItineraryComment/CreateItineraryComment";
ajaxUrl.ItineraryAbstractInfoByPlace_Url = ajaxUrl.domainUrl + "/Itinerary/ItineraryAbstractInfoByPlace";
ajaxUrl.ItineraryDetails_Url = ajaxUrl.domainUrl + "/trips/details/";
ajaxUrl.ItineraryEditor_Url = ajaxUrl.domainUrl + "/createitinerary/console/";
ajaxUrl.NearbyAttractions_Url = ajaxUrl.domainUrl + "/FindPlaceAbstract/NearByPointAttractionList/";
ajaxUrl.GetSnapshotBySeqId_Url = ajaxUrl.domainUrl + "/SnapShotDetails/SnapShotJson/";
ajaxUrl.NearbyDelicious_Url = ajaxUrl.domainUrl + "/findplace/delicious/";
ajaxUrl.QueryRoadEvents_Url = ajaxUrl.domainUrl + "/RoadEvent/RoadEvents/";
ajaxUrl.ItineraryProfile_Url = ajaxUrl.domainUrl + "/ItineraryProfile/GetItineraryProfile";
ajaxUrl.saveItineraryLook_Url = ajaxUrl.domainUrl + "/ItineraryProfile/TickItineraryPv";
ajaxUrl.saveItineraryCopy_Url = ajaxUrl.domainUrl + "/ItineraryProfile/TickItineraryCopyTotal";
ajaxUrl.saveItineraryReview_Url = ajaxUrl.domainUrl + "/ItineraryProfile/TickItineraryCommentTotal";
ajaxUrl.getSystemMessage_Url = ajaxUrl.domainUrl + "/myhome/systemmessage";
ajaxUrl.getUserAdvise = ajaxUrl.domainUrl + "/Profile/GetAdvise";
ajaxUrl.getUserCredit = ajaxUrl.domainUrl + "/Profile/GetUserCredit";
ajaxUrl.getCreditTotal = ajaxUrl.domainUrl + "/Profile/GetCreditTotal";
ajaxUrl.userUnreadCount_Url = ajaxUrl.domainUrl + "/Notification/GetUserUnreadInfoCount";
ajaxUrl.updateItineraryStatus = ajaxUrl.domainUrl + "/ItineraryManagement/UpdateItineraryStatus";
ajaxUrl.sendPrivateMessage_Url = ajaxUrl.domainUrl + "/UserMessage/SendUserMessage";
ajaxUrl.getUserSessions_Url = ajaxUrl.domainUrl + "/UserMessage/UserMessageSessions";
ajaxUrl.getPrivateMessages_Url = ajaxUrl.domainUrl + "/UserMessage/MessageDetails";
ajaxUrl.deleteUserMessagesSession_Url = ajaxUrl.domainUrl + "/UserMessage/DeleteUserMessagesSession";
ajaxUrl.ItineraryPdfLink_Url = ajaxUrl.domainUrl + "/ItineraryManagement/PdfLink";
ajaxUrl.exportItineraryPdf_Url = ajaxUrl.domainUrl + "/Itinerary/ExportItineraryPdf";
ajaxUrl.attractionWeiboDetails_Url = ajaxUrl.domainUrl + "/FindPlaceDetails/AttractionWeiboDetails";
ajaxUrl.attractionWeiboTotal_Url = ajaxUrl.domainUrl + "/FindPlaceDetails/AttractionWeiboTotal";
ajaxUrl.getWeather_Url = ajaxUrl.domainUrl + "/BaiduResolver/GetWeather";
ajaxUrl.getDistanceDuration_Url = ajaxUrl.domainUrl + "/BaiduResolver/GetDirection";
ajaxUrl.getItineraryInvite_Url = ajaxUrl.domainUrl + "/ItineraryManagement/GenerateItineraryInviteUrl";
ajaxUrl.acceptInvitePartner_Url = ajaxUrl.domainUrl + "/myhome/myitinerary/acceptinvite/";
ajaxUrl.getPartnersByItineraryId_Url = ajaxUrl.domainUrl + "/myhome/myitinerary/itinerarypartners/{0}";
ajaxUrl.removeItineraryPartner_Url = ajaxUrl.domainUrl + "/myhome/myitinerary/RemoveInvitedPartner/{0}/{1}";
ajaxUrl.updateInviteUrlStatus_Url = ajaxUrl.domainUrl + "/ItineraryManagement/UpdateItineraryInviteUrl";
ajaxUrl.getActivityCreate_Url = ajaxUrl.domainUrl + "/Activity/GetActivityCreate";
ajaxUrl.getActivityJoin_Url = ajaxUrl.domainUrl + "/Activity/GetActivityJoin";
ajaxUrl.joinActivity_Url = ajaxUrl.domainUrl + "/Activity/UserJoinActivity";
ajaxUrl.activityEdit_Url = ajaxUrl.domainUrl + "/Activity/ActivityEdit";
ajaxUrl.activityStageEdit_Url = ajaxUrl.domainUrl + "/Activity/ActivityStageEdit";
ajaxUrl.lastedActivities_Url = ajaxUrl.domainUrl + "/TripActivity/LastedTripActivities";
ajaxUrl.getActivityByItinerary_Url = ajaxUrl.domainUrl + "/TripActivity/GetActivityByItinerary";
ajaxUrl.getMyActivities_Url = ajaxUrl.domainUrl + "/Activity/GetActivityCreate";
ajaxUrl.getMyJoinedActivities_Url = ajaxUrl.domainUrl + "/Activity/GetActivityJoin";
ajaxUrl.getActivityPartners_Url = ajaxUrl.domainUrl + "/TripActivity/ActivityPartner";
ajaxUrl.removeActivityPartner_Url = ajaxUrl.domainUrl + "/Activity/RemoveActivityPartner";
ajaxUrl.getStageImageByAlbumsId_Url = ajaxUrl.domainUrl + "/Activity/GetStageImageByAlbumsId";
ajaxUrl.getActivityDetails_Url = ajaxUrl.domainUrl + "/TripActivity/ActivityDetails";
ajaxUrl.updateItineraryPush_Url = ajaxUrl.domainUrl + "/ItineraryManagement/ItineraryUpdatePush";
ajaxUrl.activityPartnerJoinPush_Url = ajaxUrl.domainUrl + "/Activity/PartnerChangePush";
ajaxUrl.refreshRegisterTotal_Url = ajaxUrl.domainUrl + "/TripActivity/RefreshRegisterTotal";
ajaxUrl.validateReserveActivity_Url = ajaxUrl.domainUrl + "/Activity/ValidateApplyActivity";
ajaxUrl.getActivityStagesByActivityId_Url = ajaxUrl.domainUrl + "/TripActivity/GetActivityStageByActivityId";
ajaxUrl.saveActivityAlbum_Url = ajaxUrl.domainUrl + "/Activity/SaveActivityAlbum";
ajaxUrl.getActivitySchedules_Url = ajaxUrl.domainUrl + "/Activity/GetActivitySchedules";
ajaxUrl.getActivityStageStatus_Url = ajaxUrl.domainUrl + "/TripActivity/ActivityStageStatus";
ajaxUrl.updateActivityStageStatus_Url = ajaxUrl.domainUrl + "/Activity/ModifyActivityStageStatus";
ajaxUrl.removeActivityStage_Url = ajaxUrl.domainUrl + "/Activity/RemoveActivityStage";
ajaxUrl.syncActivityItinerary_Url = ajaxUrl.domainUrl + "/Activity/SyncActivityItinerary";
ajaxUrl.removeActivity_Url = ajaxUrl.domainUrl + "/Activity/RemoveActivity";
ajaxUrl.destinationSearchSuggestion_Url = ajaxUrl.domainUrl + "/Common/SearchSuggestion";
ajaxUrl.getEasemobUserInfoByUseId_Url = ajaxUrl.domainUrl + "/Common/GetEasemobUserInfoByUseId";
ajaxUrl.getUseInfoByEasemobId_Url = ajaxUrl.domainUrl + "/Common/GetUseInfoByEasemobId";
ajaxUrl.getMobileTourismDetailsInfo_Url = ajaxUrl.domainUrl + "/MobileTourism/GetTourismDetailsInfo";
ajaxUrl.sumitWapFreeOrder_Url = ajaxUrl.domainUrl + "/MobileTourism/SumitFreeOrder";
ajaxUrl.getTourismDetailsInfo_Url = ajaxUrl.domainUrl + "/tourismdetails/gettourismdetailsinfo";
ajaxUrl.sumitOrder_Url = ajaxUrl.domainUrl + "/Myorders/SumitOrder";
ajaxUrl.getUserOrder_Url = ajaxUrl.domainUrl + "/Myorders/GetUserOrder";
ajaxUrl.tourismSearchResult_Url = ajaxUrl.domainUrl + "/TourismSearchResult/TourismSearchResult";
ajaxUrl.tourismList_Url = ajaxUrl.domainUrl + "/Tourism/TourismList";
ajaxUrl.sumitFreeOrder_Url = ajaxUrl.domainUrl + "/tourismdetails/sumitfreeorder";
ajaxUrl.getLastedItineraries_Url = ajaxUrl.domainUrl + "/Itinerary/LastedPublishItineraries";
var templateUrl = {};
templateUrl.version = "1.332";
templateUrl.mainTemplate = {};
templateUrl.mainTemplate.Url = "/Template/inntwo-main-template.txt?v=" + templateUrl.version;
templateUrl.mainTemplate.placeOverlaySelector = "#placeMarkerMessageBox";
templateUrl.mainTemplate.hotelOverlaySelector = "#hotelMarkerMessageBox";
templateUrl.mainTemplate.cityMarkerOverlayUrl = "#cityMarkerMessageBox";
templateUrl.mainTemplate.firstGuidance = "#firstGuidance";
templateUrl.mainTemplate.addOverlayToSchedule = "#addOverlayToSchedule";
templateUrl.mainTemplate.addChannelPanel = "#createRouteItemChannelControl";
templateUrl.mainTemplate.nearAttractionByPoint = "#nearAttractionByPoint";
templateUrl.mainTemplate.nearHotelsByPoint = "#nearHotelsByPoint";
templateUrl.tripDetailsTemplate = {};
templateUrl.tripDetailsTemplate.Url = "/Template/inntwo-schedule-details-template.txt?v=" + templateUrl.version;
templateUrl.tripDetailsTemplate.customImageTravel = "#customTravelImageTemplate";
templateUrl.tripDetailsTemplate.customWordTravel = "#customTravelCleanWordTemplate";
templateUrl.tripDetailsTemplate.tripPictureWordShower = "#tripPictureWordShowerTemplate";
templateUrl.tripDetailsTemplate.travelEditorTemplate = "#travelEditorTemplate";
templateUrl.hotelOrderCancel = {};
templateUrl.hotelOrderCancel.Url = "/Template/inntwo-hotel-cancel-order-template.txt?v=" + templateUrl.version;
templateUrl.hotelOrderCancel.myHotelOrderCancel = "#cancelHotelOrderTemplate";
var InnTwoTools = {};
InnTwoTools.inntwoModal = function (d, g, c, j, k) {
    if (typeof(closeLoading) != "undefined" && closeLoading) {
        clearInterval(closeLoading)
    }
    this.CloseMapContainerPopupLucentLayer();
    var b = $(c).width();
    var a = $(c).height();
    var n = $(window).height();
    var m = a;
    if (a < n) {
        m = n
    }
    $(c).css({position: "relative"});
    var l = "<div class='trans_lucent_control' style='background-image:url(/Images/asset2/translucent.png);width:100%;max-height:" + m + "px;height:" + m + "px;overflow-y:auto;position:absolute;z-index:100003;top:0;left:0;display:none;'></div>";
    $(".trans_lucent_control").remove();
    $(c).append(l);
    var e = InnTwoTools.outerHTML(d);
    $(g).remove();
    $(".trans_lucent_control").html(e);
    $(d).show();
    $(".trans_lucent_control").show();
    var h = $(g).width();
    var f = $(g).height();
    $(g).css({margin: (n - f) / 2 + "px 0 0 " + (b - h) / 2 + "px", display: "block", position: "fixed"});
    if (j) {
        $(g).click(function (o) {
            o.stopPropagation()
        });
        $(".trans_lucent_control").click(function () {
            InnTwoTools.CloseMapContainerPopupLucentLayer();
            if (typeof(k) != "undefined" && k) {
                k()
            }
        })
    }
};
InnTwoTools.format = function () {
    if (arguments.length == 0) {
        return null
    }
    var c = arguments[0];
    for (var a = 1; a < arguments.length; a++) {
        var b = new RegExp("\\{" + (a - 1) + "\\}", "gm");
        c = c.replace(b, arguments[a])
    }
    return c
};
InnTwoTools.CloseMapContainerPopupLucentLayer = function () {
    $("body").unbind("keyup");
    var a = $(".trans_lucent_control");
    if (a.length > 0) {
        $(a).remove()
    }
};
InnTwoTools.MapLoading = function () {
    var a = "<img src='Images/asset2/CreateRoutLoading.gif' class='crete_route_loadimg' />";
    InnTwoTools.inntwoModal(a, ".crete_route_loadimg", "#container_right", false)
};
InnTwoTools.FullScreenLoading = function () {
    var a = "<img src='/Images/asset2/CreateRoutLoading.gif' class='crete_route_loadimg' />";
    InnTwoTools.inntwoModal(a, ".crete_route_loadimg", "body", false);
    $("body").keyup(function (b) {
        if (b.keyCode == 27) {
            InnTwoTools.CloseMapContainerPopupLucentLayer()
        }
    })
};
InnTwoTools.SetBorerTwoPx = function (a) {
    $(a).focus(function () {
        $(this).css({border: "2px solid #C4DD4B"})
    }).blur(function () {
        $(this).css({border: "1px solid #C3C3C1"})
    })
};
InnTwoTools.Alert = function (d, c) {
    if (typeof d === "string" && d) {
        var a = {};
        a.message = d;
        var b = $("#templateAlertHtmlContainer").html();
        b = Mustache.render(b, a);
        $("body").append(b);
        $(".alert-message-message").text(d);
        InnTwoTools.inntwoModal(".alert-message-container", ".alert-message-container", "body", false);
        $(".alert-message-button").click(function () {
            InnTwoTools.CloseMapContainerPopupLucentLayer();
            if (c) {
                c()
            }
        })
    }
};
InnTwoTools.Confirm = function (c) {
    $(".confirm-message-container").remove();
    var a = {};
    a.message = c.message;
    a.neverNotify = typeof c.neverNotify === "undefined" ? false : c.neverNotify;
    if (typeof c.isOrIsnt !== "undefined") {
        a.isOrIsnt = c.isOrIsnt
    }
    var b = $("#templateConfirmHtmlContainer").html();
    b = Mustache.render(b, a);
    $("body").append(b);
    InnTwoTools.inntwoModal(".confirm-message-container", ".confirm-message-container", "body", false);
    $(".confirm-true-button").click(function () {
        var d = false;
        if (a.neverNotify) {
            d = document.getElementById("neverNotifyChecked").checked
        }
        InnTwoTools.CloseMapContainerPopupLucentLayer();
        if (c.trueMethod) {
            c.trueMethod({neverNotify: d})
        }
    });
    $(".confirm-false-button").click(function () {
        var d = false;
        if (a.neverNotify) {
            d = document.getElementById("neverNotifyChecked").checked
        }
        InnTwoTools.CloseMapContainerPopupLucentLayer();
        if (c.falseMethod) {
            c.falseMethod({neverNotify: d})
        }
    })
};
InnTwoTools.AppendJqueryValidateIdCard = function () {
    jQuery.validator.addMethod("isIdCardNo", function (e, d) {
        return this.optional(d) || c(e)
    }, "请正确输入您的身份证号码");
    function c(m) {
        var f = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
        var n = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
        var o = new Array();
        var l = 0;
        var j;
        var k = m.length;
        var h = m;
        if ((k != 15) && (k != 18)) {
            return false
        }
        for (g = 0; g < k; g++) {
            o[g] = h.charAt(g);
            if ((o[g] < "0" || o[g] > "9") && (g != 17)) {
                return false
            } else {
                if (g < 17) {
                    o[g] = o[g] * f[g]
                }
            }
        }
        if (k == 18) {
            var e = h.substring(6, 14);
            if (b(e) == false) {
                return false
            }
            for (var g = 0; g < 17; g++) {
                l = l + o[g]
            }
            j = n[l % 11];
            if (o[17] != j) {
                return false
            }
        } else {
            var d = h.substring(6, 12);
            if (a(d) == false) {
                return false
            }
        }
        return true
    }

    function a(e) {
        if (!/^[0-9]{6}$/.test(e)) {
            return false
        }
        var f, d;
        f = e.substring(0, 4);
        d = e.substring(4, 6);
        if (f < 1700 || f > 2500) {
            return false
        }
        if (d < 1 || d > 12) {
            return false
        }
        return true
    }

    function b(g) {
        if (!/^[0-9]{8}$/.test(g)) {
            return false
        }
        var h, f, d;
        h = g.substring(0, 4);
        f = g.substring(4, 6);
        d = g.substring(6, 8);
        var e = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (h < 1700 || h > 2500) {
            return false
        }
        if (((h % 4 == 0) && (h % 100 != 0)) || (h % 400 == 0)) {
            e[1] = 29
        }
        if (f < 1 || f > 12) {
            return false
        }
        if (d < 1 || d > e[f - 1]) {
            return false
        }
        return true
    }
};
InnTwoTools.inntwoLoadingNotify = function (b) {
    var a = b.message;
    $(b.selector + " > span").html(a);
    if (b.option === "close") {
        $("#notifyText img").show();
        $(b.selector).hide();
        return
    }
    $(b.selector).show()
};
InnTwoTools.createmapLoading = function () {
    InnTwoTools.mapLoadingNotify = function (a) {
        InnTwoTools.inntwoLoadingNotify({message: a.message, selector: "#notifyText", option: a.option})
    };
    $(".close").click(function () {
        InnTwoTools.mapLoadingNotify({option: "close"})
    })
};
InnTwoTools.checkUploadImageFile = function (f) {
    var g = true;
    var a = {};
    var h = window.navigator.userAgent;
    if (h.indexOf("MSIE") >= 1) {
        a.ie = true
    } else {
        if (h.indexOf("Firefox") >= 1) {
            a.firefox = true
        } else {
            if (h.indexOf("Chrome") >= 1) {
                a.chrome = true
            }
        }
    }
    if (a.firefox || a.chrome) {
        var e = f.fileMaxSize;
        var b = $("#" + f.uploadControlId).val();
        var d = new Image();
        d.dynsrc = b;
        if (/^.+\.(gif|jpg|png|bmp)$/i.test(b)) {
            var j = document.getElementById(f.uploadControlId);
            if (typeof j.files !== "undefined") {
            }
            var c = document.getElementById(f.uploadControlId).files[0];
            if (c.size > e) {
                f.overMaxRestrict();
                g = false
            }
        } else {
            f.fileTypeError();
            g = false
        }
    }
    return g
};
InnTwoTools.ClosePlaceDetailsTransLucent = function () {
    $(".trans_lucent_place").remove()
};
InnTwoTools.PopupPlaceDetailsView = function (d, e, c, g) {
    if (typeof(closeLoading) != "undefined" && closeLoading) {
        clearInterval(closeLoading)
    }
    InnTwoTools.ClosePlaceDetailsTransLucent();
    var b = $(c).width();
    var a = $(c).height();
    $(c).css({position: "relative"});
    var j = "<div class='trans_lucent_place' style='background-image:url(/Images/asset2/translucent.png);width:100%;max-height:100%;height:100%;overflow-y:auto;position:absolute;z-index:3;top:0;left:0;display:none;'></div>";
    $(c).append(j);
    $(".trans_lucent_place").append($(d));
    $(".trans_lucent_place").show();
    $(d).show();
    var f = $(e).width();
    var h = (90 / 978) * a;
    $(e).css({margin: h + "px 0 0 " + (b - f) / 2 + "px"});
    if (g) {
        window.closeLoading = setTimeout(InnTwoTools.CloseMapContainerPopupLucentLayer, 10000)
    } else {
        if (typeof(closeLoading) != "undefined" && closeLoading) {
            clearInterval(closeLoading)
        }
    }
};
InnTwoTools.getElementsByClassName = function (f, a, b) {
    if (!b) {
        b = document
    }
    if (typeof(b.getElementsByClassName) != "undefined" && b.getElementsByClassName) {
        return b.getElementsByClassName(a)
    } else {
        var c = b.getElementsByTagName(f), e = [];
        for (var d = 0; d < c.length; d++) {
            if (InnTwoTools.hasClass(c[d], a)) {
                e.push(c[d])
            }
        }
        return e
    }
};
InnTwoTools.hasClass = function (d, b) {
    var a = d.className.split(/\s+/);
    for (var c = 0; c < a.length; c++) {
        if (a[c] == b) {
            return true
        }
    }
    return false
};
InnTwoTools.postOpenWindow = function openWindow(h, b) {
    var e = '<form name="tempForm" action="' + h + '" method="post" style="display:none">';
    var d = "</form>";
    var f = '<input type="text" name="hotelName" value="' + b + '" />';
    var g = '<script type="text/javascript">document.tempForm.submit();</script>';
    var a = new Array();
    a.push("<h3>请稍等...</h3>");
    a.push(e);
    a.push(f);
    a.push(d);
    a.push(g);
    var c = window.open("");
    c.document.write(a.join(""));
    return c
};
InnTwoTools.getIdentifyStringByDate = function () {
    var a = new Date();
    return InnTwoTools.format("{0}{1}{2}{3}{4}{5}{6}", a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds())
};
InnTwoTools.ChangeDateFormat = function (a) {
    if (a.indexOf("-") > -1) {
        return a
    }
    var c = new Date(parseInt(a.replace("/Date(", "").replace(")/", ""), 10));
    var d = c.getMonth();
    d++;
    var e = d < 10 ? "0" + (d) : d;
    var b = c.getDate() < 10 ? "0" + c.getDate() : c.getDate();
    return c.getFullYear() + "-" + e + "-" + b
};
InnTwoTools.ChangeMyDateFormat = function (a) {
    if (a.indexOf("-") > -1) {
        return a
    }
    var c = new Date(parseInt(a.replace("/Date(", "").replace(")/", ""), 10));
    var f = c.getMonth();
    f++;
    var k = f < 10 ? "0" + (f) : f;
    var d = c.getHours();
    var h = d < 10 ? "0" + (d) : d;
    var e = c.getMinutes();
    var j = e < 10 ? "0" + (e) : e;
    var g = c.getSeconds();
    var l = g < 10 ? "0" + (g) : g;
    var b = c.getDate() < 10 ? "0" + c.getDate() : c.getDate();
    return c.getFullYear() + "-" + k + "-" + b + " " + h + ":" + j + ":" + l
};
InnTwoTools.CalculateDateCount = function (h, f) {
    if (!h || !f) {
        return -1
    }
    var d = h.split("-");
    var e = new Date(d[0], (Number(d[1]) - 1), d[2]);
    var b = f.split("-");
    var c = new Date(b[0], (Number(b[1]) - 1), b[2]);
    var j = e.valueOf();
    var g = c.valueOf();
    var k = g - j;
    var a = k / 1000 / 60 / 60 / 24;
    return Math.floor(a)
};
InnTwoTools.getNowDateStr = function (a) {
    var c;
    if (typeof a === "undefined" || !a) {
        c = new Date()
    } else {
        c = a
    }
    var e = c.getFullYear();
    var d = c.getMonth() + 1;
    var b = c.getDate();
    if (d < 10) {
        d = "0" + d
    }
    if (b < 10) {
        b = "0" + b
    }
    return e + "-" + d + "-" + b
};
InnTwoTools.strConvertToDate = function (b) {
    var a = b.split("-");
    return new Date(a[0], (Number(a[1]) - 1), a[2])
};
InnTwoTools.compareStrDt = function (c, d) {
    var a = c.split("-");
    var g = new Date(a[0], a[1], a[2]);
    var h = g.getTime();
    var b = d.split("-");
    var e = new Date(b[0], b[1], b[2]);
    var f = e.getTime();
    if (h > f) {
        return 1
    }
    if (h == f) {
        return 0
    } else {
        return -1
    }
};
InnTwoTools.DateAddday = function (c, b) {
    var e = c.split("-");
    var d = new Date(e[0], (Number(e[1]) - 1), e[2]);
    var g = new Date(d.valueOf() + b * 24 * 60 * 60 * 1000);
    var f = (g.getMonth() + 1);
    if (f < 10) {
        f = "0" + f
    }
    var a = g.getDate();
    if (a < 10) {
        a = "0" + a
    }
    return g.getFullYear() + "-" + f + "-" + a
};
InnTwoTools.amountDisDur = function (a, b, d) {
    var c = InnTwoTools.dateFormat(b);
    if (d) {
        return{dis: (a / 1000).toFixed(1), dur: c}
    }
    return InnTwoTools.format("{0}公里,{1}", (a / 1000).toFixed(1), c)
};
InnTwoTools.dateFormat = function (c) {
    var a = "";
    var b, d, e;
    b = Math.floor(c / 60 / 60 / 24);
    if (b > 0) {
        a = b + "天"
    }
    d = c - b * 24 * 60 * 60;
    if (d > 0) {
        d = Math.floor(d / 60 / 60);
        if (d > 0) {
            a += d + "小时"
        }
    }
    e = c - b * 24 * 60 * 60 - d * 60 * 60;
    if (e > 0) {
        e = Math.ceil(e / 60);
        if (e > 0) {
            a += e + "分钟"
        }
    }
    return a
};
InnTwoTools.outerHTML = function outerHtml(a) {
    var b = $("<div></div>").append($(a));
    return $(b).html()
};
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
InnTwoTools.base64EncodeChars = function (g) {
    var f, d, e;
    var a, b, c;
    e = g.length;
    d = 0;
    f = "";
    while (d < e) {
        a = g.charCodeAt(d++) & 255;
        if (d == e) {
            f += base64EncodeChars.charAt(a >> 2);
            f += base64EncodeChars.charAt((a & 3) << 4);
            f += "==";
            break
        }
        b = g.charCodeAt(d++);
        if (d == e) {
            f += base64EncodeChars.charAt(a >> 2);
            f += base64EncodeChars.charAt(((a & 3) << 4) | ((b & 240) >> 4));
            f += base64EncodeChars.charAt((b & 15) << 2);
            f += "=";
            break
        }
        c = g.charCodeAt(d++);
        f += base64EncodeChars.charAt(a >> 2);
        f += base64EncodeChars.charAt(((a & 3) << 4) | ((b & 240) >> 4));
        f += base64EncodeChars.charAt(((b & 15) << 2) | ((c & 192) >> 6));
        f += base64EncodeChars.charAt(c & 63)
    }
    return f
};
InnTwoTools.base64Decode = function (h) {
    var a, b, c, d;
    var e, f, g;
    f = h.length;
    e = 0;
    g = "";
    while (e < f) {
        do {
            a = base64DecodeChars[h.charCodeAt(e++) & 255]
        } while (e < f && a == -1);
        if (a == -1) {
            break
        }
        do {
            b = base64DecodeChars[h.charCodeAt(e++) & 255]
        } while (e < f && b == -1);
        if (b == -1) {
            break
        }
        g += String.fromCharCode((a << 2) | ((b & 48) >> 4));
        do {
            c = h.charCodeAt(e++) & 255;
            if (c == 61) {
                return g
            }
            c = base64DecodeChars[c]
        } while (e < f && c == -1);
        if (c == -1) {
            break
        }
        g += String.fromCharCode(((b & 15) << 4) | ((c & 60) >> 2));
        do {
            d = h.charCodeAt(e++) & 255;
            if (d == 61) {
                return g
            }
            d = base64DecodeChars[d]
        } while (e < f && d == -1);
        if (d == -1) {
            break
        }
        g += String.fromCharCode(((c & 3) << 6) | d)
    }
    return g
};
InnTwoTools.utf16to8 = function (f) {
    var e, b, d, a;
    e = "";
    d = f.length;
    for (b = 0; b < d; b++) {
        a = f.charCodeAt(b);
        if ((a >= 1) && (a <= 127)) {
            e += f.charAt(b)
        } else {
            if (a > 2047) {
                e += String.fromCharCode(224 | ((a >> 12) & 15));
                e += String.fromCharCode(128 | ((a >> 6) & 63));
                e += String.fromCharCode(128 | ((a >> 0) & 63))
            } else {
                e += String.fromCharCode(192 | ((a >> 6) & 31));
                e += String.fromCharCode(128 | ((a >> 0) & 63))
            }
        }
    }
    return e
};
InnTwoTools.utf8to16 = function (h) {
    var g, e, f, a;
    var b, d;
    g = "";
    f = h.length;
    e = 0;
    while (e < f) {
        a = h.charCodeAt(e++);
        switch (a >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                g += h.charAt(e - 1);
                break;
            case 12:
            case 13:
                b = h.charCodeAt(e++);
                g += String.fromCharCode(((a & 31) << 6) | (b & 63));
                break;
            case 14:
                b = h.charCodeAt(e++);
                d = h.charCodeAt(e++);
                g += String.fromCharCode(((a & 15) << 12) | ((b & 63) << 6) | ((d & 63) << 0));
                break
        }
    }
    return g
};
InnTwoTools.MessagePush = function (a) {
    $._messengerDefaults = {extraClasses: "messenger-fixed messenger-theme-air messenger-on-top"};
    $.globalMessenger().post({message: a, type: "success", showCloseButton: true, hideAfter: 100})
};
InnTwoTools.NotifyLoading = function (b) {
    var a = b.message || "正在努力加载中...";
    var c = b.selector;
    $(c).append(a);
    $(c).alert()
};
function optionAction(b, a) {
    if (b == null) {
        InnTwoTools.Alert(a.Message)
    } else {
        b()
    }
}
InnTwoTools.JsonDataCallback = function (c) {
    var a = c.data;
    var b;
    if (typeof(c.optionAction) == "undefined") {
        b = optionAction
    } else {
        b = c.optionAction
    }
    if (a == undefined) {
        if (c.notFound != undefined) {
            c.notFound()
        }
        return
    }
    switch (a.Flag) {
        case -5:
            if (c.nonActivated) {
                c.nonActivated()
            } else {
                b(c.nonActivated, a)
            }
            break;
        case -4:
            if (c.systemException) {
                c.systemException()
            } else {
                b(c.systemException, a)
            }
            break;
        case -3:
            if (c.unAuthorize) {
                c.unAuthorize()
            }
            break;
        case -2:
            if (c.notFound) {
                c.notFound()
            } else {
                b(c.notFound, a)
            }
            break;
        case -1:
            if (c.bussinessException) {
                c.bussinessException()
            } else {
                b(c.bussinessException, a)
            }
            break;
        case 0:
            c.success();
            break;
        default:
            c.success()
    }
};
InnTwoTools.setCookies = function (d, e, c) {
    var a = d + "=" + escape(e);
    var b = new Date();
    b.setTime(b.getTime() + c * 24 * 3600 * 1000);
    a = a + "; expires=" + b.toGMTString();
    document.cookie = a
};
InnTwoTools.setCookiesMillisecond = function (d, e, c) {
    var a = d + "=" + escape(e);
    var b = new Date();
    b.setTime(b.getTime() + c);
    a = a + "; expires=" + b.toGMTString();
    document.cookie = a
};
InnTwoTools.getCookies = function (e) {
    var b = "";
    var a = document.cookie;
    if (a === "") {
        return""
    }
    var d = a.split(";");
    for (var c = 0; c < d.length; c++) {
        var f = d[c].split("=");
        if ($.trim(f[0]) == e) {
            b = f[1];
            break
        }
    }
    return b
};
InnTwoTools.clone = function (c) {
    if (typeof(c) != "object") {
        return c
    }
    if (c == null) {
        return c
    }
    var b = new Object();
    for (var a in c) {
        b[a] = InnTwoTools.clone(c[a])
    }
    return b
};
InnTwoTools.ScrollToVerticCenter = function (a, b) {
    $(a).css({position: "relative", overflow: "hidden"});
    $(b).css({position: "absolute", "z-index": "2"});
    this._panlefix = a;
    this._scrollPanel = b
};
InnTwoTools.ScrollToVerticCenter.prototype.ToToped = null;
InnTwoTools.ScrollToVerticCenter.prototype.ToBottomed = null;
InnTwoTools.ScrollToVerticCenter.prototype.RollClickedToCenter = function (l, f, b, d) {
    var j = $(this._scrollPanel).position().top;
    var h = $(this._scrollPanel).height();
    var k = Math.abs(j);
    var g = $(this._panlefix).height();
    var m = $(l).position().top;
    var n = $(l).height();
    n += d;
    var e = m - k;
    var c = Math.floor((g / 2) / n);
    var a = c * n;
    var o = 0;
    if (e > a) {
        o = j - (e - a);
        if ((h - k) <= g) {
            o = j
        }
    }
    if (a >= e) {
        o = j + (a - e);
        if (k <= o) {
            o = 0
        }
    }
    $(this._scrollPanel).animate({top: o + "px"}, 300);
    if (b && f && b != "" && f != "") {
        if (window.priviousRoll) {
            window.priviousRoll.css({"background-color": f})
        }
        $(l).css({"background-color": b});
        window.priviousRoll = $(l)
    }
    if (o == 0) {
        if (this.ToToped) {
            this.ToToped()
        }
    }
    if ((h - k) <= g) {
        if (this.ToBottomed) {
            this.ToBottomed()
        }
    }
};
InnTwoTools.customScrollBar = {};
InnTwoTools.customScrollBar.listenerDrag = function (b, a) {
    var c = b.scrollTop / b.scrollHeight;
    $(a).css({top: b.clientHeight * c + "px"})
};
InnTwoTools.customScrollBar.settleBarSize = function (f, d, c) {
    if (!f || f.clientHeight == 0 || f.scrollHeight == 0) {
        $(c).hide();
        $(d).hide();
        return
    }
    var a = f.clientHeight / f.scrollHeight;
    if (a >= 1) {
        $(c).hide();
        $(d).hide()
    } else {
        $(c).show();
        $(d).show();
        var e = $(d).height();
        var b = a * e;
        $(c).height(b)
    }
};
InnTwoTools.customScrollBar.scrollAndDrag = function (b, a, c, d) {
    $(b).scroll(function () {
        InnTwoTools.customScrollBar.listenerDrag(d, a)
    });
    $(a).draggable({containment: "parent", axis: "y", scroll: false, start: function () {
        $(b).unbind("scroll")
    }, stop: function () {
        $(b).scroll(function () {
            InnTwoTools.customScrollBar.listenerDrag(d, a)
        })
    }, drag: function () {
        var g = $(c).height();
        var e = $(a).position().top;
        var f = e / g;
        var h = d.scrollHeight * f;
        d.scrollTop = h
    }})
};
InnTwoTools.customScrollBar.scroll = function (d, b, a) {
    var c = document.getElementById(d);
    InnTwoTools.customScrollBar.settleBarSize(c, b, a);
    InnTwoTools.customScrollBar.scrollAndDrag(c, a, b, c)
};
var inntwoTemplate = {};
InnTwoTools.getTemplateByMustache = function (a) {
    if (a.url in inntwoTemplate) {
    } else {
        inntwoTemplate[a.url] = $.ajax({url: a.url, async: false}).responseText
    }
    return Mustache.render($(inntwoTemplate[a.url]).find(a.selector).html(), a.json)
};
InnTwoTools.getStaticTemplate = function (a) {
    if (a.url in inntwoTemplate) {
    } else {
        inntwoTemplate[a.url] = $.ajax({url: a.url, async: false}).responseText
    }
    return $(inntwoTemplate[a.url]).find(a.selector).html()
};
InnTwoTools.getQueryStringByName = function (a) {
    var b = location.search.match(new RegExp("[?&]" + a + "=([^&]+)", "i"));
    if (b == null || b.length < 1) {
        return""
    }
    return b[1]
};
InnTwoTools.GetTotalPages = function (b, a) {
    if (b > 0) {
        return Math.ceil(b / a)
    } else {
        return 1
    }
};
InnTwoTools.autoComplateInputInitial = function (c, b, a) {
    $(c).focus(function () {
        if ($.trim($(this).val()) == b) {
            $(this).val("")
        }
    }).blur(function () {
        if ($.trim($(this).val()) == "") {
            a.setInputValue(b)
        }
    })
};
InnTwoTools.IsLogined = function (a) {
    $.ajax({url: ajaxUrl.IsLogined, success: function (b) {
        if (b != "False") {
            a.logined()
        } else {
            a.nonLogin()
        }
    }, type: "post"})
};
InnTwoTools.IsScrollBottom = function (b) {
    b = b || 0;
    var a = $(window).scrollTop() + $(window).height();
    return($(document).height() - a) <= b
};
InnTwoTools.RecommendPlaceStatusNumberConvert = function (a) {
    switch (a) {
        case 0:
            return"处理中";
        case 1:
            return"审核通过";
        case 2:
            return"拒绝";
        case 3:
            return"上线"
    }
    return""
};
InnTwoTools.RecommendPlaceRemarConvert = function (a) {
    switch (a) {
        case"Processing":
            return 0;
        case"Passed":
            return 1;
        case"Reject":
            return 2;
        case"Published":
            return 3
    }
    return 0
};
InnTwoTools.ToUnicode = function (a) {
    return escape(a).toLocaleLowerCase().replace(/%u/gi, "\\u")
};
InnTwoTools.ToGB2312 = function (a) {
    return unescape(a.replace(/\\u/gi, "%u"))
};
InnTwoTools.SeasonConvert = function (a) {
    if (a == 0) {
        return"Spring"
    }
    if (a == 1) {
        return"Summer"
    }
    if (a == 2) {
        return"Autumn"
    }
    if (a == 3) {
        return"Winter"
    }
    return""
};
InnTwoTools.ClearHtmlFromString = function (a) {
    var b = a.replace(/<[^>]+>/g, "");
    return b.replaceAll("&nbsp;", "")
};
InnTwoTools.stickUp = function (d, c, f, g, b, e, a) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > c) {
            $(d).css({position: "fixed", top: f, "z-index": g});
            if (e) {
                e()
            }
        } else {
            $(d).css({position: "relative", top: b});
            if (a) {
                a()
            }
        }
    })
};
InnTwoTools.getGuid = function () {
    function b() {
        return(((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
    }

    var a = (b() + b() + "-" + b() + "-4" + b().substr(0, 3) + "-" + b() + "-" + b() + b() + b()).toLowerCase();
    return a
};
InnTwoTools.inntwoRandom = function (a, c) {
    var b = Math.random() * (c - a) + a;
    b = Math.floor(b);
    return b
};
InnTwoTools.toPrecision = function (h, c, f) {
    var j = h.toFixed(f);
    var e = c++;
    var a = e - j.length;
    if (a > 0) {
        var b = "";
        for (var g = 0; g < a; g++) {
            b += "0"
        }
        return b + j
    } else {
        return j
    }
};
InnTwoTools.onlyInputDouble = function (a) {
    $(a).val($(a).val().replace(/[^\d.]/g, ""));
    $(a).val($(a).val().replace(/^\./g, ""));
    $(a).val($(a).val().replace(/\.{2,}/g, "."));
    var b = $(a).val().replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    $(a).val(b)
};
InnTwoTools.toCountPoiDistance = function (g) {
    if (g.p1 && g.p2) {
        var d = parseFloat(g.p1.lng);
        var c = parseFloat(g.p1.lat);
        var f = parseFloat(g.p2.lng);
        var e = parseFloat(g.p2.lat);
        var b = Math.abs(d - f).toFixed(5);
        var a = Math.abs(c - e).toFixed(5);
        if (b < g.basebit && a < g.basebit) {
            return true
        }
    }
    return false
};
InnTwoTools.isLikenessLngLat = function (a) {
    a.basebit = a.basebit || 0.001;
    return InnTwoTools.toCountPoiDistance(a)
};
String.prototype.replaceAll = function (b, c, a) {
    if (!RegExp.prototype.isPrototypeOf(b)) {
        return this.replace(new RegExp(b, (a ? "gi" : "g")), c)
    } else {
        return this.replace(b, c)
    }
};
String.prototype.getHashCode = function () {
    for (var c = 0, a = 0, b = this.length; a < b; a++) {
        c = (31 * c + this.charCodeAt(a)) << 0
    }
    return c
};
Array.prototype.removeItem = function (a) {
    if (a > -1 && a < this.length) {
        return this.slice(0, a).concat(this.slice(a + 1, this.length))
    }
    return[]
};
Array.prototype.Distinct = function () {
    var a = {};
    var c = this.length;
    for (var b = 0; b < c; b++) {
        a[this[b]] = this[b]
    }
    var d = [];
    for (var e in a) {
        d.push(a[e])
    }
    return d
};
Array.prototype.ComplexDistinct = function (f) {
    var a = [];
    var e = this.length;
    for (var c = 0; c < e; c++) {
        var b = false;
        for (var d = 0; d < a.length; d++) {
            if (this[c][f] == a[d][f]) {
                b = true
            }
        }
        if (!b) {
            a.push(this[c])
        }
    }
    return a
};
Array.prototype.insert = function (b) {
    var a = this.splice(0, b.index);
    var c = this.splice(b.index);
    return a.concat(b.value, c)
};
Array.prototype.indexOf = function (a) {
    var d = this;
    var c = -1;
    for (var b = 0; b < d.length; b++) {
        if (d[b] == a) {
            c = b;
            break
        }
    }
    return c
};
InnTwoTools.scrollDirection = function (c) {
    if (typeof c.scroller === "undefined" || !c.scroller) {
        c.scroller = $(window)
    }
    var b = 0, d;

    function a() {
        d = window.pageYOffset;
        if (d > b) {
            c.downScroll()
        } else {
            c.upScroll()
        }
        b = d
    }

    c.scroller.bind("scroll", function () {
        a()
    })
};
InnTwoTools.ConvertCoor = function (b) {
    var a = b.split(",");
    var c = parseFloat(a[0]);
    var d = parseFloat(a[1]);
    if (c > d) {
        return c + "," + d
    } else {
        return d + "," + c
    }
};
InnTwoTools.placeCategory = function (a) {
    if (a.category == "Hotel" || a.category == "hotel" || a.category == "3") {
        if (typeof a.hotel !== "undefined") {
            a.hotel()
        }
    } else {
        if (a.category == "delicacy") {
            if (typeof a.delicacy !== "undefined") {
                a.delicacy()
            }
        } else {
            if (!a.category || a.category == 6 || !(a.category.trim()) || a.category == "customePlace" || a.category == "6") {
                if (typeof a.custome !== "undefined") {
                    a.custome()
                }
            } else {
                if (typeof a.attraction !== "undefined") {
                    a.attraction()
                }
            }
        }
    }
};
InnTwoTools.PlaceParentCategory = function (b) {
    var a = Number(b.category);
    if (a == 0 || b.category == "Attraction") {
        if (typeof b.attraction !== "undefined") {
            b.attraction()
        }
        return
    }
    if (a == 1 || b.category == "Hotel") {
        if (typeof b.hotel !== "undefined") {
            b.hotel()
        }
        return
    }
    if (a == 2 || b.category == "Delicacy") {
        if (typeof b.delicacy !== "undefined") {
            b.delicacy()
        }
        return
    }
    if (a == 4 || b.category == "Destination") {
        if (typeof b.destination !== "undefined") {
            b.destination()
        }
        return
    }
    if (typeof b.other !== "undefined") {
        b.other()
    }
};
InnTwoTools.weatherIcoSwitch = function (b) {
    var a = "weather-ico-sprinte {0}";
    switch (b) {
        case"晴":
            a = InnTwoTools.format(a, "weather-ico-clear");
            break;
        case"多云":
            a = InnTwoTools.format(a, "weather-ico-cloudy");
            break;
        case"阴":
            a = InnTwoTools.format(a, "weather-ico-overcast");
            break;
        case"阵雨":
            a = InnTwoTools.format(a, "weather-ico-shower");
            break;
        case"雷阵雨":
            a = InnTwoTools.format(a, "weather-ico-thundershower");
            break;
        case"雷阵雨伴冰雹":
            a = InnTwoTools.format(a, "weather-ico-thundershowerhail");
            break;
        case"雨夹雪":
            a = InnTwoTools.format(a, "weather-ico-sleet");
            break;
        case"小雨":
            a = InnTwoTools.format(a, "weather-ico-sprinkle");
            break;
        case"中雨":
            a = InnTwoTools.format(a, "weather-ico-moderaterain");
            break;
        case"大雨":
            a = InnTwoTools.format(a, "weather-ico-drencher");
            break;
        case"暴雨":
            a = InnTwoTools.format(a, "weather-ico-rainstorm");
            break;
        case"大暴雨":
            a = InnTwoTools.format(a, "weather-ico-gullywasher");
            break;
        case"特大暴雨":
            a = InnTwoTools.format(a, "weather-ico-extratorrentialrain");
            break;
        case"阵雪":
            a = InnTwoTools.format(a, "weather-ico-showerysnow");
            break;
        case"小雪":
            a = InnTwoTools.format(a, "weather-ico-flurry");
            break;
        case"中雪":
            a = InnTwoTools.format(a, "weather-ico-moderatesnow");
            break;
        case"大雪":
            a = InnTwoTools.format(a, "weather-ico-heavysnow");
            break;
        case"暴雪":
            a = InnTwoTools.format(a, "weather-ico-snowstorm");
            break;
        case"雾":
            a = InnTwoTools.format(a, "weather-ico-fog");
            break;
        case"冻雨":
            a = InnTwoTools.format(a, "weather-ico-icerain");
            break;
        case"沙尘暴":
            a = InnTwoTools.format(a, "weather-ico-sandstorm");
            break;
        case"强沙尘暴":
            a = InnTwoTools.format(a, "weather-ico-strongsandstorm");
            break;
        case"浮尘":
            a = InnTwoTools.format(a, "weather-ico-floatingdust");
            break;
        case"霾":
            a = InnTwoTools.format(a, "weather-ico-dryfog");
            break;
        case"扬沙":
            a = InnTwoTools.format(a, "weather-ico-raisedust");
            break;
        default:
            a = InnTwoTools.format(a, "weather-ico-clear")
    }
    return a
};
InnTwoTools.eleHeightReset = function (a, b) {
    if (typeof b === "undefined") {
        b = 0
    }
    var c = $(window).height();
    $(a).height(c - b);
    $(window).resize(function () {
        c = $(window).height();
        $(a).height(c - b)
    })
};
(function (a) {
    a.fn.inntwoScroller = function () {
        var h = a(this).parents("div[data-inntwoscroll-wrapper]");
        var k = h.css({position: "relative"});
        var e = a(this)[0];
        var b = a(this);
        var f = k.find("div[data-scrollbar]");
        var g = f.parent();
        var j = e.scrollHeight;
        var d = k.height();
        g.css({position: "absolute", top: 0, right: 0, height: d + "px"});
        function c() {
            var m = e.scrollTop / j;
            a(f).css({top: e.clientHeight * m + "px"})
        }

        c();
        a(f).draggable({containment: "parent", axis: "y", scroll: false, start: function () {
            b.unbind("scroll")
        }, stop: function () {
            b.scroll(function () {
                c()
            })
        }, drag: function () {
            var o = a(g).height();
            var m = a(f).position().top;
            var n = m / o;
            var p = e.scrollHeight * n;
            e.scrollTop = p
        }});
        function l() {
            if (e.clientHeight == 0 || e.scrollHeight == 0) {
                a(f).hide();
                a(g).hide();
                return
            }
            var m = e.clientHeight / e.scrollHeight;
            if (m >= 1) {
                a(f).hide();
                a(g).hide()
            } else {
                a(f).show();
                a(g).show();
                var o = a(g).height();
                var n = m * o;
                a(f).height(n)
            }
        }

        l();
        b.unbind("scroll").scroll(function () {
            c()
        });
        return this
    }
}(jQuery));
var inntwoConfig = {};
inntwoConfig.qqLoginUrl = "https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=100553868&display={2}&redirect_uri={0}/passportCallback/QQLoginCallBack/&state={1}";
inntwoConfig.getQqLoginUrl = function (a) {
    return InnTwoTools.format(inntwoConfig.qqLoginUrl, a.redirectUri, a.state, a.clientType ? a.clientType : "pc")
};
inntwoConfig.weiboLoginUrl = "https://api.weibo.com/oauth2/authorize?redirect_uri={0}/passportCallback/weiboLoginCallBack/&client_id=475685934&display=default&state={1}";
var startY, move, newSpeed, speed;
var x = $(window).width() - 36;
var y = 385;
var loginUserId = "";
function pageSizeInitial() {
    var c = $(window).width();
    var b = $(window).height();
    $("#container_mid").height(b - 51);
    var a = $(".ceate_route_right_container");
    a.width(c - 274);
    $(window).resize(function () {
        c = $(window).width();
        b = $(window).height();
        $("#container_mid").height(b - 51);
        a.width(c - 274)
    })
}
var inntwoBase = {};
inntwoBase.AlarmMessage = {};
inntwoBase.AlarmMessage.SEARCH_ROUTE = "正在为您绘制路线！";
inntwoBase.AlarmMessage.SEARCH_PLACE = "正在检索数据！";
inntwoBase.AlarmMessage.SERVE_ERROR = "服务器内部错误，请稍后再试！";
inntwoBase.AlarmMessage.SEARCH_HOTEL = "正在为您检索酒店数据！";
inntwoBase.AlarmMessage.SAVE_DATA = "正在保存数据！";
inntwoBase.AlarmMessage.SAVE_DATA_SUCCESS = "保存成功！";
inntwoBase.AlarmMessage.SEARCH_DESTINATION = "正在检索目的地！";
inntwoBase.AlarmMessage.SEARCH_ROUTE_ERROR = "未检索到路线,请检查搜索关键字！";
inntwoBase.AlarmMessage.PUBLISH_ITINERARY = "正在发布游记！";
inntwoBase.AlarmMessage.SEARCHE_KEYISEMPTY = "请输入你要去的地方！";
inntwoBase.AlarmMessage.DESTINATION_ALARM = "输入地址检索,查看周边,也可右键点击地图。";
inntwoBase.AlarmMessage.NOTSEARCH_MSG = "未检索到地名,请检查关键字！";
inntwoBase.AlarmMessage.TRAVELS_WORD = "添加心情文字...";
inntwoBase.AlarmMessage.ROUT_SEARCHING = "正在加载路线信息...";
inntwoBase.AlarmMessage.SAVE_DATA_TIMEOUT = "保存超时,请稍后再试!";
inntwoBase.AlarmMessage.SNAPSHOT_REMARK_LIMIT = "快照备注不能超过200字！";
inntwoBase.AlarmMessage.COUNT_COST = "正在计算费用";
inntwoBase.dateTimeLine = "2014-6-9";
function isShowValidateCode() {
    var a = InnTwoTools.getCookies("UserLoginLimit");
    if (!a) {
        return null
    }
    a = Number(a);
    if (a > 2) {
        $(".login-info-identity-code").show();
        $("#ValidateErrorMessageIdentity").show();
        $("#identityImage").attr({src: InnTwoTools.format("{0}?{1}", ajaxUrl.IdentityCodeGeneration_Url, new Date())})
    } else {
        $(".login-info-identity-code").hide();
        $("#ValidateErrorMessageIdentity").hide();
        $("#identityImage").attr({src: ""})
    }
    return a
}
inntwoBase.weiboSquareImgAddr = "http://ww3.sinaimg.cn/square/{0}.jpg";
inntwoBase.weiboBmiddleImgAddr = "http://ww3.sinaimg.cn/bmiddle/{0}.jpg";
inntwoBase.replaceWeiboFace = function (a) {
    return a.replace(/\(img\)http/g, "<img src='http").replace(/\(img\)/g, " '//>")
};
inntwoBase.searchSuggestionCategory = function (a) {
    switch (a.category) {
        case 0:
            a.attraction();
            break;
        case 1:
            a.hotel();
            break;
        case 2:
            a.dalicacy();
            break;
        case 3:
            a.mapaddress();
            break;
        default:
            a.mapaddress()
    }
};
inntwoBase.placeCategryByCategoryId = function (a) {
    if (a.categoryId == "0e51394e-c4e1-4590-8622-72b2d379cd4a" || a.categoryId == "1") {
        a.civilize()
    } else {
        if (a.categoryId == "12e5cffb-be76-474c-96f0-1dbb95e1b9a7" || a.categoryId == "2") {
            a.nature()
        } else {
            if (a.categoryId == "5b3d9a90-a26d-452d-83d3-6148df1d95fe" || a.categoryId == "4") {
                a.entertain()
            } else {
                if (a.categoryId == "d2924c85-4f30-49f5-b56a-962e5eac9dbd") {
                    a.aspect()
                } else {
                    if (a.categoryId == "hotel" || a.categoryId == "3" || a.categoryId == "Hotel") {
                        a.hotel()
                    } else {
                        if (a.categoryId == "delicacy" || a.categoryId == "5") {
                            a.food()
                        } else {
                            if (a.defaultStyle) {
                                a.defaultStyle()
                            } else {
                                a.civilize()
                            }
                        }
                    }
                }
            }
        }
    }
};
inntwoBase.getMarkerStyleNumber = function (a) {
    var b = "";
    inntwoBase.placeCategryByCategoryId({categoryId: a, civilize: function () {
        b = "home_place_marker place_search_result_civilization"
    }, nature: function () {
        b = "home_place_marker place_search_result_natural"
    }, entertain: function () {
        b = "home_place_marker place_search_result_entertainment"
    }, aspect: function () {
        b = "home_place_marker place_search_result_aspect"
    }});
    return b
};
inntwoBase.isOldItinerary = function (b) {
    var a = false;
    var d = b.ScheduleItems[0];
    if (d) {
        var e = d.PlacesTraffics.length;
        var c = d.ScheduleItemPlaces.length;
        if (e < c) {
            a = true
        }
    }
    return a
};
inntwoBase.wordConvertNumber = function (a) {
    if (a == "AttractionHistory") {
        return 1
    }
    if (a == "AttractionNature") {
        return 2
    }
    if (a == "Hotel") {
        return 3
    }
    if (a == "Amusement") {
        return 4
    }
    if (a == "CustomePlace") {
        return 6
    }
    return 1
};
window.popupUserLogin = inntwoBase.popupUserLogin = function (a) {
    $("#RegisterUserInfo").modal("show").on("hidden", function () {
        if (typeof a !== "undefined") {
            a()
        }
    });
    userValidate()
};
inntwoBase.goToTop = function (a, b) {
    if (b) {
        $(b).scroll(function () {
            if ($(this).scrollTop() > a) {
                $(".inntwo-return-top").fadeIn().unbind("click").click(function () {
                    $(b).animate({scrollTop: 0}, 300)
                })
            } else {
                $(".inntwo-return-top").fadeOut()
            }
        });
        return
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > a) {
            $(".inntwo-return-top").fadeIn().unbind("click").click(function () {
                $("html,body").animate({scrollTop: 0}, 300)
            })
        } else {
            $(".inntwo-return-top").fadeOut()
        }
    })
};
inntwoBase.qqOnline = function () {
    $(".inntwo-qq-consult").mouseenter(function () {
        $(".mainlayout-qqonline-items").show().animate({left: "-99px"}, 100)
    }).mouseleave(function () {
        $(".mainlayout-qqonline-items").animate({left: "0"}, 100, function () {
            $(".mainlayout-qqonline-items").hide()
        })
    })
};
function logionButtonClick() {
    if ($(".trip_schedule_sight_spot_item").length > 0) {
        inntwoBase.popupUserLogin();
        isShowValidateCode();
        return false
    } else {
        return true
    }
}
function userValidate() {
    $("#UserLogionForm").validate({rules: {userName: {required: true, isEmail: true}, pwd: {required: true}, identityCodeTxt: {required: true, remote: {url: ajaxUrl.ValidateIdentityCode_Url, type: "post"}}}, success: function () {
        $(".register-link").hide()
    }, messages: {userName: {required: "账号不能为空!", email: "请用邮件地址作为用户名!"}, pwd: {required: "密码不能为空!"}, identityCodeTxt: {required: "验证码不能为空!", remote: "验证码不正确!"}}, errorPlacement: function (b, a) {
        $(a.attr("errorfor")).html(b[0].innerHTML);
        reductionLogionButton()
    }, onkeyup: false})
}
function rememberMeWeek() {
    $("#RememberMeWeek").click(function () {
        var a = $(this).attr("checked");
        if (a == "checked") {
            $("input[name=isPersistent]").val("true")
        } else {
            $("input[name=isPersistent]").val("false")
        }
    })
}
window.loginBegionSubmit = function () {
    $("#login_submit").val("登录中...").attr({disabled: "disabled"})
};
function reductionLogionButton() {
    $("#login_submit").val("登录").removeAttr("disabled")
}
function changeIdentityCode() {
    $("#identityA").click(function () {
        $("#identityImage").attr({src: InnTwoTools.format("{0}?{1}", ajaxUrl.IdentityCodeGeneration_Url, new Date())})
    })
}
function closeBrowsEditionMsg(a) {
    $(a).parent().hide()
}
function browsEdition() {
    var a = $.browser;
    if (a.msie && a.version < 10) {
        var b = "<div class='brower-limit'><p>亲，为了更好的使用我们的各项功能，要对ie6、ie7、ie8、ie9 Say Goodbye了哦！下载最新<a href='http://www.google.cn/intl/zh-CN/chrome/browser/index.html'>chrome</a>、<a href='http://windows.microsoft.com/en-hk/internet-explorer/ie-11-worldwide-languages'>IE</a>或<a href='http://www.firefox.com.cn/'>火狐</a>浏览器享受最炫的功能。</p><div class='brower-limit-close create-itinerary-image' onclick='closeBrowsEditionMsg(this);'></div></div>";
        $("body").append(b)
    }
}
function loginRequestComplete(a) {
    reductionLogionButton();
    InnTwoTools.JsonDataCallback({data: a, success: function () {
        $("#homeLoginText").hide();
        var c = InnTwoTools.getCookies("UserNickName");
        c = decodeURI(c);
        $("#statusUserName").html(c);
        var b = InnTwoTools.getCookies("UserIcoUrl");
        $("#statusUserIcoImg").attr("src", b || "/images/asset2/noico.png");
        $("#homeLoginStatus").show();
        $("#RegisterUserInfo").modal("hide");
        loginUserId = a.userId;
        if (typeof inntwoBase.loginSuccess !== "undefined" && inntwoBase.loginSuccess) {
            inntwoBase.loginSuccess({nick: c, userIco: b, userId: a.UserId})
        }
        inntwoBase.loginLog()
    }, optionAction: function (c, b) {
        $("#login_error_message_pwd").text(b.Message);
        isShowValidateCode()
    }, nonActivated: function () {
        window.location.href = a.Extension
    }})
}
inntwoBase.loginLog = function () {
    $.ajax({url: "/Common/LoginLog", success: function (a) {
        if (typeof InnTwoTools != "undefined") {
            InnTwoTools.JsonDataCallback({data: a, success: function () {
            }})
        }
    }, type: "post"})
};
inntwoBase.showFooter = function () {
    $(".deep-gray-foot").show()
};
inntwoBase.setSelectedMenuStyle = function (a) {
    var b = "#7db500";
    $(".inntwo_menu_ico").eq(a).css({"background-color": b})
};
inntwoBase.deletePicture = function (b, a) {
    if (b) {
        $.ajax({url: ajaxUrl.DeleteItineraryTravelImages_Url, data: {fileNames: b}, type: "post", success: function (c) {
            InnTwoTools.JsonDataCallback({data: c, success: function () {
                if (a) {
                    a()
                }
            }})
        }})
    }
};
function weiboWeixin() {
    $(".create-itinerary-image").mouseenter(function () {
        $(this).children(".foorter-two-dimension-code").show()
    }).mouseleave(function () {
        $(this).children(".foorter-two-dimension-code").hide()
    })
}
function loginBoxQQlogin() {
    $(".qq-login").click(function () {
        var b = location.href;
        var a = inntwoConfig.getQqLoginUrl({redirectUri: ajaxUrl.domainUrl, state: b, clientType: "pc"});
        location.href = a
    });
    $(".weibo-login").click(function () {
        var b = InnTwoTools.getQueryStringByName("urlrefer");
        var a = InnTwoTools.format(inntwoConfig.weiboLoginUrl, ajaxUrl.domainUrl, b);
        location.href = a
    })
}
var messageShowHint = {ajax: function () {
    $.ajax({url: "/Common/SystemNotifyInfo", type: "post", datatype: "json", success: function (a) {
        if (typeof InnTwoTools != "undefined") {
            InnTwoTools.JsonDataCallback({data: a, success: function () {
                if (a && a.Content && a.TimeStamp) {
                    var b = $("#messageShowHintResultText");
                    b.html(a.Content);
                    b.attr("data", a.TimeStamp);
                    $(".message-show-hint").show()
                }
            }})
        }
    }})
}, close: function () {
    $(".message-show-hint-close").click(function () {
        $(".message-show-hint").hide();
        var c = $("#messageShowHintResultText").attr("data");
        if (c) {
            var a = "notity_timestamp=" + escape(c);
            var b = new Date();
            b.setTime(b.getTime() + 1000 * 24 * 3600 * 1000);
            a = a + "; expires=" + b.toGMTString() + "; path=/";
            document.cookie = a
        }
    })
}, show: function () {
    $(".message-show-hint-Ico-elephant").hover(function () {
        $(".message-show-hint-text").show()
    })
}};
inntwoBase.RoadEventCategory = function (a) {
    if (a.category == "RoadAccident" || a.category == 0) {
        a.roadAccident()
    } else {
        if (a.category == "RoadCondition" || a.category == 1) {
            a.roadCondition()
        } else {
            if (a.category == "RoadConstruction" || a.category == 2) {
                a.roadConstruction()
            } else {
                a.roadCondition()
            }
        }
    }
};
inntwoBase.itineraryPublishStatus = function (a) {
    switch (a.status) {
        case 0:
            if (a.Privated) {
                a.Privated()
            }
            break;
        case 1:
            if (a.Publish) {
                a.Publish()
            }
            break;
        case 2:
            if (a.Published) {
                a.Published()
            }
            break;
        case 5:
            if (a.Recycled) {
                a.Recycled()
            }
            break
    }
};
inntwoBase.xdpieTiebaTransfer = function () {
    $("#xdpieTieBa").click(function () {
        window.location.href = "http://tieba.baidu.com/f?ie=utf-8&kw=%E8%A1%8C%E5%8A%A8%E6%B4%BE%E6%97%85%E8%A1%8C%E7%BD%91&fr=search"
    })
};
inntwoBase.easemobId = "";
inntwoBase.easemobPwd = "";
inntwoBase.appKey = "";
inntwoBase.CreatEasemobConnection = function () {
    $.ajax({url: ajaxUrl.getEasemobUserInfoByUseId_Url, type: "post", success: function (a) {
        InnTwoTools.JsonDataCallback({data: a, success: function () {
            inntwoBase.easemobId = a.Extension.split(",")[0];
            inntwoBase.easemobPwd = a.Extension.split(",")[1];
            inntwoBase.appKey = a.Extension.split(",")[2];
            var b = new Easemob.im.Connection();
            b.init({onOpened: function () {
                b.setPresence()
            }, onClosed: function () {
                b.open({user: inntwoBase.easemobId, pwd: inntwoBase.easemobPwd, appKey: inntwoBase.appKey})
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
                        inntwoBase.promptMessage(g, h);
                        $(".messenger-message-inner p").css("color", "white");
                        $(".messenger-message-inner").css("text-shadow", "none")
                    }})
                }})
            }, });
            b.open({user: inntwoBase.easemobId, pwd: inntwoBase.easemobPwd, appKey: inntwoBase.appKey})
        }})
    }})
};
inntwoBase.promptMessage = function (a, b) {
    Messenger.options = {extraClasses: "messenger-fixed messenger-on-top messenger-on-right", theme: "flat"};
    Messenger().post({message: a, type: b, hideAfter: 6, showCloseButton: true})
};
$(function () {
    pageSizeInitial();
    rememberMeWeek();
    changeIdentityCode();
    browsEdition();
    loginBoxQQlogin();
    inntwoBase.qqOnline();
    weiboWeixin();
    messageShowHint.close();
    messageShowHint.show();
    messageShowHint.ajax();
    inntwoBase.xdpieTiebaTransfer();
    inntwoBase.CreatEasemobConnection()
});