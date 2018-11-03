import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers';
class LayoutContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    narrow: PropTypes.bool,
    children: childProps
  };
  static defaultProps = {
    className: '',
    narrow: false
  };

  render() {
    const { className, children, narrow } = this.props;
    const containerClass = cx(
      { 'dz-container': !narrow },
      { 'dz-container-fluid': narrow },
      className
    );
    return <div className={containerClass}>{children}</div>;
  }
}

export default LayoutContainer;
