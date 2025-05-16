module.exports = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',     
    '!**/node_modules/**',
    '!**/coverage/**',    
  ],
  testEnvironment: 'node',          
  transformIgnorePatterns: ['/node_modules/', '/dist/'], 
};