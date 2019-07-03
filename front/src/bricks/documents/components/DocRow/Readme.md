### Import
```js static
import { Upload } from 'pretto-ui'
```

### Usage
```html
<DocRow {...{filter, docName, mortgagorName, onClick}} />
```

### Examples
#### Basic:
```jsx
handleClick = () => {
  console.log('click')
};
<DocRow {...{filter: 'success', docName: "Pièce d'identité", mortgagorName: 'Andy', onClick: handleClick}} />
```
