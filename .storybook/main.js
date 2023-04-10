module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    {
      name: '@storybook/addon-essentials',
      options: {
        'actions': false,
      },
    },
    // "@storybook/addon-links",
    // "@storybook/addon-interactions",
    // "@storybook/addons",
    // 'addon-screen-reader'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
} 
