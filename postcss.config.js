module.exports = ({ env }) => ({
  plugins: {
    'postcss-use': {},
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 2,
      autoprefixer: env === 'production',
    },
  },
});
