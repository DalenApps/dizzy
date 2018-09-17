import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class Input extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['small', 'default'])
  };
  static defaultProps = {
    className: '',
    disabled: false,
    size: 'default'
  };

  render() {
    const { className, disabled, onChange, size, ...rest } = this.props;
    const containerClass = cx(
      'dz-input-control',
      'dz-input',
      { 'dz-input-control-small': size === 'small' },
      className
    );
    return (
      <input
        className={containerClass}
        disabled={disabled}
        onChange={e => onChange(e)}
        {...rest}
      />
    );
  }
}

export default Input;
