import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from '../../';

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
storiesOf('Table', module)
  .add('Default', () => <Table headers={headers} rows={rows} keyField="id" />)
  .add('Striped', () => (
    <Table
      headers={headers}
      rows={rows}
      keyField="id"
      className="dz-table-striped"
    />
  ))
  .add('Condensed', () => (
    <Table
      headers={headers}
      rows={rows}
      keyField="id"
      className="dz-table-condensed"
    />
  ))
  .add('Responsive', () => (
    <Table responsive headers={headers} rows={rows} keyField="id" />
  ));
