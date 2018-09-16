import PropTypes from 'prop-types';

export const childProps = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]);

export const directionProps = PropTypes.oneOf([
  'top',
  'right',
  'bottom',
  'left'
]);

export const variantProps = PropTypes.oneOf([
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
]);
