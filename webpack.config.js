const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack"); // 访问内置的插件

module.exports = {
  // 入口
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        // 识别哪些文件会被转换
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // exclude: /(node_modules|bower_components)/,
        // 转换时使用的loader
        // loader 从右到左（或从下到上）执行，
        // 链中的每个 loader 会将转换应用在已处理过的资源上。一组链式的 loader 将按照相反的顺序执行。链中的第一个 loader 将其结果（也就是应用过转换后的资源）传递给下一个 loader
        use: "babel-loader",
        // options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  // 输出
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
    },
    // contentBase: path.join(__dirname, "public/"),
    port: 3000,
    // publicPath: "http://localhost:3000/dist/",
    // hotOnly: true,
    hot: true,
  },
  // 插件
  plugins: [
    new webpack.ProgressPlugin(),
    // { template: "./public/index.html" }
    new HtmlWebpackPlugin({
      title: "custom title",
      template: "./src/index.html",
    }),
  ],
};

// const { merge } = require("webpack-merge");
// const common = require("./webpack.common.js");

// module.exports = merge(common, {
//   mode: "production",
//   devtool: "source-map",
// });

// const { merge } = require("webpack-merge");
// const common = require("./webpack.common.js");

// module.exports = merge(common, {
//   mode: "development",
//   devtool: "inline-source-map",
//   devServer: {
//     static: "./dist",
//   },
// });
