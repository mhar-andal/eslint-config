module.exports = {
  root: true,

  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/react',
  ].map(require.resolve),

  plugins: ['react'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },

  globals: {
    document: false,
    window: false,
  },

  rules: {
    // airbnb overrides
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/no-unescaped-entites': 0,
    'arrow-body-style': 0,
    'no-plusplus': 0,
    'global-require': 0,
    'func-names': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': [ 'error', { 'allow': ['_error'] } ],
    'no-unused-expressions': [
      'error',
      { 'allowShortCircuit': true, 'allowTernary': true }
    ],
    'camelcase': 0,
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'state',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ],
    }],
    'react/no-unescaped-entities': 0,

    'space-before-blocks': 'error',
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'semi': [ 2, 'always' ],
    'space-before-function-paren': ['error', 'never'],
    'padded-blocks': ['error', {'classes': 'never'}],
    'import/first': 0,
    'import/order': [ 'error', {
      'groups': [
        'builtin',
        'external',
        'index',
        'sibling',
        'parent',
        'internal',
      ]
    }],
    'no-debugger': 'warn',
  },
}
