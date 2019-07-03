### Import

```js static
import { DashboardMaturityDetails } from 'pretto-ui'
```

### Usage

```html
<DashboardMaturityDetails />
```

### Examples

#### Basic:

```jsx
handleClick = option => {
  console.log('Option clicked', option)
}
const props = {
  option: 'search_started',
  onClick: handleClick
}
;<Content variant="neutral-1-l">
  <DashboardCard
    title="Pensez à mettre à jour votre projet !"
    content="Indiquez nous à quelle étape vous en êtes : "
    titleProps={{ variant: 'primary-1', size: 'medium' }}
  >
    <DashboardMaturityDetails {...props} />
  </DashboardCard>
</Content>
```
