const path = require("path");

module.exports = {
  stories: [
    '../src/**/*.stories.(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.alias["Bases"] = path.resolve(__dirname, './../src/components/base/');
    config.resolve.alias["Actions"] = path.resolve(__dirname, './../src/redux/actions/');
    config.resolve.alias["Templates"] = path.resolve(__dirname, './../src/components/templates/');
    config.resolve.alias["UIpages"] = path.resolve(__dirname, './../src/components/pages/');
    config.resolve.alias["Atoms"] = path.resolve(__dirname, './../src/components/UI/atoms/');
    config.resolve.alias["Molecules"] = path.resolve(__dirname, './../src/components/UI/molecules/');
    config.resolve.alias["Organisms"] = path.resolve(__dirname, './../src/components/UI/organisms/');
    config.resolve.alias["Hoc"] = path.resolve(__dirname, './../src/components/HOC/');
    config.resolve.alias["Utils"] = path.resolve(__dirname, './../src/utils/');
    config.resolve.alias["StyleVars"] = path.resolve(__dirname, './../styles/global_styles.tsx');
    config.resolve.alias["StoriesLayout"] = path.resolve(__dirname, './../src/components/stories/storiesLayout/index.tsx');
    config.resolve.alias["Layouts"] = path.resolve(__dirname, './../src/components/layout/index.ts');
    config.resolve.alias["Types"] = path.resolve(__dirname, './../src/types/index.ts');

    config.resolve.extensions.push(
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.mdx',
      '.scss',
    );
    return config;
  },
};
