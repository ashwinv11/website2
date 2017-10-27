module.exports = {
  entry: {
    ga: './source/assets/javascripts/ga.js',
    bezier: './source/assets/javascripts/bezier.js',
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
  }
};
