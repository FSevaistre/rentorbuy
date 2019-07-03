### Import
```js static
import { ChoicesPage } from 'pretto-ui'
```

### Usage
```html
<ChoicesPage {...{ onClick }} />
```

### Examples
#### Basic:
```jsx
handleClick = kind => {
  console.log('click', kind);
};
<ChoicesPage onClick={handleClick}/>
```
