const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withCSS(
  withFonts({
    webpack: config => {
      // Perform customizations to webpack config
      const newConfig = config;
      // Important: return the modified config
      return newConfig;
    },
    webpackDevMiddleware: config => config,
  }),
);
