import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Image } from '../../';
class NavUserItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    component: PropTypes.oneOf(['a', 'div']),
    avatar: PropTypes.string,
    showAvatar: PropTypes.bool
  };
  static defaultProps = {
    className: '',
    component: 'a',
    avatar: null,
    showAvatar: true
  };

  render() {
    const {
      children,
      className,
      avatar,
      showAvatar,
      component: Component
    } = this.props;
    return (
      <Component
        className={cx('dz-navbar-menu-item', 'dz-user-item', className)}
      >
        {avatar != null && showAvatar ? <Image img={avatar} /> : ''}
        {children}
      </Component>
    );
  }
}

export default NavUserItem;
