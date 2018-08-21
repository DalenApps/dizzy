import React, { Component } from "react";
import PropTypes from "prop-types";
import "./NavBar.css";

class NavBar extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  static defaultProps = {
    className: ""
  };

  render() {
    const { children, className } = this.props;
    return (
      <header className={`dz-navbar ${className ? className : ""}`}>
        <div className="dz-navbar-brand">
            <a href="">Dizzy</a>
          </div>
        {children}
      </header>
    );
  }
}

export default NavBar;
