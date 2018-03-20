# react-opium-select
A simple select dropdown with a better UI.

<img src="./demo.gif" width="600" alt="Demo">

## Installation
```npm i react-opium-select```

## Usage

### Basic example
```
import React, { Component } from 'react';
import Select from 'react-opium-select';

class App extends Component {
  handleChange(value) {
    console.log(`Selected value: ${value}`);
  }

  render() {
    const items = [
      { label: 'Amritsar', value: 'amritsar' },
      { label: 'Bathinda', value: 'bathinda' },
      { label: 'Chandigarh', value: 'chandigarh' },
      { label: 'Ludhiana', value: 'ludhiana' },
      { label: 'Jalandhar', value: 'jalandhar' }
    ];

    return (
      <div style={{ margin: '200px auto', maxWidth: '200px' }}>

        <Select
          options={items}
          onChange={this.handleChange} />

      </div>
    );
  }
}

export default App;
```

## Configuration
| Props | Type | Default value | Description |
|---|---|---|---|
| `options` | Array | - | Array of objects e.g. `[{ label: 'Chandigarh', value: 'chandigarh' }, ...]`
| `selectedValue` | String | `null` | Selected item |
| `settings` | Array | - | UI settings - `style`, `placeholder`, `maxItems`, `animateOnSelect`, `forceDirection` |
| `onChange` | Function | undefined | onChange handler

### Settings
| Props | Type | Default value | Description |
|---|---|---|---|
| `style` | Array | - | CSS styling options - `padding`, `background`, `textColor`, `radius`, | `borderWidth`, `borderColor` |
| `placeholder` | String | - | Placeholder for select dropdown |
| `maxItems` | Number | `null` | Scroll items after this number |
| `animateOnSelect` | Boolean | `true` | Subtle animation on item select |
| `forceDirection` | String | `null` | Force open to a specified direction - `up` or `down` |

### Style
| Props | Type | Default value | Description |
|---|---|---|---|
| `padding` | String | '10px 15px' | CSS padding |
| `background` | String | '#f1f2f3' | Background color for the dropdown. Could be solid or gradient color. |
| `textColor` | String | '#3A3A3D' | Text color, also used to compute hover and scrollbar colors, must be hex code. |
| `radius` | Number | 0 | Border radius |
| `borderWidth` | Number | 0 | Thikness of border |
| `borderColor` | String | #5D5E5F | Border color |

