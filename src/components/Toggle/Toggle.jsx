import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
class Toggle extends Component {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    withLabels: PropTypes.bool,
    rounded: PropTypes.bool,
    onText: PropTypes.string,
    offText: PropTypes.string,
    onCheckChange: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['small', 'normal'])
  };
  static defaultProps = {
    className: '',
    withLabels: false,
    rounded: false,
    onText: 'ON',
    offText: 'OFF',
    size: 'normal'
  };
  _onChange() {
    const { onCheckChange } = this.props;
    onCheckChange();
  }
  render() {
    const {
      checked,
      withLabels,
      onText,
      offText,
      size,
      rounded,
      className
    } = this.props;
    const labelClass = cx(
      'dz-toggle-container',
      { 'dz-toggle-large': size === 'large' },
      { 'dz-toggle-rounded': rounded },
      className
    );
    if (withLabels) {
      return (
        <div className={cx('dz-toggle-with-label')}>
          <span className={cx('dz-toggle-label')}>{offText}</span>
          <label className={labelClass}>
            <input
              type="checkbox"
              className={cx('dz-toggle')}
              checked={checked}
              onChange={() => this._onChange()}
            />
            <span className={cx('dz-toggle-button')} />
          </label>
          <span className={cx('dz-toggle-label')}>{onText}</span>
        </div>
      );
    }
    return (
      <label className={cx('dz-toggle-container', className)}>
        <input
          type="checkbox"
          className={cx('dz-toggle')}
          checked={checked}
          onChange={() => this._onChange()}
        />
        <span className={cx('dz-toggle-button')} />
      </label>
    );
  }
}

export default Toggle;
