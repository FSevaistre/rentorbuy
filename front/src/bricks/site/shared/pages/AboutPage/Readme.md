### Import

```js static
import { AboutPage } from 'bricks'
```

### Usage

```html
<AboutPage {...props} />
```

### Example

```jsx
const props = {
  steps: {
    loan: {
      title: 'Choisissez le bon prêt',
      content: 'Nous calculons votre budget, vous choisissez la durée et la mensualité qui vous convient. Notre simulateur est fort en maths : il vous aide à optimiser votre apport et à réduire le coût de votre crédit.',
      image: 'sliders'
    },
    rate: {
      title: 'Comparez les meilleur taux',
      content: 'Les algorithmes de Pretto testent en quelques secondes plusieurs milliers de combinaisons dans les offres bancaires et comparent pour vous les petites lignes.',
      image: 'rates'
    },
    experts: {
      title: 'Nos experts, à vos côtés',
      content: 'Vous allez prendre une décision importante :  un expert Pretto est là pour vous guider.  Il analyse votre projet, répond à vos questions et vous accompagne dans vos choix.',
      image: 'team-bubbles'
    },
    folder: {
      title: 'Constituez votre dossier',
      content: 'Finie la paperasse : tout se fait en ligne, en un temps record. Prenez en photo vos documents et téléchargez les sur votre Espace Pretto.  Vous suivez l’avancée de votre dossier 7 jours sur 7, 24h sur 24.',
      image: 'checklist'
    },
    negotiation: {
      title: 'Nous négocions',
      content: 'À nous de jouer ! Nous négocions votre taux avec les banques et prenons rendez-vous avec votre futur conseiller. Nous sommes 100% indépendants et transparents sur nos échanges.',
      image: 'pretto-bank'
    },
    end: {
      title: 'Et voilà, vous avez votre prêt !',
      content: 'Pretto vous a accompagné jusqu’à la signature finale chez le notaire, gratuitement, ainsi vous avez consacré vos journées à ce qui est important pour vous.',
      image: 'celebration'
    }
  },
  content: `<EbookBanner />`
}
;<AboutPage {...props} />
```
