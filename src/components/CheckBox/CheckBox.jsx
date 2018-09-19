import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { variantProps } from '../../helpers';

class CheckBox extends Component {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string,
    variant: variantProps,
    onCheckChange: PropTypes.func.isRequired
  };
  static defaultProps = {
    className: '',
    checked: false,
    label: 'Checkbox',
    variant: 'primary'
  };

  _onChange() {
    const { onCheckChange } = this.props;
    onCheckChange();
  }

  render() {
    const { checked, label, variant, className } = this.props;
    const labelClass = cx(
      'dz-checkbox-container',
      [`dz-checkbox-${variant}`],
      className
    );
    return (
      <label className={labelClass}>
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
