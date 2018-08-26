import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputGroup, InputLabel, Input, TextArea } from '../../';

storiesOf('Input Group', module)
  .add('Default', () => (
    <InputGroup style={{ backgroundColor: '#fff', width: '100%' }}>
      <InputLabel>Username</InputLabel>
      <Input />
    </InputGroup>
  ))
  .add('Advanced', () => (
    <div style={{ backgroundColor: '#fff', width: '100%' }}>
      <InputGroup>
        <InputLabel>Username</InputLabel>
        <Input />
      </InputGroup>
      <InputGroup>
        <InputLabel>Username</InputLabel>
        <Input />
      </InputGroup>
      <InputGroup>
        <InputLabel>Username</InputLabel>
        <TextArea />
      </InputGroup>
    </div>
  ));
