### Import

```js static
import { SelectField } from 'pretto-ui'
```

### Usage

```html
<SelectField options={Array} />
```

### Examples

#### Basic:

```jsx
initialState = {
  value: '',
  selected: 'none... yet'
}
const pets = [
  { value: 'pet_1', label: 'Pig' },
  { value: 'pet_2', label: 'Cat' },
  { value: 'pet_3', label: 'Dog' },
  { value: 'pet_4', label: 'Shark' }
]
handleChange = option => {
  setState({ value: option.value, selected: option.label })
}
;<div>
  <SelectField autofocus onChange={handleChange} value={state.value} options={pets} placeholder="Select pet" />
  <div style={{ font: '12px sans-serif', marginTop: 5 }}>Chose your pet: {state.selected}</div>
</div>
```

#### Format: form

```jsx
initialState = {
  value: 'Select city',
  selected: 'Nowhere! Where do you live friend?'
}
const cities = [
  { value: 'city_1', label: 'Paris La meilleure ville du monde' },
  { value: 'city_2', label: 'London' },
  { value: 'city_3', label: 'NYC' },
  { value: 'city_4', label: 'Area 51' }
]
handleChange = option => {
  setState({ value: option.value, selected: option.label })
}
;<div>
  <SelectField format="form" onChange={handleChange} value={state.value} options={cities} placeholder={state.value} />
  <div style={{ font: '12px sans-serif', marginTop: 5 }}>
    You live in: {state.selected}
    {state.value === 'city_4' && <div> are you... an... Alien? OMG OMG so cool!</div>}
  </div>
</div>
```

#### Format: filter

```jsx
initialState = {
  value: 'Select city',
  selected: 'Nowhere! Where do you live friend?'
}
const cities = [
  { value: 'city_1', label: 'Paris La meilleure ville du monde' },
  { value: 'city_2', label: 'London' },
  { value: 'city_3', label: 'NYC' },
  { value: 'city_4', label: 'Area 51' }
]
handleChange = option => {
  setState({ value: option.value, selected: option.label })
}
;<div>
  <SelectField format="filter" onChange={handleChange} value={state.value} options={cities} placeholder={state.value} />
  <div style={{ font: '12px sans-serif', marginTop: 5 }}>
    You live in: {state.selected}
    {state.value === 'city_4' && <div> are you... an... Alien? OMG OMG so cool!</div>}
  </div>
</div>
```
