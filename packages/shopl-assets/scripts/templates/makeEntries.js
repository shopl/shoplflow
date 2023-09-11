/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const _ = require('lodash');

const typeMapper = {
  illustration: {
    replace: 'img-',
    exportnameReplace: 'Img',
    replaceTo: 'Illustration',
  },
  icon: {
    replace: 'ic-',
    exportnameReplace: 'Ic',
    replaceTo: 'Icon',
  },
};

function makeEntries(filePaths, { type, importEntries, mappedFiles, exportEntries }) {
  const { replace, exportnameReplace, replaceTo } = typeMapper[type];

  filePaths.forEach((filePath) => {
    const basename = path.basename(filePath.path, path.extname(filePath.path));

    const exportName = basename;
    importEntries.push(`import ${exportName} from './${basename}'`);
    mappedFiles.push(`  '${_.kebabCase(basename).replace(replace, '')}': ${exportName},`);
    exportEntries.push(`  ${exportName} as ${exportName.replace(exportnameReplace, '')}${replaceTo},`);
  });
}

module.exports = makeEntries;
