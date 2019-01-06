import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { variantProps } from '../../helpers';
class Toggle extends Component {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    withLabels: PropTypes.bool,
    rounded: PropTypes.bool,
    onText: PropTypes.string,
    offText: PropTypes.string,
    onCheckChange: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['normal', 'large']),
    variant: variantProps
  };
  static defaultProps = {
    className: '',
    withLabels: false,
    rounded: false,
    onText: 'ON',
    offText: 'OFF',
    variant: 'primary',
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
      variant,
      className
    } = this.props;
    const labelClass = cx(
      'dz-toggle-container',
      { 'dz-toggle-large': size === 'large' },
      { 'dz-toggle-rounded': rounded },
      [`dz-toggle-${variant}`],
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
      <label className={labelClass}>
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
