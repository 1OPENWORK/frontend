const Dotenv = require('dotenv-webpack');

module.exports = {
  // ...
  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib")
    },
  },
  plugins: [
    new Dotenv(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
