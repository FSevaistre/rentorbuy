### Import

```js static
import { Chapter } from 'bricks'
```

### Usage

```jsx static
<Chapter
  description="Post emensos insuperabilis expeditionis eventus languentibus partium animis."
  number="1"
  title="Avant de vous lancer"
  slug="avant-de-vous-lancer"
  subChapters={[{ number: '2', title: 'Devenir propriétaire' }]}
  variant="primary-1"
/>
```

### Examples

#### Single

```jsx
const props = {
  description:
    'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
  number: '1',
  slug: 'avant-de-vous-lancer',
  subChapters: [
    {
      name: 'Devenir propriétaire',
      number: '2'
    },
    {
      name: "Acheter dans l'ancien, le neuf ou faire construire ?",
      number: '2'
    },
    {
      name: 'Seul ou à plusieurs ?',
      number: '2'
    },
    {
      name: 'Faire un investissement locatif',
      number: '2'
    },
    {
      name: 'Rachat de crédit',
      number: '2'
    },
    {
      name: 'Rachat de soulte',
      number: '2'
    }
  ],
  title: 'Avant de vous lancer',
  variant: 'primary-1'
}
;<Chapter {...props} />
```

#### Row

```jsx
const props1 = {
  description:
    'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
  number: '1',
  slug: 'avant-de-vous-lancer',
  subChapters: [
    {
      name: 'Devenir propriétaire',
      number: '2'
    },
    {
      name: "Acheter dans l'ancien, le neuf ou faire construire ?",
      number: '2'
    },
    {
      name: 'Seul ou à plusieurs ?',
      number: '2'
    },
    {
      name: 'Faire un investissement locatif',
      number: '2'
    },
    {
      name: 'Rachat de crédit',
      number: '2'
    },
    {
      name: 'Rachat de soulte',
      number: '2'
    }
  ],
  title: 'Avant de vous lancer',
  variant: 'primary-1'
}
const props2 = {
  description:
    'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
  number: '2',
  slug: 'decider-votre-budget',
  subChapters: [
    {
      name: "L'apport personnel",
      number: '2'
    },
    {
      name: 'Votre situation personnelle et professionnelle',
      number: '2'
    },
    {
      name: "Votre capacité d'emprunt",
      number: '2'
    },
    {
      name: 'Les prêts aidés',
      number: '2'
    },
    {
      name: 'Attestation Pretto',
      number: '2'
    }
  ],
  title: 'Décider de votre budget immobilier',
  variant: 'accent-1'
}
;<div style={{ display: 'flex' }}>
  <div style={{ display: 'flex', marginRight: '16px' }}>
    <Chapter {...props1} />
  </div>
  <div style={{ display: 'flex' }}>
    <Chapter {...props2} />
  </div>
</div>
```
