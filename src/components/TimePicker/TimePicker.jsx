import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class TimePicker extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  static defaultProps = {
    className: ''
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  renderMin() {
    let items = [];
    for (let i = 10; i < 60; i++) {
      items.push(<li>{i}</li>);
    }
    return items;
  }
  render() {
    const { className } = this.props;
    const { open } = this.state;
    return (
      <div
        className={cx('dz-timepicker', className)}
        onClick={() => this.setState({ open: true })}
      >
        <div className={cx('dz-input-control')}>1:30 PM</div>
        <div className={cx('dz-timepicker-content', { visible: open })}>
          <div className={cx('dz-timepicker-column')}>
            <ul>{this.renderMin()}</ul>
          </div>
          <div className={cx('dz-timepicker-column')}>
            <ul>{this.renderMin()}</ul>
          </div>
          <div className={cx('dz-timepicker-column')}>
            <ul>{this.renderMin()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TimePicker;
