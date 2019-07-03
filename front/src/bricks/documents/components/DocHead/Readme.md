### Import
```js static
import { DocHead } from 'pretto-ui'
```

### Usage
```html
<DocHead {...{activeFilter, onChangeFilter, filters}} />
```

### Examples
#### Basic:
```jsx
initialState = {
  filter: 'all'
};
handleClick = filter => {
  console.log('click', filter);
  setState({ filter: filter.value });
};
const selectFieldProps = {
  value: state.filter,
  onChange: handleClick,
  options: [
    {label: 'tous', value: 'all'},
    {label: 'Validé', value: 'success'},
    {label: 'Reçu', value: 'pending'}
  ]
};
<DocHead {...{ selectFieldProps }} />
```
