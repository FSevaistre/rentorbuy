### Import

```js static
import { TimelineSteps } from 'pretto-ui'
```

### Usage

```html
<TimelineSteps />
```

### Examples

#### Basic:

```jsx
const steps = [
  {
    name: ['simulation'],
    title: 'Votre simulation',
    content:
      'Décrivez votre projet et obtenez une estimation de notre offre de prêt. Votre conseiller prend en charge votre dossier.'
  },
  {
    name: ['more_information'],
    title: 'Vos informations',
    content: 'Remplissez les informations nécessaires à votre dossier',
    button: {
      label: 'Remplir',
      action: {
        type: 'link',
        path: '/information/marital'
      }
    }
  },
  {
    name: ['docs'],
    title: 'Envoyez vos documents',
    content: 'Constituez votre dossier en ligne en envoyant les documents nécessaires.',
    button: {
      label: 'Envoyer',
      isAlwaysActive: true,
      action: {
        type: 'link',
        path: '/docs'
      }
    }
  },
  {
    name: ['doc_validation'],
    title: 'Validation de vos documents',
    content:
      "Notre équipe valide la conformité de vos documents en 3 jours en moyenne. Il est important que votre dossier soit complet pour l'envoyer aux banques."
  },
  {
    name: ['certificate'],
    title: 'Attestation Pretto',
    content:
      'Pretto pré-valide votre dossier. Vous pouvez télécharger une attestation Pretto et la remettre à votre vendeur.',
    button: {
      label: 'Télécharger',
      isAlwaysActive: true,
      action: {
        type: 'certificate_link'
      }
    }
  },
  {
    name: ['mandate'],
    title: 'Signez notre mandat',
    content:
      'Le mandat nous permet de négocier le meilleur taux en votre nom et décrit les engagements de Pretto. Consultez votre boîte email !'
  },
  {
    name: ['negotiation'],
    title: 'Votre prêt est en cours de négociation',
    content:
      "Votre conseiller consulte les banques et négocie la meilleure offre pour vous. Le temps moyen d'étude est de 10 jours."
  },
  {
    name: ['agreement'],
    title: 'Accord de principe',
    content: 'Votre conseiller vous propose la meilleure offre.'
  },
  {
    name: ['appointment'],
    title: 'Rendez-vous à la banque ',
    content:
      "Vous rencontrez votre nouvelle banque et signez l'ouverture de vos comptes. La banque traite votre demande de prêt en 2 à 4 semaines."
  },
  {
    name: ['signature'],
    title: "Signez l'offre de prêt",
    content: "Vous recevez l'offre de prêt et attendez 11 jours avant de la renvoyer signée."
  },
  {
    name: ['end'],
    emoji: ':champagne:',
    title: 'Débloquez votre prêt !',
    content: 'Vous signez chez le notaire : vous êtes propriétaire !'
  }
]
handleStepAction = () => console.log('clicked docs button')
const current = 'docs'
let timelineSteps = []
steps.forEach((step, index) => {
  const position = 2
  timelineSteps.push(
    <TimelineStep
      key={step.name}
      data={step}
      current={current}
      stepIndex={index}
      position={position}
      onStepAction={handleStepAction}
      isLastStep={steps.length - 1 === index}
    />
  )
})
const props = {
  current,
  stepsComponents: timelineSteps,
  greetings: 'Bonjour',
  name: 'Monsieur Pretto'
}
;<TimelineSteps {...props} />
```
