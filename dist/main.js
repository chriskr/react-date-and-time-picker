module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  ROOT: 'dtp-root',
  HEADER_ROW: 'dtp-header',
  HEADER_MONTH: 'dtp-header-month',
  HEADER_YEAR: 'dtp-header-year',
  MAIN_SECTION: 'dtp-main-section',
  TABLE: 'dtp-table',
  TH_DAY: 'dtp-th-day',
  TD_DAY: 'dtp-td-day',
  FOOTER_ROW: 'dtp-footer',
  TIME_CONTAINER: 'dtp-time-container',
  TIME_CONTROLS: 'dtp-time-controls',
  DISPLAY_LIGHT: 'dtp-digit-display-light',
  DIGITS: 'dtp-digits',
  HOVER_SPAN: 'dtp-hover-span',
  SELECTED_DAY: 'dtp-selected-day',
  SELECTED: 'dtp-selected',
  PREVIOUS_MONTH: 'dtp-previous-month',
  PREVIOUS_HOUR: 'dtp-hour-previous',
  PREVIOUS_MINUTE: 'dtp-minute-previous',
  NEXT_MONTH: 'dtp-next-month',
  NEXT_HOUR: 'dtp-hour-next',
  NEXT_MINUTE: 'dtp-minute-next',
  SELECT_MONTH: 'dtp-td-months',
  SELECT_YEAR: 'dtp-td-years',
  SELECT_DAY: 'dtp-select-day',
  SELECT_TIME: 'dtp-select-time',
  SELECT_CALENDAR: 'dtp-select-year',
  SELECT_TODAY: 'dtp-select-today',
  CANCEL_CHANGES: 'dtp-cancel-changes',
  VIEW_DAYS: 'dtp-view-days',
  VIEW_MONTHS: 'dtp-view-months',
  VIEW_YEARS: 'dtp-view-years',
  VIEW_TIME: 'dtp-view-time',
  FILLER: 'dtp-filler',
  ICON_CHEVRON_LEFT: 'dtp-icon-chevron-left',
  ICON_CHEVRON_RIGHT: 'dtp-icon-chevron-right',
  ICON_ARROW_DROP_UP: 'dtp-icon-arrow-drop-up',
  ICON_EVENT: 'dtp-icon-event',
  ICON_SCHEDULE: 'dtp-icon-schedule',
  ICON_ADJUST: 'dtp-icon-adjust',
  ICON_CANCEL: 'dtp-icon-cancel',
  ICON_EXPAND_LESS: 'dtp-icon-expand-less',
  ICON_EXPAND_MORE: 'dtp-icon-expand-more',
  MATERIAL_ICONS: 'material-icons',
  TRANSPARENT: 'dtp-transparent'
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TargetManager = undefined;

var _regenerator = __webpack_require__(12);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.range = range;
exports.rotate = rotate;
exports.classes = classes;
exports.Enum = Enum;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _marked = /*#__PURE__*/_regenerator2.default.mark(range);

function range(end) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var iter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var i;
  return _regenerator2.default.wrap(function range$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = start;

        case 1:
          if (!(i < end)) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return i;

        case 4:
          i += iter;
          _context.next = 1;
          break;

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function rotate(iterable, delta) {
  var l = iterable.length;
  return Array.from(range(l)).map(function (i) {
    return iterable[(i + delta) % l];
  });
}

function classes() {
  for (var _len = arguments.length, classNames = Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  return classNames.filter(Boolean).join(' ');
}

var defineProperty = function defineProperty(object, n, start) {
  Object.defineProperty(object, String(n), {
    get: function get() {
      defineProperty(object, n + 1, start);
      return n + start;
    }
  });
  return object;
};

function Enum() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  return defineProperty([], 0, start);
}

var TargetManager = exports.TargetManager = function () {
  function TargetManager(config) {
    var _this = this;

    _classCallCheck(this, TargetManager);

    this._targetClassNames = new Map();
    this._targetQueries = new Map();
    Object.keys(config).forEach(function (eventType) {
      var classNames = config[eventType];
      _this._targetClassNames.set(eventType, classNames);
      _this._targetQueries.set(eventType, classNames.map(function (className) {
        return '.' + className;
      }).join(', '));
    });
  }

  _createClass(TargetManager, [{
    key: 'getTarget',
    value: function getTarget(event) {
      var eventType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : event.type;

      var target = event.target.closest(this._targetQueries.get(eventType));
      if (target) {
        var className = this._targetClassNames.get(eventType).find(function (targetClassName) {
          return target.classList.contains(targetClassName);
        });
        return { target: target, className: className };
      }
      return {};
    }
  }]);

  return TargetManager;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WEEK_DAYS_SHORT = exports.WEEK_DAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

var WEEK_DAYS_LONG = exports.WEEK_DAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var MONTH_NAMES = exports.MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var MONTH_NAMES_SHORT = exports.MONTH_NAMES_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classNames = __webpack_require__(0);

var _classNames2 = _interopRequireDefault(_classNames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DISPLAY_LIGHT = _classNames2.default.DISPLAY_LIGHT;

var digits = [63, 6, 91, 79, 102, 109, 125, 7, 127, 111];

var Digit = function Digit(props) {
  var mask = digits[props.digit];
  var lights = [[0.5, 0, 0], [21, 0.5, 90], [21, 21.5, 90], [0.5, 42, 0], [0, 21.5, 90], [0, 0.5, 90], [0.5, 21, 0]].map(function (_ref, index) {
    var _ref2 = _slicedToArray(_ref, 3),
        x = _ref2[0],
        y = _ref2[1],
        alpha = _ref2[2];

    return _react2.default.createElement('use', { key: index,
      className: (0, _utils.classes)(DISPLAY_LIGHT, mask >> index & 1 && 'on'),
      href: '#dtp-digit-light',
      transform: 'translate(' + x + ', ' + y + ') rotate(' + alpha + ')'
    });
  });
  return _react2.default.createElement(
    'g',
    { transform: 'translate(' + (props.pos === 1 ? 4.5 : 32.5) + ', 4.5)' },
    lights
  );
};

Digit.propTypes = {
  digit: _propTypes2.default.number,
  pos: _propTypes2.default.number
};

exports.default = Digit;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classNames = __webpack_require__(0);

var _classNames2 = _interopRequireDefault(_classNames);

var _utils = __webpack_require__(2);

var _digit = __webpack_require__(5);

var _digit2 = _interopRequireDefault(_digit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TIME_CONTAINER = _classNames2.default.TIME_CONTAINER,
    TIME_CONTROLS = _classNames2.default.TIME_CONTROLS,
    HOVER_SPAN = _classNames2.default.HOVER_SPAN,
    NEXT_HOUR = _classNames2.default.NEXT_HOUR,
    PREVIOUS_HOUR = _classNames2.default.PREVIOUS_HOUR,
    NEXT_MINUTE = _classNames2.default.NEXT_MINUTE,
    PREVIOUS_MINUTE = _classNames2.default.PREVIOUS_MINUTE,
    ICON_EXPAND_LESS = _classNames2.default.ICON_EXPAND_LESS,
    ICON_EXPAND_MORE = _classNames2.default.ICON_EXPAND_MORE,
    MATERIAL_ICONS = _classNames2.default.MATERIAL_ICONS,
    DIGITS = _classNames2.default.DIGITS;


var Controls = function Controls(_ref) {
  var next = _ref.next,
      previous = _ref.previous;
  return _react2.default.createElement(
    'div',
    { className: TIME_CONTROLS },
    _react2.default.createElement(
      'span',
      { className: (0, _utils.classes)(HOVER_SPAN, previous) },
      _react2.default.createElement('i', { className: (0, _utils.classes)(MATERIAL_ICONS, ICON_EXPAND_LESS) })
    ),
    _react2.default.createElement(
      'span',
      { className: (0, _utils.classes)(HOVER_SPAN, next) },
      _react2.default.createElement('i', { className: (0, _utils.classes)(MATERIAL_ICONS, ICON_EXPAND_MORE) })
    )
  );
};

Controls.propTypes = {
  next: _propTypes2.default.string,
  previous: _propTypes2.default.string
};

var Time = function Time(props) {
  var hours = props.hours,
      minutes = props.minutes;

  return _react2.default.createElement(
    'div',
    { className: TIME_CONTAINER },
    _react2.default.createElement(Controls, { previous: PREVIOUS_HOUR, next: NEXT_HOUR }),
    _react2.default.createElement(
      'svg',
      { viewBox: '0 0 140 51',
        width: '140px',
        height: '51px',
        className: DIGITS
      },
      _react2.default.createElement(
        'defs',
        null,
        _react2.default.createElement('path', { id: 'dtp-digit-light',
          d: 'M 0 0 L 2.5 2.5 17.5 2.5 20 0 17.5 -2.5 2.5 -2.5 Z'
        })
      ),
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement(_digit2.default, { digit: hours / 10 | 0, pos: 1 }),
        _react2.default.createElement(_digit2.default, { digit: hours % 10, pos: 0 })
      ),
      _react2.default.createElement(
        'g',
        { transform: 'translate(70, 2)' },
        _react2.default.createElement('circle', { cx: '0', r: '2', cy: '13' }),
        _react2.default.createElement('circle', { cx: '0', r: '2', cy: '34' })
      ),
      _react2.default.createElement(
        'g',
        { transform: 'translate(82, 0)' },
        _react2.default.createElement(_digit2.default, { digit: minutes / 10 | 0, pos: 1 }),
        _react2.default.createElement(_digit2.default, { digit: minutes % 10, pos: 0 })
      )
    ),
    _react2.default.createElement(Controls, { previous: PREVIOUS_MINUTE, next: NEXT_MINUTE })
  );
};

Time.propTypes = {
  hours: _propTypes2.default.number,
  minutes: _propTypes2.default.number
};

exports.default = Time;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(2);

var _classNames = __webpack_require__(0);

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TABLE = _classNames2.default.TABLE,
    HOVER_SPAN = _classNames2.default.HOVER_SPAN,
    SELECT_YEAR = _classNames2.default.SELECT_YEAR;


var SelectYear = function SelectYear(_ref) {
  var startYear = _ref.year;

  var rows = [];
  var row = void 0;
  Array.from((0, _utils.range)(startYear + 5, startYear - 4)).forEach(function (year, index) {
    if (index % 3 === 0) {
      rows.push(row = []);
    }
    row.push(_react2.default.createElement(
      'td',
      { key: index, className: SELECT_YEAR },
      _react2.default.createElement(
        'span',
        { className: HOVER_SPAN },
        year
      )
    ));
  });

  return _react2.default.createElement(
    'table',
    { className: TABLE },
    _react2.default.createElement(
      'tbody',
      null,
      rows.map(function (tableRow, index) {
        return _react2.default.createElement(
          'tr',
          { key: index },
          tableRow
        );
      })
    )
  );
};

SelectYear.propTypes = {
  year: _propTypes2.default.number
};

exports.default = SelectYear;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ui_strings = __webpack_require__(4);

var _classNames = __webpack_require__(0);

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TABLE = _classNames2.default.TABLE,
    HOVER_SPAN = _classNames2.default.HOVER_SPAN,
    SELECT_MONTH = _classNames2.default.SELECT_MONTH;


var SelectMonth = function SelectMonth() {
  var rows = [];
  var row = void 0;
  _ui_strings.MONTH_NAMES_SHORT.forEach(function (name, index) {
    if (index % 3 === 0) {
      row = [];
      rows.push(row);
    }
    row.push(_react2.default.createElement(
      'td',
      { key: index, 'data-month': String(index), className: SELECT_MONTH },
      _react2.default.createElement(
        'span',
        { className: HOVER_SPAN },
        name
      )
    ));
  });
  return _react2.default.createElement(
    'table',
    { className: TABLE },
    _react2.default.createElement(
      'tbody',
      null,
      rows.map(function (tableRow, index) {
        return _react2.default.createElement(
          'tr',
          { key: index },
          tableRow
        );
      })
    )
  );
};

exports.default = SelectMonth;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeekNumber = getWeekNumber;
exports.getWeeksOfMonth = getWeeksOfMonth;
/**
 * According to ISO 8601.
 * Week 1 is the week with the first Thursday.
 * Weeks starting on Monday.
 *
 * Code mainly from https://weeknumber.net/how-to/javascript
 *
 * @param {Date} date - A Date instance.
 * @return {number} The week number of the year.
 */
function getWeekNumber(date) {
  var d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  // Thursday in current week decides the year.
  // Week starts with Monday, getDay must be rotated accordingly.
  // This may change the year.
  d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(d.getFullYear(), 0, 4);
  // Adjustment to Thursday in week 1 is not needed, the maximum adjustment
  // would be +|- 3/7, which is less than +|- 0.5 from the exacte week delta.
  return 1 + Math.round((d.getTime() - week1.getTime()) / (7 * 24 * 60 * 60 * 1000));
}

/**
 * Gets the weeks of a month as tuples with week number and dates in that
 * week. The days belonging to the previous or next month are filled
 * with 0.
 *
 * E.g. getWeeksOfMonth(2017, 10) returns
 *
 * ```javascript
 *   [
 *     [44, [0, 0, 1, 2, 3, 4, 5]],
 *     [45, [6, 7, 8, 9, 10, 11, 12]],
 *     [46, [13, 14, 15, 16, 17, 18, 19]],
 *     [47, [20, 21, 22, 23, 24, 25, 26]],
 *     [48, [27, 28, 29, 30, 0, 0, 0]]
 *   ]
 * ```
 *
 * @param {number} year - The year.
 * @param {number} month - The month.
 * @param {boolean} [startWithMonday=true] - A boolean flag.
 * @return {Array} List of the week tuples with week number and
 *                 list of week days.
 *
 */
function getWeeksOfMonth(year, month) {
  var startWithMonday = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var day = 1;
  var date = new Date(year, month, day);
  var startDay = (date.getDay() + (startWithMonday ? 6 : 0)) % 7;
  var dayCount = 28;
  // eslint-disable-next-line
  while (true) {
    date.setDate(dayCount + 1);
    if (date.getMonth() !== month) {
      break;
    }
    dayCount++;
  }

  var weeks = [];
  var week = [];
  while (startDay-- > 0) {
    week.push(0);
  }

  date.setYear(year);
  date.setMonth(month);
  while (day <= dayCount) {
    date.setDate(day);
    week.push(day++);
    if (week.length === 7) {
      weeks.push([getWeekNumber(date), week]);
      week = [];
    }
  }

  if (week.length) {
    while (week.length < 7) {
      week.push(0);
    }
    weeks.push([getWeekNumber(date), week]);
  }

  return weeks;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateExtensions = __webpack_require__(9);

var _ui_strings = __webpack_require__(4);

var _utils = __webpack_require__(2);

var _classNames = __webpack_require__(0);

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TD_DAY = _classNames2.default.TD_DAY,
    SELECTED_DAY = _classNames2.default.SELECTED_DAY,
    SELECT_DAY = _classNames2.default.SELECT_DAY,
    TH_DAY = _classNames2.default.TH_DAY,
    TABLE = _classNames2.default.TABLE,
    HOVER_SPAN = _classNames2.default.HOVER_SPAN,
    TRANSPARENT = _classNames2.default.TRANSPARENT;


var Day = function Day(_ref) {
  var day = _ref.day;
  return day < 10 ? [_react2.default.createElement(
    'span',
    { key: '1', className: TRANSPARENT },
    '0'
  ), day] : day;
};

Day.propTypes = {
  day: _propTypes2.default.number
};

var Week = function Week(_ref2) {
  var year = _ref2.year,
      month = _ref2.month,
      week = _ref2.week,
      selected = _ref2.selected;

  var weekRow = week.map(function (day, index) {
    var current = { year: year, month: month, day: day };
    var isSelected = ['year', 'month', 'day'].every(function (prop) {
      return current[prop] === selected[prop];
    });
    return _react2.default.createElement(
      'td',
      { key: index,
        className: (0, _utils.classes)(TD_DAY, day > 0 && SELECT_DAY, isSelected && SELECTED_DAY)
      },
      day > 0 && _react2.default.createElement(
        'span',
        { className: (0, _utils.classes)(HOVER_SPAN) },
        _react2.default.createElement(Day, { day: day })
      )
    );
  });
  return _react2.default.createElement(
    'tr',
    null,
    weekRow
  );
};

Week.propTypes = {
  year: _propTypes2.default.number,
  month: _propTypes2.default.number,
  week: _propTypes2.default.array,
  selected: _propTypes2.default.object
};

var Month = function Month(_ref3) {
  var year = _ref3.year,
      month = _ref3.month,
      selected = _ref3.selected;

  var weeksOfMonth = (0, _dateExtensions.getWeeksOfMonth)(year, month);
  var weekDays = (0, _utils.rotate)(_ui_strings.WEEK_DAYS_SHORT, 1);
  var weekLabels = weekDays.map(function (wday) {
    return _react2.default.createElement(
      'th',
      { key: wday, className: TH_DAY },
      wday
    );
  });
  var weekRows = weeksOfMonth.map(function (_ref4, index) {
    var _ref5 = _slicedToArray(_ref4, 2),
        week = _ref5[1];

    return _react2.default.createElement(Week, _extends({ key: index }, { year: year, month: month, week: week, selected: selected }));
  });
  return _react2.default.createElement(
    'table',
    { className: TABLE },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        weekLabels
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      weekRows
    )
  );
};

Month.propTypes = {
  year: _propTypes2.default.number,
  month: _propTypes2.default.number,
  selected: _propTypes2.default.object
};

exports.default = Month;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ui_strings = __webpack_require__(4);

var _utils = __webpack_require__(2);

var _classNames = __webpack_require__(0);

var _classNames2 = _interopRequireDefault(_classNames);

var _month = __webpack_require__(10);

var _month2 = _interopRequireDefault(_month);

var _selectMonth = __webpack_require__(8);

var _selectMonth2 = _interopRequireDefault(_selectMonth);

var _selectYear = __webpack_require__(7);

var _selectYear2 = _interopRequireDefault(_selectYear);

var _time = __webpack_require__(6);

var _time2 = _interopRequireDefault(_time);

__webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ROOT = _classNames2.default.ROOT,
    HOVER_SPAN = _classNames2.default.HOVER_SPAN,
    SELECTED = _classNames2.default.SELECTED,
    HEADER_ROW = _classNames2.default.HEADER_ROW,
    HEADER_MONTH = _classNames2.default.HEADER_MONTH,
    HEADER_YEAR = _classNames2.default.HEADER_YEAR,
    MAIN_SECTION = _classNames2.default.MAIN_SECTION,
    FOOTER_ROW = _classNames2.default.FOOTER_ROW,
    SELECT_DAY = _classNames2.default.SELECT_DAY,
    SELECT_MONTH = _classNames2.default.SELECT_MONTH,
    SELECT_YEAR = _classNames2.default.SELECT_YEAR,
    SELECT_TIME = _classNames2.default.SELECT_TIME,
    SELECT_CALENDAR = _classNames2.default.SELECT_CALENDAR,
    SELECT_TODAY = _classNames2.default.SELECT_TODAY,
    PREVIOUS_MONTH = _classNames2.default.PREVIOUS_MONTH,
    PREVIOUS_HOUR = _classNames2.default.PREVIOUS_HOUR,
    PREVIOUS_MINUTE = _classNames2.default.PREVIOUS_MINUTE,
    NEXT_MONTH = _classNames2.default.NEXT_MONTH,
    NEXT_HOUR = _classNames2.default.NEXT_HOUR,
    NEXT_MINUTE = _classNames2.default.NEXT_MINUTE,
    CANCEL_CHANGES = _classNames2.default.CANCEL_CHANGES,
    VIEW_DAYS = _classNames2.default.VIEW_DAYS,
    VIEW_MONTHS = _classNames2.default.VIEW_MONTHS,
    VIEW_YEARS = _classNames2.default.VIEW_YEARS,
    VIEW_TIME = _classNames2.default.VIEW_TIME,
    FILLER = _classNames2.default.FILLER,
    ICON_CHEVRON_LEFT = _classNames2.default.ICON_CHEVRON_LEFT,
    ICON_CHEVRON_RIGHT = _classNames2.default.ICON_CHEVRON_RIGHT,
    ICON_EVENT = _classNames2.default.ICON_EVENT,
    ICON_SCHEDULE = _classNames2.default.ICON_SCHEDULE,
    ICON_ADJUST = _classNames2.default.ICON_ADJUST,
    ICON_CANCEL = _classNames2.default.ICON_CANCEL,
    MATERIAL_ICONS = _classNames2.default.MATERIAL_ICONS;


var targetManager = new _utils.TargetManager({
  click: [SELECT_DAY, SELECT_MONTH, SELECT_YEAR, SELECT_TIME, HEADER_MONTH, HEADER_YEAR, NEXT_MONTH, NEXT_HOUR, NEXT_MINUTE, PREVIOUS_MONTH, PREVIOUS_HOUR, PREVIOUS_MINUTE, SELECT_CALENDAR, SELECT_TODAY, CANCEL_CHANGES]
});

var _Enum = (0, _utils.Enum)(),
    _Enum2 = _slicedToArray(_Enum, 4),
    DAYS = _Enum2[0],
    MONTHS = _Enum2[1],
    YEARS = _Enum2[2],
    TIME = _Enum2[3];

var modeViewsMap = new Map([[DAYS, VIEW_DAYS], [MONTHS, VIEW_MONTHS], [YEARS, VIEW_YEARS], [TIME, VIEW_TIME]]);

var TRACK_PAD_SCROLL_THRESHOLD = 25;

var DateTimePipcker = function (_React$Component) {
  _inherits(DateTimePipcker, _React$Component);

  function DateTimePipcker(props) {
    _classCallCheck(this, DateTimePipcker);

    var _this = _possibleConstructorReturn(this, (DateTimePipcker.__proto__ || Object.getPrototypeOf(DateTimePipcker)).call(this, props));

    _this.state = {
      mode: DAYS,
      date: new Date(_this.props.date),
      deltaYear: 0,
      startDate: new Date(_this.props.date)
    };
    _this.onClick = _this.onClick.bind(_this);
    _this.onWheel = _this.onWheel.bind(_this);
    _this._pickerBody = null;
    _this._deltaY = 0;
    return _this;
  }

  _createClass(DateTimePipcker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        date: new Date(nextProps.date),
        deltaYear: 0
      });
    }
  }, {
    key: 'onClick',
    value: function onClick(event) {
      var _targetManager$getTar = targetManager.getTarget(event),
          target = _targetManager$getTar.target,
          className = _targetManager$getTar.className;

      switch (className) {
        case SELECT_DAY:
          {
            var date = new Date(this.state.date);
            date.setDate(Number.parseInt(target.textContent, 10));
            this.props.onChange(date);
            break;
          }

        case NEXT_MONTH:
        case PREVIOUS_MONTH:
          {
            switch (this.state.mode) {
              case DAYS:
                {
                  var delta = className === PREVIOUS_MONTH ? -1 : 1;
                  var _date = new Date(this.state.date);
                  _date.setMonth(_date.getMonth() + delta);
                  this.setState({ date: _date });
                  break;
                }

              case YEARS:
                {
                  var _delta = className === PREVIOUS_MONTH ? -9 : 9;
                  this.setState(function (prevState) {
                    return { deltaYear: prevState.deltaYear + _delta };
                  });
                  break;
                }

              case TIME:
                {
                  var _delta2 = className === PREVIOUS_MONTH ? -15 : 15;
                  var _date2 = new Date(this.state.date);
                  var minutes = _date2.getMinutes();
                  if (minutes % 15 !== 0) {
                    minutes = Math.round(minutes / 15) * 15;
                  }
                  _date2.setMinutes(minutes + _delta2);
                  this.props.onChange(_date2);
                  break;
                }

              default:
            }
            break;
          }

        case HEADER_MONTH:
          this.setState(function (prevState) {
            return { mode: prevState.mode === MONTHS ? DAYS : MONTHS };
          });
          break;

        case HEADER_YEAR:
          this.setState(function (prevState) {
            return { mode: prevState.mode === YEARS ? DAYS : YEARS };
          });
          break;

        case SELECT_MONTH:
          {
            var _date3 = new Date(this.state.date);
            _date3.setMonth(Number.parseInt(target.dataset.month, 10));
            this.setState({ mode: DAYS, date: _date3 });
            break;
          }

        case SELECT_TIME:
          this.setState(function (prevState) {
            return { mode: prevState.mode === TIME ? DAYS : TIME };
          });
          break;

        case SELECT_YEAR:
          {
            var _date4 = new Date(this.state.date);
            _date4.setFullYear(Number.parseInt(target.textContent, 10));
            this.setState({ mode: DAYS, date: _date4, deltaYear: 0 });
            break;
          }

        case NEXT_HOUR:
        case PREVIOUS_HOUR:
          {
            var _delta3 = className === PREVIOUS_HOUR ? -1 : 1;
            var _date5 = new Date(this.state.date);
            _date5.setHours(_date5.getHours() + _delta3);
            this.props.onChange(_date5);
            break;
          }

        case NEXT_MINUTE:
        case PREVIOUS_MINUTE:
          {
            var _delta4 = className === PREVIOUS_MINUTE ? -1 : 1;
            var _date6 = new Date(this.state.date);
            _date6.setMinutes(_date6.getMinutes() + _delta4);
            this.props.onChange(_date6);
            break;
          }

        case SELECT_CALENDAR:
          this.setState({ mode: DAYS });
          break;

        case SELECT_TODAY:
          this.props.onChange(new Date());
          break;

        case CANCEL_CHANGES:
          this.props.onChange(this.state.startDate);
          break;

        default:
      }
    }
  }, {
    key: 'onWheel',
    value: function onWheel(event) {
      this._deltaY += event.deltaY;
      if (Math.abs(this._deltaY) < TRACK_PAD_SCROLL_THRESHOLD) {
        return;
      }
      this._deltaY = 0;
      switch (this.state.mode) {
        case YEARS:
          {
            var delta = event.deltaY > 0 ? 3 : -3;
            this.setState(function (prevState) {
              return { deltaYear: prevState.deltaYear + delta };
            });
            break;
          }

        case TIME:
          {
            var box = this._pickerBody.getBoundingClientRect();
            var _delta5 = event.deltaY > 0 ? 1 : -1;
            var date = new Date(this.state.date);
            if (event.clientX < box.left + box.width / 2) {
              date.setHours(date.getHours() + _delta5);
            } else {
              date.setMinutes(date.getMinutes() + _delta5);
            }
            this.props.onChange(date);
            break;
          }

        default:
      }
    }
  }, {
    key: 'getBody',
    value: function getBody(year, month, selected) {
      switch (this.state.mode) {
        case DAYS:
          return _react2.default.createElement(_month2.default, { year: year, month: month, selected: selected });

        case MONTHS:
          return _react2.default.createElement(_selectMonth2.default, null);

        case YEARS:
          return _react2.default.createElement(_selectYear2.default, { year: year + this.state.deltaYear });

        case TIME:
          return _react2.default.createElement(_time2.default, { hours: this.state.date.getHours(),
            minutes: this.state.date.getMinutes()
          });
        default:

      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var date = this.state.date;
      var year = date.getFullYear();
      var month = date.getMonth();
      var selected = {
        year: this.props.date.getFullYear(),
        month: this.props.date.getMonth(),
        day: this.props.date.getDate()
      };
      return _react2.default.createElement(
        'div',
        { className: ROOT,
          onClick: this.onClick,
          onWheel: this.onWheel
        },
        _react2.default.createElement(
          'div',
          { className: HEADER_ROW },
          _react2.default.createElement(
            'span',
            { className: (0, _utils.classes)(HOVER_SPAN, PREVIOUS_MONTH) },
            _react2.default.createElement('i', { className: (0, _utils.classes)(MATERIAL_ICONS, ICON_CHEVRON_LEFT) })
          ),
          _react2.default.createElement('span', { className: FILLER }),
          _react2.default.createElement(
            'span',
            { className: (0, _utils.classes)(HOVER_SPAN, HEADER_MONTH, this.state.mode === MONTHS && SELECTED)
            },
            _ui_strings.MONTH_NAMES[month]
          ),
          _react2.default.createElement(
            'span',
            { className: (0, _utils.classes)(HOVER_SPAN, HEADER_YEAR, this.state.mode === YEARS && SELECTED)
            },
            year
          ),
          _react2.default.createElement('span', { className: FILLER }),
          _react2.default.createElement(
            'span',
            { className: (0, _utils.classes)(HOVER_SPAN, NEXT_MONTH) },
            _react2.default.createElement('i', { className: (0, _utils.classes)(MATERIAL_ICONS, ICON_CHEVRON_RIGHT) })
          )
        ),
        _react2.default.createElement(
          'div',
          { ref: function ref(div) {
              _this2._pickerBody = div;
            },
            className: (0, _utils.classes)(MAIN_SECTION, modeViewsMap.get(this.state.mode))
          },
          this.getBody(year, month, selected)
        ),
        _react2.default.createElement(
          'div',
          { className: FOOTER_ROW },
          _react2.default.createElement(
            'span',
            { className: (0, _utils.classes)(HOVER_SPAN, SELECT_TIME) },
            _react2.default.createElement('i', { className: (0, _utils.classes)(MATERIAL_ICONS, this.state.mode === TIME ? ICON_EVENT : ICON_SCHEDULE)
            })
          ),
          _react2.default.createElement(
            'span',
            { className: (0, _utils.classes)(HOVER_SPAN, SELECT_TODAY) },
            _react2.default.createElement('i', { className: (0, _utils.classes)(MATERIAL_ICONS, ICON_ADJUST) })
          ),
          _react2.default.createElement(
            'span',
            { className: (0, _utils.classes)(HOVER_SPAN, CANCEL_CHANGES) },
            _react2.default.createElement('i', { className: (0, _utils.classes)(MATERIAL_ICONS, ICON_CANCEL) })
          )
        )
      );
    }
  }]);

  return DateTimePipcker;
}(_react2.default.Component);

DateTimePipcker.propTypes = {
  date: _propTypes2.default.instanceOf(Date),
  onChange: _propTypes2.default.func
};

exports.default = DateTimePipcker;

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);