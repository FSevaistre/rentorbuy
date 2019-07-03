### Import
```js static
import { ReduceAmbition } from 'pretto-ui'
```

### Usage
```html
<ReduceAmbition />

```
### Examples
#### Basic:
```jsx
handleAction = () => {
  console.log('Button clicked');
};
const card_1 = {
  title: 'Card 1',
  pushedContent: '80 000 €',
  data: [
    {label: 'Mensualité', value: '3 000 €'},
    {label: 'Durée', value: '22 ans'}
  ],
  action: handleAction,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
};
const card_2 = {
  title: 'Card 2',
  pushedContent: '200 000 €',
  data: [
    {label: 'Mensualité', value: '3 000 €'},
    {label: 'Durée', value: '22 ans'}
  ],
  action: handleAction,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, beatae distinctio at.'
};
const card_3 = {
  title: 'Card 3',
  pushedContent: '200 000 €',
  data: [
    {label: 'Mensualité', value: '3 000 €'},
    {label: 'Durée', value: '22 ans'},
    {label: 'Apport', value: '100 000 €'}
  ],
  action: handleAction,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, beatae distinctio at.',
  format: 'simple'
};
const data = [card_1, card_2, card_3];
<ReduceAmbition data={data} />
```
