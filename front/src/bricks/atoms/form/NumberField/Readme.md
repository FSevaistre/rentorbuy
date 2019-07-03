### Import

```js static
import { NumberField } from 'pretto-ui'
```

### Usage

```html
<NumberField />
```

### Examples

#### Basic:

```jsx
initialState = { value: 300000 }
handleChange = value => {
  setState({ value })
}
;<NumberField defaultValue={2} value={state.value} onChange={handleChange} placeholder="15 000" />
```

#### Decimal:

```jsx
initialState = { value: 1.4 }
handleChange = value => {
  setState({ value })
}
;<NumberField type="decimal" value={state.value} onChange={handleChange} placeholder="2.5032320" />
```

#### Format: textfield

```jsx
<NumberField format="textfield" value={150000} placeholder="13" updateWidth={false} />
```

#### Format: form

```jsx
<NumberField
  format="form"
  type="phone"
  value="0987654321"
  placeholder="Phone number"
  updateWidth={false}
  options={{ phone: true, phoneRegionCode: 'FR' }}
/>
```

#### Variant: accent-1

```jsx
<NumberField format="form" value="10 000" placeholder="How much?" icon="pen" variant="accent-1" />
```

#### autoFocus:

```jsx
initialState = {
  value: 1909090,
  changeable: false
}
handleChange = value => {
  setState({ value })
}
handleClick = () => {
  setState({ changeable: !state.changeable })
}
buttonLabel = state.changeable ? 'validate' : 'change'
;<div>
  {state.changeable ? (
    <NumberField value={state.value} onChange={handleChange} placeholder="2.5032320" autoFocus />
  ) : (
    <span>{state.value}</span>
  )}
  <div>
    <br />
    <Button label={buttonLabel} onClick={handleClick} />
  </div>
</div>
```
