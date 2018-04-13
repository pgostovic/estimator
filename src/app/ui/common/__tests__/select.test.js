import React from 'react';
import { snap } from '../../../../lib/test-utils';
import Select from '../select';

snap('snapshot default', (
  <Select>
    <option>One</option>
    <option>Two</option>
    <option>Three</option>
  </Select>
));
