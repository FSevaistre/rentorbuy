### Import

```js static
import { SponsorshipConditionsPage } from 'pretto-ui'
```

### Usage

```html
<SponsorshipConditionsPage />
```

### Examples

#### Basic:

```jsx
const card1 = {
  name: 'Han Solo',
  date: '25 juin 2018',
  status: 'joining'
}
const card2 = {
  name: 'Susan Boyle',
  date: '25 juin 2018',
  status: 'searching'
}
const card3 = {
  name: 'Ron Swanson',
  date: '25 juin 2018',
  status: 'ongoing'
}
const card4 = {
  name: 'Flash Gordon',
  date: '25 juin 2018',
  status: 'lost'
}
const card5 = {
  name: 'Bruce Wayne',
  date: '25 juin 2018',
  status: 'won'
}

initialState = {
  value: 'leo',
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
}
const handleSelect = ({ value }) => setState({ value })
const facebook = {
  kind: 'facebook',
  onClick: () => console.log('click facebook logo')
}
const twitter = {
  kind: 'twitter',
  onClick: () => console.log('click twitter logo')
}
const whatsapp = {
  kind: 'whatsapp',
  onClick: () => console.log('click whatsapp logo')
}
handleChange = (value, slug) => {
  setState({ [slug]: value })
}
const props = {
  progress: 2,
  amount: 200,
  data: [card1, card2, card3, card4, card5],
  selectFieldProps: {
    onChange: handleSelect,
    options: [{ label: 'Léo Pierrot', value: 'leo' }, { label: 'Un autre conseiller', value: 'other' }],
    value: state.value
  },
  sponsorshipShareDialogProps: {
    onClick: () => console.log('click'),
    link: 'https://pretto.link/?utm_source=parrainage&utm_content=app',
    links: [facebook, twitter, whatsapp]
  },
  sponsorshipInviteDialogProps: {
    ...state,
    onChange: handleChange,
    onSubmit: () => console.log(state)
  }
}
;<SponsorshipConditionsPage {...props} />
```
