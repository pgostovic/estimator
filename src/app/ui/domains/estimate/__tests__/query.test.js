import React from 'react';
import { snap } from '../../../../../lib/test-utils';
import Query from '../query';

snap('snapshot default', (
  <Query
    isLong
    onQueryChange={jest.fn()}
    onQuerySubmit={jest.fn()}
    query={{}}
    makes={[]}
    models={[]}
    subModels={[]}
  />
));

snap('snapshot default not isLong', (
  <Query
    isLong={false}
    onQueryChange={jest.fn()}
    onQuerySubmit={jest.fn()}
    query={{}}
    makes={[]}
    models={[]}
    subModels={[]}
  />
));
