### Import

```js static
import { BuyerGuidePage } from 'bricks'
```

### Usage

```html
<BuyerGuidePage title="Le guide de l'acheteur" />
```

### Examples

```jsx
const props = {
  articles: [
    {
      category: 'avant-de-vous-lancer',
      excerpt:
        'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas. Expeditionis eventus languentibus partium animis.',
      image: 'https://picsum.photos/1024',
      slug: 'guide-achat-immobilier',
      title: 'Guide achat immobilier : 5 questions à se poser'
    },
    {
      category: 'avant-de-vous-lancer',
      excerpt:
        'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
      image: 'https://picsum.photos/1024',
      slug: 'guide-achat-immobilier',
      title: 'Acheter ou louer : comment répondre à cette grande question'
    },
    {
      category: 'avant-de-vous-lancer',
      excerpt:
        'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas. Quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
      image: 'https://picsum.photos/1024',
      slug: 'guide-achat-immobilier',
      title: "Les 7 étapes d'un achat immobilier"
    },
    {
      category: 'avant-de-vous-lancer',
      excerpt:
        'Post emensos insuperabilis expeditionis eventus, quas periculorum varietas fregerat et laborum, cessante clangore vel milite locato per stationes hibernas.',
      image: 'https://picsum.photos/1024',
      slug: 'guide-achat-immobilier',
      title: 'Acheter à plusieurs un bien immobilier : comment faire ?'
    },
    {
      category: 'avant-de-vous-lancer',
      image: 'https://picsum.photos/1024',
      slug: 'guide-achat-immobilier',
      title: 'Usufruit, nue-propriété : quelles différences ?'
    },
    {
      category: 'avant-de-vous-lancer',
      excerpt:
        'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
      image: 'https://picsum.photos/1024',
      slug: 'guide-achat-immobilier',
      title: "Créer une SCI pour l'achat immobilier : avantages"
    }
  ],
  chapters: [
    {
      description:
        'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
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
      slug: 'avant-de-vous-lancer',
      number: '1',
      title: 'Avant de vous lancer',
      variant: 'primary-1'
    },
    {
      description:
        'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
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
      slug: 'avant-de-vous-lancer',
      number: '2',
      title: 'Décider de votre budget immobilier',
      variant: 'accent-1'
    },
    {
      description:
        'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
      subChapters: [
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
        }
      ],
      slug: 'avant-de-vous-lancer',
      number: '3',
      title: 'Franchir le pas',
      variant: 'accent-3'
    }
  ],
  title: "Le guide\nde l'acheteur",
  ebookComponent: <EbookBanner />
}

;<BuyerGuidePage {...props} />
```
