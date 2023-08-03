/* eslint-disable @typescript-eslint/no-var-requires */
const base = require('./.eslintrc.base');
const react = require('./.eslintrc.react');
const typescript = require('./.eslintrc.typescript');

module.exports = {
  configs: {
    base,
    react,
    typescript,
  },
};
