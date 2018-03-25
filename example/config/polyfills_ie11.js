if (Array.from === undefined) {
  Array.from = function(iterable) {
    if (iterable.length === undefined) {
      // Generators
      if (typeof iterable.next === 'function') {
        var array = [];
        while (true) {
          var yielded = iterable.next();
          if (yielded.done === true) {
            return array;
          }
          array.push(yielded.value);
        }
      }
      // Map and Set
      if (typeof iterable.forEach === 'function') {
        var list = [];
        var callback =
            typeof iterable.set === 'function' ? function(value, key) {
              list.push([key, value]);
            } : function(value) {
              list.push(value);
            };
        iterable.forEach(callback);
        return list;
      }
    }
    return Array.prototype.slice.call(iterable);
  }
  console.info('Patched Array.from');
}

if (Array.prototype.includes === undefined) {
  // eslint-disable-next-line
  Array.prototype.includes = function(item) {
    return this.indexOf(item) > -1;
  };
  console.info('Patched Array.prototype.includes');
}

if (Array.prototype.find === undefined) {
  // eslint-disable-next-line
  Array.prototype.find = function(callback) {
    for (var i = 0; i < this.length; i++) {
      var item = this[i];
      if (callback(item)) {
        return item;
      }
    }
    return null;
  };
  console.info('Patched Array.prototype.find');
}

if (Array.prototype.findIndex === undefined) {
  // eslint-disable-next-line
  Array.prototype.findIndex = function(callback) {
    for (var i = 0; i < this.length; i++) {
      var item = this[i];
      if (callback(item)) {
        return i;
      }
    }
    return -1;
  };
  console.info('Patched Array.prototype.findIndex');
}

if (window.Symbol === undefined) {
  window.Symbol = (function(key) {
    var counter = Math.round(Math.random() * 0xfffffff);
    return function() {
      return '__key(' + (key || '') + ')__' + String(counter++) +'__';
    };
  })();
  Symbol.iterator = Symbol('iterator');
  console.info('Patched Symbol');
}

var GeneratorPolyfill = function(iterable) {
  this.iterable_ = Array.from(iterable);
  this.pointer_ = 0;
  this.done_ = false;
};

GeneratorPolyfill.generator = Array.prototype[Symbol.iterator] || function() {
  return new GeneratorPolyfill(this);
};

GeneratorPolyfill.prototype = new function() {
  this.next = function () {
    if (!this.done_) {
      this.done_ = this.pointer_ >= this.iterable_.length;
    }
    var value = undefined;
    if (!this.done_) {
      value = this.iterable_[this.pointer_++];
    }
    return {value: value, done: this.done_};
  }

  this.return = function(value) {
    this.done_ = true;
    return {value: value, done: this.done_};
  }
}();

(function() {
  var getName = function(class_) {
    if (class_.name !== undefined) {
      return class_.name;
    }
    var str = String(class_);
    var match = /[A-Z][^ (\]]+/.exec(str);
    if (match) {
      return match[0];
    }
    return str;
  }
  var classes = [Array, NodeList, Map, Set];
  for (var i = 0; i < classes.length; i++) {
    var class_ = classes[i];
    if (class_.prototype[Symbol.iterator] === undefined) {
      class_.prototype[Symbol.iterator] = GeneratorPolyfill.generator;
      console.info(
          'Patched ' + getName(class_) + '.prototype[Symbol.iterator]');
    }
  }
})();

if (new Map([[1, 1]]).size === 0) {
  (function(MapClass) {
    // eslint-disable-next-line
    Map = function(initList) {
      var map = new MapClass();
      if (initList !== undefined) {
        for (var i = 0; i < initList.length; i++) {
          map.set(initList[i][0], initList[i][1]);
        }
      }
      return map;
    };
    MapClass.prototype.constructor = Map;
    console.info('Patched initList for Map');
  })(Map);
}

if (String.prototype.includes === undefined) {
  // eslint-disable-next-line
  String.prototype.includes = function(item) {
    return this.indexOf(item) > -1;
  }
  console.info('Patched String.prototype.includes');
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
if (String.prototype.repeat === undefined) {
  // eslint-disable-next-line
  String.prototype.repeat = function(count) {
    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    var str = '' + this;
    count = +count;
    // eslint-disable-next-line
    if (count !== count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count === Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length === 0 || count === 0) {
      return '';
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (var i = 0; i < count; i++) {
      rpt += str;
    }
    return rpt;
  }
  console.info('Patched String.prototype.repeat');
}

if (Object.assign === undefined) {
  Object.assign = function(target, sources) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      if (source !== null && source !== undefined) {
        for (var prop in source) {
          if (source.hasOwnProperty(prop)) {
            target[prop] = source[prop];
          }
        }
      }
    }
    return target;
  }
  console.info('Patched Object.assign');
}

if (Element.prototype.remove === undefined) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  }
  console.info('Patched Element.prototype.remove');
}

try {
  new Event('change', {bubbles: true});
} catch (error) {
  (function(EventPrototype) {
    // eslint-disable-next-line
    Event = function(type, options) {
      var event = document.createEvent('Event');
      event.initEvent(
          type, Boolean(options.bubbles), Boolean(options.cancelable));
      return event;
    };
    // TODO check this
    Event.prototype = EventPrototype.prototype;
  })(Event);
  console.info('Patched new Event(type, options)');
}

try {
  new CustomEvent('test', {detail: 'foo'});
} catch (error) {
  (function(EventPrototype) {
    // eslint-disable-next-line
    CustomEvent = function(type, options) {
      if (options === undefined) {
        options = {bubbles: false, cancelable: false, detail: undefined};
      }
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent(
          type, Boolean(options.bubbles), Boolean(options.cancelable),
          options.detail);
      return event;
    };
    // TODO check this
    CustomEvent.prototype = EventPrototype.prototype;
  })(CustomEvent || Event);
  console.info('Patched new CusyomEvent(type, options)');
}

if (Number.parseInt === undefined) {
  Number.parseInt = parseInt;
  console.info('Patched Number.parseInt');
}

if (document.createElement('div').classList.toggle('foo', false) === true) {
  DOMTokenList.prototype.toggle = (function(toggle) {
    return function(className, state) {
      if (state === undefined) {
        return toggle.call(this, className);
      }
      if (state) {
        this.add(className);
      } else {
        this.remove(className);
      }
      return this.contains(className);
    };
  })(DOMTokenList.prototype.toggle);
  console.info('Patched DOMTokenList.prototype.toggle');
}

if (SVGElement.prototype.__lookupGetter__('classList') === undefined) {
  var classListGetter =  HTMLElement.prototype.__lookupGetter__('classList');
  if (classListGetter) {
    SVGElement.prototype.__defineGetter__('classList', function() {
      return classListGetter.call(this);
    });
    console.info('Patched SVGElement.prototype.classList');
  }
}

if (!Element.prototype.matches) {
  Element.prototype.matches =
      Element.prototype.msMatchesSelector || function(selector) {
        var candidates = this.parentNode.querySelectorAll(selector);
        for (var i = 0; i < candidates.length; i++) {
          var candidate = candidates[i];
          if (candidate === this) {
            return true
          }
        }
        return false;
      };
  console.info('Patched Element.prototype.matches');
}


if (!Element.prototype.closest) {
  Element.prototype.closest = function(selector) {
    var ele = this;
    while (ele && ele.nodeType === Node.ELEMENT_NODE) {
      if (ele.matches(selector)) {
        return ele;
      }
      ele = ele.parentNode;
    }
    return null;
  };
  console.info('Patched Element.prototype.closest');
}
