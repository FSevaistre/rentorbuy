### Import
```js static
import { Checkbox } from 'pretto-ui'
```
### Usage
```html
<Checkbox id="simple" label="Simple" />
```

### Examples
#### Basic:
```jsx
initialState = {
  isChecked: false
};
handleChange = () => {
  setState({isChecked: !state.isChecked});
};
<div>
  <Checkbox id="simple" label="Simple" onChange={handleChange} />
  <p>I am {state.isChecked ? 'checked' : 'not checked'}</p>
</div>
```

#### Variant: primary-1
```jsx
<Checkbox id="primary" label="Primary color" variant="primary-1" />
```

#### Label position: left
```jsx
<Checkbox labelPosition="left" id="left" label="Label on the left" variant="accent-1" />
```

#### onChange triggered
```jsx
initialState = {
  lastAction: <span style={{fontStyle: 'italic'}}>Nothing done yet</span>
};
handleChange2 = ({ label }, target) => {
  const checkbox = target;
  const lastCheck = checkbox.checked ? "checked" : "unchecked";
  const lastAction = `${lastCheck} - ${label} (id="${checkbox.id}")`;
  setState({lastAction});
};
<div>
  <Checkbox id="checked" label="I am default checked" onChange={handleChange2} checked />
  <Checkbox id="notchecked" label="I am not" onChange={handleChange2} />
  <div style={{marginTop: 16}}><strong>Last action:</strong><p>{state.lastAction}</p></div>
</div>
```
