const { configs } = require('@typescript-eslint/eslint-plugin');
const { transformWarningsToErrors } = require('./util/transformRuleSet.cjs');

/** @type {import('eslint').Linter.Config} */
module.exports = {

	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:@typescript-eslint/strict'
	],

	plugins: [
		'eslint-plugin-tsdoc'
	],

	parserOptions: {
		tsconfigRootDir: process.cwd(),
		project: './**/tsconfig.eslint.json'
	},

	ignorePatterns: [
		'dist'
	],

	rules: {
		// Overrides '@typescript-eslint/recommended'
		...transformWarningsToErrors(configs.recommended.rules),

		// Overrides '@typescript-eslint/recommended-requiring-type-checking'
		'@typescript-eslint/restrict-template-expressions': 'off',

		// Overrides 'plugin:@typescript-eslint/strict'
		...transformWarningsToErrors(configs.strict.rules),
		'@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
		'@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],
		'@typescript-eslint/consistent-type-assertions': ['error', {
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'never'
		}],
		'@typescript-eslint/consistent-type-imports': 'error',

		// New
		'@typescript-eslint/member-delimiter-style': 'error',
		...require('./typescript-eslint/member-ordering.cjs'),
		'@typescript-eslint/method-signature-style': 'error',
		...require('./typescript-eslint/naming-convention.cjs'),
		'no-extra-parens': 'off',
		'@typescript-eslint/no-extra-parens': 'error',
		'no-loop-func': 'off',
		'@typescript-eslint/no-loop-func': 'error',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-this-alias': ['error', {
			allowDestructuring: true
		}],
		'@typescript-eslint/no-type-alias': ['error', {
			allowAliases: 'in-unions-and-intersections',
			allowConditionalTypes: 'always'
		}],
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/prefer-enum-initializers': 'error',
		'@typescript-eslint/prefer-literal-enum-member': ['error', {
			allowBitwiseExpressions: true
		}],
		'@typescript-eslint/prefer-readonly': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/require-array-sort-compare': 'error',
		'no-invalid-this': 'off',
		'@typescript-eslint/no-invalid-this': 'warn',

		// Formatting
		...require('./formatting.cjs')
	},

	overrides: [
		{
			files: ['*.?(c)js'],
			rules: {
				// Overrides '@typescript-eslint/recommended-requiring-type-checking'
				'@typescript-eslint/no-unsafe-argument': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-unsafe-return': 'off'
			}
		},
		{
			files: ['*.c{j,t}s'],
			rules: {
				// Overrides '@typescript-eslint/recommended'
				'@typescript-eslint/no-var-requires': 'off',

				// New
				'@typescript-eslint/no-require-imports': 'off'
			}
		},
		{
			files: ['*.ts?(x)', '*.{m,c}ts'],
			rules: {
				// New
				'@typescript-eslint/explicit-function-return-type': 'error',
				'@typescript-eslint/explicit-member-accessibility': ['error', {
					accessibility: 'no-public'
				}],
				'@typescript-eslint/explicit-module-boundary-types': ['error'],

				// Documentation
				'tsdoc/syntax': 'warn'
			}
		}
	]
};
