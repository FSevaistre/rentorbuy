### Import

```js static
import { LoginPage } from 'pretto-ui'
```

### Usage

```html
<LoginPage />
```

### Examples

#### Basic:

```jsx
const handleChangeEmail = email => {
  setState({ email })
  if (email.indexOf('@') === -1) setState({ error: 'Il manque un @ dans votre adresse email' })
  else setState({ error: '' })
}
handleClickHint = email => setState({ email })
const handleSubmit = () => console.log('submit', state.email)
const connectionCardProps = {
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
const props = {
  title: 'Login Page',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ab.',
  connectionCardProps
}
;<LoginPage {...props} />
```
