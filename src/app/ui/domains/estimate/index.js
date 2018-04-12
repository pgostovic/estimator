import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';

import View from './view';
import { setQueryAction } from '../../../store/estimate/actions';


const stateConnect = state => ({
  isOpen: state.ui.isOpen,
  query: state.estimate.query,
});

const dispatchConnect = dispatch => ({
  setQuery: (name, value) => dispatch(setQueryAction(name, value)),
});

@connect(stateConnect, dispatchConnect)
class Estimate extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    setQuery: PropTypes.func.isRequired,
    query: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  @autobind
  onQueryChange(name, value) {
    const { setQuery } = this.props;
    setQuery(name, value);
  }

  render() {
    const { onClose, query } = this.props;

    return <View onClose={onClose} onQueryChange={this.onQueryChange} query={query} />;
  }
}

export default Estimate;
