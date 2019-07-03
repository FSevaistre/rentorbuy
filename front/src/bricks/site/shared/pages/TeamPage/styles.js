import styled, { css } from 'styled-components'

import { g, colors, breakpoints } from '../../../../core'

export const Section = styled.section``
export const Introduction = styled.p`
  margin-bottom: ${g(3)};
  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 0;
  }
`
export const Image = styled.div`
  display: block;
  border-radius: 4px;
  width: ${g(12)};
  height: ${g(12)};
  overflow: hidden;

  &:first-child {
    margin-right: ${g(1)};
  }
`
export const Pictures = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: ${g(5)} 0;
`

export const Wall = styled.div`
  display: none;
  @media screen and (min-width: ${breakpoints.tablet}) {
    position: absolute;
    display: flex;
    top: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
  }

  &:first-child {
    margin-right: ${g(1)};
    right: 100%;
  }

  &:last-child {
    margin-left: ${g(1)};
    left: 100%;
  }
`
export const WallLine = styled.div`
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    margin-bottom: ${({ top }) => (top ? g(1) : 0)};

    ${Image} {
      background: ${colors.neutral1.light};

      ${({ top }) =>
        top
          ? css`
              &:last-child {
                width: ${g(18)};
              }
            `
          : css`
              &:first-child {
                width: ${g(18)};
              }
            `}
    }
  }
`
export const Team = styled.div`
  border-radius: ${g(1)};
  width: 100%;
  overflow: hidden;
  @media screen and (min-width: ${breakpoints.tablet}) {
    flex: 0 0 auto;
    margin: 0;
  }
`

export const MembersList = styled.ul`
  margin-top: ${g(6)};
  max-width: ${g(90)};
  @media screen and (min-width: ${breakpoints.mobileL}) {
    display: flex;
    flex-wrap: wrap;
    margin-top: ${g(7)};
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-top: ${g(10)};
  }
`
export const Member = styled.li`
  margin-bottom: ${g(6)};
  text-align: center;
  @media screen and (min-width: ${breakpoints.mobileL}) {
    flex: 0 0 50%;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    flex: 0 0 33.33%;
  }
`
export const MemberCard = styled.div`
  display: inline-flex;
  margin-bottom: ${g(3)};
`
export const MemberPictureContent = styled.div`
  padding: ${g(1)} ${g(1)} ${g(3)};
`
export const MemberPicture = styled.div`
  border-radius: 4px;
  background: ${colors.primary1.default};
  width: ${g(15)};
  height: ${g(15)};
  overflow: hidden;
`

export const MemberName = styled.div`
  margin-top: ${g(3)};
  margin-bottom: ${g(1)};
`
export const SectionJoinUs = styled(Section)`
  max-width: ${breakpoints.tablet};
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: flex-end;
    margin: ${g(7)} auto ${g(4)};
  }
`

export const Aside = styled.aside`
  position: relative;
  z-index: 1;
  @media screen and (min-width: ${breakpoints.tablet}) {
    flex: 0 1 400px;
    transform: translate(${g(2)}, ${g(-7)});
    border-radius: ${g()};
    overflow: hidden;
  }
`
export const JoinUsText = styled.div`
  margin-bottom: ${g(4)};
  margin-left: ${g(4)};
  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${g(5)};
  }
`
export const JoinUs = styled.div`
  flex: 0 1 400px;
  text-align: center;
  @media screen and (min-width: ${breakpoints.tablet}) {
    transform: translateX(${g(-2)});
  }
`
