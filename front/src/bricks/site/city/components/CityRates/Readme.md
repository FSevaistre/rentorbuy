### Import

```js static
import { CityRates } from 'bricks'
```

### Usage

```html
<CityRates {...props} />
```

### Example

```jsx
const props = {
  regionName: 'Île-de-France',
  advisor: {
    name: 'Matthieu',
    picture: '/advisors/matthieu-sevigne'
  },
  onNav: () => console.log('nav'),
  rates: [
    {
      slug: 'credit_foncier',
      group_name: 'Crédit Foncier',
      good_rate: 1.3, 
      bad_rate: 1.4
    },
    {
      slug: 'credit_foncier',
      group_name: 'Crédit Foncier',
      good_rate: 1.3, 
      bad_rate: 1.4
    },
    {
      slug: 'credit_foncier',
      group_name: 'Crédit Foncier',
      good_rate: 1.3, 
      bad_rate: 1.4
    },
    {
      slug: 'credit_foncier',
      group_name: 'Crédit Foncier',
      good_rate: 1.3, 
      bad_rate: 1.4
    },
    {
      slug: 'credit_foncier',
      group_name: 'Crédit Foncier',
      good_rate: 1.3, 
      bad_rate: 1.4
    }
  ]
}
;<CityRates {...props} />
```
