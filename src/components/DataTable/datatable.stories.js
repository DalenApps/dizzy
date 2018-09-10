import React from 'react';
import { storiesOf } from '@storybook/react';
import { DataTable } from '../../';

let headers = [
  { key: 'firstname', label: 'Firstname' },
  { key: 'lastname', label: 'Lastname' },
  { key: 'savings', label: 'Savings' }
];
let rows = [
  { id: 1, firstname: 'Peter', lastname: 'Griffin', savings: '$100' },
  { id: 2, firstname: 'Lois', lastname: 'Griffin', savings: '$150' },
  { id: 3, firstname: 'Joe', lastname: 'Swanson', savings: '$300' },
  { id: 4, firstname: 'Cleveland', lastname: 'Brown', savings: '$250' }
];
storiesOf('DataTable', module).add('Default', () => (
  <DataTable headers={headers} rows={rows} keyField="id" />
));
