import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input, InputField } from '../../';
import { text, boolean, selectV2 } from '@storybook/addon-knobs';

storiesOf('InputField', module).add('Default', () => (
  <InputField
    label={text('label', 'Name')}
    required={boolean('required', true)}
    helpText={text('helpText', 'Please enter your full name')}
    variant={selectV2('variant', {
      default: '',
      success: 'success',
      warning: 'warning',
      danger: 'danger'
    })}
  >
    <Input />
  </InputField>
));
