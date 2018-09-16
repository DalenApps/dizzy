import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { variantProps } from '../../helpers/props-helper';
class Accordion extends Component {
  static propTypes = {
    className: PropTypes.string,
    triggerClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    variant: variantProps,
    bordered: PropTypes.bool,
    filled: PropTypes.bool,
    condensed: PropTypes.bool,
    title: PropTypes.string
  };
  static defaultProps = {
    className: '',
    triggerClassName: '',
    contentClassName: '',
    variant: null,
    bordered: false,
    filled: false,
    condensed: false,
    title: 'Open'
  };

  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
  }
  toggle() {
    const { isToggled } = this.state;
    this.setState({ isToggled: !isToggled });
  }
  render() {
    const {
      className,
      triggerClassName,
      contentClassName,
      filled,
      bordered,
      variant,
      condensed,
      title,
      children
    } = this.props;
    const { isToggled } = this.state;
    const containerClass = cx(
      'dz-accordion-container',
      { 'dz-accordion-filled': filled },
      { 'dz-accordion-bordered': bordered },
      { 'dz-accordion-condensed': condensed },
      { [`dz-accordion-${variant}`]: variant },
      className
    );
    const triggerClass = cx('dz-accordion-trigger', triggerClassName);
    const caretClass = cx(
      { 'dz-caret-down': !isToggled },
      { 'dz-caret-up': isToggled }
    );
    const contentClass = cx(
      'dz-accordion-content',
      { 'dz-show': isToggled },
      contentClassName
    );
    return (
      <div className={containerClass}>
        <div className={triggerClass} onClick={() => this.toggle()}>
          {title}
          <span className={caretClass} />
        </div>
        <div className={contentClass}>{children}</div>
      </div>
    );
  }
}

export default Accordion;
