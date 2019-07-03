### Import
```js static
import { Logo } from 'pretto-ui'
```

### Usage
```html
<Logo src="some/path/to/some/img.jpg" />
```

### Examples
#### Basic:
```jsx
  <Logo />
```

#### Sizes:
```jsx
const sizes = ['small', 'medium', 'large'];
<ul style={{listStyleType: "none", display: "flex", flexWrap: "wrap", justifyContent: "flex-start", textAlign: "center", alignItems: "center"}}>
  {
    sizes.map((size) => {
      return (
        <li key={size} style={{margin: 16}}>
          <Logo size={size} />
        </li>
      )})
  }
</ul>
```

#### Variants:
```jsx
const variants = ['green', 'white', 'dark'];
<Card>
  <ul style={{listStyleType: "none", display: "flex", flexWrap: "wrap", justifyContent: "flex-start", textAlign: "center"}}>
    {
      variants.map((variant) => {
        return (
          <li key={variant} style={{margin: 16}}>
            <Logo variant={variant} />
          </li>
        )})
    }
  </ul>
</Card>
```
