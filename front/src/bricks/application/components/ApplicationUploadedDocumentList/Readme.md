### Import

```js static
import { ApplicationUploadedDocumentList } from 'pretto-ui'
```

### Usage

```html
<ApplicationUploadedDocumentList />
```

### Examples

#### Basic:

```jsx
const documents = [
  { progressProps: { value: 1, max: 3 }, onDelete: () => {}, children: 'document-name.jpg' },
  { onDelete: () => {}, children: 'id-back.jpg', isUploaded: true },
  { onDelete: () => {}, children: 'id-front.jpg', isUploaded: true }
]
;<ApplicationUploadedDocumentList documents={documents} />
```

#### Empty:

```jsx
;<ApplicationUploadedDocumentList documents={[]} />
```
