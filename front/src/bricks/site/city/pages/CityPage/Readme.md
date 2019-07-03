### Import

```js static
import { CityPage } from 'bricks'
```

### Usage

```html
<CityPage {...props} />
```

### Example

```jsx
const props = {
  city: {
    name: 'Paris',
    slug: 'paris'
  },
  region: {
    name: 'Île-de-France',
    slug: 'idf'
  },
  advisor: {
    name: 'Matthieu',
    picture: '/advisors/matthieu-sevigne'
  },
  nearbyCities: [
    {
      city_slug: 'city-slug',
      region_slug: 'region-slug',
      city_name: 'Lyon'
    }
  ],
  map: (
    <Content variant="primary-2">
      <Icon name="info" variant="white" />
    </Content>
  ),
  onNav: () => console.log('nav'),
  rates: [
    {
      slug: 'credit_foncier',
      group_name: 'Crédit Foncier',
      good_rate: 1.3, 
      bad_rate: 1.4
    }
  ],
  banks: [
    {
      group: 'bnp_paribas',
      name: 'BNP Paribas',
      address: 'Paris',
      phone_link: '',
      phone: '09 87 65 43 21',
      website: '',
    }
  ],
  zipcode: '75002'
}
;<CityPage {...props} />
```
