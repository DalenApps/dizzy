import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class Modal extends Component {
  static propTypes = {
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    showOn: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    onClose: PropTypes.func,
    closeOnBackdropClick: PropTypes.bool,
    centered: PropTypes.bool
  };
  static defaultProps = {
    backdropClassName: '',
    contentClassName: '',
    showOn: false,
    closeOnBackdropClick: false,
    centered: true
  };

  backdropClicked() {
    const { closeOnBackdropClick, onClose } = this.props;
    if (closeOnBackdropClick) onClose();
  }

  render() {
    const {
      backdropClassName,
      contentClassName,
      children,
      showOn,
      centered
    } = this.props;
    const backdropClass = cx(
      'dz-modal',
      { 'dz-modal-show': showOn },
      { 'dz-modal-centered': centered },
      backdropClassName
    );
    const contentClass = cx('dz-modal-content', contentClassName);
    return (
      <div className={backdropClass} onClick={() => this.backdropClicked()}>
        <div className={contentClass}>{children}</div>
      </div>
    );
  }
}

export default Modal;
