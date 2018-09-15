import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class BrandImage extends Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string
  };
  static defaultProps = {
    className: ''
  };

  render() {
    const { src, className } = this.props;
    return (
      <img
        src={src}
        alt="navbrandimg"
        className={cx('dz-brand-image', className)}
      />
    );
  }
}

export default BrandImage;
