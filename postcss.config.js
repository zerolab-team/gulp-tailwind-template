module.exports = ({ env }) => ({
  plugins: {
    'postcss-use': {},
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-preset-env': {
      // stage: 2,
      autoprefixer: env === 'production',
      features: {
        'nesting-rules': true,
      },
    },
    tailwindcss: {},
    'webp-in-css/plugin': {},
    'postcss-sort-media-queries': {},
  },
});
