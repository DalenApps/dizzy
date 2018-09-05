import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class ListItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    component: PropTypes.oneOf(['div', 'li']),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {
    className: '',
    component: 'li'
  };

  render() {
    const { className, children, component: Component, ...rest } = this.props;
    return (
      <Component className={cx('dz-list-item', className)} {...rest}>
        {children}
      </Component>
    );
  }
}

export default ListItem;
