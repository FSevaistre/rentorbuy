### Import
```js static
import { SimulationBanner } from 'pretto-ui'
```

### Usage
```html
<SimulationBanner />
```

### Examples
#### Basic:
```jsx
handleClick = type => () => {
  console.log('clicked', type)
};
const props = {
  onSave: handleClick('save'),
  onQuit: handleClick('quit'),
  show: true
};
<SimulationBanner {...props} />
```
