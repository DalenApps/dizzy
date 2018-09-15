import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers';
class SubMenu extends Component {
  static propTypes = {
    className: PropTypes.string,
    containerComponent: PropTypes.oneOf(['div', 'ul']),
    linkComponent: PropTypes.oneOf(['a', PropTypes.node]),
    children: childProps,
    title: PropTypes.string
  };
  static defaultProps = {
    className: '',
    containerComponent: 'ul',
    linkComponent: 'a',
    title: 'SubMenu'
  };

  render() {
    const {
      className,
      children,
      containerComponent: ContainerComponent,
      linkComponent: LinkComponent,
      title
    } = this.props;
    const OuterComponent = Component === 'div' ? 'div' : 'li';
    return (
      <OuterComponent className={cx('dz-sidemenu-sub', className)}>
        <LinkComponent className="dz-sidemenu-item selected">
          {title}
        </LinkComponent>
        <ContainerComponent>{children}</ContainerComponent>
      </OuterComponent>
    );
  }
}

export default SubMenu;
