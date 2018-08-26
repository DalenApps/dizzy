import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import {
  InputGroup,
  InputLabel,
  Input,
  TextArea,
  Select,
  CheckBox
} from '../../';
/* eslint no-console: 0 */
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
        <InputLabel>City</InputLabel>
        <Select
          options={[
            { value: 'oslo', label: 'Oslo' },
            { value: 'stockholm', label: 'Stockholm' }
          ]}
          onItemSelect={item => console.log(item)}
        />
      </InputGroup>
      <InputGroup>
        <InputLabel>Info</InputLabel>
        <TextArea />
      </InputGroup>
      <InputGroup>
        <InputLabel>Terms</InputLabel>
        <CheckBox
          label="I accept the terms and conditions"
          checked={boolean('Accepted', false)}
          onCheckChange={() => console.log('')}
        />
      </InputGroup>
    </div>
  ));
