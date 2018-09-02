import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class Alert extends Component {
  static propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
    message: PropTypes.string.isRequired,
    description: PropTypes.string,
    closable: PropTypes.bool,
    onClose: PropTypes.func,
    withIcon: PropTypes.bool,
    icon: PropTypes.string
  };
  static defaultProps = {
    className: '',
    variant: 'info',
    description: null,
    closable: false,
    withIcon: false,
    icon: null
  };

  getIconFromVariant() {
    const { variant } = this.props;

    switch (variant) {
      case 'info':
        return 'info-circle';
      case 'success':
        return 'check-circle';
      case 'warning':
        return 'exclamation-circle';
      case 'danger':
        return 'times-circle';
    }
  }
  render() {
    const {
      className,
      variant,
      message,
      description,
      closable,
      onClose,
      withIcon,
      icon
    } = this.props;
    if (withIcon) {
      return (
        <div
          className={cx(
            'dz-alert',
            'dz-alert-wi',
            `dz-alert-${variant}`,
            className
          )}
        >
          <span>
            <i
              className={`fas fa-3x fa-fw fa-${icon ||
                this.getIconFromVariant()}`}
            />
          </span>
          <div className={cx('dz-alert-wi-content')}>
            <h1 className={cx('dz-alert-message')}>{message}</h1>
            {description !== null ? (
              <p className={cx('dz-alert-description')}>{description}</p>
            ) : (
              ''
            )}
            {closable ? (
              <span className={cx('dz-alert-close')} onClick={onClose}>
                <i className="fas fa-times" />
              </span>
            ) : (
              ''
            )}
          </div>
        </div>
      );
    }
    return (
      <div className={cx('dz-alert', `dz-alert-${variant}`, className)}>
        <h1 className={cx('dz-alert-message')}>{message}</h1>
        {description !== null ? (
          <p className={cx('dz-alert-description')}>{description}</p>
        ) : (
          ''
        )}
        {closable ? (
          <span className={cx('dz-alert-close')} onClick={onClose}>
            <i className="fas fa-times" />
          </span>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Alert;
