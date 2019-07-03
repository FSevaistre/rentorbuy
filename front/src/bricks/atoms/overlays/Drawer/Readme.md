### Import
```js static
import { Drawer } from 'pretto-ui'
```
### Usage
```html
<Drawer>
  <div>Content of Drawer</div>
</Drawer>
```

### Examples
#### Basic:
```jsx
initialState = {
  isOpen: false
}
style = {
  sidebarContent: {
    background: 'lightpink'
  }
};
handleOpen = () => {
  setState({isOpen: true});
};
handleClose = () => {
  setState({isOpen: false});
};
<div>
  <Drawer isOpen={state.isOpen} onClickOutside={handleClose} from="right" variant="accent-1">
    <div style={style.sidebarContent}>
      <p style={{padding: 16}}>I am a Drawer</p>
    </div>
  </Drawer>
  <div>
    <Card>
      <p>some content</p>
      <br />
      <Button label="open drawer" onClick={handleOpen} />
    </Card>
  </div>
</div>
```
