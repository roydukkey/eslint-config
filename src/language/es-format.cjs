const rule = require('../util/rule.cjs');

/** @type {import('eslint').Linter.RulesRecord} */
module.exports = {
	'array-bracket-spacing': ['error'],
	'arrow-parens': ['error', 'always'],
	'arrow-spacing': ['error', {
		before: true,
		after: true
	}],
	'brace-style': ['error', 'stroustrup', {
		allowSingleLine: false
	}],
	...rule.override('comma-dangle', '@typescript-eslint/comma-dangle', ['error', 'never']),
	...rule.override('comma-spacing', '@typescript-eslint/comma-spacing', ['error', {
		before: false,
		after: true
	}]),
	curly: 'error',
	'key-spacing': 'error',
	'lines-between-class-members': ['error', 'always', {
		exceptAfterSingleLine: true
	}],
	'new-parens': 'error',
	'no-empty': ['error', {
		allowEmptyCatch: true
	}],
	...rule.override('no-extra-parens', '@typescript-eslint/no-extra-parens', 'error'),
	'no-useless-concat': 'error',
	...rule.override('object-curly-spacing', '@typescript-eslint/object-curly-spacing', ['error', 'always']),
	'padded-blocks': ['error', {
		classes: 'always'
	}],
	'prefer-template': 'error',
	'quote-props': ['error', 'as-needed'],
	...rule.override('quotes', '@typescript-eslint/quotes', ['error', 'single']),
	...rule.override('semi', '@typescript-eslint/semi', 'error'),
	...rule.override('space-before-function-paren', '@typescript-eslint/space-before-function-paren', 'error'),
	'sort-imports': ['error', {
		allowSeparatedGroups: true,
		ignoreCase: false,
		ignoreDeclarationSort: false,
		ignoreMemberSort: false,
		memberSyntaxSortOrder: ['single', 'multiple', 'all', 'none']
	}],
	...rule.override('space-before-blocks', '@typescript-eslint/space-before-blocks', 'error', 'always'),
	'space-in-parens': ['error', 'never'],
	'@typescript-eslint/member-delimiter-style': 'error',
	'@typescript-eslint/type-annotation-spacing': 'error'
};
