### Import
```js static
import { AutosizeField } from 'pretto-ui'
```

### Usage
```html
<AutosizeField  />
```

### Examples
#### Basic
```jsx
initialState={
  value: "initial val"
};
handleChange = value => {
  setState({value});
};
<AutosizeField
  value={state.value}
  onChange={handleChange}
  placeholder="Type a city" />
```
