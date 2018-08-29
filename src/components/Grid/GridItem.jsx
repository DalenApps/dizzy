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
    small: 12,
    medium: 12,
    large: 12,
    xlarge: 12
  };

  render() {
    const { className, children, small, medium, large, xlarge } = this.props;
    const gridSizeClasses = cx(
      `dz-grid-item-small-${small}`,
      `dz-grid-item-medium-${medium}`,
      `dz-grid-item-large-${large}`,
      `dz-grid-item-xlarge-${xlarge}`
    );

    return (
      <div className={cx('dz-grid-item', className, gridSizeClasses)}>
        {children}
      </div>
    );
  }
}

export default GridItem;
