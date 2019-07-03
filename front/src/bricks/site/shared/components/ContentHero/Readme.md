### Import

```js static
import { ContentHero } from 'bricks'
```

### Usage

```jsx static
<ContentHero image={{description: 'Image description', src='./image.png'}} title="Guide achat immobilier : 5 questions à se poser avant d’acheter" />
```

### Examples

#### With image

```jsx
<ContentHero
  image={{ description: 'Image description', src: `https://picsum.photos/1024?nocache=${Date.now()}` }}
  title="Guide achat immobilier : 5 questions à se poser avant d’acheter"
/>
```

#### No image

```jsx
<ContentHero title="Guide achat immobilier : 5 questions à se poser avant d’acheter" />
```
