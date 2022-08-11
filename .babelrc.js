module.exports = {
  presets: [
    [
      "@babel/env",
      {
        // 打印用到的插件
        // debug: true,
      },
    ],
    [
      "@babel/react",
      // 不用引入react
      // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
      {
        runtime: "automatic",
      },
    ],
    // "@babel/typescript",
  ],
  plugins: [["@babel/plugin-proposal-decorators", { version: "legacy" }]],
};
