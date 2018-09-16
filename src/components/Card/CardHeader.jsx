import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
class CardHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {
    title: 'Header',
    className: ''
  };

  render() {
    const { className, title, children } = this.props;
    const contentClass = cx('dz-card-header', className);
    const titleClass = cx('dz-card-header-title');
    return (
      <div className={contentClass}>
        <div className={titleClass}>
          <p> {title}</p>
        </div>
        {children}
      </div>
    );
  }
}

export default CardHeader;
