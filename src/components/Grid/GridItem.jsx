import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class GridItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    xlarge: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {
    className: '',
    small: null,
    medium: null,
    large: null,
    xlarge: null
  };

  render() {
    const { className, children, small, medium, large, xlarge } = this.props;
    const gridSizeClasses = cx(
      { [`dz-grid-item-small-${small}`]: small !== null },
      { [`dz-grid-item-small-${medium}`]: medium !== null },
      { [`dz-grid-item-small-${large}`]: large !== null },
      { [`dz-grid-item-small-${xlarge}`]: xlarge !== null }
    );

    return (
      <div className={cx('dz-grid-item', className, gridSizeClasses)}>
        {children}
      </div>
    );
  }
}

export default GridItem;
