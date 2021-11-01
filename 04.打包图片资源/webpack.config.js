const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          // 创建style标签，将js的样式资源插入，添加到head中生效
          "style-loader",
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          "css-loader",
          // 将less文件编译成css文件
          "less-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'url-loader',
        options: { limit: 8 * 1024 },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS）
      template: "./src/index.html",
    }),
  ],
};
