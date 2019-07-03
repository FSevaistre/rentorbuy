### Import

```js static
import { SubHeading } from 'pretto-ui'
```

### Usage

```html
<SubHeading>Lorem ipsum dolor sit amet.</SubHeading>
```

### Examples

#### Basic:

```jsx
<SubHeading>Lorem ipsum dolor sit amet.</SubHeading>
```

#### Sizes

```jsx
const sizes = ['large', 'medium', 'small']
sizes.map(size => {
  return (
    <SubHeading key={size} size={size}>
      SubHeading {size}
    </SubHeading>
  )
})
```

#### Format: hyphen

```jsx
<SubHeading format="hyphen">Lorem ipsum</SubHeading>
```

#### Variant

```jsx
<SubHeading variant="accent-1">Lorem ipsum dolor sit amet.</SubHeading>
```

#### Format: card-title

```jsx
<Card format="center" zDepth={2}>
  <Content variant="accent-4">
    <SubHeading variant="white" format="card-title">
      Lorem ipsum dolor sit amet.
    </SubHeading>
    <Heading variant="white">Lorem ipsum dolor sit amet.</Heading>
  </Content>
  <Divider variant="accent-5" />
  <Content>
    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, doloribus!</Text>
  </Content>
</Card>
```
