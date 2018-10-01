import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { RadioButton } from '../../';
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
storiesOf('RadioButton', module)
  .add('Default', () => <RadioButton checked={boolean('Checked', false)} />)
  .add('Colors', () => (
    <div style={{ backgroundColor: 'white', display: 'inline-flex' }}>
      {colors.map(color => {
        return (
          <RadioButton
            key={color}
            label={color}
            name={color}
            checked={true}
            onCheckChange={checked => console.log(checked)}
            variant={color}
          />
        );
      })}
    </div>
  ));
