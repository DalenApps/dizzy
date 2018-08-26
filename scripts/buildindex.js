const { resolve } = require('path');
const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const isDirectory = source => lstatSync(source).isDirectory();
const getComponentDirs = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);

getComponentDirs(resolve('./src/components')).forEach(el => {
  const item = el.replace(/.+\/src/gm, '.');
  /* eslint no-console: 0 */
  console.log('export * from \'' + item + '\';');
});