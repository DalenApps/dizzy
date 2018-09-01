import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, TableHead, TableRow, TableBody, TableCell } from '../..';
class DataTable extends Component {
  static propTypes = {
    className: PropTypes.string,
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
    headers: [],
    rows: []
  };

  renderHeaders(headers) {
    return headers.map(header => {
      return (
        <TableCell component="th" key={header.key}>
          {header.label}
        </TableCell>
      );
    });
  }

  renderRowColumns(headers, row, keyField) {
    return headers.map(header => {
      return (
        <TableCell key={`${keyField}-${header.key}`}>
          {row[header.key]}
        </TableCell>
      );
    });
  }
  renderRows(headers, rows, keyField) {
    return rows.map(row => {
      return (
        <TableRow key={row[keyField]}>
          {this.renderRowColumns(headers, row, keyField)}
        </TableRow>
      );
    });
  }

  render() {
    const { headers, rows, keyField, ...rest } = this.props;
    return (
      <Table {...rest}>
        <TableHead>
          <TableRow>{this.renderHeaders(headers)}</TableRow>
        </TableHead>
        <TableBody>{this.renderRows(headers, rows, keyField)}</TableBody>
      </Table>
    );
  }
}

export default DataTable;
