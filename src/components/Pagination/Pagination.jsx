import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { variantProps } from '../../helpers';
class Pagination extends Component {
  static propTypes = {
    className: PropTypes.string,
    zeroIndexStart: PropTypes.bool,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    buttonVariant: variantProps
  };
  static defaultProps = {
    totalPages: 0,
    currentPage: 0,
    zeroIndexStart: false,
    buttonVariant: 'primary'
  };

  getFirstPage() {
    const { zeroIndexStart, onPageChange } = this.props;
    // eslint-disable-next-line no-magic-numbers
    onPageChange(zeroIndexStart ? 0 : 1);
  }
  getBackPage() {
    const { currentPage, onPageChange } = this.props;
    // eslint-disable-next-line no-magic-numbers
    onPageChange(currentPage - 1);
  }
  getNextPage() {
    const { currentPage, onPageChange } = this.props;
    // eslint-disable-next-line no-magic-numbers
    onPageChange(currentPage + 1);
  }
  getLastPage() {
    const { zeroIndexStart, totalPages, onPageChange } = this.props;
    if (zeroIndexStart) {
      // eslint-disable-next-line no-magic-numbers
      onPageChange(totalPages - 1);
    }
    // eslint-disable-next-line no-magic-numbers
    onPageChange(totalPages);
  }
  isFirstPage() {
    const { zeroIndexStart, currentPage } = this.props;
    if (zeroIndexStart) {
      // eslint-disable-next-line no-magic-numbers
      return currentPage == 0;
    }
    // eslint-disable-next-line no-magic-numbers
    return currentPage == 1;
  }
  isLastPage() {
    const { zeroIndexStart, currentPage, totalPages } = this.props;
    if (zeroIndexStart) {
      // eslint-disable-next-line no-magic-numbers
      return currentPage == totalPages - 1;
    }
    // eslint-disable-next-line no-magic-numbers
    return currentPage == totalPages;
  }

  render() {
    const { className, currentPage, totalPages, buttonVariant } = this.props;
    return (
      <div className={cx('dz-paginator', className)}>
        <div className="dz-paginator-buttons-back">
          <Button
            outlined
            rounded
            size="small"
            onClick={() => this.getFirstPage()}
            disabled={this.isFirstPage()}
            variant={buttonVariant}
          >
            <i className="fas fa-angle-double-left" />
            First
          </Button>
          <Button
            outlined
            rounded
            size="small"
            onClick={() => this.getBackPage()}
            disabled={this.isFirstPage()}
            variant={buttonVariant}
          >
            <i className="fas fa-angle-left" />
            Back
          </Button>
        </div>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <div className="dz-paginator-buttons-forward">
          <Button
            outlined
            rounded
            size="small"
            onClick={() => this.getNextPage()}
            disabled={this.isLastPage()}
            variant={buttonVariant}
          >
            Next
            <i className="fas fa-angle-right" />
          </Button>
          <Button
            outlined
            rounded
            size="small"
            onClick={() => this.getLastPage()}
            disabled={this.isLastPage()}
            variant={buttonVariant}
          >
            Last
            <i className="fas fa-angle-double-right" />
          </Button>
        </div>
      </div>
    );
  }
}

export default Pagination;
