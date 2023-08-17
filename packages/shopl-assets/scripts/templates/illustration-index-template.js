/* eslint-disable @typescript-eslint/no-var-requires */
const makeEntries = require('./makeEntries');

function defaultIndexTemplate(filePaths) {
  const importEntries = [];
  const mappedFiles = [];
  const exportEntries = [];

  makeEntries(filePaths, { type: 'illustration', importEntries, mappedFiles, exportEntries });

  const illustrations = `

const illustrations = {
${mappedFiles.join('\n')}
}
`;

  return `
${importEntries.join('\n')}
${illustrations}



export type IllustrationNames = keyof typeof illustrations;

export {
${exportEntries.join('\n')}
}

export default illustrations
`;
}

module.exports = defaultIndexTemplate;
