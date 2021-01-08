module.exports = {
    collectCoverageFrom: [
      './src/**/*.{ts,tsx}',
      '!**/node_modules/**',
      '!**/.storybook/**',
      '!**/tests/**',
      '!**/coverage/**',
      '!jest.config.js',
    ],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
    setupFiles: ['<rootDir>/jest.setup.ts'],
    preset: 'ts-jest',
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/lib/', '<rootDir>/tests/', '<rootDir>/coverage/', '<rootDir>/.storybook/'],
    //testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
    testRegex: '(<rootDir>/src/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    testURL: 'http://localhost',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    moduleNameMapper: {
     // '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
      //'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
       // '<rootDir>/__mocks__/fileMock.js',
    },
    transform: {
      '.(ts|tsx)': 'babel-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };