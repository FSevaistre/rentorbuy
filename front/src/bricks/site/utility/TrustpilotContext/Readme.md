### Import

```js static
import { HomePage } from 'bricks'
```

### Usage

```jsx static
<HomePage  />
```

### Example

```jsx
const trustpilot = {
  logo: '',
  reviewCount: '',
  ratingValue: '',
  sameAs: '',
  url: ''
}
;
<TrustpilotContext.Provider value={trustpilot}>
  <HomeTestimonies count={'900'} rate={'9,9'} />
</TrustpilotContext.Provider>
```