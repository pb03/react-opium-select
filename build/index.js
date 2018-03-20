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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./index.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpiumSelect = function (_Component) {
  _inherits(OpiumSelect, _Component);

  function OpiumSelect(props) {
    _classCallCheck(this, OpiumSelect);

    var _this = _possibleConstructorReturn(this, (OpiumSelect.__proto__ || Object.getPrototypeOf(OpiumSelect)).call(this, props));

    var _ref = props.settings || {},
        maxItems = _ref.maxItems,
        _ref$animateOnSelect = _ref.animateOnSelect,
        animateOnSelect = _ref$animateOnSelect === undefined ? true : _ref$animateOnSelect,
        forceDirection = _ref.forceDirection,
        _ref$style = _ref.style,
        style = _ref$style === undefined ? {} : _ref$style;

    var padding = style.padding || '10px 14px';
    var borderWidth = style.borderWidth || 0;
    var borderColor = style.borderColor || '#222';
    var border = style.borderWidth ? borderWidth + 'px solid ' + borderColor : 'none';
    var bgColor = style.background || '#f1f2f3';
    var textColor = style.textColor || '#444444';
    var radius = style.borderRadius || 0;

    _this.state = {
      isOpen: false,
      shrink: false,
      selected: null,
      topOffset: 0,
      itemHeight: null,
      midItemCount: null,
      maxItems: maxItems,
      padding: padding,
      borderWidth: borderWidth,
      border: border,
      bgColor: bgColor,
      textColor: textColor,
      radius: radius === 0 && borderWidth ? 1 : radius,
      animateOnSelect: animateOnSelect,
      forceDirection: forceDirection
    };

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(OpiumSelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$options = this.props.options,
          options = _props$options === undefined ? [] : _props$options;


      if (!options.length) return;

      document.addEventListener('mousedown', this.handleClick, false);
      this._setInitialValue();
      this._setDimensions();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.selectedValue !== this.props.selectedValue) {
        this.setState({ selected: newProps.selectedValue });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClick, false);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      if (this.container.contains(e.target)) return;
      this.hideDropdown();
    }
  }, {
    key: 'hideDropdown',
    value: function hideDropdown() {
      var _this2 = this;

      var _state = this.state,
          isOpen = _state.isOpen,
          animateOnSelect = _state.animateOnSelect;


      this.setState({ isOpen: false });

      if (animateOnSelect && isOpen) {
        this.setState({ shrink: true });

        setTimeout(function () {
          _this2.setState({ shrink: false });
        }, 200);
      }
    }
  }, {
    key: 'toggleDropdown',
    value: function toggleDropdown() {
      var _this3 = this;

      var options = this.props.options;

      var totalOptions = options.length;
      var _state2 = this.state,
          isOpen = _state2.isOpen,
          itemHeight = _state2.itemHeight,
          borderWidth = _state2.borderWidth,
          midItemCount = _state2.midItemCount,
          forceDirection = _state2.forceDirection,
          _state2$maxItems = _state2.maxItems,
          maxItems = _state2$maxItems === undefined ? totalOptions : _state2$maxItems,
          selected = _state2.selected;


      if (isOpen) {
        this.setState({ isOpen: false });
        return;
      }

      var maxItemsComputed = maxItems > totalOptions ? totalOptions : maxItems;
      var topOffset = 0;
      var spaceAbove = 0;
      var spaceBelow = 0;

      if (selected && !forceDirection) {
        var selectedItemIndex = options.findIndex(function (o) {
          return o.value === selected;
        });
        var selectedItemNumber = selectedItemIndex + 1;

        if (selectedItemNumber <= midItemCount) {
          // top items
          spaceAbove = selectedItemIndex * itemHeight;
          spaceAbove += borderWidth;
          spaceBelow = (maxItemsComputed - selectedItemNumber) * itemHeight;
          topOffset = spaceAbove;
        } else if (totalOptions - selectedItemNumber >= midItemCount) {
          // mid items
          spaceAbove = midItemCount * itemHeight;
          spaceBelow = spaceAbove;
          var evenOffset = (Number.isInteger(maxItemsComputed / 2) ? 0.5 : 0) * itemHeight;
          topOffset = spaceAbove - evenOffset;
        } else {
          // bottom items
          var reverseIndex = totalOptions - selectedItemIndex;
          spaceAbove = (maxItemsComputed - reverseIndex) * itemHeight;
          spaceAbove -= borderWidth;
          spaceBelow = (reverseIndex - 1) * itemHeight;
          topOffset = spaceAbove;
        }
      } else {
        if (forceDirection === 'up') {
          spaceAbove = maxItemsComputed * itemHeight;
          topOffset = maxItemsComputed * itemHeight + 4;
        } else {
          spaceBelow = maxItemsComputed * itemHeight;
          topOffset = -(itemHeight + 4);
        }
      }

      if (selected) {
        setTimeout(function () {
          _this3.selectedItem.scrollIntoView({ block: 'center' });
        });
      }

      this.setState({
        isOpen: true,
        topOffset: -topOffset
      });

      // Animate dropdown
      var dropdownStyle = this.dropdownList.style;
      dropdownStyle.setProperty('--clip', 'inset(' + spaceAbove + 'px -1px ' + spaceBelow + 'px 0)');
      dropdownStyle.setProperty('--opacity', '0');
      setTimeout(function () {
        dropdownStyle.setProperty('--clip', 'inset(0 -1px 0 0)');
        dropdownStyle.setProperty('--opacity', '1');
      });
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      var selected = this.state.selected;
      var options = this.props.options;

      var index = options.findIndex(function (o) {
        return o.value === selected;
      });

      switch (e.keyCode) {
        // Enter
        case 13:
          this.toggleDropdown();
          break;

        // Esc
        case 27:
          this.hideDropdown();
          break;

        // Up
        case 38:
          if (index > 0) {
            this.setState({ selected: options[index - 1].value });
            this.selectedItem.scrollIntoView({ block: 'center' });
          }
          break;

        // Down
        case 40:
          if (index < options.length - 1) {
            this.setState({ selected: options[index + 1].value });
            this.selectedItem.scrollIntoView({ block: 'center' });
          }
          break;
      }
    }
  }, {
    key: 'selectItem',
    value: function selectItem(newValue) {
      this.setState({ selected: newValue });

      if (this.state.selected !== newValue) {
        this.props.onChange(newValue);
      }

      this.hideDropdown();
    }
  }, {
    key: '_setDimensions',
    value: function _setDimensions() {
      var _this4 = this;

      window.onload = function () {
        var _state3 = _this4.state,
            maxItems = _state3.maxItems,
            forceDirection = _state3.forceDirection;

        var itemHeight = _this4.displayedItem.offsetHeight;

        _this4.setState({
          itemHeight: itemHeight,
          midItemCount: Math.floor(maxItems / 2)
        });

        if (maxItems) {
          _this4.dropdownList.style.setProperty('--maxHeight', itemHeight * maxItems + 'px');
        }

        if (forceDirection) return;

        var spaceRequired = (maxItems || _this4.props.options.length) * itemHeight;
        var topSpace = _this4.container.offsetTop;
        var bottomSpace = window.innerHeight - (topSpace + itemHeight);

        if (topSpace >= spaceRequired && bottomSpace >= spaceRequired) return;

        if (bottomSpace >= spaceRequired) {
          _this4.setState({ forceDirection: 'down' });
        } else if (topSpace >= spaceRequired) {
          _this4.setState({ forceDirection: 'up' });
        }
      };
    }
  }, {
    key: '_setInitialValue',
    value: function _setInitialValue() {
      var selectedValue = this.props.selectedValue;

      var _ref2 = this.props.settings || {},
          placeholder = _ref2.placeholder;

      var dropdownStyle = this.dropdownList.style;
      var textColor = this.state.textColor;


      dropdownStyle.setProperty('--hover', '' + this._addtransparency(textColor, 12));
      dropdownStyle.setProperty('--scrollbar', '' + this._addtransparency(textColor, 20));
      dropdownStyle.setProperty('--scrollbarThumb', '' + this._addtransparency(textColor, 30));

      if (placeholder && !selectedValue) return;

      this.setState({ selected: selectedValue || this.props.options[0].value });
    }
  }, {
    key: '_getLabelByValue',
    value: function _getLabelByValue(value) {
      if (!value) {
        var settings = this.props.settings;

        return settings && settings.placeholder;
      }

      var item = this.props.options.find(function (o) {
        return o.value === value;
      });
      return item.label;
    }
  }, {
    key: '_addtransparency',
    value: function _addtransparency(hex, opacity) {
      if (!/#/.test(hex)) {
        'rgba(0, 0, 0, ' + opacity / 100 + ')';
      }

      hex = hex.replace('#', '');
      if (hex.length === 3) {
        hex = hex.repeat(2);
      }

      var r = parseInt(hex.substring(0, 2), 16);
      var g = parseInt(hex.substring(2, 4), 16);
      var b = parseInt(hex.substring(4, 6), 16);

      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props$options2 = this.props.options,
          options = _props$options2 === undefined ? [] : _props$options2;


      if (!options.length) {
        return 'Err: No options found.';
      }

      var _state4 = this.state,
          padding = _state4.padding,
          border = _state4.border,
          borderWidth = _state4.borderWidth,
          bgColor = _state4.bgColor,
          textColor = _state4.textColor,
          radius = _state4.radius,
          selected = _state4.selected,
          isOpen = _state4.isOpen,
          shrink = _state4.shrink,
          topOffset = _state4.topOffset;


      return _react2.default.createElement(
        'div',
        {
          tabIndex: '0',
          className: 'opm-container ' + (shrink ? 'shrink' : ''),
          style: { background: bgColor, color: textColor, border: border, borderRadius: radius },
          onKeyDown: function onKeyDown(e) {
            return _this5.handleKeyDown(e);
          },
          ref: function ref(el) {
            _this5.container = el;
          } },
        _react2.default.createElement(
          'span',
          {
            className: 'opm-selected',
            style: { padding: padding },
            ref: function ref(el) {
              _this5.displayedItem = el;
            },
            onClick: function onClick() {
              return _this5.toggleDropdown();
            } },
          _react2.default.createElement(
            'span',
            { className: 'opm-selected-text ' + (!selected ? 'placeholder' : '') },
            this._getLabelByValue(selected)
          ),
          _react2.default.createElement(
            'svg',
            { className: 'chevron', width: '9', height: '14', viewBox: '0 0 9 14', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
            _react2.default.createElement(
              'g',
              { fillRule: 'nonzero', fill: textColor, stroke: 'none', strokeWidth: '1' },
              _react2.default.createElement('path', { d: 'M.829 4.997a.602.602 0 0 0 .426-.17l3.221-3.355 3.292 3.356c.237.241.616.241.83 0 .236-.242.236-.628 0-.845L4.877.193C4.762.073 4.619 0 4.454.024a.674.674 0 0 0-.427.17L.403 3.982c-.237.241-.237.627 0 .845.118.12.26.169.426.169zM.403 9.993L4.12 13.76c.118.12.26.169.426.169a.674.674 0 0 0 .427-.17L8.62 9.97c.237-.241.237-.628 0-.845-.237-.241-.616-.241-.829 0L4.524 12.48 1.232 9.124c-.237-.241-.616-.241-.83 0a.62.62 0 0 0 0 .87z' })
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          {
            className: 'opm-list ' + (!isOpen ? 'is-hidden' : ''),
            style: { top: topOffset, left: -borderWidth, width: 'calc(100% + ' + 2 * borderWidth + 'px)' },
            ref: function ref(el) {
              _this5.dropdownList = el;
            } },
          options.map(function (item) {
            return _react2.default.createElement(
              'li',
              {
                key: item.value,
                className: 'opm-item',
                style: { padding: padding },
                ref: function ref(el) {
                  if (selected === item.value) _this5.selectedItem = el;
                },
                onClick: function onClick() {
                  return _this5.selectItem(item.value);
                } },
              item.label,
              selected === item.value && _react2.default.createElement(
                'svg',
                { width: '11', height: '8', viewBox: '0 0 11 8', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
                _react2.default.createElement('path', { d: 'M1.422 4.341a.83.83 0 0 0-1.128-.083.734.734 0 0 0-.088 1.071l2.122 2.353.608-.494-.609.495a.832.832 0 0 0 1.194.026l7.104-6.282a.734.734 0 0 0 .04-1.075.83.83 0 0 0-1.13-.038L3 6.092l-1.58-1.75z', fillRule: 'nonzero', fill: textColor, stroke: 'none', strokeWidth: '1', opacity: '0.85' })
              )
            );
          })
        )
      );
    }
  }]);

  return OpiumSelect;
}(_react.Component);

OpiumSelect.defaultProps = {
  onChange: function onChange() {}
};

exports.default = OpiumSelect;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".opm-container * {\n  box-sizing: border-box;\n}\n\n.opm-container {\n  position: relative;\n  max-width: 100%;\n  margin-top: 5px;\n  font-size: 16px;\n  text-align: left;\n  outline: none;\n  transition: transform 0.3s, box-shadow 0.2s;\n}\n\n.opm-container:focus {\n  box-shadow: 0 2px 5px -3px rgba(0, 0, 0, 0.2);\n}\n\n.shrink {\n  transform: scaleY(0.9);\n}\n\n.opm-selected {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: inherit;\n  cursor: pointer;\n  user-select: none;\n  transition: transform 0.3s;\n}\n\n.shrink .opm-selected {\n  transform: scaleY(1.08);\n}\n\n.opm-selected-text {\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.placeholder {\n  opacity: 0.5;\n}\n\n.chevron {\n  opacity: 0.8;\n}\n\n.opm-list {\n  --clip: inset(0 -1px 0 0);\n  --opacity: 0;\n  --maxHeight: none;\n  --hover: rgba(0, 0, 0, 0.1);\n  --scrollbar: rgba(0, 0, 0, 0.1);\n  --scrollbarThumb: rgba(0, 0, 0, 0.3);\n  \n  position: absolute;\n  z-index: 11;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border: inherit;\n  border-radius: inherit;\n  background: inherit;\n  list-style: none;\n  overflow: auto;\n  max-height: var(--maxHeight);\n  opacity: var(--opacity);\n  -webkit-clip-path: var(--clip);\n  clip-path: var(--clip);\n  transition: clip-path 0.5s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: clip-path;\n}\n\n.opm-list::-webkit-scrollbar {\n\twidth: 4px;\n\tbackground-color: var(--scrollbar);\n}\n\n.opm-list::-webkit-scrollbar-thumb {\n\tbackground-color: var(--scrollbarThumb);\n  border-radius: 2px;\n}\n\n.opm-list.is-hidden {\n  display: none;\n}\n\n.opm-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  white-space: nowrap;\n  overflow: hidden;\n  transition: background-color 0.05s;\n}\n\n.opm-item:hover {\n  background-color: var(--hover);\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);