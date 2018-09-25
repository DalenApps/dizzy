import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers';
class SideMenu extends Component {
  static propTypes = {
    className: PropTypes.string,
    containerComponent: PropTypes.oneOf(['div', 'ul']),
    children: childProps
  };
  static defaultProps = {
    className: '',
    containerComponent: 'ul'
  };

  render() {
    const { className, children, containerComponent: Component } = this.props;
    return (
      <Component className={cx('dz-sidemenu', className)}>{children}</Component>
    );
  }
}

export default SideMenu;
