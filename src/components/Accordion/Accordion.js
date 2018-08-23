import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './accordion.scss';
class Accordion extends Component {
  static propTypes = {
    className: PropTypes.string,
    triggerClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {
    className: '',
    triggerClassName: '',
    contentClassName: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
  }
  render() {
    const {
      className,
      triggerClassName,
      contentClassName,
      children
    } = this.props;
    const { isToggled } = this.state;

    return (
      <div className={cx('dz-accordion-container', className)}>
        <div
          className={cx('dz-accordion-trigger', triggerClassName)}
          onClick={() => this.setState({ isToggled: !this.state.isToggled })}
        >
          Open
          {this.state.isToggled ? (
            <i className="fas fa-minus close-icon" />
          ) : (
            <i className="fas fa-plus close-icon" />
          )}
        </div>
        <div
          className={cx(
            'dz-accordion-content',
            { 'dz-show': isToggled },
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Accordion;
