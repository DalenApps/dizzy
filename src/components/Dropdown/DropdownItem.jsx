import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers/props-helper';
class DropdownItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: childProps,
    onClick: PropTypes.func.isRequired
  };
  static defaultProps = {
    className: ''
  };

  render() {
    const { className, onClick, children } = this.props;
    const contentClass = cx('dz-dropdown-item', className);
    return (
      <li className={contentClass} onClick={() => onClick()}>
        {children}
      </li>
    );
  }
}

export default DropdownItem;
