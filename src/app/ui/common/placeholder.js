import PropTypes from 'prop-types';
import styled from '../../../lib/styled';
import { colorPlaceholderGrey, colorPlaceholderLightGrey } from '../style/variables';


const Placeholder = styled.div`
  background-color: ${props => (props.light ? colorPlaceholderLightGrey : colorPlaceholderGrey)};
  border-radius: ${props => (props.rounded ? '9999px' : '5px')};
  width: ${props => (props.w ? `${props.w}px` : 'default')};
  height: ${props => (props.h ? `${props.h}px` : 'default')};
`;

Placeholder.propTypes = {
  light: PropTypes.bool,
  rounded: PropTypes.bool,
  w: PropTypes.number,
  h: PropTypes.number,
};

Placeholder.defaultProps = {
  light: false,
  rounded: false,
  w: null,
  h: null,
};

export default Placeholder;
