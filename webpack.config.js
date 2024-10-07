const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'eval-source-map',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    watchFiles: ['./src/template.html', './src/css/style.css', './src/js/script.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),

    new copyWebpackPlugin({
      patterns: [{ from: './src/img', to: 'img' }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
