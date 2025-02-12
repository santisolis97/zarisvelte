var __shimport__ = (function (n) {
    'use strict';
    function t(n, t) {
        for (var r = n.length; r--; ) if (n[r].name === t) return n[r].as;
    }
    var r = /\b(case|default|delete|do|else|in|instanceof|new|return|throw|typeof|void)\s*$/,
        e = /(^|\{|\(|\[\.|;|,|<|>|<=|>=|==|!=|===|!==|\+|-|\*\%|<<|>>|>>>|&|\||\^|!|~|&&|\|\||\?|:|=|\+=|-=|\*=|%=|<<=|>>=|>>>=|&=|\|=|\^=|\/=|\/)\s*$/,
        u = /(\}|\)|\+\+|--)\s*$/,
        o = /[{}()[.;,<>=+\-*%&|\^!~?:\/]/,
        a = /[a-zA-Z_$0-9]/,
        i = {
            ' ': 1,
            '\t': 1,
            '\n': 1,
            '\r': 1,
            '\f': 1,
            '\v': 1,
            ' ': 1,
            '\u2028': 1,
            '\u2029': 1,
        };
    function s(n) {
        return n in i;
    }
    function f(n) {
        return "'" === n || '"' === n;
    }
    var c = /^\*\s+as\s+(\w+)$/,
        l = /(\w+)\s*,\s*\*\s*as\s*(\w+)$/,
        d = /(\w+)\s*,\s*{(.+)}$/;
    function p(n) {
        return n
            ? n.split(',').map(function (n) {
                  var t = n.trim().split(/[^\S]+/),
                      r = t[0];
                  return { name: r, as: t[2] || r };
              })
            : [];
    }
    function m(n, r) {
        for (var e = r, u = (r += 6); n[r] && s(n[r]); ) r += 1;
        for (; n[r] && !f(n[r]); ) r += 1;
        for (var o = r, a = (r += 1); n[r] && !f(n[r]); ) r += 1;
        var i = r++;
        return (function (n, r, e, u, o) {
            var a = t(u, '*') || t(u, 'default');
            return {
                start: r,
                end: e,
                source: o,
                name: a,
                toString: function (t) {
                    var a = t.get(o);
                    return (
                        u
                            .sort(function (n, t) {
                                return 'default' === n.name
                                    ? 1
                                    : 'default' === t.name
                                    ? -1
                                    : void 0;
                            })
                            .map(function (n) {
                                return '*' === n.name
                                    ? null
                                    : 'default' === n.name && n.as === a
                                    ? n.as + ' = ' + a + '.default;'
                                    : 'var ' + n.as + ' = ' + a + '.' + n.name + ';';
                            })
                            .join(' ') +
                        ' /*' +
                        n.slice(r, e) +
                        '*/'
                    ).trim();
                },
            };
        })(
            n,
            e,
            r,
            (function (n) {
                var t = c.exec(n);
                return t
                    ? [{ name: '*', as: t[1] }]
                    : (t = l.exec(n))
                    ? [
                          { name: 'default', as: t[1] },
                          { name: '*', as: t[2] },
                      ]
                    : (t = d.exec(n))
                    ? [{ name: 'default', as: t[1] }].concat(p(t[2].trim()))
                    : '{' === n[0]
                    ? p(n.slice(1, -1).trim())
                    : n
                    ? [{ name: 'default', as: n }]
                    : [];
            })(
                n
                    .slice(u, o)
                    .replace(/from\s*$/, '')
                    .trim()
            ),
            n.slice(a, i)
        );
    }
    function v(n, t) {
        var r = t;
        for (t += 6; n[t] && s(n[t]); ) t += 1;
        var e = t;
        if ('{' === n[t]) {
            for (; '}' !== n[t]; ) t += 1;
            for (var u = (t += 1), a = null; s(n[t]); ) t += 1;
            if (/^from[\s\n'"]/.test(n.slice(t, t + 5))) {
                for (t += 4; s(n[t]); ) t += 1;
                for (; n[t] && !f(n[t]); ) t += 1;
                for (var i = (t += 1); n[t] && !f(n[t]); ) t += 1;
                (a = n.slice(i, t)), (t += 1);
            }
            return (function (n, t, r, e, u, o) {
                var a = p(n.slice(r + 1, e - 1).trim());
                return {
                    start: t,
                    end: u,
                    source: o,
                    toString: function (r) {
                        var e = r.get(o);
                        return (
                            a
                                .map(function (n) {
                                    return (
                                        '__exports.' +
                                        n.as +
                                        ' = ' +
                                        (e ? e + '.' + n.name : n.name) +
                                        '; '
                                    );
                                })
                                .join('') +
                            '/*' +
                            n.slice(t, u) +
                            '*/'
                        );
                    },
                };
            })(n, r, e, u, t, a);
        }
        if ('*' === n[t]) {
            for (t += 1; s(n[t]); ) t += 1;
            for (t += 4; n[t] && !f(n[t]); ) t += 1;
            for (i = t += 1; n[t] && !f(n[t]); ) t += 1;
            var c = t++;
            return (function (n, t, r, e) {
                return {
                    start: t,
                    end: r,
                    source: e,
                    toString: function (u) {
                        return (
                            'Object.assign(__exports, ' + u.get(e) + '); /*' + n.slice(t, r) + '*/'
                        );
                    },
                };
            })(n, r, t, n.slice(i, c));
        }
        return /^default\b/.test(n.slice(t, t + 8))
            ? (function (n, t, r) {
                  var e = /^\s*(?:(class)(\s+extends|\s*{)|(function)\s*\()/.exec(n.slice(r));
                  if (e) {
                      r += e[0].length;
                      var u = '__default_export';
                      return {
                          start: t,
                          end: r,
                          name: u,
                          as: 'default',
                          toString: function () {
                              return e[1] ? 'class ' + u + e[2] : 'function ' + u + '(';
                          },
                      };
                  }
                  return {
                      start: t,
                      end: r,
                      toString: function () {
                          return '__exports.default =';
                      },
                  };
              })(n, r, e + 7)
            : (function (n, t, r) {
                  for (var e = r; n[r] && /\S/.test(n[r]); ) r += 1;
                  for (; n[r] && !/\S/.test(n[r]); ) r += 1;
                  for (var u = r; n[r] && !o.test(n[r]) && !s(n[r]); ) r += 1;
                  var a = r;
                  return {
                      start: t,
                      end: e,
                      name: n.slice(u, a),
                      toString: function () {
                          return '';
                      },
                  };
              })(n, r, e);
    }
    function h(n) {
        var t,
            i = !0,
            f = !1,
            c = [],
            l = -1,
            d = function () {
                return n[l];
            },
            p = {},
            h = {},
            _ = 0,
            g = [],
            x = [],
            w = [];
        for (
            var S = {
                    pattern: /(?:(\()|(\))|({)|(})|(")|(')|(\/\/)|(\/\*)|(\/)|(`)|(import)|(export)|(\+\+|--))/g,
                    handlers: [
                        function (n) {
                            (l = n), (h[_++] = n);
                        },
                        function (n) {
                            (l = n), (p[n] = h[--_]);
                        },
                        function (n) {
                            (l = n), c.push(S);
                        },
                        function (n) {
                            return (l = n), c.pop();
                        },
                        function (n) {
                            return c.push(S), R;
                        },
                        function (n) {
                            return c.push(S), U;
                        },
                        function (n) {
                            return L;
                        },
                        function (n) {
                            return A;
                        },
                        function (t) {
                            for (var f = t; f > 0 && s(n[f - 1]); ) f -= 1;
                            if (f > 0) {
                                var c = f;
                                if (o.test(n[c - 1])) for (; c > 0 && o.test(n[c - 1]); ) c -= 1;
                                else for (; c > 0 && a.test(n[c - 1]); ) c -= 1;
                                var m = n.slice(c, f);
                                i =
                                    !!m &&
                                    (r.test(m) ||
                                        e.test(m) ||
                                        (u.test(m) &&
                                            !(function () {
                                                if (')' === d()) {
                                                    for (var t = p[l]; s(n[t - 1]); ) t -= 1;
                                                    return !/(if|while)$/.test(n.slice(t - 5, t));
                                                }
                                                return !0;
                                            })()));
                            } else i = !0;
                            return $;
                        },
                        function (n) {
                            return E;
                        },
                        function (t) {
                            if (0 === t || s(n[t - 1]) || o.test(n[t - 1]))
                                if (/import[\s\n{"']/.test(n.slice(t, t + 7))) {
                                    var r = m(n, t);
                                    g.push(r), (z = r.end);
                                } else if ('import(' === n.slice(t, t + 7)) {
                                    var e = (function (n) {
                                        return {
                                            start: n,
                                            end: n + 6,
                                            toString: function () {
                                                return '__import';
                                            },
                                        };
                                    })(t);
                                    x.push(e), (z = e.end);
                                }
                        },
                        function (t) {
                            if (
                                (0 === t || s(n[t - 1]) || o.test(n[t - 1])) &&
                                /export[\s\n{]/.test(n.slice(t, t + 7))
                            ) {
                                var r = v(n, t);
                                w.push(r), (z = r.end);
                            }
                        },
                        function (t) {
                            f = !f && '+' === n[t - 1];
                        },
                    ],
                },
                $ = {
                    pattern: /(?:(\[)|(\\)|(.))/g,
                    handlers: [
                        function (n) {
                            return i ? y : S;
                        },
                        function (n) {
                            return (t = b), j;
                        },
                        function (n) {
                            return i && !f ? b : S;
                        },
                    ],
                },
                b = {
                    pattern: /(?:(\[)|(\\)|(\/))/g,
                    handlers: [
                        function () {
                            return y;
                        },
                        function () {
                            return (t = b), j;
                        },
                        function () {
                            return S;
                        },
                    ],
                },
                y = {
                    pattern: /(?:(\])|(\\))/g,
                    handlers: [
                        function () {
                            return b;
                        },
                        function () {
                            return (t = y), j;
                        },
                    ],
                },
                R = {
                    pattern: /(?:(\\)|("))/g,
                    handlers: [
                        function () {
                            return (t = R), j;
                        },
                        function () {
                            return c.pop();
                        },
                    ],
                },
                U = {
                    pattern: /(?:(\\)|('))/g,
                    handlers: [
                        function () {
                            return (t = U), j;
                        },
                        function () {
                            return c.pop();
                        },
                    ],
                },
                j = {
                    pattern: /(.)/g,
                    handlers: [
                        function () {
                            return t;
                        },
                    ],
                },
                E = {
                    pattern: /(?:(\${)|(\\)|(`))/g,
                    handlers: [
                        function () {
                            return c.push(E), S;
                        },
                        function () {
                            return (t = E), j;
                        },
                        function () {
                            return S;
                        },
                    ],
                },
                L = {
                    pattern: /((?:\n|$))/g,
                    handlers: [
                        function () {
                            return S;
                        },
                    ],
                },
                A = {
                    pattern: /(\*\/)/g,
                    handlers: [
                        function () {
                            return S;
                        },
                    ],
                },
                k = S,
                z = 0;
            z < n.length;

        ) {
            k.pattern.lastIndex = z;
            var I = k.pattern.exec(n);
            if (!I) {
                if (c.length > 0 || k !== S) throw new Error('Unexpected end of file');
                break;
            }
            z = I.index + I[0].length;
            for (var O = 1; O < I.length; O += 1)
                if (I[O]) {
                    k = k.handlers[O - 1](I.index) || k;
                    break;
                }
        }
        return [g, x, w];
    }
    function _(n, t) {
        var r = h(n),
            e = r[0],
            u = r[1],
            o = r[2],
            a = new Map();
        e.forEach(function (n) {
            a.has(n.source) || a.set(n.source, n.name || '__dep_' + a.size);
        }),
            o.forEach(function (n) {
                n.source && (a.has(n.source) || a.set(n.source, n.name || '__dep_' + a.size));
            });
        for (
            var i =
                    "__shimport__.define('" +
                    t +
                    "', [" +
                    Array.from(a.keys())
                        .map(function (n) {
                            return "'" + n + "'";
                        })
                        .join(', ') +
                    '], function(' +
                    ['__import', '__exports'].concat(Array.from(a.values())).join(', ') +
                    '){ ',
                s = e.concat(u, o).sort(function (n, t) {
                    return n.start - t.start;
                }),
                f = 0,
                c = 0;
            c < s.length;
            c += 1
        ) {
            var l = s[c];
            (i += n.slice(f, l.start) + l.toString(a)), (f = l.end);
        }
        return (
            (i += n.slice(f)),
            o.forEach(function (n) {
                n.name && (i += '\n__exports.' + (n.as || n.name) + ' = ' + n.name + ';');
            }),
            (i += '\n});\n//# sourceURL=' + t)
        );
    }
    var g = {};
    function x(n) {
        return (
            g[n] ||
            (g[n] = fetch(n)
                .then(function (n) {
                    return n.text();
                })
                .then(function (t) {
                    return (
                        (r = _(t, n)),
                        'undefined' != typeof URL
                            ? new Promise(function (n) {
                                  var t = '__shimport__' + w++,
                                      e = new Blob([t + '=' + r], {
                                          type: 'application/javascript',
                                      }),
                                      u = document.createElement('script');
                                  (u.src = URL.createObjectURL(e)),
                                      (u.onload = function () {
                                          n(window[t]), delete window[t];
                                      }),
                                      document.head.appendChild(u);
                              })
                            : (0, eval)(r)
                    );
                    var r;
                }))
        );
    }
    var w = 1;
    if ('undefined' != typeof document) {
        var S = document.querySelector('[data-main]');
        S && x(new URL(S.getAttribute('data-main'), document.baseURI));
    }
    return (
        (n.transform = _),
        (n.define = function (n, t, r) {
            var e = function (t) {
                return x(new URL(t, n));
            };
            return Promise.all(t.map(e)).then(function (n) {
                var t = {};
                return r.apply(void 0, [e, t].concat(n)), t;
            });
        }),
        (n.load = x),
        (n.VERSION = '1.0.1'),
        n
    );
})({});
