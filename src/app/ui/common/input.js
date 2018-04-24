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
  outline: 0;
  padding-left: 20px;
  padding-right: ${props => (props.suffix ? '45px' : '20px')};
  font-size: ${fontSizeSmall};
  margin: 10px 0;

  &::placeholder {
    color: ${colorGrey};
  }

  &:focus {
    border-color: ${colorGrey};
  }
`;

const formatPhone = val => val.replace(/\D/g, '')
  .split('')
  .slice(0, 10)
  .map((c, i) => ([3, 6].includes(i) ? `-${c}` : c))
  .join('');

const formatValue = (type, val) => {
  if (val) {
    switch (type) {
      case 'tel':
      case 'phone':
        return formatPhone(val);

      default:
    }
  }
  return val;
};

const Input = props => (
  <InputOuter suffix={props.suffix}>
    <InputInner
      {...props}
      onChange={e => {
        if (props.onChange) {
          e.target.value = formatValue(props.type, e.target.value);
          props.onChange(e);
        }
      }}
    />
  </InputOuter>
);

Input.propTypes = {
  suffix: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  suffix: null,
  type: 'text',
  value: undefined,
  onChange: undefined,
};

export default Input;
