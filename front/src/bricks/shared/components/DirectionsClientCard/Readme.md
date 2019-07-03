### Import

```js static
import { DirectionsClientCard } from 'pretto-ui'
```

### Usage

```html
<DirectionsClientCard />
```

### Examples

#### Basic:

```jsx
const props = {
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
;<DirectionsClientCard {...props} />
```
