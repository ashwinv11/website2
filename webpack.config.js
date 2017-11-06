const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  entry: {
    all: './source/assets/javascripts/all.js',
    index: './source/assets/javascripts/index.js',
    contact: './source/assets/javascripts/contact.js'
  },

  resolve: {
    modules: [
      __dirname + '/assets/javascripts',
      __dirname + '/assets/stylesheets',
      __dirname + '/assets/fonts',
      __dirname + '/node_modules',
    ],
    extensions: ['.js', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  plugins: [
    extractPlugin,
    new OfflinePlugin(),
    new CleanWebpackPlugin(['.tmp/dist'])
  ],

  output: {
    path: Path.resolve(__dirname, '.tmp', 'dist'),
    filename: '[name]-bundle.js',
    publicPath: '.tmp/dist/'
  }
};
