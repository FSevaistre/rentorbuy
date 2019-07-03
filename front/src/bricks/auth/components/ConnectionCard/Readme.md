### Import

```js static
import { ConnectionCard } from 'pretto-ui'
```

### Usage

```html
<ConnectionCard />
```

### Examples

#### Basic:

```jsx
initialState = {
  email: '',
  error: ''
}
const handleChangeEmail = email => {
  setState({ email })
  if (email.indexOf('@') === -1) setState({ error: 'Il manque un @ dans votre adresse email' })
  else setState({ error: '' })
}
handleClickHint = email => setState({ email })
const handleSubmit = () => console.log('submit', state.email)
const props = {
  label: 'Connectez-vous avec votre email',
  emoji: ':lock:',
  buttonText: 'Se connecter',
  placeholder: 'bruce.wayne@gmail.com',
  information: (
    <p>
      <strong>Pour votre sécurité,</strong> Pretto n{"'"}
      utilise pas de mot de passe. Vous recevrez un lien de connexion par email
    </p>
  ),
  email: state.email,
  errorText: state.error,
  onEmailChange: handleChangeEmail,
  onSubmit: handleSubmit,
  onCorrect: handleClickHint,
  disabled: !state.email
}
;<ConnectionCard {...props} />
```
