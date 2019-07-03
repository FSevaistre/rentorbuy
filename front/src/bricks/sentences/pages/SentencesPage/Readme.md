### Import
```js static
import { SentencesPage } from 'pretto-ui'
```

### Usage
```html
<SentencesPage />
```

### Examples
#### Basic:
```jsx
onClick = () => {
  console.log('click action');
};
const sentencesGroupProps = {
  sentences: [
    {
      type: 'sentence',
      props: {
        children: [
          'Vous ',
          {
            type: 'select',
            path: 'mortgagorHasCredits',
            props: {
              placeholder: 'avez',
              options: [{ label: 'avez', value: 'true' }, { label: "n'avez pas", value: 'false' }],
              value: 'true'
            }
          },
          " d'autre(s) crédit(s) en cours."
        ]
      }
    },
    {
      type: 'add',
      props: {
        onClick,
        children: [ 'Ajouter un crédit' ]
      }
    }
  ]
};
const sentenceStepsProps = {
  pages: [
    { name: 'lodging', title: 'Votre situation' },
    { name: 'situation', title: 'Votre situation pro' },
    { name: 'revenu', title: 'Vos revenus' },
    { name: 'credits', title: 'Vos crédits' },
    { type: 'separator', title: 'Votre coemprunteur' },
    { name: 'co-lodging', title: 'Sa situation' },
    { name: 'co-situation', title: 'Sa situation pro' },
    { name: 'co-revenu', title: 'Ses revenus' },
    { name: 'co-credits', title: 'Ses crédits' },
    { type: 'separator' , title: '', extendedType: 'endSeparator' },
    { name: 'contribution', title: 'Apport' },
    { name: 'simulation', title: 'Simulation' }
  ],
  lastFilledIndex: 5,
  onNav: onClick,
  title: 'test'
}
const props = {
  sentenceStepsProps,
  emoji: ':poop:',
  title: 'Page Title',
  onClickHelper: onClick,
  isHelperOpen: true,
  helper: { slug: 'credits', content: 'Lorem ipsum dolor sit amet.' },
  helpersClicked: {},
  progress: 0.2,
  progressMax: 4,
  simulationStatus: 'none',
  sentencesGroupProps,
  index: 1,
  goPreviousStep: onClick,
  isButtonDisabled: false,
  onCloseHelper: onClick,
  onSubmit: onClick,
  isLast: false,
  isOpen: true,
  onCloseTimeline: onClick,
  onOpenTimeline: onClick
};
<SentencesPage {...props} />
```
