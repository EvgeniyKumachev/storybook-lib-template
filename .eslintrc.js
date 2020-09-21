module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'prettier/@typescript-eslint','plugin:prettier/recommended'
],
  plugins: [
    'react',
    'simple-import-sort',
    'prettier',
    'import',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    'simple-import-sort/sort': [
      'error',
      {
        groups: [
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],

          ['^(@app)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],

          // Other relative imports. Put same-folder imports and `.` last.
          [
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
          ],

          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'sort-imports': 'off',
  },
}
