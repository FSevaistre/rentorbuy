### Import
```js static
import { SentencesGroup } from 'pretto-ui'
```

### Usage
```html
<SentencesGroup />
```

### Examples
#### Basic:
```jsx
onClick = () => {
  console.log('click action');
};
const props = {
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
<SentencesGroup {...props} />
```
