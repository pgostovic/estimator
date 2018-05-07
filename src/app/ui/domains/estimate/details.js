import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import styled from '../../../../lib/styled';
import H1 from '../../common/h1';
import H2 from '../../common/h2';
import P from '../../common/p';
import V from '../../common/v';
import Button from '../../common/button';
import Input from '../../common/input';
import Placeholder from '../../common/placeholder';
import TextAppButton from './textAppButton';
import EstimateValue from './estimateValue';
import EmptyDetails from './emptyDetails';
import AppleLogo from './apple.svg';
import AndroidLogo from './android.svg';
import videoPhLongImg from './video-ph-long.png';
import { colorOffWhite, paddingFrame, fontSizeFine } from '../../style/variables';

const DetailsFrame = styled.div`
  background-color: ${colorOffWhite};
  padding: ${paddingFrame};
  flex: 1;

  .text-app-row {
    display: flex;

    .space {
      flex: 1;
    }

    & > *:last-child {
      margin-left: 10px;
    }
  }

  .form-row {
    display: flex;

    .form {
      padding-left: 25px;
      flex: 1;

      input:first-of-type {
        margin-top: 0;
      }
    }
  }
`;

const EstimateValues = styled.div`
  display: flex;
  flex-direction: row;
`;

const VideoPHLong = styled.div`
  background-image: url(${videoPhLongImg});
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  border-radius: 5px;
  overflow: hidden;
`;

const FinePrint = styled(P)`
  font-size: ${fontSizeFine};
  line-height: 16px;
  margin-top: 30px;
`;

class Details extends React.Component {
  static propTypes = {
    onLeadChange: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired,
    isLong: PropTypes.bool.isRequired,
    lead: PropTypes.objectOf(PropTypes.string).isRequired,
    estimateResults: PropTypes.shape({
      low: PropTypes.number,
      high: PropTypes.number,
    }),
  };

  static defaultProps = {
    estimateResults: null,
  };

  @autobind
  onChange(event) {
    const { onLeadChange } = this.props;
    const { name, value } = event.target;

    onLeadChange(name, value);
  }

  render() {
    const {
      estimateResults, isLong, lead, onDone,
    } = this.props;

    return estimateResults ? (
      <DetailsFrame className="details">
        <H1 noTopMargin>Quick Estimate</H1>
        <V px={15} />
        <EstimateValues>
          <EstimateValue title="Low Estimate" value={estimateResults.low} />
          <EstimateValue title="High Estimate" value={estimateResults.high} />
        </EstimateValues>
        <V px={15} />
        <H1>Guaranteed Trade Value</H1>
        <P>
          Most customers want to know exactly what their trade is worth and we are prepared to give you a guaranteed trade value online! It only takes a few minutes to capture your vehicle information using our app. Get started now or watch the 15 second video to learn more!
        </P>
        {isLong ?
          <div>
            <div className="text-app-row">
              <TextAppButton {...this.props} />
              <div className="space" />
              <Button theme="black" w={46} h={46}><AppleLogo /></Button>
              <Button theme="black" w={46} h={46}><AndroidLogo /></Button>
            </div>
            <V px={41} />
            <VideoPHLong />
          </div>
          :
          <div>
            <H2>Learn why 74% of customers choose a Guaranteed Trade Value.</H2>
            <div className="form-row">
              <Placeholder w={295} h={214} />
              <div className="form">
                <Input name="name" placeholder="Full Name" autoComplete="name" onChange={this.onChange} value={lead.name || ''} />
                <Input type="email" name="email" placeholder="Email" autoComplete="email" onChange={this.onChange} value={lead.email || ''} />
                <Input type="tel" name="phone" placeholder="Phone Number" autoComplete="tel tel-national" onChange={this.onChange} value={lead.phone || ''} />
                <Button theme="orange-gradient" onClick={onDone}>Send me the app</Button>
              </div>
            </div>
          </div>
        }
        <FinePrint>
          Understanding the Trade-in Value<br />
          The trade-in value is presented as a guideline to give you a range of what you could expect to get from a dealer. It is important to note that when a dealer takes a vehicle in on trade, they will need to recondition and market it for resale. These costs are taken into account when providing a trade-in value. When trading in a vehicle, the value is applied to the transaction price prior to calculating the applicable sales taxes which can result in a tax saving to you. While selling a vehicle privately may garner a higher sale price than what you could expect when trading in, you may not receive the tax benefit.
        </FinePrint>
      </DetailsFrame>
    ) : (
      <EmptyDetails isLong={isLong} />
    );
  }
}

export default Details;
