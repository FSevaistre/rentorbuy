### Import

```js static
import { SponsorshipSocialLinks } from 'pretto-ui'
```

### Usage

```html
<SponsorshipSocialLinks />
```

### Examples

#### Basic:

```jsx
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
const props = {
  links: [facebook, twitter, whatsapp]
}
;<SponsorshipSocialLinks {...props} />
```
