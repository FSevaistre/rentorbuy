import PropTypes from 'prop-types'
import React, { memo, Fragment } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const TeamPage = ({ title, content, hasSubMenu, members }) => {
  return (
    <Fragment>
      <S.Section>
        <B.Wrapper full>
          <B.ContentHero title={title} noShare hasSubMenu={hasSubMenu} />
        </B.Wrapper>
        <B.Container>
          <S.Introduction>
            Nous sommes une startup fintech rassemblant des ingénieurs, designers et experts de l’immobilier autour d’un
            grand projet. Grâce à nos algorithmes et une expérience utilisateur exceptionnelle, nous voulons transformer
            le monde du prêt immobilier en le rendant simple pour tous.
          </S.Introduction>
        </B.Container>
        <S.Pictures>
          <B.Container full>
            <S.Wall>
              <S.WallLine top>
                <S.Image>
                  <B.Image
                    options="c_fill,h_192,w_192,q_auto"
                    slug="v1531310628/team/office-5"
                    description="bureaux 1"
                    isImg
                  />
                </S.Image>
                <S.Image>
                  <B.Image options="c_fill,h_192,w_288,q_auto" slug="team/office-1" description="bureaux 2" isImg />
                </S.Image>
              </S.WallLine>
              <S.WallLine>
                <S.Image>
                  <B.Image options="c_fill,h_192,w_288,q_auto" slug="team/office-3" description="bureaux 3" isImg />
                </S.Image>
                <S.Image>
                  <B.Image options="c_fill,h_192,w_192,q_auto" slug="team/office-9" description="bureaux 4" isImg />
                </S.Image>
              </S.WallLine>
            </S.Wall>
            <S.Team>
              <B.Image description="équipe" options="c_fill,h_720,w_1232,q_auto" slug="team/all/pretto-team" isImg />
            </S.Team>
            <S.Wall>
              <S.WallLine top>
                <S.Image>
                  <B.Image options="c_fill,h_192,w_192,q_auto" slug="team/office-2" description="bureaux 5" isImg />
                </S.Image>
                <S.Image>
                  <B.Image options="c_fill,h_192,w_288,q_auto" slug="team/office-6" description="bureaux 6" isImg />
                </S.Image>
              </S.WallLine>
              <S.WallLine>
                <S.Image>
                  <B.Image options="c_fill,h_192,w_288,q_auto" slug="team/office-4" description="bureaux 7" isImg />
                </S.Image>
                <S.Image>
                  <B.Image options="c_fill,h_192,w_192,q_auto" slug="team/office-8" description="bureaux 8" isImg />
                </S.Image>
              </S.WallLine>
            </S.Wall>
          </B.Container>
        </S.Pictures>
      </S.Section>

      <S.Section>
        <B.ContentBlock>{content}</B.ContentBlock>
        <B.Wrapper>
          <S.MembersList>
            {members.map(({ slug, name, title, linkedin }) => {
              return (
                <S.Member key={slug}>
                  <S.MemberCard>
                    <B.Card variant="white" zDepth={2}>
                      <S.MemberPictureContent>
                        <S.MemberPicture>
                          <B.Image
                            options="c_fill,h_240,w_240,q_auto"
                            slug={`team/${slug}`}
                            description={`Profile ${name}`}
                            isImg
                          />
                        </S.MemberPicture>
                      </S.MemberPictureContent>
                    </B.Card>
                  </S.MemberCard>
                  <S.MemberName>
                    <B.Link href={linkedin} target="blank" rel="nofollow">
                      <B.SubHeading>{name}</B.SubHeading>
                    </B.Link>
                  </S.MemberName>
                  <B.Text variant="neutral-1-60">{title}</B.Text>
                </S.Member>
              )
            })}
          </S.MembersList>
        </B.Wrapper>
      </S.Section>

      <S.SectionJoinUs>
        <S.Aside>
          <B.Card>
            <B.Image options="c_fill,h_544,w_800,q_auto" slug="team/hire" description="Équipe Pretto dehors" isImg />
          </B.Card>
        </S.Aside>
        <S.JoinUs>
          <B.Card variant="white" zDepth={2}>
            <B.Content>
              <S.JoinUsText>
                <B.SubHeading type="p">
                  Si vous n’avez pas peur de sortir de votre zone de confort, si vous êtes curieux, performant et
                  attentif aux autres : rejoignez-nous !
                </B.SubHeading>
              </S.JoinUsText>
              <B.Button
                variant="accent-1"
                size="large"
                href="https://www.welcometothejungle.co/companies/pretto/jobs"
                target="blank"
                rel="nofollow"
              >
                Voir les offres
              </B.Button>
            </B.Content>
          </B.Card>
        </S.JoinUs>
      </S.SectionJoinUs>
    </Fragment>
  )
}

TeamPage.propTypes = {
  /** Content of the page (markdown). */
  content: PropTypes.string.isRequired,
  /** Title of the page. */
  title: PropTypes.string.isRequired,
  /** Whether if the page has a sub menu or not. */
  hasSubMenu: PropTypes.bool,
  /** Members of the team */
  members: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      linkedin: PropTypes.string
    })
  )
}

export default memo(TeamPage)
