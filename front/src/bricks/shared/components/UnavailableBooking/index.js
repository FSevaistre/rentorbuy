import React from 'react'
import { Card, Content, Text } from '../../../index'
import './UnavailableBooking.scss'

const UnavailableBooking = () => (
  <div className="unavailable-booking">
    <Card variant="error-l">
      <Content>
        <Text variant="error">
          Désolé, votre conseiller n'est pas disponible dans la semaine à venir. Pour toute question concernant votre
          crédit, nous vous invitons à nous appeler au <a href="tel:+33176390641">01 76 39 06 41</a>.
        </Text>
      </Content>
    </Card>
  </div>
)

export default UnavailableBooking
