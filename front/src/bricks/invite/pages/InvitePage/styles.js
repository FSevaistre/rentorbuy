import styled from 'styled-components'

import { colors, g, layout, tablet } from '../../../core'

export const Buttons = styled.div`
  padding-top: ${g(4)};

  @media only screen and (min-width: ${tablet.min}) {
    display: flex;
    justify-content: flex-end;
    padding-top: ${g(6)};
  }
`

export const Button = styled.div`
  & + & {
    margin-top: ${g(2)};

    @media only screen and (min-width: ${tablet.min}) {
      margin-left: ${g(2)};
      margin-top: 0;
    }
  }
`

export const Content = styled.div`
  @media only screen and (min-width: ${tablet.min}) {
    padding-right: 40%;
  }
`

export const ContentTitle = styled.div`
  margin-bottom: ${g(2)};
`

export const Initial = styled.div`
  align-items: center;
  background-color: ${colors.accent4.default};
  border-radius: ${g(4)};
  color: ${colors.white};
  display: flex;
  flex-shrink: 0;
  height: ${g(8)};
  justify-content: center;
  margin-right: ${g(3)};
  width: ${g(8)};
`

export const Invitee = styled.div`
  border: 1px solid ${colors.neutral1.fade(20)};
  border-radius: ${g(1 / 2)};
`

export const InviteeContent = styled.div`
  align-items: center;
  display: flex;
`

export const Title = styled.div`
  margin-bottom: ${g(4)};
`

export const Wrapper = styled.div`
  margin: 0 ${g(2)};
  padding: ${g(2)} 0 ${g(5)};

  @media only screen and (min-width: ${tablet.min}) {
    margin: 0 ${g(3)};
    padding: ${g(4)} 0 ${g(7)};
  }

  @media only screen and (min-width: ${layout.desktop.default}) {
    margin: 0 auto;
    max-width: ${layout.desktop.default};
    padding: ${g(4)} ${g(3)} ${g(7)};
  }
`
