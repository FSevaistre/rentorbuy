### Import

```js static
import { DateField } from 'pretto-ui'
```

### Usage

```html
<DateField />
```

### Examples

#### Basic:

```jsx
initialState = { value: '10 / 02 / 1993' }
handleChange = value => {
  setState({ value })
}
;<div>
  <div>{state.value}</div>
  <div>
    <DateField value={state.value} onChange={handleChange} placeholder="JJ / MM / AAAA" />
  </div>
</div>
```
