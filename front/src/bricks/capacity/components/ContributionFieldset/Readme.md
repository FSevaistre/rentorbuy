### Import
```js static
import { ContributionFieldset } from 'pretto-ui'
```

### Usage
```html
<ContributionFieldset />

```
### Examples
#### Basic:
```jsx
initialState = {
  value: 3,
  displayValue: 3
};
handleChange = (value) => {
  setState({value});
};
const props = {
  editableInputProps: {
    icon: 'pen',
    variant: 'accent-1',
    numberFieldProps: {
      value: state.value,
      onChange: handleChange
    }
  }
};
<ContributionFieldset {...props}></ContributionFieldset>
```
