import styled, { css } from 'styled-components'

import { colors, g, layout, tablet } from '../../../core'

export const Card = styled.div`
  & + & {
    margin-top: ${g(1)};
  }

  @media only screen and (min-width: ${tablet.min}) {
    flex-basis: ${({ ratio }) => ratio * 100}%;
    max-width: ${({ ratio }) => ratio * 100}%;
    padding: 0 ${g(1)};

    & + & {
      margin-top: ${g(2)};
    }
  }
`

export const Cards = styled.div`
  @media only screen and (min-width: ${tablet.min}) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 ${g(-1)};
  }
`

export const Header = styled.header`
  background-color: ${colors.neutral1.light};
  padding: ${g(2)} 0 ${g(3)};

  @media only screen and (min-width: ${tablet.min}) {
    margin-bottom: ${g(5)};
    padding: ${g(4)} 0 ${g(3)};
  }
`

export const HeaderProgress = styled.div`
  margin-bottom: ${g(2)};

  @media only screen and (min-width: ${tablet.min}) {
    align-items: center;
    display: flex;
  }
`

export const HeaderStatus = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-top: ${g(1)};

  @media only screen and (min-width: ${tablet.min}) {
    justify-content: flex-start;
    margin-left: auto;
    margin-top: 0;
  }
`

export const HeaderStatusEmoji = styled.div`
  margin-left: ${g(2)};
`

export const HeaderTitle = styled.div`
  margin-bottom: ${g(2)};
`

export const Page = styled.div`
  background-color: ${colors.neutral1.light};
  overflow: hidden;
  padding-bottom: ${g(5)};

  @media only screen and (min-width: ${tablet.min}) {
    background-color: transparent;
    padding-bottom: ${g(7)};
  }
`

export const Wrapper = styled.div`
  ${({ full }) =>
    !full &&
    css`
      margin: 0 ${g(2)};
    `}

  @media only screen and (min-width: ${tablet.min}) {
    margin: 0 ${g(3)};
  }

  @media only screen and (min-width: ${layout.desktop.default}) {
    margin: 0 auto;
    max-width: ${layout.desktop.default};
    padding: 0 ${g(3)};
  }
`
