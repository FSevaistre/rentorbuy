### Import
```js static
import { EditCard } from 'pretto-ui'
```

### Usage
```html
<EditCard>
  <div>content</div>
</EditCard>

```
### Examples
#### Basic:
```jsx
handleClick = slug => {
  console.log('EditCard clicked', slug);
};
const props = {
  slug: 'payment',
  amount: 30000,
  onClick: handleClick
};
<EditCard {...props}></EditCard>
```
