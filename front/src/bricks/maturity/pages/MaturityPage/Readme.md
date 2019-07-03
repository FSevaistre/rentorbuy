### Import

```js static
import { MaturityPage } from 'pretto-ui'
```

### Usage

```html
<MaturityPage />
```

### Examples

#### Basic:

```jsx
handleClick = option => {
  console.log('Option clicked', option)
}
const props = {
  options: [
    { option: 'search_started', onClick: handleClick },
    { option: 'property_found', onClick: handleClick },
    { option: 'offer_made', onClick: handleClick },
    { option: 'offer_accepted', onClick: handleClick },
    { option: 'sale_agreement_signed', onClick: handleClick }
  ]
}
;<MaturityPage {...props} />
```
