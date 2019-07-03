### Import
```js static
import { ErrorPage } from 'pretto-ui'
```

### Usage
```html
<ErrorPage />

```
### Examples
#### Basic:
```jsx
onClose = () => {
  console.log('close');
};
const props = {
  errors: ['lowCapacity'],
  onChat: ()=>{}
};
<ErrorPage {...props} isReloadable />
```
