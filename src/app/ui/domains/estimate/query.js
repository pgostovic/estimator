import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import styled from '../../../../lib/styled';
import H1 from '../../common/h1';
import P from '../../common/p';
import Select from '../../common/select';
import Input from '../../common/input';
import Button from '../../common/button';
import V from '../../common/v';
import { paddingFrame, colorBlack } from '../../style/variables';


const nextYear = new Date().getFullYear() + 1;
const pastHundredYears = [...Array(100).keys()].map(i => nextYear - i);

export default class Query extends React.Component {
  static propTypes = {
    isLong: PropTypes.bool.isRequired,
    onQueryChange: PropTypes.func.isRequired,
    onQuerySubmit: PropTypes.func.isRequired,
    onLeadChange: PropTypes.func.isRequired,
    query: PropTypes.objectOf(PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })).isRequired,
    lead: PropTypes.objectOf(PropTypes.string).isRequired,
    makes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    models: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    subModels: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    estimateResults: PropTypes.shape({
      low: PropTypes.number,
      high: PropTypes.number,
    }),
  };

  static defaultProps = {
    estimateResults: null,
  };

  @autobind
  onQueryChange(event) {
    const { onQueryChange } = this.props;
    const {
      name, value, selectedIndex, options,
    } = event.target;

    const { text } = options ? options[selectedIndex] : { text: value };

    onQueryChange(name, value, text);
  }

  @autobind
  onLeadChange(event) {
    const { onLeadChange } = this.props;
    const { name, value } = event.target;

    onLeadChange(name, value);
  }

  isFormValid() {
    const {
      isLong,
      query: {
        year, make, model, trim, mileage,
      },
      lead: {
        name, email, phone,
      },
    } = this.props;

    return !!(year.value && make.value && model.value && trim.value && mileage.value && (isLong ? name && email && phone : true));
  }

  render() {
    const {
      isLong,
      query,
      lead,
      makes,
      models,
      subModels,
      onQuerySubmit,
      estimateResults,
    } = this.props;

    return (
      <Form onSubmit={event => {
          event.preventDefault();
          onQuerySubmit();
        }}
      >
        <H1 noTopMargin>What’s my car worth?</H1>
        <P>
          Receive a close estimate of your trade value using real Canadian auction data.
        </P>
        <V />
        <Select name="year" placeholder="Year" onChange={this.onQueryChange} value={query.year.value}>
          {pastHundredYears.map(year => <option key={year}>{year}</option>)}
        </Select>
        <Select name="make" placeholder="Make" onChange={this.onQueryChange} value={query.make.value}>
          {makes.map(make => <option key={make.id} value={make.id}>{make.name}</option>)}
        </Select>
        <Select name="model" placeholder="Model" onChange={this.onQueryChange} value={query.model.value}>
          {models.map(model => <option key={model.id} value={model.id}>{model.name}</option>)}
        </Select>
        <Select name="trim" placeholder="Trim" onChange={this.onQueryChange} value={query.trim.value}>
          {subModels.map(subModel => <option key={subModel.id} value={subModel.id}>{subModel.name}</option>)}
        </Select>
        <Input type="number" min="0" name="mileage" placeholder="Mileage" suffix="KM" onChange={this.onQueryChange} value={query.mileage.value || ''} />
        {isLong &&
          <div>
            <V />
            <Input name="name" placeholder="Full Name" autoComplete="name" onChange={this.onLeadChange} value={lead.name || ''} />
            <Input type="email" name="email" placeholder="Email" autoComplete="email" onChange={this.onLeadChange} value={lead.email || ''} />
            <Input type="tel" name="phone" placeholder="Phone Number" autoComplete="tel tel-national" onChange={this.onLeadChange} value={lead.phone || ''} />
          </div>
        }
        <Button disabled={!this.isFormValid()} className="calculateButton" theme="green">{estimateResults && 'Re'}Calculate</Button>
      </Form>
    );
  }
}

const Form = styled.form`
  width: 265px;
  padding: ${paddingFrame};
  box-shadow: 0 0 10px ${colorBlack.alpha(0.1)};
  z-index: 5;
`;
