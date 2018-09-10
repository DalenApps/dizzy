import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class List extends Component {
  static propTypes = {
    className: PropTypes.string,
    component: PropTypes.oneOf(['div', 'ul']),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {
    className: '',
    component: 'ul'
  };

  render() {
    const { className, children, component: Component, ...rest } = this.props;
    return (
      <Component className={cx('dz-list', className)} {...rest}>
        {children}
      </Component>
    );
  }
}

export default List;
