import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { childProps } from '../../helpers';
class ClickToView extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: childProps,
    label: PropTypes.string
  };
  static defaultProps = {
    className: '',
    label: 'Click To View'
  };

  constructor(props) {
    super(props);
    this.state = {
      activated: false
    };
  }
  activate() {
    this.setState({
      activated: true
    });
  }

  render() {
    const { className, label, children } = this.props;
    const { activated } = this.state;
    return (
      <div className={cx('dz-click-to-view', className)}>
        <span
          className={cx('activator', { hidden: activated })}
          onClick={() => this.activate()}
        >
          {label}
        </span>
        <div className={cx('dz-click-to-view-content', { visible: activated })}>
          {children}
        </div>
      </div>
    );
  }
}

export default ClickToView;
