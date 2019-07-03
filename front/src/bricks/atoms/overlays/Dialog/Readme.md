### Import
```js static
import { Dialog } from 'pretto-ui'
```

### Usage
```html
<Dialog isOpen={this.state.isOpen}>
  Dialog content. Can be any Node.
</Dialog>
```

### Examples
#### Basic:
```jsx
initialState = {
  isOpen: false
};
handleOpen = () => {
  setState({isOpen: true});
};
handleClose = () => {
  setState({isOpen: false});
};
<div>
  <Button onClick={handleOpen} label="Open Modal" />
  <Dialog isOpen={state.isOpen} onRequestClose={this.handleClose}>
    <div style={{padding: 24}}>
      <h1 style={{marginBottom: 16}}>Hallo!</h1>
      <Button onClick={handleClose} label="Close" />
    </div>
  </Dialog>
</div>
```
