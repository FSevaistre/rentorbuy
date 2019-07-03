### Import
```js static
import { BubbleChat } from 'pretto-ui'
```

### Usage
```html
<BubbleChat>
  <p>I am just a simple BubbleChat.</p>
</BubbleChat>
```

### Examples
#### Basic:
```jsx
<BubbleChat>
  <p>I am just a simple BubbleChat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nesciunt, excepturi. Nostrum tenetur quos doloribus officiis, numquam vero. Soluta accusantium assumenda quos vero sapiente accusamus corrupti earum provident placeat eum.</p>
</BubbleChat>
```

#### Position: right
```jsx
<BubbleChat position="right" avatarProps={{src: 'P'}}>
  <p>I am just a simple BubbleChat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nesciunt, excepturi. Nostrum tenetur quos doloribus officiis, numquam vero. Soluta accusantium assumenda quos vero sapiente accusamus corrupti earum provident placeat eum.</p>
</BubbleChat>
```

#### Format: splitted
```jsx
<BubbleChat format="splitted" avatar="P">
  <p>I am just a simple BubbleChat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nesciunt, excepturi. Nostrum tenetur quos doloribus officiis, numquam vero. Soluta accusantium assumenda quos vero sapiente accusamus corrupti earum provident placeat eum.</p>
</BubbleChat>
```

#### Variant: accent-1
```jsx
<BubbleChat variant="accent-1" avatar="P">
  <p>I am just a simple BubbleChat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nesciunt, excepturi. Nostrum tenetur quos doloribus officiis, numquam vero. Soluta accusantium assumenda quos vero sapiente accusamus corrupti earum provident placeat eum.</p>
</BubbleChat>
```

#### Multiple Bubbles
```jsx
const bubbleWrapper = {
  marginBottom: 16
};
<div style={{width: 400, background: 'lightyellow', padding: 32}}>
  <div style={bubbleWrapper}>
    <BubbleChat avatar="PR" variant="primary-1">
      <p>Hi There !</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </BubbleChat>
  </div>
  <div style={bubbleWrapper}>
    <BubbleChat position="right" avatar="E" variant="accent-1" hideAvatar>
      <p>Yo what{"'"}s up?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </BubbleChat>
  </div>
  <div style={bubbleWrapper}>
    <BubbleChat avatar="PR" variant="primary-1">
      <p>Meh.</p>
      <p>Lorem ipsum.</p>
    </BubbleChat>
  </div>
</div>
```
