import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { variantProps } from '../../helpers';

class ProgressBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    completed: PropTypes.number.isRequired,
    striped: PropTypes.bool,
    animated: PropTypes.bool,
    variant: variantProps,
    title: PropTypes.string
  };
  static defaultProps = {
    className: '',
    completed: 0,
    title: '',
    striped: false,
    animated: false,
    variant: 'primary'
  };
  render() {
    const {
      className,
      title,
      completed,
      variant,
      striped,
      animated
    } = this.props;
    const innerClass = cx(
      'dz-progress-bar-inner',
      [`dz-progress-${variant}`],
      { 'dz-progress-striped': striped },
      { 'dz-progress-animated': animated },
      className
    );
    return (
      <div className={cx('dz-progress-bar-container')}>
        <div className={innerClass} style={{ width: `${completed}%` }}>
          {title}
        </div>
      </div>
    );
  }
}

export default ProgressBar;
