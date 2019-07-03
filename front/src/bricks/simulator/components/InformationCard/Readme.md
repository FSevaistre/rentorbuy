### Import
```js static
import { InformationCard } from 'pretto-ui'
```

### Usage
```html
<InformationCard />
```

### Examples
#### Basic:
```jsx
const props = {
  title: 'Montant emprunté',
  value: 318000,
  valueType: 'amount',
  icon: 'pen',
  onClick: () => console.log('clicked InformationCard')
};
<InformationCard {...props} />
```
