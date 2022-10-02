/** @type {import('eslint').Linter.RulesRecord} */
module.exports = {
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
	]
};
