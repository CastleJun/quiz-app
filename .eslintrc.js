module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {jsx: true},
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort', 'react', 'react-hooks', 'jsx-a11y', 'prettier'],
  settings: {
    react: {version: 'detect'},
    'import/parser': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    },
  },
  rules: {
    // Prettier
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    // JavaScript
    'class-methods-use-this': 'off',
    curly: ['error', 'all'],
    'no-console': ['warn', {allow: ['warn', 'error']}],
    'no-empty-function': 'off',
    'no-implicit-coercion': 'error',
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'arrow-body-style': 'off',
    // TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {selector: 'function', format: ['camelCase', 'PascalCase']},
      {selector: 'typeLike', format: ['PascalCase']},
    ],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-redeclare': ['warn', {ignoreDeclarationMerge: true}],
    '@typescript-eslint/no-unused-vars': ['warn', {ignoreRestSiblings: true}],
    '@typescript-eslint/no-use-before-define': 'off',

    'react/function-component-definition': [
      'error',
      {namedComponents: 'arrow-function', unnamedComponents: 'arrow-function'},
    ],
    'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',

    // Import
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': ['error', {devDependencies: ['**/*.config.{js,ts}']}],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    // simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};