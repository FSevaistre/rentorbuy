import styled from 'styled-components'

import { g, colors, breakpoints } from '../../../../core'

export const Banks = styled.ul`
  position: relative;
  top: ${g(-2)};
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
  }
`
export const Logo = styled.div`
  margin-right: ${g(3)};
  width: ${g(6)};
  height: ${g(6)};
  border-radius: ${g(1)};
  overflow: hidden;
`
export const Container = styled.div`
  display: flex;
`

export const Content = styled.div`
  flex-grow: 1;
  overflow: hidden;
`
export const Bank = styled.li`
  display: flex;
  margin-bottom: ${g(2)};
  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-right: ${g(3)};
    margin-bottom: ${g(3)};
    width: calc(50% - ${g(3 / 2)});

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  @media screen and (min-width: ${breakpoints.laptop}) {
    width: calc(33.33% - ${g(2)});

    &:nth-child(2n) {
      margin-right: ${g(3)};
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`

export const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const Address = styled.div`
  margin-bottom: ${g(2)};
`
export const Phone = styled.div``

export const Link = styled.a`
  color: ${colors.primary1.default};
  text-decoration: underline;
`
