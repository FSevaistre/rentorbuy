### Import
```js static
import { EditCards } from 'pretto-ui'
```

### Usage
```html
<EditCards {...props} />

```
### Examples
#### Basic:
```jsx
handleClick = slug => {
  console.log(`Card clicked ${slug}`);
};
const props = {
  cards: [
    {
      slug: 'payment',
      amount: 12000,
      onClick: handleClick
    },
    {
      slug: 'contribution',
      amount: 150000,
      onClick: handleClick
     }
  ]
};
<EditCards {...props} />
```
