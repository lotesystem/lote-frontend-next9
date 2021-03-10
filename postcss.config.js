// Get the environment
const isProd = process.env.NODE_ENV === 'production';

// Use these PostCSS plugins on the production build.
const plugins = [require('autoprefixer'), require('cssnano')({preset: 'default'})];

module.exports = {
  plugins: isProd ? plugins : [require('cssnano')({preset: 'default'})]
};
