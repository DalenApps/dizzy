/* eslint-disable */
const fs = require('fs');
const path = require('path');

function pascal(str) {
  return str.replace(/\w+/g, function(w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
}

function createComponent() {
  let args = process.argv;

  if (!args[2]) {
    console.log('Usage createcomponent [name] [includeMixin]');
    return;
  }
  let name = args[2].toLowerCase();
  let pascalCaseName = pascal(args[2]);
  let mixin = false;
  let folderPath = path.resolve('./src/components', pascalCaseName);

  if (args[3]) {
    mixin = args[3];
  }
  fs.mkdirSync(folderPath);
  fs.writeFileSync(
    path.resolve(folderPath, 'index.js'),
    `export { default as ${pascalCaseName} } from './${pascalCaseName}.jsx';\n`
  );
  fs.writeFileSync(
    path.resolve(folderPath, name + '.stories.js'),
    `import React from 'react';
import { storiesOf } from '@storybook/react';
import { ${pascalCaseName} } from '../../';
storiesOf('${pascalCaseName}', module).add('Default', () => <${pascalCaseName} />);
    `
  );
  fs.writeFileSync(
    path.resolve(folderPath, pascalCaseName + '.jsx'),
    `import React, { Component } from 'react';
  import cx from 'classnames';
  import PropTypes from 'prop-types';
  class ${pascalCaseName} extends Component {
    static propTypes = {
      className: PropTypes.string
    };
    static defaultProps = {
      className: ''
    };
  
    render() {
      const { className } = this.props;
      return (
        <div className={cx('dz-${name}', className)}>
          
        </div>
      );
    }
  }
  
  export default ${pascalCaseName};
  `
  );
  fs.writeFileSync(path.resolve(folderPath, name + '.scss'), `.dz-${name} \{\}`);
  if (mixin) {
    fs.writeFileSync(path.resolve(folderPath, name + '.mixin.scss'), '');
  }
}

createComponent();
