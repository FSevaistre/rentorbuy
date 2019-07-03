### Import

```js static
import { Notification } from 'pretto-ui'
```

### Usage

```html
<Notification>{children}</Notification>
```

### Examples

#### Basic:

```jsx
initialState = {
  progress: 0,
  isOpen: false
}
handleUpload = () => {
  setState({ isOpen: true, progress: 1 })
  setTimeout(()=>setState({ progress: 5 }), 500)
  setTimeout(()=>setState({ isOpen: false }), 1500)
}
<>
  <Button onClick={handleUpload}>Upload</Button>
  <Notification isOpen={state.isOpen}>
    <div style={{ width: '300px' }}>
    <Card variant="white" zDepth={2}>
      <Content>
        <div>Uploading...</div>
        <Progress value={state.progress} max={5} format="rounded" />
      </Content>
    </Card>
    </div>
  </Notification>
</>
```
