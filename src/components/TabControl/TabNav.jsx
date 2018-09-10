import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers';
class TabNav extends Component {
  static propTypes = {
    className: PropTypes.string,
    activePane: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tabChangeRequested: PropTypes.func,
    children: childProps
  };
  static defaultProps = {
    className: '',
    activePane: null
  };

  renderAndPassPropsToChildren() {
    const { children, activePane, tabChangeRequested } = this.props;
    return React.Children.map(children, child => {
      const { controlsPane } = child.props;
      if (controlsPane === null) {
        return React.cloneElement(child, {
          activePane: activePane,
          tabChangeRequested: tabChangeRequested,
          controlsPane: `pane_${children.indexOf(child)}`
        });
      }
      return React.cloneElement(child, {
        activePane: activePane,
        tabChangeRequested: tabChangeRequested
      });
    });
  }
  render() {
    const { className } = this.props;
    return (
      <ul className={cx('dz-tab-control-list', className)}>
        {this.renderAndPassPropsToChildren()}
      </ul>
    );
  }
}

export default TabNav;
