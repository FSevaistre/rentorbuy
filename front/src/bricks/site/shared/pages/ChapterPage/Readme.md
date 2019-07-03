### Import

```js static
import { ChapterPage } from 'bricks'
```

### Usage

```html
<ChapterPage />
```

### Examples

```jsx
const props = {
  hero: {
    chapterID: 1,
    title: 'Avant de vous lancer',
    variant: 'primary-1'
  },
  topics: [
    {
      posts: [
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas. Expeditionis eventus languentibus partium animis.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: 'Guide achat immobilier : 5 questions à se poser',
          url: '/'
        },
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: 'Acheter ou louer : comment répondre à cette grande question',
          url: '/'
        },
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas. Quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: "Les 7 étapes d'un achat immobilier",
          url: '/'
        },
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus, quas periculorum varietas fregerat et laborum, cessante clangore vel milite locato per stationes hibernas.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: 'Acheter à plusieurs un bien immobilier : comment faire ?',
          url: '/'
        },
        {
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: 'Usufruit, nue-propriété : quelles différences ?',
          url: '/'
        },
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: "Créer une SCI pour l'achat immobilier : avantages",
          url: '/'
        }
      ],
      name: 'Devenir propriétaire'
    },
    {
      posts: [
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas. Expeditionis eventus languentibus partium animis.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: 'Guide achat immobilier : 5 questions à se poser',
          url: '/'
        },
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: 'Acheter ou louer : comment répondre à cette grande question',
          url: '/'
        },
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas. Quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: "Les 7 étapes d'un achat immobilier",
          url: '/'
        },
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus, quas periculorum varietas fregerat et laborum, cessante clangore vel milite locato per stationes hibernas.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: 'Acheter à plusieurs un bien immobilier : comment faire ?',
          url: '/'
        },
        {
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: 'Usufruit, nue-propriété : quelles différences ?',
          url: '/'
        },
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: "Créer une SCI pour l'achat immobilier : avantages",
          url: '/'
        }
      ],
      name: "Acheter dans l'ancien, le neuf ou faire construire ?"
    },
    {
      posts: [
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas. Expeditionis eventus languentibus partium animis.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: 'Guide achat immobilier : 5 questions à se poser',
          url: '/'
        },
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: 'Acheter ou louer : comment répondre à cette grande question',
          url: '/'
        },
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas. Quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: "Les 7 étapes d'un achat immobilier",
          url: '/'
        },
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus, quas periculorum varietas fregerat et laborum, cessante clangore vel milite locato per stationes hibernas.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: 'Acheter à plusieurs un bien immobilier : comment faire ?',
          url: '/'
        },
        {
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: 'Usufruit, nue-propriété : quelles différences ?',
          url: '/'
        },
        {
          excerpt:
            'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
          image: {
            description: 'Image description',
            src: 'https://picsum.photos/1024'
          },
          title: "Créer une SCI pour l'achat immobilier : avantages",
          url: '/'
        }
      ],
      name: 'Seul ou à plusieurs ?'
    }
  ]
}

;<ChapterPage {...props} />
```
