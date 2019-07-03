### Import

```js static
import { SponsorshipSponsored } from 'pretto-ui'
```

### Usage

```html
<SponsorshipSponsored />
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
const props = {
  cards: [card1, card2, card3, card4, card5]
}
;<SponsorshipSponsored {...props} />
```
