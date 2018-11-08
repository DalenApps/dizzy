import React, { Component } from 'react';
  import cx from 'classnames';
  import PropTypes from 'prop-types';
  class SocialButton extends Component {
    static propTypes = {
      className: PropTypes.string
    };
    static defaultProps = {
      className: ''
    };
  
    render() {
      const { className } = this.props;
      return (
        <div className={cx('dz-socialbutton', className)}>
          
        </div>
      );
    }
  }
  
  export default SocialButton;
  