### Import
```js static
import { Operation } from 'pretto-ui'
```

### Usage
```html
<Operation />

```
### Examples
#### Basic:
```jsx
onClose = () => {
  console.log('close');
};
const props = {
  introduction: 'budget',
  operations: [
    {
      slug: 'budget',
      amount: 200000
    },
    {
      slug: 'notaryFees',
      amount: 12000
    },
    {
      slug: 'contribution',
      amount: 20000
    },
    {
      slug: 'ptz',
      amount: 42000,
      ptz: {
        duration: 20,
        franchise: 24
      }
    }
  ]
};
<Operation {...props} />
```
