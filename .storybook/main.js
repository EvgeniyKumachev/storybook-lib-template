module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    { name: '@storybook/preset-typescript', options: { check: false } },
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
  ],
}
