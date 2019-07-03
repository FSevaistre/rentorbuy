### Import
```js static
import { CapacityActions } from 'pretto-ui'
```

### Usage
```html
<CapacityActions />

```
### Examples
#### Basic:
```jsx
onSave = () => {
  console.log('save');
};
onEditProfile = () => {
  console.log('save');
};
const props = {
  onSave,
  onEditProfile
};
<CapacityActions {...props} />
```
