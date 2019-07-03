### Import

```js static
import { SearchField } from 'bricks'
```

### Usage

```jsx static
<SearchField />
```

### Examples

```jsx
initialState = {
  value: ''
}
handleChange = value => {
  setState({ value })
}
;<SearchField onChange={handleChange} value={state.value} />
```
