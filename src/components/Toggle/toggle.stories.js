import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs/react';
import { Toggle } from '../../';
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
/* eslint no-console: 0 */
storiesOf('Toggle', module)
  .add('Default', () => (
    <Toggle
      checked={boolean('Checked', false)}
      onCheckChange={checked => console.log(checked)}
    />
  ))
  .add('With labels', () => (
    <Toggle
      checked={boolean('Checked', false)}
      onCheckChange={checked => console.log(checked)}
      withLabels={boolean('With labels', true)}
      onText={text('On Text', 'On')}
      offText={text('Off Text', 'Off')}
    />
  ))
  .add('Sizes', () => (
    <div style={{ backgroundColor: 'white', display: 'inline-flex' }}>
      <Toggle checked={boolean('Small', true)} />
      <Toggle className={'dz-toggle-large'} checked={boolean('Large', true)} />
    </div>
  ))
  .add('Rounded', () => (
    <Toggle
      checked={boolean('Checked', false)}
      onCheckChange={checked => console.log(checked)}
      className={'dz-toggle-rounded'}
    />
  ))
  .add('Colors', () => (
    <div style={{ backgroundColor: 'white', display: 'inline-flex' }}>
      {colors.map(color => {
        return (
          <Toggle
            key={color}
            checked={boolean(color.toUpperCase(), true)}
            onCheckChange={checked => console.log(checked)}
            className={`dz-toggle-${color}`}
          />
        );
      })}
    </div>
  ));
