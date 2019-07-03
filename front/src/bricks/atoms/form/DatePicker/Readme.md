### Import
```js static
import { DatePicker } from 'pretto-ui'
```

### Usage
```html
<DatePicker />
```

### Examples
#### Basic:
```jsx
initialState = {
  date: ''
};
handleChange = date => {
  setState({ date });
};
<DatePicker value={state.date} onChange={handleChange} />
```
