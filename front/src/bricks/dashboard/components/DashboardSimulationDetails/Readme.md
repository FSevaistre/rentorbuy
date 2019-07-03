### Import

```js static
import { DashboardSimulationDetails } from 'pretto-ui'
```

### Usage

```html
<DashboardSimulationDetails />
```

### Examples

#### Basic:

```jsx
const props = {
  cards: [
    [{ type: 'price', value: 434799 }, { type: 'notaryFees', value: 9550 }, { type: 'contribution', value: 40000 }],
    [{ type: 'price', value: 434799 }, { type: 'notaryFees', value: 9550 }, { type: 'contribution', value: 40000 }]
  ]
}
;<DashboardSimulationDetails {...props} />
```
