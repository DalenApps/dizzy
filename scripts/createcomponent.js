/* eslint-disable */
const fs = require('fs');
const path = require('path');

function createComponent() {
  let args = process.argv;

  if (!args[2]) {
    console.log('Usage createcomponent [name] [includeMixin]');
    return;
  }
  let name = args[2].toLowerCase();
  let regularName = args[2];
  let mixin = false;
  let folderPath = path.resolve('./src/components', regularName);

  if (args[3]) {
    mixin = args[3];
  }
  fs.mkdirSync(folderPath);
  fs.writeFileSync(
    path.resolve(folderPath, 'index.js'),
    `export { default as ${regularName} } from './${regularName}.jsx';\n`
  );
  fs.writeFileSync(
    path.resolve(folderPath, name + '.stories.js'),
    `import React from 'react';
import { storiesOf } from '@storybook/react';
import { ${regularName} } from '../../';
storiesOf('${regularName}', module).add('Default', () => <${regularName} />);
    `
  );
  fs.writeFileSync(
    path.resolve(folderPath, regularName + '.jsx'),
    `import React, { Component } from 'react';
  import cx from 'classnames';
  import PropTypes from 'prop-types';
  class ${regularName} extends Component {
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
  
  export default ${regularName};
  `
  );
  fs.writeFileSync(
    path.resolve(folderPath, name + '.scss'),
    `.dz-${name} \{\}`
  );
  if (mixin) {
    fs.writeFileSync(path.resolve(folderPath, name + '.mixin.scss'), '');
  }
}

createComponent();
