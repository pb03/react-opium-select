# react-opium-select
A simple select dropdown with a better UI.

## Installation
```npm i react-opium-select```

## Usage
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

    const settings = {
      placeholder: 'Select city...',
      style: {
        padding: '10px 15px',
        background: 'linear-gradient(to right, #4CB8C4, #3CD3AD)',
        textColor: '#333333'
      }
    };

    return (
      <Select
        options={items}
        selectedValue='chandigarh'
        settings={settings}
        onChange={this.handleChange} />
    );
  }
}
```

## Configuration
| Property | Type | Default value | Description |
|---|---|---|---|
| `options` | array | -- | Array of objects e.g. `[{ label: 'Chandigarh', value: 'chandigarh' }, ...]`
`style` | array | -- | CSS styling options
`placeholder` | string | -- | Placeholder for select dropdown
`maxItems` | number | `null` | Scroll items after this number
`animateOnSelect` | boolean | `true` | Subtle animation on item select
`forceDirection` | string | `null` | Force open to a specified direction: `up` | `down`

