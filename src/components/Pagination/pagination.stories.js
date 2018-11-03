import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pagination } from '../../';
import { number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
storiesOf('Paginator', module).add('Default', () => (
  <Pagination
    currentPage={number('currentPage', 10)}
    totalPages={number('totalPages', 110)}
    zeroIndexStart={boolean('zeroIndexStart', false)}
    onPageChange={action('onPageChange')}
    buttonVariant="success"
  />
));
