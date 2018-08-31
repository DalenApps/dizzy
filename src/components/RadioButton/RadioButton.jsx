import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class RadioButton extends Component {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onCheckChange: PropTypes.func.isRequired
  };
  static defaultProps = {
    className: '',
    checked: false,
    name: 'radio_group',
    label: 'default'
  };

  _onChange() {
    const { onCheckChange } = this.props;
    onCheckChange();
  }

  render() {
    const { checked, name, label, className } = this.props;
    return (
      <label className={cx('dz-radiobutton-container', className)}>
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
