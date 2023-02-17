const rule = require('../util/rule.cjs');

/** @type {import('eslint').Linter.Config} */
module.exports = {

	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/strict'
	],

	rules: {
		// Additional eslint
		eqeqeq: ['error', 'always'],
		'guard-for-in': 'error',
		'no-undef-init': 'error',
		'no-useless-concat': 'error',
		'object-shorthand': 'error',

		// @typescript-eslint/recommended
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-unused-vars': 'error',

		// @typescript-eslint/strict
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/ban-tslint-comment': 'error',
		'@typescript-eslint/class-literal-property-style': 'error',
		'@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],
		'@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
		'@typescript-eslint/consistent-type-assertions': ['error', {
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'never'
		}],
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/dot-notation': 'error',
		'@typescript-eslint/no-base-to-string': 'error',
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		'@typescript-eslint/no-duplicate-enum-values': 'error',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/no-meaningless-void-operator': 'error',
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-unnecessary-condition': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/no-unsafe-declaration-merging': 'error',
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/non-nullable-type-assertion-style': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-literal-enum-member': ['error', {
			allowBitwiseExpressions: true
		}],
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-return-this-type': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/prefer-ts-expect-error': 'error',
		'@typescript-eslint/unified-signatures': 'error',

		// Additional @typescript-eslint
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/method-signature-style': 'error',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase'],
				trailingUnderscore: 'forbid'
			},
			{
				selector: 'default',
				modifiers: ['unused'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			},
			{
				selector: [
					'typeLike',
					'enumMember'
				],
				format: ['PascalCase']
			},
			{
				selector: 'property',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			},
			{
				selector: [
					'classProperty',
					'objectLiteralProperty',
					'typeProperty',
					'classMethod',
					'objectLiteralMethod',
					'typeMethod',
					'accessor',
					'enumMember'
				],
				modifiers: ['requiresQuotes'],
				format: null
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '^I[A-Z]',
					match: false
				}
			}
		],
		...rule.override('no-invalid-this', '@typescript-eslint/no-invalid-this', 'warn'),
		...rule.override('no-loop-func', '@typescript-eslint/no-loop-func', 'error'),
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
		'@typescript-eslint/prefer-readonly': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/require-array-sort-compare': 'error',

		...require('./es-format.cjs')
	},

	overrides: [
		{
			files: '*.c@(j|t)s',
			rules: {
				// @typescript-eslint/recommended
				'@typescript-eslint/no-var-requires': 'off',

				// Additional @typescript-eslint
				'@typescript-eslint/no-require-imports': 'off'
			}
		},
		{
			files: ['*.ts?(x)', '*.@(m|c)ts'],
			plugins: [
				'eslint-plugin-tsdoc'
			],
			extends: 'plugin:@typescript-eslint/recommended-requiring-type-checking',
			rules: {
				// Additional @typescript-eslint
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
