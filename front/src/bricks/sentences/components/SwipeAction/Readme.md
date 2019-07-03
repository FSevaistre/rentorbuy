### Import
```js static
import { SwipeAction } from 'pretto-ui'
```

### Usage
```html
<SwipeAction></SwipeAction>
```

### Examples
#### Basic:
```jsx
onClickContent = () => {
  console.log('click content');
};
onClickAction = () => {
  console.log('click action');
};
const props = {
  onClickContent,
  onClickAction
};
<SwipeAction {...props}>
  <div>Content to be swiped</div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, quas. Voluptate ducimus repellat id magni, magnam cupiditate deserunt neque enim obcaecati pariatur sit facere repellendus assumenda laudantium fugiat. Magnam, ipsam.</p>
</SwipeAction>
```
