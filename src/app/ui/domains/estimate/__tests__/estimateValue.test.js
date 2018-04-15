import React from 'react';
import { snap } from '../../../../../lib/test-utils';
import EstimateValue from '../estimateValue';

snap('snapshot default', (
  <EstimateValue title="Some Title" value={123} />
));
