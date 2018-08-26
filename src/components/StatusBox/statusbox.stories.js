import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatusBox } from '../../';
storiesOf('StatusBox', module).add('Default', () => (
  <StatusBox icon="plus">
    <p className="dz-statusbox-title">24%</p>
    <p className="dz-statusbox-subtitle">Sales this week</p>
  </StatusBox>
));
