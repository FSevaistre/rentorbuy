### Import
```js static
import { RatingScale } from 'pretto-ui'
```

### Usage
```html
<RatingScale value={3} />
```

### Examples
#### Basic:
```jsx
initialState = {
  selected: 0
};
handleClick = rate => {
  setState({selected: rate});
};
<RatingScale value={state.selected} onClick={handleClick} />
```
