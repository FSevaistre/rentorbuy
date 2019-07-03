import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import { Transition } from 'react-transition-group'

import * as B from '../../../index'
import * as S from './styles'

const Option = ({ checked, title, ...props }) => (
  <S.Option checked={checked}>
    {checked && (
      <S.OptionCheckMark>
        <B.Icon name="check" variant="success" />
      </S.OptionCheckMark>
    )}

    <input {...props} checked={checked} type="radio" />

    {title}
  </S.Option>
)

const ApplicationDocumentsFilters = ({ filters, isOpen, onChange, onClose, onToggle, selectedFilters }) => {
  const panelRef = useRef()

  useEffect(() => {
    if (isOpen) {
      panelRef.current.querySelectorAll('input')[0].focus()

      window.addEventListener('keydown', handleKeydown)
    }

    if (!isOpen) {
      window.removeEventListener('keydown', handleKeydown)
    }

    return () => window.removeEventListener('keydown', handleKeydown)
  }, [isOpen])

  const handleChange = event => onChange(event.currentTarget.name, event.currentTarget.value)
  const handleKeydown = event => {
    if (event.keyCode === 27) {
      onClose()
    }
  }

  return (
    <div>
      <S.Controller>
        <S.ControllerAction onClick={onToggle}>
          <S.ControllerActionIcon>
            <B.Icon name="filter" variant="neutral-1-30" />
          </S.ControllerActionIcon>

          <B.Text size="small">Filtrer</B.Text>

          <S.ControllerActionArrow>
            <B.Icon name="arrow-full-bottom" variant="neutral-1-30" />
          </S.ControllerActionArrow>
        </S.ControllerAction>

        <S.Tags>
          {filters
            .filter(
              filter =>
                Object.keys(selectedFilters).includes(filter.slug) &&
                filter.options.some(option => option.slug === selectedFilters[filter.slug])
            )
            .map(filter => filter.options.find(option => option.slug === selectedFilters[filter.slug]).title)
            .map(title => (
              <S.Tag key={title}>
                <B.Text size="small" variant="accent-1">
                  {title}
                </B.Text>
              </S.Tag>
            ))}
        </S.Tags>
      </S.Controller>

      <Transition
        unmountOnExit
        in={isOpen}
        timeout={{
          enter: 10,
          exit: 300
        }}
      >
        {state => (
          <div>
            <S.Overlay isEntered={state === 'entered'} />

            <S.Panel isEntered={state === 'entered'} ref={panelRef}>
              <S.Header>
                <S.Wrapper full>
                  <S.HeaderContent>
                    <S.HeaderClose onClick={onClose}>
                      <B.Icon name="cross" />
                    </S.HeaderClose>

                    <S.HeaderTitle>
                      <B.SubHeading>Filtrer</B.SubHeading>
                    </S.HeaderTitle>
                  </S.HeaderContent>
                </S.Wrapper>
              </S.Header>

              <S.Wrapper full>
                <S.Columns>
                  {filters.map(filter => (
                    <S.Column columns={filters.length} key={filter.slug}>
                      <S.OptionTitle>
                        <B.Text variant="neutral-1-60">{filter.title}</B.Text>
                      </S.OptionTitle>

                      <S.Options>
                        <Option
                          checked={!selectedFilters[filter.slug]}
                          name={filter.slug}
                          onChange={handleChange}
                          title={filter.all}
                          value=""
                        />

                        {filter.options.map(option => (
                          <Option
                            checked={selectedFilters[filter.slug] === option.slug}
                            key={option.slug}
                            name={filter.slug}
                            onChange={handleChange}
                            title={option.title}
                            value={option.slug}
                          />
                        ))}
                      </S.Options>
                    </S.Column>
                  ))}
                </S.Columns>

                <S.Footer>
                  <B.Button onClick={onClose}>Enregistrer</B.Button>
                </S.Footer>
              </S.Wrapper>
            </S.Panel>
          </div>
        )}
      </Transition>
    </div>
  )
}

ApplicationDocumentsFilters.defaultProps = {
  isOpen: false
}

ApplicationDocumentsFilters.propTypes = {
  /** All possible filters. */
  filters: PropTypes.array.isRequired,
  /** Whether or not the filter panel is opened. */
  isOpen: PropTypes.bool,
  /** Event handler triggered when a filter is being changed. */
  onChange: PropTypes.func.isRequired,
  /** Selected filters. */
  selectedFilters: PropTypes.object.isRequired
}

export default ApplicationDocumentsFilters
