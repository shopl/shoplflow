/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const _ = require('lodash');

function defaultIndexTemplate(filePaths) {
  const importEntries = [];
  const mappedFies = [];
  const exportEntries = [];

  filePaths.forEach((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));

    const exportName = basename;
    importEntries.push(`import ${exportName} from './${basename}'`);
    mappedFies.push(`  '${_.kebabCase(basename).replace('ic-', '')}': ${exportName},`);
    exportEntries.push(`  ${exportName} as ${exportName.replace('Ic', '')}Icon,`);
  });

  const icons = `

const icons = {
${mappedFies.join('\n')}
}
`;

  return `
${importEntries.join('\n')}
${icons}



export type IconNames = keyof typeof icons;

export {
${exportEntries.join('\n')}
}

export default icons
`;
}

module.exports = defaultIndexTemplate;
