import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
class Toast extends Component {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {
    className: 'dz-toast-success',
    icon: null
  };

  render() {
    const { className, icon } = this.props;
    return (
      <div className={cx('dz-toast', { 'dz-toast-icon': icon }, className)}>
        {icon ? <i className="fab fa-twitter fa-3x" /> : ''}
        <div className="dz-toast-details">
          <h3 className="dz-toast-title">Changes applied</h3>
          <div className="dz-toast-subtitle">
            Your profile was successfully updated
          </div>
          <div className="dz-toast-time">24 seconds ago</div>
        </div>
        <button type="button" className="dz-toast-close-button">
          <i className="fas fa-times dz-toast-close-icon" />
        </button>
      </div>
    );
  }
}

export default Toast;
