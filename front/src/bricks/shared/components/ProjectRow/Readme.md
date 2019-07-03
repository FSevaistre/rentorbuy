### Import

```js static
import { ProjectRow } from 'pretto-ui'
```

### Usage

```html
<ProjectRow title="Capital restant dû" value="200 000 €" />
```

### Examples

#### Basic:

```jsx
handleEdit = title => () => {
	alert(`"${title}" edited !`)
}
;<div>
	{[
		['Durée', '23 ans', false],
		['Prix du bien', '200 000 €', true],
		['Prix des travaux', '10 000 €', true, '+'],
		[
			'Frais de notaire',
			'18 926 €',
			false,
			'+',
			'Nous calculons automatiquement les frais de notaire pour votre achat.'
		],
		[
			'Frais de garantie',
			'1 491 €',
			false,
			'+',
			"Cette garantie est obligatoire et est exigée par l'organisme prêteur."
		],
		[
			'Apport',
			'15 000 €',
			true,
			'-',
			'L’apport représente la somme que vous pouvez apporter pour cet achat. Nous recommandons 10% du prix du bien.'
		],
		[
			'Montant emprunté',
			'215 417 €',
			false,
			'=',
			'C’est le montant que vous devez emprunter à la banque pour financer votre projet.'
		]
	].map((row, index, rows) => (
		<div style={index < rows.length - 1 ? { marginBottom: '18px' } : {}} key={row.title}>
			<ProjectRow
				onAction={row[2] && handleEdit(row[0])}
				leftSpaced
				rightSpaced
				description={row[4]}
				title={row[0]}
				sign={row[3]}
				value={row[1]}
			/>
		</div>
	))}
</div>
```
