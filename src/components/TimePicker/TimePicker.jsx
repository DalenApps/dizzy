import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { RadioButton } from '../..';
import moment from 'moment';
/* eslint no-magic-numbers: ["error", { "ignore": [1,2,12,23,59] }] */
class TimePicker extends Component {
  static propTypes = {
    className: PropTypes.string,
    closeOnFocusLost: PropTypes.bool,
    footerComponent: PropTypes.func,
    disabled: PropTypes.bool,
    format: PropTypes.string,
    defaultHourStep: PropTypes.number,
    defaultMinuteStep: PropTypes.number,
    defaultSecondStep: PropTypes.number,
    use24Hour: PropTypes.bool,
    showHeaders: PropTypes.bool,
    value: PropTypes.instanceOf(moment),
    onChange: PropTypes.func,
    hrsEnabled: PropTypes.bool,
    minEnabled: PropTypes.bool,
    secEnabled: PropTypes.bool
  };
  static defaultProps = {
    className: '',
    closeOnFocusLost: true,
    footerComponent: null,
    disabled: false,
    defaultHourStep: 1,
    defaultMinuteStep: 1,
    defaultSecondStep: 1,
    use24Hour: false,
    format: 'h:mm:ss A',
    value: null,
    showHeaders: true,
    onChange: null,
    hrsEnabled: true,
    minEnabled: true,
    secEnabled: true
  };
  constructor(props) {
    super(props);
    if (props.value) {
      this.state = {
        open: true,
        selectedHrs: props.value.hour(),
        selectedMin: props.value.minute(),
        selectedSec: props.value.second(),
        selectedTOD: props.value.format('A')
      };
    } else {
      this.state = {
        open: true,
        selectedHrs: '00',
        selectedMin: '00',
        selectedSec: '00',
        selectedTOD: 'AM'
      };
    }
  }

  getSelectedValue() {
    const {
      selectedHrs,
      selectedMin,
      selectedSec,
      selectedTOD
    } = this.state;
    const {
      hrsEnabled,
      minEnabled,
      secEnabled,
      use24Hour
    } = this.props;
    const { format } = this.props;
    let value = '';
    if (hrsEnabled) {
      value = value + `${selectedHrs}:`;
    }
    if (minEnabled) value = value + `${selectedMin}:`;
    if (secEnabled) value = value + `${selectedSec}`;
    if (!use24Hour) value = value + ` ${selectedTOD}`;
    return moment(value, format);
  }
  changeHour(hrs) {
    const { onChange } = this.props;
    this.setState({ selectedHrs: hrs }, () => {
      onChange(this.getSelectedValue());
    });
  }
  changeMin(min) {
    const { onChange } = this.props;
    this.setState({ selectedMin: min }, () => {
      onChange(this.getSelectedValue());
    });
  }
  changeSec(sec) {
    const { onChange } = this.props;
    this.setState({ selectedSec: sec }, () => {
      onChange(this.getSelectedValue());
    });
  }
  changeMeridiem(meridiem) {
    const { onChange } = this.props;
    this.setState({ selectedTOD: meridiem }, () => {
      onChange(this.getSelectedValue());
    });
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
    const { use24Hour } = this.props;
    if (use24Hour) return '';
    return (
      <div className={cx('dz-timepicker-footer')}>
        <RadioButton
          label={'AM'}
          checked={selectedTOD === 'AM'}
          onCheckChange={() => this.changeMeridiem('AM')}
        />
        <RadioButton
          label={'PM'}
          checked={selectedTOD === 'PM'}
          onCheckChange={() => this.changeMeridiem('PM')}
        />
      </div>
    );
  }
  toggleOpen() {
    const { disabled } = this.props;
    const { open } = this.state;
    if (disabled) return;
    this.setState({ open: !open });
  }
  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  renderSec() {
    const { showHeaders, defaultSecondStep, secEnabled } = this.props;
    if (!secEnabled) return '';

    let items = [];
    for (let i = 0; i <= 59; i = i + defaultSecondStep) {
      let val = this.pad(i, 2);
      items.push(
        <li key={`sec-${val}`} onClick={() => this.changeSec(val)}>
          {val}
        </li>
      );
    }
    return (
      <div className={cx('dz-timepicker-column')}>
        <ul>
          {showHeaders ? (
            <li className={cx('dz-timepicker-list-header')}>Sec</li>
          ) : (
            ''
          )}
          {items}
        </ul>
      </div>
    );
  }

  renderHrs() {
    const { showHeaders, defaultHourStep, use24Hour, hrsEnabled } = this.props;
    if (!hrsEnabled) return '';
    let items = [];
    if (use24Hour) {
      for (let i = 0; i <= 23; i = i + defaultHourStep) {
        let val = this.pad(i, 2);
        items.push(
          <li key={`hrs-${val}`} onClick={() => this.changeHour(val)}>
            {val}
          </li>
        );
      }
    } else {
      for (let i = 1; i <= 12; i = i + defaultHourStep) {
        let val = this.pad(i, 2);
        items.push(
          <li key={`hrs-${val}`} onClick={() => this.changeHour(val)}>
            {val}
          </li>
        );
      }
    }
    return (
      <div className={cx('dz-timepicker-column')}>
        <ul>
          {showHeaders ? (
            <li className={cx('dz-timepicker-list-header')}>Hrs</li>
          ) : (
            ''
          )}
          {items}
        </ul>
      </div>
    );
  }

  renderMin() {
    const { showHeaders, defaultMinuteStep, minEnabled } = this.props;
    if (!minEnabled) return '';
    let items = [];
    for (let i = 0; i <= 59; i = i + defaultMinuteStep) {
      let val = this.pad(i, 2);
      items.push(
        <li key={`min-${val}`} onClick={() => this.changeMin(val)}>
          {val}
        </li>
      );
    }
    return (
      <div className={cx('dz-timepicker-column')}>
        <ul>
          {showHeaders ? (
            <li className={cx('dz-timepicker-list-header')}>Min</li>
          ) : (
            ''
          )}
          {items}
        </ul>
      </div>
    );
  }
  render() {
    const { className, disabled } = this.props;
    const { open } = this.state;
    const icon = open ? 'fa-times' : 'fa-clock';
    const iconClass = cx('fas', icon);
    const containerClass = cx(
      'dz-timepicker',
      { 'dz-timepicker-disabled': disabled },
      className
    );
    const inputClass = cx('dz-input-control', 'dz-timepicker-input');
    const togglerClass = cx('dz-timepicker-close');
    return (
      <div className={containerClass} onClick={() => this.toggleOpen()}>
        <div className={inputClass}>
          <span className={cx('dz-timepicker-value')}>
            {this.getSelectedValue().format(this.props.format)}
          </span>
          <span className={togglerClass} onClick={() => this.toggleOpen()}>
            <i className={iconClass} />
          </span>
        </div>
        <div
          className={cx('dz-timepicker-content', {
            visible: open && !disabled
          })}
        >
          <div className={cx('dz-timepicker-content-inner')}>
            {this.renderHrs()}
            {this.renderMin()}
            {this.renderSec()}
          </div>
          {this.render12HourSelector()}
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}

export default TimePicker;
