### Import
```js static
import { InformationRow } from 'pretto-ui'
```

### Usage
```html
<InformationRow />
```

### Examples
#### Basic:
```jsx
const props = {
  label: 'Financement',
  type: 'score',
  value: 80,
  onClick: () => console.log('clicked InformationRow'),
};
<InformationRow {...props} />
```
