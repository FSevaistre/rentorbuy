### Import
```js static
import { SimulationSidebar } from 'pretto-ui'
```

### Usage
```html
<SimulationSidebar />
```

### Examples
#### Basic:
```jsx
initialState = {
  isChanging: false
};
onClick = () => {
  setState({ isChanging: true })
};
onChange = () => {
  console.log('isChanging')
};
onValidate = () => {
  setState({ isChanging: false })
};
const editable_row_1 = {
  onClick,
  label: 'Prix du bien',
  numberFieldProps: {
    onChange,
    value: 300000,
  }
};
const editable_row_2 = {
  onClick,
  label: 'Apport',
  numberFieldProps: {
    onChange,
    value: 13000,
  }
};
const editableRowsProps = {
  rows: [editable_row_1, editable_row_2],
  isChanging: state.isChanging,
  onValidate
};
initialState = {
  value: 3
};
handleChange = (value) => {
  setState({ value });
};
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
};
const slider_2 = {
  title: 'Mensualité',
  sliderProps: {
    value: state.value,
    min: 0,
    max: 40,
    onChange: handleChange,
    variant: 'accent-5'
  }
};
const simulatioSlidersProps = {
  sliders: [slider_1, slider_2]
};
const information_row_1 = {
  label: 'Montant emprunté',
  value: 175432,
  onClick: () => console.log('clicked InformationRow'),
};
const information_row_2 = {
  label: 'Financement',
  type: 'score',
  value: 80,
  onClick: () => console.log('clicked InformationRow'),
};
const informationRowsProps = {
  rows: [information_row_1, information_row_2],
};
const props = {
  onModify: () => console.log('onModify'),
  editableRowsProps,
  informationRowsProps,
  simulatioSlidersProps
};
<SimulationSidebar {...props} />
```
