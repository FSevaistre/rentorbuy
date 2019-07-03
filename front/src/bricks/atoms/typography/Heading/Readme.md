### Import
```js static
import { Heading } from 'pretto-ui'
```

### Usage
```html
<Heading>Lorem ipsum dolor sit amet.</Heading>
```

### Examples
#### Basic:
```jsx
<Heading>Lorem ipsum dolor sit amet.</Heading>
```

#### Sizes
```jsx
const sizes = ['large', 'medium', 'small'];
sizes.map(size =>{
  return <Heading key={size} size={size}>Heading {size}</Heading>
})
```

#### Variant
```jsx
<Heading variant="accent-1">Lorem ipsum dolor sit amet.</Heading>
```
