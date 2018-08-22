import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './button.scss';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {
    className: 'dz-button-primary',
    href: null
  };

  render() {
    const { href, className, children } = this.props;
    if (href) {
      return (
        <a href={href} className={cx('dz-button', className)}>
          {children}
        </a>
      );
    }
    return <button className={cx('dz-button', className)}>{children}</button>;
  }
}

export default Button;
