import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  static defaultProps = {
    className: ''
  };

  render() {
    const { className } = this.props;
    return (
      <input
        className={`dz-input-control dz-input ${className ? className : ''}`}
      />
    );
  }
}

export default Input;
