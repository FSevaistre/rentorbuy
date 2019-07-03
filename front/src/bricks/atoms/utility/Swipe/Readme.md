### Import
```js static
import { Swipe } from 'pretto-ui'
```

### Usage
```html
<Swipe>{children}</Swipe>
```

### Examples
#### Basic:
```jsx
<div style={{ overflow: 'hidden' }}>
  <Swipe enableMouseEvents>
    <Card variant="accent-1" zDepth={2}><Content>item 1</Content></Card>
    <Card variant="accent-2"><Content>item 2</Content></Card>
    <Card variant="accent-3"><Content>item 3</Content></Card>
  </Swipe>
</div>
```

#### Only one card:
```jsx
<div style={{ overflow: 'hidden' }}>
  <Swipe enableMouseEvents>
    <Card variant="accent-1">item 1</Card>
    { false && <Card variant="accent-2">item 2</Card> }
  </Swipe>
</div>
```

#### Format: full
```jsx
<div style={{ overflow: 'hidden' }}>
  <Swipe enableMouseEvents format="full" dotsProps={{ position: 'right' }}>
    <Card variant="accent-1"><Content>item 1</Content></Card>
    <Card variant="accent-2"><Content>item 2</Content></Card>
    <Card variant="accent-3"><Content>item 3</Content></Card>
  </Swipe>
</div>
```
