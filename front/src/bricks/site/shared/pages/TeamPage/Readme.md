### Import

```js static
import { TeamPage } from 'bricks'
```

### Usage

```html
<TeamPage {...props} />
```

### Example

```jsx
const props = {
  title: 'L’équipe Pretto',
  content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum aperiam rerum earum. Nobis exercitationem culpa temporibus rerum, similique eveniet ad vero. Id iste quidem odit molestias harum reprehenderit? Quam, provident?',
  members: [
    { slug: 'renaud', name: 'Renaud Pestre', title: 'Co-fondateur', linkedin: '' },
    { slug: 'renaud', name: 'Renaud Pestre', title: 'Co-fondateur', linkedin: '' },
    { slug: 'renaud', name: 'Renaud Pestre', title: 'Co-fondateur', linkedin: '' },
    { slug: 'renaud', name: 'Renaud Pestre', title: 'Co-fondateur', linkedin: '' }
  ]
}
;<TeamPage {...props} />
```
