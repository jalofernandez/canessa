import js from '@eslint/js';
import hooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['node_modules/**', 'build/**', '.react-router/**'],
  },
  {
    files: ['public/sw.js'],
    languageOptions: { globals: { self: 'readonly', caches: 'readonly' } },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { 'react-hooks': hooks },
    rules: { ...hooks.configs.recommended.rules },
  },
  {
    files: ['**/*.mjs'],
    languageOptions: {
      globals: { console: 'readonly', process: 'readonly', URL: 'readonly', Buffer: 'readonly' },
    },
  }
);
