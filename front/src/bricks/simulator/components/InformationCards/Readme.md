### Import
```js static
import { InformationCards } from 'pretto-ui'
```

### Usage
```html
<InformationCards />
```

### Examples
#### Basic:
```jsx
const card_1 = {
  title: 'Montant emprunté',
  value: 318000,
  valueType: 'amount',
  icon: 'pen',
  onClick: () => console.log('clicked InformationCard Montant emprunté')
};
const card_2 = {
  title: 'Financement',
  value: 89,
  valueType: 'score',
  icon: 'info',
  onClick: () => console.log('clicked InformationCard Financement')
};
const card_3 = {
  title: 'Durée',
  value: 25,
  valueType: 'duration',
  icon: 'pen',
  onClick: () => console.log('clicked InformationCard Durée')
};
const props = {
  cards: [card_1, card_2, card_3]
};
<InformationCards {...props} />
```
