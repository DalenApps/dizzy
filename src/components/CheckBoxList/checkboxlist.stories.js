import React from 'react';
import { storiesOf, forceReRender } from '@storybook/react';
import CheckBoxList from './CheckBoxList';
/* eslint no-magic-numbers: ["error", { "ignore": [0,1,2,3,10] }] */
let countries = [
  { id: 1, name: 'Cabo Verde' },
  { id: 2, name: 'Cambodia' },
  { id: 3, name: 'Cameroon' },
  { id: 4, name: 'Canada' },
  { id: 5, name: 'Central African Republic' },
  { id: 6, name: 'Chad' },
  { id: 7, name: 'Chile' },
  { id: 8, name: 'China' },
  { id: 9, name: 'Colombia' },
  { id: 10, name: 'Comoros' },
  { id: 11, name: 'Congo, Democratic Republic of the' },
  { id: 12, name: 'Congo, Republic of the' },
  { id: 13, name: 'Costa Rica' },
  { id: 14, name: 'Côte d’Ivoire' },
  { id: 15, name: 'Croatia' },
  { id: 16, name: 'Cuba' },
  { id: 17, name: 'Cyprus' },
  { id: 18, name: 'Czech Republic' }
];
let checked = [countries[1], countries[2], countries[3], countries[10]];

function _isChecked(item) {
  let items = checked;
  let index = items.indexOf(item);
  if (index < 0) return false;
  return true;
}

storiesOf('CheckBoxList', module).add('Default', () => (
  <CheckBoxList
    label="default"
    data={countries}
    checked={checked}
    onCheckChange={item => {
      if (_isChecked(item)) {
        checked.splice(checked.indexOf(item), 1);
      } else {
        checked.push(item);
      }
      // Force render the storybook to update the UI.
      // Not needed in production or with a normal app.
      forceReRender();
    }}
  />
));
