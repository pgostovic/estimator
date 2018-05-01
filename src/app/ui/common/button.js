import PropTypes from 'prop-types';
import styled from '../../../lib/styled';

import {
  fontDefault,
  colorBlack,
  colorWhite,
  colorGreen,
  fontSizeSmall,
  fontWeightSemiBold,
} from '../style/variables';


const bgForTheme = (theme = 'green') => {
  switch (theme) {
    case 'green':
      return colorGreen;

    case 'black':
      return colorBlack;

    case 'orange-gradient':
      return 'linear-gradient(178.8deg, #ff9353 0%, #ff5E64 100%)';

    default:
      return 'none';
  }
};

const Button = styled.button`
  font-family: ${fontDefault};
  display: block;
  box-sizing: border-box;
  height: ${props => (props.h ? `${props.h}px` : '45px')};
  width: ${props => (props.w ? `${props.w}px` : '100%')};
  border: none;
  border-radius: 5px;
  color: ${colorWhite};
  background: ${props => bgForTheme(props.theme)};
  font-size: ${fontSizeSmall};
  font-weight: ${fontWeightSemiBold};
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  outline: 0;

  &:active {
    box-shadow: inset 0 0 10px ${colorBlack.alpha(0.5)};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  theme: PropTypes.oneOf(['green', 'orange-gradient', 'black']),
  w: PropTypes.number,
  h: PropTypes.number,
};

Button.defaultProps = {
  theme: null,
  w: null,
  h: null,
};

export default Button;
