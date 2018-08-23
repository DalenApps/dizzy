import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './status-box.scss';

class StatusBox extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    icon: PropTypes.string
  };
  static defaultProps = {
    className: '',
    icon: null
  };
  render() {
    const { className, children, icon } = this.props;
    return (
      <div className={cx('dz-statusbox', className)}>
        {icon ? (
          <div className="dz-statusbox-icon">
            <i className={cx('fas', 'fa-2x', `fa-${icon}`)} />
          </div>
        ) : (
          ''
        )}
        <div className="dz-statusbox-content">{children}</div>
      </div>
    );
  }
}

export default StatusBox;
