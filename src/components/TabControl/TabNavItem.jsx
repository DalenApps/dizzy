import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class TabNavItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    controlsPane: PropTypes.string,
    tabChangeRequested: PropTypes.func, // Internal
    activePane: PropTypes.string // Internal
  };
  static defaultProps = {
    className: '',
    title: 'Tab',
    controlsPane: null,
    activePane: null
  };
  render() {
    const {
      className,
      title,
      activePane,
      tabChangeRequested,
      controlsPane
    } = this.props;

    return (
      <li
        className={cx(
          'dz-tab-control-selector',
          { active: activePane === controlsPane },
          className
        )}
        onClick={() => tabChangeRequested(controlsPane)}
      >
        {title}
      </li>
    );
  }
}

export default TabNavItem;
