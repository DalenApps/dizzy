import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert } from '../../';
/* eslint no-console: 0 */
storiesOf('Alert', module)
  .add('Default', () => (
    <Alert message={'This is some description that could be added'} />
  ))
  .add('With Description', () => (
    <Alert
      message={'Info'}
      description={'This is some description that could be added'}
    />
  ))
  .add('Closable', () => (
    <Alert
      message={'Info'}
      description={'This is some description that could be added'}
      closable
      onClose={() => console.log('closed')}
    />
  ))
  .add('With icon', () => (
    <Alert
      message={'Info'}
      description={'This is some description that could be added'}
      closable
      onClose={() => console.log('closed')}
      withIcon
    />
  ))
  .add('Variants', () => (
    <div>
      <Alert
        message={'Info'}
        description={'This is some description that could be added'}
      />
      <Alert
        variant={'success'}
        message={'Success'}
        description={'This is some description that could be added'}
      />
      <Alert
        variant={'warning'}
        message={'Warning'}
        description={'This is some description that could be added'}
      />
      <Alert
        variant={'danger'}
        message={'Danger'}
        description={'This is some description that could be added'}
      />
      <Alert
        message={'Info'}
        description={'This is some description that could be added'}
        closable
        onClose={() => console.log('closed')}
        withIcon
      />
      <Alert
        variant={'success'}
        message={'Success'}
        description={'This is some description that could be added'}
        closable
        onClose={() => console.log('closed')}
        withIcon
      />
      <Alert
        variant={'warning'}
        message={'Warning'}
        description={'This is some description that could be added'}
        closable
        onClose={() => console.log('closed')}
        withIcon
      />
      <Alert
        variant={'danger'}
        message={'Danger'}
        description={'This is some description that could be added'}
        closable
        onClose={() => console.log('closed')}
        withIcon
      />
    </div>
  ))
  .add('Custom Icon', () => (
    <Alert
      variant={'info'}
      message={'Custom Icon'}
      description={'Need a custom icon? We can do that too'}
      closable
      onClose={() => console.log('closed')}
      withIcon
      icon={'trash'}
    />
  ));
