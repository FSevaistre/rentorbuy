### Import
```js static
import { Emoji } from 'pretto-ui'
```

### Usage
```html
<Emoji>:+1:</Emoji>
```

### Examples
#### Basic
```jsx
const hilight = { background: 'lightgreen' };
<div>
  <p><Emoji>:nerd:</Emoji> <code style={hilight}>:nerd:</code></p>
  <p><Emoji>:)</Emoji> <code style={hilight}>:)</code> or <code style={hilight}>:slight_smile:</code></p>
  <p><Emoji>{'<3'}</Emoji> <code style={hilight}>{'<3'}</code> or <code style={hilight}>:heart:</code></p>
</div>
```

#### Different sizes
```jsx
<div>
  <Emoji size="x-small">:baby:</Emoji>
  <Emoji size="small">:flushed:</Emoji>
  <Emoji size="medium">:fearful:</Emoji>
  <Emoji size="large">:scream:</Emoji>
  <Emoji size="x-large">:fire:</Emoji>
</div>
```
