### Import

```js static
import { ContentPage } from 'bricks'
```

### Usage

```html
<ContentPage {...props} />
```

### Examples

#### Article Page

```jsx
const props = {
  chapter: {
    chapterID: 1,
    title: 'Avant de vous lancer',
    url: '#',
    variant: 'primary-1'
  },
  chapters: [
    {
      title: 'Avant de vous lancer',
      variant: 'primary-1'
    },
    {
      title: 'Devenir propriétaire',
      variant: 'accent-1'
    },
    {
      title: 'Seul ou à plusieurs',
      variant: 'accent-4'
    },
    {
      title: 'Mon achat immobilier',
      variant: 'accent-3-d'
    }
  ],
  content:
    'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas, fortunae saevientis procellae tempestates alias rebus infudere communibus per multa illa et dira facinora Caesaris Galli, qui ex squalore imo miseriarum in aetatis adultae primitiis ad principale culmen insperato saltu provectus ultra terminos potestatis delatae procurrens asperitate nimia cuncta foedabat. propinquitate enim regiae stirpis gentilitateque etiam tum Constantini nominis efferebatur in fastus, si plus valuisset, ausurus hostilia in auctorem suae felicitatis, ut videbatur.',
  image: 'image1,
  relatedArticles: [
    {
      excerpt:
        'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas. Expeditionis eventus languentibus partium animis.',
      image: 'image2',
      title: 'Guide achat immobilier : 5 questions à se poser',
      url: '/'
    },
    {
      excerpt:
        'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
      image: 'image3',
      title: 'Acheter ou louer : comment répondre à cette grande question',
      url: '/'
    },
    {
      excerpt:
        'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas. Quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
      image: 'image4',
      title: "Les 7 étapes d'un achat immobilier",
      url: '/'
    }
  ],
  title: 'Guide achat immobilier : 5 questions à se poser avant d’acheter'
}
;<ContentPage {...props} />
```

#### Documentation Page

```jsx
const props = {
  chapter: {
    chapterID: 1,
    title: 'Avant de vous lancer',
    url: '#',
    variant: 'primary-1'
  },
  chapters: [
    {
      title: 'Avant de vous lancer',
      variant: 'primary-1'
    },
    {
      title: 'Devenir propriétaire',
      variant: 'accent-1'
    },
    {
      title: 'Seul ou à plusieurs',
      variant: 'accent-4'
    },
    {
      title: 'Mon achat immobilier',
      variant: 'accent-3-d'
    }
  ],
  content:
    'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas, fortunae saevientis procellae tempestates alias rebus infudere communibus per multa illa et dira facinora Caesaris Galli, qui ex squalore imo miseriarum in aetatis adultae primitiis ad principale culmen insperato saltu provectus ultra terminos potestatis delatae procurrens asperitate nimia cuncta foedabat. propinquitate enim regiae stirpis gentilitateque etiam tum Constantini nominis efferebatur in fastus, si plus valuisset, ausurus hostilia in auctorem suae felicitatis, ut videbatur.',
  relatedArticles: [
    {
      excerpt:
        'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas. Expeditionis eventus languentibus partium animis.',
      image: 'image4',
      title: 'Guide achat immobilier : 5 questions à se poser',
      url: '/'
    },
    {
      excerpt:
        'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
      image: 'image5',
      title: 'Acheter ou louer : comment répondre à cette grande question',
      url: '/'
    },
    {
      excerpt:
        'Post emensos insuperabilis expeditionis eventus languentibus partium animis, quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas. Quas periculorum varietas fregerat et laborum, nondum tubarum cessante clangore vel milite locato per stationes hibernas.',
      image: 'image6',
      title: "Les 7 étapes d'un achat immobilier",
      url: '/'
    }
  ],
  title: 'Base documentaire'
}
;<ContentPage {...props} />
```
