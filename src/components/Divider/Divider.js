import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Divider.css';
class Divider extends Component {
  static propTypes = {
    centered: PropTypes.bool,
    title: PropTypes.string
  };
  static defaultProps = {
    centered: false,
    title: 'Default'
  };

  render() {
    const { centered, title } = this.props;
    return (
      <div className="dz-divider">
        {centered ? <span className="dz-divider-line" /> : ''}
        <span className="dz-divider-title">{title}</span>
        <span className="dz-divider-line" />
      </div>
    );
  }
}

export default Divider;
