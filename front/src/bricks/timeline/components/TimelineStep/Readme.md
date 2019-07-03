### Import

```js static
import { TimelineStep } from 'pretto-ui'
```

### Usage

```html
<TimelineStep />
```

### Examples

#### Basic:

```jsx
const props = {
  title: 'Vos informations',
  content: 'Remplissez les informations nécessaires à votre dossier',
  isCurrent: true,
  buttonProps: {
    children: 'Remplir',
    onClick: () => console.log('TimelineStep')
  }
}
;<TimelineStep {...props} />
```
