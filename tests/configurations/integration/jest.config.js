module.exports = {
    transform: {
        "^.+\\.(t|j)s$": "ts-jest"
    },
    coverageReporters: [
        "text",
        "html"
    ],
    setupFiles: ["../jest.setup.js"],
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/src/**/*.{ts}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ]
}
