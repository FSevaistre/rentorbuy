import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { BubbleChat, Dialog, DialogTemplate, Content, FormField, TextField, SelectField, Text } from '../../../index'
import { OnboardingMessage } from '../../templates/OnboardingTemplate'
import './OnboardingCalendar.scss'

const OnboardingCalendar = memo(
  ({ onOpen, isOpen, onClose, onValidate, options, onSelect, selected, textValue, onChangeText }) => (
    <div className="onboarding-calendar">
      <OnboardingMessage>
        <BubbleChat hideAvatar>
          Aucun créneau ne vous convient ?{' '}
          <Text variant="primary-1">
            <span onClick={onOpen} className="onboarding-calendar--link">
              Indiquez vos disponibilités
            </span>
          </Text>
        </BubbleChat>
      </OnboardingMessage>
      <Dialog isOpen={isOpen} onRequestClose={onClose} format="overflow-initial">
        <DialogTemplate
          navbarProps={{ variant: 'white', title: 'Vos disponibilités', iconLeft: 'cross', iconLeftAction: onClose }}
          buttonProps={{ children: 'valider', onClick: onValidate, disabled: !selected || textValue === '' }}
        >
          <Content>
            <FormField label="Vous souhaitez être contacté le">
              <TextField placeholder="Lundi 1 Janvier" value={textValue} onChange={onChangeText} />
            </FormField>
            <FormField label="Entre">
              <SelectField
                format="form"
                options={options}
                onChange={onSelect}
                value={selected}
                placeholder="12h et 14h"
              />
            </FormField>
          </Content>
        </DialogTemplate>
      </Dialog>
    </div>
  )
)
OnboardingCalendar.displayName = 'OnboardingCalendar'
OnboardingCalendar.propTypes = {
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onValidate: PropTypes.func,
  isOpen: PropTypes.bool,
  options: PropTypes.array,
  onSelect: PropTypes.func,
  selected: PropTypes.string,
  onChangeText: PropTypes.func,
  textValue: PropTypes.string
}
export default OnboardingCalendar
