### Import
```js static
import { Sentence } from 'pretto-ui'
```

### Usage
```html
<Sentence />
```

### Examples
#### Basic:
```jsx
initialState = {
  isHelperClicked: false
};
handleClick = () => {
  setState({ isHelperClicked: !state.isHelperClicked })
};
const props = {
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
  ],
  hasHelper: true,
  onClickHelper: handleClick,
  isHelperClicked: state.isHelperClicked
};
<Sentence {...props} />
```
