import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './checkbox.scss';

class CheckBox extends Component {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string,
    onCheckChange: PropTypes.func.isRequired
  };
  static defaultProps = {
    className: '',
    checked: false,
    label: 'Checkbox'
  };

  _onChange() {
    const { onCheckChange } = this.props;
    onCheckChange();
  }

  render() {
    const { checked, label, className } = this.props;
    return (
      <label className={cx('dz-checkbox-container', className)}>
        {label}
        <input
          className="dz-checkbox"
          type="checkbox"
          checked={checked}
          onChange={() => this._onChange()}
        />
        <span className="dz-checkmark" />
      </label>
    );
  }
}

export default CheckBox;
