import React, { Component } from "react";
import "./ItemMenu.css";


const ItemItem = <div className="item-item">Hello</div>

class ItemMenu extends Component {
  render() {
    const { href, className, children } = this.props;
    return <div className={`dz-item-menu ${className ? className : ''}`}>{children}</div>;
  }
}

export default ItemMenu;
