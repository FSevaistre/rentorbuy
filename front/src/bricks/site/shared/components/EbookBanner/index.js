import React, { memo, Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../../index'
import * as S from './styles'

const EbookBanner = ({ onSubscribe, loading, subscribed, standAlone }) => {
  const [email, setEmail] = useState('')
  const [optin, setOptin] = useState(false)
  const handleChangeInput = value => setEmail(value)
  const handleChangeOptin = () => setOptin(!optin)
  const handleSubscribe = e => {
    e.preventDefault()
    onSubscribe(email, optin)
  }
  return (
    <S.Wrapper standAlone={standAlone}>
      <B.Card variant="primary-2-d">
        <S.Banner>
          {loading && <B.Spinner overlay />}
          <S.Body>
            <div>
              <S.Title>
                <B.SubHeading size="large" variant="white">
                  {onSubscribe ? 'Découvrez le guide de l’acheteur' : 'De la recherche du bien au crédit'}
                </B.SubHeading>
              </S.Title>

              <S.Description>
                <B.Text variant="white">
                  Soyez prêt pour votre premier achat immobilier. Tous nos conseils sont réunis dans un ebook gratuit !
                </B.Text>
              </S.Description>
            </div>
            {onSubscribe ? (
              <div>
                {!subscribed && (
                  <Fragment>
                    <S.Form onSubmit={handleSubscribe}>
                      <S.Email>
                        <B.TextField
                          onChange={handleChangeInput}
                          type="email"
                          value={email}
                          format="rounded"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Votre adresse email"
                          required
                        />
                        <S.Button>
                          <B.Button
                            type="submit"
                            name="subscribe"
                            className="ebook-download--button button-small"
                            format="circle"
                            size="x-small"
                            variant="accent-1"
                          >
                            <B.Text>
                              <B.Icon name="arrow-right" />
                            </B.Text>
                          </B.Button>
                        </S.Button>
                      </S.Email>
                    </S.Form>
                    <S.Optin>
                      <B.Checkbox
                        id="ebook"
                        onChange={handleChangeOptin}
                        checked={optin}
                        variant="white"
                        uncheckedVariant="white"
                      />
                      <S.Label onClick={handleChangeOptin}>
                        <B.Text size="small" variant="white">
                          Je souhaite recevoir des conseils sur le prêt immobilier
                        </B.Text>
                      </S.Label>
                    </S.Optin>
                  </Fragment>
                )}
                {subscribed && (
                  <B.Card variant="white" zDepth={1}>
                    <B.Content>
                      <B.SubHeading size="small" type="h4">
                        Merci !
                      </B.SubHeading>
                      <p>
                        <B.Text size="small" type="span">
                          Le Guide de l’achat immobilier vous attend dans votre boîte mail.
                        </B.Text>
                      </p>
                      <p>
                        <B.Text size="small" type="span">
                          À bientôt !
                        </B.Text>
                      </p>
                    </B.Content>
                  </B.Card>
                )}
              </div>
            ) : (
              <B.Button href="https://extra.pretto.fr/guide-acheteur/" variant="accent-1">
                Télécharger
              </B.Button>
            )}
          </S.Body>

          <S.Cover>
            <B.Card zDepth={2} format={['small-radius', 'full', 'full-height']}>
              <B.Image
                options="c_scale,w_480,q_auto"
                slug="v1553003467/website/guide/ebook_cover"
                description="cover ebook Pretto"
                isImg
              />
            </B.Card>
          </S.Cover>
        </S.Banner>
      </B.Card>
    </S.Wrapper>
  )
}

EbookBanner.propTypes = {
  onSubscribe: PropTypes.func,
  loading: PropTypes.bool,
  subscribed: PropTypes.bool,
  standAlone: PropTypes.bool
}

export default memo(EbookBanner)
