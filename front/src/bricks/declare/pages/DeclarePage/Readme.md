### Import

```js static
import { DeclarePage } from 'pretto-ui'
```

### Usage

```html
<DeclarePage />
```

### Examples

#### Basic:

```jsx
initialState = {
	firstName: '',
	lastName: '',
	email: '',
	phone: ''
}
const handleValidate = () => {
	console.log(state)
}
const handleChange = key => value => {
	setState({ [key]: value })
}
const fields = [
	{
		label: 'Prénom',
		component: <TextField value={state.firstName} placeholder="Bruce" onChange={handleChange('firstName')} />
	}
]
const props = {
	avatarProps: { src: 'http://res.cloudinary.com/pretto-fr/w_112,h_112,q_auto/portrait-julien_iudnmm.png' },
	messages: [
		'L’attestation Pretto vous permettra de prouver aux vendeurs et aux agents immobiliers que votre projet est solide et que vous avez anticipé son financement.',
		'Pour commencer j’ai besoin de savoir avec qui vous empruntez. Ces informations nous permettent de vérifier son identité.'
	],
	onValidate: handleValidate,
	onChangeField: handleChange,
	fields
}
;<DeclarePage {...props} />
```
