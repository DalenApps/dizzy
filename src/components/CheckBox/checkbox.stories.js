import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import CheckBox from './CheckBox';
const colors = [
  'primary',
  'dark-blue',
  'light-blue',
  'muted',
  'blue',
  'dark',
  'success',
  'danger',
  'warning',
  'purple',
  'white'
];
storiesOf('CheckBox', module)
  .add('Default', () => (
    <CheckBox
      label="default"
      checked={boolean('Checked', false)}
      onCheckChange={checked => console.log(checked)}
      className="dz-checkbox-purple"
    />
  ))
  .add('Colors', () => (
    <div style={{ backgroundColor: 'white', display: 'inline-flex' }}>
      {colors.map(color => {
        return (
          <CheckBox

            label={color}
            checked={true}
            onCheckChange={checked => console.log(checked)}
            className={`dz-checkbox-${color}`}
          />
        );
      })}
    </div>
  ));
