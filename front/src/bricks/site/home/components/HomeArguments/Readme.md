### Import

```js static
import { HomeArguments } from 'bricks'
```

### Usage

```jsx static
<HomeArguments  />
```

### Examples

```jsx
const props = {
  args: {
    argument_1: {
      title: 'Le meilleur taux,<br />pour vous',
      content: 'En 5 minutes vous simulez le taux que Pretto peut négocier pour vous.<br />Nous vous accompagnons jusqu’a la signature du prêt.'
    },
    argument_2: {
      title: 'Des experts, avec les meilleurs outils',
      content: 'Avec l’aide d’un expert Pretto vous affinez votre demande de crédit et optimisez votre dossier : nos algorithmes vont partout.'
    },
    argument_3: {
      title: 'Aucun frais,<br />100% transparent',
      content: 'Aucun frais pour vous, ce sont les banques qui nous rémunèrent.<br />Notre service est sans engagement et 100% transparent.'
    }
  }
}
;<HomeArguments {...props} />
```
