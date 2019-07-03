### Import
```js static
import { LoanAmountDetails } from 'pretto-ui'
```

### Usage
```html
<LoanAmountDetails propertyPrice={100000} notaryFees={12000} guaranteeFees={1230} contribution={12000} />
```

### Examples
#### Basic:
```jsx
<Card zDepth={1} variant="white">
  <LoanAmountDetails
    property={{
      data: [
        {
          kind: 'propertyPrice',
          value: 100000,
        },
        {
          kind: 'worksPrice',
          value: 13450
        },
        {
          kind: 'notaryFees',
          value: 12000
        },
        {
          kind: 'guaranteeFees',
          value: 12345
        }
      ],
      contribution: 12000
    }}
    />
</Card>
```
