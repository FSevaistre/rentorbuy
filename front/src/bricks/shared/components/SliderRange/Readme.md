### Import
```js static
import { SliderRange } from 'pretto-ui'
```

### Usage
```html
<SliderRange />

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
const props = {
  title: 'Mensualité',
  sliderProps: {
    value: state.value,
    min: 0,
    max: 40,
    onChange: handleChange,
    variant: 'accent-5'
  }
};
<SliderRange {...props}></SliderRange>
```
