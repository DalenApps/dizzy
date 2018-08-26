import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge, BadgeAddon } from '../../';

storiesOf('Badge', module)
  .add('Default', () => <Badge className={'dz-badge-primary'}>New</Badge>)
  .add('With addon', () => (
    <Badge className={'dz-badge-dark'}>
      <BadgeAddon className={'dz-badge-success-addon'}>
        <i className="fab fa-npm" />
      </BadgeAddon>
      npm install -s @dalenapps/dizzy
    </Badge>
  ))
  .add('Colors', () => (
    <div>
      <Badge className={'dz-badge-dark-blue'}>Dark blue</Badge>
      <Badge className={'dz-badge-light-blue'}>Light Blue</Badge>
      <Badge className={'dz-badge-muted'}>Muted</Badge>
      <Badge className={'dz-badge-blue'}>Blue</Badge>
      <Badge className={'dz-badge-primary'}>Primary</Badge>
      <Badge className={'dz-badge-dark'}>Dark</Badge>
      <Badge className={'dz-badge-success'}>Success</Badge>
      <Badge className={'dz-badge-danger'}>Danger</Badge>
      <Badge className={'dz-badge-warning'}>Warning</Badge>
      <Badge className={'dz-badge-purple'}>Purple</Badge>
      <Badge className={'dz-badge-white'}>White</Badge>
    </div>
  ));
