### Import

```js static
import { RemovableSentence } from 'pretto-ui'
```

### Usage

```html
<RemovableSentence></RemovableSentence>
```

### Examples

#### Basic:

```jsx
onClickContent = () => {
  console.log('click content')
}
onRemove = () => {
  console.log('click remove')
}
const props = {
  onRemove,
  sentenceProps: {
    type: 'sentence',
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
  },
  position: 1
}
;<RemovableSentence {...props} />
```
