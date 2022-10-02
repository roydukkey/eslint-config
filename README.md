# eslint-config

[![Release Version](https://img.shields.io/npm/v/@roydukkey/eslint-config.svg)](https://www.npmjs.com/package/@roydukkey/eslint-config)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Use this if you like, but I'll probably make changes and might not accept any.

## Install

Install the packages:

```bash
yarn add --dev \
@roydukkey/eslint-config \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
eslint \
eslint-plugin-tsdoc
```

## Configuration

```json
"eslintConfig": {
  "extends": [
    "@roydukkey/eslint-config"
  ]
}
```

## TypeScript Configuration

That this package will not use the `tsconfig.json` and instead [only searches for `tsconfig.eslint.json`](https://github.com/roydukkey/eslint-config/blob/master/src/index.cjs#L20) files. This provides better support for different monorepos. You can read more about this on [typescript-eslint.io](https://typescript-eslint.io/docs/linting/typed-linting/monorepos).

Also, `@typescript-eslint/recommended-requiring-type-checking` is applied so don't forget to target the proper environments. For example, the following configuration targets Node:

```json
"eslintConfig": {
  "env": {
    "node": true
  }
}
```
