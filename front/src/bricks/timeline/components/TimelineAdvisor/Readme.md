### Import
```js static
import { TimelineAdvisor } from 'pretto-ui'
```

### Usage
```html
<TimelineAdvisor />

```
### Examples
#### Basic:
```jsx
initialState = {
  isOpen: false
};
onToggle = () => setState(prevState => ({ isOpen: !prevState.isOpen }))
const props = {
  name: 'William Ricetti',
  email: 'william@pretto.fr',
  isOpen: state.isOpen,
  onOpen: onToggle,
  onClose: onToggle,
  onChat: onToggle,
  onCall: onToggle,
  avatar: <Avatar src="W"></Avatar>,
  card: <Card><Content>some content</Content></Card>,
  link: <Icon name="calendar" variant="neutral-1-40"/>
};
<TimelineAdvisor {...props} />
```
