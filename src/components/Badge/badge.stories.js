import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge, BadgeAddon } from '../../';
const variants = [
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
storiesOf('Badge', module)
  .add('Default', () => <Badge>New</Badge>)
  .add('With addon', () => (
    <Badge variant={'dark'}>
      <BadgeAddon>
        <i className="fab fa-npm" />
      </BadgeAddon>
      npm install -s @dalenapps/dizzy
    </Badge>
  ))
  .add('Colors', () => (
    <div>
      {variants.map(type => {
        return (
          <Badge key={type} variant={type}>
            {type}
          </Badge>
        );
      })}
    </div>
  ));
