import React from 'react';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpiumSelect = function (_React$Component) {
  _inherits(OpiumSelect, _React$Component);

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
    var borderColor = style.borderColor || '#5D5E5F';
    var border = style.borderWidth ? borderWidth + 'px solid ' + borderColor : 'none';
    var bgColor = style.background || '#f1f2f3';
    var textColor = style.textColor || '#3a3a3d';
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


      return React.createElement(
        'div',
        {
          tabIndex: '0',
          className: 'opm-container ' + (shrink ? 'opm-shrink' : ''),
          style: { background: bgColor, color: textColor, border: border, borderRadius: radius },
          onKeyDown: function onKeyDown(e) {
            return _this5.handleKeyDown(e);
          },
          ref: function ref(el) {
            _this5.container = el;
          } },
        React.createElement(
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
          React.createElement(
            'span',
            { className: 'opm-selected-text ' + (!selected ? 'opm-placeholder' : '') },
            this._getLabelByValue(selected)
          ),
          React.createElement(
            'svg',
            { className: 'opm-chevron', width: '9', height: '14', viewBox: '0 0 9 14', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
            React.createElement(
              'g',
              { fillRule: 'nonzero', fill: textColor, stroke: 'none', strokeWidth: '1' },
              React.createElement('path', { d: 'M.829 4.997a.602.602 0 0 0 .426-.17l3.221-3.355 3.292 3.356c.237.241.616.241.83 0 .236-.242.236-.628 0-.845L4.877.193C4.762.073 4.619 0 4.454.024a.674.674 0 0 0-.427.17L.403 3.982c-.237.241-.237.627 0 .845.118.12.26.169.426.169zM.403 9.993L4.12 13.76c.118.12.26.169.426.169a.674.674 0 0 0 .427-.17L8.62 9.97c.237-.241.237-.628 0-.845-.237-.241-.616-.241-.829 0L4.524 12.48 1.232 9.124c-.237-.241-.616-.241-.83 0a.62.62 0 0 0 0 .87z' })
            )
          )
        ),
        React.createElement(
          'ul',
          {
            className: 'opm-list ' + (!isOpen ? 'opm-hidden' : ''),
            style: { top: topOffset, left: -borderWidth, width: 'calc(100% + ' + 2 * borderWidth + 'px)' },
            ref: function ref(el) {
              _this5.dropdownList = el;
            } },
          options.map(function (item) {
            return React.createElement(
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
              selected === item.value && React.createElement(
                'svg',
                { width: '11', height: '8', viewBox: '0 0 11 8', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
                React.createElement('path', { d: 'M1.422 4.341a.83.83 0 0 0-1.128-.083.734.734 0 0 0-.088 1.071l2.122 2.353.608-.494-.609.495a.832.832 0 0 0 1.194.026l7.104-6.282a.734.734 0 0 0 .04-1.075.83.83 0 0 0-1.13-.038L3 6.092l-1.58-1.75z', fillRule: 'nonzero', fill: textColor, stroke: 'none', strokeWidth: '1', opacity: '0.85' })
              )
            );
          })
        )
      );
    }
  }]);

  return OpiumSelect;
}(React.Component);

OpiumSelect.defaultProps = {
  onChange: function onChange() {}
};

export default OpiumSelect;
