import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Divider, DocHead, DocRow } from '../../../index'

export default class DocsList extends PureComponent {
  static propTypes = {
    documents: PropTypes.array.isRequired,
    onDocumentClick: PropTypes.func.isRequired,
    /** Props of Component `SelectField`. */
    selectFieldProps: PropTypes.object,
    hasMortgagor: PropTypes.bool
  }

  render() {
    const { selectFieldProps, documents, onDocumentClick, hasMortgagor } = this.props
    return (
      <div>
        <DocHead {...{ selectFieldProps }} hasMortgagor={hasMortgagor} />
        <Divider />
        <Divider />
        {documents.map(document => {
          const { slug, filter, ...props } = document
          return (
            (filter === selectFieldProps.value || selectFieldProps.value === 'all') && (
              <div key={slug}>
                <DocRow
                  filter={filter}
                  onClick={() => onDocumentClick(document)}
                  hasMortgagor={hasMortgagor}
                  {...props}
                />
                <Divider />
              </div>
            )
          )
        })}
      </div>
    )
  }
}
