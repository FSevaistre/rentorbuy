### Import

```js static
import { ScoreDetails } from 'pretto-ui'
```

### Usage

```jsx static
<ScoreDetails
  description="Il ne semble présenter aucune difficulté particulière. Votre conseiller Pretto négocie pour vous les meilleures conditions de taux et de flexibilité."
  label="facile"
/>
```

### Examples

#### Basic:

```jsx
const fundability = {
  description:
    'Il ne semble présenter aucune difficulté particulière. Votre conseiller Pretto négocie pour vous les meilleures conditions de taux et de flexibilité.',
  label: 'facile'
}

;<Card zDepth={1} variant="white">
  <ScoreDetails {...fundability} />
</Card>
```
