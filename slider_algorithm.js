(function(global, doc, Math, property, index, j, _) {
  /**
   * @return {undefined}
   */
  function callback() {
    /**
     * @param {string} type
     * @param {Function} positionError
     * @return {undefined}
     */
    function fail(type, positionError) {
      s.push({
        sc : type,
        /** @type {Function} */
        rc : positionError
      });
    }
    /**
     * @param {string} name
     * @param {Function} code
     * @return {undefined}
     */
    function test(name, code) {
      self.g(s, function(p, inIndex) {
        if (p.sc == name) {
          if (p.rc === code) {
            s.splice(inIndex, 1);
          }
        }
      });
    }
    var el = this;
    /** @type {Array} */
    var s = [];
    /** @type {function (string, Function): undefined} */
    el.tb = el.addEventListener = fail;
    /** @type {function (string, Function): undefined} */
    el.removeEventListener = test;
    /**
     * @param {number} obj
     * @return {undefined}
     */
    el.i = function(obj) {
      /** @type {Array.<?>} */
      var args = [].slice.call(arguments, 1);
      self.g(s, function(div) {
        if (div.sc == obj) {
          div.rc.apply(global, args);
        }
      });
    };
  }
  /**
   * @param {number} expr
   * @param {number} component
   * @param {Object} e
   * @param {?} cmp
   * @param {Object} action
   * @param {Object} callback
   * @return {undefined}
   */
  function test(expr, component, e, cmp, action, callback) {
    /**
     * @param {?} x
     * @return {undefined}
     */
    function next(x) {
      left += x;
      total += x;
      old += x;
      val += x;
      len += x;
      offset = x;
    }
    /**
     * @param {?} x
     * @param {number} dataAndEvents
     * @return {?}
     */
    function f(x, dataAndEvents) {
      /** @type {number} */
      var errMsg = x - left + expr * dataAndEvents;
      next(errMsg);
      return total;
    }
    /**
     * @param {number} recurring
     * @param {boolean} funcToCall
     * @return {undefined}
     */
    function cb(recurring, funcToCall) {
      /** @type {number} */
      var right = recurring;
      if (n && (right >= total || right <= left)) {
        right = ((right - left) % n + n) % n + left;
      }
      if (!restore || (num || (funcToCall || val != right))) {
        /** @type {number} */
        var closingAnimationTime = Math.min(right, total);
        /** @type {number} */
        closingAnimationTime = Math.max(closingAnimationTime, left);
        if (!restore || (num || (funcToCall || closingAnimationTime != len))) {
          if (callback) {
            /** @type {number} */
            var b = (closingAnimationTime - old) / (component || 1);
            if (e.Zb) {
              /** @type {number} */
              b = 1 - b;
            }
            var s = self.Jc(action, callback, b, r20, oldconfig, restoreScript, e);
            self.g(s, function(deepDataAndEvents, off) {
              if (buf[off]) {
                buf[off](cmp, deepDataAndEvents);
              }
            });
          }
          options.bc(len - old, closingAnimationTime - old);
          /** @type {number} */
          len = closingAnimationTime;
          self.g(spec, function(object, decimal) {
            var self = recurring < val ? spec[spec.length - decimal - 1] : object;
            self.B(len - offset, funcToCall);
          });
          var y = val;
          /** @type {number} */
          var i = len;
          val = right;
          /** @type {boolean} */
          restore = index;
          options.Cb(y, i);
        }
      }
    }
    /**
     * @param {?} func
     * @param {number} recurring
     * @param {?} var_args
     * @return {undefined}
     */
    function zip(func, recurring, var_args) {
      if (recurring) {
        func.Qc(total, 1);
      }
      if (!var_args) {
        /** @type {number} */
        left = Math.min(left, func.Od() + offset);
        /** @type {number} */
        total = Math.max(total, func.lb() + offset);
      }
      spec.push(func);
    }
    /**
     * @return {undefined}
     */
    function main() {
      if (pos) {
        var h = self.P();
        /** @type {number} */
        var ts = Math.min(h - y, e.Mc);
        var recurring = val + ts * t;
        y = h;
        if (recurring * t >= max * t) {
          recurring = max;
        }
        cb(recurring);
        if (!num && recurring * t >= max * t) {
          error(arg);
        } else {
          now(main);
        }
      }
    }
    /**
     * @param {number} size
     * @param {boolean} value
     * @param {boolean} deepDataAndEvents
     * @return {undefined}
     */
    function set(size, value, deepDataAndEvents) {
      if (!pos) {
        /** @type {boolean} */
        pos = index;
        /** @type {boolean} */
        num = deepDataAndEvents;
        /** @type {boolean} */
        arg = value;
        /** @type {number} */
        size = Math.max(size, left);
        /** @type {number} */
        size = Math.min(size, total);
        /** @type {number} */
        max = size;
        /** @type {number} */
        t = max < val ? -1 : 1;
        options.Rc();
        y = self.P();
        now(main);
      }
    }
    /**
     * @param {?} fn
     * @return {undefined}
     */
    function error(fn) {
      if (pos) {
        /** @type {boolean} */
        num = pos = arg = j;
        options.Bc();
        if (fn) {
          fn();
        }
      }
    }
    expr = expr || 0;
    var options = this;
    var pos;
    var max;
    var t;
    var num;
    /** @type {number} */
    var y = 0;
    var r20;
    var restoreScript;
    var oldconfig;
    var arg;
    /** @type {number} */
    var offset = 0;
    /** @type {number} */
    var val = 0;
    /** @type {number} */
    var len = 0;
    var restore;
    /** @type {number} */
    var old = expr;
    var left;
    var total;
    var n;
    /** @type {Array} */
    var spec = [];
    var buf;
    /** @type {function (this:Window, function (number): ?, (Element|null)=): number} */
    var now = global.requestAnimationFrame || (global.webkitRequestAnimationFrame || (global.mozRequestAnimationFrame || global.msRequestAnimationFrame));
    if (self.bf() && self.Zc() < 7) {
      /** @type {null} */
      now = property;
    }
    /** @type {Function} */
    now = now || function(parent) {
      self.G(parent, e.M);
    };
    /**
     * @param {number} operator
     * @param {Object} keyName
     * @param {boolean} deepDataAndEvents
     * @return {undefined}
     */
    options.Ec = function(operator, keyName, deepDataAndEvents) {
      set(operator ? val + operator : total, keyName, deepDataAndEvents);
    };
    /** @type {function (number, boolean, boolean): undefined} */
    options.Gc = set;
    /** @type {function (?): undefined} */
    options.Y = error;
    /**
     * @param {number} b
     * @return {undefined}
     */
    options.Qe = function(b) {
      set(b);
    };
    /**
     * @return {?}
     */
    options.K = function() {
      return val;
    };
    /**
     * @return {?}
     */
    options.Pc = function() {
      return max;
    };
    /**
     * @return {?}
     */
    options.ib = function() {
      return len;
    };
    /** @type {function (number, boolean): undefined} */
    options.B = cb;
    /**
     * @param {?} obj
     * @return {undefined}
     */
    options.ob = function(obj) {
      cb(val + obj);
    };
    /**
     * @return {?}
     */
    options.Wc = function() {
      return pos;
    };
    /**
     * @param {number} name
     * @return {undefined}
     */
    options.Ad = function(name) {
      /** @type {number} */
      n = name;
    };
    /** @type {function (?, number): ?} */
    options.Qc = f;
    /** @type {function (?): undefined} */
    options.pc = next;
    /**
     * @param {?} a
     * @return {undefined}
     */
    options.nc = function(a) {
      zip(a, 0);
    };
    /**
     * @param {?} a
     * @return {undefined}
     */
    options.kc = function(a) {
      zip(a, 1);
    };
    /**
     * @return {?}
     */
    options.Od = function() {
      return left;
    };
    /**
     * @return {?}
     */
    options.lb = function() {
      return total;
    };
    options.Cb = options.Rc = options.Bc = options.bc = self.Kc;
    options.mc = self.P();
    e = self.p({
      M : 16,
      Mc : 50
    }, e);
    n = e.dd;
    buf = self.p({}, self.xd(), e.Pb);
    left = old = expr;
    total = expr + component;
    restoreScript = e.sb || {};
    oldconfig = e.rb || {};
    r20 = self.p({
      fc : self.Ic(e.o) && e.o || target.Xb
    }, e.o);
  }
  /**
   * @return {undefined}
   */
  function C() {
    test.call(this, 0, 0);
    this.Bb = self.Kc;
  }
  new function() {
  };
  var target = {
    /**
     * @param {number} value
     * @return {?}
     */
    Xb : function(value) {
      return-Math.cos(value * Math.PI) / 2 + 0.5;
    },
    /**
     * @param {number} string
     * @return {?}
     */
    Qd : function(string) {
      return string;
    },
    /**
     * @param {number} other
     * @return {?}
     */
    Pd : function(other) {
      return-other * (other - 2);
    }
  };
  var self = new function() {
    /**
     * @return {?}
     */
    function mousedown() {
      if (!node) {
        node = {
          Ke : "ontouchstart" in global || "createTouch" in doc
        };
        var testnames;
        if (nav.pointerEnabled || (testnames = nav.msPointerEnabled)) {
          /** @type {string} */
          node.id = testnames ? "msTouchAction" : "touchAction";
        }
      }
      return node;
    }
    /**
     * @param {number} str
     * @return {?}
     */
    function parse(str) {
      if (!c) {
        /** @type {number} */
        c = -1;
        if (appName == "Microsoft Internet Explorer" && (!!global.attachEvent && !!global.ActiveXObject)) {
          /** @type {number} */
          var msie = ua.indexOf("MSIE");
          /** @type {number} */
          c = content;
          /** @type {number} */
          selector = fn(ua.substring(msie + 5, ua.indexOf(";", msie)));
          data = doc.documentMode || selector;
        } else {
          if (appName == "Netscape" && !!global.addEventListener) {
            /** @type {number} */
            var index = ua.indexOf("Firefox");
            /** @type {number} */
            var indexOfEquals = ua.indexOf("Safari");
            /** @type {number} */
            var chrome = ua.indexOf("Chrome");
            /** @type {number} */
            var offset = ua.indexOf("AppleWebKit");
            if (index >= 0) {
              /** @type {number} */
              c = _c;
              /** @type {number} */
              data = fn(ua.substring(index + 8));
            } else {
              if (indexOfEquals >= 0) {
                /** @type {number} */
                var hashIndex = ua.substring(0, indexOfEquals).lastIndexOf("/");
                /** @type {number} */
                c = chrome >= 0 ? parts : e;
                /** @type {number} */
                data = fn(ua.substring(hashIndex + 1, indexOfEquals));
              } else {
                /** @type {(Array.<string>|null)} */
                var ret = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(ua);
                if (ret) {
                  /** @type {number} */
                  c = content;
                  /** @type {number} */
                  data = selector = fn(ret[1]);
                }
              }
            }
            if (offset >= 0) {
              /** @type {number} */
              res = fn(ua.substring(offset + 12));
            }
          } else {
            /** @type {(Array.<string>|null)} */
            ret = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(ua);
            if (ret) {
              /** @type {number} */
              c = m;
              /** @type {number} */
              data = fn(ret[2]);
            }
          }
        }
      }
      return str == c;
    }
    /**
     * @return {?}
     */
    function queue() {
      return parse(content);
    }
    /**
     * @return {?}
     */
    function onScroll() {
      return queue() && (data < 6 || doc.compatMode == "BackCompat");
    }
    /**
     * @return {?}
     */
    function fun() {
      return parse(e);
    }
    /**
     * @return {?}
     */
    function obj() {
      return parse(parts);
    }
    /**
     * @return {?}
     */
    function hidden() {
      return parse(m);
    }
    /**
     * @return {?}
     */
    function traverseNode() {
      return fun() && (res > 534 && res < 535);
    }
    /**
     * @return {?}
     */
    function length() {
      return queue() && data < 9;
    }
    /**
     * @param {Element} element
     * @return {?}
     */
    function test(element) {
      if (!ret) {
        indexOf(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function(i) {
          if (element.style[i] != _) {
            ret = i;
            return index;
          }
        });
        ret = ret || "transform";
      }
      return ret;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function _toString(obj) {
      return{}.toString.call(obj);
    }
    /**
     * @return {?}
     */
    function getType() {
      if (!result) {
        result = {};
        indexOf(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(m3) {
          result["[object " + m3 + "]"] = m3.toLowerCase();
        });
      }
      return result;
    }
    /**
     * @param {Array} obj
     * @param {Function} callback
     * @return {?}
     */
    function indexOf(obj, callback) {
      if (_toString(obj) == "[object Array]") {
        /** @type {number} */
        var i = 0;
        for (;i < obj.length;i++) {
          if (callback(obj[i], i, obj)) {
            return index;
          }
        }
      } else {
        var key;
        for (key in obj) {
          if (callback(obj[key], key, obj)) {
            return index;
          }
        }
      }
    }
    /**
     * @param {string} obj
     * @return {?}
     */
    function typeOf(obj) {
      return obj == property ? String(obj) : getType()[_toString(obj)] || "object";
    }
    /**
     * @param {?} val
     * @return {?}
     */
    function kindOf(val) {
      var subProp;
      for (subProp in val) {
        return index;
      }
    }
    /**
     * @param {Object} obj
     * @return {?}
     */
    function isPlainObject(obj) {
      try {
        return typeOf(obj) == "object" && (!obj.nodeType && (obj != obj.window && (!obj.constructor || {}.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf"))));
      } catch (b) {
      }
    }
    /**
     * @param {number} moveX
     * @param {number} moveY
     * @return {?}
     */
    function move(moveX, moveY) {
      return{
        x : moveX,
        y : moveY
      };
    }
    /**
     * @param {Function} done
     * @param {number} request
     * @return {undefined}
     */
    function source(done, request) {
      setTimeout(done, request || 0);
    }
    /**
     * @param {string} value
     * @param {Array} result
     * @param {string} key
     * @return {?}
     */
    function require(value, result, key) {
      var rest = !value || value == "inherit" ? "" : value;
      indexOf(result, function(pattern) {
        var end = pattern.exec(rest);
        if (end) {
          var base = rest.substr(0, end.index);
          var path = rest.substr(end.lastIndex + 1, rest.length - (end.lastIndex + 1));
          rest = base + path;
        }
      });
      rest = key + (rest.indexOf(" ") != 0 ? " " : "") + rest;
      return rest;
    }
    /**
     * @param {Element} e
     * @param {string} str
     * @return {undefined}
     */
    function done(e, str) {
      if (data < 9) {
        /** @type {string} */
        e.style.filter = str;
      }
    }
    /**
     * @param {Element} e
     * @param {string} string
     * @param {?} location
     * @return {undefined}
     */
    function build(e, string, location) {
      if (bb < 9) {
        var udataCur = e.style.filter;
        /** @type {RegExp} */
        var rPrefix = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g);
        /** @type {string} */
        var href = string ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + string[0][0] + ", M12=" + string[0][1] + ", M21=" + string[1][0] + ", M22=" + string[1][1] + ", SizingMethod='auto expand')" : "";
        var url = require(udataCur, [rPrefix], href);
        done(e, url);
        item.kd(e, location.y);
        item.hd(e, location.x);
      }
    }
    /**
     * @param {(Array|string)} data
     * @return {undefined}
     */
    function self(data) {
      if (data.constructor === self.caller) {
        if (data.bd) {
          data.bd.apply(data, self.caller.arguments);
        }
      }
    }
    /**
     * @param {Event} ast
     * @return {?}
     */
    function createProxy(ast) {
      return ast || global.event;
    }
    /**
     * @param {Node} elem
     * @param {string} name
     * @param {string} value
     * @return {?}
     */
    function getStyle(elem, name, value) {
      if (value != _) {
        /** @type {string} */
        elem.style[name] = value;
      } else {
        var computed = elem.currentStyle || elem.style;
        value = computed[name];
        if (value == "" && global.getComputedStyle) {
          computed = elem.ownerDocument.defaultView.getComputedStyle(elem, property);
          if (computed) {
            value = computed.getPropertyValue(name) || computed[name];
          }
        }
        return value;
      }
    }
    /**
     * @param {Node} elem
     * @param {string} name
     * @param {string} value
     * @param {number} callback
     * @return {?}
     */
    function prop(elem, name, value, callback) {
      if (value != _) {
        if (callback) {
          value += "px";
        }
        getStyle(elem, name, value);
      } else {
        return fn(getStyle(elem, name));
      }
    }
    /**
     * @param {string} value
     * @param {number} expectedNumberOfNonCommentArgs
     * @return {?}
     */
    function isNaN(value, expectedNumberOfNonCommentArgs) {
      /** @type {number} */
      var restoreScript = expectedNumberOfNonCommentArgs & 2;
      /** @type {Function} */
      var group = expectedNumberOfNonCommentArgs ? prop : getStyle;
      return function(obj, isXML) {
        return group(obj, value, isXML, restoreScript);
      };
    }
    /**
     * @param {Element} o
     * @return {?}
     */
    function run(o) {
      if (queue() && selector < 9) {
        /** @type {(Array.<string>|null)} */
        var elems = /opacity=([^)]*)/.exec(o.style.filter || "");
        return elems ? fn(elems[1]) / 100 : 1;
      } else {
        return fn(o.style.opacity || "1");
      }
    }
    /**
     * @param {Element} element
     * @param {number} value
     * @param {boolean} success
     * @return {undefined}
     */
    function show(element, value, success) {
      if (queue() && selector < 9) {
        var x = element.style.filter || "";
        /** @type {RegExp} */
        var rPrefix = new RegExp(/[\s]*alpha\([^\)]*\)/g);
        /** @type {number} */
        var e = Math.round(100 * value);
        /** @type {string} */
        var later = "";
        if (e < 100 || success) {
          /** @type {string} */
          later = "alpha(opacity=" + e + ") ";
        }
        var hash = require(x, [rPrefix], later);
        done(element, hash);
      } else {
        /** @type {(number|string)} */
        element.style.opacity = value == 1 ? "" : Math.round(value * 100) / 100;
      }
    }
    /**
     * @param {Element} node
     * @param {Object} data
     * @return {undefined}
     */
    function loop(node, data) {
      var position = data.n || 0;
      var index = data.X == _ ? 1 : data.X;
      if (length()) {
        var key = item.me(position / 180 * Math.PI, index, index);
        build(node, !position && index == 1 ? property : key, item.le(key, data.W, data.S));
      } else {
        var name = test(node);
        if (name) {
          /** @type {string} */
          var ref = "rotate(" + position % 360 + "deg) scale(" + index + ")";
          if (obj() && (res > 535 && "ontouchstart" in global)) {
            ref += " perspective(2000px)";
          }
          /** @type {string} */
          node.style[name] = ref;
        }
      }
    }
    /**
     * @param {boolean} node
     * @param {string} key
     * @param {boolean} value
     * @param {string} t
     * @return {?}
     */
    function set(node, key, value, t) {
      t = t || "u";
      node = node ? node.firstChild : property;
      for (;node;node = node.nextSibling) {
        if (node.nodeType == 1) {
          if (is(node, t) == key) {
            return node;
          }
          if (!value) {
            var idx = set(node, key, value, t);
            if (idx) {
              return idx;
            }
          }
        }
      }
    }
    /**
     * @param {boolean} node
     * @param {string} state
     * @param {?} manifest
     * @param {string} t
     * @return {?}
     */
    function parseNode(node, state, manifest, t) {
      t = t || "u";
      /** @type {Array} */
      var matches = [];
      node = node ? node.firstChild : property;
      for (;node;node = node.nextSibling) {
        if (node.nodeType == 1) {
          if (is(node, t) == state) {
            matches.push(node);
          }
          if (!manifest) {
            var val = parseNode(node, state, manifest, t);
            if (val.length) {
              /** @type {Array} */
              matches = matches.concat(val);
            }
          }
        }
      }
      return matches;
    }
    /**
     * @param {boolean} node
     * @param {string} name
     * @param {?} recurse
     * @return {?}
     */
    function filter(node, name, recurse) {
      node = node ? node.firstChild : property;
      for (;node;node = node.nextSibling) {
        if (node.nodeType == 1) {
          if (node.tagName == name) {
            return node;
          }
          if (!recurse) {
            var result = filter(node, name, recurse);
            if (result) {
              return result;
            }
          }
        }
      }
    }
    /**
     * @param {boolean} node
     * @param {?} fn
     * @param {?} cb
     * @return {?}
     */
    function walk(node, fn, cb) {
      /** @type {Array} */
      var flattened = [];
      node = node ? node.firstChild : property;
      for (;node;node = node.nextSibling) {
        if (node.nodeType == 1) {
          if (!fn || node.tagName == fn) {
            flattened.push(node);
          }
          if (!cb) {
            var r = walk(node, fn, cb);
            if (r.length) {
              /** @type {Array} */
              flattened = flattened.concat(r);
            }
          }
        }
      }
      return flattened;
    }
    /**
     * @return {?}
     */
    function merge() {
      /** @type {Arguments} */
      var codeSegments = arguments;
      var target;
      var map;
      var key;
      var val;
      /** @type {number} */
      var ret = 1 & codeSegments[0];
      /** @type {number} */
      var i = 1 + ret;
      target = codeSegments[i - 1] || {};
      for (;i < codeSegments.length;i++) {
        if (map = codeSegments[i]) {
          for (key in map) {
            val = map[key];
            if (val !== _) {
              val = map[key];
              target[key] = ret && isPlainObject(target[key]) ? merge(ret, {}, val) : val;
            }
          }
        }
      }
      return target;
    }
    /**
     * @param {Object} obj
     * @param {Object} dataAndEvents
     * @return {?}
     */
    function clone(obj, dataAndEvents) {
      var res = {};
      var name;
      var val;
      var existing;
      for (name in obj) {
        val = obj[name];
        existing = dataAndEvents[name];
        if (val !== existing) {
          var e;
          if (isPlainObject(val) && isPlainObject(existing)) {
            val = clone(existing);
            /** @type {boolean} */
            e = !kindOf(val);
          }
          if (!e) {
            res[name] = val;
          }
        }
      }
      return res;
    }
    /**
     * @param {string} tag
     * @return {?}
     */
    function newElement(tag) {
      return doc.createElement(tag);
    }
    /**
     * @param {Element} arg
     * @param {string} name
     * @param {string} idx
     * @return {?}
     */
    function select(arg, name, idx) {
      if (idx == _) {
        return arg.getAttribute(name);
      }
      arg.setAttribute(name, idx);
    }
    /**
     * @param {boolean} key
     * @param {string} type
     * @return {?}
     */
    function is(key, type) {
      return select(key, type) || select(key, "data-" + type);
    }
    /**
     * @param {Element} target
     * @param {string} item
     * @return {?}
     */
    function add(target, item) {
      if (item == _) {
        return target.className;
      }
      /** @type {string} */
      target.className = item;
    }
    /**
     * @param {Object} xs
     * @return {?}
     */
    function extend(xs) {
      var result = {};
      indexOf(xs, function(items) {
        result[items] = items;
      });
      return result;
    }
    /**
     * @param {string} method
     * @param {Array} target
     * @return {?}
     */
    function open(method, target) {
      return method.match(target || pattern);
    }
    /**
     * @param {string} keepData
     * @param {Array} options
     * @return {?}
     */
    function remove(keepData, options) {
      return extend(open(keepData || "", options));
    }
    /**
     * @param {string} signal_eof
     * @param {?} result
     * @return {?}
     */
    function next(signal_eof, result) {
      /** @type {string} */
      var optsData = "";
      indexOf(result, function(buf) {
        if (optsData) {
          optsData += signal_eof;
        }
        optsData += buf;
      });
      return optsData;
    }
    /**
     * @param {Element} arg
     * @param {string} name
     * @param {string} key
     * @return {undefined}
     */
    function handler(arg, name, key) {
      add(arg, next(" ", merge(clone(remove(add(arg)), remove(name)), remove(key))));
    }
    /**
     * @param {Object} object
     * @param {boolean} n
     * @param {boolean} next
     * @return {?}
     */
    function after(object, n, next) {
      var set = object.cloneNode(!n);
      if (!next) {
        item.Dc(set, "id");
      }
      return set;
    }
    /**
     * @param {Element} arg
     * @return {undefined}
     */
    function start(arg) {
      /**
       * @return {undefined}
       */
      function animate() {
        handler(arg, res, ret[unselectable || (waiting || (destroying & 2 || destroying))]);
        self.ab(arg, "pointer-events", unselectable ? "none" : "");
      }
      /**
       * @return {undefined}
       */
      function start() {
        /** @type {number} */
        waiting = 0;
        animate();
        item.H(doc, "mouseup", start);
        item.H(doc, "touchend", start);
        item.H(doc, "touchcancel", start);
      }
      /**
       * @param {Event} anchor
       * @return {undefined}
       */
      function initialize(anchor) {
        if (unselectable) {
          item.vb(anchor);
        } else {
          /** @type {number} */
          waiting = 4;
          animate();
          item.a(doc, "mouseup", start);
          item.a(doc, "touchend", start);
          item.a(doc, "touchcancel", start);
        }
      }
      var Ge = this;
      /** @type {string} */
      var symbol = "";
      /** @type {Array} */
      var suiteView = ["av", "pv", "ds", "dn"];
      /** @type {Array} */
      var ret = [];
      var res;
      /** @type {number} */
      var waiting = 0;
      /** @type {number} */
      var destroying = 0;
      /** @type {number} */
      var unselectable = 0;
      /**
       * @param {number} before
       * @return {?}
       */
      Ge.Ge = function(before) {
        if (before != _) {
          /** @type {number} */
          destroying = before & 2 || before & 1;
          animate();
        } else {
          return destroying;
        }
      };
      /**
       * @param {boolean} m0
       * @return {?}
       */
      Ge.Lc = function(m0) {
        if (m0 == _) {
          return!unselectable;
        }
        /** @type {number} */
        unselectable = m0 ? 0 : 3;
        animate();
      };
      arg = item.eb(arg);
      var pathConfig = self.ge(add(arg));
      if (pathConfig) {
        symbol = pathConfig.shift();
      }
      indexOf(suiteView, function(str) {
        ret.push(symbol + str);
      });
      res = next(" ", ret);
      ret.unshift("");
      item.a(arg, "mousedown", initialize);
      item.a(arg, "touchstart", initialize);
    }
    /**
     * @return {?}
     */
    function split() {
      if (!t) {
        t = merge({
          jf : item.kd,
          kf : item.hd,
          /** @type {function (Element, number): undefined} */
          c : item.Re,
          /** @type {function (Element, Object): undefined} */
          qc : item.ke
        }, o);
      }
      return t;
    }
    /**
     * @return {?}
     */
    function promote() {
      split();
      t.qc = t.qc;
      return t;
    }
    var item = this;
    /** @type {RegExp} */
    var pattern = /\S+/g;
    /** @type {number} */
    var content = 1;
    /** @type {number} */
    var _c = 2;
    /** @type {number} */
    var e = 3;
    /** @type {number} */
    var parts = 4;
    /** @type {number} */
    var m = 5;
    var node;
    /** @type {number} */
    var c = 0;
    /** @type {number} */
    var data = 0;
    /** @type {number} */
    var selector = 0;
    /** @type {number} */
    var bb = 0;
    /** @type {number} */
    var res = 0;
    /** @type {(Navigator|null)} */
    var nav = navigator;
    /** @type {string} */
    var appName = nav.appName;
    /** @type {string} */
    var ua = nav.userAgent;
    var ret;
    var result;
    /** @type {function (): ?} */
    item.Fe = mousedown;
    /** @type {function (): ?} */
    item.Yc = queue;
    /** @type {function (): ?} */
    item.bf = fun;
    /** @type {function (): ?} */
    item.af = obj;
    /** @type {function (): ?} */
    item.Uc = hidden;
    /** @type {function (): ?} */
    item.Z = length;
    /**
     * @return {?}
     */
    item.Zc = function() {
      return data;
    };
    /**
     * @return {?}
     */
    item.vc = function() {
      parse();
      return res;
    };
    /** @type {function (Function, number): undefined} */
    item.G = source;
    /** @type {function ((Array|string)): undefined} */
    item.bd = self;
    /**
     * @param {Element} id
     * @return {?}
     */
    item.eb = function(id) {
      if (item.Xe(id)) {
        /** @type {(HTMLElement|null)} */
        id = doc.getElementById(id);
      }
      return id;
    };
    /** @type {function (Event): ?} */
    item.cd = createProxy;
    /**
     * @param {Event} e
     * @return {?}
     */
    item.ac = function(e) {
      e = createProxy(e);
      return e.target || (e.srcElement || doc);
    };
    /**
     * @param {Event} e
     * @return {?}
     */
    item.fd = function(e) {
      e = createProxy(e);
      return{
        x : e.pageX || (e.clientX || 0),
        y : e.pageY || (e.clientY || 0)
      };
    };
    /**
     * @param {Element} func
     * @param {Object} options
     * @return {undefined}
     */
    item.ke = function(func, options) {
      if (traverseNode()) {
        source(item.J(property, loop, func, options));
      } else {
        loop(func, options);
      }
    };
    /**
     * @param {Element} context
     * @param {string} event
     * @return {undefined}
     */
    item.ne = function(context, event) {
      var key = test(context);
      if (key) {
        /** @type {string} */
        context.style[key + "Origin"] = event;
      }
    };
    /**
     * @param {Element} el
     * @param {string} value
     * @return {undefined}
     */
    item.fe = function(el, value) {
      if (queue() && selector < 9 || selector < 10 && onScroll()) {
        el.style.zoom = value == 1 ? "" : value;
      } else {
        var p = test(el);
        if (p) {
          /** @type {string} */
          var camelKey = "scale(" + value + ")";
          var n = el.style[p];
          /** @type {RegExp} */
          var rPrefix = new RegExp(/[\s]*scale\(.*?\)/g);
          var c = require(n, [rPrefix], camelKey);
          el.style[p] = c;
        }
      }
    };
    /**
     * @param {Element} element
     * @return {undefined}
     */
    item.ee = function(element) {
      if (!element.style[test(element)] || element.style[test(element)] == "none") {
        /** @type {string} */
        element.style[test(element)] = "perspective(2000px)";
      }
    };
    /** @type {number} */
    var left = 0;
    /** @type {number} */
    var n = 0;
    /**
     * @param {Window} win
     * @param {Function} done
     * @return {?}
     */
    item.je = function(win, done) {
      return length() ? function() {
        /** @type {boolean} */
        var start = index;
        var input = onScroll() ? win.document.body : win.document.documentElement;
        if (input) {
          /** @type {number} */
          var width = input.offsetWidth - left;
          /** @type {number} */
          var i = input.offsetHeight - n;
          if (width || i) {
            left += width;
            n += i;
          } else {
            /** @type {boolean} */
            start = j;
          }
        }
        if (start) {
          done();
        }
      } : done;
    };
    /**
     * @param {Function} callback
     * @param {Element} target
     * @return {?}
     */
    item.Yb = function(callback, target) {
      return function(e) {
        e = createProxy(e);
        var type = e.type;
        var related = e.relatedTarget || (type == "mouseout" ? e.toElement : e.fromElement);
        if (!related || related !== target && !item.ie(target, related)) {
          callback(e);
        }
      };
    };
    /**
     * @param {Element} el
     * @param {string} type
     * @param {Function} done
     * @param {?} u
     * @return {undefined}
     */
    item.a = function(el, type, done, u) {
      el = item.eb(el);
      if (el.addEventListener) {
        if (type == "mousewheel") {
          el.addEventListener("DOMMouseScroll", done, u);
        }
        el.addEventListener(type, done, u);
      } else {
        if (el.attachEvent) {
          el.attachEvent("on" + type, done);
          if (u) {
            if (el.setCapture) {
              el.setCapture();
            }
          }
        }
      }
    };
    /**
     * @param {Element} el
     * @param {string} name
     * @param {Function} f
     * @param {?} bubble
     * @return {undefined}
     */
    item.H = function(el, name, f, bubble) {
      el = item.eb(el);
      if (el.removeEventListener) {
        if (name == "mousewheel") {
          el.removeEventListener("DOMMouseScroll", f, bubble);
        }
        el.removeEventListener(name, f, bubble);
      } else {
        if (el.detachEvent) {
          el.detachEvent("on" + name, f);
          if (bubble) {
            if (el.releaseCapture) {
              el.releaseCapture();
            }
          }
        }
      }
    };
    /**
     * @param {Event} e
     * @return {undefined}
     */
    item.vb = function(e) {
      e = createProxy(e);
      if (e.preventDefault) {
        e.preventDefault();
      }
      /** @type {boolean} */
      e.cancel = index;
      /** @type {boolean} */
      e.returnValue = j;
    };
    /**
     * @param {Event} e
     * @return {undefined}
     */
    item.Ae = function(e) {
      e = createProxy(e);
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      /** @type {boolean} */
      e.cancelBubble = index;
    };
    /**
     * @param {Array} el
     * @param {Function} fn
     * @return {?}
     */
    item.J = function(el, fn) {
      /** @type {Array.<?>} */
      var args = [].slice.call(arguments, 2);
      /**
       * @return {?}
       */
      var defer = function() {
        /** @type {Array} */
        var newArgs = args.concat([].slice.call(arguments, 0));
        return fn.apply(el, newArgs);
      };
      return defer;
    };
    /**
     * @param {Element} tag
     * @param {number} line
     * @return {?}
     */
    item.we = function(tag, line) {
      if (line == _) {
        return tag.textContent || tag.innerText;
      }
      /** @type {Text} */
      var $ = doc.createTextNode(line);
      item.Ob(tag);
      tag.appendChild($);
    };
    /**
     * @param {Element} target
     * @param {boolean} property
     * @return {?}
     */
    item.kb = function(target, property) {
      /** @type {Array} */
      var acc = [];
      var node = target.firstChild;
      for (;node;node = node.nextSibling) {
        if (property || node.nodeType == 1) {
          acc.push(node);
        }
      }
      return acc;
    };
    /** @type {function (boolean, string, boolean, string): ?} */
    item.v = set;
    /** @type {function (boolean, string, ?): ?} */
    item.ve = filter;
    /** @type {function (boolean, ?, ?): ?} */
    item.qe = walk;
    /**
     * @param {Node} doc
     * @param {string} el
     * @return {?}
     */
    item.re = function(doc, el) {
      return doc.getElementsByTagName(el);
    };
    /** @type {function (): ?} */
    item.p = merge;
    /**
     * @param {Function} html
     * @return {?}
     */
    item.Ic = function(html) {
      return typeOf(html) == "function";
    };
    /**
     * @param {?} k
     * @return {?}
     */
    item.Xe = function(k) {
      return typeOf(k) == "string";
    };
    /**
     * @param {?} n
     * @return {?}
     */
    item.Oc = function(n) {
      return!isNaN(fn(n)) && isFinite(n);
    };
    /** @type {function (Array, Function): ?} */
    item.g = indexOf;
    /**
     * @return {?}
     */
    item.Ib = function() {
      return newElement("DIV");
    };
    /**
     * @return {?}
     */
    item.he = function() {
      return newElement("SPAN");
    };
    /**
     * @return {undefined}
     */
    item.Kc = function() {
    };
    /** @type {function (Element, string, string): ?} */
    item.N = select;
    /** @type {function (boolean, string): ?} */
    item.t = is;
    /** @type {function (Element, string): ?} */
    item.Fc = add;
    /** @type {function (string, Array): ?} */
    item.ge = open;
    /**
     * @param {Element} t
     * @return {?}
     */
    item.xb = function(t) {
      return t.parentNode;
    };
    /**
     * @param {?} x
     * @return {undefined}
     */
    item.I = function(x) {
      item.O(x, "none");
    };
    /**
     * @param {Element} name
     * @param {boolean} p
     * @return {undefined}
     */
    item.r = function(name, p) {
      item.O(name, p ? "none" : "");
    };
    /**
     * @param {Element} s
     * @param {string} file
     * @return {undefined}
     */
    item.Dc = function(s, file) {
      s.removeAttribute(file);
    };
    /**
     * @return {?}
     */
    item.We = function() {
      return queue() && data < 10;
    };
    /**
     * @param {Element} parent
     * @param {number} x
     * @return {undefined}
     */
    item.Re = function(parent, x) {
      if (x) {
        /** @type {string} */
        parent.style.clip = "rect(" + Math.round(x.e) + "px " + Math.round(x.k) + "px " + Math.round(x.l) + "px " + Math.round(x.f) + "px)";
      } else {
        var val = parent.style.cssText;
        /** @type {Array} */
        var expectationResult = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)];
        var d = require(val, expectationResult, "");
        self.Ab(parent, d);
      }
    };
    /**
     * @return {?}
     */
    item.P = function() {
      return+new Date;
    };
    /**
     * @param {Element} name
     * @param {?} a
     * @return {undefined}
     */
    item.E = function(name, a) {
      name.appendChild(a);
    };
    /**
     * @param {?} elem
     * @param {Node} t
     * @param {HTMLElement} x
     * @return {undefined}
     */
    item.yb = function(elem, t, x) {
      (x || t.parentNode).insertBefore(elem, t);
    };
    /**
     * @param {Node} t
     * @param {HTMLElement} x
     * @return {undefined}
     */
    item.Eb = function(t, x) {
      (x || t.parentNode).removeChild(t);
    };
    /**
     * @param {Object} xs
     * @param {Element} s
     * @return {undefined}
     */
    item.Ye = function(xs, s) {
      indexOf(xs, function(color) {
        item.Eb(color, s);
      });
    };
    /**
     * @param {Element} name
     * @return {undefined}
     */
    item.Ob = function(name) {
      item.Ye(item.kb(name, index), name);
    };
    /** @type {function (*): number} */
    var fn = parseFloat;
    /** @type {function (*): number} */
    item.He = fn;
    /**
     * @param {HTMLElement} a
     * @param {HTMLElement} b
     * @return {?}
     */
    item.ie = function(a, b) {
      /** @type {(HTMLElement|null)} */
      var body = doc.body;
      for (;b && (a !== b && body !== b);) {
        try {
          b = b.parentNode;
        } catch (d) {
          return j;
        }
      }
      return a === b;
    };
    /** @type {function (Object, boolean, boolean): ?} */
    item.L = after;
    /**
     * @param {?} path
     * @param {Function} selector
     * @return {undefined}
     */
    item.jb = function(path, selector) {
      /**
       * @param {boolean} stats
       * @param {boolean} i
       * @return {undefined}
       */
      function cb(stats, i) {
        item.H(el, "load", cb);
        item.H(el, "abort", func);
        item.H(el, "error", func);
        if (selector) {
          selector(el, i);
        }
      }
      /**
       * @param {boolean} data
       * @return {undefined}
       */
      function func(data) {
        cb(data, index);
      }
      /** @type {Image} */
      var el = new Image;
      if (hidden() && data < 11.6 || !path) {
        cb(!path);
      } else {
        item.a(el, "load", cb);
        item.a(el, "abort", func);
        item.a(el, "error", func);
        el.src = path;
      }
    };
    /**
     * @param {Array} xs
     * @param {Element} to
     * @param {?} isObject
     * @return {undefined}
     */
    item.Je = function(xs, to, isObject) {
      /**
       * @param {Element} from
       * @return {undefined}
       */
      function resolve(from) {
        c--;
        if (to && (from && from.src == to.src)) {
          /** @type {Element} */
          to = from;
        }
        if (!c) {
          if (isObject) {
            isObject(to);
          }
        }
      }
      var c = xs.length + 1;
      indexOf(xs, function(value) {
        item.jb(value.src, resolve);
      });
      resolve();
    };
    /**
     * @param {Object} child
     * @param {string} doc
     * @param {Object} input
     * @param {boolean} property
     * @return {?}
     */
    item.Ee = function(child, doc, input, property) {
      if (property) {
        child = after(child);
      }
      var index = parseNode(child, doc);
      if (!index.length) {
        index = self.re(child, doc);
      }
      /** @type {number} */
      var l = index.length - 1;
      for (;l > -1;l--) {
        var j = index[l];
        var arg = after(input);
        add(arg, add(j));
        self.Ab(arg, j.style.cssText);
        self.yb(arg, j);
        self.Eb(j);
      }
      return child;
    };
    /**
     * @param {Element} var_args
     * @return {?}
     */
    item.xc = function(var_args) {
      return new start(var_args);
    };
    /** @type {function (Node, string, string): ?} */
    item.ab = getStyle;
    item.hb = isNaN("overflow");
    item.z = isNaN("top", 2);
    item.A = isNaN("left", 2);
    item.m = isNaN("width", 2);
    item.q = isNaN("height", 2);
    item.hd = isNaN("marginLeft", 2);
    item.kd = isNaN("marginTop", 2);
    item.D = isNaN("position");
    item.O = isNaN("display");
    item.u = isNaN("zIndex", 1);
    /**
     * @param {Element} id
     * @param {number} isXML
     * @param {boolean} value
     * @return {?}
     */
    item.gb = function(id, isXML, value) {
      if (isXML != _) {
        show(id, isXML, value);
      } else {
        return run(id);
      }
    };
    /**
     * @param {Element} target
     * @param {string} before
     * @return {?}
     */
    item.Ab = function(target, before) {
      if (before != _) {
        /** @type {string} */
        target.style.cssText = before;
      } else {
        return target.style.cssText;
      }
    };
    var o = {
      /** @type {function (Element, number, boolean): ?} */
      s : item.gb,
      e : item.z,
      f : item.A,
      cb : item.m,
      U : item.q,
      fb : item.D,
      hf : item.O,
      R : item.u
    };
    var t;
    /** @type {function (): ?} */
    item.xd = split;
    /**
     * @param {?} id
     * @param {?} obj
     * @return {undefined}
     */
    item.F = function(id, obj) {
      var doc = split();
      indexOf(obj, function(text, key) {
        if (doc[key]) {
          doc[key](id, text);
        }
      });
    };
    /**
     * @param {?} attr
     * @param {?} walkers
     * @return {undefined}
     */
    item.Dd = function(attr, walkers) {
      promote();
      item.F(attr, walkers);
    };
    var readyList = new function() {
      /**
       * @param {Array} a
       * @param {Array} parent
       * @return {?}
       */
      function promote(a, parent) {
        var numrows = a[0].length;
        var al = a.length;
        var valuesLen = parent[0].length;
        /** @type {Array} */
        var t = [];
        /** @type {number} */
        var j = 0;
        for (;j < al;j++) {
          /** @type {Array} */
          var passedValues = t[j] = [];
          /** @type {number} */
          var i = 0;
          for (;i < valuesLen;i++) {
            /** @type {number} */
            var o = 0;
            /** @type {number} */
            var k = 0;
            for (;k < numrows;k++) {
              o += a[j][k] * parent[k][i];
            }
            /** @type {number} */
            passedValues[i] = o;
          }
        }
        return t;
      }
      var Hb = this;
      /**
       * @param {Array} parent
       * @param {?} opt_offset
       * @return {?}
       */
      Hb.Hb = function(parent, opt_offset) {
        var parentClone = promote(parent, [[opt_offset.x], [opt_offset.y]]);
        return move(parentClone[0][0], parentClone[1][0]);
      };
    };
    /**
     * @param {number} theta2
     * @param {number} s1
     * @param {number} e
     * @return {?}
     */
    item.me = function(theta2, s1, e) {
      /** @type {number} */
      var c2 = Math.cos(theta2);
      /** @type {number} */
      var s2 = Math.sin(theta2);
      return[[c2 * s1, -s2 * e], [s2 * s1, c2 * e]];
    };
    /**
     * @param {Array} obj
     * @param {number} lst
     * @param {number} version
     * @return {?}
     */
    item.le = function(obj, lst, version) {
      var str = readyList.Hb(obj, move(-lst / 2, -version / 2));
      var string = readyList.Hb(obj, move(lst / 2, -version / 2));
      var min = readyList.Hb(obj, move(lst / 2, version / 2));
      var val = readyList.Hb(obj, move(-lst / 2, version / 2));
      return move(Math.min(str.x, string.x, min.x, val.x) + lst / 2, Math.min(str.y, string.y, min.y, val.y) + version / 2);
    };
    /**
     * @param {Object} options
     * @param {Object} data
     * @param {number} x
     * @param {Object} regex
     * @param {Object} b
     * @param {Object} callback
     * @param {Object} value
     * @return {?}
     */
    item.Jc = function(options, data, x, regex, b, callback, value) {
      /** @type {Object} */
      var item = data;
      if (options) {
        item = {};
        var index;
        for (index in data) {
          var mult = callback[index] || 1;
          var range = b[index] || [0, 1];
          /** @type {number} */
          var num = (x - range[0]) / range[1];
          /** @type {number} */
          num = Math.min(Math.max(num, 0), 1);
          /** @type {number} */
          num = num * mult;
          /** @type {number} */
          var valid = Math.floor(num);
          if (num != valid) {
            num -= valid;
          }
          var eval = regex[index] || (regex.fc || target.Xb);
          var f = (0,eval)(num);
          var result;
          var ch = options[index];
          data[index];
          var c = data[index];
          if (self.Oc(c)) {
            result = ch + c * f;
          } else {
            result = self.p({
              qb : {}
            }, options[index]);
            self.g(c.qb, function(saturation, key) {
              /** @type {number} */
              var value = saturation * f;
              /** @type {number} */
              result.qb[key] = value;
              result[key] += value;
            });
          }
          item[index] = result;
        }
        if (data.j || data.n) {
          item.qc = {
            n : item.n || 0,
            X : item.j,
            W : value.W,
            S : value.S
          };
        }
      }
      if (data.c && value.ob) {
        var exports = item.c.qb;
        var propName = (exports.e || 0) + (exports.l || 0);
        var exception = (exports.f || 0) + (exports.k || 0);
        item.f = (item.f || 0) + exception;
        item.e = (item.e || 0) + propName;
        item.c.f -= exception;
        item.c.k -= exception;
        item.c.e -= propName;
        item.c.l -= propName;
      }
      if (item.c && (self.We() && (!item.c.e && (!item.c.f && (item.c.k == value.W && item.c.l == value.S))))) {
        /** @type {null} */
        item.c = property;
      }
      return item;
    };
  };
  var Hd = new function() {
    /**
     * @param {Array} result
     * @param {number} label
     * @param {Array} details
     * @return {undefined}
     */
    function report(result, label, details) {
      details.push(label);
      result[label] = result[label] || [];
      result[label].push(details);
    }
    var Ld = this;
    /**
     * @param {Object} key
     * @return {?}
     */
    Ld.Ld = function(key) {
      /** @type {Array} */
      var expectationResult = [];
      var characterPosition;
      /** @type {number} */
      var i = 0;
      for (;i < key.nb;i++) {
        /** @type {number} */
        characterPosition = 0;
        for (;characterPosition < key.Q;characterPosition++) {
          report(expectationResult, Math.ceil(1E5 * Math.random()) % 13, [i, characterPosition]);
        }
      }
      return expectationResult;
    };
  };
  /**
   * @param {number} name
   * @param {number} player
   * @param {number} params
   * @param {?} context
   * @param {boolean} i
   * @return {undefined}
   */
  var action = function(name, player, params, context, i) {
    /**
     * @param {number} name
     * @param {number} B
     * @return {?}
     */
    function fn(name, B) {
      var e = {
        M : B,
        mb : 1,
        G : 0,
        Q : 1,
        nb : 1,
        s : 0,
        j : 0,
        c : 0,
        ob : j,
        Tb : j,
        Zb : j,
        Hd : Hd.Ld,
        pd : {
          Fd : 0,
          Ed : 0
        },
        /** @type {function (number): ?} */
        o : target.Xb,
        sb : {},
        zb : [],
        rb : {}
      };
      self.p(e, name);
      if (self.Ic(e.o)) {
        e.o = {
          /** @type {function (number): ?} */
          fc : e.o
        };
      }
      /** @type {number} */
      e.ce = Math.ceil(e.mb / e.M);
      /**
       * @param {number} n
       * @param {number} width
       * @return {?}
       */
      e.Ud = function(n, width) {
        n /= e.Q;
        width /= e.nb;
        /** @type {string} */
        var r = n + "x" + width;
        if (!e.zb[r]) {
          e.zb[r] = {
            cb : n,
            U : width
          };
          /** @type {number} */
          var i = 0;
          for (;i < e.Q;i++) {
            /** @type {number} */
            var k = 0;
            for (;k < e.nb;k++) {
              e.zb[r][k + "," + i] = {
                e : k * width,
                k : i * n + n,
                l : k * width + width,
                f : i * n
              };
            }
          }
        }
        return e.zb[r];
      };
      if (e.ec) {
        e.ec = fn(e.ec, B);
        /** @type {boolean} */
        e.Tb = index;
      }
      return e;
    }
    /**
     * @param {?} res
     * @param {Object} item
     * @param {Object} data
     * @param {number} x
     * @param {number} n
     * @param {number} value
     * @return {undefined}
     */
    function cb(res, item, data, x, n, value) {
      /**
       * @param {Object} data
       * @return {?}
       */
      function done(data) {
        var object = data.Hd(data);
        return data.Zb ? object.reverse() : object;
      }
      var first = this;
      var source;
      var params = {};
      var groups = {};
      /** @type {Array} */
      var ids = [];
      var val;
      var result;
      var body;
      var p = data.pd.Fd || 0;
      var q = data.pd.Ed || 0;
      var key = data.Ud(n, value);
      var c = done(data);
      /** @type {number} */
      var ratio = c.length - 1;
      var y = data.mb + data.G * ratio;
      var i = x + y;
      var type = data.Tb;
      var err2;
      i += 50;
      first.gd = i;
      /**
       * @param {number} z
       * @return {undefined}
       */
      first.Jb = function(z) {
        z -= x;
        /** @type {boolean} */
        var err = z < y;
        if (err || err2) {
          /** @type {boolean} */
          err2 = err;
          if (!type) {
            /** @type {number} */
            z = y - z;
          }
          /** @type {number} */
          var minimumCellWidth = Math.ceil(z / data.M);
          self.g(groups, function(b, i) {
            /** @type {number} */
            var state = Math.max(minimumCellWidth, b.Bd);
            /** @type {number} */
            state = Math.min(state, b.length - 1);
            if (b.Vc != state) {
              if (!b.Vc && !type) {
                self.r(ids[i]);
              } else {
                if (state == b.vd) {
                  if (type) {
                    self.I(ids[i]);
                  }
                }
              }
              /** @type {number} */
              b.Vc = state;
              self.Dd(ids[i], b[state]);
            }
          });
        }
      };
      item = self.L(item);
      if (self.Z()) {
        /** @type {boolean} */
        var jssor_slider = !item["no-image"];
        var g = self.qe(item);
        self.g(g, function(id) {
          if (jssor_slider || id["jssor-slider"]) {
            self.gb(id, self.gb(id), index);
          }
        });
      }
      self.g(c, function(s, skip) {
        self.g(s, function(connectionIds) {
          var host = connectionIds[0];
          var port = connectionIds[1];
          /** @type {string} */
          var name = host + "," + port;
          /** @type {boolean} */
          var forward = j;
          /** @type {boolean} */
          var v = j;
          /** @type {boolean} */
          var flip = j;
          if (p && port % 2) {
            if (p & 3) {
              /** @type {boolean} */
              forward = !forward;
            }
            if (p & 12) {
              /** @type {boolean} */
              v = !v;
            }
            if (p & 16) {
              /** @type {boolean} */
              flip = !flip;
            }
          }
          if (q && host % 2) {
            if (q & 3) {
              /** @type {boolean} */
              forward = !forward;
            }
            if (q & 12) {
              /** @type {boolean} */
              v = !v;
            }
            if (q & 16) {
              /** @type {boolean} */
              flip = !flip;
            }
          }
          data.e = data.e || data.c & 4;
          data.l = data.l || data.c & 8;
          data.f = data.f || data.c & 1;
          data.k = data.k || data.c & 2;
          var x = v ? data.l : data.e;
          var y = v ? data.e : data.l;
          var a = forward ? data.k : data.f;
          var b = forward ? data.f : data.k;
          data.c = x || (y || (a || b));
          body = {};
          result = {
            e : 0,
            f : 0,
            s : 1,
            cb : n,
            U : value
          };
          val = self.p({}, result);
          source = self.p({}, key[name]);
          if (data.s) {
            /** @type {number} */
            result.s = 2 - data.s;
          }
          if (data.R) {
            result.R = data.R;
            /** @type {number} */
            val.R = 0;
          }
          var minpidx = data.Q * data.nb > 1 || data.c;
          if (data.j || data.n) {
            /** @type {boolean} */
            var start = index;
            if (self.Z()) {
              if (data.Q * data.nb > 1) {
                /** @type {boolean} */
                start = j;
              } else {
                /** @type {boolean} */
                minpidx = j;
              }
            }
            if (start) {
              /** @type {number} */
              result.j = data.j ? data.j - 1 : 1;
              /** @type {number} */
              val.j = 1;
              if (self.Z() || self.Uc()) {
                /** @type {number} */
                result.j = Math.min(result.j, 2);
              }
              var offset = data.n;
              /** @type {number} */
              result.n = offset * 360 * (flip ? -1 : 1);
              /** @type {number} */
              val.n = 0;
            }
          }
          if (minpidx) {
            if (data.c) {
              var chrsz = data.df || 1;
              var exports = source.qb = {};
              if (x && y) {
                /** @type {number} */
                exports.e = key.U / 2 * chrsz;
                /** @type {number} */
                exports.l = -exports.e;
              } else {
                if (x) {
                  /** @type {number} */
                  exports.l = -key.U * chrsz;
                } else {
                  if (y) {
                    /** @type {number} */
                    exports.e = key.U * chrsz;
                  }
                }
              }
              if (a && b) {
                /** @type {number} */
                exports.f = key.cb / 2 * chrsz;
                /** @type {number} */
                exports.k = -exports.f;
              } else {
                if (a) {
                  /** @type {number} */
                  exports.k = -key.cb * chrsz;
                } else {
                  if (b) {
                    /** @type {number} */
                    exports.f = key.cb * chrsz;
                  }
                }
              }
            }
            body.c = source;
            val.c = key[name];
          }
          /** @type {number} */
          var delta = forward ? 1 : -1;
          /** @type {number} */
          var strMod = v ? 1 : -1;
          if (data.x) {
            result.f += n * data.x * delta;
          }
          if (data.y) {
            result.e += value * data.y * strMod;
          }
          self.g(result, function(len, i) {
            if (self.Oc(len)) {
              if (len != val[i]) {
                /** @type {number} */
                body[i] = len - val[i];
              }
            }
          });
          params[name] = type ? val : result;
          var l = data.ce;
          /** @type {number} */
          var length = Math.round(skip * data.G / data.M);
          /** @type {Array} */
          groups[name] = new Array(length);
          /** @type {number} */
          groups[name].Bd = length;
          /** @type {number} */
          groups[name].vd = length + l - 1;
          /** @type {number} */
          var i = 0;
          for (;i <= l;i++) {
            var node = self.Jc(val, body, i / l, data.o, data.rb, data.sb, {
              ob : data.ob,
              W : n,
              S : value
            });
            node.R = node.R || 1;
            groups[name].push(node);
          }
        });
      });
      c.reverse();
      self.g(c, function(s) {
        self.g(s, function(nv) {
          var name = nv[0];
          var value = nv[1];
          /** @type {string} */
          var id = name + "," + value;
          var model = item;
          if (value || name) {
            model = self.L(item);
          }
          self.F(model, params[id]);
          self.hb(model, "hidden");
          self.D(model, "absolute");
          res.td(model);
          ids[id] = model;
          self.r(model, !type);
        });
      });
    }
    /**
     * @return {undefined}
     */
    function onError() {
      var self = this;
      /** @type {number} */
      var index = 0;
      test.call(self, 0, key);
      /**
       * @param {?} v11
       * @param {number} k
       * @return {undefined}
       */
      self.Cb = function(v11, k) {
        if (k - index > b) {
          /** @type {number} */
          index = k;
          if (ret) {
            ret.Jb(k);
          }
          if (view) {
            view.Jb(k);
          }
        }
      };
      self.wc = response;
    }
    var that = this;
    var key;
    var view;
    var ret;
    /** @type {number} */
    var n = 0;
    var j = context.Md;
    var response;
    /** @type {number} */
    var b = 8;
    /**
     * @return {?}
     */
    that.Ue = function() {
      /** @type {number} */
      var eventName = 0;
      var c = context.ld;
      var width = c.length;
      if (j) {
        /** @type {number} */
        eventName = n++ % width;
      } else {
        /** @type {number} */
        eventName = Math.floor(Math.random() * width);
      }
      if (c[eventName]) {
        /** @type {number} */
        c[eventName].V = eventName;
      }
      return c[eventName];
    };
    /**
     * @param {number} e
     * @param {number} findInt
     * @param {?} number
     * @param {?} object
     * @param {number} res
     * @return {undefined}
     */
    that.Kd = function(e, findInt, number, object, res) {
      /** @type {number} */
      response = res;
      res = fn(res, b);
      var length = object.Hc;
      var n = number.Hc;
      /** @type {boolean} */
      length["no-image"] = !object.uc;
      /** @type {boolean} */
      n["no-image"] = !number.uc;
      var l = length;
      var j = n;
      /** @type {number} */
      var bucketName = res;
      var options = res.ec || fn({}, b);
      if (!res.Tb) {
        l = n;
        j = length;
      }
      var offset = options.pc || 0;
      view = new cb(name, j, options, Math.max(offset - options.M, 0), player, params);
      ret = new cb(name, l, bucketName, Math.max(options.M - offset, 0), player, params);
      view.Jb(0);
      ret.Jb(0);
      /** @type {number} */
      key = Math.max(view.gd, ret.gd);
      /** @type {number} */
      that.V = e;
    };
    /**
     * @return {undefined}
     */
    that.ub = function() {
      name.ub();
      /** @type {null} */
      view = property;
      /** @type {null} */
      ret = property;
    };
    /**
     * @return {?}
     */
    that.Yd = function() {
      /** @type {null} */
      var someProperty = property;
      if (ret) {
        someProperty = new onError;
      }
      return someProperty;
    };
    if (self.Z() || (self.Uc() || i && self.vc() < 537)) {
      /** @type {number} */
      b = 16;
    }
    callback.call(that);
    test.call(that, -1E7, 1E7);
  };
  /**
   * @param {Element} type
   * @param {?} tree
   * @return {undefined}
   */
  var init = function(type, tree) {
    /**
     * @return {undefined}
     */
    function addEventListener() {
      var thisObject = this;
      test.call(thisObject, -1E8, 2E8);
      /**
       * @return {?}
       */
      thisObject.Xd = function() {
        var n = thisObject.ib();
        /** @type {number} */
        var cDigit = Math.floor(n);
        var V = log(cDigit);
        /** @type {number} */
        var fetch = n - Math.floor(n);
        return{
          V : V,
          Wd : cDigit,
          fb : fetch
        };
      };
      /**
       * @param {number} max
       * @param {number} s
       * @return {undefined}
       */
      thisObject.Cb = function(max, s) {
        /** @type {number} */
        var buf = Math.floor(s);
        if (buf != s && s > max) {
          buf++;
        }
        fn(buf, index);
        exports.i(init.Vd, log(s), log(max), s, max);
      };
    }
    /**
     * @return {undefined}
     */
    function Parser() {
      var util = this;
      test.call(util, 0, 0, {
        dd : n
      });
      self.g(values, function(exports) {
        if (flags & 1) {
          exports.Ad(n);
        }
        util.kc(exports);
        exports.pc(filesSent / totalFiles);
      });
    }
    /**
     * @return {undefined}
     */
    function Image() {
      var a = this;
      var e = expr.T;
      test.call(a, -1, 2, {
        /** @type {function (number): ?} */
        o : target.Qd,
        Pb : {
          /** @type {function (?, ?): undefined} */
          fb : shuffle
        },
        dd : n
      }, e, {
        fb : 1
      }, {
        fb : -2
      });
      a.lc = e;
    }
    /**
     * @param {?} results
     * @param {?} a
     * @return {undefined}
     */
    function win(results, a) {
      var self = this;
      var min;
      var max;
      var d;
      var selectedIndex;
      var msg;
      test.call(self, -1E8, 2E8, {
        Mc : 100
      });
      /**
       * @return {undefined}
       */
      self.Rc = function() {
        /** @type {boolean} */
        v = index;
        /** @type {null} */
        method = property;
        exports.i(init.wd, log(data.K()), data.K());
      };
      /**
       * @return {undefined}
       */
      self.Bc = function() {
        /** @type {boolean} */
        v = j;
        /** @type {boolean} */
        selectedIndex = j;
        var req = data.Xd();
        exports.i(init.zd, log(data.K()), data.K());
        if (!req.fb) {
          parse(req.Wd, k);
        }
      };
      /**
       * @param {?} v11
       * @param {number} t
       * @return {undefined}
       */
      self.Cb = function(v11, t) {
        var recurring;
        if (selectedIndex) {
          recurring = msg;
        } else {
          recurring = max;
          if (d) {
            /** @type {number} */
            var radixToPower = t / d;
            recurring = result.rd(radixToPower) * (max - min) + min;
          }
        }
        data.B(recurring);
      };
      /**
       * @param {number} v
       * @param {number} value
       * @param {number} i
       * @param {boolean} reqUrl
       * @return {undefined}
       */
      self.Kb = function(v, value, i, reqUrl) {
        /** @type {number} */
        min = v;
        /** @type {number} */
        max = value;
        /** @type {number} */
        d = i;
        data.B(v);
        self.B(0);
        self.Gc(i, reqUrl);
      };
      /**
       * @param {number} n
       * @return {undefined}
       */
      self.Pe = function(n) {
        /** @type {boolean} */
        selectedIndex = index;
        /** @type {number} */
        msg = n;
        self.Ec(n, property, index);
      };
      /**
       * @param {?} type
       * @return {undefined}
       */
      self.Oe = function(type) {
        msg = type;
      };
      data = new addEventListener;
      data.nc(results);
      data.nc(a);
    }
    /**
     * @return {undefined}
     */
    function run() {
      var data = this;
      var elem = create();
      self.u(elem, 0);
      self.ab(elem, "pointerEvents", "none");
      data.T = elem;
      /**
       * @param {?} doc
       * @return {undefined}
       */
      data.td = function(doc) {
        self.E(elem, doc);
        self.r(elem);
      };
      /**
       * @return {undefined}
       */
      data.ub = function() {
        self.I(elem);
        self.Ob(elem);
      };
    }
    /**
     * @param {string} name
     * @param {number} target
     * @return {undefined}
     */
    function init(name, target) {
      /**
       * @param {boolean} cb
       * @return {undefined}
       */
      function ready(cb) {
        if (obj) {
          obj.Bb();
        }
        if (data) {
          data.Bb();
        }
        init(name, cb);
        /** @type {boolean} */
        restore = index;
        data = new options.C(name, options, 1);
        obj = new options.C(name, options);
        obj.B(0);
        data.B(0);
      }
      /**
       * @return {undefined}
       */
      function cb() {
        if (data.mc < options.mc) {
          ready();
        }
      }
      /**
       * @param {?} callback
       * @param {?} event
       * @param {Object} win
       * @return {undefined}
       */
      function show(callback, event, win) {
        if (!found) {
          /** @type {boolean} */
          found = index;
          if (node && win) {
            var c = win.width;
            var d = win.height;
            var g = c;
            var sp = d;
            if (c && (d && result.db)) {
              if (result.db & 3 && (!(result.db & 4) || (c > h || d > w))) {
                /** @type {boolean} */
                var p = j;
                /** @type {number} */
                var s = h / w * d / c;
                if (result.db & 1) {
                  /** @type {boolean} */
                  p = s > 1;
                } else {
                  if (result.db & 2) {
                    /** @type {boolean} */
                    p = s < 1;
                  }
                }
                g = p ? c * w / d : h;
                sp = p ? w : d * h / c;
              }
              self.m(node, g);
              self.q(node, sp);
              self.z(node, (w - sp) / 2);
              self.A(node, (h - g) / 2);
            }
            self.D(node, "absolute");
            exports.i(init.Ve, target);
          }
        }
        self.I(event);
        if (callback) {
          callback(o);
        }
      }
      /**
       * @param {number} event
       * @param {?} d
       * @param {number} name
       * @param {string} options
       * @return {undefined}
       */
      function change(event, d, name, options) {
        if (options == method && (k == target && position)) {
          if (!Ec) {
            var w = log(event);
            path.Kd(w, target, d, o, name);
            d.De();
            obj.Qc(w, 1);
            obj.B(w);
            r.Kb(event, event, 0);
          }
        }
      }
      /**
       * @param {string} b
       * @return {undefined}
       */
      function errorCallback(b) {
        if (b == method && k == target) {
          if (!s) {
            /** @type {null} */
            var someProperty = property;
            if (path) {
              if (path.V == target) {
                someProperty = path.Yd();
              } else {
                path.ub();
              }
            }
            cb();
            s = new constructor(name, target, someProperty, o.pe(), o.oe());
            s.Nc(rSlash);
          }
          if (!s.Wc()) {
            s.Ub();
          }
        }
      }
      /**
       * @param {number} val
       * @param {number} t
       * @param {boolean} parent
       * @return {undefined}
       */
      function include(val, t, parent) {
        if (val == target) {
          if (val != t) {
            if (values[t]) {
              values[t].ze();
            }
          } else {
            if (!parent) {
              if (s) {
                s.ye();
              }
            }
          }
          if (rSlash) {
            rSlash.Lc();
          }
          var millis = method = self.P();
          o.jb(self.J(property, errorCallback, millis));
        } else {
          /** @type {number} */
          var index = Math.abs(target - val);
          /** @type {number} */
          var firingIndex = pos + result.xe - 1;
          if (!selectedIndex || index <= firingIndex) {
            o.jb();
          }
        }
      }
      /**
       * @return {undefined}
       */
      function next() {
        if (k == target && s) {
          s.Y();
          if (rSlash) {
            rSlash.Be();
          }
          if (rSlash) {
            rSlash.Nd();
          }
          s.Cc();
        }
      }
      /**
       * @return {undefined}
       */
      function r() {
        if (k == target) {
          if (s) {
            s.Y();
          }
        }
      }
      /**
       * @param {?} stat
       * @return {undefined}
       */
      function complete(stat) {
        if (!val) {
          exports.i(init.ue, target, stat);
        }
      }
      /**
       * @return {undefined}
       */
      function parent() {
        rSlash = type.pInstance;
        if (s) {
          s.Nc(rSlash);
        }
      }
      /**
       * @param {Element} arg
       * @param {boolean} cb
       * @param {number} options
       * @return {undefined}
       */
      function init(arg, cb, options) {
        if (self.N(arg, "jssor-slider")) {
          return;
        }
        options = options || 0;
        if (!restore) {
          if (arg.tagName == "IMG") {
            list.push(arg);
            if (!self.N(arg, "src")) {
              /** @type {boolean} */
              selectedIndex = index;
              arg["display-origin"] = self.O(arg);
              self.I(arg);
            }
          }
          if (self.Z()) {
            self.u(arg, (self.u(arg) || 0) + 1);
          }
          if (result.Xc && self.vc()) {
            if (self.vc() < 534 || !Tc && !self.af()) {
              self.ee(arg);
            }
          }
        }
        var c = self.kb(arg);
        self.g(c, function(x) {
          var _nodeTagName = x.tagName;
          var res = self.t(x, "u");
          if (res == "player" && !type) {
            /** @type {Object} */
            type = x;
            if (type.pInstance) {
              parent();
            } else {
              self.a(type, "dataavailable", parent);
            }
          }
          if (res == "caption") {
            if (!self.Yc() && !cb) {
              var a = self.L(x, j, index);
              self.yb(a, x, arg);
              self.Eb(x, arg);
              x = a;
              /** @type {boolean} */
              cb = index;
            }
          } else {
            if (!restore && (!options && !node)) {
              if (_nodeTagName == "A") {
                if (self.t(x, "u") == "image") {
                  node = self.ve(x, "IMG");
                } else {
                  node = self.v(x, "image", index);
                }
                if (node) {
                  /** @type {Object} */
                  value = x;
                  self.F(value, suiteView);
                  key = self.L(value, index);
                  self.O(key, "block");
                  self.F(key, suiteView);
                  self.gb(key, 0);
                  self.ab(key, "backgroundColor", "#000");
                }
              } else {
                if (_nodeTagName == "IMG" && self.t(x, "u") == "image") {
                  /** @type {Object} */
                  node = x;
                }
              }
              if (node) {
                /** @type {number} */
                node.border = 0;
                self.F(node, suiteView);
              }
            }
          }
          init(x, cb, options + 1);
        });
      }
      var o = this;
      var data;
      var obj;
      var html;
      var current;
      var node;
      /** @type {Array} */
      var list = [];
      var value;
      var key;
      var position;
      var found;
      var selectedIndex;
      var restore;
      var s;
      var type;
      var rSlash;
      test.call(o, -pos, pos + 1, {});
      /**
       * @param {?} text
       * @param {string} type
       * @return {undefined}
       */
      o.jb = function(text, type) {
        type = type || current;
        if (list.length && !found) {
          self.r(type);
          if (!position) {
            /** @type {boolean} */
            position = index;
            exports.i(init.Ne, target);
            self.g(list, function(s) {
              if (!self.N(s, "src")) {
                s.src = self.t(s, "src2");
                self.O(s, s["display-origin"]);
              }
            });
          }
          self.Je(list, node, self.J(property, show, text, type));
        } else {
          show(text, type);
        }
      };
      /**
       * @return {?}
       */
      o.te = function() {
        /** @type {number} */
        var start = target;
        if (result.Sb < 0) {
          start -= n;
        }
        var max = start + result.Sb * ratio;
        if (flags & 2) {
          max = log(max);
        }
        if (!(flags & 1)) {
          /** @type {number} */
          max = Math.max(0, Math.min(max, n - pos));
        }
        if (max != target) {
          if (path) {
            var cDigit = path.Ue(n);
            if (cDigit) {
              var vNeedScrollBar = method = self.P();
              var value = values[log(max)];
              return value.jb(self.J(property, change, max, value, cDigit, vNeedScrollBar), current);
            }
          }
          animate(max);
        }
      };
      /**
       * @return {undefined}
       */
      o.Rb = function() {
        include(target, target, index);
      };
      /**
       * @return {undefined}
       */
      o.ze = function() {
        if (rSlash) {
          rSlash.Be();
        }
        if (rSlash) {
          rSlash.Nd();
        }
        o.md();
        if (s) {
          s.se();
        }
        /** @type {null} */
        s = property;
        ready();
      };
      /**
       * @return {undefined}
       */
      o.De = function() {
        self.I(name);
      };
      /**
       * @return {undefined}
       */
      o.md = function() {
        self.r(name);
      };
      /**
       * @return {undefined}
       */
      o.Ce = function() {
        if (rSlash) {
          rSlash.Lc();
        }
      };
      /**
       * @param {number} dataAndEvents
       * @param {number} start
       * @return {undefined}
       */
      o.bc = function(dataAndEvents, start) {
        /** @type {number} */
        var now = pos - start;
        shuffle(html, now);
      };
      /**
       * @return {?}
       */
      o.pe = function() {
        return data;
      };
      /**
       * @return {?}
       */
      o.oe = function() {
        return obj;
      };
      /** @type {number} */
      o.V = target;
      callback.call(o);
      var v = self.v(name, "thumb", index);
      if (v) {
        self.L(v);
        self.Dc(v, "id");
        self.I(v);
      }
      self.r(name);
      current = self.L(c);
      self.u(current, 1E3);
      self.a(name, "click", complete);
      ready(index);
      o.uc = node;
      o.ed = key;
      /** @type {string} */
      o.Hc = name;
      o.lc = html = name;
      self.E(html, current);
      exports.tb(203, include);
      exports.tb(28, r);
      exports.tb(24, next);
    }
    /**
     * @param {boolean} key
     * @param {number} name
     * @param {?} elements
     * @param {?} val
     * @param {?} args
     * @return {undefined}
     */
    function constructor(key, name, elements, val, args) {
      /**
       * @return {undefined}
       */
      function _error() {
        self.Ob(banner);
        if (id) {
          if (found) {
            if (value.ed) {
              self.E(banner, value.ed);
            }
          }
        }
        self.r(banner, !found && value.uc);
      }
      /**
       * @return {undefined}
       */
      function pdataOld() {
        if (start) {
          /** @type {boolean} */
          start = j;
          exports.i(init.Se, name, b, special, t, b, right);
          jQuery.B(t);
        }
        jQuery.Ub();
      }
      /**
       * @param {?} textAlt
       * @return {undefined}
       */
      function errMess(textAlt) {
        text = textAlt;
        jQuery.Y();
        jQuery.Ub();
      }
      var jQuery = this;
      /** @type {number} */
      var special = 0;
      /** @type {number} */
      var cb = 0;
      var capture;
      var t;
      var b;
      var right;
      var found;
      var start;
      var error;
      var text;
      var value = values[name];
      test.call(jQuery, 0, 0);
      /**
       * @return {undefined}
       */
      jQuery.Ub = function() {
        var a = jQuery.ib();
        if (!selectedIndex && (!v && (!text && k == name))) {
          if (!a) {
            if (capture && !found) {
              /** @type {boolean} */
              found = index;
              jQuery.Cc(index);
              exports.i(init.Te, name, special, cb, capture, right);
            }
            _error();
          }
          var ret;
          /** @type {number} */
          var io = init.ad;
          if (a != right) {
            if (a == b) {
              ret = right;
            } else {
              if (a == t) {
                ret = b;
              } else {
                if (!a) {
                  ret = t;
                } else {
                  if (a > b) {
                    /** @type {boolean} */
                    start = index;
                    ret = b;
                    /** @type {number} */
                    io = init.cf;
                  } else {
                    ret = jQuery.Pc();
                  }
                }
              }
            }
          }
          exports.i(io, name, a, special, t, b, right);
          var script_id = position && (!tag || elipsis_pos);
          if (a == right) {
            if (b != right && !(tag & 12) || script_id) {
              value.te();
            }
          } else {
            if (script_id || a != b) {
              jQuery.Gc(ret, pdataOld);
            }
          }
        }
      };
      /**
       * @return {undefined}
       */
      jQuery.ye = function() {
        if (b == right) {
          if (b == jQuery.ib()) {
            jQuery.B(t);
          }
        }
      };
      /**
       * @return {undefined}
       */
      jQuery.se = function() {
        if (path) {
          if (path.V == name) {
            path.ub();
          }
        }
        var left = jQuery.ib();
        if (left < right) {
          exports.i(init.ad, name, -left - 1, special, t, b, right);
        }
      };
      /**
       * @param {boolean} end
       * @return {undefined}
       */
      jQuery.Cc = function(end) {
        if (elements) {
          self.hb(link, end && elements.wc.gf ? "" : "hidden");
        }
      };
      /**
       * @param {number} dataAndEvents
       * @param {number} isNullOverride
       * @return {undefined}
       */
      jQuery.bc = function(dataAndEvents, isNullOverride) {
        if (found && isNullOverride >= capture) {
          /** @type {boolean} */
          found = j;
          _error();
          value.md();
          path.ub();
          exports.i(init.Ze, name, special, cb, capture, right);
        }
        exports.i(init.Ie, name, isNullOverride, special, t, b, right);
      };
      /**
       * @param {boolean} err
       * @return {undefined}
       */
      jQuery.Nc = function(err) {
        if (err && !error) {
          /** @type {boolean} */
          error = err;
          err.tb($JssorPlayer$.Sd, errMess);
        }
      };
      if (elements) {
        jQuery.kc(elements);
      }
      capture = jQuery.lb();
      jQuery.lb();
      jQuery.kc(val);
      t = val.lb();
      b = t + (self.He(self.t(key, "idle")) || msg);
      args.pc(b);
      jQuery.nc(args);
      right = jQuery.lb();
    }
    /**
     * @param {?} obj
     * @param {?} value
     * @return {undefined}
     */
    function shuffle(obj, value) {
      var xProp = x > 0 ? x : left;
      /** @type {number} */
      var g = offset * value * (xProp & 1);
      /** @type {number} */
      var destination = place * value * (xProp >> 1 & 1);
      /** @type {number} */
      g = Math.round(g);
      /** @type {number} */
      destination = Math.round(destination);
      self.A(obj, g);
      self.z(obj, destination);
    }
    /**
     * @return {undefined}
     */
    function debug() {
      prev = v;
      oldconfig = r.Pc();
      value = data.K();
    }
    /**
     * @return {undefined}
     */
    function match() {
      debug();
      if (selectedIndex || !elipsis_pos && tag & 12) {
        r.Y();
        exports.i(init.Le);
      }
    }
    /**
     * @param {boolean} array
     * @return {undefined}
     */
    function f(array) {
      if (!selectedIndex && ((elipsis_pos || !(tag & 12)) && !r.Wc())) {
        var start = data.K();
        /** @type {number} */
        var end = Math.ceil(value);
        if (array && Math.abs(max) >= result.Ac) {
          /** @type {number} */
          end = Math.ceil(start);
          end += adder;
        }
        if (!(flags & 1)) {
          /** @type {number} */
          end = Math.min(n - pos, Math.max(end, 0));
        }
        /** @type {number} */
        var state = Math.abs(end - start);
        /** @type {number} */
        state = 1 - Math.pow(1 - state, 5);
        if (!val && prev) {
          r.Qe(oldconfig);
        } else {
          if (start == end) {
            obj2.Ce();
            obj2.Rb();
          } else {
            r.Kb(start, end, state * html);
          }
        }
      }
    }
    /**
     * @param {Event} packet
     * @return {undefined}
     */
    function add(packet) {
      if (!self.t(self.ac(packet), "nodrag")) {
        self.vb(packet);
      }
    }
    /**
     * @param {Event} e
     * @return {undefined}
     */
    function d(e) {
      onTouchStart(e, 1);
    }
    /**
     * @param {Event} e
     * @param {boolean} touch
     * @return {undefined}
     */
    function onTouchStart(e, touch) {
      e = self.cd(e);
      var key = self.ac(e);
      if (!right && (!self.t(key, "nodrag") && (stopPropagation() && (!touch || e.touches.length == 1)))) {
        /** @type {boolean} */
        selectedIndex = index;
        /** @type {boolean} */
        found = j;
        /** @type {null} */
        method = property;
        self.a(doc, touch ? "touchmove" : "mousemove", start);
        self.P();
        /** @type {number} */
        val = 0;
        match();
        if (!prev) {
          /** @type {number} */
          x = 0;
        }
        if (touch) {
          var downEvent = e.touches[0];
          startX = downEvent.clientX;
          startY = downEvent.clientY;
        } else {
          var t = self.fd(e);
          startX = t.x;
          startY = t.y;
        }
        /** @type {number} */
        max = 0;
        /** @type {number} */
        aux = 0;
        /** @type {number} */
        adder = 0;
        exports.i(init.Me, log(value), value, e);
      }
    }
    /**
     * @param {Event} e
     * @return {undefined}
     */
    function start(e) {
      if (selectedIndex) {
        e = self.cd(e);
        var position;
        if (e.type != "mousemove") {
          var from = e.touches[0];
          position = {
            x : from.clientX,
            y : from.clientY
          };
        } else {
          position = self.fd(e);
        }
        if (position) {
          /** @type {number} */
          var a = position.x - startX;
          /** @type {number} */
          var b = position.y - startY;
          if (Math.floor(value) != value) {
            x = x || left & right;
          }
          if ((a || b) && !x) {
            if (right == 3) {
              if (Math.abs(b) > Math.abs(a)) {
                /** @type {number} */
                x = 2;
              } else {
                /** @type {number} */
                x = 1;
              }
            } else {
              x = right;
            }
            if (pl && (x == 1 && Math.abs(b) - Math.abs(a) > 3)) {
              /** @type {boolean} */
              found = index;
            }
          }
          if (x) {
            /** @type {number} */
            var end = b;
            var i = place;
            if (x == 1) {
              /** @type {number} */
              end = a;
              i = offset;
            }
            if (!(flags & 1)) {
              if (end > 0) {
                /** @type {number} */
                var start = i * k;
                /** @type {number} */
                var len = end - start;
                if (len > 0) {
                  /** @type {number} */
                  end = start + Math.sqrt(len) * 5;
                }
              }
              if (end < 0) {
                /** @type {number} */
                start = i * (n - pos - k);
                /** @type {number} */
                len = -end - start;
                if (len > 0) {
                  /** @type {number} */
                  end = -start - Math.sqrt(len) * 5;
                }
              }
            }
            if (max - aux < -2) {
              /** @type {number} */
              adder = 0;
            } else {
              if (max - aux > 2) {
                /** @type {number} */
                adder = -1;
              }
            }
            aux = max;
            /** @type {number} */
            max = end;
            /** @type {number} */
            t = value - max / i / (authHeader || 1);
            if (max && (x && !found)) {
              self.vb(e);
              if (!v) {
                r.Pe(t);
              } else {
                r.Oe(t);
              }
            }
          }
        }
      }
    }
    /**
     * @return {undefined}
     */
    function complete() {
      done();
      if (selectedIndex) {
        /** @type {boolean} */
        selectedIndex = j;
        self.P();
        self.H(doc, "mousemove", start);
        self.H(doc, "touchmove", start);
        val = max;
        r.Y();
        var message = data.K();
        exports.i(init.sd, log(message), message, log(value), value);
        if (tag & 12) {
          debug();
        }
        f(index);
      }
    }
    /**
     * @param {Event} n
     * @return {undefined}
     */
    function parent(n) {
      if (val) {
        self.Ae(n);
        var node = self.ac(n);
        for (;node && a !== node;) {
          if (node.tagName == "A") {
            self.vb(n);
          }
          try {
            node = node.parentNode;
          } catch (d) {
            break;
          }
        }
      }
    }
    /**
     * @param {number} obj
     * @return {?}
     */
    function clear(obj) {
      values[k];
      k = log(obj);
      obj2 = values[k];
      fn(obj);
      return k;
    }
    /**
     * @param {number} text
     * @param {?} data
     * @return {undefined}
     */
    function parse(text, data) {
      /** @type {number} */
      x = 0;
      clear(text);
      exports.i(init.ud, log(text), data);
    }
    /**
     * @param {number} s
     * @param {boolean} b
     * @return {undefined}
     */
    function fn(s, b) {
      /** @type {number} */
      i = s;
      self.g(out, function(Math) {
        Math.jc(log(s), s, b);
      });
    }
    /**
     * @return {?}
     */
    function stopPropagation() {
      var b = init.nd || 0;
      var leading_space = m2;
      if (pl) {
        if (leading_space & 1) {
          leading_space &= 1;
        }
      }
      init.nd |= leading_space;
      return right = leading_space & ~b;
    }
    /**
     * @return {undefined}
     */
    function done() {
      if (right) {
        init.nd &= ~m2;
        /** @type {number} */
        right = 0;
      }
    }
    /**
     * @return {?}
     */
    function create() {
      var m = self.Ib();
      self.F(m, suiteView);
      self.D(m, "absolute");
      return m;
    }
    /**
     * @param {number} num
     * @return {?}
     */
    function log(num) {
      return(num % n + n) % n;
    }
    /**
     * @param {(Function|number)} dt
     * @param {boolean} callback
     * @return {undefined}
     */
    function tick(dt, callback) {
      /** @type {(Function|number)} */
      var t = dt;
      if (callback) {
        if (!flags) {
          /** @type {number} */
          t = Math.min(Math.max(t + i, 0), n - pos);
          /** @type {boolean} */
          callback = j;
        } else {
          if (flags & 2) {
            t = log(t + i);
            /** @type {boolean} */
            callback = j;
          }
        }
      } else {
        if (flags) {
          t = exports.Cd(t);
        }
      }
      animate(t, result.Lb, callback);
    }
    /**
     * @return {undefined}
     */
    function cb() {
      self.g(out, function(d) {
        d.dc(d.Gb.od <= elipsis_pos);
      });
    }
    /**
     * @return {undefined}
     */
    function end() {
      if (!elipsis_pos) {
        /** @type {number} */
        elipsis_pos = 1;
        cb();
        if (!selectedIndex) {
          if (tag & 12) {
            f();
          }
          if (tag & 3) {
            values[k].Rb();
          }
        }
      }
    }
    /**
     * @return {undefined}
     */
    function bind() {
      if (elipsis_pos) {
        /** @type {number} */
        elipsis_pos = 0;
        cb();
        if (!selectedIndex) {
          if (!!(tag & 12)) {
            match();
          }
        }
      }
    }
    /**
     * @return {undefined}
     */
    function _init() {
      suiteView = {
        cb : h,
        U : w,
        e : 0,
        f : 0
      };
      self.g(children, function(arg) {
        self.F(arg, suiteView);
        self.D(arg, "absolute");
        self.hb(arg, "hidden");
        self.I(arg);
      });
      self.F(c, suiteView);
    }
    /**
     * @param {number} last
     * @param {number} pattern
     * @return {undefined}
     */
    function next(last, pattern) {
      animate(last, pattern, index);
    }
    /**
     * @param {number} target
     * @param {number} prop
     * @param {boolean} i
     * @return {undefined}
     */
    function animate(target, prop, i) {
      if (caseSensitive && (!selectedIndex && (elipsis_pos || !(tag & 12)) || result.qd)) {
        /** @type {boolean} */
        v = index;
        /** @type {boolean} */
        selectedIndex = j;
        r.Y();
        if (prop == _) {
          prop = html;
        }
        var w = parser.ib();
        /** @type {number} */
        var width = target;
        if (i) {
          width = w + target;
          if (target > 0) {
            /** @type {number} */
            width = Math.ceil(width);
          } else {
            /** @type {number} */
            width = Math.floor(width);
          }
        }
        if (flags & 2) {
          width = log(width);
        }
        if (!(flags & 1)) {
          /** @type {number} */
          width = Math.max(0, Math.min(width, n - pos));
        }
        /** @type {number} */
        var a = (width - w) % n;
        width = w + a;
        /** @type {number} */
        var fromIndex = w == width ? 0 : prop * Math.abs(a);
        /** @type {number} */
        fromIndex = Math.min(fromIndex, prop * pos * 1.5);
        r.Kb(w, width, fromIndex || 1);
      }
    }
    /**
     * @return {?}
     */
    function message() {
      return self.m(event || type);
    }
    /**
     * @return {?}
     */
    function resize() {
      return self.q(event || type);
    }
    /**
     * @param {number} item
     * @param {boolean} forward
     * @return {?}
     */
    function append(item, forward) {
      if (item == _) {
        return self.m(type);
      }
      if (!event) {
        var results = self.Ib(doc);
        self.Fc(results, self.Fc(type));
        self.Ab(results, self.Ab(type));
        self.O(results, "block");
        self.D(results, "relative");
        self.z(results, 0);
        self.A(results, 0);
        self.hb(results, "visible");
        event = self.Ib(doc);
        self.D(event, "absolute");
        self.z(event, 0);
        self.A(event, 0);
        self.m(event, self.m(type));
        self.q(event, self.q(type));
        self.ne(event, "0 0");
        self.E(event, results);
        var s = self.kb(type);
        self.E(type, event);
        self.ab(type, "backgroundImage", "");
        self.g(s, function(body) {
          self.E(self.t(body, "noscale") ? type : results, body);
        });
      }
      /** @type {number} */
      authHeader = item / (forward ? self.q : self.m)(event);
      self.fe(event, authHeader);
      var valueType = forward ? authHeader * message() : item;
      var e = forward ? item : authHeader * resize();
      self.m(type, valueType);
      self.q(type, e);
      self.g(out, function(valueFn) {
        valueFn.oc(valueType, e);
      });
    }
    var exports = this;
    /**
     * @return {undefined}
     */
    exports.Ec = function() {
      if (!position) {
        /** @type {boolean} */
        position = index;
        if (values[k]) {
          values[k].Rb();
        }
      }
    };
    /** @type {function (): ?} */
    exports.W = message;
    /** @type {function (): ?} */
    exports.S = resize;
    /** @type {function (number, boolean): ?} */
    exports.Td = append;
    /**
     * @param {number} y
     * @return {?}
     */
    exports.Cd = function(y) {
      /** @type {number} */
      var size = Math.ceil(log(filesSent / totalFiles));
      var offset = log(y - i + size);
      if (offset > pos) {
        if (y - i > n / 2) {
          y -= n;
        } else {
          if (y - i <= -n / 2) {
            y += n;
          }
        }
      } else {
        /** @type {number} */
        y = i + offset - size;
      }
      return y;
    };
    callback.call(exports);
    exports.T = type = self.eb(type);
    var result = self.p({
      db : 0,
      xe : 1,
      gc : 0,
      ic : j,
      wb : 1,
      Xc : index,
      qd : index,
      Sb : 1,
      hc : 3E3,
      zc : 1,
      Lb : 500,
      /** @type {function (number): ?} */
      rd : target.Pd,
      Ac : 20,
      yc : 0,
      bb : 1,
      Tc : 0,
      Sc : 1,
      Db : 1,
      tc : 1
    }, tree);
    if (result.be != _) {
      result.hc = result.be;
    }
    if (result.Q != _) {
      result.bb = result.Q;
    }
    /** @type {number} */
    var left = result.Db & 3;
    /** @type {number} */
    var ratio = (result.Db & 4) / -4 || 1;
    var item = result.yd;
    var options = self.p({
      /** @type {function (): undefined} */
      C : C
    }, result.ef);
    var game = result.de;
    var error = result.Zd;
    var tile = result.ff;
    /** @type {boolean} */
    var udataCur = !result.Sc;
    var event;
    var a = self.v(type, "slides", udataCur);
    var c = self.v(type, "loading", udataCur) || self.Ib(doc);
    var name = self.v(type, "navigator", udataCur);
    var el = self.v(type, "arrowleft", udataCur);
    var charset = self.v(type, "arrowright", udataCur);
    var entity = self.v(type, "thumbnavigator", udataCur);
    var ap = self.m(a);
    var selected = self.q(a);
    var suiteView;
    /** @type {Array} */
    var children = [];
    var className = self.kb(a);
    self.g(className, function(child) {
      if (child.tagName == "DIV" && !self.t(child, "u")) {
        children.push(child);
      } else {
        if (self.Z()) {
          self.u(child, (self.u(child) || 0) + 1);
        }
      }
    });
    /** @type {number} */
    var k = -1;
    var i;
    var obj2;
    /** @type {number} */
    var n = children.length;
    var h = result.ae || ap;
    var w = result.Rd || selected;
    var m = result.yc;
    var offset = h + m;
    var place = w + m;
    var totalFiles = left & 1 ? offset : place;
    /** @type {number} */
    var pos = Math.min(result.bb, n);
    var link;
    var x;
    var right;
    var found;
    /** @type {Array} */
    var out = [];
    var dep;
    var instance;
    var copies;
    var id;
    var Ec;
    var position;
    var tag = result.zc;
    var msg = result.hc;
    var html = result.Lb;
    var RegExp;
    var Tc;
    var filesSent;
    /** @type {boolean} */
    var caseSensitive = pos < n;
    var flags = caseSensitive ? result.wb : 0;
    var m2;
    var val;
    /** @type {number} */
    var elipsis_pos = 1;
    var v;
    var selectedIndex;
    var method;
    /** @type {number} */
    var startX = 0;
    /** @type {number} */
    var startY = 0;
    var max;
    var aux;
    var adder;
    var parser;
    var data;
    var obj;
    var r;
    var expr = new run;
    var authHeader;
    position = result.ic;
    exports.Gb = tree;
    _init();
    self.N(type, "jssor-slider", index);
    self.u(a, self.u(a) || 0);
    self.D(a, "absolute");
    link = self.L(a, index);
    self.yb(link, a);
    if (item) {
      id = item.Id;
      RegExp = item.C;
      Tc = pos == 1 && (n > 1 && (RegExp && (!self.Yc() || self.Zc() >= 8)));
    }
    filesSent = Tc || (pos >= n || !(flags & 1)) ? 0 : result.Tc;
    /** @type {number} */
    m2 = (pos > 1 || filesSent ? left : -1) & result.tc;
    var arg = a;
    /** @type {Array} */
    var values = [];
    var path;
    var banner;
    var p = self.Fe();
    var pl = p.Ke;
    var value;
    var prev;
    var oldconfig;
    var t;
    if (p.id) {
      self.ab(arg, p.id, [property, "pan-y", "pan-x", "none"][m2] || "");
    }
    obj = new Image;
    if (Tc) {
      path = new RegExp(expr, h, w, item, pl);
    }
    self.E(link, obj.lc);
    self.hb(a, "hidden");
    banner = create();
    self.ab(banner, "backgroundColor", "#000");
    self.gb(banner, 0);
    self.yb(banner, arg.firstChild, arg);
    /** @type {number} */
    var children_i = 0;
    for (;children_i < children.length;children_i++) {
      var child = children[children_i];
      var templatePromise = new init(child, children_i);
      values.push(templatePromise);
    }
    self.I(c);
    parser = new Parser;
    r = new win(parser, obj);
    if (m2) {
      self.a(a, "mousedown", onTouchStart);
      self.a(a, "touchstart", d);
      self.a(a, "dragstart", add);
      self.a(a, "selectstart", add);
      self.a(doc, "mouseup", complete);
      self.a(doc, "touchend", complete);
      self.a(doc, "touchcancel", complete);
      self.a(global, "blur", complete);
    }
    tag &= pl ? 10 : 5;
    if (name && game) {
      dep = new game.C(name, game, message(), resize());
      out.push(dep);
    }
    if (error && (el && charset)) {
      error.wb = flags;
      /** @type {number} */
      error.bb = pos;
      instance = new error.C(el, charset, error, message(), resize());
      out.push(instance);
    }
    if (entity && tile) {
      tile.gc = result.gc;
      copies = new tile.C(entity, tile);
      out.push(copies);
    }
    self.g(out, function(console) {
      console.Mb(n, values, c);
      console.tb(options.Nb, tick);
    });
    append(message());
    self.a(a, "click", parent);
    self.a(type, "mouseout", self.Yb(end, type));
    self.a(type, "mouseover", self.Yb(bind, type));
    cb();
    if (result.Jd) {
      self.a(doc, "keydown", function(event) {
        if (event.keyCode == 37) {
          next(-1);
        } else {
          if (event.keyCode == 39) {
            next(1);
          }
        }
      });
    }
    var height = result.gc;
    if (!(flags & 1)) {
      /** @type {number} */
      height = Math.max(0, Math.min(height, n - pos));
    }
    r.Kb(height, height, 0);
  };
  /** @type {number} */
  init.ue = 21;
  /** @type {number} */
  init.Me = 22;
  /** @type {number} */
  init.sd = 23;
  /** @type {number} */
  init.wd = 24;
  /** @type {number} */
  init.zd = 25;
  /** @type {number} */
  init.Ne = 26;
  /** @type {number} */
  init.Ve = 27;
  /** @type {number} */
  init.Le = 28;
  /** @type {number} */
  init.Vd = 202;
  /** @type {number} */
  init.ud = 203;
  /** @type {number} */
  init.Te = 206;
  /** @type {number} */
  init.Ze = 207;
  /** @type {number} */
  init.Ie = 208;
  /** @type {number} */
  init.ad = 209;
  /** @type {number} */
  init.cf = 210;
  /** @type {number} */
  init.Se = 211;
  var options = {
    Nb : 1
  };
  /**
   * @param {Element} d
   * @param {?} key
   * @return {undefined}
   */
  var run = function(d, key) {
    /**
     * @param {number} key
     * @return {undefined}
     */
    function fn(key) {
      if (key != -1) {
        output[key].Ge(key == received);
      }
    }
    /**
     * @param {?} value
     * @return {undefined}
     */
    function ok(value) {
      c.i(options.Nb, value * scale);
    }
    var c = this;
    callback.call(c);
    d = self.eb(d);
    var n;
    var result;
    var b;
    var skip;
    /** @type {number} */
    var received = 0;
    var data;
    var scale;
    var perRow;
    var node;
    var offset;
    var chainable;
    var v;
    var padding;
    var t;
    /** @type {Array} */
    var qs = [];
    /** @type {Array} */
    var output = [];
    /** @type {Element} */
    c.T = d;
    /**
     * @param {?} val
     * @return {undefined}
     */
    c.jc = function(val) {
      if (val != skip) {
        var camelKey = received;
        /** @type {number} */
        var data = Math.floor(val / scale);
        /** @type {number} */
        received = data;
        skip = val;
        fn(camelKey);
        fn(data);
      }
    };
    /**
     * @param {boolean} n
     * @return {undefined}
     */
    c.dc = function(n) {
      self.r(d, n);
    };
    var restore;
    /**
     * @param {?} valueType
     * @param {Text} a
     * @return {undefined}
     */
    c.oc = function(valueType, a) {
      if (!restore || data.X == j) {
        valueType = self.xb(d).clientWidth;
        a = self.xb(d).clientHeight;
        if (data.pb & 1) {
          self.A(d, (valueType - result) / 2);
        }
        if (data.pb & 2) {
          self.z(d, (a - b) / 2);
        }
        /** @type {boolean} */
        restore = index;
      }
    };
    var selectedIndex;
    /**
     * @param {number} size
     * @return {undefined}
     */
    c.Mb = function(size) {
      if (!selectedIndex) {
        /** @type {number} */
        n = Math.ceil(size / scale);
        /** @type {number} */
        received = 0;
        var playerWidth = padding + node;
        var r = t + offset;
        /** @type {number} */
        var elems = Math.ceil(n / perRow) - 1;
        result = padding + playerWidth * (!chainable ? elems : perRow - 1);
        b = t + r * (chainable ? elems : perRow - 1);
        self.m(d, result);
        self.q(d, b);
        /** @type {number} */
        var i = 0;
        for (;i < n;i++) {
          var value = self.he();
          self.we(value, i + 1);
          var val = self.Ee(v, "numbertemplate", value, index);
          self.D(val, "absolute");
          /** @type {number} */
          var c = i % (elems + 1);
          self.A(val, !chainable ? playerWidth * c : i % perRow * playerWidth);
          self.z(val, chainable ? r * c : Math.floor(i / (elems + 1)) * r);
          self.E(d, val);
          qs[i] = val;
          if (data.Wb & 1) {
            self.a(val, "click", self.J(property, ok, i));
          }
          if (data.Wb & 2) {
            self.a(val, "mouseover", self.Yb(self.J(property, ok, i), val));
          }
          output[i] = self.xc(val);
        }
        /** @type {boolean} */
        selectedIndex = index;
      }
    };
    c.Gb = data = self.p({
      cc : 0,
      Qb : 0,
      Vb : 1,
      Wb : 1
    }, key);
    v = self.v(d, "prototype");
    padding = self.m(v);
    t = self.q(v);
    self.Eb(v, d);
    scale = data.Fb || 1;
    perRow = data.jd || 1;
    node = data.cc;
    offset = data.Qb;
    /** @type {number} */
    chainable = data.Vb - 1;
    if (data.X == j) {
      self.N(d, "noscale", index);
    }
  };
  /**
   * @param {Element} el
   * @param {Element} val
   * @param {?} k
   * @return {undefined}
   */
  var s = function(el, val, k) {
    /**
     * @param {?} done
     * @return {undefined}
     */
    function a(done) {
      app.i(options.Nb, done, index);
    }
    /**
     * @param {boolean} err
     * @return {undefined}
     */
    function _error(err) {
      self.r(el, err || !k.wb && text == 0);
      self.r(val, err || !k.wb && text >= bulk - k.bb);
      /** @type {boolean} */
      error = err;
    }
    var app = this;
    callback.call(app);
    var error;
    var bulk;
    var text;
    var v;
    var next;
    var fontSize = self.m(el);
    var b = self.q(el);
    /**
     * @param {number} textAlt
     * @param {number} source
     * @param {boolean} v12
     * @return {undefined}
     */
    app.jc = function(textAlt, source, v12) {
      if (v12) {
        /** @type {number} */
        text = source;
      } else {
        /** @type {number} */
        text = textAlt;
        _error(error);
      }
    };
    /** @type {function (boolean): undefined} */
    app.dc = _error;
    var restore;
    /**
     * @param {?} valueType
     * @param {Text} a
     * @return {undefined}
     */
    app.oc = function(valueType, a) {
      if (!restore || v.X == j) {
        var browserWidth = self.xb(el).clientWidth;
        a = self.xb(el).clientHeight;
        if (v.pb & 1) {
          self.A(el, (browserWidth - fontSize) / 2);
          self.A(val, (browserWidth - fontSize) / 2);
        }
        if (v.pb & 2) {
          self.z(el, (a - b) / 2);
          self.z(val, (a - b) / 2);
        }
        /** @type {boolean} */
        restore = index;
      }
    };
    var selectedIndex;
    /**
     * @param {?} fn
     * @return {undefined}
     */
    app.Mb = function(fn) {
      bulk = fn;
      /** @type {number} */
      text = 0;
      if (!selectedIndex) {
        self.a(el, "click", self.J(property, a, -next));
        self.a(val, "click", self.J(property, a, next));
        self.xc(el);
        self.xc(val);
        /** @type {boolean} */
        selectedIndex = index;
      }
    };
    app.Gb = v = self.p({
      Fb : 1
    }, k);
    next = v.Fb;
    if (v.X == j) {
      self.N(el, "noscale", index);
      self.N(val, "noscale", index);
    }
  };
  /**
   * @param {?} element
   * @return {undefined}
   */
  jssor_slider1_starter = function(element) {
    /**
     * @return {undefined}
     */
    function add() {
      var bodyHeight = item.T.parentNode.clientWidth;
      if (bodyHeight) {
        item.Td(Math.min(bodyHeight, 600));
      } else {
        self.G(add, 30);
      }
    }
    /** @type {Array} */
    var parse_ld = [{
      mb : 1200,
      s : 2
    }];
    var opt_data = {
      ic : index,
      Sb : 1,
      hc : 3E3,
      zc : 1,
      Jd : index,
      Lb : 500,
      Ac : 20,
      yc : 0,
      bb : 1,
      Tc : 0,
      Sc : 1,
      Db : 1,
      tc : 3,
      yd : {
        /** @type {function (number, number, number, ?, boolean): undefined} */
        C : action,
        ld : parse_ld,
        Md : 1,
        Id : index
      },
      de : {
        /** @type {function (Element, ?): undefined} */
        C : run,
        od : 2,
        pb : 1,
        Fb : 1,
        jd : 1,
        cc : 10,
        Qb : 10,
        Vb : 1
      },
      Zd : {
        /** @type {function (Element, Element, ?): undefined} */
        C : s,
        od : 2,
        Fb : 1
      }
    };
    var item = new init(element, opt_data);
    add();
    self.a(global, "load", add);
    self.a(global, "resize", self.je(global, add));
    self.a(global, "orientationchange", add);
  };
})(window, document, Math, null, true, false);
