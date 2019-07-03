import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Sentence, AddSentence, RemovableSentence, Text } from '../../../index'
import './SentencesGroup.scss'

const SENTENCE = (sentence, autoFocus) => {
  const { props, type } = sentence
  switch (type) {
    case 'sentence':
      return <Sentence {...props} autoFocus={autoFocus} />
    case 'remove':
      return <RemovableSentence {...props} />
    case 'add':
      return <AddSentence {...props} />
    case 'validation':
      return (
        <div className="sentence">
          <Text {...props} size="small" variant="error" />
        </div>
      )
    default:
      return <div {...props} />
  }
}
export default class SentencesGroup extends PureComponent {
  static propTypes = {
    sentences: PropTypes.arrayOf(PropTypes.object)
  }
  render() {
    const { sentences } = this.props
    return (
      <div className="sentences-group">
        {sentences.map((sentence, i) => {
          return (
            <div key={i} className={`sentences-group--${sentence.type}`}>
              {SENTENCE(sentence, i === 0)}
            </div>
          )
        })}
      </div>
    )
  }
}
