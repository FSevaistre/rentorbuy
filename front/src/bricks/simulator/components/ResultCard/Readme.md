### Import

```js static
import { ResultCard } from 'pretto-ui'
```

### Usage

```html
<ResultCard />
```

### Examples

#### Basic:

```jsx
const data = {
  projectKind: 'purchase',
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
;<ResultCard cardData={data} />
```

#### Versions:

```jsx
const style = {
  marginBottom: 16
}
const data = {
  projectKind: 'purchase',
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
;<Content variant="neutral-1-l">
  <ResultCard version="b" isFirst cardData={data} />
  <div {...{ style }} />
  <ResultCard version="b" index={1} cardData={data} isOpen />
  <div {...{ style }} />
  <ResultCard version="a" index={2} cardData={data} />
  <div {...{ style }} />
  <ResultCard version="swipe" count="199" rate="9,9" />
  <div {...{ style }} />
  <ResultCard version="banks" onClick={() => console.log('clicked banks')} />
</Content>
```
