import React from 'react';
import { snap } from '../../../../../lib/test-utils';
import Query from '../query';

snap('snapshot default', (
  <Query isLong onQueryChange={jest.fn()} query={{}} makes={[]} models={[]} subModels={[]} />
));
