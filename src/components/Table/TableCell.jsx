import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableCell extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    component: PropTypes.oneOf(['th', 'td'])
  };
  static defaultProps = {
    component: 'td'
  };

  render() {
    const { children, component: Component, ...rest } = this.props;
    return <Component {...rest}>{children}</Component>;
  }
}

export default TableCell;
