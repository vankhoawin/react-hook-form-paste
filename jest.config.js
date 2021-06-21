module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '.(js|jsx)': 'babel-jest',
    '.(ts|tsx)': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx)$',
  collectCoverageFrom: ['src/**/*.(ts|tsx|js)', '!src/**/*.stories.(ts|tsx|js)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  setupFilesAfterEnv: ['<rootDir>/testUtils.js'],
};
