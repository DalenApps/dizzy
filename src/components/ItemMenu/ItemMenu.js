import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ItemMenu.css';
class ItemMenu extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  render() {
    const { className, children } = this.props;
    return (
      <div className={`dz-item-menu ${className ? className : ''}`}>
        {children}
      </div>
    );
  }
}

export default ItemMenu;
