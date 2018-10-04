import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers/props-helper';
class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: childProps
  };
  static defaultProps = {
    className: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  toggle() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { className, children } = this.props;
    const { open } = this.state;
    return (
      <div className={cx('dz-dropdown', className)}>
        <div className={cx('dz-dropdown-title')} onClick={() => this.toggle()}>
          <span className={cx('dz-dropdown-title-display')}>Users</span>
          <i className="fas fa-caret-down" />
        </div>
        <div
          className={cx('dz-dropdown-menu', { 'dz-dropdown-menu-open': open })}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Dropdown;
