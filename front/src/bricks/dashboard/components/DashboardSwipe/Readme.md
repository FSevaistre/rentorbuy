### Import

```js static
import { DashboardSwipe } from 'pretto-ui'
```

### Usage

```html
<DashboardSwipe />
```

### Examples

#### Basic:

```jsx
const props = {
  articles: [
    { slug: 'etapes-achat-immobilier' },
    { slug: 'banques-ou-courtiers' },
    { slug: 'meilleurs-courtiers-gratuits' }
  ]
}
;<Content variant="neutral-1-l">
  <DashboardSwipe {...props} />
</Content>
```
