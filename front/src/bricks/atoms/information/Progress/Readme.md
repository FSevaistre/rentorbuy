### Import
```js static
import { Progress } from 'pretto-ui'
```

### Usage
```html
<Progress />
```

### Examples
#### Basic:
```jsx
<Progress value={1} />
```

#### Variant
```jsx
<Progress value={1} variant="gradient-primary-2" />
```

#### Format: document
```jsx
<Progress value={1} format="document" />
```

#### Variant: neutral-1
```jsx
initialState={
  value: 1,
  max: 5
};
handleClickValueMinus = () => {
  if(state.value > 0){
    setState({value: state.value - 1});
  }
};
handleClickValuePlus = () => {
  setState({value: state.value + 1});
};
handleRetry = () => {
  setState({value: 0})
};
const content = state.value === 5
  ? <Alert>
      <p>Maximum reached</p>
      <Button size="small" label="retry" onClick={handleRetry} />
    </Alert>
  :
    <div>
      <Button format="line" size="small" icon="cross" onClick={handleClickValueMinus} />
      <span> </span>
      <Button size="small" icon="arrow-right" onClick={handleClickValuePlus} />
    </div>;
<div>
  <p>Try the buttons</p>
  <Progress variant="neutral-1" value={state.value} max={state.max} />
  {content}
</div>
```
