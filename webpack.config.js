const webpack = require('webpack');

module.exports = {
  entry: {
    // '/home/tgmarinho/Documents/workspace/js-tdd-course-wj/src/js-modulos/01-imports.js'
    filename: './src/js-modulos/01-imports.js'
  },
  output: {
    filename: './src/js-modulos/build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { module: false }]
          ]
        }
      }
    ]
  }

}
