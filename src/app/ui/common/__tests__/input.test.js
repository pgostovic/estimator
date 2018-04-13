import React from 'react';
import { snap } from '../../../../lib/test-utils';
import Input from '../input';

snap('snapshot text default', (
  <Input type="text" />
));

snap('snapshot text with suffix', (
  <Input type="text" suffix="Watts" />
));
