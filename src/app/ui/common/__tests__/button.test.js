import React from 'react';
import { snap } from '../../../../lib/test-utils';
import Button from '../button';

snap('snapshot no theme', (
  <Button>Click Me</Button>
));

snap('snapshot green', (
  <Button theme="green">Click Me</Button>
));

snap('snapshot orange-gradient', (
  <Button theme="orange-gradient">Click Me</Button>
));
