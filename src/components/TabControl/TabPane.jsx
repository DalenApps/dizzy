import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class TabPane extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    paneId: PropTypes.string.isRequired,
    activePane: PropTypes.string // Used internally
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
