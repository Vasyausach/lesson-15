const path           = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry:  './src/js/script.js',
  output: {
    filename: 'bundle.js',
    path:     path.resolve(__dirname, 'dist/js')
  },
  watch:  true,

  module:  {
    rules: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        loader:  'babel-loader'
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};
