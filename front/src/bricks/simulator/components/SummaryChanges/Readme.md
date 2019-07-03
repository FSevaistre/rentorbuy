### Import
```js static
import { SummaryChanges } from 'pretto-ui'
```

### Usage
```html
<SummaryChanges />
```

### Examples
#### Basic:
```jsx
const props = {
  type: 'current',
  values: [
    { path: 'contribution', value: 20000 },
    { path: 'request.duration', value: 23 },
    { path: 'payment', value: 2245 }
  ],
  onClick: () => console.log('onClick')
};
<SummaryChanges {...props} />
```
