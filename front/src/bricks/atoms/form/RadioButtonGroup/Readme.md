### Import
```js static
import { RadioButton, RadioButtonGroup } from 'pretto-ui'
```

### Usage
```html
<RadioButtonGroup {...props} />
```

### Examples
#### Basic:
```jsx
initialState = {
  value: "v1"
};
handleChange = value => {
  setState({value});
};
const props = {
  name: 'radio',
  valueSelected: state.value,
  onChange: handleChange,
  options: [
    { id: 'v1', label: 'value 1', value: 'v1' },
    { id: 'v2', label: 'value 2', value: 'v2' }
  ]
};
<div>
  <RadioButtonGroup {...props} />
  <p>Selected value: {state.value}</p>
</div>
```

#### Variants:
```jsx
const props = {
  name: 'inherit',
  variant: 'accent-1',
  options: [
    { id: 'rh', label: 'Radio inherit', value: 'v1' },
    { id: 'fr', label: 'From RadioButtonGroup', value: 'v2' },
    { id: 'bnm', label: 'But not me! I got my own variant (primary-1)', value: 'v3', variant: 'primary-1' }
  ]
};
<RadioButtonGroup {...props} />
```

#### labelPosition: left
```jsx
const props = {
  name: 'inherit',
  variant: 'accent-3',
  options: [
    { id: 'ih', label: "I'm here", value: 'v1' },
    { id: 'mt', label: 'Me too', value: 'v2' },
    { id: 'nm', label: 'Not me! Hahaha', value: 'v3', labelPosition: 'left' }
  ]
};
<RadioButtonGroup {...props} />
```

#### Format: inline
```jsx
const props = {
  name: 'inherit',
  variant: 'accent-1',
  format: 'inline',
  valueSelected: 'li',
  options: [
    { id: 'in', label: 'Inline', value: 'in' },
    { id: 'li', label: 'Radio', value: 'li' },
    { id: 'ne', label: 'Buttons', value: 'ne', variant: 'primary-1' }
  ]
};
<RadioButtonGroup {...props} />
```
