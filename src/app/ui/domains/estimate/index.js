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
  createTradeInAction,
} from '../../../store/estimate/actions';
import { setLeadAction } from '../../../store/lead/actions';
import { router } from '../../../../lib/router';


const stateConnect = ({
  estimate: {
    query, makes, models, subModels, estimateResults, tradeInResults,
  },
  lead,
}) => ({
  query, makes, models, subModels, estimateResults, lead, done: !!tradeInResults,
});

const dispatchConnect = dispatch => ({
  setQuery: (name, value, text) => dispatch(setQueryAction(name, value, text)),
  setLead: (name, value) => dispatch(setLeadAction(name, value)),
  fetchMakes: () => dispatch(fetchMakesAction()),
  fetchModels: make => dispatch(fetchModelsAction(make)),
  fetchSubModels: (make, model) => dispatch(fetchSubModelsAction(make, model)),
  clearModels: () => dispatch(clearModelsAction()),
  clearSubModels: () => dispatch(clearSubModelsAction()),
  fetchEstimate: (year, make, model, trim, mileage) => dispatch(fetchEstimateAction(year, make, model, trim, mileage)),
  createTradeIn: (rooftopId, name, email, phoneNumber, year, makeId, modelId, subModelId, mileageKms) => dispatch(createTradeInAction(rooftopId, name, email, phoneNumber, year, makeId, modelId, subModelId, mileageKms)),
});

@connect(stateConnect, dispatchConnect)
class Estimate extends React.Component {
  static propTypes = {
    rooftopId: PropTypes.string.isRequired,
    isLong: PropTypes.bool,
    onClose: PropTypes.func.isRequired,

    // connected state
    query: PropTypes.objectOf(PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })).isRequired,
    lead: PropTypes.objectOf(PropTypes.string).isRequired,
    makes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    models: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    subModels: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    done: PropTypes.bool.isRequired,

    // connected dispatch
    setQuery: PropTypes.func.isRequired,
    setLead: PropTypes.func.isRequired,
    fetchMakes: PropTypes.func.isRequired,
    fetchModels: PropTypes.func.isRequired,
    fetchSubModels: PropTypes.func.isRequired,
    clearModels: PropTypes.func.isRequired,
    clearSubModels: PropTypes.func.isRequired,
    fetchEstimate: PropTypes.func.isRequired,
    createTradeIn: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isLong: false,
  };

  componentDidMount() {
    const { fetchMakes } = this.props;

    fetchMakes();
  }

  shouldComponentUpdate(nextProps) {
    const { done } = nextProps;

    if (done) {
      router().push('/summary');
      return false;
    }
    return true;
  }

  @autobind
  onLeadChange(name, value) {
    const { setLead } = this.props;

    setLead(name, value);
  }

  @autobind
  onQueryChange(name, value, text) {
    const {
      query: { make },
      setQuery,
      fetchModels,
      fetchSubModels,
      clearModels,
      clearSubModels,
    } = this.props;

    setQuery(name, value, text);

    /**
     * Need to unset some query values in certain situations. For example,
     * if a user has already selected a model and trim but then changes the make,
     * then the selected model and trim are no longer relevant.
     */
    if (name === 'make') {
      fetchModels(text);
      setQuery('model', undefined);
      setQuery('trim', undefined);
      clearModels();
      clearSubModels();
    } else if (name === 'model') {
      fetchSubModels(make.text, text);
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

  @autobind
  createTradeIn() {
    const {
      rooftopId,
      query: {
        year, make, model, trim, mileage,
      },
      lead: {
        name, email, phone, phoneOverride,
      },
      createTradeIn,
    } = this.props;

    createTradeIn(rooftopId, name, email, phoneOverride || phone, year.value, make.value, model.value, trim.value, mileage.value);
  }

  render() {
    return (
      <View
        onQueryChange={this.onQueryChange}
        onQuerySubmit={this.onQuerySubmit}
        onLeadChange={this.onLeadChange}
        onDone={this.createTradeIn}
        {...this.props}
      />
    );
  }
}

export default Estimate;
