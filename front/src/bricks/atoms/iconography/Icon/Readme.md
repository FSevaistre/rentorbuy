### Import

```js static
import { Icon } from 'pretto-ui'
```

### Usage

```html
<Icon name="cross" />
```

### Examples

#### Variant:

```jsx
<div style={{ display: 'inline-block' }}>
  <Icon name="cross" variant="primary-1" />
  <span>primary-1 cross</span>
</div>
```

#### Loading:

```jsx
<div style={{ display: 'inline-block' }}>
  <Icon name="cross" loading />
  <span>loading</span>
</div>
```

#### List of icons:

```jsx
const icons = [
  '3-dots',
  'add',
  'arrow-left',
  'arrow-right',
  'arrow-full-bottom',
  'arrow-full-top',
  'bookmark',
  'calendar',
  'chat',
  'check',
  'check-2',
  'check-circle',
  'chevron-left',
  'chevron-right',
  'clock',
  'cross',
  'cross-circle',
  'cross-circle-2',
  'dash',
  'exclamation-mark',
  'facebook',
  'file',
  'filter',
  'folder',
  'folder-lines',
  'help',
  'home',
  'info',
  'linkedin',
  'locker-closed',
  'locker-opened',
  'mail',
  'menu',
  'more',
  'operation-equal',
  'operation-minus',
  'operation-plus',
  'p-logo',
  'pen',
  'phone',
  'save',
  'search',
  'share',
  'star',
  'text',
  'thumb-up',
  'twitter',
  'trash',
  'upload',
  'user',
  'user-account',
  'whatsapp'
]
initialState = {
  copiedClass: 'hidden',
  icon: ''
}
handleCopy = icon => () => {
  const copyTextarea = document.querySelector(`.styleguide--icon textarea[data-name="${icon}"]`)
  copyTextarea.select()
  document.execCommand('copy')
  setState({
    icon,
    copiedClass: 'visible'
  })
  window.setTimeout(() => {
    setState({ copiedClass: 'hidden' })
  }, 300)
}
;<ul className="styleguide--icons">
  {icons.map((icon, i) => {
    return (
      <li key={i} className="styleguide--icon" onClick={handleCopy(icon)}>
        <div>
          <Icon name={icon} />
        </div>
        {state.icon === icon && <div className={`styleguide--icon--copied ${state.copiedClass}`}>copied</div>}
        <textarea data-name={icon} value={icon} />
        <code>{icon}</code>
      </li>
    )
  })}
</ul>
```
