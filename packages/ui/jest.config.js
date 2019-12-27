const baseConfig = require("../../jest.config.base");

const packageName = require("./package.json")
  .name.split("/")
  .pop();

module.exports = {
  ...baseConfig,
  roots: [`<rootDir>/packages/${packageName}`],
  // collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  testRegex: `(packages/${packageName}/.*/__tests__/.*|\\.(test|spec))\\.tsx?$`,
  testURL: "http://localhost/",
  moduleNameMapper: {
    ".json$": "identity-obj-proxy",
    "lodash-es": "lodash"
  },
  moduleDirectories: ["node_modules"],
  modulePaths: [`<rootDir>/packages/${packageName}/src/`],
  name: packageName,
  displayName: packageName,
  rootDir: "../.."
};
