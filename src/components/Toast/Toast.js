import React, { Component } from "react";
import "./Toast.css";

class Toast extends Component {
  render() {
    const { href, className, children } = this.props;
    return (
      <div class="dz-toast dz-toast-success dz-toast-icon">
        {this.props.icon ? <i className="fab fa-twitter fa-3x" /> : ""}
        <div className="dz-toast-details">
          <h3 className="dz-toast-title">Changes applied</h3>
          <div className="dz-toast-subtitle">
            Your profile was successfully updated
          </div>
          <div className="dz-toast-time">24 seconds ago</div>
        </div>
        <button type="button" className="dz-toast-close-button">
          <i className="fas fa-times dz-toast-close-icon" />
        </button>
      </div>
    );
  }
}

export default Toast;
