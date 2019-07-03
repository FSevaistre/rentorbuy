### Import

```js static
import { Upload } from 'pretto-ui'
```

### Usage

```html
<Upload onUpload="{this.handleUpload}">Upload file(s)</Upload>
```

### Examples

#### Basic:

```jsx
initialState = {
  files: []
}
handleUpload = (files, rejected) => {
  const newFiles = state.files
  files.map(file => {
    newFiles.push(file)
  })
  setState({ files })
}
;<div>
  <Upload onUpload={this.handleUpload}>
    <p>
      Upload <strong>something</strong> here
    </p>
  </Upload>
  <div>
    <List>
      {state.files.map(file => {
        return <ListItem key={file.name}>{file.name}</ListItem>
      })}
    </List>
  </div>
</div>
```

#### With requirements:

```jsx
initialState = {
  files: []
}
handleUpload = (files, rejected) => {
  const newFiles = state.files
  files.map(file => {
    newFiles.push(file)
  })
  setState({ files })
}
;<div>
  <Upload onUpload={this.handleUpload} withRequirements>
    <p>
      Upload <strong>something</strong> here
    </p>
  </Upload>
  <div>
    <List>
      {state.files.map(file => {
        return <ListItem key={file.name}>{file.name}</ListItem>
      })}
    </List>
  </div>
</div>
```
