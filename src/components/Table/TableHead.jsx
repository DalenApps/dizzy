import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableHead extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {};

  render() {
    const { children, ...rest } = this.props;
    return <thead {...rest}>{children}</thead>;
  }
}

export default TableHead;
