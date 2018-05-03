import React from 'react';
import snap from '../../../../../lib/test-utils/snap';
import View from '../view';

const query = {
  year: {},
  make: {},
  model: {},
  trim: {},
  mileage: {},
};

snap('snapshot default', (
  <View
    isLong
    onClose={jest.fn()}
    onQueryChange={jest.fn()}
    onLeadChange={jest.fn()}
    onQuerySubmit={jest.fn()}
    query={query}
    lead={{}}
    makes={[]}
    models={[]}
    subModels={[]}
  />
));
