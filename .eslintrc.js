/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-09-02 18:04:56
 * @LastEditTime: 2021-09-09 23:38:14
 * @Reference:
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module"
  },
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off", // any
    "no-debugger": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off", // setup()
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    // 取消驼峰警告
    camelcase: "off",
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ]
  },
  // 取消eslint 雁阵global type报错
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "no-undef": "off"
      }
    }
  ]
};
