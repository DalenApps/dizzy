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