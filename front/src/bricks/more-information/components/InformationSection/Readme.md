### Import
```js static
import { InformationSection } from 'pretto-ui'
```

### Usage
```html
<InformationSection />

```
### Examples
#### Basic:
```jsx
const props = {
  title: 'Votre situation professionnelle',
  fields: [
    {
      name: 'tf',
      label: 'Quel est votre nom complet ?',
      component: <TextField />
    },
    {
      name: 'sl',
      label: 'Quelle est votre situation maritale ?',
      component: <TextField />
    }
  ]
};
<InformationSection {...props} />
```
