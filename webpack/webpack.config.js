const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry : ['babel-polyfill','../client/index'],
  output: {
      publicPath: '/',
      path: path.join(__dirname, '../public/scripts'),
      filename: 'bundle.js',
    },
    plugins: [
      new webpack.DefinePlugin({
        process: {
          env: {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
          }
        }
      })
    ],
    devtool: '#source-map',
    module: {
      loaders: [
        {
          test: '/.js?$/ | /.jsx?$/',
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ["react","es2015","stage-2"],
          }
        },
      ]
    },
    resolve: {
      modules : ['client','node_modules'],
      extensions: [
        ".js",
        ".jsx",
      ],
    },
}
