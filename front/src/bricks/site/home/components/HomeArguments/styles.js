import styled from 'styled-components'
import { colors, g, layout, breakpoints } from '../../../../core'

export const Argument = styled.div`
  & + & {
    margin-top: ${g(2)};

    @media only screen and (min-width: ${breakpoints.tablet}) {
      margin-top: 0;
    }
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    &:nth-child(1) {
      flex-basis: ${100 / 3}%;
      max-width: ${100 / 3}%;
    }

    &:nth-child(2) {
      flex-basis: 58%;
      max-width: 58%;
    }

    &:nth-child(3) {
      flex-basis: 36%;
      max-width: 36%;
    }

    &:nth-child(2n) {
      margin: ${g(5)} 0 ${g(10)} auto;
    }
  }
`

export const ArgumentsList = styled.div`
  margin-bottom: ${g(-5)};
  padding: ${g(2)} ${g(2)} 0;
  z-index: 0;

  &:after {
    border-right: 100vw solid ${colors.neutral1.light};
    border-top: 7vh solid transparent;
    bottom: ${g(5)};
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: ${layout.desktop.default};
    padding: ${g(14)} ${g(3)} 0;

    &:after {
      border-top-width: 10vh;
    }
  }
`

export const ArgumentTitle = styled.div`
  margin-bottom: ${g(2)};
`

export const Expert = styled.li`
  border: ${g(1 / 4)} solid ${colors.white};
  border-radius: ${g(6)};
  flex-shrink: 0;
  overflow: hidden;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    border-radius: ${g(9)};
  }

  & + & {
    margin-left: ${g(-2)};
  }
`
export const Experts = styled.ul`
  display: flex;
  margin-bottom: ${g(3)};
`

export const ExpertPic = styled.div`
  width: ${g(6)};
  height: ${g(6)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${g(9)};
    height: ${g(9)};
  }
`
