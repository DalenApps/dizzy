import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Image, NavUserDropdown } from '../../';
class NavUserItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    component: PropTypes.oneOf(['a', 'div']),
    avatar: PropTypes.string,
    showAvatar: PropTypes.bool
  };
  static defaultProps = {
    className: '',
    component: 'a',
    avatar: null,
    showAvatar: true
  };
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  renderAndPassPropsToChildren() {
    const { children } = this.props;
    return React.Children.map(children, child => {
      if (child.type === NavUserDropdown) {
        return React.cloneElement(child, {
          open: this.state.open
        });
      }
      return React.cloneElement(child);
    });
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const { className, avatar, showAvatar, component: Component } = this.props;
    return (
      <Component
        className={cx('dz-navbar-menu-item', 'dz-user-item', className)}
        onClick={() => this.toggle()}
      >
        {avatar != null && showAvatar ? <Image img={avatar} /> : ''}
        {this.renderAndPassPropsToChildren()}
        <i className="fas fa-caret-down" />
      </Component>
    );
  }
}

export default NavUserItem;
