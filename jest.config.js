module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>'],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  "moduleNameMapper": {
    "@components/(.*)$": "<rootDir>/src/components/$1",
  },
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)(spec).tsx'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
