module.exports = {
    root: true,
    "env": {
        "es2020": true,
        "node": true,
        "jest": true
    },
    // This tells ESLint to load the config from the package `eslint-config-custom`
    extends: ["custom"],
    settings: {
        next: {
            rootDir: ["apps/*/"],
        },
    },
};
