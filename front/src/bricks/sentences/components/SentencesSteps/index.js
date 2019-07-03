import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Timeline } from '../../../index'
import { findIndex } from 'lodash'
import './SentencesSteps.scss'

export default class SentencesSteps extends PureComponent {
  static propTypes = {
    pages: PropTypes.array,
    lastFilledIndex: PropTypes.number,
    onNav: PropTypes.func,
    title: PropTypes.string,
    active: PropTypes.number
  }

  render() {
    const { pages, lastFilledIndex, onNav, title, active } = this.props
    const name = pages.find(page => page.name === 'income').name
    const newVariantIndex = findIndex(pages, { name })
    const lastVariantIndex = findIndex(pages, { extendedType: 'endSeparator' })
    let steps = []
    let currentIndex = 0
    pages.forEach((page, index) => {
      const isTitle = !page.name
      const stepTitle = page.timelineTitle || page.title
      const titleContent =
        index <= lastFilledIndex && !isTitle ? (
          <div className="sentences-steps--title" onClick={() => onNav(page.name)}>
            {stepTitle}
          </div>
        ) : (
          stepTitle
        )
      const variant = index > newVariantIndex && index < lastVariantIndex ? 'accent-4' : 'accent-1'
      const timelineTitleProps = isTitle ? { format: 'title' } : {}
      const step = Object.assign({}, { variant }, timelineTitleProps, { children: titleContent })
      steps.push(step)
      if (index <= lastFilledIndex && !isTitle) currentIndex = index
      if (stepTitle === title) currentIndex = findIndex(pages, { title })
      if (lastFilledIndex > currentIndex) currentIndex = lastFilledIndex
    })
    return (
      <div className="sentences-steps">
        <Timeline variant="accent-1" current={currentIndex} steps={steps} active={active} />
      </div>
    )
  }
}
