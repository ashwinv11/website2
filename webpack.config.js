const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    all: './source/assets/javascripts/all.js',
    p5: './source/assets/javascripts/homep5.js',
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

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'assets/javascripts/[name].bundle.js',
  },

  // plugins: [
  //   new ExtractTextPlugin("assets/stylesheets/[name].bundle.css"),
  // ],
};
