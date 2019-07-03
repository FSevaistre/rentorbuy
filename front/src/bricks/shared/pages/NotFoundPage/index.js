import React, { Component } from 'react'
import { NotFound } from '../../../index'
import './NotFoundPage.scss'

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="not-found-page">
        <NotFound />
      </div>
    )
  }
}
