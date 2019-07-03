import styled from 'styled-components'

import { colors, g, tablet } from '../../../../core'

export const Hero = styled.div`
  background-color: ${colors.primary2.default};
  background-image: linear-gradient(${colors.primary2.fade(80)}, ${colors.primary2.fade(80)}),
    url('https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1552925528/website/guide/hero-guide-mobile.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%, auto 100%;
  color: ${colors.white};

  @media only screen and (min-width: ${tablet.min}) {
    background-position: left center;
    background-image: url('https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1552922891/website/guide/hero-guide-desktop.png');
    background-size: auto 100%;
  }
`

export const Title = styled.div`
  padding-bottom: ${g(9)};
  padding-left: ${g(2)};
  padding-right: ${g(2)};
  padding-top: ${g(5)};
  text-align: center;

  @media only screen and (min-width: ${tablet.min}) {
    margin-left: auto;
    padding-bottom: ${g(12)};
    padding-left: 0;
    padding-right: 0;
    padding-top: ${g(8)};
    text-align: left;
    width: 50%;
  }
`
