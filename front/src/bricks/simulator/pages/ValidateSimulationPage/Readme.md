### Import
```js static
import { ValidateSimulationPage } from 'pretto-ui'
```

### Usage
```html
<ValidateSimulationPage />
```

### Examples
#### Basic:
```jsx
const props = {
  bubbleChat: <BubbleChat>Vous avez modifié votre projet. Souhaitez vous conserver votre projet actuel ou enregistrer vos modifications ?</BubbleChat>,
  currentProject: {
    values: [
      { path: 'contribution', value: 20000 },
      { path: 'request.duration', value: 23 },
      { path: 'payment', value: 2245 }
    ],
    onClick: () => console.log('onClick')
  },
  newProject: {
    values: [
      { path: 'contribution', value: 21000 },
      { path: 'request.duration', value: 20 },
      { path: 'payment', value: 2145 }
    ],
    onClick: () => console.log('onClick')
  }
};
<ValidateSimulationPage {...props} />
```
