import React from 'react';
import PropTypes from 'prop-types';
import styled from '../../../lib/styled';

import {
  fontDefault,
  colorBlack,
  colorGrey,
  colorLightGrey,
  fontSizeSmall,
} from '../style/variables';


const InputOuter = styled.div`
  position: relative;

  &:after {
    content: '${props => props.suffix}';
    position: absolute;
    right: 18px;
    top: 10px;
    color: ${colorGrey};
    font-size: ${fontSizeSmall};
  }
`;

const InputInner = styled.input`
  font-family: ${fontDefault};
  display: block;
  box-sizing: border-box;
  height: 45px;
  width: 100%;
  color: ${colorBlack};
  border: 2px solid ${colorLightGrey};
  border-radius: 5px;
  appearance: none;
  padding-left: 20px;
  padding-right: ${props => (props.suffix ? '45px' : '20px')};
  font-size: ${fontSizeSmall};
  margin: 10px 0;

  &::placeholder {
    color: ${colorGrey};
  }
`;

const Input = props => (
  <InputOuter suffix={props.suffix}>
    <InputInner {...props} />
  </InputOuter>
);

Input.propTypes = {
  suffix: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  suffix: null,
  type: 'text',
};

export default Input;
