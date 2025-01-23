# ESLint Config

[![Release Version](https://img.shields.io/npm/v/@roydukkey/eslint-config.svg)](https://www.npmjs.com/package/@roydukkey/eslint-config)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Use this if you like, but I'll probably make changes and might not accept any.

## Install

Install the packages:

```bash
pnpm add --save-dev \
@roydukkey/eslint-config \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
eslint
```

### Vue

Install the optional peer dependency for linting Vue files.

```sh
pnpm add --save-dev eslint-plugin-vue
```

## Configuration

Here is an example for configuring ESLint from the `package.json` and `eslint.config.js`.

```json
{
  "script": {
    "lint": "eslint './**/*.@(?(m|c)@(j|t)s|@(j|t)sx|vue)'",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

```js
import { config } from 'typescript-eslint';
import roydukkeyConfig from '@roydukkey/eslint-config';

export default config(
  ...roydukkeyConfig({
    tsconfigRootDir: import.meta.dirname,
  }),
);

```

### TypeScript

By default, this package will _not_ use the `tsconfig.json` and instead only searches for `tsconfig.eslint.json` files. This provides better support for different monorepos.

Also, `@typescript-eslint/recommended-requiring-type-checking` is applied so don't forget to target the proper environments. For example, the following configuration targets Node:

```js
import { config } from 'typescript-eslint';
import globals from 'globals';

export default config(
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
);
```
