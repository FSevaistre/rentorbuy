### Import

```js static
import { CityTable } from 'bricks'
```

### Usage

```html
<CityTable {...props} />
```

### Example

```jsx
const props = {
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
;<CityTable {...props} />
```
