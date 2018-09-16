import React from 'react';
import { storiesOf } from '@storybook/react';
import { Toast } from '../../';
storiesOf('Notification', module)
  .add('Toast', () => (
    <Toast
      title="Changes applied"
      subtitle="Your profile was successfully updated"
      time="24 seconds ago"
    />
  ))
  .add('Toast with icon', () => (
    <Toast
      title="Changes applied"
      subtitle="Your profile was successfully updated"
      time="24 seconds ago"
      icon="fab fa-twitter"
    />
  ));
