import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers/props-helper';
import { Button } from '../../';
class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: childProps,
    triggerProps: PropTypes.objectOf(Button.propTypes),
    triggerTitle: PropTypes.string
  };
  static defaultProps = {
    className: '',
    triggerTitle: 'Dropdown'
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
    const { className, children, triggerTitle, triggerProps } = this.props;
    const { open } = this.state;
    const menuClass = cx('dz-dropdown-menu', { 'dz-dropdown-menu-open': open });
    return (
      <div className={cx('dz-dropdown', className)}>
        <Button
          {...triggerProps}
          onClick={() => this.toggle()}
          className={cx('dz-dropdown-title')}
        >
          {triggerTitle}
          <i className="fas fa-caret-down" />
        </Button>
        <ul className={menuClass}>{children}</ul>
      </div>
    );
  }
}

export default Dropdown;
