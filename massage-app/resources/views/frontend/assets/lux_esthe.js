!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? (module.exports = t()) : 'function' == typeof define && define.amd ? define(t) : (e.Popper = t());
})(this, function () {
  'use strict';
  function e(e) {
    var t = !1;
    return function () {
      t ||
        ((t = !0),
        window.Promise.resolve().then(function () {
          (t = !1), e();
        }));
    };
  }
  function t(e) {
    var t = !1;
    return function () {
      t ||
        ((t = !0),
        setTimeout(function () {
          (t = !1), e();
        }, oe));
    };
  }
  function o(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }
  function _(e, t) {
    if (1 !== e.nodeType) return [];
    var i = getComputedStyle(e, null);
    return t ? i[t] : i;
  }
  function d(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }
  function p(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;
      case '#document':
        return e.body;
    }
    var t = _(e),
      i = t.overflow,
      n = t.overflowX,
      r = t.overflowY;
    return /(auto|scroll)/.test(i + r + n) ? e : p(d(e));
  }
  function y(e) {
    var t = e && e.offsetParent,
      i = t && t.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i
      ? -1 !== ['TD', 'TABLE'].indexOf(t.nodeName) && 'static' === _(t, 'position')
        ? y(t)
        : t
      : e
      ? e.ownerDocument.documentElement
      : document.documentElement;
  }
  function l(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || y(e.firstElementChild) === e);
  }
  function c(e) {
    return null !== e.parentNode ? c(e.parentNode) : e;
  }
  function h(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
    var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      n = i ? e : t,
      r = i ? t : e,
      a = document.createRange();
    a.setStart(n, 0), a.setEnd(r, 0);
    var s = a.commonAncestorContainer;
    if ((e !== s && t !== s) || n.contains(r)) return l(s) ? s : y(s);
    var o = c(e);
    return o.host ? h(o.host, t) : h(e, c(t).host);
  }
  function f(e, t) {
    var i = 'top' === (1 < arguments.length && t !== undefined ? t : 'top') ? 'scrollTop' : 'scrollLeft',
      n = e.nodeName;
    if ('BODY' === n || 'HTML' === n) {
      var r = e.ownerDocument.documentElement;
      return (e.ownerDocument.scrollingElement || r)[i];
    }
    return e[i];
  }
  function m(e, t, i) {
    var n = 2 < arguments.length && i !== undefined && i,
      r = f(t, 'top'),
      a = f(t, 'left'),
      s = n ? -1 : 1;
    return (e.top += r * s), (e.bottom += r * s), (e.left += a * s), (e.right += a * s), e;
  }
  function g(e, t) {
    var i = 'x' === t ? 'Left' : 'Top',
      n = 'Left' === i ? 'Right' : 'Bottom';
    return parseFloat(e['border' + i + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10);
  }
  function n(e, t, i, n) {
    return Math.max(
      t['offset' + e],
      t['scroll' + e],
      i['client' + e],
      i['offset' + e],
      i['scroll' + e],
      de() ? i['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0
    );
  }
  function v() {
    var e = document.body,
      t = document.documentElement,
      i = de() && getComputedStyle(t);
    return { height: n('Height', e, t, i), width: n('Width', e, t, i) };
  }
  function w(e) {
    return me({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function b(e) {
    var t = {};
    if (de())
      try {
        t = e.getBoundingClientRect();
        var i = f(e, 'top'),
          n = f(e, 'left');
        (t.top += i), (t.left += n), (t.bottom += i), (t.right += n);
      } catch (d) {}
    else t = e.getBoundingClientRect();
    var r = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
      a = 'HTML' === e.nodeName ? v() : {},
      s = a.width || e.clientWidth || r.right - r.left,
      o = a.height || e.clientHeight || r.bottom - r.top,
      l = e.offsetWidth - s,
      c = e.offsetHeight - o;
    if (l || c) {
      var u = _(e);
      (l -= g(u, 'x')), (c -= g(u, 'y')), (r.width -= l), (r.height -= c);
    }
    return w(r);
  }
  function x(e, t) {
    var i = de(),
      n = 'HTML' === t.nodeName,
      r = b(e),
      a = b(t),
      s = p(e),
      o = _(t),
      l = parseFloat(o.borderTopWidth, 10),
      c = parseFloat(o.borderLeftWidth, 10),
      u = w({ top: r.top - a.top - l, left: r.left - a.left - c, width: r.width, height: r.height });
    if (((u.marginTop = 0), (u.marginLeft = 0), !i && n)) {
      var d = parseFloat(o.marginTop, 10),
        h = parseFloat(o.marginLeft, 10);
      (u.top -= l - d), (u.bottom -= l - d), (u.left -= c - h), (u.right -= c - h), (u.marginTop = d), (u.marginLeft = h);
    }
    return (i ? t.contains(s) : t === s && 'BODY' !== s.nodeName) && (u = m(u, t)), u;
  }
  function T(e) {
    var t = e.ownerDocument.documentElement,
      i = x(e, t),
      n = Math.max(t.clientWidth, window.innerWidth || 0),
      r = Math.max(t.clientHeight, window.innerHeight || 0),
      a = f(t),
      s = f(t, 'left');
    return w({ top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: n, height: r });
  }
  function k(e) {
    var t = e.nodeName;
    return 'BODY' !== t && 'HTML' !== t && ('fixed' === _(e, 'position') || k(d(e)));
  }
  function S(e, t, i, n) {
    var r = { top: 0, left: 0 },
      a = h(e, t);
    if ('viewport' === n) r = T(a);
    else {
      var s = void 0;
      'scrollParent' === n ? 'BODY' === (s = p(d(t))).nodeName && (s = e.ownerDocument.documentElement) : (s = 'window' === n ? e.ownerDocument.documentElement : n);
      var o = x(s, a);
      if ('HTML' !== s.nodeName || k(a)) r = o;
      else {
        var l = v(),
          c = l.height,
          u = l.width;
        (r.top += o.top - o.marginTop), (r.bottom = c + o.top), (r.left += o.left - o.marginLeft), (r.right = u + o.left);
      }
    }
    return (r.left += i), (r.top += i), (r.right -= i), (r.bottom -= i), r;
  }
  function C(e) {
    return e.width * e.height;
  }
  function u(e, t, n, i, r, a) {
    var s = 5 < arguments.length && a !== undefined ? a : 0;
    if (-1 === e.indexOf('auto')) return e;
    var o = S(n, i, s, r),
      l = {
        top: { width: o.width, height: t.top - o.top },
        right: { width: o.right - t.right, height: o.height },
        bottom: { width: o.width, height: o.bottom - t.bottom },
        left: { width: t.left - o.left, height: o.height },
      },
      c = Object.keys(l)
        .map(function (e) {
          return me({ key: e }, l[e], { area: C(l[e]) });
        })
        .sort(function (e, t) {
          return t.area - e.area;
        }),
      u = c.filter(function (e) {
        var t = e.width,
          i = e.height;
        return t >= n.clientWidth && i >= n.clientHeight;
      }),
      d = 0 < u.length ? u[0].key : c[0].key,
      h = e.split('-')[1];
    return d + (h ? '-' + h : '');
  }
  function E(e, t, i) {
    return x(i, h(t, i));
  }
  function D(e) {
    var t = getComputedStyle(e),
      i = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      n = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
    return { width: e.offsetWidth + n, height: e.offsetHeight + i };
  }
  function M(e) {
    var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function P(e, t, i) {
    i = i.split('-')[0];
    var n = D(e),
      r = { width: n.width, height: n.height },
      a = -1 !== ['right', 'left'].indexOf(i),
      s = a ? 'top' : 'left',
      o = a ? 'left' : 'top',
      l = a ? 'height' : 'width',
      c = a ? 'width' : 'height';
    return (r[s] = t[s] + t[l] / 2 - n[l] / 2), (r[o] = i === o ? t[o] - n[c] : t[M(o)]), r;
  }
  function A(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function r(e, t, i) {
    if (Array.prototype.findIndex)
      return e.findIndex(function (e) {
        return e[t] === i;
      });
    var n = A(e, function (e) {
      return e[t] === i;
    });
    return e.indexOf(n);
  }
  function L(e, i, t) {
    return (
      (t === undefined ? e : e.slice(0, r(e, 'name', t))).forEach(function (e) {
        e['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        var t = e['function'] || e.fn;
        e.enabled && o(t) && ((i.offsets.popper = w(i.offsets.popper)), (i.offsets.reference = w(i.offsets.reference)), (i = t(i, e)));
      }),
      i
    );
  }
  function i() {
    if (!this.state.isDestroyed) {
      var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
      (e.offsets.reference = E(this.state, this.popper, this.reference)),
        (e.placement = u(
          this.options.placement,
          e.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (e.originalPlacement = e.placement),
        (e.offsets.popper = P(this.popper, e.offsets.reference, e.placement)),
        (e.offsets.popper.position = 'absolute'),
        (e = L(this.modifiers, e)),
        this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
    }
  }
  function a(e, i) {
    return e.some(function (e) {
      var t = e.name;
      return e.enabled && t === i;
    });
  }
  function O(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], i = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
      var r = t[n],
        a = r ? '' + r + i : e;
      if ('undefined' != typeof document.body.style[a]) return a;
    }
    return null;
  }
  function R() {
    return (
      (this.state.isDestroyed = !0),
      a(this.modifiers, 'applyStyle') &&
        (this.popper.removeAttribute('x-placement'),
        (this.popper.style.left = ''),
        (this.popper.style.position = ''),
        (this.popper.style.top = ''),
        (this.popper.style[O('transform')] = '')),
      this.disableEventListeners(),
      this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function s(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function I(e, t, i, n) {
    var r = 'BODY' === e.nodeName,
      a = r ? e.ownerDocument.defaultView : e;
    a.addEventListener(t, i, { passive: !0 }), r || I(p(a.parentNode), t, i, n), n.push(a);
  }
  function N(e, t, i, n) {
    (i.updateBound = n), s(e).addEventListener('resize', i.updateBound, { passive: !0 });
    var r = p(e);
    return I(r, 'scroll', i.updateBound, i.scrollParents), (i.scrollElement = r), (i.eventsEnabled = !0), i;
  }
  function z() {
    this.state.eventsEnabled || (this.state = N(this.reference, this.options, this.state, this.scheduleUpdate));
  }
  function F(e, t) {
    return (
      s(e).removeEventListener('resize', t.updateBound),
      t.scrollParents.forEach(function (e) {
        e.removeEventListener('scroll', t.updateBound);
      }),
      (t.updateBound = null),
      (t.scrollParents = []),
      (t.scrollElement = null),
      (t.eventsEnabled = !1),
      t
    );
  }
  function H() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), (this.state = F(this.reference, this.state)));
  }
  function j(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function $(i, n) {
    Object.keys(n).forEach(function (e) {
      var t = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(e) && j(n[e]) && (t = 'px'), (i.style[e] = n[e] + t);
    });
  }
  function B(t, i) {
    Object.keys(i).forEach(function (e) {
      !1 !== i[e] ? t.setAttribute(e, i[e]) : t.removeAttribute(e);
    });
  }
  function q(e) {
    return $(e.instance.popper, e.styles), B(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && $(e.arrowElement, e.arrowStyles), e;
  }
  function Y(e, t, i, n, r) {
    var a = E(r, t, e),
      s = u(i.placement, a, t, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
    return t.setAttribute('x-placement', s), $(t, { position: 'absolute' }), i;
  }
  function X(e, t) {
    var i = t.x,
      n = t.y,
      r = e.offsets.popper,
      a = A(e.instance.modifiers, function (e) {
        return 'applyStyle' === e.name;
      }).gpuAcceleration;
    a !== undefined && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    var s = a !== undefined ? a : t.gpuAcceleration,
      o = b(y(e.instance.popper)),
      l = { position: r.position },
      c = { left: Math.floor(r.left), top: Math.floor(r.top), bottom: Math.floor(r.bottom), right: Math.floor(r.right) },
      u = 'bottom' === i ? 'top' : 'bottom',
      d = 'right' === n ? 'left' : 'right',
      h = O('transform'),
      p = void 0,
      f = void 0;
    if (((f = 'bottom' === u ? -o.height + c.bottom : c.top), (p = 'right' === d ? -o.width + c.right : c.left), s && h))
      (l[h] = 'translate3d(' + p + 'px, ' + f + 'px, 0)'), (l[u] = 0), (l[d] = 0), (l.willChange = 'transform');
    else {
      var m = 'bottom' === u ? -1 : 1,
        g = 'right' === d ? -1 : 1;
      (l[u] = f * m), (l[d] = p * g), (l.willChange = u + ', ' + d);
    }
    var v = { 'x-placement': e.placement };
    return (e.attributes = me({}, v, e.attributes)), (e.styles = me({}, l, e.styles)), (e.arrowStyles = me({}, e.offsets.arrow, e.arrowStyles)), e;
  }
  function W(e, t, i) {
    var n = A(e, function (e) {
        return e.name === t;
      }),
      r =
        !!n &&
        e.some(function (e) {
          return e.name === i && e.enabled && e.order < n.order;
        });
    if (!r) {
      var a = '`' + t + '`',
        s = '`' + i + '`';
      console.warn(s + ' modifier is required by ' + a + ' modifier in order to work, be sure to include it before ' + a + '!');
    }
    return r;
  }
  function V(e, t) {
    var i;
    if (!W(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
    var n = t.element;
    if ('string' == typeof n) {
      if (!(n = e.instance.popper.querySelector(n))) return e;
    } else if (!e.instance.popper.contains(n)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
    var r = e.placement.split('-')[0],
      a = e.offsets,
      s = a.popper,
      o = a.reference,
      l = -1 !== ['left', 'right'].indexOf(r),
      c = l ? 'height' : 'width',
      u = l ? 'Top' : 'Left',
      d = u.toLowerCase(),
      h = l ? 'left' : 'top',
      p = l ? 'bottom' : 'right',
      f = D(n)[c];
    o[p] - f < s[d] && (e.offsets.popper[d] -= s[d] - (o[p] - f)), o[d] + f > s[p] && (e.offsets.popper[d] += o[d] + f - s[p]), (e.offsets.popper = w(e.offsets.popper));
    var m = o[d] + o[c] / 2 - f / 2,
      g = _(e.instance.popper),
      v = parseFloat(g['margin' + u], 10),
      y = parseFloat(g['border' + u + 'Width'], 10),
      b = m - e.offsets.popper[d] - v - y;
    return (b = Math.max(Math.min(s[c] - f, b), 0)), (e.arrowElement = n), (e.offsets.arrow = (fe((i = {}), d, Math.round(b)), fe(i, h, ''), i)), e;
  }
  function G(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }
  function U(e, t) {
    var i = 1 < arguments.length && t !== undefined && t,
      n = ve.indexOf(e),
      r = ve.slice(n + 1).concat(ve.slice(0, n));
    return i ? r.reverse() : r;
  }
  function K(p, f) {
    if (a(p.instance.modifiers, 'inner')) return p;
    if (p.flipped && p.placement === p.originalPlacement) return p;
    var m = S(p.instance.popper, p.instance.reference, f.padding, f.boundariesElement),
      g = p.placement.split('-')[0],
      v = M(g),
      y = p.placement.split('-')[1] || '',
      b = [];
    switch (f.behavior) {
      case ye.FLIP:
        b = [g, v];
        break;
      case ye.CLOCKWISE:
        b = U(g);
        break;
      case ye.COUNTERCLOCKWISE:
        b = U(g, !0);
        break;
      default:
        b = f.behavior;
    }
    return (
      b.forEach(function (e, t) {
        if (g !== e || b.length === t + 1) return p;
        (g = p.placement.split('-')[0]), (v = M(g));
        var i = p.offsets.popper,
          n = p.offsets.reference,
          r = Math.floor,
          a =
            ('left' === g && r(i.right) > r(n.left)) ||
            ('right' === g && r(i.left) < r(n.right)) ||
            ('top' === g && r(i.bottom) > r(n.top)) ||
            ('bottom' === g && r(i.top) < r(n.bottom)),
          s = r(i.left) < r(m.left),
          o = r(i.right) > r(m.right),
          l = r(i.top) < r(m.top),
          c = r(i.bottom) > r(m.bottom),
          u = ('left' === g && s) || ('right' === g && o) || ('top' === g && l) || ('bottom' === g && c),
          d = -1 !== ['top', 'bottom'].indexOf(g),
          h = !!f.flipVariations && ((d && 'start' === y && s) || (d && 'end' === y && o) || (!d && 'start' === y && l) || (!d && 'end' === y && c));
        (a || u || h) &&
          ((p.flipped = !0),
          (a || u) && (g = b[t + 1]),
          h && (y = G(y)),
          (p.placement = g + (y ? '-' + y : '')),
          (p.offsets.popper = me({}, p.offsets.popper, P(p.instance.popper, p.offsets.reference, p.placement))),
          (p = L(p.instance.modifiers, p, 'flip')));
      }),
      p
    );
  }
  function Q(e) {
    var t = e.offsets,
      i = t.popper,
      n = t.reference,
      r = e.placement.split('-')[0],
      a = Math.floor,
      s = -1 !== ['top', 'bottom'].indexOf(r),
      o = s ? 'right' : 'bottom',
      l = s ? 'left' : 'top',
      c = s ? 'width' : 'height';
    return i[o] < a(n[l]) && (e.offsets.popper[l] = a(n[l]) - i[c]), i[l] > a(n[o]) && (e.offsets.popper[l] = a(n[o])), e;
  }
  function J(e, t, i, n) {
    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      a = +r[1],
      s = r[2];
    if (!a) return e;
    if (0 === s.indexOf('%')) {
      var o = void 0;
      switch (s) {
        case '%p':
          o = i;
          break;
        case '%':
        case '%r':
        default:
          o = n;
      }
      return (w(o)[t] / 100) * a;
    }
    if ('vh' === s || 'vw' === s) {
      return (
        (('vh' === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * a
      );
    }
    return a;
  }
  function Z(e, r, a, t) {
    var s = [0, 0],
      o = -1 !== ['right', 'left'].indexOf(t),
      i = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      n = i.indexOf(
        A(i, function (e) {
          return -1 !== e.search(/,|\s/);
        })
      );
    i[n] && -1 === i[n].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var l = /\s*,\s*|\s+/,
      c = -1 !== n ? [i.slice(0, n).concat([i[n].split(l)[0]]), [i[n].split(l)[1]].concat(i.slice(n + 1))] : [i];
    return (
      (c = c.map(function (e, t) {
        var i = (1 === t ? !o : o) ? 'height' : 'width',
          n = !1;
        return e
          .reduce(function (e, t) {
            return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? ((e[e.length - 1] = t), (n = !0), e) : n ? ((e[e.length - 1] += t), (n = !1), e) : e.concat(t);
          }, [])
          .map(function (e) {
            return J(e, i, r, a);
          });
      })).forEach(function (i, n) {
        i.forEach(function (e, t) {
          j(e) && (s[n] += e * ('-' === i[t - 1] ? -1 : 1));
        });
      }),
      s
    );
  }
  function ee(e, t) {
    var i = t.offset,
      n = e.placement,
      r = e.offsets,
      a = r.popper,
      s = r.reference,
      o = n.split('-')[0],
      l = void 0;
    return (
      (l = j(+i) ? [+i, 0] : Z(i, a, s, o)),
      'left' === o
        ? ((a.top += l[0]), (a.left -= l[1]))
        : 'right' === o
        ? ((a.top += l[0]), (a.left += l[1]))
        : 'top' === o
        ? ((a.left += l[0]), (a.top -= l[1]))
        : 'bottom' === o && ((a.left += l[0]), (a.top += l[1])),
      (e.popper = a),
      e
    );
  }
  function te(e, n) {
    var t = n.boundariesElement || y(e.instance.popper);
    e.instance.reference === t && (t = y(t));
    var r = S(e.instance.popper, e.instance.reference, n.padding, t);
    n.boundaries = r;
    var i = n.priority,
      a = e.offsets.popper,
      s = {
        primary: function (e) {
          var t = a[e];
          return a[e] < r[e] && !n.escapeWithReference && (t = Math.max(a[e], r[e])), fe({}, e, t);
        },
        secondary: function (e) {
          var t = 'right' === e ? 'left' : 'top',
            i = a[t];
          return a[e] > r[e] && !n.escapeWithReference && (i = Math.min(a[t], r[e] - ('right' === e ? a.width : a.height))), fe({}, t, i);
        },
      };
    return (
      i.forEach(function (e) {
        var t = -1 !== ['left', 'top'].indexOf(e) ? 'primary' : 'secondary';
        a = me({}, a, s[t](e));
      }),
      (e.offsets.popper = a),
      e
    );
  }
  function ie(e) {
    var t = e.placement,
      i = t.split('-')[0],
      n = t.split('-')[1];
    if (n) {
      var r = e.offsets,
        a = r.reference,
        s = r.popper,
        o = -1 !== ['bottom', 'top'].indexOf(i),
        l = o ? 'left' : 'top',
        c = o ? 'width' : 'height',
        u = { start: fe({}, l, a[l]), end: fe({}, l, a[l] + a[c] - s[c]) };
      e.offsets.popper = me({}, s, u[n]);
    }
    return e;
  }
  function ne(e) {
    if (!W(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
    var t = e.offsets.reference,
      i = A(e.instance.modifiers, function (e) {
        return 'preventOverflow' === e.name;
      }).boundaries;
    if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
      if (!0 === e.hide) return e;
      (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
    } else {
      if (!1 === e.hide) return e;
      (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
    }
    return e;
  }
  function re(e) {
    var t = e.placement,
      i = t.split('-')[0],
      n = e.offsets,
      r = n.popper,
      a = n.reference,
      s = -1 !== ['left', 'right'].indexOf(i),
      o = -1 === ['top', 'left'].indexOf(i);
    return (r[s ? 'left' : 'top'] = a[i] - (o ? r[s ? 'width' : 'height'] : 0)), (e.placement = M(t)), (e.offsets.popper = w(r)), e;
  }
  for (var ae = 'undefined' != typeof window && 'undefined' != typeof document, se = ['Edge', 'Trident', 'Firefox'], oe = 0, le = 0; le < se.length; le += 1)
    if (ae && 0 <= navigator.userAgent.indexOf(se[le])) {
      oe = 1;
      break;
    }
  var ce = ae && window.Promise ? e : t,
    ue = undefined,
    de = function () {
      return ue === undefined && (ue = -1 !== navigator.appVersion.indexOf('MSIE 10')), ue;
    },
    he = function (e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    },
    pe = (function () {
      function n(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      return function (e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e;
      };
    })(),
    fe = function (e, t, i) {
      return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
    },
    me =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
        return e;
      },
    ge = [
      'auto-start',
      'auto',
      'auto-end',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-end',
      'bottom',
      'bottom-start',
      'left-end',
      'left',
      'left-start',
    ],
    ve = ge.slice(3),
    ye = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' },
    be = {
      placement: 'bottom',
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: { order: 100, enabled: !0, fn: ie },
        offset: { order: 200, enabled: !0, fn: ee, offset: 0 },
        preventOverflow: { order: 300, enabled: !0, fn: te, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' },
        keepTogether: { order: 400, enabled: !0, fn: Q },
        arrow: { order: 500, enabled: !0, fn: V, element: '[x-arrow]' },
        flip: { order: 600, enabled: !0, fn: K, behavior: 'flip', padding: 5, boundariesElement: 'viewport' },
        inner: { order: 700, enabled: !1, fn: re },
        hide: { order: 800, enabled: !0, fn: ne },
        computeStyle: { order: 850, enabled: !0, fn: X, gpuAcceleration: !0, x: 'bottom', y: 'right' },
        applyStyle: { order: 900, enabled: !0, fn: q, onLoad: Y, gpuAcceleration: undefined },
      },
    },
    _e = (function () {
      function s(e, t, i) {
        var n = this,
          r = 2 < arguments.length && i !== undefined ? i : {};
        he(this, s),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(n.update);
          }),
          (this.update = ce(this.update.bind(this))),
          (this.options = me({}, s.Defaults, r)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = t && t.jquery ? t[0] : t),
          (this.options.modifiers = {}),
          Object.keys(me({}, s.Defaults.modifiers, r.modifiers)).forEach(function (e) {
            n.options.modifiers[e] = me({}, s.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
          }),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (e) {
              return me({ name: e }, n.options.modifiers[e]);
            })
            .sort(function (e, t) {
              return e.order - t.order;
            })),
          this.modifiers.forEach(function (e) {
            e.enabled && o(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state);
          }),
          this.update();
        var a = this.options.eventsEnabled;
        a && this.enableEventListeners(), (this.state.eventsEnabled = a);
      }
      return (
        pe(s, [
          {
            key: 'update',
            value: function () {
              return i.call(this);
            },
          },
          {
            key: 'destroy',
            value: function () {
              return R.call(this);
            },
          },
          {
            key: 'enableEventListeners',
            value: function () {
              return z.call(this);
            },
          },
          {
            key: 'disableEventListeners',
            value: function () {
              return H.call(this);
            },
          },
        ]),
        s
      );
    })();
  return (_e.Utils = ('undefined' != typeof window ? window : global).PopperUtils), (_e.placements = ge), (_e.Defaults = be), _e;
}),
  (function (e, t) {
    'object' == typeof module && 'object' == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document) throw new Error('jQuery requires a window with a document');
              return t(e);
            })
      : t(e);
  })('undefined' != typeof window ? window : this, function (T, e) {
    function o(e) {
      var t = !!e && 'length' in e && e.length,
        i = pe.type(e);
      return 'function' !== i && !pe.isWindow(e) && ('array' === i || 0 === t || ('number' == typeof t && 0 < t && t - 1 in e));
    }
    function t(e, i, n) {
      if (pe.isFunction(i))
        return pe.grep(e, function (e, t) {
          return !!i.call(e, t, e) !== n;
        });
      if (i.nodeType)
        return pe.grep(e, function (e) {
          return (e === i) !== n;
        });
      if ('string' == typeof i) {
        if (Te.test(i)) return pe.filter(i, e, n);
        i = pe.filter(i, e);
      }
      return pe.grep(e, function (e) {
        return -1 < pe.inArray(e, i) !== n;
      });
    }
    function i(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    function u(e) {
      var i = {};
      return (
        pe.each(e.match(Pe) || [], function (e, t) {
          i[t] = !0;
        }),
        i
      );
    }
    function r() {
      ne.addEventListener
        ? (ne.removeEventListener('DOMContentLoaded', a), T.removeEventListener('load', a))
        : (ne.detachEvent('onreadystatechange', a), T.detachEvent('onload', a));
    }
    function a() {
      (ne.addEventListener || 'load' === T.event.type || 'complete' === ne.readyState) && (r(), pe.ready());
    }
    function l(e, t, i) {
      if (i === undefined && 1 === e.nodeType) {
        var n = 'data-' + t.replace(Re, '-$1').toLowerCase();
        if ('string' == typeof (i = e.getAttribute(n))) {
          try {
            i = 'true' === i || ('false' !== i && ('null' === i ? null : +i + '' === i ? +i : Oe.test(i) ? pe.parseJSON(i) : i));
          } catch (r) {}
          pe.data(e, t, i);
        } else i = undefined;
      }
      return i;
    }
    function c(e) {
      var t;
      for (t in e) if (('data' !== t || !pe.isEmptyObject(e[t])) && 'toJSON' !== t) return !1;
      return !0;
    }
    function n(e, t, i, n) {
      if (Le(e)) {
        var r,
          a,
          s = pe.expando,
          o = e.nodeType,
          l = o ? pe.cache : e,
          c = o ? e[s] : e[s] && s;
        if ((c && l[c] && (n || l[c].data)) || i !== undefined || 'string' != typeof t)
          return (
            c || (c = o ? (e[s] = ie.pop() || pe.guid++) : s),
            l[c] || (l[c] = o ? {} : { toJSON: pe.noop }),
            ('object' != typeof t && 'function' != typeof t) || (n ? (l[c] = pe.extend(l[c], t)) : (l[c].data = pe.extend(l[c].data, t))),
            (a = l[c]),
            n || (a.data || (a.data = {}), (a = a.data)),
            i !== undefined && (a[pe.camelCase(t)] = i),
            'string' == typeof t ? null == (r = a[t]) && (r = a[pe.camelCase(t)]) : (r = a),
            r
          );
      }
    }
    function s(e, t, i) {
      if (Le(e)) {
        var n,
          r,
          a = e.nodeType,
          s = a ? pe.cache : e,
          o = a ? e[pe.expando] : pe.expando;
        if (s[o]) {
          if (t && (n = i ? s[o] : s[o].data)) {
            r = (t = pe.isArray(t) ? t.concat(pe.map(t, pe.camelCase)) : t in n ? [t] : (t = pe.camelCase(t)) in n ? [t] : t.split(' ')).length;
            for (; r--; ) delete n[t[r]];
            if (i ? !c(n) : !pe.isEmptyObject(n)) return;
          }
          (i || (delete s[o].data, c(s[o]))) && (a ? pe.cleanData([e], !0) : de.deleteExpando || s != s.window ? delete s[o] : (s[o] = undefined));
        }
      }
    }
    function d(e, t, i, n) {
      var r,
        a = 1,
        s = 20,
        o = n
          ? function () {
              return n.cur();
            }
          : function () {
              return pe.css(e, t, '');
            },
        l = o(),
        c = (i && i[3]) || (pe.cssNumber[t] ? '' : 'px'),
        u = (pe.cssNumber[t] || ('px' !== c && +l)) && He.exec(pe.css(e, t));
      if (u && u[3] !== c) for (c = c || u[3], i = i || [], u = +l || 1; (u /= a = a || '.5'), pe.style(e, t, u + c), a !== (a = o() / l) && 1 !== a && --s; );
      return i && ((u = +u || +l || 0), (r = i[1] ? u + (i[1] + 1) * i[2] : +i[2]), n && ((n.unit = c), (n.start = u), (n.end = r))), r;
    }
    function g(e) {
      var t = Ve.split('|'),
        i = e.createDocumentFragment();
      if (i.createElement) for (; t.length; ) i.createElement(t.pop());
      return i;
    }
    function v(e, t) {
      var i,
        n,
        r = 0,
        a = 'undefined' != typeof e.getElementsByTagName ? e.getElementsByTagName(t || '*') : 'undefined' != typeof e.querySelectorAll ? e.querySelectorAll(t || '*') : undefined;
      if (!a) for (a = [], i = e.childNodes || e; null != (n = i[r]); r++) !t || pe.nodeName(n, t) ? a.push(n) : pe.merge(a, v(n, t));
      return t === undefined || (t && pe.nodeName(e, t)) ? pe.merge([e], a) : a;
    }
    function y(e, t) {
      for (var i, n = 0; null != (i = e[n]); n++) pe._data(i, 'globalEval', !t || pe._data(t[n], 'globalEval'));
    }
    function b(e) {
      qe.test(e.type) && (e.defaultChecked = e.checked);
    }
    function m(e, t, i, n, r) {
      for (var a, s, o, l, c, u, d, h = e.length, p = g(t), f = [], m = 0; m < h; m++)
        if ((s = e[m]) || 0 === s)
          if ('object' === pe.type(s)) pe.merge(f, s.nodeType ? [s] : s);
          else if (Ue.test(s)) {
            for (
              l = l || p.appendChild(t.createElement('div')),
                c = (Ye.exec(s) || ['', ''])[1].toLowerCase(),
                d = Ge[c] || Ge._default,
                l.innerHTML = d[1] + pe.htmlPrefilter(s) + d[2],
                a = d[0];
              a--;

            )
              l = l.lastChild;
            if ((!de.leadingWhitespace && We.test(s) && f.push(t.createTextNode(We.exec(s)[0])), !de.tbody))
              for (a = (s = 'table' !== c || Ke.test(s) ? ('<table>' !== d[1] || Ke.test(s) ? 0 : l) : l.firstChild) && s.childNodes.length; a--; )
                pe.nodeName((u = s.childNodes[a]), 'tbody') && !u.childNodes.length && s.removeChild(u);
            for (pe.merge(f, l.childNodes), l.textContent = ''; l.firstChild; ) l.removeChild(l.firstChild);
            l = p.lastChild;
          } else f.push(t.createTextNode(s));
      for (l && p.removeChild(l), de.appendChecked || pe.grep(v(f, 'input'), b), m = 0; (s = f[m++]); )
        if (n && -1 < pe.inArray(s, n)) r && r.push(s);
        else if (((o = pe.contains(s.ownerDocument, s)), (l = v(p.appendChild(s), 'script')), o && y(l), i)) for (a = 0; (s = l[a++]); ) Xe.test(s.type || '') && i.push(s);
      return (l = null), p;
    }
    function h() {
      return !0;
    }
    function p() {
      return !1;
    }
    function f() {
      try {
        return ne.activeElement;
      } catch (e) {}
    }
    function _(e, t, i, n, r, a) {
      var s, o;
      if ('object' == typeof t) {
        for (o in ('string' != typeof i && ((n = n || i), (i = undefined)), t)) _(e, o, i, n, t[o], a);
        return e;
      }
      if (
        (null == n && null == r ? ((r = i), (n = i = undefined)) : null == r && ('string' == typeof i ? ((r = n), (n = undefined)) : ((r = n), (n = i), (i = undefined))), !1 === r)
      )
        r = p;
      else if (!r) return e;
      return (
        1 === a &&
          ((s = r),
          ((r = function (e) {
            return pe().off(e), s.apply(this, arguments);
          }).guid = s.guid || (s.guid = pe.guid++))),
        e.each(function () {
          pe.event.add(this, t, r, n, i);
        })
      );
    }
    function w(e, t) {
      return pe.nodeName(e, 'table') && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr')
        ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody'))
        : e;
    }
    function x(e) {
      return (e.type = (null !== pe.find.attr(e, 'type')) + '/' + e.type), e;
    }
    function k(e) {
      var t = ot.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute('type'), e;
    }
    function S(e, t) {
      if (1 === t.nodeType && pe.hasData(e)) {
        var i,
          n,
          r,
          a = pe._data(e),
          s = pe._data(t, a),
          o = a.events;
        if (o) for (i in (delete s.handle, (s.events = {}), o)) for (n = 0, r = o[i].length; n < r; n++) pe.event.add(t, i, o[i][n]);
        s.data && (s.data = pe.extend({}, s.data));
      }
    }
    function C(e, t) {
      var i, n, r;
      if (1 === t.nodeType) {
        if (((i = t.nodeName.toLowerCase()), !de.noCloneEvent && t[pe.expando])) {
          for (n in (r = pe._data(t)).events) pe.removeEvent(t, n, r.handle);
          t.removeAttribute(pe.expando);
        }
        'script' === i && t.text !== e.text
          ? ((x(t).text = e.text), k(t))
          : 'object' === i
          ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML))
          : 'input' === i && qe.test(e.type)
          ? ((t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value))
          : 'option' === i
          ? (t.defaultSelected = t.selected = e.defaultSelected)
          : ('input' !== i && 'textarea' !== i) || (t.defaultValue = e.defaultValue);
      }
    }
    function E(i, n, r, a) {
      n = ae.apply([], n);
      var e,
        t,
        s,
        o,
        l,
        c,
        u = 0,
        d = i.length,
        h = d - 1,
        p = n[0],
        f = pe.isFunction(p);
      if (f || (1 < d && 'string' == typeof p && !de.checkClone && st.test(p)))
        return i.each(function (e) {
          var t = i.eq(e);
          f && (n[0] = p.call(this, e, t.html())), E(t, n, r, a);
        });
      if (d && ((e = (c = m(n, i[0].ownerDocument, !1, i, a)).firstChild), 1 === c.childNodes.length && (c = e), e || a)) {
        for (s = (o = pe.map(v(c, 'script'), x)).length; u < d; u++) (t = c), u !== h && ((t = pe.clone(t, !0, !0)), s && pe.merge(o, v(t, 'script'))), r.call(i[u], t, u);
        if (s)
          for (l = o[o.length - 1].ownerDocument, pe.map(o, k), u = 0; u < s; u++)
            (t = o[u]),
              Xe.test(t.type || '') &&
                !pe._data(t, 'globalEval') &&
                pe.contains(l, t) &&
                (t.src ? pe._evalUrl && pe._evalUrl(t.src) : pe.globalEval((t.text || t.textContent || t.innerHTML || '').replace(lt, '')));
        c = e = null;
      }
      return i;
    }
    function D(e, t, i) {
      for (var n, r = t ? pe.filter(t, e) : e, a = 0; null != (n = r[a]); a++)
        i || 1 !== n.nodeType || pe.cleanData(v(n)), n.parentNode && (i && pe.contains(n.ownerDocument, n) && y(v(n, 'script')), n.parentNode.removeChild(n));
      return e;
    }
    function M(e, t) {
      var i = pe(t.createElement(e)).appendTo(t.body),
        n = pe.css(i[0], 'display');
      return i.detach(), n;
    }
    function P(e) {
      var t = ne,
        i = dt[e];
      return (
        i ||
          (('none' !== (i = M(e, t)) && i) ||
            ((t = ((ut = (ut || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || ut[0].contentDocument).document).write(),
            t.close(),
            (i = M(e, t)),
            ut.detach()),
          (dt[e] = i)),
        i
      );
    }
    function A(e, t) {
      return {
        get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        },
      };
    }
    function L(e) {
      if (e in Ct) return e;
      for (var t = e.charAt(0).toUpperCase() + e.slice(1), i = St.length; i--; ) if ((e = St[i] + t) in Ct) return e;
    }
    function O(e, t) {
      for (var i, n, r, a = [], s = 0, o = e.length; s < o; s++)
        (n = e[s]).style &&
          ((a[s] = pe._data(n, 'olddisplay')),
          (i = n.style.display),
          t
            ? (a[s] || 'none' !== i || (n.style.display = ''), '' === n.style.display && $e(n) && (a[s] = pe._data(n, 'olddisplay', P(n.nodeName))))
            : ((r = $e(n)), ((i && 'none' !== i) || !r) && pe._data(n, 'olddisplay', r ? i : pe.css(n, 'display'))));
      for (s = 0; s < o; s++) (n = e[s]).style && ((t && 'none' !== n.style.display && '' !== n.style.display) || (n.style.display = t ? a[s] || '' : 'none'));
      return e;
    }
    function R(e, t, i) {
      var n = xt.exec(t);
      return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || 'px') : t;
    }
    function I(e, t, i, n, r) {
      for (var a = i === (n ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, s = 0; a < 4; a += 2)
        'margin' === i && (s += pe.css(e, i + je[a], !0, r)),
          n
            ? ('content' === i && (s -= pe.css(e, 'padding' + je[a], !0, r)), 'margin' !== i && (s -= pe.css(e, 'border' + je[a] + 'Width', !0, r)))
            : ((s += pe.css(e, 'padding' + je[a], !0, r)), 'padding' !== i && (s += pe.css(e, 'border' + je[a] + 'Width', !0, r)));
      return s;
    }
    function N(e, t, i) {
      var n = !0,
        r = 'width' === t ? e.offsetWidth : e.offsetHeight,
        a = gt(e),
        s = de.boxSizing && 'border-box' === pe.css(e, 'boxSizing', !1, a);
      if (r <= 0 || null == r) {
        if ((((r = vt(e, t, a)) < 0 || null == r) && (r = e.style[t]), pt.test(r))) return r;
        (n = s && (de.boxSizingReliable() || r === e.style[t])), (r = parseFloat(r) || 0);
      }
      return r + I(e, t, i || (s ? 'border' : 'content'), n, a) + 'px';
    }
    function z(e, t, i, n, r) {
      return new z.prototype.init(e, t, i, n, r);
    }
    function F() {
      return (
        T.setTimeout(function () {
          Et = undefined;
        }),
        (Et = pe.now())
      );
    }
    function H(e, t) {
      var i,
        n = { height: e },
        r = 0;
      for (t = t ? 1 : 0; r < 4; r += 2 - t) n['margin' + (i = je[r])] = n['padding' + i] = e;
      return t && (n.opacity = n.width = e), n;
    }
    function j(e, t, i) {
      for (var n, r = (q.tweeners[t] || []).concat(q.tweeners['*']), a = 0, s = r.length; a < s; a++) if ((n = r[a].call(i, t, e))) return n;
    }
    function $(t, e, i) {
      var n,
        r,
        a,
        s,
        o,
        l,
        c,
        u = this,
        d = {},
        h = t.style,
        p = t.nodeType && $e(t),
        f = pe._data(t, 'fxshow');
      for (n in (i.queue ||
        (null == (o = pe._queueHooks(t, 'fx')).unqueued &&
          ((o.unqueued = 0),
          (l = o.empty.fire),
          (o.empty.fire = function () {
            o.unqueued || l();
          })),
        o.unqueued++,
        u.always(function () {
          u.always(function () {
            o.unqueued--, pe.queue(t, 'fx').length || o.empty.fire();
          });
        })),
      1 === t.nodeType &&
        ('height' in e || 'width' in e) &&
        ((i.overflow = [h.overflow, h.overflowX, h.overflowY]),
        'inline' === ('none' === (c = pe.css(t, 'display')) ? pe._data(t, 'olddisplay') || P(t.nodeName) : c) &&
          'none' === pe.css(t, 'float') &&
          (de.inlineBlockNeedsLayout && 'inline' !== P(t.nodeName) ? (h.zoom = 1) : (h.display = 'inline-block'))),
      i.overflow &&
        ((h.overflow = 'hidden'),
        de.shrinkWrapBlocks() ||
          u.always(function () {
            (h.overflow = i.overflow[0]), (h.overflowX = i.overflow[1]), (h.overflowY = i.overflow[2]);
          })),
      e))
        if (((r = e[n]), Rt.exec(r))) {
          if ((delete e[n], (a = a || 'toggle' === r), r === (p ? 'hide' : 'show'))) {
            if ('show' !== r || !f || f[n] === undefined) continue;
            p = !0;
          }
          d[n] = (f && f[n]) || pe.style(t, n);
        } else c = undefined;
      if (pe.isEmptyObject(d)) 'inline' === ('none' === c ? P(t.nodeName) : c) && (h.display = c);
      else
        for (n in (f ? 'hidden' in f && (p = f.hidden) : (f = pe._data(t, 'fxshow', {})),
        a && (f.hidden = !p),
        p
          ? pe(t).show()
          : u.done(function () {
              pe(t).hide();
            }),
        u.done(function () {
          var e;
          for (e in (pe._removeData(t, 'fxshow'), d)) pe.style(t, e, d[e]);
        }),
        d))
          (s = j(p ? f[n] : 0, n, u)), n in f || ((f[n] = s.start), p && ((s.end = s.start), (s.start = 'width' === n || 'height' === n ? 1 : 0)));
    }
    function B(e, t) {
      var i, n, r, a, s;
      for (i in e)
        if (
          ((r = t[(n = pe.camelCase(i))]),
          (a = e[i]),
          pe.isArray(a) && ((r = a[1]), (a = e[i] = a[0])),
          i !== n && ((e[n] = a), delete e[i]),
          (s = pe.cssHooks[n]) && 'expand' in s)
        )
          for (i in ((a = s.expand(a)), delete e[n], a)) i in e || ((e[i] = a[i]), (t[i] = r));
        else t[n] = r;
    }
    function q(a, e, t) {
      var i,
        s,
        n = 0,
        r = q.prefilters.length,
        o = pe.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (s) return !1;
          for (var e = Et || F(), t = Math.max(0, c.startTime + c.duration - e), i = 1 - (t / c.duration || 0), n = 0, r = c.tweens.length; n < r; n++) c.tweens[n].run(i);
          return o.notifyWith(a, [c, i, t]), i < 1 && r ? t : (o.resolveWith(a, [c]), !1);
        },
        c = o.promise({
          elem: a,
          props: pe.extend({}, e),
          opts: pe.extend(!0, { specialEasing: {}, easing: pe.easing._default }, t),
          originalProperties: e,
          originalOptions: t,
          startTime: Et || F(),
          duration: t.duration,
          tweens: [],
          createTween: function (e, t) {
            var i = pe.Tween(a, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
            return c.tweens.push(i), i;
          },
          stop: function (e) {
            var t = 0,
              i = e ? c.tweens.length : 0;
            if (s) return this;
            for (s = !0; t < i; t++) c.tweens[t].run(1);
            return e ? (o.notifyWith(a, [c, 1, 0]), o.resolveWith(a, [c, e])) : o.rejectWith(a, [c, e]), this;
          },
        }),
        u = c.props;
      for (B(u, c.opts.specialEasing); n < r; n++)
        if ((i = q.prefilters[n].call(c, a, u, c.opts))) return pe.isFunction(i.stop) && (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(i.stop, i)), i;
      return (
        pe.map(u, j, c),
        pe.isFunction(c.opts.start) && c.opts.start.call(a, c),
        pe.fx.timer(pe.extend(l, { elem: a, anim: c, queue: c.opts.queue })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
      );
    }
    function Y(e) {
      return pe.attr(e, 'class') || '';
    }
    function X(a) {
      return function (e, t) {
        'string' != typeof e && ((t = e), (e = '*'));
        var i,
          n = 0,
          r = e.toLowerCase().match(Pe) || [];
        if (pe.isFunction(t)) for (; (i = r[n++]); ) '+' === i.charAt(0) ? ((i = i.slice(1) || '*'), (a[i] = a[i] || []).unshift(t)) : (a[i] = a[i] || []).push(t);
      };
    }
    function W(t, r, a, s) {
      function o(e) {
        var n;
        return (
          (l[e] = !0),
          pe.each(t[e] || [], function (e, t) {
            var i = t(r, a, s);
            return 'string' != typeof i || c || l[i] ? (c ? !(n = i) : void 0) : (r.dataTypes.unshift(i), o(i), !1);
          }),
          n
        );
      }
      var l = {},
        c = t === ai;
      return o(r.dataTypes[0]) || (!l['*'] && o('*'));
    }
    function V(e, t) {
      var i,
        n,
        r = pe.ajaxSettings.flatOptions || {};
      for (n in t) t[n] !== undefined && ((r[n] ? e : i || (i = {}))[n] = t[n]);
      return i && pe.extend(!0, e, i), e;
    }
    function G(e, t, i) {
      for (var n, r, a, s, o = e.contents, l = e.dataTypes; '*' === l[0]; ) l.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader('Content-Type'));
      if (r)
        for (s in o)
          if (o[s] && o[s].test(r)) {
            l.unshift(s);
            break;
          }
      if (l[0] in i) a = l[0];
      else {
        for (s in i) {
          if (!l[0] || e.converters[s + ' ' + l[0]]) {
            a = s;
            break;
          }
          n || (n = s);
        }
        a = a || n;
      }
      if (a) return a !== l[0] && l.unshift(a), i[a];
    }
    function U(e, t, i, n) {
      var r,
        a,
        s,
        o,
        l,
        c = {},
        u = e.dataTypes.slice();
      if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
      for (a = u.shift(); a; )
        if ((e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = a), (a = u.shift())))
          if ('*' === a) a = l;
          else if ('*' !== l && l !== a) {
            if (!(s = c[l + ' ' + a] || c['* ' + a]))
              for (r in c)
                if ((o = r.split(' '))[1] === a && (s = c[l + ' ' + o[0]] || c['* ' + o[0]])) {
                  !0 === s ? (s = c[r]) : !0 !== c[r] && ((a = o[0]), u.unshift(o[1]));
                  break;
                }
            if (!0 !== s)
              if (s && e['throws']) t = s(t);
              else
                try {
                  t = s(t);
                } catch (d) {
                  return { state: 'parsererror', error: s ? d : 'No conversion from ' + l + ' to ' + a };
                }
          }
      return { state: 'success', data: t };
    }
    function K(e) {
      return (e.style && e.style.display) || pe.css(e, 'display');
    }
    function Q(e) {
      if (!pe.contains(e.ownerDocument || ne, e)) return !0;
      for (; e && 1 === e.nodeType; ) {
        if ('none' === K(e) || 'hidden' === e.type) return !0;
        e = e.parentNode;
      }
      return !1;
    }
    function J(i, e, n, r) {
      var t;
      if (pe.isArray(e))
        pe.each(e, function (e, t) {
          n || ui.test(i) ? r(i, t) : J(i + '[' + ('object' == typeof t && null != t ? e : '') + ']', t, n, r);
        });
      else if (n || 'object' !== pe.type(e)) r(i, e);
      else for (t in e) J(i + '[' + t + ']', e[t], n, r);
    }
    function Z() {
      try {
        return new T.XMLHttpRequest();
      } catch (e) {}
    }
    function ee() {
      try {
        return new T.ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) {}
    }
    function te(e) {
      return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    var ie = [],
      ne = T.document,
      re = ie.slice,
      ae = ie.concat,
      se = ie.push,
      oe = ie.indexOf,
      le = {},
      ce = le.toString,
      ue = le.hasOwnProperty,
      de = {},
      he = '1.12.4',
      pe = function (e, t) {
        return new pe.fn.init(e, t);
      },
      fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      me = /^-ms-/,
      ge = /-([\da-z])/gi,
      ve = function (e, t) {
        return t.toUpperCase();
      };
    (pe.fn = pe.prototype = {
      jquery: he,
      constructor: pe,
      selector: '',
      length: 0,
      toArray: function () {
        return re.call(this);
      },
      get: function (e) {
        return null != e ? (e < 0 ? this[e + this.length] : this[e]) : re.call(this);
      },
      pushStack: function (e) {
        var t = pe.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e) {
        return pe.each(this, e);
      },
      map: function (i) {
        return this.pushStack(
          pe.map(this, function (e, t) {
            return i.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(re.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          i = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= i && i < t ? [this[i]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: se,
      sort: ie.sort,
      splice: ie.splice,
    }),
      (pe.extend = pe.fn.extend = function (e) {
        var t,
          i,
          n,
          r,
          a,
          s,
          o = e || {},
          l = 1,
          c = arguments.length,
          u = !1;
        for ('boolean' == typeof o && ((u = o), (o = arguments[l] || {}), l++), 'object' == typeof o || pe.isFunction(o) || (o = {}), l === c && ((o = this), l--); l < c; l++)
          if (null != (a = arguments[l]))
            for (r in a)
              (t = o[r]),
                o !== (n = a[r]) &&
                  (u && n && (pe.isPlainObject(n) || (i = pe.isArray(n)))
                    ? (i ? ((i = !1), (s = t && pe.isArray(t) ? t : [])) : (s = t && pe.isPlainObject(t) ? t : {}), (o[r] = pe.extend(u, s, n)))
                    : n !== undefined && (o[r] = n));
        return o;
      }),
      pe.extend({
        expando: 'jQuery' + (he + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return 'function' === pe.type(e);
        },
        isArray:
          Array.isArray ||
          function (e) {
            return 'array' === pe.type(e);
          },
        isWindow: function (e) {
          return null != e && e == e.window;
        },
        isNumeric: function (e) {
          var t = e && e.toString();
          return !pe.isArray(e) && 0 <= t - parseFloat(t) + 1;
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        isPlainObject: function (e) {
          var t;
          if (!e || 'object' !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
          try {
            if (e.constructor && !ue.call(e, 'constructor') && !ue.call(e.constructor.prototype, 'isPrototypeOf')) return !1;
          } catch (i) {
            return !1;
          }
          if (!de.ownFirst) for (t in e) return ue.call(e, t);
          for (t in e);
          return t === undefined || ue.call(e, t);
        },
        type: function (e) {
          return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? le[ce.call(e)] || 'object' : typeof e;
        },
        globalEval: function (e) {
          e &&
            pe.trim(e) &&
            (
              T.execScript ||
              function (e) {
                T.eval.call(T, e);
              }
            )(e);
        },
        camelCase: function (e) {
          return e.replace(me, 'ms-').replace(ge, ve);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t) {
          var i,
            n = 0;
          if (o(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
          else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
          return e;
        },
        trim: function (e) {
          return null == e ? '' : (e + '').replace(fe, '');
        },
        makeArray: function (e, t) {
          var i = t || [];
          return null != e && (o(Object(e)) ? pe.merge(i, 'string' == typeof e ? [e] : e) : se.call(i, e)), i;
        },
        inArray: function (e, t, i) {
          var n;
          if (t) {
            if (oe) return oe.call(t, e, i);
            for (n = t.length, i = i ? (i < 0 ? Math.max(0, n + i) : i) : 0; i < n; i++) if (i in t && t[i] === e) return i;
          }
          return -1;
        },
        merge: function (e, t) {
          for (var i = +t.length, n = 0, r = e.length; n < i; ) e[r++] = t[n++];
          if (i != i) for (; t[n] !== undefined; ) e[r++] = t[n++];
          return (e.length = r), e;
        },
        grep: function (e, t, i) {
          for (var n = [], r = 0, a = e.length, s = !i; r < a; r++) !t(e[r], r) !== s && n.push(e[r]);
          return n;
        },
        map: function (e, t, i) {
          var n,
            r,
            a = 0,
            s = [];
          if (o(e)) for (n = e.length; a < n; a++) null != (r = t(e[a], a, i)) && s.push(r);
          else for (a in e) null != (r = t(e[a], a, i)) && s.push(r);
          return ae.apply([], s);
        },
        guid: 1,
        proxy: function (e, t) {
          var i, n, r;
          return (
            'string' == typeof t && ((r = e[t]), (t = e), (e = r)),
            pe.isFunction(e)
              ? ((i = re.call(arguments, 2)),
                ((n = function () {
                  return e.apply(t || this, i.concat(re.call(arguments)));
                }).guid = e.guid = e.guid || pe.guid++),
                n)
              : undefined
          );
        },
        now: function () {
          return +new Date();
        },
        support: de,
      }),
      'function' == typeof Symbol && (pe.fn[Symbol.iterator] = ie[Symbol.iterator]),
      pe.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
        le['[object ' + t + ']'] = t.toLowerCase();
      });
    var ye = (function (i) {
      function _(e, t, i, n) {
        var r,
          a,
          s,
          o,
          l,
          c,
          u,
          d,
          h = t && t.ownerDocument,
          p = t ? t.nodeType : 9;
        if (((i = i || []), 'string' != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))) return i;
        if (!n && ((t ? t.ownerDocument || t : j) !== L && A(t), (t = t || L), R)) {
          if (11 !== p && (c = ve.exec(e)))
            if ((r = c[1])) {
              if (9 === p) {
                if (!(s = t.getElementById(r))) return i;
                if (s.id === r) return i.push(s), i;
              } else if (h && (s = h.getElementById(r)) && F(t, s) && s.id === r) return i.push(s), i;
            } else {
              if (c[2]) return J.apply(i, t.getElementsByTagName(e)), i;
              if ((r = c[3]) && v.getElementsByClassName && t.getElementsByClassName) return J.apply(i, t.getElementsByClassName(r)), i;
            }
          if (v.qsa && !X[e + ' '] && (!I || !I.test(e))) {
            if (1 !== p) (h = t), (d = e);
            else if ('object' !== t.nodeName.toLowerCase()) {
              for (
                (o = t.getAttribute('id')) ? (o = o.replace(be, '\\$&')) : t.setAttribute('id', (o = H)), a = (u = S(e)).length, l = he.test(o) ? '#' + o : "[id='" + o + "']";
                a--;

              )
                u[a] = l + ' ' + g(u[a]);
              (d = u.join(',')), (h = (ye.test(e) && m(t.parentNode)) || t);
            }
            if (d)
              try {
                return J.apply(i, h.querySelectorAll(d)), i;
              } catch (f) {
              } finally {
                o === H && t.removeAttribute('id');
              }
          }
        }
        return E(e.replace(oe, '$1'), t, i, n);
      }
      function e() {
        function i(e, t) {
          return n.push(e + ' ') > x.cacheLength && delete i[n.shift()], (i[e + ' '] = t);
        }
        var n = [];
        return i;
      }
      function l(e) {
        return (e[H] = !0), e;
      }
      function r(e) {
        var t = L.createElement('div');
        try {
          return !!e(t);
        } catch (i) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function t(e, t) {
        for (var i = e.split('|'), n = i.length; n--; ) x.attrHandle[i[n]] = t;
      }
      function c(e, t) {
        var i = t && e,
          n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
        if (n) return n;
        if (i) for (; (i = i.nextSibling); ) if (i === t) return -1;
        return e ? 1 : -1;
      }
      function n(t) {
        return function (e) {
          return 'input' === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function a(i) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ('input' === t || 'button' === t) && e.type === i;
        };
      }
      function s(s) {
        return l(function (a) {
          return (
            (a = +a),
            l(function (e, t) {
              for (var i, n = s([], e.length, a), r = n.length; r--; ) e[(i = n[r])] && (e[i] = !(t[i] = e[i]));
            })
          );
        });
      }
      function m(e) {
        return e && 'undefined' != typeof e.getElementsByTagName && e;
      }
      function o() {}
      function g(e) {
        for (var t = 0, i = e.length, n = ''; t < i; t++) n += e[t].value;
        return n;
      }
      function d(o, e, t) {
        var l = e.dir,
          c = t && 'parentNode' === l,
          u = B++;
        return e.first
          ? function (e, t, i) {
              for (; (e = e[l]); ) if (1 === e.nodeType || c) return o(e, t, i);
            }
          : function (e, t, i) {
              var n,
                r,
                a,
                s = [$, u];
              if (i) {
                for (; (e = e[l]); ) if ((1 === e.nodeType || c) && o(e, t, i)) return !0;
              } else
                for (; (e = e[l]); )
                  if (1 === e.nodeType || c) {
                    if ((n = (r = (a = e[H] || (e[H] = {}))[e.uniqueID] || (a[e.uniqueID] = {}))[l]) && n[0] === $ && n[1] === u) return (s[2] = n[2]);
                    if (((r[l] = s)[2] = o(e, t, i))) return !0;
                  }
            };
      }
      function h(r) {
        return 1 < r.length
          ? function (e, t, i) {
              for (var n = r.length; n--; ) if (!r[n](e, t, i)) return !1;
              return !0;
            }
          : r[0];
      }
      function y(e, t, i) {
        for (var n = 0, r = t.length; n < r; n++) _(e, t[n], i);
        return i;
      }
      function w(e, t, i, n, r) {
        for (var a, s = [], o = 0, l = e.length, c = null != t; o < l; o++) (a = e[o]) && ((i && !i(a, n, r)) || (s.push(a), c && t.push(o)));
        return s;
      }
      function b(p, f, m, g, v, e) {
        return (
          g && !g[H] && (g = b(g)),
          v && !v[H] && (v = b(v, e)),
          l(function (e, t, i, n) {
            var r,
              a,
              s,
              o = [],
              l = [],
              c = t.length,
              u = e || y(f || '*', i.nodeType ? [i] : i, []),
              d = !p || (!e && f) ? u : w(u, o, p, i, n),
              h = m ? (v || (e ? p : c || g) ? [] : t) : d;
            if ((m && m(d, h, i, n), g)) for (r = w(h, l), g(r, [], i, n), a = r.length; a--; ) (s = r[a]) && (h[l[a]] = !(d[l[a]] = s));
            if (e) {
              if (v || p) {
                if (v) {
                  for (r = [], a = h.length; a--; ) (s = h[a]) && r.push((d[a] = s));
                  v(null, (h = []), r, n);
                }
                for (a = h.length; a--; ) (s = h[a]) && -1 < (r = v ? ee(e, s) : o[a]) && (e[r] = !(t[r] = s));
              }
            } else (h = w(h === t ? h.splice(c, h.length) : h)), v ? v(null, t, h, n) : J.apply(t, h);
          })
        );
      }
      function p(e) {
        for (
          var r,
            t,
            i,
            n = e.length,
            a = x.relative[e[0].type],
            s = a || x.relative[' '],
            o = a ? 1 : 0,
            l = d(
              function (e) {
                return e === r;
              },
              s,
              !0
            ),
            c = d(
              function (e) {
                return -1 < ee(r, e);
              },
              s,
              !0
            ),
            u = [
              function (e, t, i) {
                var n = (!a && (i || t !== D)) || ((r = t).nodeType ? l(e, t, i) : c(e, t, i));
                return (r = null), n;
              },
            ];
          o < n;
          o++
        )
          if ((t = x.relative[e[o].type])) u = [d(h(u), t)];
          else {
            if ((t = x.filter[e[o].type].apply(null, e[o].matches))[H]) {
              for (i = ++o; i < n && !x.relative[e[i].type]; i++);
              return b(
                1 < o && h(u),
                1 < o && g(e.slice(0, o - 1).concat({ value: ' ' === e[o - 2].type ? '*' : '' })).replace(oe, '$1'),
                t,
                o < i && p(e.slice(o, i)),
                i < n && p((e = e.slice(i))),
                i < n && g(e)
              );
            }
            u.push(t);
          }
        return h(u);
      }
      function u(g, v) {
        var y = 0 < v.length,
          b = 0 < g.length,
          e = function (e, t, i, n, r) {
            var a,
              s,
              o,
              l = 0,
              c = '0',
              u = e && [],
              d = [],
              h = D,
              p = e || (b && x.find.TAG('*', r)),
              f = ($ += null == h ? 1 : Math.random() || 0.1),
              m = p.length;
            for (r && (D = t === L || t || r); c !== m && null != (a = p[c]); c++) {
              if (b && a) {
                for (s = 0, t || a.ownerDocument === L || (A(a), (i = !R)); (o = g[s++]); )
                  if (o(a, t || L, i)) {
                    n.push(a);
                    break;
                  }
                r && ($ = f);
              }
              y && ((a = !o && a) && l--, e && u.push(a));
            }
            if (((l += c), y && c !== l)) {
              for (s = 0; (o = v[s++]); ) o(u, d, t, i);
              if (e) {
                if (0 < l) for (; c--; ) u[c] || d[c] || (d[c] = K.call(n));
                d = w(d);
              }
              J.apply(n, d), r && !e && 0 < d.length && 1 < l + v.length && _.uniqueSort(n);
            }
            return r && (($ = f), (D = h)), u;
          };
        return y ? l(e) : e;
      }
      var f,
        v,
        x,
        T,
        k,
        S,
        C,
        E,
        D,
        M,
        P,
        A,
        L,
        O,
        R,
        I,
        N,
        z,
        F,
        H = 'sizzle' + 1 * new Date(),
        j = i.document,
        $ = 0,
        B = 0,
        q = e(),
        Y = e(),
        X = e(),
        W = function (e, t) {
          return e === t && (P = !0), 0;
        },
        V = 1 << 31,
        G = {}.hasOwnProperty,
        U = [],
        K = U.pop,
        Q = U.push,
        J = U.push,
        Z = U.slice,
        ee = function (e, t) {
          for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
          return -1;
        },
        te = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
        ie = '[\\x20\\t\\r\\n\\f]',
        ne = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
        re = '\\[' + ie + '*(' + ne + ')(?:' + ie + '*([*^$|!~]?=)' + ie + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + ne + '))|)' + ie + '*\\]',
        ae = ':(' + ne + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + re + ')*)|.*)\\)|)',
        se = new RegExp(ie + '+', 'g'),
        oe = new RegExp('^' + ie + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ie + '+$', 'g'),
        le = new RegExp('^' + ie + '*,' + ie + '*'),
        ce = new RegExp('^' + ie + '*([>+~]|' + ie + ')' + ie + '*'),
        ue = new RegExp('=' + ie + '*([^\\]\'"]*?)' + ie + '*\\]', 'g'),
        de = new RegExp(ae),
        he = new RegExp('^' + ne + '$'),
        pe = {
          ID: new RegExp('^#(' + ne + ')'),
          CLASS: new RegExp('^\\.(' + ne + ')'),
          TAG: new RegExp('^(' + ne + '|[*])'),
          ATTR: new RegExp('^' + re),
          PSEUDO: new RegExp('^' + ae),
          CHILD: new RegExp(
            '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + ie + '*(even|odd|(([+-]|)(\\d*)n|)' + ie + '*(?:([+-]|)' + ie + '*(\\d+)|))' + ie + '*\\)|)',
            'i'
          ),
          bool: new RegExp('^(?:' + te + ')$', 'i'),
          needsContext: new RegExp('^' + ie + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + ie + '*((?:-\\d)?\\d*)' + ie + '*\\)|)(?=[^-]|$)', 'i'),
        },
        fe = /^(?:input|select|textarea|button)$/i,
        me = /^h\d$/i,
        ge = /^[^{]+\{\s*\[native \w/,
        ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ye = /[+~]/,
        be = /'|\\/g,
        _e = new RegExp('\\\\([\\da-f]{1,6}' + ie + '?|(' + ie + ')|.)', 'ig'),
        we = function (e, t, i) {
          var n = '0x' + t - 65536;
          return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
        },
        xe = function () {
          A();
        };
      try {
        J.apply((U = Z.call(j.childNodes)), j.childNodes), U[j.childNodes.length].nodeType;
      } catch (Te) {
        J = {
          apply: U.length
            ? function (e, t) {
                Q.apply(e, Z.call(t));
              }
            : function (e, t) {
                for (var i = e.length, n = 0; (e[i++] = t[n++]); );
                e.length = i - 1;
              },
        };
      }
      for (f in ((v = _.support = {}),
      (k = _.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && 'HTML' !== t.nodeName;
      }),
      (A = _.setDocument = function (e) {
        var t,
          i,
          n = e ? e.ownerDocument || e : j;
        return (
          n !== L &&
            9 === n.nodeType &&
            n.documentElement &&
            ((O = (L = n).documentElement),
            (R = !k(L)),
            (i = L.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener('unload', xe, !1) : i.attachEvent && i.attachEvent('onunload', xe)),
            (v.attributes = r(function (e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (v.getElementsByTagName = r(function (e) {
              return e.appendChild(L.createComment('')), !e.getElementsByTagName('*').length;
            })),
            (v.getElementsByClassName = ge.test(L.getElementsByClassName)),
            (v.getById = r(function (e) {
              return (O.appendChild(e).id = H), !L.getElementsByName || !L.getElementsByName(H).length;
            })),
            v.getById
              ? ((x.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && R) {
                    var i = t.getElementById(e);
                    return i ? [i] : [];
                  }
                }),
                (x.filter.ID = function (e) {
                  var t = e.replace(_e, we);
                  return function (e) {
                    return e.getAttribute('id') === t;
                  };
                }))
              : (delete x.find.ID,
                (x.filter.ID = function (e) {
                  var i = e.replace(_e, we);
                  return function (e) {
                    var t = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id');
                    return t && t.value === i;
                  };
                })),
            (x.find.TAG = v.getElementsByTagName
              ? function (e, t) {
                  return 'undefined' != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : v.qsa ? t.querySelectorAll(e) : void 0;
                }
              : function (e, t) {
                  var i,
                    n = [],
                    r = 0,
                    a = t.getElementsByTagName(e);
                  if ('*' === e) {
                    for (; (i = a[r++]); ) 1 === i.nodeType && n.push(i);
                    return n;
                  }
                  return a;
                }),
            (x.find.CLASS =
              v.getElementsByClassName &&
              function (e, t) {
                if ('undefined' != typeof t.getElementsByClassName && R) return t.getElementsByClassName(e);
              }),
            (N = []),
            (I = []),
            (v.qsa = ge.test(L.querySelectorAll)) &&
              (r(function (e) {
                (O.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length && I.push('[*^$]=' + ie + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length || I.push('\\[' + ie + '*(?:value|' + te + ')'),
                  e.querySelectorAll('[id~=' + H + '-]').length || I.push('~='),
                  e.querySelectorAll(':checked').length || I.push(':checked'),
                  e.querySelectorAll('a#' + H + '+*').length || I.push('.#.+[+~]');
              }),
              r(function (e) {
                var t = L.createElement('input');
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length && I.push('name' + ie + '*[*^$|!~]?='),
                  e.querySelectorAll(':enabled').length || I.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  I.push(',.*:');
              })),
            (v.matchesSelector = ge.test((z = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector))) &&
              r(function (e) {
                (v.disconnectedMatch = z.call(e, 'div')), z.call(e, "[s!='']:x"), N.push('!=', ae);
              }),
            (I = I.length && new RegExp(I.join('|'))),
            (N = N.length && new RegExp(N.join('|'))),
            (t = ge.test(O.compareDocumentPosition)),
            (F =
              t || ge.test(O.contains)
                ? function (e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                      n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (W = t
              ? function (e, t) {
                  if (e === t) return (P = !0), 0;
                  var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    i ||
                    (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!v.sortDetached && t.compareDocumentPosition(e) === i)
                      ? e === L || (e.ownerDocument === j && F(j, e))
                        ? -1
                        : t === L || (t.ownerDocument === j && F(j, t))
                        ? 1
                        : M
                        ? ee(M, e) - ee(M, t)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (P = !0), 0;
                  var i,
                    n = 0,
                    r = e.parentNode,
                    a = t.parentNode,
                    s = [e],
                    o = [t];
                  if (!r || !a) return e === L ? -1 : t === L ? 1 : r ? -1 : a ? 1 : M ? ee(M, e) - ee(M, t) : 0;
                  if (r === a) return c(e, t);
                  for (i = e; (i = i.parentNode); ) s.unshift(i);
                  for (i = t; (i = i.parentNode); ) o.unshift(i);
                  for (; s[n] === o[n]; ) n++;
                  return n ? c(s[n], o[n]) : s[n] === j ? -1 : o[n] === j ? 1 : 0;
                })),
          L
        );
      }),
      (_.matches = function (e, t) {
        return _(e, null, null, t);
      }),
      (_.matchesSelector = function (e, t) {
        if (((e.ownerDocument || e) !== L && A(e), (t = t.replace(ue, "='$1']")), v.matchesSelector && R && !X[t + ' '] && (!N || !N.test(t)) && (!I || !I.test(t))))
          try {
            var i = z.call(e, t);
            if (i || v.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
          } catch (Te) {}
        return 0 < _(t, L, null, [e]).length;
      }),
      (_.contains = function (e, t) {
        return (e.ownerDocument || e) !== L && A(e), F(e, t);
      }),
      (_.attr = function (e, t) {
        (e.ownerDocument || e) !== L && A(e);
        var i = x.attrHandle[t.toLowerCase()],
          n = i && G.call(x.attrHandle, t.toLowerCase()) ? i(e, t, !R) : undefined;
        return n !== undefined ? n : v.attributes || !R ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
      }),
      (_.error = function (e) {
        throw new Error('Syntax error, unrecognized expression: ' + e);
      }),
      (_.uniqueSort = function (e) {
        var t,
          i = [],
          n = 0,
          r = 0;
        if (((P = !v.detectDuplicates), (M = !v.sortStable && e.slice(0)), e.sort(W), P)) {
          for (; (t = e[r++]); ) t === e[r] && (n = i.push(r));
          for (; n--; ) e.splice(i[n], 1);
        }
        return (M = null), e;
      }),
      (T = _.getText = function (e) {
        var t,
          i = '',
          n = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ('string' == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) i += T(e);
          } else if (3 === r || 4 === r) return e.nodeValue;
        } else for (; (t = e[n++]); ) i += T(t);
        return i;
      }),
      ((x = _.selectors = {
        cacheLength: 50,
        createPseudo: l,
        match: pe,
        attrHandle: {},
        find: {},
        relative: { '>': { dir: 'parentNode', first: !0 }, ' ': { dir: 'parentNode' }, '+': { dir: 'previousSibling', first: !0 }, '~': { dir: 'previousSibling' } },
        preFilter: {
          ATTR: function (e) {
            return (e[1] = e[1].replace(_e, we)), (e[3] = (e[3] || e[4] || e[5] || '').replace(_e, we)), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || _.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))), (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && _.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              i = !e[6] && e[2];
            return pe.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : i && de.test(i) && (t = S(i, !0)) && (t = i.indexOf(')', i.length - t) - i.length) && ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(_e, we).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = q[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + ie + ')' + e + '(' + ie + '|$)')) &&
                q(e, function (e) {
                  return t.test(('string' == typeof e.className && e.className) || ('undefined' != typeof e.getAttribute && e.getAttribute('class')) || '');
                }))
            );
          },
          ATTR: function (i, n, r) {
            return function (e) {
              var t = _.attr(e, i);
              return null == t
                ? '!=' === n
                : !n ||
                    ((t += ''),
                    '=' === n
                      ? t === r
                      : '!=' === n
                      ? t !== r
                      : '^=' === n
                      ? r && 0 === t.indexOf(r)
                      : '*=' === n
                      ? r && -1 < t.indexOf(r)
                      : '$=' === n
                      ? r && t.slice(-r.length) === r
                      : '~=' === n
                      ? -1 < (' ' + t.replace(se, ' ') + ' ').indexOf(r)
                      : '|=' === n && (t === r || t.slice(0, r.length + 1) === r + '-'));
            };
          },
          CHILD: function (f, e, t, m, g) {
            var v = 'nth' !== f.slice(0, 3),
              y = 'last' !== f.slice(-4),
              b = 'of-type' === e;
            return 1 === m && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, i) {
                  var n,
                    r,
                    a,
                    s,
                    o,
                    l,
                    c = v !== y ? 'nextSibling' : 'previousSibling',
                    u = e.parentNode,
                    d = b && e.nodeName.toLowerCase(),
                    h = !i && !b,
                    p = !1;
                  if (u) {
                    if (v) {
                      for (; c; ) {
                        for (s = e; (s = s[c]); ) if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                        l = c = 'only' === f && !l && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((l = [y ? u.firstChild : u.lastChild]), y && h)) {
                      for (
                        p = (o = (n = (r = (a = (s = u)[H] || (s[H] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === $ && n[1]) && n[2], s = o && u.childNodes[o];
                        (s = (++o && s && s[c]) || (p = o = 0) || l.pop());

                      )
                        if (1 === s.nodeType && ++p && s === e) {
                          r[f] = [$, o, p];
                          break;
                        }
                    } else if ((h && (p = o = (n = (r = (a = (s = e)[H] || (s[H] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === $ && n[1]), !1 === p))
                      for (
                        ;
                        (s = (++o && s && s[c]) || (p = o = 0) || l.pop()) &&
                        ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) ||
                          !++p ||
                          (h && ((r = (a = s[H] || (s[H] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] = [$, p]), s !== e));

                      );
                    return (p -= g) === m || (p % m == 0 && 0 <= p / m);
                  }
                };
          },
          PSEUDO: function (e, a) {
            var t,
              s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || _.error('unsupported pseudo: ' + e);
            return s[H]
              ? s(a)
              : 1 < s.length
              ? ((t = [e, e, '', a]),
                x.setFilters.hasOwnProperty(e.toLowerCase())
                  ? l(function (e, t) {
                      for (var i, n = s(e, a), r = n.length; r--; ) e[(i = ee(e, n[r]))] = !(t[i] = n[r]);
                    })
                  : function (e) {
                      return s(e, 0, t);
                    })
              : s;
          },
        },
        pseudos: {
          not: l(function (e) {
            var n = [],
              r = [],
              o = C(e.replace(oe, '$1'));
            return o[H]
              ? l(function (e, t, i, n) {
                  for (var r, a = o(e, null, n, []), s = e.length; s--; ) (r = a[s]) && (e[s] = !(t[s] = r));
                })
              : function (e, t, i) {
                  return (n[0] = e), o(n, null, i, r), (n[0] = null), !r.pop();
                };
          }),
          has: l(function (t) {
            return function (e) {
              return 0 < _(t, e).length;
            };
          }),
          contains: l(function (t) {
            return (
              (t = t.replace(_e, we)),
              function (e) {
                return -1 < (e.textContent || e.innerText || T(e)).indexOf(t);
              }
            );
          }),
          lang: l(function (i) {
            return (
              he.test(i || '') || _.error('unsupported lang: ' + i),
              (i = i.replace(_e, we).toLowerCase()),
              function (e) {
                var t;
                do {
                  if ((t = R ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang'))) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + '-');
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = i.location && i.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === O;
          },
          focus: function (e) {
            return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: function (e) {
            return !1 === e.disabled;
          },
          disabled: function (e) {
            return !0 === e.disabled;
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !x.pseudos.empty(e);
          },
          header: function (e) {
            return me.test(e.nodeName);
          },
          input: function (e) {
            return fe.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && 'button' === e.type) || 'button' === t;
          },
          text: function (e) {
            var t;
            return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase());
          },
          first: s(function () {
            return [0];
          }),
          last: s(function (e, t) {
            return [t - 1];
          }),
          eq: s(function (e, t, i) {
            return [i < 0 ? i + t : i];
          }),
          even: s(function (e, t) {
            for (var i = 0; i < t; i += 2) e.push(i);
            return e;
          }),
          odd: s(function (e, t) {
            for (var i = 1; i < t; i += 2) e.push(i);
            return e;
          }),
          lt: s(function (e, t, i) {
            for (var n = i < 0 ? i + t : i; 0 <= --n; ) e.push(n);
            return e;
          }),
          gt: s(function (e, t, i) {
            for (var n = i < 0 ? i + t : i; ++n < t; ) e.push(n);
            return e;
          }),
        },
      }).pseudos.nth = x.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        x.pseudos[f] = n(f);
      for (f in { submit: !0, reset: !0 }) x.pseudos[f] = a(f);
      return (
        (o.prototype = x.filters = x.pseudos),
        (x.setFilters = new o()),
        (S = _.tokenize = function (e, t) {
          var i,
            n,
            r,
            a,
            s,
            o,
            l,
            c = Y[e + ' '];
          if (c) return t ? 0 : c.slice(0);
          for (s = e, o = [], l = x.preFilter; s; ) {
            for (a in ((i && !(n = le.exec(s))) || (n && (s = s.slice(n[0].length) || s), o.push((r = []))),
            (i = !1),
            (n = ce.exec(s)) && ((i = n.shift()), r.push({ value: i, type: n[0].replace(oe, ' ') }), (s = s.slice(i.length))),
            x.filter))
              !(n = pe[a].exec(s)) || (l[a] && !(n = l[a](n))) || ((i = n.shift()), r.push({ value: i, type: a, matches: n }), (s = s.slice(i.length)));
            if (!i) break;
          }
          return t ? s.length : s ? _.error(e) : Y(e, o).slice(0);
        }),
        (C = _.compile = function (e, t) {
          var i,
            n = [],
            r = [],
            a = X[e + ' '];
          if (!a) {
            for (t || (t = S(e)), i = t.length; i--; ) (a = p(t[i]))[H] ? n.push(a) : r.push(a);
            (a = X(e, u(r, n))).selector = e;
          }
          return a;
        }),
        (E = _.select = function (e, t, i, n) {
          var r,
            a,
            s,
            o,
            l,
            c = 'function' == typeof e && e,
            u = !n && S((e = c.selector || e));
          if (((i = i || []), 1 === u.length)) {
            if (2 < (a = u[0] = u[0].slice(0)).length && 'ID' === (s = a[0]).type && v.getById && 9 === t.nodeType && R && x.relative[a[1].type]) {
              if (!(t = (x.find.ID(s.matches[0].replace(_e, we), t) || [])[0])) return i;
              c && (t = t.parentNode), (e = e.slice(a.shift().value.length));
            }
            for (r = pe.needsContext.test(e) ? 0 : a.length; r-- && ((s = a[r]), !x.relative[(o = s.type)]); )
              if ((l = x.find[o]) && (n = l(s.matches[0].replace(_e, we), (ye.test(a[0].type) && m(t.parentNode)) || t))) {
                if ((a.splice(r, 1), !(e = n.length && g(a)))) return J.apply(i, n), i;
                break;
              }
          }
          return (c || C(e, u))(n, t, !R, i, !t || (ye.test(e) && m(t.parentNode)) || t), i;
        }),
        (v.sortStable = H.split('').sort(W).join('') === H),
        (v.detectDuplicates = !!P),
        A(),
        (v.sortDetached = r(function (e) {
          return 1 & e.compareDocumentPosition(L.createElement('div'));
        })),
        r(function (e) {
          return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
        }) ||
          t('type|href|height|width', function (e, t, i) {
            if (!i) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
          }),
        (v.attributes &&
          r(function (e) {
            return (e.innerHTML = '<input/>'), e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
          })) ||
          t('value', function (e, t, i) {
            if (!i && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
          }),
        r(function (e) {
          return null == e.getAttribute('disabled');
        }) ||
          t(te, function (e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
          }),
        _
      );
    })(T);
    (pe.find = ye),
      (pe.expr = ye.selectors),
      (pe.expr[':'] = pe.expr.pseudos),
      (pe.uniqueSort = pe.unique = ye.uniqueSort),
      (pe.text = ye.getText),
      (pe.isXMLDoc = ye.isXML),
      (pe.contains = ye.contains);
    var be = function (e, t, i) {
        for (var n = [], r = i !== undefined; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (r && pe(e).is(i)) break;
            n.push(e);
          }
        return n;
      },
      _e = function (e, t) {
        for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
        return i;
      },
      we = pe.expr.match.needsContext,
      xe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      Te = /^.[^:#\[\.,]*$/;
    (pe.filter = function (e, t, i) {
      var n = t[0];
      return (
        i && (e = ':not(' + e + ')'),
        1 === t.length && 1 === n.nodeType
          ? pe.find.matchesSelector(n, e)
            ? [n]
            : []
          : pe.find.matches(
              e,
              pe.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      pe.fn.extend({
        find: function (e) {
          var t,
            i = [],
            n = this,
            r = n.length;
          if ('string' != typeof e)
            return this.pushStack(
              pe(e).filter(function () {
                for (t = 0; t < r; t++) if (pe.contains(n[t], this)) return !0;
              })
            );
          for (t = 0; t < r; t++) pe.find(e, n[t], i);
          return ((i = this.pushStack(1 < r ? pe.unique(i) : i)).selector = this.selector ? this.selector + ' ' + e : e), i;
        },
        filter: function (e) {
          return this.pushStack(t(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(t(this, e || [], !0));
        },
        is: function (e) {
          return !!t(this, 'string' == typeof e && we.test(e) ? pe(e) : e || [], !1).length;
        },
      });
    var ke,
      Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((pe.fn.init = function (e, t, i) {
      var n, r;
      if (!e) return this;
      if (((i = i || ke), 'string' == typeof e)) {
        if (!(n = '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Se.exec(e)) || (!n[1] && t))
          return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
        if (n[1]) {
          if (((t = t instanceof pe ? t[0] : t), pe.merge(this, pe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), xe.test(n[1]) && pe.isPlainObject(t)))
            for (n in t) pe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this;
        }
        if ((r = ne.getElementById(n[2])) && r.parentNode) {
          if (r.id !== n[2]) return ke.find(e);
          (this.length = 1), (this[0] = r);
        }
        return (this.context = ne), (this.selector = e), this;
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : pe.isFunction(e)
        ? 'undefined' != typeof i.ready
          ? i.ready(e)
          : e(pe)
        : (e.selector !== undefined && ((this.selector = e.selector), (this.context = e.context)), pe.makeArray(e, this));
    }).prototype = pe.fn),
      (ke = pe(ne));
    var Ce = /^(?:parents|prev(?:Until|All))/,
      Ee = { children: !0, contents: !0, next: !0, prev: !0 };
    pe.fn.extend({
      has: function (e) {
        var t,
          i = pe(e, this),
          n = i.length;
        return this.filter(function () {
          for (t = 0; t < n; t++) if (pe.contains(this, i[t])) return !0;
        });
      },
      closest: function (e, t) {
        for (var i, n = 0, r = this.length, a = [], s = we.test(e) || 'string' != typeof e ? pe(e, t || this.context) : 0; n < r; n++)
          for (i = this[n]; i && i !== t; i = i.parentNode)
            if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && pe.find.matchesSelector(i, e))) {
              a.push(i);
              break;
            }
        return this.pushStack(1 < a.length ? pe.uniqueSort(a) : a);
      },
      index: function (e) {
        return e ? ('string' == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function (e, t) {
        return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))));
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      },
    }),
      pe.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return be(e, 'parentNode');
          },
          parentsUntil: function (e, t, i) {
            return be(e, 'parentNode', i);
          },
          next: function (e) {
            return i(e, 'nextSibling');
          },
          prev: function (e) {
            return i(e, 'previousSibling');
          },
          nextAll: function (e) {
            return be(e, 'nextSibling');
          },
          prevAll: function (e) {
            return be(e, 'previousSibling');
          },
          nextUntil: function (e, t, i) {
            return be(e, 'nextSibling', i);
          },
          prevUntil: function (e, t, i) {
            return be(e, 'previousSibling', i);
          },
          siblings: function (e) {
            return _e((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return _e(e.firstChild);
          },
          contents: function (e) {
            return pe.nodeName(e, 'iframe') ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes);
          },
        },
        function (n, r) {
          pe.fn[n] = function (e, t) {
            var i = pe.map(this, r, e);
            return (
              'Until' !== n.slice(-5) && (t = e),
              t && 'string' == typeof t && (i = pe.filter(t, i)),
              1 < this.length && (Ee[n] || (i = pe.uniqueSort(i)), Ce.test(n) && (i = i.reverse())),
              this.pushStack(i)
            );
          };
        }
      );
    var De,
      Me,
      Pe = /\S+/g;
    for (Me in ((pe.Callbacks = function (n) {
      n = 'string' == typeof n ? u(n) : pe.extend({}, n);
      var r,
        e,
        t,
        i,
        a = [],
        s = [],
        o = -1,
        l = function () {
          for (i = n.once, t = r = !0; s.length; o = -1) for (e = s.shift(); ++o < a.length; ) !1 === a[o].apply(e[0], e[1]) && n.stopOnFalse && ((o = a.length), (e = !1));
          n.memory || (e = !1), (r = !1), i && (a = e ? [] : '');
        },
        c = {
          add: function () {
            return (
              a &&
                (e && !r && ((o = a.length - 1), s.push(e)),
                (function i(e) {
                  pe.each(e, function (e, t) {
                    pe.isFunction(t) ? (n.unique && c.has(t)) || a.push(t) : t && t.length && 'string' !== pe.type(t) && i(t);
                  });
                })(arguments),
                e && !r && l()),
              this
            );
          },
          remove: function () {
            return (
              pe.each(arguments, function (e, t) {
                for (var i; -1 < (i = pe.inArray(t, a, i)); ) a.splice(i, 1), i <= o && o--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? -1 < pe.inArray(e, a) : 0 < a.length;
          },
          empty: function () {
            return a && (a = []), this;
          },
          disable: function () {
            return (i = s = []), (a = e = ''), this;
          },
          disabled: function () {
            return !a;
          },
          lock: function () {
            return (i = !0), e || c.disable(), this;
          },
          locked: function () {
            return !!i;
          },
          fireWith: function (e, t) {
            return i || ((t = [e, (t = t || []).slice ? t.slice() : t]), s.push(t), r || l()), this;
          },
          fire: function () {
            return c.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!t;
          },
        };
      return c;
    }),
    pe.extend({
      Deferred: function (e) {
        var a = [
            ['resolve', 'done', pe.Callbacks('once memory'), 'resolved'],
            ['reject', 'fail', pe.Callbacks('once memory'), 'rejected'],
            ['notify', 'progress', pe.Callbacks('memory')],
          ],
          r = 'pending',
          s = {
            state: function () {
              return r;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            then: function () {
              var r = arguments;
              return pe
                .Deferred(function (n) {
                  pe.each(a, function (e, t) {
                    var i = pe.isFunction(r[e]) && r[e];
                    o[t[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && pe.isFunction(e.promise)
                        ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
                        : n[t[0] + 'With'](this === s ? n.promise() : this, i ? [e] : arguments);
                    });
                  }),
                    (r = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? pe.extend(e, s) : s;
            },
          },
          o = {};
        return (
          (s.pipe = s.then),
          pe.each(a, function (e, t) {
            var i = t[2],
              n = t[3];
            (s[t[1]] = i.add),
              n &&
                i.add(
                  function () {
                    r = n;
                  },
                  a[1 ^ e][2].disable,
                  a[2][2].lock
                ),
              (o[t[0]] = function () {
                return o[t[0] + 'With'](this === o ? s : this, arguments), this;
              }),
              (o[t[0] + 'With'] = i.fireWith);
          }),
          s.promise(o),
          e && e.call(o, o),
          o
        );
      },
      when: function (e) {
        var r,
          t,
          i,
          n = 0,
          a = re.call(arguments),
          s = a.length,
          o = 1 !== s || (e && pe.isFunction(e.promise)) ? s : 0,
          l = 1 === o ? e : pe.Deferred(),
          c = function (t, i, n) {
            return function (e) {
              (i[t] = this), (n[t] = 1 < arguments.length ? re.call(arguments) : e), n === r ? l.notifyWith(i, n) : --o || l.resolveWith(i, n);
            };
          };
        if (1 < s)
          for (r = new Array(s), t = new Array(s), i = new Array(s); n < s; n++)
            a[n] && pe.isFunction(a[n].promise) ? a[n].promise().progress(c(n, t, r)).done(c(n, i, a)).fail(l.reject) : --o;
        return o || l.resolveWith(i, a), l.promise();
      },
    }),
    (pe.fn.ready = function (e) {
      return pe.ready.promise().done(e), this;
    }),
    pe.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? pe.readyWait++ : pe.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? --pe.readyWait : pe.isReady) ||
          ((pe.isReady = !0) !== e && 0 < --pe.readyWait) ||
          (De.resolveWith(ne, [pe]), pe.fn.triggerHandler && (pe(ne).triggerHandler('ready'), pe(ne).off('ready')));
      },
    }),
    (pe.ready.promise = function (t) {
      if (!De)
        if (((De = pe.Deferred()), 'complete' === ne.readyState || ('loading' !== ne.readyState && !ne.documentElement.doScroll))) T.setTimeout(pe.ready);
        else if (ne.addEventListener) ne.addEventListener('DOMContentLoaded', a), T.addEventListener('load', a);
        else {
          ne.attachEvent('onreadystatechange', a), T.attachEvent('onload', a);
          var i = !1;
          try {
            i = null == T.frameElement && ne.documentElement;
          } catch (n) {}
          i &&
            i.doScroll &&
            (function e() {
              if (!pe.isReady) {
                try {
                  i.doScroll('left');
                } catch (n) {
                  return T.setTimeout(e, 50);
                }
                r(), pe.ready();
              }
            })();
        }
      return De.promise(t);
    }),
    pe.ready.promise(),
    pe(de)))
      break;
    (de.ownFirst = '0' === Me),
      (de.inlineBlockNeedsLayout = !1),
      pe(function () {
        var e, t, i, n;
        (i = ne.getElementsByTagName('body')[0]) &&
          i.style &&
          ((t = ne.createElement('div')),
          ((n = ne.createElement('div')).style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
          i.appendChild(n).appendChild(t),
          'undefined' != typeof t.style.zoom &&
            ((t.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1'), (de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth), e && (i.style.zoom = 1)),
          i.removeChild(n));
      }),
      (function () {
        var e = ne.createElement('div');
        de.deleteExpando = !0;
        try {
          delete e.test;
        } catch (t) {
          de.deleteExpando = !1;
        }
        e = null;
      })();
    var Ae,
      Le = function (e) {
        var t = pe.noData[(e.nodeName + ' ').toLowerCase()],
          i = +e.nodeType || 1;
        return (1 === i || 9 === i) && (!t || (!0 !== t && e.getAttribute('classid') === t));
      },
      Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Re = /([A-Z])/g;
    pe.extend({
      cache: {},
      noData: { 'applet ': !0, 'embed ': !0, 'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' },
      hasData: function (e) {
        return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !c(e);
      },
      data: function (e, t, i) {
        return n(e, t, i);
      },
      removeData: function (e, t) {
        return s(e, t);
      },
      _data: function (e, t, i) {
        return n(e, t, i, !0);
      },
      _removeData: function (e, t) {
        return s(e, t, !0);
      },
    }),
      pe.fn.extend({
        data: function (e, t) {
          var i,
            n,
            r,
            a = this[0],
            s = a && a.attributes;
          if (e === undefined) {
            if (this.length && ((r = pe.data(a)), 1 === a.nodeType && !pe._data(a, 'parsedAttrs'))) {
              for (i = s.length; i--; ) s[i] && 0 === (n = s[i].name).indexOf('data-') && l(a, (n = pe.camelCase(n.slice(5))), r[n]);
              pe._data(a, 'parsedAttrs', !0);
            }
            return r;
          }
          return 'object' == typeof e
            ? this.each(function () {
                pe.data(this, e);
              })
            : 1 < arguments.length
            ? this.each(function () {
                pe.data(this, e, t);
              })
            : a
            ? l(a, e, pe.data(a, e))
            : undefined;
        },
        removeData: function (e) {
          return this.each(function () {
            pe.removeData(this, e);
          });
        },
      }),
      pe.extend({
        queue: function (e, t, i) {
          var n;
          if (e) return (t = (t || 'fx') + 'queue'), (n = pe._data(e, t)), i && (!n || pe.isArray(i) ? (n = pe._data(e, t, pe.makeArray(i))) : n.push(i)), n || [];
        },
        dequeue: function (e, t) {
          t = t || 'fx';
          var i = pe.queue(e, t),
            n = i.length,
            r = i.shift(),
            a = pe._queueHooks(e, t),
            s = function () {
              pe.dequeue(e, t);
            };
          'inprogress' === r && ((r = i.shift()), n--), r && ('fx' === t && i.unshift('inprogress'), delete a.stop, r.call(e, s, a)), !n && a && a.empty.fire();
        },
        _queueHooks: function (e, t) {
          var i = t + 'queueHooks';
          return (
            pe._data(e, i) ||
            pe._data(e, i, {
              empty: pe.Callbacks('once memory').add(function () {
                pe._removeData(e, t + 'queue'), pe._removeData(e, i);
              }),
            })
          );
        },
      }),
      pe.fn.extend({
        queue: function (t, i) {
          var e = 2;
          return (
            'string' != typeof t && ((i = t), (t = 'fx'), e--),
            arguments.length < e
              ? pe.queue(this[0], t)
              : i === undefined
              ? this
              : this.each(function () {
                  var e = pe.queue(this, t, i);
                  pe._queueHooks(this, t), 'fx' === t && 'inprogress' !== e[0] && pe.dequeue(this, t);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            pe.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || 'fx', []);
        },
        promise: function (e, t) {
          var i,
            n = 1,
            r = pe.Deferred(),
            a = this,
            s = this.length,
            o = function () {
              --n || r.resolveWith(a, [a]);
            };
          for ('string' != typeof e && ((t = e), (e = undefined)), e = e || 'fx'; s--; ) (i = pe._data(a[s], e + 'queueHooks')) && i.empty && (n++, i.empty.add(o));
          return o(), r.promise(t);
        },
      }),
      (de.shrinkWrapBlocks = function () {
        return null != Ae
          ? Ae
          : ((Ae = !1),
            (t = ne.getElementsByTagName('body')[0]) && t.style
              ? ((e = ne.createElement('div')),
                ((i = ne.createElement('div')).style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
                t.appendChild(i).appendChild(e),
                'undefined' != typeof e.style.zoom &&
                  ((e.style.cssText =
                    '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1'),
                  (e.appendChild(ne.createElement('div')).style.width = '5px'),
                  (Ae = 3 !== e.offsetWidth)),
                t.removeChild(i),
                Ae)
              : void 0);
        var e, t, i;
      });
    var Ie,
      Ne,
      ze,
      Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      He = new RegExp('^(?:([+-])=|)(' + Fe + ')([a-z%]*)$', 'i'),
      je = ['Top', 'Right', 'Bottom', 'Left'],
      $e = function (e, t) {
        return (e = t || e), 'none' === pe.css(e, 'display') || !pe.contains(e.ownerDocument, e);
      },
      Be = function (e, t, i, n, r, a, s) {
        var o = 0,
          l = e.length,
          c = null == i;
        if ('object' === pe.type(i)) for (o in ((r = !0), i)) Be(e, t, o, i[o], !0, a, s);
        else if (
          n !== undefined &&
          ((r = !0),
          pe.isFunction(n) || (s = !0),
          c &&
            (s
              ? (t.call(e, n), (t = null))
              : ((c = t),
                (t = function (e, t, i) {
                  return c.call(pe(e), i);
                }))),
          t)
        )
          for (; o < l; o++) t(e[o], i, s ? n : n.call(e[o], o, t(e[o], i)));
        return r ? e : c ? t.call(e) : l ? t(e[0], i) : a;
      },
      qe = /^(?:checkbox|radio)$/i,
      Ye = /<([\w:-]+)/,
      Xe = /^$|\/(?:java|ecma)script/i,
      We = /^\s+/,
      Ve =
        'abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video';
    (Ie = ne.createElement('div')),
      (Ne = ne.createDocumentFragment()),
      (ze = ne.createElement('input')),
      (Ie.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (de.leadingWhitespace = 3 === Ie.firstChild.nodeType),
      (de.tbody = !Ie.getElementsByTagName('tbody').length),
      (de.htmlSerialize = !!Ie.getElementsByTagName('link').length),
      (de.html5Clone = '<:nav></:nav>' !== ne.createElement('nav').cloneNode(!0).outerHTML),
      (ze.type = 'checkbox'),
      (ze.checked = !0),
      Ne.appendChild(ze),
      (de.appendChecked = ze.checked),
      (Ie.innerHTML = '<textarea>x</textarea>'),
      (de.noCloneChecked = !!Ie.cloneNode(!0).lastChild.defaultValue),
      Ne.appendChild(Ie),
      (ze = ne.createElement('input')).setAttribute('type', 'radio'),
      ze.setAttribute('checked', 'checked'),
      ze.setAttribute('name', 't'),
      Ie.appendChild(ze),
      (de.checkClone = Ie.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (de.noCloneEvent = !!Ie.addEventListener),
      (Ie[pe.expando] = 1),
      (de.attributes = !Ie.getAttribute(pe.expando));
    var Ge = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      legend: [1, '<fieldset>', '</fieldset>'],
      area: [1, '<map>', '</map>'],
      param: [1, '<object>', '</object>'],
      thead: [1, '<table>', '</table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: de.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>'],
    };
    (Ge.optgroup = Ge.option), (Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead), (Ge.th = Ge.td);
    var Ue = /<|&#?\w+;/,
      Ke = /<tbody/i;
    !(function () {
      var e,
        t,
        i = ne.createElement('div');
      for (e in { submit: !0, change: !0, focusin: !0 }) (t = 'on' + e), (de[e] = t in T) || (i.setAttribute(t, 't'), (de[e] = !1 === i.attributes[t].expando));
      i = null;
    })();
    var Qe = /^(?:input|select|textarea)$/i,
      Je = /^key/,
      Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      et = /^(?:focusinfocus|focusoutblur)$/,
      tt = /^([^.]*)(?:\.(.+)|)/;
    (pe.event = {
      global: {},
      add: function (e, t, i, n, r) {
        var a,
          s,
          o,
          l,
          c,
          u,
          d,
          h,
          p,
          f,
          m,
          g = pe._data(e);
        if (g) {
          for (
            i.handler && ((i = (l = i).handler), (r = l.selector)),
              i.guid || (i.guid = pe.guid++),
              (s = g.events) || (s = g.events = {}),
              (u = g.handle) ||
                ((u = g.handle = function (e) {
                  return void 0 === pe || (e && pe.event.triggered === e.type) ? undefined : pe.event.dispatch.apply(u.elem, arguments);
                }).elem = e),
              o = (t = (t || '').match(Pe) || ['']).length;
            o--;

          )
            (p = m = (a = tt.exec(t[o]) || [])[1]),
              (f = (a[2] || '').split('.').sort()),
              p &&
                ((c = pe.event.special[p] || {}),
                (p = (r ? c.delegateType : c.bindType) || p),
                (c = pe.event.special[p] || {}),
                (d = pe.extend(
                  { type: p, origType: m, data: n, handler: i, guid: i.guid, selector: r, needsContext: r && pe.expr.match.needsContext.test(r), namespace: f.join('.') },
                  l
                )),
                (h = s[p]) ||
                  (((h = s[p] = []).delegateCount = 0),
                  (c.setup && !1 !== c.setup.call(e, n, f, u)) || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent('on' + p, u))),
                c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)),
                r ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                (pe.event.global[p] = !0));
          e = null;
        }
      },
      remove: function (e, t, i, n, r) {
        var a,
          s,
          o,
          l,
          c,
          u,
          d,
          h,
          p,
          f,
          m,
          g = pe.hasData(e) && pe._data(e);
        if (g && (u = g.events)) {
          for (c = (t = (t || '').match(Pe) || ['']).length; c--; )
            if (((p = m = (o = tt.exec(t[c]) || [])[1]), (f = (o[2] || '').split('.').sort()), p)) {
              for (
                d = pe.event.special[p] || {},
                  h = u[(p = (n ? d.delegateType : d.bindType) || p)] || [],
                  o = o[2] && new RegExp('(^|\\.)' + f.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                  l = a = h.length;
                a--;

              )
                (s = h[a]),
                  (!r && m !== s.origType) ||
                    (i && i.guid !== s.guid) ||
                    (o && !o.test(s.namespace)) ||
                    (n && n !== s.selector && ('**' !== n || !s.selector)) ||
                    (h.splice(a, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(e, s));
              l && !h.length && ((d.teardown && !1 !== d.teardown.call(e, f, g.handle)) || pe.removeEvent(e, p, g.handle), delete u[p]);
            } else for (p in u) pe.event.remove(e, p + t[c], i, n, !0);
          pe.isEmptyObject(u) && (delete g.handle, pe._removeData(e, 'events'));
        }
      },
      trigger: function (e, t, i, n) {
        var r,
          a,
          s,
          o,
          l,
          c,
          u,
          d = [i || ne],
          h = ue.call(e, 'type') ? e.type : e,
          p = ue.call(e, 'namespace') ? e.namespace.split('.') : [];
        if (
          ((s = c = i = i || ne),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !et.test(h + pe.event.triggered) &&
            (-1 < h.indexOf('.') && ((h = (p = h.split('.')).shift()), p.sort()),
            (a = h.indexOf(':') < 0 && 'on' + h),
            ((e = e[pe.expando] ? e : new pe.Event(h, 'object' == typeof e && e)).isTrigger = n ? 2 : 3),
            (e.namespace = p.join('.')),
            (e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
            (e.result = undefined),
            e.target || (e.target = i),
            (t = null == t ? [e] : pe.makeArray(t, [e])),
            (l = pe.event.special[h] || {}),
            n || !l.trigger || !1 !== l.trigger.apply(i, t)))
        ) {
          if (!n && !l.noBubble && !pe.isWindow(i)) {
            for (o = l.delegateType || h, et.test(o + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), (c = s);
            c === (i.ownerDocument || ne) && d.push(c.defaultView || c.parentWindow || T);
          }
          for (u = 0; (s = d[u++]) && !e.isPropagationStopped(); )
            (e.type = 1 < u ? o : l.bindType || h),
              (r = (pe._data(s, 'events') || {})[e.type] && pe._data(s, 'handle')) && r.apply(s, t),
              (r = a && s[a]) && r.apply && Le(s) && ((e.result = r.apply(s, t)), !1 === e.result && e.preventDefault());
          if (((e.type = h), !n && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && Le(i) && a && i[h] && !pe.isWindow(i))) {
            (c = i[a]) && (i[a] = null), (pe.event.triggered = h);
            try {
              i[h]();
            } catch (f) {}
            (pe.event.triggered = undefined), c && (i[a] = c);
          }
          return e.result;
        }
      },
      dispatch: function (e) {
        e = pe.event.fix(e);
        var t,
          i,
          n,
          r,
          a,
          s = [],
          o = re.call(arguments),
          l = (pe._data(this, 'events') || {})[e.type] || [],
          c = pe.event.special[e.type] || {};
        if ((((o[0] = e).delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, e))) {
          for (s = pe.event.handlers.call(this, e, l), t = 0; (r = s[t++]) && !e.isPropagationStopped(); )
            for (e.currentTarget = r.elem, i = 0; (a = r.handlers[i++]) && !e.isImmediatePropagationStopped(); )
              (e.rnamespace && !e.rnamespace.test(a.namespace)) ||
                ((e.handleObj = a),
                (e.data = a.data),
                (n = ((pe.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, o)) !== undefined &&
                  !1 === (e.result = n) &&
                  (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result;
        }
      },
      handlers: function (e, t) {
        var i,
          n,
          r,
          a,
          s = [],
          o = t.delegateCount,
          l = e.target;
        if (o && l.nodeType && ('click' !== e.type || isNaN(e.button) || e.button < 1))
          for (; l != this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || 'click' !== e.type)) {
              for (n = [], i = 0; i < o; i++)
                n[(r = (a = t[i]).selector + ' ')] === undefined && (n[r] = a.needsContext ? -1 < pe(r, this).index(l) : pe.find(r, this, null, [l]).length), n[r] && n.push(a);
              n.length && s.push({ elem: l, handlers: n });
            }
        return o < t.length && s.push({ elem: this, handlers: t.slice(o) }), s;
      },
      fix: function (e) {
        if (e[pe.expando]) return e;
        var t,
          i,
          n,
          r = e.type,
          a = e,
          s = this.fixHooks[r];
        for (
          s || (this.fixHooks[r] = s = Ze.test(r) ? this.mouseHooks : Je.test(r) ? this.keyHooks : {}),
            n = s.props ? this.props.concat(s.props) : this.props,
            e = new pe.Event(a),
            t = n.length;
          t--;

        )
          e[(i = n[t])] = a[i];
        return e.target || (e.target = a.srcElement || ne), 3 === e.target.nodeType && (e.target = e.target.parentNode), (e.metaKey = !!e.metaKey), s.filter ? s.filter(e, a) : e;
      },
      props: 'altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
      fixHooks: {},
      keyHooks: {
        props: 'char charCode key keyCode'.split(' '),
        filter: function (e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
        },
      },
      mouseHooks: {
        props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
        filter: function (e, t) {
          var i,
            n,
            r,
            a = t.button,
            s = t.fromElement;
          return (
            null == e.pageX &&
              null != t.clientX &&
              ((r = (n = e.target.ownerDocument || ne).documentElement),
              (i = n.body),
              (e.pageX = t.clientX + ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) - ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
              (e.pageY = t.clientY + ((r && r.scrollTop) || (i && i.scrollTop) || 0) - ((r && r.clientTop) || (i && i.clientTop) || 0))),
            !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s),
            e.which || a === undefined || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
            e
          );
        },
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== f() && this.focus)
              try {
                return this.focus(), !1;
              } catch (e) {}
          },
          delegateType: 'focusin',
        },
        blur: {
          trigger: function () {
            if (this === f() && this.blur) return this.blur(), !1;
          },
          delegateType: 'focusout',
        },
        click: {
          trigger: function () {
            if (pe.nodeName(this, 'input') && 'checkbox' === this.type && this.click) return this.click(), !1;
          },
          _default: function (e) {
            return pe.nodeName(e.target, 'a');
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result);
          },
        },
      },
      simulate: function (e, t, i) {
        var n = pe.extend(new pe.Event(), i, { type: e, isSimulated: !0 });
        pe.event.trigger(n, null, t), n.isDefaultPrevented() && i.preventDefault();
      },
    }),
      (pe.removeEvent = ne.removeEventListener
        ? function (e, t, i) {
            e.removeEventListener && e.removeEventListener(t, i);
          }
        : function (e, t, i) {
            var n = 'on' + t;
            e.detachEvent && ('undefined' == typeof e[n] && (e[n] = null), e.detachEvent(n, i));
          }),
      (pe.Event = function (e, t) {
        if (!(this instanceof pe.Event)) return new pe.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e), (this.type = e.type), (this.isDefaultPrevented = e.defaultPrevented || (e.defaultPrevented === undefined && !1 === e.returnValue) ? h : p))
          : (this.type = e),
          t && pe.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || pe.now()),
          (this[pe.expando] = !0);
      }),
      (pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = h), e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = h), e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = h), e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
        },
      }),
      pe.each({ mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' }, function (e, a) {
        pe.event.special[e] = {
          delegateType: a,
          bindType: a,
          handle: function (e) {
            var t,
              i = this,
              n = e.relatedTarget,
              r = e.handleObj;
            return (n && (n === i || pe.contains(i, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = a)), t;
          },
        };
      }),
      de.submit ||
        (pe.event.special.submit = {
          setup: function () {
            if (pe.nodeName(this, 'form')) return !1;
            pe.event.add(this, 'click._submit keypress._submit', function (e) {
              var t = e.target,
                i = pe.nodeName(t, 'input') || pe.nodeName(t, 'button') ? pe.prop(t, 'form') : undefined;
              i &&
                !pe._data(i, 'submit') &&
                (pe.event.add(i, 'submit._submit', function (e) {
                  e._submitBubble = !0;
                }),
                pe._data(i, 'submit', !0));
            });
          },
          postDispatch: function (e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate('submit', this.parentNode, e));
          },
          teardown: function () {
            if (pe.nodeName(this, 'form')) return !1;
            pe.event.remove(this, '._submit');
          },
        }),
      de.change ||
        (pe.event.special.change = {
          setup: function () {
            if (Qe.test(this.nodeName))
              return (
                ('checkbox' !== this.type && 'radio' !== this.type) ||
                  (pe.event.add(this, 'propertychange._change', function (e) {
                    'checked' === e.originalEvent.propertyName && (this._justChanged = !0);
                  }),
                  pe.event.add(this, 'click._change', function (e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate('change', this, e);
                  })),
                !1
              );
            pe.event.add(this, 'beforeactivate._change', function (e) {
              var t = e.target;
              Qe.test(t.nodeName) &&
                !pe._data(t, 'change') &&
                (pe.event.add(t, 'change._change', function (e) {
                  !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate('change', this.parentNode, e);
                }),
                pe._data(t, 'change', !0));
            });
          },
          handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || ('radio' !== t.type && 'checkbox' !== t.type)) return e.handleObj.handler.apply(this, arguments);
          },
          teardown: function () {
            return pe.event.remove(this, '._change'), !Qe.test(this.nodeName);
          },
        }),
      de.focusin ||
        pe.each({ focus: 'focusin', blur: 'focusout' }, function (i, n) {
          var r = function (e) {
            pe.event.simulate(n, e.target, pe.event.fix(e));
          };
          pe.event.special[n] = {
            setup: function () {
              var e = this.ownerDocument || this,
                t = pe._data(e, n);
              t || e.addEventListener(i, r, !0), pe._data(e, n, (t || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this,
                t = pe._data(e, n) - 1;
              t ? pe._data(e, n, t) : (e.removeEventListener(i, r, !0), pe._removeData(e, n));
            },
          };
        }),
      pe.fn.extend({
        on: function (e, t, i, n) {
          return _(this, e, t, i, n);
        },
        one: function (e, t, i, n) {
          return _(this, e, t, i, n, 1);
        },
        off: function (e, t, i) {
          var n, r;
          if (e && e.preventDefault && e.handleObj)
            return (n = e.handleObj), pe(e.delegateTarget).off(n.namespace ? n.origType + '.' + n.namespace : n.origType, n.selector, n.handler), this;
          if ('object' == typeof e) {
            for (r in e) this.off(r, t, e[r]);
            return this;
          }
          return (
            (!1 !== t && 'function' != typeof t) || ((i = t), (t = undefined)),
            !1 === i && (i = p),
            this.each(function () {
              pe.event.remove(this, e, i, t);
            })
          );
        },
        trigger: function (e, t) {
          return this.each(function () {
            pe.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var i = this[0];
          if (i) return pe.event.trigger(e, t, i, !0);
        },
      });
    var it = / jQuery\d+="(?:null|\d+)"/g,
      nt = new RegExp('<(?:' + Ve + ')[\\s/>]', 'i'),
      rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      at = /<script|<style|<link/i,
      st = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ot = /^true\/(.*)/,
      lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ct = g(ne).appendChild(ne.createElement('div'));
    pe.extend({
      htmlPrefilter: function (e) {
        return e.replace(rt, '<$1></$2>');
      },
      clone: function (e, t, i) {
        var n,
          r,
          a,
          s,
          o,
          l = pe.contains(e.ownerDocument, e);
        if (
          (de.html5Clone || pe.isXMLDoc(e) || !nt.test('<' + e.nodeName + '>') ? (a = e.cloneNode(!0)) : ((ct.innerHTML = e.outerHTML), ct.removeChild((a = ct.firstChild))),
          !((de.noCloneEvent && de.noCloneChecked) || (1 !== e.nodeType && 11 !== e.nodeType) || pe.isXMLDoc(e)))
        )
          for (n = v(a), o = v(e), s = 0; null != (r = o[s]); ++s) n[s] && C(r, n[s]);
        if (t)
          if (i) for (o = o || v(e), n = n || v(a), s = 0; null != (r = o[s]); s++) S(r, n[s]);
          else S(e, a);
        return 0 < (n = v(a, 'script')).length && y(n, !l && v(e, 'script')), (n = o = r = null), a;
      },
      cleanData: function (e, t) {
        for (var i, n, r, a, s = 0, o = pe.expando, l = pe.cache, c = de.attributes, u = pe.event.special; null != (i = e[s]); s++)
          if ((t || Le(i)) && (a = (r = i[o]) && l[r])) {
            if (a.events) for (n in a.events) u[n] ? pe.event.remove(i, n) : pe.removeEvent(i, n, a.handle);
            l[r] && (delete l[r], c || 'undefined' == typeof i.removeAttribute ? (i[o] = undefined) : i.removeAttribute(o), ie.push(r));
          }
      },
    }),
      pe.fn.extend({
        domManip: E,
        detach: function (e) {
          return D(this, e, !0);
        },
        remove: function (e) {
          return D(this, e);
        },
        text: function (e) {
          return Be(
            this,
            function (e) {
              return e === undefined ? pe.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || ne).createTextNode(e));
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return E(this, arguments, function (e) {
            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || w(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return E(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = w(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return E(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return E(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++) {
            for (1 === e.nodeType && pe.cleanData(v(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
            e.options && pe.nodeName(e, 'select') && (e.options.length = 0);
          }
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return pe.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return Be(
            this,
            function (e) {
              var t = this[0] || {},
                i = 0,
                n = this.length;
              if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(it, '') : undefined;
              if (
                'string' == typeof e &&
                !at.test(e) &&
                (de.htmlSerialize || !nt.test(e)) &&
                (de.leadingWhitespace || !We.test(e)) &&
                !Ge[(Ye.exec(e) || ['', ''])[1].toLowerCase()]
              ) {
                e = pe.htmlPrefilter(e);
                try {
                  for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (pe.cleanData(v(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (r) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var i = [];
          return E(
            this,
            arguments,
            function (e) {
              var t = this.parentNode;
              pe.inArray(this, i) < 0 && (pe.cleanData(v(this)), t && t.replaceChild(e, this));
            },
            i
          );
        },
      }),
      pe.each({ appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' }, function (e, s) {
        pe.fn[e] = function (e) {
          for (var t, i = 0, n = [], r = pe(e), a = r.length - 1; i <= a; i++) (t = i === a ? this : this.clone(!0)), pe(r[i])[s](t), se.apply(n, t.get());
          return this.pushStack(n);
        };
      });
    var ut,
      dt = { HTML: 'block', BODY: 'block' },
      ht = /^margin/,
      pt = new RegExp('^(' + Fe + ')(?!px)[a-z%]+$', 'i'),
      ft = function (e, t, i, n) {
        var r,
          a,
          s = {};
        for (a in t) (s[a] = e.style[a]), (e.style[a] = t[a]);
        for (a in ((r = i.apply(e, n || [])), t)) e.style[a] = s[a];
        return r;
      },
      mt = ne.documentElement;
    !(function () {
      function e() {
        var e,
          t,
          i = ne.documentElement;
        i.appendChild(c),
          (u.style.cssText = '-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%'),
          (n = a = l = !1),
          (r = o = !0),
          T.getComputedStyle &&
            ((t = T.getComputedStyle(u)),
            (n = '1%' !== (t || {}).top),
            (l = '2px' === (t || {}).marginLeft),
            (a = '4px' === (t || { width: '4px' }).width),
            (u.style.marginRight = '50%'),
            (r = '4px' === (t || { marginRight: '4px' }).marginRight),
            ((e = u.appendChild(ne.createElement('div'))).style.cssText = u.style.cssText =
              '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
            (e.style.marginRight = e.style.width = '0'),
            (u.style.width = '1px'),
            (o = !parseFloat((T.getComputedStyle(e) || {}).marginRight)),
            u.removeChild(e)),
          (u.style.display = 'none'),
          (s = 0 === u.getClientRects().length) &&
            ((u.style.display = ''),
            (u.innerHTML = '<table><tr><td></td><td>t</td></tr></table>'),
            (u.childNodes[0].style.borderCollapse = 'separate'),
            ((e = u.getElementsByTagName('td'))[0].style.cssText = 'margin:0;border:0;padding:0;display:none'),
            (s = 0 === e[0].offsetHeight) && ((e[0].style.display = ''), (e[1].style.display = 'none'), (s = 0 === e[0].offsetHeight))),
          i.removeChild(c);
      }
      var n,
        r,
        a,
        s,
        o,
        l,
        c = ne.createElement('div'),
        u = ne.createElement('div');
      u.style &&
        ((u.style.cssText = 'float:left;opacity:.5'),
        (de.opacity = '0.5' === u.style.opacity),
        (de.cssFloat = !!u.style.cssFloat),
        (u.style.backgroundClip = 'content-box'),
        (u.cloneNode(!0).style.backgroundClip = ''),
        (de.clearCloneStyle = 'content-box' === u.style.backgroundClip),
        ((c = ne.createElement('div')).style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'),
        (u.innerHTML = ''),
        c.appendChild(u),
        (de.boxSizing = '' === u.style.boxSizing || '' === u.style.MozBoxSizing || '' === u.style.WebkitBoxSizing),
        pe.extend(de, {
          reliableHiddenOffsets: function () {
            return null == n && e(), s;
          },
          boxSizingReliable: function () {
            return null == n && e(), a;
          },
          pixelMarginRight: function () {
            return null == n && e(), r;
          },
          pixelPosition: function () {
            return null == n && e(), n;
          },
          reliableMarginRight: function () {
            return null == n && e(), o;
          },
          reliableMarginLeft: function () {
            return null == n && e(), l;
          },
        }));
    })();
    var gt,
      vt,
      yt = /^(top|right|bottom|left)$/;
    T.getComputedStyle
      ? ((gt = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = T), t.getComputedStyle(e);
        }),
        (vt = function (e, t, i) {
          var n,
            r,
            a,
            s,
            o = e.style;
          return (
            ('' !== (s = (i = i || gt(e)) ? i.getPropertyValue(t) || i[t] : undefined) && s !== undefined) || pe.contains(e.ownerDocument, e) || (s = pe.style(e, t)),
            i &&
              !de.pixelMarginRight() &&
              pt.test(s) &&
              ht.test(t) &&
              ((n = o.width), (r = o.minWidth), (a = o.maxWidth), (o.minWidth = o.maxWidth = o.width = s), (s = i.width), (o.width = n), (o.minWidth = r), (o.maxWidth = a)),
            s === undefined ? s : s + ''
          );
        }))
      : mt.currentStyle &&
        ((gt = function (e) {
          return e.currentStyle;
        }),
        (vt = function (e, t, i) {
          var n,
            r,
            a,
            s,
            o = e.style;
          return (
            null == (s = (i = i || gt(e)) ? i[t] : undefined) && o && o[t] && (s = o[t]),
            pt.test(s) &&
              !yt.test(t) &&
              ((n = o.left),
              (a = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left),
              (o.left = 'fontSize' === t ? '1em' : s),
              (s = o.pixelLeft + 'px'),
              (o.left = n),
              a && (r.left = a)),
            s === undefined ? s : s + '' || 'auto'
          );
        }));
    var bt = /alpha\([^)]*\)/i,
      _t = /opacity\s*=\s*([^)]*)/i,
      wt = /^(none|table(?!-c[ea]).+)/,
      xt = new RegExp('^(' + Fe + ')(.*)$', 'i'),
      Tt = { position: 'absolute', visibility: 'hidden', display: 'block' },
      kt = { letterSpacing: '0', fontWeight: '400' },
      St = ['Webkit', 'O', 'Moz', 'ms'],
      Ct = ne.createElement('div').style;
    pe.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var i = vt(e, 'opacity');
              return '' === i ? '1' : i;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: de.cssFloat ? 'cssFloat' : 'styleFloat' },
      style: function (e, t, i, n) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var r,
            a,
            s,
            o = pe.camelCase(t),
            l = e.style;
          if (((t = pe.cssProps[o] || (pe.cssProps[o] = L(o) || o)), (s = pe.cssHooks[t] || pe.cssHooks[o]), i === undefined))
            return s && 'get' in s && (r = s.get(e, !1, n)) !== undefined ? r : l[t];
          if (
            ('string' === (a = typeof i) && (r = He.exec(i)) && r[1] && ((i = d(e, t, r)), (a = 'number')),
            null != i &&
              i == i &&
              ('number' === a && (i += (r && r[3]) || (pe.cssNumber[o] ? '' : 'px')),
              de.clearCloneStyle || '' !== i || 0 !== t.indexOf('background') || (l[t] = 'inherit'),
              !(s && 'set' in s && (i = s.set(e, i, n)) === undefined)))
          )
            try {
              l[t] = i;
            } catch (c) {}
        }
      },
      css: function (e, t, i, n) {
        var r,
          a,
          s,
          o = pe.camelCase(t);
        return (
          (t = pe.cssProps[o] || (pe.cssProps[o] = L(o) || o)),
          (s = pe.cssHooks[t] || pe.cssHooks[o]) && 'get' in s && (a = s.get(e, !0, i)),
          a === undefined && (a = vt(e, t, n)),
          'normal' === a && t in kt && (a = kt[t]),
          '' === i || i ? ((r = parseFloat(a)), !0 === i || isFinite(r) ? r || 0 : a) : a
        );
      },
    }),
      pe.each(['height', 'width'], function (e, r) {
        pe.cssHooks[r] = {
          get: function (e, t, i) {
            if (t)
              return wt.test(pe.css(e, 'display')) && 0 === e.offsetWidth
                ? ft(e, Tt, function () {
                    return N(e, r, i);
                  })
                : N(e, r, i);
          },
          set: function (e, t, i) {
            var n = i && gt(e);
            return R(e, t, i ? I(e, r, i, de.boxSizing && 'border-box' === pe.css(e, 'boxSizing', !1, n), n) : 0);
          },
        };
      }),
      de.opacity ||
        (pe.cssHooks.opacity = {
          get: function (e, t) {
            return _t.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || '') ? 0.01 * parseFloat(RegExp.$1) + '' : t ? '1' : '';
          },
          set: function (e, t) {
            var i = e.style,
              n = e.currentStyle,
              r = pe.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '',
              a = (n && n.filter) || i.filter || '';
            (((i.zoom = 1) <= t || '' === t) && '' === pe.trim(a.replace(bt, '')) && i.removeAttribute && (i.removeAttribute('filter'), '' === t || (n && !n.filter))) ||
              (i.filter = bt.test(a) ? a.replace(bt, r) : a + ' ' + r);
          },
        }),
      (pe.cssHooks.marginRight = A(de.reliableMarginRight, function (e, t) {
        if (t) return ft(e, { display: 'inline-block' }, vt, [e, 'marginRight']);
      })),
      (pe.cssHooks.marginLeft = A(de.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(vt(e, 'marginLeft')) ||
              (pe.contains(e.ownerDocument, e)
                ? e.getBoundingClientRect().left -
                  ft(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })
                : 0)) + 'px'
          );
      })),
      pe.each({ margin: '', padding: '', border: 'Width' }, function (r, a) {
        (pe.cssHooks[r + a] = {
          expand: function (e) {
            for (var t = 0, i = {}, n = 'string' == typeof e ? e.split(' ') : [e]; t < 4; t++) i[r + je[t] + a] = n[t] || n[t - 2] || n[0];
            return i;
          },
        }),
          ht.test(r) || (pe.cssHooks[r + a].set = R);
      }),
      pe.fn.extend({
        css: function (e, t) {
          return Be(
            this,
            function (e, t, i) {
              var n,
                r,
                a = {},
                s = 0;
              if (pe.isArray(t)) {
                for (n = gt(e), r = t.length; s < r; s++) a[t[s]] = pe.css(e, t[s], !1, n);
                return a;
              }
              return i !== undefined ? pe.style(e, t, i) : pe.css(e, t);
            },
            e,
            t,
            1 < arguments.length
          );
        },
        show: function () {
          return O(this, !0);
        },
        hide: function () {
          return O(this);
        },
        toggle: function (e) {
          return 'boolean' == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                $e(this) ? pe(this).show() : pe(this).hide();
              });
        },
      }),
      ((pe.Tween = z).prototype = {
        constructor: z,
        init: function (e, t, i, n, r, a) {
          (this.elem = e),
            (this.prop = i),
            (this.easing = r || pe.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = n),
            (this.unit = a || (pe.cssNumber[i] ? '' : 'px'));
        },
        cur: function () {
          var e = z.propHooks[this.prop];
          return e && e.get ? e.get(this) : z.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            i = z.propHooks[this.prop];
          return (
            this.options.duration ? (this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : z.propHooks._default.set(this),
            this
          );
        },
      }),
      (z.prototype.init.prototype = z.prototype),
      (z.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, '')) && 'auto' !== t ? t : 0;
          },
          set: function (e) {
            pe.fx.step[e.prop]
              ? pe.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType || (null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop])
              ? (e.elem[e.prop] = e.now)
              : pe.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }),
      (z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
      (pe.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: 'swing',
      }),
      (pe.fx = z.prototype.init),
      (pe.fx.step = {});
    var Et,
      Dt,
      Mt,
      Pt,
      At,
      Lt,
      Ot,
      Rt = /^(?:toggle|show|hide)$/,
      It = /queueHooks$/;
    (pe.Animation = pe.extend(q, {
      tweeners: {
        '*': [
          function (e, t) {
            var i = this.createTween(e, t);
            return d(i.elem, e, He.exec(t), i), i;
          },
        ],
      },
      tweener: function (e, t) {
        pe.isFunction(e) ? ((t = e), (e = ['*'])) : (e = e.match(Pe));
        for (var i, n = 0, r = e.length; n < r; n++) (i = e[n]), (q.tweeners[i] = q.tweeners[i] || []), q.tweeners[i].unshift(t);
      },
      prefilters: [$],
      prefilter: function (e, t) {
        t ? q.prefilters.unshift(e) : q.prefilters.push(e);
      },
    })),
      (pe.speed = function (e, t, i) {
        var n =
          e && 'object' == typeof e ? pe.extend({}, e) : { complete: i || (!i && t) || (pe.isFunction(e) && e), duration: e, easing: (i && t) || (t && !pe.isFunction(t) && t) };
        return (
          (n.duration = pe.fx.off ? 0 : 'number' == typeof n.duration ? n.duration : n.duration in pe.fx.speeds ? pe.fx.speeds[n.duration] : pe.fx.speeds._default),
          (null != n.queue && !0 !== n.queue) || (n.queue = 'fx'),
          (n.old = n.complete),
          (n.complete = function () {
            pe.isFunction(n.old) && n.old.call(this), n.queue && pe.dequeue(this, n.queue);
          }),
          n
        );
      }),
      pe.fn.extend({
        fadeTo: function (e, t, i, n) {
          return this.filter($e).css('opacity', 0).show().end().animate({ opacity: t }, e, i, n);
        },
        animate: function (t, e, i, n) {
          var r = pe.isEmptyObject(t),
            a = pe.speed(e, i, n),
            s = function () {
              var e = q(this, pe.extend({}, t), a);
              (r || pe._data(this, 'finish')) && e.stop(!0);
            };
          return (s.finish = s), r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s);
        },
        stop: function (r, e, a) {
          var s = function (e) {
            var t = e.stop;
            delete e.stop, t(a);
          };
          return (
            'string' != typeof r && ((a = e), (e = r), (r = undefined)),
            e && !1 !== r && this.queue(r || 'fx', []),
            this.each(function () {
              var e = !0,
                t = null != r && r + 'queueHooks',
                i = pe.timers,
                n = pe._data(this);
              if (t) n[t] && n[t].stop && s(n[t]);
              else for (t in n) n[t] && n[t].stop && It.test(t) && s(n[t]);
              for (t = i.length; t--; ) i[t].elem !== this || (null != r && i[t].queue !== r) || (i[t].anim.stop(a), (e = !1), i.splice(t, 1));
              (!e && a) || pe.dequeue(this, r);
            })
          );
        },
        finish: function (s) {
          return (
            !1 !== s && (s = s || 'fx'),
            this.each(function () {
              var e,
                t = pe._data(this),
                i = t[s + 'queue'],
                n = t[s + 'queueHooks'],
                r = pe.timers,
                a = i ? i.length : 0;
              for (t.finish = !0, pe.queue(this, s, []), n && n.stop && n.stop.call(this, !0), e = r.length; e--; )
                r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
              for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
              delete t.finish;
            })
          );
        },
      }),
      pe.each(['toggle', 'show', 'hide'], function (e, n) {
        var r = pe.fn[n];
        pe.fn[n] = function (e, t, i) {
          return null == e || 'boolean' == typeof e ? r.apply(this, arguments) : this.animate(H(n, !0), e, t, i);
        };
      }),
      pe.each(
        { slideDown: H('show'), slideUp: H('hide'), slideToggle: H('toggle'), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' } },
        function (e, n) {
          pe.fn[e] = function (e, t, i) {
            return this.animate(n, e, t, i);
          };
        }
      ),
      (pe.timers = []),
      (pe.fx.tick = function () {
        var e,
          t = pe.timers,
          i = 0;
        for (Et = pe.now(); i < t.length; i++) (e = t[i])() || t[i] !== e || t.splice(i--, 1);
        t.length || pe.fx.stop(), (Et = undefined);
      }),
      (pe.fx.timer = function (e) {
        pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop();
      }),
      (pe.fx.interval = 13),
      (pe.fx.start = function () {
        Dt || (Dt = T.setInterval(pe.fx.tick, pe.fx.interval));
      }),
      (pe.fx.stop = function () {
        T.clearInterval(Dt), (Dt = null);
      }),
      (pe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (pe.fn.delay = function (n, e) {
        return (
          (n = (pe.fx && pe.fx.speeds[n]) || n),
          (e = e || 'fx'),
          this.queue(e, function (e, t) {
            var i = T.setTimeout(e, n);
            t.stop = function () {
              T.clearTimeout(i);
            };
          })
        );
      }),
      (Pt = ne.createElement('input')),
      (At = ne.createElement('div')),
      (Lt = ne.createElement('select')),
      (Ot = Lt.appendChild(ne.createElement('option'))),
      (At = ne.createElement('div')).setAttribute('className', 't'),
      (At.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (Mt = At.getElementsByTagName('a')[0]),
      Pt.setAttribute('type', 'checkbox'),
      At.appendChild(Pt),
      ((Mt = At.getElementsByTagName('a')[0]).style.cssText = 'top:1px'),
      (de.getSetAttribute = 't' !== At.className),
      (de.style = /top/.test(Mt.getAttribute('style'))),
      (de.hrefNormalized = '/a' === Mt.getAttribute('href')),
      (de.checkOn = !!Pt.value),
      (de.optSelected = Ot.selected),
      (de.enctype = !!ne.createElement('form').enctype),
      (Lt.disabled = !0),
      (de.optDisabled = !Ot.disabled),
      (Pt = ne.createElement('input')).setAttribute('value', ''),
      (de.input = '' === Pt.getAttribute('value')),
      (Pt.value = 't'),
      Pt.setAttribute('type', 'radio'),
      (de.radioValue = 't' === Pt.value);
    var Nt = /\r/g,
      zt = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
      val: function (i) {
        var n,
          e,
          r,
          t = this[0];
        return arguments.length
          ? ((r = pe.isFunction(i)),
            this.each(function (e) {
              var t;
              1 === this.nodeType &&
                (null == (t = r ? i.call(this, e, pe(this).val()) : i)
                  ? (t = '')
                  : 'number' == typeof t
                  ? (t += '')
                  : pe.isArray(t) &&
                    (t = pe.map(t, function (e) {
                      return null == e ? '' : e + '';
                    })),
                ((n = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && 'set' in n && n.set(this, t, 'value') !== undefined) || (this.value = t));
            }))
          : t
          ? (n = pe.valHooks[t.type] || pe.valHooks[t.nodeName.toLowerCase()]) && 'get' in n && (e = n.get(t, 'value')) !== undefined
            ? e
            : 'string' == typeof (e = t.value)
            ? e.replace(Nt, '')
            : null == e
            ? ''
            : e
          : void 0;
      },
    }),
      pe.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = pe.find.attr(e, 'value');
              return null != t ? t : pe.trim(pe.text(e)).replace(zt, ' ');
            },
          },
          select: {
            get: function (e) {
              for (
                var t, i, n = e.options, r = e.selectedIndex, a = 'select-one' === e.type || r < 0, s = a ? null : [], o = a ? r + 1 : n.length, l = r < 0 ? o : a ? r : 0;
                l < o;
                l++
              )
                if (
                  ((i = n[l]).selected || l === r) &&
                  (de.optDisabled ? !i.disabled : null === i.getAttribute('disabled')) &&
                  (!i.parentNode.disabled || !pe.nodeName(i.parentNode, 'optgroup'))
                ) {
                  if (((t = pe(i).val()), a)) return t;
                  s.push(t);
                }
              return s;
            },
            set: function (e, t) {
              for (var i, n, r = e.options, a = pe.makeArray(t), s = r.length; s--; )
                if (((n = r[s]), -1 < pe.inArray(pe.valHooks.option.get(n), a)))
                  try {
                    n.selected = i = !0;
                  } catch (o) {
                    n.scrollHeight;
                  }
                else n.selected = !1;
              return i || (e.selectedIndex = -1), r;
            },
          },
        },
      }),
      pe.each(['radio', 'checkbox'], function () {
        (pe.valHooks[this] = {
          set: function (e, t) {
            if (pe.isArray(t)) return (e.checked = -1 < pe.inArray(pe(e).val(), t));
          },
        }),
          de.checkOn ||
            (pe.valHooks[this].get = function (e) {
              return null === e.getAttribute('value') ? 'on' : e.value;
            });
      });
    var Ft,
      Ht,
      jt = pe.expr.attrHandle,
      $t = /^(?:checked|selected)$/i,
      Bt = de.getSetAttribute,
      qt = de.input;
    pe.fn.extend({
      attr: function (e, t) {
        return Be(this, pe.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
        return this.each(function () {
          pe.removeAttr(this, e);
        });
      },
    }),
      pe.extend({
        attr: function (e, t, i) {
          var n,
            r,
            a = e.nodeType;
          if (3 !== a && 8 !== a && 2 !== a)
            return 'undefined' == typeof e.getAttribute
              ? pe.prop(e, t, i)
              : ((1 === a && pe.isXMLDoc(e)) || ((t = t.toLowerCase()), (r = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Ht : Ft))),
                i !== undefined
                  ? null === i
                    ? void pe.removeAttr(e, t)
                    : r && 'set' in r && (n = r.set(e, i, t)) !== undefined
                    ? n
                    : (e.setAttribute(t, i + ''), i)
                  : r && 'get' in r && null !== (n = r.get(e, t))
                  ? n
                  : null == (n = pe.find.attr(e, t))
                  ? undefined
                  : n);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!de.radioValue && 'radio' === t && pe.nodeName(e, 'input')) {
                var i = e.value;
                return e.setAttribute('type', t), i && (e.value = i), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var i,
            n,
            r = 0,
            a = t && t.match(Pe);
          if (a && 1 === e.nodeType)
            for (; (i = a[r++]); )
              (n = pe.propFix[i] || i),
                pe.expr.match.bool.test(i) ? ((qt && Bt) || !$t.test(i) ? (e[n] = !1) : (e[pe.camelCase('default-' + i)] = e[n] = !1)) : pe.attr(e, i, ''),
                e.removeAttribute(Bt ? i : n);
        },
      }),
      (Ht = {
        set: function (e, t, i) {
          return !1 === t ? pe.removeAttr(e, i) : (qt && Bt) || !$t.test(i) ? e.setAttribute((!Bt && pe.propFix[i]) || i, i) : (e[pe.camelCase('default-' + i)] = e[i] = !0), i;
        },
      }),
      pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = jt[t] || pe.find.attr;
        (qt && Bt) || !$t.test(t)
          ? (jt[t] = function (e, t, i) {
              var n, r;
              return i || ((r = jt[t]), (jt[t] = n), (n = null != a(e, t, i) ? t.toLowerCase() : null), (jt[t] = r)), n;
            })
          : (jt[t] = function (e, t, i) {
              if (!i) return e[pe.camelCase('default-' + t)] ? t.toLowerCase() : null;
            });
      }),
      (qt && Bt) ||
        (pe.attrHooks.value = {
          set: function (e, t, i) {
            if (!pe.nodeName(e, 'input')) return Ft && Ft.set(e, t, i);
            e.defaultValue = t;
          },
        }),
      Bt ||
        ((Ft = {
          set: function (e, t, i) {
            var n = e.getAttributeNode(i);
            if ((n || e.setAttributeNode((n = e.ownerDocument.createAttribute(i))), (n.value = t += ''), 'value' === i || t === e.getAttribute(i))) return t;
          },
        }),
        (jt.id = jt.name = jt.coords = function (e, t, i) {
          var n;
          if (!i) return (n = e.getAttributeNode(t)) && '' !== n.value ? n.value : null;
        }),
        (pe.valHooks.button = {
          get: function (e, t) {
            var i = e.getAttributeNode(t);
            if (i && i.specified) return i.value;
          },
          set: Ft.set,
        }),
        (pe.attrHooks.contenteditable = {
          set: function (e, t, i) {
            Ft.set(e, '' !== t && t, i);
          },
        }),
        pe.each(['width', 'height'], function (e, i) {
          pe.attrHooks[i] = {
            set: function (e, t) {
              if ('' === t) return e.setAttribute(i, 'auto'), t;
            },
          };
        })),
      de.style ||
        (pe.attrHooks.style = {
          get: function (e) {
            return e.style.cssText || undefined;
          },
          set: function (e, t) {
            return (e.style.cssText = t + '');
          },
        });
    var Yt = /^(?:input|select|textarea|button|object)$/i,
      Xt = /^(?:a|area)$/i;
    pe.fn.extend({
      prop: function (e, t) {
        return Be(this, pe.prop, e, t, 1 < arguments.length);
      },
      removeProp: function (t) {
        return (
          (t = pe.propFix[t] || t),
          this.each(function () {
            try {
              (this[t] = undefined), delete this[t];
            } catch (e) {}
          })
        );
      },
    }),
      pe.extend({
        prop: function (e, t, i) {
          var n,
            r,
            a = e.nodeType;
          if (3 !== a && 8 !== a && 2 !== a)
            return (
              (1 === a && pe.isXMLDoc(e)) || ((t = pe.propFix[t] || t), (r = pe.propHooks[t])),
              i !== undefined ? (r && 'set' in r && (n = r.set(e, i, t)) !== undefined ? n : (e[t] = i)) : r && 'get' in r && null !== (n = r.get(e, t)) ? n : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = pe.find.attr(e, 'tabindex');
              return t ? parseInt(t, 10) : Yt.test(e.nodeName) || (Xt.test(e.nodeName) && e.href) ? 0 : -1;
            },
          },
        },
        propFix: { for: 'htmlFor', class: 'className' },
      }),
      de.hrefNormalized ||
        pe.each(['href', 'src'], function (e, t) {
          pe.propHooks[t] = {
            get: function (e) {
              return e.getAttribute(t, 4);
            },
          };
        }),
      de.optSelected ||
        (pe.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      pe.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
        pe.propFix[this.toLowerCase()] = this;
      }),
      de.enctype || (pe.propFix.enctype = 'encoding');
    var Wt = /[\t\r\n\f]/g;
    pe.fn.extend({
      addClass: function (t) {
        var e,
          i,
          n,
          r,
          a,
          s,
          o,
          l = 0;
        if (pe.isFunction(t))
          return this.each(function (e) {
            pe(this).addClass(t.call(this, e, Y(this)));
          });
        if ('string' == typeof t && t)
          for (e = t.match(Pe) || []; (i = this[l++]); )
            if (((r = Y(i)), (n = 1 === i.nodeType && (' ' + r + ' ').replace(Wt, ' ')))) {
              for (s = 0; (a = e[s++]); ) n.indexOf(' ' + a + ' ') < 0 && (n += a + ' ');
              r !== (o = pe.trim(n)) && pe.attr(i, 'class', o);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          i,
          n,
          r,
          a,
          s,
          o,
          l = 0;
        if (pe.isFunction(t))
          return this.each(function (e) {
            pe(this).removeClass(t.call(this, e, Y(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ('string' == typeof t && t)
          for (e = t.match(Pe) || []; (i = this[l++]); )
            if (((r = Y(i)), (n = 1 === i.nodeType && (' ' + r + ' ').replace(Wt, ' ')))) {
              for (s = 0; (a = e[s++]); ) for (; -1 < n.indexOf(' ' + a + ' '); ) n = n.replace(' ' + a + ' ', ' ');
              r !== (o = pe.trim(n)) && pe.attr(i, 'class', o);
            }
        return this;
      },
      toggleClass: function (r, t) {
        var a = typeof r;
        return 'boolean' == typeof t && 'string' === a
          ? t
            ? this.addClass(r)
            : this.removeClass(r)
          : pe.isFunction(r)
          ? this.each(function (e) {
              pe(this).toggleClass(r.call(this, e, Y(this), t), t);
            })
          : this.each(function () {
              var e, t, i, n;
              if ('string' === a) for (t = 0, i = pe(this), n = r.match(Pe) || []; (e = n[t++]); ) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
              else
                (r !== undefined && 'boolean' !== a) ||
                  ((e = Y(this)) && pe._data(this, '__className__', e), pe.attr(this, 'class', e || !1 === r ? '' : pe._data(this, '__className__') || ''));
            });
      },
      hasClass: function (e) {
        var t,
          i,
          n = 0;
        for (t = ' ' + e + ' '; (i = this[n++]); ) if (1 === i.nodeType && -1 < (' ' + Y(i) + ' ').replace(Wt, ' ').indexOf(t)) return !0;
        return !1;
      },
    }),
      pe.each(
        'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
          ' '
        ),
        function (e, i) {
          pe.fn[i] = function (e, t) {
            return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i);
          };
        }
      ),
      pe.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      });
    var Vt = T.location,
      Gt = pe.now(),
      Ut = /\?/,
      Kt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (pe.parseJSON = function (e) {
      if (T.JSON && T.JSON.parse) return T.JSON.parse(e + '');
      var r,
        a = null,
        t = pe.trim(e + '');
      return t &&
        !pe.trim(
          t.replace(Kt, function (e, t, i, n) {
            return r && t && (a = 0), 0 === a ? e : ((r = i || t), (a += !n - !i), '');
          })
        )
        ? Function('return ' + t)()
        : pe.error('Invalid JSON: ' + e);
    }),
      (pe.parseXML = function (e) {
        var t;
        if (!e || 'string' != typeof e) return null;
        try {
          T.DOMParser ? (t = new T.DOMParser().parseFromString(e, 'text/xml')) : (((t = new T.ActiveXObject('Microsoft.XMLDOM')).async = 'false'), t.loadXML(e));
        } catch (i) {
          t = undefined;
        }
        return (t && t.documentElement && !t.getElementsByTagName('parsererror').length) || pe.error('Invalid XML: ' + e), t;
      });
    var Qt = /#.*$/,
      Jt = /([?&])_=[^&]*/,
      Zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      ei = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      ti = /^(?:GET|HEAD)$/,
      ii = /^\/\//,
      ni = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      ri = {},
      ai = {},
      si = '*/'.concat('*'),
      oi = Vt.href,
      li = ni.exec(oi.toLowerCase()) || [];
    pe.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: oi,
        type: 'GET',
        isLocal: ei.test(li[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: { '*': si, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript' },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
        converters: { '* text': String, 'text html': !0, 'text json': pe.parseJSON, 'text xml': pe.parseXML },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e);
      },
      ajaxPrefilter: X(ri),
      ajaxTransport: X(ai),
      ajax: function (e, t) {
        function i(e, t, i, n) {
          var r,
            a,
            s,
            o,
            l,
            c = t;
          2 !== w &&
            ((w = 2),
            h && T.clearTimeout(h),
            (f = undefined),
            (d = n || ''),
            (x.readyState = 0 < e ? 4 : 0),
            (r = (200 <= e && e < 300) || 304 === e),
            i && (o = G(m, x, i)),
            (o = U(m, o, x, r)),
            r
              ? (m.ifModified && ((l = x.getResponseHeader('Last-Modified')) && (pe.lastModified[u] = l), (l = x.getResponseHeader('etag')) && (pe.etag[u] = l)),
                204 === e || 'HEAD' === m.type ? (c = 'nocontent') : 304 === e ? (c = 'notmodified') : ((c = o.state), (a = o.data), (r = !(s = o.error))))
              : ((s = c), (!e && c) || ((c = 'error'), e < 0 && (e = 0))),
            (x.status = e),
            (x.statusText = (t || c) + ''),
            r ? y.resolveWith(g, [a, c, x]) : y.rejectWith(g, [x, c, s]),
            x.statusCode(_),
            (_ = undefined),
            p && v.trigger(r ? 'ajaxSuccess' : 'ajaxError', [x, m, r ? a : s]),
            b.fireWith(g, [x, c]),
            p && (v.trigger('ajaxComplete', [x, m]), --pe.active || pe.event.trigger('ajaxStop')));
        }
        'object' == typeof e && ((t = e), (e = undefined)), (t = t || {});
        var n,
          r,
          u,
          d,
          h,
          p,
          f,
          a,
          m = pe.ajaxSetup({}, t),
          g = m.context || m,
          v = m.context && (g.nodeType || g.jquery) ? pe(g) : pe.event,
          y = pe.Deferred(),
          b = pe.Callbacks('once memory'),
          _ = m.statusCode || {},
          s = {},
          o = {},
          w = 0,
          l = 'canceled',
          x = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === w) {
                if (!a) for (a = {}; (t = Zt.exec(d)); ) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === w ? d : null;
            },
            setRequestHeader: function (e, t) {
              var i = e.toLowerCase();
              return w || ((e = o[i] = o[i] || e), (s[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return w || (m.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (w < 2) for (t in e) _[t] = [_[t], e[t]];
                else x.always(e[x.status]);
              return this;
            },
            abort: function (e) {
              var t = e || l;
              return f && f.abort(t), i(0, t), this;
            },
          };
        if (
          ((y.promise(x).complete = b.add),
          (x.success = x.done),
          (x.error = x.fail),
          (m.url = ((e || m.url || oi) + '').replace(Qt, '').replace(ii, li[1] + '//')),
          (m.type = t.method || t.type || m.method || m.type),
          (m.dataTypes = pe
            .trim(m.dataType || '*')
            .toLowerCase()
            .match(Pe) || ['']),
          null == m.crossDomain &&
            ((n = ni.exec(m.url.toLowerCase())),
            (m.crossDomain = !(!n || (n[1] === li[1] && n[2] === li[2] && (n[3] || ('http:' === n[1] ? '80' : '443')) === (li[3] || ('http:' === li[1] ? '80' : '443')))))),
          m.data && m.processData && 'string' != typeof m.data && (m.data = pe.param(m.data, m.traditional)),
          W(ri, m, t, x),
          2 === w)
        )
          return x;
        for (r in ((p = pe.event && m.global) && 0 == pe.active++ && pe.event.trigger('ajaxStart'),
        (m.type = m.type.toUpperCase()),
        (m.hasContent = !ti.test(m.type)),
        (u = m.url),
        m.hasContent ||
          (m.data && ((u = m.url += (Ut.test(u) ? '&' : '?') + m.data), delete m.data),
          !1 === m.cache && (m.url = Jt.test(u) ? u.replace(Jt, '$1_=' + Gt++) : u + (Ut.test(u) ? '&' : '?') + '_=' + Gt++)),
        m.ifModified && (pe.lastModified[u] && x.setRequestHeader('If-Modified-Since', pe.lastModified[u]), pe.etag[u] && x.setRequestHeader('If-None-Match', pe.etag[u])),
        ((m.data && m.hasContent && !1 !== m.contentType) || t.contentType) && x.setRequestHeader('Content-Type', m.contentType),
        x.setRequestHeader(
          'Accept',
          m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ('*' !== m.dataTypes[0] ? ', ' + si + '; q=0.01' : '') : m.accepts['*']
        ),
        m.headers))
          x.setRequestHeader(r, m.headers[r]);
        if (m.beforeSend && (!1 === m.beforeSend.call(g, x, m) || 2 === w)) return x.abort();
        for (r in ((l = 'abort'), { success: 1, error: 1, complete: 1 })) x[r](m[r]);
        if ((f = W(ai, m, t, x))) {
          if (((x.readyState = 1), p && v.trigger('ajaxSend', [x, m]), 2 === w)) return x;
          m.async &&
            0 < m.timeout &&
            (h = T.setTimeout(function () {
              x.abort('timeout');
            }, m.timeout));
          try {
            (w = 1), f.send(s, i);
          } catch (c) {
            if (!(w < 2)) throw c;
            i(-1, c);
          }
        } else i(-1, 'No Transport');
        return x;
      },
      getJSON: function (e, t, i) {
        return pe.get(e, t, i, 'json');
      },
      getScript: function (e, t) {
        return pe.get(e, undefined, t, 'script');
      },
    }),
      pe.each(['get', 'post'], function (e, r) {
        pe[r] = function (e, t, i, n) {
          return pe.isFunction(t) && ((n = n || i), (i = t), (t = undefined)), pe.ajax(pe.extend({ url: e, type: r, dataType: n, data: t, success: i }, pe.isPlainObject(e) && e));
        };
      }),
      (pe._evalUrl = function (e) {
        return pe.ajax({ url: e, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, throws: !0 });
      }),
      pe.fn.extend({
        wrapAll: function (t) {
          if (pe.isFunction(t))
            return this.each(function (e) {
              pe(this).wrapAll(t.call(this, e));
            });
          if (this[0]) {
            var e = pe(t, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                  return e;
                })
                .append(this);
          }
          return this;
        },
        wrapInner: function (i) {
          return pe.isFunction(i)
            ? this.each(function (e) {
                pe(this).wrapInner(i.call(this, e));
              })
            : this.each(function () {
                var e = pe(this),
                  t = e.contents();
                t.length ? t.wrapAll(i) : e.append(i);
              });
        },
        wrap: function (t) {
          var i = pe.isFunction(t);
          return this.each(function (e) {
            pe(this).wrapAll(i ? t.call(this, e) : t);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              pe.nodeName(this, 'body') || pe(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (pe.expr.filters.hidden = function (e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Q(e);
      }),
      (pe.expr.filters.visible = function (e) {
        return !pe.expr.filters.hidden(e);
      });
    var ci = /%20/g,
      ui = /\[\]$/,
      di = /\r?\n/g,
      hi = /^(?:submit|button|image|reset|file)$/i,
      pi = /^(?:input|select|textarea|keygen)/i;
    (pe.param = function (e, t) {
      var i,
        n = [],
        r = function (e, t) {
          (t = pe.isFunction(t) ? t() : null == t ? '' : t), (n[n.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t));
        };
      if ((t === undefined && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || (e.jquery && !pe.isPlainObject(e))))
        pe.each(e, function () {
          r(this.name, this.value);
        });
      else for (i in e) J(i, e[i], t, r);
      return n.join('&').replace(ci, '+');
    }),
      pe.fn.extend({
        serialize: function () {
          return pe.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = pe.prop(this, 'elements');
            return e ? pe.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return this.name && !pe(this).is(':disabled') && pi.test(this.nodeName) && !hi.test(e) && (this.checked || !qe.test(e));
            })
            .map(function (e, t) {
              var i = pe(this).val();
              return null == i
                ? null
                : pe.isArray(i)
                ? pe.map(i, function (e) {
                    return { name: t.name, value: e.replace(di, '\r\n') };
                  })
                : { name: t.name, value: i.replace(di, '\r\n') };
            })
            .get();
        },
      }),
      (pe.ajaxSettings.xhr =
        T.ActiveXObject !== undefined
          ? function () {
              return this.isLocal ? ee() : 8 < ne.documentMode ? Z() : (/^(get|post|head|put|delete|options)$/i.test(this.type) && Z()) || ee();
            }
          : Z);
    var fi = 0,
      mi = {},
      gi = pe.ajaxSettings.xhr();
    T.attachEvent &&
      T.attachEvent('onunload', function () {
        for (var e in mi) mi[e](undefined, !0);
      }),
      (de.cors = !!gi && 'withCredentials' in gi),
      (gi = de.ajax = !!gi) &&
        pe.ajaxTransport(function (c) {
          var u;
          if (!c.crossDomain || de.cors)
            return {
              send: function (e, s) {
                var t,
                  o = c.xhr(),
                  l = ++fi;
                if ((o.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields)) for (t in c.xhrFields) o[t] = c.xhrFields[t];
                for (t in (c.mimeType && o.overrideMimeType && o.overrideMimeType(c.mimeType),
                c.crossDomain || e['X-Requested-With'] || (e['X-Requested-With'] = 'XMLHttpRequest'),
                e))
                  e[t] !== undefined && o.setRequestHeader(t, e[t] + '');
                o.send((c.hasContent && c.data) || null),
                  (u = function (e, t) {
                    var i, n, r;
                    if (u && (t || 4 === o.readyState))
                      if ((delete mi[l], (u = undefined), (o.onreadystatechange = pe.noop), t)) 4 !== o.readyState && o.abort();
                      else {
                        (r = {}), (i = o.status), 'string' == typeof o.responseText && (r.text = o.responseText);
                        try {
                          n = o.statusText;
                        } catch (a) {
                          n = '';
                        }
                        i || !c.isLocal || c.crossDomain ? 1223 === i && (i = 204) : (i = r.text ? 200 : 404);
                      }
                    r && s(i, n, r, o.getAllResponseHeaders());
                  }),
                  c.async ? (4 === o.readyState ? T.setTimeout(u) : (o.onreadystatechange = mi[l] = u)) : u();
              },
              abort: function () {
                u && u(undefined, !0);
              },
            };
        }),
      pe.ajaxSetup({
        accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          'text script': function (e) {
            return pe.globalEval(e), e;
          },
        },
      }),
      pe.ajaxPrefilter('script', function (e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && ((e.type = 'GET'), (e.global = !1));
      }),
      pe.ajaxTransport('script', function (t) {
        if (t.crossDomain) {
          var n,
            r = ne.head || pe('head')[0] || ne.documentElement;
          return {
            send: function (e, i) {
              ((n = ne.createElement('script')).async = !0),
                t.scriptCharset && (n.charset = t.scriptCharset),
                (n.src = t.url),
                (n.onload = n.onreadystatechange = function (e, t) {
                  (t || !n.readyState || /loaded|complete/.test(n.readyState)) &&
                    ((n.onload = n.onreadystatechange = null), n.parentNode && n.parentNode.removeChild(n), (n = null), t || i(200, 'success'));
                }),
                r.insertBefore(n, r.firstChild);
            },
            abort: function () {
              n && n.onload(undefined, !0);
            },
          };
        }
      });
    var vi = [],
      yi = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
      jsonp: 'callback',
      jsonpCallback: function () {
        var e = vi.pop() || pe.expando + '_' + Gt++;
        return (this[e] = !0), e;
      },
    }),
      pe.ajaxPrefilter('json jsonp', function (e, t, i) {
        var n,
          r,
          a,
          s =
            !1 !== e.jsonp &&
            (yi.test(e.url) ? 'url' : 'string' == typeof e.data && 0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') && yi.test(e.data) && 'data');
        if (s || 'jsonp' === e.dataTypes[0])
          return (
            (n = e.jsonpCallback = pe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            s ? (e[s] = e[s].replace(yi, '$1' + n)) : !1 !== e.jsonp && (e.url += (Ut.test(e.url) ? '&' : '?') + e.jsonp + '=' + n),
            (e.converters['script json'] = function () {
              return a || pe.error(n + ' was not called'), a[0];
            }),
            (e.dataTypes[0] = 'json'),
            (r = T[n]),
            (T[n] = function () {
              a = arguments;
            }),
            i.always(function () {
              r === undefined ? pe(T).removeProp(n) : (T[n] = r), e[n] && ((e.jsonpCallback = t.jsonpCallback), vi.push(n)), a && pe.isFunction(r) && r(a[0]), (a = r = undefined);
            }),
            'script'
          );
      }),
      (pe.parseHTML = function (e, t, i) {
        if (!e || 'string' != typeof e) return null;
        'boolean' == typeof t && ((i = t), (t = !1)), (t = t || ne);
        var n = xe.exec(e),
          r = !i && [];
        return n ? [t.createElement(n[1])] : ((n = m([e], t, r)), r && r.length && pe(r).remove(), pe.merge([], n.childNodes));
      });
    var bi = pe.fn.load;
    (pe.fn.load = function (e, t, i) {
      if ('string' != typeof e && bi) return bi.apply(this, arguments);
      var n,
        r,
        a,
        s = this,
        o = e.indexOf(' ');
      return (
        -1 < o && ((n = pe.trim(e.slice(o, e.length))), (e = e.slice(0, o))),
        pe.isFunction(t) ? ((i = t), (t = undefined)) : t && 'object' == typeof t && (r = 'POST'),
        0 < s.length &&
          pe
            .ajax({ url: e, type: r || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (a = arguments), s.html(n ? pe('<div>').append(pe.parseHTML(e)).find(n) : e);
            })
            .always(
              i &&
                function (e, t) {
                  s.each(function () {
                    i.apply(this, a || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
      pe.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
        pe.fn[t] = function (e) {
          return this.on(t, e);
        };
      }),
      (pe.expr.filters.animated = function (t) {
        return pe.grep(pe.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (pe.offset = {
        setOffset: function (e, t, i) {
          var n,
            r,
            a,
            s,
            o,
            l,
            c = pe.css(e, 'position'),
            u = pe(e),
            d = {};
          'static' === c && (e.style.position = 'relative'),
            (o = u.offset()),
            (a = pe.css(e, 'top')),
            (l = pe.css(e, 'left')),
            ('absolute' === c || 'fixed' === c) && -1 < pe.inArray('auto', [a, l])
              ? ((s = (n = u.position()).top), (r = n.left))
              : ((s = parseFloat(a) || 0), (r = parseFloat(l) || 0)),
            pe.isFunction(t) && (t = t.call(e, i, pe.extend({}, o))),
            null != t.top && (d.top = t.top - o.top + s),
            null != t.left && (d.left = t.left - o.left + r),
            'using' in t ? t.using.call(e, d) : u.css(d);
        },
      }),
      pe.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return t === undefined
              ? this
              : this.each(function (e) {
                  pe.offset.setOffset(this, t, e);
                });
          var e,
            i,
            n = { top: 0, left: 0 },
            r = this[0],
            a = r && r.ownerDocument;
          return a
            ? ((e = a.documentElement),
              pe.contains(e, r)
                ? ('undefined' != typeof r.getBoundingClientRect && (n = r.getBoundingClientRect()),
                  (i = te(a)),
                  { top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) })
                : n)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              i = { top: 0, left: 0 },
              n = this[0];
            return (
              'fixed' === pe.css(n, 'position')
                ? (t = n.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  pe.nodeName(e[0], 'html') || (i = e.offset()),
                  (i.top += pe.css(e[0], 'borderTopWidth', !0)),
                  (i.left += pe.css(e[0], 'borderLeftWidth', !0))),
              { top: t.top - i.top - pe.css(n, 'marginTop', !0), left: t.left - i.left - pe.css(n, 'marginLeft', !0) }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (var e = this.offsetParent; e && !pe.nodeName(e, 'html') && 'static' === pe.css(e, 'position'); ) e = e.offsetParent;
            return e || mt;
          });
        },
      }),
      pe.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (t, r) {
        var a = /Y/.test(r);
        pe.fn[t] = function (e) {
          return Be(
            this,
            function (e, t, i) {
              var n = te(e);
              if (i === undefined) return n ? (r in n ? n[r] : n.document.documentElement[t]) : e[t];
              n ? n.scrollTo(a ? pe(n).scrollLeft() : i, a ? i : pe(n).scrollTop()) : (e[t] = i);
            },
            t,
            e,
            arguments.length,
            null
          );
        };
      }),
      pe.each(['top', 'left'], function (e, i) {
        pe.cssHooks[i] = A(de.pixelPosition, function (e, t) {
          if (t) return (t = vt(e, i)), pt.test(t) ? pe(e).position()[i] + 'px' : t;
        });
      }),
      pe.each({ Height: 'height', Width: 'width' }, function (a, s) {
        pe.each({ padding: 'inner' + a, content: s, '': 'outer' + a }, function (n, e) {
          pe.fn[e] = function (e, t) {
            var i = arguments.length && (n || 'boolean' != typeof e),
              r = n || (!0 === e || !0 === t ? 'margin' : 'border');
            return Be(
              this,
              function (e, t, i) {
                var n;
                return pe.isWindow(e)
                  ? e.document.documentElement['client' + a]
                  : 9 === e.nodeType
                  ? ((n = e.documentElement), Math.max(e.body['scroll' + a], n['scroll' + a], e.body['offset' + a], n['offset' + a], n['client' + a]))
                  : i === undefined
                  ? pe.css(e, t, r)
                  : pe.style(e, t, i, r);
              },
              s,
              i ? e : undefined,
              i,
              null
            );
          };
        });
      }),
      pe.fn.extend({
        bind: function (e, t, i) {
          return this.on(e, null, t, i);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, i, n) {
          return this.on(t, e, i, n);
        },
        undelegate: function (e, t, i) {
          return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', i);
        },
      }),
      (pe.fn.size = function () {
        return this.length;
      }),
      (pe.fn.andSelf = pe.fn.addBack),
      'function' == typeof define &&
        define.amd &&
        define('jquery', [], function () {
          return pe;
        });
    var _i = T.jQuery,
      wi = T.$;
    return (
      (pe.noConflict = function (e) {
        return T.$ === pe && (T.$ = wi), e && T.jQuery === pe && (T.jQuery = _i), pe;
      }),
      e || (T.jQuery = T.$ = pe),
      pe
    );
  }),
  (function (e) {
    'function' == typeof define && define.amd ? define(['jquery'], e) : e(jQuery);
  })(function (e) {
    return (e.ui = e.ui || {}), (e.ui.version = '1.12.1');
  }),
  (function (e) {
    'function' == typeof define && define.amd ? define(['jquery', './version'], e) : e(jQuery);
  })(function (e) {
    return (e.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    });
  }),
  (function (e) {
    'function' == typeof define && define.amd ? define(['jquery', '../version', '../keycode'], e) : e(jQuery);
  })(function (T) {
    function l(e) {
      for (var t, i; e.length && e[0] !== document; ) {
        if (('absolute' === (t = e.css('position')) || 'relative' === t || 'fixed' === t) && ((i = parseInt(e.css('zIndex'), 10)), !isNaN(i) && 0 !== i)) return i;
        e = e.parent();
      }
      return 0;
    }
    function e() {
      (this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = 'ui-datepicker-div'),
        (this._inlineClass = 'ui-datepicker-inline'),
        (this._appendClass = 'ui-datepicker-append'),
        (this._triggerClass = 'ui-datepicker-trigger'),
        (this._dialogClass = 'ui-datepicker-dialog'),
        (this._disableClass = 'ui-datepicker-disabled'),
        (this._unselectableClass = 'ui-datepicker-unselectable'),
        (this._currentClass = 'ui-datepicker-current-day'),
        (this._dayOverClass = 'ui-datepicker-days-cell-over'),
        (this.regional = []),
        (this.regional[''] = {
          closeText: 'Done',
          prevText: 'Prev',
          nextText: 'Next',
          currentText: 'Today',
          monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          weekHeader: 'Wk',
          dateFormat: 'mm/dd/yy',
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: '',
        }),
        (this._defaults = {
          showOn: 'focus',
          showAnim: 'fadeIn',
          showOptions: {},
          defaultDate: null,
          appendText: '',
          buttonText: '...',
          buttonImage: '',
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: 'c-10:c+10',
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: '+10',
          minDate: null,
          maxDate: null,
          duration: 'fast',
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: '',
          altFormat: '',
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1,
        }),
        T.extend(this._defaults, this.regional['']),
        (this.regional.en = T.extend(!0, {}, this.regional[''])),
        (this.regional['en-US'] = T.extend(!0, {}, this.regional.en)),
        (this.dpDiv = i(T("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")));
    }
    function i(e) {
      var t = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
      return e
        .on('mouseout', t, function () {
          T(this).removeClass('ui-state-hover'),
            -1 !== this.className.indexOf('ui-datepicker-prev') && T(this).removeClass('ui-datepicker-prev-hover'),
            -1 !== this.className.indexOf('ui-datepicker-next') && T(this).removeClass('ui-datepicker-next-hover');
        })
        .on('mouseover', t, s);
    }
    function s() {
      T.datepicker._isDisabledDatepicker(o.inline ? o.dpDiv.parent()[0] : o.input[0]) ||
        (T(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover'),
        T(this).addClass('ui-state-hover'),
        -1 !== this.className.indexOf('ui-datepicker-prev') && T(this).addClass('ui-datepicker-prev-hover'),
        -1 !== this.className.indexOf('ui-datepicker-next') && T(this).addClass('ui-datepicker-next-hover'));
    }
    function d(e, t) {
      for (var i in (T.extend(e, t), t)) null == t[i] && (e[i] = t[i]);
      return e;
    }
    var o;
    return (
      T.extend(T.ui, { datepicker: { version: '1.12.1' } }),
      T.extend(e.prototype, {
        markerClassName: 'hasDatepicker',
        maxRows: 4,
        _widgetDatepicker: function () {
          return this.dpDiv;
        },
        setDefaults: function (e) {
          return d(this._defaults, e || {}), this;
        },
        _attachDatepicker: function (e, t) {
          var i, n, r;
          (n = 'div' === (i = e.nodeName.toLowerCase()) || 'span' === i),
            e.id || ((this.uuid += 1), (e.id = 'dp' + this.uuid)),
            ((r = this._newInst(T(e), n)).settings = T.extend({}, t || {})),
            'input' === i ? this._connectDatepicker(e, r) : n && this._inlineDatepicker(e, r);
        },
        _newInst: function (e, t) {
          return {
            id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1'),
            input: e,
            selectedDay: 0,
            selectedMonth: 0,
            selectedYear: 0,
            drawMonth: 0,
            drawYear: 0,
            inline: t,
            dpDiv: t ? i(T("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv,
          };
        },
        _connectDatepicker: function (e, t) {
          var i = T(e);
          (t.append = T([])),
            (t.trigger = T([])),
            i.hasClass(this.markerClassName) ||
              (this._attachments(i, t),
              i.addClass(this.markerClassName).on('keydown', this._doKeyDown).on('keypress', this._doKeyPress).on('keyup', this._doKeyUp),
              this._autoSize(t),
              T.data(e, 'datepicker', t),
              t.settings.disabled && this._disableDatepicker(e));
        },
        _attachments: function (e, t) {
          var i,
            n,
            r,
            a = this._get(t, 'appendText'),
            s = this._get(t, 'isRTL');
          t.append && t.append.remove(),
            a && ((t.append = T("<span class='" + this._appendClass + "'>" + a + '</span>')), e[s ? 'before' : 'after'](t.append)),
            e.off('focus', this._showDatepicker),
            t.trigger && t.trigger.remove(),
            ('focus' !== (i = this._get(t, 'showOn')) && 'both' !== i) || e.on('focus', this._showDatepicker),
            ('button' !== i && 'both' !== i) ||
              ((n = this._get(t, 'buttonText')),
              (r = this._get(t, 'buttonImage')),
              (t.trigger = T(
                this._get(t, 'buttonImageOnly')
                  ? T('<img/>').addClass(this._triggerClass).attr({ src: r, alt: n, title: n })
                  : T("<button type='button'></button>")
                      .addClass(this._triggerClass)
                      .html(r ? T('<img/>').attr({ src: r, alt: n, title: n }) : n)
              )),
              e[s ? 'before' : 'after'](t.trigger),
              t.trigger.on('click', function () {
                return (
                  T.datepicker._datepickerShowing && T.datepicker._lastInput === e[0]
                    ? T.datepicker._hideDatepicker()
                    : (T.datepicker._datepickerShowing && T.datepicker._lastInput !== e[0] && T.datepicker._hideDatepicker(), T.datepicker._showDatepicker(e[0])),
                  !1
                );
              }));
        },
        _autoSize: function (e) {
          if (this._get(e, 'autoSize') && !e.inline) {
            var t,
              i,
              n,
              r,
              a = new Date(2009, 11, 20),
              s = this._get(e, 'dateFormat');
            s.match(/[DM]/) &&
              ((t = function (e) {
                for (r = n = i = 0; r < e.length; r++) e[r].length > i && ((i = e[r].length), (n = r));
                return n;
              }),
              a.setMonth(t(this._get(e, s.match(/MM/) ? 'monthNames' : 'monthNamesShort'))),
              a.setDate(t(this._get(e, s.match(/DD/) ? 'dayNames' : 'dayNamesShort')) + 20 - a.getDay())),
              e.input.attr('size', this._formatDate(e, a).length);
          }
        },
        _inlineDatepicker: function (e, t) {
          var i = T(e);
          i.hasClass(this.markerClassName) ||
            (i.addClass(this.markerClassName).append(t.dpDiv),
            T.data(e, 'datepicker', t),
            this._setDate(t, this._getDefaultDate(t), !0),
            this._updateDatepicker(t),
            this._updateAlternate(t),
            t.settings.disabled && this._disableDatepicker(e),
            t.dpDiv.css('display', 'block'));
        },
        _dialogDatepicker: function (e, t, i, n, r) {
          var a,
            s,
            o,
            l,
            c,
            u = this._dialogInst;
          return (
            u ||
              ((this.uuid += 1),
              (a = 'dp' + this.uuid),
              (this._dialogInput = T("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>")),
              this._dialogInput.on('keydown', this._doKeyDown),
              T('body').append(this._dialogInput),
              ((u = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}),
              T.data(this._dialogInput[0], 'datepicker', u)),
            d(u.settings, n || {}),
            (t = t && t.constructor === Date ? this._formatDate(u, t) : t),
            this._dialogInput.val(t),
            (this._pos = r ? (r.length ? r : [r.pageX, r.pageY]) : null),
            this._pos ||
              ((s = document.documentElement.clientWidth),
              (o = document.documentElement.clientHeight),
              (l = document.documentElement.scrollLeft || document.body.scrollLeft),
              (c = document.documentElement.scrollTop || document.body.scrollTop),
              (this._pos = [s / 2 - 100 + l, o / 2 - 150 + c])),
            this._dialogInput.css('left', this._pos[0] + 20 + 'px').css('top', this._pos[1] + 'px'),
            (u.settings.onSelect = i),
            (this._inDialog = !0),
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            T.blockUI && T.blockUI(this.dpDiv),
            T.data(this._dialogInput[0], 'datepicker', u),
            this
          );
        },
        _destroyDatepicker: function (e) {
          var t,
            i = T(e),
            n = T.data(e, 'datepicker');
          i.hasClass(this.markerClassName) &&
            ((t = e.nodeName.toLowerCase()),
            T.removeData(e, 'datepicker'),
            'input' === t
              ? (n.append.remove(),
                n.trigger.remove(),
                i
                  .removeClass(this.markerClassName)
                  .off('focus', this._showDatepicker)
                  .off('keydown', this._doKeyDown)
                  .off('keypress', this._doKeyPress)
                  .off('keyup', this._doKeyUp))
              : ('div' !== t && 'span' !== t) || i.removeClass(this.markerClassName).empty(),
            o === n && (o = null));
        },
        _enableDatepicker: function (t) {
          var e,
            i,
            n = T(t),
            r = T.data(t, 'datepicker');
          n.hasClass(this.markerClassName) &&
            ('input' === (e = t.nodeName.toLowerCase())
              ? ((t.disabled = !1),
                r.trigger
                  .filter('button')
                  .each(function () {
                    this.disabled = !1;
                  })
                  .end()
                  .filter('img')
                  .css({ opacity: '1.0', cursor: '' }))
              : ('div' !== e && 'span' !== e) ||
                ((i = n.children('.' + this._inlineClass)).children().removeClass('ui-state-disabled'),
                i.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !1)),
            (this._disabledInputs = T.map(this._disabledInputs, function (e) {
              return e === t ? null : e;
            })));
        },
        _disableDatepicker: function (t) {
          var e,
            i,
            n = T(t),
            r = T.data(t, 'datepicker');
          n.hasClass(this.markerClassName) &&
            ('input' === (e = t.nodeName.toLowerCase())
              ? ((t.disabled = !0),
                r.trigger
                  .filter('button')
                  .each(function () {
                    this.disabled = !0;
                  })
                  .end()
                  .filter('img')
                  .css({ opacity: '0.5', cursor: 'default' }))
              : ('div' !== e && 'span' !== e) ||
                ((i = n.children('.' + this._inlineClass)).children().addClass('ui-state-disabled'),
                i.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !0)),
            (this._disabledInputs = T.map(this._disabledInputs, function (e) {
              return e === t ? null : e;
            })),
            (this._disabledInputs[this._disabledInputs.length] = t));
        },
        _isDisabledDatepicker: function (e) {
          if (!e) return !1;
          for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] === e) return !0;
          return !1;
        },
        _getInst: function (e) {
          try {
            return T.data(e, 'datepicker');
          } catch (t) {
            throw 'Missing instance data for this datepicker';
          }
        },
        _optionDatepicker: function (e, t, i) {
          var n,
            r,
            a,
            s,
            o = this._getInst(e);
          if (2 === arguments.length && 'string' == typeof t)
            return 'defaults' === t ? T.extend({}, T.datepicker._defaults) : o ? ('all' === t ? T.extend({}, o.settings) : this._get(o, t)) : null;
          (n = t || {}),
            'string' == typeof t && ((n = {})[t] = i),
            o &&
              (this._curInst === o && this._hideDatepicker(),
              (r = this._getDateDatepicker(e, !0)),
              (a = this._getMinMaxDate(o, 'min')),
              (s = this._getMinMaxDate(o, 'max')),
              d(o.settings, n),
              null !== a && n.dateFormat !== undefined && n.minDate === undefined && (o.settings.minDate = this._formatDate(o, a)),
              null !== s && n.dateFormat !== undefined && n.maxDate === undefined && (o.settings.maxDate = this._formatDate(o, s)),
              'disabled' in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)),
              this._attachments(T(e), o),
              this._autoSize(o),
              this._setDate(o, r),
              this._updateAlternate(o),
              this._updateDatepicker(o));
        },
        _changeDatepicker: function (e, t, i) {
          this._optionDatepicker(e, t, i);
        },
        _refreshDatepicker: function (e) {
          var t = this._getInst(e);
          t && this._updateDatepicker(t);
        },
        _setDateDatepicker: function (e, t) {
          var i = this._getInst(e);
          i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i));
        },
        _getDateDatepicker: function (e, t) {
          var i = this._getInst(e);
          return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null;
        },
        _doKeyDown: function (e) {
          var t,
            i,
            n,
            r = T.datepicker._getInst(e.target),
            a = !0,
            s = r.dpDiv.is('.ui-datepicker-rtl');
          if (((r._keyEvent = !0), T.datepicker._datepickerShowing))
            switch (e.keyCode) {
              case 9:
                T.datepicker._hideDatepicker(), (a = !1);
                break;
              case 13:
                return (
                  (n = T('td.' + T.datepicker._dayOverClass + ':not(.' + T.datepicker._currentClass + ')', r.dpDiv))[0] &&
                    T.datepicker._selectDay(e.target, r.selectedMonth, r.selectedYear, n[0]),
                  (t = T.datepicker._get(r, 'onSelect')) ? ((i = T.datepicker._formatDate(r)), t.apply(r.input ? r.input[0] : null, [i, r])) : T.datepicker._hideDatepicker(),
                  !1
                );
              case 27:
                T.datepicker._hideDatepicker();
                break;
              case 33:
                T.datepicker._adjustDate(e.target, e.ctrlKey ? -T.datepicker._get(r, 'stepBigMonths') : -T.datepicker._get(r, 'stepMonths'), 'M');
                break;
              case 34:
                T.datepicker._adjustDate(e.target, e.ctrlKey ? +T.datepicker._get(r, 'stepBigMonths') : +T.datepicker._get(r, 'stepMonths'), 'M');
                break;
              case 35:
                (e.ctrlKey || e.metaKey) && T.datepicker._clearDate(e.target), (a = e.ctrlKey || e.metaKey);
                break;
              case 36:
                (e.ctrlKey || e.metaKey) && T.datepicker._gotoToday(e.target), (a = e.ctrlKey || e.metaKey);
                break;
              case 37:
                (e.ctrlKey || e.metaKey) && T.datepicker._adjustDate(e.target, s ? 1 : -1, 'D'),
                  (a = e.ctrlKey || e.metaKey),
                  e.originalEvent.altKey && T.datepicker._adjustDate(e.target, e.ctrlKey ? -T.datepicker._get(r, 'stepBigMonths') : -T.datepicker._get(r, 'stepMonths'), 'M');
                break;
              case 38:
                (e.ctrlKey || e.metaKey) && T.datepicker._adjustDate(e.target, -7, 'D'), (a = e.ctrlKey || e.metaKey);
                break;
              case 39:
                (e.ctrlKey || e.metaKey) && T.datepicker._adjustDate(e.target, s ? -1 : 1, 'D'),
                  (a = e.ctrlKey || e.metaKey),
                  e.originalEvent.altKey && T.datepicker._adjustDate(e.target, e.ctrlKey ? +T.datepicker._get(r, 'stepBigMonths') : +T.datepicker._get(r, 'stepMonths'), 'M');
                break;
              case 40:
                (e.ctrlKey || e.metaKey) && T.datepicker._adjustDate(e.target, 7, 'D'), (a = e.ctrlKey || e.metaKey);
                break;
              default:
                a = !1;
            }
          else 36 === e.keyCode && e.ctrlKey ? T.datepicker._showDatepicker(this) : (a = !1);
          a && (e.preventDefault(), e.stopPropagation());
        },
        _doKeyPress: function (e) {
          var t,
            i,
            n = T.datepicker._getInst(e.target);
          if (T.datepicker._get(n, 'constrainInput'))
            return (
              (t = T.datepicker._possibleChars(T.datepicker._get(n, 'dateFormat'))),
              (i = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode)),
              e.ctrlKey || e.metaKey || i < ' ' || !t || -1 < t.indexOf(i)
            );
        },
        _doKeyUp: function (e) {
          var t = T.datepicker._getInst(e.target);
          if (t.input.val() !== t.lastVal)
            try {
              T.datepicker.parseDate(T.datepicker._get(t, 'dateFormat'), t.input ? t.input.val() : null, T.datepicker._getFormatConfig(t)) &&
                (T.datepicker._setDateFromField(t), T.datepicker._updateAlternate(t), T.datepicker._updateDatepicker(t));
            } catch (i) {}
          return !0;
        },
        _showDatepicker: function (e) {
          var t, i, n, r, a, s, o;
          ('input' !== (e = e.target || e).nodeName.toLowerCase() && (e = T('input', e.parentNode)[0]), T.datepicker._isDisabledDatepicker(e) || T.datepicker._lastInput === e) ||
            ((t = T.datepicker._getInst(e)),
            T.datepicker._curInst &&
              T.datepicker._curInst !== t &&
              (T.datepicker._curInst.dpDiv.stop(!0, !0), t && T.datepicker._datepickerShowing && T.datepicker._hideDatepicker(T.datepicker._curInst.input[0])),
            !1 !== (n = (i = T.datepicker._get(t, 'beforeShow')) ? i.apply(e, [e, t]) : {}) &&
              (d(t.settings, n),
              (t.lastVal = null),
              (T.datepicker._lastInput = e),
              T.datepicker._setDateFromField(t),
              T.datepicker._inDialog && (e.value = ''),
              T.datepicker._pos || ((T.datepicker._pos = T.datepicker._findPos(e)), (T.datepicker._pos[1] += e.offsetHeight)),
              (r = !1),
              T(e)
                .parents()
                .each(function () {
                  return !(r |= 'fixed' === T(this).css('position'));
                }),
              (a = { left: T.datepicker._pos[0], top: T.datepicker._pos[1] }),
              (T.datepicker._pos = null),
              t.dpDiv.empty(),
              t.dpDiv.css({
                position: 'absolute',
                display: 'block',
                top: '-1000px',
              }),
              T.datepicker._updateDatepicker(t),
              (a = T.datepicker._checkOffset(t, a, r)),
              t.dpDiv.css({ position: T.datepicker._inDialog && T.blockUI ? 'static' : r ? 'fixed' : 'absolute', display: 'none', left: a.left + 'px', top: a.top + 'px' }),
              t.inline ||
                ((s = T.datepicker._get(t, 'showAnim')),
                (o = T.datepicker._get(t, 'duration')),
                t.dpDiv.css('z-index', l(T(e)) + 1),
                (T.datepicker._datepickerShowing = !0),
                T.effects && T.effects.effect[s] ? t.dpDiv.show(s, T.datepicker._get(t, 'showOptions'), o) : t.dpDiv[s || 'show'](s ? o : null),
                T.datepicker._shouldFocusInput(t) && t.input.trigger('focus'),
                (T.datepicker._curInst = t))));
        },
        _updateDatepicker: function (e) {
          (this.maxRows = 4), (o = e).dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
          var t,
            i = this._getNumberOfMonths(e),
            n = i[1],
            r = 17,
            a = e.dpDiv.find('.' + this._dayOverClass + ' a');
          0 < a.length && s.apply(a.get(0)),
            e.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width(''),
            1 < n && e.dpDiv.addClass('ui-datepicker-multi-' + n).css('width', r * n + 'em'),
            e.dpDiv[(1 !== i[0] || 1 !== i[1] ? 'add' : 'remove') + 'Class']('ui-datepicker-multi'),
            e.dpDiv[(this._get(e, 'isRTL') ? 'add' : 'remove') + 'Class']('ui-datepicker-rtl'),
            e === T.datepicker._curInst && T.datepicker._datepickerShowing && T.datepicker._shouldFocusInput(e) && e.input.trigger('focus'),
            e.yearshtml &&
              ((t = e.yearshtml),
              setTimeout(function () {
                t === e.yearshtml && e.yearshtml && e.dpDiv.find('select.ui-datepicker-year:first').replaceWith(e.yearshtml), (t = e.yearshtml = null);
              }, 0));
        },
        _shouldFocusInput: function (e) {
          return e.input && e.input.is(':visible') && !e.input.is(':disabled') && !e.input.is(':focus');
        },
        _checkOffset: function (e, t, i) {
          var n = e.dpDiv.outerWidth(),
            r = e.dpDiv.outerHeight(),
            a = e.input ? e.input.outerWidth() : 0,
            s = e.input ? e.input.outerHeight() : 0,
            o = document.documentElement.clientWidth + (i ? 0 : T(document).scrollLeft()),
            l = document.documentElement.clientHeight + (i ? 0 : T(document).scrollTop());
          return (
            (t.left -= this._get(e, 'isRTL') ? n - a : 0),
            (t.left -= i && t.left === e.input.offset().left ? T(document).scrollLeft() : 0),
            (t.top -= i && t.top === e.input.offset().top + s ? T(document).scrollTop() : 0),
            (t.left -= Math.min(t.left, t.left + n > o && n < o ? Math.abs(t.left + n - o) : 0)),
            (t.top -= Math.min(t.top, t.top + r > l && r < l ? Math.abs(r + s) : 0)),
            t
          );
        },
        _findPos: function (e) {
          for (var t, i = this._getInst(e), n = this._get(i, 'isRTL'); e && ('hidden' === e.type || 1 !== e.nodeType || T.expr.filters.hidden(e)); )
            e = e[n ? 'previousSibling' : 'nextSibling'];
          return [(t = T(e).offset()).left, t.top];
        },
        _hideDatepicker: function (e) {
          var t,
            i,
            n,
            r,
            a = this._curInst;
          !a ||
            (e && a !== T.data(e, 'datepicker')) ||
            (this._datepickerShowing &&
              ((t = this._get(a, 'showAnim')),
              (i = this._get(a, 'duration')),
              (n = function () {
                T.datepicker._tidyDialog(a);
              }),
              T.effects && (T.effects.effect[t] || T.effects[t])
                ? a.dpDiv.hide(t, T.datepicker._get(a, 'showOptions'), i, n)
                : a.dpDiv['slideDown' === t ? 'slideUp' : 'fadeIn' === t ? 'fadeOut' : 'hide'](t ? i : null, n),
              t || n(),
              (this._datepickerShowing = !1),
              (r = this._get(a, 'onClose')) && r.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : '', a]),
              (this._lastInput = null),
              this._inDialog && (this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' }), T.blockUI && (T.unblockUI(), T('body').append(this.dpDiv))),
              (this._inDialog = !1)));
        },
        _tidyDialog: function (e) {
          e.dpDiv.removeClass(this._dialogClass).off('.ui-datepicker-calendar');
        },
        _checkExternalClick: function (e) {
          if (T.datepicker._curInst) {
            var t = T(e.target),
              i = T.datepicker._getInst(t[0]);
            ((t[0].id === T.datepicker._mainDivId ||
              0 !== t.parents('#' + T.datepicker._mainDivId).length ||
              t.hasClass(T.datepicker.markerClassName) ||
              t.closest('.' + T.datepicker._triggerClass).length ||
              !T.datepicker._datepickerShowing ||
              (T.datepicker._inDialog && T.blockUI)) &&
              (!t.hasClass(T.datepicker.markerClassName) || T.datepicker._curInst === i)) ||
              T.datepicker._hideDatepicker();
          }
        },
        _adjustDate: function (e, t, i) {
          var n = T(e),
            r = this._getInst(n[0]);
          this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(r, t + ('M' === i ? this._get(r, 'showCurrentAtPos') : 0), i), this._updateDatepicker(r));
        },
        _gotoToday: function (e) {
          var t,
            i = T(e),
            n = this._getInst(i[0]);
          this._get(n, 'gotoCurrent') && n.currentDay
            ? ((n.selectedDay = n.currentDay), (n.drawMonth = n.selectedMonth = n.currentMonth), (n.drawYear = n.selectedYear = n.currentYear))
            : ((t = new Date()), (n.selectedDay = t.getDate()), (n.drawMonth = n.selectedMonth = t.getMonth()), (n.drawYear = n.selectedYear = t.getFullYear())),
            this._notifyChange(n),
            this._adjustDate(i);
        },
        _selectMonthYear: function (e, t, i) {
          var n = T(e),
            r = this._getInst(n[0]);
          (r['selected' + ('M' === i ? 'Month' : 'Year')] = r['draw' + ('M' === i ? 'Month' : 'Year')] = parseInt(t.options[t.selectedIndex].value, 10)),
            this._notifyChange(r),
            this._adjustDate(n);
        },
        _selectDay: function (e, t, i, n) {
          var r,
            a = T(e);
          T(n).hasClass(this._unselectableClass) ||
            this._isDisabledDatepicker(a[0]) ||
            (((r = this._getInst(a[0])).selectedDay = r.currentDay = T('a', n).html()),
            (r.selectedMonth = r.currentMonth = t),
            (r.selectedYear = r.currentYear = i),
            this._selectDate(e, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear)));
        },
        _clearDate: function (e) {
          var t = T(e);
          this._selectDate(t, '');
        },
        _selectDate: function (e, t) {
          var i,
            n = T(e),
            r = this._getInst(n[0]);
          (t = null != t ? t : this._formatDate(r)),
            r.input && r.input.val(t),
            this._updateAlternate(r),
            (i = this._get(r, 'onSelect')) ? i.apply(r.input ? r.input[0] : null, [t, r]) : r.input && r.input.trigger('change'),
            r.inline
              ? this._updateDatepicker(r)
              : (this._hideDatepicker(), (this._lastInput = r.input[0]), 'object' != typeof r.input[0] && r.input.trigger('focus'), (this._lastInput = null));
        },
        _updateAlternate: function (e) {
          var t,
            i,
            n,
            r = this._get(e, 'altField');
          r && ((t = this._get(e, 'altFormat') || this._get(e, 'dateFormat')), (i = this._getDate(e)), (n = this.formatDate(t, i, this._getFormatConfig(e))), T(r).val(n));
        },
        noWeekends: function (e) {
          var t = e.getDay();
          return [0 < t && t < 6, ''];
        },
        iso8601Week: function (e) {
          var t,
            i = new Date(e.getTime());
          return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), (t = i.getTime()), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1;
        },
        parseDate: function (i, a, e) {
          if (null == i || null == a) throw 'Invalid arguments';
          if ('' === (a = 'object' == typeof a ? a.toString() : a + '')) return null;
          var n,
            t,
            r,
            s,
            o = 0,
            l = (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            c = 'string' != typeof l ? l : (new Date().getFullYear() % 100) + parseInt(l, 10),
            u = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
            d = (e ? e.dayNames : null) || this._defaults.dayNames,
            h = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
            p = (e ? e.monthNames : null) || this._defaults.monthNames,
            f = -1,
            m = -1,
            g = -1,
            v = -1,
            y = !1,
            b = function (e) {
              var t = n + 1 < i.length && i.charAt(n + 1) === e;
              return t && n++, t;
            },
            _ = function (e) {
              var t = b(e),
                i = '@' === e ? 14 : '!' === e ? 20 : 'y' === e && t ? 4 : 'o' === e ? 3 : 2,
                n = new RegExp('^\\d{' + ('y' === e ? i : 1) + ',' + i + '}'),
                r = a.substring(o).match(n);
              if (!r) throw 'Missing number at position ' + o;
              return (o += r[0].length), parseInt(r[0], 10);
            },
            w = function (e, t, i) {
              var n = -1,
                r = T.map(b(e) ? i : t, function (e, t) {
                  return [[t, e]];
                }).sort(function (e, t) {
                  return -(e[1].length - t[1].length);
                });
              if (
                (T.each(r, function (e, t) {
                  var i = t[1];
                  if (a.substr(o, i.length).toLowerCase() === i.toLowerCase()) return (n = t[0]), (o += i.length), !1;
                }),
                -1 !== n)
              )
                return n + 1;
              throw 'Unknown name at position ' + o;
            },
            x = function () {
              if (a.charAt(o) !== i.charAt(n)) throw 'Unexpected literal at position ' + o;
              o++;
            };
          for (n = 0; n < i.length; n++)
            if (y) "'" !== i.charAt(n) || b("'") ? x() : (y = !1);
            else
              switch (i.charAt(n)) {
                case 'd':
                  g = _('d');
                  break;
                case 'D':
                  w('D', u, d);
                  break;
                case 'o':
                  v = _('o');
                  break;
                case 'm':
                  m = _('m');
                  break;
                case 'M':
                  m = w('M', h, p);
                  break;
                case 'y':
                  f = _('y');
                  break;
                case '@':
                  (f = (s = new Date(_('@'))).getFullYear()), (m = s.getMonth() + 1), (g = s.getDate());
                  break;
                case '!':
                  (f = (s = new Date((_('!') - this._ticksTo1970) / 1e4)).getFullYear()), (m = s.getMonth() + 1), (g = s.getDate());
                  break;
                case "'":
                  b("'") ? x() : (y = !0);
                  break;
                default:
                  x();
              }
          if (o < a.length && ((r = a.substr(o)), !/^\s+/.test(r))) throw 'Extra/unparsed characters found in date: ' + r;
          if ((-1 === f ? (f = new Date().getFullYear()) : f < 100 && (f += new Date().getFullYear() - (new Date().getFullYear() % 100) + (f <= c ? 0 : -100)), -1 < v))
            for (m = 1, g = v; ; ) {
              if (g <= (t = this._getDaysInMonth(f, m - 1))) break;
              m++, (g -= t);
            }
          if ((s = this._daylightSavingAdjust(new Date(f, m - 1, g))).getFullYear() !== f || s.getMonth() + 1 !== m || s.getDate() !== g) throw 'Invalid date';
          return s;
        },
        ATOM: 'yy-mm-dd',
        COOKIE: 'D, dd M yy',
        ISO_8601: 'yy-mm-dd',
        RFC_822: 'D, d M y',
        RFC_850: 'DD, dd-M-y',
        RFC_1036: 'D, d M y',
        RFC_1123: 'D, d M yy',
        RFC_2822: 'D, d M yy',
        RSS: 'D, d M y',
        TICKS: '!',
        TIMESTAMP: '@',
        W3C: 'yy-mm-dd',
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function (i, e, t) {
          if (!e) return '';
          var n,
            r = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
            a = (t ? t.dayNames : null) || this._defaults.dayNames,
            s = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
            o = (t ? t.monthNames : null) || this._defaults.monthNames,
            l = function (e) {
              var t = n + 1 < i.length && i.charAt(n + 1) === e;
              return t && n++, t;
            },
            c = function (e, t, i) {
              var n = '' + t;
              if (l(e)) for (; n.length < i; ) n = '0' + n;
              return n;
            },
            u = function (e, t, i, n) {
              return l(e) ? n[t] : i[t];
            },
            d = '',
            h = !1;
          if (e)
            for (n = 0; n < i.length; n++)
              if (h) "'" !== i.charAt(n) || l("'") ? (d += i.charAt(n)) : (h = !1);
              else
                switch (i.charAt(n)) {
                  case 'd':
                    d += c('d', e.getDate(), 2);
                    break;
                  case 'D':
                    d += u('D', e.getDay(), r, a);
                    break;
                  case 'o':
                    d += c('o', Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                  case 'm':
                    d += c('m', e.getMonth() + 1, 2);
                    break;
                  case 'M':
                    d += u('M', e.getMonth(), s, o);
                    break;
                  case 'y':
                    d += l('y') ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? '0' : '') + (e.getFullYear() % 100);
                    break;
                  case '@':
                    d += e.getTime();
                    break;
                  case '!':
                    d += 1e4 * e.getTime() + this._ticksTo1970;
                    break;
                  case "'":
                    l("'") ? (d += "'") : (h = !0);
                    break;
                  default:
                    d += i.charAt(n);
                }
          return d;
        },
        _possibleChars: function (i) {
          var n,
            e = '',
            t = !1,
            r = function (e) {
              var t = n + 1 < i.length && i.charAt(n + 1) === e;
              return t && n++, t;
            };
          for (n = 0; n < i.length; n++)
            if (t) "'" !== i.charAt(n) || r("'") ? (e += i.charAt(n)) : (t = !1);
            else
              switch (i.charAt(n)) {
                case 'd':
                case 'm':
                case 'y':
                case '@':
                  e += '0123456789';
                  break;
                case 'D':
                case 'M':
                  return null;
                case "'":
                  r("'") ? (e += "'") : (t = !0);
                  break;
                default:
                  e += i.charAt(n);
              }
          return e;
        },
        _get: function (e, t) {
          return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t];
        },
        _setDateFromField: function (e, t) {
          if (e.input.val() !== e.lastVal) {
            var i = this._get(e, 'dateFormat'),
              n = (e.lastVal = e.input ? e.input.val() : null),
              r = this._getDefaultDate(e),
              a = r,
              s = this._getFormatConfig(e);
            try {
              a = this.parseDate(i, n, s) || r;
            } catch (o) {
              n = t ? '' : n;
            }
            (e.selectedDay = a.getDate()),
              (e.drawMonth = e.selectedMonth = a.getMonth()),
              (e.drawYear = e.selectedYear = a.getFullYear()),
              (e.currentDay = n ? a.getDate() : 0),
              (e.currentMonth = n ? a.getMonth() : 0),
              (e.currentYear = n ? a.getFullYear() : 0),
              this._adjustInstDate(e);
          }
        },
        _getDefaultDate: function (e) {
          return this._restrictMinMax(e, this._determineDate(e, this._get(e, 'defaultDate'), new Date()));
        },
        _determineDate: function (l, e, t) {
          var i = function (e) {
              var t = new Date();
              return t.setDate(t.getDate() + e), t;
            },
            n =
              null == e || '' === e
                ? t
                : 'string' == typeof e
                ? (function (e) {
                    try {
                      return T.datepicker.parseDate(T.datepicker._get(l, 'dateFormat'), e, T.datepicker._getFormatConfig(l));
                    } catch (o) {}
                    for (
                      var t = (e.toLowerCase().match(/^c/) ? T.datepicker._getDate(l) : null) || new Date(),
                        i = t.getFullYear(),
                        n = t.getMonth(),
                        r = t.getDate(),
                        a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        s = a.exec(e);
                      s;

                    ) {
                      switch (s[2] || 'd') {
                        case 'd':
                        case 'D':
                          r += parseInt(s[1], 10);
                          break;
                        case 'w':
                        case 'W':
                          r += 7 * parseInt(s[1], 10);
                          break;
                        case 'm':
                        case 'M':
                          (n += parseInt(s[1], 10)), (r = Math.min(r, T.datepicker._getDaysInMonth(i, n)));
                          break;
                        case 'y':
                        case 'Y':
                          (i += parseInt(s[1], 10)), (r = Math.min(r, T.datepicker._getDaysInMonth(i, n)));
                      }
                      s = a.exec(e);
                    }
                    return new Date(i, n, r);
                  })(e)
                : 'number' == typeof e
                ? isNaN(e)
                  ? t
                  : i(e)
                : new Date(e.getTime());
          return (n = n && 'Invalid Date' === n.toString() ? t : n) && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n);
        },
        _daylightSavingAdjust: function (e) {
          return e ? (e.setHours(12 < e.getHours() ? e.getHours() + 2 : 0), e) : null;
        },
        _setDate: function (e, t, i) {
          var n = !t,
            r = e.selectedMonth,
            a = e.selectedYear,
            s = this._restrictMinMax(e, this._determineDate(e, t, new Date()));
          (e.selectedDay = e.currentDay = s.getDate()),
            (e.drawMonth = e.selectedMonth = e.currentMonth = s.getMonth()),
            (e.drawYear = e.selectedYear = e.currentYear = s.getFullYear()),
            (r === e.selectedMonth && a === e.selectedYear) || i || this._notifyChange(e),
            this._adjustInstDate(e),
            e.input && e.input.val(n ? '' : this._formatDate(e));
        },
        _getDate: function (e) {
          return !e.currentYear || (e.input && '' === e.input.val()) ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        },
        _attachHandlers: function (e) {
          var t = this._get(e, 'stepMonths'),
            i = '#' + e.id.replace(/\\\\/g, '\\');
          e.dpDiv.find('[data-handler]').map(function () {
            var e = {
              prev: function () {
                T.datepicker._adjustDate(i, -t, 'M');
              },
              next: function () {
                T.datepicker._adjustDate(i, +t, 'M');
              },
              hide: function () {
                T.datepicker._hideDatepicker();
              },
              today: function () {
                T.datepicker._gotoToday(i);
              },
              selectDay: function () {
                return T.datepicker._selectDay(i, +this.getAttribute('data-month'), +this.getAttribute('data-year'), this), !1;
              },
              selectMonth: function () {
                return T.datepicker._selectMonthYear(i, this, 'M'), !1;
              },
              selectYear: function () {
                return T.datepicker._selectMonthYear(i, this, 'Y'), !1;
              },
            };
            T(this).on(this.getAttribute('data-event'), e[this.getAttribute('data-handler')]);
          });
        },
        _generateHTML: function (e) {
          var t,
            i,
            n,
            r,
            a,
            s,
            o,
            l,
            c,
            u,
            d,
            h,
            p,
            f,
            m,
            g,
            v,
            y,
            b,
            _,
            w,
            x,
            T,
            k,
            S,
            C,
            E,
            D,
            M,
            P,
            A,
            L,
            O,
            R,
            I,
            N,
            z,
            F,
            H,
            j = new Date(),
            $ = this._daylightSavingAdjust(new Date(j.getFullYear(), j.getMonth(), j.getDate())),
            B = this._get(e, 'isRTL'),
            q = this._get(e, 'showButtonPanel'),
            Y = this._get(e, 'hideIfNoPrevNext'),
            X = this._get(e, 'navigationAsDateFormat'),
            W = this._getNumberOfMonths(e),
            V = this._get(e, 'showCurrentAtPos'),
            G = this._get(e, 'stepMonths'),
            U = 1 !== W[0] || 1 !== W[1],
            K = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
            Q = this._getMinMaxDate(e, 'min'),
            J = this._getMinMaxDate(e, 'max'),
            Z = e.drawMonth - V,
            ee = e.drawYear;
          if ((Z < 0 && ((Z += 12), ee--), J))
            for (
              t = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - W[0] * W[1] + 1, J.getDate())), t = Q && t < Q ? Q : t;
              this._daylightSavingAdjust(new Date(ee, Z, 1)) > t;

            )
              --Z < 0 && ((Z = 11), ee--);
          for (
            e.drawMonth = Z,
              e.drawYear = ee,
              i = this._get(e, 'prevText'),
              i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(ee, Z - G, 1)), this._getFormatConfig(e)) : i,
              n = this._canAdjustMonth(e, -1, ee, Z)
                ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                  i +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (B ? 'e' : 'w') +
                  "'>" +
                  i +
                  '</span></a>'
                : Y
                ? ''
                : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                  i +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (B ? 'e' : 'w') +
                  "'>" +
                  i +
                  '</span></a>',
              r = this._get(e, 'nextText'),
              r = X ? this.formatDate(r, this._daylightSavingAdjust(new Date(ee, Z + G, 1)), this._getFormatConfig(e)) : r,
              a = this._canAdjustMonth(e, 1, ee, Z)
                ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                  r +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (B ? 'w' : 'e') +
                  "'>" +
                  r +
                  '</span></a>'
                : Y
                ? ''
                : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                  r +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (B ? 'w' : 'e') +
                  "'>" +
                  r +
                  '</span></a>',
              s = this._get(e, 'currentText'),
              o = this._get(e, 'gotoCurrent') && e.currentDay ? K : $,
              s = X ? this.formatDate(s, o, this._getFormatConfig(e)) : s,
              l = e.inline
                ? ''
                : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                  this._get(e, 'closeText') +
                  '</button>',
              c = q
                ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                  (B ? l : '') +
                  (this._isInRange(e, o)
                    ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                      s +
                      '</button>'
                    : '') +
                  (B ? '' : l) +
                  '</div>'
                : '',
              u = parseInt(this._get(e, 'firstDay'), 10),
              u = isNaN(u) ? 0 : u,
              d = this._get(e, 'showWeek'),
              h = this._get(e, 'dayNames'),
              p = this._get(e, 'dayNamesMin'),
              f = this._get(e, 'monthNames'),
              m = this._get(e, 'monthNamesShort'),
              g = this._get(e, 'beforeShowDay'),
              v = this._get(e, 'showOtherMonths'),
              y = this._get(e, 'selectOtherMonths'),
              b = this._getDefaultDate(e),
              _ = '',
              x = 0;
            x < W[0];
            x++
          ) {
            for (T = '', this.maxRows = 4, k = 0; k < W[1]; k++) {
              if (((S = this._daylightSavingAdjust(new Date(ee, Z, e.selectedDay))), (C = ' ui-corner-all'), (E = ''), U)) {
                if (((E += "<div class='ui-datepicker-group"), 1 < W[1]))
                  switch (k) {
                    case 0:
                      (E += ' ui-datepicker-group-first'), (C = ' ui-corner-' + (B ? 'right' : 'left'));
                      break;
                    case W[1] - 1:
                      (E += ' ui-datepicker-group-last'), (C = ' ui-corner-' + (B ? 'left' : 'right'));
                      break;
                    default:
                      (E += ' ui-datepicker-group-middle'), (C = '');
                  }
                E += "'>";
              }
              for (
                E +=
                  "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                  C +
                  "'>" +
                  (/all|left/.test(C) && 0 === x ? (B ? a : n) : '') +
                  (/all|right/.test(C) && 0 === x ? (B ? n : a) : '') +
                  this._generateMonthYearHeader(e, Z, ee, Q, J, 0 < x || 0 < k, f, m) +
                  "</div><table class='ui-datepicker-calendar'><thead><tr>",
                  D = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, 'weekHeader') + '</th>' : '',
                  w = 0;
                w < 7;
                w++
              )
                D += "<th scope='col'" + (5 <= (w + u + 6) % 7 ? " class='ui-datepicker-week-end'" : '') + "><span title='" + h[(M = (w + u) % 7)] + "'>" + p[M] + '</span></th>';
              for (
                E += D + '</tr></thead><tbody>',
                  P = this._getDaysInMonth(ee, Z),
                  ee === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, P)),
                  A = (this._getFirstDayOfMonth(ee, Z) - u + 7) % 7,
                  L = Math.ceil((A + P) / 7),
                  O = U && this.maxRows > L ? this.maxRows : L,
                  this.maxRows = O,
                  R = this._daylightSavingAdjust(new Date(ee, Z, 1 - A)),
                  I = 0;
                I < O;
                I++
              ) {
                for (E += '<tr>', N = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, 'calculateWeek')(R) + '</td>' : '', w = 0; w < 7; w++)
                  (z = g ? g.apply(e.input ? e.input[0] : null, [R]) : [!0, '']),
                    (H = ((F = R.getMonth() !== Z) && !y) || !z[0] || (Q && R < Q) || (J && J < R)),
                    (N +=
                      "<td class='" +
                      (5 <= (w + u + 6) % 7 ? ' ui-datepicker-week-end' : '') +
                      (F ? ' ui-datepicker-other-month' : '') +
                      ((R.getTime() === S.getTime() && Z === e.selectedMonth && e._keyEvent) || (b.getTime() === R.getTime() && b.getTime() === S.getTime())
                        ? ' ' + this._dayOverClass
                        : '') +
                      (H ? ' ' + this._unselectableClass + ' ui-state-disabled' : '') +
                      (F && !v ? '' : ' ' + z[1] + (R.getTime() === K.getTime() ? ' ' + this._currentClass : '') + (R.getTime() === $.getTime() ? ' ui-datepicker-today' : '')) +
                      "'" +
                      ((F && !v) || !z[2] ? '' : " title='" + z[2].replace(/'/g, '&#39;') + "'") +
                      (H ? '' : " data-handler='selectDay' data-event='click' data-month='" + R.getMonth() + "' data-year='" + R.getFullYear() + "'") +
                      '>' +
                      (F && !v
                        ? '&#xa0;'
                        : H
                        ? "<span class='ui-state-default'>" + R.getDate() + '</span>'
                        : "<a class='ui-state-default" +
                          (R.getTime() === $.getTime() ? ' ui-state-highlight' : '') +
                          (R.getTime() === K.getTime() ? ' ui-state-active' : '') +
                          (F ? ' ui-priority-secondary' : '') +
                          "' href='#'>" +
                          R.getDate() +
                          '</a>') +
                      '</td>'),
                    R.setDate(R.getDate() + 1),
                    (R = this._daylightSavingAdjust(R));
                E += N + '</tr>';
              }
              11 < ++Z && ((Z = 0), ee++), (T += E += '</tbody></table>' + (U ? '</div>' + (0 < W[0] && k === W[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : '') : ''));
            }
            _ += T;
          }
          return (_ += c), (e._keyEvent = !1), _;
        },
        _generateMonthYearHeader: function (e, t, i, n, r, a, s, o) {
          var l,
            c,
            u,
            d,
            h,
            p,
            f,
            m,
            g = this._get(e, 'changeMonth'),
            v = this._get(e, 'changeYear'),
            y = this._get(e, 'showMonthAfterYear'),
            b = "<div class='ui-datepicker-title'>",
            _ = '';
          if (a || !g) _ += "<span class='ui-datepicker-month'>" + s[t] + '</span>';
          else {
            for (
              l = n && n.getFullYear() === i, c = r && r.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0;
              u < 12;
              u++
            )
              (!l || u >= n.getMonth()) && (!c || u <= r.getMonth()) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : '') + '>' + o[u] + '</option>');
            _ += '</select>';
          }
          if ((y || (b += _ + (!a && g && v ? '' : '&#xa0;')), !e.yearshtml))
            if (((e.yearshtml = ''), a || !v)) b += "<span class='ui-datepicker-year'>" + i + '</span>';
            else {
              for (
                d = this._get(e, 'yearRange').split(':'),
                  h = new Date().getFullYear(),
                  f = (p = function (e) {
                    var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                    return isNaN(t) ? h : t;
                  })(d[0]),
                  m = Math.max(f, p(d[1] || '')),
                  f = n ? Math.max(f, n.getFullYear()) : f,
                  m = r ? Math.min(m, r.getFullYear()) : m,
                  e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                f <= m;
                f++
              )
                e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : '') + '>' + f + '</option>';
              (e.yearshtml += '</select>'), (b += e.yearshtml), (e.yearshtml = null);
            }
          return (b += this._get(e, 'yearSuffix')), y && (b += (!a && g && v ? '' : '&#xa0;') + _), (b += '</div>');
        },
        _adjustInstDate: function (e, t, i) {
          var n = e.selectedYear + ('Y' === i ? t : 0),
            r = e.selectedMonth + ('M' === i ? t : 0),
            a = Math.min(e.selectedDay, this._getDaysInMonth(n, r)) + ('D' === i ? t : 0),
            s = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, r, a)));
          (e.selectedDay = s.getDate()),
            (e.drawMonth = e.selectedMonth = s.getMonth()),
            (e.drawYear = e.selectedYear = s.getFullYear()),
            ('M' !== i && 'Y' !== i) || this._notifyChange(e);
        },
        _restrictMinMax: function (e, t) {
          var i = this._getMinMaxDate(e, 'min'),
            n = this._getMinMaxDate(e, 'max'),
            r = i && t < i ? i : t;
          return n && n < r ? n : r;
        },
        _notifyChange: function (e) {
          var t = this._get(e, 'onChangeMonthYear');
          t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e]);
        },
        _getNumberOfMonths: function (e) {
          var t = this._get(e, 'numberOfMonths');
          return null == t ? [1, 1] : 'number' == typeof t ? [1, t] : t;
        },
        _getMinMaxDate: function (e, t) {
          return this._determineDate(e, this._get(e, t + 'Date'), null);
        },
        _getDaysInMonth: function (e, t) {
          return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
        },
        _getFirstDayOfMonth: function (e, t) {
          return new Date(e, t, 1).getDay();
        },
        _canAdjustMonth: function (e, t, i, n) {
          var r = this._getNumberOfMonths(e),
            a = this._daylightSavingAdjust(new Date(i, n + (t < 0 ? t : r[0] * r[1]), 1));
          return t < 0 && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a);
        },
        _isInRange: function (e, t) {
          var i,
            n,
            r = this._getMinMaxDate(e, 'min'),
            a = this._getMinMaxDate(e, 'max'),
            s = null,
            o = null,
            l = this._get(e, 'yearRange');
          return (
            l &&
              ((i = l.split(':')),
              (n = new Date().getFullYear()),
              (s = parseInt(i[0], 10)),
              (o = parseInt(i[1], 10)),
              i[0].match(/[+\-].*/) && (s += n),
              i[1].match(/[+\-].*/) && (o += n)),
            (!r || t.getTime() >= r.getTime()) && (!a || t.getTime() <= a.getTime()) && (!s || t.getFullYear() >= s) && (!o || t.getFullYear() <= o)
          );
        },
        _getFormatConfig: function (e) {
          var t = this._get(e, 'shortYearCutoff');
          return {
            shortYearCutoff: (t = 'string' != typeof t ? t : (new Date().getFullYear() % 100) + parseInt(t, 10)),
            dayNamesShort: this._get(e, 'dayNamesShort'),
            dayNames: this._get(e, 'dayNames'),
            monthNamesShort: this._get(e, 'monthNamesShort'),
            monthNames: this._get(e, 'monthNames'),
          };
        },
        _formatDate: function (e, t, i, n) {
          t || ((e.currentDay = e.selectedDay), (e.currentMonth = e.selectedMonth), (e.currentYear = e.selectedYear));
          var r = t
            ? 'object' == typeof t
              ? t
              : this._daylightSavingAdjust(new Date(n, i, t))
            : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
          return this.formatDate(this._get(e, 'dateFormat'), r, this._getFormatConfig(e));
        },
      }),
      (T.fn.datepicker = function (e, t) {
        if (!this.length) return this;
        T.datepicker.initialized || (T(document).on('mousedown', T.datepicker._checkExternalClick), (T.datepicker.initialized = !0)),
          0 === T('#' + T.datepicker._mainDivId).length && T('body').append(T.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return 'string' != typeof e || ('isDisabled' !== e && 'getDate' !== e && 'widget' !== e)
          ? 'option' === e && 2 === arguments.length && 'string' == typeof t
            ? T.datepicker['_' + e + 'Datepicker'].apply(T.datepicker, [this[0]].concat(i))
            : this.each(function () {
                'string' == typeof e ? T.datepicker['_' + e + 'Datepicker'].apply(T.datepicker, [this].concat(i)) : T.datepicker._attachDatepicker(this, e);
              })
          : T.datepicker['_' + e + 'Datepicker'].apply(T.datepicker, [this[0]].concat(i));
      }),
      (T.datepicker = new e()),
      (T.datepicker.initialized = !1),
      (T.datepicker.uuid = new Date().getTime()),
      (T.datepicker.version = '1.12.1'),
      T.datepicker
    );
  }),
  (function (e) {
    'function' == typeof define && define.amd ? define(['../widgets/datepicker'], e) : e(jQuery.datepicker);
  })(function (e) {
    return (
      (e.regional.ja = {
        closeText: '\u9589\u3058\u308b',
        prevText: '&#x3C;\u524d',
        nextText: '\u6b21&#x3E;',
        currentText: '\u4eca\u65e5',
        monthNames: ['1\u6708', '2\u6708', '3\u6708', '4\u6708', '5\u6708', '6\u6708', '7\u6708', '8\u6708', '9\u6708', '10\u6708', '11\u6708', '12\u6708'],
        monthNamesShort: ['1\u6708', '2\u6708', '3\u6708', '4\u6708', '5\u6708', '6\u6708', '7\u6708', '8\u6708', '9\u6708', '10\u6708', '11\u6708', '12\u6708'],
        dayNames: ['\u65e5\u66dc\u65e5', '\u6708\u66dc\u65e5', '\u706b\u66dc\u65e5', '\u6c34\u66dc\u65e5', '\u6728\u66dc\u65e5', '\u91d1\u66dc\u65e5', '\u571f\u66dc\u65e5'],
        dayNamesShort: ['\u65e5', '\u6708', '\u706b', '\u6c34', '\u6728', '\u91d1', '\u571f'],
        dayNamesMin: ['\u65e5', '\u6708', '\u706b', '\u6c34', '\u6728', '\u91d1', '\u571f'],
        weekHeader: '\u9031',
        dateFormat: 'yy/mm/dd',
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !0,
        yearSuffix: '\u5e74',
      }),
      e.setDefaults(e.regional.ja),
      e.regional.ja
    );
  }),
  function () {
    var e = this;
    (function () {
      (function () {
        this.Rails = {
          linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
          buttonClickSelector: { selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])', exclude: 'form button' },
          inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
          formSubmitSelector: 'form',
          formInputClickSelector:
            'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
          formDisableSelector:
            'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
          formEnableSelector:
            'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
          fileInputSelector: 'input[name][type=file]:not([disabled])',
          linkDisableSelector: 'a[data-disable-with], a[data-disable]',
          buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',
        };
      }.call(this));
    }.call(e));
    var y = e.Rails;
    (function () {
      (function () {
        y.cspNonce = function () {
          var e;
          return (e = document.querySelector('meta[name=csp-nonce]')) && e.content;
        };
      }.call(this),
        function () {
          var n, i;
          (i =
            Element.prototype.matches ||
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
            (y.matches = function (e, t) {
              return null != t.exclude ? i.call(e, t.selector) && !i.call(e, t.exclude) : i.call(e, t);
            }),
            (n = '_ujsData'),
            (y.getData = function (e, t) {
              var i;
              return null != (i = e[n]) ? i[t] : void 0;
            }),
            (y.setData = function (e, t, i) {
              return null == e[n] && (e[n] = {}), (e[n][t] = i);
            }),
            (y.$ = function (e) {
              return Array.prototype.slice.call(document.querySelectorAll(e));
            });
        }.call(this),
        function () {
          var i, n, r;
          (i = y.$),
            (r = y.csrfToken = function () {
              var e;
              return (e = document.querySelector('meta[name=csrf-token]')) && e.content;
            }),
            (n = y.csrfParam = function () {
              var e;
              return (e = document.querySelector('meta[name=csrf-param]')) && e.content;
            }),
            (y.CSRFProtection = function (e) {
              var t;
              if (null != (t = r())) return e.setRequestHeader('X-CSRF-Token', t);
            }),
            (y.refreshCSRFTokens = function () {
              var e, t;
              if (((t = r()), (e = n()), null != t && null != e))
                return i('form input[name="' + e + '"]').forEach(function (e) {
                  return (e.value = t);
                });
            });
        }.call(this),
        function () {
          var r, t, a, i;
          (a = y.matches),
            'function' != typeof (r = window.CustomEvent) &&
              (((r = function (e, t) {
                var i;
                return (i = document.createEvent('CustomEvent')).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
              }).prototype = window.Event.prototype),
              (i = r.prototype.preventDefault),
              (r.prototype.preventDefault = function () {
                var e;
                return (
                  (e = i.call(this)),
                  this.cancelable &&
                    !this.defaultPrevented &&
                    Object.defineProperty(this, 'defaultPrevented', {
                      get: function () {
                        return !0;
                      },
                    }),
                  e
                );
              })),
            (t = y.fire = function (e, t, i) {
              var n;
              return (n = new r(t, { bubbles: !0, cancelable: !0, detail: i })), e.dispatchEvent(n), !n.defaultPrevented;
            }),
            (y.stopEverything = function (e) {
              return t(e.target, 'ujs:everythingStopped'), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
            }),
            (y.delegate = function (e, i, t, n) {
              return e.addEventListener(t, function (e) {
                var t;
                for (t = e.target; t instanceof Element && !a(t, i); ) t = t.parentNode;
                if (t instanceof Element && !1 === n.call(t, e)) return e.preventDefault(), e.stopPropagation();
              });
            });
        }.call(this),
        function () {
          var t, n, e, a, r, s;
          (a = y.cspNonce),
            (n = y.CSRFProtection),
            y.fire,
            (t = {
              '*': '*/*',
              text: 'text/plain',
              html: 'text/html',
              xml: 'application/xml, text/xml',
              json: 'application/json, text/javascript',
              script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
            }),
            (y.ajax = function (i) {
              var n;
              return (
                (i = r(i)),
                (n = e(i, function () {
                  var e, t;
                  return (
                    (t = s(null != (e = n.response) ? e : n.responseText, n.getResponseHeader('Content-Type'))),
                    2 === Math.floor(n.status / 100)
                      ? 'function' == typeof i.success && i.success(t, n.statusText, n)
                      : 'function' == typeof i.error && i.error(t, n.statusText, n),
                    'function' == typeof i.complete ? i.complete(n, n.statusText) : void 0
                  );
                })),
                !(null != i.beforeSend && !i.beforeSend(n, i)) && (n.readyState === XMLHttpRequest.OPENED ? n.send(i.data) : void 0)
              );
            }),
            (r = function (e) {
              return (
                (e.url = e.url || location.href),
                (e.type = e.type.toUpperCase()),
                'GET' === e.type && e.data && (e.url.indexOf('?') < 0 ? (e.url += '?' + e.data) : (e.url += '&' + e.data)),
                null == t[e.dataType] && (e.dataType = '*'),
                (e.accept = t[e.dataType]),
                '*' !== e.dataType && (e.accept += ', */*; q=0.01'),
                e
              );
            }),
            (e = function (e, t) {
              var i;
              return (
                (i = new XMLHttpRequest()).open(e.type, e.url, !0),
                i.setRequestHeader('Accept', e.accept),
                'string' == typeof e.data && i.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'),
                e.crossDomain || i.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
                n(i),
                (i.withCredentials = !!e.withCredentials),
                (i.onreadystatechange = function () {
                  if (i.readyState === XMLHttpRequest.DONE) return t(i);
                }),
                i
              );
            }),
            (s = function (e, t) {
              var i, n;
              if ('string' == typeof e && 'string' == typeof t)
                if (t.match(/\bjson\b/))
                  try {
                    e = JSON.parse(e);
                  } catch (r) {}
                else if (t.match(/\b(?:java|ecma)script\b/))
                  ((n = document.createElement('script')).nonce = a()), (n.text = e), document.head.appendChild(n).parentNode.removeChild(n);
                else if (t.match(/\b(xml|html|svg)\b/)) {
                  (i = new DOMParser()), (t = t.replace(/;.+/, ''));
                  try {
                    e = i.parseFromString(e, t);
                  } catch (r) {}
                }
              return e;
            }),
            (y.href = function (e) {
              return e.href;
            }),
            (y.isCrossDomain = function (e) {
              var t, i;
              ((t = document.createElement('a')).href = location.href), (i = document.createElement('a'));
              try {
                return (i.href = e), !(((!i.protocol || ':' === i.protocol) && !i.host) || t.protocol + '//' + t.host == i.protocol + '//' + i.host);
              } catch (n) {
                return n, !0;
              }
            });
        }.call(this),
        function () {
          var r, a;
          (r = y.matches),
            (a = function (e) {
              return Array.prototype.slice.call(e);
            }),
            (y.serializeElement = function (e, t) {
              var i, n;
              return (
                (i = [e]),
                r(e, 'form') && (i = a(e.elements)),
                (n = []),
                i.forEach(function (t) {
                  if (t.name && !t.disabled)
                    return r(t, 'select')
                      ? a(t.options).forEach(function (e) {
                          if (e.selected) return n.push({ name: t.name, value: e.value });
                        })
                      : t.checked || -1 === ['radio', 'checkbox', 'submit'].indexOf(t.type)
                      ? n.push({ name: t.name, value: t.value })
                      : void 0;
                }),
                t && n.push(t),
                n
                  .map(function (e) {
                    return null != e.name ? encodeURIComponent(e.name) + '=' + encodeURIComponent(e.value) : e;
                  })
                  .join('&')
              );
            }),
            (y.formElements = function (e, t) {
              return r(e, 'form')
                ? a(e.elements).filter(function (e) {
                    return r(e, t);
                  })
                : a(e.querySelectorAll(t));
            });
        }.call(this),
        function () {
          var t, a, i;
          (a = y.fire),
            (i = y.stopEverything),
            (y.handleConfirm = function (e) {
              if (!t(this)) return i(e);
            }),
            (t = function (e) {
              var t, i, n;
              if (!(n = e.getAttribute('data-confirm'))) return !0;
              if (((t = !1), a(e, 'confirm'))) {
                try {
                  t = confirm(n);
                } catch (r) {}
                i = a(e, 'confirm:complete', [t]);
              }
              return t && i;
            });
        }.call(this),
        function () {
          var i, n, r, a, s, o, t, l, c, u, d;
          (c = y.matches),
            (l = y.getData),
            (u = y.setData),
            (d = y.stopEverything),
            (t = y.formElements),
            (y.handleDisabledElement = function (e) {
              if (this.disabled) return d(e);
            }),
            (y.enableElement = function (e) {
              var t;
              return (
                (t = e instanceof Event ? e.target : e),
                c(t, y.linkDisableSelector) ? o(t) : c(t, y.buttonDisableSelector) || c(t, y.formEnableSelector) ? a(t) : c(t, y.formSubmitSelector) ? s(t) : void 0
              );
            }),
            (y.disableElement = function (e) {
              var t;
              return (
                (t = e instanceof Event ? e.target : e),
                c(t, y.linkDisableSelector) ? r(t) : c(t, y.buttonDisableSelector) || c(t, y.formDisableSelector) ? i(t) : c(t, y.formSubmitSelector) ? n(t) : void 0
              );
            }),
            (r = function (e) {
              var t;
              return (
                null != (t = e.getAttribute('data-disable-with')) && (u(e, 'ujs:enable-with', e.innerHTML), (e.innerHTML = t)),
                e.addEventListener('click', d),
                u(e, 'ujs:disabled', !0)
              );
            }),
            (o = function (e) {
              var t;
              return null != (t = l(e, 'ujs:enable-with')) && ((e.innerHTML = t), u(e, 'ujs:enable-with', null)), e.removeEventListener('click', d), u(e, 'ujs:disabled', null);
            }),
            (n = function (e) {
              return t(e, y.formDisableSelector).forEach(i);
            }),
            (i = function (e) {
              var t;
              return (
                null != (t = e.getAttribute('data-disable-with')) &&
                  (c(e, 'button') ? (u(e, 'ujs:enable-with', e.innerHTML), (e.innerHTML = t)) : (u(e, 'ujs:enable-with', e.value), (e.value = t))),
                (e.disabled = !0),
                u(e, 'ujs:disabled', !0)
              );
            }),
            (s = function (e) {
              return t(e, y.formEnableSelector).forEach(a);
            }),
            (a = function (e) {
              var t;
              return (
                null != (t = l(e, 'ujs:enable-with')) && (c(e, 'button') ? (e.innerHTML = t) : (e.value = t), u(e, 'ujs:enable-with', null)),
                (e.disabled = !1),
                u(e, 'ujs:disabled', null)
              );
            });
        }.call(this),
        function () {
          var l;
          (l = y.stopEverything),
            (y.handleMethod = function (e) {
              var t, i, n, r, a, s, o;
              if ((o = (s = this).getAttribute('data-method')))
                return (
                  (a = y.href(s)),
                  (i = y.csrfToken()),
                  (t = y.csrfParam()),
                  (n = document.createElement('form')),
                  (r = "<input name='_method' value='" + o + "' type='hidden' />"),
                  null == t || null == i || y.isCrossDomain(a) || (r += "<input name='" + t + "' value='" + i + "' type='hidden' />"),
                  (r += '<input type="submit" />'),
                  (n.method = 'post'),
                  (n.action = a),
                  (n.target = s.target),
                  (n.innerHTML = r),
                  (n.style.display = 'none'),
                  document.body.appendChild(n),
                  n.querySelector('[type="submit"]').click(),
                  l(e)
                );
            });
        }.call(this),
        function () {
          var l,
            c,
            u,
            d,
            h,
            p,
            f,
            m,
            g,
            v = [].slice;
          (p = y.matches),
            (u = y.getData),
            (m = y.setData),
            (c = y.fire),
            (g = y.stopEverything),
            (l = y.ajax),
            (d = y.isCrossDomain),
            (f = y.serializeElement),
            (h = function (e) {
              var t;
              return null != (t = e.getAttribute('data-remote')) && 'false' !== t;
            }),
            (y.handleRemote = function (e) {
              var t, i, n, r, a, s, o;
              return (
                !h((r = this)) ||
                (c(r, 'ajax:before')
                  ? ((o = r.getAttribute('data-with-credentials')),
                    (n = r.getAttribute('data-type') || 'script'),
                    p(r, y.formSubmitSelector)
                      ? ((t = u(r, 'ujs:submit-button')),
                        (a = u(r, 'ujs:submit-button-formmethod') || r.method),
                        (s = u(r, 'ujs:submit-button-formaction') || r.getAttribute('action') || location.href),
                        'GET' === a.toUpperCase() && (s = s.replace(/\?.*$/, '')),
                        'multipart/form-data' === r.enctype ? ((i = new FormData(r)), null != t && i.append(t.name, t.value)) : (i = f(r, t)),
                        m(r, 'ujs:submit-button', null),
                        m(r, 'ujs:submit-button-formmethod', null),
                        m(r, 'ujs:submit-button-formaction', null))
                      : p(r, y.buttonClickSelector) || p(r, y.inputChangeSelector)
                      ? ((a = r.getAttribute('data-method')), (s = r.getAttribute('data-url')), (i = f(r, r.getAttribute('data-params'))))
                      : ((a = r.getAttribute('data-method')), (s = y.href(r)), (i = r.getAttribute('data-params'))),
                    l({
                      type: a || 'GET',
                      url: s,
                      data: i,
                      dataType: n,
                      beforeSend: function (e, t) {
                        return c(r, 'ajax:beforeSend', [e, t]) ? c(r, 'ajax:send', [e]) : (c(r, 'ajax:stopped'), !1);
                      },
                      success: function () {
                        var e;
                        return (e = 1 <= arguments.length ? v.call(arguments, 0) : []), c(r, 'ajax:success', e);
                      },
                      error: function () {
                        var e;
                        return (e = 1 <= arguments.length ? v.call(arguments, 0) : []), c(r, 'ajax:error', e);
                      },
                      complete: function () {
                        var e;
                        return (e = 1 <= arguments.length ? v.call(arguments, 0) : []), c(r, 'ajax:complete', e);
                      },
                      crossDomain: d(s),
                      withCredentials: null != o && 'false' !== o,
                    }),
                    g(e))
                  : (c(r, 'ajax:stopped'), !1))
              );
            }),
            (y.formSubmitButtonClick = function () {
              var e, t;
              if ((t = (e = this).form))
                return (
                  e.name && m(t, 'ujs:submit-button', { name: e.name, value: e.value }),
                  m(t, 'ujs:formnovalidate-button', e.formNoValidate),
                  m(t, 'ujs:submit-button-formaction', e.getAttribute('formaction')),
                  m(t, 'ujs:submit-button-formmethod', e.getAttribute('formmethod'))
                );
            }),
            (y.handleMetaClick = function (e) {
              var t, i, n;
              if (((n = ((i = this).getAttribute('data-method') || 'GET').toUpperCase()), (t = i.getAttribute('data-params')), (e.metaKey || e.ctrlKey) && 'GET' === n && !t))
                return e.stopImmediatePropagation();
            });
        }.call(this),
        function () {
          var e, n, t, i, r, a, s, o, l, c, u, d, h, p;
          (a = y.fire),
            (t = y.delegate),
            (o = y.getData),
            (e = y.$),
            (p = y.refreshCSRFTokens),
            (n = y.CSRFProtection),
            (r = y.enableElement),
            (i = y.disableElement),
            (c = y.handleDisabledElement),
            (l = y.handleConfirm),
            (h = y.handleRemote),
            (s = y.formSubmitButtonClick),
            (u = y.handleMetaClick),
            (d = y.handleMethod),
            'undefined' == typeof jQuery ||
              null === jQuery ||
              null == jQuery.ajax ||
              jQuery.rails ||
              ((jQuery.rails = y),
              jQuery.ajaxPrefilter(function (e, t, i) {
                if (!e.crossDomain) return n(i);
              })),
            (y.start = function () {
              if (window._rails_loaded) throw new Error('rails-ujs has already been loaded!');
              return (
                window.addEventListener('pageshow', function () {
                  return (
                    e(y.formEnableSelector).forEach(function (e) {
                      if (o(e, 'ujs:disabled')) return r(e);
                    }),
                    e(y.linkDisableSelector).forEach(function (e) {
                      if (o(e, 'ujs:disabled')) return r(e);
                    })
                  );
                }),
                t(document, y.linkDisableSelector, 'ajax:complete', r),
                t(document, y.linkDisableSelector, 'ajax:stopped', r),
                t(document, y.buttonDisableSelector, 'ajax:complete', r),
                t(document, y.buttonDisableSelector, 'ajax:stopped', r),
                t(document, y.linkClickSelector, 'click', c),
                t(document, y.linkClickSelector, 'click', l),
                t(document, y.linkClickSelector, 'click', u),
                t(document, y.linkClickSelector, 'click', i),
                t(document, y.linkClickSelector, 'click', h),
                t(document, y.linkClickSelector, 'click', d),
                t(document, y.buttonClickSelector, 'click', c),
                t(document, y.buttonClickSelector, 'click', l),
                t(document, y.buttonClickSelector, 'click', i),
                t(document, y.buttonClickSelector, 'click', h),
                t(document, y.inputChangeSelector, 'change', c),
                t(document, y.inputChangeSelector, 'change', l),
                t(document, y.inputChangeSelector, 'change', h),
                t(document, y.formSubmitSelector, 'submit', c),
                t(document, y.formSubmitSelector, 'submit', l),
                t(document, y.formSubmitSelector, 'submit', h),
                t(document, y.formSubmitSelector, 'submit', function (e) {
                  return setTimeout(function () {
                    return i(e);
                  }, 13);
                }),
                t(document, y.formSubmitSelector, 'ajax:send', i),
                t(document, y.formSubmitSelector, 'ajax:complete', r),
                t(document, y.formInputClickSelector, 'click', c),
                t(document, y.formInputClickSelector, 'click', l),
                t(document, y.formInputClickSelector, 'click', s),
                document.addEventListener('DOMContentLoaded', p),
                (window._rails_loaded = !0)
              );
            }),
            window.Rails === y && a(document, 'rails:attachBindings') && y.start();
        }.call(this));
    }.call(this),
      'object' == typeof module && module.exports ? (module.exports = y) : 'function' == typeof define && define.amd && define(y));
  }.call(this),
  function () {
    this.Turbolinks = {
      supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener,
      visit: function (e, t) {
        return Turbolinks.controller.visit(e, t);
      },
      clearCache: function () {
        return Turbolinks.controller.clearCache();
      },
      setProgressBarDelay: function (e) {
        return Turbolinks.controller.setProgressBarDelay(e);
      },
    };
  }.call(this),
  function () {
    var i,
      n,
      l,
      e,
      t,
      r,
      a,
      s,
      o,
      c = [].slice;
    (Turbolinks.copyObject = function (e) {
      var t, i, n;
      for (t in ((i = {}), e)) (n = e[t]), (i[t] = n);
      return i;
    }),
      (Turbolinks.closest = function (e, t) {
        return i.call(e, t);
      }),
      (i =
        null != (o = document.documentElement.closest)
          ? o
          : function (e) {
              var t;
              for (t = this; t; ) {
                if (t.nodeType === Node.ELEMENT_NODE && n.call(t, e)) return t;
                t = t.parentNode;
              }
            }),
      (Turbolinks.defer = function (e) {
        return setTimeout(e, 1);
      }),
      (Turbolinks.throttle = function (i) {
        var n;
        return (
          (n = null),
          function () {
            var e, t;
            return (
              (e = 1 <= arguments.length ? c.call(arguments, 0) : []),
              null != n
                ? n
                : (n = requestAnimationFrame(
                    ((t = this),
                    function () {
                      return (n = null), i.apply(t, e);
                    })
                  ))
            );
          }
        );
      }),
      (Turbolinks.dispatch = function (e, t) {
        var i, n, r, a, s, o;
        return (
          (o = (s = null != t ? t : {}).target),
          (i = s.cancelable),
          (n = s.data),
          (r = document.createEvent('Events')).initEvent(e, !0, !0 === i),
          (r.data = null != n ? n : {}),
          r.cancelable &&
            !l &&
            ((a = r.preventDefault),
            (r.preventDefault = function () {
              return (
                this.defaultPrevented ||
                  Object.defineProperty(this, 'defaultPrevented', {
                    get: function () {
                      return !0;
                    },
                  }),
                a.call(this)
              );
            })),
          (null != o ? o : document).dispatchEvent(r),
          r
        );
      }),
      (s = document.createEvent('Events')).initEvent('test', !0, !0),
      s.preventDefault(),
      (l = s.defaultPrevented),
      (Turbolinks.match = function (e, t) {
        return n.call(e, t);
      }),
      (n =
        null != (t = null != (r = null != (a = (e = document.documentElement).matchesSelector) ? a : e.webkitMatchesSelector) ? r : e.msMatchesSelector)
          ? t
          : e.mozMatchesSelector),
      (Turbolinks.uuid = function () {
        var e, t, i;
        for (i = '', e = t = 1; t <= 36; e = ++t)
          i +=
            9 === e || 14 === e || 19 === e || 24 === e
              ? '-'
              : 15 === e
              ? '4'
              : 20 === e
              ? (Math.floor(4 * Math.random()) + 8).toString(16)
              : Math.floor(15 * Math.random()).toString(16);
        return i;
      });
  }.call(this),
  function () {
    Turbolinks.Location = (function () {
      function e(e) {
        var t, i;
        null == e && (e = ''),
          ((i = document.createElement('a')).href = e.toString()),
          (this.absoluteURL = i.href),
          (t = i.hash.length) < 2 ? (this.requestURL = this.absoluteURL) : ((this.requestURL = this.absoluteURL.slice(0, -t)), (this.anchor = i.hash.slice(1)));
      }
      var t, i, n, r;
      return (
        (e.wrap = function (e) {
          return e instanceof this ? e : new this(e);
        }),
        (e.prototype.getOrigin = function () {
          return this.absoluteURL.split('/', 3).join('/');
        }),
        (e.prototype.getPath = function () {
          var e, t;
          return null != (e = null != (t = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? t[1] : void 0) ? e : '/';
        }),
        (e.prototype.getPathComponents = function () {
          return this.getPath().split('/').slice(1);
        }),
        (e.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }),
        (e.prototype.getExtension = function () {
          var e, t;
          return null != (e = null != (t = this.getLastPathComponent().match(/\.[^.]*$/)) ? t[0] : void 0) ? e : '';
        }),
        (e.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }),
        (e.prototype.isPrefixedBy = function (e) {
          var t;
          return (t = i(e)), this.isEqualTo(e) || r(this.absoluteURL, t);
        }),
        (e.prototype.isEqualTo = function (e) {
          return this.absoluteURL === (null != e ? e.absoluteURL : void 0);
        }),
        (e.prototype.toCacheKey = function () {
          return this.requestURL;
        }),
        (e.prototype.toJSON = function () {
          return this.absoluteURL;
        }),
        (e.prototype.toString = function () {
          return this.absoluteURL;
        }),
        (e.prototype.valueOf = function () {
          return this.absoluteURL;
        }),
        (i = function (e) {
          return t(e.getOrigin() + e.getPath());
        }),
        (t = function (e) {
          return n(e, '/') ? e : e + '/';
        }),
        (r = function (e, t) {
          return e.slice(0, t.length) === t;
        }),
        (n = function (e, t) {
          return e.slice(-t.length) === t;
        }),
        e
      );
    })();
  }.call(this),
  function () {
    var n = function (e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    };
    Turbolinks.HttpRequest = (function () {
      function e(e, t, i) {
        (this.delegate = e),
          (this.requestCanceled = n(this.requestCanceled, this)),
          (this.requestTimedOut = n(this.requestTimedOut, this)),
          (this.requestFailed = n(this.requestFailed, this)),
          (this.requestLoaded = n(this.requestLoaded, this)),
          (this.requestProgressed = n(this.requestProgressed, this)),
          (this.url = Turbolinks.Location.wrap(t).requestURL),
          (this.referrer = Turbolinks.Location.wrap(i).absoluteURL),
          this.createXHR();
      }
      return (
        (e.NETWORK_FAILURE = 0),
        (e.TIMEOUT_FAILURE = -1),
        (e.timeout = 60),
        (e.prototype.send = function () {
          var e;
          return this.xhr && !this.sent
            ? (this.notifyApplicationBeforeRequestStart(),
              this.setProgress(0),
              this.xhr.send(),
              (this.sent = !0),
              'function' == typeof (e = this.delegate).requestStarted ? e.requestStarted() : void 0)
            : void 0;
        }),
        (e.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }),
        (e.prototype.requestProgressed = function (e) {
          return e.lengthComputable ? this.setProgress(e.loaded / e.total) : void 0;
        }),
        (e.prototype.requestLoaded = function () {
          return this.endRequest(
            ((t = this),
            function () {
              var e;
              return 200 <= (e = t.xhr.status) && e < 300
                ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader('Turbolinks-Location'))
                : ((t.failed = !0), t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            })
          );
          var t;
        }),
        (e.prototype.requestFailed = function () {
          return this.endRequest(
            ((e = this),
            function () {
              return (e.failed = !0), e.delegate.requestFailedWithStatusCode(e.constructor.NETWORK_FAILURE);
            })
          );
          var e;
        }),
        (e.prototype.requestTimedOut = function () {
          return this.endRequest(
            ((e = this),
            function () {
              return (e.failed = !0), e.delegate.requestFailedWithStatusCode(e.constructor.TIMEOUT_FAILURE);
            })
          );
          var e;
        }),
        (e.prototype.requestCanceled = function () {
          return this.endRequest();
        }),
        (e.prototype.notifyApplicationBeforeRequestStart = function () {
          return Turbolinks.dispatch('turbolinks:request-start', { data: { url: this.url, xhr: this.xhr } });
        }),
        (e.prototype.notifyApplicationAfterRequestEnd = function () {
          return Turbolinks.dispatch('turbolinks:request-end', { data: { url: this.url, xhr: this.xhr } });
        }),
        (e.prototype.createXHR = function () {
          return (
            (this.xhr = new XMLHttpRequest()),
            this.xhr.open('GET', this.url, !0),
            (this.xhr.timeout = 1e3 * this.constructor.timeout),
            this.xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml'),
            this.xhr.setRequestHeader('Turbolinks-Referrer', this.referrer),
            (this.xhr.onprogress = this.requestProgressed),
            (this.xhr.onload = this.requestLoaded),
            (this.xhr.onerror = this.requestFailed),
            (this.xhr.ontimeout = this.requestTimedOut),
            (this.xhr.onabort = this.requestCanceled)
          );
        }),
        (e.prototype.endRequest = function (e) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != e && e.call(this), this.destroy()) : void 0;
        }),
        (e.prototype.setProgress = function (e) {
          var t;
          return (this.progress = e), 'function' == typeof (t = this.delegate).requestProgressed ? t.requestProgressed(this.progress) : void 0;
        }),
        (e.prototype.destroy = function () {
          var e;
          return this.setProgress(1), 'function' == typeof (e = this.delegate).requestFinished && e.requestFinished(), (this.delegate = null), (this.xhr = null);
        }),
        e
      );
    })();
  }.call(this),
  function () {
    var i = function (e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    };
    Turbolinks.ProgressBar = (function () {
      function e() {
        (this.trickle = i(this.trickle, this)), (this.stylesheetElement = this.createStylesheetElement()), (this.progressElement = this.createProgressElement());
      }
      var t;
      return (
        (t = 300),
        (e.defaultCSS =
          '.turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width ' +
          t +
          'ms ease-out, opacity ' +
          t / 2 +
          'ms ' +
          t / 2 +
          'ms ease-in;\n  transform: translate3d(0, 0, 0);\n}'),
        (e.prototype.show = function () {
          return this.visible ? void 0 : ((this.visible = !0), this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }),
        (e.prototype.hide = function () {
          return this.visible && !this.hiding
            ? ((this.hiding = !0),
              this.fadeProgressElement(
                ((e = this),
                function () {
                  return e.uninstallProgressElement(), e.stopTrickling(), (e.visible = !1), (e.hiding = !1);
                })
              ))
            : void 0;
          var e;
        }),
        (e.prototype.setValue = function (e) {
          return (this.value = e), this.refresh();
        }),
        (e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }),
        (e.prototype.installProgressElement = function () {
          return (
            (this.progressElement.style.width = 0),
            (this.progressElement.style.opacity = 1),
            document.documentElement.insertBefore(this.progressElement, document.body),
            this.refresh()
          );
        }),
        (e.prototype.fadeProgressElement = function (e) {
          return (this.progressElement.style.opacity = 0), setTimeout(e, 1.5 * t);
        }),
        (e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }),
        (e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : (this.trickleInterval = setInterval(this.trickle, t));
        }),
        (e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), (this.trickleInterval = null);
        }),
        (e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }),
        (e.prototype.refresh = function () {
          return requestAnimationFrame(
            ((e = this),
            function () {
              return (e.progressElement.style.width = 10 + 90 * e.value + '%');
            })
          );
          var e;
        }),
        (e.prototype.createStylesheetElement = function () {
          var e;
          return ((e = document.createElement('style')).type = 'text/css'), (e.textContent = this.constructor.defaultCSS), e;
        }),
        (e.prototype.createProgressElement = function () {
          var e;
          return ((e = document.createElement('div')).className = 'turbolinks-progress-bar'), e;
        }),
        e
      );
    })();
  }.call(this),
  function () {
    var r = function (e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    };
    Turbolinks.BrowserAdapter = (function () {
      function e(e) {
        (this.controller = e), (this.showProgressBar = r(this.showProgressBar, this)), (this.progressBar = new Turbolinks.ProgressBar());
      }
      var i, n, t;
      return (
        (t = Turbolinks.HttpRequest),
        (i = t.NETWORK_FAILURE),
        (n = t.TIMEOUT_FAILURE),
        (e.prototype.visitProposedToLocationWithAction = function (e, t) {
          return this.controller.startVisitToLocationWithAction(e, t);
        }),
        (e.prototype.visitStarted = function (e) {
          return e.issueRequest(), e.changeHistory(), e.loadCachedSnapshot();
        }),
        (e.prototype.visitRequestStarted = function (e) {
          return this.progressBar.setValue(0), e.hasCachedSnapshot() || 'restore' !== e.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }),
        (e.prototype.visitRequestProgressed = function (e) {
          return this.progressBar.setValue(e.progress);
        }),
        (e.prototype.visitRequestCompleted = function (e) {
          return e.loadResponse();
        }),
        (e.prototype.visitRequestFailedWithStatusCode = function (e, t) {
          switch (t) {
            case i:
            case n:
              return this.reload();
            default:
              return e.loadResponse();
          }
        }),
        (e.prototype.visitRequestFinished = function () {
          return this.hideProgressBar();
        }),
        (e.prototype.visitCompleted = function (e) {
          return e.followRedirect();
        }),
        (e.prototype.pageInvalidated = function () {
          return this.reload();
        }),
        (e.prototype.showProgressBarAfterDelay = function () {
          return (this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay));
        }),
        (e.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }),
        (e.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }),
        (e.prototype.reload = function () {
          return window.location.reload();
        }),
        e
      );
    })();
  }.call(this),
  function () {
    var t = function (e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    };
    Turbolinks.History = (function () {
      function e(e) {
        (this.delegate = e), (this.onPageLoad = t(this.onPageLoad, this)), (this.onPopState = t(this.onPopState, this));
      }
      return (
        (e.prototype.start = function () {
          return this.started ? void 0 : (addEventListener('popstate', this.onPopState, !1), addEventListener('load', this.onPageLoad, !1), (this.started = !0));
        }),
        (e.prototype.stop = function () {
          return this.started ? (removeEventListener('popstate', this.onPopState, !1), removeEventListener('load', this.onPageLoad, !1), (this.started = !1)) : void 0;
        }),
        (e.prototype.push = function (e, t) {
          return (e = Turbolinks.Location.wrap(e)), this.update('push', e, t);
        }),
        (e.prototype.replace = function (e, t) {
          return (e = Turbolinks.Location.wrap(e)), this.update('replace', e, t);
        }),
        (e.prototype.onPopState = function (e) {
          var t, i, n, r;
          return this.shouldHandlePopState() && (r = null != (i = e.state) ? i.turbolinks : void 0)
            ? ((t = Turbolinks.Location.wrap(window.location)), (n = r.restorationIdentifier), this.delegate.historyPoppedToLocationWithRestorationIdentifier(t, n))
            : void 0;
        }),
        (e.prototype.onPageLoad = function () {
          return Turbolinks.defer(
            ((e = this),
            function () {
              return (e.pageLoaded = !0);
            })
          );
          var e;
        }),
        (e.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }),
        (e.prototype.pageIsLoaded = function () {
          return this.pageLoaded || 'complete' === document.readyState;
        }),
        (e.prototype.update = function (e, t, i) {
          var n;
          return (n = { turbolinks: { restorationIdentifier: i } }), history[e + 'State'](n, null, t);
        }),
        e
      );
    })();
  }.call(this),
  function () {
    Turbolinks.Snapshot = (function () {
      function e(e) {
        var t, i;
        (i = e.head), (t = e.body), (this.head = null != i ? i : document.createElement('head')), (this.body = null != t ? t : document.createElement('body'));
      }
      return (
        (e.wrap = function (e) {
          return e instanceof this ? e : this.fromHTML(e);
        }),
        (e.fromHTML = function (e) {
          var t;
          return ((t = document.createElement('html')).innerHTML = e), this.fromElement(t);
        }),
        (e.fromElement = function (e) {
          return new this({ head: e.querySelector('head'), body: e.querySelector('body') });
        }),
        (e.prototype.clone = function () {
          return new e({ head: this.head.cloneNode(!0), body: this.body.cloneNode(!0) });
        }),
        (e.prototype.getRootLocation = function () {
          var e, t;
          return (t = null != (e = this.getSetting('root')) ? e : '/'), new Turbolinks.Location(t);
        }),
        (e.prototype.getCacheControlValue = function () {
          return this.getSetting('cache-control');
        }),
        (e.prototype.getElementForAnchor = function (e) {
          try {
            return this.body.querySelector("[id='" + e + "'], a[name='" + e + "']");
          } catch (t) {}
        }),
        (e.prototype.hasAnchor = function (e) {
          return null != this.getElementForAnchor(e);
        }),
        (e.prototype.isPreviewable = function () {
          return 'no-preview' !== this.getCacheControlValue();
        }),
        (e.prototype.isCacheable = function () {
          return 'no-cache' !== this.getCacheControlValue();
        }),
        (e.prototype.isVisitable = function () {
          return 'reload' !== this.getSetting('visit-control');
        }),
        (e.prototype.getSetting = function (e) {
          var t, i;
          return null != (t = (i = this.head.querySelectorAll("meta[name='turbolinks-" + e + "']"))[i.length - 1]) ? t.getAttribute('content') : void 0;
        }),
        e
      );
    })();
  }.call(this),
  function () {
    var a = [].slice;
    Turbolinks.Renderer = (function () {
      function e() {}
      var i;
      return (
        (e.render = function (e, t) {
          var i, n, r;
          return (
            (n = e),
            (i = t),
            ((r = (function (e, t, i) {
              i.prototype = e.prototype;
              var n = new i(),
                r = e.apply(n, t);
              return Object(r) === r ? r : n;
            })(this, 3 <= arguments.length ? a.call(arguments, 2) : [], function () {})).delegate = n),
            r.render(i),
            r
          );
        }),
        (e.prototype.renderView = function (e) {
          return this.delegate.viewWillRender(this.newBody), e(), this.delegate.viewRendered(this.newBody);
        }),
        (e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }),
        (e.prototype.createScriptElement = function (e) {
          var t;
          return 'false' === e.getAttribute('data-turbolinks-eval') ? e : (((t = document.createElement('script')).textContent = e.textContent), (t.async = !1), i(t, e), t);
        }),
        (i = function (e, t) {
          var i, n, r, a, s, o, l;
          for (o = [], i = 0, n = (a = t.attributes).length; i < n; i++) (r = (s = a[i]).name), (l = s.value), o.push(e.setAttribute(r, l));
          return o;
        }),
        e
      );
    })();
  }.call(this),
  function () {
    Turbolinks.HeadDetails = (function () {
      function e(e) {
        var t, i, n, r, a, s;
        for (this.element = e, this.elements = {}, n = 0, a = (s = this.element.childNodes).length; n < a; n++)
          (i = s[n]).nodeType === Node.ELEMENT_NODE &&
            ((r = i.outerHTML), (null != (t = this.elements)[r] ? t[r] : (t[r] = { type: l(i), tracked: o(i), elements: [] })).elements.push(i));
      }
      var t, i, o, l;
      return (
        (e.prototype.hasElementWithKey = function (e) {
          return e in this.elements;
        }),
        (e.prototype.getTrackedElementSignature = function () {
          var i;
          return function () {
            var e, t;
            for (i in ((t = []), (e = this.elements))) e[i].tracked && t.push(i);
            return t;
          }
            .call(this)
            .join('');
        }),
        (e.prototype.getScriptElementsNotInDetails = function (e) {
          return this.getElementsMatchingTypeNotInDetails('script', e);
        }),
        (e.prototype.getStylesheetElementsNotInDetails = function (e) {
          return this.getElementsMatchingTypeNotInDetails('stylesheet', e);
        }),
        (e.prototype.getElementsMatchingTypeNotInDetails = function (e, t) {
          var i, n, r, a, s, o;
          for (n in ((s = []), (r = this.elements))) (o = (a = r[n]).type), (i = a.elements), o !== e || t.hasElementWithKey(n) || s.push(i[0]);
          return s;
        }),
        (e.prototype.getProvisionalElements = function () {
          var e, t, i, n, r, a, s;
          for (t in ((i = []), (n = this.elements)))
            (s = (r = n[t]).type), (a = r.tracked), (e = r.elements), null != s || a ? 1 < e.length && i.push.apply(i, e.slice(1)) : i.push.apply(i, e);
          return i;
        }),
        (l = function (e) {
          return t(e) ? 'script' : i(e) ? 'stylesheet' : void 0;
        }),
        (o = function (e) {
          return 'reload' === e.getAttribute('data-turbolinks-track');
        }),
        (t = function (e) {
          return 'script' === e.tagName.toLowerCase();
        }),
        (i = function (e) {
          var t;
          return 'style' === (t = e.tagName.toLowerCase()) || ('link' === t && 'stylesheet' === e.getAttribute('rel'));
        }),
        e
      );
    })();
  }.call(this),
  function () {
    var i = function (e, t) {
        function i() {
          this.constructor = e;
        }
        for (var n in t) r.call(t, n) && (e[n] = t[n]);
        return (i.prototype = t.prototype), (e.prototype = new i()), (e.__super__ = t.prototype), e;
      },
      r = {}.hasOwnProperty;
    Turbolinks.SnapshotRenderer = (function (e) {
      function t(e, t, i) {
        (this.currentSnapshot = e),
          (this.newSnapshot = t),
          (this.isPreview = i),
          (this.currentHeadDetails = new Turbolinks.HeadDetails(this.currentSnapshot.head)),
          (this.newHeadDetails = new Turbolinks.HeadDetails(this.newSnapshot.head)),
          (this.newBody = this.newSnapshot.body);
      }
      return (
        i(t, e),
        (t.prototype.render = function (e) {
          return this.shouldRender()
            ? (this.mergeHead(),
              this.renderView(
                ((t = this),
                function () {
                  return t.replaceBody(), t.isPreview || t.focusFirstAutofocusableElement(), e();
                })
              ))
            : this.invalidateView();
          var t;
        }),
        (t.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }),
        (t.prototype.replaceBody = function () {
          return this.activateBodyScriptElements(), this.importBodyPermanentElements(), this.assignNewBody();
        }),
        (t.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }),
        (t.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }),
        (t.prototype.copyNewHeadStylesheetElements = function () {
          var e, t, i, n, r;
          for (r = [], t = 0, i = (n = this.getNewHeadStylesheetElements()).length; t < i; t++) (e = n[t]), r.push(document.head.appendChild(e));
          return r;
        }),
        (t.prototype.copyNewHeadScriptElements = function () {
          var e, t, i, n, r;
          for (r = [], t = 0, i = (n = this.getNewHeadScriptElements()).length; t < i; t++) (e = n[t]), r.push(document.head.appendChild(this.createScriptElement(e)));
          return r;
        }),
        (t.prototype.removeCurrentHeadProvisionalElements = function () {
          var e, t, i, n, r;
          for (r = [], t = 0, i = (n = this.getCurrentHeadProvisionalElements()).length; t < i; t++) (e = n[t]), r.push(document.head.removeChild(e));
          return r;
        }),
        (t.prototype.copyNewHeadProvisionalElements = function () {
          var e, t, i, n, r;
          for (r = [], t = 0, i = (n = this.getNewHeadProvisionalElements()).length; t < i; t++) (e = n[t]), r.push(document.head.appendChild(e));
          return r;
        }),
        (t.prototype.importBodyPermanentElements = function () {
          var e, t, i, n, r, a;
          for (a = [], t = 0, i = (n = this.getNewBodyPermanentElements()).length; t < i; t++)
            (r = n[t]), (e = this.findCurrentBodyPermanentElement(r)) ? a.push(r.parentNode.replaceChild(e, r)) : a.push(void 0);
          return a;
        }),
        (t.prototype.activateBodyScriptElements = function () {
          var e, t, i, n, r, a;
          for (a = [], t = 0, i = (n = this.getNewBodyScriptElements()).length; t < i; t++) (r = n[t]), (e = this.createScriptElement(r)), a.push(r.parentNode.replaceChild(e, r));
          return a;
        }),
        (t.prototype.assignNewBody = function () {
          return (document.body = this.newBody);
        }),
        (t.prototype.focusFirstAutofocusableElement = function () {
          var e;
          return null != (e = this.findFirstAutofocusableElement()) ? e.focus() : void 0;
        }),
        (t.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }),
        (t.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }),
        (t.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }),
        (t.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }),
        (t.prototype.getNewBodyPermanentElements = function () {
          return this.newBody.querySelectorAll('[id][data-turbolinks-permanent]');
        }),
        (t.prototype.findCurrentBodyPermanentElement = function (e) {
          return document.body.querySelector('#' + e.id + '[data-turbolinks-permanent]');
        }),
        (t.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll('script');
        }),
        (t.prototype.findFirstAutofocusableElement = function () {
          return document.body.querySelector('[autofocus]');
        }),
        t
      );
    })(Turbolinks.Renderer);
  }.call(this),
  function () {
    var i = function (e, t) {
        function i() {
          this.constructor = e;
        }
        for (var n in t) r.call(t, n) && (e[n] = t[n]);
        return (i.prototype = t.prototype), (e.prototype = new i()), (e.__super__ = t.prototype), e;
      },
      r = {}.hasOwnProperty;
    Turbolinks.ErrorRenderer = (function (e) {
      function t(e) {
        this.html = e;
      }
      return (
        i(t, e),
        (t.prototype.render = function (e) {
          return this.renderView(
            ((t = this),
            function () {
              return t.replaceDocumentHTML(), t.activateBodyScriptElements(), e();
            })
          );
          var t;
        }),
        (t.prototype.replaceDocumentHTML = function () {
          return (document.documentElement.innerHTML = this.html);
        }),
        (t.prototype.activateBodyScriptElements = function () {
          var e, t, i, n, r, a;
          for (a = [], t = 0, i = (n = this.getScriptElements()).length; t < i; t++) (r = n[t]), (e = this.createScriptElement(r)), a.push(r.parentNode.replaceChild(e, r));
          return a;
        }),
        (t.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll('script');
        }),
        t
      );
    })(Turbolinks.Renderer);
  }.call(this),
  function () {
    Turbolinks.View = (function () {
      function e(e) {
        (this.delegate = e), (this.element = document.documentElement);
      }
      return (
        (e.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }),
        (e.prototype.getElementForAnchor = function (e) {
          return this.getSnapshot().getElementForAnchor(e);
        }),
        (e.prototype.getSnapshot = function () {
          return Turbolinks.Snapshot.fromElement(this.element);
        }),
        (e.prototype.render = function (e, t) {
          var i, n, r;
          return (r = e.snapshot), (i = e.error), (n = e.isPreview), this.markAsPreview(n), null != r ? this.renderSnapshot(r, n, t) : this.renderError(i, t);
        }),
        (e.prototype.markAsPreview = function (e) {
          return e ? this.element.setAttribute('data-turbolinks-preview', '') : this.element.removeAttribute('data-turbolinks-preview');
        }),
        (e.prototype.renderSnapshot = function (e, t, i) {
          return Turbolinks.SnapshotRenderer.render(this.delegate, i, this.getSnapshot(), Turbolinks.Snapshot.wrap(e), t);
        }),
        (e.prototype.renderError = function (e, t) {
          return Turbolinks.ErrorRenderer.render(this.delegate, t, e);
        }),
        e
      );
    })();
  }.call(this),
  function () {
    var t = function (e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    };
    Turbolinks.ScrollManager = (function () {
      function e(e) {
        (this.delegate = e), (this.onScroll = t(this.onScroll, this)), (this.onScroll = Turbolinks.throttle(this.onScroll));
      }
      return (
        (e.prototype.start = function () {
          return this.started ? void 0 : (addEventListener('scroll', this.onScroll, !1), this.onScroll(), (this.started = !0));
        }),
        (e.prototype.stop = function () {
          return this.started ? (removeEventListener('scroll', this.onScroll, !1), (this.started = !1)) : void 0;
        }),
        (e.prototype.scrollToElement = function (e) {
          return e.scrollIntoView();
        }),
        (e.prototype.scrollToPosition = function (e) {
          var t, i;
          return (t = e.x), (i = e.y), window.scrollTo(t, i);
        }),
        (e.prototype.onScroll = function () {
          return this.updatePosition({ x: window.pageXOffset, y: window.pageYOffset });
        }),
        (e.prototype.updatePosition = function (e) {
          var t;
          return (this.position = e), null != (t = this.delegate) ? t.scrollPositionChanged(this.position) : void 0;
        }),
        e
      );
    })();
  }.call(this),
  function () {
    Turbolinks.SnapshotCache = (function () {
      function e(e) {
        (this.size = e), (this.keys = []), (this.snapshots = {});
      }
      var n;
      return (
        (e.prototype.has = function (e) {
          return n(e) in this.snapshots;
        }),
        (e.prototype.get = function (e) {
          var t;
          if (this.has(e)) return (t = this.read(e)), this.touch(e), t;
        }),
        (e.prototype.put = function (e, t) {
          return this.write(e, t), this.touch(e), t;
        }),
        (e.prototype.read = function (e) {
          var t;
          return (t = n(e)), this.snapshots[t];
        }),
        (e.prototype.write = function (e, t) {
          var i;
          return (i = n(e)), (this.snapshots[i] = t);
        }),
        (e.prototype.touch = function (e) {
          var t, i;
          return (i = n(e)), -1 < (t = this.keys.indexOf(i)) && this.keys.splice(t, 1), this.keys.unshift(i), this.trim();
        }),
        (e.prototype.trim = function () {
          var e, t, i, n, r;
          for (r = [], e = 0, i = (n = this.keys.splice(this.size)).length; e < i; e++) (t = n[e]), r.push(delete this.snapshots[t]);
          return r;
        }),
        (n = function (e) {
          return Turbolinks.Location.wrap(e).toCacheKey();
        }),
        e
      );
    })();
  }.call(this),
  function () {
    var n = function (e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    };
    Turbolinks.Visit = (function () {
      function e(e, t, i) {
        (this.controller = e),
          (this.action = i),
          (this.performScroll = n(this.performScroll, this)),
          (this.identifier = Turbolinks.uuid()),
          (this.location = Turbolinks.Location.wrap(t)),
          (this.adapter = this.controller.adapter),
          (this.state = 'initialized'),
          (this.timingMetrics = {});
      }
      var i;
      return (
        (e.prototype.start = function () {
          return 'initialized' === this.state ? (this.recordTimingMetric('visitStart'), (this.state = 'started'), this.adapter.visitStarted(this)) : void 0;
        }),
        (e.prototype.cancel = function () {
          var e;
          return 'started' === this.state ? (null != (e = this.request) && e.cancel(), this.cancelRender(), (this.state = 'canceled')) : void 0;
        }),
        (e.prototype.complete = function () {
          var e;
          return 'started' === this.state
            ? (this.recordTimingMetric('visitEnd'),
              (this.state = 'completed'),
              'function' == typeof (e = this.adapter).visitCompleted && e.visitCompleted(this),
              this.controller.visitCompleted(this))
            : void 0;
        }),
        (e.prototype.fail = function () {
          var e;
          return 'started' === this.state ? ((this.state = 'failed'), 'function' == typeof (e = this.adapter).visitFailed ? e.visitFailed(this) : void 0) : void 0;
        }),
        (e.prototype.changeHistory = function () {
          var e, t;
          return this.historyChanged
            ? void 0
            : ((e = this.location.isEqualTo(this.referrer) ? 'replace' : this.action),
              (t = i(e)),
              this.controller[t](this.location, this.restorationIdentifier),
              (this.historyChanged = !0));
        }),
        (e.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request
            ? ((this.progress = 0), (this.request = new Turbolinks.HttpRequest(this, this.location, this.referrer)), this.request.send())
            : void 0;
        }),
        (e.prototype.getCachedSnapshot = function () {
          var e;
          return !(e = this.controller.getCachedSnapshotForLocation(this.location)) ||
            (null != this.location.anchor && !e.hasAnchor(this.location.anchor)) ||
            ('restore' !== this.action && !e.isPreviewable())
            ? void 0
            : e;
        }),
        (e.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }),
        (e.prototype.loadCachedSnapshot = function () {
          var t, i;
          return (i = this.getCachedSnapshot())
            ? ((t = this.shouldIssueRequest()),
              this.render(function () {
                var e;
                return (
                  this.cacheSnapshot(),
                  this.controller.render({ snapshot: i, isPreview: t }, this.performScroll),
                  'function' == typeof (e = this.adapter).visitRendered && e.visitRendered(this),
                  t ? void 0 : this.complete()
                );
              }))
            : void 0;
        }),
        (e.prototype.loadResponse = function () {
          return null != this.response
            ? this.render(function () {
                var e, t;
                return (
                  this.cacheSnapshot(),
                  this.request.failed
                    ? (this.controller.render({ error: this.response }, this.performScroll),
                      'function' == typeof (e = this.adapter).visitRendered && e.visitRendered(this),
                      this.fail())
                    : (this.controller.render({ snapshot: this.response }, this.performScroll),
                      'function' == typeof (t = this.adapter).visitRendered && t.visitRendered(this),
                      this.complete())
                );
              })
            : void 0;
        }),
        (e.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect
            ? ((this.location = this.redirectedToLocation),
              this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier),
              (this.followedRedirect = !0))
            : void 0;
        }),
        (e.prototype.requestStarted = function () {
          var e;
          return this.recordTimingMetric('requestStart'), 'function' == typeof (e = this.adapter).visitRequestStarted ? e.visitRequestStarted(this) : void 0;
        }),
        (e.prototype.requestProgressed = function (e) {
          var t;
          return (this.progress = e), 'function' == typeof (t = this.adapter).visitRequestProgressed ? t.visitRequestProgressed(this) : void 0;
        }),
        (e.prototype.requestCompletedWithResponse = function (e, t) {
          return (this.response = e), null != t && (this.redirectedToLocation = Turbolinks.Location.wrap(t)), this.adapter.visitRequestCompleted(this);
        }),
        (e.prototype.requestFailedWithStatusCode = function (e, t) {
          return (this.response = t), this.adapter.visitRequestFailedWithStatusCode(this, e);
        }),
        (e.prototype.requestFinished = function () {
          var e;
          return this.recordTimingMetric('requestEnd'), 'function' == typeof (e = this.adapter).visitRequestFinished ? e.visitRequestFinished(this) : void 0;
        }),
        (e.prototype.performScroll = function () {
          return this.scrolled
            ? void 0
            : ('restore' === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), (this.scrolled = !0));
        }),
        (e.prototype.scrollToRestoredPosition = function () {
          var e, t;
          return null != (e = null != (t = this.restorationData) ? t.scrollPosition : void 0) ? (this.controller.scrollToPosition(e), !0) : void 0;
        }),
        (e.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }),
        (e.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({ x: 0, y: 0 });
        }),
        (e.prototype.recordTimingMetric = function (e) {
          var t;
          return null != (t = this.timingMetrics)[e] ? t[e] : (t[e] = new Date().getTime());
        }),
        (e.prototype.getTimingMetrics = function () {
          return Turbolinks.copyObject(this.timingMetrics);
        }),
        (i = function (e) {
          switch (e) {
            case 'replace':
              return 'replaceHistoryWithLocationAndRestorationIdentifier';
            case 'advance':
            case 'restore':
              return 'pushHistoryWithLocationAndRestorationIdentifier';
          }
        }),
        (e.prototype.shouldIssueRequest = function () {
          return 'restore' !== this.action || !this.hasCachedSnapshot();
        }),
        (e.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), (this.snapshotCached = !0));
        }),
        (e.prototype.render = function (e) {
          return (
            this.cancelRender(),
            (this.frame = requestAnimationFrame(
              ((t = this),
              function () {
                return (t.frame = null), e.call(t);
              })
            ))
          );
          var t;
        }),
        (e.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }),
        e
      );
    })();
  }.call(this),
  function () {
    var t = function (e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    };
    Turbolinks.Controller = (function () {
      function e() {
        (this.clickBubbled = t(this.clickBubbled, this)),
          (this.clickCaptured = t(this.clickCaptured, this)),
          (this.pageLoaded = t(this.pageLoaded, this)),
          (this.history = new Turbolinks.History(this)),
          (this.view = new Turbolinks.View(this)),
          (this.scrollManager = new Turbolinks.ScrollManager(this)),
          (this.restorationData = {}),
          this.clearCache(),
          this.setProgressBarDelay(500);
      }
      return (
        (e.prototype.start = function () {
          return Turbolinks.supported && !this.started
            ? (addEventListener('click', this.clickCaptured, !0),
              addEventListener('DOMContentLoaded', this.pageLoaded, !1),
              this.scrollManager.start(),
              this.startHistory(),
              (this.started = !0),
              (this.enabled = !0))
            : void 0;
        }),
        (e.prototype.disable = function () {
          return (this.enabled = !1);
        }),
        (e.prototype.stop = function () {
          return this.started
            ? (removeEventListener('click', this.clickCaptured, !0),
              removeEventListener('DOMContentLoaded', this.pageLoaded, !1),
              this.scrollManager.stop(),
              this.stopHistory(),
              (this.started = !1))
            : void 0;
        }),
        (e.prototype.clearCache = function () {
          return (this.cache = new Turbolinks.SnapshotCache(10));
        }),
        (e.prototype.visit = function (e, t) {
          var i, n;
          return (
            null == t && (t = {}),
            (e = Turbolinks.Location.wrap(e)),
            this.applicationAllowsVisitingLocation(e)
              ? this.locationIsVisitable(e)
                ? ((i = null != (n = t.action) ? n : 'advance'), this.adapter.visitProposedToLocationWithAction(e, i))
                : (window.location = e)
              : void 0
          );
        }),
        (e.prototype.startVisitToLocationWithAction = function (e, t, i) {
          var n;
          return Turbolinks.supported ? ((n = this.getRestorationDataForIdentifier(i)), this.startVisit(e, t, { restorationData: n })) : (window.location = e);
        }),
        (e.prototype.setProgressBarDelay = function (e) {
          return (this.progressBarDelay = e);
        }),
        (e.prototype.startHistory = function () {
          return (
            (this.location = Turbolinks.Location.wrap(window.location)),
            (this.restorationIdentifier = Turbolinks.uuid()),
            this.history.start(),
            this.history.replace(this.location, this.restorationIdentifier)
          );
        }),
        (e.prototype.stopHistory = function () {
          return this.history.stop();
        }),
        (e.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (e, t) {
          return (this.restorationIdentifier = t), (this.location = Turbolinks.Location.wrap(e)), this.history.push(this.location, this.restorationIdentifier);
        }),
        (e.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (e, t) {
          return (this.restorationIdentifier = t), (this.location = Turbolinks.Location.wrap(e)), this.history.replace(this.location, this.restorationIdentifier);
        }),
        (e.prototype.historyPoppedToLocationWithRestorationIdentifier = function (e, t) {
          var i;
          return (
            (this.restorationIdentifier = t),
            this.enabled
              ? ((i = this.getRestorationDataForIdentifier(this.restorationIdentifier)),
                this.startVisit(e, 'restore', { restorationIdentifier: this.restorationIdentifier, restorationData: i, historyChanged: !0 }),
                (this.location = Turbolinks.Location.wrap(e)))
              : this.adapter.pageInvalidated()
          );
        }),
        (e.prototype.getCachedSnapshotForLocation = function (e) {
          var t;
          return (t = this.cache.get(e)) ? t.clone() : void 0;
        }),
        (e.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }),
        (e.prototype.cacheSnapshot = function () {
          var e;
          return this.shouldCacheSnapshot()
            ? (this.notifyApplicationBeforeCachingSnapshot(), (e = this.view.getSnapshot()), this.cache.put(this.lastRenderedLocation, e.clone()))
            : void 0;
        }),
        (e.prototype.scrollToAnchor = function (e) {
          var t;
          return (t = this.view.getElementForAnchor(e)) ? this.scrollToElement(t) : this.scrollToPosition({ x: 0, y: 0 });
        }),
        (e.prototype.scrollToElement = function (e) {
          return this.scrollManager.scrollToElement(e);
        }),
        (e.prototype.scrollToPosition = function (e) {
          return this.scrollManager.scrollToPosition(e);
        }),
        (e.prototype.scrollPositionChanged = function (e) {
          return (this.getCurrentRestorationData().scrollPosition = e);
        }),
        (e.prototype.render = function (e, t) {
          return this.view.render(e, t);
        }),
        (e.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }),
        (e.prototype.viewWillRender = function (e) {
          return this.notifyApplicationBeforeRender(e);
        }),
        (e.prototype.viewRendered = function () {
          return (this.lastRenderedLocation = this.currentVisit.location), this.notifyApplicationAfterRender();
        }),
        (e.prototype.pageLoaded = function () {
          return (this.lastRenderedLocation = this.location), this.notifyApplicationAfterPageLoad();
        }),
        (e.prototype.clickCaptured = function () {
          return removeEventListener('click', this.clickBubbled, !1), addEventListener('click', this.clickBubbled, !1);
        }),
        (e.prototype.clickBubbled = function (e) {
          var t, i, n;
          return this.enabled &&
            this.clickEventIsSignificant(e) &&
            (i = this.getVisitableLinkForNode(e.target)) &&
            (n = this.getVisitableLocationForLink(i)) &&
            this.applicationAllowsFollowingLinkToLocation(i, n)
            ? (e.preventDefault(), (t = this.getActionForLink(i)), this.visit(n, { action: t }))
            : void 0;
        }),
        (e.prototype.applicationAllowsFollowingLinkToLocation = function (e, t) {
          return !this.notifyApplicationAfterClickingLinkToLocation(e, t).defaultPrevented;
        }),
        (e.prototype.applicationAllowsVisitingLocation = function (e) {
          return !this.notifyApplicationBeforeVisitingLocation(e).defaultPrevented;
        }),
        (e.prototype.notifyApplicationAfterClickingLinkToLocation = function (e, t) {
          return Turbolinks.dispatch('turbolinks:click', { target: e, data: { url: t.absoluteURL }, cancelable: !0 });
        }),
        (e.prototype.notifyApplicationBeforeVisitingLocation = function (e) {
          return Turbolinks.dispatch('turbolinks:before-visit', { data: { url: e.absoluteURL }, cancelable: !0 });
        }),
        (e.prototype.notifyApplicationAfterVisitingLocation = function (e) {
          return Turbolinks.dispatch('turbolinks:visit', { data: { url: e.absoluteURL } });
        }),
        (e.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return Turbolinks.dispatch('turbolinks:before-cache');
        }),
        (e.prototype.notifyApplicationBeforeRender = function (e) {
          return Turbolinks.dispatch('turbolinks:before-render', { data: { newBody: e } });
        }),
        (e.prototype.notifyApplicationAfterRender = function () {
          return Turbolinks.dispatch('turbolinks:render');
        }),
        (e.prototype.notifyApplicationAfterPageLoad = function (e) {
          return null == e && (e = {}), Turbolinks.dispatch('turbolinks:load', { data: { url: this.location.absoluteURL, timing: e } });
        }),
        (e.prototype.startVisit = function (e, t, i) {
          var n;
          return (
            null != (n = this.currentVisit) && n.cancel(),
            (this.currentVisit = this.createVisit(e, t, i)),
            this.currentVisit.start(),
            this.notifyApplicationAfterVisitingLocation(e)
          );
        }),
        (e.prototype.createVisit = function (e, t, i) {
          var n, r, a, s, o;
          return (
            (s = (r = null != i ? i : {}).restorationIdentifier),
            (a = r.restorationData),
            (n = r.historyChanged),
            ((o = new Turbolinks.Visit(this, e, t)).restorationIdentifier = null != s ? s : Turbolinks.uuid()),
            (o.restorationData = Turbolinks.copyObject(a)),
            (o.historyChanged = n),
            (o.referrer = this.location),
            o
          );
        }),
        (e.prototype.visitCompleted = function (e) {
          return this.notifyApplicationAfterPageLoad(e.getTimingMetrics());
        }),
        (e.prototype.clickEventIsSignificant = function (e) {
          return !(e.defaultPrevented || e.target.isContentEditable || 1 < e.which || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey);
        }),
        (e.prototype.getVisitableLinkForNode = function (e) {
          return this.nodeIsVisitable(e) ? Turbolinks.closest(e, 'a[href]:not([target]):not([download])') : void 0;
        }),
        (e.prototype.getVisitableLocationForLink = function (e) {
          var t;
          return (t = new Turbolinks.Location(e.getAttribute('href'))), this.locationIsVisitable(t) ? t : void 0;
        }),
        (e.prototype.getActionForLink = function (e) {
          var t;
          return null != (t = e.getAttribute('data-turbolinks-action')) ? t : 'advance';
        }),
        (e.prototype.nodeIsVisitable = function (e) {
          var t;
          return !(t = Turbolinks.closest(e, '[data-turbolinks]')) || 'false' !== t.getAttribute('data-turbolinks');
        }),
        (e.prototype.locationIsVisitable = function (e) {
          return e.isPrefixedBy(this.view.getRootLocation()) && e.isHTML();
        }),
        (e.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }),
        (e.prototype.getRestorationDataForIdentifier = function (e) {
          var t;
          return null != (t = this.restorationData)[e] ? t[e] : (t[e] = {});
        }),
        e
      );
    })();
  }.call(this),
  function () {
    !(function () {
      var e, t;
      if ((e = t = document.currentScript) && !t.hasAttribute('data-turbolinks-suppress-warning'))
        for (; (e = e.parentNode); )
          if (e === document.body)
            return console.warn(
              'You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s',
              t.outerHTML
            );
    })();
  }.call(this),
  function () {
    var e, t, i;
    (Turbolinks.start = function () {
      return t() ? (null == Turbolinks.controller && (Turbolinks.controller = e()), Turbolinks.controller.start()) : void 0;
    }),
      (t = function () {
        return null == window.Turbolinks && (window.Turbolinks = Turbolinks), i();
      }),
      (e = function () {
        var e;
        return ((e = new Turbolinks.Controller()).adapter = new Turbolinks.BrowserAdapter(e)), e;
      }),
      (i = function () {
        return window.Turbolinks === Turbolinks;
      })() && Turbolinks.start();
  }.call(this),
  (function (i) {
    'function' == typeof define && define.amd
      ? define(['jquery'], i)
      : 'object' == typeof module && module.exports
      ? (module.exports = function (e, t) {
          return void 0 === t && (t = 'undefined' != typeof window ? require('jquery') : require('jquery')(e)), i(t), t;
        })
      : i(jQuery);
  })(function (Q) {
    'use strict';
    (Q.fn.ColorPickerSliders = function (K) {
      return this.each(function () {
        function n() {
          (A = {
            actualswatch: !1,
            swatchescontainer: Q('.cp-swatches', M),
            swatches: Q('.cp-swatches ul', M),
            swatches_add: Q('.cp-swatches button.add', M),
            swatches_remove: Q('.cp-swatches button.remove', M),
            swatches_reset: Q('.cp-swatches button.reset', M),
            all_sliders: Q('.cp-sliders, .cp-preview input', M),
            hsvpanel: {
              sv: Q('.cp-hsvpanel-sv', M),
              sv_marker: Q('.cp-hsvpanel-sv .cp-marker-point', M),
              h: Q('.cp-hsvpanel-h', M),
              h_marker: Q('.cp-hsvpanel-h .cp-hsvmarker-vertical', M),
              a: Q('.cp-hsvpanel-a span', M),
              a_marker: Q('.cp-hsvpanel-a .cp-hsvmarker-vertical', M),
            },
            sliders: {
              hue: Q('.cp-hslhue span', M),
              hue_marker: Q('.cp-hslhue .cp-marker', M),
              saturation: Q('.cp-hslsaturation span', M),
              saturation_marker: Q('.cp-hslsaturation .cp-marker', M),
              lightness: Q('.cp-hsllightness span', M),
              lightness_marker: Q('.cp-hsllightness .cp-marker', M),
              opacity: Q('.cp-opacity span', M),
              opacity_marker: Q('.cp-opacity .cp-marker', M),
              red: Q('.cp-rgbred span', M),
              red_marker: Q('.cp-rgbred .cp-marker', M),
              green: Q('.cp-rgbgreen span', M),
              green_marker: Q('.cp-rgbgreen .cp-marker', M),
              blue: Q('.cp-rgbblue span', M),
              blue_marker: Q('.cp-rgbblue .cp-marker', M),
              cielightness: Q('.cp-cielightness span', M),
              cielightness_marker: Q('.cp-cielightness .cp-marker', M),
              ciechroma: Q('.cp-ciechroma span', M),
              ciechroma_marker: Q('.cp-ciechroma .cp-marker', M),
              ciehue: Q('.cp-ciehue span', M),
              ciehue_marker: Q('.cp-ciehue .cp-marker', M),
              preview: Q('.cp-preview input', M),
              slider_button: Q('.cp-sliderbutton', M),
            },
            all_pills: Q('.cp-pills', M),
            pills: { hsvpanel: Q('.cp-pill-hsvpanel', M), sliders: Q('.cp-pill-sliders', M), swatches: Q('.cp-pill-swatches', M) },
          }),
            D.customswatches || (A.swatches_add.hide(), A.swatches_remove.hide(), A.swatches_reset.hide()),
            g(),
            x(),
            s();
        }
        function i(e, t) {
          var i = tinycolor(e);
          return (
            !!i.isValid() &&
            ((G.tiny = i),
            (G.hsla = i.toHsl()),
            (G.rgba = i.toRgb()),
            (G.hsv = i.toHsv()),
            (G.cielch = Q.fn.ColorPickerSliders.rgb2lch(G.rgba)),
            D.flat || j ? (M.removeClass('cp-unconvertible-cie-color'), x(t)) : (t || k(), T()),
            !0)
          );
        }
        function t(e) {
          if (!D.flat) {
            if (j) return I.popover('hide'), I.popover('show'), void s();
            !(function (e) {
              if (!(P instanceof jQuery)) {
                switch (
                  (void 0 === e && (e = !1),
                  (P = Q('<div class="cp-popover-container"></div>').appendTo('body')),
                  (M = Q('<div class="cp-container"></div>').appendTo(P)).html(a()),
                  D.size)
                ) {
                  case 'sm':
                    M.addClass('cp-container-sm');
                    break;
                  case 'lg':
                    M.addClass('cp-container-lg');
                }
                var t, i;
                if (
                  (n(),
                  e || c(),
                  I.popover({
                    html: !0,
                    animation: !1,
                    trigger: 'manual',
                    title: D.title,
                    placement: D.placement,
                    container: P,
                    content: function () {
                      return M;
                    },
                  }),
                  I.popover('show'),
                  D.slidersplusminus)
                )
                  (t = parseInt(Q('.cp-container .cp-sliderbutton').css('width'), 10)),
                    (i = Q('.cp-popover-container .popover-content')).css('padding-left', parseInt(i.css('padding-left'), 10) + t - 6 + 'px'),
                    i.css('padding-right', parseInt(i.css('padding-right'), 10) + t - 6 + 'px');
              }
            })(e),
              (j = !0);
          }
        }
        function r() {
          (j = !1), P.remove(), (P = null), I.popover('destroy');
        }
        function a() {
          var e = [],
            t = '';
          if (
            (D.sliders &&
              (!1 !== D.order.opacity &&
                ((e[D.order.opacity] = ''),
                D.slidersplusminus &&
                  (e[D.order.opacity] +=
                    '<div class="cp-opacity cp-sliderbutton cp-sliderbutton-minus">-</div><div class="cp-opacity cp-sliderbutton cp-sliderbutton-plus">+</div>'),
                (e[D.order.opacity] += '<div class="cp-slider cp-opacity cp-transparency"><span>' + D.labels.opacity + '</span><div class="cp-marker"></div></div>')),
              !1 !== D.order.hsl &&
                ((e[D.order.hsl] = ''),
                D.slidersplusminus &&
                  (e[D.order.hsl] += '<div class="cp-hslhue cp-sliderbutton cp-sliderbutton-minus">-</div><div class="cp-hslhue cp-sliderbutton cp-sliderbutton-plus">+</div>'),
                (e[D.order.hsl] += '<div class="cp-slider cp-hslhue cp-transparency"><span>' + D.labels.hslhue + '</span><div class="cp-marker"></div></div>'),
                D.slidersplusminus &&
                  (e[D.order.hsl] +=
                    '<div class="cp-hslsaturation cp-sliderbutton cp-sliderbutton-minus">-</div><div class="cp-hslsaturation cp-sliderbutton cp-sliderbutton-plus">+</div>'),
                (e[D.order.hsl] += '<div class="cp-slider cp-hslsaturation cp-transparency"><span>' + D.labels.hslsaturation + '</span><div class="cp-marker"></div></div>'),
                D.slidersplusminus &&
                  (e[D.order.hsl] +=
                    '<div class="cp-hsllightness cp-sliderbutton cp-sliderbutton-minus">-</div><div class="cp-hsllightness cp-sliderbutton cp-sliderbutton-plus">+</div>'),
                (e[D.order.hsl] += '<div class="cp-slider cp-hsllightness cp-transparency"><span>' + D.labels.hsllightness + '</span><div class="cp-marker"></div></div>')),
              !1 !== D.order.lightness &&
                ((e[D.order.lightness] = ''),
                D.slidersplusminus &&
                  (e[D.order.lightness] +=
                    '<div class="cp-hsllightness cp-sliderbutton cp-sliderbutton-minus">-</div><div class="cp-hsllightness cp-sliderbutton cp-sliderbutton-plus">+</div>'),
                (e[D.order.lightness] += '<div class="cp-slider cp-hsllightness cp-transparency"><span>' + D.labels.hsllightness + '</span><div class="cp-marker"></div></div>')),
              !1 !== D.order.rgb &&
                ((e[D.order.rgb] = ''),
                D.slidersplusminus &&
                  (e[D.order.rgb] += '<div class="cp-rgbred  cp-sliderbutton cp-sliderbutton-minus">-</div><div class="cp-rgbred cp-sliderbutton cp-sliderbutton-plus">+</div>'),
                (e[D.order.rgb] += '<div class="cp-slider cp-rgbred cp-transparency"><span>' + D.labels.rgbred + '</span><div class="cp-marker"></div></div>'),
                D.slidersplusminus &&
                  (e[D.order.rgb] += '<div class="cp-rgbgreen cp-sliderbutton cp-sliderbutton-minus">-</div><div class="cp-rgbgreen cp-sliderbutton cp-sliderbutton-plus">+</div>'),
                (e[D.order.rgb] += '<div class="cp-slider cp-rgbgreen cp-transparency"><span>' + D.labels.rgbgreen + '</span><div class="cp-marker"></div></div>'),
                D.slidersplusminus &&
                  (e[D.order.rgb] += '<div class="cp-rgbblue cp-sliderbutton cp-sliderbutton-minus">-</div><div class="cp-rgbblue cp-sliderbutton cp-sliderbutton-plus">+</div>'),
                (e[D.order.rgb] += '<div class="cp-slider cp-rgbblue cp-transparency"><span>' + D.labels.rgbblue + '</span><div class="cp-marker"></div></div>')),
              !1 !== D.order.cie &&
                ((e[D.order.cie] = ''),
                D.slidersplusminus &&
                  (e[D.order.cie] +=
                    '<div class="cp-cielightness cp-sliderbutton cp-sliderbutton-minus">-</div><div class="cp-cielightness cp-sliderbutton cp-sliderbutton-plus">+</div>'),
                (e[D.order.cie] += '<div class="cp-slider cp-cielightness cp-transparency"><span>' + D.labels.cielightness + '</span><div class="cp-marker"></div></div>'),
                D.slidersplusminus &&
                  (e[D.order.cie] +=
                    '<div class="cp-ciechroma cp-sliderbutton cp-sliderbutton-minus">-</div><div class="cp-ciechroma cp-sliderbutton cp-sliderbutton-plus">+</div>'),
                (e[D.order.cie] += '<div class="cp-slider cp-ciechroma cp-transparency"><span>' + D.labels.ciechroma + '</span><div class="cp-marker"></div></div>'),
                D.slidersplusminus &&
                  (e[D.order.cie] += '<div class="cp-ciehue cp-sliderbutton cp-sliderbutton-minus">-</div><div class="cp-ciehue cp-sliderbutton cp-sliderbutton-plus">+</div>'),
                (e[D.order.cie] += '<div class="cp-slider cp-ciehue cp-transparency"><span>' + D.labels.ciehue + '</span><div class="cp-marker"></div></div>')),
              !1 !== D.order.preview && (e[D.order.preview] = '<div class="cp-preview cp-transparency"><input type="text" readonly="readonly"></div>')),
            D.grouping &&
              (1 < D.hsvpanel + (D.sliders && 0 < e.length) + !!D.swatches ? (t += '<ul class="cp-pills">') : (t += '<ul class="cp-pills hidden">'),
              D.hsvpanel && (t += '<li><a href="#" class="cp-pill-hsvpanel">HSV panel</a></li>'),
              D.sliders && 0 < e.length && (t += '<li><a href="#" class="cp-pill-sliders">Sliders</a></li>'),
              D.swatches && (t += '<li><a href="#" class="cp-pill-swatches">Swatches</a></li>'),
              (t += '</ul>')),
            D.hsvpanel &&
              (t +=
                '<div class="cp-hsvpanel"><div class="cp-hsvpanel-sv"><span></span><div class="cp-marker-point"></div></div><div class="cp-hsvpanel-h"><span></span><div class="cp-hsvmarker-vertical"></div></div><div class="cp-hsvpanel-a cp-transparency"><span></span><div class="cp-hsvmarker-vertical"></div></div></div>'),
            D.sliders)
          ) {
            t += '<div class="cp-sliders">';
            for (var i = 0; i < e.length; i++) void 0 !== e[i] && (t += e[i]);
            t += '</div>';
          }
          return (
            D.swatches &&
              (t +=
                '<div class="cp-swatches clearfix"><button type="button" class="add btn btn-default" title="' +
                D.titleswatchesadd +
                '"><span class="glyphicon glyphicon-floppy-save"></span></button><button type="button" class="remove btn btn-default" title="' +
                D.titleswatchesremove +
                '"><span class="glyphicon glyphicon-trash"></span></button><button type="button" class="reset btn btn-default" title="' +
                D.titleswatchesreset +
                '"><span class="glyphicon glyphicon-repeat"></span></button><ul></ul></div>'),
            t
          );
        }
        function s() {
          M.on('contextmenu', function (e) {
            return e.preventDefault(), !1;
          }),
            Q(document).on('colorpickersliders.changeswatches', function () {
              g();
            }),
            A.swatches.on('touchstart mousedown click', 'li span', function (e) {
              i(Q(this).css('background-color')), e.preventDefault();
            }),
            A.swatches_add.on('touchstart mousedown click', function (e) {
              L.unshift(G.tiny.toRgbString()), y(), Q(document).trigger('colorpickersliders.changeswatches'), e.preventDefault(), e.stopPropagation();
            }),
            A.swatches_remove.on('touchstart mousedown click', function (e) {
              var t;
              -1 !== (t = L.indexOf(G.tiny.toRgbString())) && (L.splice(t, 1), y(), Q(document).trigger('colorpickersliders.changeswatches')),
                e.preventDefault(),
                e.stopPropagation();
            }),
            A.swatches_reset.on('touchstart touchend mousedown click', function (e) {
              ('click' !== e.type && 'touchend' !== e.type) ||
                (confirm('Do you really want to reset the swatches? All customizations will be lost!') && (m(), y(), Q(document).trigger('colorpickersliders.changeswatches'))),
                e.preventDefault(),
                e.stopImmediatePropagation();
            }),
            A.sliders.slider_button.on('click', function (e) {
              function t(e, t, i) {
                return e < t && (e = t), i < e && (e = i), e;
              }
              var i;
              e.preventDefault(),
                1 < e.which ||
                  ((i = Q(e.target).hasClass('cp-sliderbutton-plus') ? 1 : Q(e.target).hasClass('cp-sliderbutton-minus') ? -1 : 0),
                  Q(e.target).hasClass('cp-opacity') && b('hsla', 'a', t(G.hsla.a + i / 100, 0, 1)),
                  Q(e.target).hasClass('cp-hslhue') && b('hsla', 'h', t(G.hsla.h + i, 0, 360)),
                  Q(e.target).hasClass('cp-hslsaturation') && b('hsla', 's', t(G.hsla.s + i / 100, 0, 1)),
                  Q(e.target).hasClass('cp-hsllightness') && b('hsla', 'l', t(G.hsla.l + i / 100, 0, 1)),
                  Q(e.target).hasClass('cp-rgbred') && b('rgba', 'r', t(G.rgba.r + i, 0, 255)),
                  Q(e.target).hasClass('cp-rgbgreen') && b('rgba', 'g', t(G.rgba.g + i, 0, 255)),
                  Q(e.target).hasClass('cp-rgbblue') && b('rgba', 'b', t(G.rgba.b + i, 0, 255)),
                  Q(e.target).hasClass('cp-cielightness') && b('cielch', 'l', t(G.cielch.l + i, 0, $)),
                  Q(e.target).hasClass('cp-ciechroma') && b('cielch', 'c', t(G.cielch.c + i, 0, U)),
                  Q(e.target).hasClass('cp-ciehue') && b('cielch', 'h', t(G.cielch.h + i, 0, 360)),
                  x());
            }),
            A.sliders.hue.parent().on('touchstart mousedown', function (e) {
              e.preventDefault(), 1 < e.which || (b('hsla', 'h', 3.6 * _((B = 'hue'), e)), x());
            }),
            A.sliders.saturation.parent().on('touchstart mousedown', function (e) {
              e.preventDefault(), 1 < e.which || (b('hsla', 's', _((B = 'saturation'), e) / 100), x());
            }),
            A.sliders.lightness.parent().on('touchstart mousedown', function (e) {
              e.preventDefault(), 1 < e.which || (b('hsla', 'l', _((B = 'lightness'), e) / 100), x());
            }),
            A.sliders.opacity.parent().on('touchstart mousedown', function (e) {
              e.preventDefault(), 1 < e.which || (b('hsla', 'a', _((B = 'opacity'), e) / 100), x());
            }),
            A.sliders.red.parent().on('touchstart mousedown', function (e) {
              e.preventDefault(), 1 < e.which || (b('rgba', 'r', 2.55 * _((B = 'red'), e)), x());
            }),
            A.sliders.green.parent().on('touchstart mousedown', function (e) {
              e.preventDefault(), 1 < e.which || (b('rgba', 'g', 2.55 * _((B = 'green'), e)), x());
            }),
            A.sliders.blue.parent().on('touchstart mousedown', function (e) {
              e.preventDefault(), 1 < e.which || (b('rgba', 'b', 2.55 * _((B = 'blue'), e)), x());
            }),
            A.hsvpanel.sv.on('touchstart mousedown', function (e) {
              if ((e.preventDefault(), !(1 < e.which))) {
                B = 'hsvsv';
                var t = w('sv', e);
                b('hsv', 's', t.horizontal / 100), b('hsv', 'v', (100 - t.vertical) / 100), x();
              }
            }),
            A.hsvpanel.h.on('touchstart mousedown', function (e) {
              e.preventDefault(), 1 < e.which || ((B = 'hsvh'), b('hsv', 'h', 3.6 * w('h', e).vertical), x());
            }),
            A.hsvpanel.a.on('touchstart mousedown', function (e) {
              e.preventDefault(), 1 < e.which || ((B = 'hsva'), b('hsv', 'a', (100 - w('a', e).vertical) / 100), x());
            }),
            A.sliders.cielightness.parent().on('touchstart mousedown', function (e) {
              if ((e.preventDefault(), !(1 < e.which))) {
                var t = _((B = 'cielightness'), e);
                b('cielch', 'l', ($ / 100) * t), x();
              }
            }),
            A.sliders.ciechroma.parent().on('touchstart mousedown', function (e) {
              if ((e.preventDefault(), !(1 < e.which))) {
                var t = _((B = 'ciechroma'), e);
                b('cielch', 'c', (U / 100) * t), x();
              }
            }),
            A.sliders.ciehue.parent().on('touchstart mousedown', function (e) {
              e.preventDefault(), 1 < e.which || (b('cielch', 'h', 3.6 * _((B = 'ciehue'), e)), x());
            }),
            A.sliders.preview.on('click', function () {
              this.select();
            }),
            Q(document).on('touchmove mousemove', function (e) {
              B && (new Date().getTime() - V > X && !W ? f(B, e) : p(B, e));
            }),
            Q(document).on('touchend mouseup', function (e) {
              1 < e.which || (B && ((B = !1), e.preventDefault()));
            }),
            A.pills.hsvpanel.on('click', function (e) {
              e.preventDefault(), u();
            }),
            A.pills.sliders.on('click', function (e) {
              e.preventDefault(), d();
            }),
            A.pills.swatches.on('click', function (e) {
              e.preventDefault(), h();
            }),
            D.flat ||
              P.on('touchstart mousedown', '.popover', function (e) {
                return e.preventDefault(), e.stopPropagation(), !1;
              });
        }
        function o() {
          return (
            '' !== F ||
              (0 === A.pills.hsvpanel.length && (F += '_hsvpanel_'), 0 === A.pills.sliders.length && (F += '_sliders_'), 0 === A.pills.swatches.length && (F += '_swatches_')),
            F
          );
        }
        function l() {
          return (function (e) {
            try {
              return JSON.parse(localStorage.getItem('cp-userdata-' + e));
            } catch (e) {
              return null;
            }
          })('config_activepill' + o());
        }
        function e(e) {
          return (function (e, t) {
            try {
              localStorage.setItem('cp-userdata-' + e, JSON.stringify(t));
            } catch (e) {}
          })('config_activepill' + o(), e);
        }
        function c() {
          switch (l()) {
            case 'hsvpanel':
              u();
              break;
            case 'sliders':
              d();
              break;
            case 'swatches':
              h();
              break;
            default:
              if (A.pills.hsvpanel.length) {
                u();
                break;
              }
              if (A.pills.sliders.length) {
                d();
                break;
              }
              if (A.pills.swatches.length) {
                h();
                break;
              }
          }
        }
        function u() {
          return (
            0 !== A.pills.hsvpanel.length &&
            (Q('a', A.all_pills).removeClass('active'),
            A.pills.hsvpanel.addClass('active'),
            M.removeClass('sliders-active swatches-active').addClass('hsvpanel-active'),
            e('hsvpanel'),
            x(!0),
            t(!0),
            !0)
          );
        }
        function d() {
          return (
            0 !== A.pills.sliders.length &&
            (Q('a', A.all_pills).removeClass('active'),
            A.pills.sliders.addClass('active'),
            M.removeClass('hsvpanel-active swatches-active').addClass('sliders-active'),
            e('sliders'),
            x(!0),
            t(!0),
            !0)
          );
        }
        function h() {
          return (
            0 !== A.pills.swatches.length &&
            (Q('a', A.all_pills).removeClass('active'),
            A.pills.swatches.addClass('active'),
            M.removeClass('hsvpanel-active sliders-active').addClass('swatches-active'),
            e('swatches'),
            x(!0),
            t(!0),
            !0)
          );
        }
        function p(e, t) {
          clearTimeout(Y),
            (Y = setTimeout(function () {
              f(e, t);
            }, X));
        }
        function f(e, t) {
          var i;
          if (W) p(e, t);
          else {
            switch (((W = !0), (V = new Date().getTime()), (i = 'hsvsv' === e ? w('sv', t) : 'hsvh' === e ? w('h', t) : 'hsva' === e ? w('a', t) : _(e, t)), e)) {
              case 'hsvsv':
                b('hsv', 's', i.horizontal / 100), b('hsv', 'v', (100 - i.vertical) / 100);
                break;
              case 'hsvh':
                b('hsv', 'h', 3.6 * i.vertical);
                break;
              case 'hsva':
                b('hsv', 'a', (100 - i.vertical) / 100);
                break;
              case 'hue':
                b('hsla', 'h', 3.6 * i);
                break;
              case 'saturation':
                b('hsla', 's', i / 100);
                break;
              case 'lightness':
                b('hsla', 'l', i / 100);
                break;
              case 'opacity':
                b('hsla', 'a', i / 100);
                break;
              case 'red':
                b('rgba', 'r', 2.55 * i);
                break;
              case 'green':
                b('rgba', 'g', 2.55 * i);
                break;
              case 'blue':
                b('rgba', 'b', 2.55 * i);
                break;
              case 'cielightness':
                b('cielch', 'l', ($ / 100) * i);
                break;
              case 'ciechroma':
                b('cielch', 'c', (U / 100) * i);
                break;
              case 'ciehue':
                b('cielch', 'h', 3.6 * i);
            }
            x(), t.preventDefault(), (W = !1);
          }
        }
        function m() {
          L = [];
          for (var e = 0; e < D.swatches.length; e++) {
            var t = tinycolor(D.swatches[e]);
            t.isValid() && L.push(t.toRgbString());
          }
        }
        function g() {
          if (D.swatches) {
            if (D.customswatches) {
              var e = !1;
              try {
                e = JSON.parse(localStorage.getItem('swatches-' + D.customswatches));
              } catch (e) {}
              e ? (L = e) : m();
            } else m();
            if (L instanceof Array) {
              A.swatches.html('');
              for (var t = 0; t < L.length; t++) {
                var i = tinycolor(L[t]);
                if (i.isValid()) {
                  var n = Q('<span></span>').css('background-color', i.toRgbString()),
                    r = Q('<div class="btn btn-default cp-swatch"></div>');
                  r.append(n), A.swatches.append(Q('<li></li>').append(r));
                }
              }
            }
            v();
          }
        }
        function v() {
          var i = !1;
          Q('span', A.swatches).filter(function () {
            var e = Q(this).css('background-color');
            if ((((e = tinycolor(e)).alpha = Math.round(100 * e.alpha) / 100), e.toRgbString() === G.tiny.toRgbString())) {
              i = !0;
              var t = Q(this).parent();
              t.is(A.actualswatch) || (A.actualswatch && A.actualswatch.removeClass('actual'), (A.actualswatch = t).addClass('actual'));
            }
          }),
            i || (A.actualswatch && (A.actualswatch.removeClass('actual'), (A.actualswatch = !1))),
            A.actualswatch
              ? (A.swatches_add.prop('disabled', !0), A.swatches_remove.prop('disabled', !1))
              : (A.swatches_add.prop('disabled', !1), A.swatches_remove.prop('disabled', !0));
        }
        function y() {
          localStorage.setItem('swatches-' + D.customswatches, JSON.stringify(L));
        }
        function b(e, t, i) {
          switch (e) {
            case 'hsv':
              (G.hsv[t] = i),
                (G.tiny = tinycolor({ h: G.hsv.h, s: G.hsv.s, v: G.hsv.v, a: G.hsv.a })),
                (G.rgba = G.tiny.toRgb()),
                (G.hsla = G.tiny.toHsl()),
                (G.cielch = Q.fn.ColorPickerSliders.rgb2lch(G.rgba));
              break;
            case 'hsla':
              (G.hsla[t] = i),
                (G.tiny = tinycolor({ h: G.hsla.h, s: G.hsla.s, l: G.hsla.l, a: G.hsla.a })),
                (G.rgba = G.tiny.toRgb()),
                (G.hsv = G.tiny.toHsv()),
                (G.cielch = Q.fn.ColorPickerSliders.rgb2lch(G.rgba)),
                M.removeClass('cp-unconvertible-cie-color');
              break;
            case 'rgba':
              (G.rgba[t] = i),
                (G.tiny = tinycolor({ r: G.rgba.r, g: G.rgba.g, b: G.rgba.b, a: G.hsla.a })),
                (G.hsla = G.tiny.toHsl()),
                (G.hsv = G.tiny.toHsv()),
                (G.cielch = Q.fn.ColorPickerSliders.rgb2lch(G.rgba)),
                M.removeClass('cp-unconvertible-cie-color');
              break;
            case 'cielch':
              (G.cielch[t] = i),
                (G.rgba = Q.fn.ColorPickerSliders.lch2rgb(G.cielch)),
                (G.tiny = tinycolor(G.rgba)),
                (G.hsla = G.tiny.toHsl()),
                (G.hsv = G.tiny.toHsv()),
                D.erroneousciecolormarkers && (G.rgba.isok ? M.removeClass('cp-unconvertible-cie-color') : M.addClass('cp-unconvertible-cie-color'));
          }
        }
        function _(e, t) {
          var i = Q.fn.ColorPickerSliders.calculateEventPositionPercentage(t, A.sliders[e]);
          return A.sliders[e + '_marker'].data('position', i), i;
        }
        function w(e, t) {
          var i = Q.fn.ColorPickerSliders.calculateEventPositionPercentage(t, A.hsvpanel.sv, !0);
          return A.hsvpanel[e + '_marker'].data('position', i), i;
        }
        function x(e) {
          if (
            (clearTimeout(O),
            (Date.now =
              Date.now ||
              function () {
                return +new Date();
              }),
            Date.now() - q < D.updateinterval)
          )
            return (
              (t = e),
              void (O = setTimeout(function () {
                x(t);
              }, D.updateinterval))
            );
          var t, i, n, r;
          void 0 === e && (e = !1),
            (q = Date.now()),
            !1 === D.hsvpanel ||
              (D.grouping && 'hsvpanel' !== l()) ||
              (A.hsvpanel.sv.css('background', tinycolor('hsv(' + G.hsv.h + ',100%,100%)').toRgbString()),
              A.hsvpanel.sv_marker.css('left', 100 * G.hsv.s + '%').css('top', 100 - 100 * G.hsv.v + '%'),
              A.hsvpanel.h_marker.css('top', (G.hsv.h / 360) * 100 + '%'),
              E(A.hsvpanel.a, Q.fn.ColorPickerSliders.getScaledGradientStops(G.hsla, 'a', 1, 0, 2), !0),
              A.hsvpanel.a_marker.css('top', 100 - 100 * G.hsv.a + '%')),
            !D.sliders ||
              (D.grouping && 'sliders' !== l()) ||
              (!1 !== D.order.opacity &&
                (E(A.sliders.opacity, Q.fn.ColorPickerSliders.getScaledGradientStops(G.hsla, 'a', 0, 1, 2)),
                D.rendervalues && A.sliders.opacity.html(D.labels.opacity + ': ' + (100 * G.hsla.a).toFixed(0) + '%'),
                A.sliders.opacity_marker.css('left', 100 * G.hsla.a + '%')),
              !1 !== D.order.hsl &&
                (E(A.sliders.hue, Q.fn.ColorPickerSliders.getScaledGradientStops(G.hsla, 'h', 0, 360, 7)),
                D.rendervalues && A.sliders.hue.html(D.labels.hslhue + ': ' + G.hsla.h.toFixed(0)),
                A.sliders.hue_marker.css('left', (G.hsla.h / 360) * 100 + '%'),
                E(A.sliders.saturation, Q.fn.ColorPickerSliders.getScaledGradientStops(G.hsla, 's', 0, 1, 2)),
                D.rendervalues && A.sliders.saturation.html(D.labels.hslsaturation + ': ' + (100 * G.hsla.s).toFixed(0) + '%'),
                A.sliders.saturation_marker.css('left', 100 * G.hsla.s + '%'),
                S()),
              !1 !== D.order.lightness && S(),
              !1 !== D.order.rgb &&
                (E(A.sliders.red, Q.fn.ColorPickerSliders.getScaledGradientStops(G.rgba, 'r', 0, 255, 2)),
                D.rendervalues && A.sliders.red.html(D.labels.rgbred + ': ' + G.rgba.r.toFixed(0)),
                A.sliders.red_marker.css('left', (G.rgba.r / 255) * 100 + '%'),
                E(A.sliders.green, Q.fn.ColorPickerSliders.getScaledGradientStops(G.rgba, 'g', 0, 255, 2)),
                D.rendervalues && A.sliders.green.html(D.labels.rgbgreen + ': ' + G.rgba.g.toFixed(0)),
                A.sliders.green_marker.css('left', (G.rgba.g / 255) * 100 + '%'),
                E(A.sliders.blue, Q.fn.ColorPickerSliders.getScaledGradientStops(G.rgba, 'b', 0, 255, 2)),
                D.rendervalues && A.sliders.blue.html(D.labels.rgbblue + ': ' + G.rgba.b.toFixed(0)),
                A.sliders.blue_marker.css('left', (G.rgba.b / 255) * 100 + '%')),
              !1 !== D.order.cie &&
                ((r = C((r = Q.fn.ColorPickerSliders.getScaledGradientStops(G.cielch, 'l', 0, 100, 10, D.invalidcolorsopacity)), 'l')),
                E(A.sliders.cielightness, r),
                D.rendervalues && A.sliders.cielightness.html(D.labels.cielightness + ': ' + G.cielch.l.toFixed(0)),
                A.sliders.cielightness_marker.css('left', (G.cielch.l / $) * 100 + '%'),
                (n = C((n = Q.fn.ColorPickerSliders.getScaledGradientStops(G.cielch, 'c', 0, U, 5, D.invalidcolorsopacity)), 'c')),
                E(A.sliders.ciechroma, n),
                D.rendervalues && A.sliders.ciechroma.html(D.labels.ciechroma + ': ' + G.cielch.c.toFixed(0)),
                A.sliders.ciechroma_marker.css('left', (G.cielch.c / U) * 100 + '%'),
                (i = C((i = Q.fn.ColorPickerSliders.getScaledGradientStops(G.cielch, 'h', 0, 360, 28, D.invalidcolorsopacity)), 'h')),
                E(A.sliders.ciehue, i),
                D.rendervalues && A.sliders.ciehue.html(D.labels.ciehue + ': ' + G.cielch.h.toFixed(0)),
                A.sliders.ciehue_marker.css('left', (G.cielch.h / 360) * 100 + '%')),
              !1 !== D.order.preview &&
                (function () {
                  var e;
                  switch ((A.sliders.preview.css('background', Q.fn.ColorPickerSliders.csscolor(G.rgba)), D.previewformat)) {
                    case 'hex':
                      e = G.hsla.a < 1 ? G.tiny.toRgbString() : G.tiny.toHexString();
                      break;
                    case 'hsl-rgb':
                      e = G.tiny.toHslString() + ' ' + G.tiny.toRgbString();
                      break;
                    case 'hsl':
                      e = G.tiny.toHslString();
                      break;
                    case 'rgb':
                    default:
                      e = G.tiny.toRgbString();
                  }
                  A.sliders.preview.val(e);
                })()),
            e || k(),
            (100 - G.cielch.l) * G.cielch.a < D.previewcontrasttreshold
              ? (A.all_sliders.css('color', '#000'), N && D.previewontriggerelement && I.css('background', G.tiny.toRgbString()).css('color', '#000'))
              : (A.all_sliders.css('color', '#fff'), N && D.previewontriggerelement && I.css('background', G.tiny.toRgbString()).css('color', '#fff')),
            !D.swatches || (D.grouping && 'swatches' !== l()) || v(),
            D.onchange(M, G),
            I.data('color', G);
        }
        function T() {
          N &&
            D.previewontriggerelement &&
            ((100 - G.cielch.l) * G.cielch.a < D.previewcontrasttreshold
              ? I.css('background', G.tiny.toRgbString()).css('color', '#000')
              : I.css('background', G.tiny.toRgbString()).css('color', '#fff'));
        }
        function k() {
          z &&
            z.each(function (e, t) {
              var i = Q(t);
              switch (i.data('color-format') || D.previewformat) {
                case 'hex':
                  G.hsla.a < 1 ? i.val(G.tiny.toRgbString()) : i.val(G.tiny.toHexString());
                  break;
                case 'hsl':
                  i.val(G.tiny.toHslString());
                  break;
                case 'rgb':
                default:
                  i.val(G.tiny.toRgbString());
              }
            });
        }
        function S() {
          E(A.sliders.lightness, Q.fn.ColorPickerSliders.getScaledGradientStops(G.hsla, 'l', 0, 1, 3)),
            D.rendervalues && A.sliders.lightness.html(D.labels.hsllightness + ': ' + (100 * G.hsla.l).toFixed(0) + '%'),
            A.sliders.lightness_marker.css('left', 100 * G.hsla.l + '%');
        }
        function C(e, t) {
          if (1 === D.invalidcolorsopacity || !D.finercierangeedges) return e;
          e.sort(function (e, t) {
            return e.position - t.position;
          });
          for (var i = [], n = 1; n < e.length; n++)
            if (e[n].isok !== e[n - 1].isok)
              for (
                var r = Math.round(e[n].position) - Math.round(e[n - 1].position),
                  a = Q.fn.ColorPickerSliders.getScaledGradientStops(
                    e[n].rawcolor,
                    t,
                    e[n - 1].rawcolor[t],
                    e[n].rawcolor[t],
                    r,
                    D.invalidcolorsopacity,
                    e[n - 1].position,
                    e[n].position
                  ),
                  s = 0;
                s < a.length;
                s++
              )
                if (a[s].isok !== e[n - 1].isok) {
                  i.push(a[s]), 0 < s && i.push(a[s - 1]);
                  break;
                }
          return Q.merge(i, e);
        }
        function E(e, t, i) {
          switch (
            (void 0 === i && (i = !1),
            t.sort(function (e, t) {
              return e.position - t.position;
            }),
            H)
          ) {
            case 'noprefix':
              Q.fn.ColorPickerSliders.renderNoprefix(e, t, i);
              break;
            case 'webkit':
              Q.fn.ColorPickerSliders.renderWebkit(e, t, i);
              break;
            case 'ms':
              Q.fn.ColorPickerSliders.renderMs(e, t, i);
              break;
            case 'svg':
              Q.fn.ColorPickerSliders.renderSVG(e, t, i);
              break;
            case 'oldwebkit':
              Q.fn.ColorPickerSliders.renderOldwebkit(e, t, i);
          }
        }
        var D,
          M,
          P,
          A,
          L,
          O,
          R = !1,
          I = Q(this),
          N = I.is('input'),
          z = !1,
          F = '',
          H = !1,
          j = !1,
          $ = 101,
          B = !1,
          q = 0,
          Y = null,
          X = 70,
          W = !1,
          V = 0,
          G = { tiny: null, hsla: null, rgba: null, hsv: null, cielch: null },
          U = 144;
        R ||
          ((R = !0),
          'filter' === (H = Q.fn.ColorPickerSliders.detectWhichGradientIsSupported()) && (H = !1),
          !H && Q.fn.ColorPickerSliders.svgSupported() && (H = 'svg'),
          void 0 === K && (K = {}),
          (D = Q.extend(
            {
              color: 'hsl(342, 50%, 70%)',
              size: 'default',
              placement: 'auto',
              trigger: 'focus',
              preventtouchkeyboardonshow: !0,
              title: '',
              hsvpanel: !1,
              sliders: !0,
              grouping: !0,
              swatches: [
                'FFFFFF',
                'C0C0C0',
                '808080',
                '000000',
                'FF0000',
                '800000',
                'FFFF00',
                '808000',
                '00FF00',
                '008000',
                '00FFFF',
                '008080',
                '0000FF',
                '000080',
                'FF00FF',
                '800080',
              ],
              customswatches: 'colorpickkersliders',
              connectedinput: !1,
              flat: !1,
              updateinterval: 30,
              previewontriggerelement: !0,
              previewcontrasttreshold: 15,
              previewformat: 'rgb',
              erroneousciecolormarkers: !0,
              invalidcolorsopacity: 1,
              finercierangeedges: !0,
              rendervalues: !1,
              slidersplusminus: !1,
              titleswatchesadd: 'Add color to swatches',
              titleswatchesremove: 'Remove color from swatches',
              titleswatchesreset: 'Reset to default swatches',
              order: {},
              labels: {},
              onchange: function () {},
            },
            K
          )),
          K.hasOwnProperty('order')
            ? (D.order = Q.extend({ opacity: !1, hsl: !1, lightness: !1, rgb: !1, cie: !1, preview: !1 }, K.order))
            : (D.order = { opacity: 0, hsl: 1, rgb: 2, cie: 3, preview: 4 }),
          K.hasOwnProperty('labels') || (K.labels = {}),
          (D.labels = Q.extend(
            {
              hslhue: 'HSL-Hue',
              hslsaturation: 'HSL-Saturation',
              hsllightness: 'HSL-Lightness',
              rgbred: 'RGB-Red',
              rgbgreen: 'RGB-Green',
              rgbblue: 'RGB-Blue',
              cielightness: 'CIE-Lightness',
              ciechroma: 'CIE-Chroma',
              ciehue: 'CIE-Hue',
              opacity: 'Opacity',
              preview: 'Preview',
            },
            K.labels
          )),
          (D.order.hasOwnProperty('preview') && !1 !== D.order.preview) || H || (D.order.preview = 10),
          D.connectedinput instanceof jQuery ? D.connectedinput.add(I) : !1 === D.connectedinput ? (D.connectedinput = I) : (D.connectedinput = Q(D.connectedinput).add(I)),
          N ? ((G.tiny = tinycolor(I.val())), G.tiny.isValid() || (G.tiny = tinycolor(D.color))) : (G.tiny = tinycolor(D.color)),
          (G.hsla = G.tiny.toHsl()),
          (G.rgba = G.tiny.toRgb()),
          (G.hsv = G.tiny.toHsv()),
          (G.cielch = Q.fn.ColorPickerSliders.rgb2lch(G.rgba)),
          D.connectedinput && (z = D.connectedinput instanceof jQuery ? D.connectedinput : Q(D.connectedinput)),
          T(),
          k(),
          D.flat &&
            D.flat &&
            (N ? (M = Q('<div class="cp-container"></div>').insertAfter(I)) : ((M = Q('<div class="cp-container"></div>')), I.append(M)), M.append(a()), n(), c()),
          I.on('colorpickersliders.updateColor', function (e, t) {
            i(t);
          }),
          I.on('colorpickersliders.show', function () {
            t();
          }),
          I.on('colorpickersliders.hide', function () {
            r();
          }),
          D.flat ||
            'focus' !== D.trigger ||
            (void 0 === I.attr('tabindex') && I.attr('tabindex', -1),
            D.preventtouchkeyboardonshow &&
              (Q(I).prop('readonly', !0).addClass('cp-preventtouchkeyboardonshow'),
              Q(I).on('click', function (e) {
                j && (Q(I).prop('readonly', !1), e.stopPropagation());
              })),
            N ||
              Q(I).on('click', function (e) {
                t(), e.stopPropagation();
              }),
            Q(I).on('focus', function (e) {
              t(), e.stopPropagation();
            }),
            Q(I).on('blur', function (e) {
              r(), D.preventtouchkeyboardonshow && Q(I).prop('readonly', !0), e.stopPropagation();
            })),
          z &&
            z.on('keyup change', function () {
              i(Q(this).val(), !0);
            }));
      });
    }),
      (Q.fn.ColorPickerSliders.getEventCoordinates = function (e) {
        return void 0 !== e.pageX
          ? { pageX: e.originalEvent.pageX, pageY: e.originalEvent.pageY }
          : void 0 !== e.originalEvent.touches
          ? { pageX: e.originalEvent.touches[0].pageX, pageY: e.originalEvent.touches[0].pageY }
          : void 0;
      }),
      (Q.fn.ColorPickerSliders.calculateEventPositionPercentage = function (e, t, i) {
        void 0 === i && (i = !1);
        var n = Q.fn.ColorPickerSliders.getEventCoordinates(e),
          r = t.width(),
          a = ((n.pageX - t.offset().left) / r) * 100;
        if ((a < 0 && (a = 0), 100 < a && (a = 100), i)) {
          var s = t.height(),
            o = ((n.pageY - t.offset().top) / s) * 100;
          return o < 0 && (o = 0), 100 < o && (o = 100), { horizontal: a, vertical: o };
        }
        return a;
      }),
      (Q.fn.ColorPickerSliders.getScaledGradientStops = function (e, t, i, n, r, a, s, o) {
        void 0 === a && (a = 1), void 0 === s && (s = 0), void 0 === o && (o = 100);
        for (var l = [], c = n - i, u = !0, d = 0; d < r; ++d) {
          var h,
            p = d / (r - 1),
            f = Q.fn.ColorPickerSliders.modifyColor(e, t, p * c + i);
          if (a < 1) {
            var m = Q.fn.ColorPickerSliders.lch2rgb(f, a);
            (u = m.isok), (h = Q.fn.ColorPickerSliders.csscolor(m, a));
          } else h = Q.fn.ColorPickerSliders.csscolor(f, a);
          l[d] = { color: h, position: p * (o - s) + s, isok: u, rawcolor: f };
        }
        return l;
      }),
      (Q.fn.ColorPickerSliders.getGradientStopsCSSString = function (e) {
        for (var t = '', i = '', n = '', r = 0; r < e.length; r++) {
          var a = e[r];
          (t += ',' + a.color + ' ' + a.position + '%'), (i += ',color-stop(' + a.position + '%,' + a.color + ')');
          var s = tinycolor(a.color);
          n += '<stop stop-color="' + s.toHexString() + '" stop-opacity="' + s.toRgb().a + '" offset="' + a.position / 100 + '"/>';
        }
        return { noprefix: t, oldwebkit: i, svg: n };
      }),
      (Q.fn.ColorPickerSliders.renderNoprefix = function (e, t, i) {
        var n;
        void 0 === i && (i = !1),
          (n = i ? 'linear-gradient(to bottom' : 'linear-gradient(to right'),
          (n += Q.fn.ColorPickerSliders.getGradientStopsCSSString(t).noprefix + ')'),
          e.css('background-image', n);
      }),
      (Q.fn.ColorPickerSliders.renderWebkit = function (e, t, i) {
        var n;
        void 0 === i && (i = !1),
          (n = i ? '-webkit-linear-gradient(top' : '-webkit-linear-gradient(left'),
          (n += Q.fn.ColorPickerSliders.getGradientStopsCSSString(t).noprefix + ')'),
          e.css('background-image', n);
      }),
      (Q.fn.ColorPickerSliders.renderOldwebkit = function (e, t, i) {
        var n;
        void 0 === i && (i = !1),
          (n = i ? '-webkit-gradient(linear, 0% 0%, 0 100%' : '-webkit-gradient(linear, 0% 0%, 100% 0%'),
          (n += Q.fn.ColorPickerSliders.getGradientStopsCSSString(t).oldwebkit + ')'),
          e.css('background-image', n);
      }),
      (Q.fn.ColorPickerSliders.renderMs = function (e, t, i) {
        var n;
        void 0 === i && (i = !1),
          (n = i ? '-ms-linear-gradient(to bottom' : '-ms-linear-gradient(to right'),
          (n += Q.fn.ColorPickerSliders.getGradientStopsCSSString(t).noprefix + ')'),
          e.css('background-image', n);
      }),
      (Q.fn.ColorPickerSliders.renderSVG = function (e, t, i) {
        void 0 === i && (i = !1);
        var n = '';
        (n = i
          ? '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><linearGradient id="vsgg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="100%">'
          : '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><linearGradient id="vsgg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0">'),
          (n += Q.fn.ColorPickerSliders.getGradientStopsCSSString(t).svg),
          (n += '</linearGradient><rect x="0" y="0" width="1" height="1" fill="url(#vsgg)" /></svg>'),
          (n = 'url(data:image/svg+xml;base64,' + Q.fn.ColorPickerSliders.base64encode(n) + ')'),
          e.css('background-image', n);
      }),
      (Q.fn.ColorPickerSliders.base64encode = function (e) {
        var t,
          i,
          n,
          r,
          a,
          s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          o = 0,
          l = 0,
          c = '',
          u = [];
        if (!e) return e;
        for (
          ;
          (t = ((a = (e.charCodeAt(o++) << 16) | (e.charCodeAt(o++) << 8) | e.charCodeAt(o++)) >> 18) & 63),
            (i = (a >> 12) & 63),
            (n = (a >> 6) & 63),
            (r = 63 & a),
            (u[l++] = s.charAt(t) + s.charAt(i) + s.charAt(n) + s.charAt(r)),
            o < e.length;

        );
        c = u.join('');
        var d = e.length % 3;
        return (d ? c.slice(0, d - 3) : c) + '==='.slice(d || 3);
      }),
      (Q.fn.ColorPickerSliders.isGoodRgb = function (e) {
        return !(
          258 < e.r ||
          258 < e.g ||
          258 < e.b ||
          e.r < -1 ||
          e.g < -1 ||
          e.b < -1 ||
          ((e.r = Math.min(255, e.r)), (e.g = Math.min(255, e.g)), (e.b = Math.min(255, e.b)), (e.r = Math.max(0, e.r)), (e.g = Math.max(0, e.g)), (e.b = Math.max(0, e.b)), 0)
        );
      }),
      (Q.fn.ColorPickerSliders.rgb2lch = function (e) {
        var t = Q.fn.ColorPickerSliders.CIELab2CIELCH(Q.fn.ColorPickerSliders.XYZ2CIELab(Q.fn.ColorPickerSliders.rgb2XYZ(e)));
        return e.hasOwnProperty('a') && (t.a = e.a), t;
      }),
      (Q.fn.ColorPickerSliders.lch2rgb = function (e, t) {
        void 0 === t && (t = 1);
        var i = Q.fn.ColorPickerSliders.XYZ2rgb(Q.fn.ColorPickerSliders.CIELab2XYZ(Q.fn.ColorPickerSliders.CIELCH2CIELab(e)));
        if (Q.fn.ColorPickerSliders.isGoodRgb(i)) return e.hasOwnProperty('a') && (i.a = e.a), (i.isok = !0), i;
        for (
          var n = Q.extend({}, e), r = n.c, a = -1, s = 0;
          ++s,
            (n.c = a + (r - a) / 2),
            (i = Q.fn.ColorPickerSliders.XYZ2rgb(Q.fn.ColorPickerSliders.CIELab2XYZ(Q.fn.ColorPickerSliders.CIELCH2CIELab(n)))),
            Q.fn.ColorPickerSliders.isGoodRgb(i) ? (a = n.c) : (r = n.c),
            0.9 < Math.abs(r - a) && s < 100;

        );
        return (
          e.hasOwnProperty('a') && (i.a = e.a),
          (i.r = Math.max(0, i.r)),
          (i.g = Math.max(0, i.g)),
          (i.b = Math.max(0, i.b)),
          (i.r = Math.min(255, i.r)),
          (i.g = Math.min(255, i.g)),
          (i.b = Math.min(255, i.b)),
          t < 1 && (i.hasOwnProperty('a') ? (i.a = i.a * t) : (i.a = t)),
          (i.isok = !1),
          i
        );
      }),
      (Q.fn.ColorPickerSliders.modifyColor = function (e, t, i) {
        var n = Q.extend({}, e);
        if (!e.hasOwnProperty(t)) throw 'Missing color property: ' + t;
        return (n[t] = i), n;
      }),
      (Q.fn.ColorPickerSliders.csscolor = function (e, t) {
        void 0 === t && (t = 1);
        var i = !1,
          n = Q.extend({}, e);
        return (
          n.hasOwnProperty('c') && (n = Q.fn.ColorPickerSliders.lch2rgb(n, t)),
          n.hasOwnProperty('h') && (i = 'hsla(' + n.h + ',' + 100 * n.s + '%,' + 100 * n.l + '%,' + n.a + ')'),
          n.hasOwnProperty('r') &&
            (i =
              n.a < 1
                ? 'rgba(' + Math.round(n.r) + ',' + Math.round(n.g) + ',' + Math.round(n.b) + ',' + n.a + ')'
                : 'rgb(' + Math.round(n.r) + ',' + Math.round(n.g) + ',' + Math.round(n.b) + ')'),
          i
        );
      }),
      (Q.fn.ColorPickerSliders.rgb2XYZ = function (e) {
        var t = {},
          i = e.r / 255,
          n = e.g / 255,
          r = e.b / 255;
        return (
          0.04045 < i ? (i = Math.pow((i + 0.055) / 1.055, 2.4)) : (i /= 12.92),
          0.04045 < n ? (n = Math.pow((n + 0.055) / 1.055, 2.4)) : (n /= 12.92),
          0.04045 < r ? (r = Math.pow((r + 0.055) / 1.055, 2.4)) : (r /= 12.92),
          (i *= 100),
          (n *= 100),
          (r *= 100),
          (t.x = 0.4124 * i + 0.3576 * n + 0.1805 * r),
          (t.y = 0.2126 * i + 0.7152 * n + 0.0722 * r),
          (t.z = 0.0193 * i + 0.1192 * n + 0.9505 * r),
          t
        );
      }),
      (Q.fn.ColorPickerSliders.XYZ2CIELab = function (e) {
        var t = {},
          i = e.x / 95.047,
          n = e.y / 100,
          r = e.z / 108.883;
        return (
          (i = 0.008856 < i ? Math.pow(i, 0.333333333) : 7.787 * i + 0.137931034),
          (n = 0.008856 < n ? Math.pow(n, 0.333333333) : 7.787 * n + 0.137931034),
          (r = 0.008856 < r ? Math.pow(r, 0.333333333) : 7.787 * r + 0.137931034),
          (t.l = 116 * n - 16),
          (t.a = 500 * (i - n)),
          (t.b = 200 * (n - r)),
          t
        );
      }),
      (Q.fn.ColorPickerSliders.CIELab2CIELCH = function (e) {
        var t = {};
        return (
          (t.l = e.l),
          (t.c = Math.sqrt(Math.pow(e.a, 2) + Math.pow(e.b, 2))),
          (t.h = Math.atan2(e.b, e.a)),
          0 < t.h ? (t.h = (t.h / Math.PI) * 180) : (t.h = 360 - (Math.abs(t.h) / Math.PI) * 180),
          t
        );
      }),
      (Q.fn.ColorPickerSliders.CIELCH2CIELab = function (e) {
        var t = {};
        return (t.l = e.l), (t.a = Math.cos(0.01745329251 * e.h) * e.c), (t.b = Math.sin(0.01745329251 * e.h) * e.c), t;
      }),
      (Q.fn.ColorPickerSliders.CIELab2XYZ = function (e) {
        var t = {};
        return (
          (t.y = (e.l + 16) / 116),
          (t.x = e.a / 500 + t.y),
          (t.z = t.y - e.b / 200),
          0.008856 < Math.pow(t.y, 3) ? (t.y = Math.pow(t.y, 3)) : (t.y = (t.y - 0.137931034) / 7.787),
          0.008856 < Math.pow(t.x, 3) ? (t.x = Math.pow(t.x, 3)) : (t.x = (t.x - 0.137931034) / 7.787),
          0.008856 < Math.pow(t.z, 3) ? (t.z = Math.pow(t.z, 3)) : (t.z = (t.z - 0.137931034) / 7.787),
          (t.x = 95.047 * t.x),
          (t.y = 100 * t.y),
          (t.z = 108.883 * t.z),
          t
        );
      }),
      (Q.fn.ColorPickerSliders.XYZ2rgb = function (e) {
        var t = {};
        return (
          (e.x = e.x / 100),
          (e.y = e.y / 100),
          (e.z = e.z / 100),
          (t.r = 3.2406 * e.x + -1.5372 * e.y + -0.4986 * e.z),
          (t.g = -0.9689 * e.x + 1.8758 * e.y + 0.0415 * e.z),
          (t.b = 0.0557 * e.x + -0.204 * e.y + 1.057 * e.z),
          0.0031308 < t.r ? (t.r = 1.055 * Math.pow(t.r, 0.41666667) - 0.055) : (t.r = 12.92 * t.r),
          0.0031308 < t.g ? (t.g = 1.055 * Math.pow(t.g, 0.41666667) - 0.055) : (t.g = 12.92 * t.g),
          0.0031308 < t.b ? (t.b = 1.055 * Math.pow(t.b, 0.41666667) - 0.055) : (t.b = 12.92 * t.b),
          (t.r = Math.round(255 * t.r)),
          (t.g = Math.round(255 * t.g)),
          (t.b = Math.round(255 * t.b)),
          t
        );
      }),
      (Q.fn.ColorPickerSliders.detectWhichGradientIsSupported = function () {
        var e = document.createElement('detectGradientSupport').style;
        try {
          if (((e.backgroundImage = 'linear-gradient(to top left, #9f9, white)'), -1 !== e.backgroundImage.indexOf('gradient'))) return 'noprefix';
          if (((e.backgroundImage = '-webkit-linear-gradient(left top, #9f9, white)'), -1 !== e.backgroundImage.indexOf('gradient'))) return 'webkit';
          if (((e.backgroundImage = '-ms-linear-gradient(left top, #9f9, white)'), -1 !== e.backgroundImage.indexOf('gradient'))) return 'ms';
          if (((e.backgroundImage = '-webkit-gradient(linear, left top, right bottom, from(#9f9), to(white))'), -1 !== e.backgroundImage.indexOf('gradient'))) return 'oldwebkit';
        } catch (t) {
          try {
            if (
              ((e.filter = 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#000000",GradientType=0)'), -1 !== e.filter.indexOf('DXImageTransform'))
            )
              return 'filter';
          } catch (t) {}
        }
        return !1;
      }),
      (Q.fn.ColorPickerSliders.svgSupported = function () {
        return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
      });
  }),
  (function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? (module.exports = t()) : 'function' == typeof define && define.amd ? define(t) : (e.Swiper = t());
  })(this, function () {
    'use strict';
    function A(e, t) {
      var i = [],
        n = 0;
      if (e && !t && e instanceof c) return e;
      if (e)
        if ('string' == typeof e) {
          var r,
            a,
            s = e.trim();
          if (0 <= s.indexOf('<') && 0 <= s.indexOf('>')) {
            var o = 'div';
            for (
              0 === s.indexOf('<li') && (o = 'ul'),
                0 === s.indexOf('<tr') && (o = 'tbody'),
                (0 !== s.indexOf('<td') && 0 !== s.indexOf('<th')) || (o = 'tr'),
                0 === s.indexOf('<tbody') && (o = 'table'),
                0 === s.indexOf('<option') && (o = 'select'),
                (a = m.createElement(o)).innerHTML = s,
                n = 0;
              n < a.childNodes.length;
              n += 1
            )
              i.push(a.childNodes[n]);
          } else
            for (r = t || '#' !== e[0] || e.match(/[ .<>:~]/) ? (t || m).querySelectorAll(e.trim()) : [m.getElementById(e.trim().split('#')[1])], n = 0; n < r.length; n += 1)
              r[n] && i.push(r[n]);
        } else if (e.nodeType || e === H || e === m) i.push(e);
        else if (0 < e.length && e[0].nodeType) for (n = 0; n < e.length; n += 1) i.push(e[n]);
      return new c(i);
    }
    function a(e) {
      for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
      return t;
    }
    function l() {
      var e = this,
        t = e.params,
        i = e.el;
      if (!i || 0 !== i.offsetWidth) {
        t.breakpoints && e.setBreakpoint();
        var n = e.allowSlideNext,
          r = e.allowSlidePrev,
          a = e.snapGrid;
        if (((e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), t.freeMode)) {
          var s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
        } else
          e.updateSlidesClasses(),
            ('auto' === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0);
        (e.allowSlidePrev = r), (e.allowSlideNext = n), e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
      }
    }
    var m =
        'undefined' == typeof document
          ? {
              body: {},
              addEventListener: function () {},
              removeEventListener: function () {},
              activeElement: { blur: function () {}, nodeName: '' },
              querySelector: function () {
                return null;
              },
              querySelectorAll: function () {
                return [];
              },
              getElementById: function () {
                return null;
              },
              createEvent: function () {
                return { initEvent: function () {} };
              },
              createElement: function () {
                return {
                  children: [],
                  childNodes: [],
                  style: {},
                  setAttribute: function () {},
                  getElementsByTagName: function () {
                    return [];
                  },
                };
              },
              location: { hash: '' },
            }
          : document,
      H =
        'undefined' == typeof window
          ? {
              document: m,
              navigator: { userAgent: '' },
              location: {},
              history: {},
              CustomEvent: function () {
                return this;
              },
              addEventListener: function () {},
              removeEventListener: function () {},
              getComputedStyle: function () {
                return {
                  getPropertyValue: function () {
                    return '';
                  },
                };
              },
              Image: function () {},
              Date: function () {},
              screen: {},
              setTimeout: function () {},
              clearTimeout: function () {},
            }
          : window,
      c = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return (this.length = e.length), this;
      };
    (A.fn = c.prototype), (A.Class = c), (A.Dom7 = c);
    var t = {
      addClass: function (e) {
        if (void 0 === e) return this;
        for (var t = e.split(' '), i = 0; i < t.length; i += 1)
          for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[i]);
        return this;
      },
      removeClass: function (e) {
        for (var t = e.split(' '), i = 0; i < t.length; i += 1)
          for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[i]);
        return this;
      },
      hasClass: function (e) {
        return !!this[0] && this[0].classList.contains(e);
      },
      toggleClass: function (e) {
        for (var t = e.split(' '), i = 0; i < t.length; i += 1)
          for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
        return this;
      },
      attr: function (e, t) {
        var i = arguments;
        if (1 === arguments.length && 'string' == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
        for (var n = 0; n < this.length; n += 1)
          if (2 === i.length) this[n].setAttribute(e, t);
          else for (var r in e) (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      data: function (e, t) {
        var i;
        if (void 0 !== t) {
          for (var n = 0; n < this.length; n += 1) (i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), (i.dom7ElementDataStorage[e] = t);
          return this;
        }
        if ((i = this[0])) return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute('data-' + e) || void 0;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) {
          var i = this[t].style;
          (i.webkitTransform = e), (i.transform = e);
        }
        return this;
      },
      transition: function (e) {
        'string' != typeof e && (e += 'ms');
        for (var t = 0; t < this.length; t += 1) {
          var i = this[t].style;
          (i.webkitTransitionDuration = e), (i.transitionDuration = e);
        }
        return this;
      },
      on: function () {
        function e(e) {
          var t = e.target;
          if (t) {
            var i = e.target.dom7EventData || [];
            if ((i.indexOf(e) < 0 && i.unshift(e), A(t).is(s))) o.apply(t, i);
            else for (var n = A(t).parents(), r = 0; r < n.length; r += 1) A(n[r]).is(s) && o.apply(n[r], i);
          }
        }
        function t(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), o.apply(this, t);
        }
        for (var i, n = [], r = arguments.length; r--; ) n[r] = arguments[r];
        var a = n[0],
          s = n[1],
          o = n[2],
          l = n[3];
        'function' == typeof n[1] && ((a = (i = n)[0]), (o = i[1]), (l = i[2]), (s = void 0)), l || (l = !1);
        for (var c, u = a.split(' '), d = 0; d < this.length; d += 1) {
          var h = this[d];
          if (s)
            for (c = 0; c < u.length; c += 1) {
              var p = u[c];
              h.dom7LiveListeners || (h.dom7LiveListeners = {}),
                h.dom7LiveListeners[p] || (h.dom7LiveListeners[p] = []),
                h.dom7LiveListeners[p].push({ listener: o, proxyListener: e }),
                h.addEventListener(p, e, l);
            }
          else
            for (c = 0; c < u.length; c += 1) {
              var f = u[c];
              h.dom7Listeners || (h.dom7Listeners = {}),
                h.dom7Listeners[f] || (h.dom7Listeners[f] = []),
                h.dom7Listeners[f].push({ listener: o, proxyListener: t }),
                h.addEventListener(f, t, l);
            }
        }
        return this;
      },
      off: function () {
        for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
        var n = t[0],
          r = t[1],
          a = t[2],
          s = t[3];
        'function' == typeof t[1] && ((n = (e = t)[0]), (a = e[1]), (s = e[2]), (r = void 0)), s || (s = !1);
        for (var o = n.split(' '), l = 0; l < o.length; l += 1)
          for (var c = o[l], u = 0; u < this.length; u += 1) {
            var d = this[u],
              h = void 0;
            if ((!r && d.dom7Listeners ? (h = d.dom7Listeners[c]) : r && d.dom7LiveListeners && (h = d.dom7LiveListeners[c]), h && h.length))
              for (var p = h.length - 1; 0 <= p; p -= 1) {
                var f = h[p];
                a && f.listener === a ? (d.removeEventListener(c, f.proxyListener, s), h.splice(p, 1)) : a || (d.removeEventListener(c, f.proxyListener, s), h.splice(p, 1));
              }
          }
        return this;
      },
      trigger: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        for (var i = e[0].split(' '), n = e[1], r = 0; r < i.length; r += 1)
          for (var a = i[r], s = 0; s < this.length; s += 1) {
            var o = this[s],
              l = void 0;
            try {
              l = new H.CustomEvent(a, { detail: n, bubbles: !0, cancelable: !0 });
            } catch (e) {
              (l = m.createEvent('Event')).initEvent(a, !0, !0), (l.detail = n);
            }
            (o.dom7EventData = e.filter(function (e, t) {
              return 0 < t;
            })),
              o.dispatchEvent(l),
              (o.dom7EventData = []),
              delete o.dom7EventData;
          }
        return this;
      },
      transitionEnd: function (t) {
        function i(e) {
          if (e.target === this) for (t.call(this, e), n = 0; n < r.length; n += 1) a.off(r[n], i);
        }
        var n,
          r = ['webkitTransitionEnd', 'transitionend'],
          a = this;
        if (t) for (n = 0; n < r.length; n += 1) a.on(r[n], i);
        return this;
      },
      outerWidth: function (e) {
        if (0 < this.length) {
          if (e) {
            var t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue('margin-right')) + parseFloat(t.getPropertyValue('margin-left'));
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (0 < this.length) {
          if (e) {
            var t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue('margin-top')) + parseFloat(t.getPropertyValue('margin-bottom'));
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      offset: function () {
        if (0 < this.length) {
          var e = this[0],
            t = e.getBoundingClientRect(),
            i = m.body,
            n = e.clientTop || i.clientTop || 0,
            r = e.clientLeft || i.clientLeft || 0,
            a = e === H ? H.scrollY : e.scrollTop,
            s = e === H ? H.scrollX : e.scrollLeft;
          return { top: t.top + a - n, left: t.left + s - r };
        }
        return null;
      },
      css: function (e, t) {
        var i;
        if (1 === arguments.length) {
          if ('string' != typeof e) {
            for (i = 0; i < this.length; i += 1) for (var n in e) this[i].style[n] = e[n];
            return this;
          }
          if (this[0]) return H.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && 'string' == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        if (!e) return this;
        for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
        return this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        var t,
          i,
          n = this[0];
        if (!n || void 0 === e) return !1;
        if ('string' == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (t = A(e), i = 0; i < t.length; i += 1) if (t[i] === n) return !0;
          return !1;
        }
        if (e === m) return n === m;
        if (e === H) return n === H;
        if (e.nodeType || e instanceof c) {
          for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t,
          i = this.length;
        return new c(i - 1 < e ? [] : e < 0 ? ((t = i + e) < 0 ? [] : [this[t]]) : [this[e]]);
      },
      append: function () {
        for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
        for (var n = 0; n < t.length; n += 1) {
          e = t[n];
          for (var r = 0; r < this.length; r += 1)
            if ('string' == typeof e) {
              var a = m.createElement('div');
              for (a.innerHTML = e; a.firstChild; ) this[r].appendChild(a.firstChild);
            } else if (e instanceof c) for (var s = 0; s < e.length; s += 1) this[r].appendChild(e[s]);
            else this[r].appendChild(e);
        }
        return this;
      },
      prepend: function (e) {
        var t,
          i,
          n = this;
        for (t = 0; t < this.length; t += 1)
          if ('string' == typeof e) {
            var r = m.createElement('div');
            for (r.innerHTML = e, i = r.childNodes.length - 1; 0 <= i; i -= 1) n[t].insertBefore(r.childNodes[i], n[t].childNodes[0]);
          } else if (e instanceof c) for (i = 0; i < e.length; i += 1) n[t].insertBefore(e[i], n[t].childNodes[0]);
          else n[t].insertBefore(e, n[t].childNodes[0]);
        return this;
      },
      next: function (e) {
        return 0 < this.length
          ? e
            ? this[0].nextElementSibling && A(this[0].nextElementSibling).is(e)
              ? new c([this[0].nextElementSibling])
              : new c([])
            : this[0].nextElementSibling
            ? new c([this[0].nextElementSibling])
            : new c([])
          : new c([]);
      },
      nextAll: function (e) {
        var t = [],
          i = this[0];
        if (!i) return new c([]);
        for (; i.nextElementSibling; ) {
          var n = i.nextElementSibling;
          e ? A(n).is(e) && t.push(n) : t.push(n), (i = n);
        }
        return new c(t);
      },
      prev: function (e) {
        if (0 < this.length) {
          var t = this[0];
          return e
            ? t.previousElementSibling && A(t.previousElementSibling).is(e)
              ? new c([t.previousElementSibling])
              : new c([])
            : t.previousElementSibling
            ? new c([t.previousElementSibling])
            : new c([]);
        }
        return new c([]);
      },
      prevAll: function (e) {
        var t = [],
          i = this[0];
        if (!i) return new c([]);
        for (; i.previousElementSibling; ) {
          var n = i.previousElementSibling;
          e ? A(n).is(e) && t.push(n) : t.push(n), (i = n);
        }
        return new c(t);
      },
      parent: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          null !== this[i].parentNode && (e ? A(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
        return A(a(t));
      },
      parents: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].parentNode; n; ) e ? A(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        return A(a(t));
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? new c([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].querySelectorAll(e), r = 0; r < n.length; r += 1) t.push(n[r]);
        return new c(t);
      },
      children: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var n = this[i].childNodes, r = 0; r < n.length; r += 1) e ? 1 === n[r].nodeType && A(n[r]).is(e) && t.push(n[r]) : 1 === n[r].nodeType && t.push(n[r]);
        return new c(a(t));
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
      add: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var i, n;
        for (i = 0; i < e.length; i += 1) {
          var r = A(e[i]);
          for (n = 0; n < r.length; n += 1) (this[this.length] = r[n]), (this.length += 1);
        }
        return this;
      },
      styles: function () {
        return this[0] ? H.getComputedStyle(this[0], null) : {};
      },
    };
    Object.keys(t).forEach(function (e) {
      A.fn[e] = t[e];
    });
    var e,
      i,
      n,
      j = {
        deleteProps: function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (e) {}
            try {
              delete t[e];
            } catch (e) {}
          });
        },
        nextTick: function (e, t) {
          return void 0 === t && (t = 0), setTimeout(e, t);
        },
        now: function () {
          return Date.now();
        },
        getTranslate: function (e, t) {
          var i, n, r;
          void 0 === t && (t = 'x');
          var a = H.getComputedStyle(e, null);
          return (
            H.WebKitCSSMatrix
              ? (6 < (n = a.transform || a.webkitTransform).split(',').length &&
                  (n = n
                    .split(', ')
                    .map(function (e) {
                      return e.replace(',', '.');
                    })
                    .join(', ')),
                (r = new H.WebKitCSSMatrix('none' === n ? '' : n)))
              : (i = (r =
                  a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,'))
                  .toString()
                  .split(',')),
            'x' === t && (n = H.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
            'y' === t && (n = H.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
            n || 0
          );
        },
        parseUrlQuery: function (e) {
          var t,
            i,
            n,
            r,
            a = {},
            s = e || H.location.href;
          if ('string' == typeof s && s.length)
            for (
              r = (i = (s = -1 < s.indexOf('?') ? s.replace(/\S*\?/, '') : '').split('&').filter(function (e) {
                return '' !== e;
              })).length,
                t = 0;
              t < r;
              t += 1
            )
              (n = i[t].replace(/#\S+/g, '').split('=')), (a[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || '');
          return a;
        },
        isObject: function (e) {
          return 'object' == typeof e && null !== e && e.constructor && e.constructor === Object;
        },
        extend: function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
            var r = e[n];
            if (null != r)
              for (var a = Object.keys(Object(r)), s = 0, o = a.length; s < o; s += 1) {
                var l = a[s],
                  c = Object.getOwnPropertyDescriptor(r, l);
                void 0 !== c &&
                  c.enumerable &&
                  (j.isObject(i[l]) && j.isObject(r[l]) ? j.extend(i[l], r[l]) : !j.isObject(i[l]) && j.isObject(r[l]) ? ((i[l] = {}), j.extend(i[l], r[l])) : (i[l] = r[l]));
              }
          }
          return i;
        },
      },
      $ =
        ((n = m.createElement('div')),
        {
          touch: (H.Modernizr && !0 === H.Modernizr.touch) || !!('ontouchstart' in H || (H.DocumentTouch && m instanceof H.DocumentTouch)),
          pointerEvents: !(!H.navigator.pointerEnabled && !H.PointerEvent),
          prefixedPointerEvents: !!H.navigator.msPointerEnabled,
          transition: ((i = n.style), 'transition' in i || 'webkitTransition' in i || 'MozTransition' in i),
          transforms3d:
            (H.Modernizr && !0 === H.Modernizr.csstransforms3d) ||
            ((e = n.style), 'webkitPerspective' in e || 'MozPerspective' in e || 'OPerspective' in e || 'MsPerspective' in e || 'perspective' in e),
          flexbox: (function () {
            for (
              var e = n.style,
                t = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(
                  ' '
                ),
                i = 0;
              i < t.length;
              i += 1
            )
              if (t[i] in e) return !0;
            return !1;
          })(),
          observer: 'MutationObserver' in H || 'WebkitMutationObserver' in H,
          passiveListener: (function () {
            var e = !1;
            try {
              var t = Object.defineProperty({}, 'passive', {
                get: function () {
                  e = !0;
                },
              });
              H.addEventListener('testPassiveListener', null, t);
            } catch (e) {}
            return e;
          })(),
          gestures: 'ongesturestart' in H,
        }),
      r = function (e) {
        void 0 === e && (e = {});
        var t = this;
        (t.params = e),
          (t.eventsListeners = {}),
          t.params &&
            t.params.on &&
            Object.keys(t.params.on).forEach(function (e) {
              t.on(e, t.params.on[e]);
            });
      },
      s = { components: { configurable: !0 } };
    (r.prototype.on = function (e, t, i) {
      var n = this;
      if ('function' != typeof t) return n;
      var r = i ? 'unshift' : 'push';
      return (
        e.split(' ').forEach(function (e) {
          n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][r](t);
        }),
        n
      );
    }),
      (r.prototype.once = function (n, r, t) {
        var a = this;
        return 'function' != typeof r
          ? a
          : a.on(
              n,
              function e() {
                for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
                r.apply(a, t), a.off(n, e);
              },
              t
            );
      }),
      (r.prototype.off = function (e, n) {
        var r = this;
        return (
          r.eventsListeners &&
            e.split(' ').forEach(function (i) {
              void 0 === n
                ? (r.eventsListeners[i] = [])
                : r.eventsListeners[i].forEach(function (e, t) {
                    e === n && r.eventsListeners[i].splice(t, 1);
                  });
            }),
          r
        );
      }),
      (r.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var i,
          n,
          r,
          a = this;
        return (
          a.eventsListeners &&
            ('string' == typeof e[0] || Array.isArray(e[0]) ? ((i = e[0]), (n = e.slice(1, e.length)), (r = a)) : ((i = e[0].events), (n = e[0].data), (r = e[0].context || a)),
            (Array.isArray(i) ? i : i.split(' ')).forEach(function (e) {
              if (a.eventsListeners && a.eventsListeners[e]) {
                var t = [];
                a.eventsListeners[e].forEach(function (e) {
                  t.push(e);
                }),
                  t.forEach(function (e) {
                    e.apply(r, n);
                  });
              }
            })),
          a
        );
      }),
      (r.prototype.useModulesParams = function (i) {
        var n = this;
        n.modules &&
          Object.keys(n.modules).forEach(function (e) {
            var t = n.modules[e];
            t.params && j.extend(i, t.params);
          });
      }),
      (r.prototype.useModules = function (n) {
        void 0 === n && (n = {});
        var r = this;
        r.modules &&
          Object.keys(r.modules).forEach(function (e) {
            var i = r.modules[e],
              t = n[e] || {};
            i.instance &&
              Object.keys(i.instance).forEach(function (e) {
                var t = i.instance[e];
                r[e] = 'function' == typeof t ? t.bind(r) : t;
              }),
              i.on &&
                r.on &&
                Object.keys(i.on).forEach(function (e) {
                  r.on(e, i.on[e]);
                }),
              i.create && i.create.bind(r)(t);
          });
      }),
      (s.components.set = function (e) {
        this.use && this.use(e);
      }),
      (r.installModule = function (t) {
        for (var e = [], i = arguments.length - 1; 0 < i--; ) e[i] = arguments[i + 1];
        var n = this;
        n.prototype.modules || (n.prototype.modules = {});
        var r = t.name || Object.keys(n.prototype.modules).length + '_' + j.now();
        return (
          (n.prototype.modules[r] = t).proto &&
            Object.keys(t.proto).forEach(function (e) {
              n.prototype[e] = t.proto[e];
            }),
          t['static'] &&
            Object.keys(t['static']).forEach(function (e) {
              n[e] = t['static'][e];
            }),
          t.install && t.install.apply(n, e),
          n
        );
      }),
      (r.use = function (e) {
        for (var t = [], i = arguments.length - 1; 0 < i--; ) t[i] = arguments[i + 1];
        var n = this;
        return Array.isArray(e)
          ? (e.forEach(function (e) {
              return n.installModule(e);
            }),
            n)
          : n.installModule.apply(n, [e].concat(t));
      }),
      Object.defineProperties(r, s);
    var o,
      u = {
        updateSize: function () {
          var e,
            t,
            i = this,
            n = i.$el;
          (e = void 0 !== i.params.width ? i.params.width : n[0].clientWidth),
            (t = void 0 !== i.params.height ? i.params.height : n[0].clientHeight),
            (0 === e && i.isHorizontal()) ||
              (0 === t && i.isVertical()) ||
              ((e = e - parseInt(n.css('padding-left'), 10) - parseInt(n.css('padding-right'), 10)),
              (t = t - parseInt(n.css('padding-top'), 10) - parseInt(n.css('padding-bottom'), 10)),
              j.extend(i, { width: e, height: t, size: i.isHorizontal() ? e : t }));
        },
        updateSlides: function () {
          var e = this,
            t = e.params,
            i = e.$wrapperEl,
            n = e.size,
            r = e.rtlTranslate,
            a = e.wrongRTL,
            s = e.virtual && t.virtual.enabled,
            o = s ? e.virtual.slides.length : e.slides.length,
            l = i.children('.' + e.params.slideClass),
            c = s ? e.virtual.slides.length : l.length,
            u = [],
            d = [],
            h = [],
            p = t.slidesOffsetBefore;
          'function' == typeof p && (p = t.slidesOffsetBefore.call(e));
          var f = t.slidesOffsetAfter;
          'function' == typeof f && (f = t.slidesOffsetAfter.call(e));
          var m = e.snapGrid.length,
            g = e.snapGrid.length,
            v = t.spaceBetween,
            y = -p,
            b = 0,
            _ = 0;
          if (void 0 !== n) {
            var w, x;
            'string' == typeof v && 0 <= v.indexOf('%') && (v = (parseFloat(v.replace('%', '')) / 100) * n),
              (e.virtualSize = -v),
              r ? l.css({ marginLeft: '', marginTop: '' }) : l.css({ marginRight: '', marginBottom: '' }),
              1 < t.slidesPerColumn &&
                ((w = Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn),
                'auto' !== t.slidesPerView && 'row' === t.slidesPerColumnFill && (w = Math.max(w, t.slidesPerView * t.slidesPerColumn)));
            for (var T, k = t.slidesPerColumn, S = w / k, C = S - (t.slidesPerColumn * S - c), E = 0; E < c; E += 1) {
              x = 0;
              var D = l.eq(E);
              if (1 < t.slidesPerColumn) {
                var M = void 0,
                  P = void 0,
                  A = void 0;
                'column' === t.slidesPerColumnFill
                  ? ((A = E - (P = Math.floor(E / k)) * k),
                    (C < P || (P === C && A === k - 1)) && k <= (A += 1) && ((A = 0), (P += 1)),
                    (M = P + (A * w) / k),
                    D.css({ '-webkit-box-ordinal-group': M, '-moz-box-ordinal-group': M, '-ms-flex-order': M, '-webkit-order': M, order: M }))
                  : (P = E - (A = Math.floor(E / S)) * S),
                  D.css('margin-' + (e.isHorizontal() ? 'top' : 'left'), 0 !== A && t.spaceBetween && t.spaceBetween + 'px')
                    .attr('data-swiper-column', P)
                    .attr('data-swiper-row', A);
              }
              if ('none' !== D.css('display')) {
                if ('auto' === t.slidesPerView) {
                  var L = H.getComputedStyle(D[0], null),
                    O = D[0].style.transform,
                    R = D[0].style.webkitTransform;
                  O && (D[0].style.transform = 'none'),
                    R && (D[0].style.webkitTransform = 'none'),
                    (x = e.isHorizontal()
                      ? D[0].getBoundingClientRect().width + parseFloat(L.getPropertyValue('margin-left')) + parseFloat(L.getPropertyValue('margin-right'))
                      : D[0].getBoundingClientRect().height + parseFloat(L.getPropertyValue('margin-top')) + parseFloat(L.getPropertyValue('margin-bottom'))),
                    O && (D[0].style.transform = O),
                    R && (D[0].style.webkitTransform = R),
                    t.roundLengths && (x = Math.floor(x));
                } else
                  (x = (n - (t.slidesPerView - 1) * v) / t.slidesPerView),
                    t.roundLengths && (x = Math.floor(x)),
                    l[E] && (e.isHorizontal() ? (l[E].style.width = x + 'px') : (l[E].style.height = x + 'px'));
                l[E] && (l[E].swiperSlideSize = x),
                  h.push(x),
                  t.centeredSlides
                    ? ((y = y + x / 2 + b / 2 + v),
                      0 === b && 0 !== E && (y = y - n / 2 - v),
                      0 === E && (y = y - n / 2 - v),
                      Math.abs(y) < 0.001 && (y = 0),
                      t.roundLengths && (y = Math.floor(y)),
                      _ % t.slidesPerGroup == 0 && u.push(y),
                      d.push(y))
                    : (t.roundLengths && (y = Math.floor(y)), _ % t.slidesPerGroup == 0 && u.push(y), d.push(y), (y = y + x + v)),
                  (e.virtualSize += x + v),
                  (b = x),
                  (_ += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, n) + f),
              r && a && ('slide' === t.effect || 'coverflow' === t.effect) && i.css({ width: e.virtualSize + t.spaceBetween + 'px' }),
              ($.flexbox && !t.setWrapperSize) ||
                (e.isHorizontal() ? i.css({ width: e.virtualSize + t.spaceBetween + 'px' }) : i.css({ height: e.virtualSize + t.spaceBetween + 'px' })),
              1 < t.slidesPerColumn &&
                ((e.virtualSize = (x + t.spaceBetween) * w),
                (e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                e.isHorizontal() ? i.css({ width: e.virtualSize + t.spaceBetween + 'px' }) : i.css({ height: e.virtualSize + t.spaceBetween + 'px' }),
                t.centeredSlides))
            ) {
              T = [];
              for (var I = 0; I < u.length; I += 1) {
                var N = u[I];
                t.roundLengths && (N = Math.floor(N)), u[I] < e.virtualSize + u[0] && T.push(N);
              }
              u = T;
            }
            if (!t.centeredSlides) {
              T = [];
              for (var z = 0; z < u.length; z += 1) {
                var F = u[z];
                t.roundLengths && (F = Math.floor(F)), u[z] <= e.virtualSize - n && T.push(F);
              }
              (u = T), 1 < Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) && u.push(e.virtualSize - n);
            }
            0 === u.length && (u = [0]),
              0 !== t.spaceBetween && (e.isHorizontal() ? (r ? l.css({ marginLeft: v + 'px' }) : l.css({ marginRight: v + 'px' })) : l.css({ marginBottom: v + 'px' })),
              j.extend(e, { slides: l, snapGrid: u, slidesGrid: d, slidesSizesGrid: h }),
              c !== o && e.emit('slidesLengthChange'),
              u.length !== m && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
              d.length !== g && e.emit('slidesGridLengthChange'),
              (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            i = this,
            n = [],
            r = 0;
          if (('number' == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), 'auto' !== i.params.slidesPerView && 1 < i.params.slidesPerView))
            for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
              var a = i.activeIndex + t;
              if (a > i.slides.length) break;
              n.push(i.slides.eq(a)[0]);
            }
          else n.push(i.slides.eq(i.activeIndex)[0]);
          for (t = 0; t < n.length; t += 1)
            if (void 0 !== n[t]) {
              var s = n[t].offsetHeight;
              r = r < s ? s : r;
            }
          r && i.$wrapperEl.css('height', r + 'px');
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            i = t.params,
            n = t.slides,
            r = t.rtlTranslate;
          if (0 !== n.length) {
            void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
            var a = -e;
            r && (a = e), n.removeClass(i.slideVisibleClass);
            for (var s = 0; s < n.length; s += 1) {
              var o = n[s],
                l = (a + (i.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + i.spaceBetween);
              if (i.watchSlidesVisibility) {
                var c = -(a - o.swiperSlideOffset),
                  u = c + t.slidesSizesGrid[s];
                ((0 <= c && c < t.size) || (0 < u && u <= t.size) || (c <= 0 && u >= t.size)) && n.eq(s).addClass(i.slideVisibleClass);
              }
              o.progress = r ? -l : l;
            }
          }
        },
        updateProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            i = t.params,
            n = t.maxTranslate() - t.minTranslate(),
            r = t.progress,
            a = t.isBeginning,
            s = t.isEnd,
            o = a,
            l = s;
          0 === n ? (s = a = !(r = 0)) : ((a = (r = (e - t.minTranslate()) / n) <= 0), (s = 1 <= r)),
            j.extend(t, { progress: r, isBeginning: a, isEnd: s }),
            (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e),
            a && !o && t.emit('reachBeginning toEdge'),
            s && !l && t.emit('reachEnd toEdge'),
            ((o && !a) || (l && !s)) && t.emit('fromEdge'),
            t.emit('progress', r);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            i = t.slides,
            n = t.params,
            r = t.$wrapperEl,
            a = t.activeIndex,
            s = t.realIndex,
            o = t.virtual && n.virtual.enabled;
          i.removeClass(
            n.slideActiveClass +
              ' ' +
              n.slideNextClass +
              ' ' +
              n.slidePrevClass +
              ' ' +
              n.slideDuplicateActiveClass +
              ' ' +
              n.slideDuplicateNextClass +
              ' ' +
              n.slideDuplicatePrevClass
          ),
            (e = o ? t.$wrapperEl.find('.' + n.slideClass + '[data-swiper-slide-index="' + a + '"]') : i.eq(a)).addClass(n.slideActiveClass),
            n.loop &&
              (e.hasClass(n.slideDuplicateClass)
                ? r.children('.' + n.slideClass + ':not(.' + n.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(n.slideDuplicateActiveClass)
                : r.children('.' + n.slideClass + '.' + n.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(n.slideDuplicateActiveClass));
          var l = e
            .nextAll('.' + n.slideClass)
            .eq(0)
            .addClass(n.slideNextClass);
          n.loop && 0 === l.length && (l = i.eq(0)).addClass(n.slideNextClass);
          var c = e
            .prevAll('.' + n.slideClass)
            .eq(0)
            .addClass(n.slidePrevClass);
          n.loop && 0 === c.length && (c = i.eq(-1)).addClass(n.slidePrevClass),
            n.loop &&
              (l.hasClass(n.slideDuplicateClass)
                ? r
                    .children('.' + n.slideClass + ':not(.' + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr('data-swiper-slide-index') + '"]')
                    .addClass(n.slideDuplicateNextClass)
                : r
                    .children('.' + n.slideClass + '.' + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr('data-swiper-slide-index') + '"]')
                    .addClass(n.slideDuplicateNextClass),
              c.hasClass(n.slideDuplicateClass)
                ? r
                    .children('.' + n.slideClass + ':not(.' + n.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr('data-swiper-slide-index') + '"]')
                    .addClass(n.slideDuplicatePrevClass)
                : r
                    .children('.' + n.slideClass + '.' + n.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr('data-swiper-slide-index') + '"]')
                    .addClass(n.slideDuplicatePrevClass));
        },
        updateActiveIndex: function (e) {
          var t,
            i = this,
            n = i.rtlTranslate ? i.translate : -i.translate,
            r = i.slidesGrid,
            a = i.snapGrid,
            s = i.params,
            o = i.activeIndex,
            l = i.realIndex,
            c = i.snapIndex,
            u = e;
          if (void 0 === u) {
            for (var d = 0; d < r.length; d += 1)
              void 0 !== r[d + 1] ? (n >= r[d] && n < r[d + 1] - (r[d + 1] - r[d]) / 2 ? (u = d) : n >= r[d] && n < r[d + 1] && (u = d + 1)) : n >= r[d] && (u = d);
            s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
          }
          if (((t = 0 <= a.indexOf(n) ? a.indexOf(n) : Math.floor(u / s.slidesPerGroup)) >= a.length && (t = a.length - 1), u !== o)) {
            var h = parseInt(i.slides.eq(u).attr('data-swiper-slide-index') || u, 10);
            j.extend(i, { snapIndex: t, realIndex: h, previousIndex: o, activeIndex: u }),
              i.emit('activeIndexChange'),
              i.emit('snapIndexChange'),
              l !== h && i.emit('realIndexChange'),
              i.emit('slideChange');
          } else t !== c && ((i.snapIndex = t), i.emit('snapIndexChange'));
        },
        updateClickedSlide: function (e) {
          var t = this,
            i = t.params,
            n = A(e.target).closest('.' + i.slideClass)[0],
            r = !1;
          if (n) for (var a = 0; a < t.slides.length; a += 1) t.slides[a] === n && (r = !0);
          if (!n || !r) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = n),
            t.virtual && t.params.virtual.enabled ? (t.clickedIndex = parseInt(A(n).attr('data-swiper-slide-index'), 10)) : (t.clickedIndex = A(n).index()),
            i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
        },
      },
      d = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
          var t = this.params,
            i = this.rtlTranslate,
            n = this.translate,
            r = this.$wrapperEl;
          if (t.virtualTranslate) return i ? -n : n;
          var a = j.getTranslate(r[0], e);
          return i && (a = -a), a || 0;
        },
        setTranslate: function (e, t) {
          var i = this,
            n = i.rtlTranslate,
            r = i.params,
            a = i.$wrapperEl,
            s = i.progress,
            o = 0,
            l = 0;
          i.isHorizontal() ? (o = n ? -e : e) : (l = e),
            r.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
            r.virtualTranslate || ($.transforms3d ? a.transform('translate3d(' + o + 'px, ' + l + 'px, 0px)') : a.transform('translate(' + o + 'px, ' + l + 'px)')),
            (i.previousTranslate = i.translate),
            (i.translate = i.isHorizontal() ? o : l);
          var c = i.maxTranslate() - i.minTranslate();
          (0 === c ? 0 : (e - i.minTranslate()) / c) !== s && i.updateProgress(e), i.emit('setTranslate', i.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
      },
      h = {
        setTransition: function (e, t) {
          this.$wrapperEl.transition(e), this.emit('setTransition', e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          var i = this,
            n = i.activeIndex,
            r = i.params,
            a = i.previousIndex;
          r.autoHeight && i.updateAutoHeight();
          var s = t;
          if ((s || (s = a < n ? 'next' : n < a ? 'prev' : 'reset'), i.emit('transitionStart'), e && n !== a)) {
            if ('reset' === s) return void i.emit('slideResetTransitionStart');
            i.emit('slideChangeTransitionStart'), 'next' === s ? i.emit('slideNextTransitionStart') : i.emit('slidePrevTransitionStart');
          }
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          var i = this,
            n = i.activeIndex,
            r = i.previousIndex;
          (i.animating = !1), i.setTransition(0);
          var a = t;
          if ((a || (a = r < n ? 'next' : n < r ? 'prev' : 'reset'), i.emit('transitionEnd'), e && n !== r)) {
            if ('reset' === a) return void i.emit('slideResetTransitionEnd');
            i.emit('slideChangeTransitionEnd'), 'next' === a ? i.emit('slideNextTransitionEnd') : i.emit('slidePrevTransitionEnd');
          }
        },
      },
      p = {
        slideTo: function (e, t, i, n) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
          var r = this,
            a = e;
          a < 0 && (a = 0);
          var s = r.params,
            o = r.snapGrid,
            l = r.slidesGrid,
            c = r.previousIndex,
            u = r.activeIndex,
            d = r.rtlTranslate;
          if (r.animating && s.preventInteractionOnTransition) return !1;
          var h = Math.floor(a / s.slidesPerGroup);
          h >= o.length && (h = o.length - 1), (u || s.initialSlide || 0) === (c || 0) && i && r.emit('beforeSlideChangeStart');
          var p,
            f = -o[h];
          if ((r.updateProgress(f), s.normalizeSlideIndex)) for (var m = 0; m < l.length; m += 1) -Math.floor(100 * f) >= Math.floor(100 * l[m]) && (a = m);
          if (r.initialized && a !== u) {
            if (!r.allowSlideNext && f < r.translate && f < r.minTranslate()) return !1;
            if (!r.allowSlidePrev && f > r.translate && f > r.maxTranslate() && (u || 0) !== a) return !1;
          }
          return (
            (p = u < a ? 'next' : a < u ? 'prev' : 'reset'),
            (d && -f === r.translate) || (!d && f === r.translate)
              ? (r.updateActiveIndex(a),
                s.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                'slide' !== s.effect && r.setTranslate(f),
                'reset' !== p && (r.transitionStart(i, p), r.transitionEnd(i, p)),
                !1)
              : (0 !== t && $.transition
                  ? (r.setTransition(t),
                    r.setTranslate(f),
                    r.updateActiveIndex(a),
                    r.updateSlidesClasses(),
                    r.emit('beforeTransitionStart', t, n),
                    r.transitionStart(i, p),
                    r.animating ||
                      ((r.animating = !0),
                      r.onSlideToWrapperTransitionEnd ||
                        (r.onSlideToWrapperTransitionEnd = function (e) {
                          r &&
                            !r.destroyed &&
                            e.target === this &&
                            (r.$wrapperEl[0].removeEventListener('transitionend', r.onSlideToWrapperTransitionEnd),
                            r.$wrapperEl[0].removeEventListener('webkitTransitionEnd', r.onSlideToWrapperTransitionEnd),
                            (r.onSlideToWrapperTransitionEnd = null),
                            delete r.onSlideToWrapperTransitionEnd,
                            r.transitionEnd(i, p));
                        }),
                      r.$wrapperEl[0].addEventListener('transitionend', r.onSlideToWrapperTransitionEnd),
                      r.$wrapperEl[0].addEventListener('webkitTransitionEnd', r.onSlideToWrapperTransitionEnd)))
                  : (r.setTransition(0),
                    r.setTranslate(f),
                    r.updateActiveIndex(a),
                    r.updateSlidesClasses(),
                    r.emit('beforeTransitionStart', t, n),
                    r.transitionStart(i, p),
                    r.transitionEnd(i, p)),
                !0)
          );
        },
        slideToLoop: function (e, t, i, n) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
          var r = e;
          return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, i, n);
        },
        slideNext: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var n = this,
            r = n.params,
            a = n.animating;
          return r.loop
            ? !a && (n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft), n.slideTo(n.activeIndex + r.slidesPerGroup, e, t, i))
            : n.slideTo(n.activeIndex + r.slidesPerGroup, e, t, i);
        },
        slidePrev: function (e, t, i) {
          function n(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
            a = r.params,
            s = r.animating,
            o = r.snapGrid,
            l = r.slidesGrid,
            c = r.rtlTranslate;
          if (a.loop) {
            if (s) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          var u,
            d = n(c ? r.translate : -r.translate),
            h = o.map(function (e) {
              return n(e);
            }),
            p =
              (l.map(function (e) {
                return n(e);
              }),
              o[h.indexOf(d)],
              o[h.indexOf(d) - 1]);
          return void 0 !== p && (u = l.indexOf(p)) < 0 && (u = r.activeIndex - 1), r.slideTo(u, e, t, i);
        },
        slideReset: function (e, t, i) {
          return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
        },
        slideToClosest: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var n = this,
            r = n.activeIndex,
            a = Math.floor(r / n.params.slidesPerGroup);
          if (a < n.snapGrid.length - 1) {
            var s = n.rtlTranslate ? n.translate : -n.translate,
              o = n.snapGrid[a];
            (n.snapGrid[a + 1] - o) / 2 < s - o && (r = n.params.slidesPerGroup);
          }
          return n.slideTo(r, e, t, i);
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            i = t.params,
            n = t.$wrapperEl,
            r = 'auto' === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
            a = t.clickedIndex;
          if (i.loop) {
            if (t.animating) return;
            (e = parseInt(A(t.clickedSlide).attr('data-swiper-slide-index'), 10)),
              i.centeredSlides
                ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2
                  ? (t.loopFix(),
                    (a = n
                      .children('.' + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ')')
                      .eq(0)
                      .index()),
                    j.nextTick(function () {
                      t.slideTo(a);
                    }))
                  : t.slideTo(a)
                : a > t.slides.length - r
                ? (t.loopFix(),
                  (a = n
                    .children('.' + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ')')
                    .eq(0)
                    .index()),
                  j.nextTick(function () {
                    t.slideTo(a);
                  }))
                : t.slideTo(a);
          } else t.slideTo(a);
        },
      },
      f = {
        loopCreate: function () {
          var n = this,
            e = n.params,
            t = n.$wrapperEl;
          t.children('.' + e.slideClass + '.' + e.slideDuplicateClass).remove();
          var r = t.children('.' + e.slideClass);
          if (e.loopFillGroupWithBlank) {
            var i = e.slidesPerGroup - (r.length % e.slidesPerGroup);
            if (i !== e.slidesPerGroup) {
              for (var a = 0; a < i; a += 1) {
                var s = A(m.createElement('div')).addClass(e.slideClass + ' ' + e.slideBlankClass);
                t.append(s);
              }
              r = t.children('.' + e.slideClass);
            }
          }
          'auto' !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = r.length),
            (n.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10)),
            (n.loopedSlides += e.loopAdditionalSlides),
            n.loopedSlides > r.length && (n.loopedSlides = r.length);
          var o = [],
            l = [];
          r.each(function (e, t) {
            var i = A(t);
            e < n.loopedSlides && l.push(t), e < r.length && e >= r.length - n.loopedSlides && o.push(t), i.attr('data-swiper-slide-index', e);
          });
          for (var c = 0; c < l.length; c += 1) t.append(A(l[c].cloneNode(!0)).addClass(e.slideDuplicateClass));
          for (var u = o.length - 1; 0 <= u; u -= 1) t.prepend(A(o[u].cloneNode(!0)).addClass(e.slideDuplicateClass));
        },
        loopFix: function () {
          var e,
            t = this,
            i = t.params,
            n = t.activeIndex,
            r = t.slides,
            a = t.loopedSlides,
            s = t.allowSlidePrev,
            o = t.allowSlideNext,
            l = t.snapGrid,
            c = t.rtlTranslate;
          (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
          var u = -l[n] - t.getTranslate();
          n < a
            ? ((e = r.length - 3 * a + n), (e += a), t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((c ? -t.translate : t.translate) - u))
            : (('auto' === i.slidesPerView && 2 * a <= n) || n >= r.length - a) &&
              ((e = -r.length + n + a), (e += a), t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((c ? -t.translate : t.translate) - u)),
            (t.allowSlidePrev = s),
            (t.allowSlideNext = o);
        },
        loopDestroy: function () {
          var e = this.$wrapperEl,
            t = this.params,
            i = this.slides;
          e.children('.' + t.slideClass + '.' + t.slideDuplicateClass).remove(), i.removeAttr('data-swiper-slide-index');
        },
      },
      g = {
        setGrabCursor: function (e) {
          if (!($.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked))) {
            var t = this.el;
            (t.style.cursor = 'move'),
              (t.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
              (t.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
              (t.style.cursor = e ? 'grabbing' : 'grab');
          }
        },
        unsetGrabCursor: function () {
          $.touch || (this.params.watchOverflow && this.isLocked) || (this.el.style.cursor = '');
        },
      },
      v = {
        appendSlide: function (e) {
          var t = this,
            i = t.$wrapperEl,
            n = t.params;
          if ((n.loop && t.loopDestroy(), 'object' == typeof e && 'length' in e)) for (var r = 0; r < e.length; r += 1) e[r] && i.append(e[r]);
          else i.append(e);
          n.loop && t.loopCreate(), (n.observer && $.observer) || t.update();
        },
        prependSlide: function (e) {
          var t = this,
            i = t.params,
            n = t.$wrapperEl,
            r = t.activeIndex;
          i.loop && t.loopDestroy();
          var a = r + 1;
          if ('object' == typeof e && 'length' in e) {
            for (var s = 0; s < e.length; s += 1) e[s] && n.prepend(e[s]);
            a = r + e.length;
          } else n.prepend(e);
          i.loop && t.loopCreate(), (i.observer && $.observer) || t.update(), t.slideTo(a, 0, !1);
        },
        addSlide: function (e, t) {
          var i = this,
            n = i.$wrapperEl,
            r = i.params,
            a = i.activeIndex;
          r.loop && ((a -= i.loopedSlides), i.loopDestroy(), (i.slides = n.children('.' + r.slideClass)));
          var s = i.slides.length;
          if (e <= 0) i.prependSlide(t);
          else if (s <= e) i.appendSlide(t);
          else {
            for (var o = e < a ? a + 1 : a, l = [], c = s - 1; e <= c; c -= 1) {
              var u = i.slides.eq(c);
              u.remove(), l.unshift(u);
            }
            if ('object' == typeof t && 'length' in t) {
              for (var d = 0; d < t.length; d += 1) t[d] && n.append(t[d]);
              o = e < a ? a + t.length : a;
            } else n.append(t);
            for (var h = 0; h < l.length; h += 1) n.append(l[h]);
            r.loop && i.loopCreate(), (r.observer && $.observer) || i.update(), r.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1);
          }
        },
        removeSlide: function (e) {
          var t = this,
            i = t.params,
            n = t.$wrapperEl,
            r = t.activeIndex;
          i.loop && ((r -= t.loopedSlides), t.loopDestroy(), (t.slides = n.children('.' + i.slideClass)));
          var a,
            s = r;
          if ('object' == typeof e && 'length' in e) {
            for (var o = 0; o < e.length; o += 1) (a = e[o]), t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1);
            s = Math.max(s, 0);
          } else (a = e), t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1), (s = Math.max(s, 0));
          i.loop && t.loopCreate(), (i.observer && $.observer) || t.update(), i.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1);
        },
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        },
      },
      y = (function () {
        var e = H.navigator.userAgent,
          t = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: H.cordova || H.phonegap,
            phonegap: H.cordova || H.phonegap,
          },
          i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
          n = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          r = e.match(/(iPad).*OS\s([\d_]+)/),
          a = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          s = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (
          (i && ((t.os = 'windows'), (t.osVersion = i[2]), (t.windows = !0)),
          n && !i && ((t.os = 'android'), (t.osVersion = n[2]), (t.android = !0), (t.androidChrome = 0 <= e.toLowerCase().indexOf('chrome'))),
          (r || s || a) && ((t.os = 'ios'), (t.ios = !0)),
          s && !a && ((t.osVersion = s[2].replace(/_/g, '.')), (t.iphone = !0)),
          r && ((t.osVersion = r[2].replace(/_/g, '.')), (t.ipad = !0)),
          a && ((t.osVersion = a[3] ? a[3].replace(/_/g, '.') : null), (t.iphone = !0)),
          t.ios && t.osVersion && 0 <= e.indexOf('Version/') && '10' === t.osVersion.split('.')[0] && (t.osVersion = e.toLowerCase().split('version/')[1].split(' ')[0]),
          (t.desktop = !(t.os || t.android || t.webView)),
          (t.webView = (s || r || a) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
          t.os && 'ios' === t.os)
        ) {
          var o = t.osVersion.split('.'),
            l = m.querySelector('meta[name="viewport"]');
          t.minimalUi = !t.webView && (a || s) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute('content').indexOf('minimal-ui');
        }
        return (t.pixelRatio = H.devicePixelRatio || 1), t;
      })(),
      b = {
        attachEvents: function () {
          var e = this,
            t = e.params,
            i = e.touchEvents,
            n = e.el,
            r = e.wrapperEl;
          (e.onTouchStart = function (e) {
            var t = this,
              i = t.touchEventsData,
              n = t.params,
              r = t.touches;
            if (!t.animating || !n.preventInteractionOnTransition) {
              var a = e;
              if (
                (a.originalEvent && (a = a.originalEvent),
                (i.isTouchEvent = 'touchstart' === a.type),
                (i.isTouchEvent || !('which' in a) || 3 !== a.which) && (!i.isTouched || !i.isMoved))
              )
                if (n.noSwiping && A(a.target).closest(n.noSwipingSelector ? n.noSwipingSelector : '.' + n.noSwipingClass)[0]) t.allowClick = !0;
                else if (!n.swipeHandler || A(a).closest(n.swipeHandler)[0]) {
                  (r.currentX = 'touchstart' === a.type ? a.targetTouches[0].pageX : a.pageX), (r.currentY = 'touchstart' === a.type ? a.targetTouches[0].pageY : a.pageY);
                  var s = r.currentX,
                    o = r.currentY,
                    l = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                    c = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                  if (!l || !(s <= c || s >= H.screen.width - c)) {
                    if (
                      (j.extend(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                      (r.startX = s),
                      (r.startY = o),
                      (i.touchStartTime = j.now()),
                      (t.allowClick = !0),
                      t.updateSize(),
                      (t.swipeDirection = void 0),
                      0 < n.threshold && (i.allowThresholdMove = !1),
                      'touchstart' !== a.type)
                    ) {
                      var u = !0;
                      A(a.target).is(i.formElements) && (u = !1),
                        m.activeElement && A(m.activeElement).is(i.formElements) && m.activeElement !== a.target && m.activeElement.blur(),
                        u && t.allowTouchMove && a.preventDefault();
                    }
                    t.emit('touchStart', a);
                  }
                }
            }
          }.bind(e)),
            (e.onTouchMove = function (e) {
              var t = this,
                i = t.touchEventsData,
                n = t.params,
                r = t.touches,
                a = t.rtlTranslate,
                s = e;
              if ((s.originalEvent && (s = s.originalEvent), i.isTouched)) {
                if (!i.isTouchEvent || 'mousemove' !== s.type) {
                  var o = 'touchmove' === s.type ? s.targetTouches[0].pageX : s.pageX,
                    l = 'touchmove' === s.type ? s.targetTouches[0].pageY : s.pageY;
                  if (s.preventedByNestedSwiper) return (r.startX = o), void (r.startY = l);
                  if (!t.allowTouchMove)
                    return (t.allowClick = !1), void (i.isTouched && (j.extend(r, { startX: o, startY: l, currentX: o, currentY: l }), (i.touchStartTime = j.now())));
                  if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                    if (t.isVertical()) {
                      if ((l < r.startY && t.translate <= t.maxTranslate()) || (l > r.startY && t.translate >= t.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
                    } else if ((o < r.startX && t.translate <= t.maxTranslate()) || (o > r.startX && t.translate >= t.minTranslate())) return;
                  if (i.isTouchEvent && m.activeElement && s.target === m.activeElement && A(s.target).is(i.formElements)) return (i.isMoved = !0), void (t.allowClick = !1);
                  if ((i.allowTouchCallbacks && t.emit('touchMove', s), !(s.targetTouches && 1 < s.targetTouches.length))) {
                    (r.currentX = o), (r.currentY = l);
                    var c,
                      u = r.currentX - r.startX,
                      d = r.currentY - r.startY;
                    if (!(t.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(d, 2)) < t.params.threshold))
                      if (
                        (void 0 === i.isScrolling &&
                          ((t.isHorizontal() && r.currentY === r.startY) || (t.isVertical() && r.currentX === r.startX)
                            ? (i.isScrolling = !1)
                            : 25 <= u * u + d * d &&
                              ((c = (180 * Math.atan2(Math.abs(d), Math.abs(u))) / Math.PI), (i.isScrolling = t.isHorizontal() ? c > n.touchAngle : 90 - c > n.touchAngle))),
                        i.isScrolling && t.emit('touchMoveOpposite', s),
                        void 0 === i.startMoving && ((r.currentX === r.startX && r.currentY === r.startY) || (i.startMoving = !0)),
                        i.isScrolling)
                      )
                        i.isTouched = !1;
                      else if (i.startMoving) {
                        (t.allowClick = !1),
                          s.preventDefault(),
                          n.touchMoveStopPropagation && !n.nested && s.stopPropagation(),
                          i.isMoved ||
                            (n.loop && t.loopFix(),
                            (i.startTranslate = t.getTranslate()),
                            t.setTransition(0),
                            t.animating && t.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
                            (i.allowMomentumBounce = !1),
                            !n.grabCursor || (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) || t.setGrabCursor(!0),
                            t.emit('sliderFirstMove', s)),
                          t.emit('sliderMove', s),
                          (i.isMoved = !0);
                        var h = t.isHorizontal() ? u : d;
                        (r.diff = h), (h *= n.touchRatio), a && (h = -h), (t.swipeDirection = 0 < h ? 'prev' : 'next'), (i.currentTranslate = h + i.startTranslate);
                        var p = !0,
                          f = n.resistanceRatio;
                        if (
                          (n.touchReleaseOnEdges && (f = 0),
                          0 < h && i.currentTranslate > t.minTranslate()
                            ? ((p = !1), n.resistance && (i.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + i.startTranslate + h, f)))
                            : h < 0 &&
                              i.currentTranslate < t.maxTranslate() &&
                              ((p = !1), n.resistance && (i.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - i.startTranslate - h, f))),
                          p && (s.preventedByNestedSwiper = !0),
                          !t.allowSlideNext && 'next' === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                          !t.allowSlidePrev && 'prev' === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                          0 < n.threshold)
                        ) {
                          if (!(Math.abs(h) > n.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                          if (!i.allowThresholdMove)
                            return (
                              (i.allowThresholdMove = !0),
                              (r.startX = r.currentX),
                              (r.startY = r.currentY),
                              (i.currentTranslate = i.startTranslate),
                              void (r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                            );
                        }
                        n.followFinger &&
                          ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()),
                          n.freeMode &&
                            (0 === i.velocities.length && i.velocities.push({ position: r[t.isHorizontal() ? 'startX' : 'startY'], time: i.touchStartTime }),
                            i.velocities.push({ position: r[t.isHorizontal() ? 'currentX' : 'currentY'], time: j.now() })),
                          t.updateProgress(i.currentTranslate),
                          t.setTranslate(i.currentTranslate));
                      }
                  }
                }
              } else i.startMoving && i.isScrolling && t.emit('touchMoveOpposite', s);
            }.bind(e)),
            (e.onTouchEnd = function (e) {
              var t = this,
                i = t.touchEventsData,
                n = t.params,
                r = t.touches,
                a = t.rtlTranslate,
                s = t.$wrapperEl,
                o = t.slidesGrid,
                l = t.snapGrid,
                c = e;
              if ((c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit('touchEnd', c), (i.allowTouchCallbacks = !1), !i.isTouched))
                return i.isMoved && n.grabCursor && t.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1);
              n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
              var u,
                d = j.now(),
                h = d - i.touchStartTime;
              if (
                (t.allowClick &&
                  (t.updateClickedSlide(c),
                  t.emit('tap', c),
                  h < 300 &&
                    300 < d - i.lastClickTime &&
                    (i.clickTimeout && clearTimeout(i.clickTimeout),
                    (i.clickTimeout = j.nextTick(function () {
                      t && !t.destroyed && t.emit('click', c);
                    }, 300))),
                  h < 300 && d - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit('doubleTap', c))),
                (i.lastClickTime = j.now()),
                j.nextTick(function () {
                  t.destroyed || (t.allowClick = !0);
                }),
                !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate)
              )
                return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
              if (((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1), (u = n.followFinger ? (a ? t.translate : -t.translate) : -i.currentTranslate), n.freeMode)) {
                if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (u > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                if (n.freeModeMomentum) {
                  if (1 < i.velocities.length) {
                    var p = i.velocities.pop(),
                      f = i.velocities.pop(),
                      m = p.position - f.position,
                      g = p.time - f.time;
                    (t.velocity = m / g),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0),
                      (150 < g || 300 < j.now() - p.time) && (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= n.freeModeMomentumVelocityRatio), (i.velocities.length = 0);
                  var v = 1e3 * n.freeModeMomentumRatio,
                    y = t.velocity * v,
                    b = t.translate + y;
                  a && (b = -b);
                  var _,
                    w,
                    x = !1,
                    T = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                  if (b < t.maxTranslate())
                    n.freeModeMomentumBounce
                      ? (b + t.maxTranslate() < -T && (b = t.maxTranslate() - T), (_ = t.maxTranslate()), (x = !0), (i.allowMomentumBounce = !0))
                      : (b = t.maxTranslate()),
                      n.loop && n.centeredSlides && (w = !0);
                  else if (b > t.minTranslate())
                    n.freeModeMomentumBounce
                      ? (b - t.minTranslate() > T && (b = t.minTranslate() + T), (_ = t.minTranslate()), (x = !0), (i.allowMomentumBounce = !0))
                      : (b = t.minTranslate()),
                      n.loop && n.centeredSlides && (w = !0);
                  else if (n.freeModeSticky) {
                    for (var k, S = 0; S < l.length; S += 1)
                      if (l[S] > -b) {
                        k = S;
                        break;
                      }
                    b = -(b = Math.abs(l[k] - b) < Math.abs(l[k - 1] - b) || 'next' === t.swipeDirection ? l[k] : l[k - 1]);
                  }
                  if (
                    (w &&
                      t.once('transitionEnd', function () {
                        t.loopFix();
                      }),
                    0 !== t.velocity)
                  )
                    v = a ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity);
                  else if (n.freeModeSticky) return void t.slideToClosest();
                  n.freeModeMomentumBounce && x
                    ? (t.updateProgress(_),
                      t.setTransition(v),
                      t.setTranslate(b),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      s.transitionEnd(function () {
                        t &&
                          !t.destroyed &&
                          i.allowMomentumBounce &&
                          (t.emit('momentumBounce'),
                          t.setTransition(n.speed),
                          t.setTranslate(_),
                          s.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd();
                          }));
                      }))
                    : t.velocity
                    ? (t.updateProgress(b),
                      t.setTransition(v),
                      t.setTranslate(b),
                      t.transitionStart(!0, t.swipeDirection),
                      t.animating ||
                        ((t.animating = !0),
                        s.transitionEnd(function () {
                          t && !t.destroyed && t.transitionEnd();
                        })))
                    : t.updateProgress(b),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                } else if (n.freeModeSticky) return void t.slideToClosest();
                (!n.freeModeMomentum || h >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
              } else {
                for (var C = 0, E = t.slidesSizesGrid[0], D = 0; D < o.length; D += n.slidesPerGroup)
                  void 0 !== o[D + n.slidesPerGroup]
                    ? u >= o[D] && u < o[D + n.slidesPerGroup] && (E = o[(C = D) + n.slidesPerGroup] - o[D])
                    : u >= o[D] && ((C = D), (E = o[o.length - 1] - o[o.length - 2]));
                var M = (u - o[C]) / E;
                if (h > n.longSwipesMs) {
                  if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                  'next' === t.swipeDirection && (M >= n.longSwipesRatio ? t.slideTo(C + n.slidesPerGroup) : t.slideTo(C)),
                    'prev' === t.swipeDirection && (M > 1 - n.longSwipesRatio ? t.slideTo(C + n.slidesPerGroup) : t.slideTo(C));
                } else {
                  if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                  'next' === t.swipeDirection && t.slideTo(C + n.slidesPerGroup), 'prev' === t.swipeDirection && t.slideTo(C);
                }
              }
            }.bind(e)),
            (e.onClick = function (e) {
              this.allowClick ||
                (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
            }.bind(e));
          var a = 'container' === t.touchEventsTarget ? n : r,
            s = !!t.nested;
          if ($.touch || (!$.pointerEvents && !$.prefixedPointerEvents)) {
            if ($.touch) {
              var o = !('touchstart' !== i.start || !$.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
              a.addEventListener(i.start, e.onTouchStart, o),
                a.addEventListener(i.move, e.onTouchMove, $.passiveListener ? { passive: !1, capture: s } : s),
                a.addEventListener(i.end, e.onTouchEnd, o);
            }
            ((t.simulateTouch && !y.ios && !y.android) || (t.simulateTouch && !$.touch && y.ios)) &&
              (a.addEventListener('mousedown', e.onTouchStart, !1), m.addEventListener('mousemove', e.onTouchMove, s), m.addEventListener('mouseup', e.onTouchEnd, !1));
          } else a.addEventListener(i.start, e.onTouchStart, !1), m.addEventListener(i.move, e.onTouchMove, s), m.addEventListener(i.end, e.onTouchEnd, !1);
          (t.preventClicks || t.preventClicksPropagation) && a.addEventListener('click', e.onClick, !0),
            e.on(y.ios || y.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', l, !0);
        },
        detachEvents: function () {
          var e = this,
            t = e.params,
            i = e.touchEvents,
            n = e.el,
            r = e.wrapperEl,
            a = 'container' === t.touchEventsTarget ? n : r,
            s = !!t.nested;
          if ($.touch || (!$.pointerEvents && !$.prefixedPointerEvents)) {
            if ($.touch) {
              var o = !('onTouchStart' !== i.start || !$.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
              a.removeEventListener(i.start, e.onTouchStart, o), a.removeEventListener(i.move, e.onTouchMove, s), a.removeEventListener(i.end, e.onTouchEnd, o);
            }
            ((t.simulateTouch && !y.ios && !y.android) || (t.simulateTouch && !$.touch && y.ios)) &&
              (a.removeEventListener('mousedown', e.onTouchStart, !1), m.removeEventListener('mousemove', e.onTouchMove, s), m.removeEventListener('mouseup', e.onTouchEnd, !1));
          } else a.removeEventListener(i.start, e.onTouchStart, !1), m.removeEventListener(i.move, e.onTouchMove, s), m.removeEventListener(i.end, e.onTouchEnd, !1);
          (t.preventClicks || t.preventClicksPropagation) && a.removeEventListener('click', e.onClick, !0),
            e.off(y.ios || y.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', l);
        },
      },
      _ = {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            i = e.initialized,
            n = e.loopedSlides;
          void 0 === n && (n = 0);
          var r = e.params,
            a = r.breakpoints;
          if (a && (!a || 0 !== Object.keys(a).length)) {
            var s = e.getBreakpoint(a);
            if (s && e.currentBreakpoint !== s) {
              var o = s in a ? a[s] : e.originalParams,
                l = r.loop && o.slidesPerView !== r.slidesPerView;
              j.extend(e.params, o),
                j.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                (e.currentBreakpoint = s),
                l && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)),
                e.emit('breakpoint', o);
            }
          }
        },
        getBreakpoint: function (e) {
          if (e) {
            var t = !1,
              i = [];
            Object.keys(e).forEach(function (e) {
              i.push(e);
            }),
              i.sort(function (e, t) {
                return parseInt(e, 10) - parseInt(t, 10);
              });
            for (var n = 0; n < i.length; n += 1) {
              var r = i[n];
              r >= H.innerWidth && !t && (t = r);
            }
            return t || 'max';
          }
        },
      },
      L = {
        isIE: !!H.navigator.userAgent.match(/Trident/g) || !!H.navigator.userAgent.match(/MSIE/g),
        isSafari: ((o = H.navigator.userAgent.toLowerCase()), 0 <= o.indexOf('safari') && o.indexOf('chrome') < 0 && o.indexOf('android') < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(H.navigator.userAgent),
      },
      w = {
        init: !0,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: 'swiper-container-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        runCallbacksOnInit: !0,
      },
      x = {
        update: u,
        translate: d,
        transition: h,
        slide: p,
        loop: f,
        grabCursor: g,
        manipulation: v,
        events: b,
        breakpoints: _,
        checkOverflow: {
          checkOverflow: function () {
            var e = this,
              t = e.isLocked;
            (e.isLocked = 1 === e.snapGrid.length),
              (e.allowSlideNext = !e.isLocked),
              (e.allowSlidePrev = !e.isLocked),
              t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock'),
              t && t !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
          },
        },
        classes: {
          addClasses: function () {
            var t = this.classNames,
              i = this.params,
              e = this.rtl,
              n = this.$el,
              r = [];
            r.push(i.direction),
              i.freeMode && r.push('free-mode'),
              $.flexbox || r.push('no-flexbox'),
              i.autoHeight && r.push('autoheight'),
              e && r.push('rtl'),
              1 < i.slidesPerColumn && r.push('multirow'),
              y.android && r.push('android'),
              y.ios && r.push('ios'),
              L.isIE && ($.pointerEvents || $.prefixedPointerEvents) && r.push('wp8-' + i.direction),
              r.forEach(function (e) {
                t.push(i.containerModifierClass + e);
              }),
              n.addClass(t.join(' '));
          },
          removeClasses: function () {
            var e = this.$el,
              t = this.classNames;
            e.removeClass(t.join(' '));
          },
        },
        images: {
          loadImage: function (e, t, i, n, r, a) {
            function s() {
              a && a();
            }
            var o;
            e.complete && r ? s() : t ? (((o = new H.Image()).onload = s), (o.onerror = s), n && (o.sizes = n), i && (o.srcset = i), t && (o.src = t)) : s();
          },
          preloadImages: function () {
            function e() {
              null != t &&
                t &&
                !t.destroyed &&
                (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit('imagesReady')));
            }
            var t = this;
            t.imagesToLoad = t.$el.find('img');
            for (var i = 0; i < t.imagesToLoad.length; i += 1) {
              var n = t.imagesToLoad[i];
              t.loadImage(n, n.currentSrc || n.getAttribute('src'), n.srcset || n.getAttribute('srcset'), n.sizes || n.getAttribute('sizes'), !0, e);
            }
          },
        },
      },
      T = {},
      k = (function (h) {
        function p() {
          for (var e, t, r, i = [], n = arguments.length; n--; ) i[n] = arguments[n];
          1 === i.length && i[0].constructor && i[0].constructor === Object ? (r = i[0]) : ((t = (e = i)[0]), (r = e[1])),
            r || (r = {}),
            (r = j.extend({}, r)),
            t && !r.el && (r.el = t),
            h.call(this, r),
            Object.keys(x).forEach(function (t) {
              Object.keys(x[t]).forEach(function (e) {
                p.prototype[e] || (p.prototype[e] = x[t][e]);
              });
            });
          var a = this;
          void 0 === a.modules && (a.modules = {}),
            Object.keys(a.modules).forEach(function (e) {
              var t = a.modules[e];
              if (t.params) {
                var i = Object.keys(t.params)[0],
                  n = t.params[i];
                if ('object' != typeof n) return;
                if (!(i in r && 'enabled' in n)) return;
                !0 === r[i] && (r[i] = { enabled: !0 }), 'object' != typeof r[i] || 'enabled' in r[i] || (r[i].enabled = !0), r[i] || (r[i] = { enabled: !1 });
              }
            });
          var s = j.extend({}, w);
          a.useModulesParams(s), (a.params = j.extend({}, s, T, r)), (a.originalParams = j.extend({}, a.params)), (a.passedParams = j.extend({}, r));
          var o = (a.$ = A)(a.params.el);
          if ((t = o[0])) {
            if (1 < o.length) {
              var l = [];
              return (
                o.each(function (e, t) {
                  var i = j.extend({}, r, { el: t });
                  l.push(new p(i));
                }),
                l
              );
            }
            (t.swiper = a), o.data('swiper', a);
            var c,
              u,
              d = o.children('.' + a.params.wrapperClass);
            return (
              j.extend(a, {
                $el: o,
                el: t,
                $wrapperEl: d,
                wrapperEl: d[0],
                classNames: [],
                slides: A(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return 'horizontal' === a.params.direction;
                },
                isVertical: function () {
                  return 'vertical' === a.params.direction;
                },
                rtl: 'rtl' === t.dir.toLowerCase() || 'rtl' === o.css('direction'),
                rtlTranslate: 'horizontal' === a.params.direction && ('rtl' === t.dir.toLowerCase() || 'rtl' === o.css('direction')),
                wrongRTL: '-webkit-box' === d.css('display'),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEvents:
                  ((c = ['touchstart', 'touchmove', 'touchend']),
                  (u = ['mousedown', 'mousemove', 'mouseup']),
                  $.pointerEvents ? (u = ['pointerdown', 'pointermove', 'pointerup']) : $.prefixedPointerEvents && (u = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp']),
                  (a.touchEventsTouch = { start: c[0], move: c[1], end: c[2] }),
                  (a.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
                  $.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements: 'input, select, option, textarea, button, video',
                  lastClickTime: j.now(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              a.useModules(),
              a.params.init && a.init(),
              a
            );
          }
        }
        h && (p.__proto__ = h);
        var e = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };
        return (
          (((p.prototype = Object.create(h && h.prototype)).constructor = p).prototype.slidesPerViewDynamic = function () {
            var e = this,
              t = e.params,
              i = e.slides,
              n = e.slidesGrid,
              r = e.size,
              a = e.activeIndex,
              s = 1;
            if (t.centeredSlides) {
              for (var o, l = i[a].swiperSlideSize, c = a + 1; c < i.length; c += 1) i[c] && !o && ((s += 1), r < (l += i[c].swiperSlideSize) && (o = !0));
              for (var u = a - 1; 0 <= u; u -= 1) i[u] && !o && ((s += 1), r < (l += i[u].swiperSlideSize) && (o = !0));
            } else for (var d = a + 1; d < i.length; d += 1) n[d] - n[a] < r && (s += 1);
            return s;
          }),
          (p.prototype.update = function () {
            function e() {
              var e = i.rtlTranslate ? -1 * i.translate : i.translate,
                t = Math.min(Math.max(e, i.maxTranslate()), i.minTranslate());
              i.setTranslate(t), i.updateActiveIndex(), i.updateSlidesClasses();
            }
            var i = this;
            if (i && !i.destroyed) {
              var t = i.snapGrid,
                n = i.params;
              n.breakpoints && i.setBreakpoint(),
                i.updateSize(),
                i.updateSlides(),
                i.updateProgress(),
                i.updateSlidesClasses(),
                i.params.freeMode
                  ? (e(), i.params.autoHeight && i.updateAutoHeight())
                  : (('auto' === i.params.slidesPerView || 1 < i.params.slidesPerView) && i.isEnd && !i.params.centeredSlides
                      ? i.slideTo(i.slides.length - 1, 0, !1, !0)
                      : i.slideTo(i.activeIndex, 0, !1, !0)) || e(),
                n.watchOverflow && t !== i.snapGrid && i.checkOverflow(),
                i.emit('update');
            }
          }),
          (p.prototype.init = function () {
            var e = this;
            e.initialized ||
              (e.emit('beforeInit'),
              e.params.breakpoints && e.setBreakpoint(),
              e.addClasses(),
              e.params.loop && e.loopCreate(),
              e.updateSize(),
              e.updateSlides(),
              e.params.watchOverflow && e.checkOverflow(),
              e.params.grabCursor && e.setGrabCursor(),
              e.params.preloadImages && e.preloadImages(),
              e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
              e.attachEvents(),
              (e.initialized = !0),
              e.emit('init'));
          }),
          (p.prototype.destroy = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var i = this,
              n = i.params,
              r = i.$el,
              a = i.$wrapperEl,
              s = i.slides;
            return (
              void 0 === i.params ||
                i.destroyed ||
                (i.emit('beforeDestroy'),
                (i.initialized = !1),
                i.detachEvents(),
                n.loop && i.loopDestroy(),
                t &&
                  (i.removeClasses(),
                  r.removeAttr('style'),
                  a.removeAttr('style'),
                  s &&
                    s.length &&
                    s
                      .removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(' '))
                      .removeAttr('style')
                      .removeAttr('data-swiper-slide-index')
                      .removeAttr('data-swiper-column')
                      .removeAttr('data-swiper-row')),
                i.emit('destroy'),
                Object.keys(i.eventsListeners).forEach(function (e) {
                  i.off(e);
                }),
                !1 !== e && ((i.$el[0].swiper = null), i.$el.data('swiper', null), j.deleteProps(i)),
                (i.destroyed = !0)),
              null
            );
          }),
          (p.extendDefaults = function (e) {
            j.extend(T, e);
          }),
          (e.extendedDefaults.get = function () {
            return T;
          }),
          (e.defaults.get = function () {
            return w;
          }),
          (e.Class.get = function () {
            return h;
          }),
          (e.$.get = function () {
            return A;
          }),
          Object.defineProperties(p, e),
          p
        );
      })(r),
      S = { name: 'device', proto: { device: y }, static: { device: y } },
      C = { name: 'support', proto: { support: $ }, static: { support: $ } },
      E = { name: 'browser', proto: { browser: L }, static: { browser: L } },
      D = {
        name: 'resize',
        create: function () {
          var e = this;
          j.extend(e, {
            resize: {
              resizeHandler: function () {
                e && !e.destroyed && e.initialized && (e.emit('beforeResize'), e.emit('resize'));
              },
              orientationChangeHandler: function () {
                e && !e.destroyed && e.initialized && e.emit('orientationchange');
              },
            },
          });
        },
        on: {
          init: function () {
            H.addEventListener('resize', this.resize.resizeHandler), H.addEventListener('orientationchange', this.resize.orientationChangeHandler);
          },
          destroy: function () {
            H.removeEventListener('resize', this.resize.resizeHandler), H.removeEventListener('orientationchange', this.resize.orientationChangeHandler);
          },
        },
      },
      M = {
        func: H.MutationObserver || H.WebkitMutationObserver,
        attach: function (e, t) {
          void 0 === t && (t = {});
          var i = this,
            n = new M.func(function (e) {
              if (1 !== e.length) {
                var t = function () {
                  i.emit('observerUpdate', e[0]);
                };
                H.requestAnimationFrame ? H.requestAnimationFrame(t) : H.setTimeout(t, 0);
              } else i.emit('observerUpdate', e[0]);
            });
          n.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData,
          }),
            i.observer.observers.push(n);
        },
        init: function () {
          var e = this;
          if ($.observer && e.params.observer) {
            if (e.params.observeParents) for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
            e.observer.attach(e.$el[0], { childList: !1 }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (e) {
            e.disconnect();
          }),
            (this.observer.observers = []);
        },
      },
      P = {
        name: 'observer',
        params: { observer: !1, observeParents: !1 },
        create: function () {
          j.extend(this, { observer: { init: M.init.bind(this), attach: M.attach.bind(this), destroy: M.destroy.bind(this), observers: [] } });
        },
        on: {
          init: function () {
            this.observer.init();
          },
          destroy: function () {
            this.observer.destroy();
          },
        },
      },
      O = {
        update: function (e) {
          function t() {
            i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.lazy && i.params.lazy.enabled && i.lazy.load();
          }
          var i = this,
            n = i.params,
            r = n.slidesPerView,
            a = n.slidesPerGroup,
            s = n.centeredSlides,
            o = i.virtual,
            l = o.from,
            c = o.to,
            u = o.slides,
            d = o.slidesGrid,
            h = o.renderSlide,
            p = o.offset;
          i.updateActiveIndex();
          var f,
            m,
            g,
            v = i.activeIndex || 0;
          (f = i.rtlTranslate ? 'right' : i.isHorizontal() ? 'left' : 'top'), s ? ((m = Math.floor(r / 2) + a), (g = Math.floor(r / 2) + a)) : ((m = r + (a - 1)), (g = a));
          var y = Math.max((v || 0) - g, 0),
            b = Math.min((v || 0) + m, u.length - 1),
            _ = (i.slidesGrid[y] || 0) - (i.slidesGrid[0] || 0);
          if ((j.extend(i.virtual, { from: y, to: b, offset: _, slidesGrid: i.slidesGrid }), l === y && c === b && !e))
            return i.slidesGrid !== d && _ !== p && i.slides.css(f, _ + 'px'), void i.updateProgress();
          if (i.params.virtual.renderExternal)
            return (
              i.params.virtual.renderExternal.call(i, {
                offset: _,
                from: y,
                to: b,
                slides: (function () {
                  for (var e = [], t = y; t <= b; t += 1) e.push(u[t]);
                  return e;
                })(),
              }),
              void t()
            );
          var w = [],
            x = [];
          if (e) i.$wrapperEl.find('.' + i.params.slideClass).remove();
          else for (var T = l; T <= c; T += 1) (T < y || b < T) && i.$wrapperEl.find('.' + i.params.slideClass + '[data-swiper-slide-index="' + T + '"]').remove();
          for (var k = 0; k < u.length; k += 1) y <= k && k <= b && (void 0 === c || e ? x.push(k) : (c < k && x.push(k), k < l && w.push(k)));
          x.forEach(function (e) {
            i.$wrapperEl.append(h(u[e], e));
          }),
            w
              .sort(function (e, t) {
                return e < t;
              })
              .forEach(function (e) {
                i.$wrapperEl.prepend(h(u[e], e));
              }),
            i.$wrapperEl.children('.swiper-slide').css(f, _ + 'px'),
            t();
        },
        renderSlide: function (e, t) {
          var i = this,
            n = i.params.virtual;
          if (n.cache && i.virtual.cache[t]) return i.virtual.cache[t];
          var r = n.renderSlide ? A(n.renderSlide.call(i, e, t)) : A('<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + '</div>');
          return r.attr('data-swiper-slide-index') || r.attr('data-swiper-slide-index', t), n.cache && (i.virtual.cache[t] = r), r;
        },
        appendSlide: function (e) {
          this.virtual.slides.push(e), this.virtual.update(!0);
        },
        prependSlide: function (e) {
          var t = this;
          if ((t.virtual.slides.unshift(e), t.params.virtual.cache)) {
            var i = t.virtual.cache,
              n = {};
            Object.keys(i).forEach(function (e) {
              n[e + 1] = i[e];
            }),
              (t.virtual.cache = n);
          }
          t.virtual.update(!0), t.slideNext(0);
        },
      },
      R = {
        name: 'virtual',
        params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null } },
        create: function () {
          var e = this;
          j.extend(e, {
            virtual: {
              update: O.update.bind(e),
              appendSlide: O.appendSlide.bind(e),
              prependSlide: O.prependSlide.bind(e),
              renderSlide: O.renderSlide.bind(e),
              slides: e.params.virtual.slides,
              cache: {},
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            if (e.params.virtual.enabled) {
              e.classNames.push(e.params.containerModifierClass + 'virtual');
              var t = { watchSlidesProgress: !0 };
              j.extend(e.params, t), j.extend(e.originalParams, t), e.virtual.update();
            }
          },
          setTranslate: function () {
            this.params.virtual.enabled && this.virtual.update();
          },
        },
      },
      I = {
        handle: function (e) {
          var t = this,
            i = t.rtlTranslate,
            n = e;
          n.originalEvent && (n = n.originalEvent);
          var r = n.keyCode || n.charCode;
          if (!t.allowSlideNext && ((t.isHorizontal() && 39 === r) || (t.isVertical() && 40 === r))) return !1;
          if (!t.allowSlidePrev && ((t.isHorizontal() && 37 === r) || (t.isVertical() && 38 === r))) return !1;
          if (
            !(
              n.shiftKey ||
              n.altKey ||
              n.ctrlKey ||
              n.metaKey ||
              (m.activeElement && m.activeElement.nodeName && ('input' === m.activeElement.nodeName.toLowerCase() || 'textarea' === m.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
              var a = !1;
              if (0 < t.$el.parents('.' + t.params.slideClass).length && 0 === t.$el.parents('.' + t.params.slideActiveClass).length) return;
              var s = H.innerWidth,
                o = H.innerHeight,
                l = t.$el.offset();
              i && (l.left -= t.$el[0].scrollLeft);
              for (
                var c = [
                    [l.left, l.top],
                    [l.left + t.width, l.top],
                    [l.left, l.top + t.height],
                    [l.left + t.width, l.top + t.height],
                  ],
                  u = 0;
                u < c.length;
                u += 1
              ) {
                var d = c[u];
                0 <= d[0] && d[0] <= s && 0 <= d[1] && d[1] <= o && (a = !0);
              }
              if (!a) return;
            }
            t.isHorizontal()
              ? ((37 !== r && 39 !== r) || (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)),
                ((39 === r && !i) || (37 === r && i)) && t.slideNext(),
                ((37 === r && !i) || (39 === r && i)) && t.slidePrev())
              : ((38 !== r && 40 !== r) || (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)), 40 === r && t.slideNext(), 38 === r && t.slidePrev()),
              t.emit('keyPress', r);
          }
        },
        enable: function () {
          this.keyboard.enabled || (A(m).on('keydown', this.keyboard.handle), (this.keyboard.enabled = !0));
        },
        disable: function () {
          this.keyboard.enabled && (A(m).off('keydown', this.keyboard.handle), (this.keyboard.enabled = !1));
        },
      },
      N = {
        name: 'keyboard',
        params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
        create: function () {
          j.extend(this, { keyboard: { enabled: !1, enable: I.enable.bind(this), disable: I.disable.bind(this), handle: I.handle.bind(this) } });
        },
        on: {
          init: function () {
            this.params.keyboard.enabled && this.keyboard.enable();
          },
          destroy: function () {
            this.keyboard.enabled && this.keyboard.disable();
          },
        },
      },
      z = {
        lastScrollTime: j.now(),
        event:
          -1 < H.navigator.userAgent.indexOf('firefox')
            ? 'DOMMouseScroll'
            : (function () {
                var e = 'onwheel',
                  t = e in m;
                if (!t) {
                  var i = m.createElement('div');
                  i.setAttribute(e, 'return;'), (t = 'function' == typeof i[e]);
                }
                return (
                  !t && m.implementation && m.implementation.hasFeature && !0 !== m.implementation.hasFeature('', '') && (t = m.implementation.hasFeature('Events.wheel', '3.0')), t
                );
              })()
            ? 'wheel'
            : 'mousewheel',
        normalize: function (e) {
          var t = 0,
            i = 0,
            n = 0,
            r = 0;
          return (
            'detail' in e && (i = e.detail),
            'wheelDelta' in e && (i = -e.wheelDelta / 120),
            'wheelDeltaY' in e && (i = -e.wheelDeltaY / 120),
            'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
            'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
            (n = 10 * t),
            (r = 10 * i),
            'deltaY' in e && (r = e.deltaY),
            'deltaX' in e && (n = e.deltaX),
            (n || r) && e.deltaMode && (1 === e.deltaMode ? ((n *= 40), (r *= 40)) : ((n *= 800), (r *= 800))),
            n && !t && (t = n < 1 ? -1 : 1),
            r && !i && (i = r < 1 ? -1 : 1),
            { spinX: t, spinY: i, pixelX: n, pixelY: r }
          );
        },
        handleMouseEnter: function () {
          this.mouseEntered = !0;
        },
        handleMouseLeave: function () {
          this.mouseEntered = !1;
        },
        handle: function (e) {
          var t = e,
            i = this,
            n = i.params.mousewheel;
          if (!i.mouseEntered && !n.releaseOnEdges) return !0;
          t.originalEvent && (t = t.originalEvent);
          var r = 0,
            a = i.rtlTranslate ? -1 : 1,
            s = z.normalize(t);
          if (n.forceToAxis)
            if (i.isHorizontal()) {
              if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return !0;
              r = s.pixelX * a;
            } else {
              if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return !0;
              r = s.pixelY;
            }
          else r = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * a : -s.pixelY;
          if (0 === r) return !0;
          if ((n.invert && (r = -r), i.params.freeMode)) {
            i.params.loop && i.loopFix();
            var o = i.getTranslate() + r * n.sensitivity,
              l = i.isBeginning,
              c = i.isEnd;
            if (
              (o >= i.minTranslate() && (o = i.minTranslate()),
              o <= i.maxTranslate() && (o = i.maxTranslate()),
              i.setTransition(0),
              i.setTranslate(o),
              i.updateProgress(),
              i.updateActiveIndex(),
              i.updateSlidesClasses(),
              ((!l && i.isBeginning) || (!c && i.isEnd)) && i.updateSlidesClasses(),
              i.params.freeModeSticky &&
                (clearTimeout(i.mousewheel.timeout),
                (i.mousewheel.timeout = j.nextTick(function () {
                  i.slideToClosest();
                }, 300))),
              i.emit('scroll', t),
              i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(),
              o === i.minTranslate() || o === i.maxTranslate())
            )
              return !0;
          } else {
            if (60 < j.now() - i.mousewheel.lastScrollTime)
              if (r < 0)
                if ((i.isEnd && !i.params.loop) || i.animating) {
                  if (n.releaseOnEdges) return !0;
                } else i.slideNext(), i.emit('scroll', t);
              else if ((i.isBeginning && !i.params.loop) || i.animating) {
                if (n.releaseOnEdges) return !0;
              } else i.slidePrev(), i.emit('scroll', t);
            i.mousewheel.lastScrollTime = new H.Date().getTime();
          }
          return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
        },
        enable: function () {
          var e = this;
          if (!z.event) return !1;
          if (e.mousewheel.enabled) return !1;
          var t = e.$el;
          return (
            'container' !== e.params.mousewheel.eventsTarged && (t = A(e.params.mousewheel.eventsTarged)),
            t.on('mouseenter', e.mousewheel.handleMouseEnter),
            t.on('mouseleave', e.mousewheel.handleMouseLeave),
            t.on(z.event, e.mousewheel.handle),
            (e.mousewheel.enabled = !0)
          );
        },
        disable: function () {
          var e = this;
          if (!z.event) return !1;
          if (!e.mousewheel.enabled) return !1;
          var t = e.$el;
          return 'container' !== e.params.mousewheel.eventsTarged && (t = A(e.params.mousewheel.eventsTarged)), t.off(z.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1);
        },
      },
      F = {
        update: function () {
          var e = this,
            t = e.params.navigation;
          if (!e.params.loop) {
            var i = e.navigation,
              n = i.$nextEl,
              r = i.$prevEl;
            r &&
              0 < r.length &&
              (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](t.lockClass)),
              n &&
                0 < n.length &&
                (e.isEnd ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](t.lockClass));
          }
        },
        init: function () {
          var e,
            t,
            i = this,
            n = i.params.navigation;
          (n.nextEl || n.prevEl) &&
            (n.nextEl &&
              ((e = A(n.nextEl)), i.params.uniqueNavElements && 'string' == typeof n.nextEl && 1 < e.length && 1 === i.$el.find(n.nextEl).length && (e = i.$el.find(n.nextEl))),
            n.prevEl &&
              ((t = A(n.prevEl)), i.params.uniqueNavElements && 'string' == typeof n.prevEl && 1 < t.length && 1 === i.$el.find(n.prevEl).length && (t = i.$el.find(n.prevEl))),
            e &&
              0 < e.length &&
              e.on('click', function (e) {
                e.preventDefault(), (i.isEnd && !i.params.loop) || i.slideNext();
              }),
            t &&
              0 < t.length &&
              t.on('click', function (e) {
                e.preventDefault(), (i.isBeginning && !i.params.loop) || i.slidePrev();
              }),
            j.extend(i.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
        },
        destroy: function () {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          t && t.length && (t.off('click'), t.removeClass(this.params.navigation.disabledClass)),
            i && i.length && (i.off('click'), i.removeClass(this.params.navigation.disabledClass));
        },
      },
      B = {
        update: function () {
          var e = this,
            t = e.rtl,
            r = e.params.pagination;
          if (r.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var a,
              i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              n = e.pagination.$el,
              s = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (
              (e.params.loop
                ? ((a = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > i - 1 - 2 * e.loopedSlides && (a -= i - 2 * e.loopedSlides),
                  s - 1 < a && (a -= s),
                  a < 0 && 'bullets' !== e.params.paginationType && (a = s + a))
                : (a = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
              'bullets' === r.type && e.pagination.bullets && 0 < e.pagination.bullets.length)
            ) {
              var o,
                l,
                c,
                u = e.pagination.bullets;
              if (
                (r.dynamicBullets &&
                  ((e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                  n.css(e.isHorizontal() ? 'width' : 'height', e.pagination.bulletSize * (r.dynamicMainBullets + 4) + 'px'),
                  1 < r.dynamicMainBullets &&
                    void 0 !== e.previousIndex &&
                    ((e.pagination.dynamicBulletIndex += a - e.previousIndex),
                    e.pagination.dynamicBulletIndex > r.dynamicMainBullets - 1
                      ? (e.pagination.dynamicBulletIndex = r.dynamicMainBullets - 1)
                      : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                  (o = a - e.pagination.dynamicBulletIndex),
                  (c = ((l = o + (Math.min(u.length, r.dynamicMainBullets) - 1)) + o) / 2)),
                u.removeClass(
                  r.bulletActiveClass +
                    ' ' +
                    r.bulletActiveClass +
                    '-next ' +
                    r.bulletActiveClass +
                    '-next-next ' +
                    r.bulletActiveClass +
                    '-prev ' +
                    r.bulletActiveClass +
                    '-prev-prev ' +
                    r.bulletActiveClass +
                    '-main'
                ),
                1 < n.length)
              )
                u.each(function (e, t) {
                  var i = A(t),
                    n = i.index();
                  n === a && i.addClass(r.bulletActiveClass),
                    r.dynamicBullets &&
                      (o <= n && n <= l && i.addClass(r.bulletActiveClass + '-main'),
                      n === o &&
                        i
                          .prev()
                          .addClass(r.bulletActiveClass + '-prev')
                          .prev()
                          .addClass(r.bulletActiveClass + '-prev-prev'),
                      n === l &&
                        i
                          .next()
                          .addClass(r.bulletActiveClass + '-next')
                          .next()
                          .addClass(r.bulletActiveClass + '-next-next'));
                });
              else if ((u.eq(a).addClass(r.bulletActiveClass), r.dynamicBullets)) {
                for (var d = u.eq(o), h = u.eq(l), p = o; p <= l; p += 1) u.eq(p).addClass(r.bulletActiveClass + '-main');
                d
                  .prev()
                  .addClass(r.bulletActiveClass + '-prev')
                  .prev()
                  .addClass(r.bulletActiveClass + '-prev-prev'),
                  h
                    .next()
                    .addClass(r.bulletActiveClass + '-next')
                    .next()
                    .addClass(r.bulletActiveClass + '-next-next');
              }
              if (r.dynamicBullets) {
                var f = Math.min(u.length, r.dynamicMainBullets + 4),
                  m = (e.pagination.bulletSize * f - e.pagination.bulletSize) / 2 - c * e.pagination.bulletSize,
                  g = t ? 'right' : 'left';
                u.css(e.isHorizontal() ? g : 'top', m + 'px');
              }
            }
            if (
              ('fraction' === r.type && (n.find('.' + r.currentClass).text(r.formatFractionCurrent(a + 1)), n.find('.' + r.totalClass).text(r.formatFractionTotal(s))),
              'progressbar' === r.type)
            ) {
              var v;
              v = r.progressbarOpposite ? (e.isHorizontal() ? 'vertical' : 'horizontal') : e.isHorizontal() ? 'horizontal' : 'vertical';
              var y = (a + 1) / s,
                b = 1,
                _ = 1;
              'horizontal' === v ? (b = y) : (_ = y),
                n
                  .find('.' + r.progressbarFillClass)
                  .transform('translate3d(0,0,0) scaleX(' + b + ') scaleY(' + _ + ')')
                  .transition(e.params.speed);
            }
            'custom' === r.type && r.renderCustom ? (n.html(r.renderCustom(e, a + 1, s)), e.emit('paginationRender', e, n[0])) : e.emit('paginationUpdate', e, n[0]),
              n[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](r.lockClass);
          }
        },
        render: function () {
          var e = this,
            t = e.params.pagination;
          if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              n = e.pagination.$el,
              r = '';
            if ('bullets' === t.type) {
              for (var a = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, s = 0; s < a; s += 1)
                t.renderBullet ? (r += t.renderBullet.call(e, s, t.bulletClass)) : (r += '<' + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + '>');
              n.html(r), (e.pagination.bullets = n.find('.' + t.bulletClass));
            }
            'fraction' === t.type &&
              ((r = t.renderFraction
                ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>'),
              n.html(r)),
              'progressbar' === t.type &&
                ((r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>'), n.html(r)),
              'custom' !== t.type && e.emit('paginationRender', e.pagination.$el[0]);
          }
        },
        init: function () {
          var i = this,
            e = i.params.pagination;
          if (e.el) {
            var t = A(e.el);
            0 !== t.length &&
              (i.params.uniqueNavElements && 'string' == typeof e.el && 1 < t.length && 1 === i.$el.find(e.el).length && (t = i.$el.find(e.el)),
              'bullets' === e.type && e.clickable && t.addClass(e.clickableClass),
              t.addClass(e.modifierClass + e.type),
              'bullets' === e.type &&
                e.dynamicBullets &&
                (t.addClass('' + e.modifierClass + e.type + '-dynamic'), (i.pagination.dynamicBulletIndex = 0), e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
              'progressbar' === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass),
              e.clickable &&
                t.on('click', '.' + e.bulletClass, function (e) {
                  e.preventDefault();
                  var t = A(this).index() * i.params.slidesPerGroup;
                  i.params.loop && (t += i.loopedSlides), i.slideTo(t);
                }),
              j.extend(i.pagination, { $el: t, el: t[0] }));
          }
        },
        destroy: function () {
          var e = this,
            t = e.params.pagination;
          if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var i = e.pagination.$el;
            i.removeClass(t.hiddenClass),
              i.removeClass(t.modifierClass + t.type),
              e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
              t.clickable && i.off('click', '.' + t.bulletClass);
          }
        },
      },
      q = {
        setTranslate: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
              i = e.rtlTranslate,
              n = e.progress,
              r = t.dragSize,
              a = t.trackSize,
              s = t.$dragEl,
              o = t.$el,
              l = e.params.scrollbar,
              c = r,
              u = (a - r) * n;
            i ? (0 < (u = -u) ? ((c = r - u), (u = 0)) : a < -u + r && (c = a + u)) : u < 0 ? ((c = r + u), (u = 0)) : a < u + r && (c = a - u),
              e.isHorizontal()
                ? ($.transforms3d ? s.transform('translate3d(' + u + 'px, 0, 0)') : s.transform('translateX(' + u + 'px)'), (s[0].style.width = c + 'px'))
                : ($.transforms3d ? s.transform('translate3d(0px, ' + u + 'px, 0)') : s.transform('translateY(' + u + 'px)'), (s[0].style.height = c + 'px')),
              l.hide &&
                (clearTimeout(e.scrollbar.timeout),
                (o[0].style.opacity = 1),
                (e.scrollbar.timeout = setTimeout(function () {
                  (o[0].style.opacity = 0), o.transition(400);
                }, 1e3)));
          }
        },
        setTransition: function (e) {
          this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
        },
        updateSize: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
              i = t.$dragEl,
              n = t.$el;
            (i[0].style.width = ''), (i[0].style.height = '');
            var r,
              a = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
              s = e.size / e.virtualSize,
              o = s * (a / e.size);
            (r = 'auto' === e.params.scrollbar.dragSize ? a * s : parseInt(e.params.scrollbar.dragSize, 10)),
              e.isHorizontal() ? (i[0].style.width = r + 'px') : (i[0].style.height = r + 'px'),
              (n[0].style.display = 1 <= s ? 'none' : ''),
              e.params.scrollbarHide && (n[0].style.opacity = 0),
              j.extend(t, { trackSize: a, divider: s, moveDivider: o, dragSize: r }),
              t.$el[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](e.params.scrollbar.lockClass);
          }
        },
        setDragPosition: function (e) {
          var t,
            i = this,
            n = i.scrollbar,
            r = i.rtlTranslate,
            a = n.$el,
            s = n.dragSize,
            o = n.trackSize;
          (t =
            ((i.isHorizontal()
              ? 'touchstart' === e.type || 'touchmove' === e.type
                ? e.targetTouches[0].pageX
                : e.pageX || e.clientX
              : 'touchstart' === e.type || 'touchmove' === e.type
              ? e.targetTouches[0].pageY
              : e.pageY || e.clientY) -
              a.offset()[i.isHorizontal() ? 'left' : 'top'] -
              s / 2) /
            (o - s)),
            (t = Math.max(Math.min(t, 1), 0)),
            r && (t = 1 - t);
          var l = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;
          i.updateProgress(l), i.setTranslate(l), i.updateActiveIndex(), i.updateSlidesClasses();
        },
        onDragStart: function (e) {
          var t = this,
            i = t.params.scrollbar,
            n = t.scrollbar,
            r = t.$wrapperEl,
            a = n.$el,
            s = n.$dragEl;
          (t.scrollbar.isTouched = !0),
            e.preventDefault(),
            e.stopPropagation(),
            r.transition(100),
            s.transition(100),
            n.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            a.transition(0),
            i.hide && a.css('opacity', 1),
            t.emit('scrollbarDragStart', e);
        },
        onDragMove: function (e) {
          var t = this.scrollbar,
            i = this.$wrapperEl,
            n = t.$el,
            r = t.$dragEl;
          this.scrollbar.isTouched &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            t.setDragPosition(e),
            i.transition(0),
            n.transition(0),
            r.transition(0),
            this.emit('scrollbarDragMove', e));
        },
        onDragEnd: function (e) {
          var t = this,
            i = t.params.scrollbar,
            n = t.scrollbar.$el;
          t.scrollbar.isTouched &&
            ((t.scrollbar.isTouched = !1),
            i.hide &&
              (clearTimeout(t.scrollbar.dragTimeout),
              (t.scrollbar.dragTimeout = j.nextTick(function () {
                n.css('opacity', 0), n.transition(400);
              }, 1e3))),
            t.emit('scrollbarDragEnd', e),
            i.snapOnRelease && t.slideToClosest());
        },
        enableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = e.scrollbar,
              i = e.touchEvents,
              n = e.touchEventsDesktop,
              r = e.params,
              a = t.$el[0],
              s = !(!$.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
              o = !(!$.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
            $.touch || (!$.pointerEvents && !$.prefixedPointerEvents)
              ? ($.touch &&
                  (a.addEventListener(i.start, e.scrollbar.onDragStart, s),
                  a.addEventListener(i.move, e.scrollbar.onDragMove, s),
                  a.addEventListener(i.end, e.scrollbar.onDragEnd, o)),
                ((r.simulateTouch && !y.ios && !y.android) || (r.simulateTouch && !$.touch && y.ios)) &&
                  (a.addEventListener('mousedown', e.scrollbar.onDragStart, s),
                  m.addEventListener('mousemove', e.scrollbar.onDragMove, s),
                  m.addEventListener('mouseup', e.scrollbar.onDragEnd, o)))
              : (a.addEventListener(n.start, e.scrollbar.onDragStart, s),
                m.addEventListener(n.move, e.scrollbar.onDragMove, s),
                m.addEventListener(n.end, e.scrollbar.onDragEnd, o));
          }
        },
        disableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = e.scrollbar,
              i = e.touchEvents,
              n = e.touchEventsDesktop,
              r = e.params,
              a = t.$el[0],
              s = !(!$.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
              o = !(!$.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
            $.touch || (!$.pointerEvents && !$.prefixedPointerEvents)
              ? ($.touch &&
                  (a.removeEventListener(i.start, e.scrollbar.onDragStart, s),
                  a.removeEventListener(i.move, e.scrollbar.onDragMove, s),
                  a.removeEventListener(i.end, e.scrollbar.onDragEnd, o)),
                ((r.simulateTouch && !y.ios && !y.android) || (r.simulateTouch && !$.touch && y.ios)) &&
                  (a.removeEventListener('mousedown', e.scrollbar.onDragStart, s),
                  m.removeEventListener('mousemove', e.scrollbar.onDragMove, s),
                  m.removeEventListener('mouseup', e.scrollbar.onDragEnd, o)))
              : (a.removeEventListener(n.start, e.scrollbar.onDragStart, s),
                m.removeEventListener(n.move, e.scrollbar.onDragMove, s),
                m.removeEventListener(n.end, e.scrollbar.onDragEnd, o));
          }
        },
        init: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = e.scrollbar,
              i = e.$el,
              n = e.params.scrollbar,
              r = A(n.el);
            e.params.uniqueNavElements && 'string' == typeof n.el && 1 < r.length && 1 === i.find(n.el).length && (r = i.find(n.el));
            var a = r.find('.' + e.params.scrollbar.dragClass);
            0 === a.length && ((a = A('<div class="' + e.params.scrollbar.dragClass + '"></div>')), r.append(a)),
              j.extend(t, { $el: r, el: r[0], $dragEl: a, dragEl: a[0] }),
              n.draggable && t.enableDraggable();
          }
        },
        destroy: function () {
          this.scrollbar.disableDraggable();
        },
      },
      Y = {
        setTransform: function (e, t) {
          var i = this.rtl,
            n = A(e),
            r = i ? -1 : 1,
            a = n.attr('data-swiper-parallax') || '0',
            s = n.attr('data-swiper-parallax-x'),
            o = n.attr('data-swiper-parallax-y'),
            l = n.attr('data-swiper-parallax-scale'),
            c = n.attr('data-swiper-parallax-opacity');
          if (
            (s || o ? ((s = s || '0'), (o = o || '0')) : this.isHorizontal() ? ((s = a), (o = '0')) : ((o = a), (s = '0')),
            (s = 0 <= s.indexOf('%') ? parseInt(s, 10) * t * r + '%' : s * t * r + 'px'),
            (o = 0 <= o.indexOf('%') ? parseInt(o, 10) * t + '%' : o * t + 'px'),
            null != c)
          ) {
            var u = c - (c - 1) * (1 - Math.abs(t));
            n[0].style.opacity = u;
          }
          if (null == l) n.transform('translate3d(' + s + ', ' + o + ', 0px)');
          else {
            var d = l - (l - 1) * (1 - Math.abs(t));
            n.transform('translate3d(' + s + ', ' + o + ', 0px) scale(' + d + ')');
          }
        },
        setTranslate: function () {
          var n = this,
            e = n.$el,
            t = n.slides,
            r = n.progress,
            a = n.snapGrid;
          e.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (e, t) {
            n.parallax.setTransform(t, r);
          }),
            t.each(function (e, t) {
              var i = t.progress;
              1 < n.params.slidesPerGroup && 'auto' !== n.params.slidesPerView && (i += Math.ceil(e / 2) - r * (a.length - 1)),
                (i = Math.min(Math.max(i, -1), 1)),
                A(t)
                  .find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
                  .each(function (e, t) {
                    n.parallax.setTransform(t, i);
                  });
            });
        },
        setTransition: function (r) {
          void 0 === r && (r = this.params.speed),
            this.$el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (e, t) {
              var i = A(t),
                n = parseInt(i.attr('data-swiper-parallax-duration'), 10) || r;
              0 === r && (n = 0), i.transition(n);
            });
        },
      },
      X = {
        getDistanceBetweenTouches: function (e) {
          if (e.targetTouches.length < 2) return 1;
          var t = e.targetTouches[0].pageX,
            i = e.targetTouches[0].pageY,
            n = e.targetTouches[1].pageX,
            r = e.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - i, 2));
        },
        onGestureStart: function (e) {
          var t = this,
            i = t.params.zoom,
            n = t.zoom,
            r = n.gesture;
          if (((n.fakeGestureTouched = !1), (n.fakeGestureMoved = !1), !$.gestures)) {
            if ('touchstart' !== e.type || ('touchstart' === e.type && e.targetTouches.length < 2)) return;
            (n.fakeGestureTouched = !0), (r.scaleStart = X.getDistanceBetweenTouches(e));
          }
          (r.$slideEl && r.$slideEl.length) ||
          ((r.$slideEl = A(e.target).closest('.swiper-slide')),
          0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)),
          (r.$imageEl = r.$slideEl.find('img, svg, canvas')),
          (r.$imageWrapEl = r.$imageEl.parent('.' + i.containerClass)),
          (r.maxRatio = r.$imageWrapEl.attr('data-swiper-zoom') || i.maxRatio),
          0 !== r.$imageWrapEl.length)
            ? (r.$imageEl.transition(0), (t.zoom.isScaling = !0))
            : (r.$imageEl = void 0);
        },
        onGestureChange: function (e) {
          var t = this.params.zoom,
            i = this.zoom,
            n = i.gesture;
          if (!$.gestures) {
            if ('touchmove' !== e.type || ('touchmove' === e.type && e.targetTouches.length < 2)) return;
            (i.fakeGestureMoved = !0), (n.scaleMove = X.getDistanceBetweenTouches(e));
          }
          n.$imageEl &&
            0 !== n.$imageEl.length &&
            ($.gestures ? (this.zoom.scale = e.scale * i.currentScale) : (i.scale = (n.scaleMove / n.scaleStart) * i.currentScale),
            i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, 0.5)),
            i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
            n.$imageEl.transform('translate3d(0,0,0) scale(' + i.scale + ')'));
        },
        onGestureEnd: function (e) {
          var t = this.params.zoom,
            i = this.zoom,
            n = i.gesture;
          if (!$.gestures) {
            if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
            if ('touchend' !== e.type || ('touchend' === e.type && e.changedTouches.length < 2 && !y.android)) return;
            (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
          }
          n.$imageEl &&
            0 !== n.$imageEl.length &&
            ((i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio)),
            n.$imageEl.transition(this.params.speed).transform('translate3d(0,0,0) scale(' + i.scale + ')'),
            (i.currentScale = i.scale),
            (i.isScaling = !1),
            1 === i.scale && (n.$slideEl = void 0));
        },
        onTouchStart: function (e) {
          var t = this.zoom,
            i = t.gesture,
            n = t.image;
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            (n.isTouched ||
              (y.android && e.preventDefault(),
              (n.isTouched = !0),
              (n.touchesStart.x = 'touchstart' === e.type ? e.targetTouches[0].pageX : e.pageX),
              (n.touchesStart.y = 'touchstart' === e.type ? e.targetTouches[0].pageY : e.pageY)));
        },
        onTouchMove: function (e) {
          var t = this,
            i = t.zoom,
            n = i.gesture,
            r = i.image,
            a = i.velocity;
          if (n.$imageEl && 0 !== n.$imageEl.length && ((t.allowClick = !1), r.isTouched && n.$slideEl)) {
            r.isMoved ||
              ((r.width = n.$imageEl[0].offsetWidth),
              (r.height = n.$imageEl[0].offsetHeight),
              (r.startX = j.getTranslate(n.$imageWrapEl[0], 'x') || 0),
              (r.startY = j.getTranslate(n.$imageWrapEl[0], 'y') || 0),
              (n.slideWidth = n.$slideEl[0].offsetWidth),
              (n.slideHeight = n.$slideEl[0].offsetHeight),
              n.$imageWrapEl.transition(0),
              t.rtl && ((r.startX = -r.startX), (r.startY = -r.startY)));
            var s = r.width * i.scale,
              o = r.height * i.scale;
            if (!(s < n.slideWidth && o < n.slideHeight)) {
              if (
                ((r.minX = Math.min(n.slideWidth / 2 - s / 2, 0)),
                (r.maxX = -r.minX),
                (r.minY = Math.min(n.slideHeight / 2 - o / 2, 0)),
                (r.maxY = -r.minY),
                (r.touchesCurrent.x = 'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX),
                (r.touchesCurrent.y = 'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY),
                !r.isMoved && !i.isScaling)
              ) {
                if (
                  t.isHorizontal() &&
                  ((Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x) ||
                    (Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x))
                )
                  return void (r.isTouched = !1);
                if (
                  !t.isHorizontal() &&
                  ((Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y) ||
                    (Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y))
                )
                  return void (r.isTouched = !1);
              }
              e.preventDefault(),
                e.stopPropagation(),
                (r.isMoved = !0),
                (r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX),
                (r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY),
                r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, 0.8)),
                r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, 0.8)),
                r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, 0.8)),
                r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, 0.8)),
                a.prevPositionX || (a.prevPositionX = r.touchesCurrent.x),
                a.prevPositionY || (a.prevPositionY = r.touchesCurrent.y),
                a.prevTime || (a.prevTime = Date.now()),
                (a.x = (r.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2),
                (a.y = (r.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2),
                Math.abs(r.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                Math.abs(r.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                (a.prevPositionX = r.touchesCurrent.x),
                (a.prevPositionY = r.touchesCurrent.y),
                (a.prevTime = Date.now()),
                n.$imageWrapEl.transform('translate3d(' + r.currentX + 'px, ' + r.currentY + 'px,0)');
            }
          }
        },
        onTouchEnd: function () {
          var e = this.zoom,
            t = e.gesture,
            i = e.image,
            n = e.velocity;
          if (t.$imageEl && 0 !== t.$imageEl.length) {
            if (!i.isTouched || !i.isMoved) return (i.isTouched = !1), void (i.isMoved = !1);
            (i.isTouched = !1), (i.isMoved = !1);
            var r = 300,
              a = 300,
              s = n.x * r,
              o = i.currentX + s,
              l = n.y * a,
              c = i.currentY + l;
            0 !== n.x && (r = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (a = Math.abs((c - i.currentY) / n.y));
            var u = Math.max(r, a);
            (i.currentX = o), (i.currentY = c);
            var d = i.width * e.scale,
              h = i.height * e.scale;
            (i.minX = Math.min(t.slideWidth / 2 - d / 2, 0)),
              (i.maxX = -i.minX),
              (i.minY = Math.min(t.slideHeight / 2 - h / 2, 0)),
              (i.maxY = -i.minY),
              (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
              (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
              t.$imageWrapEl.transition(u).transform('translate3d(' + i.currentX + 'px, ' + i.currentY + 'px,0)');
          }
        },
        onTransitionEnd: function () {
          var e = this.zoom,
            t = e.gesture;
          t.$slideEl &&
            this.previousIndex !== this.activeIndex &&
            (t.$imageEl.transform('translate3d(0,0,0) scale(1)'),
            t.$imageWrapEl.transform('translate3d(0,0,0)'),
            (t.$slideEl = void 0),
            (t.$imageEl = void 0),
            (t.$imageWrapEl = void 0),
            (e.scale = 1),
            (e.currentScale = 1));
        },
        toggle: function (e) {
          var t = this.zoom;
          t.scale && 1 !== t.scale ? t.out() : t['in'](e);
        },
        in: function (e) {
          var t,
            i,
            n,
            r,
            a,
            s,
            o,
            l,
            c,
            u,
            d,
            h,
            p,
            f,
            m,
            g,
            v = this,
            y = v.zoom,
            b = v.params.zoom,
            _ = y.gesture,
            w = y.image;
          _.$slideEl ||
            ((_.$slideEl = v.clickedSlide ? A(v.clickedSlide) : v.slides.eq(v.activeIndex)),
            (_.$imageEl = _.$slideEl.find('img, svg, canvas')),
            (_.$imageWrapEl = _.$imageEl.parent('.' + b.containerClass))),
            _.$imageEl &&
              0 !== _.$imageEl.length &&
              (_.$slideEl.addClass('' + b.zoomedSlideClass),
              void 0 === w.touchesStart.x && e
                ? ((t = 'touchend' === e.type ? e.changedTouches[0].pageX : e.pageX), (i = 'touchend' === e.type ? e.changedTouches[0].pageY : e.pageY))
                : ((t = w.touchesStart.x), (i = w.touchesStart.y)),
              (y.scale = _.$imageWrapEl.attr('data-swiper-zoom') || b.maxRatio),
              (y.currentScale = _.$imageWrapEl.attr('data-swiper-zoom') || b.maxRatio),
              e
                ? ((m = _.$slideEl[0].offsetWidth),
                  (g = _.$slideEl[0].offsetHeight),
                  (n = _.$slideEl.offset().left + m / 2 - t),
                  (r = _.$slideEl.offset().top + g / 2 - i),
                  (o = _.$imageEl[0].offsetWidth),
                  (l = _.$imageEl[0].offsetHeight),
                  (c = o * y.scale),
                  (u = l * y.scale),
                  (p = -(d = Math.min(m / 2 - c / 2, 0))),
                  (f = -(h = Math.min(g / 2 - u / 2, 0))),
                  (a = n * y.scale) < d && (a = d),
                  p < a && (a = p),
                  (s = r * y.scale) < h && (s = h),
                  f < s && (s = f))
                : (s = a = 0),
              _.$imageWrapEl.transition(300).transform('translate3d(' + a + 'px, ' + s + 'px,0)'),
              _.$imageEl.transition(300).transform('translate3d(0,0,0) scale(' + y.scale + ')'));
        },
        out: function () {
          var e = this,
            t = e.zoom,
            i = e.params.zoom,
            n = t.gesture;
          n.$slideEl ||
            ((n.$slideEl = e.clickedSlide ? A(e.clickedSlide) : e.slides.eq(e.activeIndex)),
            (n.$imageEl = n.$slideEl.find('img, svg, canvas')),
            (n.$imageWrapEl = n.$imageEl.parent('.' + i.containerClass))),
            n.$imageEl &&
              0 !== n.$imageEl.length &&
              ((t.scale = 1),
              (t.currentScale = 1),
              n.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
              n.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
              n.$slideEl.removeClass('' + i.zoomedSlideClass),
              (n.$slideEl = void 0));
        },
        enable: function () {
          var e = this,
            t = e.zoom;
          if (!t.enabled) {
            t.enabled = !0;
            var i = !('touchstart' !== e.touchEvents.start || !$.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
            $.gestures
              ? (e.$wrapperEl.on('gesturestart', '.swiper-slide', t.onGestureStart, i),
                e.$wrapperEl.on('gesturechange', '.swiper-slide', t.onGestureChange, i),
                e.$wrapperEl.on('gestureend', '.swiper-slide', t.onGestureEnd, i))
              : 'touchstart' === e.touchEvents.start &&
                (e.$wrapperEl.on(e.touchEvents.start, '.swiper-slide', t.onGestureStart, i),
                e.$wrapperEl.on(e.touchEvents.move, '.swiper-slide', t.onGestureChange, i),
                e.$wrapperEl.on(e.touchEvents.end, '.swiper-slide', t.onGestureEnd, i)),
              e.$wrapperEl.on(e.touchEvents.move, '.' + e.params.zoom.containerClass, t.onTouchMove);
          }
        },
        disable: function () {
          var e = this,
            t = e.zoom;
          if (t.enabled) {
            e.zoom.enabled = !1;
            var i = !('touchstart' !== e.touchEvents.start || !$.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
            $.gestures
              ? (e.$wrapperEl.off('gesturestart', '.swiper-slide', t.onGestureStart, i),
                e.$wrapperEl.off('gesturechange', '.swiper-slide', t.onGestureChange, i),
                e.$wrapperEl.off('gestureend', '.swiper-slide', t.onGestureEnd, i))
              : 'touchstart' === e.touchEvents.start &&
                (e.$wrapperEl.off(e.touchEvents.start, '.swiper-slide', t.onGestureStart, i),
                e.$wrapperEl.off(e.touchEvents.move, '.swiper-slide', t.onGestureChange, i),
                e.$wrapperEl.off(e.touchEvents.end, '.swiper-slide', t.onGestureEnd, i)),
              e.$wrapperEl.off(e.touchEvents.move, '.' + e.params.zoom.containerClass, t.onTouchMove);
          }
        },
      },
      W = {
        loadInSlide: function (e, l) {
          void 0 === l && (l = !0);
          var c = this,
            u = c.params.lazy;
          if (void 0 !== e && 0 !== c.slides.length) {
            var d = c.virtual && c.params.virtual.enabled ? c.$wrapperEl.children('.' + c.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : c.slides.eq(e),
              t = d.find('.' + u.elementClass + ':not(.' + u.loadedClass + '):not(.' + u.loadingClass + ')');
            !d.hasClass(u.elementClass) || d.hasClass(u.loadedClass) || d.hasClass(u.loadingClass) || (t = t.add(d[0])),
              0 !== t.length &&
                t.each(function (e, t) {
                  var n = A(t);
                  n.addClass(u.loadingClass);
                  var r = n.attr('data-background'),
                    a = n.attr('data-src'),
                    s = n.attr('data-srcset'),
                    o = n.attr('data-sizes');
                  c.loadImage(n[0], a || r, s, o, !1, function () {
                    if (null != c && c && (!c || c.params) && !c.destroyed) {
                      if (
                        (r
                          ? (n.css('background-image', 'url("' + r + '")'), n.removeAttr('data-background'))
                          : (s && (n.attr('srcset', s), n.removeAttr('data-srcset')),
                            o && (n.attr('sizes', o), n.removeAttr('data-sizes')),
                            a && (n.attr('src', a), n.removeAttr('data-src'))),
                        n.addClass(u.loadedClass).removeClass(u.loadingClass),
                        d.find('.' + u.preloaderClass).remove(),
                        c.params.loop && l)
                      ) {
                        var e = d.attr('data-swiper-slide-index');
                        if (d.hasClass(c.params.slideDuplicateClass)) {
                          var t = c.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + c.params.slideDuplicateClass + ')');
                          c.lazy.loadInSlide(t.index(), !1);
                        } else {
                          var i = c.$wrapperEl.children('.' + c.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                          c.lazy.loadInSlide(i.index(), !1);
                        }
                      }
                      c.emit('lazyImageReady', d[0], n[0]);
                    }
                  }),
                    c.emit('lazyImageLoad', d[0], n[0]);
                });
          }
        },
        load: function () {
          function e(e) {
            if (o) {
              if (i.children('.' + r.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
            } else if (a[e]) return !0;
            return !1;
          }
          function t(e) {
            return o ? A(e).attr('data-swiper-slide-index') : A(e).index();
          }
          var n = this,
            i = n.$wrapperEl,
            r = n.params,
            a = n.slides,
            s = n.activeIndex,
            o = n.virtual && r.virtual.enabled,
            l = r.lazy,
            c = r.slidesPerView;
          if (('auto' === c && (c = 0), n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0), n.params.watchSlidesVisibility))
            i.children('.' + r.slideVisibleClass).each(function (e, t) {
              var i = o ? A(t).attr('data-swiper-slide-index') : A(t).index();
              n.lazy.loadInSlide(i);
            });
          else if (1 < c) for (var u = s; u < s + c; u += 1) e(u) && n.lazy.loadInSlide(u);
          else n.lazy.loadInSlide(s);
          if (l.loadPrevNext)
            if (1 < c || (l.loadPrevNextAmount && 1 < l.loadPrevNextAmount)) {
              for (var d = l.loadPrevNextAmount, h = c, p = Math.min(s + h + Math.max(d, h), a.length), f = Math.max(s - Math.max(h, d), 0), m = s + c; m < p; m += 1)
                e(m) && n.lazy.loadInSlide(m);
              for (var g = f; g < s; g += 1) e(g) && n.lazy.loadInSlide(g);
            } else {
              var v = i.children('.' + r.slideNextClass);
              0 < v.length && n.lazy.loadInSlide(t(v));
              var y = i.children('.' + r.slidePrevClass);
              0 < y.length && n.lazy.loadInSlide(t(y));
            }
        },
      },
      V = {
        LinearSpline: function (e, t) {
          var i,
            n,
            r,
            a,
            s,
            o = function (e, t) {
              for (n = -1, i = e.length; 1 < i - n; ) e[(r = (i + n) >> 1)] <= t ? (n = r) : (i = r);
              return i;
            };
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e ? ((s = o(this.x, e)), (a = s - 1), ((e - this.x[a]) * (this.y[s] - this.y[a])) / (this.x[s] - this.x[a]) + this.y[a]) : 0;
            }),
            this
          );
        },
        getInterpolateFunction: function (e) {
          var t = this;
          t.controller.spline || (t.controller.spline = t.params.loop ? new V.LinearSpline(t.slidesGrid, e.slidesGrid) : new V.LinearSpline(t.snapGrid, e.snapGrid));
        },
        setTranslate: function (e, t) {
          function i(e) {
            var t = a.rtlTranslate ? -a.translate : a.translate;
            'slide' === a.params.controller.by && (a.controller.getInterpolateFunction(e), (r = -a.controller.spline.interpolate(-t))),
              (r && 'container' !== a.params.controller.by) ||
                ((n = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate())), (r = (t - a.minTranslate()) * n + e.minTranslate())),
              a.params.controller.inverse && (r = e.maxTranslate() - r),
              e.updateProgress(r),
              e.setTranslate(r, a),
              e.updateActiveIndex(),
              e.updateSlidesClasses();
          }
          var n,
            r,
            a = this,
            s = a.controller.control;
          if (Array.isArray(s)) for (var o = 0; o < s.length; o += 1) s[o] !== t && s[o] instanceof k && i(s[o]);
          else s instanceof k && t !== s && i(s);
        },
        setTransition: function (t, e) {
          function i(e) {
            e.setTransition(t, r),
              0 !== t &&
                (e.transitionStart(),
                e.params.autoHeight &&
                  j.nextTick(function () {
                    e.updateAutoHeight();
                  }),
                e.$wrapperEl.transitionEnd(function () {
                  a && (e.params.loop && 'slide' === r.params.controller.by && e.loopFix(), e.transitionEnd());
                }));
          }
          var n,
            r = this,
            a = r.controller.control;
          if (Array.isArray(a)) for (n = 0; n < a.length; n += 1) a[n] !== e && a[n] instanceof k && i(a[n]);
          else a instanceof k && e !== a && i(a);
        },
      },
      G = {
        makeElFocusable: function (e) {
          return e.attr('tabIndex', '0'), e;
        },
        addElRole: function (e, t) {
          return e.attr('role', t), e;
        },
        addElLabel: function (e, t) {
          return e.attr('aria-label', t), e;
        },
        disableEl: function (e) {
          return e.attr('aria-disabled', !0), e;
        },
        enableEl: function (e) {
          return e.attr('aria-disabled', !1), e;
        },
        onEnterKey: function (e) {
          var t = this,
            i = t.params.a11y;
          if (13 === e.keyCode) {
            var n = A(e.target);
            t.navigation &&
              t.navigation.$nextEl &&
              n.is(t.navigation.$nextEl) &&
              ((t.isEnd && !t.params.loop) || t.slideNext(), t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)),
              t.navigation &&
                t.navigation.$prevEl &&
                n.is(t.navigation.$prevEl) &&
                ((t.isBeginning && !t.params.loop) || t.slidePrev(), t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)),
              t.pagination && n.is('.' + t.params.pagination.bulletClass) && n[0].click();
          }
        },
        notify: function (e) {
          var t = this.a11y.liveRegion;
          0 !== t.length && (t.html(''), t.html(e));
        },
        updateNavigation: function () {
          var e = this;
          if (!e.params.loop) {
            var t = e.navigation,
              i = t.$nextEl,
              n = t.$prevEl;
            n && 0 < n.length && (e.isBeginning ? e.a11y.disableEl(n) : e.a11y.enableEl(n)), i && 0 < i.length && (e.isEnd ? e.a11y.disableEl(i) : e.a11y.enableEl(i));
          }
        },
        updatePagination: function () {
          var n = this,
            r = n.params.a11y;
          n.pagination &&
            n.params.pagination.clickable &&
            n.pagination.bullets &&
            n.pagination.bullets.length &&
            n.pagination.bullets.each(function (e, t) {
              var i = A(t);
              n.a11y.makeElFocusable(i), n.a11y.addElRole(i, 'button'), n.a11y.addElLabel(i, r.paginationBulletMessage.replace(/{{index}}/, i.index() + 1));
            });
        },
        init: function () {
          var e = this;
          e.$el.append(e.a11y.liveRegion);
          var t,
            i,
            n = e.params.a11y;
          e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
            t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, 'button'), e.a11y.addElLabel(t, n.nextSlideMessage), t.on('keydown', e.a11y.onEnterKey)),
            i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, 'button'), e.a11y.addElLabel(i, n.prevSlideMessage), i.on('keydown', e.a11y.onEnterKey)),
            e.pagination &&
              e.params.pagination.clickable &&
              e.pagination.bullets &&
              e.pagination.bullets.length &&
              e.pagination.$el.on('keydown', '.' + e.params.pagination.bulletClass, e.a11y.onEnterKey);
        },
        destroy: function () {
          var e,
            t,
            i = this;
          i.a11y.liveRegion && 0 < i.a11y.liveRegion.length && i.a11y.liveRegion.remove(),
            i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl),
            i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl),
            e && e.off('keydown', i.a11y.onEnterKey),
            t && t.off('keydown', i.a11y.onEnterKey),
            i.pagination &&
              i.params.pagination.clickable &&
              i.pagination.bullets &&
              i.pagination.bullets.length &&
              i.pagination.$el.off('keydown', '.' + i.params.pagination.bulletClass, i.a11y.onEnterKey);
        },
      },
      U = {
        init: function () {
          var e = this;
          if (e.params.history) {
            if (!H.history || !H.history.pushState) return (e.params.history.enabled = !1), void (e.params.hashNavigation.enabled = !0);
            var t = e.history;
            (t.initialized = !0),
              (t.paths = U.getPathValues()),
              (t.paths.key || t.paths.value) &&
                (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || H.addEventListener('popstate', e.history.setHistoryPopState));
          }
        },
        destroy: function () {
          this.params.history.replaceState || H.removeEventListener('popstate', this.history.setHistoryPopState);
        },
        setHistoryPopState: function () {
          (this.history.paths = U.getPathValues()), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
        },
        getPathValues: function () {
          var e = H.location.pathname
              .slice(1)
              .split('/')
              .filter(function (e) {
                return '' !== e;
              }),
            t = e.length;
          return { key: e[t - 2], value: e[t - 1] };
        },
        setHistory: function (e, t) {
          if (this.history.initialized && this.params.history.enabled) {
            var i = this.slides.eq(t),
              n = U.slugify(i.attr('data-history'));
            H.location.pathname.includes(e) || (n = e + '/' + n);
            var r = H.history.state;
            (r && r.value === n) || (this.params.history.replaceState ? H.history.replaceState({ value: n }, null, n) : H.history.pushState({ value: n }, null, n));
          }
        },
        slugify: function (e) {
          return e
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
        },
        scrollToSlide: function (e, t, i) {
          var n = this;
          if (t)
            for (var r = 0, a = n.slides.length; r < a; r += 1) {
              var s = n.slides.eq(r);
              if (U.slugify(s.attr('data-history')) === t && !s.hasClass(n.params.slideDuplicateClass)) {
                var o = s.index();
                n.slideTo(o, e, i);
              }
            }
          else n.slideTo(0, e, i);
        },
      },
      K = {
        onHashCange: function () {
          var e = this,
            t = m.location.hash.replace('#', '');
          t !== e.slides.eq(e.activeIndex).attr('data-hash') && e.slideTo(e.$wrapperEl.children('.' + e.params.slideClass + '[data-hash="' + t + '"]').index());
        },
        setHash: function () {
          var e = this;
          if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
            if (e.params.hashNavigation.replaceState && H.history && H.history.replaceState)
              H.history.replaceState(null, null, '#' + e.slides.eq(e.activeIndex).attr('data-hash') || '');
            else {
              var t = e.slides.eq(e.activeIndex),
                i = t.attr('data-hash') || t.attr('data-history');
              m.location.hash = i || '';
            }
        },
        init: function () {
          var e = this;
          if (!(!e.params.hashNavigation.enabled || (e.params.history && e.params.history.enabled))) {
            e.hashNavigation.initialized = !0;
            var t = m.location.hash.replace('#', '');
            if (t)
              for (var i = 0, n = e.slides.length; i < n; i += 1) {
                var r = e.slides.eq(i);
                if ((r.attr('data-hash') || r.attr('data-history')) === t && !r.hasClass(e.params.slideDuplicateClass)) {
                  var a = r.index();
                  e.slideTo(a, 0, e.params.runCallbacksOnInit, !0);
                }
              }
            e.params.hashNavigation.watchState && A(H).on('hashchange', e.hashNavigation.onHashCange);
          }
        },
        destroy: function () {
          this.params.hashNavigation.watchState && A(H).off('hashchange', this.hashNavigation.onHashCange);
        },
      },
      Q = {
        run: function () {
          var e = this,
            t = e.slides.eq(e.activeIndex),
            i = e.params.autoplay.delay;
          t.attr('data-swiper-autoplay') && (i = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
            (e.autoplay.timeout = j.nextTick(function () {
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit('autoplay'))
                  : (e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))
                : e.params.loop
                ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit('autoplay'))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(0, e.params.speed, !0, !0), e.emit('autoplay'))
                : (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay'));
            }, i));
        },
        start: function () {
          var e = this;
          return void 0 === e.autoplay.timeout && !e.autoplay.running && ((e.autoplay.running = !0), e.emit('autoplayStart'), e.autoplay.run(), !0);
        },
        stop: function () {
          var e = this;
          return (
            !!e.autoplay.running &&
            void 0 !== e.autoplay.timeout &&
            (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)), (e.autoplay.running = !1), e.emit('autoplayStop'), !0)
          );
        },
        pause: function (e) {
          var t = this;
          t.autoplay.running &&
            (t.autoplay.paused ||
              (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
              (t.autoplay.paused = !0),
              0 !== e && t.params.autoplay.waitForTransition
                ? (t.$wrapperEl[0].addEventListener('transitionend', t.autoplay.onTransitionEnd),
                  t.$wrapperEl[0].addEventListener('webkitTransitionEnd', t.autoplay.onTransitionEnd))
                : ((t.autoplay.paused = !1), t.autoplay.run())));
        },
      },
      J = {
        setTranslate: function () {
          for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
            var n = e.slides.eq(i),
              r = -n[0].swiperSlideOffset;
            e.params.virtualTranslate || (r -= e.translate);
            var a = 0;
            e.isHorizontal() || ((a = r), (r = 0));
            var s = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
            n.css({ opacity: s }).transform('translate3d(' + r + 'px, ' + a + 'px, 0px)');
          }
        },
        setTransition: function (e) {
          var i = this,
            t = i.slides,
            n = i.$wrapperEl;
          if ((t.transition(e), i.params.virtualTranslate && 0 !== e)) {
            var r = !1;
            t.transitionEnd(function () {
              if (!r && i && !i.destroyed) {
                (r = !0), (i.animating = !1);
                for (var e = ['webkitTransitionEnd', 'transitionend'], t = 0; t < e.length; t += 1) n.trigger(e[t]);
              }
            });
          }
        },
      },
      Z = {
        setTranslate: function () {
          var e,
            t = this,
            i = t.$el,
            n = t.$wrapperEl,
            r = t.slides,
            a = t.width,
            s = t.height,
            o = t.rtlTranslate,
            l = t.size,
            c = t.params.cubeEffect,
            u = t.isHorizontal(),
            d = t.virtual && t.params.virtual.enabled,
            h = 0;
          c.shadow &&
            (u
              ? (0 === (e = n.find('.swiper-cube-shadow')).length && ((e = A('<div class="swiper-cube-shadow"></div>')), n.append(e)), e.css({ height: a + 'px' }))
              : 0 === (e = i.find('.swiper-cube-shadow')).length && ((e = A('<div class="swiper-cube-shadow"></div>')), i.append(e)));
          for (var p = 0; p < r.length; p += 1) {
            var f = r.eq(p),
              m = p;
            d && (m = parseInt(f.attr('data-swiper-slide-index'), 10));
            var g = 90 * m,
              v = Math.floor(g / 360);
            o && ((g = -g), (v = Math.floor(-g / 360)));
            var y = Math.max(Math.min(f[0].progress, 1), -1),
              b = 0,
              _ = 0,
              w = 0;
            m % 4 == 0
              ? ((b = 4 * -v * l), (w = 0))
              : (m - 1) % 4 == 0
              ? ((b = 0), (w = 4 * -v * l))
              : (m - 2) % 4 == 0
              ? ((b = l + 4 * v * l), (w = l))
              : (m - 3) % 4 == 0 && ((b = -l), (w = 3 * l + 4 * l * v)),
              o && (b = -b),
              u || ((_ = b), (b = 0));
            var x = 'rotateX(' + (u ? 0 : -g) + 'deg) rotateY(' + (u ? g : 0) + 'deg) translate3d(' + b + 'px, ' + _ + 'px, ' + w + 'px)';
            if ((y <= 1 && -1 < y && ((h = 90 * m + 90 * y), o && (h = 90 * -m - 90 * y)), f.transform(x), c.slideShadows)) {
              var T = u ? f.find('.swiper-slide-shadow-left') : f.find('.swiper-slide-shadow-top'),
                k = u ? f.find('.swiper-slide-shadow-right') : f.find('.swiper-slide-shadow-bottom');
              0 === T.length && ((T = A('<div class="swiper-slide-shadow-' + (u ? 'left' : 'top') + '"></div>')), f.append(T)),
                0 === k.length && ((k = A('<div class="swiper-slide-shadow-' + (u ? 'right' : 'bottom') + '"></div>')), f.append(k)),
                T.length && (T[0].style.opacity = Math.max(-y, 0)),
                k.length && (k[0].style.opacity = Math.max(y, 0));
            }
          }
          if (
            (n.css({
              '-webkit-transform-origin': '50% 50% -' + l / 2 + 'px',
              '-moz-transform-origin': '50% 50% -' + l / 2 + 'px',
              '-ms-transform-origin': '50% 50% -' + l / 2 + 'px',
              'transform-origin': '50% 50% -' + l / 2 + 'px',
            }),
            c.shadow)
          )
            if (u) e.transform('translate3d(0px, ' + (a / 2 + c.shadowOffset) + 'px, ' + -a / 2 + 'px) rotateX(90deg) rotateZ(0deg) scale(' + c.shadowScale + ')');
            else {
              var S = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                C = 1.5 - (Math.sin((2 * S * Math.PI) / 360) / 2 + Math.cos((2 * S * Math.PI) / 360) / 2),
                E = c.shadowScale,
                D = c.shadowScale / C,
                M = c.shadowOffset;
              e.transform('scale3d(' + E + ', 1, ' + D + ') translate3d(0px, ' + (s / 2 + M) + 'px, ' + -s / 2 / D + 'px) rotateX(-90deg)');
            }
          var P = L.isSafari || L.isUiWebView ? -l / 2 : 0;
          n.transform('translate3d(0px,0,' + P + 'px) rotateX(' + (t.isHorizontal() ? 0 : h) + 'deg) rotateY(' + (t.isHorizontal() ? -h : 0) + 'deg)');
        },
        setTransition: function (e) {
          var t = this.$el;
          this.slides.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find('.swiper-cube-shadow').transition(e);
        },
      },
      ee = {
        setTranslate: function () {
          for (var e = this, t = e.slides, i = e.rtlTranslate, n = 0; n < t.length; n += 1) {
            var r = t.eq(n),
              a = r[0].progress;
            e.params.flipEffect.limitRotation && (a = Math.max(Math.min(r[0].progress, 1), -1));
            var s = -180 * a,
              o = 0,
              l = -r[0].swiperSlideOffset,
              c = 0;
            if (
              (e.isHorizontal() ? i && (s = -s) : ((c = l), (o = -s), (s = l = 0)), (r[0].style.zIndex = -Math.abs(Math.round(a)) + t.length), e.params.flipEffect.slideShadows)
            ) {
              var u = e.isHorizontal() ? r.find('.swiper-slide-shadow-left') : r.find('.swiper-slide-shadow-top'),
                d = e.isHorizontal() ? r.find('.swiper-slide-shadow-right') : r.find('.swiper-slide-shadow-bottom');
              0 === u.length && ((u = A('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? 'left' : 'top') + '"></div>')), r.append(u)),
                0 === d.length && ((d = A('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? 'right' : 'bottom') + '"></div>')), r.append(d)),
                u.length && (u[0].style.opacity = Math.max(-a, 0)),
                d.length && (d[0].style.opacity = Math.max(a, 0));
            }
            r.transform('translate3d(' + l + 'px, ' + c + 'px, 0px) rotateX(' + o + 'deg) rotateY(' + s + 'deg)');
          }
        },
        setTransition: function (e) {
          var i = this,
            t = i.slides,
            n = i.activeIndex,
            r = i.$wrapperEl;
          if (
            (t.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e),
            i.params.virtualTranslate && 0 !== e)
          ) {
            var a = !1;
            t.eq(n).transitionEnd(function () {
              if (!a && i && !i.destroyed) {
                (a = !0), (i.animating = !1);
                for (var e = ['webkitTransitionEnd', 'transitionend'], t = 0; t < e.length; t += 1) r.trigger(e[t]);
              }
            });
          }
        },
      },
      te = {
        setTranslate: function () {
          for (
            var e = this,
              t = e.width,
              i = e.height,
              n = e.slides,
              r = e.$wrapperEl,
              a = e.slidesSizesGrid,
              s = e.params.coverflowEffect,
              o = e.isHorizontal(),
              l = e.translate,
              c = o ? t / 2 - l : i / 2 - l,
              u = o ? s.rotate : -s.rotate,
              d = s.depth,
              h = 0,
              p = n.length;
            h < p;
            h += 1
          ) {
            var f = n.eq(h),
              m = a[h],
              g = ((c - f[0].swiperSlideOffset - m / 2) / m) * s.modifier,
              v = o ? u * g : 0,
              y = o ? 0 : u * g,
              b = -d * Math.abs(g),
              _ = o ? 0 : s.stretch * g,
              w = o ? s.stretch * g : 0;
            Math.abs(w) < 0.001 && (w = 0), Math.abs(_) < 0.001 && (_ = 0), Math.abs(b) < 0.001 && (b = 0), Math.abs(v) < 0.001 && (v = 0), Math.abs(y) < 0.001 && (y = 0);
            var x = 'translate3d(' + w + 'px,' + _ + 'px,' + b + 'px)  rotateX(' + y + 'deg) rotateY(' + v + 'deg)';
            if ((f.transform(x), (f[0].style.zIndex = 1 - Math.abs(Math.round(g))), s.slideShadows)) {
              var T = o ? f.find('.swiper-slide-shadow-left') : f.find('.swiper-slide-shadow-top'),
                k = o ? f.find('.swiper-slide-shadow-right') : f.find('.swiper-slide-shadow-bottom');
              0 === T.length && ((T = A('<div class="swiper-slide-shadow-' + (o ? 'left' : 'top') + '"></div>')), f.append(T)),
                0 === k.length && ((k = A('<div class="swiper-slide-shadow-' + (o ? 'right' : 'bottom') + '"></div>')), f.append(k)),
                T.length && (T[0].style.opacity = 0 < g ? g : 0),
                k.length && (k[0].style.opacity = 0 < -g ? -g : 0);
            }
          }
          ($.pointerEvents || $.prefixedPointerEvents) && (r[0].style.perspectiveOrigin = c + 'px 50%');
        },
        setTransition: function (e) {
          this.slides.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e);
        },
      },
      ie = [
        S,
        C,
        E,
        D,
        P,
        R,
        N,
        {
          name: 'mousewheel',
          params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: 'container' } },
          create: function () {
            var e = this;
            j.extend(e, {
              mousewheel: {
                enabled: !1,
                enable: z.enable.bind(e),
                disable: z.disable.bind(e),
                handle: z.handle.bind(e),
                handleMouseEnter: z.handleMouseEnter.bind(e),
                handleMouseLeave: z.handleMouseLeave.bind(e),
                lastScrollTime: j.now(),
              },
            });
          },
          on: {
            init: function () {
              this.params.mousewheel.enabled && this.mousewheel.enable();
            },
            destroy: function () {
              this.mousewheel.enabled && this.mousewheel.disable();
            },
          },
        },
        {
          name: 'navigation',
          params: {
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: 'swiper-button-disabled',
              hiddenClass: 'swiper-button-hidden',
              lockClass: 'swiper-button-lock',
            },
          },
          create: function () {
            j.extend(this, { navigation: { init: F.init.bind(this), update: F.update.bind(this), destroy: F.destroy.bind(this) } });
          },
          on: {
            init: function () {
              this.navigation.init(), this.navigation.update();
            },
            toEdge: function () {
              this.navigation.update();
            },
            fromEdge: function () {
              this.navigation.update();
            },
            destroy: function () {
              this.navigation.destroy();
            },
            click: function (e) {
              var t = this.navigation,
                i = t.$nextEl,
                n = t.$prevEl;
              !this.params.navigation.hideOnClick ||
                A(e.target).is(n) ||
                A(e.target).is(i) ||
                (i && i.toggleClass(this.params.navigation.hiddenClass), n && n.toggleClass(this.params.navigation.hiddenClass));
            },
          },
        },
        {
          name: 'pagination',
          params: {
            pagination: {
              el: null,
              bulletElement: 'span',
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: 'bullets',
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: function (e) {
                return e;
              },
              formatFractionTotal: function (e) {
                return e;
              },
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
              modifierClass: 'swiper-pagination-',
              currentClass: 'swiper-pagination-current',
              totalClass: 'swiper-pagination-total',
              hiddenClass: 'swiper-pagination-hidden',
              progressbarFillClass: 'swiper-pagination-progressbar-fill',
              progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
              clickableClass: 'swiper-pagination-clickable',
              lockClass: 'swiper-pagination-lock',
            },
          },
          create: function () {
            var e = this;
            j.extend(e, { pagination: { init: B.init.bind(e), render: B.render.bind(e), update: B.update.bind(e), destroy: B.destroy.bind(e), dynamicBulletIndex: 0 } });
          },
          on: {
            init: function () {
              this.pagination.init(), this.pagination.render(), this.pagination.update();
            },
            activeIndexChange: function () {
              this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
            },
            snapIndexChange: function () {
              this.params.loop || this.pagination.update();
            },
            slidesLengthChange: function () {
              this.params.loop && (this.pagination.render(), this.pagination.update());
            },
            snapGridLengthChange: function () {
              this.params.loop || (this.pagination.render(), this.pagination.update());
            },
            destroy: function () {
              this.pagination.destroy();
            },
            click: function (e) {
              var t = this;
              t.params.pagination.el &&
                t.params.pagination.hideOnClick &&
                0 < t.pagination.$el.length &&
                !A(e.target).hasClass(t.params.pagination.bulletClass) &&
                t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
            },
          },
        },
        {
          name: 'scrollbar',
          params: { scrollbar: { el: null, dragSize: 'auto', hide: !1, draggable: !1, snapOnRelease: !0, lockClass: 'swiper-scrollbar-lock', dragClass: 'swiper-scrollbar-drag' } },
          create: function () {
            var e = this;
            j.extend(e, {
              scrollbar: {
                init: q.init.bind(e),
                destroy: q.destroy.bind(e),
                updateSize: q.updateSize.bind(e),
                setTranslate: q.setTranslate.bind(e),
                setTransition: q.setTransition.bind(e),
                enableDraggable: q.enableDraggable.bind(e),
                disableDraggable: q.disableDraggable.bind(e),
                setDragPosition: q.setDragPosition.bind(e),
                onDragStart: q.onDragStart.bind(e),
                onDragMove: q.onDragMove.bind(e),
                onDragEnd: q.onDragEnd.bind(e),
                isTouched: !1,
                timeout: null,
                dragTimeout: null,
              },
            });
          },
          on: {
            init: function () {
              this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
            },
            update: function () {
              this.scrollbar.updateSize();
            },
            resize: function () {
              this.scrollbar.updateSize();
            },
            observerUpdate: function () {
              this.scrollbar.updateSize();
            },
            setTranslate: function () {
              this.scrollbar.setTranslate();
            },
            setTransition: function (e) {
              this.scrollbar.setTransition(e);
            },
            destroy: function () {
              this.scrollbar.destroy();
            },
          },
        },
        {
          name: 'parallax',
          params: { parallax: { enabled: !1 } },
          create: function () {
            j.extend(this, { parallax: { setTransform: Y.setTransform.bind(this), setTranslate: Y.setTranslate.bind(this), setTransition: Y.setTransition.bind(this) } });
          },
          on: {
            beforeInit: function () {
              this.params.parallax.enabled && (this.params.watchSlidesProgress = !0);
            },
            init: function () {
              this.params.parallax && this.parallax.setTranslate();
            },
            setTranslate: function () {
              this.params.parallax && this.parallax.setTranslate();
            },
            setTransition: function (e) {
              this.params.parallax && this.parallax.setTransition(e);
            },
          },
        },
        {
          name: 'zoom',
          params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: 'swiper-zoom-container', zoomedSlideClass: 'swiper-slide-zoomed' } },
          create: function () {
            var t = this,
              i = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
              };
            'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'.split(' ').forEach(function (e) {
              i[e] = X[e].bind(t);
            }),
              j.extend(t, { zoom: i });
          },
          on: {
            init: function () {
              this.params.zoom.enabled && this.zoom.enable();
            },
            destroy: function () {
              this.zoom.disable();
            },
            touchStart: function (e) {
              this.zoom.enabled && this.zoom.onTouchStart(e);
            },
            touchEnd: function (e) {
              this.zoom.enabled && this.zoom.onTouchEnd(e);
            },
            doubleTap: function (e) {
              this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
            },
            transitionEnd: function () {
              this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
            },
          },
        },
        {
          name: 'lazy',
          params: {
            lazy: {
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              elementClass: 'swiper-lazy',
              loadingClass: 'swiper-lazy-loading',
              loadedClass: 'swiper-lazy-loaded',
              preloaderClass: 'swiper-lazy-preloader',
            },
          },
          create: function () {
            j.extend(this, { lazy: { initialImageLoaded: !1, load: W.load.bind(this), loadInSlide: W.loadInSlide.bind(this) } });
          },
          on: {
            beforeInit: function () {
              this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
            },
            init: function () {
              this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
            },
            scroll: function () {
              this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
            },
            resize: function () {
              this.params.lazy.enabled && this.lazy.load();
            },
            scrollbarDragMove: function () {
              this.params.lazy.enabled && this.lazy.load();
            },
            transitionStart: function () {
              var e = this;
              e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || (!e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded)) && e.lazy.load();
            },
            transitionEnd: function () {
              this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
            },
          },
        },
        {
          name: 'controller',
          params: { controller: { control: void 0, inverse: !1, by: 'slide' } },
          create: function () {
            var e = this;
            j.extend(e, {
              controller: {
                control: e.params.controller.control,
                getInterpolateFunction: V.getInterpolateFunction.bind(e),
                setTranslate: V.setTranslate.bind(e),
                setTransition: V.setTransition.bind(e),
              },
            });
          },
          on: {
            update: function () {
              this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
            },
            resize: function () {
              this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
            },
            observerUpdate: function () {
              this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
            },
            setTranslate: function (e, t) {
              this.controller.control && this.controller.setTranslate(e, t);
            },
            setTransition: function (e, t) {
              this.controller.control && this.controller.setTransition(e, t);
            },
          },
        },
        {
          name: 'a11y',
          params: {
            a11y: {
              enabled: !0,
              notificationClass: 'swiper-notification',
              prevSlideMessage: 'Previous slide',
              nextSlideMessage: 'Next slide',
              firstSlideMessage: 'This is the first slide',
              lastSlideMessage: 'This is the last slide',
              paginationBulletMessage: 'Go to slide {{index}}',
            },
          },
          create: function () {
            var t = this;
            j.extend(t, { a11y: { liveRegion: A('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }),
              Object.keys(G).forEach(function (e) {
                t.a11y[e] = G[e].bind(t);
              });
          },
          on: {
            init: function () {
              this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
            },
            toEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            fromEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            paginationUpdate: function () {
              this.params.a11y.enabled && this.a11y.updatePagination();
            },
            destroy: function () {
              this.params.a11y.enabled && this.a11y.destroy();
            },
          },
        },
        {
          name: 'history',
          params: { history: { enabled: !1, replaceState: !1, key: 'slides' } },
          create: function () {
            var e = this;
            j.extend(e, {
              history: {
                init: U.init.bind(e),
                setHistory: U.setHistory.bind(e),
                setHistoryPopState: U.setHistoryPopState.bind(e),
                scrollToSlide: U.scrollToSlide.bind(e),
                destroy: U.destroy.bind(e),
              },
            });
          },
          on: {
            init: function () {
              this.params.history.enabled && this.history.init();
            },
            destroy: function () {
              this.params.history.enabled && this.history.destroy();
            },
            transitionEnd: function () {
              this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
            },
          },
        },
        {
          name: 'hash-navigation',
          params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
          create: function () {
            var e = this;
            j.extend(e, { hashNavigation: { initialized: !1, init: K.init.bind(e), destroy: K.destroy.bind(e), setHash: K.setHash.bind(e), onHashCange: K.onHashCange.bind(e) } });
          },
          on: {
            init: function () {
              this.params.hashNavigation.enabled && this.hashNavigation.init();
            },
            destroy: function () {
              this.params.hashNavigation.enabled && this.hashNavigation.destroy();
            },
            transitionEnd: function () {
              this.hashNavigation.initialized && this.hashNavigation.setHash();
            },
          },
        },
        {
          name: 'autoplay',
          params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
          create: function () {
            var t = this;
            j.extend(t, {
              autoplay: {
                running: !1,
                paused: !1,
                run: Q.run.bind(t),
                start: Q.start.bind(t),
                stop: Q.stop.bind(t),
                pause: Q.pause.bind(t),
                onTransitionEnd: function (e) {
                  t &&
                    !t.destroyed &&
                    t.$wrapperEl &&
                    e.target === this &&
                    (t.$wrapperEl[0].removeEventListener('transitionend', t.autoplay.onTransitionEnd),
                    t.$wrapperEl[0].removeEventListener('webkitTransitionEnd', t.autoplay.onTransitionEnd),
                    (t.autoplay.paused = !1),
                    t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
                },
              },
            });
          },
          on: {
            init: function () {
              this.params.autoplay.enabled && this.autoplay.start();
            },
            beforeTransitionStart: function (e, t) {
              this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
            },
            sliderFirstMove: function () {
              this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
            },
            destroy: function () {
              this.autoplay.running && this.autoplay.stop();
            },
          },
        },
        {
          name: 'effect-fade',
          params: { fadeEffect: { crossFade: !1 } },
          create: function () {
            j.extend(this, { fadeEffect: { setTranslate: J.setTranslate.bind(this), setTransition: J.setTransition.bind(this) } });
          },
          on: {
            beforeInit: function () {
              var e = this;
              if ('fade' === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + 'fade');
                var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                j.extend(e.params, t), j.extend(e.originalParams, t);
              }
            },
            setTranslate: function () {
              'fade' === this.params.effect && this.fadeEffect.setTranslate();
            },
            setTransition: function (e) {
              'fade' === this.params.effect && this.fadeEffect.setTransition(e);
            },
          },
        },
        {
          name: 'effect-cube',
          params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
          create: function () {
            j.extend(this, { cubeEffect: { setTranslate: Z.setTranslate.bind(this), setTransition: Z.setTransition.bind(this) } });
          },
          on: {
            beforeInit: function () {
              var e = this;
              if ('cube' === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + 'cube'), e.classNames.push(e.params.containerModifierClass + '3d');
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: !1,
                  virtualTranslate: !0,
                };
                j.extend(e.params, t), j.extend(e.originalParams, t);
              }
            },
            setTranslate: function () {
              'cube' === this.params.effect && this.cubeEffect.setTranslate();
            },
            setTransition: function (e) {
              'cube' === this.params.effect && this.cubeEffect.setTransition(e);
            },
          },
        },
        {
          name: 'effect-flip',
          params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
          create: function () {
            j.extend(this, { flipEffect: { setTranslate: ee.setTranslate.bind(this), setTransition: ee.setTransition.bind(this) } });
          },
          on: {
            beforeInit: function () {
              var e = this;
              if ('flip' === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + 'flip'), e.classNames.push(e.params.containerModifierClass + '3d');
                var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                j.extend(e.params, t), j.extend(e.originalParams, t);
              }
            },
            setTranslate: function () {
              'flip' === this.params.effect && this.flipEffect.setTranslate();
            },
            setTransition: function (e) {
              'flip' === this.params.effect && this.flipEffect.setTransition(e);
            },
          },
        },
        {
          name: 'effect-coverflow',
          params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } },
          create: function () {
            j.extend(this, { coverflowEffect: { setTranslate: te.setTranslate.bind(this), setTransition: te.setTransition.bind(this) } });
          },
          on: {
            beforeInit: function () {
              var e = this;
              'coverflow' === e.params.effect &&
                (e.classNames.push(e.params.containerModifierClass + 'coverflow'),
                e.classNames.push(e.params.containerModifierClass + '3d'),
                (e.params.watchSlidesProgress = !0),
                (e.originalParams.watchSlidesProgress = !0));
            },
            setTranslate: function () {
              'coverflow' === this.params.effect && this.coverflowEffect.setTranslate();
            },
            setTransition: function (e) {
              'coverflow' === this.params.effect && this.coverflowEffect.setTransition(e);
            },
          },
        },
      ];
    return void 0 === k.use && ((k.use = k.Class.use), (k.installModule = k.Class.installModule)), k.use(ie), k;
  }),
  (function (c) {
    function u(e, t) {
      if (((t = t || {}), (e = e || '') instanceof u)) return e;
      if (!(this instanceof u)) return new u(e, t);
      var i = n(e);
      (this._originalInput = e),
        (this._r = i.r),
        (this._g = i.g),
        (this._b = i.b),
        (this._a = i.a),
        (this._roundA = $(100 * this._a) / 100),
        (this._format = t.format || i.format),
        (this._gradientType = t.gradientType),
        this._r < 1 && (this._r = $(this._r)),
        this._g < 1 && (this._g = $(this._g)),
        this._b < 1 && (this._b = $(this._b)),
        (this._ok = i.ok),
        (this._tc_id = j++);
    }
    function n(e) {
      var t = { r: 0, g: 0, b: 0 },
        i = 1,
        n = null,
        r = null,
        a = null,
        s = !1,
        o = !1;
      return (
        'string' == typeof e && (e = N(e)),
        'object' == typeof e &&
          (I(e.r) && I(e.g) && I(e.b)
            ? ((t = l(e.r, e.g, e.b)), (s = !0), (o = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb'))
            : I(e.h) && I(e.s) && I(e.v)
            ? ((n = L(e.s)), (r = L(e.v)), (t = h(e.h, n, r)), (s = !0), (o = 'hsv'))
            : I(e.h) && I(e.s) && I(e.l) && ((n = L(e.s)), (a = L(e.l)), (t = d(e.h, n, a)), (s = !0), (o = 'hsl')),
          e.hasOwnProperty('a') && (i = e.a)),
        (i = S(i)),
        { ok: s, format: e.format || o, r: B(255, q(t.r, 0)), g: B(255, q(t.g, 0)), b: B(255, q(t.b, 0)), a: i }
      );
    }
    function l(e, t, i) {
      return { r: 255 * C(e, 255), g: 255 * C(t, 255), b: 255 * C(i, 255) };
    }
    function r(e, t, i) {
      (e = C(e, 255)), (t = C(t, 255)), (i = C(i, 255));
      var n,
        r,
        a = q(e, t, i),
        s = B(e, t, i),
        o = (a + s) / 2;
      if (a == s) n = r = 0;
      else {
        var l = a - s;
        switch (((r = 0.5 < o ? l / (2 - a - s) : l / (a + s)), a)) {
          case e:
            n = (t - i) / l + (t < i ? 6 : 0);
            break;
          case t:
            n = (i - e) / l + 2;
            break;
          case i:
            n = (e - t) / l + 4;
        }
        n /= 6;
      }
      return { h: n, s: r, l: o };
    }
    function d(e, t, i) {
      function n(e, t, i) {
        return i < 0 && (i += 1), 1 < i && (i -= 1), i < 1 / 6 ? e + 6 * (t - e) * i : i < 0.5 ? t : i < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - i) : e;
      }
      var r, a, s;
      if (((e = C(e, 360)), (t = C(t, 100)), (i = C(i, 100)), 0 === t)) r = a = s = i;
      else {
        var o = i < 0.5 ? i * (1 + t) : i + t - i * t,
          l = 2 * i - o;
        (r = n(l, o, e + 1 / 3)), (a = n(l, o, e)), (s = n(l, o, e - 1 / 3));
      }
      return { r: 255 * r, g: 255 * a, b: 255 * s };
    }
    function a(e, t, i) {
      (e = C(e, 255)), (t = C(t, 255)), (i = C(i, 255));
      var n,
        r,
        a = q(e, t, i),
        s = B(e, t, i),
        o = a,
        l = a - s;
      if (((r = 0 === a ? 0 : l / a), a == s)) n = 0;
      else {
        switch (a) {
          case e:
            n = (t - i) / l + (t < i ? 6 : 0);
            break;
          case t:
            n = (i - e) / l + 2;
            break;
          case i:
            n = (e - t) / l + 4;
        }
        n /= 6;
      }
      return { h: n, s: r, v: o };
    }
    function h(e, t, i) {
      (e = 6 * C(e, 360)), (t = C(t, 100)), (i = C(i, 100));
      var n = c.floor(e),
        r = e - n,
        a = i * (1 - t),
        s = i * (1 - r * t),
        o = i * (1 - (1 - r) * t),
        l = n % 6;
      return { r: 255 * [i, s, a, a, o, i][l], g: 255 * [o, i, i, s, a, a][l], b: 255 * [a, a, o, i, i, s][l] };
    }
    function t(e, t, i, n) {
      var r = [A($(e).toString(16)), A($(t).toString(16)), A($(i).toString(16))];
      return n && r[0].charAt(0) == r[0].charAt(1) && r[1].charAt(0) == r[1].charAt(1) && r[2].charAt(0) == r[2].charAt(1)
        ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0)
        : r.join('');
    }
    function i(e, t, i, n, r) {
      var a = [A($(e).toString(16)), A($(t).toString(16)), A($(i).toString(16)), A(O(n))];
      return r && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1)
        ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0)
        : a.join('');
    }
    function s(e, t, i, n) {
      return [A(O(n)), A($(e).toString(16)), A($(t).toString(16)), A($(i).toString(16))].join('');
    }
    function e(e, t) {
      t = 0 === t ? 0 : t || 10;
      var i = u(e).toHsl();
      return (i.s -= t / 100), (i.s = E(i.s)), u(i);
    }
    function o(e, t) {
      t = 0 === t ? 0 : t || 10;
      var i = u(e).toHsl();
      return (i.s += t / 100), (i.s = E(i.s)), u(i);
    }
    function p(e) {
      return u(e).desaturate(100);
    }
    function f(e, t) {
      t = 0 === t ? 0 : t || 10;
      var i = u(e).toHsl();
      return (i.l += t / 100), (i.l = E(i.l)), u(i);
    }
    function m(e, t) {
      t = 0 === t ? 0 : t || 10;
      var i = u(e).toRgb();
      return (i.r = q(0, B(255, i.r - $((-t / 100) * 255)))), (i.g = q(0, B(255, i.g - $((-t / 100) * 255)))), (i.b = q(0, B(255, i.b - $((-t / 100) * 255)))), u(i);
    }
    function g(e, t) {
      t = 0 === t ? 0 : t || 10;
      var i = u(e).toHsl();
      return (i.l -= t / 100), (i.l = E(i.l)), u(i);
    }
    function v(e, t) {
      var i = u(e).toHsl(),
        n = (i.h + t) % 360;
      return (i.h = n < 0 ? 360 + n : n), u(i);
    }
    function y(e) {
      var t = u(e).toHsl();
      return (t.h = (t.h + 180) % 360), u(t);
    }
    function b(e) {
      var t = u(e).toHsl(),
        i = t.h;
      return [u(e), u({ h: (i + 120) % 360, s: t.s, l: t.l }), u({ h: (i + 240) % 360, s: t.s, l: t.l })];
    }
    function _(e) {
      var t = u(e).toHsl(),
        i = t.h;
      return [u(e), u({ h: (i + 90) % 360, s: t.s, l: t.l }), u({ h: (i + 180) % 360, s: t.s, l: t.l }), u({ h: (i + 270) % 360, s: t.s, l: t.l })];
    }
    function w(e) {
      var t = u(e).toHsl(),
        i = t.h;
      return [u(e), u({ h: (i + 72) % 360, s: t.s, l: t.l }), u({ h: (i + 216) % 360, s: t.s, l: t.l })];
    }
    function x(e, t, i) {
      (t = t || 6), (i = i || 30);
      var n = u(e).toHsl(),
        r = 360 / i,
        a = [u(e)];
      for (n.h = (n.h - ((r * t) >> 1) + 720) % 360; --t; ) (n.h = (n.h + r) % 360), a.push(u(n));
      return a;
    }
    function T(e, t) {
      t = t || 6;
      for (var i = u(e).toHsv(), n = i.h, r = i.s, a = i.v, s = [], o = 1 / t; t--; ) s.push(u({ h: n, s: r, v: a })), (a = (a + o) % 1);
      return s;
    }
    function k(e) {
      var t = {};
      for (var i in e) e.hasOwnProperty(i) && (t[e[i]] = i);
      return t;
    }
    function S(e) {
      return (e = parseFloat(e)), (isNaN(e) || e < 0 || 1 < e) && (e = 1), e;
    }
    function C(e, t) {
      M(e) && (e = '100%');
      var i = P(e);
      return (e = B(t, q(0, parseFloat(e)))), i && (e = parseInt(e * t, 10) / 100), c.abs(e - t) < 1e-6 ? 1 : (e % t) / parseFloat(t);
    }
    function E(e) {
      return B(1, q(0, e));
    }
    function D(e) {
      return parseInt(e, 16);
    }
    function M(e) {
      return 'string' == typeof e && -1 != e.indexOf('.') && 1 === parseFloat(e);
    }
    function P(e) {
      return 'string' == typeof e && -1 != e.indexOf('%');
    }
    function A(e) {
      return 1 == e.length ? '0' + e : '' + e;
    }
    function L(e) {
      return e <= 1 && (e = 100 * e + '%'), e;
    }
    function O(e) {
      return c.round(255 * parseFloat(e)).toString(16);
    }
    function R(e) {
      return D(e) / 255;
    }
    function I(e) {
      return !!K.CSS_UNIT.exec(e);
    }
    function N(e) {
      e = e.replace(F, '').replace(H, '').toLowerCase();
      var t,
        i = !1;
      if (G[e]) (e = G[e]), (i = !0);
      else if ('transparent' == e) return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
      return (t = K.rgb.exec(e))
        ? { r: t[1], g: t[2], b: t[3] }
        : (t = K.rgba.exec(e))
        ? { r: t[1], g: t[2], b: t[3], a: t[4] }
        : (t = K.hsl.exec(e))
        ? { h: t[1], s: t[2], l: t[3] }
        : (t = K.hsla.exec(e))
        ? { h: t[1], s: t[2], l: t[3], a: t[4] }
        : (t = K.hsv.exec(e))
        ? { h: t[1], s: t[2], v: t[3] }
        : (t = K.hsva.exec(e))
        ? { h: t[1], s: t[2], v: t[3], a: t[4] }
        : (t = K.hex8.exec(e))
        ? { r: D(t[1]), g: D(t[2]), b: D(t[3]), a: R(t[4]), format: i ? 'name' : 'hex8' }
        : (t = K.hex6.exec(e))
        ? { r: D(t[1]), g: D(t[2]), b: D(t[3]), format: i ? 'name' : 'hex' }
        : (t = K.hex4.exec(e))
        ? { r: D(t[1] + '' + t[1]), g: D(t[2] + '' + t[2]), b: D(t[3] + '' + t[3]), a: R(t[4] + '' + t[4]), format: i ? 'name' : 'hex8' }
        : !!(t = K.hex3.exec(e)) && { r: D(t[1] + '' + t[1]), g: D(t[2] + '' + t[2]), b: D(t[3] + '' + t[3]), format: i ? 'name' : 'hex' };
    }
    function z(e) {
      var t, i;
      return (
        'AA' !== (t = ((e = e || { level: 'AA', size: 'small' }).level || 'AA').toUpperCase()) && 'AAA' !== t && (t = 'AA'),
        'small' !== (i = (e.size || 'small').toLowerCase()) && 'large' !== i && (i = 'small'),
        { level: t, size: i }
      );
    }
    var F = /^\s+/,
      H = /\s+$/,
      j = 0,
      $ = c.round,
      B = c.min,
      q = c.max,
      Y = c.random;
    (u.prototype = {
      isDark: function () {
        return this.getBrightness() < 128;
      },
      isLight: function () {
        return !this.isDark();
      },
      isValid: function () {
        return this._ok;
      },
      getOriginalInput: function () {
        return this._originalInput;
      },
      getFormat: function () {
        return this._format;
      },
      getAlpha: function () {
        return this._a;
      },
      getBrightness: function () {
        var e = this.toRgb();
        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
      },
      getLuminance: function () {
        var e,
          t,
          i,
          n = this.toRgb();
        return (
          (e = n.r / 255),
          (t = n.g / 255),
          (i = n.b / 255),
          0.2126 * (e <= 0.03928 ? e / 12.92 : c.pow((e + 0.055) / 1.055, 2.4)) +
            0.7152 * (t <= 0.03928 ? t / 12.92 : c.pow((t + 0.055) / 1.055, 2.4)) +
            0.0722 * (i <= 0.03928 ? i / 12.92 : c.pow((i + 0.055) / 1.055, 2.4))
        );
      },
      setAlpha: function (e) {
        return (this._a = S(e)), (this._roundA = $(100 * this._a) / 100), this;
      },
      toHsv: function () {
        var e = a(this._r, this._g, this._b);
        return { h: 360 * e.h, s: e.s, v: e.v, a: this._a };
      },
      toHsvString: function () {
        var e = a(this._r, this._g, this._b),
          t = $(360 * e.h),
          i = $(100 * e.s),
          n = $(100 * e.v);
        return 1 == this._a ? 'hsv(' + t + ', ' + i + '%, ' + n + '%)' : 'hsva(' + t + ', ' + i + '%, ' + n + '%, ' + this._roundA + ')';
      },
      toHsl: function () {
        var e = r(this._r, this._g, this._b);
        return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
      },
      toHslString: function () {
        var e = r(this._r, this._g, this._b),
          t = $(360 * e.h),
          i = $(100 * e.s),
          n = $(100 * e.l);
        return 1 == this._a ? 'hsl(' + t + ', ' + i + '%, ' + n + '%)' : 'hsla(' + t + ', ' + i + '%, ' + n + '%, ' + this._roundA + ')';
      },
      toHex: function (e) {
        return t(this._r, this._g, this._b, e);
      },
      toHexString: function (e) {
        return '#' + this.toHex(e);
      },
      toHex8: function (e) {
        return i(this._r, this._g, this._b, this._a, e);
      },
      toHex8String: function (e) {
        return '#' + this.toHex8(e);
      },
      toRgb: function () {
        return { r: $(this._r), g: $(this._g), b: $(this._b), a: this._a };
      },
      toRgbString: function () {
        return 1 == this._a
          ? 'rgb(' + $(this._r) + ', ' + $(this._g) + ', ' + $(this._b) + ')'
          : 'rgba(' + $(this._r) + ', ' + $(this._g) + ', ' + $(this._b) + ', ' + this._roundA + ')';
      },
      toPercentageRgb: function () {
        return { r: $(100 * C(this._r, 255)) + '%', g: $(100 * C(this._g, 255)) + '%', b: $(100 * C(this._b, 255)) + '%', a: this._a };
      },
      toPercentageRgbString: function () {
        return 1 == this._a
          ? 'rgb(' + $(100 * C(this._r, 255)) + '%, ' + $(100 * C(this._g, 255)) + '%, ' + $(100 * C(this._b, 255)) + '%)'
          : 'rgba(' + $(100 * C(this._r, 255)) + '%, ' + $(100 * C(this._g, 255)) + '%, ' + $(100 * C(this._b, 255)) + '%, ' + this._roundA + ')';
      },
      toName: function () {
        return 0 === this._a ? 'transparent' : !(this._a < 1) && (U[t(this._r, this._g, this._b, !0)] || !1);
      },
      toFilter: function (e) {
        var t = '#' + s(this._r, this._g, this._b, this._a),
          i = t,
          n = this._gradientType ? 'GradientType = 1, ' : '';
        if (e) {
          var r = u(e);
          i = '#' + s(r._r, r._g, r._b, r._a);
        }
        return 'progid:DXImageTransform.Microsoft.gradient(' + n + 'startColorstr=' + t + ',endColorstr=' + i + ')';
      },
      toString: function (e) {
        var t = !!e;
        e = e || this._format;
        var i = !1,
          n = this._a < 1 && 0 <= this._a;
        return !t && n && ('hex' === e || 'hex6' === e || 'hex3' === e || 'hex4' === e || 'hex8' === e || 'name' === e)
          ? 'name' === e && 0 === this._a
            ? this.toName()
            : this.toRgbString()
          : ('rgb' === e && (i = this.toRgbString()),
            'prgb' === e && (i = this.toPercentageRgbString()),
            ('hex' === e || 'hex6' === e) && (i = this.toHexString()),
            'hex3' === e && (i = this.toHexString(!0)),
            'hex4' === e && (i = this.toHex8String(!0)),
            'hex8' === e && (i = this.toHex8String()),
            'name' === e && (i = this.toName()),
            'hsl' === e && (i = this.toHslString()),
            'hsv' === e && (i = this.toHsvString()),
            i || this.toHexString());
      },
      clone: function () {
        return u(this.toString());
      },
      _applyModification: function (e, t) {
        var i = e.apply(null, [this].concat([].slice.call(t)));
        return (this._r = i._r), (this._g = i._g), (this._b = i._b), this.setAlpha(i._a), this;
      },
      lighten: function () {
        return this._applyModification(f, arguments);
      },
      brighten: function () {
        return this._applyModification(m, arguments);
      },
      darken: function () {
        return this._applyModification(g, arguments);
      },
      desaturate: function () {
        return this._applyModification(e, arguments);
      },
      saturate: function () {
        return this._applyModification(o, arguments);
      },
      greyscale: function () {
        return this._applyModification(p, arguments);
      },
      spin: function () {
        return this._applyModification(v, arguments);
      },
      _applyCombination: function (e, t) {
        return e.apply(null, [this].concat([].slice.call(t)));
      },
      analogous: function () {
        return this._applyCombination(x, arguments);
      },
      complement: function () {
        return this._applyCombination(y, arguments);
      },
      monochromatic: function () {
        return this._applyCombination(T, arguments);
      },
      splitcomplement: function () {
        return this._applyCombination(w, arguments);
      },
      triad: function () {
        return this._applyCombination(b, arguments);
      },
      tetrad: function () {
        return this._applyCombination(_, arguments);
      },
    }),
      (u.fromRatio = function (e, t) {
        if ('object' == typeof e) {
          var i = {};
          for (var n in e) e.hasOwnProperty(n) && (i[n] = 'a' === n ? e[n] : L(e[n]));
          e = i;
        }
        return u(e, t);
      }),
      (u.equals = function (e, t) {
        return !(!e || !t) && u(e).toRgbString() == u(t).toRgbString();
      }),
      (u.random = function () {
        return u.fromRatio({ r: Y(), g: Y(), b: Y() });
      }),
      (u.mix = function (e, t, i) {
        i = 0 === i ? 0 : i || 50;
        var n = u(e).toRgb(),
          r = u(t).toRgb(),
          a = i / 100;
        return u({ r: (r.r - n.r) * a + n.r, g: (r.g - n.g) * a + n.g, b: (r.b - n.b) * a + n.b, a: (r.a - n.a) * a + n.a });
      }),
      (u.readability = function (e, t) {
        var i = u(e),
          n = u(t);
        return (c.max(i.getLuminance(), n.getLuminance()) + 0.05) / (c.min(i.getLuminance(), n.getLuminance()) + 0.05);
      }),
      (u.isReadable = function (e, t, i) {
        var n,
          r,
          a = u.readability(e, t);
        switch (((r = !1), (n = z(i)).level + n.size)) {
          case 'AAsmall':
          case 'AAAlarge':
            r = 4.5 <= a;
            break;
          case 'AAlarge':
            r = 3 <= a;
            break;
          case 'AAAsmall':
            r = 7 <= a;
        }
        return r;
      }),
      (u.mostReadable = function (e, t, i) {
        var n,
          r,
          a,
          s,
          o = null,
          l = 0;
        (r = (i = i || {}).includeFallbackColors), (a = i.level), (s = i.size);
        for (var c = 0; c < t.length; c++) l < (n = u.readability(e, t[c])) && ((l = n), (o = u(t[c])));
        return u.isReadable(e, o, { level: a, size: s }) || !r ? o : ((i.includeFallbackColors = !1), u.mostReadable(e, ['#fff', '#000'], i));
      });
    var X,
      W,
      V,
      G = (u.names = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '0ff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000',
        blanchedalmond: 'ffebcd',
        blue: '00f',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        burntsienna: 'ea7e5d',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '0ff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkgrey: 'a9a9a9',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkslategrey: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dimgrey: '696969',
        dodgerblue: '1e90ff',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'f0f',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        grey: '808080',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgray: 'd3d3d3',
        lightgreen: '90ee90',
        lightgrey: 'd3d3d3',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslategray: '789',
        lightslategrey: '789',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '0f0',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'f0f',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370db',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'db7093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '663399',
        red: 'f00',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        slategrey: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        wheat: 'f5deb3',
        white: 'fff',
        whitesmoke: 'f5f5f5',
        yellow: 'ff0',
        yellowgreen: '9acd32',
      }),
      U = (u.hexNames = k(G)),
      K =
        ((W = '[\\s|\\(]+(' + (X = '(?:' + '[-\\+]?\\d*\\.\\d+%?' + ')|(?:' + '[-\\+]?\\d+%?' + ')') + ')[,|\\s]+(' + X + ')[,|\\s]+(' + X + ')\\s*\\)?'),
        (V = '[\\s|\\(]+(' + X + ')[,|\\s]+(' + X + ')[,|\\s]+(' + X + ')[,|\\s]+(' + X + ')\\s*\\)?'),
        {
          CSS_UNIT: new RegExp(X),
          rgb: new RegExp('rgb' + W),
          rgba: new RegExp('rgba' + V),
          hsl: new RegExp('hsl' + W),
          hsla: new RegExp('hsla' + V),
          hsv: new RegExp('hsv' + W),
          hsva: new RegExp('hsva' + V),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        });
    'undefined' != typeof module && module.exports
      ? (module.exports = u)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return u;
        })
      : (window.tinycolor = u);
  })(Math);
var _gsScope = 'undefined' != typeof module && module.exports && 'undefined' != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  'use strict';
  var e, l, t, T, w, x, k, v, i, y, b, S, _, C, p, f, m, g, E, n;
  _gsScope._gsDefine(
    'TweenMax',
    ['core.Animation', 'core.SimpleTimeline', 'TweenLite'],
    function (n, u, g) {
      var v = function (e) {
          var t,
            i = [],
            n = e.length;
          for (t = 0; t !== n; i.push(e[t++]));
          return i;
        },
        y = function (e, t, i) {
          var n,
            r,
            a = e.cycle;
          for (n in a) (r = a[n]), (e[n] = 'function' == typeof r ? r(i, t[i]) : r[i % r.length]);
          delete e.cycle;
        },
        b = function (e, t, i) {
          g.call(this, e, t, i),
            (this._cycle = 0),
            (this._yoyo = !0 === this.vars.yoyo),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._dirty = !0),
            (this.render = b.prototype.render);
        },
        _ = 1e-10,
        w = g._internals,
        x = w.isSelector,
        T = w.isArray,
        e = (b.prototype = g.to({}, 0.1, {})),
        k = [];
      (b.version = '1.19.0'),
        (e.constructor = b),
        (e.kill()._gc = !1),
        (b.killTweensOf = b.killDelayedCallsTo = g.killTweensOf),
        (b.getTweensOf = g.getTweensOf),
        (b.lagSmoothing = g.lagSmoothing),
        (b.ticker = g.ticker),
        (b.render = g.render),
        (e.invalidate = function () {
          return (
            (this._yoyo = !0 === this.vars.yoyo),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._uncache(!0),
            g.prototype.invalidate.call(this)
          );
        }),
        (e.updateTo = function (e, t) {
          var i,
            n = this.ratio,
            r = this.vars.immediateRender || e.immediateRender;
          for (i in (t &&
            this._startTime < this._timeline._time &&
            ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)),
          e))
            this.vars[i] = e[i];
          if (this._initted || r)
            if (t) (this._initted = !1), r && this.render(0, !0, !0);
            else if (
              (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && g._onPluginEvent('_onDisable', this), 0.998 < this._time / this._duration)
            ) {
              var a = this._totalTime;
              this.render(0, !0, !1), (this._initted = !1), this.render(a, !0, !1);
            } else if (((this._initted = !1), this._init(), 0 < this._time || r))
              for (var s, o = 1 / (1 - n), l = this._firstPT; l; ) (s = l.s + l.c), (l.c *= o), (l.s = s - l.c), (l = l._next);
          return this;
        }),
        (e.render = function (e, t, i) {
          this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
          var n,
            r,
            a,
            s,
            o,
            l,
            c,
            u,
            d = this._dirty ? this.totalDuration() : this._totalDuration,
            h = this._time,
            p = this._totalTime,
            f = this._cycle,
            m = this._duration,
            g = this._rawPrevTime;
          if (
            (d - 1e-7 <= e
              ? ((this._totalTime = d),
                (this._cycle = this._repeat),
                this._yoyo && 0 != (1 & this._cycle)
                  ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0))
                  : ((this._time = m), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
                this._reversed || ((n = !0), (r = 'onComplete'), (i = i || this._timeline.autoRemoveChildren)),
                0 === m &&
                  (this._initted || !this.vars.lazy || i) &&
                  (this._startTime === this._timeline._duration && (e = 0),
                  (g < 0 || (e <= 0 && -1e-7 <= e) || (g === _ && 'isPause' !== this.data)) && g !== e && ((i = !0), _ < g && (r = 'onReverseComplete')),
                  (this._rawPrevTime = u = !t || e || g === e ? e : _)))
              : e < 1e-7
              ? ((this._totalTime = this._time = this._cycle = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== p || (0 === m && 0 < g)) && ((r = 'onReverseComplete'), (n = this._reversed)),
                e < 0 && ((this._active = !1), 0 === m && (this._initted || !this.vars.lazy || i) && (0 <= g && (i = !0), (this._rawPrevTime = u = !t || e || g === e ? e : _))),
                this._initted || (i = !0))
              : ((this._totalTime = this._time = e),
                0 !== this._repeat &&
                  ((s = m + this._repeatDelay),
                  (this._cycle = (this._totalTime / s) >> 0),
                  0 !== this._cycle && this._cycle === this._totalTime / s && p <= e && this._cycle--,
                  (this._time = this._totalTime - this._cycle * s),
                  this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time),
                  this._time > m ? (this._time = m) : this._time < 0 && (this._time = 0)),
                this._easeType
                  ? ((o = this._time / m),
                    (1 === (l = this._easeType) || (3 === l && 0.5 <= o)) && (o = 1 - o),
                    3 === l && (o *= 2),
                    1 === (c = this._easePower) ? (o *= o) : 2 === c ? (o *= o * o) : 3 === c ? (o *= o * o * o) : 4 === c && (o *= o * o * o * o),
                    1 === l ? (this.ratio = 1 - o) : 2 === l ? (this.ratio = o) : this._time / m < 0.5 ? (this.ratio = o / 2) : (this.ratio = 1 - o / 2))
                  : (this.ratio = this._ease.getRatio(this._time / m))),
            h !== this._time || i || f !== this._cycle)
          ) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                return (this._time = h), (this._totalTime = p), (this._rawPrevTime = g), (this._cycle = f), w.lazyTweens.push(this), void (this._lazy = [e, t]);
              this._time && !n ? (this.ratio = this._ease.getRatio(this._time / m)) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              !1 !== this._lazy && (this._lazy = !1),
                this._active || (!this._paused && this._time !== h && 0 <= e && (this._active = !0)),
                0 === p &&
                  (2 === this._initted && 0 < e && this._init(),
                  this._startAt && (0 <= e ? this._startAt.render(e, t, i) : r || (r = '_dummyGS')),
                  this.vars.onStart && (0 !== this._totalTime || 0 === m) && (t || this._callback('onStart'))),
                a = this._firstPT;
              a;

            )
              a.f ? a.t[a.p](a.c * this.ratio + a.s) : (a.t[a.p] = a.c * this.ratio + a.s), (a = a._next);
            this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, t, i), t || ((this._totalTime !== p || r) && this._callback('onUpdate'))),
              this._cycle !== f && (t || this._gc || (this.vars.onRepeat && this._callback('onRepeat'))),
              r &&
                (!this._gc || i) &&
                (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                !t && this.vars[r] && this._callback(r),
                0 === m && this._rawPrevTime === _ && u !== _ && (this._rawPrevTime = 0));
          } else p !== this._totalTime && this._onUpdate && (t || this._callback('onUpdate'));
        }),
        (b.to = function (e, t, i) {
          return new b(e, t, i);
        }),
        (b.from = function (e, t, i) {
          return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new b(e, t, i);
        }),
        (b.fromTo = function (e, t, i, n) {
          return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new b(e, t, n);
        }),
        (b.staggerTo = b.allTo = function (e, t, i, n, r, a, s) {
          n = n || 0;
          var o,
            l,
            c,
            u,
            d = 0,
            h = [],
            p = function () {
              i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), r.apply(s || i.callbackScope || this, a || k);
            },
            f = i.cycle,
            m = i.startAt && i.startAt.cycle;
          for (
            T(e) || ('string' == typeof e && (e = g.selector(e) || e), x(e) && (e = v(e))), e = e || [], n < 0 && ((e = v(e)).reverse(), (n *= -1)), o = e.length - 1, c = 0;
            c <= o;
            c++
          ) {
            for (u in ((l = {}), i)) l[u] = i[u];
            if ((f && (y(l, e, c), null != l.duration && ((t = l.duration), delete l.duration)), m)) {
              for (u in ((m = l.startAt = {}), i.startAt)) m[u] = i.startAt[u];
              y(l.startAt, e, c);
            }
            (l.delay = d + (l.delay || 0)), c === o && r && (l.onComplete = p), (h[c] = new b(e[c], t, l)), (d += n);
          }
          return h;
        }),
        (b.staggerFrom = b.allFrom = function (e, t, i, n, r, a, s) {
          return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), b.staggerTo(e, t, i, n, r, a, s);
        }),
        (b.staggerFromTo = b.allFromTo = function (e, t, i, n, r, a, s, o) {
          return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), b.staggerTo(e, t, n, r, a, s, o);
        }),
        (b.delayedCall = function (e, t, i, n, r) {
          return new b(t, 0, {
            delay: e,
            onComplete: t,
            onCompleteParams: i,
            callbackScope: n,
            onReverseComplete: t,
            onReverseCompleteParams: i,
            immediateRender: !1,
            useFrames: r,
            overwrite: 0,
          });
        }),
        (b.set = function (e, t) {
          return new b(e, 0, t);
        }),
        (b.isTweening = function (e) {
          return 0 < g.getTweensOf(e, !0).length;
        });
      var a = function (e, t) {
          for (var i = [], n = 0, r = e._first; r; ) r instanceof g ? (i[n++] = r) : (t && (i[n++] = r), (n = (i = i.concat(a(r, t))).length)), (r = r._next);
          return i;
        },
        d = (b.getAllTweens = function (e) {
          return a(n._rootTimeline, e).concat(a(n._rootFramesTimeline, e));
        });
      (b.killAll = function (e, t, i, n) {
        null == t && (t = !0), null == i && (i = !0);
        var r,
          a,
          s,
          o = d(0 != n),
          l = o.length,
          c = t && i && n;
        for (s = 0; s < l; s++)
          (a = o[s]),
            (c || a instanceof u || ((r = a.target === a.vars.onComplete) && i) || (t && !r)) && (e ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1));
      }),
        (b.killChildTweensOf = function (e, t) {
          if (null != e) {
            var i,
              n,
              r,
              a,
              s,
              o = w.tweenLookup;
            if (('string' == typeof e && (e = g.selector(e) || e), x(e) && (e = v(e)), T(e))) for (a = e.length; -1 < --a; ) b.killChildTweensOf(e[a], t);
            else {
              for (r in ((i = []), o)) for (n = o[r].target.parentNode; n; ) n === e && (i = i.concat(o[r].tweens)), (n = n.parentNode);
              for (s = i.length, a = 0; a < s; a++) t && i[a].totalTime(i[a].totalDuration()), i[a]._enabled(!1, !1);
            }
          }
        });
      var r = function (e, t, i, n) {
        (t = !1 !== t), (i = !1 !== i);
        for (var r, a, s = d((n = !1 !== n)), o = t && i && n, l = s.length; -1 < --l; )
          (a = s[l]), (o || a instanceof u || ((r = a.target === a.vars.onComplete) && i) || (t && !r)) && a.paused(e);
      };
      return (
        (b.pauseAll = function (e, t, i) {
          r(!0, e, t, i);
        }),
        (b.resumeAll = function (e, t, i) {
          r(!1, e, t, i);
        }),
        (b.globalTimeScale = function (e) {
          var t = n._rootTimeline,
            i = g.ticker.time;
          return arguments.length
            ? ((e = e || _),
              (t._startTime = i - ((i - t._startTime) * t._timeScale) / e),
              (t = n._rootFramesTimeline),
              (i = g.ticker.frame),
              (t._startTime = i - ((i - t._startTime) * t._timeScale) / e),
              (t._timeScale = n._rootTimeline._timeScale = e),
              e)
            : t._timeScale;
        }),
        (e.progress = function (e, t) {
          return arguments.length
            ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t)
            : this._time / this.duration();
        }),
        (e.totalProgress = function (e, t) {
          return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration();
        }),
        (e.time = function (e, t) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              e > this._duration && (e = this._duration),
              this._yoyo && 0 != (1 & this._cycle)
                ? (e = this._duration - e + this._cycle * (this._duration + this._repeatDelay))
                : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)),
              this.totalTime(e, t))
            : this._time;
        }),
        (e.duration = function (e) {
          return arguments.length ? n.prototype.duration.call(this, e) : this._duration;
        }),
        (e.totalDuration = function (e) {
          return arguments.length
            ? -1 === this._repeat
              ? this
              : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1))
            : (this._dirty &&
                ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)),
              this._totalDuration);
        }),
        (e.repeat = function (e) {
          return arguments.length ? ((this._repeat = e), this._uncache(!0)) : this._repeat;
        }),
        (e.repeatDelay = function (e) {
          return arguments.length ? ((this._repeatDelay = e), this._uncache(!0)) : this._repeatDelay;
        }),
        (e.yoyo = function (e) {
          return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
        }),
        b
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      'TimelineLite',
      ['core.Animation', 'core.SimpleTimeline', 'TweenLite'],
      function (u, d, h) {
        var p = function (e) {
            d.call(this, e),
              (this._labels = {}),
              (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
              (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
              (this._sortChildren = !0),
              (this._onUpdate = this.vars.onUpdate);
            var t,
              i,
              n = this.vars;
            for (i in n) (t = n[i]), g(t) && -1 !== t.join('').indexOf('{self}') && (n[i] = this._swapSelfInParams(t));
            g(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger);
          },
          m = 1e-10,
          e = h._internals,
          t = (p._internals = {}),
          f = e.isSelector,
          g = e.isArray,
          v = e.lazyTweens,
          y = e.lazyRender,
          s = _gsScope._gsDefine.globals,
          b = function (e) {
            var t,
              i = {};
            for (t in e) i[t] = e[t];
            return i;
          },
          _ = function (e, t, i) {
            var n,
              r,
              a = e.cycle;
            for (n in a) (r = a[n]), (e[n] = 'function' == typeof r ? r.call(t[i], i) : r[i % r.length]);
            delete e.cycle;
          },
          a = (t.pauseCallback = function () {}),
          w = function (e) {
            var t,
              i = [],
              n = e.length;
            for (t = 0; t !== n; i.push(e[t++]));
            return i;
          },
          i = (p.prototype = new d());
        return (
          (p.version = '1.19.0'),
          (i.constructor = p),
          (i.kill()._gc = i._forcingPlayhead = i._hasPause = !1),
          (i.to = function (e, t, i, n) {
            var r = (i.repeat && s.TweenMax) || h;
            return t ? this.add(new r(e, t, i), n) : this.set(e, i, n);
          }),
          (i.from = function (e, t, i, n) {
            return this.add(((i.repeat && s.TweenMax) || h).from(e, t, i), n);
          }),
          (i.fromTo = function (e, t, i, n, r) {
            var a = (n.repeat && s.TweenMax) || h;
            return t ? this.add(a.fromTo(e, t, i, n), r) : this.set(e, n, r);
          }),
          (i.staggerTo = function (e, t, i, n, r, a, s, o) {
            var l,
              c,
              u = new p({ onComplete: a, onCompleteParams: s, callbackScope: o, smoothChildTiming: this.smoothChildTiming }),
              d = i.cycle;
            for ('string' == typeof e && (e = h.selector(e) || e), f((e = e || [])) && (e = w(e)), (n = n || 0) < 0 && ((e = w(e)).reverse(), (n *= -1)), c = 0; c < e.length; c++)
              (l = b(i)).startAt && ((l.startAt = b(l.startAt)), l.startAt.cycle && _(l.startAt, e, c)),
                d && (_(l, e, c), null != l.duration && ((t = l.duration), delete l.duration)),
                u.to(e[c], t, l, c * n);
            return this.add(u, r);
          }),
          (i.staggerFrom = function (e, t, i, n, r, a, s, o) {
            return (i.immediateRender = 0 != i.immediateRender), (i.runBackwards = !0), this.staggerTo(e, t, i, n, r, a, s, o);
          }),
          (i.staggerFromTo = function (e, t, i, n, r, a, s, o, l) {
            return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), this.staggerTo(e, t, n, r, a, s, o, l);
          }),
          (i.call = function (e, t, i, n) {
            return this.add(h.delayedCall(0, e, t, i), n);
          }),
          (i.set = function (e, t, i) {
            return (i = this._parseTimeOrLabel(i, 0, !0)), null == t.immediateRender && (t.immediateRender = i === this._time && !this._paused), this.add(new h(e, 0, t), i);
          }),
          (p.exportRoot = function (e, t) {
            null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
            var i,
              n,
              r = new p(e),
              a = r._timeline;
            for (null == t && (t = !0), a._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = a._time, i = a._first; i; )
              (n = i._next), (t && i instanceof h && i.target === i.vars.onComplete) || r.add(i, i._startTime - i._delay), (i = n);
            return a.add(r, 0), r;
          }),
          (i.add = function (e, t, i, n) {
            var r, a, s, o, l, c;
            if (('number' != typeof t && (t = this._parseTimeOrLabel(t, 0, !0, e)), !(e instanceof u))) {
              if (e instanceof Array || (e && e.push && g(e))) {
                for (i = i || 'normal', n = n || 0, r = t, a = e.length, s = 0; s < a; s++)
                  g((o = e[s])) && (o = new p({ tweens: o })),
                    this.add(o, r),
                    'string' != typeof o &&
                      'function' != typeof o &&
                      ('sequence' === i ? (r = o._startTime + o.totalDuration() / o._timeScale) : 'start' === i && (o._startTime -= o.delay())),
                    (r += n);
                return this._uncache(!0);
              }
              if ('string' == typeof e) return this.addLabel(e, t);
              if ('function' != typeof e) throw 'Cannot add ' + e + ' into the timeline; it is not a tween, timeline, function, or string.';
              e = h.delayedCall(0, e);
            }
            if ((d.prototype.add.call(this, e, t), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()))
              for (c = (l = this).rawTime() > e._startTime; l._timeline; )
                c && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), (l = l._timeline);
            return this;
          }),
          (i.remove = function (e) {
            if (e instanceof u) {
              this._remove(e, !1);
              var t = (e._timeline = e.vars.useFrames ? u._rootFramesTimeline : u._rootTimeline);
              return (e._startTime = (e._paused ? e._pauseTime : t._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale), this;
            }
            if (e instanceof Array || (e && e.push && g(e))) {
              for (var i = e.length; -1 < --i; ) this.remove(e[i]);
              return this;
            }
            return 'string' == typeof e ? this.removeLabel(e) : this.kill(null, e);
          }),
          (i._remove = function (e, t) {
            d.prototype._remove.call(this, e, t);
            var i = this._last;
            return (
              i
                ? this._time > i._startTime + i._totalDuration / i._timeScale && ((this._time = this.duration()), (this._totalTime = this._totalDuration))
                : (this._time = this._totalTime = this._duration = this._totalDuration = 0),
              this
            );
          }),
          (i.append = function (e, t) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e));
          }),
          (i.insert = i.insertMultiple = function (e, t, i, n) {
            return this.add(e, t || 0, i, n);
          }),
          (i.appendMultiple = function (e, t, i, n) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n);
          }),
          (i.addLabel = function (e, t) {
            return (this._labels[e] = this._parseTimeOrLabel(t)), this;
          }),
          (i.addPause = function (e, t, i, n) {
            var r = h.delayedCall(0, a, i, n || this);
            return (r.vars.onComplete = r.vars.onReverseComplete = t), (r.data = 'isPause'), (this._hasPause = !0), this.add(r, e);
          }),
          (i.removeLabel = function (e) {
            return delete this._labels[e], this;
          }),
          (i.getLabelTime = function (e) {
            return null != this._labels[e] ? this._labels[e] : -1;
          }),
          (i._parseTimeOrLabel = function (e, t, i, n) {
            var r;
            if (n instanceof u && n.timeline === this) this.remove(n);
            else if (n && (n instanceof Array || (n.push && g(n)))) for (r = n.length; -1 < --r; ) n[r] instanceof u && n[r].timeline === this && this.remove(n[r]);
            if ('string' == typeof t) return this._parseTimeOrLabel(t, i && 'number' == typeof e && null == this._labels[t] ? e - this.duration() : 0, i);
            if (((t = t || 0), 'string' != typeof e || (!isNaN(e) && null == this._labels[e]))) null == e && (e = this.duration());
            else {
              if (-1 === (r = e.indexOf('='))) return null == this._labels[e] ? (i ? (this._labels[e] = this.duration() + t) : t) : this._labels[e] + t;
              (t = parseInt(e.charAt(r - 1) + '1', 10) * Number(e.substr(r + 1))), (e = 1 < r ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, i) : this.duration());
            }
            return Number(e) + t;
          }),
          (i.seek = function (e, t) {
            return this.totalTime('number' == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t);
          }),
          (i.stop = function () {
            return this.paused(!0);
          }),
          (i.gotoAndPlay = function (e, t) {
            return this.play(e, t);
          }),
          (i.gotoAndStop = function (e, t) {
            return this.pause(e, t);
          }),
          (i.render = function (e, t, i) {
            this._gc && this._enabled(!0, !1);
            var n,
              r,
              a,
              s,
              o,
              l,
              c,
              u = this._dirty ? this.totalDuration() : this._totalDuration,
              d = this._time,
              h = this._startTime,
              p = this._timeScale,
              f = this._paused;
            if (u - 1e-7 <= e)
              (this._totalTime = this._time = u),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((r = !0),
                  (s = 'onComplete'),
                  (o = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((e <= 0 && -1e-7 <= e) || this._rawPrevTime < 0 || this._rawPrevTime === m) &&
                    this._rawPrevTime !== e &&
                    this._first &&
                    ((o = !0), this._rawPrevTime > m && (s = 'onReverseComplete'))),
                (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : m),
                (e = u + 1e-4);
            else if (e < 1e-7)
              if (
                ((this._totalTime = this._time = 0),
                (0 !== d || (0 === this._duration && this._rawPrevTime !== m && (0 < this._rawPrevTime || (e < 0 && 0 <= this._rawPrevTime)))) &&
                  ((s = 'onReverseComplete'), (r = this._reversed)),
                e < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed ? ((o = r = !0), (s = 'onReverseComplete')) : 0 <= this._rawPrevTime && this._first && (o = !0),
                  (this._rawPrevTime = e);
              else {
                if (((this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : m), 0 === e && r))
                  for (n = this._first; n && 0 === n._startTime; ) n._duration || (r = !1), (n = n._next);
                (e = 0), this._initted || (o = !0);
              }
            else {
              if (this._hasPause && !this._forcingPlayhead && !t) {
                if (d <= e)
                  for (n = this._first; n && n._startTime <= e && !l; )
                    n._duration || 'isPause' !== n.data || n.ratio || (0 === n._startTime && 0 === this._rawPrevTime) || (l = n), (n = n._next);
                else for (n = this._last; n && n._startTime >= e && !l; ) n._duration || ('isPause' === n.data && 0 < n._rawPrevTime && (l = n)), (n = n._prev);
                l && ((this._time = e = l._startTime), (this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay)));
              }
              this._totalTime = this._time = this._rawPrevTime = e;
            }
            if ((this._time !== d && this._first) || i || o || l) {
              if (
                (this._initted || (this._initted = !0),
                this._active || (!this._paused && this._time !== d && 0 < e && (this._active = !0)),
                0 === d && this.vars.onStart && ((0 === this._time && this._duration) || t || this._callback('onStart')),
                d <= (c = this._time))
              )
                for (n = this._first; n && ((a = n._next), c === this._time && (!this._paused || f)); )
                  (n._active || (n._startTime <= c && !n._paused && !n._gc)) &&
                    (l === n && this.pause(),
                    n._reversed
                      ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i)
                      : n.render((e - n._startTime) * n._timeScale, t, i)),
                    (n = a);
              else
                for (n = this._last; n && ((a = n._prev), c === this._time && (!this._paused || f)); ) {
                  if (n._active || (n._startTime <= d && !n._paused && !n._gc)) {
                    if (l === n) {
                      for (l = n._prev; l && l.endTime() > this._time; )
                        l.render(l._reversed ? l.totalDuration() - (e - l._startTime) * l._timeScale : (e - l._startTime) * l._timeScale, t, i), (l = l._prev);
                      (l = null), this.pause();
                    }
                    n._reversed
                      ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i)
                      : n.render((e - n._startTime) * n._timeScale, t, i);
                  }
                  n = a;
                }
              this._onUpdate && (t || (v.length && y(), this._callback('onUpdate'))),
                s &&
                  (this._gc ||
                    ((h === this._startTime || p !== this._timeScale) &&
                      (0 === this._time || u >= this.totalDuration()) &&
                      (r && (v.length && y(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !t && this.vars[s] && this._callback(s))));
            }
          }),
          (i._hasPausedChild = function () {
            for (var e = this._first; e; ) {
              if (e._paused || (e instanceof p && e._hasPausedChild())) return !0;
              e = e._next;
            }
            return !1;
          }),
          (i.getChildren = function (e, t, i, n) {
            n = n || -9999999999;
            for (var r = [], a = this._first, s = 0; a; )
              a._startTime < n || (a instanceof h ? !1 !== t && (r[s++] = a) : (!1 !== i && (r[s++] = a), !1 !== e && (s = (r = r.concat(a.getChildren(!0, t, i))).length))),
                (a = a._next);
            return r;
          }),
          (i.getTweensOf = function (e, t) {
            var i,
              n,
              r = this._gc,
              a = [],
              s = 0;
            for (r && this._enabled(!0, !0), n = (i = h.getTweensOf(e)).length; -1 < --n; ) (i[n].timeline === this || (t && this._contains(i[n]))) && (a[s++] = i[n]);
            return r && this._enabled(!1, !0), a;
          }),
          (i.recent = function () {
            return this._recent;
          }),
          (i._contains = function (e) {
            for (var t = e.timeline; t; ) {
              if (t === this) return !0;
              t = t.timeline;
            }
            return !1;
          }),
          (i.shiftChildren = function (e, t, i) {
            i = i || 0;
            for (var n, r = this._first, a = this._labels; r; ) r._startTime >= i && (r._startTime += e), (r = r._next);
            if (t) for (n in a) a[n] >= i && (a[n] += e);
            return this._uncache(!0);
          }),
          (i._kill = function (e, t) {
            if (!e && !t) return this._enabled(!1, !1);
            for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, r = !1; -1 < --n; ) i[n]._kill(e, t) && (r = !0);
            return r;
          }),
          (i.clear = function (e) {
            var t = this.getChildren(!1, !0, !0),
              i = t.length;
            for (this._time = this._totalTime = 0; -1 < --i; ) t[i]._enabled(!1, !1);
            return !1 !== e && (this._labels = {}), this._uncache(!0);
          }),
          (i.invalidate = function () {
            for (var e = this._first; e; ) e.invalidate(), (e = e._next);
            return u.prototype.invalidate.call(this);
          }),
          (i._enabled = function (e, t) {
            if (e === this._gc) for (var i = this._first; i; ) i._enabled(e, !0), (i = i._next);
            return d.prototype._enabled.call(this, e, t);
          }),
          (i.totalTime = function () {
            this._forcingPlayhead = !0;
            var e = u.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), e;
          }),
          (i.duration = function (e) {
            return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration);
          }),
          (i.totalDuration = function (e) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var t, i, n = 0, r = this._last, a = 999999999999; r; )
                  (t = r._prev),
                    r._dirty && r.totalDuration(),
                    r._startTime > a && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : (a = r._startTime),
                    r._startTime < 0 &&
                      !r._paused &&
                      ((n -= r._startTime),
                      this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale),
                      this.shiftChildren(-r._startTime, !1, -9999999999),
                      (a = 0)),
                    n < (i = r._startTime + r._totalDuration / r._timeScale) && (n = i),
                    (r = t);
                (this._duration = this._totalDuration = n), (this._dirty = !1);
              }
              return this._totalDuration;
            }
            return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this;
          }),
          (i.paused = function (e) {
            if (!e) for (var t = this._first, i = this._time; t; ) t._startTime === i && 'isPause' === t.data && (t._rawPrevTime = 0), (t = t._next);
            return u.prototype.paused.apply(this, arguments);
          }),
          (i.usesFrames = function () {
            for (var e = this._timeline; e._timeline; ) e = e._timeline;
            return e === u._rootFramesTimeline;
          }),
          (i.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
          }),
          p
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      'TimelineMax',
      ['TimelineLite', 'TweenLite', 'easing.Ease'],
      function (t, o, e) {
        var i = function (e) {
            t.call(this, e),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo),
              (this._dirty = !0);
          },
          C = 1e-10,
          n = o._internals,
          E = n.lazyTweens,
          D = n.lazyRender,
          l = _gsScope._gsDefine.globals,
          c = new e(null, null, 1, 0),
          r = (i.prototype = new t());
        return (
          (r.constructor = i),
          (r.kill()._gc = !1),
          (i.version = '1.19.0'),
          (r.invalidate = function () {
            return (
              (this._yoyo = !0 === this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              t.prototype.invalidate.call(this)
            );
          }),
          (r.addCallback = function (e, t, i, n) {
            return this.add(o.delayedCall(0, e, i, n), t);
          }),
          (r.removeCallback = function (e, t) {
            if (e)
              if (null == t) this._kill(null, e);
              else for (var i = this.getTweensOf(e, !1), n = i.length, r = this._parseTimeOrLabel(t); -1 < --n; ) i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this;
          }),
          (r.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e);
          }),
          (r.tweenTo = function (e, t) {
            t = t || {};
            var i,
              n,
              r,
              a = { ease: c, useFrames: this.usesFrames(), immediateRender: !1 },
              s = (t.repeat && l.TweenMax) || o;
            for (n in t) a[n] = t[n];
            return (
              (a.time = this._parseTimeOrLabel(e)),
              (i = Math.abs(Number(a.time) - this._time) / this._timeScale || 0.001),
              (r = new s(this, i, a)),
              (a.onStart = function () {
                r.target.paused(!0),
                  r.vars.time !== r.target.time() && i === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale),
                  t.onStart && r._callback('onStart');
              }),
              r
            );
          }),
          (r.tweenFromTo = function (e, t, i) {
            (i = i || {}),
              (e = this._parseTimeOrLabel(e)),
              (i.startAt = { onComplete: this.seek, onCompleteParams: [e], callbackScope: this }),
              (i.immediateRender = !1 !== i.immediateRender);
            var n = this.tweenTo(t, i);
            return n.duration(Math.abs(n.vars.time - e) / this._timeScale || 0.001);
          }),
          (r.render = function (e, t, i) {
            this._gc && this._enabled(!0, !1);
            var n,
              r,
              a,
              s,
              o,
              l,
              c,
              u,
              d = this._dirty ? this.totalDuration() : this._totalDuration,
              h = this._duration,
              p = this._time,
              f = this._totalTime,
              m = this._startTime,
              g = this._timeScale,
              v = this._rawPrevTime,
              y = this._paused,
              b = this._cycle;
            if (d - 1e-7 <= e)
              this._locked || ((this._totalTime = d), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((r = !0),
                  (s = 'onComplete'),
                  (o = !!this._timeline.autoRemoveChildren),
                  0 === this._duration && ((e <= 0 && -1e-7 <= e) || v < 0 || v === C) && v !== e && this._first && ((o = !0), C < v && (s = 'onReverseComplete'))),
                (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : C),
                this._yoyo && 0 != (1 & this._cycle) ? (this._time = e = 0) : (e = (this._time = h) + 1e-4);
            else if (e < 1e-7)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                ((this._time = 0) !== p || (0 === h && v !== C && (0 < v || (e < 0 && 0 <= v)) && !this._locked)) && ((s = 'onReverseComplete'), (r = this._reversed)),
                e < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed ? ((o = r = !0), (s = 'onReverseComplete')) : 0 <= v && this._first && (o = !0),
                  (this._rawPrevTime = e);
              else {
                if (((this._rawPrevTime = h || !t || e || this._rawPrevTime === e ? e : C), 0 === e && r))
                  for (n = this._first; n && 0 === n._startTime; ) n._duration || (r = !1), (n = n._next);
                (e = 0), this._initted || (o = !0);
              }
            else if (
              (0 === h && v < 0 && (o = !0),
              (this._time = this._rawPrevTime = e),
              this._locked ||
                ((this._totalTime = e),
                0 !== this._repeat &&
                  ((l = h + this._repeatDelay),
                  (this._cycle = (this._totalTime / l) >> 0),
                  0 !== this._cycle && this._cycle === this._totalTime / l && f <= e && this._cycle--,
                  (this._time = this._totalTime - this._cycle * l),
                  this._yoyo && 0 != (1 & this._cycle) && (this._time = h - this._time),
                  this._time > h ? (e = (this._time = h) + 1e-4) : this._time < 0 ? (this._time = e = 0) : (e = this._time))),
              this._hasPause && !this._forcingPlayhead && !t)
            ) {
              if (p <= (e = this._time))
                for (n = this._first; n && n._startTime <= e && !c; )
                  n._duration || 'isPause' !== n.data || n.ratio || (0 === n._startTime && 0 === this._rawPrevTime) || (c = n), (n = n._next);
              else for (n = this._last; n && n._startTime >= e && !c; ) n._duration || ('isPause' === n.data && 0 < n._rawPrevTime && (c = n)), (n = n._prev);
              c && ((this._time = e = c._startTime), (this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay)));
            }
            if (this._cycle !== b && !this._locked) {
              var _ = this._yoyo && 0 != (1 & b),
                w = _ === (this._yoyo && 0 != (1 & this._cycle)),
                x = this._totalTime,
                T = this._cycle,
                k = this._rawPrevTime,
                S = this._time;
              if (
                ((this._totalTime = b * h),
                this._cycle < b ? (_ = !_) : (this._totalTime += h),
                (this._time = p),
                (this._rawPrevTime = 0 === h ? v - 1e-4 : v),
                (this._cycle = b),
                (this._locked = !0),
                (p = _ ? 0 : h),
                this.render(p, t, 0 === h),
                t || this._gc || (this.vars.onRepeat && this._callback('onRepeat')),
                p !== this._time)
              )
                return;
              if ((w && ((p = _ ? h + 1e-4 : -1e-4), this.render(p, !0, !1)), (this._locked = !1), this._paused && !y)) return;
              (this._time = S), (this._totalTime = x), (this._cycle = T), (this._rawPrevTime = k);
            }
            if ((this._time !== p && this._first) || i || o || c) {
              if (
                (this._initted || (this._initted = !0),
                this._active || (!this._paused && this._totalTime !== f && 0 < e && (this._active = !0)),
                0 === f && this.vars.onStart && ((0 === this._totalTime && this._totalDuration) || t || this._callback('onStart')),
                p <= (u = this._time))
              )
                for (n = this._first; n && ((a = n._next), u === this._time && (!this._paused || y)); )
                  (n._active || (n._startTime <= this._time && !n._paused && !n._gc)) &&
                    (c === n && this.pause(),
                    n._reversed
                      ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i)
                      : n.render((e - n._startTime) * n._timeScale, t, i)),
                    (n = a);
              else
                for (n = this._last; n && ((a = n._prev), u === this._time && (!this._paused || y)); ) {
                  if (n._active || (n._startTime <= p && !n._paused && !n._gc)) {
                    if (c === n) {
                      for (c = n._prev; c && c.endTime() > this._time; )
                        c.render(c._reversed ? c.totalDuration() - (e - c._startTime) * c._timeScale : (e - c._startTime) * c._timeScale, t, i), (c = c._prev);
                      (c = null), this.pause();
                    }
                    n._reversed
                      ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i)
                      : n.render((e - n._startTime) * n._timeScale, t, i);
                  }
                  n = a;
                }
              this._onUpdate && (t || (E.length && D(), this._callback('onUpdate'))),
                s &&
                  (this._locked ||
                    this._gc ||
                    ((m === this._startTime || g !== this._timeScale) &&
                      (0 === this._time || d >= this.totalDuration()) &&
                      (r && (E.length && D(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !t && this.vars[s] && this._callback(s))));
            } else f !== this._totalTime && this._onUpdate && (t || this._callback('onUpdate'));
          }),
          (r.getActive = function (e, t, i) {
            null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
            var n,
              r,
              a = [],
              s = this.getChildren(e, t, i),
              o = 0,
              l = s.length;
            for (n = 0; n < l; n++) (r = s[n]).isActive() && (a[o++] = r);
            return a;
          }),
          (r.getLabelAfter = function (e) {
            e || (0 !== e && (e = this._time));
            var t,
              i = this.getLabelsArray(),
              n = i.length;
            for (t = 0; t < n; t++) if (i[t].time > e) return i[t].name;
            return null;
          }),
          (r.getLabelBefore = function (e) {
            null == e && (e = this._time);
            for (var t = this.getLabelsArray(), i = t.length; -1 < --i; ) if (t[i].time < e) return t[i].name;
            return null;
          }),
          (r.getLabelsArray = function () {
            var e,
              t = [],
              i = 0;
            for (e in this._labels) t[i++] = { time: this._labels[e], name: e };
            return (
              t.sort(function (e, t) {
                return e.time - t.time;
              }),
              t
            );
          }),
          (r.progress = function (e, t) {
            return arguments.length
              ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t)
              : this._time / this.duration();
          }),
          (r.totalProgress = function (e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration();
          }),
          (r.totalDuration = function (e) {
            return arguments.length
              ? -1 !== this._repeat && e
                ? this.timeScale(this.totalDuration() / e)
                : this
              : (this._dirty &&
                  (t.prototype.totalDuration.call(this),
                  (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (r.time = function (e, t) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                e > this._duration && (e = this._duration),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (e = this._duration - e + this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(e, t))
              : this._time;
          }),
          (r.repeat = function (e) {
            return arguments.length ? ((this._repeat = e), this._uncache(!0)) : this._repeat;
          }),
          (r.repeatDelay = function (e) {
            return arguments.length ? ((this._repeatDelay = e), this._uncache(!0)) : this._repeatDelay;
          }),
          (r.yoyo = function (e) {
            return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
          }),
          (r.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8);
          }),
          i
        );
      },
      !0
    ),
    (T = 180 / Math.PI),
    (w = []),
    (x = []),
    (k = []),
    (v = {}),
    (i = _gsScope._gsDefine.globals),
    (y = function (e, t, i, n) {
      i === n && (i = n - (n - t) / 1e6),
        e === t && (t = e + (i - e) / 1e6),
        (this.a = e),
        (this.b = t),
        (this.c = i),
        (this.d = n),
        (this.da = n - e),
        (this.ca = i - e),
        (this.ba = t - e);
    }),
    (b = ',x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,'),
    (S = function (e, t, i, n) {
      var r = { a: e },
        a = {},
        s = {},
        o = { c: n },
        l = (e + t) / 2,
        c = (t + i) / 2,
        u = (i + n) / 2,
        d = (l + c) / 2,
        h = (c + u) / 2,
        p = (h - d) / 8;
      return (
        (r.b = l + (e - l) / 4),
        (a.b = d + p),
        (r.c = a.a = (r.b + a.b) / 2),
        (a.c = s.a = (d + h) / 2),
        (s.b = h - p),
        (o.b = u + (n - u) / 4),
        (s.c = o.a = (s.b + o.b) / 2),
        [r, a, s, o]
      );
    }),
    (_ = function (e, t, i, n, r) {
      var a,
        s,
        o,
        l,
        c,
        u,
        d,
        h,
        p,
        f,
        m,
        g,
        v,
        y = e.length - 1,
        b = 0,
        _ = e[0].a;
      for (a = 0; a < y; a++)
        (s = (c = e[b]).a),
          (o = c.d),
          (l = e[b + 1].d),
          r
            ? ((m = w[a]),
              (v = (((g = x[a]) + m) * t * 0.25) / (n ? 0.5 : k[a] || 0.5)),
              (h =
                o -
                ((u = o - (o - s) * (n ? 0.5 * t : 0 !== m ? v / m : 0)) + ((((d = o + (l - o) * (n ? 0.5 * t : 0 !== g ? v / g : 0)) - u) * ((3 * m) / (m + g) + 0.5)) / 4 || 0))))
            : (h = o - ((u = o - (o - s) * t * 0.5) + (d = o + (l - o) * t * 0.5)) / 2),
          (u += h),
          (d += h),
          (c.c = p = u),
          (c.b = 0 !== a ? _ : (_ = c.a + 0.6 * (c.c - c.a))),
          (c.da = o - s),
          (c.ca = p - s),
          (c.ba = _ - s),
          i ? ((f = S(s, _, p, o)), e.splice(b, 1, f[0], f[1], f[2], f[3]), (b += 4)) : b++,
          (_ = d);
      ((c = e[b]).b = _),
        (c.c = _ + 0.4 * (c.d - _)),
        (c.da = c.d - c.a),
        (c.ca = c.c - c.a),
        (c.ba = _ - c.a),
        i && ((f = S(c.a, _, c.c, c.d)), e.splice(b, 1, f[0], f[1], f[2], f[3]));
    }),
    (C = function (e, t, i, n) {
      var r,
        a,
        s,
        o,
        l,
        c,
        u = [];
      if (n) for (a = (e = [n].concat(e)).length; -1 < --a; ) 'string' == typeof (c = e[a][t]) && '=' === c.charAt(1) && (e[a][t] = n[t] + Number(c.charAt(0) + c.substr(2)));
      if ((r = e.length - 2) < 0) return (u[0] = new y(e[0][t], 0, 0, e[r < -1 ? 0 : 1][t])), u;
      for (a = 0; a < r; a++)
        (s = e[a][t]), (o = e[a + 1][t]), (u[a] = new y(s, 0, 0, o)), i && ((l = e[a + 2][t]), (w[a] = (w[a] || 0) + (o - s) * (o - s)), (x[a] = (x[a] || 0) + (l - o) * (l - o)));
      return (u[a] = new y(e[a][t], 0, 0, e[a + 1][t])), u;
    }),
    (p = function (e, t, i, n, r, a) {
      var s,
        o,
        l,
        c,
        u,
        d,
        h,
        p,
        f = {},
        m = [],
        g = a || e[0];
      for (o in ((r = 'string' == typeof r ? ',' + r + ',' : b), null == t && (t = 1), e[0])) m.push(o);
      if (1 < e.length) {
        for (p = e[e.length - 1], h = !0, s = m.length; -1 < --s; )
          if (((o = m[s]), 0.05 < Math.abs(g[o] - p[o]))) {
            h = !1;
            break;
          }
        h && ((e = e.concat()), a && e.unshift(a), e.push(e[1]), (a = e[e.length - 3]));
      }
      for (w.length = x.length = k.length = 0, s = m.length; -1 < --s; ) (o = m[s]), (v[o] = -1 !== r.indexOf(',' + o + ',')), (f[o] = C(e, o, v[o], a));
      for (s = w.length; -1 < --s; ) (w[s] = Math.sqrt(w[s])), (x[s] = Math.sqrt(x[s]));
      if (!n) {
        for (s = m.length; -1 < --s; ) if (v[o]) for (d = (l = f[m[s]]).length - 1, c = 0; c < d; c++) (u = l[c + 1].da / x[c] + l[c].da / w[c] || 0), (k[c] = (k[c] || 0) + u * u);
        for (s = k.length; -1 < --s; ) k[s] = Math.sqrt(k[s]);
      }
      for (s = m.length, c = i ? 4 : 1; -1 < --s; ) (l = f[(o = m[s])]), _(l, t, i, n, v[o]), h && (l.splice(0, c), l.splice(l.length - c, c));
      return f;
    }),
    (f = function (e, t, i) {
      var n,
        r,
        a,
        s,
        o,
        l,
        c,
        u,
        d,
        h,
        p,
        f = {},
        m = 'cubic' === (t = t || 'soft') ? 3 : 2,
        g = 'soft' === t,
        v = [];
      if ((g && i && (e = [i].concat(e)), null == e || e.length < m + 1)) throw 'invalid Bezier data';
      for (d in e[0]) v.push(d);
      for (l = v.length; -1 < --l; ) {
        for (f[(d = v[l])] = o = [], h = 0, u = e.length, c = 0; c < u; c++)
          (n = null == i ? e[c][d] : 'string' == typeof (p = e[c][d]) && '=' === p.charAt(1) ? i[d] + Number(p.charAt(0) + p.substr(2)) : Number(p)),
            g && 1 < c && c < u - 1 && (o[h++] = (n + o[h - 2]) / 2),
            (o[h++] = n);
        for (u = h - m + 1, c = h = 0; c < u; c += m)
          (n = o[c]), (r = o[c + 1]), (a = o[c + 2]), (s = 2 === m ? 0 : o[c + 3]), (o[h++] = p = 3 === m ? new y(n, r, a, s) : new y(n, (2 * r + n) / 3, (2 * r + a) / 3, a));
        o.length = h;
      }
      return f;
    }),
    (m = function (e, t, i) {
      for (var n, r, a, s, o, l, c, u, d, h, p, f = 1 / i, m = e.length; -1 < --m; )
        for (a = (h = e[m]).a, s = h.d - a, o = h.c - a, l = h.b - a, n = r = 0, u = 1; u <= i; u++)
          (n = r - (r = ((c = f * u) * c * s + 3 * (d = 1 - c) * (c * o + d * l)) * c)), (t[(p = m * i + u - 1)] = (t[p] || 0) + n * n);
    }),
    (g = function (e, t) {
      var i,
        n,
        r,
        a,
        s = [],
        o = [],
        l = 0,
        c = 0,
        u = (t = t >> 0 || 6) - 1,
        d = [],
        h = [];
      for (i in e) m(e[i], s, t);
      for (r = s.length, n = 0; n < r; n++) (l += Math.sqrt(s[n])), (h[(a = n % t)] = l), a === u && ((c += l), (d[(a = (n / t) >> 0)] = h), (o[a] = c), (l = 0), (h = []));
      return { length: c, lengths: o, segments: d };
    }),
    (E = _gsScope._gsDefine.plugin({
      propName: 'bezier',
      priority: -1,
      version: '1.3.7',
      API: 2,
      global: !0,
      init: function (e, t, i) {
        (this._target = e),
          t instanceof Array && (t = { values: t }),
          (this._func = {}),
          (this._mod = {}),
          (this._props = []),
          (this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10));
        var n,
          r,
          a,
          s,
          o,
          l = t.values || [],
          c = {},
          u = l[0],
          d = t.autoRotate || i.vars.orientToBezier;
        for (n in ((this._autoRotate = d ? (d instanceof Array ? d : [['x', 'y', 'rotation', !0 === d ? 0 : Number(d) || 0]]) : null), u)) this._props.push(n);
        for (a = this._props.length; -1 < --a; )
          (n = this._props[a]),
            this._overwriteProps.push(n),
            (r = this._func[n] = 'function' == typeof e[n]),
            (c[n] = r ? e[n.indexOf('set') || 'function' != typeof e['get' + n.substr(3)] ? n : 'get' + n.substr(3)]() : parseFloat(e[n])),
            o || (c[n] !== l[0][n] && (o = c));
        if (
          ((this._beziers =
            'cubic' !== t.type && 'quadratic' !== t.type && 'soft' !== t.type
              ? p(l, isNaN(t.curviness) ? 1 : t.curviness, !1, 'thruBasic' === t.type, t.correlate, o)
              : f(l, t.type, c)),
          (this._segCount = this._beziers[n].length),
          this._timeRes)
        ) {
          var h = g(this._beziers, this._timeRes);
          (this._length = h.length),
            (this._lengths = h.lengths),
            (this._segments = h.segments),
            (this._l1 = this._li = this._s1 = this._si = 0),
            (this._l2 = this._lengths[0]),
            (this._curSeg = this._segments[0]),
            (this._s2 = this._curSeg[0]),
            (this._prec = 1 / this._curSeg.length);
        }
        if ((d = this._autoRotate))
          for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), a = d.length; -1 < --a; ) {
            for (s = 0; s < 3; s++)
              (n = d[a][s]), (this._func[n] = 'function' == typeof e[n] && e[n.indexOf('set') || 'function' != typeof e['get' + n.substr(3)] ? n : 'get' + n.substr(3)]);
            (n = d[a][2]), (this._initialRotations[a] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0), this._overwriteProps.push(n);
          }
        return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
      },
      set: function (e) {
        var t,
          i,
          n,
          r,
          a,
          s,
          o,
          l,
          c,
          u,
          d = this._segCount,
          h = this._func,
          p = this._target,
          f = e !== this._startRatio;
        if (this._timeRes) {
          if (((c = this._lengths), (u = this._curSeg), (e *= this._length), (n = this._li), e > this._l2 && n < d - 1)) {
            for (l = d - 1; n < l && (this._l2 = c[++n]) <= e; );
            (this._l1 = c[n - 1]), (this._li = n), (this._curSeg = u = this._segments[n]), (this._s2 = u[(this._s1 = this._si = 0)]);
          } else if (e < this._l1 && 0 < n) {
            for (; 0 < n && (this._l1 = c[--n]) >= e; );
            0 === n && e < this._l1 ? (this._l1 = 0) : n++,
              (this._l2 = c[n]),
              (this._li = n),
              (this._curSeg = u = this._segments[n]),
              (this._s1 = u[(this._si = u.length - 1) - 1] || 0),
              (this._s2 = u[this._si]);
          }
          if (((t = n), (e -= this._l1), (n = this._si), e > this._s2 && n < u.length - 1)) {
            for (l = u.length - 1; n < l && (this._s2 = u[++n]) <= e; );
            (this._s1 = u[n - 1]), (this._si = n);
          } else if (e < this._s1 && 0 < n) {
            for (; 0 < n && (this._s1 = u[--n]) >= e; );
            0 === n && e < this._s1 ? (this._s1 = 0) : n++, (this._s2 = u[n]), (this._si = n);
          }
          s = (n + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
        } else s = (e - (t = e < 0 ? 0 : 1 <= e ? d - 1 : (d * e) >> 0) * (1 / d)) * d;
        for (i = 1 - s, n = this._props.length; -1 < --n; )
          (r = this._props[n]),
            (o = (s * s * (a = this._beziers[r][t]).da + 3 * i * (s * a.ca + i * a.ba)) * s + a.a),
            this._mod[r] && (o = this._mod[r](o, p)),
            h[r] ? p[r](o) : (p[r] = o);
        if (this._autoRotate) {
          var m,
            g,
            v,
            y,
            b,
            _,
            w,
            x = this._autoRotate;
          for (n = x.length; -1 < --n; )
            (r = x[n][2]),
              (_ = x[n][3] || 0),
              (w = !0 === x[n][4] ? 1 : T),
              (a = this._beziers[x[n][0]]),
              (m = this._beziers[x[n][1]]),
              a &&
                m &&
                ((a = a[t]),
                (m = m[t]),
                (g = a.a + (a.b - a.a) * s),
                (g += ((y = a.b + (a.c - a.b) * s) - g) * s),
                (y += (a.c + (a.d - a.c) * s - y) * s),
                (v = m.a + (m.b - m.a) * s),
                (v += ((b = m.b + (m.c - m.b) * s) - v) * s),
                (b += (m.c + (m.d - m.c) * s - b) * s),
                (o = f ? Math.atan2(b - v, y - g) * w + _ : this._initialRotations[n]),
                this._mod[r] && (o = this._mod[r](o, p)),
                h[r] ? p[r](o) : (p[r] = o));
        }
      },
    })),
    (n = E.prototype),
    (E.bezierThrough = p),
    (E.cubicToQuadratic = S),
    (E._autoCSS = !0),
    (E.quadraticToCubic = function (e, t, i) {
      return new y(e, (2 * t + e) / 3, (2 * t + i) / 3, i);
    }),
    (E._cssRegister = function () {
      var e = i.CSSPlugin;
      if (e) {
        var t = e._internals,
          p = t._parseToProxy,
          f = t._setPluginRatio,
          m = t.CSSPropTween;
        t._registerComplexSpecialProp('bezier', {
          parser: function (e, t, i, n, r, a) {
            t instanceof Array && (t = { values: t }), (a = new E());
            var s,
              o,
              l,
              c = t.values,
              u = c.length - 1,
              d = [],
              h = {};
            if (u < 0) return r;
            for (s = 0; s <= u; s++) (l = p(e, c[s], n, r, a, u !== s)), (d[s] = l.end);
            for (o in t) h[o] = t[o];
            return (
              (h.values = d),
              ((r = new m(e, 'bezier', 0, 0, l.pt, 2)).data = l),
              (r.plugin = a),
              (r.setRatio = f),
              0 === h.autoRotate && (h.autoRotate = !0),
              !h.autoRotate ||
                h.autoRotate instanceof Array ||
                ((s = !0 === h.autoRotate ? 0 : Number(h.autoRotate)),
                (h.autoRotate = null != l.end.left ? [['left', 'top', 'rotation', s, !1]] : null != l.end.x && [['x', 'y', 'rotation', s, !1]])),
              h.autoRotate &&
                (n._transform || n._enableTransforms(!1),
                (l.autoRotate = n._target._gsTransform),
                (l.proxy.rotation = l.autoRotate.rotation || 0),
                n._overwriteProps.push('rotation')),
              a._onInitTween(l.proxy, h, n._tween),
              r
            );
          },
        });
      }
    }),
    (n._mod = function (e) {
      for (var t, i = this._overwriteProps, n = i.length; -1 < --n; ) (t = e[i[n]]) && 'function' == typeof t && (this._mod[i[n]] = t);
    }),
    (n._kill = function (e) {
      var t,
        i,
        n = this._props;
      for (t in this._beziers) if (t in e) for (delete this._beziers[t], delete this._func[t], i = n.length; -1 < --i; ) n[i] === t && n.splice(i, 1);
      if ((n = this._autoRotate)) for (i = n.length; -1 < --i; ) e[n[i][2]] && n.splice(i, 1);
      return this._super._kill.call(this, e);
    }),
    _gsScope._gsDefine(
      'plugins.CSSPlugin',
      ['plugins.TweenPlugin', 'TweenLite'],
      function (a, B) {
        var f,
          T,
          C,
          m,
          q = function () {
            a.call(this, 'css'), (this._overwriteProps.length = 0), (this.setRatio = q.prototype.setRatio);
          },
          c = _gsScope._gsDefine.globals,
          g = {},
          e = (q.prototype = new a('css'));
        ((e.constructor = q).version = '1.19.0'),
          (q.API = 2),
          (q.defaultTransformPerspective = 0),
          (q.defaultSkewType = 'compensated'),
          (q.defaultSmoothOrigin = !0),
          (e = 'px'),
          (q.suffixMap = { top: e, right: e, bottom: e, left: e, width: e, height: e, fontSize: e, padding: e, margin: e, perspective: e, lineHeight: '' });
        var E,
          v,
          y,
          F,
          b,
          S,
          D,
          M,
          t,
          i,
          P = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          A = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          u = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          L = /(?:\d|\-|\+|=|#|\.)*/g,
          O = /opacity *= *([^)]*)/i,
          w = /opacity:([^;]*)/i,
          s = /alpha\(opacity *=.+?\)/i,
          x = /^(rgb|hsl)/,
          o = /([A-Z])/g,
          l = /-([a-z])/gi,
          k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          d = function (e, t) {
            return t.toUpperCase();
          },
          p = /(?:Left|Right|Width)/i,
          h = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          I = /,(?=[^\)]*(?:\(|$))/gi,
          N = /[\s,\(]/i,
          H = Math.PI / 180,
          Y = 180 / Math.PI,
          z = {},
          j = document,
          n = function (e) {
            return j.createElementNS ? j.createElementNS('http://www.w3.org/1999/xhtml', e) : j.createElement(e);
          },
          $ = n('div'),
          X = n('img'),
          r = (q._internals = { _specialProps: g }),
          W = navigator.userAgent,
          V =
            ((t = W.indexOf('Android')),
            (i = n('a')),
            (y = -1 !== W.indexOf('Safari') && -1 === W.indexOf('Chrome') && (-1 === t || 3 < Number(W.substr(t + 8, 1)))),
            (b = y && Number(W.substr(W.indexOf('Version/') + 8, 1)) < 6),
            (F = -1 !== W.indexOf('Firefox')),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (S = parseFloat(RegExp.$1)),
            !!i && ((i.style.cssText = 'top:1px;opacity:.55;'), /^0.55/.test(i.style.opacity))),
          G = function (e) {
            return O.test('string' == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || '') ? parseFloat(RegExp.$1) / 100 : 1;
          },
          U = function (e) {
            window.console && console.log(e);
          },
          K = '',
          Q = '',
          J = function (e, t) {
            var i,
              n,
              r = (t = t || $).style;
            if (void 0 !== r[e]) return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ['O', 'Moz', 'ms', 'Ms', 'Webkit'], n = 5; -1 < --n && void 0 === r[i[n] + e]; );
            return 0 <= n ? ((Q = 3 === n ? 'ms' : i[n]), (K = '-' + Q.toLowerCase() + '-'), Q + e) : null;
          },
          Z = j.defaultView ? j.defaultView.getComputedStyle : function () {},
          ee = (q.getStyle = function (e, t, i, n, r) {
            var a;
            return V || 'opacity' !== t
              ? (!n && e.style[t]
                  ? (a = e.style[t])
                  : (i = i || Z(e))
                  ? (a = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(o, '-$1').toLowerCase()))
                  : e.currentStyle && (a = e.currentStyle[t]),
                null == r || (a && 'none' !== a && 'auto' !== a && 'auto auto' !== a) ? a : r)
              : G(e);
          }),
          te = (r.convertToPixels = function (e, t, i, n, r) {
            if ('px' === n || !n) return i;
            if ('auto' === n || !i) return 0;
            var a,
              s,
              o,
              l = p.test(t),
              c = e,
              u = $.style,
              d = i < 0,
              h = 1 === i;
            if ((d && (i = -i), h && (i *= 100), '%' === n && -1 !== t.indexOf('border'))) a = (i / 100) * (l ? e.clientWidth : e.clientHeight);
            else {
              if (((u.cssText = 'border:0 solid red;position:' + ee(e, 'position') + ';line-height:0;'), '%' !== n && c.appendChild && 'v' !== n.charAt(0) && 'rem' !== n))
                u[l ? 'borderLeftWidth' : 'borderTopWidth'] = i + n;
              else {
                if (((s = (c = e.parentNode || j.body)._gsCache), (o = B.ticker.frame), s && l && s.time === o)) return (s.width * i) / 100;
                u[l ? 'width' : 'height'] = i + n;
              }
              c.appendChild($),
                (a = parseFloat($[l ? 'offsetWidth' : 'offsetHeight'])),
                c.removeChild($),
                l && '%' === n && !1 !== q.cacheWidths && (((s = c._gsCache = c._gsCache || {}).time = o), (s.width = (a / i) * 100)),
                0 !== a || r || (a = te(e, t, i, n, !0));
            }
            return h && (a /= 100), d ? -a : a;
          }),
          ie = (r.calculateOffset = function (e, t, i) {
            if ('absolute' !== ee(e, 'position', i)) return 0;
            var n = 'left' === t ? 'Left' : 'Top',
              r = ee(e, 'margin' + n, i);
            return e['offset' + n] - (te(e, t, parseFloat(r), r.replace(L, '')) || 0);
          }),
          ne = function (e, t) {
            var i,
              n,
              r,
              a = {};
            if ((t = t || Z(e, null)))
              if ((i = t.length)) for (; -1 < --i; ) (-1 === (r = t[i]).indexOf('-transform') || Re === r) && (a[r.replace(l, d)] = t.getPropertyValue(r));
              else for (i in t) (-1 === i.indexOf('Transform') || Oe === i) && (a[i] = t[i]);
            else if ((t = e.currentStyle || e.style)) for (i in t) 'string' == typeof i && void 0 === a[i] && (a[i.replace(l, d)] = t[i]);
            return (
              V || (a.opacity = G(e)),
              (n = Ve(e, t, !1)),
              (a.rotation = n.rotation),
              (a.skewX = n.skewX),
              (a.scaleX = n.scaleX),
              (a.scaleY = n.scaleY),
              (a.x = n.x),
              (a.y = n.y),
              Ne && ((a.z = n.z), (a.rotationX = n.rotationX), (a.rotationY = n.rotationY), (a.scaleZ = n.scaleZ)),
              a.filters && delete a.filters,
              a
            );
          },
          re = function (e, t, i, n, r) {
            var a,
              s,
              o,
              l = {},
              c = e.style;
            for (s in i)
              'cssText' !== s &&
                'length' !== s &&
                isNaN(s) &&
                (t[s] !== (a = i[s]) || (r && r[s])) &&
                -1 === s.indexOf('Origin') &&
                ('number' == typeof a || 'string' == typeof a) &&
                ((l[s] =
                  'auto' !== a || ('left' !== s && 'top' !== s)
                    ? ('' !== a && 'auto' !== a && 'none' !== a) || 'string' != typeof t[s] || '' === t[s].replace(u, '')
                      ? a
                      : 0
                    : ie(e, s)),
                void 0 !== c[s] && (o = new be(c, s, c[s], o)));
            if (n) for (s in n) 'className' !== s && (l[s] = n[s]);
            return { difs: l, firstMPT: o };
          },
          ae = { width: ['Left', 'Right'], height: ['Top', 'Bottom'] },
          se = ['marginLeft', 'marginRight', 'marginTop', 'marginBottom'],
          oe = function (e, t, i) {
            if ('svg' === (e.nodeName + '').toLowerCase()) return (i || Z(e))[t] || 0;
            if (e.getBBox && Ye(e)) return e.getBBox()[t] || 0;
            var n = parseFloat('width' === t ? e.offsetWidth : e.offsetHeight),
              r = ae[t],
              a = r.length;
            for (i = i || Z(e, null); -1 < --a; ) (n -= parseFloat(ee(e, 'padding' + r[a], i, !0)) || 0), (n -= parseFloat(ee(e, 'border' + r[a] + 'Width', i, !0)) || 0);
            return n;
          },
          le = function (e, t) {
            if ('contain' === e || 'auto' === e || 'auto auto' === e) return e + ' ';
            (null == e || '' === e) && (e = '0 0');
            var i,
              n = e.split(' '),
              r = -1 !== e.indexOf('left') ? '0%' : -1 !== e.indexOf('right') ? '100%' : n[0],
              a = -1 !== e.indexOf('top') ? '0%' : -1 !== e.indexOf('bottom') ? '100%' : n[1];
            if (3 < n.length && !t) {
              for (n = e.split(', ').join(',').split(','), e = [], i = 0; i < n.length; i++) e.push(le(n[i]));
              return e.join(',');
            }
            return (
              null == a ? (a = 'center' === r ? '50%' : '0') : 'center' === a && (a = '50%'),
              ('center' === r || (isNaN(parseFloat(r)) && -1 === (r + '').indexOf('='))) && (r = '50%'),
              (e = r + ' ' + a + (2 < n.length ? ' ' + n[2] : '')),
              t &&
                ((t.oxp = -1 !== r.indexOf('%')),
                (t.oyp = -1 !== a.indexOf('%')),
                (t.oxr = '=' === r.charAt(1)),
                (t.oyr = '=' === a.charAt(1)),
                (t.ox = parseFloat(r.replace(u, ''))),
                (t.oy = parseFloat(a.replace(u, ''))),
                (t.v = e)),
              t || e
            );
          },
          ce = function (e, t) {
            return (
              'function' == typeof e && (e = e(M, D)),
              'string' == typeof e && '=' === e.charAt(1) ? parseInt(e.charAt(0) + '1', 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
            );
          },
          ue = function (e, t) {
            return (
              'function' == typeof e && (e = e(M, D)),
              null == e ? t : 'string' == typeof e && '=' === e.charAt(1) ? parseInt(e.charAt(0) + '1', 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
            );
          },
          de = function (e, t, i, n) {
            var r,
              a,
              s,
              o,
              l,
              c = 1e-6;
            return (
              'function' == typeof e && (e = e(M, D)),
              null == e
                ? (o = t)
                : 'number' == typeof e
                ? (o = e)
                : ((r = 360),
                  (a = e.split('_')),
                  (s =
                    ((l = '=' === e.charAt(1)) ? parseInt(e.charAt(0) + '1', 10) * parseFloat(a[0].substr(2)) : parseFloat(a[0])) * (-1 === e.indexOf('rad') ? 1 : Y) -
                    (l ? 0 : t)),
                  a.length &&
                    (n && (n[i] = t + s),
                    -1 !== e.indexOf('short') && (s %= r) !== s % (r / 2) && (s = s < 0 ? s + r : s - r),
                    -1 !== e.indexOf('_cw') && s < 0
                      ? (s = ((s + 9999999999 * r) % r) - ((s / r) | 0) * r)
                      : -1 !== e.indexOf('ccw') && 0 < s && (s = ((s - 9999999999 * r) % r) - ((s / r) | 0) * r)),
                  (o = t + s)),
              o < c && -c < o && (o = 0),
              o
            );
          },
          he = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          pe = function (e, t, i) {
            return (255 * (6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1 ? t + (i - t) * e * 6 : e < 0.5 ? i : 3 * e < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) + 0.5) | 0;
          },
          fe = (q.parseColor = function (e, t) {
            var i, n, r, a, s, o, l, c, u, d, h;
            if (e)
              if ('number' == typeof e) i = [e >> 16, (e >> 8) & 255, 255 & e];
              else {
                if ((',' === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), he[e])) i = he[e];
                else if ('#' === e.charAt(0))
                  4 === e.length && (e = '#' + (n = e.charAt(1)) + n + (r = e.charAt(2)) + r + (a = e.charAt(3)) + a),
                    (i = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & 255, 255 & e]);
                else if ('hsl' === e.substr(0, 3))
                  if (((i = h = e.match(P)), t)) {
                    if (-1 !== e.indexOf('=')) return e.match(A);
                  } else
                    (s = (Number(i[0]) % 360) / 360),
                      (o = Number(i[1]) / 100),
                      (n = 2 * (l = Number(i[2]) / 100) - (r = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
                      3 < i.length && (i[3] = Number(e[3])),
                      (i[0] = pe(s + 1 / 3, n, r)),
                      (i[1] = pe(s, n, r)),
                      (i[2] = pe(s - 1 / 3, n, r));
                else i = e.match(P) || he.transparent;
                (i[0] = Number(i[0])), (i[1] = Number(i[1])), (i[2] = Number(i[2])), 3 < i.length && (i[3] = Number(i[3]));
              }
            else i = he.black;
            return (
              t &&
                !h &&
                ((n = i[0] / 255),
                (r = i[1] / 255),
                (a = i[2] / 255),
                (l = ((c = Math.max(n, r, a)) + (u = Math.min(n, r, a))) / 2),
                c === u
                  ? (s = o = 0)
                  : ((d = c - u),
                    (o = 0.5 < l ? d / (2 - c - u) : d / (c + u)),
                    (s = c === n ? (r - a) / d + (r < a ? 6 : 0) : c === r ? (a - n) / d + 2 : (n - r) / d + 4),
                    (s *= 60)),
                (i[0] = (s + 0.5) | 0),
                (i[1] = (100 * o + 0.5) | 0),
                (i[2] = (100 * l + 0.5) | 0)),
              i
            );
          }),
          me = function (e, t) {
            var i,
              n,
              r,
              a = e.match(ge) || [],
              s = 0,
              o = a.length ? '' : e;
            for (i = 0; i < a.length; i++)
              (n = a[i]),
                (s += (r = e.substr(s, e.indexOf(n, s) - s)).length + n.length),
                3 === (n = fe(n, t)).length && n.push(1),
                (o += r + (t ? 'hsla(' + n[0] + ',' + n[1] + '%,' + n[2] + '%,' + n[3] : 'rgba(' + n.join(',')) + ')');
            return o + e.substr(s);
          },
          ge = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b';
        for (e in he) ge += '|' + e + '\\b';
        (ge = new RegExp(ge + ')', 'gi')),
          (q.colorStringFilter = function (e) {
            var t,
              i = e[0] + e[1];
            ge.test(i) && ((t = -1 !== i.indexOf('hsl(') || -1 !== i.indexOf('hsla(')), (e[0] = me(e[0], t)), (e[1] = me(e[1], t))), (ge.lastIndex = 0);
          }),
          B.defaultStringFilter || (B.defaultStringFilter = q.colorStringFilter);
        var ve = function (e, t, a, s) {
            if (null == e)
              return function (e) {
                return e;
              };
            var o,
              l = t ? (e.match(ge) || [''])[0] : '',
              c = e.split(l).join('').match(_) || [],
              u = e.substr(0, e.indexOf(c[0])),
              d = ')' === e.charAt(e.length - 1) ? ')' : '',
              h = -1 !== e.indexOf(' ') ? ' ' : ',',
              p = c.length,
              f = 0 < p ? c[0].replace(P, '') : '';
            return p
              ? (o = t
                  ? function (e) {
                      var t, i, n, r;
                      if ('number' == typeof e) e += f;
                      else if (s && I.test(e)) {
                        for (r = e.replace(I, '|').split('|'), n = 0; n < r.length; n++) r[n] = o(r[n]);
                        return r.join(',');
                      }
                      if (((t = (e.match(ge) || [l])[0]), (n = (i = e.split(t).join('').match(_) || []).length), p > n--)) for (; ++n < p; ) i[n] = a ? i[((n - 1) / 2) | 0] : c[n];
                      return u + i.join(h) + h + t + d + (-1 !== e.indexOf('inset') ? ' inset' : '');
                    }
                  : function (e) {
                      var t, i, n;
                      if ('number' == typeof e) e += f;
                      else if (s && I.test(e)) {
                        for (i = e.replace(I, '|').split('|'), n = 0; n < i.length; n++) i[n] = o(i[n]);
                        return i.join(',');
                      }
                      if (((n = (t = e.match(_) || []).length), p > n--)) for (; ++n < p; ) t[n] = a ? t[((n - 1) / 2) | 0] : c[n];
                      return u + t.join(h) + d;
                    })
              : function (e) {
                  return e;
                };
          },
          ye = function (c) {
            return (
              (c = c.split(',')),
              function (e, t, i, n, r, a, s) {
                var o,
                  l = (t + '').split(' ');
                for (s = {}, o = 0; o < 4; o++) s[c[o]] = l[o] = l[o] || l[((o - 1) / 2) >> 0];
                return n.parse(e, s, r, a);
              }
            );
          },
          be =
            ((r._setPluginRatio = function (e) {
              this.plugin.setRatio(e);
              for (var t, i, n, r, a, s = this.data, o = s.proxy, l = s.firstMPT, c = 1e-6; l; )
                (t = o[l.v]), l.r ? (t = Math.round(t)) : t < c && -c < t && (t = 0), (l.t[l.p] = t), (l = l._next);
              if ((s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(o.rotation, this.t) : o.rotation), 1 === e || 0 === e))
                for (l = s.firstMPT, a = 1 === e ? 'e' : 'b'; l; ) {
                  if ((i = l.t).type) {
                    if (1 === i.type) {
                      for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i['xn' + n] + i['xs' + (n + 1)];
                      i[a] = r;
                    }
                  } else i[a] = i.s + i.xs0;
                  l = l._next;
                }
            }),
            function (e, t, i, n, r) {
              (this.t = e), (this.p = t), (this.v = i), (this.r = r), n && ((n._prev = this)._next = n);
            }),
          _e =
            ((r._parseToProxy = function (e, t, i, n, r, a) {
              var s,
                o,
                l,
                c,
                u,
                d = n,
                h = {},
                p = {},
                f = i._transform,
                m = z;
              for (
                i._transform = null, z = t, n = u = i.parse(e, t, n, r), z = m, a && ((i._transform = f), d && ((d._prev = null), d._prev && (d._prev._next = null)));
                n && n !== d;

              ) {
                if (n.type <= 1 && ((p[(o = n.p)] = n.s + n.c), (h[o] = n.s), a || ((c = new be(n, 's', o, c, n.r)), (n.c = 0)), 1 === n.type))
                  for (s = n.l; 0 < --s; ) (l = 'xn' + s), (p[(o = n.p + '_' + l)] = n.data[l]), (h[o] = n[l]), a || (c = new be(n, l, o, c, n.rxp[l]));
                n = n._next;
              }
              return { proxy: h, end: p, firstMPT: c, pt: u };
            }),
            (r.CSSPropTween = function (e, t, i, n, r, a, s, o, l, c, u) {
              (this.t = e),
                (this.p = t),
                (this.s = i),
                (this.c = n),
                (this.n = s || t),
                e instanceof _e || m.push(this.n),
                (this.r = o),
                (this.type = a || 0),
                l && ((this.pr = l), (f = !0)),
                (this.b = void 0 === c ? i : c),
                (this.e = void 0 === u ? i + n : u),
                r && ((this._next = r)._prev = this);
            })),
          we = function (e, t, i, n, r, a) {
            var s = new _e(e, t, i, n - i, r, -1, a);
            return (s.b = i), (s.e = s.xs0 = n), s;
          },
          xe = (q.parseComplex = function (e, t, i, n, r, a, s, o, l, c) {
            (i = i || a || ''),
              'function' == typeof n && (n = n(M, D)),
              (s = new _e(e, t, 0, 0, s, c ? 2 : 1, null, !1, o, i, n)),
              (n += ''),
              r && ge.test(n + i) && ((n = [i, n]), q.colorStringFilter(n), (i = n[0]), (n = n[1]));
            var u,
              d,
              h,
              p,
              f,
              m,
              g,
              v,
              y,
              b,
              _,
              w,
              x,
              T = i.split(', ').join(',').split(' '),
              k = n.split(', ').join(',').split(' '),
              S = T.length,
              C = !1 !== E;
            for (
              (-1 !== n.indexOf(',') || -1 !== i.indexOf(',')) && ((T = T.join(' ').replace(I, ', ').split(' ')), (k = k.join(' ').replace(I, ', ').split(' ')), (S = T.length)),
                S !== k.length && (S = (T = (a || '').split(' ')).length),
                s.plugin = l,
                s.setRatio = c,
                u = ge.lastIndex = 0;
              u < S;
              u++
            )
              if (((p = T[u]), (f = k[u]), (v = parseFloat(p)) || 0 === v)) s.appendXtra('', v, ce(f, v), f.replace(A, ''), C && -1 !== f.indexOf('px'), !0);
              else if (r && ge.test(p))
                (w = ')' + ((w = f.indexOf(')') + 1) ? f.substr(w) : '')),
                  (x = -1 !== f.indexOf('hsl') && V),
                  (p = fe(p, x)),
                  (f = fe(f, x)),
                  (y = 6 < p.length + f.length) && !V && 0 === f[3]
                    ? ((s['xs' + s.l] += s.l ? ' transparent' : 'transparent'), (s.e = s.e.split(k[u]).join('transparent')))
                    : (V || (y = !1),
                      x
                        ? s
                            .appendXtra(y ? 'hsla(' : 'hsl(', p[0], ce(f[0], p[0]), ',', !1, !0)
                            .appendXtra('', p[1], ce(f[1], p[1]), '%,', !1)
                            .appendXtra('', p[2], ce(f[2], p[2]), y ? '%,' : '%' + w, !1)
                        : s
                            .appendXtra(y ? 'rgba(' : 'rgb(', p[0], f[0] - p[0], ',', !0, !0)
                            .appendXtra('', p[1], f[1] - p[1], ',', !0)
                            .appendXtra('', p[2], f[2] - p[2], y ? ',' : w, !0),
                      y && ((p = p.length < 4 ? 1 : p[3]), s.appendXtra('', p, (f.length < 4 ? 1 : f[3]) - p, w, !1))),
                  (ge.lastIndex = 0);
              else if ((m = p.match(P))) {
                if (!(g = f.match(A)) || g.length !== m.length) return s;
                for (d = h = 0; d < m.length; d++)
                  (_ = m[d]),
                    (b = p.indexOf(_, h)),
                    s.appendXtra(p.substr(h, b - h), Number(_), ce(g[d], _), '', C && 'px' === p.substr(b + _.length, 2), 0 === d),
                    (h = b + _.length);
                s['xs' + s.l] += p.substr(h);
              } else s['xs' + s.l] += s.l || s['xs' + s.l] ? ' ' + f : f;
            if (-1 !== n.indexOf('=') && s.data) {
              for (w = s.xs0 + s.data.s, u = 1; u < s.l; u++) w += s['xs' + u] + s.data['xn' + u];
              s.e = w + s['xs' + u];
            }
            return s.l || ((s.type = -1), (s.xs0 = s.e)), s.xfirst || s;
          }),
          Te = 9;
        for ((e = _e.prototype).l = e.pr = 0; 0 < --Te; ) (e['xn' + Te] = 0), (e['xs' + Te] = '');
        (e.xs0 = ''),
          (e._next = e._prev = e.xfirst = e.data = e.plugin = e.setRatio = e.rxp = null),
          (e.appendXtra = function (e, t, i, n, r, a) {
            var s = this,
              o = s.l;
            return (
              (s['xs' + o] += a && (o || s['xs' + o]) ? ' ' + e : e || ''),
              i || 0 === o || s.plugin
                ? (s.l++,
                  (s.type = s.setRatio ? 2 : 1),
                  (s['xs' + s.l] = n || ''),
                  0 < o
                    ? ((s.data['xn' + o] = t + i),
                      (s.rxp['xn' + o] = r),
                      (s['xn' + o] = t),
                      s.plugin || ((s.xfirst = new _e(s, 'xn' + o, t, i, s.xfirst || s, 0, s.n, r, s.pr)), (s.xfirst.xs0 = 0)))
                    : ((s.data = { s: t + i }), (s.rxp = {}), (s.s = t), (s.c = i), (s.r = r)))
                : (s['xs' + o] += t + (n || '')),
              s
            );
          });
        var ke = function (e, t) {
            (t = t || {}),
              (this.p = (t.prefix && J(e)) || e),
              (g[e] = g[this.p] = this),
              (this.format = t.formatter || ve(t.defaultValue, t.color, t.collapsible, t.multi)),
              t.parser && (this.parse = t.parser),
              (this.clrs = t.color),
              (this.multi = t.multi),
              (this.keyword = t.keyword),
              (this.dflt = t.defaultValue),
              (this.pr = t.priority || 0);
          },
          Se = (r._registerComplexSpecialProp = function (e, t, i) {
            'object' != typeof t && (t = { parser: i });
            var n,
              r = e.split(','),
              a = t.defaultValue;
            for (i = i || [a], n = 0; n < r.length; n++) (t.prefix = 0 === n && t.prefix), (t.defaultValue = i[n] || a), new ke(r[n], t);
          }),
          Ce = (r._registerPluginProp = function (e) {
            if (!g[e]) {
              var l = e.charAt(0).toUpperCase() + e.substr(1) + 'Plugin';
              Se(e, {
                parser: function (e, t, i, n, r, a, s) {
                  var o = c.com.greensock.plugins[l];
                  return o ? (o._cssRegister(), g[i].parse(e, t, i, n, r, a, s)) : (U('Error: ' + l + ' js file not loaded.'), r);
                },
              });
            }
          });
        ((e = ke.prototype).parseComplex = function (e, t, i, n, r, a) {
          var s,
            o,
            l,
            c,
            u,
            d,
            h = this.keyword;
          if ((this.multi && (I.test(i) || I.test(t) ? ((o = t.replace(I, '|').split('|')), (l = i.replace(I, '|').split('|'))) : h && ((o = [t]), (l = [i]))), l)) {
            for (c = l.length > o.length ? l.length : o.length, s = 0; s < c; s++)
              (t = o[s] = o[s] || this.dflt),
                (i = l[s] = l[s] || this.dflt),
                h && (u = t.indexOf(h)) !== (d = i.indexOf(h)) && (-1 === d ? (o[s] = o[s].split(h).join('')) : -1 === u && (o[s] += ' ' + h));
            (t = o.join(', ')), (i = l.join(', '));
          }
          return xe(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, r, a);
        }),
          (e.parse = function (e, t, i, n, r, a) {
            return this.parseComplex(e.style, this.format(ee(e, this.p, C, !1, this.dflt)), this.format(t), r, a);
          }),
          (q.registerSpecialProp = function (e, o, l) {
            Se(e, {
              parser: function (e, t, i, n, r, a) {
                var s = new _e(e, i, 0, 0, r, 2, i, !1, l);
                return (s.plugin = a), (s.setRatio = o(e, t, n._tween, i)), s;
              },
              priority: l,
            });
          }),
          (q.useSVGTransformAttr = y || F);
        var Ee,
          De,
          Me,
          Pe,
          Ae,
          Le = 'scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent'.split(','),
          Oe = J('transform'),
          Re = K + 'transform',
          Ie = J('transformOrigin'),
          Ne = null !== J('perspective'),
          ze = (r.Transform = function () {
            (this.perspective = parseFloat(q.defaultTransformPerspective) || 0), (this.force3D = !(!1 === q.defaultForce3D || !Ne) && (q.defaultForce3D || 'auto'));
          }),
          Fe = window.SVGElement,
          He = function (e, t, i) {
            var n,
              r = j.createElementNS('http://www.w3.org/2000/svg', e),
              a = /([a-z])([A-Z])/g;
            for (n in i) r.setAttributeNS(null, n.replace(a, '$1-$2').toLowerCase(), i[n]);
            return t.appendChild(r), r;
          },
          je = j.documentElement,
          $e =
            ((Ae = S || (/Android/i.test(W) && !window.chrome)),
            j.createElementNS &&
              !Ae &&
              ((De = He('svg', je)),
              (Pe = (Me = He('rect', De, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width),
              (Me.style[Ie] = '50% 50%'),
              (Me.style[Oe] = 'scaleX(0.5)'),
              (Ae = Pe === Me.getBoundingClientRect().width && !(F && Ne)),
              je.removeChild(De)),
            Ae),
          Be = function (e, t, i, n, r, a) {
            var s,
              o,
              l,
              c,
              u,
              d,
              h,
              p,
              f,
              m,
              g,
              v,
              y,
              b,
              _ = e._gsTransform,
              w = We(e, !0);
            _ && ((y = _.xOrigin), (b = _.yOrigin)),
              (!n || (s = n.split(' ')).length < 2) &&
                ((h = e.getBBox()),
                (s = [
                  (-1 !== (t = le(t).split(' '))[0].indexOf('%') ? (parseFloat(t[0]) / 100) * h.width : parseFloat(t[0])) + h.x,
                  (-1 !== t[1].indexOf('%') ? (parseFloat(t[1]) / 100) * h.height : parseFloat(t[1])) + h.y,
                ])),
              (i.xOrigin = c = parseFloat(s[0])),
              (i.yOrigin = u = parseFloat(s[1])),
              n &&
                w !== Xe &&
                ((d = w[0]),
                (h = w[1]),
                (p = w[2]),
                (f = w[3]),
                (m = w[4]),
                (o = c * (f / (v = d * f - h * p)) + u * (-p / v) + (p * (g = w[5]) - f * m) / v),
                (l = c * (-h / v) + u * (d / v) - (d * g - h * m) / v),
                (c = i.xOrigin = s[0] = o),
                (u = i.yOrigin = s[1] = l)),
              _ &&
                (a && ((i.xOffset = _.xOffset), (i.yOffset = _.yOffset), (_ = i)),
                r || (!1 !== r && !1 !== q.defaultSmoothOrigin)
                  ? ((o = c - y), (l = u - b), (_.xOffset += o * w[0] + l * w[2] - o), (_.yOffset += o * w[1] + l * w[3] - l))
                  : (_.xOffset = _.yOffset = 0)),
              a || e.setAttribute('data-svg-origin', s.join(' '));
          },
          qe = function (e) {
            try {
              return e.getBBox();
            } catch (e) {}
          },
          Ye = function (e) {
            return !!(Fe && e.getBBox && e.getCTM && qe(e) && (!e.parentNode || (e.parentNode.getBBox && e.parentNode.getCTM)));
          },
          Xe = [1, 0, 0, 1, 0, 0],
          We = function (e, t) {
            var i,
              n,
              r,
              a,
              s,
              o,
              l = e._gsTransform || new ze(),
              c = 1e5,
              u = e.style;
            if (
              (Oe
                ? (n = ee(e, Re, null, !0))
                : e.currentStyle &&
                  (n =
                    (n = e.currentStyle.filter.match(h)) && 4 === n.length
                      ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(',')
                      : ''),
              (i = !n || 'none' === n || 'matrix(1, 0, 0, 1, 0, 0)' === n) &&
                Oe &&
                ((o = 'none' === Z(e).display) || !e.parentNode) &&
                (o && ((a = u.display), (u.display = 'block')),
                e.parentNode || ((s = 1), je.appendChild(e)),
                (i = !(n = ee(e, Re, null, !0)) || 'none' === n || 'matrix(1, 0, 0, 1, 0, 0)' === n),
                a ? (u.display = a) : o && Qe(u, 'display'),
                s && je.removeChild(e)),
              (l.svg || (e.getBBox && Ye(e))) &&
                (i && -1 !== (u[Oe] + '').indexOf('matrix') && ((n = u[Oe]), (i = 0)),
                (r = e.getAttribute('transform')),
                i &&
                  r &&
                  (-1 !== r.indexOf('matrix')
                    ? ((n = r), (i = 0))
                    : -1 !== r.indexOf('translate') && ((n = 'matrix(1,0,0,1,' + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(',') + ')'), (i = 0)))),
              i)
            )
              return Xe;
            for (r = (n || '').match(P) || [], Te = r.length; -1 < --Te; ) (a = Number(r[Te])), (r[Te] = (s = a - (a |= 0)) ? ((s * c + (s < 0 ? -0.5 : 0.5)) | 0) / c + a : a);
            return t && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r;
          },
          Ve = (r.getTransform = function (e, t, i, n) {
            if (e._gsTransform && i && !n) return e._gsTransform;
            var r,
              a,
              s,
              o,
              l,
              c,
              u = (i && e._gsTransform) || new ze(),
              d = u.scaleX < 0,
              h = 2e-5,
              p = 1e5,
              f = (Ne && (parseFloat(ee(e, Ie, t, !1, '0 0 0').split(' ')[2]) || u.zOrigin)) || 0,
              m = parseFloat(q.defaultTransformPerspective) || 0;
            if (
              ((u.svg = !(!e.getBBox || !Ye(e))),
              u.svg && (Be(e, ee(e, Ie, t, !1, '50% 50%') + '', u, e.getAttribute('data-svg-origin')), (Ee = q.useSVGTransformAttr || $e)),
              (r = We(e)) !== Xe)
            ) {
              if (16 === r.length) {
                var g,
                  v,
                  y,
                  b,
                  _,
                  w = r[0],
                  x = r[1],
                  T = r[2],
                  k = r[3],
                  S = r[4],
                  C = r[5],
                  E = r[6],
                  D = r[7],
                  M = r[8],
                  P = r[9],
                  A = r[10],
                  L = r[12],
                  O = r[13],
                  R = r[14],
                  I = r[11],
                  N = Math.atan2(E, A);
                u.zOrigin && ((L = M * (R = -u.zOrigin) - r[12]), (O = P * R - r[13]), (R = A * R + u.zOrigin - r[14])),
                  (u.rotationX = N * Y),
                  N &&
                    ((g = S * (b = Math.cos(-N)) + M * (_ = Math.sin(-N))),
                    (v = C * b + P * _),
                    (y = E * b + A * _),
                    (M = S * -_ + M * b),
                    (P = C * -_ + P * b),
                    (A = E * -_ + A * b),
                    (I = D * -_ + I * b),
                    (S = g),
                    (C = v),
                    (E = y)),
                  (N = Math.atan2(-T, A)),
                  (u.rotationY = N * Y),
                  N &&
                    ((v = x * (b = Math.cos(-N)) - P * (_ = Math.sin(-N))),
                    (y = T * b - A * _),
                    (P = x * _ + P * b),
                    (A = T * _ + A * b),
                    (I = k * _ + I * b),
                    (w = g = w * b - M * _),
                    (x = v),
                    (T = y)),
                  (N = Math.atan2(x, w)),
                  (u.rotation = N * Y),
                  N && ((w = w * (b = Math.cos(-N)) + S * (_ = Math.sin(-N))), (v = x * b + C * _), (C = x * -_ + C * b), (E = T * -_ + E * b), (x = v)),
                  u.rotationX && 359.9 < Math.abs(u.rotationX) + Math.abs(u.rotation) && ((u.rotationX = u.rotation = 0), (u.rotationY = 180 - u.rotationY)),
                  (u.scaleX = ((Math.sqrt(w * w + x * x) * p + 0.5) | 0) / p),
                  (u.scaleY = ((Math.sqrt(C * C + P * P) * p + 0.5) | 0) / p),
                  (u.scaleZ = ((Math.sqrt(E * E + A * A) * p + 0.5) | 0) / p),
                  u.rotationX || u.rotationY
                    ? (u.skewX = 0)
                    : ((u.skewX = S || C ? Math.atan2(S, C) * Y + u.rotation : u.skewX || 0),
                      90 < Math.abs(u.skewX) &&
                        Math.abs(u.skewX) < 270 &&
                        (d
                          ? ((u.scaleX *= -1), (u.skewX += u.rotation <= 0 ? 180 : -180), (u.rotation += u.rotation <= 0 ? 180 : -180))
                          : ((u.scaleY *= -1), (u.skewX += u.skewX <= 0 ? 180 : -180)))),
                  (u.perspective = I ? 1 / (I < 0 ? -I : I) : 0),
                  (u.x = L),
                  (u.y = O),
                  (u.z = R),
                  u.svg && ((u.x -= u.xOrigin - (u.xOrigin * w - u.yOrigin * S)), (u.y -= u.yOrigin - (u.yOrigin * x - u.xOrigin * C)));
              } else if (!Ne || n || !r.length || u.x !== r[4] || u.y !== r[5] || (!u.rotationX && !u.rotationY)) {
                var z = 6 <= r.length,
                  F = z ? r[0] : 1,
                  H = r[1] || 0,
                  j = r[2] || 0,
                  $ = z ? r[3] : 1;
                (u.x = r[4] || 0),
                  (u.y = r[5] || 0),
                  (s = Math.sqrt(F * F + H * H)),
                  (o = Math.sqrt($ * $ + j * j)),
                  (l = F || H ? Math.atan2(H, F) * Y : u.rotation || 0),
                  (c = j || $ ? Math.atan2(j, $) * Y + l : u.skewX || 0),
                  90 < Math.abs(c) && Math.abs(c) < 270 && (d ? ((s *= -1), (c += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((o *= -1), (c += c <= 0 ? 180 : -180))),
                  (u.scaleX = s),
                  (u.scaleY = o),
                  (u.rotation = l),
                  (u.skewX = c),
                  Ne && ((u.rotationX = u.rotationY = u.z = 0), (u.perspective = m), (u.scaleZ = 1)),
                  u.svg && ((u.x -= u.xOrigin - (u.xOrigin * F + u.yOrigin * j)), (u.y -= u.yOrigin - (u.xOrigin * H + u.yOrigin * $)));
              }
              for (a in ((u.zOrigin = f), u)) u[a] < h && u[a] > -h && (u[a] = 0);
            }
            return (
              i &&
                (e._gsTransform = u).svg &&
                (Ee && e.style[Oe]
                  ? B.delayedCall(0.001, function () {
                      Qe(e.style, Oe);
                    })
                  : !Ee &&
                    e.getAttribute('transform') &&
                    B.delayedCall(0.001, function () {
                      e.removeAttribute('transform');
                    })),
              u
            );
          }),
          Ge = function (e) {
            var t,
              i,
              n = this.data,
              r = -n.rotation * H,
              a = r + n.skewX * H,
              s = 1e5,
              o = ((Math.cos(r) * n.scaleX * s) | 0) / s,
              l = ((Math.sin(r) * n.scaleX * s) | 0) / s,
              c = ((Math.sin(a) * -n.scaleY * s) | 0) / s,
              u = ((Math.cos(a) * n.scaleY * s) | 0) / s,
              d = this.t.style,
              h = this.t.currentStyle;
            if (h) {
              (i = l), (l = -c), (c = -i), (t = h.filter), (d.filter = '');
              var p,
                f,
                m = this.t.offsetWidth,
                g = this.t.offsetHeight,
                v = 'absolute' !== h.position,
                y = 'progid:DXImageTransform.Microsoft.Matrix(M11=' + o + ', M12=' + l + ', M21=' + c + ', M22=' + u,
                b = n.x + (m * n.xPercent) / 100,
                _ = n.y + (g * n.yPercent) / 100;
              if (
                (null != n.ox && ((b += (p = (n.oxp ? m * n.ox * 0.01 : n.ox) - m / 2) - (p * o + (f = (n.oyp ? g * n.oy * 0.01 : n.oy) - g / 2) * l)), (_ += f - (p * c + f * u))),
                v ? (y += ', Dx=' + ((p = m / 2) - (p * o + (f = g / 2) * l) + b) + ', Dy=' + (f - (p * c + f * u) + _) + ')') : (y += ", sizingMethod='auto expand')"),
                -1 !== t.indexOf('DXImageTransform.Microsoft.Matrix(') ? (d.filter = t.replace(R, y)) : (d.filter = y + ' ' + t),
                (0 === e || 1 === e) &&
                  1 === o &&
                  0 === l &&
                  0 === c &&
                  1 === u &&
                  ((v && -1 === y.indexOf('Dx=0, Dy=0')) || (O.test(t) && 100 !== parseFloat(RegExp.$1)) || (-1 === t.indexOf(t.indexOf('Alpha')) && d.removeAttribute('filter'))),
                !v)
              ) {
                var w,
                  x,
                  T,
                  k = S < 8 ? 1 : -1;
                for (
                  p = n.ieOffsetX || 0,
                    f = n.ieOffsetY || 0,
                    n.ieOffsetX = Math.round((m - ((o < 0 ? -o : o) * m + (l < 0 ? -l : l) * g)) / 2 + b),
                    n.ieOffsetY = Math.round((g - ((u < 0 ? -u : u) * g + (c < 0 ? -c : c) * m)) / 2 + _),
                    Te = 0;
                  Te < 4;
                  Te++
                )
                  (T =
                    (i = -1 !== (w = h[(x = se[Te])]).indexOf('px') ? parseFloat(w) : te(this.t, x, parseFloat(w), w.replace(L, '')) || 0) !== n[x]
                      ? Te < 2
                        ? -n.ieOffsetX
                        : -n.ieOffsetY
                      : Te < 2
                      ? p - n.ieOffsetX
                      : f - n.ieOffsetY),
                    (d[x] = (n[x] = Math.round(i - T * (0 === Te || 2 === Te ? 1 : k))) + 'px');
              }
            }
          },
          Ue = (r.set3DTransformRatio = r.setTransformRatio = function (e) {
            var t,
              i,
              n,
              r,
              a,
              s,
              o,
              l,
              c,
              u,
              d,
              h,
              p,
              f,
              m,
              g,
              v,
              y,
              b,
              _,
              w,
              x,
              T,
              k = this.data,
              S = this.t.style,
              C = k.rotation,
              E = k.rotationX,
              D = k.rotationY,
              M = k.scaleX,
              P = k.scaleY,
              A = k.scaleZ,
              L = k.x,
              O = k.y,
              R = k.z,
              I = k.svg,
              N = k.perspective,
              z = k.force3D;
            if (
              !((((1 !== e && 0 !== e) || 'auto' !== z || (this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) && z) || R || N || D || E || 1 !== A) ||
              (Ee && I) ||
              !Ne
            )
              C || k.skewX || I
                ? ((C *= H),
                  (x = k.skewX * H),
                  (T = 1e5),
                  (t = Math.cos(C) * M),
                  (r = Math.sin(C) * M),
                  (i = Math.sin(C - x) * -P),
                  (a = Math.cos(C - x) * P),
                  x &&
                    'simple' === k.skewType &&
                    ((v = Math.tan(x - k.skewY * H)),
                    (i *= v = Math.sqrt(1 + v * v)),
                    (a *= v),
                    k.skewY && ((v = Math.tan(k.skewY * H)), (t *= v = Math.sqrt(1 + v * v)), (r *= v))),
                  I &&
                    ((L += k.xOrigin - (k.xOrigin * t + k.yOrigin * i) + k.xOffset),
                    (O += k.yOrigin - (k.xOrigin * r + k.yOrigin * a) + k.yOffset),
                    Ee && (k.xPercent || k.yPercent) && ((f = this.t.getBBox()), (L += 0.01 * k.xPercent * f.width), (O += 0.01 * k.yPercent * f.height)),
                    L < (f = 1e-6) && -f < L && (L = 0),
                    O < f && -f < O && (O = 0)),
                  (b = ((t * T) | 0) / T + ',' + ((r * T) | 0) / T + ',' + ((i * T) | 0) / T + ',' + ((a * T) | 0) / T + ',' + L + ',' + O + ')'),
                  I && Ee
                    ? this.t.setAttribute('transform', 'matrix(' + b)
                    : (S[Oe] = (k.xPercent || k.yPercent ? 'translate(' + k.xPercent + '%,' + k.yPercent + '%) matrix(' : 'matrix(') + b))
                : (S[Oe] = (k.xPercent || k.yPercent ? 'translate(' + k.xPercent + '%,' + k.yPercent + '%) matrix(' : 'matrix(') + M + ',0,0,' + P + ',' + L + ',' + O + ')');
            else {
              if ((F && (M < (f = 1e-4) && -f < M && (M = A = 2e-5), P < f && -f < P && (P = A = 2e-5), !N || k.z || k.rotationX || k.rotationY || (N = 0)), C || k.skewX))
                (C *= H),
                  (m = t = Math.cos(C)),
                  (g = r = Math.sin(C)),
                  k.skewX &&
                    ((C -= k.skewX * H),
                    (m = Math.cos(C)),
                    (g = Math.sin(C)),
                    'simple' === k.skewType &&
                      ((v = Math.tan((k.skewX - k.skewY) * H)),
                      (m *= v = Math.sqrt(1 + v * v)),
                      (g *= v),
                      k.skewY && ((v = Math.tan(k.skewY * H)), (t *= v = Math.sqrt(1 + v * v)), (r *= v)))),
                  (i = -g),
                  (a = m);
              else {
                if (!(D || E || 1 !== A || N || I))
                  return void (S[Oe] =
                    (k.xPercent || k.yPercent ? 'translate(' + k.xPercent + '%,' + k.yPercent + '%) translate3d(' : 'translate3d(') +
                    L +
                    'px,' +
                    O +
                    'px,' +
                    R +
                    'px)' +
                    (1 !== M || 1 !== P ? ' scale(' + M + ',' + P + ')' : ''));
                (t = a = 1), (i = r = 0);
              }
              (c = 1),
                (n = s = o = l = u = d = 0),
                (h = N ? -1 / N : 0),
                (p = k.zOrigin),
                (f = 1e-6),
                (_ = ','),
                (w = '0'),
                (C = D * H) && ((m = Math.cos(C)), (u = h * (o = -(g = Math.sin(C)))), (n = t * g), (s = r * g), (h *= c = m), (t *= m), (r *= m)),
                (C = E * H) &&
                  ((v = i * (m = Math.cos(C)) + n * (g = Math.sin(C))),
                  (y = a * m + s * g),
                  (l = c * g),
                  (d = h * g),
                  (n = i * -g + n * m),
                  (s = a * -g + s * m),
                  (c *= m),
                  (h *= m),
                  (i = v),
                  (a = y)),
                1 !== A && ((n *= A), (s *= A), (c *= A), (h *= A)),
                1 !== P && ((i *= P), (a *= P), (l *= P), (d *= P)),
                1 !== M && ((t *= M), (r *= M), (o *= M), (u *= M)),
                (p || I) &&
                  (p && ((L += n * -p), (O += s * -p), (R += c * -p + p)),
                  I && ((L += k.xOrigin - (k.xOrigin * t + k.yOrigin * i) + k.xOffset), (O += k.yOrigin - (k.xOrigin * r + k.yOrigin * a) + k.yOffset)),
                  L < f && -f < L && (L = w),
                  O < f && -f < O && (O = w),
                  R < f && -f < R && (R = 0)),
                (b = k.xPercent || k.yPercent ? 'translate(' + k.xPercent + '%,' + k.yPercent + '%) matrix3d(' : 'matrix3d('),
                (b += (t < f && -f < t ? w : t) + _ + (r < f && -f < r ? w : r) + _ + (o < f && -f < o ? w : o)),
                (b += _ + (u < f && -f < u ? w : u) + _ + (i < f && -f < i ? w : i) + _ + (a < f && -f < a ? w : a)),
                E || D || 1 !== A
                  ? ((b += _ + (l < f && -f < l ? w : l) + _ + (d < f && -f < d ? w : d) + _ + (n < f && -f < n ? w : n)),
                    (b += _ + (s < f && -f < s ? w : s) + _ + (c < f && -f < c ? w : c) + _ + (h < f && -f < h ? w : h) + _))
                  : (b += ',0,0,0,0,1,0,'),
                (b += L + _ + O + _ + R + _ + (N ? 1 + -R / N : 1) + ')'),
                (S[Oe] = b);
            }
          });
        ((e = ze.prototype).x = e.y = e.z = e.skewX = e.skewY = e.rotation = e.rotationX = e.rotationY = e.zOrigin = e.xPercent = e.yPercent = e.xOffset = e.yOffset = 0),
          (e.scaleX = e.scaleY = e.scaleZ = 1),
          Se(
            'transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin',
            {
              parser: function (e, t, i, n, r, a, s) {
                if (n._lastParsedTransform === s) return r;
                var o;
                'function' == typeof (n._lastParsedTransform = s)[i] && ((o = s[i]), (s[i] = t));
                var l,
                  c,
                  u,
                  d,
                  h,
                  p,
                  f,
                  m,
                  g,
                  v = e._gsTransform,
                  y = e.style,
                  b = 1e-6,
                  _ = Le.length,
                  w = s,
                  x = {},
                  T = 'transformOrigin',
                  k = Ve(e, C, !0, w.parseTransform),
                  S = w.transform && ('function' == typeof w.transform ? w.transform(M, D) : w.transform);
                if (((n._transform = k), S && 'string' == typeof S && Oe))
                  ((c = $.style)[Oe] = S),
                    (c.display = 'block'),
                    (c.position = 'absolute'),
                    j.body.appendChild($),
                    (l = Ve($, null, !1)),
                    k.svg &&
                      ((p = k.xOrigin),
                      (f = k.yOrigin),
                      (l.x -= k.xOffset),
                      (l.y -= k.yOffset),
                      (w.transformOrigin || w.svgOrigin) &&
                        ((S = {}),
                        Be(e, le(w.transformOrigin), S, w.svgOrigin, w.smoothOrigin, !0),
                        (p = S.xOrigin),
                        (f = S.yOrigin),
                        (l.x -= S.xOffset - k.xOffset),
                        (l.y -= S.yOffset - k.yOffset)),
                      (p || f) && ((m = We($, !0)), (l.x -= p - (p * m[0] + f * m[2])), (l.y -= f - (p * m[1] + f * m[3])))),
                    j.body.removeChild($),
                    l.perspective || (l.perspective = k.perspective),
                    null != w.xPercent && (l.xPercent = ue(w.xPercent, k.xPercent)),
                    null != w.yPercent && (l.yPercent = ue(w.yPercent, k.yPercent));
                else if ('object' == typeof w) {
                  if (
                    ((l = {
                      scaleX: ue(null != w.scaleX ? w.scaleX : w.scale, k.scaleX),
                      scaleY: ue(null != w.scaleY ? w.scaleY : w.scale, k.scaleY),
                      scaleZ: ue(w.scaleZ, k.scaleZ),
                      x: ue(w.x, k.x),
                      y: ue(w.y, k.y),
                      z: ue(w.z, k.z),
                      xPercent: ue(w.xPercent, k.xPercent),
                      yPercent: ue(w.yPercent, k.yPercent),
                      perspective: ue(w.transformPerspective, k.perspective),
                    }),
                    null != (h = w.directionalRotation))
                  )
                    if ('object' == typeof h) for (c in h) w[c] = h[c];
                    else w.rotation = h;
                  'string' == typeof w.x && -1 !== w.x.indexOf('%') && ((l.x = 0), (l.xPercent = ue(w.x, k.xPercent))),
                    'string' == typeof w.y && -1 !== w.y.indexOf('%') && ((l.y = 0), (l.yPercent = ue(w.y, k.yPercent))),
                    (l.rotation = de(
                      'rotation' in w ? w.rotation : 'shortRotation' in w ? w.shortRotation + '_short' : 'rotationZ' in w ? w.rotationZ : k.rotation - k.skewY,
                      k.rotation - k.skewY,
                      'rotation',
                      x
                    )),
                    Ne &&
                      ((l.rotationX = de('rotationX' in w ? w.rotationX : 'shortRotationX' in w ? w.shortRotationX + '_short' : k.rotationX || 0, k.rotationX, 'rotationX', x)),
                      (l.rotationY = de('rotationY' in w ? w.rotationY : 'shortRotationY' in w ? w.shortRotationY + '_short' : k.rotationY || 0, k.rotationY, 'rotationY', x))),
                    (l.skewX = de(w.skewX, k.skewX - k.skewY)),
                    (l.skewY = de(w.skewY, k.skewY)) && ((l.skewX += l.skewY), (l.rotation += l.skewY));
                }
                for (
                  Ne && null != w.force3D && ((k.force3D = w.force3D), (d = !0)),
                    k.skewType = w.skewType || k.skewType || q.defaultSkewType,
                    (u = k.force3D || k.z || k.rotationX || k.rotationY || l.z || l.rotationX || l.rotationY || l.perspective) || null == w.scale || (l.scaleZ = 1);
                  -1 < --_;

                )
                  (b < (S = l[(g = Le[_])] - k[g]) || S < -b || null != w[g] || null != z[g]) &&
                    ((d = !0), (r = new _e(k, g, k[g], S, r)), g in x && (r.e = x[g]), (r.xs0 = 0), (r.plugin = a), n._overwriteProps.push(r.n));
                return (
                  (S = w.transformOrigin),
                  k.svg &&
                    (S || w.svgOrigin) &&
                    ((p = k.xOffset),
                    (f = k.yOffset),
                    Be(e, le(S), l, w.svgOrigin, w.smoothOrigin),
                    (r = we(k, 'xOrigin', (v ? k : l).xOrigin, l.xOrigin, r, T)),
                    (r = we(k, 'yOrigin', (v ? k : l).yOrigin, l.yOrigin, r, T)),
                    (p !== k.xOffset || f !== k.yOffset) &&
                      ((r = we(k, 'xOffset', v ? p : k.xOffset, k.xOffset, r, T)), (r = we(k, 'yOffset', v ? f : k.yOffset, k.yOffset, r, T))),
                    (S = Ee ? null : '0px 0px')),
                  (S || (Ne && u && k.zOrigin)) &&
                    (Oe
                      ? ((d = !0),
                        (g = Ie),
                        (S = (S || ee(e, g, C, !1, '50% 50%')) + ''),
                        ((r = new _e(y, g, 0, 0, r, -1, T)).b = y[g]),
                        (r.plugin = a),
                        Ne
                          ? ((c = k.zOrigin),
                            (S = S.split(' ')),
                            (k.zOrigin = (2 < S.length && (0 === c || '0px' !== S[2]) ? parseFloat(S[2]) : c) || 0),
                            (r.xs0 = r.e = S[0] + ' ' + (S[1] || '50%') + ' 0px'),
                            ((r = new _e(k, 'zOrigin', 0, 0, r, -1, r.n)).b = c),
                            (r.xs0 = r.e = k.zOrigin))
                          : (r.xs0 = r.e = S))
                      : le(S + '', k)),
                  d && (n._transformType = (k.svg && Ee) || (!u && 3 !== this._transformType) ? 2 : 3),
                  o && (s[i] = o),
                  r
                );
              },
              prefix: !0,
            }
          ),
          Se('boxShadow', { defaultValue: '0px 0px 0px 0px #999', prefix: !0, color: !0, multi: !0, keyword: 'inset' }),
          Se('borderRadius', {
            defaultValue: '0px',
            parser: function (e, t, i, n, r) {
              t = this.format(t);
              var a,
                s,
                o,
                l,
                c,
                u,
                d,
                h,
                p,
                f,
                m,
                g,
                v,
                y,
                b,
                _,
                w = ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
                x = e.style;
              for (p = parseFloat(e.offsetWidth), f = parseFloat(e.offsetHeight), a = t.split(' '), s = 0; s < w.length; s++)
                this.p.indexOf('border') && (w[s] = J(w[s])),
                  -1 !== (c = l = ee(e, w[s], C, !1, '0px')).indexOf(' ') && ((c = (l = c.split(' '))[0]), (l = l[1])),
                  (u = o = a[s]),
                  (d = parseFloat(c)),
                  (g = c.substr((d + '').length)),
                  (v = '=' === u.charAt(1))
                    ? ((h = parseInt(u.charAt(0) + '1', 10)), (u = u.substr(2)), (h *= parseFloat(u)), (m = u.substr((h + '').length - (h < 0 ? 1 : 0)) || ''))
                    : ((h = parseFloat(u)), (m = u.substr((h + '').length))),
                  '' === m && (m = T[i] || g),
                  m !== g &&
                    ((y = te(e, 'borderLeft', d, g)),
                    (b = te(e, 'borderTop', d, g)),
                    '%' === m
                      ? ((c = (y / p) * 100 + '%'), (l = (b / f) * 100 + '%'))
                      : 'em' === m
                      ? ((c = y / (_ = te(e, 'borderLeft', 1, 'em')) + 'em'), (l = b / _ + 'em'))
                      : ((c = y + 'px'), (l = b + 'px')),
                    v && ((u = parseFloat(c) + h + m), (o = parseFloat(l) + h + m))),
                  (r = xe(x, w[s], c + ' ' + l, u + ' ' + o, !1, '0px', r));
              return r;
            },
            prefix: !0,
            formatter: ve('0px 0px 0px 0px', !1, !0),
          }),
          Se('borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius', {
            defaultValue: '0px',
            parser: function (e, t, i, n, r) {
              return xe(e.style, i, this.format(ee(e, i, C, !1, '0px 0px')), this.format(t), !1, '0px', r);
            },
            prefix: !0,
            formatter: ve('0px 0px', !1, !0),
          }),
          Se('backgroundPosition', {
            defaultValue: '0 0',
            parser: function (e, t, i, n, r, a) {
              var s,
                o,
                l,
                c,
                u,
                d,
                h = 'background-position',
                p = C || Z(e, null),
                f = this.format(
                  (p
                    ? S
                      ? p.getPropertyValue(h + '-x') + ' ' + p.getPropertyValue(h + '-y')
                      : p.getPropertyValue(h)
                    : e.currentStyle.backgroundPositionX + ' ' + e.currentStyle.backgroundPositionY) || '0 0'
                ),
                m = this.format(t);
              if ((-1 !== f.indexOf('%')) != (-1 !== m.indexOf('%')) && m.split(',').length < 2 && (d = ee(e, 'backgroundImage').replace(k, '')) && 'none' !== d) {
                for (s = f.split(' '), o = m.split(' '), X.setAttribute('src', d), l = 2; -1 < --l; )
                  (c = -1 !== (f = s[l]).indexOf('%')) !== (-1 !== o[l].indexOf('%')) &&
                    ((u = 0 === l ? e.offsetWidth - X.width : e.offsetHeight - X.height), (s[l] = c ? (parseFloat(f) / 100) * u + 'px' : (parseFloat(f) / u) * 100 + '%'));
                f = s.join(' ');
              }
              return this.parseComplex(e.style, f, m, r, a);
            },
            formatter: le,
          }),
          Se('backgroundSize', {
            defaultValue: '0 0',
            formatter: function (e) {
              return le(-1 === (e += '').indexOf(' ') ? e + ' ' + e : e);
            },
          }),
          Se('perspective', { defaultValue: '0px', prefix: !0 }),
          Se('perspectiveOrigin', { defaultValue: '50% 50%', prefix: !0 }),
          Se('transformStyle', { prefix: !0 }),
          Se('backfaceVisibility', { prefix: !0 }),
          Se('userSelect', { prefix: !0 }),
          Se('margin', { parser: ye('marginTop,marginRight,marginBottom,marginLeft') }),
          Se('padding', { parser: ye('paddingTop,paddingRight,paddingBottom,paddingLeft') }),
          Se('clip', {
            defaultValue: 'rect(0px,0px,0px,0px)',
            parser: function (e, t, i, n, r, a) {
              var s, o, l;
              return (
                S < 9
                  ? ((o = e.currentStyle),
                    (l = S < 8 ? ' ' : ','),
                    (s = 'rect(' + o.clipTop + l + o.clipRight + l + o.clipBottom + l + o.clipLeft + ')'),
                    (t = this.format(t).split(',').join(l)))
                  : ((s = this.format(ee(e, this.p, C, !1, this.dflt))), (t = this.format(t))),
                this.parseComplex(e.style, s, t, r, a)
              );
            },
          }),
          Se('textShadow', { defaultValue: '0px 0px 0px #999', color: !0, multi: !0 }),
          Se('autoRound,strictUnits', {
            parser: function (e, t, i, n, r) {
              return r;
            },
          }),
          Se('border', {
            defaultValue: '0px solid #000',
            parser: function (e, t, i, n, r, a) {
              var s = ee(e, 'borderTopWidth', C, !1, '0px'),
                o = this.format(t).split(' '),
                l = o[0].replace(L, '');
              return (
                'px' !== l && (s = parseFloat(s) / te(e, 'borderTopWidth', 1, l) + l),
                this.parseComplex(e.style, this.format(s + ' ' + ee(e, 'borderTopStyle', C, !1, 'solid') + ' ' + ee(e, 'borderTopColor', C, !1, '#000')), o.join(' '), r, a)
              );
            },
            color: !0,
            formatter: function (e) {
              var t = e.split(' ');
              return t[0] + ' ' + (t[1] || 'solid') + ' ' + (e.match(ge) || ['#000'])[0];
            },
          }),
          Se('borderWidth', { parser: ye('borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth') }),
          Se('float,cssFloat,styleFloat', {
            parser: function (e, t, i, n, r) {
              var a = e.style,
                s = 'cssFloat' in a ? 'cssFloat' : 'styleFloat';
              return new _e(a, s, 0, 0, r, -1, i, !1, 0, a[s], t);
            },
          });
        var Ke = function (e) {
          var t,
            i = this.t,
            n = i.filter || ee(this.data, 'filter') || '',
            r = (this.s + this.c * e) | 0;
          100 === r &&
            (-1 === n.indexOf('atrix(') && -1 === n.indexOf('radient(') && -1 === n.indexOf('oader(')
              ? (i.removeAttribute('filter'), (t = !ee(this.data, 'filter')))
              : ((i.filter = n.replace(s, '')), (t = !0))),
            t ||
              (this.xn1 && (i.filter = n = n || 'alpha(opacity=' + r + ')'),
              -1 === n.indexOf('pacity') ? (0 === r && this.xn1) || (i.filter = n + ' alpha(opacity=' + r + ')') : (i.filter = n.replace(O, 'opacity=' + r)));
        };
        Se('opacity,alpha,autoAlpha', {
          defaultValue: '1',
          parser: function (e, t, i, n, r, a) {
            var s = parseFloat(ee(e, 'opacity', C, !1, '1')),
              o = e.style,
              l = 'autoAlpha' === i;
            return (
              'string' == typeof t && '=' === t.charAt(1) && (t = ('-' === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + s),
              l && 1 === s && 'hidden' === ee(e, 'visibility', C) && 0 !== t && (s = 0),
              V
                ? (r = new _e(o, 'opacity', s, t - s, r))
                : (((r = new _e(o, 'opacity', 100 * s, 100 * (t - s), r)).xn1 = l ? 1 : 0),
                  (o.zoom = 1),
                  (r.type = 2),
                  (r.b = 'alpha(opacity=' + r.s + ')'),
                  (r.e = 'alpha(opacity=' + (r.s + r.c) + ')'),
                  (r.data = e),
                  (r.plugin = a),
                  (r.setRatio = Ke)),
              l &&
                (((r = new _e(o, 'visibility', 0, 0, r, -1, null, !1, 0, 0 !== s ? 'inherit' : 'hidden', 0 === t ? 'hidden' : 'inherit')).xs0 = 'inherit'),
                n._overwriteProps.push(r.n),
                n._overwriteProps.push(i)),
              r
            );
          },
        });
        var Qe = function (e, t) {
            t &&
              (e.removeProperty
                ? (('ms' === t.substr(0, 2) || 'webkit' === t.substr(0, 6)) && (t = '-' + t), e.removeProperty(t.replace(o, '-$1').toLowerCase()))
                : e.removeAttribute(t));
          },
          Je = function (e) {
            if (((this.t._gsClassPT = this), 1 === e || 0 === e)) {
              this.t.setAttribute('class', 0 === e ? this.b : this.e);
              for (var t = this.data, i = this.t.style; t; ) t.v ? (i[t.p] = t.v) : Qe(i, t.p), (t = t._next);
              1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null);
            } else this.t.getAttribute('class') !== this.e && this.t.setAttribute('class', this.e);
          };
        Se('className', {
          parser: function (e, t, i, n, r, a, s) {
            var o,
              l,
              c,
              u,
              d,
              h = e.getAttribute('class') || '',
              p = e.style.cssText;
            if ((((r = n._classNamePT = new _e(e, i, 0, 0, r, 2)).setRatio = Je), (r.pr = -11), (f = !0), (r.b = h), (l = ne(e, C)), (c = e._gsClassPT))) {
              for (u = {}, d = c.data; d; ) (u[d.p] = 1), (d = d._next);
              c.setRatio(1);
            }
            return (
              ((e._gsClassPT = r).e =
                '=' !== t.charAt(1) ? t : h.replace(new RegExp('(?:\\s|^)' + t.substr(2) + '(?![\\w-])'), '') + ('+' === t.charAt(0) ? ' ' + t.substr(2) : '')),
              e.setAttribute('class', r.e),
              (o = re(e, l, ne(e), s, u)),
              e.setAttribute('class', h),
              (r.data = o.firstMPT),
              (e.style.cssText = p),
              (r.xfirst = n.parse(e, o.difs, r, a))
            );
          },
        });
        var Ze = function (e) {
          if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && 'isFromStart' !== this.data.data) {
            var t,
              i,
              n,
              r,
              a,
              s = this.t.style,
              o = g.transform.parse;
            if ('all' === this.e) r = !(s.cssText = '');
            else
              for (n = (t = this.e.split(' ').join('').split(',')).length; -1 < --n; )
                (i = t[n]), g[i] && (g[i].parse === o ? (r = !0) : (i = 'transformOrigin' === i ? Ie : g[i].p)), Qe(s, i);
            r && (Qe(s, Oe), (a = this.t._gsTransform) && (a.svg && (this.t.removeAttribute('data-svg-origin'), this.t.removeAttribute('transform')), delete this.t._gsTransform));
          }
        };
        for (
          Se('clearProps', {
            parser: function (e, t, i, n, r) {
              return ((r = new _e(e, i, 0, 0, r, 2)).setRatio = Ze), (r.e = t), (r.pr = -10), (r.data = n._tween), (f = !0), r;
            },
          }),
            e = 'bezier,throwProps,physicsProps,physics2D'.split(','),
            Te = e.length;
          Te--;

        )
          Ce(e[Te]);
        ((e = q.prototype)._firstPT = e._lastParsedTransform = e._transform = null),
          (e._onInitTween = function (e, t, i, n) {
            if (!e.nodeType) return !1;
            (this._target = D = e),
              (this._tween = i),
              (this._vars = t),
              (M = n),
              (E = t.autoRound),
              (f = !1),
              (T = t.suffixMap || q.suffixMap),
              (C = Z(e, '')),
              (m = this._overwriteProps);
            var r,
              a,
              s,
              o,
              l,
              c,
              u,
              d,
              h,
              p = e.style;
            if (
              (v && '' === p.zIndex && ('auto' === (r = ee(e, 'zIndex', C)) || '' === r) && this._addLazySet(p, 'zIndex', 0),
              'string' == typeof t &&
                ((o = p.cssText),
                (r = ne(e, C)),
                (p.cssText = o + ';' + t),
                (r = re(e, r, ne(e)).difs),
                !V && w.test(t) && (r.opacity = parseFloat(RegExp.$1)),
                (t = r),
                (p.cssText = o)),
              t.className ? (this._firstPT = a = g.className.parse(e, t.className, 'className', this, null, null, t)) : (this._firstPT = a = this.parse(e, t, null)),
              this._transformType)
            ) {
              for (
                h = 3 === this._transformType,
                  Oe
                    ? y &&
                      ((v = !0),
                      '' === p.zIndex && ('auto' === (u = ee(e, 'zIndex', C)) || '' === u) && this._addLazySet(p, 'zIndex', 0),
                      b && this._addLazySet(p, 'WebkitBackfaceVisibility', this._vars.WebkitBackfaceVisibility || (h ? 'visible' : 'hidden')))
                    : (p.zoom = 1),
                  s = a;
                s && s._next;

              )
                s = s._next;
              (d = new _e(e, 'transform', 0, 0, null, 2)),
                this._linkCSSP(d, null, s),
                (d.setRatio = Oe ? Ue : Ge),
                (d.data = this._transform || Ve(e, C, !0)),
                (d.tween = i),
                (d.pr = -1),
                m.pop();
            }
            if (f) {
              for (; a; ) {
                for (c = a._next, s = o; s && s.pr > a.pr; ) s = s._next;
                (a._prev = s ? s._prev : l) ? (a._prev._next = a) : (o = a), (a._next = s) ? (s._prev = a) : (l = a), (a = c);
              }
              this._firstPT = o;
            }
            return !0;
          }),
          (e.parse = function (e, t, i, n) {
            var r,
              a,
              s,
              o,
              l,
              c,
              u,
              d,
              h,
              p,
              f = e.style;
            for (r in t)
              'function' == typeof (c = t[r]) && (c = c(M, D)),
                (a = g[r])
                  ? (i = a.parse(e, c, r, this, i, n, t))
                  : ((l = ee(e, r, C) + ''),
                    (h = 'string' == typeof c),
                    'color' === r || 'fill' === r || 'stroke' === r || -1 !== r.indexOf('Color') || (h && x.test(c))
                      ? (h || (c = (3 < (c = fe(c)).length ? 'rgba(' : 'rgb(') + c.join(',') + ')'), (i = xe(f, r, l, c, !0, 'transparent', i, 0, n)))
                      : h && N.test(c)
                      ? (i = xe(f, r, l, c, !0, null, i, 0, n))
                      : ((u = (s = parseFloat(l)) || 0 === s ? l.substr((s + '').length) : ''),
                        ('' === l || 'auto' === l) &&
                          ('width' === r || 'height' === r
                            ? ((s = oe(e, r, C)), (u = 'px'))
                            : 'left' === r || 'top' === r
                            ? ((s = ie(e, r, C)), (u = 'px'))
                            : ((s = 'opacity' !== r ? 0 : 1), (u = ''))),
                        (p = h && '=' === c.charAt(1))
                          ? ((o = parseInt(c.charAt(0) + '1', 10)), (c = c.substr(2)), (o *= parseFloat(c)), (d = c.replace(L, '')))
                          : ((o = parseFloat(c)), (d = h ? c.replace(L, '') : '')),
                        '' === d && (d = r in T ? T[r] : u),
                        (c = o || 0 === o ? (p ? o + s : o) + d : t[r]),
                        u !== d &&
                          '' !== d &&
                          (o || 0 === o) &&
                          s &&
                          ((s = te(e, r, s, u)),
                          '%' === d
                            ? ((s /= te(e, r, 100, '%') / 100), !0 !== t.strictUnits && (l = s + '%'))
                            : 'em' === d || 'rem' === d || 'vw' === d || 'vh' === d
                            ? (s /= te(e, r, 1, d))
                            : 'px' !== d && ((o = te(e, r, o, d)), (d = 'px')),
                          p && (o || 0 === o) && (c = o + s + d)),
                        p && (o += s),
                        (!s && 0 !== s) || (!o && 0 !== o)
                          ? void 0 !== f[r] && (c || (c + '' != 'NaN' && null != c))
                            ? ((i = new _e(f, r, o || s || 0, 0, i, -1, r, !1, 0, l, c)).xs0 = 'none' !== c || ('display' !== r && -1 === r.indexOf('Style')) ? c : l)
                            : U('invalid ' + r + ' tween value: ' + t[r])
                          : ((i = new _e(f, r, s, o - s, i, 0, r, !1 !== E && ('px' === d || 'zIndex' === r), 0, l, c)).xs0 = d))),
                n && i && !i.plugin && (i.plugin = n);
            return i;
          }),
          (e.setRatio = function (e) {
            var t,
              i,
              n,
              r = this._firstPT,
              a = 1e-6;
            if (1 !== e || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
              if (e || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                for (; r; ) {
                  if (((t = r.c * e + r.s), r.r ? (t = Math.round(t)) : t < a && -a < t && (t = 0), r.type))
                    if (1 === r.type)
                      if (2 === (n = r.l)) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                      else if (3 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                      else if (4 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                      else if (5 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                      else {
                        for (i = r.xs0 + t + r.xs1, n = 1; n < r.l; n++) i += r['xn' + n] + r['xs' + (n + 1)];
                        r.t[r.p] = i;
                      }
                    else -1 === r.type ? (r.t[r.p] = r.xs0) : r.setRatio && r.setRatio(e);
                  else r.t[r.p] = t + r.xs0;
                  r = r._next;
                }
              else for (; r; ) 2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(e), (r = r._next);
            else
              for (; r; ) {
                if (2 !== r.type)
                  if (r.r && -1 !== r.type)
                    if (((t = Math.round(r.s + r.c)), r.type)) {
                      if (1 === r.type) {
                        for (n = r.l, i = r.xs0 + t + r.xs1, n = 1; n < r.l; n++) i += r['xn' + n] + r['xs' + (n + 1)];
                        r.t[r.p] = i;
                      }
                    } else r.t[r.p] = t + r.xs0;
                  else r.t[r.p] = r.e;
                else r.setRatio(e);
                r = r._next;
              }
          }),
          (e._enableTransforms = function (e) {
            (this._transform = this._transform || Ve(this._target, C, !0)), (this._transformType = (this._transform.svg && Ee) || (!e && 3 !== this._transformType) ? 2 : 3);
          });
        var et = function () {
          (this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
        };
        (e._addLazySet = function (e, t, i) {
          var n = (this._firstPT = new _e(e, t, 0, 0, this._firstPT, 2));
          (n.e = i), (n.setRatio = et), (n.data = this);
        }),
          (e._linkCSSP = function (e, t, i, n) {
            return (
              e &&
                (t && (t._prev = e),
                e._next && (e._next._prev = e._prev),
                e._prev ? (e._prev._next = e._next) : this._firstPT === e && ((this._firstPT = e._next), (n = !0)),
                i ? (i._next = e) : n || null !== this._firstPT || (this._firstPT = e),
                (e._next = t),
                (e._prev = i)),
              e
            );
          }),
          (e._mod = function (e) {
            for (var t = this._firstPT; t; ) 'function' == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1), (t = t._next);
          }),
          (e._kill = function (e) {
            var t,
              i,
              n,
              r = e;
            if (e.autoAlpha || e.alpha) {
              for (i in ((r = {}), e)) r[i] = e[i];
              (r.opacity = 1), r.autoAlpha && (r.visibility = 1);
            }
            for (
              e.className &&
                (t = this._classNamePT) &&
                ((n = t.xfirst) && n._prev ? this._linkCSSP(n._prev, t._next, n._prev._prev) : n === this._firstPT && (this._firstPT = t._next),
                t._next && this._linkCSSP(t._next, t._next._next, n._prev),
                (this._classNamePT = null)),
                t = this._firstPT;
              t;

            )
              t.plugin && t.plugin !== i && t.plugin._kill && (t.plugin._kill(e), (i = t.plugin)), (t = t._next);
            return a.prototype._kill.call(this, r);
          });
        var tt = function (e, t, i) {
          var n, r, a, s;
          if (e.slice) for (r = e.length; -1 < --r; ) tt(e[r], t, i);
          else
            for (r = (n = e.childNodes).length; -1 < --r; )
              (s = (a = n[r]).type), a.style && (t.push(ne(a)), i && i.push(a)), (1 !== s && 9 !== s && 11 !== s) || !a.childNodes.length || tt(a, t, i);
        };
        return (
          (q.cascadeTo = function (e, t, i) {
            var n,
              r,
              a,
              s,
              o = B.to(e, t, i),
              l = [o],
              c = [],
              u = [],
              d = [],
              h = B._internals.reservedProps;
            for (e = o._targets || o.target, tt(e, c, d), o.render(t, !0, !0), tt(e, u), o.render(0, !0, !0), o._enabled(!0), n = d.length; -1 < --n; )
              if ((r = re(d[n], c[n], u[n])).firstMPT) {
                for (a in ((r = r.difs), i)) h[a] && (r[a] = i[a]);
                for (a in ((s = {}), r)) s[a] = c[n][a];
                l.push(B.fromTo(d[n], t, s, r));
              }
            return l;
          }),
          a.activate([q]),
          q
        );
      },
      !0
    ),
    (e = _gsScope._gsDefine.plugin({
      propName: 'roundProps',
      version: '1.6.0',
      priority: -1,
      API: 2,
      init: function (e, t, i) {
        return (this._tween = i), !0;
      },
    })),
    (l = function (e) {
      for (; e; ) e.f || e.blob || (e.m = Math.round), (e = e._next);
    }),
    ((t = e.prototype)._onInitAllProps = function () {
      for (
        var e, t, i, n = this._tween, r = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(','), a = r.length, s = {}, o = n._propLookup.roundProps;
        -1 < --a;

      )
        s[r[a]] = Math.round;
      for (a = r.length; -1 < --a; )
        for (e = r[a], t = n._firstPT; t; )
          (i = t._next),
            t.pg
              ? t.t._mod(s)
              : t.n === e &&
                (2 === t.f && t.t
                  ? l(t.t._firstPT)
                  : (this._add(t.t, e, t.s, t.c),
                    i && (i._prev = t._prev),
                    t._prev ? (t._prev._next = i) : n._firstPT === t && (n._firstPT = i),
                    (t._next = t._prev = null),
                    (n._propLookup[e] = o))),
            (t = i);
      return !1;
    }),
    (t._add = function (e, t, i, n) {
      this._addTween(e, t, i, i + n, t, Math.round), this._overwriteProps.push(t);
    }),
    _gsScope._gsDefine.plugin({
      propName: 'attr',
      API: 2,
      version: '0.6.0',
      init: function (e, t, i, n) {
        var r, a;
        if ('function' != typeof e.setAttribute) return !1;
        for (r in t) 'function' == typeof (a = t[r]) && (a = a(n, e)), this._addTween(e, 'setAttribute', e.getAttribute(r) + '', a + '', r, !1, r), this._overwriteProps.push(r);
        return !0;
      },
    }),
    (_gsScope._gsDefine.plugin({
      propName: 'directionalRotation',
      version: '0.3.0',
      API: 2,
      init: function (e, t, i, n) {
        'object' != typeof t && (t = { rotation: t }), (this.finals = {});
        var r,
          a,
          s,
          o,
          l,
          c,
          u = !0 === t.useRadians ? 2 * Math.PI : 360,
          d = 1e-6;
        for (r in t)
          'useRadians' !== r &&
            ('function' == typeof (o = t[r]) && (o = o(n, e)),
            (a = (c = (o + '').split('_'))[0]),
            (s = parseFloat('function' != typeof e[r] ? e[r] : e[r.indexOf('set') || 'function' != typeof e['get' + r.substr(3)] ? r : 'get' + r.substr(3)]())),
            (l = (o = this.finals[r] = 'string' == typeof a && '=' === a.charAt(1) ? s + parseInt(a.charAt(0) + '1', 10) * Number(a.substr(2)) : Number(a) || 0) - s),
            c.length &&
              (-1 !== (a = c.join('_')).indexOf('short') && (l %= u) !== l % (u / 2) && (l = l < 0 ? l + u : l - u),
              -1 !== a.indexOf('_cw') && l < 0
                ? (l = ((l + 9999999999 * u) % u) - ((l / u) | 0) * u)
                : -1 !== a.indexOf('ccw') && 0 < l && (l = ((l - 9999999999 * u) % u) - ((l / u) | 0) * u)),
            (d < l || l < -d) && (this._addTween(e, r, s, s + l, r), this._overwriteProps.push(r)));
        return !0;
      },
      set: function (e) {
        var t;
        if (1 !== e) this._super.setRatio.call(this, e);
        else for (t = this._firstPT; t; ) t.f ? t.t[t.p](this.finals[t.p]) : (t.t[t.p] = this.finals[t.p]), (t = t._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      'easing.Back',
      ['easing.Ease'],
      function (g) {
        var t,
          i,
          e,
          n = _gsScope.GreenSockGlobals || _gsScope,
          r = n.com.greensock,
          a = 2 * Math.PI,
          s = Math.PI / 2,
          o = r._class,
          l = function (e, t) {
            var i = o('easing.' + e, function () {}, !0),
              n = (i.prototype = new g());
            return (n.constructor = i), (n.getRatio = t), i;
          },
          c = g.register || function () {},
          u = function (e, t, i, n) {
            var r = o('easing.' + e, { easeOut: new t(), easeIn: new i(), easeInOut: new n() }, !0);
            return c(r, e), r;
          },
          v = function (e, t, i) {
            (this.t = e), (this.v = t), i && ((((this.next = i).prev = this).c = i.v - t), (this.gap = i.t - e));
          },
          d = function (e, t) {
            var i = o(
                'easing.' + e,
                function (e) {
                  (this._p1 = e || 0 === e ? e : 1.70158), (this._p2 = 1.525 * this._p1);
                },
                !0
              ),
              n = (i.prototype = new g());
            return (
              (n.constructor = i),
              (n.getRatio = t),
              (n.config = function (e) {
                return new i(e);
              }),
              i
            );
          },
          h = u(
            'Back',
            d('BackOut', function (e) {
              return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1;
            }),
            d('BackIn', function (e) {
              return e * e * ((this._p1 + 1) * e - this._p1);
            }),
            d('BackInOut', function (e) {
              return (e *= 2) < 1 ? 0.5 * e * e * ((this._p2 + 1) * e - this._p2) : 0.5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2);
            })
          ),
          p = o(
            'easing.SlowMo',
            function (e, t, i) {
              (t = t || 0 === t ? t : 0.7),
                null == e ? (e = 0.7) : 1 < e && (e = 1),
                (this._p = 1 !== e ? t : 0),
                (this._p1 = (1 - e) / 2),
                (this._p2 = e),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = !0 === i);
            },
            !0
          ),
          f = (p.prototype = new g());
        return (
          (f.constructor = p),
          (f.getRatio = function (e) {
            var t = e + (0.5 - e) * this._p;
            return e < this._p1
              ? this._calcEnd
                ? 1 - (e = 1 - e / this._p1) * e
                : t - (e = 1 - e / this._p1) * e * e * e * t
              : e > this._p3
              ? this._calcEnd
                ? 1 - (e = (e - this._p3) / this._p1) * e
                : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e
              : this._calcEnd
              ? 1
              : t;
          }),
          (p.ease = new p(0.7, 0.7)),
          (f.config = p.config = function (e, t, i) {
            return new p(e, t, i);
          }),
          ((f = (t = o(
            'easing.SteppedEase',
            function (e) {
              (e = e || 1), (this._p1 = 1 / e), (this._p2 = e + 1);
            },
            !0
          )).prototype = new g()).constructor = t),
          (f.getRatio = function (e) {
            return e < 0 ? (e = 0) : 1 <= e && (e = 0.999999999), ((this._p2 * e) >> 0) * this._p1;
          }),
          (f.config = t.config = function (e) {
            return new t(e);
          }),
          ((f = (i = o(
            'easing.RoughEase',
            function (e) {
              for (
                var t,
                  i,
                  n,
                  r,
                  a,
                  s,
                  o = (e = e || {}).taper || 'none',
                  l = [],
                  c = 0,
                  u = 0 | (e.points || 20),
                  d = u,
                  h = !1 !== e.randomize,
                  p = !0 === e.clamp,
                  f = e.template instanceof g ? e.template : null,
                  m = 'number' == typeof e.strength ? 0.4 * e.strength : 0.4;
                -1 < --d;

              )
                (t = h ? Math.random() : (1 / u) * d),
                  (i = f ? f.getRatio(t) : t),
                  'none' === o ? (n = m) : 'out' === o ? (n = (r = 1 - t) * r * m) : 'in' === o ? (n = t * t * m) : (n = (r = t < 0.5 ? 2 * t : 2 * (1 - t)) * r * 0.5 * m),
                  h ? (i += Math.random() * n - 0.5 * n) : d % 2 ? (i += 0.5 * n) : (i -= 0.5 * n),
                  p && (1 < i ? (i = 1) : i < 0 && (i = 0)),
                  (l[c++] = { x: t, y: i });
              for (
                l.sort(function (e, t) {
                  return e.x - t.x;
                }),
                  s = new v(1, 1, null),
                  d = u;
                -1 < --d;

              )
                (a = l[d]), (s = new v(a.x, a.y, s));
              this._prev = new v(0, 0, 0 !== s.t ? s : s.next);
            },
            !0
          )).prototype = new g()).constructor = i),
          (f.getRatio = function (e) {
            var t = this._prev;
            if (e > t.t) {
              for (; t.next && e >= t.t; ) t = t.next;
              t = t.prev;
            } else for (; t.prev && e <= t.t; ) t = t.prev;
            return (this._prev = t).v + ((e - t.t) / t.gap) * t.c;
          }),
          (f.config = function (e) {
            return new i(e);
          }),
          (i.ease = new i()),
          u(
            'Bounce',
            l('BounceOut', function (e) {
              return e < 1 / 2.75
                ? 7.5625 * e * e
                : e < 2 / 2.75
                ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                : e < 2.5 / 2.75
                ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
            }),
            l('BounceIn', function (e) {
              return (e = 1 - e) < 1 / 2.75
                ? 1 - 7.5625 * e * e
                : e < 2 / 2.75
                ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                : e < 2.5 / 2.75
                ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
            }),
            l('BounceInOut', function (e) {
              var t = e < 0.5;
              return (
                (e =
                  (e = t ? 1 - 2 * e : 2 * e - 1) < 1 / 2.75
                    ? 7.5625 * e * e
                    : e < 2 / 2.75
                    ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                    : e < 2.5 / 2.75
                    ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                    : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375),
                t ? 0.5 * (1 - e) : 0.5 * e + 0.5
              );
            })
          ),
          u(
            'Circ',
            l('CircOut', function (e) {
              return Math.sqrt(1 - (e -= 1) * e);
            }),
            l('CircIn', function (e) {
              return -(Math.sqrt(1 - e * e) - 1);
            }),
            l('CircInOut', function (e) {
              return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
            })
          ),
          u(
            'Elastic',
            (e = function (e, t, i) {
              var n = o(
                  'easing.' + e,
                  function (e, t) {
                    (this._p1 = 1 <= e ? e : 1), (this._p2 = (t || i) / (e < 1 ? e : 1)), (this._p3 = (this._p2 / a) * (Math.asin(1 / this._p1) || 0)), (this._p2 = a / this._p2);
                  },
                  !0
                ),
                r = (n.prototype = new g());
              return (
                (r.constructor = n),
                (r.getRatio = t),
                (r.config = function (e, t) {
                  return new n(e, t);
                }),
                n
              );
            })(
              'ElasticOut',
              function (e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1;
              },
              0.3
            ),
            e(
              'ElasticIn',
              function (e) {
                return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2);
              },
              0.3
            ),
            e(
              'ElasticInOut',
              function (e) {
                return (e *= 2) < 1
                  ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -0.5
                  : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * 0.5 + 1;
              },
              0.45
            )
          ),
          u(
            'Expo',
            l('ExpoOut', function (e) {
              return 1 - Math.pow(2, -10 * e);
            }),
            l('ExpoIn', function (e) {
              return Math.pow(2, 10 * (e - 1)) - 0.001;
            }),
            l('ExpoInOut', function (e) {
              return (e *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (e - 1)) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
            })
          ),
          u(
            'Sine',
            l('SineOut', function (e) {
              return Math.sin(e * s);
            }),
            l('SineIn', function (e) {
              return 1 - Math.cos(e * s);
            }),
            l('SineInOut', function (e) {
              return -0.5 * (Math.cos(Math.PI * e) - 1);
            })
          ),
          o(
            'easing.EaseLookup',
            {
              find: function (e) {
                return g.map[e];
              },
            },
            !0
          ),
          c(n.SlowMo, 'SlowMo', 'ease,'),
          c(i, 'RoughEase', 'ease,'),
          c(t, 'SteppedEase', 'ease,'),
          h
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (p, f) {
    'use strict';
    var t,
      i,
      m = {},
      g = (p.GreenSockGlobals = p.GreenSockGlobals || p);
    if (!g.TweenLite) {
      var e,
        n,
        r,
        v,
        y,
        b = function (e) {
          var t,
            i = e.split('.'),
            n = g;
          for (t = 0; t < i.length; t++) n[i[t]] = n = n[i[t]] || {};
          return n;
        },
        d = b('com.greensock'),
        _ = 1e-10,
        l = function (e) {
          var t,
            i = [],
            n = e.length;
          for (t = 0; t !== n; i.push(e[t++]));
          return i;
        },
        w = function () {},
        x =
          ((t = Object.prototype.toString),
          (i = t.call([])),
          function (e) {
            return null != e && (e instanceof Array || ('object' == typeof e && !!e.push && t.call(e) === i));
          }),
        T = {},
        k = function (l, c, u, d) {
          (this.sc = T[l] ? T[l].sc : []), ((T[l] = this).gsClass = null), (this.func = u);
          var h = [];
          (this.check = function (e) {
            for (var t, i, n, r, a, s = c.length, o = s; -1 < --s; ) (t = T[c[s]] || new k(c[s], [])).gsClass ? ((h[s] = t.gsClass), o--) : e && t.sc.push(this);
            if (0 === o && u) {
              if (((n = (i = ('com.greensock.' + l).split('.')).pop()), (r = b(i.join('.'))[n] = this.gsClass = u.apply(u, h)), d))
                if (((g[n] = m[n] = r), !(a = 'undefined' != typeof module && module.exports) && 'function' == typeof define && define.amd))
                  define((p.GreenSockAMDPath ? p.GreenSockAMDPath + '/' : '') + l.split('.').pop(), [], function () {
                    return r;
                  });
                else if (a)
                  if (l === f) for (s in ((module.exports = m[f] = r), m)) r[s] = m[s];
                  else m[f] && (m[f][n] = r);
              for (s = 0; s < this.sc.length; s++) this.sc[s].check();
            }
          }),
            this.check(!0);
        },
        a = (p._gsDefine = function (e, t, i, n) {
          return new k(e, t, i, n);
        }),
        h = (d._class = function (e, t, i) {
          return (
            (t = t || function () {}),
            a(
              e,
              [],
              function () {
                return t;
              },
              i
            ),
            t
          );
        });
      a.globals = g;
      var s = [0, 0, 1, 1],
        S = h(
          'easing.Ease',
          function (e, t, i, n) {
            (this._func = e), (this._type = i || 0), (this._power = n || 0), (this._params = t ? s.concat(t) : s);
          },
          !0
        ),
        C = (S.map = {}),
        o = (S.register = function (e, t, i, n) {
          for (var r, a, s, o, l = t.split(','), c = l.length, u = (i || 'easeIn,easeOut,easeInOut').split(','); -1 < --c; )
            for (a = l[c], r = n ? h('easing.' + a, null, !0) : d.easing[a] || {}, s = u.length; -1 < --s; )
              (o = u[s]), (C[a + '.' + o] = C[o + a] = r[o] = e.getRatio ? e : e[o] || new e());
        });
      for (
        (r = S.prototype)._calcEnd = !1,
          r.getRatio = function (e) {
            if (this._func) return (this._params[0] = e), this._func.apply(null, this._params);
            var t = this._type,
              i = this._power,
              n = 1 === t ? 1 - e : 2 === t ? e : e < 0.5 ? 2 * e : 2 * (1 - e);
            return (
              1 === i ? (n *= n) : 2 === i ? (n *= n * n) : 3 === i ? (n *= n * n * n) : 4 === i && (n *= n * n * n * n),
              1 === t ? 1 - n : 2 === t ? n : e < 0.5 ? n / 2 : 1 - n / 2
            );
          },
          n = (e = ['Linear', 'Quad', 'Cubic', 'Quart', 'Quint,Strong']).length;
        -1 < --n;

      )
        (r = e[n] + ',Power' + n),
          o(new S(null, null, 1, n), r, 'easeOut', !0),
          o(new S(null, null, 2, n), r, 'easeIn' + (0 === n ? ',easeNone' : '')),
          o(new S(null, null, 3, n), r, 'easeInOut');
      (C.linear = d.easing.Linear.easeIn), (C.swing = d.easing.Quad.easeInOut);
      var E = h('events.EventDispatcher', function (e) {
        (this._listeners = {}), (this._eventTarget = e || this);
      });
      ((r = E.prototype).addEventListener = function (e, t, i, n, r) {
        r = r || 0;
        var a,
          s,
          o = this._listeners[e],
          l = 0;
        for (this !== v || y || v.wake(), null == o && (this._listeners[e] = o = []), s = o.length; -1 < --s; )
          (a = o[s]).c === t && a.s === i ? o.splice(s, 1) : 0 === l && a.pr < r && (l = s + 1);
        o.splice(l, 0, { c: t, s: i, up: n, pr: r });
      }),
        (r.removeEventListener = function (e, t) {
          var i,
            n = this._listeners[e];
          if (n) for (i = n.length; -1 < --i; ) if (n[i].c === t) return void n.splice(i, 1);
        }),
        (r.dispatchEvent = function (e) {
          var t,
            i,
            n,
            r = this._listeners[e];
          if (r)
            for (1 < (t = r.length) && (r = r.slice(0)), i = this._eventTarget; -1 < --t; ) (n = r[t]) && (n.up ? n.c.call(n.s || i, { type: e, target: i }) : n.c.call(n.s || i));
        });
      var D = p.requestAnimationFrame,
        M = p.cancelAnimationFrame,
        P =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        A = P();
      for (n = (e = ['ms', 'moz', 'webkit', 'o']).length; -1 < --n && !D; )
        (D = p[e[n] + 'RequestAnimationFrame']), (M = p[e[n] + 'CancelAnimationFrame'] || p[e[n] + 'CancelRequestAnimationFrame']);
      h('Ticker', function (e, t) {
        var r,
          a,
          s,
          o,
          l,
          c = this,
          u = P(),
          i = !(!1 === t || !D) && 'auto',
          d = 500,
          h = 33,
          p = 'tick',
          f = function (e) {
            var t,
              i,
              n = P() - A;
            d < n && (u += n - h),
              (A += n),
              (c.time = (A - u) / 1e3),
              (t = c.time - l),
              (!r || 0 < t || !0 === e) && (c.frame++, (l += t + (o <= t ? 0.004 : o - t)), (i = !0)),
              !0 !== e && (s = a(f)),
              i && c.dispatchEvent(p);
          };
        E.call(c),
          (c.time = c.frame = 0),
          (c.tick = function () {
            f(!0);
          }),
          (c.lagSmoothing = function (e, t) {
            (d = e || 1 / _), (h = Math.min(t, d, 0));
          }),
          (c.sleep = function () {
            null != s && (i && M ? M(s) : clearTimeout(s), (a = w), (s = null), c === v && (y = !1));
          }),
          (c.wake = function (e) {
            null !== s ? c.sleep() : e ? (u += -A + (A = P())) : 10 < c.frame && (A = P() - d + 5),
              (a =
                0 === r
                  ? w
                  : i && D
                  ? D
                  : function (e) {
                      return setTimeout(e, (1e3 * (l - c.time) + 1) | 0);
                    }),
              c === v && (y = !0),
              f(2);
          }),
          (c.fps = function (e) {
            return arguments.length ? ((o = 1 / ((r = e) || 60)), (l = this.time + o), void c.wake()) : r;
          }),
          (c.useRAF = function (e) {
            return arguments.length ? (c.sleep(), (i = e), void c.fps(r)) : i;
          }),
          c.fps(e),
          setTimeout(function () {
            'auto' === i && c.frame < 5 && 'hidden' !== document.visibilityState && c.useRAF(!1);
          }, 1500);
      }),
        ((r = d.Ticker.prototype = new d.events.EventDispatcher()).constructor = d.Ticker);
      var c = h('core.Animation', function (e, t) {
        if (
          ((this.vars = t = t || {}),
          (this._duration = this._totalDuration = e || 0),
          (this._delay = Number(t.delay) || 0),
          (this._timeScale = 1),
          (this._active = !0 === t.immediateRender),
          (this.data = t.data),
          (this._reversed = !0 === t.reversed),
          U)
        ) {
          y || v.wake();
          var i = this.vars.useFrames ? G : U;
          i.add(this, i._time), this.vars.paused && this.paused(!0);
        }
      });
      (v = c.ticker = new d.Ticker()),
        ((r = c.prototype)._dirty = r._gc = r._initted = r._paused = !1),
        (r._totalTime = r._time = 0),
        (r._rawPrevTime = -1),
        (r._next = r._last = r._onUpdate = r._timeline = r.timeline = null),
        (r._paused = !1);
      var u = function () {
        y && 2e3 < P() - A && v.wake(), setTimeout(u, 2e3);
      };
      u(),
        (r.play = function (e, t) {
          return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
        }),
        (r.pause = function (e, t) {
          return null != e && this.seek(e, t), this.paused(!0);
        }),
        (r.resume = function (e, t) {
          return null != e && this.seek(e, t), this.paused(!1);
        }),
        (r.seek = function (e, t) {
          return this.totalTime(Number(e), !1 !== t);
        }),
        (r.restart = function (e, t) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(e ? -this._delay : 0, !1 !== t, !0);
        }),
        (r.reverse = function (e, t) {
          return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1);
        }),
        (r.render = function () {}),
        (r.invalidate = function () {
          return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (this._gc || !this.timeline) && this._enabled(!0), this;
        }),
        (r.isActive = function () {
          var e,
            t = this._timeline,
            i = this._startTime;
          return !t || (!this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && e < i + this.totalDuration() / this._timeScale);
        }),
        (r._enabled = function (e, t) {
          return (
            y || v.wake(),
            (this._gc = !e),
            (this._active = this.isActive()),
            !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)),
            !1
          );
        }),
        (r._kill = function () {
          return this._enabled(!1, !1);
        }),
        (r.kill = function (e, t) {
          return this._kill(e, t), this;
        }),
        (r._uncache = function (e) {
          for (var t = e ? this : this.timeline; t; ) (t._dirty = !0), (t = t.timeline);
          return this;
        }),
        (r._swapSelfInParams = function (e) {
          for (var t = e.length, i = e.concat(); -1 < --t; ) '{self}' === e[t] && (i[t] = this);
          return i;
        }),
        (r._callback = function (e) {
          var t = this.vars,
            i = t[e],
            n = t[e + 'Params'],
            r = t[e + 'Scope'] || t.callbackScope || this;
          switch (n ? n.length : 0) {
            case 0:
              i.call(r);
              break;
            case 1:
              i.call(r, n[0]);
              break;
            case 2:
              i.call(r, n[0], n[1]);
              break;
            default:
              i.apply(r, n);
          }
        }),
        (r.eventCallback = function (e, t, i, n) {
          if ('on' === (e || '').substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[e];
            null == t ? delete r[e] : ((r[e] = t), (r[e + 'Params'] = x(i) && -1 !== i.join('').indexOf('{self}') ? this._swapSelfInParams(i) : i), (r[e + 'Scope'] = n)),
              'onUpdate' === e && (this._onUpdate = t);
          }
          return this;
        }),
        (r.delay = function (e) {
          return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), (this._delay = e), this) : this._delay;
        }),
        (r.duration = function (e) {
          return arguments.length
            ? ((this._duration = this._totalDuration = e),
              this._uncache(!0),
              this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration);
        }),
        (r.totalDuration = function (e) {
          return (this._dirty = !1), arguments.length ? this.duration(e) : this._totalDuration;
        }),
        (r.time = function (e, t) {
          return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time;
        }),
        (r.totalTime = function (e, t, i) {
          if ((y || v.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if ((e < 0 && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming)) {
              this._dirty && this.totalDuration();
              var n = this._totalDuration,
                r = this._timeline;
              if (
                (n < e && !i && (e = n),
                (this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - e : e) / this._timeScale),
                r._dirty || this._uncache(!1),
                r._timeline)
              )
                for (; r._timeline; ) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), (r = r._timeline);
            }
            this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (N.length && Q(), this.render(e, t, !1), N.length && Q());
          }
          return this;
        }),
        (r.progress = r.totalProgress = function (e, t) {
          var i = this.duration();
          return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio;
        }),
        (r.startTime = function (e) {
          return arguments.length
            ? (e !== this._startTime && ((this._startTime = e), this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this)
            : this._startTime;
        }),
        (r.endTime = function (e) {
          return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale;
        }),
        (r.timeScale = function (e) {
          if (!arguments.length) return this._timeScale;
          if (((e = e || _), this._timeline && this._timeline.smoothChildTiming)) {
            var t = this._pauseTime,
              i = t || 0 === t ? t : this._timeline.totalTime();
            this._startTime = i - ((i - this._startTime) * this._timeScale) / e;
          }
          return (this._timeScale = e), this._uncache(!1);
        }),
        (r.reversed = function (e) {
          return arguments.length
            ? (e != this._reversed &&
                ((this._reversed = e), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
              this)
            : this._reversed;
        }),
        (r.paused = function (e) {
          if (!arguments.length) return this._paused;
          var t,
            i,
            n = this._timeline;
          return (
            e != this._paused &&
              n &&
              (y || e || v.wake(),
              (i = (t = n.rawTime()) - this._pauseTime),
              !e && n.smoothChildTiming && ((this._startTime += i), this._uncache(!1)),
              (this._pauseTime = e ? t : null),
              (this._paused = e),
              (this._active = this.isActive()),
              !e &&
                0 !== i &&
                this._initted &&
                this.duration() &&
                ((t = n.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale), this.render(t, t === this._totalTime, !0))),
            this._gc && !e && this._enabled(!0, !1),
            this
          );
        });
      var L = h('core.SimpleTimeline', function (e) {
        c.call(this, 0, e), (this.autoRemoveChildren = this.smoothChildTiming = !0);
      });
      ((r = L.prototype = new c()).constructor = L),
        (r.kill()._gc = !1),
        (r._first = r._last = r._recent = null),
        (r._sortChildren = !1),
        (r.add = r.insert = function (e, t) {
          var i, n;
          if (
            ((e._startTime = Number(t || 0) + e._delay),
            e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale),
            e.timeline && e.timeline._remove(e, !0),
            (e.timeline = e._timeline = this),
            e._gc && e._enabled(!0, !0),
            (i = this._last),
            this._sortChildren)
          )
            for (n = e._startTime; i && i._startTime > n; ) i = i._prev;
          return (
            i ? ((e._next = i._next), (i._next = e)) : ((e._next = this._first), (this._first = e)),
            e._next ? (e._next._prev = e) : (this._last = e),
            (e._prev = i),
            (this._recent = e),
            this._timeline && this._uncache(!0),
            this
          );
        }),
        (r._remove = function (e, t) {
          return (
            e.timeline === this &&
              (t || e._enabled(!1, !0),
              e._prev ? (e._prev._next = e._next) : this._first === e && (this._first = e._next),
              e._next ? (e._next._prev = e._prev) : this._last === e && (this._last = e._prev),
              (e._next = e._prev = e.timeline = null),
              e === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
            this
          );
        }),
        (r.render = function (e, t, i) {
          var n,
            r = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = e; r; )
            (n = r._next),
              (r._active || (e >= r._startTime && !r._paused)) &&
                (r._reversed
                  ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i)
                  : r.render((e - r._startTime) * r._timeScale, t, i)),
              (r = n);
        }),
        (r.rawTime = function () {
          return y || v.wake(), this._totalTime;
        });
      var O = h(
          'TweenLite',
          function (e, t, i) {
            if ((c.call(this, t, i), (this.render = O.prototype.render), null == e)) throw 'Cannot tween a null target.';
            this.target = e = 'string' != typeof e ? e : O.selector(e) || e;
            var n,
              r,
              a,
              s = e.jquery || (e.length && e !== p && e[0] && (e[0] === p || (e[0].nodeType && e[0].style && !e.nodeType))),
              o = this.vars.overwrite;
            if (
              ((this._overwrite = o = null == o ? V[O.defaultOverwrite] : 'number' == typeof o ? o >> 0 : V[o]),
              (s || e instanceof Array || (e.push && x(e))) && 'number' != typeof e[0])
            )
              for (this._targets = a = l(e), this._propLookup = [], this._siblings = [], n = 0; n < a.length; n++)
                (r = a[n])
                  ? 'string' != typeof r
                    ? r.length && r !== p && r[0] && (r[0] === p || (r[0].nodeType && r[0].style && !r.nodeType))
                      ? (a.splice(n--, 1), (this._targets = a = a.concat(l(r))))
                      : ((this._siblings[n] = J(r, this, !1)), 1 === o && 1 < this._siblings[n].length && ee(r, this, null, 1, this._siblings[n]))
                    : 'string' == typeof (r = a[n--] = O.selector(r)) && a.splice(n + 1, 1)
                  : a.splice(n--, 1);
            else (this._propLookup = {}), (this._siblings = J(e, this, !1)), 1 === o && 1 < this._siblings.length && ee(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || (0 === t && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -_), this.render(Math.min(0, -this._delay)));
          },
          !0
        ),
        R = function (e) {
          return e && e.length && e !== p && e[0] && (e[0] === p || (e[0].nodeType && e[0].style && !e.nodeType));
        },
        I = function (e, t) {
          var i,
            n = {};
          for (i in e)
            W[i] ||
              (i in t && 'transform' !== i && 'x' !== i && 'y' !== i && 'width' !== i && 'height' !== i && 'className' !== i && 'border' !== i) ||
              !(!q[i] || (q[i] && q[i]._autoCSS)) ||
              ((n[i] = e[i]), delete e[i]);
          e.css = n;
        };
      ((r = O.prototype = new c()).constructor = O),
        (r.kill()._gc = !1),
        (r.ratio = 0),
        (r._firstPT = r._targets = r._overwrittenProps = r._startAt = null),
        (r._notifyPluginsOfEnabled = r._lazy = !1),
        (O.version = '1.19.0'),
        (O.defaultEase = r._ease = new S(null, null, 1, 1)),
        (O.defaultOverwrite = 'auto'),
        (O.ticker = v),
        (O.autoSleep = 120),
        (O.lagSmoothing = function (e, t) {
          v.lagSmoothing(e, t);
        }),
        (O.selector =
          p.$ ||
          p.jQuery ||
          function (e) {
            var t = p.$ || p.jQuery;
            return t
              ? (O.selector = t)(e)
              : 'undefined' == typeof document
              ? e
              : document.querySelectorAll
              ? document.querySelectorAll(e)
              : document.getElementById('#' === e.charAt(0) ? e.substr(1) : e);
          });
      var N = [],
        z = {},
        F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        H = function (e) {
          for (var t, i = this._firstPT, n = 1e-6; i; )
            (t = i.blob ? (e ? this.join('') : this.start) : i.c * e + i.s),
              i.m ? (t = i.m(t, this._target || i.t)) : t < n && -n < t && (t = 0),
              i.f ? (i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t)) : (i.t[i.p] = t),
              (i = i._next);
        },
        j = function (e, t, i, n) {
          var r,
            a,
            s,
            o,
            l,
            c,
            u,
            d = [e, t],
            h = 0,
            p = '',
            f = 0;
          for (
            d.start = e,
              i && (i(d), (e = d[0]), (t = d[1])),
              d.length = 0,
              r = e.match(F) || [],
              a = t.match(F) || [],
              n && ((n._next = null), (n.blob = 1), (d._firstPT = d._applyPT = n)),
              l = a.length,
              o = 0;
            o < l;
            o++
          )
            (u = a[o]),
              (p += (c = t.substr(h, t.indexOf(u, h) - h)) || !o ? c : ','),
              (h += c.length),
              f ? (f = (f + 1) % 5) : 'rgba(' === c.substr(-5) && (f = 1),
              u === r[o] || r.length <= o
                ? (p += u)
                : (p && (d.push(p), (p = '')),
                  (s = parseFloat(r[o])),
                  d.push(s),
                  (d._firstPT = {
                    _next: d._firstPT,
                    t: d,
                    p: d.length - 1,
                    s: s,
                    c: ('=' === u.charAt(1) ? parseInt(u.charAt(0) + '1', 10) * parseFloat(u.substr(2)) : parseFloat(u) - s) || 0,
                    f: 0,
                    m: f && f < 4 ? Math.round : 0,
                  })),
              (h += u.length);
          return (p += t.substr(h)) && d.push(p), (d.setRatio = H), d;
        },
        $ = function (e, t, i, n, r, a, s, o, l) {
          'function' == typeof n && (n = n(l || 0, e));
          var c,
            u = 'get' === i ? e[t] : i,
            d = typeof e[t],
            h = 'string' == typeof n && '=' === n.charAt(1),
            p = {
              t: e,
              p: t,
              s: u,
              f: 'function' === d,
              pg: 0,
              n: r || t,
              m: a ? ('function' == typeof a ? a : Math.round) : 0,
              pr: 0,
              c: h ? parseInt(n.charAt(0) + '1', 10) * parseFloat(n.substr(2)) : parseFloat(n) - u || 0,
            };
          return (
            'number' !== d &&
              ('function' === d &&
                'get' === i &&
                ((c = t.indexOf('set') || 'function' != typeof e['get' + t.substr(3)] ? t : 'get' + t.substr(3)), (p.s = u = s ? e[c](s) : e[c]())),
              'string' == typeof u && (s || isNaN(u))
                ? ((p.fp = s), (p = { t: j(u, n, o || O.defaultStringFilter, p), p: 'setRatio', s: 0, c: 1, f: 2, pg: 0, n: r || t, pr: 0, m: 0 }))
                : h || ((p.s = parseFloat(u)), (p.c = parseFloat(n) - p.s || 0))),
            p.c ? ((p._next = this._firstPT) && (p._next._prev = p), (this._firstPT = p)) : void 0
          );
        },
        B = (O._internals = { isArray: x, isSelector: R, lazyTweens: N, blobDif: j }),
        q = (O._plugins = {}),
        Y = (B.tweenLookup = {}),
        X = 0,
        W = (B.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
          callbackScope: 1,
          stringFilter: 1,
          id: 1,
        }),
        V = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
        G = (c._rootFramesTimeline = new L()),
        U = (c._rootTimeline = new L()),
        K = 30,
        Q = (B.lazyRender = function () {
          var e,
            t = N.length;
          for (z = {}; -1 < --t; ) (e = N[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), (e._lazy = !1));
          N.length = 0;
        });
      (U._startTime = v.time),
        (G._startTime = v.frame),
        (U._active = G._active = !0),
        setTimeout(Q, 1),
        (c._updateRoot = O.render = function () {
          var e, t, i;
          if (
            (N.length && Q(), U.render((v.time - U._startTime) * U._timeScale, !1, !1), G.render((v.frame - G._startTime) * G._timeScale, !1, !1), N.length && Q(), v.frame >= K)
          ) {
            for (i in ((K = v.frame + (parseInt(O.autoSleep, 10) || 120)), Y)) {
              for (e = (t = Y[i].tweens).length; -1 < --e; ) t[e]._gc && t.splice(e, 1);
              0 === t.length && delete Y[i];
            }
            if ((!(i = U._first) || i._paused) && O.autoSleep && !G._first && 1 === v._listeners.tick.length) {
              for (; i && i._paused; ) i = i._next;
              i || v.sleep();
            }
          }
        }),
        v.addEventListener('tick', c._updateRoot);
      var J = function (e, t, i) {
          var n,
            r,
            a = e._gsTweenID;
          if ((Y[a || (e._gsTweenID = a = 't' + X++)] || (Y[a] = { target: e, tweens: [] }), t && (((n = Y[a].tweens)[(r = n.length)] = t), i)))
            for (; -1 < --r; ) n[r] === t && n.splice(r, 1);
          return Y[a].tweens;
        },
        Z = function (e, t, i, n) {
          var r,
            a,
            s = e.vars.onOverwrite;
          return s && (r = s(e, t, i, n)), (s = O.onOverwrite) && (a = s(e, t, i, n)), !1 !== r && !1 !== a;
        },
        ee = function (e, t, i, n, r) {
          var a, s, o, l;
          if (1 === n || 4 <= n) {
            for (l = r.length, a = 0; a < l; a++)
              if ((o = r[a]) !== t) o._gc || (o._kill(null, e, t) && (s = !0));
              else if (5 === n) break;
            return s;
          }
          var c,
            u = t._startTime + _,
            d = [],
            h = 0,
            p = 0 === t._duration;
          for (a = r.length; -1 < --a; )
            (o = r[a]) === t ||
              o._gc ||
              o._paused ||
              (o._timeline !== t._timeline
                ? ((c = c || te(t, 0, p)), 0 === te(o, c, p) && (d[h++] = o))
                : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && (((p || !o._initted) && u - o._startTime <= 2e-10) || (d[h++] = o)));
          for (a = h; -1 < --a; )
            if (((o = d[a]), 2 === n && o._kill(i, e, t) && (s = !0), 2 !== n || (!o._firstPT && o._initted))) {
              if (2 !== n && !Z(o, t)) continue;
              o._enabled(!1, !1) && (s = !0);
            }
          return s;
        },
        te = function (e, t, i) {
          for (var n = e._timeline, r = n._timeScale, a = e._startTime; n._timeline; ) {
            if (((a += n._startTime), (r *= n._timeScale), n._paused)) return -100;
            n = n._timeline;
          }
          return t < (a /= r) ? a - t : (i && a === t) || (!e._initted && a - t < 2 * _) ? _ : (a += e.totalDuration() / e._timeScale / r) > t + _ ? 0 : a - t - _;
        };
      (r._init = function () {
        var e,
          t,
          i,
          n,
          r,
          a,
          s = this.vars,
          o = this._overwrittenProps,
          l = this._duration,
          c = !!s.immediateRender,
          u = s.ease;
        if (s.startAt) {
          for (n in (this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (r = {}), s.startAt)) r[n] = s.startAt[n];
          if (((r.overwrite = !1), (r.immediateRender = !0), (r.lazy = c && !1 !== s.lazy), (r.startAt = r.delay = null), (this._startAt = O.to(this.target, 0, r)), c))
            if (0 < this._time) this._startAt = null;
            else if (0 !== l) return;
        } else if (s.runBackwards && 0 !== l)
          if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null);
          else {
            for (n in (0 !== this._time && (c = !1), (i = {}), s)) (W[n] && 'autoCSS' !== n) || (i[n] = s[n]);
            if (((i.overwrite = 0), (i.data = 'isFromStart'), (i.lazy = c && !1 !== s.lazy), (i.immediateRender = c), (this._startAt = O.to(this.target, 0, i)), c)) {
              if (0 === this._time) return;
            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
          }
        if (
          ((this._ease = u = u ? (u instanceof S ? u : 'function' == typeof u ? new S(u, s.easeParams) : C[u] || O.defaultEase) : O.defaultEase),
          s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (a = this._targets.length, e = 0; e < a; e++) this._initProps(this._targets[e], (this._propLookup[e] = {}), this._siblings[e], o ? o[e] : null, e) && (t = !0);
        else t = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
        if ((t && O._onPluginEvent('_onInitAllProps', this), o && (this._firstPT || ('function' != typeof this.target && this._enabled(!1, !1))), s.runBackwards))
          for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
        (this._onUpdate = s.onUpdate), (this._initted = !0);
      }),
        (r._initProps = function (e, t, i, n, r) {
          var a, s, o, l, c, u;
          if (null == e) return !1;
          for (a in (z[e._gsTweenID] && Q(), this.vars.css || (e.style && e !== p && e.nodeType && q.css && !1 !== this.vars.autoCSS && I(this.vars, e)), this.vars))
            if (((u = this.vars[a]), W[a]))
              u && (u instanceof Array || (u.push && x(u))) && -1 !== u.join('').indexOf('{self}') && (this.vars[a] = u = this._swapSelfInParams(u, this));
            else if (q[a] && (l = new q[a]())._onInitTween(e, this.vars[a], this, r)) {
              for (
                this._firstPT = c = { _next: this._firstPT, t: l, p: 'setRatio', s: 0, c: 1, f: 1, n: a, pg: 1, pr: l._priority, m: 0 }, s = l._overwriteProps.length;
                -1 < --s;

              )
                t[l._overwriteProps[s]] = this._firstPT;
              (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c);
            } else t[a] = $.call(this, e, a, 'get', u, a, 0, null, this.vars.stringFilter, r);
          return n && this._kill(n, e)
            ? this._initProps(e, t, i, n, r)
            : 1 < this._overwrite && this._firstPT && 1 < i.length && ee(e, this, t, this._overwrite, i)
            ? (this._kill(t, e), this._initProps(e, t, i, n, r))
            : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (z[e._gsTweenID] = !0), o);
        }),
        (r.render = function (e, t, i) {
          var n,
            r,
            a,
            s,
            o = this._time,
            l = this._duration,
            c = this._rawPrevTime;
          if (l - 1e-7 <= e)
            (this._totalTime = this._time = l),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed || ((n = !0), (r = 'onComplete'), (i = i || this._timeline.autoRemoveChildren)),
              0 === l &&
                (this._initted || !this.vars.lazy || i) &&
                (this._startTime === this._timeline._duration && (e = 0),
                (c < 0 || (e <= 0 && -1e-7 <= e) || (c === _ && 'isPause' !== this.data)) && c !== e && ((i = !0), _ < c && (r = 'onReverseComplete')),
                (this._rawPrevTime = s = !t || e || c === e ? e : _));
          else if (e < 1e-7)
            (this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== o || (0 === l && 0 < c)) && ((r = 'onReverseComplete'), (n = this._reversed)),
              e < 0 &&
                ((this._active = !1),
                0 === l &&
                  (this._initted || !this.vars.lazy || i) &&
                  (0 <= c && (c !== _ || 'isPause' !== this.data) && (i = !0), (this._rawPrevTime = s = !t || e || c === e ? e : _))),
              this._initted || (i = !0);
          else if (((this._totalTime = this._time = e), this._easeType)) {
            var u = e / l,
              d = this._easeType,
              h = this._easePower;
            (1 === d || (3 === d && 0.5 <= u)) && (u = 1 - u),
              3 === d && (u *= 2),
              1 === h ? (u *= u) : 2 === h ? (u *= u * u) : 3 === h ? (u *= u * u * u) : 4 === h && (u *= u * u * u * u),
              (this.ratio = 1 === d ? 1 - u : 2 === d ? u : e / l < 0.5 ? u / 2 : 1 - u / 2);
          } else this.ratio = this._ease.getRatio(e / l);
          if (this._time !== o || i) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                return (this._time = this._totalTime = o), (this._rawPrevTime = c), N.push(this), void (this._lazy = [e, t]);
              this._time && !n ? (this.ratio = this._ease.getRatio(this._time / l)) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              !1 !== this._lazy && (this._lazy = !1),
                this._active || (!this._paused && this._time !== o && 0 <= e && (this._active = !0)),
                0 === o &&
                  (this._startAt && (0 <= e ? this._startAt.render(e, t, i) : r || (r = '_dummyGS')),
                  this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback('onStart'))),
                a = this._firstPT;
              a;

            )
              a.f ? a.t[a.p](a.c * this.ratio + a.s) : (a.t[a.p] = a.c * this.ratio + a.s), (a = a._next);
            this._onUpdate && (e < 0 && this._startAt && -1e-4 !== e && this._startAt.render(e, t, i), t || ((this._time !== o || n || i) && this._callback('onUpdate'))),
              r &&
                (!this._gc || i) &&
                (e < 0 && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, t, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                !t && this.vars[r] && this._callback(r),
                0 === l && this._rawPrevTime === _ && s !== _ && (this._rawPrevTime = 0));
          }
        }),
        (r._kill = function (e, t, i) {
          if (('all' === e && (e = null), null == e && (null == t || t === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
          t = 'string' != typeof t ? t || this._targets || this.target : O.selector(t) || t;
          var n,
            r,
            a,
            s,
            o,
            l,
            c,
            u,
            d,
            h = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
          if ((x(t) || R(t)) && 'number' != typeof t[0]) for (n = t.length; -1 < --n; ) this._kill(e, t[n], i) && (l = !0);
          else {
            if (this._targets) {
              for (n = this._targets.length; -1 < --n; )
                if (t === this._targets[n]) {
                  (o = this._propLookup[n] || {}),
                    (this._overwrittenProps = this._overwrittenProps || []),
                    (r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : 'all');
                  break;
                }
            } else {
              if (t !== this.target) return !1;
              (o = this._propLookup), (r = this._overwrittenProps = e ? this._overwrittenProps || {} : 'all');
            }
            if (o) {
              if (((c = e || o), (u = e !== r && 'all' !== r && e !== o && ('object' != typeof e || !e._tempKill)), i && (O.onOverwrite || this.vars.onOverwrite))) {
                for (a in c) o[a] && (d || (d = []), d.push(a));
                if ((d || !e) && !Z(this, i, t, d)) return !1;
              }
              for (a in c)
                (s = o[a]) &&
                  (h && (s.f ? s.t[s.p](s.s) : (s.t[s.p] = s.s), (l = !0)),
                  s.pg && s.t._kill(c) && (l = !0),
                  (s.pg && 0 !== s.t._overwriteProps.length) ||
                    (s._prev ? (s._prev._next = s._next) : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), (s._next = s._prev = null)),
                  delete o[a]),
                  u && (r[a] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return l;
        }),
        (r.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled && O._onPluginEvent('_onDisable', this),
            (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            c.prototype.invalidate.call(this),
            this.vars.immediateRender && ((this._time = -_), this.render(Math.min(0, -this._delay))),
            this
          );
        }),
        (r._enabled = function (e, t) {
          if ((y || v.wake(), e && this._gc)) {
            var i,
              n = this._targets;
            if (n) for (i = n.length; -1 < --i; ) this._siblings[i] = J(n[i], this, !0);
            else this._siblings = J(this.target, this, !0);
          }
          return c.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && O._onPluginEvent(e ? '_onEnable' : '_onDisable', this);
        }),
        (O.to = function (e, t, i) {
          return new O(e, t, i);
        }),
        (O.from = function (e, t, i) {
          return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new O(e, t, i);
        }),
        (O.fromTo = function (e, t, i, n) {
          return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new O(e, t, n);
        }),
        (O.delayedCall = function (e, t, i, n, r) {
          return new O(t, 0, {
            delay: e,
            onComplete: t,
            onCompleteParams: i,
            callbackScope: n,
            onReverseComplete: t,
            onReverseCompleteParams: i,
            immediateRender: !1,
            lazy: !1,
            useFrames: r,
            overwrite: 0,
          });
        }),
        (O.set = function (e, t) {
          return new O(e, 0, t);
        }),
        (O.getTweensOf = function (e, t) {
          if (null == e) return [];
          var i, n, r, a;
          if (((e = 'string' != typeof e ? e : O.selector(e) || e), (x(e) || R(e)) && 'number' != typeof e[0])) {
            for (i = e.length, n = []; -1 < --i; ) n = n.concat(O.getTweensOf(e[i], t));
            for (i = n.length; -1 < --i; ) for (a = n[i], r = i; -1 < --r; ) a === n[r] && n.splice(i, 1);
          } else for (i = (n = J(e).concat()).length; -1 < --i; ) (n[i]._gc || (t && !n[i].isActive())) && n.splice(i, 1);
          return n;
        }),
        (O.killTweensOf = O.killDelayedCallsTo = function (e, t, i) {
          'object' == typeof t && ((i = t), (t = !1));
          for (var n = O.getTweensOf(e, t), r = n.length; -1 < --r; ) n[r]._kill(i, e);
        });
      var ie = h(
        'plugins.TweenPlugin',
        function (e, t) {
          (this._overwriteProps = (e || '').split(',')), (this._propName = this._overwriteProps[0]), (this._priority = t || 0), (this._super = ie.prototype);
        },
        !0
      );
      if (
        ((r = ie.prototype),
        (ie.version = '1.19.0'),
        (ie.API = 2),
        (r._firstPT = null),
        (r._addTween = $),
        (r.setRatio = H),
        (r._kill = function (e) {
          var t,
            i = this._overwriteProps,
            n = this._firstPT;
          if (null != e[this._propName]) this._overwriteProps = [];
          else for (t = i.length; -1 < --t; ) null != e[i[t]] && i.splice(t, 1);
          for (; n; )
            null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? ((n._prev._next = n._next), (n._prev = null)) : this._firstPT === n && (this._firstPT = n._next)),
              (n = n._next);
          return !1;
        }),
        (r._mod = r._roundProps = function (e) {
          for (var t, i = this._firstPT; i; )
            (t = e[this._propName] || (null != i.n && e[i.n.split(this._propName + '_').join('')])) && 'function' == typeof t && (2 === i.f ? (i.t._applyPT.m = t) : (i.m = t)),
              (i = i._next);
        }),
        (O._onPluginEvent = function (e, t) {
          var i,
            n,
            r,
            a,
            s,
            o = t._firstPT;
          if ('_onInitAllProps' === e) {
            for (; o; ) {
              for (s = o._next, n = r; n && n.pr > o.pr; ) n = n._next;
              (o._prev = n ? n._prev : a) ? (o._prev._next = o) : (r = o), (o._next = n) ? (n._prev = o) : (a = o), (o = s);
            }
            o = t._firstPT = r;
          }
          for (; o; ) o.pg && 'function' == typeof o.t[e] && o.t[e]() && (i = !0), (o = o._next);
          return i;
        }),
        (ie.activate = function (e) {
          for (var t = e.length; -1 < --t; ) e[t].API === ie.API && (q[new e[t]()._propName] = e[t]);
          return !0;
        }),
        (a.plugin = function (e) {
          if (!(e && e.propName && e.init && e.API)) throw 'illegal plugin definition.';
          var t,
            i = e.propName,
            n = e.priority || 0,
            r = e.overwriteProps,
            a = { init: '_onInitTween', set: 'setRatio', kill: '_kill', round: '_mod', mod: '_mod', initAll: '_onInitAllProps' },
            s = h(
              'plugins.' + i.charAt(0).toUpperCase() + i.substr(1) + 'Plugin',
              function () {
                ie.call(this, i, n), (this._overwriteProps = r || []);
              },
              !0 === e.global
            ),
            o = (s.prototype = new ie(i));
          for (t in (((o.constructor = s).API = e.API), a)) 'function' == typeof e[t] && (o[a[t]] = e[t]);
          return (s.version = e.version), ie.activate([s]), s;
        }),
        (e = p._gsQueue))
      ) {
        for (n = 0; n < e.length; n++) e[n]();
        for (r in T) T[r].func || p.console.log('GSAP encountered missing dependency: ' + r);
      }
      y = !1;
    }
  })('undefined' != typeof module && module.exports && 'undefined' != typeof global ? global : this || window, 'TweenMax'),
  (function (e, t) {
    var i = t(e, e.document);
    (e.lazySizes = i), 'object' == typeof module && module.exports && (module.exports = i);
  })(window, function (n, p) {
    'use strict';
    if (p.getElementsByClassName) {
      var f,
        m,
        g = p.documentElement,
        o = n.Date,
        r = n.HTMLPictureElement,
        a = 'addEventListener',
        v = 'getAttribute',
        t = n[a],
        d = n.setTimeout,
        i = n.requestAnimationFrame || d,
        l = n.requestIdleCallback,
        h = /^picture$/i,
        s = ['load', 'error', 'lazyincluded', '_lazyloaded'],
        c = {},
        y = Array.prototype.forEach,
        u = function (e, t) {
          return c[t] || (c[t] = new RegExp('(\\s|^)' + t + '(\\s|$)')), c[t].test(e[v]('class') || '') && c[t];
        },
        b = function (e, t) {
          u(e, t) || e.setAttribute('class', (e[v]('class') || '').trim() + ' ' + t);
        },
        _ = function (e, t) {
          var i;
          (i = u(e, t)) && e.setAttribute('class', (e[v]('class') || '').replace(i, ' '));
        },
        w = function (t, i, e) {
          var n = e ? a : 'removeEventListener';
          e && w(t, i),
            s.forEach(function (e) {
              t[n](e, i);
            });
        },
        x = function (e, t, i, n, r) {
          var a = p.createEvent('Event');
          return i || (i = {}), (i.instance = f), a.initEvent(t, !n, !r), (a.detail = i), e.dispatchEvent(a), a;
        },
        T = function (e, t) {
          var i;
          !r && (i = n.picturefill || m.pf)
            ? (t && t.src && !e[v]('srcset') && e.setAttribute('srcset', t.src), i({ reevaluate: !0, elements: [e] }))
            : t && t.src && (e.src = t.src);
        },
        k = function (e, t) {
          return (getComputedStyle(e, null) || {})[t];
        },
        S = function (e, t, i) {
          for (i = i || e.offsetWidth; i < m.minSize && t && !e._lazysizesWidth; ) (i = t.offsetWidth), (t = t.parentNode);
          return i;
        },
        C =
          ((me = []),
          (ge = fe = []),
          (ve = function () {
            var e = ge;
            for (ge = fe.length ? me : fe, pe = !(he = !0); e.length; ) e.shift()();
            he = !1;
          }),
          ((ye = function (e, t) {
            he && !t ? e.apply(this, arguments) : (ge.push(e), pe || ((pe = !0), (p.hidden ? d : i)(ve)));
          })._lsFlush = ve),
          ye),
        E = function (i, e) {
          return e
            ? function () {
                C(i);
              }
            : function () {
                var e = this,
                  t = arguments;
                C(function () {
                  i.apply(e, t);
                });
              };
        },
        e = function (e) {
          var i,
            n = 0,
            r = m.throttleDelay,
            a = m.ricTimeout,
            t = function () {
              (i = !1), (n = o.now()), e();
            },
            s =
              l && 49 < a
                ? function () {
                    l(t, { timeout: a }), a !== m.ricTimeout && (a = m.ricTimeout);
                  }
                : E(function () {
                    d(t);
                  }, !0);
          return function (e) {
            var t;
            (e = !0 === e) && (a = 33), i || ((i = !0), (t = r - (o.now() - n)) < 0 && (t = 0), e || t < 9 ? s() : d(s, t));
          };
        },
        D = function (e) {
          var t,
            i,
            n = 99,
            r = function () {
              (t = null), e();
            },
            a = function () {
              var e = o.now() - i;
              e < n ? d(a, n - e) : (l || r)(r);
            };
          return function () {
            (i = o.now()), t || (t = d(a, n));
          };
        };
      !(function () {
        var e,
          t = {
            lazyClass: 'lazyload',
            loadedClass: 'lazyloaded',
            loadingClass: 'lazyloading',
            preloadClass: 'lazypreload',
            errorClass: 'lazyerror',
            autosizesClass: 'lazyautosizes',
            srcAttr: 'data-src',
            srcsetAttr: 'data-srcset',
            sizesAttr: 'data-sizes',
            minSize: 40,
            customMedia: {},
            init: !0,
            expFactor: 1.5,
            hFac: 0.8,
            loadMode: 2,
            loadHidden: !0,
            ricTimeout: 0,
            throttleDelay: 125,
          };
        for (e in ((m = n.lazySizesConfig || n.lazysizesConfig || {}), t)) e in m || (m[e] = t[e]);
        (n.lazySizesConfig = m),
          d(function () {
            m.init && A();
          });
      })();
      var M =
          ((V = /^img$/i),
          (G = /^iframe$/i),
          (U = 'onscroll' in n && !/(gle|ing)bot/.test(navigator.userAgent)),
          (J = Q = K = 0),
          (Z = -1),
          (ee = function (e) {
            J--, e && e.target && w(e.target, ee), (!e || J < 0 || !e.target) && (J = 0);
          }),
          (te = function (e, t) {
            var i,
              n = e,
              r = 'hidden' == k(p.body, 'visibility') || ('hidden' != k(e.parentNode, 'visibility') && 'hidden' != k(e, 'visibility'));
            for (q -= t, W += t, Y -= t, X += t; r && (n = n.offsetParent) && n != p.body && n != g; )
              (r = 0 < (k(n, 'opacity') || 1)) &&
                'visible' != k(n, 'overflow') &&
                ((i = n.getBoundingClientRect()), (r = X > i.left && Y < i.right && W > i.top - 1 && q < i.bottom + 1));
            return r;
          }),
          (ne = e(
            (ie = function () {
              var e,
                t,
                i,
                n,
                r,
                a,
                s,
                o,
                l,
                c,
                u,
                d,
                h = f.elements;
              if ((H = m.loadMode) && J < 8 && (e = h.length)) {
                for (
                  t = 0,
                    Z++,
                    u = (c = !m.expand || m.expand < 1 ? (500 < g.clientHeight && 500 < g.clientWidth ? 500 : 370) : m.expand) * m.expFactor,
                    d = m.hFac,
                    Q < u && J < 1 && 2 < Z && 2 < H && !p.hidden ? ((Q = u), (Z = 0)) : (Q = 1 < H && 1 < Z && J < 6 ? c : K);
                  t < e;
                  t++
                )
                  if (h[t] && !h[t]._lazyRace)
                    if (U)
                      if (
                        (((o = h[t][v]('data-expand')) && (a = 1 * o)) || (a = Q),
                        l !== a && (($ = innerWidth + a * d), (B = innerHeight + a), (s = -1 * a), (l = a)),
                        (i = h[t].getBoundingClientRect()),
                        (W = i.bottom) >= s &&
                          (q = i.top) <= B &&
                          (X = i.right) >= s * d &&
                          (Y = i.left) <= $ &&
                          (W || X || Y || q) &&
                          (m.loadHidden || 'hidden' != k(h[t], 'visibility')) &&
                          ((z && J < 3 && !o && (H < 3 || Z < 4)) || te(h[t], a)))
                      ) {
                        if ((ue(h[t]), (r = !0), 9 < J)) break;
                      } else
                        !r &&
                          z &&
                          !n &&
                          J < 4 &&
                          Z < 4 &&
                          2 < H &&
                          (N[0] || m.preloadAfterLoad) &&
                          (N[0] || (!o && (W || X || Y || q || 'auto' != h[t][v](m.sizesAttr)))) &&
                          (n = N[0] || h[t]);
                    else ue(h[t]);
                n && !r && ue(n);
              }
            })
          )),
          (ae = E(
            (re = function (e) {
              b(e.target, m.loadedClass), _(e.target, m.loadingClass), w(e.target, se), x(e.target, 'lazyloaded');
            })
          )),
          (se = function (e) {
            ae({ target: e.target });
          }),
          (oe = function (e, t) {
            try {
              e.contentWindow.location.replace(t);
            } catch (f) {
              e.src = t;
            }
          }),
          (le = function (e) {
            var t,
              i = e[v](m.srcsetAttr);
            (t = m.customMedia[e[v]('data-media') || e[v]('media')]) && e.setAttribute('media', t), i && e.setAttribute('srcset', i);
          }),
          (ce = E(function (e, t, i, n, r) {
            var a, s, o, l, c, u;
            (c = x(e, 'lazybeforeunveil', t)).defaultPrevented ||
              (n && (i ? b(e, m.autosizesClass) : e.setAttribute('sizes', n)),
              (s = e[v](m.srcsetAttr)),
              (a = e[v](m.srcAttr)),
              r && (l = (o = e.parentNode) && h.test(o.nodeName || '')),
              (u = t.firesLoad || ('src' in e && (s || a || l))),
              (c = { target: e }),
              u && (w(e, ee, !0), clearTimeout(F), (F = d(ee, 2500)), b(e, m.loadingClass), w(e, se, !0)),
              l && y.call(o.getElementsByTagName('source'), le),
              s ? e.setAttribute('srcset', s) : a && !l && (G.test(e.nodeName) ? oe(e, a) : (e.src = a)),
              r && (s || l) && T(e, { src: a })),
              e._lazyRace && delete e._lazyRace,
              _(e, m.lazyClass),
              C(function () {
                (!u || (e.complete && 1 < e.naturalWidth)) && (u ? ee(c) : J--, re(c));
              }, !0);
          })),
          (de = function () {
            if (!z) {
              if (o.now() - j < 999) return void d(de, 999);
              var e = D(function () {
                (m.loadMode = 3), ne();
              });
              (z = !0),
                (m.loadMode = 3),
                ne(),
                t(
                  'scroll',
                  function () {
                    3 == m.loadMode && (m.loadMode = 2), e();
                  },
                  !0
                );
            }
          }),
          {
            _: function () {
              (j = o.now()),
                (f.elements = p.getElementsByClassName(m.lazyClass)),
                (N = p.getElementsByClassName(m.lazyClass + ' ' + m.preloadClass)),
                t('scroll', ne, !0),
                t('resize', ne, !0),
                n.MutationObserver
                  ? new MutationObserver(ne).observe(g, { childList: !0, subtree: !0, attributes: !0 })
                  : (g[a]('DOMNodeInserted', ne, !0), g[a]('DOMAttrModified', ne, !0), setInterval(ne, 999)),
                t('hashchange', ne, !0),
                ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function (e) {
                  p[a](e, ne, !0);
                }),
                /d$|^c/.test(p.readyState) ? de() : (t('load', de), p[a]('DOMContentLoaded', ne), d(de, 2e4)),
                f.elements.length ? (ie(), C._lsFlush()) : ne();
            },
            checkElems: ne,
            unveil: (ue = function (e) {
              var t,
                i = V.test(e.nodeName),
                n = i && (e[v](m.sizesAttr) || e[v]('sizes')),
                r = 'auto' == n;
              ((!r && z) || !i || (!e[v]('src') && !e.srcset) || e.complete || u(e, m.errorClass) || !u(e, m.lazyClass)) &&
                ((t = x(e, 'lazyunveilread').detail), r && P.updateElem(e, !0, e.offsetWidth), (e._lazyRace = !0), J++, ce(e, t, r, n, i));
            }),
          }),
        P =
          ((O = E(function (e, t, i, n) {
            var r, a, s;
            if (((e._lazysizesWidth = n), (n += 'px'), e.setAttribute('sizes', n), h.test(t.nodeName || '')))
              for (a = 0, s = (r = t.getElementsByTagName('source')).length; a < s; a++) r[a].setAttribute('sizes', n);
            i.detail.dataAttr || T(e, i.detail);
          })),
          (R = function (e, t, i) {
            var n,
              r = e.parentNode;
            r &&
              ((i = S(e, r, i)), (n = x(e, 'lazybeforesizes', { width: i, dataAttr: !!t })).defaultPrevented || ((i = n.detail.width) && i !== e._lazysizesWidth && O(e, r, n, i)));
          }),
          {
            _: function () {
              (L = p.getElementsByClassName(m.autosizesClass)), t('resize', I);
            },
            checkElems: (I = D(function () {
              var e,
                t = L.length;
              if (t) for (e = 0; e < t; e++) R(L[e]);
            })),
            updateElem: R,
          }),
        A = function () {
          A.i || ((A.i = !0), P._(), M._());
        };
      return (f = { cfg: m, autoSizer: P, loader: M, init: A, uP: T, aC: b, rC: _, hC: u, fire: x, gW: S, rAF: C });
    }
    var L, O, R, I, N, z, F, H, j, $, B, q, Y, X, W, V, G, U, K, Q, J, Z, ee, te, ie, ne, re, ae, se, oe, le, ce, ue, de, he, pe, fe, me, ge, ve, ye;
  }),
  function () {
    $(document).on('turbolinks:load', function () {
      $('.flash').on('click', function () {
        return $(this).fadeOut(), !1;
      });
    });
  }.call(this),
  function () {
    var e;
    jQuery(document).on('turbolinks:load', function () {
      return e();
    }),
      $(window).resize(function () {
        if (1023 <= $(window).width()) return e();
      }),
      (e = function () {
        var e, t, i;
        (i = ($('#navItemsPc').width() - 30 * (t = (e = $('#navItemsPc > li.display-inline-block, #navItemsPc > li.display-none-less-1023')).length)) / t), e.width(i);
      });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {
      var e;
      (e = void 0),
        $(window).on('load', function () {
          return e();
        }),
        $(window).resize(function () {
          return e();
        }),
        (e = function () {
          var e, t, i, n;
          (n = i = t = e = void 0),
            (n = $('.scheduleNavJs').width()),
            (e = $('.scheduleNavJs > a')),
            768 <= $(window).width() && (t = 7),
            $(window).width() <= 768 && (t = 4),
            (i = (n - 8 * t) / t),
            e.width(i);
        });
    });
  }.call(this),
  function () {
    var e;
    jQuery(document).on('turbolinks:load', function () {
      return e();
    }),
      $(window).resize(function () {
        return e();
      }),
      (e = function () {
        var e, t, i;
        (t = ((i = $('.mdTable').width()) - 8 * (e = 7)) / e), $('.mdTable > a').width(t), console.log(i), console.log(t);
      });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {
      var e, t, i, n;
      return (
        (e = (i = location.pathname).substring(1, i.lastIndexOf('/'))),
        (t = i.substring(i.lastIndexOf('/') + 1)),
        'therapist' === e && $.isNumeric(t)
          ? ((n = 'url(' + $('.mainViewTherapistImg').data().therapistImg + ')'), void $('.noHome .mainViewCont').css('background-image', n))
          : (console.log(e),
            'blog' === e || 'therapist_blog' === e || 'therapist_blog' === e
              ? ((n = 'url(' + $('.mainViewTherapistImg').data().therapistImg + ')'), void $('.noHome .mainViewCont').css('background-image', n))
              : void 0)
      );
    });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {
      var e;
      return (e = 'yy-mm-dd'), $('.datePicker').datepicker({ dateFormat: e, minDate: 1 });
    });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {}),
      $(document).on('click', '#navBtnJs', function (e) {
        var t, i, n;
        $('#navBtnJs'),
          (n = $('#navJs')),
          (i = $('header.priority')),
          (t = 'isOpen'),
          e.preventDefault(),
          $('#navBtnJs').toggleClass(t),
          n.toggleClass(t),
          i.toggleClass(t),
          !0 === n.hasClass(t) &&
            (TweenMax.set('#navJs .riseFadeJs', { autoAlpha: 0, y: 40 }), TweenMax.staggerTo('#navJs .riseFadeJs', 0.7, { autoAlpha: 1, y: 0, ease: Power4.easeOut }, 0.07));
      });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {}),
      $(document).on('click', 'a[href^="#"].pageLink', function () {
        var e, t, i;
        return (
          (i = t = e = void 0),
          (i = 400),
          (e = $(this).attr('href')),
          (t = $('#' === e || '' === e ? 'html' : e).offset().top),
          $('body,html').animate({ scrollTop: t }, i, 'swing'),
          !1
        );
      });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {
      return (
        $(document).on('change', 'select.selectCourseJs', function () {
          var e;
          return (
            (e = { course_id: $(this).val() }),
            $.ajax({ type: 'POST', url: '/reservation/change_course_time', data: e }).done(function (e) {
              return $('.selectCourseTimeContent').html(e);
            })
          );
        }),
        $(document).on('click', 'button.searchTherapistButton', function () {
          return '' === $('input.date').val()
            ? alert('\u3054\u6765\u5e97\u65e5\u6642\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044')
            : $.ajax({
                type: 'POST',
                url: '/reservation/attendance_therapists',
                data: { date: $('input.date').val(), hour: $('select.hour').val(), minute: $('select.minute').val() },
              }).done(function (e) {
                return $('.reservationTherapists').html(e);
              });
        }),
        $(document).on('click', '.designateTherapist', function () {
          var e, t;
          return (e = $('span.hiddenId', this).text()), (t = $('span.hiddenName', this).text()), $('input.therapistId').val(e), $('input.searchTherapistInput').val(t);
        })
      );
    });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {
      return $(document).on('click', '.scheduleBtns a', function () {
        var e;
        return (
          $('.scheduleBtns a').prop('disabled', !0),
          $.ajax((e = $(this).data('url')), $(this).addClass('todays').siblings().removeClass('todays'), { type: 'GET', url: e, data: {} }).done(function (e) {
            return $('.scheduleContent').html(e), $('.scheduleBtns a').prop('disabled', !1), $('.scheduleList > .item').addClass('scrollin');
          })
        );
      });
    });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {
      $(window).scroll(function () {
        $('.fadein').each(function () {
          var e, t;
          (e = jQuery(this).offset().top), (t = jQuery(window).scrollTop()), e - jQuery(window).height() + 100 < t && jQuery(this).addClass('scrollin');
        });
      });
    });
  }.call(this),
  function () {
    $(document).on('click', '.inquiryFormButton', function () {
      return (
        $('#loaderJs').fadeIn(600),
        setTimeout(function () {
          return $('#loaderJs').delay(300).fadeOut(400);
        }, 1e3)
      );
    });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {
      $('.show_more_content:not(.show_more_content:first-of-type)').css('display', 'none'),
        $('.showMoreButton').nextAll('.showMoreButton').css('display', 'none'),
        $(document).on('click', '.showMoreButton', function () {
          $(this).css('display', 'none'), $(this).next('.show_more_content').slideDown('fast'), $(this).nextAll('.showMoreButton:first').css('display', 'block');
        });
    });
  }.call(this),
  function () {
    var e;
    jQuery(document).on('turbolinks:load', function () {
      return e();
    }),
      $(window).resize(function () {
        return e();
      }),
      (e = function () {
        return $(window).width() < 1023
          ? ($('.pickUpTherapistContent').insertAfter('article'), void $('.sideBanner').insertAfter('.pickUpTherapistContent'))
          : 1023 <= $(window).width()
          ? ($('.pickUpTherapistContent').insertAfter('.twitterContent'), $('.sideBanner').insertAfter('.pickUpTherapistContent'))
          : void 0;
      });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {
      var e, t;
      if (((t = e = void 0), null !== document.getElementById('pickUpSliderJs')))
        return (
          (e = {
            init: !(t = '#pickUpSliderJs'),
            loop: !0,
            speed: 800,
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            pagination: {
              el: '.swiper-pagination',
              clickable: !0,
              renderBullet: function (e, t) {
                return void 0, e + 1, '<span class="' + t + '"></span>';
              },
            },
          }),
          new Swiper(t, e).init()
        );
    });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {
      if (null !== document.getElementById('blogsSliderJs'))
        return new Swiper('#blogsSliderJs', {
          init: !1,
          loop: !0,
          slidesPerView: 3,
          centeredSlides: !1,
          slideToClickedSlide: !0,
          autoplay: !0,
          autoplaySpeed: 1500,
          spaceBetween: 10,
          speed: 800,
          navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
          breakpoints: { 768: { spaceBetween: 5 } },
          pagination: {
            el: '.swiper-pagination',
            clickable: !0,
            renderBullet: function (e, t) {
              return void 0, '<span class="' + t + '"></span>';
            },
          },
        }).init();
    });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {
      var e, t;
      if (null !== document.getElementById('therapist-slider'))
        return (
          (e = new Swiper('#therapist-slider', { spaceBetween: 10, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } })),
          (t = new Swiper('#therapist-thumbs', { spaceBetween: 10, centeredSlides: !0, slidesPerView: 'auto', touchRatio: 0.2, slideToClickedSlide: !0 })),
          ((e.controller.control = t).controller.control = e)
        );
    });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {
      if (null !== document.getElementById('therapistBlogsSliderJs'))
        return new Swiper('#therapistBlogsSliderJs', {
          init: !1,
          loop: !0,
          slidesPerView: 5,
          centeredSlides: !0,
          slideToClickedSlide: !0,
          autoplay: !0,
          autoplaySpeed: 2500,
          spaceBetween: 10,
          speed: 800,
          navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
          breakpoints: { 768: { spaceBetween: 5, slidesPerView: 2 } },
          pagination: {
            el: '.swiper-pagination',
            clickable: !0,
            renderBullet: function (e, t) {
              return void 0, '<span class="' + t + '"></span>';
            },
          },
        }).init();
    });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {
      var e, t;
      if (((t = e = void 0), null !== document.getElementById('topSliderJs')))
        return (
          (e = {
            init: !(t = '#topSliderJs'),
            loop: !0,
            speed: 800,
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            pagination: {
              el: '.swiper-pagination',
              clickable: !0,
              renderBullet: function (e, t) {
                return void 0, '<span class="' + t + '">' + (e + 1) + '</span>';
              },
            },
          }),
          new Swiper(t, e).init()
        );
    });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {
      var e, t;
      if (((t = e = void 0), null !== document.getElementById('topSliderSpJs')))
        return (
          (e = {
            init: !(t = '#topSliderSpJs'),
            loop: !0,
            speed: 800,
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            pagination: {
              el: '.swiper-pagination',
              clickable: !0,
              renderBullet: function (e, t) {
                return void 0, '<span class="' + t + '">' + (e + 1) + '</span>';
              },
            },
          }),
          new Swiper(t, e).init()
        );
    });
  }.call(this),
  function () {
    jQuery(document).on('turbolinks:load', function () {
      var e, t;
      return (
        $('#loaderJs').fadeIn(100),
        setTimeout(function () {
          e(), t();
        }, 400),
        (e = function () {
          $('#loaderJs').delay(100).fadeOut(400);
        }),
        (t = function () {
          var e, t, i, n;
          (n = document.querySelectorAll('.effectTitleTxtJs span')),
            (i = document.querySelectorAll('.effectSubTitleTxtJs span')),
            (e = document.querySelectorAll('.effectDescriptionJs span')),
            (t = $('.effectScrollDownJs')),
            TweenMax.staggerFromTo(
              n,
              1.8,
              { autoAlpha: 0, scaleY: 0, skewX: '50deg', rotation: '50deg' },
              { autoAlpha: 1, scaleY: 1, rotation: '0deg', skewX: '0deg', delay: 0.4, ease: SteppedEase.config(50) },
              0.05
            ),
            TweenMax.staggerFromTo(
              i,
              1.8,
              { autoAlpha: 0, scaleY: 0, skewX: '50deg', rotation: '50deg' },
              { autoAlpha: 1, scaleY: 1, rotation: '0deg', skewX: '0deg', delay: 0.7, ease: SteppedEase.config(50) },
              0.05
            ),
            TweenMax.staggerFromTo(
              t,
              1.8,
              { autoAlpha: 0, scaleY: 0, skewX: '50deg', rotation: '50deg' },
              { autoAlpha: 1, scaleY: 1, rotation: '0deg', skewX: '0deg', delay: 0.7, ease: SteppedEase.config(50) },
              0.05
            ),
            TweenMax.staggerFromTo(
              e,
              1.8,
              { autoAlpha: 0, scaleY: 0, skewX: '50deg', rotation: '50deg' },
              { autoAlpha: 1, scaleY: 1, rotation: '0deg', skewX: '0deg', delay: 0.7, ease: SteppedEase.config(50) },
              0.05
            );
        })
      );
    });
  }.call(this);
