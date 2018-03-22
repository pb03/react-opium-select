import React from 'react';

class OpiumSelect extends React.Component {
  constructor(props) {
    super(props);

    const {
      maxItems,
      animateOnSelect = true,
      forceDirection,
      style = {}
    } = props.settings || {};

    const padding = style.padding || '10px 14px';
    const borderWidth = style.borderWidth || 0;
    const borderColor = style.borderColor || '#5D5E5F'
    const border = style.borderWidth ? `${borderWidth}px solid ${borderColor}` : 'none';
    const bgColor = style.background || '#f1f2f3';
    const textColor = style.textColor || '#3a3a3d';
    const radius = style.borderRadius || 0;

    this.state = {
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

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { options = [] } = this.props;

    if (!options.length) return;

    document.addEventListener('mousedown', this.handleClick, false);
    this._setInitialValue();
    this._setDimensions();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.selectedValue !== this.props.selectedValue) {
      this.setState({ selected: newProps.selectedValue });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    if (this.container.contains(e.target)) return;
    this.hideDropdown();
  }

  hideDropdown() {
    const { isOpen, animateOnSelect } = this.state;

    this.setState({ isOpen: false });

    if (animateOnSelect && isOpen) {
      this.setState({ shrink: true });

      setTimeout(() => {
        this.setState({ shrink: false });
      }, 200);
    }
  }

  toggleDropdown() {
    const { options } = this.props;
    const totalOptions = options.length;
    const { isOpen,
            itemHeight,
            borderWidth,
            midItemCount,
            forceDirection,
            maxItems = totalOptions,
            selected } = this.state;

    if (isOpen) {
      this.setState({ isOpen: false });
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
        spaceAbove = selectedItemIndex * itemHeight;
        spaceAbove += borderWidth;
        spaceBelow = (maxItemsComputed - selectedItemNumber) * itemHeight;
        topOffset = spaceAbove;
      } else if ((totalOptions - selectedItemNumber) >= midItemCount) { // mid items
        spaceAbove = midItemCount * itemHeight;
        spaceBelow = spaceAbove;
        const evenOffset = (Number.isInteger(maxItemsComputed / 2) ? 0.5 : 0) * itemHeight;
        topOffset = spaceAbove - evenOffset;
      } else {  // bottom items
        const reverseIndex = totalOptions - selectedItemIndex;
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
      setTimeout(() => {
        this.selectedItem.scrollIntoView({ block: 'center' });
      });
    }

    this.setState({
      isOpen: true,
      topOffset: -topOffset
    });

    // Animate dropdown
    const dropdownStyle = this.dropdownList.style;
    dropdownStyle.setProperty('--clip', `inset(${spaceAbove}px -1px ${spaceBelow}px 0)`);
    dropdownStyle.setProperty('--opacity', '0');
    setTimeout(() => {
      dropdownStyle.setProperty('--clip', `inset(0 -1px 0 0)`);
      dropdownStyle.setProperty('--opacity', '1');
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
      const { maxItems, forceDirection } = this.state;
      const itemHeight = this.displayedItem.offsetHeight;
      
      this.setState({
        itemHeight: itemHeight,
        midItemCount: Math.floor(maxItems / 2)
      });

      if (maxItems) {
        this.dropdownList.style.setProperty('--maxHeight', `${itemHeight * maxItems}px`);
      }

      if (forceDirection) return;

      const spaceRequired = (maxItems || this.props.options.length) * itemHeight;
      const topSpace = this.container.offsetTop;
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
    const { placeholder } = this.props.settings || {};
    const dropdownStyle = this.dropdownList.style;
    const { textColor } = this.state;

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
    const { options = [] } = this.props;

    if (!options.length) {
      return 'Err: No options found.';
    }

    const { padding,
            border,
            borderWidth,
            bgColor,
            textColor,
            radius,
            selected,
            isOpen,
            shrink,
            topOffset } = this.state;

    return (
      <div
        tabIndex='0'
        className={`opm-container ${shrink ? 'shrink' : ''}`}
        style={{ background: bgColor, color: textColor, border: border, borderRadius: radius }}
        onKeyDown={e => this.handleKeyDown(e)}
        ref={el => { this.container = el }}>
        <span
          className='opm-selected'
          style={{ padding: padding }}
          ref={el => { this.displayedItem = el }}
          onClick={() => this.toggleDropdown()}>
          <span className={`opm-selected-text ${!selected ? 'placeholder' : ''}`}>
            {this._getLabelByValue(selected)}
          </span>
          <svg className="chevron" width="9" height="14" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="nonzero" fill={textColor} stroke="none" strokeWidth="1"><path d="M.829 4.997a.602.602 0 0 0 .426-.17l3.221-3.355 3.292 3.356c.237.241.616.241.83 0 .236-.242.236-.628 0-.845L4.877.193C4.762.073 4.619 0 4.454.024a.674.674 0 0 0-.427.17L.403 3.982c-.237.241-.237.627 0 .845.118.12.26.169.426.169zM.403 9.993L4.12 13.76c.118.12.26.169.426.169a.674.674 0 0 0 .427-.17L8.62 9.97c.237-.241.237-.628 0-.845-.237-.241-.616-.241-.829 0L4.524 12.48 1.232 9.124c-.237-.241-.616-.241-.83 0a.62.62 0 0 0 0 .87z"/></g>
          </svg>
        </span>

        <ul
          className={`opm-list ${!isOpen ? 'is-hidden' : ''}`}
          style={{ top: topOffset, left: -borderWidth, width: `calc(100% + ${2 * borderWidth}px)` }}
          ref={el => { this.dropdownList = el }}>
          {options.map(item =>
            (<li
              key={item.value}
              className='opm-item'
              style={{ padding: padding }}
              ref={el => { if (selected === item.value) this.selectedItem = el }}
              onClick={() => this.selectItem(item.value)}>
              {item.label}
              {selected === item.value && 
                <svg width="11" height="8" viewBox="0 0 11 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.422 4.341a.83.83 0 0 0-1.128-.083.734.734 0 0 0-.088 1.071l2.122 2.353.608-.494-.609.495a.832.832 0 0 0 1.194.026l7.104-6.282a.734.734 0 0 0 .04-1.075.83.83 0 0 0-1.13-.038L3 6.092l-1.58-1.75z" fillRule="nonzero" fill={textColor} stroke="none" strokeWidth="1" opacity="0.85"/>
                </svg>}
            </li>)
          )}
        </ul>
      </div>
    );
  }
}

OpiumSelect.defaultProps = {
  onChange: () => {}
};

export default OpiumSelect;
