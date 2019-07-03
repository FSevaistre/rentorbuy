### Import

```js static
import { BudgetDetails } from 'pretto-ui'
```

### Usage

```html
<BudgetDetails />
```

### Examples

#### Basic:

```jsx
onClose = () => {
  console.log('close')
}
const props = {
  details: [
    {
      title: 'Vous pouvez acheter',
      value: '122 000 €',
      description: 'lorem'
    },
    {
      title: 'Frais de notaire',
      value: '10 000 €',
      description: 'lorem'
    },
    {
      title: 'Frais de garantie',
      value: '2 000 €',
      description: 'lorem'
    },
    {
      title: 'Apport',
      value: '12 000 €',
      description: 'lorem'
    },
    {
      title: 'Montant emprunté',
      value: '122 000 €',
      description: 'lorem'
    }
  ],
  rate: {
    title: 'Taux',
    value: '1,68 %'
  },
  cost: {
    title: 'Coût du crédit',
    value: '28 645 €'
  }
}
;<BudgetDetails {...props} />
```
