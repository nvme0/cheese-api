module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "import", "prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        returns: "return"
      }
    },
    "import/resolver": {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    }
  },
  ignorePatterns: [".eslintrc.js", "lib"]
};
