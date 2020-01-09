module.exports = {
  globals: {
    "ts-jest": {
      babelConfig: {
        rootMode: "upward"
      }
    }
  },
  preset: "ts-jest",
  transform: {
    "^.+\\.jsx?$": ["babel-jest", { rootMode: "upward" }]
  },

  clearMocks: true,
  coverageDirectory: "coverage",
  moduleDirectories: ["node_modules", "src"],
  roots: ["src"],
  setupFilesAfterEnv: ["jest-extended", "jest-styled-components"]
};
