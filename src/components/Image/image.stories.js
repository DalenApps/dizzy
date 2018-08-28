import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from '../../';
storiesOf('Image', module)
  .add('Default', () => (
    <Image img={'https://placehold.it/100x100'} alt="Image" />
  ))
  .add('With Overlay', () => (
    <Image img={'https://placehold.it/100x100'} alt="Image" withOverlay>
      <div
        style={{
          textAlign: 'center',
          backgroundColor: 'red',
          height: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        This is overlay
      </div>
    </Image>
  ))
  .add('Responsive', () => (
    <Image img={'https://placehold.it/100x100'} alt="Image" responsive />
  ))
  .add('Rounded', () => (
    <Image img={'https://placehold.it/100x100'} rounded alt="Image" />
  ));
