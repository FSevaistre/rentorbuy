### Import
```js static
import { InformationRows } from 'pretto-ui'
```

### Usage
```html
<InformationRows />
```

### Examples
#### Basic:
```jsx
const row_1 = {
  label: 'Montant emprunté',
  value: 175432,
  onClick: () => console.log('clicked InformationRow'),
};
const row_2 = {
  label: 'Financement',
  type: 'score',
  value: 80,
  onClick: () => console.log('clicked InformationRow'),
};
const props = {
  rows: [row_1, row_2],
};
<InformationRows {...props} />
```
