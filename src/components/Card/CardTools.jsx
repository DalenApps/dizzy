import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class CardTools extends Component {
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
    const contentClass = cx('dz-card-header-tools', className);
    return <div className={contentClass}>{children}</div>;
  }
}

export default CardTools;
