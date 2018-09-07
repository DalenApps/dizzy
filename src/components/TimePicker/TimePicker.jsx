import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { RadioButton } from '../..';
import moment from 'moment';
class TimePicker extends Component {
  static propTypes = {
    className: PropTypes.string,
    closeOnFocusLost: PropTypes.bool,
    footerComponent: PropTypes.node,
    defaultValue: PropTypes.instanceOf(moment),
    disabled: PropTypes.bool,
    format: PropTypes.string,
    defaultHourStep: PropTypes.number,
    defaultMinuteStep: PropTypes.number,
    defaultSecondStep: PropTypes.number,
    use24Hour: PropTypes.bool,
    showHeaders: PropTypes.bool,
    value: PropTypes.instanceOf(moment),
    onChange: PropTypes.func
  };
  static defaultProps = {
    className: '',
    closeOnFocusLost: true,
    footerComponent: null,
    disabled: false,
    format: 'HH:mm:ss',
    defaultHourStep: 1,
    defaultMinuteStep: 1,
    defaultSecondStep: 1,
    use24Hour: false,
    value: null,
    showHeaders: true,
    onChange: () => {}
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

  getMomentFormat() {
    const { use24Hour } = this.props;
  }

  getSelectedValue() {
    let value = '';
  }
  renderFooter() {
    const { footerComponent } = this.props;
    if (!footerComponent) return '';
    return (
      <div className={cx('dz-timepicker-footer')}>{footerComponent()}</div>
    );
  }
  render12HourSelector() {
    const { selectedTOD } = this.state;
    return (
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
    );
  }
  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  renderSec() {
    const { defaultSecondStep } = this.props;
    let items = [];
    for (let i = 0; i < 60; i = i + defaultSecondStep) {
      items.push(<li>{this.pad(i, 2)}</li>);
    }
    return items;
  }

  renderHrs() {
    const { defaultHourStep } = this.props;
    let items = [];
    for (let i = 0; i < 60; i = i + defaultHourStep) {
      items.push(<li>{this.pad(i, 2)}</li>);
    }
    return items;
  }

  renderMin() {
    const { defaultMinuteStep } = this.props;
    let items = [];
    for (let i = 0; i < 60; i = i + defaultMinuteStep) {
      items.push(<li>{this.pad(i, 2)}</li>);
    }
    return items;
  }
  render() {
    const { className, showHeaders } = this.props;
    const { open } = this.state;
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
                {showHeaders ? (
                  <li className={cx('dz-timepicker-list-header')}>Hrs</li>
                ) : (
                  ''
                )}
                {this.renderHrs()}
              </ul>
            </div>
            <div className={cx('dz-timepicker-column')}>
              <ul>
                {showHeaders ? (
                  <li className={cx('dz-timepicker-list-header')}>Min</li>
                ) : (
                  ''
                )}
                {this.renderMin()}
              </ul>
            </div>
            <div className={cx('dz-timepicker-column')}>
              <ul>
                {showHeaders ? (
                  <li className={cx('dz-timepicker-list-header')}>Sec</li>
                ) : (
                  ''
                )}
                {this.renderSec()}
              </ul>
            </div>
          </div>
          {this.render12HourSelector()}
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}

export default TimePicker;
