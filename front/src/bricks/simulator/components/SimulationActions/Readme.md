### Import
```js static
import { SimulationActions } from 'pretto-ui'
```

### Usage
```html
<SimulationActions />
```

### Examples
#### Basic:
```jsx
handleClick = type => () => {
  console.log('clicked', type)
};
const props = {
  onOptimize: handleClick('optimize'),
  onSubscribe: handleClick('subscribe'),
  onModify: handleClick('modify'),
  projectKind: 'purchase'
};
<SimulationActions {...props} />
```
