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
    defaultCollapsed: PropTypes.bool
  };
  static defaultProps = {
    className: '',
    containerComponent: 'ul',
    title: 'SubMenu',
    collapsible: false,
    defaultCollapsed: false
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.defaultCollapsed
    };
  }
  hasActiveChild() {
    const { children } = this.props;
    let hasActive = false;
    React.Children.map(children, child => {
      const { active } = child.props;
      if (active) hasActive = true;
    });
    return hasActive;
  }

  getCaret() {
    const { collapsible } = this.props;
    const { collapsed } = this.state;
    if (!collapsible) return '';
    if (collapsed) {
      return <i className="fas fa-caret-down" />;
    } else {
      return <i className="fas fa-caret-up" />;
    }
  }
  toggleCollapsed() {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  }

  render() {
    const {
      className,
      children,
      containerComponent: ContainerComponent,
      title
    } = this.props;
    const { collapsed } = this.state;
    const active = this.hasActiveChild();
    const outerClasses = cx('dz-sidemenu-sub', className);
    const containerClass = cx('dz-sidemenu-sub-container', {
      collapsed: collapsed
    });
    const titleClass = cx('dz-sidemenu-item', 'dz-sidemenu-sub-title', {
      selected: active
    });
    const OuterComponent = ContainerComponent === 'div' ? 'div' : 'li';
    return (
      <OuterComponent className={outerClasses}>
        <div className={titleClass} onClick={() => this.toggleCollapsed()}>
          {title}
          {this.getCaret()}
        </div>
        <ContainerComponent className={containerClass}>
          {children}
        </ContainerComponent>
      </OuterComponent>
    );
  }
}

export default SubMenu;
