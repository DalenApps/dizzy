/* eslint no-magic-numbers: ["error", { "ignore": [50,22] }] */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { Select } from '../../';

let data = [];

for (let i = 0; i < 50; i++) {
  data.push({ value: i, label: `This is item # ${i}` });
}
let selected = data[22];

storiesOf('Select', module).add('Default', () => (
  <Select
    options={data}
    onItemSelect={item => {
      selected = item;
    }}
    selectedItem={object('Selected', selected)}
  />
));
