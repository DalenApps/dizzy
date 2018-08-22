import React from 'react';
import { storiesOf } from '@storybook/react';
import Toast from './Toast';
storiesOf('Notification', module)
  .add('Toast', () => <Toast>s</Toast>)
  .add('Toast with icon', () => <Toast icon="fab fa-twitter" />);
