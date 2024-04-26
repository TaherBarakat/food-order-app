(function () {
     const n = document.createElement("link").relList;
     if (n && n.supports && n.supports("modulepreload")) return;
     for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
          r(l);
     new MutationObserver((l) => {
          for (const o of l)
               if (o.type === "childList")
                    for (const i of o.addedNodes)
                         i.tagName === "LINK" &&
                              i.rel === "modulepreload" &&
                              r(i);
     }).observe(document, { childList: !0, subtree: !0 });
     function t(l) {
          const o = {};
          return (
               l.integrity && (o.integrity = l.integrity),
               l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
               l.crossOrigin === "use-credentials"
                    ? (o.credentials = "include")
                    : l.crossOrigin === "anonymous"
                    ? (o.credentials = "omit")
                    : (o.credentials = "same-origin"),
               o
          );
     }
     function r(l) {
          if (l.ep) return;
          l.ep = !0;
          const o = t(l);
          fetch(l.href, o);
     }
})();
var Qu = { exports: {} },
     nl = {},
     Ku = { exports: {} },
     L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gt = Symbol.for("react.element"),
     oc = Symbol.for("react.portal"),
     ic = Symbol.for("react.fragment"),
     uc = Symbol.for("react.strict_mode"),
     sc = Symbol.for("react.profiler"),
     ac = Symbol.for("react.provider"),
     cc = Symbol.for("react.context"),
     fc = Symbol.for("react.forward_ref"),
     dc = Symbol.for("react.suspense"),
     pc = Symbol.for("react.memo"),
     mc = Symbol.for("react.lazy"),
     Di = Symbol.iterator;
function hc(e) {
     return e === null || typeof e != "object"
          ? null
          : ((e = (Di && e[Di]) || e["@@iterator"]),
            typeof e == "function" ? e : null);
}
var Yu = {
          isMounted: function () {
               return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
     },
     Xu = Object.assign,
     Gu = {};
function ot(e, n, t) {
     (this.props = e),
          (this.context = n),
          (this.refs = Gu),
          (this.updater = t || Yu);
}
ot.prototype.isReactComponent = {};
ot.prototype.setState = function (e, n) {
     if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
               "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
          );
     this.updater.enqueueSetState(this, e, n, "setState");
};
ot.prototype.forceUpdate = function (e) {
     this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zu() {}
Zu.prototype = ot.prototype;
function Vo(e, n, t) {
     (this.props = e),
          (this.context = n),
          (this.refs = Gu),
          (this.updater = t || Yu);
}
var Bo = (Vo.prototype = new Zu());
Bo.constructor = Vo;
Xu(Bo, ot.prototype);
Bo.isPureReactComponent = !0;
var Fi = Array.isArray,
     Ju = Object.prototype.hasOwnProperty,
     Ho = { current: null },
     qu = { key: !0, ref: !0, __self: !0, __source: !0 };
function bu(e, n, t) {
     var r,
          l = {},
          o = null,
          i = null;
     if (n != null)
          for (r in (n.ref !== void 0 && (i = n.ref),
          n.key !== void 0 && (o = "" + n.key),
          n))
               Ju.call(n, r) && !qu.hasOwnProperty(r) && (l[r] = n[r]);
     var u = arguments.length - 2;
     if (u === 1) l.children = t;
     else if (1 < u) {
          for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
          l.children = s;
     }
     if (e && e.defaultProps)
          for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
     return {
          $$typeof: Gt,
          type: e,
          key: o,
          ref: i,
          props: l,
          _owner: Ho.current,
     };
}
function vc(e, n) {
     return {
          $$typeof: Gt,
          type: e.type,
          key: n,
          ref: e.ref,
          props: e.props,
          _owner: e._owner,
     };
}
function Wo(e) {
     return typeof e == "object" && e !== null && e.$$typeof === Gt;
}
function yc(e) {
     var n = { "=": "=0", ":": "=2" };
     return (
          "$" +
          e.replace(/[=:]/g, function (t) {
               return n[t];
          })
     );
}
var Ui = /\/+/g;
function Sl(e, n) {
     return typeof e == "object" && e !== null && e.key != null
          ? yc("" + e.key)
          : n.toString(36);
}
function wr(e, n, t, r, l) {
     var o = typeof e;
     (o === "undefined" || o === "boolean") && (e = null);
     var i = !1;
     if (e === null) i = !0;
     else
          switch (o) {
               case "string":
               case "number":
                    i = !0;
                    break;
               case "object":
                    switch (e.$$typeof) {
                         case Gt:
                         case oc:
                              i = !0;
                    }
          }
     if (i)
          return (
               (i = e),
               (l = l(i)),
               (e = r === "" ? "." + Sl(i, 0) : r),
               Fi(l)
                    ? ((t = ""),
                      e != null && (t = e.replace(Ui, "$&/") + "/"),
                      wr(l, n, t, "", function (c) {
                           return c;
                      }))
                    : l != null &&
                      (Wo(l) &&
                           (l = vc(
                                l,
                                t +
                                     (!l.key || (i && i.key === l.key)
                                          ? ""
                                          : ("" + l.key).replace(Ui, "$&/") +
                                            "/") +
                                     e
                           )),
                      n.push(l)),
               1
          );
     if (((i = 0), (r = r === "" ? "." : r + ":"), Fi(e)))
          for (var u = 0; u < e.length; u++) {
               o = e[u];
               var s = r + Sl(o, u);
               i += wr(o, n, t, s, l);
          }
     else if (((s = hc(e)), typeof s == "function"))
          for (e = s.call(e), u = 0; !(o = e.next()).done; )
               (o = o.value), (s = r + Sl(o, u++)), (i += wr(o, n, t, s, l));
     else if (o === "object")
          throw (
               ((n = String(e)),
               Error(
                    "Objects are not valid as a React child (found: " +
                         (n === "[object Object]"
                              ? "object with keys {" +
                                Object.keys(e).join(", ") +
                                "}"
                              : n) +
                         "). If you meant to render a collection of children, use an array instead."
               ))
          );
     return i;
}
function tr(e, n, t) {
     if (e == null) return e;
     var r = [],
          l = 0;
     return (
          wr(e, r, "", "", function (o) {
               return n.call(t, o, l++);
          }),
          r
     );
}
function gc(e) {
     if (e._status === -1) {
          var n = e._result;
          (n = n()),
               n.then(
                    function (t) {
                         (e._status === 0 || e._status === -1) &&
                              ((e._status = 1), (e._result = t));
                    },
                    function (t) {
                         (e._status === 0 || e._status === -1) &&
                              ((e._status = 2), (e._result = t));
                    }
               ),
               e._status === -1 && ((e._status = 0), (e._result = n));
     }
     if (e._status === 1) return e._result.default;
     throw e._result;
}
var se = { current: null },
     kr = { transition: null },
     wc = {
          ReactCurrentDispatcher: se,
          ReactCurrentBatchConfig: kr,
          ReactCurrentOwner: Ho,
     };
L.Children = {
     map: tr,
     forEach: function (e, n, t) {
          tr(
               e,
               function () {
                    n.apply(this, arguments);
               },
               t
          );
     },
     count: function (e) {
          var n = 0;
          return (
               tr(e, function () {
                    n++;
               }),
               n
          );
     },
     toArray: function (e) {
          return (
               tr(e, function (n) {
                    return n;
               }) || []
          );
     },
     only: function (e) {
          if (!Wo(e))
               throw Error(
                    "React.Children.only expected to receive a single React element child."
               );
          return e;
     },
};
L.Component = ot;
L.Fragment = ic;
L.Profiler = sc;
L.PureComponent = Vo;
L.StrictMode = uc;
L.Suspense = dc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wc;
L.cloneElement = function (e, n, t) {
     if (e == null)
          throw Error(
               "React.cloneElement(...): The argument must be a React element, but you passed " +
                    e +
                    "."
          );
     var r = Xu({}, e.props),
          l = e.key,
          o = e.ref,
          i = e._owner;
     if (n != null) {
          if (
               (n.ref !== void 0 && ((o = n.ref), (i = Ho.current)),
               n.key !== void 0 && (l = "" + n.key),
               e.type && e.type.defaultProps)
          )
               var u = e.type.defaultProps;
          for (s in n)
               Ju.call(n, s) &&
                    !qu.hasOwnProperty(s) &&
                    (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
     }
     var s = arguments.length - 2;
     if (s === 1) r.children = t;
     else if (1 < s) {
          u = Array(s);
          for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
          r.children = u;
     }
     return { $$typeof: Gt, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function (e) {
     return (
          (e = {
               $$typeof: cc,
               _currentValue: e,
               _currentValue2: e,
               _threadCount: 0,
               Provider: null,
               Consumer: null,
               _defaultValue: null,
               _globalName: null,
          }),
          (e.Provider = { $$typeof: ac, _context: e }),
          (e.Consumer = e)
     );
};
L.createElement = bu;
L.createFactory = function (e) {
     var n = bu.bind(null, e);
     return (n.type = e), n;
};
L.createRef = function () {
     return { current: null };
};
L.forwardRef = function (e) {
     return { $$typeof: fc, render: e };
};
L.isValidElement = Wo;
L.lazy = function (e) {
     return { $$typeof: mc, _payload: { _status: -1, _result: e }, _init: gc };
};
L.memo = function (e, n) {
     return { $$typeof: pc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function (e) {
     var n = kr.transition;
     kr.transition = {};
     try {
          e();
     } finally {
          kr.transition = n;
     }
};
L.unstable_act = function () {
     throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, n) {
     return se.current.useCallback(e, n);
};
L.useContext = function (e) {
     return se.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
     return se.current.useDeferredValue(e);
};
L.useEffect = function (e, n) {
     return se.current.useEffect(e, n);
};
L.useId = function () {
     return se.current.useId();
};
L.useImperativeHandle = function (e, n, t) {
     return se.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function (e, n) {
     return se.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function (e, n) {
     return se.current.useLayoutEffect(e, n);
};
L.useMemo = function (e, n) {
     return se.current.useMemo(e, n);
};
L.useReducer = function (e, n, t) {
     return se.current.useReducer(e, n, t);
};
L.useRef = function (e) {
     return se.current.useRef(e);
};
L.useState = function (e) {
     return se.current.useState(e);
};
L.useSyncExternalStore = function (e, n, t) {
     return se.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function () {
     return se.current.useTransition();
};
L.version = "18.2.0";
Ku.exports = L;
var J = Ku.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kc = J,
     Sc = Symbol.for("react.element"),
     xc = Symbol.for("react.fragment"),
     Ec = Object.prototype.hasOwnProperty,
     Cc =
          kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
               .ReactCurrentOwner,
     _c = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, n, t) {
     var r,
          l = {},
          o = null,
          i = null;
     t !== void 0 && (o = "" + t),
          n.key !== void 0 && (o = "" + n.key),
          n.ref !== void 0 && (i = n.ref);
     for (r in n) Ec.call(n, r) && !_c.hasOwnProperty(r) && (l[r] = n[r]);
     if (e && e.defaultProps)
          for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
     return {
          $$typeof: Sc,
          type: e,
          key: o,
          ref: i,
          props: l,
          _owner: Cc.current,
     };
}
nl.Fragment = xc;
nl.jsx = es;
nl.jsxs = es;
Qu.exports = nl;
var k = Qu.exports,
     Yl = {},
     ns = { exports: {} },
     we = {},
     ts = { exports: {} },
     rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
     function n(C, z) {
          var T = C.length;
          C.push(z);
          e: for (; 0 < T; ) {
               var W = (T - 1) >>> 1,
                    G = C[W];
               if (0 < l(G, z)) (C[W] = z), (C[T] = G), (T = W);
               else break e;
          }
     }
     function t(C) {
          return C.length === 0 ? null : C[0];
     }
     function r(C) {
          if (C.length === 0) return null;
          var z = C[0],
               T = C.pop();
          if (T !== z) {
               C[0] = T;
               e: for (var W = 0, G = C.length, er = G >>> 1; W < er; ) {
                    var yn = 2 * (W + 1) - 1,
                         kl = C[yn],
                         gn = yn + 1,
                         nr = C[gn];
                    if (0 > l(kl, T))
                         gn < G && 0 > l(nr, kl)
                              ? ((C[W] = nr), (C[gn] = T), (W = gn))
                              : ((C[W] = kl), (C[yn] = T), (W = yn));
                    else if (gn < G && 0 > l(nr, T))
                         (C[W] = nr), (C[gn] = T), (W = gn);
                    else break e;
               }
          }
          return z;
     }
     function l(C, z) {
          var T = C.sortIndex - z.sortIndex;
          return T !== 0 ? T : C.id - z.id;
     }
     if (
          typeof performance == "object" &&
          typeof performance.now == "function"
     ) {
          var o = performance;
          e.unstable_now = function () {
               return o.now();
          };
     } else {
          var i = Date,
               u = i.now();
          e.unstable_now = function () {
               return i.now() - u;
          };
     }
     var s = [],
          c = [],
          m = 1,
          h = null,
          p = 3,
          g = !1,
          w = !1,
          S = !1,
          F = typeof setTimeout == "function" ? setTimeout : null,
          f = typeof clearTimeout == "function" ? clearTimeout : null,
          a = typeof setImmediate < "u" ? setImmediate : null;
     typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
     function d(C) {
          for (var z = t(c); z !== null; ) {
               if (z.callback === null) r(c);
               else if (z.startTime <= C)
                    r(c), (z.sortIndex = z.expirationTime), n(s, z);
               else break;
               z = t(c);
          }
     }
     function v(C) {
          if (((S = !1), d(C), !w))
               if (t(s) !== null) (w = !0), gl(E);
               else {
                    var z = t(c);
                    z !== null && wl(v, z.startTime - C);
               }
     }
     function E(C, z) {
          (w = !1), S && ((S = !1), f(P), (P = -1)), (g = !0);
          var T = p;
          try {
               for (
                    d(z), h = t(s);
                    h !== null && (!(h.expirationTime > z) || (C && !Pe()));

               ) {
                    var W = h.callback;
                    if (typeof W == "function") {
                         (h.callback = null), (p = h.priorityLevel);
                         var G = W(h.expirationTime <= z);
                         (z = e.unstable_now()),
                              typeof G == "function"
                                   ? (h.callback = G)
                                   : h === t(s) && r(s),
                              d(z);
                    } else r(s);
                    h = t(s);
               }
               if (h !== null) var er = !0;
               else {
                    var yn = t(c);
                    yn !== null && wl(v, yn.startTime - z), (er = !1);
               }
               return er;
          } finally {
               (h = null), (p = T), (g = !1);
          }
     }
     var _ = !1,
          N = null,
          P = -1,
          H = 5,
          j = -1;
     function Pe() {
          return !(e.unstable_now() - j < H);
     }
     function at() {
          if (N !== null) {
               var C = e.unstable_now();
               j = C;
               var z = !0;
               try {
                    z = N(!0, C);
               } finally {
                    z ? ct() : ((_ = !1), (N = null));
               }
          } else _ = !1;
     }
     var ct;
     if (typeof a == "function")
          ct = function () {
               a(at);
          };
     else if (typeof MessageChannel < "u") {
          var Mi = new MessageChannel(),
               lc = Mi.port2;
          (Mi.port1.onmessage = at),
               (ct = function () {
                    lc.postMessage(null);
               });
     } else
          ct = function () {
               F(at, 0);
          };
     function gl(C) {
          (N = C), _ || ((_ = !0), ct());
     }
     function wl(C, z) {
          P = F(function () {
               C(e.unstable_now());
          }, z);
     }
     (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (C) {
               C.callback = null;
          }),
          (e.unstable_continueExecution = function () {
               w || g || ((w = !0), gl(E));
          }),
          (e.unstable_forceFrameRate = function (C) {
               0 > C || 125 < C
                    ? console.error(
                           "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                      )
                    : (H = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
               return p;
          }),
          (e.unstable_getFirstCallbackNode = function () {
               return t(s);
          }),
          (e.unstable_next = function (C) {
               switch (p) {
                    case 1:
                    case 2:
                    case 3:
                         var z = 3;
                         break;
                    default:
                         z = p;
               }
               var T = p;
               p = z;
               try {
                    return C();
               } finally {
                    p = T;
               }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (C, z) {
               switch (C) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                         break;
                    default:
                         C = 3;
               }
               var T = p;
               p = C;
               try {
                    return z();
               } finally {
                    p = T;
               }
          }),
          (e.unstable_scheduleCallback = function (C, z, T) {
               var W = e.unstable_now();
               switch (
                    (typeof T == "object" && T !== null
                         ? ((T = T.delay),
                           (T = typeof T == "number" && 0 < T ? W + T : W))
                         : (T = W),
                    C)
               ) {
                    case 1:
                         var G = -1;
                         break;
                    case 2:
                         G = 250;
                         break;
                    case 5:
                         G = 1073741823;
                         break;
                    case 4:
                         G = 1e4;
                         break;
                    default:
                         G = 5e3;
               }
               return (
                    (G = T + G),
                    (C = {
                         id: m++,
                         callback: z,
                         priorityLevel: C,
                         startTime: T,
                         expirationTime: G,
                         sortIndex: -1,
                    }),
                    T > W
                         ? ((C.sortIndex = T),
                           n(c, C),
                           t(s) === null &&
                                C === t(c) &&
                                (S ? (f(P), (P = -1)) : (S = !0), wl(v, T - W)))
                         : ((C.sortIndex = G),
                           n(s, C),
                           w || g || ((w = !0), gl(E))),
                    C
               );
          }),
          (e.unstable_shouldYield = Pe),
          (e.unstable_wrapCallback = function (C) {
               var z = p;
               return function () {
                    var T = p;
                    p = z;
                    try {
                         return C.apply(this, arguments);
                    } finally {
                         p = T;
                    }
               };
          });
})(rs);
ts.exports = rs;
var Nc = ts.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ls = J,
     ge = Nc;
function y(e) {
     for (
          var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
               t = 1;
          t < arguments.length;
          t++
     )
          n += "&args[]=" + encodeURIComponent(arguments[t]);
     return (
          "Minified React error #" +
          e +
          "; visit " +
          n +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
     );
}
var os = new Set(),
     Rt = {};
function jn(e, n) {
     qn(e, n), qn(e + "Capture", n);
}
function qn(e, n) {
     for (Rt[e] = n, e = 0; e < n.length; e++) os.add(n[e]);
}
var Qe = !(
          typeof window > "u" ||
          typeof window.document > "u" ||
          typeof window.document.createElement > "u"
     ),
     Xl = Object.prototype.hasOwnProperty,
     Pc =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
     $i = {},
     Ai = {};
function zc(e) {
     return Xl.call(Ai, e)
          ? !0
          : Xl.call($i, e)
          ? !1
          : Pc.test(e)
          ? (Ai[e] = !0)
          : (($i[e] = !0), !1);
}
function Tc(e, n, t, r) {
     if (t !== null && t.type === 0) return !1;
     switch (typeof n) {
          case "function":
          case "symbol":
               return !0;
          case "boolean":
               return r
                    ? !1
                    : t !== null
                    ? !t.acceptsBooleans
                    : ((e = e.toLowerCase().slice(0, 5)),
                      e !== "data-" && e !== "aria-");
          default:
               return !1;
     }
}
function Lc(e, n, t, r) {
     if (n === null || typeof n > "u" || Tc(e, n, t, r)) return !0;
     if (r) return !1;
     if (t !== null)
          switch (t.type) {
               case 3:
                    return !n;
               case 4:
                    return n === !1;
               case 5:
                    return isNaN(n);
               case 6:
                    return isNaN(n) || 1 > n;
          }
     return !1;
}
function ae(e, n, t, r, l, o, i) {
     (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
          (this.attributeName = r),
          (this.attributeNamespace = l),
          (this.mustUseProperty = t),
          (this.propertyName = e),
          (this.type = n),
          (this.sanitizeURL = o),
          (this.removeEmptyString = i);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
     .split(" ")
     .forEach(function (e) {
          ne[e] = new ae(e, 0, !1, e, null, !1, !1);
     });
[
     ["acceptCharset", "accept-charset"],
     ["className", "class"],
     ["htmlFor", "for"],
     ["httpEquiv", "http-equiv"],
].forEach(function (e) {
     var n = e[0];
     ne[n] = new ae(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
     ne[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
     "autoReverse",
     "externalResourcesRequired",
     "focusable",
     "preserveAlpha",
].forEach(function (e) {
     ne[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
     .split(" ")
     .forEach(function (e) {
          ne[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
     });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
     ne[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
     ne[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
     ne[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
     ne[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qo = /[\-:]([a-z])/g;
function Ko(e) {
     return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
     .split(" ")
     .forEach(function (e) {
          var n = e.replace(Qo, Ko);
          ne[n] = new ae(n, 1, !1, e, null, !1, !1);
     });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
     .split(" ")
     .forEach(function (e) {
          var n = e.replace(Qo, Ko);
          ne[n] = new ae(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
     });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
     var n = e.replace(Qo, Ko);
     ne[n] = new ae(
          n,
          1,
          !1,
          e,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1
     );
});
["tabIndex", "crossOrigin"].forEach(function (e) {
     ne[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ae(
     "xlinkHref",
     1,
     !1,
     "xlink:href",
     "http://www.w3.org/1999/xlink",
     !0,
     !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
     ne[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yo(e, n, t, r) {
     var l = ne.hasOwnProperty(n) ? ne[n] : null;
     (l !== null
          ? l.type !== 0
          : r ||
            !(2 < n.length) ||
            (n[0] !== "o" && n[0] !== "O") ||
            (n[1] !== "n" && n[1] !== "N")) &&
          (Lc(n, t, l, r) && (t = null),
          r || l === null
               ? zc(n) &&
                 (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
               : l.mustUseProperty
               ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
               : ((n = l.attributeName),
                 (r = l.attributeNamespace),
                 t === null
                      ? e.removeAttribute(n)
                      : ((l = l.type),
                        (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
                        r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ge = ls.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
     rr = Symbol.for("react.element"),
     In = Symbol.for("react.portal"),
     Mn = Symbol.for("react.fragment"),
     Xo = Symbol.for("react.strict_mode"),
     Gl = Symbol.for("react.profiler"),
     is = Symbol.for("react.provider"),
     us = Symbol.for("react.context"),
     Go = Symbol.for("react.forward_ref"),
     Zl = Symbol.for("react.suspense"),
     Jl = Symbol.for("react.suspense_list"),
     Zo = Symbol.for("react.memo"),
     Je = Symbol.for("react.lazy"),
     ss = Symbol.for("react.offscreen"),
     Vi = Symbol.iterator;
function ft(e) {
     return e === null || typeof e != "object"
          ? null
          : ((e = (Vi && e[Vi]) || e["@@iterator"]),
            typeof e == "function" ? e : null);
}
var V = Object.assign,
     xl;
function wt(e) {
     if (xl === void 0)
          try {
               throw Error();
          } catch (t) {
               var n = t.stack.trim().match(/\n( *(at )?)/);
               xl = (n && n[1]) || "";
          }
     return (
          `
` +
          xl +
          e
     );
}
var El = !1;
function Cl(e, n) {
     if (!e || El) return "";
     El = !0;
     var t = Error.prepareStackTrace;
     Error.prepareStackTrace = void 0;
     try {
          if (n)
               if (
                    ((n = function () {
                         throw Error();
                    }),
                    Object.defineProperty(n.prototype, "props", {
                         set: function () {
                              throw Error();
                         },
                    }),
                    typeof Reflect == "object" && Reflect.construct)
               ) {
                    try {
                         Reflect.construct(n, []);
                    } catch (c) {
                         var r = c;
                    }
                    Reflect.construct(e, [], n);
               } else {
                    try {
                         n.call();
                    } catch (c) {
                         r = c;
                    }
                    e.call(n.prototype);
               }
          else {
               try {
                    throw Error();
               } catch (c) {
                    r = c;
               }
               e();
          }
     } catch (c) {
          if (c && r && typeof c.stack == "string") {
               for (
                    var l = c.stack.split(`
`),
                         o = r.stack.split(`
`),
                         i = l.length - 1,
                         u = o.length - 1;
                    1 <= i && 0 <= u && l[i] !== o[u];

               )
                    u--;
               for (; 1 <= i && 0 <= u; i--, u--)
                    if (l[i] !== o[u]) {
                         if (i !== 1 || u !== 1)
                              do
                                   if ((i--, u--, 0 > u || l[i] !== o[u])) {
                                        var s =
                                             `
` + l[i].replace(" at new ", " at ");
                                        return (
                                             e.displayName &&
                                                  s.includes("<anonymous>") &&
                                                  (s = s.replace(
                                                       "<anonymous>",
                                                       e.displayName
                                                  )),
                                             s
                                        );
                                   }
                              while (1 <= i && 0 <= u);
                         break;
                    }
          }
     } finally {
          (El = !1), (Error.prepareStackTrace = t);
     }
     return (e = e ? e.displayName || e.name : "") ? wt(e) : "";
}
function jc(e) {
     switch (e.tag) {
          case 5:
               return wt(e.type);
          case 16:
               return wt("Lazy");
          case 13:
               return wt("Suspense");
          case 19:
               return wt("SuspenseList");
          case 0:
          case 2:
          case 15:
               return (e = Cl(e.type, !1)), e;
          case 11:
               return (e = Cl(e.type.render, !1)), e;
          case 1:
               return (e = Cl(e.type, !0)), e;
          default:
               return "";
     }
}
function ql(e) {
     if (e == null) return null;
     if (typeof e == "function") return e.displayName || e.name || null;
     if (typeof e == "string") return e;
     switch (e) {
          case Mn:
               return "Fragment";
          case In:
               return "Portal";
          case Gl:
               return "Profiler";
          case Xo:
               return "StrictMode";
          case Zl:
               return "Suspense";
          case Jl:
               return "SuspenseList";
     }
     if (typeof e == "object")
          switch (e.$$typeof) {
               case us:
                    return (e.displayName || "Context") + ".Consumer";
               case is:
                    return (e._context.displayName || "Context") + ".Provider";
               case Go:
                    var n = e.render;
                    return (
                         (e = e.displayName),
                         e ||
                              ((e = n.displayName || n.name || ""),
                              (e =
                                   e !== ""
                                        ? "ForwardRef(" + e + ")"
                                        : "ForwardRef")),
                         e
                    );
               case Zo:
                    return (
                         (n = e.displayName || null),
                         n !== null ? n : ql(e.type) || "Memo"
                    );
               case Je:
                    (n = e._payload), (e = e._init);
                    try {
                         return ql(e(n));
                    } catch {}
          }
     return null;
}
function Rc(e) {
     var n = e.type;
     switch (e.tag) {
          case 24:
               return "Cache";
          case 9:
               return (n.displayName || "Context") + ".Consumer";
          case 10:
               return (n._context.displayName || "Context") + ".Provider";
          case 18:
               return "DehydratedFragment";
          case 11:
               return (
                    (e = n.render),
                    (e = e.displayName || e.name || ""),
                    n.displayName ||
                         (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
               );
          case 7:
               return "Fragment";
          case 5:
               return n;
          case 4:
               return "Portal";
          case 3:
               return "Root";
          case 6:
               return "Text";
          case 16:
               return ql(n);
          case 8:
               return n === Xo ? "StrictMode" : "Mode";
          case 22:
               return "Offscreen";
          case 12:
               return "Profiler";
          case 21:
               return "Scope";
          case 13:
               return "Suspense";
          case 19:
               return "SuspenseList";
          case 25:
               return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
               if (typeof n == "function")
                    return n.displayName || n.name || null;
               if (typeof n == "string") return n;
     }
     return null;
}
function dn(e) {
     switch (typeof e) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
               return e;
          case "object":
               return e;
          default:
               return "";
     }
}
function as(e) {
     var n = e.type;
     return (
          (e = e.nodeName) &&
          e.toLowerCase() === "input" &&
          (n === "checkbox" || n === "radio")
     );
}
function Oc(e) {
     var n = as(e) ? "checked" : "value",
          t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
          r = "" + e[n];
     if (
          !e.hasOwnProperty(n) &&
          typeof t < "u" &&
          typeof t.get == "function" &&
          typeof t.set == "function"
     ) {
          var l = t.get,
               o = t.set;
          return (
               Object.defineProperty(e, n, {
                    configurable: !0,
                    get: function () {
                         return l.call(this);
                    },
                    set: function (i) {
                         (r = "" + i), o.call(this, i);
                    },
               }),
               Object.defineProperty(e, n, { enumerable: t.enumerable }),
               {
                    getValue: function () {
                         return r;
                    },
                    setValue: function (i) {
                         r = "" + i;
                    },
                    stopTracking: function () {
                         (e._valueTracker = null), delete e[n];
                    },
               }
          );
     }
}
function lr(e) {
     e._valueTracker || (e._valueTracker = Oc(e));
}
function cs(e) {
     if (!e) return !1;
     var n = e._valueTracker;
     if (!n) return !0;
     var t = n.getValue(),
          r = "";
     return (
          e && (r = as(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r),
          e !== t ? (n.setValue(e), !0) : !1
     );
}
function jr(e) {
     if (
          ((e = e || (typeof document < "u" ? document : void 0)),
          typeof e > "u")
     )
          return null;
     try {
          return e.activeElement || e.body;
     } catch {
          return e.body;
     }
}
function bl(e, n) {
     var t = n.checked;
     return V({}, n, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: t ?? e._wrapperState.initialChecked,
     });
}
function Bi(e, n) {
     var t = n.defaultValue == null ? "" : n.defaultValue,
          r = n.checked != null ? n.checked : n.defaultChecked;
     (t = dn(n.value != null ? n.value : t)),
          (e._wrapperState = {
               initialChecked: r,
               initialValue: t,
               controlled:
                    n.type === "checkbox" || n.type === "radio"
                         ? n.checked != null
                         : n.value != null,
          });
}
function fs(e, n) {
     (n = n.checked), n != null && Yo(e, "checked", n, !1);
}
function eo(e, n) {
     fs(e, n);
     var t = dn(n.value),
          r = n.type;
     if (t != null)
          r === "number"
               ? ((t === 0 && e.value === "") || e.value != t) &&
                 (e.value = "" + t)
               : e.value !== "" + t && (e.value = "" + t);
     else if (r === "submit" || r === "reset") {
          e.removeAttribute("value");
          return;
     }
     n.hasOwnProperty("value")
          ? no(e, n.type, t)
          : n.hasOwnProperty("defaultValue") &&
            no(e, n.type, dn(n.defaultValue)),
          n.checked == null &&
               n.defaultChecked != null &&
               (e.defaultChecked = !!n.defaultChecked);
}
function Hi(e, n, t) {
     if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
          var r = n.type;
          if (
               !(
                    (r !== "submit" && r !== "reset") ||
                    (n.value !== void 0 && n.value !== null)
               )
          )
               return;
          (n = "" + e._wrapperState.initialValue),
               t || n === e.value || (e.value = n),
               (e.defaultValue = n);
     }
     (t = e.name),
          t !== "" && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          t !== "" && (e.name = t);
}
function no(e, n, t) {
     (n !== "number" || jr(e.ownerDocument) !== e) &&
          (t == null
               ? (e.defaultValue = "" + e._wrapperState.initialValue)
               : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var kt = Array.isArray;
function Kn(e, n, t, r) {
     if (((e = e.options), n)) {
          n = {};
          for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
          for (t = 0; t < e.length; t++)
               (l = n.hasOwnProperty("$" + e[t].value)),
                    e[t].selected !== l && (e[t].selected = l),
                    l && r && (e[t].defaultSelected = !0);
     } else {
          for (t = "" + dn(t), n = null, l = 0; l < e.length; l++) {
               if (e[l].value === t) {
                    (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                    return;
               }
               n !== null || e[l].disabled || (n = e[l]);
          }
          n !== null && (n.selected = !0);
     }
}
function to(e, n) {
     if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
     return V({}, n, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
     });
}
function Wi(e, n) {
     var t = n.value;
     if (t == null) {
          if (((t = n.children), (n = n.defaultValue), t != null)) {
               if (n != null) throw Error(y(92));
               if (kt(t)) {
                    if (1 < t.length) throw Error(y(93));
                    t = t[0];
               }
               n = t;
          }
          n == null && (n = ""), (t = n);
     }
     e._wrapperState = { initialValue: dn(t) };
}
function ds(e, n) {
     var t = dn(n.value),
          r = dn(n.defaultValue);
     t != null &&
          ((t = "" + t),
          t !== e.value && (e.value = t),
          n.defaultValue == null &&
               e.defaultValue !== t &&
               (e.defaultValue = t)),
          r != null && (e.defaultValue = "" + r);
}
function Qi(e) {
     var n = e.textContent;
     n === e._wrapperState.initialValue &&
          n !== "" &&
          n !== null &&
          (e.value = n);
}
function ps(e) {
     switch (e) {
          case "svg":
               return "http://www.w3.org/2000/svg";
          case "math":
               return "http://www.w3.org/1998/Math/MathML";
          default:
               return "http://www.w3.org/1999/xhtml";
     }
}
function ro(e, n) {
     return e == null || e === "http://www.w3.org/1999/xhtml"
          ? ps(n)
          : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
}
var or,
     ms = (function (e) {
          return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
               ? function (n, t, r, l) {
                      MSApp.execUnsafeLocalFunction(function () {
                           return e(n, t, r, l);
                      });
                 }
               : e;
     })(function (e, n) {
          if (
               e.namespaceURI !== "http://www.w3.org/2000/svg" ||
               "innerHTML" in e
          )
               e.innerHTML = n;
          else {
               for (
                    or = or || document.createElement("div"),
                         or.innerHTML =
                              "<svg>" + n.valueOf().toString() + "</svg>",
                         n = or.firstChild;
                    e.firstChild;

               )
                    e.removeChild(e.firstChild);
               for (; n.firstChild; ) e.appendChild(n.firstChild);
          }
     });
function Ot(e, n) {
     if (n) {
          var t = e.firstChild;
          if (t && t === e.lastChild && t.nodeType === 3) {
               t.nodeValue = n;
               return;
          }
     }
     e.textContent = n;
}
var Et = {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
     },
     Ic = ["Webkit", "ms", "Moz", "O"];
Object.keys(Et).forEach(function (e) {
     Ic.forEach(function (n) {
          (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Et[n] = Et[e]);
     });
});
function hs(e, n, t) {
     return n == null || typeof n == "boolean" || n === ""
          ? ""
          : t ||
            typeof n != "number" ||
            n === 0 ||
            (Et.hasOwnProperty(e) && Et[e])
          ? ("" + n).trim()
          : n + "px";
}
function vs(e, n) {
     e = e.style;
     for (var t in n)
          if (n.hasOwnProperty(t)) {
               var r = t.indexOf("--") === 0,
                    l = hs(t, n[t], r);
               t === "float" && (t = "cssFloat"),
                    r ? e.setProperty(t, l) : (e[t] = l);
          }
}
var Mc = V(
     { menuitem: !0 },
     {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
     }
);
function lo(e, n) {
     if (n) {
          if (
               Mc[e] &&
               (n.children != null || n.dangerouslySetInnerHTML != null)
          )
               throw Error(y(137, e));
          if (n.dangerouslySetInnerHTML != null) {
               if (n.children != null) throw Error(y(60));
               if (
                    typeof n.dangerouslySetInnerHTML != "object" ||
                    !("__html" in n.dangerouslySetInnerHTML)
               )
                    throw Error(y(61));
          }
          if (n.style != null && typeof n.style != "object") throw Error(y(62));
     }
}
function oo(e, n) {
     if (e.indexOf("-") === -1) return typeof n.is == "string";
     switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
               return !1;
          default:
               return !0;
     }
}
var io = null;
function Jo(e) {
     return (
          (e = e.target || e.srcElement || window),
          e.correspondingUseElement && (e = e.correspondingUseElement),
          e.nodeType === 3 ? e.parentNode : e
     );
}
var uo = null,
     Yn = null,
     Xn = null;
function Ki(e) {
     if ((e = qt(e))) {
          if (typeof uo != "function") throw Error(y(280));
          var n = e.stateNode;
          n && ((n = il(n)), uo(e.stateNode, e.type, n));
     }
}
function ys(e) {
     Yn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Yn = e);
}
function gs() {
     if (Yn) {
          var e = Yn,
               n = Xn;
          if (((Xn = Yn = null), Ki(e), n))
               for (e = 0; e < n.length; e++) Ki(n[e]);
     }
}
function ws(e, n) {
     return e(n);
}
function ks() {}
var _l = !1;
function Ss(e, n, t) {
     if (_l) return e(n, t);
     _l = !0;
     try {
          return ws(e, n, t);
     } finally {
          (_l = !1), (Yn !== null || Xn !== null) && (ks(), gs());
     }
}
function It(e, n) {
     var t = e.stateNode;
     if (t === null) return null;
     var r = il(t);
     if (r === null) return null;
     t = r[n];
     e: switch (n) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
               (r = !r.disabled) ||
                    ((e = e.type),
                    (r = !(
                         e === "button" ||
                         e === "input" ||
                         e === "select" ||
                         e === "textarea"
                    ))),
                    (e = !r);
               break e;
          default:
               e = !1;
     }
     if (e) return null;
     if (t && typeof t != "function") throw Error(y(231, n, typeof t));
     return t;
}
var so = !1;
if (Qe)
     try {
          var dt = {};
          Object.defineProperty(dt, "passive", {
               get: function () {
                    so = !0;
               },
          }),
               window.addEventListener("test", dt, dt),
               window.removeEventListener("test", dt, dt);
     } catch {
          so = !1;
     }
function Dc(e, n, t, r, l, o, i, u, s) {
     var c = Array.prototype.slice.call(arguments, 3);
     try {
          n.apply(t, c);
     } catch (m) {
          this.onError(m);
     }
}
var Ct = !1,
     Rr = null,
     Or = !1,
     ao = null,
     Fc = {
          onError: function (e) {
               (Ct = !0), (Rr = e);
          },
     };
function Uc(e, n, t, r, l, o, i, u, s) {
     (Ct = !1), (Rr = null), Dc.apply(Fc, arguments);
}
function $c(e, n, t, r, l, o, i, u, s) {
     if ((Uc.apply(this, arguments), Ct)) {
          if (Ct) {
               var c = Rr;
               (Ct = !1), (Rr = null);
          } else throw Error(y(198));
          Or || ((Or = !0), (ao = c));
     }
}
function Rn(e) {
     var n = e,
          t = e;
     if (e.alternate) for (; n.return; ) n = n.return;
     else {
          e = n;
          do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
          while (e);
     }
     return n.tag === 3 ? t : null;
}
function xs(e) {
     if (e.tag === 13) {
          var n = e.memoizedState;
          if (
               (n === null &&
                    ((e = e.alternate), e !== null && (n = e.memoizedState)),
               n !== null)
          )
               return n.dehydrated;
     }
     return null;
}
function Yi(e) {
     if (Rn(e) !== e) throw Error(y(188));
}
function Ac(e) {
     var n = e.alternate;
     if (!n) {
          if (((n = Rn(e)), n === null)) throw Error(y(188));
          return n !== e ? null : e;
     }
     for (var t = e, r = n; ; ) {
          var l = t.return;
          if (l === null) break;
          var o = l.alternate;
          if (o === null) {
               if (((r = l.return), r !== null)) {
                    t = r;
                    continue;
               }
               break;
          }
          if (l.child === o.child) {
               for (o = l.child; o; ) {
                    if (o === t) return Yi(l), e;
                    if (o === r) return Yi(l), n;
                    o = o.sibling;
               }
               throw Error(y(188));
          }
          if (t.return !== r.return) (t = l), (r = o);
          else {
               for (var i = !1, u = l.child; u; ) {
                    if (u === t) {
                         (i = !0), (t = l), (r = o);
                         break;
                    }
                    if (u === r) {
                         (i = !0), (r = l), (t = o);
                         break;
                    }
                    u = u.sibling;
               }
               if (!i) {
                    for (u = o.child; u; ) {
                         if (u === t) {
                              (i = !0), (t = o), (r = l);
                              break;
                         }
                         if (u === r) {
                              (i = !0), (r = o), (t = l);
                              break;
                         }
                         u = u.sibling;
                    }
                    if (!i) throw Error(y(189));
               }
          }
          if (t.alternate !== r) throw Error(y(190));
     }
     if (t.tag !== 3) throw Error(y(188));
     return t.stateNode.current === t ? e : n;
}
function Es(e) {
     return (e = Ac(e)), e !== null ? Cs(e) : null;
}
function Cs(e) {
     if (e.tag === 5 || e.tag === 6) return e;
     for (e = e.child; e !== null; ) {
          var n = Cs(e);
          if (n !== null) return n;
          e = e.sibling;
     }
     return null;
}
var _s = ge.unstable_scheduleCallback,
     Xi = ge.unstable_cancelCallback,
     Vc = ge.unstable_shouldYield,
     Bc = ge.unstable_requestPaint,
     Q = ge.unstable_now,
     Hc = ge.unstable_getCurrentPriorityLevel,
     qo = ge.unstable_ImmediatePriority,
     Ns = ge.unstable_UserBlockingPriority,
     Ir = ge.unstable_NormalPriority,
     Wc = ge.unstable_LowPriority,
     Ps = ge.unstable_IdlePriority,
     tl = null,
     Ue = null;
function Qc(e) {
     if (Ue && typeof Ue.onCommitFiberRoot == "function")
          try {
               Ue.onCommitFiberRoot(
                    tl,
                    e,
                    void 0,
                    (e.current.flags & 128) === 128
               );
          } catch {}
}
var Re = Math.clz32 ? Math.clz32 : Xc,
     Kc = Math.log,
     Yc = Math.LN2;
function Xc(e) {
     return (e >>>= 0), e === 0 ? 32 : (31 - ((Kc(e) / Yc) | 0)) | 0;
}
var ir = 64,
     ur = 4194304;
function St(e) {
     switch (e & -e) {
          case 1:
               return 1;
          case 2:
               return 2;
          case 4:
               return 4;
          case 8:
               return 8;
          case 16:
               return 16;
          case 32:
               return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
               return e & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
               return e & 130023424;
          case 134217728:
               return 134217728;
          case 268435456:
               return 268435456;
          case 536870912:
               return 536870912;
          case 1073741824:
               return 1073741824;
          default:
               return e;
     }
}
function Mr(e, n) {
     var t = e.pendingLanes;
     if (t === 0) return 0;
     var r = 0,
          l = e.suspendedLanes,
          o = e.pingedLanes,
          i = t & 268435455;
     if (i !== 0) {
          var u = i & ~l;
          u !== 0 ? (r = St(u)) : ((o &= i), o !== 0 && (r = St(o)));
     } else (i = t & ~l), i !== 0 ? (r = St(i)) : o !== 0 && (r = St(o));
     if (r === 0) return 0;
     if (
          n !== 0 &&
          n !== r &&
          !(n & l) &&
          ((l = r & -r),
          (o = n & -n),
          l >= o || (l === 16 && (o & 4194240) !== 0))
     )
          return n;
     if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
          for (e = e.entanglements, n &= r; 0 < n; )
               (t = 31 - Re(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
     return r;
}
function Gc(e, n) {
     switch (e) {
          case 1:
          case 2:
          case 4:
               return n + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
               return n + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
               return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
               return -1;
          default:
               return -1;
     }
}
function Zc(e, n) {
     for (
          var t = e.suspendedLanes,
               r = e.pingedLanes,
               l = e.expirationTimes,
               o = e.pendingLanes;
          0 < o;

     ) {
          var i = 31 - Re(o),
               u = 1 << i,
               s = l[i];
          s === -1
               ? (!(u & t) || u & r) && (l[i] = Gc(u, n))
               : s <= n && (e.expiredLanes |= u),
               (o &= ~u);
     }
}
function co(e) {
     return (
          (e = e.pendingLanes & -1073741825),
          e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
     );
}
function zs() {
     var e = ir;
     return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function Nl(e) {
     for (var n = [], t = 0; 31 > t; t++) n.push(e);
     return n;
}
function Zt(e, n, t) {
     (e.pendingLanes |= n),
          n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
          (e = e.eventTimes),
          (n = 31 - Re(n)),
          (e[n] = t);
}
function Jc(e, n) {
     var t = e.pendingLanes & ~n;
     (e.pendingLanes = n),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.expiredLanes &= n),
          (e.mutableReadLanes &= n),
          (e.entangledLanes &= n),
          (n = e.entanglements);
     var r = e.eventTimes;
     for (e = e.expirationTimes; 0 < t; ) {
          var l = 31 - Re(t),
               o = 1 << l;
          (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~o);
     }
}
function bo(e, n) {
     var t = (e.entangledLanes |= n);
     for (e = e.entanglements; t; ) {
          var r = 31 - Re(t),
               l = 1 << r;
          (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
     }
}
var O = 0;
function Ts(e) {
     return (
          (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
     );
}
var Ls,
     ei,
     js,
     Rs,
     Os,
     fo = !1,
     sr = [],
     rn = null,
     ln = null,
     on = null,
     Mt = new Map(),
     Dt = new Map(),
     be = [],
     qc =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
               " "
          );
function Gi(e, n) {
     switch (e) {
          case "focusin":
          case "focusout":
               rn = null;
               break;
          case "dragenter":
          case "dragleave":
               ln = null;
               break;
          case "mouseover":
          case "mouseout":
               on = null;
               break;
          case "pointerover":
          case "pointerout":
               Mt.delete(n.pointerId);
               break;
          case "gotpointercapture":
          case "lostpointercapture":
               Dt.delete(n.pointerId);
     }
}
function pt(e, n, t, r, l, o) {
     return e === null || e.nativeEvent !== o
          ? ((e = {
                 blockedOn: n,
                 domEventName: t,
                 eventSystemFlags: r,
                 nativeEvent: o,
                 targetContainers: [l],
            }),
            n !== null && ((n = qt(n)), n !== null && ei(n)),
            e)
          : ((e.eventSystemFlags |= r),
            (n = e.targetContainers),
            l !== null && n.indexOf(l) === -1 && n.push(l),
            e);
}
function bc(e, n, t, r, l) {
     switch (n) {
          case "focusin":
               return (rn = pt(rn, e, n, t, r, l)), !0;
          case "dragenter":
               return (ln = pt(ln, e, n, t, r, l)), !0;
          case "mouseover":
               return (on = pt(on, e, n, t, r, l)), !0;
          case "pointerover":
               var o = l.pointerId;
               return Mt.set(o, pt(Mt.get(o) || null, e, n, t, r, l)), !0;
          case "gotpointercapture":
               return (
                    (o = l.pointerId),
                    Dt.set(o, pt(Dt.get(o) || null, e, n, t, r, l)),
                    !0
               );
     }
     return !1;
}
function Is(e) {
     var n = Sn(e.target);
     if (n !== null) {
          var t = Rn(n);
          if (t !== null) {
               if (((n = t.tag), n === 13)) {
                    if (((n = xs(t)), n !== null)) {
                         (e.blockedOn = n),
                              Os(e.priority, function () {
                                   js(t);
                              });
                         return;
                    }
               } else if (
                    n === 3 &&
                    t.stateNode.current.memoizedState.isDehydrated
               ) {
                    e.blockedOn =
                         t.tag === 3 ? t.stateNode.containerInfo : null;
                    return;
               }
          }
     }
     e.blockedOn = null;
}
function Sr(e) {
     if (e.blockedOn !== null) return !1;
     for (var n = e.targetContainers; 0 < n.length; ) {
          var t = po(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
          if (t === null) {
               t = e.nativeEvent;
               var r = new t.constructor(t.type, t);
               (io = r), t.target.dispatchEvent(r), (io = null);
          } else return (n = qt(t)), n !== null && ei(n), (e.blockedOn = t), !1;
          n.shift();
     }
     return !0;
}
function Zi(e, n, t) {
     Sr(e) && t.delete(n);
}
function ef() {
     (fo = !1),
          rn !== null && Sr(rn) && (rn = null),
          ln !== null && Sr(ln) && (ln = null),
          on !== null && Sr(on) && (on = null),
          Mt.forEach(Zi),
          Dt.forEach(Zi);
}
function mt(e, n) {
     e.blockedOn === n &&
          ((e.blockedOn = null),
          fo ||
               ((fo = !0),
               ge.unstable_scheduleCallback(ge.unstable_NormalPriority, ef)));
}
function Ft(e) {
     function n(l) {
          return mt(l, e);
     }
     if (0 < sr.length) {
          mt(sr[0], e);
          for (var t = 1; t < sr.length; t++) {
               var r = sr[t];
               r.blockedOn === e && (r.blockedOn = null);
          }
     }
     for (
          rn !== null && mt(rn, e),
               ln !== null && mt(ln, e),
               on !== null && mt(on, e),
               Mt.forEach(n),
               Dt.forEach(n),
               t = 0;
          t < be.length;
          t++
     )
          (r = be[t]), r.blockedOn === e && (r.blockedOn = null);
     for (; 0 < be.length && ((t = be[0]), t.blockedOn === null); )
          Is(t), t.blockedOn === null && be.shift();
}
var Gn = Ge.ReactCurrentBatchConfig,
     Dr = !0;
function nf(e, n, t, r) {
     var l = O,
          o = Gn.transition;
     Gn.transition = null;
     try {
          (O = 1), ni(e, n, t, r);
     } finally {
          (O = l), (Gn.transition = o);
     }
}
function tf(e, n, t, r) {
     var l = O,
          o = Gn.transition;
     Gn.transition = null;
     try {
          (O = 4), ni(e, n, t, r);
     } finally {
          (O = l), (Gn.transition = o);
     }
}
function ni(e, n, t, r) {
     if (Dr) {
          var l = po(e, n, t, r);
          if (l === null) Dl(e, n, r, Fr, t), Gi(e, r);
          else if (bc(l, e, n, t, r)) r.stopPropagation();
          else if ((Gi(e, r), n & 4 && -1 < qc.indexOf(e))) {
               for (; l !== null; ) {
                    var o = qt(l);
                    if (
                         (o !== null && Ls(o),
                         (o = po(e, n, t, r)),
                         o === null && Dl(e, n, r, Fr, t),
                         o === l)
                    )
                         break;
                    l = o;
               }
               l !== null && r.stopPropagation();
          } else Dl(e, n, r, null, t);
     }
}
var Fr = null;
function po(e, n, t, r) {
     if (((Fr = null), (e = Jo(r)), (e = Sn(e)), e !== null))
          if (((n = Rn(e)), n === null)) e = null;
          else if (((t = n.tag), t === 13)) {
               if (((e = xs(n)), e !== null)) return e;
               e = null;
          } else if (t === 3) {
               if (n.stateNode.current.memoizedState.isDehydrated)
                    return n.tag === 3 ? n.stateNode.containerInfo : null;
               e = null;
          } else n !== e && (e = null);
     return (Fr = e), null;
}
function Ms(e) {
     switch (e) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
               return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
               return 4;
          case "message":
               switch (Hc()) {
                    case qo:
                         return 1;
                    case Ns:
                         return 4;
                    case Ir:
                    case Wc:
                         return 16;
                    case Ps:
                         return 536870912;
                    default:
                         return 16;
               }
          default:
               return 16;
     }
}
var nn = null,
     ti = null,
     xr = null;
function Ds() {
     if (xr) return xr;
     var e,
          n = ti,
          t = n.length,
          r,
          l = "value" in nn ? nn.value : nn.textContent,
          o = l.length;
     for (e = 0; e < t && n[e] === l[e]; e++);
     var i = t - e;
     for (r = 1; r <= i && n[t - r] === l[o - r]; r++);
     return (xr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Er(e) {
     var n = e.keyCode;
     return (
          "charCode" in e
               ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
               : (e = n),
          e === 10 && (e = 13),
          32 <= e || e === 13 ? e : 0
     );
}
function ar() {
     return !0;
}
function Ji() {
     return !1;
}
function ke(e) {
     function n(t, r, l, o, i) {
          (this._reactName = t),
               (this._targetInst = l),
               (this.type = r),
               (this.nativeEvent = o),
               (this.target = i),
               (this.currentTarget = null);
          for (var u in e)
               e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(o) : o[u]));
          return (
               (this.isDefaultPrevented = (
                    o.defaultPrevented != null
                         ? o.defaultPrevented
                         : o.returnValue === !1
               )
                    ? ar
                    : Ji),
               (this.isPropagationStopped = Ji),
               this
          );
     }
     return (
          V(n.prototype, {
               preventDefault: function () {
                    this.defaultPrevented = !0;
                    var t = this.nativeEvent;
                    t &&
                         (t.preventDefault
                              ? t.preventDefault()
                              : typeof t.returnValue != "unknown" &&
                                (t.returnValue = !1),
                         (this.isDefaultPrevented = ar));
               },
               stopPropagation: function () {
                    var t = this.nativeEvent;
                    t &&
                         (t.stopPropagation
                              ? t.stopPropagation()
                              : typeof t.cancelBubble != "unknown" &&
                                (t.cancelBubble = !0),
                         (this.isPropagationStopped = ar));
               },
               persist: function () {},
               isPersistent: ar,
          }),
          n
     );
}
var it = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
               return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
     },
     ri = ke(it),
     Jt = V({}, it, { view: 0, detail: 0 }),
     rf = ke(Jt),
     Pl,
     zl,
     ht,
     rl = V({}, Jt, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: li,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
               return e.relatedTarget === void 0
                    ? e.fromElement === e.srcElement
                         ? e.toElement
                         : e.fromElement
                    : e.relatedTarget;
          },
          movementX: function (e) {
               return "movementX" in e
                    ? e.movementX
                    : (e !== ht &&
                           (ht && e.type === "mousemove"
                                ? ((Pl = e.screenX - ht.screenX),
                                  (zl = e.screenY - ht.screenY))
                                : (zl = Pl = 0),
                           (ht = e)),
                      Pl);
          },
          movementY: function (e) {
               return "movementY" in e ? e.movementY : zl;
          },
     }),
     qi = ke(rl),
     lf = V({}, rl, { dataTransfer: 0 }),
     of = ke(lf),
     uf = V({}, Jt, { relatedTarget: 0 }),
     Tl = ke(uf),
     sf = V({}, it, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
     af = ke(sf),
     cf = V({}, it, {
          clipboardData: function (e) {
               return "clipboardData" in e
                    ? e.clipboardData
                    : window.clipboardData;
          },
     }),
     ff = ke(cf),
     df = V({}, it, { data: 0 }),
     bi = ke(df),
     pf = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
     },
     mf = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
     },
     hf = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
     };
function vf(e) {
     var n = this.nativeEvent;
     return n.getModifierState
          ? n.getModifierState(e)
          : (e = hf[e])
          ? !!n[e]
          : !1;
}
function li() {
     return vf;
}
var yf = V({}, Jt, {
          key: function (e) {
               if (e.key) {
                    var n = pf[e.key] || e.key;
                    if (n !== "Unidentified") return n;
               }
               return e.type === "keypress"
                    ? ((e = Er(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                    : e.type === "keydown" || e.type === "keyup"
                    ? mf[e.keyCode] || "Unidentified"
                    : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: li,
          charCode: function (e) {
               return e.type === "keypress" ? Er(e) : 0;
          },
          keyCode: function (e) {
               return e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0;
          },
          which: function (e) {
               return e.type === "keypress"
                    ? Er(e)
                    : e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0;
          },
     }),
     gf = ke(yf),
     wf = V({}, rl, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
     }),
     eu = ke(wf),
     kf = V({}, Jt, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: li,
     }),
     Sf = ke(kf),
     xf = V({}, it, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
     Ef = ke(xf),
     Cf = V({}, rl, {
          deltaX: function (e) {
               return "deltaX" in e
                    ? e.deltaX
                    : "wheelDeltaX" in e
                    ? -e.wheelDeltaX
                    : 0;
          },
          deltaY: function (e) {
               return "deltaY" in e
                    ? e.deltaY
                    : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
     }),
     _f = ke(Cf),
     Nf = [9, 13, 27, 32],
     oi = Qe && "CompositionEvent" in window,
     _t = null;
Qe && "documentMode" in document && (_t = document.documentMode);
var Pf = Qe && "TextEvent" in window && !_t,
     Fs = Qe && (!oi || (_t && 8 < _t && 11 >= _t)),
     nu = String.fromCharCode(32),
     tu = !1;
function Us(e, n) {
     switch (e) {
          case "keyup":
               return Nf.indexOf(n.keyCode) !== -1;
          case "keydown":
               return n.keyCode !== 229;
          case "keypress":
          case "mousedown":
          case "focusout":
               return !0;
          default:
               return !1;
     }
}
function $s(e) {
     return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function zf(e, n) {
     switch (e) {
          case "compositionend":
               return $s(n);
          case "keypress":
               return n.which !== 32 ? null : ((tu = !0), nu);
          case "textInput":
               return (e = n.data), e === nu && tu ? null : e;
          default:
               return null;
     }
}
function Tf(e, n) {
     if (Dn)
          return e === "compositionend" || (!oi && Us(e, n))
               ? ((e = Ds()), (xr = ti = nn = null), (Dn = !1), e)
               : null;
     switch (e) {
          case "paste":
               return null;
          case "keypress":
               if (
                    !(n.ctrlKey || n.altKey || n.metaKey) ||
                    (n.ctrlKey && n.altKey)
               ) {
                    if (n.char && 1 < n.char.length) return n.char;
                    if (n.which) return String.fromCharCode(n.which);
               }
               return null;
          case "compositionend":
               return Fs && n.locale !== "ko" ? null : n.data;
          default:
               return null;
     }
}
var Lf = {
     color: !0,
     date: !0,
     datetime: !0,
     "datetime-local": !0,
     email: !0,
     month: !0,
     number: !0,
     password: !0,
     range: !0,
     search: !0,
     tel: !0,
     text: !0,
     time: !0,
     url: !0,
     week: !0,
};
function ru(e) {
     var n = e && e.nodeName && e.nodeName.toLowerCase();
     return n === "input" ? !!Lf[e.type] : n === "textarea";
}
function As(e, n, t, r) {
     ys(r),
          (n = Ur(n, "onChange")),
          0 < n.length &&
               ((t = new ri("onChange", "change", null, t, r)),
               e.push({ event: t, listeners: n }));
}
var Nt = null,
     Ut = null;
function jf(e) {
     Js(e, 0);
}
function ll(e) {
     var n = $n(e);
     if (cs(n)) return e;
}
function Rf(e, n) {
     if (e === "change") return n;
}
var Vs = !1;
if (Qe) {
     var Ll;
     if (Qe) {
          var jl = "oninput" in document;
          if (!jl) {
               var lu = document.createElement("div");
               lu.setAttribute("oninput", "return;"),
                    (jl = typeof lu.oninput == "function");
          }
          Ll = jl;
     } else Ll = !1;
     Vs = Ll && (!document.documentMode || 9 < document.documentMode);
}
function ou() {
     Nt && (Nt.detachEvent("onpropertychange", Bs), (Ut = Nt = null));
}
function Bs(e) {
     if (e.propertyName === "value" && ll(Ut)) {
          var n = [];
          As(n, Ut, e, Jo(e)), Ss(jf, n);
     }
}
function Of(e, n, t) {
     e === "focusin"
          ? (ou(), (Nt = n), (Ut = t), Nt.attachEvent("onpropertychange", Bs))
          : e === "focusout" && ou();
}
function If(e) {
     if (e === "selectionchange" || e === "keyup" || e === "keydown")
          return ll(Ut);
}
function Mf(e, n) {
     if (e === "click") return ll(n);
}
function Df(e, n) {
     if (e === "input" || e === "change") return ll(n);
}
function Ff(e, n) {
     return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Ie = typeof Object.is == "function" ? Object.is : Ff;
function $t(e, n) {
     if (Ie(e, n)) return !0;
     if (
          typeof e != "object" ||
          e === null ||
          typeof n != "object" ||
          n === null
     )
          return !1;
     var t = Object.keys(e),
          r = Object.keys(n);
     if (t.length !== r.length) return !1;
     for (r = 0; r < t.length; r++) {
          var l = t[r];
          if (!Xl.call(n, l) || !Ie(e[l], n[l])) return !1;
     }
     return !0;
}
function iu(e) {
     for (; e && e.firstChild; ) e = e.firstChild;
     return e;
}
function uu(e, n) {
     var t = iu(e);
     e = 0;
     for (var r; t; ) {
          if (t.nodeType === 3) {
               if (((r = e + t.textContent.length), e <= n && r >= n))
                    return { node: t, offset: n - e };
               e = r;
          }
          e: {
               for (; t; ) {
                    if (t.nextSibling) {
                         t = t.nextSibling;
                         break e;
                    }
                    t = t.parentNode;
               }
               t = void 0;
          }
          t = iu(t);
     }
}
function Hs(e, n) {
     return e && n
          ? e === n
               ? !0
               : e && e.nodeType === 3
               ? !1
               : n && n.nodeType === 3
               ? Hs(e, n.parentNode)
               : "contains" in e
               ? e.contains(n)
               : e.compareDocumentPosition
               ? !!(e.compareDocumentPosition(n) & 16)
               : !1
          : !1;
}
function Ws() {
     for (var e = window, n = jr(); n instanceof e.HTMLIFrameElement; ) {
          try {
               var t = typeof n.contentWindow.location.href == "string";
          } catch {
               t = !1;
          }
          if (t) e = n.contentWindow;
          else break;
          n = jr(e.document);
     }
     return n;
}
function ii(e) {
     var n = e && e.nodeName && e.nodeName.toLowerCase();
     return (
          n &&
          ((n === "input" &&
               (e.type === "text" ||
                    e.type === "search" ||
                    e.type === "tel" ||
                    e.type === "url" ||
                    e.type === "password")) ||
               n === "textarea" ||
               e.contentEditable === "true")
     );
}
function Uf(e) {
     var n = Ws(),
          t = e.focusedElem,
          r = e.selectionRange;
     if (
          n !== t &&
          t &&
          t.ownerDocument &&
          Hs(t.ownerDocument.documentElement, t)
     ) {
          if (r !== null && ii(t)) {
               if (
                    ((n = r.start),
                    (e = r.end),
                    e === void 0 && (e = n),
                    "selectionStart" in t)
               )
                    (t.selectionStart = n),
                         (t.selectionEnd = Math.min(e, t.value.length));
               else if (
                    ((e =
                         ((n = t.ownerDocument || document) && n.defaultView) ||
                         window),
                    e.getSelection)
               ) {
                    e = e.getSelection();
                    var l = t.textContent.length,
                         o = Math.min(r.start, l);
                    (r = r.end === void 0 ? o : Math.min(r.end, l)),
                         !e.extend && o > r && ((l = r), (r = o), (o = l)),
                         (l = uu(t, o));
                    var i = uu(t, r);
                    l &&
                         i &&
                         (e.rangeCount !== 1 ||
                              e.anchorNode !== l.node ||
                              e.anchorOffset !== l.offset ||
                              e.focusNode !== i.node ||
                              e.focusOffset !== i.offset) &&
                         ((n = n.createRange()),
                         n.setStart(l.node, l.offset),
                         e.removeAllRanges(),
                         o > r
                              ? (e.addRange(n), e.extend(i.node, i.offset))
                              : (n.setEnd(i.node, i.offset), e.addRange(n)));
               }
          }
          for (n = [], e = t; (e = e.parentNode); )
               e.nodeType === 1 &&
                    n.push({
                         element: e,
                         left: e.scrollLeft,
                         top: e.scrollTop,
                    });
          for (
               typeof t.focus == "function" && t.focus(), t = 0;
               t < n.length;
               t++
          )
               (e = n[t]),
                    (e.element.scrollLeft = e.left),
                    (e.element.scrollTop = e.top);
     }
}
var $f = Qe && "documentMode" in document && 11 >= document.documentMode,
     Fn = null,
     mo = null,
     Pt = null,
     ho = !1;
function su(e, n, t) {
     var r =
          t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
     ho ||
          Fn == null ||
          Fn !== jr(r) ||
          ((r = Fn),
          "selectionStart" in r && ii(r)
               ? (r = { start: r.selectionStart, end: r.selectionEnd })
               : ((r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                 ).getSelection()),
                 (r = {
                      anchorNode: r.anchorNode,
                      anchorOffset: r.anchorOffset,
                      focusNode: r.focusNode,
                      focusOffset: r.focusOffset,
                 })),
          (Pt && $t(Pt, r)) ||
               ((Pt = r),
               (r = Ur(mo, "onSelect")),
               0 < r.length &&
                    ((n = new ri("onSelect", "select", null, n, t)),
                    e.push({ event: n, listeners: r }),
                    (n.target = Fn))));
}
function cr(e, n) {
     var t = {};
     return (
          (t[e.toLowerCase()] = n.toLowerCase()),
          (t["Webkit" + e] = "webkit" + n),
          (t["Moz" + e] = "moz" + n),
          t
     );
}
var Un = {
          animationend: cr("Animation", "AnimationEnd"),
          animationiteration: cr("Animation", "AnimationIteration"),
          animationstart: cr("Animation", "AnimationStart"),
          transitionend: cr("Transition", "TransitionEnd"),
     },
     Rl = {},
     Qs = {};
Qe &&
     ((Qs = document.createElement("div").style),
     "AnimationEvent" in window ||
          (delete Un.animationend.animation,
          delete Un.animationiteration.animation,
          delete Un.animationstart.animation),
     "TransitionEvent" in window || delete Un.transitionend.transition);
function ol(e) {
     if (Rl[e]) return Rl[e];
     if (!Un[e]) return e;
     var n = Un[e],
          t;
     for (t in n) if (n.hasOwnProperty(t) && t in Qs) return (Rl[e] = n[t]);
     return e;
}
var Ks = ol("animationend"),
     Ys = ol("animationiteration"),
     Xs = ol("animationstart"),
     Gs = ol("transitionend"),
     Zs = new Map(),
     au =
          "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
               " "
          );
function mn(e, n) {
     Zs.set(e, n), jn(n, [e]);
}
for (var Ol = 0; Ol < au.length; Ol++) {
     var Il = au[Ol],
          Af = Il.toLowerCase(),
          Vf = Il[0].toUpperCase() + Il.slice(1);
     mn(Af, "on" + Vf);
}
mn(Ks, "onAnimationEnd");
mn(Ys, "onAnimationIteration");
mn(Xs, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(Gs, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
jn(
     "onChange",
     "change click focusin focusout input keydown keyup selectionchange".split(
          " "
     )
);
jn(
     "onSelect",
     "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " "
     )
);
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn(
     "onCompositionEnd",
     "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
jn(
     "onCompositionStart",
     "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
jn(
     "onCompositionUpdate",
     "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xt =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
               " "
          ),
     Bf = new Set(
          "cancel close invalid load scroll toggle".split(" ").concat(xt)
     );
function cu(e, n, t) {
     var r = e.type || "unknown-event";
     (e.currentTarget = t), $c(r, n, void 0, e), (e.currentTarget = null);
}
function Js(e, n) {
     n = (n & 4) !== 0;
     for (var t = 0; t < e.length; t++) {
          var r = e[t],
               l = r.event;
          r = r.listeners;
          e: {
               var o = void 0;
               if (n)
                    for (var i = r.length - 1; 0 <= i; i--) {
                         var u = r[i],
                              s = u.instance,
                              c = u.currentTarget;
                         if (
                              ((u = u.listener),
                              s !== o && l.isPropagationStopped())
                         )
                              break e;
                         cu(l, u, c), (o = s);
                    }
               else
                    for (i = 0; i < r.length; i++) {
                         if (
                              ((u = r[i]),
                              (s = u.instance),
                              (c = u.currentTarget),
                              (u = u.listener),
                              s !== o && l.isPropagationStopped())
                         )
                              break e;
                         cu(l, u, c), (o = s);
                    }
          }
     }
     if (Or) throw ((e = ao), (Or = !1), (ao = null), e);
}
function M(e, n) {
     var t = n[ko];
     t === void 0 && (t = n[ko] = new Set());
     var r = e + "__bubble";
     t.has(r) || (qs(n, e, 2, !1), t.add(r));
}
function Ml(e, n, t) {
     var r = 0;
     n && (r |= 4), qs(t, e, r, n);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function At(e) {
     if (!e[fr]) {
          (e[fr] = !0),
               os.forEach(function (t) {
                    t !== "selectionchange" &&
                         (Bf.has(t) || Ml(t, !1, e), Ml(t, !0, e));
               });
          var n = e.nodeType === 9 ? e : e.ownerDocument;
          n === null || n[fr] || ((n[fr] = !0), Ml("selectionchange", !1, n));
     }
}
function qs(e, n, t, r) {
     switch (Ms(n)) {
          case 1:
               var l = nf;
               break;
          case 4:
               l = tf;
               break;
          default:
               l = ni;
     }
     (t = l.bind(null, n, t, e)),
          (l = void 0),
          !so ||
               (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
               (l = !0),
          r
               ? l !== void 0
                    ? e.addEventListener(n, t, { capture: !0, passive: l })
                    : e.addEventListener(n, t, !0)
               : l !== void 0
               ? e.addEventListener(n, t, { passive: l })
               : e.addEventListener(n, t, !1);
}
function Dl(e, n, t, r, l) {
     var o = r;
     if (!(n & 1) && !(n & 2) && r !== null)
          e: for (;;) {
               if (r === null) return;
               var i = r.tag;
               if (i === 3 || i === 4) {
                    var u = r.stateNode.containerInfo;
                    if (u === l || (u.nodeType === 8 && u.parentNode === l))
                         break;
                    if (i === 4)
                         for (i = r.return; i !== null; ) {
                              var s = i.tag;
                              if (
                                   (s === 3 || s === 4) &&
                                   ((s = i.stateNode.containerInfo),
                                   s === l ||
                                        (s.nodeType === 8 &&
                                             s.parentNode === l))
                              )
                                   return;
                              i = i.return;
                         }
                    for (; u !== null; ) {
                         if (((i = Sn(u)), i === null)) return;
                         if (((s = i.tag), s === 5 || s === 6)) {
                              r = o = i;
                              continue e;
                         }
                         u = u.parentNode;
                    }
               }
               r = r.return;
          }
     Ss(function () {
          var c = o,
               m = Jo(t),
               h = [];
          e: {
               var p = Zs.get(e);
               if (p !== void 0) {
                    var g = ri,
                         w = e;
                    switch (e) {
                         case "keypress":
                              if (Er(t) === 0) break e;
                         case "keydown":
                         case "keyup":
                              g = gf;
                              break;
                         case "focusin":
                              (w = "focus"), (g = Tl);
                              break;
                         case "focusout":
                              (w = "blur"), (g = Tl);
                              break;
                         case "beforeblur":
                         case "afterblur":
                              g = Tl;
                              break;
                         case "click":
                              if (t.button === 2) break e;
                         case "auxclick":
                         case "dblclick":
                         case "mousedown":
                         case "mousemove":
                         case "mouseup":
                         case "mouseout":
                         case "mouseover":
                         case "contextmenu":
                              g = qi;
                              break;
                         case "drag":
                         case "dragend":
                         case "dragenter":
                         case "dragexit":
                         case "dragleave":
                         case "dragover":
                         case "dragstart":
                         case "drop":
                              g = of;
                              break;
                         case "touchcancel":
                         case "touchend":
                         case "touchmove":
                         case "touchstart":
                              g = Sf;
                              break;
                         case Ks:
                         case Ys:
                         case Xs:
                              g = af;
                              break;
                         case Gs:
                              g = Ef;
                              break;
                         case "scroll":
                              g = rf;
                              break;
                         case "wheel":
                              g = _f;
                              break;
                         case "copy":
                         case "cut":
                         case "paste":
                              g = ff;
                              break;
                         case "gotpointercapture":
                         case "lostpointercapture":
                         case "pointercancel":
                         case "pointerdown":
                         case "pointermove":
                         case "pointerout":
                         case "pointerover":
                         case "pointerup":
                              g = eu;
                    }
                    var S = (n & 4) !== 0,
                         F = !S && e === "scroll",
                         f = S ? (p !== null ? p + "Capture" : null) : p;
                    S = [];
                    for (var a = c, d; a !== null; ) {
                         d = a;
                         var v = d.stateNode;
                         if (
                              (d.tag === 5 &&
                                   v !== null &&
                                   ((d = v),
                                   f !== null &&
                                        ((v = It(a, f)),
                                        v != null && S.push(Vt(a, v, d)))),
                              F)
                         )
                              break;
                         a = a.return;
                    }
                    0 < S.length &&
                         ((p = new g(p, w, null, t, m)),
                         h.push({ event: p, listeners: S }));
               }
          }
          if (!(n & 7)) {
               e: {
                    if (
                         ((p = e === "mouseover" || e === "pointerover"),
                         (g = e === "mouseout" || e === "pointerout"),
                         p &&
                              t !== io &&
                              (w = t.relatedTarget || t.fromElement) &&
                              (Sn(w) || w[Ke]))
                    )
                         break e;
                    if (
                         (g || p) &&
                         ((p =
                              m.window === m
                                   ? m
                                   : (p = m.ownerDocument)
                                   ? p.defaultView || p.parentWindow
                                   : window),
                         g
                              ? ((w = t.relatedTarget || t.toElement),
                                (g = c),
                                (w = w ? Sn(w) : null),
                                w !== null &&
                                     ((F = Rn(w)),
                                     w !== F || (w.tag !== 5 && w.tag !== 6)) &&
                                     (w = null))
                              : ((g = null), (w = c)),
                         g !== w)
                    ) {
                         if (
                              ((S = qi),
                              (v = "onMouseLeave"),
                              (f = "onMouseEnter"),
                              (a = "mouse"),
                              (e === "pointerout" || e === "pointerover") &&
                                   ((S = eu),
                                   (v = "onPointerLeave"),
                                   (f = "onPointerEnter"),
                                   (a = "pointer")),
                              (F = g == null ? p : $n(g)),
                              (d = w == null ? p : $n(w)),
                              (p = new S(v, a + "leave", g, t, m)),
                              (p.target = F),
                              (p.relatedTarget = d),
                              (v = null),
                              Sn(m) === c &&
                                   ((S = new S(f, a + "enter", w, t, m)),
                                   (S.target = d),
                                   (S.relatedTarget = F),
                                   (v = S)),
                              (F = v),
                              g && w)
                         )
                              n: {
                                   for (
                                        S = g, f = w, a = 0, d = S;
                                        d;
                                        d = On(d)
                                   )
                                        a++;
                                   for (d = 0, v = f; v; v = On(v)) d++;
                                   for (; 0 < a - d; ) (S = On(S)), a--;
                                   for (; 0 < d - a; ) (f = On(f)), d--;
                                   for (; a--; ) {
                                        if (
                                             S === f ||
                                             (f !== null && S === f.alternate)
                                        )
                                             break n;
                                        (S = On(S)), (f = On(f));
                                   }
                                   S = null;
                              }
                         else S = null;
                         g !== null && fu(h, p, g, S, !1),
                              w !== null && F !== null && fu(h, F, w, S, !0);
                    }
               }
               e: {
                    if (
                         ((p = c ? $n(c) : window),
                         (g = p.nodeName && p.nodeName.toLowerCase()),
                         g === "select" || (g === "input" && p.type === "file"))
                    )
                         var E = Rf;
                    else if (ru(p))
                         if (Vs) E = Df;
                         else {
                              E = If;
                              var _ = Of;
                         }
                    else
                         (g = p.nodeName) &&
                              g.toLowerCase() === "input" &&
                              (p.type === "checkbox" || p.type === "radio") &&
                              (E = Mf);
                    if (E && (E = E(e, c))) {
                         As(h, E, t, m);
                         break e;
                    }
                    _ && _(e, p, c),
                         e === "focusout" &&
                              (_ = p._wrapperState) &&
                              _.controlled &&
                              p.type === "number" &&
                              no(p, "number", p.value);
               }
               switch (((_ = c ? $n(c) : window), e)) {
                    case "focusin":
                         (ru(_) || _.contentEditable === "true") &&
                              ((Fn = _), (mo = c), (Pt = null));
                         break;
                    case "focusout":
                         Pt = mo = Fn = null;
                         break;
                    case "mousedown":
                         ho = !0;
                         break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                         (ho = !1), su(h, t, m);
                         break;
                    case "selectionchange":
                         if ($f) break;
                    case "keydown":
                    case "keyup":
                         su(h, t, m);
               }
               var N;
               if (oi)
                    e: {
                         switch (e) {
                              case "compositionstart":
                                   var P = "onCompositionStart";
                                   break e;
                              case "compositionend":
                                   P = "onCompositionEnd";
                                   break e;
                              case "compositionupdate":
                                   P = "onCompositionUpdate";
                                   break e;
                         }
                         P = void 0;
                    }
               else
                    Dn
                         ? Us(e, t) && (P = "onCompositionEnd")
                         : e === "keydown" &&
                           t.keyCode === 229 &&
                           (P = "onCompositionStart");
               P &&
                    (Fs &&
                         t.locale !== "ko" &&
                         (Dn || P !== "onCompositionStart"
                              ? P === "onCompositionEnd" && Dn && (N = Ds())
                              : ((nn = m),
                                (ti =
                                     "value" in nn ? nn.value : nn.textContent),
                                (Dn = !0))),
                    (_ = Ur(c, P)),
                    0 < _.length &&
                         ((P = new bi(P, e, null, t, m)),
                         h.push({ event: P, listeners: _ }),
                         N
                              ? (P.data = N)
                              : ((N = $s(t)), N !== null && (P.data = N)))),
                    (N = Pf ? zf(e, t) : Tf(e, t)) &&
                         ((c = Ur(c, "onBeforeInput")),
                         0 < c.length &&
                              ((m = new bi(
                                   "onBeforeInput",
                                   "beforeinput",
                                   null,
                                   t,
                                   m
                              )),
                              h.push({ event: m, listeners: c }),
                              (m.data = N)));
          }
          Js(h, n);
     });
}
function Vt(e, n, t) {
     return { instance: e, listener: n, currentTarget: t };
}
function Ur(e, n) {
     for (var t = n + "Capture", r = []; e !== null; ) {
          var l = e,
               o = l.stateNode;
          l.tag === 5 &&
               o !== null &&
               ((l = o),
               (o = It(e, t)),
               o != null && r.unshift(Vt(e, o, l)),
               (o = It(e, n)),
               o != null && r.push(Vt(e, o, l))),
               (e = e.return);
     }
     return r;
}
function On(e) {
     if (e === null) return null;
     do e = e.return;
     while (e && e.tag !== 5);
     return e || null;
}
function fu(e, n, t, r, l) {
     for (var o = n._reactName, i = []; t !== null && t !== r; ) {
          var u = t,
               s = u.alternate,
               c = u.stateNode;
          if (s !== null && s === r) break;
          u.tag === 5 &&
               c !== null &&
               ((u = c),
               l
                    ? ((s = It(t, o)), s != null && i.unshift(Vt(t, s, u)))
                    : l || ((s = It(t, o)), s != null && i.push(Vt(t, s, u)))),
               (t = t.return);
     }
     i.length !== 0 && e.push({ event: n, listeners: i });
}
var Hf = /\r\n?/g,
     Wf = /\u0000|\uFFFD/g;
function du(e) {
     return (typeof e == "string" ? e : "" + e)
          .replace(
               Hf,
               `
`
          )
          .replace(Wf, "");
}
function dr(e, n, t) {
     if (((n = du(n)), du(e) !== n && t)) throw Error(y(425));
}
function $r() {}
var vo = null,
     yo = null;
function go(e, n) {
     return (
          e === "textarea" ||
          e === "noscript" ||
          typeof n.children == "string" ||
          typeof n.children == "number" ||
          (typeof n.dangerouslySetInnerHTML == "object" &&
               n.dangerouslySetInnerHTML !== null &&
               n.dangerouslySetInnerHTML.__html != null)
     );
}
var wo = typeof setTimeout == "function" ? setTimeout : void 0,
     Qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
     pu = typeof Promise == "function" ? Promise : void 0,
     Kf =
          typeof queueMicrotask == "function"
               ? queueMicrotask
               : typeof pu < "u"
               ? function (e) {
                      return pu.resolve(null).then(e).catch(Yf);
                 }
               : wo;
function Yf(e) {
     setTimeout(function () {
          throw e;
     });
}
function Fl(e, n) {
     var t = n,
          r = 0;
     do {
          var l = t.nextSibling;
          if ((e.removeChild(t), l && l.nodeType === 8))
               if (((t = l.data), t === "/$")) {
                    if (r === 0) {
                         e.removeChild(l), Ft(n);
                         return;
                    }
                    r--;
               } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
          t = l;
     } while (t);
     Ft(n);
}
function un(e) {
     for (; e != null; e = e.nextSibling) {
          var n = e.nodeType;
          if (n === 1 || n === 3) break;
          if (n === 8) {
               if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
               if (n === "/$") return null;
          }
     }
     return e;
}
function mu(e) {
     e = e.previousSibling;
     for (var n = 0; e; ) {
          if (e.nodeType === 8) {
               var t = e.data;
               if (t === "$" || t === "$!" || t === "$?") {
                    if (n === 0) return e;
                    n--;
               } else t === "/$" && n++;
          }
          e = e.previousSibling;
     }
     return null;
}
var ut = Math.random().toString(36).slice(2),
     Fe = "__reactFiber$" + ut,
     Bt = "__reactProps$" + ut,
     Ke = "__reactContainer$" + ut,
     ko = "__reactEvents$" + ut,
     Xf = "__reactListeners$" + ut,
     Gf = "__reactHandles$" + ut;
function Sn(e) {
     var n = e[Fe];
     if (n) return n;
     for (var t = e.parentNode; t; ) {
          if ((n = t[Ke] || t[Fe])) {
               if (
                    ((t = n.alternate),
                    n.child !== null || (t !== null && t.child !== null))
               )
                    for (e = mu(e); e !== null; ) {
                         if ((t = e[Fe])) return t;
                         e = mu(e);
                    }
               return n;
          }
          (e = t), (t = e.parentNode);
     }
     return null;
}
function qt(e) {
     return (
          (e = e[Fe] || e[Ke]),
          !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
               ? null
               : e
     );
}
function $n(e) {
     if (e.tag === 5 || e.tag === 6) return e.stateNode;
     throw Error(y(33));
}
function il(e) {
     return e[Bt] || null;
}
var So = [],
     An = -1;
function hn(e) {
     return { current: e };
}
function D(e) {
     0 > An || ((e.current = So[An]), (So[An] = null), An--);
}
function I(e, n) {
     An++, (So[An] = e.current), (e.current = n);
}
var pn = {},
     oe = hn(pn),
     de = hn(!1),
     Nn = pn;
function bn(e, n) {
     var t = e.type.contextTypes;
     if (!t) return pn;
     var r = e.stateNode;
     if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
          return r.__reactInternalMemoizedMaskedChildContext;
     var l = {},
          o;
     for (o in t) l[o] = n[o];
     return (
          r &&
               ((e = e.stateNode),
               (e.__reactInternalMemoizedUnmaskedChildContext = n),
               (e.__reactInternalMemoizedMaskedChildContext = l)),
          l
     );
}
function pe(e) {
     return (e = e.childContextTypes), e != null;
}
function Ar() {
     D(de), D(oe);
}
function hu(e, n, t) {
     if (oe.current !== pn) throw Error(y(168));
     I(oe, n), I(de, t);
}
function bs(e, n, t) {
     var r = e.stateNode;
     if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
          return t;
     r = r.getChildContext();
     for (var l in r) if (!(l in n)) throw Error(y(108, Rc(e) || "Unknown", l));
     return V({}, t, r);
}
function Vr(e) {
     return (
          (e =
               ((e = e.stateNode) &&
                    e.__reactInternalMemoizedMergedChildContext) ||
               pn),
          (Nn = oe.current),
          I(oe, e),
          I(de, de.current),
          !0
     );
}
function vu(e, n, t) {
     var r = e.stateNode;
     if (!r) throw Error(y(169));
     t
          ? ((e = bs(e, n, Nn)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            D(de),
            D(oe),
            I(oe, e))
          : D(de),
          I(de, t);
}
var Ve = null,
     ul = !1,
     Ul = !1;
function ea(e) {
     Ve === null ? (Ve = [e]) : Ve.push(e);
}
function Zf(e) {
     (ul = !0), ea(e);
}
function vn() {
     if (!Ul && Ve !== null) {
          Ul = !0;
          var e = 0,
               n = O;
          try {
               var t = Ve;
               for (O = 1; e < t.length; e++) {
                    var r = t[e];
                    do r = r(!0);
                    while (r !== null);
               }
               (Ve = null), (ul = !1);
          } catch (l) {
               throw (Ve !== null && (Ve = Ve.slice(e + 1)), _s(qo, vn), l);
          } finally {
               (O = n), (Ul = !1);
          }
     }
     return null;
}
var Vn = [],
     Bn = 0,
     Br = null,
     Hr = 0,
     Se = [],
     xe = 0,
     Pn = null,
     Be = 1,
     He = "";
function wn(e, n) {
     (Vn[Bn++] = Hr), (Vn[Bn++] = Br), (Br = e), (Hr = n);
}
function na(e, n, t) {
     (Se[xe++] = Be), (Se[xe++] = He), (Se[xe++] = Pn), (Pn = e);
     var r = Be;
     e = He;
     var l = 32 - Re(r) - 1;
     (r &= ~(1 << l)), (t += 1);
     var o = 32 - Re(n) + l;
     if (30 < o) {
          var i = l - (l % 5);
          (o = (r & ((1 << i) - 1)).toString(32)),
               (r >>= i),
               (l -= i),
               (Be = (1 << (32 - Re(n) + l)) | (t << l) | r),
               (He = o + e);
     } else (Be = (1 << o) | (t << l) | r), (He = e);
}
function ui(e) {
     e.return !== null && (wn(e, 1), na(e, 1, 0));
}
function si(e) {
     for (; e === Br; )
          (Br = Vn[--Bn]), (Vn[Bn] = null), (Hr = Vn[--Bn]), (Vn[Bn] = null);
     for (; e === Pn; )
          (Pn = Se[--xe]),
               (Se[xe] = null),
               (He = Se[--xe]),
               (Se[xe] = null),
               (Be = Se[--xe]),
               (Se[xe] = null);
}
var ye = null,
     ve = null,
     U = !1,
     je = null;
function ta(e, n) {
     var t = Ee(5, null, null, 0);
     (t.elementType = "DELETED"),
          (t.stateNode = n),
          (t.return = e),
          (n = e.deletions),
          n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function yu(e, n) {
     switch (e.tag) {
          case 5:
               var t = e.type;
               return (
                    (n =
                         n.nodeType !== 1 ||
                         t.toLowerCase() !== n.nodeName.toLowerCase()
                              ? null
                              : n),
                    n !== null
                         ? ((e.stateNode = n),
                           (ye = e),
                           (ve = un(n.firstChild)),
                           !0)
                         : !1
               );
          case 6:
               return (
                    (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
                    n !== null
                         ? ((e.stateNode = n), (ye = e), (ve = null), !0)
                         : !1
               );
          case 13:
               return (
                    (n = n.nodeType !== 8 ? null : n),
                    n !== null
                         ? ((t = Pn !== null ? { id: Be, overflow: He } : null),
                           (e.memoizedState = {
                                dehydrated: n,
                                treeContext: t,
                                retryLane: 1073741824,
                           }),
                           (t = Ee(18, null, null, 0)),
                           (t.stateNode = n),
                           (t.return = e),
                           (e.child = t),
                           (ye = e),
                           (ve = null),
                           !0)
                         : !1
               );
          default:
               return !1;
     }
}
function xo(e) {
     return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eo(e) {
     if (U) {
          var n = ve;
          if (n) {
               var t = n;
               if (!yu(e, n)) {
                    if (xo(e)) throw Error(y(418));
                    n = un(t.nextSibling);
                    var r = ye;
                    n && yu(e, n)
                         ? ta(r, t)
                         : ((e.flags = (e.flags & -4097) | 2),
                           (U = !1),
                           (ye = e));
               }
          } else {
               if (xo(e)) throw Error(y(418));
               (e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e);
          }
     }
}
function gu(e) {
     for (
          e = e.return;
          e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

     )
          e = e.return;
     ye = e;
}
function pr(e) {
     if (e !== ye) return !1;
     if (!U) return gu(e), (U = !0), !1;
     var n;
     if (
          ((n = e.tag !== 3) &&
               !(n = e.tag !== 5) &&
               ((n = e.type),
               (n =
                    n !== "head" &&
                    n !== "body" &&
                    !go(e.type, e.memoizedProps))),
          n && (n = ve))
     ) {
          if (xo(e)) throw (ra(), Error(y(418)));
          for (; n; ) ta(e, n), (n = un(n.nextSibling));
     }
     if ((gu(e), e.tag === 13)) {
          if (
               ((e = e.memoizedState),
               (e = e !== null ? e.dehydrated : null),
               !e)
          )
               throw Error(y(317));
          e: {
               for (e = e.nextSibling, n = 0; e; ) {
                    if (e.nodeType === 8) {
                         var t = e.data;
                         if (t === "/$") {
                              if (n === 0) {
                                   ve = un(e.nextSibling);
                                   break e;
                              }
                              n--;
                         } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
                    }
                    e = e.nextSibling;
               }
               ve = null;
          }
     } else ve = ye ? un(e.stateNode.nextSibling) : null;
     return !0;
}
function ra() {
     for (var e = ve; e; ) e = un(e.nextSibling);
}
function et() {
     (ve = ye = null), (U = !1);
}
function ai(e) {
     je === null ? (je = [e]) : je.push(e);
}
var Jf = Ge.ReactCurrentBatchConfig;
function Te(e, n) {
     if (e && e.defaultProps) {
          (n = V({}, n)), (e = e.defaultProps);
          for (var t in e) n[t] === void 0 && (n[t] = e[t]);
          return n;
     }
     return n;
}
var Wr = hn(null),
     Qr = null,
     Hn = null,
     ci = null;
function fi() {
     ci = Hn = Qr = null;
}
function di(e) {
     var n = Wr.current;
     D(Wr), (e._currentValue = n);
}
function Co(e, n, t) {
     for (; e !== null; ) {
          var r = e.alternate;
          if (
               ((e.childLanes & n) !== n
                    ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
                    : r !== null &&
                      (r.childLanes & n) !== n &&
                      (r.childLanes |= n),
               e === t)
          )
               break;
          e = e.return;
     }
}
function Zn(e, n) {
     (Qr = e),
          (ci = Hn = null),
          (e = e.dependencies),
          e !== null &&
               e.firstContext !== null &&
               (e.lanes & n && (fe = !0), (e.firstContext = null));
}
function _e(e) {
     var n = e._currentValue;
     if (ci !== e)
          if (
               ((e = { context: e, memoizedValue: n, next: null }), Hn === null)
          ) {
               if (Qr === null) throw Error(y(308));
               (Hn = e), (Qr.dependencies = { lanes: 0, firstContext: e });
          } else Hn = Hn.next = e;
     return n;
}
var xn = null;
function pi(e) {
     xn === null ? (xn = [e]) : xn.push(e);
}
function la(e, n, t, r) {
     var l = n.interleaved;
     return (
          l === null
               ? ((t.next = t), pi(n))
               : ((t.next = l.next), (l.next = t)),
          (n.interleaved = t),
          Ye(e, r)
     );
}
function Ye(e, n) {
     e.lanes |= n;
     var t = e.alternate;
     for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
          (e.childLanes |= n),
               (t = e.alternate),
               t !== null && (t.childLanes |= n),
               (t = e),
               (e = e.return);
     return t.tag === 3 ? t.stateNode : null;
}
var qe = !1;
function mi(e) {
     e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, interleaved: null, lanes: 0 },
          effects: null,
     };
}
function oa(e, n) {
     (e = e.updateQueue),
          n.updateQueue === e &&
               (n.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects,
               });
}
function We(e, n) {
     return {
          eventTime: e,
          lane: n,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
     };
}
function sn(e, n, t) {
     var r = e.updateQueue;
     if (r === null) return null;
     if (((r = r.shared), R & 2)) {
          var l = r.pending;
          return (
               l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
               (r.pending = n),
               Ye(e, t)
          );
     }
     return (
          (l = r.interleaved),
          l === null
               ? ((n.next = n), pi(r))
               : ((n.next = l.next), (l.next = n)),
          (r.interleaved = n),
          Ye(e, t)
     );
}
function Cr(e, n, t) {
     if (
          ((n = n.updateQueue),
          n !== null && ((n = n.shared), (t & 4194240) !== 0))
     ) {
          var r = n.lanes;
          (r &= e.pendingLanes), (t |= r), (n.lanes = t), bo(e, t);
     }
}
function wu(e, n) {
     var t = e.updateQueue,
          r = e.alternate;
     if (r !== null && ((r = r.updateQueue), t === r)) {
          var l = null,
               o = null;
          if (((t = t.firstBaseUpdate), t !== null)) {
               do {
                    var i = {
                         eventTime: t.eventTime,
                         lane: t.lane,
                         tag: t.tag,
                         payload: t.payload,
                         callback: t.callback,
                         next: null,
                    };
                    o === null ? (l = o = i) : (o = o.next = i), (t = t.next);
               } while (t !== null);
               o === null ? (l = o = n) : (o = o.next = n);
          } else l = o = n;
          (t = {
               baseState: r.baseState,
               firstBaseUpdate: l,
               lastBaseUpdate: o,
               shared: r.shared,
               effects: r.effects,
          }),
               (e.updateQueue = t);
          return;
     }
     (e = t.lastBaseUpdate),
          e === null ? (t.firstBaseUpdate = n) : (e.next = n),
          (t.lastBaseUpdate = n);
}
function Kr(e, n, t, r) {
     var l = e.updateQueue;
     qe = !1;
     var o = l.firstBaseUpdate,
          i = l.lastBaseUpdate,
          u = l.shared.pending;
     if (u !== null) {
          l.shared.pending = null;
          var s = u,
               c = s.next;
          (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
          var m = e.alternate;
          m !== null &&
               ((m = m.updateQueue),
               (u = m.lastBaseUpdate),
               u !== i &&
                    (u === null ? (m.firstBaseUpdate = c) : (u.next = c),
                    (m.lastBaseUpdate = s)));
     }
     if (o !== null) {
          var h = l.baseState;
          (i = 0), (m = c = s = null), (u = o);
          do {
               var p = u.lane,
                    g = u.eventTime;
               if ((r & p) === p) {
                    m !== null &&
                         (m = m.next =
                              {
                                   eventTime: g,
                                   lane: 0,
                                   tag: u.tag,
                                   payload: u.payload,
                                   callback: u.callback,
                                   next: null,
                              });
                    e: {
                         var w = e,
                              S = u;
                         switch (((p = n), (g = t), S.tag)) {
                              case 1:
                                   if (
                                        ((w = S.payload),
                                        typeof w == "function")
                                   ) {
                                        h = w.call(g, h, p);
                                        break e;
                                   }
                                   h = w;
                                   break e;
                              case 3:
                                   w.flags = (w.flags & -65537) | 128;
                              case 0:
                                   if (
                                        ((w = S.payload),
                                        (p =
                                             typeof w == "function"
                                                  ? w.call(g, h, p)
                                                  : w),
                                        p == null)
                                   )
                                        break e;
                                   h = V({}, h, p);
                                   break e;
                              case 2:
                                   qe = !0;
                         }
                    }
                    u.callback !== null &&
                         u.lane !== 0 &&
                         ((e.flags |= 64),
                         (p = l.effects),
                         p === null ? (l.effects = [u]) : p.push(u));
               } else
                    (g = {
                         eventTime: g,
                         lane: p,
                         tag: u.tag,
                         payload: u.payload,
                         callback: u.callback,
                         next: null,
                    }),
                         m === null ? ((c = m = g), (s = h)) : (m = m.next = g),
                         (i |= p);
               if (((u = u.next), u === null)) {
                    if (((u = l.shared.pending), u === null)) break;
                    (p = u),
                         (u = p.next),
                         (p.next = null),
                         (l.lastBaseUpdate = p),
                         (l.shared.pending = null);
               }
          } while (1);
          if (
               (m === null && (s = h),
               (l.baseState = s),
               (l.firstBaseUpdate = c),
               (l.lastBaseUpdate = m),
               (n = l.shared.interleaved),
               n !== null)
          ) {
               l = n;
               do (i |= l.lane), (l = l.next);
               while (l !== n);
          } else o === null && (l.shared.lanes = 0);
          (Tn |= i), (e.lanes = i), (e.memoizedState = h);
     }
}
function ku(e, n, t) {
     if (((e = n.effects), (n.effects = null), e !== null))
          for (n = 0; n < e.length; n++) {
               var r = e[n],
                    l = r.callback;
               if (l !== null) {
                    if (((r.callback = null), (r = t), typeof l != "function"))
                         throw Error(y(191, l));
                    l.call(r);
               }
          }
}
var ia = new ls.Component().refs;
function _o(e, n, t, r) {
     (n = e.memoizedState),
          (t = t(r, n)),
          (t = t == null ? n : V({}, n, t)),
          (e.memoizedState = t),
          e.lanes === 0 && (e.updateQueue.baseState = t);
}
var sl = {
     isMounted: function (e) {
          return (e = e._reactInternals) ? Rn(e) === e : !1;
     },
     enqueueSetState: function (e, n, t) {
          e = e._reactInternals;
          var r = ue(),
               l = cn(e),
               o = We(r, l);
          (o.payload = n),
               t != null && (o.callback = t),
               (n = sn(e, o, l)),
               n !== null && (Oe(n, e, l, r), Cr(n, e, l));
     },
     enqueueReplaceState: function (e, n, t) {
          e = e._reactInternals;
          var r = ue(),
               l = cn(e),
               o = We(r, l);
          (o.tag = 1),
               (o.payload = n),
               t != null && (o.callback = t),
               (n = sn(e, o, l)),
               n !== null && (Oe(n, e, l, r), Cr(n, e, l));
     },
     enqueueForceUpdate: function (e, n) {
          e = e._reactInternals;
          var t = ue(),
               r = cn(e),
               l = We(t, r);
          (l.tag = 2),
               n != null && (l.callback = n),
               (n = sn(e, l, r)),
               n !== null && (Oe(n, e, r, t), Cr(n, e, r));
     },
};
function Su(e, n, t, r, l, o, i) {
     return (
          (e = e.stateNode),
          typeof e.shouldComponentUpdate == "function"
               ? e.shouldComponentUpdate(r, o, i)
               : n.prototype && n.prototype.isPureReactComponent
               ? !$t(t, r) || !$t(l, o)
               : !0
     );
}
function ua(e, n, t) {
     var r = !1,
          l = pn,
          o = n.contextType;
     return (
          typeof o == "object" && o !== null
               ? (o = _e(o))
               : ((l = pe(n) ? Nn : oe.current),
                 (r = n.contextTypes),
                 (o = (r = r != null) ? bn(e, l) : pn)),
          (n = new n(t, o)),
          (e.memoizedState =
               n.state !== null && n.state !== void 0 ? n.state : null),
          (n.updater = sl),
          (e.stateNode = n),
          (n._reactInternals = e),
          r &&
               ((e = e.stateNode),
               (e.__reactInternalMemoizedUnmaskedChildContext = l),
               (e.__reactInternalMemoizedMaskedChildContext = o)),
          n
     );
}
function xu(e, n, t, r) {
     (e = n.state),
          typeof n.componentWillReceiveProps == "function" &&
               n.componentWillReceiveProps(t, r),
          typeof n.UNSAFE_componentWillReceiveProps == "function" &&
               n.UNSAFE_componentWillReceiveProps(t, r),
          n.state !== e && sl.enqueueReplaceState(n, n.state, null);
}
function No(e, n, t, r) {
     var l = e.stateNode;
     (l.props = t), (l.state = e.memoizedState), (l.refs = ia), mi(e);
     var o = n.contextType;
     typeof o == "object" && o !== null
          ? (l.context = _e(o))
          : ((o = pe(n) ? Nn : oe.current), (l.context = bn(e, o))),
          (l.state = e.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == "function" &&
               (_o(e, n, o, t), (l.state = e.memoizedState)),
          typeof n.getDerivedStateFromProps == "function" ||
               typeof l.getSnapshotBeforeUpdate == "function" ||
               (typeof l.UNSAFE_componentWillMount != "function" &&
                    typeof l.componentWillMount != "function") ||
               ((n = l.state),
               typeof l.componentWillMount == "function" &&
                    l.componentWillMount(),
               typeof l.UNSAFE_componentWillMount == "function" &&
                    l.UNSAFE_componentWillMount(),
               n !== l.state && sl.enqueueReplaceState(l, l.state, null),
               Kr(e, t, l, r),
               (l.state = e.memoizedState)),
          typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vt(e, n, t) {
     if (
          ((e = t.ref),
          e !== null && typeof e != "function" && typeof e != "object")
     ) {
          if (t._owner) {
               if (((t = t._owner), t)) {
                    if (t.tag !== 1) throw Error(y(309));
                    var r = t.stateNode;
               }
               if (!r) throw Error(y(147, e));
               var l = r,
                    o = "" + e;
               return n !== null &&
                    n.ref !== null &&
                    typeof n.ref == "function" &&
                    n.ref._stringRef === o
                    ? n.ref
                    : ((n = function (i) {
                           var u = l.refs;
                           u === ia && (u = l.refs = {}),
                                i === null ? delete u[o] : (u[o] = i);
                      }),
                      (n._stringRef = o),
                      n);
          }
          if (typeof e != "string") throw Error(y(284));
          if (!t._owner) throw Error(y(290, e));
     }
     return e;
}
function mr(e, n) {
     throw (
          ((e = Object.prototype.toString.call(n)),
          Error(
               y(
                    31,
                    e === "[object Object]"
                         ? "object with keys {" +
                                Object.keys(n).join(", ") +
                                "}"
                         : e
               )
          ))
     );
}
function Eu(e) {
     var n = e._init;
     return n(e._payload);
}
function sa(e) {
     function n(f, a) {
          if (e) {
               var d = f.deletions;
               d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
          }
     }
     function t(f, a) {
          if (!e) return null;
          for (; a !== null; ) n(f, a), (a = a.sibling);
          return null;
     }
     function r(f, a) {
          for (f = new Map(); a !== null; )
               a.key !== null ? f.set(a.key, a) : f.set(a.index, a),
                    (a = a.sibling);
          return f;
     }
     function l(f, a) {
          return (f = fn(f, a)), (f.index = 0), (f.sibling = null), f;
     }
     function o(f, a, d) {
          return (
               (f.index = d),
               e
                    ? ((d = f.alternate),
                      d !== null
                           ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
                           : ((f.flags |= 2), a))
                    : ((f.flags |= 1048576), a)
          );
     }
     function i(f) {
          return e && f.alternate === null && (f.flags |= 2), f;
     }
     function u(f, a, d, v) {
          return a === null || a.tag !== 6
               ? ((a = Ql(d, f.mode, v)), (a.return = f), a)
               : ((a = l(a, d)), (a.return = f), a);
     }
     function s(f, a, d, v) {
          var E = d.type;
          return E === Mn
               ? m(f, a, d.props.children, v, d.key)
               : a !== null &&
                 (a.elementType === E ||
                      (typeof E == "object" &&
                           E !== null &&
                           E.$$typeof === Je &&
                           Eu(E) === a.type))
               ? ((v = l(a, d.props)), (v.ref = vt(f, a, d)), (v.return = f), v)
               : ((v = Lr(d.type, d.key, d.props, null, f.mode, v)),
                 (v.ref = vt(f, a, d)),
                 (v.return = f),
                 v);
     }
     function c(f, a, d, v) {
          return a === null ||
               a.tag !== 4 ||
               a.stateNode.containerInfo !== d.containerInfo ||
               a.stateNode.implementation !== d.implementation
               ? ((a = Kl(d, f.mode, v)), (a.return = f), a)
               : ((a = l(a, d.children || [])), (a.return = f), a);
     }
     function m(f, a, d, v, E) {
          return a === null || a.tag !== 7
               ? ((a = _n(d, f.mode, v, E)), (a.return = f), a)
               : ((a = l(a, d)), (a.return = f), a);
     }
     function h(f, a, d) {
          if ((typeof a == "string" && a !== "") || typeof a == "number")
               return (a = Ql("" + a, f.mode, d)), (a.return = f), a;
          if (typeof a == "object" && a !== null) {
               switch (a.$$typeof) {
                    case rr:
                         return (
                              (d = Lr(a.type, a.key, a.props, null, f.mode, d)),
                              (d.ref = vt(f, null, a)),
                              (d.return = f),
                              d
                         );
                    case In:
                         return (a = Kl(a, f.mode, d)), (a.return = f), a;
                    case Je:
                         var v = a._init;
                         return h(f, v(a._payload), d);
               }
               if (kt(a) || ft(a))
                    return (a = _n(a, f.mode, d, null)), (a.return = f), a;
               mr(f, a);
          }
          return null;
     }
     function p(f, a, d, v) {
          var E = a !== null ? a.key : null;
          if ((typeof d == "string" && d !== "") || typeof d == "number")
               return E !== null ? null : u(f, a, "" + d, v);
          if (typeof d == "object" && d !== null) {
               switch (d.$$typeof) {
                    case rr:
                         return d.key === E ? s(f, a, d, v) : null;
                    case In:
                         return d.key === E ? c(f, a, d, v) : null;
                    case Je:
                         return (E = d._init), p(f, a, E(d._payload), v);
               }
               if (kt(d) || ft(d))
                    return E !== null ? null : m(f, a, d, v, null);
               mr(f, d);
          }
          return null;
     }
     function g(f, a, d, v, E) {
          if ((typeof v == "string" && v !== "") || typeof v == "number")
               return (f = f.get(d) || null), u(a, f, "" + v, E);
          if (typeof v == "object" && v !== null) {
               switch (v.$$typeof) {
                    case rr:
                         return (
                              (f = f.get(v.key === null ? d : v.key) || null),
                              s(a, f, v, E)
                         );
                    case In:
                         return (
                              (f = f.get(v.key === null ? d : v.key) || null),
                              c(a, f, v, E)
                         );
                    case Je:
                         var _ = v._init;
                         return g(f, a, d, _(v._payload), E);
               }
               if (kt(v) || ft(v))
                    return (f = f.get(d) || null), m(a, f, v, E, null);
               mr(a, v);
          }
          return null;
     }
     function w(f, a, d, v) {
          for (
               var E = null, _ = null, N = a, P = (a = 0), H = null;
               N !== null && P < d.length;
               P++
          ) {
               N.index > P ? ((H = N), (N = null)) : (H = N.sibling);
               var j = p(f, N, d[P], v);
               if (j === null) {
                    N === null && (N = H);
                    break;
               }
               e && N && j.alternate === null && n(f, N),
                    (a = o(j, a, P)),
                    _ === null ? (E = j) : (_.sibling = j),
                    (_ = j),
                    (N = H);
          }
          if (P === d.length) return t(f, N), U && wn(f, P), E;
          if (N === null) {
               for (; P < d.length; P++)
                    (N = h(f, d[P], v)),
                         N !== null &&
                              ((a = o(N, a, P)),
                              _ === null ? (E = N) : (_.sibling = N),
                              (_ = N));
               return U && wn(f, P), E;
          }
          for (N = r(f, N); P < d.length; P++)
               (H = g(N, f, P, d[P], v)),
                    H !== null &&
                         (e &&
                              H.alternate !== null &&
                              N.delete(H.key === null ? P : H.key),
                         (a = o(H, a, P)),
                         _ === null ? (E = H) : (_.sibling = H),
                         (_ = H));
          return (
               e &&
                    N.forEach(function (Pe) {
                         return n(f, Pe);
                    }),
               U && wn(f, P),
               E
          );
     }
     function S(f, a, d, v) {
          var E = ft(d);
          if (typeof E != "function") throw Error(y(150));
          if (((d = E.call(d)), d == null)) throw Error(y(151));
          for (
               var _ = (E = null), N = a, P = (a = 0), H = null, j = d.next();
               N !== null && !j.done;
               P++, j = d.next()
          ) {
               N.index > P ? ((H = N), (N = null)) : (H = N.sibling);
               var Pe = p(f, N, j.value, v);
               if (Pe === null) {
                    N === null && (N = H);
                    break;
               }
               e && N && Pe.alternate === null && n(f, N),
                    (a = o(Pe, a, P)),
                    _ === null ? (E = Pe) : (_.sibling = Pe),
                    (_ = Pe),
                    (N = H);
          }
          if (j.done) return t(f, N), U && wn(f, P), E;
          if (N === null) {
               for (; !j.done; P++, j = d.next())
                    (j = h(f, j.value, v)),
                         j !== null &&
                              ((a = o(j, a, P)),
                              _ === null ? (E = j) : (_.sibling = j),
                              (_ = j));
               return U && wn(f, P), E;
          }
          for (N = r(f, N); !j.done; P++, j = d.next())
               (j = g(N, f, P, j.value, v)),
                    j !== null &&
                         (e &&
                              j.alternate !== null &&
                              N.delete(j.key === null ? P : j.key),
                         (a = o(j, a, P)),
                         _ === null ? (E = j) : (_.sibling = j),
                         (_ = j));
          return (
               e &&
                    N.forEach(function (at) {
                         return n(f, at);
                    }),
               U && wn(f, P),
               E
          );
     }
     function F(f, a, d, v) {
          if (
               (typeof d == "object" &&
                    d !== null &&
                    d.type === Mn &&
                    d.key === null &&
                    (d = d.props.children),
               typeof d == "object" && d !== null)
          ) {
               switch (d.$$typeof) {
                    case rr:
                         e: {
                              for (var E = d.key, _ = a; _ !== null; ) {
                                   if (_.key === E) {
                                        if (((E = d.type), E === Mn)) {
                                             if (_.tag === 7) {
                                                  t(f, _.sibling),
                                                       (a = l(
                                                            _,
                                                            d.props.children
                                                       )),
                                                       (a.return = f),
                                                       (f = a);
                                                  break e;
                                             }
                                        } else if (
                                             _.elementType === E ||
                                             (typeof E == "object" &&
                                                  E !== null &&
                                                  E.$$typeof === Je &&
                                                  Eu(E) === _.type)
                                        ) {
                                             t(f, _.sibling),
                                                  (a = l(_, d.props)),
                                                  (a.ref = vt(f, _, d)),
                                                  (a.return = f),
                                                  (f = a);
                                             break e;
                                        }
                                        t(f, _);
                                        break;
                                   } else n(f, _);
                                   _ = _.sibling;
                              }
                              d.type === Mn
                                   ? ((a = _n(
                                          d.props.children,
                                          f.mode,
                                          v,
                                          d.key
                                     )),
                                     (a.return = f),
                                     (f = a))
                                   : ((v = Lr(
                                          d.type,
                                          d.key,
                                          d.props,
                                          null,
                                          f.mode,
                                          v
                                     )),
                                     (v.ref = vt(f, a, d)),
                                     (v.return = f),
                                     (f = v));
                         }
                         return i(f);
                    case In:
                         e: {
                              for (_ = d.key; a !== null; ) {
                                   if (a.key === _)
                                        if (
                                             a.tag === 4 &&
                                             a.stateNode.containerInfo ===
                                                  d.containerInfo &&
                                             a.stateNode.implementation ===
                                                  d.implementation
                                        ) {
                                             t(f, a.sibling),
                                                  (a = l(a, d.children || [])),
                                                  (a.return = f),
                                                  (f = a);
                                             break e;
                                        } else {
                                             t(f, a);
                                             break;
                                        }
                                   else n(f, a);
                                   a = a.sibling;
                              }
                              (a = Kl(d, f.mode, v)), (a.return = f), (f = a);
                         }
                         return i(f);
                    case Je:
                         return (_ = d._init), F(f, a, _(d._payload), v);
               }
               if (kt(d)) return w(f, a, d, v);
               if (ft(d)) return S(f, a, d, v);
               mr(f, d);
          }
          return (typeof d == "string" && d !== "") || typeof d == "number"
               ? ((d = "" + d),
                 a !== null && a.tag === 6
                      ? (t(f, a.sibling),
                        (a = l(a, d)),
                        (a.return = f),
                        (f = a))
                      : (t(f, a),
                        (a = Ql(d, f.mode, v)),
                        (a.return = f),
                        (f = a)),
                 i(f))
               : t(f, a);
     }
     return F;
}
var nt = sa(!0),
     aa = sa(!1),
     bt = {},
     $e = hn(bt),
     Ht = hn(bt),
     Wt = hn(bt);
function En(e) {
     if (e === bt) throw Error(y(174));
     return e;
}
function hi(e, n) {
     switch ((I(Wt, n), I(Ht, e), I($e, bt), (e = n.nodeType), e)) {
          case 9:
          case 11:
               n = (n = n.documentElement) ? n.namespaceURI : ro(null, "");
               break;
          default:
               (e = e === 8 ? n.parentNode : n),
                    (n = e.namespaceURI || null),
                    (e = e.tagName),
                    (n = ro(n, e));
     }
     D($e), I($e, n);
}
function tt() {
     D($e), D(Ht), D(Wt);
}
function ca(e) {
     En(Wt.current);
     var n = En($e.current),
          t = ro(n, e.type);
     n !== t && (I(Ht, e), I($e, t));
}
function vi(e) {
     Ht.current === e && (D($e), D(Ht));
}
var $ = hn(0);
function Yr(e) {
     for (var n = e; n !== null; ) {
          if (n.tag === 13) {
               var t = n.memoizedState;
               if (
                    t !== null &&
                    ((t = t.dehydrated),
                    t === null || t.data === "$?" || t.data === "$!")
               )
                    return n;
          } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
               if (n.flags & 128) return n;
          } else if (n.child !== null) {
               (n.child.return = n), (n = n.child);
               continue;
          }
          if (n === e) break;
          for (; n.sibling === null; ) {
               if (n.return === null || n.return === e) return null;
               n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
     }
     return null;
}
var $l = [];
function yi() {
     for (var e = 0; e < $l.length; e++)
          $l[e]._workInProgressVersionPrimary = null;
     $l.length = 0;
}
var _r = Ge.ReactCurrentDispatcher,
     Al = Ge.ReactCurrentBatchConfig,
     zn = 0,
     A = null,
     Y = null,
     Z = null,
     Xr = !1,
     zt = !1,
     Qt = 0,
     qf = 0;
function te() {
     throw Error(y(321));
}
function gi(e, n) {
     if (n === null) return !1;
     for (var t = 0; t < n.length && t < e.length; t++)
          if (!Ie(e[t], n[t])) return !1;
     return !0;
}
function wi(e, n, t, r, l, o) {
     if (
          ((zn = o),
          (A = n),
          (n.memoizedState = null),
          (n.updateQueue = null),
          (n.lanes = 0),
          (_r.current = e === null || e.memoizedState === null ? td : rd),
          (e = t(r, l)),
          zt)
     ) {
          o = 0;
          do {
               if (((zt = !1), (Qt = 0), 25 <= o)) throw Error(y(301));
               (o += 1),
                    (Z = Y = null),
                    (n.updateQueue = null),
                    (_r.current = ld),
                    (e = t(r, l));
          } while (zt);
     }
     if (
          ((_r.current = Gr),
          (n = Y !== null && Y.next !== null),
          (zn = 0),
          (Z = Y = A = null),
          (Xr = !1),
          n)
     )
          throw Error(y(300));
     return e;
}
function ki() {
     var e = Qt !== 0;
     return (Qt = 0), e;
}
function De() {
     var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
     };
     return Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Ne() {
     if (Y === null) {
          var e = A.alternate;
          e = e !== null ? e.memoizedState : null;
     } else e = Y.next;
     var n = Z === null ? A.memoizedState : Z.next;
     if (n !== null) (Z = n), (Y = e);
     else {
          if (e === null) throw Error(y(310));
          (Y = e),
               (e = {
                    memoizedState: Y.memoizedState,
                    baseState: Y.baseState,
                    baseQueue: Y.baseQueue,
                    queue: Y.queue,
                    next: null,
               }),
               Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e);
     }
     return Z;
}
function Kt(e, n) {
     return typeof n == "function" ? n(e) : n;
}
function Vl(e) {
     var n = Ne(),
          t = n.queue;
     if (t === null) throw Error(y(311));
     t.lastRenderedReducer = e;
     var r = Y,
          l = r.baseQueue,
          o = t.pending;
     if (o !== null) {
          if (l !== null) {
               var i = l.next;
               (l.next = o.next), (o.next = i);
          }
          (r.baseQueue = l = o), (t.pending = null);
     }
     if (l !== null) {
          (o = l.next), (r = r.baseState);
          var u = (i = null),
               s = null,
               c = o;
          do {
               var m = c.lane;
               if ((zn & m) === m)
                    s !== null &&
                         (s = s.next =
                              {
                                   lane: 0,
                                   action: c.action,
                                   hasEagerState: c.hasEagerState,
                                   eagerState: c.eagerState,
                                   next: null,
                              }),
                         (r = c.hasEagerState ? c.eagerState : e(r, c.action));
               else {
                    var h = {
                         lane: m,
                         action: c.action,
                         hasEagerState: c.hasEagerState,
                         eagerState: c.eagerState,
                         next: null,
                    };
                    s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
                         (A.lanes |= m),
                         (Tn |= m);
               }
               c = c.next;
          } while (c !== null && c !== o);
          s === null ? (i = r) : (s.next = u),
               Ie(r, n.memoizedState) || (fe = !0),
               (n.memoizedState = r),
               (n.baseState = i),
               (n.baseQueue = s),
               (t.lastRenderedState = r);
     }
     if (((e = t.interleaved), e !== null)) {
          l = e;
          do (o = l.lane), (A.lanes |= o), (Tn |= o), (l = l.next);
          while (l !== e);
     } else l === null && (t.lanes = 0);
     return [n.memoizedState, t.dispatch];
}
function Bl(e) {
     var n = Ne(),
          t = n.queue;
     if (t === null) throw Error(y(311));
     t.lastRenderedReducer = e;
     var r = t.dispatch,
          l = t.pending,
          o = n.memoizedState;
     if (l !== null) {
          t.pending = null;
          var i = (l = l.next);
          do (o = e(o, i.action)), (i = i.next);
          while (i !== l);
          Ie(o, n.memoizedState) || (fe = !0),
               (n.memoizedState = o),
               n.baseQueue === null && (n.baseState = o),
               (t.lastRenderedState = o);
     }
     return [o, r];
}
function fa() {}
function da(e, n) {
     var t = A,
          r = Ne(),
          l = n(),
          o = !Ie(r.memoizedState, l);
     if (
          (o && ((r.memoizedState = l), (fe = !0)),
          (r = r.queue),
          Si(ha.bind(null, t, r, e), [e]),
          r.getSnapshot !== n || o || (Z !== null && Z.memoizedState.tag & 1))
     ) {
          if (
               ((t.flags |= 2048),
               Yt(9, ma.bind(null, t, r, l, n), void 0, null),
               q === null)
          )
               throw Error(y(349));
          zn & 30 || pa(t, n, l);
     }
     return l;
}
function pa(e, n, t) {
     (e.flags |= 16384),
          (e = { getSnapshot: n, value: t }),
          (n = A.updateQueue),
          n === null
               ? ((n = { lastEffect: null, stores: null }),
                 (A.updateQueue = n),
                 (n.stores = [e]))
               : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function ma(e, n, t, r) {
     (n.value = t), (n.getSnapshot = r), va(n) && ya(e);
}
function ha(e, n, t) {
     return t(function () {
          va(n) && ya(e);
     });
}
function va(e) {
     var n = e.getSnapshot;
     e = e.value;
     try {
          var t = n();
          return !Ie(e, t);
     } catch {
          return !0;
     }
}
function ya(e) {
     var n = Ye(e, 1);
     n !== null && Oe(n, e, 1, -1);
}
function Cu(e) {
     var n = De();
     return (
          typeof e == "function" && (e = e()),
          (n.memoizedState = n.baseState = e),
          (e = {
               pending: null,
               interleaved: null,
               lanes: 0,
               dispatch: null,
               lastRenderedReducer: Kt,
               lastRenderedState: e,
          }),
          (n.queue = e),
          (e = e.dispatch = nd.bind(null, A, e)),
          [n.memoizedState, e]
     );
}
function Yt(e, n, t, r) {
     return (
          (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
          (n = A.updateQueue),
          n === null
               ? ((n = { lastEffect: null, stores: null }),
                 (A.updateQueue = n),
                 (n.lastEffect = e.next = e))
               : ((t = n.lastEffect),
                 t === null
                      ? (n.lastEffect = e.next = e)
                      : ((r = t.next),
                        (t.next = e),
                        (e.next = r),
                        (n.lastEffect = e))),
          e
     );
}
function ga() {
     return Ne().memoizedState;
}
function Nr(e, n, t, r) {
     var l = De();
     (A.flags |= e),
          (l.memoizedState = Yt(1 | n, t, void 0, r === void 0 ? null : r));
}
function al(e, n, t, r) {
     var l = Ne();
     r = r === void 0 ? null : r;
     var o = void 0;
     if (Y !== null) {
          var i = Y.memoizedState;
          if (((o = i.destroy), r !== null && gi(r, i.deps))) {
               l.memoizedState = Yt(n, t, o, r);
               return;
          }
     }
     (A.flags |= e), (l.memoizedState = Yt(1 | n, t, o, r));
}
function _u(e, n) {
     return Nr(8390656, 8, e, n);
}
function Si(e, n) {
     return al(2048, 8, e, n);
}
function wa(e, n) {
     return al(4, 2, e, n);
}
function ka(e, n) {
     return al(4, 4, e, n);
}
function Sa(e, n) {
     if (typeof n == "function")
          return (
               (e = e()),
               n(e),
               function () {
                    n(null);
               }
          );
     if (n != null)
          return (
               (e = e()),
               (n.current = e),
               function () {
                    n.current = null;
               }
          );
}
function xa(e, n, t) {
     return (
          (t = t != null ? t.concat([e]) : null),
          al(4, 4, Sa.bind(null, n, e), t)
     );
}
function xi() {}
function Ea(e, n) {
     var t = Ne();
     n = n === void 0 ? null : n;
     var r = t.memoizedState;
     return r !== null && n !== null && gi(n, r[1])
          ? r[0]
          : ((t.memoizedState = [e, n]), e);
}
function Ca(e, n) {
     var t = Ne();
     n = n === void 0 ? null : n;
     var r = t.memoizedState;
     return r !== null && n !== null && gi(n, r[1])
          ? r[0]
          : ((e = e()), (t.memoizedState = [e, n]), e);
}
function _a(e, n, t) {
     return zn & 21
          ? (Ie(t, n) ||
                 ((t = zs()), (A.lanes |= t), (Tn |= t), (e.baseState = !0)),
            n)
          : (e.baseState && ((e.baseState = !1), (fe = !0)),
            (e.memoizedState = t));
}
function bf(e, n) {
     var t = O;
     (O = t !== 0 && 4 > t ? t : 4), e(!0);
     var r = Al.transition;
     Al.transition = {};
     try {
          e(!1), n();
     } finally {
          (O = t), (Al.transition = r);
     }
}
function Na() {
     return Ne().memoizedState;
}
function ed(e, n, t) {
     var r = cn(e);
     if (
          ((t = {
               lane: r,
               action: t,
               hasEagerState: !1,
               eagerState: null,
               next: null,
          }),
          Pa(e))
     )
          za(n, t);
     else if (((t = la(e, n, t, r)), t !== null)) {
          var l = ue();
          Oe(t, e, r, l), Ta(t, n, r);
     }
}
function nd(e, n, t) {
     var r = cn(e),
          l = {
               lane: r,
               action: t,
               hasEagerState: !1,
               eagerState: null,
               next: null,
          };
     if (Pa(e)) za(n, l);
     else {
          var o = e.alternate;
          if (
               e.lanes === 0 &&
               (o === null || o.lanes === 0) &&
               ((o = n.lastRenderedReducer), o !== null)
          )
               try {
                    var i = n.lastRenderedState,
                         u = o(i, t);
                    if (
                         ((l.hasEagerState = !0), (l.eagerState = u), Ie(u, i))
                    ) {
                         var s = n.interleaved;
                         s === null
                              ? ((l.next = l), pi(n))
                              : ((l.next = s.next), (s.next = l)),
                              (n.interleaved = l);
                         return;
                    }
               } catch {
               } finally {
               }
          (t = la(e, n, l, r)),
               t !== null && ((l = ue()), Oe(t, e, r, l), Ta(t, n, r));
     }
}
function Pa(e) {
     var n = e.alternate;
     return e === A || (n !== null && n === A);
}
function za(e, n) {
     zt = Xr = !0;
     var t = e.pending;
     t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
          (e.pending = n);
}
function Ta(e, n, t) {
     if (t & 4194240) {
          var r = n.lanes;
          (r &= e.pendingLanes), (t |= r), (n.lanes = t), bo(e, t);
     }
}
var Gr = {
          readContext: _e,
          useCallback: te,
          useContext: te,
          useEffect: te,
          useImperativeHandle: te,
          useInsertionEffect: te,
          useLayoutEffect: te,
          useMemo: te,
          useReducer: te,
          useRef: te,
          useState: te,
          useDebugValue: te,
          useDeferredValue: te,
          useTransition: te,
          useMutableSource: te,
          useSyncExternalStore: te,
          useId: te,
          unstable_isNewReconciler: !1,
     },
     td = {
          readContext: _e,
          useCallback: function (e, n) {
               return (De().memoizedState = [e, n === void 0 ? null : n]), e;
          },
          useContext: _e,
          useEffect: _u,
          useImperativeHandle: function (e, n, t) {
               return (
                    (t = t != null ? t.concat([e]) : null),
                    Nr(4194308, 4, Sa.bind(null, n, e), t)
               );
          },
          useLayoutEffect: function (e, n) {
               return Nr(4194308, 4, e, n);
          },
          useInsertionEffect: function (e, n) {
               return Nr(4, 2, e, n);
          },
          useMemo: function (e, n) {
               var t = De();
               return (
                    (n = n === void 0 ? null : n),
                    (e = e()),
                    (t.memoizedState = [e, n]),
                    e
               );
          },
          useReducer: function (e, n, t) {
               var r = De();
               return (
                    (n = t !== void 0 ? t(n) : n),
                    (r.memoizedState = r.baseState = n),
                    (e = {
                         pending: null,
                         interleaved: null,
                         lanes: 0,
                         dispatch: null,
                         lastRenderedReducer: e,
                         lastRenderedState: n,
                    }),
                    (r.queue = e),
                    (e = e.dispatch = ed.bind(null, A, e)),
                    [r.memoizedState, e]
               );
          },
          useRef: function (e) {
               var n = De();
               return (e = { current: e }), (n.memoizedState = e);
          },
          useState: Cu,
          useDebugValue: xi,
          useDeferredValue: function (e) {
               return (De().memoizedState = e);
          },
          useTransition: function () {
               var e = Cu(!1),
                    n = e[0];
               return (
                    (e = bf.bind(null, e[1])), (De().memoizedState = e), [n, e]
               );
          },
          useMutableSource: function () {},
          useSyncExternalStore: function (e, n, t) {
               var r = A,
                    l = De();
               if (U) {
                    if (t === void 0) throw Error(y(407));
                    t = t();
               } else {
                    if (((t = n()), q === null)) throw Error(y(349));
                    zn & 30 || pa(r, n, t);
               }
               l.memoizedState = t;
               var o = { value: t, getSnapshot: n };
               return (
                    (l.queue = o),
                    _u(ha.bind(null, r, o, e), [e]),
                    (r.flags |= 2048),
                    Yt(9, ma.bind(null, r, o, t, n), void 0, null),
                    t
               );
          },
          useId: function () {
               var e = De(),
                    n = q.identifierPrefix;
               if (U) {
                    var t = He,
                         r = Be;
                    (t = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + t),
                         (n = ":" + n + "R" + t),
                         (t = Qt++),
                         0 < t && (n += "H" + t.toString(32)),
                         (n += ":");
               } else (t = qf++), (n = ":" + n + "r" + t.toString(32) + ":");
               return (e.memoizedState = n);
          },
          unstable_isNewReconciler: !1,
     },
     rd = {
          readContext: _e,
          useCallback: Ea,
          useContext: _e,
          useEffect: Si,
          useImperativeHandle: xa,
          useInsertionEffect: wa,
          useLayoutEffect: ka,
          useMemo: Ca,
          useReducer: Vl,
          useRef: ga,
          useState: function () {
               return Vl(Kt);
          },
          useDebugValue: xi,
          useDeferredValue: function (e) {
               var n = Ne();
               return _a(n, Y.memoizedState, e);
          },
          useTransition: function () {
               var e = Vl(Kt)[0],
                    n = Ne().memoizedState;
               return [e, n];
          },
          useMutableSource: fa,
          useSyncExternalStore: da,
          useId: Na,
          unstable_isNewReconciler: !1,
     },
     ld = {
          readContext: _e,
          useCallback: Ea,
          useContext: _e,
          useEffect: Si,
          useImperativeHandle: xa,
          useInsertionEffect: wa,
          useLayoutEffect: ka,
          useMemo: Ca,
          useReducer: Bl,
          useRef: ga,
          useState: function () {
               return Bl(Kt);
          },
          useDebugValue: xi,
          useDeferredValue: function (e) {
               var n = Ne();
               return Y === null
                    ? (n.memoizedState = e)
                    : _a(n, Y.memoizedState, e);
          },
          useTransition: function () {
               var e = Bl(Kt)[0],
                    n = Ne().memoizedState;
               return [e, n];
          },
          useMutableSource: fa,
          useSyncExternalStore: da,
          useId: Na,
          unstable_isNewReconciler: !1,
     };
function rt(e, n) {
     try {
          var t = "",
               r = n;
          do (t += jc(r)), (r = r.return);
          while (r);
          var l = t;
     } catch (o) {
          l =
               `
Error generating stack: ` +
               o.message +
               `
` +
               o.stack;
     }
     return { value: e, source: n, stack: l, digest: null };
}
function Hl(e, n, t) {
     return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Po(e, n) {
     try {
          console.error(n.value);
     } catch (t) {
          setTimeout(function () {
               throw t;
          });
     }
}
var od = typeof WeakMap == "function" ? WeakMap : Map;
function La(e, n, t) {
     (t = We(-1, t)), (t.tag = 3), (t.payload = { element: null });
     var r = n.value;
     return (
          (t.callback = function () {
               Jr || ((Jr = !0), (Fo = r)), Po(e, n);
          }),
          t
     );
}
function ja(e, n, t) {
     (t = We(-1, t)), (t.tag = 3);
     var r = e.type.getDerivedStateFromError;
     if (typeof r == "function") {
          var l = n.value;
          (t.payload = function () {
               return r(l);
          }),
               (t.callback = function () {
                    Po(e, n);
               });
     }
     var o = e.stateNode;
     return (
          o !== null &&
               typeof o.componentDidCatch == "function" &&
               (t.callback = function () {
                    Po(e, n),
                         typeof r != "function" &&
                              (an === null
                                   ? (an = new Set([this]))
                                   : an.add(this));
                    var i = n.stack;
                    this.componentDidCatch(n.value, {
                         componentStack: i !== null ? i : "",
                    });
               }),
          t
     );
}
function Nu(e, n, t) {
     var r = e.pingCache;
     if (r === null) {
          r = e.pingCache = new od();
          var l = new Set();
          r.set(n, l);
     } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
     l.has(t) || (l.add(t), (e = wd.bind(null, e, n, t)), n.then(e, e));
}
function Pu(e) {
     do {
          var n;
          if (
               ((n = e.tag === 13) &&
                    ((n = e.memoizedState),
                    (n = n !== null ? n.dehydrated !== null : !0)),
               n)
          )
               return e;
          e = e.return;
     } while (e !== null);
     return null;
}
function zu(e, n, t, r, l) {
     return e.mode & 1
          ? ((e.flags |= 65536), (e.lanes = l), e)
          : (e === n
                 ? (e.flags |= 65536)
                 : ((e.flags |= 128),
                   (t.flags |= 131072),
                   (t.flags &= -52805),
                   t.tag === 1 &&
                        (t.alternate === null
                             ? (t.tag = 17)
                             : ((n = We(-1, 1)), (n.tag = 2), sn(t, n, 1))),
                   (t.lanes |= 1)),
            e);
}
var id = Ge.ReactCurrentOwner,
     fe = !1;
function ie(e, n, t, r) {
     n.child = e === null ? aa(n, null, t, r) : nt(n, e.child, t, r);
}
function Tu(e, n, t, r, l) {
     t = t.render;
     var o = n.ref;
     return (
          Zn(n, l),
          (r = wi(e, n, t, r, o, l)),
          (t = ki()),
          e !== null && !fe
               ? ((n.updateQueue = e.updateQueue),
                 (n.flags &= -2053),
                 (e.lanes &= ~l),
                 Xe(e, n, l))
               : (U && t && ui(n), (n.flags |= 1), ie(e, n, r, l), n.child)
     );
}
function Lu(e, n, t, r, l) {
     if (e === null) {
          var o = t.type;
          return typeof o == "function" &&
               !Li(o) &&
               o.defaultProps === void 0 &&
               t.compare === null &&
               t.defaultProps === void 0
               ? ((n.tag = 15), (n.type = o), Ra(e, n, o, r, l))
               : ((e = Lr(t.type, null, r, n, n.mode, l)),
                 (e.ref = n.ref),
                 (e.return = n),
                 (n.child = e));
     }
     if (((o = e.child), !(e.lanes & l))) {
          var i = o.memoizedProps;
          if (
               ((t = t.compare),
               (t = t !== null ? t : $t),
               t(i, r) && e.ref === n.ref)
          )
               return Xe(e, n, l);
     }
     return (
          (n.flags |= 1),
          (e = fn(o, r)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e)
     );
}
function Ra(e, n, t, r, l) {
     if (e !== null) {
          var o = e.memoizedProps;
          if ($t(o, r) && e.ref === n.ref)
               if (((fe = !1), (n.pendingProps = r = o), (e.lanes & l) !== 0))
                    e.flags & 131072 && (fe = !0);
               else return (n.lanes = e.lanes), Xe(e, n, l);
     }
     return zo(e, n, t, r, l);
}
function Oa(e, n, t) {
     var r = n.pendingProps,
          l = r.children,
          o = e !== null ? e.memoizedState : null;
     if (r.mode === "hidden")
          if (!(n.mode & 1))
               (n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
               }),
                    I(Qn, he),
                    (he |= t);
          else {
               if (!(t & 1073741824))
                    return (
                         (e = o !== null ? o.baseLanes | t : t),
                         (n.lanes = n.childLanes = 1073741824),
                         (n.memoizedState = {
                              baseLanes: e,
                              cachePool: null,
                              transitions: null,
                         }),
                         (n.updateQueue = null),
                         I(Qn, he),
                         (he |= e),
                         null
                    );
               (n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
               }),
                    (r = o !== null ? o.baseLanes : t),
                    I(Qn, he),
                    (he |= r);
          }
     else
          o !== null
               ? ((r = o.baseLanes | t), (n.memoizedState = null))
               : (r = t),
               I(Qn, he),
               (he |= r);
     return ie(e, n, l, t), n.child;
}
function Ia(e, n) {
     var t = n.ref;
     ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
          ((n.flags |= 512), (n.flags |= 2097152));
}
function zo(e, n, t, r, l) {
     var o = pe(t) ? Nn : oe.current;
     return (
          (o = bn(n, o)),
          Zn(n, l),
          (t = wi(e, n, t, r, o, l)),
          (r = ki()),
          e !== null && !fe
               ? ((n.updateQueue = e.updateQueue),
                 (n.flags &= -2053),
                 (e.lanes &= ~l),
                 Xe(e, n, l))
               : (U && r && ui(n), (n.flags |= 1), ie(e, n, t, l), n.child)
     );
}
function ju(e, n, t, r, l) {
     if (pe(t)) {
          var o = !0;
          Vr(n);
     } else o = !1;
     if ((Zn(n, l), n.stateNode === null))
          Pr(e, n), ua(n, t, r), No(n, t, r, l), (r = !0);
     else if (e === null) {
          var i = n.stateNode,
               u = n.memoizedProps;
          i.props = u;
          var s = i.context,
               c = t.contextType;
          typeof c == "object" && c !== null
               ? (c = _e(c))
               : ((c = pe(t) ? Nn : oe.current), (c = bn(n, c)));
          var m = t.getDerivedStateFromProps,
               h =
                    typeof m == "function" ||
                    typeof i.getSnapshotBeforeUpdate == "function";
          h ||
               (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof i.componentWillReceiveProps != "function") ||
               ((u !== r || s !== c) && xu(n, i, r, c)),
               (qe = !1);
          var p = n.memoizedState;
          (i.state = p),
               Kr(n, r, i, l),
               (s = n.memoizedState),
               u !== r || p !== s || de.current || qe
                    ? (typeof m == "function" &&
                           (_o(n, t, m, r), (s = n.memoizedState)),
                      (u = qe || Su(n, t, u, r, p, s, c))
                           ? (h ||
                                  (typeof i.UNSAFE_componentWillMount !=
                                       "function" &&
                                       typeof i.componentWillMount !=
                                            "function") ||
                                  (typeof i.componentWillMount == "function" &&
                                       i.componentWillMount(),
                                  typeof i.UNSAFE_componentWillMount ==
                                       "function" &&
                                       i.UNSAFE_componentWillMount()),
                             typeof i.componentDidMount == "function" &&
                                  (n.flags |= 4194308))
                           : (typeof i.componentDidMount == "function" &&
                                  (n.flags |= 4194308),
                             (n.memoizedProps = r),
                             (n.memoizedState = s)),
                      (i.props = r),
                      (i.state = s),
                      (i.context = c),
                      (r = u))
                    : (typeof i.componentDidMount == "function" &&
                           (n.flags |= 4194308),
                      (r = !1));
     } else {
          (i = n.stateNode),
               oa(e, n),
               (u = n.memoizedProps),
               (c = n.type === n.elementType ? u : Te(n.type, u)),
               (i.props = c),
               (h = n.pendingProps),
               (p = i.context),
               (s = t.contextType),
               typeof s == "object" && s !== null
                    ? (s = _e(s))
                    : ((s = pe(t) ? Nn : oe.current), (s = bn(n, s)));
          var g = t.getDerivedStateFromProps;
          (m =
               typeof g == "function" ||
               typeof i.getSnapshotBeforeUpdate == "function") ||
               (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof i.componentWillReceiveProps != "function") ||
               ((u !== h || p !== s) && xu(n, i, r, s)),
               (qe = !1),
               (p = n.memoizedState),
               (i.state = p),
               Kr(n, r, i, l);
          var w = n.memoizedState;
          u !== h || p !== w || de.current || qe
               ? (typeof g == "function" &&
                      (_o(n, t, g, r), (w = n.memoizedState)),
                 (c = qe || Su(n, t, c, r, p, w, s) || !1)
                      ? (m ||
                             (typeof i.UNSAFE_componentWillUpdate !=
                                  "function" &&
                                  typeof i.componentWillUpdate != "function") ||
                             (typeof i.componentWillUpdate == "function" &&
                                  i.componentWillUpdate(r, w, s),
                             typeof i.UNSAFE_componentWillUpdate ==
                                  "function" &&
                                  i.UNSAFE_componentWillUpdate(r, w, s)),
                        typeof i.componentDidUpdate == "function" &&
                             (n.flags |= 4),
                        typeof i.getSnapshotBeforeUpdate == "function" &&
                             (n.flags |= 1024))
                      : (typeof i.componentDidUpdate != "function" ||
                             (u === e.memoizedProps && p === e.memoizedState) ||
                             (n.flags |= 4),
                        typeof i.getSnapshotBeforeUpdate != "function" ||
                             (u === e.memoizedProps && p === e.memoizedState) ||
                             (n.flags |= 1024),
                        (n.memoizedProps = r),
                        (n.memoizedState = w)),
                 (i.props = r),
                 (i.state = w),
                 (i.context = s),
                 (r = c))
               : (typeof i.componentDidUpdate != "function" ||
                      (u === e.memoizedProps && p === e.memoizedState) ||
                      (n.flags |= 4),
                 typeof i.getSnapshotBeforeUpdate != "function" ||
                      (u === e.memoizedProps && p === e.memoizedState) ||
                      (n.flags |= 1024),
                 (r = !1));
     }
     return To(e, n, t, r, o, l);
}
function To(e, n, t, r, l, o) {
     Ia(e, n);
     var i = (n.flags & 128) !== 0;
     if (!r && !i) return l && vu(n, t, !1), Xe(e, n, o);
     (r = n.stateNode), (id.current = n);
     var u =
          i && typeof t.getDerivedStateFromError != "function"
               ? null
               : r.render();
     return (
          (n.flags |= 1),
          e !== null && i
               ? ((n.child = nt(n, e.child, null, o)),
                 (n.child = nt(n, null, u, o)))
               : ie(e, n, u, o),
          (n.memoizedState = r.state),
          l && vu(n, t, !0),
          n.child
     );
}
function Ma(e) {
     var n = e.stateNode;
     n.pendingContext
          ? hu(e, n.pendingContext, n.pendingContext !== n.context)
          : n.context && hu(e, n.context, !1),
          hi(e, n.containerInfo);
}
function Ru(e, n, t, r, l) {
     return et(), ai(l), (n.flags |= 256), ie(e, n, t, r), n.child;
}
var Lo = { dehydrated: null, treeContext: null, retryLane: 0 };
function jo(e) {
     return { baseLanes: e, cachePool: null, transitions: null };
}
function Da(e, n, t) {
     var r = n.pendingProps,
          l = $.current,
          o = !1,
          i = (n.flags & 128) !== 0,
          u;
     if (
          ((u = i) ||
               (u =
                    e !== null && e.memoizedState === null
                         ? !1
                         : (l & 2) !== 0),
          u
               ? ((o = !0), (n.flags &= -129))
               : (e === null || e.memoizedState !== null) && (l |= 1),
          I($, l & 1),
          e === null)
     )
          return (
               Eo(n),
               (e = n.memoizedState),
               e !== null && ((e = e.dehydrated), e !== null)
                    ? (n.mode & 1
                           ? e.data === "$!"
                                ? (n.lanes = 8)
                                : (n.lanes = 1073741824)
                           : (n.lanes = 1),
                      null)
                    : ((i = r.children),
                      (e = r.fallback),
                      o
                           ? ((r = n.mode),
                             (o = n.child),
                             (i = { mode: "hidden", children: i }),
                             !(r & 1) && o !== null
                                  ? ((o.childLanes = 0), (o.pendingProps = i))
                                  : (o = dl(i, r, 0, null)),
                             (e = _n(e, r, t, null)),
                             (o.return = n),
                             (e.return = n),
                             (o.sibling = e),
                             (n.child = o),
                             (n.child.memoizedState = jo(t)),
                             (n.memoizedState = Lo),
                             e)
                           : Ei(n, i))
          );
     if (
          ((l = e.memoizedState),
          l !== null && ((u = l.dehydrated), u !== null))
     )
          return ud(e, n, i, r, u, l, t);
     if (o) {
          (o = r.fallback), (i = n.mode), (l = e.child), (u = l.sibling);
          var s = { mode: "hidden", children: r.children };
          return (
               !(i & 1) && n.child !== l
                    ? ((r = n.child),
                      (r.childLanes = 0),
                      (r.pendingProps = s),
                      (n.deletions = null))
                    : ((r = fn(l, s)),
                      (r.subtreeFlags = l.subtreeFlags & 14680064)),
               u !== null
                    ? (o = fn(u, o))
                    : ((o = _n(o, i, t, null)), (o.flags |= 2)),
               (o.return = n),
               (r.return = n),
               (r.sibling = o),
               (n.child = r),
               (r = o),
               (o = n.child),
               (i = e.child.memoizedState),
               (i =
                    i === null
                         ? jo(t)
                         : {
                                baseLanes: i.baseLanes | t,
                                cachePool: null,
                                transitions: i.transitions,
                           }),
               (o.memoizedState = i),
               (o.childLanes = e.childLanes & ~t),
               (n.memoizedState = Lo),
               r
          );
     }
     return (
          (o = e.child),
          (e = o.sibling),
          (r = fn(o, { mode: "visible", children: r.children })),
          !(n.mode & 1) && (r.lanes = t),
          (r.return = n),
          (r.sibling = null),
          e !== null &&
               ((t = n.deletions),
               t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
          (n.child = r),
          (n.memoizedState = null),
          r
     );
}
function Ei(e, n) {
     return (
          (n = dl({ mode: "visible", children: n }, e.mode, 0, null)),
          (n.return = e),
          (e.child = n)
     );
}
function hr(e, n, t, r) {
     return (
          r !== null && ai(r),
          nt(n, e.child, null, t),
          (e = Ei(n, n.pendingProps.children)),
          (e.flags |= 2),
          (n.memoizedState = null),
          e
     );
}
function ud(e, n, t, r, l, o, i) {
     if (t)
          return n.flags & 256
               ? ((n.flags &= -257), (r = Hl(Error(y(422)))), hr(e, n, i, r))
               : n.memoizedState !== null
               ? ((n.child = e.child), (n.flags |= 128), null)
               : ((o = r.fallback),
                 (l = n.mode),
                 (r = dl(
                      { mode: "visible", children: r.children },
                      l,
                      0,
                      null
                 )),
                 (o = _n(o, l, i, null)),
                 (o.flags |= 2),
                 (r.return = n),
                 (o.return = n),
                 (r.sibling = o),
                 (n.child = r),
                 n.mode & 1 && nt(n, e.child, null, i),
                 (n.child.memoizedState = jo(i)),
                 (n.memoizedState = Lo),
                 o);
     if (!(n.mode & 1)) return hr(e, n, i, null);
     if (l.data === "$!") {
          if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
          return (
               (r = u),
               (o = Error(y(419))),
               (r = Hl(o, r, void 0)),
               hr(e, n, i, r)
          );
     }
     if (((u = (i & e.childLanes) !== 0), fe || u)) {
          if (((r = q), r !== null)) {
               switch (i & -i) {
                    case 4:
                         l = 2;
                         break;
                    case 16:
                         l = 8;
                         break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                         l = 32;
                         break;
                    case 536870912:
                         l = 268435456;
                         break;
                    default:
                         l = 0;
               }
               (l = l & (r.suspendedLanes | i) ? 0 : l),
                    l !== 0 &&
                         l !== o.retryLane &&
                         ((o.retryLane = l), Ye(e, l), Oe(r, e, l, -1));
          }
          return Ti(), (r = Hl(Error(y(421)))), hr(e, n, i, r);
     }
     return l.data === "$?"
          ? ((n.flags |= 128),
            (n.child = e.child),
            (n = kd.bind(null, e)),
            (l._reactRetry = n),
            null)
          : ((e = o.treeContext),
            (ve = un(l.nextSibling)),
            (ye = n),
            (U = !0),
            (je = null),
            e !== null &&
                 ((Se[xe++] = Be),
                 (Se[xe++] = He),
                 (Se[xe++] = Pn),
                 (Be = e.id),
                 (He = e.overflow),
                 (Pn = n)),
            (n = Ei(n, r.children)),
            (n.flags |= 4096),
            n);
}
function Ou(e, n, t) {
     e.lanes |= n;
     var r = e.alternate;
     r !== null && (r.lanes |= n), Co(e.return, n, t);
}
function Wl(e, n, t, r, l) {
     var o = e.memoizedState;
     o === null
          ? (e.memoizedState = {
                 isBackwards: n,
                 rendering: null,
                 renderingStartTime: 0,
                 last: r,
                 tail: t,
                 tailMode: l,
            })
          : ((o.isBackwards = n),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = t),
            (o.tailMode = l));
}
function Fa(e, n, t) {
     var r = n.pendingProps,
          l = r.revealOrder,
          o = r.tail;
     if ((ie(e, n, r.children, t), (r = $.current), r & 2))
          (r = (r & 1) | 2), (n.flags |= 128);
     else {
          if (e !== null && e.flags & 128)
               e: for (e = n.child; e !== null; ) {
                    if (e.tag === 13) e.memoizedState !== null && Ou(e, t, n);
                    else if (e.tag === 19) Ou(e, t, n);
                    else if (e.child !== null) {
                         (e.child.return = e), (e = e.child);
                         continue;
                    }
                    if (e === n) break e;
                    for (; e.sibling === null; ) {
                         if (e.return === null || e.return === n) break e;
                         e = e.return;
                    }
                    (e.sibling.return = e.return), (e = e.sibling);
               }
          r &= 1;
     }
     if ((I($, r), !(n.mode & 1))) n.memoizedState = null;
     else
          switch (l) {
               case "forwards":
                    for (t = n.child, l = null; t !== null; )
                         (e = t.alternate),
                              e !== null && Yr(e) === null && (l = t),
                              (t = t.sibling);
                    (t = l),
                         t === null
                              ? ((l = n.child), (n.child = null))
                              : ((l = t.sibling), (t.sibling = null)),
                         Wl(n, !1, l, t, o);
                    break;
               case "backwards":
                    for (t = null, l = n.child, n.child = null; l !== null; ) {
                         if (
                              ((e = l.alternate), e !== null && Yr(e) === null)
                         ) {
                              n.child = l;
                              break;
                         }
                         (e = l.sibling), (l.sibling = t), (t = l), (l = e);
                    }
                    Wl(n, !0, t, null, o);
                    break;
               case "together":
                    Wl(n, !1, null, null, void 0);
                    break;
               default:
                    n.memoizedState = null;
          }
     return n.child;
}
function Pr(e, n) {
     !(n.mode & 1) &&
          e !== null &&
          ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Xe(e, n, t) {
     if (
          (e !== null && (n.dependencies = e.dependencies),
          (Tn |= n.lanes),
          !(t & n.childLanes))
     )
          return null;
     if (e !== null && n.child !== e.child) throw Error(y(153));
     if (n.child !== null) {
          for (
               e = n.child,
                    t = fn(e, e.pendingProps),
                    n.child = t,
                    t.return = n;
               e.sibling !== null;

          )
               (e = e.sibling),
                    (t = t.sibling = fn(e, e.pendingProps)),
                    (t.return = n);
          t.sibling = null;
     }
     return n.child;
}
function sd(e, n, t) {
     switch (n.tag) {
          case 3:
               Ma(n), et();
               break;
          case 5:
               ca(n);
               break;
          case 1:
               pe(n.type) && Vr(n);
               break;
          case 4:
               hi(n, n.stateNode.containerInfo);
               break;
          case 10:
               var r = n.type._context,
                    l = n.memoizedProps.value;
               I(Wr, r._currentValue), (r._currentValue = l);
               break;
          case 13:
               if (((r = n.memoizedState), r !== null))
                    return r.dehydrated !== null
                         ? (I($, $.current & 1), (n.flags |= 128), null)
                         : t & n.child.childLanes
                         ? Da(e, n, t)
                         : (I($, $.current & 1),
                           (e = Xe(e, n, t)),
                           e !== null ? e.sibling : null);
               I($, $.current & 1);
               break;
          case 19:
               if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
                    if (r) return Fa(e, n, t);
                    n.flags |= 128;
               }
               if (
                    ((l = n.memoizedState),
                    l !== null &&
                         ((l.rendering = null),
                         (l.tail = null),
                         (l.lastEffect = null)),
                    I($, $.current),
                    r)
               )
                    break;
               return null;
          case 22:
          case 23:
               return (n.lanes = 0), Oa(e, n, t);
     }
     return Xe(e, n, t);
}
var Ua, Ro, $a, Aa;
Ua = function (e, n) {
     for (var t = n.child; t !== null; ) {
          if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
          else if (t.tag !== 4 && t.child !== null) {
               (t.child.return = t), (t = t.child);
               continue;
          }
          if (t === n) break;
          for (; t.sibling === null; ) {
               if (t.return === null || t.return === n) return;
               t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
     }
};
Ro = function () {};
$a = function (e, n, t, r) {
     var l = e.memoizedProps;
     if (l !== r) {
          (e = n.stateNode), En($e.current);
          var o = null;
          switch (t) {
               case "input":
                    (l = bl(e, l)), (r = bl(e, r)), (o = []);
                    break;
               case "select":
                    (l = V({}, l, { value: void 0 })),
                         (r = V({}, r, { value: void 0 })),
                         (o = []);
                    break;
               case "textarea":
                    (l = to(e, l)), (r = to(e, r)), (o = []);
                    break;
               default:
                    typeof l.onClick != "function" &&
                         typeof r.onClick == "function" &&
                         (e.onclick = $r);
          }
          lo(t, r);
          var i;
          t = null;
          for (c in l)
               if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                    if (c === "style") {
                         var u = l[c];
                         for (i in u)
                              u.hasOwnProperty(i) &&
                                   (t || (t = {}), (t[i] = ""));
                    } else
                         c !== "dangerouslySetInnerHTML" &&
                              c !== "children" &&
                              c !== "suppressContentEditableWarning" &&
                              c !== "suppressHydrationWarning" &&
                              c !== "autoFocus" &&
                              (Rt.hasOwnProperty(c)
                                   ? o || (o = [])
                                   : (o = o || []).push(c, null));
          for (c in r) {
               var s = r[c];
               if (
                    ((u = l != null ? l[c] : void 0),
                    r.hasOwnProperty(c) && s !== u && (s != null || u != null))
               )
                    if (c === "style")
                         if (u) {
                              for (i in u)
                                   !u.hasOwnProperty(i) ||
                                        (s && s.hasOwnProperty(i)) ||
                                        (t || (t = {}), (t[i] = ""));
                              for (i in s)
                                   s.hasOwnProperty(i) &&
                                        u[i] !== s[i] &&
                                        (t || (t = {}), (t[i] = s[i]));
                         } else t || (o || (o = []), o.push(c, t)), (t = s);
                    else
                         c === "dangerouslySetInnerHTML"
                              ? ((s = s ? s.__html : void 0),
                                (u = u ? u.__html : void 0),
                                s != null &&
                                     u !== s &&
                                     (o = o || []).push(c, s))
                              : c === "children"
                              ? (typeof s != "string" &&
                                     typeof s != "number") ||
                                (o = o || []).push(c, "" + s)
                              : c !== "suppressContentEditableWarning" &&
                                c !== "suppressHydrationWarning" &&
                                (Rt.hasOwnProperty(c)
                                     ? (s != null &&
                                            c === "onScroll" &&
                                            M("scroll", e),
                                       o || u === s || (o = []))
                                     : (o = o || []).push(c, s));
          }
          t && (o = o || []).push("style", t);
          var c = o;
          (n.updateQueue = c) && (n.flags |= 4);
     }
};
Aa = function (e, n, t, r) {
     t !== r && (n.flags |= 4);
};
function yt(e, n) {
     if (!U)
          switch (e.tailMode) {
               case "hidden":
                    n = e.tail;
                    for (var t = null; n !== null; )
                         n.alternate !== null && (t = n), (n = n.sibling);
                    t === null ? (e.tail = null) : (t.sibling = null);
                    break;
               case "collapsed":
                    t = e.tail;
                    for (var r = null; t !== null; )
                         t.alternate !== null && (r = t), (t = t.sibling);
                    r === null
                         ? n || e.tail === null
                              ? (e.tail = null)
                              : (e.tail.sibling = null)
                         : (r.sibling = null);
          }
}
function re(e) {
     var n = e.alternate !== null && e.alternate.child === e.child,
          t = 0,
          r = 0;
     if (n)
          for (var l = e.child; l !== null; )
               (t |= l.lanes | l.childLanes),
                    (r |= l.subtreeFlags & 14680064),
                    (r |= l.flags & 14680064),
                    (l.return = e),
                    (l = l.sibling);
     else
          for (l = e.child; l !== null; )
               (t |= l.lanes | l.childLanes),
                    (r |= l.subtreeFlags),
                    (r |= l.flags),
                    (l.return = e),
                    (l = l.sibling);
     return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function ad(e, n, t) {
     var r = n.pendingProps;
     switch ((si(n), n.tag)) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
               return re(n), null;
          case 1:
               return pe(n.type) && Ar(), re(n), null;
          case 3:
               return (
                    (r = n.stateNode),
                    tt(),
                    D(de),
                    D(oe),
                    yi(),
                    r.pendingContext &&
                         ((r.context = r.pendingContext),
                         (r.pendingContext = null)),
                    (e === null || e.child === null) &&
                         (pr(n)
                              ? (n.flags |= 4)
                              : e === null ||
                                (e.memoizedState.isDehydrated &&
                                     !(n.flags & 256)) ||
                                ((n.flags |= 1024),
                                je !== null && (Ao(je), (je = null)))),
                    Ro(e, n),
                    re(n),
                    null
               );
          case 5:
               vi(n);
               var l = En(Wt.current);
               if (((t = n.type), e !== null && n.stateNode != null))
                    $a(e, n, t, r, l),
                         e.ref !== n.ref &&
                              ((n.flags |= 512), (n.flags |= 2097152));
               else {
                    if (!r) {
                         if (n.stateNode === null) throw Error(y(166));
                         return re(n), null;
                    }
                    if (((e = En($e.current)), pr(n))) {
                         (r = n.stateNode), (t = n.type);
                         var o = n.memoizedProps;
                         switch (
                              ((r[Fe] = n),
                              (r[Bt] = o),
                              (e = (n.mode & 1) !== 0),
                              t)
                         ) {
                              case "dialog":
                                   M("cancel", r), M("close", r);
                                   break;
                              case "iframe":
                              case "object":
                              case "embed":
                                   M("load", r);
                                   break;
                              case "video":
                              case "audio":
                                   for (l = 0; l < xt.length; l++) M(xt[l], r);
                                   break;
                              case "source":
                                   M("error", r);
                                   break;
                              case "img":
                              case "image":
                              case "link":
                                   M("error", r), M("load", r);
                                   break;
                              case "details":
                                   M("toggle", r);
                                   break;
                              case "input":
                                   Bi(r, o), M("invalid", r);
                                   break;
                              case "select":
                                   (r._wrapperState = {
                                        wasMultiple: !!o.multiple,
                                   }),
                                        M("invalid", r);
                                   break;
                              case "textarea":
                                   Wi(r, o), M("invalid", r);
                         }
                         lo(t, o), (l = null);
                         for (var i in o)
                              if (o.hasOwnProperty(i)) {
                                   var u = o[i];
                                   i === "children"
                                        ? typeof u == "string"
                                             ? r.textContent !== u &&
                                               (o.suppressHydrationWarning !==
                                                    !0 &&
                                                    dr(r.textContent, u, e),
                                               (l = ["children", u]))
                                             : typeof u == "number" &&
                                               r.textContent !== "" + u &&
                                               (o.suppressHydrationWarning !==
                                                    !0 &&
                                                    dr(r.textContent, u, e),
                                               (l = ["children", "" + u]))
                                        : Rt.hasOwnProperty(i) &&
                                          u != null &&
                                          i === "onScroll" &&
                                          M("scroll", r);
                              }
                         switch (t) {
                              case "input":
                                   lr(r), Hi(r, o, !0);
                                   break;
                              case "textarea":
                                   lr(r), Qi(r);
                                   break;
                              case "select":
                              case "option":
                                   break;
                              default:
                                   typeof o.onClick == "function" &&
                                        (r.onclick = $r);
                         }
                         (r = l),
                              (n.updateQueue = r),
                              r !== null && (n.flags |= 4);
                    } else {
                         (i = l.nodeType === 9 ? l : l.ownerDocument),
                              e === "http://www.w3.org/1999/xhtml" &&
                                   (e = ps(t)),
                              e === "http://www.w3.org/1999/xhtml"
                                   ? t === "script"
                                        ? ((e = i.createElement("div")),
                                          (e.innerHTML = "<script></script>"),
                                          (e = e.removeChild(e.firstChild)))
                                        : typeof r.is == "string"
                                        ? (e = i.createElement(t, { is: r.is }))
                                        : ((e = i.createElement(t)),
                                          t === "select" &&
                                               ((i = e),
                                               r.multiple
                                                    ? (i.multiple = !0)
                                                    : r.size &&
                                                      (i.size = r.size)))
                                   : (e = i.createElementNS(e, t)),
                              (e[Fe] = n),
                              (e[Bt] = r),
                              Ua(e, n, !1, !1),
                              (n.stateNode = e);
                         e: {
                              switch (((i = oo(t, r)), t)) {
                                   case "dialog":
                                        M("cancel", e), M("close", e), (l = r);
                                        break;
                                   case "iframe":
                                   case "object":
                                   case "embed":
                                        M("load", e), (l = r);
                                        break;
                                   case "video":
                                   case "audio":
                                        for (l = 0; l < xt.length; l++)
                                             M(xt[l], e);
                                        l = r;
                                        break;
                                   case "source":
                                        M("error", e), (l = r);
                                        break;
                                   case "img":
                                   case "image":
                                   case "link":
                                        M("error", e), M("load", e), (l = r);
                                        break;
                                   case "details":
                                        M("toggle", e), (l = r);
                                        break;
                                   case "input":
                                        Bi(e, r),
                                             (l = bl(e, r)),
                                             M("invalid", e);
                                        break;
                                   case "option":
                                        l = r;
                                        break;
                                   case "select":
                                        (e._wrapperState = {
                                             wasMultiple: !!r.multiple,
                                        }),
                                             (l = V({}, r, { value: void 0 })),
                                             M("invalid", e);
                                        break;
                                   case "textarea":
                                        Wi(e, r),
                                             (l = to(e, r)),
                                             M("invalid", e);
                                        break;
                                   default:
                                        l = r;
                              }
                              lo(t, l), (u = l);
                              for (o in u)
                                   if (u.hasOwnProperty(o)) {
                                        var s = u[o];
                                        o === "style"
                                             ? vs(e, s)
                                             : o === "dangerouslySetInnerHTML"
                                             ? ((s = s ? s.__html : void 0),
                                               s != null && ms(e, s))
                                             : o === "children"
                                             ? typeof s == "string"
                                                  ? (t !== "textarea" ||
                                                         s !== "") &&
                                                    Ot(e, s)
                                                  : typeof s == "number" &&
                                                    Ot(e, "" + s)
                                             : o !==
                                                    "suppressContentEditableWarning" &&
                                               o !==
                                                    "suppressHydrationWarning" &&
                                               o !== "autoFocus" &&
                                               (Rt.hasOwnProperty(o)
                                                    ? s != null &&
                                                      o === "onScroll" &&
                                                      M("scroll", e)
                                                    : s != null &&
                                                      Yo(e, o, s, i));
                                   }
                              switch (t) {
                                   case "input":
                                        lr(e), Hi(e, r, !1);
                                        break;
                                   case "textarea":
                                        lr(e), Qi(e);
                                        break;
                                   case "option":
                                        r.value != null &&
                                             e.setAttribute(
                                                  "value",
                                                  "" + dn(r.value)
                                             );
                                        break;
                                   case "select":
                                        (e.multiple = !!r.multiple),
                                             (o = r.value),
                                             o != null
                                                  ? Kn(e, !!r.multiple, o, !1)
                                                  : r.defaultValue != null &&
                                                    Kn(
                                                         e,
                                                         !!r.multiple,
                                                         r.defaultValue,
                                                         !0
                                                    );
                                        break;
                                   default:
                                        typeof l.onClick == "function" &&
                                             (e.onclick = $r);
                              }
                              switch (t) {
                                   case "button":
                                   case "input":
                                   case "select":
                                   case "textarea":
                                        r = !!r.autoFocus;
                                        break e;
                                   case "img":
                                        r = !0;
                                        break e;
                                   default:
                                        r = !1;
                              }
                         }
                         r && (n.flags |= 4);
                    }
                    n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
               }
               return re(n), null;
          case 6:
               if (e && n.stateNode != null) Aa(e, n, e.memoizedProps, r);
               else {
                    if (typeof r != "string" && n.stateNode === null)
                         throw Error(y(166));
                    if (((t = En(Wt.current)), En($e.current), pr(n))) {
                         if (
                              ((r = n.stateNode),
                              (t = n.memoizedProps),
                              (r[Fe] = n),
                              (o = r.nodeValue !== t) && ((e = ye), e !== null))
                         )
                              switch (e.tag) {
                                   case 3:
                                        dr(r.nodeValue, t, (e.mode & 1) !== 0);
                                        break;
                                   case 5:
                                        e.memoizedProps
                                             .suppressHydrationWarning !== !0 &&
                                             dr(
                                                  r.nodeValue,
                                                  t,
                                                  (e.mode & 1) !== 0
                                             );
                              }
                         o && (n.flags |= 4);
                    } else
                         (r = (
                              t.nodeType === 9 ? t : t.ownerDocument
                         ).createTextNode(r)),
                              (r[Fe] = n),
                              (n.stateNode = r);
               }
               return re(n), null;
          case 13:
               if (
                    (D($),
                    (r = n.memoizedState),
                    e === null ||
                         (e.memoizedState !== null &&
                              e.memoizedState.dehydrated !== null))
               ) {
                    if (U && ve !== null && n.mode & 1 && !(n.flags & 128))
                         ra(), et(), (n.flags |= 98560), (o = !1);
                    else if (
                         ((o = pr(n)), r !== null && r.dehydrated !== null)
                    ) {
                         if (e === null) {
                              if (!o) throw Error(y(318));
                              if (
                                   ((o = n.memoizedState),
                                   (o = o !== null ? o.dehydrated : null),
                                   !o)
                              )
                                   throw Error(y(317));
                              o[Fe] = n;
                         } else
                              et(),
                                   !(n.flags & 128) && (n.memoizedState = null),
                                   (n.flags |= 4);
                         re(n), (o = !1);
                    } else je !== null && (Ao(je), (je = null)), (o = !0);
                    if (!o) return n.flags & 65536 ? n : null;
               }
               return n.flags & 128
                    ? ((n.lanes = t), n)
                    : ((r = r !== null),
                      r !== (e !== null && e.memoizedState !== null) &&
                           r &&
                           ((n.child.flags |= 8192),
                           n.mode & 1 &&
                                (e === null || $.current & 1
                                     ? X === 0 && (X = 3)
                                     : Ti())),
                      n.updateQueue !== null && (n.flags |= 4),
                      re(n),
                      null);
          case 4:
               return (
                    tt(),
                    Ro(e, n),
                    e === null && At(n.stateNode.containerInfo),
                    re(n),
                    null
               );
          case 10:
               return di(n.type._context), re(n), null;
          case 17:
               return pe(n.type) && Ar(), re(n), null;
          case 19:
               if ((D($), (o = n.memoizedState), o === null))
                    return re(n), null;
               if (((r = (n.flags & 128) !== 0), (i = o.rendering), i === null))
                    if (r) yt(o, !1);
                    else {
                         if (X !== 0 || (e !== null && e.flags & 128))
                              for (e = n.child; e !== null; ) {
                                   if (((i = Yr(e)), i !== null)) {
                                        for (
                                             n.flags |= 128,
                                                  yt(o, !1),
                                                  r = i.updateQueue,
                                                  r !== null &&
                                                       ((n.updateQueue = r),
                                                       (n.flags |= 4)),
                                                  n.subtreeFlags = 0,
                                                  r = t,
                                                  t = n.child;
                                             t !== null;

                                        )
                                             (o = t),
                                                  (e = r),
                                                  (o.flags &= 14680066),
                                                  (i = o.alternate),
                                                  i === null
                                                       ? ((o.childLanes = 0),
                                                         (o.lanes = e),
                                                         (o.child = null),
                                                         (o.subtreeFlags = 0),
                                                         (o.memoizedProps =
                                                              null),
                                                         (o.memoizedState =
                                                              null),
                                                         (o.updateQueue = null),
                                                         (o.dependencies =
                                                              null),
                                                         (o.stateNode = null))
                                                       : ((o.childLanes =
                                                              i.childLanes),
                                                         (o.lanes = i.lanes),
                                                         (o.child = i.child),
                                                         (o.subtreeFlags = 0),
                                                         (o.deletions = null),
                                                         (o.memoizedProps =
                                                              i.memoizedProps),
                                                         (o.memoizedState =
                                                              i.memoizedState),
                                                         (o.updateQueue =
                                                              i.updateQueue),
                                                         (o.type = i.type),
                                                         (e = i.dependencies),
                                                         (o.dependencies =
                                                              e === null
                                                                   ? null
                                                                   : {
                                                                          lanes: e.lanes,
                                                                          firstContext:
                                                                               e.firstContext,
                                                                     })),
                                                  (t = t.sibling);
                                        return (
                                             I($, ($.current & 1) | 2), n.child
                                        );
                                   }
                                   e = e.sibling;
                              }
                         o.tail !== null &&
                              Q() > lt &&
                              ((n.flags |= 128),
                              (r = !0),
                              yt(o, !1),
                              (n.lanes = 4194304));
                    }
               else {
                    if (!r)
                         if (((e = Yr(i)), e !== null)) {
                              if (
                                   ((n.flags |= 128),
                                   (r = !0),
                                   (t = e.updateQueue),
                                   t !== null &&
                                        ((n.updateQueue = t), (n.flags |= 4)),
                                   yt(o, !0),
                                   o.tail === null &&
                                        o.tailMode === "hidden" &&
                                        !i.alternate &&
                                        !U)
                              )
                                   return re(n), null;
                         } else
                              2 * Q() - o.renderingStartTime > lt &&
                                   t !== 1073741824 &&
                                   ((n.flags |= 128),
                                   (r = !0),
                                   yt(o, !1),
                                   (n.lanes = 4194304));
                    o.isBackwards
                         ? ((i.sibling = n.child), (n.child = i))
                         : ((t = o.last),
                           t !== null ? (t.sibling = i) : (n.child = i),
                           (o.last = i));
               }
               return o.tail !== null
                    ? ((n = o.tail),
                      (o.rendering = n),
                      (o.tail = n.sibling),
                      (o.renderingStartTime = Q()),
                      (n.sibling = null),
                      (t = $.current),
                      I($, r ? (t & 1) | 2 : t & 1),
                      n)
                    : (re(n), null);
          case 22:
          case 23:
               return (
                    zi(),
                    (r = n.memoizedState !== null),
                    e !== null &&
                         (e.memoizedState !== null) !== r &&
                         (n.flags |= 8192),
                    r && n.mode & 1
                         ? he & 1073741824 &&
                           (re(n), n.subtreeFlags & 6 && (n.flags |= 8192))
                         : re(n),
                    null
               );
          case 24:
               return null;
          case 25:
               return null;
     }
     throw Error(y(156, n.tag));
}
function cd(e, n) {
     switch ((si(n), n.tag)) {
          case 1:
               return (
                    pe(n.type) && Ar(),
                    (e = n.flags),
                    e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
               );
          case 3:
               return (
                    tt(),
                    D(de),
                    D(oe),
                    yi(),
                    (e = n.flags),
                    e & 65536 && !(e & 128)
                         ? ((n.flags = (e & -65537) | 128), n)
                         : null
               );
          case 5:
               return vi(n), null;
          case 13:
               if (
                    (D($),
                    (e = n.memoizedState),
                    e !== null && e.dehydrated !== null)
               ) {
                    if (n.alternate === null) throw Error(y(340));
                    et();
               }
               return (
                    (e = n.flags),
                    e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
               );
          case 19:
               return D($), null;
          case 4:
               return tt(), null;
          case 10:
               return di(n.type._context), null;
          case 22:
          case 23:
               return zi(), null;
          case 24:
               return null;
          default:
               return null;
     }
}
var vr = !1,
     le = !1,
     fd = typeof WeakSet == "function" ? WeakSet : Set,
     x = null;
function Wn(e, n) {
     var t = e.ref;
     if (t !== null)
          if (typeof t == "function")
               try {
                    t(null);
               } catch (r) {
                    B(e, n, r);
               }
          else t.current = null;
}
function Oo(e, n, t) {
     try {
          t();
     } catch (r) {
          B(e, n, r);
     }
}
var Iu = !1;
function dd(e, n) {
     if (((vo = Dr), (e = Ws()), ii(e))) {
          if ("selectionStart" in e)
               var t = { start: e.selectionStart, end: e.selectionEnd };
          else
               e: {
                    t = ((t = e.ownerDocument) && t.defaultView) || window;
                    var r = t.getSelection && t.getSelection();
                    if (r && r.rangeCount !== 0) {
                         t = r.anchorNode;
                         var l = r.anchorOffset,
                              o = r.focusNode;
                         r = r.focusOffset;
                         try {
                              t.nodeType, o.nodeType;
                         } catch {
                              t = null;
                              break e;
                         }
                         var i = 0,
                              u = -1,
                              s = -1,
                              c = 0,
                              m = 0,
                              h = e,
                              p = null;
                         n: for (;;) {
                              for (
                                   var g;
                                   h !== t ||
                                        (l !== 0 && h.nodeType !== 3) ||
                                        (u = i + l),
                                        h !== o ||
                                             (r !== 0 && h.nodeType !== 3) ||
                                             (s = i + r),
                                        h.nodeType === 3 &&
                                             (i += h.nodeValue.length),
                                        (g = h.firstChild) !== null;

                              )
                                   (p = h), (h = g);
                              for (;;) {
                                   if (h === e) break n;
                                   if (
                                        (p === t && ++c === l && (u = i),
                                        p === o && ++m === r && (s = i),
                                        (g = h.nextSibling) !== null)
                                   )
                                        break;
                                   (h = p), (p = h.parentNode);
                              }
                              h = g;
                         }
                         t = u === -1 || s === -1 ? null : { start: u, end: s };
                    } else t = null;
               }
          t = t || { start: 0, end: 0 };
     } else t = null;
     for (
          yo = { focusedElem: e, selectionRange: t }, Dr = !1, x = n;
          x !== null;

     )
          if (
               ((n = x),
               (e = n.child),
               (n.subtreeFlags & 1028) !== 0 && e !== null)
          )
               (e.return = n), (x = e);
          else
               for (; x !== null; ) {
                    n = x;
                    try {
                         var w = n.alternate;
                         if (n.flags & 1024)
                              switch (n.tag) {
                                   case 0:
                                   case 11:
                                   case 15:
                                        break;
                                   case 1:
                                        if (w !== null) {
                                             var S = w.memoizedProps,
                                                  F = w.memoizedState,
                                                  f = n.stateNode,
                                                  a = f.getSnapshotBeforeUpdate(
                                                       n.elementType === n.type
                                                            ? S
                                                            : Te(n.type, S),
                                                       F
                                                  );
                                             f.__reactInternalSnapshotBeforeUpdate =
                                                  a;
                                        }
                                        break;
                                   case 3:
                                        var d = n.stateNode.containerInfo;
                                        d.nodeType === 1
                                             ? (d.textContent = "")
                                             : d.nodeType === 9 &&
                                               d.documentElement &&
                                               d.removeChild(d.documentElement);
                                        break;
                                   case 5:
                                   case 6:
                                   case 4:
                                   case 17:
                                        break;
                                   default:
                                        throw Error(y(163));
                              }
                    } catch (v) {
                         B(n, n.return, v);
                    }
                    if (((e = n.sibling), e !== null)) {
                         (e.return = n.return), (x = e);
                         break;
                    }
                    x = n.return;
               }
     return (w = Iu), (Iu = !1), w;
}
function Tt(e, n, t) {
     var r = n.updateQueue;
     if (((r = r !== null ? r.lastEffect : null), r !== null)) {
          var l = (r = r.next);
          do {
               if ((l.tag & e) === e) {
                    var o = l.destroy;
                    (l.destroy = void 0), o !== void 0 && Oo(n, t, o);
               }
               l = l.next;
          } while (l !== r);
     }
}
function cl(e, n) {
     if (
          ((n = n.updateQueue),
          (n = n !== null ? n.lastEffect : null),
          n !== null)
     ) {
          var t = (n = n.next);
          do {
               if ((t.tag & e) === e) {
                    var r = t.create;
                    t.destroy = r();
               }
               t = t.next;
          } while (t !== n);
     }
}
function Io(e) {
     var n = e.ref;
     if (n !== null) {
          var t = e.stateNode;
          switch (e.tag) {
               case 5:
                    e = t;
                    break;
               default:
                    e = t;
          }
          typeof n == "function" ? n(e) : (n.current = e);
     }
}
function Va(e) {
     var n = e.alternate;
     n !== null && ((e.alternate = null), Va(n)),
          (e.child = null),
          (e.deletions = null),
          (e.sibling = null),
          e.tag === 5 &&
               ((n = e.stateNode),
               n !== null &&
                    (delete n[Fe],
                    delete n[Bt],
                    delete n[ko],
                    delete n[Xf],
                    delete n[Gf])),
          (e.stateNode = null),
          (e.return = null),
          (e.dependencies = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.stateNode = null),
          (e.updateQueue = null);
}
function Ba(e) {
     return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mu(e) {
     e: for (;;) {
          for (; e.sibling === null; ) {
               if (e.return === null || Ba(e.return)) return null;
               e = e.return;
          }
          for (
               e.sibling.return = e.return, e = e.sibling;
               e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

          ) {
               if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
               (e.child.return = e), (e = e.child);
          }
          if (!(e.flags & 2)) return e.stateNode;
     }
}
function Mo(e, n, t) {
     var r = e.tag;
     if (r === 5 || r === 6)
          (e = e.stateNode),
               n
                    ? t.nodeType === 8
                         ? t.parentNode.insertBefore(e, n)
                         : t.insertBefore(e, n)
                    : (t.nodeType === 8
                           ? ((n = t.parentNode), n.insertBefore(e, t))
                           : ((n = t), n.appendChild(e)),
                      (t = t._reactRootContainer),
                      t != null || n.onclick !== null || (n.onclick = $r));
     else if (r !== 4 && ((e = e.child), e !== null))
          for (Mo(e, n, t), e = e.sibling; e !== null; )
               Mo(e, n, t), (e = e.sibling);
}
function Do(e, n, t) {
     var r = e.tag;
     if (r === 5 || r === 6)
          (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
     else if (r !== 4 && ((e = e.child), e !== null))
          for (Do(e, n, t), e = e.sibling; e !== null; )
               Do(e, n, t), (e = e.sibling);
}
var b = null,
     Le = !1;
function Ze(e, n, t) {
     for (t = t.child; t !== null; ) Ha(e, n, t), (t = t.sibling);
}
function Ha(e, n, t) {
     if (Ue && typeof Ue.onCommitFiberUnmount == "function")
          try {
               Ue.onCommitFiberUnmount(tl, t);
          } catch {}
     switch (t.tag) {
          case 5:
               le || Wn(t, n);
          case 6:
               var r = b,
                    l = Le;
               (b = null),
                    Ze(e, n, t),
                    (b = r),
                    (Le = l),
                    b !== null &&
                         (Le
                              ? ((e = b),
                                (t = t.stateNode),
                                e.nodeType === 8
                                     ? e.parentNode.removeChild(t)
                                     : e.removeChild(t))
                              : b.removeChild(t.stateNode));
               break;
          case 18:
               b !== null &&
                    (Le
                         ? ((e = b),
                           (t = t.stateNode),
                           e.nodeType === 8
                                ? Fl(e.parentNode, t)
                                : e.nodeType === 1 && Fl(e, t),
                           Ft(e))
                         : Fl(b, t.stateNode));
               break;
          case 4:
               (r = b),
                    (l = Le),
                    (b = t.stateNode.containerInfo),
                    (Le = !0),
                    Ze(e, n, t),
                    (b = r),
                    (Le = l);
               break;
          case 0:
          case 11:
          case 14:
          case 15:
               if (
                    !le &&
                    ((r = t.updateQueue),
                    r !== null && ((r = r.lastEffect), r !== null))
               ) {
                    l = r = r.next;
                    do {
                         var o = l,
                              i = o.destroy;
                         (o = o.tag),
                              i !== void 0 && (o & 2 || o & 4) && Oo(t, n, i),
                              (l = l.next);
                    } while (l !== r);
               }
               Ze(e, n, t);
               break;
          case 1:
               if (
                    !le &&
                    (Wn(t, n),
                    (r = t.stateNode),
                    typeof r.componentWillUnmount == "function")
               )
                    try {
                         (r.props = t.memoizedProps),
                              (r.state = t.memoizedState),
                              r.componentWillUnmount();
                    } catch (u) {
                         B(t, n, u);
                    }
               Ze(e, n, t);
               break;
          case 21:
               Ze(e, n, t);
               break;
          case 22:
               t.mode & 1
                    ? ((le = (r = le) || t.memoizedState !== null),
                      Ze(e, n, t),
                      (le = r))
                    : Ze(e, n, t);
               break;
          default:
               Ze(e, n, t);
     }
}
function Du(e) {
     var n = e.updateQueue;
     if (n !== null) {
          e.updateQueue = null;
          var t = e.stateNode;
          t === null && (t = e.stateNode = new fd()),
               n.forEach(function (r) {
                    var l = Sd.bind(null, e, r);
                    t.has(r) || (t.add(r), r.then(l, l));
               });
     }
}
function ze(e, n) {
     var t = n.deletions;
     if (t !== null)
          for (var r = 0; r < t.length; r++) {
               var l = t[r];
               try {
                    var o = e,
                         i = n,
                         u = i;
                    e: for (; u !== null; ) {
                         switch (u.tag) {
                              case 5:
                                   (b = u.stateNode), (Le = !1);
                                   break e;
                              case 3:
                                   (b = u.stateNode.containerInfo), (Le = !0);
                                   break e;
                              case 4:
                                   (b = u.stateNode.containerInfo), (Le = !0);
                                   break e;
                         }
                         u = u.return;
                    }
                    if (b === null) throw Error(y(160));
                    Ha(o, i, l), (b = null), (Le = !1);
                    var s = l.alternate;
                    s !== null && (s.return = null), (l.return = null);
               } catch (c) {
                    B(l, n, c);
               }
          }
     if (n.subtreeFlags & 12854)
          for (n = n.child; n !== null; ) Wa(n, e), (n = n.sibling);
}
function Wa(e, n) {
     var t = e.alternate,
          r = e.flags;
     switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
               if ((ze(n, e), Me(e), r & 4)) {
                    try {
                         Tt(3, e, e.return), cl(3, e);
                    } catch (S) {
                         B(e, e.return, S);
                    }
                    try {
                         Tt(5, e, e.return);
                    } catch (S) {
                         B(e, e.return, S);
                    }
               }
               break;
          case 1:
               ze(n, e), Me(e), r & 512 && t !== null && Wn(t, t.return);
               break;
          case 5:
               if (
                    (ze(n, e),
                    Me(e),
                    r & 512 && t !== null && Wn(t, t.return),
                    e.flags & 32)
               ) {
                    var l = e.stateNode;
                    try {
                         Ot(l, "");
                    } catch (S) {
                         B(e, e.return, S);
                    }
               }
               if (r & 4 && ((l = e.stateNode), l != null)) {
                    var o = e.memoizedProps,
                         i = t !== null ? t.memoizedProps : o,
                         u = e.type,
                         s = e.updateQueue;
                    if (((e.updateQueue = null), s !== null))
                         try {
                              u === "input" &&
                                   o.type === "radio" &&
                                   o.name != null &&
                                   fs(l, o),
                                   oo(u, i);
                              var c = oo(u, o);
                              for (i = 0; i < s.length; i += 2) {
                                   var m = s[i],
                                        h = s[i + 1];
                                   m === "style"
                                        ? vs(l, h)
                                        : m === "dangerouslySetInnerHTML"
                                        ? ms(l, h)
                                        : m === "children"
                                        ? Ot(l, h)
                                        : Yo(l, m, h, c);
                              }
                              switch (u) {
                                   case "input":
                                        eo(l, o);
                                        break;
                                   case "textarea":
                                        ds(l, o);
                                        break;
                                   case "select":
                                        var p = l._wrapperState.wasMultiple;
                                        l._wrapperState.wasMultiple =
                                             !!o.multiple;
                                        var g = o.value;
                                        g != null
                                             ? Kn(l, !!o.multiple, g, !1)
                                             : p !== !!o.multiple &&
                                               (o.defaultValue != null
                                                    ? Kn(
                                                           l,
                                                           !!o.multiple,
                                                           o.defaultValue,
                                                           !0
                                                      )
                                                    : Kn(
                                                           l,
                                                           !!o.multiple,
                                                           o.multiple ? [] : "",
                                                           !1
                                                      ));
                              }
                              l[Bt] = o;
                         } catch (S) {
                              B(e, e.return, S);
                         }
               }
               break;
          case 6:
               if ((ze(n, e), Me(e), r & 4)) {
                    if (e.stateNode === null) throw Error(y(162));
                    (l = e.stateNode), (o = e.memoizedProps);
                    try {
                         l.nodeValue = o;
                    } catch (S) {
                         B(e, e.return, S);
                    }
               }
               break;
          case 3:
               if (
                    (ze(n, e),
                    Me(e),
                    r & 4 && t !== null && t.memoizedState.isDehydrated)
               )
                    try {
                         Ft(n.containerInfo);
                    } catch (S) {
                         B(e, e.return, S);
                    }
               break;
          case 4:
               ze(n, e), Me(e);
               break;
          case 13:
               ze(n, e),
                    Me(e),
                    (l = e.child),
                    l.flags & 8192 &&
                         ((o = l.memoizedState !== null),
                         (l.stateNode.isHidden = o),
                         !o ||
                              (l.alternate !== null &&
                                   l.alternate.memoizedState !== null) ||
                              (Ni = Q())),
                    r & 4 && Du(e);
               break;
          case 22:
               if (
                    ((m = t !== null && t.memoizedState !== null),
                    e.mode & 1
                         ? ((le = (c = le) || m), ze(n, e), (le = c))
                         : ze(n, e),
                    Me(e),
                    r & 8192)
               ) {
                    if (
                         ((c = e.memoizedState !== null),
                         (e.stateNode.isHidden = c) && !m && e.mode & 1)
                    )
                         for (x = e, m = e.child; m !== null; ) {
                              for (h = x = m; x !== null; ) {
                                   switch (((p = x), (g = p.child), p.tag)) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                             Tt(4, p, p.return);
                                             break;
                                        case 1:
                                             Wn(p, p.return);
                                             var w = p.stateNode;
                                             if (
                                                  typeof w.componentWillUnmount ==
                                                  "function"
                                             ) {
                                                  (r = p), (t = p.return);
                                                  try {
                                                       (n = r),
                                                            (w.props =
                                                                 n.memoizedProps),
                                                            (w.state =
                                                                 n.memoizedState),
                                                            w.componentWillUnmount();
                                                  } catch (S) {
                                                       B(r, t, S);
                                                  }
                                             }
                                             break;
                                        case 5:
                                             Wn(p, p.return);
                                             break;
                                        case 22:
                                             if (p.memoizedState !== null) {
                                                  Uu(h);
                                                  continue;
                                             }
                                   }
                                   g !== null
                                        ? ((g.return = p), (x = g))
                                        : Uu(h);
                              }
                              m = m.sibling;
                         }
                    e: for (m = null, h = e; ; ) {
                         if (h.tag === 5) {
                              if (m === null) {
                                   m = h;
                                   try {
                                        (l = h.stateNode),
                                             c
                                                  ? ((o = l.style),
                                                    typeof o.setProperty ==
                                                    "function"
                                                         ? o.setProperty(
                                                                "display",
                                                                "none",
                                                                "important"
                                                           )
                                                         : (o.display = "none"))
                                                  : ((u = h.stateNode),
                                                    (s = h.memoizedProps.style),
                                                    (i =
                                                         s != null &&
                                                         s.hasOwnProperty(
                                                              "display"
                                                         )
                                                              ? s.display
                                                              : null),
                                                    (u.style.display = hs(
                                                         "display",
                                                         i
                                                    )));
                                   } catch (S) {
                                        B(e, e.return, S);
                                   }
                              }
                         } else if (h.tag === 6) {
                              if (m === null)
                                   try {
                                        h.stateNode.nodeValue = c
                                             ? ""
                                             : h.memoizedProps;
                                   } catch (S) {
                                        B(e, e.return, S);
                                   }
                         } else if (
                              ((h.tag !== 22 && h.tag !== 23) ||
                                   h.memoizedState === null ||
                                   h === e) &&
                              h.child !== null
                         ) {
                              (h.child.return = h), (h = h.child);
                              continue;
                         }
                         if (h === e) break e;
                         for (; h.sibling === null; ) {
                              if (h.return === null || h.return === e) break e;
                              m === h && (m = null), (h = h.return);
                         }
                         m === h && (m = null),
                              (h.sibling.return = h.return),
                              (h = h.sibling);
                    }
               }
               break;
          case 19:
               ze(n, e), Me(e), r & 4 && Du(e);
               break;
          case 21:
               break;
          default:
               ze(n, e), Me(e);
     }
}
function Me(e) {
     var n = e.flags;
     if (n & 2) {
          try {
               e: {
                    for (var t = e.return; t !== null; ) {
                         if (Ba(t)) {
                              var r = t;
                              break e;
                         }
                         t = t.return;
                    }
                    throw Error(y(160));
               }
               switch (r.tag) {
                    case 5:
                         var l = r.stateNode;
                         r.flags & 32 && (Ot(l, ""), (r.flags &= -33));
                         var o = Mu(e);
                         Do(e, o, l);
                         break;
                    case 3:
                    case 4:
                         var i = r.stateNode.containerInfo,
                              u = Mu(e);
                         Mo(e, u, i);
                         break;
                    default:
                         throw Error(y(161));
               }
          } catch (s) {
               B(e, e.return, s);
          }
          e.flags &= -3;
     }
     n & 4096 && (e.flags &= -4097);
}
function pd(e, n, t) {
     (x = e), Qa(e);
}
function Qa(e, n, t) {
     for (var r = (e.mode & 1) !== 0; x !== null; ) {
          var l = x,
               o = l.child;
          if (l.tag === 22 && r) {
               var i = l.memoizedState !== null || vr;
               if (!i) {
                    var u = l.alternate,
                         s = (u !== null && u.memoizedState !== null) || le;
                    u = vr;
                    var c = le;
                    if (((vr = i), (le = s) && !c))
                         for (x = l; x !== null; )
                              (i = x),
                                   (s = i.child),
                                   i.tag === 22 && i.memoizedState !== null
                                        ? $u(l)
                                        : s !== null
                                        ? ((s.return = i), (x = s))
                                        : $u(l);
                    for (; o !== null; ) (x = o), Qa(o), (o = o.sibling);
                    (x = l), (vr = u), (le = c);
               }
               Fu(e);
          } else
               l.subtreeFlags & 8772 && o !== null
                    ? ((o.return = l), (x = o))
                    : Fu(e);
     }
}
function Fu(e) {
     for (; x !== null; ) {
          var n = x;
          if (n.flags & 8772) {
               var t = n.alternate;
               try {
                    if (n.flags & 8772)
                         switch (n.tag) {
                              case 0:
                              case 11:
                              case 15:
                                   le || cl(5, n);
                                   break;
                              case 1:
                                   var r = n.stateNode;
                                   if (n.flags & 4 && !le)
                                        if (t === null) r.componentDidMount();
                                        else {
                                             var l =
                                                  n.elementType === n.type
                                                       ? t.memoizedProps
                                                       : Te(
                                                              n.type,
                                                              t.memoizedProps
                                                         );
                                             r.componentDidUpdate(
                                                  l,
                                                  t.memoizedState,
                                                  r.__reactInternalSnapshotBeforeUpdate
                                             );
                                        }
                                   var o = n.updateQueue;
                                   o !== null && ku(n, o, r);
                                   break;
                              case 3:
                                   var i = n.updateQueue;
                                   if (i !== null) {
                                        if (((t = null), n.child !== null))
                                             switch (n.child.tag) {
                                                  case 5:
                                                       t = n.child.stateNode;
                                                       break;
                                                  case 1:
                                                       t = n.child.stateNode;
                                             }
                                        ku(n, i, t);
                                   }
                                   break;
                              case 5:
                                   var u = n.stateNode;
                                   if (t === null && n.flags & 4) {
                                        t = u;
                                        var s = n.memoizedProps;
                                        switch (n.type) {
                                             case "button":
                                             case "input":
                                             case "select":
                                             case "textarea":
                                                  s.autoFocus && t.focus();
                                                  break;
                                             case "img":
                                                  s.src && (t.src = s.src);
                                        }
                                   }
                                   break;
                              case 6:
                                   break;
                              case 4:
                                   break;
                              case 12:
                                   break;
                              case 13:
                                   if (n.memoizedState === null) {
                                        var c = n.alternate;
                                        if (c !== null) {
                                             var m = c.memoizedState;
                                             if (m !== null) {
                                                  var h = m.dehydrated;
                                                  h !== null && Ft(h);
                                             }
                                        }
                                   }
                                   break;
                              case 19:
                              case 17:
                              case 21:
                              case 22:
                              case 23:
                              case 25:
                                   break;
                              default:
                                   throw Error(y(163));
                         }
                    le || (n.flags & 512 && Io(n));
               } catch (p) {
                    B(n, n.return, p);
               }
          }
          if (n === e) {
               x = null;
               break;
          }
          if (((t = n.sibling), t !== null)) {
               (t.return = n.return), (x = t);
               break;
          }
          x = n.return;
     }
}
function Uu(e) {
     for (; x !== null; ) {
          var n = x;
          if (n === e) {
               x = null;
               break;
          }
          var t = n.sibling;
          if (t !== null) {
               (t.return = n.return), (x = t);
               break;
          }
          x = n.return;
     }
}
function $u(e) {
     for (; x !== null; ) {
          var n = x;
          try {
               switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                         var t = n.return;
                         try {
                              cl(4, n);
                         } catch (s) {
                              B(n, t, s);
                         }
                         break;
                    case 1:
                         var r = n.stateNode;
                         if (typeof r.componentDidMount == "function") {
                              var l = n.return;
                              try {
                                   r.componentDidMount();
                              } catch (s) {
                                   B(n, l, s);
                              }
                         }
                         var o = n.return;
                         try {
                              Io(n);
                         } catch (s) {
                              B(n, o, s);
                         }
                         break;
                    case 5:
                         var i = n.return;
                         try {
                              Io(n);
                         } catch (s) {
                              B(n, i, s);
                         }
               }
          } catch (s) {
               B(n, n.return, s);
          }
          if (n === e) {
               x = null;
               break;
          }
          var u = n.sibling;
          if (u !== null) {
               (u.return = n.return), (x = u);
               break;
          }
          x = n.return;
     }
}
var md = Math.ceil,
     Zr = Ge.ReactCurrentDispatcher,
     Ci = Ge.ReactCurrentOwner,
     Ce = Ge.ReactCurrentBatchConfig,
     R = 0,
     q = null,
     K = null,
     ee = 0,
     he = 0,
     Qn = hn(0),
     X = 0,
     Xt = null,
     Tn = 0,
     fl = 0,
     _i = 0,
     Lt = null,
     ce = null,
     Ni = 0,
     lt = 1 / 0,
     Ae = null,
     Jr = !1,
     Fo = null,
     an = null,
     yr = !1,
     tn = null,
     qr = 0,
     jt = 0,
     Uo = null,
     zr = -1,
     Tr = 0;
function ue() {
     return R & 6 ? Q() : zr !== -1 ? zr : (zr = Q());
}
function cn(e) {
     return e.mode & 1
          ? R & 2 && ee !== 0
               ? ee & -ee
               : Jf.transition !== null
               ? (Tr === 0 && (Tr = zs()), Tr)
               : ((e = O),
                 e !== 0 ||
                      ((e = window.event),
                      (e = e === void 0 ? 16 : Ms(e.type))),
                 e)
          : 1;
}
function Oe(e, n, t, r) {
     if (50 < jt) throw ((jt = 0), (Uo = null), Error(y(185)));
     Zt(e, t, r),
          (!(R & 2) || e !== q) &&
               (e === q && (!(R & 2) && (fl |= t), X === 4 && en(e, ee)),
               me(e, r),
               t === 1 &&
                    R === 0 &&
                    !(n.mode & 1) &&
                    ((lt = Q() + 500), ul && vn()));
}
function me(e, n) {
     var t = e.callbackNode;
     Zc(e, n);
     var r = Mr(e, e === q ? ee : 0);
     if (r === 0)
          t !== null && Xi(t),
               (e.callbackNode = null),
               (e.callbackPriority = 0);
     else if (((n = r & -r), e.callbackPriority !== n)) {
          if ((t != null && Xi(t), n === 1))
               e.tag === 0 ? Zf(Au.bind(null, e)) : ea(Au.bind(null, e)),
                    Kf(function () {
                         !(R & 6) && vn();
                    }),
                    (t = null);
          else {
               switch (Ts(r)) {
                    case 1:
                         t = qo;
                         break;
                    case 4:
                         t = Ns;
                         break;
                    case 16:
                         t = Ir;
                         break;
                    case 536870912:
                         t = Ps;
                         break;
                    default:
                         t = Ir;
               }
               t = ba(t, Ka.bind(null, e));
          }
          (e.callbackPriority = n), (e.callbackNode = t);
     }
}
function Ka(e, n) {
     if (((zr = -1), (Tr = 0), R & 6)) throw Error(y(327));
     var t = e.callbackNode;
     if (Jn() && e.callbackNode !== t) return null;
     var r = Mr(e, e === q ? ee : 0);
     if (r === 0) return null;
     if (r & 30 || r & e.expiredLanes || n) n = br(e, r);
     else {
          n = r;
          var l = R;
          R |= 2;
          var o = Xa();
          (q !== e || ee !== n) && ((Ae = null), (lt = Q() + 500), Cn(e, n));
          do
               try {
                    yd();
                    break;
               } catch (u) {
                    Ya(e, u);
               }
          while (1);
          fi(),
               (Zr.current = o),
               (R = l),
               K !== null ? (n = 0) : ((q = null), (ee = 0), (n = X));
     }
     if (n !== 0) {
          if (
               (n === 2 && ((l = co(e)), l !== 0 && ((r = l), (n = $o(e, l)))),
               n === 1)
          )
               throw ((t = Xt), Cn(e, 0), en(e, r), me(e, Q()), t);
          if (n === 6) en(e, r);
          else {
               if (
                    ((l = e.current.alternate),
                    !(r & 30) &&
                         !hd(l) &&
                         ((n = br(e, r)),
                         n === 2 &&
                              ((o = co(e)),
                              o !== 0 && ((r = o), (n = $o(e, o)))),
                         n === 1))
               )
                    throw ((t = Xt), Cn(e, 0), en(e, r), me(e, Q()), t);
               switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
                    case 0:
                    case 1:
                         throw Error(y(345));
                    case 2:
                         kn(e, ce, Ae);
                         break;
                    case 3:
                         if (
                              (en(e, r),
                              (r & 130023424) === r &&
                                   ((n = Ni + 500 - Q()), 10 < n))
                         ) {
                              if (Mr(e, 0) !== 0) break;
                              if (((l = e.suspendedLanes), (l & r) !== r)) {
                                   ue(),
                                        (e.pingedLanes |= e.suspendedLanes & l);
                                   break;
                              }
                              e.timeoutHandle = wo(kn.bind(null, e, ce, Ae), n);
                              break;
                         }
                         kn(e, ce, Ae);
                         break;
                    case 4:
                         if ((en(e, r), (r & 4194240) === r)) break;
                         for (n = e.eventTimes, l = -1; 0 < r; ) {
                              var i = 31 - Re(r);
                              (o = 1 << i),
                                   (i = n[i]),
                                   i > l && (l = i),
                                   (r &= ~o);
                         }
                         if (
                              ((r = l),
                              (r = Q() - r),
                              (r =
                                   (120 > r
                                        ? 120
                                        : 480 > r
                                        ? 480
                                        : 1080 > r
                                        ? 1080
                                        : 1920 > r
                                        ? 1920
                                        : 3e3 > r
                                        ? 3e3
                                        : 4320 > r
                                        ? 4320
                                        : 1960 * md(r / 1960)) - r),
                              10 < r)
                         ) {
                              e.timeoutHandle = wo(kn.bind(null, e, ce, Ae), r);
                              break;
                         }
                         kn(e, ce, Ae);
                         break;
                    case 5:
                         kn(e, ce, Ae);
                         break;
                    default:
                         throw Error(y(329));
               }
          }
     }
     return me(e, Q()), e.callbackNode === t ? Ka.bind(null, e) : null;
}
function $o(e, n) {
     var t = Lt;
     return (
          e.current.memoizedState.isDehydrated && (Cn(e, n).flags |= 256),
          (e = br(e, n)),
          e !== 2 && ((n = ce), (ce = t), n !== null && Ao(n)),
          e
     );
}
function Ao(e) {
     ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function hd(e) {
     for (var n = e; ; ) {
          if (n.flags & 16384) {
               var t = n.updateQueue;
               if (t !== null && ((t = t.stores), t !== null))
                    for (var r = 0; r < t.length; r++) {
                         var l = t[r],
                              o = l.getSnapshot;
                         l = l.value;
                         try {
                              if (!Ie(o(), l)) return !1;
                         } catch {
                              return !1;
                         }
                    }
          }
          if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
               (t.return = n), (n = t);
          else {
               if (n === e) break;
               for (; n.sibling === null; ) {
                    if (n.return === null || n.return === e) return !0;
                    n = n.return;
               }
               (n.sibling.return = n.return), (n = n.sibling);
          }
     }
     return !0;
}
function en(e, n) {
     for (
          n &= ~_i,
               n &= ~fl,
               e.suspendedLanes |= n,
               e.pingedLanes &= ~n,
               e = e.expirationTimes;
          0 < n;

     ) {
          var t = 31 - Re(n),
               r = 1 << t;
          (e[t] = -1), (n &= ~r);
     }
}
function Au(e) {
     if (R & 6) throw Error(y(327));
     Jn();
     var n = Mr(e, 0);
     if (!(n & 1)) return me(e, Q()), null;
     var t = br(e, n);
     if (e.tag !== 0 && t === 2) {
          var r = co(e);
          r !== 0 && ((n = r), (t = $o(e, r)));
     }
     if (t === 1) throw ((t = Xt), Cn(e, 0), en(e, n), me(e, Q()), t);
     if (t === 6) throw Error(y(345));
     return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = n),
          kn(e, ce, Ae),
          me(e, Q()),
          null
     );
}
function Pi(e, n) {
     var t = R;
     R |= 1;
     try {
          return e(n);
     } finally {
          (R = t), R === 0 && ((lt = Q() + 500), ul && vn());
     }
}
function Ln(e) {
     tn !== null && tn.tag === 0 && !(R & 6) && Jn();
     var n = R;
     R |= 1;
     var t = Ce.transition,
          r = O;
     try {
          if (((Ce.transition = null), (O = 1), e)) return e();
     } finally {
          (O = r), (Ce.transition = t), (R = n), !(R & 6) && vn();
     }
}
function zi() {
     (he = Qn.current), D(Qn);
}
function Cn(e, n) {
     (e.finishedWork = null), (e.finishedLanes = 0);
     var t = e.timeoutHandle;
     if ((t !== -1 && ((e.timeoutHandle = -1), Qf(t)), K !== null))
          for (t = K.return; t !== null; ) {
               var r = t;
               switch ((si(r), r.tag)) {
                    case 1:
                         (r = r.type.childContextTypes), r != null && Ar();
                         break;
                    case 3:
                         tt(), D(de), D(oe), yi();
                         break;
                    case 5:
                         vi(r);
                         break;
                    case 4:
                         tt();
                         break;
                    case 13:
                         D($);
                         break;
                    case 19:
                         D($);
                         break;
                    case 10:
                         di(r.type._context);
                         break;
                    case 22:
                    case 23:
                         zi();
               }
               t = t.return;
          }
     if (
          ((q = e),
          (K = e = fn(e.current, null)),
          (ee = he = n),
          (X = 0),
          (Xt = null),
          (_i = fl = Tn = 0),
          (ce = Lt = null),
          xn !== null)
     ) {
          for (n = 0; n < xn.length; n++)
               if (((t = xn[n]), (r = t.interleaved), r !== null)) {
                    t.interleaved = null;
                    var l = r.next,
                         o = t.pending;
                    if (o !== null) {
                         var i = o.next;
                         (o.next = l), (r.next = i);
                    }
                    t.pending = r;
               }
          xn = null;
     }
     return e;
}
function Ya(e, n) {
     do {
          var t = K;
          try {
               if ((fi(), (_r.current = Gr), Xr)) {
                    for (var r = A.memoizedState; r !== null; ) {
                         var l = r.queue;
                         l !== null && (l.pending = null), (r = r.next);
                    }
                    Xr = !1;
               }
               if (
                    ((zn = 0),
                    (Z = Y = A = null),
                    (zt = !1),
                    (Qt = 0),
                    (Ci.current = null),
                    t === null || t.return === null)
               ) {
                    (X = 1), (Xt = n), (K = null);
                    break;
               }
               e: {
                    var o = e,
                         i = t.return,
                         u = t,
                         s = n;
                    if (
                         ((n = ee),
                         (u.flags |= 32768),
                         s !== null &&
                              typeof s == "object" &&
                              typeof s.then == "function")
                    ) {
                         var c = s,
                              m = u,
                              h = m.tag;
                         if (
                              !(m.mode & 1) &&
                              (h === 0 || h === 11 || h === 15)
                         ) {
                              var p = m.alternate;
                              p
                                   ? ((m.updateQueue = p.updateQueue),
                                     (m.memoizedState = p.memoizedState),
                                     (m.lanes = p.lanes))
                                   : ((m.updateQueue = null),
                                     (m.memoizedState = null));
                         }
                         var g = Pu(i);
                         if (g !== null) {
                              (g.flags &= -257),
                                   zu(g, i, u, o, n),
                                   g.mode & 1 && Nu(o, c, n),
                                   (n = g),
                                   (s = c);
                              var w = n.updateQueue;
                              if (w === null) {
                                   var S = new Set();
                                   S.add(s), (n.updateQueue = S);
                              } else w.add(s);
                              break e;
                         } else {
                              if (!(n & 1)) {
                                   Nu(o, c, n), Ti();
                                   break e;
                              }
                              s = Error(y(426));
                         }
                    } else if (U && u.mode & 1) {
                         var F = Pu(i);
                         if (F !== null) {
                              !(F.flags & 65536) && (F.flags |= 256),
                                   zu(F, i, u, o, n),
                                   ai(rt(s, u));
                              break e;
                         }
                    }
                    (o = s = rt(s, u)),
                         X !== 4 && (X = 2),
                         Lt === null ? (Lt = [o]) : Lt.push(o),
                         (o = i);
                    do {
                         switch (o.tag) {
                              case 3:
                                   (o.flags |= 65536),
                                        (n &= -n),
                                        (o.lanes |= n);
                                   var f = La(o, s, n);
                                   wu(o, f);
                                   break e;
                              case 1:
                                   u = s;
                                   var a = o.type,
                                        d = o.stateNode;
                                   if (
                                        !(o.flags & 128) &&
                                        (typeof a.getDerivedStateFromError ==
                                             "function" ||
                                             (d !== null &&
                                                  typeof d.componentDidCatch ==
                                                       "function" &&
                                                  (an === null || !an.has(d))))
                                   ) {
                                        (o.flags |= 65536),
                                             (n &= -n),
                                             (o.lanes |= n);
                                        var v = ja(o, u, n);
                                        wu(o, v);
                                        break e;
                                   }
                         }
                         o = o.return;
                    } while (o !== null);
               }
               Za(t);
          } catch (E) {
               (n = E), K === t && t !== null && (K = t = t.return);
               continue;
          }
          break;
     } while (1);
}
function Xa() {
     var e = Zr.current;
     return (Zr.current = Gr), e === null ? Gr : e;
}
function Ti() {
     (X === 0 || X === 3 || X === 2) && (X = 4),
          q === null || (!(Tn & 268435455) && !(fl & 268435455)) || en(q, ee);
}
function br(e, n) {
     var t = R;
     R |= 2;
     var r = Xa();
     (q !== e || ee !== n) && ((Ae = null), Cn(e, n));
     do
          try {
               vd();
               break;
          } catch (l) {
               Ya(e, l);
          }
     while (1);
     if ((fi(), (R = t), (Zr.current = r), K !== null)) throw Error(y(261));
     return (q = null), (ee = 0), X;
}
function vd() {
     for (; K !== null; ) Ga(K);
}
function yd() {
     for (; K !== null && !Vc(); ) Ga(K);
}
function Ga(e) {
     var n = qa(e.alternate, e, he);
     (e.memoizedProps = e.pendingProps),
          n === null ? Za(e) : (K = n),
          (Ci.current = null);
}
function Za(e) {
     var n = e;
     do {
          var t = n.alternate;
          if (((e = n.return), n.flags & 32768)) {
               if (((t = cd(t, n)), t !== null)) {
                    (t.flags &= 32767), (K = t);
                    return;
               }
               if (e !== null)
                    (e.flags |= 32768),
                         (e.subtreeFlags = 0),
                         (e.deletions = null);
               else {
                    (X = 6), (K = null);
                    return;
               }
          } else if (((t = ad(t, n, he)), t !== null)) {
               K = t;
               return;
          }
          if (((n = n.sibling), n !== null)) {
               K = n;
               return;
          }
          K = n = e;
     } while (n !== null);
     X === 0 && (X = 5);
}
function kn(e, n, t) {
     var r = O,
          l = Ce.transition;
     try {
          (Ce.transition = null), (O = 1), gd(e, n, t, r);
     } finally {
          (Ce.transition = l), (O = r);
     }
     return null;
}
function gd(e, n, t, r) {
     do Jn();
     while (tn !== null);
     if (R & 6) throw Error(y(327));
     t = e.finishedWork;
     var l = e.finishedLanes;
     if (t === null) return null;
     if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
          throw Error(y(177));
     (e.callbackNode = null), (e.callbackPriority = 0);
     var o = t.lanes | t.childLanes;
     if (
          (Jc(e, o),
          e === q && ((K = q = null), (ee = 0)),
          (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
               yr ||
               ((yr = !0),
               ba(Ir, function () {
                    return Jn(), null;
               })),
          (o = (t.flags & 15990) !== 0),
          t.subtreeFlags & 15990 || o)
     ) {
          (o = Ce.transition), (Ce.transition = null);
          var i = O;
          O = 1;
          var u = R;
          (R |= 4),
               (Ci.current = null),
               dd(e, t),
               Wa(t, e),
               Uf(yo),
               (Dr = !!vo),
               (yo = vo = null),
               (e.current = t),
               pd(t),
               Bc(),
               (R = u),
               (O = i),
               (Ce.transition = o);
     } else e.current = t;
     if (
          (yr && ((yr = !1), (tn = e), (qr = l)),
          (o = e.pendingLanes),
          o === 0 && (an = null),
          Qc(t.stateNode),
          me(e, Q()),
          n !== null)
     )
          for (r = e.onRecoverableError, t = 0; t < n.length; t++)
               (l = n[t]),
                    r(l.value, { componentStack: l.stack, digest: l.digest });
     if (Jr) throw ((Jr = !1), (e = Fo), (Fo = null), e);
     return (
          qr & 1 && e.tag !== 0 && Jn(),
          (o = e.pendingLanes),
          o & 1 ? (e === Uo ? jt++ : ((jt = 0), (Uo = e))) : (jt = 0),
          vn(),
          null
     );
}
function Jn() {
     if (tn !== null) {
          var e = Ts(qr),
               n = Ce.transition,
               t = O;
          try {
               if (((Ce.transition = null), (O = 16 > e ? 16 : e), tn === null))
                    var r = !1;
               else {
                    if (((e = tn), (tn = null), (qr = 0), R & 6))
                         throw Error(y(331));
                    var l = R;
                    for (R |= 4, x = e.current; x !== null; ) {
                         var o = x,
                              i = o.child;
                         if (x.flags & 16) {
                              var u = o.deletions;
                              if (u !== null) {
                                   for (var s = 0; s < u.length; s++) {
                                        var c = u[s];
                                        for (x = c; x !== null; ) {
                                             var m = x;
                                             switch (m.tag) {
                                                  case 0:
                                                  case 11:
                                                  case 15:
                                                       Tt(8, m, o);
                                             }
                                             var h = m.child;
                                             if (h !== null)
                                                  (h.return = m), (x = h);
                                             else
                                                  for (; x !== null; ) {
                                                       m = x;
                                                       var p = m.sibling,
                                                            g = m.return;
                                                       if ((Va(m), m === c)) {
                                                            x = null;
                                                            break;
                                                       }
                                                       if (p !== null) {
                                                            (p.return = g),
                                                                 (x = p);
                                                            break;
                                                       }
                                                       x = g;
                                                  }
                                        }
                                   }
                                   var w = o.alternate;
                                   if (w !== null) {
                                        var S = w.child;
                                        if (S !== null) {
                                             w.child = null;
                                             do {
                                                  var F = S.sibling;
                                                  (S.sibling = null), (S = F);
                                             } while (S !== null);
                                        }
                                   }
                                   x = o;
                              }
                         }
                         if (o.subtreeFlags & 2064 && i !== null)
                              (i.return = o), (x = i);
                         else
                              e: for (; x !== null; ) {
                                   if (((o = x), o.flags & 2048))
                                        switch (o.tag) {
                                             case 0:
                                             case 11:
                                             case 15:
                                                  Tt(9, o, o.return);
                                        }
                                   var f = o.sibling;
                                   if (f !== null) {
                                        (f.return = o.return), (x = f);
                                        break e;
                                   }
                                   x = o.return;
                              }
                    }
                    var a = e.current;
                    for (x = a; x !== null; ) {
                         i = x;
                         var d = i.child;
                         if (i.subtreeFlags & 2064 && d !== null)
                              (d.return = i), (x = d);
                         else
                              e: for (i = a; x !== null; ) {
                                   if (((u = x), u.flags & 2048))
                                        try {
                                             switch (u.tag) {
                                                  case 0:
                                                  case 11:
                                                  case 15:
                                                       cl(9, u);
                                             }
                                        } catch (E) {
                                             B(u, u.return, E);
                                        }
                                   if (u === i) {
                                        x = null;
                                        break e;
                                   }
                                   var v = u.sibling;
                                   if (v !== null) {
                                        (v.return = u.return), (x = v);
                                        break e;
                                   }
                                   x = u.return;
                              }
                    }
                    if (
                         ((R = l),
                         vn(),
                         Ue && typeof Ue.onPostCommitFiberRoot == "function")
                    )
                         try {
                              Ue.onPostCommitFiberRoot(tl, e);
                         } catch {}
                    r = !0;
               }
               return r;
          } finally {
               (O = t), (Ce.transition = n);
          }
     }
     return !1;
}
function Vu(e, n, t) {
     (n = rt(t, n)),
          (n = La(e, n, 1)),
          (e = sn(e, n, 1)),
          (n = ue()),
          e !== null && (Zt(e, 1, n), me(e, n));
}
function B(e, n, t) {
     if (e.tag === 3) Vu(e, e, t);
     else
          for (; n !== null; ) {
               if (n.tag === 3) {
                    Vu(n, e, t);
                    break;
               } else if (n.tag === 1) {
                    var r = n.stateNode;
                    if (
                         typeof n.type.getDerivedStateFromError == "function" ||
                         (typeof r.componentDidCatch == "function" &&
                              (an === null || !an.has(r)))
                    ) {
                         (e = rt(t, e)),
                              (e = ja(n, e, 1)),
                              (n = sn(n, e, 1)),
                              (e = ue()),
                              n !== null && (Zt(n, 1, e), me(n, e));
                         break;
                    }
               }
               n = n.return;
          }
}
function wd(e, n, t) {
     var r = e.pingCache;
     r !== null && r.delete(n),
          (n = ue()),
          (e.pingedLanes |= e.suspendedLanes & t),
          q === e &&
               (ee & t) === t &&
               (X === 4 ||
               (X === 3 && (ee & 130023424) === ee && 500 > Q() - Ni)
                    ? Cn(e, 0)
                    : (_i |= t)),
          me(e, n);
}
function Ja(e, n) {
     n === 0 &&
          (e.mode & 1
               ? ((n = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304))
               : (n = 1));
     var t = ue();
     (e = Ye(e, n)), e !== null && (Zt(e, n, t), me(e, t));
}
function kd(e) {
     var n = e.memoizedState,
          t = 0;
     n !== null && (t = n.retryLane), Ja(e, t);
}
function Sd(e, n) {
     var t = 0;
     switch (e.tag) {
          case 13:
               var r = e.stateNode,
                    l = e.memoizedState;
               l !== null && (t = l.retryLane);
               break;
          case 19:
               r = e.stateNode;
               break;
          default:
               throw Error(y(314));
     }
     r !== null && r.delete(n), Ja(e, t);
}
var qa;
qa = function (e, n, t) {
     if (e !== null)
          if (e.memoizedProps !== n.pendingProps || de.current) fe = !0;
          else {
               if (!(e.lanes & t) && !(n.flags & 128))
                    return (fe = !1), sd(e, n, t);
               fe = !!(e.flags & 131072);
          }
     else (fe = !1), U && n.flags & 1048576 && na(n, Hr, n.index);
     switch (((n.lanes = 0), n.tag)) {
          case 2:
               var r = n.type;
               Pr(e, n), (e = n.pendingProps);
               var l = bn(n, oe.current);
               Zn(n, t), (l = wi(null, n, r, e, l, t));
               var o = ki();
               return (
                    (n.flags |= 1),
                    typeof l == "object" &&
                    l !== null &&
                    typeof l.render == "function" &&
                    l.$$typeof === void 0
                         ? ((n.tag = 1),
                           (n.memoizedState = null),
                           (n.updateQueue = null),
                           pe(r) ? ((o = !0), Vr(n)) : (o = !1),
                           (n.memoizedState =
                                l.state !== null && l.state !== void 0
                                     ? l.state
                                     : null),
                           mi(n),
                           (l.updater = sl),
                           (n.stateNode = l),
                           (l._reactInternals = n),
                           No(n, r, e, t),
                           (n = To(null, n, r, !0, o, t)))
                         : ((n.tag = 0),
                           U && o && ui(n),
                           ie(null, n, l, t),
                           (n = n.child)),
                    n
               );
          case 16:
               r = n.elementType;
               e: {
                    switch (
                         (Pr(e, n),
                         (e = n.pendingProps),
                         (l = r._init),
                         (r = l(r._payload)),
                         (n.type = r),
                         (l = n.tag = Ed(r)),
                         (e = Te(r, e)),
                         l)
                    ) {
                         case 0:
                              n = zo(null, n, r, e, t);
                              break e;
                         case 1:
                              n = ju(null, n, r, e, t);
                              break e;
                         case 11:
                              n = Tu(null, n, r, e, t);
                              break e;
                         case 14:
                              n = Lu(null, n, r, Te(r.type, e), t);
                              break e;
                    }
                    throw Error(y(306, r, ""));
               }
               return n;
          case 0:
               return (
                    (r = n.type),
                    (l = n.pendingProps),
                    (l = n.elementType === r ? l : Te(r, l)),
                    zo(e, n, r, l, t)
               );
          case 1:
               return (
                    (r = n.type),
                    (l = n.pendingProps),
                    (l = n.elementType === r ? l : Te(r, l)),
                    ju(e, n, r, l, t)
               );
          case 3:
               e: {
                    if ((Ma(n), e === null)) throw Error(y(387));
                    (r = n.pendingProps),
                         (o = n.memoizedState),
                         (l = o.element),
                         oa(e, n),
                         Kr(n, r, null, t);
                    var i = n.memoizedState;
                    if (((r = i.element), o.isDehydrated))
                         if (
                              ((o = {
                                   element: r,
                                   isDehydrated: !1,
                                   cache: i.cache,
                                   pendingSuspenseBoundaries:
                                        i.pendingSuspenseBoundaries,
                                   transitions: i.transitions,
                              }),
                              (n.updateQueue.baseState = o),
                              (n.memoizedState = o),
                              n.flags & 256)
                         ) {
                              (l = rt(Error(y(423)), n)),
                                   (n = Ru(e, n, r, t, l));
                              break e;
                         } else if (r !== l) {
                              (l = rt(Error(y(424)), n)),
                                   (n = Ru(e, n, r, t, l));
                              break e;
                         } else
                              for (
                                   ve = un(
                                        n.stateNode.containerInfo.firstChild
                                   ),
                                        ye = n,
                                        U = !0,
                                        je = null,
                                        t = aa(n, null, r, t),
                                        n.child = t;
                                   t;

                              )
                                   (t.flags = (t.flags & -3) | 4096),
                                        (t = t.sibling);
                    else {
                         if ((et(), r === l)) {
                              n = Xe(e, n, t);
                              break e;
                         }
                         ie(e, n, r, t);
                    }
                    n = n.child;
               }
               return n;
          case 5:
               return (
                    ca(n),
                    e === null && Eo(n),
                    (r = n.type),
                    (l = n.pendingProps),
                    (o = e !== null ? e.memoizedProps : null),
                    (i = l.children),
                    go(r, l)
                         ? (i = null)
                         : o !== null && go(r, o) && (n.flags |= 32),
                    Ia(e, n),
                    ie(e, n, i, t),
                    n.child
               );
          case 6:
               return e === null && Eo(n), null;
          case 13:
               return Da(e, n, t);
          case 4:
               return (
                    hi(n, n.stateNode.containerInfo),
                    (r = n.pendingProps),
                    e === null ? (n.child = nt(n, null, r, t)) : ie(e, n, r, t),
                    n.child
               );
          case 11:
               return (
                    (r = n.type),
                    (l = n.pendingProps),
                    (l = n.elementType === r ? l : Te(r, l)),
                    Tu(e, n, r, l, t)
               );
          case 7:
               return ie(e, n, n.pendingProps, t), n.child;
          case 8:
               return ie(e, n, n.pendingProps.children, t), n.child;
          case 12:
               return ie(e, n, n.pendingProps.children, t), n.child;
          case 10:
               e: {
                    if (
                         ((r = n.type._context),
                         (l = n.pendingProps),
                         (o = n.memoizedProps),
                         (i = l.value),
                         I(Wr, r._currentValue),
                         (r._currentValue = i),
                         o !== null)
                    )
                         if (Ie(o.value, i)) {
                              if (o.children === l.children && !de.current) {
                                   n = Xe(e, n, t);
                                   break e;
                              }
                         } else
                              for (
                                   o = n.child, o !== null && (o.return = n);
                                   o !== null;

                              ) {
                                   var u = o.dependencies;
                                   if (u !== null) {
                                        i = o.child;
                                        for (
                                             var s = u.firstContext;
                                             s !== null;

                                        ) {
                                             if (s.context === r) {
                                                  if (o.tag === 1) {
                                                       (s = We(-1, t & -t)),
                                                            (s.tag = 2);
                                                       var c = o.updateQueue;
                                                       if (c !== null) {
                                                            c = c.shared;
                                                            var m = c.pending;
                                                            m === null
                                                                 ? (s.next = s)
                                                                 : ((s.next =
                                                                        m.next),
                                                                   (m.next =
                                                                        s)),
                                                                 (c.pending =
                                                                      s);
                                                       }
                                                  }
                                                  (o.lanes |= t),
                                                       (s = o.alternate),
                                                       s !== null &&
                                                            (s.lanes |= t),
                                                       Co(o.return, t, n),
                                                       (u.lanes |= t);
                                                  break;
                                             }
                                             s = s.next;
                                        }
                                   } else if (o.tag === 10)
                                        i = o.type === n.type ? null : o.child;
                                   else if (o.tag === 18) {
                                        if (((i = o.return), i === null))
                                             throw Error(y(341));
                                        (i.lanes |= t),
                                             (u = i.alternate),
                                             u !== null && (u.lanes |= t),
                                             Co(i, t, n),
                                             (i = o.sibling);
                                   } else i = o.child;
                                   if (i !== null) i.return = o;
                                   else
                                        for (i = o; i !== null; ) {
                                             if (i === n) {
                                                  i = null;
                                                  break;
                                             }
                                             if (
                                                  ((o = i.sibling), o !== null)
                                             ) {
                                                  (o.return = i.return),
                                                       (i = o);
                                                  break;
                                             }
                                             i = i.return;
                                        }
                                   o = i;
                              }
                    ie(e, n, l.children, t), (n = n.child);
               }
               return n;
          case 9:
               return (
                    (l = n.type),
                    (r = n.pendingProps.children),
                    Zn(n, t),
                    (l = _e(l)),
                    (r = r(l)),
                    (n.flags |= 1),
                    ie(e, n, r, t),
                    n.child
               );
          case 14:
               return (
                    (r = n.type),
                    (l = Te(r, n.pendingProps)),
                    (l = Te(r.type, l)),
                    Lu(e, n, r, l, t)
               );
          case 15:
               return Ra(e, n, n.type, n.pendingProps, t);
          case 17:
               return (
                    (r = n.type),
                    (l = n.pendingProps),
                    (l = n.elementType === r ? l : Te(r, l)),
                    Pr(e, n),
                    (n.tag = 1),
                    pe(r) ? ((e = !0), Vr(n)) : (e = !1),
                    Zn(n, t),
                    ua(n, r, l),
                    No(n, r, l, t),
                    To(null, n, r, !0, e, t)
               );
          case 19:
               return Fa(e, n, t);
          case 22:
               return Oa(e, n, t);
     }
     throw Error(y(156, n.tag));
};
function ba(e, n) {
     return _s(e, n);
}
function xd(e, n, t, r) {
     (this.tag = e),
          (this.key = t),
          (this.sibling =
               this.child =
               this.return =
               this.stateNode =
               this.type =
               this.elementType =
                    null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = n),
          (this.dependencies =
               this.memoizedState =
               this.updateQueue =
               this.memoizedProps =
                    null),
          (this.mode = r),
          (this.subtreeFlags = this.flags = 0),
          (this.deletions = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
}
function Ee(e, n, t, r) {
     return new xd(e, n, t, r);
}
function Li(e) {
     return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ed(e) {
     if (typeof e == "function") return Li(e) ? 1 : 0;
     if (e != null) {
          if (((e = e.$$typeof), e === Go)) return 11;
          if (e === Zo) return 14;
     }
     return 2;
}
function fn(e, n) {
     var t = e.alternate;
     return (
          t === null
               ? ((t = Ee(e.tag, n, e.key, e.mode)),
                 (t.elementType = e.elementType),
                 (t.type = e.type),
                 (t.stateNode = e.stateNode),
                 (t.alternate = e),
                 (e.alternate = t))
               : ((t.pendingProps = n),
                 (t.type = e.type),
                 (t.flags = 0),
                 (t.subtreeFlags = 0),
                 (t.deletions = null)),
          (t.flags = e.flags & 14680064),
          (t.childLanes = e.childLanes),
          (t.lanes = e.lanes),
          (t.child = e.child),
          (t.memoizedProps = e.memoizedProps),
          (t.memoizedState = e.memoizedState),
          (t.updateQueue = e.updateQueue),
          (n = e.dependencies),
          (t.dependencies =
               n === null
                    ? null
                    : { lanes: n.lanes, firstContext: n.firstContext }),
          (t.sibling = e.sibling),
          (t.index = e.index),
          (t.ref = e.ref),
          t
     );
}
function Lr(e, n, t, r, l, o) {
     var i = 2;
     if (((r = e), typeof e == "function")) Li(e) && (i = 1);
     else if (typeof e == "string") i = 5;
     else
          e: switch (e) {
               case Mn:
                    return _n(t.children, l, o, n);
               case Xo:
                    (i = 8), (l |= 8);
                    break;
               case Gl:
                    return (
                         (e = Ee(12, t, n, l | 2)),
                         (e.elementType = Gl),
                         (e.lanes = o),
                         e
                    );
               case Zl:
                    return (
                         (e = Ee(13, t, n, l)),
                         (e.elementType = Zl),
                         (e.lanes = o),
                         e
                    );
               case Jl:
                    return (
                         (e = Ee(19, t, n, l)),
                         (e.elementType = Jl),
                         (e.lanes = o),
                         e
                    );
               case ss:
                    return dl(t, l, o, n);
               default:
                    if (typeof e == "object" && e !== null)
                         switch (e.$$typeof) {
                              case is:
                                   i = 10;
                                   break e;
                              case us:
                                   i = 9;
                                   break e;
                              case Go:
                                   i = 11;
                                   break e;
                              case Zo:
                                   i = 14;
                                   break e;
                              case Je:
                                   (i = 16), (r = null);
                                   break e;
                         }
                    throw Error(y(130, e == null ? e : typeof e, ""));
          }
     return (
          (n = Ee(i, t, n, l)),
          (n.elementType = e),
          (n.type = r),
          (n.lanes = o),
          n
     );
}
function _n(e, n, t, r) {
     return (e = Ee(7, e, r, n)), (e.lanes = t), e;
}
function dl(e, n, t, r) {
     return (
          (e = Ee(22, e, r, n)),
          (e.elementType = ss),
          (e.lanes = t),
          (e.stateNode = { isHidden: !1 }),
          e
     );
}
function Ql(e, n, t) {
     return (e = Ee(6, e, null, n)), (e.lanes = t), e;
}
function Kl(e, n, t) {
     return (
          (n = Ee(4, e.children !== null ? e.children : [], e.key, n)),
          (n.lanes = t),
          (n.stateNode = {
               containerInfo: e.containerInfo,
               pendingChildren: null,
               implementation: e.implementation,
          }),
          n
     );
}
function Cd(e, n, t, r, l) {
     (this.tag = n),
          (this.containerInfo = e),
          (this.finishedWork =
               this.pingCache =
               this.current =
               this.pendingChildren =
                    null),
          (this.timeoutHandle = -1),
          (this.callbackNode = this.pendingContext = this.context = null),
          (this.callbackPriority = 0),
          (this.eventTimes = Nl(0)),
          (this.expirationTimes = Nl(-1)),
          (this.entangledLanes =
               this.finishedLanes =
               this.mutableReadLanes =
               this.expiredLanes =
               this.pingedLanes =
               this.suspendedLanes =
               this.pendingLanes =
                    0),
          (this.entanglements = Nl(0)),
          (this.identifierPrefix = r),
          (this.onRecoverableError = l),
          (this.mutableSourceEagerHydrationData = null);
}
function ji(e, n, t, r, l, o, i, u, s) {
     return (
          (e = new Cd(e, n, t, u, s)),
          n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
          (o = Ee(3, null, null, n)),
          (e.current = o),
          (o.stateNode = e),
          (o.memoizedState = {
               element: r,
               isDehydrated: t,
               cache: null,
               transitions: null,
               pendingSuspenseBoundaries: null,
          }),
          mi(o),
          e
     );
}
function _d(e, n, t) {
     var r =
          3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
     return {
          $$typeof: In,
          key: r == null ? null : "" + r,
          children: e,
          containerInfo: n,
          implementation: t,
     };
}
function ec(e) {
     if (!e) return pn;
     e = e._reactInternals;
     e: {
          if (Rn(e) !== e || e.tag !== 1) throw Error(y(170));
          var n = e;
          do {
               switch (n.tag) {
                    case 3:
                         n = n.stateNode.context;
                         break e;
                    case 1:
                         if (pe(n.type)) {
                              n =
                                   n.stateNode
                                        .__reactInternalMemoizedMergedChildContext;
                              break e;
                         }
               }
               n = n.return;
          } while (n !== null);
          throw Error(y(171));
     }
     if (e.tag === 1) {
          var t = e.type;
          if (pe(t)) return bs(e, t, n);
     }
     return n;
}
function nc(e, n, t, r, l, o, i, u, s) {
     return (
          (e = ji(t, r, !0, e, l, o, i, u, s)),
          (e.context = ec(null)),
          (t = e.current),
          (r = ue()),
          (l = cn(t)),
          (o = We(r, l)),
          (o.callback = n ?? null),
          sn(t, o, l),
          (e.current.lanes = l),
          Zt(e, l, r),
          me(e, r),
          e
     );
}
function pl(e, n, t, r) {
     var l = n.current,
          o = ue(),
          i = cn(l);
     return (
          (t = ec(t)),
          n.context === null ? (n.context = t) : (n.pendingContext = t),
          (n = We(o, i)),
          (n.payload = { element: e }),
          (r = r === void 0 ? null : r),
          r !== null && (n.callback = r),
          (e = sn(l, n, i)),
          e !== null && (Oe(e, l, i, o), Cr(e, l, i)),
          i
     );
}
function el(e) {
     if (((e = e.current), !e.child)) return null;
     switch (e.child.tag) {
          case 5:
               return e.child.stateNode;
          default:
               return e.child.stateNode;
     }
}
function Bu(e, n) {
     if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
          var t = e.retryLane;
          e.retryLane = t !== 0 && t < n ? t : n;
     }
}
function Ri(e, n) {
     Bu(e, n), (e = e.alternate) && Bu(e, n);
}
function Nd() {
     return null;
}
var tc =
     typeof reportError == "function"
          ? reportError
          : function (e) {
                 console.error(e);
            };
function Oi(e) {
     this._internalRoot = e;
}
ml.prototype.render = Oi.prototype.render = function (e) {
     var n = this._internalRoot;
     if (n === null) throw Error(y(409));
     pl(e, n, null, null);
};
ml.prototype.unmount = Oi.prototype.unmount = function () {
     var e = this._internalRoot;
     if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          Ln(function () {
               pl(null, e, null, null);
          }),
               (n[Ke] = null);
     }
};
function ml(e) {
     this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
     if (e) {
          var n = Rs();
          e = { blockedOn: null, target: e, priority: n };
          for (var t = 0; t < be.length && n !== 0 && n < be[t].priority; t++);
          be.splice(t, 0, e), t === 0 && Is(e);
     }
};
function Ii(e) {
     return !(
          !e ||
          (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
     );
}
function hl(e) {
     return !(
          !e ||
          (e.nodeType !== 1 &&
               e.nodeType !== 9 &&
               e.nodeType !== 11 &&
               (e.nodeType !== 8 ||
                    e.nodeValue !== " react-mount-point-unstable "))
     );
}
function Hu() {}
function Pd(e, n, t, r, l) {
     if (l) {
          if (typeof r == "function") {
               var o = r;
               r = function () {
                    var c = el(i);
                    o.call(c);
               };
          }
          var i = nc(n, r, e, 0, null, !1, !1, "", Hu);
          return (
               (e._reactRootContainer = i),
               (e[Ke] = i.current),
               At(e.nodeType === 8 ? e.parentNode : e),
               Ln(),
               i
          );
     }
     for (; (l = e.lastChild); ) e.removeChild(l);
     if (typeof r == "function") {
          var u = r;
          r = function () {
               var c = el(s);
               u.call(c);
          };
     }
     var s = ji(e, 0, !1, null, null, !1, !1, "", Hu);
     return (
          (e._reactRootContainer = s),
          (e[Ke] = s.current),
          At(e.nodeType === 8 ? e.parentNode : e),
          Ln(function () {
               pl(n, s, t, r);
          }),
          s
     );
}
function vl(e, n, t, r, l) {
     var o = t._reactRootContainer;
     if (o) {
          var i = o;
          if (typeof l == "function") {
               var u = l;
               l = function () {
                    var s = el(i);
                    u.call(s);
               };
          }
          pl(n, i, e, l);
     } else i = Pd(t, n, e, l, r);
     return el(i);
}
Ls = function (e) {
     switch (e.tag) {
          case 3:
               var n = e.stateNode;
               if (n.current.memoizedState.isDehydrated) {
                    var t = St(n.pendingLanes);
                    t !== 0 &&
                         (bo(n, t | 1),
                         me(n, Q()),
                         !(R & 6) && ((lt = Q() + 500), vn()));
               }
               break;
          case 13:
               Ln(function () {
                    var r = Ye(e, 1);
                    if (r !== null) {
                         var l = ue();
                         Oe(r, e, 1, l);
                    }
               }),
                    Ri(e, 1);
     }
};
ei = function (e) {
     if (e.tag === 13) {
          var n = Ye(e, 134217728);
          if (n !== null) {
               var t = ue();
               Oe(n, e, 134217728, t);
          }
          Ri(e, 134217728);
     }
};
js = function (e) {
     if (e.tag === 13) {
          var n = cn(e),
               t = Ye(e, n);
          if (t !== null) {
               var r = ue();
               Oe(t, e, n, r);
          }
          Ri(e, n);
     }
};
Rs = function () {
     return O;
};
Os = function (e, n) {
     var t = O;
     try {
          return (O = e), n();
     } finally {
          O = t;
     }
};
uo = function (e, n, t) {
     switch (n) {
          case "input":
               if ((eo(e, t), (n = t.name), t.type === "radio" && n != null)) {
                    for (t = e; t.parentNode; ) t = t.parentNode;
                    for (
                         t = t.querySelectorAll(
                              "input[name=" +
                                   JSON.stringify("" + n) +
                                   '][type="radio"]'
                         ),
                              n = 0;
                         n < t.length;
                         n++
                    ) {
                         var r = t[n];
                         if (r !== e && r.form === e.form) {
                              var l = il(r);
                              if (!l) throw Error(y(90));
                              cs(r), eo(r, l);
                         }
                    }
               }
               break;
          case "textarea":
               ds(e, t);
               break;
          case "select":
               (n = t.value), n != null && Kn(e, !!t.multiple, n, !1);
     }
};
ws = Pi;
ks = Ln;
var zd = { usingClientEntryPoint: !1, Events: [qt, $n, il, ys, gs, Pi] },
     gt = {
          findFiberByHostInstance: Sn,
          bundleType: 0,
          version: "18.2.0",
          rendererPackageName: "react-dom",
     },
     Td = {
          bundleType: gt.bundleType,
          version: gt.version,
          rendererPackageName: gt.rendererPackageName,
          rendererConfig: gt.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setErrorHandler: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: Ge.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
               return (e = Es(e)), e === null ? null : e.stateNode;
          },
          findFiberByHostInstance: gt.findFiberByHostInstance || Nd,
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
          reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
     };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
     var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
     if (!gr.isDisabled && gr.supportsFiber)
          try {
               (tl = gr.inject(Td)), (Ue = gr);
          } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd;
we.createPortal = function (e, n) {
     var t =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
     if (!Ii(n)) throw Error(y(200));
     return _d(e, n, null, t);
};
we.createRoot = function (e, n) {
     if (!Ii(e)) throw Error(y(299));
     var t = !1,
          r = "",
          l = tc;
     return (
          n != null &&
               (n.unstable_strictMode === !0 && (t = !0),
               n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
               n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
          (n = ji(e, 1, !1, null, null, t, !1, r, l)),
          (e[Ke] = n.current),
          At(e.nodeType === 8 ? e.parentNode : e),
          new Oi(n)
     );
};
we.findDOMNode = function (e) {
     if (e == null) return null;
     if (e.nodeType === 1) return e;
     var n = e._reactInternals;
     if (n === void 0)
          throw typeof e.render == "function"
               ? Error(y(188))
               : ((e = Object.keys(e).join(",")), Error(y(268, e)));
     return (e = Es(n)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
     return Ln(e);
};
we.hydrate = function (e, n, t) {
     if (!hl(n)) throw Error(y(200));
     return vl(null, e, n, !0, t);
};
we.hydrateRoot = function (e, n, t) {
     if (!Ii(e)) throw Error(y(405));
     var r = (t != null && t.hydratedSources) || null,
          l = !1,
          o = "",
          i = tc;
     if (
          (t != null &&
               (t.unstable_strictMode === !0 && (l = !0),
               t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
               t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
          (n = nc(n, null, e, 1, t ?? null, l, !1, o, i)),
          (e[Ke] = n.current),
          At(e),
          r)
     )
          for (e = 0; e < r.length; e++)
               (t = r[e]),
                    (l = t._getVersion),
                    (l = l(t._source)),
                    n.mutableSourceEagerHydrationData == null
                         ? (n.mutableSourceEagerHydrationData = [t, l])
                         : n.mutableSourceEagerHydrationData.push(t, l);
     return new ml(n);
};
we.render = function (e, n, t) {
     if (!hl(n)) throw Error(y(200));
     return vl(null, e, n, !1, t);
};
we.unmountComponentAtNode = function (e) {
     if (!hl(e)) throw Error(y(40));
     return e._reactRootContainer
          ? (Ln(function () {
                 vl(null, null, e, !1, function () {
                      (e._reactRootContainer = null), (e[Ke] = null);
                 });
            }),
            !0)
          : !1;
};
we.unstable_batchedUpdates = Pi;
we.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
     if (!hl(t)) throw Error(y(200));
     if (e == null || e._reactInternals === void 0) throw Error(y(38));
     return vl(e, n, t, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
function rc() {
     if (
          !(
               typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
               typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
          )
     )
          try {
               __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc);
          } catch (e) {
               console.error(e);
          }
}
rc(), (ns.exports = we);
var yl = ns.exports,
     Wu = yl;
(Yl.createRoot = Wu.createRoot), (Yl.hydrateRoot = Wu.hydrateRoot);
const Ld = "./assets/logo-3a62f2e6.jpg",
     st = J.createContext([]);
function jd({ children: e }) {
     const [n, t] = J.useState([]),
          [r, l] = J.useState([]);
     J.useEffect(() => {
          fetch("https://food-react-app-backend.onrender.com/meals")
               .then((s) => s.json())
               .then((s) => l(s));
     }, []);
     function o(s) {
          n.find((c) => c.id == s.id) || t((c) => [...c, s]);
     }
     function i(s) {
          t((c) => {
               let m = [...c];
               return (m[c.indexOf(s)].quantity += 1), m;
          });
     }
     function u(s) {
          t((c) => {
               let m = [...c];
               return (
                    (m[c.indexOf(s)].quantity -= 1),
                    m[c.indexOf(s)].quantity <= 0 ? m.filter((h) => h != s) : m
               );
          });
     }
     return k.jsx(st.Provider, {
          value: {
               cartItems: n,
               meals: r,
               setCartItems: t,
               onAddCart: o,
               incAmount: i,
               decAmount: u,
          },
          children: e,
     });
}
function Rd({ item: e, onInc: n, onDec: t }) {
     return k.jsxs("div", {
          className: "cart-item",
          children: [
               k.jsxs("p", {
                    children: [e.name, " - ", e.quantity, " × ", e.price],
               }),
               k.jsxs("div", {
                    className: "cart-item-actions",
                    children: [
                         k.jsx("button", {
                              onClick: () => t(e),
                              children: "-",
                         }),
                         e.quantity,
                         k.jsx("button", {
                              onClick: () => n(e),
                              children: "+",
                         }),
                    ],
               }),
          ],
     });
}
const Od = J.forwardRef(function ({ onClose: e, onOpenForm: n }, t) {
          const { cartItems: r, decAmount: l, incAmount: o } = J.useContext(st);
          return yl.createPortal(
               k.jsxs("dialog", {
                    ref: t,
                    className: "cart modal",
                    children: [
                         k.jsx("h2", { children: "Your Cart" }),
                         r.length === 0
                              ? k.jsx("p", { children: "no items yet" })
                              : k.jsxs(k.Fragment, {
                                     children: [
                                          r.map((i) =>
                                               k.jsx(
                                                    Rd,
                                                    {
                                                         item: i,
                                                         onInc: o,
                                                         onDec: l,
                                                    },
                                                    i.id
                                               )
                                          ),
                                          k.jsxs("div", {
                                               className: "cart-total",
                                               children: [
                                                    "$",
                                                    " ",
                                                    r.reduce(
                                                         (i, u) =>
                                                              +u.price *
                                                                   +u.quantity +
                                                              i,
                                                         0
                                                    ),
                                               ],
                                          }),
                                     ],
                                }),
                         k.jsxs("div", {
                              className: "modal-actions ",
                              children: [
                                   k.jsx("button", {
                                        onClick: e,
                                        className: "text-button",
                                        children: "Close",
                                   }),
                                   k.jsx("button", {
                                        className: "text-button button",
                                        disabled: r.length === 0,
                                        onClick: n,
                                        children: "Go To Checkout",
                                   }),
                              ],
                         }),
                    ],
               }),
               document.getElementById("modal")
          );
     }),
     Id = J.forwardRef(function ({ onBack: e, onSubmit: n }, t) {
          const { cartItems: r, setCartItems: l } = J.useContext(st),
               o = J.useRef();
          function i(u) {
               u.preventDefault(), console.log(u);
               let s = new FormData(o.current),
                    c = Object.fromEntries(s.entries());
               fetch("https://food-react-app-backend.onrender.com/orders", {
                    headers: { "Content-Type": "application/json" },
                    method: "POST",
                    body: JSON.stringify({ order: { items: r, customer: c } }),
               }),
                    l([]),
                    n();
          }
          return yl.createPortal(
               k.jsx("dialog", {
                    ref: t,
                    className: "cart modal",
                    children: k.jsxs("form", {
                         ref: o,
                         onSubmit: (u) => i(u),
                         children: [
                              k.jsx("h2", { children: "Checkout" }),
                              k.jsxs("p", {
                                   children: [
                                        "Total Amount: $",
                                        r == null
                                             ? void 0
                                             : r.reduce(
                                                    (u, s) =>
                                                         +s.price *
                                                              +s.quantity +
                                                         u,
                                                    0
                                               ),
                                   ],
                              }),
                              k.jsx("div", {
                                   className: "control-row",
                                   children: k.jsxs("div", {
                                        className: "control",
                                        children: [
                                             k.jsx("label", {
                                                  htmlFor: "name",
                                                  children: "Full Name",
                                             }),
                                             k.jsx("input", {
                                                  required: !0,
                                                  name: "name",
                                                  type: "text",
                                                  id: "name",
                                             }),
                                        ],
                                   }),
                              }),
                              k.jsx("div", {
                                   className: "control-row",
                                   children: k.jsxs("div", {
                                        className: "control",
                                        children: [
                                             k.jsx("label", {
                                                  htmlFor: "email",
                                                  children: "E-mail Address",
                                             }),
                                             k.jsx("input", {
                                                  required: !0,
                                                  name: "email",
                                                  type: "email",
                                                  id: "email",
                                             }),
                                        ],
                                   }),
                              }),
                              k.jsx("div", {
                                   className: "control-row",
                                   children: k.jsxs("div", {
                                        className: "control",
                                        children: [
                                             k.jsx("label", {
                                                  htmlFor: "street",
                                                  children: "Street",
                                             }),
                                             k.jsx("input", {
                                                  required: !0,
                                                  name: "street",
                                                  type: "text",
                                                  id: "street",
                                             }),
                                        ],
                                   }),
                              }),
                              k.jsxs("div", {
                                   className: "control-row",
                                   children: [
                                        k.jsxs("div", {
                                             className: "control",
                                             children: [
                                                  k.jsx("label", {
                                                       htmlFor: "postal",
                                                       children: "Postal Code",
                                                  }),
                                                  k.jsx("input", {
                                                       required: !0,
                                                       name: "postal-code",
                                                       type: "number",
                                                       id: "postal",
                                                  }),
                                             ],
                                        }),
                                        k.jsxs("div", {
                                             className: "control",
                                             children: [
                                                  k.jsx("label", {
                                                       htmlFor: "city",
                                                       children: "City",
                                                  }),
                                                  k.jsx("input", {
                                                       required: !0,
                                                       name: "city",
                                                       type: "text",
                                                       id: "city",
                                                  }),
                                             ],
                                        }),
                                   ],
                              }),
                              k.jsxs("div", {
                                   className: "modal-actions ",
                                   children: [
                                        k.jsx("button", {
                                             type: "button",
                                             onClick: e,
                                             className: "text-button",
                                             children: "Back",
                                        }),
                                        k.jsx("button", {
                                             type: "submit",
                                             className: "text-button button ",
                                             children: "Submit Order",
                                        }),
                                   ],
                              }),
                         ],
                    }),
               }),
               document.getElementById("modal")
          );
     }),
     Md = J.forwardRef(function ({ onClose: e }, n) {
          return yl.createPortal(
               k.jsxs("dialog", {
                    ref: n,
                    className: "cart modal",
                    children: [
                         k.jsx("h2", { children: "Success!" }),
                         k.jsx("p", {
                              children:
                                   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequatur molestias assumenda harum consequuntur? Voluptates laborum suscipit, asperiores iusto nesciunt incidunt voluptate earum recusandae itaque? Similique veritatis ipsam rem molestiae?",
                         }),
                         k.jsx("div", {
                              className: "modal-actions ",
                              children: k.jsx("button", {
                                   onClick: e,
                                   className: "text-button button",
                                   children: "Okay",
                              }),
                         }),
                    ],
               }),
               document.getElementById("modal")
          );
     });
function Dd() {
     const { cartItems: e } = J.useContext(st),
          n = J.useRef(),
          t = J.useRef(),
          r = J.useRef();
     function l(o) {
          o.current.open ? o.current.close() : o.current.showModal();
     }
     return k.jsxs("div", {
          id: "main-header",
          children: [
               k.jsxs("div", {
                    id: "title",
                    children: [
                         k.jsx("img", { src: Ld, alt: "logo" }),
                         " ",
                         k.jsx("h1", { children: "REACTFOOD" }),
                    ],
               }),
               k.jsxs("button", {
                    className: "order-button",
                    onClick: () => {
                         l(n);
                    },
                    children: ["cart ( ", e.length, " )"],
               }),
               k.jsx(Od, {
                    ref: n,
                    onClose: () => l(n),
                    onOpenForm: () => {
                         l(n), l(t);
                    },
               }),
               k.jsx(Id, {
                    ref: t,
                    onBack: () => {
                         l(n), l(t);
                    },
                    onSubmit: () => {
                         l(t), l(r);
                    },
               }),
               k.jsx(Md, {
                    ref: r,
                    onClose: () => {
                         l(r);
                    },
               }),
          ],
     });
}
function Fd({ item: e }) {
     const { onAddCart: n, cartItems: t } = J.useContext(st);
     return k.jsx("div", {
          className: "meal-item",
          children: k.jsxs("article", {
               children: [
                    k.jsx("img", {
                         src: `https://food-react-app-backend.onrender.com/${e.image}`,
                         alt: "",
                    }),
                    k.jsx("h3", { children: e.name }),
                    k.jsx("div", {
                         className: "meal-item-price",
                         children: e.price,
                    }),
                    k.jsx("div", {
                         className: "meal-item-description",
                         children: e.description,
                    }),
                    k.jsxs("button", {
                         onClick: () => n({ ...e, quantity: 1 }),
                         className: "button  meal-item-actions  ",
                         disabled: t.find((r) => r.id == e.id),
                         children: [
                              t.find((r) => r.id == e.id) ? "Added" : "Add",
                              " ",
                              "To Cart",
                         ],
                    }),
               ],
          }),
     });
}
function Ud() {
     const { meals: e } = J.useContext(st);
     return k.jsx("div", {
          id: "meals",
          children: e.map((n) => k.jsx(Fd, { item: n }, n.id)),
     });
}
function $d() {
     return k.jsx(k.Fragment, {
          children: k.jsxs(jd, { children: [k.jsx(Dd, {}), k.jsx(Ud, {})] }),
     });
}
Yl.createRoot(document.getElementById("root")).render(k.jsx($d, {}));
