import React, { Component } from "react";
import cx from "classnames";
import "./badge.scss";

class Badge extends Component {
  render() {
    const { className, children } = this.props;
    return (
      <span className={cx("dz-badge", className)}>{children}</span>
    );
  }
}

export default Badge;
