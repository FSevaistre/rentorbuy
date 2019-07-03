### Import

```js static
import { OnboardingCalendar } from 'pretto-ui'
```

### Usage

```html
<OnboardingCalendar />
```

### Examples

#### Basic:

```jsx
const hourOptions = [
  { label: '10h et 12h', value: '10-12', content: 'entre 10h et 12h' },
  { label: '12h et 14h', value: '12-14', content: 'entre 12h et 14h' },
  { label: '14h et 16h', value: '14-16', content: 'entre 14h et 16h' },
  { label: '16h et 18h', value: '16-18', content: 'entre 16h et 18h' },
  { label: '18h et 20h', value: '18-20', content: 'entre 18h et 20h' }
]

initialState = {
  isOpen: false,
  selected: '',
  textValue: ''
}

const props = {
  onOpen: () => setState({ isOpen: true }),
  isOpen: state.isOpen,
  onClose: () => setState({ isOpen: false }),
  onValidate: () => console.log('validate'),
  options: hourOptions,
  onSelect: ({ value }) => setState({ selected: value }),
  selected: state.selected,
  textValue: state.textValue,
  onChangeText: textValue => setState({ textValue })
}
;<OnboardingCalendar {...props} />
```
