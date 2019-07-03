import styled, { css } from 'styled-components'

import { colors, g, layout, tablet } from '../../../core'

export const DocumentListHeader = styled.div`
  padding: ${g(3)} ${g(2)};

  @media only screen and (min-width: ${tablet.min}) {
    padding: 0 0 ${g(3)};
  }
`

export const ErrorMessage = styled.div`
  margin-bottom: ${g(3)};
`

export const Header = styled.div`
  padding: ${g(2)} 0;

  @media only screen and (min-width: ${tablet.min}) {
    padding-top: ${g(4)};
  }
`

export const Information = styled.div`
  background-color: ${colors.neutral1.light};
  position: relative;

  @media screen and (min-width: ${tablet.min}) {
    height: 100%;
  }

  @media screen and (min-width: ${tablet.max}) {
    flex-basis: ${100 / 3}%;
    height: auto;
    max-width: ${100 / 3}%;
    order: 2;

    &:before {
      background-color: ${colors.neutral1.light};
      content: '';
      bottom: 0;
      left: 0;
      position: absolute;
      right: ${g(-3)};
      top: 0;
      z-index: -1;
    }
  }

  @media screen and (min-width: ${tablet.max}) {
    padding-left: ${g(2)};
  }

  @media screen and (min-width: ${layout.desktop.default}) {
    &:before {
      right: -50vw;
    }
  }
`

export const Metadata = styled.div`
  @media only screen and (min-width: ${tablet.min}) {
    display: flex;
    justify-content: space-between;
  }
`

export const MetadataItem = styled.div`
  align-items: center;
  display: flex;

  @media only screen and (min-width: ${tablet.min}) {
    flex-basis: ${({ numberOfItems }) => 100 / numberOfItems}%;
    max-width: ${({ numberOfItems }) => 100 / numberOfItems}%;
  }

  & + & {
    margin-top: ${g(2)};

    @media only screen and (min-width: ${tablet.min}) {
      margin-top: 0;
    }
  }
`

export const MetadataItemIcon = styled.div`
  margin-right: ${g(2)};
`

export const Page = styled.div`
  @media screen and (min-width: ${tablet.min}) {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - (${g(7)} + ${g(8)}));
    overflow: hidden;
    padding-left: ${g(3)};
    position: relative;
  }

  @media screen and (min-width: ${tablet.max}) {
    padding-left: 0;
  }
`

export const Title = styled.div`
  margin-bottom: ${g(2)};
`

export const Upload = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: ${g(2)};
  right: 0;
  z-index: 1;

  @media screen and (min-width: ${tablet.min}) {
    margin-bottom: ${g(6)};
    padding: 0;
    position: static;
  }
`

export const UploadPanel = styled.div`
  padding-bottom: ${g(11)};

  @media screen and (min-width: ${tablet.min}) {
    padding: ${g(3)} 0 ${g(7)};
  }

  @media screen and (min-width: ${tablet.max}) {
    flex-basis: ${(100 / 3) * 2}%;
    max-width: ${(100 / 3) * 2}%;
    padding: ${g(3)} ${g(5)} ${g(7)} 0;
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

export const Content = styled(Wrapper)`
  @media only screen and (min-width: ${tablet.max}) {
    display: flex;
    flex-grow: 1;
  }

  @media only screen and (min-width: ${layout.desktop.default}) {
    width: 100%;
  }
`
