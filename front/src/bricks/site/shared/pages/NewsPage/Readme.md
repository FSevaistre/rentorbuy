### Import

```js static
import { NewsPage } from 'bricks'
```

### Usage

```html
<NewsPage {...props} />
```

### Example

```jsx
const props = {
  articles: [
    {
      slug: 'achat-appartement-paris',
      image: 'highlight/achat-appartement-paris',
      title: 'Comment acheter un appartement à Paris ?',
      excerpt:
        'Vous souhaitez faire l’achat d’un appartement à Paris ? Le marché parisien est particulier, on vous donne donc tous nos conseils pour réussir votre achat !',
      category: 'actualites'
    },
    {
      slug: 'taux-assurance-pret-immobilier',
      image: 'highlight/taux-assurance-pret-immobilier',
      title: 'Quel est le taux de l’assurance de prêt immobilier ?',
      excerpt:
        'Le taux de votre assurance de prêt immobilier dépend de nombreux critères. Comparez les offres car il peut vous faire économiser beaucoup d’argent !	',
      category: 'actualites'
    },
    {
      slug: 'achat-immobilier-pacs',
      image: 'highlight/achat-immobilier-pacs',
      title: 'Faire un achat immobilier avec un PACS',
      excerpt:
        'Vous êtes pacsé et voulez acheter un bien immobilier ? Mais comment est répartie la propriété, et que se passe-t-il en cas de séparation ou de décès ?	',
      category: 'actualites'
    }
  ],
  previous: 1,
  next: 3
}
;<NewsPage {...props} />
```
