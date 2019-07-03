import classnames from 'classnames'
import flatten from 'lodash/flatten'
import map from 'lodash/map'
import sum from 'lodash/sum'
import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'

import { Mobile, Desktop, Text } from '../../../index'

import './Graph.scss'

const formatValue = value => ({
  ...value,
  rawValue: value.value,
  test: title => value.title === title,
  value: `${value.value.toLocaleString('fr')} €`
})

const formatValues = (values, fromRight = false) => {
  if (values.length > 2) {
    const firstValue = values[0]
    const lastValue = values[values.length - 1]

    if (fromRight) {
      return [
        formatValue(firstValue),
        values.slice(2).reduce(
          (previous, value) => ({
            ...previous,
            rawValue: previous.rawValue + value.value,
            test: title => [...previous.title.split(' / '), value.title].includes(title),
            title: `${previous.title} / ${value.title}`,
            value: `${previous.value} / ${value.value.toLocaleString('fr')} €`
          }),
          formatValue(values[1])
        )
      ]
    }

    return [
      values.slice(1, -1).reduce(
        (previous, value) => ({
          ...previous,
          rawValue: previous.rawValue + value.value,
          test: title => [...previous.title.split(' / '), value.title].includes(title),
          title: `${previous.title} / ${value.title}`,
          value: `${previous.value} / ${value.value.toLocaleString('fr')} €`
        }),
        formatValue(firstValue)
      ),
      formatValue(lastValue)
    ]
  }

  return values.map(formatValue)
}

const renderCaption = (values, selectedValue) =>
  values.map(({ color, title, test, value, variant }, index) => {
    return (
      <div
        className={classnames('graph__caption', `graph__caption--${variant}`, {
          'graph__caption--dimmed': selectedValue !== null && !test(selectedValue.title)
        })}
        key={index}
      >
        <div className="graph__caption__title">
          <Text size="small">{title}</Text>
        </div>

        <div className="graph__caption__price">
          <Text size="small" variant="neutral-1-60">
            {value}
          </Text>
        </div>
      </div>
    )
  })

const renderParts = (values, selectedValue, onSelectValue = () => {}, onUnselectValue = () => {}) => (
  <div>
    {values.map((subValues, index) => {
      const total = sum(map(subValues, 'value'))

      return (
        <div className="graph__parts__container" key={index}>
          {subValues.map(subValue => {
            const { title, value, variant } = subValue
            const percentage = (value / total) * 100

            return (
              <div
                className={classnames('graph__parts__part', `graph__parts__part--${variant}`, {
                  'graph__parts__part--dimmed': selectedValue !== null && title !== selectedValue.title
                })}
                key={title}
                onMouseEnter={() => onSelectValue(subValue)}
                onMouseLeave={() => onUnselectValue(subValue)}
                style={{ width: `${percentage}%` }}
              />
            )
          })}
        </div>
      )
    })}
  </div>
)

export default class Graph extends PureComponent {
  static propTypes = {
    /** Event handler triggered when bar is hovered on desktop on when a caption is clicked on desktop */
    onSelectValue: PropTypes.func,
    /** Event handler when a value is not selected anymore */
    onUnselectValue: PropTypes.func,
    /** Value to hightlight */
    selectedValue: PropTypes.object,
    /** Data values */
    values: PropTypes.array.isRequired
  }

  static defaultProps = {
    onSelectValue: () => {},
    onUnselectValue: () => {},
    selectedValue: null
  }

  componentDidMount() {
    window.addEventListener('click', this.handleDocumentClick)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleDocumentClick)
  }

  handleCaptionClick = caption => event => {
    event.stopPropagation()

    this.props.onSelectValue(caption)
  }

  handleDocumentClick = () => {
    if (window.innerWidth < 720) {
      this.props.onUnselectValue()
    }
  }

  render() {
    const { onSelectValue, onUnselectValue, selectedValue, values } = this.props

    const bottomValues = formatValues(values[1], true)
    const topValues = formatValues(values[0])

    const bottomTotal = sum(map(values[1], 'value'))
    const topTotal = sum(map(values[0], 'value'))

    return (
      <Fragment>
        <Desktop>
          <div className="graph">
            <div className="graph__captions graph__captions--top">
              {renderCaption(topValues, selectedValue, topTotal)}
            </div>

            <div className="graph__parts graph__parts--top">
              {renderParts(values, selectedValue, onSelectValue, onUnselectValue)}
            </div>

            <div className="graph__captions graph__captions--bottom graph__captions--top">
              {renderCaption(bottomValues, selectedValue, bottomTotal)}
            </div>
          </div>
        </Desktop>

        <Mobile>
          <div className="graph">
            <div className="graph__parts graph__parts--mobile">{renderParts(values, selectedValue)}</div>

            <div className="graph__captions graph__captions--mobile">
              {flatten(values).map(caption => {
                const { expandedTitle, title, value, variant } = caption

                return (
                  <div
                    className={classnames('graph__caption', {
                      'graph__caption--dimmed': selectedValue !== null && selectedValue.title !== title
                    })}
                    key={title}
                    onClick={this.handleCaptionClick(caption)}
                  >
                    <div className="graph__caption__title">
                      <span className={classnames('graph__caption__bullet', `graph__caption__bullet--${variant}`)} />
                      <Text size="small">{expandedTitle}</Text>
                    </div>

                    <div className="graph__caption__price">
                      <Text size="small" variant="neutral-1-60">
                        {value.toLocaleString('fr')} €
                      </Text>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Mobile>
      </Fragment>
    )
  }
}
