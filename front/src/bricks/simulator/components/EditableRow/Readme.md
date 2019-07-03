### Import
```js static
import { EditableRow } from 'pretto-ui'
```

### Usage
```html
<EditableRow />
```

### Examples
#### Basic:
```jsx
const props = {
  onClick: () => console.log('clicked EditableRow'),
  onChange: () => console.log('changing EditableRow'),
  label: 'Prix du bien',
  numberFieldProps: {
    value: 3000,
    isChanging: false
  }
};
<EditableRow {...props} />
```
