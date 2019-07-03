### Import

```js static
import { SimulationContent } from 'pretto-ui'
```

### Usage

```html
<SimulationContent />
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
}
const card_2 = {
  title: 'Financement',
  value: 89,
  valueType: 'score',
  icon: 'info',
  onClick: () => console.log('clicked InformationCard Financement')
}
const card_3 = {
  title: 'Durée',
  value: 25,
  valueType: 'duration',
  icon: 'pen',
  onClick: () => console.log('clicked InformationCard Durée')
}
const informationCardsProps = {
  cards: [card_1, card_2, card_3]
}
const optimizeButtonProps = {
  onClick: () => console.log('clicked OptimizeButton')
}
const optimizeChoiceProps = {
  onClick: kind => console.log('clicked OptimizeChoice', kind)
}
const result_card_1 = {
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
const result_card_2 = {
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
const result_card_3 = {
  cardData: {
    rate: 2.15,
    bankKind: 'regionale',
    payment: 1251,
    totalCost: 56768,
    interests: 54928,
    guaranty: 1910,
    applicationFees: 0,
    transferability: false,
    prepaymentCharge: true,
    modularity: true,
    remainingInterests: 2000,
    repurchaseFees: 1200
  }
}
initialState = {
  cards: [result_card_1, result_card_2],
  isShowMoreActive: true
}
const resultCardsProps = {
  projectKind: 'purchase',
  version: 'b',
  cards: state.cards
}
const props = {
  optimizeMessage: 'Nous avons optimisé votre prêt pour le meilleur taux.',
  isShowMoreActive: state.isShowMoreActive,
  onShowMore: () => setState({ cards: [...state.cards, result_card_3], isShowMoreActive: false }),
  informationCardsProps,
  optimizeButtonProps,
  optimizeChoiceProps,
  resultCardsProps
}
;<SimulationContent {...props} />
```
