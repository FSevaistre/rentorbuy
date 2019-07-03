import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as B from '../../../../index'
import * as S from './styles'

export default class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true)
  }
  handleClickOutside(event) {
    const domNode = this.node

    if (!domNode || !domNode.contains(event.target)) {
      this.props.onClear()
    }
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true)
  }
  handleKeyDown = e => {
    if (e.keyCode === 13) this.props.onValidate()
  }
  render() {
    const { results, search, max, onChange, type, onClear, showMore } = this.props
    const show = !!(results && search)
    return (
      <S.Search ref={node => (this.node = node)}>
        {type === 'header' ? (
          <B.Card zDepth={2} variant="white">
            <S.Field>
              <S.Icon>
                <B.Icon name="search" />
              </S.Icon>
              <S.TextField>
                <B.TextField
                  format="search"
                  id="search"
                  type="search"
                  autoFocus
                  value={search}
                  onChange={onChange}
                  placeholder="Rechercher"
                  onKeyDown={this.handleKeyDown}
                />
              </S.TextField>
            </S.Field>
          </B.Card>
        ) : (
          <S.SearchField>
            <B.SearchField value={search} onChange={onChange} onKeyDown={this.handleKeyDown} />
          </S.SearchField>
        )}
        <S.Results type={type}>
          {show && (
            <B.SearchList results={results.slice(0, max)} showMore={showMore} search={search} onClear={onClear} />
          )}
        </S.Results>
      </S.Search>
    )
  }
}

SearchResults.defaultProps = {
  showMore: false
}

SearchResults.propTypes = {
  results: PropTypes.array,
  search: PropTypes.string,
  type: PropTypes.string,
  max: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onClear: PropTypes.func,
  onValidate: PropTypes.func,
  showMore: PropTypes.bool
}
