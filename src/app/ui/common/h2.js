import styled from '../../../lib/styled';

import {
  colorBlack,
  fontSizeMedium,
  fontWeightBold,
  marginDefault,
} from '../style/variables';


const H2 = styled.h1`
  color: ${colorBlack};
  font-size: ${fontSizeMedium};
  font-weight: ${fontWeightBold};
  line-height: 26px;
  padding: 0;
  margin-top: ${props => (props.noTopMargin ? 0 : marginDefault)};
  margin-bottom: ${props => (props.noBottomMargin ? 0 : marginDefault)};
`;

export default H2;
