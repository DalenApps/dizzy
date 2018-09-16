import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class CardBody extends Component {
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
    const contentClass = cx('dz-card-body', className);
    return <div className={contentClass}>{children}</div>;
  }
}

export default CardBody;
