module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["@shopflow/lint"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
