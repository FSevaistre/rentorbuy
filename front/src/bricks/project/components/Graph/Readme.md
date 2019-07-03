### Import

```js static
import { Graph } from 'pretto-ui'
```

### Usage

```html
<Graph value={values} />
```

### Examples

#### Basic:

```jsx
const values = [
  [
    { title: 'Prix du bien', value: 200000, variant: 'primary-1' },
    { title: 'Travaux', value: 10000, variant: 'primary-1-l' },
    { expandedTitle: 'Frais : Notaire + Garantie', title: 'Frais', value: 1987, variant: 'accent-1' }
  ],
  [
    { title: 'Montant emprunté', value: 201987, variant: 'accent-4' },
    { title: 'Apport', value: 10000, variant: 'accent-4-d' }
  ]
]

initialState = { selectedValue: null }
;<Graph
  {...state}
  onSelectValue={selectedValue => setState({ selectedValue })}
  onUnselectValue={() => setState({ selectedValue: null })}
  values={values}
/>
```
