// eslint.config.mjs
import eslintJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

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
      parser: tseslint.parser,
      parserOptions: {
        project: true, // This will automatically find tsconfig.json
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);