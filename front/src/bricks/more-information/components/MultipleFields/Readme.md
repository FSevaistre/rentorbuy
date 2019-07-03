### Import

```js static
import { MultipleFields } from 'pretto-ui'
```

### Usage

```html
<MultipleFields />
```

### Examples

#### Basic:

```jsx
const props = {
  title: 'Bien 1',
  content: '10 rue des messageries',
  onModify: () => console.log('modify'),
  fields: [
    {
      component: (
        <InformationField label="Quelle est votre profession ?" component={<TextField placeholder="Courtier" />} />
      )
    },
    {
      component: (
        <InformationField label="Où travaillez-vous ?" component={<TextField placeholder="10 rue des messageries" />} />
      )
    }
  ]
}
;<MultipleFields {...props} />
```
