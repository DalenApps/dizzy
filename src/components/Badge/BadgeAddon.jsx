import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class BadgeAddon extends Component {
  static propTypes = {
    direction: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {
    direction: 'left',
    className: ''
  };
  render() {
    const { className, direction, children } = this.props;
    return (
      <span
        className={cx(
          'dz-badge-success-addon',
          className,
          { 'badge-addon-left': direction === 'left' },
          { 'badge-addon-right': direction === 'right' }
        )}
      >
        {children}
      </span>
    );
  }
}

export default BadgeAddon;
