import React from 'react';
import { snap } from '../../../../lib/test-utils';
import H2 from '../h2';

snap('snapshot default', (
  <H2>The Title</H2>
));

snap('snapshot noTopMargin', (
  <H2 noTopMargin>The Title</H2>
));

snap('snapshot noBottomMargin', (
  <H2 noBottomMargin>The Title</H2>
));
