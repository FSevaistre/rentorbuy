### Import

```js static
import { ContactForm } from 'pretto-ui'
```

### Usage

```html
<ContactForm />
```

### Examples

#### Basic:

```jsx
const props = {
  type: 'subscribe',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  formIsValid: false,
  errorPhone: false,
  onChange: () => {},
  onSubmit: () => {},
  onBlur: () => {},
  hint: '',
  onChangeHint: () => {}
}
;<ContactForm {...props} />
```
