### Import

```js static
import { ConfirmPage } from 'pretto-ui'
```

### Usage

```html
<ConfirmPage
	advisorEmail="advisorEmail"
	avatarProps="avatarProps"
	loanValues="loanValues"
	onConfirm="handleConfirm"
	projectKind="purchase"
	projectValues="projectValues"
/>
```

### Examples

#### Basic:

```jsx
handleEdit = () => {
	alert('Edited !')
}

handleConfirm = () => {
	alert('Confimed !')
}

const advisorEmail = 'support@pretto.fr'
const avatarProps = { src: 'http://res.cloudinary.com/pretto-fr/w_112,h_112,q_auto/portrait-julien_iudnmm.png' }
const projectValues = [
	{ title: 'Prix du bien', value: '200 000 €', onAction: handleEdit },
	{ title: 'Travaux', value: '10 000 €', onAction: handleEdit },
	{
		title: 'Frais de notaire',
		value: '18 926 €'
	},
	{
		title: 'Frais de garantie',
		value: '1 491 €'
	},
	{
		title: 'Apport',
		value: '15 000 €',
		onAction: handleEdit
	},
	{
		title: 'Montant emprunté',
		value: '215 417 €'
	}
]
const loanValues = [
	{
		title: 'Durée',
		value: '23 ans',
		onAction: handleEdit
	},
	{
		title: 'Mensualité, hors assurance',
		value: '2 417 €',
		onAction: handleEdit
	}
]

;<div>
	<ConfirmPage
		advisorEmail={advisorEmail}
		avatarProps={avatarProps}
		goodUsage="primary_residence"
		loanValues={loanValues}
		onConfirm={handleConfirm}
		projectKind="purchase"
		projectValues={projectValues}
	/>
</div>
```
