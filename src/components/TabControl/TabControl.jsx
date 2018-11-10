import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps, directionProps } from '../../helpers';
import { TabPane } from './';
class TabControl extends Component {
  static propTypes = {
    className: PropTypes.string,
    tabPosition: directionProps,
    initialTab: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    children: childProps
  };
  static defaultProps = {
    className: '',
    tabPosition: 'top',
    initialTab: null
  };

  constructor(props) {
    super(props);
    const { initialTab } = this.props;
    this.state = {
      activePane: initialTab || 'pane_0'
    };
    this.tabChangeRequested = this.tabChangeRequested.bind(this);
  }
  tabChangeRequested(tabId) {
    this.setState({ activePane: tabId });
  }

  renderAndPassPropsToChildren() {
    const { children } = this.props;
    const { activePane } = this.state;
    return React.Children.map(children, child => {
      const { paneId } = child.props;
      if (child.type === TabPane && paneId === null) {
        return React.cloneElement(child, {
          activePane: activePane,
          tabChangeRequested: this.tabChangeRequested,
          // eslint-disable-next-line no-magic-numbers
          paneId: `pane_${children.indexOf(child) - 1}`
        });
      }
      return React.cloneElement(child, {
        activePane: activePane,
        tabChangeRequested: this.tabChangeRequested
      });
    });
  }

  render() {
    const { className, tabPosition } = this.props;
    const directionClass = cx(
      { 'dz-tab-control-left': tabPosition === 'left' },
      { 'dz-tab-control-right': tabPosition === 'right' },
      { 'dz-tab-control-bottom': tabPosition === 'bottom' }
    );
    return (
      <div className={cx('dz-tab-control', directionClass, className)}>
        {this.renderAndPassPropsToChildren()}
      </div>
    );
  }
}

export default TabControl;
