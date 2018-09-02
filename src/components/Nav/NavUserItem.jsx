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
    avatar: PropTypes.string
  };
  static defaultProps = {
    className: '',
    component: 'a',
    avatar: null
  };

  render() {
    const { children, className, avatar, component: Component } = this.props;
    return (
      <Component
        className={cx('dz-navbar-menu-item', 'dz-user-item', className)}
      >
        <Image img={avatar} />
        {children}
      </Component>
    );
  }
}

export default NavUserItem;
