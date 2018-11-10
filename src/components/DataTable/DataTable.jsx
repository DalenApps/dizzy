import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { CheckBox } from '../CheckBox';
import { Table, TableHead, TableRow, TableBody, TableCell } from '../Table';
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
    selectedRows: PropTypes.array,
    onSelect: PropTypes.func,
    onHeaderSelect: PropTypes.func
  };
  static defaultProps = {
    className: '',
    headers: [],
    rows: [],
    multiSelect: false,
    selectedRows: [],
    onHeaderSelect: null
  };

  rowHeaderStateChanged() {
    const { selectedRows, onHeaderSelect } = this.props;
    // eslint-disable-next-line no-magic-numbers
    if (selectedRows.lenght == 0) {
      onHeaderSelect(true); // Check all
    } else {
      onHeaderSelect(false); // Uncheck all
    }
  }
  rowSelectedStateChanged(row) {
    const { onSelect } = this.props;
    onSelect({
      checked: !this.isSelected(row),
      row: row
    });
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
  // eslint-disable-next-line no-magic-numbers
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
    /* eslint no-unused-vars: 0 */
    const {
      headers,
      rows,
      keyField,
      multiSelect,
      selectedRows,
      onSelect,
      onHeaderSelect,
      ...rest
    } = this.props;
    const headerCells = this.renderHeaders(headers);
    const selectHeaderCell = (
      <TableCell key={''} className={cx('dz-table-tool-col')}>
        {onHeaderSelect !== null ? (
          <CheckBox
            label=""
            checked={true}
            onCheckChange={() => this.rowHeaderStateChanged()}
          />
        ) : (
          ''
        )}
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
