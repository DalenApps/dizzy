import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './TextArea.css';

class TextArea extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  static defaultProps = {};
  render() {
    const { className } = this.props;
    return (
      <textarea className={cx('dz-input-control', 'dz-text-area', className)} />
    );
  }
}

export default TextArea;
