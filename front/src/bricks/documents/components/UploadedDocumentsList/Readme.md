### Import

```js static
import { UploadedDocumentsList } from 'pretto-ui'
```

### Usage

```html
<UploadedDocumentsList />
```

### Examples

#### Basic:

```jsx
handleClick = () => {
  console.log('click')
}
handleUpload = () => setState({ documents })
initialState = {
  documents: []
}
const documents = [
  { progressProps: { value: 1, max: 3 }, onDelete: handleClick, children: 'document-name.jpg' },
  { onDelete: handleClick, children: 'id-back.jpg', isUploaded: true },
  { onDelete: handleClick, children: 'id-front.jpg', isUploaded: true }
]
;<>
  <UploadedDocumentsList documents={state.documents} />
</>
```
