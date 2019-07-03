### Import

```js static
import { Placeholder } from 'pretto-ui'
```

### Usage

```html
<Placeholder />
```

### Examples

#### Basic:

```jsx
initialState = {
  loading: true
}
setTimeout(() => setState({ loading: false }), 3000)
handleClick = () => setState({ loading: true })
;<div>
  {state.loading ? (
    <>
      <div style={{ width: 200, height: 24, marginBottom: 8 }}>
        <Placeholder variant="neutral-1" />
      </div>
      <div style={{ width: 150, marginBottom: 8 }}>
        <Placeholder />
      </div>
      <div style={{ width: 150, marginBottom: 8 }}>
        <Placeholder />
      </div>
      <div style={{ width: 100, height: 48, marginTop: 8 }}>
        <Placeholder variant="primary-1" />
      </div>
    </>
  ) : (
    <>
      <Heading>Placeholder is nice</Heading>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <Button onClick={handleClick}>Reload</Button>
    </>
  )}
  <Placeholder variant="neutral-1" />
</div>
```
