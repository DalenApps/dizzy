import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableBody extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {};

  render() {
    const { children, ...rest } = this.props;
    return <tbody {...rest}>{children}</tbody>;
  }
}

export default TableBody;
