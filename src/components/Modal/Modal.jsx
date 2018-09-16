import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class Modal extends Component {
  static propTypes = {
    className: PropTypes.string,
    showOn: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    onClose: PropTypes.func,
    closeOnBackdropClick: PropTypes.bool
  };
  static defaultProps = {
    className: '',
    showOn: false,
    closeOnBackdropClick: false
  };

  backdropClicked() {
    const { closeOnBackdropClick, onClose } = this.props;
    if (closeOnBackdropClick) onClose();
  }
  render() {
    const { className, children, showOn } = this.props;
    return (
      <div
        className={cx('dz-modal', { 'dz-modal-show': showOn }, className)}
        onClick={() => this.backdropClicked()}
      >
        <div className={cx('dz-modal-content')}>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
