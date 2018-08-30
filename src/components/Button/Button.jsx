import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    variant: PropTypes.oneOf([
      'primary',
      'darkblue',
      'lightblue',
      'muted',
      'blue',
      'dark',
      'success',
      'danger',
      'warning',
      'purple',
      'white'
    ]),
    href: PropTypes.string,
    outlined: PropTypes.bool,
    noStyle: PropTypes.bool,
    rounded: PropTypes.bool,
    iconOnly: PropTypes.bool
  };
  static defaultProps = {
    className: '',
    size: 'normal',
    variant: 'primary',
    href: null,
    outlined: false,
    noStyle: false,
    rounded: false,
    iconOnly: false
  };

  render() {
    const {
      href,
      className,
      children,
      variant,
      outlined,
      noStyle,
      rounded,
      size,
      iconOnly
    } = this.props;
    const styleClasses = cx(
      { [`dz-button-${variant}`]: !outlined && !noStyle },
      { [`dz-button-outline-${variant}`]: outlined && !noStyle },
      { 'dz-button-link': noStyle },
      { 'dz-button-rounded': rounded },
      { [`dz-button-${size}`]: size !== 'normal' },
      { 'dz-icon-only': iconOnly }
    );
    if (href) {
      return (
        <a href={href} className={cx('dz-button', styleClasses, className)}>
          {children}
        </a>
      );
    }
    return (
      <button className={cx('dz-button', styleClasses, className)}>
        {children}
      </button>
    );
  }
}

export default Button;
