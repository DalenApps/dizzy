import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class MobileExpander extends Component {
  static propTypes = {
    className: PropTypes.string,
    component: PropTypes.oneOf(['a', 'div'])
  };
  static defaultProps = {
    className: '',
    component: 'a'
  };

  render() {
    const { className, component: Component } = this.props;
    return (
      <Component className={cx('dz-navbar-mobile-expander', className)}>
        <i className="fas fa-bars" />
      </Component>
    );
  }
}

export default MobileExpander;
