### Import
```js static
import { EditableInput } from 'pretto-ui'
```

### Usage
```html
<EditableInput>
  <div>content</div>
</EditableInput>

```
### Examples
#### Basic:
```jsx
handleAction = () => {
  console.log('Button clicked');
};
const props = {
  icon: 'pen',
  // variant: 'accent-1',
  numberFieldProps: {
    value: 3,
    onBlur: handleAction,
    onFocus: handleAction
  }
};
<EditableInput {...props} />
```
