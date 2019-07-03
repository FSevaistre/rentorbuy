### Import

```js static
import { Timeline } from 'pretto-ui'
```

### Usage

```html
<Timeline steps={Array} />
```

### Examples

#### Basic

```jsx
const STEPS = [
  { format: 'title', children: 'Title 1' },
  { children: 'Step 1' },
  { format: 'title', children: 'Title 2', variant: 'accent-3' },
  { children: 'Step 2.1', variant: 'accent-4' },
  { children: 'Step 2.2' }
]
;<Timeline variant="accent-1" current={3} steps={STEPS} active={3} />
```
