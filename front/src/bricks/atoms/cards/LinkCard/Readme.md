### Import

```js static
import { Card } from 'pretto-ui'
```

### Usage

```html
<LinkCard {...props}>
  content of card
</LinkCard>
```

### Examples

#### Basic:

```jsx
const props = {
  emoji: ':tada:',
  title: 'Les modèles',
  href: '/guide/base-documentaire/',
  variant: 'accent-1',
  cta: 'Voir',
  content:
    'Retrouvez tous les modèles de documents - gratuits et téléchargeables - dont vous aurez besoin pendant votre achat.'
}
;<LinkCard {...props} />
```
