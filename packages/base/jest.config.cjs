/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    automock: true,
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        '^~/(.*)$': '<rootDir>/$1',
    },
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    resolver: require.resolve(`jest-pnp-resolver`)
};
