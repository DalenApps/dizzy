import React, { Component } from "react";
import "./IconSelect.css";

const IconSelectItem = ({ icon, label }) => (
  <div className="dz-icon-select">
    <i className={icon} />
    <label htmlFor="">{label}</label>
  </div>
);

class IconSelect extends Component {
  render() {
    return (
      <div className="dz-icon-select-grid">
        <IconSelectItem icon="fab fa-twitter" label="Twitter" />
        <IconSelectItem icon="fab fa-google" label="Google" />
        <IconSelectItem icon="fab fa-github" label="GitHub" />
        <IconSelectItem icon="fab fa-slack" label="Slack" />
      </div>
    );
  }
}

export default IconSelect;
