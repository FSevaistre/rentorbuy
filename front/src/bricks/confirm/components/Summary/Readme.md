### Import

```js static
import { Summary } from 'pretto-ui'
```

### Usage

```html
<summary title="Votre projet" values="{values}" />
```

### Examples

#### Basic:

```jsx
handleEdit = () => {
	alert(`Edited !`)
}

const values = [
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
;<div>
	<Summary title="Votre projet" values={values} />
</div>
```
