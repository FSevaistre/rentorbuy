### Import

```js static
import { OfferAcceptedPage } from 'pretto-ui'
```

### Usage

```html
<OfferAcceptedPage />
```

### Examples

#### Basic:

```jsx
const address = {
  type: 'numberfield',
  title: 'Prix du bien',
  props: {
    placeholder: '200 000 €'
  }
}

const props = {
  components: [address],
  avatar: 'P'
}
;<OfferAcceptedPage {...props} />
```
