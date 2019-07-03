### Import

```js static
import { SubscribePage } from 'pretto-ui'
```

### Usage

```html
<SubscribePage />
```

### Examples

#### Basic:

```jsx
const contactFormProps = {
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
const props = {
  formComponent: <ContactForm {...contactFormProps} />,
  subscribeContentProps: {
    count: '254',
    rate: '9,6 Excellent',
    link: 'https://fr.trustpilot.com/review/pretto.fr'
  },
  whiteLabel: {
    logo: 'whitelabel/g-d-c.svg',
    banner: 'Avec Gens de Confiance, Pretto négocie votre crédit immobilier.',
    style: {
      background: '#802254',
      color: '#fff'
    }
    // partners: {
    //   logo: 'whitelabel/g-d-c.svg',
    //   content: 'Gens de Confiance est heureux de vous recommander Pretto, le seul courtier en prêt immobilier gratuit, simple et à vos côtés tout au long de votre projet.'
    // }
  },
  kind: 'capacity',
  version: 'best_rate',
  error: 'account_exists',
  link: 'ici'
}
;<SubscribePage {...props} />
```
