!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):e.ReactOpiumSelect=t(e.React)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var n=function(n){function o(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e)),n=e.settings||{},i=n.maxItems,r=n.animateOnSelect,s=void 0===r||r,a=n.forceDirection,l=n.style,c=void 0===l?{}:l,d=c.padding||"10px 14px",p=c.borderWidth||0,u=c.borderColor||"#5D5E5F",h=c.borderWidth?p+"px solid "+u:"none",f=c.background||"#f1f2f3",m=c.textColor||"#3a3a3d",v=c.borderRadius||0;return t.state={isOpen:!1,shrink:!1,selected:null,topOffset:0,itemHeight:null,midItemCount:null,maxItems:i,padding:d,borderWidth:p,border:h,bgColor:f,textColor:m,radius:0===v&&p?1:v,animateOnSelect:s,forceDirection:a},t.handleClick=t.handleClick.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,e.Component),t(o,[{key:"componentDidMount",value:function(){var e=this.props.options;(void 0===e?[]:e).length&&(document.addEventListener("mousedown",this.handleClick,!1),this._setInitialValue(),this._setDimensions())}},{key:"componentWillReceiveProps",value:function(e){e.selectedValue!==this.props.selectedValue&&this.setState({selected:e.selectedValue})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick,!1)}},{key:"handleClick",value:function(e){this.container.contains(e.target)||this.hideDropdown()}},{key:"hideDropdown",value:function(){var e=this,t=this.state,n=t.isOpen,o=t.animateOnSelect;this.setState({isOpen:!1}),o&&n&&(this.setState({shrink:!0}),setTimeout(function(){e.setState({shrink:!1})},200))}},{key:"toggleDropdown",value:function(){var e=this,t=this.props.options,n=t.length,o=this.state,i=o.isOpen,r=o.itemHeight,s=o.borderWidth,a=o.midItemCount,l=o.forceDirection,c=o.maxItems,d=void 0===c?n:c,p=o.selected;if(i)this.setState({isOpen:!1});else{var u=d>n?n:d,h=0,f=0,m=0;if(p&&!l){var v=t.findIndex(function(e){return e.value===p}),y=v+1;if(y<=a)f=v*r,m=(u-y)*r,h=f+=s;else if(n-y>=a){m=f=a*r,h=f-(Number.isInteger(u/2)?.5:0)*r}else{var g=n-v;f=(u-g)*r,m=(g-1)*r,h=f-=s}}else"up"===l?(f=u*r,h=u*r+4):(m=u*r,h=-(r+4));p&&setTimeout(function(){e.selectedItem.scrollIntoView({block:"center"})}),this.setState({isOpen:!0,topOffset:-h});var b=this.dropdownList.style;b.setProperty("--clip","inset("+f+"px -1px "+m+"px 0)"),b.setProperty("--opacity","0"),setTimeout(function(){b.setProperty("--clip","inset(0 -1px 0 0)"),b.setProperty("--opacity","1")})}}},{key:"handleKeyDown",value:function(e){var t=this.state.selected,n=this.props.options,o=n.findIndex(function(e){return e.value===t});switch(e.keyCode){case 13:this.toggleDropdown();break;case 27:this.hideDropdown();break;case 38:o>0&&(this.setState({selected:n[o-1].value}),this.selectedItem.scrollIntoView({block:"center"}));break;case 40:o<n.length-1&&(this.setState({selected:n[o+1].value}),this.selectedItem.scrollIntoView({block:"center"}))}}},{key:"selectItem",value:function(e){this.setState({selected:e}),this.state.selected!==e&&this.props.onChange(e),this.hideDropdown()}},{key:"_setDimensions",value:function(){var e=this;window.onload=function(){var t=e.state,n=t.maxItems,o=void 0===n?e.props.options.length:n,i=t.forceDirection,r=e.displayedItem.offsetHeight;if(e.setState({itemHeight:r,midItemCount:Math.floor(o/2)}),e.dropdownList.style.setProperty("--maxHeight",r*o+"px"),!i){var s=o*r,a=e.container.offsetTop,l=window.innerHeight-(a+r);a>=s&&l>=s||(l>=s?e.setState({forceDirection:"down"}):a>=s&&e.setState({forceDirection:"up"}))}}}},{key:"_setInitialValue",value:function(){var e=this.props.selectedValue,t=(this.props.settings||{}).placeholder,n=this.dropdownList.style,o=this.state.textColor;n.setProperty("--hover",""+this._addtransparency(o,12)),n.setProperty("--scrollbar",""+this._addtransparency(o,20)),n.setProperty("--scrollbarThumb",""+this._addtransparency(o,30)),t&&!e||this.setState({selected:e||this.props.options[0].value})}},{key:"_getLabelByValue",value:function(e){if(!e){var t=this.props.settings;return t&&t.placeholder}return this.props.options.find(function(t){return t.value===e}).label}},{key:"_addtransparency",value:function(e,t){return/#/.test(e),3===(e=e.replace("#","")).length&&(e=e.repeat(2)),"rgba("+parseInt(e.substring(0,2),16)+", "+parseInt(e.substring(2,4),16)+", "+parseInt(e.substring(4,6),16)+", "+t/100+")"}},{key:"render",value:function(){var t=this,n=this.props.options,o=void 0===n?[]:n;if(!o.length)return"Err: No options found.";var i=this.state,r=i.padding,s=i.border,a=i.borderWidth,l=i.bgColor,c=i.textColor,d=i.radius,p=i.selected,u=i.isOpen,h=i.shrink,f=i.topOffset;return e.createElement("div",{tabIndex:"0",className:"opm-container "+(h?"opm-shrink":""),style:{background:l,color:c,border:s,borderRadius:d},onKeyDown:function(e){return t.handleKeyDown(e)},ref:function(e){t.container=e}},e.createElement("span",{className:"opm-selected",style:{padding:r},ref:function(e){t.displayedItem=e},onClick:function(){return t.toggleDropdown()}},e.createElement("span",{className:"opm-selected-text "+(p?"":"opm-placeholder")},this._getLabelByValue(p)),e.createElement("svg",{className:"opm-chevron",width:"9",height:"14",viewBox:"0 0 9 14",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{fillRule:"nonzero",fill:c,stroke:"none",strokeWidth:"1"},e.createElement("path",{d:"M.829 4.997a.602.602 0 0 0 .426-.17l3.221-3.355 3.292 3.356c.237.241.616.241.83 0 .236-.242.236-.628 0-.845L4.877.193C4.762.073 4.619 0 4.454.024a.674.674 0 0 0-.427.17L.403 3.982c-.237.241-.237.627 0 .845.118.12.26.169.426.169zM.403 9.993L4.12 13.76c.118.12.26.169.426.169a.674.674 0 0 0 .427-.17L8.62 9.97c.237-.241.237-.628 0-.845-.237-.241-.616-.241-.829 0L4.524 12.48 1.232 9.124c-.237-.241-.616-.241-.83 0a.62.62 0 0 0 0 .87z"})))),e.createElement("ul",{className:"opm-list "+(u?"":"opm-hidden"),style:{top:f,left:-a,width:"calc(100% + "+2*a+"px)"},ref:function(e){t.dropdownList=e}},o.map(function(n){return e.createElement("li",{key:n.value,className:"opm-item",style:{padding:r},ref:function(e){p===n.value&&(t.selectedItem=e)},onClick:function(){return t.selectItem(n.value)}},n.label,p===n.value&&e.createElement("svg",{width:"11",height:"8",viewBox:"0 0 11 8",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M1.422 4.341a.83.83 0 0 0-1.128-.083.734.734 0 0 0-.088 1.071l2.122 2.353.608-.494-.609.495a.832.832 0 0 0 1.194.026l7.104-6.282a.734.734 0 0 0 .04-1.075.83.83 0 0 0-1.13-.038L3 6.092l-1.58-1.75z",fillRule:"nonzero",fill:c,stroke:"none",strokeWidth:"1",opacity:"0.85"})))})))}}]),o}();return n.defaultProps={onChange:function(){}},n});
