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


export default class Query extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    query: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  @autobind
  onChange(event) {
    const { onChange } = this.props;
    const { name, value } = event.target;

    onChange(name, value);
  }

  render() {
    const { query } = this.props;

    return (
      <Form>
        <H1 noTopMargin>What’s my car worth?</H1>
        <P>
          Receive a close estimate of your trade value using real Canadian auction data.
        </P>
        <V />
        <Select name="year" placeholder="Year" onChange={this.onChange} value={query.year}>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
        </Select>
        <Select name="make" placeholder="Make" onChange={this.onChange} value={query.make}>
          <option>Acura</option>
          <option>Volvo</option>
          <option>Honda</option>
        </Select>
        <Select name="model" placeholder="Model" onChange={this.onChange} value={query.model}>
          <option>XC90</option>
        </Select>
        <Select name="trim" placeholder="Trim" onChange={this.onChange} value={query.trim}>
          <option>Some Trim</option>
        </Select>
        <Input type="number" min="0" name="mileage" placeholder="Mileage" suffix="KM" onChange={this.onChange} value={query.mileage || ''} />
        <V />
        <Input name="name" placeholder="Full Name" autoComplete="name" onChange={this.onChange} value={query.name || ''} />
        <Input name="email" placeholder="Email" autoComplete="email" onChange={this.onChange} value={query.email || ''} />
        <Input type="tel" name="phone" placeholder="Phone Number" autoComplete="tel tel-national" onChange={this.onChange} value={query.phone || ''} />
        <Button theme="green">Calculate</Button>
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
