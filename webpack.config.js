var webpack = require('webpack')

module.exports = {
  entry: './login-entry.js',
  output: {
    path: __dirname,
    filename: 'login-bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'}
    ]
  }
}
