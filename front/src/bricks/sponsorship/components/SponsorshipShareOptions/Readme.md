### Import

```js static
import { SponsorshipShareOptions } from 'pretto-ui'
```

### Usage

```html
<SponsorshipShareOptions />
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
  links: [facebook, twitter, whatsapp],
  onClick: () => console.log('click'),
  link: 'https://pretto.link/?utm_source=parrainage&utm_content=app'
}
;<SponsorshipShareOptions {...props} />
```
