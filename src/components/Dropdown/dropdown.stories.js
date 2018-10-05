import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown, DropdownItem } from '../../';
import { action } from '@storybook/addon-actions';
storiesOf('Dropdown', module).add('Default', () => (
  <Dropdown triggerProps={{ variant: 'purple' }} triggerTitle="Select Action">
    <DropdownItem onClick={action('editClick')}>
      <i className="fas fa-edit" />
      Edit
    </DropdownItem>
    <DropdownItem onClick={action('deleteClick')}>
      <i className="fas fa-trash" />
      Delete
    </DropdownItem>
    <DropdownItem onClick={action('lockClick')}>
      <i className="fas fa-lock" />
      Lock
    </DropdownItem>
  </Dropdown>
));
