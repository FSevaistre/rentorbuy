### Import

```js static
import { ApplicationDocumentUploadPage } from 'pretto-ui'
```

### Usage

```html
<ApplicationDocumentUploadPage
  {...{
  title,
  breadcrumbProps,
  uploadProps,
  uploadedDocumentListProps,
  documentInformationProps
  }}
/>
```

### Examples

#### Basic:

```jsx
const onUpload = () => console.log('Event here !')

const documents = [
  { progressProps: { value: 1, max: 3 }, onDelete: () => {}, children: 'document-name.jpg' },
  { onDelete: () => {}, children: 'id-back.jpg', isUploaded: true },
  { onDelete: () => {}, children: 'id-front.jpg', isUploaded: true }
]

const documentInformationProps = {
  docDescription: React.createElement(
    React.Fragment,
    null,
    'Vérifier la bonne tenue de vos comptes personnels. Il est très préférable que votre solde soit créditeur tous les mois.'
  )
}

const metadataProps = [
  { type: 'mortgagor', value: 'all', title: 'En commun' },
  { type: 'status', value: 'invalid', title: 'Invalide' }
]

;<ApplicationDocumentUploadPage
  documentInformationProps={documentInformationProps}
  documents={documents}
  metadataProps={metadataProps}
  onUpload={onUpload}
  title="Pièce d'identité"
/>
```
