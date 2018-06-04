module.exports = {
  globals: {
    NODE_ENV: "test",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  moduleDirectories: ["node_modules", "./src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
  },
  setupFiles: ["<rootDir>/test/helpers/expect-extensions.js", "<rootDir>/test/helpers/enzyme-setup.js"],
  snapshotSerializers: ["<rootDir>/node_modules/enzyme-to-json/serializer"],
};