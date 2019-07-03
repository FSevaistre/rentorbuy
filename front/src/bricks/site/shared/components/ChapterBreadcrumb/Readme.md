### Import

```js static
import { ChapterBreadcrumb } from 'bricks'
```

### Usage

```jsx static
<ChapterBreadcrumb itemDefault={data[0]} items="{data}" />
```

### Examples

```jsx
const data = [
  {
    title: 'Avant de vous lancer',
    variant: 'primary-1'
  },
  {
    title: 'Devenir propriétaire',
    variant: 'accent-1'
  },
  {
    title: 'Seul ou à plusieurs',
    variant: 'accent-4'
  },
  {
    title: 'Mon achat immobilier',
    variant: 'accent-3-d'
  }
]

;<ChapterBreadcrumb itemDefault={data[2]} items={data} />
```
