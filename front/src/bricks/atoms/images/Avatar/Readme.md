### Import
```js static
import { Avatar } from 'pretto-ui'
```

### Usage
```html
<Avatar src="some/path/to/some/img.jpg" />
```

### Examples
#### Basic:
```jsx
const src = "http://res.cloudinary.com/pretto-fr/w_112,h_112,q_auto/portrait-julien_iudnmm.png";
<Avatar src={src} onClick={()=>console.log('clickable')}/>
```

#### Letter src:
```jsx
const src = "P";
<Avatar size="small" src={src} />
```
