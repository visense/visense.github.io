!function (e) {
    function n(t) {
        if (o[t]) return o[t].exports;
        var r = o[t] = {i: t, l: !1, exports: {}};
        return e[t].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    var o = {};
    n.m = e, n.c = o, n.d = function (e, o, t) {
        n.o(e, o) || Object.defineProperty(e, o, {configurable: !1, enumerable: !0, get: t})
    }, n.n = function (e) {
        var o = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(o, "a", o), o
    }, n.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, n.p = "", n(n.s = 5)
}([function (e, n, o) {
    "use strict";

    function t(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, n, o, t) {
        var r = void 0, l = !1;
        return n.forEach(function (n, o) {
            i.default(n, e) && (r = o)
        }), void 0 !== r && (n.splice(r, 1), o > r ? (o--, l = !1) : o === r && (o = t(o), l = !0)), {
            playlist: n,
            nowpoint: o,
            needupdate: l
        }
    }

    var l = function () {
        function e(e, n) {
            for (var o = 0; o < n.length; o++) {
                var t = n[o];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
            }
        }

        return function (n, o, t) {
            return o && e(n.prototype, o), t && e(n, t), n
        }
    }();
    Object.defineProperty(n, "__esModule", {value: !0});
    var i = o(10);
    n.baseRemoveMusic = r;
    var a = function () {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            t(this, e), this.__playlist = [], this.point = 0, this.__playlist = n, this.to(o)
        }

        return l(e, [{
            key: "next", value: function () {
                return this.point = this.nextPoint(), this.playlist[this.point]
            }
        }, {
            key: "prev", value: function () {
                return this.point = this.prevPoint(), this.playlist[this.point]
            }
        }, {
            key: "now", value: function () {
                return this.playlist[this.point]
            }
        }, {
            key: "nowpoint", value: function () {
                return this.point
            }
        }, {
            key: "to", value: function (e) {
                this.point = Math.max(0, Math.min(e, this.__playlist.length - 1))
            }
        }, {
            key: "addMusic", value: function (e) {
                this.__playlist.push(e)
            }
        }, {
            key: "nextPoint", value: function () {
                var e = this.point + 1;
                return e >= this.__playlist.length && (e = 0), e
            }
        }, {
            key: "prevPoint", value: function () {
                var e = this.point - 1;
                return e < 0 && (e = this.__playlist.length - 1), e
            }
        }, {
            key: "removeMusic", value: function (e) {
                var n = this, o = r(e, this.__playlist, this.point, function (e) {
                    return Math.max(0, Math.min(e, n.__playlist.length - 1))
                }), t = o.playlist, l = o.nowpoint, i = o.needupdate;
                return this.__playlist = t, this.point = l, i
            }
        }, {
            key: "playlist", get: function () {
                return this.__playlist
            }
        }]), e
    }();
    n.listloopPlaymode = a
}, function (e, n) {
    function o(e, n) {
        var o = e[1] || "", r = e[3];
        if (!r) return o;
        if (n && "function" == typeof btoa) {
            var l = t(r);
            return [o].concat(r.sources.map(function (e) {
                return "/*# sourceURL=" + r.sourceRoot + e + " */"
            })).concat([l]).join("\n")
        }
        return [o].join("\n")
    }

    function t(e) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
    }

    e.exports = function (e) {
        var n = [];
        return n.toString = function () {
            return this.map(function (n) {
                var t = o(n, e);
                return n[2] ? "@media " + n[2] + "{" + t + "}" : t
            }).join("")
        }, n.i = function (e, o) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var t = {}, r = 0; r < this.length; r++) {
                var l = this[r][0];
                "number" == typeof l && (t[l] = !0)
            }
            for (r = 0; r < e.length; r++) {
                var i = e[r];
                "number" == typeof i[0] && t[i[0]] || (o && !i[2] ? i[2] = o : o && (i[2] = "(" + i[2] + ") and (" + o + ")"), n.push(i))
            }
        }, n
    }
}, function (e, n) {
    function o() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function t(e) {
        return "function" == typeof e
    }

    function r(e) {
        return "number" == typeof e
    }

    function l(e) {
        return "object" == typeof e && null !== e
    }

    function i(e) {
        return void 0 === e
    }

    e.exports = o, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._maxListeners = void 0, o.defaultMaxListeners = 10, o.prototype.setMaxListeners = function (e) {
        if (!r(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e, this
    }, o.prototype.emit = function (e) {
        var n, o, r, a, c, s;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || l(this._events.error) && !this._events.error.length)) {
            if ((n = arguments[1]) instanceof Error) throw n;
            var p = new Error('Uncaught, unspecified "error" event. (' + n + ")");
            throw p.context = n, p
        }
        if (o = this._events[e], i(o)) return !1;
        if (t(o)) switch (arguments.length) {
            case 1:
                o.call(this);
                break;
            case 2:
                o.call(this, arguments[1]);
                break;
            case 3:
                o.call(this, arguments[1], arguments[2]);
                break;
            default:
                a = Array.prototype.slice.call(arguments, 1), o.apply(this, a)
        } else if (l(o)) for (a = Array.prototype.slice.call(arguments, 1), s = o.slice(), r = s.length, c = 0; c < r; c++) s[c].apply(this, a);
        return !0
    }, o.prototype.addListener = function (e, n) {
        var r;
        if (!t(n)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, t(n.listener) ? n.listener : n), this._events[e] ? l(this._events[e]) ? this._events[e].push(n) : this._events[e] = [this._events[e], n] : this._events[e] = n, l(this._events[e]) && !this._events[e].warned && (r = i(this._maxListeners) ? o.defaultMaxListeners : this._maxListeners) && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
    }, o.prototype.on = o.prototype.addListener, o.prototype.once = function (e, n) {
        function o() {
            this.removeListener(e, o), r || (r = !0, n.apply(this, arguments))
        }

        if (!t(n)) throw TypeError("listener must be a function");
        var r = !1;
        return o.listener = n, this.on(e, o), this
    }, o.prototype.removeListener = function (e, n) {
        var o, r, i, a;
        if (!t(n)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (o = this._events[e], i = o.length, r = -1, o === n || t(o.listener) && o.listener === n) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, n); else if (l(o)) {
            for (a = i; a-- > 0;) if (o[a] === n || o[a].listener && o[a].listener === n) {
                r = a;
                break
            }
            if (r < 0) return this;
            1 === o.length ? (o.length = 0, delete this._events[e]) : o.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, n)
        }
        return this
    }, o.prototype.removeAllListeners = function (e) {
        var n, o;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
        if (0 === arguments.length) {
            for (n in this._events) "removeListener" !== n && this.removeAllListeners(n);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (o = this._events[e], t(o)) this.removeListener(e, o); else if (o) for (; o.length;) this.removeListener(e, o[o.length - 1]);
        return delete this._events[e], this
    }, o.prototype.listeners = function (e) {
        return this._events && this._events[e] ? t(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }, o.prototype.listenerCount = function (e) {
        if (this._events) {
            var n = this._events[e];
            if (t(n)) return 1;
            if (n) return n.length
        }
        return 0
    }, o.listenerCount = function (e, n) {
        return e.listenerCount(n)
    }
}, function (e, n) {
    e.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAiACIDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcDBAUG/8QALhAAAgEDAwIFAwMFAAAAAAAAAQIDAAQRBRIhE0EGIjFRkRQzYTI1cXOBocHR/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQACAQMCBwAAAAAAAAAAAAAAAQIDETESFAQhIkFRYWL/2gAMAwEAAhEDEQA/AGBo7mOKMEBjgc4rqLaRWXG1fgUttA1qNbnpPdGV5mIRRhkiKgeTjkE5J5/1W9pniH6jVbuPdiO2gJwHG13B5wcc44+a5tPpNM4N3OwlC45RfgVlXMA2t5E/nFVZ/EEaWVlcmJmjuDHnDAdIP6MR3GSBx71Fe37LbSSKylVIyNwyM002IotGc2N7cr6+1FYTXu5iepKcnP66KzF9AoBfQ2LmzgWWJp3L72A8rNt2kY5x/wBrtfD+oSXkQ6k8iQSRuJVjwr78DcATx6YyfYehNcbsttTkayGoiGcPuh3REo2FG0bt2R6e3fvVW2vulYSSMPND9vk46jcA/Ab/ABXTlBSXsCnpvfAydb8TR3eg7bMrGrStB1c8r0wTsP4PDKe/OeRUXiPxFLBojump6fFcTtGFeCTDHaoJyMe5A70uYte+n097Z7eK6EjA4mJCptXAK7SOcE1S1a9jvbqNoYzFCkSIiFtxGBzk9znvQXD81cV1kkMSAWDQRt9bMuVB272OOPTOKKVu4+5+aKO2+gbleC5bfusf9U1ctlB1RYiAYy/Kn0P9qKKtLIkMGfeKBdkAADjgVFcffYdgcD8UUU6JPuR0UUURT//Z"
}, function (e, n, o) {
    function t(e, n) {
        for (var o = 0; o < e.length; o++) {
            var t = e[o], r = m[t.id];
            if (r) {
                r.refs++;
                for (var l = 0; l < r.parts.length; l++) r.parts[l](t.parts[l]);
                for (; l < t.parts.length; l++) r.parts.push(p(t.parts[l], n))
            } else {
                for (var i = [], l = 0; l < t.parts.length; l++) i.push(p(t.parts[l], n));
                m[t.id] = {id: t.id, refs: 1, parts: i}
            }
        }
    }

    function r(e, n) {
        for (var o = [], t = {}, r = 0; r < e.length; r++) {
            var l = e[r], i = n.base ? l[0] + n.base : l[0], a = l[1], c = l[2], s = l[3],
                p = {css: a, media: c, sourceMap: s};
            t[i] ? t[i].parts.push(p) : o.push(t[i] = {id: i, parts: [p]})
        }
        return o
    }

    function l(e, n) {
        var o = k(e.insertInto);
        if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var t = y[y.length - 1];
        if ("top" === e.insertAt) t ? t.nextSibling ? o.insertBefore(n, t.nextSibling) : o.appendChild(n) : o.insertBefore(n, o.firstChild), y.push(n); else {
            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            o.appendChild(n)
        }
    }

    function i(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var n = y.indexOf(e);
        n >= 0 && y.splice(n, 1)
    }

    function a(e) {
        var n = document.createElement("style");
        return e.attrs.type = "text/css", s(n, e.attrs), l(e, n), n
    }

    function c(e) {
        var n = document.createElement("link");
        return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", s(n, e.attrs), l(e, n), n
    }

    function s(e, n) {
        Object.keys(n).forEach(function (o) {
            e.setAttribute(o, n[o])
        })
    }

    function p(e, n) {
        var o, t, r, l;
        if (n.transform && e.css) {
            if (!(l = n.transform(e.css))) return function () {
            };
            e.css = l
        }
        if (n.singleton) {
            var s = b++;
            o = g || (g = a(n)), t = d.bind(null, o, s, !1), r = d.bind(null, o, s, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (o = c(n), t = f.bind(null, o, n), r = function () {
            i(o), o.href && URL.revokeObjectURL(o.href)
        }) : (o = a(n), t = u.bind(null, o), r = function () {
            i(o)
        });
        return t(e), function (n) {
            if (n) {
                if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                t(e = n)
            } else r()
        }
    }

    function d(e, n, o, t) {
        var r = o ? "" : t.css;
        if (e.styleSheet) e.styleSheet.cssText = w(n, r); else {
            var l = document.createTextNode(r), i = e.childNodes;
            i[n] && e.removeChild(i[n]), i.length ? e.insertBefore(l, i[n]) : e.appendChild(l)
        }
    }

    function u(e, n) {
        var o = n.css, t = n.media;
        if (t && e.setAttribute("media", t), e.styleSheet) e.styleSheet.cssText = o; else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(o))
        }
    }

    function f(e, n, o) {
        var t = o.css, r = o.sourceMap, l = void 0 === n.convertToAbsoluteUrls && r;
        (n.convertToAbsoluteUrls || l) && (t = v(t)), r && (t += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var i = new Blob([t], {type: "text/css"}), a = e.href;
        e.href = URL.createObjectURL(i), a && URL.revokeObjectURL(a)
    }

    var m = {}, h = function (e) {
        var n;
        return function () {
            return void 0 === n && (n = e.apply(this, arguments)), n
        }
    }(function () {
        return window && document && document.all && !window.atob
    }), k = function (e) {
        var n = {};
        return function (o) {
            return void 0 === n[o] && (n[o] = e.call(this, o)), n[o]
        }
    }(function (e) {
        return document.querySelector(e)
    }), g = null, b = 0, y = [], v = o(22);
    e.exports = function (e, n) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        n = n || {}, n.attrs = "object" == typeof n.attrs ? n.attrs : {}, n.singleton || (n.singleton = h()), n.insertInto || (n.insertInto = "head"), n.insertAt || (n.insertAt = "bottom");
        var o = r(e, n);
        return t(o, n), function (e) {
            for (var l = [], i = 0; i < o.length; i++) {
                var a = o[i], c = m[a.id];
                c.refs--, l.push(c)
            }
            if (e) {
                t(r(e, n), n)
            }
            for (var i = 0; i < l.length; i++) {
                var c = l[i];
                if (0 === c.refs) {
                    for (var s = 0; s < c.parts.length; s++) c.parts[s]();
                    delete m[c.id]
                }
            }
        }
    };
    var w = function () {
        var e = [];
        return function (n, o) {
            return e[n] = o, e.filter(Boolean).join("\n")
        }
    }()
}, function (e, n, o) {
    e.exports = o(6)
}, function (e, n, o) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    var t = o(7);
    o(20), o(23), o(24);
    var r = o(26), l = o(27), i = o(28);
    r.registerLanguage("javascript", l), r.registerLanguage("xml", i), r.initHighlightingOnLoad(), window.addEventListener("load", function () {
        t.default.prototype.add163 = function (e) {
            var n = this;
            if (!e) throw new Error("Unable Property.");
            return fetch("https://music.huaji8.top/?id=" + e).then(function (e) {
                return e.json()
            }).then(function (e) {
                var o = {
                    name: e.info.songs[0].name,
                    artist: e.info.songs[0].ar.map(function (e) {
                        return e.name
                    }).join(","),
                    poster: e.pic.url,
                    lyric: e.lyric.lyric,
                    sublyric: e.lyric.tlyric,
                    src: e.url.url,
                    album: e.info.songs[0].al.name
                };
                return n.add(o), o
            })
        };
        var e = [{
            src: "./jscss/dw.mp3",
            poster: "http://p3.music.126.net/HI8auhf6HL1QIV7s6oxYGQ==/130841883718860.jpg",
            name: "?????????????????????",
            artist: "??????",
            lyric: "[00:00.00] ?????? : ??????\n[00:01.00] ?????? : ??????\n[00:15.629]??????????????? ??????????????????\n[00:24.280]??????????????? ??????????????????\n[00:30.619]??????????????? ??????????????????\n[00:38.570]??????????????? ??????????????? ??????\n[00:48.180]???????????????????????? ??????????????????\n[00:56.047]??????????????????????????? ?????????\n[01:05.498]\n[01:07.048]????????????????????? ??????????????????\n[01:14.989]???????????????????????? ?????????\n[01:22.298]????????????????????? ??????????????????\n[01:29.699]??????????????? ??????????????????\n[01:35.910]\n[01:38.518]??????????????? ??????????????????\n[01:46.498]??????????????? ??????????????????\n[01:53.699]??????????????? ??????????????????\n[02:00.928]??????????????? ??????????????? ??????\n[02:11.199]???????????????????????? ??????????????????\n[02:19.278]??????????????????????????? ?????????\n[02:29.500]\n[02:31.100]????????????????????? ??????????????????\n[02:38.199]???????????????????????? ?????????\n[02:46.400]????????????????????? ??????????????????\n[02:52.929]??????????????? ??????????????????\n[02:59.709]\n[03:00.890]????????????????????? ??????????????????\n[03:07.739]???????????????????????? ?????????\n[03:14.899]????????????????????? ??????????????????\n[03:22.849]??????????????? ??????????????????\n[03:30.890]\n[03:32.039]??????????????? ??????????????????\n[03:39.517]\n",
            sublyric: "",
            album: "????????????"
        }, {
            src: "./jscss/Crawling.mp3",
            poster: "http://p3.music.126.net/Ogg1zxVrZu7QTBUN2dRJ-A==/660806488337022.jpg",
            name: "Crawling",
            artist: "Linkin Park",
            album: "Crawling",
            lyric: "[00:00.00] ?????? : Linkin Park/Mark Wakefield\n[00:01.00] ?????? : Linkin Park/Mark Wakefield\n[00:24.300]Crawling in my skin\n[00:27.020]These wounds they will not heal\n[00:31.450]Fear is how I fall\n[00:36.200]Confusing what is real\n[00:40.810]There's something inside me that pulls beneath the surface\n[00:55.520]Consuming' confusing\n[00:59.770]This lack of self control I fear is never ending\n[01:04.760]Controlling' I can't seem\n[01:09.690]To find myself again\n[01:12.430]My walls are closing in\n[01:14.930]???Without a sense of confidence and I'm convinced\n[01:17.050]That it's just too much pressure to take???\n[01:18.920]I've felt this way before\n[01:22.040]So insecure\n[01:23.060]Crawling in my skin\n[01:30.950]These wounds they will not heal\n[01:35.590]Fear is how I fall\n[01:40.080]Confusing what is real\n[01:44.760]Discomfort' endlessly has pulled itself upon me\n[01:51.250]Distracting' reacting\n[01:54.680]Against my will I stand beside my own reflection\n[01:59.750]It's haunting how I can't seem...\n[02:05.130]To find myself again\n[02:08.060]My walls are closing in\n[02:10.320]???Without a sense of confidence and I'm convinced\n[02:12.940]That it's just too much pressure to take???\n[02:14.870]I've felt this way before\n[02:17.310]So insecure\n[02:18.430]Crawling in my skin\n[02:28.790]These wounds they will not heal\n[02:33.340]Fear is how I fall\n[02:37.980]Confusing what is real\n[02:42.310]Crawling in my skin\n[02:46.950]These wounds they will not heal\n[02:51.390]Fear is how I fall\n[02:56.010]Confusing' confusing what is real\n[03:03.000]There's something inside me that pulls beneath the surface\n[03:06.310]Consuming' confusing what is real\n[03:12.610]This lack of self control I fear is never ending\n[03:15.810]Controlling' confusing what is real\n"
        }, {
            src: "./jscss/yu.mp3",
            poster: "http://p3.music.126.net/N9V0Oo-sASE1dbQjFSKSWQ==/2524478697397402.jpg",
            name: "????????????????????????",
            artist: "???????????????",
            lyric: "[by:????????????Z]\n[00:00.00] ?????? : ???????????????\n[00:01.00] ?????? : ???????????????\n[00:35.07]????????? ?????? ???????????????\n[00:39.73]?????? ?????? ????????????\n[00:45.13]?????? ?????? ?????????????????????\n[00:50.50]\n[00:51.00]??????????????? ??????????????????\n[00:55.50]?????????????????? ?????????????????????\n[01:00.96]???????????? ??????????????????????????????\n[01:06.78]\n[01:07.44]????????? ????????? ?????????\n[01:09.71]??????????????????????????????\n[01:12.78]?????????????????? ?????????\n[01:15.10]????????? ??????????????????\n[01:18.16]??????????????????????????????????????????\n[01:22.94]\n[01:23.44]????????? ???????????? ??????\n[01:25.92]?????? ????????????????????????\n[01:28.96]????????????????????? ?????????\n[01:31.30]??????????????? ?????????????????????\n[01:34.33]?????????????????????????????? ??????????????? ??????\n[01:41.10]\n[01:45.19]?????? ?????? ???????????????\n[01:49.52]???????????? ?????????????????????\n[01:54.90]?????????????????? ????????????????????????\n[02:00.99]\n[02:01.35]????????? ????????? ?????????\n[02:03.65]??????????????????????????????\n[02:06.73]?????????????????? ?????????\n[02:09.06]???????????? ??????????????????\n[02:12.06]?????????????????????????????????????????? ??????\n[02:18.19]\n[02:31.74]\n[02:33.74]?????? ????????? ?????????????????????\n[02:39.09]?????? ????????? ????????????\n[02:44.49]?????? ??????????????????\n[02:48.55]\n[02:49.98]???nonsense???\n[03:20.32]\n[03:22.32]????????? ????????? ?????????\n[03:24.57]??????????????????????????????\n[03:27.60]?????????????????? ?????????\n[03:29.92]????????? ??????????????????\n[03:32.93]????????????????????????????????????????????????\n[03:37.84]\n[03:38.55]????????? ???????????? ??????\n[03:40.78]?????? ????????????????????????\n[03:43.77]????????????????????? ?????????\n[03:46.11]??????????????? ?????????????????????\n[03:49.20]?????????????????????????????????????????????\n[03:53.88]\n[03:54.64]??????\n[03:55.81]?????????\n[03:56.33]?????????\n[03:56.96]??????????????????\n[03:58.26]???????????????????????????\n[04:00.95]????????????????????????????????????\n[04:04.67]?????? ?????? ?????? ?????? ??????\n[04:12.14]\n",
            sublyric: "[by:Tsumugi-mio]\n[00:24.23]\n[00:35.07]?????? ?????? ?????????????????????\n[00:39.73]?????? ?????? ?????????????????????\n[00:45.13]?????? ?????? ???????????????\n[00:51.00]?????????????????? ??????????????????\n[00:55.50]?????????????????? ??????????????????\n[01:00.96]???????????????????????? ?????? ????????????\n[01:07.44]????????? ????????? ??????????????????????????????\n[01:09.71]??????????????????????????????\n[01:12.78]?????????\n[01:15.10]???????????????\n[01:18.16]?????????????????????\n[01:23.44]???????????????????????????\n[01:25.92]??????????????????\n[01:28.96]?????????\n[01:31.30]?????????????????????\n[01:34.33]??????????????????????????? ?????????????????????\n[01:45.19]?????? ?????? ?????????????????????\n[01:49.52]???????????? ????????????????????????\n[01:54.90]???????????? ?????????????????????????????????\n[02:01.35]????????? ????????? ??????????????????????????????\n[02:03.65]??????????????????????????????\n[02:06.73]?????????\n[02:09.06]?????????????????????????????????\n[02:12.06]????????????????????????????????????????????????????????????\n[02:33.74]??????????????? ???????????????\n[02:39.09]?????????????????????\n[02:44.49]?????????????????????\n[02:49.98]- - - - - - - -\n[03:22.32]????????? ????????? ??????????????????????????????\n[03:24.57]??????????????????????????????\n[03:27.60]?????????\n[03:29.92]??????????????????\n[03:32.93]?????????????????????\n[03:38.55]???????????????????????????\n[03:40.78]???????????? ???????????????\n[03:43.77]??????????????? ?????????\n[03:46.11]????????????????????? ????????????\n[03:49.20]???????????????????????????????????? ????????????\n[03:54.64]??????\n[03:55.81]?????????\n[03:56.33]?????????\n[03:56.96]???????????????\n[03:58.26]???????????????????????????\n[04:00.95]???????????????????????????\n[04:04.67]?????? ?????? ?????? ??????\n",
            album: "TEXT"
        }], n = new t.default({
            element: document.getElementById("app"),
            zoomOutKana: !0,
            playlist: e,
            autoplay: !0,
            volume: .75,
            dropDownMenuMode: "bottom"
        });
        document.getElementById("add163").addEventListener("click", function (e) {
            var o = prompt("????????????????????????ID:", "");
            o && (n.view.showPlaylist(), n.add163(o.trim()))
        }), document.getElementById("openplaylist").addEventListener("click", function (e) {
            n.view.showPlaylist()
        }), document.getElementById("closeplaylist").addEventListener("click", function (e) {
            n.view.showInfo()
        }), document.getElementById("remove").addEventListener("click", function (e) {
            n.view.showPlaylist(), setTimeout(function () {
                n.remove(n.playlist[n.playlist.length - 1])
            }, 600)
        }), window.demoPlayer = n, window.playlist = e
    }), o(29).install()
}, function (e, n, o) {
    "use strict";
    (function (e) {
        function t(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? e : n
        }

        function l(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
        }

        function i(e) {
            return e.map(function (e, n) {
                var o = Object.assign({}, e);
                return "string" == typeof e.lyric && e.lyric.replace(/\n+/gi, "\n").trim() && (o.lyric = p.decodeLyricStr(e.lyric)), "string" == typeof e.sublyric && e.sublyric.replace(/\n+/gi, "\n").trim() && (o.sublyric = p.decodeLyricStr(e.sublyric)), o
            })
        }

        var a = function () {
            function e(e, n) {
                for (var o = 0; o < n.length; o++) {
                    var t = n[o];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
                }
            }

            return function (n, o, t) {
                return o && e(n.prototype, o), t && e(n, t), n
            }
        }();
        Object.defineProperty(n, "__esModule", {value: !0}), o(9);
        var c = o(0), s = o(2), p = o(11), d = o(12), u = o(13), f = o(14), m = void 0;
        e.env.cplayer_noview || (m = o(15).default);
        var h = {playlist: [], point: 0, volume: 1, playmode: "listloop", autoplay: !1},
            k = {listloop: c.listloopPlaymode, singlecycle: d.singlecyclePlaymode, listrandom: u.listrandomPlaymode},
            g = function (n) {
                function o(n) {
                    t(this, o);
                    var l = r(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
                    return l.__paused = !0, l.playmodeName = "listloop", l.eventHandlers = {
                        handlePlay: function () {
                            l.__paused && l.pause()
                        }, handleVolumeChange: function () {
                            l.emit("volumechange", l.audioElement.volume)
                        }, handleTimeUpdate: function () {
                            var e = l.audioElement.duration, n = l.audioElement.currentTime;
                            l.emit("timeupdate", n, e)
                        }, handleCanPlayThrough: function () {
                            for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                            l.emit.apply(l, ["canplaythrough"].concat(n))
                        }, handlePause: function () {
                            l.__paused || l.audioElement.ended || l.play()
                        }, handleEnded: function () {
                            for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                            l.__paused || l.next(), l.emit.apply(l, ["ended"].concat(n))
                        }, handlePlayListChange: function () {
                            for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                            l.emit.apply(l, ["playlistchange"].concat(n))
                        }, handlePlaymodeChange: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.mode;
                            l.emit("playmodechange", e)
                        }
                    }, n = Object.assign({}, h, n), l.audioElement = new Audio, l.audioElement.loop = !1, l.audioElement.autoplay = !1, l.initializeEventEmitter(), l.playmode = new k[n.playmode](i(n.playlist), n.point), e.env.cplayer_noview || (l.view = new m(l, n)), l.openAudio(), l.eventHandlers.handlePlaymodeChange(), l.setVolume(n.volume), n.autoplay && l.playlist.length > 0 && l.play(), f.cplayerMediaSessionPlugin(l), l
                }

                return l(o, n), a(o, [{
                    key: "initializeEventEmitter", value: function () {
                        this.audioElement.addEventListener("volumechange", this.eventHandlers.handleVolumeChange), this.audioElement.addEventListener("timeupdate", this.eventHandlers.handleTimeUpdate), this.audioElement.addEventListener("canplaythrough", this.eventHandlers.handleCanPlayThrough), this.audioElement.addEventListener("pause", this.eventHandlers.handlePause), this.audioElement.addEventListener("play", this.eventHandlers.handlePlay), this.audioElement.addEventListener("ended", this.eventHandlers.handleEnded), this.audioElement.addEventListener("loadeddata", this.eventHandlers.handleLoadeddata)
                    }
                }, {
                    key: "isPlaying", value: function () {
                        return this.audioElement.currentTime > 0 && !this.audioElement.paused && !this.audioElement.ended && this.audioElement.readyState > 2
                    }
                }, {
                    key: "openAudio", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.nowplay;
                        e && (this.audioElement.src = this.nowplay.src, this.emit("openaudio", e))
                    }
                }, {
                    key: "toggleMode", value: function () {
                        switch (this.playmodeName) {
                            case"listloop":
                                this.setMode("singlecycle");
                                break;
                            case"singlecycle":
                                this.setMode("listrandom");
                                break;
                            case"listrandom":
                                this.setMode("listloop")
                        }
                    }
                }, {
                    key: "setMode", value: function (e) {
                        "string" == typeof e && this.playmodeName !== e && k[e] && (this.playmode = new k[e](this.playlist, this.nowplaypoint), this.playmodeName = e, this.eventHandlers.handlePlaymodeChange())
                    }
                }, {
                    key: "getMode", value: function () {
                        return this.mode
                    }
                }, {
                    key: "play", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        (!this.isPlaying() && this.playlist.length > 0 || e) && (this.audioElement.play(), (!1 === this.audioElement.paused || e) && (this.__paused = !1, this.emit("playstatechange", this.__paused), this.emit("play")))
                    }
                }, {
                    key: "pause", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        (this.isPlaying() && this.playlist.length > 0 || e) && (this.audioElement.pause(), !0 === this.audioElement.paused && (this.__paused = !0, this.emit("playstatechange", this.__paused), this.emit("pause")))
                    }
                }, {
                    key: "to", value: function (e) {
                        this.playmode.to(e), this.openAudio(), this.play()
                    }
                }, {
                    key: "next", value: function () {
                        this.playmode.next(), this.openAudio(), this.play()
                    }
                }, {
                    key: "prev", value: function () {
                        this.playmode.prev(), this.openAudio(), this.play()
                    }
                }, {
                    key: "togglePlayState", value: function () {
                        this.__paused ? this.play() : this.pause()
                    }
                }, {
                    key: "add", value: function (e) {
                        e = i([e])[0], this.playmode.addMusic(e), this.eventHandlers.handlePlayListChange(), 1 === this.playlist.length && this.to(0)
                    }
                }, {
                    key: "remove", value: function (e) {
                        var n = this.playmode.removeMusic(e);
                        this.eventHandlers.handlePlayListChange(), n && (this.openAudio(), this.__paused ? this.pause() : this.play())
                    }
                }, {
                    key: "setVolume", value: function (e) {
                        this.audioElement.volume = Math.max(0, Math.min(1, e))
                    }
                }, {
                    key: "destroy", value: function () {
                        var e = this;
                        this.audioElement.src = null, this.audioElement.removeEventListener("timeupdate", this.eventHandlers.handleTimeUpdate), this.removeAllListeners(), this.view && this.view.destroy(), Object.getOwnPropertyNames(this).forEach(function (n) {
                            return delete e[n]
                        }), this.__proto__ = Object
                    }
                }, {
                    key: "mode", set: function (e) {
                        this.setMode(e)
                    }, get: function () {
                        return this.playmodeName
                    }
                }, {
                    key: "volume", set: function (e) {
                        this.setVolume(e)
                    }
                }, {
                    key: "playlist", get: function () {
                        return this.playmode.playlist
                    }
                }, {
                    key: "nowplay", get: function () {
                        return this.playmode && this.playmode.now()
                    }
                }, {
                    key: "nowplaypoint", get: function () {
                        return this.playmode && this.playmode.nowpoint()
                    }
                }, {
                    key: "played", get: function () {
                        return !this.__paused
                    }
                }, {
                    key: "paused", get: function () {
                        return this.__paused
                    }
                }]), o
            }(s.EventEmitter);
        if (n.default = g, !e.env.cplayer_noview) {
            var b = function () {
                Array.prototype.forEach.call(document.querySelectorAll("template[cplayer]"), function (e) {
                    e.attributes.getNamedItem("loaded") || new g(Object.assign({
                        generateBeforeElement: !0,
                        deleteElementAfterGenerate: !0,
                        element: e
                    }, JSON.parse(e.innerHTML)))
                })
            };
            window.addEventListener("load", b)
        }
        window.cplayer = g
    }).call(n, o(8))
}, function (e, n) {
    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function t() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(e) {
        if (p === setTimeout) return setTimeout(e, 0);
        if ((p === o || !p) && setTimeout) return p = setTimeout, setTimeout(e, 0);
        try {
            return p(e, 0)
        } catch (n) {
            try {
                return p.call(null, e, 0)
            } catch (n) {
                return p.call(this, e, 0)
            }
        }
    }

    function l(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === t || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
        try {
            return d(e)
        } catch (n) {
            try {
                return d.call(null, e)
            } catch (n) {
                return d.call(this, e)
            }
        }
    }

    function i() {
        h && f && (h = !1, f.length ? m = f.concat(m) : k = -1, m.length && a())
    }

    function a() {
        if (!h) {
            var e = r(i);
            h = !0;
            for (var n = m.length; n;) {
                for (f = m, m = []; ++k < n;) f && f[k].run();
                k = -1, n = m.length
            }
            f = null, h = !1, l(e)
        }
    }

    function c(e, n) {
        this.fun = e, this.array = n
    }

    function s() {
    }

    var p, d, u = e.exports = {};
    !function () {
        try {
            p = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            p = o
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : t
        } catch (e) {
            d = t
        }
    }();
    var f, m = [], h = !1, k = -1;
    u.nextTick = function (e) {
        var n = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
        m.push(new c(e, n)), 1 !== m.length || h || r(a)
    }, c.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = s, u.addListener = s, u.once = s, u.off = s, u.removeListener = s, u.removeAllListeners = s, u.emit = s, u.prependListener = s, u.prependOnceListener = s, u.listeners = function (e) {
        return []
    }, u.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, u.cwd = function () {
        return "/"
    }, u.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, u.umask = function () {
        return 0
    }
}, function (e, n, o) {
    "use strict";
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function (e, n) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var o = Object(e), t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                if (null != r) for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (o[l] = r[l])
            }
            return o
        }, writable: !0, configurable: !0
    })
}, function (e, n, o) {
    "use strict";

    function t(e, n) {
        return e == n ? 0 != e || 0 != n || 1 / e == 1 / n : e != e && n != n
    }

    function r(e, n) {
        if (t(e, n)) return !0;
        if ("object" !== (void 0 === e ? "undefined" : l(e)) || null === e || "object" !== (void 0 === n ? "undefined" : l(n)) || null === n) return !1;
        var o = Object.keys(e), r = Object.keys(n);
        if (o.length !== r.length) return !1;
        for (var a = 0; a < o.length; a++) if (!i.call(n, o[a]) || !t(e[o[a]], n[o[a]])) return !1;
        return !0
    }

    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Object.defineProperty(n, "__esModule", {value: !0});
    var i = Object.prototype.hasOwnProperty;
    n.default = r
}, function (e, n, o) {
    "use strict";

    function t(e) {
        if (Array.isArray(e)) {
            for (var n = 0, o = Array(e.length); n < e.length; n++) o[n] = e[n];
            return o
        }
        return Array.from(e)
    }

    function r(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function l(e, n) {
        if ("string" != typeof e) return e;
        var o = [];
        return e.replace(/\n+/gi, "\n").trim().split("\n").forEach(function (e) {
            o.push.apply(o, t(i(e)))
        }), 0 != o.length ? new c(o, e) : void 0
    }

    function i(e) {
        var n = [], o = e.match(/\[\d+\:[\.\d]+\]/gi), t = /(?:\[\d+\:[\.\d]+\])*(.*)/gi.exec(e)[1].trim();
        return o && t && o.forEach(function (e) {
            var o = /\[(\d+)\:([\.\d]+)\]/gi.exec(e.trim()), r = 60 * parseInt(o[1]) * 1e3 + 1e3 * parseFloat(o[2]);
            n.push({time: r, word: t})
        }), n
    }

    var a = function () {
        function e(e, n) {
            for (var o = 0; o < n.length; o++) {
                var t = n[o];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
            }
        }

        return function (n, o, t) {
            return o && e(n.prototype, o), t && e(n, t), n
        }
    }();
    Object.defineProperty(n, "__esModule", {value: !0});
    var c = function () {
        function e(n, o) {
            r(this, e), this.items = [], this.items = n, this.raw = o
        }

        return a(e, [{
            key: "getLyric", value: function (e) {
                return this.items.reduce(function (n, o) {
                    return o.time < e && (!n || n.time < o.time) ? o : n
                }, void 0)
            }
        }, {
            key: "getNextLyric", value: function (e) {
                return this.items.reduce(function (n, o) {
                    return o.time > e && (!n || n.time > o.time) ? o : n
                }, void 0)
            }
        }, {
            key: "toString", value: function () {
                return this.raw
            }
        }]), e
    }();
    n.Lyric = c, n.decodeLyricStr = l, n.decodeLyricStrItem = i
}, function (e, n, o) {
    "use strict";

    function t(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    var r = function () {
        function e(e, n) {
            for (var o = 0; o < n.length; o++) {
                var t = n[o];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
            }
        }

        return function (n, o, t) {
            return o && e(n.prototype, o), t && e(n, t), n
        }
    }();
    Object.defineProperty(n, "__esModule", {value: !0});
    var l = o(0), i = function () {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            t(this, e), this.__playlist = [], this.__playlist = n, this.to(o)
        }

        return r(e, [{
            key: "next", value: function () {
                return this.__playlist[this.point]
            }
        }, {
            key: "prev", value: function () {
                return this.__playlist[this.point]
            }
        }, {
            key: "now", value: function () {
                return this.__playlist[this.point]
            }
        }, {
            key: "nowpoint", value: function () {
                return this.point
            }
        }, {
            key: "to", value: function (e) {
                this.point = Math.max(0, Math.min(e, this.__playlist.length - 1))
            }
        }, {
            key: "addMusic", value: function (e) {
                this.__playlist.push(e)
            }
        }, {
            key: "removeMusic", value: function (e) {
                var n = this, o = l.baseRemoveMusic(e, this.__playlist, this.point, function (e) {
                    return Math.max(0, Math.min(e, n.__playlist.length - 1))
                }), t = o.playlist, r = o.nowpoint, i = o.needupdate;
                return this.__playlist = t, this.point = r, i
            }
        }, {
            key: "playlist", get: function () {
                return this.__playlist
            }
        }]), e
    }();
    n.singlecyclePlaymode = i
}, function (e, n, o) {
    "use strict";

    function t(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    var r = function () {
        function e(e, n) {
            for (var o = 0; o < n.length; o++) {
                var t = n[o];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
            }
        }

        return function (n, o, t) {
            return o && e(n.prototype, o), t && e(n, t), n
        }
    }();
    Object.defineProperty(n, "__esModule", {value: !0});
    var l = o(0), i = function () {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            t(this, e), this.__playlist = [], this.point = 0, this.__playlist = n, this.to(o)
        }

        return r(e, [{
            key: "next", value: function () {
                return this.point = this.randomPoint(), this.__playlist[this.point]
            }
        }, {
            key: "prev", value: function () {
                return this.point = this.randomPoint(), this.__playlist[this.point]
            }
        }, {
            key: "now", value: function () {
                return this.__playlist[this.point]
            }
        }, {
            key: "nowpoint", value: function () {
                return this.point
            }
        }, {
            key: "to", value: function (e) {
                this.point = Math.max(0, Math.min(e, this.__playlist.length - 1))
            }
        }, {
            key: "addMusic", value: function (e) {
                this.__playlist.push(e)
            }
        }, {
            key: "randomPoint", value: function () {
                if (this.__playlist.length > 1) {
                    var e = Math.floor(this.__playlist.length * Math.random());
                    return e === this.point ? this.randomPoint() : e
                }
                return 0
            }
        }, {
            key: "removeMusic", value: function (e) {
                var n = this, o = l.baseRemoveMusic(e, this.__playlist, this.point, function (e) {
                    return n.randomPoint()
                }), t = o.playlist, r = o.nowpoint, i = o.needupdate;
                return this.__playlist = t, this.point = r, i
            }
        }, {
            key: "playlist", get: function () {
                return this.__playlist
            }
        }]), e
    }();
    n.listrandomPlaymode = i
}, function (e, n, o) {
    "use strict";

    function t(e) {
        "mediaSession" in navigator && (navigator.mediaSession.metadata = r(e.nowplay), navigator.mediaSession.setActionHandler("play", function () {
            return e.play()
        }), navigator.mediaSession.setActionHandler("pause", function () {
            return e.pause()
        }), navigator.mediaSession.setActionHandler("previoustrack", function () {
            return e.prev()
        }), navigator.mediaSession.setActionHandler("nexttrack", function () {
            return e.next()
        }), e.on("openaudio", function () {
            navigator.mediaSession.metadata = r(e.nowplay)
        }))
    }

    function r(e) {
        return new MediaMetadata({title: e.name, artist: e.artist, album: e.album, artwork: [{src: e.poster || l}]})
    }

    Object.defineProperty(n, "__esModule", {value: !0});
    var l = o(3);
    n.cplayerMediaSessionPlugin = t, n.mediaMetadata = r
}, function (e, n, o) {
    "use strict";

    function t(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" != typeof n && "function" != typeof n ? e : n
    }

    function l(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        e.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
    }

    function i(e) {
        for (var n = "", o = !1, t = 0; t < e.length; t++) {
            var r = e.charAt(t), l = /[???-??????-???]/.test(r);
            l && !o && (n += '<span class="cp-lyric-text-zoomout">', o = !0), !l && o && (n += "</span>", o = !1), n += r
        }
        return o && (n += "</span>"), n
    }

    function a(e, n) {
        return (arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? i(e) : e) + (n ? '<span class="cp-lyric-text-sub">' + n + "</span>" : "")
    }

    function c(e) {
        var n = document.createElement("style");
        return n.id = "cplayer-style", n.innerHTML = e, n
    }

    function s(e, n, o) {
        var t = e.createShadowRoot();
        return t.innerHTML = n, t.appendChild(c(o)), t.firstChild
    }

    function p(e, n, o) {
        var t = document.createElement("div");
        return t.innerHTML = n, e.parentNode.insertBefore(t, e), document.getElementById("cplayer-style") || document.body.appendChild(c(o)), t.firstChild
    }

    function d(e, n, o) {
        var t = document.createElement("div"), r = t.createShadowRoot();
        return r.innerHTML = n, r.appendChild(c(o)), e.parentNode.insertBefore(t, e), r.firstChild
    }

    function u(e, n, o) {
        return e.innerHTML = n, console.log(o), document.getElementById("cplayer-style") || document.body.appendChild(c(o)), e.firstChild
    }

    var f = function () {
        function e(e, n) {
            for (var o = 0; o < n.length; o++) {
                var t = n[o];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
            }
        }

        return function (n, o, t) {
            return o && e(n.prototype, o), t && e(n, t), n
        }
    }();
    Object.defineProperty(n, "__esModule", {value: !0});
    var m = o(16), h = o(2), k = o(3), g = o(17), b = o(18), y = o(19), v = {
        element: document.body,
        generateBeforeElement: !1,
        deleteElementAfterGenerate: !1,
        zoomOutKana: !1,
        showPlaylist: !1,
        showPlaylistButton: !0,
        dropDownMenuMode: "bottom",
        width: "",
        size: "12px",
        style: ""
    }, w = function (e) {
        function n(e, o) {
            t(this, n);
            var l = r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return l.elementLinks = m.default(l.getElementLinks), l.dropDownMenuShowInfo = !0, l.__OldVolume = 1, l.__OldLyric = "", l.__OldTotalTime = 0, l.handlePlaylistchange = function () {
                l.updatePlaylist()
            }, l.handleClickListButton = function () {
                l.toggleDropDownMenu()
            }, l.handleClickModeButton = function () {
                l.player.toggleMode()
            }, l.handleClickPlayList = function (e, n) {
                l.player.nowplaypoint !== e && l.player.to(e)
            }, l.handleClickPlayButton = function () {
                l.player.togglePlayState()
            }, l.handleClickVolumeButton = function () {
                l.toggleVolumeControllerKeepShow()
            }, l.handleOpenAudio = function (e) {
                l.setPoster(e.poster || k), l.setProgress(0), l.elementLinks.title.innerText = e.name, l.elementLinks.artist.innerText = e.artist || "", l.updateLyric(), l.updatePlaylist()
            }, l.handleModeChange = function (e) {
                l.setMode(e)
            }, l.handleVolumeChange = function (e) {
                l.setVolume(e)
            }, l.handleTimeUpdate = function (e, n) {
                l.setProgress(e / n), l.updateLyric(e)
            }, l.handleClickPrevButton = function () {
                l.player.prev()
            }, l.handleClickNextButton = function () {
                l.player.next()
            }, l.handlePlayStateChange = function (e) {
                l.setPlayIcon(e)
            }, l.handleMouseVolumeController = function (e) {
                if (l.removeVolumeControllerKeepShow(), 1 === e.buttons) {
                    var n = Math.max(0, Math.min(1, (e.clientX - l.elementLinks.volumeController.getBoundingClientRect().left) / l.elementLinks.volumeController.clientWidth));
                    l.player.setVolume(n), l.setVolume(n)
                }
            }, l.handleTouchVolumeController = function (e) {
                l.removeVolumeControllerKeepShow();
                var n = Math.max(0, Math.min(1, (e.targetTouches[0].clientX - l.elementLinks.volumeController.getBoundingClientRect().left) / l.elementLinks.volumeController.clientWidth));
                l.player.setVolume(n), l.setVolume(n)
            }, l.options = Object.assign({}, v, o), l.player = e, l.options.generateBeforeElement ? l.options.element.createShadowRoot ? l.rootElement = d(l.options.element, g, y + l.options.style) : l.rootElement = p(l.options.element, g, y + l.options.style) : l.options.element.createShadowRoot ? l.rootElement = s(l.options.element, g, y + l.options.style) : l.rootElement = u(l.options.element, g, y + l.options.style), o.deleteElementAfterGenerate && o.element.parentElement.removeChild(o.element), l.rootElement.style.width = l.options.width, l.rootElement.style.fontSize = l.options.size, l.elementLinks = l.getElementLinks(), l.injectEventListener(), l.setPlayIcon(l.player.paused), l.dropDownMenuShowInfo = !l.options.showPlaylist, l.dropDownMenuShowInfo ? l.showInfo() : l.showPlaylist(), l.options.showPlaylistButton ? l.elementLinks.button.list.style.display = "" : l.elementLinks.button.list.style.display = "none", l.elementLinks.dropDownMenu.classList.add("cp-drop-down-menu-" + l.options.dropDownMenuMode), l
        }

        return l(n, e), f(n, [{
            key: "getRootElement", value: function () {
                return this.rootElement
            }
        }, {
            key: "getPlayListLinks", value: function () {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.rootElement).querySelectorAll(".cp-playlist li")
            }
        }, {
            key: "getElementLinks", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.rootElement,
                    n = function (n) {
                        return e.getElementsByClassName(n)[0]
                    };
                return {
                    icon: {play: n("cp-play-icon"), mode: n("cp-mode-icon")},
                    button: {
                        prev: n("cp-prev-button"),
                        play: n("cp-play-button"),
                        next: n("cp-next-button"),
                        volume: n("cp-volume-icon"),
                        list: n("cp-list-button"),
                        mode: n("cp-mode-button")
                    },
                    progress: n("cp-progress-fill"),
                    poster: n("cp-poster"),
                    title: n("cp-audio-title"),
                    artist: n("cp-audio-artist"),
                    lyric: n("cp-lyric-text"),
                    lyricContainer: n("cp-lyric"),
                    volumeController: n("cp-volume-controller"),
                    volumeFill: n("cp-volume-fill"),
                    volumeControllerButton: n("cp-volume-controller-button"),
                    volumeControllerContainer: n("cp-volume-container"),
                    dropDownMenu: n("cp-drop-down-menu"),
                    playlist: n("cp-playlist"),
                    playlistItems: this.getPlayListLinks(e)
                }
            }
        }, {
            key: "setPlayIcon", value: function (e) {
                e ? this.elementLinks.icon.play.classList.add("cp-play-icon-paused") : this.elementLinks.icon.play.classList.remove("cp-play-icon-paused")
            }
        }, {
            key: "setProgress", value: function (e) {
                this.elementLinks.progress.style.transform = "translateX(-" + (100 - 100 * e) + "%)"
            }
        }, {
            key: "setPoster", value: function (e) {
                this.elementLinks.poster.style.backgroundImage = 'url("' + e + '")'
            }
        }, {
            key: "setVolume", value: function (e) {
                this.__OldVolume !== e && (this.elementLinks.volumeFill.style.width = 100 * e + "%", this.elementLinks.volumeControllerButton.style.right = 100 * (1 - e) + "%", this.__OldVolume = e)
            }
        }, {
            key: "setMode", value: function (e) {
                var n = document.createAttribute("data-mode");
                n.value = e, this.elementLinks.button.mode.attributes.setNamedItem(n)
            }
        }, {
            key: "showInfo", value: function () {
                var e = this.elementLinks.dropDownMenu;
                e.style.height = "", e.classList.remove("cp-drop-down-menu-playlist"), e.classList.add("cp-drop-down-menu-info"), this.dropDownMenuShowInfo = !0
            }
        }, {
            key: "showPlaylist", value: function () {
                var e = this.elementLinks.dropDownMenu;
                e.style.height = 25 * this.player.playlist.length + "px", e.classList.remove("cp-drop-down-menu-info"), e.classList.add("cp-drop-down-menu-playlist"), this.dropDownMenuShowInfo = !1
            }
        }, {
            key: "toggleDropDownMenu", value: function () {
                this.dropDownMenuShowInfo ? this.showPlaylist() : this.showInfo()
            }
        }, {
            key: "setVolumeControllerKeepShow", value: function () {
                this.elementLinks.volumeControllerContainer.classList.add("cp-volume-container-show")
            }
        }, {
            key: "toggleVolumeControllerKeepShow", value: function () {
                this.elementLinks.volumeControllerContainer.classList.toggle("cp-volume-container-show")
            }
        }, {
            key: "removeVolumeControllerKeepShow", value: function () {
                this.elementLinks.volumeControllerContainer.classList.remove("cp-volume-container-show")
            }
        }, {
            key: "setLyric", value: function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                if (this.__OldLyric !== e || this.__OldTotalTime !== o) {
                    if (this.elementLinks.lyric.innerHTML = e, this.elementLinks.lyric.style.transition = "", this.elementLinks.lyric.style.transform = "", 0 !== o) {
                        var t = this.elementLinks.lyric.clientWidth, r = this.elementLinks.lyricContainer.clientWidth;
                        if (t > r) {
                            var l = o - n, i = t - r, a = r / t * l, c = Math.min(.6 * a, l), s = l - a;
                            this.elementLinks.lyric.style.transition = "transform " + s + "ms linear " + c + "ms", this.elementLinks.lyric.style.transform = "translateX(-" + i + "px)"
                        }
                    }
                    this.__OldLyric = e, this.__OldTotalTime = o
                }
            }
        }, {
            key: "updatePlaylist", value: function () {
                var e = this, n = this.player.playlist.map(function (n, o) {
                    var t = document.createElement("li");
                    return t.innerHTML = "\n        " + (o === e.player.nowplaypoint ? b : '<span class="cp-play-icon"></span>') + "\n        <span>" + n.name + "</span><span class='cp-playlist-artist'>" + (n.artist ? " - " + n.artist : "") + "</span>\n      ", t
                });
                this.elementLinks.playlist.innerHTML = "", n.forEach(function (n) {
                    e.elementLinks.playlist.appendChild(n)
                }), this.elementLinks.playlistItems = this.getPlayListLinks(), this.injectPlayListEventListener(), this.dropDownMenuShowInfo || (this.elementLinks.dropDownMenu.style.height = 25 * this.player.playlist.length + "px")
            }
        }, {
            key: "injectPlayListEventListener", value: function () {
                var e = this;
                Array.prototype.forEach.call(this.elementLinks.playlistItems, function (n, o) {
                    n.addEventListener("click", function (n) {
                        e.handleClickPlayList(o, n)
                    })
                })
            }
        }, {
            key: "injectEventListener", value: function () {
                this.elementLinks.button.play.addEventListener("click", this.handleClickPlayButton), this.elementLinks.button.prev.addEventListener("click", this.handleClickPrevButton), this.elementLinks.button.next.addEventListener("click", this.handleClickNextButton), this.elementLinks.button.volume.addEventListener("click", this.handleClickVolumeButton), this.elementLinks.button.list.addEventListener("click", this.handleClickListButton), this.elementLinks.button.mode.addEventListener("click", this.handleClickModeButton), this.elementLinks.volumeController.addEventListener("mousemove", this.handleMouseVolumeController), this.elementLinks.volumeController.addEventListener("mousedown", this.handleMouseVolumeController), this.elementLinks.volumeController.addEventListener("touchmove", this.handleTouchVolumeController, {passive: !0}), this.player.addListener("playstatechange", this.handlePlayStateChange), this.player.addListener("timeupdate", this.handleTimeUpdate), this.player.addListener("openaudio", this.handleOpenAudio), this.player.addListener("volumechange", this.handleVolumeChange), this.player.addListener("playmodechange", this.handleModeChange), this.player.addListener("playlistchange", this.handlePlaylistchange), this.injectPlayListEventListener()
            }
        }, {
            key: "updateLyric", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (this.player.nowplay.lyric && "string" != typeof this.player.nowplay.lyric && this.player.played) {
                    var n = this.player.nowplay.lyric.getLyric(1e3 * e),
                        o = this.player.nowplay.lyric.getNextLyric(1e3 * e);
                    if (n) {
                        var t = void 0;
                        if (this.player.nowplay.sublyric && "string" != typeof this.player.nowplay.sublyric && (t = this.player.nowplay.sublyric.getLyric(1e3 * e)), o) {
                            var r = o.time - n.time, l = 1e3 * e - n.time;
                            this.setLyric(a(n.word, t ? t.word : void 0, this.options.zoomOutKana), l, r)
                        } else {
                            var i = this.player.audioElement.duration - n.time, c = 1e3 * e - n.time;
                            this.setLyric(a(n.word, t ? t.word : void 0, this.options.zoomOutKana), c, i)
                        }
                    } else this.setLyric(a(this.player.nowplay.name, this.player.nowplay.artist, !1), 1e3 * e, o.time)
                } else this.setLyric(a(this.player.nowplay.name, this.player.nowplay.artist, !1))
            }
        }, {
            key: "destroy", value: function () {
                this.rootElement.parentElement.removeChild(this.rootElement)
            }
        }]), n
    }(h.EventEmitter);
    n.default = w
}, function (e, n, o) {
    "use strict";

    function t(e) {
        return {}
    }

    Object.defineProperty(n, "__esModule", {value: !0}), n.default = t
}, function (e, n) {
    e.exports = '<c-player loaded> <div class=cp-mainbody> <div class=cp-poster> </div> <div class=cp-center-container> <div class=cp-controls> <a class=cp-prev-button> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink class=cp-prev-icon viewBox="0 0 1024 1024" version=1.1> <path d="M943.705 11.8c10.321 5.183 17.325 15.601 17.534 27.675l-0.004 938.318c-0.167 12.186-7.229 22.684-17.457 27.782-4.857 2.548-10.527 4.026-16.543 4.026a35.75 35.75 0 0 1-18.217-4.955l-716.617-469c-9.689-5.299-16.151-15.421-16.151-27.053 0-11.63 6.462-21.753 15.991-26.972L909.186 12.666c5.177-3.048 11.404-4.848 18.052-4.848a35.878 35.878 0 0 1 16.665 4.077z"/> <path d="M228.435 77.809v868.712c-3.889 42.573-39.416 75.664-82.673 75.664s-78.784-33.091-82.649-75.34l-0.024-869.036C65.9 34.259 101.911 0 145.924 0s80.024 34.259 82.822 77.564z"/> </svg> </a> <a class=cp-play-button> <span class="cp-play-icon cp-play-icon-paused"> <div class=cp-play-icon-left></div> <div class=cp-play-icon-right></div> <div class=cp-play-icon-triangle-1></div> <div class=cp-play-icon-triangle-2></div> </span> </a> <a class=cp-next-button> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink class=cp-next-icon viewBox="0 0 1024 1024" version=1.1> <path d="M943.705 11.8c10.321 5.183 17.325 15.601 17.534 27.675l-0.004 938.318c-0.167 12.186-7.229 22.684-17.457 27.782-4.857 2.548-10.527 4.026-16.543 4.026a35.75 35.75 0 0 1-18.217-4.955l-716.617-469c-9.689-5.299-16.151-15.421-16.151-27.053 0-11.63 6.462-21.753 15.991-26.972L909.186 12.666c5.177-3.048 11.404-4.848 18.052-4.848a35.878 35.878 0 0 1 16.665 4.077z"/> <path d="M228.435 77.809v868.712c-3.889 42.573-39.416 75.664-82.673 75.664s-78.784-33.091-82.649-75.34l-0.024-869.036C65.9 34.259 101.911 0 145.924 0s80.024 34.259 82.822 77.564z"/> </svg> </a> </div> <div class=cp-lyric> <span class=cp-lyric-text></span> </div> </div> <a class=cp-volume-button> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink class="cp-volume-icon cp-icon-dark" viewBox="0 200 1024 650" version=1.1> <path d="M607.869008 364.026176l-49.340512 49.340528c25.412064 25.160448 41.150352 60.055392 41.150352 98.637648 0 38.573568-15.738288 73.477184-41.150352 98.62896l49.340512 49.340512c37.836112-37.888176 61.244-90.195872 61.244-147.969488 0-57.782272-23.407888-110.081328-61.244-147.978176z"/> <path d="M807.937968 512c0-96.086912-39.050752-183.055296-102.134064-245.904368L656.95792 314.9416c50.398992 50.45104 81.563248 120.1108 81.563248 197.0584 0 76.938912-31.172944 146.598672-81.563248 197.0584l48.845984 48.845968C768.887216 695.055296 807.937968 608.086896 807.937968 512z"/> <path d="M946.780288 512.004336c0-134.434896-54.598176-256.107376-142.807248-344.082192l-49.088912 49.088896c75.65488 75.411952 122.470672 179.732384 122.470672 294.993296 0 115.252224-46.815792 219.581328-122.470672 294.984608l49.088912 49.088912c88.209072-87.966144 142.807248-209.647312 142.807248-344.07352z"/> <path d="M247.605111 659.304938 458.566804 854.551527 458.566804 169.448479 251.58222 364.704275 53.490893 364.704275 53.490893 659.304938Z"/> </svg> <div class=cp-volume-container> <div> <span class=cp-volume-controller> <span class=cp-volume-fill></span> <span class=cp-volume-controller-button></span> </span> </div> </div> </a> <a class=cp-list-button> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink class="cp-list-icon cp-icon-dark" viewBox="0 0 1024 1024" version=1.1> <path d="M168.57 820.6c0 14.34-9.56 23.89-23.89 23.89H96.89c-14.34 0-23.89-9.55-23.89-23.89v-47.79c0-14.34 9.56-23.89 23.89-23.89h47.79c14.34 0 23.89 9.56 23.89 23.89z m0-284.33c0 14.34-9.56 23.89-23.89 23.89H96.89c-14.34 0-23.89-9.56-23.89-23.89v-47.79c0-14.34 9.56-23.89 23.89-23.89h47.79c14.34 0 23.89 9.56 23.89 23.89z m0-286.72c0 14.34-9.56 23.89-23.89 23.89H96.89c-14.34 0-23.89-9.56-23.89-23.89v-47.79c0-14.34 9.56-23.89 23.89-23.89h47.79c14.34 0 23.89 9.56 23.89 23.89zM969 820.6c0 14.34-7.17 23.89-21.5 23.89H314.32c-14.34 0-23.89-9.56-23.89-23.89v-47.79c0-14.34 9.56-23.89 23.89-23.89H945.1c14.34 0 23.89 9.56 23.89 23.89z m0-284.33c0 14.34-7.17 23.89-21.5 23.89H314.32c-14.34 0-23.89-9.56-23.89-23.89v-47.79c0-14.34 9.56-23.89 23.89-23.89H945.1c14.34 0 23.89 9.56 23.89 23.89z m0-286.72c0 14.34-7.17 23.89-21.5 23.89H314.32c-14.34 0-23.89-9.56-23.89-23.89v-47.79c0-14.34 9.56-23.89 23.89-23.89H945.1c14.34 0 23.89 9.56 23.89 23.89z"/> </svg> </a> <a class=cp-mode-button data-mode=listloop> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink class="cp-loop-icon cp-icon-dark" viewBox="0 0 1024 1024" version=1.1> <path d="M157 624c17.3-4.8 27.4-22.7 22.6-40-5.4-19.4-8.1-39.5-8.1-59.9 0-123.1 100.1-223.2 223.2-223.2h302.4v57.6c0 18.5 12.9 25.6 28.6 15.9l138.6-85.8c15.7-9.7 15.9-25.9 0.3-35.9l-139.2-89.9c-15.5-10-28.2-3.1-28.2 15.4V236H394.7c-77 0-149.3 30-203.8 84.4-54.4 54.4-84.4 126.8-84.4 203.8 0 26.2 3.5 52.2 10.5 77.3 4 14.4 17.1 23.8 31.3 23.8 2.9-0.1 5.8-0.4 8.7-1.3z m748.7-202.1c-4-14.4-17.1-23.8-31.3-23.8-2.9 0-5.8 0.4-8.7 1.2-17.3 4.8-27.4 22.7-22.6 40 5.4 19.4 8.1 39.5 8.1 59.9 0 123.1-100.1 223.2-223.2 223.2H325.5v-57.6c0-18.5-12.9-25.6-28.6-15.9l-138.6 85.8c-15.7 9.7-15.9 25.9-0.3 35.9l139.2 89.9c15.5 10 28.2 3.1 28.2-15.4v-57.9h302.4c77 0 149.3-30 203.8-84.4C886 648.4 916 576 916 499c0.1-26-3.4-52-10.3-77.1z"/> </svg> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink class="cp-single-icon cp-icon-dark" viewBox="0 0 1024 1024" version=1.1> <path d="M102.5 653.9c17.3-4.8 27.4-22.7 22.6-40-5.4-19.4-8.1-43.4-8.1-63.8C117 427 217.1 323 340.2 323h132.3c1.4-20 5.4-40 11.7-60h-144c-77 0-149.4 31.4-203.8 85.8C82 403.2 52 476.3 52 553.3c0 26.2 3.5 52.6 10.5 77.6 4 14.4 17.1 24 31.3 24 2.9 0 5.8-0.2 8.7-1z m471 109.1H272v-68.3c0-18.5-13.3-25.6-29-15.9l-138.8 85.8c-15.7 9.7-16 25.9-0.5 35.9l139.7 89.9c15.5 10 28.7 3.1 28.7-15.4v-52h301.5c77 0 149.4-32.9 203.8-87.3 34.7-34.7 59.5-78.2 72.9-124-24 9-49.6 19.4-76.2 21.5-36.5 74-112.7 129.8-200.6 129.8zM752 127.9c-121.5 0-220 98.5-220 220s98.5 220 220 220 220-98.5 220-220-98.5-220-220-220zM792 463h-40V298.7c-20 14-36.2 24.5-60 31.3v-41.8c11.5-2.9 23.8-10.4 36.7-17.6 13-7.9 23.8-7.7 32.4-27.7H792V463z"/> </svg> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink class="cp-random-icon cp-icon-dark" viewBox="0 0 1024 1024" version=1.1> <path d="M112 405.2h218.2c7.1 0 21 5.8 26 10.8l38 38.6c13.6 13.8 35.7 13.9 49.5 0.4 13.8-13.6 13.9-35.7 0.4-49.5l-38-38.6c-18.1-18.4-50-31.7-75.8-31.7H112c-19.3 0-35 15.7-35 35 0 19.4 15.7 35 35 35z m623.2 0h62.4v42.6c0 10.9 7.5 15 16.7 8.8l125.8-83.9c9.3-6.2 9.2-16.2 0-22.4l-125.8-83.9c-9.3-6.2-16.7-2.2-16.7 8.8v60h-62.4c-53.5 0-123.5 29.3-161 67.4L393.9 585.7c-24.3 24.7-76.4 46.5-111.1 46.5H112c-19.3 0-35 15.7-35 35s15.7 35 35 35h170.7c53.5 0 123.5-29.3 161-67.4L624 451.7c24.4-24.7 76.4-46.5 111.2-46.5z m79.1 161.2c-9.3-6.2-16.7-2.2-16.7 8.8v57H681.9c-6.9 0-20.2-5.6-25-10.4l-37.3-37.9c-13.6-13.8-35.7-13.9-49.5-0.4-13.8 13.6-13.9 35.7-0.4 49.5l37.3 37.9c18 18.2 49.3 31.3 74.9 31.3h115.6v45.6c0 10.9 7.5 15 16.7 8.8L940 672.7c9.3-6.2 9.2-16.2 0-22.4l-125.7-83.9z"/> </svg> </a> <div class=cp-progress> <div class=cp-progress-fill></div> </div> </div> <div class="cp-drop-down-menu cp-drop-down-menu-info"> <div class=cp-audio-info> <span class=cp-audio-title></span> - <span class=cp-audio-artist></span> </div> <ul class=cp-playlist> </ul> </div> </c-player>'
}, function (e, n) {
    e.exports = '<svg class=cp-play-icon viewBox="0 0 1024 1024" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=200 height=200> <path d="M64.279417 58.009844c0-21.327148 10.62092-39.540533 29.218194-50.118799a56.858178 56.858178 0 0 1 58.265769 0.255926l779.336659 453.969682c18.341348 10.706229 28.748996 28.748996 28.748996 49.905527 0 21.113877-10.407648 39.156645-28.748996 49.820219L151.76338 1015.854735a56.943486 56.943486 0 0 1-58.265769 0.255926 56.303672 56.303672 0 0 1-29.218194-50.161453V58.009844z"> </path> </svg>'
}, function (e, n, o) {
    n = e.exports = o(1)(void 0), n.push([e.i, "@-webkit-keyframes miss-pointer-event {\n  from {\n    pointer-events: none; }\n  to {\n    pointer-events: auto; } }\n\n@keyframes miss-pointer-event {\n  from {\n    pointer-events: none; }\n  to {\n    pointer-events: auto; } }\n\nc-player {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  font-size: 12px;\n  width: 300px; }\n  c-player:hover .cp-progress {\n    opacity: 1;\n    -webkit-transform: scaleY(1) translateY(0%);\n            transform: scaleY(1) translateY(0%); }\n  c-player .cp-mainbody {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    min-height: 4.16667em;\n    min-width: 25em;\n    height: 4.16667em;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    background-color: #fff;\n    position: relative;\n    z-index: 1;\n    -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n            box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px; }\n    c-player .cp-mainbody > * {\n      margin-right: 0.58333em; }\n    c-player .cp-mainbody:hover + .cp-drop-down-menu.cp-drop-down-menu-info {\n      height: 2.08333em; }\n  c-player .cp-drop-down-menu {\n    margin: 0em 0.16667em 0;\n    display: block;\n    text-align: center;\n    font-size: 1em;\n    line-height: 2.08333em;\n    background-color: rgba(255, 255, 255, 0.6);\n    position: relative;\n    z-index: 0;\n    height: 0em;\n    overflow: hidden;\n    -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n            box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n    -webkit-transition: height 0.25s ease 0.1s, -webkit-transform 0.25s ease 0.1s;\n    transition: height 0.25s ease 0.1s, -webkit-transform 0.25s ease 0.1s;\n    transition: transform 0.25s ease 0.1s, height 0.25s ease 0.1s;\n    transition: transform 0.25s ease 0.1s, height 0.25s ease 0.1s, -webkit-transform 0.25s ease 0.1s; }\n    c-player .cp-drop-down-menu span.cp-audio-title {\n      max-width: 14.16667em;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    c-player .cp-drop-down-menu span.cp-audio-artist {\n      opacity: 0.6;\n      max-width: 8.33333em;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    c-player .cp-drop-down-menu.cp-drop-down-menu-top {\n      -webkit-box-ordinal-group: 0;\n          -ms-flex-order: -1;\n              order: -1; }\n    c-player .cp-drop-down-menu.cp-drop-down-menu-none {\n      display: none; }\n    c-player .cp-drop-down-menu.cp-drop-down-menu-bottom {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n    c-player .cp-drop-down-menu.cp-drop-down-menu-info .cp-playlist {\n      display: none; }\n    c-player .cp-drop-down-menu.cp-drop-down-menu-info:hover {\n      height: 2.08333em; }\n    c-player .cp-drop-down-menu.cp-drop-down-menu-playlist .cp-audio-info {\n      display: none; }\n    c-player .cp-drop-down-menu.cp-drop-down-menu-playlist {\n      height: auto; }\n  c-player .cp-playlist {\n    margin: 0em;\n    padding: 0em;\n    list-style: none;\n    text-align: left; }\n    c-player .cp-playlist li:nth-of-type(even) {\n      background: rgba(255, 255, 255, 0.2); }\n    c-player .cp-playlist li {\n      padding: 0em 0.83333em;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      cursor: pointer; }\n      c-player .cp-playlist li .cp-play-icon {\n        display: inline-block;\n        width: 1em;\n        height: 1em;\n        vertical-align: text-top;\n        margin: 0px 0.41667em 0 0;\n        fill: rgba(183, 28, 28, 0.8); }\n  c-player .cp-playlist-artist {\n    color: #000;\n    opacity: 0.46; }\n  c-player .cp-center-container {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    position: relative;\n    height: 100%; }\n    c-player .cp-center-container .cp-controls {\n      opacity: 0; }\n    c-player .cp-center-container:hover .cp-controls {\n      opacity: 1;\n      -webkit-animation: miss-pointer-event 100ms;\n              animation: miss-pointer-event 100ms; }\n    c-player .cp-center-container:hover .cp-lyric {\n      opacity: 0; }\n  c-player .cp-controls {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    -webkit-transition: opacity 0.25s ease;\n    transition: opacity 0.25s ease; }\n    c-player .cp-controls > * {\n      margin-right: 1.25em; }\n  c-player .cp-lyric {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: absolute;\n    width: calc(100% - 1.66667em);\n    height: calc(100% - 0.83333em);\n    overflow: hidden;\n    margin: 0.41667em 0.83333em;\n    font-size: 1.16667em;\n    -webkit-transition: opacity 0.25s ease;\n    transition: opacity 0.25s ease; }\n  c-player .cp-lyric-text {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    white-space: nowrap;\n    text-align: center;\n    color: #424242; }\n    c-player .cp-lyric-text .cp-lyric-text-sub {\n      display: block;\n      color: #757575;\n      font-size: 0.85714em; }\n    c-player .cp-lyric-text .cp-lyric-text-zoomout {\n      font-size: 1em;\n      -webkit-transform: translateY(0.08333em);\n              transform: translateY(0.08333em);\n      display: inline-block;\n      margin: 0px 0.14286em; }\n  c-player .cp-progress {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n    margin: 0em;\n    opacity: 0.8;\n    overflow: hidden;\n    -webkit-transform: scaleY(0) translateY(-100%);\n            transform: scaleY(0) translateY(-100%);\n    background: #fff;\n    -webkit-transition: opacity 0.3s ease, -webkit-transform 0.3s ease;\n    transition: opacity 0.3s ease, -webkit-transform 0.3s ease;\n    transition: opacity 0.3s ease, transform 0.3s ease;\n    transition: opacity 0.3s ease, transform 0.3s ease, -webkit-transform 0.3s ease; }\n    c-player .cp-progress .cp-progress-fill {\n      display: block;\n      height: 0.16667em;\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%);\n      background: #F44336; }\n  c-player .cp-poster {\n    width: 4.16667em;\n    height: 4.16667em;\n    background-repeat: repeat;\n    background-position: 50% 50%;\n    background-size: cover;\n    background-origin: padding-box;\n    background-attachment: scroll;\n    border-right: 0.08333em solid #eee;\n    background-image: url(\"http://p1.music.126.net/xXXsTafARePvyQUDb6q9HQ==/3386495814644488.jpg?param=200y200\"); }\n  c-player .cp-play-icon {\n    width: 1.04167em;\n    height: 1.04167em;\n    display: block;\n    overflow: hidden;\n    position: relative; }\n    c-player .cp-play-icon .cp-play-icon-left {\n      height: 100%;\n      float: left;\n      background-color: #F44336;\n      width: 36%;\n      -webkit-transition: width 0.25s ease;\n      transition: width 0.25s ease;\n      overflow: hidden; }\n    c-player .cp-play-icon .cp-play-icon-right {\n      height: 100%;\n      float: right;\n      background-color: #F44336;\n      width: 36%;\n      -webkit-transition: width 0.25s ease;\n      transition: width 0.25s ease;\n      overflow: hidden; }\n    c-player .cp-play-icon .cp-play-icon-triangle-1 {\n      -webkit-transform: translate(0, -100%);\n              transform: translate(0, -100%); }\n    c-player .cp-play-icon .cp-play-icon-triangle-2 {\n      -webkit-transform: translate(0, 100%);\n              transform: translate(0, 100%); }\n    c-player .cp-play-icon .cp-play-icon-triangle-1,\n    c-player .cp-play-icon .cp-play-icon-triangle-2 {\n      position: absolute;\n      top: 0;\n      right: 0;\n      background-color: transparent;\n      width: 0;\n      height: 0;\n      border-right: 1.04167em solid #fff;\n      border-top: 0.52083em solid transparent;\n      border-bottom: 0.52083em solid transparent;\n      -webkit-transition: -webkit-transform 0.25s ease;\n      transition: -webkit-transform 0.25s ease;\n      transition: transform 0.25s ease;\n      transition: transform 0.25s ease, -webkit-transform 0.25s ease; }\n    c-player .cp-play-icon.cp-play-icon-paused .cp-play-icon-left {\n      width: 50%; }\n    c-player .cp-play-icon.cp-play-icon-paused .cp-play-icon-right {\n      width: 50%; }\n    c-player .cp-play-icon.cp-play-icon-paused .cp-play-icon-triangle-1 {\n      -webkit-transform: translate(0, -50%);\n              transform: translate(0, -50%); }\n    c-player .cp-play-icon.cp-play-icon-paused .cp-play-icon-triangle-2 {\n      -webkit-transform: translate(0, 50%);\n              transform: translate(0, 50%); }\n    c-player .cp-play-icon.cp-play-icon-hover .cp-play-icon-left, c-player .cp-play-button:hover .cp-play-icon-left {\n      background-color: #B71C1C; }\n    c-player .cp-play-icon.cp-play-icon-hover .cp-play-icon-right, c-player .cp-play-button:hover .cp-play-icon-right {\n      background-color: #B71C1C; }\n  c-player .cp-play-button,\n  c-player .cp-volume-button,\n  c-player .cp-prev-button,\n  c-player .cp-list-button,\n  c-player .cp-mode-button,\n  c-player .cp-next-button {\n    display: inline-block;\n    width: 1.04167em;\n    height: 1.04167em;\n    cursor: pointer; }\n  c-player .cp-volume-button {\n    width: 1.66667em;\n    position: relative; }\n  c-player .cp-list-button {\n    width: 1.45833em;\n    height: 1.45833em; }\n  c-player .cp-mode-button {\n    width: 1.58333em;\n    height: 1.58333em; }\n  c-player .cp-play-button {\n    height: 2.5em;\n    width: 2.5em;\n    border: #F44336 solid 1px;\n    border-radius: 50%; }\n    c-player .cp-play-button .cp-play-icon.cp-play-icon-paused {\n      margin: 0.66667em; }\n    c-player .cp-play-button .cp-play-icon {\n      margin: 0.66667em 0.625em; }\n    c-player .cp-play-button:hover {\n      border-color: #B71C1C; }\n  c-player .cp-icon, c-player .cp-prev-icon, c-player .cp-next-icon, c-player .cp-volume-icon, c-player .cp-random-icon, c-player .cp-single-icon, c-player .cp-loop-icon, c-player .cp-list-icon {\n    height: 1.04167em;\n    width: 1.04167em; }\n    c-player .cp-icon path, c-player .cp-prev-icon path, c-player .cp-next-icon path, c-player .cp-volume-icon path, c-player .cp-random-icon path, c-player .cp-single-icon path, c-player .cp-loop-icon path, c-player .cp-list-icon path {\n      fill: #F44336; }\n    c-player .cp-icon:hover path, c-player .cp-prev-icon:hover path, c-player .cp-next-icon:hover path, c-player .cp-volume-icon:hover path, c-player .cp-random-icon:hover path, c-player .cp-single-icon:hover path, c-player .cp-loop-icon:hover path, c-player .cp-list-icon:hover path {\n      fill: #B71C1C; }\n    c-player .cp-icon.cp-icon-dark path, c-player .cp-icon-dark.cp-prev-icon path, c-player .cp-icon-dark.cp-next-icon path, c-player .cp-icon-dark.cp-volume-icon path, c-player .cp-icon-dark.cp-random-icon path, c-player .cp-icon-dark.cp-single-icon path, c-player .cp-icon-dark.cp-loop-icon path, c-player .cp-icon-dark.cp-list-icon path {\n      fill: #757575; }\n    c-player .cp-icon.cp-icon-dark:hover path, c-player .cp-icon-dark.cp-prev-icon:hover path, c-player .cp-icon-dark.cp-next-icon:hover path, c-player .cp-icon-dark.cp-volume-icon:hover path, c-player .cp-icon-dark.cp-random-icon:hover path, c-player .cp-icon-dark.cp-single-icon:hover path, c-player .cp-icon-dark.cp-loop-icon:hover path, c-player .cp-icon-dark.cp-list-icon:hover path {\n      fill: #616161; }\n  c-player .cp-next-icon {\n    -webkit-transform: rotateZ(180deg);\n            transform: rotateZ(180deg); }\n  c-player .cp-volume-icon {\n    width: 1.66667em; }\n  c-player .cp-random-icon,\n  c-player .cp-single-icon,\n  c-player .cp-loop-icon {\n    width: 1.58333em;\n    height: 1.58333em;\n    display: none; }\n  c-player .cp-mode-button[data-mode=listloop] .cp-loop-icon,\n  c-player .cp-mode-button[data-mode=singlecycle] .cp-single-icon,\n  c-player .cp-mode-button[data-mode=listrandom] .cp-random-icon {\n    display: block; }\n  c-player .cp-list-icon {\n    width: 1.45833em;\n    height: 1.45833em; }\n  c-player .cp-volume-container {\n    position: absolute;\n    left: 50%;\n    top: -7px;\n    height: 2.08333em;\n    width: 10em;\n    -webkit-transform: translateX(-50%) translateY(-120%);\n            transform: translateX(-50%) translateY(-120%);\n    z-index: 1;\n    visibility: hidden;\n    text-align: left;\n    -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n            box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px; }\n    c-player .cp-volume-container.cp-volume-container-show {\n      visibility: visible; }\n    c-player .cp-volume-container:hover {\n      visibility: visible; }\n    c-player .cp-volume-container:before {\n      content: '';\n      width: 0em;\n      height: 0em;\n      display: inline-block;\n      border-top: 0.83333em solid #fff;\n      border-left: 0.83333em solid transparent;\n      border-right: 0.83333em solid transparent;\n      position: absolute;\n      bottom: 0em;\n      left: 50%;\n      -webkit-transform: translate(-50%, 100%);\n              transform: translate(-50%, 100%); }\n    c-player .cp-volume-container:after {\n      content: '';\n      width: 1.17851em;\n      height: 1.17851em;\n      display: inline-block;\n      position: absolute;\n      bottom: 0em;\n      left: 50%;\n      -webkit-transform: translate(-50%, 50%) rotate(45deg);\n              transform: translate(-50%, 50%) rotate(45deg);\n      -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n              box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px; }\n    c-player .cp-volume-container > div {\n      width: 100%;\n      height: 100%;\n      background: #fff;\n      position: relative;\n      z-index: 1;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n  c-player .cp-volume-controller {\n    display: inline-block;\n    height: 0.83333em;\n    width: 8.33333em;\n    border-radius: 4.16667em;\n    background: #BDBDBD;\n    line-height: 0.83333em;\n    position: relative; }\n    c-player .cp-volume-controller .cp-volume-fill {\n      display: inline-block;\n      height: 100%;\n      width: 100%;\n      border-radius: 4.16667em;\n      background: #616161; }\n    c-player .cp-volume-controller .cp-volume-controller-button {\n      height: 1.25em;\n      width: 1.25em;\n      position: absolute;\n      right: 0em;\n      top: -0.20833em;\n      display: inline-block;\n      border-radius: 50%;\n      border: 0.16667em solid #fff;\n      background: #757575;\n      -webkit-transform: translateX(50%);\n              transform: translateX(50%);\n      -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n              box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px; }\n      c-player .cp-volume-controller .cp-volume-controller-button:hover {\n        background: #616161; }\n  c-player svg {\n    vertical-align: top; }\n  c-player *,\n  c-player *::before,\n  c-player *::after {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n", ""])
}, function (e, n, o) {
    var t = o(21);
    "string" == typeof t && (t = [[e.i, t, ""]]);
    var r = {};
    r.transform = void 0;
    o(4)(t, r);
    t.locals && (e.exports = t.locals)
}, function (e, n, o) {
    n = e.exports = o(1)(void 0), n.push([e.i, "body{margin:0;font-family:Roboto,sans-serif;-webkit-font-smoothing:antialiased}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}.neko-container{padding-right:8px;padding-left:8px;margin-right:auto;margin-left:auto;max-width:980px;position:relative}@media (min-width:576px){.neko-container{padding-right:8px;padding-left:8px}}@media (min-width:768px){.neko-container{padding-right:8px;padding-left:8px}}@media (min-width:992px){.neko-container{padding-right:8px;padding-left:8px}}@media (min-width:1200px){.neko-container{padding-right:8px;padding-left:8px}}.neko-container-fluid{padding-right:8px;padding-left:8px;position:relative}@media (min-width:576px){.neko-container-fluid{padding-right:8px;padding-left:8px}}@media (min-width:768px){.neko-container-fluid{padding-right:8px;padding-left:8px}}@media (min-width:992px){.neko-container-fluid{padding-right:8px;padding-left:8px}}@media (min-width:1200px){.neko-container-fluid{padding-right:8px;padding-left:8px}}.neko-row{margin-right:-8px;margin-left:-8px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative}@media (min-width:576px){.neko-row{margin-right:-8px;margin-left:-8px}}@media (min-width:768px){.neko-row{margin-right:-8px;margin-left:-8px}}@media (min-width:992px){.neko-row{margin-right:-8px;margin-left:-8px}}@media (min-width:1200px){.neko-row{margin-right:-8px;margin-left:-8px}}.neko-no-gutters{margin-right:0;margin-left:0}.neko-no-gutters>.col,.neko-no-gutters>[class*=col-]{padding-right:0;padding-left:0}.neko-col,.neko-col-1,.neko-col-2,.neko-col-3,.neko-col-4,.neko-col-5,.neko-col-6,.neko-col-7,.neko-col-8,.neko-col-9,.neko-col-10,.neko-col-11,.neko-col-12,.neko-col-auto,.neko-col-lg,.neko-col-lg-1,.neko-col-lg-2,.neko-col-lg-3,.neko-col-lg-4,.neko-col-lg-5,.neko-col-lg-6,.neko-col-lg-7,.neko-col-lg-8,.neko-col-lg-9,.neko-col-lg-10,.neko-col-lg-11,.neko-col-lg-12,.neko-col-lg-auto,.neko-col-md,.neko-col-md-1,.neko-col-md-2,.neko-col-md-3,.neko-col-md-4,.neko-col-md-5,.neko-col-md-6,.neko-col-md-7,.neko-col-md-8,.neko-col-md-9,.neko-col-md-10,.neko-col-md-11,.neko-col-md-12,.neko-col-md-auto,.neko-col-sm,.neko-col-sm-1,.neko-col-sm-2,.neko-col-sm-3,.neko-col-sm-4,.neko-col-sm-5,.neko-col-sm-6,.neko-col-sm-7,.neko-col-sm-8,.neko-col-sm-9,.neko-col-sm-10,.neko-col-sm-11,.neko-col-sm-12,.neko-col-sm-auto,.neko-col-xl,.neko-col-xl-1,.neko-col-xl-2,.neko-col-xl-3,.neko-col-xl-4,.neko-col-xl-5,.neko-col-xl-6,.neko-col-xl-7,.neko-col-xl-8,.neko-col-xl-9,.neko-col-xl-10,.neko-col-xl-11,.neko-col-xl-12,.neko-col-xl-auto{position:relative;width:100%;min-height:1px;padding-right:8px;padding-left:8px}@media (min-width:576px){.neko-col,.neko-col-1,.neko-col-2,.neko-col-3,.neko-col-4,.neko-col-5,.neko-col-6,.neko-col-7,.neko-col-8,.neko-col-9,.neko-col-10,.neko-col-11,.neko-col-12,.neko-col-auto,.neko-col-lg,.neko-col-lg-1,.neko-col-lg-2,.neko-col-lg-3,.neko-col-lg-4,.neko-col-lg-5,.neko-col-lg-6,.neko-col-lg-7,.neko-col-lg-8,.neko-col-lg-9,.neko-col-lg-10,.neko-col-lg-11,.neko-col-lg-12,.neko-col-lg-auto,.neko-col-md,.neko-col-md-1,.neko-col-md-2,.neko-col-md-3,.neko-col-md-4,.neko-col-md-5,.neko-col-md-6,.neko-col-md-7,.neko-col-md-8,.neko-col-md-9,.neko-col-md-10,.neko-col-md-11,.neko-col-md-12,.neko-col-md-auto,.neko-col-sm,.neko-col-sm-1,.neko-col-sm-2,.neko-col-sm-3,.neko-col-sm-4,.neko-col-sm-5,.neko-col-sm-6,.neko-col-sm-7,.neko-col-sm-8,.neko-col-sm-9,.neko-col-sm-10,.neko-col-sm-11,.neko-col-sm-12,.neko-col-sm-auto,.neko-col-xl,.neko-col-xl-1,.neko-col-xl-2,.neko-col-xl-3,.neko-col-xl-4,.neko-col-xl-5,.neko-col-xl-6,.neko-col-xl-7,.neko-col-xl-8,.neko-col-xl-9,.neko-col-xl-10,.neko-col-xl-11,.neko-col-xl-12,.neko-col-xl-auto{padding-right:8px;padding-left:8px}}@media (min-width:768px){.neko-col,.neko-col-1,.neko-col-2,.neko-col-3,.neko-col-4,.neko-col-5,.neko-col-6,.neko-col-7,.neko-col-8,.neko-col-9,.neko-col-10,.neko-col-11,.neko-col-12,.neko-col-auto,.neko-col-lg,.neko-col-lg-1,.neko-col-lg-2,.neko-col-lg-3,.neko-col-lg-4,.neko-col-lg-5,.neko-col-lg-6,.neko-col-lg-7,.neko-col-lg-8,.neko-col-lg-9,.neko-col-lg-10,.neko-col-lg-11,.neko-col-lg-12,.neko-col-lg-auto,.neko-col-md,.neko-col-md-1,.neko-col-md-2,.neko-col-md-3,.neko-col-md-4,.neko-col-md-5,.neko-col-md-6,.neko-col-md-7,.neko-col-md-8,.neko-col-md-9,.neko-col-md-10,.neko-col-md-11,.neko-col-md-12,.neko-col-md-auto,.neko-col-sm,.neko-col-sm-1,.neko-col-sm-2,.neko-col-sm-3,.neko-col-sm-4,.neko-col-sm-5,.neko-col-sm-6,.neko-col-sm-7,.neko-col-sm-8,.neko-col-sm-9,.neko-col-sm-10,.neko-col-sm-11,.neko-col-sm-12,.neko-col-sm-auto,.neko-col-xl,.neko-col-xl-1,.neko-col-xl-2,.neko-col-xl-3,.neko-col-xl-4,.neko-col-xl-5,.neko-col-xl-6,.neko-col-xl-7,.neko-col-xl-8,.neko-col-xl-9,.neko-col-xl-10,.neko-col-xl-11,.neko-col-xl-12,.neko-col-xl-auto{padding-right:8px;padding-left:8px}}@media (min-width:992px){.neko-col,.neko-col-1,.neko-col-2,.neko-col-3,.neko-col-4,.neko-col-5,.neko-col-6,.neko-col-7,.neko-col-8,.neko-col-9,.neko-col-10,.neko-col-11,.neko-col-12,.neko-col-auto,.neko-col-lg,.neko-col-lg-1,.neko-col-lg-2,.neko-col-lg-3,.neko-col-lg-4,.neko-col-lg-5,.neko-col-lg-6,.neko-col-lg-7,.neko-col-lg-8,.neko-col-lg-9,.neko-col-lg-10,.neko-col-lg-11,.neko-col-lg-12,.neko-col-lg-auto,.neko-col-md,.neko-col-md-1,.neko-col-md-2,.neko-col-md-3,.neko-col-md-4,.neko-col-md-5,.neko-col-md-6,.neko-col-md-7,.neko-col-md-8,.neko-col-md-9,.neko-col-md-10,.neko-col-md-11,.neko-col-md-12,.neko-col-md-auto,.neko-col-sm,.neko-col-sm-1,.neko-col-sm-2,.neko-col-sm-3,.neko-col-sm-4,.neko-col-sm-5,.neko-col-sm-6,.neko-col-sm-7,.neko-col-sm-8,.neko-col-sm-9,.neko-col-sm-10,.neko-col-sm-11,.neko-col-sm-12,.neko-col-sm-auto,.neko-col-xl,.neko-col-xl-1,.neko-col-xl-2,.neko-col-xl-3,.neko-col-xl-4,.neko-col-xl-5,.neko-col-xl-6,.neko-col-xl-7,.neko-col-xl-8,.neko-col-xl-9,.neko-col-xl-10,.neko-col-xl-11,.neko-col-xl-12,.neko-col-xl-auto{padding-right:8px;padding-left:8px}}@media (min-width:1200px){.neko-col,.neko-col-1,.neko-col-2,.neko-col-3,.neko-col-4,.neko-col-5,.neko-col-6,.neko-col-7,.neko-col-8,.neko-col-9,.neko-col-10,.neko-col-11,.neko-col-12,.neko-col-auto,.neko-col-lg,.neko-col-lg-1,.neko-col-lg-2,.neko-col-lg-3,.neko-col-lg-4,.neko-col-lg-5,.neko-col-lg-6,.neko-col-lg-7,.neko-col-lg-8,.neko-col-lg-9,.neko-col-lg-10,.neko-col-lg-11,.neko-col-lg-12,.neko-col-lg-auto,.neko-col-md,.neko-col-md-1,.neko-col-md-2,.neko-col-md-3,.neko-col-md-4,.neko-col-md-5,.neko-col-md-6,.neko-col-md-7,.neko-col-md-8,.neko-col-md-9,.neko-col-md-10,.neko-col-md-11,.neko-col-md-12,.neko-col-md-auto,.neko-col-sm,.neko-col-sm-1,.neko-col-sm-2,.neko-col-sm-3,.neko-col-sm-4,.neko-col-sm-5,.neko-col-sm-6,.neko-col-sm-7,.neko-col-sm-8,.neko-col-sm-9,.neko-col-sm-10,.neko-col-sm-11,.neko-col-sm-12,.neko-col-sm-auto,.neko-col-xl,.neko-col-xl-1,.neko-col-xl-2,.neko-col-xl-3,.neko-col-xl-4,.neko-col-xl-5,.neko-col-xl-6,.neko-col-xl-7,.neko-col-xl-8,.neko-col-xl-9,.neko-col-xl-10,.neko-col-xl-11,.neko-col-xl-12,.neko-col-xl-auto{padding-right:8px;padding-left:8px}}@media (max-width:575px){.neko-hidden-down{display:none}}.neko-col{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.neko-col-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.neko-hidden-up{display:none}.neko-col-1{width:8.33333%}.neko-col-2{width:16.66667%}.neko-col-3{width:25%}.neko-col-4{width:33.33333%}.neko-col-5{width:41.66667%}.neko-col-6{width:50%}.neko-col-7{width:58.33333%}.neko-col-8{width:66.66667%}.neko-col-9{width:75%}.neko-col-10{width:83.33333%}.neko-col-11{width:91.66667%}.neko-col-12{width:100%}.neko-offset-1{margin-left:8.33333%}.neko-offset-2{margin-left:16.66667%}.neko-offset-3{margin-left:25%}.neko-offset-4{margin-left:33.33333%}.neko-offset-5{margin-left:41.66667%}.neko-offset-6{margin-left:50%}.neko-offset-7{margin-left:58.33333%}.neko-offset-8{margin-left:66.66667%}.neko-offset-9{margin-left:75%}.neko-offset-10{margin-left:83.33333%}.neko-offset-11{margin-left:91.66667%}@media (max-width:767px){.neko-hidden-sm-down{display:none}}@media (min-width:576px){.neko-col-sm{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.neko-col-sm-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.neko-hidden-sm-up{display:none}.neko-col-sm-1{width:8.33333%}.neko-col-sm-2{width:16.66667%}.neko-col-sm-3{width:25%}.neko-col-sm-4{width:33.33333%}.neko-col-sm-5{width:41.66667%}.neko-col-sm-6{width:50%}.neko-col-sm-7{width:58.33333%}.neko-col-sm-8{width:66.66667%}.neko-col-sm-9{width:75%}.neko-col-sm-10{width:83.33333%}.neko-col-sm-11{width:91.66667%}.neko-col-sm-12{width:100%}.neko-offset-sm-1{margin-left:8.33333%}.neko-offset-sm-2{margin-left:16.66667%}.neko-offset-sm-3{margin-left:25%}.neko-offset-sm-4{margin-left:33.33333%}.neko-offset-sm-5{margin-left:41.66667%}.neko-offset-sm-6{margin-left:50%}.neko-offset-sm-7{margin-left:58.33333%}.neko-offset-sm-8{margin-left:66.66667%}.neko-offset-sm-9{margin-left:75%}.neko-offset-sm-10{margin-left:83.33333%}.neko-offset-sm-11{margin-left:91.66667%}}@media (max-width:991px){.neko-hidden-md-down{display:none}}@media (min-width:768px){.neko-col-md{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.neko-col-md-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.neko-hidden-md-up{display:none}.neko-col-md-1{width:8.33333%}.neko-col-md-2{width:16.66667%}.neko-col-md-3{width:25%}.neko-col-md-4{width:33.33333%}.neko-col-md-5{width:41.66667%}.neko-col-md-6{width:50%}.neko-col-md-7{width:58.33333%}.neko-col-md-8{width:66.66667%}.neko-col-md-9{width:75%}.neko-col-md-10{width:83.33333%}.neko-col-md-11{width:91.66667%}.neko-col-md-12{width:100%}.neko-offset-md-1{margin-left:8.33333%}.neko-offset-md-2{margin-left:16.66667%}.neko-offset-md-3{margin-left:25%}.neko-offset-md-4{margin-left:33.33333%}.neko-offset-md-5{margin-left:41.66667%}.neko-offset-md-6{margin-left:50%}.neko-offset-md-7{margin-left:58.33333%}.neko-offset-md-8{margin-left:66.66667%}.neko-offset-md-9{margin-left:75%}.neko-offset-md-10{margin-left:83.33333%}.neko-offset-md-11{margin-left:91.66667%}}@media (max-width:1199px){.neko-hidden-lg-down{display:none}}@media (min-width:992px){.neko-col-lg{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.neko-col-lg-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.neko-hidden-lg-up{display:none}.neko-col-lg-1{width:8.33333%}.neko-col-lg-2{width:16.66667%}.neko-col-lg-3{width:25%}.neko-col-lg-4{width:33.33333%}.neko-col-lg-5{width:41.66667%}.neko-col-lg-6{width:50%}.neko-col-lg-7{width:58.33333%}.neko-col-lg-8{width:66.66667%}.neko-col-lg-9{width:75%}.neko-col-lg-10{width:83.33333%}.neko-col-lg-11{width:91.66667%}.neko-col-lg-12{width:100%}.neko-offset-lg-1{margin-left:8.33333%}.neko-offset-lg-2{margin-left:16.66667%}.neko-offset-lg-3{margin-left:25%}.neko-offset-lg-4{margin-left:33.33333%}.neko-offset-lg-5{margin-left:41.66667%}.neko-offset-lg-6{margin-left:50%}.neko-offset-lg-7{margin-left:58.33333%}.neko-offset-lg-8{margin-left:66.66667%}.neko-offset-lg-9{margin-left:75%}.neko-offset-lg-10{margin-left:83.33333%}.neko-offset-lg-11{margin-left:91.66667%}}.neko-hidden-xl-down{display:none}@media (min-width:1200px){.neko-col-xl{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.neko-col-xl-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.neko-hidden-xl-up{display:none}.neko-col-xl-1{width:8.33333%}.neko-col-xl-2{width:16.66667%}.neko-col-xl-3{width:25%}.neko-col-xl-4{width:33.33333%}.neko-col-xl-5{width:41.66667%}.neko-col-xl-6{width:50%}.neko-col-xl-7{width:58.33333%}.neko-col-xl-8{width:66.66667%}.neko-col-xl-9{width:75%}.neko-col-xl-10{width:83.33333%}.neko-col-xl-11{width:91.66667%}.neko-col-xl-12{width:100%}.neko-offset-xl-1{margin-left:8.33333%}.neko-offset-xl-2{margin-left:16.66667%}.neko-offset-xl-3{margin-left:25%}.neko-offset-xl-4{margin-left:33.33333%}.neko-offset-xl-5{margin-left:41.66667%}.neko-offset-xl-6{margin-left:50%}.neko-offset-xl-7{margin-left:58.33333%}.neko-offset-xl-8{margin-left:66.66667%}.neko-offset-xl-9{margin-left:75%}.neko-offset-xl-10{margin-left:83.33333%}.neko-offset-xl-11{margin-left:91.66667%}}.neko-btn{display:inline-block;height:36px;line-height:36px;min-width:88px;margin:0;padding:0 5px;font-family:Roboto,sans-serif;font-size:12px;font-weight:500;cursor:pointer;text-decoration:none;outline:none;position:relative;border-radius:2px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;text-align:center;-webkit-tap-highlight-color:transparent;-webkit-transition:opacity .45s cubic-bezier(.23,1,.32,1) 0ms,-webkit-transform .45s cubic-bezier(.23,1,.32,1) 0ms;transition:opacity .45s cubic-bezier(.23,1,.32,1) 0ms,-webkit-transform .45s cubic-bezier(.23,1,.32,1) 0ms;transition:opacity .45s cubic-bezier(.23,1,.32,1) 0ms,transform .45s cubic-bezier(.23,1,.32,1) 0ms;transition:opacity .45s cubic-bezier(.23,1,.32,1) 0ms,transform .45s cubic-bezier(.23,1,.32,1) 0ms,-webkit-transform .45s cubic-bezier(.23,1,.32,1) 0ms}@media (min-width:576px){.neko-btn{-webkit-transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;transition:all .45s cubic-bezier(.23,1,.32,1) 0ms}}.neko-btn{color:#fff;border:1px solid #5a666f;background-color:#5a666f}.neko-btn:hover{background-color:#313439}.neko-btn.outline{color:#5a666f;background-color:transparent}.neko-btn.outline:hover{color:#fff;background-color:#5a666f}.neko-btn.shadow:hover{-webkit-box-shadow:rgba(0,0,0,.156863) 0 3px 10px,rgba(0,0,0,.227451) 0 3px 10px;box-shadow:0 3px 10px rgba(0,0,0,.156863),0 3px 10px rgba(0,0,0,.227451)}.neko-btn.merge{color:#5a666f;border:0;background-color:transparent}.neko-btn.merge:hover,.neko-btn.neko-color-black{color:#fff;background-color:#5a666f}.neko-btn.neko-color-black{border:1px solid #5a666f}.neko-btn.neko-color-black:hover{background-color:#313439}.neko-btn.neko-color-white{color:#fff;border:1px solid #fff;background-color:#fff}.neko-btn.neko-color-red{color:#fff;border:1px solid #d32f2f;background-color:#d32f2f}.neko-btn.neko-color-red:hover{background-color:#c62828}.neko-btn.neko-color-pink{color:#fff;border:1px solid #c2185b;background-color:#c2185b}.neko-btn.neko-color-pink:hover{background-color:#880e4f}.neko-btn.neko-color-purple{color:#fff;border:1px solid #7b1fa2;background-color:#7b1fa2}.neko-btn.neko-color-purple:hover{background-color:#c62828}.neko-btn.neko-color-deep-purple{color:#fff;border:1px solid #512da8;background-color:#512da8}.neko-btn.neko-color-deep-purple:hover{background-color:#4527a0}.neko-btn.neko-color-indigo{color:#fff;border:1px solid #303f9f;background-color:#303f9f}.neko-btn.neko-color-indigo:hover{background-color:#283593}.neko-btn.neko-color-blue{color:#fff;border:1px solid #1976d2;background-color:#1976d2}.neko-btn.neko-color-blue:hover{background-color:#1565c0}.neko-btn.neko-color-light-blue{color:#fff;border:1px solid #0288d1;background-color:#0288d1}.neko-btn.neko-color-light-blue:hover{background-color:#0277bd}.neko-btn.neko-color-cyan{color:#fff;border:1px solid #0097a7;background-color:#0097a7}.neko-btn.neko-color-cyan:hover{background-color:#00838f}.neko-btn.neko-color-teal{color:#fff;border:1px solid #00796b;background-color:#00796b}.neko-btn.neko-color-teal:hover{background-color:#00695c}.neko-btn.neko-color-green{color:#fff;border:1px solid #388e3c;background-color:#388e3c}.neko-btn.neko-color-green:hover{background-color:#2e7d32}.neko-btn.neko-color-light-green{color:#fff;border:1px solid #689f38;background-color:#689f38}.neko-btn.neko-color-light-green:hover{background-color:#558b2f}.neko-btn.neko-color-lime{color:#fff;border:1px solid #afb42b;background-color:#afb42b}.neko-btn.neko-color-lime:hover{background-color:#9e9d24}.neko-btn.neko-color-yellow{color:#fff;border:1px solid #fbc02d;background-color:#fbc02d}.neko-btn.neko-color-yellow:hover{background-color:#f9a825}.neko-btn.neko-color-amber{color:#fff;border:1px solid #ffa000;background-color:#ffa000}.neko-btn.neko-color-amber:hover{background-color:#ff8f00}.neko-btn.neko-color-orange{color:#fff;border:1px solid #f57c00;background-color:#f57c00}.neko-btn.neko-color-orange:hover{background-color:#ef6c00}.neko-btn.neko-color-deep-orange{color:#fff;border:1px solid #e64a19;background-color:#e64a19}.neko-btn.neko-color-deep-orange:hover{background-color:#d84315}.neko-btn.neko-color-brown{color:#fff;border:1px solid #5d4037;background-color:#5d4037}.neko-btn.neko-color-brown:hover{background-color:#4e342e}.neko-btn.neko-color-grey{color:#fff;border:1px solid #616161;background-color:#616161}.neko-btn.neko-color-grey:hover{background-color:#424242}.neko-btn.neko-color-blue-grey{color:#fff;border:1px solid #455a64;background-color:#455a64}.neko-btn.neko-color-blue-grey:hover{background-color:#37474f}.neko-btn.outline.neko-color-black{color:#5a666f;background-color:transparent}.neko-btn.outline.neko-color-black:hover{color:#fff;background-color:#5a666f}.neko-btn.outline.neko-color-white{color:#fff;background-color:transparent}.neko-btn.outline.neko-color-white:hover{color:#fff;background-color:#fff}.neko-btn.outline.neko-color-red{color:#d32f2f;background-color:transparent}.neko-btn.outline.neko-color-red:hover{color:#fff;background-color:#d32f2f}.neko-btn.outline.neko-color-pink{color:#c2185b;background-color:transparent}.neko-btn.outline.neko-color-pink:hover{color:#fff;background-color:#c2185b}.neko-btn.outline.neko-color-purple{color:#7b1fa2;background-color:transparent}.neko-btn.outline.neko-color-purple:hover{color:#fff;background-color:#7b1fa2}.neko-btn.outline.neko-color-deep-purple{color:#512da8;background-color:transparent}.neko-btn.outline.neko-color-deep-purple:hover{color:#fff;background-color:#512da8}.neko-btn.outline.neko-color-indigo{color:#303f9f;background-color:transparent}.neko-btn.outline.neko-color-indigo:hover{color:#fff;background-color:#303f9f}.neko-btn.outline.neko-color-blue{color:#1976d2;background-color:transparent}.neko-btn.outline.neko-color-blue:hover{color:#fff;background-color:#1976d2}.neko-btn.outline.neko-color-light-blue{color:#0288d1;background-color:transparent}.neko-btn.outline.neko-color-light-blue:hover{color:#fff;background-color:#0288d1}.neko-btn.outline.neko-color-cyan{color:#0097a7;background-color:transparent}.neko-btn.outline.neko-color-cyan:hover{color:#fff;background-color:#0097a7}.neko-btn.outline.neko-color-teal{color:#00796b;background-color:transparent}.neko-btn.outline.neko-color-teal:hover{color:#fff;background-color:#00796b}.neko-btn.outline.neko-color-green{color:#388e3c;background-color:transparent}.neko-btn.outline.neko-color-green:hover{color:#fff;background-color:#388e3c}.neko-btn.outline.neko-color-light-green{color:#689f38;background-color:transparent}.neko-btn.outline.neko-color-light-green:hover{color:#fff;background-color:#689f38}.neko-btn.outline.neko-color-lime{color:#afb42b;background-color:transparent}.neko-btn.outline.neko-color-lime:hover{color:#fff;background-color:#afb42b}.neko-btn.outline.neko-color-yellow{color:#fbc02d;background-color:transparent}.neko-btn.outline.neko-color-yellow:hover{color:#fff;background-color:#fbc02d}.neko-btn.outline.neko-color-amber{color:#ffa000;background-color:transparent}.neko-btn.outline.neko-color-amber:hover{color:#fff;background-color:#ffa000}.neko-btn.outline.neko-color-orange{color:#f57c00;background-color:transparent}.neko-btn.outline.neko-color-orange:hover{color:#fff;background-color:#f57c00}.neko-btn.outline.neko-color-deep-orange{color:#e64a19;background-color:transparent}.neko-btn.outline.neko-color-deep-orange:hover{color:#fff;background-color:#e64a19}.neko-btn.outline.neko-color-brown{color:#5d4037;background-color:transparent}.neko-btn.outline.neko-color-brown:hover{color:#fff;background-color:#5d4037}.neko-btn.outline.neko-color-grey{color:#616161;background-color:transparent}.neko-btn.outline.neko-color-grey:hover{color:#fff;background-color:#616161}.neko-btn.outline.neko-color-blue-grey{color:#455a64;background-color:transparent}.neko-btn.outline.neko-color-blue-grey:hover{color:#fff;background-color:#455a64}.neko-btn.merge.neko-color-black{color:#5a666f;border:0;background-color:transparent}.neko-btn.merge.neko-color-black:hover{color:#fff;background-color:#5a666f}.neko-btn.merge.neko-color-white{color:#fff;border:0;background-color:transparent}.neko-btn.merge.neko-color-white:hover{color:#fff;background-color:#fff}.neko-btn.merge.neko-color-red{color:#d32f2f;border:0;background-color:transparent}.neko-btn.merge.neko-color-red:hover{color:#fff;background-color:#d32f2f}.neko-btn.merge.neko-color-pink{color:#c2185b;border:0;background-color:transparent}.neko-btn.merge.neko-color-pink:hover{color:#fff;background-color:#c2185b}.neko-btn.merge.neko-color-purple{color:#7b1fa2;border:0;background-color:transparent}.neko-btn.merge.neko-color-purple:hover{color:#fff;background-color:#7b1fa2}.neko-btn.merge.neko-color-deep-purple{color:#512da8;border:0;background-color:transparent}.neko-btn.merge.neko-color-deep-purple:hover{color:#fff;background-color:#512da8}.neko-btn.merge.neko-color-indigo{color:#303f9f;border:0;background-color:transparent}.neko-btn.merge.neko-color-indigo:hover{color:#fff;background-color:#303f9f}.neko-btn.merge.neko-color-blue{color:#1976d2;border:0;background-color:transparent}.neko-btn.merge.neko-color-blue:hover{color:#fff;background-color:#1976d2}.neko-btn.merge.neko-color-light-blue{color:#0288d1;border:0;background-color:transparent}.neko-btn.merge.neko-color-light-blue:hover{color:#fff;background-color:#0288d1}.neko-btn.merge.neko-color-cyan{color:#0097a7;border:0;background-color:transparent}.neko-btn.merge.neko-color-cyan:hover{color:#fff;background-color:#0097a7}.neko-btn.merge.neko-color-teal{color:#00796b;border:0;background-color:transparent}.neko-btn.merge.neko-color-teal:hover{color:#fff;background-color:#00796b}.neko-btn.merge.neko-color-green{color:#388e3c;border:0;background-color:transparent}.neko-btn.merge.neko-color-green:hover{color:#fff;background-color:#388e3c}.neko-btn.merge.neko-color-light-green{color:#689f38;border:0;background-color:transparent}.neko-btn.merge.neko-color-light-green:hover{color:#fff;background-color:#689f38}.neko-btn.merge.neko-color-lime{color:#afb42b;border:0;background-color:transparent}.neko-btn.merge.neko-color-lime:hover{color:#fff;background-color:#afb42b}.neko-btn.merge.neko-color-yellow{color:#fbc02d;border:0;background-color:transparent}.neko-btn.merge.neko-color-yellow:hover{color:#fff;background-color:#fbc02d}.neko-btn.merge.neko-color-amber{color:#ffa000;border:0;background-color:transparent}.neko-btn.merge.neko-color-amber:hover{color:#fff;background-color:#ffa000}.neko-btn.merge.neko-color-orange{color:#f57c00;border:0;background-color:transparent}.neko-btn.merge.neko-color-orange:hover{color:#fff;background-color:#f57c00}.neko-btn.merge.neko-color-deep-orange{color:#e64a19;border:0;background-color:transparent}.neko-btn.merge.neko-color-deep-orange:hover{color:#fff;background-color:#e64a19}.neko-btn.merge.neko-color-brown{color:#5d4037;border:0;background-color:transparent}.neko-btn.merge.neko-color-brown:hover{color:#fff;background-color:#5d4037}.neko-btn.merge.neko-color-grey{color:#616161;border:0;background-color:transparent}.neko-btn.merge.neko-color-grey:hover{color:#fff;background-color:#616161}.neko-btn.merge.neko-color-blue-grey{color:#455a64;border:0;background-color:transparent}.neko-btn.merge.neko-color-blue-grey:hover{color:#fff;background-color:#455a64}.neko-container,.neko-container-fluid,.neko-helper-center{display:block;margin-left:auto;margin-right:auto}.neko-hidden{display:none}.neko-m-l-1{margin-left:8px}.neko-m-r-1{margin-right:8px}.neko-m-t-1{margin-top:8px}.neko-m-b-1{margin-bottom:8px}.neko-m-h-1{margin-left:8px;margin-right:8px}.neko-m-v-1{margin-top:8px;margin-bottom:8px}.neko-m-l-2{margin-left:16px}.neko-m-r-2{margin-right:16px}.neko-m-t-2{margin-top:16px}.neko-m-b-2{margin-bottom:16px}.neko-m-h-2{margin-left:16px;margin-right:16px}.neko-m-v-2{margin-top:16px;margin-bottom:16px}.neko-m-l-3{margin-left:24px}.neko-m-r-3{margin-right:24px}.neko-m-t-3{margin-top:24px}.neko-m-b-3{margin-bottom:24px}.neko-m-h-3{margin-left:24px;margin-right:24px}.neko-m-v-3{margin-top:24px;margin-bottom:24px}.neko-m-l-4{margin-left:32px}.neko-m-r-4{margin-right:32px}.neko-m-t-4{margin-top:32px}.neko-m-b-4{margin-bottom:32px}.neko-m-h-4{margin-left:32px;margin-right:32px}.neko-m-v-4{margin-top:32px;margin-bottom:32px}.neko-m-l-5{margin-left:40px}.neko-m-r-5{margin-right:40px}.neko-m-t-5{margin-top:40px}.neko-m-b-5{margin-bottom:40px}.neko-m-h-5{margin-left:40px;margin-right:40px}.neko-m-v-5{margin-top:40px;margin-bottom:40px}.neko-p-l-1{padding-left:8px}.neko-p-r-1{padding-right:8px}.neko-p-t-1{padding-top:8px}.neko-p-b-1{padding-bottom:8px}.neko-p-h-1{padding-left:8px;padding-right:8px}.neko-p-v-1{padding-top:8px;padding-bottom:8px}.neko-p-l-2{padding-left:16px}.neko-p-r-2{padding-right:16px}.neko-p-t-2{padding-top:16px}.neko-p-b-2{padding-bottom:16px}.neko-p-h-2{padding-left:16px;padding-right:16px}.neko-p-v-2{padding-top:16px;padding-bottom:16px}.neko-p-l-3{padding-left:24px}.neko-p-r-3{padding-right:24px}.neko-p-t-3{padding-top:24px}.neko-p-b-3{padding-bottom:24px}.neko-p-h-3{padding-left:24px;padding-right:24px}.neko-p-v-3{padding-top:24px;padding-bottom:24px}.neko-p-l-4{padding-left:32px}.neko-p-r-4{padding-right:32px}.neko-p-t-4{padding-top:32px}.neko-p-b-4{padding-bottom:32px}.neko-p-h-4{padding-left:32px;padding-right:32px}.neko-p-v-4{padding-top:32px;padding-bottom:32px}.neko-p-l-5{padding-left:40px}.neko-p-r-5{padding-right:40px}.neko-p-t-5{padding-top:40px}.neko-p-b-5{padding-bottom:40px}.neko-p-h-5{padding-left:40px;padding-right:40px}.neko-p-v-5{padding-top:40px;padding-bottom:40px}", ""])
}, function (e, n) {
    e.exports = function (e) {
        var n = "undefined" != typeof window && window.location;
        if (!n) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var o = n.protocol + "//" + n.host, t = o + n.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, n) {
            var r = n.trim().replace(/^"(.*)"$/, function (e, n) {
                return n
            }).replace(/^'(.*)'$/, function (e, n) {
                return n
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return e;
            var l;
            return l = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? o + r : t + r.replace(/^\.\//, ""), "url(" + JSON.stringify(l) + ")"
        })
    }
}, function (e, n, o) {
    e.exports = o.p + "manifest.json"
}, function (e, n, o) {
    var t = o(25);
    "string" == typeof t && (t = [[e.i, t, ""]]);
    var r = {};
    r.transform = void 0;
    o(4)(t, r);
    t.locals && (e.exports = t.locals)
}, function (e, n, o) {
    n = e.exports = o(1)(void 0), n.push([e.i, ".hljs-comment,.hljs-quote{color:#65737e}.hljs-deletion,.hljs-name,.hljs-regexp,.hljs-selector-class,.hljs-selector-id,.hljs-tag,.hljs-template-variable,.hljs-variable{color:#bf616a}.hljs-built_in,.hljs-builtin-name,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-type{color:#d08770}.hljs-attribute{color:#ebcb8b}.hljs-addition,.hljs-bullet,.hljs-string,.hljs-symbol{color:#a3be8c}.hljs-section,.hljs-title{color:#8fa1b3}.hljs-keyword,.hljs-selector-tag{color:#b48ead}.hljs{display:block;overflow-x:auto;background:#2b303b;color:#c0c5ce;padding:.5em}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}", ""])
}, function (e, n, o) {
    !function (e) {
        "object" == typeof window && window || "object" == typeof self && self;
        e(n)
    }(function (e) {
        function n(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function o(e) {
            return e.nodeName.toLowerCase()
        }

        function t(e, n) {
            var o = e && e.exec(n);
            return o && 0 === o.index
        }

        function r(e) {
            return M.test(e)
        }

        function l(e) {
            var n, o, t, l, i = e.className + " ";
            if (i += e.parentNode ? e.parentNode.className : "", o = A.exec(i)) return w(o[1]) ? o[1] : "no-highlight";
            for (i = i.split(/\s+/), n = 0, t = i.length; n < t; n++) if (l = i[n], r(l) || w(l)) return l
        }

        function i(e) {
            var n, o = {}, t = Array.prototype.slice.call(arguments, 1);
            for (n in e) o[n] = e[n];
            return t.forEach(function (e) {
                for (n in e) o[n] = e[n]
            }), o
        }

        function a(e) {
            var n = [];
            return function e(t, r) {
                for (var l = t.firstChild; l; l = l.nextSibling) 3 === l.nodeType ? r += l.nodeValue.length : 1 === l.nodeType && (n.push({
                    event: "start",
                    offset: r,
                    node: l
                }), r = e(l, r), o(l).match(/br|hr|img|input/) || n.push({event: "stop", offset: r, node: l}));
                return r
            }(e, 0), n
        }

        function c(e, t, r) {
            function l() {
                return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" === t[0].event ? e : t : e.length ? e : t
            }

            function i(e) {
                function t(e) {
                    return " " + e.nodeName + '="' + n(e.value).replace('"', "&quot;") + '"'
                }

                p += "<" + o(e) + x.map.call(e.attributes, t).join("") + ">"
            }

            function a(e) {
                p += "</" + o(e) + ">"
            }

            function c(e) {
                ("start" === e.event ? i : a)(e.node)
            }

            for (var s = 0, p = "", d = []; e.length || t.length;) {
                var u = l();
                if (p += n(r.substring(s, u[0].offset)), s = u[0].offset, u === e) {
                    d.reverse().forEach(a);
                    do {
                        c(u.splice(0, 1)[0]), u = l()
                    } while (u === e && u.length && u[0].offset === s);
                    d.reverse().forEach(i)
                } else "start" === u[0].event ? d.push(u[0].node) : d.pop(), c(u.splice(0, 1)[0])
            }
            return p + n(r.substr(s))
        }

        function s(e) {
            return e.variants && !e.cached_variants && (e.cached_variants = e.variants.map(function (n) {
                return i(e, {variants: null}, n)
            })), e.cached_variants || e.endsWithParent && [i(e)] || [e]
        }

        function p(e) {
            function n(e) {
                return e && e.source || e
            }

            function o(o, t) {
                return new RegExp(n(o), "m" + (e.case_insensitive ? "i" : "") + (t ? "g" : ""))
            }

            function t(r, l) {
                if (!r.compiled) {
                    if (r.compiled = !0, r.keywords = r.keywords || r.beginKeywords, r.keywords) {
                        var i = {}, a = function (n, o) {
                            e.case_insensitive && (o = o.toLowerCase()), o.split(" ").forEach(function (e) {
                                var o = e.split("|");
                                i[o[0]] = [n, o[1] ? Number(o[1]) : 1]
                            })
                        };
                        "string" == typeof r.keywords ? a("keyword", r.keywords) : E(r.keywords).forEach(function (e) {
                            a(e, r.keywords[e])
                        }), r.keywords = i
                    }
                    r.lexemesRe = o(r.lexemes || /\w+/, !0), l && (r.beginKeywords && (r.begin = "\\b(" + r.beginKeywords.split(" ").join("|") + ")\\b"), r.begin || (r.begin = /\B|\b/), r.beginRe = o(r.begin), r.end || r.endsWithParent || (r.end = /\B|\b/), r.end && (r.endRe = o(r.end)), r.terminator_end = n(r.end) || "", r.endsWithParent && l.terminator_end && (r.terminator_end += (r.end ? "|" : "") + l.terminator_end)), r.illegal && (r.illegalRe = o(r.illegal)), null == r.relevance && (r.relevance = 1), r.contains || (r.contains = []), r.contains = Array.prototype.concat.apply([], r.contains.map(function (e) {
                        return s("self" === e ? r : e)
                    })), r.contains.forEach(function (e) {
                        t(e, r)
                    }), r.starts && t(r.starts, l);
                    var c = r.contains.map(function (e) {
                        return e.beginKeywords ? "\\.?(" + e.begin + ")\\.?" : e.begin
                    }).concat([r.terminator_end, r.illegal]).map(n).filter(Boolean);
                    r.terminators = c.length ? o(c.join("|"), !0) : {
                        exec: function () {
                            return null
                        }
                    }
                }
            }

            t(e)
        }

        function d(e, o, r, l) {
            function i(e, n) {
                var o, r;
                for (o = 0, r = n.contains.length; o < r; o++) if (t(n.contains[o].beginRe, e)) return n.contains[o]
            }

            function a(e, n) {
                if (t(e.endRe, n)) {
                    for (; e.endsParent && e.parent;) e = e.parent;
                    return e
                }
                if (e.endsWithParent) return a(e.parent, n)
            }

            function c(e, n) {
                return !r && t(n.illegalRe, e)
            }

            function s(e, n) {
                var o = y.case_insensitive ? n[0].toLowerCase() : n[0];
                return e.keywords.hasOwnProperty(o) && e.keywords[o]
            }

            function f(e, n, o, t) {
                var r = t ? "" : j.classPrefix, l = '<span class="' + r, i = o ? "" : O;
                return (l += e + '">') + n + i
            }

            function m() {
                var e, o, t, r;
                if (!x.keywords) return n(M);
                for (r = "", o = 0, x.lexemesRe.lastIndex = 0, t = x.lexemesRe.exec(M); t;) r += n(M.substring(o, t.index)), e = s(x, t), e ? (A += e[1], r += f(e[0], n(t[0]))) : r += n(t[0]), o = x.lexemesRe.lastIndex, t = x.lexemesRe.exec(M);
                return r + n(M.substr(o))
            }

            function h() {
                var e = "string" == typeof x.subLanguage;
                if (e && !_[x.subLanguage]) return n(M);
                var o = e ? d(x.subLanguage, M, !0, E[x.subLanguage]) : u(M, x.subLanguage.length ? x.subLanguage : void 0);
                return x.relevance > 0 && (A += o.relevance), e && (E[x.subLanguage] = o.top), f(o.language, o.value, !1, !0)
            }

            function k() {
                L += null != x.subLanguage ? h() : m(), M = ""
            }

            function g(e) {
                L += e.className ? f(e.className, "", !0) : "", x = Object.create(e, {parent: {value: x}})
            }

            function b(e, n) {
                if (M += e, null == n) return k(), 0;
                var o = i(n, x);
                if (o) return o.skip ? M += n : (o.excludeBegin && (M += n), k(), o.returnBegin || o.excludeBegin || (M = n)), g(o, n), o.returnBegin ? 0 : n.length;
                var t = a(x, n);
                if (t) {
                    var r = x;
                    r.skip ? M += n : (r.returnEnd || r.excludeEnd || (M += n), k(), r.excludeEnd && (M = n));
                    do {
                        x.className && (L += O), x.skip || (A += x.relevance), x = x.parent
                    } while (x !== t.parent);
                    return t.starts && g(t.starts, ""), r.returnEnd ? 0 : n.length
                }
                if (c(n, x)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (x.className || "<unnamed>") + '"');
                return M += n, n.length || 1
            }

            var y = w(e);
            if (!y) throw new Error('Unknown language: "' + e + '"');
            p(y);
            var v, x = l || y, E = {}, L = "";
            for (v = x; v !== y; v = v.parent) v.className && (L = f(v.className, "", !0) + L);
            var M = "", A = 0;
            try {
                for (var C, T, R = 0; ;) {
                    if (x.terminators.lastIndex = R, !(C = x.terminators.exec(o))) break;
                    T = b(o.substring(R, C.index), C[0]), R = C.index + T
                }
                for (b(o.substr(R)), v = x; v.parent; v = v.parent) v.className && (L += O);
                return {relevance: A, value: L, language: e, top: x}
            } catch (e) {
                if (e.message && -1 !== e.message.indexOf("Illegal")) return {relevance: 0, value: n(o)};
                throw e
            }
        }

        function u(e, o) {
            o = o || j.languages || E(_);
            var t = {relevance: 0, value: n(e)}, r = t;
            return o.filter(w).forEach(function (n) {
                var o = d(n, e, !1);
                o.language = n, o.relevance > r.relevance && (r = o), o.relevance > t.relevance && (r = t, t = o)
            }), r.language && (t.second_best = r), t
        }

        function f(e) {
            return j.tabReplace || j.useBR ? e.replace(C, function (e, n) {
                return j.useBR && "\n" === e ? "<br>" : j.tabReplace ? n.replace(/\t/g, j.tabReplace) : ""
            }) : e
        }

        function m(e, n, o) {
            var t = n ? L[n] : o, r = [e.trim()];
            return e.match(/\bhljs\b/) || r.push("hljs"), -1 === e.indexOf(t) && r.push(t), r.join(" ").trim()
        }

        function h(e) {
            var n, o, t, i, s, p = l(e);
            r(p) || (j.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : n = e, s = n.textContent, t = p ? d(p, s, !0) : u(s), o = a(n), o.length && (i = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), i.innerHTML = t.value, t.value = c(o, a(i), s)), t.value = f(t.value), e.innerHTML = t.value, e.className = m(e.className, p, t.language), e.result = {
                language: t.language,
                re: t.relevance
            }, t.second_best && (e.second_best = {language: t.second_best.language, re: t.second_best.relevance}))
        }

        function k(e) {
            j = i(j, e)
        }

        function g() {
            if (!g.called) {
                g.called = !0;
                var e = document.querySelectorAll("pre code");
                x.forEach.call(e, h)
            }
        }

        function b() {
            addEventListener("DOMContentLoaded", g, !1), addEventListener("load", g, !1)
        }

        function y(n, o) {
            var t = _[n] = o(e);
            t.aliases && t.aliases.forEach(function (e) {
                L[e] = n
            })
        }

        function v() {
            return E(_)
        }

        function w(e) {
            return e = (e || "").toLowerCase(), _[e] || _[L[e]]
        }

        var x = [], E = Object.keys, _ = {}, L = {}, M = /^(no-?highlight|plain|text)$/i,
            A = /\blang(?:uage)?-([\w-]+)\b/i, C = /((^(<[^>]+>|\t|)+|(?:\n)))/gm, O = "</span>",
            j = {classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0};
        return e.highlight = d, e.highlightAuto = u, e.fixMarkup = f, e.highlightBlock = h, e.configure = k, e.initHighlighting = g, e.initHighlightingOnLoad = b, e.registerLanguage = y, e.listLanguages = v, e.getLanguage = w, e.inherit = i, e.IDENT_RE = "[a-zA-Z]\\w*", e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*", e.NUMBER_RE = "\\b\\d+(\\.\\d+)?", e.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BINARY_NUMBER_RE = "\\b(0b[01]+)", e.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BACKSLASH_ESCAPE = {
            begin: "\\\\[\\s\\S]",
            relevance: 0
        }, e.APOS_STRING_MODE = {
            className: "string",
            begin: "'",
            end: "'",
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE]
        }, e.QUOTE_STRING_MODE = {
            className: "string",
            begin: '"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE]
        }, e.PHRASAL_WORDS_MODE = {begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/}, e.COMMENT = function (n, o, t) {
            var r = e.inherit({className: "comment", begin: n, end: o, contains: []}, t || {});
            return r.contains.push(e.PHRASAL_WORDS_MODE), r.contains.push({
                className: "doctag",
                begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                relevance: 0
            }), r
        }, e.C_LINE_COMMENT_MODE = e.COMMENT("//", "$"), e.C_BLOCK_COMMENT_MODE = e.COMMENT("/\\*", "\\*/"), e.HASH_COMMENT_MODE = e.COMMENT("#", "$"), e.NUMBER_MODE = {
            className: "number",
            begin: e.NUMBER_RE,
            relevance: 0
        }, e.C_NUMBER_MODE = {
            className: "number",
            begin: e.C_NUMBER_RE,
            relevance: 0
        }, e.BINARY_NUMBER_MODE = {
            className: "number",
            begin: e.BINARY_NUMBER_RE,
            relevance: 0
        }, e.CSS_NUMBER_MODE = {
            className: "number",
            begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
        }, e.REGEXP_MODE = {
            className: "regexp",
            begin: /\//,
            end: /\/[gimuy]*/,
            illegal: /\n/,
            contains: [e.BACKSLASH_ESCAPE, {begin: /\[/, end: /\]/, relevance: 0, contains: [e.BACKSLASH_ESCAPE]}]
        }, e.TITLE_MODE = {
            className: "title",
            begin: e.IDENT_RE,
            relevance: 0
        }, e.UNDERSCORE_TITLE_MODE = {
            className: "title",
            begin: e.UNDERSCORE_IDENT_RE,
            relevance: 0
        }, e.METHOD_GUARD = {begin: "\\.\\s*" + e.UNDERSCORE_IDENT_RE, relevance: 0}, e
    })
}, function (e, n) {
    e.exports = function (e) {
        var n = "[A-Za-z$_][0-9A-Za-z$_]*", o = {
                keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
                literal: "true false null undefined NaN Infinity",
                built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
            }, t = {
                className: "number",
                variants: [{begin: "\\b(0[bB][01]+)"}, {begin: "\\b(0[oO][0-7]+)"}, {begin: e.C_NUMBER_RE}],
                relevance: 0
            }, r = {className: "subst", begin: "\\$\\{", end: "\\}", keywords: o, contains: []},
            l = {className: "string", begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE, r]};
        r.contains = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, l, t, e.REGEXP_MODE];
        var i = r.contains.concat([e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]);
        return {
            aliases: ["js", "jsx"],
            keywords: o,
            contains: [{className: "meta", relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/}, {
                className: "meta",
                begin: /^#!/,
                end: /$/
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, l, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, t, {
                begin: /[{,]\s*/,
                relevance: 0,
                contains: [{
                    begin: n + "\\s*:",
                    returnBegin: !0,
                    relevance: 0,
                    contains: [{className: "attr", begin: n, relevance: 0}]
                }]
            }, {
                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.REGEXP_MODE, {
                    className: "function",
                    begin: "(\\(.*?\\)|" + n + ")\\s*=>",
                    returnBegin: !0,
                    end: "\\s*=>",
                    contains: [{
                        className: "params",
                        variants: [{begin: n}, {begin: /\(\s*\)/}, {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: o,
                            contains: i
                        }]
                    }]
                }, {
                    begin: /</,
                    end: /(\/\w+|\w+\/)>/,
                    subLanguage: "xml",
                    contains: [{begin: /<\w+\s*\/>/, skip: !0}, {
                        begin: /<\w+/,
                        end: /(\/\w+|\w+\/)>/,
                        skip: !0,
                        contains: [{begin: /<\w+\s*\/>/, skip: !0}, "self"]
                    }]
                }],
                relevance: 0
            }, {
                className: "function",
                beginKeywords: "function",
                end: /\{/,
                excludeEnd: !0,
                contains: [e.inherit(e.TITLE_MODE, {begin: n}), {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    contains: i
                }],
                illegal: /\[|%/
            }, {begin: /\$[(.]/}, e.METHOD_GUARD, {
                className: "class",
                beginKeywords: "class",
                end: /[{;=]/,
                excludeEnd: !0,
                illegal: /[:"\[\]]/,
                contains: [{beginKeywords: "extends"}, e.UNDERSCORE_TITLE_MODE]
            }, {beginKeywords: "constructor", end: /\{/, excludeEnd: !0}],
            illegal: /#(?!!)/
        }
    }
}, function (e, n) {
    e.exports = function (e) {
        var n = {
            endsWithParent: !0,
            illegal: /</,
            relevance: 0,
            contains: [{className: "attr", begin: "[A-Za-z0-9\\._:-]+", relevance: 0}, {
                begin: /=\s*/,
                relevance: 0,
                contains: [{
                    className: "string",
                    endsParent: !0,
                    variants: [{begin: /"/, end: /"/}, {begin: /'/, end: /'/}, {begin: /[^\s"'=<>`]+/}]
                }]
            }]
        };
        return {
            aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
            case_insensitive: !0,
            contains: [{
                className: "meta",
                begin: "<!DOCTYPE",
                end: ">",
                relevance: 10,
                contains: [{begin: "\\[", end: "\\]"}]
            }, e.COMMENT("\x3c!--", "--\x3e", {relevance: 10}), {
                begin: "<\\!\\[CDATA\\[",
                end: "\\]\\]>",
                relevance: 10
            }, {
                begin: /<\?(php)?/,
                end: /\?>/,
                subLanguage: "php",
                contains: [{begin: "/\\*", end: "\\*/", skip: !0}]
            }, {
                className: "tag",
                begin: "<style(?=\\s|>|$)",
                end: ">",
                keywords: {name: "style"},
                contains: [n],
                starts: {end: "</style>", returnEnd: !0, subLanguage: ["css", "xml"]}
            }, {
                className: "tag",
                begin: "<script(?=\\s|>|$)",
                end: ">",
                keywords: {name: "script"},
                contains: [n],
                starts: {
                    end: "<\/script>",
                    returnEnd: !0,
                    subLanguage: ["actionscript", "javascript", "handlebars", "xml"]
                }
            }, {
                className: "meta",
                variants: [{begin: /<\?xml/, end: /\?>/, relevance: 10}, {begin: /<\?\w+/, end: /\?>/}]
            }, {
                className: "tag",
                begin: "</?",
                end: "/?>",
                contains: [{className: "name", begin: /[^\/><\s]+/, relevance: 0}, n]
            }]
        }
    }
}, function (e, n) {
    function o() {
        return "serviceWorker" in navigator && (window.fetch || "imageRendering" in document.documentElement.style) && ("https:" === window.location.protocol || "localhost" === window.location.hostname || 0 === window.location.hostname.indexOf("127."))
    }

    function t(e) {
        if (e || (e = {}), o()) {
            navigator.serviceWorker.register("sw.js")
        } else if (window.applicationCache) {
            var n = function () {
                var e = document.createElement("iframe");
                e.src = "appcache/manifest.html", e.style.display = "none", i = e, document.body.appendChild(e)
            };
            return void("complete" === document.readyState ? setTimeout(n) : window.addEventListener("load", n))
        }
    }

    function r(e, n) {
    }

    function l() {
        if (o() && navigator.serviceWorker.getRegistration().then(function (e) {
                if (e) return e.update()
            }), i) try {
            i.contentWindow.applicationCache.update()
        } catch (e) {
        }
    }

    var i;
    n.install = t, n.applyUpdate = r, n.update = l
}]);
//# sourceMappingURL=cplayerexample.js.map