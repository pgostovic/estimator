import React from 'react';
import { snap } from '../../../../../lib/test-utils';
import View from '../view';

snap('snapshot default', (
  <View onClose={jest.fn()} onQueryChange={jest.fn()} query={{}} makes={[]} models={[]} subModels={[]} />
));
