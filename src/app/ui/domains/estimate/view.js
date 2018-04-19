import React from 'react';
import PropTypes from 'prop-types';

import styled from '../../../../lib/styled';
import Modal from '../../common/modal';
import Query from './query';
import Details from './details';
import EmptyDetails from './emptyDetails';


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
      {props.results && <Details {...props} />}
      {!props.results && <EmptyDetails {...props} />}
    </Frame>
  </Modal>
);

View.propTypes = {
  onClose: PropTypes.func.isRequired,
  results: PropTypes.object, // don't know the shape of this yet
};

View.defaultProps = {
  results: null,
};

export default View;
