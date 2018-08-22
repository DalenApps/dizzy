import React from 'react';
import { storiesOf } from '@storybook/react';
import InputGroup from './InputGroup';
import InputLabel from '../InputLabel/InputLabel';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
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
