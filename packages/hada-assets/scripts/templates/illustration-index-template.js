/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const _ = require('lodash');

function defaultIndexTemplate(filePaths) {
  const importEntries = [];
  const mappedFies = [];
  const exportEntries = [];

  filePaths.forEach((filePath) => {
    const basename = path.basename(filePath.path, path.extname(filePath.path));

    const exportName = basename;
    importEntries.push(`import ${exportName} from './${basename}'`);
    mappedFies.push(`  '${_.kebabCase(basename).replace('img-', '')}': ${exportName},`);
    exportEntries.push(`  ${exportName} as ${exportName.replace('Img', '')}Illustration,`);
  });

  const illustrations = `

const illustrations = {
${mappedFies.join('\n')}
}
`;

  return `
${importEntries.join('\n')}
${illustrations}



export type IconNames = keyof typeof illustrations;

export {
${exportEntries.join('\n')}
}

export default illustrations
`;
}

module.exports = defaultIndexTemplate;
