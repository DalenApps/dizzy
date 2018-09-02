import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class NavItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    active: PropTypes.bool,
    component: PropTypes.oneOf(['a', 'div'])
  };
  static defaultProps = {
    className: '',
    component: 'a',
    active: false
  };

  render() {
    const { children, className, active, component: Component } = this.props;
    return (
      <Component
        className={cx('dz-navbar-menu-item', { active: active }, className)}
      >
        {children}
      </Component>
    );
  }
}

export default NavItem;
