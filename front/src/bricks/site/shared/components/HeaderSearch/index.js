import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import * as B from '../../../../index'
import * as S from './styles'

const HeaderSearch = ({ type, isOpen, onOpen, ...props }) => {
  const searchResultsComponent = <B.SearchResults type={type} {...props} />
  return (
    <S.Container>
      {type === 'header' ? (
        <S.SearchContainer>
          <S.SearchBar>
            <CSSTransition
              in={isOpen || type !== 'header'}
              classNames="transition--slide-right"
              timeout={500}
              unmountOnExit
            >
              {searchResultsComponent}
            </CSSTransition>
          </S.SearchBar>

          <CSSTransition
            in={!(isOpen || type !== 'header')}
            classNames="transition--opacity"
            timeout={500}
            unmountOnExit
          >
            <B.Button onClick={onOpen} size="x-small" variant="neutral-1-l" format="circle">
              <S.Icon>
                <B.Icon name="search" />
              </S.Icon>
            </B.Button>
          </CSSTransition>
        </S.SearchContainer>
      ) : (
        searchResultsComponent
      )}
    </S.Container>
  )
}

HeaderSearch.propTypes = {
  isOpen: PropTypes.bool,
  results: PropTypes.array,
  search: PropTypes.string,
  type: PropTypes.string,
  max: PropTypes.number,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onOpen: PropTypes.func,
  onValidate: PropTypes.func
}

export default memo(HeaderSearch)
