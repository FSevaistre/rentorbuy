### Import
```js static
import { EditableFields } from 'pretto-ui'
```

### Usage
```html
<EditableFields />
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
const field_1 = {
  label: 'Prix du bien',
  numberFieldProps: {
    value: 300000,
    onChange: () => console.log('changed EditableField')
  }
};
const field_2 = {
  label: 'Apport',
  numberFieldProps: {
    value: 30000,
    onChange: () => console.log('changed EditableField')
  }
};
const props = {
  fields: [field_1, field_2]
};
<EditableFields {...props} />
```
