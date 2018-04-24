import React from 'react';
import snap from '../../../../lib/test-utils/snap';
import Placeholder from '../placeholder';

snap('snapshot default', <Placeholder />);

snap('snapshot h=200', <Placeholder h={200} />);

snap('snapshot h=200 w=300', <Placeholder h={200} />);

snap('snapshot light', <Placeholder light />);

snap('snapshot rounded', <Placeholder rounded />);
