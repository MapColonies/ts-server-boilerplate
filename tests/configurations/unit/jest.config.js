module.exports = {
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  coverageReporters: [
    "text",
    "html"
  ],
  setupFiles: ["../jest.setup.js"]
}
