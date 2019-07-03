### Import
```js static
import { Badge } from 'pretto-ui'
```

### Usage
```html
<Badge />
```

### Examples
#### Format: line
```jsx
<Badge format="line" />
```

#### Variants:
```jsx
const badges = [
  { variant: 'success', icon: 'check' },
  { variant: 'warning', icon: 'mail' },
  { variant: 'error', icon: 'chat' }
];
<div>
  {
    badges.map((badge) => {
      return (
        <div key={badge.icon} style={{ display: 'inline-block', margin: 8 }}>
          <Badge variant={badge.variant} icon={badge.icon} />
        </div>
      )
    })
  }
</div>
```

#### Size: large
```jsx
<Badge size="large" icon="help" variant="neutral-1" isGlowing />
```
