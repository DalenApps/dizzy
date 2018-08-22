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
    ]).isRequired
  };
  static defaultProps = {
    className: ''
  };
  render() {
    const { className, children } = this.props;
    return (
      <div className={cx('dz-statusbox', className)}>
        <div className="dz-statusbox-icon">
          <i className="fas fa-plus fa-2x" />
        </div>
        <div className="dz-statusbox-content">
          <p className="title">24%</p>
          <p className="subtitle">Sales this week</p>
        </div>
      </div>
    );
  }
}

export default StatusBox;
