import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { SelectField, Text, Mobile, Desktop } from '../../../index'
import './DocHead.scss'

export default class DocHead extends PureComponent {
  static propTypes = {
    /** Props of Component `SelectField`. */
    selectFieldProps: PropTypes.object,
    hasMortgagor: PropTypes.bool
  }

  render() {
    const { selectFieldProps, hasMortgagor } = this.props
    const Filter = (
      <div className="doc-head--filter">
        <SelectField {...selectFieldProps} format="filter" />
      </div>
    )

    return (
      <div>
        <Mobile>
          <div className="doc-head">{Filter}</div>
        </Mobile>
        <Desktop>
          <div className="doc-head">
            <div className="doc-head--badge" />
            <div className="doc-head--doc-name">
              <Text variant="neutral-1-40" size="small">
                Type de document
              </Text>
            </div>
            {hasMortgagor && (
              <div className="doc-head--mortgagor-name">
                <Text variant="neutral-1-40" size="small">
                  Pour qui ?
                </Text>
              </div>
            )}
            {Filter}
          </div>
        </Desktop>
      </div>
    )
  }
}
