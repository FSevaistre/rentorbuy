### Import
```js static
import { Breadcrumb } from 'pretto-ui'
```

### Usage
```html
<Breadcrumb {...{steps}} />
```

### Examples
#### Basic:
```jsx
handleClick = step => {
  console.log('click', step);
};
<Breadcrumb
  steps={[
    {label: 'Vos documents', onClick: handleClick},
    {label: <SupportingDocument
              docName="Pièce d'identité"
              mortgagorName="Andy"
              isComortgagor
            />,
    onClick: handleClick}
  ]}
  onGoBack={handleClick}
  />
```
