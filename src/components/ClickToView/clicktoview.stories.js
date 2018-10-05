import React from 'react';
import { storiesOf } from '@storybook/react';
import { ClickToView } from '../../';
storiesOf('ClickToView', module).add('Default', () => (
  <ClickToView>
    <p>This is some content</p>
  </ClickToView>
));
