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
    children: childProps
  };
  static defaultProps = {
    className: '',
    linkComponent: 'a',
    containerComponent: 'li',
    linksTo: '#'
  };

  render() {
    const {
      className,
      children,
      containerComponent: ContainerComponent,
      linkComponent: LinkComponent,
      linksTo
    } = this.props;
    return (
      <ContainerComponent className={cx('dz-sidemenu-item', className)}>
        <LinkComponent href={linksTo}>{children}</LinkComponent>
      </ContainerComponent>
    );
  }
}

export default MenuItem;
