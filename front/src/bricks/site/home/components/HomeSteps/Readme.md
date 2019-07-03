### Import

```js static
import { HomeSteps } from 'bricks'
```

### Usage

```jsx static
<HomeSteps  />
```

### Examples

```jsx
const props = {
  steps: [
    { title: 'Simulez votre prêt', content: 'Pretto est le seul comparateur de taux immobilier en ligne vraiment transparent.' },
    { title: 'Nos experts à votre écoute', content: 'Avec votre conseiller Pretto, vous affinez votre demande de crédit et optimisez votre dossier : apport, assurance, prêts aidés...' },
    { title: '🍾 Obtenez votre prêt !', content: 'Pretto vous accompagne jusqu’à la signature de votre <a href="/pret-immobilier">crédit immobilier</a>, sans frais et sans engagement. ' }
  ]
}
;<HomeSteps {...props} />
```
