const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: [
      path.join(__dirname, 'dist'),
      path.join(__dirname, 'node_modules')
    ]
  },
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  externals: {
    'd3': {
      commonjs: 'd3',
      commonjs2: 'd3',
      amd: 'd3',
      root: 'd3'
    }
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  output: {
    filename: 'jvenn-d3.js',
    library: 'jvennD3',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    umdNamedDefine: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        context: 'src',
        from: '**/*.html',
      }
    ])
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  }
}