const
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path');

module.exports = {
  entry: {
    app: './js/app.js',
  },
  output: {
    publicPath: path.join(__dirname, 'dist', 'assets'),
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
  },
};
