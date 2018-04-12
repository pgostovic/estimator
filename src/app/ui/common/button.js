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
  height: 45px;
  width: 100%;
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
`;

export default Button;
