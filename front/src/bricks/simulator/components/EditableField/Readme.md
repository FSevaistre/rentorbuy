### Import
```js static
import { EditableField } from 'pretto-ui'
```

### Usage
```html
<EditableField />
```

### Examples
#### Basic:
```jsx
const props = {
  label: 'Prix du bien',
  numberFieldProps: {
    value: 3000,
    onClick: () => console.log('clicked EditableField'),
    onFocus: () => console.log('focused EditableField'),
    onChange: () => console.log('changed EditableField')
  }
};
<EditableField {...props} />
```
