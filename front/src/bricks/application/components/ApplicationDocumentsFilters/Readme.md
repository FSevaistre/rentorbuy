### Import

```js static
import { ApplicationDocumentsFilters } from 'pretto-ui'
```

### Usage

```html
<ApplicationDocumentsFilters filters="{[]}" />
```

### Examples

#### Normal:

```jsx
const filters = [
  {
    all: 'Toutes les catégories',
    options: [
      {
        slug: 'general',
        title: 'Votre situation'
      },
      {
        slug: 'banks',
        title: 'Vos banques'
      },
      {
        slug: 'savings',
        title: 'Votre patrimoine'
      },
      {
        slug: 'credits',
        title: 'Vos crédits en cours'
      }
    ],
    slug: 'category',
    title: 'Catégorie'
  },
  {
    all: 'Tous les emprunteurs',
    options: [
      {
        slug: 'mortgagor',
        title: 'April Ludgate'
      },
      {
        slug: 'comortgagor',
        title: 'Andy Dwyer'
      },
      {
        slug: 'all',
        title: 'En commun'
      }
    ],
    slug: 'mortgagor',
    title: 'Emprunteur'
  },
  {
    all: 'Tous',
    options: [
      {
        slug: 'idle',
        title: 'À envoyer'
      },
      {
        slug: 'sent',
        title: 'Envoyé'
      },
      {
        slug: 'invalid',
        title: 'Invalide'
      }
    ],
    slug: 'status',
    title: 'Statut'
  }
]

initialState = { selectedFilters: {}, isOpen: false }

const handleChange = (name, value) => {
  setState(state => {
    const selectedFilters = { ...state.selectedFilters, [name]: value }

    if (!value) {
      delete selectedFilters[name]
    }

    return { selectedFilters }
  })
}

const handleClose = () => setState({ isOpen: false })
const handleToggle = () => setState(({ isOpen }) => ({ isOpen: !isOpen }))

;<div style={{ position: 'relative' }}>
  <ApplicationDocumentsFilters
    {...state}
    filters={filters}
    onChange={handleChange}
    onClose={handleClose}
    onToggle={handleToggle}
  />
</div>
```
