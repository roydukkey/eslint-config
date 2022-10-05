/** @type {import('eslint').Linter.RulesRecord} */
module.exports = {
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
	'comma-dangle': ['error', 'never'],
	curly: 'error',
	'key-spacing': 'error',
	'lines-between-class-members': ['error', 'always', {
		exceptAfterSingleLine: true
	}],
	'new-parens': 'error',
	'no-empty': ['error', {
		allowEmptyCatch: true
	}],
	'no-useless-concat': 'error',
	'object-curly-spacing': ['error', 'always'],
	'padded-blocks': ['error', {
		classes: 'always'
	}],
	'prefer-template': 'error',
	'quote-props': ['error', 'as-needed'],
	quotes: 'off',
	'@typescript-eslint/quotes': ['error', 'single'],
	'space-before-function-paren': 'off',
	'@typescript-eslint/space-before-function-paren': 'error',
	semi: 'off',
	'@typescript-eslint/semi': 'error',
	'sort-imports': ['error', {
		allowSeparatedGroups: true,
		ignoreCase: false,
		ignoreDeclarationSort: false,
		ignoreMemberSort: false,
		memberSyntaxSortOrder: ['single', 'multiple', 'all', 'none']
	}],
	'space-before-blocks': ['error', 'always'],
	'@typescript-eslint/type-annotation-spacing': 'error'
};
