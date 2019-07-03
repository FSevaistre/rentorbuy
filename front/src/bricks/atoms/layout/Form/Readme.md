### Import
```js static
import { Form, FormSection, Field } from 'pretto-ui'
```

### Usage
```html
<Form>
  <FormSection title="Section Title">
    <FormField label="Label">
      Any Field (TextField...)
    </FormField>
  </FormSection>
</Form>
```

### Examples
#### Basic
```jsx
<Form>
  <FormSection title="Vos informations">
    <FormField label="Votre nom" labelId="name">
      <TextField placeholder="Votre nom complet" id="name" />
    </FormField>
    <FormField label="Votre jouet préféré">
      <TextField placeholder="Buzz l'éclair" />
    </FormField>
  </FormSection>
  <FormSection title="Votre meilleur ami">
    <FormField>
      <TextField placeholder="Son nom complet" label="Son nom" id="ownLabel" />
    </FormField>
    <FormField label="Son jouet préféré">
      <TextField placeholder="Woody!" />
    </FormField>
  </FormSection>
  <Button label="continuer" />
</Form>
```
