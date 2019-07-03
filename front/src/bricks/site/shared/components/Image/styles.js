import styled, { css } from 'styled-components'

import { colors, g, tablet } from '../../../../core'

export const Figure = styled.figure`
  position: relative;

  ${({ isImg, isVisible }) =>
    isImg &&
    !isVisible &&
    css`
      width: 100%;
      height: 100%;
    `}
`

export const Caption = styled.figcaption`
  font-style: italic;
  margin-top: ${g(1)};

  @media screen and (min-width: ${tablet.min}) {
    padding: 0 ${g(3)};
  }

  a {
    text-decoration: underline;

    &:focus,
    &:hover {
      outline: 0px transparent;
      text-decoration: none;
    }
  }
`

export const Image = styled.div`
  background-color: ${colors.neutral1.light};
  border-radius: ${g(1 / 2)};
  overflow: hidden;
  position: relative;
  transition: background-color 400ms ease-out;

  ${({ full }) =>
    !full &&
    css`
      width: 50%;
      margin: auto;
    `}

  ${({ isLoaded }) =>
    isLoaded &&
    css`
      background-color: transparent;
    `}

  img {
    display: block;
    width: 100%;
  }
`

export const SizedImage = styled(Image)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 51.3513%;

  img {
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 200%;
  }
`

export const Img = styled.img`
  display: block;
  width: 100%;
`
