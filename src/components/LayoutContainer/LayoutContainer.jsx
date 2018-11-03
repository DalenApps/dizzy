import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class LayoutContainer extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  static defaultProps = {
    className: ''
  };

  render() {
    const { className } = this.props;
    return <div className={cx('dz-layoutcontainer', className)}>d</div>;
  }
}

export default LayoutContainer;
