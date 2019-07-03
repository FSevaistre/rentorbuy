### Import

```js static
import { ApplicationDocumentList } from 'pretto-ui'
```

### Usage

```html
<ApplicationDocumentList documents="{[]}" />
```

### Examples

#### Normal:

```jsx
const documents = [
  { href: '/', mortgagor: 'April Ludgate', status: 'idle', title: "Pièce d'identité" },
  { href: '/', mortgagor: 'April Ludgate', status: 'invalid', title: 'Justificatif de domicile' },
  { href: '/', mortgagor: 'April Ludgate', status: 'sent', title: 'Bail' }
]
;<ApplicationDocumentList documents={documents} />
```

#### Group:

```jsx
const documents = [
  { href: '/', mortgagor: 'April Ludgate', status: 'idle', title: 'Janvier 2019' },
  { href: '/', mortgagor: 'April Ludgate', status: 'sent', title: 'Février 2019' }
]
;<ApplicationDocumentList documents={documents} group="Bulletins de salaire" />
```
