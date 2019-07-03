import styled from 'styled-components'

import { g, layout, tablet } from '../../../../core'

export const Chapters = styled.div`
  margin-bottom: ${g(5)};

  @media only screen and (min-width: ${tablet.min}) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 ${g(-3 / 2)} ${g(5)};
    padding: 0;
  }
`

export const Chapter = styled.div`
  & + & {
    margin-top: ${g(2)};
  }

  @media only screen and (min-width: ${tablet.min}) {
    display: flex;
    flex-basis: 50%;
    padding: 0 ${g(3 / 2)};

    & + & {
      margin-top: 0;
    }

    &:nth-child(n + 3) {
      margin-top: ${g(3)};
    }
  }
`

export const Page = styled.div`
  margin-bottom: ${g(10)};
`

export const SearchField = styled.div`
  margin-bottom: ${g(8)};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${g(-4)};
  padding: 0 ${g(2)};

  @media only screen and (min-width: ${tablet.min}) {
    padding: 0;
    width: 70%;
  }
`

export const ExtraPages = styled.div`
  margin-bottom: ${g(12)};

  @media only screen and (min-width: ${layout.desktop.min}) {
    display: flex;
  }
`
export const Ebook = styled.div`
  margin-bottom: ${g(3)};

  @media only screen and (min-width: ${layout.desktop.min}) {
    flex: 2 1;
    margin-right: ${g(3)};
    margin-bottom: 0;
  }

  @media only screen and (min-width: ${layout.desktop.default}) {
    flex: 3 1;
  }
`
export const Attachments = styled.div`
  @media only screen and (min-width: ${layout.desktop.min}) {
    flex: 1 2;
  }
`
