import React from 'react';
import { storiesOf } from '@storybook/react';
import { ItemMenu } from '../../';
storiesOf('Item Menu', module).add('Default', () => (
  <ItemMenu>
    <a className="item-item">Hello</a>
    <a className="item-item">Hello</a>
    <a className="item-item">Hello</a>
    <a className="item-item">Hello</a>
    <a className="item-item">Hello</a>
    <a className="item-item active">
      <i className="fas fa-user" />
      Hello
    </a>
  </ItemMenu>
));
