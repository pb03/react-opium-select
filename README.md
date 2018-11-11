# react-opium-select
Simple select dropdown with a better UI.

[Demo on CodePen](https://codepen.io/prasanjit/full/LdjQWv/)
<img src="https://github.com/pb03/react-opium-select/raw/master/demo.gif" width="680" alt="Demo">

## Installation
```npm i react-opium-select```

## Usage

### Basic example
```js
import React, { Component } from 'react';
import Select from 'react-opium-select';
import 'react-opium-select/style.css';

const options = [
  { label: 'Amritsar', value: 'amritsar' },
  { label: 'Bathinda', value: 'bathinda' },
  { label: 'Chandigarh', value: 'chandigarh' },
  { label: 'Ludhiana', value: 'ludhiana' },
  { label: 'Jalandhar', value: 'jalandhar' }
];

class App extends Component {
  handleChange(value) {
    console.log(`Selected value: ${value}`);
  }

  render() {
    return (
      <div style={{ margin: '200px auto', maxWidth: '200px' }}>

        <Select
          options={options}
          onChange={this.handleChange}
        />

      </div>
    );
  }
}

export default App;
```

## Configuration
| Props | Type | Default value | Description |
|---|---|---|---|
| `options` | Array | - | Options to be passed as an array of objects. e.g. `[{ label: 'Chandigarh', value: 'chandigarh' }, ...]`
| `selectedValue` | String | `null` | Selected option |
| [`settings`](#settings) | Array | - | UI settings - `style`, `placeholder`, `maxItems`, `forceDirection` |
| `onChange` | Function | - | onChange handler

### Settings
| Props | Type | Default value | Description |
|---|---|---|---|
| [`style`](#style) | Array | - | CSS styling options - `padding`, `background`, `textColor`, `radius`, `borderWidth`, `borderColor` |
| `placeholder` | String | - | Placeholder for select dropdown |
| `maxItems` | Number | `null` | Scroll items after this number |
| `forceDirection` | String | `null` | Force open to a specified direction - `up` or `down` |

### Style
| Props | Type | Default value | Description |
|---|---|---|---|
| `padding` | String | `10px 15px` | CSS padding |
| `background` | String | `#f1f2f3` | Background color - accepts hex or gradient value. |
| `textColor` | String | `#3A3A3D` | Text color, also used to compute scrollbar and hover colors, must be hex code. |
| `radius` | Number | `0` | Border radius |
| `borderWidth`<sup>#</sup> | Number | `0` | Thikness of border |
| `borderColor`<sup>#</sup> | String | `#5d5e5f` | Border color |

<small># Applying border is currently an experimental feature.</small>

