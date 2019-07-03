### Import

```js static
import { HomeBanks } from 'bricks'
```

### Usage

```jsx static
<HomeBanks  />
```

### Examples

```jsx
const props = {
  banks: {
    title: 'Nous sommes bien plus qu’un courtier',
    content: 'Nos algorithmes analysent les offres des meilleures banques afin d’identifier le financement sur-mesure le plus adapté à votre projet.',
    items: [
      { slug: 'credit_foncier', size: 'medium' },
      { slug: 'bred', size: 'large' },
      { slug: 'bred_espace', size: 'medium' },
      { slug: 'credit_agricole', size: 'large' },
      { slug: 'lcl', size: 'medium' },
      { slug: 'caisse_d_epargne', size: 'large' },
      { slug: 'bnp_paribas', size: 'large' },
      { slug: 'axa_banque', size: 'small' },
      { slug: 'credit_du_nord', size: 'large' },
      { slug: 'societe_generale', size: 'small' }
    ]
  }
}
;<HomeBanks {...props} />
```
