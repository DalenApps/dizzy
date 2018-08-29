import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import GridItem from './GridItem.jsx';

class Grid extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.instanceOf(GridItem)),
      PropTypes.instanceOf(GridItem)
    ]).isRequired
  };
  static defaultProps = {
    className: ''
  };

  render() {
    const { className, children } = this.props;
    return <div className={cx('dz-grid', className)}>{children}</div>;
  }
}

export default Grid;
