### Import
```js static
import { Card } from 'pretto-ui'
```

### Usage
```html
<Card>
  <p>I am just a simple Card.</p>
</Card>
```

### Examples
#### Basic:
```jsx
<Card>
  <Content>
    <p>I am just a simple Card.</p>
  </Content>
</Card>
```

#### Different depths:
```jsx
const depths = [0, 1, 2];
<ul className="display-list">
 {depths.map((depth) => {
   return (<li key={depth}>
     <Card zDepth={depth}><Content>zDepth: {depth}</Content></Card>
   </li>)
   })}
</ul>
```

#### With arrow:
```jsx
<Card arrow="top" arrowPosition={{left: 24}}>
  <Content>
    <p>Arrow: top, arrowPosition: {'{left: 24}'}</p>
  </Content>
</Card>
```

#### Variants:
```jsx
const light = [
  'primary-1-l',
  'primary-1-20',
  'primary-1-30',
  'primary-1-40',
  'primary-2-l',
  'neutral-1-l',
  'neutral-1-20',
  'neutral-1-30',
  'neutral-1-40',
  'accent-1-l',
  'accent-2-l',
  'accent-3-l',
  'accent-4-l',
  'accent-4-20',
  'accent-4-30',
  'accent-4-40',
  'accent-5-l',
  'success-l',
  'warning-l',
  'error-l',
  'white'
]

const dark = [
  'primary-1',
  'primary-1-d',
  'primary-1-60',
  'primary-1-80',
  'primary-2',
  'primary-2-d',
  'neutral-1',
  'neutral-1-d',
  'neutral-1-60',
  'neutral-1-80',
  'accent-1',
  'accent-1-d',
  'accent-2',
  'accent-2-d',
  'accent-3',
  'accent-3-d',
  'accent-4',
  'accent-4-d',
  'accent-4-60',
  'accent-4-80',
  'accent-5',
  'accent-5-d',
  'success',
  'success-d',
  'warning',
  'warning-d',
  'error',
  'error-d',
  'facebook',
  'linkedin',
  'twitter',
  'whatsapp'
]
;<ul className="display-list">
 {[...light, ...dark].map((variant) => {
   return (<li key={variant}>
     <Card variant={variant} zDepth={1}><Content size="small">{variant}</Content></Card>
   </li>)
   })}
</ul>
```

#### Format: line
```jsx
const variants = ['neutral-1', 'neutral-1-l', 'primary-1', 'accent-1', 'accent-2', 'accent-3', 'accent-4', 'accent-5', 'success', 'error', 'warning'];
<ul className="display-list">
 {variants.map((variant) => {
   return (<li key={variant}>
     <Card format="line" variant={variant}><Content>{variant}</Content></Card>
   </li>)
   })}
</ul>
```

#### Format: small
```jsx
const variants = ['neutral-1', 'neutral-1-l', 'primary-1', 'accent-1', 'accent-2', 'accent-3', 'accent-4', 'accent-5', 'success', 'error', 'warning'];
<div className="display-list">
 {variants.map((variant) => {
   return <Card key={variant} format={["small", "line"]} variant={variant}><Content size="x-small">{variant}</Content></Card>
   })}
</div>
```

#### noRadius: 'top-left'
```jsx
<Card noRadius="top-left"><Content>Card</Content></Card>
```

#### noRadius: multiple
```jsx
const wrapperStyle = {
  display: 'flex'
};
<div style={wrapperStyle}>
  <Card noRadius={['top-right', 'bottom-right']} zDepth={1}>
    <Content>Card</Content>
  </Card>
  <Card noRadius={['top-left', 'bottom-left']} variant="primary-1" zDepth={1}>
    <Content>Card</Content>
  </Card>
</div>
```

#### Multiple formats: line & large-border
```jsx
  <Card format={['line', 'large-border']} zDepth={1} variant="accent-4"><Content>Card</Content></Card>
```
