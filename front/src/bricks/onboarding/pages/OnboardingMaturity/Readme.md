### Import

```js static
import { OnboardingMaturity } from 'pretto-ui'
```

### Usage

```html
<OnboardingMaturity />
```

### Examples

#### Basic:

```jsx
const props = {
  messages:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, alias fugiat cumque sed quidem nam quae rem deleniti, aliquid saepe error harum molestias voluptatem ipsa ipsam qui. Officiis quibusdam, ducimus.',
  options: [
    { option: 'search_started', onClick: () => console.log('search_started') },
    { option: 'property_found', onClick: () => console.log('property_found') },
    { option: 'offer_made', onClick: () => console.log('offer_made') },
    { option: 'offer_accepted', onClick: () => console.log('offer_accepted') },
    { option: 'sale_agreement_signed', onClick: () => console.log('sale_agreement_signed') }
  ]
}
;<OnboardingMaturity {...props} />
```
