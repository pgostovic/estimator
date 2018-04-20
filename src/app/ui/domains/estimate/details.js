import React from 'react';
import PropTypes from 'prop-types';

import styled from '../../../../lib/styled';
import H1 from '../../common/h1';
import H2 from '../../common/h2';
import P from '../../common/p';
import V from '../../common/v';
import EstimateValue from './estimateValue';
import EmptyDetails from './emptyDetails';
import { colorOffWhite, paddingFrame, fontSizeFine } from '../../style/variables';


const DetailsFrame = styled.div`
  background-color: ${colorOffWhite};
  padding: ${paddingFrame};
  flex: 1;
`;

const EstimateValues = styled.div`
  display: flex;
  flex-direction: row;
`;

const FinePrint = styled(P)`
  font-size: ${fontSizeFine};
  line-height: 16px;
`;

const Details = ({ estimateResults, isLong }) => (estimateResults
  ?
    <DetailsFrame>
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
      <V px={5} />
      <H2>Learn why 74% of customers choose a Guaranteed Trade Value.</H2>
      <FinePrint>
        Understanding the Trade-in Value<br />
        The trade-in value is presented as a guideline to give you a range of what you could expect to get from a dealer. It is important to note that when a dealer takes a vehicle in on trade, they will need to recondition and market it for resale. These costs are taken into account when providing a trade-in value. When trading in a vehicle, the value is applied to the transaction price prior to calculating the applicable sales taxes which can result in a tax saving to you. While selling a vehicle privately may garner a higher sale price than what you could expect when trading in, you may not receive the tax benefit.
      </FinePrint>
    </DetailsFrame>
  :
    <EmptyDetails isLong={isLong} />
);

Details.propTypes = {
  isLong: PropTypes.bool.isRequired,
  estimateResults: PropTypes.shape({
    low: PropTypes.number,
    high: PropTypes.number,
  }),
};

Details.defaultProps = {
  estimateResults: null,
};

export default Details;
