import React from 'react';
import snap from '../../../../../lib/test-utils/snap';
import TextAppButton from '../textAppButton';

snap('snapshot default', (
  <TextAppButton lead={{}} onLeadChange={jest.fn()} onDone={jest.fn()} />
));
