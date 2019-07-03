import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SubHeading, EditableInput, Row, Text, Mobile, Desktop } from '../../../index'
import './ContributionFieldset.scss'

export default class ContributionFieldset extends Component {
  static propTypes = {
    editableInputProps: PropTypes.object
  }

  render() {
    const { editableInputProps } = this.props
    return (
      <div className="contribution-fieldset">
        <Mobile>
          <Row
            label={
              <Text size="small" variant="neutral-1-60">
                Votre apport
              </Text>
            }
            value={<EditableInput {...editableInputProps} />}
          />
        </Mobile>
        <Desktop>
          <SubHeading>Votre apport</SubHeading>
          <EditableInput {...editableInputProps} />
        </Desktop>
      </div>
    )
  }
}
