const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack"); // 访问内置的插件

module.exports = (env, argv) => {
  const { mode } = argv;
  return {
    // 入口
    entry: "./src/index.tsx",
    mode,
    devtool: mode === "development" ? "cheap-module-source-map" : false,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
          // options: { presets: ["@babel/preset-react"] },
        },
        {
          // 识别哪些文件会被转换
          test: /\.css$/,
          // 转换时使用的loader
          // loader 从右到左（或从下到上）执行，前一个loader的转换结果传递给下一个loader
          // css-loader 对@import url()进行处理 modules
          // style-loader 把css插入到dom中
          use: ["style-loader", "css-loader"],
        },
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true, // 只做语言转换，不做类型检查
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      alias: { "@": path.resolve(__dirname) },
      // 尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
      extensions: [".tsx", ".jsx", ".ts", ".js"],
    },
    // 输出
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      // contentBase: path.join(__dirname, "public/"),
      port: 4000,
      hot: true,
      // 打开默认浏览器
      open: mode === "development",
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
