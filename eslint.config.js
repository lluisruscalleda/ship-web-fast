import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import boundaries from 'eslint-plugin-boundaries';
import importX from 'eslint-plugin-import-x';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist/**', 'node_modules/**', 'coverage/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'off',
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.test.ts', '**/*.test.tsx', 'src/test/**/*.ts', 'src/test/**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  {
    files: ['**/*.tsx'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    plugins: { 'import-x': importX },
    rules: {
      'import-x/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    plugins: { boundaries },
    settings: {
      'boundaries/elements': [
        { type: 'presentation', pattern: 'src/domains/*/presentation/**' },
        { type: 'domain', pattern: 'src/domains/*/domain/**' },
        { type: 'data', pattern: 'src/domains/*/data/**' },
        { type: 'shared', pattern: 'src/shared/**' },
        { type: 'lib', pattern: 'src/lib/**' },
      ],
      'boundaries/ignore': ['**/*.test.ts', '**/*.test.tsx', 'src/test/**', 'src/store/**', 'src/domains/*/store/**', 'src/domains/*/di/**'],
    },
    rules: {
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            { from: 'presentation', allow: ['domain', 'shared', 'lib'] },
            { from: 'domain', allow: ['shared', 'lib'] },
            { from: 'data', allow: ['domain', 'shared', 'lib'] },
            { from: 'shared', allow: ['lib'] },
          ],
        },
      ],
    },
  },
  eslintConfigPrettier
);
