### Import
```js static
import { UploadPage } from 'pretto-ui'
```

### Usage
```html
<UploadPage {...{ title, breadcrumbProps, uploadProps, uploadedDocumentsListProps, documentInformationProps }} />
```

### Examples
#### Basic:
```jsx
handleClick = elem => {
  console.log('click', elem);
};
handleDocClick = doc => {
  console.log('click', doc);
};
const title = "Pièce d'identité";
const breadcrumbProps = {
  steps: [
    {label: 'Vos documents', onClick: handleClick},
    {label: "Pièce d'identité - Andy", onClick: handleClick}
  ]
};
const uploadProps = {
  onUpload: handleClick
};
const uploadedDocumentsListProps = {
  documents: [
    {progressProps:{ value: 1, max: 3 }, onDelete: handleClick, children: 'document-name.jpg'},
    {onDelete: handleClick, children: 'id-back.jpg', isUploaded: true},
    {onDelete: handleClick, children: 'id-front.jpg', isUploaded: true},
  ]
};
const documentInformationProps = {
  status: 'success',
  docName: "Pièce d'identité",
  mortgagorName: 'Andy',
  isComortgagor: true,
  docDescription: 'lorem'
};
<UploadPage {...{ title, breadcrumbProps, uploadProps, uploadedDocumentsListProps, documentInformationProps }} />
```
