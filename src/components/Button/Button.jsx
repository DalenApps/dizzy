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
    iconOnly: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  };
  static defaultProps = {
    className: '',
    size: 'normal',
    variant: 'primary',
    href: null,
    outlined: false,
    noStyle: false,
    rounded: false,
    iconOnly: false,
    loading: false,
    disabled: true
  };
  click() {
    const { onClick, disabled, loading } = this.props;
    if (disabled || loading) return;
    onClick();
  }
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
      iconOnly,
      loading,
      disabled
    } = this.props;
    const styleClasses = cx(
      { [`dz-button-${variant}`]: !outlined && !noStyle && !loading },
      { [`dz-button-outline-${variant}`]: outlined && !noStyle && !loading },
      { 'dz-button-link': noStyle },
      { 'dz-button-rounded': rounded },
      { [`dz-button-${size}`]: size !== 'normal' },
      { 'dz-icon-only': iconOnly || loading },
      { 'dz-button-loading': loading }
    );
    if (href) {
      return (
        <a href={href} className={cx('dz-button', styleClasses, className)}>
          {children}
        </a>
      );
    }
    /*  The way FontAwesome handles replacing i tags with svg's
        is not compatible with how React removes dom nodes. Therefor
        we wrap the tag in a span tag.
    */
    return (
      <button
        className={cx('dz-button', styleClasses, className)}
        onClick={() => this.click()}
        disabled={disabled}
      >
        {loading ? (
          <span>
            <i className="fas fa-spinner fa-pulse" />
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
}

export default Button;
