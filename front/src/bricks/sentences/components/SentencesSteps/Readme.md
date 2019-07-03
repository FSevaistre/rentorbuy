### Import
```js static
import { SentencesSteps } from 'pretto-ui'
```

### Usage
```html
<SentencesSteps />
```

### Examples
#### Basic:
```jsx
handleClick = pageName => {
  console.log('click', pageName);
};
const props = {
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
  onNav: handleClick,
  title: 'test'
};
<SentencesSteps {...props} />
```
