### Import

```js static
import { ApplicationListField } from 'pretto-ui'
```

### Usage

```html
<ApplicationListField addLabel="Ajouter" items=[] onAdd={() => {}} />
```

### Examples

#### Basic:

```jsx
<ApplicationListField
  addLabel="Ajouter"
  items={[
    {
      content: 'Mensualité : 100 €',
      title: 'Votre crédit'
    }
  ]}
  onAdd={() => {}}
/>
```
