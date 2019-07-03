### Import

```js static
import { CapacityPage } from 'pretto-ui'
```

### Usage

```html
<CapacityPage />

```

### Examples

#### Basic:

```jsx
initialState = {
  value: 30,
  payment: 20,
  contribution: 100,
  isOperationsOpen: false
}
handleOpenOperations = () => setState({ isOperationsOpen: true })
handleCloseOperations = () => setState({ isOperationsOpen: false })

handleChange = () => {}
handleClick = slug => {
  console.log(slug)
}
handleSlide = value => {
  setState({ value })
}
const props = {
  isOperationsOpen: state.isOperationsOpen,
  onCloseOperations: handleCloseOperations,
  subMenuProps: {
    format: 'align-right',
    actions: [{ label: 'Optimiser', onClick: () => {}, icon: 'user' }]
  },
  capacityBudgetProps: {
    contributionFieldsetProps: {
      editableInputProps: {
        icon: 'pen',
        numberFieldProps: {
          value: state.contribution,
          onChange: handleChange,
          variant: 'accent-5'
        }
      }
    },
    sliderRangeProps: {
      title: 'Mensualité',
      sliderProps: {
        value: state.payment,
        min: 0,
        max: 40,
        onChange: handleChange,
        variant: 'accent-5'
      }
    },
    capacitySwipeProps: {
      amount: 2500
    }
  },
  editCardsProps: {
    cards: [
      {
        slug: 'payment',
        amount: 1200,
        onClick: handleClick
      }
    ]
  },
  actionCardsProps: {
    data: [
      {
        title: 'Card 1',
        emoji: ':)',
        pushedContent: '80000 €',
        data: [{ label: 'Mensualité', value: 3000, suffix: ' €' }, { label: 'Durée', value: 22, suffix: ' ans' }],
        action: handleClick,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, voluptas.',
        onClickInformation: handleOpenOperations
      },
      {
        title: 'Card 2',
        emoji: ':moneybag:',
        pushedContent: '200000 €',
        data: [{ label: 'Mensualité', value: 3000, suffix: ' €' }, { label: 'Durée', value: 22, suffix: ' ans' }],
        action: handleClick,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, beatae distinctio at.',
        onClickInformation: handleOpenOperations
      },
      {
        title: 'Card 3',
        emoji: ':moneybag:',
        pushedContent: '200000 €',
        data: [
          { label: 'Mensualité', value: 3000, suffix: ' €' },
          { label: 'Durée', value: 22, suffix: ' ans' },
          { label: 'Apport', value: 100000, suffix: ' €' }
        ],
        action: handleClick,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, beatae distinctio at.',
        onClickInformation: handleOpenOperations
      }
    ]
  },
  operationProps: {
    introduction: 'budget',
    operations: [
      {
        slug: 'budget',
        amount: 200000
      },
      {
        slug: 'notaryFees',
        amount: 12000
      },
      {
        slug: 'contribution',
        amount: 20000
      },
      {
        slug: 'ptz',
        amount: 42000,
        ptz: {
          duration: 20,
          franchise: 24
        }
      }
    ]
  }
}
;<CapacityPage {...props} />
```
