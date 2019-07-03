### Import

```js static
import { OnboardingTemplate } from 'pretto-ui'
```

### Usage

```html
<OnboardingTemplate />
```

### Examples

#### Basic:

```jsx
const messages = [
  <BubbleChat>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ut vel suscipit!</BubbleChat>,
  <BubbleChat hideAvatar>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus placeat, molestiae.
  </BubbleChat>
]
;<OnboardingTemplate messages={messages}>
  <Button iconPosition="right" icon="arrow-right">
    Continuer
  </Button>
</OnboardingTemplate>
```
