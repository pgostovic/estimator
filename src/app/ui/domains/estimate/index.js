import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';

import View from './view';
import { setQueryAction, fetchMakesAction, fetchModelsAction, fetchSubModelsAction } from '../../../store/estimate/actions';


const stateConnect = ({
  estimate: {
    query, makes, models, subModels,
  },
}) => ({
  query, makes, models, subModels,
});

const dispatchConnect = dispatch => ({
  setQuery: (name, value) => dispatch(setQueryAction(name, value)),
  fetchMakes: () => dispatch(fetchMakesAction()),
  fetchModels: make => dispatch(fetchModelsAction(make)),
  fetchSubModels: (make, model) => dispatch(fetchSubModelsAction(make, model)),
});

@connect(stateConnect, dispatchConnect)
class Estimate extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    setQuery: PropTypes.func.isRequired,
    fetchMakes: PropTypes.func.isRequired,
    fetchModels: PropTypes.func.isRequired,
    fetchSubModels: PropTypes.func.isRequired,
    query: PropTypes.objectOf(PropTypes.string).isRequired,
    makes: PropTypes.arrayOf(PropTypes.string).isRequired,
    models: PropTypes.arrayOf(PropTypes.string).isRequired,
    subModels: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  componentDidMount() {
    const { fetchMakes } = this.props;

    fetchMakes();
  }

  @autobind
  onQueryChange(name, value) {
    const {
      query: { make },
      setQuery,
      fetchModels,
      fetchSubModels,
    } = this.props;

    setQuery(name, value);

    /**
     * May need to unset some query values in certain situations. For example,
     * if a user has already selected a model and trim but then changes the make,
     * then the selected model and trim are no longer relevant.
     */
    if (name === 'make') {
      fetchModels(value);
      setQuery('model', undefined);
      setQuery('trim', undefined);
    } else if (name === 'model') {
      fetchSubModels(make, value);
      setQuery('trim', undefined);
    }
  }

  render() {
    return <View onQueryChange={this.onQueryChange} {...this.props} />;
  }
}

export default Estimate;
