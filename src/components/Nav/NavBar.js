import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './nav-bar.scss';

class NavBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {
    className: ''
  };

  render() {
    const { children, className } = this.props;
    return (
      <header className={cx('dz-navbar', className)}>
        <div className="dz-navbar-brand">
          <a href="">Dizzy</a>
        </div>
        {children}
      </header>
    );
  }
}

export default NavBar;
