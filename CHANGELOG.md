# Changelog

<!-- The order of list items should be: Critical/Fixes, New, Update, Remove, Underpinnings -->
<!-- ## [UNRELEASED](https://github.com/roydukkey/eslint-config/compare/v2.0.4...master) -->

## [2.0.4](https://github.com/roydukkey/eslint-config/compare/v2.0.3...v2.0.4)

* Only apply `recommended-requiring-type-checking` to `*.ts?(x)` and `*.{m,c}ts`
* Revert `sort-imports` member syntax sort order to v1 configuration

## [2.0.3](https://github.com/roydukkey/eslint-config/compare/v2.0.2...v2.0.3)

* Disable `@typescript-eslint/no-unsafe-call` for javascript files

## [2.0.2](https://github.com/roydukkey/eslint-config/compare/v2.0.1...v2.0.2)

* Add default `ignorePatterns` to target "dist"

## [2.0.1](https://github.com/roydukkey/eslint-config/compare/v2.0.0...v2.0.1)

* Fix incorrect engine requirements

## [2.0.0](https://github.com/roydukkey/eslint-config/compare/v1.0.13...v2.0.0)

* Entire restructure and reevaluation of the applied rules and options

## [1.0.13](https://github.com/roydukkey/eslint-config/compare/v1.0.12...v1.0.13)

* Update `parserOptions` to seek sub-extension configs (e.g. `tsconfig.eslint.json`)

## [1.0.12](https://github.com/roydukkey/eslint-config/compare/v1.0.11...v1.0.12)

* Allow empty catch for `no-empty`

## [1.0.11](https://github.com/roydukkey/eslint-config/compare/v1.0.10...v1.0.11)

* Remove extending redundancies

## [1.0.10](https://github.com/roydukkey/eslint-config/compare/v1.0.9...v1.0.10)

* Configure Enum member naming convention to pascal case
* Allow bitwise expressions in Enums

## [1.0.9](https://github.com/roydukkey/eslint-config/compare/v1.0.8...v1.0.9)

* Add support for `prefer-template`
* Update `no-useless-concat` from `'warn'` to `'error'`
* Simplify override files pattern

## [1.0.8](https://github.com/roydukkey/eslint-config/compare/v1.0.7...v1.0.8)

* Add TypeScript support for `space-before-function-paren`
* Update to allow aliases in unions and intersections for `@typescript-eslint/no-type-alias`

## [1.0.7](https://github.com/roydukkey/eslint-config/compare/v1.0.6...v1.0.7)

* Fix conditional types configuration for `@typescript-eslint/no-type-alias`

## [1.0.6](https://github.com/roydukkey/eslint-config/compare/v1.0.5...v1.0.6)

* Update `@typescript-eslint/no-type-alias` to allow conditional types

## [1.0.5](https://github.com/roydukkey/eslint-config/compare/v1.0.4...v1.0.5)

* Move `@typescript-eslint/explicit-module-boundary-types` to TS override

## [1.0.4](https://github.com/roydukkey/eslint-config/compare/v1.0.3...v1.0.4)

* Update `@typescript-eslint/member-ordering`

## [1.0.3](https://github.com/roydukkey/eslint-config/compare/v1.0.2...v1.0.3)

* Update `@typescript-eslint/no-this-alias` to allow destructuring

## [1.0.2](https://github.com/roydukkey/eslint-config/compare/v1.0.1...v1.0.2)

* Turn off `@typescript-eslint/prefer-function-type`

## [1.0.1](https://github.com/roydukkey/eslint-config/compare/v1.0.0...v1.0.1)

* Move `no-invalid-this` and `@typescript-eslint/no-invalid-this` to TS override

## 1.0.0

* Initial release!
