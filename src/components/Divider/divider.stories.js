import React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider } from '../../';
storiesOf('Divider', module)
  .add('Default', () => <Divider title="default" />)
  .add('Centered', () => <Divider centered title="default" />);
