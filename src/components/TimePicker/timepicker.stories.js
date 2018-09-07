import React from 'react';
import { storiesOf } from '@storybook/react';
import { TimePicker, Badge } from '../../';
const footer = <Badge className="dz-badge-primary">Custom footer</Badge>;
storiesOf('TimePicker', module).add('Default', () => (
  <TimePicker footerComponent={() => footer} />
));
