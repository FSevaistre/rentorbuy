### Import

```js static
import { OnboardingCall } from 'pretto-ui'
```

### Usage

```html
<OnboardingCall />
```

### Examples

#### Basic:

```jsx
const props = {
  isAvailable: true,
  onCallNow: () => console.log('call now'),
  onMakeAppointment: () => console.log('make appointment'),
  onDelayAppointment: () => console.log('delay appointment')
}
;<OnboardingCall {...props} />
```
