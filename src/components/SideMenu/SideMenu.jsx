import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers';
class SideMenu extends Component {
  static propTypes = {
    className: PropTypes.string,
    component: PropTypes.oneOf(['div', 'ul']),
    children: childProps
  };
  static defaultProps = {
    className: '',
    component: 'ul'
  };

  render() {
    const { className, children, component: Component } = this.props;
    return (
      <Component className={cx('dz-sidemenu', className)}>{children}</Component>
    );
  }
}

export default SideMenu;
