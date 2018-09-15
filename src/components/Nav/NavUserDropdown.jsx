import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class NavUserDropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    open: PropTypes.bool
  };
  static defaultProps = {
    className: '',
    open: false
  };

  render() {
    const { children, className, open } = this.props;
    return (
      <div
        className={cx('dz-navbar-user-dropdown', { visible: open }, className)}
      >
        {children}
      </div>
    );
  }
}

export default NavUserDropdown;
