import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers/props-helper';
class DropdownItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: childProps
  };
  static defaultProps = {
    className: ''
  };

  render() {
    const { className, children } = this.props;
    return <div className={cx('dz-dropdown-item', className)}>{children}</div>;
  }
}

export default DropdownItem;
