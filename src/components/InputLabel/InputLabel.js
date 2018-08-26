import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class InputLabel extends Component {
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
      <label className={cx('dz-input-label', className)}>{children}</label>
    );
  }
}

export default InputLabel;
