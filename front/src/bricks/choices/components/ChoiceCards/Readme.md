### Import
```js static
import { ChoiceCards } from 'pretto-ui'
```

### Usage
```html
<ChoiceCards {...{ onClick }} />
```

### Examples
#### Basic:
```jsx
handleClick = kind => {
  console.log('click', kind);
};
<ChoiceCards onClick={handleClick}/>
```
