module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: [],
  extends: [
    '@energyaspects/eslint-config/typescriptReact',
    'plugin:import/typescript',
  ],
  rules: {
    'no-process-env': 2,
    'react/jsx-props-no-spreading': 0,
    'react/display-name': 0,
    'no-restricted-exports': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'internal/mocks/**',
          'internal/testUtils/**',
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx,ts,tsx}', // repos with a single test file
          'test-*.{js,jsx,ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          'config/jest/**',
        ],
        optionalDependencies: false,
      },
    ],
  },
}
