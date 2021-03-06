/*Jssor*/
(function(g, f, b, i, c, h, j) { /*! Jssor */
    new(function() {});
    var d = {
        Xb: function(a) {
            return -b.cos(a * b.PI) / 2 + .5
        },
        Qd: function(a) {
            return a
        },
        Pd: function(a) {
            return -a * (a - 2)
        }
    };
    var a = new function() {
        var e = this,
            xb = /\S+/g,
            T = 1,
            fb = 2,
            kb = 3,
            jb = 4,
            ob = 5,
            L, s = 0,
            l = 0,
            p = 0,
            bb = 0,
            A = 0,
            B = navigator,
            tb = B.appName,
            k = B.userAgent,
            z;

        function Eb() {
            if (!L) {
                L = {
                    Ke: "ontouchstart" in g || "createTouch" in f
                };
                var a;
                if (B.pointerEnabled || (a = B.msPointerEnabled)) L.id = a ? "msTouchAction" : "touchAction"
            }
            return L
        }

        function v(i) {
            if (!s) {
                s = -1;
                if (tb == "Microsoft Internet Explorer" && !!g.attachEvent && !!g.ActiveXObject) {
                    var e = k.indexOf("MSIE");
                    s = T;
                    p = n(k.substring(e + 5, k.indexOf(";", e))); /*@cc_on bb=@_jscript_version@*/ ;
                    l = f.documentMode || p
                } else if (tb == "Netscape" && !!g.addEventListener) {
                    var d = k.indexOf("Firefox"),
                        b = k.indexOf("Safari"),
                        h = k.indexOf("Chrome"),
                        c = k.indexOf("AppleWebKit");
                    if (d >= 0) {
                        s = fb;
                        l = n(k.substring(d + 8))
                    } else if (b >= 0) {
                        var j = k.substring(0, b).lastIndexOf("/");
                        s = h >= 0 ? jb : kb;
                        l = n(k.substring(j + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(k);
                        if (a) {
                            s = T;
                            l = p = n(a[1])
                        }
                    }
                    if (c >= 0) A = n(k.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);
                    if (a) {
                        s = ob;
                        l = n(a[2])
                    }
                }
            }
            return i == s
        }

        function q() {
            return v(T)
        }

        function O() {
            return q() && (l < 6 || f.compatMode == "BackCompat")
        }

        function ib() {
            return v(kb)
        }

        function hb() {
            return v(jb)
        }

        function nb() {
            return v(ob)
        }

        function cb() {
            return ib() && A > 534 && A < 535
        }

        function M() {
            return q() && l < 9
        }

        function t(a) {
            if (!z) {
                m(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function(b) {
                    if (a.style[b] != j) {
                        z = b;
                        return c
                    }
                });
                z = z || "transform"
            }
            return z
        }

        function sb(a) {
            return {}.toString.call(a)
        }
        var K;

        function Cb() {
            if (!K) {
                K = {};
                m(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
                    K["[object " + a + "]"] = a.toLowerCase()
                })
            }
            return K
        }

        function m(a, d) {
            if (sb(a) == "[object Array]") {
                for (var b = 0; b < a.length; b++)
                    if (d(a[b], b, a)) return c
            } else
                for (var e in a)
                    if (d(a[e], e, a)) return c
        }

        function D(a) {
            return a == i ? String(a) : Cb()[sb(a)] || "object"
        }

        function qb(a) {
            for (var b in a) return c
        }

        function G(a) {
            try {
                return D(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function y(a, b) {
            return {
                x: a,
                y: b
            }
        }

        function vb(b, a) {
            setTimeout(b, a || 0)
        }

        function I(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            m(d, function(c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
                    a = d + e
                }
            });
            a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
            return a
        }

        function eb(b, a) {
            if (l < 9) b.style.filter = a
        }

        function zb(b, a, c) {
            if (bb < 9) {
                var f = b.style.filter,
                    h = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                    g = a ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + a[0][0] + ", M12=" + a[0][1] + ", M21=" + a[1][0] + ", M22=" + a[1][1] + ", SizingMethod='auto expand')" : "",
                    d = I(f, [h], g);
                eb(b, d);
                e.kd(b, c.y);
                e.hd(b, c.x)
            }
        }
        e.Fe = Eb;
        e.Yc = q;
        e.bf = ib;
        e.af = hb;
        e.Uc = nb;
        e.Z = M;
        e.Zc = function() {
            return l
        };
        e.vc = function() {
            v();
            return A
        };
        e.G = vb;

        function W(a) {
            a.constructor === W.caller && a.bd && a.bd.apply(a, W.caller.arguments)
        }
        e.bd = W;
        e.eb = function(a) {
            if (e.Xe(a)) a = f.getElementById(a);
            return a
        };

        function r(a) {
            return a || g.event
        }
        e.cd = r;
        e.ac = function(a) {
            a = r(a);
            return a.target || a.srcElement || f
        };
        e.fd = function(a) {
            a = r(a);
            return {
                x: a.pageX || a.clientX || 0,
                y: a.pageY || a.clientY || 0
            }
        };

        function E(c, d, a) {
            if (a != j) c.style[d] = a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && g.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, i);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function Y(b, c, a, d) {
            if (a != j) {
                d && (a += "px");
                E(b, c, a)
            } else return n(E(b, c))
        }

        function o(d, a) {
            var b = a & 2,
                c = a ? Y : E;
            return function(e, a) {
                return c(e, d, a, b)
            }
        }

        function Ab(b) {
            if (q() && p < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? n(a[1]) / 100 : 1
            } else return n(b.style.opacity || "1")
        }

        function Bb(c, a, f) {
            if (q() && p < 9) {
                var h = c.style.filter || "",
                    i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    e = b.round(100 * a),
                    d = "";
                if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
                var g = I(h, [i], d);
                eb(c, g)
            } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
        }

        function ab(f, a) {
            var d = a.n || 0,
                c = a.X == j ? 1 : a.X;
            if (M()) {
                var l = e.me(d / 180 * b.PI, c, c);
                zb(f, !d && c == 1 ? i : l, e.le(l, a.W, a.S))
            } else {
                var h = t(f);
                if (h) {
                    var k = "rotate(" + d % 360 + "deg) scale(" + c + ")";
                    if (hb() && A > 535 && "ontouchstart" in g) k += " perspective(2000px)";
                    f.style[h] = k
                }
            }
        }
        e.ke = function(b, a) {
            if (cb()) vb(e.J(i, ab, b, a));
            else ab(b, a)
        };
        e.ne = function(b, c) {
            var a = t(b);
            if (a) b.style[a + "Origin"] = c
        };
        e.fe = function(a, c) {
            if (q() && p < 9 || p < 10 && O()) a.style.zoom = c == 1 ? "" : c;
            else {
                var b = t(a);
                if (b) {
                    var f = "scale(" + c + ")",
                        e = a.style[b],
                        g = new RegExp(/[\s]*scale\(.*?\)/g),
                        d = I(e, [g], f);
                    a.style[b] = d
                }
            }
        };
        e.ee = function(a) {
            if (!a.style[t(a)] || a.style[t(a)] == "none") a.style[t(a)] = "perspective(2000px)"
        };
        var mb = 0,
            gb = 0;
        e.je = function(b, a) {
            return M() ? function() {
                var g = c,
                    d = O() ? b.document.body : b.document.documentElement;
                if (d) {
                    var f = d.offsetWidth - mb,
                        e = d.offsetHeight - gb;
                    if (f || e) {
                        mb += f;
                        gb += e
                    } else g = h
                }
                g && a()
            } : a
        };
        e.Yb = function(b, a) {
            return function(c) {
                c = r(c);
                var f = c.type,
                    d = c.relatedTarget || (f == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !e.ie(a, d)) && b(c)
            }
        };
        e.a = function(a, c, d, b) {
            a = e.eb(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        e.H = function(a, c, d, b) {
            a = e.eb(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        e.vb = function(a) {
            a = r(a);
            a.preventDefault && a.preventDefault();
            a.cancel = c;
            a.returnValue = h
        };
        e.Ae = function(a) {
            a = r(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = c
        };
        e.J = function(d, c) {
            var a = [].slice.call(arguments, 2),
                b = function() {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        e.we = function(a, b) {
            if (b == j) return a.textContent || a.innerText;
            var c = f.createTextNode(b);
            e.Ob(a);
            a.appendChild(c)
        };
        e.kb = function(d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function rb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (S(a, b) == c) return a;
                    if (!e) {
                        var d = rb(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        e.v = rb;

        function Q(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    S(a, b) == d && c.push(a);
                    if (!f) {
                        var e = Q(a, d, f, b);
                        if (e.length) c = c.concat(e)
                    }
                }
            return c
        }

        function lb(a, c, d) {
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (a.tagName == c) return a;
                    if (!d) {
                        var b = lb(a, c, d);
                        if (b) return b
                    }
                }
        }
        e.ve = lb;

        function db(a, c, e) {
            var b = [];
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    (!c || a.tagName == c) && b.push(a);
                    if (!e) {
                        var d = db(a, c, e);
                        if (d.length) b = b.concat(d)
                    }
                }
            return b
        }
        e.qe = db;
        e.re = function(b, a) {
            return b.getElementsByTagName(a)
        };

        function C() {
            var e = arguments,
                d, c, b, a, g = 1 & e[0],
                f = 1 + g;
            d = e[f - 1] || {};
            for (; f < e.length; f++)
                if (c = e[f])
                    for (b in c) {
                        a = c[b];
                        if (a !== j) {
                            a = c[b];
                            d[b] = g && G(d[b]) ? C(g, {}, a) : a
                        }
                    }
                return d
        }
        e.p = C;

        function X(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (G(a) && G(b)) {
                        a = X(b);
                        e = !qb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        e.Ic = function(a) {
            return D(a) == "function"
        };
        e.Xe = function(a) {
            return D(a) == "string"
        };
        e.Oc = function(a) {
            return !isNaN(n(a)) && isFinite(a)
        };
        e.g = m;

        function P(a) {
            return f.createElement(a)
        }
        e.Ib = function() {
            return P("DIV")
        };
        e.he = function() {
            return P("SPAN")
        };
        e.Kc = function() {};

        function U(b, c, a) {
            if (a == j) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function S(a, b) {
            return U(a, b) || U(a, "data-" + b)
        }
        e.N = U;
        e.t = S;

        function w(b, a) {
            if (a == j) return b.className;
            b.className = a
        }
        e.Fc = w;

        function ub(b) {
            var a = {};
            m(b, function(b) {
                a[b] = b
            });
            return a
        }

        function wb(b, a) {
            return b.match(a || xb)
        }

        function N(b, a) {
            return ub(wb(b || "", a))
        }
        e.ge = wb;

        function Z(b, c) {
            var a = "";
            m(c, function(c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function H(a, c, b) {
            w(a, Z(" ", C(X(N(w(a)), N(c)), N(b))))
        }
        e.xb = function(a) {
            return a.parentNode
        };
        e.I = function(a) {
            e.O(a, "none")
        };
        e.r = function(a, b) {
            e.O(a, b ? "none" : "")
        };
        e.Dc = function(b, a) {
            b.removeAttribute(a)
        };
        e.We = function() {
            return q() && l < 10
        };
        e.Re = function(d, c) {
            if (c) d.style.clip = "rect(" + b.round(c.e) + "px " + b.round(c.k) + "px " + b.round(c.l) + "px " + b.round(c.f) + "px)";
            else {
                var g = d.style.cssText,
                    f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    e = I(g, f, "");
                a.Ab(d, e)
            }
        };
        e.P = function() {
            return +new Date
        };
        e.E = function(b, a) {
            b.appendChild(a)
        };
        e.yb = function(b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        e.Eb = function(a, b) {
            (b || a.parentNode).removeChild(a)
        };
        e.Ye = function(a, b) {
            m(a, function(a) {
                e.Eb(a, b)
            })
        };
        e.Ob = function(a) {
            e.Ye(e.kb(a, c), a)
        };
        var n = parseFloat;
        e.He = n;
        e.ie = function(b, a) {
            var c = f.body;
            while (a && b !== a && c !== a) try {
                a = a.parentNode
            } catch (d) {
                return h
            }
            return b === a
        };

        function V(d, c, b) {
            var a = d.cloneNode(!c);
            !b && e.Dc(a, "id");
            return a
        }
        e.L = V;
        e.jb = function(f, g) {
            var a = new Image;

            function b(f, c) {
                e.H(a, "load", b);
                e.H(a, "abort", d);
                e.H(a, "error", d);
                g && g(a, c)
            }

            function d(a) {
                b(a, c)
            }
            if (nb() && l < 11.6 || !f) b(!f);
            else {
                e.a(a, "load", b);
                e.a(a, "abort", d);
                e.a(a, "error", d);
                a.src = f
            }
        };
        e.Je = function(d, a, f) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && f && f(a)
            }
            m(d, function(a) {
                e.jb(a.src, b)
            });
            b()
        };
        e.Ee = function(b, g, i, h) {
            if (h) b = V(b);
            var c = Q(b, g);
            if (!c.length) c = a.re(b, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = V(i);
                w(e, w(d));
                a.Ab(e, d.style.cssText);
                a.yb(e, d);
                a.Eb(d)
            }
            return b
        };

        function Db(b) {
            var q = this,
                o = "",
                r = ["av", "pv", "ds", "dn"],
                g = [],
                p, k = 0,
                h = 0,
                d = 0;

            function i() {
                H(b, p, g[d || k || h & 2 || h]);
                a.ab(b, "pointer-events", d ? "none" : "")
            }

            function c() {
                k = 0;
                i();
                e.H(f, "mouseup", c);
                e.H(f, "touchend", c);
                e.H(f, "touchcancel", c)
            }

            function n(a) {
                if (d) e.vb(a);
                else {
                    k = 4;
                    i();
                    e.a(f, "mouseup", c);
                    e.a(f, "touchend", c);
                    e.a(f, "touchcancel", c)
                }
            }
            q.Ge = function(a) {
                if (a != j) {
                    h = a & 2 || a & 1;
                    i()
                } else return h
            };
            q.Lc = function(a) {
                if (a == j) return !d;
                d = a ? 0 : 3;
                i()
            };
            b = e.eb(b);
            var l = a.ge(w(b));
            if (l) o = l.shift();
            m(r, function(a) {
                g.push(o + a)
            });
            p = Z(" ", g);
            g.unshift("");
            e.a(b, "mousedown", n);
            e.a(b, "touchstart", n)
        }
        e.xc = function(a) {
            return new Db(a)
        };
        e.ab = E;
        e.hb = o("overflow");
        e.z = o("top", 2);
        e.A = o("left", 2);
        e.m = o("width", 2);
        e.q = o("height", 2);
        e.hd = o("marginLeft", 2);
        e.kd = o("marginTop", 2);
        e.D = o("position");
        e.O = o("display");
        e.u = o("zIndex", 1);
        e.gb = function(b, a, c) {
            if (a != j) Bb(b, a, c);
            else return Ab(b)
        };
        e.Ab = function(a, b) {
            if (b != j) a.style.cssText = b;
            else return a.style.cssText
        };
        var R = {
                s: e.gb,
                e: e.z,
                f: e.A,
                cb: e.m,
                U: e.q,
                fb: e.D,
                hf: e.O,
                R: e.u
            },
            u;

        function J() {
            if (!u) u = C({
                jf: e.kd,
                kf: e.hd,
                c: e.Re,
                qc: e.ke
            }, R);
            return u
        }

        function pb() {
            J();
            u.qc = u.qc;
            return u
        }
        e.xd = J;
        e.F = function(c, b) {
            var a = J();
            m(b, function(d, b) {
                a[b] && a[b](c, d)
            })
        };
        e.Dd = function(b, a) {
            pb();
            e.F(b, a)
        };
        var F = new function() {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
                        k[b] = e
                    }
                return f
            }
            a.Hb = function(d, c) {
                var a = b(d, [
                    [c.x],
                    [c.y]
                ]);
                return y(a[0][0], a[1][0])
            }
        };
        e.me = function(d, a, c) {
            var e = b.cos(d),
                f = b.sin(d);
            return [
                [e * a, -f * c],
                [f * a, e * c]
            ]
        };
        e.le = function(d, c, a) {
            var e = F.Hb(d, y(-c / 2, -a / 2)),
                f = F.Hb(d, y(c / 2, -a / 2)),
                g = F.Hb(d, y(c / 2, a / 2)),
                h = F.Hb(d, y(-c / 2, a / 2));
            return y(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2)
        };
        e.Jc = function(l, g, t, r, u, w, j) {
            var c = g;
            if (l) {
                c = {};
                for (var f in g) {
                    var x = w[f] || 1,
                        s = u[f] || [0, 1],
                        e = (t - s[0]) / s[1];
                    e = b.min(b.max(e, 0), 1);
                    e = e * x;
                    var p = b.floor(e);
                    if (e != p) e -= p;
                    var v = r[f] || r.fc || d.Xb,
                        q = v(e),
                        h, y = l[f];
                    g[f];
                    var m = g[f];
                    if (a.Oc(m)) h = y + m * q;
                    else {
                        h = a.p({
                            qb: {}
                        }, l[f]);
                        a.g(m.qb, function(c, b) {
                            var a = c * q;
                            h.qb[b] = a;
                            h[b] += a
                        })
                    }
                    c[f] = h
                }
                if (g.j || g.n) c.qc = {
                    n: c.n || 0,
                    X: c.j,
                    W: j.W,
                    S: j.S
                }
            }
            if (g.c && j.ob) {
                var k = c.c.qb,
                    o = (k.e || 0) + (k.l || 0),
                    n = (k.f || 0) + (k.k || 0);
                c.f = (c.f || 0) + n;
                c.e = (c.e || 0) + o;
                c.c.f -= n;
                c.c.k -= n;
                c.c.e -= o;
                c.c.l -= o
            }
            if (c.c && a.We() && !c.c.e && !c.c.f && c.c.k == j.W && c.c.l == j.S) c.c = i;
            return c
        }
    };

    function l() {
        var b = this,
            d = [];

        function i(a, b) {
            d.push({
                sc: a,
                rc: b
            })
        }

        function h(b, c) {
            a.g(d, function(a, e) {
                a.sc == b && a.rc === c && d.splice(e, 1)
            })
        }
        b.tb = b.addEventListener = i;
        b.removeEventListener = h;
        b.i = function(b) {
            var c = [].slice.call(arguments, 1);
            a.g(d, function(a) {
                a.sc == b && a.rc.apply(g, c)
            })
        }
    }

    function k(o, z, k, R, P, K) {
        o = o || 0;
        var e = this,
            s, p, q, x, B = 0,
            I, J, H, D, A = 0,
            l = 0,
            n = 0,
            E, m = o,
            f, j, r, y = [],
            C;

        function M(a) {
            f += a;
            j += a;
            m += a;
            l += a;
            n += a;
            A = a
        }

        function Q(a, b) {
            var c = a - f + o * b;
            M(c);
            return j
        }

        function w(o, i) {
            var d = o;
            if (r && (d >= j || d <= f)) d = ((d - f) % r + r) % r + f;
            if (!E || x || i || l != d) {
                var g = b.min(d, j);
                g = b.max(g, f);
                if (!E || x || i || g != n) {
                    if (K) {
                        var h = (g - m) / (z || 1);
                        if (k.Zb) h = 1 - h;
                        var p = a.Jc(P, K, h, I, H, J, k);
                        a.g(p, function(b, a) {
                            C[a] && C[a](R, b)
                        })
                    }
                    e.bc(n - m, g - m);
                    n = g;
                    a.g(y, function(b, c) {
                        var a = o < l ? y[y.length - c - 1] : b;
                        a.B(n - A, i)
                    });
                    var s = l,
                        q = n;
                    l = d;
                    E = c;
                    e.Cb(s, q)
                }
            }
        }

        function F(a, c, d) {
            c && a.Qc(j, 1);
            if (!d) {
                f = b.min(f, a.Od() + A);
                j = b.max(j, a.lb() + A)
            }
            y.push(a)
        }
        var t = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.msRequestAnimationFrame;
        if (a.bf() && a.Zc() < 7) t = i;
        t = t || function(b) {
            a.G(b, k.M)
        };

        function L() {
            if (s) {
                var d = a.P(),
                    e = b.min(d - B, k.Mc),
                    c = l + e * q;
                B = d;
                if (c * q >= p * q) c = p;
                w(c);
                if (!x && c * q >= p * q) N(D);
                else t(L)
            }
        }

        function v(d, g, h) {
            if (!s) {
                s = c;
                x = h;
                D = g;
                d = b.max(d, f);
                d = b.min(d, j);
                p = d;
                q = p < l ? -1 : 1;
                e.Rc();
                B = a.P();
                t(L)
            }
        }

        function N(a) {
            if (s) {
                x = s = D = h;
                e.Bc();
                a && a()
            }
        }
        e.Ec = function(a, b, c) {
            v(a ? l + a : j, b, c)
        };
        e.Gc = v;
        e.Y = N;
        e.Qe = function(a) {
            v(a)
        };
        e.K = function() {
            return l
        };
        e.Pc = function() {
            return p
        };
        e.ib = function() {
            return n
        };
        e.B = w;
        e.ob = function(a) {
            w(l + a)
        };
        e.Wc = function() {
            return s
        };
        e.Ad = function(a) {
            r = a
        };
        e.Qc = Q;
        e.pc = M;
        e.nc = function(a) {
            F(a, 0)
        };
        e.kc = function(a) {
            F(a, 1)
        };
        e.Od = function() {
            return f
        };
        e.lb = function() {
            return j
        };
        e.Cb = e.Rc = e.Bc = e.bc = a.Kc;
        e.mc = a.P();
        k = a.p({
            M: 16,
            Mc: 50
        }, k);
        r = k.dd;
        C = a.p({}, a.xd(), k.Pb);
        f = m = o;
        j = o + z;
        J = k.sb || {};
        H = k.rb || {};
        I = a.p({
            fc: a.Ic(k.o) && k.o || d.Xb
        }, k.o)
    }
    var n = new function() {
            var h = this;

            function g(b, a, c) {
                c.push(a);
                b[a] = b[a] || [];
                b[a].push(c)
            }
            h.Ld = function(d) {
                for (var e = [], a, c = 0; c < d.nb; c++)
                    for (a = 0; a < d.Q; a++) g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
                return e
            }
        },
        q = function(o, s, q, t, y) {
            var f = this,
                u, g, e, x = 0,
                w = t.Md,
                r, j = 8;

            function m(g, f) {
                var e = {
                    M: f,
                    mb: 1,
                    G: 0,
                    Q: 1,
                    nb: 1,
                    s: 0,
                    j: 0,
                    c: 0,
                    ob: h,
                    Tb: h,
                    Zb: h,
                    Hd: n.Ld,
                    pd: {
                        Fd: 0,
                        Ed: 0
                    },
                    o: d.Xb,
                    sb: {},
                    zb: [],
                    rb: {}
                };
                a.p(e, g);
                if (a.Ic(e.o)) e.o = {
                    fc: e.o
                };
                e.ce = b.ceil(e.mb / e.M);
                e.Ud = function(b, a) {
                    b /= e.Q;
                    a /= e.nb;
                    var f = b + "x" + a;
                    if (!e.zb[f]) {
                        e.zb[f] = {
                            cb: b,
                            U: a
                        };
                        for (var c = 0; c < e.Q; c++)
                            for (var d = 0; d < e.nb; d++) e.zb[f][d + "," + c] = {
                                e: d * a,
                                k: c * b + b,
                                l: d * a + a,
                                f: c * b
                            }
                    }
                    return e.zb[f]
                };
                if (e.ec) {
                    e.ec = m(e.ec, f);
                    e.Tb = c
                }
                return e
            }

            function p(A, i, d, v, n, l) {
                var y = this,
                    t, u = {},
                    j = {},
                    m = [],
                    f, e, r, p = d.pd.Fd || 0,
                    q = d.pd.Ed || 0,
                    g = d.Ud(n, l),
                    o = B(d),
                    C = o.length - 1,
                    s = d.mb + d.G * C,
                    w = v + s,
                    k = d.Tb,
                    x;
                w += 50;

                function B(a) {
                    var b = a.Hd(a);
                    return a.Zb ? b.reverse() : b
                }
                y.gd = w;
                y.Jb = function(c) {
                    c -= v;
                    var e = c < s;
                    if (e || x) {
                        x = e;
                        if (!k) c = s - c;
                        var f = b.ceil(c / d.M);
                        a.g(j, function(c, e) {
                            var d = b.max(f, c.Bd);
                            d = b.min(d, c.length - 1);
                            if (c.Vc != d) {
                                if (!c.Vc && !k) a.r(m[e]);
                                else d == c.vd && k && a.I(m[e]);
                                c.Vc = d;
                                a.Dd(m[e], c[d])
                            }
                        })
                    }
                };
                i = a.L(i);
                if (a.Z()) {
                    var D = !i["no-image"],
                        z = a.qe(i);
                    a.g(z, function(b) {
                        (D || b["jssor-slider"]) && a.gb(b, a.gb(b), c)
                    })
                }
                a.g(o, function(i, m) {
                    a.g(i, function(G) {
                        var K = G[0],
                            J = G[1],
                            v = K + "," + J,
                            o = h,
                            s = h,
                            x = h;
                        if (p && J % 2) {
                            if (p & 3) o = !o;
                            if (p & 12) s = !s;
                            if (p & 16) x = !x
                        }
                        if (q && K % 2) {
                            if (q & 3) o = !o;
                            if (q & 12) s = !s;
                            if (q & 16) x = !x
                        }
                        d.e = d.e || d.c & 4;
                        d.l = d.l || d.c & 8;
                        d.f = d.f || d.c & 1;
                        d.k = d.k || d.c & 2;
                        var C = s ? d.l : d.e,
                            z = s ? d.e : d.l,
                            B = o ? d.k : d.f,
                            A = o ? d.f : d.k;
                        d.c = C || z || B || A;
                        r = {};
                        e = {
                            e: 0,
                            f: 0,
                            s: 1,
                            cb: n,
                            U: l
                        };
                        f = a.p({}, e);
                        t = a.p({}, g[v]);
                        if (d.s) e.s = 2 - d.s;
                        if (d.R) {
                            e.R = d.R;
                            f.R = 0
                        }
                        var I = d.Q * d.nb > 1 || d.c;
                        if (d.j || d.n) {
                            var H = c;
                            if (a.Z())
                                if (d.Q * d.nb > 1) H = h;
                                else I = h;
                            if (H) {
                                e.j = d.j ? d.j - 1 : 1;
                                f.j = 1;
                                if (a.Z() || a.Uc()) e.j = b.min(e.j, 2);
                                var N = d.n;
                                e.n = N * 360 * (x ? -1 : 1);
                                f.n = 0
                            }
                        }
                        if (I) {
                            if (d.c) {
                                var w = d.df || 1,
                                    i = t.qb = {};
                                if (C && z) {
                                    i.e = g.U / 2 * w;
                                    i.l = -i.e
                                } else if (C) i.l = -g.U * w;
                                else if (z) i.e = g.U * w;
                                if (B && A) {
                                    i.f = g.cb / 2 * w;
                                    i.k = -i.f
                                } else if (B) i.k = -g.cb * w;
                                else if (A) i.f = g.cb * w
                            }
                            r.c = t;
                            f.c = g[v]
                        }
                        var L = o ? 1 : -1,
                            M = s ? 1 : -1;
                        if (d.x) e.f += n * d.x * L;
                        if (d.y) e.e += l * d.y * M;
                        a.g(e, function(b, c) {
                            if (a.Oc(b))
                                if (b != f[c]) r[c] = b - f[c]
                        });
                        u[v] = k ? f : e;
                        var D = d.ce,
                            y = b.round(m * d.G / d.M);
                        j[v] = new Array(y);
                        j[v].Bd = y;
                        j[v].vd = y + D - 1;
                        for (var F = 0; F <= D; F++) {
                            var E = a.Jc(f, r, F / D, d.o, d.rb, d.sb, {
                                ob: d.ob,
                                W: n,
                                S: l
                            });
                            E.R = E.R || 1;
                            j[v].push(E)
                        }
                    })
                });
                o.reverse();
                a.g(o, function(b) {
                    a.g(b, function(c) {
                        var f = c[0],
                            e = c[1],
                            d = f + "," + e,
                            b = i;
                        if (e || f) b = a.L(i);
                        a.F(b, u[d]);
                        a.hb(b, "hidden");
                        a.D(b, "absolute");
                        A.td(b);
                        m[d] = b;
                        a.r(b, !k)
                    })
                })
            }

            function v() {
                var a = this,
                    b = 0;
                k.call(a, 0, u);
                a.Cb = function(c, a) {
                    if (a - b > j) {
                        b = a;
                        e && e.Jb(a);
                        g && g.Jb(a)
                    }
                };
                a.wc = r
            }
            f.Ue = function() {
                var a = 0,
                    c = t.ld,
                    d = c.length;
                if (w) a = x++ % d;
                else a = b.floor(b.random() * d);
                c[a] && (c[a].V = a);
                return c[a]
            };
            f.Kd = function(w, x, i, k, a) {
                r = a;
                a = m(a, j);
                var h = k.Hc,
                    d = i.Hc;
                h["no-image"] = !k.uc;
                d["no-image"] = !i.uc;
                var l = h,
                    n = d,
                    v = a,
                    c = a.ec || m({}, j);
                if (!a.Tb) {
                    l = d;
                    n = h
                }
                var t = c.pc || 0;
                g = new p(o, n, c, b.max(t - c.M, 0), s, q);
                e = new p(o, l, v, b.max(c.M - t, 0), s, q);
                g.Jb(0);
                e.Jb(0);
                u = b.max(g.gd, e.gd);
                f.V = w
            };
            f.ub = function() {
                o.ub();
                g = i;
                e = i
            };
            f.Yd = function() {
                var a = i;
                if (e) a = new v;
                return a
            };
            if (a.Z() || a.Uc() || y && a.vc() < 537) j = 16;
            l.call(f);
            k.call(f, -1e7, 1e7)
        },
        e = function(q, ec) {
            var n = this;

            function Dc() {
                var a = this;
                k.call(a, -1e8, 2e8);
                a.Xd = function() {
                    var c = a.ib(),
                        d = b.floor(c),
                        f = s(d),
                        e = c - b.floor(c);
                    return {
                        V: f,
                        Wd: d,
                        fb: e
                    }
                };
                a.Cb = function(d, a) {
                    var f = b.floor(a);
                    if (f != a && a > d) f++;
                    Tb(f, c);
                    n.i(e.Vd, s(a), s(d), a, d)
                }
            }

            function Cc() {
                var b = this;
                k.call(b, 0, 0, {
                    dd: r
                });
                a.g(D, function(a) {
                    A & 1 && a.Ad(r);
                    b.kc(a);
                    a.pc(hb / ac)
                })
            }

            function Bc() {
                var a = this,
                    b = Sb.T;
                k.call(a, -1, 2, {
                    o: d.Qd,
                    Pb: {
                        fb: Yb
                    },
                    dd: r
                }, b, {
                    fb: 1
                }, {
                    fb: -2
                });
                a.lc = b
            }

            function pc(m, l) {
                var a = this,
                    d, f, g, j, b;
                k.call(a, -1e8, 2e8, {
                    Mc: 100
                });
                a.Rc = function() {
                    Q = c;
                    U = i;
                    n.i(e.wd, s(w.K()), w.K())
                };
                a.Bc = function() {
                    Q = h;
                    j = h;
                    var a = w.Xd();
                    n.i(e.zd, s(w.K()), w.K());
                    !a.fb && Fc(a.Wd, t)
                };
                a.Cb = function(h, e) {
                    var a;
                    if (j) a = b;
                    else {
                        a = f;
                        if (g) {
                            var c = e / g;
                            a = p.rd(c) * (f - d) + d
                        }
                    }
                    w.B(a)
                };
                a.Kb = function(b, e, c, h) {
                    d = b;
                    f = e;
                    g = c;
                    w.B(b);
                    a.B(0);
                    a.Gc(c, h)
                };
                a.Pe = function(d) {
                    j = c;
                    b = d;
                    a.Ec(d, i, c)
                };
                a.Oe = function(a) {
                    b = a
                };
                w = new Dc;
                w.nc(m);
                w.nc(l)
            }

            function qc() {
                var c = this,
                    b = Wb();
                a.u(b, 0);
                a.ab(b, "pointerEvents", "none");
                c.T = b;
                c.td = function(c) {
                    a.E(b, c);
                    a.r(b)
                };
                c.ub = function() {
                    a.I(b);
                    a.Ob(b)
                }
            }

            function zc(o, f) {
                var d = this,
                    q, x, N, y, j, C = [],
                    H, v, W, K, Q, G, g, w, m;
                k.call(d, -u, u + 1, {});

                function F(a) {
                    x && x.Bb();
                    q && q.Bb();
                    V(o, a);
                    G = c;
                    q = new L.C(o, L, 1);
                    x = new L.C(o, L);
                    x.B(0);
                    q.B(0)
                }

                function Y() {
                    q.mc < L.mc && F()
                }

                function O(o, r, m) {
                    if (!K) {
                        K = c;
                        if (j && m) {
                            var g = m.width,
                                b = m.height,
                                l = g,
                                k = b;
                            if (g && b && p.db) {
                                if (p.db & 3 && (!(p.db & 4) || g > J || b > I)) {
                                    var i = h,
                                        q = J / I * b / g;
                                    if (p.db & 1) i = q > 1;
                                    else if (p.db & 2) i = q < 1;
                                    l = i ? g * I / b : J;
                                    k = i ? I : b * J / g
                                }
                                a.m(j, l);
                                a.q(j, k);
                                a.z(j, (I - k) / 2);
                                a.A(j, (J - l) / 2)
                            }
                            a.D(j, "absolute");
                            n.i(e.Ve, f)
                        }
                    }
                    a.I(r);
                    o && o(d)
                }

                function X(b, c, e, g) {
                    if (g == U && t == f && R)
                        if (!Ec) {
                            var a = s(b);
                            B.Kd(a, f, c, d, e);
                            c.De();
                            ab.Qc(a, 1);
                            ab.B(a);
                            z.Kb(b, b, 0)
                        }
                }

                function bb(b) {
                    if (b == U && t == f) {
                        if (!g) {
                            var a = i;
                            if (B)
                                if (B.V == f) a = B.Yd();
                                else B.ub();
                            Y();
                            g = new xc(o, f, a, d.pe(), d.oe());
                            g.Nc(m)
                        }!g.Wc() && g.Ub()
                    }
                }

                function T(e, c, h) {
                    if (e == f) {
                        if (e != c) D[c] && D[c].ze();
                        else !h && g && g.ye();
                        m && m.Lc();
                        var j = U = a.P();
                        d.jb(a.J(i, bb, j))
                    } else {
                        var l = b.abs(f - e),
                            k = u + p.xe - 1;
                        (!Q || l <= k) && d.jb()
                    }
                }

                function cb() {
                    if (t == f && g) {
                        g.Y();
                        m && m.Be();
                        m && m.Nd();
                        g.Cc()
                    }
                }

                function fb() {
                    t == f && g && g.Y()
                }

                function Z(a) {
                    !M && n.i(e.ue, f, a)
                }

                function P() {
                    m = w.pInstance;
                    g && g.Nc(m)
                }
                d.jb = function(d, b) {
                    b = b || y;
                    if (C.length && !K) {
                        a.r(b);
                        if (!W) {
                            W = c;
                            n.i(e.Ne, f);
                            a.g(C, function(b) {
                                if (!a.N(b, "src")) {
                                    b.src = a.t(b, "src2");
                                    a.O(b, b["display-origin"])
                                }
                            })
                        }
                        a.Je(C, j, a.J(i, O, d, b))
                    } else O(d, b)
                };
                d.te = function() {
                    var g = f;
                    if (p.Sb < 0) g -= r;
                    var c = g + p.Sb * vc;
                    if (A & 2) c = s(c);
                    if (!(A & 1)) c = b.max(0, b.min(c, r - u));
                    if (c != f) {
                        if (B) {
                            var d = B.Ue(r);
                            if (d) {
                                var h = U = a.P(),
                                    e = D[s(c)];
                                return e.jb(a.J(i, X, c, e, d, h), y)
                            }
                        }
                        pb(c)
                    }
                };
                d.Rb = function() {
                    T(f, f, c)
                };
                d.ze = function() {
                    m && m.Be();
                    m && m.Nd();
                    d.md();
                    g && g.se();
                    g = i;
                    F()
                };
                d.De = function() {
                    a.I(o)
                };
                d.md = function() {
                    a.r(o)
                };
                d.Ce = function() {
                    m && m.Lc()
                };

                function V(b, e, d) {
                    if (a.N(b, "jssor-slider")) return;
                    d = d || 0;
                    if (!G) {
                        if (b.tagName == "IMG") {
                            C.push(b);
                            if (!a.N(b, "src")) {
                                Q = c;
                                b["display-origin"] = a.O(b);
                                a.I(b)
                            }
                        }
                        a.Z() && a.u(b, (a.u(b) || 0) + 1);
                        if (p.Xc && a.vc())(a.vc() < 534 || !eb && !a.af()) && a.ee(b)
                    }
                    var f = a.kb(b);
                    a.g(f, function(f) {
                        var i = f.tagName,
                            k = a.t(f, "u");
                        if (k == "player" && !w) {
                            w = f;
                            if (w.pInstance) P();
                            else a.a(w, "dataavailable", P)
                        }
                        if (k == "caption") {
                            if (!a.Yc() && !e) {
                                var g = a.L(f, h, c);
                                a.yb(g, f, b);
                                a.Eb(f, b);
                                f = g;
                                e = c
                            }
                        } else if (!G && !d && !j) {
                            if (i == "A") {
                                if (a.t(f, "u") == "image") j = a.ve(f, "IMG");
                                else j = a.v(f, "image", c);
                                if (j) {
                                    H = f;
                                    a.F(H, S);
                                    v = a.L(H, c);
                                    a.O(v, "block");
                                    a.F(v, S);
                                    a.gb(v, 0);
                                    a.ab(v, "backgroundColor", "#000")
                                }
                            } else if (i == "IMG" && a.t(f, "u") == "image") j = f;
                            if (j) {
                                j.border = 0;
                                a.F(j, S)
                            }
                        }
                        V(f, e, d + 1)
                    })
                }
                d.bc = function(c, b) {
                    var a = u - b;
                    Yb(N, a)
                };
                d.pe = function() {
                    return q
                };
                d.oe = function() {
                    return x
                };
                d.V = f;
                l.call(d);
                var E = a.v(o, "thumb", c);
                if (E) {
                    a.L(E);
                    a.Dc(E, "id");
                    a.I(E)
                }
                a.r(o);
                y = a.L(db);
                a.u(y, 1e3);
                a.a(o, "click", Z);
                F(c);
                d.uc = j;
                d.ed = v;
                d.Hc = o;
                d.lc = N = o;
                a.E(N, y);
                n.tb(203, T);
                n.tb(28, fb);
                n.tb(24, cb)
            }

            function xc(G, i, p, u, s) {
                var b = this,
                    l = 0,
                    w = 0,
                    m, g, d, f, j, q, v, r, o = D[i];
                k.call(b, 0, 0);

                function x() {
                    a.Ob(O);
                    cc && j && o.ed && a.E(O, o.ed);
                    a.r(O, !j && o.uc)
                }

                function y() {
                    if (q) {
                        q = h;
                        n.i(e.Se, i, d, l, g, d, f);
                        b.B(g)
                    }
                    b.Ub()
                }

                function z(a) {
                    r = a;
                    b.Y();
                    b.Ub()
                }
                b.Ub = function() {
                    var a = b.ib();
                    if (!C && !Q && !r && t == i) {
                        if (!a) {
                            if (m && !j) {
                                j = c;
                                b.Cc(c);
                                n.i(e.Te, i, l, w, m, f)
                            }
                            x()
                        }
                        var h, p = e.ad;
                        if (a != f)
                            if (a == d) h = f;
                            else if (a == g) h = d;
                        else if (!a) h = g;
                        else if (a > d) {
                            q = c;
                            h = d;
                            p = e.cf
                        } else h = b.Pc();
                        n.i(p, i, a, l, g, d, f);
                        var k = R && (!E || F);
                        if (a == f)(d != f && !(E & 12) || k) && o.te();
                        else(k || a != d) && b.Gc(h, y)
                    }
                };
                b.ye = function() {
                    d == f && d == b.ib() && b.B(g)
                };
                b.se = function() {
                    B && B.V == i && B.ub();
                    var a = b.ib();
                    a < f && n.i(e.ad, i, -a - 1, l, g, d, f)
                };
                b.Cc = function(b) {
                    p && a.hb(jb, b && p.wc.gf ? "" : "hidden")
                };
                b.bc = function(b, a) {
                    if (j && a >= m) {
                        j = h;
                        x();
                        o.md();
                        B.ub();
                        n.i(e.Ze, i, l, w, m, f)
                    }
                    n.i(e.Ie, i, a, l, g, d, f)
                };
                b.Nc = function(a) {
                    if (a && !v) {
                        v = a;
                        a.tb($JssorPlayer$.Sd, z)
                    }
                };
                p && b.kc(p);
                m = b.lb();
                b.lb();
                b.kc(u);
                g = u.lb();
                d = g + (a.He(a.t(G, "idle")) || oc);
                s.pc(d);
                b.nc(s);
                f = b.lb()
            }

            function Yb(g, f) {
                var e = x > 0 ? x : ib,
                    c = Bb * f * (e & 1),
                    d = Cb * f * (e >> 1 & 1);
                c = b.round(c);
                d = b.round(d);
                a.A(g, c);
                a.z(g, d)
            }

            function Ob() {
                rb = Q;
                Kb = z.Pc();
                G = w.K()
            }

            function fc() {
                Ob();
                if (C || !F && E & 12) {
                    z.Y();
                    n.i(e.Le)
                }
            }

            function dc(e) {
                if (!C && (F || !(E & 12)) && !z.Wc()) {
                    var c = w.K(),
                        a = b.ceil(G);
                    if (e && b.abs(H) >= p.Ac) {
                        a = b.ceil(c);
                        a += gb
                    }
                    if (!(A & 1)) a = b.min(r - u, b.max(a, 0));
                    var d = b.abs(a - c);
                    d = 1 - b.pow(1 - d, 5);
                    if (!M && rb) z.Qe(Kb);
                    else if (c == a) {
                        vb.Ce();
                        vb.Rb()
                    } else z.Kb(c, a, d * Ub)
                }
            }

            function Ib(b) {
                !a.t(a.ac(b), "nodrag") && a.vb(b)
            }

            function tc(a) {
                Xb(a, 1)
            }

            function Xb(b, d) {
                b = a.cd(b);
                var k = a.ac(b);
                if (!K && !a.t(k, "nodrag") && uc() && (!d || b.touches.length == 1)) {
                    C = c;
                    Ab = h;
                    U = i;
                    a.a(f, d ? "touchmove" : "mousemove", Db);
                    a.P();
                    M = 0;
                    fc();
                    if (!rb) x = 0;
                    if (d) {
                        var j = b.touches[0];
                        wb = j.clientX;
                        xb = j.clientY
                    } else {
                        var g = a.fd(b);
                        wb = g.x;
                        xb = g.y
                    }
                    H = 0;
                    cb = 0;
                    gb = 0;
                    n.i(e.Me, s(G), G, b)
                }
            }

            function Db(e) {
                if (C) {
                    e = a.cd(e);
                    var f;
                    if (e.type != "mousemove") {
                        var l = e.touches[0];
                        f = {
                            x: l.clientX,
                            y: l.clientY
                        }
                    } else f = a.fd(e);
                    if (f) {
                        var j = f.x - wb,
                            k = f.y - xb;
                        if (b.floor(G) != G) x = x || ib & K;
                        if ((j || k) && !x) {
                            if (K == 3)
                                if (b.abs(k) > b.abs(j)) x = 2;
                                else x = 1;
                            else x = K;
                            if (lb && x == 1 && b.abs(k) - b.abs(j) > 3) Ab = c
                        }
                        if (x) {
                            var d = k,
                                i = Cb;
                            if (x == 1) {
                                d = j;
                                i = Bb
                            }
                            if (!(A & 1)) {
                                if (d > 0) {
                                    var g = i * t,
                                        h = d - g;
                                    if (h > 0) d = g + b.sqrt(h) * 5
                                }
                                if (d < 0) {
                                    var g = i * (r - u - t),
                                        h = -d - g;
                                    if (h > 0) d = -g - b.sqrt(h) * 5
                                }
                            }
                            if (H - cb < -2) gb = 0;
                            else if (H - cb > 2) gb = -1;
                            cb = H;
                            H = d;
                            ub = G - H / i / (Z || 1);
                            if (H && x && !Ab) {
                                a.vb(e);
                                if (!Q) z.Pe(ub);
                                else z.Oe(ub)
                            }
                        }
                    }
                }
            }

            function ob() {
                rc();
                if (C) {
                    C = h;
                    a.P();
                    a.H(f, "mousemove", Db);
                    a.H(f, "touchmove", Db);
                    M = H;
                    z.Y();
                    var b = w.K();
                    n.i(e.sd, s(b), b, s(G), G);
                    E & 12 && Ob();
                    dc(c)
                }
            }

            function jc(c) {
                if (M) {
                    a.Ae(c);
                    var b = a.ac(c);
                    while (b && v !== b) {
                        b.tagName == "A" && a.vb(c);
                        try {
                            b = b.parentNode
                        } catch (d) {
                            break
                        }
                    }
                }
            }

            function nc(a) {
                D[t];
                t = s(a);
                vb = D[t];
                Tb(a);
                return t
            }

            function Fc(a, b) {
                x = 0;
                nc(a);
                n.i(e.ud, s(a), b)
            }

            function Tb(b, c) {
                N = b;
                a.g(P, function(a) {
                    a.jc(s(b), b, c)
                })
            }

            function uc() {
                var b = e.nd || 0,
                    a = Y;
                if (lb) a & 1 && (a &= 1);
                e.nd |= a;
                return K = a & ~b
            }

            function rc() {
                if (K) {
                    e.nd &= ~Y;
                    K = 0
                }
            }

            function Wb() {
                var b = a.Ib();
                a.F(b, S);
                a.D(b, "absolute");
                return b
            }

            function s(a) {
                return (a % r + r) % r
            }

            function kc(d, c) {
                var a = d;
                if (c) {
                    if (!A) {
                        a = b.min(b.max(a + N, 0), r - u);
                        c = h
                    } else if (A & 2) {
                        a = s(a + N);
                        c = h
                    }
                } else if (A) a = n.Cd(a);
                pb(a, p.Lb, c)
            }

            function zb() {
                a.g(P, function(a) {
                    a.dc(a.Gb.od <= F)
                })
            }

            function hc() {
                if (!F) {
                    F = 1;
                    zb();
                    if (!C) {
                        E & 12 && dc();
                        E & 3 && D[t].Rb()
                    }
                }
            }

            function gc() {
                if (F) {
                    F = 0;
                    zb();
                    C || !(E & 12) || fc()
                }
            }

            function ic() {
                S = {
                    cb: J,
                    U: I,
                    e: 0,
                    f: 0
                };
                a.g(V, function(b) {
                    a.F(b, S);
                    a.D(b, "absolute");
                    a.hb(b, "hidden");
                    a.I(b)
                });
                a.F(db, S)
            }

            function nb(b, a) {
                pb(b, a, c)
            }

            function pb(f, e, k) {
                if (Qb && (!C && (F || !(E & 12)) || p.qd)) {
                    Q = c;
                    C = h;
                    z.Y();
                    if (e == j) e = Ub;
                    var d = Eb.ib(),
                        a = f;
                    if (k) {
                        a = d + f;
                        if (f > 0) a = b.ceil(a);
                        else a = b.floor(a)
                    }
                    if (A & 2) a = s(a);
                    if (!(A & 1)) a = b.max(0, b.min(a, r - u));
                    var i = (a - d) % r;
                    a = d + i;
                    var g = d == a ? 0 : e * b.abs(i);
                    g = b.min(g, e * u * 1.5);
                    z.Kb(d, a, g || 1)
                }
            }
            n.Ec = function() {
                if (!R) {
                    R = c;
                    D[t] && D[t].Rb()
                }
            };

            function X() {
                return a.m(y || q)
            }

            function kb() {
                return a.q(y || q)
            }
            n.W = X;
            n.S = kb;

            function Gb(c, d) {
                if (c == j) return a.m(q);
                if (!y) {
                    var b = a.Ib(f);
                    a.Fc(b, a.Fc(q));
                    a.Ab(b, a.Ab(q));
                    a.O(b, "block");
                    a.D(b, "relative");
                    a.z(b, 0);
                    a.A(b, 0);
                    a.hb(b, "visible");
                    y = a.Ib(f);
                    a.D(y, "absolute");
                    a.z(y, 0);
                    a.A(y, 0);
                    a.m(y, a.m(q));
                    a.q(y, a.q(q));
                    a.ne(y, "0 0");
                    a.E(y, b);
                    var h = a.kb(q);
                    a.E(q, y);
                    a.ab(q, "backgroundImage", "");
                    a.g(h, function(c) {
                        a.E(a.t(c, "noscale") ? q : b, c)
                    })
                }
                Z = c / (d ? a.q : a.m)(y);
                a.fe(y, Z);
                var g = d ? Z * X() : c,
                    e = d ? c : Z * kb();
                a.m(q, g);
                a.q(q, e);
                a.g(P, function(a) {
                    a.oc(g, e)
                })
            }
            n.Td = Gb;
            n.Cd = function(a) {
                var d = b.ceil(s(hb / ac)),
                    c = s(a - N + d);
                if (c > u) {
                    if (a - N > r / 2) a -= r;
                    else if (a - N <= -r / 2) a += r
                } else a = N + c - d;
                return a
            };
            l.call(n);
            n.T = q = a.eb(q);
            var p = a.p({
                db: 0,
                xe: 1,
                gc: 0,
                ic: h,
                wb: 1,
                Xc: c,
                qd: c,
                Sb: 1,
                hc: 3e3,
                zc: 1,
                Lb: 500,
                rd: d.Pd,
                Ac: 20,
                yc: 0,
                bb: 1,
                Tc: 0,
                Sc: 1,
                Db: 1,
                tc: 1
            }, ec);
            if (p.be != j) p.hc = p.be;
            if (p.Q != j) p.bb = p.Q;
            var ib = p.Db & 3,
                vc = (p.Db & 4) / -4 || 1,
                fb = p.yd,
                L = a.p({
                    C: o
                }, p.ef),
                sb = p.de,
                W = p.Zd,
                bb = p.ff,
                T = !p.Sc,
                y, v = a.v(q, "slides", T),
                db = a.v(q, "loading", T) || a.Ib(f),
                Jb = a.v(q, "navigator", T),
                bc = a.v(q, "arrowleft", T),
                Zb = a.v(q, "arrowright", T),
                Hb = a.v(q, "thumbnavigator", T),
                mc = a.m(v),
                lc = a.q(v),
                S, V = [],
                wc = a.kb(v);
            a.g(wc, function(b) {
                if (b.tagName == "DIV" && !a.t(b, "u")) V.push(b);
                else a.Z() && a.u(b, (a.u(b) || 0) + 1)
            });
            var t = -1,
                N, vb, r = V.length,
                J = p.ae || mc,
                I = p.Rd || lc,
                Vb = p.yc,
                Bb = J + Vb,
                Cb = I + Vb,
                ac = ib & 1 ? Bb : Cb,
                u = b.min(p.bb, r),
                jb, x, K, Ab, P = [],
                Pb, Rb, Nb, cc, Ec, R, E = p.zc,
                oc = p.hc,
                Ub = p.Lb,
                tb, eb, hb, Qb = u < r,
                A = Qb ? p.wb : 0,
                Y, M, F = 1,
                Q, C, U, wb = 0,
                xb = 0,
                H, cb, gb, Eb, w, ab, z, Sb = new qc,
                Z;
            R = p.ic;
            n.Gb = ec;
            ic();
            a.N(q, "jssor-slider", c);
            a.u(v, a.u(v) || 0);
            a.D(v, "absolute");
            jb = a.L(v, c);
            a.yb(jb, v);
            if (fb) {
                cc = fb.Id;
                tb = fb.C;
                eb = u == 1 && r > 1 && tb && (!a.Yc() || a.Zc() >= 8)
            }
            hb = eb || u >= r || !(A & 1) ? 0 : p.Tc;
            Y = (u > 1 || hb ? ib : -1) & p.tc;
            var yb = v,
                D = [],
                B, O, Fb = a.Fe(),
                lb = Fb.Ke,
                G, rb, Kb, ub;
            Fb.id && a.ab(yb, Fb.id, ([i, "pan-y", "pan-x", "none"])[Y] || "");
            ab = new Bc;
            if (eb) B = new tb(Sb, J, I, fb, lb);
            a.E(jb, ab.lc);
            a.hb(v, "hidden");
            O = Wb();
            a.ab(O, "backgroundColor", "#000");
            a.gb(O, 0);
            a.yb(O, yb.firstChild, yb);
            for (var qb = 0; qb < V.length; qb++) {
                var yc = V[qb],
                    Ac = new zc(yc, qb);
                D.push(Ac)
            }
            a.I(db);
            Eb = new Cc;
            z = new pc(Eb, ab);
            if (Y) {
                a.a(v, "mousedown", Xb);
                a.a(v, "touchstart", tc);
                a.a(v, "dragstart", Ib);
                a.a(v, "selectstart", Ib);
                a.a(f, "mouseup", ob);
                a.a(f, "touchend", ob);
                a.a(f, "touchcancel", ob);
                a.a(g, "blur", ob)
            }
            E &= lb ? 10 : 5;
            if (Jb && sb) {
                Pb = new sb.C(Jb, sb, X(), kb());
                P.push(Pb)
            }
            if (W && bc && Zb) {
                W.wb = A;
                W.bb = u;
                Rb = new W.C(bc, Zb, W, X(), kb());
                P.push(Rb)
            }
            if (Hb && bb) {
                bb.gc = p.gc;
                Nb = new bb.C(Hb, bb);
                P.push(Nb)
            }
            a.g(P, function(a) {
                a.Mb(r, D, db);
                a.tb(m.Nb, kc)
            });
            Gb(X());
            a.a(v, "click", jc);
            a.a(q, "mouseout", a.Yb(hc, q));
            a.a(q, "mouseover", a.Yb(gc, q));
            zb();
            p.Jd && a.a(f, "keydown", function(a) {
                if (a.keyCode == 37) nb(-1);
                else a.keyCode == 39 && nb(1)
            });
            var mb = p.gc;
            if (!(A & 1)) mb = b.max(0, b.min(mb, r - u));
            z.Kb(mb, mb, 0)
        };
    e.ue = 21;
    e.Me = 22;
    e.sd = 23;
    e.wd = 24;
    e.zd = 25;
    e.Ne = 26;
    e.Ve = 27;
    e.Le = 28;
    e.Vd = 202;
    e.ud = 203;
    e.Te = 206;
    e.Ze = 207;
    e.Ie = 208;
    e.ad = 209;
    e.cf = 210;
    e.Se = 211;
    var m = {
            Nb: 1
        },
        p = function(d, D) {
            var f = this;
            l.call(f);
            d = a.eb(d);
            var t, u, s, r, n = 0,
                e, o, k, y, z, j, g, q, p, C = [],
                A = [];

            function x(a) {
                a != -1 && A[a].Ge(a == n)
            }

            function v(a) {
                f.i(m.Nb, a * o)
            }
            f.T = d;
            f.jc = function(a) {
                if (a != r) {
                    var d = n,
                        c = b.floor(a / o);
                    n = c;
                    r = a;
                    x(d);
                    x(c)
                }
            };
            f.dc = function(b) {
                a.r(d, b)
            };
            var B;
            f.oc = function(f, b) {
                if (!B || e.X == h) {
                    var f = a.xb(d).clientWidth,
                        b = a.xb(d).clientHeight;
                    e.pb & 1 && a.A(d, (f - u) / 2);
                    e.pb & 2 && a.z(d, (b - s) / 2);
                    B = c
                }
            };
            var w;
            f.Mb = function(D) {
                if (!w) {
                    t = b.ceil(D / o);
                    n = 0;
                    var m = q + y,
                        r = p + z,
                        l = b.ceil(t / k) - 1;
                    u = q + m * (!j ? l : k - 1);
                    s = p + r * (j ? l : k - 1);
                    a.m(d, u);
                    a.q(d, s);
                    for (var f = 0; f < t; f++) {
                        var B = a.he();
                        a.we(B, f + 1);
                        var h = a.Ee(g, "numbertemplate", B, c);
                        a.D(h, "absolute");
                        var x = f % (l + 1);
                        a.A(h, !j ? m * x : f % k * m);
                        a.z(h, j ? r * x : b.floor(f / (l + 1)) * r);
                        a.E(d, h);
                        C[f] = h;
                        e.Wb & 1 && a.a(h, "click", a.J(i, v, f));
                        e.Wb & 2 && a.a(h, "mouseover", a.Yb(a.J(i, v, f), h));
                        A[f] = a.xc(h)
                    }
                    w = c
                }
            };
            f.Gb = e = a.p({
                cc: 0,
                Qb: 0,
                Vb: 1,
                Wb: 1
            }, D);
            g = a.v(d, "prototype");
            q = a.m(g);
            p = a.q(g);
            a.Eb(g, d);
            o = e.Fb || 1;
            k = e.jd || 1;
            y = e.cc;
            z = e.Qb;
            j = e.Vb - 1;
            e.X == h && a.N(d, "noscale", c)
        },
        r = function(b, f, j) {
            var d = this;
            l.call(d);
            var u, t, e, g, k, q = a.m(b),
                o = a.q(b);

            function n(a) {
                d.i(m.Nb, a, c)
            }

            function r(c) {
                a.r(b, c || !j.wb && e == 0);
                a.r(f, c || !j.wb && e >= t - j.bb);
                u = c
            }
            d.jc = function(b, a, c) {
                if (c) e = a;
                else {
                    e = b;
                    r(u)
                }
            };
            d.dc = r;
            var s;
            d.oc = function(i, d) {
                if (!s || g.X == h) {
                    var e = a.xb(b).clientWidth,
                        d = a.xb(b).clientHeight;
                    if (g.pb & 1) {
                        a.A(b, (e - q) / 2);
                        a.A(f, (e - q) / 2)
                    }
                    if (g.pb & 2) {
                        a.z(b, (d - o) / 2);
                        a.z(f, (d - o) / 2)
                    }
                    s = c
                }
            };
            var p;
            d.Mb = function(d) {
                t = d;
                e = 0;
                if (!p) {
                    a.a(b, "click", a.J(i, n, -k));
                    a.a(f, "click", a.J(i, n, k));
                    a.xc(b);
                    a.xc(f);
                    p = c
                }
            };
            d.Gb = g = a.p({
                Fb: 1
            }, j);
            k = g.Fb;
            if (g.X == h) {
                a.N(b, "noscale", c);
                a.N(f, "noscale", c)
            }
        };

    function o() {
        k.call(this, 0, 0);
        this.Bb = a.Kc
    }
    jssor_slider1_starter = function(i) {
        var h = [{
                mb: 1200,
                s: 2
            }],
            j = {
                ic: c,
                Sb: 1,
                hc: 3e3,
                zc: 1,
                Jd: c,
                Lb: 500,
                Ac: 20,
                yc: 0,
                bb: 1,
                Tc: 0,
                Sc: 1,
                Db: 1,
                tc: 3,
                yd: {
                    C: q,
                    ld: h,
                    Md: 1,
                    Id: c
                },
                de: {
                    C: p,
                    od: 2,
                    pb: 1,
                    Fb: 1,
                    jd: 1,
                    cc: 10,
                    Qb: 10,
                    Vb: 1
                },
                Zd: {
                    C: r,
                    od: 2,
                    Fb: 1
                }
            },
            f = new e(i, j);

        function d() {
            var c = f.T.parentNode.clientWidth;
            if (c) f.Td(b.min(c, 600));
            else a.G(d, 30)
        }
        d();
        a.a(g, "load", d);
        a.a(g, "resize", a.je(g, d));
        a.a(g, "orientationchange", d)
    }
})(window, document, Math, null, true, false)
