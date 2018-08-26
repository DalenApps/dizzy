import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class Divider extends Component {
  static propTypes = {
    className: PropTypes.string,
    centered: PropTypes.bool,
    title: PropTypes.string
  };
  static defaultProps = {
    className: '',
    centered: false,
    title: 'Default'
  };

  render() {
    const { centered, title, className } = this.props;
    return (
      <div className={cx('dz-divider', className)}>
        {centered ? <span className="dz-divider-line" /> : ''}
        <span className="dz-divider-title">{title}</span>
        <span className="dz-divider-line" />
      </div>
    );
  }
}

export default Divider;
