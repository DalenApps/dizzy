import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class NavUserDropdownItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string
  };
  static defaultProps = {
    className: '',
    icon: null,
    label: 'label'
  };

  render() {
    const { icon, label, className } = this.props;
    return (
      <div className={cx('dz-navbar-user-dropdown-item', className)}>
        {icon !== null ? <i className={`fas fa-${icon}`} /> : ''}
        {label}
      </div>
    );
  }
}

export default NavUserDropdownItem;
