### Import

```js static
import { IncomeField } from 'pretto-ui'
```

### Usage

```html
<IncomeField amountProps="{}" periodProps="{}" taxesProps="{}" />
```

### Examples

#### Basic:

```jsx
initialState = { amoung: 3000, period: 'monthly', taxes: 'after' }
;<IncomeField
  amountProps={{
    onChange: value => setState({ ...state, amount: value }),
    value: state.amount
  }}
  periodProps={{
    onChange: ({ value }) => setState({ ...state, period: value }),
    value: state.period
  }}
  taxesProps={{
    onChange: ({ value }) => setState({ ...state, taxes: value }),
    value: state.taxes
  }}
/>
```
