import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
const btnTypes = [
  'primary',
  'dark-blue',
  'light-blue',
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
  .add('Default', () => (
    <Button onClick={action('clicked')} className="dz-button-primary">
      Add Text
    </Button>
  ))
  .add('Normal with icon', () => (
    <Button onClick={action('clicked')} className="dz-button-primary">
      <i className="fas fa-plus" />
      Add Text
    </Button>
  ))
  .add('Normal with only icon', () => (
    <Button
      onClick={action('clicked')}
      className="dz-button-primary dz-icon-only"
    >
      <i className="fas fa-plus" />
    </Button>
  ))
  .add('Outlined', () => (
    <Button onClick={action('clicked')} className="dz-button-outline-primary">
      Add Outline
    </Button>
  ))
  .add('Outlined with icon', () => (
    <Button
      onClick={action('clicked')}
      className="dz-button-outline-primary dz-icon-only"
    >
      <i className="fas fa-plus" />
    </Button>
  ))
  .add('Text only', () => (
    <Button onClick={action('clicked')} className="dz-button-link">
      Go here
    </Button>
  ))
  .add('Icon only', () => (
    <Button onClick={action('clicked')} className="dz-button-link dz-icon-only">
      <i className="fas fa-plus" />
    </Button>
  ))
  .add('Rounded', () => (
    <Button
      onClick={action('clicked')}
      className="dz-button-primary dz-button-rounded"
    >
      Go here
    </Button>
  ))
  .add('Different colors', () => (
    <div>
      {btnTypes.map(type => {
        return (
          <Button
            key={type}
            onClick={action('clicked')}
            className={`dz-button-${type}`}
          >
            {type}
          </Button>
        );
      })}
      {btnTypes.map(type => {
        return (
          <Button
            key={type}
            onClick={action('clicked')}
            className={`dz-button-outline-${type}`}
          >
            {type}
          </Button>
        );
      })}
    </div>
  ))
  .add('Sizes', () => (
    <div>
      <Button
        onClick={action('clicked')}
        className="dz-button-primary dz-button-small"
      >
        Small
      </Button>
      <Button onClick={action('clicked')} className="dz-button-primary">
        Default
      </Button>
      <Button
        onClick={action('clicked')}
        className="dz-button-primary dz-button-large"
      >
        Large
      </Button>
    </div>
  ));
