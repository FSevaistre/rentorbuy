### Import
```js static
import { NavBar } from 'pretto-ui'
```

### Usage
```html
<NavBar title="My NavBar"/>
```

### Examples
#### Basic:
```jsx
<NavBar title="Sweet"/>
```

#### With actions:
```jsx
initialState = {
  content: 'nothing clicked yet'
};
handleLeftAction = () => {
  setState({content: 'clicked left'});
};
handleRightAction = () => {
  setState({content: 'clicked right'});
};
<div>
  <NavBar
    title="Get shit done!"
    iconLeft="cross"
    iconLeftAction={handleLeftAction}
    iconRight="arrow-right"
    iconRightAction={handleRightAction}
    />
  <Card noRadius={['top-left', 'top-right']}>
    <div>{state.content}</div>
  </Card>
</div>
```

#### variant: neutral-1
```jsx
<NavBar title="Neutral" variant="neutral-1" />
```
