import React from 'react';
import { storiesOf } from '@storybook/react';
import InputLabel from './InputLabel';
storiesOf('Input Label', module).add('Default', () => (
  <InputLabel>Username</InputLabel>
));
