import eslintJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import jestPlugin from 'eslint-plugin-jest';

export default tseslint.config(
  // Base JS configuration
  {
    files: ['**/*.js'],
    ...eslintJs.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    ignores: ['**/node_modules/**', '**/dist/**', 'eslint.config.mjs'],
  },

  // TypeScript configuration
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.jest, // Add Jest globals
      },
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      jest: jestPlugin, // Add Jest plugin
    },
    rules: {
      '@typescript-eslint/no-unsafe-call': 'warn', // Adjust as needed
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
    },
  },

  // Jest-specific rules
  {
    files: ['**/*.spec.ts', '**/*.test.ts'],
    ...jestPlugin.configs.recommended,
  }
);