import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import CheckBox from '../CheckBox/CheckBox';
import './checkboxlist.scss';

class CheckBoxList extends Component {
  static propTypes = {
    className: PropTypes.string,
    checkBoxClassName: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        name: PropTypes.string
      })
    ),
    checked: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        name: PropTypes.string
      })
    ),
    onCheckChange: PropTypes.func
  };
  static defaultProps = {
    className: '',
    checkBoxClassName: '',
    checked: []
  };

  _isChecked(item) {
    let items = this.props.checked;
    let index = items.indexOf(item);
    /* eslint no-magic-numbers: ["error", { "ignore": [0] }] */
    if (index < 0) return false;
    return true;
  }

  render() {
    const { className, checkBoxClassName, data, onCheckChange } = this.props;
    return (
      <div className={cx('dz-checkbox-list-container', className)}>
        <div className="dz-checkbox-list">
          {data.map((c, index) => {
            return (
              <CheckBox
                key={c.id || index}
                label={c.name}
                className={checkBoxClassName}
                checked={this._isChecked(c)}
                onCheckChange={() => onCheckChange(c)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CheckBoxList;
