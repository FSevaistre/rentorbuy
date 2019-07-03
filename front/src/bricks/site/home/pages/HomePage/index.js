import PropTypes from 'prop-types'
import React, { memo } from 'react'
import range from 'lodash/range'

import * as B from '../../../../index'
import * as S from './styles'

const HomePage = ({ title, cta, score, args, banks, steps, press }) => {
  const { count, rate } = score
  return (
    <S.Page>
      <B.HomeHero title={title} cta={cta} score={score} />

      <S.Arguments>
        <S.ArgumentsContent>
          <S.ArgumentsSlider>
            <S.ArgumentsDecoration>
              <S.Waves>
                {range(8, 2).map(index => (
                  <S.Wave index={index} key={index} />
                ))}
              </S.Waves>
            </S.ArgumentsDecoration>

            <S.ViewSlider>
              <B.HomeWindow />
            </S.ViewSlider>
          </S.ArgumentsSlider>

          <B.HomeArguments args={args} />
        </S.ArgumentsContent>
      </S.Arguments>

      <S.Section>
        <B.HomeBanks banks={banks} />
      </S.Section>

      <S.Section>
        <S.SectionTitle>
          <B.Heading type="h2" variant="primary-1">
            Nos clients témoignent
          </B.Heading>
        </S.SectionTitle>

        <B.HomeTestimonies count={count} rate={rate} />
      </S.Section>

      {steps.items.length > 0 && (
        <S.Section>
          <S.SectionTitle>
            <B.Heading type="h2" variant="primary-1">
              {steps.title}
            </B.Heading>
          </S.SectionTitle>

          <B.HomeSteps steps={steps.items} />
        </S.Section>
      )}

      {press.links.length > 0 && (
        <S.Section>
          <S.SectionTitle>
            <B.Heading type="h2" variant="primary-1">
              {press.title}
            </B.Heading>
          </S.SectionTitle>

          <B.HomePress items={press.links} />
        </S.Section>
      )}

      <S.Section>
        <B.FooterCta />
      </S.Section>
    </S.Page>
  )
}

const ArgumentType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
})

HomePage.propTypes = {
  /** Title of header. Can differ with different campaigns. */
  title: PropTypes.string.isRequired,
  /** Call to action of header button. Can differ with different campaigns. */
  cta: PropTypes.string.isRequired,
  /** Trustpilot score. */
  score: PropTypes.shape({
    count: PropTypes.number,
    rate: PropTypes.string
  }),
  /** Arguments of page. */
  args: PropTypes.shape({
    argument_1: ArgumentType,
    argument_2: ArgumentType,
    argument_3: ArgumentType
  }).isRequired,
  /** Partner banks. */
  banks: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired,
  /** Press partners. */
  press: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired,
  /** Steps describing how it works (shown as a timeline). */
  steps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
}

HomePage.defaultProps = {
  score: {
    count: 600,
    rate: '9,5'
  }
}

export default memo(HomePage)
