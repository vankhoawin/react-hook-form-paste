module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest-dom', 'testing-library'],
  extends: ['twilio-react', 'twilio-ts'],
  parserOptions: {
    project: './tsconfig.lint.json',
  },

  env: {
    node: true,
    browser: true,
    jest: true,
  },

  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/jsx-pascal-case': 0,
    'react/jsx-uses-react': 0,
    'react/no-multi-comp': 0,
    'react/prop-types': 'off', // Since we do not use prop-types
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 'off', // Since we do not use prop-types
    'import/no-unused-modules': 0,
    '@typescript-eslint/ban-ts-comment': 0,

    // https://github.com/typescript-eslint/typescript-eslint/issues/2502#issuecomment-689595020
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
  },

  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'no-alert': 0,
        'react/display-name': 0,
        'react/no-multi-comp': 0,
      },
    },
  ],
};
