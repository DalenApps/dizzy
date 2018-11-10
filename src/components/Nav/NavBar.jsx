import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { MobileExpander } from './MobileExpander';
class NavBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    useViewPort: PropTypes.bool
  };
  static defaultProps = {
    className: '',
    useViewPort: false
  };

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    const { children, useViewPort, className } = this.props;
    if (useViewPort) {
      return (
        <header className={cx('dz-navbar', className)}>
          <div
            className={cx('dz-navbar-viewport', {
              expanded: this.state.expanded
            })}
          >
            {children}
            <MobileExpander
              onClick={() => this.setState({ expanded: !this.state.expanded })}
            />
          </div>
        </header>
      );
    }
    return (
      <header
        className={cx('dz-navbar', className, {
          expanded: this.state.expanded
        })}
      >
        {children}
        <MobileExpander
          onClick={() => this.setState({ expanded: !this.state.expanded })}
        />
      </header>
    );
  }
}

export default NavBar;
