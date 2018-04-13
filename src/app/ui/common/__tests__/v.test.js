import React from 'react';
import { snap } from '../../../../lib/test-utils';
import V from '../v';

snap('snapshot default', <V />);

snap('snapshot px of 20', <V px={20} />);
