import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class TextArea extends Component {
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
    const { className, size, onChange, disabled, ...rest } = this.props;
    const containerClass = cx(
      'dz-input-control',
      'dz-text-area',
      { 'dz-input-control-small': size === 'small' },
      className
    );
    return (
      <textarea
        className={containerClass}
        disabled={disabled}
        onChange={e => onChange(e)}
        {...rest}
      />
    );
  }
}

export default TextArea;
