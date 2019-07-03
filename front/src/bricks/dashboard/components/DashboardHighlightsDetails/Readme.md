### Import

```js static
import { DashboardHighlightsDetails } from 'pretto-ui'
```

### Usage

```html
<DashboardHighlightsDetails loading />
```

### Examples

#### Basic:

```jsx
const props = {
	cards: [
		{ title: 'Prix du bien', value: '200 000 €' },
		{ title: 'Apport', value: '16 000 €' },
		{ title: 'Montant emprunté', value: '36 941 €' }
	]
}
;<DashboardHighlightsDetails {...props} />
```

#### Budget:

```jsx
const props = {
	cards: [
		{ title: 'Sur 10 ans', value: '200 000 €' },
		{ title: 'Sur 15 ans', value: '250 000 €' },
		{ title: 'Sur 20 ans', value: '300 000 €' }
	],
	titleVariant: 'accent-1'
}
;<DashboardHighlightsDetails {...props} />
```

#### Loading:

```jsx
const props = {
	loading: true,
	titleVariant: 'accent-1'
}
;<DashboardHighlightsDetails {...props} />
```
