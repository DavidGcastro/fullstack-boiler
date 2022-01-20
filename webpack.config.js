const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HTML_PATH = './client/index.html';
const REACT_ENTRY = '/client/index.js';
module.exports = {
  entry: path.resolve(__dirname, REACT_ENTRY),
  mode: 'development',
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(HTML_PATH) }),
  ],
  devServer: {
    compress: true,
    port: 9000,
  },
  output: {
    path: path.resolve(__dirname, 'root'),
    filename: 'bundle.js',
    scriptType: 'text/javascript',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'client')],
        loader: 'babel-loader',
        options: { presets: ['@babel/env', '@babel/preset-react'] },
      },
      {
        test: /.(scss|css)$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './fonts/',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {},
          },
        ],
      },
    ],
  },
};
