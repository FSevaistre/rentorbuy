### Import

```js static
import { Steps } from 'pretto-ui'
```

### Usage

```html
<Steps />
```

### Examples

#### Basic:

```jsx
const steps = [
  '1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!',
  '2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!',
  '3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!',
  '4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!'
]
initialState = {
  current: 1
}
;<div>
  <Steps current={state.current} variant="accent-1" backgroundVariant="neutral-1-l">
    {steps}
  </Steps>
  <div style={{ display: 'flex', justifyContent: 'space-between', width: 120 }}>
    <Button icon="arrow-left" format="circle" size="small" onClick={() => setState({ current: state.current - 1 })} />
    <Button icon="arrow-right" format="circle" size="small" onClick={() => setState({ current: state.current + 1 })} />
  </div>
</div>
```

#### Format: horizontal

```jsx
const steps = [
  '1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!',
  '2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!',
  '3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!',
  '4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!',
  '5 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!',
  '6 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!',
  '7 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!',
  '8 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!',
  '9 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!',
  '10 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!',
  '11 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!',
  '12 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque excepturi, culpa ipsum. Iusto illo quisquam explicabo quis alias expedita, id corporis quo vero, amet at harum dolores voluptates eos!'
]
initialState = {
  current: 4,
  showDetails: false
}
;<div>
  <Steps direction="horizontal" current={state.current} backgroundVariant="neutral-1-l" showDetails={state.showDetails}>
    {steps}
  </Steps>
  <div style={{ display: 'flex', justifyContent: 'space-between', width: 120 }}>
    <Button icon="arrow-left" format="circle" size="small" onClick={() => setState({ current: state.current - 1 })} />
    <Button icon="arrow-right" format="circle" size="small" onClick={() => setState({ current: state.current + 1 })} />
    <Button icon="info" format="circle" size="small" onClick={() => setState({ showDetails: !state.showDetails })} />
  </div>
</div>
```
