### Import
```js static
import { Tag } from 'pretto-ui'
```

### Usage
```html
<Tag>TagName</Tag>
```

### Examples
#### Basic:
```jsx
<p>This is a <Tag variant="primary-1">PrettoTag</Tag>.</p>
```

#### Sizes:
```jsx
const sizes = ['x-small', 'small', 'medium', 'large'];
<ul style={{display: 'flex', flexDirection: 'column', height: 120, justifyContent: 'space-between'}}>
{sizes.map(size=>{
  return (<li key={size}>
    <Tag size={size}>{size}</Tag>
  </li>)
  })}
</ul>
```

#### Variants:
```jsx
const variants = [
  'primary-1',
  'neutral-1',
  'neutral-1-l', 'neutral-1-20', 'neutral-1-40', 'neutral-1-60', 'neutral-1-80',
  'white',
  'accent-1', 'accent-2', 'accent-3', 'accent-4', 'accent-5',
  'success', 'warning', 'error'
];
<ul style={{display: 'flex', flexWrap: 'wrap'}}>
  {variants.map(variant => {
    return (
      <li key={variant} style={{margin: 8}}>
        <Tag variant={variant}>{variant}</Tag>
      </li>
    )
  })}
</ul>
```
