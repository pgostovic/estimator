import React from 'react';
import PropTypes from 'prop-types';

import styled from '../../../../lib/styled';
import Placeholder from '../../common/placeholder';
import V from '../../common/v';
import { colorOffWhite, paddingFrame } from '../../style/variables';


const Frame = styled.div`
  background-color: ${colorOffWhite};
  padding: ${paddingFrame};
  flex: 1;

  .values-row {
    display: flex;

    & > div:first-child {
      margin-right: 25px;
    }
  }

  .text-app-row {
    display: flex;

    .space {
      flex: 1;
    }

    & > div:last-child {
      margin-left: 10px;
    }
  }

  .form-row {
    display: flex;

    .form {
      padding-left: 25px;
      flex: 1;
    }
  }
`;

const EmptyDetails = ({ isLong }) => (
  <Frame>
    <Placeholder rounded w={170} h={25} />
    <V px={24} />
    <div className="values-row">
      <Placeholder w={255} h={124} />
      <Placeholder w={255} h={124} />
    </div>
    <V px={30} />
    <Placeholder rounded w={239} h={25} />
    <V px={30} />
    <Placeholder light rounded w={509} h={17} />
    <V px={11} />
    <Placeholder light rounded w={519} h={17} />
    <V px={11} />
    <Placeholder light rounded w={489} h={17} />
    <V px={11} />
    <Placeholder light rounded w={479} h={17} />
    <V px={25} />
    {isLong ?
      <div>
        <div className="text-app-row">
          <Placeholder light w={205} h={46} />
          <div className="space" />
          <Placeholder light w={46} h={46} />
          <Placeholder light w={46} h={46} />
        </div>
        <V px={41} />
        <Placeholder h={388} />
      </div>
      :
      <div className="form-row">
        <Placeholder w={295} h={214} />
        <div className="form">
          <Placeholder light h={46} />
          <V px={10} />
          <Placeholder light h={46} />
          <V px={10} />
          <Placeholder light h={46} />
          <V px={10} />
          <Placeholder light h={46} />
        </div>
      </div>
    }
    <V px={37} />
    <Placeholder light rounded w={105} h={10} />
    <V px={7} />
    <Placeholder light rounded w={505} h={10} />
    <V px={7} />
    <Placeholder light rounded w={395} h={10} />
    <V px={7} />
    <Placeholder light rounded w={515} h={10} />
    <V px={7} />
    <Placeholder light rounded w={515} h={10} />
    <V px={7} />
    <Placeholder light rounded w={145} h={10} />
    <V px={160} />
  </Frame>
);

EmptyDetails.propTypes = {
  isLong: PropTypes.bool.isRequired,
};

export default EmptyDetails;
