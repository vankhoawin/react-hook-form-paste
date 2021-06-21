module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],

  // https://github.com/styleguidist/react-docgen-typescript/issues/356

  typescript: {
    reactDocgen: 'react-docgen',
  },
};
