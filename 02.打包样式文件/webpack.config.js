/*
  webpack.config.js  webpack的配置文件
    作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）

    所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。
*/

// resolve用来拼接绝对路径的方法
const { resolve } = require("path");

module.exports = {
  // 模式
  mode: "development",
  // 入口起点
  entry: "./src/index.js",
  // 输出到那里去
  output: {
    // 输出文件名
    filename: "built.js",
    // __dirname nodejs的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, "build"),
  },
  // loader的配置
  module: {
    rules: [
      // 不同的文件需要配置不同的loader
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用什么loader进行处理
        use: [
          // 执行顺序 下到上右到左
          // 创建style标签，将js的样式资源插入，添加到head中生效
          "style-loader",
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          "css-loader",
        ],
      },
      {
        test: /\.less/,
        use: [
          // 创建style标签，将js的样式资源插入，添加到head中生效
          "style-loader",
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          "css-loader",
          // 将less文件编译成css文件
          "less-loader",
        ],
      },
    ],
  },
  //   插件的配置
  plugins: [],
};
