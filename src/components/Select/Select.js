import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './select.scss';
class Select extends Component {
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onItemSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        label: PropTypes.string
      })
    ),
    selectedItem: PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.string
    })
  };
  static defaultProps = {
    className: '',
    placeholder: 'Select...',
    options: []
  };

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.wrapperRef = null;
  }
  componentDidMount() {
    document.addEventListener('mousedown', e => this._handleClickOutside(e));
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', e => this._handleClickOutside(e));
  }
  _toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
  _selectItem(item) {
    const { onItemSelect } = this.props;
    this.setState({ expanded: false }, () => {
      onItemSelect(item);
    });
  }

  _getSelectedLabel() {
    const { placeholder, selectedItem } = this.props;
    /* eslint no-undefined: "error" */
    if (typeof selectedItem === 'undefined' || selectedItem === null) {
      return placeholder;
    }
    return selectedItem.label;
  }

  _setWrapperRef(node) {
    this.wrapperRef = node;
  }
  _handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ expanded: false });
    }
  }
  _renderOptions() {
    const { expanded } = this.state;
    if (!expanded) return;
    const { options, selectedItem } = this.props;
    return (
      <div className={cx('dz-select-options')}>
        {options.map(option => {
          return (
            <div
              key={option.value}
              className={cx('dz-select-option', {
                'dz-select-option-selected': selectedItem === option
              })}
              onClick={() => this._selectItem(option)}
              role="option"
            >
              {option.label}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const { className } = this.props;

    return (
      <div
        className={cx('dz-select-container', className)}
        role="select"
        ref={node => this._setWrapperRef(node)}
      >
        <div className={cx('dz-select-info')} onClick={() => this._toggle()}>
          <div className={cx('dz-select-preview')}>
            {this._getSelectedLabel()}
          </div>
          <span className={cx('dz-select-caret-container')}>
            <span className={cx('caret')} />
          </span>
        </div>
        {this._renderOptions()}
      </div>
    );
  }
}

export default Select;
