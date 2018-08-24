import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './checkbox.scss';

class CheckBox extends Component {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    onCheckChange: PropTypes.func.isRequired
  };
  static defaultProps = {
    className: '',
    checked: false
  };

  _onChange() {
    const { checked, onCheckChange } = this.props;
    console.log('calling internal change func');
    onCheckChange(checked);
  }

  render() {
    const { checked, label, className, onCheckChange } = this.props;
    return (
      <label className={cx('dz-checkbox-container', className)}>
        {label}
        <input
          className="dz-checkbox"
          type="checkbox"
          checked={checked}
          onChange={() => this.onChange()}
        />
        <span className="dz-checkmark" />
      </label>
    );
  }
}

export default CheckBox;
