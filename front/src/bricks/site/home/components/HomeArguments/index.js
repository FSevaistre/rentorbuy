import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const HomeArguments = ({ args }) => (
  <S.ArgumentsList>
    <S.Argument>
      <B.Card variant="white" zDepth={1}>
        <B.Content>
          <S.ArgumentTitle>
            <B.SubHeading size="large" variant="primary-1">
              <span
                dangerouslySetInnerHTML={{
                  __html: args.argument_1.title
                }}
              />
            </B.SubHeading>
          </S.ArgumentTitle>

          <B.Text type="p">
            <span
              dangerouslySetInnerHTML={{
                __html: args.argument_1.content
              }}
            />
          </B.Text>
        </B.Content>
      </B.Card>
    </S.Argument>

    <S.Argument>
      <B.Card variant="white" zDepth={1}>
        <B.Content>
          <S.Experts>
            {[
              { name: 'Céline', slug: 'v1557746603/team/celine' },
              { name: 'Eloi', slug: 'v1523625155/team/eloi' },
              { name: 'Leo', slug: 'v1521194046/team/leo' },
              { name: 'Maria', slug: 'v1523625042/team/maria' },
              {
                name: 'Matthieu',
                slug: 'v1548837752/team/matthieu-servigne-2'
              }
            ].map(({ name, slug }) => (
              <S.Expert key={name}>
                <S.ExpertPic>
                  <B.Image
                    description={`Profil de ${name}, expert Pretto`}
                    options="c_scale,h_72,dpr_2.0,q_auto"
                    slug={slug}
                    isImg
                  />
                </S.ExpertPic>
              </S.Expert>
            ))}
          </S.Experts>

          <S.ArgumentTitle>
            <B.SubHeading size="large" variant="primary-1">
              <span
                dangerouslySetInnerHTML={{
                  __html: args.argument_2.title
                }}
              />
            </B.SubHeading>
          </S.ArgumentTitle>

          <B.Text type="p">
            <span
              dangerouslySetInnerHTML={{
                __html: args.argument_2.content
              }}
            />
          </B.Text>
        </B.Content>
      </B.Card>
    </S.Argument>

    <S.Argument>
      <B.Card variant="white" zDepth={1}>
        <B.Content>
          <S.ArgumentTitle>
            <B.SubHeading size="large" variant="primary-1">
              <span
                dangerouslySetInnerHTML={{
                  __html: args.argument_3.title
                }}
              />
            </B.SubHeading>
          </S.ArgumentTitle>

          <B.Text type="p">
            <span
              dangerouslySetInnerHTML={{
                __html: args.argument_3.content
              }}
            />
          </B.Text>
        </B.Content>
      </B.Card>
    </S.Argument>
  </S.ArgumentsList>
)
const ArgumentType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
})

HomeArguments.propTypes = {
  /** Arguments of page. */
  args: PropTypes.shape({
    argument_1: ArgumentType,
    argument_2: ArgumentType,
    argument_3: ArgumentType
  }).isRequired
}

export default memo(HomeArguments)
