### Import

```js static
import { ApplicationDocumentsPage } from 'pretto-ui'
```

### Usage

```html
<ApplicationDocumentsPage documents="{[]}" />
```

### Examples

#### Normal:

```jsx
const documents = [
  { mortgagor: 'April Ludgate', status: 'idle', title: "Pièce d'identité" },
  { mortgagor: 'April Ludgate', status: 'invalid', title: 'Justificatif de domicile' },
  { mortgagor: 'April Ludgate', status: 'sent', title: 'Bail' },
  { group: 'Bulletins de salaire', mortgagor: 'April Ludgate', status: 'idle', title: 'Janvier 2019' },
  { group: 'Bulletins de salaire', mortgagor: 'April Ludgate', status: 'sent', title: 'Février 2019' }
]
;<ApplicationDocumentsPage documents={documents} />
```
