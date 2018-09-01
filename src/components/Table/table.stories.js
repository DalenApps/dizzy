import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableFoot,
  TableRow
} from '../../';

let rows = [
  { id: 1, firstname: 'Peter', lastname: 'Griffin', savings: '$100' },
  { id: 2, firstname: 'Lois', lastname: 'Griffin', savings: '$150' },
  { id: 3, firstname: 'Joe', lastname: 'Swanson', savings: '$300' },
  { id: 4, firstname: 'Cleveland', lastname: 'Brown', savings: '$250' }
];

storiesOf('Table', module)
  .add('Default', () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell component="th">Firstname</TableCell>
          <TableCell component="th">Lastname</TableCell>
          <TableCell component="th">Savings</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(item => {
          return (
            <TableRow key={item.id}>
              <TableCell>{item.firstname}</TableCell>
              <TableCell>{item.lastname}</TableCell>
              <TableCell>{item.savings}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ))
  .add('Striped', () => (
    <Table striped>
      <TableHead>
        <TableRow>
          <TableCell component="th">Firstname</TableCell>
          <TableCell component="th">Lastname</TableCell>
          <TableCell component="th">Savings</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(item => {
          return (
            <TableRow key={item.id}>
              <TableCell>{item.firstname}</TableCell>
              <TableCell>{item.lastname}</TableCell>
              <TableCell>{item.savings}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ))
  .add('Condensed', () => (
    <Table condensed>
      <TableHead>
        <TableRow>
          <TableCell component="th">Firstname</TableCell>
          <TableCell component="th">Lastname</TableCell>
          <TableCell component="th">Savings</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(item => {
          return (
            <TableRow key={item.id}>
              <TableCell>{item.firstname}</TableCell>
              <TableCell>{item.lastname}</TableCell>
              <TableCell>{item.savings}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ))
  .add('With foot', () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell component="th">Firstname</TableCell>
          <TableCell component="th">Lastname</TableCell>
          <TableCell component="th">Savings</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(item => {
          return (
            <TableRow key={item.id}>
              <TableCell>{item.firstname}</TableCell>
              <TableCell>{item.lastname}</TableCell>
              <TableCell>{item.savings}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFoot>
        <TableRow>
          <TableCell colspan="2">Sum</TableCell>
          <TableCell>$800</TableCell>
        </TableRow>
      </TableFoot>
    </Table>
  ))
  .add('With caption', () => (
    <Table caption="Savings" captionPosition="bottom">
      <TableHead>
        <TableRow>
          <TableCell component="th">Firstname</TableCell>
          <TableCell component="th">Lastname</TableCell>
          <TableCell component="th">Savings</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(item => {
          return (
            <TableRow key={item.id}>
              <TableCell>{item.firstname}</TableCell>
              <TableCell>{item.lastname}</TableCell>
              <TableCell>{item.savings}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ));
