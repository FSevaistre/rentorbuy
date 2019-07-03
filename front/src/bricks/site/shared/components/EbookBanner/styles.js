import styled, { css } from 'styled-components'

import { g, tablet, breakpoints } from '../../../../core'

export const Wrapper = styled.div`
  ${({ standAlone }) =>
    standAlone &&
    css`
      margin-top: ${g(5)};
      @media only screen and (min-width: ${breakpoints.laptop}) {
        max-width: ${breakpoints.desktop};
        margin-left: auto;
        margin-right: auto;
        margin-bottom: ${g(5)};
        padding: 0 ${g(5)};
      }
    `}
`

export const Banner = styled.div`
  background-image: url('https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1552571419/ebook/decorations/corner-top-left.svg'),
    url('https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1552571427/ebook/decorations/corner-bottom-right.svg'),
    url('https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1552571434/ebook/decorations/zigzag1.svg'),
    url('https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1552571440/ebook/decorations/zigzag2.svg'),
    url('https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1552571447/ebook/decorations/zigzag3.svg'),
    url('https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1552571447/ebook/decorations/zigzag3.svg');
  background-position: 0 0, 100% 100%, 0 50%, 95% 50%, 5% 60%, 95% 90%;
  background-repeat: no-repeat;
  border-radius: ${g(1 / 2)};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (min-width: ${tablet.min}) {
    background-position: -24px -24px, calc(100% - -24px) calc(100% - -24px), 0 80%, 57% 33%, 60% 10%, 99% 97%;
    flex-direction: row;
  }
`

export const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: ${g(3)} ${g(3)} ${g(5)};
  text-align: center;

  @media screen and (min-width: ${tablet.min}) {
    align-items: flex-start;
    flex-basis: 60%;
    justify-content: space-between;
    padding: ${g(3)};
    text-align: left;
  }
`

export const Cover = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  margin: 0 auto ${g(-1)};
  max-width: ${g(30)};

  @media screen and (min-width: ${tablet.min}) {
    flex: 1;
    padding: ${g(3)} ${g(3)} 0 0;
  }

  img {
    width: 100%;
  }
`

export const Description = styled.div`
  margin-bottom: ${g(3)};
`

export const Title = styled.div`
  margin-bottom: ${g(2)};
`

export const Form = styled.form``

export const Email = styled.div`
  position: relative;
`
export const Button = styled.div`
  position: absolute;
  top: ${g(0.5)};
  right: ${g(0.5)};
  bottom: ${g(0.5)};
`

export const Optin = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${g(3)};
`
export const Label = styled.label`
  cursor: pointer;
`
