import styled, { injectGlobal } from '../../../lib/styled';

import {
  fontDefault,
  fontWeightThin,
  fontWeightRegular,
  fontWeightSemiBold,
  fontWeightBold,
  fontWeightExtraBold,
  colorDarkGrey,
  fontSizeMedium,
} from './variables';
import proximaNovaThin from '../static/fonts/ProximaNova-Thin.otf';
import proximaNovaRegular from '../static/fonts/ProximaNova-Regular.otf';
import proximaNovaBold from '../static/fonts/ProximaNova-Bold.otf';
import proximaNovaSemibold from '../static/fonts/ProximaNova-Semibold.otf';
import proximaNovaExtrabold from '../static/fonts/ProximaNova-Extrabold.otf';

injectGlobal`
  @font-face {
    font-family: ${fontDefault};
    src: url(${proximaNovaThin}) format('opentype');
    font-weight: ${fontWeightThin};
    font-style: normal;
  }

  @font-face {
    font-family: ${fontDefault};
    src: url(${proximaNovaRegular}) format('opentype');
    font-weight: ${fontWeightRegular};
    font-style: normal;
  }

  @font-face {
    font-family: ${fontDefault};
    src: url(${proximaNovaBold}) format('opentype');
    font-weight: ${fontWeightBold};
    font-style: normal;
  }

  @font-face {
    font-family: ${fontDefault};
    src: url(${proximaNovaSemibold}) format('opentype');
    font-weight: ${fontWeightSemiBold};
    font-style: normal;
  }

  @font-face {
    font-family: ${fontDefault};
    src: url(${proximaNovaExtrabold}) format('opentype');
    font-weight: ${fontWeightExtraBold};
    font-style: normal;
  }
`;

export default styled.article`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${fontDefault};
  color: ${colorDarkGrey};
  font-size: ${fontSizeMedium};
  font-weight: ${fontWeightRegular};
  line-height: 28px;
`;
