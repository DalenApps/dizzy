import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  CheckBox,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from '../..';
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
    keyField: PropTypes.string.isRequired,
    multiSelect: PropTypes.bool,
    onSelect: PropTypes.func,
    selectedRows: PropTypes.array
  };
  static defaultProps = {
    className: '',
    headers: [],
    rows: [],
    multiSelect: false,
    selectedRows: []
  };

  rowHeaderStateChanged() {
    const { selectedRows } = this.props;
    if (selectedRows.lenght == 0) {
      return true; // Check all
    } else {
      return false; // Uncheck all
    }
  }
  rowSelectedStateChanged(row) {
    return {
      checked: !this.isSelected(row),
      row: row
    };
  }

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
  isSelected = row => this.props.selectedRows.indexOf(row) !== -1;
  renderRows(headers, rows, keyField) {
    const { multiSelect } = this.props;

    return rows.map(row => {
      const selectCell = (
        <TableCell key={'sss'} className={cx('dz-table-tool-col')}>
          <CheckBox
            label=""
            checked={this.isSelected(row)}
            onCheckChange={() => this.rowSelectedStateChanged(row)}
          />
        </TableCell>
      );
      const cells = this.renderRowColumns(headers, row, keyField);
      return (
        <TableRow key={row[keyField]}>
          {multiSelect ? [...[selectCell], ...cells] : [...cells]}
        </TableRow>
      );
    });
  }

  render() {
    const { headers, rows, keyField, multiSelect, ...rest } = this.props;
    const headerCells = this.renderHeaders(headers);
    const selectHeaderCell = (
      <TableCell key={'sss'} className={cx('dz-table-tool-col')}>
        <CheckBox
          label=""
          checked={true}
          onCheckChange={() => this.rowHeaderStateChanged()}
        />
      </TableCell>
    );
    return (
      <Table {...rest}>
        <TableHead>
          <TableRow>
            {multiSelect
              ? [...[selectHeaderCell], ...headerCells]
              : [...headerCells]}
          </TableRow>
        </TableHead>
        <TableBody>{this.renderRows(headers, rows, keyField)}</TableBody>
      </Table>
    );
  }
}

export default DataTable;
