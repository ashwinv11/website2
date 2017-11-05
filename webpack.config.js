const OfflinePlugin = require('offline-plugin');

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
      __dirname + '/node_modules',
    ],
    extensions: ['.js', '.css', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new OfflinePlugin()
  ],

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'assets/javascripts/[name].bundle.js',
  }
};
