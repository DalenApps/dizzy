import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class NavUserDropdown extends Component {
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
    const { children, className } = this.props;
    return (
      <div className={cx('dz-navbar-user-dropdown', className)}>{children}</div>
    );
  }
}

export default NavUserDropdown;
