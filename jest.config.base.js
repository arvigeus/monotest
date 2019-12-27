module.exports = {
  globals: {
    "ts-jest": {
      babelConfig: true
    }
  },
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/components/$1"
  }
};
