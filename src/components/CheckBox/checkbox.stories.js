import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import { CheckBox } from '../../';
const colors = [
  'primary',
  'darkblue',
  'lightblue',
  'muted',
  'blue',
  'dark',
  'success',
  'danger',
  'warning',
  'purple',
  'white'
];
/* eslint no-console: 0 */
storiesOf('CheckBox', module)
  .add('Default', () => (
    <CheckBox
      label="default"
      checked={boolean('Checked', false)}
      onCheckChange={checked => console.log(checked)}
      variant="purple"
    />
  ))
  .add('Colors', () => (
    <div style={{ backgroundColor: 'white', display: 'inline-flex' }}>
      {colors.map(color => {
        return (
          <CheckBox
            key={color}
            label={color}
            checked={true}
            onCheckChange={checked => console.log(checked)}
            variant={color}
          />
        );
      })}
    </div>
  ));
