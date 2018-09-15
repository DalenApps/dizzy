import React from 'react';
import { storiesOf } from '@storybook/react';
import { SideMenu, MenuItem, SubMenu } from '../../';
storiesOf('SideMenu', module)
  .add('Default', () => (
    <SideMenu>
      <MenuItem className="selected">Branding</MenuItem>
      <SubMenu title="Access Management" selected>
        <MenuItem>Users</MenuItem>
        <MenuItem className="selected">Roles</MenuItem>
        <MenuItem>Permissions</MenuItem>
      </SubMenu>
    </SideMenu>
  ))
  .add('With submenu', () => (
    <SideMenu>
      <MenuItem className="selected">Branding</MenuItem>
      <SideMenu>
        <MenuItem>Branding</MenuItem>
        <MenuItem>Branding</MenuItem>
        <MenuItem>Branding</MenuItem>
        <MenuItem>Branding</MenuItem>
      </SideMenu>
    </SideMenu>
  ));
