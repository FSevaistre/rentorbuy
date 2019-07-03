### Import

```js static
import { SimulationPage } from 'pretto-ui'
```

### Usage

```html
<SimulationPage />
```

### Examples

#### Basic:

```jsx
const card_1 = {
  title: 'Montant emprunté',
  value: 318000,
  valueType: 'amount',
  icon: 'pen',
  onClick: () => setState({ isDialogOpen: true })
}
const card_2 = {
  title: 'Financement',
  value: 89,
  valueType: 'score',
  icon: 'info',
  onClick: () => setState({ isScoreDetailsOpen: true })
}
const card_3 = {
  title: 'Durée',
  value: 25,
  valueType: 'duration',
  icon: 'pen',
  onClick: () => console.log('clicked InformationCard Durée')
}
const informationCardsProps = {
  cards: [card_1, card_2, card_3]
}
const optimizeButtonProps = {
  onClick: () => console.log('clicked OptimizeButton')
}
const optimizeChoiceProps = {
  onClick: kind => console.log('clicked OptimizeChoice', kind)
}
const result_card_1 = {
  isOpen: true,
  cardData: {
    rate: 1.84,
    bankKind: 'specialiste',
    payment: 753,
    totalCost: 46768,
    interests: 44928,
    guaranty: 1840,
    applicationFees: 0,
    transferability: false,
    prepaymentCharge: false,
    modularity: true,
    remainingInterests: 2000,
    repurchaseFees: 1200
  }
}
const result_card_2 = {
  cardData: {
    rate: 1.94,
    bankKind: 'specialiste',
    payment: 753,
    totalCost: 46768,
    interests: 44928,
    guaranty: 1840,
    applicationFees: 0,
    transferability: false,
    prepaymentCharge: false,
    modularity: true,
    remainingInterests: 2000,
    repurchaseFees: 1200
  }
}
const result_card_3 = {
  cardData: {
    rate: 2.15,
    bankKind: 'regionale',
    payment: 1251,
    totalCost: 56768,
    interests: 54928,
    guaranty: 1910,
    applicationFees: 0,
    transferability: false,
    prepaymentCharge: true,
    modularity: true,
    remainingInterests: 2000,
    repurchaseFees: 1200
  }
}
initialState = {
  cards: [result_card_1, result_card_2],
  isShowMoreActive: true,
  value: 3,
  isDialogOpen: false,
  isScoreDetailsOpen: false,
  isLoanAmountDetailsOpen: false
}
const resultCardsProps = {
  projectKind: 'purchase',
  version: 'b',
  cards: state.cards
}
const simulationContentProps = {
  optimizeMessage: 'Nous avons optimisé votre prêt pour le meilleur taux.',
  isShowMoreActive: state.isShowMoreActive,
  onShowMore: () => setState({ cards: [...state.cards, result_card_3], isShowMoreActive: false }),
  informationCardsProps,
  optimizeButtonProps,
  optimizeChoiceProps,
  resultCardsProps
}
onClick = () => {
  setState({ isChanging: true })
}
onChange = () => {
  console.log('isChanging')
}
onValidate = () => {
  setState({ isChanging: false })
}
const editable_row_1 = {
  onClick,
  label: 'Prix du bien',
  numberFieldProps: {
    onChange,
    value: 300000
  }
}
const editable_row_2 = {
  onClick,
  label: 'Apport',
  numberFieldProps: {
    onChange,
    value: 13000
  }
}
const editableRowsProps = {
  rows: [editable_row_1, editable_row_2],
  isChanging: state.isChanging,
  onValidate
}
handleChange = value => {
  setState({ value })
}
const slider_1 = {
  title: 'Durée',
  type: 'duration',
  sliderProps: {
    value: state.value,
    min: 10,
    max: 30,
    onChange: handleChange,
    variant: 'accent-1'
  }
}
const slider_2 = {
  title: 'Mensualité',
  sliderProps: {
    value: state.value,
    min: 0,
    max: 40,
    onChange: handleChange,
    variant: 'accent-5'
  }
}
const simulationSlidersProps = {
  sliders: [slider_1, slider_2]
}
const information_row_1 = {
  label: 'Montant emprunté',
  value: 175432,
  onClick: () => setState({ isLoanAmountDetailsOpen: true })
}
const information_row_2 = {
  label: 'Financement',
  type: 'score',
  value: 80,
  onClick: () => setState({ isScoreDetailsOpen: true })
}
const informationRowsProps = {
  rows: [information_row_1, information_row_2]
}
const simulationSidebarProps = {
  onModify: () => console.log('onModify'),
  editableRowsProps,
  informationRowsProps,
  simulationSlidersProps
}
const field_1 = {
  label: 'Prix du bien',
  numberFieldProps: {
    value: 300000,
    onChange: () => console.log('changed EditableField')
  }
}
const field_2 = {
  label: 'Apport',
  numberFieldProps: {
    value: 30000,
    onChange: () => console.log('changed EditableField')
  }
}
const editableFieldsProps = {
  rows: [editable_row_1, editable_row_2],
  isChanging: state.isChanging,
  onValidate
}
const simulationDetailsProps = {
  simulationSlidersProps,
  editableFieldsProps: { fields: [field_1, field_2] },
  onClose: () => setState({ isDialogOpen: false }),
  onClickUser: () => console.log('click user'),
  onValidate: () => console.log('validate')
}
const loanAmountDetailsProps = {
  onClose: () => setState({ isLoanAmountDetailsOpen: false }),
  property: {
    data: [
      {
        kind: 'propertyPrice',
        value: 100000
      },
      {
        kind: 'worksPrice',
        value: 13450
      },
      {
        kind: 'notaryFees',
        value: 12000
      },
      {
        kind: 'guaranteeFees',
        value: 12345
      }
    ],
    contribution: 12000
  }
}
const scoreDetailsProps = {
  onClose: () => setState({ isScoreDetailsOpen: false })
}
const simulationActionsProps = {
  onSubscribe: () => console.log('subscribe'),
  onModify: () => console.log('modify'),
  onOptimize: () => console.log('optimize')
}
const props = {
  isLoggedIn: true,
  isDialogOpen: state.isDialogOpen,
  isLoanAmountDetailsOpen: state.isLoanAmountDetailsOpen,
  isScoreDetailsOpen: state.isScoreDetailsOpen,
  onCloseLoanAmountDetails: () => setState({ isLoanAmountDetailsOpen: false }),
  onCloseScoreDetails: () => setState({ isScoreDetailsOpen: false }),
  loanAmountDetailsProps,
  scoreDetailsProps,
  simulationActionsProps,
  simulationContentProps,
  simulationSidebarProps,
  simulationDetailsProps
}
;<SimulationPage {...props} />
```
