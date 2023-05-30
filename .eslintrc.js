module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'vuejs-accessibility/label-has-for': ['error', {
      required: {
        some: ['nesting', "id"]
      },
    }],
  },
};
