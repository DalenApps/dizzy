import React from 'react';
import { storiesOf } from '@storybook/react';
import { SideMenu, MenuItem, SubMenu } from '../../';
import { action } from '@storybook/addon-actions';
storiesOf('SideMenu', module)
  .add('Default', () => (
    <SideMenu>
      <MenuItem>Branding</MenuItem>
      <SubMenu title="Access Management">
        <MenuItem onClick={action('click')} active>Users</MenuItem>
        <MenuItem>Roles</MenuItem>
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
