(window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    {
        7: function (t, e, s) {
            'use strict';
            s.r(e);
            var c = s(0);
            function a(t) {
                let e, s, a;
                return {
                    c() {
                        (e = Object(c.q)('div')), (s = Object(c.q)('img')), this.h();
                    },
                    l(t) {
                        e = Object(c.i)(t, 'DIV', { class: !0 });
                        var a = Object(c.g)(e);
                        (s = Object(c.i)(a, 'IMG', { src: !0, alt: !0, class: !0 })),
                            a.forEach(c.p),
                            this.h();
                    },
                    h() {
                        s.src !== (a = '/assets/Images/portada.png') &&
                            Object(c.e)(s, 'src', '/assets/Images/portada.png'),
                            Object(c.e)(s, 'alt', 'landingimg'),
                            Object(c.e)(s, 'class', 'svelte-11l0ymb'),
                            Object(c.e)(e, 'class', 'img-container svelte-11l0ymb');
                    },
                    m(t, a) {
                        Object(c.x)(t, e, a), Object(c.c)(e, s);
                    },
                    p: c.A,
                    i: c.A,
                    o: c.A,
                    d(t) {
                        t && Object(c.p)(e);
                    },
                };
            }
            class n extends c.a {
                constructor(t) {
                    var e;
                    super(),
                        document.getElementById('svelte-11l0ymb-style') ||
                            (((e = Object(c.q)('style')).id = 'svelte-11l0ymb-style'),
                            (e.textContent =
                                '.img-container.svelte-11l0ymb{overflow:hidden;min-width:100vw;background-color:rgba(202, 185, 158)}img.svelte-11l0ymb{opacity:0.7;vertical-align:middle;height:68vh;widows:100vw;position:relative;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}'),
                            Object(c.c)(document.head, e)),
                        Object(c.w)(this, t, null, a, c.E, {});
                }
            }
            var l = n;
            function r(t) {
                let e, s;
                return (
                    (e = new l({})),
                    {
                        c() {
                            Object(c.l)(e.$$.fragment);
                        },
                        l(t) {
                            Object(c.h)(e.$$.fragment, t);
                        },
                        m(t, a) {
                            Object(c.z)(e, t, a), (s = !0);
                        },
                        p: c.A,
                        i(t) {
                            s || (Object(c.K)(e.$$.fragment, t), (s = !0));
                        },
                        o(t) {
                            Object(c.L)(e.$$.fragment, t), (s = !1);
                        },
                        d(t) {
                            Object(c.n)(e, t);
                        },
                    }
                );
            }
            class i extends c.a {
                constructor(t) {
                    super(), Object(c.w)(this, t, null, r, c.E, {});
                }
            }
            e.default = i;
        },
    },
]);
