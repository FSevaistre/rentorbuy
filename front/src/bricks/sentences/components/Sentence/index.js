import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  AutoComplete,
  AutosizeField,
  DateField,
  NumberField,
  SelectField,
  Badge,
  MobileTablet,
  Text
} from '../../../index'
import './Sentence.scss'

const INPUT = (elem, isFocused) => {
  const { props, type } = elem
  props.autoFocus = isFocused
  switch (type) {
    case 'select':
      return <SelectField {...props} />
    case 'banks':
    case 'city':
      return <AutoComplete {...props} />
    case 'number':
    case 'decimal':
      return <NumberField {...props} />
    case 'text':
      return <AutosizeField {...props} />
    case 'date':
      return <DateField {...props} />
    default:
      return <span {...props} />
  }
}
export default class Sentence extends PureComponent {
  static propTypes = {
    children: PropTypes.array.isRequired,
    hasHelper: PropTypes.bool,
    isHelperClicked: PropTypes.bool,
    onClickHelper: PropTypes.func,
    autoFocus: PropTypes.bool,
    label: PropTypes.node
  }

  static defaultProps = {
    hasHelper: false
  }

  render() {
    const { children, hasHelper, onClickHelper, isHelperClicked, autoFocus, label } = this.props
    const badgeProps = isHelperClicked ? {} : { isGlowing: true }
    return (
      <div className={`sentence${label ? ' sentence--with-label' : ''}`}>
        {label && (
          <div className="sentence--label">
            <Text variant="primary-1" size="small">
              {label}
            </Text>
          </div>
        )}
        {children.map((elem, i) => {
          const first = children.find(child => typeof child === 'object')
          const isFocused = autoFocus && elem.path && elem.path === first.path
          if (typeof elem === 'string') return <span key={i}>{elem}</span>
          return <span key={elem.path}>{INPUT(elem, isFocused)}</span>
        })}
        <MobileTablet className="sentence--helper--wrapper">
          {hasHelper && <div className="sentence--helper--hidden" />}
          {hasHelper && (
            <div
              className={`sentence--helper${isHelperClicked ? ' sentence--helper--clicked' : ''}`}
              onClick={onClickHelper}
            >
              <Badge icon="help" variant="accent-1" size="large" {...badgeProps} />
            </div>
          )}
        </MobileTablet>
      </div>
    )
  }
}
