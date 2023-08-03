module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/**/__tests__/**/*.spec.ts', '<rootDir>/**/__tests__/**/*.test.ts', "<rootDir>/**/*.test.ts"],
    testPathIgnorePatterns: ['/node_modules/'],
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: ['node_modules', 'src/database', 'src/test', 'src/types.ts'],
    reporters: ['default', 'jest-junit'],
    globals: {'ts-jest': {diagnostics: false}},
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            babel: true,
        }],
        '^.+\\.jsx?$': 'babel-jest'
    },
    resolver: require.resolve(`jest-pnp-resolver`)
};

