### Import
```js static
import { SubMenu } from 'pretto-ui'
```

### Usage
```html
<SubMenu />
```

### Examples
#### Basic:
```jsx
const props = {
  actions: [
    { label: 'Sauvegarder', onClick: () => {}, icon: 'bookmark'},
    { label: 'Optimiser', onClick: () => {}, icon: 'thumb-up'}
  ],
  format: 'align-right'
};
<SubMenu {...props} />
```
