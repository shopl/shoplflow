module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ["<rootDir>"],
    testMatch: ['<rootDir>/**/__tests__/**/*.spec.ts', '<rootDir>/**/__tests__/**/*.test.ts', "<rootDir>/**/*.test.ts"],
    testPathIgnorePatterns: ['/node_modules/'],
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: ['node_modules', 'src/database', 'src/test', 'src/types.ts'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    reporters: ['default', 'jest-junit'],
    globals: {'ts-jest': {diagnostics: false}},
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            babel: true,
        }]
    },
    resolver: require.resolve(`jest-pnp-resolver`)
};

