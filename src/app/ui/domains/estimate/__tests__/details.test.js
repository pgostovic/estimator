import React from 'react';
import snap from '../../../../../lib/test-utils/snap';
import Details from '../details';

snap('snapshot isLong', (
  <Details isLong lead={{}} onLeadChange={jest.fn()} onDone={jest.fn()} />
));

snap('snapshot not isLong', (
  <Details isLong={false} lead={{}} onLeadChange={jest.fn()} onDone={jest.fn()} />
));
