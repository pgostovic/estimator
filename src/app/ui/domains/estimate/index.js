import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';

import View from './view';
import {
  setQueryAction,
  fetchMakesAction,
  fetchModelsAction,
  fetchSubModelsAction,
  clearModelsAction,
  clearSubModelsAction,
  fetchEstimateAction,
} from '../../../store/estimate/actions';
import { setLeadAction } from '../../../store/lead/actions';


const stateConnect = ({
  estimate: {
    query, makes, models, subModels, estimateResults,
  },
  lead,
}) => ({
  query, makes, models, subModels, estimateResults, lead,
});

const dispatchConnect = dispatch => ({
  setQuery: (name, value) => dispatch(setQueryAction(name, value)),
  setLead: (name, value) => dispatch(setLeadAction(name, value)),
  fetchMakes: () => dispatch(fetchMakesAction()),
  fetchModels: make => dispatch(fetchModelsAction(make)),
  fetchSubModels: (make, model) => dispatch(fetchSubModelsAction(make, model)),
  clearModels: () => dispatch(clearModelsAction()),
  clearSubModels: () => dispatch(clearSubModelsAction()),
  fetchEstimate: (year, make, model, trim, mileage) => dispatch(fetchEstimateAction(year, make, model, trim, mileage)),
});

@connect(stateConnect, dispatchConnect)
class Estimate extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    setQuery: PropTypes.func.isRequired,
    setLead: PropTypes.func.isRequired,
    fetchMakes: PropTypes.func.isRequired,
    fetchModels: PropTypes.func.isRequired,
    fetchSubModels: PropTypes.func.isRequired,
    clearModels: PropTypes.func.isRequired,
    clearSubModels: PropTypes.func.isRequired,
    fetchEstimate: PropTypes.func.isRequired,
    isLong: PropTypes.bool,
    query: PropTypes.objectOf(PropTypes.string).isRequired,
    makes: PropTypes.arrayOf(PropTypes.string).isRequired,
    models: PropTypes.arrayOf(PropTypes.string).isRequired,
    subModels: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  static defaultProps = {
    isLong: false,
  };

  componentDidMount() {
    const { fetchMakes } = this.props;

    fetchMakes();
  }

  @autobind
  onLeadChange(name, value) {
    const { setLead } = this.props;

    setLead(name, value);
  }

  @autobind
  onQueryChange(name, value) {
    const {
      query: { make },
      setQuery,
      fetchModels,
      fetchSubModels,
      clearModels,
      clearSubModels,
    } = this.props;

    setQuery(name, value);

    /**
     * Need to unset some query values in certain situations. For example,
     * if a user has already selected a model and trim but then changes the make,
     * then the selected model and trim are no longer relevant.
     */
    if (name === 'make') {
      fetchModels(value);
      setQuery('model', undefined);
      setQuery('trim', undefined);
      clearModels();
      clearSubModels();
    } else if (name === 'model') {
      fetchSubModels(make, value);
      setQuery('trim', undefined);
      clearSubModels();
    }
  }

  @autobind
  onQuerySubmit() {
    const {
      fetchEstimate,
      query: {
        year, make, model, trim, mileage,
      },
    } = this.props;

    fetchEstimate(year, make, model, trim, mileage);
  }

  render() {
    return (
      <View
        onQueryChange={this.onQueryChange}
        onQuerySubmit={this.onQuerySubmit}
        onLeadChange={this.onLeadChange}
        {...this.props}
      />
    );
  }
}

export default Estimate;
