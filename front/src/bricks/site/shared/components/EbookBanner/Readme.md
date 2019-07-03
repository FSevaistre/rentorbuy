### Import

```js static
import { EbookBanner } from 'bricks'
```

### Usage

```jsx static
<EbookBanner />
```

### Examples

### Simple

```jsx
<EbookBanner />
```

### Subscribe

```jsx
initialState = {
  subscribed: false,
  loading: false
}

const onSubscribe = () => {
  setState({ loading: true })
  setTimeout(() => setState({ subscribed: true, loading: false }), 1000)
}
;<EbookBanner onSubscribe={onSubscribe} loading={state.loading} subscribed={state.subscribed} />
```
