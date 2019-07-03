### Import
```js static
import { ChoiceCategory } from 'pretto-ui'
```

### Usage
```html
<ChoiceCategory />
```

### Examples
#### Basic:
```jsx
handleClick = kind => {
  console.log('click', kind);
};
<ChoiceCategory kind="purchase" onClick={handleClick} />
```
