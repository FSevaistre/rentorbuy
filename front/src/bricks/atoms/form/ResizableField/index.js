import PropTypes from 'prop-types'
import { createRef, PureComponent } from 'react'

const calculateWithForValue = value => {
  const hiddenInput = document.createElement('span')

  hiddenInput.className = 'numberfield--input'
  hiddenInput.textContent = value

  document.body.appendChild(hiddenInput)
  const width = hiddenInput.offsetWidth + 16
  document.body.removeChild(hiddenInput)

  return width
}

export default class ResizableField extends PureComponent {
  static defaultProps = {
    updateWidth: true
  }

  static propTypes = {
    children: PropTypes.func.isRequired,
    updateWidth: PropTypes.bool
  }

  ref = createRef()

  state = {
    width: null
  }

  componentDidMount() {
    if (this.props.updateWidth) {
      this.updateWidth(this.props.inputValue)
    }
  }

  componentDidUpdate(prevProps) {
    const { inputValue, updateWidth } = this.props

    if (prevProps.inputValue !== inputValue && updateWidth) {
      this.updateWidth(inputValue)
    }
  }

  updateWidth(value) {
    this.setState({ width: calculateWithForValue(value) })
  }

  render() {
    return this.props.children(this.state.width)
  }
}
