### Import
```js static
import { UploadedDocument } from 'pretto-ui'
```

### Usage
```html
<UploadedDocument>documentname</UploadedDocument>
```

### Examples
#### Basic:
```jsx
handleClick = () => {
  console.log('click');
};
<UploadedDocument progressProps={{ value: 1, max: 3 }} isUploaded onDelete={handleClick}>document-name.jpg</UploadedDocument>
```
