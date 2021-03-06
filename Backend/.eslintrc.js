module.exports = 
{
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ["prettier", "airbnb-base"],
  plugins: ["prettier"],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  parserOptions: {
    "ecmaVersion": 12
  },
  rules: {
    "prettier/prettier": "error"
  }
};