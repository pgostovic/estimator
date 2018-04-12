import React from 'react';

import styled from '../../../../lib/styled';
import H1 from '../../common/h1';
import H2 from '../../common/h2';
import P from '../../common/p';
import V from '../../common/v';
import EstimateValue from './estimateValue';
import { colorOffWhite, paddingFrame } from '../../style/variables';


const DetailsFrame = styled.div`
  background-color: ${colorOffWhite};
  padding: ${paddingFrame};
  flex: 1;
`;

const EstimateValues = styled.div`
  display: flex;
  flex-direction: row;
`;

export default class Details extends React.Component {
  render() {
    return (
      <DetailsFrame>
        <H1 noTopMargin>Quick Estimate</H1>
        <V px={15} />
        <EstimateValues>
          <EstimateValue title="Low Estimate" value={15000} />
          <EstimateValue title="High Estimate" value={18000} />
        </EstimateValues>
        <V px={15} />
        <H1>Guaranteed Trade Value</H1>
        <P>
          Most customers want to know exactly what their trade is worth and we are prepared to give you a guaranteed trade value online! It only takes a few minutes to capture your vehicle information using our app. Get started now or watch the 15 second video to learn more!
        </P>
        <V px={5} />
        <H2>Learn why 74% of customers choose a Guaranteed Trade Value.</H2>
      </DetailsFrame>
    );
  }
}
