### Import
```js static
import { CapacityBudget } from 'pretto-ui'
```

### Usage
```html
<CapacityBudget />

```
### Examples
#### Basic:
```jsx
initialState = {
  payment: 30,
  contribution: 12000
};
handleChange = attr => value => {
  console.log(value, attr);
  setState({ [attr]: value });
};
const props = {
  capacitySwipeProps: {
    amount: 2500
  },
  contributionFieldsetProps: {
    editableInputProps: {
      icon: 'pen',
      numberFieldProps: {
        value: state.contribution,
        onChange: handleChange('contribution')
      }
    }
  },
  sliderRangeProps: {
    title: 'Mensualité',
    sliderProps: {
      value: state.payment,
      min: 0,
      max: 40,
      onChange: handleChange('payment'),
      variant: 'accent-5'
    }
  }
};
<CapacityBudget {...props}></CapacityBudget>
```
