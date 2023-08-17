/* eslint-disable @typescript-eslint/no-var-requires */
const makeEntries = require('./makeEntries');

function defaultIndexTemplate(filePaths) {
  const importEntries = [];
  const mappedFiles = [];
  const exportEntries = [];

  makeEntries(filePaths, { type: 'icon', importEntries, mappedFiles, exportEntries });

  const icons = `

const icons = {
${mappedFiles.join('\n')}
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
