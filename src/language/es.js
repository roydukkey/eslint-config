import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import rule from '../util/rule.js';
import stylistic from '@stylistic/eslint-plugin';

/**
 * @param {Pick<import('@typescript-eslint/parser').ParserOptions, 'tsconfigRootDir' | 'project'> } options
 * @returns {import('typescript-eslint').InfiniteDepthConfigWithExtends}
 */
export default ({ tsconfigRootDir, project = './**/tsconfig.eslint.json' }) => [
	eslint.configs.recommended,

	// Additional eslint rules
	{
		rules: {
			'curly': 'error',
			'eqeqeq': ['error', 'always'],
			'guard-for-in': 'error',
			'no-caller': 'error',
			'no-console': 'error',
			'no-eval': 'error',
			'no-fallthrough': 'off',
			'no-new-wrappers': 'error',
			'no-undef-init': 'error',
			'no-useless-concat': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'prefer-template': 'error',
		},
	},

	tseslint.configs.strictTypeChecked,
	tseslint.configs.stylisticTypeChecked,

	// Additional TypeScript rules
	{
		rules: {
			'@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],
			'@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
			'@typescript-eslint/consistent-type-assertions': ['error', {
				arrayLiteralTypeAssertions: 'never',
				objectLiteralTypeAssertions: 'never',
			}],
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/member-ordering': 'error',
			'@typescript-eslint/method-signature-style': 'error',
			// '@typescript-eslint/naming-convention': ['error', {
			// {
			// 	selector: 'default',
			// 	format: ['camelCase'],
			// 	trailingUnderscore: 'forbid'
			// },
			// {
			// 	selector: 'default',
			// 	modifiers: ['unused'],
			// 	format: ['camelCase'],
			// 	leadingUnderscore: 'require'
			// },
			// {
			// 	selector: [
			// 		'typeLike',
			// 		'enumMember'
			// 	],
			// 	format: ['PascalCase']
			// },
			// {
			// 	selector: 'property',
			// 	modifiers: ['private'],
			// 	format: ['camelCase'],
			// 	leadingUnderscore: 'require'
			// },
			// {
			// 	selector: [
			// 		'classProperty',
			// 		'objectLiteralProperty',
			// 		'typeProperty',
			// 		'classMethod',
			// 		'objectLiteralMethod',
			// 		'typeMethod',
			// 		'accessor',
			// 		'enumMember'
			// 	],
			// 	modifiers: ['requiresQuotes'],
			// 	format: null
			// },
			// {
			// 	selector: 'interface',
			// 	format: ['PascalCase'],
			// 	custom: {
			// 		regex: '^I[A-Z]',
			// 		match: false
			// 	}
			// }
			// }],
			...rule.override('no-loop-func', '@typescript-eslint/no-loop-func', 'error'),
			'@typescript-eslint/no-unnecessary-qualifier': 'error',
			'@typescript-eslint/no-unused-vars': ['error', {
				args: 'all',
				argsIgnorePattern: '^_',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				ignoreRestSiblings: true,
			}],
			'@typescript-eslint/prefer-enum-initializers': 'error',
			'@typescript-eslint/prefer-literal-enum-member': ['error', {
				allowBitwiseExpressions: true,
			}],
			'@typescript-eslint/prefer-readonly': 'error',
			'@typescript-eslint/promise-function-async': 'error',
			'@typescript-eslint/require-array-sort-compare': 'error',
		},
	},

	stylistic.configs.customize({
		flat: true,
		arrowParens: true,
		indent: 'tab',
		semi: true,
	}),

	{
		rules: {
			'@stylistic/padded-blocks': ['error', {
				classes: 'always',
			}],
		},
	},

	{
		languageOptions: {
			parserOptions: {
				project,
				projectService: true,
				tsconfigRootDir,
			},
		},
	},

	{
		files: ['**/*.?(c)js'],
		extends: [
			tseslint.configs.disableTypeChecked,
		],
	},

	{
		files: ['**/*.c@(j|t)s'],
		languageOptions: {
			sourceType: 'commonjs',
		},
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
];
