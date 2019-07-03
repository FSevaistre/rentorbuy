### Import

```js static
import { GlossaryPage } from 'bricks'
```

### Usage

```html
<GlossaryPage {...props} />
```

### Example

```jsx
const props = {
  title: 'Lexique',
  terms: [
    { slug: 'abattement', title: 'Abattement' },
    { slug: 'achat-indivison', title: 'Achat en indivision' },
    { slug: 'amortissement', title: 'Amortissement' },
    { slug: 'bail', title: 'Bail' },
    { slug: 'cadastre', title: 'Cadastre' },
    { slug: 'cap', title: 'Cap' }
  ]
}
;<GlossaryPage {...props} />
```
