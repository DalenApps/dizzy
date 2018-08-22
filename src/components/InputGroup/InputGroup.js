import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputGroup.css';

class InputGroup extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {
    className: ''
  };

  render() {
    const { className, children } = this.props;
    return (
      <div
        className={`dz-input-group ${className ? className : ''}`}
        style={{ backgroundColor: '#fff' }}
      >
        {children}
      </div>
    );
  }
}

export default InputGroup;
