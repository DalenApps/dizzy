import React, { Component } from "react";
import "./TextArea.css";

class TextArea extends Component {
  render() {
    const { href, className, children } = this.props;
    return <textarea className="dz-input-control dz-text-area" />;
  }
}

export default TextArea;
