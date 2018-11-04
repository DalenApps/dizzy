import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers';
class InputField extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: childProps,
    labelVisible: PropTypes.bool,
    input: PropTypes.Component,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    variant: PropTypes.oneOf(['success', 'warning', 'error']),
    helpText: PropTypes.string
  };
  static defaultProps = {
    className: '',
    labelVisible: true,
    required: false,
    variant: '',
    helpText: ''
  };
  renderRequired() {
    const { required } = this.props;
    if (required) {
      return <span className="dz-input-field-required">Required</span>;
    }
  }
  render() {
    const { className, children, label, helpText, variant } = this.props;
    return (
      <div className={cx('dz-input-field', className, variant)}>
        <div className="dz-input-field-header">
          <span className="dz-input-field-label">{label}</span>
          {this.renderRequired()}
        </div>
        <div className="dz-input-field-content">
          {children}
          <span className={cx('dz-input-field-help')}>{helpText}</span>
        </div>
      </div>
    );
  }
}

export default InputField;
