import React from 'react'

import * as B from '../../../index'
import * as S from './styles'

const InvitePage = ({ mortgagor }) => (
  <div>
    <S.Wrapper>
      <S.Title>
        <B.Heading>Invitez votre co-emprunteur</B.Heading>
      </S.Title>

      <B.ApplicationFormSection
        description={
          'Invitez votre co-emprunteur pour lui permettre de remplir ses informations et de modifier votre projet.\n\nUne invitation sera envoyée par mail pour lui permettre de se connecter à son compte Pretto et rejoindre votre projet immobilier.'
        }
        helper="Consultez notre article de FAQ concernant le partage de votre projet."
        helperCta={{ href: '#', label: 'Consulter' }}
      />

      <S.Content>
        <S.ContentTitle>
          <B.SubHeading>Souhaitez vous inviter {mortgagor.name} ?</B.SubHeading>
        </S.ContentTitle>

        <S.Invitee>
          <B.Content>
            <S.InviteeContent>
              <S.Initial>
                <strong>{mortgagor.name.slice(0, 1).toUpperCase()}</strong>
              </S.Initial>

              <div>
                <div>
                  <strong>{mortgagor.name}</strong>
                </div>

                <div>{mortgagor.email}</div>
              </div>
            </S.InviteeContent>
          </B.Content>
        </S.Invitee>

        <S.Buttons>
          <S.Button>
            <B.Button textVariant="primary-1" variant="">
              Plus tard
            </B.Button>
          </S.Button>

          <S.Button>
            <B.Button>Inviter</B.Button>
          </S.Button>
        </S.Buttons>
      </S.Content>
    </S.Wrapper>
  </div>
)

export default InvitePage
