### Import

```js static
import { DocsList } from 'pretto-ui'
```

### Usage

```html
<DocsList {...{ selectFieldProps, documents, onDocumentClick }} />
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
;<DocsList
  documents={[
    { filter: 'success', docName: "Pièce d'identité", mortgagorName: 'Andy' },
    { filter: 'pending', docName: "Pièce d'identité", mortgagorName: 'Votre co-emprunteur' },
    { filter: 'error', docName: "Pièce d'identité", mortgagorName: 'Votre co-emprunteur', section: 'bills' }
  ]}
  onDocumentClick={handleDocClick}
  selectFieldProps={selectFieldProps}
/>
```
