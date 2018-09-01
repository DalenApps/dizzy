import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableFoot extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {};

  render() {
    const { children, ...rest } = this.props;
    return <tfoot {...rest}>{children}</tfoot>;
  }
}

export default TableFoot;
