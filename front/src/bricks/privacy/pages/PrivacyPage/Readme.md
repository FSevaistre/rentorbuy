### Import
```js static
import { PrivacyPage } from 'pretto-ui'
```

### Usage
```html
<PrivacyPage />
```

### Examples
#### Basic:
```jsx
const props = {
  privacyActionsProps: {
    onValidate: () => console.log('onValidate'),
    onCancel: () => console.log('onCancel')
  }
};
<PrivacyPage {...props} />
```
