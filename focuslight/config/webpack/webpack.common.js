const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "entry.js",
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".vue", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inlineSource: '.(js|css)$',
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.pug$/, loader: 'pug-plain-loader' },
      { test: /\.(png)$/, loader: 'url-loader', options: { esModule: false } },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
            loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      },
    ]
  },
}