import React, { Component } from 'react';
import './CodePreview.css';
import PropTypes from 'prop-types';

class CodePreview extends Component {
  static propTypes = {
    className: PropTypes.string,
    provider: PropTypes.oneOf(['bitbucket', 'github']),
    language: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };
  static defaultProps = {
    className: '',
    provider: null,
    language: ''
  };

  nameDict = {
    bitbucket: 'BitBucket',
    github: 'GitHub'
  };
  getProviderClass() {
    const { provider } = this.props;
    if (provider === null) return '';
    return `dz-code-source-${provider}`;
  }

  getFooter() {
    const { provider, language } = this.props;
    if (provider === null) return '';
    return (
      <div className="dz-code-preview-footer">
        <div className="dz-code-preview-footer-provider">
          <i className={`fab fa-${provider}`} />
          <span>{this.nameDict[provider]}</span>
        </div>
        <div className="dz-code-preview-footer-language">
          <span>{language}</span>
        </div>
      </div>
    );
  }

  render() {
    const { className, children } = this.props;
    return (
      <div
        className={`dz-code-preview ${this.getProviderClass()} ${
          className ? className : ''
        }`}
      >
        {children}
        {this.getFooter()}
      </div>
    );
  }
}

export default CodePreview;
