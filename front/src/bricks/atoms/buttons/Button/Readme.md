### Import

```js static
import { Button } from 'pretto-ui'
```

### Usage

```html
<button label="OK" />
```

### Examples

#### Basic

```jsx
<Button label="Simple Button" />
```

#### Button link

```jsx
<Button label="Simple Button" href="/my-page" />
```

#### Icon label

```jsx
<div style={{ display: 'flex' }}>
  <Button variant="accent-2" icon="cross" />
  <span style={{ margin: 4 }} />
  <Button variant="accent-1" label="Right" icon="arrow-right" iconPosition="right" />
  <span style={{ margin: 4 }} />
  <Button variant="accent-3" label="Left" icon="check" size="large" />
</div>
```

#### Sizes

```jsx
<div style={{ display: 'flex', alignItems: 'center' }}>
  <Button label="Small" size="small" />
  <span style={{ margin: 4 }} />
  <Button label="Medium" size="medium" />
  <span style={{ margin: 4 }} />
  <Button label="Large" size="large" />
</div>
```

#### Format: line

```jsx
<Button label="Lined Button" format="line" />
```

#### Format: full

```jsx
<Button label="Full Button" format="full" />
```

#### Format: circle

```jsx
<Button icon="cross" format="circle" />
```

#### Format: squared

```jsx
<Button label="Squared Button" format="squared" />
```

#### Format: flat + iconProps

```jsx
<Button textVariant="accent-1" format="flat" iconProps={{ name: 'file', variant: 'accent-2' }}>
  Icon props
</Button>
```

#### Format: loading

```jsx
<Button textVariant="accent-1" format="flat" iconProps={{ name: 'file', variant: 'accent-2', loading: true }}>
  Icon props
</Button>
```

#### Combined formats: squared and line

```jsx
const format = ['squared', 'line']
;<Button label="Combined Button" format={format} variant="accent-1" />
```

#### Variants

```jsx
const wrapperStyle = {
  marginBottom: 8
}
const buttonStyle = {
  width: 220,
  display: 'inline-block'
}
const buttons = [
  'primary-1',
  'neutral-1',
  'neutral-1-l',
  'accent-1',
  'accent-2',
  'accent-3',
  'accent-4',
  'accent-5',
  'white'
]
;<div>
  {buttons.map(name => {
    return (
      <div key={name} style={wrapperStyle}>
        <span style={buttonStyle}>
          <Button label={name} variant={name} />
        </span>
        <span style={buttonStyle}>
          <Button label={name} variant={name} format="line" />
        </span>
      </div>
    )
  })}
</div>
```

#### textVariant

```jsx
<Button label="custom text variant" variant="neutral-1" textVariant="accent-1" />
```

#### Disabled

```jsx
<Button
  disabled
  label="disabled button"
  onClick={() => {
    alert('cannot click')
  }}
/>
<Button
  disabled
  format="line"
  label="disabled button"
  onClick={() => {
    alert('cannot click')
  }}
/>
```
