### Import
```js static
import { EditableRows } from 'pretto-ui'
```

### Usage
```html
<EditableRows />
```

### Examples
#### Basic:
```jsx
initialState = {
  isChanging: false
};
onClick = () => {
  setState({ isChanging: true })
};
onChange = () => {
  console.log('isChanging')
};
onValidate = () => {
  setState({ isChanging: false })
};
const row_1 = {
  onClick,
  label: 'Prix du bien',
  numberFieldProps: {
    onChange,
    value: 300000
  }
};
const row_2 = {
  onClick,
  label: 'Apport',
  numberFieldProps: {
    onChange,
    value: 13000,
  }
};
const props = {
  rows: [row_1, row_2],
  isChanging: state.isChanging,
  onValidate
};
<EditableRows {...props} />
```
