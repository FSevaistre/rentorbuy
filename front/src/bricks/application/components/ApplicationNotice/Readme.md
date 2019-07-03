### Import

```js static
import { ApplicationNotice } from 'pretto-ui'
```

### Usage

```html
<ApplicationNotice
  cta="Consulter"
  notice="L'équipe Pretto à préparé un guide pour vous aider à scanner et envoyer vos documents en qualité optimale."
  title="Comment scanner et envoyer vos documents"
/>
```

### Examples

#### Normal:

```jsx
<ApplicationNotice
  cta="Consulter"
  href="/"
  notice="L'équipe Pretto à préparé un guide pour vous aider à scanner et envoyer vos documents en qualité optimale."
  title="Comment scanner et envoyer vos documents"
/>
```

#### Error:

```jsx
<ApplicationNotice
  cta="Consulter"
  href="/"
  notice="Nous vous invitons à consulter les raisons pour chaque document et à nous renvoyer les documents valides afin de complèter votre dossier. Merci !"
  title="Certains de vos documents sont invalides"
  type="error"
/>
```
