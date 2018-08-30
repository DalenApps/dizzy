import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { Button } from '../../';
const btnTypes = [
  'primary',
  'darkblue',
  'lightblue',
  'muted',
  'blue',
  'dark',
  'success',
  'danger',
  'warning',
  'purple',
  'white'
];
storiesOf('Button', module)
  .add('Default', () => <Button onClick={action('clicked')}>Add Text</Button>)
  .add('Normal with icon', () => (
    <Button onClick={action('clicked')}>
      <i className="fas fa-plus" />
      Add Text
    </Button>
  ))
  .add('Normal with only icon', () => (
    <Button onClick={action('clicked')} iconOnly>
      <i className="fas fa-plus" />
    </Button>
  ))
  .add('Outlined', () => (
    <Button onClick={action('clicked')} outlined>
      Add Outline
    </Button>
  ))
  .add('Outlined with icon', () => (
    <Button onClick={action('clicked')} iconOnly outlined>
      <i className="fas fa-plus" />
    </Button>
  ))
  .add('Text only', () => (
    <Button onClick={action('clicked')} noStyle>
      Go here
    </Button>
  ))
  .add('Icon only', () => (
    <Button onClick={action('clicked')} noStyle iconOnly>
      <i className="fas fa-plus" />
    </Button>
  ))
  .add('Rounded', () => (
    <Button onClick={action('clicked')} rounded>
      Go here
    </Button>
  ))
  .add('Different colors', () => (
    <div>
      {btnTypes.map(type => {
        return (
          <Button key={type} onClick={action('clicked')} variant={type}>
            {type}
          </Button>
        );
      })}
      {btnTypes.map(type => {
        return (
          <Button
            key={type}
            onClick={action('clicked')}
            variant={type}
            outlined
          >
            {type}
          </Button>
        );
      })}
    </div>
  ))
  .add('Sizes', () => (
    <div>
      <Button onClick={action('clicked')} size="small">
        Small
      </Button>
      <Button onClick={action('clicked')}>Default</Button>
      <Button onClick={action('clicked')} size="large">
        Large
      </Button>
    </div>
  ))
  .add('States', () => (
    <Button onClick={action('clicked')} loading={boolean('Loading', false)}>
      Not Loading
    </Button>
  ));
