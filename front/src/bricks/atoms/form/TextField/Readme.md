### Import

```js static
import { TextField } from 'pretto-ui'
```

### Usage

```html
<TextField type="text" label="FirstName" value="Value" placeholder="EnterYourFirstName" />
```

### Examples:

#### Basic:

```jsx
<TextField id="default" placeholder="This is default style" />
```

#### Variant:

```jsx
<TextField id="default" variant="accent-1" placeholder="This is variant accent-1" />
```

#### Format: sentence

```jsx
<TextField format="sentence" id="sentence" placeholder="This is sentence style" />
```

#### Format: line

```jsx
<TextField format="line" id="line" icon="phone" placeholder="This is line style" />
```

#### Format: rounded

```jsx
<TextField format="rounded" id="rounded" icon="arrow-right" placeholder="This is rounded style" />
```

#### With hint:

```jsx
initialState = {
  value: ''
}
;<TextField
  value={state.value}
  onChange={value => {
    setState({ value })
  }}
  type="email"
  icon="mail"
  id="email"
  placeholder="Try typing a wrong extension email"
  onClickHint={value => setState({ value })}
/>
```

#### Type search:

```jsx
initialState = {
  value: ''
}
;<div>
  <TextField
    value={state.value}
    onChange={value => {
      setState({ value: value })
    }}
    type="search"
    id="search"
    format="search"
    placeholder="Search and clear!"
  />
  <hr style={{ margin: '16px 0' }} />
  <div>
    You are searching for: <b>{state.value}</b>
  </div>
</div>
```

#### Type textarea:

```jsx
<TextField
  label="Message"
  type="textarea"
  id="textarea"
  format="form"
  value={state.value}
  placeholder="Message in the textarea field. Try typing a long message."
/>
```

#### Form style:

```jsx
initialState = {
  errorPhone: '',
  isDisabled: true
}
handleBlur = e => {
  const regex = /^[\d\+ ]+$/
  if (!e.target.value.match(regex)) setState({ errorPhone: 'Phone number is empty', isDisabled: true })
  else setState({ errorPhone: '', isDisabled: false })
}
;<form action="">
  <TextField format="line" id="lastName" label="Last Name" placeholder="Enter your Last Name" />
  <TextField
    onBlur={handleBlur}
    format="line"
    type="tel"
    id="phone"
    label="Phone *"
    errorText={state.errorPhone}
    placeholder="0123456789"
  />
  <Button type="submit" label="valider" disabled={state.isDisabled} />
</form>
```
