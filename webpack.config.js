const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    all: './source/assets/javascript/all.js',
    p5: './source/assets/javascript/homep5.js',
    contact: './source/assets/javascript/contact.js'
  },

  resolve: {
    modules: [
      __dirname + '/assets/javascript',
      __dirname + '/assets/stylesheets',
      __dirname + '/node_modules',
    ],
    extensions: ['.js', '.css', '.scss']
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'assets/javascript/[name].bundle.js',
  },

  // plugins: [
  //   new ExtractTextPlugin("assets/stylesheets/[name].bundle.css"),
  // ],
};
