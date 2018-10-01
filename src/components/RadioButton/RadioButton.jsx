import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { variantProps } from '../../helpers';
class RadioButton extends Component {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    variant: variantProps,
    onCheckChange: PropTypes.func.isRequired
  };
  static defaultProps = {
    className: '',
    checked: false,
    name: 'radio_group',
    label: 'default',
    variant: 'primary'
  };

  _onChange() {
    const { onCheckChange } = this.props;
    onCheckChange();
  }

  render() {
    const { checked, variant, name, label, className } = this.props;
    const labelClass = cx(
      'dz-radiobutton-container',
      [`dz-radiobutton-${variant}`],
      className
    );
    return (
      <label className={labelClass}>
        {label}
        <input
          className="dz-radiobutton"
          type="radio"
          checked={checked}
          name={name}
          onChange={() => this._onChange()}
        />
        <span className="dz-radiobutton-selected" />
      </label>
    );
  }
}

export default RadioButton;
