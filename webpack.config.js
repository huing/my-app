const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack"); // 访问内置的插件

module.exports = (env, argv) => {
  return {
    // 入口
    entry: "./src/index.tsx",
    mode: argv.mode,
    devtool: argv.mode === "development" ? "cheap-module-source-map" : false,
    module: {
      rules: [
        // {
        //   test: /\.(js|jsx)$/,
        //   exclude: /node_modules/,
        //   use: "babel-loader",
        //   // options: { presets: ["@babel/env"] },
        // },
        {
          // 识别哪些文件会被转换
          test: /\.css$/,
          // 转换时使用的loader
          // loader 从右到左（或从下到上）执行，前一个loader的转换结果传递给下一个loader
          use: ["style-loader", "css-loader"],
        },
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
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
};

// module.exports = [
//   "eval",
//   "eval-cheap-source-map",
//   "eval-cheap-module-source-map",
//   "eval-source-map",
//   "cheap-source-map",
//   "cheap-module-source-map",
//   "inline-cheap-source-map",
//   "inline-cheap-module-source-map",
//   "source-map",
//   "inline-source-map",
//   "hidden-source-map",
//   "nosources-source-map",
// ].map((devtool) => ({
//   mode: "development",
//   entry: "./src/index.tsx",
//   output: {
//     path: path.join(__dirname, "dist"),
//     filename: `./[name]-${devtool}.js`,
//   },
//   devtool,
//   optimization: {
//     runtimeChunk: true,
//   },
// }));
