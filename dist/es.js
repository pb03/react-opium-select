import React, { PureComponent } from 'react';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PADDING = '10px 14px';
var DEFAULT_BACKGROUND = '#f1f2f3';
var DEFAULT_COLOR = '#3a3a3d';
var DEFAULT_RADIUS = 0;
var DEFAULT_BORDER_WIDTH = 0;
var DEFAULT_BORDER_COLOR = '#5d5e5f';

var OpiumSelect = function (_PureComponent) {
  _inherits(OpiumSelect, _PureComponent);

  function OpiumSelect(props) {
    _classCallCheck(this, OpiumSelect);

    var _this = _possibleConstructorReturn(this, (OpiumSelect.__proto__ || Object.getPrototypeOf(OpiumSelect)).call(this, props));

    _this.state = {
      isOpen: false,
      shrink: false,
      selected: null,
      itemHeight: null,
      midItemCount: null
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.toggleDropdown = _this.toggleDropdown.bind(_this);
    _this.container = React.createRef();
    return _this;
  }

  _createClass(OpiumSelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.options.length) return;

      document.addEventListener('mousedown', this.handleClick, false);
      this._setInitialValue();
      this._setDimensions();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClick, false);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      if (!this.container.current.contains(e.target) && this.state.isOpen) {
        this.hideDropdown();
      }
    }
  }, {
    key: 'hideDropdown',
    value: function hideDropdown() {
      var _this2 = this;

      this.setState({ isOpen: false, shrink: true });

      setTimeout(function () {
        _this2.setState({ shrink: false });
      }, 200);
    }
  }, {
    key: 'toggleDropdown',
    value: function toggleDropdown() {
      var _this3 = this;

      var _props = this.props,
          options = _props.options,
          forceDirection = _props.forceDirection,
          _props$settings = _props.settings,
          _props$settings$maxIt = _props$settings.maxItems,
          maxItems = _props$settings$maxIt === undefined ? options.length : _props$settings$maxIt,
          _props$settings$style = _props$settings.style.borderWidth,
          borderWidth = _props$settings$style === undefined ? DEFAULT_BORDER_WIDTH : _props$settings$style;
      var _state = this.state,
          isOpen = _state.isOpen,
          itemHeight = _state.itemHeight,
          midItemCount = _state.midItemCount,
          selected = _state.selected;


      var totalOptions = options.length;

      if (isOpen) {
        this.hideDropdown();
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
          spaceAbove = selectedItemIndex * itemHeight + borderWidth;
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
          spaceAbove = (maxItemsComputed - reverseIndex) * itemHeight - borderWidth;
          spaceBelow = (reverseIndex - 1) * itemHeight;
          topOffset = spaceAbove;
        }
      } else {
        if (forceDirection === 'up') {
          spaceAbove = maxItemsComputed * itemHeight;
          topOffset = spaceAbove + 4;
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
      var dropdownStyle = this.container.current.lastChild.style;
      dropdownStyle.top = -topOffset + 'px';
      dropdownStyle.clipPath = 'inset(' + spaceAbove + 'px -1px ' + spaceBelow + 'px 0)';
      dropdownStyle.opacity = 0;
      setTimeout(function () {
        dropdownStyle.clipPath = 'inset(0px -1px 0px 0)';
        dropdownStyle.opacity = 1;
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
        var _props2 = _this4.props,
            options = _props2.options,
            forceDirection = _props2.forceDirection,
            _props2$settings = _props2.settings,
            _props2$settings$maxI = _props2$settings.maxItems,
            maxItems = _props2$settings$maxI === undefined ? options.length : _props2$settings$maxI,
            _props2$settings$styl = _props2$settings.style.borderWidth,
            borderWidth = _props2$settings$styl === undefined ? DEFAULT_BORDER_WIDTH : _props2$settings$styl;

        var container = _this4.container.current;
        var itemHeight = container.offsetHeight - borderWidth * 2;

        _this4.setState({
          itemHeight: itemHeight,
          midItemCount: Math.floor(maxItems / 2)
        });

        container.lastChild.style.setProperty('--maxHeight', itemHeight * maxItems + 'px');

        if (forceDirection) return;

        var spaceRequired = maxItems * itemHeight;
        var topSpace = container.offsetTop;
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
      var _props$settings2 = this.props.settings,
          placeholder = _props$settings2.placeholder,
          _props$settings2$styl = _props$settings2.style.textColor,
          textColor = _props$settings2$styl === undefined ? DEFAULT_COLOR : _props$settings2$styl;

      var dropdownStyle = this.container.current.lastChild.style;

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

      var _props3 = this.props,
          options = _props3.options,
          _props3$settings$styl = _props3.settings.style,
          _props3$settings$styl2 = _props3$settings$styl.padding,
          padding = _props3$settings$styl2 === undefined ? DEFAULT_PADDING : _props3$settings$styl2,
          _props3$settings$styl3 = _props3$settings$styl.borderRadius,
          borderRadius = _props3$settings$styl3 === undefined ? DEFAULT_RADIUS : _props3$settings$styl3,
          _props3$settings$styl4 = _props3$settings$styl.background,
          background = _props3$settings$styl4 === undefined ? DEFAULT_BACKGROUND : _props3$settings$styl4,
          _props3$settings$styl5 = _props3$settings$styl.textColor,
          color = _props3$settings$styl5 === undefined ? DEFAULT_COLOR : _props3$settings$styl5,
          _props3$settings$styl6 = _props3$settings$styl.borderWidth,
          borderWidth = _props3$settings$styl6 === undefined ? DEFAULT_BORDER_WIDTH : _props3$settings$styl6,
          _props3$settings$styl7 = _props3$settings$styl.borderColor,
          borderColor = _props3$settings$styl7 === undefined ? DEFAULT_BORDER_COLOR : _props3$settings$styl7;


      if (!options.length) {
        return 'Err: No options found.';
      }

      var _state2 = this.state,
          selected = _state2.selected,
          isOpen = _state2.isOpen,
          shrink = _state2.shrink;


      var border = borderWidth ? borderWidth + 'px solid ' + borderColor : 0;

      return React.createElement(
        'div',
        {
          tabIndex: '0',
          className: 'opm-container ' + (shrink ? 'opm-shrink' : ''),
          style: { background: background, color: color, border: border, borderRadius: borderRadius },
          onKeyDown: this.handleKeyDown,
          ref: this.container },
        React.createElement(
          'span',
          {
            className: 'opm-selected',
            style: { padding: padding },
            onClick: this.toggleDropdown },
          React.createElement(
            'span',
            { className: 'opm-selected-text ' + (!selected ? 'opm-placeholder' : '') },
            this._getLabelByValue(selected)
          ),
          React.createElement(
            'svg',
            { width: '9', height: '14', viewBox: '0 0 9 14' },
            React.createElement(
              'g',
              { fillRule: 'nonzero', fill: color, opacity: '0.8', stroke: 'none', strokeWidth: '1' },
              React.createElement('path', { d: 'M.829 4.997a.602.602 0 0 0 .426-.17l3.221-3.355 3.292 3.356c.237.241.616.241.83 0 .236-.242.236-.628 0-.845L4.877.193C4.762.073 4.619 0 4.454.024a.674.674 0 0 0-.427.17L.403 3.982c-.237.241-.237.627 0 .845.118.12.26.169.426.169zM.403 9.993L4.12 13.76c.118.12.26.169.426.169a.674.674 0 0 0 .427-.17L8.62 9.97c.237-.241.237-.628 0-.845-.237-.241-.616-.241-.829 0L4.524 12.48 1.232 9.124c-.237-.241-.616-.241-.83 0a.62.62 0 0 0 0 .87z' })
            )
          )
        ),
        React.createElement(
          'ul',
          {
            className: 'opm-list ' + (!isOpen ? 'opm-hidden' : ''),
            style: { left: -borderWidth, width: 'calc(100% + ' + 2 * borderWidth + 'px)' } },
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
                onClick: _this5.selectItem.bind(_this5, item.value) },
              item.label,
              selected === item.value && React.createElement(
                'svg',
                { width: '11', height: '8', viewBox: '0 0 11 8' },
                React.createElement('path', { d: 'M1.422 4.341a.83.83 0 0 0-1.128-.083.734.734 0 0 0-.088 1.071l2.122 2.353.608-.494-.609.495a.832.832 0 0 0 1.194.026l7.104-6.282a.734.734 0 0 0 .04-1.075.83.83 0 0 0-1.13-.038L3 6.092l-1.58-1.75z',
                  fillRule: 'nonzero',
                  fill: color,
                  stroke: 'none',
                  strokeWidth: '1',
                  opacity: '0.85'
                })
              )
            );
          })
        )
      );
    }
  }]);

  return OpiumSelect;
}(PureComponent);

OpiumSelect.defaultProps = {
  options: [],
  settings: {},
  onChange: function onChange() {}
};

export default OpiumSelect;
