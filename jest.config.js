module.exports = {
    moduleFileExtensions: ['js', 'jsx',],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest'
      },
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.js"
    ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js"
    },
    testMatch: [
      '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
    ],
    transformIgnorePatterns: ['<rootDir>/node_modules/']
  };
