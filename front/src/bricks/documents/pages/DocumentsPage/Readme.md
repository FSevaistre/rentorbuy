### Import

```js static
import { DocumentsPage } from 'pretto-ui'
```

### Usage

```html
<DocumentsPage {...{ bubbleChatProps, docsListProps }} />
```

### Examples

#### Basic:

```jsx
initialState = {
  filter: 'all'
}
handleClick = filter => {
  console.log('click', filter)
  setState({ filter: filter.value })
}
handleDocClick = doc => {
  console.log('click', doc)
}
const selectFieldProps = {
  value: state.filter,
  options: [
    { label: 'tous', value: 'all' },
    { label: 'Validé', value: 'success' },
    { label: 'Reçu', value: 'pending' }
  ],
  onChange: handleClick
}
;<DocumentsPage
  bubbleChatProps={{
    avatar: 'P'
  }}
  docsListProps={{
    documents: [
      { filter: 'success', docName: "Pièce d'identité", mortgagorName: 'Andy' },
      { filter: 'pending', docName: "Pièce d'identité", mortgagorName: 'Votre co-emprunteur' }
    ],
    onDocumentClick: handleDocClick,
    selectFieldProps,
    hasMortgagor: true
  }}
  progressProps={{
    value: 0.3
  }}
/>
```
