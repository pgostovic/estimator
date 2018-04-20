import styled from '../../../lib/styled';
import { marginDefault, colorDarkGrey } from '../style/variables';


const P = styled.p`
  color: ${colorDarkGrey};
  padding: 0;
  margin: 0;
  margin-top: ${props => (props.noTopMargin ? 0 : marginDefault)};
  margin-bottom: ${props => (props.noBottomMargin ? 0 : marginDefault)};
`;

export default P;
