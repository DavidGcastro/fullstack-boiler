module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'google',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'max-len': ['error', { code: 80 }],
    'require-jsdoc': [0],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
