### Import
```js static
import { MoreInformationPage } from 'pretto-ui'
```

### Usage
```html
<MoreInformationPage {...props} />

```
### Examples
#### Basic:
```jsx
initialState = {
  progress: 0.1
};
handleNext = () => setState(prevState => ({ progress: prevState.progress + 0.1 }));
handlePrevious = () => setState(prevState => ({ progress: prevState.progress - 0.1 }));
const sectionProps = {
  title: 'Votre situation professionnelle',
  fields: [
    {
      name: 'tf',
      type: 'textfield',
      label: 'Quel est votre nom complet ?',
      component: <TextField />
    },
    {
      name: 'sl',
      type: 'select',
      label: 'Quelle est votre situation maritale ?',
      component: <TextField />
    }
  ]
};
const props = {
  message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At iusto eveniet cum minus impedit pariatur assumenda aut, dolore perspiciatis repellat a. At aliquam necessitatibus itaque saepe esse, laborum fugit quos.',
  avatar: <Avatar src="P" />,
  sections: [
    { ...sectionProps },
    { ...sectionProps }
  ],
  onNext: handleNext,
  onPrevious: handlePrevious,
  progressProps: {
    value: state.progress
  }
};
<MoreInformationPage {...props} />
```
