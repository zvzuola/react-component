var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');

var dir_client = path.resolve(__dirname, './client/views/containers');
var dir_dist = path.resolve(__dirname, './public/dist/js');

module.exports = {
  entry: path.resolve(dir_client, 'index.js'),
  output: {
    path: dir_dist, // for standalone building
    publicPath: '/assets/', // for hot building
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: [["transform-object-rest-spread", { "useBuiltIns": true }]]
        }
      },
      {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      }
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    colors: true // Nice colored output
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};