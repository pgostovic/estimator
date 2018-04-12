import React from 'react';
import PropTypes from 'prop-types';

import styled from '../../../../lib/styled';
import { currency } from '../../../../lib/text';
import { colorWhite, colorMediumGrey, colorGreen, fontSizeMediumLarge, fontWeightSemiBold, fontWeightExtraBold, colorDarkBlack } from '../../style/variables';


const Box = styled.div`
  flex: 1;
  background-color: ${colorWhite};
  padding: 18px 30px;
  margin-left: 25px;
  border-radius: 5px;
  box-shadow: 0 0 12px 0 ${colorDarkBlack.alpha(0.05)};

  &:first-child {
    margin-left: 0;
  }
`;

const Title = styled.label`
  color: ${colorMediumGrey};
  font-size: ${fontSizeMediumLarge};
  font-weight: ${fontWeightSemiBold};
  line-height: 24px;
`;

const Value = styled.div`
  color: ${colorGreen};
  font-size: 44px;
  font-weight: ${fontWeightExtraBold};
  line-height: 53px;
`;

const EstimateValue = ({ title, value }) => (
  <Box>
    <Title>{title}</Title>
    <Value>{currency(value)}</Value>
  </Box>
);

EstimateValue.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default EstimateValue;
