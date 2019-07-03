### Import

```js static
import { ResultCards } from 'pretto-ui'
```

### Usage

```html
<ResultCards />
```

### Examples

#### Basic:

```jsx
const card_1 = {
  version: 'b',
  isOpen: true,
  cardData: {
    rate: 1.84,
    bankKind: 'specialiste',
    payment: 753,
    totalCost: 46768,
    interests: 44928,
    guaranty: 1840,
    applicationFees: 0,
    transferability: false,
    prepaymentCharge: false,
    modularity: true,
    remainingInterests: 2000,
    repurchaseFees: 1200
  }
}
const card_2 = {
  version: 'b',
  cardData: {
    rate: 1.94,
    bankKind: 'specialiste',
    payment: 753,
    totalCost: 46768,
    interests: 44928,
    guaranty: 1840,
    applicationFees: 0,
    transferability: false,
    prepaymentCharge: false,
    modularity: true,
    remainingInterests: 2000,
    repurchaseFees: 1200
  }
}
const props = {
  projectKind: 'purchase',
  cards: [card_1, card_2]
}
;<Content variant="neutral-1-l">
  <ResultCards {...props} />
</Content>
```
