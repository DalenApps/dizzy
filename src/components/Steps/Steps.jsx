import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers';
class Steps extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: childProps
  };
  static defaultProps = {
    className: ''
  };

  render() {
    const { className, children } = this.props;
    return <div className={cx('dz-steps', className)}>{children}</div>;
  }
}

export default Steps;
