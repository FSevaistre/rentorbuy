import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'
import * as Charts from 'react-google-charts'

import * as B from '../../../../index'
import * as S from './styles'

const AUTH_KEY = 'AIzaSyBEGOPAjZyVm3axyAuWX8Vgsb7kr2DfeOg'
const SPREADSHEET_KEY = '1nQmWJIh0j2PiYsHlLV7GXyL9f6v1211PWBL8vf1OeOo'

const markdownOptions = {
  createElement(type, { href }, ...children) {
    if (type === 'a') {
      return (
        <a href={href} rel="noreferrer noopener" target="_blank">
          {children}
        </a>
      )
    }

    return React.createElement(Fragment, null, ...children)
  },
  forceBlock: true
}

export default class Chart extends PureComponent {
  static defaultProps = {
    hAxisTitle: '',
    source: '',
    hideLegend: false,
    legendPosition: 'right',
    vAxisTitle: ''
  }

  static propTypes = {
    /** Piece of text that goes below the chart.*/
    source: PropTypes.string,
    /** Title of the horizontal axis */
    hAxisTitle: PropTypes.string,
    /** Whether or not the legend should be hidden. */
    hideLegend: PropTypes.bool,
    /** Legend position */
    legendPosition: PropTypes.oneOf(['bottom', 'left', 'right', 'top']),
    /** Slug of the spreadsheet to use */
    slug: PropTypes.string.isRequired,
    /** Title of the chart. */
    title: PropTypes.string,
    /** Type of chart to use. */
    type: PropTypes.string.isRequired,
    /** Title of the vertical axis */
    vAxisTitle: PropTypes.string
  }

  state = { error: false }

  componentDidMount() {
    const headers = new Headers()
    const url = new URL(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_KEY}/values:batchGet`)

    headers.append('Content-Type', 'application/json')

    url.searchParams.append('key', AUTH_KEY)
    url.searchParams.append('majorDimension', 'ROWS')
    url.searchParams.append('ranges', this.props.slug)

    fetch(url, { headers })
      .then(response => {
        if (!response.ok) {
          throw new Error()
        }

        return response.json()
      })
      .then(({ valueRanges }) => {
        const rawValues = valueRanges[0].values
        const formats = rawValues[1]

        const values = [
          rawValues[0],
          ...rawValues.slice(2).map(row =>
            row.map((cell, index) => {
              const format = formats[index]

              switch (format) {
                case 'number':
                  // ignore US thousand separator and parse to float
                  return parseFloat(cell.replace(/,/, ''))

                default:
                  return cell
              }
            })
          )
        ]

        this.setState({ values })
      })
      .catch(() => this.setState({ error: true }))
  }

  render() {
    const { source, hAxisTitle, hideLegend, legendPosition, type, vAxisTitle, ...props } = this.props
    const { error, values } = this.state

    if (error || !values) {
      return null
    }

    const options = {
      ...props,
      legend: {
        position: hideLegend ? 'none' : legendPosition
      },
      hAxis: { title: hAxisTitle },
      vAxis: { title: vAxisTitle }
    }

    return (
      <figure>
        <S.Chart>
          <S.Content>
            <Charts.Chart chartType={`${type}Chart`} data={values} height="100%" options={options} width="100%" />
          </S.Content>
        </S.Chart>

        {source && (
          <S.Source>
            <B.Text size="small" variant="neutral-1-60">
              Source : <Markdown options={markdownOptions}>{source}</Markdown>
            </B.Text>
          </S.Source>
        )}
      </figure>
    )
  }
}
