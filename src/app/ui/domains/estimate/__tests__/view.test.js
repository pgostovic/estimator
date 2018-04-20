import React from 'react';
import { snap } from '../../../../../lib/test-utils';
import View from '../view';

snap('snapshot default', (
  <View
    isLong
    onClose={jest.fn()}
    onQueryChange={jest.fn()}
    onQuerySubmit={jest.fn()}
    query={{}}
    makes={[]}
    models={[]}
    subModels={[]}
  />
));
