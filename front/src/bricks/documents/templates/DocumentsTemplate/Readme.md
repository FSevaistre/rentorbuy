### Import

```js static
import { DocumentsTemplate } from 'pretto-ui'
```

### Usage

```html
<DocumentsTemplate {...{ progressProps }}>content</DocumentsTemplate>
```

### Examples

#### Basic:

```jsx
initialState = {
  isOpen: false
}
handleClick = () => {
  setState({ isOpen: false })
  console.log('click')
}
;<DocumentsTemplate progressProps={{ value: 0.3 }}>
  content of template goes here
  <Button onClick={() => setState({ isOpen: true })}>Open validation</Button>
</DocumentsTemplate>
```
