import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { variantProps } from '../../helpers';
class Toast extends Component {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    time: PropTypes.string,
    variant: variantProps
  };
  static defaultProps = {
    className: '',
    icon: null,
    title: '',
    subtitle: '',
    time: '',
    variant: 'primary'
  };

  render() {
    const { className, icon, title, subtitle, time, variant } = this.props;
    const containerClass = cx(
      'dz-toast',
      { 'dz-toast-icon': icon },
      [`dz-toast-${variant}`],
      className
    );
    return (
      <div className={containerClass}>
        {icon ? <i className="fab fa-twitter fa-3x" /> : ''}
        <div className="dz-toast-details">
          <h3 className="dz-toast-title">{title}</h3>
          <div className="dz-toast-subtitle">{subtitle}</div>
          <div className="dz-toast-time">{time}</div>
        </div>
        <button type="button" className="dz-toast-close-button">
          <i className="fas fa-times dz-toast-close-icon" />
        </button>
      </div>
    );
  }
}

export default Toast;
