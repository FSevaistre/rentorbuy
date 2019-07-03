### Import
```js static
import { SimulationSliders } from 'pretto-ui'
```

### Usage
```html
<SimulationSliders />
```

### Examples
#### Basic:
```jsx
initialState = {
  value: 3
};
handleChange = (value) => {
  setState({ value });
};
const slider_1 = {
  title: 'Durée',
  type: 'duration',
  sliderProps: {
    value: state.value,
    min: 10,
    max: 30,
    onChange: handleChange,
    variant: 'accent-1'
  }
};
const slider_2 = {
  title: 'Mensualité',
  sliderProps: {
    value: state.value,
    min: 0,
    max: 40,
    onChange: handleChange,
    variant: 'accent-5'
  }
};
const props = {
  sliders: [slider_1, slider_2]
};
<SimulationSliders {...props} />
```
