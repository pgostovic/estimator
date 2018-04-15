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

export default class View extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onQueryChange: PropTypes.func.isRequired,
    query: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  render() {
    const { onClose, onQueryChange, query } = this.props;

    return (
      <Modal onClose={onClose}>
        <Frame>
          <Query onChange={onQueryChange} query={query} />
          <Details />
        </Frame>
      </Modal>
    );
  }
}
