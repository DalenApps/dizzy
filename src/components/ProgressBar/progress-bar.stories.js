import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProgressBar } from '../../';
storiesOf('ProgressBar', module)
  .add('Default', () => (
    <ProgressBar completed={77} className="dz-progress-purple" />
  ))
  .add('Striped', () => (
    <ProgressBar
      completed={77}
      className="dz-progress-striped dz-progress-purple"
    />
  ))
  .add('Animated', () => (
    <ProgressBar
      completed={77}
      className="dz-progress-striped dz-progress-animated dz-progress-purple"
    />
  ))
  .add('With title', () => (
    <ProgressBar
      completed={77}
      className="dz-progress-success"
      title={'Downloading asset files..'}
    />
  ));
