import React from 'react';
import PropTypes from 'prop-types';

import styled from '../../../../lib/styled';
import Modal from '../../common/modal';
import Query from './query';
import Details from './details';


const Frame = styled.div`
  display: flex;
  flex-direction: row;
  width: 920px;
  min-height: 100%;
`;

const View = props => (
  <Modal onClose={props.onClose}>
    <Frame>
      <Query {...props} />
      <Details />
    </Frame>
  </Modal>
);

View.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default View;
