const webpack = require('webpack');
// variavel que nao estiver definida sera production
const nodeENV =  process.env.NODE_ENV || 'production'

module.exports = {
  devtool: 'source-map',
  entry: {
    // '/home/tgmarinho/Documents/workspace/js-tdd-course-wj/src/js-modulos/01-imports.js'
    filename: './src/js-modulos/02-exports-imports.js'
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
  },
  plugins: [
    // remove comentários, minimifica, deixa arquivo mais enxuto
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    // criando meu  proprio plugin
    new webpack.DefinePlugin({
      'process.env' : {  NODE_ENV: JSON.stringify(nodeENV) }
    })
  ]

}
