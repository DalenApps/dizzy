import React from 'react';
import { storiesOf } from '@storybook/react';
import { Steps, Step } from '../../';
import { action } from '@storybook/addon-actions';
storiesOf('Steps', module).add('Default', () => (
  <Steps>
    <Step
      icon="fa-lock"
      title="Login Details"
      description="Select username and password"
      onClick={action('stepOneClick')}
    />
    <Step
      icon="fa-user"
      title="User Details"
      description="Enter your details"
      active
      onClick={action('stepTwoClick')}
    />
    <Step
      icon="fa-check"
      title="Confirmation"
      description="Confirm your details"
      disabled
      onClick={action('stepThreeClick')}
    />
  </Steps>
));
