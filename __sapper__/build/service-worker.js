!(function (s) {
    var e = {};
    function t(a) {
        if (e[a]) return e[a].exports;
        var o = (e[a] = { i: a, l: !1, exports: {} });
        return s[a].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    (t.m = s),
        (t.c = e),
        (t.d = function (s, e, a) {
            t.o(s, e) || Object.defineProperty(s, e, { enumerable: !0, get: a });
        }),
        (t.r = function (s) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(s, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(s, '__esModule', { value: !0 });
        }),
        (t.t = function (s, e) {
            if ((1 & e && (s = t(s)), 8 & e)) return s;
            if (4 & e && 'object' == typeof s && s && s.__esModule) return s;
            var a = Object.create(null);
            if (
                (t.r(a),
                Object.defineProperty(a, 'default', { enumerable: !0, value: s }),
                2 & e && 'string' != typeof s)
            )
                for (var o in s)
                    t.d(
                        a,
                        o,
                        function (e) {
                            return s[e];
                        }.bind(null, o)
                    );
            return a;
        }),
        (t.n = function (s) {
            var e =
                s && s.__esModule
                    ? function () {
                          return s.default;
                      }
                    : function () {
                          return s;
                      };
            return t.d(e, 'a', e), e;
        }),
        (t.o = function (s, e) {
            return Object.prototype.hasOwnProperty.call(s, e);
        }),
        (t.p = ''),
        t((t.s = 0));
})([
    function (s, e, t) {
        'use strict';
        t.r(e);
        const a = [
                'client/a4b883ecc4e7c759873d/about.0.js',
                'client/a4b883ecc4e7c759873d/index.1.js',
                'client/a4b883ecc4e7c759873d/main.js',
                'client/a4b883ecc4e7c759873d/portabebes.3.js',
                'client/a4b883ecc4e7c759873d/portabebes_$id.4.js',
                'client/a4b883ecc4e7c759873d/productos.5.js',
            ].concat([
                'service-worker-index.html',
                'assets/.DS_Store',
                'assets/Images/.DS_Store',
                'assets/Images/Logos/logo.png',
                'assets/Images/Logos/logo2.png',
                'assets/Images/Logos/logo3.png',
                'assets/Images/Logos/logo4.png',
                'assets/Images/Productos/.DS_Store',
                'assets/Images/Productos/Descripciones.docx',
                'assets/Images/Productos/Zapatos/1.jpg',
                'assets/Images/Productos/Zapatos/2.JPG',
                'assets/Images/Productos/Zapatos/3.JPG',
                'assets/Images/Productos/Zapatos/4.jpg',
                'assets/Images/Productos/portabebes/.DS_Store',
                'assets/Images/Productos/portabebes/fularel/.DS_Store',
                'assets/Images/Productos/portabebes/fularel/1.jpg',
                'assets/Images/Productos/portabebes/fularel/2.jpg',
                'assets/Images/Productos/portabebes/fularel/3.jpg',
                'assets/Images/Productos/portabebes/fularel/4.jpg',
                'assets/Images/Productos/portabebes/fularpa/1.jpg',
                'assets/Images/Productos/portabebes/fularpa/2.jpg',
                'assets/Images/Productos/portabebes/fularpa/3.jpg',
                'assets/Images/Productos/portabebes/fularpa/4.jpg',
                'assets/Images/Productos/portabebes/fularse/1.jpg',
                'assets/Images/Productos/portabebes/fularse/2.jpg',
                'assets/Images/Productos/portabebes/fularse/3.jpg',
                'assets/Images/Productos/portabebes/fularse/4.jpg',
                'assets/Images/Productos/portabebes/fularsebr/.DS_Store',
                'assets/Images/Productos/portabebes/fularsebr/1.jpg',
                'assets/Images/Productos/portabebes/fularsebr/2.jpg',
                'assets/Images/Productos/portabebes/fularsebr/3.jpg',
                'assets/Images/Productos/portabebes/meitai/1.jpg',
                'assets/Images/Productos/portabebes/meitai/2.jpg',
                'assets/Images/Productos/portabebes/meitai/3.jpg',
                'assets/Images/Productos/portabebes/mochila/.DS_Store',
                'assets/Images/Productos/portabebes/mochila/0.jpg',
                'assets/Images/Productos/portabebes/mochila/2.jpg',
                'assets/Images/Productos/portabebes/mochila/3.jpg',
                'assets/Images/Productos/portabebes/mochila/4.jpg',
                'assets/Images/Productos/portabebes/mochilacjv/.DS_Store',
                'assets/Images/Productos/portabebes/mochilacjv/1.jpg',
                'assets/Images/Productos/portabebes/mochilacjv/2.jpg',
                'assets/Images/Productos/portabebes/mochilacjv/3.jpg',
                'assets/Images/Productos/portabebes/mochilacjv/4.jpg',
                'assets/Images/Productos/portabebes/mochilampb/.DS_Store',
                'assets/Images/Productos/portabebes/mochilampb/0.jpg',
                'assets/Images/Productos/portabebes/mochilampb/1.jpg',
                'assets/Images/Productos/portabebes/mochilampb/2.jpg',
                'assets/Images/Productos/portabebes/mochilampb/3.jpg',
                'assets/Images/Productos/portabebes/mochilampb/4.jpg',
                'assets/Images/Productos/portabebes/mochilampb/5.jpg',
                'assets/Images/Productos/portabebes/pouch/.DS_Store',
                'assets/Images/Productos/portabebes/pouch/0.jpg',
                'assets/Images/Productos/portabebes/pouch/1.jpg',
                'assets/Images/Productos/portabebes/pouch/2.jpg',
                'assets/Images/Productos/portabebes/pouch/3.jpg',
                'assets/Images/Productos/portabebes/pouch/4.jpg',
                'assets/Images/Productos/portabebes/pouch/5.jpg',
                'assets/Images/Productos/portabebes/pouch/6.jpg',
                'assets/Images/about/ale.png',
                'assets/Images/about/download.png',
                'assets/Images/about/espacio.jpg',
                'assets/Images/about/estefi.png',
                'assets/Images/playa-cel.jpg',
                'assets/Images/playa.jpg',
                'assets/Images/playa2.jpg',
                'assets/Images/porta.jpg',
                'assets/Images/portada.png',
                'assets/fonts/Alleyn W01 Bold.ttf',
                'assets/fonts/Alleyn W01 Medium.ttf',
                'assets/fonts/CartoonScript.ttf',
                'assets/fonts/Cartoon_Regular.ttf',
                'assets/fonts/GOODDC__.TTF',
                'assets/fonts/GOODDP__.TTF',
                'assets/fonts/Lifeisgoofy.ttf',
                'favicon.png',
                'global.css',
                'logo-192.png',
                'logo-512.png',
                'manifest.json',
                'successkid.jpg',
            ]),
            o = new Set(a);
        self.addEventListener('install', (s) => {
            s.waitUntil(
                caches
                    .open('cache1595952911958')
                    .then((s) => s.addAll(a))
                    .then(() => {
                        self.skipWaiting();
                    })
            );
        }),
            self.addEventListener('activate', (s) => {
                s.waitUntil(
                    caches.keys().then(async (s) => {
                        for (const e of s) 'cache1595952911958' !== e && (await caches.delete(e));
                        self.clients.claim();
                    })
                );
            }),
            self.addEventListener('fetch', (s) => {
                if ('GET' !== s.request.method || s.request.headers.has('range')) return;
                const e = new URL(s.request.url);
                e.protocol.startsWith('http') &&
                    ((e.hostname === self.location.hostname && e.port !== self.location.port) ||
                        (e.host === self.location.host && o.has(e.pathname)
                            ? s.respondWith(caches.match(s.request))
                            : 'only-if-cached' !== s.request.cache &&
                              s.respondWith(
                                  caches.open('offline1595952911958').then(async (e) => {
                                      try {
                                          const t = await fetch(s.request);
                                          return e.put(s.request, t.clone()), t;
                                      } catch (t) {
                                          const a = await e.match(s.request);
                                          if (a) return a;
                                          throw t;
                                      }
                                  })
                              )));
            });
    },
]);
