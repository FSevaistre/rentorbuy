### Import
```js static
import { DropDown } from 'pretto-ui'
```

### Usage
```html
<DropDown label="DropDown">
  <ul>
    <li>Elem 1</li>
    <li>Elem 2</li>
    <li>Elem 3</li>
  </ul>
</DropDown>
```

### Examples
#### Basic:
```jsx
const labelDropDown = <Button label="DropDown" format="line" variant="accent-1" />;
const liStyle = {
  padding: "8px 16px",
  cursor: "pointer"
};
<DropDown label={labelDropDown}>
  <List>
    <ListItem>Elem 1</ListItem>
    <ListItem>Elem 2</ListItem>
    <ListItem>Elem 3</ListItem>
  </List>
  <Divider />
  <p style={{padding: 16}}>Disconnect</p>
</DropDown>
```

#### Variant: primary-1
```jsx
const labelDropDown = <Button label="DropDown" variant="primary-1" />;
const liStyle = {
  padding: "8px 16px",
  cursor: "pointer",
  borderBottom: "1px solid #fff"
};
<DropDown label={labelDropDown} variant="primary-1">
  <ul>
    <li style={liStyle}>Elem 1</li>
    <li style={liStyle}>Elem 2</li>
    <li style={liStyle}>Elem 3</li>
  </ul>
</DropDown>
```
