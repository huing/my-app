module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
      },
    ],
  ],
};

// webpack 配置
// {
//   loader: "postcss-loader",
//   options: {
//     postcssOptions: {
//       plugins: [
//         [
//           "postcss-preset-env",
//           {
//             autoprefixer: {
//               flexbox: "no-2009",
//             },
//             stage: 3,
//           },
//         ],
//       ],
//     },
//   },
// },
