import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class ItemMenu extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  render() {
    const { className, children } = this.props;
    return <div className={cx('dz-item-menu', className)}>{children}</div>;
  }
}

export default ItemMenu;
