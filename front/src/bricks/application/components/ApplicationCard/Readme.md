### Import

```js static
import { ApplicationCard } from 'pretto-ui'
```

### Usage

```html
<ApplicationCard description="Vos informations" slug="mortgagor" title="April Ludgate" type="individual" />
```

### Examples

#### Idle:

```jsx
<ApplicationCard description="Faites les présentations" slug="comortgagor" title="Andy Dwyer" type="individual" />
```

#### Complete:

```jsx
<ApplicationCard
  description="Indiquez nous votre patrimoine financier afin de renforcer votre dossier"
  slug="savings"
  status="complete"
  title="Votre patrimoine"
/>
```

#### Incomplete:

```jsx
<ApplicationCard
  description="Indiquez nous les banques dont vous êtes client"
  slug="banks"
  status="incomplete"
  title="Vos banques"
/>
```

#### Invalid:

```jsx
<ApplicationCard
  description="Indiquez nous vos crédits en cours afin de calculer votre endettement précisément"
  slug="credits"
  status="invalid"
  title="Vos crédits en cours"
/>
```
