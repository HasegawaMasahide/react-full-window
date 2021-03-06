/* eslint-disable no-undef */
module.exports = {
    roots: ["<rootDir>/test"],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFilesAfterEnv: ["./test/setupEnzyme.ts"],
};
