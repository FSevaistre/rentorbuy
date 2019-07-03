### Import
```js static
import { AddSentence } from 'pretto-ui'
```

### Usage
```html
<AddSentence></AddSentence>
```

### Examples
#### Basic:
```jsx
onClick = () => {
  console.log('click action');
};
const props = {
  onClick,
  children: [ 'Ajouter un crédit' ]
};
<AddSentence {...props} />
```
