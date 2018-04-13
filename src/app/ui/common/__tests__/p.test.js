import React from 'react';
import { snap } from '../../../../lib/test-utils';
import P from '../p';

snap('snapshot default', (
  <P>Some text...</P>
));

snap('snapshot noTopMargin', (
  <P noTopMargin>Some text...</P>
));

snap('snapshot noBottomMargin', (
  <P noBottomMargin>Some text...</P>
));
