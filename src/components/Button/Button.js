import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const { href, className, children } = this.props;
    if (href) {
      return (
        <a href={href} className={`button ${className ? className : ''}`}>
          {children}
        </a>
      );
    }
    return <button className={`button ${className ? className : ''}`}>{children}</button>;
  }
}

export default Button;
