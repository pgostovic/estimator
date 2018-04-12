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


const SelectOuter = styled.div`
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 17px;
    right: 20px;
    width: 5px;
    height: 5px;
    border-right: 2px solid ${colorLightGrey};
    border-bottom: 2px solid ${colorLightGrey};
    transform: rotate(45deg);
    transform-origin: center;
  }
`;

const SelectInner = styled.select`
  font-family: ${fontDefault};
  display: block;
  box-sizing: border-box;
  height: 45px;
  width: 100%;
  border: 2px solid ${colorLightGrey};
  border-radius: 5px;
  appearance: none;
  padding-left: 20px;
  padding-right: 30px;
  color: ${colorBlack};
  background-color: transparent;
  font-size: ${fontSizeSmall};
  margin: 10px 0;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &.placeholder {
    color: ${colorGrey}
  }
`;


const Select = props => {
  const { placeholder, children, value } = props;
  const showPlaceholder = !!placeholder && !value;

  return (
    <SelectOuter>
      <SelectInner
        disabled={!children}
        className={showPlaceholder && 'placeholder'}
        defaultValue={showPlaceholder ? 'select-ph' : undefined}
        {...props}
      >
        {showPlaceholder && <option disabled value="select-ph">{placeholder}</option>}
        {children}
      </SelectInner>
    </SelectOuter>
  );
};

Select.propTypes = {
  children: PropTypes.node,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  children: null,
  placeholder: null,
  value: undefined,
  onChange: () => {},
};

export default Select;
