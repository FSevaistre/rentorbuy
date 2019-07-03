### Import

```js static
import { SimulationDetails } from 'pretto-ui'
```

### Usage

```html
<SimulationDetails />
```

### Examples

#### Basic:

```jsx
initialState = {
  value: 3,
  isChanging: false
}
handleChange = value => {
  setState({ value })
}
const slider_1 = {
  title: 'Durée',
  type: 'duration',
  sliderProps: {
    value: state.value,
    min: 10,
    max: 30,
    onChange: handleChange,
    variant: 'accent-1'
  }
}
const slider_2 = {
  title: 'Mensualité',
  sliderProps: {
    value: state.value,
    min: 0,
    max: 40,
    onChange: handleChange,
    variant: 'accent-5'
  }
}
const simulationSlidersProps = {
  sliders: [slider_1, slider_2]
}
onClick = () => {
  setState({ isChanging: true })
}
onChange = () => {
  console.log('isChanging')
}
onValidate = () => {
  setState({ isChanging: false })
}
const field_1 = {
  label: 'Prix du bien',
  numberFieldProps: {
    value: 300000,
    onChange: () => console.log('changed EditableField')
  }
}
const field_2 = {
  label: 'Apport',
  numberFieldProps: {
    value: 30000,
    onChange: () => console.log('changed EditableField')
  }
}
const editableFieldsProps = {
  fields: [field_1, field_2]
}
const props = {
  simulationSlidersProps,
  editableFieldsProps,
  onClose: () => console.log('close'),
  onClickUser: () => console.log('click user'),
  onValidate: () => console.log('validate')
}
;<SimulationDetails {...props} />
```
