### Import
```js static
import { Slider } from 'pretto-ui'
```

### Usage
```html
<Slider />
```

### Examples
#### Basic:
```jsx
initialState = {
  value: 3,
  displayValue: 3
};
handleChange = (value) => {
  setState({value});
};
handleAfterChange = (displayValue) => {
  setState({displayValue});
};
<div>
  <span>{state.value}</span>
  <Slider
  variant="primary-1"
    value={state.value}
    onChange={handleChange}
    onAfterChange={handleAfterChange}
  />
  <span>Chosen value: <strong>{state.displayValue}</strong></span>
</div>
```

#### Disabled:
```jsx
initialState = {
  value: 3,
  disabled: true
};
handleChange = (value) => {
  setState({value});
};
handleClick = () => {
  setState({
    disabled: !state.disabled
  });
};
<div>
  <Slider
    onChange={handleChange}
    value={state.value}
    min={1}
    max={30}
    disabled={state.disabled}
  />
  <Button label={state.disabled ? 'enable' : 'disable'} onClick={handleClick} />
</div>
```
