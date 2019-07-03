### Import
```js static
import { ChoiceCard } from 'pretto-ui'
```

### Usage
```html
<ChoiceCard {...{ kind, onClick }} />
```

### Examples
#### Basic:
```jsx
handleClick = kind => {
  console.log('click', kind);
};
<ChoiceCard kind="capacity" onClick={handleClick} />
```
