import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Input } from '../../';
import { action } from '@storybook/addon-actions';
storiesOf('Input', module)
  .add('Default', () => (
    <Input
      placeholder={text('Placeholder', 'Some text...')}
      onChange={action('onChange')}
    />
  ))
  .add('Small', () => (
    <Input
      size={'small'}
      placeholder={text('Placeholder', 'Some text...')}
      value={text('Value', 'This is some value')}
      onChange={action('onChange')}
    />
  ));
