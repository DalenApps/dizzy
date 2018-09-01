import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class Table extends Component {
  static propTypes = {
    className: PropTypes.string,
    responsive: PropTypes.bool,
    striped: PropTypes.bool,
    condensed: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    caption: PropTypes.string,
    captionPosition: PropTypes.oneOf(['top', 'bottom'])
  };
  static defaultProps = {
    className: '',
    responsive: false,
    striped: false,
    condensed: false,
    caption: null,
    captionPosition: 'top'
  };

  renderTable() {
    const { children, striped, condensed, caption, captionPosition } = this.props;
    return (
      <table
        className={cx(
          'dz-table',
          { 'dz-table-striped': striped },
          { 'dz-table-condensed': condensed }
        )}
      >
        {caption !== null ? (
          <caption
            className={cx({
              'dz-table-caption-bottom': captionPosition === 'bottom'
            })}
          >
            {caption}
          </caption>
        ) : (
          ''
        )}
        {children}
      </table>
    );
  }

  render() {
    const { responsive } = this.props;
    if (responsive) {
      return (
        <div className={cx('dz-table-responsive')}>{this.renderTable()}</div>
      );
    }
    return this.renderTable();
  }
}

export default Table;
