### Import

```js static
import { Notifications } from 'pretto-ui'
```

### Usage

```html
<Notifications />
```

### Examples

#### Basic:

```jsx
initialState = {
  items: [],
  current: 0,
  max: 0
}
handleAdd = () => {
  if(state.current === state.max) setState(prevState => ({ max: prevState.max + 1, items: [...prevState.items, { id: prevState.items.length.toString(), slug: 'uploading-files', props: { current: prevState.current, max: prevState.max + 1 } }] }))
  else {
    const items = state.items.map(item => {
      return { ...item, props: { ...item.props, max: item.props.max + 1 } }
    })
    setState(prevState => ({ items, max: prevState.max + 1 }))
  }
}
handleUpdate = (id = '0') => {
  const items = state.items.map(item => {
    if(item.id === id) return { ...item, props: { ...item.props, current: item.props.current + 1 } }
    return item
  })
  if(state.current + 1 === state.max) {
    items.push({ id: 'completed', slug: 'completed-files', props: { category: 'Carte d‘identité'}, onClose: handleClose('completed') })
  }
  setState(prevState => ({ items, current: prevState.current + 1 }))
  setTimeout(() => setState(prevState => ({ items: prevState.items.slice(1, prevState.items.length) })), 2000)

}
handleClose = id => () => {
  setState({ items: [], current: 0, max: 0 })
}
<>
  <Button onClick={handleAdd}>Add document</Button>
  <Button onClick={handleUpdate}>update notification</Button>
  <Notifications items={state.items} onClose={handleClose}/>
</>
```
