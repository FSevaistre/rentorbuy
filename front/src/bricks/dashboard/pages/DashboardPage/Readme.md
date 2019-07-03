### Import

```js static
import { DashboardPage } from 'pretto-ui'
```

### Usage

```html
<DashboardPage />
```

### Examples

#### Basic:

```jsx
handleClick = () => {
  console.log('click')
}

const cards = [
  {
    isActive: null,
    title: 'Votre profil',
    onIconClick: handleClick,
    buttonProps: null,
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    progressProps: null,
    message: null,
    error: null
  },
  {
    isActive: true,
    title: 'Vos documents',
    buttonProps: {
      variant: 'accent-1',
      children: 'envoyer'
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, natus, cumque?',
    progressProps: {
      value: 2,
      max: 15
    }
  },
  {
    isActive: true,
    title: 'Obtennez votre attestation Pretto',
    buttonProps: {
      variant: 'primary-1',
      children: 'obtenir',
      format: 'transparent'
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, natus, cumque?',
    progressProps: {
      value: 5,
      max: 5
    },
    message: 'Documents reçus. Notre équipe va les valider dans les prochains jours.'
  },
  {
    onIconClick: handleClick,
    title: 'Votre simulation',
    content: 'Vouc pouvez affiner votre projet pour trouver la meilleure offre de prêt.',
    children: (
      <DashboardSimulationDetails
        cards={[
          [
            { type: 'price', value: 434799 },
            { type: 'notaryFees', value: 9550 },
            { type: 'contribution', value: 40000 }
          ]
        ]}
      />
    )
  }
]
const props = {
  username: 'Monsieur Pretto',
  cards,
  dashboardSwipeProps: {
    articles: [{ slug: 'etapes-achat-immobilier' }, { slug: 'banques-ou-courtiers' }]
  },
  onPropertyFound: () => console.log('continue')
}
;<DashboardPage {...props} />
```
