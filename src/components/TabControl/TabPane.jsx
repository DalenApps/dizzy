import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers';
class TabPane extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    paneId: PropTypes.string,
    activePane: PropTypes.string, // Used internally,
    children: childProps
  };
  static defaultProps = {
    className: '',
    title: 'Tab',
    paneId: null,
    activePane: null // Used internally
  };
  render() {
    const { className, children, activePane, paneId } = this.props;

    return (
      <div
        className={cx('dz-tab-control-pane', className, {
          active: activePane === paneId
        })}
        id={paneId}
      >
        {children}
      </div>
    );
  }
}

export default TabPane;
