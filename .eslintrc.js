// https://cn.eslint.org/docs/user-guide/getting-started
// eslint --init
module.exports = {
  // 运行环境
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 规则继承，继承默认规则
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:react/jsx-runtime",
  ],
  // 解析器  将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用。
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // 额外的语言特性
    ecmaFeatures: {
      // 启用jsx
      jsx: true,
    },
    // ECMAScript 版本
    ecmaVersion: 12,
    // ECMAScript 模块
    sourceType: "module",
  },
  // 插件
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // 这两行可以不用声明 import react
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    // "@typescript-eslint/rule-name": "error",
    // 不允许require语句
    "@typescript-eslint/no-var-requires": "error",
    // 关闭any
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  //   eslintConfig: {
  //     root: true,
  //   },
};
// "off" 或 0 - 关闭规则
// "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
// "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
