### Import

```js static
import { CardField } from 'pretto-ui'
```

### Usage

```html
<CardField />
```

### Examples

#### Basic:

```jsx
const props = {
  title: 'Bien 1',
  content: '10 rue des messageries',
  onModify: () => console.log('modify')
}
;<CardField {...props} />
```
