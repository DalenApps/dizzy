import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class Table extends Component {
  static propTypes = {
    className: PropTypes.string,
    responsive: PropTypes.bool,
    headers: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.string
      })
    ).isRequired,
    rows: PropTypes.array.isRequired,
    keyField: PropTypes.string.isRequired
  };
  static defaultProps = {
    className: '',
    responsive: false,
    headers: [],
    rows: []
  };

  renderHeaders() {
    const { headers } = this.props;
    return headers.map(header => {
      return (
        <th key={header.key} onClick={() => this.sortByColumn(header.key)}>
          {header.label}
        </th>
      );
    });
  }

  renderRowColumns(row) {
    const { headers, keyField } = this.props;
    return headers.map(header => {
      return <td key={`${keyField}-${header.key}`}>{row[header.key]}</td>;
    });
  }
  renderRows() {
    const { rows, keyField } = this.props;
    return rows.map(row => {
      return <tr key={row[keyField]}>{this.renderRowColumns(row)}</tr>;
    });
  }

  renderTable() {
    const { className } = this.props;
    return (
      <table className={cx('dz-table', className)}>
        <thead>
          <tr>{this.renderHeaders()}</tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
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
