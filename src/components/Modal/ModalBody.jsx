import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class ModalBody extends Component {
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
    return <div className={cx('dz-modal-body', className)}>{children}</div>;
  }
}

export default ModalBody;
