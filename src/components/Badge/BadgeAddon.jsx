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
    const containerClass = cx(
      'dz-badge-success-addon',
      [`badge-addon-${direction}`],
      className
    );
    return <span className={containerClass}>{children}</span>;
  }
}

export default BadgeAddon;
