import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class NavBrand extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    component: PropTypes.oneOf(['a', 'div']),
    to: PropTypes.string
  };
  static defaultProps = {
    className: '',
    component: 'a',
    to: null
  };

  render() {
    const { children, className, to, component: Component } = this.props;
    return (
      <Component href={to} className={cx('dz-navbar-brand', className)}>
        {children}
      </Component>
    );
  }
}

export default NavBrand;
