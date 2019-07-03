### Import

```js static
import { DrawerVisible } from 'pretto-ui'
```

### Usage

```html
<DrawerVisible>
  <div>Content of DrawerVisible</div>
</DrawerVisible>
```

### Examples

#### Basic:

```jsx
initialState = {
  isOpen: false
}
style = {
  main: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    padding: 24,
    paddingLeft: 40
  },
  content: {
    margin: 'auto',
    flexGrow: 1
  },
  sidebarContent: {
    background: 'lightpink',
    height: '100%'
  }
}
handleToggle = () => {
  setState(prevState => ({ isOpen: !prevState.isOpen }))
}
;<div style={style.main}>
  <DrawerVisible variant="primary-1" isOpen={state.isOpen} onOpen={handleToggle} onClose={handleToggle}>
    <div style={style.sidebarContent}>
      <p style={{ padding: 16 }}>I am a DrawerVisible</p>
    </div>
  </DrawerVisible>
  <div style={style.content}>
    <Card>
      <p>some content</p>
      <br />
      <Button label="open drawer" onClick={handleToggle} />
    </Card>
  </div>
</div>
```
