### Import

```js static
import { SponsorshipShareDialog } from 'pretto-ui'
```

### Usage

```html
<SponsorshipShareDialog />
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
  onClick: () => console.log('click'),
  link: 'https://pretto.link/?utm_source=parrainage&utm_content=app',
  links: [facebook, twitter, whatsapp]
}
;<SponsorshipShareDialog {...props} />
```
