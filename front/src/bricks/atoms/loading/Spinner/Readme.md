### Import

```js static
import { Progress } from 'pretto-ui'
```

### Usage

```html
<Spinner />
```

### Examples

#### Basic:

```jsx
<Spinner />
```

#### Format: old

```jsx
<Spinner format="old" />
```

#### Overlay

```jsx
initialState = { shown: false }
activate = () => {
  setState({ shown: true })
  setTimeout(() => setState({ shown: false }), 3000)
}
;<div>
  <Button onClick={activate} label="Toggle" />
  {state.shown && (
    <Spinner overlay size="large">
      <SpinnerContent slug="simulation" />
    </Spinner>
  )}
</div>
```

#### Sizes

```jsx
const spinnerClass = {
  display: 'inline-block',
  verticalAlign: 'middle',
  margin: 5,
  textAlign: 'center',
  position: 'relative'
}
const sizeClass = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
;<div>
  <div style={spinnerClass}>
    <Spinner size="small" />
    <code style={sizeClass}>small</code>
  </div>
  <div style={spinnerClass}>
    <Spinner size="medium" />
    <code style={sizeClass}>medium</code>
  </div>
  <div style={spinnerClass}>
    <Spinner size="large" />
    <code style={sizeClass}>large</code>
  </div>
</div>
```
