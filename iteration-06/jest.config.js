// IMPORTANT
// Do NOT modify this file

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    "<rootDir>/tests/index.ts"
  ]
};