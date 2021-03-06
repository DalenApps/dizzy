import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class Image extends Component {
  static propTypes = {
    className: PropTypes.string,
    withOverlay: PropTypes.bool,
    responsive: PropTypes.bool,
    rounded: PropTypes.bool,
    img: PropTypes.string
  };
  static defaultProps = {
    className: '',
    overlayContainerClass: '',
    overlayClass: '',
    withOverlay: false,
    responsive: false,
    rounded: false
  };

  render() {
    /* eslint-disable no-unused-vars */
    const {
      className,
      children,
      withOverlay,
      responsive,
      rounded,
      img,
      overlayContainerClass,
      overlayClass,
      ...rest
    } = this.props;
    const containerClassO = cx(
      'dz-image-container',
      { 'dz-image-responsive': responsive },
      { 'dz-image-rounded': rounded }
    );
    const containerClass = cx(
      'dz-image',
      { 'dz-image-responsive': responsive },
      { 'dz-image-rounded': rounded },
      className
    );
    if (withOverlay) {
      return (
        <div className={containerClassO}>
          <img src={img} className="dz-image" {...rest} />
          <div className="dz-image-overlay">{children}</div>
        </div>
      );
    }
    return <img className={containerClass} {...rest} src={img} />;
  }
}

export default Image;
