module.exports = {

	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './**/tsconfig.json'
	},

	plugins: [
		'@typescript-eslint',
		'eslint-plugin-tsdoc'
	],

	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],

	rules: {
		'@typescript-eslint/array-type': ['error', {
			default: 'array-simple'
		}],
		'@typescript-eslint/class-literal-property-style': ['error', 'getters'],
		'@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
		'@typescript-eslint/consistent-type-assertions': ['error', {
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'never'
		}],
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/member-delimiter-style': 'error',
		'@typescript-eslint/member-ordering': ['error', {
			default: {
				memberTypes: [
					'signature',
					'public-static-field',
					'protected-static-field',
					'private-static-field',
					'public-abstract-field',
					'public-instance-field',
					'protected-abstract-field',
					'protected-instance-field',
					'private-abstract-field',
					'private-instance-field',
					'public-field',
					'protected-field',
					'private-field',
					'static-field',
					'abstract-field',
					'instance-field',
					'field',
					'public-constructor',
					'protected-constructor',
					'private-constructor',
					'constructor',
					'public-abstract-method',
					'public-instance-method',
					'protected-abstract-method',
					'protected-instance-method',
					'private-abstract-method',
					'private-instance-method',
					'public-method',
					'protected-method',
					'private-method',
					'public-static-method',
					'protected-static-method',
					'private-static-method',
					'abstract-method',
					'instance-method',
					'static-method',
					'method'
				]
			}
		}],
		'@typescript-eslint/method-signature-style': 'error',
		'@typescript-eslint/naming-convention': ['error', {
			selector: 'default',
			format: ['camelCase']
		}, {
			selector: 'default',
			modifiers: ['unused'],
			format: ['camelCase'],
			leadingUnderscore: 'require'
		}, {
			selector: 'typeLike',
			format: ['PascalCase']
		}, {
			selector: 'property',
			modifiers: ['private'],
			format: ['camelCase'],
			leadingUnderscore: 'require'
		}, {
			selector: 'interface',
			format: ['PascalCase'],
			custom: {
				regex: '^I[A-Z]',
				match: false
			}
		}],
		'@typescript-eslint/no-extra-parens': 'error',
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-implicit-any-catch': 'error',
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/no-loop-func': 'error',
		'@typescript-eslint/no-loss-of-precision': 'error',
		'@typescript-eslint/no-parameter-properties': 'error',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-type-alias': 'error',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-unnecessary-condition': 'error',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/prefer-enum-initializers': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-literal-enum-member': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly': 'error',
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/quotes': ['error', 'single'],
		'@typescript-eslint/require-array-sort-compare': 'error',
		'@typescript-eslint/require-await': 'error',
		'@typescript-eslint/semi': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': ['error', {
			before: true,
			after: true
		}],
		'brace-style': ['error', 'stroustrup', {
			allowSingleLine: false
		}],
		'comma-spacing': ['error', {
			before: false,
			after: true
		}],
		curly: 'error',
		'comma-dangle': ['error', 'never'],
		'key-spacing': 'error',
		'lines-between-class-members': ['error', 'always', {
			'exceptAfterSingleLine': true
		}],
		'new-parens': 'error',
		'no-extra-parens': 'off',
		'no-loop-func': 'off',
		'no-loss-of-precision': 'off',
		'no-throw-literal': 'off',
		'object-curly-spacing': ['error', 'always'],
		quotes: 'off',
		'require-await': 'off',
		semi: 'off',
		'sort-imports': ['error', {
			ignoreCase: false,
			ignoreDeclarationSort: false,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ['single', 'multiple', 'all', 'none']
		}],
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': ['error', 'always'],
		'padded-blocks': ['error', {
			classes: 'always'
		}],
		'tsdoc/syntax': 'warn'
	},

	overrides: [
		{
			files: ['*.ts', '*.tsx'],

			rules: {
				'@typescript-eslint/explicit-function-return-type': 'error',
				'@typescript-eslint/explicit-member-accessibility': ['error', {
					accessibility: 'no-public'
				}],
				'@typescript-eslint/no-invalid-this': 'error',
				'@typescript-eslint/no-var-requires': 'error',
				'no-invalid-this': 'off'
			}
		}
	]

};
