import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers';
class MenuItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    containerComponent: PropTypes.oneOf(['div', 'li']),
    linkComponent: PropTypes.oneOf(['a', PropTypes.node]),
    linksTo: PropTypes.string,
    children: childProps,
    active: PropTypes.bool,
    onClick: PropTypes.func
  };
  static defaultProps = {
    className: '',
    linkComponent: 'a',
    containerComponent: 'li',
    linksTo: '#',
    active: false,
    onClick: null
  };

  linkClicked(e) {
    const { onClick } = this.props;
    if (onClick !== null) {
      e.preventDefault();
      onClick();
    }
  }
  render() {
    const {
      className,
      children,
      containerComponent: ContainerComponent,
      linkComponent: LinkComponent,
      linksTo,
      active
    } = this.props;
    const containerClass = cx(
      'dz-sidemenu-item',
      { selected: active },
      className
    );
    return (
      <ContainerComponent className={containerClass}>
        <LinkComponent href={linksTo} onClick={e => this.linkClicked(e)}>
          {children}
        </LinkComponent>
      </ContainerComponent>
    );
  }
}

export default MenuItem;
