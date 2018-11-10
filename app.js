import React, { PureComponent } from 'react';

const DEFAULT_PADDING = '10px 14px';
const DEFAULT_BACKGROUND = '#f1f2f3';
const DEFAULT_COLOR = '#3a3a3d';
const DEFAULT_RADIUS = 0;
const DEFAULT_BORDER_WIDTH = 0;
const DEFAULT_BORDER_COLOR = '#5d5e5f';

class OpiumSelect extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      shrink: false,
      selected: null,
      itemHeight: null,
      midItemCount: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.container = React.createRef();
  }

  componentDidMount() {
    if (!this.props.options.length) return;

    document.addEventListener(
      'mousedown',
      this.handleClick,
      false
    );
    this._setInitialValue();
    this._setDimensions();
  }

  componentWillUnmount() {
    document.removeEventListener(
      'mousedown',
      this.handleClick,
      false
    );
  }

  handleClick(e) {
    if (
      !this.container.current.contains(e.target) &&
      this.state.isOpen
    ) {
      this.hideDropdown();
    }
  }

  hideDropdown() {
    this.setState({ isOpen: false, shrink: true });

    setTimeout(() => {
      this.setState({ shrink: false });
    }, 200);
  }

  toggleDropdown() {
    const {
      options,
      forceDirection,
      settings: {
        maxItems = options.length,
        style: {
          borderWidth = DEFAULT_BORDER_WIDTH
        }
      }
    } = this.props;

    const {
      isOpen,
      itemHeight,
      midItemCount,
      selected
    } = this.state;

    const totalOptions = options.length;

    if (isOpen) {
      this.hideDropdown();
      return;
    }

    const maxItemsComputed = maxItems > totalOptions ? totalOptions : maxItems;
    let topOffset = 0;
    let spaceAbove = 0;
    let spaceBelow = 0;

    if (selected && !forceDirection) {
      const selectedItemIndex = options.findIndex(o => o.value === selected);
      const selectedItemNumber = selectedItemIndex + 1;

      if (selectedItemNumber <= midItemCount) { // top items
        spaceAbove = (selectedItemIndex * itemHeight) + borderWidth;
        spaceBelow = (maxItemsComputed - selectedItemNumber) * itemHeight;
        topOffset = spaceAbove;
      } else if ((totalOptions - selectedItemNumber) >= midItemCount) { // mid items
        spaceAbove = midItemCount * itemHeight;
        spaceBelow = spaceAbove;
        const evenOffset = (Number.isInteger(maxItemsComputed / 2) ? 0.5 : 0) * itemHeight;
        topOffset = spaceAbove - evenOffset;
      } else {  // bottom items
        const reverseIndex = totalOptions - selectedItemIndex;
        spaceAbove = ((maxItemsComputed - reverseIndex) * itemHeight) - borderWidth;
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
      setTimeout(() => {
        this.selectedItem.scrollIntoView({ block: 'center' });
      });
    }

    this.setState({
      isOpen: true,
      topOffset: -topOffset
    });

    // Animate dropdown
    const dropdownStyle = this.container.current.lastChild.style;
    dropdownStyle.top = -topOffset + 'px';
    dropdownStyle.clipPath = `inset(${spaceAbove}px -1px ${spaceBelow}px 0)`;
    dropdownStyle.opacity = 0;
    setTimeout(() => {
      dropdownStyle.clipPath = `inset(0px -1px 0px 0)`;
      dropdownStyle.opacity = 1;
    });
  }

  handleKeyDown(e) {
    const { selected } = this.state;
    const { options } = this.props;
    const index = options.findIndex(o => o.value === selected);

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
        if (index < (options.length - 1)) {
          this.setState({ selected: options[index + 1].value });
          this.selectedItem.scrollIntoView({ block: 'center' });
        }
        break;
    }
  }

  selectItem(newValue) {
    this.setState({ selected: newValue });

    if (this.state.selected !== newValue) {
      this.props.onChange(newValue);
    }

    this.hideDropdown();
  }

  _setDimensions() {
    window.onload = () => {
      const {
        options,
        forceDirection,
        settings: {
          maxItems = options.length,
          style: {
            borderWidth = DEFAULT_BORDER_WIDTH
          }
        }
      } = this.props;
      const container = this.container.current;
      const itemHeight = container.offsetHeight - borderWidth * 2;

      this.setState({
        itemHeight: itemHeight,
        midItemCount: Math.floor(maxItems / 2)
      });

      container.lastChild.style.setProperty('--maxHeight', `${itemHeight * maxItems}px`);

      if (forceDirection) return;

      const spaceRequired = maxItems * itemHeight;
      const topSpace = container.offsetTop;
      const bottomSpace = window.innerHeight - (topSpace + itemHeight);

      if (topSpace >= spaceRequired && bottomSpace >= spaceRequired) return;

      if (bottomSpace >= spaceRequired) {
        this.setState({ forceDirection: 'down' });
      } else if (topSpace >= spaceRequired) {
        this.setState({ forceDirection: 'up' });
      }
    };
  }

  _setInitialValue() {
    const { selectedValue } = this.props;
    const { placeholder, style: { textColor = DEFAULT_COLOR } } = this.props.settings;
    const dropdownStyle = this.container.current.lastChild.style;

    dropdownStyle.setProperty('--hover', `${this._addtransparency(textColor, 12)}`);
    dropdownStyle.setProperty('--scrollbar', `${this._addtransparency(textColor, 20)}`);
    dropdownStyle.setProperty('--scrollbarThumb', `${this._addtransparency(textColor, 30)}`);

    if (placeholder && !selectedValue) return;

    this.setState({ selected: selectedValue || this.props.options[0].value });
  }

  _getLabelByValue(value) {
    if (!value) {
      const { settings } = this.props;
      return settings && settings.placeholder;
    }

    const item = this.props.options.find(o => o.value === value);
    return item.label;
  }

  _addtransparency(hex, opacity) {
    if (!/#/.test(hex)) {
      `rgba(0, 0, 0, ${opacity/100})`
    }

    hex = hex.replace('#','');
    if (hex.length === 3) {
      hex = hex.repeat(2);
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity/100})`;
  }

  render() {
    const {
      options,
      settings: {
        style: {
          padding = DEFAULT_PADDING,
          borderRadius = DEFAULT_RADIUS,
          background = DEFAULT_BACKGROUND,
          textColor: color = DEFAULT_COLOR,
          borderWidth = DEFAULT_BORDER_WIDTH,
          borderColor = DEFAULT_BORDER_COLOR
        }
      }
    } = this.props;

    if (!options.length) {
      return 'Err: No options found.';
    }

    const { selected, isOpen, shrink } = this.state;

    const border = borderWidth ? `${borderWidth}px solid ${borderColor}` : 0

    return (
      <div
        tabIndex='0'
        className={`opm-container ${shrink ? 'opm-shrink' : ''}`}
        style={{ background, color, border, borderRadius }}
        onKeyDown={this.handleKeyDown}
        ref={this.container}>
        <span
          className='opm-selected'
          style={{ padding: padding }}
          onClick={this.toggleDropdown}>
          <span className={`opm-selected-text ${!selected ? 'opm-placeholder' : ''}`}>
            {this._getLabelByValue(selected)}
          </span>
          <svg width="9" height="14" viewBox="0 0 9 14">
            <g fillRule="nonzero" fill={color} opacity="0.8" stroke="none" strokeWidth="1">
              <path d="M.829 4.997a.602.602 0 0 0 .426-.17l3.221-3.355 3.292 3.356c.237.241.616.241.83 0 .236-.242.236-.628 0-.845L4.877.193C4.762.073 4.619 0 4.454.024a.674.674 0 0 0-.427.17L.403 3.982c-.237.241-.237.627 0 .845.118.12.26.169.426.169zM.403 9.993L4.12 13.76c.118.12.26.169.426.169a.674.674 0 0 0 .427-.17L8.62 9.97c.237-.241.237-.628 0-.845-.237-.241-.616-.241-.829 0L4.524 12.48 1.232 9.124c-.237-.241-.616-.241-.83 0a.62.62 0 0 0 0 .87z"/>
            </g>
          </svg>
        </span>

        <ul
          className={`opm-list ${!isOpen ? 'opm-hidden' : ''}`}
          style={{ left: -borderWidth, width: `calc(100% + ${2 * borderWidth}px)` }}>
          {options.map(item => (
            <li
              key={item.value}
              className='opm-item'
              style={{ padding: padding }}
              ref={el => { if (selected === item.value) this.selectedItem = el }}
              onClick={this.selectItem.bind(this, item.value)}>
              {item.label}
              {selected === item.value &&
                <svg width="11" height="8" viewBox="0 0 11 8">
                  <path d="M1.422 4.341a.83.83 0 0 0-1.128-.083.734.734 0 0 0-.088 1.071l2.122 2.353.608-.494-.609.495a.832.832 0 0 0 1.194.026l7.104-6.282a.734.734 0 0 0 .04-1.075.83.83 0 0 0-1.13-.038L3 6.092l-1.58-1.75z"
                    fillRule="nonzero"
                    fill={color}
                    stroke="none"
                    strokeWidth="1"
                    opacity="0.85"
                  />
                </svg>
              }
            </li>)
          )}
        </ul>
      </div>
    );
  }
}

OpiumSelect.defaultProps = {
  options: [],
  settings: {},
  onChange: () => {}
};

export default OpiumSelect;
