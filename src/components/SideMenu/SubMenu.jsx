import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers';
class SubMenu extends Component {
  static propTypes = {
    className: PropTypes.string,
    containerComponent: PropTypes.oneOf(['div', 'ul']),
    children: childProps,
    title: PropTypes.string,
    collapsible: PropTypes.bool,
    collapsed: PropTypes.bool
  };
  static defaultProps = {
    className: '',
    containerComponent: 'ul',
    title: 'SubMenu',
    collapsible: false,
    collapsed: true
  };
  hasActiveChild() {
    const { children } = this.props;
    let hasActive = false;
    React.Children.map(children, child => {
      const { active } = child.props;
      if (active) hasActive = true;
    });
    return hasActive;
  }
  render() {
    const {
      className,
      children,
      containerComponent: ContainerComponent,
      title
    } = this.props;
    const OuterComponent = ContainerComponent === 'div' ? 'div' : 'li';
    const outerClasses = cx('dz-sidemenu-sub', className);
    const linkClasses = cx('dz-sidemenu-item', { selected: active });
    const active = this.hasActiveChild();
    return (
      <OuterComponent className={outerClasses}>
        <div className={linkClasses}>{title}</div>
        <ContainerComponent>{children}</ContainerComponent>
      </OuterComponent>
    );
  }
}

export default SubMenu;
