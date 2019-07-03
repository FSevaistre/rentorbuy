### Import

```js static
import { OverviewPage } from 'pretto-ui'
```

### Usage

```html
<OverviewPage {...props} />
```

### Examples

#### Fundable:

```jsx
const DESCRIPTION_LABELS = {
  'best_result.financing.guarantyFees': "Cette garantie est obligatoire et est exigée par l'organisme prêteur.",
  'best_result.financing.loanAmount': 'C’est le montant que vous empruntez à la banque pour financer votre projet.',
  'best_result.financing.notaryFees': 'Nous calculons automatiquement les frais de notaire pour votre achat.',
  'project.contribution': 'L’apport représente la somme que vous pouvez apporter pour cet achat.',
  'project.renegotiation.remaining_principal': "C'est le montant restant que vous devez payer pour votre ancien prêt."
}

const overviewPageProps = {
  creditCapabilityProps: {
    isFundable: false
  },
  goodUsage: 'primary_residence',
  graphProps: {
    values: [
      [
        { paths: ['project.purchase.property_price'], title: 'Prix du bien', value: 200000, variant: 'primary-1' },
        { paths: ['project.purchase.works_price'], title: 'Travaux', value: 10000, variant: 'primary-1-l' },
        {
          paths: ['best_result.financing.guarantyFees', 'best_result.financing.notaryFees'],
          expandedTitle: 'Frais : Notaire + Garantie',
          title: 'Frais',
          value: 1987,
          variant: 'accent-1'
        }
      ],
      [
        { paths: ['best_result.financing.loanAmount'], title: 'Montant emprunté', value: 201987, variant: 'accent-4' },
        { paths: ['project.contribution'], title: 'Apport', value: 10000, variant: 'accent-4-d' }
      ]
    ]
  },
  loanValues: [],
  projectKind: 'purchase',
  projectValues: [
    [
      {
        description: DESCRIPTION_LABELS['project.purchase.property_price'],
        path: 'project.purchase.property_price',
        title: 'Prix du bien',
        value: '200 000 €',
        variant: 'primary-1'
      }
    ],
    [
      {
        description: DESCRIPTION_LABELS['project.purchase.works_price'],
        path: 'project.purchase.works_price',
        title: 'Travaux',
        sign: '+',
        value: '10 000 €',
        variant: 'primary-1-l'
      }
    ],
    [
      {
        description: DESCRIPTION_LABELS['best_result.financing.notaryFees'],
        path: 'best_result.financing.notaryFees',
        title: 'Frais de notaire',
        sign: '+',
        value: '987 €',
        variant: 'accent-1'
      },
      {
        description: DESCRIPTION_LABELS['best_result.financing.guarantyFees'],
        path: 'best_result.financing.guarantyFees',
        title: 'Frais de garanties estimées',
        sign: '+',
        value: '1 000 €',
        variant: 'accent-1'
      }
    ],
    [
      {
        description: DESCRIPTION_LABELS['best_result.financing.notaryFees'],
        path: 'project.contribution',
        title: 'Apport',
        sign: '-',
        value: '10 000 €',
        variant: 'accent-4-d'
      }
    ],
    [
      {
        description: DESCRIPTION_LABELS['best_result.financing.loanAmount'],
        path: 'best_result.financing.loanAmount',
        title: 'Montant emprunté',
        sign: '=',
        value: '201 987 €',
        variant: 'accent-4'
      }
    ]
  ]
}

;<OverviewPage {...overviewPageProps} />
```
