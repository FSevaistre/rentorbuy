### Import

```js static
import { DirectionsSimulationCard } from 'pretto-ui'
```

### Usage

```html
<DirectionsSimulationCard />
```

### Examples

#### Basic:

```jsx
const props = {
  emoji: ':house_with_garden:',
  title: 'Réaliser une simulation',
  description: 'Simulez en quelques minutes votre prêt immobilier.',
  buttonText: 'Simuler mon prêt',
  onClick: () => console.log('Simuler mon prêt')
}
;<DirectionsSimulationCard {...props} />
```
