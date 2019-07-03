### Import

```js static
import { Hat } from 'bricks'
```

### Usage

```jsx static
<Hat emoji=":eyes:" title="Vu cette semaine" variant="primary-1" />
```

### Examples

```jsx
const cards = [
  {
    title: 'Card 1',
    emoji: ':)',
    pushedContent: 'Happy',
    data: []
  },
  {
    title: 'Card 2',
    emoji: ':moneybag:',
    pushedContent: 'Money',
    data: []
  },
  {
    title: 'Card 3',
    data: [],
    format: 'simple'
  }
]
;<div>
  <Hat emoji=":v:" title="Nos lecteurs ont aimé" variant="accent-4" />

  <div style={{ position: 'relative', top: '-24px' }}>
    <ActionCards data={cards} hasOptions />
  </div>
</div>
```
