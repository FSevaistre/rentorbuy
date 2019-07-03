import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Mobile, Desktop } from '../../..'
import moment from 'moment'
import DatePick from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import './DatePicker.scss'

export default class DatePicker extends Component {
  static propTypes = {
    /** DatePicker value. */
    value: PropTypes.any,
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      isDate: moment(props.value).isValid()
    }
  }
  static getDerivedStateFromProps(nextProps) {
    return { isDate: moment(nextProps.value).isValid() }
  }
  handleChangeDesktop = value => {
    if (value) this.props.onChange(value.toDate())
  }
  handleChange = e => {
    let date = e.target.value
    const dateRegEu = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/
    const dateReg = /^\d{4}[/-](0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])$/
    const isDate = date.match(dateRegEu) !== null || date.match(dateReg) !== null
    if (date.match(dateRegEu) !== null) date = moment(date, 'DD/MM/YYYY').toDate()
    else if (date.match(dateReg) !== null) date = moment(date).toDate()
    this.setState({ isDate })
    if (isDate) {
      this.props.onChange(date)
    }
  }
  render() {
    const value = this.state.isDate ? moment(this.props.value) : null
    const mobileValue = value === null ? moment().format('YYYY-MM-DD') : value.format('YYYY-MM-DD')
    let datePickerClass = 'datepicker'
    if (value !== null) datePickerClass += ' datepicker-is-valid'
    let mobileDatePickerClass = 'datepicker--mobile'
    if (value !== null) mobileDatePickerClass += ' datepicker--mobile-is-valid'
    return (
      <span>
        <Mobile>
          <span className={mobileDatePickerClass}>
            <input type="date" value={mobileValue} onChange={this.handleChange} placeholder="jj/mm/aaaa" />
          </span>
        </Mobile>
        <Desktop>
          <span className={datePickerClass}>
            <DatePick
              selected={value}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              dateFormat="DD/MM/YYYY"
              locale="fr"
              placeholderText="jj/mm/aaaa"
              onChange={this.handleChangeDesktop}
            />
          </span>
        </Desktop>
      </span>
    )
  }
}
