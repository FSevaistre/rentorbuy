### Import
```js static
import { DialogTemplate } from 'pretto-ui'
```

### Usage
```html
<DialogTemplate />

```
### Examples
#### Basic:
```jsx
onClose = () => {
  console.log('close');
};
const props = {
  navbarProps: {
    title: 'Dialog template',
    iconLeft: 'cross',
    variant: 'white',
    iconLeftAction: onClose
  },
  buttonProps: {
    children: 'Enregistrer',
    onClick: onClose
  }
};
<DialogTemplate {...props}>
  <p>some content</p>
</DialogTemplate>
```
