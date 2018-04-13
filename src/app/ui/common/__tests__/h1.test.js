import React from 'react';
import { snap } from '../../../../lib/test-utils';
import H1 from '../h1';

snap('snapshot default', (
  <H1>The Title</H1>
));

snap('snapshot noTopMargin', (
  <H1 noTopMargin>The Title</H1>
));

snap('snapshot noBottomMargin', (
  <H1 noBottomMargin>The Title</H1>
));
