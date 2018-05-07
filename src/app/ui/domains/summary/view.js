import React from 'react';
import PropTypes from 'prop-types';

import styled from '../../../../lib/styled';
import Modal from '../../common/modal';
import H1 from '../../common/h1';
import { colorMediumGrey } from '../../style/variables';

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  width: 920px;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  color: ${colorMediumGrey};
`;

const View = ({ onClose }) => (
  <Modal onClose={onClose}>
    <Frame>
      <H1>Thank You!</H1>
    </Frame>
  </Modal>
);

View.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default View;
