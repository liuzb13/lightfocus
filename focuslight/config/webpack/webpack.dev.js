const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

module.exports = webpackMerge(webpackCommonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    host: "0.0.0.0",
    port: 9001,
  }
});