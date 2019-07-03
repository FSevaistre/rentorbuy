### Import

```js static
import { DashboardCard } from 'pretto-ui'
```

### Usage

```html
<DashboardCard />
```

### Examples

#### Basic:

```jsx
handleClick = () => {
  console.log('click')
}

const props = {
  isActive: null,
  title: 'Votre profil',
  onIconClick: handleClick,
  buttonProps: null,
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  progressProps: null,
  message: null,
  error: null
}
;<Content variant="neutral-1-l">
  <DashboardCard {...props} />
</Content>
```

#### Active + button + progress:

```jsx
handleClick = () => {
  console.log('click')
}

const props = {
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
}
;<Content variant="neutral-1-l">
  <DashboardCard {...props} />
</Content>
```

#### Active + message:

```jsx
handleClick = () => {
  console.log('click')
}

const props = {
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
}
;<Content variant="neutral-1-l">
  <DashboardCard {...props} />
</Content>
```

#### Custom content:

```jsx
handleClick = () => {
  console.log('click')
}

const cards = [
  [{ type: 'price', value: 434799 }, { type: 'notaryFees', value: 9550 }, { type: 'contribution', value: 40000 }]
]

const props = {
  onIconClick: handleClick,
  title: 'Votre simulation',
  content: 'Vouc pouvez affiner votre projet pour trouver la meilleure offre de prêt.',
  children: <DashboardSimulationDetails cards={cards} />
}
;<Content variant="neutral-1-l">
  <DashboardCard {...props} />
</Content>
```
