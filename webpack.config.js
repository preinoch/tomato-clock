let webpack = require('webpack')


module.exports = {
  entry: './resource/asserts/index.js',
  output: {
    path: __dirname + '/resource/public',
    filename: 'bundle.js'
  },
  devtool: "#cheap-module-source-map",
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader?modules'},
      {test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'},
      {
        test: /.js?$/, // 文件过滤规则
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'] // es2015 处理 ES6 语法，react 处理 jsx 语法
        }
      }
    ]
  },
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:9999',
        secure: false
      }
    }
  }
}
