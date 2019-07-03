### Import
```js static
import { Dots } from 'pretto-ui'
```

### Usage
```html
<Dots number={4} />
```

### Examples
#### Basic:
```jsx
initialState = {
  current: 0,
  number: 3
};
handleClick = current => {
  setState({ current });
};
handleAddDot = () => {
  setState({ number: state.number + 1 });
};
handleRemoveDot = () => {
  if (state.number > 1)
    setState({ number: state.number - 1 });
  if (state.current + 1 === state.number)
    setState({ current: state.current - 1});
};
handleNavLeft = () => {
  if (state.current > 0)
    setState({ current: state.current - 1 });
};
handleNavRight = () => {
  if (state.current < state.number - 1)
    setState({ current: state.current + 1 });
};
<div>
  <p style={{textAlign: 'center'}}>{state.current + 1} / {state.number}</p>
  <NavBar
    title={<Dots variant="white" number={state.number} isActive={state.current} onClick={handleClick}/>}
    variant="primary-1"
    iconLeft="arrow-left"
    iconRight="arrow-right"
    iconLeftAction={handleNavLeft}
    iconRightAction={handleNavRight}
  />
  <p>Try adding or removing dots</p>
  <div style={{ display: 'flex' }}>
    <Button label="-" format={["circle", "line"]} size="small" onClick={handleRemoveDot} />
    <Button label="+" format={["circle", "line"]} size="small" onClick={handleAddDot} />
  </div>
</div>
```

#### Dots postionned right
```jsx
<Dots number={4} isActive={1} position="right" />
```
