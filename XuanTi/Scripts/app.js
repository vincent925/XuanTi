﻿(function (e, t) {
    "use strict";

    function n(e) {
        var t = e.length,
            n = st.type(e);
        return st.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e) {
        var t = wt[e] = {};
        return st.each(e.match(lt) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, r, i) {
        if (st.acceptData(e)) {
            var o, a, s = st.expando,
                u = "string" == typeof n,
                l = e.nodeType,
                c = l ? st.cache : e,
                d = l ? e[s] : e[s] && s;
            if (d && c[d] && (i || c[d].data) || !u || r !== t) return d || (l ? e[s] = d = J.pop() || st.guid++ : d = s), c[d] || (c[d] = {}, l || (c[d].toJSON = st.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[d] = st.extend(c[d], n) : c[d].data = st.extend(c[d].data, n)), o = c[d], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[st.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[st.camelCase(n)])) : a = o, a
        }
    }

    function o(e, t, n) {
        if (st.acceptData(e)) {
            var r, i, o, a = e.nodeType,
                u = a ? st.cache : e,
                l = a ? e[st.expando] : st.expando;
            if (u[l]) {
                if (t && (r = n ? u[l] : u[l].data)) {
                    st.isArray(t) ? t = t.concat(st.map(t, st.camelCase)) : t in r ? t = [t] : (t = st.camelCase(t), t = t in r ? [t] : t.split(" "));
                    for (i = 0, o = t.length; o > i; i++) delete r[t[i]];
                    if (!(n ? s : st.isEmptyObject)(r)) return
                } (n || (delete u[l].data, s(u[l]))) && (a ? st.cleanData([e], !0) : st.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
            }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Tt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Ct.test(r) ? st.parseJSON(r) : r
                } catch (o) { }
                st.data(e, n, r)
            } else r = t
        }
        return r
    }

    function s(e) {
        var t;
        for (t in e)
            if (("data" !== t || !st.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function u() {
        return !0
    }

    function l() {
        return !1
    }

    function c(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function d(e, t, n) {
        if (t = t || 0, st.isFunction(t)) return st.grep(e, function (e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return st.grep(e, function (e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = st.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (Rt.test(t)) return st.filter(t, r, !n);
            t = st.filter(t, r)
        }
        return st.grep(e, function (e) {
            return st.inArray(e, t) >= 0 === n
        })
    }

    function f(e) {
        var t = Xt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function p(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function g(e) {
        var t = nn.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]) ; r++) st._data(n, "globalEval", !t || st._data(t[r], "globalEval"))
    }

    function v(e, t) {
        if (1 === t.nodeType && st.hasData(e)) {
            var n, r, i, o = st._data(e),
                a = st._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) st.event.add(t, n, s[n][r])
            }
            a.data && (a.data = st.extend({}, a.data))
        }
    }

    function y(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !st.support.noCloneEvent && t[st.expando]) {
                r = st._data(t);
                for (i in r.events) st.removeEvent(t, i, r.handle);
                t.removeAttribute(st.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), st.support.html5Clone && e.innerHTML && !st.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Zt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function b(e, n) {
        var r, i, o = 0,
            a = e.getElementsByTagName !== t ? e.getElementsByTagName(n || "*") : e.querySelectorAll !== t ? e.querySelectorAll(n || "*") : t;
        if (!a)
            for (a = [], r = e.childNodes || e; null != (i = r[o]) ; o++) !n || st.nodeName(i, n) ? a.push(i) : st.merge(a, b(i, n));
        return n === t || n && st.nodeName(e, n) ? st.merge([e], a) : a
    }

    function x(e) {
        Zt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Tn.length; i--;)
            if (t = Tn[i] + n, t in e) return t;
        return r
    }

    function C(e, t) {
        return e = t || e, "none" === st.css(e, "display") || !st.contains(e.ownerDocument, e)
    }

    function T(e, t) {
        for (var n, r = [], i = 0, o = e.length; o > i; i++) n = e[i], n.style && (r[i] = st._data(n, "olddisplay"), t ? (r[i] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && C(n) && (r[i] = st._data(n, "olddisplay", S(n.nodeName)))) : r[i] || C(n) || st._data(n, "olddisplay", st.css(n, "display")));
        for (i = 0; o > i; i++) n = e[i], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[i] || "" : "none"));
        return e
    }

    function N(e, t, n) {
        var r = mn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += st.css(e, n + Cn[o], !0, i)), r ? ("content" === n && (a -= st.css(e, "padding" + Cn[o], !0, i)), "margin" !== n && (a -= st.css(e, "border" + Cn[o] + "Width", !0, i))) : (a += st.css(e, "padding" + Cn[o], !0, i), "padding" !== n && (a += st.css(e, "border" + Cn[o] + "Width", !0, i)));
        return a
    }

    function E(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = ln(e),
            a = st.support.boxSizing && "border-box" === st.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = un(e, t, o), (0 > i || null == i) && (i = e.style[t]), vn.test(i)) return i;
            r = a && (st.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function S(e) {
        var t = G,
            n = bn[e];
        return n || (n = A(e, t), "none" !== n && n || (cn = (cn || st("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), cn.detach()), bn[e] = n), n
    }

    function A(e, t) {
        var n = st(t.createElement(e)).appendTo(t.body),
            r = st.css(n[0], "display");
        return n.remove(), r
    }

    function L(e, t, n, r) {
        var i;
        if (st.isArray(t)) st.each(t, function (t, i) {
            n || kn.test(e) ? r(e, i) : L(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== st.type(t)) r(e, t);
        else
            for (i in t) L(e + "[" + i + "]", t[i], n, r)
    }

    function D(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(lt) || [];
            if (st.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function M(e, n, r, i) {
        function o(u) {
            var l;
            return a[u] = !0, st.each(e[u] || [], function (e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || s || a[c] ? s ? !(l = c) : t : (n.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var a = {},
            s = e === Wn;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }

    function j(e, n) {
        var r, i, o = st.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        return i && st.extend(!0, e, i), e
    }

    function B(e, n, r) {
        var i, o, a, s, u = e.contents,
            l = e.dataTypes,
            c = e.responseFields;
        for (o in c) o in r && (n[c[o]] = r[o]);
        for (;
            "*" === l[0];) l.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in r) a = l[0];
        else {
            for (o in r) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                s || (s = o)
            }
            a = a || s
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }

    function O(e, t) {
        var n, r, i, o, a = {},
            s = 0,
            u = e.dataTypes.slice(),
            l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
            for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = u[++s];)
            if ("*" !== i) {
                if ("*" !== l && l !== i) {
                    if (n = a[l + " " + i] || a["* " + i], !n)
                        for (r in a)
                            if (o = r.split(" "), o[1] === i && (n = a[l + " " + o[0]] || a["* " + o[0]])) {
                                n === !0 ? n = a[r] : a[r] !== !0 && (i = o[0], u.splice(s--, 0, i));
                                break
                            }
                    if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: n ? c : "No conversion from " + l + " to " + i
                            }
                        }
                }
                l = i
            }
        return {
            state: "success",
            data: t
        }
    }

    function P() {
        try {
            return new e.XMLHttpRequest
        } catch (t) { }
    }

    function H() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) { }
    }

    function _() {
        return setTimeout(function () {
            Kn = t
        }), Kn = st.now()
    }

    function I(e, t) {
        st.each(t, function (t, n) {
            for (var r = (rr[t] || []).concat(rr["*"]), i = 0, o = r.length; o > i; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function q(e, t, n) {
        var r, i, o = 0,
            a = nr.length,
            s = st.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = Kn || _(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: st.extend({}, t),
                opts: st.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Kn || _(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = st.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (F(c, l.opts.specialEasing) ; a > o; o++)
            if (r = nr[o].call(l, e, c, l.opts)) return r;
        return I(l, c), st.isFunction(l.opts.start) && l.opts.start.call(e, l), st.fx.timer(st.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function F(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = st.camelCase(n), i = t[r], o = e[n], st.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = st.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function R(e, t, n) {
        var r, i, o, a, s, u, l, c, d, f = this,
            p = e.style,
            h = {},
            g = [],
            m = e.nodeType && C(e);
        n.queue || (c = st._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, d = c.empty.fire, c.empty.fire = function () {
            c.unqueued || d()
        }), c.unqueued++, f.always(function () {
            f.always(function () {
                c.unqueued--, st.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === st.css(e, "display") && "none" === st.css(e, "float") && (st.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", st.support.shrinkWrapBlocks || f.done(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (o = t[r], Zn.exec(o)) {
                if (delete t[r], u = u || "toggle" === o, o === (m ? "hide" : "show")) continue;
                g.push(r)
            }
        if (a = g.length) {
            s = st._data(e, "fxshow") || st._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? st(e).show() : f.done(function () {
                st(e).hide()
            }), f.done(function () {
                var t;
                st._removeData(e, "fxshow");
                for (t in h) st.style(e, t, h[t])
            });
            for (r = 0; a > r; r++) i = g[r], l = f.createTween(i, m ? s[i] : 0), h[i] = s[i] || st.style(e, i), i in s || (s[i] = l.start, m && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function W(e, t, n, r, i) {
        return new W.prototype.init(e, t, n, r, i)
    }

    function $(e, t) {
        var n, r = {
            height: e
        },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Cn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function X(e) {
        return st.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var z, Q, G = e.document,
        Y = e.location,
        U = e.jQuery,
        V = e.$,
        K = {},
        J = [],
        Z = "1.9.0",
        et = J.concat,
        tt = J.push,
        nt = J.slice,
        rt = J.indexOf,
        it = K.toString,
        ot = K.hasOwnProperty,
        at = Z.trim,
        st = function (e, t) {
            return new st.fn.init(e, t, z)
        },
        ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        lt = /\S+/g,
        ct = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        dt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pt = /^[\],:{}\s]*$/,
        ht = /(?:^|:|,)(?:\s*\[)+/g,
        gt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        mt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        vt = /^-ms-/,
        yt = /-([\da-z])/gi,
        bt = function (e, t) {
            return t.toUpperCase()
        },
        xt = function () {
            G.addEventListener ? (G.removeEventListener("DOMContentLoaded", xt, !1), st.ready()) : "complete" === G.readyState && (G.detachEvent("onreadystatechange", xt), st.ready())
        };
    st.fn = st.prototype = {
        jquery: Z,
        constructor: st,
        init: function (e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : dt.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof st ? n[0] : n, st.merge(this, st.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), ft.test(i[1]) && st.isPlainObject(n))
                        for (i in n) st.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = G.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = G, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : st.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), st.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return nt.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = st.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return st.each(this, e, t)
        },
        ready: function (e) {
            return st.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(nt.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(st.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: tt,
        sort: [].sort,
        splice: [].splice
    }, st.fn.init.prototype = st.fn, st.extend = st.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {},
            u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || st.isFunction(s) || (s = {}), l === u && (s = this, --u) ; l > u; u++)
            if (null != (e = arguments[u]))
                for (n in e) r = s[n], i = e[n], s !== i && (c && i && (st.isPlainObject(i) || (o = st.isArray(i))) ? (o ? (o = !1, a = r && st.isArray(r) ? r : []) : a = r && st.isPlainObject(r) ? r : {}, s[n] = st.extend(c, a, i)) : i !== t && (s[n] = i));
        return s
    }, st.extend({
        noConflict: function (t) {
            return e.$ === st && (e.$ = V), t && e.jQuery === st && (e.jQuery = U), st
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? st.readyWait++ : st.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--st.readyWait : !st.isReady) {
                if (!G.body) return setTimeout(st.ready);
                st.isReady = !0, e !== !0 && --st.readyWait > 0 || (Q.resolveWith(G, [st]), st.fn.trigger && st(G).trigger("ready").off("ready"))
            }
        },
        isFunction: function (e) {
            return "function" === st.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === st.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[it.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            if (!e || "object" !== st.type(e) || e.nodeType || st.isWindow(e)) return !1;
            try {
                if (e.constructor && !ot.call(e, "constructor") && !ot.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || ot.call(e, r)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || G;
            var r = ft.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = st.buildFragment([e], t, i), i && st(i).remove(), st.merge([], r.childNodes))
        },
        parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = st.trim(n), n && pt.test(n.replace(gt, "@").replace(mt, "]").replace(ht, ""))) ? Function("return " + n)() : (st.error("Invalid JSON: " + n), t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + n), r
        },
        noop: function () { },
        globalEval: function (t) {
            t && st.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(vt, "ms-").replace(yt, bt)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1) ; o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1) ; o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: at && !at.call("﻿ ") ? function (e) {
            return null == e ? "" : at.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(ct, "")
        },
        makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? st.merge(r, "string" == typeof e ? [e] : e) : tt.call(r, e)), r
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (rt) return rt.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function (e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && (u[u.length] = i);
            else
                for (o in e) i = t(e[o], o, r), null != i && (u[u.length] = i);
            return et.apply([], u)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (r = e[n], n = e, e = r), st.isFunction(e) ? (i = nt.call(arguments, 2), o = function () {
                return e.apply(n || this, i.concat(nt.call(arguments)))
            }, o.guid = e.guid = e.guid || st.guid++, o) : t
        },
        access: function (e, n, r, i, o, a, s) {
            var u = 0,
                l = e.length,
                c = null == r;
            if ("object" === st.type(r)) {
                o = !0;
                for (u in r) st.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, st.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                return c.call(st(e), n)
            })), n))
                for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function () {
            return (new Date).getTime()
        }
    }), st.ready.promise = function (t) {
        if (!Q)
            if (Q = st.Deferred(), "complete" === G.readyState) setTimeout(st.ready);
            else if (G.addEventListener) G.addEventListener("DOMContentLoaded", xt, !1), e.addEventListener("load", st.ready, !1);
            else {
                G.attachEvent("onreadystatechange", xt), e.attachEvent("onload", st.ready);
                var n = !1;
                try {
                    n = null == e.frameElement && G.documentElement
                } catch (r) { }
                n && n.doScroll && function i() {
                    if (!st.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        st.ready()
                    }
                }()
            }
        return Q.promise(t)
    }, st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    }), z = st(G);
    var wt = {};
    st.Callbacks = function (e) {
        e = "string" == typeof e ? wt[e] || r(e) : st.extend({}, e);
        var n, i, o, a, s, u, l = [],
            c = !e.once && [],
            d = function (t) {
                for (n = e.memory && t, i = !0, u = a || 0, a = 0, s = l.length, o = !0; l && s > u; u++)
                    if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                o = !1, l && (c ? c.length && d(c.shift()) : n ? l = [] : f.disable())
            },
            f = {
                add: function () {
                    if (l) {
                        var t = l.length;
                        (function r(t) {
                            st.each(t, function (t, n) {
                                var i = st.type(n);
                                "function" === i ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        })(arguments), o ? s = l.length : n && (a = t, d(n))
                    }
                    return this
                },
                remove: function () {
                    return l && st.each(arguments, function (e, t) {
                        for (var n;
                            (n = st.inArray(t, l, n)) > -1;) l.splice(n, 1), o && (s >= n && s--, u >= n && u--)
                    }), this
                },
                has: function (e) {
                    return st.inArray(e, l) > -1
                },
                empty: function () {
                    return l = [], this
                },
                disable: function () {
                    return l = c = n = t, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return c = t, n || f.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !l || i && !c || (o ? c.push(t) : d(t)), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return f
    }, st.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", st.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", st.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", st.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return st.Deferred(function (n) {
                            st.each(t, function (t, o) {
                                var a = o[0],
                                    s = st.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && st.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? st.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, st.each(t, function (e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t, n, r, i = 0,
                o = nt.call(arguments),
                a = o.length,
                s = 1 !== a || e && st.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : st.Deferred(),
                l = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? nt.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = Array(a), n = Array(a), r = Array(a) ; a > i; i++) o[i] && st.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    }), st.support = function () {
        var n, r, i, o, a, s, u, l, c, d, f = G.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = f.getElementsByTagName("*"), i = f.getElementsByTagName("a")[0], !r || !i || !r.length) return {};
        o = G.createElement("select"), a = o.appendChild(G.createElement("option")), s = f.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", n = {
            getSetAttribute: "t" !== f.className,
            leadingWhitespace: 3 === f.firstChild.nodeType,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !!f.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.5/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: !!s.value,
            optSelected: a.selected,
            enctype: !!G.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === G.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, s.checked = !0, n.noCloneChecked = s.cloneNode(!0).checked, o.disabled = !0, n.optDisabled = !a.disabled;
        try {
            delete f.test
        } catch (p) {
            n.deleteExpando = !1
        }
        s = G.createElement("input"), s.setAttribute("value", ""), n.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), n.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), u = G.createDocumentFragment(), u.appendChild(s), n.appendChecked = s.checked, n.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function () {
            n.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (d in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f.setAttribute(l = "on" + d, "t"), n[d + "Bubbles"] = l in e || f.attributes[l].expando === !1;
        return f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", n.clearCloneStyle = "content-box" === f.style.backgroundClip, st(function () {
            var r, i, o, a = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                s = G.getElementsByTagName("body")[0];
            s && (r = G.createElement("div"), r.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(r).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = f.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", n.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", n.boxSizing = 4 === f.offsetWidth, n.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (n.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, n.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
                width: "4px"
            }).width, i = f.appendChild(G.createElement("div")), i.style.cssText = f.style.cssText = a, i.style.marginRight = i.style.width = "0", f.style.width = "1px", n.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), f.style.zoom !== t && (f.innerHTML = "", f.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", n.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", n.shrinkWrapBlocks = 3 !== f.offsetWidth, s.style.zoom = 1), s.removeChild(r), r = f = o = i = null)
        }), r = o = u = a = i = s = null, n
    }();
    var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Tt = /([A-Z])/g;
    st.extend({
        cache: {},
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? st.cache[e[st.expando]] : e[st.expando], !!e && !s(e)
        },
        data: function (e, t, n) {
            return i(e, t, n, !1)
        },
        removeData: function (e, t) {
            return o(e, t, !1)
        },
        _data: function (e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return o(e, t, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && st.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), st.fn.extend({
        data: function (e, n) {
            var r, i, o = this[0],
                s = 0,
                u = null;
            if (e === t) {
                if (this.length && (u = st.data(o), 1 === o.nodeType && !st._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > s; s++) i = r[s].name, i.indexOf("data-") || (i = st.camelCase(i.substring(5)), a(o, i, u[i]));
                    st._data(o, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function () {
                st.data(this, e)
            }) : st.access(this, function (n) {
                return n === t ? o ? a(o, e, st.data(o, e)) : null : (this.each(function () {
                    st.data(this, e, n)
                }), t)
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                st.removeData(this, e)
            })
        }
    }), st.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = st._data(e, n), r && (!i || st.isArray(r) ? i = st._data(e, n, st.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = st.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = st._queueHooks(e, t),
                a = function () {
                    st.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return st._data(e, n) || st._data(e, n, {
                empty: st.Callbacks("once memory").add(function () {
                    st._removeData(e, t + "queue"), st._removeData(e, n)
                })
            })
        }
    }), st.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? st.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = st.queue(this, e, n);
                st._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && st.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                st.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = st.fx ? st.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                o = st.Deferred(),
                a = this,
                s = this.length,
                u = function () {
                    --i || o.resolveWith(a, [a])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = st._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var Nt, kt, Et = /[\t\r\n]/g,
        St = /\r/g,
        At = /^(?:input|select|textarea|button|object)$/i,
        Lt = /^(?:a|area)$/i,
        Dt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Mt = /^(?:checked|selected)$/i,
        jt = st.support.getSetAttribute,
        Bt = st.support.input;
    st.fn.extend({
        attr: function (e, t) {
            return st.access(this, st.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                st.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return st.access(this, st.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = st.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) { }
            })
        },
        addClass: function (e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = "string" == typeof e && e;
            if (st.isFunction(e)) return this.each(function (t) {
                st(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(lt) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : " ")) {
                        for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = st.trim(r)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (st.isFunction(e)) return this.each(function (t) {
                st(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(lt) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        n.className = e ? st.trim(r) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return st.isFunction(e) ? this.each(function (n) {
                st(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n)
                    for (var i, o = 0, a = st(this), s = t, u = e.match(lt) || []; i = u[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                else ("undefined" === n || "boolean" === n) && (this.className && st._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : st._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Et, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = st.isFunction(e), this.each(function (r) {
                    var o, a = st(this);
                    1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : st.isArray(o) && (o = st.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), n = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return n = st.valHooks[o.type] || st.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(St, "") : null == r ? "" : r)
            }
        }
    }), st.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (st.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && st.nodeName(n.parentNode, "optgroup"))) {
                            if (t = st(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    var n = st.makeArray(t);
                    return st(e).find("option").each(function () {
                        this.selected = st.inArray(st(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return e.getAttribute === t ? st.prop(e, n, r) : (a = 1 !== s || !st.isXMLDoc(e), a && (n = n.toLowerCase(), o = st.attrHooks[n] || (Dt.test(n) ? kt : Nt)), r === t ? o && a && "get" in o && null !== (i = o.get(e, n)) ? i : (e.getAttribute !== t && (i = e.getAttribute(n)), null == i ? t : i) : null !== r ? o && a && "set" in o && (i = o.set(e, r, n)) !== t ? i : (e.setAttribute(n, r + ""), r) : (st.removeAttr(e, n), t))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(lt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = st.propFix[n] || n, Dt.test(n) ? !jt && Mt.test(n) ? e[st.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : st.attr(e, n, ""), e.removeAttribute(jt ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!st.support.radioValue && "radio" === t && st.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !st.isXMLDoc(e), a && (n = st.propFix[n] || n, o = st.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : At.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), kt = {
        get: function (e, n) {
            var r = st.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? Bt && jt ? null != i : Mt.test(n) ? e[st.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            return t === !1 ? st.removeAttr(e, n) : Bt && jt || !Mt.test(n) ? e.setAttribute(!jt && st.propFix[n] || n, n) : e[st.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, Bt && jt || (st.attrHooks.value = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return st.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function (e, n, r) {
            return st.nodeName(e, "input") ? (e.defaultValue = n, t) : Nt && Nt.set(e, n, r)
        }
    }), jt || (Nt = st.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, st.attrHooks.contenteditable = {
        get: Nt.get,
        set: function (e, t, n) {
            Nt.set(e, "" === t ? !1 : t, n)
        }
    }, st.each(["width", "height"], function (e, n) {
        st.attrHooks[n] = st.extend(st.attrHooks[n], {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })), st.support.hrefNormalized || (st.each(["href", "src", "width", "height"], function (e, n) {
        st.attrHooks[n] = st.extend(st.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), st.each(["href", "src"], function (e, t) {
        st.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    })), st.support.style || (st.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), st.support.optSelected || (st.propHooks.selected = st.extend(st.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), st.support.enctype || (st.propFix.enctype = "encoding"), st.support.checkOn || st.each(["radio", "checkbox"], function () {
        st.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), st.each(["radio", "checkbox"], function () {
        st.valHooks[this] = st.extend(st.valHooks[this], {
            set: function (e, n) {
                return st.isArray(n) ? e.checked = st.inArray(st(e).val(), n) >= 0 : t
            }
        })
    });
    var Ot = /^(?:input|select|textarea)$/i,
        Pt = /^key/,
        Ht = /^(?:mouse|contextmenu)|click/,
        _t = /^(?:focusinfocus|focusoutblur)$/,
        It = /^([^.]*)(?:\.(.+)|)$/;
    st.event = {
        global: {},
        add: function (e, n, r, i, o) {
            var a, s, u, l, c, d, f, p, h, g, m, v = 3 !== e.nodeType && 8 !== e.nodeType && st._data(e);
            if (v) {
                for (r.handler && (a = r, r = a.handler, o = a.selector), r.guid || (r.guid = st.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function (e) {
                    return st === t || e && st.event.triggered === e.type ? t : st.event.dispatch.apply(s.elem, arguments)
                }, s.elem = e), n = (n || "").match(lt) || [""], c = n.length; c--;) u = It.exec(n[c]) || [], h = m = u[1], g = (u[2] || "").split(".").sort(), f = st.event.special[h] || {}, h = (o ? f.delegateType : f.bindType) || h, f = st.event.special[h] || {}, d = st.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && st.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, a), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, f.setup && f.setup.call(e, i, g, s) !== !1 || (e.addEventListener ? e.addEventListener(h, s, !1) : e.attachEvent && e.attachEvent("on" + h, s))), f.add && (f.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), st.event.global[h] = !0;
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, g, m = st.hasData(e) && st._data(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(lt) || [""], l = t.length; l--;)
                    if (s = It.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = st.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = u[p] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                        a && !f.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || st.removeEvent(e, p, m.handle), delete u[p])
                    } else
                        for (p in u) st.event.remove(e, p + t[l], n, r, !0);
                st.isEmptyObject(u) && (delete m.handle, st._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var a, s, u, l, c, d, f, p = [i || G],
                h = n.type || n,
                g = n.namespace ? n.namespace.split(".") : [];
            if (s = u = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !_t.test(h + st.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), c = 0 > h.indexOf(":") && "on" + h, n = n[st.expando] ? n : new st.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : st.makeArray(r, [n]), f = st.event.special[h] || {}, o || !f.trigger || f.trigger.apply(i, r) !== !1)) {
                if (!o && !f.noBubble && !st.isWindow(i)) {
                    for (l = f.delegateType || h, _t.test(l + h) || (s = s.parentNode) ; s; s = s.parentNode) p.push(s), u = s;
                    u === (i.ownerDocument || G) && p.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0;
                    (s = p[a++]) && !n.isPropagationStopped() ;) n.type = a > 1 ? l : f.bindType || h, d = (st._data(s, "events") || {})[n.type] && st._data(s, "handle"), d && d.apply(s, r), d = c && s[c], d && st.acceptData(s) && d.apply && d.apply(s, r) === !1 && n.preventDefault();
                if (n.type = h, !(o || n.isDefaultPrevented() || f._default && f._default.apply(i.ownerDocument, r) !== !1 || "click" === h && st.nodeName(i, "a") || !st.acceptData(i) || !c || !i[h] || st.isWindow(i))) {
                    u = i[c], u && (i[c] = null), st.event.triggered = h;
                    try {
                        i[h]()
                    } catch (m) { }
                    st.event.triggered = t, u && (i[c] = u)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = st.event.fix(e);
            var n, r, i, o, a, s = [],
                u = nt.call(arguments),
                l = (st._data(this, "events") || {})[e.type] || [],
                c = st.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = st.event.handlers.call(this, e, l), n = 0;
                    (o = s[n++]) && !e.isPropagationStopped() ;)
                    for (e.currentTarget = o.elem, r = 0;
                        (a = o.handlers[r++]) && !e.isImmediatePropagationStopped() ;) (!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, i = ((st.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [],
                u = n.delegateCount,
                l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== e.type) {
                        for (i = [], r = 0; u > r; r++) a = n[r], o = a.selector + " ", i[o] === t && (i[o] = a.needsContext ? st(o, this).index(l) >= 0 : st.find(o, this, null, [l]).length), i[o] && i.push(a);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return n.length > u && s.push({
                elem: this,
                handlers: n.slice(u)
            }), s
        },
        fix: function (e) {
            if (e[st.expando]) return e;
            var t, n, r = e,
                i = st.event.fixHooks[e.type] || {},
                o = i.props ? this.props.concat(i.props) : this.props;
            for (e = new st.Event(r), t = o.length; t--;) n = o[t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, a = n.button,
                    s = n.fromElement;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || G, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function () {
                    return st.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
            },
            focus: {
                trigger: function () {
                    if (this !== G.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (e) { }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === G.activeElement && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = st.extend(new st.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? st.event.trigger(i, null, t) : st.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, st.removeEvent = G.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, n, r) {
        var i = "on" + n;
        e.detachEvent && (e[i] === t && (e[i] = null), e.detachEvent(i, r))
    }, st.Event = function (e, n) {
        return this instanceof st.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, n && st.extend(this, n), this.timeStamp = e && e.timeStamp || st.now(), this[st.expando] = !0, t) : new st.Event(e, n)
    }, st.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        }
    }, st.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        st.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !st.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), st.support.submitBubbles || (st.event.special.submit = {
        setup: function () {
            return st.nodeName(this, "form") ? !1 : (st.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = st.nodeName(n, "input") || st.nodeName(n, "button") ? n.form : t;
                r && !st._data(r, "submitBubbles") && (st.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), st._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && st.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return st.nodeName(this, "form") ? !1 : (st.event.remove(this, "._submit"), t)
        }
    }), st.support.changeBubbles || (st.event.special.change = {
        setup: function () {
            return Ot.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (st.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), st.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), st.event.simulate("change", this, e, !0)
            })), !1) : (st.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Ot.test(t.nodeName) && !st._data(t, "changeBubbles") && (st.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || st.event.simulate("change", this.parentNode, e, !0)
                }), st._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function () {
            return st.event.remove(this, "._change"), !Ot.test(this.nodeName)
        }
    }), st.support.focusinBubbles || st.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                st.event.simulate(t, e.target, st.event.fix(e), !0)
            };
        st.event.special[t] = {
            setup: function () {
                0 === n++ && G.addEventListener(e, r, !0)
            },
            teardown: function () {
                0 === --n && G.removeEventListener(e, r, !0)
            }
        }
    }), st.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (s in e) this.on(s, n, r, e[s], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = l;
            else if (!i) return this;
            return 1 === o && (a = i, i = function (e) {
                return st().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = st.guid++)), this.each(function () {
                st.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, st(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = l), this.each(function () {
                st.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                st.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, n) {
            var r = this[0];
            return r ? st.event.trigger(e, n, r, !0) : t
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        st.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, Pt.test(t) && (st.event.fixHooks[t] = st.event.keyHooks), Ht.test(t) && (st.event.fixHooks[t] = st.event.mouseHooks)
    }),
        function (e, t) {
            function n(e) {
                return ht.test(e + "")
            }

            function r() {
                var e, t = [];
                return e = function (n, r) {
                    return t.push(n += " ") > N.cacheLength && delete e[t.shift()], e[n] = r
                }
            }

            function i(e) {
                return e[q] = !0, e
            }

            function o(e) {
                var t = M.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }

            function a(e, t, n, r) {
                var i, o, a, s, u, l, c, p, h, g;
                if ((t ? t.ownerDocument || t : F) !== M && D(t), t = t || M, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (!B && !r) {
                    if (i = gt.exec(e))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && _(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (i[2]) return K.apply(n, J.call(t.getElementsByTagName(e), 0)), n;
                            if ((a = i[3]) && R.getByClassName && t.getElementsByClassName) return K.apply(n, J.call(t.getElementsByClassName(a), 0)), n
                        }
                    if (R.qsa && !O.test(e)) {
                        if (c = !0, p = q, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = d(e), (c = t.getAttribute("id")) ? p = c.replace(yt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + f(l[u]);
                            h = pt.test(e) && t.parentNode || t, g = l.join(",")
                        }
                        if (g) try {
                            return K.apply(n, J.call(h.querySelectorAll(g), 0)), n
                        } catch (m) { } finally {
                            c || t.removeAttribute("id")
                        }
                    }
                }
                return x(e.replace(at, "$1"), t, n, r)
            }

            function s(e, t) {
                for (var n = e && t && e.nextSibling; n; n = n.nextSibling)
                    if (n === t) return -1;
                return e ? 1 : -1
            }

            function u(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return i(function (t) {
                    return t = +t, i(function (n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function d(e, t) {
                var n, r, i, o, s, u, l, c = z[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = N.preFilter; s;) {
                    (!n || (r = ut.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])), n = !1, (r = lt.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(at, " ")
                    }), s = s.slice(n.length));
                    for (o in N.filter) !(r = ft[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: o,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? a.error(e) : z(e, u).slice(0)
            }

            function f(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function p(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === t.dir,
                    o = $++;
                return t.first ? function (t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function (t, n, a) {
                    var s, u, l, c = W + " " + o;
                    if (a) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i)
                                if (l = t[q] || (t[q] = {}), (u = l[r]) && u[0] === c) {
                                    if ((s = u[1]) === !0 || s === T) return s === !0
                                } else if (u = l[r] = [c], u[1] = e(t, n, a) || T, u[1] === !0) return !0
                }
            }

            function h(e) {
                return e.length > 1 ? function (t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                return a
            }

            function m(e, t, n, r, o, a) {
                return r && !r[q] && (r = m(r)), o && !o[q] && (o = m(o, a)), i(function (i, a, s, u) {
                    var l, c, d, f = [],
                        p = [],
                        h = a.length,
                        m = i || b(t || "*", s.nodeType ? [s] : s, []),
                        v = !e || !i && t ? m : g(m, f, e, s, u),
                        y = n ? o || (i ? e : h || r) ? [] : a : v;
                    if (n && n(v, y, s, u), r)
                        for (l = g(y, p), r(l, [], s, u), c = l.length; c--;) (d = l[c]) && (y[p[c]] = !(v[p[c]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = y.length; c--;) (d = y[c]) && l.push(v[c] = d);
                                o(null, y = [], l, u)
                            }
                            for (c = y.length; c--;) (d = y[c]) && (l = o ? Z.call(i, d) : f[c]) > -1 && (i[l] = !(a[l] = d))
                        }
                    } else y = g(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, u) : K.apply(a, y)
                })
            }

            function v(e) {
                for (var t, n, r, i = e.length, o = N.relative[e[0].type], a = o || N.relative[" "], s = o ? 1 : 0, u = p(function (e) {
                    return e === t
                }, a, !0), l = p(function (e) {
                    return Z.call(t, e) > -1
                }, a, !0), c = [
                    function (e, n, r) {
                        return !o && (r || n !== L) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                }
                ]; i > s; s++)
                    if (n = N.relative[e[s].type]) c = [p(h(c), n)];
                    else {
                        if (n = N.filter[e[s].type].apply(null, e[s].matches), n[q]) {
                            for (r = ++s; i > r && !N.relative[e[r].type]; r++);
                            return m(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1)).replace(at, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && f(e))
                        }
                        c.push(n)
                    }
                return h(c)
            }

            function y(e, t) {
                var n = 0,
                    r = t.length > 0,
                    o = e.length > 0,
                    s = function (i, s, u, l, c) {
                        var d, f, p, h = [],
                            m = 0,
                            v = "0",
                            y = i && [],
                            b = null != c,
                            x = L,
                            w = i || o && N.find.TAG("*", c && s.parentNode || s),
                            C = W += null == x ? 1 : Math.E;
                        for (b && (L = s !== M && s, T = n) ; null != (d = w[v]) ; v++) {
                            if (o && d) {
                                for (f = 0; p = e[f]; f++)
                                    if (p(d, s, u)) {
                                        l.push(d);
                                        break
                                    }
                                b && (W = C, T = ++n)
                            }
                            r && ((d = !p && d) && m--, i && y.push(d))
                        }
                        if (m += v, r && v !== m) {
                            for (f = 0; p = t[f]; f++) p(y, h, s, u);
                            if (i) {
                                if (m > 0)
                                    for (; v--;) y[v] || h[v] || (h[v] = V.call(l));
                                h = g(h)
                            }
                            K.apply(l, h), b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(l)
                        }
                        return b && (W = C, L = x), y
                    };
                return r ? i(s) : s
            }

            function b(e, t, n) {
                for (var r = 0, i = t.length; i > r; r++) a(e, t[r], n);
                return n
            }

            function x(e, t, n, r) {
                var i, o, a, s, u, l = d(e);
                if (!r && 1 === l.length) {
                    if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !B && N.relative[o[1].type]) {
                        if (t = N.find.ID(a.matches[0].replace(xt, wt), t)[0], !t) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = ft.needsContext.test(e) ? -1 : o.length - 1; i >= 0 && (a = o[i], !N.relative[s = a.type]) ; i--)
                        if ((u = N.find[s]) && (r = u(a.matches[0].replace(xt, wt), pt.test(o[0].type) && t.parentNode || t))) {
                            if (o.splice(i, 1), e = r.length && f(o), !e) return K.apply(n, J.call(r, 0)), n;
                            break
                        }
                }
                return S(e, l)(r, t, B, n, pt.test(e)), n
            }

            function w() { }
            var C, T, N, k, E, S, A, L, D, M, j, B, O, P, H, _, I, q = "sizzle" + -new Date,
                F = e.document,
                R = {},
                W = 0,
                $ = 0,
                X = r(),
                z = r(),
                Q = r(),
                G = typeof t,
                Y = 1 << 31,
                U = [],
                V = U.pop,
                K = U.push,
                J = U.slice,
                Z = U.indexOf || function (e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                et = "[\\x20\\t\\r\\n\\f]",
                tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                nt = tt.replace("w", "w#"),
                rt = "([*^$|!~]?=)",
                it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]",
                ot = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)",
                at = RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
                ut = RegExp("^" + et + "*," + et + "*"),
                lt = RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"),
                ct = RegExp(ot),
                dt = RegExp("^" + nt + "$"),
                ft = {
                    ID: RegExp("^#(" + tt + ")"),
                    CLASS: RegExp("^\\.(" + tt + ")"),
                    NAME: RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
                    TAG: RegExp("^(" + tt.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + it),
                    PSEUDO: RegExp("^" + ot),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
                    needsContext: RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
                },
                pt = /[\x20\t\r\n\f]*[+~]/,
                ht = /\{\s*\[native code\]\s*\}/,
                gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                mt = /^(?:input|select|textarea|button)$/i,
                vt = /^h\d$/i,
                yt = /'|\\/g,
                bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                wt = function (e, t) {
                    var n = "0x" + t - 65536;
                    return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                };
            try {
                J.call(j.childNodes, 0)[0].nodeType
            } catch (Ct) {
                J = function (e) {
                    for (var t, n = []; t = this[e]; e++) n.push(t);
                    return n
                }
            }
            E = a.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, D = a.setDocument = function (e) {
                var r = e ? e.ownerDocument || e : F;
                return r !== M && 9 === r.nodeType && r.documentElement ? (M = r, j = r.documentElement, B = E(r), R.tagNameNoComments = o(function (e) {
                    return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                }), R.attributes = o(function (e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }), R.getByClassName = o(function (e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                }), R.getByName = o(function (e) {
                    e.id = q + 0, e.innerHTML = "<a name='" + q + "'></a><div name='" + q + "'></div>", j.insertBefore(e, j.firstChild);
                    var t = r.getElementsByName && r.getElementsByName(q).length === 2 + r.getElementsByName(q + 0).length;
                    return R.getIdNotName = !r.getElementById(q), j.removeChild(e), t
                }), N.attrHandle = o(function (e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== G && "#" === e.firstChild.getAttribute("href")
                }) ? {} : {
                    href: function (e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function (e) {
                        return e.getAttribute("type")
                    }
                }, R.getIdNotName ? (N.find.ID = function (e, t) {
                    if (typeof t.getElementById !== G && !B) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, N.filter.ID = function (e) {
                    var t = e.replace(xt, wt);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (N.find.ID = function (e, n) {
                    if (typeof n.getElementById !== G && !B) {
                        var r = n.getElementById(e);
                        return r ? r.id === e || typeof r.getAttributeNode !== G && r.getAttributeNode("id").value === e ? [r] : t : []
                    }
                }, N.filter.ID = function (e) {
                    var t = e.replace(xt, wt);
                    return function (e) {
                        var n = typeof e.getAttributeNode !== G && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), N.find.TAG = R.tagNameNoComments ? function (e, n) {
                    return typeof n.getElementsByTagName !== G ? n.getElementsByTagName(e) : t
                } : function (e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i]; i++) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, N.find.NAME = R.getByName && function (e, n) {
                    return typeof n.getElementsByName !== G ? n.getElementsByName(name) : t
                }, N.find.CLASS = R.getByClassName && function (e, n) {
                    return typeof n.getElementsByClassName === G || B ? t : n.getElementsByClassName(e)
                }, P = [], O = [":focus"], (R.qsa = n(r.querySelectorAll)) && (o(function (e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || O.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || O.push(":checked")
                }), o(function (e) {
                    e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && O.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                })), (R.matchesSelector = n(H = j.matchesSelector || j.mozMatchesSelector || j.webkitMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function (e) {
                    R.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), P.push("!=", ot)
                }), O = RegExp(O.join("|")), P = RegExp(P.join("|")), _ = n(j.contains) || j.compareDocumentPosition ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, I = j.compareDocumentPosition ? function (e, t) {
                    var n;
                    return e === t ? (A = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || _(F, e) ? -1 : t === r || _(F, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function (e, t) {
                    var n, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        u = [e],
                        l = [t];
                    if (e === t) return A = !0, 0;
                    if (e.sourceIndex && t.sourceIndex) return (~t.sourceIndex || Y) - (_(F, e) && ~e.sourceIndex || Y);
                    if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                    if (o === a) return s(e, t);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; u[i] === l[i];) i++;
                    return i ? s(u[i], l[i]) : u[i] === F ? -1 : l[i] === F ? 1 : 0
                }, A = !1, [0, 0].sort(I), R.detectDuplicates = A, M) : M
            }, a.matches = function (e, t) {
                return a(e, null, null, t)
            }, a.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== M && D(e), t = t.replace(bt, "='$1']"), !(!R.matchesSelector || B || P && P.test(t) || O.test(t))) try {
                    var n = H.call(e, t);
                    if (n || R.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (r) { }
                return a(t, M, null, [e]).length > 0
            }, a.contains = function (e, t) {
                return (e.ownerDocument || e) !== M && D(e), _(e, t)
            }, a.attr = function (e, t) {
                var n;
                return (e.ownerDocument || e) !== M && D(e), B || (t = t.toLowerCase()), (n = N.attrHandle[t]) ? n(e) : B || R.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
            }, a.error = function (e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, a.uniqueSort = function (e) {
                var t, n = [],
                    r = 1,
                    i = 0;
                if (A = !R.detectDuplicates, e.sort(I), A) {
                    for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return e
            }, k = a.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += k(t);
                return n
            }, N = a.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ft,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(xt, wt), e[3] = (e[4] || e[5] || "").replace(xt, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[5] && e[2];
                        return ft.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ct.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        return "*" === e ? function () {
                            return !0
                        } : (e = e.replace(xt, wt).toLowerCase(), function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function (e) {
                        var t = X[e + " "];
                        return t || (t = RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && X(e, function (e) {
                            return t.test(e.className || typeof e.getAttribute !== G && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, t, n) {
                        return function (r) {
                            var i = a.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.substr(i.length - n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.substr(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, u) {
                            var l, c, d, f, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !u && !s;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (c = m[q] || (m[q] = {}), l = c[e] || [], p = l[0] === W && l[1], f = l[0] === W && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || h.pop() ;)
                                        if (1 === d.nodeType && ++f && d === t) {
                                            c[e] = [W, p, f];
                                            break
                                        }
                                } else if (y && (l = (t[q] || (t[q] = {}))[e]) && l[0] === W) f = l[1];
                                else
                                    for (;
                                        (d = ++p && d && d[g] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[q] || (d[q] = {}))[e] = [W, f]), d !== t)) ;);
                                return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var n, r = N.pseudos[e] || N.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                        return r[q] ? r(t) : r.length > 1 ? (n = [e, e, "", t], N.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                            for (var i, o = r(e, t), a = o.length; a--;) i = Z.call(e, o[a]), e[i] = !(n[i] = o[a])
                        }) : function (e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function (e) {
                        var t = [],
                            n = [],
                            r = S(e.replace(at, "$1"));
                        return r[q] ? i(function (e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function (e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: i(function (e) {
                        return function (t) {
                            return a(e, t).length > 0
                        }
                    }),
                    contains: i(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function (e) {
                        return dt.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(xt, wt).toLowerCase(),
                            function (t) {
                                var n;
                                do
                                    if (n = B ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === j
                    },
                    focus: function (e) {
                        return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return e.disabled === !1
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !N.pseudos.empty(e)
                    },
                    header: function (e) {
                        return vt.test(e.nodeName)
                    },
                    input: function (e) {
                        return mt.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: c(function () {
                        return [0]
                    }),
                    last: c(function (e, t) {
                        return [t - 1]
                    }),
                    eq: c(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: c(function (e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: c(function (e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: c(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: c(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                        return e
                    })
                }
            };
            for (C in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) N.pseudos[C] = u(C);
            for (C in {
                submit: !0,
                reset: !0
            }) N.pseudos[C] = l(C);
            S = a.compile = function (e, t) {
                var n, r = [],
                    i = [],
                    o = Q[e + " "];
                if (!o) {
                    for (t || (t = d(e)), n = t.length; n--;) o = v(t[n]), o[q] ? r.push(o) : i.push(o);
                    o = Q(e, y(i, r))
                }
                return o
            }, N.pseudos.nth = N.pseudos.eq, N.filters = w.prototype = N.pseudos, N.setFilters = new w, D(), a.attr = st.attr, st.find = a, st.expr = a.selectors, st.expr[":"] = st.expr.pseudos, st.unique = a.uniqueSort, st.text = a.getText, st.isXMLDoc = a.isXML, st.contains = a.contains
        }(e);
    var qt = /Until$/,
        Ft = /^(?:parents|prev(?:Until|All))/,
        Rt = /^.[^:#\[\.,]*$/,
        Wt = st.expr.match.needsContext,
        $t = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    st.fn.extend({
        find: function (e) {
            var t, n, r;
            if ("string" != typeof e) return r = this, this.pushStack(st(e).filter(function () {
                for (t = 0; r.length > t; t++)
                    if (st.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; this.length > t; t++) st.find(e, this[t], n);
            return n = this.pushStack(st.unique(n)), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function (e) {
            var t, n = st(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)
                    if (st.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(d(this, e, !1))
        },
        filter: function (e) {
            return this.pushStack(d(this, e, !0))
        },
        is: function (e) {
            return !!e && ("string" == typeof e ? Wt.test(e) ? st(e, this.context).index(this[0]) >= 0 : st.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = Wt.test(e) || "string" != typeof e ? st(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (a ? a.index(n) > -1 : st.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return this.pushStack(o.length > 1 ? st.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? st.inArray(this[0], st(e)) : st.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? st(e, t) : st.makeArray(e && e.nodeType ? [e] : e),
                r = st.merge(this.get(), n);
            return this.pushStack(st.unique(r))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), st.fn.andSelf = st.fn.addBack, st.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return st.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return st.dir(e, "parentNode", n)
        },
        next: function (e) {
            return c(e, "nextSibling")
        },
        prev: function (e) {
            return c(e, "previousSibling")
        },
        nextAll: function (e) {
            return st.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return st.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return st.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return st.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return st.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return st.sibling(e.firstChild)
        },
        contents: function (e) {
            return st.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : st.merge([], e.childNodes)
        }
    }, function (e, t) {
        st.fn[e] = function (n, r) {
            var i = st.map(this, t, n);
            return qt.test(e) || (r = n), r && "string" == typeof r && (i = st.filter(r, i)), i = this.length > 1 && !$t[e] ? st.unique(i) : i, this.length > 1 && Ft.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), st.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? st.find.matchesSelector(t[0], e) ? [t[0]] : [] : st.find.matches(e, t)
        },
        dir: function (e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !st(o).is(r)) ;) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Xt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        zt = / jQuery\d+="(?:null|\d+)"/g,
        Qt = RegExp("<(?:" + Xt + ")[\\s/>]", "i"),
        Gt = /^\s+/,
        Yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ut = /<([\w:]+)/,
        Vt = /<tbody/i,
        Kt = /<|&#?\w+;/,
        Jt = /<(?:script|style|link)/i,
        Zt = /^(?:checkbox|radio)$/i,
        en = /checked\s*(?:[^=]|=\s*.checked.)/i,
        tn = /^$|\/(?:java|ecma)script/i,
        nn = /^true\/(.*)/,
        rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        on = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: st.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        an = f(G),
        sn = an.appendChild(G.createElement("div"));
    on.optgroup = on.option, on.tbody = on.tfoot = on.colgroup = on.caption = on.thead, on.th = on.td, st.fn.extend({
        text: function (e) {
            return st.access(this, function (e) {
                return e === t ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if (st.isFunction(e)) return this.each(function (t) {
                st(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = st(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return st.isFunction(e) ? this.each(function (t) {
                st(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = st(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = st.isFunction(e);
            return this.each(function (n) {
                st(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, r = 0; null != (n = this[r]) ; r++) (!e || st.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || st.cleanData(b(n)), n.parentNode && (t && st.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]) ; t++) {
                for (1 === e.nodeType && st.cleanData(b(e, !1)) ; e.firstChild;) e.removeChild(e.firstChild);
                e.options && st.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return st.clone(this, e, t)
            })
        },
        html: function (e) {
            return st.access(this, function (e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(zt, "") : t;
                if (!("string" != typeof e || Jt.test(e) || !st.support.htmlSerialize && Qt.test(e) || !st.support.leadingWhitespace && Gt.test(e) || on[(Ut.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Yt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (st.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) { }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            var t = st.isFunction(e);
            return t || "string" == typeof e || (e = st(e).not(this).detach()), this.domManip([e], !0, function (e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                (n && 1 === this.nodeType || 11 === this.nodeType) && (st(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e))
            })
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            e = et.apply([], e);
            var i, o, a, s, u, l, c = 0,
                d = this.length,
                f = this,
                m = d - 1,
                v = e[0],
                y = st.isFunction(v);
            if (y || !(1 >= d || "string" != typeof v || st.support.checkClone) && en.test(v)) return this.each(function (i) {
                var o = f.eq(i);
                y && (e[0] = v.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (d && (i = st.buildFragment(e, this[0].ownerDocument, !1, this), o = i.firstChild, 1 === i.childNodes.length && (i = o), o)) {
                for (n = n && st.nodeName(o, "tr"), a = st.map(b(i, "script"), h), s = a.length; d > c; c++) u = i, c !== m && (u = st.clone(u, !0, !0), s && st.merge(a, b(u, "script"))), r.call(n && st.nodeName(this[c], "table") ? p(this[c], "tbody") : this[c], u, c);
                if (s)
                    for (l = a[a.length - 1].ownerDocument, st.map(a, g), c = 0; s > c; c++) u = a[c], tn.test(u.type || "") && !st._data(u, "globalEval") && st.contains(l, u) && (u.src ? st.ajax({
                        url: u.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : st.globalEval((u.text || u.textContent || u.innerHTML || "").replace(rn, "")));
                i = o = null
            }
            return this
        }
    }), st.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        st.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = st(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), st(o[r])[t](n), tt.apply(i, n.get());
            return this.pushStack(i)
        }
    }), st.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, u = st.contains(e.ownerDocument, e);
            if (st.support.html5Clone || st.isXMLDoc(e) || !Qt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (sn.innerHTML = e.outerHTML, sn.removeChild(s = sn.firstChild)), !(st.support.noCloneEvent && st.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || st.isXMLDoc(e)))
                for (r = b(s), i = b(e), a = 0; null != (o = i[a]) ; ++a) r[a] && y(o, r[a]);
            if (t)
                if (n)
                    for (i = i || b(e), r = r || b(s), a = 0; null != (o = i[a]) ; a++) v(o, r[a]);
                else v(e, s);
            return r = b(s, "script"), r.length > 0 && m(r, !u && b(e, "script")), r = i = o = null, s
        },
        buildFragment: function (e, t, n, r) {
            for (var i, o, a, s, u, l, c, d = e.length, p = f(t), h = [], g = 0; d > g; g++)
                if (o = e[g], o || 0 === o)
                    if ("object" === st.type(o)) st.merge(h, o.nodeType ? [o] : o);
                    else if (Kt.test(o)) {
                        for (s = s || p.appendChild(t.createElement("div")), a = (Ut.exec(o) || ["", ""])[1].toLowerCase(), u = on[a] || on._default, s.innerHTML = u[1] + o.replace(Yt, "<$1></$2>") + u[2], c = u[0]; c--;) s = s.lastChild;
                        if (!st.support.leadingWhitespace && Gt.test(o) && h.push(t.createTextNode(Gt.exec(o)[0])), !st.support.tbody)
                            for (o = "table" !== a || Vt.test(o) ? "<table>" !== u[1] || Vt.test(o) ? 0 : s : s.firstChild, c = o && o.childNodes.length; c--;) st.nodeName(l = o.childNodes[c], "tbody") && !l.childNodes.length && o.removeChild(l);
                        for (st.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                        s = p.lastChild
                    } else h.push(t.createTextNode(o));
            for (s && p.removeChild(s), st.support.appendChecked || st.grep(b(h, "input"), x), g = 0; o = h[g++];)
                if ((!r || -1 === st.inArray(o, r)) && (i = st.contains(o.ownerDocument, o), s = b(p.appendChild(o), "script"), i && m(s), n))
                    for (c = 0; o = s[c++];) tn.test(o.type || "") && n.push(o);
            return s = null, p
        },
        cleanData: function (e, n) {
            for (var r, i, o, a, s = 0, u = st.expando, l = st.cache, c = st.support.deleteExpando, d = st.event.special; null != (o = e[s]) ; s++)
                if ((n || st.acceptData(o)) && (i = o[u], r = i && l[i])) {
                    if (r.events)
                        for (a in r.events) d[a] ? st.event.remove(o, a) : st.removeEvent(o, a, r.handle);
                    l[i] && (delete l[i], c ? delete o[u] : o.removeAttribute !== t ? o.removeAttribute(u) : o[u] = null, J.push(i))
                }
        }
    });
    var un, ln, cn, dn = /alpha\([^)]*\)/i,
        fn = /opacity\s*=\s*([^)]*)/,
        pn = /^(top|right|bottom|left)$/,
        hn = /^(none|table(?!-c[ea]).+)/,
        gn = /^margin/,
        mn = RegExp("^(" + ut + ")(.*)$", "i"),
        vn = RegExp("^(" + ut + ")(?!px)[a-z%]+$", "i"),
        yn = RegExp("^([+-])=(" + ut + ")", "i"),
        bn = {
            BODY: "block"
        },
        xn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        wn = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Cn = ["Top", "Right", "Bottom", "Left"],
        Tn = ["Webkit", "O", "Moz", "ms"];
    st.fn.extend({
        css: function (e, n) {
            return st.access(this, function (e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (st.isArray(n)) {
                    for (i = ln(e), o = n.length; o > s; s++) a[n[s]] = st.css(e, n[s], !1, i);
                    return a
                }
                return r !== t ? st.style(e, n, r) : st.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return T(this, !0)
        },
        hide: function () {
            return T(this)
        },
        toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : C(this)) ? st(this).show() : st(this).hide()
            })
        }
    }), st.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = un(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": st.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = st.camelCase(n),
                    l = e.style;
                if (n = st.cssProps[u] || (st.cssProps[u] = w(l, u)), s = st.cssHooks[n] || st.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = yn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(st.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || st.cssNumber[u] || (r += "px"), st.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch (c) { }
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, u = st.camelCase(n);
            return n = st.cssProps[u] || (st.cssProps[u] = w(e.style, u)), s = st.cssHooks[n] || st.cssHooks[u], s && "get" in s && (o = s.get(e, !0, r)), o === t && (o = un(e, n, i)), "normal" === o && n in wn && (o = wn[n]), r ? (a = parseFloat(o), r === !0 || st.isNumeric(a) ? a || 0 : o) : o
        },
        swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (ln = function (t) {
        return e.getComputedStyle(t, null)
    }, un = function (e, n, r) {
        var i, o, a, s = r || ln(e),
            u = s ? s.getPropertyValue(n) || s[n] : t,
            l = e.style;
        return s && ("" !== u || st.contains(e.ownerDocument, e) || (u = st.style(e, n)), vn.test(u) && gn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : G.documentElement.currentStyle && (ln = function (e) {
        return e.currentStyle
    }, un = function (e, n, r) {
        var i, o, a, s = r || ln(e),
            u = s ? s[n] : t,
            l = e.style;
        return null == u && l && l[n] && (u = l[n]), vn.test(u) && !pn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    }), st.each(["height", "width"], function (e, n) {
        st.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && hn.test(st.css(e, "display")) ? st.swap(e, xn, function () {
                    return E(e, n, i)
                }) : E(e, n, i) : t
            },
            set: function (e, t, r) {
                var i = r && ln(e);
                return N(e, t, r ? k(e, n, r, st.support.boxSizing && "border-box" === st.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), st.support.opacity || (st.cssHooks.opacity = {
        get: function (e, t) {
            return fn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = st.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === st.trim(o.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = dn.test(o) ? o.replace(dn, i) : o + " " + i)
        }
    }), st(function () {
        st.support.reliableMarginRight || (st.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? st.swap(e, {
                    display: "inline-block"
                }, un, [e, "marginRight"]) : t
            }
        }), !st.support.pixelPosition && st.fn.position && st.each(["top", "left"], function (e, n) {
            st.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = un(e, n), vn.test(r) ? st(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), st.expr && st.expr.filters && (st.expr.filters.hidden = function (e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !st.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || st.css(e, "display"))
    }, st.expr.filters.visible = function (e) {
        return !st.expr.filters.hidden(e)
    }), st.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        st.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Cn[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, gn.test(e) || (st.cssHooks[e + t].set = N)
    });
    var Nn = /%20/g,
        kn = /\[\]$/,
        En = /\r?\n/g,
        Sn = /^(?:submit|button|image|reset)$/i,
        An = /^(?:input|select|textarea|keygen)/i;
    st.fn.extend({
        serialize: function () {
            return st.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = st.prop(this, "elements");
                return e ? st.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !st(this).is(":disabled") && An.test(this.nodeName) && !Sn.test(e) && (this.checked || !Zt.test(e))
            }).map(function (e, t) {
                var n = st(this).val();
                return null == n ? null : st.isArray(n) ? st.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(En, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(En, "\r\n")
                }
            }).get()
        }
    }), st.param = function (e, n) {
        var r, i = [],
            o = function (e, t) {
                t = st.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(e) || e.jquery && !st.isPlainObject(e)) st.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (r in e) L(r, e[r], n, o);
        return i.join("&").replace(Nn, "+")
    };
    var Ln, Dn, Mn = st.now(),
        jn = /\?/,
        Bn = /#.*$/,
        On = /([?&])_=[^&]*/,
        Pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Hn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        _n = /^(?:GET|HEAD)$/,
        In = /^\/\//,
        qn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Fn = st.fn.load,
        Rn = {},
        Wn = {},
        $n = "*/".concat("*");
    try {
        Dn = Y.href
    } catch (Xn) {
        Dn = G.createElement("a"), Dn.href = "", Dn = Dn.href
    }
    Ln = qn.exec(Dn.toLowerCase()) || [], st.fn.load = function (e, n, r) {
        if ("string" != typeof e && Fn) return Fn.apply(this, arguments);
        var i, o, a, s = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), st.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), s.length > 0 && st.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function (e) {
            a = arguments, s.html(i ? st("<div>").append(st.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, a || [e.responseText, t, e])
        }), this
    }, st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        st.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), st.each(["get", "post"], function (e, n) {
        st[n] = function (e, r, i, o) {
            return st.isFunction(r) && (o = o || i, i = r, r = t), st.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), st.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dn,
            type: "GET",
            isLocal: Hn.test(Ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $n,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": st.parseJSON,
                "text xml": st.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? j(j(e, st.ajaxSettings), t) : j(st.ajaxSettings, e)
        },
        ajaxPrefilter: D(Rn),
        ajaxTransport: D(Wn),
        ajax: function (e, n) {
            function r(e, n, r, s) {
                var l, d, y, b, w, T = n;
                2 !== x && (x = 2, u && clearTimeout(u), i = t, a = s || "", C.readyState = e > 0 ? 4 : 0, r && (b = B(f, C, r)), e >= 200 && 300 > e || 304 === e ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (st.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (st.etag[o] = w)), 304 === e ? (l = !0, T = "notmodified") : (l = O(f, b), T = l.state, d = l.data, y = l.error, l = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || T) + "", l ? g.resolveWith(p, [d, T, C]) : g.rejectWith(p, [C, T, y]), C.statusCode(v), v = t, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [C, f, l ? d : y]), m.fireWith(p, [C, T]), c && (h.trigger("ajaxComplete", [C, f]), --st.active || st.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, l, c, d, f = st.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? st(p) : st.event,
                g = st.Deferred(),
                m = st.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; t = Pn.exec(a) ;) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) v[t] = [v[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || w;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (g.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, f.url = ((e || f.url || Dn) + "").replace(Bn, "").replace(In, Ln[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = st.trim(f.dataType || "*").toLowerCase().match(lt) || [""], null == f.crossDomain && (l = qn.exec(f.url.toLowerCase()), f.crossDomain = !(!l || l[1] === Ln[1] && l[2] === Ln[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (Ln[3] || ("http:" === Ln[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = st.param(f.data, f.traditional)), M(Rn, f, n, C), 2 === x) return C;
            c = f.global, c && 0 === st.active++ && st.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !_n.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (jn.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = On.test(o) ? o.replace(On, "$1_=" + Mn++) : o + (jn.test(o) ? "&" : "?") + "_=" + Mn++)), f.ifModified && (st.lastModified[o] && C.setRequestHeader("If-Modified-Since", st.lastModified[o]), st.etag[o] && C.setRequestHeader("If-None-Match", st.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + $n + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (f.beforeSend.call(p, C, f) === !1 || 2 === x)) return C.abort();
            w = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) C[d](f[d]);
            if (i = M(Wn, f, n, C)) {
                C.readyState = 1, c && h.trigger("ajaxSend", [C, f]), f.async && f.timeout > 0 && (u = setTimeout(function () {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, i.send(y, r)
                } catch (T) {
                    if (!(2 > x)) throw T;
                    r(-1, T)
                }
            } else r(-1, "No Transport");
            return C
        },
        getScript: function (e, n) {
            return st.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return st.get(e, t, n, "json")
        }
    }), st.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return st.globalEval(e), e
            }
        }
    }), st.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), st.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = G.head || st("head")[0] || G.documentElement;
            return {
                send: function (t, i) {
                    n = G.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var zn = [],
        Qn = /(=)\?(?=&|$)|\?\?/;
    st.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = zn.pop() || st.expando + "_" + Mn++;
            return this[e] = !0, e
        }
    }), st.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Qn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Qn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = st.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Qn, "$1" + o) : n.jsonp !== !1 && (n.url += (jn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || st.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, zn.push(o)), s && st.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Gn, Yn, Un = 0,
        Vn = e.ActiveXObject && function () {
            var e;
            for (e in Gn) Gn[e](t, !0)
        };
    st.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && P() || H()
    } : P, Yn = st.ajaxSettings.xhr(), st.support.cors = !!Yn && "withCredentials" in Yn, Yn = st.support.ajax = !!Yn, Yn && st.ajaxTransport(function (n) {
        if (!n.crossDomain || st.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch (l) { }
                    u.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, l, c, d, f;
                        try {
                            if (r && (i || 4 === u.readyState))
                                if (r = t, a && (u.onreadystatechange = st.noop, Vn && delete Gn[a]), i) 4 !== u.readyState && u.abort();
                                else {
                                    d = {}, s = u.status, f = u.responseXML, c = u.getAllResponseHeaders(), f && f.documentElement && (d.xml = f), "string" == typeof u.responseText && (d.text = u.responseText);
                                    try {
                                        l = u.statusText
                                    } catch (p) {
                                        l = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                }
                        } catch (h) {
                            i || o(-1, h)
                        }
                        d && o(s, l, d, c)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Un, Vn && (Gn || (Gn = {}, st(e).unload(Vn)), Gn[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Kn, Jn, Zn = /^(?:toggle|show|hide)$/,
        er = RegExp("^(?:([+-])=|)(" + ut + ")([a-z%]*)$", "i"),
        tr = /queueHooks$/,
        nr = [R],
        rr = {
            "*": [
                function (e, t) {
                    var n, r, i = this.createTween(e, t),
                        o = er.exec(t),
                        a = i.cur(),
                        s = +a || 0,
                        u = 1,
                        l = 20;
                    if (o) {
                        if (n = +o[2], r = o[3] || (st.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                            s = st.css(i.elem, e, !0) || n || 1;
                            do u = u || ".5", s /= u, st.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
                        }
                        i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                    }
                    return i
                }
            ]
        };
    st.Animation = st.extend(q, {
        tweener: function (e, t) {
            st.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], rr[n] = rr[n] || [], rr[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? nr.unshift(e) : nr.push(e)
        }
    }), st.Tween = W, W.prototype = {
        constructor: W,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (st.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = W.propHooks[this.prop];
            return e && e.get ? e.get(this) : W.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = W.propHooks[this.prop];
            return this.pos = t = this.options.duration ? st.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
        }
    }, W.prototype.init.prototype = W.prototype, W.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = st.css(e.elem, e.prop, "auto"), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                st.fx.step[e.prop] ? st.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[st.cssProps[e.prop]] || st.cssHooks[e.prop]) ? st.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, st.each(["toggle", "show", "hide"], function (e, t) {
        var n = st.fn[t];
        st.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, r, i)
        }
    }), st.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(C).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = st.isEmptyObject(e),
                o = st.speed(t, n, r),
                a = function () {
                    var t = q(this, st.extend({}, e), o);
                    a.finish = function () {
                        t.stop(!0)
                    }, (i || st._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = st.timers,
                    a = st._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && tr.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && st.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = st._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = st.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, st.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), st.each({
        slideDown: $("show"),
        slideUp: $("hide"),
        slideToggle: $("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        st.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), st.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? st.extend({}, e) : {
            complete: n || !n && t || st.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !st.isFunction(t) && t
        };
        return r.duration = st.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in st.fx.speeds ? st.fx.speeds[r.duration] : st.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            st.isFunction(r.old) && r.old.call(this), r.queue && st.dequeue(this, r.queue)
        }, r
    }, st.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, st.timers = [], st.fx = W.prototype.init, st.fx.tick = function () {
        var e, n = st.timers,
            r = 0;
        for (Kn = st.now() ; n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || st.fx.stop(), Kn = t
    }, st.fx.timer = function (e) {
        e() && st.timers.push(e) && st.fx.start()
    }, st.fx.interval = 13, st.fx.start = function () {
        Jn || (Jn = setInterval(st.fx.tick, st.fx.interval))
    }, st.fx.stop = function () {
        clearInterval(Jn), Jn = null
    }, st.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, st.fx.step = {}, st.expr && st.expr.filters && (st.expr.filters.animated = function (e) {
        return st.grep(st.timers, function (t) {
            return e === t.elem
        }).length
    }), st.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            st.offset.setOffset(this, e, t)
        });
        var n, r, i = {
            top: 0,
            left: 0
        },
            o = this[0],
            a = o && o.ownerDocument;
        if (a) return n = a.documentElement, st.contains(n, o) ? (o.getBoundingClientRect !== t && (i = o.getBoundingClientRect()), r = X(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    }, st.offset = {
        setOffset: function (e, t, n) {
            var r = st.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = st(e),
                s = a.offset(),
                u = st.css(e, "top"),
                l = st.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && st.inArray("auto", [u, l]) > -1,
                d = {},
                f = {};
            c ? (f = a.position(), i = f.top, o = f.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), st.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + i), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : a.css(d)
        }
    }, st.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                    r = this[0];
                return "fixed" === st.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), st.nodeName(e[0], "html") || (n = e.offset()), n.top += st.css(e[0], "borderTopWidth", !0), n.left += st.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - st.css(r, "marginTop", !0),
                    left: t.left - n.left - st.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || G.documentElement; e && !st.nodeName(e, "html") && "static" === st.css(e, "position") ;) e = e.offsetParent;
                return e || G.documentElement
            })
        }
    }), st.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        st.fn[e] = function (i) {
            return st.access(this, function (e, i, o) {
                var a = X(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? st(a).scrollLeft() : o, r ? o : st(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    }), st.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        st.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            st.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return st.access(this, function (n, r, i) {
                    var o;
                    return st.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? st.css(n, r, s) : st.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = st, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return st
    })
})(window), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function (e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function (e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, r, i) {
        return 1 > (t /= i / 2) ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, r, i) {
        return 1 > (t /= i / 2) ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, r, i) {
        return 1 > (t /= i / 2) ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, r, i) {
        return 1 > (t /= i / 2) ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function (e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function (e, t, n, r, i) {
        return 0 == t ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function (e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function (e, t, n, r, i) {
        return 0 == t ? n : t == i ? n + r : 1 > (t /= i / 2) ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function (e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, r, i) {
        return 1 > (t /= i / 2) ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, r, i) {
        var o = 1.70158,
            a = 0,
            s = r;
        if (0 == t) return n;
        if (1 == (t /= i)) return n + r;
        if (a || (a = .3 * i), Math.abs(r) > s) {
            s = r;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(r / s);
        return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - o) * 2 * Math.PI / a)) + n
    },
    easeOutElastic: function (e, t, n, r, i) {
        var o = 1.70158,
            a = 0,
            s = r;
        if (0 == t) return n;
        if (1 == (t /= i)) return n + r;
        if (a || (a = .3 * i), Math.abs(r) > s) {
            s = r;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(r / s);
        return s * Math.pow(2, -10 * t) * Math.sin((t * i - o) * 2 * Math.PI / a) + r + n
    },
    easeInOutElastic: function (e, t, n, r, i) {
        var o = 1.70158,
            a = 0,
            s = r;
        if (0 == t) return n;
        if (2 == (t /= i / 2)) return n + r;
        if (a || (a = i * .3 * 1.5), Math.abs(r) > s) {
            s = r;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(r / s);
        return 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - o) * 2 * Math.PI / a) + n : .5 * s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - o) * 2 * Math.PI / a) + r + n
    },
    easeInBack: function (e, t, n, r, i, o) {
        return void 0 == o && (o = 1.70158), r * (t /= i) * t * ((o + 1) * t - o) + n
    },
    easeOutBack: function (e, t, n, r, i, o) {
        return void 0 == o && (o = 1.70158), r * ((t = t / i - 1) * t * ((o + 1) * t + o) + 1) + n
    },
    easeInOutBack: function (e, t, n, r, i, o) {
        return void 0 == o && (o = 1.70158), 1 > (t /= i / 2) ? r / 2 * t * t * (((o *= 1.525) + 1) * t - o) + n : r / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + n
    },
    easeInBounce: function (e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function (e, t, n, r, i) {
        return 1 / 2.75 > (t /= i) ? r * 7.5625 * t * t + n : 2 / 2.75 > t ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function (e, t, n, r, i) {
        return i / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, r, i) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - i, 0, r, i) + .5 * r + n
    }
});
var ddsmoothmenu = {
    arrowimages: {
        down: ["downarrowclass", "", 0],
        right: ["rightarrowclass", "images/icons/right.png"]
    },
    transition: {
        overtime: 300,
        outtime: 300
    },
    shadow: {
        enable: !1,
        offsetx: 5,
        offsety: 5
    },
    showhidedelay: {
        showdelay: 200,
        hidedelay: 200
    },
    detectwebkit: -1 != navigator.userAgent.toLowerCase().indexOf("applewebkit"),
    detectie6: document.all && !window.XMLHttpRequest,
    css3support: window.msPerformance || !document.all && document.querySelector,
    ismobile: null != navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i),
    getajaxmenu: function (e, t) {
        var n = e("#" + t.contentsource[0]);
        n.html("Loading Menu..."), e.ajax({
            url: t.contentsource[1],
            async: !0,
            error: function (e) {
                n.html("Error fetching content. Server Response: " + e.responseText)
            },
            success: function (r) {
                n.html(r), ddsmoothmenu.buildmenu(e, t)
            }
        })
    }
};
(function (e) {
    e.flexslider = function (t, n) {
        var r = e(t);
        e.data(t, "flexslider", r), r.init = function () {
            function i(e) {
                if (!r.animating && (39 == e.keyCode || 37 == e.keyCode)) {
                    if (39 == e.keyCode) var t = r.getTarget("next");
                    else if (37 == e.keyCode) var t = r.getTarget("prev");
                    r.canAdvance(t) && r.flexAnimate(t, r.vars.pauseOnAction)
                }
            }

            function o(e) {
                r.animating ? e.preventDefault() : 1 == e.touches.length && (r.pause(), y = r.vertical ? r.height() : r.width(), x = Number(new Date), v = r.vertical ? (r.currentSlide + r.cloneOffset) * r.height() : (r.currentSlide + r.cloneOffset) * r.width(), g = r.vertical ? e.touches[0].pageY : e.touches[0].pageX, m = r.vertical ? e.touches[0].pageX : e.touches[0].pageY, r.setTransition(0), this.addEventListener("touchmove", a, !1), this.addEventListener("touchend", s, !1))
            }

            function a(e) {
                b = r.vertical ? g - e.touches[0].pageY : g - e.touches[0].pageX, w = r.vertical ? Math.abs(b) < Math.abs(e.touches[0].pageX - m) : Math.abs(b) < Math.abs(e.touches[0].pageY - m), w || (e.preventDefault(), "slide" == r.vars.animation && r.transitions && (r.vars.animationLoop || (b /= 0 == r.currentSlide && 0 > b || r.currentSlide == r.count - 1 && b > 0 ? Math.abs(b) / y + 2 : 1), r.args[r.prop] = r.vertical ? "translate3d(0," + (-v - b) + "px,0)" : "translate3d(" + (-v - b) + "px,0,0)", r.container.css(r.args)))
            }

            function s() {
                if (r.animating = !1, r.animatingTo == r.currentSlide && !w && null != b) {
                    var e = b > 0 ? r.getTarget("next") : r.getTarget("prev");
                    r.canAdvance(e) && 550 > Number(new Date) - x && Math.abs(b) > 20 || Math.abs(b) > y / 2 ? r.flexAnimate(e, r.vars.pauseOnAction) : "fade" !== r.vars.animation && r.flexAnimate(r.currentSlide, r.vars.pauseOnAction)
                }
                this.removeEventListener("touchmove", a, !1), this.removeEventListener("touchend", s, !1), g = null, m = null, b = null, v = null
            }
            if (r.vars = e.extend({}, e.flexslider.defaults, n), e.data(t, "flexsliderInit", !0), r.container = e(".slides", r).eq(0), r.slides = e(".slides:first > li", r), r.count = r.slides.length, r.animating = !1, r.currentSlide = r.vars.slideToStart, r.animatingTo = r.currentSlide, r.atEnd = 0 == r.currentSlide ? !0 : !1, r.eventType = "ontouchstart" in document.documentElement ? "touchstart" : "click", r.cloneCount = 0, r.cloneOffset = 0, r.manualPause = !1, r.vertical = "vertical" == r.vars.slideDirection, r.prop = r.vertical ? "top" : "marginLeft", r.args = {}, r.transitions = "webkitTransition" in document.body.style && r.vars.useCSS, r.transitions && (r.prop = "-webkit-transform"), "" != r.vars.controlsContainer && (r.controlsContainer = e(r.vars.controlsContainer).eq(e(".slides").index(r.container)), r.containerExists = r.controlsContainer.length > 0), "" != r.vars.manualControls && (r.manualControls = e(r.vars.manualControls, r.containerExists ? r.controlsContainer : r), r.manualExists = r.manualControls.length > 0), r.vars.randomize && (r.slides.sort(function () {
                return Math.round(Math.random()) - .5
            }), r.container.empty().append(r.slides)), "slide" == r.vars.animation.toLowerCase()) {
                r.transitions && r.setTransition(0), r.css({
                    overflow: "hidden"
                }), r.vars.animationLoop && (r.cloneCount = 2, r.cloneOffset = 1, r.container.append(r.slides.filter(":first").clone().addClass("clone")).prepend(r.slides.filter(":last").clone().addClass("clone"))), r.newSlides = e(".slides:first > li", r);
                var u = -1 * (r.currentSlide + r.cloneOffset);
                r.vertical ? (r.newSlides.css({
                    display: "block",
                    width: "100%",
                    "float": "left"
                }), r.container.height(200 * (r.count + r.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    r.css({
                        position: "relative"
                    }).height(r.slides.filter(":first").height()), r.args[r.prop] = r.transitions ? "translate3d(0," + u * r.height() + "px,0)" : u * r.height() + "px", r.container.css(r.args)
                }, 100)) : (r.args[r.prop] = r.transitions ? "translate3d(" + u * r.width() + "px,0,0)" : u * r.width() + "px", r.container.width(200 * (r.count + r.cloneCount) + "%").css(r.args), setTimeout(function () {
                    r.newSlides.width(r.width()).css({
                        "float": "left",
                        display: "block"
                    })
                }, 100))
            } else r.transitions = !1, r.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%"
            }).eq(r.currentSlide).fadeIn(r.vars.animationDuration); if (r.vars.controlNav) {
                if (r.manualExists) r.controlNav = r.manualControls;
                else {
                    for (var l = e('<ol class="flex-control-nav"></ol>'), c = 1, d = 0; r.count > d; d++) l.append("<li><a>" + c + "</a></li>"), c++;
                    r.containerExists ? (e(r.controlsContainer).append(l), r.controlNav = e(".flex-control-nav li a", r.controlsContainer)) : (r.append(l), r.controlNav = e(".flex-control-nav li a", r))
                }
                r.controlNav.eq(r.currentSlide).addClass("active"), r.controlNav.bind(r.eventType, function (t) {
                    t.preventDefault(), e(this).hasClass("active") || (r.direction = r.controlNav.index(e(this)) > r.currentSlide ? "next" : "prev", r.flexAnimate(r.controlNav.index(e(this)), r.vars.pauseOnAction))
                })
            }
            if (r.vars.directionNav) {
                var f = e('<ul class="flex-direction-nav"><li><a class="prev" href="#">' + r.vars.prevText + '</a></li><li><a class="next" href="#">' + r.vars.nextText + "</a></li></ul>");
                r.containerExists ? (e(r.controlsContainer).append(f), r.directionNav = e(".flex-direction-nav li a", r.controlsContainer)) : (r.append(f), r.directionNav = e(".flex-direction-nav li a", r)), r.vars.animationLoop || (0 == r.currentSlide ? r.directionNav.filter(".prev").addClass("disabled") : r.currentSlide == r.count - 1 && r.directionNav.filter(".next").addClass("disabled")), r.directionNav.bind(r.eventType, function (t) {
                    t.preventDefault();
                    var n = e(this).hasClass("next") ? r.getTarget("next") : r.getTarget("prev");
                    r.canAdvance(n) && r.flexAnimate(n, r.vars.pauseOnAction)
                })
            }
            if (r.vars.keyboardNav && 1 == e("ul.slides").length && e(document).bind("keyup", i), r.vars.mousewheel && (r.mousewheelEvent = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel", r.bind(r.mousewheelEvent, function (e) {
                e.preventDefault(), e = e ? e : window.event;
                var t = e.detail ? -1 * e.detail : e.originalEvent.wheelDelta / 40,
                    n = 0 > t ? r.getTarget("next") : r.getTarget("prev");
                r.canAdvance(n) && r.flexAnimate(n, r.vars.pauseOnAction)
            })), r.vars.slideshow && (r.vars.pauseOnHover && r.vars.slideshow && r.hover(function () {
                r.pause()
            }, function () {
                r.manualPause || r.resume()
            }), r.animatedSlides = setInterval(r.animateSlides, r.vars.slideshowSpeed)), r.vars.pausePlay) {
                var p = e('<div class="flex-pauseplay"><span></span></div>');
                r.containerExists ? (r.controlsContainer.append(p), r.pausePlay = e(".flex-pauseplay span", r.controlsContainer)) : (r.append(p), r.pausePlay = e(".flex-pauseplay span", r));
                var h = r.vars.slideshow ? "pause" : "play";
                r.pausePlay.addClass(h).text("pause" == h ? r.vars.pauseText : r.vars.playText), r.pausePlay.bind(r.eventType, function (t) {
                    t.preventDefault(), e(this).hasClass("pause") ? (r.pause(), r.manualPause = !0) : (r.resume(), r.manualPause = !1)
                })
            }
            if ("ontouchstart" in document.documentElement && r.vars.touch) {
                var g, m, v, y, b, x, w = !1;
                r.each(function () {
                    "ontouchstart" in document.documentElement && this.addEventListener("touchstart", o, !1)
                })
            }
            "slide" == r.vars.animation.toLowerCase() && e(window).resize(function () {
                !r.animating && r.is(":visible") && (r.vertical ? (r.height(r.slides.filter(":first").height()), r.args[r.prop] = -1 * (r.currentSlide + r.cloneOffset) * r.slides.filter(":first").height() + "px", r.transitions && (r.setTransition(0), r.args[r.prop] = r.vertical ? "translate3d(0," + r.args[r.prop] + ",0)" : "translate3d(" + r.args[r.prop] + ",0,0)"), r.container.css(r.args)) : (r.newSlides.width(r.width()), r.args[r.prop] = -1 * (r.currentSlide + r.cloneOffset) * r.width() + "px", r.transitions && (r.setTransition(0), r.args[r.prop] = r.vertical ? "translate3d(0," + r.args[r.prop] + ",0)" : "translate3d(" + r.args[r.prop] + ",0,0)"), r.container.css(r.args)))
            }), r.vars.start(r)
        }, r.flexAnimate = function (e, t) {
            if (!r.animating && r.is(":visible"))
                if (r.animating = !0, r.animatingTo = e, r.vars.before(r), t && r.pause(), r.vars.controlNav && r.controlNav.removeClass("active").eq(e).addClass("active"), r.atEnd = 0 == e || e == r.count - 1 ? !0 : !1, !r.vars.animationLoop && r.vars.directionNav && (0 == e ? r.directionNav.removeClass("disabled").filter(".prev").addClass("disabled") : e == r.count - 1 ? r.directionNav.removeClass("disabled").filter(".next").addClass("disabled") : r.directionNav.removeClass("disabled")), r.vars.animationLoop || e != r.count - 1 || (r.pause(), r.vars.end(r)), "slide" == r.vars.animation.toLowerCase()) {
                    var n = r.vertical ? r.slides.filter(":first").height() : r.slides.filter(":first").width();
                    r.slideString = 0 == r.currentSlide && e == r.count - 1 && r.vars.animationLoop && "next" != r.direction ? "0px" : r.currentSlide == r.count - 1 && 0 == e && r.vars.animationLoop && "prev" != r.direction ? -1 * (r.count + 1) * n + "px" : -1 * (e + r.cloneOffset) * n + "px", r.args[r.prop] = r.slideString, r.transitions ? (r.setTransition(r.vars.animationDuration), r.args[r.prop] = r.vertical ? "translate3d(0," + r.slideString + ",0)" : "translate3d(" + r.slideString + ",0,0)", r.container.css(r.args).one("webkitTransitionEnd transitionend", function () {
                        r.wrapup(n)
                    })) : r.container.animate(r.args, r.vars.animationDuration, function () {
                        r.wrapup(n)
                    })
                } else r.slides.eq(r.currentSlide).fadeOut(r.vars.animationDuration), r.slides.eq(e).fadeIn(r.vars.animationDuration, function () {
                    r.wrapup()
                })
        }, r.wrapup = function (e) {
            "slide" == r.vars.animation && (0 == r.currentSlide && r.animatingTo == r.count - 1 && r.vars.animationLoop ? (r.args[r.prop] = -1 * r.count * e + "px", r.transitions && (r.setTransition(0), r.args[r.prop] = r.vertical ? "translate3d(0," + r.args[r.prop] + ",0)" : "translate3d(" + r.args[r.prop] + ",0,0)"), r.container.css(r.args)) : r.currentSlide == r.count - 1 && 0 == r.animatingTo && r.vars.animationLoop && (r.args[r.prop] = -1 * e + "px", r.transitions && (r.setTransition(0), r.args[r.prop] = r.vertical ? "translate3d(0," + r.args[r.prop] + ",0)" : "translate3d(" + r.args[r.prop] + ",0,0)"), r.container.css(r.args))), r.animating = !1, r.currentSlide = r.animatingTo, r.vars.after(r)
        }, r.animateSlides = function () {
            r.animating || r.flexAnimate(r.getTarget("next"))
        }, r.pause = function () {
            clearInterval(r.animatedSlides), r.vars.pausePlay && r.pausePlay.removeClass("pause").addClass("play").text(r.vars.playText)
        }, r.resume = function () {
            r.animatedSlides = setInterval(r.animateSlides, r.vars.slideshowSpeed), r.vars.pausePlay && r.pausePlay.removeClass("play").addClass("pause").text(r.vars.pauseText)
        }, r.canAdvance = function (e) {
            return !r.vars.animationLoop && r.atEnd ? 0 == r.currentSlide && e == r.count - 1 && "next" != r.direction ? !1 : r.currentSlide == r.count - 1 && 0 == e && "next" == r.direction ? !1 : !0 : !0
        }, r.getTarget = function (e) {
            return r.direction = e, "next" == e ? r.currentSlide == r.count - 1 ? 0 : r.currentSlide + 1 : 0 == r.currentSlide ? r.count - 1 : r.currentSlide - 1
        }, r.setTransition = function (e) {
            r.container.css({
                "-webkit-transition-duration": e / 1e3 + "s"
            })
        }, r.init()
    }, e.flexslider.defaults = {
        animation: "fade",
        slideDirection: "horizontal",
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationDuration: 600,
        directionNav: !0,
        controlNav: !0,
        keyboardNav: !0,
        mousewheel: !1,
        prevText: "Previous",
        nextText: "Next",
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        randomize: !1,
        slideToStart: 0,
        animationLoop: !0,
        pauseOnAction: !0,
        pauseOnHover: !1,
        useCSS: !0,
        touch: !0,
        controlsContainer: "",
        manualControls: "",
        start: function () { },
        before: function () { },
        after: function () { },
        end: function () { }
    }, e.fn.flexslider = function (t) {
        return this.each(function () {
            var n = e(this).find(".slides > li");
            1 === n.length ? (n.fadeIn(400), t && t.start && t.start(e(this))) : 1 != e(this).data("flexsliderInit") && new e.flexslider(this, t)
        })
    }
})(jQuery),
function (e) {
    function t() { }

    function n(e) {
        this.content = e, this.shown = !1
    }
    e.fn.colorTip = function (r) {
        var i = {
            color: "yellow",
            timeout: 0
        },
            o = ["red", "green", "blue", "white", "yellow", "black"];
        return r = e.extend(i, r), this.each(function () {
            var i = e(this);
            if (!i.data("tooltip")) return !0;
            var a = new t,
                s = new n(i.data("tooltip"));
            i.append(s.generate()).addClass("colorTipContainer");
            for (var u = !1, l = 0; o.length > l; l++)
                if (i.hasClass(o[l])) {
                    u = !0;
                    break
                }
            u || i.addClass(r.color), i.hover(function () {
                s.show(), a.clear()
            }, function () {
                a.set(function () {
                    s.hide()
                }, r.timeout)
            })
        })
    }, t.prototype = {
        set: function (e, t) {
            this.timer = setTimeout(e, t)
        },
        clear: function () {
            clearTimeout(this.timer)
        }
    }, n.prototype = {
        generate: function () {
            return this.tip || (this.tip = e('<span class="colorTip">' + this.content + '<span class="pointyTipShadow"></span><span class="pointyTip"></span></span>'))
        },
        show: function () {
            this.shown || (this.tip.css("margin-left", -this.tip.outerWidth() / 2).fadeIn("fast"), this.shown = !0)
        },
        hide: function () {
            this.tip.fadeOut(), this.shown = !1
        }
    }
}(jQuery), window.selectnav = function () {
    "use strict";
    var e = function (e, t) {
        function n(e) {
            var t;
            e || (e = window.event), e.target ? t = e.target : e.srcElement && (t = e.srcElement), 3 === t.nodeType && (t = t.parentNode), t.value && (window.location.href = t.value)
        }

        function r(e) {
            var t = e.nodeName.toLowerCase();
            return "ul" === t || "ol" === t
        }

        function i(e) {
            for (var t = 1; document.getElementById("selectnav" + t) ; t++);
            return e ? "selectnav" + t : "selectnav" + (t - 1)
        }

        function o(e) {
            f++;
            var t = e.children.length,
                n = "",
                a = "",
                h = f - 1;
            if (t) {
                if (h) {
                    for (; h--;) a += c;
                    a += " "
                }
                for (var g = 0; t > g; g++) {
                    var m = e.children[g].children[0];
                    if (m !== void 0) {
                        var v = m.innerText || m.textContent,
                            y = "";
                        if (s && (y = -1 !== m.className.search(s) || -1 !== m.parentElement.className.search(s) ? p : ""), u && !y && (y = m.href === document.URL ? p : ""), n += '<option value="' + m.href + '" ' + y + ">" + a + v + "</option>", l) {
                            var b = e.children[g].children[1];
                            b && r(b) && (n += o(b))
                        }
                    }
                }
                return 1 === f && d && (n = '<option value="">' + d + "</option>" + n), 1 === f && (n = '<select class="selectnav" id="' + i(!0) + '">' + n + "</select>"), f--, n
            }
        }
        if (e = document.getElementById(e), e && r(e)) {
            document.documentElement.className += " js";
            var a = t || {},
                s = a.activeclass || "active",
                u = "boolean" == typeof a.autoselect ? a.autoselect : !0,
                l = "boolean" == typeof a.nested ? a.nested : !0,
                c = a.indent || "→",
                d = a.label || "- Navigation -",
                f = 0,
                p = " selected ";
            e.insertAdjacentHTML("afterend", o(e));
            var h = document.getElementById(i());
            return h.addEventListener && h.addEventListener("change", n), h.attachEvent && h.attachEvent("onchange", n), h
        }
    };
    return function (t, n) {
        e(t, n)
    }
}(),
    function (e) {
        e.fn.qrcode = function (t) {
            function n(e) {
                this.mode = s, this.data = e
            }

            function r(e, t) {
                this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }

            function i(e, t) {
                if (void 0 == e.length) throw Error(e.length + "/" + t);
                for (var n = 0; e.length > n && 0 == e[n];) n++;
                this.num = Array(e.length - n + t);
                for (var r = 0; e.length - n > r; r++) this.num[r] = e[r + n]
            }

            function o(e, t) {
                this.totalCount = e, this.dataCount = t
            }

            function a() {
                this.buffer = [], this.length = 0
            }
            var s;
            n.prototype = {
                getLength: function () {
                    return this.data.length
                },
                write: function (e) {
                    for (var t = 0; this.data.length > t; t++) e.put(this.data.charCodeAt(t), 8)
                }
            }, r.prototype = {
                addData: function (e) {
                    this.dataList.push(new n(e)), this.dataCache = null
                },
                isDark: function (e, t) {
                    if (0 > e || e >= this.moduleCount || 0 > t || t >= this.moduleCount) throw Error(e + "," + t);
                    return this.modules[e][t]
                },
                getModuleCount: function () {
                    return this.moduleCount
                },
                make: function () {
                    if (1 > this.typeNumber) {
                        for (var e = 1, e = 1; 40 > e; e++) {
                            for (var t = o.getRSBlocks(e, this.errorCorrectLevel), n = new a, r = 0, i = 0; t.length > i; i++) r += t[i].dataCount;
                            for (i = 0; this.dataList.length > i; i++) t = this.dataList[i], n.put(t.mode, 4), n.put(t.getLength(), u.getLengthInBits(t.mode, e)), t.write(n);
                            if (8 * r >= n.getLengthInBits()) break
                        }
                        this.typeNumber = e
                    }
                    this.makeImpl(!1, this.getBestMaskPattern())
                },
                makeImpl: function (e, t) {
                    this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
                    for (var n = 0; this.moduleCount > n; n++) {
                        this.modules[n] = Array(this.moduleCount);
                        for (var i = 0; this.moduleCount > i; i++) this.modules[n][i] = null
                    }
                    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = r.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t)
                },
                setupPositionProbePattern: function (e, t) {
                    for (var n = -1; 7 >= n; n++)
                        if (!(-1 >= e + n || e + n >= this.moduleCount))
                            for (var r = -1; 7 >= r; r++) -1 >= t + r || t + r >= this.moduleCount || (this.modules[e + n][t + r] = n >= 0 && 6 >= n && (0 == r || 6 == r) || r >= 0 && 6 >= r && (0 == n || 6 == n) || n >= 2 && 4 >= n && r >= 2 && 4 >= r ? !0 : !1)
                },
                getBestMaskPattern: function () {
                    for (var e = 0, t = 0, n = 0; 8 > n; n++) {
                        this.makeImpl(!0, n);
                        var r = u.getLostPoint(this);
                        (0 == n || e > r) && (e = r, t = n)
                    }
                    return t
                },
                createMovieClip: function (e, t, n) {
                    for (e = e.createEmptyMovieClip(t, n), this.make(), t = 0; this.modules.length > t; t++)
                        for (var n = 1 * t, r = 0; this.modules[t].length > r; r++) {
                            var i = 1 * r;
                            this.modules[t][r] && (e.beginFill(0, 100), e.moveTo(i, n), e.lineTo(i + 1, n), e.lineTo(i + 1, n + 1), e.lineTo(i, n + 1), e.endFill())
                        }
                    return e
                },
                setupTimingPattern: function () {
                    for (var e = 8; this.moduleCount - 8 > e; e++) null == this.modules[e][6] && (this.modules[e][6] = 0 == e % 2);
                    for (e = 8; this.moduleCount - 8 > e; e++) null == this.modules[6][e] && (this.modules[6][e] = 0 == e % 2)
                },
                setupPositionAdjustPattern: function () {
                    for (var e = u.getPatternPosition(this.typeNumber), t = 0; e.length > t; t++)
                        for (var n = 0; e.length > n; n++) {
                            var r = e[t],
                                i = e[n];
                            if (null == this.modules[r][i])
                                for (var o = -2; 2 >= o; o++)
                                    for (var a = -2; 2 >= a; a++) this.modules[r + o][i + a] = -2 == o || 2 == o || -2 == a || 2 == a || 0 == o && 0 == a ? !0 : !1
                        }
                },
                setupTypeNumber: function (e) {
                    for (var t = u.getBCHTypeNumber(this.typeNumber), n = 0; 18 > n; n++) {
                        var r = !e && 1 == (1 & t >> n);
                        this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
                    }
                    for (n = 0; 18 > n; n++) r = !e && 1 == (1 & t >> n), this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
                },
                setupTypeInfo: function (e, t) {
                    for (var n = u.getBCHTypeInfo(this.errorCorrectLevel << 3 | t), r = 0; 15 > r; r++) {
                        var i = !e && 1 == (1 & n >> r);
                        6 > r ? this.modules[r][8] = i : 8 > r ? this.modules[r + 1][8] = i : this.modules[this.moduleCount - 15 + r][8] = i
                    }
                    for (r = 0; 15 > r; r++) i = !e && 1 == (1 & n >> r), 8 > r ? this.modules[8][this.moduleCount - r - 1] = i : 9 > r ? this.modules[8][15 - r - 1 + 1] = i : this.modules[8][15 - r - 1] = i;
                    this.modules[this.moduleCount - 8][8] = !e
                },
                mapData: function (e, t) {
                    for (var n = -1, r = this.moduleCount - 1, i = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2)
                        for (6 == a && a--; ;) {
                            for (var s = 0; 2 > s; s++)
                                if (null == this.modules[r][a - s]) {
                                    var l = !1;
                                    e.length > o && (l = 1 == (1 & e[o] >>> i)), u.getMask(t, r, a - s) && (l = !l), this.modules[r][a - s] = l, i--, -1 == i && (o++, i = 7)
                                }
                            if (r += n, 0 > r || r >= this.moduleCount) {
                                r -= n, n = -n;
                                break
                            }
                        }
                }
            }, r.PAD0 = 236, r.PAD1 = 17, r.createData = function (e, t, n) {
                for (var t = o.getRSBlocks(e, t), i = new a, s = 0; n.length > s; s++) {
                    var l = n[s];
                    i.put(l.mode, 4), i.put(l.getLength(), u.getLengthInBits(l.mode, e)), l.write(i)
                }
                for (s = e = 0; t.length > s; s++) e += t[s].dataCount;
                if (i.getLengthInBits() > 8 * e) throw Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * e + ")");
                for (8 * e >= i.getLengthInBits() + 4 && i.put(0, 4) ; 0 != i.getLengthInBits() % 8;) i.putBit(!1);
                for (; !(i.getLengthInBits() >= 8 * e) && (i.put(r.PAD0, 8), !(i.getLengthInBits() >= 8 * e)) ;) i.put(r.PAD1, 8);
                return r.createBytes(i, t)
            }, r.createBytes = function (e, t) {
                for (var n = 0, r = 0, o = 0, a = Array(t.length), s = Array(t.length), l = 0; t.length > l; l++) {
                    var c = t[l].dataCount,
                        d = t[l].totalCount - c,
                        r = Math.max(r, c),
                        o = Math.max(o, d);
                    a[l] = Array(c);
                    for (var f = 0; a[l].length > f; f++) a[l][f] = 255 & e.buffer[f + n];
                    for (n += c, f = u.getErrorCorrectPolynomial(d), c = new i(a[l], f.getLength() - 1).mod(f), s[l] = Array(f.getLength() - 1), f = 0; s[l].length > f; f++) d = f + c.getLength() - s[l].length, s[l][f] = d >= 0 ? c.get(d) : 0
                }
                for (f = l = 0; t.length > f; f++) l += t[f].totalCount;
                for (n = Array(l), f = c = 0; r > f; f++)
                    for (l = 0; t.length > l; l++) a[l].length > f && (n[c++] = a[l][f]);
                for (f = 0; o > f; f++)
                    for (l = 0; t.length > l; l++) s[l].length > f && (n[c++] = s[l][f]);
                return n
            }, s = 4;
            for (var u = {
                PATTERN_POSITION_TABLE: [
                    [],
                    [6, 18],
                    [6, 22],
                    [6, 26],
                    [6, 30],
                    [6, 34],
                    [6, 22, 38],
                    [6, 24, 42],
                    [6, 26, 46],
                    [6, 28, 50],
                    [6, 30, 54],
                    [6, 32, 58],
                    [6, 34, 62],
                    [6, 26, 46, 66],
                    [6, 26, 48, 70],
                    [6, 26, 50, 74],
                    [6, 30, 54, 78],
                    [6, 30, 56, 82],
                    [6, 30, 58, 86],
                    [6, 34, 62, 90],
                    [6, 28, 50, 72, 94],
                    [6, 26, 50, 74, 98],
                    [6, 30, 54, 78, 102],
                    [6, 28, 54, 80, 106],
                    [6, 32, 58, 84, 110],
                    [6, 30, 58, 86, 114],
                    [6, 34, 62, 90, 118],
                    [6, 26, 50, 74, 98, 122],
                    [6, 30, 54, 78, 102, 126],
                    [6, 26, 52, 78, 104, 130],
                    [6, 30, 56, 82, 108, 134],
                    [6, 34, 60, 86, 112, 138],
                    [6, 30, 58, 86, 114, 142],
                    [6, 34, 62, 90, 118, 146],
                    [6, 30, 54, 78, 102, 126, 150],
                    [6, 24, 50, 76, 102, 128, 154],
                    [6, 28, 54, 80, 106, 132, 158],
                    [6, 32, 58, 84, 110, 136, 162],
                    [6, 26, 54, 82, 110, 138, 166],
                    [6, 30, 58, 86, 114, 142, 170]
            ],
                G15: 1335,
                G18: 7973,
                G15_MASK: 21522,
                getBCHTypeInfo: function (e) {
                    for (var t = e << 10; u.getBCHDigit(t) - u.getBCHDigit(u.G15) >= 0;) t ^= u.G15 << u.getBCHDigit(t) - u.getBCHDigit(u.G15);
                    return (e << 10 | t) ^ u.G15_MASK
            },
                getBCHTypeNumber: function (e) {
                    for (var t = e << 12; u.getBCHDigit(t) - u.getBCHDigit(u.G18) >= 0;) t ^= u.G18 << u.getBCHDigit(t) - u.getBCHDigit(u.G18);
                    return e << 12 | t
            },
                getBCHDigit: function (e) {
                    for (var t = 0; 0 != e;) t++, e >>>= 1;
                    return t
            },
                getPatternPosition: function (e) {
                    return u.PATTERN_POSITION_TABLE[e - 1]
            },
                getMask: function (e, t, n) {
                    switch (e) {
                        case 0:
                            return 0 == (t + n) % 2;
                        case 1:
                            return 0 == t % 2;
                        case 2:
                            return 0 == n % 3;
                        case 3:
                            return 0 == (t + n) % 3;
                        case 4:
                            return 0 == (Math.floor(t / 2) + Math.floor(n / 3)) % 2;
                        case 5:
                            return 0 == t * n % 2 + t * n % 3;
                        case 6:
                            return 0 == (t * n % 2 + t * n % 3) % 2;
                        case 7:
                            return 0 == (t * n % 3 + (t + n) % 2) % 2;
                        default:
                            throw Error("bad maskPattern:" + e)
            }
            },
                getErrorCorrectPolynomial: function (e) {
                    for (var t = new i([1], 0), n = 0; e > n; n++) t = t.multiply(new i([1, l.gexp(n)], 0));
                    return t
            },
                getLengthInBits: function (e, t) {
                    if (t >= 1 && 10 > t) switch (e) {
                        case 1:
                            return 10;
                        case 2:
                            return 9;
                        case s:
                            return 8;
                        case 8:
                            return 8;
                        default:
                            throw Error("mode:" + e)
            } else if (27 > t) switch (e) {
                        case 1:
                            return 12;
                        case 2:
                            return 11;
                        case s:
                            return 16;
                        case 8:
                            return 10;
                        default:
                            throw Error("mode:" + e)
            } else {
                        if (!(41 > t)) throw Error("type:" + t);
                        switch (e) {
                            case 1:
                                return 14;
                            case 2:
                                return 13;
                            case s:
                                return 16;
                            case 8:
                                return 12;
                            default:
                                throw Error("mode:" + e)
            }
            }
            },
                getLostPoint: function (e) {
                    for (var t = e.getModuleCount(), n = 0, r = 0; t > r; r++)
                        for (var i = 0; t > i; i++) {
                            for (var o = 0, a = e.isDark(r, i), s = -1; 1 >= s; s++)
                                if (!(0 > r + s || r + s >= t))
                                    for (var u = -1; 1 >= u; u++) 0 > i + u || i + u >= t || 0 == s && 0 == u || a == e.isDark(r + s, i + u) && o++;
                            o > 5 && (n += 3 + o - 5)
            }
                    for (r = 0; t - 1 > r; r++)
                        for (i = 0; t - 1 > i; i++) o = 0, e.isDark(r, i) && o++, e.isDark(r + 1, i) && o++, e.isDark(r, i + 1) && o++, e.isDark(r + 1, i + 1) && o++, (0 == o || 4 == o) && (n += 3);
                    for (r = 0; t > r; r++)
                        for (i = 0; t - 6 > i; i++) e.isDark(r, i) && !e.isDark(r, i + 1) && e.isDark(r, i + 2) && e.isDark(r, i + 3) && e.isDark(r, i + 4) && !e.isDark(r, i + 5) && e.isDark(r, i + 6) && (n += 40);
                    for (i = 0; t > i; i++)
                        for (r = 0; t - 6 > r; r++) e.isDark(r, i) && !e.isDark(r + 1, i) && e.isDark(r + 2, i) && e.isDark(r + 3, i) && e.isDark(r + 4, i) && !e.isDark(r + 5, i) && e.isDark(r + 6, i) && (n += 40);
                    for (i = o = 0; t > i; i++)
                        for (r = 0; t > r; r++) e.isDark(r, i) && o++;
                    return e = Math.abs(100 * o / t / t - 50) / 5, n + 10 * e
            }
            }, l = {
                glog: function (e) {
                    if (1 > e) throw Error("glog(" + e + ")");
                    return l.LOG_TABLE[e]
            },
                gexp: function (e) {
                    for (; 0 > e;) e += 255;
                    for (; e >= 256;) e -= 255;
                    return l.EXP_TABLE[e]
            },
                EXP_TABLE: Array(256),
                LOG_TABLE: Array(256)
            }, c = 0; 8 > c; c++) l.EXP_TABLE[c] = 1 << c;
            for (c = 8; 256 > c; c++) l.EXP_TABLE[c] = l.EXP_TABLE[c - 4] ^ l.EXP_TABLE[c - 5] ^ l.EXP_TABLE[c - 6] ^ l.EXP_TABLE[c - 8];
            for (c = 0; 255 > c; c++) l.LOG_TABLE[l.EXP_TABLE[c]] = c;
            return i.prototype = {
                get: function (e) {
                    return this.num[e]
                },
                getLength: function () {
                    return this.num.length
                },
                multiply: function (e) {
                    for (var t = Array(this.getLength() + e.getLength() - 1), n = 0; this.getLength() > n; n++)
                        for (var r = 0; e.getLength() > r; r++) t[n + r] ^= l.gexp(l.glog(this.get(n)) + l.glog(e.get(r)));
                    return new i(t, 0)
                },
                mod: function (e) {
                    if (0 > this.getLength() - e.getLength()) return this;
                    for (var t = l.glog(this.get(0)) - l.glog(e.get(0)), n = Array(this.getLength()), r = 0; this.getLength() > r; r++) n[r] = this.get(r);
                    for (r = 0; e.getLength() > r; r++) n[r] ^= l.gexp(l.glog(e.get(r)) + t);
                    return new i(n, 0).mod(e)
                }
            }, o.RS_BLOCK_TABLE = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
            ], o.getRSBlocks = function (e, t) {
                var n = o.getRsBlockTable(e, t);
                if (void 0 == n) throw Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
                for (var r = n.length / 3, i = [], a = 0; r > a; a++)
                    for (var s = n[3 * a + 0], u = n[3 * a + 1], l = n[3 * a + 2], c = 0; s > c; c++) i.push(new o(u, l));
                return i
            }, o.getRsBlockTable = function (e, t) {
                switch (t) {
                    case 1:
                        return o.RS_BLOCK_TABLE[4 * (e - 1) + 0];
                    case 0:
                        return o.RS_BLOCK_TABLE[4 * (e - 1) + 1];
                    case 3:
                        return o.RS_BLOCK_TABLE[4 * (e - 1) + 2];
                    case 2:
                        return o.RS_BLOCK_TABLE[4 * (e - 1) + 3]
                }
            }, a.prototype = {
                get: function (e) {
                    return 1 == (1 & this.buffer[Math.floor(e / 8)] >>> 7 - e % 8)
                },
                put: function (e, t) {
                    for (var n = 0; t > n; n++) this.putBit(1 == (1 & e >>> t - n - 1))
                },
                getLengthInBits: function () {
                    return this.length
                },
                putBit: function (e) {
                    var t = Math.floor(this.length / 8);
                    t >= this.buffer.length && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            }, "string" == typeof t && (t = {
                text: t
            }), t = e.extend({}, {
                render: "canvas",
                width: 256,
                height: 256,
                typeNumber: -1,
                correctLevel: 2,
                background: "#ffffff",
                foreground: "#000000"
            }, t), this.each(function () {
                var n;
                if ("canvas" == t.render) {
                    n = new r(t.typeNumber, t.correctLevel), n.addData(t.text), n.make();
                    var i = document.createElement("canvas");
                    i.width = t.width, i.height = t.height;
                    for (var o = i.getContext("2d"), a = t.width / n.getModuleCount(), s = t.height / n.getModuleCount(), u = 0; n.getModuleCount() > u; u++)
                        for (var l = 0; n.getModuleCount() > l; l++) {
                            o.fillStyle = n.isDark(u, l) ? t.foreground : t.background;
                            var c = Math.ceil((l + 1) * a) - Math.floor(l * a),
                                d = Math.ceil((u + 1) * a) - Math.floor(u * a);
                            o.fillRect(Math.round(l * a), Math.round(u * s), c, d)
                        }
                } else
                    for (n = new r(t.typeNumber, t.correctLevel), n.addData(t.text), n.make(), i = e("<table></table>").css("width", t.width + "px").css("height", t.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", t.background), o = t.width / n.getModuleCount(), a = t.height / n.getModuleCount(), s = 0; n.getModuleCount() > s; s++)
                        for (u = e("<tr></tr>").css("height", a + "px").appendTo(i), l = 0; n.getModuleCount() > l; l++) e("<td></td>").css("width", o + "px").css("background-color", n.isDark(s, l) ? t.foreground : t.background).appendTo(u);
                n = i, jQuery(n).appendTo(this)
            })
        }
    }(jQuery),
    function (e) {
        "use strict";
        var t, n = e.Base64,
            r = "2.1.2";
        "undefined" != typeof module && module.exports && (t = require("buffer").Buffer);
        var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            o = function (e) {
                for (var t = {}, n = 0, r = e.length; r > n; n++) t[e.charAt(n)] = n;
                return t
            }(i),
            a = String.fromCharCode,
            s = function (e) {
                if (2 > e.length) {
                    var t = e.charCodeAt(0);
                    return 128 > t ? e : 2048 > t ? a(192 | t >>> 6) + a(128 | 63 & t) : a(224 | 15 & t >>> 12) + a(128 | 63 & t >>> 6) + a(128 | 63 & t)
                }
                var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                return a(240 | 7 & t >>> 18) + a(128 | 63 & t >>> 12) + a(128 | 63 & t >>> 6) + a(128 | 63 & t)
            },
            u = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
            l = function (e) {
                return e.replace(u, s)
            },
            c = function (e) {
                var t = [0, 2, 1][e.length % 3],
                    n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0),
                    r = [i.charAt(n >>> 18), i.charAt(63 & n >>> 12), t >= 2 ? "=" : i.charAt(63 & n >>> 6), t >= 1 ? "=" : i.charAt(63 & n)];
                return r.join("")
            },
            d = e.btoa ? function (t) {
                return e.btoa(t)
            } : function (e) {
                return e.replace(/[\s\S]{1,3}/g, c)
            },
            f = t ? function (e) {
                return new t(e).toString("base64")
            } : function (e) {
                return d(l(e))
            },
            p = function (e, t) {
                return t ? f(e).replace(/[+\/]/g, function (e) {
                    return "+" == e ? "-" : "_"
                }).replace(/=/g, "") : f(e)
            },
            h = function (e) {
                return p(e, !0)
            },
            g = RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
            m = function (e) {
                switch (e.length) {
                    case 4:
                        var t = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3),
                            n = t - 65536;
                        return a((n >>> 10) + 55296) + a((1023 & n) + 56320);
                    case 3:
                        return a((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                    default:
                        return a((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                }
            },
            v = function (e) {
                return e.replace(g, m)
            },
            y = function (e) {
                var t = e.length,
                    n = t % 4,
                    r = (t > 0 ? o[e.charAt(0)] << 18 : 0) | (t > 1 ? o[e.charAt(1)] << 12 : 0) | (t > 2 ? o[e.charAt(2)] << 6 : 0) | (t > 3 ? o[e.charAt(3)] : 0),
                    i = [a(r >>> 16), a(255 & r >>> 8), a(255 & r)];
                return i.length -= [0, 0, 2, 1][n], i.join("")
            },
            b = e.atob ? function (t) {
                return e.atob(t)
            } : function (e) {
                return e.replace(/[\s\S]{1,4}/g, y)
            },
            x = t ? function (e) {
                return "" + new t(e, "base64")
            } : function (e) {
                return v(b(e))
            },
            w = function (e) {
                return x(e.replace(/[-_]/g, function (e) {
                    return "-" == e ? "+" : "/"
                }).replace(/[^A-Za-z0-9\+\/]/g, ""))
            },
            C = function () {
                var t = e.Base64;
                return e.Base64 = n, t
            };
        if (e.Base64 = {
            VERSION: r,
            atob: b,
            btoa: d,
            fromBase64: w,
            toBase64: p,
            utob: l,
            encode: p,
            encodeURI: h,
            btou: v,
            decode: w,
            noConflict: C
        }, "function" == typeof Object.defineProperty) {
            var T = function (e) {
                return {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            };
            e.Base64.extendString = function () {
                Object.defineProperty(String.prototype, "fromBase64", T(function () {
                    return w(this)
                })), Object.defineProperty(String.prototype, "toBase64", T(function (e) {
                    return p(this, e)
                })), Object.defineProperty(String.prototype, "toBase64URI", T(function () {
                    return p(this, !0)
                }))
            }
        }
    }(this)