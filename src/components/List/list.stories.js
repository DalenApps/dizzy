import React from 'react';
import { storiesOf } from '@storybook/react';
import { List, ListItem } from '../../';
storiesOf('List', module)
  .add('Using ul and li', () => (
    <List>
      <ListItem>Hello 1</ListItem>
      <ListItem>Hello 1</ListItem>
    </List>
  ))
  .add('Using Div', () => (
    <List component={'div'}>
      <ListItem component={'div'}>Hello 1</ListItem>
      <ListItem component={'div'}>Hello 2</ListItem>
      <ListItem component={'div'}>Hello 3</ListItem>
      <ListItem component={'div'}>Hello 4</ListItem>
      <ListItem component={'div'}>Hello 5</ListItem>
    </List>
  ));
