### Import

```js static
import { DirectionsPage } from 'pretto-ui'
```

### Usage

```html
<DirectionsPage />
```

### Examples

#### Basic:

```jsx
const props = {
  title: 'Directions Page',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ab.',
  alert: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa repellendus illo!',
  alertKind: 'information',
  simulationCardProps: {
    emoji: ':house_with_garden:',
    title: 'Réaliser une simulation',
    description: 'Simulez en quelques minutes votre prêt immobilier.',
    buttonText: 'Simuler mon prêt',
    onClick: () => console.log('Simuler mon prêt')
  },
  clientCardProps: {
    title: 'Vous avez déjà un espace Pretto ?',
    description: (
      <p>
        <a href="">Connectez-vous</a> avec l{"'"}email que vous aviez communiqué à Pretto, ou contactez votre conseiller
        si vous l{"'"}avez oublié
      </p>
    ),
    buttonText: 'Contactez-nous',
    onClick: () => console.log('Contact')
  }
}
;<DirectionsPage {...props} />
```
