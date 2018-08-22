import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './badge.scss';

class Badge extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {
    className: ''
  };
  render() {
    const { className, children } = this.props;
    return <span className={cx('dz-badge', className)}>{children}</span>;
  }
}

export default Badge;
