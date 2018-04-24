import React from 'react';
import snap from '../../../../../lib/test-utils/snap';
import View from '../view';

snap('snapshot default', (
  <View
    isLong
    onClose={jest.fn()}
    onQueryChange={jest.fn()}
    onLeadChange={jest.fn()}
    onQuerySubmit={jest.fn()}
    query={{}}
    lead={{}}
    makes={[]}
    models={[]}
    subModels={[]}
  />
));
