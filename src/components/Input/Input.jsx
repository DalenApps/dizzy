import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class Input extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  static defaultProps = {
    className: ''
  };

  render() {
    const { className, ...rest } = this.props;
    const containerClass = cx('dz-input-control', 'dz-input', className);
    return <input className={containerClass} {...rest} />;
  }
}

export default Input;
