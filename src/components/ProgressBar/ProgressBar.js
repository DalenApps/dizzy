import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './progress-bar.scss';

class ProgressBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    completed: PropTypes.number.isRequired,
    title: PropTypes.string
  };
  static defaultProps = {
    className: '',
    completed: 0,
    title: ''
  };
  render() {
    const { className, title, completed } = this.props;
    return (
      <div className={cx('dz-progress-bar-container')}>
        <div
          className={cx('dz-progress-bar-inner', className)}
          style={{ width: `${completed}%` }}
        >
          {title}
        </div>
      </div>
    );
  }
}

export default ProgressBar;
