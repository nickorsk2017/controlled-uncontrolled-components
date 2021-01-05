const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // Handle SCSS modules
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
        },
        sassLoaderOptions: {
          sassOptions: {
            includePaths: [
              path.resolve(__dirname, '../src/styles'),
              path.resolve(__dirname, '../node_modules'),
            ],
          },
        },
      },
    },
  ],
}