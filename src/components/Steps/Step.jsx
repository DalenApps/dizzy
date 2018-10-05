import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class Step extends Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    iconClassName: PropTypes.string,
    titleClassName: PropTypes.string,
    descriptionClassName: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  };
  static defaultProps = {
    containerClassName: '',
    iconClassName: '',
    titleClassName: '',
    descriptionClassName: '',
    icon: 'fa-check',
    title: 'Title',
    description: 'Description',
    active: false,
    disabled: false
  };

  clicked() {
    const { disabled, active, onClick } = this.props;
    if (!disabled && !active) {
      onClick();
    }
  }
  render() {
    const {
      containerClassName,
      iconClassName,
      titleClassName,
      descriptionClassName,
      active,
      disabled,
      icon,
      title,
      description
    } = this.props;
    const containerClass = cx(
      'dz-step',
      containerClassName,
      { 'dz-step-disabled': disabled },
      { 'dz-step-active': active }
    );
    return (
      <div className={containerClass} onClick={() => this.clicked()}>
        <i className={cx('fas', icon, iconClassName)} />
        <div className="dz-step-content">
          <h6 className={cx('dz-step-title', titleClassName)}>{title}</h6>
          <p className={cx('dz-step-description', descriptionClassName)}>
            {description}
          </p>
        </div>
      </div>
    );
  }
}

export default Step;
