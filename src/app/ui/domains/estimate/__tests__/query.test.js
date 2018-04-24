import React from 'react';
import snap from '../../../../../lib/test-utils/snap';
import Query from '../query';

snap('snapshot default', (
  <Query
    isLong
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

snap('snapshot default not isLong', (
  <Query
    isLong={false}
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
