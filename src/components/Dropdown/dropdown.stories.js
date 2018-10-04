import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown, DropdownItem } from '../../';
storiesOf('Dropdown', module).add('Default', () => (
  <Dropdown>
    <DropdownItem>Permissions</DropdownItem>
    <DropdownItem>Permissions</DropdownItem>
    <DropdownItem>Permissions</DropdownItem>
    <DropdownItem>Permissions</DropdownItem>
    <DropdownItem>Permissions</DropdownItem>
  </Dropdown>
));
