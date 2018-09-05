import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Badge, RadioButton } from '../..';
class TimePicker extends Component {
  static propTypes = {
    className: PropTypes.string,
    closeOnFocusLost: PropTypes.bool
  };
  static defaultProps = {
    className: '',
    closeOnFocusLost: true
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      selectedHrs: '00',
      selectedMin: '00',
      selectedSec: '00',
      selectedTOD: 'AM'
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
    const { open, selectedTOD } = this.state;
    return (
      <div
        className={cx('dz-timepicker', className)}
        onClick={() => this.setState({ open: true })}
      >
        <div className={cx('dz-input-control', 'dz-timepicker-input')}>
          <span className={cx('dz-timepicker-value')}>13:30:22 PM</span>
          <span
            className={cx('dz-timepicker-close')}
            onClick={() => this.setState({ open: false })}
          >
            <i className="fas fa-times" />
          </span>
        </div>
        <div className={cx('dz-timepicker-content', { visible: open })}>
          <div className={cx('dz-timepicker-content-inner')}>
            <div className={cx('dz-timepicker-column')}>
              <ul>
                <li className={cx('dz-timepicker-list-header')}>Hrs</li>
                {this.renderMin()}
              </ul>
            </div>
            <div className={cx('dz-timepicker-column')}>
              <ul>
                <li className={cx('dz-timepicker-list-header')}>Min</li>
                {this.renderMin()}
              </ul>
            </div>
            <div className={cx('dz-timepicker-column')}>
              <ul>
                <li className={cx('dz-timepicker-list-header')}>Sec</li>
                {this.renderMin()}
              </ul>
            </div>
          </div>
          <div className={cx('dz-timepicker-footer')}>
            <RadioButton
              label={'AM'}
              checked={selectedTOD === 'AM'}
              onCheckChange={() => this.setState({ selectedTOD: 'AM' })}
            />
            <RadioButton
              label={'PM'}
              checked={selectedTOD === 'PM'}
              onCheckChange={() => this.setState({ selectedTOD: 'PM' })}
            />
          </div>
          <div className={cx('dz-timepicker-footer')}>
            <Badge className="dz-badge-success">Custom component</Badge>
          </div>
        </div>
      </div>
    );
  }
}

export default TimePicker;
