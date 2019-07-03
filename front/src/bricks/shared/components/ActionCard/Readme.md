### Import

```js static
import { ActionCard } from 'pretto-ui'
```

### Usage

```html
<ActionCard> <div>content</div> </ActionCard>
```

### Examples

#### Basic:

```jsx
handleAction = () => {
  console.log('Button clicked')
}
const data = {
  onClickInformation: handleAction,
  title: 'Title',
  optionNumber: 1,
  childrenPosition: 'bottom',
  emoji: ':)',
  pushedContent: '200 000 €',
  data: [{ label: 'Mensualité', value: '3 000 €' }, { label: 'Durée', value: '22 ans' }],
  action: handleAction
}
;<ActionCard {...data}>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem debitis hic praesentium consequuntur quo veritatis!
    Accusamus libero doloribus, numquam veritatis odio voluptate explicabo, reiciendis optio, dolorem nemo saepe vitae
    est?
  </p>
</ActionCard>
```
