### Import
```js static
import { Helper } from 'pretto-ui'
```

### Usage
```html
<Helper />
```

### Examples
#### Basic:
```jsx
initialState = {
  clickedHelper: ''
};
handleClick = clickedHelper => {
  setState({ clickedHelper })
};

<Helper onClickHelper={handleClick} clickedHelper={state.clickedHelper}>Vous devriez cliquer sur un bouton</Helper>
```
